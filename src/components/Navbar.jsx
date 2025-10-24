
import { BellIcon, PhoneIcon, UserCircleIcon } from '@heroicons/react/24/outline'; // Install @heroicons/react

function Navbar() {
  return (
   
    <nav className="flex justify-between items-center p-4 shadow-lg border-b border-blue-200 bg-white">
      <div className="flex items-center flex-col space-y-1">
        <div className="text-xl font-bold text-gray-800 border border-black-800 px-2 py-1 ml-6">LOGO</div>
        <div className="w-6 h-6 bg-white-200 rounded-sm text-[7px] font-bold flex items-center flex-col ml-4">ESTD<span>2025</span></div> 
      </div>

      <div className="flex items-center space-x-4 mr-6">
        <button className="p-2 text-gray-500 hover:text-gray-700 transition duration-150">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
        </button>

     
        <button className="p-2 text-gray-500 hover:text-gray-700 transition duration-150">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </button>

        <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-semibold cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.73 0-5.357-.406-7.772-1.16a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;