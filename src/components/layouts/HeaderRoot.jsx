import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const HeaderRoot = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('user') !== null); // Kiểm tra đã đăng nhập hay chưa

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Xóa thông tin người dùng trong localStorage
    setLoggedIn(false); // Cập nhật trạng thái đã đăng nhập
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 max-w-[992px]">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://atlanticjsc.com.vn/wp-content/uploads/2018/09/WHO-Logo-1.png" className="h-8" alt="Brand Name" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BrandName</span>
        </Link>
        <div className=" relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {loggedIn ? (
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={dropdownOpen}
              onClick={handleDropdownToggle}
            >
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src={user?.avatar} alt="user photo" />
            </button>
          ) : (
            <Link to="/login" className="text-sm text-gray-700 hover:text-blue-500">Login/Register</Link>
          )}
          <div
            className={classNames(
              'z-50 my-4 absolute top-[25px] right-0 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600',
              {
                hidden: !dropdownOpen,
              }
            )}
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">{user?.fullname ? user?.fullname : 'No name'}</span>
              <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{user?.email ? user?.email : 'No email'}</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  onClick={handleLogout} // Xử lý logout khi click vào Sign out
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={navbarOpen}
            onClick={handleNavbarToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={classNames(
            'items-center justify-between w-full md:flex md:w-auto md:order-1',
            {
              hidden: !navbarOpen,
            }
          )}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderRoot;
