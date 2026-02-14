"use client";

import { Cairo } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const teamMembers = [
  {
    name: "محمد أحمد",
    role: "Admin",
    initials: "م",
  },
  {
    name: "سارة علي",
    role: "Sales",
    initials: "س",
  },
  {
    name: "أحمد خالد",
    role: "Content",
    initials: "أ",
  },
];

const notificationItems = [
  {
    id: "lead",
    title: "ليد جديد",
    description: "إشعار عند استلام ليد جديد",
    checked: true,
  },
  {
    id: "whatsapp",
    title: "رسائل واتساب",
    description: "إشعار عند استلام رسالة جديدة",
    checked: true,
  },
  {
    id: "projects",
    title: "تحديثات المشاريع",
    description: "إشعار عند تحديث حالة المشروع",
    checked: false,
  },
  {
    id: "reports",
    title: "التقارير الأسبوعية",
    description: "استلام تقرير أسبوعي عن الأداء",
    checked: true,
  },
];

export default function SettingsPage() {
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
                const isActive = item.href ? pathname === item.href : false;
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
                  <p className="text-sm font-semibold text-white">محمد أحمد</p>
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
            <div className="flex items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-semibold text-white">الإعدادات</h1>
                <p className="mt-1 text-sm text-white/60">
                  إدارة إعدادات الحساب والنظام
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_2.2fr]">
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2fd0c6]/30 bg-[#0f2c2f] text-[#38f2e6]">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="8" />
                          <path d="M12 8v8" />
                          <path d="M8 12h8" />
                        </svg>
                      </span>
                      <h2 className="text-sm font-semibold text-white">
                        معلومات الشركة
                      </h2>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-white/60">اسم الشركة</label>
                      <input
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                        defaultValue="LoopTech"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/60">الموقع الإلكتروني</label>
                      <input
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                        defaultValue="https://looptech.sa"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/60">البريد</label>
                      <input
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                        defaultValue="info@looptech.sa"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/60">الهاتف</label>
                      <input
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                        defaultValue="+966 4567 123 50"
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                  <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-white">
                      أعضاء الفريق
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {teamMembers.map((member) => (
                      <div
                        key={member.name}
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1cc7c1] text-sm font-semibold text-black">
                            {member.initials}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {member.name}
                            </p>
                            <p className="text-xs text-white/50">
                              {member.role}
                            </p>
                          </div>
                        </div>
                        <svg
                          className="h-4 w-4 text-white/50"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-[#22d3ee]/40 hover:text-white"
                  >
                    إدارة الفريق
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2fd0c6]/30 bg-[#0f2c2f] text-[#38f2e6]">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="8" r="4" />
                          <path d="M6 20c1.8-3.6 10.2-3.6 12 0" />
                        </svg>
                      </span>
                      <h2 className="text-sm font-semibold text-white">
                        الملف الشخصي
                      </h2>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-xs text-white/60">الاسم الأول</label>
                      <input
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                        defaultValue="محمد"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/60">الاسم الأخير</label>
                      <input
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                        defaultValue="أحمد"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/60">البريد الإلكتروني</label>
                      <input
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                        defaultValue="mohammed@looptech.sa"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/60">رقم الهاتف</label>
                      <input
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                        defaultValue="0501234567"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-xs text-white/60">الدور الوظيفي</label>
                      <select className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:outline-none">
                        <option className="bg-[#0f1722]">Admin</option>
                        <option className="bg-[#0f1722]">Manager</option>
                        <option className="bg-[#0f1722]">Editor</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#15cfc3] to-[#1ea4d5] px-4 py-3 text-sm font-semibold text-black shadow-[0_12px_24px_rgba(34,211,238,0.25)] transition hover:opacity-90"
                  >
                    حفظ التغييرات
                  </button>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2fd0c6]/30 bg-[#0f2c2f] text-[#38f2e6]">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="5" y="10" width="14" height="9" rx="2" />
                          <path d="M8 10V7a4 4 0 1 1 8 0v3" />
                        </svg>
                      </span>
                      <h2 className="text-sm font-semibold text-white">الأمان</h2>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-white/60">كلمة المرور الحالية</label>
                      <input
                        type="password"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                        defaultValue="password"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/60">كلمة المرور الجديدة</label>
                      <input
                        type="password"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                        defaultValue="password"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/60">تأكيد كلمة المرور</label>
                      <input
                        type="password"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                        defaultValue="password"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:border-[#22d3ee]/50 hover:text-white"
                  >
                    تغيير كلمة المرور
                  </button>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2fd0c6]/30 bg-[#0f2c2f] text-[#38f2e6]">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
                          <path d="M13.7 21a2 2 0 0 1-3.4 0" />
                        </svg>
                      </span>
                      <h2 className="text-sm font-semibold text-white">
                        الإشعارات
                      </h2>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {notificationItems.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                      >
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs text-white/50">
                            {item.description}
                          </p>
                        </div>
                        <span className="relative inline-flex h-6 w-11 items-center">
                          <input
                            type="checkbox"
                            defaultChecked={item.checked}
                            className="peer sr-only"
                          />
                          <span className="absolute inset-0 rounded-full bg-white/10 transition peer-checked:bg-[#22d3ee]/70" />
                          <span className="absolute right-1 h-4 w-4 rounded-full bg-white/70 transition peer-checked:-translate-x-5 peer-checked:bg-white" />
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

