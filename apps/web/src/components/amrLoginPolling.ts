// AMR removed — stubs for compilation.
export const AMR_LOGIN_STATUS_EVENT = 'amr:login-status-change';
export const AMR_LOGIN_POLL_INTERVAL_MS = 1_000;
export const AMR_LOGIN_STARTUP_SETTLE_MS = 500;

// Used as a function: amrLoginPollOutcome(status, startedAt) → string
export function amrLoginPollOutcome(..._args: unknown[]): 'signed-in' | 'stopped' | 'timed-out' | undefined {
  return undefined;
}

// Used as a function: amrLoginStatusEventReason(event) → string
export function amrLoginStatusEventReason(..._args: unknown[]): string | undefined {
  return undefined;
}

export function notifyAmrLoginStatusChanged(..._args: unknown[]): void {}
