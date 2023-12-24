import React from "react";
import RoomCard from "../common/RoomCard";
import Heading from "../common/Heading";
const OurRooms = () => {
  return (
    <div>
      <Heading>Our Rooms</Heading>
      <div className=" px-4">
        <div className="row d-flex justify-content-center gap-3">
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
        <div className="text-center mt-5 ">
          <button className="btn btn-outline-dark">View More</button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default OurRooms;
