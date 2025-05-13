"use client";

import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

const ParticlesBackground: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // הספרייה נטענה בהצלחה
  }, []);

  if (!isMounted) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ["#1d4ed8", "#4f46e5", "#7e22ce", "#8b5cf6"]
          },
          shape: {
            type: ["circle", "triangle"],
            stroke: {
              width: 0,
              color: "#000000"
            }
          },
          opacity: {
            value: 0.2,
            random: true,
            anim: {
              enable: true,
              speed: 0.2,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 8,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 3,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#8b5cf6",
            opacity: 0.1,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.4
              }
            },
            push: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true,
        background: {
          color: "transparent",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        }
      }}
    />
  );
};

export default ParticlesBackground; 