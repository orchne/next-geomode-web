import InfoContent from "../../components/about/InfoContent"
import CoreValue from "../../components/about/CoreValue"
import Mission from "../../components/about/Mission"
import History from '../../components/about/History'

const index = () => {
  return (
    <div className="bg-gradient-to-r from-[#020024] via-[#794488] to-[#5500ff]">
        <InfoContent></InfoContent>
        <Mission></Mission>
        <CoreValue></CoreValue>
        <History></History>
    </div>
  )
}

export default index