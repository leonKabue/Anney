/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField, useTheme } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createListing } from "../graphql/mutations";
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
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
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Location</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={Location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Location: value,
              HouseInfo,
              DurationRequired,
              Pictures,
              Price,
            };
            const result = onChange(modelFields);
            value = result?.Location ?? value;
          }
          if (errors.Location?.hasError) {
            runValidationTasks("Location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("Location", Location)}
        errorMessage={errors.Location?.errorMessage}
        hasError={errors.Location?.hasError}
        {...getOverrideProps(overrides, "Location")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>House info</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={HouseInfo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Location,
              HouseInfo: value,
              DurationRequired,
              Pictures,
              Price,
            };
            const result = onChange(modelFields);
            value = result?.HouseInfo ?? value;
          }
          if (errors.HouseInfo?.hasError) {
            runValidationTasks("HouseInfo", value);
          }
          setHouseInfo(value);
        }}
        onBlur={() => runValidationTasks("HouseInfo", HouseInfo)}
        errorMessage={errors.HouseInfo?.errorMessage}
        hasError={errors.HouseInfo?.hasError}
        {...getOverrideProps(overrides, "HouseInfo")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Duration required</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={DurationRequired}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Location,
              HouseInfo,
              DurationRequired: value,
              Pictures,
              Price,
            };
            const result = onChange(modelFields);
            value = result?.DurationRequired ?? value;
          }
          if (errors.DurationRequired?.hasError) {
            runValidationTasks("DurationRequired", value);
          }
          setDurationRequired(value);
        }}
        onBlur={() => runValidationTasks("DurationRequired", DurationRequired)}
        errorMessage={errors.DurationRequired?.errorMessage}
        hasError={errors.DurationRequired?.hasError}
        {...getOverrideProps(overrides, "DurationRequired")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Pictures</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={Pictures}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Location,
              HouseInfo,
              DurationRequired,
              Pictures: value,
              Price,
            };
            const result = onChange(modelFields);
            value = result?.Pictures ?? value;
          }
          if (errors.Pictures?.hasError) {
            runValidationTasks("Pictures", value);
          }
          setPictures(value);
        }}
        onBlur={() => runValidationTasks("Pictures", Pictures)}
        errorMessage={errors.Pictures?.errorMessage}
        hasError={errors.Pictures?.hasError}
        {...getOverrideProps(overrides, "Pictures")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Price</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
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
      <Flex
        justifyContent="space-between"
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
