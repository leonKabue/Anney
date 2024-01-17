import { default as ListingCardCollection } from "../ui-components/ListingCardCollection"
import { Flex, SearchField } from "@aws-amplify/ui-react"
import DateRangePicker from "../ui-components/DateRangePicker"


function ListingPage() {

    return (
        <Flex
            gap="10px"
            direction="column"
            width="100%"
            height="100%"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            padding="0px 0px 50px 0px"
            backgroundImage="linear-gradient(90deg, rgba(125,214,232,1), rgba(255,255,255,1))"
            display="flex"
            shrink= "1"
            grow= "1"
            marginTop= "65px"
            position="static"
            style={{
                zIndex: "1",
                wrap : {base : "wrap", large: "wrap"},
            }}
        >  
            <Flex
                direction={{base:"column",medium:"row"}}
                style={{
                    border:"1px solid #000",
                    borderRadius: '5px',
                    position: "fixed",
                    zIndex:"10",
                    backgroundImage:"linear-gradient(90deg, rgba(125,214,232,1), rgba(255,255,255,1))"
                }}
                justifyContent="center"
                alignItems="center"
                padding={{base:"15px 0px 0px 0px",medium:"5px 10px 5px 10px"}}
                marginTop={{base:"0px", medium:"5px"}}
                height={{base:"140px", medium:"85px"}}
            >
                <SearchField 
                    label="search"
                    placeholder="Location"
                    size="large"
                    />
                <DateRangePicker />
            </Flex>

            <Flex
                marginTop={{base:"140px", medium:"100px"}}>
                <ListingCardCollection/>
            </Flex>
            
            
        </Flex>
    )
}

export default ListingPage;
