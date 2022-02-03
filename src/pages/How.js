import React from "react";
import "./How.css";
import swal from "sweetalert2";

function How() {
  const showAlert = () => {
    new swal({
      title: "How it Works 🌏",
      text: "Go and click the next button 🐱‍🏍",
      icon: "success",
      button: "Agree",
      timer: "7000",
      footer: "TechLabs Rocks!!",
    });
  };
  return (
    <div>
      <button
        className="mx-auto d-block btn-outline-danger-how"
        onClick={() => showAlert()}
      >
        🗺 Click me!
      </button>
    </div>
  );
}

export default How;
