"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "up" | "scale" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animationClass = {
    up: "reveal-fade-in-up",
    scale: "reveal-fade-in-scale",
    left: "reveal-fade-in-left",
    right: "reveal-fade-in-right",
  }[animation];

  const delayStyle = delay ? { animationDelay: `${delay}ms` } : {};

  return (
    <div
      ref={elementRef}
      style={delayStyle}
      className={`${
        isRevealed ? animationClass : "reveal-hidden"
      } ${className}`}
    >
      {children}
    </div>
  );
}
