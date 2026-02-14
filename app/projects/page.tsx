"use client";

import { useState } from "react";

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

const projects = [
  {
    title: "موقع شركة النجاح",
    company: "شركة النجاح",
    packageName: "الباقة الاحترافية",
    status: "منجز",
    progress: 100,
    startDate: "2026-01-01",
    endDate: "2026-02-01",
    owner: "فريق التصميم",
  },
  {
    title: "متجر إلكتروني - الرائد",
    company: "متجر الرائد",
    packageName: "الباقة المتقدمة",
    status: "قيد التنفيذ",
    progress: 75,
    startDate: "2026-01-15",
    endDate: "2026-03-15",
    owner: "فريق البرمجة",
  },
  {
    title: "تطبيق خدمات العملاء",
    company: "نخبة للخدمات",
    packageName: "الباقة الاحترافية",
    status: "متأخر",
    progress: 40,
    startDate: "2026-01-05",
    endDate: "2026-02-25",
    owner: "فريق التطوير",
  },
];

const statusStyles: Record<string, string> = {
  "منجز": "bg-[#14532d]/60 text-[#86efac] border border-[#15803d]/60",
  "قيد التنفيذ":
    "bg-[#0f766e]/50 text-[#5eead4] border border-[#0f766e]/50",
  "متأخر": "bg-[#7f1d1d]/60 text-[#fecaca] border border-[#b91c1c]/60",
  "مسودة": "bg-white/10 text-white/70 border border-white/10",
};

export default function ProjectsPage() {
  const pathname = usePathname();
  const [projectsData, setProjectsData] = useState(projects);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    company: "",
    packageName: "الباقة الاحترافية",
    status: "قيد التنفيذ",
    progress: 0,
    startDate: "",
    endDate: "",
    owner: "",
  });

  const openAddProject = () => {
    setIsAddOpen(true);
    setNewProject({
      title: "",
      company: "",
      packageName: "الباقة الاحترافية",
      status: "قيد التنفيذ",
      progress: 0,
      startDate: "",
      endDate: "",
      owner: "",
    });
  };

  const closeAddProject = () => {
    setIsAddOpen(false);
  };

  const saveNewProject = () => {
    if (!newProject.title.trim() || !newProject.company.trim()) {
      return;
    }
    setProjectsData((prev) => [
      {
        title: newProject.title.trim(),
        company: newProject.company.trim(),
        packageName: newProject.packageName.trim() || "الباقة الاحترافية",
        status: newProject.status,
        progress: Number(newProject.progress) || 0,
        startDate: newProject.startDate || "2026-02-01",
        endDate: newProject.endDate || "2026-03-01",
        owner: newProject.owner.trim() || "فريق التنفيذ",
      },
      ...prev,
    ]);
    closeAddProject();
  };

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

          <section className="pt-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-semibold text-white">
                  المشاريع الجارية
                </h1>
                <p className="mt-1 text-sm text-white/60">
                  متابعة وإدارة جميع المشاريع
                </p>
              </div>
              <button
                type="button"
                onClick={openAddProject}
                className="inline-flex items-center gap-2 rounded-xl bg-[#1cc7c1] px-5 py-2 text-sm font-semibold text-[#042226] shadow-[0_10px_25px_rgba(28,199,193,0.35)] transition hover:bg-[#22d3ee]"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
                إضافة مشروع جديد
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0f131a] px-4 py-2 text-sm text-white/70">
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
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" />
                </svg>
                <input
                  className="w-full bg-transparent text-right text-sm text-white placeholder:text-white/40 focus:outline-none"
                  placeholder="ابحث في المشاريع..."
                />
              </div>
            </div>

            <div className="space-y-6">
              {projectsData.map((project) => (
                <div
                  key={project.title}
                  className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="text-right">
                      <h3 className="text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center justify-end gap-2 text-xs text-white/60">
                        <span>{project.company}</span>
                        <span>•</span>
                        <span>{project.packageName}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                          statusStyles[project.status] ?? statusStyles["مسودة"]
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="mb-2 flex items-center justify-between text-xs text-white/60">
                      <span>التقدم</span>
                      <span className="text-[#22d3ee]">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-[#1cc7c1]"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 md:grid-cols-3">
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                      <span className="text-xs text-white/50">المسؤول</span>
                      <span className="font-semibold text-white">
                        {project.owner}
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                      <span className="text-xs text-white/50">تاريخ الانتهاء</span>
                      <span className="font-semibold text-white">
                        {project.endDate}
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                      <span className="text-xs text-white/50">تاريخ البدء</span>
                      <span className="font-semibold text-white">
                        {project.startDate}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    <button
                      type="button"
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white"
                    >
                      عرض التفاصيل
                    </button>
                    <button
                      type="button"
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white"
                    >
                      تحديث التقدم
                    </button>
                    <button
                      type="button"
                      className="rounded-xl bg-[#0f2c2f] px-4 py-3 text-sm font-semibold text-[#6ef0e6]"
                    >
                      تسليم المشروع
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {isAddOpen ? (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0b0f16] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/50">إضافة مشروع جديد</p>
                      <h3 className="text-lg font-semibold text-white">
                        إضافة مشروع جديد
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={closeAddProject}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white"
                      aria-label="إغلاق"
                    >
                      ×
                    </button>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-xs text-white/60">
                        اسم المشروع
                      </label>
                      <input
                        value={newProject.title}
                        onChange={(event) =>
                          setNewProject((prev) => ({
                            ...prev,
                            title: event.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                        placeholder="مثال: موقع شركة النجاح"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/60">اسم الشركة</label>
                      <input
                        value={newProject.company}
                        onChange={(event) =>
                          setNewProject((prev) => ({
                            ...prev,
                            company: event.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                        placeholder="مثال: شركة النجاح"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/60">الباقة</label>
                      <select
                        value={newProject.packageName}
                        onChange={(event) =>
                          setNewProject((prev) => ({
                            ...prev,
                            packageName: event.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:outline-none"
                      >
                        <option className="bg-[#0f1722]">الباقة الأساسية</option>
                        <option className="bg-[#0f1722]">الباقة المتقدمة</option>
                        <option className="bg-[#0f1722]">الباقة الاحترافية</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-white/60">الحالة</label>
                      <select
                        value={newProject.status}
                        onChange={(event) =>
                          setNewProject((prev) => ({
                            ...prev,
                            status: event.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:outline-none"
                      >
                        <option className="bg-[#0f1722]">قيد التنفيذ</option>
                        <option className="bg-[#0f1722]">منجز</option>
                        <option className="bg-[#0f1722]">متأخر</option>
                        <option className="bg-[#0f1722]">مسودة</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-white/60">
                        نسبة التقدم
                      </label>
                      <input
                        type="number"
                        min={0}
                        max={100}
                        value={newProject.progress}
                        onChange={(event) =>
                          setNewProject((prev) => ({
                            ...prev,
                            progress: Number(event.target.value),
                          }))
                        }
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/60">
                        المسؤول
                      </label>
                      <input
                        value={newProject.owner}
                        onChange={(event) =>
                          setNewProject((prev) => ({
                            ...prev,
                            owner: event.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                        placeholder="مثال: فريق التصميم"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/60">
                        تاريخ البدء
                      </label>
                      <input
                        type="date"
                        value={newProject.startDate}
                        onChange={(event) =>
                          setNewProject((prev) => ({
                            ...prev,
                            startDate: event.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/60">
                        تاريخ التسليم
                      </label>
                      <input
                        type="date"
                        value={newProject.endDate}
                        onChange={(event) =>
                          setNewProject((prev) => ({
                            ...prev,
                            endDate: event.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={closeAddProject}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:text-white"
                    >
                      إلغاء
                    </button>
                    <button
                      type="button"
                      onClick={saveNewProject}
                      className="rounded-xl bg-gradient-to-r from-[#15cfc3] to-[#1ea4d5] px-4 py-2 text-sm font-semibold text-black shadow-[0_12px_24px_rgba(34,211,238,0.25)] transition hover:opacity-90"
                    >
                      حفظ المشروع
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </section>
        </main>
      </div>
    </div>
  );
}

