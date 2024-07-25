import React, { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ThemeContext } from '../../theme/themeProvider';
import MyText from '../ui/MyText/MyText';

interface Category {
  name: string;
  amount: number;
}

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.cardBackground }]}>
      <MyText style={[styles.title]}>Categories</MyText>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <MyText>{item.name}</MyText>
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

export default CategoryList;
