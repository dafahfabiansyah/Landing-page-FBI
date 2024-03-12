import React from 'react'
import Footer from '../Footer'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../Header'

const ConcretePumpArticle = () => {
  return (
    <div>
    <Header />
    <div className='container mx-auto px-4 pt-20'>
      <div className='flex'>
        <div className=''>
          {/* Main content */}
          <div className='pt-10 pb-5'>
            <h1 className='text-3xl capitalize flex font-bold mb-2 justify-center items-center'>Concrete Pump Terpanjang di Indonesia</h1>
            <div className='flex flex-row mx-8'>
              <Link href={`/news/concrete-pump`}>
            <p className='text-gray-600 mb-4 pr-1 capitalize'>Concrete Pump, </p>
              </Link>
            {/* <p className='text-gray-600 mb-4'>{ArticleData[articleId - 1].createDate.toLocaleDateString('id-ID')}</p> */}
            {/* <p className='flex flex-col text-gray-600 '>{formattedDate}</p> */}
            </div>
            <div className='flex items-center justify-center mb-4'>
              {/* <Image width={500} height={400} src={ArticleData[articleId - 1].image} alt={ArticleData[articleId - 1].title} /> */}
            </div>
            <article className='text-lg'>
            Truck Concrete Pump dengan panjang boom 60 meter, merupakan Truck Pump dengan bentangan boom terpanjang yang ada di Indonesia serta mampu  memberikan solusi alternatif untuk para Kontraktor dalam menjalankan metode pengecoran.
PT Farrasindo Perkasa, Concrete Machinery Expert, menyediakan Concrete Machinery seperti, Truck Pump, Moli Pump, Stationery Pump, Placing Boom, Truck Mixer, Mobile Batching Plant, Truck Crane dll.


PT. FARRASINDO PERKASA sudah menjadi kontraktor andalan dari pemerintah Indonesia dan juga berbagai macam perusahaan pengembang perumahan dan juga perusahaan swasta. Kami sudah memiliki reputasi yang sangat baik di bidang pelayanan penyedia jasa concrete pump. Alat yang kami sediakan juga lengkap dengan pekerja yang sudah ahli di bidangnya. Dengan demikian, Anda tidak perlu ragu untuk menggunakan jasa kami. 
Jika Anda ingin menggunakan jasa concrete pump dari PT. FARRASINDO PERKASA,
            </article>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default ConcretePumpArticle