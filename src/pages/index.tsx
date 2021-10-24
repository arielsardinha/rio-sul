import Nav from "@components/navbar/menuNav";
import Header from "@partials/header/header";
import SectionOne from "@partials/sections/section1/section1";
import SectionTwo from "@partials/sections/section2/section2";
import SectionThree from "@partials/sections/section3/section3";
import SectionFour from "@partials/sections/section4/section4";
import SectionFive from "@partials/sections/section5/section5";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </main>
    </>
  );
}
