import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, FontSize } from '../../src/constants/theme';
import { MarketplaceHeader } from '../../src/components/marketplace/MarketplaceHeader';
import { ProductList } from '../../src/components/marketplace/ProductList';

type ShopTab = 'brands' | 'stores' | 'marketplace';

interface BrandItem {
  name: string;
  emi: string;
  color: string;
  initial: string;
}

interface StoreItem {
  name: string;
  distance: string;
  address: string;
  color: string;
  initial: string;
}

const TOP_BRANDS: BrandItem[] = [
  { name: 'Air India', emi: 'No-cost EMIs upto 18 months', color: '#DC2626', initial: 'AI' },
  { name: 'Apple Premium Reseller', emi: 'No-cost EMIs upto 24 months', color: '#000000', initial: '' },
  { name: 'CaratLane', emi: 'No-cost EMIs upto 6 months', color: '#C026D3', initial: 'CL' },
  { name: 'CGH Earth', emi: 'No-cost EMIs upto 24 months', color: '#059669', initial: 'CGH' },
  { name: 'Croma', emi: 'No-cost EMIs upto 6 months', color: '#0891B2', initial: 'croma' },
  { name: 'EaseMyTrip Holiday', emi: 'No-cost EMIs upto 24 months', color: '#2563EB', initial: 'EMT' },
  { name: 'EaseMyTrip Hotel', emi: 'No-cost EMIs upto 24 months', color: '#2563EB', 'initial': 'EMT' },
  { name: 'Giva', emi: 'No-cost EMIs upto 36 months', color: '#EC4899', initial: 'G' },
  { name: 'Giva Gold Voucher', emi: 'No-cost EMIs upto 12 months', color: '#F59E0B', initial: 'G' },
  { name: 'Goibibo', emi: 'No-cost EMIs upto 18 months', color: '#DC2626', initial: 'go' },
  { name: 'Goibibo Hotel', emi: 'No-cost EMIs upto 36 months', color: '#DC2626', initial: 'go' },
  { name: 'Helios', emi: 'No-cost EMIs upto 24 months', color: '#1A1A2E', initial: 'HELIOS' },
  { name: 'Imagine Apple Premium', emi: 'No-cost EMIs upto 6 months', color: '#1E293B', initial: 'imagine' },
  { name: 'Jos Alukkas Jewellery', emi: 'No-cost EMIs upto 9 months', color: '#7C2D12', initial: 'JA' },
  { name: 'Joyalukkas', emi: 'No-cost EMIs upto 12 months', color: '#991B1B', initial: 'J' },
  { name: 'Joyalukkas Pure Gold', emi: 'No-cost EMIs upto 9 months', color: '#B91C1C', initial: 'J' },
  { name: 'Kalyan Diamond', emi: 'No-cost EMIs upto 18 months', color: '#1E3A5F', initial: 'K' },
  { name: 'Kalyan Gold Coin', emi: 'No-cost EMIs upto 9 months', color: '#1E3A5F', initial: 'K' },
  { name: 'Kalyan Jewellers', emi: 'No-cost EMIs upto 12 months', color: '#DC2626', initial: 'K' },
  { name: 'Prestige', emi: 'No-cost EMIs upto 24 months', color: '#DC2626', initial: 'P' },
  { name: 'Reliance Digital', emi: 'No-cost EMIs upto 6 months', color: '#DC2626', initial: 'RD' },
  { name: 'Reliance Jewels', emi: 'No-cost EMIs upto 6 months', color: '#DC2626', initial: 'RJ' },
  { name: 'Skechers', emi: 'No-cost EMIs upto 24 months', color: '#1E40AF', initial: 'SK' },
  { name: 'SOTC', emi: 'No-cost EMIs upto 12 months', color: '#DC2626', initial: 'SOTC' },
  { name: 'StayVista', emi: 'No-cost EMIs upto 36 months', color: '#1A1A2E', initial: 'SV' },
  { name: 'Sterling Holiday Resorts', emi: 'No-cost EMIs upto 36 months', color: '#059669', initial: 'S' },
  { name: 'Taj Experiences', emi: 'No-cost EMIs upto 24 months', color: '#78716C', initial: 'Taj' },
  { name: 'Taj Spa', emi: 'No-cost EMIs upto 24 months', color: '#57534E', initial: 'Taj' },
  { name: 'Tanishq', emi: 'No-cost EMIs upto 9 months', color: '#F59E0B', initial: 'T' },
  { name: 'Tanishq Gold Coin', emi: 'No-cost EMIs upto 6 months', color: '#F59E0B', initial: 'T' },
  { name: 'Tanishq Studded', emi: 'No-cost EMIs upto 12 months', color: '#9333EA', initial: 'T' },
  { name: 'Vijay Sales', emi: 'No-cost EMIs upto 6 months', color: '#DC2626', initial: 'VS' },
  { name: 'Wakefit', emi: 'No-cost EMIs upto 12 months', color: '#6C3CE1', initial: 'W' },
  { name: 'World of Titan', emi: 'No-cost EMIs upto 24 months', color: '#5EEAD4', initial: 'TITAN' },
  { name: 'Yatra Hotels & Holidays', emi: 'No-cost EMIs upto 24 months', color: '#DC2626', initial: 'Y' },
];

const NEARBY_STORES: StoreItem[] = [
  { name: 'Pacholi Suzuki Railing Road', distance: '1.0', address: '64/9, New Railway Rd, near DSD college, Subhash Nagar, Sector 8, Gurugram, Haryana, 122001', color: '#DC2626', initial: 'S' },
  { name: 'Pacholi Suzuki Rajiv Chowk', distance: '1.4', address: '6/38, Rajiv Chowk, Sector 33, Rajiv Chowk, Gurugram, Haryana, 122001', color: '#DC2626', initial: 'S' },
  { name: 'Malwa Honda Khan', distance: '2.1', address: '60, Khandsa Rd, Pace City I, Sector 10A, Gurugram, Haryana, 122001', color: '#CC0000', initial: 'H' },
  { name: 'Atelier Forbidden ...', distance: '3.3', address: 'Sector 40, Gurugram, Haryana, 122001', color: '#F59E0B', initial: 'AF' },
  { name: 'Ashoka Suzuki', distance: '3.6', address: 'Khata No 271, 316, Badshahpur Sohna Rd, Gurugram, Haryana, 122001', color: '#DC2626', initial: 'S' },
  { name: 'Charger On Wheels', distance: '4.1', address: 'Orchid Business Park, Near Subhash Chowk, Gurugram, Haryana, 122101', color: '#16A34A', initial: 'CW' },
  { name: 'TripBouquet', distance: '4.9', address: '241, Tower B, Spazedge, near Dmart, Gurugram, Haryana, 122018', color: '#DC2626', initial: 'TB' },
  { name: 'Pacholi Suzuki Hayatpur', distance: '9.0', address: 'RAKBA 12, KANAL 11, MARLA 0, Hayatpur, SARSAI, Gurugram, Haryana, 122001', color: '#DC2626', initial: 'S' },
];

export default function ShopScreen() {
  const [activeTab, setActiveTab] = useState<ShopTab>('brands');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('Gurugram');

  const filteredBrands = TOP_BRANDS.filter((b) =>
    b.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredStores = NEARBY_STORES.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.heroBanner}>
          <View style={styles.heroContent}>
            <View style={styles.heroBadge}>
              <Ionicons name="sparkles" size={12} color="#FBBF24" />
              <Text style={styles.heroBadgeText}>NO-COST EMIs</Text>
            </View>
            <Text style={styles.heroTitle}>
              Shop today,{'\n'}Pay later using{'\n'}Mutual funds.
            </Text>
            <Text style={styles.heroDescription}>
              No credit score required. No interest.{'\n'}Backed by your investments.
            </Text>
          </View>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'brands' && styles.tabActive]}
            onPress={() => { setActiveTab('brands'); setSearchQuery(''); }}
          >
            <Text style={[styles.tabText, activeTab === 'brands' && styles.tabTextActive]}>
              Top Brands
            </Text>
            {activeTab === 'brands' && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'stores' && styles.tabActive]}
            onPress={() => { setActiveTab('stores'); setSearchQuery(''); }}
          >
            <Text style={[styles.tabText, activeTab === 'stores' && styles.tabTextActive]}>
              Nearby Stores
            </Text>
            {activeTab === 'stores' && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'marketplace' && styles.tabActive]}
            onPress={() => { setActiveTab('marketplace'); setSearchQuery(''); }}
          >
            <Text style={[styles.tabText, activeTab === 'marketplace' && styles.tabTextActive]}>
              1Fi Marketplace
            </Text>
            {activeTab === 'marketplace' && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        </View>

        {activeTab !== 'marketplace' && (
          <View style={styles.searchContainer}>
            <Ionicons name="search-outline" size={18} color={Colors.textTertiary} />
            <TextInput
              style={styles.searchInput}
              placeholder={activeTab === 'brands' ? 'Search online stores...' : 'Search stores...'}
              placeholderTextColor={Colors.textTertiary}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        )}

        {activeTab === 'brands' && (
          <>
            <Text style={styles.listHeader}>Top Brands</Text>
            {filteredBrands.map((brand) => (
              <TouchableOpacity key={brand.name} style={styles.brandCard} activeOpacity={0.7}>
                <View style={[styles.brandLogo, { backgroundColor: brand.color }]}>
                  <Text style={[styles.brandLogoText, brand.initial.length > 2 && styles.brandLogoTextSmall]}>
                    {brand.initial}
                  </Text>
                </View>
                <View style={styles.brandInfo}>
                  <Text style={styles.brandName}>{brand.name}</Text>
                  <Text style={styles.brandEmi}>{brand.emi}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </>
        )}

        {activeTab === 'stores' && (
          <>
            <View style={styles.storesHeader}>
              <Text style={styles.listHeader}>Nearby Stores</Text>
              <TouchableOpacity style={styles.citySelector}>
                <Text style={styles.cityText}>{selectedCity}</Text>
                <Ionicons name="chevron-down" size={14} color={Colors.primary} />
              </TouchableOpacity>
            </View>
            {filteredStores.map((store) => (
              <TouchableOpacity key={store.name} style={styles.storeCard} activeOpacity={0.7}>
                <View style={[styles.storeLogo, { backgroundColor: store.color }]}>
                  <Text style={[styles.storeLogoText, store.initial.length > 2 && styles.storeLogoTextSmall]}>
                    {store.initial}
                  </Text>
                </View>
                <View style={styles.storeInfo}>
                  <View style={styles.storeNameRow}>
                    <Text style={styles.storeName} numberOfLines={1}>{store.name}</Text>
                    <View style={styles.distanceBadge}>
                      <Text style={styles.distanceText}>{store.distance} KM</Text>
                    </View>
                  </View>
                  <Text style={styles.storeAddress} numberOfLines={3}>{store.address}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </>
        )}

        {activeTab === 'marketplace' && (
          <ProductList />
        )}

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
    backgroundColor: '#5B21B6',
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    overflow: 'hidden',
  },
  heroContent: {
    zIndex: 1,
  },
  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    gap: 4,
    marginBottom: Spacing.lg,
  },
  heroBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.surface,
    letterSpacing: 0.5,
  },
  heroTitle: {
    fontSize: FontSize.xxl + 4,
    fontWeight: '700',
    color: Colors.surface,
    lineHeight: 38,
    marginBottom: Spacing.md,
  },
  heroDescription: {
    fontSize: FontSize.sm,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.xxl,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.full,
    padding: 4,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.full,
  },
  tabActive: {
    backgroundColor: Colors.primaryLight,
  },
  tabText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  tabTextActive: {
    color: Colors.primary,
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 6,
    width: 30,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: Colors.primary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    gap: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchInput: {
    flex: 1,
    fontSize: FontSize.sm,
    color: Colors.text,
    padding: 0,
  },
  listHeader: {
    fontSize: FontSize.xl,
    fontWeight: '700',
    color: Colors.text,
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.xxl,
    marginBottom: Spacing.md,
  },
  storesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.xxl,
    marginBottom: Spacing.md,
  },
  citySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryLight,
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
    gap: 4,
  },
  cityText: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.primary,
  },
  brandCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.sm,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
  },
  brandLogo: {
    width: 56,
    height: 56,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandLogoText: {
    fontSize: FontSize.sm,
    fontWeight: '700',
    color: Colors.surface,
  },
  brandLogoTextSmall: {
    fontSize: 10,
  },
  brandInfo: {
    marginLeft: Spacing.lg,
    flex: 1,
  },
  brandName: {
    fontSize: FontSize.md,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  brandEmi: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
  storeCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.surface,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.sm,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
  },
  storeLogo: {
    width: 56,
    height: 56,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeLogoText: {
    fontSize: FontSize.sm,
    fontWeight: '700',
    color: Colors.surface,
  },
  storeLogoTextSmall: {
    fontSize: 10,
  },
  storeInfo: {
    marginLeft: Spacing.lg,
    flex: 1,
  },
  storeNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  storeName: {
    fontSize: FontSize.md,
    fontWeight: '700',
    color: Colors.text,
    flex: 1,
    marginRight: Spacing.sm,
  },
  distanceBadge: {
    backgroundColor: Colors.primaryLight,
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
  },
  distanceText: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.primary,
  },
  storeAddress: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
  bottomSpacer: {
    height: 100,
  },
});
