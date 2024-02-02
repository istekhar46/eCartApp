import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/authSlice";
import { useLogoutMutation } from "../../slices/userApiSlice/userApiSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { NavLink, Link,} from "react-router-dom";
// import { useEffect, useRef } from "react";
import { useCartContext } from "../../context/context";

const navLinks = [
  {
    path: "/home",
    display: "Home",
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
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall, { isloading }] = useLogoutMutation();

   const{state:{cart}} = useCartContext();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

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
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* =============== logo =========== */}
          <div>
            {/* <img src={logo} alt="image" /> */}
            <h2 className="font-[800] text-black">Cart App</h2>
          </div>

          {/* =============== menu =========== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
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

          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img
                    src={userImg}
                    className="w-full rounded-full"
                    alt="image"
                  />
                </figure>
              </Link>
            </div>
            <Link to='/cart'>
              <div className="text-[35px] relative cursor-pointer hover:text-primaryColor">
                <AiOutlineShoppingCart />
                {cart.length > 0 && (
                <p className="absolute p-1 hover:bg-primaryColor bottom-0 right-0 text-white font-bold text-[12px] bg-primaryColor rounded-full w-[50%] flex justify-center items-center">
                  {cart.length}
                </p>
                )}
              </div>
              </Link>

            {userInfo ? (
              <>
                <button
                  onClick={handleLogout}
                  className="bg-primaryColor py-4 px-6 text-white font-[600] h-[44px] items-center justify-center rounded-[10px]"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-4 px-6 text-white font-[600] h- [44px] items-center justify-center rounded-[10px]">
                  Login
                </button>
              </Link>
            )}

            

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
