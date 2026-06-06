export interface Author {
  id: number;
  name: string;
  designation: string;
  bio: string;
}

export interface AuthorSeo {
  name: string;
  url?: string;
}
