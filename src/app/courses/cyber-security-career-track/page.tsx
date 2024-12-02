import Image from "next/image";

export default function CyberSecurityCareerTrack() {
  return (
    <div>
      <h1>Cyber Security Track Course Page</h1>
      <p>Welcome to Cyber Security Track</p>
      <Image
        className="dark:invert"
        src="../next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </div>
  );
}
