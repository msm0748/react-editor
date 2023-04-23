import {
    MdFormatAlignLeft,
    MdFormatAlignCenter,
    MdFormatAlignRight,
    MdFormatAlignJustify,
    MdFormatListNumbered,
    MdFormatListBulleted,
    MdFormatBold,
} from "react-icons/md";
import { RiStrikethrough2, RiItalic, RiUnderline } from "react-icons/ri";

type IconName =
    | "orderedList"
    | "unorderedList"
    | "alignLeft"
    | "alignCenter"
    | "alignRight"
    | "alignJustify"
    | "strikethrough"
    | "bold"
    | "italic"
    | "underline";

const iconList: Record<IconName, JSX.Element> = {
    orderedList: <MdFormatListNumbered size={20} />,
    unorderedList: <MdFormatListBulleted size={20} />,
    alignLeft: <MdFormatAlignLeft size={20} />,
    alignCenter: <MdFormatAlignCenter size={20} />,
    alignRight: <MdFormatAlignRight size={20} />,
    alignJustify: <MdFormatAlignJustify size={20} />,
    strikethrough: <RiStrikethrough2 size={20} />,
    bold: <MdFormatBold size={20} />,
    italic: <RiItalic size={20} />,
    underline: <RiUnderline size={20} />,
};

interface IconProps {
    icon: IconName;
}

export default function Icon({ icon }: IconProps) {
    return iconList[icon];
}
