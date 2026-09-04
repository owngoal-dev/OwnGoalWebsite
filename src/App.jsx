import { appProjects, tweakProjects } from './projects.js';

function ArrowUpRight({ className = '' }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function ProjectIcon({ item }) {
  if (!item.icon) {
    return (
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-black/5 bg-neutral-100 text-base font-semibold text-neutral-400 dark:border-white/10 dark:bg-neutral-800 dark:text-neutral-500"
      >
        {item.name[0]}
      </span>
    );
  }

  return (
    <img
      src={item.icon}
      alt=""
      width="40"
      height="40"
      loading="lazy"
      className="h-10 w-10 shrink-0 rounded-[10px] border border-black/5 dark:border-white/10"
    />
  );
}

function ProjectCard({ item }) {
  return (
    <a
      className="group flex items-center gap-3.5 rounded-xl border border-black/10 bg-white px-4 py-3.5 no-underline transition duration-200 hover:-translate-y-0.5 hover:border-black/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-neutral-900 dark:hover:border-white/30 dark:hover:shadow-none"
      href={item.href}
      target="_blank"
      rel="noreferrer"
    >
      <ProjectIcon item={item} />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[15px] font-semibold text-neutral-900 dark:text-neutral-50">
          {item.name}
        </span>
        <span className="mt-0.5 block text-[13px] text-neutral-500 dark:text-neutral-400">
          {item.source}
        </span>
      </span>
      <ArrowUpRight className="shrink-0 text-neutral-300 transition duration-200 group-hover:text-neutral-900 dark:text-neutral-600 dark:group-hover:text-neutral-50" />
    </a>
  );
}

function ProjectSection({ id, label, projects, delayClass }) {
  return (
    <section className={`reveal ${delayClass}`} aria-labelledby={id}>
      <div className="mb-4 flex items-baseline justify-between">
        <h2
          id={id}
          className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50"
        >
          {label}
        </h2>
        <span className="text-sm tabular-nums text-neutral-400 dark:text-neutral-500">
          {String(projects.length).padStart(2, '0')}
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard item={project} key={project.name} />
        ))}
      </div>
    </section>
  );
}

function FooterLink({ href, children }) {
  const external = href.startsWith('http');

  return (
    <a
      className="text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition hover:text-neutral-900 dark:text-neutral-400 dark:decoration-neutral-600 dark:hover:text-white"
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-dvh bg-neutral-50 font-sans text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-50">
      <a
        className="fixed top-4 left-4 z-50 -translate-y-24 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium transition focus:translate-y-0 dark:border-white/10 dark:bg-neutral-900"
        href="#main"
      >
        Skip to content
      </a>

      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
        <a
          href="/"
          className="flex items-center gap-2 no-underline"
          aria-label="Own Goal Studio home"
        >
          <img src="/favicon.svg" alt="" width="20" height="20" className="h-5 w-5 dark:invert" />
          <span className="text-sm font-semibold tracking-tight">OwnGoal Studio</span>
        </a>
        <nav className="flex items-center gap-5 text-[13px] font-medium text-neutral-600 dark:text-neutral-300">
          <a
            className="no-underline transition hover:text-neutral-900 dark:hover:text-white"
            href="https://github.com/owngoal-dev"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="no-underline transition hover:text-neutral-900 dark:hover:text-white"
            href="https://discord.gg/vqhDEep2mN"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>
          <a
            className="no-underline transition hover:text-neutral-900 dark:hover:text-white"
            href="mailto:not-gonna-reply@owngoal.dev"
          >
            Contact
          </a>
        </nav>
      </header>

      <main id="main" className="mx-auto w-full max-w-5xl px-6">
        <section className="reveal reveal-1 pt-14 pb-16 text-center sm:pt-20">
          <h1 className="mx-auto text-[clamp(1.3rem,2.9vw,2rem)] leading-tight font-bold tracking-tight text-balance md:whitespace-nowrap">
            High-Quality Apps &amp; Tweaks for iCFW
          </h1>
        </section>

        <div className="mx-auto flex max-w-3xl flex-col gap-12 pb-8">
          <ProjectSection
            id="apps-title"
            label="Apps"
            projects={appProjects}
            delayClass="reveal-2"
          />
          <ProjectSection
            id="tweaks-title"
            label="Tweaks"
            projects={tweakProjects}
            delayClass="reveal-3"
          />
        </div>

        <footer className="reveal reveal-4 border-t border-black/5 py-10 text-center text-[13px] text-neutral-400 dark:border-white/5 dark:text-neutral-500">
          <p className="m-0">
            OwnGoal Studio © {new Date().getFullYear()}
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            <FooterLink href="https://github.com/owngoal-dev">GitHub</FooterLink>
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            <FooterLink href="https://discord.gg/vqhDEep2mN">Discord</FooterLink>
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            <FooterLink href="mailto:not-gonna-reply@owngoal.dev">Email</FooterLink>
          </p>
        </footer>
      </main>
    </div>
  );
}
