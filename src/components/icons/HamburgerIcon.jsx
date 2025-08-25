import React, { useState } from "react";

const HamburgerIcon = ({
  size = 24,
  color = "#F9F6EF",
  hoverColor = "#F9F6EF",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      width={size}
      height={(size * 15) / 18} // keep original aspect ratio
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer", transition: "all 0.3s ease" }}
    >
      <path
        d="M17.875 0H0V1.36364H17.875V0Z"
        fill={isHovered ? hoverColor : color}
      />
      <path
        d="M17.875 6.81818H0V8.18182H17.875V6.81818Z"
        fill={isHovered ? hoverColor : color}
      />
      <path
        d="M17.875 13.6364H0V15H17.875V13.6364Z"
        fill={isHovered ? hoverColor : color}
      />
    </svg>
  );
};

export default HamburgerIcon;
