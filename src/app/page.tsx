import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Featured Streams</h2>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col">
            <div className="w-80 h-52 bg-gray-400 rounded-md"></div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col leading-tight mt-2">
                <span>OG Fortnite W/ Dr Disrespect</span>
                <span className="text-sm text-gray-400">Ninja</span>
              </div>
              <span className="text-sm hover:text-green-500 cursor-pointer">Fortnite</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-80 h-52 bg-gray-400 rounded-md"></div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col leading-tight mt-2">
                <span>OG Fortnite W/ Dr Disrespect</span>
                <span className="text-sm text-gray-400">Ninja</span>
              </div>
              <span className="text-sm hover:text-green-500 cursor-pointer">Fortnite</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-80 h-52 bg-gray-400 rounded-md"></div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col leading-tight mt-2">
                <span>OG Fortnite W/ Dr Disrespect</span>
                <span className="text-sm text-gray-400">Ninja</span>
              </div>
              <span className="text-sm hover:text-green-500 cursor-pointer">Fortnite</span>
            </div>
          </div>
        </div>
        <div className="hidden border-b-2 border-secondary-lighter lg:block mt-10" />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-4">Top Live Categories</h2>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col">
            <div className="w-36 h-52 bg-gray-400 rounded-md"></div>
            <span className="font-semibold">Just Chatting</span>
            <span className="text-sm text-gray-400">39,000 viewers</span>
            <span className="bg-[#202225] rounded-full px-2 w-fit text-[0.75rem] text-gray-500 font-semibold">IRL</span>
          </div>
          <div className="flex flex-col">
            <div className="w-36 h-52 bg-gray-400 rounded-md"></div>
            <span className="font-semibold">Just Chatting</span>
            <span className="text-sm text-gray-400">39,000 viewers</span>
            <span className="bg-[#202225] rounded-full px-2 w-fit text-[0.75rem] text-gray-500 font-semibold">IRL</span>
          </div>
          <div className="flex flex-col">
            <div className="w-36 h-52 bg-gray-400 rounded-md"></div>
            <span className="font-semibold">Just Chatting</span>
            <span className="text-sm text-gray-400">39,000 viewers</span>
            <span className="bg-[#202225] rounded-full px-2 w-fit text-[0.75rem] text-gray-500 font-semibold">IRL</span>
          </div>
          <div className="flex flex-col">
            <div className="w-36 h-52 bg-gray-400 rounded-md"></div>
            <span className="font-semibold">Just Chatting</span>
            <span className="text-sm text-gray-400">39,000 viewers</span>
            <span className="bg-[#202225] rounded-full px-2 w-fit text-[0.75rem] text-gray-500 font-semibold">IRL</span>
          </div>
          <div className="flex flex-col">
            <div className="w-36 h-52 bg-gray-400 rounded-md"></div>
            <span className="font-semibold">Just Chatting</span>
            <span className="text-sm text-gray-400">39,000 viewers</span>
            <span className="bg-[#202225] rounded-full px-2 w-fit text-[0.75rem] text-gray-500 font-semibold">IRL</span>
          </div>
          <div className="flex flex-col">
            <div className="w-36 h-52 bg-gray-400 rounded-md"></div>
            <span className="font-semibold">Just Chatting</span>
            <span className="text-sm text-gray-400">39,000 viewers</span>
            <span className="bg-[#202225] rounded-full px-2 w-fit text-[0.75rem] text-gray-500 font-semibold">IRL</span>
          </div>
          <div className="flex flex-col">
            <div className="w-36 h-52 bg-gray-400 rounded-md"></div>
            <span className="font-semibold">Just Chatting</span>
            <span className="text-sm text-gray-400">39,000 viewers</span>
            <span className="bg-[#202225] rounded-full px-2 w-fit text-[0.75rem] text-gray-500 font-semibold">IRL</span>
          </div>
        </div>
        <div className="hidden border-b-2 border-secondary-lighter lg:block mt-10" />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-4">Top Live Categories</h2>
        <div className="flex flex-row gap-5">
          <div className="w-52 h-16 bg-gray-400 rounded-md"></div>
          <div className="w-52 h-16 bg-gray-400 rounded-md"></div>
          <div className="w-52 h-16 bg-gray-400 rounded-md"></div>
          <div className="w-52 h-16 bg-gray-400 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
