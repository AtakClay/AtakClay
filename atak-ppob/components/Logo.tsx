export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      
      {/* Background Circle */}
      <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" />
      
      {/* Letter A */}
      <path
        d="M 35 70 L 45 35 L 55 35 L 65 70 M 42 55 L 58 55"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Lightning bolt accent */}
      <path
        d="M 70 25 L 60 45 L 68 45 L 58 65"
        stroke="#FCD34D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
