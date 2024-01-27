import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  View,
  TextField,
  TextAreaField,
  Label,
  CheckboxField,
  useTheme,
  Text,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createListing } from "../graphql/mutations";

import DateRangePicker from "../ui-components/DateRangePicker";
import ImageUpload from "./ImageUpload";
import dayjs from "dayjs";

const client = generateClient();

async function createNewListing(listingData) {
  const newListing = await client.graphql({
    query: createListing,
    variables: {
      input: listingData,
    },
  });

  return newListing.data.createListing;
}

export default function ListingCreateForm(props) {
  const { tokens } = useTheme();

  const errorBorderColor = tokens.colors.border.error.value;
  const borderColor = tokens.colors.border.primary.value;

  const today = dayjs();

  const initialListing = {
    title: "",
    aboutPlace: "",
    space: "",
    location: "",
    locationInfo: "",
    availableFrom: today,
    availableTo: today,
    features: [],
    monthlyCost: "",
    pictures: [],
    additionalInfo: "",
  };

  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    profile,
    user,
    ...rest
  } = props;

  const [title, setTitle] = React.useState(initialListing.title);
  const [aboutPlace, setAboutPlace] = React.useState(initialListing.aboutPlace);
  const [space, setSpace] = React.useState(initialListing.space);
  const [location, setLocation] = React.useState(initialListing.location);
  const [locationInfo, setLocationInfo] = React.useState(
    initialListing.locationInfo
  );
  const [availableFrom, setAvailableFrom] = React.useState(
    initialListing.availableFrom
  );
  const [availableTo, setAvailableTo] = React.useState(
    initialListing.availableTo
  );
  const [features, setFeatures] = React.useState(initialListing.features);
  const [monthlyCost, setMonthlyCost] = React.useState(
    initialListing.monthlyCost
  );
  const [pictures, setPictures] = React.useState(initialListing.pictures);
  const [additionalInfo, setAdditionalInfo] = React.useState(
    initialListing.additionalInfo
  );
  const [listing, setListing] = React.useState(null);

  const [errors, setErrors] = React.useState({});
  const [availableError, setAvailableError] = React.useState(false);

  const [featuresChecked, setFeaturesChecked] = React.useState(
    Array(8).fill(true)
  );

  const [clearFiles, setClearFiles] = React.useState(false);
  const [resetFiles, setResetFiles] = React.useState(false);

  const resetStateValues = () => {
    setTitle(initialListing.title);
    setAboutPlace(initialListing.aboutPlace);
    setSpace(initialListing.space);
    setLocation(initialListing.location);
    setLocationInfo(initialListing.locationInfo);
    setAvailableFrom(initialListing.availableFrom);
    setAvailableTo(initialListing.availableTo);
    setFeatures(initialListing.features);
    setMonthlyCost(initialListing.monthlyCost);
    setPictures(initialListing.pictures);
    setAdditionalInfo(initialListing.additionalInfo);
    setFeaturesChecked(Array(8).fill(false));
    setErrors({});
  };

  const validations = {
    title: [{ type: "Required" }],
    aboutPlace: [{ type: "Required" }],
    space: [{ type: "Required" }],
    location: [{ type: "Required" }],
    locationInfo: [{ type: "Required" }],
    monthlyCost: [
      { type: "Required" },
      { type: "GreaterThanNum", numValues: [100] },
    ],
  };

  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({
      ...errors,
      [fieldName]: validationResponse,
    }));

    return validationResponse;
  };

  const MainHouseFeatures =
    "Fully equipped kitchen with appliances (oven, fridge, microwave).\nIn-unit laundry (washer and dryer).\nHeating and air conditioning.\nHigh-speed internet/Wi-Fi.\nCloset or wardrobe space.\nWork/study desk.\nSmoke detectors and carbon monoxide detectors.\nShower and/or bathtub\n";

  const HouseFeatures = [
    "Fully equipped kitchen with appliances (oven, fridge, microwave).\n",
    "In-unit laundry (washer and dryer).\n",
    "Heating and air conditioning.\n",
    "High-speed internet/Wi-Fi.\n",
    "Closet or wardrobe space.\n",
    "Work/study desk.\n",
    "Smoke detectors and carbon monoxide detectors.\n",
    "Shower and/or bathtub\n",
  ];

  const getFeatures = () => {
    const housefeatures = featuresChecked
      .map((value, index) => (value === true ? HouseFeatures[index] : ""))
      .filter((feature) => feature !== "");
    setFeatures(housefeatures);
  };

  const isIndeterminate = () => {
    return featuresChecked.some(Boolean) && !featuresChecked.every(Boolean);
  };

  React.useEffect(() => {
    console.log("Location", location);
  }, [location]);

  React.useEffect(() => {
    getFeatures();
  }, [featuresChecked, setFeaturesChecked]);

  React.useEffect(() => {
    console.log("Pictures", pictures);
    setErrors((errors) => ({
      ...errors,
      ...(pictures.length === 0
        ? {
            pictures: {
              hasError: true,
              errorMessage: "Please  add some house pictures",
            },
          }
        : { pictures: { hasError: false } }),
    }));
  }, [pictures]);

  React.useEffect(() => {
    setErrors((errors) => ({
      ...errors,
      ...(availableError || availableFrom === null || availableTo === null
        ? {
            available: {
              hasError: true,
              errorMessage: "Please select valid availability dates",
            },
          }
        : { available: { hasError: false } }),
    }));
  }, [availableError, availableFrom, availableTo]);

  React.useEffect(() => {
    setErrors((errors) => ({
      ...errors,
      ...(features.length === 0
        ? {
            features: {
              hasError: true,
              errorMessage: "Please select some house features",
            },
          }
        : { features: { hasError: false } }),
    }));
  }, [features]);

  React.useEffect(() => {
    console.log("Listing", listing);
  }, [listing]);

  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="5px"
      padding={tokens.space.medium.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          location,
          locationInfo,
          space,
          aboutPlace,
          availableFrom,
          availableTo,
          features,
          monthlyCost,
          pictures,
        };

        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }

        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });

          const newListing = await createNewListing({
            title: title,
            aboutPlace: aboutPlace,
            space: space,
            location: location,
            locationInfo: locationInfo,
            availableFrom: availableFrom.format("YYYY-MM-DD"),
            availableTo: availableTo.format("YYYY-MM-DD"),
            features: features,
            monthlyCost: monthlyCost,
            pictures: pictures,
            additionalInfo: additionalInfo,
            userID: user.id,
          });

          setListing(newListing);

          console.log("submit");

          if (onSuccess) {
            onSuccess(modelFields);
          }

          if (clearOnSuccess) {
            resetStateValues();
            setResetFiles(true);
          }
        } catch (err) {
          console.log("Errored", err);
          resetStateValues();
          setResetFiles(true);
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ListingCreateForm")}
      {...rest}
    >
      {/* space */}
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Space</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        type="Text"
        placeholder="Single room in a 3 bedroom apartment"
        isRequired={true}
        isReadOnly={false}
        errorMessage={errors.space?.errorMessage}
        hasError={errors.space?.hasError}
        value={space}
        onChange={(e) => {
          let value = e.target.value;

          if (errors.space?.hasError) {
            runValidationTasks("space", value);
          }
          setSpace(value);
        }}
        onBlur={() => runValidationTasks("space", space)}
        {...getOverrideProps(overrides, "Space")}
      ></TextField>

      {/* location */}
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Location</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        type="Text"
        placeholder="845th and Walnut"
        isRequired={true}
        isReadOnly={false}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        value={location}
        onChange={(e) => {
          let value = e.target.value;

          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        {...getOverrideProps(overrides, "Location")}
      ></TextField>

      {/* Available from and Available to*/}
      <Label>
        <span style={{ display: "inline-flex" }}>
          <span>Availablity</span>
          <span style={{ color: "red" }}>*</span>
        </span>
      </Label>
      <DateRangePicker
        labelStart="Available From"
        labelEnd="Available To"
        errorStart={true}
        errorEnd={true}
        setStart={setAvailableFrom}
        setEnd={setAvailableTo}
        setError={setAvailableError}
      />
      {errors.available?.hasError ? (
        <Text variation="error" fontSize={"14px"}>
          {errors.available.errorMessage}
        </Text>
      ) : null}

      {/* Monthly cost */}
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Monthly Cost</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        placeholder="$500 per month"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="50"
        value={monthlyCost}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              location,
              locationInfo,
              space,
              aboutPlace,
              availableFrom,
              availableTo,
              features,
              monthlyCost: value,
              pictures,
            };
            const result = onChange(modelFields);
            value = result?.monthlyCost ?? value;
          }

          if (errors.monthlyCost?.hasError) {
            runValidationTasks("monthlyCost", value);
          }
          setMonthlyCost(value);
        }}
        onBlur={() => runValidationTasks("monthlyCost", monthlyCost)}
        errorMessage={errors.monthlyCost?.errorMessage}
        hasError={errors.monthlyCost?.hasError}
        {...getOverrideProps(overrides, "monthlyCost")}
      ></TextField>

      {/* Pictures */}
      <Label htmlFor={"Uploader"}>
        <span style={{ display: "inline-flex" }}>
          <span>Pictures</span>
          <span style={{ color: "red" }}>*</span>
        </span>
      </Label>
      <ImageUpload
        id={"Uploader"}
        numImages={10}
        setPictures={setPictures}
        profile={props.profile}
        clearFiles={clearFiles}
        setClearFiles={setClearFiles}
        resetFiles={resetFiles}
        setResetFiles={setResetFiles}
      />
      {errors.pictures?.hasError ? (
        <Text variation="error" fontSize={"0.875rem"}>
          {errors.pictures.errorMessage}
        </Text>
      ) : null}

      {/* Tell us a bit more about your house to help perspective renters */}
      {/* title */}
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Title</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        descriptiveText="Catch potential guests' attention with a unique and factual title"
        placeholder="Stylish Single Room in 3 Bedroom Apt Near Center City"
        isRequired={true}
        isReadOnly={false}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        value={title}
        onChange={(e) => {
          let value = e.target.value;

          if (onChange) {
            const modelFields = {
              title: value,
              location,
              locationInfo,
              space,
              aboutPlace,
              availableFrom,
              availableTo,
              features,
              monthlyCost,
              pictures,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }

          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        {...getOverrideProps(overrides, "TitleText")}
      ></TextField>

      {/* about place */}
      <TextAreaField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>About Place</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        descriptiveText="Tell potential guest a bit about your place"
        placeholder={
          "For Example:\nStep into this charming, updated 2-bedroom city apartment with a spacious layout and modern amenities. Hardwood floors, a fully-equipped kitchen with stainless steel appliances, and a cozy living space await you, complemented by serene views and abundant natural light. With comfortable queen beds, ample storage, and a dedicated work area, this urban haven combines the tranquility of home with the convenience of city living—complete with building security, laundry facilities, and private parking, all just a short walk from public transport and city buzz. Ready for your personal touch, this apartment is the perfect canvas for your new beginning."
        }
        rows={8}
        errorMessage={errors.aboutPlace?.errorMessage}
        hasError={errors.aboutPlace?.hasError}
        value={aboutPlace}
        onChange={(e) => {
          let value = e.target.value;

          if (onChange) {
            const modelFields = {
              title,
              location,
              locationInfo,
              space,
              aboutPlace: value,
              availableFrom,
              availableTo,
              features,
              monthlyCost,
              pictures,
            };
            const result = onChange(modelFields);
            value = result?.aboutPlace ?? value;
          }

          if (errors.aboutPlace?.hasError) {
            runValidationTasks("aboutPlace", value);
          }
          setAboutPlace(value);
        }}
        onBlur={() => runValidationTasks("aboutPlace", aboutPlace)}
        {...getOverrideProps(overrides, "AboutPlaceTextArea")}
      ></TextAreaField>

      {/* location info */}
      <TextAreaField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Location Information</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        descriptiveText="How would you describe the location of your house"
        placeholder={
          "For Example:\nLocated just a 10-minute walk from the vibrant University District, this property positions you perfectly for both academic focus and leisure. Enjoy the ease of access to campus libraries, lecture halls, and study groups without compromising on a quick trip to your favorite coffee shop or local eatery. For those nights out or cultural immersions, the neighborhood theater and art scene are just around the corner."
        }
        rows={5}
        errorMessage={errors.locationInfo?.errorMessage}
        hasError={errors.locationInfo?.hasError}
        value={locationInfo}
        onChange={(e) => {
          let value = e.target.value;

          if (onChange) {
            const modelFields = {
              title,
              location,
              locationInfo: value,
              space,
              aboutPlace,
              availableFrom,
              availableTo,
              features,
              monthlyCost,
              pictures,
            };
            const result = onChange(modelFields);
            value = result?.locationInfo ?? value;
          }

          if (errors.locationInfo?.hasError) {
            runValidationTasks("locationInfo", value);
          }
          setLocationInfo(value);
        }}
        onBlur={() => runValidationTasks("locationInfo", locationInfo)}
        {...getOverrideProps(overrides, "LocationInfoTextArea")}
      ></TextAreaField>

      {/* House Features */}
      <CheckboxField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>House Features</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        name={"All Features"}
        isIndeterminate={isIndeterminate()}
        checked={featuresChecked.every(Boolean)}
        labelPosition="start"
        onChange={(e) => {
          let checked = e.target.checked;
          if (isIndeterminate() === true || checked === true) {
            setFeaturesChecked(Array(8).fill(true));
          } else {
            setFeaturesChecked(Array(8).fill(false));
          }
        }}
      />
      <Flex
        id={"Features"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"flex-start"}
        position={"relative"}
        height={"auto"}
        direction={"column"}
        padding={"2px 10px 2px 10px"}
        gap="0px"
        style={{
          border: errors.features?.hasError
            ? `1px solid ${errorBorderColor}`
            : `1px solid ${borderColor}`,
          borderRadius: "4px",
        }}
      >
        <View paddingLeft={"10px"} paddingTop={"0px"}>
          <CheckboxField
            label={HouseFeatures[0]}
            name={HouseFeatures[0]}
            checked={featuresChecked[0]}
            onChange={(e) => {
              let checked = e.target.checked;
              const newFeaturesChecked = featuresChecked.map((value, index) =>
                index === 0 ? checked : value
              );
              setFeaturesChecked(newFeaturesChecked);
            }}
          />
          <CheckboxField
            label={HouseFeatures[1]}
            name={HouseFeatures[1]}
            checked={featuresChecked[1]}
            onChange={(e) => {
              let checked = e.target.checked;
              const newFeaturesChecked = featuresChecked.map((value, index) =>
                index === 1 ? checked : value
              );
              setFeaturesChecked(newFeaturesChecked);
            }}
          />
          <CheckboxField
            label={HouseFeatures[2]}
            name={HouseFeatures[2]}
            checked={featuresChecked[2]}
            onChange={(e) => {
              let checked = e.target.checked;
              const newFeaturesChecked = featuresChecked.map((value, index) =>
                index === 2 ? checked : value
              );
              setFeaturesChecked(newFeaturesChecked);
            }}
          />
          <CheckboxField
            label={HouseFeatures[3]}
            name={HouseFeatures[3]}
            checked={featuresChecked[3]}
            onChange={(e) => {
              let checked = e.target.checked;
              const newFeaturesChecked = featuresChecked.map((value, index) =>
                index === 3 ? checked : value
              );
              setFeaturesChecked(newFeaturesChecked);
            }}
          />
          <CheckboxField
            label={HouseFeatures[4]}
            name={HouseFeatures[4]}
            checked={featuresChecked[4]}
            onChange={(e) => {
              let checked = e.target.checked;
              const newFeaturesChecked = featuresChecked.map((value, index) =>
                index === 4 ? checked : value
              );
              setFeaturesChecked(newFeaturesChecked);
            }}
          />
          <CheckboxField
            label={HouseFeatures[5]}
            name={HouseFeatures[5]}
            checked={featuresChecked[5]}
            onChange={(e) => {
              let checked = e.target.checked;
              const newFeaturesChecked = featuresChecked.map((value, index) =>
                index === 5 ? checked : value
              );
              setFeaturesChecked(newFeaturesChecked);
              if (errors.features?.hasError) {
                runValidationTasks("features", features);
              }
            }}
          />
          <CheckboxField
            label={HouseFeatures[6]}
            name={HouseFeatures[6]}
            checked={featuresChecked[6]}
            onChange={(e) => {
              let checked = e.target.checked;
              const newFeaturesChecked = featuresChecked.map((value, index) =>
                index === 6 ? checked : value
              );
              setFeaturesChecked(newFeaturesChecked);
            }}
          />
          <CheckboxField
            label={HouseFeatures[7]}
            name={HouseFeatures[7]}
            checked={featuresChecked[7]}
            onChange={(e) => {
              let checked = e.target.checked;
              const newFeaturesChecked = featuresChecked.map((value, index) =>
                index === 7 ? checked : value
              );
              setFeaturesChecked(newFeaturesChecked);
            }}
          />
        </View>
      </Flex>
      {errors.features?.hasError ? (
        <Text variation="error" fontSize={"0.875rem"}>
          {errors.features.errorMessage}
        </Text>
      ) : null}

      {/* additional info */}
      <TextAreaField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Additional Information</span>
          </span>
        }
        isRequired={false}
        isReadOnly={false}
        descriptiveText="Anything else you would like guests to know?"
        rows={4}
        {...getOverrideProps(overrides, "AdditionalInfoTextArea")}
      ></TextAreaField>

      {/* Buttons */}
      <Flex
        justifyContent="center"
        maxHeight={"50px"}
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
            setClearFiles(true);
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
