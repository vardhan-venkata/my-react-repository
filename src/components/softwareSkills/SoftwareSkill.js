import React from "react";
import "./SoftwareSkill.css";

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {this?.props?.logos.map((logo) => (
              <>
                <li className="software-skill-inline" name={logo.skillName}>
                  {logo.skillName && (
                    <>
                      <p style={logo.style}>{logo.skillName}</p>
                    </>
                  )}
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
