import { create } from 'zustand';

import { avatar, wave, footer1, footer2, footer3, footer4 } from '../assets';
import { getThemeFromStorage } from '../utils';
import { saveThemeToStorage } from '../utils/utils';

export const dataStore = create((set) => ({
  // LOADING (PRELOADER)
  loading: true,
  setLoading: (loading) => set({ loading }),

  // LAPTOP
  laptopOpen: false,
  setLaptopOpen: (laptopOpen) => set({ laptopOpen }),
  toggleLaptopOpen: () => set((state) => ({ laptopOpen: !state.laptopOpen })),
  laptopHover: false,
  setLaptopHover: (laptopHover) =>
    set((state) => {
      const [outer, inner] = document.querySelectorAll('.animated-cursor div');
      inner.style.width = laptopHover && !state.laptopOpen ? 0 : '40px';
      inner.style.height = laptopHover && !state.laptopOpen ? 0 : '40px';
      outer.style.width = laptopHover && !state.laptopOpen ? '80px' : '40px';
      outer.style.height = laptopHover && !state.laptopOpen ? '80px' : '40px';
      return { laptopHover };
    }),

  // THEME
  theme: getThemeFromStorage('theme'),
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      saveThemeToStorage('theme', newTheme);
      return { theme: newTheme };
    }),
  themes: [
    { title: 'light', icon: 'far fa-sun' },
    { title: 'dark', icon: 'far fa-moon' },
  ],
  // ACCENT / COLORS
  accent: getThemeFromStorage('accent'),
  setAccent: (accent) =>
    set(() => {
      saveThemeToStorage('accent', accent);
      return { accent };
    }),

  cursorOptions: {
    innerSize: 40,
    innerScale: 0.1,
    trailingSpeed: 1,
    outerSize: 40,
    outerScale: 2,
    outerAlpha: 0,
    hasBlendMode: true,
    innerStyle: { backgroundColor: 'var(--c-accent-5)' },
    outerStyle: { border: '3px solid var(--c-accent-5)' },
    clickables: [
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link',
      '.art-menu-bar-header',
      '.theme-button',
      '.art-strengths div',
      '.art-knowledge-list li',
      '.art-hard-skills-item',
      '.art-lang-skills-item',
      '.art-brand',
      '.hero-heading',
      '.art-available-lamp',
      '.art-avatar',
      '.acc',
    ],
  },

  // ROUTES
  routes: [
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Courses', path: '/courses' },
    { title: 'History', path: '/history' },
    { title: 'Projects', path: '/projects' },
    { title: 'Technologies', path: '/technologies' },
    { title: 'Home', path: '/' },
    { title: 'NotFound', path: '' },
  ],

  // Sidebar / Navbar / Overlay
  curtainEnabled: false,
  curtainClose: () => set({ navbarOpen: false, sidebarOpen: false, curtainEnabled: false }),
  navbarOpen: false,
  openNavbar: () => set({ navbarOpen: true, sidebarOpen: false, curtainEnabled: true }),
  closeNavbar: () => set({ navbarOpen: false, curtainEnabled: false }),
  toggleNavbar: () =>
    set((state) => ({
      navbarOpen: !state.navbarOpen,
      sidebarOpen: state.sidebarOpen && !state.navbarOpen ? false : state.sidebarOpen,
      curtainEnabled: !state.navbarOpen,
    })),
  sidebarOpen: false,
  openSidebar: () => set({ navbarOpen: false, sidebarOpen: true, curtainEnabled: true }),
  closeSidebar: () => set({ sidebarOpen: false, curtainEnabled: false }),
  toggleSidebar: () =>
    set((state) => ({
      navbarOpen: state.navbarOpen && !state.sidebarOpen ? false : state.navbarOpen,
      sidebarOpen: !state.sidebarOpen,
      curtainEnabled: !state.sidebarOpen,
    })),

  // SIDEBAR
  sidebar: {
    profile: {
      name: 'Jay Ansin',
      nameLink: '/',
      subtitle: ['Full-Stack Developer,', 'Avid pet lover 🐶'],
      available: true,
      avatar,
    },

    about: [
      { id: 1, title: 'Nationality:', subtitle: 'U.S.' },
      { id: 2, title: 'Age', subtitle: new Date().getFullYear() - new Date('April 15, 1995').getFullYear() },
    ],

    languages: [
      { id: '1', language: 'English', level: 100 },
      { id: '2', language: 'French', level: 10 },
      { id: '3', language: 'Japanese', level: 5 },
    ],

    skills: {
      hard: [
        {
          title: 'HTML',
          description: `A weaver of the web's foundational tapestry, crafting structured elegance that dances across the digital realm, guiding users on a visual journey of enchantment.`,
          level: 85,
        },
        {
          title: 'CSS',
          description: `A virtuoso of style and form, fashioning the visual symphony that adorns the web's canvas, harmonizing colors, layouts, and animations to create an immersive experience.`,
          level: 70,
        },
        {
          title: 'JavaScript',
          description: `An alchemist of interactivity, infusing life into web applications with spells of dynamic functionality, casting spells that engage and captivate users at every turn.`,
          level: 90,
        },
        {
          title: 'React',
          description: `A maestro of user interfaces, conducting the orchestration of reusable components and state management, composing harmonies that resonate with seamless efficiency.`,
          level: 85,
        },
        {
          title: 'Three.js',
          description: `A magician of the third dimension, conjuring captivating realms of 3D wonder, where pixels transcend their flat nature and come alive in a dance of depth and immersion.`,
          level: 70,
        },
      ],

      soft: [
        [
          {
            title: 'Nextjs',
            description: ``,
            level: 0,
          },
          {
            title: 'Redux',
            description: ``,
            level: 0,
          },
          {
            title: 'Zustand',
            description: ``,
            level: 0,
          },
        ],
        [
          {
            title: 'Node.js',
            description: `A guardian of the server-side, standing steadfast as a sentinel, wielding the power of Node.js to build scalable and robust backends, ensuring a steady flow of mystical energy to power web applications.`,
            level: 60,
          },
          {
            title: 'MongoDB, PostgreSQL',
            description: `Keepers of digital knowledge, guardians of data's secrets, enabling the storage, retrieval, and manipulation of information that shapes the destiny of web applications.`,
            level: 60,
          },
        ],
        [
          {
            title: 'React Three Fiber',
            description: `A sorcerer of integration, seamlessly merging the realms of React and Three.js, casting spells that empower the creation of interactive and enchanting 3D web applications.`,
            level: 70,
          },
          {
            title: 'Blender',
            description: `A visionary artist, wielding the brush of creativity to mold digital clay into breathtaking 3D masterpieces, breathing life into virtual sculptures that transcend imagination.`,
            level: 60,
          },
        ],
        [
          {
            title: 'Git',
            description: `A sage of version control, guarding against chaos and confusion, allowing teams to collaborate in a synchronized dance, preserving the integrity of projects with each graceful commit.`,
            level: 60,
          },
          {
            title: 'Bash',
            description: ``,
            level: 0,
          },
        ],
        [
          {
            title: 'Photoshop',
            description: `A brush-wielding virtuoso, harnessing the power of pixels to shape digital realms, seamlessly blending artistry and technical prowess to create visually stunning masterpieces that captivate the senses.`,
            level: 20,
          },
          {
            title: 'Excel',
            description: ``,
            level: 0,
          },
        ],
      ],
    },

    strengths: [
      'Curious',
      'Organizational',
      'Logical thinking',
      'Detail oriented',
      'Flexible',
      'Dedicated',
      'Focused',
      'Adaptable',
      'Caring',
      'Punctual',
      'Loyal',
      'Tech savvy',
      'Communicating',
      'Team oriented',
    ],

    resume: {
      title: 'Download Resume',
      url: '',
    },

    // TODO: Change non link socials with a hover info maybe
    social: [
      {
        id: 1,
        platform: 'github',
        favicon: 'fab fa-github-square',
        fancybox: null,
        url: 'https://github.com/pronoia9/',
      },
      {
        id: 2,
        platform: 'linkedin',
        favicon: 'fab fa-linkedin',
        fancybox: null,
        url: 'https://www.linkedin.com/in/jayansin/',
      },
      {
        id: 3,
        platform: 'facebook social-unavailable',
        favicon: 'fab fa-facebook-square',
        fancybox: null,
        url: 'https://www.facebook.com/',
      },
      {
        id: 4,
        platform: 'snapchat',
        favicon: 'fab fa-snapchat-square',
        fancybox: 'snapchat',
        url: '/images/bitmoji/snapchat.png',
      },
      {
        id: 5,
        platform: 'discord social-unavailable',
        favicon: 'fab fa-discord',
        fancybox: null,
        url: 'https://discordapp.com/',
      },
    ],
  },

  // NAVBAR
  navbar: [
    { id: 0, title: 'Home', path: '/' },
    {
      id: 1,
      title: 'Projects',
      path: '/projects',
      // submenu: [
      //   { id: 10, title: 'Projects', subtitle: '2', path: '/projects-2' },
      //   { id: 11, title: 'Projects', subtitle: '3', path: '/projects-3' },
      // ],
    },
    { id: 2, title: 'History', path: '/history' },
    { id: 3, title: 'Courses', path: '/courses' },
    {
      id: 4,
      title: 'Technologies',
      path: '/technologies',
      // submenu: [
      //   { id: 40, title: 'Technologies', subtitle: '2', path: '/technologies-2' },
      //   { id: 41, title: 'Technologies', subtitle: '3', path: '/technologies-3' },
      // ],
    },
    { id: 5, title: 'About', path: '/about' },
    { id: 6, title: 'Contact', path: '/contact' },
  ],

  // IFRAME BROWSER OVERLAY
  frameLink: '',
  setFrameLink: (link) => set({ frameLink: link }),

  // FOOTER
  footer: {
    logos: [footer1, footer2, footer3, footer4],
    text: ['© 2023 All Rights Reserved', 'Email: rainbows@sparkles.com'],
  },

  // SECTIONS
  // Hero
  hero: {
    heading: ['hi.', 'welcome.'],
    avatar: wave,
    typed: [
      'Weaving pixels, lines, and a sprinkle of web magic to create jaw-dropping digital wonders.',
      "Turning caffeine-fueled ideas into mind-bending web experiences that leave users asking, 'How did they do that?'",
      "Bending the laws of web development like Neo bending spoons in 'The Matrix', but with more stylish CSS.",
      'Crafting web experiences so delightful, they make unicorns jealous.',
      "Mixing equal parts of coding finesse, design wizardry, and dad jokes for a web experience that's unforgettable and pun-tastic.",
      'Bringing web development prowess and a sense of humor that can make even JavaScript smile (almost).',
      'Building web applications with more flair than a magician pulling rabbits out of hats (although, ours are virtual rabbits).',
      'Infusing web development with a touch of whimsy, a dash of quirkiness, and just a hint of irreverence.',
      "Creating web experiences that are so addictive, users will keep refreshing the page hoping for more surprises (we don't recommend it, though).",
      'Unleashing a web development superpower: the ability to turn coffee into code, errors into laughter, and ideas into pixel-perfect reality.',
    ],
    button: { text: 'beam me up scotty', url: '' },
  },

  // Counters
  counters: [
    { id: 1, number: new Date().getFullYear() - new Date('2021').getFullYear(), text: 'Years Experience', accent: '+' },
    { id: 2, number: 3, text: 'Certificates' },
    { id: 3, number: 85, text: 'Completed Projects', accent: '~' },
  ],

  // Projects
  projects: {
    filters: [
      { title: 'all', filter: '' },
      { title: 'react', filter: 'react' },
      { title: '3d', filter: '3d' },
      { title: 'frontend', filter: 'frontend' },
      { title: 'fullstack', filter: 'fullstack' },
      { title: 'nextjs', filter: 'nextjs' },
    ],
    filterKey: '',
    setFilterKey: (filterKey) => set((state) => ({ projects: { ...state.projects, filterKey: filterKey } })),
    defaults: { rows: 3, cols: 2 },
    rows: 3,
    setRows: (rows) => set((state) => ({ projects: { ...state.projects, rows: rows } })),
    cols: 2,
    setCols: (cols) => set((state) => ({ projects: { ...state.projects, cols: cols } })),
    count: 6,
    setCount: (count) => set((state) => ({ projects: { ...state.projects, count: count } })),
    filteredProjects: [],
    setFilteredProjects: (filteredProjects) => set((state) => ({ projects: { ...state.projects, filteredProjects: filteredProjects } })),
    projects: [
      {
        id: 'ugAU0ari79',
        title: 'Donut Delights',
        subtitle: 'Development, 3D',
        description: `Embark on a mesmerizing journey through a whimsical realm of animated donuts that come to life with vibrant colors, delightful flavors, and gravity-defying acrobatics. Let the magic unfold as you explore this app's delightful donut universe, where imagination and sweetness collide in a scrumptious symphony of joy and wonder.`,
        link: '/projects',
        links: { repo: 'https://github.com/pronoia9/donut-delights', live: 'https://donut-delights.vercel.app' },
        image: '/src/assets/projects/donut-delights.jpg',
        year: 2023,
        date: new Date('June 6, 2023'),
        categories: ['React', '3D', 'Frontend'],
        tags: [
          'React',
          'Javascript',
          'HTML',
          'CSS',
          'Vitejs',
          'Styled Components',
          '3D',
          'Blender',
          'Threejs',
          'React Three Fiber',
          'React Three Drei',
          'React Three Postprocessing',
          'Frontend',
          'Shaders',
        ],
        info: [],
      },
      {
        title: 'Bananarama',
        id: 'ndAD7gUinD',
        subtitle: 'Development, 3D',
        description: `Transport yourself to a tropical oasis with Bananarama, an award-winning landing page that pays homage to the delightful world of bananas. Immerse yourself in a whimsical experience filled with captivating bananas floating in a vibrant backdrop. Let the playful charm of Bananarama bring a smile to your face and a touch of tropical paradise to your screen.`,
        link: '/projects',
        links: { repo: 'https://github.com/pronoia9/bananarama', live: 'https://bananarama.vercel.app/' },
        image: '/src/assets/projects/bananarama.jpg',
        year: 2023,
        date: new Date('June 4, 2023'),
        categories: ['React', '3D', 'Frontend'],
        tags: [
          'React',
          'Javascript',
          'HTML',
          'CSS',
          'Vitejs',
          'Styled Components',
          '3D',
          'Blender',
          'Threejs',
          'React Three Fiber',
          'React Three Drei',
          'React Three Postprocessing',
          'Frontend',
        ],
        info: [],
      },
      {
        id: 'Fwzoyy6FYR',
        title: 'DALL-Elyse',
        subtitle: 'Development, Fullstack',
        description: `Discover the extraordinary capabilities of DALL-E with DALL-Elyse, a full-stack MERN AI Image Generation App. Witness the fusion of art and technology as this showcase gallery presents awe-inspiring images generated by DALL-E. Explore the boundless possibilities of AI creativity.`,
        link: '/projects',
        links: { repo: 'https://github.com/pronoia9/dall-elyse', live: 'https://dall-elyse.vercel.app/' },
        image: '/src/assets/projects/dall-elyse.jpg',
        year: 2023,
        date: new Date('April 17, 2023'),
        categories: ['React', 'Fullstack', '3D'],
        tags: [
          'React',
          'HTML',
          'Javascript',
          'CSS',
          'Vitejs',
          'Styled Components',
          'OpenAI',
          'MERN Stack',
          'Fullstack',
          'Backend',
          'AI',
          'Threejs',
          'React Three Fiber',
          'React Three Drei',
          'Zustand',
          'React Router Dom',
          'Shaders',
          'Photoswipe',
          'Leva',
          'Framer Motion',
          'File Saver',
          'GPT',
          'Cors',
          'Cloudinary',
          'Dotenv',
          'Expressjs',
          'Nodemon',
          'Mongoose',
          'Nodejs',
        ],
        info: [],
      },
      {
        id: 'cDKI2bhikl',
        title: 'Tee-Tailor',
        subtitle: 'Development, Fullstack, 3D',
        description: `Step into the realm of AI-powered product customization with Tee-Tailor. This dynamic 3D product website allows users to personalize their items with an innovative twist. Witness the magic as the latest AI technologies bring unique designs to life, enabling customers to tailor their products to perfection.`,
        link: '/projects',
        links: { repo: 'https://github.com/pronoia9/tee-tailor', live: 'https://tee-tailor.vercel.app/' },
        image: '/src/assets/projects/tee-tailor.jpg',
        year: 2023,
        date: new Date('April 10, 2023'),
        categories: ['React', 'Fullstack', '3D'],
        tags: [
          'React',
          'HTML',
          'Javascript',
          'CSS',
          'GPT',
          'OpenAI',
          'Threejs',
          'Tailwind',
          '3D',
          'React Three Fiber',
          'React Three Drei',
          'Fullstack',
          'Maath',
          'React Color',
          'Valtio',
          'Vitejs',
          'Cloudinary',
          'Cors',
          'Dotenv',
          'Expressjs',
          'Mongoose',
          'Mongodb',
          'MERN Stack',
          'Nodemon',
          'Nodejs',
          'AI',
        ],
        info: [],
      },
      {
        id: 'l8eP5m0yme',
        title: 'Puny Math',
        subtitle: 'Developer, Design',
        description: `Unleash your mathematical prowess with Puny Math, a whimsical calculator app that brings a playful twist to number crunching. From simple calculations to complex equations, this app adds a dash of humor and charm to your mathematical adventures. Crunch numbers with a smile and let Puny Math brighten your day.`,
        link: '/projects',
        links: { repo: 'https://github.com/pronoia9/puny-math', live: 'https://puny-math.vercel.app/' },
        image: '/src/assets/projects/puny-math.jpg',
        year: 2023,
        date: new Date('June 12, 2023'),
        categories: ['React', 'Design', 'Frontend Mentor'],
        tags: ['React', 'Vitejs', 'HTML', 'CSS', 'Styled Components', 'Frontend Mentor', 'React Tooltip', 'Zustand', 'Frontend'],
        info: [],
      },
      {
        id: '2MEdjsJRsp',
        title: 'Stellar Countdown',
        subtitle: 'Developer, Design',
        description: `Embark on a captivating journey with Stellar Countdown, a frontend mentor challenge that showcases a mesmerizing countdown timer. Immerse yourself in the elegant design, featuring flip clock elements that add a touch of nostalgia and anticipation. Stay captivated as time gracefully ticks away.`,
        link: '/projects',
        links: { repo: 'https://github.com/pronoia9/stellar-countdown', live: 'http://stellar-countdown.vercel.app/' },
        image: '/src/assets/projects/stellar-countdown.jpg',
        year: 2023,
        date: new Date('July 8, 2022'),
        categories: ['React', 'Design', 'Frontend Mentor'],
        tags: ['React', 'Vitejs', 'HTML', 'CSS', 'Javascript', 'Frontend', 'Styled Components', 'Frontend Mentor'],
        info: [],
      },
      {
        id: 'kFlQKDQ0Dn',
        title: 'Organized Bliss',
        subtitle: 'Developer, Design',
        description: `Experience blissful productivity with Organized Bliss, a feature-rich todo app designed to keep your tasks in perfect harmony. Stay organized, set priorities, and track your progress effortlessly. Achieve a state of tranquil productivity with this intuitive and elegant application.`,
        link: '/projects',
        links: { repo: 'https://github.com/pronoia9/organized-bliss', live: 'https://organized-bliss.vercel.app' },
        image: '/src/assets/projects/organized-bliss.jpg',
        year: 2023,
        date: new Date('July 1, 2022'),
        categories: ['React', 'Design', 'Frontend Mentor'],
        tags: ['React', 'Vitejs', 'HTML', 'CSS', 'Javascript', 'Frontend', 'Styled Components', 'Frontend Mentor'],
        info: [],
      },
      {
        id: 'nvnlXUQYeV',
        title: 'Nifty Noggin',
        subtitle: 'Developer, Design',
        description: `Unlock a treasure trove of wisdom with Nifty Noggin, a frontend mentor challenge that draws from the Advice Slip API. Immerse yourself in a world of random quotes of advice, where each click unveils a nugget of wisdom to inspire and guide you on your journey.`,
        link: '/projects',
        links: { repo: 'https://github.com/pronoia9/nifty-noggin', live: 'https://nifty-noggin.vercel.app/' },
        image: '/src/assets/projects/nifty-noggin.jpg',
        year: 2023,
        date: new Date('June 23, 2022'),
        categories: ['React', 'Design', 'Frontend Mentor'],
        tags: ['React', 'Vitejs', 'HTML', 'CSS', 'Javascript', 'Frontend', 'Styled Components', 'Frontend Mentor', 'API', 'Axios'],
        info: [],
      },
      {
        id: 'hqQykrd1zz',
        title: 'Westsum',
        subtitle: 'Developer, Design',
        description: `Indulge in the brilliance of Kanye West, showcasing the wisdom and wit of the legendary artist. Inspired by the innovative concept of Jeffsum, Westsum utilizes a REST API, and delivers a collection of random Kanye West quotes, inviting you to explore the profound thoughts and captivating words of this iconic figure.`,
        link: '/projects',
        links: { repo: 'https://github.com/pronoia9/westsum', live: 'https://westsum.vercel.app' },
        image: '/src/assets/projects/westsum.jpg',
        year: 2023,
        date: new Date('May 10, 2022'),
        categories: ['React', 'Design', 'API'],
        tags: ['React', 'Vitejs', 'HTML', 'CSS', 'Javascript', 'Frontend', 'Styled Components', 'API', 'Axios', 'GSAP'],
        info: [],
      },
      {
        id: 'UjX7wDmwGm',
        title: 'Sprinkle Spectacular',
        subtitle: '3D Modelling',
        description: `Witness the mesmerizing journey of a donut with sprinkles as it gracefully soars through the air. This animated masterpiece combines photorealism and a touch of whimsy, immersing you in a sweet and delightful adventure.`,
        link: '/projects',
        image: '/src/assets/projects/sprinkle-spectacular.jpg',
        video: 'donutVid.jpg',
        year: 2023,
        date: new Date('May 9, 2023'),
        categories: ['3D', 'Blender'],
        tags: ['3D', 'Blender'],
        info: [],
      },
      {
        id: 'EKrNnJbOUp',
        title: 'Serene Vistas',
        subtitle: '3D Modelling',
        description: `Immerse yourself in the tranquility of Serene Vistas, a captivating landscape that brings nature to life. This isometric diorama showcases lush trees, majestic rocks, and a serene lake, all rendered in delightful low poly style. Lose yourself in the beauty and serenity of this picturesque creation.`,
        link: '/projects',
        image: '/src/assets/projects/serene-vistas.jpg',
        year: 2023,
        date: new Date('May 3, 2023'),
        categories: ['3D', 'Blender'],
        tags: ['3D', 'Blender'],
        info: [],
      },
      {
        id: 'ZIbglpS8sO',
        title: 'Nocturnal Enigma',
        subtitle: '3D Modelling',
        description: `Step into a realm of mystery and wonder with Nocturnal Enigma. Behold an ancient ruin bathed in the captivating glow of volumetric lighting. This cubo-futuristic creation blends voxel art and low poly aesthetics, inviting you to explore a mesmerizing world shrouded in intrigue.`,
        link: '/projects',
        image: '/src/assets/projects/nocturnal-enigma.jpg',
        year: 2023,
        date: new Date('May 4, 2023'),
        categories: ['3D', 'Blender'],
        tags: ['3D', 'Blender'],
        info: [],
      },
      {
        id: 'K6lI4mp9DP',
        title: 'Neon Retroverse',
        subtitle: '3D Modelling',
        description: `Embark on a journey to a neon-lit retrofuturistic world with Neon Retroverse. This isometric masterpiece features a dazzling station adorned with vibrant neon lights, evoking a sense of nostalgia and intrigue. Let the mesmerizing volumetric lighting guide you through this whimsical retrofuturistic realm.`,
        link: '/projects',
        image: '/src/assets/projects/neon-retroverse.jpg',
        year: 2023,
        date: new Date('May 10, 2023'),
        categories: ['3D', 'Blender'],
        tags: ['3D', 'Blender'],
        info: [],
      },
      {
        id: 'f1rStP0rtf0',
        title: 'Portfolio',
        subtitle: '',
        description: ``,
        links: { repo: '', live: '' },
        image: '.jpg',
        year: '',
        dates: ['March 11, 2021', 'June 29, 2022'],
        categories: [],
        tags: [],
        info: [],
      },
      {
        id: 'D1g1tAlM4g1c',
        title: 'Portfolio - Lumirise',
        subtitle: '',
        description: ``,
        links: { repo: '', live: '' },
        image: '.jpg',
        year: '',
        date: new Date(''),
        categories: [],
        tags: [],
        info: [],
      },
      // {
      //   id: '',
      //   title: '',
      //   subtitle: '',
      //   description: ``,
      //   links: { repo: '', live: '' },
      //   image: '.jpg',
      //   year: '',
      //   date: new Date(''),
      //   categories: [],
      //   tags: [],
      //   info: [],
      // },
      // {
      //   id: '',
      //   title: '',
      //   subtitle: '',
      //   description: ``,
      //   links: { repo: '', live: '' },
      //   image: '',
      //   year: '',
      //   date: new Date(''),
      //   categories: [],
      //   tags: [],
      //   info: [],
      // },
    ].sort((a, b) => b.date - a.date),
  },

  // History
  history: {
    timeline: ['education', 'courses'],
    education: [
      {
        title: 'Seneca College',
        subtitle: 'Computer Programming and Analysis',
        dates: [new Date('May 2016'), new Date('May 2019')],
        description: `Embarking on a thrilling three-year adventure at Seneca College, I delved into the captivating realm of Computer Programming and Analysis. Armed with programming languages, design wizardry, and system sorcery, I honed my skills in crafting dynamic web applications across diverse operating systems. Alongside, I ventured into the realm of advanced option courses, unlocking hidden levels of technical prowess.`,
        image: '/src/assets/certificates/diploma.jpg',
      },
      {
        title: 'The Complete Web Developer',
        subtitle: 'by Andrei Neagoie, Senior Software Developer',
        dates: [new Date('April 29, 2022'), new Date('June 6, 2022')],
        description: `Behold, an extraordinary opportunity to walk in the footsteps of a Silicon Valley sage and a Toronto tech titan. This immersive course takes you on a whimsical adventure, unraveling the secrets of web development's enchanted arts. Unleash your creativity, master the crafts of HTML, CSS, and JavaScript, and ascend to new heights in the digital realm.`,
        image: '/src/assets/certificates/ztm-tcwd.jpg',
      },
      {
        title: 'Web Development Bootcamp',
        subtitle: 'by Dr. Angela Yu, Developer and Lead Instructor',
        dates: [new Date('February 16, 2021'), new Date('March 10, 2021')],
        description: `Step into the mystical realm of web development under the guidance of Dr. Angela Yu, the lead enchantress at the App Brewery. Brace yourself for a whirlwind of incantations and coding charms as you journey through the realms of HTML, CSS, and JavaScript. Join a league of extraordinary developers and unlock the secrets to conjuring captivating web experiences.`,
        image: '/src/assets/certificates/tab-wdb.jpg',
      },
      // {
      //   title: 'Complete React Developer with Redux, Hooks, GraphQL',
      //   subtitle: 'by Andrei Neagoie, Senior Software Developer',
      //   dates: [new Date('June 7, 2022'), 'Ongoing'],
      //   description: `Immerse yourself in the mystical realm of React.js mastery with the guidance of the revered React.js sages. Together, we unravel the secrets of Redux, dance with React Hooks, wield GraphQL's power, and summon the mighty Context API. Brace yourself as we embark on an epic journey, conquering Firebase, Redux-Saga, Stripe, and more, crafting enchanting and powerful web applications from scratch.`,
      //   link: 'https://zerotomastery.io/courses/learn-react/',
      // },
    ],
    courses: [
      {
        title: 'ThreeJS Journey',
        subtitle: 'by Bruno Simon',
        dates: [new Date('August 16, 2022'), new Date('May 20, 2023')],
        description: `Unleashed the magic of WebGL and became a 3D web virtuoso. Mastered Three.js sorcery, crafting captivating websites with style. From mind-bending particles to physics interactions, advanced techniques became second nature. Even delved into the realm of Blender sorcery, conjuring mesmerizing 3D models. A certified web-weaver of visual wonders!`,
        link: 'https://threejs-journey.com',
      },
      {
        title: 'Become A 3D Illustrator',
        subtitle: 'by Polygon Runway',
        dates: [new Date('May 3, 2023'), 'Ongoing'],
        description: `Became a skilled 3D modeler through an immersive Blender course. Mastered controls, geometry modeling, lighting, and rendering. Explored advanced tools, texture painting, and ambient lighting for captivating effects. Created diverse projects, from low-poly to isometric rooms. Proficient in realistic material rendering and smooth modeling techniques. Ready to bring innovative concepts to life.`,
        link: 'https://polygonrunway.com/p/become-a-3d-illustrator',
      },
      {
        title: 'Blender Donut Series',
        subtitle: 'by Blender Guru',
        dates: [new Date('May 5, 2023'), new Date('May 9, 2023')],
        description: `Blender Donut Tutorial series by Blender Guru: Mastered the art of crafting tantalizing digital donuts, honing skills in modeling, texturing, lighting, and rendering under the guidance of Blender Guru's wit and charm. Transformed into a skilled donut virtuoso, capable of creating visually captivating treats.`,
        link: 'https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD',
      },
    ].sort((a, b) => b?.dates[0] - a?.dates[0]),
    activities: [
      {
        title: 'Destination Imagination',
        subtitle: 'Participant',
        dates: [new Date('April 2013')],
        description: `Embarked on a daring quest with the illustrious Destination Imagination crew, where creativity and problem-solving intertwined in magical harmony. Our fellowship of imaginative minds tackled challenges, bending reality to unravel ingenious solutions. Through the alchemy of teamwork and innovation, we honed our skills as future visionaries and master problem solvers.`,
      },
      {
        title: 'Caretakers of the Environment',
        subtitle: 'Volunteer',
        dates: [new Date('August 2011')],
        description: `Ventured into the realm of environmental guardianship, donning the cape of a Caretaker of the Environment. In this noble quest, I joined forces with a league of eco-warriors, embracing the responsibility of protecting our precious planet. Together, we shaped awareness, wielded education, and championed sustainable development, leaving a trail of green footsteps in our wake.`,
      },
    ].sort((a, b) => b?.dates[0] - a?.dates[0]),
  },

  // Courses
  courses: [
    {
      title: '6th Semester',
      data: [
        {
          id: 'PRJ666',
          title: 'Project Implementation',
          dates: [new Date('May 2018'), new Date('Aug 2018')],
          subtitle: 'PRJ666 (C)',
          description:
            'This is the final course in the systems stream in which students complete the development and implementation phase of their project from PRJ566...',
          link: 'https://ict.senecacollege.ca/course/prj666',
        },
        {
          id: 'WIN210',
          title: 'Administration of Microsoft Windows',
          dates: [new Date('May 2018'), new Date('Aug 2018')],
          subtitle: 'WIN210 (B)',
          description:
            'This course provides students with the knowledge and skills necessary to perform administration tasks on a Microsoft Windows Server operating system...',
          link: 'https://www.senecacollege.ca/ssos/find/WIN210/current/ce',
        },
        {
          id: 'GAM531',
          title: 'Game Engine Foundations',
          dates: [new Date('Sept 2018'), new Date('Dec 2018')],
          subtitle: 'GAM531 (D)',
          description: 'Graphics accelerators provide developers with powerful tools for displaying visual information...',
          link: 'http://ict.senecacollege.ca/course/GAM531',
        },
        {
          id: 'GAM537',
          title: 'Game Development Fundamentals',
          dates: [new Date('Sept 2018'), new Date('Dec 2018')],
          subtitle: 'GAM537 (B)',
          description:
            'This subject will teach students the principles of game design and give them the opportunity to create a game using an existing game engine...',
          link: 'http://ict.senecacollege.ca/course/GAM537',
        },
        {
          id: 'UNX510',
          title: 'UNIX BASH Shell Scripting',
          dates: [new Date('Jan 2019'), new Date('Apr 2019')],
          subtitle: 'UNX510 (B)',
          description:
            'This course is an intensive look at Linux, from the command level, and at the Bourne Again SHell (BASH). Students will learn how to write, debug, run, and modify complex BASH scripts...',
          link: 'http://ict.senecacollege.ca/course/UNX510',
        },
      ],
    },
    {
      title: '5th Semester',
      data: [
        {
          id: 'DSA555',
          title: 'Data Structures and Algorithms in C++',
          dates: [new Date('Jan 2018'), new Date('Apr 2018')],
          subtitle: 'DSA555 (A)',
          description:
            'This is a survey course on algorithms and data structures commonly used in computer programs. Students taking this course will learn how these classical data structures and algorithms function...',
          link: 'https://ict.senecacollege.ca/course/dsa555',
        },
        {
          id: 'GAM536',
          title: 'Game Content Creation',
          dates: [new Date('Jan 2018'), new Date('Apr 2018')],
          subtitle: 'GAM536 (A)',
          description:
            'This course will explore how content is created both interactively and through coding. Students will learn to create and alter 3D content using both means...',
          link: 'http://ict.senecacollege.ca/course/GAM536',
        },
        {
          id: 'GPU610',
          title: 'Parallel Programming Fundamentals',
          dates: [new Date('Jan 2018'), new Date('Apr 2018')],
          subtitle: 'GPU610 (C+)',
          description: 'This course teaches students how to read and write programs that use both CPU and GPU technology...',
          link: 'http://ict.senecacollege.ca/course/GPU610',
        },
        {
          id: 'PRJ566',
          title: 'Project Planning and Management',
          dates: [new Date('Jan 2018'), new Date('Apr 2018')],
          subtitle: 'PRJ566 (A)',
          description:
            'Students learn project management concepts while carrying out requirements gathering, analysis, design, and implementation planning for the identified system...',
          link: 'https://ict.senecacollege.ca/course/prj566',
        },
      ],
    },
    {
      title: '4th Semester',
      data: [
        {
          id: 'DCN455',
          title: 'Data Communications Networks',
          dates: [new Date('Sept 2018'), new Date('Jan 2018')],
          subtitle: 'DCN455 (B+)',
          description:
            'In this course, students will learn about the software and hardware systems and technology needed to create data communications networks...',
          link: 'https://www.senecacollege.ca/ssos/find/DCN455/current/ce',
        },
        {
          id: 'INT422',
          title: 'Web Programming on Windows',
          dates: [new Date('Sept 2018'), new Date('Jan 2018')],
          subtitle: 'INT422 (A)',
          description: 'The course focuses on server-side ASP.NET programming technologies and the C# language...',
          link: 'https://www.senecacollege.ca/ssos/find/INT422/current/ce',
        },
        {
          id: 'JAC444',
          title: 'Java for C++ Programmers',
          dates: [new Date('Sept 2018'), new Date('Jan 2018')],
          subtitle: 'JAC444 (B+)',
          description: 'This subject will serve as a thorough introduction to Java as an object-oriented and functional programming language...',
          link: 'https://ict.senecacollege.ca/course/JAC444',
        },
        {
          id: 'SYS466',
          title: 'Analysis and Design Using OO Models',
          dates: [new Date('Sept 2018'), new Date('Jan 2018')],
          subtitle: 'SYS466 (A)',
          description: 'This subject focuses on the practical application of object oriented concepts to the development of business systems...',
          link: 'https://ict.senecacollege.ca/course/SYS466',
        },
      ],
    },
    {
      title: '3rd Semester',
      data: [
        {
          id: 'DBS301',
          title: 'Database Design and SQL Using Oracle',
          dates: [new Date('Jan 2017'), new Date('Apr 2017')],
          subtitle: 'DBS301 (B)',
          description:
            "This subject continues the study of database design and SQL begun in DBS201. Students will learn the entire set of SQL statements using Oracle's DBMS...",
          link: 'https://www.senecacollege.ca/ssos/find/DBS301/current/ce',
        },
        {
          id: 'INT322',
          title: 'Web Programming on UNIX',
          dates: [new Date('Jan 2017'), new Date('Apr 2017')],
          subtitle: 'INT322 (A)',
          description:
            'This subject will provide the student with the skills and knowledge required to create and maintain commercial-quality web sites suitable for database-driven business transactions...',
          link: 'https://www.senecacollege.ca/ssos/find/INT322/current/ce',
        },
        {
          id: 'OOP345',
          title: 'Object-Oriented Software Development Using C++',
          dates: [new Date('Jan 2017'), new Date('Apr 2017')],
          subtitle: 'OOP345 (A+)',
          description:
            "This subject expands the student's skill-set in object-oriented programming and introduces the student to threaded programming...",
          link: 'http://ict.senecacollege.ca/course/oop345',
        },
        {
          id: 'SYS366',
          title: 'Requirements Gathering Using OO Models',
          dates: [new Date('Jan 2017'), new Date('Apr 2017')],
          subtitle: 'SYS366 (B+)',
          description:
            "This subject focuses on the techniques and tools involved in gathering requirements for business systems that will solve business stakeholders' processing problems...",
          link: 'https://ict.senecacollege.ca/course/sys366',
        },
      ],
    },
    {
      title: '2nd Semester',
      data: [
        {
          id: 'DBS201',
          title: 'Database Design and SQL',
          dates: [new Date('Sept 2016'), new Date('Dec 2016')],
          subtitle: 'DBS201 (A)',
          description:
            'This subject introduces students to relational database design and SQL (Structured Query Language) used with relational databases...',
          link: 'https://www.senecacollege.ca/ssos/find/DBS201/current/ce',
        },
        {
          id: 'INT222',
          title: 'Internet Fundamentals',
          dates: [new Date('Sept 2016'), new Date('Dec 2016')],
          subtitle: 'INT222 (A)',
          description:
            'This subject introduces students to Internet architecture and software development principles, using the World Wide Web as the system example...',
          link: 'https://www.senecacollege.ca/ssos/find/INT222/current/ce',
        },
        {
          id: 'OOP244',
          title: 'Object Oriented Programming',
          dates: [new Date('Sept 2016'), new Date('Dec 2016')],
          subtitle: 'OOP244 (A)',
          description:
            'This subject introduces the student to OOP. The student learns to build reusable objects, encapsulate data and logic within a class, inherit one class from another and implement polymorphism...',
          link: 'https://ict.senecacollege.ca/course/oop244',
        },
      ],
    },
    {
      title: '1st Semester',
      data: [
        {
          id: 'IPC144',
          title: 'Programming Using C',
          dates: [new Date('May 2016'), new Date('Aug 2016')],
          subtitle: 'IPC144 (A+)',
          description:
            'This course covers the fundamental principles of computer programming, with an emphasis on problem solving strategies using structured programming techniques...',
          link: 'https://ict.senecacollege.ca/course/ipc144',
        },
        {
          id: 'ULI101',
          title: 'Unix/Linux and the Internet',
          dates: [new Date('May 2016'), new Date('Aug 2016')],
          subtitle: 'ULI101 (A)',
          description:
            'This subject introduces students to Unix, Linux and the Internet. Students will learn the core utilities to work productively in a Linux environment...',
          link: 'https://ict.senecacollege.ca/course/uli101',
        },
        {
          id: 'IOS110',
          title: 'Operating Systems Using Windows',
          dates: [new Date('May 2016'), new Date('Aug 2016')],
          subtitle: 'IOS110 (A+)',
          description:
            'This course provides a technical foundation of operating system installation, configuration, administration and troubleshooting.',
          link: 'https://www.senecacollege.ca/ssos/find/IOS110/current/ce',
        },
      ],
    },
  ],

  // Technologies
  technologies: {
    title: 'Technologies | Libraries',
    message: 'Read More',
    defaults: { rows: 3, cols: 3 },
    rows: 3,
    setRows: (rows) => set((state) => ({ technologies: { ...state.technologies, rows: rows } })),
    cols: 3,
    setCols: (cols) => set((state) => ({ technologies: { ...state.technologies, cols: cols } })),
    count: 6,
    setCount: (count) => set((state) => ({ technologies: { ...state.technologies, count: count } })),
    list: [
      {
        title: 'Styled Components',
        subtitle: 'Styling your way with speed, strong typing, and flexibility.',
        link: 'https://styled-components.com',
        image: '/src/assets/technologies/styled-components.jpg',
      },
      {
        title: 'Framer Motion',
        subtitle: '',
        link: '',
        image: '/src/assets/technologies/framer-motion.jpg',
      },
      {
        title: 'Threejs',
        subtitle: '',
        link: '',
        image: '/src/assets/technologies/threejs.jpg',
      },
      {
        title: 'React Three Fiber',
        subtitle: '',
        link: '',
        image: '/src/assets/technologies/react-three-fiber.jpeg',
      },
      {
        title: 'React Three Drei',
        subtitle: '',
        link: '',
        image: '/src/assets/technologies/react-three-drei.jpeg',
      },
      {
        title: 'Fancybox',
        subtitle: 'JavaScript lightbox library for presenting various types of media.',
        link: 'https://fancyapps.com/fancybox/',
        image: '/src/assets/technologies/fancybox.jpg',
      },
      {
        title: 'Typedjs',
        subtitle: 'A JavaScript Typing Animation. Typed.js is a library that types.',
        link: 'https://github.com/mattboldt/typed.js/',
        image: '/src/assets/technologies/typedjs.jpeg',
      },
      {
        title: 'Swiper',
        subtitle: 'Modern mobile touch slider with transitions and amazing behavior.',
        link: 'https://swiperjs.com/',
        image: '/src/assets/technologies/swiper.jpg',
      },
      {
        title: 'Formik',
        subtitle: 'Formik makes debugging, testing, and reasoning about your forms a breeze.',
        link: 'https://formik.org/',
        image: '/src/assets/technologies/formik.jpeg',
      },
      {
        title: 'EmailJS',
        subtitle: 'EmailJS helps to send emails using client-side technologies...',
        link: 'https://www.emailjs.com/',
        image: '/src/assets/technologies/emailjs.jpg',
      },
      {
        title: 'Smooth Scrollbar React',
        subtitle: 'A wrapper for smooth-scrollbar to React Component.',
        link: 'https://github.com/nghiepdev/smooth-scrollbar-react',
        image: '/src/assets/technologies/smooth-scrollbar.jpg',
      },
      {
        title: 'Axios',
        subtitle: '',
        link: '',
        image: '/src/assets/technologies/axios.jpg',
      },
      {
        title: 'GSAP',
        subtitle: '',
        link: '',
        image: '/src/assets/technologies/gsap.jpeg',
      },
      {
        title: 'Vitejs',
        subtitle: '',
        link: '',
        image: '/src/assets/technologies/vitejs.jpeg',
      },
      {
        title: 'Bitmoji',
        subtitle: '',
        link: '',
        image: '/src/assets/technologies/bitmoji.jpg',
      },
      {
        title: 'Font Awesome',
        subtitle: '',
        link: '',
        image: '/src/assets/technologies/font-awesome.jpg',
      },
      {
        title: 'Animated Cursor',
        subtitle: '',
        link: '',
        image: '/src/assets/technologies/animated-cursor.jpeg',
      },
      {
        title: 'CountUp',
        subtitle: '',
        link: '',
        image: '/src/assets/technologies/countup.jpeg',
      },
      {
        title: 'React Router',
        subtitle: '',
        link: '',
        image: '/src/assets/technologies/react-router.jpg',
      },
      {
        title: 'Progressbar,js',
        subtitle: '',
        link: '',
        image: '/src/assets/technologies/progressbar.jpg',
      },
      {
        title: 'Poimandres',
        subtitle: '',
        link: '',
        image: '/src/assets/technologies/poimandres.jpg',
      },
    ],
  },

  // Contact
  contact: {
    title: 'Contact Information',
    info: [
      [
        { title: 'Email', description: 'jayansin9@gmail.com' },
        { title: 'Skype', description: '@jayansin' },
        { title: 'Discord', description: '¬ _¬#6475' },
      ],
      [
        { title: 'Mobile', description: '+1 234 56 78' },
        { title: 'Home', description: 'N/A' },
        { title: 'Address', description: '42 Hilarity Lane, Chuckleville, 12345' },
      ],
    ],
    form: {
      title: 'Get in touch',
      default: { name: '', subject: '', email: '', message: '' },
    },
  },

  // About
  about: {
    hobbies: [
      { title: 'Baking', image: '/src/assets/hobbies/baking.png' },
      { title: 'Reading', image: '/src/assets/hobbies/bean bag chair chill.png' },
      { title: 'Walking', image: '/src/assets/hobbies/dop pooping.png' },
      { title: 'Playing Games', image: '/src/assets/hobbies/gaming.png' },
      { title: 'Computering', image: '/src/assets/hobbies/keyboard smash.png' },
      { title: 'Cat Loving', image: '/src/assets/hobbies/love this with cat.png' },
      { title: 'Playing with Dog', image: '/src/assets/hobbies/sticker-2.png' },
      { title: 'Watching Stuff', image: '/src/assets/hobbies/sticker-3.png' },
      { title: 'Listening to Music', image: '/src/assets/hobbies/sticker.png' },
    ],
  },
}));
