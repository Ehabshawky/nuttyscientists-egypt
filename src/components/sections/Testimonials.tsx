"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Star, 
  Quote, 
  Award,
  Users,
  School,
  Building
} from 'lucide-react';

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

  const testimonials = [
    {
      id: 1,
      name: i18n.language === 'ar' ? 'فاطمة الرشيد' : 'Fatima Al-Rashid',
      role: i18n.language === 'ar' ? 'ولي أمر' : 'Parent',
      organization: i18n.language === 'ar' ? 'مدرسة الشروق الدولية' : 'Sunrise International School',
      content: i18n.language === 'ar' ? 'لم يكن أطفالي مهتمين بالعلوم حتى حضروا ورشة عمل ناتي ساينتستس. الآن يقومون بإجراء تجارب في المنزل في نهاية كل أسبوع! التحول كان مذهلاً.' : 'My children were never interested in science until they attended a Nutty Scientists workshop. Now they conduct experiments at home every weekend! The transformation has been incredible.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786',
      category: 'parents',
      featured: true
    },
    {
      id: 2,
      name: i18n.language === 'ar' ? 'د. جيمس ويلسون' : 'Dr. James Wilson',
      role: i18n.language === 'ar' ? 'مدير مدرسة' : 'Principal',
      organization: i18n.language === 'ar' ? 'مدرسة جرينوود الثانوية' : 'Greenwood High School',
      content: i18n.language === 'ar' ? 'نحن شركاء مع ناتي ساينتستس منذ ثلاث سنوات. ساهمت برامجهم بشكل كبير في تحسين درجات الطلاب في العلوم وأثارت اهتماماً حقيقياً بمسارات STEM.' : 'We\'ve been partnering with Nutty Scientists for three years. Their programs have significantly improved our students\' science scores and sparked genuine interest in STEM careers.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      category: 'schools',
      featured: true
    },
    {
      id: 3,
      name: i18n.language === 'ar' ? 'سارة تشين' : 'Sarah Chen',
      role: i18n.language === 'ar' ? 'الرئيس التنفيذي' : 'CEO',
      organization: i18n.language === 'ar' ? 'تيك إنوفيت' : 'TechInnovate Inc.',
      content: i18n.language === 'ar' ? 'كانت فعالية بناء الفريق مع ناتي ساينتستس رائعة! كانت التحديات العلمية ممتعة، تعليمية، وقربت فريقنا من بعضه البعض.' : 'Our company team-building event with Nutty Scientists was outstanding! The science-based challenges were engaging, educational, and brought our team closer together.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      category: 'corporate',
      featured: true
    },
    {
      id: 4,
      name: i18n.language === 'ar' ? 'محمد حسن' : 'Mohammed Hassan',
      role: i18n.language === 'ar' ? 'طالب' : 'Student',
      organization: i18n.language === 'ar' ? 'الصف الثامن، أكاديمية النور' : 'Grade 8, Al-Noor Academy',
      content: i18n.language === 'ar' ? 'ورشة الروبوتات غيرت كل شيء بالنسبة لي. اكتشفت شغفي بالهندسة والآن أريد دراسة الروبوتات في الجامعة. شكراً ناتي ساينتستس!' : 'The robotics workshop changed everything for me. I discovered my passion for engineering and now I want to study robotics in university. Thank you Nutty Scientists!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      category: 'students',
      featured: false
    },
    {
      id: 5,
      name: i18n.language === 'ar' ? 'ليسا رودريغيز' : 'Lisa Rodriguez',
      role: i18n.language === 'ar' ? 'معلمة علوم' : 'Science Teacher',
      organization: i18n.language === 'ar' ? 'مدرسة سنترال الابتدائية' : 'Central Elementary School',
      content: i18n.language === 'ar' ? 'ورش العمل للتطوير المهني غيرت أساليب تدريسي. تعلمت كيفية جعل المفاهيم المعقدة سهلة ومثيرة للمتعلمين الصغار.' : 'The professional development workshops have transformed my teaching methods. I\'ve learned how to make complex concepts accessible and exciting for young learners.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e',
      category: 'teachers',
      featured: false
    },
    {
      id: 6,
      name: i18n.language === 'ar' ? 'ديفيد ميلر' : 'David Miller',
      role: i18n.language === 'ar' ? 'منسق فعاليات' : 'Event Coordinator',
      organization: i18n.language === 'ar' ? 'مركز شباب المدينة' : 'City Youth Center',
      content: i18n.language === 'ar' ? 'استضفنا العديد من المعسكرات العلمية مع ناتي ساينتستس. كل منها تم تنفيذه باحترافية مع اهتمام استثنائي بالسلامة والقيمة التعليمية.' : 'We\'ve hosted multiple science camps with Nutty Scientists. Each one has been professionally executed with exceptional attention to safety and educational value.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
      category: 'organizations',
      featured: false
    },
    {
      id: 7,
      name: i18n.language === 'ar' ? 'عائشة خان' : 'Aisha Khan',
      role: i18n.language === 'ar' ? 'ولي أمر' : 'Parent',
      organization: i18n.language === 'ar' ? 'عضو مجتمع' : 'Community Member',
      content: i18n.language === 'ar' ? 'ابنتي حضرت المعسكر العلمي الصيفي ولم تتوقف عن الحديث عنه. انتقلت من كونها خجولة تجاه العلوم إلى قيادة المناقشات في الفصل.' : 'My daughter attended the summer science camp and hasn\'t stopped talking about it. She went from being shy about science to leading classroom discussions.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
      category: 'parents',
      featured: false
    },
    {
      id: 8,
      name: i18n.language === 'ar' ? 'روبرت كيم' : 'Robert Kim',
      role: i18n.language === 'ar' ? 'مدير الموارد البشرية' : 'HR Director',
      organization: i18n.language === 'ar' ? 'جلوبال سوليوشنز' : 'Global Solutions Corp',
      content: i18n.language === 'ar' ? 'ورشة العمل العلمية للشركات كانت مبتكرة وفعالة لبناء الفريق. موظفونا لا يزالون يناقشون التجارب بعد أسابيع.' : 'The corporate science workshop was innovative and effective for team building. Our employees are still discussing the experiments weeks later.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef',
      category: 'corporate',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: t('testimonialsSection.categories.all'), icon: Users, count: testimonials.length },
    { id: 'parents', label: t('testimonialsSection.categories.parents'), icon: Users, count: 2 },
    { id: 'students', label: t('testimonialsSection.categories.students'), icon: School, count: 1 },
    { id: 'teachers', label: t('testimonialsSection.categories.teachers'), icon: Award, count: 1 },
    { id: 'schools', label: t('testimonialsSection.categories.schools'), icon: Building, count: 1 },
    { id: 'corporate', label: t('testimonialsSection.categories.corporate'), icon: Building, count: 2 },
    { id: 'organizations', label: t('testimonialsSection.categories.organizations'), icon: Users, count: 1 }
  ];

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeCategory);

  const featuredTestimonials = testimonials.filter(t => t.featured);

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("testimonialsSection.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("testimonialsSection.lead")}
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-nutty-blue text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                <span>{category.label}</span>
                <span className="ml-2 rtl:mr-2 rtl:ml-0 text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Featured Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-nutty-blue/30 mb-6" />
                
                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-8">
                  "{testimonial.content}"
                </p>
                
                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 rtl:mr-0 rtl:ml-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonial.role} • {testimonial.organization}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {filteredTestimonials
            .filter(t => !t.featured)
            .map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Content */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-4">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover mr-3 rtl:mr-0 rtl:ml-3"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        {testimonial.role} • {testimonial.organization}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-nutty-blue to-purple-600 rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4.9/5', label: t("testimonialsSection.averageRating") },
              { value: '500+', label: t("testimonialsSection.schoolsServed") },
              { value: '10K+', label: t("testimonialsSection.happyStudents") },
              { value: '98%', label: t("testimonialsSection.wouldRecommend") },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-nutty-yellow to-orange-500 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t("testimonialsSection.cta.title")}
            </h3>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
              {t("testimonialsSection.cta.desc")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors transform hover:scale-105">
                {t("testimonialsSection.cta.bookBtn")}
              </button>
              <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-900/10 transition-colors">
                {t("testimonialsSection.cta.contactBtn")}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;