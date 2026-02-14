"use client";

import { Cairo } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Line, Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
);

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const iconClassName = "h-5 w-5";

const items = [
  {
    label: "نظرة عامة",
    href: "/overview",
    icon: (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <rect x="4" y="4" width="6" height="6" rx="1.25" fill="currentColor" />
        <rect x="14" y="4" width="6" height="6" rx="1.25" fill="currentColor" />
        <rect x="4" y="14" width="6" height="6" rx="1.25" fill="currentColor" />
        <rect x="14" y="14" width="6" height="6" rx="1.25" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "الليدر",
    href: "/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className={iconClassName}
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 19.5c1.8-3.6 13.2-3.6 15 0" />
      </svg>
    ),
  },
  {
    label: "المشاريع",
    href: "/projects",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className={iconClassName}
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6.5h9l2 2h5v9.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
        <path d="M8 12.5h8M8 16h5" />
      </svg>
    ),
  },
  {
    label: "الخدمات",
    href: "/services",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className={iconClassName}
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="8" width="16" height="11" rx="2" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </svg>
    ),
  },
  {
    label: "الباقات",
    href: "/packages",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className={iconClassName}
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <path d="M3 12h18" />
        <path d="M12 8v12" />
        <path d="M7.5 6a2.5 2.5 0 0 1 5 0V8h-5V6Z" />
      </svg>
    ),
  },
  {
    label: "الأعمال",
    href: "/works",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className={iconClassName}
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <circle cx="9" cy="11" r="1.5" />
        <path d="M4 16l4-3 3 2 3-3 6 4" />
      </svg>
    ),
  },
  {
    label: "الصفحات",
    href: "/pages",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className={iconClassName}
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 20V5a1.5 1.5 0 0 1 1-1.5Z" />
        <path d="M14 3.5V8h4" />
        <path d="M8.5 12.5h7M8.5 16h7" />
      </svg>
    ),
  },
  {
    label: "التحليلات",
    href: "/analytics",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className={iconClassName}
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 20V5" />
        <path d="M8 20V11" />
        <path d="M12 20V7" />
        <path d="M16 20V14" />
        <path d="M20 20V9" />
      </svg>
    ),
  },
  {
    label: "الإعدادات",
    href: "/settings",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className={iconClassName}
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" />
        <path d="M4.5 12a7.5 7.5 0 0 1 .2-1.6l-1.9-1.1 2-3.4 2.2 1a7.5 7.5 0 0 1 2.8-1.6l.4-2.4h3.9l.4 2.4a7.5 7.5 0 0 1 2.8 1.6l2.2-1 2 3.4-1.9 1.1c.1.5.2 1 .2 1.6s-.1 1.1-.2 1.6l1.9 1.1-2 3.4-2.2-1a7.5 7.5 0 0 1-2.8 1.6l-.4 2.4h-3.9l-.4-2.4a7.5 7.5 0 0 1-2.8-1.6l-2.2 1-2-3.4 1.9-1.1c-.1-.5-.2-1-.2-1.6Z" />
      </svg>
    ),
  },
];

const statCards = [
  {
    title: "عدد الليدز اليوم",
    value: "25",
    change: "+12%",
  },
  {
    title: "عدد الليدز هذا الأسبوع",
    value: "131",
    change: "+8%",
  },
  {
    title: "معدل التحويل",
    value: "30%",
    change: "-2%",
  },
  {
    title: "الاحترافية",
    value: "الأعلى طلباً",
    change: "",
  },
];

const lineData = {
  labels: [
    "السبت",
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
  ],
  datasets: [
    {
      label: "الليدز خلال الأسبوع",
      data: [14, 19, 15, 22, 18, 25, 20],
      borderColor: "#22d3ee",
      backgroundColor: "rgba(34,211,238,0.18)",
      pointRadius: 4,
      pointHoverRadius: 5,
      pointBackgroundColor: "#22d3ee",
      tension: 0.35,
      fill: true,
    },
  ],
};

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      rtl: true,
      backgroundColor: "rgba(12,17,25,0.9)",
      borderColor: "rgba(255,255,255,0.12)",
      borderWidth: 1,
      titleColor: "#e2e8f0",
      bodyColor: "#cbd5f5",
    },
  },
  scales: {
    x: {
      grid: {
        color: "rgba(148,163,184,0.12)",
      },
      ticks: {
        color: "#94a3b8",
      },
    },
    y: {
      grid: {
        color: "rgba(148,163,184,0.12)",
      },
      ticks: {
        color: "#94a3b8",
      },
    },
  },
};

const doughnutData = {
  labels: ["واتساب", "نموذج التواصل"],
  datasets: [
    {
      data: [65, 35],
      backgroundColor: ["#06b6d4", "#3b82f6"],
      borderWidth: 0,
      hoverOffset: 6,
    },
  ],
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "58%",
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      rtl: true,
      backgroundColor: "rgba(12,17,25,0.9)",
      borderColor: "rgba(255,255,255,0.12)",
      borderWidth: 1,
      titleColor: "#e2e8f0",
      bodyColor: "#cbd5f5",
    },
  },
};

const funnelData = {
  labels: ["باقة الشركات", "باقة الأعمال", "الباقة الاحترافية", "الباقة المبدئية"],
  datasets: [
    {
      label: "نسبة التحويل",
      data: [100, 75, 50, 30],
      backgroundColor: "#06b6d4",
      borderRadius: 12,
      barThickness: 26,
      hoverBackgroundColor: "#22d3ee",
    },
  ],
};

const funnelOptions = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: "y" as const,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      rtl: true,
      backgroundColor: "rgba(12,17,25,0.9)",
      borderColor: "rgba(255,255,255,0.12)",
      borderWidth: 1,
      titleColor: "#e2e8f0",
      bodyColor: "#cbd5f5",
    },
  },
  scales: {
    x: {
      min: 0,
      max: 100,
      grid: {
        color: "rgba(148,163,184,0.12)",
      },
      ticks: {
        color: "#94a3b8",
        stepSize: 25,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#94a3b8",
      },
    },
  },
};

const updates = [
  {
    title: "تحديث محتوى صفحة الخدمات",
    team: "فريق المحتوى",
    time: "منذ ساعة",
  },
  {
    title: "إضافة مشروع جديد للمعرض",
    team: "فريق المحتوى",
    time: "منذ ساعتين",
  },
  {
    title: "تعديل باقة البرمجة",
    team: "فريق المحتوى",
    time: "منذ 5 ساعات",
  },
];

const leads = [
  {
    name: "أحمد محمد",
    phone: "0501234567",
    source: "واتساب",
    packageName: "الباقة الاحترافية",
    time: "منذ 5 دقائق",
    status: "جديد",
  },
  {
    name: "سارة علي",
    phone: "0559876543",
    source: "نموذج",
    packageName: "الباقة المتقدمة",
    time: "منذ 15 دقيقة",
    status: "تم التواصل",
  },
  {
    name: "محمد عبدالله",
    phone: "0532211445",
    source: "اتصال",
    packageName: "باقة الشركات",
    time: "منذ 40 دقيقة",
    status: "مؤهل",
  },
];

export default function OverviewPage() {
  const pathname = usePathname();

  return (
    <div
      className={`${cairo.className} min-h-screen bg-[#0a0e14] text-white`}
      dir="rtl"
    >
      <div className="flex min-h-screen">
        <aside
          className="min-h-screen w-[260px] border-r border-white/5 bg-gradient-to-b from-[#0a0f15] via-[#0b1018] to-[#0a0d12] px-6 py-10 shadow-[0_0_40px_rgba(0,0,0,0.45)]"
          dir="rtl"
        >
          <div className="mb-12 text-center">
            <div className="text-2xl font-semibold tracking-wide text-[#33d2c9]">
              LoopTech
            </div>
          </div>

          <nav aria-label="القائمة الرئيسية">
            <ul className="space-y-3">
              {items.map((item) => {
                const isActive = item.href
                  ? pathname === item.href
                  : false;
                const baseClass =
                  "flex w-full items-center justify-start gap-3 rounded-xl px-4 py-3 text-right text-[15px] transition";
                const stateClass = isActive
                  ? "border border-[#2fd0c6]/60 bg-[#0f2c2f] text-[#6ef0e6] shadow-[0_0_0_1px_rgba(47,208,198,0.35),0_10px_22px_rgba(47,208,198,0.08)]"
                  : "text-[#a9b0bb] hover:bg-white/5 hover:text-[#d7dde6]";
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`${baseClass} ${stateClass}`}
                      >
                        <span
                          className={`${
                            isActive ? "text-[#2fd0c6]" : "text-[#8b93a0]"
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className={`${baseClass} ${stateClass}`}
                      >
                        <span
                          className={`${
                            isActive ? "text-[#2fd0c6]" : "text-[#8b93a0]"
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.label}</span>
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <main className="flex-1 bg-[#0a0e14] px-6 py-6 lg:px-10" dir="rtl">
          <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6">
            <div className="order-2 flex items-center gap-4">
              <Link
                href="/settings"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1cc7c1] text-sm font-bold text-black">
                  م
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-white">
                    محمد أحمد
                  </p>
                  <p className="text-xs text-[#7dd3fc]">مشرف</p>
                </div>
                <svg
                  className="h-4 w-4 text-white/70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </Link>
              <button
                type="button"
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80"
              >
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#22d3ee]" />
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
                  <path d="M13.7 21a2 2 0 0 1-3.4 0" />
                </svg>
              </button>
            </div>

            <div className="order-1 flex w-full max-w-md items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
              <svg
                className="h-4 w-4 text-white/60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input
                className="w-full bg-transparent text-right text-sm text-white placeholder:text-white/40 focus:outline-none"
                placeholder="ابحث..."
              />
            </div>
          </header>

          <section className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-white">
                  نظرة عامة
                </h1>
                <p className="mt-1 text-sm text-white/60">
                  مرحبًا بك في لوحة التحكم
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {statCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                >
                  <div className="text-sm text-white/60">{card.title}</div>
                  <div className="mt-5 text-2xl font-semibold text-white">
                    {card.value}
                  </div>
                  {card.change ? (
                    <div
                      className={`mt-1 text-xs font-medium ${
                        card.change.startsWith("-")
                          ? "text-red-400"
                          : "text-emerald-400"
                      }`}
                    >
                      {card.change}
                    </div>
                  ) : (
                    <div className="mt-1 text-xs text-white/50">
                      أكثر باقة طلبًا
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">
                    الليدز خلال الأسبوع
                  </h2>
                  <span className="text-xs text-emerald-400">+12%</span>
                </div>
                <div className="h-[260px]">
                  <Line data={lineData} options={lineOptions} />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">
                    مصادر الليدز
                  </h2>
                </div>
                <div className="flex flex-col items-center gap-6">
                  <div className="h-[220px] w-full max-w-[260px]">
                    <Doughnut data={doughnutData} options={doughnutOptions} />
                  </div>
                  <div className="flex items-center gap-6 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#06b6d4]" />
                      <span>واتساب 65%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#3b82f6]" />
                      <span>نموذج التواصل 35%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">قمع التحويل</h2>
              </div>
              <div className="h-[260px]">
                <Bar data={funnelData} options={funnelOptions} />
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">
                    آخر التحديثات
                  </h2>
                </div>
                <div className="space-y-4">
                  {updates.map((update) => (
                    <div
                      key={update.title}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                    >
                      <div className="text-sm font-semibold text-white">
                        {update.title}
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-white/60">
                        <span className="rounded-full border border-[#0ea5e9]/30 bg-[#0b2a2f] px-3 py-1 text-[#7dd3fc]">
                          {update.team}
                        </span>
                        <span>{update.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">
                    أحدث الليدز
                  </h2>
                </div>
                <div className="space-y-4">
                  {leads.map((lead) => (
                    <div
                      key={lead.phone}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold text-white">
                            {lead.name}
                          </div>
                          <div className="mt-1 text-xs text-white/60">
                            {lead.phone}
                          </div>
                        </div>
                        <span className="rounded-full bg-[#1e3a8a]/60 px-3 py-1 text-xs font-medium text-[#93c5fd]">
                          {lead.status}
                        </span>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-white/60">
                        <span>{lead.packageName}</span>
                        <span>·</span>
                        <span>{lead.source}</span>
                        <span>·</span>
                        <span>{lead.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

