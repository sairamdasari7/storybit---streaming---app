'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md py-4">
      <div className="w-full flex items-center justify-between px-6">

        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-12 h-12 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-md flex items-center justify-center font-extrabold text-white shadow-md">
            SB
          </div>
          <span className="font-bold text-xl text-white drop-shadow-md">
            StoryBit Streaming
          </span>
        </Link>

        <nav className="flex gap-10 items-center text-lg text-white font-medium shrink-0">
          <a className="hover:text-pink-400 transition cursor-pointer">Home</a>
          <a className="hover:text-pink-400 transition cursor-pointer">Shows</a>
          <a className="hover:text-pink-400 transition cursor-pointer">About</a>
        </nav>

      </div>
    </header>
  );
}
