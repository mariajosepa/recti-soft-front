import PanelOption from "app/components/PanelOption";
import Image from "next/image";

const panelItems = [
  {
    id: 1,
    name: "Órdenes de trabajo",
    iconUrl: "/globe.svg",
  },
  {
    id: 2,
    name: "CRM",
    iconUrl: "/globe.svg",
  },
  {
    id: 3,
    name: "Recursos Humanos",
    iconUrl: "/globe.svg",
  },
  {
    id: 4,
    name: "CRM",
    iconUrl: "/globe.svg",
  },
  {
    id: 5,
    name: "Recursos Humanos",
    iconUrl: "/globe.svg",
  },
  {
    id: 6,
    name: "Facturación",
    iconUrl: "/globe.svg",
  },
  {
    id: 7,
    name: "Portal Colaboradores",
    iconUrl: "/globe.svg",
  },
  {
    id: 8,
    name: "Otra Opción",
    iconUrl: "/globe.svg",
  },
  {
    id: 9,
    name: "Otra Opción",
    iconUrl: "/globe.svg",
  },
  {
    id: 11,
    name: "Otra Opción",
    iconUrl: "/globe.svg",
  },
  {
    id: 12,
    name: "Otra Opción",
    iconUrl: "/globe.svg",
  },
]


export default function Home() {
  return (
    <div className="h-screen w-screen bg-[url(/background-pattern.png)] bg-cover flex flex-col items-center justify-end relative"> 
      <div className="bg-d-grey rounded-t-3xl h-280 w-[75%] xl:w-[50%] grid 
                      grid-cols-[repeat(auto-fit,150px)] gap-15 p-4 content-start justify-center overflow-scroll">
        {panelItems.map((item) => {
          return (
            <div key={item.id}>
              <PanelOption
                iconUrl={item.iconUrl}
                name={item.name}
              />
            </div>
          )
        })}
      </div>
      <Image
        src="/logo-rectiram.png"
        alt="Company logo"
        width={200}
        height={100}
        className="absolute top-3 left-0 right-0 bottom-0"
      ></Image>
    </div>
  );
}
