import logo from "./logo.svg";
import React from "react";
import "./App.css";
import CrudButtons from "./components/CrudButtons.tsx";
import FinancesTable from "./components/FinancesTable.tsx";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        Home Finances
      </div>
      <div className="buttons">
        <CrudButtons/>
      </div>
      <div className="table">
        <FinancesTable />
      </div> 
    </div>
  );
}
