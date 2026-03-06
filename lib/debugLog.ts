type DebugPayload = {
  hypothesisId: string;
  location: string;
  message: string;
  data: Record<string, unknown>;
  timestamp: number;
};

declare global {
  interface Window {
    __agentDebugLog?: DebugPayload[];
  }
}

export const debugLog = (payload: Omit<DebugPayload, "timestamp">) => {
  const entry: DebugPayload = { ...payload, timestamp: Date.now() };

  if (typeof window === "undefined") {
    try {
      require("fs").appendFileSync(
        "/opt/cursor/logs/debug.log",
        `${JSON.stringify(entry)}\n`,
      );
    } catch {}
    return;
  }

  window.__agentDebugLog = window.__agentDebugLog ?? [];
  window.__agentDebugLog.push(entry);
  console.log("__AGENT_DEBUG__", entry);
};
