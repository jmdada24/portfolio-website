import MindSpace from "./mindspace/page";
import RealiTech from "./realitech/page";
import SineSkwelahan from "./sineskwelahan/page";
import BarangayBayabas from "./barangaybayabas/page";


export const metadata = {
  title: "Projects | John Mhel Dalumpines",
  description:
    "Explore projects by John Mhel Dalumpines including full-stack web applications, UI/UX designs, and AI-powered systems.",
};

export default function ProjectPage(){

    return(
        <>
            <MindSpace/>
            <RealiTech/>
            <SineSkwelahan/>
            <BarangayBayabas/>
        
        </>



    );

}