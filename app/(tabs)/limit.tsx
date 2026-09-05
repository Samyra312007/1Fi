import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, FontSize } from '../../src/constants/theme';

export default function LimitScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <Ionicons name="lock-closed" size={48} color={Colors.surface} />
          </View>
          <Ionicons name="sparkles" size={12} color="#A78BFA" style={styles.sparkle1} />
          <Ionicons name="star" size={10} color="#FBBF24" style={styles.sparkle2} />
        </View>

        <Text style={styles.label}>CHECK ELIGIBILITY</Text>

        <Text style={styles.heading}>
          Shop on 0% interest backed by your Mutual Funds
        </Text>

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Fetch my portfolio</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xxl,
    paddingBottom: 100,
  },
  iconContainer: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xxl,
  },
  iconBackground: {
    width: 100,
    height: 100,
    borderRadius: 24,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sparkle1: {
    position: 'absolute',
    top: 10,
    left: 15,
  },
  sparkle2: {
    position: 'absolute',
    top: 15,
    right: 10,
  },
  label: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.textTertiary,
    letterSpacing: 1.5,
    marginBottom: Spacing.md,
  },
  heading: {
    fontSize: FontSize.xl,
    fontWeight: '700',
    color: Colors.text,
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: Spacing.xxxl,
  },
  button: {
    width: '100%',
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.lg,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: FontSize.lg,
    fontWeight: '600',
    color: Colors.badgeText,
  },
});
