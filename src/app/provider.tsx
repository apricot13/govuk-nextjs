"use client";

import { BaseTemplate } from "@/components/layouts/BaseTemplate";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      {process.env.DEV && <>DEV MODE</>}
      <BaseTemplate>{children}</BaseTemplate>
    </>
  );
};
