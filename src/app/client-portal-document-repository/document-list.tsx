'use client';

import React, { useState } from 'react';

interface Document {
  id: string;
  fileName: string;
  fileType: string;
  fileUrl: string;
  sizeBytes: number;
  createdAt: string | Date;
}

interface DocumentListProps {
  initialDocuments: Document[];
}

export default function DocumentList({ initialDocuments }: DocumentListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocs = initialDocuments.filter((doc) => {
    const query = searchQuery.toLowerCase();
    return (
      doc.fileName.toLowerCase().includes(query) ||
      doc.fileType.toLowerCase().includes(query)
    );
  });

  const formatSize = (bytes: number) => {
    if (!bytes || bytes === 0) return '-';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const formatDate = (dateString: string | Date) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getIcon = (type: string) => {
    const t = type.toUpperCase();
    if (t === 'FIGMA' || t === 'LINK') {
      return <span className="material-symbols-outlined text-purple-400">link</span>;
    }
    if (t === 'ZIP' || t === 'RAR') {
      return <span className="material-symbols-outlined text-yellow-400">folder_zip</span>;
    }
    if (t === 'PDF') {
      return <span className="material-symbols-outlined text-red-400">picture_as_pdf</span>;
    }
    return <span className="material-symbols-outlined text-blue-400">description</span>;
  };

  return (
    <>
      <div className="px-4 py-3">
        <label className="flex flex-col w-full h-12">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-primary/5 border border-primary/20 focus-within:border-primary/50 transition-colors">
            <div className="text-slate-500 flex items-center justify-center pl-4 rounded-l-lg">
              <span className="material-symbols-outlined text-[24px]">search</span>
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 rounded-l-none pl-2 text-base font-normal leading-normal"
              placeholder="Search documents by name or type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </label>
      </div>

      <div className="px-4 py-4 @container">
        <div className="flex overflow-hidden rounded-3xl border border-primary/20 bg-black shadow-sm">
          <table className="flex-1 w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary/10 border-b border-primary/20">
                <th className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal">
                  File Name
                </th>
                <th className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal w-32">
                  Type
                </th>
                <th className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal w-40">
                  Date Uploaded
                </th>
                <th className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal w-24">
                  Size
                </th>
                <th className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal w-32 text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredDocs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-400">
                    <span className="material-symbols-outlined text-4xl mb-3 opacity-50 block">
                      folder_open
                    </span>
                    No documents match your query.
                  </td>
                </tr>
              ) : (
                filteredDocs.map((doc) => (
                  <tr
                    key={doc.id}
                    className="border-b border-primary/10 hover:bg-primary/5 transition-colors group"
                  >
                    <td className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal flex items-center gap-3">
                      {getIcon(doc.fileType)}
                      {doc.fileName}
                    </td>
                    <td className="px-6 py-4 text-sm font-normal leading-normal">
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                        {doc.fileType.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-400 font-light text-sm font-normal leading-normal">
                      {formatDate(doc.createdAt)}
                    </td>
                    <td className="px-6 py-4 text-slate-400 font-light text-sm font-normal leading-normal">
                      {formatSize(doc.sizeBytes)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href={doc.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors text-sm font-semibold inline-flex items-center justify-end w-full gap-1 opacity-0 group-hover:opacity-100"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          {doc.fileType.toUpperCase() === 'FIGMA' ? 'open_in_new' : 'download'}
                        </span>{' '}
                        {doc.fileType.toUpperCase() === 'FIGMA' ? 'Open' : 'Download'}
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
