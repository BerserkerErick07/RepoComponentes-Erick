import { useState } from 'react';
import CardLogin from './CardLogin';
import Login from './Login';

function BotonCustom({ handleSubmit }) {
    const [showCard, setShowCard] = useState(false);
    const [formBackgroundColor, setFormBackgroundColor] = useState('rgba(17, 148, 196, 0.85)');
    const [appBackgroundImage, setAppBackgroundImage] = useState('');

    const toggleButton = () => {
        setShowCard(prev => !prev);
    };

    // Función para cambiar el color con opacidad del 85%
    const handleColorChange = (color) => {
        const colorWithOpacity = color.replace(')', ', 0.20)').replace('rgb', 'rgba');
        setFormBackgroundColor(colorWithOpacity);
    };

    const handleImageChange = (image) => {
        setAppBackgroundImage(`url('${image}')`);
    };

    return (
        <div
            className="h-screen w-screen absolute overflow-hidden"
            style={{
                backgroundImage: appBackgroundImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 0.5s ease-in-out',
            }}
        >
            <button
                onClick={toggleButton}
                className={`w-20 h-20 cursor-pointer border-2 rounded-full transition-transform duration-700 
                            bg-dark-purple border-white absolute right-8 top-20 transform -translate-y-1/2 
                            flex items-center justify-center`}
                style={{
                    backgroundImage: "url('/Image/IconConfig.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Icono o contenido del botón */}
            </button>

            {/* CardLogin condicional */}
            <div className={`absolute top-32 right-0 transition-all duration-500 ease-in-out 
                            ${showCard ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0 pointer-events-none"}`}>
                <CardLogin onColorChange={handleColorChange} onImageChange={handleImageChange} />
            </div>

            {/* Contenedor centrado para el formulario */}
            <div className="h-screen flex justify-center items-center">
                
                    <Login 
                        
                        h1Text="Iniciar Sesión" 
                        h1Class="text-2xl text-center text-white font-bold" // Estilo actualizado
                        handleSubmit={handleSubmit}
                        errorMessage="" 
                        formBackgroundColor={formBackgroundColor}
                    />
                
            </div>
        </div>
    );
}

export default BotonCustom;

