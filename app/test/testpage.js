'use client'
import { Divider, Accordion, AccordionItem, Button } from "@nextui-org/react";
import SubscriptionForm from "../components/SubscriptionForm";

export default function App() {
  return (
    <Accordion>
      <AccordionItem key="1" aria-label="Accordian" title="Join our waitinglist" className="w-fit" >
        <SubscriptionForm showDescription={false}/>
      </AccordionItem>
    </Accordion>
  );
}