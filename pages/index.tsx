import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/components/LanguageContext";
import WorkSection from "@/components/WorkSection";
import { contact, devProjects, marketingSkills, tools } from "@/lib/content";

import profile from "@/public/profile.jpg";
import geeers from "@/public/geeers.png";
import sansiri from "@/public/sansiri.png";
import one from "@/public/one.png";
import mez from "@/public/mez.png";

const logos: Record<string, StaticImageData> = { geeers, sansiri, one, mez };

function Section({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 md:py-24 ${className}`}>
      <div className="container-page">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-white px-3 py-1 text-sm text-ink">
      {children}
    </span>
  );
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="container-page grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Thanate Janyaswasdi
              <span className="block text-2xl font-semibold text-muted sm:text-3xl">
                ({t.hero.nickname})
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.hero.summary}</p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPinIcon className="h-4 w-4" /> {t.hero.location}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="btn-primary">
                {t.hero.ctaWork}
              </a>
              <a href="#contact" className="btn-secondary">
                {t.hero.ctaContact}
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[340px]">
            <div className="absolute -inset-3 rounded-full bg-mint" aria-hidden />
            <Image
              src={profile}
              alt="Thanate Janyaswasdi"
              priority
              className="relative aspect-square w-full rounded-full object-cover shadow-lg"
              sizes="340px"
            />
          </div>
        </div>
        <div className="container-page mt-14">
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {t.hero.focus.map(f => (
              <li
                key={f}
                className="rounded-xl border border-line bg-white px-4 py-3 text-center text-sm font-medium"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <Section id="about" title={t.about.title} className="bg-white">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            {t.about.body.map(p => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="space-y-3">
            {t.about.traits.map(tr => (
              <li key={tr} className="flex gap-3 rounded-xl bg-mint/60 px-4 py-3 text-ink">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {tr}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title={t.experience.title}>
        <ol className="relative space-y-10 border-l border-line pl-6 md:pl-10">
          {t.experience.jobs.map(job => (
            <li key={job.role + job.period} className="relative">
              <span
                className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 md:-left-[47px] ${
                  job.dev ? "border-muted bg-paper" : "border-accent bg-accent"
                }`}
                aria-hidden
              />
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                {job.period}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold">{job.role}</h3>
              <p className="text-muted">{job.company}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-ink/85 marker:text-line">
                {job.bullets.map(b => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              {job.dev && (
                <div className="mt-4">
                  <p className="mb-2 text-sm text-muted">{t.experience.devProjectsLabel}</p>
                  <div className="flex flex-wrap gap-2">
                    {devProjects.map(p => (
                      <span
                        key={p.name}
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-white py-1 pl-1 pr-3 text-sm"
                      >
                        <Image
                          src={logos[p.logo]}
                          alt=""
                          width={22}
                          height={22}
                          className="rounded-full"
                        />
                        {p.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <WorkSection />

      {/* Skills */}
      <Section id="skills" title={t.skills.title}>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="sub-title">{t.skills.marketing}</h3>
            <div className="flex flex-wrap gap-2">
              {marketingSkills.map(s => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
          <div>
            <h3 className="sub-title">{t.skills.tools}</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map(s => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
          <div>
            <h3 className="sub-title">{t.skills.languages}</h3>
            <div className="flex flex-wrap gap-2">
              {t.skills.languageList.map(s => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
          <div>
            <h3 className="sub-title">{t.skills.education}</h3>
            <p className="font-medium">{t.skills.degree}</p>
            <p className="text-muted">{t.skills.school}</p>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-forest py-20 text-white md:py-28">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.contactSection.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">{t.contactSection.body}</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-forest transition hover:bg-mint"
          >
            <EnvelopeIcon className="h-5 w-5" />
            {contact.email}
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/85">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">
              LinkedIn
            </a>
            <a href={contact.lemon8} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">
              Lemon8
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">
              GitHub
            </a>
          </div>
          <p className="mt-8 inline-flex items-center gap-1.5 text-sm text-white/60">
            <MapPinIcon className="h-4 w-4" /> {t.contactSection.location}
          </p>
        </div>
      </section>
    </>
  );
}
