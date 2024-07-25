import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../../theme/themeProvider';
import MyText from '../../../../components/ui/MyText/MyText';

interface BudgetAndSavingsProps {
  budgetStatus: string;
  savingsRecommendations: string[];
}

const BudgetAndSavings: React.FC<BudgetAndSavingsProps> = ({ budgetStatus, savingsRecommendations }) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.cardBackground }]}>
      <MyText style={[styles.title]}>Budget & Savings</MyText>
      <MyText style={[styles.status]}>Budget Status: {budgetStatus}</MyText>
      <MyText style={[styles.recommendationsTitle]}>Savings Recommendations:</MyText>
      {savingsRecommendations.map((recommendation, index) => (
        <MyText key={index}>- {recommendation}</MyText>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    marginBottom: 10,
  },
  recommendationsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default BudgetAndSavings;
