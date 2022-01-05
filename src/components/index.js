import React from "react";
import Sidebar from "./Dashboard/sidebar";
import Main from "./Dashboard/main";
import "./Dashboard/style/styleD.css"
import RightBar from "./Dashboard/RightSideBar";
import Charts from "./Dashboard/Chart";

const Dashboard = () =>{
return(
    <div className="try">
    <Sidebar/>
    <Main/>
    <RightBar/>
    </div>
)
}
export default Dashboard;