import { Check, Palette, X } from "lucide-react";
import { useAppSettings } from "../context/AppSettingsContext";
import { themeColors } from "../theme/colors";
import { useEffect, useState } from "react";
import { fontFamilies } from "../theme/fonts";
import { motion, AnimatePresence, spring } from "framer-motion";

const AppSettings = () => {
    const { theme, setTheme, font, setFont, borderRadius, setBorderRadius, resetAll } = useAppSettings();
    const [isOpen, setIsOpen] = useState(false);

    const buttonTap = {
        whileTap: {
            scale: 0.95,
            transition: { type: spring, stiffness: 300, damping: 20 },
        },
    };

    const contentParent = {
        hidden: { x: 50 },
        visible: {
            x: 0,
            transition: {
                staggerChildren: 0.15,
                duration: 0.3
            },
        },
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
        },
    };

    // back page ka scroll rokne ke liye jb appSetting sidebar open ho
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);


    return (
        <>
            <motion.button
                {...buttonTap}
                style={{ background: theme, borderRadius: borderRadius + "px" }}
                onClick={() => setIsOpen(true)}
                className="btn-default p-[.4rem] text-100 hover-80 cursor-pointer"
            >
                <Palette />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key={"overlay"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed top-0 left-0 h-screen w-screen bg-black/50 backdrop-blur-sm z-5-10 overflow-hidden"
                    />
                )}
                {isOpen && (
                    <div className="app-settings bg-blur-lg fixed top-0 right-0 h-full w-[22rem] z-50 overflow-y-scroll shadow-lg p-4">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={contentParent}
                        >
                            {/* Header */}
                            <motion.div
                                className="app-setting-header flex-between border-b border-neutral-600 pb-3"
                                variants={fadeInUp}
                            >
                                <h2 className="text-100 t-xl">App Settings</h2>
                                <motion.span {...buttonTap}>
                                    <X
                                        onClick={() => setIsOpen(false)}
                                        style={{
                                            border: `1px solid ${theme}`,
                                            borderRadius: borderRadius + "px",
                                        }}
                                        className="w-8 h-8 p-1 cursor-pointer"
                                    />
                                </motion.span>
                            </motion.div>

                            {/* Theme Section */}
                            <motion.div className="theme-section mt-4" variants={fadeInUp}>
                                <h3 className="pb-3 t-sm">Theme Colour</h3>
                                <div className="flex gap-3 flex-wrap">
                                    {Object.entries(themeColors).map(([key, value]) => (
                                        <motion.button
                                            {...buttonTap}
                                            key={key}
                                            onClick={() => setTheme(value)}
                                            style={{ background: value, borderRadius: borderRadius + "px" }}
                                            className={`w-8 h-8 flex-center cursor-pointer ${value === theme ? "border-2 text-200" : ""
                                                }`}
                                        >
                                            {value === theme && <Check className="p-1" />}
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Font Section */}
                            <motion.div className="theme-section mt-5" variants={fadeInUp}>
                                <h3 className="pb-3 t-sm">Font Family</h3>
                                <div className="flex flex-col gap-2 items-start">
                                    {Object.entries(fontFamilies).map(([key, value]) => (
                                        <button
                                            onClick={() => setFont(value)}
                                            key={key}
                                            style={{ fontFamily: value }}
                                            className="cursor-pointer flex-center gap-2 text-100"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={value === font}
                                                style={{ accentColor: theme }}
                                                readOnly
                                            />
                                            {key}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Border Radius */}
                            <motion.div className="theme-section mt-5" variants={fadeInUp}>
                                <h3 className="pb-3 t-sm">Border Radius</h3>
                                <div className="flex items-center gap-3 w-full">
                                    <input
                                        type="range"
                                        min={0}
                                        max={32}
                                        value={borderRadius}
                                        onChange={(e) => setBorderRadius(Number(e.target.value))}
                                        style={{ accentColor: theme }}
                                        className="w-full cursor-pointer"
                                    />
                                    <span className="text-100 w-[2.5rem] text-right">{borderRadius}px</span>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={fadeInUp}
                                className="w-full sm:my-10 mt-10 mb-24 flex-center"
                            >
                                <motion.button
                                    onClick={resetAll}
                                    {...buttonTap}
                                    style={{ border: `1px solid ${theme + "80"}`, borderRadius: borderRadius, background: theme + "20" }}
                                    className="w-full py-2 text-lg cursor-pointer">Reset All</motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AppSettings;
