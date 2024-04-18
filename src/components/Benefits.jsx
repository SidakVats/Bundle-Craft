import React, { useState } from "react";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import Button from "./Button";
import { GradientLight } from "./design/Benefits";

import ClipPath from "../assets/svg/ClipPath"

const Benefits = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  const visibleBenefits = showAll ? benefits : benefits.slice(0, 6);

  return (
    <section className="bg-n-8 text-n-1" id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {visibleBenefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] overflow-hidden"
              style={{
                backgroundImage: `url(${item.backgroundUrl}) `,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h4 mb-7">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3 line-clamp-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img src={item.iconUrl} alt="" width={48} height={48} />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider ">
                    Explore More
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}

              <div className="absolute inset-0.5 object-cover  bg-n-8 " style={{clipPath: "url(#benefits)"}}>
                <div className="absolute inset-0 object-cover opacity-0 transition-opacity hover:opacity-20">
                  {item.imageUrl && (
                    <img
                     src={item.imageUrl}
                     width={380}
                     height={362}
                     alt={item.title}
                     className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath/>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mb-9">
          {showAll ? (
            <Button white onClick={toggleShowAll}>
              Show Less
            </Button>
          ) : (
            <Button white onClick={toggleShowAll}>
              Show More
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
