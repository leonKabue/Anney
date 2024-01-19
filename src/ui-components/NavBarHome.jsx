/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
import { Menu, MenuItem, Divider} from '@aws-amplify/ui-react';
import MyIcon from "./MyIcon";
export default function NavBarHome(props) {
  const { overrides, ...rest } = props;
  const imageThreeEightFourSixFourTwoTwoOneOnClick = useNavigateAction({
    type: "url",
    url: "",
  });
  const buttonOnClick = useNavigateAction({ type: "url", url: "" });
  return (
    <Flex
      gap="40px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBarHome")}
      {...rest}
    >
      <Image
        width="45px"
        height="45px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="contain"
        {...getOverrideProps(overrides, "image38464215")}
      ></Image>
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32138464216")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(4,125,149,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Welcome"
          {...getOverrideProps(overrides, "Welcome")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(4,125,149,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Listings"
          {...getOverrideProps(overrides, "Listings")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(4,125,149,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Market"
          {...getOverrideProps(overrides, "Market")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32138464219")}
      >
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="notification"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
        <Menu
          trigger={
              <Image
                width="45px"
                height="45px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                borderRadius="160px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                onClick={() => {
                  imageThreeEightFourSixFourTwoTwoOneOnClick();
                }}
                {...getOverrideProps(overrides, "image38464221")}
              ></Image>
          }
          {...getOverrideProps(overrides, "menu")}
        >
          <MenuItem {...getOverrideProps(overrides, "bookings")}>Your Bookings</MenuItem>
          <MenuItem {...getOverrideProps(overrides, "listings")}>Your Listings</MenuItem>
          <MenuItem {...getOverrideProps(overrides, "addListing")}>Add Listing</MenuItem>
          <MenuItem {...getOverrideProps(overrides, "postItem")}>Post Item</MenuItem>
          <Divider {...getOverrideProps(overrides, "divider")} />
          <MenuItem {...getOverrideProps(overrides, "notifications")}>Notifications</MenuItem>
          <MenuItem {...getOverrideProps(overrides, "profile")}>Profile</MenuItem>
          <Divider {...getOverrideProps(overrides, "divider")} />
          <MenuItem {...getOverrideProps(overrides, "signOut")}>Sign Out</MenuItem>
          
          
        </Menu >
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "actions")}
        >
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Log in"
            onClick={() => {
              buttonOnClick();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
