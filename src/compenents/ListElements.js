import React,{Fragment} from 'react';

const ListElement = ({ text = 'text' }) => {
    return  (
        <div>
            <li>{text}</li>
        </div>
    
    )
    ;
    
};
export default ListElement;
