import React, { useState,useEffect } from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { cart$, updateCart } from "./store";
import styles from "./css/checkout.module.css"
function Checkout() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [finished, updateFinished] = useState(false);
    const [cart, setCart] = useState([]);
    console.log(cart);
    useEffect(() => {
      const subscription = cart$.subscribe(setCart);

      
      return () => subscription.unsubscribe();
    }, []);

    function submitOrder(e) {
        e.preventDefault();
        let total = 0;
 
        for (let i = 0; i < cart$.value.length; i++) {
            let amount = parseInt(cart$.value.amount);
            total = total + amount * parseInt(cart$.value.price);
        }
        let data = {
            name,
            address,
            total,
            order: cart.map(item => ({
                value: {
                  product: item.name,
                  amount: item.amount,
                }
              }))
            
        };
        console.log(cart$);
        axios.post(`http://localhost:8082/api/collections/save/orders`, { data }).then(response => {
            console.log(data);
            updateFinished(true)
        });
    }

    return finished ? (
        <Redirect to="/done" />
    ) : (
            <>
                <div className={styles.checkoutForm}>
                    <form onSubmit={submitOrder}>
                        <p>Name</p>
                        <input
                            type="text"
                            required
                            onChange={e => setName(e.target.value)}
                            value={name}
                            className={styles.formStyle}
                        />
                        <p>Adress</p>
                        <input
                            type="text"
                            required
                            onChange={e => setAddress(e.target.value)}
                            value={address}
                            className={styles.formStyle}
                        />
                        <input className={styles.formButton} type="submit" value="Order" />
                    </form>
                </div>
            </>
        );
}

export default Checkout;