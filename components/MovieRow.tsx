'use client';

import MovieCard from './MovieCard';

export default function MovieRow({ items, title }: { items: any[]; title: string }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="flex gap-4 overflow-x-auto py-2 scroll-snap-row">
        {items.map((it) => (
          <div className="scroll-snap-item" key={it.id}>
            <MovieCard item={it} />
          </div>
        ))}
      </div>
    </section>
  );
}
