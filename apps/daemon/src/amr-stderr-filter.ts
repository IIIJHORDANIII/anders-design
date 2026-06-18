/**
 * Stderr visibility filter for agent subprocesses.
 *
 * Previously filtered AMR-specific noise (gpu-architecture-mismatch warnings,
 * model-loading progress lines, Jupyter/heartbeat frames). With AMR removed,
 * this passes everything through — all agent stderr is visible by default.
 */

export type AgentStderrVisibilityFilter = {
  write(chunk: string | Buffer): string;
  flush(): string;
};

export function createAgentStderrVisibilityFilter(_agentId: string): AgentStderrVisibilityFilter {
  return {
    write(chunk: string | Buffer): string {
      return typeof chunk === "string" ? chunk : chunk.toString("utf8");
    },
    flush(): string {
      return "";
    },
  };
}
