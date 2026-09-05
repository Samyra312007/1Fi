export interface UserProfile {
  name: string;
  phone: string;
  initial: string;
}

export interface QuickAction {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  iconBackgroundColor: string;
  badge?: string;
  badgeColor?: string;
  onPress?: () => void;
}
