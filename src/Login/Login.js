import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './ThemeContext';

function Login({ h1Text, h1Class, handleSubmit, errorMessage, formBackgroundColor }) {
    const { themeColor } = useContext(ThemeContext);
    const rgbaThemeColor = formBackgroundColor
        ? formBackgroundColor
        : themeColor === '#1194c4'
            ? 'rgba(17, 148, 196, 0.5)'
            : themeColor === '#211769'
                ? 'rgba(33, 23, 105, 0.5)'
                : 'rgba(212, 28, 69, 0.5)'; 

    return (
        // Form interior
        <div className="flex justify-center items-center h-full rounded-md opacity-75">
            <form
                style={{ backgroundColor: rgbaThemeColor, borderColor: themeColor }} 
                className="bg-opacity-45 p-6 rounded w-[600px] h-[500px] relative z-10"
                onSubmit={handleSubmit}
            >
                {/* Logo de la empresa */}
                <div className="flex justify-center mb-4">
                    <img src="Image/IconCompany.jpg" alt="Logo" className="w-24 h-24" /> {/* Ajusta el tamaño según sea necesario */}
                </div>
                <h1 className={h1Class}>{h1Text}</h1>
                <div className="mb-4">
                    <label htmlFor="username" className="text-2xl text-center text-white font-bold">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="bg-transparent mt-1 p-3 border-2 border-white rounded-md w-full focus:outline-none focus:ring-2 focus:ring-white text-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="text-2xl text-center text-white font-bold">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="bg-transparent mt-1 p-3 border-2 border-white rounded-md w-full focus:outline-none focus:ring-2 focus:ring-white text-white"
                    />
                </div>
                {errorMessage && (
                    <div className="text-red-500 mb-4">{errorMessage}</div>
                )}
                <button
                    type="submit"
                    className="w-28 bg-blue-950 text-white p-2 rounded-full hover:bg-blue-700 border-2 border-white float-right"
                >
                    Login
                </button>
                <div>
                    <input 
                        type="checkbox" 
                        id="mantener" 
                        name="mantener" 
                        className="mr-2 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" 
                    />
                    <label htmlFor="mantener" className="text-gray-300">Recordarme</label>
                </div>
            </form>
        </div>
    );
}

// Validación de Props
Login.propTypes = {
    h1Text: PropTypes.string.isRequired,
    h1Class: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    formBackgroundColor: PropTypes.string,
};

export default Login;
