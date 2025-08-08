import { OriginModal } from "@/components/Origin/OriginModal";
import { OriginBunner } from "@/components/Origin/OriginBunner";
import { Factions } from "@/components/Origin/Factions";
import { Heros } from "@/components/Origin/Heros";

export default function OriginPage() {
    return (
        <>
            <OriginBunner />
            <OriginModal />
            <Factions />
            <Heros />
        </>
    )
}