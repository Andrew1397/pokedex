import React from 'react';
import preloader from "./img/preloader.svg";

let Preloader = (props) => {
    return <div  style={ { backgroundColor: 'white', display: 'flex', justifyContent:'center' } }>
        <img src={preloader} />
    </div>
}

export default Preloader;