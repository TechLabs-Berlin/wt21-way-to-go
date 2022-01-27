import React, { useState } from "react";

const Categories = ({ className, src, setSelectedCategory }) => {

    const [isSelected, setIsSelected] = useState(false);
    

    return (
        <div className={className}>
            <figure><img
                src={src}
                title={className}
                className={className + (isSelected && " selected")}
                alt={className}
                onClick={() => {
                    setSelectedCategory(className)
                    setIsSelected(true)
                }}
            /></figure>
        </div>
    )
}

export default Categories