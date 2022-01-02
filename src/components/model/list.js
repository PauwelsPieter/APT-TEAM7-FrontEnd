import React from "react";
import ModelItem from "./item";

const ModelList = ({models}) => {
    console.log('MODELS', models)
    const output = models.map((model, i) => {
        return (
            <div key={i} className="model">
                <ModelItem model={model} />
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