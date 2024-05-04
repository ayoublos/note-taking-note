import "./Footer.scss";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="Footer">
      <ul>
        <li>2024 MyNotes</li>
        <li>
          <Link to="https://github.com/ayoublos/note-taking-note">
            See the Source Code
          </Link>
        </li>
      </ul>
    </footer>
  );
}
