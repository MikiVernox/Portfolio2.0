// Named exports (se vuoi importarli singolarmente)
export const profileData = {
  name: "Michele Domenico Vernone",
  pronouns: "he/him",
  title: "Game Developer",
  location: "Bari, Italy",
  email: "vernonemichele@proton.me",
  website: "solo.to/mikivernox",
  phone: "+39 392 956 292",
  avatar: "👨‍💻",
  intro: "Hi! I'm Michele Domenico Vernone, a Game Developer with a passion for learning and acquiring new knowledge.",
  bio: "I specialize in C#, C++, Python, Unity, and Unreal Engine, and I'm always eager to explore new technologies and tools to enhance my skills.\n I love creating immersive gaming experiences and pushing the boundaries of what's possible in game development.\n Feel free to explore my portfolio and check out some of the projects I've worked on!",
  skills: {
    languages: ["C#", "C++", "Python", "GDScript"],
    engines: ["Unity", "Unreal Engine 5", "Godot", "RPGMaker"],
    tools: ["Git", "GitHub", "Fork", "Visual Studio", "Aseprite", "Trello"]
  }
};

export const projects = [
  {
    id: 1,
    title: "Platformer Game 3D",
    type: "Unreal Engine 5 • Blueprint • 2023",
    description: "This is a 3D platformer game developed using Unreal Engine 5, programmed in blueprints.\n \nThe game features obstacles, collectibles and enemies to defeat.",
    tags: ["Unreal Engine 5", "Blueprint", "Single Player"],
    gradient: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10",
    link: "https://drive.google.com/file/d/1--uCQ5ndHT3ahnJhcFeXjyDzUwxbeR53/view",
    videoId: "cphixyuUIOw?autoplay=1&mute=1&loop=1&playlist=cphixyuUIOw&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1",
    accentColor: "violet"
  },
  // altri progetti...
  {
    id: 2,
    title: "Puzzle Game 3D",
    type: "Unreal Engine 5 • C++ • 2023",
    description: "This game is developed on Unreal Engine 5, programmed in C++.\n\nThis is a 3D puzzle game, featuring intricate puzzles and collectibles.",
    tags: ["Unreal Engine 5", "C++", "Single Player"],
    link: "https://github.com/MikiVernox/UE5_CPP_EXAM/tree/Dev",
    videoId: "bd5ba8WMeaI?autoplay=1&mute=1&loop=1&playlist=bd5ba8WMeaI&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1",
    gradient: "from-emerald-500/10 via-green-500/10 to-lime-500/10",
    accentColor: "emerald"
  },

  {
    id: 3,
    title: "Last Resort",
    type: "Custom Engine • C# • 2022",
    description: "This is a 2D game developed on a custom engine using C#, AIV 2D libraries, all programmed by myself for an academic project.\n The game features different scenes, movement point and click and with collectibles.",
    tags: ["Custom Engine", "C#", "Single Player"],
    link: "https://drive.google.com/file/d/153Dr-GIZam_EHlXAWJbVAbqtXPmADUi-/view",
    videoId: "VP58uTCQcfQ?autoplay=1&mute=1&loop=1&playlist=VP58uTCQcfQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1",
    gradient: "from-rose-500/10 via-pink-500/10 to-fuchsia-500/10",
    accentColor: "rose"
  },

  {
    id: 4,
    title: "Dungeon Of Gusto",
    type: "Unreal Engine 5 • C++ • Blueprint • 2025",
    description: "This is a 3D isometric action game combining fast-paced combat and wave defense., developed on Unreal Engine 5.\n\nDefeat monsters to collect ingredients, then protect your food truck as it cooks dishes while surviving relentless enemy waves.",
    tags: ["Unreal Engine 5", "C++", "Blueprint", "Single Player"],
    link: "",
    videoId: "tk79ZL6MWhw?autoplay=1&mute=1&loop=1&playlist=tk79ZL6MWhw&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1",
    gradient: "from-orange-500/10 via-red-500/10 to-yellow-500/10",
    accentColor: "orange"
  },
];

export const experience = [
  // dati esperienza...
  {
  id: 1,
    role: "Freelance Game Developer",
    period: "December 2025 - January 2026",
    company: "Umbra Interactive",
    location: "Remote",
    description: "Collaborated with Umbra Interactive to develop card abilities for their digital card game 'Gudnak'. Utilized Gdscript to implement unique card mechanics and ensure seamless integration within the game's existing framework.",
    current: false,
  },
];

export const education = [
  // dati educazione...
];

export const certifications = [
  // certificazioni...
  {
    id: 1,
    name: "First year Game Developer Certificate", 
    issuer: "AIV01 - Accademia Italiana Videogiochi",
    year: "2023",
    image: "./First_Year_Certificate.png"
  },

  {
    id: 2,
    name: "Second year Game Developer Certificate",
    issuer: "AIV01 - Accademia Italiana Videogiochi",
    year: "2024",
    image: "./Second_Year_Certificate.png"
  },
  
  {
    id: 3,
    name: "Third year Game Developer Certificate",
    issuer: "AIV01 - Accademia Italiana Videogiochi",
    year: "2025",
    image: "./Third_Year_Certificate.png"
  },

  {
    id: 4,
    name: "Soft Skills Certificate",
    issuer: "AIV01 - Accademia Italiana Videogiochi",
    year: "2024",
    image: "./SK_Year_Certificate.png"
  },
];

// Default export (per i componenti che importano portfolioData)
const portfolioData = {
  profile: profileData,
  projects,
  experience,
  education,
  certifications
};

export default portfolioData;