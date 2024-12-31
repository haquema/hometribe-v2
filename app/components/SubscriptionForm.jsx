'use client'
import { toast } from "sonner";
import { Input, Button } from "@nextui-org/react";
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import * as yup from 'yup'

const emailSchema = yup.object().shape({
  email: yup.string().email().required(),
});

export default function SubscriptionForm({showDescription, description}) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const inputDescription = showDescription ? description : null

  async function subscriptionSignup() {
    setIsLoading(true)
    const supabase = createClient()

    try {
      await emailSchema.validate({ email });
      const { data: emailExists, error: fetchError } = await supabase
        .from('subscriptions')
        .select()
        .eq('email', email)
        .single();

      if (fetchError) {
        console.error('Error checking email:', fetchError);
        toast.error('Something went wrong, please try again')
      } else if (emailExists) {
        if (emailExists.subscribed) {
          toast.success('You\'re already on our waitlist!')
        } else {
          const { error: updateError } = await supabase
            .from('subscriptions')
            .update({subscribed: true})
            .eq('email', email);

          if (updateError) {
            console.error('Error updating record:', updateError);
            toast.error('Something went wrong, please try again')
          } else {
            toast.success('You\'re on our waitlist!')
          }
        }
      } else {
        const { error: createError } = await supabase
          .from('subscriptions')
          .insert([{ email: email, subscribed: true}]);

        if (createError) {
          console.error('Error creating record:', createError);
          toast.error('Something went wrong, please try again')
        } else {
          toast.success('You\'ve been added to our waitlist!')
          setEmail('')
        }
      }
    } catch (error) {
      if (error.name === 'ValidationError') {
        toast.error('Please enter a valid email address')
      } else {
        toast.error('Something went wrong, please try again')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Input
      type="email"
      placeholder="Your Email"
      description={inputDescription}
      classNames={{
        description: "text-black",
        inputWrapper: "border border-blue-200 bg-white rounded-md w-full",
      }}
      value={email}
      onValueChange={setEmail}
      endContent={
        <Button 
          id="subscribe-button" 
          isIconOnly 
          color="primary"
          isLoading={isLoading}
          className="rounded-md bg-blue-600 h-full -mr-3 hover:bg-blue-700" 
          onPress={subscriptionSignup}
        >
          <EnvelopeIcon className="size-4 text-white"/>
        </Button>
      }
    />
  )
}