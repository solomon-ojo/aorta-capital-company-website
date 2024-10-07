interface CompaniesType {
  name: string;
  description: string;
  details: string;
  imageUrl: string;
  imageUrl2: string;
  imageUrl3: string;
  logo: string;
  url: string;
  path: string;
  why: string;
  industry: any;
  team: any;
  location: any;
}

interface BlogPostTypes {
  id: number;
  author: string;
  title: string;
  description: string;
  avatar_src: string;
  created_at: string;
  likes: string;
  comment: string;
  post_img: string;
  unique_id: string;
  position: string;
}

export const companies: CompaniesType[] = [
  {
    name: "Nulgen",
    description: "AI Powered e-learning platform and career companion",
    details:
      "Nulgen empowers learners through a free, AI-driven eLearning platform, offering personalized courses and interactive experiences, utilizing open-source content to enhance skills and knowledge anytime, anywhere.",
    imageUrl: "/assets/company/nulgen2.png",
    imageUrl2: "/assets/company/nulgen.png",
    imageUrl3: "/assets/company/nulgen2.jpg",
    logo: "/assets/logo/logo.svg",
    url: "nulgen.com",
    path: "https://nulgen.com",
    why: "Access to quality education is often limited by high costs and restricted resources, leaving many learners without opportunities to advance their skills and knowledge. Nulgen’s free, AI-powered eLearning platform democratizes education by leveraging open-source materials, providing personalized, accessible, and high-quality learning experiences for everyone, anytime, anywhere.",
    industry: ["Technology", "Artificial Intelligence", "E-learning"],
    team: ["Ailemen Victor", "Blossom Anukposi", "Ayomide Samuel"],
    location: ["Germany", "Nigeria", "United Kingdom"],
  },
  {
    name: "Viola",
    description: "Internship and job experience for high school students",
    details:
      "Viola connects high school students with valuable internship and job experience opportunities, helping them gain real-world skills and build their career paths early. We specialize in bridging the gap between education and the workforce, offering students a head start in exploring their passions and preparing for the future.",
    imageUrl: "/assets/company/viola2.jpg",
    imageUrl2: "/assets/company/viola1.png",
    imageUrl3: "/assets/company/hexis.jpg",
    logo: "/assets/logo/logo.svg",
    url: "viola.com",
    path: "https://viola.com",
    why: "High school students often struggle to find meaningful internships and job experiences that provide them with practical skills and career insights. Without these opportunities, students enter the workforce or higher education underprepared and without a clear direction for their future. Viola’s specialized job board connects high school students with tailored internship and work experience opportunities, designed to help them explore career paths, gain real-world skills, and build confidence for their future. By partnering with forward-thinking companies, we ensure students have access to early career-building experiences, setting them up for long-term success.",
    industry: ["Technology", "Artificial Intelligence", "HR"],
    team: ["Deborah Oleg", "Biola Williams", "Seun Emmanuel"],
    location: ["Germany", "Nigeria", "United Kingdom"],
  },
  {
    name: "Teresa-Med",
    description: "Free, virtual healthcare",
    details:
      "Provides free, virtual healthcare services to ensure everyone has access to quality medical care, regardless of their location or financial situation. Through our easy-to-use platform, individuals can connect with licensed healthcare professionals from the comfort of their homes, receiving expert advice, consultations, and treatment recommendations at no cost.",
    imageUrl: "/assets/company/teresamed.png",
    imageUrl2: "/assets/company/teresamed2.png",
    imageUrl3: "/assets/company/hexis.jpg",
    logo: "/assets/logo/logo.svg",
    url: "teresamed.com",
    path: "https://teresamed.com",
    why: "Millions of people lack access to affordable, convenient healthcare due to geographical barriers, high costs, or limited availability of medical professionals. Teresa med offers free, virtual healthcare services that eliminate these barriers, ensuring accessible, high-quality healthcare for everyone, regardless of location or financial circumstances.",
    industry: ["Technology", "Healthcare", "VR"],
    team: ["Noela Verite", "Esther Babatunde", "Thompson Itepu"],
    location: ["USA", "Nigeria", "United Kingdom"],
  },
  {
    name: "Ezra",
    description: "Church database and AI Bot",
    details:
      "Ezra offers secure data storage and AI-powered search solutions tailored for churches. We help organizations manage and access their digital resources with ease, allowing members and leaders to quickly find answers to important queries through an intelligent, church-specific search bot.",
    imageUrl: "/assets/company/ezzra2.jpg",
    imageUrl2: "/assets/company/yellowsun3.jpg",
    imageUrl3: "/assets/company/ezzra.jpg",
    logo: "/assets/logo/logo.svg",
    url: "ezra.com",
    path: "https://ezzra.vercel.app/",
    why: "Churches often struggle with organizing and accessing their vast amounts of digital resources. Ezra provides secure data storage and an AI-powered search bot tailored specifically for churches, enhancing church operations and strengthening community connections.",
    industry: ["Technology", "Artificial Intelligence", "Religion"],
    team: ["Solomon Ojo", "John Opalu", "Aminu Mohammed"],
    location: ["USA", "Europe", "Africa"],
  },
  {
    name: "Molus",
    description: "International shipping, optimized with Machine Learning",
    details:
      "Molus leverages advanced machine learning to optimize international shipping processes, ensuring faster, more efficient, and cost-effective global logistics. By analyzing vast amounts of shipping data, we provide intelligent solutions that improve route planning, reduce delays, and streamline supply chain operations for businesses worldwide.",
    imageUrl: "/assets/company/molus.jpg",
    imageUrl2: "/assets/company/molus3.jpg",
    imageUrl3: "/assets/company/molus4.jpg",
    logo: "/assets/logo/logo.svg",
    url: "molus.com",
    path: "https://molus.com",
    why: "International shipping often faces challenges including delays, high costs, and inefficient route planning. Molus utilizes machine learning to optimize global logistics, providing insights to enhance route planning, reduce costs, and improve delivery times.",
    industry: ["Technology", "Machine Learning", "Logistics"],
    team: ["Micheal Olusegun", "Ahmed Kazeem", "Anibaba Tayo"],
    location: ["USA", "Europe", "Nigeria"],
  },
  {
    name: "Papperboy",
    description: "Seamless payment processing for eCommerce businesses",
    details:
      "Papperboy specializes in seamless payment processing solutions for eCommerce businesses. We empower online retailers with secure, efficient, and user-friendly payment options, ensuring a smooth checkout experience for customers.",
    imageUrl: "/assets/company/papperboy.jpg",
    imageUrl2: "/assets/company/molus5.jpg",
    imageUrl3: "/assets/company/papperboy2.png",
    logo: "/assets/logo/logo.svg",
    url: "papperboy.com",
    path: "https://papperboy.com",
    why: "Many eCommerce businesses struggle with complicated, unreliable payment processing systems. Papperboy provides streamlined payment processing solutions, enhancing the checkout experience and ensuring secure transactions.",
    industry: ["Technology", "Finance", "Ecommerce"],
    team: ["Seun Fasuyi", "Precious Fadipe", "Oladimeji Oladele"],
    location: ["USA", "Europe", "Africa"],
  },
  {
    name: "Wasabi",
    description: "AI Legal assistant",
    details:
      "Wasabi AI assistant is designed to enhance efficiency, accuracy, and productivity. By streamlining legal workflows and providing instant access to legal information and advice, it helps lawyers draft contracts, research legal topics, and more, saving time and resources.",
    imageUrl: "/assets/company/wasabi.jpg",
    imageUrl2: "/assets/company/getwasabi.jpg",
    imageUrl3: "/assets/company/ezzra.jpg",
    logo: "/assets/logo/logo.svg",
    url: "wasabi.com",
    path: "https://wasabi.com",
    why: "The legal industry faces overwhelming workloads and high costs. Wasabi AI-powered legal assistant helps automate routine tasks and provides instant legal information, improving efficiency and reducing costs for lawyers.",
    industry: ["Technology", "Artificial Intelligence", "Legal"],
    team: ["Rebecca Sojinu", "Bukola Williams", "Rolake Adesina"],
    location: ["USA", "Europe", "Africa"],
  },
  {
    name: "Bourgeon",
    description: "Startup studio tailored for founders",
    details:
      "Bourgeon is a startup studio that partners with exceptional founders to build groundbreaking companies. We provide the resources, expertise, and network needed to accelerate growth and achieve lasting success.",
    imageUrl: "/assets/company/bourgeon2.png",
    imageUrl2: "/assets/company/bourgeon4.jpg",
    imageUrl3: "/assets/company/bourgeon5.png",
    logo: "/assets/logo/logo.svg",
    url: "bourgeon.com",
    path: "https://bourgeon.com",
    why: "Aspiring entrepreneurs often face significant challenges, such as lack of funding, industry knowledge, and the complexity of scaling startups, which often lead to failure before reaching the market. Bourgeon addresses these challenges by offering a comprehensive support system, including funding, mentorship, and resources to refine business concepts and successfully launch ventures. Our focus on collaboration and agility empowers founders to overcome obstacles and achieve sustainable growth.",
    industry: ["Technology", "Business Development", "Software"],
    team: ["Solomon Ojo", "Biola Williams", "Precious Fadipe"],
    location: ["USA", "Europe", "Nigeria"],
  },
  {
    name: "Yellowsun",
    description: "Remote freelance jobs for African talents",
    details:
      "Yellowsun connects African talents with remote freelance opportunities, empowering skilled professionals to work from anywhere while tapping into the global market. The mission is to bridge the gap between talented individuals and employers seeking diverse, remote talent, fostering economic growth and opportunity across the continent.",
    imageUrl: "/assets/company/yellowsun3.jpg",
    imageUrl2: "/assets/company/hexis.jpg",
    imageUrl3: "/assets/company/yellowsun.png",
    logo: "/assets/logo/logo.svg",
    url: "yellowsun.com",
    path: "https://yellowsun.com",
    why: "Many skilled professionals in Africa face challenges in accessing quality freelance opportunities due to geographical limitations, lack of exposure to global markets, and limited platforms that cater specifically to their needs. Yellowsun addresses these issues by providing a dedicated space for African talents to connect with remote freelance jobs worldwide, supporting economic growth and helping talented individuals thrive.",
    industry: ["Technology", "Business Development", "Software"],
    team: ["Bankole Samuel", "Bolaji Ojo", "Oladele Oladimeji"],
    location: ["USA", "Europe", "Nigeria"],
  },
  {
    name: "Thesislab",
    description: "AI Thesis writer and collaborative platform",
    details:
      "Thesislab is an AI-powered platform designed to help students, researchers, and academics create well-structured, comprehensive theses and research papers. The platform provides an intelligent writing assistant, collaboration tools, and access to research databases, streamlining the writing process and enhancing academic output.",
    imageUrl: "/assets/company/thesislab.png",
    imageUrl2: "/assets/company/thesislab1.png",
    imageUrl3: "/assets/company/thesislab2.jpg",
    logo: "/assets/logo/logo.svg",
    url: "thesislab.com",
    path: "https://thesislab.com",
    why: "Writing a thesis or research paper can be overwhelming, with students and researchers often struggling with the complexity of structuring and organizing their ideas effectively. Thesislab simplifies the writing process with AI-powered tools, offering suggestions, feedback, and resources to enhance academic writing quality and ensure timely completion. By fostering collaboration and providing access to extensive research databases, Thesislab helps scholars produce well-researched, high-quality work.",
    industry: ["Technology", "Artificial Intelligence", "Education"],
    team: ["Oladele Oladimeji", "Ailemen Victor", "Oluwaseun Williams"],
    location: ["USA", "Europe", "Nigeria"],
  },
  {
    name: "MrMan",
    description: "Generative AI for WestAfrica",
    details:
      "Specializes in developing generative AI solutions tailored for the West African market. By harnessing cutting-edge technology, we create innovative applications that address local challenges and enhance various sectors, including education, agriculture, and healthcare. Our mission is to empower communities with AI-driven tools that promote growth, creativity, and sustainable development across the region.",
    imageUrl: "/assets/company/mr_man.jpg",
    imageUrl2: "/assets/company/mr_man1.png",
    imageUrl3: "/assets/company/mr_man2.png",
    logo: "/assets/logo/logo.svg",
    url: "mrman.com",
    path: "https://mrman.com",
    why: "Many sectors in West Africa face unique challenges, such as limited access to technology, inefficient processes, and a lack of localized solutions. This can hinder growth, innovation, and the ability to address pressing issues in education, agriculture, and healthcare. The company develops generative AI solutions specifically designed for the West African market. By creating localized applications that cater to the region's needs, we empower businesses and communities to leverage technology for better decision-making, increased efficiency, and enhanced creativity. Our AI-driven tools facilitate growth and innovation, helping to tackle local challenges and promote sustainable development.",
    industry: ["Technology", "Business Development", "Software"],
    team: ["Kome Micheal", "Mohammed Aminu", "Christelle Amsterdam"],
    location: ["Nigeria", "Ghana"],
  },
  {
    name: "Hexis",
    description: "AI powered school and learning management platform",
    details:
      "Hexis AI-powered school and learning management platform revolutionizes education by integrating advanced technology to enhance teaching and learning experiences. The platform empowers educators, students, and parents to collaborate effectively.",
    imageUrl: "/assets/company/hexis.jpg",
    imageUrl2: "/assets/company/hexsis1.jpg",
    imageUrl3: "/assets/company/hexis2.png",
    logo: "/assets/logo/logo.svg",
    url: "hexis.com",
    path: "https://hexis.com",
    why: "Many educational institutions struggle with inefficient administrative processes, lack of personalized learning, and difficulty in tracking student performance. These challenges can hinder effective teaching, overwhelm educators, and prevent students from reaching their full potential. The AI-powered school and learning management platform addresses these issues by automating administrative tasks, offering personalized learning pathways, and providing real-time analytics on student performance. By streamlining operations and enhancing communication among educators, students, and parents, we create a more effective and engaging educational environment that supports student success and empowers teachers.",
    industry: ["Technology", "Artificial Intelligence", "Education"],
    team: ["Tomide Johnson", "Bolu Ajibose", "Bunmi Eyiaro"],
    location: ["USA", "Europe", "Nigeria"],
  },
];

export const teams = [
  {
    name: "Solomon Ojo",
    linkedin: "https://linked.com/denisegilbert",
    picture: "/assets/solomon_ojo.jpg",
  },
  {
    name: "Adenike Tinu",
    linkedin: "https://linked.com/michaeljohnson",
    picture: "/assets/adenike_tinu.jpg",
  },
  {
    name: "Mohammed Aminu",
    linkedin: "https://linked.com/sarahwilliams",
    picture: "/assets/mohammed_aminu.jpg",
  },
  {
    name: "Biola Williams",
    linkedin: "https://linked.com/robertbrown",
    picture: "/assets/biola_williams.jpg",
  },
  {
    name: "Blossom Williams",
    linkedin: "https://linked.com/emilydavis",
    picture: "/assets/blossom_anukposi.jpg",
  },
  {
    name: "Victor Ailemen",
    linkedin: "https://linked.com/jessicataylor",
    picture: "/assets/victor_ailemen.jpg",
  },
];

export const PostObject: BlogPostTypes[] = [
  {
    id: 0,
    author: "Wole Johnson",
    title: "10 Common Software Architectural Patterns in a nutshell",
    description:
      "Ever wondered how large enterprise scale systems are designed? Before major software development starts, we have to choose a",
    avatar_src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    created_at: "Sept 4, 24",
    likes: "14k",
    comment: "138",
    post_img: "/assets/testimgimg.jpg",
    unique_id: "SDA21CZ",
    position: "Marketing",
  },
  {
    id: 1,
    author: "Grace James",
    title: "Understanding RESTful APIs",
    description:
      "A quick guide to understanding RESTful APIs and their importance in modern web applications.",
    avatar_src: "https://i.pravatar.cc/150?u=a042581f4e29026024e",
    created_at: "Aug 29, 24",
    likes: "8.2k",
    comment: "92",
    post_img: "/assets/about2.png",
    unique_id: "SDP21CZ",
    position: "Developer",
  },
  {
    id: 2,
    author: "John Doe",
    title: "Microservices: The Future of Scalable Systems",
    description:
      "Explore why microservices architecture is becoming the default for building scalable systems.",
    avatar_src: "https://i.pravatar.cc/150?u=a042581f4e29026024f",
    created_at: "Aug 21, 24",
    likes: "22k",
    comment: "215",
    post_img: "/assets/about3.jpg",
    unique_id: "SDA21CX",
    position: "Architect",
  },
  {
    id: 3,
    author: "Anna Wright",
    title: "How to Optimize Frontend Performance",
    description:
      "Frontend performance optimization techniques to ensure faster load times and a better user experience.",
    avatar_src: "https://i.pravatar.cc/150?u=a042581f4e290260240",
    created_at: "Sept 1, 24",
    likes: "9.5k",
    comment: "104",
    post_img: "/assets/about4.jpg",
    unique_id: "SDAIICZ",
    position: "Frontend Engineer",
  },
  {
    id: 4,
    author: "Samuel Green",
    title: "Machine Learning Basics for Beginners",
    description:
      "An introductory guide to machine learning and how it can be applied to various fields.",
    avatar_src: "https://i.pravatar.cc/150?u=a042581f4e290260241",
    created_at: "Sept 3, 24",
    likes: "16k",
    comment: "176",
    post_img: "/assets/about5.jpg",
    unique_id: "SDA21LL",
    position: "Data Scientist",
  },
  {
    id: 5,
    author: "Cynthia Lee",
    title: "The Benefits of TypeScript in Large Projects",
    description:
      "Learn how TypeScript can help make large projects more manageable and reduce bugs.",
    avatar_src: "https://i.pravatar.cc/150?u=a042581f4e290260242",
    created_at: "Sept 2, 24",
    likes: "12.8k",
    comment: "145",
    post_img: "/assets/about6.jpg",
    unique_id: "MS721CZ",
    position: "Software Engineer",
  },
  {
    id: 6,
    author: "James Taylor",
    title: "The Rise of Serverless Architectures",
    description:
      "Discover how serverless architectures are transforming the way we build and deploy applications.",
    avatar_src: "https://i.pravatar.cc/150?u=a042581f4e290260243",
    created_at: "Aug 30, 24",
    likes: "11k",
    comment: "132",
    post_img: "/assets/about7.jpg",
    unique_id: "SDA2PUW",
    position: "Cloud Architect",
  },
  {
    id: 7,
    author: "Emily White",
    title: "The Importance of Cybersecurity in the Modern Era",
    description:
      "Why cybersecurity is crucial for businesses and individuals in the age of digital transformation.",
    avatar_src: "https://i.pravatar.cc/150?u=a042581f4e290260244",
    created_at: "Sept 5, 24",
    likes: "18k",
    comment: "200",
    post_img: "/assets/about8.jpg",
    unique_id: "SDA88TS",
    position: "Security Analyst",
  },
];
