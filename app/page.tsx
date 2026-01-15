import Image from "next/image";
import HomePage from "./pages/home/page";
import Footer from "./components/ui/footer";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Footer />
    </div>
  );
}
