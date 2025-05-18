export default function Header() {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between h-[90px] border-b border-gray-200 responsive-x-padding bg-white">
        <h1>Wei-Cheng Kao</h1>
        <ul className="flex space-x-8">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
