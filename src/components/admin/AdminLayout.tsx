import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  FileText,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  User,
  Globe,
  ImageIcon,
  Target,
  Briefcase,
  Mail,
  HelpCircle,
  Handshake
} from "lucide-react";

import { AdminLayoutSkeleton } from "../skeletons/AdminLayoutSkeleton";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const { i18n } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [logoUrl, setLogoUrl] = useState("/Nutt Logo.png");
  const isRTL = i18n.language === "ar";

  // Check auth on mount
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }

    async function fetchSettings() {
      try {
        const res = await fetch("/api/site-content?t=" + Date.now());
        if (res.ok) {
          const data = await res.json();
          if (data.settings?.logo_url) {
            setLogoUrl(data.settings.logo_url);
          }
        }
      } catch (e) {
        console.error("Error fetching settings:", e);
      }
    }
    fetchSettings();
  }, [status, router]);

  // Handle Mobile Initial State
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    
    // Set initial state
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/auth/login" });
  };

  if (status === "loading") {
    return <AdminLayoutSkeleton />;
  }

  if (!session) return null;

  const username = session?.user?.name || "Admin";

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", labelAr: "لوحة التحكم", href: "/admin" },
    { icon: FileText, label: "Content", labelAr: "المحتوى", href: "/admin/content" },
    { icon: ImageIcon, label: "Hero Slides", labelAr: "شرائح ", href: "/admin/hero" },
    { icon: FileText, label: "Programs", labelAr: "برامج", href: "/admin/services" },  
    { icon: FileText, label: "About", labelAr: "عننا", href: "/admin/about" },
    { icon: Target, label: "CSR", labelAr: "المسؤولية المجتمعية", href: "/admin/csr" },
    // { icon: Target, label: "Projects", labelAr: "المشاريع", href: "/admin/projects" },
    { icon: Users, label: "Team", labelAr: "الفريق", href: "/admin/team" },
    { icon: Briefcase, label: "Careers", labelAr: "الوظائف", href: "/admin/careers" },
    // { icon: FileText, label: "Articles", labelAr: "المقالات", href: "/admin/articles" },
    { icon: FileText, label: "Comments", labelAr: "التعليقات", href: "/admin/comments" },
    { icon: Mail, label: "Subscribers", labelAr: "المشتركين", href: "/admin/subscribers" },
    { icon: HelpCircle, label: "FAQ", labelAr: "الأسئلة الشائعة", href: "/admin/faq" },
    { icon: Handshake, label: "Partners", labelAr: "الشركاء", href: "/admin/partners" },
    { icon: MessageSquare, label: "Testimonials", labelAr: "الشهادات", href: "/admin/testimonials" },
    { icon: FileText, label: "Blogs", labelAr: "المدونة", href: "/admin/blogs" },
    { icon: FileText, label: "Chatbot", labelAr: "المحادثة", href: "/admin/chatbot" },
    { icon: FileText, label: "Messages", labelAr: "الرسائل", href: "/admin/messages" },
    { icon: Users, label: "Admins", labelAr: "المسؤولون", href: "/admin/users" },
    { icon: Settings, label: "Settings", labelAr: "الإعدادات", href: "/admin/settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900" dir={isRTL ? "rtl" : "ltr"} suppressHydrationWarning>
      
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 ${isRTL ? 'right-0' : 'left-0'} z-50 bg-white dark:bg-gray-800 border-${isRTL ? 'l' : 'r'} border-gray-200 dark:border-gray-700 shadow-xl transition-all duration-300 transform flex flex-col h-full 
          ${sidebarOpen ? "translate-x-0" : (isRTL ? "translate-x-full" : "-translate-x-full")}
          md:translate-x-0 
          ${sidebarOpen ? "md:w-64 w-64" : "md:w-20 w-0"}
        `}
      >
        {/* Logo/Header */}
        <div className="h-16 flex-shrink-0 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className={`flex items-center gap-2 ${!sidebarOpen && "md:justify-center w-full"}`}>
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src={logoUrl}
                alt="Logo"
                fill
                sizes="32px"
                className="object-contain"
              />
            </div>
            <span className={`text-lg font-bold text-gray-900 dark:text-white transition-opacity duration-200 ${sidebarOpen ? "opacity-100" : "opacity-0 hidden md:block md:w-0 md:overflow-hidden"}`}>
              {isRTL ? "لوحة التحكم" : "Admin Panel"}
            </span>
            
            {/* Mobile Close Button */}
            <button
               onClick={() => setSidebarOpen(false)}
               className="md:hidden ml-auto p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-3 flex-1 min-h-0 overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-800 scrollbar-thin flex-grow">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              const label = isRTL ? item.labelAr : item.label;
              
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group relative overflow-hidden ${
                      isActive
                        ? "bg-gradient-to-r from-nutty-orange/10 to-nutty-orange/5 text-nutty-orange font-bold border border-nutty-orange/20"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                    }`}
                    title={!sidebarOpen ? label : ""}
                  >
                    <Icon className={`w-5 h-5 flex-shrink-0 transition-colors ${isActive ? "text-nutty-orange" : "group-hover:text-nutty-orange"}`} />
                    
                    <span className={`whitespace-nowrap transition-all duration-300 ${sidebarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 md:hidden"}`}>
                      {label}
                    </span>

                    {/* Active Indicator Strip */}
                    {isActive && (
                      <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 w-1 h-8 bg-nutty-orange rounded-full`} />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer / User / Logout */}
        <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4 flex-shrink-0">
          <div className={`flex items-center gap-3 mb-4 ${!sidebarOpen && "md:justify-center"}`}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nutty-orange to-nutty-lime shadow-sm flex items-center justify-center flex-shrink-0 text-white font-bold text-xs ring-2 ring-white dark:ring-gray-700">
               {username.charAt(0).toUpperCase()}
            </div>
            
            <div className={`flex-1 min-w-0 transition-all duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 w-0 hidden"}`}>
              <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{username}</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">{isRTL ? "مدير" : "Admin"}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors ${!sidebarOpen && "md:justify-center"}`}
            title="Logout"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <span className={`transition-all duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 w-0 hidden"}`}>
              {isRTL ? "خروج" : "Logout"}
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div 
        className={`transition-all duration-300 min-h-screen flex flex-col 
          ${isRTL 
            ? (sidebarOpen ? "md:mr-64 mr-0" : "md:mr-20 mr-0") 
            : (sidebarOpen ? "md:ml-64 ml-0" : "md:ml-20 ml-0")
          }`}
      >
        {/* Top Header */}
        <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 md:px-8 flex items-center justify-between sticky top-0 z-30 shadow-sm backdrop-blur-md bg-white/80 dark:bg-gray-800/80">
          <div className="flex items-center gap-4">
            {/* Toggle Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <h2 className="text-lg font-bold text-gray-900 dark:text-white hidden sm:block">
              {isRTL 
                ? (menuItems.find(item => item.href === pathname)?.labelAr || "لوحة التحكم")
                : (menuItems.find(item => item.href === pathname)?.label || "Dashboard")}
            </h2>
          </div>

          <div className="flex items-center gap-3">
             <Link
              href="/"
              target="_blank"
              className="px-4 py-2 text-xs md:text-sm font-medium bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{isRTL ? "الموقع" : "View Site"}</span>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
