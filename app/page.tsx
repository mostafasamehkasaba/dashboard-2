"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cairo } from "next/font/google";

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

const leads = [
  {
    name: "أحمد محمد",
    phone: "0501234567",
    email: "ahmed@example.com",
    packageName: "الباقة الاحترافية",
    source: "واتساب",
    status: "جديد",
    owner: "سارة",
    date: "2026-02-13",
  },
  {
    name: "فاطمة علي",
    phone: "0559876543",
    email: "fatima@example.com",
    packageName: "الباقة المتقدمة",
    source: "نموذج",
    status: "تم التواصل",
    owner: "محمد",
    date: "2026-02-12",
  },
  {
    name: "محمد عبدالله",
    phone: "0561112233",
    email: "mohammed@example.com",
    packageName: "الباقة الأساسية",
    source: "واتساب",
    status: "مؤهل",
    owner: "أحمد",
    date: "2026-02-12",
  },
  {
    name: "نورة سعيد",
    phone: "0551234567",
    email: "noura@example.com",
    packageName: "الباقة الاحترافية",
    source: "نموذج",
    status: "تم الإغلاق",
    owner: "سارة",
    date: "2026-02-11",
  },
  {
    name: "خالد حسن",
    phone: "0567891234",
    email: "khaled@example.com",
    packageName: "الباقة المتقدمة",
    source: "واتساب",
    status: "ضائع",
    owner: "محمد",
    date: "2026-02-10",
  },
];

type Lead = (typeof leads)[number];

const packageOptions = [
  "الباقة الأساسية",
  "الباقة المتقدمة",
  "الباقة الاحترافية",
];

const statusOptions = ["جديد", "تم التواصل", "مؤهل", "تم الإغلاق", "ضائع"];
const sourceOptions = ["واتساب", "نموذج"];

const statusStyles: Record<string, string> = {
  "جديد": "bg-[#1e3a8a]/60 text-[#93c5fd] border border-[#1d4ed8]/40",
  "تم التواصل": "bg-[#0f766e]/50 text-[#5eead4] border border-[#0f766e]/50",
  "مؤهل": "bg-[#854d0e]/50 text-[#fde68a] border border-[#a16207]/60",
  "تم الإغلاق": "bg-[#14532d]/50 text-[#86efac] border border-[#15803d]/60",
  "ضائع": "bg-[#7f1d1d]/60 text-[#fecaca] border border-[#b91c1c]/60",
};

export default function Home() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLead, setActiveLead] = useState<Lead | null>(null);
  const [leadsData, setLeadsData] = useState<Lead[]>(leads);
  const [isAddLeadOpen, setIsAddLeadOpen] = useState(false);
  const [newLead, setNewLead] = useState<Lead>({
    name: "",
    phone: "",
    email: "",
    packageName: "الباقة الاحترافية",
    source: "واتساب",
    status: "جديد",
    owner: "",
    date: "",
  });
  const [statusFilter, setStatusFilter] = useState("كل الحالات");
  const [packageFilter, setPackageFilter] = useState("كل الباقات");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusOpen, setStatusOpen] = useState(false);
  const [packageOpen, setPackageOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"cards" | "table">("table");
  const today = new Date().toISOString().slice(0, 10);

  const availablePackages = useMemo(
    () =>
      Array.from(
        new Set([...packageOptions, ...leadsData.map((lead) => lead.packageName)])
      ).sort(
        (a, b) => a.localeCompare(b, "ar")
      ),
    [leadsData]
  );

  const availableStatuses = useMemo(
    () =>
      Array.from(
        new Set([...statusOptions, ...leadsData.map((lead) => lead.status)])
      ).sort((a, b) => a.localeCompare(b, "ar")),
    [leadsData]
  );

  const filteredLeads = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return leadsData.filter((lead) => {
      const matchesStatus =
        statusFilter === "كل الحالات" || lead.status === statusFilter;
      const matchesPackage =
        packageFilter === "كل الباقات" || lead.packageName === packageFilter;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        lead.name.toLowerCase().includes(normalizedSearch) ||
        lead.phone.toLowerCase().includes(normalizedSearch) ||
        lead.email.toLowerCase().includes(normalizedSearch) ||
        lead.source.toLowerCase().includes(normalizedSearch) ||
        lead.owner.toLowerCase().includes(normalizedSearch);

      return matchesStatus && matchesPackage && matchesSearch;
    });
  }, [leadsData, packageFilter, searchTerm, statusFilter]);

  const openAddLead = () => {
    setIsAddLeadOpen(true);
    setNewLead({
      name: "",
      phone: "",
      email: "",
      packageName: "الباقة الاحترافية",
      source: "واتساب",
      status: "جديد",
      owner: "",
      date: today,
    });
  };

  const closeAddLead = () => {
    setIsAddLeadOpen(false);
  };

  const saveNewLead = () => {
    if (!newLead.name.trim() || !newLead.phone.trim()) {
      return;
    }
    const leadToAdd: Lead = {
      ...newLead,
      name: newLead.name.trim(),
      phone: newLead.phone.trim(),
      email: newLead.email.trim(),
      owner: newLead.owner.trim() || "غير محدد",
      date: newLead.date || today,
    };
    setLeadsData((prev) => [leadToAdd, ...prev]);
    closeAddLead();
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
                  إدارة الليدز
                </h1>
                <p className="mt-1 text-sm text-white/60">
                  إدارة ومتابعة جميع العملاء المحتملين
                </p>
              </div>
              <button
                type="button"
                onClick={openAddLead}
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
                إضافة ليد جديد
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.3)]">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center rounded-xl border border-white/10 bg-[#0f131a] p-1">
                  <button
                    type="button"
                    onClick={() => setViewMode("cards")}
                    className={`flex h-9 w-10 items-center justify-center rounded-lg transition ${
                      viewMode === "cards"
                        ? "bg-[#0f2c2f] text-[#6ef0e6]"
                        : "text-white/60 hover:text-white"
                    }`}
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
                      <rect x="4" y="4" width="6" height="6" rx="1.2" />
                      <rect x="14" y="4" width="6" height="6" rx="1.2" />
                      <rect x="4" y="14" width="6" height="6" rx="1.2" />
                      <rect x="14" y="14" width="6" height="6" rx="1.2" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("table")}
                    className={`flex h-9 w-10 items-center justify-center rounded-lg transition ${
                      viewMode === "table"
                        ? "bg-[#0f2c2f] text-[#6ef0e6]"
                        : "text-white/60 hover:text-white"
                    }`}
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
                      <path d="M4 6h16" />
                      <path d="M4 12h16" />
                      <path d="M4 18h16" />
                    </svg>
                  </button>
                </div>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setPackageOpen((prev) => !prev);
                      setStatusOpen(false);
                    }}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0f131a] px-4 py-2 text-sm text-white/70"
                  >
                    {packageFilter}
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
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {packageOpen ? (
                    <div className="absolute right-0 top-12 z-20 w-48 overflow-hidden rounded-xl border border-white/10 bg-[#0f131a] shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
                      <button
                        type="button"
                        onClick={() => {
                          setPackageFilter("كل الباقات");
                          setPackageOpen(false);
                        }}
                        className="flex w-full items-center px-4 py-2 text-sm text-white/70 hover:bg-white/5"
                      >
                        كل الباقات
                      </button>
                      {availablePackages.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setPackageFilter(item);
                            setPackageOpen(false);
                          }}
                          className="flex w-full items-center px-4 py-2 text-sm text-white/70 hover:bg-white/5"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setStatusOpen((prev) => !prev);
                      setPackageOpen(false);
                    }}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0f131a] px-4 py-2 text-sm text-white/70"
                  >
                    {statusFilter}
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
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {statusOpen ? (
                    <div className="absolute right-0 top-12 z-20 w-48 overflow-hidden rounded-xl border border-white/10 bg-[#0f131a] shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
                      <button
                        type="button"
                        onClick={() => {
                          setStatusFilter("كل الحالات");
                          setStatusOpen(false);
                        }}
                        className="flex w-full items-center px-4 py-2 text-sm text-white/70 hover:bg-white/5"
                      >
                        كل الحالات
                      </button>
                      {availableStatuses.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setStatusFilter(item);
                            setStatusOpen(false);
                          }}
                          className="flex w-full items-center px-4 py-2 text-sm text-white/70 hover:bg-white/5"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  ) : null}
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
                    placeholder="ابحث عن ليد..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#121722] to-[#0b0f16] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              {viewMode === "table" ? (
                <div className="overflow-x-auto">
                  <div className="min-w-full">
                    <div className="grid grid-cols-[1.1fr_1fr_1.7fr_1.4fr_1fr_0.9fr_0.9fr_1fr_0.6fr] gap-x-6 border-b border-white/10 px-6 py-4 text-xs font-semibold text-white/60">
                      <div className="text-right">الاسم</div>
                      <div className="text-right">رقم الهاتف</div>
                      <div className="text-right">البريد الإلكتروني</div>
                      <div className="text-right">الباقة المطلوبة</div>
                      <div className="text-right">المصدر</div>
                      <div className="text-right">الحالة</div>
                      <div className="text-right">المسؤول</div>
                      <div className="text-right">التاريخ</div>
                      <div className="text-right">الإجراءات</div>
                    </div>
                    {filteredLeads.map((lead) => (
                      <div
                        key={lead.phone}
                        className="grid grid-cols-[1.1fr_1fr_1.7fr_1.4fr_1fr_0.9fr_0.9fr_1fr_0.6fr] items-center gap-x-6 border-b border-white/10 px-6 py-4 text-sm text-white/80 last:border-b-0"
                      >
                        <div className="font-semibold text-white">
                          {lead.name}
                        </div>
                        <div>{lead.phone}</div>
                        <div className="text-white/70">{lead.email}</div>
                        <div className="text-white/80">
                          {lead.packageName}
                        </div>
                        <div>{lead.source}</div>
                        <div>
                          <span
                            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                              statusStyles[lead.status]
                            }`}
                          >
                            {lead.status}
                          </span>
                        </div>
                        <div>{lead.owner}</div>
                        <div className="text-white/60">{lead.date}</div>
                        <div>
                          <button
                            type="button"
                            onClick={() => {
                              setActiveLead(lead);
                              setDrawerOpen(true);
                            }}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white"
                            aria-label={`تفاصيل ${lead.name}`}
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
                              <circle cx="12" cy="5" r="1.6" />
                              <circle cx="12" cy="12" r="1.6" />
                              <circle cx="12" cy="19" r="1.6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                    {filteredLeads.length === 0 ? (
                      <div className="px-6 py-6 text-sm text-white/60">
                        لا توجد نتائج مطابقة.
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : (
                <div className="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredLeads.map((lead) => (
                    <div
                      key={lead.phone}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_16px_32px_rgba(0,0,0,0.25)]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-sm font-semibold text-white">
                            {lead.name}
                          </div>
                          <div className="mt-1 text-xs text-white/60">
                            {lead.phone}
                          </div>
                        </div>
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                            statusStyles[lead.status]
                          }`}
                        >
                          {lead.status}
                        </span>
                      </div>
                      <div className="mt-4 space-y-2 text-xs text-white/70">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-white/50">البريد الإلكتروني</span>
                          <span>{lead.email}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-white/50">الباقة المطلوبة</span>
                          <span>{lead.packageName}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-white/50">المصدر</span>
                          <span>{lead.source}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-white/50">المسؤول</span>
                          <span>{lead.owner}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-white/50">التاريخ</span>
                          <span>{lead.date}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveLead(lead);
                          setDrawerOpen(true);
                        }}
                        className="mt-4 w-full rounded-xl border border-white/10 bg-[#0f131a] px-4 py-2 text-sm text-white/70 hover:text-white"
                      >
                        عرض التفاصيل
                      </button>
                    </div>
                  ))}
                  {filteredLeads.length === 0 ? (
                    <div className="text-sm text-white/60">
                      لا توجد نتائج مطابقة.
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </section>

          {isAddLeadOpen ? (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4">
              <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0b0f16] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/50">إضافة ليد جديد</p>
                    <h3 className="text-lg font-semibold text-white">
                      إضافة ليد جديد
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={closeAddLead}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white"
                    aria-label="إغلاق"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs text-white/60">الاسم</label>
                    <input
                      value={newLead.name}
                      onChange={(event) =>
                        setNewLead((prev) => ({
                          ...prev,
                          name: event.target.value,
                        }))
                      }
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                      placeholder="مثال: أحمد محمد"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/60">رقم الهاتف</label>
                    <input
                      value={newLead.phone}
                      onChange={(event) =>
                        setNewLead((prev) => ({
                          ...prev,
                          phone: event.target.value,
                        }))
                      }
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                      placeholder="05xxxxxxxx"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/60">
                      البريد الإلكتروني
                    </label>
                    <input
                      value={newLead.email}
                      onChange={(event) =>
                        setNewLead((prev) => ({
                          ...prev,
                          email: event.target.value,
                        }))
                      }
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/60">الباقة</label>
                    <select
                      value={newLead.packageName}
                      onChange={(event) =>
                        setNewLead((prev) => ({
                          ...prev,
                          packageName: event.target.value,
                        }))
                      }
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:outline-none"
                    >
                      {packageOptions.map((option) => (
                        <option key={option} className="bg-[#0f1722]">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-white/60">المصدر</label>
                    <select
                      value={newLead.source}
                      onChange={(event) =>
                        setNewLead((prev) => ({
                          ...prev,
                          source: event.target.value,
                        }))
                      }
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:outline-none"
                    >
                      {sourceOptions.map((option) => (
                        <option key={option} className="bg-[#0f1722]">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-white/60">الحالة</label>
                    <select
                      value={newLead.status}
                      onChange={(event) =>
                        setNewLead((prev) => ({
                          ...prev,
                          status: event.target.value,
                        }))
                      }
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:outline-none"
                    >
                      {statusOptions.map((option) => (
                        <option key={option} className="bg-[#0f1722]">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-white/60">المسؤول</label>
                    <input
                      value={newLead.owner}
                      onChange={(event) =>
                        setNewLead((prev) => ({
                          ...prev,
                          owner: event.target.value,
                        }))
                      }
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30"
                      placeholder="مثال: سارة"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/60">التاريخ</label>
                    <input
                      type="date"
                      value={newLead.date}
                      onChange={(event) =>
                        setNewLead((prev) => ({
                          ...prev,
                          date: event.target.value,
                        }))
                      }
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={closeAddLead}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:text-white"
                  >
                    إلغاء
                  </button>
                  <button
                    type="button"
                    onClick={saveNewLead}
                    className="rounded-xl bg-gradient-to-r from-[#15cfc3] to-[#1ea4d5] px-4 py-2 text-sm font-semibold text-black shadow-[0_12px_24px_rgba(34,211,238,0.25)] transition hover:opacity-90"
                  >
                    حفظ الليد
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </main>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[320px] max-w-[88vw] transform border-r border-white/10 bg-gradient-to-b from-[#10141c] via-[#0f141d] to-[#0b1018] shadow-[20px_0_60px_rgba(0,0,0,0.55)] transition duration-300 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        dir="rtl"
      >
        <div className="flex h-full flex-col px-6 py-6">
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white"
            aria-label="إغلاق التفاصيل"
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

          <div className="text-center">
            <h2 className="text-lg font-semibold text-white">تفاصيل الليد</h2>
            <p className="mt-2 text-sm font-semibold text-white">
              {activeLead?.name ?? "—"}
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
              <span>{activeLead?.phone ?? "—"}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#0b2a2f] text-[#22d3ee]">
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
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.6 19.6 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.6a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6.1 6.1l1.5-1.2a2 2 0 0 1 2.1-.5c.9.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
                </svg>
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
              <span>{activeLead?.email ?? "—"}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#0b2a2f] text-[#22d3ee]">
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
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </span>
            </div>
          </div>

          <div className="mt-5 grid gap-4 text-sm text-white/70">
            <div>
              <div className="mb-2 text-xs text-white/50">الحالة</div>
              {activeLead ? (
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                    statusStyles[activeLead.status]
                  }`}
                >
                  {activeLead.status}
                </span>
              ) : (
                <span className="text-white/60">—</span>
              )}
            </div>

            <div>
              <div className="mb-2 text-xs text-white/50">الباقة المطلوبة</div>
              <div className="text-sm font-semibold text-white">
                {activeLead?.packageName ?? "—"}
              </div>
            </div>

            <div>
              <div className="mb-2 text-xs text-white/50">المسؤول</div>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
              >
                {activeLead?.owner ?? "—"}
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
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-2 text-xs text-white/50">ملاحظات</div>
            <textarea
              className="h-32 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 placeholder:text-white/40 focus:outline-none"
              placeholder="أضف ملاحظات..."
            />
          </div>

          <div className="mt-auto space-y-3 pt-6">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1cc7c1] px-4 py-3 text-sm font-semibold text-[#042226] shadow-[0_10px_25px_rgba(28,199,193,0.35)] transition hover:bg-[#22d3ee]"
            >
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
                <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h8" />
                <path d="M18 2v6" />
                <path d="M21 5h-6" />
              </svg>
              فتح محادثة واتساب
            </button>
            <button
              type="button"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/70 hover:text-white"
            >
              حفظ التغييرات
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

