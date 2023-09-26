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
    "mtime": "2023-09-26T08:06:33.714Z",
    "size": 442899,
    "path": "../public/_nuxt/about.faed9c12.png"
  },
  "/_nuxt/bg.d71fbcd2.jpg": {
    "type": "image/jpeg",
    "etag": "\"9937-Rt7pDed8/d+2iR0V0jrOU3PR1Ac\"",
    "mtime": "2023-09-26T08:06:33.714Z",
    "size": 39223,
    "path": "../public/_nuxt/bg.d71fbcd2.jpg"
  },
  "/_nuxt/entry.7f12da22.js": {
    "type": "application/javascript",
    "etag": "\"2abe4-YMvbUd1VcOMyxwpjyE2V1chCThs\"",
    "mtime": "2023-09-26T08:06:33.724Z",
    "size": 175076,
    "path": "../public/_nuxt/entry.7f12da22.js"
  },
  "/_nuxt/entry.e034d758.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"670ac-r5ke4OjywtJ8CCe//2J0JNDl9D0\"",
    "mtime": "2023-09-26T08:06:33.715Z",
    "size": 422060,
    "path": "../public/_nuxt/entry.e034d758.css"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-09-26T08:06:33.721Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.92ea6b7f.js": {
    "type": "application/javascript",
    "etag": "\"8cd-rtnroM13x4W4KVESAKL+ASVwmHY\"",
    "mtime": "2023-09-26T08:06:33.724Z",
    "size": 2253,
    "path": "../public/_nuxt/error-404.92ea6b7f.js"
  },
  "/_nuxt/error-500.820cc8ee.js": {
    "type": "application/javascript",
    "etag": "\"756-xWbl8MaFaE/VnqxjdMUslg9NYXw\"",
    "mtime": "2023-09-26T08:06:33.724Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.820cc8ee.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-09-26T08:06:33.721Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.247ed4b0.js": {
    "type": "application/javascript",
    "etag": "\"478-c8Yl+gCxYxU45VD5ddyvFwKEstg\"",
    "mtime": "2023-09-26T08:06:33.721Z",
    "size": 1144,
    "path": "../public/_nuxt/error-component.247ed4b0.js"
  },
  "/_nuxt/fa-brands-400.01711d34.ttf": {
    "type": "font/ttf",
    "etag": "\"20228-y3mN6AElNJgDA1nVXw/AuR4YU8g\"",
    "mtime": "2023-09-26T08:06:33.710Z",
    "size": 131624,
    "path": "../public/_nuxt/fa-brands-400.01711d34.ttf"
  },
  "/_nuxt/fa-brands-400.1a199a66.woff": {
    "type": "font/woff",
    "etag": "\"15c0c-T0LJOUXIzlluPd/1TSLuQrwO6EM\"",
    "mtime": "2023-09-26T08:06:33.706Z",
    "size": 89100,
    "path": "../public/_nuxt/fa-brands-400.1a199a66.woff"
  },
  "/_nuxt/fa-brands-400.ec2e22fd.woff2": {
    "type": "font/woff2",
    "etag": "\"128e8-w/dLotx7GmXbEzQZ+ZrtfeFkU0I\"",
    "mtime": "2023-09-26T08:06:33.706Z",
    "size": 76008,
    "path": "../public/_nuxt/fa-brands-400.ec2e22fd.woff2"
  },
  "/_nuxt/fa-duotone-900.b8556db4.woff": {
    "type": "font/woff",
    "etag": "\"3ff50-usLunI4mxEroNl2ITmvvocTRgNo\"",
    "mtime": "2023-09-26T08:06:33.706Z",
    "size": 261968,
    "path": "../public/_nuxt/fa-duotone-900.b8556db4.woff"
  },
  "/_nuxt/fa-duotone-900.d98f270f.ttf": {
    "type": "font/ttf",
    "etag": "\"8858c-d5JWk05rPPLLMod3fn+MbSnphsU\"",
    "mtime": "2023-09-26T08:06:33.715Z",
    "size": 558476,
    "path": "../public/_nuxt/fa-duotone-900.d98f270f.ttf"
  },
  "/_nuxt/fa-duotone-900.e228b909.woff2": {
    "type": "font/woff2",
    "etag": "\"2d09c-FQpqf/3sbi4v9McS187ovZuTAoQ\"",
    "mtime": "2023-09-26T08:06:33.706Z",
    "size": 184476,
    "path": "../public/_nuxt/fa-duotone-900.e228b909.woff2"
  },
  "/_nuxt/fa-light-300.2dc0e215.woff2": {
    "type": "font/woff2",
    "etag": "\"2d410-H87pqtTeuWKRCr4duR3AK4IhJLU\"",
    "mtime": "2023-09-26T08:06:33.706Z",
    "size": 185360,
    "path": "../public/_nuxt/fa-light-300.2dc0e215.woff2"
  },
  "/_nuxt/fa-light-300.470ba5e8.ttf": {
    "type": "font/ttf",
    "etag": "\"757c0-5YnvWpOyldirMZm8zZ3kkXdKC3I\"",
    "mtime": "2023-09-26T08:06:33.710Z",
    "size": 481216,
    "path": "../public/_nuxt/fa-light-300.470ba5e8.ttf"
  },
  "/_nuxt/fa-light-300.a7dbdfa8.woff": {
    "type": "font/woff",
    "etag": "\"3c04c-93eBJMOYFKk98I500R+FXLJ9CbA\"",
    "mtime": "2023-09-26T08:06:33.707Z",
    "size": 245836,
    "path": "../public/_nuxt/fa-light-300.a7dbdfa8.woff"
  },
  "/_nuxt/fa-regular-400.84575bae.ttf": {
    "type": "font/ttf",
    "etag": "\"6c2f0-TQdpeLFSIrUVMK6x7jQQeznj2K8\"",
    "mtime": "2023-09-26T08:06:33.710Z",
    "size": 443120,
    "path": "../public/_nuxt/fa-regular-400.84575bae.ttf"
  },
  "/_nuxt/fa-regular-400.c169747d.woff": {
    "type": "font/woff",
    "etag": "\"36e58-EiN12gmoXQg0+G3bdlLTnHS1eUI\"",
    "mtime": "2023-09-26T08:06:33.706Z",
    "size": 224856,
    "path": "../public/_nuxt/fa-regular-400.c169747d.woff"
  },
  "/_nuxt/fa-regular-400.ec686d10.woff2": {
    "type": "font/woff2",
    "etag": "\"29704-wgP0HpEvmNKN7Nnrr1qih/QJTFo\"",
    "mtime": "2023-09-26T08:06:33.706Z",
    "size": 169732,
    "path": "../public/_nuxt/fa-regular-400.ec686d10.woff2"
  },
  "/_nuxt/fa-solid-900.68eb827a.woff2": {
    "type": "font/woff2",
    "etag": "\"219e8-SNfE5AO0FFPS3xZ0UOe8uM/k98s\"",
    "mtime": "2023-09-26T08:06:33.706Z",
    "size": 137704,
    "path": "../public/_nuxt/fa-solid-900.68eb827a.woff2"
  },
  "/_nuxt/fa-solid-900.85528db3.woff": {
    "type": "font/woff",
    "etag": "\"2cdf4-zjsdepkdu5jmQqI7Ks91R4WBdDQ\"",
    "mtime": "2023-09-26T08:06:33.707Z",
    "size": 183796,
    "path": "../public/_nuxt/fa-solid-900.85528db3.woff"
  },
  "/_nuxt/fa-solid-900.c3ecc5fe.ttf": {
    "type": "font/ttf",
    "etag": "\"5c59c-XK8S6yoMj5yvaxOplbUwdvfRAyg\"",
    "mtime": "2023-09-26T08:06:33.712Z",
    "size": 378268,
    "path": "../public/_nuxt/fa-solid-900.c3ecc5fe.ttf"
  },
  "/_nuxt/fa-thin-100.8f2c37e7.woff2": {
    "type": "font/woff2",
    "etag": "\"39cf0-wP28n/8k1LLlwVTY6cD8uRyyQUc\"",
    "mtime": "2023-09-26T08:06:33.706Z",
    "size": 236784,
    "path": "../public/_nuxt/fa-thin-100.8f2c37e7.woff2"
  },
  "/_nuxt/fa-thin-100.c5da54a7.ttf": {
    "type": "font/ttf",
    "etag": "\"a22d8-Q2Q5xPrObFGOkavH80A88z03IS0\"",
    "mtime": "2023-09-26T08:06:33.715Z",
    "size": 664280,
    "path": "../public/_nuxt/fa-thin-100.c5da54a7.ttf"
  },
  "/_nuxt/fa-thin-100.fde6ef1c.woff": {
    "type": "font/woff",
    "etag": "\"50fd0-jq8WSZ1gieWX+fSuExuyqKVswq4\"",
    "mtime": "2023-09-26T08:06:33.695Z",
    "size": 331728,
    "path": "../public/_nuxt/fa-thin-100.fde6ef1c.woff"
  },
  "/_nuxt/img-05.7f30b395.jpg": {
    "type": "image/jpeg",
    "etag": "\"36e2b-gUXiD2bDVJye2Sjbc9cg6/2xg4A\"",
    "mtime": "2023-09-26T08:06:33.714Z",
    "size": 224811,
    "path": "../public/_nuxt/img-05.7f30b395.jpg"
  },
  "/_nuxt/img-06.d615458b.jpg": {
    "type": "image/jpeg",
    "etag": "\"184d0-8dbDvY6qkI/D+Ig7+nbEDr4H3gM\"",
    "mtime": "2023-09-26T08:06:33.715Z",
    "size": 99536,
    "path": "../public/_nuxt/img-06.d615458b.jpg"
  },
  "/_nuxt/img-08.41fcd570.jpg": {
    "type": "image/jpeg",
    "etag": "\"221b1-FN9jmcmCO7USADr/jPe18ZkV7EY\"",
    "mtime": "2023-09-26T08:06:33.714Z",
    "size": 139697,
    "path": "../public/_nuxt/img-08.41fcd570.jpg"
  },
  "/_nuxt/img-09.94201e68.jpg": {
    "type": "image/jpeg",
    "etag": "\"21be3-jWV7IIaZJICcSQRa1KveQKBAHJA\"",
    "mtime": "2023-09-26T08:06:33.714Z",
    "size": 138211,
    "path": "../public/_nuxt/img-09.94201e68.jpg"
  },
  "/_nuxt/index.12b48aea.js": {
    "type": "application/javascript",
    "etag": "\"f0a-i190VdsGk/wK31uxjXAqWHAuCMc\"",
    "mtime": "2023-09-26T08:06:33.724Z",
    "size": 3850,
    "path": "../public/_nuxt/index.12b48aea.js"
  },
  "/_nuxt/index.305f28fe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"757f3-xoBKve68OxXXcmHNj+ket8e+JW0\"",
    "mtime": "2023-09-26T08:06:33.721Z",
    "size": 481267,
    "path": "../public/_nuxt/index.305f28fe.css"
  },
  "/_nuxt/index.4288019e.js": {
    "type": "application/javascript",
    "etag": "\"2452-f7fQ3zYT8CMAHvjw5O8JKsU6cN0\"",
    "mtime": "2023-09-26T08:06:33.724Z",
    "size": 9298,
    "path": "../public/_nuxt/index.4288019e.js"
  },
  "/_nuxt/index.831b0e2b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2328d-9q0imQ4mEphl34lLbRWgz4l6j6M\"",
    "mtime": "2023-09-26T08:06:33.720Z",
    "size": 144013,
    "path": "../public/_nuxt/index.831b0e2b.css"
  },
  "/_nuxt/index.a0bb45d9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11796-yiBB5SmZl+Edm7IswGoBHV4GVk0\"",
    "mtime": "2023-09-26T08:06:33.715Z",
    "size": 71574,
    "path": "../public/_nuxt/index.a0bb45d9.css"
  },
  "/_nuxt/index.fa7707d9.js": {
    "type": "application/javascript",
    "etag": "\"8d9-2rfX8Nve2H/FqY2eGk2H5ZYMbHo\"",
    "mtime": "2023-09-26T08:06:33.721Z",
    "size": 2265,
    "path": "../public/_nuxt/index.fa7707d9.js"
  },
  "/_nuxt/info-box.2000b5f0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"118bb-Wp+oQic4XBfN/guqNSvhbfpvVq4\"",
    "mtime": "2023-09-26T08:06:33.720Z",
    "size": 71867,
    "path": "../public/_nuxt/info-box.2000b5f0.css"
  },
  "/_nuxt/info-box.764c7dc8.js": {
    "type": "application/javascript",
    "etag": "\"491-IM2ryJlVPvLfpDeQPLKCOfYeMRs\"",
    "mtime": "2023-09-26T08:06:33.721Z",
    "size": 1169,
    "path": "../public/_nuxt/info-box.764c7dc8.js"
  },
  "/_nuxt/login.1ff30f27.js": {
    "type": "application/javascript",
    "etag": "\"5e6-P3+YjrEqWZjqobs2Wpurz32i4wY\"",
    "mtime": "2023-09-26T08:06:33.724Z",
    "size": 1510,
    "path": "../public/_nuxt/login.1ff30f27.js"
  },
  "/_nuxt/login.8ec4730f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11735-qfmaO3BajFEL8e4sX1nF/Pn4wMU\"",
    "mtime": "2023-09-26T08:06:33.719Z",
    "size": 71477,
    "path": "../public/_nuxt/login.8ec4730f.css"
  },
  "/_nuxt/Logo.d939d081.png": {
    "type": "image/png",
    "etag": "\"d6b9-2U2fzALv24BCb3gJWV2xFA9KlvA\"",
    "mtime": "2023-09-26T08:06:33.712Z",
    "size": 54969,
    "path": "../public/_nuxt/Logo.d939d081.png"
  },
  "/_nuxt/main.040a107d.js": {
    "type": "application/javascript",
    "etag": "\"11f0-urWpyoWoRLUDe7ZSIdI/nKzNEeE\"",
    "mtime": "2023-09-26T08:06:33.724Z",
    "size": 4592,
    "path": "../public/_nuxt/main.040a107d.js"
  },
  "/_nuxt/main.793c2dec.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"23d4d-H11s0oFKEmSAuc1EYM5MZ5KBTTY\"",
    "mtime": "2023-09-26T08:06:33.721Z",
    "size": 146765,
    "path": "../public/_nuxt/main.793c2dec.css"
  },
  "/_nuxt/Nuanta-Bold.0b6f7ce4.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"207d6-oK0RR6+bErxKAiK++9HOhmw9ii4\"",
    "mtime": "2023-09-26T08:06:33.706Z",
    "size": 133078,
    "path": "../public/_nuxt/Nuanta-Bold.0b6f7ce4.eot"
  },
  "/_nuxt/Nuanta-Bold.5aa64b5f.ttf": {
    "type": "font/ttf",
    "etag": "\"2071c-NYsghdEDBpG+Omfy3hrkrVP9xCQ\"",
    "mtime": "2023-09-26T08:06:33.710Z",
    "size": 132892,
    "path": "../public/_nuxt/Nuanta-Bold.5aa64b5f.ttf"
  },
  "/_nuxt/Nuanta-Bold.b163285d.woff": {
    "type": "font/woff",
    "etag": "\"dac0-4tVXU1jPUkoFnMkChsLmb0S9EQY\"",
    "mtime": "2023-09-26T08:06:33.710Z",
    "size": 56000,
    "path": "../public/_nuxt/Nuanta-Bold.b163285d.woff"
  },
  "/_nuxt/Nuanta-Bold.b3349f0d.woff2": {
    "type": "font/woff2",
    "etag": "\"9324-UU+KJ+AtU0bcwPXLPZX79CLtlEU\"",
    "mtime": "2023-09-26T08:06:33.706Z",
    "size": 37668,
    "path": "../public/_nuxt/Nuanta-Bold.b3349f0d.woff2"
  },
  "/_nuxt/Nuanta-Regular.76e2bbfb.woff": {
    "type": "font/woff",
    "etag": "\"e170-wDKtVEK0mLbdiSs21tVhbEbxF7E\"",
    "mtime": "2023-09-26T08:06:33.707Z",
    "size": 57712,
    "path": "../public/_nuxt/Nuanta-Regular.76e2bbfb.woff"
  },
  "/_nuxt/Nuanta-Regular.ad2a0711.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"2128c-e17u4/Fj6cutv4qN3Fy1cTqPlYk\"",
    "mtime": "2023-09-26T08:06:33.706Z",
    "size": 135820,
    "path": "../public/_nuxt/Nuanta-Regular.ad2a0711.eot"
  },
  "/_nuxt/Nuanta-Regular.bbea65bb.ttf": {
    "type": "font/ttf",
    "etag": "\"211d4-dag09C+OI03D1p5CWpII1c2OrRo\"",
    "mtime": "2023-09-26T08:06:33.712Z",
    "size": 135636,
    "path": "../public/_nuxt/Nuanta-Regular.bbea65bb.ttf"
  },
  "/_nuxt/Nuanta-Regular.d317fc24.woff2": {
    "type": "font/woff2",
    "etag": "\"96c8-2X8UIcOuGAQZ5hmxnYc9CAruowY\"",
    "mtime": "2023-09-26T08:06:33.706Z",
    "size": 38600,
    "path": "../public/_nuxt/Nuanta-Regular.d317fc24.woff2"
  },
  "/_nuxt/nuxt-link.6b49ca74.js": {
    "type": "application/javascript",
    "etag": "\"10e1-PB7uzjhGK3eCfCNTYREJsS5Cli8\"",
    "mtime": "2023-09-26T08:06:33.721Z",
    "size": 4321,
    "path": "../public/_nuxt/nuxt-link.6b49ca74.js"
  },
  "/_nuxt/password-recovery.1ceff09a.js": {
    "type": "application/javascript",
    "etag": "\"664-J7VEuz5buO5vvE8uJtd+tRatXh4\"",
    "mtime": "2023-09-26T08:06:33.722Z",
    "size": 1636,
    "path": "../public/_nuxt/password-recovery.1ceff09a.js"
  },
  "/_nuxt/password-recovery.32ecab76.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11a74-ojNgdoqeALIywGuLs7ytsRCOAHc\"",
    "mtime": "2023-09-26T08:06:33.719Z",
    "size": 72308,
    "path": "../public/_nuxt/password-recovery.32ecab76.css"
  },
  "/_nuxt/product-and-services.4be462a4.js": {
    "type": "application/javascript",
    "etag": "\"3f1-zjMVNzkfcHZBmogKszJp/XapGT0\"",
    "mtime": "2023-09-26T08:06:33.722Z",
    "size": 1009,
    "path": "../public/_nuxt/product-and-services.4be462a4.js"
  },
  "/_nuxt/product-and-services.e4a1fdd3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"116c1-WAKxFrFfYSBXBgNnGTyIAMYwhFQ\"",
    "mtime": "2023-09-26T08:06:33.715Z",
    "size": 71361,
    "path": "../public/_nuxt/product-and-services.e4a1fdd3.css"
  },
  "/_nuxt/register.4f06dd7a.js": {
    "type": "application/javascript",
    "etag": "\"bff-DfYL8s8/M2z1bSkg+MFPP4ED5Ck\"",
    "mtime": "2023-09-26T08:06:33.724Z",
    "size": 3071,
    "path": "../public/_nuxt/register.4f06dd7a.js"
  },
  "/_nuxt/register.f8f4fb89.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11735-APggbYDHKaLY/mjMnZ3Wsqkpjug\"",
    "mtime": "2023-09-26T08:06:33.720Z",
    "size": 71477,
    "path": "../public/_nuxt/register.f8f4fb89.css"
  },
  "/_nuxt/related.728dc92c.js": {
    "type": "application/javascript",
    "etag": "\"2de-PQukpMY8m2gzwXUqgYWjFwQWbuw\"",
    "mtime": "2023-09-26T08:06:33.721Z",
    "size": 734,
    "path": "../public/_nuxt/related.728dc92c.js"
  },
  "/_nuxt/related.784d1f62.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11964-8QmdyLL9q3zqO4kPsBCiMzAaTaU\"",
    "mtime": "2023-09-26T08:06:33.720Z",
    "size": 72036,
    "path": "../public/_nuxt/related.784d1f62.css"
  },
  "/_nuxt/Roboto-Black.5ace0d08.ttf": {
    "type": "font/ttf",
    "etag": "\"2907c-P45AHYCPbOhLVCJmcmUUrIvnMXE\"",
    "mtime": "2023-09-26T08:06:33.706Z",
    "size": 168060,
    "path": "../public/_nuxt/Roboto-Black.5ace0d08.ttf"
  },
  "/_nuxt/Roboto-Bold.ec685a46.ttf": {
    "type": "font/ttf",
    "etag": "\"28da8-YkQqGKn+lFfBr+q/aD0mOmkbd5g\"",
    "mtime": "2023-09-26T08:06:33.706Z",
    "size": 167336,
    "path": "../public/_nuxt/Roboto-Bold.ec685a46.ttf"
  },
  "/_nuxt/Roboto-Light.c576c506.ttf": {
    "type": "font/ttf",
    "etag": "\"28c58-GHiMXWMPppX5KD9jk7+lQbIDFQg\"",
    "mtime": "2023-09-26T08:06:33.706Z",
    "size": 167000,
    "path": "../public/_nuxt/Roboto-Light.c576c506.ttf"
  },
  "/_nuxt/Roboto-Regular.4e147ab6.ttf": {
    "type": "font/ttf",
    "etag": "\"29144-VsXA04veTB8VSd2kPbN7CcYIqtM\"",
    "mtime": "2023-09-26T08:06:33.706Z",
    "size": 168260,
    "path": "../public/_nuxt/Roboto-Regular.4e147ab6.ttf"
  },
  "/_nuxt/thebizhub-logo.b61d510f.jpg": {
    "type": "image/jpeg",
    "etag": "\"ad04-cYEGZ40ExlWbK0wtTJdNAhnd+h8\"",
    "mtime": "2023-09-26T08:06:33.712Z",
    "size": 44292,
    "path": "../public/_nuxt/thebizhub-logo.b61d510f.jpg"
  },
  "/_nuxt/works.c2780c4f.js": {
    "type": "application/javascript",
    "etag": "\"31e-MlfoA6xgCK/hc98rk6cg/xXLeH4\"",
    "mtime": "2023-09-26T08:06:33.721Z",
    "size": 798,
    "path": "../public/_nuxt/works.c2780c4f.js"
  },
  "/_nuxt/works.f54a7bca.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"116a3-DlAjqpLHUQpzsVAnNHEiQ2QnF0A\"",
    "mtime": "2023-09-26T08:06:33.720Z",
    "size": 71331,
    "path": "../public/_nuxt/works.f54a7bca.css"
  },
  "/_nuxt/_id_.55c2ec86.js": {
    "type": "application/javascript",
    "etag": "\"606-sgl52PJv3fwa4+4CH5HMc+x0Nhs\"",
    "mtime": "2023-09-26T08:06:33.724Z",
    "size": 1542,
    "path": "../public/_nuxt/_id_.55c2ec86.js"
  },
  "/_nuxt/_id_.ccfa156f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11b84-NpTdfH9NL6xZmUU7z+/chtaJa70\"",
    "mtime": "2023-09-26T08:06:33.720Z",
    "size": 72580,
    "path": "../public/_nuxt/_id_.ccfa156f.css"
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
