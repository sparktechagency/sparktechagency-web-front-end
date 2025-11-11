import gsap from "gsap";
import { useEffect, useRef } from "react";

const GreetingCard = ({ items, setIndex, index }: any) => {
  const slideRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate the slides when the index changes
    gsap.to(slideRef.current, {
      scale: 0.8,
      opacity: 1,
      duration: 0.2,
      stagger: 0.1,
      ease: "power2.out",
      overwrite: "auto",
    });

    // gsap.to(slideRef.current[index], {
    //   scale: 1,
    //   opacity: 1,
    //   duration: 0.5,
    //   ease: "power2.inOut",
    //   overwrite: "auto",
    // });
  }, [index]);

  return (
    <div className="flex -gap-2  ">
      {items?.map((item: any, i: any) => (
        <div
          key={item.id}
          className={`rounded-xl relative ${
            index === i
              ? " md:w-[509px] h-[500px] -mx-12"
              : "w-[50px] md:w-[113px]   h-[500px]"
          } shrink-0 transition-all ease-in-out duration-500 origin-center`}
          onClick={() => setIndex(i)}
          ref={(el) => {
            slideRef.current[i] = el;
          }}
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className={`w-full h-full object-cover rounded-xl ${
              index === i ? "cursor-default" : "cursor-pointer"
            }`}
          />
          {/* {index === i && (
            <div className="absolute flex w-full rounded-xl flex-col justify-end h-full top-0 p-3 space-y-2 overflow-hidden bg-linear-to-t from-gray-100/60 to-transparent">
              <h1 className="text-2xl font-semibold">{item.name}</h1>
              <h2 className="text-lg">{item.title}</h2>
              <p className="leading-[120%]">{item.description}</p>
            </div>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default GreetingCard;
