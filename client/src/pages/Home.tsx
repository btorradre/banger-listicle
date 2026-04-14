/*
Design philosophy for this page: contemporary feminine investigative feature.
Every section should preserve belief-first storytelling, premium editorial pacing,
and softer commerce so the bridge feels trustworthy before it asks for purchase.
*/
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  CircleCheckBig,
  FlaskConical,
  Leaf,
  Pill,
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

const reasons = [
  {
    number: "01",
    title: "Most women are treating the wrong organ.",
    body:
      "Miralax, stool softeners, and bulk fiber act downstream. But the earliest GLP-1 slowdown often starts in the stomach, where food lingers, ferments, and creates the exact heaviness women describe as a 'cement' feeling.",
    points: [
      "The bridge now explains the mechanism before the product pitch.",
      "It positions Motilli as an upstream solution instead of a generic digestive supplement.",
    ],
    icon: Waves,
  },
  {
    number: "02",
    title: "The embarrassment is social, not just physical.",
    body:
      "Sulfur burps, meal anxiety, and bloating don’t stay in the bathroom. They show up at dinners, in fitted clothes, during travel, and in the quiet calculations women make all day to avoid feeling seen.",
    points: [
      "The copy now mirrors the real emotional tax of GLP-1 digestive issues.",
      "That makes the page feel like a continuation of the ad rather than a reset.",
    ],
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Pill fatigue is part of the problem.",
    body:
      "Women already managing injections, vitamins, powders, and backup remedies do not want a 'stack.' They want one focused support product that feels specific, simple, and believable.",
    points: [
      "The offer is framed as reduction and clarity, not more complexity.",
      "The page emphasizes one daily ritual instead of a kitchen-sink formula.",
    ],
    icon: Pill,
  },
  {
    number: "04",
    title: "A bridge page must earn trust before asking for commitment.",
    body:
      "Instead of sounding like a compressed promo article, this version slows down and builds a cleaner hierarchy: symptom validation first, mechanism second, ingredients third, and only then a gentle offer.",
    points: [
      "The CTA language is softer and more contextual.",
      "Discount language supports the offer instead of dominating the page.",
    ],
    icon: BookOpenText,
  },
  {
    number: "05",
    title: "Ingredients only matter when their role is obvious.",
    body:
      "Celery-derived apigenin, chlorophyllin, and soluble prebiotic fiber are more persuasive when each one is tied to a job the reader already understands: movement, gas neutralization, and gentler downstream flow.",
    points: [
      "This makes the formula feel intentional, not decorative.",
      "It also reduces the gap between claim intensity and proof depth.",
    ],
    icon: FlaskConical,
  },
  {
    number: "06",
    title: "The best bridge preserves belief all the way into the offer.",
    body:
      "By the time the reader sees the offer card, the page has already established why laxatives failed, why sulfur burps happen, and why a stomach-first support gummy feels rational instead of impulsive.",
    points: [
      "The result is a warmer handoff into the product page or checkout.",
      "That is the real job of a bridge page: belief transfer, not just click transfer.",
    ],
    icon: ShieldCheck,
  },
];

const proofPillars = [
  {
    title: "Motility support",
    text: "A stomach-first explanation for why food starts to sit, ferment, and feel heavy on GLP-1s.",
    icon: TimerReset,
  },
  {
    title: "Sulfur gas control",
    text: "The page ties embarrassment to a clear mechanism instead of vague 'gut health' language.",
    icon: BadgeCheck,
  },
  {
    title: "Gentler downstream flow",
    text: "The formula is framed as supportive and low-drama, not harsh or laxative-like.",
    icon: Leaf,
  },
];

const quickFacts = [
  "Designed for women using Ozempic, Wegovy, Mounjaro, or Zepbound",
  "90-day money-back guarantee",
  "Pectin-based gummy, easy on sensitive stomachs",
  "Pairs with your medication without asking you to 'start over'",
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
                GLP-1 Support Feature
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
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.72fr] lg:items-start">
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
                <p className="editorial-kicker">Investigation</p>
                <h1 className="font-display text-[clamp(3.2rem,6vw,6.8rem)] leading-[0.9] tracking-[-0.04em] text-foreground">
                  6 reasons women on GLP-1s are pairing Motilli with their medication — and finally beating the bloat.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  If you are still bloated after Ozempic, Wegovy, Mounjaro, or Zepbound, this page is designed to bridge one crucial belief: most remedies are working too far downstream. The real question is whether your stomach ever got moving again.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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

              <div className="grid gap-5 rounded-[2rem] border border-black/6 bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(238,235,224,0.72))] p-6 shadow-[0_24px_70px_rgba(39,43,28,0.08)] sm:grid-cols-[1.2fr_0.8fr] sm:p-8">
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.26em] text-primary/80">
                    Written in the voice of a support-group feature
                  </p>
                  <p className="mt-4 font-serifDisplay text-2xl leading-tight text-foreground sm:text-[2rem]">
                    “I didn’t need another random probiotic. I needed something that made sense of why everything else failed.”
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                      JM
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Jessica M.</p>
                      <p>GLP-1 support group contributor</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-5 rounded-[1.6rem] border border-primary/10 bg-[#f4efe4] p-5">
                  <div>
                    <p className="text-[0.72rem] uppercase tracking-[0.24em] text-muted-foreground">
                      Why this version converts better
                    </p>
                    <p className="mt-3 text-base leading-7 text-foreground">
                      It preserves the story, explains the mechanism, and only then introduces the offer — which is exactly what cold paid traffic needs from a bridge.
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
              className="lg:sticky lg:top-28"
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
                      Editorial companion piece
                    </p>
                    <p className="mt-2 max-w-xs text-lg font-medium leading-7">
                      A softer, belief-first path from symptom recognition to a credible solution.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 p-6 sm:p-7">
                  <div className="rounded-[1.5rem] border border-primary/10 bg-[#f7f2e7] p-5">
                    <p className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
                      Today’s supported offer
                    </p>
                    <div className="mt-4 flex items-end gap-3">
                      <span className="font-display text-5xl leading-none text-foreground">$29.99</span>
                      <span className="pb-2 text-sm text-muted-foreground line-through">$44.99</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      A premium bridge should not hide the offer. It should simply wait until the explanation earns it.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <a
                      href="#offer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground shadow-[0_16px_36px_rgba(91,107,62,0.26)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(91,107,62,0.34)]"
                    >
                      Read the offer details <ArrowRight className="h-4 w-4" />
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
              <p className="editorial-kicker">The bridge belief</p>
              <h2 className="font-display text-4xl leading-[0.96] tracking-tight text-foreground sm:text-5xl">
                Your stomach slowed down. Most of what you tried was working on the wrong end.
              </h2>
              <p className="text-base leading-8 text-muted-foreground sm:text-lg">
                GLP-1 medication helps by slowing gastric emptying. That is part of the benefit. But for some women, the slowdown becomes the source of bloating, sulfur burps, heaviness, and meals that seem to sit for hours. That is why this bridge page leads with mechanism instead of hype.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {proofPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="rounded-[1.6rem] border border-black/6 bg-white/72 p-5 shadow-[0_18px_44px_rgba(39,43,28,0.06)]"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      <h3 className="mt-4 text-lg font-semibold text-foreground">{pillar.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{pillar.text}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="reasons" className="container py-10 sm:py-16 lg:py-20">
          <SectionHeading
            label="The six reasons"
            title="This version reads like an investigative feature, not a compressed supplement pitch."
            body="Each section is designed to continue the belief-building process started by the ad. Instead of dropping the visitor into a transaction, it walks her through the exact emotional and logical sequence that makes the offer feel deserved."
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

                  <div className="mt-6 grid gap-3">
                    {reason.points.map((point) => (
                      <div
                        key={point}
                        className="flex gap-3 rounded-[1.25rem] border border-black/5 bg-white/72 px-4 py-4 text-sm leading-6 text-foreground"
                      >
                        <CircleCheckBig className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
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
              <p className="editorial-kicker">Why the formula feels coherent</p>
              <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-foreground sm:text-5xl">
                Three jobs. One more believable reason to keep reading.
              </h2>

              <div className="mt-8 grid gap-5">
                <div className="rounded-[1.6rem] border border-black/6 bg-[#faf7f1] p-5">
                  <div className="flex items-center gap-3 text-primary">
                    <TimerReset className="h-5 w-5" />
                    <h3 className="text-xl font-semibold text-foreground">Celery-derived apigenin for stomach rhythm</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    The ingredient story begins with movement. Not urgency, not forcing, and not a harsh bathroom event — just a more intuitive explanation for why meals stop feeling parked.
                  </p>
                </div>

                <div className="rounded-[1.6rem] border border-black/6 bg-[#faf7f1] p-5">
                  <div className="flex items-center gap-3 text-primary">
                    <BadgeCheck className="h-5 w-5" />
                    <h3 className="text-xl font-semibold text-foreground">Chlorophyllin for the sulfur-burp problem nobody wants to say out loud</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    The page now names the social symptom directly. That matters. Women do not click these ads because they love ingredients; they click because something embarrassing has been hijacking normal life.
                  </p>
                </div>

                <div className="rounded-[1.6rem] border border-black/6 bg-[#faf7f1] p-5">
                  <div className="flex items-center gap-3 text-primary">
                    <Leaf className="h-5 w-5" />
                    <h3 className="text-xl font-semibold text-foreground">Gentle soluble fiber for downstream support</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Rather than promising a miracle, the page frames the formula as coordinated support: movement up top, less sulfur gas, and gentler flow below. That is what makes the product sound targeted instead of trendy.
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
              <p className="text-[0.72rem] uppercase tracking-[0.26em] text-white/70">What changed in the emotional layer</p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl">
                The page now treats the symptom burden like a real life problem — because that is what it is.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                Good bridge pages do not just explain physiology. They explain what the physiology steals: dinners, fitted clothes, long drives, confidence, mornings, and the feeling that your own body is becoming unpredictable. That is why the new design makes room for mood, pace, and credibility.
              </p>

              <blockquote className="mt-8 border-l border-white/20 pl-6 font-serifDisplay text-3xl leading-tight text-white sm:text-[2.15rem]">
                “I did not need a louder sales page. I needed a calmer explanation that made me believe I wasn’t crazy for thinking the problem started earlier.”
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
                <p className="editorial-kicker">Bridge completed</p>
                <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  If the mechanism made sense, the offer should feel calmer now too.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Motilli is positioned here as the next logical step, not a leap. It supports stomach motility, helps neutralize sulfur gas, and adds gentler downstream support in one pectin-based gummy designed for women navigating GLP-1 digestive side effects.
                </p>
              </div>

              <div className="rounded-[1.9rem] border border-primary/12 bg-[#f6f1e6] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.24em] text-muted-foreground">Spring sale</p>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary">
                    Most popular
                  </span>
                </div>
                <div className="mt-5 flex items-end gap-3">
                  <span className="font-display text-6xl leading-none text-foreground">$29.99</span>
                  <span className="pb-2 text-sm text-muted-foreground line-through">$44.99</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Buy 2, get 1 free, with free shipping. A strong bridge makes the economics feel like support, not pressure.
                </p>

                <div className="mt-6 grid gap-3">
                  <div className="flex items-start gap-3 rounded-[1.25rem] bg-white/80 px-4 py-4 text-sm leading-6 text-foreground">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    90-day money-back guarantee with no hard reset if it is not the right fit.
                  </div>
                  <div className="flex items-start gap-3 rounded-[1.25rem] bg-white/80 px-4 py-4 text-sm leading-6 text-foreground">
                    <Leaf className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    Pectin-based gummies designed to feel easy, not medicinal or harsh.
                  </div>
                </div>

                <a
                  href="https://getmotilli.com/products/motilli-digestive-health-gummies"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground shadow-[0_16px_36px_rgba(91,107,62,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(91,107,62,0.32)]"
                >
                  Continue to Motilli <ArrowRight className="h-4 w-4" />
                </a>
                <p className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Free shipping over $45 · women’s support feature
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
