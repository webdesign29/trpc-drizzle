"use client"
import { useSession } from "../../sessions";
export default function ClientPage() {
    const session = useSession();
    return (
        <div className={`h-full bg-slate-200`}>
            Accueil
        </div>
    )
}