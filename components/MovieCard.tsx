'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function MovieCard({ item }: any) {
  const img =
    item?.image?.medium ||
    item?.image?.original ||
    "/placeholder.png";

  return (
    <Link href={`/movie/${item.id}`}>
      <div className="block min-w-[140px] md:min-w-[180px] shrink-0">
        <div className="rounded overflow-hidden shadow-lg hover:scale-105 transition-transform">
          <div className="relative w-full h-[210px] md:h-[260px]">
            <Image
              src={img}
              alt={item.name}
              fill
              sizes="(max-width: 768px) 50vw, 180px"
              className="object-cover"
            />
          </div>
          <div className="mt-2 px-1">
            <h3 className="text-sm md:text-base font-medium line-clamp-2">
              {item.name}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
