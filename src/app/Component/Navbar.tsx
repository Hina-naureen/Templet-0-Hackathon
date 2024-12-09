
import Link from 'next/link';
import { Heart, Menu, Search, ShoppingCart, User,  } from 'lucide-react';

export function NavBar({ bgColor = 'bg-[#FBEBB5]' }: { bgColor?: string }) {
  return (
    <nav className={`${bgColor} px-6 py-4`}>
      <div className="flex items-center justify-between">
        {/* Desktop and Larger Screens (hidden on mobile) */}
        <div className="hidden md:flex space-x-14 ml-20 items-center justify-center w-full">
          <NavLinks />
        </div>

        {/* Mobile View - Visible only on smaller screens */}
        <div className="flex mr-3 items-center space-x-5">
          <NavIcons />
          <button className="md:hidden p-2">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (only visible when the menu button is clicked) */}
      <div className="md:hidden overflow-hidden transition-all duration-300 ease-in-out">
        <div className="pt-4 pb-2 space-y-2 text-center">
          <NavLinks mobile />
        </div>
      </div>
    </nav>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass = mobile
    ? 'block py-2 text-sm font-medium'
    : 'text-sm font-medium text-center';

  return (
    <>
      <Link className={linkClass} href="/">
        Home
      </Link>
      <Link className={linkClass} href="/Shop">
        Shop
      </Link>
      <Link className={linkClass} href="/about">
        About
      </Link>
      <Link className={linkClass} href="/contact">
        Contact
      </Link>
    </>
  );
}

function NavIcons() {
  return (
    <>
      <button className="p-2">
        <User className="h-5 w-5" />
        <span className="sr-only">Account</span>
      </button>
      <button className="p-2">
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </button>
      <button className="p-2">
        <Heart className="h-5 w-5" />
        <span className="sr-only">Wishlist</span>
      </button>
      <button className="p-2">
        <ShoppingCart className="h-5 w-5" />
        <span className="sr-only">Cart</span>
      </button>
    </>
  );
}