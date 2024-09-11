"use client";

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      {process.env.DEV && <>DEV MODE</>}
      {children}
    </>
  );
};
