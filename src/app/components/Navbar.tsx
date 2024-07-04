import Image from "next/image"
import logo from "../../../public/assets/Logo.svg"
import user from "../../../public/assets/User.svg"
import menu from "../../../public/assets/Menu.svg"

const Navlinks = [
    {name: 'Features'},
    {name: 'Pricing'},
    {name: 'Enterprise'},
    {name: 'Careeres'}
]

export function Navbar(){
    return(
        <div className="flex w-full justify-between px-[20px] py-[26px] lg:container lg:mx-auto lg:px-20">
            <div className="flex items-center">
                <Image src={logo} alt="logo"/>
                <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                    {Navlinks.map((items, index)=>(
                        <p  className="text-[#36485C] font-medium" key={index}>{items.name}</p>
                    ))}
                </div>
            </div>
            <div className="flex gap-x-5">
                <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">Open An Account</p>
                <div className="flex items-center gap-x-2">
                    <Image src={user} alt="user profile"/>
                    <span className="hidden font-medium text-[#36485C] lg:block">sign in</span>
                </div>
                <div>
                    <Image src={menu} alt="menu bar" className="lg:hidden"/>
                </div>
            </div>

        </div>
    )
}