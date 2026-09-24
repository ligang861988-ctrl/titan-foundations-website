/* ==========================================================================
   Titan Foundations — site interactions
   - bilingual EN / 中文 switching (localStorage-persisted)
   - sticky header state, mobile nav, scroll reveals
   ========================================================================== */

(function () {
  "use strict";

  var I18N = {
    en: {
      "a11y.skip": "Skip to content",
      "a11y.lang": "Switch language",
      "meta.title": "Titan Foundations — Your Foundation. Built Right. | Lagos, Nigeria",
      "meta.desc": "Titan Foundations — specialist pile foundation engineering and ground improvement in Lagos, Nigeria. Rotary bored piles to Ø2.4m / 80m, PHC & sheet piles, jet grouting, deep excavation support, pile testing and equipment leasing.",

      "nav.about": "About",
      "nav.services": "Services",
      "nav.fleet": "Fleet",
      "nav.projects": "Projects",
      "nav.quality": "Quality",
      "nav.contact": "Contact",
      "nav.cta": "Get a Quote",

      "hero.eyebrow": "Titan Foundations · Foundation Engineering · Lagos, Nigeria",
      "hero.title": "Your Foundation.<br><span>Built Right.</span>",
      "hero.sub": "Specialist pile foundation engineering and ground improvement services for Lagos's most demanding developments — delivered by a team with deep local roots and international-grade equipment.",
      "hero.cta1": "Explore Services",
      "hero.cta2": "Contact Us",
      "hero.stat1": "Years Experience",
      "hero.stat2": "Max Pile Diameter",
      "hero.stat3": "Max Pile Depth",
      "hero.stat4": "Safety Record",

      "about.badge": "Years in pile foundation engineering",
      "about.kicker": "Who We Are",
      "about.title": "Chinese Engineering Expertise, Rooted in Lagos.",
      "about.p1": "Titan Foundations is a specialist foundation engineering company registered in Nigeria, operating from Lagos. We bring together advanced Chinese construction technology and a permanent, locally-based team to deliver foundation solutions that meet both international engineering standards and the realities of the Nigerian construction market. Titan Foundations is the trade name of FIRST TITAN ENGINEERING LTD, registered with the Corporate Affairs Commission (RC 9823352).",
      "about.p2": "Our services span the full foundation engineering cycle — from geotechnical assessment and scheme design, through pile construction and ground improvement, to certified load testing and QA documentation. One accountable partner from first pile to final report.",
      "about.point1": "Deep local roots: Victoria Island & Ikoyi coastal soft soils, congested urban sites, waterlogged Lekki grounds.",
      "about.point2": "International standards: GB & BS EN execution with certified English-language documentation.",
      "about.point3": "One accountable partner from scheme design to final test report.",
      "about.cta": "Get In Touch",

      "services.kicker": "Core Services",
      "services.title": "What We Do",
      "services.sub": "The full foundation engineering cycle — from design to certified testing — under one accountable partner.",
      "services.s1.t": "Pile Foundation Construction",
      "services.s1.d": "Rotary bored piles up to Ø2,400mm / 80m depth, PHC precast piles and steel sheet piles. GB & BS EN standards. Multiple rigs for fast mobilisation.",
      "services.s1.tags": "Rotary Bored Piles · PHC Piles · Sheet Piles",
      "services.s2.t": "Foundation Scheme Design",
      "services.s2.d": "Optimised solutions from geotechnical data. Full calculations and drawings — integrated design-build delivery for cost efficiency.",
      "services.s2.tags": "Geotechnical Analysis · Design-Build",
      "services.s3.t": "Ground Improvement",
      "services.s3.d": "High-pressure jet grouting, double/triple-axis cement-soil mixing for soft Lagos coastal soils and problematic fill ground.",
      "services.s3.tags": "Jet Grouting · Deep Mixing",
      "services.s4.t": "Deep Excavation Support",
      "services.s4.d": "Basement retaining walls, CSM curtains, sheet pile systems, strutting and dewatering with continuous site monitoring.",
      "services.s4.tags": "Basement Walls · CSM · Dewatering",
      "services.s5.t": "Pile Testing & Inspection",
      "services.s5.d": "Self-balancing (O-cell), kentledge static load, low/high strain dynamic, cross-hole sonic logging — certified English-language reports.",
      "services.s5.tags": "Static Load · O-Cell · PIT / PDA · CSL",
      "services.s6.t": "Equipment Leasing",
      "services.s6.d": "SUNWARD SWDM220-II rigs, mixing rigs, jet grouting machines, pile press — with operators and full maintenance support.",
      "services.s6.tags": "With Operators · Maintenance Support",

      "fleet.kicker": "Our Fleet",
      "fleet.title": "Equipment That Delivers.",
      "fleet.sub": "Real capacity on the ground in Lagos — available now, not promises.",
      "fleet.st1": "Rotary Drilling Rigs",
      "fleet.st2": "Mobilisation to any Lagos site",
      "fleet.st3": "Support Machines on Site",
      "fleet.st4": "Backup Fleet on Demand",
      "fleet.e1.t": "Rotary Drilling Rig",
      "fleet.e1.d": "SUNWARD SWDM220-II · Max Ø2,400mm · Depth 80m · Torque 220 kN·m",
      "fleet.e2.t": "Jet Grouting Machine",
      "fleet.e2.d": "High-pressure triple-fluid system · Column Ø300–1,200mm · Depth 30m+",
      "fleet.e3.t": "Triple-Axis Mixing Rig",
      "fleet.e3.d": "CSM / SMW method · Stop-water curtain · Depth 35m",
      "fleet.e4.t": "Double-Axis Mixing Rig",
      "fleet.e4.d": "Soft soil treatment · Cement-soil mixing wall",
      "fleet.e5.t": "Static Pile Press",
      "fleet.e5.d": "Max 6,000 kN · PHC precast piles · Zero vibration, low noise",
      "fleet.e6.t": "Bored Pile Drill",
      "fleet.e6.d": "Rotary / percussive · Rock & gravel · Casing available",

      "projects.kicker": "Project Portfolio",
      "projects.title": "Selected Projects. Proven in the Field.",
      "projects.p1.tag": "Residential · High-Rise",
      "projects.p1.t": "Victoria Island 20-Storey Tower",
      "projects.p1.d": "Rotary bored piles · SUNWARD SWDM220-II",
      "projects.p2.tag": "Industrial · Foundation",
      "projects.p2.t": "Lafarge Cement Plant Expansion",
      "projects.p2.d": "Lagos, Nigeria",
      "projects.p3.tag": "Educational Complex",
      "projects.p3.t": "University Multi-Block Campus",
      "projects.p3.d": "Foundation works across multiple blocks",
      "projects.p4.tag": "Deep Excavation",
      "projects.p4.t": "Convention Centre Phase 3",
      "projects.p4.d": "Deep excavation & support works",
      "projects.p5.tag": "Urban Development",
      "projects.p5.t": "Deep Basement Retaining",
      "projects.p5.d": "Basement support & retaining walls",
      "projects.p6.tag": "Urban Excavation Support",
      "projects.p6.t": "Sheet Pile Works",
      "projects.p6.d": "Sheet pile retaining & excavation support",

      "quality.kicker": "Quality Assurance",
      "quality.title": "Certified Quality. Every Pile.",
      "quality.lead": "Independent testing and full audit-ready documentation — issued in English, referencing GB50007, JGJ106 and BS EN ISO 22477. Complete traceability for every pile: borehole logs, pour records, cage inspection certificates and test results.",
      "quality.q1.t": "Kentledge Static Load Test",
      "quality.q1.d": "Concrete block reaction verifies pile bearing capacity — the gold standard for pile acceptance, accepted by all Nigerian consultants.",
      "quality.q2.t": "Self-Balancing Test (O-Cell)",
      "quality.q2.d": "Hydraulic load box tests shaft friction and toe resistance independently — no heavy kentledge, ideal for restricted sites.",
      "quality.q3.t": "Low-Strain Integrity Test (PIT)",
      "quality.q3.d": "Rapid stress-wave screening of pile shaft continuity — suitable for 100% QA survey.",
      "quality.q4.t": "Cross-Hole Sonic Logging (CSL)",
      "quality.q4.d": "Ultrasonic pulse between pre-installed tubes pinpoints concrete defects by depth — industry standard for Ø600mm+ piles.",

      "why.kicker": "Why Titan",
      "why.title": "Four Reasons to Build With Us.",
      "why.w1.t": "Local Presence",
      "why.w1.d": "Registered Nigerian company. Team and equipment permanently in Lagos — 48-hour response guaranteed.",
      "why.w2.t": "International Standards",
      "why.w2.d": "GB & BS EN execution. English-language docs accepted by all Lagos consultants and lenders.",
      "why.w3.t": "Real Capacity",
      "why.w3.d": "SUNWARD fleet on the ground — Ø2.4m / 80m depth. Available now, not promises.",
      "why.w4.t": "Single Responsibility",
      "why.w4.d": "Design → Construction → Testing. One contract, one contact, zero coordination risk.",
      "why.banner.t": "Scalable Fleet — China to Nigeria on Demand",
      "why.banner.d": "Additional rotary rigs, mixing machines and testing equipment in China available for maritime deployment for large-scale contracts. We scale with your project.",

      "field.nosupport": "Your browser does not support video playback.",
      "field.kicker": "From the Field",
      "field.title": "Watch Our Work.",
      "field.p": "Real sites, real numbers, real life in Lagos. Follow the founder's daily record of building pile foundations in Nigeria — no hype, no staging.",
      "field.tiktok": "TikTok",
      "field.douyin": "抖音 Douyin",

      "contact.kicker": "Get In Touch",
      "contact.title": "Ready when your project is.",
      "contact.sub": "Quotations, technical queries and site visits — we respond within one business day.",
      "contact.c1.t": "Location",
      "contact.c1.d": "Lagos, Nigeria<br>CFHP+583, Wellington Ln, Nike Art Gallery Rd,<br>off Ayo Makun St, Ikate Elegushi, Lekki 106104",
      "contact.c2.t": "Phone / WhatsApp",
      "contact.c2.sub": "Project Enquiries",
      "contact.c3.t": "Email",
      "contact.c3.sub": "Quotations · Technical Queries",
      "contact.c4.t": "Office Hours",
      "contact.c4.d": "Mon – Sat, 08:00–18:00<br>West Africa Time (WAT)",
      "contact.cta.lead": "Discuss your project directly on WhatsApp",
      "contact.cta.btn": "Chat on WhatsApp",

      "footer.tag": "Your Foundation. Built Right.",
      "footer.legal": "Registered in Nigeria · FIRST TITAN ENGINEERING LTD · RC 9823352",
      "footer.nav": "Explore",
      "footer.contact": "Contact",
      "footer.credit": "Company website · built from the Titan Foundations Company Profile"
    },

    zh: {
      "a11y.skip": "跳到主要内容",
      "a11y.lang": "切换语言",
      "meta.title": "泰坦基础工程 — 你的地基，交给专业。| 尼日利亚拉各斯",
      "meta.desc": "泰坦基础工程公司（Titan Foundations）——尼日利亚拉各斯专业桩基与地基处理工程公司。旋挖灌注桩最大桩径 2.4m、桩深 80m，PHC 预制桩、钢板桩、高压旋喷、深基坑支护、桩基检测与设备租赁。",

      "nav.about": "关于我们",
      "nav.services": "服务",
      "nav.fleet": "设备",
      "nav.projects": "项目",
      "nav.quality": "质量",
      "nav.contact": "联系",
      "nav.cta": "获取报价",

      "hero.eyebrow": "泰坦基础 · 基础工程 · 尼日利亚拉各斯",
      "hero.title": "你的地基，<br><span>交给专业。</span>",
      "hero.sub": "专注桩基工程与地基处理，为拉各斯最严苛的开发项目提供专业解决方案——本地深耕的团队，加上国际水准的设备。",
      "hero.cta1": "查看服务",
      "hero.cta2": "联系我们",
      "hero.stat1": "年行业经验",
      "hero.stat2": "最大桩径",
      "hero.stat3": "最大桩深",
      "hero.stat4": "安全记录",

      "about.badge": "年桩基工程经验",
      "about.kicker": "关于我们",
      "about.title": "中国工程技术，扎根拉各斯。",
      "about.p1": "泰坦基础工程公司（Titan Foundations）是注册于尼日利亚、总部位于拉各斯的专业基础工程公司。我们将中国先进的施工技术与常驻本地的团队相结合，提供既符合国际工程标准、又适应尼日利亚市场现实的基础工程解决方案。Titan Foundations 是 FIRST TITAN ENGINEERING LTD 的品牌名，已在尼日利亚公司注册局（CAC）注册，注册号 RC 9823352。",
      "about.p2": "我们的服务覆盖基础工程全流程——从岩土勘察与方案设计，到桩基施工与地基处理，再到认证荷载试验与质检文件。从第一根桩到最终报告，全程一个责任方。",
      "about.point1": "深耕本地：熟悉维多利亚岛与伊科伊的滨海软土、拥挤的城市工地，以及莱基的积水地块。",
      "about.point2": "国际标准：按 GB 与 BS EN 标准施工，提供认证的英文文件。",
      "about.point3": "责任唯一：从方案设计到最终检测报告，一个责任方。",
      "about.cta": "联系我们",

      "services.kicker": "核心服务",
      "services.title": "我们做什么",
      "services.sub": "覆盖基础工程全流程——从设计到认证检测，全程一个责任方。",
      "services.s1.t": "桩基工程施工",
      "services.s1.d": "旋挖灌注桩最大桩径 2,400mm、桩深 80m，兼营 PHC 预制桩与钢板桩。按 GB 与 BS EN 标准施工，多台钻机快速进场。",
      "services.s1.tags": "旋挖灌注桩 · PHC 预制桩 · 钢板桩",
      "services.s2.t": "基础方案设计",
      "services.s2.d": "基于岩土数据给出优化方案，提供完整计算书与图纸——设计与施工一体化，有效控制成本。",
      "services.s2.tags": "岩土分析 · 设计施工一体化",
      "services.s3.t": "地基处理",
      "services.s3.d": "高压旋喷注浆、双轴/三轴水泥土搅拌桩，处理拉各斯滨海软土与不良回填土层。",
      "services.s3.tags": "高压旋喷 · 深层搅拌",
      "services.s4.t": "深基坑支护",
      "services.s4.d": "地下室挡土墙、CSM 止水帷幕、钢板桩支护体系、内支撑与降水，全程连续现场监测。",
      "services.s4.tags": "地下室挡墙 · CSM 帷幕 · 降水",
      "services.s5.t": "桩基检测",
      "services.s5.d": "自平衡法（O-Cell）、堆载法静载试验、低/高应变动力检测、跨孔声波透射检测——出具认证英文报告。",
      "services.s5.tags": "静载 · O-Cell · 低/高应变 · 声波透射",
      "services.s6.t": "设备租赁",
      "services.s6.d": "山河智能 SWDM220-II 旋挖钻机、搅拌桩机、旋喷机、静压桩机等设备，带操作手与维保支持。",
      "services.s6.tags": "带操作手 · 维保支持",

      "fleet.kicker": "设备实力",
      "fleet.title": "设备，是实力的证明。",
      "fleet.sub": "真实产能就在拉各斯——现在可用，不是空头承诺。",
      "fleet.st1": "台旋挖钻机",
      "fleet.st2": "小时内到达拉各斯任一工地",
      "fleet.st3": "台配套设备在役",
      "fleet.st4": "国内备机随时海运支援",
      "fleet.e1.t": "旋挖钻机",
      "fleet.e1.d": "山河智能 SWDM220-II · 最大桩径 2,400mm · 桩深 80m · 扭矩 220 kN·m",
      "fleet.e2.t": "高压旋喷机",
      "fleet.e2.d": "高压三重管系统 · 桩径 300–1,200mm · 深度 30m+",
      "fleet.e3.t": "三轴搅拌桩机",
      "fleet.e3.d": "CSM / SMW 工法 · 止水帷幕 · 深度 35m",
      "fleet.e4.t": "双轴搅拌桩机",
      "fleet.e4.d": "软土处理 · 水泥土搅拌墙",
      "fleet.e5.t": "静压桩机",
      "fleet.e5.d": "最大 6,000 kN · PHC 预制桩 · 零振动、低噪音",
      "fleet.e6.t": "成孔钻机",
      "fleet.e6.d": "回转/冲击成孔 · 岩层与卵石层 · 可配护筒",

      "projects.kicker": "项目业绩",
      "projects.title": "重点项目 · 现场验证",
      "projects.p1.tag": "住宅 · 高层",
      "projects.p1.t": "维多利亚岛 20 层塔楼",
      "projects.p1.d": "旋挖灌注桩 · 山河智能 SWDM220-II",
      "projects.p2.tag": "工业 · 基础",
      "projects.p2.t": "拉法基水泥厂扩建",
      "projects.p2.d": "尼日利亚拉各斯",
      "projects.p3.tag": "教育园区",
      "projects.p3.t": "大学多栋校区",
      "projects.p3.d": "多栋教学楼基础工程",
      "projects.p4.tag": "深基坑",
      "projects.p4.t": "会展中心三期",
      "projects.p4.d": "深基坑开挖与支护",
      "projects.p5.tag": "城市开发",
      "projects.p5.t": "深基坑地下室支护",
      "projects.p5.d": "地下室支护与挡土墙",
      "projects.p6.tag": "城市基坑支护",
      "projects.p6.t": "钢板桩工程",
      "projects.p6.d": "钢板桩支护与基坑支护",

      "quality.kicker": "质量保障",
      "quality.title": "认证质量 · 每根桩",
      "quality.lead": "独立检测与完整可审计文件——全部以英文出具，参照 GB50007、JGJ106 与 BS EN ISO 22477。每根桩全程可追溯：钻孔记录、浇筑记录、钢筋笼检验证书与检测结果。",
      "quality.q1.t": "堆载法静载试验",
      "quality.q1.d": "以混凝土块作为反力验证桩基承载力——桩基验收的黄金标准，获尼日利亚所有咨询工程师认可。",
      "quality.q2.t": "自平衡法（O-Cell）",
      "quality.q2.d": "预埋液压荷载箱分别测试桩侧摩阻与端阻力——无需大型堆载，适合受限场地。",
      "quality.q3.t": "低应变完整性检测（PIT）",
      "quality.q3.d": "通过应力波快速筛查桩身完整性——适合 100% 全数检测。",
      "quality.q4.t": "跨孔声波透射检测（CSL）",
      "quality.q4.d": "预埋管间超声波脉冲精确定位桩身缺陷深度——Ø600mm 以上灌注桩的行业标准。",

      "why.kicker": "为什么选择泰坦",
      "why.title": "选择我们的四个理由",
      "why.w1.t": "本地实体",
      "why.w1.d": "尼日利亚注册公司，团队与设备常驻拉各斯——48 小时响应。",
      "why.w2.t": "国际标准",
      "why.w2.d": "按 GB 与 BS EN 标准施工，英文文件获拉各斯顾问与贷款机构认可。",
      "why.w3.t": "真实产能",
      "why.w3.d": "山河智能机队就在现场——桩径 2.4m、桩深 80m，即到即干，不是空头承诺。",
      "why.w4.t": "责任唯一",
      "why.w4.d": "设计 → 施工 → 检测，一纸合同、一个对接人、零协调风险。",
      "why.banner.t": "可扩展机队——中国备机，海运直达",
      "why.banner.d": "国内另有旋挖钻机、搅拌桩机与检测设备，可为大型项目海运部署。项目多大，我们就能配多大。",

      "field.nosupport": "您的浏览器不支持视频播放。",
      "field.kicker": "工地现场",
      "field.title": "看我们的工地",
      "field.p": "真实的工地、真实的数字、真实的拉各斯生活。关注创始人老李在尼日利亚打桩的每日记录——不吹牛、不摆拍。",
      "field.tiktok": "TikTok",
      "field.douyin": "抖音 Douyin",

      "contact.kicker": "联系我们",
      "contact.title": "项目随时可以开始",
      "contact.sub": "报价、技术咨询与工地考察——一个工作日内回复。",
      "contact.c1.t": "地址",
      "contact.c1.d": "尼日利亚拉各斯·莱基伊卡特埃莱古希<br>威灵顿巷 CFHP+583（Nike 美术馆路旁，Ayo Makun 街内）<br>邮编 106104",
      "contact.c2.t": "电话 / WhatsApp",
      "contact.c2.sub": "项目咨询",
      "contact.c3.t": "邮箱",
      "contact.c3.sub": "报价 · 技术咨询",
      "contact.c4.t": "营业时间",
      "contact.c4.d": "周一至周六 08:00–18:00<br>西非时间（WAT）",
      "contact.cta.lead": "直接在 WhatsApp 沟通您的项目",
      "contact.cta.btn": "打开 WhatsApp 咨询",

      "footer.tag": "你的地基，交给专业。",
      "footer.legal": "尼日利亚注册公司 · FIRST TITAN ENGINEERING LTD · 注册号 RC 9823352",
      "footer.nav": "网站导航",
      "footer.contact": "联系方式",
      "footer.credit": "公司官网 · 基于《泰坦公司宣传页》制作"
    }
  };

  var STORAGE_KEY = "titan-lang";

  function detectLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* private mode */ }
    if (saved === "en" || saved === "zh") { return saved; }
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("zh") === 0 ? "zh" : "en";
  }

  function applyLang(lang) {
    var dict = I18N[lang];
    var nodes = document.querySelectorAll("[data-i18n], [data-i18n-html]");
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var key = node.getAttribute("data-i18n") || node.getAttribute("data-i18n-html");
      if (dict[key] === undefined) { continue; }
      if (node.hasAttribute("data-i18n-html")) {
        node.innerHTML = dict[key];
      } else {
        node.textContent = dict[key];
      }
    }

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = dict["meta.title"];
    var meta = document.querySelector('meta[name="description"]');
    if (meta) { meta.setAttribute("content", dict["meta.desc"]); }

    var toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.textContent = lang === "en" ? "中文" : "English";
      toggle.setAttribute("aria-label", dict["a11y.lang"]);
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  /* ---------- header + mobile nav ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) { header.classList.toggle("scrolled", window.scrollY > 8); }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    function closeNav() {
      navToggle.classList.remove("open");
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
    navToggle.addEventListener("click", function () {
      var open = mainNav.classList.toggle("open");
      navToggle.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", String(open));
    });
    mainNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { closeNav(); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { closeNav(); }
    });
  }

  var langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var next = document.documentElement.lang === "zh-CN" ? "en" : "zh";
      applyLang(next);
    });
  }

  /* ---------- scroll reveals ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- init ---------- */
  applyLang(detectLang());
})();
