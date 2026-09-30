import Link from "next/link";

// The home button: the black flower in the top-left corner, on every page.
// It turns slowly all the time and holds still while the mouse is on it.
// Pausing rather than removing the animation keeps it where it stopped.
// On hover it also turns the same pink as the front-page buttons, which is
// why the flower is drawn inline here: its colour follows the link's text
// colour, so CSS can change it.
export default function HomeLink() {
  return (
    <Link
      href="/"
      aria-label="Home"
      className="group absolute top-4 left-4 z-50 block text-black transition-colors duration-200 hover:text-[#ff7eb6] sm:top-14 sm:left-10"
    >
      <svg
        aria-hidden
        viewBox="52 43 155 155"
        className="h-20 w-20 animate-[spin_20s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none sm:h-40 sm:w-40"
      >
        <path
          fill="currentColor"
          d="M115.206 58.8815C118.837 43.9247 140.163 43.9247 143.794 58.8815C146.098 68.3738 156.917 72.9895 165.339 68.041L168.352 66.2705C181.02 58.8269 194.938 73.8004 186.687 85.9583C181.215 94.0223 185.655 105.084 195.192 107.089C209.707 110.139 209.707 130.861 195.192 133.911C185.655 135.916 181.215 146.978 186.687 155.042C194.938 167.2 181.02 182.173 168.352 174.729L165.339 172.959C156.917 168.01 146.098 172.626 143.794 182.118C140.163 197.075 118.837 197.075 115.206 182.118C112.902 172.626 102.083 168.01 93.6615 172.959L90.6483 174.729C77.9802 182.173 64.0619 167.2 72.3127 155.042C77.7852 146.978 73.3448 135.916 63.8075 133.911C49.2934 130.861 49.2934 110.139 63.8075 107.089C73.3448 105.084 77.7852 94.0223 72.3127 85.9583C64.0619 73.8004 77.9802 58.8269 90.6483 66.2705L93.6614 68.041C102.083 72.9895 112.902 68.3738 115.206 58.8815Z"
        />
      </svg>
    </Link>
  );
}
