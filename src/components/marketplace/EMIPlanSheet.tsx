import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, FontSize } from '../../constants/theme';
import { EMIPlan } from '../../types';

interface EMIPlanSheetProps {
  visible: boolean;
  plans: EMIPlan[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onConfirm: () => void;
  onClose: () => void;
}

function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}

export function EMIPlanSheet({ visible, plans, selectedId, onSelect, onConfirm, onClose }: EMIPlanSheetProps) {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <View style={styles.handle} />

          <View style={styles.header}>
            <Text style={styles.title}>Select EMI Plan</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={20} color={Colors.textSecondary} />
            </TouchableOpacity>
          </View>

          <View style={styles.planList}>
            {plans.map((plan) => {
              const isActive = plan.id === selectedId;
              return (
                <TouchableOpacity
                  key={plan.id}
                  style={[styles.planCard, isActive && styles.planCardActive]}
                  onPress={() => onSelect(plan.id)}
                  activeOpacity={0.7}
                >
                  <View style={styles.planLeft}>
                    <View style={[styles.radio, isActive && styles.radioActive]}>
                      {isActive && <View style={styles.radioDot} />}
                    </View>
                    <View>
                      <View style={styles.planTopRow}>
                        <Text style={[styles.tenure, isActive && styles.tenureActive]}>
                          {plan.tenure} months
                        </Text>
                        {plan.isNoCost && (
                          <View style={styles.noCostBadge}>
                            <Text style={styles.noCostText}>No-cost EMI</Text>
                          </View>
                        )}
                      </View>
                      <Text style={styles.planDetails}>
                        {formatPrice(plan.monthlyPayment)}/mo
                      </Text>
                      <Text style={styles.planTotal}>
                        Total: {formatPrice(plan.totalCost)}
                      </Text>
                    </View>
                  </View>
                  {plan.processingFee === 0 && (
                    <Text style={styles.freeLabel}>FREE</Text>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity style={styles.confirmButton} onPress={onConfirm} activeOpacity={0.8}>
            <Text style={styles.confirmText}>Select Plan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: Colors.surface,
    borderTopLeftRadius: BorderRadius.xl,
    borderTopRightRadius: BorderRadius.xl,
    paddingHorizontal: Spacing.xxl,
    paddingBottom: 40,
    maxHeight: '70%',
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.border,
    alignSelf: 'center',
    marginTop: Spacing.md,
    marginBottom: Spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.xl,
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: '700',
    color: Colors.text,
  },
  closeBtn: {
    padding: Spacing.xs,
  },
  planList: {
    gap: Spacing.sm,
  },
  planCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Spacing.lg,
    borderRadius: BorderRadius.lg,
    borderWidth: 1.5,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
  },
  planCardActive: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight,
  },
  planLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioActive: {
    borderColor: Colors.primary,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  planTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: 4,
  },
  tenure: {
    fontSize: FontSize.md,
    fontWeight: '700',
    color: Colors.text,
  },
  tenureActive: {
    color: Colors.primary,
  },
  noCostBadge: {
    backgroundColor: '#DCFCE7',
    borderRadius: BorderRadius.sm,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  noCostText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#16A34A',
  },
  planDetails: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
  planTotal: {
    fontSize: 10,
    color: Colors.textTertiary,
    marginTop: 2,
  },
  freeLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#16A34A',
  },
  confirmButton: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.lg,
    alignItems: 'center',
    marginTop: Spacing.xl,
  },
  confirmText: {
    fontSize: FontSize.lg,
    fontWeight: '600',
    color: Colors.surface,
  },
});
