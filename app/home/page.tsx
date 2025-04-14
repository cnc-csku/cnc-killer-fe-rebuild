"use client"

import Lottie, { useLottie } from "lottie-react"
import Punch from "@/public/animations/punch.json"
import { Button } from "@heroui/button"
import { useState } from "react"

export default function HomePage(){
    const [play , setIsPlay] = useState(false)

    const LottieObj = useLottie({
        animationData: Punch,
        style: {
            height: "50vh",
            width: "50vw",
        },
        autoplay: false,
        loop: false
    })
    return <>
    <div className="flex flex-col w-full mt-5 justify-center items-center">
        <div className="text-white text-2xl p-0 m-0">test</div>
    <div className="p-0 m-0">{LottieObj.View}</div>
    <Button onPress={() => {
        if (play) {
            LottieObj.stop()
            setIsPlay(false)
        }
        LottieObj.play()
        setIsPlay(true)
    }}>press me</Button>
    </div>
    </>

}