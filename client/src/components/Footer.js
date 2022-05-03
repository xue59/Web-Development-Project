import React from "react";
import "../stylesheet/Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        &copy; Copyright 2022 by Junyan Ling, Zack Xue, Zijian Cao. All right
        reserved.
      </p>
      <p>
        <a href="mailto:ling.ju@northeastern.com" target="_blank">
          <img
            src="email.ico"
            alt="neu email"
            width="45"
            height="45"
          />
        </a>
        <a
          href="https://github.com/evanscho97/CS5610-Group3-FinalProject"
          target="_blank"
        >
          <img
            src="github.ico"
            alt="github"
            width="40"
            height="40"
          />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <img
            src="linkedin.ico"
            alt="linkedin"
            width="40"
            height="40"
          />
        </a>
      </p>
    </footer>
  );
}
