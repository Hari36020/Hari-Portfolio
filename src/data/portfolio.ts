export const skills = [
  'Flutter', 'React', 'React Native', 'Kotlin', 'TypeScript', 'GraphQL', 'Firebase',
  'AWS', 'NodeJS', 'REST', 'Agile', 'Dart', 'PostgreSQL', 'Celigo',
];

export interface Experience {
  company: string;
  period: string;
  role: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    company: "Kent Displays Inc.",
    period: "Sep 2025 – Present",
    role: "Mobile Application Developer",
    description: "Developing Cloud Canvas, a cloud-based digital display platform, by building a cross-platform Flutter (Android/iOS) mobile application that enables users to upload, manage, and display images on connected canvas devices.",
  },
  {
    company: "Serole Technologies",
    period: "Nov 2021 – Aug 2024",
    role: "Software Developer",
    description: "Led insurance app development (PolicyFest), mentored juniors, ran agile sprints with clients",
  },
  {
    company: "Rosemallow Technologies",
    period: "Aug 2021 – Oct 2021",
    role: "Software Developer",
    description: "Delivered courier & food delivery app with real-time order tracking",
  },
  {
    company: "WalkingTree Technologies",
    period: "May 2019 – Aug 2021",
    role: "Associate Software Developer",
    description: "Full stack dev using ExtJS, ReactJS, and Flutter. Handled internal tools and cloud integration",
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string;
  role?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Cloud Canvas – Kent Displays",
    description: "Cloud-based digital display platform with a cross-platform Flutter mobile app for uploading, managing, and displaying images on connected canvas devices. Built backend APIs with AWS Lambda, S3, and DynamoDB. Implemented auth with AWS Amplify & Cognito.",
    tech: "Flutter, AWS Lambda, S3, DynamoDB, Amplify, Cognito, Agile",
    role: "Full Stack Developer | Sep 2025 – Present | Kent, Ohio",
    link: "https://mycloudcanvas.com/",
  },
  {
    title: "PolicyFest & Just Insurance",
    description: "Cross-platform apps for buying health, motor, and vehicle insurance policies",
    tech: "Flutter, GraphQL, Firebase, Secure Payments",
    role: "Lead Developer | 2-person agile team | Live product",
    link: "https://policyfest.com",
  },
  {
    title: "Courier Delivery App",
    description: "Real-time courier and food delivery system with live tracking & BLoC state",
    tech: "Flutter, Google Maps API, WebSocket, Firebase",
    role: "Built and deployed MVP in 4 weeks with full location-based logistics",
  },
  {
    title: "Flutter Advertisement Framework",
    description: "Modular ad widgets (Carousel, Banner, Inline) with API refresh",
    tech: "Flutter, State Management, REST API, Animation",
    link: "https://github.com/Hari36020/FlutterAdvertisementFramework",
  },
  {
    title: "RubyRibbon Data Integration",
    description: "Shopify + Thatcher APIs into AWS Redshift via Celigo",
    tech: "Celigo, AWS Glue, S3, ETL, Python",
    role: "Automated daily data flow to power executive dashboards",
  },
  {
    title: "SafeSure Incident Manager",
    description: "Flutter app for factory incidents with role-based ticket workflow",
    tech: "Flutter, Provider, REST API, Push Notifications",
  },
  {
    title: "EngazeWell",
    description: "Internal org tool for nominations, timesheets, device tracking",
    tech: "ReactJS, Redux, PostgreSQL, Node.js",
    link: "https://engazewell.com/",
  },
];

export const education = [
  {
    degree: "Masters in Data Science",
    school: "Lindsey Wilson University",
    period: "2023–2025",
  },
  {
    degree: "B.Tech in Electronics & Communication",
    school: "Lovely Professional University",
    period: "2015–2019",
  },
];

export const contact = {
  email: "hari36020@gmail.com",
  phone: "+1 405 202 5467",
  github: "https://github.com/Hari36020",
  linkedin: "https://www.linkedin.com/in/hari-krishna-sangakari-517a16100",
};
