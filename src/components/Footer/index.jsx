import { Link } from "react-router-dom";

const Footer = () => (
    <footer>
        <Link to="/">Clássica</Link>
        <Link to="/function">Hooks</Link>
        <Link to="/hook">Memo</Link>
        <Link to="/context">Context</Link>
        <Link to="/reducer">Reducer</Link>
    </footer>
)

export default Footer