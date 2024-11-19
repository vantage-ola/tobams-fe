import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

interface Circle {
  radius: number;
  angle: number;
  speed: number;
  opacity: number;
}

const OrbitalBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const circles: Circle[] = [];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Create initial circles for orbits
    for (let i = 0; i < 5; i++) {
      circles.push({
        radius: 100 + i * 80,
        angle: (Math.PI * 2 * i) / 5,
        speed: 0.0002 + i * 0.0001,
        opacity: 0.15 - i * 0.02,
      });
    }

    const floatingDots = Array.from({ length: 20 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.5,
    }));

    const setCanvasSize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const drawCircle = (circle: Circle) => {
      if (!ctx) return;

      ctx.beginPath();
      ctx.arc(centerX, centerY, circle.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(81, 76, 255, ${circle.opacity})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      circle.angle += circle.speed;
    };

    const drawDot = (dot: (typeof floatingDots)[number]) => {
      if (!ctx) return;

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(81, 76, 255, ${dot.opacity})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(81, 76, 255, 0.8)";
      ctx.fill();
    };

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw orbits
      circles.forEach(drawCircle);

      // Draw floating dots
      floatingDots.forEach((dot) => {
        drawDot(dot);

        // Move dots slowly
        dot.x += Math.random() * 0.5 - 0.25;
        dot.y += Math.random() * 0.5 - 0.25;

        // Wrap dots around the screen
        if (dot.x < 0) dot.x = window.innerWidth;
        if (dot.x > window.innerWidth) dot.x = 0;
        if (dot.y < 0) dot.y = window.innerHeight;
        if (dot.y > window.innerHeight) dot.y = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      zIndex="0"
      sx={{
        "&::after": {
          content: '""',
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(255, 223, 107, 0.2) 0%, rgba(81, 76, 255, 0.1) 50%, rgba(6, 7, 20, 0) 70%)",
          pointerEvents: "none",
        },
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
};

export default OrbitalBackground;
