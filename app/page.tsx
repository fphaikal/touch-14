import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { FaBook, FaSchool } from "react-icons/fa6";
import { FaPencilRuler } from "react-icons/fa";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import Countdown from "@/components/countdown";
import { Documentation } from "@/components/documentation";
import { Card, CardBody, Divider } from "@heroui/react";
import { Register } from "@/components/register";

export default function Home() {
  return (
    <section className="flex flex-col gap-4">
      <div className="w-full min-h-screen overflow-x-hidden sm:overflow-visible">
        <div className="flex flex-col items-center sm:justify-between gap-4 h-[40rem] w-full relative">
          <div className="absolute sm:left-0 w-[50rem] sm:w-4/5 -translate-y-56 sm:-translate-y-56 sm:-translate-x-64 aspect-square rounded-full bg-gradient-to-bl from-green-400/10 ">
            <div className="inset-[15%] rounded-full bg-gradient-to-l from-green-400/20">
              <div className="absolute inset-[20%] rounded-full bg-gradient-to-tr from-green-400/30" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 w-full my-20 px-6">
            <div className="flex flex-col w-full sm:w-1/2 z-10 justify-center items-center sm:items-start text-center sm:text-start">
              <div className="justify-center">
                <p className={title()}>Tryout&nbsp;</p><p className={title({ color: "green" })}>Chemicalistronic</p>
                <br />
                <span className={subtitle()}>Paving Futures One Drop At A Time</span>
                <div className="flex flex-col py-5">
                  <Countdown targetDate="2025-02-16T07:15:00" />
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <Link
                  isExternal
                  className={buttonStyles({
                    color: "success",
                    radius: "full",
                    variant: "shadow",
                  })}
                  href={siteConfig.links.docs}
                >
                  Join Now
                </Link>
              </div>
            </div>
            <div className="hidden sm:flex justify-center items-center w-1/2 z-10">
              <Image src="/asset3.png" alt="Asset 1" width={500} height={500} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-medium">Sponsored By:</span>
            <Image src="/logo-cendekia.png" alt="Cendekia" width={200} height={50} />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-16 px-6 text-center">
        <div className="absolute top-0 -translate-y-[20rem] md:-translate-y-[40rem] lg:-translate-y-[40rem] xl:-translate-y-[60rem] -z-10 w-4/5 rounded-full aspect-square bg-green-600/70 backdrop-filter blur-3xl opacity-50" />
        <span className={title({ size: "sm" })}>Succeed in ASPD with <span className={title({ size: "sm", color: "green" })}>TOUCH #14!</span></span>
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-yellow-100 shadow-md shadow-yellow-100 rounded-3xl p-4 mb-6">
              <Image src="/pencil.svg" alt="Icon 1" width={30} height={30} className="drop-shadow " />
            </div>
            <span className={title({ size: "tiny" })}>ASPD Try Out Simulation</span>
            <p className={subtitle()}>Helps 9th-grade students prepare for ASPD with standardized test questions.</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center lg:border-l lg:border-r border-divider ">
            <div className="bg-blue-100 shadow-md shadow-blue-100 rounded-3xl p-4 mb-6">
              <Image src="/book.svg" alt="Icon 1" width={30} height={30} className="drop-shadow" />
            </div>
            <span className={title({ size: "tiny" })}>Focused Academic Preparation</span>
            <p className={subtitle()}>Enhances students' academic skills before taking the ASPD exam.</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-green-100 shadow-md shadow-green-100 rounded-3xl p-4 mb-6">
              <Image src="/school.svg" alt="Icon 1" width={30} height={30} className="drop-shadow " />
            </div>
            <span className={title({ size: "tiny" })}>Introduction to SMK SMTI Yogyakarta</span>
            <p className={subtitle()}>Provides participants with an opportunity to explore SMK SMTI Yogyakarta.</p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col min-h-screen items-center justify-center px-6">
        <div className="absolute top-0 left-0 -translate-x-[60rem] w-4/5 -z-10 rounded-full aspect-square bg-gradient-to-t from-green-600/70 backdrop-filter blur-3xl opacity-35" />
        <span className={title({ size: "sm" })}><span className={title({ color: "green", size: "sm" })}>TOUCH #14</span> Try Out Chemicalistronic</span>
        <span className={subtitle({ className: "text-center" })}>16 Februari 2025 – SMK SMTI Yogyakarta</span>
        <div className="flex w-full mt-10 justify-center">
          <Register />
        </div>
      </div>
    </section>
  );
}
