import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="Header">
      <Link to="/">
        <div className="logo">MyNotes App</div>
      </Link>
      <nav>
        <ul>
          <Link to="/">
            <li>My Notes</li>
          </Link>
          <Link to="/notes/new">
            <li>Add New Note</li>
          </Link>
          <Link to="/aboutus">
            <li>About Us</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
