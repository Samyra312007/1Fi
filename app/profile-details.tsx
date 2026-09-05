import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors, Spacing, BorderRadius, FontSize } from '../src/constants/theme';

interface KYCField {
  label: string;
  value: string;
  status: 'not_provided' | 'verified';
}

const KYC_FIELDS: KYCField[] = [
  { label: 'Full Name', value: '', status: 'not_provided' },
  { label: 'Email', value: '', status: 'not_provided' },
  { label: 'Phone Number', value: '+91 9873337429', status: 'verified' },
  { label: 'PAN', value: '', status: 'not_provided' },
  { label: 'Date of Birth', value: '', status: 'not_provided' },
  { label: 'Gender', value: '', status: 'not_provided' },
];

function StatusBadge({ status, value }: { status: 'not_provided' | 'verified'; value: string }) {
  if (status === 'verified') {
    return (
      <View style={styles.verifiedBadge}>
        <Ionicons name="checkmark" size={14} color={Colors.success} />
        <Text style={styles.verifiedText}>Verified</Text>
      </View>
    );
  }
  return (
    <View style={styles.notProvidedBadge}>
      <Text style={styles.notProvidedDash}>—</Text>
      <Text style={styles.notProvidedText}>Not Provided</Text>
    </View>
  );
}

export default function ProfileDetailsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.userSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>U</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>User</Text>
            <Text style={styles.userPhone}>+91 9873337429</Text>
            <View style={styles.kycStatusRow}>
              <Text style={styles.kycStatusLabel}>KYC Status:</Text>
              <View style={styles.pendingDot} />
              <Text style={styles.pendingText}>Pending</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionHeader}>KYC DETAILS</Text>

        <View style={styles.kycCard}>
          {KYC_FIELDS.map((field, index) => (
            <View key={field.label}>
              <View style={styles.fieldRow}>
                <View style={styles.fieldLeft}>
                  <Text style={styles.fieldLabel}>{field.label}</Text>
                  <Text style={styles.fieldValue}>
                    {field.value || '—'}
                  </Text>
                </View>
                <StatusBadge status={field.status} value={field.value} />
              </View>
              {index < KYC_FIELDS.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
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
  },
  backButton: {
    marginRight: Spacing.sm,
    padding: Spacing.xs,
  },
  headerTitle: {
    fontSize: FontSize.xxl,
    fontWeight: '700',
    color: Colors.text,
  },
  container: {
    flex: 1,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xl,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  avatarText: {
    fontSize: FontSize.xxl,
    fontWeight: '600',
    color: Colors.surface,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: FontSize.xl,
    fontWeight: '700',
    color: Colors.text,
  },
  userPhone: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  kycStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.xs,
    gap: Spacing.xs,
  },
  kycStatusLabel: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
  pendingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.warning,
  },
  pendingText: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.warning,
  },
  sectionHeader: {
    fontSize: FontSize.xs,
    fontWeight: '600',
    color: Colors.textTertiary,
    letterSpacing: 1.5,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },
  kycCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    marginHorizontal: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.border,
    borderStyle: 'dashed',
  },
  fieldRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.lg,
  },
  fieldLeft: {
    flex: 1,
  },
  fieldLabel: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  fieldValue: {
    fontSize: FontSize.md,
    fontWeight: '600',
    color: Colors.text,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.border,
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
    gap: 4,
  },
  verifiedText: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.success,
  },
  notProvidedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: Colors.border,
    borderStyle: 'dashed',
    gap: 4,
  },
  notProvidedDash: {
    fontSize: FontSize.sm,
    color: Colors.textTertiary,
  },
  notProvidedText: {
    fontSize: FontSize.sm,
    color: Colors.textTertiary,
  },
  bottomSpacer: {
    height: 100,
  },
});
