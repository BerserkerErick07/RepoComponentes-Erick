import { useState } from 'react';
import { ThemeProvider } from './Login/ThemeContext'; // Importa tu ThemeProvider
import ThemeSwitcher from './Login/ThemeSwitcher'; // Importa el nuevo componente ThemeSwitcher
import Login from './Login/Login';

function App() {
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const isPasswordCorrect = false; // Simulación de validación

        if (!isPasswordCorrect) {
            setErrorMessage('Contraseña incorrecta, comuniquese con el administrador si el problema persiste');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <ThemeProvider>
            <ThemeSwitcher />

            <div className="h-screen w-screen flex justify-center items-center">
                <div className="relative w-full h-full overflow-hidden">
                    <div 
                        className="absolute top-0 left-0 w-full h-full bg-center bg-cover" 
                        style={{ 
                            backgroundImage: "url('/Image/intento1.jpg')", 
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                    <div className="relative flex justify-center items-center h-full z-10">
                        <Login 
                            h1Text="Iniciar Sesión" 
                            h1Class="text-3xl font-bold text-white text-center" 
                            handleSubmit={handleSubmit} 
                            errorMessage={errorMessage} 
                        />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
