import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#16130e' }}>
        <svg width="120" height="120" viewBox="0 0 48 48">
          <path d="M4 44 L19.5 4 H28.5 L44 44 H35.5 L24 13.5 L12.5 44 Z" fill="#f3efe6" />
          <rect x="20.5" y="29" width="7" height="7" fill="#6cc799" />
        </svg>
      </div>
    ),
    size,
  );
}
