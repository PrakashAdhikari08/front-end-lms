import React from "react";
import "./Dashboard.css";
import Sidebar from "../dashboard/sidebar/Sidebar";
import DashBoardPost from "./dashboardView/DashBoardPost";
import PageHeader from "../PageHeader";
import { withRouter } from "react-router-dom";
import { useContext } from "react";
import StateContext from "../../context/StateContext";
const Dashboard = (props) => {
  const appState = useContext(StateContext);
  return (
    <PageHeader title={appState.user.name}>
      <div className="dashboard">
        <div className="sidebarContent">
          <Sidebar />
        </div>
        <div className="dashboardContent">
          <DashBoardPost />
        </div>
        <div className="sideWidgets"></div>
      </div>
    </PageHeader>
  );
};

export default withRouter(Dashboard);
