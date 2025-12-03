import React, { useRef } from "react";
import Person1 from "../assets/images/Teammates/person1.jpg";
import Person2 from "../assets/images/Teammates/person2.jpg";
import Person3 from "../assets/images/Teammates/person3.jpg";
import Person4 from "../assets/images/Teammates/person4.jpg";
import Person5 from "../assets/images/Teammates/person5.jpg";
import Person6 from "../assets/images/Teammates/person6.jpg";
import Person7 from "../assets/images/Teammates/person7.jpg";
import Person8 from "../assets/images/Teammates/person8.jpg";
import Person9 from "../assets/images/Teammates/person9.jpg";
import Person10 from "../assets/images/Teammates/person10.jpg";
import Person11 from "../assets/images/Teammates/person11.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Agence = () => {
  const Teammates = [
    Person1,
    Person2,
    Person3,
    Person4,
    Person5,
    Person6,
    Person7,
    Person8,
    Person9,
    Person10,
    Person11,
  ];

  gsap.registerPlugin(ScrollTrigger);
  const ImageDivRef = useRef(null);
  const ImageRef = useRef(null);
  useGSAP(() => {
    gsap.to(ImageDivRef.current, {
      scrollTrigger: {
        trigger: ImageDivRef.current,
        markers: true,
        start: "top 33.54%",
        end: "bottom -70%",
        scrub: true,
        pin: true,
        onUpdate: (elem) => {
          const ImageIndex = Math.round(elem.progress * (Teammates.length - 1));
          ImageRef.current.src = Teammates[ImageIndex];
          console.log(ImageRef.current.src)
        },
      },
    });
  });

  return (
    <div>
      <div className="section1">
        <div
          ref={ImageDivRef}
          className="absolute w-[15vw] h-[30vh] overflow-hidden rounded-3xl top-72 left-[30vw] "
        >
          <img
            ref={ImageRef}
            className="w-full h-full object-cover"
            src={Person1}
            alt=""
          />
        </div>
        <div className="font-[font1] relative">
          <div className="mt-[55vh]">
            <h1 className="text-center tracking-[10px] text-[19vw] uppercase leading-[17vw] font-bold">
              SEVEN7Y
              <br />
              TWO
            </h1>
          </div>
          <div className="flex justify-end ">
            <p className="text-[4.2vw] p-5 w-[60vw] font-[font2] leading-14 ">
              &emsp;&emsp;&emsp;&emsp;&emsp;We're inquisitive and open-minded,
              and we make sure creativity crowds out ego from every corner. A
              brand is a living thing, with values, a personality and a story.
              If we ignore that, we can achieve short-term success, but not
              influence that goes the distance. We bring that perspective to
              every brand story we help tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
