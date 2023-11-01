'use client'
import React from 'react'
import { useEffect, useState } from "react";
function Detail({params}) {
    const [dataId, setDataId] = useState()
    const getDataId = async () => {
        try {
          const response = await fetch(
            `https://ruby-smiling-alligator.cyclic.app/articles/${params.id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
    
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
    
          const result = await response.json();
          setDataId(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      useEffect(()=>{
        getDataId()
      },[])
  return (
    <main className="flex flex-wrap min-h-screen content-start justify-start p-24">
      {dataId?.data.map((item, index) => {
        return (
          <div key={item.id} className="m-2">
            <div className='flex'>
              <img className='w-80 mr-5'
                src={item.article_photo}
                alt={item.article_name}
              />
              <div>
                <p className="p-2 text-2xl font-bold">{item.article_name}</p>
                <p className="p-2 font-medium">{item.article_detail}</p>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  )
}

export default Detail