
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";

import { getUrl } from "aws-amplify/storage";


export default function ListingCard(props) {
  const { listing, overrides, ...rest } = props;

  const [pictures, setPictures] = React.useState(["../pictures_placeholder.png"]);
  const [currentPicture, setCurrentPicture] = React.useState(0)


  React.useEffect(() => {
    const getPicture = async (picture) => {
      try {
        const picURL = await getUrl({
          key: picture,
          options: {
            accessLevel: 'guest',
            validateObjectExistence: true,
          }
        });
        return picURL.url;
      } catch (error) {
        console.log("Error loading pictures: ", error)
        setPictures(["../pictures_placeholder.png"])
      }
    }
    const getAllPictures = async () => {
      const promises = listing.pictures.map(getPicture);
      const results = await Promise.all(promises)
      setPictures(results)
    }
    if  (listing.pictures.length > 0) {
      getAllPictures();
    }
    console.log(pictures)
  }, [listing.pictures])


  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(233,249,252,1)"
      {...getOverrideProps(overrides, "ListingCard")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        grow="1"
        shrink="1"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 437")}
      >
        <Image
          width="320px"
          height="230px"
          display="block"
          shrink="1"
          position="relative"
          padding="0px 0px 0px 0px"
          src={pictures[currentPicture]}
          alt={"Listing Picture"}
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        overflow="hidden"
        shrink="1"
        grow="1"
        position="relative"
        padding="0px 10px 0px 10px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="300px"
          height="230px"
          justifyContent="center"
          alignItems="flex-start"
          shrink="1"
          grow="1"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 438")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="1"
            grow="1"
            position="relative"
            padding="0px 0px 0px 0px"
            type="favorite_border"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="left"
            display="block"
            direction="column"
            shrink="1"
            grow="1"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={listing?.location}
            {...getOverrideProps(overrides, "Location")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="30px"
            gap="unset"
            alignItems="unset"
            shrink="1"
            grow="1"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={listing?.aboutPlace}
            {...getOverrideProps(overrides, "Space")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
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
            shrink="1"
            grow="1"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={"$" + listing?.monthlyCost + " per month"}
            {...getOverrideProps(overrides, "Price")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
