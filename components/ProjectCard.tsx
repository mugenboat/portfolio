import React from "react";
import Image from "next/image";

export default function ProjectCard(props: { name: string }) {
  return (
    <div className="p-6 rounded-lg border border-gray-200 w-[300px] h-[300px]">
      <div className="flex justify-center items-center">
        <Image src="./bulb.svg" alt="" width={35} height={35} />
      </div>
      <h2 className="text-center mb-2">{props.name}</h2>
      <div className="break-words">
        <p>asdasdasdasdasdasdasdasdasdsa</p>
        <p>asdasdasdasdasdasdasdasdasdsa</p>
        <p>asdasdasdasdasdasdasdasdasdsa</p>
        <p>asdasdasdasdasdasdasdasdasdsa</p>
        <p>asdasdasdasdasdasdasdasdasdsa</p>
        <p>asdasdasdasdasdasdasdasdasdsa</p>
        <p>asdasdasdasdasdasdasdasdasdsa</p>
      </div>
    </div>
  );
}
