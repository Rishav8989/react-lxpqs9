import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'

function App() {
  const slides = [
    {
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.acidcow.com%2Fpics%2F20180105%2Fstars_of_2018_01.jpg&f=1&nofb=1&ipt=e76876bc29da00e1ad8637d87027d61dc7f4240b03896ee043bb16497b2f5fdd&ipo=images'
    },
    {
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.xx1m35H-Ky0N7PPHVR2oLQHaL2%26pid%3DApi&f=1&ipt=ee1c955f9563cf437ae3fffbb97cce14f0c99e2fd11d4bcf342dae3ba73ef854&ipo=images'
    },
    {
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.g0chlQjWL1B76iCXLWmhsQHaKp%26pid%3DApi&f=1&ipt=c8cb2dc61fe9c640d1a3e8c04864a3bf7c7b43c6402fdb99d71ca9c1c4b882cb&ipo=images'
    },
    {
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.L9RnyG5vqR2ElshGvhO3OwHaLH%26pid%3DApi&f=1&ipt=53d6351e9f1e1d1b06a0359a80272f3d755fb9a0ce381298cf0748449c40a798&ipo=images'
    },
    {
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-KMbeCQxiTeI%2FTuIA9xNDXzI%2FAAAAAAAAARA%2FyCJJv_C6RrY%2Fs1600%2F39551-olivia-wilde-alpha-dog-p.jpg&f=1&nofb=1&ipt=42d301cb4d3d331f75574ec23053eeb8b893f8c65925fe0621837d92b117b273&ipo=images'
    },
    {
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdvdbash.files.wordpress.com%2F2015%2F03%2Fhouse-s4-jennifer-morrison-2-dvdbash.jpg&f=1&nofb=1&ipt=f5c565f5fa48cb4b82f4170d12230125690ef0f0cc3fe6b6f65ef0cf63c22a21&ipo=images'
    },

  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
    <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
    {/* {left arrow} */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* {right arrow} */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className="flex top-4 justify-center py-2">
      {slides.map((slide,slideIndex) => (
        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
          <RxDotFilled/>
        </div>
      ))}
    </div>
  </div>
}

export default App;