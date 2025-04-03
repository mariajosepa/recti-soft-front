import Image from "next/image";
type PanelOptionProps = {
  iconUrl: string;
  name: string;
};


export default function PanelOption (props : PanelOptionProps )  {
  return (
    <div className="h-[150px] w-[150px] bg-d-orange flex flex-col items-center justify-center 
                  rounded-lg gap-4 text-blue text-center cursor-pointer">
      <p>{props.name}</p>
      <Image
        src={props.iconUrl}
        alt="icon"
        width={100}
        height={100}
        className="h-10 w-10"
      ></Image>
    </div>
  )
}