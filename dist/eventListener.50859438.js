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
})({"8JIwd":[function(require,module,exports) {
"use strict";
var HMR_HOST = "localhost";
var HMR_PORT = "1234";
/* global chrome, browser, addEventListener, fetch, Response, HMR_HOST, HMR_PORT */ var env = typeof chrome == "undefined" ? browser : chrome;
env.runtime.onMessage.addListener(function(msg) {
    if (msg.__parcel_hmr_reload__) env.runtime.reload();
});
if (env.runtime.getManifest().manifest_version == 3) {
    var proxyLoc = env.runtime.getURL("/__parcel_hmr_proxy__?url=");
    addEventListener("fetch", function(evt) {
        var url = evt.request.url;
        if (url.startsWith(proxyLoc)) {
            url = new URL(decodeURIComponent(url.slice(proxyLoc.length)));
            if (url.hostname == HMR_HOST && url.port == HMR_PORT) evt.respondWith(fetch(url).then(function(res) {
                return new Response(res.body, {
                    headers: {
                        "Content-Type": res.headers.get("Content-Type")
                    }
                });
            }));
        }
    });
}

},{}],"4a9hO":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = "localhost";
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "e792fbbdaa78ee84";
module.bundle.HMR_BUNDLE_ID = "3798f07450859438";
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

},{}],"hVwy7":[function(require,module,exports) {
var _logger = require("../logger");
var _messages = require("../messages");
var _addNoteHandler = require("./addNoteHandler");
var _deckNamesHandler = require("./deckNamesHandler");
chrome.runtime.onMessage.addListener(async (message)=>{
    switch(message.type){
        case (0, _messages.MessageType).addNote:
            (0, _addNoteHandler.addNoteHandler)(message);
            break;
        case (0, _messages.MessageType).deckNames:
            (0, _deckNamesHandler.deckNamesHandler)(message);
            break;
        default:
            (0, _logger.logger).error(message, `Unexpected message type: ${message.type}`);
    }
});

},{"../logger":"jShah","../messages":"9riy2","./addNoteHandler":"lc2KO","./deckNamesHandler":"kSUz5"}],"jShah":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "logger", ()=>logger);
var _pino = require("pino");
var _pinoDefault = parcelHelpers.interopDefault(_pino);
const logger = (0, _pinoDefault.default)({
    name: "Quick Anki extension",
    browser: {
        asObject: true
    }
});

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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"lc2KO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addNoteHandler", ()=>addNoteHandler);
var _addNote = require("../anki/addNote");
var _logger = require("../logger");
var _messages = require("../messages");
async function addNoteHandler(message) {
    const response = await (0, _addNote.addNote)(message.payload);
    const body = await response.json();
    let notificationMessage = "Note added";
    if (body.error !== null) {
        notificationMessage = body.error;
        (0, _logger.logger).error(body.error);
    }
    chrome.notifications.create("", {
        message: notificationMessage,
        iconUrl: "images/logo.png",
        title: "Quick Anki",
        type: "basic"
    });
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, (tabs)=>{
        const [tab] = tabs;
        if (tab === undefined) return;
        const tabId = tab.id;
        if (tabId === undefined) return;
        chrome.tabs.sendMessage(tabId, {
            type: (0, _messages.MessageType).addNoteResponse,
            payload: body
        });
    });
}

},{"../anki/addNote":"l80Wm","../logger":"jShah","../messages":"9riy2","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"l80Wm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultAddNoteParams", ()=>getDefaultAddNoteParams);
parcelHelpers.export(exports, "addNote", ()=>addNote);
/**
 * @see addNote at https://foosoft.net/projects/anki-connect/#note-actions
 */ var _invokeAction = require("./invokeAction");
var _actions = require("./actions");
function getDefaultAddNoteParams({ front , back , deckName  }) {
    return {
        note: {
            deckName,
            modelName: "Basic",
            fields: {
                Front: front,
                Back: back
            },
            options: {
                allowDuplicate: false,
                duplicateScope: "deck",
                duplicateScopeOptions: {
                    deckName: null,
                    checkChildren: false,
                    checkAllModels: false
                }
            },
            tags: []
        }
    };
}
function addNote(params) {
    return (0, _invokeAction.invokeAction)({
        action: (0, _actions.ActionType).AddNote,
        params: getDefaultAddNoteParams(params)
    });
}

},{"./invokeAction":"aQEIl","./actions":"eY9Vu","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"aQEIl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invokeAction", ()=>invokeAction);
async function invokeAction(params) {
    const body = JSON.stringify({
        ...params,
        version: 6
    });
    try {
        const response = await fetch("http://127.0.0.1:8765", {
            method: "POST",
            body
        });
        return response;
    } catch (error) {
        console.error(error);
        return {
            error: error.message
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"eY9Vu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ActionType", ()=>ActionType);
let ActionType;
(function(ActionType1) {
    ActionType1["AddNote"] = "addNote";
    ActionType1["DeckNames"] = "deckNames";
})(ActionType || (ActionType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"kSUz5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deckNamesHandler", ()=>deckNamesHandler);
var _deckNames = require("../anki/deckNames");
var _logger = require("../logger");
var _messages = require("../messages");
async function deckNamesHandler(message) {
    const response = await (0, _deckNames.deckNames)();
    const body = await response.json();
    if (body.error !== null) (0, _logger.logger).error(body.error);
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, (tabs)=>{
        const [tab] = tabs;
        if (tab === undefined) return;
        const tabId = tab.id;
        if (tabId === undefined) return;
        chrome.tabs.sendMessage(tabId, {
            type: (0, _messages.MessageType).deckNamesResponse,
            payload: body
        });
    });
}

},{"../anki/deckNames":"gR9zv","../logger":"jShah","../messages":"9riy2","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"gR9zv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deckNames", ()=>deckNames);
var _invokeAction = require("./invokeAction");
var _actions = require("./actions");
function deckNames() {
    return (0, _invokeAction.invokeAction)({
        action: (0, _actions.ActionType).DeckNames
    });
}

},{"./invokeAction":"aQEIl","./actions":"eY9Vu","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}]},["8JIwd","4a9hO","hVwy7"], "hVwy7", "parcelRequireb5cb")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQ25CLE9BQU87UUFHVCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsRUFBRSxBQUFDO1FBQ3JCLElBQUksS0FBSyxLQUFLLFNBQVMsRUFDckIsT0FBTztRQUdULE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTtZQUM3QixJQUFJLEVBQUUsQ0FBQSxHQUFBLHFCQUFXLENBQUEsQ0FBQyxpQkFBaUI7WUFDbkMsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUE2QixDQUFDO0tBQ2hDLENBQUMsQ0FBQztDQUNKOzs7QUM3Qkg7O0FBR0EsK0NBQWdCLFNBQVMsQ0FJeEI7QUFQRCw2Q0FBOEM7QUFDOUMsbUNBQXVDO0FBRWhDLFNBQVMsU0FBUyxHQUFHO0lBQ3hCLE9BQU8sQ0FBQSxHQUFBLDBCQUFZLENBQUEsQ0FBQztRQUNoQixNQUFNLEVBQUUsQ0FBQSxHQUFBLG1CQUFVLENBQUEsQ0FBQyxTQUFTO0tBQy9CLENBQUMsQ0FBQztDQUNOIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLXdlYmV4dGVuc2lvbi9saWIvcnVudGltZS05ODM1NDNhNzkxMmVjZmE0LmpzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1icm93c2VyLWhtci9saWIvcnVudGltZS0xY2JkODE2OWY3OGRjMWFkLmpzIiwic3JjL2JhY2tncm91bmQvZXZlbnRMaXN0ZW5lci50cyIsInNyYy9sb2dnZXIudHMiLCJub2RlX21vZHVsZXMvcGluby9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3F1aWNrLWZvcm1hdC11bmVzY2FwZWQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInNyYy9tZXNzYWdlcy50cyIsInNyYy9iYWNrZ3JvdW5kL2FkZE5vdGVIYW5kbGVyLnRzIiwic3JjL2Fua2kvYWRkTm90ZS50cyIsInNyYy9hbmtpL2ludm9rZUFjdGlvbi50cyIsInNyYy9hbmtpL2FjdGlvbnMudHMiLCJzcmMvYmFja2dyb3VuZC9kZWNrTmFtZXNIYW5kbGVyLnRzIiwic3JjL2Fua2kvZGVja05hbWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBITVJfSE9TVCA9IFwibG9jYWxob3N0XCI7dmFyIEhNUl9QT1JUID0gJzEyMzQnO1widXNlIHN0cmljdFwiO1xuXG4vKiBnbG9iYWwgY2hyb21lLCBicm93c2VyLCBhZGRFdmVudExpc3RlbmVyLCBmZXRjaCwgUmVzcG9uc2UsIEhNUl9IT1NULCBITVJfUE9SVCAqL1xudmFyIGVudiA9IHR5cGVvZiBjaHJvbWUgPT0gJ3VuZGVmaW5lZCcgPyBicm93c2VyIDogY2hyb21lO1xuZW52LnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChtc2cpIHtcbiAgaWYgKG1zZy5fX3BhcmNlbF9obXJfcmVsb2FkX18pIHtcbiAgICBlbnYucnVudGltZS5yZWxvYWQoKTtcbiAgfVxufSk7XG5cbmlmIChlbnYucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb24gPT0gMykge1xuICB2YXIgcHJveHlMb2MgPSBlbnYucnVudGltZS5nZXRVUkwoJy9fX3BhcmNlbF9obXJfcHJveHlfXz91cmw9Jyk7XG4gIGFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgZnVuY3Rpb24gKGV2dCkge1xuICAgIHZhciB1cmwgPSBldnQucmVxdWVzdC51cmw7XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgocHJveHlMb2MpKSB7XG4gICAgICB1cmwgPSBuZXcgVVJMKGRlY29kZVVSSUNvbXBvbmVudCh1cmwuc2xpY2UocHJveHlMb2MubGVuZ3RoKSkpO1xuXG4gICAgICBpZiAodXJsLmhvc3RuYW1lID09IEhNUl9IT1NUICYmIHVybC5wb3J0ID09IEhNUl9QT1JUKSB7XG4gICAgICAgIGV2dC5yZXNwb25kV2l0aChmZXRjaCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UocmVzLmJvZHksIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IHJlcy5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59IiwidmFyIEhNUl9IT1NUID0gXCJsb2NhbGhvc3RcIjt2YXIgSE1SX1BPUlQgPSBudWxsO3ZhciBITVJfU0VDVVJFID0gZmFsc2U7dmFyIEhNUl9FTlZfSEFTSCA9IFwiZTc5MmZiYmRhYTc4ZWU4NFwiO21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRCA9IFwiMzc5OGYwNzQ1MDg1OTQzOFwiO1widXNlIHN0cmljdFwiO1xuXG4vKiBnbG9iYWwgSE1SX0hPU1QsIEhNUl9QT1JULCBITVJfRU5WX0hBU0gsIEhNUl9TRUNVUkUsIGNocm9tZSwgYnJvd3NlciwgZ2xvYmFsVGhpcywgX19wYXJjZWxfX2ltcG9ydF9fLCBfX3BhcmNlbF9faW1wb3J0U2NyaXB0c19fLCBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUgKi9cblxuLyo6OlxuaW1wb3J0IHR5cGUge1xuICBITVJBc3NldCxcbiAgSE1STWVzc2FnZSxcbn0gZnJvbSAnQHBhcmNlbC9yZXBvcnRlci1kZXYtc2VydmVyL3NyYy9ITVJTZXJ2ZXIuanMnO1xuaW50ZXJmYWNlIFBhcmNlbFJlcXVpcmUge1xuICAoc3RyaW5nKTogbWl4ZWQ7XG4gIGNhY2hlOiB7fFtzdHJpbmddOiBQYXJjZWxNb2R1bGV8fTtcbiAgaG90RGF0YTogbWl4ZWQ7XG4gIE1vZHVsZTogYW55O1xuICBwYXJlbnQ6ID9QYXJjZWxSZXF1aXJlO1xuICBpc1BhcmNlbFJlcXVpcmU6IHRydWU7XG4gIG1vZHVsZXM6IHt8W3N0cmluZ106IFtGdW5jdGlvbiwge3xbc3RyaW5nXTogc3RyaW5nfH1dfH07XG4gIEhNUl9CVU5ETEVfSUQ6IHN0cmluZztcbiAgcm9vdDogUGFyY2VsUmVxdWlyZTtcbn1cbmludGVyZmFjZSBQYXJjZWxNb2R1bGUge1xuICBob3Q6IHt8XG4gICAgZGF0YTogbWl4ZWQsXG4gICAgYWNjZXB0KGNiOiAoRnVuY3Rpb24pID0+IHZvaWQpOiB2b2lkLFxuICAgIGRpc3Bvc2UoY2I6IChtaXhlZCkgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gYWNjZXB0KGRlcHM6IEFycmF5PHN0cmluZz4gfCBzdHJpbmcsIGNiOiAoRnVuY3Rpb24pID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGRlY2xpbmUoKTogdm9pZCxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBBcnJheTwoRnVuY3Rpb24pID0+IHZvaWQ+LFxuICAgIF9kaXNwb3NlQ2FsbGJhY2tzOiBBcnJheTwobWl4ZWQpID0+IHZvaWQ+LFxuICB8fTtcbn1cbmludGVyZmFjZSBFeHRlbnNpb25Db250ZXh0IHtcbiAgcnVudGltZToge3xcbiAgICByZWxvYWQoKTogdm9pZCxcbiAgICBnZXRVUkwodXJsOiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgZ2V0TWFuaWZlc3QoKToge21hbmlmZXN0X3ZlcnNpb246IG51bWJlciwgLi4ufTtcbiAgfH07XG59XG5kZWNsYXJlIHZhciBtb2R1bGU6IHtidW5kbGU6IFBhcmNlbFJlcXVpcmUsIC4uLn07XG5kZWNsYXJlIHZhciBITVJfSE9TVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1BPUlQ6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9FTlZfSEFTSDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1NFQ1VSRTogYm9vbGVhbjtcbmRlY2xhcmUgdmFyIGNocm9tZTogRXh0ZW5zaW9uQ29udGV4dDtcbmRlY2xhcmUgdmFyIGJyb3dzZXI6IEV4dGVuc2lvbkNvbnRleHQ7XG5kZWNsYXJlIHZhciBfX3BhcmNlbF9faW1wb3J0X186IChzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG5kZWNsYXJlIHZhciBfX3BhcmNlbF9faW1wb3J0U2NyaXB0c19fOiAoc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuZGVjbGFyZSB2YXIgZ2xvYmFsVGhpczogdHlwZW9mIHNlbGY7XG5kZWNsYXJlIHZhciBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGU6IE9iamVjdDtcbiovXG52YXIgT1ZFUkxBWV9JRCA9ICdfX3BhcmNlbF9fZXJyb3JfX292ZXJsYXlfXyc7XG52YXIgT2xkTW9kdWxlID0gbW9kdWxlLmJ1bmRsZS5Nb2R1bGU7XG5cbmZ1bmN0aW9uIE1vZHVsZShtb2R1bGVOYW1lKSB7XG4gIE9sZE1vZHVsZS5jYWxsKHRoaXMsIG1vZHVsZU5hbWUpO1xuICB0aGlzLmhvdCA9IHtcbiAgICBkYXRhOiBtb2R1bGUuYnVuZGxlLmhvdERhdGEsXG4gICAgX2FjY2VwdENhbGxiYWNrczogW10sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IFtdLFxuICAgIGFjY2VwdDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICB0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaChmbiB8fCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgfSxcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaChmbik7XG4gICAgfVxuICB9O1xuICBtb2R1bGUuYnVuZGxlLmhvdERhdGEgPSB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5idW5kbGUuTW9kdWxlID0gTW9kdWxlO1xudmFyIGNoZWNrZWRBc3NldHNcbi8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiwgYWNjZXB0ZWRBc3NldHNcbi8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiwgYXNzZXRzVG9BY2NlcHRcbi8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi9cbjtcblxuZnVuY3Rpb24gZ2V0SG9zdG5hbWUoKSB7XG4gIHJldHVybiBITVJfSE9TVCB8fCAobG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZignaHR0cCcpID09PSAwID8gbG9jYXRpb24uaG9zdG5hbWUgOiAnbG9jYWxob3N0Jyk7XG59XG5cbmZ1bmN0aW9uIGdldFBvcnQoKSB7XG4gIHJldHVybiBITVJfUE9SVCB8fCBsb2NhdGlvbi5wb3J0O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cblxudmFyIHBhcmVudCA9IG1vZHVsZS5idW5kbGUucGFyZW50O1xuXG5pZiAoKCFwYXJlbnQgfHwgIXBhcmVudC5pc1BhcmNlbFJlcXVpcmUpICYmIHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gIHZhciBwb3J0ID0gZ2V0UG9ydCgpO1xuICB2YXIgcHJvdG9jb2wgPSBITVJfU0VDVVJFIHx8IGxvY2F0aW9uLnByb3RvY29sID09ICdodHRwczonICYmICEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KGhvc3RuYW1lKSA/ICd3c3MnIDogJ3dzJztcbiAgdmFyIHdzID0gbmV3IFdlYlNvY2tldChwcm90b2NvbCArICc6Ly8nICsgaG9zdG5hbWUgKyAocG9ydCA/ICc6JyArIHBvcnQgOiAnJykgKyAnLycpOyAvLyBXZWIgZXh0ZW5zaW9uIGNvbnRleHRcblxuICB2YXIgZXh0Q3R4ID0gdHlwZW9mIGNocm9tZSA9PT0gJ3VuZGVmaW5lZCcgPyB0eXBlb2YgYnJvd3NlciA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogYnJvd3NlciA6IGNocm9tZTsgLy8gU2FmYXJpIGRvZXNuJ3Qgc3VwcG9ydCBzb3VyY2VVUkwgaW4gZXJyb3Igc3RhY2tzLlxuICAvLyBldmFsIG1heSBhbHNvIGJlIGRpc2FibGVkIHZpYSBDU1AsIHNvIGRvIGEgcXVpY2sgY2hlY2suXG5cbiAgdmFyIHN1cHBvcnRzU291cmNlVVJMID0gZmFsc2U7XG5cbiAgdHJ5IHtcbiAgICAoMCwgZXZhbCkoJ3Rocm93IG5ldyBFcnJvcihcInRlc3RcIik7IC8vIyBzb3VyY2VVUkw9dGVzdC5qcycpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBzdXBwb3J0c1NvdXJjZVVSTCA9IGVyci5zdGFjay5pbmNsdWRlcygndGVzdC5qcycpO1xuICB9IC8vICRGbG93Rml4TWVcblxuXG4gIHdzLm9ubWVzc2FnZSA9IGFzeW5jIGZ1bmN0aW9uIChldmVudFxuICAvKjoge2RhdGE6IHN0cmluZywgLi4ufSAqL1xuICApIHtcbiAgICBjaGVja2VkQXNzZXRzID0ge31cbiAgICAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4gICAgO1xuICAgIGFjY2VwdGVkQXNzZXRzID0ge31cbiAgICAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4gICAgO1xuICAgIGFzc2V0c1RvQWNjZXB0ID0gW107XG4gICAgdmFyIGRhdGFcbiAgICAvKjogSE1STWVzc2FnZSAqL1xuICAgID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcblxuICAgIGlmIChkYXRhLnR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgICAvLyBSZW1vdmUgZXJyb3Igb3ZlcmxheSBpZiB0aGVyZSBpcyBvbmVcbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgfVxuXG4gICAgICBsZXQgYXNzZXRzID0gZGF0YS5hc3NldHMuZmlsdGVyKGFzc2V0ID0+IGFzc2V0LmVudkhhc2ggPT09IEhNUl9FTlZfSEFTSCk7IC8vIEhhbmRsZSBITVIgVXBkYXRlXG5cbiAgICAgIGxldCBoYW5kbGVkID0gYXNzZXRzLmV2ZXJ5KGFzc2V0ID0+IHtcbiAgICAgICAgcmV0dXJuIGFzc2V0LnR5cGUgPT09ICdjc3MnIHx8IGFzc2V0LnR5cGUgPT09ICdqcycgJiYgaG1yQWNjZXB0Q2hlY2sobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldC5pZCwgYXNzZXQuZGVwc0J5QnVuZGxlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICBjb25zb2xlLmNsZWFyKCk7IC8vIERpc3BhdGNoIGN1c3RvbSBldmVudCBzbyBvdGhlciBydW50aW1lcyAoZS5nIFJlYWN0IFJlZnJlc2gpIGFyZSBhd2FyZS5cblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEN1c3RvbUV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncGFyY2VsaG1yYWNjZXB0JykpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgaG1yQXBwbHlVcGRhdGVzKGFzc2V0cyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhc3NldHNUb0FjY2VwdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBpZCA9IGFzc2V0c1RvQWNjZXB0W2ldWzFdO1xuXG4gICAgICAgICAgaWYgKCFhY2NlcHRlZEFzc2V0c1tpZF0pIHtcbiAgICAgICAgICAgIGhtckFjY2VwdFJ1bihhc3NldHNUb0FjY2VwdFtpXVswXSwgaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGZ1bGxSZWxvYWQoKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAvLyBMb2cgcGFyY2VsIGVycm9ycyB0byBjb25zb2xlXG4gICAgICBmb3IgKGxldCBhbnNpRGlhZ25vc3RpYyBvZiBkYXRhLmRpYWdub3N0aWNzLmFuc2kpIHtcbiAgICAgICAgbGV0IHN0YWNrID0gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lID8gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lIDogYW5zaURpYWdub3N0aWMuc3RhY2s7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ/CfmqggW3BhcmNlbF06ICcgKyBhbnNpRGlhZ25vc3RpYy5tZXNzYWdlICsgJ1xcbicgKyBzdGFjayArICdcXG5cXG4nICsgYW5zaURpYWdub3N0aWMuaGludHMuam9pbignXFxuJykpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBSZW5kZXIgdGhlIGZhbmN5IGh0bWwgb3ZlcmxheVxuICAgICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgICAgdmFyIG92ZXJsYXkgPSBjcmVhdGVFcnJvck92ZXJsYXkoZGF0YS5kaWFnbm9zdGljcy5odG1sKTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgfTtcblxuICB3cy5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUud2FybignW3BhcmNlbF0g8J+aqCBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIHdhcyBsb3N0Jyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVycm9yT3ZlcmxheSgpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPVkVSTEFZX0lEKTtcblxuICBpZiAob3ZlcmxheSkge1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgY29uc29sZS5sb2coJ1twYXJjZWxdIOKcqCBFcnJvciByZXNvbHZlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yT3ZlcmxheShkaWFnbm9zdGljcykge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5LmlkID0gT1ZFUkxBWV9JRDtcbiAgbGV0IGVycm9ySFRNTCA9ICc8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogYmxhY2s7IG9wYWNpdHk6IDAuODU7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHdoaXRlOyBwb3NpdGlvbjogZml4ZWQ7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IHRvcDogMHB4OyBsZWZ0OiAwcHg7IHBhZGRpbmc6IDMwcHg7IGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTsgei1pbmRleDogOTk5OTtcIj4nO1xuXG4gIGZvciAobGV0IGRpYWdub3N0aWMgb2YgZGlhZ25vc3RpY3MpIHtcbiAgICBsZXQgc3RhY2sgPSBkaWFnbm9zdGljLmZyYW1lcy5sZW5ndGggPyBkaWFnbm9zdGljLmZyYW1lcy5yZWR1Y2UoKHAsIGZyYW1lKSA9PiB7XG4gICAgICByZXR1cm4gYCR7cH1cbjxhIGhyZWY9XCIvX19wYXJjZWxfbGF1bmNoX2VkaXRvcj9maWxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGZyYW1lLmxvY2F0aW9uKX1cIiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBjb2xvcjogIzg4OFwiIG9uY2xpY2s9XCJmZXRjaCh0aGlzLmhyZWYpOyByZXR1cm4gZmFsc2VcIj4ke2ZyYW1lLmxvY2F0aW9ufTwvYT5cbiR7ZnJhbWUuY29kZX1gO1xuICAgIH0sICcnKSA6IGRpYWdub3N0aWMuc3RhY2s7XG4gICAgZXJyb3JIVE1MICs9IGBcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tdG9wOiAyMHB4O1wiPlxuICAgICAgICAgIPCfmqggJHtkaWFnbm9zdGljLm1lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cHJlPiR7c3RhY2t9PC9wcmU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgJHtkaWFnbm9zdGljLmhpbnRzLm1hcChoaW50ID0+ICc8ZGl2PvCfkqEgJyArIGhpbnQgKyAnPC9kaXY+Jykuam9pbignJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke2RpYWdub3N0aWMuZG9jdW1lbnRhdGlvbiA/IGA8ZGl2PvCfk50gPGEgc3R5bGU9XCJjb2xvcjogdmlvbGV0XCIgaHJlZj1cIiR7ZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9ufVwiIHRhcmdldD1cIl9ibGFua1wiPkxlYXJuIG1vcmU8L2E+PC9kaXY+YCA6ICcnfVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGVycm9ySFRNTCArPSAnPC9kaXY+JztcbiAgb3ZlcmxheS5pbm5lckhUTUwgPSBlcnJvckhUTUw7XG4gIHJldHVybiBvdmVybGF5O1xufVxuXG5mdW5jdGlvbiBmdWxsUmVsb2FkKCkge1xuICBpZiAoJ3JlbG9hZCcgaW4gbG9jYXRpb24pIHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSBlbHNlIGlmIChleHRDdHggJiYgZXh0Q3R4LnJ1bnRpbWUgJiYgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKSB7XG4gICAgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50cyhidW5kbGUsIGlkKVxuLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqL1xue1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBwYXJlbnRzID0gW107XG4gIHZhciBrLCBkLCBkZXA7XG5cbiAgZm9yIChrIGluIG1vZHVsZXMpIHtcbiAgICBmb3IgKGQgaW4gbW9kdWxlc1trXVsxXSkge1xuICAgICAgZGVwID0gbW9kdWxlc1trXVsxXVtkXTtcblxuICAgICAgaWYgKGRlcCA9PT0gaWQgfHwgQXJyYXkuaXNBcnJheShkZXApICYmIGRlcFtkZXAubGVuZ3RoIC0gMV0gPT09IGlkKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChbYnVuZGxlLCBrXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBwYXJlbnRzID0gcGFyZW50cy5jb25jYXQoZ2V0UGFyZW50cyhidW5kbGUucGFyZW50LCBpZCkpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGluaykge1xuICB2YXIgbmV3TGluayA9IGxpbmsuY2xvbmVOb2RlKCk7XG5cbiAgbmV3TGluay5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxpbmsucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgIH1cbiAgfTtcblxuICBuZXdMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIC8vICRGbG93Rml4TWVcbiAgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zcGxpdCgnPycpWzBdICsgJz8nICsgRGF0ZS5ub3coKSk7IC8vICRGbG93Rml4TWVcblxuICBsaW5rLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0xpbmssIGxpbmsubmV4dFNpYmxpbmcpO1xufVxuXG52YXIgY3NzVGltZW91dCA9IG51bGw7XG5cbmZ1bmN0aW9uIHJlbG9hZENTUygpIHtcbiAgaWYgKGNzc1RpbWVvdXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjc3NUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXVxuICAgICAgdmFyIGhyZWZcbiAgICAgIC8qOiBzdHJpbmcgKi9cbiAgICAgID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICAgICAgdmFyIHNlcnZlZEZyb21ITVJTZXJ2ZXIgPSBob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgPyBuZXcgUmVnRXhwKCdeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOicgKyBnZXRQb3J0KCkpLnRlc3QoaHJlZikgOiBocmVmLmluZGV4T2YoaG9zdG5hbWUgKyAnOicgKyBnZXRQb3J0KCkpO1xuICAgICAgdmFyIGFic29sdXRlID0gL15odHRwcz86XFwvXFwvL2kudGVzdChocmVmKSAmJiBocmVmLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSAhPT0gMCAmJiAhc2VydmVkRnJvbUhNUlNlcnZlcjtcblxuICAgICAgaWYgKCFhYnNvbHV0ZSkge1xuICAgICAgICB1cGRhdGVMaW5rKGxpbmtzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjc3NUaW1lb3V0ID0gbnVsbDtcbiAgfSwgNTApO1xufVxuXG5mdW5jdGlvbiBobXJEb3dubG9hZChhc3NldCkge1xuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2pzJykge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQuc3JjID0gYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpO1xuXG4gICAgICBpZiAoYXNzZXQub3V0cHV0Rm9ybWF0ID09PSAnZXNtb2R1bGUnKSB7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ21vZHVsZSc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHZhciBfZG9jdW1lbnQkaGVhZDtcblxuICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4gcmVzb2x2ZShzY3JpcHQpO1xuXG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAoX2RvY3VtZW50JGhlYWQgPSBkb2N1bWVudC5oZWFkKSA9PT0gbnVsbCB8fCBfZG9jdW1lbnQkaGVhZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RvY3VtZW50JGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFdvcmtlciBzY3JpcHRzXG4gICAgICBpZiAoYXNzZXQub3V0cHV0Rm9ybWF0ID09PSAnZXNtb2R1bGUnKSB7XG4gICAgICAgIHJldHVybiBfX3BhcmNlbF9faW1wb3J0X18oYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX18oYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpKTtcblxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaG1yQXBwbHlVcGRhdGVzKGFzc2V0cykge1xuICBnbG9iYWwucGFyY2VsSG90VXBkYXRlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgbGV0IHNjcmlwdHNUb1JlbW92ZTtcblxuICB0cnkge1xuICAgIC8vIElmIHNvdXJjZVVSTCBjb21tZW50cyBhcmVuJ3Qgc3VwcG9ydGVkIGluIGV2YWwsIHdlIG5lZWQgdG8gbG9hZFxuICAgIC8vIHRoZSB1cGRhdGUgZnJvbSB0aGUgZGV2IHNlcnZlciBvdmVyIEhUVFAgc28gdGhhdCBzdGFjayB0cmFjZXNcbiAgICAvLyBhcmUgY29ycmVjdCBpbiBlcnJvcnMvbG9ncy4gVGhpcyBpcyBtdWNoIHNsb3dlciB0aGFuIGV2YWwsIHNvXG4gICAgLy8gd2Ugb25seSBkbyBpdCBpZiBuZWVkZWQgKGN1cnJlbnRseSBqdXN0IFNhZmFyaSkuXG4gICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNzI5N1xuICAgIC8vIFRoaXMgcGF0aCBpcyBhbHNvIHRha2VuIGlmIGEgQ1NQIGRpc2FsbG93cyBldmFsLlxuICAgIGlmICghc3VwcG9ydHNTb3VyY2VVUkwpIHtcbiAgICAgIGxldCBwcm9taXNlcyA9IGFzc2V0cy5tYXAoYXNzZXQgPT4ge1xuICAgICAgICB2YXIgX2htckRvd25sb2FkO1xuXG4gICAgICAgIHJldHVybiAoX2htckRvd25sb2FkID0gaG1yRG93bmxvYWQoYXNzZXQpKSA9PT0gbnVsbCB8fCBfaG1yRG93bmxvYWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9obXJEb3dubG9hZC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIC8vIFdlYiBleHRlbnNpb24gYnVnZml4IGZvciBDaHJvbWl1bVxuICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEyNTU0MTIjYzEyXG4gICAgICAgICAgaWYgKGV4dEN0eCAmJiBleHRDdHgucnVudGltZSAmJiBleHRDdHgucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb24gPT0gMykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUgIT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsIGluc3RhbmNlb2YgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlKSB7XG4gICAgICAgICAgICAgIGV4dEN0eC5ydW50aW1lLnJlbG9hZCgpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFzc2V0LnVybCA9IGV4dEN0eC5ydW50aW1lLmdldFVSTCgnL19fcGFyY2VsX2htcl9wcm94eV9fP3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFzc2V0LnVybCArICc/dD0nICsgRGF0ZS5ub3coKSkpO1xuICAgICAgICAgICAgcmV0dXJuIGhtckRvd25sb2FkKGFzc2V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBzY3JpcHRzVG9SZW1vdmUgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfVxuXG4gICAgYXNzZXRzLmZvckVhY2goZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICBobXJBcHBseShtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0KTtcbiAgICB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZTtcblxuICAgIGlmIChzY3JpcHRzVG9SZW1vdmUpIHtcbiAgICAgIHNjcmlwdHNUb1JlbW92ZS5mb3JFYWNoKHNjcmlwdCA9PiB7XG4gICAgICAgIGlmIChzY3JpcHQpIHtcbiAgICAgICAgICB2YXIgX2RvY3VtZW50JGhlYWQyO1xuXG4gICAgICAgICAgKF9kb2N1bWVudCRoZWFkMiA9IGRvY3VtZW50LmhlYWQpID09PSBudWxsIHx8IF9kb2N1bWVudCRoZWFkMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RvY3VtZW50JGhlYWQyLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBobXJBcHBseShidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGFzc2V0XG4vKjogIEhNUkFzc2V0ICovXG4pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2NzcycpIHtcbiAgICByZWxvYWRDU1MoKTtcbiAgfSBlbHNlIGlmIChhc3NldC50eXBlID09PSAnanMnKSB7XG4gICAgbGV0IGRlcHMgPSBhc3NldC5kZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdO1xuXG4gICAgaWYgKGRlcHMpIHtcbiAgICAgIGlmIChtb2R1bGVzW2Fzc2V0LmlkXSkge1xuICAgICAgICAvLyBSZW1vdmUgZGVwZW5kZW5jaWVzIHRoYXQgYXJlIHJlbW92ZWQgYW5kIHdpbGwgYmVjb21lIG9ycGhhbmVkLlxuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBzbyB0aGF0IGlmIHRoZSBhc3NldCBpcyBhZGRlZCBiYWNrIGFnYWluLCB0aGUgY2FjaGUgaXMgZ29uZSwgYW5kIHdlIHByZXZlbnQgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICAgICAgICBsZXQgb2xkRGVwcyA9IG1vZHVsZXNbYXNzZXQuaWRdWzFdO1xuXG4gICAgICAgIGZvciAobGV0IGRlcCBpbiBvbGREZXBzKSB7XG4gICAgICAgICAgaWYgKCFkZXBzW2RlcF0gfHwgZGVwc1tkZXBdICE9PSBvbGREZXBzW2RlcF0pIHtcbiAgICAgICAgICAgIGxldCBpZCA9IG9sZERlcHNbZGVwXTtcbiAgICAgICAgICAgIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHBhcmVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGhtckRlbGV0ZShtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzU291cmNlVVJMKSB7XG4gICAgICAgIC8vIEdsb2JhbCBldmFsLiBXZSB3b3VsZCB1c2UgYG5ldyBGdW5jdGlvbmAgaGVyZSBidXQgYnJvd3NlclxuICAgICAgICAvLyBzdXBwb3J0IGZvciBzb3VyY2UgbWFwcyBpcyBiZXR0ZXIgd2l0aCBldmFsLlxuICAgICAgICAoMCwgZXZhbCkoYXNzZXQub3V0cHV0KTtcbiAgICAgIH0gLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIGxldCBmbiA9IGdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbYXNzZXQuaWRdO1xuICAgICAgbW9kdWxlc1thc3NldC5pZF0gPSBbZm4sIGRlcHNdO1xuICAgIH0gZWxzZSBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgICAgaG1yQXBwbHkoYnVuZGxlLnBhcmVudCwgYXNzZXQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBobXJEZWxldGUoYnVuZGxlLCBpZCkge1xuICBsZXQgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChtb2R1bGVzW2lkXSkge1xuICAgIC8vIENvbGxlY3QgZGVwZW5kZW5jaWVzIHRoYXQgd2lsbCBiZWNvbWUgb3JwaGFuZWQgd2hlbiB0aGlzIG1vZHVsZSBpcyBkZWxldGVkLlxuICAgIGxldCBkZXBzID0gbW9kdWxlc1tpZF1bMV07XG4gICAgbGV0IG9ycGhhbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGRlcCBpbiBkZXBzKSB7XG4gICAgICBsZXQgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBkZXBzW2RlcF0pO1xuXG4gICAgICBpZiAocGFyZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgb3JwaGFucy5wdXNoKGRlcHNbZGVwXSk7XG4gICAgICB9XG4gICAgfSAvLyBEZWxldGUgdGhlIG1vZHVsZS4gVGhpcyBtdXN0IGJlIGRvbmUgYmVmb3JlIGRlbGV0aW5nIGRlcGVuZGVuY2llcyBpbiBjYXNlIG9mIGNpcmN1bGFyIGRlcGVuZGVuY2llcy5cblxuXG4gICAgZGVsZXRlIG1vZHVsZXNbaWRdO1xuICAgIGRlbGV0ZSBidW5kbGUuY2FjaGVbaWRdOyAvLyBOb3cgZGVsZXRlIHRoZSBvcnBoYW5zLlxuXG4gICAgb3JwaGFucy5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGhtckRlbGV0ZShtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgaG1yRGVsZXRlKGJ1bmRsZS5wYXJlbnQsIGlkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRDaGVjayhidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4sIGRlcHNCeUJ1bmRsZVxuLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki9cbikge1xuICBpZiAoaG1yQWNjZXB0Q2hlY2tPbmUoYnVuZGxlLCBpZCwgZGVwc0J5QnVuZGxlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIFRyYXZlcnNlIHBhcmVudHMgYnJlYWR0aCBmaXJzdC4gQWxsIHBvc3NpYmxlIGFuY2VzdHJpZXMgbXVzdCBhY2NlcHQgdGhlIEhNUiB1cGRhdGUsIG9yIHdlJ2xsIHJlbG9hZC5cblxuXG4gIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgbGV0IGFjY2VwdGVkID0gZmFsc2U7XG5cbiAgd2hpbGUgKHBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgIGxldCB2ID0gcGFyZW50cy5zaGlmdCgpO1xuICAgIGxldCBhID0gaG1yQWNjZXB0Q2hlY2tPbmUodlswXSwgdlsxXSwgbnVsbCk7XG5cbiAgICBpZiAoYSkge1xuICAgICAgLy8gSWYgdGhpcyBwYXJlbnQgYWNjZXB0cywgc3RvcCB0cmF2ZXJzaW5nIHVwd2FyZCwgYnV0IHN0aWxsIGNvbnNpZGVyIHNpYmxpbmdzLlxuICAgICAgYWNjZXB0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdGhlcndpc2UsIHF1ZXVlIHRoZSBwYXJlbnRzIGluIHRoZSBuZXh0IGxldmVsIHVwd2FyZC5cbiAgICAgIGxldCBwID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIHZbMV0pO1xuXG4gICAgICBpZiAocC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIHBhcmVudHMsIHRoZW4gd2UndmUgcmVhY2hlZCBhbiBlbnRyeSB3aXRob3V0IGFjY2VwdGluZy4gUmVsb2FkLlxuICAgICAgICBhY2NlcHRlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcGFyZW50cy5wdXNoKC4uLnApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhY2NlcHRlZDtcbn1cblxuZnVuY3Rpb24gaG1yQWNjZXB0Q2hlY2tPbmUoYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBpZFxuLyo6IHN0cmluZyAqL1xuLCBkZXBzQnlCdW5kbGVcbi8qOiA/eyBbc3RyaW5nXTogeyBbc3RyaW5nXTogc3RyaW5nIH0gfSovXG4pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZGVwc0J5QnVuZGxlICYmICFkZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdKSB7XG4gICAgLy8gSWYgd2UgcmVhY2hlZCB0aGUgcm9vdCBidW5kbGUgd2l0aG91dCBmaW5kaW5nIHdoZXJlIHRoZSBhc3NldCBzaG91bGQgZ28sXG4gICAgLy8gdGhlcmUncyBub3RoaW5nIHRvIGRvLiBNYXJrIGFzIFwiYWNjZXB0ZWRcIiBzbyB3ZSBkb24ndCByZWxvYWQgdGhlIHBhZ2UuXG4gICAgaWYgKCFidW5kbGUucGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaG1yQWNjZXB0Q2hlY2soYnVuZGxlLnBhcmVudCwgaWQsIGRlcHNCeUJ1bmRsZSk7XG4gIH1cblxuICBpZiAoY2hlY2tlZEFzc2V0c1tpZF0pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNoZWNrZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGFzc2V0c1RvQWNjZXB0LnB1c2goW2J1bmRsZSwgaWRdKTtcblxuICBpZiAoIWNhY2hlZCB8fCBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRSdW4oYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBpZFxuLyo6IHN0cmluZyAqL1xuKSB7XG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBidW5kbGUuaG90RGF0YSA9IHt9O1xuXG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCkge1xuICAgIGNhY2hlZC5ob3QuZGF0YSA9IGJ1bmRsZS5ob3REYXRhO1xuICB9XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgY2IoYnVuZGxlLmhvdERhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZShpZCk7XG4gIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIHZhciBhc3NldHNUb0Fsc29BY2NlcHQgPSBjYihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChhc3NldHNUb0Fsc29BY2NlcHQgJiYgYXNzZXRzVG9BY2NlcHQubGVuZ3RoKSB7XG4gICAgICAgIC8vICRGbG93Rml4TWVbbWV0aG9kLXVuYmluZGluZ11cbiAgICAgICAgYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShhc3NldHNUb0FjY2VwdCwgYXNzZXRzVG9BbHNvQWNjZXB0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFjY2VwdGVkQXNzZXRzW2lkXSA9IHRydWU7XG59IiwiXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XG5pbXBvcnQgeyBNZXNzYWdlVHlwZSwgTWVzc3NhZ2UgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcbmltcG9ydCB7IGFkZE5vdGVIYW5kbGVyIH0gZnJvbSBcIi4vYWRkTm90ZUhhbmRsZXJcIjtcbmltcG9ydCB7IGRlY2tOYW1lc0hhbmRsZXIgfSBmcm9tIFwiLi9kZWNrTmFtZXNIYW5kbGVyXCI7XG5cblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGFzeW5jIChtZXNzYWdlOiBNZXNzc2FnZSkgPT4ge1xuICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgIGNhc2UgTWVzc2FnZVR5cGUuYWRkTm90ZToge1xuICAgICAgYWRkTm90ZUhhbmRsZXIobWVzc2FnZSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBNZXNzYWdlVHlwZS5kZWNrTmFtZXM6IHtcbiAgICAgIGRlY2tOYW1lc0hhbmRsZXIobWVzc2FnZSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIGxvZ2dlci5lcnJvcihtZXNzYWdlLCBgVW5leHBlY3RlZCBtZXNzYWdlIHR5cGU6ICR7bWVzc2FnZS50eXBlfWApO1xuICB9XG59KTtcbiIsImltcG9ydCBwaW5vIGZyb20gXCJwaW5vXCI7XG5cbmV4cG9ydCBjb25zdCBsb2dnZXIgPSBwaW5vKHtcbiAgICBuYW1lOiAnUXVpY2sgQW5raSBleHRlbnNpb24nLFxuICAgIGJyb3dzZXI6IHtcbiAgICAgICAgYXNPYmplY3Q6IHRydWUsXG4gICAgfSxcbiAgICAvLyBsZXZlbDogJ3NpbGVudCdcbn0pOyIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBmb3JtYXQgPSByZXF1aXJlKCdxdWljay1mb3JtYXQtdW5lc2NhcGVkJylcblxubW9kdWxlLmV4cG9ydHMgPSBwaW5vXG5cbmNvbnN0IF9jb25zb2xlID0gcGZHbG9iYWxUaGlzT3JGYWxsYmFjaygpLmNvbnNvbGUgfHwge31cbmNvbnN0IHN0ZFNlcmlhbGl6ZXJzID0ge1xuICBtYXBIdHRwUmVxdWVzdDogbW9jayxcbiAgbWFwSHR0cFJlc3BvbnNlOiBtb2NrLFxuICB3cmFwUmVxdWVzdFNlcmlhbGl6ZXI6IHBhc3N0aHJvdWdoLFxuICB3cmFwUmVzcG9uc2VTZXJpYWxpemVyOiBwYXNzdGhyb3VnaCxcbiAgd3JhcEVycm9yU2VyaWFsaXplcjogcGFzc3Rocm91Z2gsXG4gIHJlcTogbW9jayxcbiAgcmVzOiBtb2NrLFxuICBlcnI6IGFzRXJyVmFsdWVcbn1cblxuZnVuY3Rpb24gc2hvdWxkU2VyaWFsaXplIChzZXJpYWxpemUsIHNlcmlhbGl6ZXJzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHNlcmlhbGl6ZSkpIHtcbiAgICBjb25zdCBoYXNUb0ZpbHRlciA9IHNlcmlhbGl6ZS5maWx0ZXIoZnVuY3Rpb24gKGspIHtcbiAgICAgIHJldHVybiBrICE9PSAnIXN0ZFNlcmlhbGl6ZXJzLmVycidcbiAgICB9KVxuICAgIHJldHVybiBoYXNUb0ZpbHRlclxuICB9IGVsc2UgaWYgKHNlcmlhbGl6ZSA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzZXJpYWxpemVycylcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwaW5vIChvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9XG4gIG9wdHMuYnJvd3NlciA9IG9wdHMuYnJvd3NlciB8fCB7fVxuXG4gIGNvbnN0IHRyYW5zbWl0ID0gb3B0cy5icm93c2VyLnRyYW5zbWl0XG4gIGlmICh0cmFuc21pdCAmJiB0eXBlb2YgdHJhbnNtaXQuc2VuZCAhPT0gJ2Z1bmN0aW9uJykgeyB0aHJvdyBFcnJvcigncGlubzogdHJhbnNtaXQgb3B0aW9uIG11c3QgaGF2ZSBhIHNlbmQgZnVuY3Rpb24nKSB9XG5cbiAgY29uc3QgcHJvdG8gPSBvcHRzLmJyb3dzZXIud3JpdGUgfHwgX2NvbnNvbGVcbiAgaWYgKG9wdHMuYnJvd3Nlci53cml0ZSkgb3B0cy5icm93c2VyLmFzT2JqZWN0ID0gdHJ1ZVxuICBjb25zdCBzZXJpYWxpemVycyA9IG9wdHMuc2VyaWFsaXplcnMgfHwge31cbiAgY29uc3Qgc2VyaWFsaXplID0gc2hvdWxkU2VyaWFsaXplKG9wdHMuYnJvd3Nlci5zZXJpYWxpemUsIHNlcmlhbGl6ZXJzKVxuICBsZXQgc3RkRXJyU2VyaWFsaXplID0gb3B0cy5icm93c2VyLnNlcmlhbGl6ZVxuXG4gIGlmIChcbiAgICBBcnJheS5pc0FycmF5KG9wdHMuYnJvd3Nlci5zZXJpYWxpemUpICYmXG4gICAgb3B0cy5icm93c2VyLnNlcmlhbGl6ZS5pbmRleE9mKCchc3RkU2VyaWFsaXplcnMuZXJyJykgPiAtMVxuICApIHN0ZEVyclNlcmlhbGl6ZSA9IGZhbHNlXG5cbiAgY29uc3QgbGV2ZWxzID0gWydlcnJvcicsICdmYXRhbCcsICd3YXJuJywgJ2luZm8nLCAnZGVidWcnLCAndHJhY2UnXVxuXG4gIGlmICh0eXBlb2YgcHJvdG8gPT09ICdmdW5jdGlvbicpIHtcbiAgICBwcm90by5lcnJvciA9IHByb3RvLmZhdGFsID0gcHJvdG8ud2FybiA9XG4gICAgcHJvdG8uaW5mbyA9IHByb3RvLmRlYnVnID0gcHJvdG8udHJhY2UgPSBwcm90b1xuICB9XG4gIGlmIChvcHRzLmVuYWJsZWQgPT09IGZhbHNlKSBvcHRzLmxldmVsID0gJ3NpbGVudCdcbiAgY29uc3QgbGV2ZWwgPSBvcHRzLmxldmVsIHx8ICdpbmZvJ1xuICBjb25zdCBsb2dnZXIgPSBPYmplY3QuY3JlYXRlKHByb3RvKVxuICBpZiAoIWxvZ2dlci5sb2cpIGxvZ2dlci5sb2cgPSBub29wXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxvZ2dlciwgJ2xldmVsVmFsJywge1xuICAgIGdldDogZ2V0TGV2ZWxWYWxcbiAgfSlcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxvZ2dlciwgJ2xldmVsJywge1xuICAgIGdldDogZ2V0TGV2ZWwsXG4gICAgc2V0OiBzZXRMZXZlbFxuICB9KVxuXG4gIGNvbnN0IHNldE9wdHMgPSB7XG4gICAgdHJhbnNtaXQsXG4gICAgc2VyaWFsaXplLFxuICAgIGFzT2JqZWN0OiBvcHRzLmJyb3dzZXIuYXNPYmplY3QsXG4gICAgbGV2ZWxzLFxuICAgIHRpbWVzdGFtcDogZ2V0VGltZUZ1bmN0aW9uKG9wdHMpXG4gIH1cbiAgbG9nZ2VyLmxldmVscyA9IHBpbm8ubGV2ZWxzXG4gIGxvZ2dlci5sZXZlbCA9IGxldmVsXG5cbiAgbG9nZ2VyLnNldE1heExpc3RlbmVycyA9IGxvZ2dlci5nZXRNYXhMaXN0ZW5lcnMgPVxuICBsb2dnZXIuZW1pdCA9IGxvZ2dlci5hZGRMaXN0ZW5lciA9IGxvZ2dlci5vbiA9XG4gIGxvZ2dlci5wcmVwZW5kTGlzdGVuZXIgPSBsb2dnZXIub25jZSA9XG4gIGxvZ2dlci5wcmVwZW5kT25jZUxpc3RlbmVyID0gbG9nZ2VyLnJlbW92ZUxpc3RlbmVyID1cbiAgbG9nZ2VyLnJlbW92ZUFsbExpc3RlbmVycyA9IGxvZ2dlci5saXN0ZW5lcnMgPVxuICBsb2dnZXIubGlzdGVuZXJDb3VudCA9IGxvZ2dlci5ldmVudE5hbWVzID1cbiAgbG9nZ2VyLndyaXRlID0gbG9nZ2VyLmZsdXNoID0gbm9vcFxuICBsb2dnZXIuc2VyaWFsaXplcnMgPSBzZXJpYWxpemVyc1xuICBsb2dnZXIuX3NlcmlhbGl6ZSA9IHNlcmlhbGl6ZVxuICBsb2dnZXIuX3N0ZEVyclNlcmlhbGl6ZSA9IHN0ZEVyclNlcmlhbGl6ZVxuICBsb2dnZXIuY2hpbGQgPSBjaGlsZFxuXG4gIGlmICh0cmFuc21pdCkgbG9nZ2VyLl9sb2dFdmVudCA9IGNyZWF0ZUxvZ0V2ZW50U2hhcGUoKVxuXG4gIGZ1bmN0aW9uIGdldExldmVsVmFsICgpIHtcbiAgICByZXR1cm4gdGhpcy5sZXZlbCA9PT0gJ3NpbGVudCdcbiAgICAgID8gSW5maW5pdHlcbiAgICAgIDogdGhpcy5sZXZlbHMudmFsdWVzW3RoaXMubGV2ZWxdXG4gIH1cblxuICBmdW5jdGlvbiBnZXRMZXZlbCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsXG4gIH1cbiAgZnVuY3Rpb24gc2V0TGV2ZWwgKGxldmVsKSB7XG4gICAgaWYgKGxldmVsICE9PSAnc2lsZW50JyAmJiAhdGhpcy5sZXZlbHMudmFsdWVzW2xldmVsXSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ3Vua25vd24gbGV2ZWwgJyArIGxldmVsKVxuICAgIH1cbiAgICB0aGlzLl9sZXZlbCA9IGxldmVsXG5cbiAgICBzZXQoc2V0T3B0cywgbG9nZ2VyLCAnZXJyb3InLCAnbG9nJykgLy8gPC0tIG11c3Qgc3RheSBmaXJzdFxuICAgIHNldChzZXRPcHRzLCBsb2dnZXIsICdmYXRhbCcsICdlcnJvcicpXG4gICAgc2V0KHNldE9wdHMsIGxvZ2dlciwgJ3dhcm4nLCAnZXJyb3InKVxuICAgIHNldChzZXRPcHRzLCBsb2dnZXIsICdpbmZvJywgJ2xvZycpXG4gICAgc2V0KHNldE9wdHMsIGxvZ2dlciwgJ2RlYnVnJywgJ2xvZycpXG4gICAgc2V0KHNldE9wdHMsIGxvZ2dlciwgJ3RyYWNlJywgJ2xvZycpXG4gIH1cblxuICBmdW5jdGlvbiBjaGlsZCAoYmluZGluZ3MsIGNoaWxkT3B0aW9ucykge1xuICAgIGlmICghYmluZGluZ3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBiaW5kaW5ncyBmb3IgY2hpbGQgUGlubycpXG4gICAgfVxuICAgIGNoaWxkT3B0aW9ucyA9IGNoaWxkT3B0aW9ucyB8fCB7fVxuICAgIGlmIChzZXJpYWxpemUgJiYgYmluZGluZ3Muc2VyaWFsaXplcnMpIHtcbiAgICAgIGNoaWxkT3B0aW9ucy5zZXJpYWxpemVycyA9IGJpbmRpbmdzLnNlcmlhbGl6ZXJzXG4gICAgfVxuICAgIGNvbnN0IGNoaWxkT3B0aW9uc1NlcmlhbGl6ZXJzID0gY2hpbGRPcHRpb25zLnNlcmlhbGl6ZXJzXG4gICAgaWYgKHNlcmlhbGl6ZSAmJiBjaGlsZE9wdGlvbnNTZXJpYWxpemVycykge1xuICAgICAgdmFyIGNoaWxkU2VyaWFsaXplcnMgPSBPYmplY3QuYXNzaWduKHt9LCBzZXJpYWxpemVycywgY2hpbGRPcHRpb25zU2VyaWFsaXplcnMpXG4gICAgICB2YXIgY2hpbGRTZXJpYWxpemUgPSBvcHRzLmJyb3dzZXIuc2VyaWFsaXplID09PSB0cnVlXG4gICAgICAgID8gT2JqZWN0LmtleXMoY2hpbGRTZXJpYWxpemVycylcbiAgICAgICAgOiBzZXJpYWxpemVcbiAgICAgIGRlbGV0ZSBiaW5kaW5ncy5zZXJpYWxpemVyc1xuICAgICAgYXBwbHlTZXJpYWxpemVycyhbYmluZGluZ3NdLCBjaGlsZFNlcmlhbGl6ZSwgY2hpbGRTZXJpYWxpemVycywgdGhpcy5fc3RkRXJyU2VyaWFsaXplKVxuICAgIH1cbiAgICBmdW5jdGlvbiBDaGlsZCAocGFyZW50KSB7XG4gICAgICB0aGlzLl9jaGlsZExldmVsID0gKHBhcmVudC5fY2hpbGRMZXZlbCB8IDApICsgMVxuICAgICAgdGhpcy5lcnJvciA9IGJpbmQocGFyZW50LCBiaW5kaW5ncywgJ2Vycm9yJylcbiAgICAgIHRoaXMuZmF0YWwgPSBiaW5kKHBhcmVudCwgYmluZGluZ3MsICdmYXRhbCcpXG4gICAgICB0aGlzLndhcm4gPSBiaW5kKHBhcmVudCwgYmluZGluZ3MsICd3YXJuJylcbiAgICAgIHRoaXMuaW5mbyA9IGJpbmQocGFyZW50LCBiaW5kaW5ncywgJ2luZm8nKVxuICAgICAgdGhpcy5kZWJ1ZyA9IGJpbmQocGFyZW50LCBiaW5kaW5ncywgJ2RlYnVnJylcbiAgICAgIHRoaXMudHJhY2UgPSBiaW5kKHBhcmVudCwgYmluZGluZ3MsICd0cmFjZScpXG4gICAgICBpZiAoY2hpbGRTZXJpYWxpemVycykge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZXJzID0gY2hpbGRTZXJpYWxpemVyc1xuICAgICAgICB0aGlzLl9zZXJpYWxpemUgPSBjaGlsZFNlcmlhbGl6ZVxuICAgICAgfVxuICAgICAgaWYgKHRyYW5zbWl0KSB7XG4gICAgICAgIHRoaXMuX2xvZ0V2ZW50ID0gY3JlYXRlTG9nRXZlbnRTaGFwZShcbiAgICAgICAgICBbXS5jb25jYXQocGFyZW50Ll9sb2dFdmVudC5iaW5kaW5ncywgYmluZGluZ3MpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgQ2hpbGQucHJvdG90eXBlID0gdGhpc1xuICAgIHJldHVybiBuZXcgQ2hpbGQodGhpcylcbiAgfVxuICByZXR1cm4gbG9nZ2VyXG59XG5cbnBpbm8ubGV2ZWxzID0ge1xuICB2YWx1ZXM6IHtcbiAgICBmYXRhbDogNjAsXG4gICAgZXJyb3I6IDUwLFxuICAgIHdhcm46IDQwLFxuICAgIGluZm86IDMwLFxuICAgIGRlYnVnOiAyMCxcbiAgICB0cmFjZTogMTBcbiAgfSxcbiAgbGFiZWxzOiB7XG4gICAgMTA6ICd0cmFjZScsXG4gICAgMjA6ICdkZWJ1ZycsXG4gICAgMzA6ICdpbmZvJyxcbiAgICA0MDogJ3dhcm4nLFxuICAgIDUwOiAnZXJyb3InLFxuICAgIDYwOiAnZmF0YWwnXG4gIH1cbn1cblxucGluby5zdGRTZXJpYWxpemVycyA9IHN0ZFNlcmlhbGl6ZXJzXG5waW5vLnN0ZFRpbWVGdW5jdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB7IG51bGxUaW1lLCBlcG9jaFRpbWUsIHVuaXhUaW1lLCBpc29UaW1lIH0pXG5cbmZ1bmN0aW9uIHNldCAob3B0cywgbG9nZ2VyLCBsZXZlbCwgZmFsbGJhY2spIHtcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YobG9nZ2VyKVxuICBsb2dnZXJbbGV2ZWxdID0gbG9nZ2VyLmxldmVsVmFsID4gbG9nZ2VyLmxldmVscy52YWx1ZXNbbGV2ZWxdXG4gICAgPyBub29wXG4gICAgOiAocHJvdG9bbGV2ZWxdID8gcHJvdG9bbGV2ZWxdIDogKF9jb25zb2xlW2xldmVsXSB8fCBfY29uc29sZVtmYWxsYmFja10gfHwgbm9vcCkpXG5cbiAgd3JhcChvcHRzLCBsb2dnZXIsIGxldmVsKVxufVxuXG5mdW5jdGlvbiB3cmFwIChvcHRzLCBsb2dnZXIsIGxldmVsKSB7XG4gIGlmICghb3B0cy50cmFuc21pdCAmJiBsb2dnZXJbbGV2ZWxdID09PSBub29wKSByZXR1cm5cblxuICBsb2dnZXJbbGV2ZWxdID0gKGZ1bmN0aW9uICh3cml0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBMT0cgKCkge1xuICAgICAgY29uc3QgdHMgPSBvcHRzLnRpbWVzdGFtcCgpXG4gICAgICBjb25zdCBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpXG4gICAgICBjb25zdCBwcm90byA9IChPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpID09PSBfY29uc29sZSkgPyBfY29uc29sZSA6IHRoaXNcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICBpZiAob3B0cy5zZXJpYWxpemUgJiYgIW9wdHMuYXNPYmplY3QpIHtcbiAgICAgICAgYXBwbHlTZXJpYWxpemVycyhhcmdzLCB0aGlzLl9zZXJpYWxpemUsIHRoaXMuc2VyaWFsaXplcnMsIHRoaXMuX3N0ZEVyclNlcmlhbGl6ZSlcbiAgICAgIH1cbiAgICAgIGlmIChvcHRzLmFzT2JqZWN0KSB3cml0ZS5jYWxsKHByb3RvLCBhc09iamVjdCh0aGlzLCBsZXZlbCwgYXJncywgdHMpKVxuICAgICAgZWxzZSB3cml0ZS5hcHBseShwcm90bywgYXJncylcblxuICAgICAgaWYgKG9wdHMudHJhbnNtaXQpIHtcbiAgICAgICAgY29uc3QgdHJhbnNtaXRMZXZlbCA9IG9wdHMudHJhbnNtaXQubGV2ZWwgfHwgbG9nZ2VyLmxldmVsXG4gICAgICAgIGNvbnN0IHRyYW5zbWl0VmFsdWUgPSBwaW5vLmxldmVscy52YWx1ZXNbdHJhbnNtaXRMZXZlbF1cbiAgICAgICAgY29uc3QgbWV0aG9kVmFsdWUgPSBwaW5vLmxldmVscy52YWx1ZXNbbGV2ZWxdXG4gICAgICAgIGlmIChtZXRob2RWYWx1ZSA8IHRyYW5zbWl0VmFsdWUpIHJldHVyblxuICAgICAgICB0cmFuc21pdCh0aGlzLCB7XG4gICAgICAgICAgdHMsXG4gICAgICAgICAgbWV0aG9kTGV2ZWw6IGxldmVsLFxuICAgICAgICAgIG1ldGhvZFZhbHVlLFxuICAgICAgICAgIHRyYW5zbWl0TGV2ZWwsXG4gICAgICAgICAgdHJhbnNtaXRWYWx1ZTogcGluby5sZXZlbHMudmFsdWVzW29wdHMudHJhbnNtaXQubGV2ZWwgfHwgbG9nZ2VyLmxldmVsXSxcbiAgICAgICAgICBzZW5kOiBvcHRzLnRyYW5zbWl0LnNlbmQsXG4gICAgICAgICAgdmFsOiBsb2dnZXIubGV2ZWxWYWxcbiAgICAgICAgfSwgYXJncylcbiAgICAgIH1cbiAgICB9XG4gIH0pKGxvZ2dlcltsZXZlbF0pXG59XG5cbmZ1bmN0aW9uIGFzT2JqZWN0IChsb2dnZXIsIGxldmVsLCBhcmdzLCB0cykge1xuICBpZiAobG9nZ2VyLl9zZXJpYWxpemUpIGFwcGx5U2VyaWFsaXplcnMoYXJncywgbG9nZ2VyLl9zZXJpYWxpemUsIGxvZ2dlci5zZXJpYWxpemVycywgbG9nZ2VyLl9zdGRFcnJTZXJpYWxpemUpXG4gIGNvbnN0IGFyZ3NDbG9uZWQgPSBhcmdzLnNsaWNlKClcbiAgbGV0IG1zZyA9IGFyZ3NDbG9uZWRbMF1cbiAgY29uc3QgbyA9IHt9XG4gIGlmICh0cykge1xuICAgIG8udGltZSA9IHRzXG4gIH1cbiAgby5sZXZlbCA9IHBpbm8ubGV2ZWxzLnZhbHVlc1tsZXZlbF1cbiAgbGV0IGx2bCA9IChsb2dnZXIuX2NoaWxkTGV2ZWwgfCAwKSArIDFcbiAgaWYgKGx2bCA8IDEpIGx2bCA9IDFcbiAgLy8gZGVsaWJlcmF0ZSwgY2F0Y2hpbmcgb2JqZWN0cywgYXJyYXlzXG4gIGlmIChtc2cgIT09IG51bGwgJiYgdHlwZW9mIG1zZyA9PT0gJ29iamVjdCcpIHtcbiAgICB3aGlsZSAobHZsLS0gJiYgdHlwZW9mIGFyZ3NDbG9uZWRbMF0gPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3QuYXNzaWduKG8sIGFyZ3NDbG9uZWQuc2hpZnQoKSlcbiAgICB9XG4gICAgbXNnID0gYXJnc0Nsb25lZC5sZW5ndGggPyBmb3JtYXQoYXJnc0Nsb25lZC5zaGlmdCgpLCBhcmdzQ2xvbmVkKSA6IHVuZGVmaW5lZFxuICB9IGVsc2UgaWYgKHR5cGVvZiBtc2cgPT09ICdzdHJpbmcnKSBtc2cgPSBmb3JtYXQoYXJnc0Nsb25lZC5zaGlmdCgpLCBhcmdzQ2xvbmVkKVxuICBpZiAobXNnICE9PSB1bmRlZmluZWQpIG8ubXNnID0gbXNnXG4gIHJldHVybiBvXG59XG5cbmZ1bmN0aW9uIGFwcGx5U2VyaWFsaXplcnMgKGFyZ3MsIHNlcmlhbGl6ZSwgc2VyaWFsaXplcnMsIHN0ZEVyclNlcmlhbGl6ZSkge1xuICBmb3IgKGNvbnN0IGkgaW4gYXJncykge1xuICAgIGlmIChzdGRFcnJTZXJpYWxpemUgJiYgYXJnc1tpXSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBhcmdzW2ldID0gcGluby5zdGRTZXJpYWxpemVycy5lcnIoYXJnc1tpXSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmdzW2ldID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShhcmdzW2ldKSkge1xuICAgICAgZm9yIChjb25zdCBrIGluIGFyZ3NbaV0pIHtcbiAgICAgICAgaWYgKHNlcmlhbGl6ZSAmJiBzZXJpYWxpemUuaW5kZXhPZihrKSA+IC0xICYmIGsgaW4gc2VyaWFsaXplcnMpIHtcbiAgICAgICAgICBhcmdzW2ldW2tdID0gc2VyaWFsaXplcnNba10oYXJnc1tpXVtrXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBiaW5kIChwYXJlbnQsIGJpbmRpbmdzLCBsZXZlbCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFyZ3MgPSBuZXcgQXJyYXkoMSArIGFyZ3VtZW50cy5sZW5ndGgpXG4gICAgYXJnc1swXSA9IGJpbmRpbmdzXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgLSAxXVxuICAgIH1cbiAgICByZXR1cm4gcGFyZW50W2xldmVsXS5hcHBseSh0aGlzLCBhcmdzKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zbWl0IChsb2dnZXIsIG9wdHMsIGFyZ3MpIHtcbiAgY29uc3Qgc2VuZCA9IG9wdHMuc2VuZFxuICBjb25zdCB0cyA9IG9wdHMudHNcbiAgY29uc3QgbWV0aG9kTGV2ZWwgPSBvcHRzLm1ldGhvZExldmVsXG4gIGNvbnN0IG1ldGhvZFZhbHVlID0gb3B0cy5tZXRob2RWYWx1ZVxuICBjb25zdCB2YWwgPSBvcHRzLnZhbFxuICBjb25zdCBiaW5kaW5ncyA9IGxvZ2dlci5fbG9nRXZlbnQuYmluZGluZ3NcblxuICBhcHBseVNlcmlhbGl6ZXJzKFxuICAgIGFyZ3MsXG4gICAgbG9nZ2VyLl9zZXJpYWxpemUgfHwgT2JqZWN0LmtleXMobG9nZ2VyLnNlcmlhbGl6ZXJzKSxcbiAgICBsb2dnZXIuc2VyaWFsaXplcnMsXG4gICAgbG9nZ2VyLl9zdGRFcnJTZXJpYWxpemUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBsb2dnZXIuX3N0ZEVyclNlcmlhbGl6ZVxuICApXG4gIGxvZ2dlci5fbG9nRXZlbnQudHMgPSB0c1xuICBsb2dnZXIuX2xvZ0V2ZW50Lm1lc3NhZ2VzID0gYXJncy5maWx0ZXIoZnVuY3Rpb24gKGFyZykge1xuICAgIC8vIGJpbmRpbmdzIGNhbiBvbmx5IGJlIG9iamVjdHMsIHNvIHJlZmVyZW5jZSBlcXVhbGl0eSBjaGVjayB2aWEgaW5kZXhPZiBpcyBmaW5lXG4gICAgcmV0dXJuIGJpbmRpbmdzLmluZGV4T2YoYXJnKSA9PT0gLTFcbiAgfSlcblxuICBsb2dnZXIuX2xvZ0V2ZW50LmxldmVsLmxhYmVsID0gbWV0aG9kTGV2ZWxcbiAgbG9nZ2VyLl9sb2dFdmVudC5sZXZlbC52YWx1ZSA9IG1ldGhvZFZhbHVlXG5cbiAgc2VuZChtZXRob2RMZXZlbCwgbG9nZ2VyLl9sb2dFdmVudCwgdmFsKVxuXG4gIGxvZ2dlci5fbG9nRXZlbnQgPSBjcmVhdGVMb2dFdmVudFNoYXBlKGJpbmRpbmdzKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2dFdmVudFNoYXBlIChiaW5kaW5ncykge1xuICByZXR1cm4ge1xuICAgIHRzOiAwLFxuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBiaW5kaW5nczogYmluZGluZ3MgfHwgW10sXG4gICAgbGV2ZWw6IHsgbGFiZWw6ICcnLCB2YWx1ZTogMCB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNFcnJWYWx1ZSAoZXJyKSB7XG4gIGNvbnN0IG9iaiA9IHtcbiAgICB0eXBlOiBlcnIuY29uc3RydWN0b3IubmFtZSxcbiAgICBtc2c6IGVyci5tZXNzYWdlLFxuICAgIHN0YWNrOiBlcnIuc3RhY2tcbiAgfVxuICBmb3IgKGNvbnN0IGtleSBpbiBlcnIpIHtcbiAgICBpZiAob2JqW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgb2JqW2tleV0gPSBlcnJba2V5XVxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqXG59XG5cbmZ1bmN0aW9uIGdldFRpbWVGdW5jdGlvbiAob3B0cykge1xuICBpZiAodHlwZW9mIG9wdHMudGltZXN0YW1wID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG9wdHMudGltZXN0YW1wXG4gIH1cbiAgaWYgKG9wdHMudGltZXN0YW1wID09PSBmYWxzZSkge1xuICAgIHJldHVybiBudWxsVGltZVxuICB9XG4gIHJldHVybiBlcG9jaFRpbWVcbn1cblxuZnVuY3Rpb24gbW9jayAoKSB7IHJldHVybiB7fSB9XG5mdW5jdGlvbiBwYXNzdGhyb3VnaCAoYSkgeyByZXR1cm4gYSB9XG5mdW5jdGlvbiBub29wICgpIHt9XG5cbmZ1bmN0aW9uIG51bGxUaW1lICgpIHsgcmV0dXJuIGZhbHNlIH1cbmZ1bmN0aW9uIGVwb2NoVGltZSAoKSB7IHJldHVybiBEYXRlLm5vdygpIH1cbmZ1bmN0aW9uIHVuaXhUaW1lICgpIHsgcmV0dXJuIE1hdGgucm91bmQoRGF0ZS5ub3coKSAvIDEwMDAuMCkgfVxuZnVuY3Rpb24gaXNvVGltZSAoKSB7IHJldHVybiBuZXcgRGF0ZShEYXRlLm5vdygpKS50b0lTT1N0cmluZygpIH0gLy8gdXNpbmcgRGF0ZS5ub3coKSBmb3IgdGVzdGFiaWxpdHlcblxuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBwZkdsb2JhbFRoaXNPckZhbGxiYWNrICgpIHtcbiAgZnVuY3Rpb24gZGVmZCAobykgeyByZXR1cm4gdHlwZW9mIG8gIT09ICd1bmRlZmluZWQnICYmIG8gfVxuICB0cnkge1xuICAgIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBnbG9iYWxUaGlzXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsICdnbG9iYWxUaGlzJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlbGV0ZSBPYmplY3QucHJvdG90eXBlLmdsb2JhbFRoaXNcbiAgICAgICAgcmV0dXJuICh0aGlzLmdsb2JhbFRoaXMgPSB0aGlzKVxuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pXG4gICAgcmV0dXJuIGdsb2JhbFRoaXNcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBkZWZkKHNlbGYpIHx8IGRlZmQod2luZG93KSB8fCBkZWZkKHRoaXMpIHx8IHt9XG4gIH1cbn1cbi8qIGVzbGludC1lbmFibGUgKi9cbiIsIid1c2Ugc3RyaWN0J1xuZnVuY3Rpb24gdHJ5U3RyaW5naWZ5IChvKSB7XG4gIHRyeSB7IHJldHVybiBKU09OLnN0cmluZ2lmeShvKSB9IGNhdGNoKGUpIHsgcmV0dXJuICdcIltDaXJjdWxhcl1cIicgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdFxuXG5mdW5jdGlvbiBmb3JtYXQoZiwgYXJncywgb3B0cykge1xuICB2YXIgc3MgPSAob3B0cyAmJiBvcHRzLnN0cmluZ2lmeSkgfHwgdHJ5U3RyaW5naWZ5XG4gIHZhciBvZmZzZXQgPSAxXG4gIGlmICh0eXBlb2YgZiA9PT0gJ29iamVjdCcgJiYgZiAhPT0gbnVsbCkge1xuICAgIHZhciBsZW4gPSBhcmdzLmxlbmd0aCArIG9mZnNldFxuICAgIGlmIChsZW4gPT09IDEpIHJldHVybiBmXG4gICAgdmFyIG9iamVjdHMgPSBuZXcgQXJyYXkobGVuKVxuICAgIG9iamVjdHNbMF0gPSBzcyhmKVxuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcbiAgICAgIG9iamVjdHNbaW5kZXhdID0gc3MoYXJnc1tpbmRleF0pXG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKVxuICB9XG4gIGlmICh0eXBlb2YgZiAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZlxuICB9XG4gIHZhciBhcmdMZW4gPSBhcmdzLmxlbmd0aFxuICBpZiAoYXJnTGVuID09PSAwKSByZXR1cm4gZlxuICB2YXIgc3RyID0gJydcbiAgdmFyIGEgPSAxIC0gb2Zmc2V0XG4gIHZhciBsYXN0UG9zID0gLTFcbiAgdmFyIGZsZW4gPSAoZiAmJiBmLmxlbmd0aCkgfHwgMFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZsZW47KSB7XG4gICAgaWYgKGYuY2hhckNvZGVBdChpKSA9PT0gMzcgJiYgaSArIDEgPCBmbGVuKSB7XG4gICAgICBsYXN0UG9zID0gbGFzdFBvcyA+IC0xID8gbGFzdFBvcyA6IDBcbiAgICAgIHN3aXRjaCAoZi5jaGFyQ29kZUF0KGkgKyAxKSkge1xuICAgICAgICBjYXNlIDEwMDogLy8gJ2QnXG4gICAgICAgIGNhc2UgMTAyOiAvLyAnZidcbiAgICAgICAgICBpZiAoYSA+PSBhcmdMZW4pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGlmIChhcmdzW2FdID09IG51bGwpICBicmVha1xuICAgICAgICAgIGlmIChsYXN0UG9zIDwgaSlcbiAgICAgICAgICAgIHN0ciArPSBmLnNsaWNlKGxhc3RQb3MsIGkpXG4gICAgICAgICAgc3RyICs9IE51bWJlcihhcmdzW2FdKVxuICAgICAgICAgIGxhc3RQb3MgPSBpICsgMlxuICAgICAgICAgIGkrK1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMTA1OiAvLyAnaSdcbiAgICAgICAgICBpZiAoYSA+PSBhcmdMZW4pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGlmIChhcmdzW2FdID09IG51bGwpICBicmVha1xuICAgICAgICAgIGlmIChsYXN0UG9zIDwgaSlcbiAgICAgICAgICAgIHN0ciArPSBmLnNsaWNlKGxhc3RQb3MsIGkpXG4gICAgICAgICAgc3RyICs9IE1hdGguZmxvb3IoTnVtYmVyKGFyZ3NbYV0pKVxuICAgICAgICAgIGxhc3RQb3MgPSBpICsgMlxuICAgICAgICAgIGkrK1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNzk6IC8vICdPJ1xuICAgICAgICBjYXNlIDExMTogLy8gJ28nXG4gICAgICAgIGNhc2UgMTA2OiAvLyAnaidcbiAgICAgICAgICBpZiAoYSA+PSBhcmdMZW4pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGlmIChhcmdzW2FdID09PSB1bmRlZmluZWQpIGJyZWFrXG4gICAgICAgICAgaWYgKGxhc3RQb3MgPCBpKVxuICAgICAgICAgICAgc3RyICs9IGYuc2xpY2UobGFzdFBvcywgaSlcbiAgICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiBhcmdzW2FdXG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBzdHIgKz0gJ1xcJycgKyBhcmdzW2FdICsgJ1xcJydcbiAgICAgICAgICAgIGxhc3RQb3MgPSBpICsgMlxuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RyICs9IGFyZ3NbYV0ubmFtZSB8fCAnPGFub255bW91cz4nXG4gICAgICAgICAgICBsYXN0UG9zID0gaSArIDJcbiAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RyICs9IHNzKGFyZ3NbYV0pXG4gICAgICAgICAgbGFzdFBvcyA9IGkgKyAyXG4gICAgICAgICAgaSsrXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAxMTU6IC8vICdzJ1xuICAgICAgICAgIGlmIChhID49IGFyZ0xlbilcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgaWYgKGxhc3RQb3MgPCBpKVxuICAgICAgICAgICAgc3RyICs9IGYuc2xpY2UobGFzdFBvcywgaSlcbiAgICAgICAgICBzdHIgKz0gU3RyaW5nKGFyZ3NbYV0pXG4gICAgICAgICAgbGFzdFBvcyA9IGkgKyAyXG4gICAgICAgICAgaSsrXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzNzogLy8gJyUnXG4gICAgICAgICAgaWYgKGxhc3RQb3MgPCBpKVxuICAgICAgICAgICAgc3RyICs9IGYuc2xpY2UobGFzdFBvcywgaSlcbiAgICAgICAgICBzdHIgKz0gJyUnXG4gICAgICAgICAgbGFzdFBvcyA9IGkgKyAyXG4gICAgICAgICAgaSsrXG4gICAgICAgICAgYS0tXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgICsrYVxuICAgIH1cbiAgICArK2lcbiAgfVxuICBpZiAobGFzdFBvcyA9PT0gLTEpXG4gICAgcmV0dXJuIGZcbiAgZWxzZSBpZiAobGFzdFBvcyA8IGZsZW4pIHtcbiAgICBzdHIgKz0gZi5zbGljZShsYXN0UG9zKVxuICB9XG5cbiAgcmV0dXJuIHN0clxufVxuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgQmFzaWNBZGROb3RlUGFyYW1zIH0gZnJvbSBcIi4vYW5raS9hZGROb3RlXCI7XG5pbXBvcnQgeyBBbmtpUmVzcG9uc2UgfSBmcm9tIFwiLi9hbmtpL3Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlIHtcbiAgYWRkTm90ZSxcbiAgYWRkTm90ZVJlc3BvbnNlLFxuICBkZWNrTmFtZXMsXG4gIGRlY2tOYW1lc1Jlc3BvbnNlLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZE5vdGVNZXNzYWdlIHtcbiAgdHlwZTogTWVzc2FnZVR5cGUuYWRkTm90ZSxcbiAgcGF5bG9hZDogQmFzaWNBZGROb3RlUGFyYW1zLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZE5vdGVSZXNwb25zZU1lc3NhZ2Uge1xuICB0eXBlOiBNZXNzYWdlVHlwZS5hZGROb3RlUmVzcG9uc2UsXG4gIHBheWxvYWQ6IEFua2lSZXNwb25zZSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWNrTmFtZXNNZXNzYWdlIHtcbiAgdHlwZTogTWVzc2FnZVR5cGUuZGVja05hbWVzLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlY2tOYW1lc1Jlc3BvbnNlTWVzc2FnZSB7XG4gIHR5cGU6IE1lc3NhZ2VUeXBlLmRlY2tOYW1lc1Jlc3BvbnNlLFxuICBwYXlsb2FkOiBBbmtpUmVzcG9uc2U8QXJyYXk8c3RyaW5nPj4sXG59XG5cbmV4cG9ydCB0eXBlIE1lc3NzYWdlID1cbiB8IEFkZE5vdGVNZXNzYWdlXG4gfCBBZGROb3RlUmVzcG9uc2VNZXNzYWdlXG4gfCBEZWNrTmFtZXNNZXNzYWdlXG4gfCBEZWNrTmFtZXNSZXNwb25zZU1lc3NhZ2VcbjtcbiIsImltcG9ydCB7IGFkZE5vdGUgfSBmcm9tIFwiLi4vYW5raS9hZGROb3RlXCI7XG5pbXBvcnQgeyBBbmtpUmVzcG9uc2UgfSBmcm9tIFwiLi4vYW5raS9yZXNwb25zZVwiO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xuaW1wb3J0IHsgQWRkTm90ZU1lc3NhZ2UsIEFkZE5vdGVSZXNwb25zZU1lc3NhZ2UsIE1lc3NhZ2VUeXBlIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGROb3RlSGFuZGxlcihtZXNzYWdlOiBBZGROb3RlTWVzc2FnZSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWRkTm90ZShtZXNzYWdlLnBheWxvYWQpO1xuICAgIGNvbnN0IGJvZHk6IEFua2lSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgXG4gICAgbGV0IG5vdGlmaWNhdGlvbk1lc3NhZ2UgPSBcIk5vdGUgYWRkZWRcIjtcbiAgICBpZiAoYm9keS5lcnJvciAhPT0gbnVsbCkge1xuICAgICAgbm90aWZpY2F0aW9uTWVzc2FnZSA9IGJvZHkuZXJyb3I7XG4gICAgICBsb2dnZXIuZXJyb3IoYm9keS5lcnJvcik7XG4gICAgfVxuICBcbiAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5jcmVhdGUoXCJcIiwge1xuICAgICAgbWVzc2FnZTogbm90aWZpY2F0aW9uTWVzc2FnZSxcbiAgICAgIGljb25Vcmw6IFwiaW1hZ2VzL2xvZ28ucG5nXCIsXG4gICAgICB0aXRsZTogXCJRdWljayBBbmtpXCIsXG4gICAgICB0eXBlOiBcImJhc2ljXCIsXG4gICAgfSk7XG4gIFxuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sICh0YWJzKT0+IHtcbiAgICAgIGNvbnN0IFt0YWJdID0gdGFicztcbiAgICAgIGlmICh0YWIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gIFxuICAgICAgY29uc3QgdGFiSWQgPSB0YWIuaWQ7XG4gICAgICBpZiAodGFiSWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gIFxuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuYWRkTm90ZVJlc3BvbnNlLFxuICAgICAgICBwYXlsb2FkOiBib2R5LFxuICAgICAgfSBhcyBBZGROb3RlUmVzcG9uc2VNZXNzYWdlKTsgIFxuICAgIH0pO1xuICB9IiwiLyoqXG4gKiBAc2VlIGFkZE5vdGUgYXQgaHR0cHM6Ly9mb29zb2Z0Lm5ldC9wcm9qZWN0cy9hbmtpLWNvbm5lY3QvI25vdGUtYWN0aW9uc1xuICovXG5cbmltcG9ydCB7IGludm9rZUFjdGlvbiB9IGZyb20gXCIuL2ludm9rZUFjdGlvblwiO1xuaW1wb3J0IHsgQWN0aW9uVHlwZSB9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBZGROb3RlUGFyYW1zIHtcbiAgICBub3RlOiB7XG4gICAgICAgIGRlY2tOYW1lOiBzdHJpbmc7XG4gICAgICAgIG1vZGVsTmFtZTogXCJCYXNpY1wiO1xuICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgIEZyb250OiBzdHJpbmc7XG4gICAgICAgICAgICBCYWNrOiBzdHJpbmc7XG4gICAgICAgIH07XG4gICAgICAgIG9wdGlvbnM/OiB7XG4gICAgICAgICAgICBhbGxvd0R1cGxpY2F0ZTogZmFsc2U7XG4gICAgICAgICAgICBkdXBsaWNhdGVTY29wZTogXCJkZWNrXCI7XG4gICAgICAgICAgICBkdXBsaWNhdGVTY29wZU9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBkZWNrTmFtZT86IHN0cmluZyB8IG51bGw7XG4gICAgICAgICAgICAgICAgY2hlY2tDaGlsZHJlbj86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgY2hlY2tBbGxNb2RlbHM6IGJvb2xlYW47XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICB0YWdzPzogc3RyaW5nW107XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXNpY0FkZE5vdGVQYXJhbXMge1xuICAgIGRlY2tOYW1lOiBBZGROb3RlUGFyYW1zW1wibm90ZVwiXVtcImRlY2tOYW1lXCJdLFxuICAgIGZyb250OiBBZGROb3RlUGFyYW1zW1wibm90ZVwiXVtcImZpZWxkc1wiXVtcIkZyb250XCJdLFxuICAgIGJhY2s6IEFkZE5vdGVQYXJhbXNbXCJub3RlXCJdW1wiZmllbGRzXCJdW1wiQmFja1wiXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEFkZE5vdGVQYXJhbXMoe1xuICAgIGZyb250LFxuICAgIGJhY2ssXG4gICAgZGVja05hbWUsXG59OiBCYXNpY0FkZE5vdGVQYXJhbXMpOiBBZGROb3RlUGFyYW1zIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBub3RlOiB7XG4gICAgICAgICAgICBkZWNrTmFtZSxcbiAgICAgICAgICAgIG1vZGVsTmFtZTogXCJCYXNpY1wiLFxuICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgRnJvbnQ6IGZyb250LFxuICAgICAgICAgICAgICAgIEJhY2s6IGJhY2ssXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGFsbG93RHVwbGljYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVTY29wZTogXCJkZWNrXCIsXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlU2NvcGVPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2tOYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBjaGVja0NoaWxkcmVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tBbGxNb2RlbHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnczogW10sXG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5vdGUocGFyYW1zOiBCYXNpY0FkZE5vdGVQYXJhbXMpIHtcbiAgICByZXR1cm4gaW52b2tlQWN0aW9uKHtcbiAgICAgICAgYWN0aW9uOiBBY3Rpb25UeXBlLkFkZE5vdGUsXG4gICAgICAgIHBhcmFtczogZ2V0RGVmYXVsdEFkZE5vdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn0iLCJpbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEludm9rZUFjdGlvblBhcmFtcyB7XG4gIGFjdGlvbjogQWN0aW9uVHlwZSxcbiAgcGFyYW1zPzogb2JqZWN0LFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW52b2tlQWN0aW9uKHBhcmFtczogSW52b2tlQWN0aW9uUGFyYW1zKSB7XG4gIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgLi4ucGFyYW1zLFxuICAgIHZlcnNpb246IDYsXG4gIH0pO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODc2NVwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXG4gICAgfVxuICB9XG59IiwiZXhwb3J0IGVudW0gQWN0aW9uVHlwZSB7XG4gICAgQWRkTm90ZSA9IFwiYWRkTm90ZVwiLFxuICAgIERlY2tOYW1lcyA9IFwiZGVja05hbWVzXCIsXG59IiwiaW1wb3J0IHsgZGVja05hbWVzIH0gZnJvbSBcIi4uL2Fua2kvZGVja05hbWVzXCI7XG5pbXBvcnQgeyBBbmtpUmVzcG9uc2UgfSBmcm9tIFwiLi4vYW5raS9yZXNwb25zZVwiO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xuaW1wb3J0IHsgRGVja05hbWVzTWVzc2FnZSwgRGVja05hbWVzUmVzcG9uc2VNZXNzYWdlLCBNZXNzYWdlVHlwZSB9IGZyb20gXCIuLi9tZXNzYWdlc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVja05hbWVzSGFuZGxlcihtZXNzYWdlOiBEZWNrTmFtZXNNZXNzYWdlKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkZWNrTmFtZXMoKTtcbiAgICBjb25zdCBib2R5OiBBbmtpUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIFxuICAgIGlmIChib2R5LmVycm9yICE9PSBudWxsKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoYm9keS5lcnJvcik7XG4gICAgfVxuICBcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicyk9PiB7XG4gICAgICBjb25zdCBbdGFiXSA9IHRhYnM7XG4gICAgICBpZiAodGFiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICBcbiAgICAgIGNvbnN0IHRhYklkID0gdGFiLmlkO1xuICAgICAgaWYgKHRhYklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICBcbiAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLmRlY2tOYW1lc1Jlc3BvbnNlLFxuICAgICAgICBwYXlsb2FkOiBib2R5LFxuICAgICAgfSBhcyBEZWNrTmFtZXNSZXNwb25zZU1lc3NhZ2UpOyAgXG4gICAgfSk7XG4gIH1cbiAgIiwiaW1wb3J0IHsgaW52b2tlQWN0aW9uIH0gZnJvbSBcIi4vaW52b2tlQWN0aW9uXCI7XG5pbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVja05hbWVzKCkge1xuICAgIHJldHVybiBpbnZva2VBY3Rpb24oe1xuICAgICAgICBhY3Rpb246IEFjdGlvblR5cGUuRGVja05hbWVzLFxuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImV2ZW50TGlzdGVuZXIuNTA4NTk0MzguanMubWFwIn0=
