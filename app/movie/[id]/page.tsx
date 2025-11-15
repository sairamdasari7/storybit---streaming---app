import { fetchShowById, getShowImage } from '@/lib/tvmaze';
import Image from 'next/image';

export default async function ShowDetail({ params }: { params: { id: string } }) {
  const show = await fetchShowById(params.id);

  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative md:col-span-1 h-[420px] md:h-[520px] rounded overflow-hidden">
          <Image src={getShowImage(show, 'original')} alt={show.name} fill className="object-cover rounded" />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{show.name}</h1>
          <p className="text-sm text-gray-300 mb-4">{show.premiered} • {show.rating?.average ?? 'N/A'}</p>
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: show.summary || '' }} />
        </div>
      </div>
    </section>
  );
}
