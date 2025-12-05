import Card from "@/components/Header/Card";
import Image from "next/image";

export default function LearnComponentPage() {

    return ( 
    <div>
        <div className="w-full p-10 flex flex-wrap gap-5 justify-center">
        <div className="w-full md:w-300 p-10 rounded-sm flex items-center text-center space-x-6">
        <Card
        imageSource="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
         name="avatar "
            >avatar  
        </Card>
                <Card
        imageSource="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
         name="avatar "
            >avatar    
        </Card>
                <Card
        imageSource="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
         name="avatar "
            >avatar    
        </Card>
         <Card
        imageSource="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
         name="avatar "
            >avatar  
        </Card>
         <Card
        imageSource="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
         name="avatar "
            >avatar  
        </Card>
        
        </div>
        </div>

    </div>
    )
}