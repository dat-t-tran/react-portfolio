interface NavigationProps {
  id: number;
  name: string;
  href: string;
}

export const navigation: NavigationProps[] = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Services", href: "/doctors" },
  { id: 3, name: "Find a Doctor", href: "/doctors" },
  { id: 4, name: "About Us", href: "/about" },
];
