import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
  const scrollRef = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);
    boxes.forEach((box, index) => {
      gsap.to(box, {
        x: 150 * (boxes.indexOf(box) + 5),
        rotate: 280,
        duration: 4,
        borderRadius: "100%",

        scrollTrigger: {
          trigger: ".main",
          marker: true,
          start: "top 70%",
          end: "top 40%",
          scrub: true,
        },
        ease: "power1.inOut",
      });
    });
  }, []);
  return (
    <div className="text-green-500 text-4xl text-center font-bold pt-4">
      Scrolltrigger -GSAP
      <div className="mt-[800px] ml-12 space-y-2 main" ref={scrollRef}>
        <div id="red-box" className="h-24 w-24 bg-red-500"></div>
        <div id="yellow-box" className="h-24 w-24 bg-yellow-500"></div>
        <div id="purple-box" className="h-24 w-24 bg-purple-500"></div>
      </div>
    </div>
  );
};

export default Scroll;
