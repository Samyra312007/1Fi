import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, FontSize } from '../../constants/theme';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}

export function ProductCard({ product, onPress }: ProductCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Ionicons name="cube-outline" size={32} color={Colors.textTertiary} />
        </View>
        {product.discountedPrice < product.price && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>
              {Math.round((1 - product.discountedPrice / product.price) * 100)}% OFF
            </Text>
          </View>
        )}
      </View>

      <View style={styles.info}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.name} numberOfLines={2}>{product.name}</Text>

        <View style={styles.ratingRow}>
          <Ionicons name="star" size={12} color="#FBBF24" />
          <Text style={styles.rating}>{product.rating}</Text>
          <Text style={styles.reviewCount}>({product.reviewCount.toLocaleString()})</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.discountedPrice}>{formatPrice(product.discountedPrice)}</Text>
          {product.discountedPrice < product.price && (
            <Text style={styles.originalPrice}>{formatPrice(product.price)}</Text>
          )}
        </View>

        <View style={styles.emiBadge}>
          <Ionicons name="time-outline" size={10} color={Colors.primary} />
          <Text style={styles.emiText}>No-cost EMI from {formatPrice(product.emiPlans[0]?.monthlyPayment || 0)}/mo</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    margin: Spacing.xs,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#F8F8FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  discountBadge: {
    position: 'absolute',
    top: Spacing.sm,
    left: Spacing.sm,
    backgroundColor: Colors.error,
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
  },
  discountText: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.surface,
  },
  info: {
    padding: Spacing.md,
  },
  brand: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.textTertiary,
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  name: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.text,
    lineHeight: 18,
    marginBottom: Spacing.xs,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: Spacing.xs,
  },
  rating: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.text,
  },
  reviewCount: {
    fontSize: 10,
    color: Colors.textTertiary,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.xs,
  },
  discountedPrice: {
    fontSize: FontSize.md,
    fontWeight: '700',
    color: Colors.text,
  },
  originalPrice: {
    fontSize: 11,
    color: Colors.textTertiary,
    textDecorationLine: 'line-through',
  },
  emiBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: Colors.primaryLight,
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 3,
    alignSelf: 'flex-start',
  },
  emiText: {
    fontSize: 9,
    fontWeight: '600',
    color: Colors.primary,
  },
});
