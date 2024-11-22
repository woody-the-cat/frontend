"use client";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Home() {
  const [res, setRes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://purr.woody.cat")
      setRes(response.data)
    }
    fetchData()
  }, [])
  return (
    <div>
      <div className="p-8">
        <h1 className="text-4xl font-bold text-white">Random Woody</h1>
        <Image src={res.Image} priority={true} alt={"woody number " + res.ID} title="woody" className="border border-white border-x-4 border-y-4"/>
        <p className="text-white">
          This Woody (ID): {res.ID}<br />
          <a onClick={() => {window.location.reload()}} className="cursor-pointer">New Woody</a><br />
          <a href={"/id/" + res.ID}>This Woody (permaa)</a>
          <br /><br />
          <a href={"https://purr.woody.cat/" + res.ID}>Woody REST API (this Woody)</a><br />
          <a href="https://purr.woody.cat/">Woody REST API (random Woody)</a>
        </p>
      </div>
    </div>
  );
}
