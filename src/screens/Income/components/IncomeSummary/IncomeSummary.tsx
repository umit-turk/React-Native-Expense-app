import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../../theme/themeProvider';
import MyText from '../../../../components/ui/MyText/MyText';

interface IncomeSummaryProps {
    totalIncome: number;
    monthlyIncome: number;
}

const IncomeSummary: React.FC<IncomeSummaryProps> = ({ totalIncome, monthlyIncome }) => {
    const theme = useContext(ThemeContext);

    return (
        <View style={[styles.summaryContainer, { backgroundColor: theme.cardBackground }]}>
            <View style={styles.card}>
                <MyText>Total Income</MyText>
                <MyText style={[styles.amount]}>${totalIncome}</MyText>
            </View>
            <View style={styles.card}>
                <MyText>Monthly Income</MyText>
                <MyText style={[styles.amount]}>${monthlyIncome}</MyText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        marginVertical: 10,
        borderRadius: 8,
        elevation: 3,
    },
    card: {
        padding: 15,
        borderRadius: 8,
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    amount: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default IncomeSummary;
