import "./Header.css";

export function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div>
          <a href="/">Home</a>
        </div>

        <div>
          <a href="/">Decks</a>
        </div>

        <div>
          <a href="/login">Login</a>
        </div>
        <div>
          <a href="/profile">Profile</a>
        </div>
      </div>
    </div>
  );
}
