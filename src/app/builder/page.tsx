import { api } from "~/trpc/server";
import PageClientFiles from "./pageClient";

export default async function FilesPage(params){
    const data = await api.files.getAll(params.searchParams);
    return <>
        <div className="container mx-auto">
            <div className="text-3xl font-bold text-center mt-12">
                Params: {JSON.stringify(params, null, 2)}
            </div>
            <div>
                <h1 className="text-3xl font-bold text-center">Files</h1>
                {/*
                 <pre>
                {JSON.stringify(data, null, 2)}
                </pre> */}
            </div>
            <PageClientFiles data={data} params={params?.searchParams} />
        </div>
    </>

}