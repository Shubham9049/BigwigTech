"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

type Dot = { x: number; y: number; vx: number; vy: number };

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const section = canvas?.parentElement;
    if (!canvas || !context || !section) return;

    const pointer = { x: -1000, y: -1000 };
    const movePointerX = gsap.quickTo(pointer, "x", { duration: 0.38, ease: "power3.out" });
    const movePointerY = gsap.quickTo(pointer, "y", { duration: 0.38, ease: "power3.out" });
    let dots: Dot[] = [], frame = 0, width = 0, height = 0;

    const setup = () => {
      const bounds = section.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width; height = bounds.height;
      canvas.width = width * ratio; canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      dots = Array.from({ length: Math.min(135, Math.max(65, Math.floor(width / 10))) }, () => ({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18,
      }));
    };

    const move = (event: PointerEvent) => {
      const bounds = section.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      if (x < 0 || x > width || y < 0 || y > height) {
        movePointerX(-1000);
        movePointerY(-1000);
        return;
      }
      movePointerX(x);
      movePointerY(y);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const color = document.documentElement.classList.contains("dark") ? "255,143,110" : "255,103,73";
      dots.forEach((dot) => {
        dot.x += dot.vx; dot.y += dot.vy;
        if (dot.x < 0 || dot.x > width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > height) dot.vy *= -1;
      });
      for (let i = 0; i < dots.length; i += 1) for (let j = i + 1; j < dots.length; j += 1) {
        const first = dots[i], second = dots[j];
        const distance = Math.hypot(first.x - second.x, first.y - second.y);
        if (distance < 105) {
          context.strokeStyle = `rgba(${color},.09)`;
          context.lineWidth = .45;
          context.beginPath(); context.moveTo(first.x, first.y); context.lineTo(second.x, second.y); context.stroke();
        }
      }
      const activeDots = dots
        .map((dot, index) => ({ dot, index, distance: Math.hypot(dot.x - pointer.x, dot.y - pointer.y) }))
        .filter((item) => item.distance < 255)
        .sort((first, second) => first.distance - second.distance)
        .slice(0, 18);
      const drawnConnections = new Set<string>();
      activeDots.forEach((item) => {
        activeDots
          .filter((other) => other.index !== item.index)
          .map((other) => ({ other, distance: Math.hypot(item.dot.x - other.dot.x, item.dot.y - other.dot.y) }))
          .filter(({ distance }) => distance < 155)
          .sort((first, second) => first.distance - second.distance)
          .slice(0, 2)
          .forEach(({ other }) => {
            const key = [item.index, other.index].sort((first, second) => first - second).join("-");
            if (drawnConnections.has(key)) return;
            drawnConnections.add(key);
            context.strokeStyle = `rgba(${color},.42)`; context.lineWidth = .9;
            context.beginPath(); context.moveTo(item.dot.x, item.dot.y); context.lineTo(other.dot.x, other.dot.y); context.stroke();
          });
      });
      dots.forEach((dot) => {
        const near = activeDots.some((item) => item.dot === dot);
        context.fillStyle = `rgba(${color},${near ? .95 : .34})`;
        context.beginPath(); context.arc(dot.x, dot.y, near ? 2.6 : 1.45, 0, Math.PI * 2); context.fill();
      });
      frame = requestAnimationFrame(draw);
    };

    const resizeObserver = new ResizeObserver(setup);
    resizeObserver.observe(section); setup(); draw(); window.addEventListener("pointermove", move);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", move);
      gsap.killTweensOf(pointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0 h-full w-full" aria-hidden="true" />;
}
