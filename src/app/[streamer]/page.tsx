import CategoryPill from "../ui/category-pill";

export default function LiveStreamPage() {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="grid grid-cols-4 h-full">
                <div className="col-span-3">
                    <div className="flex flex-col h-full w-full">
                        <div className="w-full h-[70%] bg-gray-400" />
                        <div className="flex flex-row p-4">
                            <div className="flex flex-row flex-1">
                                <div className="w-[5rem] h-[5rem] bg-gray-400 border-primary border-[3px] rounded-full" />
                                <div className="flex flex-col ml-2 gap-2">
                                    <div className="flex flex-row gap-x-2">
                                        <div className="text-xl font-bold">theholmes</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 self-center text-primary">
                                            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                        </svg>

                                    </div>
                                    <div className="text-md">This is a test live stream</div>
                                    <div className="flex flex-row gap-x-1">
                                        <div className="text-sm text-primary">League Of Legends</div>
                                        <CategoryPill />
                                        <CategoryPill />
                                    </div>
                                </div>
                            </div>
                            <div className="justify-self-end"><span className="text-primary text-sm font-semibold">200</span> <span className="text-sm text-gray-500 font-semibold">viewers</span></div>
                        </div>
                        <div className="p-7">
                            <div className="bg-secondary-lighter rounded p-7 shadow">
                                <div className="flex">
                                    <div className="flex flex-col grow gap-1">
                                        <div className="mb text-2xl font-semibold">
                                            About theHolmes
                                        </div>
                                        <div className="font-bold">15,000 followers</div>
                                        <div className="mt-2 text-sm">Lorem ipsum dolor sit amet </div>
                                    </div>
                                    <div className="flex flex-col space-y-3">
                                        <div className="flex w-40 items-center space-x-2 text-xs font-bold text-gray-400 hover:text-primary">
                                            <span className="capitalize">youtube</span>
                                        </div>
                                        <div className="flex w-40 items-center space-x-2 text-xs font-bold text-gray-400 hover:text-primary">
                                            <span className="capitalize">x</span>
                                        </div>
                                        <div className="flex w-40 items-center space-x-2 text-xs font-bold text-gray-400 hover:text-primary">
                                            <span className="capitalize">github</span>
                                        </div>
                                        <div className="flex w-40 items-center space-x-2 text-xs font-bold text-gray-400 hover:text-primary">
                                            <span className="capitalize">discord</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 bg-secondary">
                    <div className="flex flex-col h-full">
                        <div className="text-center border-b-2 w-full py-2 font-bold border-gray-800">
                            Chat
                        </div>
                        <div className="flex-1 flex flex-col gap-x-2 p-2">
                            <div className="flex flex-row">
                                <span className="text-primary font-semibold text-sm">theholmes</span>
                                <span className="text-sm font-semibold">: hello</span>
                            </div>
                        </div>
                        <div className="h-48 bg-secondary-lighter">
                            hi
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}