"use client"
import { Mitr } from 'next/font/google'
const mitr = Mitr({
  weight: ['600'],
  subsets: ['latin'],
})

interface KillProps {
    victimName : string
    action : string
    condition : string
}
export default function KillText(props : KillProps){
    return <>
         <div className="w-full flex flex-col mt-3 items-center space-y-1 text-white text-xl">
            <div>YOUR VICTIM :</div>
            <div className={`${mitr.className} text-green-500`}>{props.victimName}</div>
            <div>ACTION : </div>
            <div className={` ${mitr.className} text-red-500`}>{props.action}</div>
            <div>YOUR CONDITION : </div>
            <div className={` ${mitr.className} text-red-500`}>{props.condition}</div>
    </div>
    </>
}