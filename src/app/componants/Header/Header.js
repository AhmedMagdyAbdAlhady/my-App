'use client'
import { useEffect, useMemo, useState } from "react"

export default function Header(){
    const headers =useMemo(()=> [
        {
            category : '/shoes',
            headerName : 'Shoes',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
        },
        {
            category : '/New Arrivals',
            headerName : 'New Arrivals',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
        },
        {
            category : '/Blazers&Sport Coats',
            headerName : 'Blazers & Sport Coats',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
        },
        {
            category : '/Coats & Jackets',
            headerName : 'Coats & Jackets',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
        },
        {
            category : '/Jeans',
            headerName : 'Jeans',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
        },
        {
            category : '/pants',
            headerName : 'Pants',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
        },
        {
            category : '/shirts',
            headerName : 'Shirts',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
        },
        {
            category : '/short',
            headerName : 'Shorts',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
        },
    ],[])
    const [SelectedCateg , setSelectedCateg] = useState('/');
    const [newheader , setnewheader] = useState([]);

    useEffect(() => {
        setSelectedCateg(window.location.pathname); 
    }, []); 
    useEffect(() => {
        setnewheader(headers.filter(header => header.category === SelectedCateg));
    },[SelectedCateg,headers]);
    return (
        <>
        {newheader.map((header,index)=>(
                <div key={index} >
                <h2 className="font-weight-bold mb-2 mt-5">From the {header.headerName}</h2>
                <p className="font-italic text-muted mb-4">{header.description}</p>
                </div>
            ))}
        </>
    )
}
