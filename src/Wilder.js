import React from "react";
import Proptypes from "prop-types";

import Skill from "./Skill";

function Wilder(props) {
  return (
    <article className="card">
      <img src="#" alt="Jane Doe Profile" />
      <h3>{props.name}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
      <Skill name="HTML" votes={3} />
        <Skill name="CSS" votes={2} />
        <Skill name="React" votes={4} />
        <Skill name="Node" votes={7} />
        <Skill name="Typescript" votes={2} />
      </ul>
    </article>
  );
}

Skill.propTypes = {
    name: Proptypes.string.isRequired,
  };

export default Wilder;