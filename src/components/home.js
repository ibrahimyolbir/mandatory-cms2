import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Pagination from "react-hooks-paginator";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import styles from './css/home.module.css';
function Home() {
    const pageLimit = 2;

    const [products, setProducts] = useState([]);
    const [inputRef, updateinputRef] = useState([]);
    const [sortRef, updateSortRef] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalArticles, setTotalArticles] = useState(0);
    useEffect(() => {
        const limit = 3;
        const skip = limit * (currentPage - 1);
        let url = `http://localhost:8082/api/collections/get/products?sort[${sortRef}]=1&filter[name][$regex]=${inputRef}&limit=${limit}&skip=${skip}`;
        axios.get(url)
            .then(response => {
                setTotalArticles(response.data.total);
                setProducts(response.data.entries);
                console.log(response.data.entries);
            })
            .catch(error => console.log(error));
    }, [inputRef, sortRef, currentPage]);
    useEffect(() => {
        setCurrentPage(1);
    }, [inputRef]);
    function uid() {
        let number = Math.floor((Math.random() * 10000) + 1) + Date.now();
        return number;
    }

    return (
        <>
            <div className={styles.selectSort}>
                <span> About {products.length} results </span>
                <div className={styles.sortProduct}>
                    <span> Sort By </span>
                    <select onChange={e => updateSortRef(e.target.value)}>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                    </select>
                </div>
            </div>
            <div className={styles.productsContent}>

                <div className={styles.filtering}>
                    <div className={styles.search}>
                        <input
                            type="text"
                            className="input"
                            value={inputRef}
                            onChange={e => updateinputRef(e.target.value)}
                            placeholder="Search..." />
                    </div>
                </div>
                <div className={styles.container}>

                    {products.map(product => {
                        return <div className={styles.cardContent} key={product._id}>
                            <div className={styles.imgContent}>
                                <img className={styles.images} src={"http://localhost:8082/" + product.image.path} alt={product.name} />
                            </div>
                            <div className={styles.colorTag}>

                                {product.color.map(clr => {
                                    return <div key={clr} className={styles.clrsDiv}>
                                        <img  className={styles.colors} style={{ backgroundColor: clr }} />
                                    </div>
                                })
                                }

                            </div>
                            <div className={styles.productName}>
                                <Link className={styles.name} to={"/productdetails/" + product._id}>{product.name}</Link>
                            </div>

                            <div className={styles.productDescription}>
                                <Rater interactive={false} total={5} rating={product.rating} />
                                <span className={styles.price}>${product.price}.00</span>
                            </div>
                            <div className={styles.deliveryInfo}>
                                <span>Free delivery</span>
                                <span>Free pickup</span>
                            </div>
                        </div>
                    })
                    }
                </div>

               
            </div>
            <Pagination
                    totalRecords={totalArticles}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
        </>
    );
}

export default Home;
