import Image from "next/image";

type LoginProps = {
  iconUrl: string;
};

const Login = (props : LoginProps ) => {
  return (
    <div className="bg-d-grey h-[30vh] w-[40%]  flex flex-col items-center justify-center rounded-lg gap-1 text-white">
      <div className="w-full flex flex-col items-center justify-center p-2 gap-3">
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
            className="bg-white h-8 w-25 sm:w-50 "
            />

          <label htmlFor="username" className="self-baseline">Contraseña:</label>
          <input 
          type="text"
          id="password"
          name="password"
          className="bg-white h-8 w-25 sm:w-50  "
          />
        </form>
      </div>
    </div>
  )
}
export default Login;