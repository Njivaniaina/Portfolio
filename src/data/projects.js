// Centralised project data — imported by homepage preview & project pages
export const projectsData = [
  {
    id: "network-misa",
    title: "Network Administration – MISA",
    shortDesc:
      "Network Administrator at MISA (Univ. Antananarivo). Managed IT infrastructure, network security and performance.",
    fullDesc: `Network Administrator at MISA (Mathématiques, Informatique et Statistiques Appliquées), University of Antananarivo.
Responsible for the full IT infrastructure: LAN/WAN configuration, server maintenance, network security policies, and performance monitoring.

Key achievements include implementing a centralized monitoring system, reducing downtime by 40%, and enforcing security policies across all lab machines.`,
    image: "/projects/misa.png",
    tags: ["SysAdmin", "Networking", "Infrastructure", "Security"],
    liveUrl: "https://github.com/Njivaniaina/",
    githubUrl: "https://github.com/Njivaniaina/",
    year: "2023",
    role: "Network Administrator",
  },
  {
    id: "digital-library",
    title: "Fonds Patrimoniaux – Digital Library",
    shortDesc:
      "Digital library platform for the University of Antananarivo's Heritage Funds. Built for archiving and public access.",
    fullDesc: `Developed the digital library platform for the University of Antananarivo's Heritage Funds (Fonds Patrimoniaux).
The system allows university staff and the public to access, search and browse digitized academic archives and heritage documents.

Key challenges included building a robust search engine over a large document collection, optimizing load performance for low-bandwidth environments, and ensuring long-term data preservation.`,
    image: "/projects/biblio.png",
    tags: ["Web Development", "Digital Library", "Archives", "PHP"],
    liveUrl: "http://biblio.univ-antananarivo.mg/fonds-patrimoniaux",
    githubUrl: "https://github.com/Njivaniaina/",
    year: "2025",
    role: "Full Stack Developer",
  },
  {
    id: "siansa-backup",
    title: "Science Faculty – Backup System",
    shortDesc:
      "Automated and secure backup system for the Faculty of Sciences (Siansa), ensuring data integrity.",
    fullDesc: `Contributed to the development of an automated and secure backup system for the Faculty of Sciences (Siansa), University of Antananarivo.
The system performs scheduled incremental backups, stores snapshots on both local and remote storage, and sends email alerts on failure.

Technologies used: Bash scripting, rsync, cron, Python for monitoring, and a lightweight web dashboard for status overview.`,
    image: "/projects/siansa.png",
    tags: ["DevOps", "Backup", "Data Security", "Python", "Bash"],
    liveUrl: "https://siansa.univ-antananarivo.mg/",
    githubUrl: "https://github.com/Njivaniaina/",
    year: "2025",
    role: "DevOps Engineer",
  },
  {
    id: "e-car",
    title: "E-Car – Car Marketplace",
    shortDesc:
      "Full-featured e-commerce platform for car sales with vehicle listings, search, filter and admin panel.",
    fullDesc: `Developed a full-featured e-commerce platform dedicated to car sales. The platform features vehicle listings with rich media, advanced search and filter functionality, and a seamless buying experience.

Built with Laravel for the backend and a custom admin panel for managing inventory, orders, and users. The frontend uses Blade templates with responsive CSS.

Key features: vehicle listing management, search/filter by brand/price/year, user authentication, order handling, and a comprehensive admin dashboard with analytics.`,
    image: "/projects/e-car.png",
    tags: ["E-Commerce", "Laravel", "PHP", "Admin Dashboard"],
    liveUrl: "https://github.com/Njivaniaina/e-car",
    githubUrl: "https://github.com/Njivaniaina/e-car",
    year: "2026",
    role: "Full Stack Developer",
  },
  {
    id: "mini-tech",
    title: "Mini-Tech – E-Commerce Parts",
    shortDesc:
      "E-commerce platform for electronic parts built with Symfony. Features product management, cart and checkout.",
    fullDesc: `Mini-Tech is an e-commerce platform built with Symfony, dedicated to selling electronic components and parts.
The platform includes a full product catalog with categories and filters, a shopping cart, user authentication, and a checkout flow with order management.

An admin panel allows managing products, categories, stock levels, and customer orders. The UI is fully responsive and optimized for mobile shoppers.

Key features: product catalog, category filtering, cart & checkout, user accounts, admin panel, order management.`,
    image: "/projects/mini-tech.png",
    tags: ["Symfony", "E-Commerce", "PHP", "Web Development"],
    liveUrl: "https://github.com/Njivaniaina/mini-tech",
    githubUrl: "https://github.com/Njivaniaina/mini-tech",
    year: "2026",
    role: "Full Stack Developer",
  },
];
