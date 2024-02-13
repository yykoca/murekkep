export type Article = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  paragraphs: Paragraph[];
  createdAt: Date;
  readingTime: number;
  author: Author;
  authoredAt?: Date;
};

type Paragraph = {
  id: string;
  content: string;
};

type Author = {
  name: string;
};
