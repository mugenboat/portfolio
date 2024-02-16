export default function Taglist(props: { skill: string }) {
  return (
    <>
      {props.skill && (
        <span className="inline-flex items-center rounded-md bg-[#141c27] px-2 py-1 mr-0.5 text-xs font-medium text-green-300 ring-1 ring-inset ring-white  ">
          {props.skill}
        </span>
      )}
    </>
  );
}
