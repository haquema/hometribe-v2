'use client'
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react"

export default function ScrollButton() {
  const scrollToSection = () => {
    const targetSection1 = document.getElementById('mailing-list');
    const targetSection2 = document.getElementById('subscribe-button');
    if (targetSection1) {
      // Scroll to the section
      targetSection1.scrollIntoView({ behavior: 'smooth' });

      // Add the Tailwind 'flash' class to the section
      targetSection2.classList.add('animate-wiggle');

      // // Remove the 'flash' class after 1.5 seconds (adjust timing based on animation)
      setTimeout(() => {
        targetSection2.classList.remove('animate-wiggle');
      }, 1500); // 1.5s duration (match the animation duration)
    }
  }

  return (
    <Button onPress={scrollToSection} className="w-fit h-12 bg-black self-center rounded-md text-white text-md">Join our mailing list <ArrowDownIcon className="size-6 animate-bounce" /></Button>
  )
}