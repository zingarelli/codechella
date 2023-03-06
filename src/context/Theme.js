import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const localTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(localTheme || 'summer');
    
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}