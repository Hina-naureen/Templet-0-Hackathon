import React from 'react';
import Image from 'next/image';

const Vase = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {/* Rectangle Image Background */}
      <div
        style={{
          position: 'absolute',
          width: '1440px',
          height: '316px',
          top: '100px',
          opacity: '0.5',
          backdropFilter: 'blur(6px)',
          left: '50%',
          transform: 'translateX(-50%)', 
        }}
      >
        <Image
          src="/shop.png" 
          alt="Vase Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Module Image */}
      <div
        style={{
          position: 'absolute',
          width: '77px',
          height: '77px',
          top: '191px', 
          left: '50%',
          transform: 'translateX(-50%)', 
        }}
      >
        <Image
          src="/Meubel House_Logos-05.png" 
          alt="Module Image"
          layout="intrinsic"
          width={77}
          height={77}
        />
      </div>

      {/* Shop Text below Module Image */}
      <div
        style={{
          position: 'absolute',
          width: '124px',
          height: '72px',
          top: '250px', 
          left: '50%',
          transform: 'translateX(-50%)', 
          fontFamily: 'Poppins',
          fontSize: '48px',
          fontWeight: '500', 
          lineHeight: '72px',
          textAlign: 'center',
          color: 'black',
        }}
      >
        Shop
      </div>

      
      <div
        style={{
          position: 'absolute',
          top: '320px', 
          left: '50%',
          transform: 'translateX(-50%)', 
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: '500', 
          lineHeight: '24px',
          textAlign: 'center', 
          color: 'black',
        }}
      >
        Home     Shop
      </div>

      {/* Vector Image */}
      <div
        style={{
          width: '5px',
          height: '8px',
          top: '330px', 
          left: '50%',
          transform: 'translateX(-50%)', 
        }}
      >
        <Image
          src="/Vector.png" 
          alt="Vector Image"
          layout="intrinsic"
          width={14}
          height={8}
        />
      </div>

     
      <div
        style={{
          position: 'absolute',
          width: '114px',
          height:'62px',
          top: '380px', 
          left: '50%',
          transform: 'translateX(-50%)', 
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: '300', 
          lineHeight: '24px',
          textAlign: 'center',
          color: 'black',
        }}
      >
        
      </div>
    </div>
  );
};

export default Vase;