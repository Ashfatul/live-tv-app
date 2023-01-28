import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const CountryList = () => {
  const [countrydata, setCountryData] = useState([]);
  useEffect(() => {
    fetch("https://iptv-org.github.io/api/countries.json")
      .then((res) => res.json())
      .then((list) => setCountryData(list))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="country-container">
      <h1>Country List</h1>
      <div className="country-list-container">
        {countrydata.map((thisCountry) => (
          <Country country={thisCountry} key={thisCountry.code} />
        ))}
      </div>
    </div>
  );
};

export default CountryList;
