import { Hero, About, JoinUs, ProjectList, Lines, Partners} from '@components/Home/index'
import { NavBar, Footer } from '@layout/index'

function Home() {
  return (
    <>
    <NavBar />
    <Hero />
    <About />
    <JoinUs />
    <ProjectList />
    <Lines />
    <Partners />
    <Footer />
    </>
  );
}

export default Home;
