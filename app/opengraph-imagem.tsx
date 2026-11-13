import { ImageResponse } from "next/og";

export const alt = "AO Dev · Alann Oliveira";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 60,
        background: "#0B1F3A",
        color: "#FFFFFF",
      }}
    >
      <svg width="260" height="190" viewBox="0 0 152 112" fill="none">
        <path
          d="M10 100 L46 16 L82 100 M26 70 H66"
          stroke="#FFFFFF"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M133.2 41.4 A30 30 0 1 1 98.8 41.4"
          stroke="#FFFFFF"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M116 28 V62"
          stroke="#00C48C"
          strokeWidth="14"
          strokeLinecap="round"
        />
      </svg>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 84, fontWeight: 800 }}>Alann Oliveira</div>
        <div style={{ fontSize: 38, color: "#00C48C", marginTop: 12 }}>
          Desenvolvedor de sites e sistemas
        </div>
      </div>
    </div>,
    size,
  );
}
