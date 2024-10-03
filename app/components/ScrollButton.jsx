'use client'
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react"

export default function ScrollButton() {
  const scrollToSection = () => {
    const targetSection = document.getElementById('mailing-list');
    if (targetSection) {
      // Scroll to the section
      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Add the Tailwind 'flash' class to the section
      // targetSection.classList.add('animate-flash');

      // // Remove the 'flash' class after 1.5 seconds (adjust timing based on animation)
      // setTimeout(() => {
      //   targetSection.classList.remove('animate-flash');
      // }, 1500); // 1.5s duration (match the animation duration)
    }
  }

  return (
    <Button onPress={scrollToSection} className="w-fit h-12 bg-black self-center rounded-md text-white text-md">Join our mailing list <ArrowDownIcon className="size-6 animate-bounce" /></Button>
  )
}