'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([])
  const [getId, setId] = useState(null);
  const getData = async () => {
    try {
      const response = await fetch(
        `https://ruby-smiling-alligator.cyclic.app/articles`,
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
      setData(result);
      console.log(result)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
console.log(data.data)





  const datum = [
    {
      id: 1,
      article_name: "Article Logo",
      article_detail: "This is article logo that use in this website",
      article_photo:
        "https://res.cloudinary.com/dafjb9vn7/image/upload/v1698795623/arts_dxcrqk.png",
    },
    {
      id: 2,
      article_name: "Article Logo",
      article_detail: "This is article logo that use in this website",
      article_photo:
        "https://res.cloudinary.com/dafjb9vn7/image/upload/v1698795623/arts_dxcrqk.png",
    },
    {
      id: 3,
      article_name: "Article Logo",
      article_detail: "This is article logo that use in this website",
      article_photo:
        "https://res.cloudinary.com/dafjb9vn7/image/upload/v1698795623/arts_dxcrqk.png",
    },
    {
      id: 4,
      article_name: "Article Logo",
      article_detail: "This is article logo that use in this website",
      article_photo:
        "https://res.cloudinary.com/dafjb9vn7/image/upload/v1698795623/arts_dxcrqk.png",
    },
    {
      id: 5,
      article_name: "Article Logo",
      article_detail: "This is article logo that use in this website",
      article_photo:
        "https://res.cloudinary.com/dafjb9vn7/image/upload/v1698795623/arts_dxcrqk.png",
    },
    {
      id: 6,
      article_name: "Article Logo",
      article_detail: "This is article logo that use in this website",
      article_photo:
        "https://res.cloudinary.com/dafjb9vn7/image/upload/v1698795623/arts_dxcrqk.png",
    },
  ];
  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="flex flex-wrap min-h-screen content-start justify-start p-24">
      {datum.map((item) => {
        return (
          <div key={item.id} className="m-2 border rounded-lg shadow-lg" style={{ width: 200 }}>
            <div>
              <img
                src={item.article_photo}
                alt={item.article_name}
              />
              <div className="px-0 py-2">
                <h5 className="px-2 font-medium">{item.article_name}</h5>
              </div>
            </div>
          </div>
        );
      })}
      {data.data?.map((item, index) => {
        return (
          <div key={item.id} className="m-2 border rounded-lg shadow-lg" style={{ width: 200 }}>
            <Link href={`/detail/${item.id}`} >
              <img
                src={item.article_photo}
                alt={item.article_name}
              />
              <div className="px-0 py-2">
                <h5 className="px-2 font-medium">{item.article_name}</h5>
              </div>
            </Link>
          </div>
        );
      })}
    </main>
  );
}
