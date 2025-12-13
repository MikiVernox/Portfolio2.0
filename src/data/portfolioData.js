// Named exports (se vuoi importarli singolarmente)
export const profileData = {
  name: "Michele Domenico Vernone",
  pronouns: "he/him",
  title: "Game Developer",
  location: "Bari, Italy",
  email: "vernonemichele@proton.me",
  website: "solo.to",
  phone: "+39 392 956 292",
  avatar: "👨‍💻",
  intro: "Hi! I'm Michele Domenico Vernone, a Game Developer with a passion for learning and acquiring new knowledge.",
  bio: "I specialize in C#, C++, Python, Unity, and Unreal Engine, and I'm always eager to explore new technologies and tools to enhance my skills.\n I love creating immersive gaming experiences and pushing the boundaries of what's possible in game development.\n Feel free to explore my portfolio and check out some of the projects I've worked on!",
  skills: {
    languages: ["C#", "C++", "Python", "GDScript"],
    engines: ["Unity", "Unreal Engine 5", "Godot", "RPGMaker"],
    tools: ["Git", "Fork", "Visual Studio", "Aseprite"]
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
    accentColor: "violet"
  },
  // altri progetti...
  {
    id: 2,
    title: "Puzzle Game 3D",
    type: "Unreal Engine 5 • C++ • 2023",
    description: "This game is developed on Unreal Engine 5, programmed in C++.\n\nThis is a 3D puzzle game, featuring intricate puzzles and collectibles.",
    tags: ["Unreal Engine 5", "C++", "Single Player"],
    gradient: "from-emerald-500/10 via-green-500/10 to-lime-500/10",
    accentColor: "emerald"
  },

  {
    id: 3,
    title: "Last Resort",
    type: "Custom Engine • C# • 2022",
    description: "This is a 2D game developed on a custom engine using C#, AIV 2D libraries, all programmed by myself for an academic project.\n The game features different scenes, movement point and click and with collectibles.",
    tags: ["Custom Engine", "C#", "Single Player"],
    gradient: "from-rose-500/10 via-pink-500/10 to-fuchsia-500/10",
    accentColor: "rose"
  },

  {
    id: 4,
    title: "Dungeon Of Gusto",
    type: "Unreal Engine 5 • C++ • Blueprint • 2025",
    description: "This is a 2D space shooter game developed using Unity and C#.\n The game features different levels, enemies, power-ups and a scoring system.",
    tags: ["Unreal Engine 5", "C++", "Blueprint", "Single Player"],
    gradient: "from-sky-500/10 via-blue-500/10 to-indigo-500/10",
    accentColor: "sky"
  },
];

export const experience = [
  // dati esperienza...
];

export const education = [
  // dati educazione...
];

export const certifications = [
  // certificazioni...
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