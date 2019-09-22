import React, { useState, useEffect } from 'react';
import axios from "axios";

function Review(props) {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [body, setBody] = useState("");
    const product = props.product;  
    function createReview() {
        axios.post("http://localhost:8082/api/collections/save/reviews", {
                data: {
                    title,
                    body,
                    rating,
                    product: {
                        _id: product._id,
                        link: "products",
                        display: product.name
                    }
                }
            })
            .then(response => {
            });
    }
    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <input
                    type="number"
                    title={rating}
                    onChange={e => setRating(e.target.value)}
                    min="1"
                    max="5"
                    value={rating}
                    required
                />
                <input
                    type="text"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    required
                />
                <textarea
                    onChange={e => setBody(e.target.value)}
                    value={body}
                    required
                />
                <input type="submit" onClick={createReview} value="Send" />
            </form>
        </div>
    );
}

export default Review;