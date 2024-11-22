"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import Image from "next/image";
import Link from 'next/link'

export default function WoodyByID() {
    const params = useParams()
    const [res,setRes] = useState([]);
    const [error,setError] = useState();

    const id = params.id
    useEffect(() => {
        async function fetchData() {
            try {
            const response = await axios.get(`https://purr.woody.cat/${id}`)
            setRes(response.data)
            } catch(err) {
                setError(true)
            }
        }
        fetchData()
    }, []);

    if(error) {
        return(
            <div>
                <h1 className="text-white text-4xl font-bold">An error has occoured.</h1>
                <p className="text-white">This is likely due to your search.<br /><Link href="/">Return to homepage.</Link></p>
            </div>
        )
    } else {
        return (
            <div>
              <div className="p-8">
                <h1 className="text-4xl font-bold text-white">Woody by ID</h1>
                <Image src={res.Image}  width={512} height={512} alt={"woody number " + id} title="woody" className="border border-white border-x-4 border-y-4"/>
                <p className="text-white">
                  This Woody (ID): {id}<br />
                  <Link href="/">Random Woody</Link>
                  <br /><br />
                  <Link href={"https://purr.woody.cat/" + id}>Woody REST API (this Woody)</Link><br />
                  <Link href="https://purr.woody.cat/">Woody REST API (random Woody)</Link>
                </p>
              </div>
            </div>
          );
    }
}
