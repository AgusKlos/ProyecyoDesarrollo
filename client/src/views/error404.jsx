import React from 'react'
//import errorBot from '../images/errobot.png';

function Error404(){
    return(
        <>
            <div className='mt-3'>
                <div className="d-flex justify-content-center align-items-center mb-0 pb-0">
                   {/* <img src={errorBot} alt="Error" className='mb-0 pb-0' style={{ width:'300px'}} />*/}
                </div>
                <div className='px-5 pb-5 mt-0 pt-0 justify-content-center'>
                    <h1 className="p-err text-center mt-0 pt-0 mb-2 display-1 justify-content-center">404</h1>
                    <p className="p-err text-center my-2 lead error-text">¡Ups! Página no encontrada.</p>
                    <p className="p-err text-center my-2 mb-4 error-text">La página que estás buscando no existe o ha sido movida.</p>
                </div>
            </div>
        </>  
    );
}

export default Error404;