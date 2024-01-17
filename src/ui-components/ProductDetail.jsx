/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  Divider,
  Flex,
  Image,
  Rating,
  Text,
} from "@aws-amplify/ui-react";
export default function ProductDetail(props) {
  const { overrides, ...rest } = props;

  const MainHouseFeatures = [
    "Fully equipped kitchen with appliances (oven, fridge, microwave).\n",
    "In-unit laundry (washer and dryer).\n",
    "Heating and air conditioning.\n",
    "High-speed internet/Wi-Fi.\n",
    "Closet or wardrobe space.\n",
    "Work/study desk.\n",
    "Smoke detectors and carbon monoxide detectors.\n",
    "Shower and/or bathtub\n",
  ]

  return (
    <Flex
      style={{
        margin : "65px auto 60px auto",
        backgroundImage:"linear-gradient(90deg, rgba(125,214,232,1), rgba(255,255,255,1))",
        border:"0.2px solid #000",
        borderRadius: '15px',
      }}
      width={{base:"100%", large:"88%"}}
      direction="column"
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
      position={"relative"}
      shrink="1"
      grow="1"
  >   
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="600"
        color="rgba(13,26,38,1)"
        lineHeight="30px"
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
        textDecoration="underline"
        children={"Single Room in 3 Bedroom Apt Near Center City"}
        {...getOverrideProps(overrides, "Property Header")}
        ></Text>
      <Flex
        gap="24px"
        direction="row"
        width="1160px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="relative"
        padding="20px 20px 20px 20px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ProductDetail")}
        {...rest}
      >
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center-start"
          alignItems="center"
          shrink="1"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame404")}
          order={{base:"2", large:"1"}}
        >
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame2738464673")}
          >
            <Flex
              gap="16px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Ratings")}
            >
              <Rating
                width="unset"
                height="unset"
                shrink="0"
                size="medium"
                {...getOverrideProps(overrides, "Rating")}
              ></Rating>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="16px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="center"
                //textDecoration="underline"
                width="19px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="5px 0px 5px 0px"
                whiteSpace="pre-wrap"
                children="72"
                {...getOverrideProps(overrides, "reviews")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2738464676")}
          >
            <Button
              width="unset"
              height="unset"
              shrink="0"
              size="large"
              isDisabled={false}
              variation="primary"
              children="Book"
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize={{base:"20px", large:"24px"}}
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
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
            children="$750 per month"
            {...getOverrideProps(overrides, "Price")}
          ></Text>
        </Flex>
        <Flex
          gap="32px"
          direction="column"
          width="80vw"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          position="relative"
          padding="0px 0px 0px 0px"
          order={{base:"1", large:"2"}}
          {...getOverrideProps(overrides, "Frame403")}
        >
          <Image
            width={{base: "80vw", large: "60vw"}}
            height={{base: "40vh",large:"60vh"}}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            alt="House Images"
            
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <Flex
            gap="32px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 6")}
          >
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 738464634")}
            >
              <Text
                fontFamily="Inter"
                fontSize="24px"
                fontWeight="600"
                color="rgba(13,26,38,1)"
                lineHeight="36px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="About the place"
                {...getOverrideProps(overrides, "Description")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Step into this charming, updated 2-bedroom city apartment with a spacious layout and modern amenities. Hardwood floors, a fully-equipped kitchen with stainless steel appliances, and a cozy living space await you, complemented by serene views and abundant natural light. With comfortable queen beds, ample storage, and a dedicated work area, this urban haven combines the tranquility of home with the convenience of city living—complete with building security, laundry facilities, and private parking, all just a short walk from public transport and city buzz. Ready for your personal touch, this apartment is the perfect canvas for your new beginning."
                {...getOverrideProps(
                  overrides,
                  "DescriptionText"
                )}
              ></Text>
            </Flex>
            <Divider
              width="unset"
              height="1px"
              shrink="0"
              alignSelf="stretch"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider38535165")}
            ></Divider>
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 738464638")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="600"
                color="rgba(13,26,38,1)"
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
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="House Features"
                {...getOverrideProps(overrides, "HouseFeatures")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={MainHouseFeatures}
                {...getOverrideProps(
                  overrides,
                  "HouseFeaturesText"
                )}
              ></Text>
            </Flex>
            <Divider
              width="unset"
              height="1px"
              shrink="0"
              alignSelf="stretch"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "DividerLocation")}
            ></Divider>
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "LocationInfoFrame")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="600"
                color="rgba(13,26,38,1)"
                lineHeight="20px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Location Information"
                {...getOverrideProps(overrides, "LocationInfo")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Located just a 10-minute walk from the vibrant University District, this property positions you perfectly for both academic focus and leisure. Enjoy the ease of access to campus libraries, lecture halls, and study groups without compromising on a quick trip to your favorite coffee shop or local eatery. For those nights out or cultural immersions, the neighborhood theater and art scene are just around the corner."
                {...getOverrideProps(
                  overrides,
                  "LocationInfoText"
                )}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
