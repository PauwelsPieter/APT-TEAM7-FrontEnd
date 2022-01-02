import React from "react";
import ModelItem from "./item";

const ModelList = ({ models, onDeleteModel}) => {
    console.log('MODELS', models)
    const output = models.map((model, i) => {
        return (
            <div key={i} className="model">
                <ModelItem model={model} onDeleteModel={onDeleteModel} />
            </div>
        );
    });

    return (
        <div>
            {output}
        </div>
    );
}
export default ModelList;