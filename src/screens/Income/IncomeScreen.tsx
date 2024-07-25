import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import IncomeSummary from './components/IncomeSummary/IncomeSummary';
import IncomeRecommendations from './components/IncomeRecommendations/IncomeRecommendations';
import ChartSection from '../../components/ChartSection/ChartSection';
import CategoryList from '../../components/CategoryList/CategoryList';
import RecentTransactions from '../../components/RecentTransactions/RecentTransactions';

const IncomeScreen: React.FC = () => {
  const totalIncome = 5000;
  const monthlyIncome = 1200;
  const chartData = [{ name: 'Salary', population: 4000 }, { name: 'Freelance', population: 1000 }];
  const trendData = { labels: ['Jan', 'Feb', 'Mar'], datasets: [{ data: [1200, 1300, 1400] }] };
  const categories = [{ name: 'Salary', amount: 4000 }, { name: 'Freelance', amount: 1000 }];
  const recentTransactions = [{ description: 'Project A', amount: 1000 }, { description: 'Salary March', amount: 4000 }];
  const incomeRecommendations = ['Diversify income sources', 'Invest in skill development'];

  return (
    <ScrollView style={styles.container}>
      <IncomeSummary totalIncome={totalIncome} monthlyIncome={monthlyIncome} />
      <ChartSection data={chartData} trendData={trendData} />
      <CategoryList categories={categories} />
      <RecentTransactions transactions={recentTransactions} />
      <IncomeRecommendations recommendations={incomeRecommendations} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default IncomeScreen;
