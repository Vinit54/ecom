import {
  Dialog,
  DialogContent,
  makeStyles,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { useState } from "react";
import { authenticateSignUp } from "../../service/api";

const useStyles = makeStyles({
  component: {
    height: "70vh",
    width: "90vh",
  },
  image: {
    backgroundImage: ` url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    height: "70vh",
    backgroundRepeat: "no-repeat",
    background: "#2874f0",
    width: "40%",
    backgroundPosition: "center 85%",
    padding: "45px 35px",
    "& > *": {
      color: "#ffffff",
      fontWeight: 500,
    },
  },
  login: {
    padding: "25px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: 20,
    },
  },
  text: {
    fontSize: 12,
    color: "#878787",
  },
  loginBtn: {
    textTransform: "none",
    background: "#FB641B",
    color: "#ffffff",
    height: 48,
    borderRadius: 2,
  },
  requestBtn: {
    textTransform: "none",
    background: "#ffffff",
    color: "#2874f0",
    height: 48,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb( 0 0 0 / 20%)",
  },
  createText: {
    textAlign: "center",
    marginTop: "auto",
    color: "#3874f0",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
  },
});

const initialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signupInitialvalues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const Login = ({ open, setOpen }) => {
  const classes = useStyles();

  //   const [account, setAccount] = useState("login");
  const [account, setAccount] = useState(initialValue.login);
  const [signup, setSignup] = useState(signupInitialvalues);

  const handleClose = () => {
    setOpen(false);
    setAccount(initialValue.login);
  };

  const toggleAccount = () => {
    // setAccount("signup");
    setAccount(initialValue.signup);
  };

  const signupuser = async () => {
    let response = await authenticateSignUp(signup);
    if (response) {
      return;
    }
    handleClose();
    setAccount(signup.user);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.component}>
        {/* <p>Hey</p> */}

        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Box>

          {account.view === "login" ? (
            <Box className={classes.login}>
              <TextField name="username" label="Enter Email/Mobile Number" />
              <TextField name="password" label="Enter password" />
              <Typography className={classes.text}>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <Button variant="contained" className={classes.loginBtn}>
                LogIn
              </Button>
              <Typography
                className={classes.text}
                style={{ textAlign: "center" }}
              >
                OR
              </Typography>
              <Button variant="contained" className={classes.requestBtn}>
                Request OTP
              </Button>
              <Typography
                onClick={() => toggleAccount()}
                className={classes.createText}
              >
                New to Flipkart? Create an account
              </Typography>
            </Box>
          ) : (
            <Box className={classes.login}>
              <TextField
                onChange={(e) => onInputChange(e)}
                name="firstname"
                label="Enter First Name"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="lastname"
                label="Enter Last Name"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter User Name"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter Email"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="phone"
                label="Enter Phone Number"
              />
              <Button
                variant="contained"
                onClick={() => signupuser()}
                className={classes.loginBtn}
              >
                SignUp
              </Button>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
