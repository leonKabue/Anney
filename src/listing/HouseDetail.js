import {default as ProductDetail} from "../ui-components/ProductDetail"

function HouseDetail() {

    const houseDetailsOverrides = {

        ProductDetail: {
            display: "flex",
            gap: "24px",
            direction: {base:"column", large:"row"},
            justifyContent: "center",
            alignItems: "center",
            shrink: "1",
            grow: "1",
            backgroundColor: "rgba(0,0,0,0)",
            width:"100%",
            position: "relative",
        },

        image: {
            border:"1px solid #000",
            borderRadius: '5px',
        }
    }
    return (
            
            <ProductDetail overrides={houseDetailsOverrides} />
    )
}

export default HouseDetail;