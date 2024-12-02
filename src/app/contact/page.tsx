export const metadata = {
  title: "Contact - Hoetzin",
  description:
    "Learn more about Hoetzin and our mission to provide quality education for everyone.",
  openGraph: {
    title: "Contact - Hoetzin",
    description:
      "Learn more about Hoetzin and our mission to provide quality education for everyone.",
    url: "https://www.hoetzin.com/about",
    images: [
      {
        url: "https://www.hoetzin.com/public/about-cover.jpg",
        width: 800,
        height: 600,
        alt: "Contact - Hoetzin",
      },
    ],
  },
};

export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Keep in touch</p>
      {/* Here should be a div for student advisor name and image. This div should be on the left.
      The contact us form should be on the right. 
      In mobile view, student adivsor should be above and the contact form should be below */}
    </div>
  );
}
