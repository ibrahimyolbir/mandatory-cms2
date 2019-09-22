import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { cart$,updateCart } from "./store";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import styles from "./css/cart.module.css"


function Cartp() {

    const [cartItems, updateCartItem] = useState(cart$.value);

    const [showModal, hideModal] = useModal(() => {
 

        return (
            <ReactModal isOpen style={{ height: "fit-content;" }}>
                <div className={styles.modalHeader}>
                    <h3> <i className="fas fa-shopping-cart"></i> Shopping Cart  </h3>({cartItems.length} item in cart)
                    <button className={styles.closeButton} onClick={hideModal}><i className="fas fa-times"></i></button>
                </div>
                <table className="table">
 
                </table>
                {cartItems.map(product => {
                    console.log(product);
                    return (
                        <div key={product._id}>
                            <table className="table">

                                <tbody className="item">
                                    <tr>
                                        <td style={{ width: `100px` }}>
                                            <img style={{ width: `100%` }} src={"http://localhost:8082/" + product.img.path} alt={product.name} />
                                        </td>
                                        <td style={{height: "auto", width: "56vh"}}className="item_description">
                                            <h5>{product.name}</h5>
                                        </td>
                                        <td>
                                            <div className="dropdown">
                                                <span>{product.amount}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{product.price}</p>
                                        </td>
                                        <td>
                                            <p>{product.price * product.amount}</p>
                                        </td>
                                        <td className="delete_item">
                                        <button className={styles.deleteItem}onClick={() => deleteItem(product)}>
                                        <i className="fas fa-trash-alt"></i>
                                            </button>
                                            
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })
                }
                <div className={styles.cartFooter}>
                    <button onClick={hideModal}> Cancel </button>  
                <Link to="/checkout" onClick={hideModal}>Checkout</Link>
                </div>
                
            </ReactModal>)
    }, [cartItems]);

    useEffect(() => {
        let subscription = cart$.subscribe(cart => {
            updateCartItem(cart);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    useEffect(() => {
        ReactModal.setAppElement('body');
    }, [])
    function deleteItem(product) {
        let deletedCartItems= cartItems.filter(item => item !== product);
 
        updateCart(deletedCartItems);
      }

    return (
        <>

            <button className="shopping-cart" onClick={showModal}><i className="fas fa-shopping-cart"></i>Cart({cartItems.length})</button>
        </>


    )
};

export default Cartp;
