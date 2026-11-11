export type Lang = "en" | "th";

export const contact = {
  email: "boat.thanate@gmail.com",
  linkedin: "https://www.linkedin.com/in/thanate-janyaswasdi",
  github: "https://github.com/mugenboat",
  lemon8: "https://www.lemon8-app.com/@boattheblur",
  brandFacebook: "https://www.facebook.com/chongnomst",
};

export const marketingSkills = [
  "Content Planning",
  "Content Strategy",
  "Social Media Marketing",
  "Influencer Marketing",
  "Facebook Ads",
  "TikTok Ads",
  "Copywriting",
  "Analytics & Reporting",
];

export const tools = [
  "Meta Ads Manager",
  "TikTok Ads Manager",
  "Canva",
  "CapCut",
  "Excel",
  "Google Sheets",
  "ChatGPT",
  "Notion",
];

export type GalleryTab = "videos" | "designs" | "calendar" | "tracker";

type Card = { title: string; body: string };

type Dict = {
  nav: { work: string; experience: string; caseStudy: string; gallery: string; inventory: string; contact: string };
  hero: {
    tag: string;
    line1: string;
    line2: string;
    lead: string;
    start: string;
    connect: string;
    location: string;
    folders: { campaigns: string; calendar: string; videos: string; designs: string };
  };
  intro: { title: string; p1: string; p2: string };
  work: { title: string; sub: string; cards: Card[] };
  caseStudy: {
    label: string;
    title: string;
    brand: string;
    quest: string;
    questBody: string;
    strategy: string;
    strategyBody: string;
    steps: string[];
  };
  gallery: {
    title: string;
    sub: string;
    tabs: Record<GalleryTab, string>;
    desc: Record<GalleryTab, string>;
    open: string;
    play: string;
    watchOn: string;
  };
  inventory: {
    title: string;
    sub: string;
    skills: string;
    tools: string;
    eduFile: string;
    education: string;
    degree: string;
    languages: string;
  };
  experience: {
    title: string;
    sub: string;
    jobs: { period: string; role: string; company: string; bullets: string[] }[];
  };
  contactSection: { line1: string; line2: string; continue: string; body: string; location: string };
  dancer: { hi: string; cta: string; hide: string };
  footer: string;
};

export const content: Record<Lang, Dict> = {
  en: {
    nav: {
      work: "My work",
      experience: "Experience",
      caseStudy: "Case study",
      gallery: "Gallery",
      inventory: "Toolkit",
      contact: "Contact",
    },
    hero: {
      tag: "Player 1 : Content Marketer",
      line1: "Content",
      line2: "Portfolio",
      lead: "Content & digital marketing portfolio — content planning, social campaigns, influencer collaborations and short-form video.",
      start: "Press start",
      connect: "Let's connect",
      location: "Chonburi, Thailand",
      folders: { campaigns: "Campaigns", calendar: "Calendar", videos: "Videos", designs: "Designs" },
    },
    intro: {
      title: "Hi, I'm Boat!",
      p1: "I create content with both creativity and data — from strategy and producing photos and short-form videos, to working with influencers and running Facebook & TikTok Ads that put content in front of the right people.",
      p2: "With a 4-year background as a frontend developer, I understand both the content side and the technical side — so I can measure, improve and work with other teams faster.",
    },
    work: {
      title: "My work includes",
      sub: "Choose your skill",
      cards: [
        { title: "Short-form video", body: "Plan, shoot and edit reels with a phone, CapCut and Canva — ideas, hooks and scripts from current trends." },
        { title: "Content calendar", body: "Monthly plans for posts and videos: format, pillar, audience and ad budget for each day." },
        { title: "Performance tracker", body: "Tracking topics, objectives, ad spend and results across Facebook, Instagram and TikTok." },
        { title: "Content design", body: "On-brand visuals created for monthly content plans and campaigns." },
        { title: "Influencer collab", body: "End to end: outreach, briefing, negotiation, product seeding, content review and post tracking." },
        { title: "Paid social ads", body: "Facebook Ads and TikTok Ads campaigns that grow reach, engagement and website traffic." },
      ],
    },
    caseStudy: {
      label: "Boss level : Case study 01",
      title: "Grow Together",
      brand: "Sirichai 25 · Goat milk",
      quest: "Quest",
      questBody: "Make goat milk feel like an everyday family choice, with one consistent message across Facebook, Instagram and TikTok.",
      strategy: "Strategy",
      strategyBody: "A monthly content plan built on a \"Grow Together\" family theme — single photos, albums, influencer posts and short videos, boosted by targeted ads.",
      steps: ["Plan", "Create", "Influence", "Boost"],
    },
    gallery: {
      title: "Videos & designs",
      sub: "← swipe to play →",
      tabs: { videos: "Videos", designs: "Designs", calendar: "Calendar", tracker: "Tracker" },
      desc: {
        videos: "Promotional ads, social reels and campaign content — planned, shot and edited by me.",
        designs: "Selected visuals from monthly content planning and campaign execution.",
        calendar: "A monthly plan for posts and videos — format, pillar, target audience and ad budget for each day.",
        tracker: "Monthly tracking across Facebook, Instagram and TikTok: topics, objectives, ad budget and results.",
      },
      open: "Click to view full size",
      play: "Play video",
      watchOn: "More on the brand's page",
    },
    inventory: {
      title: "Inventory",
      sub: "Skills, tools & experience unlocked",
      skills: "skills.txt",
      tools: "tools.txt",
      eduFile: "education.txt",
      education: "Education",
      degree: "BS Business / Technology · Thai-Nichi Institute of Technology",
      languages: "Languages: Thai, English",
    },
    experience: {
      title: "Quest log",
      sub: "Work experience — every level cleared so far",
      jobs: [
        {
          period: "2026 – Present",
          role: "Content & Digital Marketing",
          company: "Mah Boonkhrong Sirichai 25 Marketing Co., Ltd.",
          bullets: [
            "Plan monthly content calendars and create content for Facebook, TikTok, Instagram, Instagram Reels and other social media platforms. Manage Facebook Ads and TikTok Ads campaigns to increase reach, engagement and website traffic.",
            "Manage influencer collaborations from outreach and briefing to negotiation, product seeding, content review, follow-up and post tracking.",
            "Analyze campaign performance and optimize content based on data insights.",
            "Plan, shoot and edit short-form video content using mobile devices, CapCut and Canva.",
            "Develop content ideas, hooks and scripts for short-form social media videos.",
            "Research social media trends, formats and trending content to develop relevant short-form videos.",
          ],
        },
        {
          period: "2025",
          role: "Production Planner",
          company: "Siam Carton Packaging Co., Ltd.",
          bullets: [
            "Planned and scheduled production to ensure on-time delivery.",
            "Maintained and updated production data and reports.",
            "Coordinated with sales and production teams to resolve issues and improve workflow.",
            "Monitored inventory and raw material availability.",
            "Created a planning system guide manual to improve operational workflow.",
            "Ensured material accuracy by validating substitute materials in orders.",
            "Organized and prioritized production schedules based on urgency and deadlines.",
            "Collaborated with sales to align manufacturing timelines and batch details.",
          ],
        },
        {
          period: "2024 – 2025",
          role: "Digital Marketing Project (Self-employed)",
          company: "Affiliate marketing",
          bullets: [
            "Built and managed Facebook pages for affiliate marketing.",
            "Created content strategy and social media content.",
            "Learned and practiced Meta Ads and TikTok Ads.",
            "Analyzed content performance using platform analytics.",
          ],
        },
        {
          period: "2019 – 2023",
          role: "Frontend Developer",
          company: "Geekstart Co., Ltd.",
          bullets: [
            "Developed and maintained responsive, user-friendly web applications using HTML, CSS and JavaScript.",
            "Designed and implemented clean, scalable front-end architecture.",
            "Ensured cross-browser compatibility and optimized performance across desktop, tablet and mobile devices.",
            "Collaborated with UI/UX designers to improve user experience.",
            "Followed accessibility standards and front-end best practices to improve usability and maintainability.",
          ],
        },
      ],
    },
    contactSection: {
      line1: "Ready for",
      line2: "Player 2?",
      continue: "> Continue? 10... 9... 8...",
      body: "Open to Digital Marketing and Content Marketing roles.",
      location: "Based in Chonburi, Thailand",
    },
    dancer: { hi: "Hi! I'm Boat", cta: "Let's work together ▶", hide: "Hide character" },
    footer: "Built by Thanate Janyaswasdi",
  },

  th: {
    nav: {
      work: "ผลงาน",
      experience: "ประสบการณ์",
      caseStudy: "เคสตัวอย่าง",
      gallery: "แกลเลอรี",
      inventory: "ทักษะ",
      contact: "ติดต่อ",
    },
    hero: {
      tag: "Player 1 : นักการตลาดคอนเทนต์",
      line1: "Content",
      line2: "Portfolio",
      lead: "พอร์ตโฟลิโอสายคอนเทนต์และดิจิทัลมาร์เก็ตติ้ง ทั้งวางแผนคอนเทนต์ แคมเปญโซเชียล งานอินฟลูเอนเซอร์ และวิดีโอสั้น",
      start: "Press start",
      connect: "ติดต่อผม",
      location: "ชลบุรี ประเทศไทย",
      folders: { campaigns: "แคมเปญ", calendar: "แผนคอนเทนต์", videos: "วิดีโอ", designs: "งานดีไซน์" },
    },
    intro: {
      title: "สวัสดีครับ ผมโบ๊ท!",
      p1: "ผมทำคอนเทนต์โดยใช้ทั้งความคิดสร้างสรรค์และข้อมูล ตั้งแต่วางกลยุทธ์ ผลิตภาพและวิดีโอสั้น ทำงานร่วมกับอินฟลูเอนเซอร์ ไปจนถึงยิงโฆษณา Facebook และ TikTok ให้คอนเทนต์ไปถึงคนที่ใช่",
      p2: "ด้วยพื้นฐาน Frontend Developer 4 ปี ผมจึงเข้าใจทั้งฝั่งคอนเทนต์และฝั่งเทคนิค ช่วยให้วัดผล ปรับปรุง และทำงานกับทีมอื่นได้ไวขึ้น",
    },
    work: {
      title: "My work includes",
      sub: "เลือกสกิลที่อยากดู",
      cards: [
        { title: "วิดีโอสั้น", body: "วางแผน ถ่าย และตัดต่อรีลด้วยมือถือ CapCut และ Canva รวมถึงคิดไอเดีย hook และสคริปต์จากเทรนด์" },
        { title: "Content calendar", body: "แผนโพสต์และวิดีโอรายเดือน ระบุรูปแบบ หมวดคอนเทนต์ กลุ่มเป้าหมาย และงบโฆษณาของแต่ละวัน" },
        { title: "ติดตามผลคอนเทนต์", body: "ติดตามหัวข้อ วัตถุประสงค์ งบโฆษณา และผลลัพธ์บน Facebook, Instagram และ TikTok" },
        { title: "ออกแบบคอนเทนต์", body: "ภาพคอนเทนต์ตามแผนรายเดือนและแคมเปญ ให้ตรงกับแบรนด์" },
        { title: "งานอินฟลูเอนเซอร์", body: "ครบวงจร ตั้งแต่ติดต่อ บรีฟ ต่อรอง ส่งสินค้า ตรวจคอนเทนต์ จนถึงติดตามโพสต์" },
        { title: "โฆษณาโซเชียล", body: "ดูแลแคมเปญ Facebook Ads และ TikTok Ads เพื่อเพิ่ม reach, engagement และทราฟฟิกเข้าเว็บไซต์" },
      ],
    },
    caseStudy: {
      label: "Boss level : เคสตัวอย่าง 01",
      title: "Grow Together",
      brand: "ศิริชัย 25 · นมแพะ",
      quest: "โจทย์",
      questBody: "ทำให้นมแพะเป็นตัวเลือกประจำวันของครอบครัว และสื่อสารข้อความเดียวกันบน Facebook, Instagram และ TikTok",
      strategy: "กลยุทธ์",
      strategyBody: "วางแผนคอนเทนต์รายเดือนภายใต้ธีมครอบครัว \"Grow Together\" ทั้งภาพเดี่ยว อัลบั้ม โพสต์อินฟลูเอนเซอร์ และวิดีโอสั้น พร้อมยิงโฆษณาไปยังกลุ่มเป้าหมาย",
      steps: ["วางแผน", "ผลิต", "อินฟลูฯ", "บูสต์"],
    },
    gallery: {
      title: "Videos & designs",
      sub: "← ปัดเพื่อดูเพิ่ม →",
      tabs: { videos: "วิดีโอ", designs: "งานดีไซน์", calendar: "แผนคอนเทนต์", tracker: "ตารางติดตามผล" },
      desc: {
        videos: "โฆษณา รีลโซเชียล และคอนเทนต์แคมเปญ ที่ผมวางแผน ถ่าย และตัดต่อเอง",
        designs: "ตัวอย่างภาพจากแผนคอนเทนต์รายเดือนและแคมเปญ",
        calendar: "แผนโพสต์และวิดีโอรายเดือน ระบุรูปแบบ หมวดคอนเทนต์ กลุ่มเป้าหมาย และงบโฆษณาของแต่ละวัน",
        tracker: "ติดตามผลรายเดือนบน Facebook, Instagram และ TikTok ทั้งหัวข้อ วัตถุประสงค์ งบโฆษณา และผลลัพธ์",
      },
      open: "คลิกเพื่อดูภาพเต็ม",
      play: "เล่นวิดีโอ",
      watchOn: "ดูเพิ่มเติมที่เพจของแบรนด์",
    },
    inventory: {
      title: "Inventory",
      sub: "ทักษะ เครื่องมือ และประสบการณ์ที่ปลดล็อกแล้ว",
      skills: "skills.txt",
      tools: "tools.txt",
      eduFile: "education.txt",
      education: "การศึกษา",
      degree: "วิทยาศาสตรบัณฑิต Business / Technology · สถาบันเทคโนโลยีไทย-ญี่ปุ่น",
      languages: "ภาษา: ไทย, อังกฤษ",
    },
    experience: {
      title: "Quest log",
      sub: "ประสบการณ์ทำงาน ทุกด่านที่ผ่านมา",
      jobs: [
        {
          period: "2026 – ปัจจุบัน",
          role: "Content & Digital Marketing",
          company: "Mah Boonkhrong Sirichai 25 Marketing Co., Ltd.",
          bullets: [
            "วางแผน content calendar รายเดือน และผลิตคอนเทนต์สำหรับ Facebook, TikTok, Instagram, Instagram Reels และแพลตฟอร์มโซเชียลอื่น ๆ พร้อมดูแลแคมเปญ Facebook Ads และ TikTok Ads เพื่อเพิ่ม reach, engagement และทราฟฟิกเข้าเว็บไซต์",
            "ดูแลงานอินฟลูเอนเซอร์ ตั้งแต่ติดต่อ บรีฟ ต่อรอง ส่งสินค้า ตรวจคอนเทนต์ ติดตามงาน จนถึงติดตามโพสต์",
            "วิเคราะห์ผลแคมเปญ และปรับคอนเทนต์จาก insight ของข้อมูล",
            "วางแผน ถ่าย และตัดต่อวิดีโอสั้นด้วยมือถือ CapCut และ Canva",
            "คิดไอเดียคอนเทนต์ hook และสคริปต์สำหรับวิดีโอสั้นบนโซเชียล",
            "ศึกษาเทรนด์ รูปแบบ และคอนเทนต์ที่กำลังมาแรง เพื่อนำมาทำวิดีโอสั้นที่ตรงกระแส",
          ],
        },
        {
          period: "2025",
          role: "Production Planner",
          company: "Siam Carton Packaging Co., Ltd.",
          bullets: [
            "วางแผนและจัดตารางการผลิตเพื่อให้ส่งงานได้ตรงเวลา",
            "ดูแลและอัปเดตข้อมูลการผลิตและรายงาน",
            "ประสานงานกับทีมขายและทีมผลิตเพื่อแก้ปัญหาและปรับปรุงขั้นตอนการทำงาน",
            "ติดตามสต็อกและความพร้อมของวัตถุดิบ",
            "จัดทำคู่มือการใช้ระบบวางแผน เพื่อให้การทำงานราบรื่นขึ้น",
            "ตรวจสอบวัตถุดิบทดแทนในออเดอร์ให้ถูกต้อง",
            "จัดลำดับตารางการผลิตตามความเร่งด่วนและกำหนดส่ง",
            "ทำงานร่วมกับทีมขายเพื่อวางไทม์ไลน์การผลิตและรายละเอียดแต่ละล็อต",
          ],
        },
        {
          period: "2024 – 2025",
          role: "Digital Marketing Project (ทำเอง)",
          company: "Affiliate marketing",
          bullets: [
            "สร้างและดูแลเพจ Facebook สำหรับทำ affiliate marketing",
            "วางกลยุทธ์คอนเทนต์และผลิตคอนเทนต์โซเชียลมีเดีย",
            "ศึกษาและฝึกยิงโฆษณา Meta Ads และ TikTok Ads",
            "วิเคราะห์ผลคอนเทนต์ด้วย analytics ของแพลตฟอร์ม",
          ],
        },
        {
          period: "2019 – 2023",
          role: "Frontend Developer",
          company: "Geekstart Co., Ltd.",
          bullets: [
            "พัฒนาและดูแลเว็บแอปพลิเคชันแบบ responsive ที่ใช้งานง่าย ด้วย HTML, CSS และ JavaScript",
            "ออกแบบและวางโครงสร้าง front-end ให้เป็นระเบียบและขยายต่อได้",
            "ทำให้เว็บใช้งานได้ทุกเบราว์เซอร์ และทำงานเร็วทั้งบนคอม แท็บเล็ต และมือถือ",
            "ทำงานร่วมกับ UI/UX designer เพื่อปรับประสบการณ์ผู้ใช้",
            "ทำตามมาตรฐาน accessibility และแนวปฏิบัติที่ดีของ front-end เพื่อให้ใช้งานง่ายและดูแลต่อได้",
          ],
        },
      ],
    },
    contactSection: {
      line1: "Ready for",
      line2: "Player 2?",
      continue: "> Continue? 10... 9... 8...",
      body: "เปิดรับตำแหน่ง Digital Marketing และ Content Marketing",
      location: "อยู่ที่ชลบุรี ประเทศไทย",
    },
    dancer: { hi: "สวัสดีครับ ผมโบ๊ท!", cta: "มาร่วมงานกัน ▶", hide: "ซ่อนตัวละคร" },
    footer: "สร้างโดย Thanate Janyaswasdi",
  },
};
