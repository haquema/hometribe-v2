import { Button, Input } from '@nextui-org/react'
import { login, signup } from './actions'

export default function LoginPage() {
  

  return (
    <form className='py-2 flex flex-col gap-2 w-96 self-center'>
      <Input type='email' name='email' label='Email' classNames={{
        inputWrapper: 'bg-white border border-blue-200',
        base: '',
      }}/>
      <Input type='password' name='password' label='Password' classNames={{
        inputWrapper: 'bg-white border border-blue-200',
        base: '',
      }}/>
      <div className='flex gap-4'>
        <Button color='primary' variant='bordered' className='rounded-md w-1/2'>Signup</Button>
        <Button color='primary' className='rounded-md w-1/2'>Login</Button>
      </div>
    </form>
  )
}