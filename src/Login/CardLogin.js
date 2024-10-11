import React from 'react';

function CardLogin({ onColorChange, onImageChange }) {
    return (
        // Contenedor Principal
        <div className="transition-transform duration-500 ease-in-out transform translate-x-0">
            {/* Contenedor de la card que emerge del botón */}
            <div className="bg-black bg-opacity-70 border-2 rounded-xl border-white flex items-center flex-col w-80 h-96">
                <p className="text-white mt-4">Estiliza tu login.</p>
                <div className="flex flex-row">
                    <button
                        onClick={() => onColorChange('#6e47c2')}
                        className="border-white border-2 rounded-full text-white w-5 h-5 flex m-2"
                        style={{ backgroundColor: '#6e47c2' }}
                    ></button>
                    <button
                        onClick={() => onColorChange('#297928')}
                        className="border-white border-2 rounded-full text-white w-5 h-5 flex m-2"
                        style={{ backgroundColor: '#297928' }}
                    ></button>
                    <button
                        onClick={() => onColorChange('#c4560f')}
                        className="border-white border-2 rounded-full text-white w-5 h-5 flex m-2"
                        style={{ backgroundColor: '#c4560f' }}
                    ></button>
                    <button
                        onClick={() => onColorChange('#1d0a84')}
                        className="border-white border-2 rounded-full text-white w-5 h-5 flex m-2"
                        style={{ backgroundColor: '#1d0a84' }}
                    ></button>
                    <button
                        onClick={() => onColorChange('#128fbd')}
                        className="border-white border-2 rounded-full text-white w-5 h-5 flex m-2"
                        style={{ backgroundColor: '#128fbd' }}
                    ></button>
                </div>
                <div className="flex flex-row">
                    <button
                        onClick={() => onImageChange('/Image/intento1.jpg')}
                        className="border-2 rounded-xl border-white w-20 h-14 m-2"
                        style={{ backgroundImage: "url('/Image/intento1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                    ></button>
                    <button
                        onClick={() => onImageChange('/Image/Luna.jpg')}
                        className="border-2 rounded-xl border-white w-20 h-14 m-2"
                        style={{ backgroundImage: "url('/Image/Luna.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                    ></button>
                    <button
                        onClick={() => onImageChange('/Image/Analizis.png')}
                        className="border-2 rounded-xl border-white w-20 h-14 m-2"
                        style={{ backgroundImage: "url('/Image/Analizis.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                    ></button>
                </div>
                <div className="flex flex-row">
                    <button
                        onClick={() => onImageChange('/Image/Bosque.jpg')}
                        className="border-2 rounded-xl border-white w-20 h-14 m-2"
                        style={{ backgroundImage: "url('/Image/Bosque.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                    ></button>
                    <button
                        onClick={() => onImageChange('/Image/Analizis2.jpg')}
                        className="border-2 rounded-xl border-white w-20 h-14 m-2"
                        style={{ backgroundImage: "url('/Image/Analizis2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                    ></button>
                    <button
                        onClick={() => onImageChange('/Image/Trabajo.jpg')}
                        className="border-2 rounded-xl border-white w-20 h-14 m-2"
                        style={{ backgroundImage: "url('/Image/Trabajo.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                    ></button>
                </div>
            </div>
        </div>
    );
};

export default CardLogin;
