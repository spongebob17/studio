import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'var(--font-dm), system-ui, sans-serif' }}>

      {/* Nav */}
      <nav className="border-b border-[rgba(26,26,26,0.10)] px-6 py-4 flex items-center justify-between">
        <span style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }} className="text-[#1A1A1A] text-[14px] font-medium">
          Meek Studio
        </span>
        <Link
          href="/studio"
          className="text-[13px] text-[#6B7280] hover:text-[#1A1A1A] transition-colors"
        >
          Sign in
        </Link>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1
          style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }}
          className="text-[#1A1A1A] text-[46px] font-[200] leading-tight mb-6 max-w-2xl"
        >
          Your content. Your system. Your voice.
        </h1>
        <p className="text-[15px] text-[#6B7280] leading-relaxed mb-10 max-w-md">
          The private operating system for Meek Systems content. Not a tool. A studio.
        </p>
        <Link
          href="/studio"
          className="bg-[#1A1A1A] text-[#FAF8F5] font-[500] text-[13px] px-6 py-3 hover:bg-[#2a2a2a] transition-colors"
        >
          Sign in
        </Link>
      </main>

      {/* Footer */}
      <footer className="border-t border-[rgba(26,26,26,0.10)] px-6 py-4">
        <p className="text-[11px] text-[rgba(107,114,128,0.6)] text-center">By Meek Systems</p>
      </footer>

    </div>
  )
}
