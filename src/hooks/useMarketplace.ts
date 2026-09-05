import { useState, useEffect, useCallback } from 'react';
import { Product } from '../types';
import { getProducts, getProductById } from '../api/marketplace';

export function useProducts(categoryId: string, search: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getProducts(categoryId, search);
      setProducts(data);
    } catch {
      setError('Failed to load products. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [categoryId, search]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
}

export function useProductDetail(id: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [selectedEMI, setSelectedEMI] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await getProductById(id);
        if (!cancelled) {
          if (data) {
            setProduct(data);
            if (data.variants.length > 0) {
              setSelectedVariant(data.variants[0].id);
            }
            if (data.emiPlans.length > 0) {
              setSelectedEMI(data.emiPlans[0].id);
            }
          } else {
            setError('Product not found.');
          }
        }
      } catch {
        if (!cancelled) setError('Failed to load product details.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [id]);

  return { product, loading, error, selectedVariant, selectedEMI, setSelectedVariant, setSelectedEMI };
}
