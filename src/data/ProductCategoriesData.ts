
// precast
import boxCulvurt from '../../public/product_1.jpg';
import coverUditch from '../../public/harga-tutup-uditch-.png';
import roadBarrier from '../../public/road barrier.png';
import uDitch from '../../public/u ditch.jpg';
import pagarPanel from '../../public/pagar panel.png';
// ready mix concrete
import readyMixConcrete from '../../public/construction-worker-pouring-wet-concret-road-construction-site (1).jpg';
import readyMixConcrete2 from '../../public/construction-worker-pouring-wet-concret-road-construction-site.jpg';
import readyMixConcrete3 from '../../public/IMG_0594.jpg';
import readyMixConcrete4 from '../../public/IMG_0598.jpg';
import readyMixConcrete5 from '../../public/IMG_5781.jpg';

export const PrecastData = [
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

export const ReadyMixData = [
    {   
        id: 1,
        image: readyMixConcrete,
        category: 'Ready mix concrete',
    },
    {   
        id: 2,
        image: readyMixConcrete2,
        category: 'Ready mix concrete',
    },
    {   
        id: 3,
        image: readyMixConcrete3,
        category: 'Ready mix concrete',
    },
    {   
        id: 4,
        image: readyMixConcrete4,
        category: 'Ready mix concrete',
    },
    {   
        id: 5,
        image: readyMixConcrete5,
        category: 'Ready mix concrete',
    },
]