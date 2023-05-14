import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Data from './ListOfData';
import './Style.css';
function fcard(value){
    return(<Card 
        imgsrc={ value.img}
        title={value.title}
        ser={value.ser}
        link={value.link}
    />
    );
}
ReactDOM.render(<>
{Data.map(fcard)}
</>, document.getElementById('root'));