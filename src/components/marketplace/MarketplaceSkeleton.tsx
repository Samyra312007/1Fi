import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Spacing, BorderRadius } from '../../constants/theme';

export function MarketplaceSkeleton() {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <View key={i} style={styles.card}>
          <View style={styles.imageSkeleton} />
          <View style={styles.infoSkeleton}>
            <View style={styles.lineShort} />
            <View style={styles.lineLong} />
            <View style={styles.lineMedium} />
            <View style={styles.lineShort} />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Spacing.sm,
  },
  card: {
    width: '48%',
    margin: '1%',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  imageSkeleton: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#E5E7EB',
  },
  infoSkeleton: {
    padding: Spacing.md,
    gap: Spacing.sm,
  },
  lineShort: {
    width: '40%',
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E5E7EB',
  },
  lineLong: {
    width: '90%',
    height: 12,
    borderRadius: 6,
    backgroundColor: '#E5E7EB',
  },
  lineMedium: {
    width: '60%',
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E5E7EB',
  },
});
