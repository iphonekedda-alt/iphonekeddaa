export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col gap-6 px-4 py-24 sm:px-6 lg:px-8">
      <div className="skeleton h-16 w-40 rounded-full" />
      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.95fr]">
        <div className="skeleton min-h-[420px] rounded-[2rem]" />
        <div className="grid gap-6">
          <div className="skeleton min-h-[200px] rounded-[2rem]" />
          <div className="skeleton min-h-[200px] rounded-[2rem]" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="skeleton h-40 rounded-[1.75rem]" />
        ))}
      </div>
    </div>
  );
}
