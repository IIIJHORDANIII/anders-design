// AMR removed — stubs for compilation.
export type TrackingAmrEntrySource = string;
export type TrackingFn = (...args: unknown[]) => void;

export interface AmrEntryAttribution {
  source: TrackingAmrEntrySource;
  detail?: string;
}

export function amrHandoffDeviceId(..._args: unknown[]): string | null {
  return null;
}
export function attributedAmrUrl(url?: string | null, ..._args: unknown[]): string {
  return url ?? '';
}
export function recordAmrEntry(..._args: unknown[]): null {
  return null;
}
export function syncAmrAttributionWithOnboardingProfile(..._args: unknown[]): void {}
