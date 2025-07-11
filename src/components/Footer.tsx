import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";
import { useAppSettings } from "../context/AppSettingsContext";
import { useState } from "react";

const Footer = () => {
    const { theme, borderRadius } = useAppSettings();
    const [hovered, setHovered] = useState("");

    const socialMedia = [
        {
            label: "github",
            href: "https://github.com/Rohan04022003",
            Icon: Github,
        },
        {
            label: "linkedin",
            href: "https://www.linkedin.com/in/rohan-mahto-5521aa253/",
            Icon: Linkedin,
        },
        {
            label: "twitter",
            href: "https://x.com/@Rohankumar0402",
            Icon: Twitter,
        },
        {
            label: "instagram",
            href: "https://www.instagram.com/rohankumarmahto01/",
            Icon: Instagram,
        },
    ];

    return (
        <footer className="bg-900 text-100 px-4 py-6 border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Social Links */}
                <div className="flex gap-4">
                    {socialMedia.map(({ label, href, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setHovered(label)}
                            onMouseLeave={() => setHovered("")}
                            className="p-2 transition border border-transparent bg-800"
                            style={{
                                color: hovered === label ? theme : "",
                                borderColor: hovered === label ? theme : "",
                                 borderRadius: borderRadius + 'px'
                            }}
                        >
                            <Icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>

                {/* Name and Love Message */}
                <p className="text-sm text-neutral-400 text-center">
                    Made with{" "}
                    <Heart className="inline-block w-4 h-4 text-red-500 animate-pulse" />{" "}
                    by <span className="font-semibold" style={{ color: theme }}>Rohan Kumar Mahto</span> © {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
