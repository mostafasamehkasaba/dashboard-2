"use client";

import { useState } from "react";

import Image from "next/image";
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

const works = [
  {
    title: "لوحة تحكم إدارية",
    description: "نظام إدارة متكامل للشركات",
    category: "برمجه",
    status: "منشور",
    highlight: "",
    tech: ["Vue.js", "Laravel", "MySQL"],
    image: "/images/لوحه تحم اداريه.jpg",
  },
  {
    title: "تطبيق التجارة الإلكترونية",
    description: "منصة تجارة إلكترونية كاملة مع نظام دفع",
    category: "تسويق",
    status: "منشور",
    highlight: "",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="17" cy="20" r="1.5" />
        <path d="M3 4h2l2.4 11.5a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 2-1.6L21 8H7" />
      </svg>
    ),
    image: "/images/pexels-goumbik-577210.jpg",
  },
  {
    title: "موقع شركة تقنية",
    description: "تصميم وبرمجة موقع شركة تقنية متكامل",
    category: "جرافك",
    status: "منشور",
    highlight: "مميز",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/images/photo-1557821552-17105176677c.jpg",
  },
];

const categories = ["كل الفئات", "برمجه", "تسويق", "جرافك"];

export default function WorksPage() {
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState("كل الفئات");
  const [searchQuery, setSearchQuery] = useState("");
  const [worksData, setWorksData] = useState(works);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    category: "برمجه",
    status: "منشور",
    highlight: "",
    tech: "",
    image: "/images/لوحه تحم اداريه.jpg",
  });

  const filteredWorks = worksData.filter((work) => {
    const matchesCategory =
      activeCategory === "كل الفئات" || work.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return matchesCategory;
    }
    const haystack = `${work.title} ${work.description} ${work.category}`.toLowerCase();
    return matchesCategory && haystack.includes(query);
  });

  const openAddProject = () => {
    setIsAddOpen(true);
    setImagePreview(null);
    setNewProject({
      title: "",
      description: "",
      category: "برمجه",
      status: "منشور",
      highlight: "",
      tech: "",
      image: "/images/لوحه تحم اداريه.jpg",
    });
  };

  const closeAddProject = () => {
    setIsAddOpen(false);
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
      setImagePreview(null);
    }
  };

  const saveNewProject = () => {
    if (!newProject.title.trim() || !newProject.description.trim()) {
      return;
    }
    const techList = newProject.tech
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    setWorksData((prev) => [
      {
        title: newProject.title.trim(),
        description: newProject.description.trim(),
        category: newProject.category,
        status: newProject.status,
        highlight: newProject.highlight.trim(),
        tech: techList.length ? techList : ["React"],
        image: newProject.image || "/images/لوحه تحم اداريه.jpg",
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

          <section className="pt-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-semibold text-white">
                  معرض الأعمال
                </h1>
                <p className="mt-1 text-sm text-white/60">
                  إدارة المشاريع في معرض الأعمال
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
                إضافة مشروع
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.3)]">
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <select
                    value={activeCategory}
                    onChange={(event) => setActiveCategory(event.target.value)}
                    className="min-w-[140px] appearance-none rounded-xl border border-white/10 bg-[#0f131a] px-4 py-2 pl-9 text-sm text-white/80 focus:outline-none"
                  >
                    {categories.map((category) => (
                      <option
                        key={category}
                        value={category}
                        className="bg-[#0f131a]"
                      >
                        {category}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70"
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
                </div>
                <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-[#0f131a] px-4 py-2 text-sm text-white/70">
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
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {filteredWorks.map((work) => (
                <div
                  key={work.title}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_60%)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-[#16a34a]/20 px-3 py-1 text-xs text-[#86efac]">
                      {work.status}
                    </span>
                    {work.highlight ? (
                      <span className="absolute right-4 top-4 rounded-full bg-[#0f2c2f] px-3 py-1 text-xs text-[#22d3ee]">
                        {work.highlight}
                      </span>
                    ) : null}
                  </div>

                  <div className="space-y-3 p-5 text-right">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {work.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/60">
                        {work.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-start gap-2">
                      <span className="text-xs text-white/50">التقنيات</span>
                      {work.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-start gap-2 text-xs text-white/60">
                      <span>الفئة</span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">
                        {work.icon ? (
                          <span className="ml-2 inline-flex h-4 w-4 items-center justify-center text-[#22d3ee]">
                            {work.icon}
                          </span>
                        ) : null}
                        {work.category}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <button
                        type="button"
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:text-white"
                      >
                        تعديل
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:text-white"
                      >
                        معاينة
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 text-red-300"
                        aria-label="حذف المشروع"
                      >
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M3 6h18" />
                          <path d="M8 6V4h8v2" />
                          <path d="M19 6l-1 14H6L5 6" />
                        </svg>
                      </button>
                    </div>
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
                        إضافة مشروع
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
                        placeholder="مثال: موقع شركة تقنية"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/60">الفئة</label>
                      <select
                        value={newProject.category}
                        onChange={(event) =>
                          setNewProject((prev) => ({
                            ...prev,
                            category: event.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:outline-none"
                      >
                        {categories
                          .filter((category) => category !== "كل الفئات")
                          .map((category) => (
                            <option
                              key={category}
                              value={category}
                              className="bg-[#0f1722]"
                            >
                              {category}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-xs text-white/60">الوصف</label>
                      <textarea
                        value={newProject.description}
                        onChange={(event) =>
                          setNewProject((prev) => ({
                            ...prev,
                            description: event.target.value,
                          }))
                        }
                        className="mt-2 min-h-[90px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                        placeholder="نبذة عن المشروع"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/60">التقنيات</label>
                      <input
                        value={newProject.tech}
                        onChange={(event) =>
                          setNewProject((prev) => ({
                            ...prev,
                            tech: event.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                        placeholder="React, Node.js, MongoDB"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/60">الصورة</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                          const file = event.target.files?.[0];
                          if (!file) return;
                          const nextUrl = URL.createObjectURL(file);
                          if (imagePreview) {
                            URL.revokeObjectURL(imagePreview);
                          }
                          setImagePreview(nextUrl);
                          setNewProject((prev) => ({
                            ...prev,
                            image: nextUrl,
                          }));
                        }}
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white file:mr-4 file:rounded-lg file:border-0 file:bg-[#1cc7c1] file:px-3 file:py-1 file:text-xs file:font-semibold file:text-[#042226]"
                      />
                      <p className="mt-2 text-xs text-white/40">
                        الصيغة المدعومة: PNG, JPG, WEBP
                      </p>
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
                        <option className="bg-[#0f1722]">منشور</option>
                        <option className="bg-[#0f1722]">مسودة</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-white/60">شارة مميزة</label>
                      <input
                        value={newProject.highlight}
                        onChange={(event) =>
                          setNewProject((prev) => ({
                            ...prev,
                            highlight: event.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                        placeholder="مثال: مميز"
                      />
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/60">معاينة الصورة</p>
                    <div className="mt-3 overflow-hidden rounded-xl border border-white/10">
                      <img
                        src={imagePreview || newProject.image}
                        alt="معاينة المشروع"
                        className="h-40 w-full object-cover"
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


