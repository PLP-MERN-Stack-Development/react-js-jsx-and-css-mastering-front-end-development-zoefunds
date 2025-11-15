import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import Button from '../components/Button';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [q, setQ] = useState('');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError('');
    fetchPosts({ page, limit, q })
      .then(result => {
        if (!isMounted) return;
        setPosts(result.data);
        setTotal(result.total);
      })
      .catch(err => setError(err.message || 'Error'))
      .finally(() => isMounted && setLoading(false));
    return () => { isMounted = false; };
  }, [page, limit, q]);

  const totalPages = Math.ceil(total / limit) || 1;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Posts (JSONPlaceholder)</h1>
        <div className="flex items-center gap-2">
          <input
            value={q}
            onChange={e => { setQ(e.target.value); setPage(1); }}
            className="px-3 py-2 rounded border dark:bg-gray-800"
            placeholder="Search titles..."
          />
          <Button onClick={() => { setQ(''); setPage(1); }} variant="secondary">Clear</Button>
        </div>
      </div>

      {loading ? (
        <Card><div>Loading...</div></Card>
      ) : error ? (
        <Card><div className="text-red-500">Error: {error}</div></Card>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-4">
            {posts.map(p => (
              <Card key={p.id}>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{p.body}</p>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-between mt-4">
            <div>Page {page} of {totalPages}</div>
            <div className="space-x-2">
              <Button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} variant="secondary">Prev</Button>
              <Button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}