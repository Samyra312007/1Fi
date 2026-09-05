export interface UserProfile {
  name: string;
  phone: string;
  initial: string;
}

export interface QuickAction {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  iconBackgroundColor: string;
  badge?: string;
  badgeColor?: string;
  onPress?: () => void;
}

export interface ProductVariant {
  id: string;
  type: 'color' | 'storage' | 'size';
  label: string;
  value: string;
  priceModifier: number;
}

export interface EMIPlan {
  id: string;
  tenure: number;
  monthlyPayment: number;
  totalCost: number;
  interestRate: number;
  isNoCost: boolean;
  processingFee: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  discountedPrice: number;
  images: string[];
  category: string;
  rating: number;
  reviewCount: number;
  variants: ProductVariant[];
  emiPlans: EMIPlan[];
  specs: Record<string, string>;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
