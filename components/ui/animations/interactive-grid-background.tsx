"use client";

import React, { useEffect, useRef, useState } from "react";

export interface InteractiveGridBackgroundProps
    extends React.HTMLProps<HTMLDivElement> {
  gridSize?: number;
  gridColor?: string;
  darkGridColor?: string;
  effectColor?: string;
  darkEffectColor?: string;
  tailColor?: string;
  darkTailColor?: string;
  trailLength?: number;
  width?: number;
  height?: number;
  idleSpeed?: number;
  glow?: boolean;
  glowRadius?: number;
  children?: React.ReactNode;
  showFade?: boolean;
  fadeIntensity?: number;
  idleRandomCount?: number;
}

const InteractiveGridBackground: React.FC<InteractiveGridBackgroundProps> = ({
                                                                               gridSize = 50,
                                                                               gridColor = "#e5e7eb",
                                                                               darkGridColor = "#27272a",
                                                                               effectColor = "rgba(0, 0, 0, 0.5)",
                                                                               darkEffectColor = "rgba(255, 255, 255, 0.5)",
                                                                               tailColor = "rgba(0, 0, 0, 0.5)",
                                                                               darkTailColor = "rgba(255, 255, 255, 0.5)",
                                                                               trailLength = 10,
                                                                               width,
                                                                               height,
                                                                               idleSpeed = 0.2,
                                                                               glow = true,
                                                                               glowRadius = 3,
                                                                               children,
                                                                               showFade = true,
                                                                               fadeIntensity = 20,
                                                                               idleRandomCount = 5,
                                                                               className,
                                                                               ...props
                                                                             }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const cellBrightnessRef = useRef<Map<string, number>>(new Map());
  const mousePosRef = useRef<{ x: number; y: number } | null>(null);
  const lastMouseTimeRef = useRef(Date.now());
  const idleTargetsRef = useRef<{ x: number; y: number }[]>([]);
  const idlePosRef = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const update = () => {
      setIsDarkMode(
          document.documentElement.classList.contains("dark") ||
          (window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false)
      );
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
      mousePosRef.current = { x, y };
      lastMouseTimeRef.current = Date.now();
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    let canvasW = 0;
    let canvasH = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvasW = width || rect.width;
      canvasH = height || rect.height;
      if (canvas.width !== canvasW || canvas.height !== canvasH) {
        canvas.width = canvasW;
        canvas.height = canvasH;
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const parseColor = (color: string) => {
      const m = color.match(/[\d.]+/g);
      if (!m) return { r: 255, g: 255, b: 255 };
      return { r: Number(m[0]), g: Number(m[1]), b: Number(m[2]) };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // DECAY controls how slow the tail fades — lower = longer tail
    const DECAY = 0.008;
    const SPREAD = glowRadius;

    const draw = () => {
      const lineColor = isDarkMode ? darkGridColor : gridColor;
      const headColor = parseColor(isDarkMode ? darkEffectColor : effectColor);
      const tailColorParsed = parseColor(isDarkMode ? darkTailColor : tailColor);

      ctx.clearRect(0, 0, canvasW, canvasH);

      // Draw grid lines
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      for (let x = 0; x <= canvasW; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvasH); ctx.stroke();
      }
      for (let y = 0; y <= canvasH; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvasW, y); ctx.stroke();
      }

      const cols = Math.ceil(canvasW / gridSize);
      const rows = Math.ceil(canvasH / gridSize);

      // DVD bounce idle animation
      const isIdle = Date.now() - lastMouseTimeRef.current > 2000;
      if (isIdle && canvasW > 0 && canvasH > 0) {
        // Initialize DVD position and velocity if not set
        if (idleTargetsRef.current.length === 0) {
          idleTargetsRef.current = [{
            x: Math.random() * canvasW,
            y: Math.random() * canvasH,
          }];
          // DVD screensaver uses perfectly diagonal movement (equal X and Y speeds)
          // This creates a 45-degree angle movement
          const speed = idleSpeed * 3;
          // Randomly choose direction: 1 or -1 for each axis
          const dirX = Math.random() < 0.5 ? 1 : -1;
          const dirY = Math.random() < 0.5 ? 1 : -1;
          idlePosRef.current = [{
            x: speed * dirX,
            y: speed * dirY,
          }];
        }

        const pos = idleTargetsRef.current[0];
        const vel = idlePosRef.current[0];

        pos.x += vel.x;
        pos.y += vel.y;

        // Bounce off edges
        if (pos.x <= 0) { pos.x = 0; vel.x = Math.abs(vel.x); }
        if (pos.x >= canvasW) { pos.x = canvasW; vel.x = -Math.abs(vel.x); }
        if (pos.y <= 0) { pos.y = 0; vel.y = Math.abs(vel.y); }
        if (pos.y >= canvasH) { pos.y = canvasH; vel.y = -Math.abs(vel.y); }

        mousePosRef.current = { x: pos.x, y: pos.y };
      } else if (!isIdle) {
        // Reset DVD state when mouse moves again
        idleTargetsRef.current = [];
        idlePosRef.current = [];
      }

      // Light up grid cells near cursor — brightness based on distance
      const mouse = mousePosRef.current;
      if (mouse) {
        const cursorCellX = Math.floor(mouse.x / gridSize);
        const cursorCellY = Math.floor(mouse.y / gridSize);

        for (let dx = -SPREAD; dx <= SPREAD; dx++) {
          for (let dy = -SPREAD; dy <= SPREAD; dy++) {
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > SPREAD) continue;

            const cx = cursorCellX + dx;
            const cy = cursorCellY + dy;
            if (cx < 0 || cy < 0 || cx >= cols || cy >= rows) continue;

            const brightness = Math.pow(1 - dist / SPREAD, 2);
            const key = `${cx},${cy}`;
            const current = cellBrightnessRef.current.get(key) ?? 0;
            if (brightness > current) {
              cellBrightnessRef.current.set(key, brightness);
            }
          }
        }
      }

      // Draw all lit cells and decay
      const toDelete: string[] = [];
      cellBrightnessRef.current.forEach((brightness, key) => {
        const [cx, cy] = key.split(",").map(Number);

        // Interpolate color: bright cells = head color, dim cells = tail color
        const r = Math.round(lerp(tailColorParsed.r, headColor.r, brightness));
        const g = Math.round(lerp(tailColorParsed.g, headColor.g, brightness));
        const b = Math.round(lerp(tailColorParsed.b, headColor.b, brightness));

        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(${r},${g},${b},${brightness * 0.8})`;
        ctx.fillRect(cx * gridSize, cy * gridSize, gridSize, gridSize);

        const next = brightness - DECAY;
        if (next <= 0.005) {
          toDelete.push(key);
        } else {
          cellBrightnessRef.current.set(key, next);
        }
      });

      toDelete.forEach(k => cellBrightnessRef.current.delete(k));

      animFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      ro.disconnect();
      cancelAnimationFrame(animFrameId);
    };
  }, [isDarkMode, gridSize, gridColor, darkGridColor, effectColor, darkEffectColor,
    tailColor, darkTailColor, width, height, glow, glowRadius, idleSpeed, idleRandomCount, trailLength]);

  return (
      <div
          ref={containerRef}
          className={`relative ${className}`}
          style={{ width: width || "100%", height: height || "100%" }}
          {...props}
      >
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 z-0 pointer-events-none w-full h-full"
        />
        {showFade && (
            <div
                className="pointer-events-none absolute inset-0 bg-white dark:bg-black"
                style={{
                  maskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
                  WebkitMaskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
                }}
            />
        )}
        <div className="relative z-0 w-full h-full">{children}</div>
      </div>
  );
};

export default InteractiveGridBackground;