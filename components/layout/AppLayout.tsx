type AppLayoutProps = {
  sidebar: React.ReactNode;
  children: React.ReactNode;
};

export default function AppLayout({
  sidebar,
  children,
}: AppLayoutProps) {
  return (
    <main className="flex min-h-screen bg-[#F4F7F4]">

      <aside className="w-72 border-r border-gray-200 bg-white">
        {sidebar}
      </aside>

      <section className="flex-1 p-10">
        {children}
      </section>

    </main>
  );
}