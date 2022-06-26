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
})({"3NEHM":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = "localhost";
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "e792fbbdaa78ee84";
module.bundle.HMR_BUNDLE_ID = "1df3aa5a953065f6";
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

},{}],"1AGGg":[function(require,module,exports) {
var _wikislownik = require("./sites/wikislownik");
function isWikislownikArticle(href) {
    return href.startsWith("https://pl.wiktionary.org/wiki/");
}
window.onload = ()=>{
    const url = window.location.href;
    if (isWikislownikArticle(url)) (0, _wikislownik.updateWikislownikArticle)();
};

},{"./sites/wikislownik":"9aBFR"}],"9aBFR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateWikislownikArticle", ()=>updateWikislownikArticle);
var _logger = require("../logger");
var _messages = require("../messages");
function makeAnkiButton(params, classes = []) {
    const ankiButton = document.createElement("button");
    ankiButton.innerHTML = "Anki";
    ankiButton.title = "Add note to Anki";
    ankiButton.classList.add("copy-button", ...classes);
    ankiButton.addEventListener("click", ()=>{
        chrome.runtime.sendMessage({
            payload: params,
            type: (0, _messages.MessageType).addNote
        });
    });
    return ankiButton;
}
let attempt = 0;
let attemptLimit = 100;
let deckNames = [];
function updateWikislownikArticle() {
    const translationElements = Array.from(document.querySelectorAll("div.mw-parser-output > ul > li.fldt-tlumaczenia"));
    attempt += 1;
    if (attempt === attemptLimit) {
        console.log(`translationElements: ${translationElements}`);
        console.log(`deckNames: ${deckNames}`);
        return;
    }
    console.log(`attempt - ${attempt}`);
    // ul elements may have one class or the other
    // const translationElements2 = Array.from<HTMLLIElement>(document.querySelectorAll('ul.fldt-tlumaczenia > li.fldt-tlumaczenia'));
    // translationE2lements1.push(...translationElements2);
    console.log(translationElements);
    // if (translationElements.length === 0 || deckNames.length === 0) {
    if (translationElements.length === 0) window.requestAnimationFrame(updateWikislownikArticle);
    else {
        // ul elements may both class so have to deduplicate
        // const seen = new Set<string>();
        // const translationElements: Array<HTMLLIElement> = [];
        // for (const element of translationElements) {
        //     const innerText = element.innerText;
        //     if (seen.has(innerText)) {
        //         continue;
        //     } else {
        //         seen.add(innerText);
        //         t    ranslationElements.push(element);
        //     }
        // }
        const heading = document.getElementById("firstHeading");
        if (!heading) return;
        const lemma = heading.innerText;
        const pronunciation = document.querySelectorAll('span[title^="To jest wymowa w zapisie IPA; zobacz has\u0142o IPA w Wikipedii"].lang-pl')[0]?.innerText;
        for (const translationElement of translationElements){
            const translation = translationElement.innerText.split(":")[1];
            const back = `${pronunciation} ${translation}<br\><br\> http://alexey-yunoshev.github.io/incontext/?q=${lemma}`;
            const ankiButton = makeAnkiButton({
                back,
                // TODO
                deckName: "Polish",
                front: lemma
            });
            translationElement.insertAdjacentElement("beforeend", ankiButton);
        }
        chrome.runtime.onMessage.addListener(async (message)=>{
            switch(message.type){
                case (0, _messages.MessageType).addNoteResponse:
                    if (message.payload.error !== null) (0, _logger.logger).error(message.payload.error);
                    else (0, _logger.logger).info("Note added");
                    break;
                case (0, _messages.MessageType).deckNamesResponse:
                    if (message.payload.error !== null) (0, _logger.logger).error(message.payload.error);
                    else {
                        deckNames = message.payload.result;
                        const translationsContainer = Array.from(document.querySelectorAll("div.mw-parser-output > ul"));
                        const ankiDeckPicker = new HTMLDivElement();
                        // push label
                        // push deck select
                        // on select update storage
                        console.log("deckNames ,,,,");
                        (0, _logger.logger).info(message.payload.result);
                        console.log("deckNames ;;;;");
                    }
                    break;
                default:
                    (0, _logger.logger).error(message, `Unexpected message type: ${message.type}`);
            }
        });
        chrome.runtime.sendMessage({
            type: (0, _messages.MessageType).deckNames
        });
    }
}

},{"../logger":"jShah","../messages":"9riy2","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"jShah":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "logger", ()=>logger);
var _pino = require("pino");
var _pinoDefault = parcelHelpers.interopDefault(_pino);
const logger = (0, _pinoDefault.default)();

},{"pino":"lV5td","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"lV5td":[function(require,module,exports) {
"use strict";
const format = require("quick-format-unescaped");
module.exports = pino;
const _console = pfGlobalThisOrFallback().console || {};
const stdSerializers = {
    mapHttpRequest: mock,
    mapHttpResponse: mock,
    wrapRequestSerializer: passthrough,
    wrapResponseSerializer: passthrough,
    wrapErrorSerializer: passthrough,
    req: mock,
    res: mock,
    err: asErrValue
};
function shouldSerialize(serialize, serializers) {
    if (Array.isArray(serialize)) {
        const hasToFilter = serialize.filter(function(k) {
            return k !== "!stdSerializers.err";
        });
        return hasToFilter;
    } else if (serialize === true) return Object.keys(serializers);
    return false;
}
function pino(opts) {
    opts = opts || {};
    opts.browser = opts.browser || {};
    const transmit1 = opts.browser.transmit;
    if (transmit1 && typeof transmit1.send !== "function") throw Error("pino: transmit option must have a send function");
    const proto = opts.browser.write || _console;
    if (opts.browser.write) opts.browser.asObject = true;
    const serializers = opts.serializers || {};
    const serialize = shouldSerialize(opts.browser.serialize, serializers);
    let stdErrSerialize = opts.browser.serialize;
    if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1) stdErrSerialize = false;
    const levels = [
        "error",
        "fatal",
        "warn",
        "info",
        "debug",
        "trace"
    ];
    if (typeof proto === "function") proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
    if (opts.enabled === false) opts.level = "silent";
    const level1 = opts.level || "info";
    const logger = Object.create(proto);
    if (!logger.log) logger.log = noop;
    Object.defineProperty(logger, "levelVal", {
        get: getLevelVal
    });
    Object.defineProperty(logger, "level", {
        get: getLevel,
        set: setLevel
    });
    const setOpts = {
        transmit: transmit1,
        serialize,
        asObject: opts.browser.asObject,
        levels,
        timestamp: getTimeFunction(opts)
    };
    logger.levels = pino.levels;
    logger.level = level1;
    logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
    logger.serializers = serializers;
    logger._serialize = serialize;
    logger._stdErrSerialize = stdErrSerialize;
    logger.child = child;
    if (transmit1) logger._logEvent = createLogEventShape();
    function getLevelVal() {
        return this.level === "silent" ? Infinity : this.levels.values[this.level];
    }
    function getLevel() {
        return this._level;
    }
    function setLevel(level) {
        if (level !== "silent" && !this.levels.values[level]) throw Error("unknown level " + level);
        this._level = level;
        set(setOpts, logger, "error", "log") // <-- must stay first
        ;
        set(setOpts, logger, "fatal", "error");
        set(setOpts, logger, "warn", "error");
        set(setOpts, logger, "info", "log");
        set(setOpts, logger, "debug", "log");
        set(setOpts, logger, "trace", "log");
    }
    function child(bindings, childOptions) {
        if (!bindings) throw new Error("missing bindings for child Pino");
        childOptions = childOptions || {};
        if (serialize && bindings.serializers) childOptions.serializers = bindings.serializers;
        const childOptionsSerializers = childOptions.serializers;
        if (serialize && childOptionsSerializers) {
            var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
            var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
            delete bindings.serializers;
            applySerializers([
                bindings
            ], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent) {
            this._childLevel = (parent._childLevel | 0) + 1;
            this.error = bind(parent, bindings, "error");
            this.fatal = bind(parent, bindings, "fatal");
            this.warn = bind(parent, bindings, "warn");
            this.info = bind(parent, bindings, "info");
            this.debug = bind(parent, bindings, "debug");
            this.trace = bind(parent, bindings, "trace");
            if (childSerializers) {
                this.serializers = childSerializers;
                this._serialize = childSerialize;
            }
            if (transmit1) this._logEvent = createLogEventShape([].concat(parent._logEvent.bindings, bindings));
        }
        Child.prototype = this;
        return new Child(this);
    }
    return logger;
}
pino.levels = {
    values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
    },
    labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
    }
};
pino.stdSerializers = stdSerializers;
pino.stdTimeFunctions = Object.assign({}, {
    nullTime,
    epochTime,
    unixTime,
    isoTime
});
function set(opts, logger, level, fallback) {
    const proto = Object.getPrototypeOf(logger);
    logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback] || noop;
    wrap(opts, logger, level);
}
function wrap(opts, logger, level) {
    if (!opts.transmit && logger[level] === noop) return;
    logger[level] = function(write) {
        return function LOG() {
            const ts = opts.timestamp();
            const args = new Array(arguments.length);
            const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
            for(var i = 0; i < args.length; i++)args[i] = arguments[i];
            if (opts.serialize && !opts.asObject) applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
            if (opts.asObject) write.call(proto, asObject(this, level, args, ts));
            else write.apply(proto, args);
            if (opts.transmit) {
                const transmitLevel = opts.transmit.level || logger.level;
                const transmitValue = pino.levels.values[transmitLevel];
                const methodValue = pino.levels.values[level];
                if (methodValue < transmitValue) return;
                transmit(this, {
                    ts,
                    methodLevel: level,
                    methodValue,
                    transmitLevel,
                    transmitValue: pino.levels.values[opts.transmit.level || logger.level],
                    send: opts.transmit.send,
                    val: logger.levelVal
                }, args);
            }
        };
    }(logger[level]);
}
function asObject(logger, level, args, ts) {
    if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
    const argsCloned = args.slice();
    let msg = argsCloned[0];
    const o = {};
    if (ts) o.time = ts;
    o.level = pino.levels.values[level];
    let lvl = (logger._childLevel | 0) + 1;
    if (lvl < 1) lvl = 1;
    // deliberate, catching objects, arrays
    if (msg !== null && typeof msg === "object") {
        while((lvl--) && typeof argsCloned[0] === "object")Object.assign(o, argsCloned.shift());
        msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : undefined;
    } else if (typeof msg === "string") msg = format(argsCloned.shift(), argsCloned);
    if (msg !== undefined) o.msg = msg;
    return o;
}
function applySerializers(args, serialize, serializers, stdErrSerialize) {
    for(const i in args){
        if (stdErrSerialize && args[i] instanceof Error) args[i] = pino.stdSerializers.err(args[i]);
        else if (typeof args[i] === "object" && !Array.isArray(args[i])) {
            for(const k in args[i])if (serialize && serialize.indexOf(k) > -1 && k in serializers) args[i][k] = serializers[k](args[i][k]);
        }
    }
}
function bind(parent, bindings, level) {
    return function() {
        const args = new Array(1 + arguments.length);
        args[0] = bindings;
        for(var i = 1; i < args.length; i++)args[i] = arguments[i - 1];
        return parent[level].apply(this, args);
    };
}
function transmit(logger, opts, args) {
    const send = opts.send;
    const ts = opts.ts;
    const methodLevel = opts.methodLevel;
    const methodValue = opts.methodValue;
    const val = opts.val;
    const bindings = logger._logEvent.bindings;
    applySerializers(args, logger._serialize || Object.keys(logger.serializers), logger.serializers, logger._stdErrSerialize === undefined ? true : logger._stdErrSerialize);
    logger._logEvent.ts = ts;
    logger._logEvent.messages = args.filter(function(arg) {
        // bindings can only be objects, so reference equality check via indexOf is fine
        return bindings.indexOf(arg) === -1;
    });
    logger._logEvent.level.label = methodLevel;
    logger._logEvent.level.value = methodValue;
    send(methodLevel, logger._logEvent, val);
    logger._logEvent = createLogEventShape(bindings);
}
function createLogEventShape(bindings) {
    return {
        ts: 0,
        messages: [],
        bindings: bindings || [],
        level: {
            label: "",
            value: 0
        }
    };
}
function asErrValue(err) {
    const obj = {
        type: err.constructor.name,
        msg: err.message,
        stack: err.stack
    };
    for(const key in err)if (obj[key] === undefined) obj[key] = err[key];
    return obj;
}
function getTimeFunction(opts) {
    if (typeof opts.timestamp === "function") return opts.timestamp;
    if (opts.timestamp === false) return nullTime;
    return epochTime;
}
function mock() {
    return {};
}
function passthrough(a) {
    return a;
}
function noop() {}
function nullTime() {
    return false;
}
function epochTime() {
    return Date.now();
}
function unixTime() {
    return Math.round(Date.now() / 1000.0);
}
function isoTime() {
    return new Date(Date.now()).toISOString();
} // using Date.now() for testability
/* eslint-disable */ /* istanbul ignore next */ function pfGlobalThisOrFallback() {
    function defd(o) {
        return typeof o !== "undefined" && o;
    }
    try {
        if (typeof globalThis !== "undefined") return globalThis;
        Object.defineProperty(Object.prototype, "globalThis", {
            get: function() {
                delete Object.prototype.globalThis;
                return this.globalThis = this;
            },
            configurable: true
        });
        return globalThis;
    } catch (e) {
        return defd(self) || defd(window) || defd(this) || {};
    }
} /* eslint-enable */ 

},{"quick-format-unescaped":"9aVKV"}],"9aVKV":[function(require,module,exports) {
"use strict";
function tryStringify(o) {
    try {
        return JSON.stringify(o);
    } catch (e) {
        return '"[Circular]"';
    }
}
module.exports = format;
function format(f, args, opts) {
    var ss = opts && opts.stringify || tryStringify;
    var offset = 1;
    if (typeof f === "object" && f !== null) {
        var len = args.length + offset;
        if (len === 1) return f;
        var objects = new Array(len);
        objects[0] = ss(f);
        for(var index = 1; index < len; index++)objects[index] = ss(args[index]);
        return objects.join(" ");
    }
    if (typeof f !== "string") return f;
    var argLen = args.length;
    if (argLen === 0) return f;
    var str = "";
    var a = 1 - offset;
    var lastPos = -1;
    var flen = f && f.length || 0;
    for(var i = 0; i < flen;){
        if (f.charCodeAt(i) === 37 && i + 1 < flen) {
            lastPos = lastPos > -1 ? lastPos : 0;
            switch(f.charCodeAt(i + 1)){
                case 100:
                case 102:
                    if (a >= argLen) break;
                    if (args[a] == null) break;
                    if (lastPos < i) str += f.slice(lastPos, i);
                    str += Number(args[a]);
                    lastPos = i + 2;
                    i++;
                    break;
                case 105:
                    if (a >= argLen) break;
                    if (args[a] == null) break;
                    if (lastPos < i) str += f.slice(lastPos, i);
                    str += Math.floor(Number(args[a]));
                    lastPos = i + 2;
                    i++;
                    break;
                case 79:
                case 111:
                case 106:
                    if (a >= argLen) break;
                    if (args[a] === undefined) break;
                    if (lastPos < i) str += f.slice(lastPos, i);
                    var type = typeof args[a];
                    if (type === "string") {
                        str += "'" + args[a] + "'";
                        lastPos = i + 2;
                        i++;
                        break;
                    }
                    if (type === "function") {
                        str += args[a].name || "<anonymous>";
                        lastPos = i + 2;
                        i++;
                        break;
                    }
                    str += ss(args[a]);
                    lastPos = i + 2;
                    i++;
                    break;
                case 115:
                    if (a >= argLen) break;
                    if (lastPos < i) str += f.slice(lastPos, i);
                    str += String(args[a]);
                    lastPos = i + 2;
                    i++;
                    break;
                case 37:
                    if (lastPos < i) str += f.slice(lastPos, i);
                    str += "%";
                    lastPos = i + 2;
                    i++;
                    a--;
                    break;
            }
            ++a;
        }
        ++i;
    }
    if (lastPos === -1) return f;
    else if (lastPos < flen) str += f.slice(lastPos);
    return str;
}

},{}],"boKlo":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9riy2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageType", ()=>MessageType);
let MessageType;
(function(MessageType1) {
    MessageType1[MessageType1["addNote"] = 0] = "addNote";
    MessageType1[MessageType1["addNoteResponse"] = 1] = "addNoteResponse";
    MessageType1[MessageType1["deckNames"] = 2] = "deckNames";
    MessageType1[MessageType1["deckNamesResponse"] = 3] = "deckNamesResponse";
})(MessageType || (MessageType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}]},["3NEHM","1AGGg"], "1AGGg", "parcelRequireb5cb")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUpQLFdBQVcsS0FBWCxXQUFXIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWJyb3dzZXItaG1yL2xpYi9ydW50aW1lLTkyODY0MDk1MDU2MzRlODIuanMiLCJzcmMvbWFpbi50cyIsInNyYy9zaXRlcy93aWtpc2xvd25pay50cyIsInNyYy9sb2dnZXIudHMiLCJub2RlX21vZHVsZXMvcGluby9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3F1aWNrLWZvcm1hdC11bmVzY2FwZWQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInNyYy9tZXNzYWdlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSE1SX0hPU1QgPSBcImxvY2FsaG9zdFwiO3ZhciBITVJfUE9SVCA9IG51bGw7dmFyIEhNUl9TRUNVUkUgPSBmYWxzZTt2YXIgSE1SX0VOVl9IQVNIID0gXCJlNzkyZmJiZGFhNzhlZTg0XCI7bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEID0gXCIxZGYzYWE1YTk1MzA2NWY2XCI7XCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGdsb2JhbCBITVJfSE9TVCwgSE1SX1BPUlQsIEhNUl9FTlZfSEFTSCwgSE1SX1NFQ1VSRSwgY2hyb21lLCBicm93c2VyLCBnbG9iYWxUaGlzLCBfX3BhcmNlbF9faW1wb3J0X18sIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX18sIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSAqL1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7XG4gIEhNUkFzc2V0LFxuICBITVJNZXNzYWdlLFxufSBmcm9tICdAcGFyY2VsL3JlcG9ydGVyLWRldi1zZXJ2ZXIvc3JjL0hNUlNlcnZlci5qcyc7XG5pbnRlcmZhY2UgUGFyY2VsUmVxdWlyZSB7XG4gIChzdHJpbmcpOiBtaXhlZDtcbiAgY2FjaGU6IHt8W3N0cmluZ106IFBhcmNlbE1vZHVsZXx9O1xuICBob3REYXRhOiBtaXhlZDtcbiAgTW9kdWxlOiBhbnk7XG4gIHBhcmVudDogP1BhcmNlbFJlcXVpcmU7XG4gIGlzUGFyY2VsUmVxdWlyZTogdHJ1ZTtcbiAgbW9kdWxlczoge3xbc3RyaW5nXTogW0Z1bmN0aW9uLCB7fFtzdHJpbmddOiBzdHJpbmd8fV18fTtcbiAgSE1SX0JVTkRMRV9JRDogc3RyaW5nO1xuICByb290OiBQYXJjZWxSZXF1aXJlO1xufVxuaW50ZXJmYWNlIFBhcmNlbE1vZHVsZSB7XG4gIGhvdDoge3xcbiAgICBkYXRhOiBtaXhlZCxcbiAgICBhY2NlcHQoY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgZGlzcG9zZShjYjogKG1peGVkKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBhY2NlcHQoZGVwczogQXJyYXk8c3RyaW5nPiB8IHN0cmluZywgY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gZGVjbGluZSgpOiB2b2lkLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IEFycmF5PChGdW5jdGlvbikgPT4gdm9pZD4sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IEFycmF5PChtaXhlZCkgPT4gdm9pZD4sXG4gIHx9O1xufVxuaW50ZXJmYWNlIEV4dGVuc2lvbkNvbnRleHQge1xuICBydW50aW1lOiB7fFxuICAgIHJlbG9hZCgpOiB2b2lkLFxuICAgIGdldFVSTCh1cmw6IHN0cmluZyk6IHN0cmluZztcbiAgICBnZXRNYW5pZmVzdCgpOiB7bWFuaWZlc3RfdmVyc2lvbjogbnVtYmVyLCAuLi59O1xuICB8fTtcbn1cbmRlY2xhcmUgdmFyIG1vZHVsZToge2J1bmRsZTogUGFyY2VsUmVxdWlyZSwgLi4ufTtcbmRlY2xhcmUgdmFyIEhNUl9IT1NUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfUE9SVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX0VOVl9IQVNIOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfU0VDVVJFOiBib29sZWFuO1xuZGVjbGFyZSB2YXIgY2hyb21lOiBFeHRlbnNpb25Db250ZXh0O1xuZGVjbGFyZSB2YXIgYnJvd3NlcjogRXh0ZW5zaW9uQ29udGV4dDtcbmRlY2xhcmUgdmFyIF9fcGFyY2VsX19pbXBvcnRfXzogKHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbmRlY2xhcmUgdmFyIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX186IChzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG5kZWNsYXJlIHZhciBnbG9iYWxUaGlzOiB0eXBlb2Ygc2VsZjtcbmRlY2xhcmUgdmFyIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZTogT2JqZWN0O1xuKi9cbnZhciBPVkVSTEFZX0lEID0gJ19fcGFyY2VsX19lcnJvcl9fb3ZlcmxheV9fJztcbnZhciBPbGRNb2R1bGUgPSBtb2R1bGUuYnVuZGxlLk1vZHVsZTtcblxuZnVuY3Rpb24gTW9kdWxlKG1vZHVsZU5hbWUpIHtcbiAgT2xkTW9kdWxlLmNhbGwodGhpcywgbW9kdWxlTmFtZSk7XG4gIHRoaXMuaG90ID0ge1xuICAgIGRhdGE6IG1vZHVsZS5idW5kbGUuaG90RGF0YSxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBbXSxcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogW10sXG4gICAgYWNjZXB0OiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHRoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKGZuIHx8IGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9LFxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uIChmbikge1xuICAgICAgdGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKGZuKTtcbiAgICB9XG4gIH07XG4gIG1vZHVsZS5idW5kbGUuaG90RGF0YSA9IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmJ1bmRsZS5Nb2R1bGUgPSBNb2R1bGU7XG52YXIgY2hlY2tlZEFzc2V0c1xuLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuLCBhY2NlcHRlZEFzc2V0c1xuLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuLCBhc3NldHNUb0FjY2VwdFxuLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqL1xuO1xuXG5mdW5jdGlvbiBnZXRIb3N0bmFtZSgpIHtcbiAgcmV0dXJuIEhNUl9IT1NUIHx8IChsb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKCdodHRwJykgPT09IDAgPyBsb2NhdGlvbi5ob3N0bmFtZSA6ICdsb2NhbGhvc3QnKTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9ydCgpIHtcbiAgcmV0dXJuIEhNUl9QT1JUIHx8IGxvY2F0aW9uLnBvcnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuXG52YXIgcGFyZW50ID0gbW9kdWxlLmJ1bmRsZS5wYXJlbnQ7XG5cbmlmICgoIXBhcmVudCB8fCAhcGFyZW50LmlzUGFyY2VsUmVxdWlyZSkgJiYgdHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbiAgdmFyIHBvcnQgPSBnZXRQb3J0KCk7XG4gIHZhciBwcm90b2NvbCA9IEhNUl9TRUNVUkUgfHwgbG9jYXRpb24ucHJvdG9jb2wgPT0gJ2h0dHBzOicgJiYgIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QoaG9zdG5hbWUpID8gJ3dzcycgOiAnd3MnO1xuICB2YXIgd3MgPSBuZXcgV2ViU29ja2V0KHByb3RvY29sICsgJzovLycgKyBob3N0bmFtZSArIChwb3J0ID8gJzonICsgcG9ydCA6ICcnKSArICcvJyk7IC8vIFdlYiBleHRlbnNpb24gY29udGV4dFxuXG4gIHZhciBleHRDdHggPSB0eXBlb2YgY2hyb21lID09PSAndW5kZWZpbmVkJyA/IHR5cGVvZiBicm93c2VyID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBicm93c2VyIDogY2hyb21lOyAvLyBTYWZhcmkgZG9lc24ndCBzdXBwb3J0IHNvdXJjZVVSTCBpbiBlcnJvciBzdGFja3MuXG4gIC8vIGV2YWwgbWF5IGFsc28gYmUgZGlzYWJsZWQgdmlhIENTUCwgc28gZG8gYSBxdWljayBjaGVjay5cblxuICB2YXIgc3VwcG9ydHNTb3VyY2VVUkwgPSBmYWxzZTtcblxuICB0cnkge1xuICAgICgwLCBldmFsKSgndGhyb3cgbmV3IEVycm9yKFwidGVzdFwiKTsgLy8jIHNvdXJjZVVSTD10ZXN0LmpzJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHN1cHBvcnRzU291cmNlVVJMID0gZXJyLnN0YWNrLmluY2x1ZGVzKCd0ZXN0LmpzJyk7XG4gIH0gLy8gJEZsb3dGaXhNZVxuXG5cbiAgd3Mub25tZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50XG4gIC8qOiB7ZGF0YTogc3RyaW5nLCAuLi59ICovXG4gICkge1xuICAgIGNoZWNrZWRBc3NldHMgPSB7fVxuICAgIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiAgICA7XG4gICAgYWNjZXB0ZWRBc3NldHMgPSB7fVxuICAgIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiAgICA7XG4gICAgYXNzZXRzVG9BY2NlcHQgPSBbXTtcbiAgICB2YXIgZGF0YVxuICAgIC8qOiBITVJNZXNzYWdlICovXG4gICAgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgIC8vIFJlbW92ZSBlcnJvciBvdmVybGF5IGlmIHRoZXJlIGlzIG9uZVxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBhc3NldHMgPSBkYXRhLmFzc2V0cy5maWx0ZXIoYXNzZXQgPT4gYXNzZXQuZW52SGFzaCA9PT0gSE1SX0VOVl9IQVNIKTsgLy8gSGFuZGxlIEhNUiBVcGRhdGVcblxuICAgICAgbGV0IGhhbmRsZWQgPSBhc3NldHMuZXZlcnkoYXNzZXQgPT4ge1xuICAgICAgICByZXR1cm4gYXNzZXQudHlwZSA9PT0gJ2NzcycgfHwgYXNzZXQudHlwZSA9PT0gJ2pzJyAmJiBobXJBY2NlcHRDaGVjayhtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0LmlkLCBhc3NldC5kZXBzQnlCdW5kbGUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTsgLy8gRGlzcGF0Y2ggY3VzdG9tIGV2ZW50IHNvIG90aGVyIHJ1bnRpbWVzIChlLmcgUmVhY3QgUmVmcmVzaCkgYXJlIGF3YXJlLlxuXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQ3VzdG9tRXZlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdwYXJjZWxobXJhY2NlcHQnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBobXJBcHBseVVwZGF0ZXMoYXNzZXRzKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFzc2V0c1RvQWNjZXB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGlkID0gYXNzZXRzVG9BY2NlcHRbaV1bMV07XG5cbiAgICAgICAgICBpZiAoIWFjY2VwdGVkQXNzZXRzW2lkXSkge1xuICAgICAgICAgICAgaG1yQWNjZXB0UnVuKGFzc2V0c1RvQWNjZXB0W2ldWzBdLCBpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgZnVsbFJlbG9hZCgpO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIC8vIExvZyBwYXJjZWwgZXJyb3JzIHRvIGNvbnNvbGVcbiAgICAgIGZvciAobGV0IGFuc2lEaWFnbm9zdGljIG9mIGRhdGEuZGlhZ25vc3RpY3MuYW5zaSkge1xuICAgICAgICBsZXQgc3RhY2sgPSBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgPyBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgOiBhbnNpRGlhZ25vc3RpYy5zdGFjaztcbiAgICAgICAgY29uc29sZS5lcnJvcign8J+aqCBbcGFyY2VsXTogJyArIGFuc2lEaWFnbm9zdGljLm1lc3NhZ2UgKyAnXFxuJyArIHN0YWNrICsgJ1xcblxcbicgKyBhbnNpRGlhZ25vc3RpYy5oaW50cy5qb2luKCdcXG4nKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFJlbmRlciB0aGUgZmFuY3kgaHRtbCBvdmVybGF5XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgICB2YXIgb3ZlcmxheSA9IGNyZWF0ZUVycm9yT3ZlcmxheShkYXRhLmRpYWdub3N0aWNzLmh0bWwpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuICB9O1xuXG4gIHdzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS53YXJuKCdbcGFyY2VsXSDwn5qoIENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgd2FzIGxvc3QnKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXJyb3JPdmVybGF5KCkge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE9WRVJMQVlfSUQpO1xuXG4gIGlmIChvdmVybGF5KSB7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZygnW3BhcmNlbF0g4pyoIEVycm9yIHJlc29sdmVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRXJyb3JPdmVybGF5KGRpYWdub3N0aWNzKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuaWQgPSBPVkVSTEFZX0lEO1xuICBsZXQgZXJyb3JIVE1MID0gJzxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiBibGFjazsgb3BhY2l0eTogMC44NTsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogd2hpdGU7IHBvc2l0aW9uOiBmaXhlZDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgdG9wOiAwcHg7IGxlZnQ6IDBweDsgcGFkZGluZzogMzBweDsgZm9udC1mYW1pbHk6IE1lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlOyB6LWluZGV4OiA5OTk5O1wiPic7XG5cbiAgZm9yIChsZXQgZGlhZ25vc3RpYyBvZiBkaWFnbm9zdGljcykge1xuICAgIGxldCBzdGFjayA9IGRpYWdub3N0aWMuZnJhbWVzLmxlbmd0aCA/IGRpYWdub3N0aWMuZnJhbWVzLnJlZHVjZSgocCwgZnJhbWUpID0+IHtcbiAgICAgIHJldHVybiBgJHtwfVxuPGEgaHJlZj1cIi9fX3BhcmNlbF9sYXVuY2hfZWRpdG9yP2ZpbGU9JHtlbmNvZGVVUklDb21wb25lbnQoZnJhbWUubG9jYXRpb24pfVwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IGNvbG9yOiAjODg4XCIgb25jbGljaz1cImZldGNoKHRoaXMuaHJlZik7IHJldHVybiBmYWxzZVwiPiR7ZnJhbWUubG9jYXRpb259PC9hPlxuJHtmcmFtZS5jb2RlfWA7XG4gICAgfSwgJycpIDogZGlhZ25vc3RpYy5zdGFjaztcbiAgICBlcnJvckhUTUwgKz0gYFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IG1hcmdpbi10b3A6IDIwcHg7XCI+XG4gICAgICAgICAg8J+aqCAke2RpYWdub3N0aWMubWVzc2FnZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwcmU+JHtzdGFja308L3ByZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAke2RpYWdub3N0aWMuaGludHMubWFwKGhpbnQgPT4gJzxkaXY+8J+SoSAnICsgaGludCArICc8L2Rpdj4nKS5qb2luKCcnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICR7ZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9uID8gYDxkaXY+8J+TnSA8YSBzdHlsZT1cImNvbG9yOiB2aW9sZXRcIiBocmVmPVwiJHtkaWFnbm9zdGljLmRvY3VtZW50YXRpb259XCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGVhcm4gbW9yZTwvYT48L2Rpdj5gIDogJyd9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgZXJyb3JIVE1MICs9ICc8L2Rpdj4nO1xuICBvdmVybGF5LmlubmVySFRNTCA9IGVycm9ySFRNTDtcbiAgcmV0dXJuIG92ZXJsYXk7XG59XG5cbmZ1bmN0aW9uIGZ1bGxSZWxvYWQoKSB7XG4gIGlmICgncmVsb2FkJyBpbiBsb2NhdGlvbikge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9IGVsc2UgaWYgKGV4dEN0eCAmJiBleHRDdHgucnVudGltZSAmJiBleHRDdHgucnVudGltZS5yZWxvYWQpIHtcbiAgICBleHRDdHgucnVudGltZS5yZWxvYWQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnRzKGJ1bmRsZSwgaWQpXG4vKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovXG57XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIHBhcmVudHMgPSBbXTtcbiAgdmFyIGssIGQsIGRlcDtcblxuICBmb3IgKGsgaW4gbW9kdWxlcykge1xuICAgIGZvciAoZCBpbiBtb2R1bGVzW2tdWzFdKSB7XG4gICAgICBkZXAgPSBtb2R1bGVzW2tdWzFdW2RdO1xuXG4gICAgICBpZiAoZGVwID09PSBpZCB8fCBBcnJheS5pc0FycmF5KGRlcCkgJiYgZGVwW2RlcC5sZW5ndGggLSAxXSA9PT0gaWQpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKFtidW5kbGUsIGtdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIHBhcmVudHMgPSBwYXJlbnRzLmNvbmNhdChnZXRQYXJlbnRzKGJ1bmRsZS5wYXJlbnQsIGlkKSk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rKSB7XG4gIHZhciBuZXdMaW5rID0gbGluay5jbG9uZU5vZGUoKTtcblxuICBuZXdMaW5rLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobGluay5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgfVxuICB9O1xuXG4gIG5ld0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgLy8gJEZsb3dGaXhNZVxuICBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpLnNwbGl0KCc/JylbMF0gKyAnPycgKyBEYXRlLm5vdygpKTsgLy8gJEZsb3dGaXhNZVxuXG4gIGxpbmsucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3TGluaywgbGluay5uZXh0U2libGluZyk7XG59XG5cbnZhciBjc3NUaW1lb3V0ID0gbnVsbDtcblxuZnVuY3Rpb24gcmVsb2FkQ1NTKCkge1xuICBpZiAoY3NzVGltZW91dCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdXG4gICAgICB2YXIgaHJlZlxuICAgICAgLyo6IHN0cmluZyAqL1xuICAgICAgPSBsaW5rc1tpXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gICAgICB2YXIgc2VydmVkRnJvbUhNUlNlcnZlciA9IGhvc3RuYW1lID09PSAnbG9jYWxob3N0JyA/IG5ldyBSZWdFeHAoJ14oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6JyArIGdldFBvcnQoKSkudGVzdChocmVmKSA6IGhyZWYuaW5kZXhPZihob3N0bmFtZSArICc6JyArIGdldFBvcnQoKSk7XG4gICAgICB2YXIgYWJzb2x1dGUgPSAvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KGhyZWYpICYmIGhyZWYuaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pICE9PSAwICYmICFzZXJ2ZWRGcm9tSE1SU2VydmVyO1xuXG4gICAgICBpZiAoIWFic29sdXRlKSB7XG4gICAgICAgIHVwZGF0ZUxpbmsobGlua3NbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNzc1RpbWVvdXQgPSBudWxsO1xuICB9LCA1MCk7XG59XG5cbmZ1bmN0aW9uIGhtckRvd25sb2FkKGFzc2V0KSB7XG4gIGlmIChhc3NldC50eXBlID09PSAnanMnKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5zcmMgPSBhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCk7XG5cbiAgICAgIGlmIChhc3NldC5vdXRwdXRGb3JtYXQgPT09ICdlc21vZHVsZScpIHtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnbW9kdWxlJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdmFyIF9kb2N1bWVudCRoZWFkO1xuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHNjcmlwdCk7XG5cbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIChfZG9jdW1lbnQkaGVhZCA9IGRvY3VtZW50LmhlYWQpID09PSBudWxsIHx8IF9kb2N1bWVudCRoZWFkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZG9jdW1lbnQkaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gV29ya2VyIHNjcmlwdHNcbiAgICAgIGlmIChhc3NldC5vdXRwdXRGb3JtYXQgPT09ICdlc21vZHVsZScpIHtcbiAgICAgICAgcmV0dXJuIF9fcGFyY2VsX19pbXBvcnRfXyhhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXyhhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCkpO1xuXG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBobXJBcHBseVVwZGF0ZXMoYXNzZXRzKSB7XG4gIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBsZXQgc2NyaXB0c1RvUmVtb3ZlO1xuXG4gIHRyeSB7XG4gICAgLy8gSWYgc291cmNlVVJMIGNvbW1lbnRzIGFyZW4ndCBzdXBwb3J0ZWQgaW4gZXZhbCwgd2UgbmVlZCB0byBsb2FkXG4gICAgLy8gdGhlIHVwZGF0ZSBmcm9tIHRoZSBkZXYgc2VydmVyIG92ZXIgSFRUUCBzbyB0aGF0IHN0YWNrIHRyYWNlc1xuICAgIC8vIGFyZSBjb3JyZWN0IGluIGVycm9ycy9sb2dzLiBUaGlzIGlzIG11Y2ggc2xvd2VyIHRoYW4gZXZhbCwgc29cbiAgICAvLyB3ZSBvbmx5IGRvIGl0IGlmIG5lZWRlZCAoY3VycmVudGx5IGp1c3QgU2FmYXJpKS5cbiAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM3Mjk3XG4gICAgLy8gVGhpcyBwYXRoIGlzIGFsc28gdGFrZW4gaWYgYSBDU1AgZGlzYWxsb3dzIGV2YWwuXG4gICAgaWYgKCFzdXBwb3J0c1NvdXJjZVVSTCkge1xuICAgICAgbGV0IHByb21pc2VzID0gYXNzZXRzLm1hcChhc3NldCA9PiB7XG4gICAgICAgIHZhciBfaG1yRG93bmxvYWQ7XG5cbiAgICAgICAgcmV0dXJuIChfaG1yRG93bmxvYWQgPSBobXJEb3dubG9hZChhc3NldCkpID09PSBudWxsIHx8IF9obXJEb3dubG9hZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2htckRvd25sb2FkLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgLy8gV2ViIGV4dGVuc2lvbiBidWdmaXggZm9yIENocm9taXVtXG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTI1NTQxMiNjMTJcbiAgICAgICAgICBpZiAoZXh0Q3R4ICYmIGV4dEN0eC5ydW50aW1lICYmIGV4dEN0eC5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbiA9PSAzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSAhPSAndW5kZWZpbmVkJyAmJiBnbG9iYWwgaW5zdGFuY2VvZiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUpIHtcbiAgICAgICAgICAgICAgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXNzZXQudXJsID0gZXh0Q3R4LnJ1bnRpbWUuZ2V0VVJMKCcvX19wYXJjZWxfaG1yX3Byb3h5X18/dXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQoYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpKSk7XG4gICAgICAgICAgICByZXR1cm4gaG1yRG93bmxvYWQoYXNzZXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHNjcmlwdHNUb1JlbW92ZSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG5cbiAgICBhc3NldHMuZm9yRWFjaChmdW5jdGlvbiAoYXNzZXQpIHtcbiAgICAgIGhtckFwcGx5KG1vZHVsZS5idW5kbGUucm9vdCwgYXNzZXQpO1xuICAgIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGRlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlO1xuXG4gICAgaWYgKHNjcmlwdHNUb1JlbW92ZSkge1xuICAgICAgc2NyaXB0c1RvUmVtb3ZlLmZvckVhY2goc2NyaXB0ID0+IHtcbiAgICAgICAgaWYgKHNjcmlwdCkge1xuICAgICAgICAgIHZhciBfZG9jdW1lbnQkaGVhZDI7XG5cbiAgICAgICAgICAoX2RvY3VtZW50JGhlYWQyID0gZG9jdW1lbnQuaGVhZCkgPT09IG51bGwgfHwgX2RvY3VtZW50JGhlYWQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZG9jdW1lbnQkaGVhZDIucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhtckFwcGx5KGJ1bmRsZVxuLyo6IFBhcmNlbFJlcXVpcmUgKi9cbiwgYXNzZXRcbi8qOiAgSE1SQXNzZXQgKi9cbikge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChhc3NldC50eXBlID09PSAnY3NzJykge1xuICAgIHJlbG9hZENTUygpO1xuICB9IGVsc2UgaWYgKGFzc2V0LnR5cGUgPT09ICdqcycpIHtcbiAgICBsZXQgZGVwcyA9IGFzc2V0LmRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF07XG5cbiAgICBpZiAoZGVwcykge1xuICAgICAgaWYgKG1vZHVsZXNbYXNzZXQuaWRdKSB7XG4gICAgICAgIC8vIFJlbW92ZSBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgcmVtb3ZlZCBhbmQgd2lsbCBiZWNvbWUgb3JwaGFuZWQuXG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHNvIHRoYXQgaWYgdGhlIGFzc2V0IGlzIGFkZGVkIGJhY2sgYWdhaW4sIHRoZSBjYWNoZSBpcyBnb25lLCBhbmQgd2UgcHJldmVudCBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gICAgICAgIGxldCBvbGREZXBzID0gbW9kdWxlc1thc3NldC5pZF1bMV07XG5cbiAgICAgICAgZm9yIChsZXQgZGVwIGluIG9sZERlcHMpIHtcbiAgICAgICAgICBpZiAoIWRlcHNbZGVwXSB8fCBkZXBzW2RlcF0gIT09IG9sZERlcHNbZGVwXSkge1xuICAgICAgICAgICAgbGV0IGlkID0gb2xkRGVwc1tkZXBdO1xuICAgICAgICAgICAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgaG1yRGVsZXRlKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHNTb3VyY2VVUkwpIHtcbiAgICAgICAgLy8gR2xvYmFsIGV2YWwuIFdlIHdvdWxkIHVzZSBgbmV3IEZ1bmN0aW9uYCBoZXJlIGJ1dCBicm93c2VyXG4gICAgICAgIC8vIHN1cHBvcnQgZm9yIHNvdXJjZSBtYXBzIGlzIGJldHRlciB3aXRoIGV2YWwuXG4gICAgICAgICgwLCBldmFsKShhc3NldC5vdXRwdXQpO1xuICAgICAgfSAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgbGV0IGZuID0gZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVthc3NldC5pZF07XG4gICAgICBtb2R1bGVzW2Fzc2V0LmlkXSA9IFtmbiwgZGVwc107XG4gICAgfSBlbHNlIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgICBobXJBcHBseShidW5kbGUucGFyZW50LCBhc3NldCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhtckRlbGV0ZShidW5kbGUsIGlkKSB7XG4gIGxldCBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG1vZHVsZXNbaWRdKSB7XG4gICAgLy8gQ29sbGVjdCBkZXBlbmRlbmNpZXMgdGhhdCB3aWxsIGJlY29tZSBvcnBoYW5lZCB3aGVuIHRoaXMgbW9kdWxlIGlzIGRlbGV0ZWQuXG4gICAgbGV0IGRlcHMgPSBtb2R1bGVzW2lkXVsxXTtcbiAgICBsZXQgb3JwaGFucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgZGVwIGluIGRlcHMpIHtcbiAgICAgIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGRlcHNbZGVwXSk7XG5cbiAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBvcnBoYW5zLnB1c2goZGVwc1tkZXBdKTtcbiAgICAgIH1cbiAgICB9IC8vIERlbGV0ZSB0aGUgbW9kdWxlLiBUaGlzIG11c3QgYmUgZG9uZSBiZWZvcmUgZGVsZXRpbmcgZGVwZW5kZW5jaWVzIGluIGNhc2Ugb2YgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuXG5cbiAgICBkZWxldGUgbW9kdWxlc1tpZF07XG4gICAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07IC8vIE5vdyBkZWxldGUgdGhlIG9ycGhhbnMuXG5cbiAgICBvcnBoYW5zLmZvckVhY2goaWQgPT4ge1xuICAgICAgaG1yRGVsZXRlKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBobXJEZWxldGUoYnVuZGxlLnBhcmVudCwgaWQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhtckFjY2VwdENoZWNrKGJ1bmRsZVxuLyo6IFBhcmNlbFJlcXVpcmUgKi9cbiwgaWRcbi8qOiBzdHJpbmcgKi9cbiwgZGVwc0J5QnVuZGxlXG4vKjogP3sgW3N0cmluZ106IHsgW3N0cmluZ106IHN0cmluZyB9IH0qL1xuKSB7XG4gIGlmIChobXJBY2NlcHRDaGVja09uZShidW5kbGUsIGlkLCBkZXBzQnlCdW5kbGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gVHJhdmVyc2UgcGFyZW50cyBicmVhZHRoIGZpcnN0LiBBbGwgcG9zc2libGUgYW5jZXN0cmllcyBtdXN0IGFjY2VwdCB0aGUgSE1SIHVwZGF0ZSwgb3Igd2UnbGwgcmVsb2FkLlxuXG5cbiAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICBsZXQgYWNjZXB0ZWQgPSBmYWxzZTtcblxuICB3aGlsZSAocGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IHYgPSBwYXJlbnRzLnNoaWZ0KCk7XG4gICAgbGV0IGEgPSBobXJBY2NlcHRDaGVja09uZSh2WzBdLCB2WzFdLCBudWxsKTtcblxuICAgIGlmIChhKSB7XG4gICAgICAvLyBJZiB0aGlzIHBhcmVudCBhY2NlcHRzLCBzdG9wIHRyYXZlcnNpbmcgdXB3YXJkLCBidXQgc3RpbGwgY29uc2lkZXIgc2libGluZ3MuXG4gICAgICBhY2NlcHRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSwgcXVldWUgdGhlIHBhcmVudHMgaW4gdGhlIG5leHQgbGV2ZWwgdXB3YXJkLlxuICAgICAgbGV0IHAgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgdlsxXSk7XG5cbiAgICAgIGlmIChwLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gcGFyZW50cywgdGhlbiB3ZSd2ZSByZWFjaGVkIGFuIGVudHJ5IHdpdGhvdXQgYWNjZXB0aW5nLiBSZWxvYWQuXG4gICAgICAgIGFjY2VwdGVkID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnRzLnB1c2goLi4ucCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFjY2VwdGVkO1xufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRDaGVja09uZShidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4sIGRlcHNCeUJ1bmRsZVxuLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki9cbikge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkZXBzQnlCdW5kbGUgJiYgIWRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF0pIHtcbiAgICAvLyBJZiB3ZSByZWFjaGVkIHRoZSByb290IGJ1bmRsZSB3aXRob3V0IGZpbmRpbmcgd2hlcmUgdGhlIGFzc2V0IHNob3VsZCBnbyxcbiAgICAvLyB0aGVyZSdzIG5vdGhpbmcgdG8gZG8uIE1hcmsgYXMgXCJhY2NlcHRlZFwiIHNvIHdlIGRvbid0IHJlbG9hZCB0aGUgcGFnZS5cbiAgICBpZiAoIWJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBobXJBY2NlcHRDaGVjayhidW5kbGUucGFyZW50LCBpZCwgZGVwc0J5QnVuZGxlKTtcbiAgfVxuXG4gIGlmIChjaGVja2VkQXNzZXRzW2lkXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY2hlY2tlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYXNzZXRzVG9BY2NlcHQucHVzaChbYnVuZGxlLCBpZF0pO1xuXG4gIGlmICghY2FjaGVkIHx8IGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhtckFjY2VwdFJ1bihidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4pIHtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZS5ob3REYXRhID0ge307XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90KSB7XG4gICAgY2FjaGVkLmhvdC5kYXRhID0gYnVuZGxlLmhvdERhdGE7XG4gIH1cblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICBjYihidW5kbGUuaG90RGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUgYnVuZGxlLmNhY2hlW2lkXTtcbiAgYnVuZGxlKGlkKTtcbiAgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgdmFyIGFzc2V0c1RvQWxzb0FjY2VwdCA9IGNiKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFzc2V0c1RvQWxzb0FjY2VwdCAmJiBhc3NldHNUb0FjY2VwdC5sZW5ndGgpIHtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVttZXRob2QtdW5iaW5kaW5nXVxuICAgICAgICBhc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGFzc2V0c1RvQWNjZXB0LCBhc3NldHNUb0Fsc29BY2NlcHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWNjZXB0ZWRBc3NldHNbaWRdID0gdHJ1ZTtcbn0iLCJpbXBvcnQgeyB1cGRhdGVXaWtpc2xvd25pa0FydGljbGUgfSBmcm9tIFwiLi9zaXRlcy93aWtpc2xvd25pa1wiO1xuXG5mdW5jdGlvbiBpc1dpa2lzbG93bmlrQXJ0aWNsZShocmVmOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gaHJlZi5zdGFydHNXaXRoKCdodHRwczovL3BsLndpa3Rpb25hcnkub3JnL3dpa2kvJyk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cbiAgICBpZiAoaXNXaWtpc2xvd25pa0FydGljbGUodXJsKSkge1xuICAgICAgICB1cGRhdGVXaWtpc2xvd25pa0FydGljbGUoKTtcbiAgICB9XG59OyIsImltcG9ydCB7IEJhc2ljQWRkTm90ZVBhcmFtcyB9IGZyb20gXCIuLi9hbmtpL2FkZE5vdGVcIjtcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gXCIuLi9sb2dnZXJcIjtcbmltcG9ydCB7IEFkZE5vdGVNZXNzYWdlLCBEZWNrTmFtZXNNZXNzYWdlLCBNZXNzYWdlVHlwZSwgTWVzc3NhZ2UgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcblxuZnVuY3Rpb24gbWFrZUFua2lCdXR0b24oXG4gICAgcGFyYW1zOiBCYXNpY0FkZE5vdGVQYXJhbXMsXG4gICAgY2xhc3Nlczogc3RyaW5nW10gPSBbXSxcbik6IEhUTUxCdXR0b25FbGVtZW50IHtcbiAgICBjb25zdCBhbmtpQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhbmtpQnV0dG9uLmlubmVySFRNTCA9IFwiQW5raVwiO1xuICAgIGFua2lCdXR0b24udGl0bGUgPSBcIkFkZCBub3RlIHRvIEFua2lcIjtcbiAgICBhbmtpQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb3B5LWJ1dHRvblwiLCAuLi5jbGFzc2VzKTtcbiAgICBhbmtpQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgIHBheWxvYWQ6IHBhcmFtcyxcbiAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLmFkZE5vdGUsXG4gICAgICAgIH0gYXMgQWRkTm90ZU1lc3NhZ2UpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFua2lCdXR0b247XG59XG5cbmxldCBhdHRlbXB0ID0gMDtcbmxldCBhdHRlbXB0TGltaXQgPSAxMDA7XG5sZXQgZGVja05hbWVzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXaWtpc2xvd25pa0FydGljbGUoXG4pOiB2b2lkIHtcbiAgICBjb25zdCB0cmFuc2xhdGlvbkVsZW1lbnRzID0gQXJyYXkuZnJvbTxIVE1MTElFbGVtZW50Pihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYubXctcGFyc2VyLW91dHB1dCA+IHVsID4gbGkuZmxkdC10bHVtYWN6ZW5pYScpKTtcblxuICAgIGF0dGVtcHQgKz0gMTtcbiAgICBpZiAoYXR0ZW1wdCA9PT0gYXR0ZW1wdExpbWl0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0cmFuc2xhdGlvbkVsZW1lbnRzOiAke3RyYW5zbGF0aW9uRWxlbWVudHN9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBkZWNrTmFtZXM6ICR7ZGVja05hbWVzfWApO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBhdHRlbXB0IC0gJHthdHRlbXB0fWApXG5cbiAgICAvLyB1bCBlbGVtZW50cyBtYXkgaGF2ZSBvbmUgY2xhc3Mgb3IgdGhlIG90aGVyXG4gICAgLy8gY29uc3QgdHJhbnNsYXRpb25FbGVtZW50czIgPSBBcnJheS5mcm9tPEhUTUxMSUVsZW1lbnQ+KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsLmZsZHQtdGx1bWFjemVuaWEgPiBsaS5mbGR0LXRsdW1hY3plbmlhJykpO1xuICAgIC8vIHRyYW5zbGF0aW9uRTJsZW1lbnRzMS5wdXNoKC4uLnRyYW5zbGF0aW9uRWxlbWVudHMyKTtcbiAgICBjb25zb2xlLmxvZyh0cmFuc2xhdGlvbkVsZW1lbnRzKTtcbiAgICAvLyBpZiAodHJhbnNsYXRpb25FbGVtZW50cy5sZW5ndGggPT09IDAgfHwgZGVja05hbWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmICh0cmFuc2xhdGlvbkVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVdpa2lzbG93bmlrQXJ0aWNsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdWwgZWxlbWVudHMgbWF5IGJvdGggY2xhc3Mgc28gaGF2ZSB0byBkZWR1cGxpY2F0ZVxuICAgICAgICAvLyBjb25zdCBzZWVuID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICAgIC8vIGNvbnN0IHRyYW5zbGF0aW9uRWxlbWVudHM6IEFycmF5PEhUTUxMSUVsZW1lbnQ+ID0gW107XG5cbiAgICAgICAgLy8gZm9yIChjb25zdCBlbGVtZW50IG9mIHRyYW5zbGF0aW9uRWxlbWVudHMpIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IGlubmVyVGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0O1xuICAgICAgICAvLyAgICAgaWYgKHNlZW4uaGFzKGlubmVyVGV4dCkpIHtcbiAgICAgICAgLy8gICAgICAgICBjb250aW51ZTtcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgc2Vlbi5hZGQoaW5uZXJUZXh0KTtcbiAgICAgICAgLy8gICAgICAgICB0ICAgIHJhbnNsYXRpb25FbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpcnN0SGVhZGluZ1wiKTtcbiAgICAgICAgaWYgKCFoZWFkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsZW1tYSA9IGhlYWRpbmcuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCBwcm9udW5jaWF0aW9uID0gKFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICBcInNwYW5bdGl0bGVePVxcXCJUbyBqZXN0IHd5bW93YSB3IHphcGlzaWUgSVBBOyB6b2JhY3ogaGFzxYJvIElQQSB3IFdpa2lwZWRpaVxcXCJdLmxhbmctcGxcIixcbiAgICAgICAgICAgIClbMF0gYXMgSFRNTFNwYW5FbGVtZW50IHwgdW5kZWZpbmVkXG4gICAgICAgICk/LmlubmVyVGV4dDtcblxuICAgICAgICBmb3IgKGNvbnN0IHRyYW5zbGF0aW9uRWxlbWVudCBvZiB0cmFuc2xhdGlvbkVsZW1lbnRzKSB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9ICh0cmFuc2xhdGlvbkVsZW1lbnQgYXMgSFRNTExJRWxlbWVudCkuaW5uZXJUZXh0LnNwbGl0KCc6JylbMV07XG4gICAgICAgICAgICBjb25zdCBiYWNrID0gYCR7cHJvbnVuY2lhdGlvbn0gJHt0cmFuc2xhdGlvbn08YnJcXD48YnJcXD4gaHR0cDovL2FsZXhleS15dW5vc2hldi5naXRodWIuaW8vaW5jb250ZXh0Lz9xPSR7bGVtbWF9YDtcblxuICAgICAgICAgICAgY29uc3QgYW5raUJ1dHRvbiA9IG1ha2VBbmtpQnV0dG9uKHtcbiAgICAgICAgICAgICAgICBiYWNrLFxuICAgICAgICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgICAgICAgICBkZWNrTmFtZTogXCJQb2xpc2hcIixcbiAgICAgICAgICAgICAgICBmcm9udDogbGVtbWEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uRWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGFua2lCdXR0b24pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGFzeW5jIChtZXNzYWdlOiBNZXNzc2FnZSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLmFkZE5vdGVSZXNwb25zZToge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5wYXlsb2FkLmVycm9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IobWVzc2FnZS5wYXlsb2FkLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKFwiTm90ZSBhZGRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLmRlY2tOYW1lc1Jlc3BvbnNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnBheWxvYWQuZXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihtZXNzYWdlLnBheWxvYWQuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVja05hbWVzID0gbWVzc2FnZS5wYXlsb2FkLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uc0NvbnRhaW5lciA9IEFycmF5LmZyb208SFRNTExJRWxlbWVudD4oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2Lm13LXBhcnNlci1vdXRwdXQgPiB1bCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFua2lEZWNrUGlja2VyID0gbmV3IEhUTUxEaXZFbGVtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwdXNoIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwdXNoIGRlY2sgc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbiBzZWxlY3QgdXBkYXRlIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWNrTmFtZXMgLCwsLCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbyhtZXNzYWdlLnBheWxvYWQucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWNrTmFtZXMgOzs7OycpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKG1lc3NhZ2UsIGBVbmV4cGVjdGVkIG1lc3NhZ2UgdHlwZTogJHttZXNzYWdlLnR5cGV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLmRlY2tOYW1lcyxcbiAgICAgICAgfSBhcyBEZWNrTmFtZXNNZXNzYWdlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgcGlubyBmcm9tIFwicGlub1wiO1xuXG5leHBvcnQgY29uc3QgbG9nZ2VyID0gcGlubygpO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGZvcm1hdCA9IHJlcXVpcmUoJ3F1aWNrLWZvcm1hdC11bmVzY2FwZWQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBpbm9cblxuY29uc3QgX2NvbnNvbGUgPSBwZkdsb2JhbFRoaXNPckZhbGxiYWNrKCkuY29uc29sZSB8fCB7fVxuY29uc3Qgc3RkU2VyaWFsaXplcnMgPSB7XG4gIG1hcEh0dHBSZXF1ZXN0OiBtb2NrLFxuICBtYXBIdHRwUmVzcG9uc2U6IG1vY2ssXG4gIHdyYXBSZXF1ZXN0U2VyaWFsaXplcjogcGFzc3Rocm91Z2gsXG4gIHdyYXBSZXNwb25zZVNlcmlhbGl6ZXI6IHBhc3N0aHJvdWdoLFxuICB3cmFwRXJyb3JTZXJpYWxpemVyOiBwYXNzdGhyb3VnaCxcbiAgcmVxOiBtb2NrLFxuICByZXM6IG1vY2ssXG4gIGVycjogYXNFcnJWYWx1ZVxufVxuXG5mdW5jdGlvbiBzaG91bGRTZXJpYWxpemUgKHNlcmlhbGl6ZSwgc2VyaWFsaXplcnMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoc2VyaWFsaXplKSkge1xuICAgIGNvbnN0IGhhc1RvRmlsdGVyID0gc2VyaWFsaXplLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgICAgcmV0dXJuIGsgIT09ICchc3RkU2VyaWFsaXplcnMuZXJyJ1xuICAgIH0pXG4gICAgcmV0dXJuIGhhc1RvRmlsdGVyXG4gIH0gZWxzZSBpZiAoc2VyaWFsaXplID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNlcmlhbGl6ZXJzKVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHBpbm8gKG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge31cbiAgb3B0cy5icm93c2VyID0gb3B0cy5icm93c2VyIHx8IHt9XG5cbiAgY29uc3QgdHJhbnNtaXQgPSBvcHRzLmJyb3dzZXIudHJhbnNtaXRcbiAgaWYgKHRyYW5zbWl0ICYmIHR5cGVvZiB0cmFuc21pdC5zZW5kICE9PSAnZnVuY3Rpb24nKSB7IHRocm93IEVycm9yKCdwaW5vOiB0cmFuc21pdCBvcHRpb24gbXVzdCBoYXZlIGEgc2VuZCBmdW5jdGlvbicpIH1cblxuICBjb25zdCBwcm90byA9IG9wdHMuYnJvd3Nlci53cml0ZSB8fCBfY29uc29sZVxuICBpZiAob3B0cy5icm93c2VyLndyaXRlKSBvcHRzLmJyb3dzZXIuYXNPYmplY3QgPSB0cnVlXG4gIGNvbnN0IHNlcmlhbGl6ZXJzID0gb3B0cy5zZXJpYWxpemVycyB8fCB7fVxuICBjb25zdCBzZXJpYWxpemUgPSBzaG91bGRTZXJpYWxpemUob3B0cy5icm93c2VyLnNlcmlhbGl6ZSwgc2VyaWFsaXplcnMpXG4gIGxldCBzdGRFcnJTZXJpYWxpemUgPSBvcHRzLmJyb3dzZXIuc2VyaWFsaXplXG5cbiAgaWYgKFxuICAgIEFycmF5LmlzQXJyYXkob3B0cy5icm93c2VyLnNlcmlhbGl6ZSkgJiZcbiAgICBvcHRzLmJyb3dzZXIuc2VyaWFsaXplLmluZGV4T2YoJyFzdGRTZXJpYWxpemVycy5lcnInKSA+IC0xXG4gICkgc3RkRXJyU2VyaWFsaXplID0gZmFsc2VcblxuICBjb25zdCBsZXZlbHMgPSBbJ2Vycm9yJywgJ2ZhdGFsJywgJ3dhcm4nLCAnaW5mbycsICdkZWJ1ZycsICd0cmFjZSddXG5cbiAgaWYgKHR5cGVvZiBwcm90byA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHByb3RvLmVycm9yID0gcHJvdG8uZmF0YWwgPSBwcm90by53YXJuID1cbiAgICBwcm90by5pbmZvID0gcHJvdG8uZGVidWcgPSBwcm90by50cmFjZSA9IHByb3RvXG4gIH1cbiAgaWYgKG9wdHMuZW5hYmxlZCA9PT0gZmFsc2UpIG9wdHMubGV2ZWwgPSAnc2lsZW50J1xuICBjb25zdCBsZXZlbCA9IG9wdHMubGV2ZWwgfHwgJ2luZm8nXG4gIGNvbnN0IGxvZ2dlciA9IE9iamVjdC5jcmVhdGUocHJvdG8pXG4gIGlmICghbG9nZ2VyLmxvZykgbG9nZ2VyLmxvZyA9IG5vb3BcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobG9nZ2VyLCAnbGV2ZWxWYWwnLCB7XG4gICAgZ2V0OiBnZXRMZXZlbFZhbFxuICB9KVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobG9nZ2VyLCAnbGV2ZWwnLCB7XG4gICAgZ2V0OiBnZXRMZXZlbCxcbiAgICBzZXQ6IHNldExldmVsXG4gIH0pXG5cbiAgY29uc3Qgc2V0T3B0cyA9IHtcbiAgICB0cmFuc21pdCxcbiAgICBzZXJpYWxpemUsXG4gICAgYXNPYmplY3Q6IG9wdHMuYnJvd3Nlci5hc09iamVjdCxcbiAgICBsZXZlbHMsXG4gICAgdGltZXN0YW1wOiBnZXRUaW1lRnVuY3Rpb24ob3B0cylcbiAgfVxuICBsb2dnZXIubGV2ZWxzID0gcGluby5sZXZlbHNcbiAgbG9nZ2VyLmxldmVsID0gbGV2ZWxcblxuICBsb2dnZXIuc2V0TWF4TGlzdGVuZXJzID0gbG9nZ2VyLmdldE1heExpc3RlbmVycyA9XG4gIGxvZ2dlci5lbWl0ID0gbG9nZ2VyLmFkZExpc3RlbmVyID0gbG9nZ2VyLm9uID1cbiAgbG9nZ2VyLnByZXBlbmRMaXN0ZW5lciA9IGxvZ2dlci5vbmNlID1cbiAgbG9nZ2VyLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBsb2dnZXIucmVtb3ZlTGlzdGVuZXIgPVxuICBsb2dnZXIucmVtb3ZlQWxsTGlzdGVuZXJzID0gbG9nZ2VyLmxpc3RlbmVycyA9XG4gIGxvZ2dlci5saXN0ZW5lckNvdW50ID0gbG9nZ2VyLmV2ZW50TmFtZXMgPVxuICBsb2dnZXIud3JpdGUgPSBsb2dnZXIuZmx1c2ggPSBub29wXG4gIGxvZ2dlci5zZXJpYWxpemVycyA9IHNlcmlhbGl6ZXJzXG4gIGxvZ2dlci5fc2VyaWFsaXplID0gc2VyaWFsaXplXG4gIGxvZ2dlci5fc3RkRXJyU2VyaWFsaXplID0gc3RkRXJyU2VyaWFsaXplXG4gIGxvZ2dlci5jaGlsZCA9IGNoaWxkXG5cbiAgaWYgKHRyYW5zbWl0KSBsb2dnZXIuX2xvZ0V2ZW50ID0gY3JlYXRlTG9nRXZlbnRTaGFwZSgpXG5cbiAgZnVuY3Rpb24gZ2V0TGV2ZWxWYWwgKCkge1xuICAgIHJldHVybiB0aGlzLmxldmVsID09PSAnc2lsZW50J1xuICAgICAgPyBJbmZpbml0eVxuICAgICAgOiB0aGlzLmxldmVscy52YWx1ZXNbdGhpcy5sZXZlbF1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExldmVsICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGV2ZWxcbiAgfVxuICBmdW5jdGlvbiBzZXRMZXZlbCAobGV2ZWwpIHtcbiAgICBpZiAobGV2ZWwgIT09ICdzaWxlbnQnICYmICF0aGlzLmxldmVscy52YWx1ZXNbbGV2ZWxdKSB7XG4gICAgICB0aHJvdyBFcnJvcigndW5rbm93biBsZXZlbCAnICsgbGV2ZWwpXG4gICAgfVxuICAgIHRoaXMuX2xldmVsID0gbGV2ZWxcblxuICAgIHNldChzZXRPcHRzLCBsb2dnZXIsICdlcnJvcicsICdsb2cnKSAvLyA8LS0gbXVzdCBzdGF5IGZpcnN0XG4gICAgc2V0KHNldE9wdHMsIGxvZ2dlciwgJ2ZhdGFsJywgJ2Vycm9yJylcbiAgICBzZXQoc2V0T3B0cywgbG9nZ2VyLCAnd2FybicsICdlcnJvcicpXG4gICAgc2V0KHNldE9wdHMsIGxvZ2dlciwgJ2luZm8nLCAnbG9nJylcbiAgICBzZXQoc2V0T3B0cywgbG9nZ2VyLCAnZGVidWcnLCAnbG9nJylcbiAgICBzZXQoc2V0T3B0cywgbG9nZ2VyLCAndHJhY2UnLCAnbG9nJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoaWxkIChiaW5kaW5ncywgY2hpbGRPcHRpb25zKSB7XG4gICAgaWYgKCFiaW5kaW5ncykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGJpbmRpbmdzIGZvciBjaGlsZCBQaW5vJylcbiAgICB9XG4gICAgY2hpbGRPcHRpb25zID0gY2hpbGRPcHRpb25zIHx8IHt9XG4gICAgaWYgKHNlcmlhbGl6ZSAmJiBiaW5kaW5ncy5zZXJpYWxpemVycykge1xuICAgICAgY2hpbGRPcHRpb25zLnNlcmlhbGl6ZXJzID0gYmluZGluZ3Muc2VyaWFsaXplcnNcbiAgICB9XG4gICAgY29uc3QgY2hpbGRPcHRpb25zU2VyaWFsaXplcnMgPSBjaGlsZE9wdGlvbnMuc2VyaWFsaXplcnNcbiAgICBpZiAoc2VyaWFsaXplICYmIGNoaWxkT3B0aW9uc1NlcmlhbGl6ZXJzKSB7XG4gICAgICB2YXIgY2hpbGRTZXJpYWxpemVycyA9IE9iamVjdC5hc3NpZ24oe30sIHNlcmlhbGl6ZXJzLCBjaGlsZE9wdGlvbnNTZXJpYWxpemVycylcbiAgICAgIHZhciBjaGlsZFNlcmlhbGl6ZSA9IG9wdHMuYnJvd3Nlci5zZXJpYWxpemUgPT09IHRydWVcbiAgICAgICAgPyBPYmplY3Qua2V5cyhjaGlsZFNlcmlhbGl6ZXJzKVxuICAgICAgICA6IHNlcmlhbGl6ZVxuICAgICAgZGVsZXRlIGJpbmRpbmdzLnNlcmlhbGl6ZXJzXG4gICAgICBhcHBseVNlcmlhbGl6ZXJzKFtiaW5kaW5nc10sIGNoaWxkU2VyaWFsaXplLCBjaGlsZFNlcmlhbGl6ZXJzLCB0aGlzLl9zdGRFcnJTZXJpYWxpemUpXG4gICAgfVxuICAgIGZ1bmN0aW9uIENoaWxkIChwYXJlbnQpIHtcbiAgICAgIHRoaXMuX2NoaWxkTGV2ZWwgPSAocGFyZW50Ll9jaGlsZExldmVsIHwgMCkgKyAxXG4gICAgICB0aGlzLmVycm9yID0gYmluZChwYXJlbnQsIGJpbmRpbmdzLCAnZXJyb3InKVxuICAgICAgdGhpcy5mYXRhbCA9IGJpbmQocGFyZW50LCBiaW5kaW5ncywgJ2ZhdGFsJylcbiAgICAgIHRoaXMud2FybiA9IGJpbmQocGFyZW50LCBiaW5kaW5ncywgJ3dhcm4nKVxuICAgICAgdGhpcy5pbmZvID0gYmluZChwYXJlbnQsIGJpbmRpbmdzLCAnaW5mbycpXG4gICAgICB0aGlzLmRlYnVnID0gYmluZChwYXJlbnQsIGJpbmRpbmdzLCAnZGVidWcnKVxuICAgICAgdGhpcy50cmFjZSA9IGJpbmQocGFyZW50LCBiaW5kaW5ncywgJ3RyYWNlJylcbiAgICAgIGlmIChjaGlsZFNlcmlhbGl6ZXJzKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplcnMgPSBjaGlsZFNlcmlhbGl6ZXJzXG4gICAgICAgIHRoaXMuX3NlcmlhbGl6ZSA9IGNoaWxkU2VyaWFsaXplXG4gICAgICB9XG4gICAgICBpZiAodHJhbnNtaXQpIHtcbiAgICAgICAgdGhpcy5fbG9nRXZlbnQgPSBjcmVhdGVMb2dFdmVudFNoYXBlKFxuICAgICAgICAgIFtdLmNvbmNhdChwYXJlbnQuX2xvZ0V2ZW50LmJpbmRpbmdzLCBiaW5kaW5ncylcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICBDaGlsZC5wcm90b3R5cGUgPSB0aGlzXG4gICAgcmV0dXJuIG5ldyBDaGlsZCh0aGlzKVxuICB9XG4gIHJldHVybiBsb2dnZXJcbn1cblxucGluby5sZXZlbHMgPSB7XG4gIHZhbHVlczoge1xuICAgIGZhdGFsOiA2MCxcbiAgICBlcnJvcjogNTAsXG4gICAgd2FybjogNDAsXG4gICAgaW5mbzogMzAsXG4gICAgZGVidWc6IDIwLFxuICAgIHRyYWNlOiAxMFxuICB9LFxuICBsYWJlbHM6IHtcbiAgICAxMDogJ3RyYWNlJyxcbiAgICAyMDogJ2RlYnVnJyxcbiAgICAzMDogJ2luZm8nLFxuICAgIDQwOiAnd2FybicsXG4gICAgNTA6ICdlcnJvcicsXG4gICAgNjA6ICdmYXRhbCdcbiAgfVxufVxuXG5waW5vLnN0ZFNlcmlhbGl6ZXJzID0gc3RkU2VyaWFsaXplcnNcbnBpbm8uc3RkVGltZUZ1bmN0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHsgbnVsbFRpbWUsIGVwb2NoVGltZSwgdW5peFRpbWUsIGlzb1RpbWUgfSlcblxuZnVuY3Rpb24gc2V0IChvcHRzLCBsb2dnZXIsIGxldmVsLCBmYWxsYmFjaykge1xuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihsb2dnZXIpXG4gIGxvZ2dlcltsZXZlbF0gPSBsb2dnZXIubGV2ZWxWYWwgPiBsb2dnZXIubGV2ZWxzLnZhbHVlc1tsZXZlbF1cbiAgICA/IG5vb3BcbiAgICA6IChwcm90b1tsZXZlbF0gPyBwcm90b1tsZXZlbF0gOiAoX2NvbnNvbGVbbGV2ZWxdIHx8IF9jb25zb2xlW2ZhbGxiYWNrXSB8fCBub29wKSlcblxuICB3cmFwKG9wdHMsIGxvZ2dlciwgbGV2ZWwpXG59XG5cbmZ1bmN0aW9uIHdyYXAgKG9wdHMsIGxvZ2dlciwgbGV2ZWwpIHtcbiAgaWYgKCFvcHRzLnRyYW5zbWl0ICYmIGxvZ2dlcltsZXZlbF0gPT09IG5vb3ApIHJldHVyblxuXG4gIGxvZ2dlcltsZXZlbF0gPSAoZnVuY3Rpb24gKHdyaXRlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIExPRyAoKSB7XG4gICAgICBjb25zdCB0cyA9IG9wdHMudGltZXN0YW1wKClcbiAgICAgIGNvbnN0IGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aClcbiAgICAgIGNvbnN0IHByb3RvID0gKE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykgPT09IF9jb25zb2xlKSA/IF9jb25zb2xlIDogdGhpc1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSBhcmdzW2ldID0gYXJndW1lbnRzW2ldXG5cbiAgICAgIGlmIChvcHRzLnNlcmlhbGl6ZSAmJiAhb3B0cy5hc09iamVjdCkge1xuICAgICAgICBhcHBseVNlcmlhbGl6ZXJzKGFyZ3MsIHRoaXMuX3NlcmlhbGl6ZSwgdGhpcy5zZXJpYWxpemVycywgdGhpcy5fc3RkRXJyU2VyaWFsaXplKVxuICAgICAgfVxuICAgICAgaWYgKG9wdHMuYXNPYmplY3QpIHdyaXRlLmNhbGwocHJvdG8sIGFzT2JqZWN0KHRoaXMsIGxldmVsLCBhcmdzLCB0cykpXG4gICAgICBlbHNlIHdyaXRlLmFwcGx5KHByb3RvLCBhcmdzKVxuXG4gICAgICBpZiAob3B0cy50cmFuc21pdCkge1xuICAgICAgICBjb25zdCB0cmFuc21pdExldmVsID0gb3B0cy50cmFuc21pdC5sZXZlbCB8fCBsb2dnZXIubGV2ZWxcbiAgICAgICAgY29uc3QgdHJhbnNtaXRWYWx1ZSA9IHBpbm8ubGV2ZWxzLnZhbHVlc1t0cmFuc21pdExldmVsXVxuICAgICAgICBjb25zdCBtZXRob2RWYWx1ZSA9IHBpbm8ubGV2ZWxzLnZhbHVlc1tsZXZlbF1cbiAgICAgICAgaWYgKG1ldGhvZFZhbHVlIDwgdHJhbnNtaXRWYWx1ZSkgcmV0dXJuXG4gICAgICAgIHRyYW5zbWl0KHRoaXMsIHtcbiAgICAgICAgICB0cyxcbiAgICAgICAgICBtZXRob2RMZXZlbDogbGV2ZWwsXG4gICAgICAgICAgbWV0aG9kVmFsdWUsXG4gICAgICAgICAgdHJhbnNtaXRMZXZlbCxcbiAgICAgICAgICB0cmFuc21pdFZhbHVlOiBwaW5vLmxldmVscy52YWx1ZXNbb3B0cy50cmFuc21pdC5sZXZlbCB8fCBsb2dnZXIubGV2ZWxdLFxuICAgICAgICAgIHNlbmQ6IG9wdHMudHJhbnNtaXQuc2VuZCxcbiAgICAgICAgICB2YWw6IGxvZ2dlci5sZXZlbFZhbFxuICAgICAgICB9LCBhcmdzKVxuICAgICAgfVxuICAgIH1cbiAgfSkobG9nZ2VyW2xldmVsXSlcbn1cblxuZnVuY3Rpb24gYXNPYmplY3QgKGxvZ2dlciwgbGV2ZWwsIGFyZ3MsIHRzKSB7XG4gIGlmIChsb2dnZXIuX3NlcmlhbGl6ZSkgYXBwbHlTZXJpYWxpemVycyhhcmdzLCBsb2dnZXIuX3NlcmlhbGl6ZSwgbG9nZ2VyLnNlcmlhbGl6ZXJzLCBsb2dnZXIuX3N0ZEVyclNlcmlhbGl6ZSlcbiAgY29uc3QgYXJnc0Nsb25lZCA9IGFyZ3Muc2xpY2UoKVxuICBsZXQgbXNnID0gYXJnc0Nsb25lZFswXVxuICBjb25zdCBvID0ge31cbiAgaWYgKHRzKSB7XG4gICAgby50aW1lID0gdHNcbiAgfVxuICBvLmxldmVsID0gcGluby5sZXZlbHMudmFsdWVzW2xldmVsXVxuICBsZXQgbHZsID0gKGxvZ2dlci5fY2hpbGRMZXZlbCB8IDApICsgMVxuICBpZiAobHZsIDwgMSkgbHZsID0gMVxuICAvLyBkZWxpYmVyYXRlLCBjYXRjaGluZyBvYmplY3RzLCBhcnJheXNcbiAgaWYgKG1zZyAhPT0gbnVsbCAmJiB0eXBlb2YgbXNnID09PSAnb2JqZWN0Jykge1xuICAgIHdoaWxlIChsdmwtLSAmJiB0eXBlb2YgYXJnc0Nsb25lZFswXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24obywgYXJnc0Nsb25lZC5zaGlmdCgpKVxuICAgIH1cbiAgICBtc2cgPSBhcmdzQ2xvbmVkLmxlbmd0aCA/IGZvcm1hdChhcmdzQ2xvbmVkLnNoaWZ0KCksIGFyZ3NDbG9uZWQpIDogdW5kZWZpbmVkXG4gIH0gZWxzZSBpZiAodHlwZW9mIG1zZyA9PT0gJ3N0cmluZycpIG1zZyA9IGZvcm1hdChhcmdzQ2xvbmVkLnNoaWZ0KCksIGFyZ3NDbG9uZWQpXG4gIGlmIChtc2cgIT09IHVuZGVmaW5lZCkgby5tc2cgPSBtc2dcbiAgcmV0dXJuIG9cbn1cblxuZnVuY3Rpb24gYXBwbHlTZXJpYWxpemVycyAoYXJncywgc2VyaWFsaXplLCBzZXJpYWxpemVycywgc3RkRXJyU2VyaWFsaXplKSB7XG4gIGZvciAoY29uc3QgaSBpbiBhcmdzKSB7XG4gICAgaWYgKHN0ZEVyclNlcmlhbGl6ZSAmJiBhcmdzW2ldIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGFyZ3NbaV0gPSBwaW5vLnN0ZFNlcmlhbGl6ZXJzLmVycihhcmdzW2ldKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3NbaV0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGFyZ3NbaV0pKSB7XG4gICAgICBmb3IgKGNvbnN0IGsgaW4gYXJnc1tpXSkge1xuICAgICAgICBpZiAoc2VyaWFsaXplICYmIHNlcmlhbGl6ZS5pbmRleE9mKGspID4gLTEgJiYgayBpbiBzZXJpYWxpemVycykge1xuICAgICAgICAgIGFyZ3NbaV1ba10gPSBzZXJpYWxpemVyc1trXShhcmdzW2ldW2tdKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGJpbmQgKHBhcmVudCwgYmluZGluZ3MsIGxldmVsKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYXJncyA9IG5ldyBBcnJheSgxICsgYXJndW1lbnRzLmxlbmd0aClcbiAgICBhcmdzWzBdID0gYmluZGluZ3NcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSAtIDFdXG4gICAgfVxuICAgIHJldHVybiBwYXJlbnRbbGV2ZWxdLmFwcGx5KHRoaXMsIGFyZ3MpXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNtaXQgKGxvZ2dlciwgb3B0cywgYXJncykge1xuICBjb25zdCBzZW5kID0gb3B0cy5zZW5kXG4gIGNvbnN0IHRzID0gb3B0cy50c1xuICBjb25zdCBtZXRob2RMZXZlbCA9IG9wdHMubWV0aG9kTGV2ZWxcbiAgY29uc3QgbWV0aG9kVmFsdWUgPSBvcHRzLm1ldGhvZFZhbHVlXG4gIGNvbnN0IHZhbCA9IG9wdHMudmFsXG4gIGNvbnN0IGJpbmRpbmdzID0gbG9nZ2VyLl9sb2dFdmVudC5iaW5kaW5nc1xuXG4gIGFwcGx5U2VyaWFsaXplcnMoXG4gICAgYXJncyxcbiAgICBsb2dnZXIuX3NlcmlhbGl6ZSB8fCBPYmplY3Qua2V5cyhsb2dnZXIuc2VyaWFsaXplcnMpLFxuICAgIGxvZ2dlci5zZXJpYWxpemVycyxcbiAgICBsb2dnZXIuX3N0ZEVyclNlcmlhbGl6ZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGxvZ2dlci5fc3RkRXJyU2VyaWFsaXplXG4gIClcbiAgbG9nZ2VyLl9sb2dFdmVudC50cyA9IHRzXG4gIGxvZ2dlci5fbG9nRXZlbnQubWVzc2FnZXMgPSBhcmdzLmZpbHRlcihmdW5jdGlvbiAoYXJnKSB7XG4gICAgLy8gYmluZGluZ3MgY2FuIG9ubHkgYmUgb2JqZWN0cywgc28gcmVmZXJlbmNlIGVxdWFsaXR5IGNoZWNrIHZpYSBpbmRleE9mIGlzIGZpbmVcbiAgICByZXR1cm4gYmluZGluZ3MuaW5kZXhPZihhcmcpID09PSAtMVxuICB9KVxuXG4gIGxvZ2dlci5fbG9nRXZlbnQubGV2ZWwubGFiZWwgPSBtZXRob2RMZXZlbFxuICBsb2dnZXIuX2xvZ0V2ZW50LmxldmVsLnZhbHVlID0gbWV0aG9kVmFsdWVcblxuICBzZW5kKG1ldGhvZExldmVsLCBsb2dnZXIuX2xvZ0V2ZW50LCB2YWwpXG5cbiAgbG9nZ2VyLl9sb2dFdmVudCA9IGNyZWF0ZUxvZ0V2ZW50U2hhcGUoYmluZGluZ3MpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvZ0V2ZW50U2hhcGUgKGJpbmRpbmdzKSB7XG4gIHJldHVybiB7XG4gICAgdHM6IDAsXG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIGJpbmRpbmdzOiBiaW5kaW5ncyB8fCBbXSxcbiAgICBsZXZlbDogeyBsYWJlbDogJycsIHZhbHVlOiAwIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhc0VyclZhbHVlIChlcnIpIHtcbiAgY29uc3Qgb2JqID0ge1xuICAgIHR5cGU6IGVyci5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgIG1zZzogZXJyLm1lc3NhZ2UsXG4gICAgc3RhY2s6IGVyci5zdGFja1xuICB9XG4gIGZvciAoY29uc3Qga2V5IGluIGVycikge1xuICAgIGlmIChvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvYmpba2V5XSA9IGVycltrZXldXG4gICAgfVxuICB9XG4gIHJldHVybiBvYmpcbn1cblxuZnVuY3Rpb24gZ2V0VGltZUZ1bmN0aW9uIChvcHRzKSB7XG4gIGlmICh0eXBlb2Ygb3B0cy50aW1lc3RhbXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gb3B0cy50aW1lc3RhbXBcbiAgfVxuICBpZiAob3B0cy50aW1lc3RhbXAgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIG51bGxUaW1lXG4gIH1cbiAgcmV0dXJuIGVwb2NoVGltZVxufVxuXG5mdW5jdGlvbiBtb2NrICgpIHsgcmV0dXJuIHt9IH1cbmZ1bmN0aW9uIHBhc3N0aHJvdWdoIChhKSB7IHJldHVybiBhIH1cbmZ1bmN0aW9uIG5vb3AgKCkge31cblxuZnVuY3Rpb24gbnVsbFRpbWUgKCkgeyByZXR1cm4gZmFsc2UgfVxuZnVuY3Rpb24gZXBvY2hUaW1lICgpIHsgcmV0dXJuIERhdGUubm93KCkgfVxuZnVuY3Rpb24gdW5peFRpbWUgKCkgeyByZXR1cm4gTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMC4wKSB9XG5mdW5jdGlvbiBpc29UaW1lICgpIHsgcmV0dXJuIG5ldyBEYXRlKERhdGUubm93KCkpLnRvSVNPU3RyaW5nKCkgfSAvLyB1c2luZyBEYXRlLm5vdygpIGZvciB0ZXN0YWJpbGl0eVxuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIHBmR2xvYmFsVGhpc09yRmFsbGJhY2sgKCkge1xuICBmdW5jdGlvbiBkZWZkIChvKSB7IHJldHVybiB0eXBlb2YgbyAhPT0gJ3VuZGVmaW5lZCcgJiYgbyB9XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIGdsb2JhbFRoaXNcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgJ2dsb2JhbFRoaXMnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVsZXRlIE9iamVjdC5wcm90b3R5cGUuZ2xvYmFsVGhpc1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2xvYmFsVGhpcyA9IHRoaXMpXG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgICByZXR1cm4gZ2xvYmFsVGhpc1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGRlZmQoc2VsZikgfHwgZGVmZCh3aW5kb3cpIHx8IGRlZmQodGhpcykgfHwge31cbiAgfVxufVxuLyogZXNsaW50LWVuYWJsZSAqL1xuIiwiJ3VzZSBzdHJpY3QnXG5mdW5jdGlvbiB0cnlTdHJpbmdpZnkgKG8pIHtcbiAgdHJ5IHsgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG8pIH0gY2F0Y2goZSkgeyByZXR1cm4gJ1wiW0NpcmN1bGFyXVwiJyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0XG5cbmZ1bmN0aW9uIGZvcm1hdChmLCBhcmdzLCBvcHRzKSB7XG4gIHZhciBzcyA9IChvcHRzICYmIG9wdHMuc3RyaW5naWZ5KSB8fCB0cnlTdHJpbmdpZnlcbiAgdmFyIG9mZnNldCA9IDFcbiAgaWYgKHR5cGVvZiBmID09PSAnb2JqZWN0JyAmJiBmICE9PSBudWxsKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoICsgb2Zmc2V0XG4gICAgaWYgKGxlbiA9PT0gMSkgcmV0dXJuIGZcbiAgICB2YXIgb2JqZWN0cyA9IG5ldyBBcnJheShsZW4pXG4gICAgb2JqZWN0c1swXSA9IHNzKGYpXG4gICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xuICAgICAgb2JqZWN0c1tpbmRleF0gPSBzcyhhcmdzW2luZGV4XSlcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpXG4gIH1cbiAgaWYgKHR5cGVvZiBmICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmXG4gIH1cbiAgdmFyIGFyZ0xlbiA9IGFyZ3MubGVuZ3RoXG4gIGlmIChhcmdMZW4gPT09IDApIHJldHVybiBmXG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgYSA9IDEgLSBvZmZzZXRcbiAgdmFyIGxhc3RQb3MgPSAtMVxuICB2YXIgZmxlbiA9IChmICYmIGYubGVuZ3RoKSB8fCAwXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmxlbjspIHtcbiAgICBpZiAoZi5jaGFyQ29kZUF0KGkpID09PSAzNyAmJiBpICsgMSA8IGZsZW4pIHtcbiAgICAgIGxhc3RQb3MgPSBsYXN0UG9zID4gLTEgPyBsYXN0UG9zIDogMFxuICAgICAgc3dpdGNoIChmLmNoYXJDb2RlQXQoaSArIDEpKSB7XG4gICAgICAgIGNhc2UgMTAwOiAvLyAnZCdcbiAgICAgICAgY2FzZSAxMDI6IC8vICdmJ1xuICAgICAgICAgIGlmIChhID49IGFyZ0xlbilcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgaWYgKGFyZ3NbYV0gPT0gbnVsbCkgIGJyZWFrXG4gICAgICAgICAgaWYgKGxhc3RQb3MgPCBpKVxuICAgICAgICAgICAgc3RyICs9IGYuc2xpY2UobGFzdFBvcywgaSlcbiAgICAgICAgICBzdHIgKz0gTnVtYmVyKGFyZ3NbYV0pXG4gICAgICAgICAgbGFzdFBvcyA9IGkgKyAyXG4gICAgICAgICAgaSsrXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAxMDU6IC8vICdpJ1xuICAgICAgICAgIGlmIChhID49IGFyZ0xlbilcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgaWYgKGFyZ3NbYV0gPT0gbnVsbCkgIGJyZWFrXG4gICAgICAgICAgaWYgKGxhc3RQb3MgPCBpKVxuICAgICAgICAgICAgc3RyICs9IGYuc2xpY2UobGFzdFBvcywgaSlcbiAgICAgICAgICBzdHIgKz0gTWF0aC5mbG9vcihOdW1iZXIoYXJnc1thXSkpXG4gICAgICAgICAgbGFzdFBvcyA9IGkgKyAyXG4gICAgICAgICAgaSsrXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA3OTogLy8gJ08nXG4gICAgICAgIGNhc2UgMTExOiAvLyAnbydcbiAgICAgICAgY2FzZSAxMDY6IC8vICdqJ1xuICAgICAgICAgIGlmIChhID49IGFyZ0xlbilcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgaWYgKGFyZ3NbYV0gPT09IHVuZGVmaW5lZCkgYnJlYWtcbiAgICAgICAgICBpZiAobGFzdFBvcyA8IGkpXG4gICAgICAgICAgICBzdHIgKz0gZi5zbGljZShsYXN0UG9zLCBpKVxuICAgICAgICAgIHZhciB0eXBlID0gdHlwZW9mIGFyZ3NbYV1cbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHN0ciArPSAnXFwnJyArIGFyZ3NbYV0gKyAnXFwnJ1xuICAgICAgICAgICAgbGFzdFBvcyA9IGkgKyAyXG4gICAgICAgICAgICBpKytcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdHIgKz0gYXJnc1thXS5uYW1lIHx8ICc8YW5vbnltb3VzPidcbiAgICAgICAgICAgIGxhc3RQb3MgPSBpICsgMlxuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdHIgKz0gc3MoYXJnc1thXSlcbiAgICAgICAgICBsYXN0UG9zID0gaSArIDJcbiAgICAgICAgICBpKytcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDExNTogLy8gJ3MnXG4gICAgICAgICAgaWYgKGEgPj0gYXJnTGVuKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBpZiAobGFzdFBvcyA8IGkpXG4gICAgICAgICAgICBzdHIgKz0gZi5zbGljZShsYXN0UG9zLCBpKVxuICAgICAgICAgIHN0ciArPSBTdHJpbmcoYXJnc1thXSlcbiAgICAgICAgICBsYXN0UG9zID0gaSArIDJcbiAgICAgICAgICBpKytcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM3OiAvLyAnJSdcbiAgICAgICAgICBpZiAobGFzdFBvcyA8IGkpXG4gICAgICAgICAgICBzdHIgKz0gZi5zbGljZShsYXN0UG9zLCBpKVxuICAgICAgICAgIHN0ciArPSAnJSdcbiAgICAgICAgICBsYXN0UG9zID0gaSArIDJcbiAgICAgICAgICBpKytcbiAgICAgICAgICBhLS1cbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgKythXG4gICAgfVxuICAgICsraVxuICB9XG4gIGlmIChsYXN0UG9zID09PSAtMSlcbiAgICByZXR1cm4gZlxuICBlbHNlIGlmIChsYXN0UG9zIDwgZmxlbikge1xuICAgIHN0ciArPSBmLnNsaWNlKGxhc3RQb3MpXG4gIH1cblxuICByZXR1cm4gc3RyXG59XG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBCYXNpY0FkZE5vdGVQYXJhbXMgfSBmcm9tIFwiLi9hbmtpL2FkZE5vdGVcIjtcbmltcG9ydCB7IEFua2lSZXNwb25zZSB9IGZyb20gXCIuL2Fua2kvcmVzcG9uc2VcIjtcblxuZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xuICBhZGROb3RlLFxuICBhZGROb3RlUmVzcG9uc2UsXG4gIGRlY2tOYW1lcyxcbiAgZGVja05hbWVzUmVzcG9uc2UsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkTm90ZU1lc3NhZ2Uge1xuICB0eXBlOiBNZXNzYWdlVHlwZS5hZGROb3RlLFxuICBwYXlsb2FkOiBCYXNpY0FkZE5vdGVQYXJhbXMsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkTm90ZVJlc3BvbnNlTWVzc2FnZSB7XG4gIHR5cGU6IE1lc3NhZ2VUeXBlLmFkZE5vdGVSZXNwb25zZSxcbiAgcGF5bG9hZDogQW5raVJlc3BvbnNlLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlY2tOYW1lc01lc3NhZ2Uge1xuICB0eXBlOiBNZXNzYWdlVHlwZS5kZWNrTmFtZXMsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVja05hbWVzUmVzcG9uc2VNZXNzYWdlIHtcbiAgdHlwZTogTWVzc2FnZVR5cGUuZGVja05hbWVzUmVzcG9uc2UsXG4gIHBheWxvYWQ6IEFua2lSZXNwb25zZTxBcnJheTxzdHJpbmc+Pixcbn1cblxuZXhwb3J0IHR5cGUgTWVzc3NhZ2UgPVxuIHwgQWRkTm90ZU1lc3NhZ2VcbiB8IEFkZE5vdGVSZXNwb25zZU1lc3NhZ2VcbiB8IERlY2tOYW1lc01lc3NhZ2VcbiB8IERlY2tOYW1lc1Jlc3BvbnNlTWVzc2FnZVxuO1xuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6Im1haW4uOTUzMDY1ZjYuanMubWFwIn0=
