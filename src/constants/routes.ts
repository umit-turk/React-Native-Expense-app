export const NavigationRoutes = {
    DASHBOARD: 'Dashboard',
    INCOME: 'Income',
    EXPENSES: 'Expenses',
    REPORTS: 'Reports',
    DRAWER_DASHBOARD: 'Dashboard',
    DRAWER_INCOME: 'Income',
    SETTINGS: 'Settings',
    MAIN: 'Main',
} as const;

export type NavigationRoutesType = typeof NavigationRoutes[keyof typeof NavigationRoutes];
