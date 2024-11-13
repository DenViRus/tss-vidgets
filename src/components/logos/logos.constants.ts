import logoAP from "@image/logos-image/logo-ap.png";
import logoBBC from "@image/logos-image/logo-bbc.png";
import logoBusinessInsider from "@image/logos-image/logo-business-insider.png";
import logoCGTN from "@image/logos-image/logo-cgtn.png";
import logoForbes from "@image/logos-image/logo-forbes.png";
import logoFox from "@image/logos-image/logo-fox.png";
import logoWashingtonPost from "@image/logos-image/logo-the-washington-post.png";
import { Logo } from "@interfaces/logo.interface";

const logosData: Logo[] = [
  {
    src: logoBBC,
    alt: "bbc",
    href: "https://www.bbc.com/"
  },
  {
    src: logoBusinessInsider,
    alt: "business insider",
    href: "https://www.businessinsider.com/"
  },
  {
    src: logoWashingtonPost,
    alt: "washington post",
    href: "https://www.washingtonpost.com/"
  },
  {
    src: logoAP,
    alt: "associated press",
    href: "https://apnews.com/"
  },
  {
    src: logoForbes,
    alt: "forbes",
    href: "https://www.forbes.com/"
  },
  {
    src: logoFox,
    alt: "fox",
    href: "https://www.foxnews.com/"
  },
  {
    src: logoCGTN,
    alt: "cgtn",
    href: "https://www.cgtn.com/"
  }
];

export default logosData;