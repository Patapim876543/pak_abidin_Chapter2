"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// this told that component is a
// client component
type Props = {
    name: string;
    defaultEmoticon: "HAPPY" | "SAD" | "ANGRY";
}
const Emoticon = (prop: Props) => {
    /**create state to store
     * emoticon value that will be
     * change every time
     */
    const [emoticon, setEmoticon] = useState<"HAPPY" | "SAD" | "ANGRY">(prop.defaultEmoticon)
    const [sourceImage, setSourceImage] = useState<string>("/globe.svg")
    useEffect(() => {
        if (emoticon === "HAPPY") {
            setSourceImage("/Mash amba3.jpeg");
        } else if (emoticon === "SAD") {
            setSourceImage("/Mash amba2.jpeg");
        } else if (emoticon === "ANGRY") {
            setSourceImage("/Mash amba.jpeg");
        }
    }, [emoticon]);
    return (
        <div className="w-48 flex flex-col items-center gap-3 p-3 rounded-md">
            <strong>
                Hi I am{prop.name},
                i am steve{emoticon}
            </strong>
            <Image
                width={100}
                height={100}
                alt="My emoticon"
                className="size-36"
                src={sourceImage } />

                <select className="w-full p-2 border rounded text-red-400"
                    value={emoticon}
                    onChange={e => setEmoticon(e.target.value as "HAPPY" | "SAD" | "ANGRY")}>
                    <option value="HAPPY">HAPPY</option>
                    <option value="SAD">SAD</option>
                    <option value="ANGRY">ANGRY</option>

                </select>


        </div>
    )


}
export default Emoticon