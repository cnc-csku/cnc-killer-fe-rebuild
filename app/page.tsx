"use client"
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useState } from "react";
import Image from "next/image";
import Tombstone from "@/public/images/tombstone_angle.png"

export default function Landing() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [hasError, setHasError] = useState(false)

  const onSubmit = () => {
    console.log("summit")
    if (password.length == 0) {
      setHasError(true)
      setError("please enter password")
    }else{
      setHasError(false)
      setError("")
    }
  }

  return <div className="container content-center min-w-full flex flex-col justify-center items-center px-10 py-10 overflow-hidden">
    <div className="min-w-96 py-5 px-10 items-center justify-center  place-items-center content-center space-y-5">
      <div className="text-3xl text-white">ENTER ID</div>
      <Input label="enter your id here" type="text" variant="flat" value={password} onValueChange={setPassword}
      ></Input>
      {hasError && <div className="text-red-500">{`Error : ${error}`}</div>}
      <Button onPress={onSubmit} className="bg-red-500 text-white p-5 text-xl px-7" >start</Button>
    </div>
    <div className="w-full flex mt-10 justify-end">
      <Image src={Tombstone} width={150} alt="cnc-killer-tombstone"/>
    </div>
  </div >
}