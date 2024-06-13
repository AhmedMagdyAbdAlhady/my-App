'use client'
import React, { useMemo } from 'react';
import { useState, useEffect } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, } from '@fortawesome/free-solid-svg-icons';
import Star from './Star';
import style from './products.module.css';
export default function Products() {
    const products = useMemo(() => [
        {
            category: '/accessoires',
            trending: false,
            sale: true,
            saleNumber: 15,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: "/accessoires3.webp",
            name: 'Awesome product',
            rating: 4,
        },
        {
            category: '/accessoires',
            trending: true,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: "/accessoires2.webp",
            name: 'Awesome product',
            rating: 4,
        },
        {
            category: '/accessoires',
            trending: true,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: "/glasses.jpg",
            name: 'Awesome product',
            rating: 4,
        },
        {
            category: '/shoes',
            trending: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: "/shoes-1.webp",
            name: 'Awesome product',
            rating: 4,
        },
        {
            category: '/shoes',
            trending: false,
            image: "/shoes-1.webp",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 4,

        },
        {
            category: '/shoes',
            trending: true,
            image: "/shoes-3_rk25rt.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 3,

        },
        {
            category: '/shoes',
            trending: false,
            image: "/shoes-4.webp",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 2,

        },
        {
            category: '/shirts',
            trending: true,
            image: "/shirt3.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 5,

        },
        {
            category: '/shirts',
            trending: true,
            image: "/shirt2.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 4,

        },
        {
            category: '/shirts',
            trending: true,
            image: "/shirt1.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 2,

        },
        {
            category: '/pants',
            trending: false,
            sale: true,
            saleNumber: 30,
            image: "/pants3.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 3,

        },
        {
            category: '/pants',
            trending: false,
            sale: true,
            saleNumber: 17,
            image: "/pants2.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 5,

        },
        {
            category: '/pants',
            trending: true,
            sale: true,
            saleNumber: 15,
            image: "/pants1.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 2,

        },
        {
            category: '/short',
            trending: false,
            sale: true,
            saleNumber: 20,
            image: "/short3.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 4,

        },
        {
            category: '/short',
            trending: true,
            image: "/short2.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 6,

        },
        {
            category: '/short',
            trending: false,

            image: "/short.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 3,

        },

    ], [])
    const [selectedCategory, setSelectedCategory] = useState('/');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (selectedCategory === '/') {
            setFilteredProducts(products);
        } else if (selectedCategory === '/trending') {
            setFilteredProducts(products.filter(prod => prod.trending === true));
        }
        else if (selectedCategory === '/sale') {
            setFilteredProducts(products.filter(prod => prod.sale === true));
        }
        else {
            setFilteredProducts(products.filter(prod => prod.category === selectedCategory));
        }
        setSelectedCategory(window.location.pathname);
    }, [selectedCategory, products,]);

    return (
        <>
            <div className="row pb-5 mb-4">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="col-lg-3 col-md-6 mb-4">
                        <div className={`card shadow-sm ${style.cardStyle} `}>
                            <div className={`card-body p-4 ${style.CardBodyStyle} `}>
                                {product.trending == true ? <span className={style.trindFlag}>Trinding Now</span> : ''}
                                {product.sale == true ?
                                <div className={`${style.productSale}`}>
                                <span>sale</span>
                                <span className={`${style.percent}`}>{`${product.saleNumber}%`}</span>
                                </div>:''
                                }
                                <Image
                                    src={product.image}
                                    width={300}
                                    height={300}
                                    alt=""
                                    className={` img-fluid d-block mx-auto mb-3 ${style.cardimg}`}
                                />
                                <h5><a href="#" className="text-dark">{product.name}</a></h5>
                                <p className="small text-muted font-italic">{product.description}</p>
                                <ul className="list-inline small">
                                    {product.rating > 5 ? <span>It&#39;s too Much</span> :
                                        Array.from({ length: product.rating }, (_, i) => (
                                            <li key={i} className={`list-inline-item m-0`}>
                                                <FontAwesomeIcon icon={faStar} size='sm' />
                                            </li>
                                        ))}
                                    <Star rating={product.rating} />
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}