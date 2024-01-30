import HeroImage1 from '../../../public/IMG_8274.png'
import HeroImage2 from '../../../public/IMG_8931.png'
import HeroImage3 from '../../../public/IMG_8274.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';


const CarouselHero = () => {
  return (
    <Carousel className='' showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} stopOnHover={true} swipeable={true}>
    <div>
        <Image src={HeroImage1} alt={''} />
        <p className="legend">Berdiri sejak Maret 2018 dengan Batching Plant permanen di Neglasari, Sukabumi, bersama dengan Quary dan Crusher PT.GBP. Batching plant memiliki kapasitas 60 m3/jam dengan Armada Truck Mixer 15 unit (kapasitas 7 m3) dan 5 unit Truck minimix. Kami terus berinovasi dalam proses, peralatan, dan material untuk memenuhi standar mutu yang dibutuhkan</p>
    </div>
    <div>
    <Image src={HeroImage1} alt={''} />
        <p className="legend">Legend 2</p>
    </div>
    <div>
    <Image src={HeroImage3} alt={''} />
        <p className="legend">Legend 3</p>
    </div>
</Carousel>
  )
}

export default CarouselHero