import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('summer');
    
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}