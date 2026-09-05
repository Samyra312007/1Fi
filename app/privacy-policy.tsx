import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors, Spacing, BorderRadius, FontSize } from '../src/constants/theme';

export default function PrivacyPolicyScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.mainTitle}>1Fi — Privacy Policy</Text>

        <Text style={styles.lastUpdated}>Last Updated: 22 May 2026</Text>

        <Text style={styles.paragraph}>
          This Privacy Policy explains how <Text style={styles.bold}>Fiquity Technology Private Limited</Text> ("1Fi", "Company", "we", "us", or "our") collects, uses, processes, stores, shares, and protects your personal data when you access or use the 1Fi mobile application, website, and related services (together, the "Platform").
        </Text>

        <Text style={styles.paragraph}>
          1Fi acts as a <Text style={styles.bold}>Data Fiduciary</Text> in respect of the personal data it processes, and is committed to handling your data in accordance with:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>The Digital Personal Data Protection Act, 2023</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>The Digital Personal Data Protection Rules, 2025</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>The Information Technology Act, 2000 and the rules made thereunder</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Applicable directions of the Reserve Bank of India (RBI)</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Other applicable Indian law</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          By using the Platform, you acknowledge that you have read and understood this Policy. Where we rely on your consent to process your data, we will obtain that consent separately, and you may withdraw it as described below.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>1. Scope of this Policy</Text>

        <Text style={styles.paragraph}>
          This Policy applies to personal data we collect through the 1Fi mobile application and website and in the course of providing our services.
        </Text>

        <Text style={styles.paragraph}>
          1Fi operates as a Lending Service Provider and Technology Service Provider that facilitates loans against mutual funds offered by RBI-regulated banks and NBFCs ("Lending Partners"). <Text style={styles.bold}>1Fi is not a lender.</Text>
        </Text>

        <Text style={styles.paragraph}>
          This Policy does not cover the independent data practices of Lending Partners or other third parties, which are governed by their own privacy policies.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>2. Information We Collect</Text>

        <Text style={styles.paragraph}>
          We collect only the information that is necessary to provide our services, to facilitate your loan application, to enable the pledge of your mutual fund units, to operate any rewards programme, to keep the Platform secure, and to comply with legal and regulatory requirements.
        </Text>

        <Text style={styles.subsectionTitle}>Account Information</Text>
        <Text style={styles.paragraph}>This includes:</Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Name</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Mobile number</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Email address</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Residential address</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Communication preferences</Text>
          </View>
        </View>

        <Text style={styles.subsectionTitle}>Identity and KYC Information</Text>
        <Text style={styles.paragraph}>
          When you initiate a loan application, we collect identity and verification information required for financial services, which may include:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>PAN</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Aadhaar number (in masked form wherever possible)</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Other government-issued identification</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Photograph or selfie</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Video KYC data where required</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Date of birth</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Electronic signature information</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          This information is collected and used strictly for identity verification, fraud prevention, and regulatory compliance.
        </Text>

        <Text style={styles.subsectionTitle}>Financial and Mutual Fund Information</Text>
        <Text style={styles.paragraph}>
          To assess and process a loan against mutual funds, we collect:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Mutual fund holdings — scheme details, folio information, the units you choose to offer as security, their value, lien and pledge status, and related transaction and repayment information</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Bank account details required for disbursement and repayment</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Loan-related information such as sanction details, EMI schedule, interest amount, and repayment status from or in connection with the Lending Partner</Text>
          </View>
        </View>

        <Text style={styles.subsectionTitle}>Device, Technical, and Usage Information</Text>
        <Text style={styles.paragraph}>
          We collect limited technical information such as:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Device model and operating system version</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>App version</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>IP address</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Information about how you interact with the Platform</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          This is used for security, fraud prevention, analytics, and improving the Platform.
        </Text>

        <Text style={styles.subsectionTitle}>Information from Third Parties</Text>
        <Text style={styles.paragraph}>
          We may receive information about you from verification agencies, MFCentral and the Registrars and Transfer Agents, payment service providers, and Lending Partners, in connection with your application and your use of the services.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>3. Mobile Application Permissions</Text>

        <Text style={styles.paragraph}>
          The 1Fi mobile application requests only the permissions needed to deliver its services, and uses them only for the purposes described below and with your consent.
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><Text style={styles.bold}>Camera</Text> — used to capture photographs, selfies, or documents required for KYC and identity verification</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><Text style={styles.bold}>Storage or media access (limited)</Text> — used to allow you to select and upload specific documents required for your application. Where supported, we use a document or file picker so that we access only the files you choose</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          We <Text style={styles.bold}>do not</Text> collect or access:
        </Text>

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
            <Text style={styles.bulletText}>SMS or text messages</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Photo gallery or media library</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Precise device location</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          for the purposes of credit facilitation, collection, or recovery. We do not use device data to contact your friends, family, or other contacts.
        </Text>

        <Text style={styles.paragraph}>
          You can review and change app permissions at any time in your device settings. Disabling a permission may limit certain features, such as completing KYC.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>4. How We Use Your Information</Text>

        <Text style={styles.paragraph}>We use your information to:</Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Create, authenticate, and manage your account</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Pre-fill and submit your loan application and share the required information with the relevant Lending Partner</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Enable the marking of a lien or pledge on your mutual fund units through MFCentral</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Receive and display loan status, sanction details, EMI schedule, interest, and repayment information</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Calculate and credit any applicable rewards, cashback, or no-cost or low-cost EMI benefit</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Provide customer support and respond to your queries and grievances</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Detect, prevent, and investigate fraud, security incidents, and misuse, and carry out risk assessments</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Operate, maintain, analyse, and improve the Platform and fix issues</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Comply with our legal and regulatory obligations</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          We use your information only for the purposes for which it was collected or for compatible purposes. If we need to use it for a materially different purpose, we will seek your consent.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>5. Legal Basis and Consent</Text>

        <Text style={styles.paragraph}>
          We process your personal data on the basis of your consent and, where applicable, for other lawful purposes recognised under the Digital Personal Data Protection Act, 2023, including:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Processing necessary to provide a service that you have requested</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Processing required to comply with law</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          Before or at the time of collecting your data, we provide a notice describing the data collected and the purpose.
        </Text>

        <Text style={styles.paragraph}>
          You may withdraw your consent at any time as described in Section 9, although withdrawing consent may prevent us from providing some or all of the services.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>6. How We Share Your Information</Text>

        <Text style={styles.paragraph}>
          <Text style={styles.bold}>We do not sell your personal data.</Text> We share your information only as described below.
        </Text>

        <Text style={styles.subsectionTitle}>With Lending Partners</Text>
        <Text style={styles.paragraph}>
          We share your identity, KYC, financial, mutual fund, and application information with the relevant Lending Partner, and where applicable its partner NBFCs, strictly for evaluating, processing, disbursing, and servicing your Loan. The Lending Partner returns loan status, repayment, and interest information to us so that we can support your loan journey and calculate any applicable rewards.
        </Text>

        <Text style={styles.subsectionTitle}>With Infrastructure and Service Providers</Text>
        <Text style={styles.paragraph}>We share information with:</Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>MFCentral and the Registrars and Transfer Agents (such as CAMS and KFinTech) for lien marking and pledge processing</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>KYC and verification agencies</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Cloud and hosting providers</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Payment service providers</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Communication providers</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Analytics and security providers</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          who process data on our behalf under contractual confidentiality and data protection obligations.
        </Text>

        <Text style={styles.subsectionTitle}>With Regulators and Authorities</Text>
        <Text style={styles.paragraph}>
          We may disclose information to the Reserve Bank of India, law enforcement agencies, courts, or other authorities where required by applicable law, or to detect, prevent, or address fraud, security, or legal issues.
        </Text>

        <Text style={styles.subsectionTitle}>In a Business Transfer</Text>
        <Text style={styles.paragraph}>
          In the event of a merger, acquisition, restructuring, or transfer of business, your information may be transferred to the successor entity, subject to continued protection consistent with this Policy.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>7. Data Security</Text>

        <Text style={styles.paragraph}>
          We adopt reasonable security safeguards and industry-standard technical and organisational measures to protect your personal data. These include:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Encryption of data in transit and at rest</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Storage in secure cloud environments</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Role-based access controls</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Multi-factor authentication for administrative access</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Network monitoring</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Periodic vulnerability assessments</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          While we take these measures seriously, no method of transmission or storage is completely secure. We encourage you to protect your credentials and to notify us promptly of any suspected unauthorised activity.
        </Text>

        <Text style={styles.paragraph}>
          In the event of a personal data breach, we will follow the notification procedures required under applicable law.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>8. Data Retention</Text>

        <Text style={styles.paragraph}>
          We retain your personal data only for as long as necessary to:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Provide our services</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Comply with legal, regulatory, audit, and tax requirements</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Resolve disputes and enforce our agreements</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          Identity and KYC information collected for loan processing is generally retained for the period required under applicable financial regulations, which is typically up to <Text style={styles.bold}>twenty-four (24) months</Text> after the closure of the related loan account, and longer where a specific law requires it.
        </Text>

        <Text style={styles.paragraph}>
          Account information is retained while your account is active. When your data is no longer required, we will delete or anonymise it in accordance with applicable law.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>9. Your Rights</Text>

        <Text style={styles.paragraph}>
          Subject to applicable law, including the Digital Personal Data Protection Act, 2023, you have the right to:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><Text style={styles.bold}>Access</Text> — a summary of the personal data we hold about you and the processing activities undertaken</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><Text style={styles.bold}>Correction</Text> — seek correction, completion, or updating of inaccurate or incomplete data</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><Text style={styles.bold}>Erasure</Text> — seek erasure of your personal data where it is no longer required and retention is not mandated by law</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><Text style={styles.bold}>Withdraw consent</Text> previously given</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><Text style={styles.bold}>Nomination</Text> — nominate another individual to exercise your rights in the event of your death or incapacity</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><Text style={styles.bold}>Grievance redressal</Text> in respect of our handling of your data</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          To exercise any of these rights, please contact our Data Protection Officer using the details in Section 16. We will respond within the timelines required under applicable law.
        </Text>

        <Text style={styles.paragraph}>
          Some rights may be limited where retention or processing is required for legal or regulatory compliance.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>10. Account and Data Deletion</Text>

        <Text style={styles.paragraph}>
          You may request deletion of your 1Fi account and the associated personal data at any time:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Through the <Text style={styles.bold}>account settings</Text> within the App, or</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>By writing to <Text style={styles.bold}>contact@1fi.in</Text></Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          On receiving your request, we will verify your identity and delete or anonymise your personal data, except for information that we are required to retain under applicable law or that is necessary in connection with an active Loan.
        </Text>

        <View style={styles.importantNote}>
          <Text style={styles.importantNoteText}>
            "Important: Deleting your 1Fi account does not close any Loan or cancel any repayment obligation to a Lending Partner. Loan-related records may continue to be held by 1Fi and the Lending Partners for the period required by law and regulation."
          </Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>11. Cookies and Analytics</Text>

        <Text style={styles.paragraph}>
          Our website and Platform use cookies and similar technologies to:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Support essential functions such as authentication and security</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Remember your preferences</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Understand and improve how the Platform is used</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          You can manage or disable cookies through your browser or device settings, though some features may not function properly as a result. We may use analytics tools to collect aggregated, non-identifying information about Platform usage.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>12. Children's Privacy</Text>

        <Text style={styles.paragraph}>
          The Platform is intended only for individuals who are <Text style={styles.bold}>eighteen (18) years of age or older</Text>. We do not knowingly collect personal data of children.
        </Text>

        <Text style={styles.paragraph}>
          If we become aware that we have inadvertently collected personal data of a child, we will take reasonable steps to delete it.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>13. Third-Party Links and Services</Text>

        <Text style={styles.paragraph}>
          The Platform may contain links to, or integrations with, third-party websites and services, including those of Lending Partners and infrastructure providers.
        </Text>

        <Text style={styles.paragraph}>
          These third parties operate independently and have their own privacy policies, which we encourage you to review. We are not responsible for the data practices of third parties.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>14. Storage Location and Cross-Border Transfers</Text>

        <Text style={styles.paragraph}>
          Your personal data is stored on secure servers. Where data is stored or processed, we do so in accordance with applicable Indian law, including any requirements relating to the localisation of certain categories of data and any conditions applicable to transfers outside India.
        </Text>

        <Text style={styles.paragraph}>
          Where any processing takes place outside India, we will ensure it is carried out in compliance with applicable law and subject to appropriate safeguards.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>15. Changes to this Policy</Text>

        <Text style={styles.paragraph}>
          We may update this Policy from time to time to reflect changes in our services, in applicable law, or in regulatory requirements.
        </Text>

        <Text style={styles.paragraph}>
          The updated Policy will be posted on the Platform with a revised "Last Updated" date, and, where the changes are material, we will take reasonable steps to notify you.
        </Text>

        <Text style={styles.paragraph}>
          Your continued use of the Platform after the updated Policy takes effect constitutes your acceptance of the changes.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>16. Grievance Redressal and Contact</Text>

        <Text style={styles.paragraph}>
          For any questions, requests, or grievances relating to your personal data or this Policy, you may contact our Data Protection Officer:
        </Text>

        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><Text style={styles.bold}>Officer:</Text> Pranav Aggarwal</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><Text style={styles.bold}>Company:</Text> Fiquity Technology Private Limited (1Fi)</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><Text style={styles.bold}>Email:</Text> contact@1fi.in</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><Text style={styles.bold}>Address:</Text> 1st Floor, Orchid Business Park, Sector 48, Gurugram, Haryana, India</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}><Text style={styles.bold}>Working Hours:</Text> Monday to Friday, 10:00 AM to 6:00 PM (excluding public holidays)</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          We will acknowledge your request or grievance and respond within the timelines required under applicable law.
        </Text>

        <Text style={styles.paragraph}>
          If you are not satisfied with our response, you may have the right to escalate the matter to the <Text style={styles.bold}>Data Protection Board of India</Text> or other competent authority, as provided under applicable law.
        </Text>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 1Fi. All rights reserved.</Text>
          <View style={styles.footerLinks}>
            <TouchableOpacity onPress={() => router.back()}>
              <Text style={styles.footerLink}>Terms & Conditions</Text>
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
  subsectionTitle: {
    fontSize: FontSize.lg,
    fontWeight: '700',
    color: Colors.text,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    marginTop: Spacing.md,
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
