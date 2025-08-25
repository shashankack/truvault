import React, { useState } from "react";

const SearchIcon = ({
  size = 24,
  color = "#FFFFFF",
  hoverColor = "#000000",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const fillColor = isHovered ? hoverColor : color;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer", transition: "all 0.3s ease" }}
    >
      <path
        d="M2.95361 3.17917C5.83261 0.298055 10.5168 0.297737 13.396 3.17624C16.1111 5.89109 16.2613 10.2082 13.8579 13.1059L17.5562 16.8042C17.8261 17.074 17.8261 17.5109 17.5562 17.7807L17.5552 17.7817C17.4199 17.9141 17.2453 17.9819 17.0679 17.9819C16.8911 17.9818 16.7142 17.9142 16.5806 17.7807L12.8853 14.0854C11.5222 15.2159 9.85029 15.7836 8.17529 15.7837C6.28458 15.7837 4.39317 15.0628 2.95361 13.6235C0.0745565 10.7423 0.0745205 6.05807 2.95361 3.17917ZM8.17529 2.39792C6.63611 2.39792 5.09688 2.98528 3.92725 4.15475C1.59525 6.48655 1.58618 10.2738 3.89893 12.6176H3.8999L3.9292 12.6469C6.27086 14.9884 10.0807 14.9884 12.4224 12.6469C14.764 10.3055 14.764 6.4962 12.4224 4.15475C11.2505 2.98315 9.71432 2.39801 8.17529 2.39792Z"
        fill={fillColor}
        stroke={fillColor}
        strokeWidth="0.2"
      />
    </svg>
  );
};

export default SearchIcon;
