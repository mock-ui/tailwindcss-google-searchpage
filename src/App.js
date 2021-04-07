import React from "react";
import sedansvg from "./icon-sedans.svg";
import suvsvg from "./icon-suvs.svg";
import luxurysvg from "./icon-luxury.svg";
function App() {
  return (
    <React.Fragment>
    <div class="flex flex-col justify-between space-y-40">

<div class="flex flex-row space-x-5 justify-end mr-6 items-center pt-4 flex-none">

<a class="font-light text-sm hover:underline cursor-pointer">Gmail</a>

<a class="font-light text-sm hover:underline cursor-pointer">Images</a>

<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">

<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />

</svg>

<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">

<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />

</svg>

</div>

<div class="">

<img class="mx-auto" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />

<div class="my-6 hover:shadow-md transition-all delay-150 flex flex-row border border-gray-300 p-2 rounded-full mx-auto w-3/4 sm:w-1/2 space-x-4">

<div class="flex flex-row flex-none">

<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">

<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />

</svg>

</div>

<input placeholder="Search Here" class="w-full outline:none text-gray-800" />

<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-800 rounded-full cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">

<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />

</svg>

</div>

<div class="flex flex-row justify-center items-center space-x-4">

<button class="bg-gray-100 p-1.5 rounded-md text-gray-600 px-3 hover:shadow-md">Google Search</button>

<button class="bg-gray-100 p-1.5 rounded-md text-gray-600 px-3 hover:shadow-md">I'm Feeling Lucky</button>

</div>

</div>

</div>
    </React.Fragment>
  );
}

export default App;
