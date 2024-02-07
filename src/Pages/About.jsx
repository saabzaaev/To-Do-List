import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FileBase64 from "react-file-base64";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { IconButton } from "@mui/material";
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

const About = () => {
  const [data , setData] = useState([])
    const api = "http://localhost:3000/data"
  async function getData() {
    try {
      let { data } = await axios.get(api);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUser(id) {
    try {
      let { data } = await axios.delete(`${api}/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  }

  async function postUser() {
    let user = {
      id: Date.now(),
      status: false,
      title: title,
      img: img,
      about:about
    };
    try {
      let { data } = await axios.post(api, user);
      getData();
      setAddModal(false);
      setTitle("");
      setAbout("")
      setImg("")
    } catch (error) {
      console.log(error);
    }
  }

  async function editUser() {
    let user = 
    {
      img:img,
      title:title,
      about:about
    }
    console.log(img);
    try
    {
      let {data} = await axios.put(`${api}/${idx}` , user)
      getData()
      setIdx("")
      setImg("")
      setTitle("")
      setAbout("")
      setEditModal(false)
    }
    catch(error)
    {
      console.log(error);
    }
  }

  async function isCompleade(id, el) {
    try {
      let { data } = await axios.put(`${api}/${id}`, el);
      getData();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    AOS.init();
    getData();
  }, []);

  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [img, setImg] = useState("");
  const [color, setColor] = useState("");

  const [idx , setIdx] = useState(null)

  const getFiles = (e) => {
    setImg(e.base64);
  };

  return (
    <div>
      {addModal ? (
        <div className="p-[20px] ph:w-[100%] ph:right-0 z-30 flex flex-col w-[30%] fixed top-[50%] right-[35%] border-[1px] border-gray-400 rounded-md gap-3  backdrop-blur-[10px]">
          <p className="text-[30px]">Create User</p>
          <FileBase64 multiple={false} onDone={getFiles} />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter Your name"
            className="w-[100%] h-[6svh] border-[1px] border-gray-400  px-[1%]"
          />
          <input
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            type="text"
            placeholder="Enter Your Price"
            className="w-[100%] h-[6svh] border-[1px] border-gray-400 px-[1%]"
          />
          <button
            onClick={() => postUser()}
            className="bg-[green] text-white text-[20px]"
          >
            Save
          </button>
        </div>
      ) : null}
      {editModal ? (
        <div className="p-[20px] ph:w-[100%] ph:right-0 z-30 flex flex-col w-[30%] fixed top-[50%] right-[35%] border-[1px] border-gray-400 rounded-md gap-3  backdrop-blur-[10px]">
          <p className="text-[30px]">Edit User</p>
          <FileBase64 multiple={false} onDone={getFiles} />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter Your name"
            className="w-[100%] h-[6svh] border-[1px] border-gray-400  px-[1%]"
          />
          <input
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            type="text"
            placeholder="Enter Your Price"
            className="w-[100%] h-[6svh] border-[1px] border-gray-400 px-[1%]"
          />
          <button
            onClick={() => editUser()}
            className="bg-[green] text-white text-[20px]"
          >
            Save
          </button>
        </div>
      ) : null}
      

      {/* section 1 */}
      <section className='bg-[url("./src/assets/1.png")] bg-cover bg-center p-[100px_50px] flex justify-end ph:p-[0] ph:flex-col'>
        <aside className="bg-white w-[40%] p-[30px] rounded-md flex flex-col gap-10 items-start ph:w-[100%] dark:bg-[#352f2f]">
          <p className="text-[32px] ph:text-[22px]">
            Luxury homeware for people who love timeless design quality
          </p>
          <p className="text-[20px] ph:text-[15px]">
            Shop the new Spring 2022 collection today
          </p>
          <button className="bg-[#F9F9F9] p-[10px_40px] mt-[100px] ph:mt-[10px] ph:w-[100%] dark:bg-gray-400">
            View collection
          </button>
        </aside>
        <img src={img1} className="hidden ph:block ph:w-[100%]" alt="" />
      </section>

      {/* section 2 */}
      <section className="w-[90%] m-auto mt-[100px]">
        <p className="text-center text-[30px] text-gray-600 ph:text-[20px]">
          What makes our brand different
        </p>
        <div className="flex justify-between mt-[40px] ph:flex-col ph:gap-5">
          <div className="w-[20%] flex flex-col gap-2 ph:w-[100%]">
            <img
              src={img10}
              className="w-[25px] h-[25px] rounded-full"
              alt="picture"
            />
            <p className="text-[20px]">Next day as standard</p>
            <p className="text-[17px]">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="w-[20%] flex flex-col gap-2 ph:w-[100%]">
            <img
              src={img7}
              className="w-[25px] h-[25px] rounded-full"
              alt="picture"
            />
            <p className="text-[20px]">Made by true artisans</p>
            <p className="text-[17px]">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div className="w-[20%] flex flex-col gap-2 ph:w-[100%]">
            <img
              src={img5}
              className="w-[25px] h-[25px] rounded-full"
              alt="picture"
            />
            <p className="text-[20px]">Unbeatable prices</p>
            <p className="text-[17px]">
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>
          <div className="w-[20%] flex flex-col gap-2 ph:w-[100%]">
            <img
              src={img8}
              className="w-[25px] h-[25px] rounded-full"
              alt="picture"
            />
            <p className="text-[20px]">Recycled packaging</p>
            <p className="text-[17px]">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className='w-[90%] m-auto my-[50px]'>
            <p className="text-[30px] ph:text-[20px]">New ceramics</p>
            <button className="bg-[gray] p-[10px_40px] mt-[20px] ph:w-[100%]" onClick={() => setAddModal(true)}>Add User</button>
            {/* <div className='flex justify-between items-center my-[20px] ph:flex-wrap ph:gap-[20px_0]'>
                <div className='w-[24%] flex flex-col gap-1 ph:w-[48%]'>
                    <img src="./src/assets/1.png" alt="Picture" className='w-[100%]' />
                    <p>The Dandy chair</p>
                    <p>£250</p>
                </div>
                <div className='w-[24%] flex flex-col gap-1 ph:w-[48%]'>
                    <img src="./src/assets/2.png" alt="Picture" className='w-[100%]' />
                    <p>Rustic Vase Set</p>
                    <p>£155</p>
                </div>
                <div className='w-[24%] flex flex-col gap-1 ph:w-[48%]'>
                    <img src="./src/assets/3.png" alt="Picture" className='w-[100%]' />
                    <p>The Silky Vase</p>
                    <p>£125</p>
                </div>
                <div className='w-[24%] flex flex-col gap-1 ph:w-[48%]'>
                    <img src="./src/assets/4.png" alt="Picture" className='w-[100%]' />
                    <p>The Lucy Lamp</p>
                    <p>£399 </p>
                </div>
            </div> */}

            <div className='flex flex-wrap gap-[100px] items-center my-[20px] ph:flex-wrap ph:gap-[20px_0]'>
                {
                  data.map(el =>
                    (
                      <div key={el.id} className="w-[22%] border-[1px] border-[gray] p-[20px_20px_0_20px] ph:w-[100%] rounded-md">
                        <img src={el.img} alt="Picture" className='w-[100%]' />
                        <p>{el.title}</p>
                        <p>{el.about}</p>
                        <div className="flex gap-2 items-center p-[5px_0] mt-[20px] border-t-[1px] border-t-[gray]">
                          <IconButton onClick={() => deleteUser(el.id)}>
                            <DeleteIcon color="error" />
                          </IconButton>
                          <IconButton onClick={() => {setEditModal(true) , setTitle(el.title) , setImg(el.img) , setAbout(el.about) , setIdx(el.id)}}>
                            <ModeEditIcon color="primary" />
                          </IconButton>
                        </div>
                      </div>
                    ))
                }
            </div>
            <button className='bg-[#F9F9F9] p-[20px_50px] m-auto ph:w-[100%] dark:bg-gray-400'>View collection</button>
      </section>

      {/* section 4 */}
      <section className="w-[90%] m-auto flex justify-between ph:flex-col">
        <img src={img9} alt="" />
        <aside className="flex flex-col gap-2 items-start bg-[#2A254B] w-[46%] p-[2%] text-white justify-between ph:w-[100%] ph:p-[10px] ph:gap-4">
          <p className="text-[33px] ph:text-[20px]">It started with a small idea</p>
          <p className="text-[22px] mt-[-200px] ph:mt-[0] ph:text-[14px]">
            A global brand with local beginnings, our story begain in a small
            studio in South London in early 2014
          </p>
          <button className="bg-[#F9F9F926] p-[15px_50px] rounded-md ph:w-[100%]">
            View collection
          </button>
        </aside>
      </section>

      {/* section 5 */}
      <section className='w-[100%] m-auto flex flex-col gap-5 items-center p-[100px_0] bg-[url("./src/assets/1.png")] bg-cover bg-center text-white mt-[50px] ph:items-start ph:p-[60px_10px]'>
        <p className="text-[25px] ph:text-[20px]">Join the club and get the benefits</p>
        <p className="w-[42%] text-[25px] text-center ph:text-[15px] ph:w-[100%] ph:text-start">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <ul className="flex items-center gap-5 text-[20px] ph:text-[15px] ph:gap-2 ph:flex-col ph:items-start">
          <li className="flex items-center gap-1">
            <CheckCircleIcon />
            Exclusive offers
          </li>
          <li className="flex items-center gap-1">
            <CheckCircleIcon />
            Free events
          </li>
          <li className="flex items-center gap-1">
            <CheckCircleIcon />
            Large discounts
          </li>
        </ul>
        <div className="w-[40%] m-auto flex items-center ph:w-[100%]">
          <input
            type="text"
            className="w-[78%] h-[7svh] text-[20px] px-[1%] outline-none text-black"
            placeholder="Enter your name"
          />
          <button className="bg-[#2A254B] text-white text-[15px] w-[20%] h-[7svh]">
            Sign up
          </button>
        </div>
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
  );
};

export default About;
