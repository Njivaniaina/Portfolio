import { Bookmark, Eye, Facebook, Linkedin, Mail } from "lucide-react";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";

type projectsType = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
  link: string;
};

const ProjectTable = ({ projects }: { projects: projectsType[] }) => {
  return (
    <div className="overflow-x-auto bg-[#0A0A0B] p-4 sm:p-8 md:p-12 lg:p-16 rounded-lg shadow-lg">
      <table className="table-auto w-full text-white border-collapse overflow-hidden rounded-lg">
        <thead>
          <tr className="bg-[#434242]">
            <th className="px-4 py-3 text-left text-sm md:text-base font-semibold">
              Name
            </th>
            <th className="px-4 py-3 text-left text-sm md:text-base font-semibold">
              Description
            </th>
            <th className="px-4 py-3 text-left text-sm md:text-base font-semibold">
              Start
            </th>
            <th className="px-4 py-3 text-left text-sm md:text-base font-semibold">
              End
            </th>
            <th className="px-4 py-3 text-left text-sm md:text-base font-semibold">
              Statut
            </th>
            <th className="px-4 py-3 text-left text-sm md:text-base font-semibold">
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr
              className={`transition-colors duration-200 ${/*index % 2 === 0 ? "bg-[#1A1A1A]" : "bg-[#0A0A0B]" */ ""} hover:bg-[#2A2A2A]`}
            >
              <td className="border-t border-[#434242] px-4 py-3 text-sm md:text-base">
                {project.name}
              </td>
              <td className="border-t border-[#434242] px-4 py-3 text-sm md:text-base">
                {project.description}
              </td>
              <td className="border-t border-[#434242] px-4 py-3 text-sm md:text-base">
                {project.startDate}
              </td>
              <td className="border-t border-[#434242] px-4 py-3 text-sm md:text-base">
                {project.endDate}
              </td>
              <td className="border-t border-[#434242] px-4 py-3 text-sm md:text-base">
                {project.status}
              </td>
              <td className="border-t border-[#434242] px-4 py-3">
                <div className="flex gap-2">
                  <a href={project.link}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#EA2727] hover:text-[#DB2B2B] hover:bg-[#434242]"
                    >
                      <Eye className=" text-white w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className=" fixed bottom-0 left-0 w-full z-50 bg-black h-[50px]">
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
  );
};

export default ProjectTable;
