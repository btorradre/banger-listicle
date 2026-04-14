/*
Page copy direction: customer-facing only.
Use the user's supplied draft throughout the page,
keep the flow editorial, and preserve a fast path into the six reasons.
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
const dianeImage = "https://i.ibb.co/LhkR4xQ0/motilli-adv-review-diane-v2.jpg";
const ctaOfferImage = "https://i.ibb.co/ynYJbNhB/motilli-celery-listicle-07-clean-label.jpg";
const ingredientImage =
  "https://www.getmotilli.com/cdn/shop/files/2_1060x.webp?v=1774815691";
const mechanismImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663027219763/HTVjWrkVxhKZCfFXmaDRkw/motilli-mechanism-diagram-art-XEVgHLPeUPBRWfVCwpNqgr.webp";

const reasons = [
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
      '“I\'ve bought every supplement on the shelf. This is the one I actually remember to take.” — [verified review placeholder]',
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
];

const supportPoints = [
  {
    title: "Helps get things moving",
    text: "Supports a stomach that feels slow, heavy, and backed up after meals.",
    icon: TimerReset,
  },
  {
    title: "Helps with sulfur burps",
    text: "Built for the exact symptom many women find hardest to talk about, but hardest to ignore.",
    icon: BadgeCheck,
  },
  {
    title: "Supports gentler digestion overall",
    text: "Designed to feel like a smoother daily support product, not a harsh urgent fix.",
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
      <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{body}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(119,138,88,0.16),transparent_34%),radial-gradient(circle_at_85%_14%,rgba(186,153,91,0.14),transparent_22%),linear-gradient(to_bottom,rgba(255,255,255,0.18),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply grain-texture" />

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
                <span>2-minute read</span>
              </div>

              <div className="max-w-4xl space-y-6">
                <p className="editorial-kicker">If meals suddenly feel harder on GLP-1s</p>
                <h1 className="font-display text-[clamp(3.15rem,6vw,6.55rem)] leading-[0.9] tracking-[-0.04em] text-foreground">
                  6 reasons women are pairing Motilli with their GLP-1 — and ditching the laxatives
                </h1>
                <div className="shadow-[0_24px_70px_rgba(39,43,28,0.1)]">
                  <img
                    src={dianeImage}
                    alt="Editorial-style image of a woman holding Motilli gummies"
                    className="block h-auto w-full rounded-[2rem] object-cover"
                  />
                </div>
                <p className="max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  If you are scared to eat before errands, dreading that sour-egg burp in the car, or lying in bed at night still feeling like dinner has not moved, you are not overreacting. That is a specific problem with a specific cause. And it is why a growing number of women on GLP-1s are reaching for Motilli instead of another laxative, probiotic, or magnesium pill that was never going to help.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:hidden">
                <a
                  href="#reasons"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_rgba(91,107,62,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(91,107,62,0.3)]"
                >
                  Read the six reasons <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="hidden gap-5 rounded-[2rem] border border-black/6 bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(238,235,224,0.72))] p-6 shadow-[0_24px_70px_rgba(39,43,28,0.08)] sm:grid-cols-[1.18fr_0.82fr] sm:p-8 lg:grid">
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.26em] text-primary/80">
                    Reason 04
                  </p>
                  <p className="mt-4 font-serifDisplay text-2xl leading-tight text-foreground sm:text-[2rem]">
                    “I&apos;ve bought every supplement on the shelf. This is the one I actually remember to take.”
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                      VR
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Monica M.</p>
                      <p>Daily Motilli user</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-5 rounded-[1.6rem] border border-primary/10 bg-[#f4efe4] p-5">
                  <div>
                    <p className="text-[0.72rem] uppercase tracking-[0.24em] text-muted-foreground">
                      One gummy a day
                    </p>
                    <p className="mt-3 text-base leading-7 text-foreground">
                      Not another powder, tea, or pill routine. Motilli is a single daily gummy designed to sit next to your coffee, not replace your kitchen.
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
                <div className="relative overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Woman holding a green supplement gummy in a softly lit kitchen"
                    className="block h-auto w-full rounded-[2rem] object-contain"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(28,30,21,0.68)] via-[rgba(28,30,21,0.12)] to-transparent p-6 text-white">
                    <p className="text-[0.7rem] uppercase tracking-[0.26em] text-white/75">
                      One gummy a day
                    </p>
                    <p className="mt-2 max-w-xs text-lg font-medium leading-7">
                      Not another powder, tea, or pill routine.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 p-6 sm:p-7">
                  <div className="rounded-[1.5rem] border border-primary/10 bg-[#f7f2e7] p-5">
                    <p className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
                      Current offer
                    </p>
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary">
                        Most popular
                      </span>
                    </div>
                    <div className="mt-4 flex items-end gap-3">
                      <span className="font-display text-5xl leading-none text-foreground">$29.99</span>
                      <span className="pb-2 text-sm text-muted-foreground line-through">$44.99</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Buy 2, get 1 free. Free shipping over $45.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <a
                      href="#offer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground shadow-[0_16px_36px_rgba(91,107,62,0.26)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(91,107,62,0.34)]"
                    >
                      Continue to Motilli <ArrowRight className="h-4 w-4" />
                    </a>
                    <p className="text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      90-day money-back guarantee
                    </p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        <section id="reasons" className="container py-8 sm:py-12 lg:py-14">
          <div className="grid gap-5 lg:grid-cols-2">
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
                  <div className="mb-6 shadow-[0_16px_36px_rgba(39,43,28,0.08)]">
                    <img
                      src={reason.image}
                      alt={`Reason ${reason.number} supporting image`}
                      className="block h-auto max-h-[26rem] w-full rounded-[1.6rem] object-contain"
                    />
                  </div>
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

                  {reason.bullets ? (
                    <div className="mt-6 grid gap-3">
                      {reason.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="rounded-[1.25rem] border border-black/6 bg-white/78 px-4 py-4 text-sm leading-6 text-foreground"
                        >
                          {bullet}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {reason.after ? (
                    <p className="mt-5 text-sm leading-7 text-foreground/78">{reason.after}</p>
                  ) : null}

                  {reason.quote ? (
                    <blockquote className="mt-6 border-l border-primary/20 pl-4 font-serifDisplay text-2xl leading-tight text-foreground/88">
                      {reason.quote}
                    </blockquote>
                  ) : null}
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
              className="shadow-[0_24px_70px_rgba(39,43,28,0.09)]"
            >
              <img
                src={ingredientImage}
                alt="Botanical still life featuring celery, green gummies, and supporting digestive ingredients"
                className="block h-auto w-full rounded-[2rem] object-contain"
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
              <SectionHeading
                label="What’s inside"
                title="The formula is built around three jobs, not a long ingredient list."
                body=""
              />

              <div className="mt-8 grid gap-5">
                <div className="rounded-[1.6rem] border border-black/6 bg-[#faf7f1] p-5">
                  <div className="flex items-center gap-3 text-primary">
                    <TimerReset className="h-5 w-5" />
                    <h3 className="text-xl font-semibold text-foreground">Celery-derived apigenin</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    The prokinetic behind Reason 01. Supports stomach motility so food does not sit and ferment.
                  </p>
                </div>

                <div className="rounded-[1.6rem] border border-black/6 bg-[#faf7f1] p-5">
                  <div className="flex items-center gap-3 text-primary">
                    <BadgeCheck className="h-5 w-5" />
                    <h3 className="text-xl font-semibold text-foreground">Chlorophyllin</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    The sulfur-gas binder behind Reason 03. Neutralizes the hydrogen sulfide that causes the rotten-egg burp.
                  </p>
                </div>

                <div className="rounded-[1.6rem] border border-black/6 bg-[#faf7f1] p-5">
                  <div className="flex items-center gap-3 text-primary">
                    <Leaf className="h-5 w-5" />
                    <h3 className="text-xl font-semibold text-foreground">Gentle soluble fiber</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Downstream support so the system keeps moving once the stomach does its job.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="container py-10 sm:py-16 lg:py-20">
          <div className="max-w-4xl">
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
                <div className="mt-4 shadow-[0_16px_36px_rgba(39,43,28,0.08)]">
                  <img
                    src={ctaOfferImage}
                    alt="Motilli clean-label editorial image"
                    className="block h-auto w-full rounded-[1.5rem] object-cover"
                  />
                </div>
                <div className="mt-5 flex items-end gap-3">
                  <span className="font-display text-6xl leading-none text-foreground">$29.99</span>
                  <span className="pb-2 text-sm text-muted-foreground line-through">$44.99</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Buy 2, get 1 free. Free shipping over $45.
                </p>

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
