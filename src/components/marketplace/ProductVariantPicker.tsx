import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Spacing, BorderRadius, FontSize } from '../../constants/theme';
import { ProductVariant } from '../../types';

interface ProductVariantPickerProps {
  variants: ProductVariant[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function ProductVariantPicker({ variants, selectedId, onSelect }: ProductVariantPickerProps) {
  const grouped = variants.reduce<Record<string, ProductVariant[]>>((acc, v) => {
    if (!acc[v.type]) acc[v.type] = [];
    acc[v.type].push(v);
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      {Object.entries(grouped).map(([type, items]) => (
        <View key={type} style={styles.group}>
          <Text style={styles.groupLabel}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
          <View style={styles.options}>
            {items.map((variant) => {
              const isActive = variant.id === selectedId;
              return (
                <TouchableOpacity
                  key={variant.id}
                  style={[styles.option, isActive && styles.optionActive]}
                  onPress={() => onSelect(variant.id)}
                  activeOpacity={0.7}
                >
                  <Text style={[styles.optionText, isActive && styles.optionTextActive]}>
                    {variant.label}
                  </Text>
                  {variant.priceModifier !== 0 && (
                    <Text style={[styles.optionPrice, isActive && styles.optionPriceActive]}>
                      {variant.priceModifier > 0 ? '+' : ''}₹{Math.abs(variant.priceModifier).toLocaleString('en-IN')}
                    </Text>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.lg,
  },
  group: {
    gap: Spacing.sm,
  },
  groupLabel: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.text,
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  option: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
    borderWidth: 1.5,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
  },
  optionActive: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight,
  },
  optionText: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.text,
  },
  optionTextActive: {
    color: Colors.primary,
  },
  optionPrice: {
    fontSize: 10,
    color: Colors.textTertiary,
    marginTop: 2,
  },
  optionPriceActive: {
    color: Colors.primary,
  },
});
