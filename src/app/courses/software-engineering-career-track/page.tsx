import Image from "next/image";

export default function SoftwareEngineeringCareerTrack() {
  return (
    <div>
      <h1>Software Engineering Track Course Page</h1>
      <p>Welcome to Software Engineering Track</p>
      <Image
        className="dark:invert"
        src="./images/imageplaceholder.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </div>
  );
}
