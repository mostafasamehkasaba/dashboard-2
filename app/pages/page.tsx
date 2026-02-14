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

const sections = [
  {
    title: "قسم البطل (Hero Section)",
    fields: [
      { label: "العنوان الرئيسي", value: "نحوّل أفكارك الرقمية إلى واقع" },
      { label: "العنوان الفرعي", value: "شريكك التقني في النجاح" },
      {
        label: "الوصف",
        value:
          "نقدم حلول تقنية متكاملة من تصميم وبرمجة المواقع إلى تطبيقات الجوال",
      },
      { label: "نص الزر", value: "تواصل معنا" },
    ],
    showView: true,
  },
  {
    title: "قسم من نحن",
    fields: [
      { label: "العنوان", value: "من نحن" },
      {
        label: "المحتوى",
        value:
          "LoopTech هي شركة متخصصة في تقديم الحلول التقنية المتكاملة، تعمل مع عملائها لتحويل رؤيتهم الرقمية إلى واقع ملموس من خلال فريق محترف وخبرة واسعة في مجال التقنية.",
      },
    ],
    showView: false,
  },
  {
    title: "إعدادات SEO",
    fields: [
      {
        label: "عنوان الصفحة (Meta Title)",
        value: "LoopTech - حلول تقنية متكاملة",
      },
      {
        label: "وصف الصفحة (Meta Description)",
        value:
          "شركة تقنية متخصصة في تصميم وبرمجة المواقع والمتاجر الإلكترونية وتطبيقات الجوال.",
      },
      {
        label: "الكلمات المفتاحية",
        value:
          "تصميم مواقع، برمجة مواقع، تطبيقات جوال، متاجر إلكترونية",
      },
    ],
    showView: false,
  },
];

export default function PagesPage() {
  const pathname = usePathname();
  const [pageSections, setPageSections] = useState(sections);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeMode, setActiveMode] = useState<"edit" | "view" | null>(null);
  const [draftFields, setDraftFields] = useState<
    { label: string; value: string }[]
  >([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newSectionTitle, setNewSectionTitle] = useState("");
  const [newFields, setNewFields] = useState([{ label: "", value: "" }]);

  const openEdit = (index: number) => {
    setActiveIndex(index);
    setActiveMode("edit");
    setDraftFields(pageSections[index].fields.map((field) => ({ ...field })));
  };

  const openView = (index: number) => {
    setActiveIndex(index);
    setActiveMode("view");
  };

  const closeModal = () => {
    setActiveIndex(null);
    setActiveMode(null);
  };

  const saveChanges = () => {
    if (activeIndex === null) return;
    setPageSections((prev) =>
      prev.map((section, idx) =>
        idx === activeIndex ? { ...section, fields: draftFields } : section
      )
    );
    closeModal();
  };
  const deleteSection = (index: number) => {
    setPageSections((prev) => prev.filter((_, idx) => idx !== index));
    if (activeIndex === index) {
      closeModal();
    }
  };
  const openAdd = () => {
    setIsAddOpen(true);
    setNewSectionTitle("");
    setNewFields([{ label: "", value: "" }]);
  };

  const closeAdd = () => {
    setIsAddOpen(false);
  };

  const addFieldRow = () => {
    setNewFields((prev) => [...prev, { label: "", value: "" }]);
  };

  const saveNewSection = () => {
    if (!newSectionTitle.trim()) {
      return;
    }
    setPageSections((prev) => [
      ...prev,
      {
        title: newSectionTitle.trim(),
        fields: newFields.filter(
          (field) => field.label.trim() || field.value.trim()
        ),
        showView: true,
      },
    ]);
    closeAdd();
  };
  const activeSection =
    activeIndex !== null ? pageSections[activeIndex] : null;

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
                  إدارة محتوى الصفحات
                </h1>
                <p className="mt-1 text-sm text-white/60">
                  تحرير محتوى الموقع الإلكتروني
                </p>
              </div>
              <button
                type="button"
                onClick={openAdd}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#15cfc3] to-[#1ea4d5] px-4 py-2 text-sm font-semibold text-black shadow-[0_12px_24px_rgba(34,211,238,0.25)] transition hover:opacity-90"
              >
                إضافة محتوى صفحة
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {pageSections.map((section, index) => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="text-right">
                      <h3 className="text-lg font-semibold text-white">
                        {section.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => deleteSection(index)}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 hover:bg-red-500/20"
                        aria-label="حذف"
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
                          <path d="M8 6v-2h8v2" />
                          <path d="M6 6l1 14h10l1-14" />
                          <path d="M10 11v6" />
                          <path d="M14 11v6" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={() => openEdit(index)}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 hover:text-white"
                      >
                        تعديل
                        <svg
                          className="h-3.5 w-3.5"
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
                      {section.showView ? (
                        <button
                          type="button"
                          onClick={() => openView(index)}
                          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-white/60 hover:text-white"
                          aria-label="عرض"
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
                            <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 text-sm text-white/70">
                    {section.fields.map((field) => (
                      <div key={field.label} className="space-y-1">
                        <div className="text-xs text-white/50">
                          {field.label}
                        </div>
                        <div className="text-sm font-semibold text-white">
                          {field.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {activeMode && activeSection ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
              <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0b0f16] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/50">
                      {activeMode === "edit" ? "تعديل القسم" : "عرض القسم"}
                    </p>
                    <h3 className="text-lg font-semibold text-white">
                      {activeSection.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white"
                    aria-label="إغلاق"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-6 space-y-4">
                  {activeMode === "edit"
                    ? draftFields.map((field, fieldIndex) => (
                        <div key={`${field.label}-${fieldIndex}`}>
                          <label className="text-xs text-white/60">
                            {field.label}
                          </label>
                          <input
                            value={field.value}
                            onChange={(event) => {
                              const value = event.target.value;
                              setDraftFields((prev) =>
                                prev.map((item, idx) =>
                                  idx === fieldIndex
                                    ? { ...item, value }
                                    : item
                                )
                              );
                            }}
                            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                          />
                        </div>
                      ))
                    : activeSection.fields.map((field) => (
                        <div key={field.label} className="space-y-1">
                          <div className="text-xs text-white/50">
                            {field.label}
                          </div>
                          <div className="text-sm font-semibold text-white">
                            {field.value}
                          </div>
                        </div>
                      ))}
                </div>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:text-white"
                  >
                    إلغاء
                  </button>
                  {activeMode === "edit" ? (
                    <button
                      type="button"
                      onClick={saveChanges}
                      className="rounded-xl bg-gradient-to-r from-[#15cfc3] to-[#1ea4d5] px-4 py-2 text-sm font-semibold text-black shadow-[0_12px_24px_rgba(34,211,238,0.25)] transition hover:opacity-90"
                    >
                      حفظ التغييرات
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={closeModal}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-[#22d3ee]/50 hover:text-white"
                    >
                      إغلاق
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : null}

          {isAddOpen ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
              <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0b0f16] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/50">إضافة قسم جديد</p>
                    <h3 className="text-lg font-semibold text-white">
                      إضافة محتوى صفحة
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={closeAdd}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white"
                    aria-label="إغلاق"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="text-xs text-white/60">عنوان القسم</label>
                    <input
                      value={newSectionTitle}
                      onChange={(event) => setNewSectionTitle(event.target.value)}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                      placeholder="مثال: قسم الخدمات"
                    />
                  </div>

                  <div className="space-y-3">
                    {newFields.map((field, fieldIndex) => (
                      <div
                        key={`new-field-${fieldIndex}`}
                        className="grid gap-3 md:grid-cols-2"
                      >
                        <div>
                          <label className="text-xs text-white/60">
                            اسم الحقل
                          </label>
                          <input
                            value={field.label}
                            onChange={(event) => {
                              const value = event.target.value;
                              setNewFields((prev) =>
                                prev.map((item, idx) =>
                                  idx === fieldIndex
                                    ? { ...item, label: value }
                                    : item
                                )
                              );
                            }}
                            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                            placeholder="مثال: العنوان الرئيسي"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-white/60">
                            قيمة الحقل
                          </label>
                          <input
                            value={field.value}
                            onChange={(event) => {
                              const value = event.target.value;
                              setNewFields((prev) =>
                                prev.map((item, idx) =>
                                  idx === fieldIndex
                                    ? { ...item, value }
                                    : item
                                )
                              );
                            }}
                            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                            placeholder="مثال: نبني حلول رقمية"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={addFieldRow}
                    className="w-full rounded-xl border border-dashed border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-[#22d3ee]/50 hover:text-white"
                  >
                    إضافة حقل جديد
                  </button>
                </div>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={closeAdd}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:text-white"
                  >
                    إلغاء
                  </button>
                  <button
                    type="button"
                    onClick={saveNewSection}
                    className="rounded-xl bg-gradient-to-r from-[#15cfc3] to-[#1ea4d5] px-4 py-2 text-sm font-semibold text-black shadow-[0_12px_24px_rgba(34,211,238,0.25)] transition hover:opacity-90"
                  >
                    حفظ القسم
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </main>
      </div>
    </div>
  );
}

