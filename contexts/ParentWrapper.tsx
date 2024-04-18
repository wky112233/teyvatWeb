"use client";
import React from "react";
import { SnackbarProvider } from "@/contexts/SnackbarContext";
import { DataProvider } from "@/contexts/DataContext";

export default function ParentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SnackbarProvider>
      <DataProvider>{children}</DataProvider>
    </SnackbarProvider>
  );
}
