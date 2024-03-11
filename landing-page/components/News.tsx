import React from "react";
import { NewsCard } from "./NewsCard";

const News = () => {
  const news = [
    {
      header: "PROFIT/LOSS OF STOCKS IN THE PORTFOLIO",
      type: "Business",
      title: "กำไร/ขาดทุนของหุ้นในพอร์ตต้องดูอย่างไร?",
      content:
        "เมื่อซื้อขายหุ้นแล้วสิ่งหนึ่งที่ขาดไม่ได้ คือ การติดตามดูข้อมูลของหุ้นในพอร์ตลงทุนว่าตอนนี้มีกำไรหรือขาดทุนมากน้อยเท่าใด?",
      date: "1 มกราคม 2567",
      view: "230",
    },
    {
      header: "WHAT IS A DATA ENGINEER",
      type: "Data",
      title: "Data Engineer คืออะไร?",
      content:
        "Data Engineer คือคนที่ทำงานกับหลากหลายเครื่องมือเพื่อรวบรวมข้อมูลจัดการข้อมูลและเปลี่ยนข้อมูลดิบ ให้พร้อมใช้งานสำหรับทั้ง Data Scientist และ Data Analyst",
      date: "1 มกราคม 2567",
      view: "230",
    },
  ];
  const miniNews = [
    {
      header: "สารแทนน้ำตาลไม่อันตราย",
      type: "Science",
      title: "สารแทนน้ำตาลไม่อันตราย",
      content:
        "สาเหตุที่องค์การอนามัยโลกให้คำแนะนำดังกล่าวมาจากผลการวิจัยล่าสุดที่ชี้ว่าสารแทนน้ำตาลไม่มีประโยชน์ต่อการช่วยลดน้ำหนักหรือลดระดับน้ำตาล",
    },
    {
      header: "Data Pipelines With Airflow",
      type: "Tech",
      title: "Data Pipelines With Airflow",
      content:
        "เรียนรู้การสร้าง End-to-End Data Pipelines โดยใช้ Apache Airflow ตั้งแต่อ่านข้อมูลทำความสะอาด ปรับให้อยู่ในรูปแบบที่เหมาะสม",
    },
    {
      header: 'ร่างกายสามารถย้อนวัย"อายุชีวภาพ"',
      type: "Science",
      title: 'ร่างกายสามารถย้อนวัย"อายุชีวภาพ"',
      content:
        'ความอ่อนเยาว์หรือแก่ชราของเซลล์และอวัยวะมนุษย์นั้น วัดกันด้วย "อายุชีวภาพ"(biological age)ซึ่งอาจจะแตกต่างจากอายุจริง',
    },
  ];
  return (
    <div>
      <div className="flex justify-between my-5">
        <div>คอร์สของฉัน</div>
        <button className="button-link">ดูทั้งหมด</button>
      </div>
      <div className="grid  lg:grid-cols-2 md:grid-cols-1 xs:grid-cols-1 gap-4">
        <div>
          <div className="grid grid-cols-1 content-stretch gap-2">
            {news.map((item, i) => (
              <div
                key={i}
                className="inline-block w-[100%] h-[275px]  bg-white border border-gray-200 rounded-lg shadow"
              >
                <NewsCard
                  header={item.header}
                  type={item.type}
                  title={item.title}
                  content={item.content}
                  date={item.date}
                  view={item.view}
                  isMain
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 place-content-stretch gap-2">
            {miniNews.map((item, i) => (
              <div
                key={i}
                className="inline-block w-[100%] h-[180px]  bg-white border border-gray-200 rounded-lg shadow"
              >
                <NewsCard
                  header={item.header}
                  type={item.type}
                  title={item.title}
                  content={item.content}
                  date={item.date}
                  view={item.view}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
