import { makeStyles, InputBase } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    marginLeft: 10,
    width: "38%",
    backgroundColor: "#ffffff",
    display: "flex",
  },
  searchIcon: {
    marginLeft: "auto",
    padding: 5,
    display: "flex",
    color: "blue",
  },
  inputRoot: {
    fontSize: "unset",
    width: "100%",
  },
  inputInput: {
    paddingLeft: 20,
    width: "100%",
  },
}));

const SearchBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search for products, brands and more"
        classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
    </div>
  );
};

export default SearchBar;
