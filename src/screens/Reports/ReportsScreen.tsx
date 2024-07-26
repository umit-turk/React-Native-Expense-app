import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, FlatList, Animated, Easing, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ThemeContext } from '../../theme/themeProvider';
import CustomDropdown from '../../components/ui/Dropdown/Dropdown';
import Button from '../../components/ui/Button/Button';
import ChartSection from '../../components/ChartSection/ChartSection';
import CategoryList from '../../components/CategoryList/CategoryList';
import MyText from '../../components/ui/MyText/MyText';

const ReportScreen: React.FC = () => {
  const theme = useContext(ThemeContext);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<string>('Last 30 Days');
  const [showDetailedTable, setShowDetailedTable] = useState<boolean>(false);
  
  const [animation] = useState(new Animated.Value(0));

  const expenses = useSelector((state: RootState) => state.expenses);
  const income = useSelector((state: RootState) => state.income);

  const [chartData, setChartData] = useState<{ labels: string[], datasets: { data: number[] }[] }>({
    labels: [],
    datasets: [{ data: [] }],
  });

  const [categories, setCategories] = useState<{ name: string; amount: number }[]>([]);
  const [detailedData, setDetailedData] = useState<{ date: string; description: string; amount: number }[]>([]);

  useEffect(() => {
    const updateData = () => {
      // Replace with your data fetching or computation logic
      const newChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            data: [50, 100, 150, 200, 250],
          },
        ],
      };

      const newCategories = [
        { name: 'Food', amount: 120 },
        { name: 'Transport', amount: 80 },
        { name: 'Entertainment', amount: 60 },
      ];

      const newDetailedData = [
        { date: '2024-01-01', description: 'Grocery Shopping', amount: 50 },
        { date: '2024-01-05', description: 'Bus Ticket', amount: 10 },
        { date: '2024-01-10', description: 'Movie Ticket', amount: 20 },
      ];

      setChartData(newChartData);
      setCategories(newCategories);
      setDetailedData(newDetailedData);
    };

    updateData();
  }, [selectedCategory, dateRange]);

  const handleCategoryChange = (item: { value: string }) => {
    setSelectedCategory(item.value);
  };

  const handleDateRangeChange = (item: { value: string }) => {
    setDateRange(item.value);
  };

  const toggleDetailedTable = () => {
    Animated.timing(animation, {
      toValue: showDetailedTable ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
    setShowDetailedTable(!showDetailedTable);
  };

  const summaryData = {
    totalIncome: 5000,
    totalExpense: 3000,
    netBalance: 2000,
  };

  const renderDetailedItem = ({ item }: { item: { date: string; description: string; amount: number } }) => (
    <View style={[styles.detailedItem, { backgroundColor: theme.cardBackground }]}>
      <Text style={[styles.detailedItemText, { color: theme.text }]}>{item.date}</Text>
      <Text style={[styles.detailedItemText, { color: theme.text }]}>{item.description}</Text>
      <Text style={[styles.detailedItemText, { color: theme.text }]}>{`$${item.amount.toFixed(2)}`}</Text>
    </View>
  );

  const animatedOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.filterSection, { backgroundColor: theme.cardBackground }]}>
          <CustomDropdown
            data={[{ label: 'All Categories', value: '' }, { label: 'Food', value: 'food' }, { label: 'Transport', value: 'transport' }]}
            placeholder="Select Category"
            value={selectedCategory || ''}
            onChange={handleCategoryChange}
            style={styles.dropdown}
          />
          <CustomDropdown
            data={[{ label: 'Last 30 Days', value: 'Last 30 Days' }, { label: 'Last 6 Months', value: 'Last 6 Months' }, { label: 'This Year', value: 'This Year' }]}
            placeholder="Select Date Range"
            value={dateRange}
            onChange={handleDateRangeChange}
          />
        </View>

        <View style={[styles.summarySection, { backgroundColor: theme.cardBackground }]}>
          <MyText style={[styles.summaryTitle]}>Summary</MyText>
          <View style={styles.summaryRow}>
            <MyText style={[styles.summaryLabel]}>Total Income:</MyText>
            <MyText style={[styles.summaryValue]}>${summaryData.totalIncome}</MyText>
          </View>
          <View style={styles.summaryRow}>
            <MyText style={[styles.summaryLabel]}>Total Expense:</MyText>
            <MyText style={[styles.summaryValue]}>${summaryData.totalExpense}</MyText>
          </View>
          <View style={styles.summaryRow}>
            <MyText style={[styles.summaryLabel]}>Net Balance:</MyText>
            <MyText style={[styles.summaryValue]}>${summaryData.netBalance}</MyText>
          </View>
          <Button
            title={showDetailedTable ? "Hide Details" : "Show Details"}
            onPress={toggleDetailedTable}
            buttonStyle={{ marginTop: 10 }}
          />
          <Animated.View style={[styles.detailedTableSection, { backgroundColor: theme.cardBackground, opacity: animatedOpacity }]}>
            {showDetailedTable && (
              <>
                <MyText style={[styles.detailedTableTitle]}>Detailed Table</MyText>
                <FlatList
                  data={detailedData}
                  renderItem={renderDetailedItem}
                  keyExtractor={(item) => item.date + item.description}
                />
              </>
            )}
          </Animated.View>
        </View>
        <ChartSection data={[]} trendData={chartData} />
        <CategoryList categories={categories} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 10,
  },
  filterSection: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    elevation: 3,
  },
  dropdown: {
    marginBottom: 10,
  },
  summarySection: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    elevation: 3,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  summaryLabel: {
    fontSize: 16,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailedTableSection: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    elevation: 3,
    overflow: 'hidden',
  },
  detailedTableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailedItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  detailedItemText: {
    fontSize: 16,
  },
  chartSection: {
    marginVertical: 20,
  },
});

export default ReportScreen;
