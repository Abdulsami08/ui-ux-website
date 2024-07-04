import Image from "next/image"
import blueArow from "../../../public/assets/blue-button.svg"
import gradient from "../../../public/assets/Gradient.svg"
import heroImage from "../../../public/assets/Image.svg"
import googleImage from "../../../public/assets/Google.svg"
import slack from "../../../public/assets/Slack.svg"
import Trustpilot from "../../../public/assets/Trustpilot.svg"
import cnn from "../../../public/assets/CNN.svg"
import clutch from "../../../public/assets/Clutch.svg"
import Link from "next/link"

export function Hero() {
    return (
        <div className="pt-4 lg:pt-10 ">
            <div className="px-[20px] lg:px-[280px]">
                <h1 className="text-center text-[32px] leading-[40px] font-semibold text-[#172026] lg:text-[64px] lg:leading-[72px]">
                    Start Monitoring Your Website like a Pro
                </h1>
                <p className="text-center pt-6 text-[#36485C] lg:text-[18px] leading-7">Get a bird eye view with our customizable dashboard. Stay on top of things!
                    Revamp your work Process with our game-changing feature. Boost productivity
                    and efficiency!
                </p>
                <div className="flex w-full pt-8 justify-center gap-x-6">
                    <button className="bg-[#4328EB] w-1/2 py-4 px-8 lg:w-fit">Try For Free</button>
                    <button className="text-[#4328EB] w-1/2 flex items-center justify-center gap-x-2 lg:w-fit">View Pricing
                        <span><Image src={blueArow} alt="Arrow" /></span></button>
                </div>
            </div>
            <div className="relative flex h-full w-full justify-center lg:mt-20 ">
                <Image src={gradient} alt="gradient"
                 className="min-h-[500px] w-full object-cover lg:h-auto"
                 />
                <div className="absolute bottom-5 flex w-full flex-col items-center">
                    <Image src={heroImage} alt="hero image" className="-ml-4 h-[310px] lg:h-[700px] object-contain"/>

                <div className="flex flex-col w-full items-center lg:container lg:flex-row lg:justify-between lg:px-20">
                    <p className="text-[#ffff] text-center lg:text-[18px]">Trusted by these companies     
                    </p>
                    <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
                     <Image src={googleImage} alt="google image"/>
                        <Image src={slack} alt="slack"/>
                        <Image src={Trustpilot} alt="trustpilot"/>
                        <Image src={cnn} alt="cn"/>
                        <Image src={clutch} alt=""/>
                    </div>
                </div>

                </div>
            </div>
        </div>


    )
}