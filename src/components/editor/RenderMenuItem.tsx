import { EditorMenuButton } from "../common/button";
import { DropDown, ColorSelect } from "../common/select";

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
        default:
            return null;
    }
}
