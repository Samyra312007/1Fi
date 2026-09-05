import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, FontSize } from '../../constants/theme';

interface MarketplaceHeaderProps {
  searchQuery: string;
  onSearchChange: (text: string) => void;
}

export function MarketplaceHeader({ searchQuery, onSearchChange }: MarketplaceHeaderProps) {
  return (
    <>
      <View style={styles.heroBanner}>
        <View style={styles.heroContent}>
          <View style={styles.heroBadge}>
            <Ionicons name="sparkles" size={12} color="#FBBF24" />
            <Text style={styles.heroBadgeText}>NO-COST EMIs</Text>
          </View>
          <Text style={styles.heroTitle}>
            Shop today,{'\n'}Pay later using{'\n'}Mutual funds.
          </Text>
          <Text style={styles.heroDescription}>
            No credit score required. No interest.{'\n'}Backed by your investments.
          </Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={18} color={Colors.textTertiary} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          placeholderTextColor={Colors.textTertiary}
          value={searchQuery}
          onChangeText={onSearchChange}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  heroBanner: {
    backgroundColor: '#5B21B6',
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    overflow: 'hidden',
  },
  heroContent: {
    zIndex: 1,
  },
  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    gap: 4,
    marginBottom: Spacing.lg,
  },
  heroBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.surface,
    letterSpacing: 0.5,
  },
  heroTitle: {
    fontSize: FontSize.xxl + 4,
    fontWeight: '700',
    color: Colors.surface,
    lineHeight: 38,
    marginBottom: Spacing.md,
  },
  heroDescription: {
    fontSize: FontSize.sm,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    gap: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchInput: {
    flex: 1,
    fontSize: FontSize.sm,
    color: Colors.text,
    padding: 0,
  },
});
