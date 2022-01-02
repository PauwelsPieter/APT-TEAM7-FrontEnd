import React from "react";
import ModelItem from "./item";

const ModelList = ({models}) => {
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