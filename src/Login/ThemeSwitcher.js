import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Importa el contexto

const ThemeSwitcher = () => {
    const { changeTheme } = useContext(ThemeContext); // Obtiene la función para cambiar el tema

    return (
        <div className="flex justify-end p-4">
            <button onClick={() => changeTheme('primary')} className="mr-2 bg-blue-500 text-white p-2 rounded">
                Color Primario
            </button>
            <button onClick={() => changeTheme('secondary')} className="mr-2 bg-indigo-700 text-white p-2 rounded">
                Color Secundario
            </button>
            <button onClick={() => changeTheme('accent')} className="bg-red-500 text-white p-2 rounded">
                Color Acento
            </button>
        </div>
    );
};

export default ThemeSwitcher;

