import { useEffect, useRef } from "react";

const STAR_COUNT = 90;
const HEART_COUNT = 12;
const SPARKLE_COUNT = 15;

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  fadeSpeed: number;
  driftX: number;
  driftY: number;
  phase: number;
}

interface FloatingElement {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  driftX: number;
  phase: number;
  rotation: number;
  rotationSpeed: number;
  type: "heart" | "sparkle";
}

function drawHeart(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number, rotation: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.globalAlpha = opacity;
  ctx.beginPath();
  const s = size * 0.5;
  ctx.moveTo(0, s * 0.4);
  ctx.bezierCurveTo(-s, -s * 0.4, -s, -s, 0, -s * 0.5);
  ctx.bezierCurveTo(s, -s, s, -s * 0.4, 0, s * 0.4);
  ctx.fillStyle = "rgba(255, 180, 200, 1)";
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.restore();
}

function drawSparkle(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number, rotation: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.globalAlpha = opacity;
  const arms = 4;
  const outer = size * 0.6;
  const inner = size * 0.15;
  ctx.beginPath();
  for (let i = 0; i < arms * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const angle = (Math.PI / arms) * i - Math.PI / 2;
    const px = Math.cos(angle) * r;
    const py = Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fillStyle = "rgba(220, 230, 255, 1)";
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.restore();
}

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const floatingRef = useRef<FloatingElement[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    starsRef.current = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.8 + 0.4,
      opacity: Math.random(),
      fadeSpeed: Math.random() * 0.008 + 0.003,
      driftX: (Math.random() - 0.5) * 0.12,
      driftY: (Math.random() - 0.5) * 0.08,
      phase: Math.random() * Math.PI * 2,
    }));

    const makeFloating = (type: "heart" | "sparkle"): FloatingElement => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: type === "heart" ? Math.random() * 10 + 6 : Math.random() * 8 + 5,
      opacity: 0,
      speed: Math.random() * 0.25 + 0.1,
      driftX: (Math.random() - 0.5) * 0.3,
      phase: Math.random() * Math.PI * 2,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.008,
      type,
    });

    floatingRef.current = [
      ...Array.from({ length: HEART_COUNT }, () => makeFloating("heart")),
      ...Array.from({ length: SPARKLE_COUNT }, () => makeFloating("sparkle")),
    ];

    let t = 0;
    const animate = () => {
      t += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Stars
      for (const star of starsRef.current) {
        star.opacity = 0.25 + 0.75 * ((Math.sin(t * star.fadeSpeed + star.phase) + 1) / 2);
        star.x += star.driftX;
        star.y += star.driftY;
        if (star.x < -2) star.x = canvas.width + 2;
        if (star.x > canvas.width + 2) star.x = -2;
        if (star.y < -2) star.y = canvas.height + 2;
        if (star.y > canvas.height + 2) star.y = -2;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.85})`;
        ctx.fill();

        if (star.size > 1) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 215, 255, ${star.opacity * 0.07})`;
          ctx.fill();
        }
      }

      // Floating hearts & sparkles
      for (const el of floatingRef.current) {
        el.y -= el.speed;
        el.x += el.driftX + Math.sin(t * 0.01 + el.phase) * 0.2;
        el.rotation += el.rotationSpeed;

        // Fade cycle
        const cycle = (Math.sin(t * 0.006 + el.phase) + 1) / 2;
        el.opacity = cycle * (el.type === "heart" ? 0.18 : 0.22);

        // Reset when off screen
        if (el.y < -20) {
          el.y = canvas.height + 20;
          el.x = Math.random() * canvas.width;
          el.phase = Math.random() * Math.PI * 2;
        }
        if (el.x < -20) el.x = canvas.width + 20;
        if (el.x > canvas.width + 20) el.x = -20;

        if (el.type === "heart") {
          drawHeart(ctx, el.x, el.y, el.size, el.opacity, el.rotation);
        } else {
          drawSparkle(ctx, el.x, el.y, el.size, el.opacity, el.rotation);
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default StarryBackground;
