import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../redux/reducerSlices/authSlice";
import navStyles from "./index.module.css";
export const NavBar = () => {
  const { loading, currentUser } = useSelector(authSelector);

  return (
    <div className={navStyles.navContainer}>
      <div className={navStyles.navBrand}>
        <p>Busy Buy</p>
      </div>
      <ul className={navStyles.navLinks}>
        <Link to="/">
          <li className={navStyles.navLink}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/609/609803.png"
              alt="home"
            />
            Home
          </li>
        </Link>
        <Link to="/orders">
          <li className={navStyles.navLink}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2048/2048947.png"
              alt="orders"
            />
            My Orders
          </li>
        </Link>
        <Link to="/cart">
          <li className={navStyles.navLink}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"
              alt="cart"
            />
            Cart
          </li>
        </Link>
        <Link to="/signIn">
          <li className={navStyles.navLink}>
            {currentUser ? (
              <>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/14722/14722724.png"
                  alt="sign in"
                />
                Sign Out
              </>
            ) : (
              <>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9653/9653944.png"
                  alt="sign in"
                />
                Sign In
              </>
            )}
          </li>
        </Link>
      </ul>
    </div>
  );
};
