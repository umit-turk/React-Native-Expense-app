import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.fxratesapi.com',
});

export const convertCurrency = async (amount: number, from: string, to: string): Promise<{ conversionRate: number; convertedAmount: number }> => {
    try {
        const response = await axios.get(`https://api.fxratesapi.com/latest?currencies=${to}&base=${from}`);
        const rate = response.data.rates[to];
        if (!rate) {
            throw new Error('Conversion rate not found');
        }
        return { conversionRate: rate, convertedAmount: amount * rate };
    } catch (error) {
        console.error('Error converting currency:', error);
        throw error;
    }
};
