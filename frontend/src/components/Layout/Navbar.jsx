import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../../static/data';
import styles from '../../styles/styles';

const Navbar = ({ active }) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((navItem, index) => (
          <div className="flex" key={index}>
            <Link
              to={navItem.url}
              className={`${active === index + 1 ? 'text-[#fff]' : 'text-black 800px:text-[#fff] '} pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer`}
            >
              {navItem.title}
            </Link>
            {navItem.dropdownItems && navItem.dropdownItems.length > 0 && (
              <div className="dropdown">
                <ul>
                  {navItem.dropdownItems.map((dropdownItem, dropdownIndex) => (
                    <li key={dropdownIndex}>
                      <Link to={dropdownItem.url} className="dropdown-link">
                        {dropdownItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Navbar;
