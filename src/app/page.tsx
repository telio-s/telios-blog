"use client";
import * as React from "react";
import Headers from "@/components/headers";
import BodyContent from "@/components/body";

export default function Home() {
  return (
    <div className="mx-auto h-screen w-full border-border/40 dark:border-border min-[1000px]:max-w-[1200px] min-[1000px]:border-x">
      <Headers />
      <BodyContent />
    </div>
  );
}
