import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import FinancialSummary from './components/FinancialSummary/FinancialSummary';
import ChartSection from '../../components/ChartSection/ChartSection';
import CategoryList from '../../components/CategoryList/CategoryList';
import RecentTransactions from '../../components/RecentTransactions/RecentTransactions';
import BudgetAndSavings from './components/BudgetAndSavings/BudgetAndSavings';

const DashboardScreen: React.FC = () => {
  const totalIncome = 5000;
  const totalExpense = 2000;
  const balance = totalIncome - totalExpense;
  const chartData = [{ name: 'Food', population: 215 }, { name: 'Travel', population: 120 }];
  const trendData = { labels: ['Jan', 'Feb', 'Mar'], datasets: [{ data: [200, 450, 300] }] };
  const categories = [{ name: 'Food', amount: 600 }, { name: 'Rent', amount: 800 }];
  const recentTransactions = [{ description: 'Grocery', amount: 50 }, { description: 'Salary', amount: 3000 }];
  const budgetStatus = 'On track';
  const savingsRecommendations = ['Reduce dining out', 'Increase savings to 20%'];

  return (
    <ScrollView style={styles.container}>
      <FinancialSummary totalIncome={totalIncome} totalExpense={totalExpense} balance={balance} />
      <ChartSection data={chartData} trendData={trendData} />
      <CategoryList categories={categories} />
      <RecentTransactions transactions={recentTransactions} />
      <BudgetAndSavings budgetStatus={budgetStatus} savingsRecommendations={savingsRecommendations} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default DashboardScreen;
