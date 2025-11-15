'use client';

import { useEffect, useState } from "react";
import HeroBanner from '@/components/HeroBanner';
import MovieRow from '@/components/MovieRow';

export default function HomePage() {
  const [shows, setShows] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("https://api.tvmaze.com/shows");
      const data = await res.json();
      setShows(data);
    }
    load();
  }, []);

  if (shows.length === 0) {
    return <div className="pt-24 text-center">Loading...</div>;
  }

  const trending = shows.slice(0, 10);
  const popular = shows.slice(10, 20);
  const more = shows.slice(20, 30);
  const hero = shows[0];

  return (
    <div>
      {hero && <HeroBanner show={hero} />}
      <MovieRow items={trending} title="Trending Shows" />
      <MovieRow items={popular} title="Popular Shows" />
      <MovieRow items={more} title="More to Watch" />
    </div>
  );
}
