"use client"
import Lottie from "lottie-react"
import DeadAnimation from "@/public/animations/dead.json"
import { Button } from "@heroui/button"
export default function DeadPage(){
    return <>
        <center >
            <div className="text-3xl text-red-500">YOUR ARE DEAD</div>
            <Lottie animationData={DeadAnimation} style={{height : "40vh"}}/>
            <Button color="success" className="mt-6 text-white p-8 text-3xl"> REVIVE</Button>
        </center>
    </>
}