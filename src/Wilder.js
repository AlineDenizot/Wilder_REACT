import React from "react";
import blank_profile from "./icons/blank-profile-picture-female.png";
import Proptypes from "prop-types";
import { Card } from "./styles/elements";


import Skill from "./Skill";

function Wilder({name, city, skills, justAdded}) {
  return (
    <Card newCard={justAdded}>
      <img src={blank_profile} alt="Profile" />
      <h3>{name}</h3>
      <h2>De {city}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
      {skills.map((skill) => (
          <Skill key={skill._id} {...skill}/>
      ))}
      </ul>
    </Card>
  );
}

Wilder.propTypes = {
    name: Proptypes.string.isRequired,
    city: Proptypes.string.isRequired,
  };

export default Wilder;