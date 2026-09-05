import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Colors, Spacing, BorderRadius, FontSize } from '../../src/constants/theme';
import { useProductDetail } from '../../src/hooks/useMarketplace';
import { PriceTag } from '../../src/components/marketplace/PriceTag';
import { ProductVariantPicker } from '../../src/components/marketplace/ProductVariantPicker';
import { EMIPlanSheet } from '../../src/components/marketplace/EMIPlanSheet';

function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}

export default function ProductDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const {
    product,
    loading,
    error,
    selectedVariant,
    selectedEMI,
    setSelectedVariant,
    setSelectedEMI,
  } = useProductDetail(id || '');

  const [showEMISheet, setShowEMISheet] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.centerContainer}>
          <Text style={styles.loadingText}>Loading product...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error || !product) {
    return (
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color={Colors.text} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Product</Text>
        </View>
        <View style={styles.centerContainer}>
          <Ionicons name="alert-circle-outline" size={48} color={Colors.textTertiary} />
          <Text style={styles.errorText}>{error || 'Product not found'}</Text>
        </View>
      </SafeAreaView>
    );
  }

  const currentEMI = product.emiPlans.find((p: { id: string }) => p.id === selectedEMI);
  const totalPrice = product.variants
    .filter((v: { id: string }) => v.id === selectedVariant)
    .reduce((sum: number, v: { priceModifier: number }) => sum + v.priceModifier, product.discountedPrice);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{product.name}</Text>
        <TouchableOpacity style={styles.shareButton}>
          <Ionicons name="share-outline" size={22} color={Colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.imageCarousel}>
          <View style={styles.imageContainer}>
            <View style={styles.imagePlaceholder}>
              <Ionicons name="cube-outline" size={80} color={Colors.textTertiary} />
            </View>
          </View>
          <View style={styles.imageDots}>
            {product.images.map((_img: string, i: number) => (
              <View
                key={i}
                style={[styles.imageDot, i === activeImageIndex && styles.imageDotActive]}
              />
            ))}
          </View>
        </View>

        <View style={styles.productInfo}>
          <Text style={styles.brand}>{product.brand}</Text>
          <Text style={styles.productName}>{product.name}</Text>

          <View style={styles.ratingRow}>
            <Ionicons name="star" size={16} color="#FBBF24" />
            <Text style={styles.rating}>{product.rating}</Text>
            <Text style={styles.reviewCount}>({product.reviewCount.toLocaleString()} reviews)</Text>
          </View>

          <PriceTag
            price={totalPrice}
            originalPrice={product.price}
            emiPlan={currentEMI}
          />
        </View>

        {product.variants.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Select Variant</Text>
            <ProductVariantPicker
              variants={product.variants}
              selectedId={selectedVariant}
              onSelect={setSelectedVariant}
            />
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EMI Plans</Text>
          <TouchableOpacity
            style={styles.emiSelector}
            onPress={() => setShowEMISheet(true)}
            activeOpacity={0.7}
          >
            <View style={styles.emiSelectorLeft}>
              <Ionicons name="time-outline" size={20} color={Colors.primary} />
              <View>
                <Text style={styles.emiSelectorTitle}>
                  {currentEMI ? `${currentEMI.tenure} months` : 'Select EMI plan'}
                </Text>
                <Text style={styles.emiSelectorSubtitle}>
                  {currentEMI
                    ? `${formatPrice(currentEMI.monthlyPayment)}/mo${currentEMI.isNoCost ? ' • No-cost EMI' : ''}`
                    : 'Choose a plan'}
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={18} color={Colors.textTertiary} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Product Details</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>

        {Object.keys(product.specs).length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Specifications</Text>
            <View style={styles.specsContainer}>
              {Object.entries(product.specs).map(([key, value]) => (
                <View key={key} style={styles.specRow}>
                  <Text style={styles.specKey}>{key}</Text>
                  <Text style={styles.specValue}>{String(value)}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        <View style={styles.bottomSpacer} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => setShowEMISheet(true)}
          activeOpacity={0.8}
        >
          <Text style={styles.buyText}>Buy with 1Fi</Text>
        </TouchableOpacity>
      </View>

      <EMIPlanSheet
        visible={showEMISheet}
        plans={product.emiPlans}
        selectedId={selectedEMI}
        onSelect={setSelectedEMI}
        onConfirm={() => setShowEMISheet(false)}
        onClose={() => setShowEMISheet(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  backButton: {
    marginRight: Spacing.sm,
    padding: Spacing.xs,
  },
  headerTitle: {
    flex: 1,
    fontSize: FontSize.lg,
    fontWeight: '700',
    color: Colors.text,
  },
  shareButton: {
    padding: Spacing.xs,
  },
  content: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.md,
  },
  loadingText: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
  },
  errorText: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
  },
  imageCarousel: {
    backgroundColor: Colors.surface,
    paddingVertical: Spacing.xl,
    alignItems: 'center',
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: BorderRadius.xl,
    overflow: 'hidden',
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageDots: {
    flexDirection: 'row',
    gap: 6,
    marginTop: Spacing.lg,
  },
  imageDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.border,
  },
  imageDotActive: {
    backgroundColor: Colors.primary,
    width: 18,
  },
  productInfo: {
    padding: Spacing.xl,
  },
  brand: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textTertiary,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  productName: {
    fontSize: FontSize.xl,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: Spacing.md,
  },
  rating: {
    fontSize: FontSize.md,
    fontWeight: '700',
    color: Colors.text,
  },
  reviewCount: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
  section: {
    paddingHorizontal: Spacing.xl,
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    fontSize: FontSize.md,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  emiSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  emiSelectorLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  emiSelectorTitle: {
    fontSize: FontSize.md,
    fontWeight: '700',
    color: Colors.text,
  },
  emiSelectorSubtitle: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
  description: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  specsContainer: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  specRow: {
    flexDirection: 'row',
    padding: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  specKey: {
    width: 100,
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.text,
  },
  specValue: {
    flex: 1,
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
  bottomSpacer: {
    height: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.surface,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
    paddingBottom: 34,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  buyButton: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.lg,
    alignItems: 'center',
  },
  buyText: {
    fontSize: FontSize.lg,
    fontWeight: '700',
    color: Colors.surface,
  },
});
