import { Button } from "@/components/UI/Button";
import { homeText } from "../../public/data";

export default function Home() {
  return (
    <div
      id="home"
      className="h-[100vh] w-full flex flex-col justify-center items-center"
    >
      <div className="w-full h-full absolute z-0">
        <img
          src="/green-leaves-bg.svg"
          alt="Green leaves background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="z-10 flex flex-col items-center mt-20">
        <div>
          <img src="/logo.png" alt="logo" className="w-[20rem] h-[20rem]" />
        </div>
        {/* <div className="border border-red-500">
          <img src="/marta-ferraris-art-sign.svg" alt="signature title" />
        </div> */}
        <h1 className="heading text-[#422100] text-[4.375rem]">
          Marta Ferraris Art
        </h1>
        <h1 className="heading text-[#422100] text-[2.5rem]">
          {homeText.value}
        </h1>
        <div className="mt-10">
          <Button className="bg-[#ccd5c0] text-[#422100] border rounded-3xl px-8">
            Contact me
          </Button>
        </div>
      </div>
    </div>
  );
}
