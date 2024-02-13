import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { TfiEmail } from "react-icons/tfi";

import Icon from "./Icon";

function Socials() {
  return (
    <>
      <div className="flex pb-12 items-center justify-center gap-4">
        <a href="https://github.com/nipunagarwal4235" target="_blank">
          <Icon text="Github">
            <FaGithub size={30} />
          </Icon>
        </a>

        <a href="https://www.linkedin.com/in/nipun--agarwal/" target="_blank">
          <Icon text="LinkedIn">
            <FaLinkedin size={30} />
          </Icon>
        </a>

        <a href="https://leetcode.com/nipunagarwal322/" target="_blank">
          <Icon text="Leetcode">
            <SiLeetcode size={30} />
          </Icon>
        </a>

        <a href="/assets/Resume.pdf" download>
          <Icon text="Resume">
            <HiOutlineDocumentArrowDown size={30} />
          </Icon>
        </a>
        <a href="mailto:nipunagarwal322@gmail.com">
          <Icon text="Mail">
            <TfiEmail size={30} />
          </Icon>
        </a>
      </div>
    </>
  );
}

export default Socials;
