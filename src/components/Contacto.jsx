import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Global } from '../helpers/Global';
import { Spiner } from '../hooks/Spiner';

export const Contacto = () => {
    const { form, changed } = useForm({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const contactoForm = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let contacto = form;

            const request = await fetch(Global.url + 'user/contacto', {
                method: 'POST',
                body: JSON.stringify(contacto),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await request.json();
            console.log(data);

            if (data.status === 'success') {
                Swal.fire({ position: 'bottom-end', title: 'Correo de contacto enviado', showConfirmButton: false, timer: 800, });
                const myForm = document.querySelector("#FomrContacto");
                myForm.reset();
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error al enviar correo');
        } finally {
            setLoading(false); // Desactivamos el indicador de carga después de la solicitud
        }
    };

    const handleComplete = () => {
        setLoading(false);
    };

    return (
        <div className="container mx-auto">
            <p className="text-lg dark:text-white text-gray-700">
                Puedes contactarme en contacto@franciscoalfaro.cl
            </p>
            <h2 className="text-3xl font-bold mb-8 dark:text-white text-black">
                Contacto
            </h2>
            <form id='FomrContacto' onSubmit={contactoForm}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Nombre</label>
                        <input type="text" name="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre" required onChange={changed} />
                    </div>
                    <div>
                        <label htmlFor="apellido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                        <input type="text" name="apellido" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Apellido" required onChange={changed} />
                    </div>

                    <div>
                        <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
                        <input type="tel" name="telefono" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+569-12345678" inputMode="tel" required onChange={changed}/>
                        <p className="text-gray-600 text-xs italic mt-1">Formato: +569-12345678</p>
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ejemplo@correo.com" required onChange={changed}/>
                    </div>
                </div>
                <div className="grid gap-6 mb-6">
                    <label  htmlFor="mensaje" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu mensaje</label>
                    <textarea rows="4" name="mensaje" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe tu mensaje aquí..." required onChange={changed}></textarea>
                </div>

                {loading ? (
                    <Spiner onComplete={handleComplete} />
                ) : (
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Enviar
                    </button>
                )}

            </form>
        </div>
    );
};
