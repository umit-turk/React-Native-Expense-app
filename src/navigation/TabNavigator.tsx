import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashBoard/DashboardScreen';
import IncomeScreen from '../screens/Income/IncomeScreen';
import ExpensesScreen from '../screens/Expenses/ExpensesScreen';
import ReportsScreen from '../screens/Reports/ReportsScreen';
import { NavigationRoutes } from '../constants/routes';

type TabParamList = {
    [NavigationRoutes.DASHBOARD]: undefined;
    [NavigationRoutes.INCOME]: undefined;
    [NavigationRoutes.EXPENSES]: undefined;
    [NavigationRoutes.REPORTS]: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator: React.FC = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name={NavigationRoutes.DASHBOARD} component={DashboardScreen} />
            <Tab.Screen name={NavigationRoutes.INCOME} component={IncomeScreen} />
            <Tab.Screen name={NavigationRoutes.EXPENSES} component={ExpensesScreen} />
            <Tab.Screen name={NavigationRoutes.REPORTS} component={ReportsScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
