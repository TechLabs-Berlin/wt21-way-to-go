import React from "react";
import CategoryCoffee from "./../../images/CategoryCoffee.png"

const Categories = ({className, setSelectedCategory}) => {

    return (
        <div className={className}>
            <figure><img
                src={CategoryCoffee}
                title={className}
                className={className}
                alt={className}
                onClick={() => setSelectedCategory(className)}
            /></figure>
        </div>
    )
}

export default Categories