import { useState, useContext } from "react";
import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { Link } from "react-router-dom";
// components
import Login from "../Login/Login";
import loginContext from "../../context/ContextProvider";

const useStyles = makeStyles({
  login: {
    background: "#ffffff",
    color: "#2874f0",
    textTransform: "none",
    fontWeight: 500,
    borderRadius: 2,
    padding: "5px 50px",
    boxShadow: "none",
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      alignItems: "center",
      textDecoration: "none",
      color: "#ffffff",
    },
  },
  container: {
    display: "flex",
  },
});

const HeaderButtons = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState(loginContext);

  const openLoginDialog = () => {
    setOpen(true);
  };

  return (
    <Box className={classes.wrapper}>
      {account ? (
        <Typography>{account}</Typography>
      ) : (
        <Link>
          <Button
            variant="contained"
            onClick={() => openLoginDialog()}
            className={classes.login}
          >
            Login
          </Button>
        </Link>
      )}
      <Link>
        <Typography style={{ marginTop: 5 }}>More</Typography>
      </Link>
      <Link to="/cart">
        <Box className={classes.container}>
          <Badge badgeContent={1} color="secondary">
            <ShoppingCartTwoToneIcon />
          </Badge>
          <Typography style={{ marginLeft: 5 }}>Cart</Typography>
        </Box>
      </Link>
      <Login open={open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  );
};

export default HeaderButtons;
