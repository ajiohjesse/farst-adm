import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
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
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from './formShema';

const LoginForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  // Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset();
    formRef.current?.reset();
  }

  return (
    <div className='mx-auto w-full max-w-[394px]'>
      <h1 className='text-center text-2xl font-bold'>Login to your account</h1>

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

          <FormField
            defaultValue=''
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='Password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex items-center justify-between gap-8 text-muted'>
            <FormField
              defaultValue={false}
              control={form.control}
              name='rememberMe'
              render={({ field }) => (
                <FormItem className='flex items-center space-y-0'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className='h-6 w-6 rounded-full'
                    />
                  </FormControl>
                  <FormLabel className='ml-4 font-medium'>
                    Remember me
                  </FormLabel>
                </FormItem>
              )}
            />

            <Link href='/auth/forgot-password'>Forgot Password?</Link>
          </div>

          <Button type='submit' className='w-full'>
            Log In
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
