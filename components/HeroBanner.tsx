'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroBanner({ show }: any) {
  if (!show) return null;

  const image = show?.image?.original || show?.image?.medium || '/placeholder.png';

  // Normalize HTML to prevent hydration mismatch
  const cleanSummary = (show.summary || "")
    .replace(/\\n/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return (
    <section className="relative h-[56vh] md:h-[64vh] mb-6 rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={show.name}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 70vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

      <div className="absolute bottom-8 left-6 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-extrabold">{show.name}</h1>

        <p
          className="mt-3 line-clamp-3 max-w-xl"
          dangerouslySetInnerHTML={{ __html: cleanSummary }}
        />

        <div className="mt-4 flex gap-3">
          <Link href={`/movie/${show.id}`} className="px-4 py-2 rounded-md bg-white text-black font-semibold">
            View
          </Link>
          <button className="px-4 py-2 rounded-md border border-white/30">
            + My List
          </button>
        </div>
      </div>
    </section>
  );
}
