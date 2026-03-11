import React from 'react';

export default function AfritechxClientPortalDocumentRepository() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">

<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1">

<div className="flex flex-wrap justify-between items-end gap-3 p-4">
<div className="flex min-w-72 flex-col gap-2">
<h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-[32px] font-bold leading-tight">Documents &amp; Deliverables</h1>
<p className="text-slate-400 font-light text-sm font-normal leading-normal">Manage and download shared files for your projects</p>
</div>
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-slate-900 hover:bg-primary/90 transition-colors text-sm font-bold leading-normal">
<span className="material-symbols-outlined mr-2 text-[18px]">upload</span>
<span className="truncate">Upload Document</span>
</button>
</div>
<div className="px-4 py-3">
<label className="flex flex-col w-full h-12">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-primary/5 border border-primary/20 focus-within:border-primary/50 transition-colors">
<div className="text-slate-500 flex items-center justify-center pl-4 rounded-l-lg">
<span className="material-symbols-outlined text-[24px]">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 rounded-l-none pl-2 text-base font-normal leading-normal" placeholder="Search documents by name, type or date..." value="" />
</div>
</label>
</div>
<div className="flex flex-col p-4">
<div className="flex flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-primary/30 bg-primary/5 px-6 py-12 hover:bg-primary/10 transition-colors cursor-pointer group">
<div className="rounded-full bg-primary/20 p-4 text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[32px]">cloud_upload</span>
</div>
<div className="flex flex-col items-center gap-1">
<p className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] text-center">Upload Assets</p>
<p className="text-slate-400 font-light text-sm font-normal leading-normal text-center">Drag and drop your files here or click to browse</p>
</div>
<button className="mt-2 flex cursor-pointer items-center justify-center rounded-lg h-9 px-5 bg-primary/20 text-primary hover:bg-primary/30 transition-colors text-sm font-medium leading-normal">
                                Browse Files
                            </button>
</div>
</div>
<div className="px-4 py-4 @container">
<div className="flex overflow-hidden rounded-3xl border border-primary/20 bg-black shadow-sm">
<table className="flex-1 w-full text-left border-collapse">
<thead>
<tr className="bg-primary/10 border-b border-primary/20">
<th className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal">File Name</th>
<th className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal w-32">Type</th>
<th className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal w-40">Date Uploaded</th>
<th className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal w-24">Size</th>
<th className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal w-32 text-right">Action</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-primary/10 hover:bg-primary/5 transition-colors group">
<td className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal flex items-center gap-3">
<span className="material-symbols-outlined text-red-400">picture_as_pdf</span>
                                            Requirements Gathering Doc
                                        </td>
<td className="px-6 py-4 text-sm font-normal leading-normal">
<span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">PDF</span>
</td>
<td className="px-6 py-4 text-slate-400 font-light text-sm font-normal leading-normal">Oct 12, 2023</td>
<td className="px-6 py-4 text-slate-400 font-light text-sm font-normal leading-normal">2.4 MB</td>
<td className="px-6 py-4 text-right">
<button className="text-primary hover:text-primary/80 transition-colors text-sm font-semibold flex items-center justify-end w-full gap-1 opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-[18px]">download</span> Download
                                            </button>
</td>
</tr>
<tr className="border-b border-primary/10 hover:bg-primary/5 transition-colors group">
<td className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal flex items-center gap-3">
<span className="material-symbols-outlined text-purple-400">link</span>
                                            Homepage Wireframes
                                        </td>
<td className="px-6 py-4 text-sm font-normal leading-normal">
<span className="inline-flex items-center rounded-md bg-purple-500/10 px-2 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-500/20">Figma</span>
</td>
<td className="px-6 py-4 text-slate-400 font-light text-sm font-normal leading-normal">Oct 15, 2023</td>
<td className="px-6 py-4 text-slate-400 font-light text-sm font-normal leading-normal">-</td>
<td className="px-6 py-4 text-right">
<button className="text-primary hover:text-primary/80 transition-colors text-sm font-semibold flex items-center justify-end w-full gap-1 opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-[18px]">open_in_new</span> Open Link
                                            </button>
</td>
</tr>
<tr className="border-b border-primary/10 hover:bg-primary/5 transition-colors group">
<td className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal flex items-center gap-3">
<span className="material-symbols-outlined text-yellow-400">folder_zip</span>
                                            Brand Assets
                                        </td>
<td className="px-6 py-4 text-sm font-normal leading-normal">
<span className="inline-flex items-center rounded-md bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-400 ring-1 ring-inset ring-yellow-500/20">ZIP</span>
</td>
<td className="px-6 py-4 text-slate-400 font-light text-sm font-normal leading-normal">Oct 18, 2023</td>
<td className="px-6 py-4 text-slate-400 font-light text-sm font-normal leading-normal">15.8 MB</td>
<td className="px-6 py-4 text-right">
<button className="text-primary hover:text-primary/80 transition-colors text-sm font-semibold flex items-center justify-end w-full gap-1 opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-[18px]">download</span> Download
                                            </button>
</td>
</tr>
<tr className="border-b border-primary/10 hover:bg-primary/5 transition-colors group">
<td className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal flex items-center gap-3">
<span className="material-symbols-outlined text-red-400">picture_as_pdf</span>
                                            API Documentation
                                        </td>
<td className="px-6 py-4 text-sm font-normal leading-normal">
<span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">PDF</span>
</td>
<td className="px-6 py-4 text-slate-400 font-light text-sm font-normal leading-normal">Oct 20, 2023</td>
<td className="px-6 py-4 text-slate-400 font-light text-sm font-normal leading-normal">1.1 MB</td>
<td className="px-6 py-4 text-right">
<button className="text-primary hover:text-primary/80 transition-colors text-sm font-semibold flex items-center justify-end w-full gap-1 opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-[18px]">download</span> Download
                                            </button>
</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal flex items-center gap-3">
<span className="material-symbols-outlined text-red-400">picture_as_pdf</span>
                                            Sprint 1 Report
                                        </td>
<td className="px-6 py-4 text-sm font-normal leading-normal">
<span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">PDF</span>
</td>
<td className="px-6 py-4 text-slate-400 font-light text-sm font-normal leading-normal">Oct 25, 2023</td>
<td className="px-6 py-4 text-slate-400 font-light text-sm font-normal leading-normal">3.5 MB</td>
<td className="px-6 py-4 text-right">
<button className="text-primary hover:text-primary/80 transition-colors text-sm font-semibold flex items-center justify-end w-full gap-1 opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-[18px]">download</span> Download
                                            </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div>

      </div>
    </div>
  );
}
