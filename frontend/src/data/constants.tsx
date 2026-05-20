// MUI Icons
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ScienceIcon from '@mui/icons-material/Science';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarsIcon from '@mui/icons-material/Stars';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GavelIcon from '@mui/icons-material/Gavel';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import VerifiedIcon from '@mui/icons-material/Verified';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

// ==========================================
// HOME PAGE DATA
// ==========================================
export const homeFeatures = [
  { icon: <VerifiedUserIcon />, title: "High Germination", desc: "Best quality seeds for better yield" },
  { icon: <ScienceIcon />, title: "Lab Tested", desc: "Scientifically tested for quality" },
  { icon: <HealthAndSafetyIcon />, title: "Disease Resistant", desc: "Strong and healthy crop guarantee" },
  { icon: <LocalShippingIcon />, title: "Fast Delivery", desc: "On-time delivery at your doorstep" },
  { icon: <ThumbUpIcon />, title: "Trusted by Farmers", desc: "Hundreds of farmers trust our seeds" },
];

export const homeStats = [
  { val: "5000+", label: "Happy Farmers" },
  { val: "120+", label: "Quality Products" },
  { val: "15+", label: "Years of Experience" },
  { val: "20+", label: "States Covered" },
];

export const testimonials = [
  {
    text: "BL Seeds Farm ke beej ki quality bahut acchi hai. Germination 100% aur production bhi zabardast. Hum hamesha BL Seeds Farm ke saath hain.",
    name: "Ramesh Yadav",
    role: "Farmer, MP",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  }
];

// ==========================================
// ABOUT PAGE DATA
// ==========================================
export const aboutValues = [
  { icon: <StarsIcon sx={{ fontSize: '2.5rem' }} />, title: "QUALITY FIRST", desc: "We never compromise on quality. Every seed is tested for best results." },
  { icon: <HandshakeIcon sx={{ fontSize: '2.5rem' }} />, title: "FARMER TRUST", desc: "We believe in long-term relationships built on trust and honesty." },
  { icon: <EmojiObjectsIcon sx={{ fontSize: '2.5rem' }} />, title: "INNOVATION", desc: "We use modern technology and research to bring better seeds." },
  { icon: <GavelIcon sx={{ fontSize: '2.5rem' }} />, title: "INTEGRITY", desc: "Honest in our work, transparent in our deals and committed always." },
  { icon: <NaturePeopleIcon sx={{ fontSize: '2.5rem' }} />, title: "SUSTAINABILITY", desc: "We care for soil, crops and environment for a better tomorrow." },
];

export const aboutJourney = [
  { year: "2015", title: "The Beginning", desc: "Started our journey with a vision to provide quality seeds to farmers." },
  { year: "2017", title: "Growth & Trust", desc: "Gained the trust of farmers and expanded our seed varieties." },
  { year: "2019", title: "Modern Infrastructure", desc: "Established advanced processing and storage facilities." },
  { year: "2021", title: "Wider Reach", desc: "Expanded our network across multiple states in India." },
  { year: "2024 & Beyond", title: "Building the Future", desc: "Continuing our mission to empower farmers with best quality seeds." },
];

// ==========================================
// PRODUCTS PAGE DATA
// ==========================================
export const productCategories = [
  "All Products", "Wheat Seeds", "Mustard Seeds", "Paddy Seeds", 
  "Vegetable Seeds", "Hybrid Seeds", "Fodder Seeds", "Flower Seeds", "Other Seeds"
];

export const allProducts = [
  { name: "Wheat Seeds", desc: "High germination wheat seeds for better yield and quality.", img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1974&auto=format&fit=crop" },
  { name: "Mustard Seeds", desc: "Premium quality mustard seeds for higher production.", img: "https://images.unsplash.com/photo-1628543102308-9a4c1a39ef81?q=80&w=2070&auto=format&fit=crop" },
  { name: "Paddy Seeds", desc: "High quality paddy seeds with excellent germination.", img: "https://images.unsplash.com/photo-1536630596251-b01c6253926b?q=80&w=2070&auto=format&fit=crop" },
  { name: "Vegetable Seeds", desc: "Wide range of vegetable seeds for healthy crops.", img: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=1950&auto=format&fit=crop" },
  { name: "Hybrid Seeds", desc: "Advanced hybrid seeds for maximum productivity.", img: "https://images.unsplash.com/photo-1594759828453-2795856104c2?q=80&w=2032&auto=format&fit=crop" },
  { name: "Fodder Seeds", desc: "Nutritious fodder seeds for healthy livestock.", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" },
  { name: "Cotton Seeds", desc: "Best quality cotton seeds for higher boll count.", img: "https://images.unsplash.com/photo-1594913785162-e678ac0570da?q=80&w=2069&auto=format&fit=crop" },
  { name: "Sunflower Seeds", desc: "High oil content sunflower seeds for better returns.", img: "https://images.unsplash.com/photo-1597022202222-2960dcd470c4?q=80&w=2070&auto=format&fit=crop" },
  { name: "Maize Seeds", desc: "High yielding maize seeds for all types of soil.", img: "https://images.unsplash.com/photo-1551749005-6694075f284b?q=80&w=2070&auto=format&fit=crop" },
  { name: "Flower Seeds", desc: "Beautiful and healthy flowers for every season.", img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2070&auto=format&fit=crop" },
];

// ==========================================
// CONTACT PAGE DATA
// ==========================================
export const contactInfo = [
  { icon: <PhoneIcon />, title: "Call Us", content: "+91 98765 43210", sub: "Mon - Sat: 9:00 AM - 6:00 PM" },
  { icon: <EmailIcon />, title: "Email Us", content: "info@blseedsfarm.com", sub: "We reply within 24 hours" },
  { icon: <LocationOnIcon />, title: "Our Address", content: "BL Seeds Farm, 123, Agricultural Road, Indore, Madhya Pradesh - 452001, India." },
  { icon: <AccessTimeIcon />, title: "Business Hours", content: "Monday - Saturday: 9:00 AM - 6:00 PM", sub: "Sunday Closed" },
  { icon: <WhatsAppIcon />, title: "WhatsApp", content: "+91 98765 43210", sub: "Chat with us on WhatsApp" },
];

export const whyConnectReasons = [
  { icon: <SupportAgentIcon />, title: "Quick Support", desc: "We provide fast and reliable support." },
  { icon: <HeadsetMicIcon />, title: "Expert Guidance", desc: "Get advice from our agriculture experts." },
  { icon: <VerifiedIcon />, title: "Quality Assured", desc: "We deliver only lab tested and high quality seeds." },
  { icon: <LocalShippingIcon />, title: "Timely Delivery", desc: "On-time and safe delivery across India." },
  { icon: <HandshakeIcon />, title: "Trusted by Farmers", desc: "Thousands of farmers trust our seeds." },
];

// ==========================================
// DEALER ENQUIRY DATA
// ==========================================
export const dealerBenefits = [
  { icon: <HandshakeIcon />, title: "Trusted Partnership", desc: "Build a long-term and profitable partnership with BL Seeds Farm." },
  { icon: <VerifiedIcon />, title: "High Quality Products", desc: "Wide range of high germination seeds trusted by thousands of farmers." },
  { icon: <LocalShippingIcon />, title: "Timely Supply", desc: "Assured quality and on-time delivery across all regions." },
  { icon: <AccountBalanceWalletIcon />, title: "Better Margins", desc: "Attractive dealer benefits and competitive pricing." },
];

// ==========================================
// GALLERY PAGE DATA
// ==========================================
export const galleryCategories = ["All Photos", "Our Farms", "Infrastructure", "Seed Processing", "Products", "Events"];

export const galleryImages = [
  { cat: "Our Farms", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" },
  { cat: "Our Farms", img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop" },
  { cat: "Our Farms", img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop" },
  { cat: "Our Farms", img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop" },
  { cat: "Infrastructure", img: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2044&auto=format&fit=crop" },
  { cat: "Infrastructure", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop" },
  { cat: "Infrastructure", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" },
  { cat: "Infrastructure", img: "https://images.unsplash.com/photo-1532187875605-2fe359520337?q=80&w=2070&auto=format&fit=crop" },
  { cat: "Seed Processing", img: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=2000&auto=format&fit=crop" },
  { cat: "Seed Processing", img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1974&auto=format&fit=crop" },
  { cat: "Seed Processing", img: "https://images.unsplash.com/photo-1628543102308-9a4c1a39ef81?q=80&w=2070&auto=format&fit=crop" },
  { cat: "Seed Processing", img: "https://images.unsplash.com/photo-1594913785162-e678ac0570da?q=80&w=2069&auto=format&fit=crop" },
  { cat: "Events", img: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=1974&auto=format&fit=crop" },
  { cat: "Events", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop" },
  { cat: "Events", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" },
  { cat: "Events", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop" },
];

// ==========================================
// BLOG PAGE DATA
// ==========================================
export const blogCategories = [
  { name: "Farming Tips", count: 12 },
  { name: "Crop Guide", count: 10 },
  { name: "Seeds Information", count: 8 },
  { name: "Agriculture News", count: 9 },
  { name: "Organic Farming", count: 6 }
];

export const blogPosts = [
  {
    id: 1,
    title: "7 Essential Tips for Better Seed Germination and Higher Yield",
    category: "FARMING TIPS",
    date: "May 20, 2024",
    readTime: "5 min read",
    excerpt: "Good germination is the first step towards a successful harvest. Follow these proven tips to get the best results from your seeds.",
    img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Complete Guide to Mustard Farming: Sowing to Harvest",
    category: "CROP GUIDE",
    date: "May 15, 2024",
    readTime: "4 min read",
    excerpt: "A step-by-step guide for growing healthy mustard crops with high oil content and maximum yield.",
    img: "https://images.unsplash.com/photo-1628543102308-9a4c1a39ef81?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Why Quality Wheat Seeds Make a Big Difference in Productivity?",
    category: "SEEDS INFORMATION",
    date: "May 10, 2024",
    readTime: "4 min read",
    excerpt: "High quality seeds ensure better germination, strong plants and maximum yield. Know what to look for.",
    img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Best Fertilizer Practices for Healthy Crops and Better Yield",
    category: "FARMING TIPS",
    date: "May 05, 2024",
    readTime: "6 min read",
    excerpt: "Choosing the right fertilizer at the right time can significantly improve soil health and crop productivity.",
    img: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=1950&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Smart Irrigation Techniques to Save Water and Increase Yield",
    category: "AGRICULTURE NEWS",
    date: "Apr 28, 2024",
    readTime: "4 min read",
    excerpt: "Modern irrigation methods that help you save water, reduce cost and increase crop production.",
    img: "https://images.unsplash.com/photo-1536630596251-b01c6253926b?q=80&w=2070&auto=format&fit=crop"
  }
];

export const popularPosts = [
  { title: "7 Essential Tips for Better Seed Germination", date: "May 20, 2024", img: blogPosts[0].img },
  { title: "Complete Guide to Mustard Farming", date: "May 15, 2024", img: blogPosts[1].img },
  { title: "Why Quality Wheat Seeds Make a Big Difference?", date: "May 10, 2024", img: blogPosts[2].img },
];
