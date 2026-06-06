export interface ContactInquiry {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  serviceInterestedIn: string;
  officePreference?: string;
  message: string;
  preferredContactMethod?: "Phone" | "Email" | "WhatsApp";
}

export interface ConsultationRequest {
  name: string;
  email: string;
  phone: string;
  preferredDate?: string;
  preferredTime?: string;
  serviceCategory?: string;
  additionalNotes?: string;
}
