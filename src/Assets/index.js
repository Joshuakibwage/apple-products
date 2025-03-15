export const navItems = [
  {
    label: 'Home',
    icon: 'bx bx-home-alt-2',
    activeIcon: 'bx bxs-folder-open',
    inactiveIcon: 'bx bxs-folder',
  },
  {
    label: 'iPhone',
    icon: 'bx bx-mobile-alt',
    activeIcon: 'bx bxs-folder-open',
    inactiveIcon: 'bx bxs-folder',
  },
  {
    label: 'MacBook',
    icon: 'bx bx-laptop',
    activeIcon: 'bx bxs-folder-open',
    inactiveIcon: 'bx bxs-folder',
  },
  {
    label: 'Watch',
    icon: 'bx bxs-watch-alt',
    activeIcon: 'bx bxs-folder-open',
    inactiveIcon: 'bx bxs-folder',
  },
  {
    label: 'iMac',
    icon: 'bx bx-desktop',
    activeIcon: 'bx bxs-folder-open',
    inactiveIcon: 'bx bxs-folder',
  },
]

export const items = [
  { label: 'iPhone', img: 'src/Assets/images/iphone.jpg', pageIndex: 1 },
  { label: 'MacBook', img: 'src/Assets/images/macbook.jpg', pageIndex: 2 },
  { label: 'Smart Watch', img: 'src/Assets/images/watch.jpg', pageIndex: 3 },
  { label: 'iMac', img: 'src/Assets/images/imac.png', pageIndex: 4 },
]

export const iphoneModels = [
  {
    name: 'iPhone 16 Pro Max',
    description: 'The ultimate iPhone.',
    price: 'From $1,099',
    img: 'src/Assets/images/iphone16-pro-max.png',
  },
  {
    name: 'iPhone 16 Plus',
    description: 'A total powerhouse.',
    price: 'From $799',
    img: 'src/Assets/images/iphone16-plus.png',
  },
  {
    name: 'iPhone 16',
    description: 'As amazing as ever.',
    price: 'From $799',
    img: 'src/Assets/images/iphone16.png',
  },
]

export const macBookModels = [
  {
    chip: 'M2',
    price: 'From $999',
    img: 'src/Assets/images/macbook-air-midnight-m2.jpg',
    colors: [
      { label: 'Space gray', bg: '#b2b5b8', img: 'src/Assets/images/macbook-air-spacegray-m2.jpg' },
      { label: 'Gold', bg: '#f0e0d3', img: 'src/Assets/images/macbook-air-gold-m2.jpg' },
      { label: 'Silver', bg: '#e0e2e1', img: 'src/Assets/images/macbook-air-silver-m2.jpg' },
    ],
    specs: ['8-Core CPU', '8-Core GPU', '16GB Unified Memory', '256GB SSD Storage'],
    icon: 'src/Assets/images/apple-m2-icon.png',
  },
  {
    chip: 'M3',
    price: 'From $1,299',
    img: 'src/Assets/images/macbook-air-space-gray-m3.jpg',
    colors: [
      { label: 'Midnight', bg: '#2e3641', img: 'src/Assets/images/macbook-air-midnight-m3.jpg' },
      { label: 'Starlight', bg: '#f0e5d3', img: 'src/Assets/images/macbook-air-starlight-m3.jpg' },
      { label: 'Space gray', bg: '#7d7e80', img: 'src/Assets/images/macbook-air-spacegray-m3.jpg' },
      { label: 'Silver', bg: '#e3e4e6', img: 'src/Assets/images/macbook-air-silver-m3.jpg' },
    ],
    specs: ['8-Core CPU', '10-Core GPU', '24GB Unified Memory', '512GB SSD Storage'],
    icon: 'src/Assets/images/apple-m3-icon.png',
  },
]

export const watchModels = [
  {
    imgs: ['src/Assets/images/watch10-side.png', 'src/Assets/images/watch10.png'],
    name: 'Apple Watch Series 10',
    price: 'From $399',
    desc: ['45mm or 41mm case size', '50m water resistant', 'Swim proof'],
  },
  {
    imgs: ['src/Assets/images/watch-hermes-side.png', 'src/Assets/images/watch-hermes.png'],
    name: 'Apple Watch Hermes',
    price: 'From $1,149',
    desc: ['44mm or 40mm case size', '50m water resistant', 'Swim proof'],
  },
  {
    imgs: ['src/Assets/images/watch-se-side.png', 'src/Assets/images/watche-se.png'],
    name: 'Apple Watch Se',
    price: 'From $249',
    desc: ['44mm case size', '10m water resistant', 'Swim proof'],
  },
]

export const imacModels = [
  {
    label: 'Green',
    bg: '#10505b',
    images: {
      side: 'src/Assets/images/imac/green-side.jpg',
      front: 'src/Assets/images/imac/green-front.jpg',
      back: 'src/Assets/images/imac/green-back.jpg',
    },
  },
  {
    label: 'Yellow',
    bg: '#d48207',
    images: {
      side: 'src/Assets/images/imac/yellow-side.jpg',
      front: 'src/Assets/images/imac/yellow-front.jpg',
      back: 'src/Assets/images/imac/yellow-back.jpg',
    },
  },
  {
    label: 'Orange',
    bg: '#e36942',
    images: {
      side: 'src/Assets/images/imac/orange-side.jpg',
      front: 'src/Assets/images/imac/orange-front.jpg',
      back: 'src/Assets/images/imac/orange-back.jpg',
    },
  },
  {
    label: 'Pink',
    bg: '#b72c31',
    images: {
      side: 'src/Assets/images/imac/pink-side.jpg',
      front: 'src/Assets/images/imac/pink-front.jpg',
      back: 'src/Assets/images/imac/pink-back.jpg',
    },
  },
  {
    label: 'Purple',
    bg: '#353a71',
    images: {
      side: 'src/Assets/images/imac/purple-side.jpg',
      front: 'src/Assets/images/imac/purple-front.jpg',
      back: 'src/Assets/images/imac/purple-back.jpg',
    },
  },
  {
    label: 'Silver',
    bg: '#c7c8ca',
    images: {
      side: 'src/Assets/images/imac/silver-side.jpg',
      front: 'src/Assets/images/imac/silver-front.jpg',
      back: 'src/Assets/images/imac/silver-back.jpg',
    },
  },
]
