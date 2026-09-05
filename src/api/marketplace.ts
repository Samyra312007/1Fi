import { Product, Category } from '../types';
import { MOCK_PRODUCTS, CATEGORIES } from '../data/mock-products';

const SIMULATED_DELAY = 600;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProducts(
  categoryId?: string,
  search?: string
): Promise<Product[]> {
  await delay(SIMULATED_DELAY);
  let products = categoryId && categoryId !== 'all'
    ? MOCK_PRODUCTS.filter((p) => p.category === categoryId)
    : [...MOCK_PRODUCTS];

  if (search && search.trim()) {
    const q = search.toLowerCase().trim();
    products = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  return products;
}

export async function getProductById(id: string): Promise<Product | null> {
  await delay(SIMULATED_DELAY);
  return MOCK_PRODUCTS.find((p) => p.id === id) || null;
}

export async function getCategories(): Promise<Category[]> {
  await delay(300);
  return CATEGORIES;
}
