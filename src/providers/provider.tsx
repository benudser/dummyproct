import React, { createContext, useState } from 'react';

type TTheme = {
    color: string,
    background: string
}
const ThemeContext = createContext<TTheme|undefined>(undefined);
type Props = {
    children: React.ReactNode;
}
export const ThemeProvider = ({children}: Props) => {
    const [theme, setTheme] = useState<TTheme|undefined>(undefined);
    return(
        <>
        {theme && (
            <ThemeContext.Provider value={theme}>
                {children}
            </ThemeContext.Provider>
        )}
        </>
    )
}
// Todo: Add TTheme as type later on
export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    return context;
}