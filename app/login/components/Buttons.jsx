'use client'
import { Button } from "@nextui-org/react";
import { signup, login } from "../actions";
import { useRef } from "react";

export const SubmitButton = ({label, action, variant}) => {
  const hiddenButtonRef = useRef(null);

  function handler(event) {
    event.preventDefault();
    const formElement = document.getElementById('auth-form');
    let formData = new FormData(formElement);

    switch (action) {
      case 'login':
        login(formData);
        break;
      case 'signup':
        signup(formData);
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


