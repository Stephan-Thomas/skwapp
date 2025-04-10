import React from 'react'
import  Navbar  from './home/components/Navbar'

const home = () => {
  return (
    <>
    <Navbar />
    <main>
      <section className='bg-gray-300 text-white w-full h-screen flex flex-col justify-start relative h-screen mb-36'>
        <div className='bg-opacity-50 z-30 pt-50 ml-5'>
        <h1 className='text-6xl'>Our freelancers <br /> will take it from here</h1>
        <input className='bg-white rounded-md w-8/12 h-11 mt-6 placeholder-gray-400 p-3' type="text" placeholder='search for any service'/>
        <div className='flex gap-4 mt-6' >
        <button className='bg-transparent border rounded-md p-2 hover:cursor-pointer'>website design</button>
        <button className='bg-transparent border rounded-md p-2 hover:cursor-pointer'>logo design</button>
        <button className='bg-transparent border rounded-md p-2 hover:cursor-pointer'>video editing</button>
        <button className='bg-transparent border rounded-md p-2 hover:cursor-pointer'>Architecture and Interior design</button>
        </div>
        </div>
        <video
    autoPlay
    loop
    muted
    className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
  >
    <source
      src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
      </section>
      <section className='bg-white text-black'>
        <article className='flex justify-evenly'>
        <div className='p-4 w-max text-sm'> <img src="#" alt="pic" className='shadow-md w-24 h-24'/><p className='pt-3'>Programming & Tech</p></div>
        <div className='p-4 w-max text-sm'> <img src="#" alt="pic" className='shadow-md w-24 h-24'/><p className='pt-3'>Graphics & Design</p></div>
        <div className='p-4 w-max text-sm'> <img src="#" alt="pic" className='shadow-md w-24 h-24'/><p className='pt-3'>Digital Marketing</p></div>
        <div className='p-4 w-max text-sm'> <img src="#" alt="pic" className='shadow-md w-24 h-24'/><p className='pt-3'>Writing & Translation</p></div>
        <div className='p-4 w-max text-sm'> <img src="#" alt="pic" className='shadow-md w-24 h-24'/><p className='pt-3'>Video & Animation</p></div>
        <div className='p-4 w-max text-sm'> <img src="#" alt="pic" className='shadow-md w-24 h-24'/><p className='pt-3'>AI Services</p></div>
        <div className='p-4 w-max text-sm'> <img src="#" alt="pic" className='shadow-md w-24 h-24'/><p className='pt-3'>Music & Audio</p></div>
        <div className='p-4 w-max text-sm'> <img src="#" alt="pic" className='shadow-md w-24 h-24'/><p className='pt-3'>Business</p></div>
        <div className='p-4 w-max text-sm'> <img src="#" alt="pic" className='shadow-md w-24 h-24'/><p className='pt-3'>Consulting</p></div>
        </article>
        <article>
          <h1 className='text-5xl font-bold'>Popular Services</h1>
          <div className='flex justify-between'>
            <div className='w-50 h-45 m-8 p-8 bg-green-900 rounded-md'>
              <p className='w-40'>Website Development</p>
              <img src="#" alt="pic" />
            </div>
            <div className='w-50 h-45 m-8 p-8 bg-green-900 rounded-md'>
              <p className='w-40'>Logo Design</p>
              <img src="#" alt="pic" />
            </div>
            <div className='w-50 h-45 m-8 p-8 bg-green-900 rounded-md'>
              <p className='w-40'>SEO</p>
              <img src="#" alt="pic" />
            </div>
            <div className='w-50 h-45 m-8 p-8 bg-green-900 rounded-md'>
              <p className='w-40'>Architecture & Interior Design</p>
              <img src="#" alt="pic" />
            </div>
            <div className='w-50 h-45 m-8 p-8 bg-green-900 rounded-md'>
              <p className='w-40'>Voice Over</p>
              <img src="#" alt="pic" />
            </div>
            <div className='w-50 h-45 m-8 p-8 bg-green-900 rounded-md'>
              <p className='w-40'>Social Media Marketing</p>
              <img src="#" alt="pic" />
            </div>
            <div className='w-50 h-45 m-8 p-8 bg-green-900 rounded-md'>
              <p className='w-40'>UGC Videos</p>
              <img src="#" alt="pic" />
            </div>
            <div className='w-50 h-45 m-8 p-8 bg-green-900 rounded-md'>
              <p className='w-40'>Software Development</p>
              <img src="#" alt="pic" />
            </div>
            <div className='w-50 h-45 m-8 p-8 bg-green-900 rounded-md'>
              <p className='w-40'>Data Science & ML</p>
              <img src="#" alt="pic" />
            </div>
            <div className='w-50 h-45 m-8 p-8 bg-green-900 rounded-md'>
              <p className='w-40'>Product Photography</p>
              <img src="#" alt="pic" />
            </div>
            <div className='w-50 h-45 m-8 p-8 bg-green-900 rounded-md'>
              <p className='w-40'>E-Commerce Marketing</p>
              <img src="#" alt="pic" />
            </div>
            <div className='w-50 h-45 m-8 p-8 bg-green-900 rounded-md'>
              <p className='w-40'>Video Editing</p>
              <img src="#" alt="pic" />
            </div>
          </div>
        </article>
        <article className='bg-black text-white rounded-lg m-10 p-6'>
        {/* chrome://global/skin/media/pause-fill.svg     ---background url*/}
          <div >
            <h6>SkwappGo.</h6>
            <h1>Instant results. <br /> Top talent</h1>
            <p>Get what you need faster from freelancers who trained their own personal AI Creation Models. Now you can browse, prompt, and generate instantly. And if you need a tweak or change, the freelancer is always there to help you perfect it.</p>
            <button className='bg-white text-black border-none rounded-md hover:border-gray-200 border-2 '>Get started</button>
          </div>
          <div>
            <input type="text" name="text" id="text" />
          </div>
        </article>
      </section>
    </main>
    </>
  )
}

export default home