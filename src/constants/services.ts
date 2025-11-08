export interface Service {
  id: number;
  title: string;
  description: string;
  backgroundImage: string;
  features?: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Build responsive, scalable web applications using cutting-edge technologies. From frontend to backend, we create seamless digital experiences.",
    backgroundImage: "/assets/vectors/vector1.png",
    features: ["React & Next.js", "Responsive Design", "Performance Optimized"],
  },
  {
    id: 2,
    title: "App Development",
    description:
      "Create native and cross-platform mobile applications that engage users. We develop iOS and Android apps with intuitive interfaces.",
    backgroundImage: "/assets/vectors/vector2.png",
    features: ["iOS & Android", "Native Performance", "User Focused"],
  },
  {
    id: 3,
    title: "Game Development",
    description:
      "Develop immersive gaming experiences with stunning graphics and engaging gameplay. Our team creates games across multiple platforms.",
    backgroundImage: "/assets/vectors/vector3.png",
    features: ["3D Graphics", "Physics Engine", "Multiplayer Support"],
  },
  {
    id: 4,
    title: "UX/UI Design",
    description:
      "Craft beautiful and intuitive user interfaces that delight users. We focus on usability, accessibility, and visual excellence.",
    backgroundImage: "/assets/vectors/vector4.png",
    features: ["User Research", "Prototyping", "Design Systems"],
  },
  {
    id: 5,
    title: "AI-Powered Development",
    description:
      "Leverage artificial intelligence to build intelligent solutions. We integrate ML models for predictive analytics and automation.",
    backgroundImage: "/assets/vectors/vector1.png",
    features: ["Machine Learning", "Data Analytics", "Automation"],
  },
  {
    id: 6,
    title: "Consultation Service",
    description:
      "Expert guidance for your digital transformation journey. We analyze your needs and recommend tailored solutions for growth.",
    backgroundImage: "/assets/vectors/vector2.png",
    features: [
      "Strategy Planning",
      "Tech Stack Evaluation",
      "Implementation Roadmap",
    ],
  },
  {
    id: 7,
    title: "Brand Identity Design",
    description:
      "Create memorable brand experiences that resonate with your audience. From logos to complete visual systems, we build strong identities.",
    backgroundImage: "/assets/vectors/vector3.png",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
  },
];
