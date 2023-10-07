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

const CreatePwdForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset();
    formRef.current?.reset();
    setIsModalOpen(true);
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
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter new password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='New password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            defaultValue=''
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm new password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='Retype password'
                    {...field}
                  />
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

      <AuthModal
        isOpen={isModalOpen}
        onOpenChange={open => setIsModalOpen(open)}
        title='Forgot Password'
        content={<ModalContent />}
      />
    </div>
  );
};

export default CreatePwdForm;

const ModalContent = () => (
  <span className='grid gap-4'>
    <span>Your password has been successfully updated.</span>
    <Link className='text-primary underline' href='/auth/login'>
      Continue to login
    </Link>
  </span>
);
