"use client";
import React, { useEffect } from "react";

// 定义Star类的类型
interface Star {
  x: number;
  y: number;
  radius: number;
  velocity: {
    x: number;
    y: number;
  };
  draw: () => void;
  update: () => void;
}

// Star类构造函数外部声明
const Star = function (
  this: Star,
  x: number,
  y: number,
  radius: number,
  velocity: { x: number; y: number },
) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.velocity = velocity;

  this.draw = function () {
    const canvas = document.getElementById("starfield") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();
  };

  this.update = function () {
    const canvas = document.getElementById("starfield") as HTMLCanvasElement;
    if (this.x < 0 || this.x > canvas.width) this.velocity.x = -this.velocity.x;
    if (this.y < 0 || this.y > canvas.height)
      this.velocity.y = -this.velocity.y;

    this.x += 0.2 * this.velocity.x;
    this.y += 0.2 * this.velocity.y;
    this.draw();
  };
} as any as {
  new (
    x: number,
    y: number,
    radius: number,
    velocity: { x: number; y: number },
  ): Star;
};

const StarField: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById("starfield") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const stars = 200;
    let starArray: Star[] = [];

    const initStars = () => {
      starArray = [];
      for (let i = 0; i < stars; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let radius = Math.random() * 1.5;
        let velocity = {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
        };
        starArray.push(new Star(x, y, radius, velocity));
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      starArray.forEach((star) => star.update());
    };

    initStars();
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      id="starfield"
      className="fixed top-0 left-0 w-full h-full  pointer-events-none z-[0]"
    />
  );
};

export default StarField;
