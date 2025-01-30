'use client'
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Card, CardBody, CardFooter, CardHeader, Link } from "@heroui/react";
import { button as buttonStyles } from "@heroui/theme";
import { subtitle, title } from "./primitives";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import * as motion from "motion/react-client"


const items = [
  {
    participant: 1,
    price: "40K",
    title: "Challenge Yourself!",
    description: "Register now and be part of TOUCH #14",
    link: "",
  },
  {
    participant: 2,
    price: "39K",
    title: "Better with a Buddy!",
    description: "Bring 1 friend and join the fun at TOUCH #14!",
    link: "",
  },
  {
    participant: 3,
    price: "38K",
    title: "Triple the Excitement!",
    description: "Join with 2 friends and make TOUCH #14 unforgettable!",
    link: "",
  },
  {
    participant: 4,
    price: "37K",
    title: "More Friends, More Fun!",
    description: "Invite 3 friends to experience the thrill of TOUCH #14!",
    link: "",
  },
  {
    participant: 5,
    price: "36K",
    title: "Fun with Friends!",
    description: "Join TOUCH #14 with 4 friends and double the excitement!",
    link: "",
  },
]

export function Register() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full place-items-center">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring", visualDuration: 0.4, bounce: 0.25, delay: index * 0.1
            }}
          >
            <Card isHoverable key={item.participant} className="w-full h-full drop-shadow">
              <CardHeader className="text-center">
                <span className={subtitle({ className: "text-center" })}>{item.participant} Participants</span>
              </CardHeader>
              <CardBody className="py-5 px-16">
                <span className={title({ className: "text-center", color: "green", size: "lg" })}>{item.price}</span>
                <br />
                <span className={title({ className: "text-center", size: "tiny" })}>{item.title}</span>
                <span className='text-center text-default-400'>{item.description}</span>
              </CardBody>
              <CardFooter className="text-center justify-center">
                <Link
                  isExternal
                  className={buttonStyles({
                    color: "success",
                    radius: "full",
                    variant: "shadow",
                  })}
                  href={item.link}
                >
                  Register
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0.0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring", visualDuration: 0.4, bounce: 0.25, delay: 0.6
          }}
          className="relative flex flex-col justify-center items-center rounded-medium w-full h-72 lg:h-full overflow-hidden drop-shadow border border-divider">
          <div className="absolute top-0 left-0 -translate-x-10 -translate-y-28 -z-10 w-3/5 rounded-full aspect-square bg-green-600/70 backdrop-filter blur-3xl opacity-50" />
          <div className="absolute bottom-0 right-0 translate-x-28 translate-y-24 -z-10 w-3/5 rounded-full aspect-square bg-green-600/70 backdrop-filter blur-3xl opacity-50" />

          <span className={title({ size: "tiny" })}>Contact Us for More Info</span>
          <span className='text-center text-default-400'>Got questions? Reach out to us:</span>
          <Link
            isExternal
            className={`${buttonStyles({
              color: "success",
              radius: "full",
              variant: "shadow",
            })} flex justify-center items-center mt-4`}
            href="https://wa.me/6281542780426"
          >
            <IconBrandWhatsapp />
            Contact Arif
          </Link>
          <Link
            isExternal
            className={`${buttonStyles({
              color: "success",
              radius: "full",
              variant: "shadow",
            })} flex justify-center items-center mt-4`}
            href="https://wa.me/6287826540014"
          >
            <IconBrandWhatsapp />
            Contact Leny
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

