import { StyleSheet } from 'react-native';

export const colors = {
  background: '#F8FAFC',
  surface: '#FFFFFF',
  header: '#FFFFFF',

  primary: '#2563EB',
  secondary: '#06B6D4',

  success: '#22C55E',
  warning: '#F59E0B',
  danger: '#EF4444',

  text: '#1E293B',
  textSecondary: '#64748B',

  border: '#E2E8F0',
};
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textSecondary,
    marginTop: 20,
    marginBottom: 12,
  },
  empty: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
  backgroundColor: "#FFFFFF",
  borderRadius: 16,
  marginTop: 12,
  overflow: "hidden",
},

item: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingVertical: 18,
  paddingHorizontal: 18,
  borderBottomWidth: 1,
  borderBottomColor: "#E2E8F0",
},

itemText: {
  flex: 1,
  marginLeft: 15,
  fontSize: 16,
  color: "#1E293B",
},
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
  },

  AddButton: {
    backgroundColor: "#22996F",
    borderRadius: 12, 
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 10,
    width: "45%",
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  

  secondaryButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 12,
  },

  secondaryButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "600",
  },

  dangerButton: {
    backgroundColor: colors.danger,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 12,
  },

  dangerButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  
});