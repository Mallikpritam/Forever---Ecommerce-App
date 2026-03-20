import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
<div className=' text-2xl text-center pt-8 border-t'>
<Title text1={'ABOUT'} text2={'US'} />
</div>

<div className=' my10 flex flex-col md:flex-row gap-16'>
<img className='w-full md:max-w-[450px]' src={assets.about_img } alt="" />
<div className=' flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'> 
<p>Welcome to Forever — where fashion lives beyond trends.

At Forever, we believe that style should be timeless, effortless, and accessible to everyone. Our goal is to bring you high-quality clothing that not only looks good but also feels comfortable and lasts long. Whether you're dressing for a casual day out or a special occasion, Foreever has something designed just for you..</p>




<p> We carefully curate our collections to reflect modern fashion with a touch of individuality. Every piece is selected with attention to detail, quality, and style — so you can express yourself confidently.

Customer satisfaction is at the heart of everything we do. From a smooth shopping experience to fast and reliable delivery, we are committed to making your journey with Foreever simple and enjoyable.

Foreever isn’t just a brand — it’s a lifestyle... </p> 
<b className=' text-gray-800'>Our Mission</b>
<p>Our mission at Forever is to deliver high-quality, stylish, and affordable clothing that empowers individuals to express their unique identity with confidence. We are committed to providing a seamless shopping experience, combining modern fashion with comfort, reliability, and customer satisfaction.</p>
</div>
</div>
    </div>
  )
}

export default About