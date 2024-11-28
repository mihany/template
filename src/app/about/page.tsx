export const metadata = {
  title: "About Us - Hoetzin",
  description:
    "Learn more about Hoetzin and our mission to provide quality education for everyone.",
  openGraph: {
    title: "About Us - Hoetzin",
    description:
      "Learn more about Hoetzin and our mission to provide quality education for everyone.",
    url: "https://www.hoetzin.com/about",
    images: [
      {
        url: "https://www.hoetzin.com/public/about-cover.jpg",
        width: 800,
        height: 600,
        alt: "About Us - Hoetzin",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to Hoetzin. Here&apos;s what we&apos;re about...</p>
    </div>
  );
}
