'use client'
import { toast } from "sonner";
import { Input, Button } from "@nextui-org/react";
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { emailSchema } from "../validations/emailSchema";

export default function SubscriptionForm({showDescription, description}) {
  const [email, setEmail] = useState('')

  // this will determine whether a default or custom description is used
  let inputDescription;
  if (showDescription && (description != null) && (description != '')) {
    inputDescription = description;
  } else {
    inputDescription = null;
  }

  async function subscriptionSignup() {
    const supabase = createClient();
    try {
      await emailSchema.validate({ email });
      const { data: emailExists, error: fetchError } = await supabase
        .from('subscriptions')
        .select()
        .eq('email', email)
        .single();

        // console.log(emailExists);
      if (fetchError) {
        console.error('Error 1 - checking for email:', fetchError);
        toast.error('Something went wrong, please try again')
      } else if (emailExists) {
        switch (emailExists.subscribed) {
          case true:
            toast.success('You\'re already on our waitlist!')
            break;
          case false:
            const { error: updateError } = await supabase
              .from('subscriptions')
              .update({subscribed: true})
              .eq('email', email);

            if (updateError) {
              console.error('Error 2 - updating the record:', updateError);
              toast.error('Something went wrong, please try again')
            } else {
              toast.success('You\'re on our waitlist!')
            }
        }
      } else if (emailExists == null) {
        const { data: newSubscriber, error: createError } = await supabase
          .from('subscriptions')
          .insert([{ email: email, subscribed: true}]);

        if (createError) {
          console.error('Error 3 - updating the record:', createError);
          toast.error('Something went wrong, please try again')
        } else {
          // console.log(newSubscriber)
          toast.success('You\'ve been added to our waitlist!')
        }
      }
    } catch (err) {
      console.error('validation error', err.message);
      toast.error(err.message)
    }
  }


  return (
    <Input
      type="email"
      label="Email"
      placeholder="youremail@something.com"
      description={inputDescription}
      classNames={{
        description: "text-black",
        inputWrapper: "border border-red-200 bg-white rounded-md w-full",
      }}
      value={email}
      onValueChange={setEmail}
      endContent={
        <Button id="subscribe-button" isIconOnly color="primary" 
          className="rounded-md bg-red-600 h-full" onPress={subscriptionSignup}
        >
          <EnvelopeIcon className="size-5 text-white"/>
        </Button>
      }
    />
  
  )
}