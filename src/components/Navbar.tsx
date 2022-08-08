import '../css/Navbar.css';
export const Navbar: React.FC<{
    name: string;
    elements: { name: string; url: string }[];
}> = props => {
    const links = props.elements.map(element => (
        <a key={element.name} href={element.url}>
            {element.name}
        </a>
    ));
    return (
        <nav>
            <img src="logo.webp"></img>
            <div>{links}</div>
        </nav>
    );
};
