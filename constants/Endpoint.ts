export const ENDPOINTS = {
  SEO_HOME: '/api/page-home?populate[seo][populate][openGraph][populate]=*',
  SEO_NEWS: '/api/page-news?populate[seo][populate][openGraph][populate]=*',
  SEO_SERVICES: '/api/page-services?populate[seo][populate][openGraph][populate]=*',
  SEO_QUALITY_ASSURANCE_TESTING: '/api/page-quality-assurance-testing?populate[seo][populate][openGraph][populate]=*',
  SEO_MOBILE_APP_DEVELOPMENT: '/api/services-mobile-app-development?populate[seo][populate][openGraph][populate]=*',
  SEO_WEB_DEVELOPMENT: '/api/service-web-development?populate[seo][populate][openGraph][populate]=*',
  SEO_BUSINESS_AUTOMATION: '/api/services-business-automation?populate[seo][populate][openGraph][populate]=*',
  SEO_DIGITAL_TRANSFORMATION: '/api/page-digital-transformation?populate[seo][populate][openGraph][populate]=*',
  SEO_ABOUT_US: '/api/page-about-us?populate[seo][populate][openGraph][populate]=*',
  SEO_CASE_STUDIES: '/api/page-case-studies?populate[seo][populate][openGraph][populate]=*',
  SEO_DATA_ENGINEERING: '/api/page-data-engineering?populate[seo][populate][openGraph][populate]=*',
  SEO_PAGE_ARTIFICIAL_INTELLIGENCE_AI:
    '/api/page-artificial-intelligence-ai?populate[seo][populate][openGraph][populate]=*',
  SEO_HOW_TO_WORK: '/api/page-how-to-work?populate[seo][populate][openGraph][populate]=*',
  GLOBAL_SETTINGS: '/api/global-settings',
  SEO_CONTACT: '/api/page-contact?populate[seo][populate][openGraph][populate]=*',
  HOME: '/api/page-home',
  NEWS: '/api/page-news?populate[insightsUpdateAndInnovations][populate]=*&populate[searchBox][populate]=*&populate[trendingAndLatestArticles][populate]=*&populate[technologyInsights][populate]=*&populate[eventsAndNews][populate]=*&populate[newsletter][populate]=*',
  CASE_STUDIES:
    '/api/page-case-studies?populate[caseStudiesOverview][populate]=*&populate[partners][populate]=*&populate[stories][populate]=*&populate[callToAction][populate]=*',
  CASE_STUDIES_NEWEST_POSTS_HEADING: '/api/page-case-studies?populate[newestPost][populate]=*',
  CASE_STUDIES_LIST: '/api/case-studies-api-id?populate=*',
  CASE_STUDIES_DETAIL:
    '/api/case-studies-api-id?populate[seo][populate][openGraph][populate]=*&populate[thumbnail][populate]=*&populate[banner][populate]=*&filters[slug][$eq]=',
  BLOGS: '/api/blogs-app-id?populate=*',
  BLOG_DETAIL:
    '/api/blogs-app-id?populate[seo][populate][openGraph][populate]=*&populate[blogs_categories][populate][blogs][populate]=*&populate[banner][populate]=*&filters[slug][$eq]=',
  BLOG_DETAIL_SINGLE: '/api/page-blogs?populate[Newsletter][populate]=*&populate[SimilarPosts][populate]=*',
  POST_CATEGORY: '/api/blogs-categories-app-id',
  POSTS: '/api/blogs-app-id',
  SEARCH:
    '/api/search?populate[seo][populate][openGraph][populate][image][fields][0]=url&populate[newsletter][populate]=*',
  POST_CATEGORIES: '/api/news-category?populate[newsletter][populate]=*',
  SERVICES: '/api/page-services',
  SERVICES_DATA_ENGINEERING:
    '/api/page-data-engineering?populate[featuresWithSimpleIcons][populate][items][populate]=*&populate[fullScreenHeroWithImageSlider][populate]=*&populate[spaces][populate][data][populate]=*&populate[locations][populate]=*&populate[simpleCentered][populate]=*&populate[application][populate]=*&populate[reviewsWithBorderedGridLayout][populate][data][populate]=*&populate[ourClient][populate]=*',
  SERVICES_QUALITY_ASSURANCE_TESTING:
    '/api/page-quality-assurance-testing?populate[featuresWithSimpleIcons][populate][items][populate]=*&populate[fullScreenHeroWithImageSlider][populate]=*&populate[spaces][populate][data][populate]=*&populate[spaces][populate][button][populate]=*&populate[locations][populate]=*&populate[mapHero][populate]=*&populate[application][populate]=*&populate[reviewsWithBorderedGridLayout][populate][data][populate]=*&populate[ourClient][populate]=*',
  ABOUT_US:
    '/api/page-about-us?populate[overviewAboutUs][populate]=*&populate[ourJourney][populate]=*&populate[ourClients][populate]=*&populate[ourExpertise][populate][items][populate]=*&populate[ourExpertise][populate][button][populate]=*&populate[ourCommitment][populate][items][populate]=*&populate[callToAction][populate]=*',
  DIGITAL_TRANSFORMATION: '/api/page-digital-transformation',
  SERVICES_MOBILE_APP_DEVELOPMENT:
    '/api/services-mobile-app-development?populate[heroWithDashboardScreenshotAndCta][populate][button][populate]=*&populate[heroWithDashboardScreenshotAndCta][populate][image][populate]=*&populate[ourServices][populate][items][populate]=*&populate[hub][populate][content][populate]=*&populate[hub][populate][image][populate]=*&populate[support][populate]=*&populate[customization][populate]=*&populate[technologies][populate]=*&populate[contactUs][populate]=*&populate[stories][populate]=*',
  SERVICES_AI:
    '/api/page-artificial-intelligence-ai?populate[featuresWithSimpleIcons][populate][items][populate]=*&populate[fullScreenHeroWithImageSlider][populate]=*&populate[spaces][populate][data][populate]=*&populate[spaces][populate][button][populate]=*&populate[locations][populate]=*&populate[simpleCentered][populate]=*&populate[application][populate]=*&populate[reviewsWithBorderedGridLayout][populate][data][populate]=*&populate[ourClient][populate]=*',
  SERVICES_WEB_DEVELOPMENT:
    '/api/service-web-development?populate[featuresWithSimpleIcons][populate][items][populate]=*&populate[fullScreenHeroWithImageSlider][populate]=*&populate[spaces][populate][data][populate]=*&populate[spaces][populate][button][populate]=*&populate[locations][populate]=*&populate[mapHero][populate]=*&populate[application][populate]=*&populate[reviewsWithBorderedGridLayout][populate][data][populate]=*&populate[ourClient][populate]=*',
  SERVICES_BUSINESS_AUTOMATION:
    '/api/services-business-automation?populate[featuresWithSimpleIcons][populate][items][populate]=*&populate[fullScreenHeroWithImageSlider][populate]=*&populate[spaces][populate][data][populate]=*&populate[spaces][populate][button][populate]=*&populate[locations][populate]=*&populate[mapHero][populate]=*&populate[application][populate]=*&populate[reviewsWithBorderedGridLayout][populate][data][populate]=*&populate[ourClient][populate]=*',
  SERVICE_BLOCKCHAIN: '/api/services-blockchain-development',
  I18N_LOCALES: '/api/i18n/locales',
  SEO_CUSTOM_SOFTWARE_DEVELOPMENT:
    '/api/services-custom-software-development?populate[seo][populate][openGraph][populate]=*',
  CUSTOM_SOFTWARE_DEVELOPMENT:
    '/api/services-custom-software-development?populate[featuresWithSimpleIcons][populate][items][populate]=*&populate[fullScreenHeroWithImageSlider][populate]=*&populate[spaces][populate][data][populate]=*&populate[locations][populate]=*&populate[simpleCentered][populate]=*&populate[application][populate]=*&populate[reviewsWithBorderedGridLayout][populate][data][populate]=*&populate[ourClient][populate]=*',
  SEO_AI_TESTING: '/api/services-ai-testing?populate[seo][populate][openGraph][populate]=*',
  AI_TESTING: '/api/services-ai-testing',
  SEO_MAINTENANCE_AND_SUPPORT: '/api/services-maintenance-and-support?populate[seo][populate][openGraph][populate]=*',
  MAINTENANCE_AND_SUPPORT: '/api/services-maintenance-and-support',
  SEO_CLOUD_SERVICES: '/api/service-cloud-services?populate[seo][populate][openGraph][populate]=*',
  CLOUD_SERVICES: '/api/service-cloud-services',
  DYNAMIC_SERVICES: '/api/our-services',
  DYNAMIC_PAGE: '/api/pages-app-id?populate[seo][populate][openGraph][populate]=*&filters[slug][$eq]=',
  HOW_TO_WORK: '/api/page-how-to-work'
}
