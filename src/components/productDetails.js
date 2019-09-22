import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Review from "./review";
import MDReactComponent from 'markdown-react-js';
import Rater from 'react-rater'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { cart$, updateCart } from "./store";
import styles from "./css/productdetails.module.css"
function Detailspage(props) {
    const [amount, setAmount] = useState(0)
    const [cartItem, updateCartItem] = useState(cart$.value);
    const [product, updateProduct] = useState(null);
    const [activeTab, setActiveTab] = useState('1');
    const { id } = props.match.params;

    useEffect(() => {
        let subscription = cart$.subscribe(cart => {
            updateCartItem(cart);
        });

        axios.get(`http://localhost:8082/api/collections/get/products/?filter[_id]=${id}`)
            .then(response => {
                updateProduct(response.data.entries[0]);
                console.log(response.data.entries);

            })
            .catch(error => console.log(error));
        return () => {
            subscription.unsubscribe();
        };
    }, []);
    function addToCart() {
        let newCart = [...cartItem];
        let cartIndex = newCart.findIndex(x => x._id === product._id);
        if (cartIndex !== -1) {
            newCart[cartIndex].amount = newCart[cartIndex].amount + amount;
        } else {
            newCart.push({
                _id: product._id,
                name: product.name,
                amount: amount,
                price: product.price,
                img: product.image
            });
        }
 
        updateCart(newCart);
        console.log(newCart);


    }
    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.cardContent}>
                    <div className={styles.imgContent}>
                        <img className={styles.images} src={"http://localhost:8082/" + product.image.path} alt={product.name} />
                        <div className={styles.imgGallery}>
                            {product.gallery.map(prdct => {
                                return <img key={prdct.meta.assets} className={styles.images} src={"http://localhost:8082/" + prdct.path} />
                            })
                            }
                        </div>
                    </div>
                    <div className={styles.productInfo}>
                        <h2 className={styles.productName}>{product.name}</h2>
                        <Rater interactive={false} total={5} rating={product.rating} />
                        <h2 className={styles.productPrice}>${product.price}.00</h2>
                        <div className={styles.productColors}>
                            {product.color.map(clr => {
                                return <div key={clr} className={styles.clrsDiv}>
                                    <img className={styles.colors} style={{ backgroundColor: clr }} />
                                </div>
                            })
                            }
                        </div>
                        <div className={styles.addItem}>
                            <div className={styles.quantity}>
                                <input
                                    onChange={(e) => setAmount(parseInt(e.target.value))}
                                    placeholder="0"
                                    type="number"
                                    value={amount}
                                    min="1"
                                    max="100" />
                            </div>
                            <div className={styles.addItemButton}>
                                <button onClick={addToCart}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.productBottomInfo}>

                    <Nav tabs>
                        <NavItem>
                            <NavLink className={styles.tabsPointer} className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                Description
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={styles.tabsPointer} className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                REVIEWS
                        </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1"> <MDReactComponent className={styles.descriptionText} text={product.description} /></TabPane>
                        <TabPane tabId="2"><h1>REVIEWS</h1>
                        <Review product={product}/>
                        </TabPane>
                    </TabContent>


                </div>
            </div>
        </div>
    )

}

export default Detailspage;