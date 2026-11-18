import { ImageResponse } from 'next/og';

export const alt = 'Afrixtech: software, cloud and AI, built to last';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#f6f3ec', color: '#16130e', padding: 80 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 48 48">
            <path d="M4 44 L19.5 4 H28.5 L44 44 H35.5 L24 13.5 L12.5 44 Z" fill="#16130e" />
            <rect x="20.5" y="29" width="7" height="7" fill="#0f5a3c" />
          </svg>
          <div style={{ fontSize: 44, fontFamily: 'serif' }}>Afrixtech</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 92, lineHeight: 1.05, fontFamily: 'serif', letterSpacing: -2 }}>
          <div>Software, cloud and AI,</div>
          <div style={{ color: '#0f5a3c', fontStyle: 'italic' }}>built to last.</div>
        </div>
        <div style={{ fontSize: 28, color: '#6f685b' }}>Kumasi &amp; Accra, Ghana</div>
      </div>
    ),
    size,
  );
}
