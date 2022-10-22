import { Header } from "../components/Header/Header.js"
import { FAQ } from "../components/FAQ/FrequentlyAskedQuestion.js"
import BlogList from "../components/BlogList/BlogList.js"
import ContentTeam from "../components/ContentTeam/ContentTeam.js"
import Sponsor from "../components/Sponsor/Sponsor.js"

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#020024] via-[#794488] to-[#5500ff]">
      <Header></Header>
      <ContentTeam/>
      <FAQ></FAQ>
      <Sponsor></Sponsor>
      
    </div>
  )
}
