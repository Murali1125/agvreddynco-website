import { Author } from "@/types/author";

export const authors: Author[] = [
  {
    id: 1,
    name: "AGV Editorial Team",
    designation: "Research & Insights Desk",
    bio: "Editorial analysts curating practical updates on accounting, tax, audit and regulatory developments."
  },
  {
    id: 2,
    name: "CA Kasi Reddy Nallappa Reddy",
    designation: "Partner",
    bio: "Specialist in audit, taxation, compliance and strategic advisory engagements."
  },
  {
    id: 3,
    name: "CA Yasaswani Grandhi",
    designation: "Partner",
    bio: "Experienced in GST, taxation and regulatory advisory for growing enterprises."
  },
  {
    id: 4,
    name: "CA Mahaveer Bansal",
    designation: "Partner",
    bio: "Focused on corporate advisory, compliance planning and business consulting frameworks."
  }
];

export function getAuthorByName(name: string): Author | undefined {
  return authors.find((author) => author.name === name);
}
