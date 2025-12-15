"use client";

import { useState, useEffect } from "react";
import {
  Home,
  Settings,
  Users,
  FileText,
  MessageSquare,
  Globe,
  Save,
} from "lucide-react";

export default function AdminPage() {
  // translation is not currently used in admin UI
  const [activeTab, setActiveTab] = useState("hero");
  const [loading, setLoading] = useState(false);
  const [heroContent, setHeroContent] = useState({
    title_en: "",
    title_ar: "",
    subtitle_en: "",
    subtitle_ar: "",
    description_en: "",
    description_ar: "",
  });
  const [footerContent, setFooterContent] = useState({
    rights_en: "",
    rights_ar: "",
    contact_en: "",
    contact_ar: "",
  });

  const tabs = [
    { id: "hero", label: "Hero Section", icon: Home },
    { id: "services", label: "Services", icon: Settings },
    { id: "team", label: "Team Members", icon: Users },
    { id: "articles", label: "Articles", icon: FileText },
    { id: "testimonials", label: "Testimonials", icon: MessageSquare },
    { id: "blogs", label: "Blogs", icon: FileText },
    { id: "footer", label: "Footer", icon: Globe },
  ];

  // Note: API calls will be handled differently in Next.js
  // You'll need to create API routes in app/api/

  const handleSave = async () => {
    try {
      setLoading(true);
      const dataToSave = activeTab === "footer" ? footerContent : heroContent;
      const payload = { section: activeTab, data: dataToSave };
      const res = await fetch("/api/site-content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to save content");
      alert("Content saved successfully!");
    } catch (error) {
      console.error("Error saving content:", error);
      alert("Error saving content");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load existing site content
    async function load() {
      try {
        const res = await fetch("/api/site-content");
        if (!res.ok) return;
        const all = await res.json();
        if (all?.hero) setHeroContent(all.hero);
        if (all?.footer) setFooterContent(all.footer);
      } catch (e) {
        console.error("Failed to load site content", e);
      }
    }
    load();
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case "hero":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Title (English)
                </label>
                <input
                  type="text"
                  value={heroContent.title_en}
                  placeholder="Enter English title"
                  onChange={(e) =>
                    setHeroContent({ ...heroContent, title_en: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-nutty-blue focus:border-nutty-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  العنوان (عربي)
                </label>
                <input
                  type="text"
                  dir="rtl"
                  value={heroContent.title_ar}
                  placeholder="أدخل العنوان بالعربية"
                  onChange={(e) =>
                    setHeroContent({ ...heroContent, title_ar: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-nutty-blue focus:border-nutty-blue"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleSave}
                disabled={loading}
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 flex items-center space-x-2"
              >
                <Save size={20} />
                <span>{loading ? "Saving..." : "Save Changes"}</span>
              </button>
            </div>
          </div>
        );
      case "footer":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Footer rights (English)
                </label>
                <input
                  type="text"
                  value={footerContent.rights_en}
                  placeholder="All rights reserved"
                  onChange={(e) =>
                    setFooterContent({
                      ...footerContent,
                      rights_en: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-nutty-blue focus:border-nutty-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  الحقوق (عربي)
                </label>
                <input
                  type="text"
                  dir="rtl"
                  value={footerContent.rights_ar}
                  placeholder="جميع الحقوق محفوظة"
                  onChange={(e) =>
                    setFooterContent({
                      ...footerContent,
                      rights_ar: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-nutty-blue focus:border-nutty-blue"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contact label (English)
                </label>
                <input
                  type="text"
                  value={footerContent.contact_en}
                  placeholder="Contact Information"
                  onChange={(e) =>
                    setFooterContent({
                      ...footerContent,
                      contact_en: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-nutty-blue focus:border-nutty-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  معلومات الاتصال (عربي)
                </label>
                <input
                  type="text"
                  dir="rtl"
                  value={footerContent.contact_ar}
                  placeholder="معلومات الاتصال"
                  onChange={(e) =>
                    setFooterContent({
                      ...footerContent,
                      contact_ar: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-nutty-blue focus:border-nutty-blue"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleSave}
                disabled={loading}
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 flex items-center space-x-2"
              >
                <Save size={20} />
                <span>{loading ? "Saving..." : "Save Changes"}</span>
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400">
              Select a section to edit
            </h3>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Admin Dashboard
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Sidebar */}
            <div className="md:w-64 border-r border-gray-200 dark:border-gray-700">
              <nav className="space-y-1 p-4">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                        activeTab === tab.id
                          ? "bg-nutty-blue text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      <Icon size={20} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
