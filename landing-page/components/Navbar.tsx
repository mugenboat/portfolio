import React from "react";

export const Navbar = () => {
  return (
    <div className="w-[100%] top-0 h-[10vh] ">
      <div className="flex items-center justify-between  h-[100%] my-5">
        <div className="flex justify-between lg:w-[65%] md:w-[60%]">
          <div className="text-green-500 font-bold">LOGO</div>
          <div className="text-[15px]">รายวิชา</div>
          <div className="text-[15px]">ถ่ายทอดสด</div>
          <div>กระทู้คำถาม</div>
        </div>
        <div className="flex items-center justify-between lg:w-[30%] md:w-[35%]">
          <div>
            <button
              type="button"
              className="py-1 px-1 rounded bg-[#e7e7e7] text-[10px]"
            >
              ออกจากระบบ
            </button>
          </div>
          <div>
            <button
              type="button"
              className="py-1 px-1 rounded bg-[#3b3939] text-white text-[10px]"
            >
              <img
                className="w-5 h-5 rounded-full inline"
                src="/noimg.jpg"
                alt="Rounded avatar"
              />
              Sirawat Rachanom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
