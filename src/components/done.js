import React from "react";
import { Link } from "react-router-dom";

function Done() {
    return (
        <div>
            <p>Your order is complete!</p>
            <p>Thank you for order!</p>
            <button>
                <Link to="/">Back</Link>
            </button>
        </div>
    );
}

export default Done;