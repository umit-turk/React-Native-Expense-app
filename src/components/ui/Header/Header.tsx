// src/components/CustomHeader/CustomHeader.tsx
import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ThemeContext } from '../../../theme/themeProvider';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import CurrencyConverterModal from '../../CurrencyConverterModal/CurrencyConverterModal';
import MyText from '../MyText/MyText';

type CustomHeaderProps = {
  title: string;
};

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  const [modalVisible, setModalVisible] = useState(false);
  const selectedCurrency = useSelector((state: RootState) => state.currency.selectedCurrency);

  return (
    <SafeAreaView style={[styles.header, { backgroundColor: theme.cardBackground }]}>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
        <MyText style={[styles.menuText]}>☰</MyText>
      </TouchableOpacity>
      <MyText style={[styles.title]}>{title}</MyText>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.currencyButton}>
        <MyText style={[styles.currencyText]}>{selectedCurrency}</MyText>
      </TouchableOpacity>
      <CurrencyConverterModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 10,
  },
  menuText: {
    fontSize: 24,
  },
  currencyButton: {
    padding: 10,
  },
  currencyText: {
    fontSize: 18,
  },
});

export default CustomHeader;
