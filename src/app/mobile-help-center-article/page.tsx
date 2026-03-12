import React from 'react';

export default function AfrixtechMobileHelpCenterArticle() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">

<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1 w-full">

<main className="flex flex-col flex-1 pb-10">

<nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 py-4">
<a className="text-slate-500 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Help Center</a>
<span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
<a className="text-slate-500 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">API Guides</a>
<span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
<span aria-current="page" className="text-white tracking-tight text-sm font-medium">Authentication</span>
</nav>

<div className="py-6">
<h1 className="text-white tracking-tight tracking-tight text-3xl md:text-4xl font-bold leading-tight mb-4">Authentication</h1>
<p className="text-slate-400 font-light text-base md:text-lg font-normal leading-relaxed">
                Learn how to authenticate your API requests securely using API keys and standard authorization headers.
              </p>
</div>

<article className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
<p className="text-base leading-relaxed mb-6">
                Authentication is the process of verifying the identity of a user or system. Afrixtech uses API keys to authenticate requests. You can view and manage your API keys in the Developer Dashboard under the 'Settings' tab.
              </p>
<h2 className="text-white tracking-tight text-xl font-semibold mt-8 mb-4">Bearer Token Authentication</h2>
<p className="text-base leading-relaxed mb-6">
                To authenticate an API request, you must provide your API key in the <code>Authorization</code> header using the Bearer schema. All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.
              </p>
<div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden mb-8">
<div className="flex items-center justify-between px-4 py-2 bg-slate-100 dark:bg-slate-800/50 border-b border-border-light dark:border-border-dark">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">cURL Example</span>
<button className="text-slate-500 hover:text-primary dark:hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">content_copy</span>
</button>
</div>
<div className="p-4 overflow-x-auto">
<pre className="text-sm font-mono text-slate-800 dark:text-slate-200"><code>curl -X GET https://api.afrixtech.com/v1/users \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"</code></pre>
</div>
</div>
<h2 className="text-white tracking-tight text-xl font-semibold mt-8 mb-4">Managing API Keys</h2>
<ul className="list-disc pl-5 mb-8 space-y-2 text-base leading-relaxed">
<li>Keep your API keys secure. Do not share them in publicly accessible areas such as GitHub, client-side code, and so forth.</li>
<li>Roll your API keys periodically. You can generate new keys and revoke old ones in the dashboard.</li>
<li>Use separate keys for development, staging, and production environments.</li>
</ul>
</article>

<div className="mt-12 py-8 border-t border-b border-border-light dark:border-border-dark">
<div className="flex flex-col items-center justify-center gap-4">
<p className="text-white tracking-tight text-lg font-medium">Was this article helpful?</p>
<div className="flex gap-4">
<button className="flex items-center gap-2 px-6 py-2 rounded-full border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-slate-700 dark:text-slate-300 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all">
<span className="material-symbols-outlined text-xl">thumb_up</span>
<span className="text-sm font-medium">Yes</span>
</button>
<button className="flex items-center gap-2 px-6 py-2 rounded-full border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-slate-700 dark:text-slate-300 hover:border-red-500 dark:hover:border-red-500 hover:text-red-500 dark:hover:text-red-500 transition-all">
<span className="material-symbols-outlined text-xl">thumb_down</span>
<span className="text-sm font-medium">No</span>
</button>
</div>
</div>
</div>

<div className="mt-10">
<h3 className="text-white tracking-tight text-lg font-bold mb-4">Related Articles</h3>
<div className="flex flex-col gap-2">
<a className="group flex items-center justify-between p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary dark:hover:border-primary transition-colors" href="#">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">article</span>
<span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-primary transition-colors">Handling Rate Limits</span>
</div>
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_forward</span>
</a>
<a className="group flex items-center justify-between p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary dark:hover:border-primary transition-colors" href="#">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">article</span>
<span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-primary transition-colors">Pagination Guide</span>
</div>
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_forward</span>
</a>
<a className="group flex items-center justify-between p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary dark:hover:border-primary transition-colors" href="#">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">article</span>
<span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-primary transition-colors">Webhooks Setup</span>
</div>
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_forward</span>
</a>
</div>
</div>
</main>
</div>
</div>
</div>
</div>

      </div>
    </div>
  );
}
