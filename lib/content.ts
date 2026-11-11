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

export const brands = ["ศิริชัย 25", "Geeers", "Sansiri", "One Asset", "Mez"];

export type GalleryTab = "videos" | "designs" | "calendar" | "tracker";

type Card = { title: string; body: string };

type Dict = {
  nav: { work: string; caseStudy: string; gallery: string; inventory: string; contact: string };
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
  intro: { title: string; p1: string; p2: string; brands: string };
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
    watchOn: string;
  };
  inventory: {
    title: string;
    sub: string;
    skills: string;
    tools: string;
    log: string;
    jobs: { period: string; role: string }[];
    education: string;
    degree: string;
    languages: string;
  };
  contactSection: { line1: string; line2: string; continue: string; body: string; location: string };
  footer: string;
};

export const content: Record<Lang, Dict> = {
  en: {
    nav: {
      work: "My work",
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
      p1: "Content marketer who plans, creates and runs content for a Thai consumer brand — from the monthly calendar and copy, to shooting short videos and running Facebook & TikTok Ads.",
      p2: "Former frontend developer (4 years), so I'm comfortable with websites, data and tools — and I make decisions from numbers.",
      brands: "Brands I've worked with",
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
      watchOn: "More on the brand's page",
    },
    inventory: {
      title: "Inventory",
      sub: "Skills, tools & experience unlocked",
      skills: "skills.txt",
      tools: "tools.txt",
      log: "save_file.log",
      jobs: [
        { period: "2026 – Now", role: "Content & Digital Marketing · Mah Boonkhrong Sirichai 25 Marketing" },
        { period: "2025", role: "Production Planner · Siam Carton Packaging" },
        { period: "2024 – 2025", role: "Digital Marketing Project (Self-employed)" },
        { period: "2019 – 2023", role: "Frontend Developer · Geekstart" },
      ],
      education: "Education",
      degree: "BS Business / Technology · Thai-Nichi Institute of Technology",
      languages: "Languages: Thai, English",
    },
    contactSection: {
      line1: "Ready for",
      line2: "Player 2?",
      continue: "> Continue? 10... 9... 8...",
      body: "Open to Digital Marketing and Content Marketing roles.",
      location: "Based in Chonburi, Thailand",
    },
    footer: "Built by Thanate Janyaswasdi",
  },

  th: {
    nav: {
      work: "ผลงาน",
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
      p1: "นักการตลาดคอนเทนต์ ที่วางแผน ผลิต และดูแลคอนเทนต์ให้แบรนด์สินค้าอุปโภคบริโภคของไทย ตั้งแต่ทำ content calendar เขียนแคปชัน ถ่ายและตัดต่อวิดีโอสั้น ไปจนถึงยิงโฆษณา Facebook และ TikTok",
      p2: "ก่อนหน้านี้เป็น Frontend Developer มา 4 ปี จึงคุ้นเคยกับเว็บไซต์ ข้อมูล และเครื่องมือต่าง ๆ และตัดสินใจจากตัวเลขจริง",
      brands: "แบรนด์ที่เคยร่วมงาน",
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
      watchOn: "ดูเพิ่มเติมที่เพจของแบรนด์",
    },
    inventory: {
      title: "Inventory",
      sub: "ทักษะ เครื่องมือ และประสบการณ์ที่ปลดล็อกแล้ว",
      skills: "skills.txt",
      tools: "tools.txt",
      log: "save_file.log",
      jobs: [
        { period: "2026 – ปัจจุบัน", role: "Content & Digital Marketing · Mah Boonkhrong Sirichai 25 Marketing" },
        { period: "2025", role: "Production Planner · Siam Carton Packaging" },
        { period: "2024 – 2025", role: "Digital Marketing Project (ทำเอง)" },
        { period: "2019 – 2023", role: "Frontend Developer · Geekstart" },
      ],
      education: "การศึกษา",
      degree: "วิทยาศาสตรบัณฑิต Business / Technology · สถาบันเทคโนโลยีไทย-ญี่ปุ่น",
      languages: "ภาษา: ไทย, อังกฤษ",
    },
    contactSection: {
      line1: "Ready for",
      line2: "Player 2?",
      continue: "> Continue? 10... 9... 8...",
      body: "เปิดรับตำแหน่ง Digital Marketing และ Content Marketing",
      location: "อยู่ที่ชลบุรี ประเทศไทย",
    },
    footer: "สร้างโดย Thanate Janyaswasdi",
  },
};
