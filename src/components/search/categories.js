import React from "react";

const Categories = ({ className, src, setSelectedCategory }) => {

    return (
        <div className={className}>
            <figure><img
                src={src}
                title={className}
                className={className}
                alt={className}
                onClick={() => setSelectedCategory(className)}
            /></figure>
        </div>
    )
}

export default Categories