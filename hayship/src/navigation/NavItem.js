// NavItem.js
import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ item, closeDrawer }) => {
  return (
    <li>
      <details open>
        <summary className="level1">{item.title}</summary>
        {item.children && (
          <ul>
            {item.children.map((child, index) => (
              <li key={index}>
                <details open>
                  <summary className="level2">{child.title}</summary>
                  <ul className="subList">
                    <li>
                      <Link to={child.path} onClick={closeDrawer}>
                        {child.title}
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        )}
      </details>
    </li>
  );
};

export default NavItem;
