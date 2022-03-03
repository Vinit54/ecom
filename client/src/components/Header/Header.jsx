/* eslint-disable no-unused-vars */
import { AppBar, Toolbar, makeStyles, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
/** components */
import SearchBar from "./SearchBar";
import HeaderButtons from "./HeaderButton";

const useStyles = makeStyles({
  header: {
    background: "#2874f0",
    height: 55,
  },
  logo: {
    width: 90,
    marginLeft: 140,
  },
});
const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);
const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <img src={logo} alt="Flipkart Logo" className={classes.logo} />
        <SearchBar />
        <HeaderButtons />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
