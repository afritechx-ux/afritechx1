"use client";

import React, { useState, useCallback } from 'react';

/* ═══════════════════════════════════════════════════════════════
   ██  DATA — All endpoints, code examples, responses
   ═══════════════════════════════════════════════════════════════ */

interface Param {
  name: string;
  type: string;
  required: boolean;
  description: string;
  enumValues?: string[];
  defaultValue?: string;
  expandable?: boolean;
}

interface ResponseBody {
  code: string;
  label: string;
  color: string;
  body: string;
}

interface CodeExample {
  curl: string;
  python: string;
  nodejs: string;
  go: string;
}

interface Endpoint {
  id: string;
  label: string;
  method: string;
  path: string;
  description: string;
  authScope: string;
  parameters: Param[];
  responses: ResponseBody[];
  codeExamples: CodeExample;
  sandboxDefault: string;
}

const methodColors: Record<string, string> = {
  GET: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  POST: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  PATCH: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  PUT: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  DEL: 'text-red-400 bg-red-500/10 border-red-500/20',
  DELETE: 'text-red-400 bg-red-500/10 border-red-500/20',
};

/* ── Endpoints ─────────────────────────────────────────────────── */

const endpoints: Endpoint[] = [
  {
    id: 'list-users',
    label: 'List users',
    method: 'GET',
    path: '/api/v2/users',
    description: 'Returns a paginated list of all users in the system. Supports filtering by role, status, and creation date. Results are ordered by creation date (newest first).',
    authScope: 'users:read',
    parameters: [
      { name: 'limit', type: 'integer', required: false, description: 'Number of results to return per page. Max 100.', defaultValue: '20' },
      { name: 'offset', type: 'integer', required: false, description: 'Number of results to skip (for pagination).', defaultValue: '0' },
      { name: 'role', type: 'string (enum)', required: false, description: 'Filter by user role.', enumValues: ['"admin"', '"developer"', '"viewer"'] },
      { name: 'status', type: 'string (enum)', required: false, description: 'Filter by account status.', enumValues: ['"active"', '"suspended"', '"pending"'] },
    ],
    responses: [
      { code: '200', label: 'OK', color: 'emerald', body: `{
  "object": "list",
  "data": [
    {
      "id": "usr_9abc123def456ghi",
      "object": "user",
      "email": "alex@example.com",
      "full_name": "Alex Developer",
      "role": "developer",
      "status": "active",
      "created_at": 1682496000
    }
  ],
  "has_more": true,
  "total_count": 42
}` },
      { code: '401', label: 'Unauthorized', color: 'orange', body: `{
  "error": {
    "type": "authentication_error",
    "message": "Invalid or missing API key.",
    "code": "invalid_api_key"
  }
}` },
    ],
    codeExamples: {
      curl: `curl -X GET https://api.afritechx.com/v2/users?limit=10 \\
  -H "Authorization: Bearer sk_test_12345" \\
  -H "Content-Type: application/json"`,
      python: `import requests

response = requests.get(
    "https://api.afritechx.com/v2/users",
    headers={"Authorization": "Bearer sk_test_12345"},
    params={"limit": 10}
)
print(response.json())`,
      nodejs: `const response = await fetch(
  "https://api.afritechx.com/v2/users?limit=10",
  {
    headers: {
      "Authorization": "Bearer sk_test_12345",
      "Content-Type": "application/json"
    }
  }
);
const data = await response.json();`,
      go: `req, _ := http.NewRequest("GET",
  "https://api.afritechx.com/v2/users?limit=10", nil)
req.Header.Set("Authorization", "Bearer sk_test_12345")
resp, _ := http.DefaultClient.Do(req)
defer resp.Body.Close()`,
    },
    sandboxDefault: '',
  },
  {
    id: 'create-user',
    label: 'Create user',
    method: 'POST',
    path: '/api/v2/users',
    description: 'Creates a new user record in the system. Required parameters include email and password. Upon successful creation, an email verification link will be sent to the user\'s provided email address.',
    authScope: 'users:write',
    parameters: [
      { name: 'email', type: 'string (email format)', required: true, description: 'The primary email address for the user. Must be unique within the system and properly formatted.' },
      { name: 'password', type: 'string (min: 8 chars)', required: true, description: 'The user\'s password. Must be at least 8 characters with uppercase, lowercase, numbers, and special characters.' },
      { name: 'full_name', type: 'string', required: false, description: 'The user\'s full legal name. Used for display purposes in the dashboard.' },
      { name: 'role', type: 'string (enum)', required: false, description: 'Assigns a specific RBAC role to the new user.', enumValues: ['"admin"', '"developer"', '"viewer"'], defaultValue: '"viewer"' },
      { name: 'metadata', type: 'object', required: false, description: 'Up to 50 key-value pairs that you can attach to an object for storing additional structured information.', expandable: true },
    ],
    responses: [
      { code: '201', label: 'Created', color: 'emerald', body: `{
  "id": "usr_9abc123def456ghi",
  "object": "user",
  "email": "alex.developer@example.com",
  "full_name": "Alex Developer",
  "role": "developer",
  "metadata": {
    "department": "engineering",
    "employee_id": "EMP-042"
  },
  "created_at": 1682496000,
  "updated_at": 1682496000
}` },
      { code: '400', label: 'Bad Request', color: 'red', body: `{
  "error": {
    "type": "validation_error",
    "message": "Invalid request parameters.",
    "errors": [
      { "field": "email", "message": "Email is already taken." },
      { "field": "password", "message": "Must be at least 8 characters." }
    ]
  }
}` },
      { code: '401', label: 'Unauthorized', color: 'orange', body: `{
  "error": {
    "type": "authentication_error",
    "message": "Invalid or missing API key.",
    "code": "invalid_api_key"
  }
}` },
      { code: '429', label: 'Rate Limited', color: 'yellow', body: `{
  "error": {
    "type": "rate_limit_error",
    "message": "Too many requests. Please retry after 30 seconds.",
    "retry_after": 30
  }
}` },
    ],
    codeExamples: {
      curl: `curl -X POST https://api.afritechx.com/v2/users \\
  -H "Authorization: Bearer sk_test_12345" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "alex.developer@example.com",
    "password": "SecurePassword123!",
    "full_name": "Alex Developer",
    "role": "developer",
    "metadata": {
      "department": "engineering"
    }
  }'`,
      python: `import requests

response = requests.post(
    "https://api.afritechx.com/v2/users",
    headers={"Authorization": "Bearer sk_test_12345"},
    json={
        "email": "alex.developer@example.com",
        "password": "SecurePassword123!",
        "full_name": "Alex Developer",
        "role": "developer",
        "metadata": {"department": "engineering"}
    }
)
print(response.json())`,
      nodejs: `const response = await fetch(
  "https://api.afritechx.com/v2/users",
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer sk_test_12345",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: "alex.developer@example.com",
      password: "SecurePassword123!",
      full_name: "Alex Developer",
      role: "developer",
      metadata: { department: "engineering" }
    })
  }
);
const data = await response.json();`,
      go: `body := strings.NewReader(\`{
  "email": "alex.developer@example.com",
  "password": "SecurePassword123!",
  "full_name": "Alex Developer",
  "role": "developer"
}\`)
req, _ := http.NewRequest("POST",
  "https://api.afritechx.com/v2/users", body)
req.Header.Set("Authorization", "Bearer sk_test_12345")
req.Header.Set("Content-Type", "application/json")
resp, _ := http.DefaultClient.Do(req)`,
    },
    sandboxDefault: `{
  "email": "test@example.com",
  "password": "TestPassword1!",
  "role": "viewer"
}`,
  },
  {
    id: 'retrieve-user',
    label: 'Retrieve user',
    method: 'GET',
    path: '/api/v2/users/:id',
    description: 'Retrieves the details of an existing user. You need only supply the unique user identifier that was returned upon user creation.',
    authScope: 'users:read',
    parameters: [
      { name: 'id', type: 'string', required: true, description: 'The unique identifier of the user to retrieve (path parameter).' },
    ],
    responses: [
      { code: '200', label: 'OK', color: 'emerald', body: `{
  "id": "usr_9abc123def456ghi",
  "object": "user",
  "email": "alex@example.com",
  "full_name": "Alex Developer",
  "role": "developer",
  "status": "active",
  "metadata": {},
  "created_at": 1682496000,
  "updated_at": 1682499600
}` },
      { code: '404', label: 'Not Found', color: 'red', body: `{
  "error": {
    "type": "not_found_error",
    "message": "No user found with id 'usr_invalid'."
  }
}` },
    ],
    codeExamples: {
      curl: `curl -X GET https://api.afritechx.com/v2/users/usr_9abc123 \\
  -H "Authorization: Bearer sk_test_12345"`,
      python: `import requests

response = requests.get(
    "https://api.afritechx.com/v2/users/usr_9abc123",
    headers={"Authorization": "Bearer sk_test_12345"}
)
print(response.json())`,
      nodejs: `const response = await fetch(
  "https://api.afritechx.com/v2/users/usr_9abc123",
  {
    headers: {
      "Authorization": "Bearer sk_test_12345"
    }
  }
);
const data = await response.json();`,
      go: `req, _ := http.NewRequest("GET",
  "https://api.afritechx.com/v2/users/usr_9abc123", nil)
req.Header.Set("Authorization", "Bearer sk_test_12345")
resp, _ := http.DefaultClient.Do(req)`,
    },
    sandboxDefault: '',
  },
  {
    id: 'update-user',
    label: 'Update user',
    method: 'PATCH',
    path: '/api/v2/users/:id',
    description: 'Updates the specified user by setting the values of the parameters passed. Any parameters not provided will be left unchanged.',
    authScope: 'users:write',
    parameters: [
      { name: 'full_name', type: 'string', required: false, description: 'Updated display name.' },
      { name: 'role', type: 'string (enum)', required: false, description: 'Change the user role.', enumValues: ['"admin"', '"developer"', '"viewer"'] },
      { name: 'metadata', type: 'object', required: false, description: 'Replace the metadata object.', expandable: true },
    ],
    responses: [
      { code: '200', label: 'OK', color: 'emerald', body: `{
  "id": "usr_9abc123def456ghi",
  "object": "user",
  "email": "alex@example.com",
  "full_name": "Alex Senior Developer",
  "role": "admin",
  "status": "active",
  "created_at": 1682496000,
  "updated_at": 1682500000
}` },
      { code: '400', label: 'Bad Request', color: 'red', body: `{
  "error": {
    "type": "validation_error",
    "message": "Invalid role value. Must be admin, developer, or viewer."
  }
}` },
    ],
    codeExamples: {
      curl: `curl -X PATCH https://api.afritechx.com/v2/users/usr_9abc123 \\
  -H "Authorization: Bearer sk_test_12345" \\
  -H "Content-Type: application/json" \\
  -d '{"role": "admin", "full_name": "Alex Senior Developer"}'`,
      python: `import requests

response = requests.patch(
    "https://api.afritechx.com/v2/users/usr_9abc123",
    headers={"Authorization": "Bearer sk_test_12345"},
    json={"role": "admin", "full_name": "Alex Senior Developer"}
)
print(response.json())`,
      nodejs: `const response = await fetch(
  "https://api.afritechx.com/v2/users/usr_9abc123",
  {
    method: "PATCH",
    headers: {
      "Authorization": "Bearer sk_test_12345",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      role: "admin",
      full_name: "Alex Senior Developer"
    })
  }
);
const data = await response.json();`,
      go: `body := strings.NewReader(\`{"role":"admin","full_name":"Alex Senior Developer"}\`)
req, _ := http.NewRequest("PATCH",
  "https://api.afritechx.com/v2/users/usr_9abc123", body)
req.Header.Set("Authorization", "Bearer sk_test_12345")
req.Header.Set("Content-Type", "application/json")
resp, _ := http.DefaultClient.Do(req)`,
    },
    sandboxDefault: `{
  "role": "admin",
  "full_name": "Alex Senior Developer"
}`,
  },
  {
    id: 'delete-user',
    label: 'Delete user',
    method: 'DEL',
    path: '/api/v2/users/:id',
    description: 'Permanently deletes a user. This action cannot be undone. All associated data is purged within 30 days of deletion.',
    authScope: 'users:delete',
    parameters: [
      { name: 'id', type: 'string', required: true, description: 'The unique identifier of the user to delete (path parameter).' },
    ],
    responses: [
      { code: '200', label: 'OK', color: 'emerald', body: `{
  "id": "usr_9abc123def456ghi",
  "object": "user",
  "deleted": true
}` },
      { code: '404', label: 'Not Found', color: 'red', body: `{
  "error": {
    "type": "not_found_error",
    "message": "No user found with id 'usr_invalid'."
  }
}` },
    ],
    codeExamples: {
      curl: `curl -X DELETE https://api.afritechx.com/v2/users/usr_9abc123 \\
  -H "Authorization: Bearer sk_test_12345"`,
      python: `import requests

response = requests.delete(
    "https://api.afritechx.com/v2/users/usr_9abc123",
    headers={"Authorization": "Bearer sk_test_12345"}
)
print(response.json())`,
      nodejs: `const response = await fetch(
  "https://api.afritechx.com/v2/users/usr_9abc123",
  {
    method: "DELETE",
    headers: {
      "Authorization": "Bearer sk_test_12345"
    }
  }
);
const data = await response.json();`,
      go: `req, _ := http.NewRequest("DELETE",
  "https://api.afritechx.com/v2/users/usr_9abc123", nil)
req.Header.Set("Authorization", "Bearer sk_test_12345")
resp, _ := http.DefaultClient.Do(req)`,
    },
    sandboxDefault: '',
  },
];

interface GuideItem {
  id: string;
  label: string;
  icon: string;
  title: string;
  content: string[];
}

const gettingStartedItems: GuideItem[] = [
  {
    id: 'overview', label: 'Overview', icon: 'home', title: 'API Overview',
    content: [
      'The Afritechx API is organized around REST. Our API has predictable resource-oriented URLs, accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.',
      'The API is designed to have consistent and intuitive endpoints. All responses return data in JSON format. We support CORS (Cross-Origin Resource Sharing) allowing you to interact with our API from a client-side web application.',
      'Base URL: https://api.afritechx.com/v2',
      'All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.',
    ],
  },
  {
    id: 'authentication', label: 'Authentication', icon: 'key', title: 'Authentication',
    content: [
      'The Afritechx API uses API keys to authenticate requests. You can view and manage your API keys in the Afritechx Dashboard.',
      'Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, or anywhere else that could be compromised.',
      'Authentication is performed via the Authorization header. Provide your API key as the value of the Bearer token: Authorization: Bearer sk_test_YOUR_KEY',
      'All API requests must be authenticated. Requests that are not authenticated will return a 401 Unauthorized error.',
      'There are two types of API keys: Test keys (prefixed sk_test_) for development and sandbox testing, and Live keys (prefixed sk_live_) for production use.',
    ],
  },
  {
    id: 'errors', label: 'Errors & Status Codes', icon: 'error', title: 'Errors & Status Codes',
    content: [
      'Afritechx uses conventional HTTP response codes to indicate the success or failure of an API request.',
      '200 OK — Request succeeded. The response body contains the requested data.',
      '201 Created — A new resource was successfully created.',
      '400 Bad Request — The request was unacceptable, often due to missing required parameters or invalid data format.',
      '401 Unauthorized — No valid API key provided. Ensure your Authorization header is set correctly.',
      '403 Forbidden — The API key does not have permissions to perform the request.',
      '404 Not Found — The requested resource does not exist.',
      '429 Too Many Requests — Too many requests hit the API too quickly. We recommend an exponential backoff strategy.',
      '500 Internal Server Error — Something went wrong on our end. These are rare and are automatically reported to our engineering team.',
    ],
  },
  {
    id: 'sdks', label: 'SDKs & Libraries', icon: 'deployed_code', title: 'SDKs & Libraries',
    content: [
      'We provide official SDKs for the most popular programming languages to make integration as smooth as possible.',
      'JavaScript / TypeScript: npm install @afritechx/sdk — Full-featured SDK with TypeScript support, request validation, and automatic retries.',
      'Python: pip install afritechx — Pythonic SDK with async support, comprehensive type hints, and built-in pagination helpers.',
      'Go: go get github.com/afritechx/afritechx-go — Idiomatic Go client with context support, structured logging, and connection pooling.',
      'Ruby: gem install afritechx — Ruby SDK with ActiveRecord-style models and Rails integration.',
      'All SDKs are open source and available on GitHub. We welcome contributions and bug reports from the community.',
    ],
  },
  {
    id: 'rate-limits', label: 'Rate Limits', icon: 'speed', title: 'Rate Limits',
    content: [
      'The Afritechx API enforces rate limits to ensure fair usage and maintain platform stability for all users.',
      'Test mode: 100 requests per minute per API key. Live mode: 1,000 requests per minute per API key.',
      'When you exceed the rate limit, the API returns a 429 Too Many Requests status code. The response includes a Retry-After header indicating how many seconds to wait before making another request.',
      'For bulk operations, we recommend using our batch endpoints or implementing exponential backoff with jitter in your retry logic.',
      'If you need higher rate limits for your use case, please contact our sales team at afritechx@gmail.com to discuss Enterprise plans.',
    ],
  },
];

const codeLanguageKeys = ['curl', 'python', 'nodejs', 'go'] as const;
const codeLanguageLabels: Record<string, string> = { curl: 'cURL', python: 'Python', nodejs: 'Node.js', go: 'Go' };

/* ═══════════════════════════════════════════════════════════════
   ██  COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

function MethodBadge({ method, size = 'sm' }: { method: string; size?: 'sm' | 'xs' }) {
  const colors = methodColors[method] || methodColors.GET;
  return (
    <span className={`font-mono font-bold border rounded ${colors} ${size === 'sm' ? 'text-xs px-2 py-1' : 'text-[10px] px-1.5 py-0.5'}`}>
      {method}
    </span>
  );
}

function ParamRow({ param }: { param: Param }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="group p-4 flex flex-col sm:flex-row gap-4 hover:bg-white/[0.02] transition-colors border-b border-white/5 last:border-b-0">
      <div className="sm:w-1/3 flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          {param.expandable && (
            <button onClick={() => setExpanded(!expanded)} className="text-slate-600 hover:text-white transition-colors">
              <span className={`material-symbols-outlined text-[14px] transition-transform ${expanded ? 'rotate-90' : ''}`}>chevron_right</span>
            </button>
          )}
          <code className="text-sm font-semibold text-white font-mono">{param.name}</code>
          {param.required ? (
            <span className="text-[9px] font-black text-red-400 bg-red-500/10 border border-red-500/20 px-1.5 py-0.5 rounded-full uppercase tracking-widest">Required</span>
          ) : (
            <span className="text-[9px] font-medium text-slate-600 bg-white/5 border border-white/5 px-1.5 py-0.5 rounded-full">Optional</span>
          )}
        </div>
        <code className="text-xs text-slate-600 font-mono">{param.type}</code>
      </div>
      <div className="sm:w-2/3 flex flex-col gap-2">
        <p className="text-sm text-slate-400 leading-relaxed">
          {param.description}
          {param.defaultValue && (
            <> Defaults to <code className="text-xs bg-white/5 border border-white/5 px-1.5 py-0.5 rounded text-slate-300 font-mono">{param.defaultValue}</code>.</>
          )}
        </p>
        {param.enumValues && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {param.enumValues.map((val) => (
              <code key={val} className="text-xs font-mono bg-white/5 border border-white/5 text-slate-500 px-2 py-0.5 rounded">{val}</code>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ██  PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function AfritechxDeveloperApiDocumentationPortal() {
  // ── State ──
  const [activeView, setActiveView] = useState<'endpoint' | 'guide'>('endpoint');
  const [activeGuideId, setActiveGuideId] = useState('overview');
  const [activeEndpointId, setActiveEndpointId] = useState('create-user');
  const [activeCodeLang, setActiveCodeLang] = useState<typeof codeLanguageKeys[number]>('curl');
  const [activeResponseIdx, setActiveResponseIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showToken, setShowToken] = useState(false);
  const [token, setToken] = useState('sk_test_123456789');
  const [bodyMode, setBodyMode] = useState<'json' | 'form'>('json');
  const [requestBody, setRequestBody] = useState('');
  const [sandboxResponse, setSandboxResponse] = useState('');
  const [sandboxLoading, setSandboxLoading] = useState(false);
  const [sandboxStatus, setSandboxStatus] = useState<{ code: string; text: string } | null>(null);
  const [copiedId, setCopiedId] = useState('');
  const [usersExpanded, setUsersExpanded] = useState(true);
  const [paymentsExpanded, setPaymentsExpanded] = useState(false);
  const [webhooksExpanded, setWebhooksExpanded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeEndpoint = endpoints.find((e) => e.id === activeEndpointId) || endpoints[1];
  const activeGuide = gettingStartedItems.find((g) => g.id === activeGuideId) || gettingStartedItems[0];

  // Select a guide page
  const selectGuide = useCallback((id: string) => {
    setActiveView('guide');
    setActiveGuideId(id);
    setSidebarOpen(false);
  }, []);

  // Reset response tab when switching endpoints
  const selectEndpoint = useCallback((id: string) => {
    setActiveView('endpoint');
    setActiveEndpointId(id);
    setActiveResponseIdx(0);
    setActiveCodeLang('curl');
    setSandboxResponse('');
    setSandboxStatus(null);
    const ep = endpoints.find((e) => e.id === id);
    setRequestBody(ep?.sandboxDefault || '');
    setSidebarOpen(false);
  }, []);

  // Initialize request body on first render
  React.useEffect(() => {
    setRequestBody(activeEndpoint.sandboxDefault);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Copy to clipboard
  const copyToClipboard = useCallback(async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(''), 2000);
    } catch { /* fallback */ }
  }, []);

  // Simulate sending a request
  const sendRequest = useCallback(() => {
    setSandboxLoading(true);
    setSandboxResponse('');
    setSandboxStatus(null);

    setTimeout(() => {
      const successResp = activeEndpoint.responses[0];
      setSandboxResponse(successResp.body);
      setSandboxStatus({ code: successResp.code, text: successResp.label });
      setSandboxLoading(false);
    }, 800 + Math.random() * 700);
  }, [activeEndpoint]);

  // Filter endpoints by search
  const filteredEndpoints = endpoints.filter((ep) =>
    ep.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ep.method.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ep.path.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full relative min-h-screen bg-black pt-32 pb-24">
      <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Mobile sidebar toggle */}
      <button
        className="fixed bottom-20 right-6 z-40 w-12 h-12 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center text-primary shadow-lg md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <span className="material-symbols-outlined text-xl">{sidebarOpen ? 'close' : 'menu_book'}</span>
      </button>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/80 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="relative z-10">
        <div className="flex flex-col h-screen">
          <div className="flex flex-1 overflow-hidden">

            {/* ═══ Sidebar ═══ */}
            <aside className={`w-72 flex-shrink-0 border-r border-white/5 bg-[#050505] overflow-y-auto flex-col fixed md:relative inset-y-0 left-0 z-40 transition-transform duration-300 md:translate-x-0 ${sidebarOpen ? 'translate-x-0 flex' : '-translate-x-full hidden md:flex'}`}>
              {/* API Version */}
              <div className="p-4 border-b border-white/5">
                <div className="flex items-center gap-3 px-2 py-2">
                  <div className="size-9 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/10 flex items-center justify-center text-primary border border-primary/20 shadow-lg shadow-primary/5">
                    <span className="material-symbols-outlined text-base">code_blocks</span>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-white text-sm font-bold tracking-tight">API v2.4.0</h1>
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                      <p className="text-emerald-400 text-[10px] font-medium">Latest Stable</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search */}
              <div className="p-3 border-b border-white/5">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5 text-slate-600 hover:border-white/10 transition-colors focus-within:border-primary/30">
                  <span className="material-symbols-outlined text-base">search</span>
                  <input
                    type="text"
                    className="bg-transparent text-xs text-white outline-none placeholder:text-slate-600 w-full"
                    placeholder="Search endpoints..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="text-slate-600 hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Navigation */}
              <nav className="p-3 flex-1 flex flex-col gap-0.5 overflow-y-auto">
                <div className="px-3 pt-3 pb-2 text-[10px] font-black text-slate-600 uppercase tracking-[0.15em]">Getting Started</div>
                {gettingStartedItems.map((item) => (
                  <button
                    key={item.id}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group w-full text-left ${
                      activeView === 'guide' && activeGuideId === item.id
                        ? 'bg-primary/10 text-primary'
                        : 'text-slate-500 hover:text-white hover:bg-white/[0.03]'
                    }`}
                    onClick={() => selectGuide(item.id)}
                  >
                    <span className={`material-symbols-outlined text-[18px] transition-colors ${
                      activeView === 'guide' && activeGuideId === item.id ? 'text-primary' : 'text-slate-600 group-hover:text-primary'
                    }`}>{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))}

                <div className="px-3 pt-6 pb-2 text-[10px] font-black text-slate-600 uppercase tracking-[0.15em]">Resources</div>

                {/* Users group */}
                <div className="flex flex-col">
                  <button
                    className="flex items-center justify-between px-3 py-2 text-white cursor-pointer group w-full"
                    onClick={() => setUsersExpanded(!usersExpanded)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-primary">group</span>
                      <span className="text-sm font-bold">Users</span>
                    </div>
                    <span className={`material-symbols-outlined text-[16px] text-slate-600 transition-transform duration-200 ${usersExpanded ? 'rotate-90' : ''}`}>chevron_right</span>
                  </button>
                  {usersExpanded && (
                    <div className="flex flex-col ml-7 border-l border-white/5 pl-2 gap-0.5">
                      {filteredEndpoints.map((ep) => (
                        <button
                          key={ep.id}
                          className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative w-full text-left ${
                            ep.id === activeEndpointId
                              ? 'bg-primary/10 text-primary'
                              : 'text-slate-500 hover:text-white hover:bg-white/[0.03]'
                          }`}
                          onClick={() => selectEndpoint(ep.id)}
                        >
                          {ep.id === activeEndpointId && (
                            <div className="absolute left-[-9px] top-1/2 -translate-y-1/2 w-[2px] h-4 bg-primary rounded-r" />
                          )}
                          <span>{ep.label}</span>
                          <MethodBadge method={ep.method} size="xs" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Payments (collapsed) */}
                <button
                  className="flex items-center justify-between px-3 py-2 text-slate-500 hover:text-white cursor-pointer group transition-colors mt-1 w-full"
                  onClick={() => setPaymentsExpanded(!paymentsExpanded)}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-slate-600 group-hover:text-primary transition-colors">payments</span>
                    <span className="text-sm font-medium">Payments</span>
                  </div>
                  <span className={`material-symbols-outlined text-[16px] text-slate-600 transition-transform duration-200 ${paymentsExpanded ? 'rotate-90' : ''}`}>chevron_right</span>
                </button>
                {paymentsExpanded && (
                  <div className="ml-7 border-l border-white/5 pl-2 py-2">
                    <p className="text-xs text-slate-600 px-2.5 italic">Coming soon</p>
                  </div>
                )}

                {/* Webhooks (collapsed) */}
                <button
                  className="flex items-center justify-between px-3 py-2 text-slate-500 hover:text-white cursor-pointer group transition-colors w-full"
                  onClick={() => setWebhooksExpanded(!webhooksExpanded)}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-slate-600 group-hover:text-primary transition-colors">webhook</span>
                    <span className="text-sm font-medium">Webhooks</span>
                  </div>
                  <span className={`material-symbols-outlined text-[16px] text-slate-600 transition-transform duration-200 ${webhooksExpanded ? 'rotate-90' : ''}`}>chevron_right</span>
                </button>
                {webhooksExpanded && (
                  <div className="ml-7 border-l border-white/5 pl-2 py-2">
                    <p className="text-xs text-slate-600 px-2.5 italic">Coming soon</p>
                  </div>
                )}
              </nav>

              {/* Sidebar footer */}
              <div className="p-3 border-t border-white/5">
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary/5 border border-primary/10 text-primary hover:bg-primary/10 transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-base">support_agent</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold">Need help?</span>
                    <span className="text-[10px] text-primary/60">Contact Developer Support</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* ═══ Main Content ═══ */}
            <main className="flex-1 overflow-y-auto bg-black p-6 lg:p-10 relative">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

              <div className="max-w-3xl mx-auto xl:ml-0 xl:mr-auto pb-20 relative">

                {/* ── Guide Content ── */}
                {activeView === 'guide' && (
                  <div key={activeGuide.id}>
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-8">
                      <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => selectGuide('overview')}>Getting Started</span>
                      <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                      <span className="text-white font-medium">{activeGuide.label}</span>
                    </div>

                    {/* Title */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-2xl">{activeGuide.icon}</span>
                      </div>
                      <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white">{activeGuide.title}</h1>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-5">
                      {activeGuide.content.map((paragraph, idx) => {
                        // Check if it looks like a code/command line
                        const isCode = paragraph.startsWith('Base URL:') || paragraph.includes('npm install') || paragraph.includes('pip install') || paragraph.includes('go get') || paragraph.includes('gem install') || paragraph.includes('Authorization:');
                        // Check if it's a status code line
                        const isStatusCode = /^\d{3}\s/.test(paragraph);

                        if (isCode) {
                          return (
                            <div key={idx} className="rounded-2xl border border-white/5 bg-[#050505] p-5 overflow-x-auto">
                              <pre className="font-mono text-sm text-primary leading-relaxed">{paragraph}</pre>
                            </div>
                          );
                        }

                        if (isStatusCode) {
                          const parts = paragraph.split(' — ');
                          const codeMatch = parts[0]?.match(/^(\d{3})\s(.+)/);
                          const codeNum = codeMatch?.[1] || '';
                          const codeLabel = codeMatch?.[2] || parts[0];
                          const desc = parts[1] || '';
                          const codeColor = codeNum.startsWith('2') ? 'emerald' : codeNum.startsWith('4') ? 'orange' : 'red';
                          return (
                            <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                              <span className={`text-xs font-mono font-bold px-2 py-1 rounded bg-${codeColor}-500/10 text-${codeColor}-400 border border-${codeColor}-500/20 h-fit shrink-0`}>{codeNum}</span>
                              <div>
                                <p className="text-sm font-bold text-white mb-1">{codeLabel}</p>
                                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                              </div>
                            </div>
                          );
                        }

                        return (
                          <p key={idx} className="text-base text-slate-400 leading-relaxed">{paragraph}</p>
                        );
                      })}
                    </div>

                    {/* Navigation between guides */}
                    <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5">
                      {(() => {
                        const currentIdx = gettingStartedItems.findIndex(g => g.id === activeGuide.id);
                        const prev = currentIdx > 0 ? gettingStartedItems[currentIdx - 1] : null;
                        const next = currentIdx < gettingStartedItems.length - 1 ? gettingStartedItems[currentIdx + 1] : null;
                        return (
                          <>
                            {prev ? (
                              <button onClick={() => selectGuide(prev.id)} className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors group">
                                <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                                <span className="text-sm font-medium">{prev.label}</span>
                              </button>
                            ) : <div />}
                            {next ? (
                              <button onClick={() => selectGuide(next.id)} className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors group">
                                <span className="text-sm font-medium">{next.label}</span>
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                              </button>
                            ) : <div />}
                          </>
                        );
                      })()}
                    </div>
                  </div>
                )}

                {/* ── Endpoint Content ── */}
                {activeView === 'endpoint' && (
                  <div key={activeEndpoint.id}>
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-600 mb-8">
                  <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => selectGuide('overview')}>API Reference</span>
                  <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                  <span className="hover:text-primary transition-colors cursor-pointer">Users</span>
                  <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                  <span className="text-white font-medium">{activeEndpoint.label}</span>
                </div>

                {/* Title */}
                <div className="flex flex-col gap-4 mb-8">
                  <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white">{activeEndpoint.label}</h1>
                  <div className="flex items-center gap-3 flex-wrap">
                    <MethodBadge method={activeEndpoint.method} />
                    <code className="text-slate-400 font-mono text-sm bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5">
                      {activeEndpoint.path}
                    </code>
                    <button
                      className="ml-auto text-slate-600 hover:text-primary transition-colors"
                      title="Copy endpoint"
                      onClick={() => copyToClipboard(activeEndpoint.path, 'endpoint')}
                    >
                      <span className="material-symbols-outlined text-base">{copiedId === 'endpoint' ? 'check' : 'content_copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-base leading-relaxed mb-10">{activeEndpoint.description}</p>

                {/* Auth callout */}
                <div className="flex gap-3 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 mb-10">
                  <span className="material-symbols-outlined text-blue-400 text-lg shrink-0 mt-0.5">info</span>
                  <div>
                    <p className="text-sm font-bold text-blue-300 mb-1">Authentication Required</p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      This endpoint requires a valid API key with <code className="text-xs bg-white/5 px-1 py-0.5 rounded font-mono text-blue-300">{activeEndpoint.authScope}</code> scope.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

                {/* Parameters */}
                {activeEndpoint.parameters.length > 0 && (
                  <>
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">data_object</span>
                      {activeEndpoint.method === 'GET' ? 'Query Parameters' : 'Request Body Parameters'}
                    </h2>
                    <div className="border border-white/5 rounded-2xl overflow-hidden bg-[#050505]">
                      {activeEndpoint.parameters.map((param) => (
                        <ParamRow key={param.name} param={param} />
                      ))}
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />
                  </>
                )}

                {/* Responses */}
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">output</span>
                  Responses
                </h2>
                <div className="flex gap-2 mb-5 flex-wrap">
                  {activeEndpoint.responses.map((resp, idx) => (
                    <button
                      key={resp.code}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-200 ${
                        idx === activeResponseIdx
                          ? `bg-${resp.color}-500/10 text-${resp.color}-400 border border-${resp.color}-500/20 shadow-lg shadow-${resp.color}-500/5`
                          : 'text-slate-500 hover:text-white hover:bg-white/5 border border-transparent'
                      }`}
                      onClick={() => setActiveResponseIdx(idx)}
                    >
                      <span className={`size-1.5 rounded-full ${idx === activeResponseIdx ? `bg-${resp.color}-500` : 'bg-slate-600'}`} />
                      {resp.code} {resp.label}
                    </button>
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/5 bg-[#050505]">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.02] border-b border-white/5">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Response Body</span>
                    <button
                      className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-primary transition-colors"
                      onClick={() => copyToClipboard(activeEndpoint.responses[activeResponseIdx]?.body || '', 'response')}
                    >
                      <span className="material-symbols-outlined text-sm">{copiedId === 'response' ? 'check' : 'content_copy'}</span>
                      {copiedId === 'response' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <div className="p-5 overflow-x-auto">
                    <pre className="font-mono text-sm leading-relaxed text-slate-300 whitespace-pre">
                      {activeEndpoint.responses[activeResponseIdx]?.body}
                    </pre>
                  </div>
                </div>

                {/* ── Mobile Code Examples (hidden on xl where side panel shows) ── */}
                <div className="xl:hidden mt-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm">code</span>
                      Example Request
                    </h3>
                  </div>

                  {/* Language tabs */}
                  <div className="flex bg-white/[0.03] rounded-xl p-1 border border-white/5 mb-3 overflow-x-auto">
                    {codeLanguageKeys.map((lang) => (
                      <button
                        key={lang}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                          lang === activeCodeLang
                            ? 'bg-primary/15 text-primary shadow-sm'
                            : 'text-slate-500 hover:text-white'
                        }`}
                        onClick={() => setActiveCodeLang(lang)}
                      >
                        {codeLanguageLabels[lang]}
                      </button>
                    ))}
                  </div>

                  {/* Code block */}
                  <div className="relative rounded-2xl border border-white/5 bg-[#050505] group mb-6">
                    <div className="absolute right-3 top-3 z-10">
                      <button
                        className="p-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white border border-white/5 transition-all"
                        title="Copy code"
                        onClick={() => copyToClipboard(activeEndpoint.codeExamples[activeCodeLang], 'code-mobile')}
                      >
                        <span className="material-symbols-outlined text-[14px]">{copiedId === 'code-mobile' ? 'check' : 'content_copy'}</span>
                      </button>
                    </div>
                    <div className="p-5 overflow-x-auto">
                      <pre className="font-mono text-[13px] leading-relaxed text-slate-300 whitespace-pre">
                        {activeEndpoint.codeExamples[activeCodeLang]}
                      </pre>
                    </div>
                  </div>

                  {/* Live Sandbox */}
                  <div className="rounded-2xl border border-white/5 bg-[#030808] p-5">
                    <div className="flex items-center justify-between mb-5">
                      <h3 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-sm">terminal</span>
                        Try it Now
                      </h3>
                      <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                        </span>
                        <span className="text-[10px] text-emerald-400 font-semibold">Live Sandbox</span>
                      </div>
                    </div>

                    <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); sendRequest(); }}>
                      {/* Auth token */}
                      <label className="block">
                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-2 block">Authorization Token</span>
                        <div className="relative">
                          <input
                            className="w-full bg-black border border-white/5 text-slate-300 text-sm rounded-xl focus:ring-1 focus:ring-primary focus:border-primary block p-3 font-mono pr-10 placeholder:text-slate-700"
                            placeholder="sk_test_..."
                            type={showToken ? 'text' : 'password'}
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                          />
                          <button
                            type="button"
                            className="material-symbols-outlined text-slate-600 text-base absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-white transition-colors"
                            onClick={() => setShowToken(!showToken)}
                          >
                            {showToken ? 'visibility' : 'visibility_off'}
                          </button>
                        </div>
                      </label>

                      <div className="h-px bg-white/5" />

                      {/* Request body */}
                      {(activeEndpoint.method !== 'GET' && activeEndpoint.method !== 'DEL') && (
                        <div className="flex flex-col">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Request Body</span>
                            <button
                              className="text-xs text-primary hover:text-primary/80 transition-colors font-semibold flex items-center gap-1"
                              type="button"
                              onClick={() => setRequestBody(activeEndpoint.sandboxDefault)}
                            >
                              <span className="material-symbols-outlined text-sm">auto_fix_high</span>
                              Auto-fill
                            </button>
                          </div>
                          <div className="relative rounded-2xl border border-white/5 bg-black font-mono text-sm overflow-hidden min-h-[150px] flex flex-col">
                            <div className="flex border-b border-white/5">
                              <button
                                className={`px-3 py-2 text-xs font-semibold ${bodyMode === 'json' ? 'text-primary border-b-2 border-primary' : 'text-slate-600 hover:text-slate-300'}`}
                                type="button"
                                onClick={() => setBodyMode('json')}
                              >JSON</button>
                              <button
                                className={`px-3 py-2 text-xs font-semibold ${bodyMode === 'form' ? 'text-primary border-b-2 border-primary' : 'text-slate-600 hover:text-slate-300'}`}
                                type="button"
                                onClick={() => setBodyMode('form')}
                              >Form</button>
                            </div>
                            <textarea
                              className="w-full flex-1 bg-transparent border-none text-slate-300 focus:ring-0 p-4 font-mono text-[13px] leading-relaxed resize-none placeholder:text-slate-800 outline-none min-h-[120px]"
                              spellCheck={false}
                              value={requestBody}
                              onChange={(e) => setRequestBody(e.target.value)}
                              placeholder='{ "key": "value" }'
                            />
                          </div>
                        </div>
                      )}

                      {/* Response */}
                      {(sandboxResponse || sandboxLoading) && (
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Response</span>
                            {sandboxStatus && (
                              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                                sandboxStatus.code.startsWith('2') ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                              }`}>
                                {sandboxStatus.code} {sandboxStatus.text}
                              </span>
                            )}
                          </div>
                          <div className="rounded-2xl border border-white/5 bg-black p-4 overflow-x-auto max-h-[200px] overflow-y-auto">
                            {sandboxLoading ? (
                              <div className="flex items-center gap-2 text-slate-500">
                                <span className="material-symbols-outlined animate-spin text-sm">refresh</span>
                                <span className="text-xs">Sending request...</span>
                              </div>
                            ) : (
                              <pre className="font-mono text-[13px] leading-relaxed text-slate-300 whitespace-pre">{sandboxResponse}</pre>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Send button */}
                      <div className="pt-2">
                        <button
                          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-black font-bold rounded-xl px-4 py-3.5 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 disabled:opacity-50"
                          type="submit"
                          disabled={sandboxLoading}
                        >
                          {sandboxLoading ? (
                            <span className="material-symbols-outlined animate-spin text-[18px]">refresh</span>
                          ) : (
                            <span className="material-symbols-outlined text-[18px]">send</span>
                          )}
                          {sandboxLoading ? 'Sending...' : 'Send Request'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                </div>
                )}
              </div>
            </main>

            {/* ═══ Right Panel ═══ */}
            <aside className="w-[480px] flex-shrink-0 bg-[#050505] border-l border-white/5 overflow-y-auto hidden xl:flex flex-col">
              {/* Code example */}
              <div className="flex-1 flex flex-col p-5 pb-0">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">code</span>
                    Example Request
                  </h3>
                </div>

                {/* Language tabs */}
                <div className="flex bg-white/[0.03] rounded-xl p-1 border border-white/5 mb-3">
                  {codeLanguageKeys.map((lang) => (
                    <button
                      key={lang}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                        lang === activeCodeLang
                          ? 'bg-primary/15 text-primary shadow-sm'
                          : 'text-slate-500 hover:text-white'
                      }`}
                      onClick={() => setActiveCodeLang(lang)}
                    >
                      {codeLanguageLabels[lang]}
                    </button>
                  ))}
                </div>

                {/* Code block */}
                <div className="relative rounded-2xl border border-white/5 bg-black group mb-6">
                  <div className="absolute right-3 top-3 z-10">
                    <button
                      className="p-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white border border-white/5 transition-all"
                      title="Copy code"
                      onClick={() => copyToClipboard(activeEndpoint.codeExamples[activeCodeLang], 'code')}
                    >
                      <span className="material-symbols-outlined text-[14px]">{copiedId === 'code' ? 'check' : 'content_copy'}</span>
                    </button>
                  </div>
                  <div className="p-5 overflow-x-auto">
                    <pre className="font-mono text-[13px] leading-relaxed text-slate-300 whitespace-pre">
                      {activeEndpoint.codeExamples[activeCodeLang]}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Live Sandbox */}
              <div className="flex-1 flex flex-col p-5 border-t border-white/5 bg-[#030808]">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">terminal</span>
                    Try it Now
                  </h3>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                    </span>
                    <span className="text-[10px] text-emerald-400 font-semibold">Live Sandbox</span>
                  </div>
                </div>

                <form className="flex flex-col gap-4 flex-1" onSubmit={(e) => { e.preventDefault(); sendRequest(); }}>
                  {/* Auth token */}
                  <label className="block">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-2 block">Authorization Token</span>
                    <div className="relative">
                      <input
                        className="w-full bg-black border border-white/5 text-slate-300 text-sm rounded-xl focus:ring-1 focus:ring-primary focus:border-primary block p-3 font-mono pr-10 placeholder:text-slate-700"
                        placeholder="sk_test_..."
                        type={showToken ? 'text' : 'password'}
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                      />
                      <button
                        type="button"
                        className="material-symbols-outlined text-slate-600 text-base absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-white transition-colors"
                        onClick={() => setShowToken(!showToken)}
                      >
                        {showToken ? 'visibility' : 'visibility_off'}
                      </button>
                    </div>
                  </label>

                  <div className="h-px bg-white/5" />

                  {/* Request body (only for POST/PATCH/PUT) */}
                  {(activeEndpoint.method !== 'GET' && activeEndpoint.method !== 'DEL') && (
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Request Body</span>
                        <button
                          className="text-xs text-primary hover:text-primary/80 transition-colors font-semibold flex items-center gap-1"
                          type="button"
                          onClick={() => setRequestBody(activeEndpoint.sandboxDefault)}
                        >
                          <span className="material-symbols-outlined text-sm">auto_fix_high</span>
                          Auto-fill
                        </button>
                      </div>

                      <div className="relative rounded-2xl border border-white/5 bg-black font-mono text-sm overflow-hidden flex-1 min-h-[180px] flex flex-col">
                        <div className="flex border-b border-white/5">
                          <button
                            className={`px-3 py-2 text-xs font-semibold ${bodyMode === 'json' ? 'text-primary border-b-2 border-primary' : 'text-slate-600 hover:text-slate-300'}`}
                            type="button"
                            onClick={() => setBodyMode('json')}
                          >JSON</button>
                          <button
                            className={`px-3 py-2 text-xs font-semibold ${bodyMode === 'form' ? 'text-primary border-b-2 border-primary' : 'text-slate-600 hover:text-slate-300'}`}
                            type="button"
                            onClick={() => setBodyMode('form')}
                          >Form</button>
                        </div>
                        <textarea
                          className="w-full flex-1 bg-transparent border-none text-slate-300 focus:ring-0 p-4 font-mono text-[13px] leading-relaxed resize-none placeholder:text-slate-800 outline-none"
                          spellCheck={false}
                          value={requestBody}
                          onChange={(e) => setRequestBody(e.target.value)}
                          placeholder='{ "key": "value" }'
                        />
                      </div>
                    </div>
                  )}

                  {/* Response */}
                  {(sandboxResponse || sandboxLoading) && (
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Response</span>
                        {sandboxStatus && (
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            sandboxStatus.code.startsWith('2') ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                          }`}>
                            {sandboxStatus.code} {sandboxStatus.text}
                          </span>
                        )}
                      </div>
                      <div className="rounded-2xl border border-white/5 bg-black p-4 overflow-x-auto max-h-[200px] overflow-y-auto">
                        {sandboxLoading ? (
                          <div className="flex items-center gap-2 text-slate-500">
                            <span className="material-symbols-outlined animate-spin text-sm">refresh</span>
                            <span className="text-xs">Sending request...</span>
                          </div>
                        ) : (
                          <pre className="font-mono text-[13px] leading-relaxed text-slate-300 whitespace-pre">{sandboxResponse}</pre>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Send button */}
                  <div className="pt-2 mt-auto">
                    <button
                      className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-black font-bold rounded-xl px-4 py-3.5 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 disabled:opacity-50"
                      type="submit"
                      disabled={sandboxLoading}
                    >
                      {sandboxLoading ? (
                        <span className="material-symbols-outlined animate-spin text-[18px]">refresh</span>
                      ) : (
                        <span className="material-symbols-outlined text-[18px]">send</span>
                      )}
                      {sandboxLoading ? 'Sending...' : 'Send Request'}
                    </button>
                  </div>
                </form>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </div>
  );
}
