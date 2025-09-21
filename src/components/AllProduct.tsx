"use client"
import React from 'react'
import ProductCard from './ProductCard'
import Button from './Button';
import Link from 'next/link';
const AllProduct = () => {

    const productCards = [];
    for (let i = 0; i < 8; i++) {

        productCards.push(<ProductCard key={i} />);
    }
    return (
        <div className='max-w-7xl mx-auto mt-4'>
            <h1 className='text-center text-5xl mb-8 font-semibold'>All product</h1>
            <Link href={'/product-details'}>
                <div className='flex flex-wrap gap-4'>
                    {
                        productCards
                    }

                </div>
            </Link>
            <div className='w-full my-8 flex items-center justify-center'>
                <Button content={"Show more"} />
            </div>
        </div>
    )
}

export default AllProduct