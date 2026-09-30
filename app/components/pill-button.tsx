import Link from "next/link";

// The black rounded button from the front page, leading to another page.
export default function PillButton({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <Link
      href={href}
      className="flex h-16 w-full max-w-[364px] items-center justify-center whitespace-nowrap rounded-full bg-black px-6 text-[20px] font-bold text-cream transition-colors duration-200 hover:bg-[#ff7eb6] hover:text-black sm:h-[92px] sm:w-auto sm:min-w-[364px] sm:max-w-none sm:text-[24px]"
    >
      {children}
    </Link>
  );
}
