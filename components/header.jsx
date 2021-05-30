import { useRouter } from "next/router";
import {useState} from "react"

const Header = () => {
    const ssss= 12
    const router = useRouter();
  return (
    <div className="max-w-7xl sm:justify-between sm:flex bg-gray-100 p-1 mx-auto">
      <div>
        <button
          className="btn text-red-800 p-3"
          onClick={(navigation) => router.push('/')}
        >
          {ssss}
        </button>
      </div>
      <div>
        <button
          className="btn text-red-800 p-3"
          onClick={() => router.push("/about")}
        >
          About
        </button>
        <button
          className="btn text-red-800 p-3"
          onClick={() => router.push("/about")}
        >
          Blog
        </button>
      </div>
    </div>
  );
};

export default Header;
