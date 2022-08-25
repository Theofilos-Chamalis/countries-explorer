import { FunctionComponent } from "react";
import Image from "next/image";

const Loading: FunctionComponent = () => {
  return (
    <div className="flex h-screen w-full justify-center -mt-32">
      <Image src={"/loading-animated.svg"} width={240} height={240} />
    </div>
  );
};

export default Loading;
