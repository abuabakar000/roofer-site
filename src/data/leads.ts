export interface LeadData {
  slug: string;
  title: string;
  logo?: string;
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
  "default": defaultLead
};

export function getLeadData(slug?: string): LeadData {
  if (!slug) return defaultLead;
  return leads[slug] || defaultLead;
}
