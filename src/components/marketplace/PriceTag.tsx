import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing, BorderRadius, FontSize } from '../../constants/theme';
import { EMIPlan } from '../../types';

interface PriceTagProps {
  price: number;
  originalPrice?: number;
  emiPlan?: EMIPlan;
  compact?: boolean;
}

function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}

export function PriceTag({ price, originalPrice, emiPlan, compact }: PriceTagProps) {
  return (
    <View style={styles.container}>
      <View style={styles.priceRow}>
        <Text style={[styles.price, compact && styles.priceCompact]}>{formatPrice(price)}</Text>
        {originalPrice && originalPrice > price && (
          <Text style={styles.originalPrice}>{formatPrice(originalPrice)}</Text>
        )}
        {originalPrice && originalPrice > price && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>
              {Math.round((1 - price / originalPrice) * 100)}% OFF
            </Text>
          </View>
        )}
      </View>
      {emiPlan && (
        <Text style={styles.emiInfo}>
          or {formatPrice(emiPlan.monthlyPayment)}/mo for {emiPlan.tenure} months
          {emiPlan.isNoCost ? ' (No-cost EMI)' : ''}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  price: {
    fontSize: FontSize.xl,
    fontWeight: '700',
    color: Colors.text,
  },
  priceCompact: {
    fontSize: FontSize.lg,
  },
  originalPrice: {
    fontSize: FontSize.md,
    color: Colors.textTertiary,
    textDecorationLine: 'line-through',
  },
  discountBadge: {
    backgroundColor: '#DCFCE7',
    borderRadius: BorderRadius.sm,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  discountText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#16A34A',
  },
  emiInfo: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
});
