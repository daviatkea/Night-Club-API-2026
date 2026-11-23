import { IoCloseOutline } from "react-icons/io5";

const menuItems = [
  { label: "HOME", href: "/" },
  { label: "EVENTS", href: "/eventsdetail" },
  { label: "BOOK TABLE", href: "/eventspage" },
  { label: "CONTACT US", href: "/contactpage" },
];

export function Menuoverlay({ open, onClose }) {
  if (!open) {
    return null;
  }

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-50 flex flex-col bg-[url('/assets/bg/header_bg_2.jpg')] bg-cover bg-center bg-no-repeat  p-6 text-white"
    >
      <div aria-hidden="true" className="absolute inset-0 z-10 bg-black/75" />
      <img
        src="/assets/icon/Logo.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-72 max-w-[85vw] -translate-x-1/2 -translate-y-1/2"
      />
      <div className="relative z-30 flex flex-1 flex-col">
        <div className="flex justify-end">
          <button
            type="button"
            className="rounded px-4 py-2 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
            onClick={onClose}
          >
            <IoCloseOutline size={60} />
          </button>
        </div>
        <nav aria-label="Hovedmenu" className="flex flex-1 mt-15 justify-center">
          <ul className="space-y-6 text-center text-3xl font-bold">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a className="hover:text-pink-500 focus-visible:text-pink-500 focus-visible:outline-none" href={item.href} onClick={onClose}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="relative z-0">
        <header className="flex items-center justify-between">
          <img src="/assets/logo.png" alt="Logo" className="h-12 w-auto" />
        </header>
        <div aria-hidden="true" className="pointer-events-none absolute bottom-6 right-1 z-0 flex -translate-x-1/2 flex-col gap-1.5">
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </div>
      </div>
    </div>
  );
}
