import * as z from 'zod';

export const formSchema = z
  .object({
    password: z.string().trim().nonempty('Enter a password'),
    confirmPassword: z.string().trim().nonempty('Retype the password'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
