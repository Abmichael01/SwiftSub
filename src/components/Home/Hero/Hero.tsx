import SectionPadding from "@/layouts/SectionPadding";
import React from "react";
import { Button } from "../../ui/button";
import CursorEffect from "./CursorEffect";
import { Wifi, Zap, ShieldCheck, Gift } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <SectionPadding className="">
      <div className=" py-10 flex space-y-3 flex-col justify-center items-center relative overflow-hidden">
        <h1 className="text-6xl font-semibold text-center leading-16">
          Enjoy.{" "}
          <span className="bg-gradient-to-tr from-pink-500 via-primary to-primary bg-clip-text text-transparent">
            Seamless
          </span>{" "}
          <br /> Payment Experience
        </h1>
        <p className="text-lg text-center leading-normal max-w-[50%]">
          Get affordable data, airtime, pay electricity, TV subscriptions, and
          more —all in one place. Fast, secure, and zero hassle.
        </p>
        <div className="flex gap-5 items-center">
          <Button className="px-5 rounded-full cursor-pointer">
            Get Started
          </Button>
          <Button
            variant={"outline"}
            className="px-5 rounded-full cursor-pointer"
          >
            Login Now
          </Button>
        </div>
      </div>
      <div className="relative overflow-hidden h-80">
        <div className=" size-[1000px] absolute left-1/2 translate-x-[-50%] top-0 border border-r-green-400 border-t-blue-400 rounded-full z-[-1] p-20">
          <div className="size-full border border-t-pink-400 rounded-full p-20">
            <div className="size-full border border-t-orange-400 rounded-full"></div>
          </div>
        </div>

        <div className="h-15 w-full bg-gradient-to-b from-transparent to-background absolute bottom-0 z-[3]"></div>

        {/* <CursorEffect className="right-[30%] top-[5%]" color="orange" side="right" text="Instant Payment" icon={<DollarSign />} /> */}
        <CursorEffect
          className="left-[30%] top-[5%]"
          color="blue"
          side="left"
          text="Pay Bills Easily"
          icon={<Zap />}
          delay={0.3}
        />

        <CursorEffect
          className="right-[25%] top-[16%]"
          color="green"
          side="right"
          text="Airtime & Data Deals"
          icon={<Wifi />}
          delay={0.6}
        />

        <CursorEffect
          className="left-[40%] top-[45%]"
          color="yellow"
          side="left"
          text="Safe & Secure"
          icon={<ShieldCheck />}
          delay={0.9}
        />

        <CursorEffect
          className="right-[45%] top-[20%]"
          color="pink"
          side="right"
          text="Referral Rewards"
          icon={<Gift />}
          delay={1.2}
        />
      </div>
    </SectionPadding>
  );
};

export default Hero;
