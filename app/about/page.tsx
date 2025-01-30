import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="absolute right-0 -translate-x-96 -translate-y-44 w-[70rem] aspect-square rounded-full bg-gradient-to-bl from-green-400/10 ">
        <div className="inset-[15%] rounded-full bg-gradient-to-l from-green-400/20">
          <div className="absolute inset-[20%] rounded-full bg-gradient-to-tr from-green-400/30" />
        </div>
      </div>
      <div className="z-10 flex flex-col items-center justify-center gap-4">
        <h1 className={title()}>About</h1>
        <p>TOUCH #14 (Try Out Chemicalistronic) is an annual event organized by the Student Council of SMK SMTI Yogyakarta for 9th-grade junior high school students in Yogyakarta and its surrounding areas. This event is designed as a try-out platform to help participants prepare for ASPD (Regional Education Standard Assessment). In addition to testing their academic abilities, TOUCH also enhances their readiness for ASPD while providing an opportunity to get to know SMK SMTI Yogyakarta better.</p>
      </div>
    </div>
  );
}
