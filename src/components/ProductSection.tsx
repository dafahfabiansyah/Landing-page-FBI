import React from 'react';

// Define your ProductData array
const ProductData = [
    {
        id: 1,
        name: 'Product 1',
        price: 1000,
        image: 'https://via.placeholder.com/50'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 2000,
        image: 'https://via.placeholder.com/50'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 3000,
        image: 'https://via.placeholder.com/50'
    },
    {
        id: 4,
        name: 'Product 4',
        price: 4000,
        image: 'https://via.placeholder.com/50'
    },
    {
        id: 5,
        name: 'Product 5',
        price: 5000,
        image: 'https://via.placeholder.com/50'
    },
    {
        id: 6,
        name: 'Product 6',
        price: 6000,
        image: 'https://via.placeholder.com/50'
    },
    {
        id: 7,
        name: 'Product 7',
        price: 7000,
        image: 'https://via.placeholder.com/50'
    },
    {
        id: 8,
        name: 'Product 8',
        price: 8000,
        image: 'https://via.placeholder.com/50'
    },
    {
        id: 9,
        name: 'Product 9',
        price: 9000,
        image: 'https://via.placeholder.com/50'
    }
] as const; // Define the array as a constant array

const ProductSection = () => {
    return (
        <section className='flex flex-wrap justify-center'>
            {ProductData.map(product => (
                <div className="w-1/3 p-4" key={product.id}>
                    <img src={product.image} alt={product.name} className="pl-20 w-80 mb-2" />
                    <div className="text-center">{product.name}</div>
                    <div className="text-center">{product.price}</div>
                </div>
            ))}
        </section>
    );
}

export default ProductSection;
