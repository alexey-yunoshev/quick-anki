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
function invokeAction(params) {
    const body = JSON.stringify({
        ...params,
        version: 6
    });
    return fetch("http://127.0.0.1:8765", {
        method: "POST",
        body
    });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzdCSDs7QUFHQSwrQ0FBZ0IsU0FBUyxDQUl4QjtBQVBELDZDQUE4QztBQUM5QyxtQ0FBdUM7QUFFaEMsU0FBUyxTQUFTLEdBQUc7SUFDeEIsT0FBTyxDQUFBLEdBQUEsMEJBQVksQ0FBQSxDQUFDO1FBQ2hCLE1BQU0sRUFBRSxDQUFBLEdBQUEsbUJBQVUsQ0FBQSxDQUFDLFNBQVM7S0FDL0IsQ0FBQyxDQUFDO0NBQ04iLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtd2ViZXh0ZW5zaW9uL2xpYi9ydW50aW1lLTk4MzU0M2E3OTEyZWNmYTQuanMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWJyb3dzZXItaG1yL2xpYi9ydW50aW1lLTFjYmQ4MTY5Zjc4ZGMxYWQuanMiLCJzcmMvYmFja2dyb3VuZC9ldmVudExpc3RlbmVyLnRzIiwic3JjL2xvZ2dlci50cyIsIm5vZGVfbW9kdWxlcy9waW5vL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcXVpY2stZm9ybWF0LXVuZXNjYXBlZC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIiwic3JjL21lc3NhZ2VzLnRzIiwic3JjL2JhY2tncm91bmQvYWRkTm90ZUhhbmRsZXIudHMiLCJzcmMvYW5raS9hZGROb3RlLnRzIiwic3JjL2Fua2kvaW52b2tlQWN0aW9uLnRzIiwic3JjL2Fua2kvYWN0aW9ucy50cyIsInNyYy9iYWNrZ3JvdW5kL2RlY2tOYW1lc0hhbmRsZXIudHMiLCJzcmMvYW5raS9kZWNrTmFtZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEhNUl9IT1NUID0gXCJsb2NhbGhvc3RcIjt2YXIgSE1SX1BPUlQgPSAnMTIzNCc7XCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGdsb2JhbCBjaHJvbWUsIGJyb3dzZXIsIGFkZEV2ZW50TGlzdGVuZXIsIGZldGNoLCBSZXNwb25zZSwgSE1SX0hPU1QsIEhNUl9QT1JUICovXG52YXIgZW52ID0gdHlwZW9mIGNocm9tZSA9PSAndW5kZWZpbmVkJyA/IGJyb3dzZXIgOiBjaHJvbWU7XG5lbnYucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKG1zZykge1xuICBpZiAobXNnLl9fcGFyY2VsX2htcl9yZWxvYWRfXykge1xuICAgIGVudi5ydW50aW1lLnJlbG9hZCgpO1xuICB9XG59KTtcblxuaWYgKGVudi5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbiA9PSAzKSB7XG4gIHZhciBwcm94eUxvYyA9IGVudi5ydW50aW1lLmdldFVSTCgnL19fcGFyY2VsX2htcl9wcm94eV9fP3VybD0nKTtcbiAgYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgdmFyIHVybCA9IGV2dC5yZXF1ZXN0LnVybDtcblxuICAgIGlmICh1cmwuc3RhcnRzV2l0aChwcm94eUxvYykpIHtcbiAgICAgIHVybCA9IG5ldyBVUkwoZGVjb2RlVVJJQ29tcG9uZW50KHVybC5zbGljZShwcm94eUxvYy5sZW5ndGgpKSk7XG5cbiAgICAgIGlmICh1cmwuaG9zdG5hbWUgPT0gSE1SX0hPU1QgJiYgdXJsLnBvcnQgPT0gSE1SX1BPUlQpIHtcbiAgICAgICAgZXZ0LnJlc3BvbmRXaXRoKGZldGNoKHVybCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShyZXMuYm9keSwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogcmVzLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0iLCJ2YXIgSE1SX0hPU1QgPSBcImxvY2FsaG9zdFwiO3ZhciBITVJfUE9SVCA9IG51bGw7dmFyIEhNUl9TRUNVUkUgPSBmYWxzZTt2YXIgSE1SX0VOVl9IQVNIID0gXCJlNzkyZmJiZGFhNzhlZTg0XCI7bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEID0gXCIzNzk4ZjA3NDUwODU5NDM4XCI7XCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGdsb2JhbCBITVJfSE9TVCwgSE1SX1BPUlQsIEhNUl9FTlZfSEFTSCwgSE1SX1NFQ1VSRSwgY2hyb21lLCBicm93c2VyLCBnbG9iYWxUaGlzLCBfX3BhcmNlbF9faW1wb3J0X18sIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX18sIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSAqL1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7XG4gIEhNUkFzc2V0LFxuICBITVJNZXNzYWdlLFxufSBmcm9tICdAcGFyY2VsL3JlcG9ydGVyLWRldi1zZXJ2ZXIvc3JjL0hNUlNlcnZlci5qcyc7XG5pbnRlcmZhY2UgUGFyY2VsUmVxdWlyZSB7XG4gIChzdHJpbmcpOiBtaXhlZDtcbiAgY2FjaGU6IHt8W3N0cmluZ106IFBhcmNlbE1vZHVsZXx9O1xuICBob3REYXRhOiBtaXhlZDtcbiAgTW9kdWxlOiBhbnk7XG4gIHBhcmVudDogP1BhcmNlbFJlcXVpcmU7XG4gIGlzUGFyY2VsUmVxdWlyZTogdHJ1ZTtcbiAgbW9kdWxlczoge3xbc3RyaW5nXTogW0Z1bmN0aW9uLCB7fFtzdHJpbmddOiBzdHJpbmd8fV18fTtcbiAgSE1SX0JVTkRMRV9JRDogc3RyaW5nO1xuICByb290OiBQYXJjZWxSZXF1aXJlO1xufVxuaW50ZXJmYWNlIFBhcmNlbE1vZHVsZSB7XG4gIGhvdDoge3xcbiAgICBkYXRhOiBtaXhlZCxcbiAgICBhY2NlcHQoY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgZGlzcG9zZShjYjogKG1peGVkKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBhY2NlcHQoZGVwczogQXJyYXk8c3RyaW5nPiB8IHN0cmluZywgY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gZGVjbGluZSgpOiB2b2lkLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IEFycmF5PChGdW5jdGlvbikgPT4gdm9pZD4sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IEFycmF5PChtaXhlZCkgPT4gdm9pZD4sXG4gIHx9O1xufVxuaW50ZXJmYWNlIEV4dGVuc2lvbkNvbnRleHQge1xuICBydW50aW1lOiB7fFxuICAgIHJlbG9hZCgpOiB2b2lkLFxuICAgIGdldFVSTCh1cmw6IHN0cmluZyk6IHN0cmluZztcbiAgICBnZXRNYW5pZmVzdCgpOiB7bWFuaWZlc3RfdmVyc2lvbjogbnVtYmVyLCAuLi59O1xuICB8fTtcbn1cbmRlY2xhcmUgdmFyIG1vZHVsZToge2J1bmRsZTogUGFyY2VsUmVxdWlyZSwgLi4ufTtcbmRlY2xhcmUgdmFyIEhNUl9IT1NUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfUE9SVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX0VOVl9IQVNIOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfU0VDVVJFOiBib29sZWFuO1xuZGVjbGFyZSB2YXIgY2hyb21lOiBFeHRlbnNpb25Db250ZXh0O1xuZGVjbGFyZSB2YXIgYnJvd3NlcjogRXh0ZW5zaW9uQ29udGV4dDtcbmRlY2xhcmUgdmFyIF9fcGFyY2VsX19pbXBvcnRfXzogKHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbmRlY2xhcmUgdmFyIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX186IChzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG5kZWNsYXJlIHZhciBnbG9iYWxUaGlzOiB0eXBlb2Ygc2VsZjtcbmRlY2xhcmUgdmFyIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZTogT2JqZWN0O1xuKi9cbnZhciBPVkVSTEFZX0lEID0gJ19fcGFyY2VsX19lcnJvcl9fb3ZlcmxheV9fJztcbnZhciBPbGRNb2R1bGUgPSBtb2R1bGUuYnVuZGxlLk1vZHVsZTtcblxuZnVuY3Rpb24gTW9kdWxlKG1vZHVsZU5hbWUpIHtcbiAgT2xkTW9kdWxlLmNhbGwodGhpcywgbW9kdWxlTmFtZSk7XG4gIHRoaXMuaG90ID0ge1xuICAgIGRhdGE6IG1vZHVsZS5idW5kbGUuaG90RGF0YSxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBbXSxcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogW10sXG4gICAgYWNjZXB0OiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHRoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKGZuIHx8IGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9LFxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uIChmbikge1xuICAgICAgdGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKGZuKTtcbiAgICB9XG4gIH07XG4gIG1vZHVsZS5idW5kbGUuaG90RGF0YSA9IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmJ1bmRsZS5Nb2R1bGUgPSBNb2R1bGU7XG52YXIgY2hlY2tlZEFzc2V0c1xuLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuLCBhY2NlcHRlZEFzc2V0c1xuLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuLCBhc3NldHNUb0FjY2VwdFxuLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqL1xuO1xuXG5mdW5jdGlvbiBnZXRIb3N0bmFtZSgpIHtcbiAgcmV0dXJuIEhNUl9IT1NUIHx8IChsb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKCdodHRwJykgPT09IDAgPyBsb2NhdGlvbi5ob3N0bmFtZSA6ICdsb2NhbGhvc3QnKTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9ydCgpIHtcbiAgcmV0dXJuIEhNUl9QT1JUIHx8IGxvY2F0aW9uLnBvcnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuXG52YXIgcGFyZW50ID0gbW9kdWxlLmJ1bmRsZS5wYXJlbnQ7XG5cbmlmICgoIXBhcmVudCB8fCAhcGFyZW50LmlzUGFyY2VsUmVxdWlyZSkgJiYgdHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbiAgdmFyIHBvcnQgPSBnZXRQb3J0KCk7XG4gIHZhciBwcm90b2NvbCA9IEhNUl9TRUNVUkUgfHwgbG9jYXRpb24ucHJvdG9jb2wgPT0gJ2h0dHBzOicgJiYgIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QoaG9zdG5hbWUpID8gJ3dzcycgOiAnd3MnO1xuICB2YXIgd3MgPSBuZXcgV2ViU29ja2V0KHByb3RvY29sICsgJzovLycgKyBob3N0bmFtZSArIChwb3J0ID8gJzonICsgcG9ydCA6ICcnKSArICcvJyk7IC8vIFdlYiBleHRlbnNpb24gY29udGV4dFxuXG4gIHZhciBleHRDdHggPSB0eXBlb2YgY2hyb21lID09PSAndW5kZWZpbmVkJyA/IHR5cGVvZiBicm93c2VyID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBicm93c2VyIDogY2hyb21lOyAvLyBTYWZhcmkgZG9lc24ndCBzdXBwb3J0IHNvdXJjZVVSTCBpbiBlcnJvciBzdGFja3MuXG4gIC8vIGV2YWwgbWF5IGFsc28gYmUgZGlzYWJsZWQgdmlhIENTUCwgc28gZG8gYSBxdWljayBjaGVjay5cblxuICB2YXIgc3VwcG9ydHNTb3VyY2VVUkwgPSBmYWxzZTtcblxuICB0cnkge1xuICAgICgwLCBldmFsKSgndGhyb3cgbmV3IEVycm9yKFwidGVzdFwiKTsgLy8jIHNvdXJjZVVSTD10ZXN0LmpzJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHN1cHBvcnRzU291cmNlVVJMID0gZXJyLnN0YWNrLmluY2x1ZGVzKCd0ZXN0LmpzJyk7XG4gIH0gLy8gJEZsb3dGaXhNZVxuXG5cbiAgd3Mub25tZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50XG4gIC8qOiB7ZGF0YTogc3RyaW5nLCAuLi59ICovXG4gICkge1xuICAgIGNoZWNrZWRBc3NldHMgPSB7fVxuICAgIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiAgICA7XG4gICAgYWNjZXB0ZWRBc3NldHMgPSB7fVxuICAgIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiAgICA7XG4gICAgYXNzZXRzVG9BY2NlcHQgPSBbXTtcbiAgICB2YXIgZGF0YVxuICAgIC8qOiBITVJNZXNzYWdlICovXG4gICAgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgIC8vIFJlbW92ZSBlcnJvciBvdmVybGF5IGlmIHRoZXJlIGlzIG9uZVxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBhc3NldHMgPSBkYXRhLmFzc2V0cy5maWx0ZXIoYXNzZXQgPT4gYXNzZXQuZW52SGFzaCA9PT0gSE1SX0VOVl9IQVNIKTsgLy8gSGFuZGxlIEhNUiBVcGRhdGVcblxuICAgICAgbGV0IGhhbmRsZWQgPSBhc3NldHMuZXZlcnkoYXNzZXQgPT4ge1xuICAgICAgICByZXR1cm4gYXNzZXQudHlwZSA9PT0gJ2NzcycgfHwgYXNzZXQudHlwZSA9PT0gJ2pzJyAmJiBobXJBY2NlcHRDaGVjayhtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0LmlkLCBhc3NldC5kZXBzQnlCdW5kbGUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTsgLy8gRGlzcGF0Y2ggY3VzdG9tIGV2ZW50IHNvIG90aGVyIHJ1bnRpbWVzIChlLmcgUmVhY3QgUmVmcmVzaCkgYXJlIGF3YXJlLlxuXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQ3VzdG9tRXZlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdwYXJjZWxobXJhY2NlcHQnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBobXJBcHBseVVwZGF0ZXMoYXNzZXRzKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFzc2V0c1RvQWNjZXB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGlkID0gYXNzZXRzVG9BY2NlcHRbaV1bMV07XG5cbiAgICAgICAgICBpZiAoIWFjY2VwdGVkQXNzZXRzW2lkXSkge1xuICAgICAgICAgICAgaG1yQWNjZXB0UnVuKGFzc2V0c1RvQWNjZXB0W2ldWzBdLCBpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgZnVsbFJlbG9hZCgpO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIC8vIExvZyBwYXJjZWwgZXJyb3JzIHRvIGNvbnNvbGVcbiAgICAgIGZvciAobGV0IGFuc2lEaWFnbm9zdGljIG9mIGRhdGEuZGlhZ25vc3RpY3MuYW5zaSkge1xuICAgICAgICBsZXQgc3RhY2sgPSBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgPyBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgOiBhbnNpRGlhZ25vc3RpYy5zdGFjaztcbiAgICAgICAgY29uc29sZS5lcnJvcign8J+aqCBbcGFyY2VsXTogJyArIGFuc2lEaWFnbm9zdGljLm1lc3NhZ2UgKyAnXFxuJyArIHN0YWNrICsgJ1xcblxcbicgKyBhbnNpRGlhZ25vc3RpYy5oaW50cy5qb2luKCdcXG4nKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFJlbmRlciB0aGUgZmFuY3kgaHRtbCBvdmVybGF5XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgICB2YXIgb3ZlcmxheSA9IGNyZWF0ZUVycm9yT3ZlcmxheShkYXRhLmRpYWdub3N0aWNzLmh0bWwpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuICB9O1xuXG4gIHdzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS53YXJuKCdbcGFyY2VsXSDwn5qoIENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgd2FzIGxvc3QnKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXJyb3JPdmVybGF5KCkge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE9WRVJMQVlfSUQpO1xuXG4gIGlmIChvdmVybGF5KSB7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZygnW3BhcmNlbF0g4pyoIEVycm9yIHJlc29sdmVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRXJyb3JPdmVybGF5KGRpYWdub3N0aWNzKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuaWQgPSBPVkVSTEFZX0lEO1xuICBsZXQgZXJyb3JIVE1MID0gJzxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiBibGFjazsgb3BhY2l0eTogMC44NTsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogd2hpdGU7IHBvc2l0aW9uOiBmaXhlZDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgdG9wOiAwcHg7IGxlZnQ6IDBweDsgcGFkZGluZzogMzBweDsgZm9udC1mYW1pbHk6IE1lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlOyB6LWluZGV4OiA5OTk5O1wiPic7XG5cbiAgZm9yIChsZXQgZGlhZ25vc3RpYyBvZiBkaWFnbm9zdGljcykge1xuICAgIGxldCBzdGFjayA9IGRpYWdub3N0aWMuZnJhbWVzLmxlbmd0aCA/IGRpYWdub3N0aWMuZnJhbWVzLnJlZHVjZSgocCwgZnJhbWUpID0+IHtcbiAgICAgIHJldHVybiBgJHtwfVxuPGEgaHJlZj1cIi9fX3BhcmNlbF9sYXVuY2hfZWRpdG9yP2ZpbGU9JHtlbmNvZGVVUklDb21wb25lbnQoZnJhbWUubG9jYXRpb24pfVwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IGNvbG9yOiAjODg4XCIgb25jbGljaz1cImZldGNoKHRoaXMuaHJlZik7IHJldHVybiBmYWxzZVwiPiR7ZnJhbWUubG9jYXRpb259PC9hPlxuJHtmcmFtZS5jb2RlfWA7XG4gICAgfSwgJycpIDogZGlhZ25vc3RpYy5zdGFjaztcbiAgICBlcnJvckhUTUwgKz0gYFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IG1hcmdpbi10b3A6IDIwcHg7XCI+XG4gICAgICAgICAg8J+aqCAke2RpYWdub3N0aWMubWVzc2FnZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwcmU+JHtzdGFja308L3ByZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAke2RpYWdub3N0aWMuaGludHMubWFwKGhpbnQgPT4gJzxkaXY+8J+SoSAnICsgaGludCArICc8L2Rpdj4nKS5qb2luKCcnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICR7ZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9uID8gYDxkaXY+8J+TnSA8YSBzdHlsZT1cImNvbG9yOiB2aW9sZXRcIiBocmVmPVwiJHtkaWFnbm9zdGljLmRvY3VtZW50YXRpb259XCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGVhcm4gbW9yZTwvYT48L2Rpdj5gIDogJyd9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgZXJyb3JIVE1MICs9ICc8L2Rpdj4nO1xuICBvdmVybGF5LmlubmVySFRNTCA9IGVycm9ySFRNTDtcbiAgcmV0dXJuIG92ZXJsYXk7XG59XG5cbmZ1bmN0aW9uIGZ1bGxSZWxvYWQoKSB7XG4gIGlmICgncmVsb2FkJyBpbiBsb2NhdGlvbikge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9IGVsc2UgaWYgKGV4dEN0eCAmJiBleHRDdHgucnVudGltZSAmJiBleHRDdHgucnVudGltZS5yZWxvYWQpIHtcbiAgICBleHRDdHgucnVudGltZS5yZWxvYWQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnRzKGJ1bmRsZSwgaWQpXG4vKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovXG57XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIHBhcmVudHMgPSBbXTtcbiAgdmFyIGssIGQsIGRlcDtcblxuICBmb3IgKGsgaW4gbW9kdWxlcykge1xuICAgIGZvciAoZCBpbiBtb2R1bGVzW2tdWzFdKSB7XG4gICAgICBkZXAgPSBtb2R1bGVzW2tdWzFdW2RdO1xuXG4gICAgICBpZiAoZGVwID09PSBpZCB8fCBBcnJheS5pc0FycmF5KGRlcCkgJiYgZGVwW2RlcC5sZW5ndGggLSAxXSA9PT0gaWQpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKFtidW5kbGUsIGtdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIHBhcmVudHMgPSBwYXJlbnRzLmNvbmNhdChnZXRQYXJlbnRzKGJ1bmRsZS5wYXJlbnQsIGlkKSk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rKSB7XG4gIHZhciBuZXdMaW5rID0gbGluay5jbG9uZU5vZGUoKTtcblxuICBuZXdMaW5rLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobGluay5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgfVxuICB9O1xuXG4gIG5ld0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgLy8gJEZsb3dGaXhNZVxuICBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpLnNwbGl0KCc/JylbMF0gKyAnPycgKyBEYXRlLm5vdygpKTsgLy8gJEZsb3dGaXhNZVxuXG4gIGxpbmsucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3TGluaywgbGluay5uZXh0U2libGluZyk7XG59XG5cbnZhciBjc3NUaW1lb3V0ID0gbnVsbDtcblxuZnVuY3Rpb24gcmVsb2FkQ1NTKCkge1xuICBpZiAoY3NzVGltZW91dCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdXG4gICAgICB2YXIgaHJlZlxuICAgICAgLyo6IHN0cmluZyAqL1xuICAgICAgPSBsaW5rc1tpXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gICAgICB2YXIgc2VydmVkRnJvbUhNUlNlcnZlciA9IGhvc3RuYW1lID09PSAnbG9jYWxob3N0JyA/IG5ldyBSZWdFeHAoJ14oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6JyArIGdldFBvcnQoKSkudGVzdChocmVmKSA6IGhyZWYuaW5kZXhPZihob3N0bmFtZSArICc6JyArIGdldFBvcnQoKSk7XG4gICAgICB2YXIgYWJzb2x1dGUgPSAvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KGhyZWYpICYmIGhyZWYuaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pICE9PSAwICYmICFzZXJ2ZWRGcm9tSE1SU2VydmVyO1xuXG4gICAgICBpZiAoIWFic29sdXRlKSB7XG4gICAgICAgIHVwZGF0ZUxpbmsobGlua3NbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNzc1RpbWVvdXQgPSBudWxsO1xuICB9LCA1MCk7XG59XG5cbmZ1bmN0aW9uIGhtckRvd25sb2FkKGFzc2V0KSB7XG4gIGlmIChhc3NldC50eXBlID09PSAnanMnKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5zcmMgPSBhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCk7XG5cbiAgICAgIGlmIChhc3NldC5vdXRwdXRGb3JtYXQgPT09ICdlc21vZHVsZScpIHtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnbW9kdWxlJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdmFyIF9kb2N1bWVudCRoZWFkO1xuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHNjcmlwdCk7XG5cbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIChfZG9jdW1lbnQkaGVhZCA9IGRvY3VtZW50LmhlYWQpID09PSBudWxsIHx8IF9kb2N1bWVudCRoZWFkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZG9jdW1lbnQkaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gV29ya2VyIHNjcmlwdHNcbiAgICAgIGlmIChhc3NldC5vdXRwdXRGb3JtYXQgPT09ICdlc21vZHVsZScpIHtcbiAgICAgICAgcmV0dXJuIF9fcGFyY2VsX19pbXBvcnRfXyhhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXyhhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCkpO1xuXG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBobXJBcHBseVVwZGF0ZXMoYXNzZXRzKSB7XG4gIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBsZXQgc2NyaXB0c1RvUmVtb3ZlO1xuXG4gIHRyeSB7XG4gICAgLy8gSWYgc291cmNlVVJMIGNvbW1lbnRzIGFyZW4ndCBzdXBwb3J0ZWQgaW4gZXZhbCwgd2UgbmVlZCB0byBsb2FkXG4gICAgLy8gdGhlIHVwZGF0ZSBmcm9tIHRoZSBkZXYgc2VydmVyIG92ZXIgSFRUUCBzbyB0aGF0IHN0YWNrIHRyYWNlc1xuICAgIC8vIGFyZSBjb3JyZWN0IGluIGVycm9ycy9sb2dzLiBUaGlzIGlzIG11Y2ggc2xvd2VyIHRoYW4gZXZhbCwgc29cbiAgICAvLyB3ZSBvbmx5IGRvIGl0IGlmIG5lZWRlZCAoY3VycmVudGx5IGp1c3QgU2FmYXJpKS5cbiAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM3Mjk3XG4gICAgLy8gVGhpcyBwYXRoIGlzIGFsc28gdGFrZW4gaWYgYSBDU1AgZGlzYWxsb3dzIGV2YWwuXG4gICAgaWYgKCFzdXBwb3J0c1NvdXJjZVVSTCkge1xuICAgICAgbGV0IHByb21pc2VzID0gYXNzZXRzLm1hcChhc3NldCA9PiB7XG4gICAgICAgIHZhciBfaG1yRG93bmxvYWQ7XG5cbiAgICAgICAgcmV0dXJuIChfaG1yRG93bmxvYWQgPSBobXJEb3dubG9hZChhc3NldCkpID09PSBudWxsIHx8IF9obXJEb3dubG9hZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2htckRvd25sb2FkLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgLy8gV2ViIGV4dGVuc2lvbiBidWdmaXggZm9yIENocm9taXVtXG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTI1NTQxMiNjMTJcbiAgICAgICAgICBpZiAoZXh0Q3R4ICYmIGV4dEN0eC5ydW50aW1lICYmIGV4dEN0eC5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbiA9PSAzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSAhPSAndW5kZWZpbmVkJyAmJiBnbG9iYWwgaW5zdGFuY2VvZiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUpIHtcbiAgICAgICAgICAgICAgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXNzZXQudXJsID0gZXh0Q3R4LnJ1bnRpbWUuZ2V0VVJMKCcvX19wYXJjZWxfaG1yX3Byb3h5X18/dXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQoYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpKSk7XG4gICAgICAgICAgICByZXR1cm4gaG1yRG93bmxvYWQoYXNzZXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHNjcmlwdHNUb1JlbW92ZSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG5cbiAgICBhc3NldHMuZm9yRWFjaChmdW5jdGlvbiAoYXNzZXQpIHtcbiAgICAgIGhtckFwcGx5KG1vZHVsZS5idW5kbGUucm9vdCwgYXNzZXQpO1xuICAgIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGRlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlO1xuXG4gICAgaWYgKHNjcmlwdHNUb1JlbW92ZSkge1xuICAgICAgc2NyaXB0c1RvUmVtb3ZlLmZvckVhY2goc2NyaXB0ID0+IHtcbiAgICAgICAgaWYgKHNjcmlwdCkge1xuICAgICAgICAgIHZhciBfZG9jdW1lbnQkaGVhZDI7XG5cbiAgICAgICAgICAoX2RvY3VtZW50JGhlYWQyID0gZG9jdW1lbnQuaGVhZCkgPT09IG51bGwgfHwgX2RvY3VtZW50JGhlYWQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZG9jdW1lbnQkaGVhZDIucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhtckFwcGx5KGJ1bmRsZVxuLyo6IFBhcmNlbFJlcXVpcmUgKi9cbiwgYXNzZXRcbi8qOiAgSE1SQXNzZXQgKi9cbikge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChhc3NldC50eXBlID09PSAnY3NzJykge1xuICAgIHJlbG9hZENTUygpO1xuICB9IGVsc2UgaWYgKGFzc2V0LnR5cGUgPT09ICdqcycpIHtcbiAgICBsZXQgZGVwcyA9IGFzc2V0LmRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF07XG5cbiAgICBpZiAoZGVwcykge1xuICAgICAgaWYgKG1vZHVsZXNbYXNzZXQuaWRdKSB7XG4gICAgICAgIC8vIFJlbW92ZSBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgcmVtb3ZlZCBhbmQgd2lsbCBiZWNvbWUgb3JwaGFuZWQuXG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHNvIHRoYXQgaWYgdGhlIGFzc2V0IGlzIGFkZGVkIGJhY2sgYWdhaW4sIHRoZSBjYWNoZSBpcyBnb25lLCBhbmQgd2UgcHJldmVudCBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gICAgICAgIGxldCBvbGREZXBzID0gbW9kdWxlc1thc3NldC5pZF1bMV07XG5cbiAgICAgICAgZm9yIChsZXQgZGVwIGluIG9sZERlcHMpIHtcbiAgICAgICAgICBpZiAoIWRlcHNbZGVwXSB8fCBkZXBzW2RlcF0gIT09IG9sZERlcHNbZGVwXSkge1xuICAgICAgICAgICAgbGV0IGlkID0gb2xkRGVwc1tkZXBdO1xuICAgICAgICAgICAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgaG1yRGVsZXRlKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHNTb3VyY2VVUkwpIHtcbiAgICAgICAgLy8gR2xvYmFsIGV2YWwuIFdlIHdvdWxkIHVzZSBgbmV3IEZ1bmN0aW9uYCBoZXJlIGJ1dCBicm93c2VyXG4gICAgICAgIC8vIHN1cHBvcnQgZm9yIHNvdXJjZSBtYXBzIGlzIGJldHRlciB3aXRoIGV2YWwuXG4gICAgICAgICgwLCBldmFsKShhc3NldC5vdXRwdXQpO1xuICAgICAgfSAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgbGV0IGZuID0gZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVthc3NldC5pZF07XG4gICAgICBtb2R1bGVzW2Fzc2V0LmlkXSA9IFtmbiwgZGVwc107XG4gICAgfSBlbHNlIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgICBobXJBcHBseShidW5kbGUucGFyZW50LCBhc3NldCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhtckRlbGV0ZShidW5kbGUsIGlkKSB7XG4gIGxldCBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG1vZHVsZXNbaWRdKSB7XG4gICAgLy8gQ29sbGVjdCBkZXBlbmRlbmNpZXMgdGhhdCB3aWxsIGJlY29tZSBvcnBoYW5lZCB3aGVuIHRoaXMgbW9kdWxlIGlzIGRlbGV0ZWQuXG4gICAgbGV0IGRlcHMgPSBtb2R1bGVzW2lkXVsxXTtcbiAgICBsZXQgb3JwaGFucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgZGVwIGluIGRlcHMpIHtcbiAgICAgIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGRlcHNbZGVwXSk7XG5cbiAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBvcnBoYW5zLnB1c2goZGVwc1tkZXBdKTtcbiAgICAgIH1cbiAgICB9IC8vIERlbGV0ZSB0aGUgbW9kdWxlLiBUaGlzIG11c3QgYmUgZG9uZSBiZWZvcmUgZGVsZXRpbmcgZGVwZW5kZW5jaWVzIGluIGNhc2Ugb2YgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuXG5cbiAgICBkZWxldGUgbW9kdWxlc1tpZF07XG4gICAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07IC8vIE5vdyBkZWxldGUgdGhlIG9ycGhhbnMuXG5cbiAgICBvcnBoYW5zLmZvckVhY2goaWQgPT4ge1xuICAgICAgaG1yRGVsZXRlKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBobXJEZWxldGUoYnVuZGxlLnBhcmVudCwgaWQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhtckFjY2VwdENoZWNrKGJ1bmRsZVxuLyo6IFBhcmNlbFJlcXVpcmUgKi9cbiwgaWRcbi8qOiBzdHJpbmcgKi9cbiwgZGVwc0J5QnVuZGxlXG4vKjogP3sgW3N0cmluZ106IHsgW3N0cmluZ106IHN0cmluZyB9IH0qL1xuKSB7XG4gIGlmIChobXJBY2NlcHRDaGVja09uZShidW5kbGUsIGlkLCBkZXBzQnlCdW5kbGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gVHJhdmVyc2UgcGFyZW50cyBicmVhZHRoIGZpcnN0LiBBbGwgcG9zc2libGUgYW5jZXN0cmllcyBtdXN0IGFjY2VwdCB0aGUgSE1SIHVwZGF0ZSwgb3Igd2UnbGwgcmVsb2FkLlxuXG5cbiAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICBsZXQgYWNjZXB0ZWQgPSBmYWxzZTtcblxuICB3aGlsZSAocGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IHYgPSBwYXJlbnRzLnNoaWZ0KCk7XG4gICAgbGV0IGEgPSBobXJBY2NlcHRDaGVja09uZSh2WzBdLCB2WzFdLCBudWxsKTtcblxuICAgIGlmIChhKSB7XG4gICAgICAvLyBJZiB0aGlzIHBhcmVudCBhY2NlcHRzLCBzdG9wIHRyYXZlcnNpbmcgdXB3YXJkLCBidXQgc3RpbGwgY29uc2lkZXIgc2libGluZ3MuXG4gICAgICBhY2NlcHRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSwgcXVldWUgdGhlIHBhcmVudHMgaW4gdGhlIG5leHQgbGV2ZWwgdXB3YXJkLlxuICAgICAgbGV0IHAgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgdlsxXSk7XG5cbiAgICAgIGlmIChwLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gcGFyZW50cywgdGhlbiB3ZSd2ZSByZWFjaGVkIGFuIGVudHJ5IHdpdGhvdXQgYWNjZXB0aW5nLiBSZWxvYWQuXG4gICAgICAgIGFjY2VwdGVkID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnRzLnB1c2goLi4ucCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFjY2VwdGVkO1xufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRDaGVja09uZShidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4sIGRlcHNCeUJ1bmRsZVxuLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki9cbikge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkZXBzQnlCdW5kbGUgJiYgIWRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF0pIHtcbiAgICAvLyBJZiB3ZSByZWFjaGVkIHRoZSByb290IGJ1bmRsZSB3aXRob3V0IGZpbmRpbmcgd2hlcmUgdGhlIGFzc2V0IHNob3VsZCBnbyxcbiAgICAvLyB0aGVyZSdzIG5vdGhpbmcgdG8gZG8uIE1hcmsgYXMgXCJhY2NlcHRlZFwiIHNvIHdlIGRvbid0IHJlbG9hZCB0aGUgcGFnZS5cbiAgICBpZiAoIWJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBobXJBY2NlcHRDaGVjayhidW5kbGUucGFyZW50LCBpZCwgZGVwc0J5QnVuZGxlKTtcbiAgfVxuXG4gIGlmIChjaGVja2VkQXNzZXRzW2lkXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY2hlY2tlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYXNzZXRzVG9BY2NlcHQucHVzaChbYnVuZGxlLCBpZF0pO1xuXG4gIGlmICghY2FjaGVkIHx8IGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhtckFjY2VwdFJ1bihidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4pIHtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZS5ob3REYXRhID0ge307XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90KSB7XG4gICAgY2FjaGVkLmhvdC5kYXRhID0gYnVuZGxlLmhvdERhdGE7XG4gIH1cblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICBjYihidW5kbGUuaG90RGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUgYnVuZGxlLmNhY2hlW2lkXTtcbiAgYnVuZGxlKGlkKTtcbiAgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgdmFyIGFzc2V0c1RvQWxzb0FjY2VwdCA9IGNiKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFzc2V0c1RvQWxzb0FjY2VwdCAmJiBhc3NldHNUb0FjY2VwdC5sZW5ndGgpIHtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVttZXRob2QtdW5iaW5kaW5nXVxuICAgICAgICBhc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGFzc2V0c1RvQWNjZXB0LCBhc3NldHNUb0Fsc29BY2NlcHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWNjZXB0ZWRBc3NldHNbaWRdID0gdHJ1ZTtcbn0iLCJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gXCIuLi9sb2dnZXJcIjtcbmltcG9ydCB7IE1lc3NhZ2VUeXBlLCBNZXNzc2FnZSB9IGZyb20gXCIuLi9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgYWRkTm90ZUhhbmRsZXIgfSBmcm9tIFwiLi9hZGROb3RlSGFuZGxlclwiO1xuaW1wb3J0IHsgZGVja05hbWVzSGFuZGxlciB9IGZyb20gXCIuL2RlY2tOYW1lc0hhbmRsZXJcIjtcblxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoYXN5bmMgKG1lc3NhZ2U6IE1lc3NzYWdlKSA9PiB7XG4gIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgY2FzZSBNZXNzYWdlVHlwZS5hZGROb3RlOiB7XG4gICAgICBhZGROb3RlSGFuZGxlcihtZXNzYWdlKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIE1lc3NhZ2VUeXBlLmRlY2tOYW1lczoge1xuICAgICAgZGVja05hbWVzSGFuZGxlcihtZXNzYWdlKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgbG9nZ2VyLmVycm9yKG1lc3NhZ2UsIGBVbmV4cGVjdGVkIG1lc3NhZ2UgdHlwZTogJHttZXNzYWdlLnR5cGV9YCk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IHBpbm8gZnJvbSBcInBpbm9cIjtcblxuZXhwb3J0IGNvbnN0IGxvZ2dlciA9IHBpbm8oKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBmb3JtYXQgPSByZXF1aXJlKCdxdWljay1mb3JtYXQtdW5lc2NhcGVkJylcblxubW9kdWxlLmV4cG9ydHMgPSBwaW5vXG5cbmNvbnN0IF9jb25zb2xlID0gcGZHbG9iYWxUaGlzT3JGYWxsYmFjaygpLmNvbnNvbGUgfHwge31cbmNvbnN0IHN0ZFNlcmlhbGl6ZXJzID0ge1xuICBtYXBIdHRwUmVxdWVzdDogbW9jayxcbiAgbWFwSHR0cFJlc3BvbnNlOiBtb2NrLFxuICB3cmFwUmVxdWVzdFNlcmlhbGl6ZXI6IHBhc3N0aHJvdWdoLFxuICB3cmFwUmVzcG9uc2VTZXJpYWxpemVyOiBwYXNzdGhyb3VnaCxcbiAgd3JhcEVycm9yU2VyaWFsaXplcjogcGFzc3Rocm91Z2gsXG4gIHJlcTogbW9jayxcbiAgcmVzOiBtb2NrLFxuICBlcnI6IGFzRXJyVmFsdWVcbn1cblxuZnVuY3Rpb24gc2hvdWxkU2VyaWFsaXplIChzZXJpYWxpemUsIHNlcmlhbGl6ZXJzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHNlcmlhbGl6ZSkpIHtcbiAgICBjb25zdCBoYXNUb0ZpbHRlciA9IHNlcmlhbGl6ZS5maWx0ZXIoZnVuY3Rpb24gKGspIHtcbiAgICAgIHJldHVybiBrICE9PSAnIXN0ZFNlcmlhbGl6ZXJzLmVycidcbiAgICB9KVxuICAgIHJldHVybiBoYXNUb0ZpbHRlclxuICB9IGVsc2UgaWYgKHNlcmlhbGl6ZSA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzZXJpYWxpemVycylcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwaW5vIChvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9XG4gIG9wdHMuYnJvd3NlciA9IG9wdHMuYnJvd3NlciB8fCB7fVxuXG4gIGNvbnN0IHRyYW5zbWl0ID0gb3B0cy5icm93c2VyLnRyYW5zbWl0XG4gIGlmICh0cmFuc21pdCAmJiB0eXBlb2YgdHJhbnNtaXQuc2VuZCAhPT0gJ2Z1bmN0aW9uJykgeyB0aHJvdyBFcnJvcigncGlubzogdHJhbnNtaXQgb3B0aW9uIG11c3QgaGF2ZSBhIHNlbmQgZnVuY3Rpb24nKSB9XG5cbiAgY29uc3QgcHJvdG8gPSBvcHRzLmJyb3dzZXIud3JpdGUgfHwgX2NvbnNvbGVcbiAgaWYgKG9wdHMuYnJvd3Nlci53cml0ZSkgb3B0cy5icm93c2VyLmFzT2JqZWN0ID0gdHJ1ZVxuICBjb25zdCBzZXJpYWxpemVycyA9IG9wdHMuc2VyaWFsaXplcnMgfHwge31cbiAgY29uc3Qgc2VyaWFsaXplID0gc2hvdWxkU2VyaWFsaXplKG9wdHMuYnJvd3Nlci5zZXJpYWxpemUsIHNlcmlhbGl6ZXJzKVxuICBsZXQgc3RkRXJyU2VyaWFsaXplID0gb3B0cy5icm93c2VyLnNlcmlhbGl6ZVxuXG4gIGlmIChcbiAgICBBcnJheS5pc0FycmF5KG9wdHMuYnJvd3Nlci5zZXJpYWxpemUpICYmXG4gICAgb3B0cy5icm93c2VyLnNlcmlhbGl6ZS5pbmRleE9mKCchc3RkU2VyaWFsaXplcnMuZXJyJykgPiAtMVxuICApIHN0ZEVyclNlcmlhbGl6ZSA9IGZhbHNlXG5cbiAgY29uc3QgbGV2ZWxzID0gWydlcnJvcicsICdmYXRhbCcsICd3YXJuJywgJ2luZm8nLCAnZGVidWcnLCAndHJhY2UnXVxuXG4gIGlmICh0eXBlb2YgcHJvdG8gPT09ICdmdW5jdGlvbicpIHtcbiAgICBwcm90by5lcnJvciA9IHByb3RvLmZhdGFsID0gcHJvdG8ud2FybiA9XG4gICAgcHJvdG8uaW5mbyA9IHByb3RvLmRlYnVnID0gcHJvdG8udHJhY2UgPSBwcm90b1xuICB9XG4gIGlmIChvcHRzLmVuYWJsZWQgPT09IGZhbHNlKSBvcHRzLmxldmVsID0gJ3NpbGVudCdcbiAgY29uc3QgbGV2ZWwgPSBvcHRzLmxldmVsIHx8ICdpbmZvJ1xuICBjb25zdCBsb2dnZXIgPSBPYmplY3QuY3JlYXRlKHByb3RvKVxuICBpZiAoIWxvZ2dlci5sb2cpIGxvZ2dlci5sb2cgPSBub29wXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxvZ2dlciwgJ2xldmVsVmFsJywge1xuICAgIGdldDogZ2V0TGV2ZWxWYWxcbiAgfSlcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxvZ2dlciwgJ2xldmVsJywge1xuICAgIGdldDogZ2V0TGV2ZWwsXG4gICAgc2V0OiBzZXRMZXZlbFxuICB9KVxuXG4gIGNvbnN0IHNldE9wdHMgPSB7XG4gICAgdHJhbnNtaXQsXG4gICAgc2VyaWFsaXplLFxuICAgIGFzT2JqZWN0OiBvcHRzLmJyb3dzZXIuYXNPYmplY3QsXG4gICAgbGV2ZWxzLFxuICAgIHRpbWVzdGFtcDogZ2V0VGltZUZ1bmN0aW9uKG9wdHMpXG4gIH1cbiAgbG9nZ2VyLmxldmVscyA9IHBpbm8ubGV2ZWxzXG4gIGxvZ2dlci5sZXZlbCA9IGxldmVsXG5cbiAgbG9nZ2VyLnNldE1heExpc3RlbmVycyA9IGxvZ2dlci5nZXRNYXhMaXN0ZW5lcnMgPVxuICBsb2dnZXIuZW1pdCA9IGxvZ2dlci5hZGRMaXN0ZW5lciA9IGxvZ2dlci5vbiA9XG4gIGxvZ2dlci5wcmVwZW5kTGlzdGVuZXIgPSBsb2dnZXIub25jZSA9XG4gIGxvZ2dlci5wcmVwZW5kT25jZUxpc3RlbmVyID0gbG9nZ2VyLnJlbW92ZUxpc3RlbmVyID1cbiAgbG9nZ2VyLnJlbW92ZUFsbExpc3RlbmVycyA9IGxvZ2dlci5saXN0ZW5lcnMgPVxuICBsb2dnZXIubGlzdGVuZXJDb3VudCA9IGxvZ2dlci5ldmVudE5hbWVzID1cbiAgbG9nZ2VyLndyaXRlID0gbG9nZ2VyLmZsdXNoID0gbm9vcFxuICBsb2dnZXIuc2VyaWFsaXplcnMgPSBzZXJpYWxpemVyc1xuICBsb2dnZXIuX3NlcmlhbGl6ZSA9IHNlcmlhbGl6ZVxuICBsb2dnZXIuX3N0ZEVyclNlcmlhbGl6ZSA9IHN0ZEVyclNlcmlhbGl6ZVxuICBsb2dnZXIuY2hpbGQgPSBjaGlsZFxuXG4gIGlmICh0cmFuc21pdCkgbG9nZ2VyLl9sb2dFdmVudCA9IGNyZWF0ZUxvZ0V2ZW50U2hhcGUoKVxuXG4gIGZ1bmN0aW9uIGdldExldmVsVmFsICgpIHtcbiAgICByZXR1cm4gdGhpcy5sZXZlbCA9PT0gJ3NpbGVudCdcbiAgICAgID8gSW5maW5pdHlcbiAgICAgIDogdGhpcy5sZXZlbHMudmFsdWVzW3RoaXMubGV2ZWxdXG4gIH1cblxuICBmdW5jdGlvbiBnZXRMZXZlbCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsXG4gIH1cbiAgZnVuY3Rpb24gc2V0TGV2ZWwgKGxldmVsKSB7XG4gICAgaWYgKGxldmVsICE9PSAnc2lsZW50JyAmJiAhdGhpcy5sZXZlbHMudmFsdWVzW2xldmVsXSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ3Vua25vd24gbGV2ZWwgJyArIGxldmVsKVxuICAgIH1cbiAgICB0aGlzLl9sZXZlbCA9IGxldmVsXG5cbiAgICBzZXQoc2V0T3B0cywgbG9nZ2VyLCAnZXJyb3InLCAnbG9nJykgLy8gPC0tIG11c3Qgc3RheSBmaXJzdFxuICAgIHNldChzZXRPcHRzLCBsb2dnZXIsICdmYXRhbCcsICdlcnJvcicpXG4gICAgc2V0KHNldE9wdHMsIGxvZ2dlciwgJ3dhcm4nLCAnZXJyb3InKVxuICAgIHNldChzZXRPcHRzLCBsb2dnZXIsICdpbmZvJywgJ2xvZycpXG4gICAgc2V0KHNldE9wdHMsIGxvZ2dlciwgJ2RlYnVnJywgJ2xvZycpXG4gICAgc2V0KHNldE9wdHMsIGxvZ2dlciwgJ3RyYWNlJywgJ2xvZycpXG4gIH1cblxuICBmdW5jdGlvbiBjaGlsZCAoYmluZGluZ3MsIGNoaWxkT3B0aW9ucykge1xuICAgIGlmICghYmluZGluZ3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBiaW5kaW5ncyBmb3IgY2hpbGQgUGlubycpXG4gICAgfVxuICAgIGNoaWxkT3B0aW9ucyA9IGNoaWxkT3B0aW9ucyB8fCB7fVxuICAgIGlmIChzZXJpYWxpemUgJiYgYmluZGluZ3Muc2VyaWFsaXplcnMpIHtcbiAgICAgIGNoaWxkT3B0aW9ucy5zZXJpYWxpemVycyA9IGJpbmRpbmdzLnNlcmlhbGl6ZXJzXG4gICAgfVxuICAgIGNvbnN0IGNoaWxkT3B0aW9uc1NlcmlhbGl6ZXJzID0gY2hpbGRPcHRpb25zLnNlcmlhbGl6ZXJzXG4gICAgaWYgKHNlcmlhbGl6ZSAmJiBjaGlsZE9wdGlvbnNTZXJpYWxpemVycykge1xuICAgICAgdmFyIGNoaWxkU2VyaWFsaXplcnMgPSBPYmplY3QuYXNzaWduKHt9LCBzZXJpYWxpemVycywgY2hpbGRPcHRpb25zU2VyaWFsaXplcnMpXG4gICAgICB2YXIgY2hpbGRTZXJpYWxpemUgPSBvcHRzLmJyb3dzZXIuc2VyaWFsaXplID09PSB0cnVlXG4gICAgICAgID8gT2JqZWN0LmtleXMoY2hpbGRTZXJpYWxpemVycylcbiAgICAgICAgOiBzZXJpYWxpemVcbiAgICAgIGRlbGV0ZSBiaW5kaW5ncy5zZXJpYWxpemVyc1xuICAgICAgYXBwbHlTZXJpYWxpemVycyhbYmluZGluZ3NdLCBjaGlsZFNlcmlhbGl6ZSwgY2hpbGRTZXJpYWxpemVycywgdGhpcy5fc3RkRXJyU2VyaWFsaXplKVxuICAgIH1cbiAgICBmdW5jdGlvbiBDaGlsZCAocGFyZW50KSB7XG4gICAgICB0aGlzLl9jaGlsZExldmVsID0gKHBhcmVudC5fY2hpbGRMZXZlbCB8IDApICsgMVxuICAgICAgdGhpcy5lcnJvciA9IGJpbmQocGFyZW50LCBiaW5kaW5ncywgJ2Vycm9yJylcbiAgICAgIHRoaXMuZmF0YWwgPSBiaW5kKHBhcmVudCwgYmluZGluZ3MsICdmYXRhbCcpXG4gICAgICB0aGlzLndhcm4gPSBiaW5kKHBhcmVudCwgYmluZGluZ3MsICd3YXJuJylcbiAgICAgIHRoaXMuaW5mbyA9IGJpbmQocGFyZW50LCBiaW5kaW5ncywgJ2luZm8nKVxuICAgICAgdGhpcy5kZWJ1ZyA9IGJpbmQocGFyZW50LCBiaW5kaW5ncywgJ2RlYnVnJylcbiAgICAgIHRoaXMudHJhY2UgPSBiaW5kKHBhcmVudCwgYmluZGluZ3MsICd0cmFjZScpXG4gICAgICBpZiAoY2hpbGRTZXJpYWxpemVycykge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZXJzID0gY2hpbGRTZXJpYWxpemVyc1xuICAgICAgICB0aGlzLl9zZXJpYWxpemUgPSBjaGlsZFNlcmlhbGl6ZVxuICAgICAgfVxuICAgICAgaWYgKHRyYW5zbWl0KSB7XG4gICAgICAgIHRoaXMuX2xvZ0V2ZW50ID0gY3JlYXRlTG9nRXZlbnRTaGFwZShcbiAgICAgICAgICBbXS5jb25jYXQocGFyZW50Ll9sb2dFdmVudC5iaW5kaW5ncywgYmluZGluZ3MpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgQ2hpbGQucHJvdG90eXBlID0gdGhpc1xuICAgIHJldHVybiBuZXcgQ2hpbGQodGhpcylcbiAgfVxuICByZXR1cm4gbG9nZ2VyXG59XG5cbnBpbm8ubGV2ZWxzID0ge1xuICB2YWx1ZXM6IHtcbiAgICBmYXRhbDogNjAsXG4gICAgZXJyb3I6IDUwLFxuICAgIHdhcm46IDQwLFxuICAgIGluZm86IDMwLFxuICAgIGRlYnVnOiAyMCxcbiAgICB0cmFjZTogMTBcbiAgfSxcbiAgbGFiZWxzOiB7XG4gICAgMTA6ICd0cmFjZScsXG4gICAgMjA6ICdkZWJ1ZycsXG4gICAgMzA6ICdpbmZvJyxcbiAgICA0MDogJ3dhcm4nLFxuICAgIDUwOiAnZXJyb3InLFxuICAgIDYwOiAnZmF0YWwnXG4gIH1cbn1cblxucGluby5zdGRTZXJpYWxpemVycyA9IHN0ZFNlcmlhbGl6ZXJzXG5waW5vLnN0ZFRpbWVGdW5jdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB7IG51bGxUaW1lLCBlcG9jaFRpbWUsIHVuaXhUaW1lLCBpc29UaW1lIH0pXG5cbmZ1bmN0aW9uIHNldCAob3B0cywgbG9nZ2VyLCBsZXZlbCwgZmFsbGJhY2spIHtcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YobG9nZ2VyKVxuICBsb2dnZXJbbGV2ZWxdID0gbG9nZ2VyLmxldmVsVmFsID4gbG9nZ2VyLmxldmVscy52YWx1ZXNbbGV2ZWxdXG4gICAgPyBub29wXG4gICAgOiAocHJvdG9bbGV2ZWxdID8gcHJvdG9bbGV2ZWxdIDogKF9jb25zb2xlW2xldmVsXSB8fCBfY29uc29sZVtmYWxsYmFja10gfHwgbm9vcCkpXG5cbiAgd3JhcChvcHRzLCBsb2dnZXIsIGxldmVsKVxufVxuXG5mdW5jdGlvbiB3cmFwIChvcHRzLCBsb2dnZXIsIGxldmVsKSB7XG4gIGlmICghb3B0cy50cmFuc21pdCAmJiBsb2dnZXJbbGV2ZWxdID09PSBub29wKSByZXR1cm5cblxuICBsb2dnZXJbbGV2ZWxdID0gKGZ1bmN0aW9uICh3cml0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBMT0cgKCkge1xuICAgICAgY29uc3QgdHMgPSBvcHRzLnRpbWVzdGFtcCgpXG4gICAgICBjb25zdCBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpXG4gICAgICBjb25zdCBwcm90byA9IChPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpID09PSBfY29uc29sZSkgPyBfY29uc29sZSA6IHRoaXNcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICBpZiAob3B0cy5zZXJpYWxpemUgJiYgIW9wdHMuYXNPYmplY3QpIHtcbiAgICAgICAgYXBwbHlTZXJpYWxpemVycyhhcmdzLCB0aGlzLl9zZXJpYWxpemUsIHRoaXMuc2VyaWFsaXplcnMsIHRoaXMuX3N0ZEVyclNlcmlhbGl6ZSlcbiAgICAgIH1cbiAgICAgIGlmIChvcHRzLmFzT2JqZWN0KSB3cml0ZS5jYWxsKHByb3RvLCBhc09iamVjdCh0aGlzLCBsZXZlbCwgYXJncywgdHMpKVxuICAgICAgZWxzZSB3cml0ZS5hcHBseShwcm90bywgYXJncylcblxuICAgICAgaWYgKG9wdHMudHJhbnNtaXQpIHtcbiAgICAgICAgY29uc3QgdHJhbnNtaXRMZXZlbCA9IG9wdHMudHJhbnNtaXQubGV2ZWwgfHwgbG9nZ2VyLmxldmVsXG4gICAgICAgIGNvbnN0IHRyYW5zbWl0VmFsdWUgPSBwaW5vLmxldmVscy52YWx1ZXNbdHJhbnNtaXRMZXZlbF1cbiAgICAgICAgY29uc3QgbWV0aG9kVmFsdWUgPSBwaW5vLmxldmVscy52YWx1ZXNbbGV2ZWxdXG4gICAgICAgIGlmIChtZXRob2RWYWx1ZSA8IHRyYW5zbWl0VmFsdWUpIHJldHVyblxuICAgICAgICB0cmFuc21pdCh0aGlzLCB7XG4gICAgICAgICAgdHMsXG4gICAgICAgICAgbWV0aG9kTGV2ZWw6IGxldmVsLFxuICAgICAgICAgIG1ldGhvZFZhbHVlLFxuICAgICAgICAgIHRyYW5zbWl0TGV2ZWwsXG4gICAgICAgICAgdHJhbnNtaXRWYWx1ZTogcGluby5sZXZlbHMudmFsdWVzW29wdHMudHJhbnNtaXQubGV2ZWwgfHwgbG9nZ2VyLmxldmVsXSxcbiAgICAgICAgICBzZW5kOiBvcHRzLnRyYW5zbWl0LnNlbmQsXG4gICAgICAgICAgdmFsOiBsb2dnZXIubGV2ZWxWYWxcbiAgICAgICAgfSwgYXJncylcbiAgICAgIH1cbiAgICB9XG4gIH0pKGxvZ2dlcltsZXZlbF0pXG59XG5cbmZ1bmN0aW9uIGFzT2JqZWN0IChsb2dnZXIsIGxldmVsLCBhcmdzLCB0cykge1xuICBpZiAobG9nZ2VyLl9zZXJpYWxpemUpIGFwcGx5U2VyaWFsaXplcnMoYXJncywgbG9nZ2VyLl9zZXJpYWxpemUsIGxvZ2dlci5zZXJpYWxpemVycywgbG9nZ2VyLl9zdGRFcnJTZXJpYWxpemUpXG4gIGNvbnN0IGFyZ3NDbG9uZWQgPSBhcmdzLnNsaWNlKClcbiAgbGV0IG1zZyA9IGFyZ3NDbG9uZWRbMF1cbiAgY29uc3QgbyA9IHt9XG4gIGlmICh0cykge1xuICAgIG8udGltZSA9IHRzXG4gIH1cbiAgby5sZXZlbCA9IHBpbm8ubGV2ZWxzLnZhbHVlc1tsZXZlbF1cbiAgbGV0IGx2bCA9IChsb2dnZXIuX2NoaWxkTGV2ZWwgfCAwKSArIDFcbiAgaWYgKGx2bCA8IDEpIGx2bCA9IDFcbiAgLy8gZGVsaWJlcmF0ZSwgY2F0Y2hpbmcgb2JqZWN0cywgYXJyYXlzXG4gIGlmIChtc2cgIT09IG51bGwgJiYgdHlwZW9mIG1zZyA9PT0gJ29iamVjdCcpIHtcbiAgICB3aGlsZSAobHZsLS0gJiYgdHlwZW9mIGFyZ3NDbG9uZWRbMF0gPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3QuYXNzaWduKG8sIGFyZ3NDbG9uZWQuc2hpZnQoKSlcbiAgICB9XG4gICAgbXNnID0gYXJnc0Nsb25lZC5sZW5ndGggPyBmb3JtYXQoYXJnc0Nsb25lZC5zaGlmdCgpLCBhcmdzQ2xvbmVkKSA6IHVuZGVmaW5lZFxuICB9IGVsc2UgaWYgKHR5cGVvZiBtc2cgPT09ICdzdHJpbmcnKSBtc2cgPSBmb3JtYXQoYXJnc0Nsb25lZC5zaGlmdCgpLCBhcmdzQ2xvbmVkKVxuICBpZiAobXNnICE9PSB1bmRlZmluZWQpIG8ubXNnID0gbXNnXG4gIHJldHVybiBvXG59XG5cbmZ1bmN0aW9uIGFwcGx5U2VyaWFsaXplcnMgKGFyZ3MsIHNlcmlhbGl6ZSwgc2VyaWFsaXplcnMsIHN0ZEVyclNlcmlhbGl6ZSkge1xuICBmb3IgKGNvbnN0IGkgaW4gYXJncykge1xuICAgIGlmIChzdGRFcnJTZXJpYWxpemUgJiYgYXJnc1tpXSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBhcmdzW2ldID0gcGluby5zdGRTZXJpYWxpemVycy5lcnIoYXJnc1tpXSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmdzW2ldID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShhcmdzW2ldKSkge1xuICAgICAgZm9yIChjb25zdCBrIGluIGFyZ3NbaV0pIHtcbiAgICAgICAgaWYgKHNlcmlhbGl6ZSAmJiBzZXJpYWxpemUuaW5kZXhPZihrKSA+IC0xICYmIGsgaW4gc2VyaWFsaXplcnMpIHtcbiAgICAgICAgICBhcmdzW2ldW2tdID0gc2VyaWFsaXplcnNba10oYXJnc1tpXVtrXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBiaW5kIChwYXJlbnQsIGJpbmRpbmdzLCBsZXZlbCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFyZ3MgPSBuZXcgQXJyYXkoMSArIGFyZ3VtZW50cy5sZW5ndGgpXG4gICAgYXJnc1swXSA9IGJpbmRpbmdzXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgLSAxXVxuICAgIH1cbiAgICByZXR1cm4gcGFyZW50W2xldmVsXS5hcHBseSh0aGlzLCBhcmdzKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zbWl0IChsb2dnZXIsIG9wdHMsIGFyZ3MpIHtcbiAgY29uc3Qgc2VuZCA9IG9wdHMuc2VuZFxuICBjb25zdCB0cyA9IG9wdHMudHNcbiAgY29uc3QgbWV0aG9kTGV2ZWwgPSBvcHRzLm1ldGhvZExldmVsXG4gIGNvbnN0IG1ldGhvZFZhbHVlID0gb3B0cy5tZXRob2RWYWx1ZVxuICBjb25zdCB2YWwgPSBvcHRzLnZhbFxuICBjb25zdCBiaW5kaW5ncyA9IGxvZ2dlci5fbG9nRXZlbnQuYmluZGluZ3NcblxuICBhcHBseVNlcmlhbGl6ZXJzKFxuICAgIGFyZ3MsXG4gICAgbG9nZ2VyLl9zZXJpYWxpemUgfHwgT2JqZWN0LmtleXMobG9nZ2VyLnNlcmlhbGl6ZXJzKSxcbiAgICBsb2dnZXIuc2VyaWFsaXplcnMsXG4gICAgbG9nZ2VyLl9zdGRFcnJTZXJpYWxpemUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBsb2dnZXIuX3N0ZEVyclNlcmlhbGl6ZVxuICApXG4gIGxvZ2dlci5fbG9nRXZlbnQudHMgPSB0c1xuICBsb2dnZXIuX2xvZ0V2ZW50Lm1lc3NhZ2VzID0gYXJncy5maWx0ZXIoZnVuY3Rpb24gKGFyZykge1xuICAgIC8vIGJpbmRpbmdzIGNhbiBvbmx5IGJlIG9iamVjdHMsIHNvIHJlZmVyZW5jZSBlcXVhbGl0eSBjaGVjayB2aWEgaW5kZXhPZiBpcyBmaW5lXG4gICAgcmV0dXJuIGJpbmRpbmdzLmluZGV4T2YoYXJnKSA9PT0gLTFcbiAgfSlcblxuICBsb2dnZXIuX2xvZ0V2ZW50LmxldmVsLmxhYmVsID0gbWV0aG9kTGV2ZWxcbiAgbG9nZ2VyLl9sb2dFdmVudC5sZXZlbC52YWx1ZSA9IG1ldGhvZFZhbHVlXG5cbiAgc2VuZChtZXRob2RMZXZlbCwgbG9nZ2VyLl9sb2dFdmVudCwgdmFsKVxuXG4gIGxvZ2dlci5fbG9nRXZlbnQgPSBjcmVhdGVMb2dFdmVudFNoYXBlKGJpbmRpbmdzKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2dFdmVudFNoYXBlIChiaW5kaW5ncykge1xuICByZXR1cm4ge1xuICAgIHRzOiAwLFxuICAgIG1lc3NhZ2VzOiBbXSxcbiAgICBiaW5kaW5nczogYmluZGluZ3MgfHwgW10sXG4gICAgbGV2ZWw6IHsgbGFiZWw6ICcnLCB2YWx1ZTogMCB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNFcnJWYWx1ZSAoZXJyKSB7XG4gIGNvbnN0IG9iaiA9IHtcbiAgICB0eXBlOiBlcnIuY29uc3RydWN0b3IubmFtZSxcbiAgICBtc2c6IGVyci5tZXNzYWdlLFxuICAgIHN0YWNrOiBlcnIuc3RhY2tcbiAgfVxuICBmb3IgKGNvbnN0IGtleSBpbiBlcnIpIHtcbiAgICBpZiAob2JqW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgb2JqW2tleV0gPSBlcnJba2V5XVxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqXG59XG5cbmZ1bmN0aW9uIGdldFRpbWVGdW5jdGlvbiAob3B0cykge1xuICBpZiAodHlwZW9mIG9wdHMudGltZXN0YW1wID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG9wdHMudGltZXN0YW1wXG4gIH1cbiAgaWYgKG9wdHMudGltZXN0YW1wID09PSBmYWxzZSkge1xuICAgIHJldHVybiBudWxsVGltZVxuICB9XG4gIHJldHVybiBlcG9jaFRpbWVcbn1cblxuZnVuY3Rpb24gbW9jayAoKSB7IHJldHVybiB7fSB9XG5mdW5jdGlvbiBwYXNzdGhyb3VnaCAoYSkgeyByZXR1cm4gYSB9XG5mdW5jdGlvbiBub29wICgpIHt9XG5cbmZ1bmN0aW9uIG51bGxUaW1lICgpIHsgcmV0dXJuIGZhbHNlIH1cbmZ1bmN0aW9uIGVwb2NoVGltZSAoKSB7IHJldHVybiBEYXRlLm5vdygpIH1cbmZ1bmN0aW9uIHVuaXhUaW1lICgpIHsgcmV0dXJuIE1hdGgucm91bmQoRGF0ZS5ub3coKSAvIDEwMDAuMCkgfVxuZnVuY3Rpb24gaXNvVGltZSAoKSB7IHJldHVybiBuZXcgRGF0ZShEYXRlLm5vdygpKS50b0lTT1N0cmluZygpIH0gLy8gdXNpbmcgRGF0ZS5ub3coKSBmb3IgdGVzdGFiaWxpdHlcblxuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBwZkdsb2JhbFRoaXNPckZhbGxiYWNrICgpIHtcbiAgZnVuY3Rpb24gZGVmZCAobykgeyByZXR1cm4gdHlwZW9mIG8gIT09ICd1bmRlZmluZWQnICYmIG8gfVxuICB0cnkge1xuICAgIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBnbG9iYWxUaGlzXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsICdnbG9iYWxUaGlzJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlbGV0ZSBPYmplY3QucHJvdG90eXBlLmdsb2JhbFRoaXNcbiAgICAgICAgcmV0dXJuICh0aGlzLmdsb2JhbFRoaXMgPSB0aGlzKVxuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pXG4gICAgcmV0dXJuIGdsb2JhbFRoaXNcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBkZWZkKHNlbGYpIHx8IGRlZmQod2luZG93KSB8fCBkZWZkKHRoaXMpIHx8IHt9XG4gIH1cbn1cbi8qIGVzbGludC1lbmFibGUgKi9cbiIsIid1c2Ugc3RyaWN0J1xuZnVuY3Rpb24gdHJ5U3RyaW5naWZ5IChvKSB7XG4gIHRyeSB7IHJldHVybiBKU09OLnN0cmluZ2lmeShvKSB9IGNhdGNoKGUpIHsgcmV0dXJuICdcIltDaXJjdWxhcl1cIicgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdFxuXG5mdW5jdGlvbiBmb3JtYXQoZiwgYXJncywgb3B0cykge1xuICB2YXIgc3MgPSAob3B0cyAmJiBvcHRzLnN0cmluZ2lmeSkgfHwgdHJ5U3RyaW5naWZ5XG4gIHZhciBvZmZzZXQgPSAxXG4gIGlmICh0eXBlb2YgZiA9PT0gJ29iamVjdCcgJiYgZiAhPT0gbnVsbCkge1xuICAgIHZhciBsZW4gPSBhcmdzLmxlbmd0aCArIG9mZnNldFxuICAgIGlmIChsZW4gPT09IDEpIHJldHVybiBmXG4gICAgdmFyIG9iamVjdHMgPSBuZXcgQXJyYXkobGVuKVxuICAgIG9iamVjdHNbMF0gPSBzcyhmKVxuICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcbiAgICAgIG9iamVjdHNbaW5kZXhdID0gc3MoYXJnc1tpbmRleF0pXG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKVxuICB9XG4gIGlmICh0eXBlb2YgZiAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZlxuICB9XG4gIHZhciBhcmdMZW4gPSBhcmdzLmxlbmd0aFxuICBpZiAoYXJnTGVuID09PSAwKSByZXR1cm4gZlxuICB2YXIgc3RyID0gJydcbiAgdmFyIGEgPSAxIC0gb2Zmc2V0XG4gIHZhciBsYXN0UG9zID0gLTFcbiAgdmFyIGZsZW4gPSAoZiAmJiBmLmxlbmd0aCkgfHwgMFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZsZW47KSB7XG4gICAgaWYgKGYuY2hhckNvZGVBdChpKSA9PT0gMzcgJiYgaSArIDEgPCBmbGVuKSB7XG4gICAgICBsYXN0UG9zID0gbGFzdFBvcyA+IC0xID8gbGFzdFBvcyA6IDBcbiAgICAgIHN3aXRjaCAoZi5jaGFyQ29kZUF0KGkgKyAxKSkge1xuICAgICAgICBjYXNlIDEwMDogLy8gJ2QnXG4gICAgICAgIGNhc2UgMTAyOiAvLyAnZidcbiAgICAgICAgICBpZiAoYSA+PSBhcmdMZW4pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGlmIChhcmdzW2FdID09IG51bGwpICBicmVha1xuICAgICAgICAgIGlmIChsYXN0UG9zIDwgaSlcbiAgICAgICAgICAgIHN0ciArPSBmLnNsaWNlKGxhc3RQb3MsIGkpXG4gICAgICAgICAgc3RyICs9IE51bWJlcihhcmdzW2FdKVxuICAgICAgICAgIGxhc3RQb3MgPSBpICsgMlxuICAgICAgICAgIGkrK1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMTA1OiAvLyAnaSdcbiAgICAgICAgICBpZiAoYSA+PSBhcmdMZW4pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGlmIChhcmdzW2FdID09IG51bGwpICBicmVha1xuICAgICAgICAgIGlmIChsYXN0UG9zIDwgaSlcbiAgICAgICAgICAgIHN0ciArPSBmLnNsaWNlKGxhc3RQb3MsIGkpXG4gICAgICAgICAgc3RyICs9IE1hdGguZmxvb3IoTnVtYmVyKGFyZ3NbYV0pKVxuICAgICAgICAgIGxhc3RQb3MgPSBpICsgMlxuICAgICAgICAgIGkrK1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNzk6IC8vICdPJ1xuICAgICAgICBjYXNlIDExMTogLy8gJ28nXG4gICAgICAgIGNhc2UgMTA2OiAvLyAnaidcbiAgICAgICAgICBpZiAoYSA+PSBhcmdMZW4pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGlmIChhcmdzW2FdID09PSB1bmRlZmluZWQpIGJyZWFrXG4gICAgICAgICAgaWYgKGxhc3RQb3MgPCBpKVxuICAgICAgICAgICAgc3RyICs9IGYuc2xpY2UobGFzdFBvcywgaSlcbiAgICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiBhcmdzW2FdXG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBzdHIgKz0gJ1xcJycgKyBhcmdzW2FdICsgJ1xcJydcbiAgICAgICAgICAgIGxhc3RQb3MgPSBpICsgMlxuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RyICs9IGFyZ3NbYV0ubmFtZSB8fCAnPGFub255bW91cz4nXG4gICAgICAgICAgICBsYXN0UG9zID0gaSArIDJcbiAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RyICs9IHNzKGFyZ3NbYV0pXG4gICAgICAgICAgbGFzdFBvcyA9IGkgKyAyXG4gICAgICAgICAgaSsrXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAxMTU6IC8vICdzJ1xuICAgICAgICAgIGlmIChhID49IGFyZ0xlbilcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgaWYgKGxhc3RQb3MgPCBpKVxuICAgICAgICAgICAgc3RyICs9IGYuc2xpY2UobGFzdFBvcywgaSlcbiAgICAgICAgICBzdHIgKz0gU3RyaW5nKGFyZ3NbYV0pXG4gICAgICAgICAgbGFzdFBvcyA9IGkgKyAyXG4gICAgICAgICAgaSsrXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzNzogLy8gJyUnXG4gICAgICAgICAgaWYgKGxhc3RQb3MgPCBpKVxuICAgICAgICAgICAgc3RyICs9IGYuc2xpY2UobGFzdFBvcywgaSlcbiAgICAgICAgICBzdHIgKz0gJyUnXG4gICAgICAgICAgbGFzdFBvcyA9IGkgKyAyXG4gICAgICAgICAgaSsrXG4gICAgICAgICAgYS0tXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgICsrYVxuICAgIH1cbiAgICArK2lcbiAgfVxuICBpZiAobGFzdFBvcyA9PT0gLTEpXG4gICAgcmV0dXJuIGZcbiAgZWxzZSBpZiAobGFzdFBvcyA8IGZsZW4pIHtcbiAgICBzdHIgKz0gZi5zbGljZShsYXN0UG9zKVxuICB9XG5cbiAgcmV0dXJuIHN0clxufVxuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgQmFzaWNBZGROb3RlUGFyYW1zIH0gZnJvbSBcIi4vYW5raS9hZGROb3RlXCI7XG5pbXBvcnQgeyBBbmtpUmVzcG9uc2UgfSBmcm9tIFwiLi9hbmtpL3Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlIHtcbiAgYWRkTm90ZSxcbiAgYWRkTm90ZVJlc3BvbnNlLFxuICBkZWNrTmFtZXMsXG4gIGRlY2tOYW1lc1Jlc3BvbnNlLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZE5vdGVNZXNzYWdlIHtcbiAgdHlwZTogTWVzc2FnZVR5cGUuYWRkTm90ZSxcbiAgcGF5bG9hZDogQmFzaWNBZGROb3RlUGFyYW1zLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZE5vdGVSZXNwb25zZU1lc3NhZ2Uge1xuICB0eXBlOiBNZXNzYWdlVHlwZS5hZGROb3RlUmVzcG9uc2UsXG4gIHBheWxvYWQ6IEFua2lSZXNwb25zZSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWNrTmFtZXNNZXNzYWdlIHtcbiAgdHlwZTogTWVzc2FnZVR5cGUuZGVja05hbWVzLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlY2tOYW1lc1Jlc3BvbnNlTWVzc2FnZSB7XG4gIHR5cGU6IE1lc3NhZ2VUeXBlLmRlY2tOYW1lc1Jlc3BvbnNlLFxuICBwYXlsb2FkOiBBbmtpUmVzcG9uc2U8QXJyYXk8c3RyaW5nPj4sXG59XG5cbmV4cG9ydCB0eXBlIE1lc3NzYWdlID1cbiB8IEFkZE5vdGVNZXNzYWdlXG4gfCBBZGROb3RlUmVzcG9uc2VNZXNzYWdlXG4gfCBEZWNrTmFtZXNNZXNzYWdlXG4gfCBEZWNrTmFtZXNSZXNwb25zZU1lc3NhZ2VcbjtcbiIsImltcG9ydCB7IGFkZE5vdGUgfSBmcm9tIFwiLi4vYW5raS9hZGROb3RlXCI7XG5pbXBvcnQgeyBBbmtpUmVzcG9uc2UgfSBmcm9tIFwiLi4vYW5raS9yZXNwb25zZVwiO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xuaW1wb3J0IHsgQWRkTm90ZU1lc3NhZ2UsIEFkZE5vdGVSZXNwb25zZU1lc3NhZ2UsIE1lc3NhZ2VUeXBlIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGROb3RlSGFuZGxlcihtZXNzYWdlOiBBZGROb3RlTWVzc2FnZSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWRkTm90ZShtZXNzYWdlLnBheWxvYWQpO1xuICAgIGNvbnN0IGJvZHk6IEFua2lSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgXG4gICAgbGV0IG5vdGlmaWNhdGlvbk1lc3NhZ2UgPSBcIk5vdGUgYWRkZWRcIjtcbiAgICBpZiAoYm9keS5lcnJvciAhPT0gbnVsbCkge1xuICAgICAgbm90aWZpY2F0aW9uTWVzc2FnZSA9IGJvZHkuZXJyb3I7XG4gICAgICBsb2dnZXIuZXJyb3IoYm9keS5lcnJvcik7XG4gICAgfVxuICBcbiAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5jcmVhdGUoXCJcIiwge1xuICAgICAgbWVzc2FnZTogbm90aWZpY2F0aW9uTWVzc2FnZSxcbiAgICAgIGljb25Vcmw6IFwiaW1hZ2VzL2xvZ28ucG5nXCIsXG4gICAgICB0aXRsZTogXCJRdWljayBBbmtpXCIsXG4gICAgICB0eXBlOiBcImJhc2ljXCIsXG4gICAgfSk7XG4gIFxuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sICh0YWJzKT0+IHtcbiAgICAgIGNvbnN0IFt0YWJdID0gdGFicztcbiAgICAgIGlmICh0YWIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gIFxuICAgICAgY29uc3QgdGFiSWQgPSB0YWIuaWQ7XG4gICAgICBpZiAodGFiSWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gIFxuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuYWRkTm90ZVJlc3BvbnNlLFxuICAgICAgICBwYXlsb2FkOiBib2R5LFxuICAgICAgfSBhcyBBZGROb3RlUmVzcG9uc2VNZXNzYWdlKTsgIFxuICAgIH0pO1xuICB9IiwiLyoqXG4gKiBAc2VlIGFkZE5vdGUgYXQgaHR0cHM6Ly9mb29zb2Z0Lm5ldC9wcm9qZWN0cy9hbmtpLWNvbm5lY3QvI25vdGUtYWN0aW9uc1xuICovXG5cbmltcG9ydCB7IGludm9rZUFjdGlvbiB9IGZyb20gXCIuL2ludm9rZUFjdGlvblwiO1xuaW1wb3J0IHsgQWN0aW9uVHlwZSB9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBZGROb3RlUGFyYW1zIHtcbiAgICBub3RlOiB7XG4gICAgICAgIGRlY2tOYW1lOiBzdHJpbmc7XG4gICAgICAgIG1vZGVsTmFtZTogXCJCYXNpY1wiO1xuICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgIEZyb250OiBzdHJpbmc7XG4gICAgICAgICAgICBCYWNrOiBzdHJpbmc7XG4gICAgICAgIH07XG4gICAgICAgIG9wdGlvbnM/OiB7XG4gICAgICAgICAgICBhbGxvd0R1cGxpY2F0ZTogZmFsc2U7XG4gICAgICAgICAgICBkdXBsaWNhdGVTY29wZTogXCJkZWNrXCI7XG4gICAgICAgICAgICBkdXBsaWNhdGVTY29wZU9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBkZWNrTmFtZT86IHN0cmluZyB8IG51bGw7XG4gICAgICAgICAgICAgICAgY2hlY2tDaGlsZHJlbj86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgY2hlY2tBbGxNb2RlbHM6IGJvb2xlYW47XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICB0YWdzPzogc3RyaW5nW107XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXNpY0FkZE5vdGVQYXJhbXMge1xuICAgIGRlY2tOYW1lOiBBZGROb3RlUGFyYW1zW1wibm90ZVwiXVtcImRlY2tOYW1lXCJdLFxuICAgIGZyb250OiBBZGROb3RlUGFyYW1zW1wibm90ZVwiXVtcImZpZWxkc1wiXVtcIkZyb250XCJdLFxuICAgIGJhY2s6IEFkZE5vdGVQYXJhbXNbXCJub3RlXCJdW1wiZmllbGRzXCJdW1wiQmFja1wiXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEFkZE5vdGVQYXJhbXMoe1xuICAgIGZyb250LFxuICAgIGJhY2ssXG4gICAgZGVja05hbWUsXG59OiBCYXNpY0FkZE5vdGVQYXJhbXMpOiBBZGROb3RlUGFyYW1zIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBub3RlOiB7XG4gICAgICAgICAgICBkZWNrTmFtZSxcbiAgICAgICAgICAgIG1vZGVsTmFtZTogXCJCYXNpY1wiLFxuICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgRnJvbnQ6IGZyb250LFxuICAgICAgICAgICAgICAgIEJhY2s6IGJhY2ssXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGFsbG93RHVwbGljYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVTY29wZTogXCJkZWNrXCIsXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlU2NvcGVPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2tOYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBjaGVja0NoaWxkcmVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tBbGxNb2RlbHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnczogW10sXG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5vdGUocGFyYW1zOiBCYXNpY0FkZE5vdGVQYXJhbXMpIHtcbiAgICByZXR1cm4gaW52b2tlQWN0aW9uKHtcbiAgICAgICAgYWN0aW9uOiBBY3Rpb25UeXBlLkFkZE5vdGUsXG4gICAgICAgIHBhcmFtczogZ2V0RGVmYXVsdEFkZE5vdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn0iLCJpbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEludm9rZUFjdGlvblBhcmFtcyB7XG4gIGFjdGlvbjogQWN0aW9uVHlwZSxcbiAgcGFyYW1zPzogb2JqZWN0LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlQWN0aW9uKHBhcmFtczogSW52b2tlQWN0aW9uUGFyYW1zKSB7XG4gIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgLi4ucGFyYW1zLFxuICAgIHZlcnNpb246IDYsXG4gIH0pO1xuICAgIFxuICByZXR1cm4gZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjg3NjVcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgYm9keSxcbiAgfSk7XG59IiwiZXhwb3J0IGVudW0gQWN0aW9uVHlwZSB7XG4gICAgQWRkTm90ZSA9IFwiYWRkTm90ZVwiLFxuICAgIERlY2tOYW1lcyA9IFwiZGVja05hbWVzXCIsXG59IiwiaW1wb3J0IHsgZGVja05hbWVzIH0gZnJvbSBcIi4uL2Fua2kvZGVja05hbWVzXCI7XG5pbXBvcnQgeyBBbmtpUmVzcG9uc2UgfSBmcm9tIFwiLi4vYW5raS9yZXNwb25zZVwiO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xuaW1wb3J0IHsgRGVja05hbWVzTWVzc2FnZSwgRGVja05hbWVzUmVzcG9uc2VNZXNzYWdlLCBNZXNzYWdlVHlwZSB9IGZyb20gXCIuLi9tZXNzYWdlc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVja05hbWVzSGFuZGxlcihtZXNzYWdlOiBEZWNrTmFtZXNNZXNzYWdlKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkZWNrTmFtZXMoKTtcbiAgICBjb25zdCBib2R5OiBBbmtpUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIFxuICAgIGlmIChib2R5LmVycm9yICE9PSBudWxsKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoYm9keS5lcnJvcik7XG4gICAgfVxuICBcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicyk9PiB7XG4gICAgICBjb25zdCBbdGFiXSA9IHRhYnM7XG4gICAgICBpZiAodGFiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICBcbiAgICAgIGNvbnN0IHRhYklkID0gdGFiLmlkO1xuICAgICAgaWYgKHRhYklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICBcbiAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLmRlY2tOYW1lc1Jlc3BvbnNlLFxuICAgICAgICBwYXlsb2FkOiBib2R5LFxuICAgICAgfSBhcyBEZWNrTmFtZXNSZXNwb25zZU1lc3NhZ2UpOyAgXG4gICAgfSk7XG4gIH1cbiAgIiwiaW1wb3J0IHsgaW52b2tlQWN0aW9uIH0gZnJvbSBcIi4vaW52b2tlQWN0aW9uXCI7XG5pbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVja05hbWVzKCkge1xuICAgIHJldHVybiBpbnZva2VBY3Rpb24oe1xuICAgICAgICBhY3Rpb246IEFjdGlvblR5cGUuRGVja05hbWVzLFxuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImV2ZW50TGlzdGVuZXIuNTA4NTk0MzguanMubWFwIn0=
