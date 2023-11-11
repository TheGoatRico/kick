import Link from "next/link";
import StreamCategory from "./ui/stream-category";
import StreamGroup from "./ui/stream-group";

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
          <StreamCategory />
          <StreamCategory />
          <StreamCategory />
          <StreamCategory />
          <StreamCategory />
          <StreamCategory />
        </div>
        <div className="hidden border-b-2 border-secondary-lighter lg:block mt-10" />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-4">Top Live Categories</h2>
        <div className="flex flex-row gap-5">
          <StreamGroup />
          <StreamGroup />
          <StreamGroup />
          <StreamGroup />
        </div>
      </div>
    </div>
  );
}
