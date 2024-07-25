import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigationState, NavigationState, Route, useNavigation } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import { NavigationRoutes } from '../constants/routes';
import CustomHeader from '../components/ui/Header/Header';

type DrawerParamList = {
    [NavigationRoutes.DRAWER_DASHBOARD]: undefined;
    [NavigationRoutes.SETTINGS]: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const getActiveRouteName = (state: NavigationState): string => {
    const route = state.routes[state.index] as Route<string> & {
        state?: NavigationState;
    };
    if (route.state) {
        return getActiveRouteName(route.state);
    }
    return route.name;
};

const DrawerNavigator: React.FC = () => {
    const [headerTitle, setHeaderTitle] = useState<string>('Dashboard');
    const navigationState = useNavigationState(state => state);
    const navigation = useNavigation();

    useEffect(() => {
        const currentRouteName = getActiveRouteName(navigationState);
        setHeaderTitle(currentRouteName);
    }, [navigationState, navigation]);

    return (
        <Drawer.Navigator
            screenOptions={({ route }) => ({
                header: (props) => <CustomHeader title={headerTitle} {...props} />,
                headerTitleAlign: 'center',
            })}
        >
            <Drawer.Screen
                name={NavigationRoutes.DRAWER_DASHBOARD}
                component={TabNavigator}
                options={{
                    drawerLabel: 'Dashboard',
                    drawerIcon: () => <></>, // Add icon if needed
                }}
                listeners={({ navigation }) => ({
                    focus: () => {
                        navigation.navigate(NavigationRoutes.DRAWER_DASHBOARD, { screen: NavigationRoutes.DASHBOARD });
                    },
                })}
            />
            <Drawer.Screen
                name={NavigationRoutes.SETTINGS}
                component={SettingsScreen}
                options={{
                    drawerLabel: 'Settings',
                    drawerIcon: () => <></>, // Add icon if needed
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
