import { useState } from "react";

export default function App() {
  return (
    <>
      <BgChanger />
    </>
  );
}

function BgChanger() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="h-screen flex items-end justify-center w-full"
        style={{ backgroundColor: color }}
      >
        <div>
          <ul className="flex gap-4 relative bottom-14 bg-white px-6 py-2 rounded-full text-black">
            <li>
              <button
                className="cursor-pointer text-lg font-semibold border-black px-4 rounded-full border text-red-700"
                onClick={() => setColor("red")}
              >
                Red
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer text-lg font-semibold border-black px-4 rounded-full border text-blue-700"
                onClick={() => setColor("blue")}
              >
                Blue
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer text-lg font-semibold border-black px-4 rounded-full border text-green-700"
                onClick={() => setColor("green")}
              >
                Green
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer text-lg font-semibold border-black px-4 rounded-full border text-purple-700"
                onClick={() => setColor("purple")}
              >
                Purple
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer text-lg font-semibold border-black px-4 rounded-full border text-yellow-700"
                onClick={() => setColor("yellow")}
              >
                Yellow
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer text-lg font-semibold border-black px-4 rounded-full border text-pink-700"
                onClick={() => setColor("pink")}
              >
                Pink
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
