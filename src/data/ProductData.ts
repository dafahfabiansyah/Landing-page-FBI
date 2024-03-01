import boxCulvurt from '../../public/product_1.jpg';
import coverUditch from '../../public/harga-tutup-uditch-.png';
import roadBarrier from '../../public/road barrier.png';
import uDitch from '../../public/u ditch.jpg';
import pagarPanel from '../../public/pagar panel.png';


export const ProductData = [
    {
        id: 1,
        name: 'box culvurt',
        description : 'Box Culvert adalah struktur beton bertekstur tinggi yang digunakan dalam berbagai proyek infrastruktur untuk menangani aliran air, mengalirkan sungai kecil, mengatur saluran air, serta menyediakan saluran bawah tanah untuk kabel atau pipa.',
        price: 1000,
        category: '',
        image: boxCulvurt,
    },
    {
        id: 2,
        name: 'cover u-ditch',
        description : 'Cover U-Ditch adalah salah satu komponen penting dalam sistem drainase yang dirancang untuk melindungi saluran U-Ditch dari kerusakan dan penumpukan material yang tidak diinginkan. Terbuat dari beton bertekstur tinggi, cover ini didesain untuk memberikan perlindungan ekstra pada saluran drainase dan menjaga kebersihan serta keberfungsian sistem secara keseluruhan.',
        price: 2000,
        category: '',
        image: coverUditch,
    },
    {
        id: 3,
        name: 'pagar panel',
        description : 'Pagar Panel Beton adalah solusi modern dan estetis untuk kebutuhan perlindungan dan pembatas area. Dibuat dari beton bertekstur tinggi, pagar panel ini menawarkan kekuatan, ketahanan, dan tampilan yang menarik untuk berbagai aplikasi, mulai dari lingkungan perumahan hingga komersial.',
        price: 3000,
        category: '',
        image: roadBarrier,
    },
    {
        id: 4,
        name: 'u ditch',
        description : 'U-Ditch Beton merupakan saluran drainase bertekstur tinggi yang dirancang untuk mengatur aliran air secara efisien di berbagai lingkungan, mulai dari area perkotaan hingga pedesaan. Dibuat dengan teknologi beton mutakhir, U-Ditch menawarkan kekuatan, ketahanan, dan keandalan untuk mengatasi tantangan drainase yang kompleks.',
        price: 4000,
        category: '',
        image: uDitch,
    },
    {
        id: 5,
        name: 'precast',
        description : 'Produk precast beton adalah komponen konstruksi yang diproduksi di pabrik dengan proses yang terkontrol dan dikirim ke lokasi proyek untuk pemasangan. Precast beton menawarkan berbagai keunggulan, termasuk kecepatan dalam pembangunan, kualitas yang konsisten, dan daya tahan yang tinggi.',
        price: 5000,
        category: '',
        image: pagarPanel,
    },
] as const;