import * as React from "react";
import { Button, Flex, Grid, TextField, TextAreaField, useTheme } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createListing } from "../graphql/mutations";
import DateRangePicker from "../ui-components/DateRangePicker"

import ImageUploader from "./ImageUploader";

const client = generateClient();

export default function ListingCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    Location: "",
    HouseInfo: "",
    DurationRequired: "",
    Pictures: "",
    Price: "",
  };


  const [Location, setLocation] = React.useState(initialValues.Location);
  const [HouseInfo, setHouseInfo] = React.useState(initialValues.HouseInfo);
  const [DurationRequired, setDurationRequired] = React.useState(
    initialValues.DurationRequired
  );
  const [Pictures, setPictures] = React.useState(initialValues.Pictures);
  const [Price, setPrice] = React.useState(initialValues.Price);
  const [errors, setErrors] = React.useState({});


  const resetStateValues = () => {
    setLocation(initialValues.Location);
    setHouseInfo(initialValues.HouseInfo);
    setDurationRequired(initialValues.DurationRequired);
    setPictures(initialValues.Pictures);
    setPrice(initialValues.Price);
    setErrors({});
  };

  const validations = {
    Location: [{ type: "Required" }],
    HouseInfo: [{ type: "Required" }],
    DurationRequired: [{ type: "Required" }],
    Pictures: [{ type: "Required" }, { type: "URL" }],
    Price: [{ type: "Required" }],
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
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };

  const MainHouseFeatures = "Fully equipped kitchen with appliances (oven, fridge, microwave).\nIn-unit laundry (washer and dryer).\nHeating and air conditioning.\nHigh-speed internet/Wi-Fi.\nCloset or wardrobe space.\nWork/study desk.\nSmoke detectors and carbon monoxide detectors.\nShower and/or bathtub\n";
  
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="5px"
      padding={tokens.space.medium.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Location,
          HouseInfo,
          DurationRequired,
          Pictures,
          Price,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createListing.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
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
        placeholder="Single room in a 3 bedroom apartment"
        isRequired={true}
        isReadOnly={false}
        errorMessage={"Required"}
        hasError={false}
        onBlur={() => {
          
        }}
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
        placeholder="835th and Walnut"
        isRequired={true}
        isReadOnly={false}
        type="Text"
        {...getOverrideProps(overrides, "locationField")}
      ></TextField>

      {/* Available from */}
      <TextField
        label=
        {
          <span style={{ display: "inline-flex" }}>
            <span>Available From</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        //placeholder="835th and Walnut"
        isRequired={true}
        isReadOnly={false}
        type="date"
        {...getOverrideProps(overrides, "availableFromField")}
      ></TextField>
        
      {/* Available to */}
      <TextField
        label=
        {
          <span style={{ display: "inline-flex" }}>
            <span>Available To</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        //placeholder="835th and Walnut"
        isRequired={true}
        isReadOnly={false}
        type="date"
        {...getOverrideProps(overrides, "availableFromField")}
      ></TextField>

      <DateRangePicker labelStart="Available From" labelEnd="Available To"/>

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
        step="any"
        value={Price}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Location,
              HouseInfo,
              DurationRequired,
              Pictures,
              Price: value,
            };
            const result = onChange(modelFields);
            value = result?.Price ?? value;
          }
          if (errors.Price?.hasError) {
            runValidationTasks("Price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("Price", Price)}
        errorMessage={errors.Price?.errorMessage}
        hasError={errors.Price?.hasError}
        {...getOverrideProps(overrides, "Price")}
      ></TextField>

      {/* Pictures */}
      <ImageUploader numImages={10} />
      {/* Tell us a bit more about your house to help perspective renters */}


      {/* title */}
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Title</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        descriptiveText="Catch potential renters' attention with a unique and factual title"
        placeholder="Stylish Single Room in 3 Bedroom Apt Near Center City"
        isRequired={true}
        isReadOnly={false}

        {...getOverrideProps(overrides, "TitleTextField")}
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
        descriptiveText="What would you like the guests to know"
        placeholder="Step into this charming, updated 2-bedroom city apartment with a spacious layout and modern amenities. Hardwood floors, a fully-equipped kitchen with stainless steel appliances, and a cozy living space await you, complemented by serene views and abundant natural light. With comfortable queen beds, ample storage, and a dedicated work area, this urban haven combines the tranquility of home with the convenience of city living—complete with building security, laundry facilities, and private parking, all just a short walk from public transport and city buzz. Ready for your personal touch, this apartment is the perfect canvas for your new beginning."
        rows = {7}

        {...getOverrideProps(overrides, "AboutPlaceTextAreaField")}
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
        placeholder="Located just a 10-minute walk from the vibrant University District, this property positions you perfectly for both academic focus and leisure. Enjoy the ease of access to campus libraries, lecture halls, and study groups without compromising on a quick trip to your favorite coffee shop or local eatery. For those nights out or cultural immersions, the neighborhood theater and art scene are just around the corner."
        rows = {4}

        {...getOverrideProps(overrides, "LocationInfoTextAreaField")}
      ></TextAreaField>
      
      {/* House Features */}
      <TextAreaField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>House Features</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        descriptiveText="What features does your house?"
        placeholder={MainHouseFeatures}
        rows = {8}

        {...getOverrideProps(overrides, "AboutPlaceTextAreaField")}
      ></TextAreaField>


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
        rows = {4}

        {...getOverrideProps(overrides, "AboutPlaceTextAreaField")}
      ></TextAreaField>


      

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
