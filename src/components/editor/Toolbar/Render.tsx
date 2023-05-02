import { EditorMenuButton } from "../common/Button";
import { Heading, ColorPicker, Link } from "../Elements";

export default function RenderMenuItem(item: EditorMenuItem) {
    switch (item.type) {
        case "heading":
            return item.options ? <Heading options={item.options} /> : null;
        case "button":
            return <EditorMenuButton icon={item.icon} action={item.action} isActive={item.isActive} title={item.title} />;
        case "colorPicker":
            return item.options ? (
                <ColorPicker
                    title={item.title}
                    options={item.options}
                    action={item.action}
                    isActive={item.isActive}
                    getAttributes={item.getAttributes}
                    mode="color"
                />
            ) : null;
        case "bgColorPicker":
            return item.options ? (
                <ColorPicker
                    title={item.title}
                    options={item.options}
                    action={item.action}
                    isActive={item.isActive}
                    getAttributes={item.getAttributes}
                    mode="bgColor"
                />
            ) : null;
        case "link":
            return (
                <Link
                    icon={item.icon}
                    isDragging={item.isDragging}
                    action={item.action}
                    customAction={item.customAction}
                    isActive={item.isActive}
                    title={item.title}
                    unset={item.unset}
                    getAttributes={item.getAttributes}
                ></Link>
            );
        default:
            return null;
    }
}
