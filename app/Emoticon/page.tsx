import Emoticon from "@/components/Emoticon"

const EmoticonPage = async () => { 
    return (
        <div className="w-full flex flex-wrap gap-5 p-4 justify-center">
         <Emoticon name=" MASEH" defaultEmoticon="HAPPY" />
         <Emoticon name=" NYENI" defaultEmoticon="SAD" />
         <Emoticon name=" CB"    defaultEmoticon="ANGRY" />
        </div>
    )
}
export default EmoticonPage