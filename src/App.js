import "./App.css";
import Layout from "./components/Layout";
import Main from "./components/Dashboard/main";
import DataEntry from "./components/data-entry/dataEntry";
import ContactUs from "./components/ContactUs";
import Health from "./components/Health";
import House from "./components/House";

function App() {
  return (
    <Layout>
      <House />
    </Layout>
  );
}

export default App;
