import { CreateGame } from "@/components/Desktop/CreateGame";
import { DesktopBunner } from "@/components/Desktop/DesktopBunner";
import { DuelHighlight } from "@/components/Desktop/DuelHighlight";
import { Footer } from "@/components/Footer";
import { GamefiSlogan } from "@/components/Desktop/GamefiSlogan";
import { GameIntegration } from "@/components/Desktop/GameIntegration";
import { MeetTeam } from "@/components/Desktop/MeetTeam";
import { TrustedBy } from "@/components/Desktop/TrustedBy";
import "./style.css";

const DesctopPage = () => {
  return (
    <div className="desktop-page-wrapper">
      <DesktopBunner />
      <GameIntegration />
      <GamefiSlogan />
      <DuelHighlight />
      <TrustedBy />
      <MeetTeam />
      <CreateGame />
    </div>
  );
};

export default DesctopPage