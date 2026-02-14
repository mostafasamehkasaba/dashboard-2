"use client";

import { useEffect, useState } from "react";
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

const packages = [
  {
    name: "الباقة الاحترافية",
    price: "20,000",
    currency: "ريال",
    isBest: false,
    isHighlighted: false,
    isFeatured: false,
    features: [
      "تصميم موقع غير محدود",
      "تصميم مخصص بالكامل",
      "نظام إدارة متكامل",
      "استضافة لمدة سنتين",
      "دومين مجاني",
      "بريد إلكتروني احترافي",
      "تحسين محركات البحث SEO متقدم",
      "تكامل مع وسائل التواصل",
      "تحليلات وتقارير",
      "دعم فني لمدة سنة",
    ],
  },
  {
    name: "الباقة المتقدمة",
    price: "10,000",
    currency: "ريال",
    isBest: true,
    isHighlighted: false,
    isFeatured: true,
    features: [
      "تصميم موقع من 10 صفحات",
      "تصميم متجاوب مع جميع الأجهزة",
      "نظام إدارة محتوى متقدم",
      "استضافة لمدة سنة",
      "دومين مجاني",
      "بريد إلكتروني احترافي",
      "تحسين محركات البحث SEO",
      "دعم فني لمدة 6 أشهر",
    ],
  },
  {
    name: "الباقة الأساسية",
    price: "5,000",
    currency: "ريال",
    isBest: false,
    isHighlighted: true,
    isFeatured: false,
    features: [
      "تصميم موقع من 5 صفحات",
      "تصميم متجاوب مع الجوال",
      "نظام إدارة محتوى",
      "استضافة لمدة سنة",
      "دومين مجاني",
      "دعم فني لمدة 3 أشهر",
    ],
  },
];

type PackageItem = (typeof packages)[number];

export default function PackagesPage() {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const [packagesData, setPackagesData] = useState<PackageItem[]>(packages);
  const [editOpen, setEditOpen] = useState(false);
  const [editingPackage, setEditingPackage] = useState<PackageItem | null>(null);
  const [editForm, setEditForm] = useState({
    name: "",
    price: "",
    currency: "ريال",
    isBest: false,
    isHighlighted: false,
    isFeatured: false,
    featuresText: "",
  });
  const [subscribeOpen, setSubscribeOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{
    name: string;
    price: string;
  } | null>(null);
  const [subscribeForm, setSubscribeForm] = useState({
    email: "",
    phone: "",
    amount: "",
    method: "wallet",
    walletNumber: "",
    bankAccount: "",
    bankName: "",
    ownerName: "",
    note: "",
  });
  const [subscribeError, setSubscribeError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const openSubscribe = (pkg: { name: string; price: string }) => {
    setSelectedPackage(pkg);
    setSubscribeForm({
      email: "",
      phone: "",
      amount: pkg.price.replace(/,/g, ""),
      method: "wallet",
      walletNumber: "",
      bankAccount: "",
      bankName: "",
      ownerName: "",
      note: "",
    });
    setSubscribeError("");
    setShowSuccess(false);
    setSubscribeOpen(true);
  };

  const openEditPackage = (pkg: PackageItem) => {
    setEditingPackage(pkg);
    setEditForm({
      name: pkg.name,
      price: pkg.price,
      currency: pkg.currency,
      isBest: pkg.isBest,
      isHighlighted: pkg.isHighlighted,
      isFeatured: pkg.isFeatured,
      featuresText: pkg.features.join("\n"),
    });
    setEditOpen(true);
  };

  const closeEditPackage = () => {
    setEditOpen(false);
    setEditingPackage(null);
  };

  const saveEditPackage = () => {
    if (!editingPackage) return;
    const updated: PackageItem = {
      ...editingPackage,
      name: editForm.name.trim() || editingPackage.name,
      price: editForm.price.trim() || editingPackage.price,
      currency: editForm.currency,
      isBest: editForm.isBest,
      isHighlighted: editForm.isHighlighted,
      isFeatured: editForm.isFeatured,
      features: editForm.featuresText
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
    };
    setPackagesData((prev) =>
      prev.map((pkg) => (pkg.name === editingPackage.name ? updated : pkg))
    );
    closeEditPackage();
  };

  const closeSubscribe = () => {
    setSubscribeOpen(false);
    setSelectedPackage(null);
    setSubscribeError("");
    setShowSuccess(false);
  };

  const saveSubscription = () => {
    const amountValue = Number(subscribeForm.amount);
    const validEmail = /\S+@\S+\.\S+/.test(subscribeForm.email);
    const validPhone = subscribeForm.phone.trim().length >= 8;
    const hasPaymentNumber =
      subscribeForm.method === "wallet"
        ? subscribeForm.walletNumber.trim().length >= 6
        : subscribeForm.bankAccount.trim().length >= 6;

    if (!validEmail) {
      setSubscribeError("من فضلك أدخل بريدًا إلكترونيًا صحيحًا.");
      return;
    }
    if (!validPhone) {
      setSubscribeError("من فضلك أدخل رقم هاتف صحيح.");
      return;
    }
    if (!amountValue || amountValue <= 0) {
      setSubscribeError("من فضلك أدخل مبلغًا صحيحًا.");
      return;
    }
    if (!hasPaymentNumber) {
      setSubscribeError("من فضلك أدخل رقم المحفظة أو الحساب البنكي.");
      return;
    }

    setSubscribeError("");
    setShowSuccess(true);
  };

  useEffect(() => {
    if (!showSuccess) return;
    const timer = setTimeout(() => {
      closeSubscribe();
    }, 1800);
    return () => clearTimeout(timer);
  }, [showSuccess]);

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
                  إدارة الباقات
                </h1>
                <p className="mt-1 text-sm text-white/60">
                  إدارة باقات الخدمات المعروضة
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
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
                إضافة باقة
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
                  placeholder="ابحث في الباقات..."
                />
              </div>
            </div>

            <div className="grid items-start gap-6 lg:grid-cols-3">
              {packagesData.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative overflow-hidden rounded-3xl border bg-gradient-to-b from-[#121722] to-[#0b0f16] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] transform-gpu ${
                    pkg.isHighlighted
                      ? "border-[#22d3ee]/45 shadow-[0_0_0_1px_rgba(34,211,238,0.25),0_18px_40px_rgba(0,0,0,0.35)]"
                      : "border-white/10"
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <div className="flex items-start justify-between">
                    <button
                      type="button"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 text-red-300"
                      aria-label="حذف الباقة"
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

                    {pkg.isBest ? (
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#0f2c2f] px-3 py-1 text-xs font-semibold text-[#6ef0e6]">
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
                          <path d="m12 3 2.5 5 5.5.8-4 3.9.9 5.6L12 15.9 7.1 18.3l.9-5.6-4-3.9 5.5-.8L12 3Z" />
                        </svg>
                        الأكثر طلباً
                      </span>
                    ) : (
                      <span className="h-7" />
                    )}
                  </div>

                  <div className="mt-5 text-center">
                    <h3 className="text-xl font-semibold text-white">
                      {pkg.name}
                    </h3>
                    <div className="mt-4 flex items-end justify-center gap-2">
                      <span className="text-sm text-white/50">
                        {pkg.currency}
                      </span>
                      <span className="text-3xl font-semibold text-[#22d3ee]">
                        {pkg.price}
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-white/50">يبدأ من</div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/60">
                    <div className="flex items-center justify-between">
                      <span>المميزات</span>
                      <span>{pkg.features.length} عناصر</span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-3 text-sm text-white/70">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center justify-between gap-3"
                      >
                        <span>{feature}</span>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0b2a2f] text-[#22d3ee]">
                          <svg
                            className="h-3 w-3"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="my-6 h-px bg-white/10" />

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => openSubscribe(pkg)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#15cfc3] to-[#1ea4d5] px-4 py-2 text-sm font-semibold text-black shadow-[0_12px_24px_rgba(34,211,238,0.25)] transition hover:opacity-90"
                    >
                      اشتراك
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
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:text-white"
                      onClick={() => openEditPackage(pkg)}
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
                  </div>

                  <label className="mt-4 flex items-center justify-between text-xs text-white/60">
                    <span>ضع علامة باقة مميزة</span>
                    <input
                      type="checkbox"
                      defaultChecked={pkg.isFeatured}
                      className="h-4 w-4 accent-[#22d3ee]"
                    />
                  </label>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/60 transition ${
          modalOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setModalOpen(false)}
      />
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition ${
          modalOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
          <div className="flex items-start justify-between">
            <div className="text-right">
              <h2 className="text-xl font-semibold text-white">
                إضافة باقة جديدة
              </h2>
              <p className="mt-1 text-sm text-white/50">إعداد تفاصيل الباقة</p>
            </div>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
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
                اسم الباقة
              </label>
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                placeholder="مثال: الباقة الذهبية"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/60">
                السعر المبدئي (ريال)
              </label>
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                placeholder="5000"
                type="number"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/60">
                المميزات (واحدة في كل سطر)
              </label>
              <textarea
                className="h-36 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                placeholder="تصميم موقع من 5 صفحات&#10;تصميم متجاوب&#10;نظام إدارة محتوى"
              />
            </div>
            <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-[#22d3ee]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m12 3 2.5 5 5.5.8-4 3.9.9 5.6L12 15.9 7.1 18.3l.9-5.6-4-3.9 5.5-.8L12 3Z" />
                </svg>
                باقة مميزة (الأكثر طلباً)
              </span>
              <input type="checkbox" className="h-4 w-4 accent-[#22d3ee]" />
            </label>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/70 hover:text-white"
            >
              إلغاء
            </button>
            <button
              type="button"
              className="flex-1 rounded-xl bg-[#1cc7c1] px-5 py-3 text-sm font-semibold text-[#042226] shadow-[0_10px_25px_rgba(28,199,193,0.35)] transition hover:bg-[#22d3ee]"
            >
              حفظ الباقة
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/60 transition ${
          editOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeEditPackage}
      />
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition ${
          editOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
          <div className="flex items-start justify-between">
            <div className="text-right">
              <h2 className="text-xl font-semibold text-white">تعديل الباقة</h2>
              <p className="mt-1 text-sm text-white/50">
                تحديث تفاصيل الباقة المحددة
              </p>
            </div>
            <button
              type="button"
              onClick={closeEditPackage}
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

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-xs text-white/60">اسم الباقة</label>
              <input
                value={editForm.name}
                onChange={(event) =>
                  setEditForm((prev) => ({
                    ...prev,
                    name: event.target.value,
                  }))
                }
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                placeholder="مثال: الباقة الذهبية"
              />
            </div>
            <div>
              <label className="text-xs text-white/60">السعر</label>
              <input
                value={editForm.price}
                onChange={(event) =>
                  setEditForm((prev) => ({
                    ...prev,
                    price: event.target.value,
                  }))
                }
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                placeholder="20000"
              />
            </div>
            <div>
              <label className="text-xs text-white/60">العملة</label>
              <input
                value={editForm.currency}
                onChange={(event) =>
                  setEditForm((prev) => ({
                    ...prev,
                    currency: event.target.value,
                  }))
                }
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                placeholder="ريال"
              />
            </div>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm text-white/70">
                <input
                  type="checkbox"
                  checked={editForm.isBest}
                  onChange={(event) =>
                    setEditForm((prev) => ({
                      ...prev,
                      isBest: event.target.checked,
                    }))
                  }
                  className="h-4 w-4 accent-[#22d3ee]"
                />
                الأكثر طلباً
              </label>
              <label className="flex items-center gap-2 text-sm text-white/70">
                <input
                  type="checkbox"
                  checked={editForm.isFeatured}
                  onChange={(event) =>
                    setEditForm((prev) => ({
                      ...prev,
                      isFeatured: event.target.checked,
                    }))
                  }
                  className="h-4 w-4 accent-[#22d3ee]"
                />
                مميزة
              </label>
              <label className="flex items-center gap-2 text-sm text-white/70">
                <input
                  type="checkbox"
                  checked={editForm.isHighlighted}
                  onChange={(event) =>
                    setEditForm((prev) => ({
                      ...prev,
                      isHighlighted: event.target.checked,
                    }))
                  }
                  className="h-4 w-4 accent-[#22d3ee]"
                />
                مميزة بصرياً
              </label>
            </div>
            <div className="md:col-span-2">
              <label className="text-xs text-white/60">المميزات</label>
              <textarea
                value={editForm.featuresText}
                onChange={(event) =>
                  setEditForm((prev) => ({
                    ...prev,
                    featuresText: event.target.value,
                  }))
                }
                className="mt-2 h-40 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                placeholder="كل ميزة في سطر منفصل"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={closeEditPackage}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/70 hover:text-white"
            >
              إلغاء
            </button>
            <button
              type="button"
              onClick={saveEditPackage}
              className="flex-1 rounded-xl bg-[#1cc7c1] px-5 py-3 text-sm font-semibold text-[#042226] shadow-[0_10px_25px_rgba(28,199,193,0.35)] transition hover:bg-[#22d3ee]"
            >
              حفظ التعديلات
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/60 transition ${
          subscribeOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeSubscribe}
      />
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition ${
          subscribeOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="w-full max-w-md max-h-[80vh] overflow-y-auto rounded-3xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.6)] [scrollbar-width:thin] [scrollbar-color:#1ea4d5_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#1ea4d5]/70 [&::-webkit-scrollbar-thumb]:hover:bg-[#22d3ee]">
          <div className="flex items-start justify-between">
            <div className="text-right">
              <h2 className="text-xl font-semibold text-white">تأكيد الاشتراك</h2>
              <p className="mt-1 text-sm text-white/50">
                اشتراك في باقة {selectedPackage?.name ?? "—"}
              </p>
            </div>
            <button
              type="button"
              onClick={closeSubscribe}
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

          <div className="mt-4 text-xs text-white/60">
            سيتم إرسال طلب الاشتراك لفريق المبيعات لإتمام الدفع والتفعيل.
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-xs text-white/60">البريد الإلكتروني</label>
              <input
                value={subscribeForm.email}
                onChange={(event) =>
                  setSubscribeForm((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }))
                }
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                placeholder="name@email.com"
              />
            </div>
            <div>
              <label className="text-xs text-white/60">رقم الهاتف</label>
              <input
                value={subscribeForm.phone}
                onChange={(event) =>
                  setSubscribeForm((prev) => ({
                    ...prev,
                    phone: event.target.value,
                  }))
                }
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                placeholder="05xxxxxxxx"
              />
            </div>
            <div>
              <label className="text-xs text-white/60">المبلغ</label>
              <input
                type="number"
                value={subscribeForm.amount}
                onChange={(event) =>
                  setSubscribeForm((prev) => ({
                    ...prev,
                    amount: event.target.value,
                  }))
                }
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                placeholder={selectedPackage?.price ?? "0"}
              />
            </div>
            <div>
              <label className="text-xs text-white/60">اسم صاحب الحساب</label>
              <input
                value={subscribeForm.ownerName}
                onChange={(event) =>
                  setSubscribeForm((prev) => ({
                    ...prev,
                    ownerName: event.target.value,
                  }))
                }
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                placeholder="مثال: محمد أحمد"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-xs text-white/60">طريقة الدفع</label>
              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setSubscribeForm((prev) => ({
                      ...prev,
                      method: "wallet",
                    }))
                  }
                  className={`rounded-xl border px-4 py-2 text-sm transition ${
                    subscribeForm.method === "wallet"
                      ? "border-[#22d3ee]/60 bg-[#0f2c2f] text-[#6ef0e6]"
                      : "border-white/10 bg-white/5 text-white/70 hover:text-white"
                  }`}
                >
                  محفظة
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setSubscribeForm((prev) => ({
                      ...prev,
                      method: "bank",
                    }))
                  }
                  className={`rounded-xl border px-4 py-2 text-sm transition ${
                    subscribeForm.method === "bank"
                      ? "border-[#22d3ee]/60 bg-[#0f2c2f] text-[#6ef0e6]"
                      : "border-white/10 bg-white/5 text-white/70 hover:text-white"
                  }`}
                >
                  حساب بنكي
                </button>
              </div>
            </div>

            {subscribeForm.method === "wallet" ? (
              <div className="md:col-span-2">
                <label className="text-xs text-white/60">رقم المحفظة</label>
                <input
                  value={subscribeForm.walletNumber}
                  onChange={(event) =>
                    setSubscribeForm((prev) => ({
                      ...prev,
                      walletNumber: event.target.value,
                    }))
                  }
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                  placeholder="أدخل رقم المحفظة"
                />
              </div>
            ) : (
              <>
                <div>
                  <label className="text-xs text-white/60">اسم البنك</label>
                  <input
                    value={subscribeForm.bankName}
                    onChange={(event) =>
                      setSubscribeForm((prev) => ({
                        ...prev,
                        bankName: event.target.value,
                      }))
                    }
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                    placeholder="مثال: بنك الراجحي"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/60">رقم الحساب</label>
                  <input
                    value={subscribeForm.bankAccount}
                    onChange={(event) =>
                      setSubscribeForm((prev) => ({
                        ...prev,
                        bankAccount: event.target.value,
                      }))
                    }
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                    placeholder="أدخل رقم الحساب البنكي"
                  />
                </div>
              </>
            )}

            <div className="md:col-span-2">
              <label className="text-xs text-white/60">ملاحظات (اختياري)</label>
              <textarea
                value={subscribeForm.note}
                onChange={(event) =>
                  setSubscribeForm((prev) => ({
                    ...prev,
                    note: event.target.value,
                  }))
                }
                className="mt-2 min-h-[90px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                placeholder="أي تفاصيل إضافية"
              />
            </div>
          </div>

          {subscribeError ? (
            <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-200">
              {subscribeError}
            </div>
          ) : null}

          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={closeSubscribe}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:text-white"
            >
              إلغاء
            </button>
            <button
              type="button"
              onClick={saveSubscription}
              className="rounded-xl bg-gradient-to-r from-[#15cfc3] to-[#1ea4d5] px-4 py-2 text-sm font-semibold text-black shadow-[0_12px_24px_rgba(34,211,238,0.25)] transition hover:opacity-90"
            >
              تأكيد الدفع
            </button>
          </div>
        </div>
      </div>

      {showSuccess ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-sm rounded-3xl border border-emerald-400/40 bg-gradient-to-b from-[#0f1b17] to-[#0b1210] p-6 text-center shadow-[0_30px_70px_rgba(0,0,0,0.55)]">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_10px_30px_rgba(16,185,129,0.45)]">
              <svg
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">
              تم الدفع بنجاح
            </h3>
            <p className="mt-2 text-sm text-emerald-100/80">
              سيتم تفعيل الباقة والتواصل معك قريبًا.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

