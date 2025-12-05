import Image from "next/image"
import { ReactNode } from "react"
type Prop = {
    imageSource: string,
    name: string,
    children: ReactNode,
}
export default function Card(prop : Prop) {
    return (
    <div className="w-full md:w-60 p-10 border rounded-sm flex flex-col items-center">
                <Image
                alt="image1"
                width={100} height={100}
                className="rounded-full"
                src={prop.imageSource}
                />
                <strong className="mt-3 text-center font-extrabold text-lg">
                    {prop.name} 
                </strong>
                <div className="font-thin text-sm text-center text-gray-400 ">
                    {prop.children}
    
                </div>
                </div>            
    )
}