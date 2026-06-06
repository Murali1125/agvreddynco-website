import { z } from "zod";

const phoneRegex = /^[+]?[0-9\s()-]{8,15}$/;

export const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Full Name is required"),
  companyName: z.string().trim().optional(),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone Number is required")
    .regex(phoneRegex, "Please enter a valid phone number"),
  serviceInterestedIn: z.string().trim().min(1, "Service selection is required"),
  officePreference: z.string().trim().optional(),
  message: z.string().trim().min(1, "Message is required"),
  preferredContactMethod: z.enum(["Phone", "Email", "WhatsApp"]).optional()
});

export type ContactFormValues = z.infer<typeof contactSchema>;
