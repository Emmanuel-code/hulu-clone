// import { useRouter } from "next/router"
import { useRouter } from "next/dist/client/router"
import request from "../utils/requests"

function Nav() {
    const router = useRouter()
    return (
    <nav className='relative'>
        <div className='scrollbar-hide flex px-10 overflow-x-scroll sm:px-20 space-x-10 sm:space-x-20 text-2xl whitespace-nowrap'>
            {Object.entries(request).map(([key,{title,url}])=>
            (
                <h2 onClick={()=>router.push(`/?genre=${key}`)} key={key} className='hover:text-white active:text-red-500 cursor-pointer transition duration-100 transform hover:scale-150 last:pr-24'>{title}</h2>
            ))}
        </div>
        <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A]  h-10 w-1/12 '/>
        </nav>
    )
}

export default Nav
