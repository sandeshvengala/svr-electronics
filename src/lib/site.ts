export const SITE = {
  name: "SVR Electronics",
  shortName: "SVR",
  tagline: "Professional Television Solutions for Every Home",
  description:
    "SVR Electronics — premium TV repair, genuine spare parts and new television sales. Trusted by thousands of homes and businesses.",
  phone: "+91 93 925 46046",
  phone1: "+91 92 464 55535",
  phoneHref: "tel:+91932546046",
  phoneHref1: "tel:+919246455535",
  whatsapp: "+919392546046",
  whatsapp1: "+919246455535",
  whatsappHref: "https://wa.me/919392546046",
  whatsappHref1: "https://wa.me/919246455535",
  email: "svrelectronics.com@gmail.com",
  emailHref: "mailto:svrelectronics.com@gmail.com",
  address: "Near Ayyappa Temple, Opp: SBI Bank, Kanteshwar, Nizamabad - 503002 (T.S)",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.5851765198518!2d78.10919377386388!3d18.68260186420744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcdc4cca6532e2d%3A0x12ce4089ab441b80!2sSVR%20ELECTRONICS!5e0!3m2!1sen!2sin!4v1781072467324!5m2!1sen!2sin",
  social: {
    facebook: "https://www.facebook.com/svrele",
    instagram: "https://www.instagram.com/svrelectronics2026",
    // youtube: "#",
  },
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/repairs", label: "Repairs" },
  { to: "/parts", label: "Spare Parts" },
  { to: "/sales", label: "New TVs" },
  { to: "/brands", label: "Brands" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const BRANDS = [
  "Amazon", "Flipkart", "ResQ", "Ekranfix", "Jeeves", "Samsung", "Sony", "LG", "Panasonic", "Toshiba", "Philips",
  "TCL",
];
