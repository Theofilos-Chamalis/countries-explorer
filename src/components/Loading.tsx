import { FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";

const Loading: FunctionComponent = () => {
  const [usesWebkit, setUsesWebkit] = useState<boolean | null>(null);

  useEffect(() => {
    setUsesWebkit(
      navigator.userAgent.indexOf("Safari") > -1 &&
        navigator.userAgent.indexOf("Chrome") <= -1
    );
  }, []);

  return (
    <div className="flex h-screen w-full justify-center items-center -mt-32">
      {usesWebkit === false && (
        <Image
          src={"/loading-animated.svg"}
          width={240}
          height={240}
          alt="loading-icon"
          priority={true}
        />
      )}
      {usesWebkit && (
        <object data={"/loading-animated.svg"} width={240} height={240} />
      )}
    </div>
  );
};

export default Loading;
