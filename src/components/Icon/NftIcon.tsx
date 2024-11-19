import { Icon, IconProps } from "@chakra-ui/icons";
import { keyframes } from "@emotion/react";

// Define the gradient animation
const gradientShift = keyframes`
  0% {
    stop-color: #2a27c9;
    stop-opacity: 1;
  }
  25% {
    stop-color: #514cff;
    stop-opacity: 0.8;
  }
  50% {
    stop-color: #76decc;
    stop-opacity: 0.9;
  }
  75% {
    stop-color: #ea6cbc;
    stop-opacity: 0.8;
  }
  100% {
    stop-color: #2a27c9;
    stop-opacity: 1;
  }
`;

const NftIcon = (props: IconProps) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <defs>
      <linearGradient
        id="animated-gradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop
          offset="0%"
          style={{
            animationName: `${gradientShift}`,
            animationDuration: "6s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          }}
        />
        <stop
          offset="100%"
          style={{
            animationName: `${gradientShift}`,
            animationDuration: "6s",
            animationDelay: "1s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          }}
        />
      </linearGradient>
    </defs>
    <path
      fill="#6666FF"
      d="M100 190c49.706 0 90-40.294 90-90 0-49.706-40.294-90-90-90-49.706 0-90 40.294-90 90 0 49.706 40.294 90 90 90z"
    />
    <path
      fill="#2a27c9"
      d="M100 170c38.66 0 70-31.34 70-70s-31.34-70-70-70-70 31.34-70 70 31.34 70 70 70z"
      opacity={"0.10"}
    />
  </Icon>
);
export default NftIcon;
