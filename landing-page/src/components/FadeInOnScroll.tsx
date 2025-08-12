import { useEffect, useRef, useState, ReactNode } from "react";

type TransitionType = "fadeFromLeft" | "fadeFromRight" | "fadeFromDown" | "fadeFromUp";

export const FadeInOnScroll = ({children, threshold=0.1, type}: {children: ReactNode, threshold: number, type: TransitionType}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const transitionType = {
      "fadeFromLeft": ["translateX(0)", "translateX(-300px)"],
      "fadeFromRight": ["translateX(0)", "translateX(300px)"],
      "fadeFromUp": ["translateY(0)", "translateY(-60px)"],
      "fadeFromDown": ["translateY(0)", "translateY(60px)"],
    }

    useEffect(()=> {
      const observer = new IntersectionObserver(
        ([entry]) =>{
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold,
          rootMargin: "0px 0px -100px 0px"
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      };

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, [threshold]);

    return (
      <div 
        ref={ref} 
        style={{
          opacity: isVisible ? 1 : 0, 
          transform: isVisible ? transitionType[type][0] : transitionType[type][1], 
          transition: "all 1s ease-in-out"
        }}
      >
        {children}
      </div>
    )
};

export default FadeInOnScroll;