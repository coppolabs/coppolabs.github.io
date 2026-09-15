import { useTranslation } from "react-i18next";
import { Globe, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" }
];

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    // Extract 2-letter code and ensure it's strictly 'en' or 'de'
    const detected = i18n.language?.slice(0, 2).toLowerCase();
    const currentLang = languages.some((lang) => lang.code === detected) ? detected : "en";

    const handleLanguageChange = (code: string) => {
        i18n.changeLanguage(code);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1 px-2.5 text-xs font-semibold uppercase tracking-wider text-foreground/80 hover:text-foreground"
                    aria-label="Select language"
                >
                    <Globe className="h-3.5 w-3.5" />
                    <span>{currentLang}</span>
                    <ChevronDown className="h-3 w-3 opacity-60" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="min-w-[120px]">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="flex items-center justify-between text-xs font-medium cursor-pointer"
                    >
                        <span>{lang.label}</span>
                        {currentLang === lang.code && (
                            <Check className="h-3.5 w-3.5 text-primary" />
                        )}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};