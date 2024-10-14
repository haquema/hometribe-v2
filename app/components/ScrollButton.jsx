'use client'
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react"

export default function ScrollButton() {
  const scrollToSection = () => {
    const targetSection1 = document.getElementById('quiz');
    if (targetSection1) {
      // Scroll to the section
      targetSection1.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <p>Not sure if homeschooling's for you? Take our quiz and find out!</p>
      <Button onPress={scrollToSection} className="w-10 h-12 bg-black self-center rounded-md text-white text-sm"><ArrowDownIcon className="size-6 animate-bounce" /></Button>
    </div>
  )
}