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
          <a className="text-lg font-bold">{siteAuthor}</a>
        </Link>
        <nav className="flex items-center">
          <Link href="/">
            <a className="px-3 py-2 hover:bg-gray-800 rounded">Home</a>
          </Link>
          <Link href="/about">
            <a className="px-3 py-2 hover:bg-gray-800 rounded">About</a>
          </Link>
          <Link href="/contact">
            <a className="px-3 py-2 hover:bg-gray-800 rounded">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
