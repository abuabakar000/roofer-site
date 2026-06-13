export interface LeadData {
  slug: string;
  title: string;
  logo?: string;
  logoWidth?: number;          // Desktop logo width
  logoHeight?: number;         // Desktop logo height
  logoWidthMobile?: number;    // Mobile logo width
  logoHeightMobile?: number;   // Mobile logo height
  heroBgImage?: string; // Custom background image for the hero section
  primaryColor: string;
  phone: string;
  address: string;
  email: string;
  heroHeading: string;
  highlightWord?: string; // The specific word to apply the gradient to
  heroSubtext: string;
  trustRating: string;
  customerCount: string;
  licensedText?: string;
  hours: {
    monFri: string;
    sat: string;
    emergency: string;
  };
  socials: {
    facebook?: string;
    instagram?: string;
    google?: string;
  };
  mapUrl?: string; // Google Maps Embed URL
  services?: {
    title?: string;
    desc?: string;
  }[];
}

export const defaultLead: LeadData = {
  slug: "default",
  title: "Elite Roofing",
  logo: "/logo.png",
  primaryColor: "#84cc16",
  phone: "(306) 555-0123",
  address: "Your City, State & Surrounding Areas",
  email: "service@eliteroofing.com",
  heroHeading: "Honest Craftsmanship for Your Roof",
  highlightWord: "Craftsmanship",
  heroSubtext: "Experience master-level craftsmanship and rapid response times. From emergency repairs to comprehensive installations, we provide the elite roofing solutions your home deserves.",
  trustRating: "4.9",
  customerCount: "500+",
  hours: {
    monFri: "8:00 AM - 6:00 PM",
    sat: "9:00 AM - 4:00 PM",
    emergency: "Available 24/7"
  },
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    google: "https://google.com"
  },
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280986043!2d-74.14448744574929!3d40.69766374865809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
};

export const leads: Record<string, LeadData> = {
  "default": defaultLead,
  "kk-roofing-inc": {
    ...defaultLead,
    slug: "kk-roofing-inc",
    title: "KK Roofing Inc",
    logo: "/kk-roofing.png",
    logoWidth: 240,
    logoHeight: 60,
    logoWidthMobile: 180,
    logoHeightMobile: 45,
    phone: "+13065417992",
    address: "2 Weekes Crescent, Regina, SK S4R 6X7",
    email: "kk@roofing.com",
    heroHeading: "Elite Roofing in Regina",
    highlightWord: "Roofing",
    heroSubtext: "Providing master-level roofing craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "5",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.0497191700942!2d-104.6027675!3d50.4960324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1f24bf125607%3A0xd9c18fadec3702c7!2sKK%20Roofing%20Inc!5e0!3m2!1sen!2sca!4v1781214159423!5m2!1sen!2sca"
  },
  "aaa-maximum-roofing": {
    ...defaultLead,
    slug: "aaa-maximum-roofing",
    title: "AAA MAXIMUM Roofing",
    logo: "/aaa-roofing.png",
    logoWidth: 240,
    logoHeight: 60,
    logoWidthMobile: 180,
    logoHeightMobile: 45,
    primaryColor: "#f97316",
    phone: "+1 306-513-8875",
    address: "944 Francis StMoose Jaw, SK S6H 3B2, Canada",
    email: "aaamaximumroofing@outlook.com",
    heroHeading: "Elite Roofing in Moose Jaw",
    highlightWord: "Roofing",
    heroSubtext: "Providing master-level roofing craftsmanship to the Moose Jaw community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "5",
    customerCount: "200+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.0603323954215!2d-105.56005660000001!3d50.4027132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531bdddd396c100d%3A0x2ea2287edfa9f958!2sAAA%20MAXIMUM%20Roofing!5e0!3m2!1sen!2s!4v1781214491983!5m2!1sen!2s"
  },
  "excel-roofing": {
    ...defaultLead,
    slug: "excel-roofing",
    title: "Excel Roofing",
    logo: "/excel-roofing.png",
    primaryColor: "#0ea5e9",
    phone: "+13062168576",
    address: "600 Forget St, Regina, SK S4T 4X2, Canada",
    email: "excel@roofing.com",
    heroHeading: "Elite Roofing in Regina",
    highlightWord: "Roofing",
    heroSubtext: "Providing master-level roofing craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4.3",
    customerCount: "100+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.4984975679376!2d-104.6499974!3d50.469062799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e4fa75bc657%3A0x2271652b3f73d996!2sExcel%20Roofing!5e0!3m2!1sen!2s!4v1781214618129!5m2!1sen!2s"
  },
  "masterworks-roofing": {
    ...defaultLead,
    slug: "masterworks-roofing",
    title: "Masterworks Roofing",
    logo: "/master-works.png",
    logoWidth: 240,
    logoHeight: 60,
    logoWidthMobile: 180,
    logoHeightMobile: 45,
    primaryColor: "#84cc16",
    phone: "+13065810282",
    address: "6 Bothwell Crescent, Regina, SK S4R 5W5, Canada",
    email: "masterworksroofingsask@gmail.com",
    heroHeading: "Elite Roofing in Regina",
    highlightWord: "Roofing",
    heroSubtext: "Providing master-level roofing craftsmanship to the Regina community. We offer 24/7 rapid response and elite installations for your home.",
    trustRating: "4",
    customerCount: "150+",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.24834599568!2d-104.6021808!3d50.49233549999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1ff9ab4b36f5%3A0x645c2dcbbd725b72!2sMasterworks%20Roofing!5e0!3m2!1sen!2s!4v1781214771236!5m2!1sen!2s"
  }
};

export function getLeadData(slug?: string): LeadData {
  if (!slug) return defaultLead;
  return leads[slug] || defaultLead;
}
