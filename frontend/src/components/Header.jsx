import logo from "../assets/images/asset0.webp";
import userImg from "../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

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
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const navigate = useNavigate();

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  return (
    <header className="header flex items-center " ref={headerRef}>
      <div className="container shadow p-2" >
        <div className="flex items-center justify-between">
          {/* =============== logo =========== */}
          <div>
            {/* <img className="w-20" src={logo} alt="image" /> */}
            <Link to='/home'>
            <h3 className="font-semibold text-textColor hover:text-primaryColor w-20">Home</h3>
            </Link>
          </div>

          <div>
            <div className="contianer text-center ">
              <div className="max-w-[370px]   mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-center">
                <input
                  type="text"
                  placeholder="search products"
                  className="w-full px-4 pl-4 pr-2 bg-transparent focus:outline-none cursor-pointer placeholder:text-textColor "
                />
                <button className="bg-[#0066ff]  px-5 py-3 text-white font-bold rounded-md">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* =============== menu =========== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              <Link to='/cart'>
              <li className="text-[35px] relative cursor-pointer hover:text-primaryColor">
                <AiOutlineShoppingCart />
                <p className="absolute bottom-0 right-0 text-white font-bold text-[12px] bg-textColor rounded-full w-[50%] flex justify-center items-center">
                  2
                </p>
              </li>
              </Link>

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
