import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors, Spacing, BorderRadius, FontSize } from '../src/constants/theme';

type TierTab = 'eligibility' | 'first_loan';

const TIERS: Record<TierTab, { range: string; credits: number }[]> = {
  eligibility: [
    { range: '₹10K - ₹50K', credits: 50 },
    { range: '₹50K - ₹1L', credits: 100 },
    { range: '₹1L - ₹5L', credits: 200 },
    { range: '₹5L - ₹10L', credits: 300 },
    { range: '₹10L+', credits: 500 },
  ],
  first_loan: [
    { range: '₹10K - ₹50K', credits: 100 },
    { range: '₹50K - ₹1L', credits: 200 },
    { range: '₹1L - ₹5L', credits: 500 },
    { range: '₹5L - ₹10L', credits: 1000 },
    { range: '₹10L+', credits: 1500 },
  ],
};

export default function ReferEarnScreen() {
  const router = useRouter();
  const [activeTierTab, setActiveTierTab] = useState<TierTab>('eligibility');

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Refer & Earn</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>
              Invite your friends &{'\n'}earn upto ₹50,000
            </Text>
            <Text style={styles.bannerCredit}>1 credit = ₹1</Text>
          </View>
          <View style={styles.bannerArt}>
            <Text style={styles.bannerArtText}>REFER{'\n'}AND{'\n'}EARN</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <View style={[styles.statIcon, { backgroundColor: '#EDE7FB' }]}>
              <Ionicons name="people-outline" size={20} color={Colors.primary} />
            </View>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>FRIENDS{'\n'}REFERRED</Text>
          </View>
          <View style={styles.statItem}>
            <View style={[styles.statIcon, { backgroundColor: '#D1FAE5' }]}>
              <Ionicons name="time-outline" size={20} color={Colors.success} />
            </View>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>CREDITS{'\n'}REDEEMED</Text>
          </View>
          <View style={styles.statItem}>
            <View style={[styles.statIcon, { backgroundColor: '#FEF3C7' }]}>
              <Ionicons name="wallet-outline" size={20} color={Colors.warning} />
            </View>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>CREDITS{'\n'}REMAINING</Text>
          </View>
        </View>

        <View style={styles.referralCard}>
          <Text style={styles.referralLabel}>YOUR REFERRAL CODE</Text>
          <View style={styles.referralRow}>
            <Text style={styles.referralCode}>JLPU7429</Text>
            <TouchableOpacity style={styles.copyIconButton}>
              <Ionicons name="copy-outline" size={20} color={Colors.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.referralDivider} />
          <View style={styles.referralButtons}>
            <TouchableOpacity style={styles.copyLinkButton}>
              <Ionicons name="link-outline" size={18} color={Colors.primary} />
              <Text style={styles.copyLinkText}>Copy link</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareLinkButton}>
              <Ionicons name="share-social-outline" size={18} color={Colors.surface} />
              <Text style={styles.shareLinkText}>Share link</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Earn twice per friend</Text>

        <View style={styles.rewardsTimeline}>
          <View style={styles.rewardItem}>
            <View style={styles.rewardIconContainer}>
              <View style={[styles.rewardIcon, { backgroundColor: Colors.primary }]}>
                <Ionicons name="checkmark-circle-outline" size={24} color={Colors.surface} />
              </View>
            </View>
            <View style={styles.rewardContent}>
              <Text style={styles.rewardBadge}>REWARD 1 · ELIGIBILITY CHECK</Text>
              <Text style={styles.rewardTitle}>Friend checks eligibility</Text>
              <Text style={styles.rewardDescription}>
                You both earn credits the moment your friend checks their eligibility — the higher the eligibility, the higher the reward.
              </Text>
              <View style={styles.creditBadge}>
                <Ionicons name="diamond-outline" size={14} color={Colors.primary} />
                <Text style={styles.creditBadgeText}>50 – 500 credits</Text>
              </View>
            </View>
          </View>

          <View style={styles.timelineConnector} />

          <View style={styles.rewardItem}>
            <View style={styles.rewardIconContainer}>
              <View style={[styles.rewardIcon, { backgroundColor: Colors.primary }]}>
                <Ionicons name="cash-outline" size={24} color={Colors.surface} />
              </View>
            </View>
            <View style={styles.rewardContent}>
              <Text style={styles.rewardBadge}>REWARD 2 · FIRST LOAN</Text>
              <Text style={styles.rewardTitle}>Friend takes their first loan</Text>
              <Text style={styles.rewardDescription}>
                A bonus lands for both of you when your friend disburses their first loan — the bigger the loan, the bigger the bonus.
              </Text>
              <View style={[styles.creditBadge, { backgroundColor: '#ECFDF5' }]}>
                <Ionicons name="trending-up-outline" size={14} color={Colors.success} />
                <Text style={[styles.creditBadgeText, { color: Colors.success }]}>up to 1,500 credits</Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Reward tiers</Text>

        <View style={styles.tiersCard}>
          <View style={styles.tiersTabs}>
            <TouchableOpacity
              style={[styles.tiersTab, activeTierTab === 'eligibility' && styles.tiersTabActive]}
              onPress={() => setActiveTierTab('eligibility')}
            >
              <Text style={[styles.tiersTabText, activeTierTab === 'eligibility' && styles.tiersTabTextActive]}>
                Eligibility check
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tiersTab, activeTierTab === 'first_loan' && styles.tiersTabActive]}
              onPress={() => setActiveTierTab('first_loan')}
            >
              <Text style={[styles.tiersTabText, activeTierTab === 'first_loan' && styles.tiersTabTextActive]}>
                First loan
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tiersList}>
            {TIERS[activeTierTab].map((tier, index) => (
              <View key={tier.range}>
                <View style={styles.tierRow}>
                  <Text style={styles.tierRange}>{tier.range}</Text>
                  <View style={styles.tierCredits}>
                    <Text style={styles.tierCreditsValue}>{tier.credits}</Text>
                    <Text style={styles.tierCreditsLabel}>credits</Text>
                  </View>
                </View>
                {index < TIERS[activeTierTab].length - 1 && <View style={styles.tierDivider} />}
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.importantDetails}>
          <View style={styles.importantDetailsLeft}>
            <Ionicons name="information-circle-outline" size={22} color={Colors.primary} />
            <Text style={styles.importantDetailsText}>Important Details</Text>
          </View>
          <Ionicons name="chevron-down" size={20} color={Colors.textTertiary} />
        </TouchableOpacity>

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
  content: {
    flex: 1,
  },
  banner: {
    marginHorizontal: Spacing.lg,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.primary,
    padding: Spacing.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  bannerContent: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: FontSize.xl,
    fontWeight: '700',
    color: Colors.surface,
    lineHeight: 28,
  },
  bannerCredit: {
    fontSize: FontSize.md,
    color: Colors.surface,
    marginTop: Spacing.sm,
    fontWeight: '600',
  },
  bannerArt: {
    marginLeft: Spacing.md,
  },
  bannerArtText: {
    fontSize: 22,
    fontWeight: '900',
    color: 'rgba(255,255,255,0.3)',
    lineHeight: 26,
    textAlign: 'right',
  },
  statsRow: {
    flexDirection: 'row',
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    borderStyle: 'dashed',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    gap: Spacing.xs,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statValue: {
    fontSize: FontSize.xxl,
    fontWeight: '700',
    color: Colors.text,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.textTertiary,
    textAlign: 'center',
    letterSpacing: 0.5,
    lineHeight: 14,
  },
  referralCard: {
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.xl,
    borderWidth: 1,
    borderColor: Colors.border,
    borderStyle: 'dashed',
  },
  referralLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.textTertiary,
    letterSpacing: 1,
    marginBottom: Spacing.sm,
  },
  referralRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  referralCode: {
    fontSize: FontSize.xxl,
    fontWeight: '700',
    color: Colors.primary,
    letterSpacing: 1,
  },
  copyIconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  referralDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.border,
    marginVertical: Spacing.lg,
  },
  referralButtons: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  copyLinkButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    gap: Spacing.xs,
  },
  copyLinkText: {
    fontSize: FontSize.md,
    fontWeight: '600',
    color: Colors.primary,
  },
  shareLinkButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.primary,
    gap: Spacing.xs,
  },
  shareLinkText: {
    fontSize: FontSize.md,
    fontWeight: '600',
    color: Colors.surface,
  },
  sectionTitle: {
    fontSize: FontSize.xl,
    fontWeight: '700',
    color: Colors.text,
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.xxl,
    marginBottom: Spacing.lg,
  },
  rewardsTimeline: {
    marginHorizontal: Spacing.lg,
  },
  rewardItem: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  rewardIconContainer: {
    alignItems: 'center',
  },
  rewardIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timelineConnector: {
    width: 2,
    height: Spacing.xl,
    backgroundColor: Colors.primaryLight,
    marginLeft: 23,
    marginVertical: Spacing.xs,
  },
  rewardContent: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    borderStyle: 'dashed',
  },
  rewardBadge: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.textTertiary,
    letterSpacing: 0.5,
    marginBottom: Spacing.xs,
  },
  rewardTitle: {
    fontSize: FontSize.md,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  rewardDescription: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: Spacing.md,
  },
  creditBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
    gap: 4,
  },
  creditBadgeText: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.primary,
  },
  tiersCard: {
    marginHorizontal: Spacing.lg,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    borderStyle: 'dashed',
    overflow: 'hidden',
  },
  tiersTabs: {
    flexDirection: 'row',
    padding: Spacing.sm,
    gap: Spacing.sm,
  },
  tiersTab: {
    flex: 1,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
  },
  tiersTabActive: {
    backgroundColor: Colors.primaryLight,
  },
  tiersTabText: {
    fontSize: FontSize.sm,
    fontWeight: '500',
    color: Colors.textTertiary,
  },
  tiersTabTextActive: {
    color: Colors.primary,
    fontWeight: '700',
  },
  tiersList: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.lg,
  },
  tierRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.lg,
  },
  tierRange: {
    fontSize: FontSize.md,
    color: Colors.text,
    fontWeight: '500',
  },
  tierCredits: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: Spacing.xs,
  },
  tierCreditsValue: {
    fontSize: FontSize.lg,
    fontWeight: '700',
    color: Colors.text,
  },
  tierCreditsLabel: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
  tierDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.border,
  },
  importantDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.xl,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  importantDetailsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  importantDetailsText: {
    fontSize: FontSize.md,
    fontWeight: '700',
    color: Colors.text,
  },
  bottomSpacer: {
    height: 100,
  },
});
