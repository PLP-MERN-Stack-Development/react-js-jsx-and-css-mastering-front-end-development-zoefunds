// simple API wrapper for JSONPlaceholder posts
const BASE = 'https://jsonplaceholder.typicode.com';

export async function fetchPosts({ page = 1, limit = 10, q = '' } = {}) {
  const start = (page - 1) * limit;
  const url = `${BASE}/posts`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch posts');
  const all = await res.json();
  const filtered = q
    ? all.filter(p => p.title.toLowerCase().includes(q.toLowerCase()))
    : all;
  const pageData = filtered.slice(start, start + limit);
  return { total: filtered.length, data: pageData };
}