import CategoryPill from "../ui/category-pill";

export default function LiveStreamPage() {
    return (
        <div className="relative flex h-screen overflow-hidden">
            <div className="grow overflow-auto">
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
            <div>
                <div className="bg-secondary-dark w-[340px] h-full sticky top-0 z-[50]">
                    <div className="h-full grow">
                        <div className="flex flex-col h-full max-h-full">
                            <div className="text-center border-b-2 w-full py-2 font-bold border-gray-800">
                                Chat
                            </div>
                            <div className="relative flex grow flex-col overflow-hidden h-full">
                                <div className="overflow-y-auto py-3 h-full">
                                    <div className="flex flex-row hover:bg-secondary-lighter p-[0.4rem] rounded-md">
                                        <span className="text-primary font-semibold text-sm cursor-pointer">theholmes</span>
                                        <span className="text-sm font-semibold">: hello</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex grow flex-col gap-x-2 p-2 relative z-[51] bg-dark-lighter">
                                <div className="flex flex-col p-4 gap-y-3">
                                    <input type='text' placeholder="Send Message..." className="w-full text-sm bg-dark-light h-full p-4 rounded-md focus:bg-dark-lighter border border-transparent focus:border-gray-700 outline-0" />
                                    <div className="self-end flex flex-row space-x-2">
                                        <button type='button' className="hover:bg-secondary-lighter p-2 rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 self-center">
                                                <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
                                            </svg>
                                        </button>

                                        <button type='button' className="bg-primary rounded-[4px] p-2 w-fit text-black font-semibold">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}