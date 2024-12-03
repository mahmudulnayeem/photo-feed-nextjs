import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/assets/lws_logo.png"
      alt="Lws"
      width={165}
      height={50}
      className="max-w-[100px] md:max-w-[165px]"
    />
  );
};

export default Logo;
