import { UserReview } from './userReview';
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  hidden: boolean;
  bestPriceNow: number;
  bestPriceOverall: number;
  averagePriceNow: number;
  averagePriceOverall: number;
  currencyCode: string;
  averageScore: number;
  reviews: UserReview[]
}
