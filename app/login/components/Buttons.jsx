'use client'
import { Button } from "@nextui-org/react";
import { signup, login } from "../actions";
import { useRef } from "react";
import { customValidate } from "@/app/validations/authSchema";
import { toast } from "sonner";

export const SubmitButton = ({label, action, variant}) => {
  const hiddenButtonRef = useRef(null);

  async function handler(event) {
    event.preventDefault();
    // locate the form element, create FormData object
    const formElement = document.getElementById('auth-form');
    let formData = new FormData(formElement);
    
    //validate inputs and call the appropriate server side handler function
    let errors = await customValidate({
      email: formData.get('email'),
      password: formData.get('password')
    });

    if (errors.email || errors.password) {
      if (errors.email) {
        toast.error(errors.email)
      } else if (errors.password) {
        toast.error(errors.password)
      }
    } else {
      try {
        switch (action) {
          case 'login':
            login(formData);
            break;
          case 'signup':
            signup(formData);
        }
      } catch (error) {
        console.error(error.message)
      }
    }


  }

  return (
    <>
      <button type="submit" form="auth-id" className="hidden" ref={hiddenButtonRef} onClick={handler}/>
      <Button color='primary' variant={(variant != '' || variant != null) ? variant : ''} className='rounded-md w-1/2'
         onPress={() => {
          hiddenButtonRef.current.click()
         }}  
      >{label}</Button>
    </>
  );
}


