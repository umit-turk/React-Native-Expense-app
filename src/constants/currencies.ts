interface Currency {
    label: string;
    value: string;
    symbol: string;
  }
  
  export const allowedCurrencies: Currency[] = [
    { label: 'Australian Dollar', value: 'AUD', symbol: 'A$' },
    { label: 'Bulgarian Lev', value: 'BGN', symbol: 'лв' },
    { label: 'Brazilian Real', value: 'BRL', symbol: 'R$' },
    { label: 'Canadian Dollar', value: 'CAD', symbol: 'C$' },
    { label: 'Swiss Franc', value: 'CHF', symbol: 'CHF' },
    { label: 'Chinese Renminbi Yuan', value: 'CNY', symbol: '¥' },
    { label: 'Czech Koruna', value: 'CZK', symbol: 'Kč' },
    { label: 'Danish Krone', value: 'DKK', symbol: 'kr' },
    { label: 'Euro', value: 'EUR', symbol: '€' },
    { label: 'British Pound', value: 'GBP', symbol: '£' },
    { label: 'Hong Kong Dollar', value: 'HKD', symbol: 'HK$' },
    { label: 'Hungarian Forint', value: 'HUF', symbol: 'Ft' },
    { label: 'Indonesian Rupiah', value: 'IDR', symbol: 'Rp' },
    { label: 'Israeli New Sheqel', value: 'ILS', symbol: '₪' },
    { label: 'Indian Rupee', value: 'INR', symbol: '₹' },
    { label: 'Icelandic Króna', value: 'ISK', symbol: 'kr' },
    { label: 'Japanese Yen', value: 'JPY', symbol: '¥' },
    { label: 'South Korean Won', value: 'KRW', symbol: '₩' },
    { label: 'Mexican Peso', value: 'MXN', symbol: '$' },
    { label: 'Malaysian Ringgit', value: 'MYR', symbol: 'RM' },
    { label: 'Norwegian Krone', value: 'NOK', symbol: 'kr' },
    { label: 'New Zealand Dollar', value: 'NZD', symbol: 'NZ$' },
    { label: 'Philippine Peso', value: 'PHP', symbol: '₱' },
    { label: 'Polish Złoty', value: 'PLN', symbol: 'zł' },
    { label: 'Romanian Leu', value: 'RON', symbol: 'lei' },
    { label: 'Swedish Krona', value: 'SEK', symbol: 'kr' },
    { label: 'Singapore Dollar', value: 'SGD', symbol: 'S$' },
    { label: 'Thai Baht', value: 'THB', symbol: '฿' },
    { label: 'Turkish Lira', value: 'TRY', symbol: '₺' },
    { label: 'United States Dollar', value: 'USD', symbol: '$' },
    { label: 'South African Rand', value: 'ZAR', symbol: 'R' },
  ];
  