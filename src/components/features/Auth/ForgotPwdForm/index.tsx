import { Button } from '@/components/ui/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import AuthModal from '../Modals/AuthModal';
import { formSchema } from './formSchema';
// import { ROUTES } from '../../constants/routes';

const ForgotPwdForm = () => {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setEmail(values.email);
    setIsModalOpen(true);
    form.reset();
    formRef.current?.reset();
  }

  return (
    <div className='mx-auto w-full max-w-[394px]'>
      <h1 className='text-center text-2xl font-bold'>Forgot Password</h1>
      <p className='pt-4 text-center text-muted'>
        Provide us with your already registered email and a reset link will be
        sent to you.
      </p>

      <Form {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(onSubmit)}
          onChange={() => form.clearErrors()}
          className='my-12  grid gap-6'
        >
          <FormField
            defaultValue=''
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type='email' placeholder='Email address' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='w-full'>
            Send me a reset link
          </Button>
        </form>
      </Form>

      <Link href='/auth/login' className='flex justify-center text-muted'>
        Already have an account? Login
      </Link>

      <AuthModal
        isOpen={isModalOpen}
        onOpenChange={open => setIsModalOpen(open)}
        title='Forgot Password'
        content={<ModalContent email={email} />}
      />
    </div>
  );
};

export default ForgotPwdForm;

const ModalContent = (props: { email: string }) => (
  <span className='grid gap-4'>
    <span>
      We just sent a reset link to your email{' '}
      <span className='font-bold'>{props.email}</span>
    </span>
    <span>
      Click on the link in the mail to reset your email address and create a new
      passwordKindly check your spam/junk folders if you have not received the
      mail after few minutes
    </span>
  </span>
);
