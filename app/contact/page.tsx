import Footer from "@/components/Footer";
import Contact from "@/components/pages/landing-page/Contact";

export const metadata = {
  title: "Contact | John Mhel Dalumpines",
  description:
    "Contact John Mhel Dalumpines for freelance work, internships, collaborations, and full-time opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <main className="bg-background pt-24 text-foreground">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
