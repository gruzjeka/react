import MenuItem from "./menu-item";

export default function Menu(props) {
    return <ul>{props.items.map((item, index) => <li key={index}><MenuItem title={item} /></li>)}</ul>
}

Menu.defaultProps = {
    items: []
};