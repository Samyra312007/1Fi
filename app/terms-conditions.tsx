import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors, Spacing, BorderRadius, FontSize } from '../src/constants/theme';

const B = ({ children }: { children: React.ReactNode }) => (
  <Text style={styles.bold}>{children}</Text>
);

export default function TermsConditionsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms & Conditions</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.mainTitle}>1Fi — Terms & Conditions</Text>
        <Text style={styles.lastUpdated}>Last Updated: 22 May 2026</Text>

        <Text style={styles.paragraph}>
          These Terms and Conditions ("Terms") govern your access to and use of the 1Fi mobile application, website, and related services (together, the "Platform").
        </Text>

        <Text style={styles.paragraph}>
          The Platform is owned and operated by <B>Fiquity Technology Private Limited</B>, a company incorporated under the Companies Act, 2013, having its registered office at 1st Floor, Orchid Business Park, Sector 48, Gurugram, Haryana, India ("1Fi", "Company", "we", "us", or "our").
        </Text>

        <Text style={styles.paragraph}>
          These Terms constitute a legally binding agreement between you ("User", "you", or "your") and 1Fi. By downloading, installing, registering on, accessing, or using the Platform, you confirm that you have read, understood, and agreed to be bound by these Terms and by our Privacy Policy, which is incorporated into these Terms by reference.
        </Text>

        <Text style={styles.boldParagraph}>
          If you do not agree with any part of these Terms, please do not use the Platform.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>1. Definitions</Text>
        <Text style={styles.paragraph}>In these Terms, unless the context requires otherwise:</Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><B>"Lending Partner"</B> — any bank or Non-Banking Financial Company (NBFC) regulated by the Reserve Bank of India (RBI) with whom 1Fi has entered into an arrangement for the offering of credit facilities through the Platform. The current list of Lending Partners is made available within the App and on our website, and is updated from time to time.</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><B>"Loan" or "Credit Facility"</B> — a loan against mutual funds, also referred to as a Loan Against Mutual Funds or LAMF, sanctioned and disbursed to you by a Lending Partner, including any checkout or purchase financing facility availed by you using such a loan.</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><B>"Pledged Units"</B> — the units of mutual fund schemes that you offer as security for a Loan and over which a lien is marked in favour of the Lending Partner.</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><B>"MFCentral"</B> — the digital platform operated jointly by the Registrars and Transfer Agents (including CAMS and KFinTech) through which lien marking, pledge creation, and related instructions on mutual fund units are processed.</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><B>"KFS" or "Key Fact Statement"</B> — the standardised statement of key loan terms provided to you by or on behalf of the Lending Partner before you accept a Loan.</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><B>"DLA"</B> — a Digital Lending App as defined under the Reserve Bank of India (Digital Lending) Directions, 2025.</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>2. About 1Fi and Nature of Services</Text>
        <Text style={styles.paragraph}>
          1Fi operates as a <B>Lending Service Provider (LSP)</B> and a <B>Technology Service Provider (TSP)</B>. 1Fi acts as an LSP on behalf of one or more Lending Partners and provides a technology platform that allows eligible users to:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Discover, apply for, and manage credit facilities backed by their mutual fund holdings</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Use such credit facilities to pay for purchases through equated monthly instalments (EMIs)</Text>
          </View>
        </View>

        <Text style={styles.boldParagraph}>
          1Fi is not a bank, an NBFC, or a lender.
        </Text>

        <Text style={styles.paragraph}>
          1Fi does not lend money, does not accept deposits, and is not directly engaged in money lending activities. 1Fi does not determine eligibility, assess creditworthiness, underwrite loans, or set interest rates.
        </Text>

        <Text style={styles.paragraph}>
          Every decision relating to loan approval, rejection, sanctioned amount, loan-to-value ratio, interest rate, tenor, charges, disbursal, and recovery is taken solely by the Lending Partner.
        </Text>

        <Text style={styles.paragraph}>The role of 1Fi is limited to:</Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Facilitating access to credit facilities offered by Lending Partners through a technology integration</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Supporting the loan application and servicing journey</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Enabling the pledge of mutual fund units as security through MFCentral</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Providing related platform features</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          Any Loan you avail is a contract between you and the relevant Lending Partner. 1Fi is not a party to your loan agreement.
        </Text>

        <Text style={styles.paragraph}>
          Where the Platform operates as a Digital Lending App, it is deployed in association with RBI-regulated Lending Partners, and the relevant regulatory registrations of such Digital Lending Apps are maintained with the RBI as required under applicable law.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>3. Eligibility</Text>
        <Text style={styles.paragraph}>To use the Platform and to apply for a Loan, you must:</Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Be at least <B>eighteen (18) years</B> of age</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Be a <B>resident of India</B></Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Be competent to enter into a legally binding contract under the Indian Contract Act, 1872</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Hold valid <B>mutual fund investments</B> in your own name</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Have the identification documents required for verification</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          You confirm that all information you provide is true, accurate, complete, and current, and that the mutual fund units you offer as security are owned by you and are free from any existing charge, lien, or encumbrance, except as disclosed.
        </Text>

        <Text style={styles.paragraph}>
          We and our Lending Partners reserve the right to decline access to, or use of, the Platform to any person who does not meet the eligibility criteria or who provides false or misleading information.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>4. Account Registration and Authentication</Text>
        <Text style={styles.paragraph}>
          To use the Platform you must register and create an account using your mobile number, and complete verification through a One-Time Password (OTP) and any other authentication steps we may require. You agree to provide accurate registration details and to keep them updated.
        </Text>

        <Text style={styles.paragraph}>You are responsible for:</Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Maintaining the confidentiality of your account credentials</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>All activity that takes place under your account</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          You must not share your credentials, OTPs, or device with any other person. You agree to notify us immediately at <B>contact@1fi.in</B> if you become aware of any unauthorised use of your account or any breach of security.
        </Text>

        <Text style={styles.paragraph}>
          We may suspend or restrict access to your account if we reasonably believe it has been compromised or is being misused.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>5. How the Loan Against Mutual Funds Service Works</Text>
        <Text style={styles.paragraph}>
          The Platform enables you to avail a Loan from a Lending Partner against the security of mutual fund units that you hold. In summary:
        </Text>

        <View style={styles.numberedList}>
          <View style={styles.numberedItem}>
            <Text style={styles.number}>1.</Text>
            <Text style={styles.bulletText}>You complete registration and verification on the Platform</Text>
          </View>
          <View style={styles.numberedItem}>
            <Text style={styles.number}>2.</Text>
            <Text style={styles.bulletText}>Fetch and review your eligible mutual fund holdings</Text>
          </View>
          <View style={styles.numberedItem}>
            <Text style={styles.number}>3.</Text>
            <Text style={styles.bulletText}>Select the units you wish to offer as security</Text>
          </View>
          <View style={styles.numberedItem}>
            <Text style={styles.number}>4.</Text>
            <Text style={styles.bulletText}>A lien or pledge is marked on those units in favour of the Lending Partner through MFCentral</Text>
          </View>
          <View style={styles.numberedItem}>
            <Text style={styles.number}>5.</Text>
            <Text style={styles.bulletText}>The Lending Partner determines the credit limit or loan amount based on the value of the Pledged Units and its own credit policy</Text>
          </View>
          <View style={styles.numberedItem}>
            <Text style={styles.number}>6.</Text>
            <Text style={styles.bulletText}>You may then use the sanctioned credit facility, including to pay for eligible purchases through EMIs at participating merchants</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          Your mutual fund units are <B>not redeemed or sold</B> when a lien is marked. You continue to remain the owner and continue to receive the benefit of any appreciation, dividends, or other entitlements, subject to the lien, unless and until the pledge is invoked in accordance with your loan agreement.
        </Text>

        <Text style={styles.paragraph}>
          The availability of any specific feature, merchant, scheme eligibility, credit limit, or financing option is not guaranteed and may change at the discretion of 1Fi and the Lending Partners.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>6. Role of Lending Partners; Loan Sanction and Loan Agreement</Text>
        <Text style={styles.paragraph}>
          When you apply for a Loan through the Platform, you authorise 1Fi to share the information you provide with the relevant Lending Partner for the purpose of processing your application. The Lending Partner may carry out its own verification, including identity and KYC checks, credit bureau enquiries, and assessment of the Pledged Units.
        </Text>

        <Text style={styles.paragraph}>
          All loan terms — including the sanctioned amount, interest rate, Annual Percentage Rate (APR), tenor, processing fees, penal charges, and other conditions — are determined by the Lending Partner and are set out in the loan agreement and the Key Fact Statement (KFS) provided to you.
        </Text>

        <Text style={styles.boldParagraph}>
          You should read the KFS and the loan agreement carefully before accepting any offer.
        </Text>

        <Text style={styles.paragraph}>
          Where the Platform displays loan offers, it will present the key terms in a clear and comparable manner, and a link to the applicable KFS will be made available.
        </Text>

        <Text style={styles.paragraph}>
          Your loan agreement, including any digital execution or e-signature, repayment obligations, and disclosures, is entered into directly between you and the Lending Partner. Loan amounts are disbursed by the Lending Partner in accordance with applicable law, including, where applicable, directly to your bank account or to the merchant for a specified end-use purchase.
        </Text>

        <Text style={styles.paragraph}>
          A copy of the signed loan documents will be made available to you by or on behalf of the Lending Partner.
        </Text>

        <Text style={styles.paragraph}>
          You acknowledge that 1Fi has no control over, and accepts no responsibility for, the credit decisions, verification processes, sanction, rejection, disbursal timelines, or servicing actions of any Lending Partner.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>7. Pledge of Mutual Fund Units, Loan-to-Value and Margin Requirements</Text>
        <Text style={styles.paragraph}>
          A Loan facilitated through the Platform is secured by a pledge or lien over your Pledged Units. By proceeding, you authorise the marking of a lien on the selected mutual fund units in favour of the Lending Partner through MFCentral and the relevant Registrars and Transfer Agents.
        </Text>

        <Text style={styles.paragraph}>
          The Lending Partner sanctions a Loan up to a specified percentage of the value of the Pledged Units, known as the <B>loan-to-value (LTV) ratio</B>.
        </Text>

        <Text style={styles.paragraph}>
          Because the value of mutual fund units changes with market movements, the value of your security may rise or fall after the Loan is sanctioned. If the value of the Pledged Units falls below the level required by the Lending Partner, the Lending Partner may require you to:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Pledge additional units, or</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Repay a part of the outstanding Loan in order to restore the required margin</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          This is referred to as a <B>margin call</B>.
        </Text>

        <Text style={styles.paragraph}>
          If you do not meet a margin call within the time specified, or if you default on repayment, the Lending Partner may, in accordance with your loan agreement and applicable law, invoke the pledge and cause the Pledged Units to be redeemed or sold to recover the amounts due. You may also lose the benefit of future appreciation on units that are sold.
        </Text>

        <Text style={styles.paragraph}>
          The lien on your units is released after the Loan is fully repaid and closed, in accordance with the Lending Partner's processes.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>8. Repayment, Charges and Key Fact Statement</Text>
        <Text style={styles.paragraph}>
          You are responsible for repaying the Loan — including principal, interest, and all applicable charges — directly to the Lending Partner in accordance with the repayment schedule set out in your loan agreement and KFS.
        </Text>

        <Text style={styles.paragraph}>
          Loans facilitated through the Platform are structured for repayment over a period that exceeds <B>sixty (60) days</B>.
        </Text>

        <Text style={styles.paragraph}>
          All charges relating to a Loan — including interest, processing fees, foreclosure or prepayment charges, penal charges, and taxes — are:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Determined and levied solely by the Lending Partner</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Disclosed to you in the KFS and the loan agreement before you accept the offer</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          1Fi does not separately determine or levy these loan-related charges. You should ensure that you understand all charges before accepting a Loan.
        </Text>

        <Text style={styles.paragraph}>
          The Platform may provide tools to help you view your outstanding balance, due dates, and repayment status. These tools are provided for convenience, and the records of the Lending Partner will prevail in case of any discrepancy.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>9. Fees Payable to 1Fi</Text>
        <Text style={styles.paragraph}>
          1Fi does not charge you any mandatory fee merely for accessing or browsing the Platform.
        </Text>

        <Text style={styles.paragraph}>
          Where 1Fi charges any fee for a specific service, the nature and amount of that fee will be disclosed to you clearly before you incur it, and you will have the opportunity to review it. You will not be charged any fee that has not been disclosed to you in advance.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>10. Rewards, Cashback and No-Cost or Low-Cost EMI Benefits</Text>
        <Text style={styles.paragraph}>
          From time to time, 1Fi may offer rewards, cashback, discounts, or no-cost or low-cost EMI benefits to eligible users. Such benefits are voluntary and discretionary, may be funded by 1Fi, by merchants, or by other partners, and are governed by the specific terms applicable to each offer at the relevant time.
        </Text>

        <Text style={styles.paragraph}>
          Any such benefit is <B>not guaranteed</B> and may be modified, withheld, delayed, or withdrawn, including in cases of:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Missed or delayed payments</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Premature loan closure</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Cancellation or return of the financed purchase</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Suspected fraud or incorrect information</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Ineligibility, or where required by law</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          The calculation and grant of any reward, cashback, or benefit is determined by 1Fi in accordance with the applicable offer terms.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>11. Mobile Application and Device Permissions</Text>
        <Text style={styles.paragraph}>
          The 1Fi mobile application requests only those device permissions that are necessary to provide its services, and uses them strictly for the disclosed purposes and with your consent.
        </Text>

        <Text style={styles.paragraph}>For example, the App may request access to:</Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>The <B>camera</B> for capturing images required for KYC and verification</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Limited <B>device storage</B> for uploading documents required for your application</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>1Fi <B>does not</B> access your:</Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Phone contacts</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Call logs</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>SMS messages</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Photo gallery or media library</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Precise location</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          for the purpose of credit facilitation or recovery. You may manage or withdraw permissions at any time through your device settings, although doing so may limit certain features of the App. Further details on the information we collect and the permissions we use are set out in our Privacy Policy.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>12. User Obligations and Prohibited Conduct</Text>
        <Text style={styles.paragraph}>
          You agree to use the Platform only for lawful purposes and in compliance with all applicable laws, including KYC norms, RBI directions, and data protection laws.
        </Text>

        <Text style={styles.paragraph}>You agree that you will <B>not</B>:</Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Provide false, forged, or misleading information or documents</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Impersonate any person</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Offer mutual fund units that you do not own or that are already encumbered</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Use the Platform for any unlawful, fraudulent, or commercial purpose not intended by 1Fi</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Attempt to gain unauthorised access to, interfere with, disrupt, or compromise the security or functioning of the Platform</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          Any violation of these obligations may result in suspension or termination of your account and may be reported to the Lending Partners or relevant authorities.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>13. Risks and Disclosures</Text>
        <Text style={styles.paragraph}>You acknowledge and accept the following:</Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Mutual fund investments are <B>subject to market risk</B>, and the value of your Pledged Units may go up or down</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>A fall in value may trigger a margin call or, in case of default, invocation of the pledge and sale of your units</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Availing a Loan creates a repayment obligation, and failure to repay may result in additional interest and charges, reporting to credit information companies, recovery action by the Lending Partner, and sale of the Pledged Units</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Approval of any Loan, the applicable terms, and the timelines are controlled entirely by the Lending Partner</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Your use of the Platform and any decision to avail a Loan is made at your own discretion and risk</Text>
          </View>
        </View>

        <Text style={styles.boldParagraph}>
          Nothing on the Platform constitutes investment, tax, legal, or financial advice.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>14. Intellectual Property</Text>
        <Text style={styles.paragraph}>
          All content on the Platform — including the 1Fi name and logo, trademarks, software, source code, text, graphics, user interfaces, and design elements — is owned by 1Fi or its licensors and is protected by applicable intellectual property laws.
        </Text>

        <Text style={styles.paragraph}>
          You are granted a limited, non-exclusive, non-transferable, revocable licence to use the Platform for your personal, non-commercial use in accordance with these Terms.
        </Text>

        <Text style={styles.paragraph}>
          You may <B>not</B> copy, modify, adapt, translate, reverse-engineer, decompile, distribute, or create derivative works from any part of the Platform without our prior written consent.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>15. Third-Party Services</Text>
        <Text style={styles.paragraph}>
          The Platform integrates with, or contains links to, third-party services, including those of Lending Partners, MFCentral and the Registrars and Transfer Agents, payment service providers, and verification agencies.
        </Text>

        <Text style={styles.paragraph}>
          These services operate independently and are governed by their own terms and policies. 1Fi does not control and is not responsible for the content, security, or practices of such third parties. Your use of any third-party service is at your own discretion and subject to the terms of that third party.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>16. Data Protection and Privacy</Text>
        <Text style={styles.paragraph}>
          Your use of the Platform is also governed by our <B>Privacy Policy</B>, which explains how we collect, use, store, and protect your personal data, and your rights in relation to that data.
        </Text>

        <Text style={styles.paragraph}>
          By accepting these Terms, you confirm that you have read and understood the Privacy Policy.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>17. Disclaimers and "As Is" Basis</Text>
        <Text style={styles.paragraph}>
          The Platform is provided on an <B>"as is"</B> and <B>"as available"</B> basis.
        </Text>

        <Text style={styles.paragraph}>
          To the extent permitted by law, 1Fi does not warrant that the Platform will be uninterrupted, timely, secure, or error-free, or that any defects will be corrected.
        </Text>

        <Text style={styles.paragraph}>1Fi does not guarantee:</Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>The approval of any Loan</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Any particular loan terms</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>The availability of any Lending Partner, merchant, or financing option</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Any reward or cashback</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          Loan approvals, interest rates, limits, timelines, and offers are controlled entirely by the Lending Partners.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>18. Limitation of Liability</Text>
        <Text style={styles.paragraph}>
          To the maximum extent permitted by applicable law, 1Fi and its directors, officers, employees, and affiliates shall <B>not</B> be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, data, goodwill, or opportunity, arising out of or in connection with:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Your use of the Platform</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Any loan decision or action of a Lending Partner</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Any delay or failure in cashback or rewards</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Any market loss on your mutual fund units</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Any act or omission of a third-party provider</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          To the extent 1Fi is found liable for any direct loss, its total aggregate liability shall not exceed the total amount of fees, if any, actually paid by you to 1Fi in the <B>three (3) months</B> preceding the event giving rise to the claim.
        </Text>

        <Text style={styles.paragraph}>
          Nothing in these Terms excludes any liability that cannot be excluded under applicable law.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>19. Indemnity</Text>
        <Text style={styles.paragraph}>
          You agree to indemnify and hold harmless 1Fi and its directors, officers, employees, and affiliates from and against any claim, demand, loss, liability, cost, or expense, including reasonable legal fees, arising out of or in connection with:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Your breach of these Terms</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Your misuse of the Platform</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Your violation of any applicable law</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Any false or misleading information provided by you</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>20. Suspension, Termination and Account Deletion</Text>
        <Text style={styles.paragraph}>
          We may suspend, restrict, or terminate your access to the Platform, with notice where reasonably practicable, if you breach these Terms, provide false information, engage in fraudulent or unlawful activity, or where required by law or by a Lending Partner or regulator.
        </Text>

        <Text style={styles.paragraph}>You may stop using the Platform at any time.</Text>

        <Text style={styles.paragraph}>
          You may request deletion of your 1Fi account, together with the personal data associated with it, at any time:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Through the <B>account settings</B> within the App, or</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>By writing to us at <B>contact@1fi.in</B></Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          We will process such requests in accordance with our Privacy Policy.
        </Text>

        <View style={styles.importantNote}>
          <Text style={styles.importantNoteText}>
            "Important: Deletion of your 1Fi account does not cancel, close, or extinguish any Loan you have availed or any repayment obligation you owe to a Lending Partner. Any outstanding Loan must be repaid in accordance with your loan agreement. Certain information may need to be retained by 1Fi and the Lending Partners to comply with legal, regulatory, and audit requirements."
          </Text>
        </View>

        <Text style={styles.paragraph}>
          Termination does not affect any rights or obligations that have accrued before the date of termination.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>21. Grievance Redressal</Text>
        <Text style={styles.paragraph}>
          1Fi is committed to resolving user concerns in a fair, transparent, and time-bound manner. If you have any complaint or concern relating to the Platform, you may contact our Grievance Redressal Officer:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><B>Officer:</B> Pranav Aggarwal</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><B>Email:</B> contact@1fi.in</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><B>Address:</B> 1st Floor, Orchid Business Park, Sector 48, Gurugram, Haryana, India</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><B>Working Hours:</B> Monday to Friday, 10:00 AM to 6:00 PM (excluding public holidays)</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>When raising a grievance, please provide:</Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>A clear description of the issue</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Your registered mobile number</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Any relevant reference identifiers, screenshots, or documents</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          We will acknowledge your complaint within <B>forty-eight (48) working hours</B> and endeavour to resolve it within <B>thirty (30) days</B>.
        </Text>

        <Text style={styles.paragraph}>
          For complaints relating to a Loan — including loan terms, sanction, rejection, EMI debits, interest, charges, or recovery — we will coordinate with the relevant Lending Partner. As 1Fi is not the lender, certain loan-related matters may need to be addressed by the Lending Partner, which maintains its own nodal grievance redressal officer and complaint mechanism.
        </Text>

        <Text style={styles.paragraph}>
          If your complaint is not resolved within 30 days, or if you are not satisfied with the resolution, you may escalate the matter to the RBI, including through the Reserve Bank Integrated Ombudsman Scheme and the RBI Complaint Management System, or to the relevant consumer protection forum, as permitted under applicable law.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>22. Governing Law and Dispute Resolution</Text>
        <Text style={styles.paragraph}>
          These Terms are governed by and construed in accordance with the <B>laws of India</B>.
        </Text>

        <Text style={styles.paragraph}>
          Subject to any applicable regulatory grievance and ombudsman mechanism, the courts at <B>Gurugram, Haryana, India</B> shall have exclusive jurisdiction over any dispute arising out of or in connection with these Terms or the Platform.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>23. Changes to these Terms</Text>
        <Text style={styles.paragraph}>
          We may update or modify these Terms from time to time to reflect changes in our services, in applicable law, or in regulatory requirements.
        </Text>

        <Text style={styles.paragraph}>
          The updated Terms will be posted on the Platform with a revised "Last Updated" date, and, where the changes are material, we will take reasonable steps to notify you.
        </Text>

        <Text style={styles.paragraph}>
          Your continued use of the Platform after the updated Terms take effect constitutes your acceptance of the changes.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>24. Contact Information</Text>

        <Text style={styles.paragraph}>
          <B>Fiquity Technology Private Limited (1Fi)</B>
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><B>Email:</B> contact@1fi.in</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><B>Registered Office:</B> 1st Floor, Orchid Business Park, Sector 48, Gurugram, Haryana, India</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 1Fi. All rights reserved.</Text>
          <View style={styles.footerLinks}>
            <TouchableOpacity onPress={() => router.replace('/privacy-policy')}>
              <Text style={styles.footerLink}>Privacy Policy</Text>
            </TouchableOpacity>
            <Text style={styles.footerDot}>·</Text>
            <TouchableOpacity onPress={() => router.replace('/support-faqs')}>
              <Text style={styles.footerLink}>Support & FAQs</Text>
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
  mainTitle: {
    fontSize: 34,
    fontWeight: '900',
    color: Colors.text,
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.xl,
    marginBottom: Spacing.lg,
    lineHeight: 42,
  },
  lastUpdated: {
    fontSize: FontSize.md,
    fontWeight: '700',
    color: Colors.text,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  paragraph: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
    lineHeight: 24,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  boldParagraph: {
    fontSize: FontSize.md,
    fontWeight: '700',
    color: Colors.text,
    lineHeight: 24,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  bold: {
    fontWeight: '700',
    color: Colors.text,
  },
  bulletList: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: Spacing.sm,
  },
  bullet: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
    marginRight: Spacing.sm,
    lineHeight: 24,
  },
  bulletText: {
    flex: 1,
    fontSize: FontSize.md,
    color: Colors.textSecondary,
    lineHeight: 24,
  },
  numberedList: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  numberedItem: {
    flexDirection: 'row',
    marginBottom: Spacing.sm,
  },
  number: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
    marginRight: Spacing.sm,
    lineHeight: 24,
    width: 24,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.border,
    marginHorizontal: Spacing.lg,
    marginVertical: Spacing.xl,
  },
  sectionTitle: {
    fontSize: FontSize.xxl,
    fontWeight: '900',
    color: Colors.text,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    lineHeight: 34,
  },
  importantNote: {
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    padding: Spacing.xl,
    borderLeftWidth: 3,
    borderLeftColor: Colors.primary,
    backgroundColor: Colors.primaryLight,
    borderRadius: BorderRadius.sm,
  },
  importantNoteText: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
    lineHeight: 24,
    fontStyle: 'italic',
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
