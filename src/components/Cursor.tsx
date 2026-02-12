import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    /* ---------------- MOUSE MOVE ---------------- */
    const moveCursor = (e: MouseEvent) => {
      // inner dot (fast, snappy)
      gsap.to(inner, {
        x: e.clientX - 3,
        y: e.clientY - 3,
        duration: 0.1,
        ease: "power3.out",
      });

      // outer dot (slower, floaty)
      gsap.to(outer, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    /* ---------------- HOVER ENTER ---------------- */
    const handleEnter = (el: Element, type: string) => {
      if (type === "hero-btn") {
        const bounds = el.getBoundingClientRect();

        gsap.to(outer, {
          scale: 3,
          opacity: 0.2,
          duration: 0.25,
          ease: "power3.out",
        });

        // Optional snap-to-center
        gsap.to(outer, {
          x: bounds.left + bounds.width / 2 - 15,
          y: bounds.top + bounds.height / 2 - 15,
          duration: 0.3,
        });
      }
    };

    /* ---------------- HOVER LEAVE ---------------- */
    const handleLeave = () => {
      gsap.to(outer, {
        scale: 1,
        opacity: 1,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    /* ---------------- ATTACH LISTENERS ---------------- */
    const attachCursorListeners = () => {
      document.querySelectorAll("[data-cursor]").forEach((el) => {
        const type = el.getAttribute("data-cursor")!;
        el.addEventListener("mouseenter", () =>
          handleEnter(el, type)
        );
        el.addEventListener("mouseleave", handleLeave);
      });
    };

    attachCursorListeners();
    document.addEventListener("cursor:refresh", attachCursorListeners);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("cursor:refresh", attachCursorListeners);
    };
  }, []);

  return (
    <>
      {/* Outer cursor */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 h-[30px] w-[30px] rounded-full border border-white pointer-events-none z-[9999]"
      />

      {/* Inner cursor */}
      <div
        ref={innerRef}
        className="fixed top-0 left-0 h-[6px] w-[6px] bg-white rounded-full pointer-events-none z-[9999]"
      />
    </>
  );
}
