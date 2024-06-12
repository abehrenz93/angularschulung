export interface Book {
  isbn: string;
  title: string;
  // authors: string[];
  description: string;
  rating: number;
  price: number;
  firstThumbnailUrl?: string
  thumbnails? : string[];
}
