import * as z from 'zod';

export const formSchema = z.object({
  email: z.string().trim().email('Invalid email address'),
});
