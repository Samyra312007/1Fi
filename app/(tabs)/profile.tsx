import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors, Spacing, BorderRadius, FontSize } from '../../src/constants/theme';
import { QuickActionItem } from '../../src/components/QuickActionItem';
import { UserHeader } from '../../src/components/UserHeader';
import { QuickAction } from '../../src/types';

export default function ProfileScreen() {
  const router = useRouter();

  const QUICK_ACTIONS: QuickAction[] = [
    {
      id: 'profile',
      title: 'Profile details',
      subtitle: 'Name, contact and KYC info',
      icon: 'person-outline',
      iconBackgroundColor: Colors.primaryLight,
      onPress: () => router.push('/profile-details'),
    },
  {
    id: 'purchases',
    title: 'Purchases',
    subtitle: 'Orders, invoices and loan status',
    icon: 'bag-handle-outline',
    iconBackgroundColor: Colors.primaryLight,
    onPress: () => router.push('/purchases'),
  },
  {
    id: 'pledge',
    title: 'Pledge history',
    subtitle: 'Funds you pledged or released',
    icon: 'heart-outline',
    iconBackgroundColor: Colors.primaryLight,
  },
  {
    id: 'invite',
    title: 'Invite friends',
    subtitle: 'Share the app, earn rewards',
    icon: 'people-outline',
    iconBackgroundColor: Colors.primaryLight,
    badge: 'EARN ₹500',
    badgeColor: Colors.primaryLight,
  },
  {
    id: 'support',
    title: 'Support & FAQs',
    subtitle: 'Find answers or contact us',
    icon: 'help-circle-outline',
    iconBackgroundColor: Colors.primaryLight,
  },
  {
    id: 'privacy',
    title: 'Privacy policy',
    subtitle: 'How we handle your data',
    icon: 'shield-checkmark-outline',
    iconBackgroundColor: Colors.primaryLight,
  },
  {
    id: 'terms',
    title: 'Terms & conditions',
    subtitle: 'Rules governing your use',
    icon: 'document-text-outline',
    iconBackgroundColor: Colors.primaryLight,
  },
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>
          Manage your account settings and personal preferences.
        </Text>

        <UserHeader user={{ name: 'User', phone: '+91 9873337429', initial: 'U' }} />

        <Text style={styles.sectionHeader}>QUICK ACTIONS</Text>

        <View style={styles.actionsCard}>
          {QUICK_ACTIONS.map((action, index) => (
            <QuickActionItem
              key={action.id}
              item={action}
              isLast={index === QUICK_ACTIONS.length - 1}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7}>
          <Ionicons name="log-out-outline" size={20} color={Colors.error} />
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Made with 💜 by 1Fi
        </Text>

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
  container: {
    flex: 1,
  },
  title: {
    fontSize: FontSize.title,
    fontWeight: '700',
    color: Colors.text,
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
  },
  subtitle: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.xs,
    lineHeight: 22,
  },
  sectionHeader: {
    fontSize: FontSize.xs,
    fontWeight: '600',
    color: Colors.textTertiary,
    letterSpacing: 1,
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.xl,
    marginBottom: Spacing.md,
  },
  actionsCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    marginHorizontal: Spacing.lg,
    overflow: 'hidden',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    paddingVertical: Spacing.lg,
    gap: Spacing.sm,
  },
  logoutText: {
    fontSize: FontSize.md,
    fontWeight: '600',
    color: Colors.error,
  },
  footer: {
    textAlign: 'center',
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    marginTop: Spacing.xxl,
  },
  bottomSpacer: {
    height: 100,
  },
});
