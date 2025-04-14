"use client"

import Lottie, { useLottie } from "lottie-react"
import Punch from "@/public/animations/punch.json"
import { Button } from "@heroui/button"
import { useState } from "react"
import { Mitr } from 'next/font/google'
const mitr = Mitr({
  weight: ['600'],
  subsets: ['latin'],
})

export default function HomePage(){
    const [play , setIsPlay] = useState(false)

    const LottieObj = useLottie({
        animationData: Punch,
        style: {
            height: "40wh",
            width: "40vw",
        },
        autoplay: false,
        loop: false
    })
    return <>
    <div className="flex flex-col w-full justify-center items-center">
        <div className="text-white text-2xl p-0 m-0">PLAYER NAME</div>
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
    <div className="w-full flex flex-col mt-3 items-center space-y-1 text-white text-xl">
            <div>YOUR VICTIM :</div>
            <div className={`${mitr.className} text-green-500`}>NAME</div>
            <div>ACTION : </div>
            <div className={` ${mitr.className} text-red-500`}>ACTION NAME</div>
            <div>YOUR CONDITION : </div>
            <div className={` ${mitr.className} text-red-500`}>ACTION NAME</div>
    </div>
    </>

}