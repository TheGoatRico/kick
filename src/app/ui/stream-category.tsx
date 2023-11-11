export default function StreamCategory() {
    return (
        <div className="flex flex-col">
            <div className="w-36 h-52 bg-gray-400 rounded-md cursor-pointer hover:bg-green-500 transition-all duration-250 ease-in-out hover:border-4 hover:rounded-lg hover:border-green-400"></div>
            <span className="font-semibold cursor-pointer hover:text-green-400">Just Chatting</span>
            <span className="text-sm text-gray-400">39,000 viewers</span>
            <span className="bg-[#202225] rounded-full px-2 mt-2 w-fit text-[0.75rem] text-gray-500 font-semibold">IRL</span>
        </div>
    )
}