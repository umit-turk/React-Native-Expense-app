import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { ThemeContext } from '../../../../theme/themeProvider';

interface ExpensesChartProps {
  data: {
    labels: string[];
    datasets: { data: number[] }[];
  };
}

const ExpensesChart: React.FC<ExpensesChartProps> = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <BarChart
        data={data}
        width={350}
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: theme.background,
          backgroundGradientFrom: theme.background,
          backgroundGradientTo: theme.background,
          decimalPlaces: 2,
          color: (opacity = 1) => theme.text,
          labelColor: (opacity = 1) => theme.text,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default ExpensesChart;
