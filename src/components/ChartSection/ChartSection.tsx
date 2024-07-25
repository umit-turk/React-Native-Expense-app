import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ThemeContext } from '../../theme/themeProvider';
import MyText from '../ui/MyText/MyText';

interface ChartSectionProps {
  data: { name: string; population: number }[];
  trendData: { labels: string[]; datasets: { data: number[] }[] };
}

const ChartSection: React.FC<ChartSectionProps> = ({ data, trendData }) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.cardBackground }]}>
      <MyText style={[styles.title]}>Expenses Trend</MyText>
      <LineChart
        data={trendData}
        width={320}
        height={220}
        chartConfig={{
          backgroundGradientFrom: theme.background,
          backgroundGradientTo: theme.background,
          decimalPlaces: 2,
          color: (opacity = 1) => theme.text,
          labelColor: (opacity = 1) => theme.text,
        }}
        bezier
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ChartSection;
