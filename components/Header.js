import Image from "next/Image";
import { useRouter } from "next/dist/client/router";
import { useRef } from "react";
import { XIcon , MicrophoneIcon, SearchIcon} from "@heroicons/react/solid";
import Avatar from "../components/Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
    const router=useRouter();
    const searchInputRef = useRef(null);

    const search = e =>{
         e.preventDefault();
         const term = searchInputRef.current.value;

         if(!term) return;
         
         router.push(`/search?term=${term}`);
    }

    const myLoader = ({ src }) => {
        return "https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
      };

    return (
        <header className="sticky top-0 bg-white" >
          <div className="flex  w-full p-6 items-center " >
             <Image
          loader={myLoader}
          src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          alt="Google Logo"
          onClick={()=> router.push('/')}
          className="cursor-pointer mr-auto"
        />
        <form className="flex flex-grow px-6 py-3 ml-4 mr-4 border border-gray-200 rounded-full shadow-lg max-w-2xl items-center">
        <input ref={searchInputRef}  type="text" className="flex-grow w-full focus:outline-none " />
        <XIcon className="h-5 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3" 
        onClick={()=> (searchInputRef.current.value= "")}
        />
        <MicrophoneIcon className=" mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
        <SearchIcon className="h-6  text-blue-500 hidden sm:inline-flex " />
        <button hidden type="submit" onClick={search} >Search</button>
        </form>
        <Avatar className="ml-auto" url="https://i.stack.imgur.com/34AD2.jpg" />
        </div>
        <HeaderOptions/>

        
        </header>
        // headeroptions
       

      
    )
}

export default Header
