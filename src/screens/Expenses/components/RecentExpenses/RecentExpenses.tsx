import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ThemeContext } from '../../../../theme/themeProvider';
import MyText from '../../../../components/ui/MyText/MyText';

interface RecentExpense {
  description: string;
  amount: number;
}

interface RecentExpensesProps {
  expenses: RecentExpense[];
}

const RecentExpenses: React.FC<RecentExpensesProps> = ({ expenses }) => {
  const theme = useContext(ThemeContext);

  const renderItem = ({ item }: { item: RecentExpense }) => (
    <View style={[styles.itemContainer, { backgroundColor: theme.cardBackground }]}>
      <MyText>{item.description}</MyText>
      <MyText>${item.amount}</MyText>
    </View>
  );

  return (
    <FlatList
      data={expenses}
      renderItem={renderItem}
      keyExtractor={(item) => item.description}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  itemContainer: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default RecentExpenses;
