import { Input } from '@nextui-org/react'
import { SubmitButton } from './components/Buttons'
import OneTapComponent from './components/OneTapComponent'

export default function LoginPage() {
  
  return (
    <form id='auth-form' className='py-2 flex flex-col gap-2 w-96 self-center' >
      <Input type='email' name='email' label='Email' classNames={{
        inputWrapper: 'bg-white border border-blue-200',
        base: '',
      }}/>
      <Input type='password' name='password' label='Password' classNames={{
        inputWrapper: 'bg-white border border-blue-200',
        base: '',
      }}/>
      <div className='flex gap-4'>
        <SubmitButton label='Signup' action='signup' variant='bordered' />
        <SubmitButton label='Login' action='login' />
      </div>
      <OneTapComponent />
    </form>
  )
}