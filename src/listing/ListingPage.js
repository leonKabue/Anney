import { ListingCardCollection } from "../ui-components"


function ListingPage() {
    const listingsOverride={
        ListingCardCollection: {
            //marginTop:"60px",
            //isSearchable:"false",
        },
    }

    return (
        <ListingCardCollection overrides={listingsOverride}/>
    )
}

export default ListingPage;
