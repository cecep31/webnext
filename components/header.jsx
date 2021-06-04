import { useRouter } from "next/router";

const Header = () => {
  const home = { name: "HOME", href: "/", current: true };
  const rightmenu = [
    { name: "POST", href: "/post", current: true },
    { name: "ABOUT", href: "/about", current: false },
  ];
  const router = useRouter();
  return (
    <div className="sm:justify-between sm:flex bg-gray-900 px-28 py-2 mx-auto">
      <div>
        <button
          className="text-white p-3 "
          onClick={() => router.push(home.href)}
        >
          {home.name}
        </button>
      </div>
      <div>
        {rightmenu.map((item) => (
          <button
            className="btn text-white p-3"
            onClick={() => router.push(item.href)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
