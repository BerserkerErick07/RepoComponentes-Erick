import React, { createContext, useState } from 'react';

// Crear el contexto
export const ThemeContext = createContext();

// Colores disponibles
const colors = {
    primary: '#1194c4',
    secondary: '#211769',
    accent: '#d41c45',
};

// Proveedor de contexto
export const ThemeProvider = ({ children }) => {
    const [themeColor, setThemeColor] = useState(colors.primary); // Color por defecto

    // Función para cambiar el color del tema
    const changeTheme = (color) => {
        setThemeColor(colors[color]);
    };

    return (
        <ThemeContext.Provider value={{ themeColor, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
