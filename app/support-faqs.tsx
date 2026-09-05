import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors, Spacing, BorderRadius, FontSize } from '../src/constants/theme';

type Category = 'intro' | 'using_1fi' | 'repayment' | 'returns' | 'safety';

interface FAQItem {
  question: string;
  answer: string;
}

function parseAnswer(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|__[^_]+__)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <Text key={i} style={{ fontWeight: '700', color: Colors.text }}>
          {part.slice(2, -2)}
        </Text>
      );
    }
    if (part.startsWith('__') && part.endsWith('__')) {
      return (
        <Text key={i} style={{ textDecorationLine: 'underline', color: Colors.text }}>
          {part.slice(2, -2)}
        </Text>
      );
    }
    return <Text key={i}>{part}</Text>;
  });
}

const FAQ_DATA: Record<Category, { section: string; items: FAQItem[] }> = {
  intro: {
    section: '1. Intro & Eligibility',
    items: [
      {
        question: 'What is 1Fi?',
        answer: "1Fi is the world's first mutual fund-backed no-cost EMI platform, letting you shop at partner stores at 0% interest.",
      },
      {
        question: 'Is 1Fi safe and legit?',
        answer: 'Yes. 1Fi works with SEBI-approved RTAs for pledging and RBI-regulated lending partners for loans.',
      },
      {
        question: 'Is this a credit card?',
        answer: 'No. It is a secured purchase-limit loan backed by pledged mutual fund units.',
      },
      {
        question: 'Who provides the loan?',
        answer: 'Loans are provided by RBI-regulated lending partners and 1Fi acts as the digital lending application/LSP.',
      },
      {
        question: 'What do I need to be eligible?',
        answer: 'You need PAN, Aadhaar OTP, and eligible mutual fund holdings. We do not check your CIBIL score.',
      },
      {
        question: 'Do I need income proof?',
        answer: "No, we don't ask for income proof to avail a loan, your limit depends only on eligible mutual fund value.",
      },
      {
        question: 'Does checking my limit affect credit score?',
        answer: 'No, checking your limit does not affect your credit score. Actual loan drawdowns may be reported as per lender policy.',
      },
      {
        question: 'How is my purchase limit calculated?',
        answer: 'Your purchase limit is calculated daily using the latest NAV, eligible schemes, applicable LTV, and lender credit policy.',
      },
      {
        question: 'Which mutual funds are eligible?',
        answer: 'Equity, debt, and hybrid schemes are eligible. You can check eligibility anytime in the 1Fi app.',
      },
      {
        question: 'Will my SIPs be affected?',
        answer: 'No. Your SIPs and unpledged portfolio stay unaffected; only selected units get lien-marked.',
      },
      {
        question: 'Do I need to sell my mutual funds?',
        answer: 'No. Your units stay invested even after pledging and will continue to earn returns.',
      },
      {
        question: 'Do pledged funds still earn returns?',
        answer: 'Yes. Pledged units remain invested and may continue earning market returns or dividends.',
      },
      {
        question: 'What if markets fall?',
        answer: 'Your limit may reduce and impact the Loan-to-Value (LTV) ratio, so you may need to pledge more units or make a partial prepayment.',
      },
      {
        question: 'Can 1Fi sell my mutual fund units?',
        answer: 'In the event of a payment default, if the EMI or shortfall amount remains unpaid despite repeated reminders, certain units may be sold to maintain the Loan-to-Value (LTV) ratio as per RBI guidelines.',
      },
      {
        question: 'What documents are needed to take a loan?',
        answer: 'No physical documents are required. You only need eligible mutual fund units, PAN, and Aadhaar.',
      },
    ],
  },
  using_1fi: {
    section: '2. Using 1Fi & Merchants',
    items: [
      {
        question: 'How does a purchase work end to end?',
        answer: 'Choose an EMI plan, lien is placed, lender approves, merchant gets paid, and you repay monthly.',
      },
      {
        question: 'What verification happens when I sign up?',
        answer: 'When you sign up, we verify your identity through PAN, Aadhaar OTP, and check your mutual fund holdings to determine your eligible credit limit.',
      },
      {
        question: 'What happens after I confirm a purchase?',
        answer: 'A lien is marked on your selected mutual funds, lender releases funds to the merchant, and your EMI schedule is generated.',
      },
      {
        question: 'Where can I use 1Fi?',
        answer: 'Use 1Fi at approved partner merchants shown in the app or wherever 1Fi appears at checkout.',
      },
      {
        question: 'Can I make multiple purchases?',
        answer: 'Yes, you can make multiple purchases as long as you have sufficient available credit limit. Each purchase will have its own EMI schedule.',
      },
      {
        question: 'What does no-cost EMI mean?',
        answer: 'No-cost EMI means you pay 0% interest. You only repay the principal amount in EMIs.',
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'No. We are fully transparent and do not charge processing, penal, bounce, foreclosure, setup, or lien-related charges.',
      },
      {
        question: 'What EMI tenures are available?',
        answer: 'EMI tenures typically range from 3 to 24 months depending on the product, merchant, and your eligibility. Available options are shown at checkout.',
      },
    ],
  },
  repayment: {
    section: '3. Repayment & Account',
    items: [
      {
        question: 'How do repayments work?',
        answer: 'Repayments are auto-debited from your linked bank account via NACH mandate on the due date each month. You can also make manual prepayments through the app.',
      },
      {
        question: 'Can I pay early without any charges?',
        answer: 'Yes. You can prepay your loan anytime without any prepayment charges or penalties.',
      },
      {
        question: 'When is the lien removed?',
        answer: 'Once you fully repay the loan, lien release is initiated within 30 days. Final timing depends on MFCentral/MF-RTA.',
      },
      {
        question: 'Are there any charges if I pay early to release my pledged mutual fund units?',
        answer: 'No. There are no charges for early repayment. Your pledged units are released once the outstanding amount is cleared.',
      },
    ],
  },
  returns: {
    section: '4. Returns & Disputes',
    items: [
      {
        question: 'What if I return the product?',
        answer: 'If you return a product purchased through 1Fi, the refund is processed back to reduce your outstanding loan balance. Any EMI already paid will be refunded.',
      },
      {
        question: 'Who handles product disputes?',
        answer: 'Product disputes are handled by the merchant. 1Fi can assist with escalation if the merchant does not resolve the issue.',
      },
    ],
  },
  safety: {
    section: '5. Safety, Rights & Liens',
    items: [
      {
        question: 'Can I cancel after taking the loan?',
        answer: 'Yes, you get a 3-day cooling-off period for each drawdown to exit without charges.',
      },
      {
        question: 'Is my data safe?',
        answer: 'Yes. 1Fi uses official verification flows and shares data only for authorised loan, pledge, or regulatory purposes.',
      },
      {
        question: 'Can I stop using 1Fi anytime?',
        answer: 'Yes. You can stop using 1Fi anytime by repaying your outstanding loan. Once fully repaid, your account will be inactive.',
      },
      {
        question: 'What is a lien?',
        answer: 'A lien is a hold on selected units. They stay invested and are released after repayment.',
      },
      {
        question: 'Who is the RBI approved lending partner?',
        answer: 'Loans on 1Fi are provided by **Kalandri Capital Private Limited**, a Non-Banking Financial Company (NBFC) registered with the Reserve Bank of India. 1Fi (Fiquity Technology Private Limited) is the technology platform.\n\n• **RBI Certificate of Registration (CoR) No.** — N-02.00323\n• **CIN** — U65929KA2017PTC107822\n• **Website** — __www.kalandricapital.net__\n\nBecause the lender is an RBI-regulated NBFC, your loan is governed by RBI\'s rules on fair practices, grievance redressal, and Loan-to-Value limits for loans against securities.',
      },
    ],
  },
};

const CATEGORIES: { key: Category; label: string }[] = [
  { key: 'intro', label: 'Intro & Eligibility' },
  { key: 'using_1fi', label: 'Using 1Fi & Merchants' },
  { key: 'repayment', label: 'Repayment & Account' },
  { key: 'returns', label: 'Returns & Disputes' },
  { key: 'safety', label: 'Safety, Rights & Liens' },
];

export default function SupportFAQsScreen() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<Category>('intro');
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const faqSection = FAQ_DATA[activeCategory];

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Support & FAQs</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.infoCards}>
          <View style={styles.infoCard}>
            <View style={[styles.infoIcon, { backgroundColor: '#EDE7FB' }]}>
              <Ionicons name="mail-outline" size={22} color={Colors.primary} />
            </View>
            <Text style={styles.infoLabel}>EMAIL SUPPORT</Text>
            <Text style={styles.infoValue}>support...</Text>
          </View>
          <View style={styles.infoCard}>
            <View style={[styles.infoIcon, { backgroundColor: '#D1FAE5' }]}>
              <Ionicons name="time-outline" size={22} color={Colors.success} />
            </View>
            <Text style={styles.infoLabel}>RESPONSE TIME</Text>
            <Text style={styles.infoValue}>Within 24 hours</Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryTabs}
        >
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.key}
              style={[styles.categoryTab, activeCategory === cat.key && styles.categoryTabActive]}
              onPress={() => {
                setActiveCategory(cat.key);
                setExpandedQuestion(null);
              }}
            >
              <Text style={[styles.categoryTabText, activeCategory === cat.key && styles.categoryTabTextActive]}>
                {cat.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <View style={styles.sectionBar} />
          <Text style={styles.sectionTitle}>{faqSection.section}</Text>
        </View>

        <View style={styles.faqList}>
          {faqSection.items.map((item) => {
            const isExpanded = expandedQuestion === item.question;
            return (
              <TouchableOpacity
                key={item.question}
                style={[styles.faqItem, isExpanded && styles.faqItemExpanded]}
                onPress={() => setExpandedQuestion(isExpanded ? null : item.question)}
                activeOpacity={0.7}
              >
                <View style={styles.faqHeader}>
                  <Text style={[styles.faqQuestion, isExpanded && styles.faqQuestionExpanded]}>
                    {item.question}
                  </Text>
                  <View style={[styles.faqIcon, isExpanded && styles.faqIconExpanded]}>
                    <Ionicons
                      name={isExpanded ? 'remove' : 'add'}
                      size={20}
                      color={isExpanded ? Colors.surface : Colors.textTertiary}
                    />
                  </View>
                </View>
                {isExpanded && (
                  <Text style={styles.faqAnswer}>{parseAnswer(item.answer)}</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

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
  infoCards: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
    marginBottom: Spacing.xl,
  },
  infoCard: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    borderStyle: 'dashed',
  },
  infoIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  infoLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.textTertiary,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: FontSize.md,
    fontWeight: '700',
    color: Colors.text,
  },
  categoryTabs: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
    marginBottom: Spacing.xl,
  },
  categoryTab: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.full,
    borderWidth: 1.5,
    borderColor: Colors.border,
  },
  categoryTabActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  categoryTabText: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  categoryTabTextActive: {
    color: Colors.surface,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    gap: Spacing.sm,
  },
  sectionBar: {
    width: 4,
    height: 24,
    borderRadius: 2,
    backgroundColor: Colors.primary,
  },
  sectionTitle: {
    fontSize: FontSize.xl,
    fontWeight: '700',
    color: Colors.text,
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
  faqIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  faqIconExpanded: {
    backgroundColor: Colors.primary,
  },
  faqAnswer: {
    marginTop: Spacing.md,
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    lineHeight: 20,
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
