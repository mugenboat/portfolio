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

export const devProjects = [
  { name: "Geeers", logo: "geeers" },
  { name: "Sansiri", logo: "sansiri" },
  { name: "One Asset Management", logo: "one" },
  { name: "Mez", logo: "mez" },
] as const;

type Job = {
  period: string;
  role: string;
  company: string;
  bullets: string[];
  dev?: boolean;
};

type Dict = {
  nav: { experience: string; work: string; skills: string; contact: string };
  hero: {
    eyebrow: string;
    nickname: string;
    summary: string;
    background: string;
    location: string;
    ctaWork: string;
    ctaContact: string;
    focus: string[];
  };
  experience: { title: string; jobs: Job[]; devProjectsLabel: string };
  work: {
    title: string;
    intro: string;
    calendar: { title: string; body: string };
    tracker: { title: string; body: string };
    design: { title: string; body: string };
    video: {
      title: string;
      body: string;
      brandLinks: string;
      personal: string;
    };
    open: string;
  };
  skills: {
    title: string;
    marketing: string;
    tools: string;
    languages: string;
    languageList: string[];
    education: string;
    degree: string;
    school: string;
  };
  contactSection: { title: string; body: string; emailMe: string; location: string };
  footer: string;
};

export const content: Record<Lang, Dict> = {
  en: {
    nav: {
      experience: "Experience",
      work: "Work",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Content & Digital Marketing",
      nickname: "Boat",
      summary:
        "Content marketer with hands-on experience in content planning, influencer coordination and paid media on Facebook and TikTok. I build content strategies, run social campaigns and use performance data to grow engagement and reach.",
      background:
        "Before marketing I spent four years as a frontend developer — so I'm comfortable with websites, data and tools, and I make decisions from numbers.",
      location: "Chonburi, Thailand",
      ctaWork: "See my work",
      ctaContact: "Contact me",
      focus: [
        "Facebook · Instagram · TikTok",
        "Meta & TikTok Ads",
        "Influencer collaborations",
        "Short-form video",
      ],
    },
    experience: {
      title: "Experience",
      devProjectsLabel: "Projects I worked on",
      jobs: [
        {
          period: "2026 – Present",
          role: "Content & Digital Marketing",
          company: "Mah Boonkhrong Sirichai 25 Marketing Co., Ltd.",
          bullets: [
            "Plan monthly content calendars and create content for Facebook, TikTok, Instagram and Reels.",
            "Manage Facebook Ads and TikTok Ads campaigns to grow reach, engagement and website traffic.",
            "Run influencer collaborations end to end: outreach, briefing, negotiation, product seeding, content review and post tracking.",
            "Analyze campaign performance and optimize content based on data.",
            "Plan, shoot and edit short-form videos with a phone, CapCut and Canva — including ideas, hooks and scripts based on current trends.",
          ],
        },
        {
          period: "2025",
          role: "Production Planner",
          company: "Siam Carton Packaging Co., Ltd.",
          bullets: [
            "Planned and scheduled production to ensure on-time delivery, prioritizing by urgency and deadline.",
            "Coordinated with sales and production teams to solve issues and align timelines.",
            "Created a planning-system guide manual to improve the team's workflow.",
          ],
        },
        {
          period: "2024 – 2025",
          role: "Digital Marketing Project (Self-employed)",
          company: "Affiliate marketing",
          bullets: [
            "Built and managed Facebook pages for affiliate marketing.",
            "Created the content strategy and social media content.",
            "Learned and practiced Meta Ads and TikTok Ads; analyzed results with platform analytics.",
          ],
        },
        {
          period: "2019 – 2023",
          role: "Frontend Developer",
          company: "Geekstart Co., Ltd.",
          dev: true,
          bullets: [
            "Built responsive, user-friendly web applications (Vue, Nuxt, React, Next.js) and worked with UI/UX designers to improve user experience.",
          ],
        },
      ],
    },
    work: {
      title: "Selected work",
      intro: "Examples from my day-to-day content marketing work.",
      calendar: {
        title: "Content calendar",
        body: "A monthly plan for posts and videos — format, pillar, target audience and ad budget for each day.",
      },
      tracker: {
        title: "Content performance tracker",
        body: "Monthly tracking across Facebook, Instagram and TikTok: topics, objectives, ad budget allocation and results.",
      },
      design: {
        title: "Content design",
        body: "Selected visuals created as part of monthly content planning and campaign execution.",
      },
      video: {
        title: "Content video",
        body: "Promotional ads, social reels and creative campaign content — planned, shot and edited by me.",
        brandLinks: "Watch on the brand's channels",
        personal: "My personal channels",
      },
      open: "Click to view full size",
    },
    skills: {
      title: "Skills & tools",
      marketing: "Marketing skills",
      tools: "Tools",
      languages: "Languages",
      languageList: ["Thai", "English"],
      education: "Education",
      degree: "Bachelor of Science — Business / Technology",
      school: "Thai-Nichi Institute of Technology",
    },
    contactSection: {
      title: "Let's work together",
      body: "Open to Digital Marketing and Content Marketing roles. The fastest way to reach me is email.",
      emailMe: "Email me",
      location: "Based in Chonburi, Thailand",
    },
    footer: "Built by Thanate Janyaswasdi",
  },

  th: {
    nav: {
      experience: "ประสบการณ์",
      work: "ผลงาน",
      skills: "ทักษะ",
      contact: "ติดต่อ",
    },
    hero: {
      eyebrow: "Content & Digital Marketing",
      nickname: "โบ๊ท",
      summary:
        "นักการตลาดคอนเทนต์ ที่มีประสบการณ์วางแผนคอนเทนต์ ประสานงานอินฟลูเอนเซอร์ และยิงโฆษณาบน Facebook และ TikTok ถนัดวางกลยุทธ์คอนเทนต์ ดูแลแคมเปญโซเชียลมีเดีย และใช้ข้อมูลผลลัพธ์มาปรับให้ได้ยอด engagement และ reach ที่ดีขึ้น",
      background:
        "ก่อนมาทำการตลาด ผมเป็น Frontend Developer มา 4 ปี จึงคุ้นเคยกับเว็บไซต์ ข้อมูล และเครื่องมือต่าง ๆ และตัดสินใจจากตัวเลขจริง",
      location: "ชลบุรี ประเทศไทย",
      ctaWork: "ดูผลงาน",
      ctaContact: "ติดต่อผม",
      focus: [
        "Facebook · Instagram · TikTok",
        "โฆษณา Meta และ TikTok",
        "งานอินฟลูเอนเซอร์",
        "วิดีโอสั้น",
      ],
    },
    experience: {
      title: "ประสบการณ์",
      devProjectsLabel: "โปรเจกต์ที่เคยร่วมพัฒนา",
      jobs: [
        {
          period: "2026 – ปัจจุบัน",
          role: "Content & Digital Marketing",
          company: "Mah Boonkhrong Sirichai 25 Marketing Co., Ltd.",
          bullets: [
            "วางแผน content calendar รายเดือน และผลิตคอนเทนต์สำหรับ Facebook, TikTok, Instagram และ Reels",
            "ดูแลแคมเปญ Facebook Ads และ TikTok Ads เพื่อเพิ่ม reach, engagement และทราฟฟิกเข้าเว็บไซต์",
            "ดูแลงานอินฟลูเอนเซอร์ครบวงจร ตั้งแต่ติดต่อ บรีฟ ต่อรอง ส่งสินค้า ตรวจคอนเทนต์ ไปจนถึงติดตามโพสต์",
            "วิเคราะห์ผลแคมเปญ และปรับคอนเทนต์ตามข้อมูลที่ได้",
            "วางแผน ถ่าย และตัดต่อวิดีโอสั้นด้วยมือถือ CapCut และ Canva รวมถึงคิดไอเดีย hook และสคริปต์จากเทรนด์ปัจจุบัน",
          ],
        },
        {
          period: "2025",
          role: "Production Planner",
          company: "Siam Carton Packaging Co., Ltd.",
          bullets: [
            "วางแผนและจัดตารางการผลิตให้ส่งงานตรงเวลา โดยจัดลำดับตามความเร่งด่วนและกำหนดส่ง",
            "ประสานงานกับทีมขายและทีมผลิตเพื่อแก้ปัญหาและวางไทม์ไลน์ให้ตรงกัน",
            "จัดทำคู่มือการใช้ระบบวางแผน เพื่อให้ทีมทำงานได้ราบรื่นขึ้น",
          ],
        },
        {
          period: "2024 – 2025",
          role: "Digital Marketing Project (ทำเอง)",
          company: "Affiliate marketing",
          bullets: [
            "สร้างและดูแลเพจ Facebook สำหรับทำ affiliate marketing",
            "วางกลยุทธ์คอนเทนต์และผลิตคอนเทนต์โซเชียลมีเดีย",
            "ศึกษาและฝึกยิงโฆษณา Meta Ads และ TikTok Ads พร้อมวิเคราะห์ผลด้วย analytics ของแพลตฟอร์ม",
          ],
        },
        {
          period: "2019 – 2023",
          role: "Frontend Developer",
          company: "Geekstart Co., Ltd.",
          dev: true,
          bullets: [
            "พัฒนาเว็บแอปพลิเคชันแบบ responsive (Vue, Nuxt, React, Next.js) และทำงานร่วมกับ UI/UX designer เพื่อปรับประสบการณ์ผู้ใช้",
          ],
        },
      ],
    },
    work: {
      title: "ผลงานที่คัดมา",
      intro: "ตัวอย่างงานจากการทำคอนเทนต์มาร์เก็ตติ้งในแต่ละวัน",
      calendar: {
        title: "Content calendar",
        body: "แผนโพสต์และวิดีโอรายเดือน ระบุรูปแบบ หมวดคอนเทนต์ กลุ่มเป้าหมาย และงบโฆษณาของแต่ละวัน",
      },
      tracker: {
        title: "ตารางติดตามผลคอนเทนต์",
        body: "ติดตามผลรายเดือนบน Facebook, Instagram และ TikTok ทั้งหัวข้อ วัตถุประสงค์ การแบ่งงบโฆษณา และผลลัพธ์",
      },
      design: {
        title: "งานออกแบบคอนเทนต์",
        body: "ตัวอย่างภาพที่ทำขึ้นตามแผนคอนเทนต์รายเดือนและแคมเปญ",
      },
      video: {
        title: "วิดีโอคอนเทนต์",
        body: "โฆษณา รีลโซเชียล และคอนเทนต์แคมเปญ ที่ผมวางแผน ถ่าย และตัดต่อเอง",
        brandLinks: "ดูได้ที่ช่องของแบรนด์",
        personal: "ช่องส่วนตัวของผม",
      },
      open: "คลิกเพื่อดูภาพเต็ม",
    },
    skills: {
      title: "ทักษะและเครื่องมือ",
      marketing: "ทักษะการตลาด",
      tools: "เครื่องมือ",
      languages: "ภาษา",
      languageList: ["ไทย", "อังกฤษ"],
      education: "การศึกษา",
      degree: "วิทยาศาสตรบัณฑิต — Business / Technology",
      school: "สถาบันเทคโนโลยีไทย-ญี่ปุ่น",
    },
    contactSection: {
      title: "มาร่วมงานกัน",
      body: "เปิดรับตำแหน่ง Digital Marketing และ Content Marketing ติดต่อทางอีเมลได้เร็วที่สุด",
      emailMe: "ส่งอีเมล",
      location: "อยู่ที่ชลบุรี ประเทศไทย",
    },
    footer: "สร้างโดย Thanate Janyaswasdi",
  },
};
