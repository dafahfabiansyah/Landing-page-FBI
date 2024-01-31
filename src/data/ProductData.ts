import boxCulvurt from '../../public/product_1.jpg';
import coverUditch from '../../public/harga-tutup-uditch-.png';
import roadBarrier from '../../public/road barrier.png';
import uDitch from '../../public/u ditch.jpg';
import pagarPanel from '../../public/pagar panel.png';


export const ProductData = [
    {
        id: 1,
        name: 'box culvurt',
        price: 1000,
        image: boxCulvurt,
    },
    {
        id: 2,
        name: 'cover u-ditch',
        price: 2000,
        image: coverUditch,
    },
    {
        id: 3,
        name: 'pagar panel',
        price: 3000,
        image: roadBarrier,
    },
    {
        id: 4,
        name: 'u ditch',
        price: 4000,
        image: uDitch,
    },
    {
        id: 5,
        name: 'pagar panel',
        price: 5000,
        image: pagarPanel,
    },
    // {
    //     id: 6,
    //     name: 'Product 6',
    //     price: 6000,
    //     image: 'https://via.placeholder.com/50'
    // },
    // {
    //     id: 7,
    //     name: 'Product 7',
    //     price: 7000,
    //     image: 'https://via.placeholder.com/50'
    // },
    // {
    //     id: 8,
    //     name: 'Product 8',
    //     price: 8000,
    //     image: 'https://via.placeholder.com/50'
    // },
    // {
    //     id: 9,
    //     name: 'Product 9',
    //     price: 9000,
    //     image: 'https://via.placeholder.com/50'
    // }
] as const;