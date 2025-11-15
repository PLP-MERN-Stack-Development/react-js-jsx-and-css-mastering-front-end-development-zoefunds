import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Card className="text-center">
      <h2 className="text-2xl font-bold">404 - Not Found</h2>
      <p className="mt-2">The page you're looking for doesn't exist.</p>
      <div className="mt-4">
        <Link to="/" className="underline">Go home</Link>
      </div>
    </Card>
  );
}