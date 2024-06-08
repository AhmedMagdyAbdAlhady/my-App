import React from 'react'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar ,} from '@fortawesome/free-solid-svg-icons';
import Star from './star';

export default function products({style,star}) {
    const products = [
        {
            image: "/shoes-1.webp",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating:4 ,

        },
        {
            image: "/shoes-3_rk25rt.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 3,

        },
        {
            image: "/shoes-4.webp",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 2,

        },
        {
            image: "/shoes-1.webp",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 5,

        },
        {
            image: "/shoes-3_rk25rt.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 4,

        },
        {
            image: "/shoes-4.webp",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 2,

        },
        {
            image: "/shoes-1.webp",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 3,

        },
        {
            image: "/shoes-3_rk25rt.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 5,

        },
        {
            image: "/shoes-4.webp",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 2,

        },
        {
            image: "/shoes-1.webp",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 4,

        },
        {
            image: "/shoes-3_rk25rt.jpg",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 6,

        },
        {
            image: "/shoes-4.webp",
            name: 'Awesome product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            rating: 3,

        },

    ];
    
    return (
        <>
            <h2 className="font-weight-bold mb-2">From the Shop</h2>
            <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            <div className="row  pb-5 mb-4">
                {products.map((product, index) => (
                    <div key={index} className="col-lg-3 col-md-6 mb-4 ">
                        {/* <!-- Card--> */}
                        <div className={`card  shadow-sm  ${style}`}>
                            <div className={`card-body p-4`}>
                                <Image
                                    src={product.image}
                                    width={300}
                                    height={300}
                                    alt=""
                                    className="img-fluid d-block mx-auto mb-3" />
                                <h5><a href="#" className="text-dark">{product.name}</a></h5>
                                <p className="small text-muted font-italic">{product.description}</p>
                                <ul className="list-inline small">
                                    { }
                                    {product.rating <= 5 ? Array.from({ length: product.rating }, (i) => (
                                        <li key={i} className="list-inline-item m-0">
                                            <i className={star}><FontAwesomeIcon icon={faStar} size='sm' /></i>
                                        </li>
                                    )) : 'Its too Much'}
                                    <Star {...{rating:product.rating,star}}/>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}