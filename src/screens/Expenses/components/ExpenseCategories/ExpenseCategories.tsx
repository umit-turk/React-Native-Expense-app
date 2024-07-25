import React, { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ThemeContext } from '../../../../theme/themeProvider';
import MyText from '../../../../components/ui/MyText/MyText';

interface Category {
  name: string;
  amount: number;
}

interface ExpenseCategoriesProps {
  categories: Category[];
}

const ExpenseCategories: React.FC<ExpenseCategoriesProps> = ({ categories }) => {
  const theme = useContext(ThemeContext);

  const renderItem = ({ item }: { item: Category }) => (
    <View style={[styles.itemContainer, { backgroundColor: theme.cardBackground }]}>
      <MyText>{item.name}</MyText>
      <MyText>${item.amount}</MyText>
    </View>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
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

export default ExpenseCategories;
