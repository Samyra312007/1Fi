import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSize, Spacing } from '../constants/theme';

interface Props {
  icon: string;
  label: string;
  focused: boolean;
}

export function TabBarIcon({ icon, label, focused }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons
        name={icon as any}
        size={24}
        color={focused ? Colors.primary : Colors.textTertiary}
      />
      <Text
        style={[
          styles.label,
          focused && styles.labelFocused,
        ]}
      >
        {label}
      </Text>
      {focused && <View style={styles.indicator} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Spacing.sm,
    minWidth: 60,
  },
  label: {
    fontSize: FontSize.xs,
    color: Colors.textTertiary,
    marginTop: 2,
    fontWeight: '500',
  },
  labelFocused: {
    color: Colors.primary,
    fontWeight: '600',
  },
  indicator: {
    position: 'absolute',
    top: -4,
    width: 24,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: Colors.primary,
  },
});
