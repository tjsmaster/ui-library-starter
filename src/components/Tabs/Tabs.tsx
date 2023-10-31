import * as React from "react";

import cx from "classnames";

import { Button } from "../Button/Button";
import { colors } from "../../utils/colors";

interface ValueTypes {
    titles: string[];
    setTitles: React.Dispatch<React.SetStateAction<string[]>>;
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

interface RendererProps {
    title: string;
    isActive: boolean;
    activeTabHandler: () => void;
}

const initialValues: ValueTypes = {
    titles: [],
    activeIndex: 0,
    setTitles: () => {},
    setActiveIndex: () => {},
};

const TabContext = React.createContext(initialValues);

export const DefaultRenderer = ({ title, isActive, activeTabHandler }: RendererProps) => {
    return (
        <p
            className={cx(
                "inline-block py-4 mx-5 first:ml-[25px] text-sm leading-6 font-medium text-primary-text cursor-pointer",
                {
                    [`border-b-2 text-primary border-primary`]: isActive,
                    ["border-b-2 border-white"]: !isActive,
                },
            )}
            onClick={activeTabHandler}
        >
            {title}
        </p>
    );
};

export const ButtonRenderer = ({ title, isActive, activeTabHandler }: RendererProps) => {
    return (
        <Button
            style={{ borderColor: colors.stroke }}
            color={isActive ? "primary" : "tertiary"}
            variant={isActive ? "default" : "outlined"}
            onClick={activeTabHandler}
            className="my-3 first:ml-3 ml-[7px] bg-grey-2"
            size="Medium"
        >
            {title}
        </Button>
    );
};

export function Tabs({ children, titleRenderer: TitleRenderer = DefaultRenderer }: TabsProps) {
    const [titles, setTitles] = React.useState<string[]>([]);
    const [activeIndex, setActiveIndex] = React.useState<number>(0);

    return (
        <TabContext.Provider value={{ titles, setTitles, activeIndex, setActiveIndex }}>
            <div className={cx("flex items-center")}>
                {titles.map((title, index) => (
                    <TitleRenderer
                        key={title + index}
                        isActive={index === activeIndex}
                        title={title}
                        activeTabHandler={() => setActiveIndex(index)}
                    />
                ))}
            </div>
            <div>{children}</div>
        </TabContext.Provider>
    );
}

export function Tab({ title, children }: TabProps) {
    const context = React.useContext(TabContext);
    if (!context) throw new Error("Tab must be used inside the Tabs component.");

    React.useEffect(() => {
        if (!context.titles.includes(title)) {
            context.setTitles(prev => [...prev, title]);
        }
    }, [title]);

    const currentIndex = context.titles.findIndex(x => x === title);

    return currentIndex === context.activeIndex && <div>{children}</div>;
}

Tabs.Tab = Tab;

interface TabsProps {
    children: React.ReactNode;
    titleRenderer?: React.FC<RendererProps>;
}

interface TabProps {
    title: string;
    children: React.ReactNode;
}