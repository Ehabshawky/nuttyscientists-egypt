'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Calendar, 
  User, 
  Tag, 
  Clock,
  Eye,
  MessageCircle,
  Search,
  TrendingUp,
  BookOpen
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const Blogs = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

  const blogPosts = [
    {
      id: 1,
      title: i18n.language === 'ar' ? 'كيفية إنشاء مختبر علوم منزلي للأطفال' : 'How to Create a Home Science Lab for Kids',
      excerpt: i18n.language === 'ar' ? 'دليل كامل لإنشاء مختبر علوم آمن ومثير في المنزل باستخدام مواد يومية.' : 'A complete guide to setting up a safe and exciting science lab at home with everyday materials.',
      author: i18n.language === 'ar' ? 'د. ماريا رودريغيز' : 'Dr. Maria Rodriguez',
      date: i18n.language === 'ar' ? '١٠ أبريل ٢٠٢٤' : 'Apr 10, 2024',
      readTime: i18n.language === 'ar' ? '١٠ دقائق للقراءة' : '10 min read',
      category: 'parenting',
      tags: i18n.language === 'ar' ? ['اصنعها بنفسك', 'السلامة', 'تجارب'] : ['DIY', 'Safety', 'Experiments'],
      views: 3120,
      comments: 45,
      likes: 189,
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69',
      featured: true
    },
    {
      id: 2,
      title: i18n.language === 'ar' ? 'علم الأعصاب وراء الفضول لدى الأطفال' : 'The Neuroscience Behind Curiosity in Children',
      excerpt: i18n.language === 'ar' ? 'فهم كيفية تطور الفضول في الدماغ وطرق عملية لتنميته.' : 'Understanding how the brain develops curiosity and practical ways to nurture it.',
      author: i18n.language === 'ar' ? 'د. سارة جونسون' : 'Dr. Sarah Johnson',
      date: i18n.language === 'ar' ? '٥ أبريل ٢٠٢٤' : 'Apr 5, 2024',
      readTime: i18n.language === 'ar' ? '١٢ دقيقة للقراءة' : '12 min read',
      category: 'neuroscience',
      tags: i18n.language === 'ar' ? ['علم الدماغ', 'التطوير', 'التعلم'] : ['Brain Science', 'Development', 'Learning'],
      views: 2870,
      comments: 32,
      likes: 156,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      featured: true
    },
    {
      id: 3,
      title: i18n.language === 'ar' ? 'العلوم المستدامة: تجارب صديقة للبيئة' : 'Sustainable Science: Eco-Friendly Experiments',
      excerpt: i18n.language === 'ar' ? 'أنشطة علمية واعية بيئيًا تعلم مبادئ الاستدامة.' : 'Environmentally conscious science activities that teach sustainability principles.',
      author: i18n.language === 'ar' ? 'د. فاطمة المنصوري' : 'Dr. Fatima Al-Mansoori',
      date: i18n.language === 'ar' ? '٢٨ مارس ٢٠٢٤' : 'Mar 28, 2024',
      readTime: i18n.language === 'ar' ? '٨ دقائق للقراءة' : '8 min read',
      category: 'sustainability',
      tags: i18n.language === 'ar' ? ['صديقة للبيئة', 'إعادة التدوير', 'الطبيعة'] : ['Eco-Friendly', 'Recycling', 'Nature'],
      views: 2450,
      comments: 28,
      likes: 132,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
      featured: false
    },
    {
      id: 4,
      title: i18n.language === 'ar' ? 'البرمجة للأطفال: من أين تبدأ' : 'Coding for Kids: Where to Start with Programming',
      excerpt: i18n.language === 'ar' ? 'مفاهيم البرمجة المناسبة للعمر والأدوات لتقديم البرمجة للأطفال.' : 'Age-appropriate programming concepts and tools to introduce coding to children.',
      author: i18n.language === 'ar' ? 'أحمد حسن' : 'Ahmed Hassan',
      date: i18n.language === 'ar' ? '٢٢ مارس ٢٠٢٤' : 'Mar 22, 2024',
      readTime: i18n.language === 'ar' ? '١٥ دقيقة للقراءة' : '15 min read',
      category: 'technology',
      tags: i18n.language === 'ar' ? ['برمجة', 'coding', 'STEM'] : ['Coding', 'Programming', 'STEM'],
      views: 3210,
      comments: 52,
      likes: 210,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
      featured: false
    },
    {
      id: 5,
      title: i18n.language === 'ar' ? 'سحر كيمياء المطبخ' : 'The Magic of Kitchen Chemistry',
      excerpt: i18n.language === 'ar' ? 'تفاعلات كيميائية مذهلة يمكنك إنشاؤها بمكونات من مطبخك.' : 'Amazing chemical reactions you can create with ingredients from your kitchen.',
      author: i18n.language === 'ar' ? 'د. ماريا رودريغيز' : 'Dr. Maria Rodriguez',
      date: i18n.language === 'ar' ? '١٥ مارس ٢٠٢٤' : 'Mar 15, 2024',
      readTime: i18n.language === 'ar' ? '٧ دقائق للقراءة' : '7 min read',
      category: 'chemistry',
      tags: i18n.language === 'ar' ? ['علوم المطبخ', 'تفاعلات', 'طعام'] : ['Kitchen Science', 'Reactions', 'Food'],
      views: 1980,
      comments: 24,
      likes: 98,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
      featured: false
    },
    {
      id: 6,
      title: i18n.language === 'ar' ? 'بناء المرونة من خلال الفشل العلمي' : 'Building Resilience Through Science Failures',
      excerpt: i18n.language === 'ar' ? 'كيف تعلم التجارب الفاشلة الأطفال المثابرة ومهارات حل المشكلات.' : 'How failed experiments teach children perseverance and problem-solving skills.',
      author: i18n.language === 'ar' ? 'د. سارة جونسون' : 'Dr. Sarah Johnson',
      date: i18n.language === 'ar' ? '٨ مارس ٢٠٢٤' : 'Mar 8, 2024',
      readTime: i18n.language === 'ar' ? '٩ دقائق للقراءة' : '9 min read',
      category: 'psychology',
      tags: i18n.language === 'ar' ? ['المرونة', 'عقلية النمو', 'التعلم'] : ['Resilience', 'Growth Mindset', 'Learning'],
      views: 1760,
      comments: 19,
      likes: 87,
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
      featured: false
    },
    {
      id: 7,
      title: i18n.language === 'ar' ? 'علم الفلك للمبتدئين: دليل مراقبة النجوم' : 'Astronomy for Beginners: Stargazing Guide',
      excerpt: i18n.language === 'ar' ? 'كيف تبدأ استكشاف سماء الليل مع الأطفال، لا حاجة لتلسكوب.' : 'How to start exploring the night sky with children, no telescope required.',
      author: i18n.language === 'ar' ? 'د. فاطمة المنصوري' : 'Dr. Fatima Al-Mansoori',
      date: i18n.language === 'ar' ? '١ مارس ٢٠٢٤' : 'Mar 1, 2024',
      readTime: i18n.language === 'ar' ? '١١ دقيقة للقراءة' : '11 min read',
      category: 'astronomy',
      tags: i18n.language === 'ar' ? ['نجوم', 'كواكب', 'مراقبة'] : ['Stars', 'Planets', 'Observation'],
      views: 2230,
      comments: 31,
      likes: 145,
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06',
      featured: false
    },
    {
      id: 8,
      title: i18n.language === 'ar' ? 'مستقبل تكنولوجيا التعليم: اتجاهات تستحق المراقبة' : 'The Future of EdTech: Trends to Watch',
      excerpt: i18n.language === 'ar' ? 'تقنيات ناشئة تشكل مستقبل التعليم.' : 'Emerging technologies that are shaping the future of education.',
      author: i18n.language === 'ar' ? 'أحمد حسن' : 'Ahmed Hassan',
      date: i18n.language === 'ar' ? '٢٤ فبراير ٢٠٢٤' : 'Feb 24, 2024',
      readTime: i18n.language === 'ar' ? '١٤ دقيقة للقراءة' : '14 min read',
      category: 'technology',
      tags: i18n.language === 'ar' ? ['تكنولوجيا التعليم', 'ابتكار', 'مستقبل'] : ['EdTech', 'Innovation', 'Future'],
      views: 2890,
      comments: 47,
      likes: 178,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: t('blogsSection.categories.all'), count: blogPosts.length },
    { id: 'parenting', label: t('blogsSection.categories.parenting'), count: 1 },
    { id: 'neuroscience', label: t('blogsSection.categories.neuroscience'), count: 1 },
    { id: 'sustainability', label: t('blogsSection.categories.sustainability'), count: 1 },
    { id: 'technology', label: t('blogsSection.categories.technology'), count: 2 },
    { id: 'chemistry', label: t('blogsSection.categories.chemistry'), count: 1 },
    { id: 'psychology', label: t('blogsSection.categories.psychology'), count: 1 },
    { id: 'astronomy', label: t('blogsSection.categories.astronomy'), count: 1 }
  ];

  const popularTags = i18n.language === 'ar' 
    ? ['STEM', 'تجارب', 'اصنعها بنفسك', 'تعلم', 'تعليم', 'علوم ممتعة', 'أنشطة أطفال', 'ابتكار', 'تكنولوجيا', 'اكتشاف']
    : ['STEM', 'Experiments', 'DIY', 'Learning', 'Education', 'Science Fun', 'Kids Activities', 'Innovation', 'Technology', 'Discovery'];

  const filteredBlogs = blogPosts.filter(blog => {
    const matchesCategory = activeCategory === 'all' || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredBlogs = blogPosts.filter(blog => blog.featured);
  const recentPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  return (
    <section id="blogs" className="py-20 bg-gray-50 dark:bg-gray-900" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("blogsSection.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("blogsSection.lead")}
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t("blogsSection.searchPlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 rtl:pr-12 rtl:pl-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full focus:ring-2 focus:ring-nutty-blue focus:border-transparent"
              />
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-nutty-blue text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <span>{category.label}</span>
                <span className="ml-2 rtl:mr-2 rtl:ml-0 text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Popular Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {popularTags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setSearchTerm(tag)}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-nutty-blue hover:text-white transition-colors"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Featured Blogs */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => router.push(`/blog/${blog.id}`)}
              className="group cursor-pointer"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                    <span className="px-3 py-1 bg-nutty-yellow text-gray-900 rounded-full text-sm font-semibold">
                      {t("articlesSection.featured")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm capitalize">
                      {t(`blogsSection.categories.${blog.category}`)}
                    </span>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-500">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0" />
                        {blog.views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0" />
                        {blog.comments}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-nutty-blue transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {blog.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0" />
                        {blog.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0" />
                        {blog.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0" />
                        {blog.readTime}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Recent Posts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t("blogsSection.recentPosts")}
            </h3>
            <TrendingUp className="w-6 h-6 text-nutty-yellow" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => router.push(`/blog/${post.id}`)}
                className="group cursor-pointer"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-nutty-blue transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm capitalize">
                        {t(`blogsSection.categories.${post.category}`)}
                      </span>
                      <span className="text-nutty-blue text-sm font-semibold flex items-center">
                        {t("articlesSection.read")} <span className="mx-1 rtl:rotate-180">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* All Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredBlogs
            .filter(blog => !blog.featured)
            .map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => router.push(`/blog/${blog.id}`)}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm capitalize">
                        {t(`blogsSection.categories.${blog.category}`)}
                      </span>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500">
                        <span className="flex items-center">
                          <Eye className="w-3 h-3 mr-1 rtl:ml-1 rtl:mr-0" />
                          {Math.floor(blog.views / 1000)}k
                        </span>
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-nutty-blue transition-colors line-clamp-2">
                      {blog.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1 rtl:ml-1 rtl:mr-0" />
                        {blog.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1 rtl:ml-1 rtl:mr-0" />
                        {blog.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-nutty-blue to-purple-600 rounded-2xl p-8 md:p-12">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-white" />
            <h3 className="text-3xl font-bold text-white mb-4">
              {t("blogsSection.newsletter.title")}
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t("blogsSection.newsletter.desc")}
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder={t("articlesSection.newsletter.placeholder")}
                  className="flex-1 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-blue-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-8 py-3 bg-white text-nutty-blue rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
                  {t("articlesSection.newsletter.button")}
                </button>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                {t("blogsSection.newsletter.note")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;