import type { CSSProperties } from "react";
import portfolio from "@/data/portfolio.json";
import PortfolioEffects from "@/components/PortfolioEffects";

type SectionHeaderProps = {
  number: string;
  title: string;
};

function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="mb-14 flex items-baseline gap-4 sm:gap-6">
      <span className="font-mono text-xs tracking-[0.2em] text-[var(--accent)] opacity-60">
        {number}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-[var(--border)]" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative bg-[var(--bg)] text-[var(--text)]">
      <PortfolioEffects />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(100,200,160,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,200,160,0.03)_1px,transparent_1px)] [background-size:60px_60px]" />

      <nav className="fixed left-0 right-0 top-0 z-[100] border-b border-[var(--border)] bg-[rgba(5,10,15,0.75)] backdrop-blur-xl">
        <div className="flex w-full items-center justify-between px-5 py-4 sm:px-12">
          <a className="font-display text-xl font-extrabold text-[var(--accent)]" href="#" data-interactive="true">
            {portfolio.site.logo}
          </a>
          <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.12em] text-[var(--text-muted)] md:flex">
            {portfolio.navigation.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-[var(--accent)]" href={item.href} data-interactive="true">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-muted)]">
            <span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            {portfolio.site.availability}
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="relative min-h-screen overflow-hidden px-5 pb-[80px] pt-[200px] sm:px-12 sm:pt-[400px]">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 800px 600px at 60% 50%, rgba(0,201,255,0.06) 0%, transparent 70%), radial-gradient(ellipse 600px 400px at 20% 80%, rgba(61,255,160,0.05) 0%, transparent 60%), radial-gradient(ellipse 400px 300px at 80% 20%, rgba(255,107,107,0.04) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-[1] mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_380px] lg:gap-20">
            <div>
              <p className="hero-eyebrow mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
                {portfolio.hero.eyebrow}
              </p>
              <h1 className="mb-7 font-display font-extrabold leading-[0.95] tracking-[-3px]" style={{ fontSize: "clamp(52px, 7vw, 88px)" }}>
                <span className="block">{portfolio.hero.name.first}</span>
                <span className="block [-webkit-text-stroke:1px_rgba(61,255,160,0.5)] text-transparent">
                  {portfolio.hero.name.last}
                </span>
              </h1>
              <p className="mb-10 max-w-[480px] text-base leading-[1.8] text-[var(--text-muted)]">
                {portfolio.hero.description}
              </p>
              <div className="mb-12 flex flex-wrap gap-2">
                {portfolio.hero.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-[var(--border)] bg-white/[0.02] px-3 py-[5px] font-mono text-[11px] tracking-[0.05em] text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:bg-[rgba(61,255,160,0.05)] hover:text-[var(--accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {portfolio.hero.actions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    data-interactive="true"
                    className={
                      action.variant === "primary"
                        ? "inline-flex items-center gap-2 rounded-sm bg-[var(--accent)] px-8 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.1em] text-[var(--bg)] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_30px_rgba(61,255,160,0.3)]"
                        : "inline-flex items-center gap-2 rounded-sm border border-[var(--border)] px-8 py-3.5 font-mono text-xs uppercase tracking-[0.1em] text-[var(--text-muted)] transition hover:border-[var(--accent2)] hover:bg-[rgba(0,201,255,0.05)] hover:text-[var(--accent2)]"
                    }
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>

            <aside
              className="reveal lift-card hero-card rounded-lg border border-[var(--border)] bg-[var(--surface)] p-8"
              data-reveal
              data-interactive="true"
            >
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--text-dim)]">
                {portfolio.hero.statusCard.label}
              </p>
              {portfolio.hero.statusCard.items.map((item) => (
                <div className="mb-7 last:mb-0" key={item.title}>
                  <h3 className="mb-2 font-display text-[13px] font-semibold tracking-[0.02em] text-[var(--accent)]">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-[1.6] text-[var(--text-muted)]">{item.text}</p>
                </div>
              ))}
              <div className="mt-5 flex items-center gap-2 border-t border-[var(--border)] pt-5 font-mono text-[11px] text-[var(--text-dim)]">
                <span>📍</span>
                <span className="text-[var(--text-muted)]">{portfolio.hero.statusCard.location}</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8" id="about">
          <SectionHeader number={portfolio.summary.sectionNumber} title={portfolio.summary.title} />
          <div className="grid gap-2 md:grid-cols-2">
            {portfolio.summary.blocks.map((block, index) => (
              <article
                key={block.title}
                className={`reveal lift-card border border-[var(--border)] bg-[var(--surface)] p-8 ${
                  block.large ? "md:col-span-2 md:bg-[var(--surface2)]" : ""
                }`}
                data-reveal
                data-interactive="true"
                style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
              >
                <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.06em] text-[var(--accent)]">
                  {block.title}
                </h3>
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-3 text-sm leading-7 text-[var(--text-muted)] last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8" id="education">
          <SectionHeader
            number={portfolio.education.sectionNumber}
            title={portfolio.education.title}
          />
          <div className="relative border-l border-[var(--border)] pl-8">
            {portfolio.education.items.map((item, index) => (
              <article
                className="reveal relative mb-10 last:mb-0"
                key={`${item.degree}-${item.school}`}
                data-reveal
                style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}
              >
                <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border border-[var(--accent)] bg-[var(--bg)]" />
                <h3 className="font-display text-2xl font-bold tracking-tight">{item.degree}</h3>
                <p className="mt-1 font-mono text-xs tracking-[0.08em] text-[var(--accent2)]">
                  {item.school}
                </p>
                <p className="font-mono text-xs text-[var(--text-dim)]">{item.period}</p>
                <p className="mt-3 text-sm text-[var(--text-muted)]">{item.field}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8" id="experience">
          <SectionHeader
            number={portfolio.experience.sectionNumber}
            title={portfolio.experience.title}
          />
          <div className="grid gap-2 md:grid-cols-2">
            {portfolio.experience.items.map((item, index) => (
              <article
                key={`${item.role}-${item.company}`}
                className={`reveal lift-card border border-[var(--border)] bg-[var(--surface)] p-8 transition hover:border-[rgba(61,255,160,0.25)] hover:bg-[var(--surface2)] ${
                  item.fullWidth ? "md:col-span-2" : ""
                }`}
                data-reveal
                data-interactive="true"
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <p className="mb-1 font-mono text-xs uppercase tracking-[0.1em] text-[var(--accent)]">
                  {item.role}
                </p>
                <h3 className="font-display text-2xl font-bold tracking-tight">{item.company}</h3>
                <p className="mb-5 mt-1 font-mono text-xs text-[var(--text-dim)]">{item.period}</p>
                <ul className="space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm leading-6 text-[var(--text-muted)]">
                      <span className="text-[var(--accent)]">&gt;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[var(--border)] bg-[var(--surface)] py-20" id="stack">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <SectionHeader
              number={portfolio.techStack.sectionNumber}
              title={portfolio.techStack.title}
            />
            <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
              {portfolio.techStack.categories.map((category, index) => (
                <article
                  key={category.label}
                  className="reveal lift-card border border-[var(--border)] p-7"
                  data-reveal
                  data-interactive="true"
                  style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
                >
                  <h3 className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                    {category.label}
                  </h3>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <div key={item.name}>
                        <div className="mb-1 flex items-center justify-between text-sm">
                          <span>{item.name}</span>
                          <span className="font-mono text-[10px] text-[var(--text-dim)]">{item.level}%</span>
                        </div>
                        <div className="h-1.5 rounded bg-[rgba(100,200,160,0.15)]">
                          <div
                            className="skill-fill h-1.5 origin-left rounded bg-[linear-gradient(90deg,var(--accent),var(--accent2))]"
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8" id="projects">
          <SectionHeader number={portfolio.projects.sectionNumber} title={portfolio.projects.title} />
          <div className="grid gap-2 md:grid-cols-2">
            {portfolio.projects.items.map((item, index) => (
              <article
                key={item.title}
                className={`reveal lift-card border border-[var(--border)] p-8 ${
                  item.featured
                    ? "bg-[linear-gradient(135deg,var(--surface2),rgba(61,255,160,0.05))]"
                    : "bg-[var(--surface)]"
                }`}
                data-reveal
                data-interactive="true"
                style={{ "--reveal-delay": `${index * 120}ms` } as CSSProperties}
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <span className="rounded-sm border border-[rgba(61,255,160,0.28)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--accent)]">
                    {item.type}
                  </span>
                  <span className="rounded bg-[rgba(61,255,160,0.1)] px-2 py-1 font-mono text-[11px] text-[var(--accent)]">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-display text-3xl font-bold tracking-tight">{item.title}</h3>
                <p className="mb-4 mt-1 font-mono text-xs text-[var(--text-dim)]">{item.org}</p>
                <p className="mb-6 text-sm leading-7 text-[var(--text-muted)]">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-[rgba(0,201,255,0.2)] bg-[rgba(0,201,255,0.08)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--accent2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8" id="consulting">
          <SectionHeader
            number={portfolio.consulting.sectionNumber}
            title={portfolio.consulting.title}
          />
          <div className="grid gap-2 md:grid-cols-2">
            <article
              className="reveal lift-card border border-[var(--border)] bg-[var(--surface)] p-8"
              data-reveal
              data-interactive="true"
              style={{ "--reveal-delay": "20ms" } as CSSProperties}
            >
              <h3 className="mb-4 font-display text-2xl font-bold tracking-tight">
                {portfolio.consulting.servicesTitle}
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                {portfolio.consulting.services.map((service) => (
                  <li key={service} className="flex gap-2">
                    <span className="text-[var(--accent)]">*</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article
              className="reveal lift-card border border-[var(--border)] bg-[var(--surface)] p-8"
              data-reveal
              data-interactive="true"
              style={{ "--reveal-delay": "120ms" } as CSSProperties}
            >
              <h3 className="mb-4 font-display text-2xl font-bold tracking-tight">
                {portfolio.consulting.backgroundTitle}
              </h3>
              <p className="text-sm leading-7 text-[var(--text-muted)]">{portfolio.consulting.background}</p>
            </article>
          </div>
          <div className="mt-8 grid gap-2 md:grid-cols-3">
            {portfolio.consulting.stats.map((stat, index) => (
              <article
                key={stat.label}
                className="reveal lift-card border border-[var(--border)] bg-[var(--surface)] p-8 text-center"
                data-reveal
                data-interactive="true"
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <p className="font-display text-6xl font-extrabold tracking-[-0.06em] text-[var(--accent)]">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-[var(--text-dim)]">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{stat.sublabel}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[var(--border)] py-20" id="contact">
          <div className="mx-auto grid w-full max-w-6xl gap-2 px-5 sm:px-8 md:grid-cols-2">
            <article
              className="reveal lift-card border border-[var(--border)] bg-[var(--surface)] p-10 sm:p-14"
              data-reveal
              data-interactive="true"
            >
              <h2 className="mb-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                Let&apos;s work <span className="text-[var(--accent)]">together</span>
              </h2>
              <p className="max-w-md text-sm leading-7 text-[var(--text-muted)]">
                {portfolio.contact.subtitle}
              </p>
            </article>
            <article
              className="reveal lift-card border border-[var(--border)] bg-[var(--surface2)] p-10 sm:p-14"
              data-reveal
              data-interactive="true"
              style={{ "--reveal-delay": "100ms" } as CSSProperties}
            >
              <div className="space-y-5">
                {portfolio.contact.items.map((item) => (
                  <div key={item.label} className="border-b border-[var(--border)] pb-4 last:border-b-0 last:pb-0">
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-dim)]">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        className="text-base text-[var(--text)] transition hover:text-[var(--accent)]"
                        href={item.href}
                        data-interactive="true"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base text-[var(--text)]">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-5 py-8 font-mono text-xs text-[var(--text-dim)] sm:flex-row sm:items-center sm:px-8">
        <p className="font-display text-base font-bold text-[var(--text-muted)]">{portfolio.site.footerBrand}</p>
        <p>{portfolio.site.footerCopy}</p>
      </footer>
    </div>
  );
}
