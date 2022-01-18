import "./App.css";
import Layout from "./components/Layout";
import Main from "./components/Dashboard/main";
import DataEntry from "./components/data-entry/dataEntry";
import ContactUs from "./components/ContactUs";
import Health from "./components/Health";
import House from "./components/House";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/home">
            <Main />
          </Route>
          <Route path="/health">
            <Health />
          </Route>
          <Route path="/house">
            <House />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
