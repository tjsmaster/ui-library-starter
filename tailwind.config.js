/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                dropdown: " 0px 1px 3px 0px rgba(166, 175, 195, 0.40)",
                popover: " 0px 5px 12px 0px rgba(0, 0, 0, 0.10);",
            },
            colors: {
                primary: "#009AEE",
                secondary: "#25CBA1",
                "primary-text": "#637381",
                "secondary-text": "#8899A8",
                stroke: "#DFE4EA",
                dark: "#111928",
                "dark-2": "#1F2A37",
                "dark-3": "#374151",
                "dark-4": "#4B5563",
                "dark-5": "#6B7280",
                "dark-6": "#9CA3AF",
                "dark-7": "#D1D5DB",
                "dark-8": "#E5E7EB",
                white: "#FFFFFF",
                "grey-1": "#F9FAFB",
                "grey-2": "#F3F4F6",
                "grey-3": "#E5E7EB",
                "grey-4": "#DEE2E6",
                "grey-5": "#CED4DA",
                "grey-6": "#CED4DA",
                "grey-7": "#CED4DA",
                "grey-8": "#EAEEFB",
                "grey-9": "#EFF2FF",
                "grey-10": "#E7EAED",
                "blue-dark": "#1484CD",
                blue: "#00ADF2",
                "blue-light": "#00BFFF",
                "blue-light-2": "#00CDFE",
                "blue-light-3": "#4EDDFF",
                "blue-light-4": "#7BD9F6",
                "blue-light-5": "#C6F1FF",
                "blue-light-6": "#E9F9FF",
                "teal-dark": "#1EAA87",
                teal: "#02AAA4",
                "teal-dark-2": "#06A09B",
                "teal-light": "#20D9D2",
                "teal-light-2": "#72DDC3",
                "teal-light-3": "#C2F5E9",
                "teal-light-4": "#25CBA1",
                orange: "#F27430",
                "orange-dark": "#E1580E",
                "orange-light": "#F59460",
                "orange-light-2": "#F8B490",
                "orange-light-3": "#FBD5C0",
                "orange-light-4": "#FDE5D8",
                "orange-light-5": "#FFF0E9",
                red: "#F23030",
                "red-dark": "#E10E0E",
                "red-light": "#F56060",
                "red-light-2": "#F89090",
                "red-light-3": "#F8C0C0",
                "red-light-4": "#FDD8D8",
                "red-light-5": "#FEEBEB",
                "red-light-6": "#FEF3F3",
                pink: "#D345F8",
                "pink-dark": "#C814F6",
                "pink-light": "#DF76FA",
                "pink-light-2": "#EAA7FC",
                "pink-light-3": "#F6D8FE",
                "pink-light-4": "#FCF1FE",
                purple: "#8646F4",
                "purple-dark": "#6D28D9",
                "purple-dark-2": "#5B21B6",
                "purple-light": "#A78BFA",
                "purple-light-2": "#C4B5FD",
                "purple-light-3": "#DDD6FE",
                "purple-light-4": "#EDE9FE",
                "purple-light-5": "#F5F3FF",
                yellow: "#FBBF24",
                "yellow-dark": "#F59E0B",
                "yellow-dark-2": "#D97706",
                "yellow-light": "#FCD34D",
                "yellow-light-2": "#FDE68A",
                "yellow-light-3": "#FEF3C7",
                "yellow-light-4": "#FFFBEB",
                cyan: "#01A9DB",
                "cyan-dark": "#0B76B7",
                "cyan-light": "#18BFFF",
                "cyan-light-2": "#77D1F3",
                "cyan-light-3": "#D0F0FD",
                green: "#22AD5C",
                "green-dark": "#1A8245",
                "green-light": "#2CD673",
                "green-light-2": "#57DE8F",
                "green-light-3": "#82E6AC",
                "green-light-4": "#ACEFC8",
                "green-light-5": "#C2F3D6",
                "green-light-6": "#DAF8E6",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
