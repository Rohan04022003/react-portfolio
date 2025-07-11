import { FolderGit2, Home, Mail, PenLine, User } from "lucide-react";
import type { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSettings } from "../context/AppSettingsContext";
import { motion } from "framer-motion";

const Navbar = () => {

    const location = useLocation();
    const { theme, borderRadius } = useAppSettings();

    type NavLinkProps = {
        label: string;
        path: string;
        icon: ReactElement;
    };

    const navLinks: NavLinkProps[] = [
        { label: "Home", path: "/", icon: <Home size={18} /> },
        { label: "About", path: "/about", icon: <User size={18} /> },
        { label: "Projects", path: "/projects", icon: <FolderGit2 size={18} /> },
        { label: "Contact", path: "/contact", icon: <Mail size={18} /> },
        { label: "Blog", path: "/blog", icon: <PenLine size={18} /> },
    ];

    //button click animation

    const buttonTap = {
        initial: { scale: 1 },
        whileTap: {
            scale: [0.95, 1.05, 1],
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
        },
    };

    return (
        <div
            style={{ border: `1px solid ${theme + "40"}`, borderRadius: borderRadius + 'px' }} className={`sm:w-auto w-48 navbar bg-blur-lg sm:relative sm:flex-row flex-col fixed sm:top-0 top-18 sm:right-0 right-4 overflow-hidden`}>
            {
                navLinks.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <motion.button
                            key={index}
                            {...buttonTap}
                            className="w-full"
                        >
                            <Link

                                style={{ borderRadius: borderRadius + 'px' }} to={item.path} className={`navlinks w-full ${isActive ? "bg-neutral-100 w-full" : ""}`}><span className={`${isActive ? "text-neutral-800" : "text-neutral-400"}`}>{item.icon}</span><span className={`${isActive ? "flex text-neutral-800" : "sm:hidden"}`}>{item.label}</span></Link>
                        </motion.button>
                    )
                })
            }
        </div>
    )
}

export default Navbar