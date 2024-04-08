import React from "react";

import Section from "./section";
import {  collabContent } from "../constants";
import { collabText } from "../constants";

import { brainwaveSymbol, check } from "../assets";
import Button from "./Button";

import { figma,notion,discord,slack,photoshop,protopie,framer,raindrop } from "../assets";

import {LeftCurve,RightCurve} from "./design/Collaboration"

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

const Collaboration = () => {

  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} alt="check" width={24} height={24} />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-5">
          <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-20 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <div className="relative left-1/2 flex w-[29rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                <img src={brainwaveSymbol} width={48} alt="" height={48} />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((item,index) => (
                  <li key={item.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom -rotate-${index*45}`}>
                      <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl `}>
                        <img src={item.icon} alt="img" width={item.width} height={item.height} 
                        className="m-auto hover:scale-125 transition-all duration-150 hover:cursor-pointer"/>
                      </div>
                  </li>
              ))}
            </ul>
            <LeftCurve/>
            <RightCurve/>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
