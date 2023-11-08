export default function StreamerCard() {
    return (
        <li className="flex flex-col gap-1 text-white cursor-pointer">
            <a className="flex h-[2.75rem] w-100 flex-shrink-0 flex-grow-0 basis[2.75rem] items-center justify-center rounded-md hover:bg-secondary-lighter gap-4 overflow-hidden p-[0.375rem] transition-all duration-150 ease-out">
                <div className="h-[1.75rem] w-[1.75rem] flex-shrink-0 flex-grow-0 box-content">
                    <img src="https://files.kick.com/images/user/22152266/profile_image/conversion/e7aa1bc4-bdfb-4839-8b74-e6321e5e5642-thumb.webp" alt="user" className="h-full w-full object-cover rounded-full" />
                </div>
                <div className="w-100 overflow-hidden font-semibold leading-[1]">
                    <div className="overflow-ellipsis whitespace-nowrap">theholmes</div>
                    <div className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-normal text-gray-400">League Of Legends</div>
                </div>
                <div className="flex h-[34px] flex-shrink-0 flex-row flex-nowrap items-center justify-center text-sm font-light">
                    <div className="flex flex-row flex-nowrap items-center justify-end">
                        <div className="h-[0.625rem] w-[0.625rem] rounded-full bg-green-500"></div>
                        <div>3,981</div>
                    </div>
                </div>
            </a>
        </li>
    )
}