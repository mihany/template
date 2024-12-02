export const metadata = {
  title: "Blog - Hoetzin",
  description:
    "Learn more about Hoetzin and our mission to provide quality education for everyone.",
  openGraph: {
    title: "Blog - Hoetzin",
    description:
      "Learn more about Hoetzin and our mission to provide quality education for everyone.",
    url: "https://www.hoetzin.com/about",
    images: [
      {
        url: "https://www.hoetzin.com/public/about-cover.jpg",
        width: 800,
        height: 600,
        alt: "Blog - Hoetzin",
      },
    ],
  },
};

export default function Blog() {
  return (
    <>
      <div>
        <h1>Blog</h1>
        <p>Check recent articles</p>
      </div>
    </>
  );
}
