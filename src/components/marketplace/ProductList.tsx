import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, FontSize } from '../../constants/theme';
import { useProducts } from '../../hooks/useMarketplace';
import { CATEGORIES } from '../../data/mock-products';
import { CategoryChips } from './CategoryChips';
import { ProductCard } from './ProductCard';
import { MarketplaceSkeleton } from './MarketplaceSkeleton';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_MARGIN = Spacing.xs;
const CARD_WIDTH = (SCREEN_WIDTH - Spacing.lg * 2 - CARD_MARGIN * 2) / 2;

export function ProductList() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { products, loading, error, refetch } = useProducts(selectedCategory, searchQuery);

  const handleProductPress = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <MarketplaceSkeleton />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Ionicons name="alert-circle-outline" size={48} color={Colors.textTertiary} />
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={refetch}>
          <Text style={styles.retryText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (products.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Ionicons name="search-outline" size={48} color={Colors.textTertiary} />
        <Text style={styles.emptyText}>No products found</Text>
        <Text style={styles.emptySubtext}>Try a different search or category</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CategoryChips
        categories={CATEGORIES}
        selectedId={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={{ width: CARD_WIDTH }}>
            <ProductCard
              product={item}
              onPress={() => handleProductPress(item.id)}
            />
          </View>
        )}
        ListFooterComponent={<View style={styles.bottomSpacer} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    paddingTop: Spacing.lg,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xxl,
    gap: Spacing.md,
  },
  errorText: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
  },
  retryText: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.surface,
  },
  emptyText: {
    fontSize: FontSize.lg,
    fontWeight: '600',
    color: Colors.text,
  },
  emptySubtext: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
  listContent: {
    paddingHorizontal: Spacing.sm,
  },
  row: {
    justifyContent: 'center',
  },
  bottomSpacer: {
    height: 100,
  },
});
