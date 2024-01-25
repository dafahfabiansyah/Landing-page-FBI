// components/Header.tsx
'use client';
import Image from 'next/image';
import logo from '../../public/FRESH BETON INDONESIA copy.png';
const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-gray-800 text-white">
      <div className="flex items-center">
        <div style={{ width: '150px', height: '50px' }}>
          {/* Atur ukuran sesuai kebutuhan Anda */}
          <Image src={logo} alt="Logo" width={50} height={20} />
        </div>
        {/* <div className="text-xl font-bold">Fresh beto</div> */}
      </div>
      <div className="flex justify-center space-x-8">
        <a href="#" className="hover:text-gray-400">
          About Us
        </a>
        <a href="#" className="hover:text-gray-400">
          Portfolio
        </a>
        <a href="#" className="hover:text-gray-400">
          News
        </a>
      </div>
      <div>
        <button className="text-white hover:text-gray-400">Translate</button>
      </div>
    </header>
  );
};

export default Header;
