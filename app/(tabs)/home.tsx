import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors, Spacing, BorderRadius, FontSize } from '../../src/constants/theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const OFFERS = [
  {
    id: '1',
    tag: 'HOLIDAY VOUCHER DEAL',
    title: 'Book Your Euro-phoric Escape with 1Fi',
    subtitle: 'Starts at ₹2,481/mo',
    partner: 'make my trip',
    colors: ['#1a0a3e', '#4a1a6e', '#8b2fc9'],
  },
  {
    id: '2',
    tag: 'ELECTRONICS SALE',
    title: 'Shop Big at Croma for Everyday Electronics',
    subtitle: 'Gadgets on easy EMIs',
    partner: 'croma',
    colors: ['#0a0a2e', '#1a1a4e', '#2a2a6e'],
  },
  {
    id: '3',
    tag: 'FURNITURE | MATTRESS | HOME DECOR',
    title: 'Dream homes to sweet dreams',
    subtitle: 'Comfort on 12m no-cost EMIs',
    partner: 'wakefit',
    colors: ['#1a0a3e', '#3a1a5e', '#6a2fae'],
  },
  {
    id: '4',
    tag: 'APPLE FLAGSHIP DEAL',
    title: 'Upgrade to iPhone 17 Pro with Easy EMIs',
    subtitle: 'Upto 24m no cost EMI',
    partner: 'apple',
    colors: ['#2a0a0a', '#4a1a1a', '#6a2a2a'],
  },
  {
    id: '5',
    tag: 'ADVENTURE RIDE DEAL',
    title: 'Upgrade to Your next Adventurous Ride',
    subtitle: 'Adventure on 60m EMIs',
    partner: 'suzuki',
    colors: ['#0a1a0a', '#1a3a1a', '#2a5a2a'],
  },
];

const TOP_BRANDS = [
  { name: 'EaseMyTrip', icon: '✈️' },
  { name: 'Yatra', icon: '🛫' },
  { name: 'Taj', icon: '🏛️' },
  { name: 'Apple', icon: '' },
  { name: 'Vijay Sales', icon: '🛒' },
  { name: 'MakeMyTrip', icon: '🧳' },
  { name: 'Air India', icon: '✈️' },
  { name: 'Goibibo', icon: '🏨' },
];

const WHY_PAY_ITEMS = [
  { icon: 'percent', title: '0% interest', description: 'Pay only what you spend.' },
  { icon: 'flash', title: 'Zero charges', description: 'No fees, nothing hidden.' },
  { icon: 'scan', title: 'Quick approval', description: 'Instant, seamless process.' },
];

const HOW_IT_WORKS = [
  { step: 1, title: 'CONNECT YOUR PORTFOLIO', icon: 'scan-outline' },
  { step: 2, title: 'UNLOCK YOUR LIMIT', icon: 'lock-closed-outline' },
  { step: 3, title: 'SHOP & PAY LATER', icon: 'bag-outline' },
];

const HOME_FAQS = [
  { question: 'What is 1Fi?', answer: "1Fi is the world's first mutual fund-backed no-cost EMI platform, letting you shop anything at 0% interest for upto 24 months." },
  { question: 'Is 1Fi safe and legit?', answer: 'Yes. 1Fi works with SEBI-approved RTAs for pledging and RBI-regulated lending partners for loans.' },
  { question: 'Who is the RBI approved lending partner?', answer: 'We work with Kalandri Capital Private Limited, which is an RBI licensed NBFC.' },
  { question: 'What documents are needed to take a loan?', answer: 'No physical documents are required. You only need eligible mutual fund units, PAN, and Aadhaar. You can complete the loan in just 3 mins.' },
  { question: 'Are there any hidden fees?', answer: 'No. We are fully transparent and do not charge processing, penal, bounce, foreclosure, setup, or lien-related charges.' },
  { question: 'What if markets fall?', answer: 'Your limit may reduce and impact Loan-to-value (LTV) ratio, so you may need to pledge more units or make a partial prepayment to be compliant with RBI regulations.' },
  { question: 'Are there any charges if I pay early to release my pledged mutual fund units?', answer: 'No, there aren\'t any charges for that. You can prepay the outstanding loan amount and release your mutual fund units whenever you want.' },
];

export default function HomeScreen() {
  const router = useRouter();
  const [activeOffer, setActiveOffer] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const scrollRef = useRef<ScrollView>(null);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.heroBanner}>
          <View style={styles.heroContent}>
            <Text style={styles.heroLabel}>GET STARTED</Text>
            <Text style={styles.heroTitle}>
              Shop on <Text style={styles.heroHighlight}>no-cost EMI</Text>
            </Text>
            <Text style={styles.heroDescription}>
              Backed by your mutual funds, No credit pull, No charges, & quick approval.
            </Text>
            <TouchableOpacity style={styles.heroButton} activeOpacity={0.8}>
              <Text style={styles.heroButtonText}>Check eligibility</Text>
              <Ionicons name="arrow-forward" size={16} color={Colors.text} />
            </TouchableOpacity>
          </View>
          <View style={styles.heroBadgeContainer}>
            <View style={styles.heroBadge}>
              <Text style={styles.heroBadgePercent}>0%</Text>
              <Text style={styles.heroBadgeText}>INTEREST</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <View style={styles.sectionBar} />
          <Text style={styles.sectionTitle}>OFFERS</Text>
        </View>

        <View style={styles.offersContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(e) => {
              const index = Math.round(e.nativeEvent.contentOffset.x / SCREEN_WIDTH);
              setActiveOffer(index);
            }}
          >
            {OFFERS.map((offer) => (
              <View key={offer.id} style={[styles.offerCard, { backgroundColor: offer.colors[2] }]}>
                <View style={styles.offerContent}>
                  <Text style={styles.offerTag}>{offer.tag}</Text>
                  <Text style={styles.offerTitle}>{offer.title}</Text>
                  <View style={styles.offerSubtitleRow}>
                    <Ionicons name="checkmark-circle" size={16} color="#10B981" />
                    <Text style={styles.offerSubtitle}>{offer.subtitle}</Text>
                  </View>
                </View>
                <View style={styles.offerPartnerBadge}>
                  <Text style={styles.offerPartnerText}>{offer.partner}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
          <View style={styles.dotsContainer}>
            {OFFERS.map((_, i) => (
              <View
                key={i}
                style={[styles.dot, activeOffer === i && styles.dotActive]}
              />
            ))}
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <View style={styles.sectionBar} />
          <Text style={styles.sectionTitle}>SHOP USING 1FI AT TOP BRANDS</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.brandsContainer}
        >
          {TOP_BRANDS.map((brand) => (
            <TouchableOpacity key={brand.name} style={styles.brandItem} activeOpacity={0.7}>
              <View style={styles.brandIconContainer}>
                <Text style={styles.brandIcon}>{brand.icon}</Text>
              </View>
              <Text style={styles.brandName} numberOfLines={1}>{brand.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <View style={styles.sectionBar} />
          <Text style={styles.sectionTitle}>WHY PAY WITH 1FI</Text>
        </View>

        <View style={styles.whyPayGrid}>
          {WHY_PAY_ITEMS.map((item) => (
            <View key={item.title} style={styles.whyPayItem}>
              <View style={styles.whyPayIcon}>
                {item.icon === 'percent' && <Ionicons name="pricetag-outline" size={20} color={Colors.primary} />}
                {item.icon === 'flash' && <Ionicons name="flash-outline" size={20} color={Colors.warning} />}
                {item.icon === 'scan' && <Ionicons name="scan-outline" size={20} color="#10B981" />}
              </View>
              <Text style={styles.whyPayTitle}>{item.title}</Text>
              <Text style={styles.whyPayDescription}>{item.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <View style={styles.sectionBar} />
          <Text style={styles.sectionTitle}>HOW 1FI WORKS</Text>
        </View>

        <View style={styles.howItWorksContainer}>
          {HOW_IT_WORKS.map((item, index) => (
            <React.Fragment key={item.step}>
              <View style={styles.howItWorksStep}>
                <View style={styles.stepCircle}>
                  <Text style={styles.stepNumber}>{item.step}</Text>
                </View>
                <View style={styles.stepIconContainer}>
                  <Ionicons name={item.icon as any} size={28} color={Colors.surface} />
                </View>
                <Text style={styles.stepTitle}>{item.title}</Text>
              </View>
              {index < HOW_IT_WORKS.length - 1 && (
                <View style={styles.stepConnector} />
              )}
            </React.Fragment>
          ))}
        </View>

        <TouchableOpacity style={styles.referBanner} activeOpacity={0.8}>
          <View style={styles.referContent}>
            <View style={styles.referBadge}>
              <Ionicons name="people" size={14} color={Colors.surface} />
              <Text style={styles.referBadgeText}>INVITE</Text>
            </View>
            <Text style={styles.referTitle}>
              Get <Text style={styles.referHighlight}>upto ₹1000</Text>{'\n'}for every friend.
            </Text>
            <Text style={styles.referSubtitle}>Plus they'll also get rewards.</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.sectionHeader}>
          <View style={styles.sectionBar} />
          <Text style={styles.sectionTitle}>FREQUENTLY ASKED QUESTIONS</Text>
        </View>

        <View style={styles.faqList}>
          {HOME_FAQS.map((faq) => {
            const isExpanded = expandedFaq === faq.question;
            return (
              <TouchableOpacity
                key={faq.question}
                style={[styles.faqItem, isExpanded && styles.faqItemExpanded]}
                onPress={() => setExpandedFaq(isExpanded ? null : faq.question)}
                activeOpacity={0.7}
              >
                <View style={styles.faqHeader}>
                  <Text style={[styles.faqQuestion, isExpanded && styles.faqQuestionExpanded]}>
                    {faq.question}
                  </Text>
                  <Ionicons
                    name={isExpanded ? 'chevron-up' : 'chevron-down'}
                    size={20}
                    color={isExpanded ? Colors.primary : Colors.textTertiary}
                  />
                </View>
                {isExpanded && (
                  <Text style={styles.faqAnswer}>{faq.answer}</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          style={styles.viewAllButton}
          activeOpacity={0.7}
          onPress={() => router.push('/support-faqs')}
        >
          <Text style={styles.viewAllText}>View all FAQs</Text>
          <Ionicons name="arrow-forward" size={16} color={Colors.primary} />
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 1Fi. All rights reserved.</Text>
          <View style={styles.footerLinks}>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Privacy</Text>
            </TouchableOpacity>
            <Text style={styles.footerDot}>·</Text>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Terms</Text>
            </TouchableOpacity>
          </View>
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
  container: {
    flex: 1,
  },
  heroBanner: {
    backgroundColor: '#6C3CE1',
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  heroContent: {
    flex: 1,
    zIndex: 1,
  },
  heroLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.7)',
    letterSpacing: 1.5,
    marginBottom: Spacing.sm,
  },
  heroTitle: {
    fontSize: FontSize.xxl,
    fontWeight: '700',
    color: Colors.surface,
    lineHeight: 34,
    marginBottom: Spacing.sm,
  },
  heroHighlight: {
    color: '#FBBF24',
  },
  heroDescription: {
    fontSize: FontSize.xs,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 18,
    marginBottom: Spacing.lg,
  },
  heroButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    alignSelf: 'flex-start',
    gap: Spacing.sm,
  },
  heroButtonText: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.text,
  },
  heroBadgeContainer: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  heroBadge: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroBadgePercent: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.surface,
  },
  heroBadgeText: {
    fontSize: 8,
    fontWeight: '700',
    color: Colors.surface,
    letterSpacing: 0.5,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.xxl,
    marginBottom: Spacing.md,
    gap: Spacing.sm,
  },
  sectionBar: {
    width: 4,
    height: 20,
    borderRadius: 2,
    backgroundColor: Colors.primary,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.text,
    letterSpacing: 0.5,
  },
  offersContainer: {
    marginBottom: Spacing.sm,
  },
  offerCard: {
    width: SCREEN_WIDTH - 48,
    marginHorizontal: Spacing.lg,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    minHeight: 200,
  },
  offerContent: {
    flex: 1,
  },
  offerTag: {
    fontSize: 9,
    fontWeight: '700',
    color: '#FBBF24',
    letterSpacing: 0.5,
    marginBottom: Spacing.sm,
  },
  offerTitle: {
    fontSize: FontSize.xxl,
    fontWeight: '700',
    color: Colors.surface,
    lineHeight: 32,
    marginBottom: Spacing.lg,
  },
  offerSubtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  offerSubtitle: {
    fontSize: FontSize.sm,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '500',
  },
  offerPartnerBadge: {
    position: 'absolute',
    top: Spacing.xl,
    right: Spacing.xl,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
  },
  offerPartnerText: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.surface,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.md,
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.border,
  },
  dotActive: {
    backgroundColor: Colors.primary,
    width: 20,
  },
  brandsContainer: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.lg,
  },
  brandItem: {
    alignItems: 'center',
    width: 72,
  },
  brandIconContainer: {
    width: 64,
    height: 64,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  brandIcon: {
    fontSize: 28,
  },
  brandName: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  whyPayGrid: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
  },
  whyPayItem: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  whyPayIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  whyPayTitle: {
    fontSize: FontSize.sm,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  whyPayDescription: {
    fontSize: 10,
    color: Colors.textSecondary,
    lineHeight: 14,
  },
  howItWorksContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: Spacing.lg,
  },
  howItWorksStep: {
    alignItems: 'center',
    flex: 1,
  },
  stepCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  stepNumber: {
    fontSize: FontSize.xs,
    fontWeight: '700',
    color: Colors.surface,
  },
  stepIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  stepTitle: {
    fontSize: 9,
    fontWeight: '600',
    color: Colors.text,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  stepConnector: {
    flex: 0.3,
    height: 2,
    backgroundColor: Colors.border,
    marginTop: 42,
    marginHorizontal: -10,
  },
  referBanner: {
    backgroundColor: '#6C3CE1',
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.xxl,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    overflow: 'hidden',
  },
  referContent: {
    width: '60%',
  },
  referBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10B981',
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    gap: 4,
    marginBottom: Spacing.md,
  },
  referBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.surface,
    letterSpacing: 0.5,
  },
  referTitle: {
    fontSize: FontSize.xl,
    fontWeight: '700',
    color: Colors.surface,
    lineHeight: 28,
    marginBottom: Spacing.sm,
  },
  referHighlight: {
    color: '#FBBF24',
  },
  referSubtitle: {
    fontSize: FontSize.sm,
    color: 'rgba(255,255,255,0.7)',
  },
  faqList: {
    paddingHorizontal: Spacing.lg,
  },
  faqItem: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.xl,
    marginBottom: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  faqItemExpanded: {
    borderColor: Colors.primary,
    borderWidth: 1.5,
  },
  faqHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  faqQuestion: {
    flex: 1,
    fontSize: FontSize.md,
    fontWeight: '600',
    color: Colors.text,
    marginRight: Spacing.md,
    lineHeight: 22,
  },
  faqQuestionExpanded: {
    color: Colors.primary,
  },
  faqAnswer: {
    marginTop: Spacing.md,
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    paddingVertical: Spacing.lg,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    gap: Spacing.sm,
  },
  viewAllText: {
    fontSize: FontSize.md,
    fontWeight: '600',
    color: Colors.primary,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: Spacing.xxl,
    marginTop: Spacing.xl,
  },
  footerText: {
    fontSize: FontSize.sm,
    color: Colors.textTertiary,
    marginBottom: Spacing.sm,
  },
  footerLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  footerLink: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.text,
  },
  footerDot: {
    fontSize: FontSize.sm,
    color: Colors.textTertiary,
  },
  bottomSpacer: {
    height: 100,
  },
});
