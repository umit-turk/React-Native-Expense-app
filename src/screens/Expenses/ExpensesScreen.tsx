import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import TotalExpenses from './components/TotalExpenses/TotalExpenses';
import ExpenseCategories from './components/ExpenseCategories/ExpenseCategories';
import ExpensesChart from './components/ExpensesChart/ExpensesChart';
import RecentExpenses from './components/RecentExpenses/RecentExpenses';

const ExpensesScreen: React.FC = () => {
  const totalExpenses = 3000;
  const categories = [
    { name: 'Food', amount: 500 },
    { name: 'Rent', amount: 1500 },
    { name: 'Utilities', amount: 200 },
  ];
  const recentExpenses = [
    { description: 'Dinner', amount: 50 },
    { description: 'Electricity Bill', amount: 100 },
  ];
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{ data: [300, 500, 400] }],
  };

  return (
    <ScrollView style={styles.container}>
      <TotalExpenses totalExpenses={totalExpenses} />
      <ExpensesChart data={chartData} />
      <ExpenseCategories categories={categories} />
      <RecentExpenses expenses={recentExpenses} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default ExpensesScreen;
