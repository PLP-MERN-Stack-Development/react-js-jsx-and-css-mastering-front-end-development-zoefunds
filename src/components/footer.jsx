import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-8 border-t dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-6 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex items-center justify-between">
          <div>© {new Date().getFullYear()} Your Name</div>
          <div className="space-x-4">
            <a className="hover:underline" href="#privacy">Privacy</a>
            <a className="hover:underline" href="#license">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
}