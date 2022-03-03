import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constants/data";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {},
  image: {
    width: "100%",
    height: 280,
    [theme.breakpoints.down("sm")]: {
      objectFit: "cover",
      height: 180,
    },
  },
}));

const Banner = () => {
  const classes = useStyle();
  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      className={classes.container}
      StylesProvider
      navButtonsProps={{
        style: {
          color: "#494949",
          backgroundColor: "#FFFFFF",
          borderRadius: 0,
          margin: 0,
          width: 40,
          height: 50,
        },
      }}
    >
      {bannerData.map((image) => (
        <img src={image} className={classes.image} alt="" />
      ))}
    </Carousel>
  );
};

export default Banner;
