import Image from "next/image";

export default function Home() {
  return (
    <div id="home" className="h-[100vh] w-full">
      <div className="w-full h-full absolute">
        <img
          src="/green-leaves-bg.svg"
          alt="Green leaves background"
          className="object-cover object-center w-full h-full aspect-auto"
        />
      </div>
      <h1>Hello world!</h1>
    </div>
  );
}
