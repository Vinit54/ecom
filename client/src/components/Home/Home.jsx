import { Box, makeStyles } from "@material-ui/core";

// components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection";

const useStyle = makeStyles((theme) => ({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
  rightwrapper: {
    background: "#ffffff",
    padding: 5,
    margin: "12px 0 0 10px",
    width: "17%",
  },
}));

const Home = () => {
  const classes = useStyle();
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/82d705fe2ba26327.jpg?q=70";
  return (
    <>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box style={{ width: "86%" }}>
            <Slide timer={true} title="Deal of The Day" />
          </Box>
          <Box className={classes.rightwrapper}>
            <img src={adURL} alt="ads" style={{ width: 230, height: "auto" }} />
          </Box>
        </Box>
        <Slide timer={false} title="Discounts For You" />
        <MidSection />
        <Slide timer={false} title="Fashion For You" />
        <Slide timer={false} title="Top Deals" />
      </Box>
    </>
  );
};

export default Home;
