

import { theme } from '@/utils/theme';
import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(theme.light);

    const toggleTheme = () => {
        isDarkMode == "light" ? setIsDarkMode("dark") : setIsDarkMode("light");
        // document.documentElement.classList.toggle('dark');
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);