import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="Header">
      <div className='logo'>MyNotes App</div>
      <nav>
        <ul>
          <li>My Notes</li>
          <li>Add New Note</li>
          <li>About Us</li>
        </ul>
      </nav>
    </header>
  );
}
