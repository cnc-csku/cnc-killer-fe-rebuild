"use client"
import { Scanner } from "@yudiel/react-qr-scanner"

export default function App(){
    const handleScan = (data : any) => {
        if (data) {
            console.log(data)
        }
    }

    const handleError = (err : any) => {
        console.log(err)
    }

    return <div>
        <Scanner onScan={handleScan} onError={handleError}/>
    </div>
}