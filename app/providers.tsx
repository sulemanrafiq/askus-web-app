// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "./context/AuthProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <AuthProvider>{children}</AuthProvider>
    </NextUIProvider>
  );
}
