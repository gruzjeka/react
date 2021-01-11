export default function MenuItem(props) {
    const url = `/${props.title.toLowerCase().trim().replace(' ', '-')}`;
    return <span>
        <a href={url}>{props.title}</a>
        <br />
    </span>;
}

MenuItem.defaultProps = {
    title: ''
};