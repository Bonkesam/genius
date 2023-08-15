'use client';

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
    {
        name: "Lavender",
        avatar: "L",
        title: "Prompt Engineer",
        description: "This is such an amazing tool for prompt design."
    },
    {
        name: "Joy",
        avatar: "J",
        title: "Prompt Engineer",
        description: "This is such an amazing tool for prompt design."
    },
    {
        name: "Tracy",
        avatar: "T",
        title: "Prompt Engineer",
        description: "This is such an amazing tool for prompt design."
    },
    {
        name: "Nashan",
        avatar: "N",
        title: "Prompt Engineer",
        description: "This is such an amazing tool for prompt design."
    },
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-centertext-4xl text-white font-etrabold mb-10"> Testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                   <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>                                
                            </CardTitle>
                            <CardContent>
                                {item.description}
                            </CardContent>
                        </CardHeader>
                   </Card>
                  
                ))}
            </div>
        </div>
    )
}
export default LandingContent;