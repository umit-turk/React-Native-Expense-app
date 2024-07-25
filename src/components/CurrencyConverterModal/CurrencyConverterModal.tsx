import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Modal as RNModal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setCurrency } from '../../store/slices/currencySlice';
import { ThemeContext } from '../../theme/themeProvider';
import CustomDropdown from '../ui/Dropdown/Dropdown';
import { allowedCurrencies } from '../../constants/currencies';
import Button from '../ui/Button/Button';
import { convertCurrency } from '../../api/api';
import CustomInput from '../ui/Input/Input';
import MyText from '../ui/MyText/MyText';


type CurrencyConverterModalProps = {
    visible: boolean;
    onClose: () => void;
};

const CurrencyConverterModal: React.FC<CurrencyConverterModalProps> = ({ visible, onClose }) => {
    const dispatch = useDispatch();
    const selectedCurrency = useSelector((state: RootState) => state.currency.selectedCurrency);
    const [baseCurrency, setBaseCurrency] = useState<string>('USD');
    const [targetCurrency, setTargetCurrency] = useState<string>('EUR');
    const [appCurrency, setAppCurrency] = useState<string>(selectedCurrency);
    const [conversionRate, setConversionRate] = useState<number | null>(null);
    const [amount, setAmount] = useState<string>('');
    const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

    const theme = useContext(ThemeContext);



    const handleConvert = async () => {
        try {
            const { conversionRate, convertedAmount } = await convertCurrency(Number(amount), baseCurrency, targetCurrency);
            setConversionRate(conversionRate);
            setConvertedAmount(convertedAmount);
        } catch (error) {
            // Handle error if needed
            console.log(error)
        }
    };

    const handleSetAppCurrency = () => {
        dispatch(setCurrency(appCurrency));
        onClose();
    };

    return (
        <RNModal visible={visible} onRequestClose={onClose} transparent>
            <SafeAreaView style={[styles.modalContainer, { backgroundColor: theme.cardBackground }]}>
                <View style={[styles.modalContent, { backgroundColor: theme.cardBackground }]}>
                    <View style={styles.modalHeader}>
                    <MyText style={styles.modalTitle}>Currency Comparison</MyText>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <MyText style={styles.closeButtonText}>x</MyText>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row}>
                        <CustomDropdown
                            data={allowedCurrencies}
                            placeholder="Base Currency"
                            value={baseCurrency}
                            onChange={(item) => setBaseCurrency(item.value)}
                        />
                        <CustomDropdown
                            data={allowedCurrencies}
                            placeholder="Target Currency"
                            value={targetCurrency}
                            onChange={(item) => setTargetCurrency(item.value)}
                        />
                    </View>

                    <CustomInput
                        value={amount}
                        onChangeText={setAmount}
                        placeholder="Enter amount"
                        keyboardType="numeric"
                    />

                    <Button
                        title="Convert"
                        onPress={handleConvert}
                        buttonStyle={{marginBottom:15}}
                    />
                    {convertedAmount !== null && (
                        <Text style={[styles.conversionRate, { color: theme.text }]}>
                            {amount} {baseCurrency} = {convertedAmount.toFixed(2)} {targetCurrency}
                        </Text>
                    )}

                    <View style={styles.separator} />

                    <CustomDropdown
                        data={allowedCurrencies}
                        placeholder="Set App Currency"
                        value={appCurrency}
                        onChange={(item) => setAppCurrency(item.value)}
                    />

                    <Button
                        title="Set App Currency"
                        onPress={handleSetAppCurrency}
                        buttonStyle={{ backgroundColor: '#28a745',marginTop:15 }}
                    />
                </View>
            </SafeAreaView>
        </RNModal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        alignItems: 'center',
        flex: 1,
    },
    modalContent: {
        borderRadius: 15,
        width: '90%',
        padding: 20,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: '700',
    },
    closeButton: {
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 20,
    },
    closeButtonText: {
        fontSize: 24,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        height: 45,
        marginBottom: 15,
    },
    convertButton: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
        elevation: 3,
    },
    setCurrencyButton: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
        elevation: 3,
        marginTop: 15,
    },
    conversionRate: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600',
        marginBottom: 15,
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd',
        marginVertical: 15,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CurrencyConverterModal;
