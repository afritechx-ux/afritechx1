import React from 'react';

export default function AfrixtechMobileApiDocumentationView() {
  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">

<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1 relative">

<div className="flex flex-col gap-3 p-4 md:px-10 mt-4">
<div className="flex flex-col gap-2">
<p className="text-white tracking-tight tracking-tight text-2xl md:text-[32px] font-bold leading-tight">API Documentation</p>
<p className="text-slate-400 font-light text-sm font-normal leading-normal">Afrixtech Enterprise API v2.0</p>
</div>
</div>
<div className="flex flex-col p-4 md:px-10 gap-3">
<details className="flex flex-col rounded-2xl border border-slate-300 dark:border-slate-800 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden px-4 py-2 group shadow-sm" open={true}>
<summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none marker:hidden">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-[20px]">lock</span>
<p className="text-white tracking-tight text-base font-medium leading-normal">Authentication</p>
</div>
<span className="material-symbols-outlined text-slate-500 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="pt-2 pb-3 flex flex-col gap-2">
<div className="flex items-center gap-2 p-2 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors">
<span className="text-xs font-bold text-green-600 dark:text-green-400 w-12">POST</span>
<p className="text-slate-700 dark:text-slate-300 text-sm font-mono leading-normal">/api/v1/auth/login</p>
</div>
<div className="flex items-center gap-2 p-2 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors">
<span className="text-xs font-bold text-green-600 dark:text-green-400 w-12">POST</span>
<p className="text-slate-700 dark:text-slate-300 text-sm font-mono leading-normal">/api/v1/auth/refresh</p>
</div>
</div>
</details>
<details className="flex flex-col rounded-2xl border border-slate-300 dark:border-slate-800 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden px-4 py-2 group shadow-sm">
<summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none marker:hidden">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-[20px]">group</span>
<p className="text-white tracking-tight text-base font-medium leading-normal">Users</p>
</div>
<span className="material-symbols-outlined text-slate-500 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="pt-2 pb-3 flex flex-col gap-2">
<div className="flex items-center gap-2 p-2 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors">
<span className="text-xs font-bold text-blue-600 dark:text-blue-400 w-12">GET</span>
<p className="text-slate-700 dark:text-slate-300 text-sm font-mono leading-normal">/api/v1/users</p>
</div>
<div className="flex items-center gap-2 p-2 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors">
<span className="text-xs font-bold text-green-600 dark:text-green-400 w-12">POST</span>
<p className="text-slate-700 dark:text-slate-300 text-sm font-mono leading-normal">/api/v1/users</p>
</div>
</div>
</details>
<details className="flex flex-col rounded-2xl border border-slate-300 dark:border-slate-800 bg-black border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden px-4 py-2 group shadow-sm">
<summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none marker:hidden">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-[20px]">folder</span>
<p className="text-white tracking-tight text-base font-medium leading-normal">Projects</p>
</div>
<span className="material-symbols-outlined text-slate-500 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="pt-2 pb-3 flex flex-col gap-2">
<div className="flex items-center gap-2 p-2 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors">
<span className="text-xs font-bold text-blue-600 dark:text-blue-400 w-12">GET</span>
<p className="text-slate-700 dark:text-slate-300 text-sm font-mono leading-normal">/api/v1/projects</p>
</div>
</div>
</details>
</div>
<div className="p-4 md:px-10 mt-2 mb-20">
<div className="flex flex-col rounded-lg bg-slate-900 dark:bg-black border border-slate-800 shadow-md overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900">
<div className="flex items-center gap-2">
<span className="text-slate-300 text-sm font-medium">Node.js Request</span>
</div>
<button className="flex items-center justify-center rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 px-3 py-1.5 gap-2 text-xs font-medium transition-colors">
<span className="material-symbols-outlined text-[16px]">content_copy</span>
<span>Copy</span>
</button>
</div>
<div className="p-4 overflow-x-auto">
<pre className="text-sm font-mono text-slate-300 leading-relaxed"><span className="text-purple-400">const</span> axios = <span className="text-blue-400">require</span>(<span className="text-green-400">'axios'</span>);

<span className="text-purple-400">let</span> config = &#123;
  method: <span className="text-green-400">'post'</span>,
  maxBodyLength: <span className="text-orange-400">Infinity</span>,
  url: <span className="text-green-400">'https://api.afrixtech.com/v1/auth/login'</span>,
  headers: &#123; 
    <span className="text-green-400">'Content-Type'</span>: <span className="text-green-400">'application/json'</span>
  &#125;,
  data: &#123;
    <span className="text-green-400">"username"</span>: <span className="text-green-400">"developer@afrixtech.com"</span>,
    <span className="text-green-400">"password"</span>: <span className="text-green-400">"secure_password"</span>
  &#125;
&#125;;

axios.request(config)
.then((response) =&gt; &#123;
  <span className="text-blue-400">console</span>.log(<span className="text-blue-400">JSON</span>.stringify(response.data));
&#125;)
.catch((error) =&gt; &#123;
  <span className="text-blue-400">console</span>.log(error);
&#125;);
</pre>
</div>
</div>
</div>
<div className="fixed bottom-6 right-6 z-50">
<button className="flex items-center justify-center rounded-full h-14 w-14 bg-primary text-white shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-200">
<span className="material-symbols-outlined text-[28px]">search</span>
</button>
</div>
</div>
</div>
</div>
</div>

      </div>
    </div>
  );
}
