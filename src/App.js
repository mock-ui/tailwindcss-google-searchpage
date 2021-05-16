import React, { useEffect, useState } from "react";
import TopPanel from "./TopPanel";

const people = [
  { id: 0, name: "Durward Reynolds", unavailable: false },
  { id: 1, name: "Kenton Towne", unavailable: false },
  { id: 2, name: "Therese Wunsch", unavailable: false },
  { id: 3, name: "Benedict Kessler", unavailable: true },
  { id: 4, name: "Katelyn Rohan", unavailable: false },
];

function App() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [cursor, setCursor] = useState(0);
  const [value, setTitle] = useState("");

  function escFunction(event) {
    // alert(value);
    // setTitle((value) => {
    //   fetch(`https://duckduckgo.com/ac/?q=${value}`).then((res) => {
    //     console.log(res);
    //   });
    //   return value;
    // });

    console.log("Down clicked");
    console.log(event.keyCode);
    if (event.keyCode === 9) {
      setShowSuggestion(false);
    }
    if (event.keyCode === 27) {
      console.log("Close");
      setShowSuggestion(false);
    }

    if (event.keyCode === 40) {
      setCursor((currentId) => {
        const nextId = (currentId + 1) % people.length;
        setTitle((value) => people[nextId].name);
        return (currentId + 1) % people.length;
      });
      return;
    }
    if (event.keyCode === 38) {
      setCursor((currentId) => {
        if (currentId === 0) {
          setTitle((value) => people[people.length - 1].name);
          return people.length - 1;
        } else {
          var data = (currentId - 1) % people.length;
          setTitle((value) => people[data].name);
          return (currentId - 1) % people.length;
        }
      });
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => document.removeEventListener("keydown", escFunction);
  }, []);

  return (
    <React.Fragment>
      <div>
        <div class="flex flex-col justify-between space-y-40">
          <TopPanel />

          <div class="">
            <img
              class="mx-auto"
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            />
            <div className="flex flex-col">
              <div class="mt-6  transition-all delay-150 flex flex-row border border-gray-300 focus:border-b-0  p-2  mx-auto w-3/4 sm:w-1/2 space-x-4">
                <div class="flex flex-row flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  placeholder="Search Here"
                  className="w-full outline:none text-gray-800"
                  onClick={() => {
                    setShowSuggestion(true);
                    // document.addEventListener("keydown", escFunction, true);
                  }}
                  // onKeyPress={escFunction}
                  // onKeyPress={(event) => {
                  // document.addEventListener("keydown", escFunction, false);
                  // setShowSuggestion(!showSuggestion);
                  // console.log("onKeyPress", event.key);
                  // if (event.keyCode == 40) {
                  //   console.log("Setting next highlight");
                  //   console.log("current id", presentId);
                  //   var nextId = presentId + 1;
                  //   console.log("next id", nextId);
                  //   setPresentId(nextId);
                  //   console.log(people[presentId]);
                  //   setTitle(people[presentId].name);
                  // }
                  // }}
                  onChange={(event) => setTitle(event.target.value)}
                  value={value}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-red-800 rounded-full cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <div
                className={
                  !showSuggestion
                    ? "hidden"
                    : "hover:shadow-md transition-all delay-150 flex flex-row border border-gray-300 border-t-0  mx-auto w-3/4 sm:w-1/2 space-x-4"
                }
              >
                <ul className="w-full">
                  {people.map((person) => (
                    <li
                      key={person.id}
                      onClick={() => {
                        setTitle(person.name);
                        setCursor(person.id);
                      }}
                      className={
                        cursor === person.id
                          ? "bg-red-100 p-1 pl-12 py-1.5 delay-75 cursor-pointer font-light"
                          : "pl-12 py-1.5  cursor-pointer hover:bg-red-100 font-light"
                      }
                    >
                      {person.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div class="flex flex-row justify-center items-center space-x-4 mt-6">
              <button
                class="bg-gray-100 p-1.5 rounded-md text-gray-600 px-3 hover:shadow-md"
                onClick={() => console.log(value)}
              >
                Google Search
              </button>
              <button class="bg-gray-100 p-1.5 rounded-md text-gray-600 px-3 hover:shadow-md">
                I'm Feeling Lucky
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
