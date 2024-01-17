import {default as HomePageLayout} from "../ui-components/HomePageLayout"
import {useNavigate} from "react-router-dom"


function HomePage() {
    let navigate = useNavigate();

    const homePageOverrides = {
        HomePageLayout : {
            width : "100%",
            height : "100%",
            shrink : "1",
            grow: "1",
            wrap : {base : "wrap", large: "wrap"},
            padding: "0px 0px 0px 0px",
            marginTop: "65px",
            style: {position: 'static',
                    zIndex: '1'},
        },

        HomePageRow : {
            width: "100%",
            height: "100%",
            shrink : "1",
            grow: "1",
            wrap : {base : "wrap", large: "nowrap"},
            padding: "0px 0px 0px 0px",
        },

        Left : {
            shrink : "1",
            grow: "1",
            wrap : "nowrap",
            style:  {base: {width: '50%' },
                    large: {width: '100%'}},
            height: {base: "100%", large: "100vh"},
        },

        Right : {
            shrink : "1",
            grow: "1",
            wrap : "wrap",
            style:  {base: {width: '50%' },
                    large: {width: '100%'}},
            height: {base: "100%", large: "100vh"},
        },

        PromiseMessage: {
            width: "100%",
            height: "30vh",
            padding: "0px 0px 80px 0px",
        },

        RentMessage: {
            padding: "10px 0px 10px 0px",
            height: {base: "20%", large: "30%"},
        },

        LeaseMessage: {
            padding: "10px 0px 10px 0px",
            height: {base: "20%", large: "30%"},
        },
    

        imageHome: {
            width: "100%",
            height: {base: "40%", large: "30%"},
            src : "home2.png"
        },

        imageHome2: {
            width: "100%",
            height: {base: "20%", large: "30%"},
            src : "home.png"
        },

        FindHouseMessage: {
            height: {base: "20%", large: "30%"},
        },

        FindHouseButton: {
            onClick: () => {
                navigate("/Listings")
            },
        },

        PostHouseMessage: {
            height: {base: "20%", large: "30%"},
        },

        PostHouseButton: {
            onClick: () => {
                navigate("/Listings-add")
            },
        },

        Eyebrow38464371: {
            fontFamily: "Inter",
            color: "rgba(13,26,38,1)"
        },

        Eyebrow39103599: {
            fontFamily: "Inter",
            color: "rgba(13,26,38,1)"
        },
    }
    return (
        <>
        <HomePageLayout overrides={homePageOverrides}/>
        </>
    )
}

export default HomePage;