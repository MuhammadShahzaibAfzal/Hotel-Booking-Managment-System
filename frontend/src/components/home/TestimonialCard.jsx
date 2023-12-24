import React from "react";
import profileImage from "../../assets/profile-img.jpg";
const TestimonialCard = () => {
  return (
    <div className="shadow bg-white rounded p-3 mb-5">
      <div className="d-flex align-items-center gap-4 my-4">
        <img
          src={profileImage}
          alt=""
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
        <h5>Shahzaib Afzal</h5>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nemo
        similique porro harum, sunt quisquam voluptate asperiores expedita,
        excepturi aperiam quia, suscipit doloribus illo optio laboriosam! Iusto,
        reiciendis fuga! Sed?
      </p>
    </div>
  );
};

export default TestimonialCard;
