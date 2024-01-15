/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import ProductDetail from "./ProductDetail";
import { Flex } from "@aws-amplify/ui-react";
export default function HouseDetails(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { HouseDetails38464738: {}, HouseDetails: {} },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "HouseDetails")}
      {...rest}
    >
      <ProductDetail
        display="flex"
        gap="24px"
        direction="row"
        width="1440px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="20px 20px 20px 20px"
        backgroundColor="rgba(233,249,252,1)"
        {...getOverrideProps(overrides, "HouseDetails38464738")}
      ></ProductDetail>
    </Flex>
  );
}
