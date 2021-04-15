import React from "react";
import Proptypes from "prop-types";

import Skill from "./Skill";

const skills = [
    {name:"HTML", votes:5 },
    {name:"CSS", votes:4 },
    {name:"React", votes:3 },
    {name:"Node", votes:2 },
    {name:"Typescript", votes:1 },
]

function Wilder({firstname}) {
  return (
    <article className="card">
      <img src="#" alt="Jane Doe Profile" />
      <h3>{firstname}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
      {skills.map((skill) => (
          <Skill key={skills.name} {...skill}/>
      ))}
      </ul>
    </article>
  );
}

Skill.propTypes = {
    name: Proptypes.string.isRequired,
  };

export default Wilder;