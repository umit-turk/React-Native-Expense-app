import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ThemeContext } from '../../theme/themeProvider';
import MyText from '../ui/MyText/MyText';

interface Transaction {
  description: string;
  amount: number;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({ transactions }) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.cardBackground }]}>
      <MyText style={[styles.title]}>Recent Transactions</MyText>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.description}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <MyText>{item.description}</MyText>
            <MyText>${item.amount}</MyText>
          </View>
        )}
      />
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
});

export default RecentTransactions;
