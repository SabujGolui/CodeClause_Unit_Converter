import React from "react";
import { AiFillGithub } from 'react-icons/ai';

function FooterComp() {
  return (
    <div>
      <footer className="footer fixed-bottom bg-light text-center text-lg-start">
        <div
          className="text-center p-4 "
          style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
        >
          Made by Sabuj Golui. Get connected with me on GitHub&nbsp;: &nbsp;
          <a class="text-dark" href="https://mdbootstrap.com/">
          <AiFillGithub/>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default FooterComp;
