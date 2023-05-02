import { EditorMenuButton } from "../common/button";
import { DropDown, ColorSelect, Link } from "../common/select";

export default function RenderMenuItem(item: EditorMenuItem) {
    switch (item.type) {
        case "dropdown":
            return item.options ? <DropDown options={item.options} /> : null;
        case "button":
            return <EditorMenuButton icon={item.icon} action={item.action} isActive={item.isActive} title={item.title} />;
        case "colorSelect":
            return item.options ? (
                <ColorSelect options={item.options} action={item.action} isActive={item.isActive} getAttributes={item.getAttributes} mode="color" />
            ) : null;
        case "bgColorSelect":
            return item.options ? (
                <ColorSelect options={item.options} action={item.action} isActive={item.isActive} getAttributes={item.getAttributes} mode="bgColor" />
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
