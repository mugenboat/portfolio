import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <div className="flex w-[80px] justify-between">
        <div className="w-[35px] ">
          <a
            href="https://www.linkedin.com/in/thanate-janyaswasdi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="./portfolio/linkedin.png"
              loading="lazy"
              alt=""
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
            <Image
              src="./portfolio/github.png"
              loading="lazy"
              width={35}
              height={35}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
