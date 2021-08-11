/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import Image from "next/Image";
import { SearchIcon } from "@heroicons/react/outline";
import { Input } from "postcss";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/dist/client/router";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


export default function Home() {
  const router=useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term =searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`);
  };

  const myLoader = ({ src }) => {
    return "https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  };

  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About </p>
          <p className="link"> Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link"> Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer" />
          
          {/* <Avatar  /> */}
          <AccountCircleIcon className="h-10 w-10  text-blue-600 rounded-full cursor-pointer transition duration-150 transform hover:scale-125 "/>
        </div>
      </header>
      {/* body */}
      <form className="flex flex-col items-center mt-20 flex-grow  w-11/12">
        <Image
          loader={myLoader}
          src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl ">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input ref={searchInputRef} type="text" className="flex-grow  focus:outline-none" />
          <MicrophoneIcon className="h-5 " />
        </div>
        {/* search button */}

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search} >Google Search</button>
          <button className="btn" onClick={search} >I&apos;m Feeling Lucky</button>
        </div>
      </form>

      {/* footer */}
      <Footer />
    </div>
  );
}

// reactStrictMode: true,
