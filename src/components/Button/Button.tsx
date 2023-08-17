import React from "react";

export const Button = React.memo(({children}: { children: React.ReactNode }) => {
    return (
        <button className="button">
            {children}
        </button>
    )
})
