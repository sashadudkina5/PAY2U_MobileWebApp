import { z } from 'zod';

export const phoneNumberSchema = z.string().regex(/^\+7 \d{3} \d{3}-\d{2}-\d{2}$/);

export const emailSchema = z.string().email();
