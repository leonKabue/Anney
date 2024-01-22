import {default as ListingCreateForm} from '../ui-components/ListingCreateForm';
import { Flex, Text} from "@aws-amplify/ui-react";
import {getOverrideProps} from "../ui-components/utils";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function AddListingPage(props) {

    let navigate = useNavigate();

    useEffect(() => {
        if (!props.isSignedIn) {
            navigate('/login');
        }
    }, [props.isSignedIn])


    const ListingCreateFormOverride = {
        ListingCreateForm : {
            position: "relative",
            width: "100%",
            shrink: "1",
            grow: "1"
        },

        Location: {
            width: "100%",
            shrink: "1",
            grow: "1"
        },

        HouseInfo : {
            width: "100%",
            shrink: "1",
            grow: "1"
        }
    }

    return (
        <Flex
            style={{
                backgroundImage:"linear-gradient(90deg, rgba(125,214,232,1), rgba(255,255,255,1))",
                border:"0.2px solid #000",
                borderRadius: '15px',
                minHeight:"calc(100vh - 60px)"
            }}
            margin={{base:"65px 0px 60px 0px", medium:"65px auto 60px auto"}}
            height={{base:"100vh", large:"auto"}}
            width={{base:"100vw", medium:"60vw"}}
            direction="column"
            justifyContent={"flex-start"}
            alignContent={"center"}
            alignItems={"center"}
            position={"relative"}
            shrink="1"
            grow="1"
        >
            <Text
                fontFamily="Inter"
                fontSize={{base:"20px", medium:"24px"}}
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
                shrink="1"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                textDecoration="underline"
                children={"Add Listing Information"}
                {...getOverrideProps(props.overrides, "AddListingHeader")}
            ></Text>
            <ListingCreateForm overrides={ListingCreateFormOverride}/>
        </Flex>
    )
}

export default AddListingPage;