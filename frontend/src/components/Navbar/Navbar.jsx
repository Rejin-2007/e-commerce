import { useState } from 'react';
import { assets } from '../../assets/assets'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className='px-5 py-0 flex justify-between items-center text-xl'>
      <img src={assets.logo} alt="Logo" />
      <ul className="flex list-none gap-5">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "border-b-2 pb-2" : ""}>Home</li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "border-b-2 pb-2" : ""}>Menu</li>
        <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "border-b-2 pb-2" : ""}>Mobile App</li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "border-b-2 pb-2" : ""}>Contact Us</li>
      </ul>
      <div>
        <img src={assets.search_icon} alt="Search Icon" />
        <div></div>
      </div>
      <button className='bg-transparent border text-amber-600 text-lg py-2.5 px-7 rounded-xl cursor-pointer hover:bg-amber-800/5 '>Sign In</button>
    </div>
  )
}

export default Navbar