import Link from 'next/link';

type HeaderProps = {
  siteTitle: string;
  siteAuthor: string;
};

const Header: React.FC<HeaderProps> = ({ siteTitle, siteAuthor }) => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <Link href="/">
          <span className="text-lg font-bold">{siteAuthor}</span>
        </Link>
        <nav className="flex items-center">
          <Link href="/">
            <span className="px-3 py-2 hover:bg-gray-800 rounded">Home</span>
          </Link>
          <Link href="/about">
            <span className="px-3 py-2 hover:bg-gray-800 rounded">About</span>
          </Link>
          <Link href="/contact">
            <span className="px-3 py-2 hover:bg-gray-800 rounded">Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
