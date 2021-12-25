import Link from "next/link";
import { Container, NavLink } from "../";
import { useAuth } from "../../hooks";
import { Button } from "../Button";

export function Header() {
  const { profile } = useAuth();

  return (
    <header className="bg-white relative shadow-sm h-[52px] flex items-center">
      <Container className="grid grid-cols-5">
        <div className="col-span-2 flex items-center">
          <Link href="/">
            <a className="flex  items-center select-none">
              <div className="bg-pink-500 text-white font-bold rounded-full h-[35px] w-[35px] flex items-center justify-center mr-2">
                M
              </div>
              <div className="text-pink-500 font-semibold mr-4">
                HundredModels.com
              </div>
            </a>
          </Link>

          <div className="flex items-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 absolute top-[11px] left-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              placeholder="Search..."
              className="w-[200px] focus:w-[350px] h-[36px] leading-none pl-10 text-sm bg-gray-100 text-gray-400 focus:text-gray-600 rounded-full px-3 outline-none focus:outline-none focus:shadow hover:shadow appearance-none transition-all"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <NavLink
            href="/"
            exact
            defaultClassName="text-gray-400 hover:text-pink-500"
            activeClassName="bg-pink-500 text-white hover:text-white"
            className="font-normal text-sm px-4 py-2 focus:ring-pink-300 focus:ring-4 rounded-full"
          >
            Home
          </NavLink>
          <NavLink
            href="/models"
            exact
            defaultClassName="text-gray-400 hover:text-pink-500"
            activeClassName="bg-pink-500 text-white hover:text-white"
            className="font-normal text-sm px-4 py-2 focus:ring-pink-300 focus:ring-4 rounded-full"
          >
            Models
          </NavLink>
          <NavLink
            href="/products"
            defaultClassName="text-gray-400 hover:text-pink-500"
            activeClassName="bg-pink-500 text-white hover:text-white"
            className="font-normal text-sm px-4 py-2 focus:ring-pink-300 focus:ring-4 rounded-full"
          >
            Products
          </NavLink>
          <NavLink
            href="/help"
            defaultClassName="text-gray-400 hover:text-pink-500"
            activeClassName="bg-pink-500 text-white hover:text-white"
            className="font-normal text-sm px-4 py-2 focus:ring-pink-300 focus:ring-4 rounded-full"
          >
            Help
          </NavLink>
        </div>
        <div className="col-span-2 flex items-center justify-end">
          {profile ? (
            <Link href={`/${profile.username}`}>
              <a className="mr-2">
                <div className="hover:bg-gray-100 rounded-full transition-all flex items-center focus:ring-pink-300 focus:ring-4 select-none">
                  <img
                    src={profile.avatar}
                    alt="avatar"
                    className="w-9 h-9 rounded-full mr-2"
                  />
                  <div className="text-gray-400 mr-2">
                    {profile.firstName} {profile.lastName}
                  </div>
                </div>
              </a>
            </Link>
          ) : (
            <>
              <Link href="/auth/signin">
                <a className="mr-2">
                  <Button rounded>Sign In</Button>
                </a>
              </Link>
              <Link href="/auth/signup">
                <a>
                  <Button rounded outlined>
                    Sign Up
                  </Button>
                </a>
              </Link>
            </>
          )}
        </div>
      </Container>
    </header>
  );
}
