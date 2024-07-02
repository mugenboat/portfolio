import React from "react";
import Image from "next/image";
import linkedin from "/public/linkedin.png";
import github from "/public/github.png";
import notion from "/public/notion.png";
import linktree from "/public/linktree.png";

const Contact = () => {
  return (
    <div>
      <div className="flex w-[80px] justify-between">
        <div className="w-[35px] mx-1 ">
          <a
            href="https://www.linkedin.com/in/thanate-janyaswasdi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={linkedin}
              alt=""
              loading="lazy"
              width={35}
              height={35}
            />
          </a>
        </div>

        <div className="w-[35px] mx-1 ">
          <a
            href="https://github.com/mugenboat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={github} loading="lazy" width={35} height={35} alt="" />
          </a>
        </div>

        <div className="w-[35px] mx-1 ">
          <a
            href="https://linktr.ee/thanate.jan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={linktree}
              loading="lazy"
              width={30}
              height={30}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
