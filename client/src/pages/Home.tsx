/*
Design philosophy for this page: IM8-inspired conversion structure with Motilli brand styling.
Use a dark, high-contrast hero, a branded Motilli masthead, stacked editorial reason blocks, and a clear editorial-to-offer flow.
Keep Motilli copy intact, preserve premium spacing, and ensure every section reinforces trust, clarity, and stomach-first positioning.
*/
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CircleCheckBig,
  Leaf,
  ShieldCheck,
  Sparkles,
  Star,
  TimerReset,
  Waves,
} from "lucide-react";

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663027219763/HTVjWrkVxhKZCfFXmaDRkw/motilli-hero-lifestyle-v4-6r74N3A4bGFkr5SMkSpCgE.webp";
const motilliLogo =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663027219763/HTVjWrkVxhKZCfFXmaDRkw/pasted_file_4I1KAS_image_151ac1bb.png";
const ctaOfferImage = "https://i.ibb.co/ynYJbNhB/motilli-celery-listicle-07-clean-label.jpg";
const ingredientImage =
  "https://www.getmotilli.com/cdn/shop/files/2_1060x.webp?v=1774815691";

type Reason = {
  number: string;
  title: string;
  body: string;
  icon: typeof Sparkles;
  image: string;
  bullets?: string[];
  after?: string;
  quote?: string;
};

const reasons: Reason[] = [
  {
    number: "01",
    title: "It targets your stomach — where the problem actually starts.",
    body:
      "Most GLP-1 bloating is not a colon problem. It is a stomach problem. GLP-1 medications slow gastric emptying, which means food sits in the stomach longer, ferments, and produces the pressure, gas, and sulfur burps women describe as feeling stuck up high. Motilli’s lead ingredient is apigenin from celery juice extract — a natural prokinetic that helps wake up stomach motility so food keeps moving the way it is supposed to. That is why it feels different from anything that works on the colon.",
    icon: Sparkles,
    image: "https://l2.guthealthblog.org/r1.jpeg",
  },
  {
    number: "02",
    title: "It works where laxatives, fiber, and magnesium cannot reach.",
    body:
      "Miralax, Dulcolax, magnesium citrate, psyllium husk, probiotics — every one of them works in the colon, six feet downstream from where a GLP-1 is actually slowing you down. That is why you can take all of them and still feel painfully full up top. Motilli is built for the stomach itself, which is why it fits the one spot the rest of your cabinet does not cover.",
    icon: Waves,
    image: "https://i.ibb.co/7dzY12Lw/stomach-vs-colon.jpg",
  },
  {
    number: "03",
    title: "It handles sulfur burps at the source.",
    body:
      "The rotten-egg taste is not random. When food lingers in a slow stomach, gut bacteria break it down and release hydrogen sulfide gas — which comes up as that burp you cough to cover. Motilli includes chlorophyllin specifically to bind that sulfur gas and neutralize the smell, while the apigenin works on the slowdown that is causing it in the first place. So you are not masking it. You are shutting off the thing producing it.",
    icon: BadgeCheck,
    image: "https://l2.guthealthblog.org/r3.jpeg",
  },
  {
    number: "04",
    title: "One gummy a day. Not another powder, tea, or pill routine.",
    body:
      "When your stomach already feels off every morning, the last thing you want is a five-step regimen with mixing, timing, and three bottles on the counter. Motilli is a single daily gummy designed to sit next to your coffee, not replace your kitchen. Women who have already tried the stack of fixes tell us this is the part that actually made them stick with it.",
    quote:
      "I’ve bought every supplement on the shelf. This is the one I actually remember to take.",
    icon: CircleCheckBig,
    image: "https://l2.guthealthblog.org/r5.jpeg",
  },
  {
    number: "05",
    title: "The results build over weeks — not days. Here is what to expect.",
    body:
      "Motilli is not a stimulant laxative. It is not supposed to hit in an hour. It works by helping your stomach do its job again, and that takes a little time.",
    bullets: [
      "Days 1–5: Most women feel nothing dramatic. That is normal.",
      "Weeks 2–3: The first shifts — less heaviness after meals, fewer sulfur burps, easier mornings.",
      "Month 2+: The change you actually wanted. Clothes fitting the way they did before the bloating. Eating out without planning your exit. Not thinking about your stomach for the first time in months.",
    ],
    after:
      "The women who stick with it through the first two weeks are the ones leaving the reviews.",
    icon: TimerReset,
    image: "https://www.getmotilli.com/cdn/shop/files/3_1060x.webp?v=1774815691",
  },
  {
    number: "06",
    title: "90 days to try it. If it is not the fit, you get your money back.",
    body:
      "You have already spent money on things that did not work. We know. That is why Motilli comes with a 90-day money-back guarantee — enough time to get through the slow start, past the first shifts, and into the weeks where the change actually shows up. If you are not feeling it by then, email us. You get a full refund. No forms, no restocking fee, no arguing.",
    icon: ShieldCheck,
    image: "https://i.ibb.co/b5pNgwPS/guarantee-badge.jpg",
  },
] as const;

const heroStats = [
  { value: "01", label: "Daily gummy" },
  { value: "90", label: "Day guarantee" },
  { value: "$45+", label: "Free shipping" },
];

const trustPills = [
  "Stomach-first support",
  "Pectin-based gummies",
  "90-day money-back guarantee",
  "Free shipping over $45",
  "Built for GLP-1 digestive slowdown",
];

const formulaCards = [
  {
    title: "Celery-derived apigenin",
    body: "The prokinetic behind Reason 01. Supports stomach motility so food does not sit and ferment.",
    icon: TimerReset,
  },
  {
    title: "Chlorophyllin",
    body: "The sulfur-gas binder behind Reason 03. Neutralizes the hydrogen sulfide that causes the rotten-egg burp.",
    icon: BadgeCheck,
  },
  {
    title: "Gentle soluble fiber",
    body: "Downstream support so the system keeps moving once the stomach does its job.",
    icon: Leaf,
  },
] as const;

const testimonials = [
  {
    quote:
      "Since adding Motilli, meals feel less heavy and I am not planning my whole day around my stomach anymore.",
    initials: "MM",
    name: "Monica M.",
    meta: "Verified Buyer",
  },
  {
    quote:
      "I feel so much better. Less heaviness, easier mornings, and way less of that burp I was constantly worried about.",
    initials: "AR",
    name: "Ariana R.",
    meta: "Verified Buyer",
  },
  {
    quote:
      "By week three I finally felt like I could eat, leave the house, and trust my stomach again.",
    initials: "JL",
    name: "Jessica L.",
    meta: "Verified Buyer",
  },
] as const;

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function BrandMasthead() {
  return (
    <section className="border-b border-black/6 bg-[#f6f1e6]">
      <div className="bg-primary px-4 py-2 text-center text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-primary-foreground sm:text-[0.7rem]">
        Stomach-first support for women on GLP-1s
      </div>
      <div className="container flex items-center justify-center py-4 sm:py-5">
        <img src={motilliLogo} alt="Motilli" className="h-10 w-auto sm:h-12" />
      </div>
    </section>
  );
}

function ReasonBlock({ reason }: { reason: Reason }) {
  const Icon = reason.icon;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      transition={{ duration: 0.55, delay: 0.04 }}
      className="rounded-[2rem] border border-black/8 bg-white/90 p-5 shadow-[0_24px_60px_rgba(21,27,17,0.08)] sm:p-8 lg:p-10"
    >
      <div className="overflow-hidden rounded-[1.8rem] shadow-[0_24px_54px_rgba(21,27,17,0.12)] ring-1 ring-black/6">
        <img
          src={reason.image}
          alt={`Reason ${reason.number} supporting image`}
          className="block h-auto max-h-[34rem] w-full rounded-[1.8rem] object-contain"
        />
      </div>

      <div className="mt-8">
        <div className="mb-5 flex items-center gap-3">
          <span className="inline-flex rounded-full border border-white/10 bg-primary px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-primary-foreground">
            {reason.number}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
        </div>
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-display text-4xl leading-[0.95] tracking-tight text-foreground sm:text-5xl">
            {reason.title}
          </h3>
          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">{reason.body}</p>

          {reason.bullets ? (
            <div className="mt-6 grid gap-3">
              {reason.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="rounded-[1.25rem] border border-primary/10 bg-secondary/60 px-4 py-4 text-sm leading-6 text-foreground"
                >
                  {bullet}
                </div>
              ))}
            </div>
          ) : null}

          {reason.after ? (
            <p className="mt-5 text-sm leading-7 text-foreground/80">{reason.after}</p>
          ) : null}

          {reason.quote ? (
            <blockquote className="mt-6 border-l-2 border-primary/25 pl-5 font-serifDisplay text-2xl leading-tight text-foreground/90 sm:text-[2rem]">
              “{reason.quote}”
            </blockquote>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

function SocialProofSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      transition={{ duration: 0.55 }}
      className="rounded-[2.1rem] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,243,236,0.96))] p-6 shadow-[0_28px_70px_rgba(21,27,17,0.08)] sm:p-8 lg:p-10"
    >
      <div className="text-center">
        <p className="text-[0.72rem] uppercase tracking-[0.3em] text-primary/70">What customers say</p>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeIn}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="rounded-[1.5rem] border border-black/6 bg-white px-5 py-5 shadow-[0_16px_35px_rgba(21,27,17,0.05)]"
          >
            <div className="flex items-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <span
                  key={`${testimonial.name}-${starIndex}`}
                  className="inline-flex h-5 w-5 items-center justify-center rounded-[0.3rem] bg-primary text-primary-foreground"
                >
                  <Star className="h-3.5 w-3.5 fill-current" />
                </span>
              ))}
            </div>
            <p className="mt-5 min-h-[7.5rem] text-base leading-8 text-foreground/88">“{testimonial.quote}”</p>
            <div className="mt-5 border-t border-black/6 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-100 text-[10px] text-sky-600">
                      ✓
                    </span>
                    <span>{testimonial.meta}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-center">
        <span className="text-2xl font-semibold text-foreground">Excellent</span>
        <div className="flex items-center gap-1 text-primary">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={`trust-${index}`}
              className="inline-flex h-7 w-7 items-center justify-center rounded-[0.35rem] bg-primary text-primary-foreground"
            >
              <Star className="h-4 w-4 fill-current" />
            </span>
          ))}
        </div>
        <span className="text-xl font-medium text-foreground">Trustpilot</span>
      </div>
    </motion.section>
  );
}

function OfferSectionBody() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      transition={{ duration: 0.65 }}
      className="overflow-hidden rounded-[2.3rem] border border-black/6 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(236,232,221,0.92))] p-6 shadow-[0_28px_90px_rgba(39,43,28,0.1)] sm:p-8 lg:p-10"
    >
      <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <div>
          <p className="editorial-kicker">Limited offer</p>
          <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            If this sounds like what you have been dealing with, Motilli is worth trying.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Motilli supports stomach motility, helps with sulfur gas, and offers gentler digestive support in one daily gummy. It is for women who want something that matches what they are actually feeling — and gives them one clear thing to try.
          </p>
        </div>

        <div className="rounded-[1.9rem] border border-primary/12 bg-[#f6f1e6] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-muted-foreground">Current offer</p>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary">
              Most popular
            </span>
          </div>
          <div className="mt-4 overflow-hidden rounded-[1.5rem] shadow-[0_16px_36px_rgba(39,43,28,0.08)] ring-1 ring-black/6">
            <img
              src={ctaOfferImage}
              alt="Motilli clean-label editorial image"
              className="block h-auto w-full rounded-[1.5rem] object-contain"
            />
          </div>
          <div className="mt-5 flex items-end gap-3">
            <span className="font-display text-6xl leading-none text-foreground">$29.99</span>
            <span className="pb-2 text-sm text-muted-foreground line-through">$44.99</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">Free shipping over $45.</p>

          <div className="mt-6 grid gap-3">
            <div className="flex items-start gap-3 rounded-[1.25rem] bg-white/80 px-4 py-4 text-sm leading-6 text-foreground">
              <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
              90-day money-back guarantee if it is not the right fit.
            </div>
            <div className="flex items-start gap-3 rounded-[1.25rem] bg-white/80 px-4 py-4 text-sm leading-6 text-foreground">
              <Leaf className="mt-1 h-4 w-4 shrink-0 text-primary" />
              Pectin-based gummies. No capsules, no powders.
            </div>
          </div>

          <a
            href="https://getmotilli.com/"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground shadow-[0_16px_36px_rgba(91,107,62,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(91,107,62,0.32)]"
            target="_blank"
            rel="noreferrer"
          >
            Continue to Motilli <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Free shipping over $45 · women’s digestive support
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const firstReasons = reasons.slice(0, 4);
  const lastReasons = reasons.slice(4);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(119,138,88,0.12),transparent_30%),radial-gradient(circle_at_85%_14%,rgba(186,153,91,0.12),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.16),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply grain-texture" />

      <main>
        <BrandMasthead />

        <section className="relative overflow-hidden bg-[linear-gradient(140deg,#202718_0%,#2d371f_38%,#405032_100%)] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(174,198,129,0.18),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_28%)]" />
          <div className="container relative py-8 sm:py-10 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="grid gap-8"
              >
                <div className="max-w-4xl space-y-6">
                  <p className="inline-flex rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[0.72rem] uppercase tracking-[0.28em] text-white/72">
                    For GLP-1 women dealing with bloating and sulfur burps
                  </p>
                  <h1 className="max-w-5xl font-display text-[clamp(3.1rem,6vw,6.4rem)] leading-[0.9] tracking-[-0.05em] text-white">
                    6 reasons women are pairing Motilli with their GLP-1 — and ditching the laxatives
                  </h1>
                  <p className="max-w-3xl text-lg leading-8 text-white/76 sm:text-xl">
                    If you are scared to eat before errands, dreading that sour-egg burp in the car, or lying in bed at night still feeling like dinner has not moved, you are not overreacting. That is a specific problem with a specific cause. And it is why a growing number of women on GLP-1s are reaching for Motilli instead of another laxative, probiotic, or magnesium pill that was never going to help.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#reasons"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#26311c] shadow-[0_16px_36px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-0.5"
                  >
                    See the 6 reasons <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-[repeat(3,minmax(0,1fr))] lg:max-w-2xl">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="rounded-[1.35rem] border border-white/10 bg-white/6 px-5 py-4 backdrop-blur-sm">
                      <p className="text-2xl font-semibold text-white sm:text-3xl">{stat.value}</p>
                      <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/62">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="lg:pt-3"
              >
                <figure className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-5">
                  <img
                    src={heroImage}
                    alt="Woman holding Motilli celery juice fiber gummies"
                    className="block h-auto w-full rounded-[1.7rem] object-cover"
                  />
                  <figcaption className="px-2 pb-2 pt-5 text-sm leading-7 text-white/72 sm:px-3">
                    A lifestyle look at the stomach-first gummy many GLP-1 users are trying when bloating, heaviness, and sulfur burps keep showing up.
                  </figcaption>
                </figure>
              </motion.aside>
            </div>
          </div>
        </section>

        <section className="border-y border-black/6 bg-white/70">
          <div className="container py-4">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {trustPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-primary/10 bg-background/85 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-primary/82 shadow-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="reasons" className="container py-10 sm:py-14 lg:py-18">
          <div className="grid gap-6 lg:gap-8">
            {firstReasons.map((reason) => (
              <ReasonBlock key={reason.number} reason={reason} />
            ))}

            <SocialProofSection />

            {lastReasons.map((reason) => (
              <ReasonBlock key={reason.number} reason={reason} />
            ))}

            <OfferSectionBody />
          </div>
        </section>

        <section className="container py-10 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              transition={{ duration: 0.65 }}
              className="overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(39,43,28,0.09)] ring-1 ring-black/6"
            >
              <img
                src={ingredientImage}
                alt="Motilli product image"
                className="block h-auto w-full rounded-[2rem] object-contain"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="rounded-[2rem] border border-black/6 bg-white/86 p-7 shadow-[0_24px_70px_rgba(39,43,28,0.08)] sm:p-10"
            >
              <p className="editorial-kicker">What’s inside</p>
              <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-foreground sm:text-5xl">
                The formula is built around three jobs, not a long ingredient list.
              </h2>

              <div className="mt-8 grid gap-4">
                {formulaCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-[1.5rem] border border-primary/10 bg-secondary/60 p-5"
                    >
                      <div className="flex items-center gap-3 text-primary">
                        <Icon className="h-5 w-5" />
                        <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="container py-10 sm:py-16 lg:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border border-black/6 bg-[linear-gradient(160deg,rgba(41,51,29,0.98),rgba(76,96,54,0.98))] p-7 text-white shadow-[0_26px_80px_rgba(40,45,30,0.22)] sm:p-10"
          >
            <p className="text-[0.72rem] uppercase tracking-[0.26em] text-white/70">Why women keep sharing it</p>
            <h2 className="mt-4 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              It is not only about digestion. It is about getting your day back.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
              The real win is not just less bloating. It is not planning your clothes around your stomach. It is not dreading lunch. It is not worrying about sulfur burps in the car. It is being able to go to dinner, travel, work, and wake up without feeling like your body is running the whole day for you.
            </p>

            <blockquote className="mt-8 max-w-3xl border-l border-white/20 pl-6 font-serifDisplay text-3xl leading-tight text-white sm:text-[2.15rem]">
              “I finally felt like I could eat, leave the house, and trust my stomach again.”
            </blockquote>
          </motion.div>
        </section>

        <section id="offer" className="container pb-16 pt-10 sm:pb-24 sm:pt-16">
          <OfferSectionBody />

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-6 text-muted-foreground">
            These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </section>
      </main>
    </div>
  );
}
