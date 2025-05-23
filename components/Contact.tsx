import React from "react";
import Image from "next/image";
import linkedin from "/public/linkedin.png";
import github from "/public/github.png";
import notion from "/public/notion.png";
import lemon8 from "/public/lemon8.png";

const Contact = () => {
  return (
    <div>
      <div className="flex w-[100px] justify-between">
        <div className="w-[30px] ">
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

        <div className="w-[30px] ">
          <a
            href="https://github.com/mugenboat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={github} loading="lazy" width={35} height={35} alt="" />
          </a>
        </div>

        <div className="w-[30px] ">
          <a
            href="https://www.lemon8-app.com/@boattheblur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={lemon8} alt="" loading="lazy" width={35} height={35} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
