import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Image src="/logo2.png" alt="logo" width={38} height={30} priority/>
    </>
  );
};
 export default Logo;