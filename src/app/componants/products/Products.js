'use client'
import React, { useMemo } from 'react';
import { useState, useEffect } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar ,} from '@fortawesome/free-solid-svg-icons';
import Star from './Star';
import style from './products.module.css';
export default function Products() {
    const products =useMemo(()=> [
        {
            category: '/accessoires',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: "/accessoires3.webp",
            name: 'Awesome product',    
            rating: 4,
        },
        {
            category: '/accessoires',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: "/accessoires2.webp",
            name: 'Awesome product',    
            rating: 4,
        },
        {
            category: '/accessoires',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: "/accessoires1.webp",
            name: 'Awesome product',    
            rating: 4,
        },
        {
            category: '/shoes',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: "/shoes-1.webp",
            name: 'Awesome product',    
            rating: 4,
        },
        {
            category: '/shoes',
            image: "/shoes-1.webp",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating:4 ,

        },
        {
            category: '/shoes',
            image: "/shoes-3_rk25rt.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 3,

        },
        {
            category: '/shoes',
            image: "/shoes-4.webp",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 2,

        },
        {
            category: '/shirts',
            image: "/shirt3.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 5,

        },
        {
            category: '/shirts',
            image: "/shirt2.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 4,

        },
        {
            category: '/shirts',
            image: "/shirt1.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 2,

        },
        {
            category: '/pants',
            image: "/pants3.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 3,

        },
        {
            category: '/pants',
            image: "/pants2.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 5,

        },
        {
            category: '/pants',
            image: "/pants1.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 2,

        },
        {
            category: '/short',
            image: "/short3.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 4,

        },
        {
            category: '/short',
            image: "/short2.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 6,

        },
        {
            category: '/short',
            image: "/short.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 3,

        },

    ],[])
    const [selectedCategory, setSelectedCategory] = useState('/');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (selectedCategory === '/') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(prod => prod.category === selectedCategory));
        }
        setSelectedCategory(window.location.pathname);
    }, [selectedCategory,products]);

    return (
        <>
            <div className="row pb-5 mb-4">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="col-lg-3 col-md-6 mb-4">
                        <div className={`card shadow-sm ${style.cardStyle} `}>
                            <div className="card-body p-4">
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
                                    {product.rating > 5 ? <span>It&#39;s too Much</span>:
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