'use client'
import { toast } from "sonner";
import { Input, Button } from "@nextui-org/react";
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

export default function SubscriptionForm({showDescription, description}) {
  const [value, setValue] = useState('')

  // this will determine whether a default or custom description is used
  let inputDescription;
  if (showDescription && (description != null) && (description != '')) {
    inputDescription = description;
  } else {
    inputDescription = null;
  }

  async function subscriptionSignup() {
    // const supabase = await createClient();
    // const { data, error } = await supabase.from('subscriptions').select().eq('email', )
    
    toast('Subscription successful')
  }
  

  return (
    <Input 
      type="email"
      label="Email"
      placeholder="youremail@something.com"
      description={inputDescription}
      classNames={{
        description: "text-black",
        inputWrapper: "border border-amber-600 bg-white",
      }}
      value={value}
      onValueChange={setValue}
      endContent={
        <Button radius="lg" isIconOnly color="primary" 
          className=" bg-amber-800 h-full" onPress={subscriptionSignup}
        >
          <EnvelopeIcon className="size-5 text-white"/>
        </Button>
      }
    />
  
  )
}