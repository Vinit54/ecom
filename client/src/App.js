import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import TemplateProvider from "./templates/TemplateProvider";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import { Box } from "@material-ui/core";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
