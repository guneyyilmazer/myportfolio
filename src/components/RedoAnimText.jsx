import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";


export default function RedoAnimText({ delay }) {
  const textIndex = useMotionValue(0);
  const texts = [
    "I am your experienced talented developer...",
    "I am the one that will fix all of your bugs...",
    "In the grand scheme of life I'm the only developer you need..!",
    "I am the one that will give life to your astonishing ideas!",
    "You can call me 'Raid' because I'm your bug killing spray..!",
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      delay: delay,
      duration: 1.4,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1.5,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <motion.span className="inline">{displayText}</motion.span>;
}
