import { MenuButton } from "../common/button";
import { ColorSelect, DropDown } from "../common/select";

interface ButtonMenuItem {
    type: string;
    icon: JSX.Element;
    title: string;
    action: () => boolean;
    isActive?: () => boolean;
    options?: undefined;
}

interface ColorSelectMenuItem {
    type: string;
    options: {
        title: string;
        action: () => boolean;
        isActive: () => boolean;
    }[];
    changeColor?: (value: string) => boolean;
    action?: undefined;
    icon?: undefined;
    title?: undefined;
    isActive?: undefined;
}

type MenuItem = ButtonMenuItem | ColorSelectMenuItem;

export default function RenderMenuItem(item: MenuItem) {
    switch (item.type) {
        case "dropdown":
            return item.options ? <DropDown options={item.options} /> : null;
        case "button":
            return <MenuButton icon={item.icon} action={item.action} isActive={item.isActive} title={item.title} />;
        case "colorSelect":
            return item.options ? <ColorSelect options={item.options} changeColor={item.changeColor} mode="color" /> : null;
        case "bgColorSelect":
            return item.options ? <ColorSelect options={item.options} changeColor={item.changeColor} mode="bgColor" /> : null;
        default:
            return null;
    }
}
