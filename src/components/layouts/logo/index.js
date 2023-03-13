import LogoIcon from "@/assets/img/logo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Image src={LogoIcon} width={70} height={80} alt="Logo" />
    </>
  );
};

export default Logo;
