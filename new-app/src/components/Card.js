import React from "react"; 
import { useState, useEffect } from "react";

const Card = ({ job, setKeywords, keywords }) => {
  const { company, logo, featured, position, role, level, postedAt, contract, location, languages, tools} = job;

  const [filteredData, setFilteredData] = useState([]);

  const modifiedData = () => {
    if (keywords) {
      const newData = filteredData.filter((d) => {
        return keywords.every((key) => {
          return (
            d.role === key ||
            d.level === key ||
            d.languages.includes(key) ||
            d.tools.includes(key)
          );
        });
      });
      setFilteredData(newData);
    } else {
      setFilteredData(job);
    }
  };

  
  useEffect(() => {
    modifiedData();
  },[keywords]);

  let valueWords = [role, level, ...languages, ...tools];

  return (
    <div className="card">
      <p className="image-div">
        <img src={logo} alt="" className="company-logo"></img>
      </p>

      <section className="text-content-wrapper">
        <div>
          <div>
            <div className="company-name--container">
              <div className="info  company-name">{company}</div>
              {job.new ? <div className="info stats-new">NEW!</div> : ""}
              {featured ? (
                <div className="info stats-feature">FEATURED</div>
              ) : (
                ""
              )}
            </div>

            <h4>{position}</h4>

            <div className="light-text--container">
              <span>{postedAt}</span> <span> • {contract}</span>
              <span> • {location}</span>
            </div>
          </div>
        </div>

        <div className="features-container">
          {valueWords.map((word, index) => (
            <button
              className="feature"
               onClick={() => setKeywords(word)}
              key={index}
            >
              {word}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Card;
