import React from "react";
import wifi from "../../assets/wifi.svg";

const FacilityCard = () => {
  return (
    <div className="bg-white shadow rounded p-3 mb-5 border-4 border-dark border-top">
      <div className="d-flex align-items-center gap-3">
        <img src={wifi} alt="" style={{ width: "100px" }} />
        <h4>Facility Name</h4>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
        nesciunt, suscipit sequi maiores nulla doloribus dolor nam odit
        aspernatur. Unde voluptatem dolor possimus at alias adipisci saepe
        mollitia quidem reprehenderit.
      </p>
    </div>
  );
};

export default FacilityCard;
