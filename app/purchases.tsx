import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors, Spacing, BorderRadius, FontSize } from '../src/constants/theme';

type TabType = 'all' | 'pending' | 'completed';

const TABS: { key: TabType; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'pending', label: 'Pending' },
  { key: 'completed', label: 'Completed' },
];

const EMPTY_MESSAGES: Record<TabType, { title: string; subtitle: string }> = {
  all: {
    title: 'No purchases found',
    subtitle: 'Your purchases will appear here once they are placed.',
  },
  pending: {
    title: 'No purchases found',
    subtitle: 'No pending purchases at the moment.',
  },
  completed: {
    title: 'No purchases found',
    subtitle: 'No confirmed purchases at the moment.',
  },
};

export default function PurchasesScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const emptyMsg = EMPTY_MESSAGES[activeTab];

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Purchases</Text>
      </View>

      <Text style={styles.subtitle}>
        Track and manage your previous purchases and loan details.
      </Text>

      <View style={styles.tabsContainer}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => setActiveTab(tab.key)}
            activeOpacity={0.7}
          >
            <Text
              style={[styles.tabLabel, activeTab === tab.key && styles.tabLabelActive]}
            >
              {tab.label}
            </Text>
            {activeTab === tab.key && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.emptyCard}>
          <View style={styles.emptyIconContainer}>
            <Ionicons name="cube-outline" size={40} color={Colors.textTertiary} />
          </View>
          <Text style={styles.emptyTitle}>{emptyMsg.title}</Text>
          <Text style={styles.emptySubtitle}>{emptyMsg.subtitle}</Text>
        </View>
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
  subtitle: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    lineHeight: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    gap: Spacing.xl,
    marginBottom: Spacing.lg,
  },
  tab: {
    paddingBottom: Spacing.sm,
  },
  tabLabel: {
    fontSize: FontSize.md,
    fontWeight: '500',
    color: Colors.textTertiary,
  },
  tabLabelActive: {
    color: Colors.text,
    fontWeight: '700',
  },
  tabIndicator: {
    height: 3,
    backgroundColor: Colors.text,
    borderRadius: 1.5,
    marginTop: Spacing.xs,
  },
  content: {
    flex: 1,
  },
  emptyCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    marginHorizontal: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    borderStyle: 'dashed',
    paddingVertical: Spacing.xxxl,
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
  },
  emptyIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  emptyTitle: {
    fontSize: FontSize.lg,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  emptySubtitle: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
});
