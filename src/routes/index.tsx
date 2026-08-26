import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  CircuitBoard,
  Cpu,
  MapPin,
  Mail,
  Phone,
  Quote,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCountUp, useReveal } from "@/components/landing/hooks";
import {
  WHATSAPP_LINK,
  courses,
  faqs,
  plans,
  projects,
  stats,
  steps,
  testimonials,
  type Project,
} from "@/components/landing/data";
import logo from "@/assets/logo.png.asset.json";
import heroWorkshop from "@/assets/hero-workshop.jpg";

const SITE_TITLE = "Curious Mindz | Hands-On Robotics Workshops for Class 4-11";
const SITE_DESCRIPTION =
  "In-person robotics and innovation workshops for students of class 4 to 11. Small batches, personal kits, a working project every module. Learn. Create. Innovate.";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Curious Mindz",
          slogan: "Learn. Create. Innovate.",
          description: SITE_DESCRIPTION,
          areaServed: "India",
          audience: { "@type": "EducationalAudience", educationalRole: "student" },
          url: "/",
        }),
      },
    ],
  }),
});

/* ---------------------------------- shell --------------------------------- */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      data-visible={visible}
      className={`reveal ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p> : null}
    </Reveal>
  );
}

const navLinks = [
  { href: "#course", label: "The programme" },
  { href: "#projects", label: "Student work" },
  { href: "#courses", label: "Courses" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-3">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo.url} alt="Curious Mindz logo" width={40} height={40} className="h-10 w-10" />
          <span className="font-display text-lg font-bold leading-none">
            Curious <span className="text-gradient">Mindz</span>
            <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Learn. Create. Innovate.
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="shadow-none">
            <a href="#contact">Book free trial</a>
          </Button>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-border p-2 lg:hidden"
          >
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="mt-1 block h-0.5 w-5 bg-foreground" />
            <span className="mt-1 block h-0.5 w-5 bg-foreground" />
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 lg:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}

function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Curious Mindz on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-brand-green px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.06c-.25.7-1.44 1.34-1.98 1.39-.54.05-1.05.24-3.5-.86-2.72-1.22-4.42-4.11-4.55-4.3-.13-.19-1.07-1.53-1.03-2.9.04-1.37.77-2.03 1.04-2.31.27-.28.58-.34.78-.34.2 0 .4.01.57.02.19.01.44-.07.68.55.25.64.83 2.2.9 2.36.07.16.12.35.02.54-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.14.14-.29.29-.13.57.16.28.71 1.2 1.53 1.95 1.05.96 1.94 1.26 2.21 1.4.28.14.44.12.61-.06.17-.19.72-.83.91-1.11.19-.29.38-.24.64-.14.26.1 1.64.79 1.92.93.28.14.47.21.54.33.07.11.07.66-.18 1.36Z" />
      </svg>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

/* --------------------------------- sections -------------------------------- */

function Hero() {
  return (
    <section id="top" className="hero-aura relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            In-person robotics labs for class 4 - 11
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:text-6xl">
            Your child stops watching technology and starts{" "}
            <span className="text-gradient">building it</span>.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Curious Mindz runs live, hands-on robotics and innovation workshops — batches of eight, a
            personal kit for every child, and a working project they carry home from every module.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full px-7 text-base">
              <a href="#contact">
                Book a free trial workshop
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-7 text-base">
              <a href="#projects">See what students built</a>
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["8 students per mentor", "Kits included", "Weekend & evening batches"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-green" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="glass overflow-hidden rounded-[2rem] p-2">
            <img
              src={heroWorkshop}
              alt="Children building robot cars together at a Curious Mindz in-person workshop"
              width={1400}
              height={1000}
              className="h-full w-full rounded-[1.6rem] object-cover"
            />
          </div>
          <div className="glass floaty absolute -bottom-6 -left-4 hidden rounded-2xl px-4 py-3 sm:block">
            <p className="text-2xl font-bold text-primary">1,200+</p>
            <p className="text-xs text-muted-foreground">young makers taught</p>
          </div>
          <div className="glass absolute -right-3 top-6 hidden rounded-2xl px-4 py-3 sm:block">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <CircuitBoard className="h-4 w-4 text-brand-orange" aria-hidden="true" />
              100% hands-on
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-5">
        <div className="glass grid grid-cols-2 gap-6 rounded-3xl px-6 py-8 sm:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: current } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
        {current.toLocaleString("en-IN")}
        {suffix}
      </p>
      <p className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">{label}</p>
    </div>
  );
}

const contextCards = [
  {
    icon: Wrench,
    title: "Built, not watched",
    text: "Every session ends with hardware that moves, senses or lights up. No slide decks, no passive theory.",
  },
  {
    icon: Cpu,
    title: "A real engineering ladder",
    text: "Circuits to sensors, block coding to embedded C, single robots to IoT systems — sequenced by grade.",
  },
  {
    icon: Users,
    title: "Eight students, one mentor",
    text: "Small benches mean mistakes get caught the moment they happen, and shy children still get their turn.",
  },
  {
    icon: CalendarCheck,
    title: "Fits a working parent's week",
    text: "Weekend and weekday-evening batches, fixed slots for the whole module, and progress notes you can read on the commute.",
  },
];

function CourseContext() {
  return (
    <section id="course" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="The programme"
          title={
            <>
              A robotics curriculum designed for <span className="text-gradient">curious hands</span>
            </>
          }
          subtitle="School teaches the theory. We give children the workbench, the components and the mentor time to turn that theory into something that actually works."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contextCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article className="lift h-full rounded-2xl border border-border bg-card p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <c.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <div className="glass rounded-[2rem] p-8 sm:p-10">
            <img src={logo.url} alt="Curious Mindz logo" width={92} height={92} className="h-20 w-20" />
            <p className="mt-6 font-display text-2xl font-bold leading-snug">
              &ldquo;A child who has wired a sensor once never fears technology again.&rdquo;
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              That single idea started Curious Mindz. We are engineers and educators who left product
              teams to build the lab we wished we had at twelve.
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About us"
            title={
              <>
                Practising engineers, teaching the <span className="text-gradient">way we learned</span>
              </>
            }
            subtitle="Our mentors come from robotics, embedded systems and product design. We keep batches small deliberately — our mandate is depth, not enrolment numbers."
          />
          <ul className="mt-8 grid gap-4">
            {[
              "Curriculum authored by working robotics and embedded engineers",
              "Mentor-to-student ratio locked at 1:8, in every batch, always",
              "Safety-first labs: low-voltage kits, supervised soldering, briefings before every build",
              "Transparent parent reporting after every module, with your child's own project demo",
            ].map((point, i) => (
              <Reveal key={point} delay={i * 80}>
                <li className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm leading-relaxed">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProjectsShowcase() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Student showcase"
          title={
            <>
              Projects our students <span className="text-gradient">actually finished</span>
            </>
          }
          subtitle="Tap any project to see the grade level, the build time and the engineering skills behind it."
        />

        <Reveal className="mt-14">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="-ml-4">
              {projects.map((p) => (
                <CarouselItem key={p.title} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className="lift group h-full w-full overflow-hidden rounded-2xl border border-border bg-card text-left"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="p-5">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-orange">
                        {p.grade}
                      </span>
                      <h3 className="mt-1.5 text-lg font-semibold">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        View project
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </div>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-3 hidden sm:flex" />
            <CarouselNext className="-right-3 hidden sm:flex" />
          </Carousel>
        </Reveal>
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-lg">
          {active ? (
            <>
              <img
                src={active.image}
                alt={active.title}
                loading="lazy"
                width={800}
                height={600}
                className="h-52 w-full rounded-xl object-cover"
              />
              <DialogHeader>
                <DialogTitle className="text-xl">{active.title}</DialogTitle>
                <DialogDescription>{active.blurb}</DialogDescription>
              </DialogHeader>
              <div className="flex flex-wrap gap-2">
                {[active.grade, active.duration, ...active.skills].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{active.details}</p>
              <Button asChild className="rounded-full">
                <a href="#contact" onClick={() => setActive(null)}>
                  Book a trial for this level
                </a>
              </Button>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Courses() {
  return (
    <section id="courses" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Courses offered"
          title={
            <>
              Three tracks, mapped to your child&apos;s <span className="text-gradient">grade</span>
            </>
          }
          subtitle="Each track is a sequence of in-person modules. Children move up when the mentor and the projects say they are ready."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {courses.map((c, i) => (
            <Reveal key={c.title} delay={i * 110}>
              <article className="lift flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-44 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-green">
                    {c.grade}
                  </span>
                  <h3 className="mt-1.5 text-xl font-semibold">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{c.tagline}</p>
                  <ul className="mt-5 space-y-2.5 text-sm">
                    {c.offerings.map((o) => (
                      <li key={o} className="flex gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span className="text-muted-foreground">{o}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="mt-6 w-full rounded-full">
                    <a href="#contact">Enquire about {c.title}</a>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Three steps from curious to <span className="text-gradient">building</span>
            </>
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 120}>
              <article className="glass relative h-full rounded-2xl p-7">
                <span className="font-display text-5xl font-extrabold text-primary/15">{s.step}</span>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Parent stories"
          title={
            <>
              What <span className="text-gradient">parents</span> tell us after a module
            </>
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <figure className="lift flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <Quote className="h-7 w-7 text-brand-amber" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Kits, mentors and projects — <span className="text-gradient">all included</span>
            </>
          }
          subtitle="No hidden component costs. Start with a free trial workshop and decide afterwards."
        />
        <div className="mt-14 grid items-start gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <article
                className={
                  p.featured
                    ? "lift relative rounded-3xl bg-primary p-8 text-primary-foreground shadow-[var(--shadow-lift)]"
                    : "lift rounded-3xl border border-border bg-card p-8"
                }
              >
                {p.featured ? (
                  <span className="absolute -top-3 left-8 rounded-full bg-brand-amber px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground">
                    Most popular
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className={p.featured ? "mt-1 text-sm text-primary-foreground/75" : "mt-1 text-sm text-muted-foreground"}>
                  {p.description}
                </p>
                <p className="mt-6 font-display text-4xl font-extrabold">{p.price}</p>
                <p className={p.featured ? "text-xs text-primary-foreground/70" : "text-xs text-muted-foreground"}>
                  {p.period}
                </p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <CheckCircle2
                        className={p.featured ? "mt-0.5 h-4 w-4 shrink-0 text-brand-amber" : "mt-0.5 h-4 w-4 shrink-0 text-brand-green"}
                        aria-hidden="true"
                      />
                      <span className={p.featured ? "text-primary-foreground/85" : "text-muted-foreground"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={p.featured ? "secondary" : "outline"}
                  className="mt-8 w-full rounded-full"
                >
                  <a href="#contact">{p.cta}</a>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow="FAQ" title="Questions parents ask us first" />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="glass rounded-2xl px-5 py-2">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section id="contact" className="px-5 pb-24 pt-4">
      <Reveal className="mx-auto max-w-6xl">
        <div className="hero-aura relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 sm:p-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Book a <span className="text-gradient">free trial workshop</span> this weekend
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                Send us your child&apos;s grade and your preferred slot. We will confirm a bench in the
                next batch — 90 minutes, fully hands-on, no obligation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full px-7">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Message us on WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                  <a href="mailto:hello@curiousmindz.in">Email the team</a>
                </Button>
              </div>
            </div>

            <dl className="grid gap-4">
              {[
                { icon: Phone, label: "Call or WhatsApp", value: "+91 99999 99999" },
                { icon: Mail, label: "Email", value: "hello@curiousmindz.in" },
                { icon: MapPin, label: "Labs", value: "Bengaluru · Mumbai · Hyderabad" },
                { icon: CalendarCheck, label: "Batch timings", value: "Weekends & weekday evenings" },
              ].map((item) => (
                <div key={item.label} className="glass flex items-center gap-4 rounded-2xl px-5 py-4">
                  <item.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{item.label}</dt>
                    <dd className="text-sm font-semibold">{item.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <img src={logo.url} alt="Curious Mindz logo" width={36} height={36} className="h-9 w-9" />
          <div>
            <p className="font-display font-bold">Curious Mindz</p>
            <p className="text-xs text-muted-foreground">Learn. Create. Innovate.</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Curious Mindz. Hands-on robotics education for class 4-11.
        </p>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CourseContext />
        <AboutUs />
        <ProjectsShowcase />
        <Courses />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
