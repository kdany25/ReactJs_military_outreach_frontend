import React from "react";
import "./Style/Health.css";

export default function PatientTable() {
  return (
    <div className="table">
        <div className="tit"><h2>Patient List</h2></div>
        <div className="title">
        <p>Id</p>
        <div className="names">Names</div>
        <div className="ages">Age</div>
        <div className="emails">Email</div>
        <div className="phones">phone</div>
        <div className="Deseases">Desease</div>
      </div>
      <div className="raw">
        <p>1</p>
        <div className="name">patrick hakizimana</div>
        <div className="age">45</div>
        <div className="email">patrick@gmail.com</div>
        <div className="phone">+25089787898</div>
        <div className="Desease">Anaemia</div>
      </div>
      <div className="raw">
        <p>1</p>
        <div className="name">patrick hakizimana</div>
        <div className="age">45</div>
        <div className="email">patrick@gmail.com</div>
        <div className="phone">+25089787898</div>
        <div className="Desease">Anaemia</div>
      </div>
      <div className="raw">
        <p>1</p>
        <div className="name">patrick hakizimana</div>
        <div className="age">45</div>
        <div className="email">patrick@gmail.com</div>
        <div className="phone">+25089787898</div>
        <div className="Desease">Anaemia</div>
      </div>
    </div>
  );
}
