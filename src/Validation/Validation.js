import React from 'react';

const Validation = (props) => {
     
    return(
        <div>
            {
                 props.inputLenght > 5 ?
                 <p>Texto largo</p>:
                 <p>Texto corto</p>
            }
           
        </div>
    );
};

export default Validation;