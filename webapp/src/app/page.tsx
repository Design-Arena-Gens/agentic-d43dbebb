"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  Bell,
  ChevronRight,
  Flame,
  HeartPulse,
  Home as HomeIcon,
  Leaf,
  MessageCircle,
  Moon,
  Settings,
  Sparkles,
  Trophy,
  User,
} from "lucide-react";

type TabId = "home" | "progress" | "coaching" | "profile";

const navItems: { id: TabId; label: string; icon: typeof HomeIcon }[] = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "progress", label: "Progress", icon: Trophy },
  { id: "coaching", label: "Coaching", icon: MessageCircle },
  { id: "profile", label: "Profile", icon: User },
];

const todayTimeline = [
  {
    time: "06:30",
    title: "Sunrise Run",
    meta: "5 km · Urban Tempo",
    accent: "from-emerald-400 to-cyan-400",
    icon: Activity,
  },
  {
    time: "12:15",
    title: "Fuel Up",
    meta: "Mediterranean Bowl · 620 kcal",
    accent: "from-orange-400 to-rose-400",
    icon: Flame,
  },
  {
    time: "21:45",
    title: "Wind Down",
    meta: "Guided Breath · 10 min",
    accent: "from-indigo-400 to-purple-500",
    icon: Moon,
  },
];

const streakHighlights = [
  { label: "Move", value: "12 day", accent: "bg-rose-500/90" },
  { label: "Sleep", value: "8.1 hr", accent: "bg-sky-500/80" },
  { label: "Recovery", value: "92%", accent: "bg-emerald-500/90" },
];

const progressiveMetrics = [
  {
    title: "Cardio Load",
    value: "Balanced",
    trend: "+8% vs last week",
    icon: HeartPulse,
    accent: "bg-pink-500/90",
  },
  {
    title: "Strength Focus",
    value: "Lower body",
    trend: "Phase 2 · 3 of 6",
    icon: Activity,
    accent: "bg-violet-500/80",
  },
  {
    title: "Mindful Minutes",
    value: "42",
    trend: "On track · +12 this week",
    icon: Leaf,
    accent: "bg-lime-500/80",
  },
];

const coachingCards = [
  {
    header: "Performance Blueprint",
    subtitle: "Customised weekly training co-created for Android + iOS.",
    coach: "Coach Riley",
    icon: Sparkles,
    accent: "from-violet-500/90 to-sky-500/80",
  },
  {
    header: "Recovery Studio",
    subtitle: "Layered breathing, mobility, and sleep hygiene drills.",
    coach: "Coach Mika",
    icon: Moon,
    accent: "from-indigo-500/90 to-purple-500/80",
  },
];

const devices = [
  {
    name: "Pixel Watch 2",
    platform: "Android Wear OS",
    status: "Synced 3 min ago",
    accent: "bg-emerald-500/80",
  },
  {
    name: "Apple Watch Ultra",
    platform: "watchOS 10",
    status: "Charging · goals paused",
    accent: "bg-orange-500/80",
  },
];

function cx(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative mx-auto flex w-full max-w-md flex-col gap-4 rounded-[36px] border border-white/10 bg-white/80 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-lg dark:bg-slate-900/80">
      <div className="flex items-center justify-between text-slate-500">
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Pulse One
        </span>
        <div className="flex items-center gap-2 text-slate-300">
          <Bell className="h-4 w-4" />
          <Settings className="h-4 w-4" />
        </div>
      </div>
      {children}
    </main>
  );
}

function HomeTab() {
  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 text-slate-100 shadow-inner shadow-cyan-500/10">
        <div className="absolute -top-8 -right-8 h-36 w-36 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
            Good Morning
          </p>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
            Android · iOS
          </span>
        </div>
        <h1 className="mt-4 text-3xl font-semibold leading-tight text-white">
          Build unstoppable habits across every device you own.
        </h1>
        <p className="mt-3 text-sm text-slate-300">
          Sync workouts, sleep, and coaching in a unified mobile experience.
        </p>
        <div className="mt-5 flex items-end gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
              Daily Move
            </p>
            <p className="text-4xl font-semibold text-white">620 kcal</p>
          </div>
          <div className="h-16 w-px bg-white/20" />
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan-200">
              Heart Rate
            </p>
            <p className="text-2xl font-medium text-white">93 bpm</p>
            <p className="text-[11px] text-slate-400">steady · zone 2</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-3">
        {streakHighlights.map((highlight) => (
          <div
            key={highlight.label}
            className={cx(
              "rounded-2xl p-4 text-white shadow-lg shadow-slate-900/20",
              highlight.accent,
            )}
          >
            <p className="text-[11px] uppercase tracking-[0.25em] opacity-80">
              {highlight.label}
            </p>
            <p className="mt-3 text-2xl font-semibold">{highlight.value}</p>
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-100">
            Today&apos;s Flow
          </h2>
          <button className="text-xs font-medium text-cyan-600 hover:text-cyan-500">
            View plan
          </button>
        </div>
        <div className="space-y-2">
          {todayTimeline.map((entry) => {
            const Icon = entry.icon;
            return (
              <article
                key={entry.title}
                className="flex items-center justify-between rounded-3xl bg-white/70 p-3 shadow shadow-slate-900/5 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cx(
                      "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white",
                      entry.accent,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      {entry.time}
                    </p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {entry.title}
                    </p>
                    <p className="text-xs text-slate-500">{entry.meta}</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-300" />
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function ProgressTab() {
  return (
    <section className="space-y-5">
      <div className="rounded-3xl bg-gradient-to-br from-cyan-500/20 via-slate-100 to-white p-5 shadow shadow-cyan-500/15 dark:from-cyan-500/10 dark:via-slate-900 dark:to-slate-900/90">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-200">
              Weekly readiness
            </p>
            <p className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">
              82%
            </p>
          </div>
          <div className="rounded-2xl bg-white/80 p-3 text-cyan-600 shadow-sm shadow-cyan-500/10 dark:bg-slate-900/80 dark:text-cyan-300">
            <Trophy className="h-5 w-5" />
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          Consistent recovery and hydration keeps you primed for a progressive
          load next week.
        </p>
        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-white/50 bg-white/70 p-3 text-center text-sm text-slate-600 shadow-sm shadow-cyan-500/10 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
            <span className="text-lg font-semibold text-slate-900 dark:text-white">
              45 km
            </span>
            <p className="text-[11px] uppercase tracking-[0.3em]">
              Run volume
            </p>
          </div>
          <div className="rounded-2xl border border-white/50 bg-white/70 p-3 text-center text-sm text-slate-600 shadow-sm shadow-cyan-500/10 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
            <span className="text-lg font-semibold text-slate-900 dark:text-white">
              3.1 hr
            </span>
            <p className="text-[11px] uppercase tracking-[0.3em]">
              Mobility
            </p>
          </div>
          <div className="rounded-2xl border border-white/50 bg-white/70 p-3 text-center text-sm text-slate-600 shadow-sm shadow-cyan-500/10 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
            <span className="text-lg font-semibold text-slate-900 dark:text-white">
              10:45
            </span>
            <p className="text-[11px] uppercase tracking-[0.3em]">
              Avg. pace
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-100">
          Focus Areas
        </h2>
        <div className="space-y-3">
          {progressiveMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <article
                key={metric.title}
                className="flex items-center justify-between rounded-3xl border border-white/40 bg-white/70 p-4 shadow shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-slate-900/70"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cx(
                      "flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow",
                      metric.accent,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {metric.title}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {metric.value}
                    </p>
                    <p className="text-[11px] text-cyan-600 dark:text-cyan-300">
                      {metric.trend}
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-300" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CoachingTab() {
  return (
    <section className="space-y-5">
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 text-white shadow-inner shadow-cyan-500/10">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
            Live feedback
          </p>
          <span className="rounded-full bg-white/10 px-3 py-1 text-[11px]">
            HD haptics
          </span>
        </div>
        <h2 className="mt-4 text-3xl font-semibold leading-tight">
          Ultra-responsive coaching tuned for Android and iOS natives.
        </h2>
        <p className="mt-3 text-sm text-slate-300">
          Your coaches orchestrate workouts, recovery, and nutrition around your
          device rhythm.
        </p>
        <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg shadow-cyan-500/40">
          Start Session
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-100">
          Personalised Channels
        </h3>
        <div className="space-y-3">
          {coachingCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.header}
                className="relative overflow-hidden rounded-3xl bg-white/80 p-4 shadow shadow-slate-900/5 dark:bg-slate-900/80"
              >
                <div
                  className={cx(
                    "absolute -right-6 -top-10 h-28 w-28 rounded-full bg-gradient-to-br blur-3xl",
                    card.accent,
                  )}
                />
                <div className="relative flex items-start gap-3">
                  <div className="rounded-2xl bg-slate-900/90 p-3 text-cyan-200 shadow-lg shadow-slate-900/40">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                      {card.header}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-300">
                      {card.subtitle}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">
                      {card.coach}
                    </p>
                  </div>
                </div>
                <button className="relative mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 hover:text-cyan-500 dark:text-cyan-300">
                  Drop in
                  <ChevronRight className="h-4 w-4" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProfileTab() {
  return (
    <section className="space-y-5">
      <div className="rounded-3xl border border-white/40 bg-white/70 p-5 shadow shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
              Prime Member
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
              Jordan Alvarez
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-300">
              Syncing seamlessly across Android and iOS wearables.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 p-3 text-white shadow shadow-cyan-500/30">
            <User className="h-5 w-5" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold text-cyan-600 dark:text-cyan-300">
            2-way health kit sync
          </span>
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-300">
            Cloud backups
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-100">
          Connected Devices
        </h4>
        <div className="space-y-3">
          {devices.map((device) => (
            <article
              key={device.name}
              className="flex items-center justify-between rounded-3xl border border-white/50 bg-white/70 p-4 shadow shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-slate-900/70"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {device.name}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-300">
                  {device.platform}
                </p>
                <p className="text-[11px] text-cyan-600 dark:text-cyan-300">
                  {device.status}
                </p>
              </div>
              <div
                className={cx(
                  "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white",
                  device.accent,
                )}
              >
                Sync
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-gradient-to-r from-cyan-500/20 via-sky-500/10 to-transparent p-5 text-slate-700 dark:text-slate-200">
        <h4 className="text-sm font-semibold">Platform Preferences</h4>
        <ul className="mt-3 space-y-2 text-xs leading-5">
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500" />
            <span>Adaptive haptic cues switch tone by operating system.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>
              Offline workouts packaged as installable modules for both Android
              and iOS.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-500" />
            <span>AI rhythm engine personalises notifications per device.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  const tabContent = useMemo(() => {
    switch (activeTab) {
      case "progress":
        return <ProgressTab />;
      case "coaching":
        return <CoachingTab />;
      case "profile":
        return <ProfileTab />;
      case "home":
      default:
        return <HomeTab />;
    }
  }, [activeTab]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10 font-sans">
      <Shell>
        {tabContent}
        <nav className="mt-6 flex items-center justify-between rounded-full border border-white/30 bg-white/70 p-2 shadow-lg shadow-cyan-500/10 backdrop-blur dark:border-white/10 dark:bg-slate-900/80">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={cx(
                  "flex flex-1 flex-col items-center gap-1 rounded-full px-3 py-2 text-[11px] font-medium transition",
                  active
                    ? "bg-slate-900 text-white shadow shadow-slate-900/40 dark:bg-white/95 dark:text-slate-900"
                    : "text-slate-400 hover:text-slate-600",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </Shell>
    </div>
  );
}
