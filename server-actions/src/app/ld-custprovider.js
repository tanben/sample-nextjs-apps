"use client";

import { LDProvider } from "launchdarkly-react-client-sdk";

export function LDCustomProvider(props) {
  const { children, providerConfig } = props;
  return <LDProvider {...providerConfig}>{children}</LDProvider>;
}
