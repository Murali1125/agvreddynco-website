export interface ArticleSeo {
  title: string;
  description: string;
  keywords: string[];
  openGraphTitle: string;
  openGraphDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export type ArticleContentBlock =
  | {
      type: "heading";
      id: string;
      level: 2 | 3;
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      ordered?: boolean;
      items: string[];
    }
  | {
      type: "table";
      headers: string[];
      rows: string[][];
    }
  | {
      type: "quote";
      text: string;
      cite?: string;
    }
  | {
      type: "callout";
      title: string;
      text: string;
    };

export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: ArticleContentBlock[];
  category: string;
  tags: string[];
  author: string;
  publishDate: string;
  readTime: string;
  featured: boolean;
  featuredImage: string;
  seo: ArticleSeo;
}
