export default function Header() {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between h-[90px] border-b border-gray-200 responsive-x-padding bg-white">
        <a className="cursor-pointer" href="./">
          Wei-Cheng Kao
        </a>
        <ul className="flex space-x-8">
          <li>
            <a href="./">About</a>
          </li>
          <li>
            <a
              href="/Wei-Cheng-Resume-Design-Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
