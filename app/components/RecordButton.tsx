"use client";

import { useState } from "react";

// アイコンは Heroicons (https://heroicons.com, MIT License) の
// "microphone" / "stop" (24x24 outline) の SVG パスを使用している。
function MicrophoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
      className="h-9 w-9"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
      />
    </svg>
  );
}

function StopIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
      className="h-9 w-9"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
      />
    </svg>
  );
}

// 録音ボタンのモック。押すと見た目だけ「録音中」に切り替わる（実際の録音はまだしない）。
export default function RecordButton() {
  const [recording, setRecording] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={() => setRecording((r) => !r)}
        aria-pressed={recording}
        aria-label={recording ? "録音停止" : "録音開始"}
        className={`relative flex h-20 w-20 items-center justify-center rounded-full text-white shadow-lg transition-all duration-150 active:scale-90 active:shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D38006]/40 ${
          recording
            ? "bg-red-500 hover:bg-red-600"
            : "bg-[#D38006] hover:bg-[#b86f05] hover:-translate-y-0.5"
        }`}
      >
        {recording && (
          <span className="absolute inset-0 animate-ping rounded-full bg-red-500/40" />
        )}
        <span className="relative">
          {recording ? <StopIcon /> : <MicrophoneIcon />}
        </span>
      </button>
      <p
        className={`text-sm font-medium ${
          recording ? "text-red-500" : "text-zinc-600 dark:text-zinc-400"
        }`}
      >
        {recording ? "録音中…（タップで停止）" : "録音開始"}
      </p>
    </div>
  );
}
