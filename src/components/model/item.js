import React from "react";
import { FaTrash} from 'react-icons/fa'

const ModelItem = ({ model, onDeleteModel }) => {
    return (
        <div>
            <h5>{model.name}</h5>
            <p>Type: {model.type}</p>
            <p>Year: {model.year}</p>
            <p>Engine: {model.engine}</p>
            {onDeleteModel !== undefined ? <button title={'Delete ' + model.name} onClick={() => onDeleteModel(model.id)}><FaTrash /></button> : ''}
        </div>
    );
}
export default ModelItem;