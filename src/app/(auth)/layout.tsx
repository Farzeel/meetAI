export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className=" bg-[var(--muted)] min-h-svh  flex items-center justify-center  p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl   rounded-2xl  p-6">
          {children}
        </div>
      </div>
    );
  }