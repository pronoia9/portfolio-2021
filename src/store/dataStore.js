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
    innerScale: 0,
    trailingSpeed: 1,
    outerSize: 40,
    outerScale: 2,
    outerAlpha: 0,
    hasBlendMode: true,
    innerStyle: {
      backgroundColor: 'var(--c-accent-5)',
    },
    outerStyle: {
      border: '3px solid var(--c-accent-5)',
    },
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
    { id: 1, number: new Date().getFullYear() - new Date('2021').getFullYear(), text: 'Years Experience' },
    { id: 2, number: 3, text: 'Certificates' },
    { id: 3, number: 85, text: 'Completed Projects' },
  ],

  // Projects
  projects: {
    filter: [
      { title: 'all', filter: '' },
      { title: 'react', filter: 'react' },
      { title: '3d', filter: '3d' },
      { title: 'frontend', filter: 'frontend' },
      { title: 'fullstack', filter: 'fullstack' },
      { title: 'nextjs', filter: 'nextjs' },
    ],

    projects: [
      {
        id: 'ugAU0ari79',
        title: 'Donut Delights',
        subtitle: 'Development, 3D',
        description: `Embark on a mesmerizing journey through a whimsical realm of animated donuts that come to life with vibrant colors, delightful flavors, and gravity-defying acrobatics. Let the magic unfold as you explore this app's delightful donut universe, where imagination and sweetness collide in a scrumptious symphony of joy and wonder.`,
        link: '/works',
        links: { repo: 'https://github.com/pronoia9/donut-delights', live: 'https://donut-delights.vercel.app' },
        image: 'donutdelights',
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
        link: '/works',
        links: { repo: 'https://github.com/pronoia9/bananarama', live: 'https://bananarama.vercel.app/' },
        image: 'bananarama',
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
        link: '/works',
        links: { repo: 'https://github.com/pronoia9/dall-elyse', live: 'https://dall-elyse.vercel.app/' },
        image: 'dallelyse',
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
        link: '/works',
        links: { repo: 'https://github.com/pronoia9/tee-tailor', live: 'https://tee-tailor.vercel.app/' },
        image: 'teetailor',
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
        link: '/works',
        links: { repo: 'https://github.com/pronoia9/puny-math', live: 'https://puny-math.vercel.app/' },
        image: 'punymath',
        year: 2023,
        date: new Date('June 12, 2023'),
        categories: ['React', 'Design', 'Frontend Mentor'],
        tags: ['React', 'Vitejs', 'HTML', 'CSS', 'Styled Components', 'Frontend Mentor', 'Styled Components', 'React Tooltip', 'Zustand', 'Frontend'],
        info: [],
      },
      {
        id: '2MEdjsJRsp',
        title: 'Stellar Countdown',
        subtitle: 'Developer, Design',
        description: `Embark on a captivating journey with Stellar Countdown, a frontend mentor challenge that showcases a mesmerizing countdown timer. Immerse yourself in the elegant design, featuring flip clock elements that add a touch of nostalgia and anticipation. Stay captivated as time gracefully ticks away.`,
        link: '/works',
        links: { repo: 'https://github.com/pronoia9/stellar-countdown', live: 'http://stellar-countdown.vercel.app/' },
        image: 'stellarcountdown',
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
        link: '/works',
        links: { repo: 'https://github.com/pronoia9/organized-bliss', live: 'https://organized-bliss.vercel.app' },
        image: 'organizedbliss',
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
        link: '/works',
        links: { repo: 'https://github.com/pronoia9/nifty-noggin', live: 'https://nifty-noggin.vercel.app/' },
        image: 'niftynoggin',
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
        link: '/works',
        links: { repo: 'https://github.com/pronoia9/westsum', live: 'https://westsum.vercel.app' },
        image: 'westsum',
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
        link: '/works',
        image: 'donut',
        video: 'donutVid',
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
        link: '/works',
        image: road,
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
        link: '/works',
        image: 'ancientRuins',
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
        link: '/works',
        image: 'cloudStation',
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
        description: `A captivating showcase of web wizardry that pushes the boundaries of digital creativity. Let the ID 'f1rStP0rtf0' unlock the door to a world of awe-inspiring projects, where innovation meets design in perfect harmony.`,
        links: { repo: '', live: '' },
        image: '',
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
        description: `Description: Immerse yourself in the enchanting realm of 'D1g1tAlM4g1c'. This unique ID opens the gates to Pixelarium, where captivating digital creations come to life. Prepare to embark on a journey through a mesmerizing gallery of pixel-perfect masterpieces.`,
        links: { repo: '', live: '' },
        image: '',
        year: '',
        date: new Date(''),
        categories: [],
        tags: [],
        info: [],
      },
      {
        id: '',
        title: '',
        subtitle: '',
        description: ``,
        links: { repo: '', live: '' },
        image: '',
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
      //   image: '',
      //   year: '',
      //   date: new Date(''),
      //   categories: [],
      //   tags: [],
      //   info: [],
      // },
    ].sort((a, b) => b.date - a.date),
  },
}));
