// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7LQdI":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = "localhost";
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "e792fbbdaa78ee84";
module.bundle.HMR_BUNDLE_ID = "e76b1e378b981e35";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4mMJy":[function(require,module,exports) {
"use strict";
/* global chrome, browser, addEventListener */ var env = typeof chrome == "undefined" ? browser : chrome;
addEventListener("beforeunload", function() {
    try {
        env.runtime.sendMessage({
            __parcel_hmr_reload__: true
        });
    } catch (err) {}
});

},{}]},["7LQdI","4mMJy"], "4mMJy", "parcelRequireb5cb")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFMUIsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFDNUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsU0FBVSxFQUFFLEVBQUU7UUFDaEQsSUFBSSxrQkFBa0IsR0FBRyxFQUFFLENBQUMsV0FBWTtZQUN0QyxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMzQyxDQUFDLEFBQUM7UUFFSCxJQUFJLGtCQUFrQixJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQzdDLCtCQUErQjtRQUMvQixjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztLQUVqRSxDQUFDLENBQUM7SUFHTCxjQUFjLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO0NBQzNCOzs7QUNua0JELFlBQVksQ0FBQztBQUViLDhDQUE4QyxDQUM5QyxJQUFJLEdBQUcsR0FBRyxPQUFPLE1BQU0sSUFBSSxXQUFXLEdBQUcsT0FBTyxHQUFHLE1BQU0sQUFBQztBQUMxRCxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsV0FBWTtJQUMzQyxJQUFJO1FBQ0YsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDdEIscUJBQXFCLEVBQUUsSUFBSTtTQUM1QixDQUFDLENBQUM7S0FDSixDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQ2I7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtYnJvd3Nlci1obXIvbGliL3J1bnRpbWUtNGRjZTQ4NDBjMzUzZWNiNC5qcyIsIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLXdlYmV4dGVuc2lvbi9saWIvcnVudGltZS9hdXRvcmVsb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBITVJfSE9TVCA9IFwibG9jYWxob3N0XCI7dmFyIEhNUl9QT1JUID0gbnVsbDt2YXIgSE1SX1NFQ1VSRSA9IGZhbHNlO3ZhciBITVJfRU5WX0hBU0ggPSBcImU3OTJmYmJkYWE3OGVlODRcIjttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQgPSBcImU3NmIxZTM3OGI5ODFlMzVcIjtcInVzZSBzdHJpY3RcIjtcblxuLyogZ2xvYmFsIEhNUl9IT1NULCBITVJfUE9SVCwgSE1SX0VOVl9IQVNILCBITVJfU0VDVVJFLCBjaHJvbWUsIGJyb3dzZXIsIGdsb2JhbFRoaXMsIF9fcGFyY2VsX19pbXBvcnRfXywgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXywgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlICovXG5cbi8qOjpcbmltcG9ydCB0eXBlIHtcbiAgSE1SQXNzZXQsXG4gIEhNUk1lc3NhZ2UsXG59IGZyb20gJ0BwYXJjZWwvcmVwb3J0ZXItZGV2LXNlcnZlci9zcmMvSE1SU2VydmVyLmpzJztcbmludGVyZmFjZSBQYXJjZWxSZXF1aXJlIHtcbiAgKHN0cmluZyk6IG1peGVkO1xuICBjYWNoZToge3xbc3RyaW5nXTogUGFyY2VsTW9kdWxlfH07XG4gIGhvdERhdGE6IG1peGVkO1xuICBNb2R1bGU6IGFueTtcbiAgcGFyZW50OiA/UGFyY2VsUmVxdWlyZTtcbiAgaXNQYXJjZWxSZXF1aXJlOiB0cnVlO1xuICBtb2R1bGVzOiB7fFtzdHJpbmddOiBbRnVuY3Rpb24sIHt8W3N0cmluZ106IHN0cmluZ3x9XXx9O1xuICBITVJfQlVORExFX0lEOiBzdHJpbmc7XG4gIHJvb3Q6IFBhcmNlbFJlcXVpcmU7XG59XG5pbnRlcmZhY2UgUGFyY2VsTW9kdWxlIHtcbiAgaG90OiB7fFxuICAgIGRhdGE6IG1peGVkLFxuICAgIGFjY2VwdChjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICBkaXNwb3NlKGNiOiAobWl4ZWQpID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGFjY2VwdChkZXBzOiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nLCBjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBkZWNsaW5lKCk6IHZvaWQsXG4gICAgX2FjY2VwdENhbGxiYWNrczogQXJyYXk8KEZ1bmN0aW9uKSA9PiB2b2lkPixcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogQXJyYXk8KG1peGVkKSA9PiB2b2lkPixcbiAgfH07XG59XG5pbnRlcmZhY2UgRXh0ZW5zaW9uQ29udGV4dCB7XG4gIHJ1bnRpbWU6IHt8XG4gICAgcmVsb2FkKCk6IHZvaWQsXG4gICAgZ2V0VVJMKHVybDogc3RyaW5nKTogc3RyaW5nO1xuICAgIGdldE1hbmlmZXN0KCk6IHttYW5pZmVzdF92ZXJzaW9uOiBudW1iZXIsIC4uLn07XG4gIHx9O1xufVxuZGVjbGFyZSB2YXIgbW9kdWxlOiB7YnVuZGxlOiBQYXJjZWxSZXF1aXJlLCAuLi59O1xuZGVjbGFyZSB2YXIgSE1SX0hPU1Q6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9QT1JUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfRU5WX0hBU0g6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9TRUNVUkU6IGJvb2xlYW47XG5kZWNsYXJlIHZhciBjaHJvbWU6IEV4dGVuc2lvbkNvbnRleHQ7XG5kZWNsYXJlIHZhciBicm93c2VyOiBFeHRlbnNpb25Db250ZXh0O1xuZGVjbGFyZSB2YXIgX19wYXJjZWxfX2ltcG9ydF9fOiAoc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuZGVjbGFyZSB2YXIgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXzogKHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbmRlY2xhcmUgdmFyIGdsb2JhbFRoaXM6IHR5cGVvZiBzZWxmO1xuZGVjbGFyZSB2YXIgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlOiBPYmplY3Q7XG4qL1xudmFyIE9WRVJMQVlfSUQgPSAnX19wYXJjZWxfX2Vycm9yX19vdmVybGF5X18nO1xudmFyIE9sZE1vZHVsZSA9IG1vZHVsZS5idW5kbGUuTW9kdWxlO1xuXG5mdW5jdGlvbiBNb2R1bGUobW9kdWxlTmFtZSkge1xuICBPbGRNb2R1bGUuY2FsbCh0aGlzLCBtb2R1bGVOYW1lKTtcbiAgdGhpcy5ob3QgPSB7XG4gICAgZGF0YTogbW9kdWxlLmJ1bmRsZS5ob3REYXRhLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IFtdLFxuICAgIF9kaXNwb3NlQ2FsbGJhY2tzOiBbXSxcbiAgICBhY2NlcHQ6IGZ1bmN0aW9uIChmbikge1xuICAgICAgdGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2goZm4gfHwgZnVuY3Rpb24gKCkge30pO1xuICAgIH0sXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKGZuKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2goZm4pO1xuICAgIH1cbiAgfTtcbiAgbW9kdWxlLmJ1bmRsZS5ob3REYXRhID0gdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuYnVuZGxlLk1vZHVsZSA9IE1vZHVsZTtcbnZhciBjaGVja2VkQXNzZXRzXG4vKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4sIGFjY2VwdGVkQXNzZXRzXG4vKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4sIGFzc2V0c1RvQWNjZXB0XG4vKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovXG47XG5cbmZ1bmN0aW9uIGdldEhvc3RuYW1lKCkge1xuICByZXR1cm4gSE1SX0hPU1QgfHwgKGxvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoJ2h0dHAnKSA9PT0gMCA/IGxvY2F0aW9uLmhvc3RuYW1lIDogJ2xvY2FsaG9zdCcpO1xufVxuXG5mdW5jdGlvbiBnZXRQb3J0KCkge1xuICByZXR1cm4gSE1SX1BPUlQgfHwgbG9jYXRpb24ucG9ydDtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5cbnZhciBwYXJlbnQgPSBtb2R1bGUuYnVuZGxlLnBhcmVudDtcblxuaWYgKCghcGFyZW50IHx8ICFwYXJlbnQuaXNQYXJjZWxSZXF1aXJlKSAmJiB0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICB2YXIgcG9ydCA9IGdldFBvcnQoKTtcbiAgdmFyIHByb3RvY29sID0gSE1SX1NFQ1VSRSB8fCBsb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cHM6JyAmJiAhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdChob3N0bmFtZSkgPyAnd3NzJyA6ICd3cyc7XG4gIHZhciB3cyA9IG5ldyBXZWJTb2NrZXQocHJvdG9jb2wgKyAnOi8vJyArIGhvc3RuYW1lICsgKHBvcnQgPyAnOicgKyBwb3J0IDogJycpICsgJy8nKTsgLy8gV2ViIGV4dGVuc2lvbiBjb250ZXh0XG5cbiAgdmFyIGV4dEN0eCA9IHR5cGVvZiBjaHJvbWUgPT09ICd1bmRlZmluZWQnID8gdHlwZW9mIGJyb3dzZXIgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGJyb3dzZXIgOiBjaHJvbWU7IC8vIFNhZmFyaSBkb2Vzbid0IHN1cHBvcnQgc291cmNlVVJMIGluIGVycm9yIHN0YWNrcy5cbiAgLy8gZXZhbCBtYXkgYWxzbyBiZSBkaXNhYmxlZCB2aWEgQ1NQLCBzbyBkbyBhIHF1aWNrIGNoZWNrLlxuXG4gIHZhciBzdXBwb3J0c1NvdXJjZVVSTCA9IGZhbHNlO1xuXG4gIHRyeSB7XG4gICAgKDAsIGV2YWwpKCd0aHJvdyBuZXcgRXJyb3IoXCJ0ZXN0XCIpOyAvLyMgc291cmNlVVJMPXRlc3QuanMnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgc3VwcG9ydHNTb3VyY2VVUkwgPSBlcnIuc3RhY2suaW5jbHVkZXMoJ3Rlc3QuanMnKTtcbiAgfSAvLyAkRmxvd0ZpeE1lXG5cblxuICB3cy5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbiAoZXZlbnRcbiAgLyo6IHtkYXRhOiBzdHJpbmcsIC4uLn0gKi9cbiAgKSB7XG4gICAgY2hlY2tlZEFzc2V0cyA9IHt9XG4gICAgLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuICAgIDtcbiAgICBhY2NlcHRlZEFzc2V0cyA9IHt9XG4gICAgLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuICAgIDtcbiAgICBhc3NldHNUb0FjY2VwdCA9IFtdO1xuICAgIHZhciBkYXRhXG4gICAgLyo6IEhNUk1lc3NhZ2UgKi9cbiAgICA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG5cbiAgICBpZiAoZGF0YS50eXBlID09PSAndXBkYXRlJykge1xuICAgICAgLy8gUmVtb3ZlIGVycm9yIG92ZXJsYXkgaWYgdGhlcmUgaXMgb25lXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGFzc2V0cyA9IGRhdGEuYXNzZXRzLmZpbHRlcihhc3NldCA9PiBhc3NldC5lbnZIYXNoID09PSBITVJfRU5WX0hBU0gpOyAvLyBIYW5kbGUgSE1SIFVwZGF0ZVxuXG4gICAgICBsZXQgaGFuZGxlZCA9IGFzc2V0cy5ldmVyeShhc3NldCA9PiB7XG4gICAgICAgIHJldHVybiBhc3NldC50eXBlID09PSAnY3NzJyB8fCBhc3NldC50eXBlID09PSAnanMnICYmIGhtckFjY2VwdENoZWNrKG1vZHVsZS5idW5kbGUucm9vdCwgYXNzZXQuaWQsIGFzc2V0LmRlcHNCeUJ1bmRsZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgY29uc29sZS5jbGVhcigpOyAvLyBEaXNwYXRjaCBjdXN0b20gZXZlbnQgc28gb3RoZXIgcnVudGltZXMgKGUuZyBSZWFjdCBSZWZyZXNoKSBhcmUgYXdhcmUuXG5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBDdXN0b21FdmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3BhcmNlbGhtcmFjY2VwdCcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGhtckFwcGx5VXBkYXRlcyhhc3NldHMpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXNzZXRzVG9BY2NlcHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgaWQgPSBhc3NldHNUb0FjY2VwdFtpXVsxXTtcblxuICAgICAgICAgIGlmICghYWNjZXB0ZWRBc3NldHNbaWRdKSB7XG4gICAgICAgICAgICBobXJBY2NlcHRSdW4oYXNzZXRzVG9BY2NlcHRbaV1bMF0sIGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBmdWxsUmVsb2FkKCk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgLy8gTG9nIHBhcmNlbCBlcnJvcnMgdG8gY29uc29sZVxuICAgICAgZm9yIChsZXQgYW5zaURpYWdub3N0aWMgb2YgZGF0YS5kaWFnbm9zdGljcy5hbnNpKSB7XG4gICAgICAgIGxldCBzdGFjayA9IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZSA/IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZSA6IGFuc2lEaWFnbm9zdGljLnN0YWNrO1xuICAgICAgICBjb25zb2xlLmVycm9yKCfwn5qoIFtwYXJjZWxdOiAnICsgYW5zaURpYWdub3N0aWMubWVzc2FnZSArICdcXG4nICsgc3RhY2sgKyAnXFxuXFxuJyArIGFuc2lEaWFnbm9zdGljLmhpbnRzLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gUmVuZGVyIHRoZSBmYW5jeSBodG1sIG92ZXJsYXlcbiAgICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgICAgIHZhciBvdmVybGF5ID0gY3JlYXRlRXJyb3JPdmVybGF5KGRhdGEuZGlhZ25vc3RpY3MuaHRtbCk7IC8vICRGbG93Rml4TWVcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3cy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XG4gIH07XG5cbiAgd3Mub25jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLndhcm4oJ1twYXJjZWxdIPCfmqggQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciB3YXMgbG9zdCcpO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVFcnJvck92ZXJsYXkoKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoT1ZFUkxBWV9JRCk7XG5cbiAgaWYgKG92ZXJsYXkpIHtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIGNvbnNvbGUubG9nKCdbcGFyY2VsXSDinKggRXJyb3IgcmVzb2x2ZWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFcnJvck92ZXJsYXkoZGlhZ25vc3RpY3MpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3ZlcmxheS5pZCA9IE9WRVJMQVlfSUQ7XG4gIGxldCBlcnJvckhUTUwgPSAnPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6IGJsYWNrOyBvcGFjaXR5OiAwLjg1OyBmb250LXNpemU6IDE2cHg7IGNvbG9yOiB3aGl0ZTsgcG9zaXRpb246IGZpeGVkOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyB0b3A6IDBweDsgbGVmdDogMHB4OyBwYWRkaW5nOiAzMHB4OyBmb250LWZhbWlseTogTWVubG8sIENvbnNvbGFzLCBtb25vc3BhY2U7IHotaW5kZXg6IDk5OTk7XCI+JztcblxuICBmb3IgKGxldCBkaWFnbm9zdGljIG9mIGRpYWdub3N0aWNzKSB7XG4gICAgbGV0IHN0YWNrID0gZGlhZ25vc3RpYy5mcmFtZXMubGVuZ3RoID8gZGlhZ25vc3RpYy5mcmFtZXMucmVkdWNlKChwLCBmcmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIGAke3B9XG48YSBocmVmPVwiL19fcGFyY2VsX2xhdW5jaF9lZGl0b3I/ZmlsZT0ke2VuY29kZVVSSUNvbXBvbmVudChmcmFtZS5sb2NhdGlvbil9XCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgY29sb3I6ICM4ODhcIiBvbmNsaWNrPVwiZmV0Y2godGhpcy5ocmVmKTsgcmV0dXJuIGZhbHNlXCI+JHtmcmFtZS5sb2NhdGlvbn08L2E+XG4ke2ZyYW1lLmNvZGV9YDtcbiAgICB9LCAnJykgOiBkaWFnbm9zdGljLnN0YWNrO1xuICAgIGVycm9ySFRNTCArPSBgXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luLXRvcDogMjBweDtcIj5cbiAgICAgICAgICDwn5qoICR7ZGlhZ25vc3RpYy5tZXNzYWdlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHByZT4ke3N0YWNrfTwvcHJlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICR7ZGlhZ25vc3RpYy5oaW50cy5tYXAoaGludCA9PiAnPGRpdj7wn5KhICcgKyBoaW50ICsgJzwvZGl2PicpLmpvaW4oJycpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJHtkaWFnbm9zdGljLmRvY3VtZW50YXRpb24gPyBgPGRpdj7wn5OdIDxhIHN0eWxlPVwiY29sb3I6IHZpb2xldFwiIGhyZWY9XCIke2RpYWdub3N0aWMuZG9jdW1lbnRhdGlvbn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5MZWFybiBtb3JlPC9hPjwvZGl2PmAgOiAnJ31cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBlcnJvckhUTUwgKz0gJzwvZGl2Pic7XG4gIG92ZXJsYXkuaW5uZXJIVE1MID0gZXJyb3JIVE1MO1xuICByZXR1cm4gb3ZlcmxheTtcbn1cblxuZnVuY3Rpb24gZnVsbFJlbG9hZCgpIHtcbiAgaWYgKCdyZWxvYWQnIGluIGxvY2F0aW9uKSB7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0gZWxzZSBpZiAoZXh0Q3R4ICYmIGV4dEN0eC5ydW50aW1lICYmIGV4dEN0eC5ydW50aW1lLnJlbG9hZCkge1xuICAgIGV4dEN0eC5ydW50aW1lLnJlbG9hZCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhcmVudHMoYnVuZGxlLCBpZClcbi8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi9cbntcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgcGFyZW50cyA9IFtdO1xuICB2YXIgaywgZCwgZGVwO1xuXG4gIGZvciAoayBpbiBtb2R1bGVzKSB7XG4gICAgZm9yIChkIGluIG1vZHVsZXNba11bMV0pIHtcbiAgICAgIGRlcCA9IG1vZHVsZXNba11bMV1bZF07XG5cbiAgICAgIGlmIChkZXAgPT09IGlkIHx8IEFycmF5LmlzQXJyYXkoZGVwKSAmJiBkZXBbZGVwLmxlbmd0aCAtIDFdID09PSBpZCkge1xuICAgICAgICBwYXJlbnRzLnB1c2goW2J1bmRsZSwga10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgcGFyZW50cyA9IHBhcmVudHMuY29uY2F0KGdldFBhcmVudHMoYnVuZGxlLnBhcmVudCwgaWQpKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmspIHtcbiAgdmFyIG5ld0xpbmsgPSBsaW5rLmNsb25lTm9kZSgpO1xuXG4gIG5ld0xpbmsub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChsaW5rLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGxpbmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICB9XG4gIH07XG5cbiAgbmV3TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAvLyAkRmxvd0ZpeE1lXG4gIGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykuc3BsaXQoJz8nKVswXSArICc/JyArIERhdGUubm93KCkpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgbGluay5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdMaW5rLCBsaW5rLm5leHRTaWJsaW5nKTtcbn1cblxudmFyIGNzc1RpbWVvdXQgPSBudWxsO1xuXG5mdW5jdGlvbiByZWxvYWRDU1MoKSB7XG4gIGlmIChjc3NUaW1lb3V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3NzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV1cbiAgICAgIHZhciBocmVmXG4gICAgICAvKjogc3RyaW5nICovXG4gICAgICA9IGxpbmtzW2ldLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbiAgICAgIHZhciBzZXJ2ZWRGcm9tSE1SU2VydmVyID0gaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnID8gbmV3IFJlZ0V4cCgnXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTonICsgZ2V0UG9ydCgpKS50ZXN0KGhyZWYpIDogaHJlZi5pbmRleE9mKGhvc3RuYW1lICsgJzonICsgZ2V0UG9ydCgpKTtcbiAgICAgIHZhciBhYnNvbHV0ZSA9IC9eaHR0cHM/OlxcL1xcLy9pLnRlc3QoaHJlZikgJiYgaHJlZi5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikgIT09IDAgJiYgIXNlcnZlZEZyb21ITVJTZXJ2ZXI7XG5cbiAgICAgIGlmICghYWJzb2x1dGUpIHtcbiAgICAgICAgdXBkYXRlTGluayhsaW5rc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY3NzVGltZW91dCA9IG51bGw7XG4gIH0sIDUwKTtcbn1cblxuZnVuY3Rpb24gaG1yRG93bmxvYWQoYXNzZXQpIHtcbiAgaWYgKGFzc2V0LnR5cGUgPT09ICdqcycpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LnNyYyA9IGFzc2V0LnVybCArICc/dD0nICsgRGF0ZS5ub3coKTtcblxuICAgICAgaWYgKGFzc2V0Lm91dHB1dEZvcm1hdCA9PT0gJ2VzbW9kdWxlJykge1xuICAgICAgICBzY3JpcHQudHlwZSA9ICdtb2R1bGUnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB2YXIgX2RvY3VtZW50JGhlYWQ7XG5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHJlc29sdmUoc2NyaXB0KTtcblxuICAgICAgICBzY3JpcHQub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgKF9kb2N1bWVudCRoZWFkID0gZG9jdW1lbnQuaGVhZCkgPT09IG51bGwgfHwgX2RvY3VtZW50JGhlYWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kb2N1bWVudCRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbXBvcnRTY3JpcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBXb3JrZXIgc2NyaXB0c1xuICAgICAgaWYgKGFzc2V0Lm91dHB1dEZvcm1hdCA9PT0gJ2VzbW9kdWxlJykge1xuICAgICAgICByZXR1cm4gX19wYXJjZWxfX2ltcG9ydF9fKGFzc2V0LnVybCArICc/dD0nICsgRGF0ZS5ub3coKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBfX3BhcmNlbF9faW1wb3J0U2NyaXB0c19fKGFzc2V0LnVybCArICc/dD0nICsgRGF0ZS5ub3coKSk7XG5cbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhtckFwcGx5VXBkYXRlcyhhc3NldHMpIHtcbiAgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGxldCBzY3JpcHRzVG9SZW1vdmU7XG5cbiAgdHJ5IHtcbiAgICAvLyBJZiBzb3VyY2VVUkwgY29tbWVudHMgYXJlbid0IHN1cHBvcnRlZCBpbiBldmFsLCB3ZSBuZWVkIHRvIGxvYWRcbiAgICAvLyB0aGUgdXBkYXRlIGZyb20gdGhlIGRldiBzZXJ2ZXIgb3ZlciBIVFRQIHNvIHRoYXQgc3RhY2sgdHJhY2VzXG4gICAgLy8gYXJlIGNvcnJlY3QgaW4gZXJyb3JzL2xvZ3MuIFRoaXMgaXMgbXVjaCBzbG93ZXIgdGhhbiBldmFsLCBzb1xuICAgIC8vIHdlIG9ubHkgZG8gaXQgaWYgbmVlZGVkIChjdXJyZW50bHkganVzdCBTYWZhcmkpLlxuICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzcyOTdcbiAgICAvLyBUaGlzIHBhdGggaXMgYWxzbyB0YWtlbiBpZiBhIENTUCBkaXNhbGxvd3MgZXZhbC5cbiAgICBpZiAoIXN1cHBvcnRzU291cmNlVVJMKSB7XG4gICAgICBsZXQgcHJvbWlzZXMgPSBhc3NldHMubWFwKGFzc2V0ID0+IHtcbiAgICAgICAgdmFyIF9obXJEb3dubG9hZDtcblxuICAgICAgICByZXR1cm4gKF9obXJEb3dubG9hZCA9IGhtckRvd25sb2FkKGFzc2V0KSkgPT09IG51bGwgfHwgX2htckRvd25sb2FkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaG1yRG93bmxvYWQuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAvLyBXZWIgZXh0ZW5zaW9uIGJ1Z2ZpeCBmb3IgQ2hyb21pdW1cbiAgICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMjU1NDEyI2MxMlxuICAgICAgICAgIGlmIChleHRDdHggJiYgZXh0Q3R4LnJ1bnRpbWUgJiYgZXh0Q3R4LnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5tYW5pZmVzdF92ZXJzaW9uID09IDMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlICE9ICd1bmRlZmluZWQnICYmIGdsb2JhbCBpbnN0YW5jZW9mIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSkge1xuICAgICAgICAgICAgICBleHRDdHgucnVudGltZS5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhc3NldC51cmwgPSBleHRDdHgucnVudGltZS5nZXRVUkwoJy9fX3BhcmNlbF9obXJfcHJveHlfXz91cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCkpKTtcbiAgICAgICAgICAgIHJldHVybiBobXJEb3dubG9hZChhc3NldCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgc2NyaXB0c1RvUmVtb3ZlID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cblxuICAgIGFzc2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChhc3NldCkge1xuICAgICAgaG1yQXBwbHkobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldCk7XG4gICAgfSk7XG4gIH0gZmluYWxseSB7XG4gICAgZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGU7XG5cbiAgICBpZiAoc2NyaXB0c1RvUmVtb3ZlKSB7XG4gICAgICBzY3JpcHRzVG9SZW1vdmUuZm9yRWFjaChzY3JpcHQgPT4ge1xuICAgICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgICAgdmFyIF9kb2N1bWVudCRoZWFkMjtcblxuICAgICAgICAgIChfZG9jdW1lbnQkaGVhZDIgPSBkb2N1bWVudC5oZWFkKSA9PT0gbnVsbCB8fCBfZG9jdW1lbnQkaGVhZDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kb2N1bWVudCRoZWFkMi5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaG1yQXBwbHkoYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBhc3NldFxuLyo6ICBITVJBc3NldCAqL1xuKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGFzc2V0LnR5cGUgPT09ICdjc3MnKSB7XG4gICAgcmVsb2FkQ1NTKCk7XG4gIH0gZWxzZSBpZiAoYXNzZXQudHlwZSA9PT0gJ2pzJykge1xuICAgIGxldCBkZXBzID0gYXNzZXQuZGVwc0J5QnVuZGxlW2J1bmRsZS5ITVJfQlVORExFX0lEXTtcblxuICAgIGlmIChkZXBzKSB7XG4gICAgICBpZiAobW9kdWxlc1thc3NldC5pZF0pIHtcbiAgICAgICAgLy8gUmVtb3ZlIGRlcGVuZGVuY2llcyB0aGF0IGFyZSByZW1vdmVkIGFuZCB3aWxsIGJlY29tZSBvcnBoYW5lZC5cbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3Nhcnkgc28gdGhhdCBpZiB0aGUgYXNzZXQgaXMgYWRkZWQgYmFjayBhZ2FpbiwgdGhlIGNhY2hlIGlzIGdvbmUsIGFuZCB3ZSBwcmV2ZW50IGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAgICAgICAgbGV0IG9sZERlcHMgPSBtb2R1bGVzW2Fzc2V0LmlkXVsxXTtcblxuICAgICAgICBmb3IgKGxldCBkZXAgaW4gb2xkRGVwcykge1xuICAgICAgICAgIGlmICghZGVwc1tkZXBdIHx8IGRlcHNbZGVwXSAhPT0gb2xkRGVwc1tkZXBdKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSBvbGREZXBzW2RlcF07XG4gICAgICAgICAgICBsZXQgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICBobXJEZWxldGUobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0c1NvdXJjZVVSTCkge1xuICAgICAgICAvLyBHbG9iYWwgZXZhbC4gV2Ugd291bGQgdXNlIGBuZXcgRnVuY3Rpb25gIGhlcmUgYnV0IGJyb3dzZXJcbiAgICAgICAgLy8gc3VwcG9ydCBmb3Igc291cmNlIG1hcHMgaXMgYmV0dGVyIHdpdGggZXZhbC5cbiAgICAgICAgKDAsIGV2YWwpKGFzc2V0Lm91dHB1dCk7XG4gICAgICB9IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBsZXQgZm4gPSBnbG9iYWwucGFyY2VsSG90VXBkYXRlW2Fzc2V0LmlkXTtcbiAgICAgIG1vZHVsZXNbYXNzZXQuaWRdID0gW2ZuLCBkZXBzXTtcbiAgICB9IGVsc2UgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIGhtckFwcGx5KGJ1bmRsZS5wYXJlbnQsIGFzc2V0KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaG1yRGVsZXRlKGJ1bmRsZSwgaWQpIHtcbiAgbGV0IG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAobW9kdWxlc1tpZF0pIHtcbiAgICAvLyBDb2xsZWN0IGRlcGVuZGVuY2llcyB0aGF0IHdpbGwgYmVjb21lIG9ycGhhbmVkIHdoZW4gdGhpcyBtb2R1bGUgaXMgZGVsZXRlZC5cbiAgICBsZXQgZGVwcyA9IG1vZHVsZXNbaWRdWzFdO1xuICAgIGxldCBvcnBoYW5zID0gW107XG5cbiAgICBmb3IgKGxldCBkZXAgaW4gZGVwcykge1xuICAgICAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgZGVwc1tkZXBdKTtcblxuICAgICAgaWYgKHBhcmVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIG9ycGhhbnMucHVzaChkZXBzW2RlcF0pO1xuICAgICAgfVxuICAgIH0gLy8gRGVsZXRlIHRoZSBtb2R1bGUuIFRoaXMgbXVzdCBiZSBkb25lIGJlZm9yZSBkZWxldGluZyBkZXBlbmRlbmNpZXMgaW4gY2FzZSBvZiBjaXJjdWxhciBkZXBlbmRlbmNpZXMuXG5cblxuICAgIGRlbGV0ZSBtb2R1bGVzW2lkXTtcbiAgICBkZWxldGUgYnVuZGxlLmNhY2hlW2lkXTsgLy8gTm93IGRlbGV0ZSB0aGUgb3JwaGFucy5cblxuICAgIG9ycGhhbnMuZm9yRWFjaChpZCA9PiB7XG4gICAgICBobXJEZWxldGUobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIGhtckRlbGV0ZShidW5kbGUucGFyZW50LCBpZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaG1yQWNjZXB0Q2hlY2soYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBpZFxuLyo6IHN0cmluZyAqL1xuLCBkZXBzQnlCdW5kbGVcbi8qOiA/eyBbc3RyaW5nXTogeyBbc3RyaW5nXTogc3RyaW5nIH0gfSovXG4pIHtcbiAgaWYgKGhtckFjY2VwdENoZWNrT25lKGJ1bmRsZSwgaWQsIGRlcHNCeUJ1bmRsZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBUcmF2ZXJzZSBwYXJlbnRzIGJyZWFkdGggZmlyc3QuIEFsbCBwb3NzaWJsZSBhbmNlc3RyaWVzIG11c3QgYWNjZXB0IHRoZSBITVIgdXBkYXRlLCBvciB3ZSdsbCByZWxvYWQuXG5cblxuICBsZXQgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gIGxldCBhY2NlcHRlZCA9IGZhbHNlO1xuXG4gIHdoaWxlIChwYXJlbnRzLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgdiA9IHBhcmVudHMuc2hpZnQoKTtcbiAgICBsZXQgYSA9IGhtckFjY2VwdENoZWNrT25lKHZbMF0sIHZbMV0sIG51bGwpO1xuXG4gICAgaWYgKGEpIHtcbiAgICAgIC8vIElmIHRoaXMgcGFyZW50IGFjY2VwdHMsIHN0b3AgdHJhdmVyc2luZyB1cHdhcmQsIGJ1dCBzdGlsbCBjb25zaWRlciBzaWJsaW5ncy5cbiAgICAgIGFjY2VwdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3RoZXJ3aXNlLCBxdWV1ZSB0aGUgcGFyZW50cyBpbiB0aGUgbmV4dCBsZXZlbCB1cHdhcmQuXG4gICAgICBsZXQgcCA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCB2WzFdKTtcblxuICAgICAgaWYgKHAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBwYXJlbnRzLCB0aGVuIHdlJ3ZlIHJlYWNoZWQgYW4gZW50cnkgd2l0aG91dCBhY2NlcHRpbmcuIFJlbG9hZC5cbiAgICAgICAgYWNjZXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudHMucHVzaCguLi5wKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWNjZXB0ZWQ7XG59XG5cbmZ1bmN0aW9uIGhtckFjY2VwdENoZWNrT25lKGJ1bmRsZVxuLyo6IFBhcmNlbFJlcXVpcmUgKi9cbiwgaWRcbi8qOiBzdHJpbmcgKi9cbiwgZGVwc0J5QnVuZGxlXG4vKjogP3sgW3N0cmluZ106IHsgW3N0cmluZ106IHN0cmluZyB9IH0qL1xuKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGRlcHNCeUJ1bmRsZSAmJiAhZGVwc0J5QnVuZGxlW2J1bmRsZS5ITVJfQlVORExFX0lEXSkge1xuICAgIC8vIElmIHdlIHJlYWNoZWQgdGhlIHJvb3QgYnVuZGxlIHdpdGhvdXQgZmluZGluZyB3aGVyZSB0aGUgYXNzZXQgc2hvdWxkIGdvLFxuICAgIC8vIHRoZXJlJ3Mgbm90aGluZyB0byBkby4gTWFyayBhcyBcImFjY2VwdGVkXCIgc28gd2UgZG9uJ3QgcmVsb2FkIHRoZSBwYWdlLlxuICAgIGlmICghYnVuZGxlLnBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhtckFjY2VwdENoZWNrKGJ1bmRsZS5wYXJlbnQsIGlkLCBkZXBzQnlCdW5kbGUpO1xuICB9XG5cbiAgaWYgKGNoZWNrZWRBc3NldHNbaWRdKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjaGVja2VkQXNzZXRzW2lkXSA9IHRydWU7XG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBhc3NldHNUb0FjY2VwdC5wdXNoKFtidW5kbGUsIGlkXSk7XG5cbiAgaWYgKCFjYWNoZWQgfHwgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaG1yQWNjZXB0UnVuKGJ1bmRsZVxuLyo6IFBhcmNlbFJlcXVpcmUgKi9cbiwgaWRcbi8qOiBzdHJpbmcgKi9cbikge1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYnVuZGxlLmhvdERhdGEgPSB7fTtcblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QpIHtcbiAgICBjYWNoZWQuaG90LmRhdGEgPSBidW5kbGUuaG90RGF0YTtcbiAgfVxuXG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIGNiKGJ1bmRsZS5ob3REYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZSBidW5kbGUuY2FjaGVbaWRdO1xuICBidW5kbGUoaWQpO1xuICBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuXG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICB2YXIgYXNzZXRzVG9BbHNvQWNjZXB0ID0gY2IoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXNzZXRzVG9BbHNvQWNjZXB0ICYmIGFzc2V0c1RvQWNjZXB0Lmxlbmd0aCkge1xuICAgICAgICAvLyAkRmxvd0ZpeE1lW21ldGhvZC11bmJpbmRpbmddXG4gICAgICAgIGFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoYXNzZXRzVG9BY2NlcHQsIGFzc2V0c1RvQWxzb0FjY2VwdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhY2NlcHRlZEFzc2V0c1tpZF0gPSB0cnVlO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBnbG9iYWwgY2hyb21lLCBicm93c2VyLCBhZGRFdmVudExpc3RlbmVyICovXG52YXIgZW52ID0gdHlwZW9mIGNocm9tZSA9PSAndW5kZWZpbmVkJyA/IGJyb3dzZXIgOiBjaHJvbWU7XG5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgZW52LnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgX19wYXJjZWxfaG1yX3JlbG9hZF9fOiB0cnVlXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikgey8vIGlnbm9yZSB0aHJvd2luZyBpZiBleHRlbnNpb24gY29udGV4dCBpbnZhbGlkYXRlZFxuICB9XG59KTsiXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3JlbG9hZC44Yjk4MWUzNS5qcy5tYXAifQ==
