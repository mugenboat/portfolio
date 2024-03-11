import React from "react";

export const Footer = () => {
  return (
    <div className="bg-green-700 ">
      <div className="text-white flex justify-center">
        <div className="text-[25px] w-[70%] border-b-2 py-5">LOGO</div>
      </div>
      <div className=" flex justify-center">
        <div className=" text-white grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-4 py-5 w-[70%] border-b-2">
          <div>
            <h3 className="mb-3 font-bold text-[18px]">คอร์สของเรา</h3>
            <p className="text-[10px]">สอนกับเรา</p>
            <p className="text-[10px]">ติดต่อสอบถามเพิ่มเติม</p>
            <p className="text-[10px]">แจ้งปัญหาเกี่ยวกับระบบ</p>
            <p className="text-[10px]">ช่องทางการร้องเรียน</p>
          </div>
          <div>
            <h3 className="mb-3 font-bold text-[18px]">เกี่ยวกับเรา</h3>
            <p className="text-[10px]">สอนกับเรา</p>
            <p className="text-[10px]">ติดต่อสอบถามเพิ่มเติม</p>
            <p className="text-[10px]">แจ้งปัญหาเกี่ยวกับระบบ</p>
            <p className="text-[10px]">ช่องทางการร้องเรียน</p>
          </div>
          <div>
            <h3 className="mb-3 font-bold text-[18px]">ความปลอดภัย</h3>
            <p className="text-[10px]">Privacy Policy</p>
            <p className="text-[10px]">Terms and Conditions</p>
            <p className="text-[10px]">Data Protection Policy Six</p>
            <p className="text-[10px]">Cookie Policy</p>
          </div>
          <div>
            <h3 className="mb-3 font-bold text-[18px]">
              Lorem Ipsum is simply dummy text of the printing .
            </h3>
            <p className="text-[10px]">
              199 ม.6 ต.ทุ่งสุขลา อ.ศรีราชา จ.ชลบุรี 20140
            </p>
            <p className="text-[10px]">ติดต่อเรา</p>
          </div>
        </div>
      </div>
      <div className="text-white flex justify-center">
        <div className="text-[25px] w-[70%] border-b-2 py-1">
          <div className="flex justify-between my-5 text-[10px]">
            <div>Y.I.M Corporation @2023. All rights reserved.</div>
            <div>0-3835-4580-4 ,0-3835-2611-6</div>
          </div>
        </div>
      </div>
    </div>
  );
};
