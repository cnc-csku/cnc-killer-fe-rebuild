"use client"
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("")
  const [error, serError] = useState("")
  return <div className="container content-center min-w-full flex flex-col justify-center items-center px-10 py-10">
    <div className="min-w-96 py-5 px-10 items-center justify-center  place-items-center content-center space-y-5">
      <label className="text-3xl">ENTER ID</label>
      <Input label="enter your id here" type="text" variant="flat" value={password} onValueChange={setPassword}
      ></Input>
    <div className="hidden">{`Error : ${error}`}</div>
    <Button className="bg-red-500 text-white p-5 text-xl px-7">start</Button>
  </div>
  </div >  
}