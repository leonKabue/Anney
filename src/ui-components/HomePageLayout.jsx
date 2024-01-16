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
  useNavigateAction,
} from "./utils";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HomePageLayout(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Eyebrow38464371: {},
        Heading38464372: {},
        Body38464373: {},
        Message38464370: {},
        HeroMessage38464303: {},
        imageHome: {},
        Button38534900: {},
        Heading38464324: {},
        Body38464325: {},
        Message38464322: {},
        HeroMessage38464321: {},
        Left: {},
        Eyebrow39103599: {},
        Heading38464450: {},
        Body38464451: {},
        Message38464448: {},
        HeroMessage38464447: {},
        imageHome2: {},
        Button38534904: {},
        Heading38464455: {},
        Body38464456: {},
        Message38464454: {},
        HeroMessage38464453: {},
        Right: {},
        HomePageLayout: {},
      },
      variantValues: { mode: "Light" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const buttonThreeEightFiveThreeFourNineZeroZeroOnClick = useNavigateAction({
    type: "url",
    url: "",
  });
  const buttonThreeEightFiveThreeFourNineZeroFourOnClick = useNavigateAction({
    type: "url",
    url: "",
  });
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1363px"
      height="1040px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundImage="linear-gradient(90deg, rgba(125,214,232,1), rgba(255,255,255,1))"
      display="flex"
      {...getOverrideProps(overrides, "HomePageLayout")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "HomePageRow")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="675px"
          height="1042px"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Left")}
        >
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="340.67px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 25px 0px"
            display="flex"
            {...getOverrideProps(overrides, "RentMessage")}
          >
            <Flex
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Message38464370")}
            >
              <Text
                fontFamily="Inria Serif"
                fontSize="20px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
                lineHeight="24px"
                textAlign="center"
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
                children="Rent"
                {...getOverrideProps(overrides, "Eyebrow38464371")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="24px"
                fontWeight="600"
                color="rgba(13,26,38,1)"
                lineHeight="30px"
                textAlign="center"
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
                children="Flexible Room Rentals for Students "
                {...getOverrideProps(overrides, "Heading38464372")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(48,64,80,1)"
                lineHeight="24px"
                textAlign="center"
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
                children="Find the perfect student rental with ease. Furnished, affordable rooms near campuses and internships, designed for safety and comfort. Book your hassle-free stay now!"
                {...getOverrideProps(overrides, "Body38464373")}
              ></Text>
            </Flex>
          </Flex>
          <Image
            width="unset"
            height="unset"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="contain"
            src="https://anney-v0-2storage-a5c08545224959-staging.s3.amazonaws.com/public/DALL%C2%B7E-2023-12-21-02.15.02---Create-a-series-of-images-for-a-modern-residential-house--showcasing-primarily-the-interior.-Include-images-of-a-stylish-living-room-with-contemporary.png?AWSAccessKeyId=ASIAV5TXPP647QEAC2JK&Expires=1703716165&Signature=LWJF9n7yWPTDrhgYJ95ZzDrrt%2FA%3D&x-amz-security-token=IQoJb3JpZ2luX2VjECYaCXVzLWVhc3QtMSJHMEUCIFh%2BvqmW3RDsN%2Br0osRCfMhb%2FG2yCCPrctfVWVOLFwrRAiEAzB4uuJ0oRszHGGZoPoqT7Hqu49CD3BQcPVNXGHQdyS0qzQQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0MDcxOTg3MjgxMjEiDBiXd%2FhxI4KnTN4ARiqhBJJ3IoKPmnWhLg50n7ERQTYOE6IYzO5mJefVtp39qRIxRf9EVeoR3QWmtzwhiVMUjBU4njbIVxjoGrhfc%2F0tr1yaiSnV8LBpI9zFUIDOq%2FtGnXEVaGYGXvfM%2BEuSwmBt16QLkJidguCrSbh7qe3FqH5eqhvI2T7m2I47NGs4D6ALBIx8xL7W389hxCyRbkoSWbAMPGadsGUe9M22%2BcJ9KYH%2FYajqKUg9oIsPJr2uK%2BvYbc%2FkPVSE3Vn7MUEQd1iiDaPVl8g9MBivOlg%2B2suwAUBCLN0%2BB7Ms1svIT45SGTpLXgX3qSYWmj3UCUyZOBbb5rAx4PfYMlCCygPFEDJLq1CSx%2Bbzf8FMpMpcnEkJPXzqlpdV5CuTpytEZ2%2FpKVd4VuRR%2FhLi0A%2F7yzZKz6A6bVX7mXAVa%2BcIwDdHXT94FtTekyRyBSNiqAc6XtdNvNKpR6tkQfZ3zPu%2FlvU63HLn%2FUqc6Q%2BVzbWg%2FM16TrxTRplPmEPpVOLGYEI%2B7Ths3JGKAk%2BZLKFFDWVujvlkNQwNsWigCYVksuuQOyHmxKPAFnp19%2BNgx59BcAyaeGebO7MpwYnbgWqE0JVF%2FAKeHW07kqMWBYl8TWhY6ZveGwHlAHvn31IuZwuJ%2B7C1VbDlr9%2BESs%2FXPqNgeC%2FJNR6foQ6z13u3Hq%2F%2Ff0wznGnAH17IftGLrhYFviumF%2FVTrXr3S%2Bt03ekgB%2FmuyHwO97KeOwS5OB%2F2MNuzsqwGOoUCEtfEqWJrO4D2H9bJW14GkkI4vC41Ps%2Fb6F1O4w%2F59VTKkiPzdhykD6AkS6wfwumUaCuzrn8UBac7eLbAMCQROms0wJTFLQDdPMt5dXaXwSU9vS53aocl%2FZYq8Omg8%2B5O0E1%2FFfTgPdbF%2FeqjaCt4aHPPXgkqMQ5K8WjCvvItci%2B4Wc5nF8SCdWEz8ZjK90m45fVZEK1VUUO6rkq7md32KJt2iuxpd%2FXM4x8IABVSJRIsSAY6yrvyBzfY82pmek8aotomC8TnnVlF%2FFbdhRX%2F6dWEsfycByqd0YrdRNSMY6tZQxaQiuVx3qX6Z2mVKu1MMKm9H14MVcyRxTg9XxQNVIn4krQf"
            {...getOverrideProps(overrides, "imageHome")}
          ></Image>
          <Flex
            gap="50px"
            direction="column"
            width="unset"
            height="340.67px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="50px 0px 50px 0px"
            display="flex"
            {...getOverrideProps(overrides, "FindHouseMessage")}
          >
            <Button
              width="unset"
              height="unset"
              shrink="0"
              size="large"
              isDisabled={false}
              variation="primary"
              children="Find a House/Room"
              onClick={() => {
                buttonThreeEightFiveThreeFourNineZeroZeroOnClick();
              }}
              {...getOverrideProps(overrides, "FindHouseButton")}
            ></Button>
          </Flex>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="675px"
          height="1042px"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Right")}
        >
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="340.67px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 25px 0px"
            display="flex"
            {...getOverrideProps(overrides, "LeaseMessage")}
          >
            <Flex
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Message38464448")}
            >
              <Text
                fontFamily="Inria Serif"
                fontSize="20px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
                lineHeight="24px"
                textAlign="center"
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
                children="Lease"
                {...getOverrideProps(overrides, "Eyebrow39103599")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="24px"
                fontWeight="600"
                color="rgba(13,26,38,1)"
                lineHeight="30px"
                textAlign="center"
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
                children="Transform your extra room into a thriving opportunity"
                {...getOverrideProps(overrides, "Heading38464450")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(48,64,80,1)"
                lineHeight="24px"
                textAlign="center"
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
                children="Connect with tenants for short-term stays, enjoy reliable income, and easy management."
                {...getOverrideProps(overrides, "Body38464451")}
              ></Text>
            </Flex>
          </Flex>
          <Image
            width="unset"
            height="unset"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="contain"
            src="https://anney-v0-2storage-a5c08545224959-staging.s3.amazonaws.com/public/DALL%C2%B7E-2023-12-21-02.15.02---Create-a-series-of-images-for-a-modern-residential-house--showcasing-primarily-the-interior.-Include-images-of-a-stylish-living-room-with-contemporary.png?AWSAccessKeyId=ASIAV5TXPP647QEAC2JK&Expires=1703716165&Signature=LWJF9n7yWPTDrhgYJ95ZzDrrt%2FA%3D&x-amz-security-token=IQoJb3JpZ2luX2VjECYaCXVzLWVhc3QtMSJHMEUCIFh%2BvqmW3RDsN%2Br0osRCfMhb%2FG2yCCPrctfVWVOLFwrRAiEAzB4uuJ0oRszHGGZoPoqT7Hqu49CD3BQcPVNXGHQdyS0qzQQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0MDcxOTg3MjgxMjEiDBiXd%2FhxI4KnTN4ARiqhBJJ3IoKPmnWhLg50n7ERQTYOE6IYzO5mJefVtp39qRIxRf9EVeoR3QWmtzwhiVMUjBU4njbIVxjoGrhfc%2F0tr1yaiSnV8LBpI9zFUIDOq%2FtGnXEVaGYGXvfM%2BEuSwmBt16QLkJidguCrSbh7qe3FqH5eqhvI2T7m2I47NGs4D6ALBIx8xL7W389hxCyRbkoSWbAMPGadsGUe9M22%2BcJ9KYH%2FYajqKUg9oIsPJr2uK%2BvYbc%2FkPVSE3Vn7MUEQd1iiDaPVl8g9MBivOlg%2B2suwAUBCLN0%2BB7Ms1svIT45SGTpLXgX3qSYWmj3UCUyZOBbb5rAx4PfYMlCCygPFEDJLq1CSx%2Bbzf8FMpMpcnEkJPXzqlpdV5CuTpytEZ2%2FpKVd4VuRR%2FhLi0A%2F7yzZKz6A6bVX7mXAVa%2BcIwDdHXT94FtTekyRyBSNiqAc6XtdNvNKpR6tkQfZ3zPu%2FlvU63HLn%2FUqc6Q%2BVzbWg%2FM16TrxTRplPmEPpVOLGYEI%2B7Ths3JGKAk%2BZLKFFDWVujvlkNQwNsWigCYVksuuQOyHmxKPAFnp19%2BNgx59BcAyaeGebO7MpwYnbgWqE0JVF%2FAKeHW07kqMWBYl8TWhY6ZveGwHlAHvn31IuZwuJ%2B7C1VbDlr9%2BESs%2FXPqNgeC%2FJNR6foQ6z13u3Hq%2F%2Ff0wznGnAH17IftGLrhYFviumF%2FVTrXr3S%2Bt03ekgB%2FmuyHwO97KeOwS5OB%2F2MNuzsqwGOoUCEtfEqWJrO4D2H9bJW14GkkI4vC41Ps%2Fb6F1O4w%2F59VTKkiPzdhykD6AkS6wfwumUaCuzrn8UBac7eLbAMCQROms0wJTFLQDdPMt5dXaXwSU9vS53aocl%2FZYq8Omg8%2B5O0E1%2FFfTgPdbF%2FeqjaCt4aHPPXgkqMQ5K8WjCvvItci%2B4Wc5nF8SCdWEz8ZjK90m45fVZEK1VUUO6rkq7md32KJt2iuxpd%2FXM4x8IABVSJRIsSAY6yrvyBzfY82pmek8aotomC8TnnVlF%2FFbdhRX%2F6dWEsfycByqd0YrdRNSMY6tZQxaQiuVx3qX6Z2mVKu1MMKm9H14MVcyRxTg9XxQNVIn4krQf"
            {...getOverrideProps(overrides, "imageHome2")}
          ></Image>
          <Flex
            gap="50px"
            direction="column"
            width="unset"
            height="340.67px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="50px 0px 50px 0px"
            display="flex"
            {...getOverrideProps(overrides, "PostHouseMessage")}
          >
            <Button
              width="unset"
              height="unset"
              shrink="0"
              size="large"
              isDisabled={false}
              variation="primary"
              children="Post a House/Room"
              onClick={() => {
                buttonThreeEightFiveThreeFourNineZeroFourOnClick();
              }}
              {...getOverrideProps(overrides, "PostHouseButton")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
      
      <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "PromiseMessage")}
          >
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="600"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
              textAlign="center"
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
              children="We Promise You"
              {...getOverrideProps(overrides, "Heading38464455")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="center"
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
              children="Student Verified&#xA;Quick Bookings&#xA;Best prices"
              {...getOverrideProps(overrides, "Body38464456")}
            ></Text>
          </Flex>
    </Flex>
  );
}
