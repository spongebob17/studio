export default function StudioDashboard() {
  const sections = [
    {
      eyebrow: 'Intelligence',
      title: 'Intelligence',
      description: 'Viral patterns, AI news, and agent activity. What is moving, what is working, and what to build next.',
      status: 'Active',
      statusColor: 'text-green-600 bg-green-50',
    },
    {
      eyebrow: 'Image Studio',
      title: 'Image Studio',
      description: 'Create assets and branded templates. Brief Dolly, generate visuals, manage the creative library.',
      status: 'Coming soon',
      statusColor: 'text-[#6B7280] bg-[#F3F0EC]',
    },
    {
      eyebrow: 'Video Suite',
      title: 'Video Suite',
      description: 'Scripts, production queue, and HeyGen / Runway integration. One place for everything that moves.',
      status: 'Coming soon',
      statusColor: 'text-[#6B7280] bg-[#F3F0EC]',
    },
    {
      eyebrow: 'Pipeline',
      title: 'Pipeline',
      description: 'Content queue, approval flow, and scheduled publishing. Nothing ships without the sign-off.',
      status: 'Coming soon',
      statusColor: 'text-[#6B7280] bg-[#F3F0EC]',
    },
  ]

  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-dm), system-ui, sans-serif' }}>

      {/* Header */}
      <header className="border-b border-[rgba(26,26,26,0.10)] px-6 py-4 flex items-center justify-between">
        <span style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }} className="text-[#1A1A1A] text-[14px] font-medium">
          Meek Studio
        </span>
        <span className="text-[12px] text-[#6B7280]">v1.0.0</span>
      </header>

      {/* Dashboard */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-[11px] font-bold tracking-widest text-[#C4714A] uppercase mb-3">Studio</p>
        <h1
          style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }}
          className="text-[#1A1A1A] text-[28px] font-[300] mb-10"
        >
          What are we building today.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sections.map((section) => (
            <div
              key={section.eyebrow}
              className="border border-[rgba(26,26,26,0.10)] bg-white p-6 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-[11px] font-bold tracking-widest text-[#C4714A] uppercase">
                  {section.eyebrow}
                </p>
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide flex-shrink-0 ${section.statusColor}`}>
                  {section.status}
                </span>
              </div>
              <p
                style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }}
                className="text-[#1A1A1A] text-[18px] font-[300] leading-snug"
              >
                {section.title}
              </p>
              <p className="text-[13px] text-[#6B7280] leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </main>

    </div>
  )
}
