"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Beaker,
  FlaskRound,
  Atom,
  Rocket,
  Brain,
  Microscope,
  Users,
  Calendar,
} from "lucide-react";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Beaker,
      title: t("workshops"),
      description: t("workshopsDesc"),
      color: "from-yellow-400 to-orange-500",
      delay: 0.1,
    },
    {
      icon: FlaskRound,
      title: t("camps"),
      description: t("campsDesc"),
      color: "from-blue-400 to-cyan-500",
      delay: 0.2,
    },
    {
      icon: Users,
      title: t("parties"),
      description: t("partiesDesc"),
      color: "from-green-400 to-emerald-500",
      delay: 0.3,
    },
    {
      icon: Calendar,
      title: t("corporate"),
      description: t("corporateDesc"),
      color: "from-purple-400 to-pink-500",
      delay: 0.4,
    },
    {
      icon: Microscope,
      title: t("services.schoolProgramsTitle"),
      description: t("services.schoolProgramsDesc"),
      color: "from-red-400 to-rose-500",
      delay: 0.5,
    },
    {
      icon: Brain,
      title: t("services.stemTitle"),
      description: t("services.stemDesc"),
      color: "from-indigo-400 to-violet-500",
      delay: 0.6,
    },
    {
      icon: Atom,
      title: t("services.onlineTitle"),
      description: t("services.onlineDesc"),
      color: "from-teal-400 to-blue-500",
      delay: 0.7,
    },
    {
      icon: Rocket,
      title: t("services.competitionsTitle"),
      description: t("services.competitionsDesc"),
      color: "from-orange-400 to-red-500",
      delay: 0.8,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("servicesTitle")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("services.lead")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700">
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-full h-full text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-nutty-blue transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <button className="flex items-center text-nutty-blue dark:text-nutty-yellow font-semibold group-hover:underline">
                  <span>{t("buttons.learnMore")}</span>
                  <svg
                    className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              value: "98%",
              label: t("services.stats.satisfactionRate"),
              icon: "😊",
            },
            {
              value: "5K+",
              label: t("services.stats.happyStudents"),
              icon: "👨‍🎓",
            },
            {
              value: "200+",
              label: t("services.stats.schoolsPartnered"),
              icon: "🏫",
            },
            {
              value: "24/7",
              label: t("services.stats.supportAvailable"),
              icon: "🕒",
            },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-nutty-blue dark:text-nutty-yellow mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 mb-2">
                {stat.icon}
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-nutty-blue to-purple-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {t("services.cta.title")}
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t("services.cta.desc")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-white text-nutty-blue rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
                {t("bookNow")}
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-colors">
                {t("contact")}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
