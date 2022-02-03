import React from "react";
import "./How.css";
import swal from "sweetalert2";

function How() {
  const showAlert = () => {
    new swal({
      title: "How it Works 🌏",
      text: "Go and click the link 🐱‍🏍",
      icon: "success",
      button: "Agree",
      timer: "7000",
      footer: "TechLabs Rocks!!",
      timerProgressBar: true,
    });
  };

  return (
    <div>
      <br></br>
      <button
        className="mx-auto d-block btn-outline-info-how2"
        onClick={() => showAlert`<a href="./Home.js"></a>`}
      >
        🗺 Click me!
      </button>

      <br></br>
      <section className="enjoy_link_how">
        <a href="http://localhost:3000/" className="link_go_home">
          Enjoy your WAY TO GO
        </a>
      </section>
    </div>
  );
}

export default How;
