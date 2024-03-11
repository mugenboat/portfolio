import React from "react";
import SubjectCard from "./SubjectCard";

export const Subject = () => {
  const subjects = [
    {
      header: "Data",
      content: "เรียนรู้และฝึกฝนกระบวนการคิดสร้างมูลค่าให้ธุรกิจด้วยข้อมูล",
    },
    {
      header: "Science",
      content: "เรียนรู้และฝึกฝนกระบวนการคิดด้วยกระบวนการทางวิทยาศาสตร์",
    },
    {
      header: "Tech",
      content: "พร้อมเป็นที่ต้องการของตลาดแรงงานด้วยทักษะการเขียนโปรแกรม",
    },
    {
      header: "Business",
      content:
        "พลิกโฉมธุรกิจในยุคดิจิทัลด้วยการเข้าถึงลูกค้าในช่องทางและเวลาที่เหมาะสม",
    },
  ];
  return (
    <div>
      <div className="flex justify-between my-5">
        <div>เลือกเรียนตามหัวข้อที่สนใจ</div>
        <button className="button-link">ดูทั้งหมด</button>
      </div>
      <div className="grid  lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-4">
        {subjects.map((subject, i) => (
          <div key={i}>
            <SubjectCard header={subject.header} content={subject.content} />
          </div>
        ))}
      </div>
    </div>
  );
};
