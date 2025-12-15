"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  ExternalLink, 
  Github, 
  Filter,
  Calendar,
  Users,
  Target
} from 'lucide-react';
import i18n from '@/utils/i18n';

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'V-Science Lab',
      category: 'education',
      description: {
        en: 'V-Science Lab is more than just a learning space — it is a full scientific adventure that brings education to life. Whether for school visits, camps, or special workshops, our lab provides a unique environment where every child can become a young scientist.',
        ar: 'مختبر V-Science ليس مجرد مساحة تعليمية - إنه مغامرة علمية كاملة تحيي التعليم. سواء للزيارات المدرسية أو المخيمات أو ورش العمل الخاصة، يوفر مختبرنا بيئة فريدة حيث يمكن لكل طفل أن يصبح عالماً صغيراً.'
      },
      image: 'About.jpg',
      technologies: [
        'STEM Tools','IoT Kits','3D Printing','Robotics','Microcontrollers'],
      date: '2023',
      team: 8,
      link: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Reality Chemistry Lab',
      category: 'technology',
      description: {
        en: 'Reality Chemistry Lab uses AR, VR, and interactive simulations to make chemistry easier to understand. Students can explore molecules in 3D, run virtual experiments, and learn safely through an engaging and modern scientific experience.',
        ar: 'يستخدم مختبر Reality Chemistry الواقع المعزز والافتراضي والمحاكاة التفاعلية لجعل الكيمياء أسهل للفهم. يمكن للطلاب استكشاف الجزيئات ثلاثية الأبعاد، وإجراء تجارب افتراضية، والتعلم بأمان من خلال تجربة علمية جذابة وحديثة.'
      },
      image: '30.jpg',
      technologies: ['AR/VR','3D Molecule Models','Chemical Simulations'],
      date: '2022',
      team: 12,
      link: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Young Inventors Program',
      category: 'education',
      description: {
        en: 'Year-long program nurturing young inventors and innovators through hands-on projects and mentorship.',
        ar: 'برنامج على مدار العام لتنمية المخترعين والمبتكرين الشباب من خلال المشاريع العملية والإرشاد.'
      },
      image: 'science-events.jpg',
      technologies: ['Curriculum', 'Mentorship', 'Prototyping'],
      date: '2023',
      team: 15,
      link: '#',
      github: null,
      featured: false
    },
    {
      id: 4,
      title: 'Environmental Science Kit',
      category: 'product',
      description: {
        en: 'DIY kit for studying local ecosystems and biodiversity. Includes tools for environmental monitoring and conservation.',
        ar: 'مجموعة DIY لدراسة النظم البيئية المحلية والتنوع البيولوجي. تتضمن أدوات لمراقبة البيئة والحفاظ عليها.'
      },
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
      technologies: ['Biology', 'Ecology', 'DIY'],
      date: '2022',
      team: 6,
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Science Podcast Network',
      category: 'media',
      description: {
        en: 'Weekly podcasts covering various scientific topics for young audiences. Features interviews with scientists and educators.',
        ar: 'بودكاست أسبوعي يغطي مواضيع علمية متنوعة للشباب. يتضمن مقابلات مع العلماء والمربين.'
      },
      image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0',
      technologies: ['Audio', 'Content', 'Education'],
      date: '2023',
      team: 10,
      link: '#',
      featured: false
    },
    {
      id: 6,
      title: 'AI Science Tutoring',
      category: 'personalized',
      description: {
        en: 'High-quality one-to-one and small-group science tutoring designed to strengthen understanding, improve grades, and build real scientific skills.',
        ar: 'تدريس علوم عالي الجودة فردي أو لمجموعات صغيرة مصمم لتعزيز الفهم، وتحسين الدرجات، وبناء مهارات علمية حقيقية.'
      },
      image: 'hero2.webp',
      technologies: ['Support', 'Learning', 'Science'],
      date: '2023',
      team: 20,
      link: '#',
      featured: true,
    },
    {
      id: 7,
      title: 'AI Learning Assistant',
      category: 'technology',
      description: {
        en: 'AI-powered learning assistant for personalized science education. Uses machine learning to adapt to each student\'s learning style.',
        ar: 'مساعد تعلم مدعوم بالذكاء الاصطناعي للتعليم العلمي المخصص. يستخدم التعلم الآلي للتكيف مع أسلوب تعلم كل طالب.'
      },
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      technologies: ['AI', 'ML', 'Education Tech'],
      date: '2023',
      team: 20,
      link: '#',
      github: '#',
      featured: true
    }
  ];

  // Get all unique categories from projects
  const projectCategories = ['all', ...new Set(projects.map(project => project.category))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Get translation for category
  const getCategoryTranslation = (category: string) => {
    if (category === 'all') return t('projects.categories.all');
    return t(`projects.categories.${category}`);
  };

  // Get current language
  const currentLanguage = (i18n.language || 'en') as 'en' | 'ar';

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('projects.lead')}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full transition-all ${
                filter === category
                  ? 'bg-nutty-blue text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category === 'all' && <Filter className="w-4 h-4 inline mr-2" />}
              {getCategoryTranslation(category)}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <AnimatePresence>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredProjects
              .filter(project => project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-nutty-yellow text-gray-900 rounded-full text-sm font-semibold">
                          {t('projects.featured')}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                          {getCategoryTranslation(project.category)}
                        </span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {project.description[currentLanguage] || project.description.en}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project Meta */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-2" />
                            {project.date}
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Users className="w-4 h-4 mr-2" />
                            {project.team} {t('projects.meta.members')}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-4 rtl:space-x-reverse">
                        <a
                          href={project.link}
                          className="flex-1 flex items-center justify-center px-4 py-2 bg-nutty-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t('projects.action.viewProject')}
                        </a>
                        {project.github && (
                          <a
                            href={project.github}
                            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </AnimatePresence>

        {/* All Projects Grid */}
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects
              .filter(project => !project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-nutty-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.description[currentLanguage] || project.description.en}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                          {getCategoryTranslation(project.category)}
                        </span>
                        <a
                          href={project.link}
                          className="text-nutty-blue hover:text-blue-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </AnimatePresence>

        {/* Show message when no projects found */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {currentLanguage === 'ar' ? 'لم يتم العثور على مشاريع في هذا القسم.' : 'No projects found in this category.'}
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-nutty-yellow to-orange-500 rounded-2xl p-8 md:p-12">
            <Target className="w-16 h-16 mx-auto mb-6 text-white" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('projects.cta.title')}
            </h3>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
              {t('projects.cta.desc')}
            </p>
            <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors transform hover:scale-105">
              {t('projects.cta.button')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;