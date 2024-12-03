import Image from "next/image";

export default function DataScienceCareerTrack() {
  return (
    <div>
      <h1>Data Science Track Course Page</h1>
      <p>Welcome to Data Science Track</p>
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
