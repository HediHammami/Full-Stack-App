"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type User = {
  image: string;
  name: string;
};

function Logged({ image, name }: User) {
  return (
    <li className="flex gap-8 items-center">
      <button
        onClick={() => signOut()}
        className="bg-gray-700 text-white text-sm px-6 py-2 rounded-xl disabled:opacity-25"
      >
        Sign Out
      </button>
      <Link href={`/dashboard`}>
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className="w-14 rounded-full"
        />
      </Link>
    </li>
  );
}

export default Logged;
