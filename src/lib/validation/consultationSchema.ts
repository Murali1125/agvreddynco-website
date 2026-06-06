import { z } from "zod";

const phoneRegex = /^[+]?[0-9\s()-]{8,15}$/;

export const consultationSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone is required")
    .regex(phoneRegex, "Please enter a valid phone number"),
  preferredDate: z.string().trim().optional(),
  preferredTime: z.string().trim().optional(),
  serviceCategory: z.string().trim().optional(),
  additionalNotes: z.string().trim().optional()
});

export type ConsultationFormValues = z.infer<typeof consultationSchema>;
