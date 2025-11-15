export async function fetchAllShows() {
  const res = await fetch('https://api.tvmaze.com/shows', {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Failed to fetch shows');
  return res.json();
}

export async function fetchShowById(id: string) {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Failed to fetch show');
  return res.json();
}


export function getShowImage(show: any, size: 'medium' | 'original' = 'medium') {
  return show?.image?.[size] || '/placeholder.png';
}
