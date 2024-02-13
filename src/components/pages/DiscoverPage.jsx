import React from 'react';
import image1 from '../../assets/image1.jpeg';
import image2 from '../../assets/image2.jpeg';
import image3 from '../../assets/image3.webp';
import image4 from '../../assets/image4.jpeg';
import image5 from '../../assets/image5.jpeg';
import image6 from '../../assets/image6.jpeg';
import image7 from '../../assets/image7.webp';
import image8 from '../../assets/image8.webp';
import image9 from '../../assets/image9.jpeg';
import image10 from '../../assets/image10.jpeg';
import image11 from '../../assets/image11.webp';
import image12 from '../../assets/image12.webp';

const DiscoverPage = () => {
  const images = [
    { src: image1, caption: 'Kyrguzstan' },
    { src: image2, caption: 'Italy' },
    { src: image3, caption: 'Japan' },
    { src: image4, caption: 'New Zealand' },
    { src: image5, caption: 'France' },
    { src: image6, caption: 'Australia' },
    { src: image7, caption: 'Canada' },
    { src: image8, caption: 'Spain' },
    { src: image9, caption: 'Iceland' },
    { src: image10, caption: 'Greece' },
    { src: image11, caption: 'South Africa' },
    { src: image12, caption: 'Thailand' }
  ];

  return (
    <div>
      <h2 style={{textAlign: "center", marginTop: "50px"}}>GALLERY</h2>
      <p style={{textAlign: "center"}}>Look at our gallery, and see how beautiful World is.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: "80%", margin: "0 auto" }}>
        {images.map((image, index) => (
          <div key={index} style={{ position: 'relative', width: 'calc(33.333% - 10px)', marginBottom: '15px' }}>
            <img src={image.src} alt={image.caption} style={{ width: '100%', display: 'block', borderRadius: '10px' }} />
            <p style={{ position: 'absolute', top: 0, left: 0, width: '100%', color: 'white', textAlign: 'center', textTransform: "uppercase", fontSize: '30px', letterSpacing: "5px" }}>
              {image.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverPage;
