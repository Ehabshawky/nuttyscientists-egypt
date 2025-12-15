"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Mail, 
  Linkedin, 
  Twitter, 
  Github,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const Members = () => {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const teamMembers = [
    {
      id: 1,
      name: 'Ahmed Habib',
      position: {
        en: 'Chief Executive Officer',
        ar: 'المدير التنفيذي'
      },
      bio: {
        en: 'Ahmed Habib is recognized as the Board Member and CEO of Edrak, President and CEO of Harvest Holdings, and a founding member of EO Cairo.',
        ar: 'أحمد حبيب معترف به كعضو مجلس إدارة والمدير التنفيذي لشركة إدراك، والرئيس والمدير التنفيذي لشركة Harvest Holdings، وعضو مؤسس في EO Cairo.'
      },
      image: 'ahmed habib.jpg',
      department: 'ceo',
      email: 'ahmed@nuttyscientists.com',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      skills: ['Biology', 'Curriculum Development', 'Public Speaking'],
      education: {
        en: 'PhD Molecular Biology, Harvard University',
        ar: 'دكتوراه في البيولوجيا الجزيئية، جامعة هارفارد'
      },
      featured: true
    },
    {
      id: 2,
      name: 'Akram Farid',
      position: {
        en: 'Chief Executive Officer',
        ar: 'المدير التنفيذي'
      },
      bio: {
        en: 'Akram Farid is the CEO of Nutty Scientists Egypt.',
        ar: 'أكرم فريد هو المدير التنفيذي لشركة Nutty Scientists مصر.'
      },
      image: '/akram farid.jpeg',
      department: 'ceo',
      email: 'akram@nuttyscientists.com',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      skills: ['Leadership', 'Business Strategy', 'Education'],
      education: {
        en: 'MSc Computer Science, MIT',
        ar: 'ماجستير في علوم الحاسوب، معهد ماساتشوستس للتكنولوجيا'
      },
      featured: true
    },
    {
      id: 4,
      name: 'Sherif Bassiouny',
      position: {
        en: 'Chief Marketing Officer',
        ar: 'مدير التسويق'
      },
      bio: {
        en: 'Sherif Bassiouny is the Chief Marketing Officer (CMO) at Edrak.',
        ar: 'شريف بسيوني هو مدير التسويق في شركة إدراك.'
      },
      image: 'sherif bassiouny.jpeg',
      department: 'marketing',
      email: 'sherif@nuttyscientists.com',
      social: {
        linkedin: '#',
        github: '#'
      },
      skills: ['Marketing', 'Digital Strategy', 'Brand Management'],
      education: {
        en: 'MBA Marketing, AUC',
        ar: 'ماجستير في إدارة الأعمال - تخصص تسويق، الجامعة الأمريكية بالقاهرة'
      },
      featured: false
    },
    {
      id: 5,
      name: 'Farah Amin',
      position: {
        en: 'Science Communicator',
        ar: 'متواصل علمي'
      },
      bio: {
        en: 'Makes physics fun and understandable through hands-on experiments and real-world applications.',
        ar: 'تجعل الفيزياء ممتعة ومفهومة من خلال التجارب العملية والتطبيقات الواقعية.'
      },
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
      department: 'operations',
      email: 'farah@nuttyscientists.com',
      social: {
        linkedin: '#',
        twitter: '#'
      },
      skills: ['Physics', 'Astronomy', 'Science Communication'],
      education: {
        en: 'MSc Physics, University of Cambridge',
        ar: 'ماجستير في الفيزياء، جامعة كامبريدج'
      },
      featured: false
    },
    {
      id: 6,
      name: 'John Awad',
      position: {
        en: 'Science Communicator',
        ar: 'متواصل علمي'
      },
      bio: {
        en: 'Organizes workshops and camps, ensuring every child has an unforgettable science experience.',
        ar: 'ينظم ورش العمل والمخيمات، ويضمن حصول كل طفل على تجربة علمية لا تُنسى.'
      },
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      department: 'technology',
      email: 'john@nuttyscientists.com',
      social: {
        linkedin: '#'
      },
      skills: ['Event Planning', 'Logistics', 'Community Outreach'],
      education: {
        en: 'BA Education, University of Toronto',
        ar: 'بكالوريوس في التربية، جامعة تورونتو'
      },
      featured: false
    }
  ];

  const departments = [
    { id: 'all', label: { en: 'All Team', ar: 'الفريق كامل' }, count: teamMembers.length },
    { id: 'ceo', label: { en: 'CEO', ar: 'الإدارة' }, count: 2 },
    { id: 'marketing', label: { en: 'Marketing', ar: 'التسويق' }, count: 1 },
    { id: 'technology', label: { en: 'Technology', ar: 'التكنولوجيا' }, count: 1 },
    { id: 'operations', label: { en: 'Operations', ar: 'العمليات' }, count: 1 }
  ];

  const filteredMembers = activeFilter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === activeFilter);

  // Get current language
  const currentLanguage = (i18n.language || 'en') as 'en' | 'ar';

  return (
    <section id="members" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('teamMembers')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {currentLanguage === 'ar' 
              ? 'علماء ومعلمون ومبتكرون شغوفون مكرسون لإلهام الجيل القادم'
              : 'Passionate scientists, educators, and innovators dedicated to inspiring the next generation'
            }
          </p>
        </motion.div>

        {/* Department Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveFilter(dept.id)}
              className={`px-6 py-3 rounded-full transition-all flex items-center space-x-2 rtl:space-x-reverse ${
                activeFilter === dept.id
                  ? 'bg-nutty-blue text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <span>{dept.label[currentLanguage]}</span>
              <span className="px-2 py-1 text-xs bg-white/20 rounded-full">
                {dept.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Featured Members */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredMembers
            .filter(member => member.featured)
            .map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Member Image */}
                    <div className="flex-shrink-0">
                      <div className="relative w-48 h-48 mx-auto md:mx-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-nutty-blue to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="relative w-full h-full object-cover rounded-2xl shadow-lg"
                        />
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {member.name}
                        </h3>
                        <p className="text-nutty-blue dark:text-nutty-yellow font-semibold">
                          {member.position[currentLanguage]}
                        </p>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {member.bio[currentLanguage]}
                      </p>

                      {/* Education */}
                      <div className="flex items-start mb-4">
                        <GraduationCap className="w-5 h-5 text-gray-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-700 dark:text-gray-300">
                          {member.education[currentLanguage]}
                        </p>
                      </div>

                      {/* Skills */}
                      <div className="mb-6">
                        <div className="flex items-center mb-2">
                          <Award className="w-5 h-5 text-gray-500 mr-2" />
                          <span className="font-semibold text-gray-700 dark:text-gray-300">
                            {currentLanguage === 'ar' ? 'التخصصات:' : 'Expertise:'}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm shadow-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex space-x-4 rtl:space-x-reverse">
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-nutty-blue hover:text-white transition-colors"
                          title="Email"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                            title="LinkedIn"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-sky-500 hover:text-white transition-colors"
                            title="Twitter"
                          >
                            <Twitter className="w-5 h-5" />
                          </a>
                        )}
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
                            title="GitHub"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* All Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredMembers
            .filter(member => !member.featured)
            .map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-nutty-blue/90 text-white rounded-full text-sm">
                        {departments.find(d => d.id === member.department)?.label[currentLanguage] || member.department}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-nutty-blue dark:text-nutty-yellow text-sm font-semibold mb-4">
                      {member.position[currentLanguage]}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {member.bio[currentLanguage]}
                    </p>
                    
                    {/* Skills */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1">
                        {member.skills.slice(0, 3).map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.skills.length > 3 && (
                          <span className="px-2 py-1 text-gray-500 text-xs">
                            +{member.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2 rtl:space-x-reverse">
                        <a
                          href={`mailto:${member.email}`}
                          className="p-1.5 text-gray-500 hover:text-nutty-blue transition-colors"
                          title="Email"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            className="p-1.5 text-gray-500 hover:text-blue-600 transition-colors"
                            title="LinkedIn"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <button className="text-sm text-nutty-blue hover:text-blue-700 transition-colors">
                        {currentLanguage === 'ar' ? 'عرض الملف' : 'View Profile'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-nutty-yellow to-orange-500 rounded-2xl p-8 md:p-12">
            <Briefcase className="w-16 h-16 mx-auto mb-6 text-white" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'ar' ? 'هل تريد الانضمام إلى فريقنا؟' : 'Want to Join Our Team?'}
            </h3>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
              {currentLanguage === 'ar' 
                ? 'نحن نبحث دائمًا عن أفراد شغوفين يريدون إحداث فرق في التعليم العلمي.'
                : "We're always looking for passionate individuals who want to make a difference in science education."
              }
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors transform hover:scale-105">
                {currentLanguage === 'ar' ? 'عرض الوظائف المتاحة' : 'View Open Positions'}
              </button>
              <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-900/10 transition-colors">
                {currentLanguage === 'ar' ? 'تقديم السيرة الذاتية' : 'Submit Your CV'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Members;