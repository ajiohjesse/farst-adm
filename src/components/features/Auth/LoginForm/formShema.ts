import * as z from 'zod';

export const formSchema = z.object({
  email: z.string().trim().email('Invalid email address'),
  password: z.string().trim().nonempty('Please provide a password'),
  rememberMe: z.boolean(),
});
