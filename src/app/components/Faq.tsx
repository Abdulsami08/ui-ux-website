import * as Accordion from '@radix-ui/react-accordion';
import plus from "../../../public/assets/Plus.svg"
import Image from 'next/image';

const items = [
    {
        Question: "Q1: Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
        Question: "Q2: Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
        Question: "Q3: Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
        Question: "Q4: Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
]

export default function Faq(){
    return(
        <div className="flex flex-col w-full py-[48px ] lg:py-[60px] lg:flex-row lg:gap-x-6">
            <div className="lg:py-[32px] pr-[56px]">
                <h3 className="text-[#EB2891] text-[16px] font-medium ">Frequently Asked Questions</h3>
                <h1 className="font-medium text-[#172026] py-4 text-2xl">
                    Lets clarify some of your questions
                    </h1>
                    <p className="text-[#36485C] pb-[24px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore </p>
            </div>
            <div>
                <Accordion.Root
                 type="single"
                 defaultValue='item 1'
                 collapsible
                 className='flex flex-col gap-y-4'
                 >
                    {items.map((items , idx)=>(
                        <div key={idx}>
                            <Accordion.Item
                            value={`item-${idx + 1}`}
                            className='bg-[#E3F1FF] p-[16px] rounded-[8px] '
                            >
                                <Accordion.Header>
                                    <Accordion.Trigger className='flex w-full items-center justify-between'>
                                        <p className='text-left font-medium text-[#172026]'>{items.Question}</p>
                                        <span>
                                            <Image src={plus} alt='plus sign' className='h-10 w-10'/>
                                        </span>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content>
                                    <p className='pt-2 text-[#36485C]'>{items.Answer}</p>
                                </Accordion.Content>
                            </Accordion.Item>
                        </div>
                    ))}  
                </Accordion.Root>
            </div>
        </div>
    )

}