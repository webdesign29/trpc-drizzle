module.exports = {

"[project]/src/trpc/shared.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getUrl": ()=>getUrl,
    "transformer": ()=>transformer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/superjson/dist/esm/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const transformer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
function getBaseUrl() {
    if (typeof window !== "undefined") return "";
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return `http://localhost:${process.env.PORT ?? 3000}`;
}
function getUrl() {
    return getBaseUrl() + "/api/trpc";
}

})()),
"[project]/src/trpc/react.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "TRPCReactProvider": ()=>TRPCReactProvider,
    "api": ()=>api
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$devtools$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query-devtools/build/modern/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@trpc/client/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$loggerLink$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@trpc/client/dist/links/loggerLink.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$httpBatchStreamLink$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@trpc/client/dist/links/httpBatchStreamLink.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$react$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@trpc/react-query/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$react$2d$query$2f$dist$2f$createTRPCReact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@trpc/react-query/dist/createTRPCReact.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trpc$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/trpc/shared.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$react$2d$query$2f$dist$2f$createTRPCReact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTRPCReact"])();
function TRPCReactProvider(props) {
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]());
    const [trpcClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>api.createClient({
            transformer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trpc$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformer"],
            links: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$loggerLink$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loggerLink"])({
                    enabled: (op)=>("TURBOPACK compile-time value", "development") === "development" || op.direction === "down" && op.result instanceof Error
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$links$2f$httpBatchStreamLink$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unstable_httpBatchStreamLink"])({
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trpc$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUrl"])(),
                    headers () {
                        return {
                            // cookie: props.cookies,
                            "x-trpc-source": "react"
                        };
                    }
                })
            ]
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(api.Provider, {
                client: trpcClient,
                queryClient: queryClient,
                children: props.children
            }, void 0, false, {
                fileName: "[project]/src/trpc/react.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$devtools$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReactQueryDevtools"], {
                initialIsOpen: false,
                position: "bottom-right"
            }, void 0, false, {
                fileName: "[project]/src/trpc/react.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/trpc/react.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
} // "use client";
 // import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 // import { loggerLink, unstable_httpBatchStreamLink } from "@trpc/client";
 // import { createTRPCReact } from "@trpc/react-query";
 // import { useState } from "react";
 // import { type AppRouter } from "~/server/api/root";
 // import { getUrl, transformer } from "./shared";
 // export const api = createTRPCReact<AppRouter>();
 // export function TRPCReactProvider(props: {
 //   children: React.ReactNode;
 //   headers: Headers;
 // }) {
 //   const [queryClient] = useState(() => new QueryClient());
 //   const [trpcClient] = useState(() =>
 //     api.createClient({
 //       transformer,
 //       links: [
 //         loggerLink({
 //           enabled: (op) =>
 //             process.env.NODE_ENV === "development" ||
 //             (op.direction === "down" && op.result instanceof Error),
 //         }),
 //         unstable_httpBatchStreamLink({
 //           url: getUrl(),
 //           headers() {
 //             const heads = new Map(props.headers);
 //             heads.set("x-trpc-source", "react");
 //             return Object.fromEntries(heads);
 //           },
 //         }),
 //       ],
 //     })
 //   );
 //   return (
 //     <QueryClientProvider client={queryClient}>
 //       <api.Provider client={trpcClient} queryClient={queryClient}>
 //         {props.children}
 //       </api.Provider>
 //     </QueryClientProvider>
 //   );
 // }

})()),
"[project]/src/app/sessions.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AppSessionProvider": ()=>AppSessionProvider,
    "useSession": ()=>useSession
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
const SessionContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    data: undefined,
    isLoading: false,
    login: ()=>{},
    logout: ()=>{},
    refetch: ()=>{}
});
const useSession = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SessionContext);
    if (!context) {
        throw new Error("useSession must be used within a SessionProvider");
    }
    return context;
};
const AppSessionProvider = ({ children })=>{
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        user: {
            name: "Guest"
        }
    });
    // const { data, isLoading, refetch } = api.auth.getSession.useQuery(undefined, {
    //   cacheTime: 10000,
    // });
    const data = {};
    const isLoading = false;
    const refetchSession = async ()=>{
        console.log("refetching session");
    // await refetch();
    };
    const login = (userData)=>{
        setSession(userData);
    };
    const logout = ()=>{
        setSession({
            user: {
                name: "Guest"
            }
        });
    };
    const value = {
        data,
        isLoading,
        login,
        logout,
        refetch: refetchSession
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SessionContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/sessions.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
};

})()),
"[project]/src/types.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "EditModes": ()=>EditModes,
    "Theme": ()=>Theme,
    "appModes": ()=>appModes,
    "appModesEnum": ()=>appModesEnum,
    "cleanUpSchema": ()=>cleanUpSchema,
    "generateZodSchema": ()=>generateZodSchema
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zod/lib/index.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const appModesEnum = {
    annuaire: "annuaire",
    crm: "crm",
    "sass-links": "sass-links",
    cours: "cours",
    cms: "cms"
};
const appModes = Object.values(appModesEnum);
let Theme;
(function(Theme) {
    Theme["dark"] = "dark";
    Theme["light"] = "light";
})(Theme || (Theme = {}));
let EditModes;
(function(EditModes) {
    EditModes["drawer"] = "drawer";
    EditModes["modal"] = "modal";
})(EditModes || (EditModes = {}));
function generateZodSchema(prismaType) {
    const schema = {};
    for(const key in prismaType){
        const field = prismaType[key];
        if (typeof field === 'object' && field !== null && !Array.isArray(field)) {
            // Assuming all fields are required
            if (field.isRequired) {
                schema[key] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string(); // You can add more sophisticated handling based on field types
            }
        }
    }
    return {
        schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object(schema),
        shape: schema
    };
}
function cleanUpSchema(schema) {
    if (schema instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].ZodObject) {
        const cleanedShape = Object.fromEntries(Object.entries(schema.shape).map(([key, value])=>{
            if (value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].ZodObject) {
                return [
                    key,
                    cleanUpSchema(value)
                ];
            }
            return [
                key,
                value
            ];
        }));
        return schema.shape === cleanedShape ? schema : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].ZodObject(cleanedShape, schema.unknownKeys, schema.catchall);
    }
    return schema;
}

})()),
"[project]/src/store.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// !process.env.SKIP_ENV_VALIDATION && (await import("./env.mjs"));
__turbopack_esm__({
    "AppContext": ()=>AppContext,
    "createAppStore": ()=>createAppStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const initialState = {
    APP: {
        NAME: "App Name",
        EDIT_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditModes"].drawer
    }
};
const createAppStore = (initProps)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])()((set)=>({
            ...initialState,
            APP: {
                MODE: process.env.NEXT_PUBLIC_APP_MODE || "",
                BRAND: process.env.NEXT_PUBLIC_APP_BRAND || "",
                URL: process.env.NEXT_PUBLIC_APP_URL || "",
                RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "",
                SPEED_DIAL: false,
                DARK_MODE: false,
                // setDarkMode: (value: boolean) => set((state) => ({ APP: { ...state.APP, DARK_MODE: value } })),
                // use get to access the current state
                setDarkMode: (value)=>set((state)=>({
                            APP: {
                                ...state.APP,
                                DARK_MODE: value
                            }
                        })),
                HEADER_FIXED: true,
                setHeaderFixed: (value)=>set((state)=>({
                            APP: {
                                ...state.APP,
                                HEADER_FIXED: value
                            }
                        })),
                // @ts-ignore
                MAIN_MENU: {
                    open: false,
                    setOpen: (value)=>set((state)=>({
                                APP: {
                                    ...state.APP,
                                    MAIN_MENU: {
                                        ...state.APP.MAIN_MENU,
                                        open: value
                                    }
                                }
                            }))
                },
                NAME: "App Name",
                APP: "APP",
                TAG_LINE: "Tag Line",
                ALT_TAGLINE: "Alt Tag Line",
                TITLE: "Title",
                DESC: "Description",
                KEYWORDS: "Keywords",
                LOGO: "/images/logo.png",
                PHONE: "+33 2 00 00 00 00",
                EMAIL: "support@example.com",
                THEME: {
                    COLORS: {
                        PRIMARY: "#000000",
                        BG: "#ffffff"
                    },
                    LOGIN_BG: "bg-slate-200"
                },
                ...initProps?.APP
            },
            SEARCH: {
                query: "",
                setQuery: (value)=>set((state)=>({
                            SEARCH: {
                                ...state.SEARCH,
                                query: value
                            }
                        })),
                results: [],
                setResults: (value)=>set((state)=>({
                            SEARCH: {
                                ...state.SEARCH,
                                results: value
                            }
                        })),
                selected: {},
                setSelected: (value)=>set((state)=>({
                            SEARCH: {
                                ...state.SEARCH,
                                selected: value
                            }
                        })),
                view: "list",
                setView: (value)=>set((state)=>({
                            SEARCH: {
                                ...state.SEARCH,
                                view: value
                            }
                        })),
                FILTERS: {
                    open: false,
                    setOpen: (value)=>set((state)=>({
                                SEARCH: {
                                    ...state.SEARCH,
                                    FILTERS: {
                                        ...state.SEARCH.FILTERS,
                                        open: value
                                    }
                                }
                            }))
                }
            },
            MODALS: {
                CHANGE_PASSWORD: {
                    open: false,
                    closeModal: ()=>set((state)=>({
                                MODALS: {
                                    ...state.MODALS,
                                    CHANGE_PASSWORD: {
                                        ...state.MODALS.CHANGE_PASSWORD,
                                        open: false
                                    }
                                }
                            })),
                    openModal: ()=>set((state)=>({
                                MODALS: {
                                    ...state.MODALS,
                                    CHANGE_PASSWORD: {
                                        ...state.MODALS.CHANGE_PASSWORD,
                                        open: true
                                    }
                                }
                            })),
                    user: {
                        id: "",
                        email: "",
                        name: ""
                    },
                    setUser: (value)=>set((state)=>({
                                MODALS: {
                                    ...state.MODALS,
                                    CHANGE_PASSWORD: {
                                        ...state.MODALS.CHANGE_PASSWORD,
                                        user: value
                                    }
                                }
                            }))
                },
                TIERS: {
                    open: false,
                    closeModal: ()=>set((state)=>({
                                MODALS: {
                                    ...state.MODALS,
                                    TIERS: {
                                        ...state.MODALS.TIERS,
                                        open: false
                                    }
                                }
                            })),
                    openModal: ()=>set((state)=>({
                                MODALS: {
                                    ...state.MODALS,
                                    TIERS: {
                                        ...state.MODALS.TIERS,
                                        open: true
                                    }
                                }
                            })),
                    data: {}
                },
                TIERS_CREATE: {
                    open: false,
                    closeModal: ()=>set((state)=>({
                                MODALS: {
                                    ...state.MODALS,
                                    TIERS_CREATE: {
                                        ...state.MODALS.TIERS_CREATE,
                                        open: false
                                    }
                                }
                            })),
                    openModal: ()=>set((state)=>{
                            console.log("state.MODALS.TIERS_CREATE", state.MODALS.TIERS_CREATE);
                            return {
                                MODALS: {
                                    ...state.MODALS,
                                    TIERS_CREATE: {
                                        ...state.MODALS.TIERS_CREATE,
                                        open: true
                                    }
                                }
                            };
                        })
                },
                TIERS_EDIT: {
                    open: false,
                    closeModal: ()=>set((state)=>({
                                MODALS: {
                                    ...state.MODALS,
                                    TIERS_EDIT: {
                                        ...state.MODALS.TIERS_EDIT,
                                        open: false
                                    }
                                }
                            })),
                    openModal: ()=>set((state)=>({
                                MODALS: {
                                    ...state.MODALS,
                                    TIERS_EDIT: {
                                        ...state.MODALS.TIERS_EDIT,
                                        open: true
                                    }
                                }
                            }))
                },
                QR: {
                    open: false,
                    closeModal: ()=>set((state)=>({
                                MODALS: {
                                    ...state.MODALS,
                                    QR: {
                                        ...state.MODALS.QR,
                                        open: false
                                    }
                                }
                            })),
                    openModal: ()=>set((state)=>({
                                MODALS: {
                                    ...state.MODALS,
                                    QR: {
                                        ...state.MODALS.QR,
                                        open: true
                                    }
                                }
                            })),
                    setOpen: (value)=>set((state)=>({
                                MODALS: {
                                    ...state.MODALS,
                                    QR: {
                                        ...state.MODALS.QR,
                                        open: value
                                    }
                                }
                            })),
                    data: {},
                    setData: (value)=>set((state)=>({
                                MODALS: {
                                    ...state.MODALS,
                                    QR: {
                                        ...state.MODALS.QR,
                                        data: value
                                    }
                                }
                            }))
                },
                REPORT: {
                    open: false,
                    closeModal: ()=>set((state)=>({
                                MODALS: {
                                    ...state.MODALS,
                                    REPORT: {
                                        ...state.MODALS.REPORT,
                                        open: false
                                    }
                                }
                            })),
                    openModal: ()=>set((state)=>({
                                MODALS: {
                                    ...state.MODALS,
                                    REPORT: {
                                        ...state.MODALS.REPORT,
                                        open: true
                                    }
                                }
                            }))
                }
            },
            HISTORY: {
                push: ()=>{},
                replace: ()=>{},
                back: ()=>{},
                forward: ()=>{}
            },
            ANNUAIRE: {
                TITLE: process.env.NEXT_PUBLIC_ANNUAIRE_TITLE || "",
                SUB_TITLE: process.env.NEXT_PUBLIC_ANNUAIRE_SUB_TITLE || "",
                BANNER: process.env.NEXT_PUBLIC_ANNUAIRE_BANNER || null,
                SURVEY: process.env.NEXT_PUBLIC_ANNUAIRE_SURVEY || ""
            },
            FORMS: {
                LOGIN: {
                    email: "",
                    password: ""
                },
                SIGNUP: {
                    email: "",
                    password: "",
                    passwordConfirmation: ""
                },
                WIZARD: {
                    step: 0,
                    setStep: (value)=>set((state)=>({
                                FORMS: {
                                    ...state.FORMS,
                                    WIZARD: {
                                        ...state.FORMS.WIZARD,
                                        step: value
                                    }
                                }
                            })),
                    stepData: {},
                    setStepData: (value)=>set((state)=>({
                                FORMS: {
                                    ...state.FORMS,
                                    WIZARD: {
                                        ...state.FORMS.WIZARD,
                                        stepData: value
                                    }
                                }
                            }))
                },
                LINK: {
                    id: "",
                    url: "",
                    advanced: false,
                    hasQr: false,
                    qrSettings: null,
                    qrData: null,
                    isSecure: false,
                    password: null,
                    shortLink: null,
                    isFree: false
                },
                setForm: (form, value)=>set((state)=>({
                            FORMS: {
                                ...state.FORMS,
                                [form]: value
                            }
                        })),
                setFormValue: (form, key, value)=>set((state)=>({
                            FORMS: {
                                ...state.FORMS,
                                [form]: {
                                    ...state.FORMS[form],
                                    [key]: value
                                }
                            }
                        }))
            },
            counter: 0,
            increment: ()=>set((state)=>({
                        counter: state.counter + 1
                    })),
            decrement: ()=>set((state)=>({
                        counter: state.counter - 1
                    })),
            setSpeedDial: (value)=>set((state)=>({
                        APP: {
                            ...state.APP,
                            SPEED_DIAL: value
                        }
                    }))
        }));
};
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);

})()),
"[project]/src/app/layoutClient.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>LayoutClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
function LayoutClient({ children }) {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAppStore"])()).current;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppContext"].Provider, {
        value: store,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/layoutClient.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}

})()),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),

};

//# sourceMappingURL=src_548498._.js.map