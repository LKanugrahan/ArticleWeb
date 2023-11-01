import React from 'react'
import Link from "next/link";

function Nav({title}) {
  return (
    <nav className="mx-auto p-5 shadow-lg rounded-b-lg flex justify-between">
    <div className="flex">
      <img
        className="rounded-lg"
        src={
          "https://res.cloudinary.com/dafjb9vn7/image/upload/v1698795623/arts_dxcrqk.png"
        }
        width={50}
        height={50}
      ></img>
      <Link href={'/'} className="px-4 text-xl font-semibold self-center">{title}</Link>
    </div>
    <div className="flex"><Link href={`/form`} className="text-l self-center font-semibold">Post</Link></div>
  </nav>
  )
}

export default Nav