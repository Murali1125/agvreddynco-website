export interface CareerApplication {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  currentLocation: string;
  yearsOfExperience?: string;
  highestQualification?: string;
  currentEmployer?: string;
  expectedSalary?: string;
  noticePeriod?: string;
  linkedInProfile?: string;
  coverLetter?: string;
  resume?: File;
}
