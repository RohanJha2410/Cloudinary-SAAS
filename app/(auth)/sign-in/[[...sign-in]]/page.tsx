import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      {/* Center card wrapper */}
      <div className="relative w-full max-w-md px-4">
        {/* Soft gradient glow behind the card */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/40 via-sky-500/20 to-emerald-500/40 blur-3xl" />

        <SignIn
          appearance={{
            elements: {
              rootBox:
                "w-full rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-xl",
              card: "bg-transparent shadow-none",
              headerTitle: "text-xl font-semibold",
              headerSubtitle: "text-sm text-slate-400",
              formButtonPrimary:
                "bg-indigo-500 hover:bg-indigo-600 shadow-md",
            },
          }}
        />
      </div>
    </div>
  );
}
