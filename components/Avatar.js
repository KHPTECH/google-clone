
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Avatar({ className }) {
  
  return (
    // <Img
    //   loader={myLoader}
    //   className={` rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ml-auto ${className}`}
    //   src={url}
    //   alt="avatar"
    //   height='40px'
    //   width='40px'
    // />
    <AccountCircleIcon className={`h-80 w-80 text-blue-600 rounded-full cursor-pointer transition duration-150 transform hover:scale-125 ${className}`}/>
  );
}

export default Avatar;
