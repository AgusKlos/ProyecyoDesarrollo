import React, {useState} from 'react';

const BtnAcceder = ({ onClick, className, children }) => {

    const [isActive, setIsActive] = useState(false);
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);


    return (
        <div className='container d-flex align-items-center justify-content-center' style={{height:'50%'}}>
            <button 
                onClick={onClick} 
                className={`btn-acceder ${isActive ? 'btn-acceder-active' : ''} btnAcceder btn-custom rounded d-flex justify-content-center align-items-center mx-auto text-center w-75`} 
                onMouseDown={handleMouseDown} 
                onMouseUp={handleMouseUp}> {children}
            </button>
        </div>
    );
};

export default BtnAcceder;

