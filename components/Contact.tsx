import React from "react";
import Image from "next/image";
import linkedin from "/public/linkedin.png";
import github from "/public/github.png";
import notion from "/public/notion.png";

const Contact = () => {
  return (
    <div>
      <div className="flex w-[120px] justify-between">
        <div className="w-[35px] ">
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

        <div className="w-[35px] ">
          <a
            href="https://github.com/mugenboat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={github} loading="lazy" width={35} height={35} alt="" />
          </a>
        </div>

        <div className="w-[35px] ">
          <a
            href="https://butternut-arrow-da3.notion.site/Development-79430cde50cf42b7a3fa98fd438e96ae"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={notion} loading="lazy" width={35} height={35} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
