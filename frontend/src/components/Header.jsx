import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink, Link,} from "react-router-dom";
import { useEffect, useRef } from "react";
import { useCartContext } from "../context/context";

const navLinks = [
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);

   const{state:{cart}} = useCartContext();
 
  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  useEffect(() => {
  });

  return (
    <header className="header flex items-center h-[80px] sticky_header">
      <div className="container" >
        <div className="flex items-center justify-between">
          {/* =============== logo =========== */}
          <div>
            {/* <img className="w-20" src={logo} alt="image" /> */}
            <Link to='/home'>
            <h3 className="font-semibold text-textColor hover:text-primaryColor w-20">Home</h3>
            </Link>
          </div>

          <div>
            <div className=" text-center ">
              <div className="max-w-[270px] mx-auto border border-r-0 rounded-md flex items-center justify-center">
                <input
                  type="text"
                  placeholder="search products"
                  className="w-[7rem] lg:w-full px-4 text-[12px] bg-transparent focus:outline-none cursor-pointer placeholder:text-textColor "
                />
                <button className="bg-[#0066ff] text-[14px] p-2 text-white font-bold w-[4rem] lg:w-full rounded-r-md">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* =============== menu =========== */}
          <div className="navigation flex gap-2" ref={menuRef} onClick={toggleMenu}>
              <Link to='/cart'>
              <div className="text-[35px] relative cursor-pointer hover:text-primaryColor">
                <AiOutlineShoppingCart />
                {cart.length > 0 && (
                <p className="absolute hover:bg-primaryColor bottom-0 right-0 text-white font-bold text-[12px] bg-primaryColor rounded-full w-[50%] flex justify-center items-center">
                  {cart.length}
                </p>
                )}
              </div>
              </Link>
            <ul className="menu lg:flex items-center gap-[2.7rem] hidden">

              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navclass) =>
                      navclass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ==============right Nav==============  */}
        </div>
      </div>
    </header>
  );
};

export default Header;
