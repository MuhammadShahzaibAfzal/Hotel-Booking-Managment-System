import React from "react";

const Heading = ({ children, tagline }) => {
  return (
    <div className="heading text-center">
      <h1>{children}</h1>
      {tagline && (
        <p
          style={{ maxWidth: "900px", margin: "-23px auto" }}
          className="p-3 p-lg-0 text-secondary mb-3"
        >
          {tagline}
        </p>
      )}
    </div>
  );
};

export default Heading;
