'use client'
import { Card, CardBody, CardFooter } from "@heroui/react";
import { useEffect, useState } from "react";
import { title } from "./primitives";

interface CountdownProps {
  targetDate: string; // Format: "YYYY-MM-DDTHH:mm:ss" (ISO 8601)
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  function calculateTimeLeft(targetDate: string) {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0
  ) {
    return <p>Countdown Complete!</p>;
  }

  return (
    <div className="flex items-center space-x-2 lg:space-x-4 text-lg">
      <Card>
        <CardBody className="flex items-center w-20 lg:w-24 overflow-hidden">
          <span className="text-xl lg:text-4xl bg-gradient-to-t from-[#6FEE8D] to-[#17c964] bg-clip-text text-transparent">{timeLeft.days}</span>
          <span className="text-md lg:text-xl">Days</span>
        </CardBody>
      </Card>
      <Card>
        <CardBody className="flex items-center w-20 lg:w-24 overflow-hidden">
          <span className="text-xl lg:text-4xl bg-gradient-to-t from-[#6FEE8D] to-[#17c964] bg-clip-text text-transparent">{timeLeft.hours}</span>
          <span className="text-md lg:text-xl">Hours</span>
        </CardBody>
      </Card>
      <Card>
        <CardBody className="flex items-center w-20 lg:w-24 overflow-hidden">
          <span className="text-xl lg:text-4xl bg-gradient-to-t from-[#6FEE8D] to-[#17c964] bg-clip-text text-transparent">{timeLeft.minutes}</span>
          <span className="text-md lg:text-xl">Minutes</span>
        </CardBody>
      </Card>
      <Card>
        <CardBody className="flex items-center w-20 lg:w-24 overflow-hidden">
          <span className="text-xl lg:text-4xl bg-gradient-to-t from-[#6FEE8D] to-[#17c964] bg-clip-text text-transparent">{timeLeft.seconds}</span>
          <span className="text-md lg:text-xl">Seconds</span>
        </CardBody>
      </Card>
    </div>
  );
};

export default Countdown;
