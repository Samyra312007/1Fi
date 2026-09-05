import { Tabs } from 'expo-router';
import { TabBarIcon } from '../../src/components/TabBarIcon';
import { Colors } from '../../src/constants/theme';

const TABS = [
  { name: 'home', icon: 'home-outline', label: 'Home' },
  { name: 'shop', icon: 'storefront-outline', label: 'Shop' },
  { name: 'emi-dues', icon: 'wallet-outline', label: 'EMI Dues' },
  { name: 'limit', icon: 'trending-up-outline', label: 'Limit' },
  { name: 'profile', icon: 'person-outline', label: 'Profile' },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.surface,
          borderTopWidth: 0,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          height: 85,
          paddingTop: 8,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        },
      }}
    >
      {TABS.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon icon={tab.icon} label={tab.label} focused={focused} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
