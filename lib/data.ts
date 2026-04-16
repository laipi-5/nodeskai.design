export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  coverColor: string;
  year: string;
  tags: string[];
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  /** 可选：项目主文档（如 PDF），置于 public 下 */
  documentUrl?: string;
  /** 可选：详情页顶部封面图（如 PDF 首页导出），置于 public 下 */
  coverImage?: string;
  /** 可选：详情页展示的图片列表 */
  gallery?: string[];
}

export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  description: string;
  type: "feature" | "improvement" | "fix" | "breaking";
  items: string[];
}

export const projects: Project[] = [
  {
    slug: "team-culture-2026-4",
    title: "团队文化",
    description:
      "NoDesk AI 公司团队文化与协作主张的阶段性整理，涵盖价值观、协作方式与视觉表达方向。",
    category: "团队文化",
    coverColor: "from-secondary-purple to-secondary-blue",
    year: "2026",
    tags: ["团队文化", "内部刊物", "PDF"],
    overview:
      "本册为 2026 年 4 月版本的团队文化物料，用于对内对齐团队协作准则与设计理念，并作为产品设计集内可追溯的文化类交付物。",
    challenge:
      "在快速迭代的产品节奏中，如何让文化表达既真诚可感，又能与设计、工程团队的日常决策产生实际连接。",
    solution:
      "以「可阅读、可分享、可迭代」为原则编排内容结构；统一版式与语气，便于在评审、入职与对外交流中复用。",
    results: [
      "形成可版本化的文化 PDF 资产",
      "纳入产品设计集统一展示与分发",
      "支持团队内部按需引用与更新",
    ],
    documentUrl: "/portfolio/team-culture-2026-4.pdf",
    coverImage: "/portfolio/team-culture-2026-4-cover.png",
  },
  {
    slug: "company-merch",
    title: "公司周边",
    description:
      "NoDesk AI 品牌周边产品设计，从创意概念到落地生产，传递品牌温度与团队归属感。",
    category: "品牌周边",
    coverColor: "from-accent-yellow to-accent-orange",
    year: "2026",
    tags: ["周边", "品牌", "实物设计"],
    overview:
      "围绕 NoDesk AI 品牌视觉体系，设计了一系列公司周边产品，包括文化衫、马克杯、贴纸、帆布袋等，用于内部团建、新人入职礼包及对外品牌传播。",
    challenge:
      "如何在实物载体上保持品牌一致性，同时让周边产品兼具实用性与收藏价值，避免沦为一次性赠品。",
    solution:
      "以品牌核心色「掀桌闪电黄」为主线贯穿全系列，结合插画风格和极简排版；材质选型注重品质感，确保日常使用场景下的耐用性与美观度。",
    results: [
      "完成 6 款周边产品的设计与打样",
      "员工满意度调研好评率 96%",
      "对外活动品牌曝光提升 40%",
    ],
    coverImage: "/portfolio/company-merch-cover.png",
    gallery: [
      "/portfolio/company-merch-2.png",
      "/portfolio/company-merch-cover.png",
    ],
  },
  {
    slug: "nodeskai-dashboard",
    title: "NoDesk AI Dashboard",
    description: "企业级数据可视化仪表盘，为复杂数据提供清晰的洞察视角",
    category: "产品设计",
    coverColor: "from-primary to-accent-blue",
    year: "2026",
    tags: ["Dashboard", "Data Viz", "B2B"],
    overview:
      "为 NoDesk AI 平台设计的核心数据仪表盘，通过直观的可视化图表帮助用户快速理解业务数据，支持自定义视图和实时数据更新。",
    challenge:
      "如何在一个页面中同时呈现多维度数据，同时保持界面简洁不杂乱，并确保在不同设备上的良好体验。",
    solution:
      "采用模块化卡片布局，支持拖拽自定义排列。使用渐进式信息展示，默认显示关键指标，深度数据通过交互展开。配色方案确保数据可读性与品牌一致性。",
    results: [
      "用户数据理解效率提升 40%",
      "日活用户增长 25%",
      "获得 2026 年最佳 B2B 设计奖提名",
    ],
  },
  {
    slug: "nodeskai-mobile",
    title: "NoDesk AI Mobile",
    description: "移动端应用设计，随时随地掌控你的工作流",
    category: "移动端设计",
    coverColor: "from-accent-pink to-accent-orange",
    year: "2025",
    tags: ["Mobile", "iOS", "Android"],
    overview:
      "NoDesk AI 移动端应用重新定义了移动办公体验，通过手势交互和智能推送，让用户在手机上也能高效完成核心工作流。",
    challenge:
      "桌面端的复杂功能如何在移动端有限的屏幕空间中保持可用性，同时提供原生级别的流畅体验。",
    solution:
      "重新梳理用户移动场景下的核心需求，精简功能层级。利用手势操作替代复杂菜单，引入卡片式信息流，优先展示最相关内容。",
    results: [
      "App Store 评分 4.8/5",
      "移动端月活增长 60%",
      "用户完成率提升 35%",
    ],
  },
  {
    slug: "nodeskai-design-system",
    title: "NoDesk AI Design System",
    description: "统一的设计语言系统，驱动一致且高效的产品体验",
    category: "设计系统",
    coverColor: "from-accent-green to-accent-cyan",
    year: "2025",
    tags: ["Design System", "Components", "Tokens"],
    overview:
      "构建覆盖全产品线的设计系统，包含 120+ 组件、完整的 Design Token 体系和详细的使用指南，确保跨团队、跨平台的设计一致性。",
    challenge:
      "多个产品线、多个平台之间的设计不一致导致用户体验碎片化，开发效率低下。",
    solution:
      "建立原子化设计体系，从 Token 层到组件层逐级构建。引入自动化工具链实现设计到代码的无缝转换，建立治理机制确保持续演进。",
    results: [
      "设计交付效率提升 50%",
      "开发还原度达到 98%",
      "跨产品体验一致性评分从 62 提升至 94",
    ],
  },
  {
    slug: "nodeskai-website",
    title: "NoDesk AI Official Website",
    description: "品牌官网重设计，传递创新与专业的品牌形象",
    category: "品牌设计",
    coverColor: "from-accent-yellow to-accent-orange",
    year: "2024",
    tags: ["Website", "Branding", "Motion"],
    overview:
      "NoDesk AI 品牌官网的全面重设计，融合现代视觉语言和流畅动效，打造令人印象深刻的品牌第一触点。",
    challenge:
      "旧官网视觉陈旧、转化率低，无法有效传达公司的创新技术实力和专业服务能力。",
    solution:
      "以「连接与流动」为设计概念，运用动态排版、3D 视觉元素和微交互动效，构建沉浸式浏览体验。优化信息架构，明确转化路径。",
    results: [
      "页面停留时间增加 80%",
      "转化率提升 45%",
      "品牌认知度调研提升 30%",
    ],
  },
];

export const changelog: ChangelogEntry[] = [
  {
    version: "2.4.0",
    date: "2026-03-15",
    title: "新增数据可视化组件库",
    description: "引入全新的图表和数据可视化组件，支持多种图表类型和自定义配置",
    type: "feature",
    items: [
      "新增 BarChart、LineChart、PieChart 等 8 种图表组件",
      "支持响应式尺寸和暗色模式",
      "提供统一的数据格式接口",
      "新增图表动画过渡效果",
    ],
  },
  {
    version: "2.3.0",
    date: "2026-02-20",
    title: "Design Token 体系升级",
    description: "全面重构 Design Token 架构，支持多主题和跨平台输出",
    type: "improvement",
    items: [
      "Token 架构从 2 层升级为 3 层（Global → Alias → Component）",
      "新增暗色主题 Token 集",
      "支持导出为 CSS、JSON、Swift、Kotlin 格式",
      "优化语义化命名规范",
    ],
  },
  {
    version: "2.2.1",
    date: "2026-01-10",
    title: "修复表单组件无障碍问题",
    description: "解决多个表单组件的 WCAG 2.1 合规性问题",
    type: "fix",
    items: [
      "修复 Select 组件键盘导航问题",
      "改善 Input 组件的 aria-label 支持",
      "修复 Checkbox 组件在屏幕阅读器中的状态播报",
      "优化焦点指示器的可见性",
    ],
  },
  {
    version: "2.2.0",
    date: "2025-12-05",
    title: "移动端组件适配",
    description: "全面优化组件库在移动端的表现，新增触摸交互支持",
    type: "feature",
    items: [
      "所有组件支持触摸手势操作",
      "新增 BottomSheet、ActionSheet 移动专属组件",
      "优化组件在小屏幕上的布局表现",
      "新增移动端设计规范文档",
    ],
  },
  {
    version: "2.1.0",
    date: "2025-11-01",
    title: "动效系统发布",
    description: "建立统一的动效语言，为所有组件提供一致的动画体验",
    type: "feature",
    items: [
      "定义 4 种标准动效曲线（ease-in、ease-out、spring、bounce）",
      "为 20+ 组件添加入场/退场动画",
      "新增页面过渡动效组件",
      "提供动效时长和缓动函数的 Token",
    ],
  },
  {
    version: "2.0.0",
    date: "2025-10-01",
    title: "Design System 2.0 发布",
    description: "全新架构的设计系统，带来更好的可扩展性和开发体验",
    type: "breaking",
    items: [
      "全新的组件 API 设计，更符合 React 最佳实践",
      "引入 Compound Component 模式",
      "全面支持 TypeScript 类型推导",
      "新增 50+ 组件，总计 120+ 组件",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const designTokens = {
  colors: {
    brand: [
      {
        name: "掀桌闪电黄",
        value: "#FFCB00",
        variable: "--brand-gold",
        description: "Table-Flip Gold · PANTONE 7548U",
      },
      {
        name: "零点暗质蓝",
        value: "#000E1A",
        variable: "--brand-dark",
        description: "Zero Dark Matter · PANTONE 532C",
      },
    ],
    auxiliary: [
      {
        name: "掀桌闪电黄 80%",
        value: "rgba(255, 203, 0, 0.8)",
        variable: "--brand-gold-80",
      },
      {
        name: "掀桌闪电黄 60%",
        value: "rgba(255, 203, 0, 0.6)",
        variable: "--brand-gold-60",
      },
      {
        name: "掀桌闪电黄 40%",
        value: "rgba(255, 203, 0, 0.4)",
        variable: "--brand-gold-40",
      },
      {
        name: "掀桌闪电黄 20%",
        value: "rgba(255, 203, 0, 0.2)",
        variable: "--brand-gold-20",
      },
      {
        name: "零点暗质蓝 80%",
        value: "rgba(0, 14, 26, 0.8)",
        variable: "--brand-dark-80",
      },
      {
        name: "零点暗质蓝 60%",
        value: "rgba(0, 14, 26, 0.6)",
        variable: "--brand-dark-60",
      },
      {
        name: "零点暗质蓝 40%",
        value: "rgba(0, 14, 26, 0.4)",
        variable: "--brand-dark-40",
      },
      {
        name: "零点暗质蓝 20%",
        value: "rgba(0, 14, 26, 0.2)",
        variable: "--brand-dark-20",
      },
    ],
    secondary: [
      { name: "紫色", value: "#7C82FF", variable: "--secondary-purple" },
      { name: "紫色浅", value: "#A3A7FF", variable: "--secondary-purple-light" },
      { name: "紫色淡", value: "#BDC1FF", variable: "--secondary-purple-pale" },
      { name: "深紫", value: "#575BB2", variable: "--secondary-purple-dark" },
      { name: "蓝色", value: "#99D2FF", variable: "--secondary-blue" },
      { name: "蓝色浅", value: "#CCE9FF", variable: "--secondary-blue-light" },
      { name: "蓝色淡", value: "#E5F4FF", variable: "--secondary-blue-pale" },
      { name: "绿色", value: "#91C545", variable: "--secondary-green" },
      { name: "深绿", value: "#679129", variable: "--secondary-green-dark" },
      { name: "绿色淡", value: "#E9F3DA", variable: "--secondary-green-pale" },
      { name: "红色", value: "#F56C6C", variable: "--secondary-red" },
      { name: "红色浅", value: "#FBC4C4", variable: "--secondary-red-light" },
      { name: "红色淡", value: "#FEF0F0", variable: "--secondary-red-pale" },
      { name: "橙色", value: "#BE6828", variable: "--secondary-orange" },
      { name: "橙色浅", value: "#F3B78A", variable: "--secondary-orange-light" },
      { name: "深橙", value: "#783610", variable: "--secondary-orange-dark" },
      { name: "橙色淡", value: "#FCF0E4", variable: "--secondary-orange-pale" },
    ],
  },
  spacing: [
    { name: "4", value: "4px" },
    { name: "8", value: "8px" },
    { name: "12", value: "12px" },
    { name: "16", value: "16px" },
    { name: "20", value: "20px" },
    { name: "24", value: "24px" },
    { name: "32", value: "32px" },
    { name: "40", value: "40px" },
    { name: "48", value: "48px" },
    { name: "64", value: "64px" },
    { name: "80", value: "80px" },
    { name: "96", value: "96px" },
  ],
  radii: [
    { name: "sm", value: "8px", variable: "--radius-sm" },
    { name: "md", value: "12px", variable: "--radius-md" },
    { name: "lg", value: "16px", variable: "--radius-lg" },
    { name: "xl", value: "24px", variable: "--radius-xl" },
    { name: "full", value: "9999px", variable: "--radius-full" },
  ],
  shadows: [
    {
      name: "sm",
      value: "0 1px 3px rgba(108, 92, 231, 0.06)",
      variable: "--shadow-sm",
    },
    {
      name: "md",
      value: "0 4px 12px rgba(108, 92, 231, 0.08)",
      variable: "--shadow-md",
    },
    {
      name: "lg",
      value: "0 12px 32px rgba(108, 92, 231, 0.12)",
      variable: "--shadow-lg",
    },
    {
      name: "xl",
      value: "0 20px 48px rgba(108, 92, 231, 0.16)",
      variable: "--shadow-xl",
    },
  ],
  typography: [
    { name: "Display", size: "64px", weight: "800", lineHeight: "1.1" },
    { name: "H1", size: "48px", weight: "700", lineHeight: "1.2" },
    { name: "H2", size: "36px", weight: "700", lineHeight: "1.25" },
    { name: "H3", size: "28px", weight: "600", lineHeight: "1.3" },
    { name: "H4", size: "22px", weight: "600", lineHeight: "1.4" },
    { name: "Body Large", size: "18px", weight: "400", lineHeight: "1.6" },
    { name: "Body", size: "16px", weight: "400", lineHeight: "1.6" },
    { name: "Body Small", size: "14px", weight: "400", lineHeight: "1.5" },
    { name: "Caption", size: "12px", weight: "500", lineHeight: "1.4" },
  ],
};
