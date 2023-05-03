import React, { useState, useEffect } from "react";
// import axios from "axios";
import { client, urlFor } from "../client";

const Education = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "education"]`).then((res) => setEducations(res));
  }, []);
  

  return (
    <div className="educationpage" id="education">
      <div className="container edu-cont">
        <h1>
          My Education <span>.</span>
        </h1>
        <div className="grid-box">
          {educations
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((edu) => (
              <div className="grid-items">
                <img src={urlFor(edu.logo)} alt="logo" />
                <div>
                  <span>{edu.year}</span>
                  <h3>{edu.school}</h3>
                </div>
                <p>{edu.degree}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
