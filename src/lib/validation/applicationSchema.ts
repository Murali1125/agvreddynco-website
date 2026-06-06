import { z } from "zod";

const phoneRegex = /^[+]?[0-9\s()-]{8,15}$/;
const maxFileSize = 5 * 1024 * 1024;
const validMimeTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];

export const applicationSchema = z.object({
  fullName: z.string().trim().min(1, "Full Name is required"),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone Number is required")
    .regex(phoneRegex, "Please enter a valid phone number"),
  position: z.string().trim().min(1, "Position Applying For is required"),
  currentLocation: z.string().trim().min(1, "Current Location is required"),
  yearsOfExperience: z.string().trim().optional(),
  highestQualification: z.string().trim().optional(),
  currentEmployer: z.string().trim().optional(),
  expectedSalary: z.string().trim().optional(),
  noticePeriod: z.string().trim().optional(),
  linkedInProfile: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || /^https?:\/\//i.test(value), "LinkedIn Profile must be a valid URL"),
  coverLetter: z.string().trim().optional(),
  resume: z
    .instanceof(File, { message: "Resume is required" })
    .refine((file) => file.size <= maxFileSize, "Resume must be 5MB or smaller")
    .refine((file) => validMimeTypes.includes(file.type), "Resume must be PDF, DOC, or DOCX")
});

export type ApplicationFormValues = z.infer<typeof applicationSchema>;
