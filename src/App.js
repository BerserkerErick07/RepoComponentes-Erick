import { useState } from 'react';
import { ThemeProvider } from './Login/ThemeContext'; // Importa tu ThemeProvider
import BotonCustom from './Login/BotonCustom'; // Asegúrate de que el nombre del componente coincida

function App() {
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const isPasswordCorrect = false; // Simulación de validación

        if (!isPasswordCorrect) {
            setErrorMessage('Contraseña incorrecta, comuníquese con el administrador si el problema persiste');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <ThemeProvider>
            <div className="absolute h-screen w-screen">
                <div 
                    className="absolute inset-0 h-screen w-screen bg-center"
                    style={{ backgroundImage: "url('/Image/intento1.jpg')" }} // Fondo por defecto
                />
                <div className="relative z-10 h-full flex justify-center items-center">
                    <BotonCustom handleSubmit={handleSubmit} errorMessage={errorMessage} />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;


