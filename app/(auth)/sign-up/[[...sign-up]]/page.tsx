import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="relative w-full max-w-md px-4">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/40 via-pink-500/20 to-red-500/40 blur-3xl" />

        <SignUp
          appearance={{
            elements: {
              rootBox:
                "w-full rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-xl",
              card: "bg-transparent shadow-none",
              headerTitle: "text-xl font-semibold",
              headerSubtitle: "text-sm text-slate-400",
              formButtonPrimary: "bg-purple-600 hover:bg-purple-700 shadow-md",
            },
          }}
        />
      </div>
    </div>
  );
}
