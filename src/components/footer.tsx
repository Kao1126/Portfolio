export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="responsive-x-padding flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          <p className="font-bold">Wei-Cheng Kao</p>
        </div>
        <ul className="flex flex-col sm:flex-row gap-4 text-center sm:text-left">
          <li>
            <a
              href="/Wei-Cheng-Resume-Design-Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="./" className="hover:underline">
              About
            </a>
          </li>
        </ul>
        <div className="text-center sm:text-right">
          <p>Copyright 2025 by Wei-Cheng Kao</p>
        </div>
      </div>
    </footer>
  );
}
