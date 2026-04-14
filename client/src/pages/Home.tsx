/*
Page copy direction: customer-facing only.
Use the reader's language, lead with symptom recognition,
move quickly into the six reasons, and keep the tone reassuring and believable.
*/
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CircleCheckBig,
  Leaf,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Waves,
} from "lucide-react";

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663027219763/HTVjWrkVxhKZCfFXmaDRkw/motilli-hero-editorial-2iSnfmPniKnQ9jC94ZNXZZ.webp";
const ingredientImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663027219763/HTVjWrkVxhKZCfFXmaDRkw/motilli-ingredients-stilllife-hwA8gd3zNhJJxPNfA3NLSy.webp";
const mechanismImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663027219763/HTVjWrkVxhKZCfFXmaDRkw/motilli-mechanism-diagram-art-XEVgHLPeUPBRWfVCwpNqgr.webp";
const dinnerImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663027219763/HTVjWrkVxhKZCfFXmaDRkw/motilli-testimonial-dinner-aKDmomhrew7jgndmwdrDNf.webp";

const quickFacts = [
  "For women using Ozempic, Wegovy, Mounjaro, or Zepbound",
  "90-day money-back guarantee",
  "Pectin-based gummy that feels easy to take",
  "Made for bloating, sulfur burps, heaviness, and slow digestion",
];

const reasons = [
  {
    number: "01",
    title: "Because the bloating does not feel normal — and you know it.",
    body:
      "This is not the usual 'I ate too much' kind of bloat. It is the hard, stuck, stretched feeling that can make one meal feel like it is still sitting there hours later.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Because sulfur burps can make you dread being around other people.",
    body:
      "A lot of women are not just uncomfortable. They are embarrassed, anxious, and quietly planning their day around what might happen after they eat.",
    icon: BadgeCheck,
  },
  {
    number: "03",
    title: "Because laxatives and random probiotics are missing the real issue.",
    body:
      "When food is sitting too long in the stomach, working only 'downstream' often does not solve the heavy, sour, trapped feeling at the top.",
    icon: Waves,
  },
  {
    number: "04",
    title: "Because you want relief without adding one more miserable routine.",
    body:
      "If you are already taking injections, supplements, powders, and backup remedies, the last thing you want is another complicated gut-health experiment.",
    icon: CircleCheckBig,
  },
  {
    number: "05",
    title: "Because the formula is built around what women actually complain about.",
    body:
      "The focus is stomach motility, sulfur gas, and gentler movement — not a vague promise to 'support overall wellness.'",
    icon: TimerReset,
  },
  {
    number: "06",
    title: "Because once you understand what is happening, Motilli makes sense fast.",
    body:
      "Women are not looking for hype. They are looking for something that fits what they are feeling and gives them a simple next step that does not feel reckless.",
    icon: ShieldCheck,
  },
];

const supportPoints = [
  {
    title: "Helps get things moving",
    text: "The goal is to support a stomach that feels slow, heavy, and backed up after meals.",
    icon: TimerReset,
  },
  {
    title: "Helps with sulfur burps",
    text: "It is made for the exact symptom many women find hardest to talk about, but hardest to ignore.",
    icon: BadgeCheck,
  },
  {
    title: "Supports gentler digestion overall",
    text: "Instead of feeling harsh or urgent, it is designed to feel like a smoother daily support product.",
    icon: Leaf,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.2fr] lg:items-end">
      <div>
        <p className="editorial-kicker">{label}</p>
        <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-foreground sm:text-5xl">
          {title}
        </h2>
      </div>
      <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
        {body}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(119,138,88,0.16),transparent_34%),radial-gradient(circle_at_85%_14%,rgba(186,153,91,0.14),transparent_22%),linear-gradient(to_bottom,rgba(255,255,255,0.18),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply grain-texture" />

      <header className="sticky top-0 z-30 border-b border-black/5 bg-[rgba(249,245,238,0.82)] backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-6 py-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-foreground shadow-[0_10px_30px_rgba(30,30,20,0.06)]">
              GH
            </span>
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.26em] text-muted-foreground/80">
                Women’s GLP-1 Digestive Relief
              </p>
              <p className="text-sm font-medium text-foreground">Gut Health Journal</p>
            </div>
          </div>

          <a
            href="#offer"
            className="hidden rounded-full border border-primary/20 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_rgba(91,107,62,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(91,107,62,0.3)] md:inline-flex"
          >
            See today’s offer
          </a>
        </div>
      </header>

      <main>
        <section className="container relative py-8 sm:py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.72fr] lg:items-start">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="grid gap-8"
            >
              <div className="flex flex-wrap items-center gap-3 text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground">
                <span className="rounded-full border border-primary/15 bg-white/70 px-3 py-1.5 text-primary shadow-sm">
                  Women’s health editorial
                </span>
                <span>Posted February 10, 2026</span>
                <span>7-minute read</span>
              </div>

              <div className="max-w-4xl space-y-6">
                <p className="editorial-kicker">If meals suddenly feel harder on GLP-1s</p>
                <h1 className="font-display text-[clamp(3.15rem,6vw,6.55rem)] leading-[0.9] tracking-[-0.04em] text-foreground">
                  6 reasons women on GLP-1s are turning to Motilli when the bloating and sulfur burps will not let up.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  If you are scared to eat before errands, worried about that sour burping feeling coming back, or tired of feeling like food is just sitting in your stomach, you are not overreacting. A lot of women are reaching the point where they just want to feel safe eating, leaving the house, and trusting their stomach again. This is why more women are using Motilli alongside Ozempic, Wegovy, Mounjaro, and Zepbound.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:hidden">
                <a
                  href="#reasons"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_rgba(91,107,62,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(91,107,62,0.3)]"
                >
                  Jump to the 6 reasons <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="hidden gap-4 sm:grid sm:grid-cols-2 xl:grid-cols-4">
                {quickFacts.map((fact) => (
                  <div
                    key={fact}
                    className="rounded-[1.75rem] border border-black/6 bg-white/74 px-4 py-4 text-sm leading-6 text-foreground shadow-[0_18px_50px_rgba(39,43,28,0.06)] backdrop-blur"
                  >
                    <CircleCheckBig className="mb-3 h-4 w-4 text-primary" />
                    {fact}
                  </div>
                ))}
              </div>

              <div className="hidden gap-5 rounded-[2rem] border border-black/6 bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(238,235,224,0.72))] p-6 shadow-[0_24px_70px_rgba(39,43,28,0.08)] sm:grid-cols-[1.18fr_0.82fr] sm:p-8 lg:grid">
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.26em] text-primary/80">
                    What women keep saying
                  </p>
                  <p className="mt-4 font-serifDisplay text-2xl leading-tight text-foreground sm:text-[2rem]">
                    “I didn’t need another random probiotic. I needed something for the gross, heavy, stuck feeling that would not go away.”
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                      JM
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Jessica M.</p>
                      <p>Wegovy user, age 48</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-5 rounded-[1.6rem] border border-primary/10 bg-[#f4efe4] p-5">
                  <div>
                    <p className="text-[0.72rem] uppercase tracking-[0.24em] text-muted-foreground">
                      A simpler next step
                    </p>
                    <p className="mt-3 text-base leading-7 text-foreground">
                      If you are tired of guessing and just want something that feels like a smart, manageable next step, this is where Motilli starts to make sense. It is a targeted digestive support gummy for the slow, full, gassy feeling that can come with GLP-1 medications.
                    </p>
                  </div>
                  <a
                    href="#reasons"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                  >
                    Read the six reasons <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="hidden lg:sticky lg:top-28 lg:block"
            >
              <div className="overflow-hidden rounded-[2rem] border border-black/6 bg-white/80 shadow-[0_28px_80px_rgba(39,43,28,0.12)] backdrop-blur">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#ebe4d8]">
                  <img
                    src={heroImage}
                    alt="Woman holding a green supplement gummy in a softly lit kitchen"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(28,30,21,0.68)] via-[rgba(28,30,21,0.12)] to-transparent p-6 text-white">
                    <p className="text-[0.7rem] uppercase tracking-[0.26em] text-white/75">
                      Real-life digestive support
                    </p>
                    <p className="mt-2 max-w-xs text-lg font-medium leading-7">
                      For the days when you just want to eat normally and not think about your stomach for once.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 p-6 sm:p-7">
                  <div className="rounded-[1.5rem] border border-primary/10 bg-[#f7f2e7] p-5">
                    <p className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
                      Today’s price
                    </p>
                    <div className="mt-4 flex items-end gap-3">
                      <span className="font-display text-5xl leading-none text-foreground">$29.99</span>
                      <span className="pb-2 text-sm text-muted-foreground line-through">$44.99</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Buy 2, get 1 free, with free shipping over $45.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <a
                      href="#offer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground shadow-[0_16px_36px_rgba(91,107,62,0.26)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(91,107,62,0.34)]"
                    >
                      See the offer details <ArrowRight className="h-4 w-4" />
                    </a>
                    <p className="text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      90-day guarantee · free shipping over $45
                    </p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        <section id="reasons" className="container py-8 sm:py-12 lg:py-14">
          <SectionHeading
            label="Why women are making the switch"
            title="Here is why Motilli is standing out for women who feel bloated, full, gassy, and fed up on GLP-1s."
            body="If you are tired of guessing and want something that feels believable, specific, and easy to add to your routine, these are the reasons women say Motilli starts to make sense quickly."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.article
                  key={reason.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeIn}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(246,240,231,0.88))] p-6 shadow-[0_22px_54px_rgba(39,43,28,0.08)] sm:p-8"
                >
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
                  <div className="flex items-start justify-between gap-6">
                    <div className="space-y-4">
                      <span className="inline-flex rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-primary">
                        Reason {reason.number}
                      </span>
                      <h3 className="max-w-xl font-serifDisplay text-3xl leading-tight text-foreground">
                        {reason.title}
                      </h3>
                    </div>
                    <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-black/6 bg-white/90 text-primary sm:flex">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-6 text-base leading-8 text-muted-foreground">{reason.body}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="container py-10 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-[2rem] border border-black/6 bg-[#f5f0e7] shadow-[0_24px_70px_rgba(39,43,28,0.08)]"
            >
              <img
                src={mechanismImage}
                alt="Illustrated diagram showing the stomach as the key place where GLP-1 digestive slowdown begins"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="space-y-6"
            >
              <p className="editorial-kicker">Why it can feel so intense</p>
              <h2 className="font-display text-4xl leading-[0.96] tracking-tight text-foreground sm:text-5xl">
                For a lot of women, the problem starts higher up than they thought.
              </h2>
              <p className="text-base leading-8 text-muted-foreground sm:text-lg">
                GLP-1 medications help by slowing gastric emptying. That can also be why some women suddenly feel fuller for too long, burp up that rotten-egg taste, or feel like one meal is still there at bedtime. When that is the issue, random constipation fixes do not always touch the part that feels worst.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {supportPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className="rounded-[1.6rem] border border-black/6 bg-white/72 p-5 shadow-[0_18px_44px_rgba(39,43,28,0.06)]"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      <h3 className="mt-4 text-lg font-semibold text-foreground">{point.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{point.text}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="container py-10 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              transition={{ duration: 0.65 }}
              className="overflow-hidden rounded-[2rem] border border-black/6 bg-[#eadfcd] shadow-[0_24px_70px_rgba(39,43,28,0.09)]"
            >
              <img
                src={ingredientImage}
                alt="Botanical still life featuring celery, green gummies, and supporting digestive ingredients"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="rounded-[2rem] border border-black/6 bg-white/76 p-7 shadow-[0_24px_70px_rgba(39,43,28,0.08)] sm:p-10"
            >
              <p className="editorial-kicker">What is inside</p>
              <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-foreground sm:text-5xl">
                The formula is meant to feel specific, not random.
              </h2>

              <div className="mt-8 grid gap-5">
                <div className="rounded-[1.6rem] border border-black/6 bg-[#faf7f1] p-5">
                  <div className="flex items-center gap-3 text-primary">
                    <TimerReset className="h-5 w-5" />
                    <h3 className="text-xl font-semibold text-foreground">Celery-derived apigenin</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Chosen for women who feel like food just sits there. It is there to support smoother stomach motility so the problem feels less mysterious and the next step feels more straightforward.
                  </p>
                </div>

                <div className="rounded-[1.6rem] border border-black/6 bg-[#faf7f1] p-5">
                  <div className="flex items-center gap-3 text-primary">
                    <BadgeCheck className="h-5 w-5" />
                    <h3 className="text-xl font-semibold text-foreground">Chlorophyllin</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Included because sulfur burps are not a small problem when you are trying to work, travel, socialize, or simply sit near other people without worrying.
                  </p>
                </div>

                <div className="rounded-[1.6rem] border border-black/6 bg-[#faf7f1] p-5">
                  <div className="flex items-center gap-3 text-primary">
                    <Leaf className="h-5 w-5" />
                    <h3 className="text-xl font-semibold text-foreground">Gentle soluble fiber</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Added for steadier downstream support, so the formula feels more complete without leaning into harsh, urgent relief.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="container py-10 sm:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              transition={{ duration: 0.65 }}
              className="rounded-[2rem] border border-black/6 bg-[linear-gradient(160deg,rgba(52,61,37,0.98),rgba(75,90,54,0.98))] p-7 text-white shadow-[0_26px_80px_rgba(40,45,30,0.22)] sm:p-10"
            >
              <p className="text-[0.72rem] uppercase tracking-[0.26em] text-white/70">Why women keep sharing it</p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl">
                It is not only about digestion. It is about getting your day back.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                The real win is not just less bloating. It is not planning your clothes around your stomach. It is not dreading lunch. It is not worrying about sulfur burps in the car. It is being able to go to dinner, travel, work, and wake up without feeling like your body is running the whole day for you.
              </p>

              <blockquote className="mt-8 border-l border-white/20 pl-6 font-serifDisplay text-3xl leading-tight text-white sm:text-[2.15rem]">
                “I finally felt like I could eat, leave the house, and trust my stomach again.”
              </blockquote>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              transition={{ duration: 0.65, delay: 0.06 }}
              className="overflow-hidden rounded-[2rem] border border-black/6 bg-[#2f3725] shadow-[0_28px_80px_rgba(39,43,28,0.14)]"
            >
              <img
                src={dinnerImage}
                alt="Two women enjoying dinner comfortably and confidently in a warm restaurant"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        <section id="offer" className="container pb-16 pt-10 sm:pb-24 sm:pt-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.65 }}
            className="overflow-hidden rounded-[2.3rem] border border-black/6 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(236,232,221,0.9))] p-6 shadow-[0_28px_90px_rgba(39,43,28,0.1)] sm:p-8 lg:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="editorial-kicker">A calmer next step</p>
                <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  If this sounds like what you have been dealing with, Motilli is worth trying.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Motilli supports stomach motility, helps with sulfur gas, and offers gentler digestive support in one easy gummy. It is for women who want something that matches what they are feeling and finally gives them a doable next step.
                </p>
              </div>

              <div className="rounded-[1.9rem] border border-primary/12 bg-[#f6f1e6] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.24em] text-muted-foreground">Current offer</p>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary">
                    Most popular
                  </span>
                </div>
                <div className="mt-5 flex items-end gap-3">
                  <span className="font-display text-6xl leading-none text-foreground">$29.99</span>
                  <span className="pb-2 text-sm text-muted-foreground line-through">$44.99</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Buy 2, get 1 free, with free shipping over $45.
                </p>

                <div className="mt-6 grid gap-3">
                  <div className="flex items-start gap-3 rounded-[1.25rem] bg-white/80 px-4 py-4 text-sm leading-6 text-foreground">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    90-day money-back guarantee if it is not the right fit for you.
                  </div>
                  <div className="flex items-start gap-3 rounded-[1.25rem] bg-white/80 px-4 py-4 text-sm leading-6 text-foreground">
                    <Leaf className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    Pectin-based gummies designed to feel easier than another capsule routine.
                  </div>
                </div>

                <a
                  href="https://getmotilli.com/products/motilli-digestive-health-gummies"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground shadow-[0_16px_36px_rgba(91,107,62,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(91,107,62,0.32)]"
                >
                  Continue to Motilli <ArrowRight className="h-4 w-4" />
                </a>
                <p className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Free shipping over $45 · women’s digestive support
                </p>
              </div>
            </div>
          </motion.div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-6 text-muted-foreground">
            These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </section>
      </main>
    </div>
  );
}
