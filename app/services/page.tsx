"use client";

import { useState, type ReactNode } from "react";
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

const initialServices = [
  {
    title: "برمجة المواقع",
    description: "نبني مواقع ويب احترافية بأحدث التقنيات",
    features: ["React & Next.js", "استجابة كاملة", "SEO محسّن", "أداء عالي"],
    icon: (
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
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="M10 19 14 5" />
      </svg>
    ),
  },
  {
    title: "تصميم واجهات المستخدم",
    description: "تصاميم عصرية وجذابة تضمن تجربة مستخدم رائعة",
    features: ["تصميم مخصص", "UX/UI", "Figma", "متوافق مع الجوال"],
    icon: (
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
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a7.5 7.5 0 0 0 0-6" />
        <path d="M4.6 9a7.5 7.5 0 0 0 0 6" />
        <path d="M16 4.6a7.5 7.5 0 0 0-8 0" />
        <path d="M8 19.4a7.5 7.5 0 0 0 8 0" />
      </svg>
    ),
  },
  {
    title: "متاجر إلكترونية",
    description: "منصات تجارة إلكترونية متكاملة مع بوابات دفع",
    features: ["نظام سلة", "دفع آمن", "إدارة مخزون", "تقارير مبيعات"],
    icon: (
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
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="17" cy="20" r="1.5" />
        <path d="M3 4h2l2.4 11.5a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 2-1.6L21 8H7" />
      </svg>
    ),
  },
  {
    title: "تطبيقات الجوال",
    description: "تطبيقات iOS و Android عالية الجودة",
    features: ["React Native", "Flutter", "تصميم native", "دعم شامل"],
    icon: (
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
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 19h2" />
      </svg>
    ),
  },
  {
    title: "استضافة وصيانة",
    description: "استضافة آمنة وسريعة مع صيانة دورية",
    features: ["استضافة سحابية", "SSL مجاني", "نسخ احتياطي", "دعم 24/7"],
    icon: (
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
        <circle cx="12" cy="12" r="9" />
        <path d="M2 12h20" />
        <path d="M12 2a15 15 0 0 1 0 20" />
        <path d="M12 2a15 15 0 0 0 0 20" />
      </svg>
    ),
  },
  {
    title: "تحسين محركات البحث",
    description: "تصدّر نتائج البحث وزيادة الزيارات",
    features: ["SEO تقني", "محتوى محسّن", "بناء روابط", "تحليلات"],
    icon: (
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
        <path d="M4 20V5" />
        <path d="M8 20V11" />
        <path d="M12 20V7" />
        <path d="M16 20V14" />
        <path d="M20 20V9" />
      </svg>
    ),
  },
];

type Service = {
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
};

const defaultServiceIcon = (
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
    <path d="m8 9-4 3 4 3" />
    <path d="m16 9 4 3-4 3" />
    <path d="M10 19 14 5" />
  </svg>
);

const initialFaqs = [
  {
    question: "كم المدة المطلوبة لإنجاز الموقع؟",
    answer: "تختلف المدة حسب حجم المشروع، عادة من 2-6 أسابيع",
  },
  {
    question: "هل تقدمون خدمة الصيانة بعد التسليم؟",
    answer: "نعم، نقدم خدمة صيانة شاملة مع كل باقة",
  },
  {
    question: "هل يمكنني طلب تعديلات على التصميم؟",
    answer: "بالتأكيد، نقدم جولتين من التعديلات المجانية",
  },
];

export default function ServicesPage() {
  const pathname = usePathname();
  const [serviceItems, setServiceItems] = useState<Service[]>(initialServices);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [serviceMode, setServiceMode] = useState<"add" | "edit">("add");
  const [editingServiceIndex, setEditingServiceIndex] = useState<number | null>(
    null
  );
  const [serviceTitle, setServiceTitle] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceFeatures, setServiceFeatures] = useState("");
  const [faqItems, setFaqItems] = useState(initialFaqs);
  const [faqModalOpen, setFaqModalOpen] = useState(false);
  const [faqQuestion, setFaqQuestion] = useState("");
  const [faqAnswer, setFaqAnswer] = useState("");

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
                  إدارة الخدمات
                </h1>
                <p className="mt-1 text-sm text-white/60">
                  تحرير محتوى صفحة الخدمات
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setServiceMode("add");
                  setEditingServiceIndex(null);
                  setServiceTitle("");
                  setServiceDescription("");
                  setServiceFeatures("");
                  setServiceModalOpen(true);
                }}
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
                إضافة خدمة
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
                  placeholder="ابحث عن خدمة..."
                />
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {serviceItems.map((service, index) => (
                <div
                  key={service.title}
                  className={`rounded-2xl border bg-gradient-to-b from-[#121722] to-[#0b0f16] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] ${
                    index === 0 ? "border-[#22d3ee]/40" : "border-white/10"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#22d3ee]/30 bg-[#0f2c2f] text-[#22d3ee]">
                      {service.icon}
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setServiceMode("edit");
                        setEditingServiceIndex(index);
                        setServiceTitle(service.title);
                        setServiceDescription(service.description);
                        setServiceFeatures(service.features.join("\n"));
                        setServiceModalOpen(true);
                      }}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-white/60 hover:text-white"
                      aria-label={`تعديل ${service.title}`}
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
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-4 text-right">
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/60">
                      {service.description}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center justify-between gap-3"
                      >
                        <span>{feature}</span>
                        <span className="h-2 w-2 rounded-full bg-[#22d3ee]" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-white">
                  الأسئلة الشائعة
                </h2>
                <button
                  type="button"
                  onClick={() => setFaqModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:text-white"
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
                  إضافة سؤال
                </button>
              </div>

              <div className="space-y-4">
                {faqItems.map((faq) => (
                  <div
                    key={faq.question}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] px-6 py-4"
                  >
                    <div className="text-right">
                      <div className="text-sm font-semibold text-white">
                        {faq.question}
                      </div>
                      <div className="mt-1 text-xs text-white/60">
                        {faq.answer}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-white/60 hover:text-white"
                      aria-label={`تعديل ${faq.question}`}
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
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/60 transition ${
          serviceModalOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setServiceModalOpen(false)}
      />
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition ${
          serviceModalOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
          <div className="flex items-start justify-between">
            <div className="text-right">
              <h2 className="text-xl font-semibold text-white">
                {serviceMode === "edit" ? "تعديل الخدمة" : "إضافة خدمة جديدة"}
              </h2>
              <p className="mt-1 text-sm text-white/50">
                {serviceMode === "edit"
                  ? "حدّث تفاصيل الخدمة الحالية"
                  : "أضف خدمة جديدة للقائمة"}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setServiceModalOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white"
              aria-label="إغلاق"
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
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-white/60">
                اسم الخدمة
              </label>
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                placeholder="مثال: برمجة المواقع"
                value={serviceTitle}
                onChange={(event) => setServiceTitle(event.target.value)}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/60">
                وصف مختصر
              </label>
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                placeholder="وصف سريع للخدمة"
                value={serviceDescription}
                onChange={(event) => setServiceDescription(event.target.value)}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/60">
                المميزات (واحدة في كل سطر)
              </label>
              <textarea
                className="h-36 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                placeholder="الميزة الأولى&#10;الميزة الثانية&#10;الميزة الثالثة"
                value={serviceFeatures}
                onChange={(event) => setServiceFeatures(event.target.value)}
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setServiceModalOpen(false);
                setServiceTitle("");
                setServiceDescription("");
                setServiceFeatures("");
                setEditingServiceIndex(null);
                setServiceMode("add");
              }}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/70 hover:text-white"
            >
              إلغاء
            </button>
            <button
              type="button"
              onClick={() => {
                const title = serviceTitle.trim();
                const description = serviceDescription.trim();
                const features = serviceFeatures
                  .split("\n")
                  .map((item) => item.trim())
                  .filter(Boolean);

                if (!title || !description || features.length === 0) {
                  return;
                }

                if (serviceMode === "edit" && editingServiceIndex !== null) {
                  setServiceItems((prev) =>
                    prev.map((item, idx) =>
                      idx === editingServiceIndex
                        ? { ...item, title, description, features }
                        : item
                    )
                  );
                } else {
                  setServiceItems((prev) => [
                    {
                      title,
                      description,
                      features,
                      icon: defaultServiceIcon,
                    },
                    ...prev,
                  ]);
                }

                setServiceModalOpen(false);
                setServiceTitle("");
                setServiceDescription("");
                setServiceFeatures("");
                setEditingServiceIndex(null);
                setServiceMode("add");
              }}
              className="flex-1 rounded-xl bg-[#1cc7c1] px-5 py-3 text-sm font-semibold text-[#042226] shadow-[0_10px_25px_rgba(28,199,193,0.35)] transition hover:bg-[#22d3ee]"
            >
              حفظ الخدمة
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/60 transition ${
          faqModalOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setFaqModalOpen(false)}
      />
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition ${
          faqModalOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
          <div className="flex items-start justify-between">
            <div className="text-right">
              <h2 className="text-xl font-semibold text-white">
                إضافة سؤال جديد
              </h2>
              <p className="mt-1 text-sm text-white/50">
                أضف سؤالًا وإجابته للصفحة
              </p>
            </div>
            <button
              type="button"
              onClick={() => setFaqModalOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white"
              aria-label="إغلاق"
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
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-white/60">
                السؤال
              </label>
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                placeholder="اكتب السؤال هنا"
                value={faqQuestion}
                onChange={(event) => setFaqQuestion(event.target.value)}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/60">
                الإجابة
              </label>
              <textarea
                className="h-32 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                placeholder="اكتب الإجابة هنا"
                value={faqAnswer}
                onChange={(event) => setFaqAnswer(event.target.value)}
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setFaqModalOpen(false);
                setFaqQuestion("");
                setFaqAnswer("");
              }}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/70 hover:text-white"
            >
              إلغاء
            </button>
            <button
              type="button"
              onClick={() => {
                const q = faqQuestion.trim();
                const a = faqAnswer.trim();
                if (!q || !a) {
                  return;
                }
                setFaqItems((prev) => [{ question: q, answer: a }, ...prev]);
                setFaqQuestion("");
                setFaqAnswer("");
                setFaqModalOpen(false);
              }}
              className="flex-1 rounded-xl bg-[#1cc7c1] px-5 py-3 text-sm font-semibold text-[#042226] shadow-[0_10px_25px_rgba(28,199,193,0.35)] transition hover:bg-[#22d3ee]"
            >
              حفظ السؤال
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

