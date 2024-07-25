import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../../theme/themeProvider';
import MyText from '../../../../components/ui/MyText/MyText';

interface FinancialSummaryProps {
  totalIncome: number;
  totalExpense: number;
  balance: number;
}

const FinancialSummary: React.FC<FinancialSummaryProps> = ({ totalIncome, totalExpense, balance }) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.summaryContainer, { backgroundColor: theme.cardBackground }]}>
      <View style={styles.card}>
        <MyText>Total Income</MyText>
        <MyText style={[styles.amount]}>${totalIncome}</MyText>
      </View>
      <View style={styles.card}>
        <MyText>Total Expense</MyText>
        <MyText style={[styles.amount]}>${totalExpense}</MyText>
      </View>
      <View style={styles.card}>
        <MyText>Balance</MyText>
        <MyText style={[styles.amount]}>${balance}</MyText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 3,
  },
  card: {
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FinancialSummary;
