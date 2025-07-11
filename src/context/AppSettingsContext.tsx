import { createContext, useContext, useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { themeColors } from "../theme/colors";
import { fontFamilies } from "../theme/fonts";

type AppSettingsContextType = {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    font: string;
    setFont: Dispatch<SetStateAction<string>>;
    borderRadius: number;
    setBorderRadius: Dispatch<SetStateAction<number>>;
    resetAll: () => void;
};

const AppSettingsContext = createContext<AppSettingsContextType | undefined>(undefined);

export const AppSettingsProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(themeColors.lemonLime);
    const [font, setFont] = useState(fontFamilies.inter);
    const [borderRadius, setBorderRadius] = useState(7);

    // Load settings from localStorage once on mount
    useEffect(() => {
        const saved = localStorage.getItem("settings");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (parsed.themeColour) setTheme(parsed.themeColour);
                if (parsed.fontFamily) setFont(parsed.fontFamily);
                if (parsed.borderR !== undefined) setBorderRadius(parsed.borderR);
            } catch (err) {
                console.error("Failed to parse settings:", err);
            }
        }
    }, []);

    // Save settings to localStorage whenever any of them changes
    useEffect(() => {
        const newSettings = {
            themeColour: theme,
            fontFamily: font,
            borderR: borderRadius,
        };
        localStorage.setItem("settings", JSON.stringify(newSettings));
    }, [theme, font, borderRadius]);

    const resetAll = () => {
        setTheme(themeColors.lemonLime)
        setFont(fontFamilies.inter)
        setBorderRadius(7)
    }

    return (
        <AppSettingsContext.Provider value={{ theme, setTheme, font, setFont, borderRadius, setBorderRadius, resetAll }}>
            {children}
        </AppSettingsContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppSettings = () => {
    const context = useContext(AppSettingsContext);
    if (!context) throw new Error("useAppSettings must be used within AppSettingsProvider");
    return context;
};
