"use client"

import { useLottie } from "lottie-react"
import Punch from "@/public/animations/punch.json"
import { Button } from "@heroui/button"
import { useState } from "react"
import KillText from "@/components/kill"
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
  } from "@heroui/drawer";
import { useDisclosure } from "@heroui/use-disclosure"
import Image from "next/image"
import Placeholder from "@/public/images/placeholder-1024x1024.png"
  

export default function HomePage(){
    const [play , setIsPlay] = useState(false)
    const {isOpen , onOpen , onOpenChange} = useDisclosure();
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
    <div className="flex space-x-5">
    <Button className="bg-red-500 text-white text-xl" onPress={() => {
        if (play) {
            LottieObj.stop()
            setIsPlay(false)
        }
        LottieObj.play()
        setIsPlay(true)
    }}>KILL</Button>
    <Button className="bg-gray-500 text-white text-xl" onPress={onOpen}>DIED</Button>
    <Drawer size="lg" placement="bottom" isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent className="flex items-center bg-slate-50">
            <DrawerHeader className="text-2xl">HERE IS QRCODE</DrawerHeader>
                <DrawerBody className="flex items-center">
                    <Image src={Placeholder} alt="placeholder" width={270}/>
                    <div className="text-red-500">noted : give to someone that killed you</div>
                </DrawerBody>
        </DrawerContent>
    </Drawer> 
    </div>
    </div>
    <KillText victimName="name" action="die" condition="die too" ></KillText>
    </>

}