import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../../theme/themeProvider';
import MyText from '../../../../components/ui/MyText/MyText';

interface TotalExpensesProps {
  totalExpenses: number;
}

const TotalExpenses: React.FC<TotalExpensesProps> = ({ totalExpenses }) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.cardBackground }]}>
      <MyText>Total Expenses</MyText>
      <MyText style={[styles.amount]}>${totalExpenses}</MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    elevation: 3,
    alignItems: 'center',
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TotalExpenses;
