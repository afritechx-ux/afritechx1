'use client';

import React, { useState } from 'react';
import { EmptyState } from '@/components/ui';

interface Document {
  id: string;
  fileName: string;
  fileType: string;
  fileUrl: string;
  sizeBytes: number;
  createdAt: string | Date;
}

const formatSize = (bytes: number) => {
  if (!bytes) return '—';
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), sizes.length - 1);
  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(1))} ${sizes[i]}`;
};

const formatDate = (d: string | Date) =>
  new Date(d).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });

export default function DocumentList({ initialDocuments }: { initialDocuments: Document[] }) {
  const [query, setQuery] = useState('');
  const q = query.toLowerCase();
  const docs = initialDocuments.filter((d) => d.fileName.toLowerCase().includes(q) || d.fileType.toLowerCase().includes(q));

  return (
    <div className="card overflow-hidden">
      <div className="border-b border-line p-4">
        <label htmlFor="doc-search" className="sr-only">Search documents</label>
        <input
          id="doc-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or type"
          className="input max-w-sm"
        />
      </div>

      {docs.length === 0 ? (
        <EmptyState icon="folder_open" title="No documents found" text={query ? 'No documents match your search.' : 'Shared files will appear here.'} />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="border-b border-line bg-surface-raised text-xs uppercase tracking-wider text-ink-subtle">
              <tr>
                <th scope="col" className="px-5 py-3 font-semibold">Name</th>
                <th scope="col" className="px-5 py-3 font-semibold">Type</th>
                <th scope="col" className="px-5 py-3 font-semibold">Added</th>
                <th scope="col" className="px-5 py-3 font-semibold">Size</th>
                <th scope="col" className="px-5 py-3"><span className="sr-only">Action</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {docs.map((d) => {
                const link = d.fileType.toUpperCase() === 'FIGMA' || d.fileType.toUpperCase() === 'LINK';
                return (
                  <tr key={d.id} className="hover:bg-surface-raised/60">
                    <td className="px-5 py-4 font-medium">{d.fileName}</td>
                    <td className="px-5 py-4"><span className="badge">{d.fileType.toUpperCase()}</span></td>
                    <td className="px-5 py-4 text-ink-muted">{formatDate(d.createdAt)}</td>
                    <td className="px-5 py-4 text-ink-muted">{formatSize(d.sizeBytes)}</td>
                    <td className="px-5 py-4 text-right">
                      <a href={d.fileUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
                        {link ? 'Open' : 'Download'}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
