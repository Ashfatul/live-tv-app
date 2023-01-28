import React from "react";
import { Link } from "react-router-dom";

const Country = (props) => {
  return (
    <Link to={`/country/${props.country.code}`} className="single-country">
      <div className="info-container">
        <p className="country-name">
          {props.country.name}
          <span className="country-code">({props.country.code})</span>
        </p>
      </div>
    </Link>
  );
};

export default Country;
