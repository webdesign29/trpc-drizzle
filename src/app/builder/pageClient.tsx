"use client";

import { Button } from "@/components/ui/button";
import { api } from "~/trpc/react";
import FileTree from "./_components_/tree";

export default function PageClientFiles({
    data,
    params,
}: {
    data: any;
    params: any;
}){
    const clientData = api.files.getAll.useQuery(params, {
        initialData: data,
        refetchOnMount: false,
    });
    const doRefetch = () => {
        clientData.refetch();
    }
    return <>
        <div className="mx-auto">
            <Button onClick={doRefetch}>Refetch ajax</Button>
            <div className="mt-4 text-lg">
                <FileTree data={clientData.data.data} />
            </div>
        </div>
    </>

}