import { useState } from "react";
import "./Toggle.css";


export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "on" : "off";
  const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "" };

  return (
    <>
      <div
        className="toggle-switch"
        style={toggleBGColor}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
};