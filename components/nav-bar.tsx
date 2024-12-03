import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";

const NavBar = () => {
  return (
    <nav className="py-4 md:py-6 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex gap-4 items-center">
          {/* <!-- Language Dropdown --> */}
          <div className="relative">
            <button className="flex items-center gap-2">
              <Image
                className="max-w-8"
                src="/assets/images/bd.png"
                alt="bangla"
                height={20}
                width={20}
              />
              Bangla
            </button>

            <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg sr-only">
              <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                <Image
                  height={20}
                  width={20}
                  className="max-w-8"
                  src="/assets/images/bd.png"
                  alt="bangla"
                />
                Bangla
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                <Image
                  height={20}
                  width={20}
                  className="max-w-8"
                  src="/assets/images/usa.png"
                  alt="bangla"
                />
                English
              </li>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
