import React, { useId } from "react";
import { SvgIcon } from "@mui/material";
import { motion } from "framer-motion";

const paths = [
  // right group
  "M49.0552 35.7983V24.6064H46.2708V36.9211L41.0239 39.0354V24.6064H38.2396L29.617 43.6349L28.09 47.0001L31.4981 45.6278L32.2129 44.0453L33.0186 42.2725L33.0218 42.2594L38.2396 30.749V40.1582V40.1648V42.9094V42.916L41.0239 41.7932V41.7899L54 36.5567V33.8055L49.0552 35.7983Z",
  "M41.0239 5.21347V5.2069L38.2396 4.0841V4.09067V6.83529V6.84185V16.251L33.0218 4.74071L33.0186 4.72758L32.2129 2.95474L31.4981 1.37231L28.09 0L29.617 3.3684L38.2396 22.3936H41.0239V7.96465L46.2708 10.0789V22.3936H49.0552V11.2017L54 13.1945V10.4433L41.0239 5.21347Z",
  // left group
  "M4.94483 11.2017V22.3936H7.72914V10.0789L12.9761 7.96465V22.3936H15.7604L24.383 3.3684L25.91 0L22.5019 1.37231L21.7871 2.95474L20.9814 4.72758L20.9782 4.74071L15.7604 16.251V6.84185V6.83529V4.09067V4.0841L12.9761 5.2069V5.21347L0 10.4433V13.1945L4.94483 11.2017Z",
  "M20.9782 42.2594L20.9814 42.2725L21.7871 44.0453L22.3232 45.2338L22.5019 45.6278L23.3564 45.9725L25.91 47.0001L24.383 43.6349L15.7604 24.6064H12.9761V39.0354L7.72914 36.9211V24.6064H4.94483V35.7983L0 33.8055V36.5567L12.9761 41.7899V41.7932L15.7604 42.916V42.9094V40.1648V40.1582V30.749L20.9782 42.2594Z",
];

const MotionPath = motion.path;
const MotionRect = motion.rect;
const MotionG = motion.g;

const AnimatedDirectionalFillIcon = ({
  color = "#CFCFCF",
  duration = 1.2,
  stagger = 0.15,
  repeat = 0,
  width = 54,
  height = 47,
  ...props
}) => {
  const uid = useId();

  const maskTransition = (i) => ({
    delay: i * stagger,
    duration,
    ease: [0.22, 1, 0.36, 1],
    repeat,
    repeatType: "reverse",
    repeatDelay: 0.5,
  });

  return (
    <SvgIcon
      component="svg"
      viewBox="0 0 54 47"
      sx={{ width: width, height: height }}
      {...props}
    >
      <defs>
        <clipPath id={`${uid}-clip`}>
          <rect width="54" height="47" fill="white" />
        </clipPath>

        {paths.map((_, i) => (
          <mask
            key={`mask-${i}`}
            id={`${uid}-mask-${i}`}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="54"
            height="47"
          >
            {/* LEFT group (indices 2,3) => expand left->right */}
            {i >= 2 ? (
              <MotionRect
                y="0"
                height="47"
                initial={{ width: 0, x: 0 }}
                animate={{ width: 54 }}
                transition={maskTransition(i)}
                fill="white"
              />
            ) : (
              // RIGHT group (indices 0,1) => expand right->left
              <MotionRect
                y="0"
                height="47"
                initial={{ width: 0, x: 54 }}
                animate={{ width: 54, x: 0 }}
                transition={maskTransition(i)}
                fill="white"
              />
            )}
          </mask>
        ))}
      </defs>

      <MotionG
        clipPath={`url(#${uid}-clip)`}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.03, rotate: 0.3 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
      >
        {paths.map((d, i) => (
          <MotionPath
            key={`fill-${i}`}
            d={d}
            fill={color}
            mask={`url(#${uid}-mask-${i})`}
          />
        ))}
      </MotionG>
    </SvgIcon>
  );
};

export default AnimatedDirectionalFillIcon;
