module.exports = {

"[project]/src/app/pageClient.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>ClientPageComponent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/zustand/esm/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trpc$2f$react$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/trpc/react.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
function ClientPageComponent() {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppContext"]);
    if (!store) throw new Error("Missing AppContext.Provider in the tree");
    const appStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])(store, (s)=>s.APP);
    const exampleData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trpc$2f$react$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].example.getAll.useQuery();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-col items-center justify-center w-full ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    children: JSON.stringify(exampleData, null, 2)
                }, void 0, false, {
                    fileName: "[project]/src/app/pageClient.tsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pageClient.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-col items-center justify-center w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    children: JSON.stringify(appStore, null, 2)
                }, void 0, false, {
                    fileName: "[project]/src/app/pageClient.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pageClient.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}

})()),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
"[project]/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React = __turbopack_require__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
            {
                {
                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                        args[_key2 - 1] = arguments[_key2];
                    }
                    printWarning('error', format, args);
                }
            }
        }
        function printWarning(level, format, args) {
            // When changing this logic, you might want to also
            // update consoleWithStackDev.www.js as well.
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([
                        stack
                    ]);
                } // eslint-disable-next-line react-internal/safe-string-coercion
                var argsWithFormat = args.map(function(item) {
                    return String(item);
                }); // Careful: RN currently depends on this prefix
                argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
                // breaks IE9: https://github.com/facebook/react/issues/13610
                // eslint-disable-next-line react-internal/no-production-logging
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        /**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */ function is(x, y) {
            return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
            ;
        }
        var objectIs = typeof Object.is === 'function' ? Object.is : is;
        // dispatch for CommonJS interop named imports.
        var useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
        // because of a very particular set of implementation details and assumptions
        // -- change any one of them and it will break. The most important assumption
        // is that updates are always synchronous, because concurrent rendering is
        // only available in versions of React that also have a built-in
        // useSyncExternalStore API. And we only use this shim when the built-in API
        // does not exist.
        //
        // Do not assume that the clever hacks used by this hook also work in general.
        // The point of this shim is to replace the need for hacks by other libraries.
        function useSyncExternalStore(subscribe, getSnapshot, // React do not expose a way to check if we're hydrating. So users of the shim
        // will need to track that themselves and return the correct value
        // from `getSnapshot`.
        getServerSnapshot) {
            {
                if (!didWarnOld18Alpha) {
                    if (React.startTransition !== undefined) {
                        didWarnOld18Alpha = true;
                        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
                    }
                }
            }
            // breaks the rules of React, and only works here because of specific
            // implementation details, most importantly that updates are
            // always synchronous.
            var value = getSnapshot();
            {
                if (!didWarnUncachedGetSnapshot) {
                    var cachedValue = getSnapshot();
                    if (!objectIs(value, cachedValue)) {
                        error('The result of getSnapshot should be cached to avoid an infinite loop');
                        didWarnUncachedGetSnapshot = true;
                    }
                }
            }
            // re-render whenever the subscribed state changes by updating an some
            // arbitrary useState hook. Then, during render, we call getSnapshot to read
            // the current value.
            //
            // Because we don't actually use the state returned by the useState hook, we
            // can save a bit of memory by storing other stuff in that slot.
            //
            // To implement the early bailout, we need to track some things on a mutable
            // object. Usually, we would put that in a useRef hook, but we can stash it in
            // our useState hook instead.
            //
            // To force a re-render, we call forceUpdate({inst}). That works because the
            // new object always fails an equality check.
            var _useState = useState({
                inst: {
                    value: value,
                    getSnapshot: getSnapshot
                }
            }), inst = _useState[0].inst, forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
            // in the layout phase so we can access it during the tearing check that
            // happens on subscribe.
            useLayoutEffect(function() {
                inst.value = value;
                inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
                // commit phase if there was an interleaved mutation. In concurrent mode
                // this can happen all the time, but even in synchronous mode, an earlier
                // effect may have mutated the store.
                if (checkIfSnapshotChanged(inst)) {
                    // Force a re-render.
                    forceUpdate({
                        inst: inst
                    });
                }
            }, [
                subscribe,
                value,
                getSnapshot
            ]);
            useEffect(function() {
                // Check for changes right before subscribing. Subsequent changes will be
                // detected in the subscription handler.
                if (checkIfSnapshotChanged(inst)) {
                    // Force a re-render.
                    forceUpdate({
                        inst: inst
                    });
                }
                var handleStoreChange = function() {
                    // TODO: Because there is no cross-renderer API for batching updates, it's
                    // up to the consumer of this library to wrap their subscription event
                    // with unstable_batchedUpdates. Should we try to detect when this isn't
                    // the case and print a warning in development?
                    // The store changed. Check if the snapshot changed since the last time we
                    // read from the store.
                    if (checkIfSnapshotChanged(inst)) {
                        // Force a re-render.
                        forceUpdate({
                            inst: inst
                        });
                    }
                }; // Subscribe to the store and return a clean-up function.
                return subscribe(handleStoreChange);
            }, [
                subscribe
            ]);
            useDebugValue(value);
            return value;
        }
        function checkIfSnapshotChanged(inst) {
            var latestGetSnapshot = inst.getSnapshot;
            var prevValue = inst.value;
            try {
                var nextValue = latestGetSnapshot();
                return !objectIs(prevValue, nextValue);
            } catch (error) {
                return true;
            }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
            // Note: The shim does not use getServerSnapshot, because pre-18 versions of
            // React do not expose a way to check if we're hydrating. So users of the shim
            // will need to track that themselves and return the correct value
            // from `getSnapshot`.
            return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
        var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
    })();
}

}.call(this) }),
"[project]/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)");
}

}.call(this) }),
"[project]/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-ssr] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React = __turbopack_require__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
        var shim = __turbopack_require__("[project]/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)");
        /**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */ function is(x, y) {
            return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
            ;
        }
        var objectIs = typeof Object.is === 'function' ? Object.is : is;
        var useSyncExternalStore = shim.useSyncExternalStore;
        // for CommonJS interop.
        var useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.
        function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
            // Use this to track the rendered snapshot.
            var instRef = useRef(null);
            var inst;
            if (instRef.current === null) {
                inst = {
                    hasValue: false,
                    value: null
                };
                instRef.current = inst;
            } else {
                inst = instRef.current;
            }
            var _useMemo = useMemo(function() {
                // Track the memoized state using closure variables that are local to this
                // memoized instance of a getSnapshot function. Intentionally not using a
                // useRef hook, because that state would be shared across all concurrent
                // copies of the hook/component.
                var hasMemo = false;
                var memoizedSnapshot;
                var memoizedSelection;
                var memoizedSelector = function(nextSnapshot) {
                    if (!hasMemo) {
                        // The first time the hook is called, there is no memoized result.
                        hasMemo = true;
                        memoizedSnapshot = nextSnapshot;
                        var _nextSelection = selector(nextSnapshot);
                        if (isEqual !== undefined) {
                            // Even if the selector has changed, the currently rendered selection
                            // may be equal to the new selection. We should attempt to reuse the
                            // current value if possible, to preserve downstream memoizations.
                            if (inst.hasValue) {
                                var currentSelection = inst.value;
                                if (isEqual(currentSelection, _nextSelection)) {
                                    memoizedSelection = currentSelection;
                                    return currentSelection;
                                }
                            }
                        }
                        memoizedSelection = _nextSelection;
                        return _nextSelection;
                    } // We may be able to reuse the previous invocation's result.
                    // We may be able to reuse the previous invocation's result.
                    var prevSnapshot = memoizedSnapshot;
                    var prevSelection = memoizedSelection;
                    if (objectIs(prevSnapshot, nextSnapshot)) {
                        // The snapshot is the same as last time. Reuse the previous selection.
                        return prevSelection;
                    } // The snapshot has changed, so we need to compute a new selection.
                    // The snapshot has changed, so we need to compute a new selection.
                    var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
                    // has changed. If it hasn't, return the previous selection. That signals
                    // to React that the selections are conceptually equal, and we can bail
                    // out of rendering.
                    // If a custom isEqual function is provided, use that to check if the data
                    // has changed. If it hasn't, return the previous selection. That signals
                    // to React that the selections are conceptually equal, and we can bail
                    // out of rendering.
                    if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
                        return prevSelection;
                    }
                    memoizedSnapshot = nextSnapshot;
                    memoizedSelection = nextSelection;
                    return nextSelection;
                }; // Assigning this to a constant so that Flow knows it can't change.
                // Assigning this to a constant so that Flow knows it can't change.
                var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;
                var getSnapshotWithSelector = function() {
                    return memoizedSelector(getSnapshot());
                };
                var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                };
                return [
                    getSnapshotWithSelector,
                    getServerSnapshotWithSelector
                ];
            }, [
                getSnapshot,
                getServerSnapshot,
                selector,
                isEqual
            ]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
            var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
            useEffect(function() {
                inst.hasValue = true;
                inst.value = value;
            }, [
                value
            ]);
            useDebugValue(value);
            return value;
        }
        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
    })();
}

}.call(this) }),
"[project]/node_modules/use-sync-external-store/shim/with-selector.js [app-ssr] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-ssr] (ecmascript)");
}

}.call(this) }),
"[project]/node_modules/zustand/esm/index.mjs [app-ssr] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "create": ()=>create,
    "default": ()=>react,
    "useStore": ()=>useStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/use-sync-external-store/shim/with-selector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_resolve_absolute_path__("node_modules/zustand/esm/index.mjs")}`;
    }
};
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const { useDebugValue } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const { useSyncExternalStoreWithSelector } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
let didWarnAboutEqualityFn = false;
const identity = (arg)=>arg;
function useStore(api, selector = identity, equalityFn) {
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
        console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937");
        didWarnAboutEqualityFn = true;
    }
    const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getServerState || api.getInitialState, selector, equalityFn);
    useDebugValue(slice);
    return slice;
}
const createImpl = (createState)=>{
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && typeof createState !== "function") {
        console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
    }
    const api = typeof createState === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(createState) : createState;
    const useBoundStore = (selector, equalityFn)=>useStore(api, selector, equalityFn);
    Object.assign(useBoundStore, api);
    return useBoundStore;
};
const create = (createState)=>createState ? createImpl(createState) : createImpl;
var react = (createState)=>{
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`.");
    }
    return create(createState);
};
;

})()),

};

//# sourceMappingURL=_3be72b._.js.map