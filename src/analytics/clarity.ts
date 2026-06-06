export function getClarityConfig() {
  return {
    projectId: process.env.NEXT_PUBLIC_CLARITY_ID || ""
  };
}

export function canEnableClarity() {
  return Boolean(process.env.NEXT_PUBLIC_CLARITY_ID);
}
