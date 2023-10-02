globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-09-20T02:23:45.499Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/about.faed9c12.png": {
    "type": "image/png",
    "etag": "\"6c213-6KfC1WqVDzr5zE1xjq867sMhUCQ\"",
    "mtime": "2023-10-02T04:47:13.889Z",
    "size": 442899,
    "path": "../public/_nuxt/about.faed9c12.png"
  },
  "/_nuxt/bg.d71fbcd2.jpg": {
    "type": "image/jpeg",
    "etag": "\"9937-Rt7pDed8/d+2iR0V0jrOU3PR1Ac\"",
    "mtime": "2023-10-02T04:47:13.887Z",
    "size": 39223,
    "path": "../public/_nuxt/bg.d71fbcd2.jpg"
  },
  "/_nuxt/entry.4faef96e.js": {
    "type": "application/javascript",
    "etag": "\"2abca-vV9duvV4SFIzoqktLXmUYVJnYI0\"",
    "mtime": "2023-10-02T04:47:13.894Z",
    "size": 175050,
    "path": "../public/_nuxt/entry.4faef96e.js"
  },
  "/_nuxt/entry.d5b7e25d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"995ff-WxCtYa/xn0pTnYGdkdQL2dkL4sc\"",
    "mtime": "2023-10-02T04:47:13.891Z",
    "size": 628223,
    "path": "../public/_nuxt/entry.d5b7e25d.css"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-10-02T04:47:13.891Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.a598d7f9.js": {
    "type": "application/javascript",
    "etag": "\"8c8-/ZosRmU/ib6Ddqx+ea+y2oV+qSg\"",
    "mtime": "2023-10-02T04:47:13.894Z",
    "size": 2248,
    "path": "../public/_nuxt/error-404.a598d7f9.js"
  },
  "/_nuxt/error-500.59bb224e.js": {
    "type": "application/javascript",
    "etag": "\"751-ZIvN11dUWzDkZugOWs/HzBIZyz0\"",
    "mtime": "2023-10-02T04:47:13.894Z",
    "size": 1873,
    "path": "../public/_nuxt/error-500.59bb224e.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-10-02T04:47:13.891Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.5f0f4c1f.js": {
    "type": "application/javascript",
    "etag": "\"478-9wwNo6xvogoKuk76tT82h8pc/D4\"",
    "mtime": "2023-10-02T04:47:13.892Z",
    "size": 1144,
    "path": "../public/_nuxt/error-component.5f0f4c1f.js"
  },
  "/_nuxt/fa-brands-400.01711d34.ttf": {
    "type": "font/ttf",
    "etag": "\"20228-y3mN6AElNJgDA1nVXw/AuR4YU8g\"",
    "mtime": "2023-10-02T04:47:13.885Z",
    "size": 131624,
    "path": "../public/_nuxt/fa-brands-400.01711d34.ttf"
  },
  "/_nuxt/fa-brands-400.1a199a66.woff": {
    "type": "font/woff",
    "etag": "\"15c0c-T0LJOUXIzlluPd/1TSLuQrwO6EM\"",
    "mtime": "2023-10-02T04:47:13.880Z",
    "size": 89100,
    "path": "../public/_nuxt/fa-brands-400.1a199a66.woff"
  },
  "/_nuxt/fa-brands-400.ec2e22fd.woff2": {
    "type": "font/woff2",
    "etag": "\"128e8-w/dLotx7GmXbEzQZ+ZrtfeFkU0I\"",
    "mtime": "2023-10-02T04:47:13.879Z",
    "size": 76008,
    "path": "../public/_nuxt/fa-brands-400.ec2e22fd.woff2"
  },
  "/_nuxt/fa-duotone-900.b8556db4.woff": {
    "type": "font/woff",
    "etag": "\"3ff50-usLunI4mxEroNl2ITmvvocTRgNo\"",
    "mtime": "2023-10-02T04:47:13.882Z",
    "size": 261968,
    "path": "../public/_nuxt/fa-duotone-900.b8556db4.woff"
  },
  "/_nuxt/fa-duotone-900.d98f270f.ttf": {
    "type": "font/ttf",
    "etag": "\"8858c-d5JWk05rPPLLMod3fn+MbSnphsU\"",
    "mtime": "2023-10-02T04:47:13.890Z",
    "size": 558476,
    "path": "../public/_nuxt/fa-duotone-900.d98f270f.ttf"
  },
  "/_nuxt/fa-duotone-900.e228b909.woff2": {
    "type": "font/woff2",
    "etag": "\"2d09c-FQpqf/3sbi4v9McS187ovZuTAoQ\"",
    "mtime": "2023-10-02T04:47:13.880Z",
    "size": 184476,
    "path": "../public/_nuxt/fa-duotone-900.e228b909.woff2"
  },
  "/_nuxt/fa-light-300.2dc0e215.woff2": {
    "type": "font/woff2",
    "etag": "\"2d410-H87pqtTeuWKRCr4duR3AK4IhJLU\"",
    "mtime": "2023-10-02T04:47:13.880Z",
    "size": 185360,
    "path": "../public/_nuxt/fa-light-300.2dc0e215.woff2"
  },
  "/_nuxt/fa-light-300.470ba5e8.ttf": {
    "type": "font/ttf",
    "etag": "\"757c0-5YnvWpOyldirMZm8zZ3kkXdKC3I\"",
    "mtime": "2023-10-02T04:47:13.887Z",
    "size": 481216,
    "path": "../public/_nuxt/fa-light-300.470ba5e8.ttf"
  },
  "/_nuxt/fa-light-300.a7dbdfa8.woff": {
    "type": "font/woff",
    "etag": "\"3c04c-93eBJMOYFKk98I500R+FXLJ9CbA\"",
    "mtime": "2023-10-02T04:47:13.881Z",
    "size": 245836,
    "path": "../public/_nuxt/fa-light-300.a7dbdfa8.woff"
  },
  "/_nuxt/fa-regular-400.84575bae.ttf": {
    "type": "font/ttf",
    "etag": "\"6c2f0-TQdpeLFSIrUVMK6x7jQQeznj2K8\"",
    "mtime": "2023-10-02T04:47:13.886Z",
    "size": 443120,
    "path": "../public/_nuxt/fa-regular-400.84575bae.ttf"
  },
  "/_nuxt/fa-regular-400.c169747d.woff": {
    "type": "font/woff",
    "etag": "\"36e58-EiN12gmoXQg0+G3bdlLTnHS1eUI\"",
    "mtime": "2023-10-02T04:47:13.881Z",
    "size": 224856,
    "path": "../public/_nuxt/fa-regular-400.c169747d.woff"
  },
  "/_nuxt/fa-regular-400.ec686d10.woff2": {
    "type": "font/woff2",
    "etag": "\"29704-wgP0HpEvmNKN7Nnrr1qih/QJTFo\"",
    "mtime": "2023-10-02T04:47:13.880Z",
    "size": 169732,
    "path": "../public/_nuxt/fa-regular-400.ec686d10.woff2"
  },
  "/_nuxt/fa-solid-900.68eb827a.woff2": {
    "type": "font/woff2",
    "etag": "\"219e8-SNfE5AO0FFPS3xZ0UOe8uM/k98s\"",
    "mtime": "2023-10-02T04:47:13.880Z",
    "size": 137704,
    "path": "../public/_nuxt/fa-solid-900.68eb827a.woff2"
  },
  "/_nuxt/fa-solid-900.85528db3.woff": {
    "type": "font/woff",
    "etag": "\"2cdf4-zjsdepkdu5jmQqI7Ks91R4WBdDQ\"",
    "mtime": "2023-10-02T04:47:13.881Z",
    "size": 183796,
    "path": "../public/_nuxt/fa-solid-900.85528db3.woff"
  },
  "/_nuxt/fa-solid-900.c3ecc5fe.ttf": {
    "type": "font/ttf",
    "etag": "\"5c59c-XK8S6yoMj5yvaxOplbUwdvfRAyg\"",
    "mtime": "2023-10-02T04:47:13.886Z",
    "size": 378268,
    "path": "../public/_nuxt/fa-solid-900.c3ecc5fe.ttf"
  },
  "/_nuxt/fa-thin-100.8f2c37e7.woff2": {
    "type": "font/woff2",
    "etag": "\"39cf0-wP28n/8k1LLlwVTY6cD8uRyyQUc\"",
    "mtime": "2023-10-02T04:47:13.881Z",
    "size": 236784,
    "path": "../public/_nuxt/fa-thin-100.8f2c37e7.woff2"
  },
  "/_nuxt/fa-thin-100.c5da54a7.ttf": {
    "type": "font/ttf",
    "etag": "\"a22d8-Q2Q5xPrObFGOkavH80A88z03IS0\"",
    "mtime": "2023-10-02T04:47:13.890Z",
    "size": 664280,
    "path": "../public/_nuxt/fa-thin-100.c5da54a7.ttf"
  },
  "/_nuxt/fa-thin-100.fde6ef1c.woff": {
    "type": "font/woff",
    "etag": "\"50fd0-jq8WSZ1gieWX+fSuExuyqKVswq4\"",
    "mtime": "2023-10-02T04:47:13.882Z",
    "size": 331728,
    "path": "../public/_nuxt/fa-thin-100.fde6ef1c.woff"
  },
  "/_nuxt/img-05.7f30b395.jpg": {
    "type": "image/jpeg",
    "etag": "\"36e2b-gUXiD2bDVJye2Sjbc9cg6/2xg4A\"",
    "mtime": "2023-10-02T04:47:13.889Z",
    "size": 224811,
    "path": "../public/_nuxt/img-05.7f30b395.jpg"
  },
  "/_nuxt/img-06.d615458b.jpg": {
    "type": "image/jpeg",
    "etag": "\"184d0-8dbDvY6qkI/D+Ig7+nbEDr4H3gM\"",
    "mtime": "2023-10-02T04:47:13.888Z",
    "size": 99536,
    "path": "../public/_nuxt/img-06.d615458b.jpg"
  },
  "/_nuxt/img-08.41fcd570.jpg": {
    "type": "image/jpeg",
    "etag": "\"221b1-FN9jmcmCO7USADr/jPe18ZkV7EY\"",
    "mtime": "2023-10-02T04:47:13.888Z",
    "size": 139697,
    "path": "../public/_nuxt/img-08.41fcd570.jpg"
  },
  "/_nuxt/img-09.94201e68.jpg": {
    "type": "image/jpeg",
    "etag": "\"21be3-jWV7IIaZJICcSQRa1KveQKBAHJA\"",
    "mtime": "2023-10-02T04:47:13.889Z",
    "size": 138211,
    "path": "../public/_nuxt/img-09.94201e68.jpg"
  },
  "/_nuxt/index.1fb784a4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"719-M6MwAAgsQmNFaSy5YefYpF5DazA\"",
    "mtime": "2023-10-02T04:47:13.891Z",
    "size": 1817,
    "path": "../public/_nuxt/index.1fb784a4.css"
  },
  "/_nuxt/index.3949d804.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"15aa-cYnRcyrYEj0OSIxKL6Ll7kTwKOc\"",
    "mtime": "2023-10-02T04:47:13.891Z",
    "size": 5546,
    "path": "../public/_nuxt/index.3949d804.css"
  },
  "/_nuxt/index.51d5a615.js": {
    "type": "application/javascript",
    "etag": "\"91f-D6vrzZI78BCez4P+usnjh4KkfJs\"",
    "mtime": "2023-10-02T04:47:13.894Z",
    "size": 2335,
    "path": "../public/_nuxt/index.51d5a615.js"
  },
  "/_nuxt/index.ad38e7ee.js": {
    "type": "application/javascript",
    "etag": "\"26f6-/Aoj8je2XTGjZqrPeC15i81AJmk\"",
    "mtime": "2023-10-02T04:47:13.894Z",
    "size": 9974,
    "path": "../public/_nuxt/index.ad38e7ee.js"
  },
  "/_nuxt/info-box.4929b022.js": {
    "type": "application/javascript",
    "etag": "\"48c-cmQ84Zho9XdFCLeteuyxayfaEmc\"",
    "mtime": "2023-10-02T04:47:13.892Z",
    "size": 1164,
    "path": "../public/_nuxt/info-box.4929b022.js"
  },
  "/_nuxt/info-box.f67ba7a8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"30a-QHexj4iGS4zX2Osz/40VG1Wv6xU\"",
    "mtime": "2023-10-02T04:47:13.891Z",
    "size": 778,
    "path": "../public/_nuxt/info-box.f67ba7a8.css"
  },
  "/_nuxt/jobfest.94d0daae.js": {
    "type": "application/javascript",
    "etag": "\"314-d3c8V2Cm3ErrsUM/RppO3EwkyuI\"",
    "mtime": "2023-10-02T04:47:13.892Z",
    "size": 788,
    "path": "../public/_nuxt/jobfest.94d0daae.js"
  },
  "/_nuxt/jobfest.a9367581.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"dd-R1fxX7H2MVq4ZFjAgTieLb3fhGo\"",
    "mtime": "2023-10-02T04:47:13.890Z",
    "size": 221,
    "path": "../public/_nuxt/jobfest.a9367581.css"
  },
  "/_nuxt/login.2af8e336.js": {
    "type": "application/javascript",
    "etag": "\"601-8m3omM3oV4WEjpeP1ISnaRxC8e4\"",
    "mtime": "2023-10-02T04:47:13.894Z",
    "size": 1537,
    "path": "../public/_nuxt/login.2af8e336.js"
  },
  "/_nuxt/login.8d884521.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"18d-x+dPeDzxfGlUaLEotFatv7BGbUk\"",
    "mtime": "2023-10-02T04:47:13.891Z",
    "size": 397,
    "path": "../public/_nuxt/login.8d884521.css"
  },
  "/_nuxt/Logo.d939d081.png": {
    "type": "image/png",
    "etag": "\"d6b9-2U2fzALv24BCb3gJWV2xFA9KlvA\"",
    "mtime": "2023-10-02T04:47:13.882Z",
    "size": 54969,
    "path": "../public/_nuxt/Logo.d939d081.png"
  },
  "/_nuxt/main.5b12a141.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1230-yJuhWY5NjCsx8gKgnUys2yGZz5o\"",
    "mtime": "2023-10-02T04:47:13.891Z",
    "size": 4656,
    "path": "../public/_nuxt/main.5b12a141.css"
  },
  "/_nuxt/main.e784af77.js": {
    "type": "application/javascript",
    "etag": "\"11ca-TjEu24Q4bw+oTlqpFNVTSQpxxPY\"",
    "mtime": "2023-10-02T04:47:13.894Z",
    "size": 4554,
    "path": "../public/_nuxt/main.e784af77.js"
  },
  "/_nuxt/Nuanta-Bold.0b6f7ce4.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"207d6-oK0RR6+bErxKAiK++9HOhmw9ii4\"",
    "mtime": "2023-10-02T04:47:13.879Z",
    "size": 133078,
    "path": "../public/_nuxt/Nuanta-Bold.0b6f7ce4.eot"
  },
  "/_nuxt/Nuanta-Bold.5aa64b5f.ttf": {
    "type": "font/ttf",
    "etag": "\"2071c-NYsghdEDBpG+Omfy3hrkrVP9xCQ\"",
    "mtime": "2023-10-02T04:47:13.887Z",
    "size": 132892,
    "path": "../public/_nuxt/Nuanta-Bold.5aa64b5f.ttf"
  },
  "/_nuxt/Nuanta-Bold.b163285d.woff": {
    "type": "font/woff",
    "etag": "\"dac0-4tVXU1jPUkoFnMkChsLmb0S9EQY\"",
    "mtime": "2023-10-02T04:47:13.885Z",
    "size": 56000,
    "path": "../public/_nuxt/Nuanta-Bold.b163285d.woff"
  },
  "/_nuxt/Nuanta-Bold.b3349f0d.woff2": {
    "type": "font/woff2",
    "etag": "\"9324-UU+KJ+AtU0bcwPXLPZX79CLtlEU\"",
    "mtime": "2023-10-02T04:47:13.881Z",
    "size": 37668,
    "path": "../public/_nuxt/Nuanta-Bold.b3349f0d.woff2"
  },
  "/_nuxt/Nuanta-Regular.76e2bbfb.woff": {
    "type": "font/woff",
    "etag": "\"e170-wDKtVEK0mLbdiSs21tVhbEbxF7E\"",
    "mtime": "2023-10-02T04:47:13.885Z",
    "size": 57712,
    "path": "../public/_nuxt/Nuanta-Regular.76e2bbfb.woff"
  },
  "/_nuxt/Nuanta-Regular.ad2a0711.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"2128c-e17u4/Fj6cutv4qN3Fy1cTqPlYk\"",
    "mtime": "2023-10-02T04:47:13.879Z",
    "size": 135820,
    "path": "../public/_nuxt/Nuanta-Regular.ad2a0711.eot"
  },
  "/_nuxt/Nuanta-Regular.bbea65bb.ttf": {
    "type": "font/ttf",
    "etag": "\"211d4-dag09C+OI03D1p5CWpII1c2OrRo\"",
    "mtime": "2023-10-02T04:47:13.887Z",
    "size": 135636,
    "path": "../public/_nuxt/Nuanta-Regular.bbea65bb.ttf"
  },
  "/_nuxt/Nuanta-Regular.d317fc24.woff2": {
    "type": "font/woff2",
    "etag": "\"96c8-2X8UIcOuGAQZ5hmxnYc9CAruowY\"",
    "mtime": "2023-10-02T04:47:13.880Z",
    "size": 38600,
    "path": "../public/_nuxt/Nuanta-Regular.d317fc24.woff2"
  },
  "/_nuxt/nuxt-link.eecb159b.js": {
    "type": "application/javascript",
    "etag": "\"10e1-Varz04507P81I9j9FdlzIIL08Uk\"",
    "mtime": "2023-10-02T04:47:13.892Z",
    "size": 4321,
    "path": "../public/_nuxt/nuxt-link.eecb159b.js"
  },
  "/_nuxt/password-recovery.0798d13b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4d5-r3JBSp0XZ7JTtGoxCyt0WmPUznI\"",
    "mtime": "2023-10-02T04:47:13.891Z",
    "size": 1237,
    "path": "../public/_nuxt/password-recovery.0798d13b.css"
  },
  "/_nuxt/password-recovery.0f696701.js": {
    "type": "application/javascript",
    "etag": "\"65f-+GaDkR5EsWBkOsqHP5brJ4J1tXw\"",
    "mtime": "2023-10-02T04:47:13.892Z",
    "size": 1631,
    "path": "../public/_nuxt/password-recovery.0f696701.js"
  },
  "/_nuxt/product-and-services.0678765f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"fe-Y42z1daS+SnB19VTMK3VHetmtjQ\"",
    "mtime": "2023-10-02T04:47:13.891Z",
    "size": 254,
    "path": "../public/_nuxt/product-and-services.0678765f.css"
  },
  "/_nuxt/product-and-services.186ffa88.js": {
    "type": "application/javascript",
    "etag": "\"3f4-LxYH412yJMAXpKeELxBv7oVlt4o\"",
    "mtime": "2023-10-02T04:47:13.894Z",
    "size": 1012,
    "path": "../public/_nuxt/product-and-services.186ffa88.js"
  },
  "/_nuxt/register.1d966c8b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"18d-Ea24RjMhkovjNaR6I2/XDd5Q6go\"",
    "mtime": "2023-10-02T04:47:13.891Z",
    "size": 397,
    "path": "../public/_nuxt/register.1d966c8b.css"
  },
  "/_nuxt/register.d0a1b4f9.js": {
    "type": "application/javascript",
    "etag": "\"c0f-sXrltyZkTlKG60XMXtDIH6F5PDI\"",
    "mtime": "2023-10-02T04:47:13.892Z",
    "size": 3087,
    "path": "../public/_nuxt/register.d0a1b4f9.js"
  },
  "/_nuxt/related.614ed126.js": {
    "type": "application/javascript",
    "etag": "\"350-MrhownhQfuzGl3tB9sp5lLswG2s\"",
    "mtime": "2023-10-02T04:47:13.894Z",
    "size": 848,
    "path": "../public/_nuxt/related.614ed126.js"
  },
  "/_nuxt/related.985fc2ab.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2f3-ZhTByIzvrUyTK9b4ZShJxwE6sCI\"",
    "mtime": "2023-10-02T04:47:13.891Z",
    "size": 755,
    "path": "../public/_nuxt/related.985fc2ab.css"
  },
  "/_nuxt/Roboto-Black.5ace0d08.ttf": {
    "type": "font/ttf",
    "etag": "\"2907c-P45AHYCPbOhLVCJmcmUUrIvnMXE\"",
    "mtime": "2023-10-02T04:47:13.880Z",
    "size": 168060,
    "path": "../public/_nuxt/Roboto-Black.5ace0d08.ttf"
  },
  "/_nuxt/Roboto-Bold.ec685a46.ttf": {
    "type": "font/ttf",
    "etag": "\"28da8-YkQqGKn+lFfBr+q/aD0mOmkbd5g\"",
    "mtime": "2023-10-02T04:47:13.880Z",
    "size": 167336,
    "path": "../public/_nuxt/Roboto-Bold.ec685a46.ttf"
  },
  "/_nuxt/Roboto-Light.c576c506.ttf": {
    "type": "font/ttf",
    "etag": "\"28c58-GHiMXWMPppX5KD9jk7+lQbIDFQg\"",
    "mtime": "2023-10-02T04:47:13.877Z",
    "size": 167000,
    "path": "../public/_nuxt/Roboto-Light.c576c506.ttf"
  },
  "/_nuxt/Roboto-Regular.4e147ab6.ttf": {
    "type": "font/ttf",
    "etag": "\"29144-VsXA04veTB8VSd2kPbN7CcYIqtM\"",
    "mtime": "2023-10-02T04:47:13.879Z",
    "size": 168260,
    "path": "../public/_nuxt/Roboto-Regular.4e147ab6.ttf"
  },
  "/_nuxt/thebizhub-logo.b61d510f.jpg": {
    "type": "image/jpeg",
    "etag": "\"ad04-cYEGZ40ExlWbK0wtTJdNAhnd+h8\"",
    "mtime": "2023-10-02T04:47:13.887Z",
    "size": 44292,
    "path": "../public/_nuxt/thebizhub-logo.b61d510f.jpg"
  },
  "/_nuxt/works.27741733.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c8-KDP/hZEwbb+aOQSlYRvaKhoXmtM\"",
    "mtime": "2023-10-02T04:47:13.890Z",
    "size": 456,
    "path": "../public/_nuxt/works.27741733.css"
  },
  "/_nuxt/works.bbc8b2b5.js": {
    "type": "application/javascript",
    "etag": "\"e39-sqEn39SB66oRNe3ln9fKtkdiY3k\"",
    "mtime": "2023-10-02T04:47:13.892Z",
    "size": 3641,
    "path": "../public/_nuxt/works.bbc8b2b5.js"
  },
  "/_nuxt/_id_.deb80442.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5cc-BdOcj7zRWw0HiC40YJFExw8Zikc\"",
    "mtime": "2023-10-02T04:47:13.891Z",
    "size": 1484,
    "path": "../public/_nuxt/_id_.deb80442.css"
  },
  "/_nuxt/_id_.faf1d519.js": {
    "type": "application/javascript",
    "etag": "\"681-CQDQg/hyoySxoUsO3XSfIJv1MTs\"",
    "mtime": "2023-10-02T04:47:13.894Z",
    "size": 1665,
    "path": "../public/_nuxt/_id_.faf1d519.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_bDNeQ1 = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_bDNeQ1, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_bDNeQ1, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
