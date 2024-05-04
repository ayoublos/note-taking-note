import './Header.scss';

export default function Header() {
  return (
    <header className="Header">
      <div>MyNotes App</div>
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
