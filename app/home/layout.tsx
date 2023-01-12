"use client";

import Header from "../../components/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      <div className="main__layout">{children}</div>
    </main>
  );
}
