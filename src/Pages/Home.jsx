import React from 'react'
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img4 from "../assets/4.png"
import img5 from "../assets/cash.png"
import img6 from "../assets/chair.png"
import img7 from "../assets/check.png"
import img8 from "../assets/flower.png"
import img9 from "../assets/table.png"
import img10 from "../assets/truck.png"

const Home = () => {
  return (
    
    <div>

    
        {/* section 1 */}
        <section className='w-[90%] m-auto flex my-[20px] ph:w-[100%]'>
            <aside className='w-[55%] p-[5%] bg-[#2A254B] text-white flex flex-col justify-between ph:w-[100%] ph:gap-5'>
                <div className='flex flex-col gap-12 items-start'>
                    <p className="text-[40px] w-[90%] ph:text-[30px]">The furniture brand for the future, with timeless designs</p>
                    <button className='bg-[#F9F9F926] p-[15px_50px] rounded-md ph:hidden'>View collection</button>
                </div>
                <p className="text-[20px] ph:text-[15px]">A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally  using modern web technologies.</p>
                <button className='bg-[#F9F9F926] rounded-md hidden ph:block w-[100%] ph:h-[8svh]'>View collection</button>
            </aside>
            <img src={img6} className='w-[40%] ph:hidden' alt="" />
        </section>

        {/* section 2 */}
        <section className='w-[90%] m-auto my-[20px]'>
            <p className="text-center text-[30px] text-gray-600">What makes our brand different</p>
            <div className='flex justify-between mt-[40px] ph:flex-col ph:gap-5'>
                <div className='w-[20%] flex flex-col gap-2 ph:w-[100%]'>
                    <img src={img10} className='w-[25px] h-[25px] rounded-full' alt="picture" />
                    <p className="text-[20px]">Next day as standard</p>
                    <p className="text-[17px]">Order before 3pm and get your order the next day as standard</p>
                </div>
                <div className='w-[20%] flex flex-col gap-2 ph:w-[100%]'>
                    <img src={img7} className='w-[25px] h-[25px] rounded-full' alt="picture" />
                    <p className="text-[20px]">Made by true artisans</p>
                    <p className="text-[17px]">Handmade crafted goods made with real passion and craftmanship</p>
                </div>
                <div className='w-[20%] flex flex-col gap-2 ph:w-[100%]'>
                    <img src={img5} className='w-[25px] h-[25px] rounded-full' alt="picture" />
                    <p className="text-[20px]">Unbeatable prices</p>
                    <p className="text-[17px]">For our materials and quality you won’t find better prices anywhere</p>
                </div>
                <div className='w-[20%] flex flex-col gap-2 ph:w-[100%]'>
                    <img src={img8} className='w-[25px] h-[25px] rounded-full' alt="picture" />
                    <p className="text-[20px]">Recycled packaging</p>
                    <p className="text-[17px]">We use 100% recycled packaging to ensure our footprint is manageable</p>
                </div>
            </div>
        </section>

        {/* section 3 */}
        <section className='w-[90%] m-auto mt-[30px]'>  
            <p className="text-[30px] ph:text-[20px]">New ceramics</p>
            <div className='flex justify-between items-center my-[20px] ph:flex-wrap ph:gap-[20px_0]'>
                <div className='w-[24%] flex flex-col gap-1 ph:w-[48%]'>
                    <img src={img1} alt="Picture" className='w-[100%]' />
                    <p>The Dandy chair</p>
                    <p>£250</p>
                </div>
                <div className='w-[24%] flex flex-col gap-1 ph:w-[48%]'>
                    <img src={img2} alt="Picture" className='w-[100%]' />
                    <p>Rustic Vase Set</p>
                    <p>£155</p>
                </div>
                <div className='w-[24%] flex flex-col gap-1 ph:w-[48%]'>
                    <img src={img3} alt="Picture" className='w-[100%]' />
                    <p>The Silky Vase</p>
                    <p>£125</p>
                </div>
                <div className='w-[24%] flex flex-col gap-1 ph:w-[48%]'>
                    <img src={img4} alt="Picture" className='w-[100%]' />
                    <p>The Lucy Lamp</p>
                    <p>£399 </p>
                </div>
            </div>
            <button className='bg-[#F9F9F9] p-[20px_50px] m-auto ph:w-[100%] dark:bg-gray-500 dark:text-white'>View collection</button>
        </section>

        {/* section 4 */}
        <section className='w-[90%] m-auto mt-[100px]'>
            <p className="text-[30px]">Our popular products</p>
            <div className='flex justify-between my-[20px] ph:flex-col'>
            <div className='w-[48%] flex flex-col gap-1 ph:w-[100%]'>
                <img src={img1} alt="Picture" className='w-[100%] h-[400px]' />
                <p>The Dandy chair</p>
                <p>£250</p>
            </div>
            <div className='w-[24%] flex flex-col gap-1 ph:w-[100%]'>
                <img src={img2} alt="Picture" className='w-[100%]' />
                <p>The Dandy chair</p>
                <p>£250</p>
            </div>
            <div className='w-[24%] flex flex-col gap-1 ph:w-[100%]'>
                <img src={img3} alt="Picture" className='w-[100%]' />
                <p>The Dandy chair</p>
                <p>£250</p>
            </div>
            </div>
        </section>

        {/* section 5 */}
        <section className='bg-[#f2f2f2] p-[50px] ph:p-[10px] dark:bg-[#ccc]'>

            <section className='bg-white flex flex-col gap-5 p-[100px] ph:gap-3 ph:p-[10px] dark:bg-black dark:text-white'>
                <p className="text-[30px] text-center ph:text-[20px]">Join the club and get the benefits</p>
                <p className="text-[15px] text-center w-[30%] m-auto ph:w-[100%]">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>

                <div className='mt-[30px] flex items-center w-[35%] m-auto ph:w-[100%]'>
                    <input type="text" className='w-[78%] h-[7svh] px-[1%] text-[20px] outline-none bg-[#f2f2f2]' placeholder='Enter Your name' />
                    <button className='bg-black dark:bg-gray-500 w-[20%] h-[7svh] text-[15px] tracking-[1px] text-white'>Sign up</button>
                </div>
            </section>
        </section>

        {/* section 6 */}
        <section className='flex justify-between ph:flex-col'>
            <aside className='w-[46%] p-[50px_2%] flex flex-col gap-24 items-start ph:w-[100%] ph:gap-5'>
                <p className='text-[30px]'>From a studio in London to a global brand with over 400 outlets</p>

                <p className='text-[20px]'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br /> <br /> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>

                <button className='bg-[#F9F9F9] p-[20px_50px] mt-[80px] ph:w-[100%] ph:mt-[20px] dark:bg-gray-500 dark:text-white'>Get in touch</button>
            </aside>
            <img src={img1} className='w-[50%] h-[700px] ph:w-[100%] ph:h-[auto]' alt="" />
        </section>

        {/* footer  */}
        <footer className='p-[50px_100px_20px_100px] bg-[#2A254B] text-white flex justify-between flex-wrap ph:p-[20px]'>
            <ul className='ph:w-[48%]'>
                <li>Menu</li>
                <li>New arrivals</li>
                <li>Best sellers</li>
                <li>Recently viewed</li>
                <li>Popular this week</li>
                <li>All products</li>
            </ul>
            <ul className='ph:w-[48%]'>
                <li>Categories</li>
                <li>Crockery</li>
                <li>Furniture</li>
                <li>Homeware</li>
                <li>Plant pots</li>
                <li>Chairs</li>
                <li>Crockery</li>
            </ul>
            <ul>
                <li>Our company</li>
                <li>About us</li>
                <li>Vacancies</li>
                <li>Contact us</li>
                <li>Privacy</li>
                <li>Returns policy</li>
            </ul>

            <div className='w-[40%] ph:w-[100%]'>
                <p className="text-[20px]">Join our mailing list</p>
                <div className='mt-[30px] flex items-center w-[100%]'>
                    <input type="text" className='w-[78%] h-[7svh] px-[1%] text-[20px] outline-none bg-[#FFFFFF26]' placeholder='Enter Your name' />
                    <button className='bg-white w-[20%] h-[7svh] text-[15px] tracking-[1px] text-black'>Sign up</button>
                </div>
            </div>

            <div className='w-[100%] border-t-[1px] border-t-gray-400 mt-[20px] p-[20px_0_0_0]'>
                <p className="text-[white] text-[12px] tracking-[1px]">Copyright 2022 Avion LTD</p>
            </div>
        </footer>

    </div>


  )
}

export default Home