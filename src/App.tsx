import {
  Bookmark,
  Code,
  Database,
  Facebook,
  Github,
  Globe,
  Heart,
  Linkedin,
  Mail,
  Plus,
  Server,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import ProjectTable from "./PorjectTable";
import { ReactNode } from "react";

// Composant Layout pour gérer le header fixe et le contenu
function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="z-50 fixed left-0 top-0 bg-black h-[50px] w-[100vw]">
        <div className="h-[100%] w-[100%] flex justify-between items-center">
          <div className="ml-[8px] h-[48px] flex justify-center items-center">
            <Bookmark className="stroke-2 text-white" />
          </div>
          <nav className="mx-8 h-[100%] flex items-center justify-between">
            <div></div>
            <div>
              <Link
                to="/"
                className="px-[10px] py-[6px] rounded-lg hover:bg-gray-900 "
              >
                Home
              </Link>
              <Link
                to="/#Resume"
                className="px-[10px] py-[6px] rounded-lg hover:bg-gray-900 "
              >
                Resume
              </Link>
              <Link
                to="/#Skills"
                className="px-[10px] py-[6px] rounded-lg hover:bg-gray-900 "
              >
                Skills
              </Link>
              <Link
                to="/contact"
                className="px-[10px] py-[6px] rounded-lg hover:bg-gray-900 "
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-[50px]">{children}</main>
    </>
  );
}

const projects = [
  {
    name: "DHCP and Iptables",
    description: "Web application",
    startDate: "2024-05-01",
    endDate: "2024-05-13",
    status: "Finished",
    link: "https://github.com/Njivaniaina/dhcp-iptables",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <section className="bg-[#0A0A0A] min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
                  <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                      <h2 className="text-[#DB2B2B] text-xl sm:text-2xl md:text-3xl font-bold">
                        Hello, my name is
                      </h2>
                      <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px]">
                        RAZAFINDRAKOTO Fenosoa Njivaniaina
                      </h1>
                      <span className="text-[#A7A5A5] text-sm sm:text-base md:text-lg">
                        System Administrator and web developer (back-end and
                        front-end)
                      </span>
                      <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <a href="https://njivaniaina.github.io/contact">
                          <Button className="bg-[#EA2727] text-white w-full sm:w-auto">
                            Contact-me
                          </Button>
                        </a>
                        <a
                          href="/CV.pdf"
                          className="w-full sm:w-auto"
                        >
                          <Button className="bg-[#EA2727] text-white w-full">
                            View CV
                          </Button>
                        </a>
                      </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                      <div className="w-full max-w-[374px] aspect-[374/366] bg-gradient-to-b from-[#EA2727] to-[#000000] overflow-hidden">
                        <img
                          src="/me.png"
                          alt="Image"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  id="Resume"
                  className="bg-[#0D0E0C] min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16"
                >
                  <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
                    <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
                      <div className="w-full max-w-[374px] aspect-[374/366] bg-gradient-to-b from-[#EA2727] to-[#000000] overflow-hidden">
                        <img
                          src="/developer.png"
                          alt="Image"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                        About me
                      </h2>
                      <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
                        Who am I?
                      </h1>
                      <span className="text-[#A7A5A5] text-sm sm:text-base md:text-lg block mt-4">
                        Student in computer science school of the University of
                        Antananarivo <br />
                        at MISA in license 3, System and network administrator
                        in computer <br />
                        science: swimming, different network service (DHCP,
                        iptables). <br />
                        Also website developer with React, Next.js, PHP
                        (CodeIgniter), Tailwind, HTML, and CSS. <br />
                        My training: <br />
                        - In 2023: Licence 1 in IT <br />
                        - In 2024: Bachelor's degree 2 in IT <br />
                        - In 2025: Licence 3 in MISA (in progress now)
                      </span>
                      <div className="flex flex-col sm:flex-row gap-4 mt-6 bg-black p-4 w-full max-w-[375px] rounded-sm">
                        <a href="https://github.com/Njivaniaina">
                          <Button className="bg-[#171717] text-white w-full sm:w-auto flex items-center gap-2">
                            <Github /> GitHub
                          </Button>
                        </a>

                        <a href="https://gmail.com">
                          <Button className="bg-[#171717] text-white w-full sm:w-auto flex items-center gap-2">
                            <Mail /> E-mail
                          </Button>
                        </a>
                        <a href="https://linkedin.com">
                          <Button className="bg-[#171717] text-white w-full sm:w-auto flex items-center gap-2">
                            <Linkedin /> LinkedIn
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  id="Skills"
                  className="bg-[#0A0A0B] min-h-screen p-4 sm:p-8 md:p-12 lg:p-16 flex items-center justify-center"
                >
                  <div className="max-w-6xl w-full mx-auto">
                    <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                      My skills
                    </h2>
                    <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-8">
                      What I can do?
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="flex flex-col items-center justify-center p-4 bg-[#434242] rounded-lg">
                        <Globe className="w-8 h-8 text-[#EA2727] mb-2" />
                        <h3 className="text-lg font-semibold mb-2">Language</h3>
                        <span className="text-[#A7A5A5] text-center">
                          English, French, Malagasy
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-[#434242] rounded-lg">
                        <Code className="w-8 h-8 text-[#EA2727] mb-2" />
                        <h3 className="text-lg font-semibold mb-2">
                          Programming Languages
                        </h3>
                        <span className="text-[#A7A5A5] text-center">
                          C, C++, PHP, JavaScript, Bash, Python, Java
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-[#434242] rounded-lg">
                        <Database className="w-8 h-8 text-[#EA2727] mb-2" />
                        <h3 className="text-lg font-semibold mb-2">Database</h3>
                        <span className="text-[#A7A5A5] text-center">
                          Merise, MySQL, PostgreSQL
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-[#434242] rounded-lg">
                        <Server className="w-8 h-8 text-[#EA2727] mb-2" />
                        <h3 className="text-lg font-semibold mb-2">Services</h3>
                        <span className="text-[#A7A5A5] text-center">
                          Apache, SSH, Nginx, DNS, Asterisk, DHCP, NIS, NFS,
                          Samba
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-[#434242] rounded-lg">
                        <Heart className="w-8 h-8 text-[#EA2727] mb-2" />
                        <h3 className="text-lg font-semibold mb-2">Hobbies</h3>
                        <span className="text-[#A7A5A5] text-center">
                          Video games, Guitar
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-[#434242] rounded-lg">
                        <Plus className="w-8 h-8 text-[#EA2727] mb-2" />
                        <h3 className="text-lg font-semibold mb-2">Projects</h3>
                        <a href="/project">
                          <Button className="w-full">View all</Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-[#0A0A0A] py-12 px-4 sm:px-8 md:px-12 lg:px-16 flex items-center justify-center">
                  <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
                        We can work together if you want, please, just contact
                        me.
                      </h1>
                      <h2 className="text-[#A7A5A5] text-base sm:text-lg">
                        "Strength in unity"
                      </h2>
                    </div>
                    <a href="/contact">
                      <Button className="bg-[#EA2727] text-white w-full md:w-auto">
                        Contact me
                      </Button>
                    </a>
                  </div>
                </section>

                <footer className="z-50 bg-black h-[50px]">
                  <div className="h-[100%] w-[100%] flex justify-between items-center">
                    <div className="ml-[8px] h-[48px] flex justify-center items-center">
                      <Bookmark className=" fill-white stroke-2 text-white" />
                    </div>
                    <nav className="mx-8 h-[100%] w-[100%] flex items-center justify-between">
                      <div></div>
                      <div className="flex items-center justify-between">
                        <Link
                          to="https://gmail.com"
                          className="px-[10px] py-[6px] rounded-lg hover:bg-gray-900 "
                        >
                          <Mail className="w-[30px] h-[30px]" />
                        </Link>
                        <Link
                          to="https://facebook.com"
                          className="px-[10px] py-[6px] rounded-lg hover:bg-gray-900 "
                        >
                          <Facebook className="w-[30px] h-[30px]" />
                        </Link>
                        <Link
                          to="https://linkedin.com"
                          className="px-[10px] py-[6px] rounded-lg hover:bg-gray-900 "
                        >
                          <Linkedin className="w-[30px] h-[30px]" />
                        </Link>
                      </div>
                    </nav>
                  </div>
                </footer>
              </div>
            }
          />

          <Route
            path="/project"
            element={<ProjectTable projects={projects} />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
