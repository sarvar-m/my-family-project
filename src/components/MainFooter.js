import React from "react";
import "./MainFooter.css";

const MainFooter = () => {
  return (
    <div class="footer-basic">
      <footer>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">About Us</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Support</a>
          </li>
          <li class="list-inline-item">
            <a href="#">About</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Contact</a>
          </li>
        </ul>
        <p class="copyright">MyFamily Ltd © 2021</p>
      </footer>
    </div>
  );
};

export default MainFooter;
