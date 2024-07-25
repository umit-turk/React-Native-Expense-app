import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../../theme/themeProvider';
import MyText from '../../../../components/ui/MyText/MyText';

interface IncomeRecommendationsProps {
  recommendations: string[];
}

const IncomeRecommendations: React.FC<IncomeRecommendationsProps> = ({ recommendations }) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.recommendationsContainer, { backgroundColor: theme.cardBackground }]}>
      <MyText style={[styles.title]}>Income Recommendations</MyText>
      {recommendations.map((recommendation, index) => (
        <MyText key={index} style={[styles.recommendation]}>{recommendation}</MyText>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  recommendationsContainer: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recommendation: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default IncomeRecommendations;
