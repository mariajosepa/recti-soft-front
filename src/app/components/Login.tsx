import Image from "next/image";

type LoginProps = {
  iconUrl: string;
};

export default function Login (props : LoginProps )  {
  return (
    <div className="bg-d-grey h-[35vh] w-[40%] md:w-[30%]  flex flex-col items-center justify-center rounded-lg gap-1 text-white p-10">
      <div className="w-full flex flex-col items-center justify-center p-2 gap-8">
        <Image
          src={props.iconUrl}
          alt="icon"
          width={100}
          height={100}
        ></Image>
        <p className="text-center">Ingresa tus credenciales</p>
      </div>
      <div className="h-full content-center">
        <form action="" className="flex flex-col items-center justify-center gap-2">
          <label htmlFor="username" className="self-baseline">Usuario:</label>
          <input 
            type="text" 
            id="username"
            name="username"
            required
            minLength={4}
            maxLength={20}
            className="bg-white h-8 w-30 md:w-48 rounded-sm text-black"
            />

          <label htmlFor="username" className="self-baseline">:</label>
          <input 
          type="text"
          id="password"
          name="password"
          required
          minLength={4}
          maxLength={20}
          className="bg-white h-8 w-30 md:w-48 rounded-sm text-black"
          />
        </form>
      </div>
    </div>
  )
}
