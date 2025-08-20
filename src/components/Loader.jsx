// Loader.tsx
import React, { useId } from "react";
import { Box, SvgIcon } from "@mui/material";
import { motion } from "framer-motion";

const MotionRect = motion.rect;
const MotionPath = motion.path;
const MotionG = motion.g;

const paths = [
  // RIGHT group
  "M154.31 111.44 154.31 76.59 145.55 76.59 145.55 114.93 145.55 114.93 129.04 121.51 129.04 76.59 120.29 76.59 93.16 135.82 88.36 146.31 99.08 142.03 101.33 137.11 103.86 131.58 103.88 131.55 120.29 95.72 120.29 125.01 120.29 125.03 120.29 133.57 120.29 133.59 129.04 130.1 129.04 130.08 169.86 113.8 169.86 105.23 154.31 111.44 154.31 111.44",
  "M129.04 16.23 129.04 16.21 120.29 12.71 120.29 12.73 120.29 21.28 120.29 21.3 120.29 50.59 103.88 14.76 103.86 14.72 101.33 9.2 99.08 4.27 88.36 0 93.16 10.48 120.29 69.71 129.04 69.71 129.04 24.79 145.55 31.38 145.55 31.38 145.55 69.71 154.31 69.71 154.31 34.87 154.31 34.87 169.86 41.07 169.86 32.51 129.04 16.23",
  // LEFT group
  "M15.56 34.87 15.56 69.71 24.31 69.71 24.31 31.38 24.31 31.38 40.82 24.79 40.82 69.71 49.58 69.71 76.7 10.48 76.7 10.48 81.5 0 81.5 0 81.5 0 70.79 4.27 68.53 9.2 66 14.72 65.99 14.76 49.58 50.59 49.58 21.3 49.58 21.28 49.58 12.73 49.58 12.71 40.82 16.21 40.82 16.23 0 32.51 0 41.07 15.56 34.87 15.56 34.87",
  "M65.99 131.55 65.99 131.55 66 131.58 68.53 137.11 70.22 140.8 70.79 142.03 73.46 143.1 81.5 146.31 81.5 146.31 81.5 146.31 76.7 135.82 49.58 76.59 40.82 76.59 40.82 121.51 24.31 114.93 24.31 114.93 24.31 76.59 15.56 76.59 15.56 111.44 15.56 111.44 0 105.23 0 113.8 40.82 130.08 40.82 130.1 49.58 133.59 49.58 133.57 49.58 125.03 49.58 125.01 49.58 95.72 65.99 131.55 65.99 131.55",
];

const Loader = ({
  size = 96,
  color,
  duration = 1,
  stagger = 0.2,
  className,
}) => {
  const uid = useId();
  const W = 169.86;
  const H = 146.31;

  const maskTransition = (i) => ({
    delay: i * stagger,
    duration,
    ease: [0.22, 1, 0.36, 1],
    repeat: Infinity,
    repeatType: "reverse", // back & forth
    repeatDelay: 0.35,
  });

  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={9999}
      sx={{
        background: "linear-gradient(180deg, #F9F6EF 43%, #D1D1D1 100%);",
      }}
    >
      <Box
        role="status"
        aria-label="Loading"
        className={className}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SvgIcon
          component="svg"
          viewBox={`0 0 ${W} ${H}`}
          sx={{ width: (size * W) / H, height: size, display: "block" }}
        >
          <defs>
            <clipPath id={`${uid}-clip`}>
              <rect width={W} height={H} />
            </clipPath>

            {paths.map((_, i) => (
              <mask
                key={i}
                id={`${uid}-mask-${i}`}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width={W}
                height={H}
              >
                {i < 2 ? (
                  <MotionRect
                    y={0}
                    height={H}
                    initial={{ width: 0, x: W }}
                    animate={{ width: W, x: 0 }}
                    transition={maskTransition(i)}
                    fill="white"
                  />
                ) : (
                  <MotionRect
                    y={0}
                    height={H}
                    initial={{ width: 0, x: 0 }}
                    animate={{ width: W }}
                    transition={maskTransition(i)}
                    fill="white"
                  />
                )}
              </mask>
            ))}
          </defs>

          <MotionG clipPath={`url(#${uid}-clip)`}>
            {paths.map((d, i) => (
              <MotionPath
                key={i}
                d={d}
                fill={color || "currentColor"}
                mask={`url(#${uid}-mask-${i})`}
              />
            ))}
          </MotionG>
        </SvgIcon>
      </Box>
    </Box>
  );
};

export default Loader;
