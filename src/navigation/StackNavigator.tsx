import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import { NavigationRoutes } from '../constants/routes';

type StackParamList = {
    [NavigationRoutes.MAIN]: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const StackNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={NavigationRoutes.MAIN}
                component={DrawerNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
