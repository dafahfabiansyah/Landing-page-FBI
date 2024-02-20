import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarouselHero from '@/components/ui/Carousel';
import aboutImage from '../../../public/IMG_5671.png';
import isoImage from '../../../public/ISO 14001, PT FBI_compressed (1)-1.png';
import isoImage9001 from '../../../public/ISO 9001, PT FBI-1.png';
import achievementImage from '../../../public/AWARDS AND ACHIEVEMENTS .png';

const Page = () => {
  return (
    <section className='mx-auto'>
      <Header />
      {/* <CarouselHero /> */}
      <div className='container py-2'>
        <h1 className='text-2xl pt-20 capitalize text-emerald-500'>company profile</h1>
        <div className='grid grid-cols-2 items-center justify-centers'>
          <h1>PT. Fresh Beton Indonesia adalah perusahaan yang bergerak di bidang beton siap pakai (readymix) dan beton pracetak (precast).
            Fresh Beton Readymix berdiri mulai Maret 2018 dengan mendirikan Permanen Batching Plant di neglasari, Sukabumi. Di dalam 1 area yang sama dengan Quary dan Crusher PT. GBP.
            Kapasitas batching plant terpasang 60 m3/jam dengan jumlah Armada Truck Mixer 15 unit Kapasitas 7m3 dan 5 unit Truck minimix.
            Kami berdiri dan selalu berinovasi dalam proses, peralatan, penggunaan material untuk memenuhi segala kebutuhan mutu yang disyaratkan.
            Tenaga Profesional kami akan selalu memberikan Solusi dan saran terbaik dengan pertimbangan quality dan efisien untuk lingkup pekerjaan :
            Pondasi & Basement
            Struktur gedung
            Perkerasan Jalan (Pavement)
            Infrastruktur
            Dam WTP
            Beton Porous
            Beton Khusus</h1>
          <div className='flex justify-center'>
            <Image src={aboutImage} alt={''} width={500} height={300} />
          </div>
          <div>Fresh Beton juga di dukung dengan suplai material dari Quary stone crusher dan sand crusher milik sendiri.
            Untuk Permanen Plant PT. Fresh Beton Indonesia ada di Lokasi :
            <ul>
              <li>Sukabumi</li>
              <li>Meruya</li>
              <li>Cianjur</li>
              <li>Sentul</li>
              <li>BSD</li>
            </ul>
          </div>
          <div className='pt-2'>
            <h1 className='capitalize text-2xl'>visi</h1>
            <p className=' pb-2'>Menjadi perusahaan Beton Siap Pakai (Readymix Concrete) dan Beton Pracetak (Precast Concrete) dengan dukungan peralatan yang inovatif, berkualitas, dan terpercaya bagi masyarakat dan dunia konstruksi.</p>
            <h1 className='capitalize text-2xl pt-2'>misi</h1>
            <p>Memenuhi kebutuhan pelanggan dengan memberikan produk serta solusi yang inovatif dan layanan yang cepat dan handal.
              Sejalan dengan Visi dan Misinya, mempunyai kebijakan terhadap mutu: Fresh Beton menjual beton ready mix berkualitas tinggi untuk segala kebutuhan proyek skala besar dan kecil (rumah tinggal). Fresh Beton melakukan kontrol sangat ketat terhadap mutu bahan baku (agregat), serta kualitas semen dan air untuk menjamin terciptanya kualitas beton ready mix yang terbaik. Kami menjual beton segar sesuai dengan kebutuhan proyek Anda.</p>
            {/* <h1 className='capitalize text-2xl'>nilai-nilai perusahaan</h1>
            <p>Komitmen kami terhadap misi senantiasa di landasi oleh nilai – nilai yang menjadi filosofi insan.</p> */}
          </div>
          {/* gallery section */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              {/* <p className='capitalize text-2xl'>achievements</p> */}
              <Image src={achievementImage} alt="Image 1" width={600} height={400} />
            </div>
            <div className="col-span-1">
              <Image src={isoImage} alt="Image 2" width={600} height={400} />
            </div>
            <div className="col-span-1">
              <Image src={isoImage9001} alt="Image 3" width={600} height={400} />
            </div>
            {/* Add more images here */}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Page;
