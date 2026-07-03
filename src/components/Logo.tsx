export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <div className="flex items-center">
      <img
        src="/samtechlogo.png"
        alt="Samtech Fabrication Venture"
        className={`h-20 w-auto object-contain ${variant === "dark" ? "brightness-95" : ""}`}
      />
    </div>
  );
}
