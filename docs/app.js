// node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var i;
var t;
var r;
var o;
var f;
var e;
var c = {};
var s = [];
var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function h(n2, l3) {
  for (var u3 in l3) n2[u3] = l3[u3];
  return n2;
}
function v(n2) {
  var l3 = n2.parentNode;
  l3 && l3.removeChild(n2);
}
function y(l3, u3, i3) {
  var t3, r3, o2, f3 = {};
  for (o2 in u3) "key" == o2 ? t3 = u3[o2] : "ref" == o2 ? r3 = u3[o2] : f3[o2] = u3[o2];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps) for (o2 in l3.defaultProps) void 0 === f3[o2] && (f3[o2] = l3.defaultProps[o2]);
  return p(l3, f3, t3, r3, null);
}
function p(n2, i3, t3, r3, o2) {
  var f3 = { type: n2, props: i3, key: t3, ref: r3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o2 ? ++u : o2 };
  return null == o2 && null != l.vnode && l.vnode(f3), f3;
}
function d() {
  return { current: null };
}
function _(n2) {
  return n2.children;
}
function k(n2, l3, u3, i3, t3) {
  var r3;
  for (r3 in u3) "children" === r3 || "key" === r3 || r3 in l3 || g(n2, r3, null, u3[r3], i3);
  for (r3 in l3) t3 && "function" != typeof l3[r3] || "children" === r3 || "key" === r3 || "value" === r3 || "checked" === r3 || u3[r3] === l3[r3] || g(n2, r3, l3[r3], u3[r3], i3);
}
function b(n2, l3, u3) {
  "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
}
function g(n2, l3, u3, i3, t3) {
  var r3;
  n: if ("style" === l3) if ("string" == typeof u3) n2.style.cssText = u3;
  else {
    if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3) for (l3 in i3) u3 && l3 in u3 || b(n2.style, l3, "");
    if (u3) for (l3 in u3) i3 && u3[l3] === i3[l3] || b(n2.style, l3, u3[l3]);
  }
  else if ("o" === l3[0] && "n" === l3[1]) r3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u3, u3 ? i3 || n2.addEventListener(l3, r3 ? w : m, r3) : n2.removeEventListener(l3, r3 ? w : m, r3);
  else if ("dangerouslySetInnerHTML" !== l3) {
    if (t3) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2) try {
      n2[l3] = null == u3 ? "" : u3;
      break n;
    } catch (n3) {
    }
    "function" == typeof u3 || (null == u3 || false === u3 && -1 == l3.indexOf("-") ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
  }
}
function m(n2) {
  t = true;
  try {
    return this.l[n2.type + false](l.event ? l.event(n2) : n2);
  } finally {
    t = false;
  }
}
function w(n2) {
  t = true;
  try {
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  } finally {
    t = false;
  }
}
function x(n2, l3) {
  this.props = n2, this.context = l3;
}
function A(n2, l3) {
  if (null == l3) return n2.__ ? A(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u3; l3 < n2.__k.length; l3++) if (null != (u3 = n2.__k[l3]) && null != u3.__e) return u3.__e;
  return "function" == typeof n2.type ? A(n2) : null;
}
function P(n2) {
  var l3, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++) if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
      n2.__e = n2.__c.base = u3.__e;
      break;
    }
    return P(n2);
  }
}
function C(n2) {
  t ? setTimeout(n2) : f(n2);
}
function T(n2) {
  (!n2.__d && (n2.__d = true) && r.push(n2) && !$.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || C)($);
}
function $() {
  var n2, l3, u3, i3, t3, o2, f3, e3;
  for (r.sort(function(n3, l4) {
    return n3.__v.__b - l4.__v.__b;
  }); n2 = r.shift(); ) n2.__d && (l3 = r.length, i3 = void 0, t3 = void 0, f3 = (o2 = (u3 = n2).__v).__e, (e3 = u3.__P) && (i3 = [], (t3 = h({}, o2)).__v = o2.__v + 1, M(e3, o2, t3, u3.__n, void 0 !== e3.ownerSVGElement, null != o2.__h ? [f3] : null, i3, null == f3 ? A(o2) : f3, o2.__h), N(i3, o2), o2.__e != f3 && P(o2)), r.length > l3 && r.sort(function(n3, l4) {
    return n3.__v.__b - l4.__v.__b;
  }));
  $.__r = 0;
}
function H(n2, l3, u3, i3, t3, r3, o2, f3, e3, a3) {
  var h3, v3, y3, d2, k3, b3, g4, m3 = i3 && i3.__k || s, w4 = m3.length;
  for (u3.__k = [], h3 = 0; h3 < l3.length; h3++) if (null != (d2 = u3.__k[h3] = null == (d2 = l3[h3]) || "boolean" == typeof d2 ? null : "string" == typeof d2 || "number" == typeof d2 || "bigint" == typeof d2 ? p(null, d2, null, null, d2) : Array.isArray(d2) ? p(_, { children: d2 }, null, null, null) : d2.__b > 0 ? p(d2.type, d2.props, d2.key, d2.ref ? d2.ref : null, d2.__v) : d2)) {
    if (d2.__ = u3, d2.__b = u3.__b + 1, null === (y3 = m3[h3]) || y3 && d2.key == y3.key && d2.type === y3.type) m3[h3] = void 0;
    else for (v3 = 0; v3 < w4; v3++) {
      if ((y3 = m3[v3]) && d2.key == y3.key && d2.type === y3.type) {
        m3[v3] = void 0;
        break;
      }
      y3 = null;
    }
    M(n2, d2, y3 = y3 || c, t3, r3, o2, f3, e3, a3), k3 = d2.__e, (v3 = d2.ref) && y3.ref != v3 && (g4 || (g4 = []), y3.ref && g4.push(y3.ref, null, d2), g4.push(v3, d2.__c || k3, d2)), null != k3 ? (null == b3 && (b3 = k3), "function" == typeof d2.type && d2.__k === y3.__k ? d2.__d = e3 = I(d2, e3, n2) : e3 = z(n2, d2, y3, m3, k3, e3), "function" == typeof u3.type && (u3.__d = e3)) : e3 && y3.__e == e3 && e3.parentNode != n2 && (e3 = A(y3));
  }
  for (u3.__e = b3, h3 = w4; h3--; ) null != m3[h3] && ("function" == typeof u3.type && null != m3[h3].__e && m3[h3].__e == u3.__d && (u3.__d = L(i3).nextSibling), q(m3[h3], m3[h3]));
  if (g4) for (h3 = 0; h3 < g4.length; h3++) S(g4[h3], g4[++h3], g4[++h3]);
}
function I(n2, l3, u3) {
  for (var i3, t3 = n2.__k, r3 = 0; t3 && r3 < t3.length; r3++) (i3 = t3[r3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? I(i3, l3, u3) : z(u3, i3, i3, t3, i3.__e, l3));
  return l3;
}
function j(n2, l3) {
  return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
    j(n3, l3);
  }) : l3.push(n2)), l3;
}
function z(n2, l3, u3, i3, t3, r3) {
  var o2, f3, e3;
  if (void 0 !== l3.__d) o2 = l3.__d, l3.__d = void 0;
  else if (null == u3 || t3 != r3 || null == t3.parentNode) n: if (null == r3 || r3.parentNode !== n2) n2.appendChild(t3), o2 = null;
  else {
    for (f3 = r3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 1) if (f3 == t3) break n;
    n2.insertBefore(t3, r3), o2 = r3;
  }
  return void 0 !== o2 ? o2 : t3.nextSibling;
}
function L(n2) {
  var l3, u3, i3;
  if (null == n2.type || "string" == typeof n2.type) return n2.__e;
  if (n2.__k) {
    for (l3 = n2.__k.length - 1; l3 >= 0; l3--) if ((u3 = n2.__k[l3]) && (i3 = L(u3))) return i3;
  }
  return null;
}
function M(n2, u3, i3, t3, r3, o2, f3, e3, c3) {
  var s3, a3, v3, y3, p3, d2, k3, b3, g4, m3, w4, A3, P3, C3, T4, $3 = u3.type;
  if (void 0 !== u3.constructor) return null;
  null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, o2 = [e3]), (s3 = l.__b) && s3(u3);
  try {
    n: if ("function" == typeof $3) {
      if (b3 = u3.props, g4 = (s3 = $3.contextType) && t3[s3.__c], m3 = s3 ? g4 ? g4.props.value : s3.__ : t3, i3.__c ? k3 = (a3 = u3.__c = i3.__c).__ = a3.__E : ("prototype" in $3 && $3.prototype.render ? u3.__c = a3 = new $3(b3, m3) : (u3.__c = a3 = new x(b3, m3), a3.constructor = $3, a3.render = B), g4 && g4.sub(a3), a3.props = b3, a3.state || (a3.state = {}), a3.context = m3, a3.__n = t3, v3 = a3.__d = true, a3.__h = [], a3._sb = []), null == a3.__s && (a3.__s = a3.state), null != $3.getDerivedStateFromProps && (a3.__s == a3.state && (a3.__s = h({}, a3.__s)), h(a3.__s, $3.getDerivedStateFromProps(b3, a3.__s))), y3 = a3.props, p3 = a3.state, a3.__v = u3, v3) null == $3.getDerivedStateFromProps && null != a3.componentWillMount && a3.componentWillMount(), null != a3.componentDidMount && a3.__h.push(a3.componentDidMount);
      else {
        if (null == $3.getDerivedStateFromProps && b3 !== y3 && null != a3.componentWillReceiveProps && a3.componentWillReceiveProps(b3, m3), !a3.__e && null != a3.shouldComponentUpdate && false === a3.shouldComponentUpdate(b3, a3.__s, m3) || u3.__v === i3.__v) {
          for (u3.__v !== i3.__v && (a3.props = b3, a3.state = a3.__s, a3.__d = false), u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
            n3 && (n3.__ = u3);
          }), w4 = 0; w4 < a3._sb.length; w4++) a3.__h.push(a3._sb[w4]);
          a3._sb = [], a3.__h.length && f3.push(a3);
          break n;
        }
        null != a3.componentWillUpdate && a3.componentWillUpdate(b3, a3.__s, m3), null != a3.componentDidUpdate && a3.__h.push(function() {
          a3.componentDidUpdate(y3, p3, d2);
        });
      }
      if (a3.context = m3, a3.props = b3, a3.__P = n2, A3 = l.__r, P3 = 0, "prototype" in $3 && $3.prototype.render) {
        for (a3.state = a3.__s, a3.__d = false, A3 && A3(u3), s3 = a3.render(a3.props, a3.state, a3.context), C3 = 0; C3 < a3._sb.length; C3++) a3.__h.push(a3._sb[C3]);
        a3._sb = [];
      } else do {
        a3.__d = false, A3 && A3(u3), s3 = a3.render(a3.props, a3.state, a3.context), a3.state = a3.__s;
      } while (a3.__d && ++P3 < 25);
      a3.state = a3.__s, null != a3.getChildContext && (t3 = h(h({}, t3), a3.getChildContext())), v3 || null == a3.getSnapshotBeforeUpdate || (d2 = a3.getSnapshotBeforeUpdate(y3, p3)), T4 = null != s3 && s3.type === _ && null == s3.key ? s3.props.children : s3, H(n2, Array.isArray(T4) ? T4 : [T4], u3, i3, t3, r3, o2, f3, e3, c3), a3.base = u3.__e, u3.__h = null, a3.__h.length && f3.push(a3), k3 && (a3.__E = a3.__ = null), a3.__e = false;
    } else null == o2 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = O(i3.__e, u3, i3, t3, r3, o2, f3, c3);
    (s3 = l.diffed) && s3(u3);
  } catch (n3) {
    u3.__v = null, (c3 || null != o2) && (u3.__e = e3, u3.__h = !!c3, o2[o2.indexOf(e3)] = null), l.__e(n3, u3, i3);
  }
}
function N(n2, u3) {
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function O(l3, u3, i3, t3, r3, o2, f3, e3) {
  var s3, a3, h3, y3 = i3.props, p3 = u3.props, d2 = u3.type, _3 = 0;
  if ("svg" === d2 && (r3 = true), null != o2) {
    for (; _3 < o2.length; _3++) if ((s3 = o2[_3]) && "setAttribute" in s3 == !!d2 && (d2 ? s3.localName === d2 : 3 === s3.nodeType)) {
      l3 = s3, o2[_3] = null;
      break;
    }
  }
  if (null == l3) {
    if (null === d2) return document.createTextNode(p3);
    l3 = r3 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p3.is && p3), o2 = null, e3 = false;
  }
  if (null === d2) y3 === p3 || e3 && l3.data === p3 || (l3.data = p3);
  else {
    if (o2 = o2 && n.call(l3.childNodes), a3 = (y3 = i3.props || c).dangerouslySetInnerHTML, h3 = p3.dangerouslySetInnerHTML, !e3) {
      if (null != o2) for (y3 = {}, _3 = 0; _3 < l3.attributes.length; _3++) y3[l3.attributes[_3].name] = l3.attributes[_3].value;
      (h3 || a3) && (h3 && (a3 && h3.__html == a3.__html || h3.__html === l3.innerHTML) || (l3.innerHTML = h3 && h3.__html || ""));
    }
    if (k(l3, p3, y3, r3, e3), h3) u3.__k = [];
    else if (_3 = u3.props.children, H(l3, Array.isArray(_3) ? _3 : [_3], u3, i3, t3, r3 && "foreignObject" !== d2, o2, f3, o2 ? o2[0] : i3.__k && A(i3, 0), e3), null != o2) for (_3 = o2.length; _3--; ) null != o2[_3] && v(o2[_3]);
    e3 || ("value" in p3 && void 0 !== (_3 = p3.value) && (_3 !== l3.value || "progress" === d2 && !_3 || "option" === d2 && _3 !== y3.value) && g(l3, "value", _3, y3.value, false), "checked" in p3 && void 0 !== (_3 = p3.checked) && _3 !== l3.checked && g(l3, "checked", _3, y3.checked, false));
  }
  return l3;
}
function S(n2, u3, i3) {
  try {
    "function" == typeof n2 ? n2(u3) : n2.current = u3;
  } catch (n3) {
    l.__e(n3, i3);
  }
}
function q(n2, u3, i3) {
  var t3, r3;
  if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || S(t3, null, u3)), null != (t3 = n2.__c)) {
    if (t3.componentWillUnmount) try {
      t3.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u3);
    }
    t3.base = t3.__P = null, n2.__c = void 0;
  }
  if (t3 = n2.__k) for (r3 = 0; r3 < t3.length; r3++) t3[r3] && q(t3[r3], u3, i3 || "function" != typeof n2.type);
  i3 || null == n2.__e || v(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function B(n2, l3, u3) {
  return this.constructor(n2, u3);
}
function D(u3, i3, t3) {
  var r3, o2, f3;
  l.__ && l.__(u3, i3), o2 = (r3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, f3 = [], M(i3, u3 = (!r3 && t3 || i3).__k = y(_, null, [u3]), o2 || c, c, void 0 !== i3.ownerSVGElement, !r3 && t3 ? [t3] : o2 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !r3 && t3 ? t3 : o2 ? o2.__e : i3.firstChild, r3), N(f3, u3);
}
function G(n2, l3) {
  var u3 = { __c: l3 = "__cC" + e++, __: n2, Consumer: function(n3, l4) {
    return n3.children(l4);
  }, Provider: function(n3) {
    var u4, i3;
    return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
      return i3;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u4.some(function(n5) {
        n5.__e = true, T(n5);
      });
    }, this.sub = function(n4) {
      u4.push(n4);
      var l4 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
      };
    }), n3.children;
  } };
  return u3.Provider.__ = u3.Consumer.contextType = u3;
}
n = s.slice, l = { __e: function(n2, l3, u3, i3) {
  for (var t3, r3, o2; l3 = l3.__; ) if ((t3 = l3.__c) && !t3.__) try {
    if ((r3 = t3.constructor) && null != r3.getDerivedStateFromError && (t3.setState(r3.getDerivedStateFromError(n2)), o2 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), o2 = t3.__d), o2) return t3.__E = t3;
  } catch (l4) {
    n2 = l4;
  }
  throw n2;
} }, u = 0, i = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, t = false, x.prototype.setState = function(n2, l3) {
  var u3;
  u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n2 && (n2 = n2(h({}, u3), this.props)), n2 && h(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), T(this));
}, x.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), T(this));
}, x.prototype.render = _, r = [], f = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $.__r = 0, e = 0;

// node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u2;
var i2;
var f2 = [];
var c2 = [];
var e2 = l.__b;
var a2 = l.__r;
var v2 = l.diffed;
var l2 = l.__c;
var m2 = l.unmount;
function b2() {
  for (var t3; t3 = f2.shift(); ) if (t3.__P && t3.__H) try {
    t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
  } catch (r3) {
    t3.__H.__h = [], l.__e(r3, t3.__v);
  }
}
l.__b = function(n2) {
  r2 = null, e2 && e2(n2);
}, l.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var i3 = (r2 = n2.__c).__H;
  i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
  })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [])), u2 = r2;
}, l.diffed = function(t3) {
  v2 && v2(t3);
  var o2 = t3.__c;
  o2 && o2.__H && (o2.__H.__h.length && (1 !== f2.push(o2) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o2.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
  })), u2 = r2 = null;
}, l.__c = function(t3, r3) {
  r3.some(function(t4) {
    try {
      t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
        return !n2.__ || w2(n2);
      });
    } catch (u3) {
      r3.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r3 = [], l.__e(u3, t4.__v);
    }
  }), l2 && l2(t3, r3);
}, l.unmount = function(t3) {
  m2 && m2(t3);
  var r3, u3 = t3.__c;
  u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
    try {
      k2(n2);
    } catch (n3) {
      r3 = n3;
    }
  }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
};
var g2 = "function" == typeof requestAnimationFrame;
function j2(n2) {
  var t3, r3 = function() {
    clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u3 = setTimeout(r3, 100);
  g2 && (t3 = requestAnimationFrame(r3));
}
function k2(n2) {
  var t3 = r2, u3 = n2.__c;
  "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
}
function w2(n2) {
  var t3 = r2;
  n2.__c = n2.__(), r2 = t3;
}

// node_modules/preact/compat/dist/compat.module.js
function g3(n2, t3) {
  for (var e3 in t3) n2[e3] = t3[e3];
  return n2;
}
function C2(n2, t3) {
  for (var e3 in n2) if ("__source" !== e3 && !(e3 in t3)) return true;
  for (var r3 in t3) if ("__source" !== r3 && n2[r3] !== t3[r3]) return true;
  return false;
}
function w3(n2) {
  this.props = n2;
}
(w3.prototype = new x()).isPureReactComponent = true, w3.prototype.shouldComponentUpdate = function(n2, t3) {
  return C2(this.props, n2) || C2(this.state, t3);
};
var x3 = l.__b;
l.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), x3 && x3(n2);
};
var N2 = "undefined" != typeof Symbol && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
var T3 = l.__e;
l.__e = function(n2, t3, e3, r3) {
  if (n2.then) {
    for (var u3, o2 = t3; o2 = o2.__; ) if ((u3 = o2.__c) && u3.__c) return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
  }
  T3(n2, t3, e3, r3);
};
var I2 = l.unmount;
function L2(n2, t3, e3) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
    "function" == typeof n3.__c && n3.__c();
  }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
    return L2(n3, t3, e3);
  })), n2;
}
function U(n2, t3, e3) {
  return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
    return U(n3, t3, e3);
  }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e3)), n2;
}
function D2() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F3(n2) {
  var t3 = n2.__.__c;
  return t3 && t3.__a && t3.__a(n2);
}
function V2() {
  this.u = null, this.o = null;
}
l.unmount = function(n2) {
  var t3 = n2.__c;
  t3 && t3.__R && t3.__R(), t3 && true === n2.__h && (n2.type = null), I2 && I2(n2);
}, (D2.prototype = new x()).__c = function(n2, t3) {
  var e3 = t3.__c, r3 = this;
  null == r3.t && (r3.t = []), r3.t.push(e3);
  var u3 = F3(r3.__v), o2 = false, i3 = function() {
    o2 || (o2 = true, e3.__R = null, u3 ? u3(l3) : l3());
  };
  e3.__R = i3;
  var l3 = function() {
    if (!--r3.__u) {
      if (r3.state.__a) {
        var n3 = r3.state.__a;
        r3.__v.__k[0] = U(n3, n3.__c.__P, n3.__c.__O);
      }
      var t4;
      for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); ) t4.forceUpdate();
    }
  }, c3 = true === t3.__h;
  r3.__u++ || c3 || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
}, D2.prototype.componentWillUnmount = function() {
  this.t = [];
}, D2.prototype.render = function(n2, e3) {
  if (this.__b) {
    if (this.__v.__k) {
      var r3 = document.createElement("div"), o2 = this.__v.__k[0].__c;
      this.__v.__k[0] = L2(this.__b, r3, o2.__O = o2.__P);
    }
    this.__b = null;
  }
  var i3 = e3.__a && y(_, null, n2.fallback);
  return i3 && (i3.__h = null), [y(_, null, e3.__a ? null : n2.children), i3];
};
var W = function(n2, t3, e3) {
  if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size)) for (e3 = n2.u; e3; ) {
    for (; e3.length > 3; ) e3.pop()();
    if (e3[1] < e3[0]) break;
    n2.u = e3 = e3[2];
  }
};
function P2(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function $2(n2) {
  var e3 = this, r3 = n2.i;
  e3.componentWillUnmount = function() {
    D(null, e3.l), e3.l = null, e3.i = null;
  }, e3.i && e3.i !== r3 && e3.componentWillUnmount(), n2.__v ? (e3.l || (e3.i = r3, e3.l = { nodeType: 1, parentNode: r3, childNodes: [], appendChild: function(n3) {
    this.childNodes.push(n3), e3.i.appendChild(n3);
  }, insertBefore: function(n3, t3) {
    this.childNodes.push(n3), e3.i.appendChild(n3);
  }, removeChild: function(n3) {
    this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.i.removeChild(n3);
  } }), D(y(P2, { context: e3.context }, n2.__v), e3.l)) : e3.l && e3.componentWillUnmount();
}
function j3(n2, e3) {
  var r3 = y($2, { __v: n2, i: e3 });
  return r3.containerInfo = e3, r3;
}
(V2.prototype = new x()).__a = function(n2) {
  var t3 = this, e3 = F3(t3.__v), r3 = t3.o.get(n2);
  return r3[0]++, function(u3) {
    var o2 = function() {
      t3.props.revealOrder ? (r3.push(u3), W(t3, n2, r3)) : u3();
    };
    e3 ? e3(o2) : o2();
  };
}, V2.prototype.render = function(n2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t3 = j(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
  for (var e3 = t3.length; e3--; ) this.o.set(t3[e3], this.u = [1, 0, this.u]);
  return n2.children;
}, V2.prototype.componentDidUpdate = V2.prototype.componentDidMount = function() {
  var n2 = this;
  this.o.forEach(function(t3, e3) {
    W(n2, e3, t3);
  });
};
var z2 = "undefined" != typeof Symbol && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103;
var B2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var H2 = "undefined" != typeof document;
var Z = function(n2) {
  return ("undefined" != typeof Symbol && "symbol" == typeof /* @__PURE__ */ Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
};
x.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
  Object.defineProperty(x.prototype, t3, { configurable: true, get: function() {
    return this["UNSAFE_" + t3];
  }, set: function(n2) {
    Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
  } });
});
var G2 = l.event;
function J() {
}
function K() {
  return this.cancelBubble;
}
function Q() {
  return this.defaultPrevented;
}
l.event = function(n2) {
  return G2 && (n2 = G2(n2)), n2.persist = J, n2.isPropagationStopped = K, n2.isDefaultPrevented = Q, n2.nativeEvent = n2;
};
var X;
var nn = { configurable: true, get: function() {
  return this.class;
} };
var tn = l.vnode;
l.vnode = function(n2) {
  var t3 = n2.type, e3 = n2.props, u3 = e3;
  if ("string" == typeof t3) {
    var o2 = -1 === t3.indexOf("-");
    for (var i3 in u3 = {}, e3) {
      var l3 = e3[i3];
      H2 && "children" === i3 && "noscript" === t3 || "value" === i3 && "defaultValue" in e3 && null == l3 || ("defaultValue" === i3 && "value" in e3 && null == e3.value ? i3 = "value" : "download" === i3 && true === l3 ? l3 = "" : /ondoubleclick/i.test(i3) ? i3 = "ondblclick" : /^onchange(textarea|input)/i.test(i3 + t3) && !Z(e3.type) ? i3 = "oninput" : /^onfocus$/i.test(i3) ? i3 = "onfocusin" : /^onblur$/i.test(i3) ? i3 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i3) ? i3 = i3.toLowerCase() : o2 && B2.test(i3) ? i3 = i3.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l3 && (l3 = void 0), /^oninput$/i.test(i3) && (i3 = i3.toLowerCase(), u3[i3] && (i3 = "oninputCapture")), u3[i3] = l3);
    }
    "select" == t3 && u3.multiple && Array.isArray(u3.value) && (u3.value = j(e3.children).forEach(function(n3) {
      n3.props.selected = -1 != u3.value.indexOf(n3.props.value);
    })), "select" == t3 && null != u3.defaultValue && (u3.value = j(e3.children).forEach(function(n3) {
      n3.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n3.props.value) : u3.defaultValue == n3.props.value;
    })), n2.props = u3, e3.class != e3.className && (nn.enumerable = "className" in e3, null != e3.className && (u3.class = e3.className), Object.defineProperty(u3, "className", nn));
  }
  n2.$$typeof = z2, tn && tn(n2);
};
var en = l.__r;
l.__r = function(n2) {
  en && en(n2), X = n2.__c;
};

// node_modules/@fullcalendar/core/internal-common.js
var warnedMessages = /* @__PURE__ */ new Set();
function warnOnce(message) {
  if (!warnedMessages.has(message)) {
    warnedMessages.add(message);
    console.warn(message + " Consider upgrading to FullCalendar v7: https://fullcalendar.io/docs/upgrading-from-v6");
  }
}
var MAJOR_VERSION_ERROR = "This plugin is from FullCalendar v6, but your calendar is v7 (the current version). Fix: import plugins from your v7 package, e.g. import dayGridPlugin from '@fullcalendar/react/daygrid', then uninstall @fullcalendar/core, @fullcalendar/daygrid and the other v6 packages. Don't downgrade to v6.";
var styleTexts = [];
var styleEls = /* @__PURE__ */ new Map();
function injectStyles(styleText) {
  styleTexts.push(styleText);
  styleEls.forEach((styleEl) => {
    appendStylesTo(styleEl, styleText);
  });
}
function ensureElHasStyles(el) {
  if (el.isConnected && // sometimes true if SSR system simulates DOM
  el.getRootNode) {
    registerStylesRoot(el.getRootNode());
  }
}
function registerStylesRoot(rootNode) {
  let styleEl = styleEls.get(rootNode);
  if (!styleEl || !styleEl.isConnected) {
    styleEl = rootNode.querySelector("style[data-fullcalendar]");
    if (!styleEl) {
      const isDocument = rootNode.nodeType === 9;
      const ownerDocument = isDocument ? rootNode : rootNode.ownerDocument;
      styleEl = ownerDocument.createElement("style");
      styleEl.setAttribute("data-fullcalendar", "");
      const nonce = getNonceValue();
      if (nonce) {
        styleEl.nonce = nonce;
      }
      const parentEl = isDocument ? ownerDocument.head : rootNode;
      const insertBefore = isDocument ? parentEl.querySelector("script,link[rel=stylesheet],link[as=style],style") : parentEl.firstChild;
      parentEl.insertBefore(styleEl, insertBefore);
    }
    styleEls.set(rootNode, styleEl);
    hydrateStylesRoot(styleEl);
  }
}
function hydrateStylesRoot(styleEl) {
  for (const styleText of styleTexts) {
    appendStylesTo(styleEl, styleText);
  }
}
function appendStylesTo(styleEl, styleText) {
  const { sheet } = styleEl;
  if (!sheet) {
    warnOnce("FullCalendar could not inject its styles, possibly because of a Content Security Policy. v7 distributes plain CSS files instead of injecting styles.");
    return;
  }
  const ruleCnt = sheet.cssRules.length;
  styleText.split("}").forEach((styleStr, i3) => {
    styleStr = styleStr.trim();
    if (styleStr) {
      sheet.insertRule(styleStr + "}", ruleCnt + i3);
    }
  });
}
var queriedNonceValue;
function getNonceValue() {
  if (queriedNonceValue === void 0) {
    queriedNonceValue = queryNonceValue();
  }
  return queriedNonceValue;
}
function queryNonceValue() {
  try {
    const metaWithNonce = document.querySelector('meta[name="csp-nonce"]');
    if (metaWithNonce && metaWithNonce.hasAttribute("content")) {
      return metaWithNonce.getAttribute("content");
    }
    const elWithNonce = document.querySelector("script[nonce]");
    if (elWithNonce) {
      return elWithNonce.nonce || "";
    }
  } catch (err) {
  }
  return "";
}
if (typeof document !== "undefined") {
  registerStylesRoot(document);
}
var css_248z = ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{flex-shrink:0;max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
injectStyles(css_248z);
var DelayedRunner = class {
  constructor(drainedOption) {
    this.drainedOption = drainedOption;
    this.isRunning = false;
    this.isDirty = false;
    this.pauseDepths = {};
    this.timeoutId = 0;
  }
  request(delay) {
    this.isDirty = true;
    if (!this.isPaused()) {
      this.clearTimeout();
      if (delay == null) {
        this.tryDrain();
      } else {
        this.timeoutId = setTimeout(
          // NOT OPTIMAL! TODO: look at debounce
          this.tryDrain.bind(this),
          delay
        );
      }
    }
  }
  pause(scope = "") {
    let { pauseDepths } = this;
    pauseDepths[scope] = (pauseDepths[scope] || 0) + 1;
    this.clearTimeout();
  }
  resume(scope = "", force) {
    let { pauseDepths } = this;
    if (scope in pauseDepths) {
      if (force) {
        delete pauseDepths[scope];
      } else {
        pauseDepths[scope] -= 1;
        let depth = pauseDepths[scope];
        if (depth <= 0) {
          delete pauseDepths[scope];
        }
      }
      this.tryDrain();
    }
  }
  isPaused() {
    return Object.keys(this.pauseDepths).length;
  }
  tryDrain() {
    if (!this.isRunning && !this.isPaused()) {
      this.isRunning = true;
      while (this.isDirty) {
        this.isDirty = false;
        this.drained();
      }
      this.isRunning = false;
    }
  }
  clear() {
    this.clearTimeout();
    this.isDirty = false;
    this.pauseDepths = {};
  }
  clearTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = 0;
    }
  }
  drained() {
    if (this.drainedOption) {
      this.drainedOption();
    }
  }
};
function removeElement(el) {
  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
}
function elementClosest(el, selector) {
  if (el.closest) {
    return el.closest(selector);
  }
  if (!document.documentElement.contains(el)) {
    return null;
  }
  do {
    if (elementMatches(el, selector)) {
      return el;
    }
    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1);
  return null;
}
function elementMatches(el, selector) {
  let method = el.matches || el.matchesSelector || el.msMatchesSelector;
  return method.call(el, selector);
}
function findElements(container, selector) {
  let containers = container instanceof HTMLElement ? [container] : container;
  let allMatches = [];
  for (let i3 = 0; i3 < containers.length; i3 += 1) {
    let matches2 = containers[i3].querySelectorAll(selector);
    for (let j4 = 0; j4 < matches2.length; j4 += 1) {
      allMatches.push(matches2[j4]);
    }
  }
  return allMatches;
}
var PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;
function applyStyle(el, props) {
  for (let propName in props) {
    applyStyleProp(el, propName, props[propName]);
  }
}
function applyStyleProp(el, name, val) {
  if (val == null) {
    el.style[name] = "";
  } else if (typeof val === "number" && PIXEL_PROP_RE.test(name)) {
    el.style[name] = `${val}px`;
  } else {
    el.style[name] = val;
  }
}
function getEventTargetViaRoot(ev) {
  var _a, _b;
  return (_b = (_a = ev.composedPath) === null || _a === void 0 ? void 0 : _a.call(ev)[0]) !== null && _b !== void 0 ? _b : ev.target;
}
var guid$1 = 0;
function getUniqueDomId() {
  guid$1 += 1;
  return "fc-dom-" + guid$1;
}
function preventDefault(ev) {
  ev.preventDefault();
}
function buildDelegationHandler(selector, handler) {
  return (ev) => {
    let matchedChild = elementClosest(ev.target, selector);
    if (matchedChild) {
      handler.call(matchedChild, ev, matchedChild);
    }
  };
}
function listenBySelector(container, eventType, selector, handler) {
  let attachedHandler = buildDelegationHandler(selector, handler);
  container.addEventListener(eventType, attachedHandler);
  return () => {
    container.removeEventListener(eventType, attachedHandler);
  };
}
function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
  let currentMatchedChild;
  return listenBySelector(container, "mouseover", selector, (mouseOverEv, matchedChild) => {
    if (matchedChild !== currentMatchedChild) {
      currentMatchedChild = matchedChild;
      onMouseEnter(mouseOverEv, matchedChild);
      let realOnMouseLeave = (mouseLeaveEv) => {
        currentMatchedChild = null;
        onMouseLeave(mouseLeaveEv, matchedChild);
        matchedChild.removeEventListener("mouseleave", realOnMouseLeave);
      };
      matchedChild.addEventListener("mouseleave", realOnMouseLeave);
    }
  });
}
var transitionEventNames = [
  "webkitTransitionEnd",
  "otransitionend",
  "oTransitionEnd",
  "msTransitionEnd",
  "transitionend"
];
function whenTransitionDone(el, callback) {
  let realCallback = (ev) => {
    callback(ev);
    transitionEventNames.forEach((eventName) => {
      el.removeEventListener(eventName, realCallback);
    });
  };
  transitionEventNames.forEach((eventName) => {
    el.addEventListener(eventName, realCallback);
  });
}
function createAriaClickAttrs(handler) {
  return Object.assign({ onClick: handler }, createAriaKeyboardAttrs(handler));
}
function createAriaKeyboardAttrs(handler) {
  return {
    tabIndex: 0,
    onKeyDown(ev) {
      if (ev.key === "Enter" || ev.key === " ") {
        handler(ev);
        ev.preventDefault();
      }
    }
  };
}
var guidNumber = 0;
function guid() {
  guidNumber += 1;
  return String(guidNumber);
}
function disableCursor() {
  document.body.classList.add("fc-not-allowed");
}
function enableCursor() {
  document.body.classList.remove("fc-not-allowed");
}
function preventSelection(el) {
  el.style.userSelect = "none";
  el.style.webkitUserSelect = "none";
  el.addEventListener("selectstart", preventDefault);
}
function allowSelection(el) {
  el.style.userSelect = "";
  el.style.webkitUserSelect = "";
  el.removeEventListener("selectstart", preventDefault);
}
function preventContextMenu(el) {
  el.addEventListener("contextmenu", preventDefault);
}
function allowContextMenu(el) {
  el.removeEventListener("contextmenu", preventDefault);
}
function parseFieldSpecs(input) {
  let specs = [];
  let tokens = [];
  let i3;
  let token;
  if (typeof input === "string") {
    tokens = input.split(/\s*,\s*/);
  } else if (typeof input === "function") {
    tokens = [input];
  } else if (Array.isArray(input)) {
    tokens = input;
  }
  for (i3 = 0; i3 < tokens.length; i3 += 1) {
    token = tokens[i3];
    if (typeof token === "string") {
      specs.push(token.charAt(0) === "-" ? { field: token.substring(1), order: -1 } : { field: token, order: 1 });
    } else if (typeof token === "function") {
      specs.push({ func: token });
    }
  }
  return specs;
}
function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
  let i3;
  let cmp;
  for (i3 = 0; i3 < fieldSpecs.length; i3 += 1) {
    cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i3]);
    if (cmp) {
      return cmp;
    }
  }
  return 0;
}
function compareByFieldSpec(obj0, obj1, fieldSpec) {
  if (fieldSpec.func) {
    return fieldSpec.func(obj0, obj1);
  }
  return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field]) * (fieldSpec.order || 1);
}
function flexibleCompare(a3, b3) {
  if (!a3 && !b3) {
    return 0;
  }
  if (b3 == null) {
    return -1;
  }
  if (a3 == null) {
    return 1;
  }
  if (typeof a3 === "string" || typeof b3 === "string") {
    return String(a3).localeCompare(String(b3));
  }
  return a3 - b3;
}
function padStart(val, len) {
  let s3 = String(val);
  return "000".substr(0, len - s3.length) + s3;
}
function formatWithOrdinals(formatter, args, fallbackText) {
  if (typeof formatter === "function") {
    return formatter(...args);
  }
  if (typeof formatter === "string") {
    return args.reduce((str, arg, index4) => str.replace("$" + index4, arg || ""), formatter);
  }
  return fallbackText;
}
function compareNumbers(a3, b3) {
  return a3 - b3;
}
function isInt(n2) {
  return n2 % 1 === 0;
}
function computeSmallestCellWidth(cellEl) {
  let allWidthEl = cellEl.querySelector(".fc-scrollgrid-shrink-frame");
  let contentWidthEl = cellEl.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!allWidthEl) {
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  }
  if (!contentWidthEl) {
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  }
  return cellEl.getBoundingClientRect().width - allWidthEl.getBoundingClientRect().width + // the cell padding+border
  contentWidthEl.getBoundingClientRect().width;
}
var PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function createDuration(input, unit) {
  if (typeof input === "string") {
    return parseString(input);
  }
  if (typeof input === "object" && input) {
    return parseObject(input);
  }
  if (typeof input === "number") {
    return parseObject({ [unit || "milliseconds"]: input });
  }
  return null;
}
function parseString(s3) {
  let m3 = PARSE_RE.exec(s3);
  if (m3) {
    let sign = m3[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: sign * (m3[2] ? parseInt(m3[2], 10) : 0),
      milliseconds: sign * ((m3[3] ? parseInt(m3[3], 10) : 0) * 60 * 60 * 1e3 + // hours
      (m3[4] ? parseInt(m3[4], 10) : 0) * 60 * 1e3 + // minutes
      (m3[5] ? parseInt(m3[5], 10) : 0) * 1e3 + // seconds
      (m3[6] ? parseInt(m3[6], 10) : 0))
    };
  }
  return null;
}
function parseObject(obj) {
  let duration2 = {
    years: obj.years || obj.year || 0,
    months: obj.months || obj.month || 0,
    days: obj.days || obj.day || 0,
    milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1e3 + // hours
    (obj.minutes || obj.minute || 0) * 60 * 1e3 + // minutes
    (obj.seconds || obj.second || 0) * 1e3 + // seconds
    (obj.milliseconds || obj.millisecond || obj.ms || 0)
    // ms
  };
  let weeks = obj.weeks || obj.week;
  if (weeks) {
    duration2.days += weeks * 7;
    duration2.specifiedWeeks = true;
  }
  return duration2;
}
function durationsEqual(d0, d1) {
  return d0.years === d1.years && d0.months === d1.months && d0.days === d1.days && d0.milliseconds === d1.milliseconds;
}
function subtractDurations(d1, d0) {
  return {
    years: d1.years - d0.years,
    months: d1.months - d0.months,
    days: d1.days - d0.days,
    milliseconds: d1.milliseconds - d0.milliseconds
  };
}
function asRoughYears(dur) {
  return asRoughDays(dur) / 365;
}
function asRoughMonths(dur) {
  return asRoughDays(dur) / 30;
}
function asRoughDays(dur) {
  return asRoughMs(dur) / 864e5;
}
function asRoughMs(dur) {
  return dur.years * (365 * 864e5) + dur.months * (30 * 864e5) + dur.days * 864e5 + dur.milliseconds;
}
function greatestDurationDenominator(dur) {
  let ms = dur.milliseconds;
  if (ms) {
    if (ms % 1e3 !== 0) {
      return { unit: "millisecond", value: ms };
    }
    if (ms % (1e3 * 60) !== 0) {
      return { unit: "second", value: ms / 1e3 };
    }
    if (ms % (1e3 * 60 * 60) !== 0) {
      return { unit: "minute", value: ms / (1e3 * 60) };
    }
    if (ms) {
      return { unit: "hour", value: ms / (1e3 * 60 * 60) };
    }
  }
  if (dur.days) {
    if (dur.specifiedWeeks && dur.days % 7 === 0) {
      return { unit: "week", value: dur.days / 7 };
    }
    return { unit: "day", value: dur.days };
  }
  if (dur.months) {
    return { unit: "month", value: dur.months };
  }
  if (dur.years) {
    return { unit: "year", value: dur.years };
  }
  return { unit: "millisecond", value: 0 };
}
function isArraysEqual(a0, a1, equalityFunc) {
  if (a0 === a1) {
    return true;
  }
  let len = a0.length;
  let i3;
  if (len !== a1.length) {
    return false;
  }
  for (i3 = 0; i3 < len; i3 += 1) {
    if (!(equalityFunc ? equalityFunc(a0[i3], a1[i3]) : a0[i3] === a1[i3])) {
      return false;
    }
  }
  return true;
}
var DAY_IDS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function addWeeks(m3, n2) {
  let a3 = dateToUtcArray(m3);
  a3[2] += n2 * 7;
  return arrayToUtcDate(a3);
}
function addDays(m3, n2) {
  let a3 = dateToUtcArray(m3);
  a3[2] += n2;
  return arrayToUtcDate(a3);
}
function addMs(m3, n2) {
  let a3 = dateToUtcArray(m3);
  a3[6] += n2;
  return arrayToUtcDate(a3);
}
function diffWeeks(m0, m1) {
  return diffDays(m0, m1) / 7;
}
function diffDays(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1e3 * 60 * 60 * 24);
}
function diffHours(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1e3 * 60 * 60);
}
function diffMinutes(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1e3 * 60);
}
function diffSeconds(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / 1e3;
}
function diffDayAndTime(m0, m1) {
  let m0day = startOfDay(m0);
  let m1day = startOfDay(m1);
  return {
    years: 0,
    months: 0,
    days: Math.round(diffDays(m0day, m1day)),
    milliseconds: m1.valueOf() - m1day.valueOf() - (m0.valueOf() - m0day.valueOf())
  };
}
function diffWholeWeeks(m0, m1) {
  let d2 = diffWholeDays(m0, m1);
  if (d2 !== null && d2 % 7 === 0) {
    return d2 / 7;
  }
  return null;
}
function diffWholeDays(m0, m1) {
  if (timeAsMs(m0) === timeAsMs(m1)) {
    return Math.round(diffDays(m0, m1));
  }
  return null;
}
function startOfDay(m3) {
  return arrayToUtcDate([
    m3.getUTCFullYear(),
    m3.getUTCMonth(),
    m3.getUTCDate()
  ]);
}
function startOfHour(m3) {
  return arrayToUtcDate([
    m3.getUTCFullYear(),
    m3.getUTCMonth(),
    m3.getUTCDate(),
    m3.getUTCHours()
  ]);
}
function startOfMinute(m3) {
  return arrayToUtcDate([
    m3.getUTCFullYear(),
    m3.getUTCMonth(),
    m3.getUTCDate(),
    m3.getUTCHours(),
    m3.getUTCMinutes()
  ]);
}
function startOfSecond(m3) {
  return arrayToUtcDate([
    m3.getUTCFullYear(),
    m3.getUTCMonth(),
    m3.getUTCDate(),
    m3.getUTCHours(),
    m3.getUTCMinutes(),
    m3.getUTCSeconds()
  ]);
}
function weekOfYear(marker, dow, doy) {
  let y3 = marker.getUTCFullYear();
  let w4 = weekOfGivenYear(marker, y3, dow, doy);
  if (w4 < 1) {
    return weekOfGivenYear(marker, y3 - 1, dow, doy);
  }
  let nextW = weekOfGivenYear(marker, y3 + 1, dow, doy);
  if (nextW >= 1) {
    return Math.min(w4, nextW);
  }
  return w4;
}
function weekOfGivenYear(marker, year, dow, doy) {
  let firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
  let dayStart = startOfDay(marker);
  let days = Math.round(diffDays(firstWeekStart, dayStart));
  return Math.floor(days / 7) + 1;
}
function firstWeekOffset(year, dow, doy) {
  let fwd = 7 + dow - doy;
  let fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
  return -fwdlw + fwd - 1;
}
function dateToLocalArray(date) {
  return [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  ];
}
function arrayToLocalDate(a3) {
  return new Date(
    a3[0],
    a3[1] || 0,
    a3[2] == null ? 1 : a3[2],
    // day of month
    a3[3] || 0,
    a3[4] || 0,
    a3[5] || 0
  );
}
function dateToUtcArray(date) {
  return [
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  ];
}
function arrayToUtcDate(a3) {
  if (a3.length === 1) {
    a3 = a3.concat([0]);
  }
  return new Date(Date.UTC(...a3));
}
function isValidDate(m3) {
  return !isNaN(m3.valueOf());
}
function timeAsMs(m3) {
  return m3.getUTCHours() * 1e3 * 60 * 60 + m3.getUTCMinutes() * 1e3 * 60 + m3.getUTCSeconds() * 1e3 + m3.getUTCMilliseconds();
}
function buildIsoString(marker, timeZoneOffset, stripZeroTime = false) {
  let s3 = marker.toISOString();
  s3 = s3.replace(".000", "");
  if (stripZeroTime) {
    s3 = s3.replace("T00:00:00Z", "");
  }
  if (s3.length > 10) {
    if (timeZoneOffset == null) {
      s3 = s3.replace("Z", "");
    } else if (timeZoneOffset !== 0) {
      s3 = s3.replace("Z", formatTimeZoneOffset(timeZoneOffset, true));
    }
  }
  return s3;
}
function formatDayString(marker) {
  return marker.toISOString().replace(/T.*$/, "");
}
function formatIsoMonthStr(marker) {
  return marker.toISOString().match(/^\d{4}-\d{2}/)[0];
}
function formatTimeZoneOffset(minutes, doIso = false) {
  let sign = minutes < 0 ? "-" : "+";
  let abs = Math.abs(minutes);
  let hours = Math.floor(abs / 60);
  let mins = Math.round(abs % 60);
  if (doIso) {
    return `${sign + padStart(hours, 2)}:${padStart(mins, 2)}`;
  }
  return `GMT${sign}${hours}${mins ? `:${padStart(mins, 2)}` : ""}`;
}
function memoize(workerFunc, resEquality, teardownFunc) {
  let currentArgs;
  let currentRes;
  return function(...newArgs) {
    if (!currentArgs) {
      currentRes = workerFunc.apply(this, newArgs);
    } else if (!isArraysEqual(currentArgs, newArgs)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }
      let res = workerFunc.apply(this, newArgs);
      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }
    currentArgs = newArgs;
    return currentRes;
  };
}
function memoizeObjArg(workerFunc, resEquality, teardownFunc) {
  let currentArg;
  let currentRes;
  return (newArg) => {
    if (!currentArg) {
      currentRes = workerFunc.call(this, newArg);
    } else if (!isPropsEqual(currentArg, newArg)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }
      let res = workerFunc.call(this, newArg);
      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }
    currentArg = newArg;
    return currentRes;
  };
}
var EXTENDED_SETTINGS_AND_SEVERITIES = {
  week: 3,
  separator: 9,
  omitZeroMinute: 9,
  meridiem: 9,
  omitCommas: 9
};
var STANDARD_DATE_PROP_SEVERITIES = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
};
var MERIDIEM_RE = /\s*([ap])\.?m\.?/i;
var COMMA_RE = /,/g;
var MULTI_SPACE_RE = /\s+/g;
var LTR_RE = /\u200e/g;
var UTC_RE = /UTC|GMT/;
var NativeFormatter = class {
  constructor(formatSettings) {
    let standardDateProps = {};
    let extendedSettings = {};
    let smallestUnitNum = 9;
    for (let name in formatSettings) {
      if (name in EXTENDED_SETTINGS_AND_SEVERITIES) {
        extendedSettings[name] = formatSettings[name];
        const severity = EXTENDED_SETTINGS_AND_SEVERITIES[name];
        if (severity < 9) {
          smallestUnitNum = Math.min(EXTENDED_SETTINGS_AND_SEVERITIES[name], smallestUnitNum);
        }
      } else {
        standardDateProps[name] = formatSettings[name];
        if (name in STANDARD_DATE_PROP_SEVERITIES) {
          smallestUnitNum = Math.min(STANDARD_DATE_PROP_SEVERITIES[name], smallestUnitNum);
        }
      }
    }
    this.standardDateProps = standardDateProps;
    this.extendedSettings = extendedSettings;
    this.smallestUnitNum = smallestUnitNum;
    this.buildFormattingFunc = memoize(buildFormattingFunc);
  }
  format(date, context) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
  }
  formatRange(start2, end, context, betterDefaultSeparator) {
    let { standardDateProps, extendedSettings } = this;
    let diffSeverity = computeMarkerDiffSeverity(start2.marker, end.marker, context.calendarSystem);
    if (!diffSeverity) {
      return this.format(start2, context);
    }
    let biggestUnitForPartial = diffSeverity;
    if (biggestUnitForPartial > 1 && // the two dates are different in a way that's larger scale than time
    (standardDateProps.year === "numeric" || standardDateProps.year === "2-digit") && (standardDateProps.month === "numeric" || standardDateProps.month === "2-digit") && (standardDateProps.day === "numeric" || standardDateProps.day === "2-digit")) {
      biggestUnitForPartial = 1;
    }
    let full0 = this.format(start2, context);
    let full1 = this.format(end, context);
    if (full0 === full1) {
      return full0;
    }
    let partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
    let partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
    let partial0 = partialFormattingFunc(start2);
    let partial1 = partialFormattingFunc(end);
    let insertion = findCommonInsertion(full0, partial0, full1, partial1);
    let separator = extendedSettings.separator || betterDefaultSeparator || context.defaultSeparator || "";
    if (insertion) {
      return insertion.before + partial0 + separator + partial1 + insertion.after;
    }
    return full0 + separator + full1;
  }
  getSmallestUnit() {
    switch (this.smallestUnitNum) {
      case 7:
      case 6:
      case 5:
        return "year";
      case 4:
        return "month";
      case 3:
        return "week";
      case 2:
        return "day";
      default:
        return "time";
    }
  }
};
function buildFormattingFunc(standardDateProps, extendedSettings, context) {
  let standardDatePropCnt = Object.keys(standardDateProps).length;
  if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === "short") {
    return (date) => formatTimeZoneOffset(date.timeZoneOffset);
  }
  if (standardDatePropCnt === 0 && extendedSettings.week) {
    return (date) => formatWeekNumber(context.computeWeekNumber(date.marker), context.weekText, context.weekTextLong, context.locale, extendedSettings.week);
  }
  return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
}
function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
  standardDateProps = Object.assign({}, standardDateProps);
  extendedSettings = Object.assign({}, extendedSettings);
  sanitizeSettings(standardDateProps, extendedSettings);
  standardDateProps.timeZone = "UTC";
  let normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
  let zeroFormat;
  if (extendedSettings.omitZeroMinute) {
    let zeroProps = Object.assign({}, standardDateProps);
    delete zeroProps.minute;
    zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
  }
  return (date) => {
    let { marker } = date;
    let format2;
    if (zeroFormat && !marker.getUTCMinutes()) {
      format2 = zeroFormat;
    } else {
      format2 = normalFormat;
    }
    let s3 = format2.format(marker);
    return postProcess(s3, date, standardDateProps, extendedSettings, context);
  };
}
function sanitizeSettings(standardDateProps, extendedSettings) {
  if (standardDateProps.timeZoneName) {
    if (!standardDateProps.hour) {
      standardDateProps.hour = "2-digit";
    }
    if (!standardDateProps.minute) {
      standardDateProps.minute = "2-digit";
    }
  }
  if (standardDateProps.timeZoneName === "long") {
    standardDateProps.timeZoneName = "short";
  }
  if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
    delete extendedSettings.omitZeroMinute;
  }
}
function postProcess(s3, date, standardDateProps, extendedSettings, context) {
  s3 = s3.replace(LTR_RE, "");
  if (standardDateProps.timeZoneName === "short") {
    s3 = injectTzoStr(s3, context.timeZone === "UTC" || date.timeZoneOffset == null ? "UTC" : (
      // important to normalize for IE, which does "GMT"
      formatTimeZoneOffset(date.timeZoneOffset)
    ));
  }
  if (extendedSettings.omitCommas) {
    s3 = s3.replace(COMMA_RE, "").trim();
  }
  if (extendedSettings.omitZeroMinute) {
    s3 = s3.replace(":00", "");
  }
  if (extendedSettings.meridiem === false) {
    s3 = s3.replace(MERIDIEM_RE, "").trim();
  } else if (extendedSettings.meridiem === "narrow") {
    s3 = s3.replace(MERIDIEM_RE, (m0, m1) => m1.toLocaleLowerCase());
  } else if (extendedSettings.meridiem === "short") {
    s3 = s3.replace(MERIDIEM_RE, (m0, m1) => `${m1.toLocaleLowerCase()}m`);
  } else if (extendedSettings.meridiem === "lowercase") {
    s3 = s3.replace(MERIDIEM_RE, (m0) => m0.toLocaleLowerCase());
  }
  s3 = s3.replace(MULTI_SPACE_RE, " ");
  s3 = s3.trim();
  return s3;
}
function injectTzoStr(s3, tzoStr) {
  let replaced = false;
  s3 = s3.replace(UTC_RE, () => {
    replaced = true;
    return tzoStr;
  });
  if (!replaced) {
    s3 += ` ${tzoStr}`;
  }
  return s3;
}
function formatWeekNumber(num, weekText, weekTextLong, locale, display2) {
  let parts = [];
  if (display2 === "long") {
    parts.push(weekTextLong);
  } else if (display2 === "short" || display2 === "narrow") {
    parts.push(weekText);
  }
  if (display2 === "long" || display2 === "short") {
    parts.push(" ");
  }
  parts.push(locale.simpleNumberFormat.format(num));
  if (locale.options.direction === "rtl") {
    parts.reverse();
  }
  return parts.join("");
}
function computeMarkerDiffSeverity(d0, d1, ca) {
  if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
    return 5;
  }
  if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
    return 4;
  }
  if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
    return 2;
  }
  if (timeAsMs(d0) !== timeAsMs(d1)) {
    return 1;
  }
  return 0;
}
function computePartialFormattingOptions(options, biggestUnit) {
  let partialOptions = {};
  for (let name in options) {
    if (!(name in STANDARD_DATE_PROP_SEVERITIES) || // not a date part prop (like timeZone)
    STANDARD_DATE_PROP_SEVERITIES[name] <= biggestUnit) {
      partialOptions[name] = options[name];
    }
  }
  return partialOptions;
}
function findCommonInsertion(full0, partial0, full1, partial1) {
  let i0 = 0;
  while (i0 < full0.length) {
    let found0 = full0.indexOf(partial0, i0);
    if (found0 === -1) {
      break;
    }
    let before0 = full0.substr(0, found0);
    i0 = found0 + partial0.length;
    let after0 = full0.substr(i0);
    let i1 = 0;
    while (i1 < full1.length) {
      let found1 = full1.indexOf(partial1, i1);
      if (found1 === -1) {
        break;
      }
      let before1 = full1.substr(0, found1);
      i1 = found1 + partial1.length;
      let after1 = full1.substr(i1);
      if (before0 === before1 && after0 === after1) {
        return {
          before: before0,
          after: after0
        };
      }
    }
  }
  return null;
}
function expandZonedMarker(dateInfo, calendarSystem) {
  let a3 = calendarSystem.markerToArray(dateInfo.marker);
  return {
    marker: dateInfo.marker,
    timeZoneOffset: dateInfo.timeZoneOffset,
    array: a3,
    year: a3[0],
    month: a3[1],
    day: a3[2],
    hour: a3[3],
    minute: a3[4],
    second: a3[5],
    millisecond: a3[6]
  };
}
function createVerboseFormattingArg(start2, end, context, betterDefaultSeparator) {
  let startInfo = expandZonedMarker(start2, context.calendarSystem);
  let endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
  return {
    date: startInfo,
    start: startInfo,
    end: endInfo,
    timeZone: context.timeZone,
    localeCodes: context.locale.codes,
    defaultSeparator: betterDefaultSeparator || context.defaultSeparator
  };
}
var CmdFormatter = class {
  constructor(cmdStr) {
    this.cmdStr = cmdStr;
  }
  format(date, context, betterDefaultSeparator) {
    return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
  }
  formatRange(start2, end, context, betterDefaultSeparator) {
    return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start2, end, context, betterDefaultSeparator));
  }
};
var FuncFormatter = class {
  constructor(func) {
    this.func = func;
  }
  format(date, context, betterDefaultSeparator) {
    return this.func(createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
  }
  formatRange(start2, end, context, betterDefaultSeparator) {
    return this.func(createVerboseFormattingArg(start2, end, context, betterDefaultSeparator));
  }
};
function createFormatter(input) {
  if (typeof input === "object" && input) {
    return new NativeFormatter(input);
  }
  if (typeof input === "string") {
    return new CmdFormatter(input);
  }
  if (typeof input === "function") {
    return new FuncFormatter(input);
  }
  return null;
}
var BASE_OPTION_REFINERS = {
  navLinkDayClick: identity,
  navLinkWeekClick: identity,
  duration: createDuration,
  bootstrapFontAwesome: identity,
  buttonIcons: identity,
  customButtons: identity,
  defaultAllDayEventDuration: createDuration,
  defaultTimedEventDuration: createDuration,
  nextDayThreshold: createDuration,
  scrollTime: createDuration,
  scrollTimeReset: Boolean,
  slotMinTime: createDuration,
  slotMaxTime: createDuration,
  dayPopoverFormat: createFormatter,
  slotDuration: createDuration,
  snapDuration: createDuration,
  headerToolbar: identity,
  footerToolbar: identity,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: createFormatter,
  dayHeaderClassNames: identity,
  dayHeaderContent: identity,
  dayHeaderDidMount: identity,
  dayHeaderWillUnmount: identity,
  dayCellClassNames: identity,
  dayCellContent: identity,
  dayCellDidMount: identity,
  dayCellWillUnmount: identity,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: identity,
  weekNumbers: Boolean,
  weekNumberClassNames: identity,
  weekNumberContent: identity,
  weekNumberDidMount: identity,
  weekNumberWillUnmount: identity,
  editable: Boolean,
  viewClassNames: identity,
  viewDidMount: identity,
  viewWillUnmount: identity,
  nowIndicator: Boolean,
  nowIndicatorSnap: identity,
  nowIndicatorClassNames: identity,
  nowIndicatorContent: identity,
  nowIndicatorDidMount: identity,
  nowIndicatorWillUnmount: identity,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: identity,
  locale: identity,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: identity,
  eventOrder: parseFieldSpecs,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: identity,
  contentHeight: identity,
  direction: String,
  weekNumberFormat: createFormatter,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: identity,
  initialDate: identity,
  now: identity,
  eventDataTransform: identity,
  stickyHeaderDates: identity,
  stickyFooterScrollbar: identity,
  viewHeight: identity,
  defaultAllDay: Boolean,
  eventSourceFailure: identity,
  eventSourceSuccess: identity,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: identity,
  eventConstraint: identity,
  eventAllow: identity,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: identity,
  eventContent: identity,
  eventDidMount: identity,
  eventWillUnmount: identity,
  selectConstraint: identity,
  selectOverlap: identity,
  selectAllow: identity,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: identity,
  slotLaneClassNames: identity,
  slotLaneContent: identity,
  slotLaneDidMount: identity,
  slotLaneWillUnmount: identity,
  slotLabelClassNames: identity,
  slotLabelContent: identity,
  slotLabelDidMount: identity,
  slotLabelWillUnmount: identity,
  dayMaxEvents: identity,
  dayMaxEventRows: identity,
  dayMinWidth: Number,
  slotLabelInterval: createDuration,
  allDayText: String,
  allDayClassNames: identity,
  allDayContent: identity,
  allDayDidMount: identity,
  allDayWillUnmount: identity,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: createFormatter,
  rerenderDelay: Number,
  moreLinkText: identity,
  moreLinkHint: identity,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: identity,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: createDuration,
  hiddenDays: identity,
  fixedWeekCount: Boolean,
  validRange: identity,
  visibleRange: identity,
  titleFormat: identity,
  eventInteractive: Boolean,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String,
  viewHint: identity,
  navLinkHint: identity,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: identity,
  moreLinkClassNames: identity,
  moreLinkContent: identity,
  moreLinkDidMount: identity,
  moreLinkWillUnmount: identity,
  monthStartFormat: createFormatter,
  // for connectors
  // (can't be part of plugin system b/c must be provided at runtime)
  handleCustomRendering: identity,
  customRenderingMetaMap: identity,
  customRenderingReplaces: Boolean
};
var BASE_OPTION_DEFAULTS = {
  eventDisplay: "auto",
  defaultRangeSeparator: " - ",
  titleRangeSeparator: " \u2013 ",
  defaultTimedEventDuration: "01:00:00",
  defaultAllDayEventDuration: { day: 1 },
  forceEventDuration: false,
  nextDayThreshold: "00:00:00",
  dayHeaders: true,
  initialView: "",
  aspectRatio: 1.35,
  headerToolbar: {
    start: "title",
    center: "",
    end: "today prev,next"
  },
  weekends: true,
  weekNumbers: false,
  weekNumberCalculation: "local",
  editable: false,
  nowIndicator: false,
  scrollTime: "06:00:00",
  scrollTimeReset: true,
  slotMinTime: "00:00:00",
  slotMaxTime: "24:00:00",
  showNonCurrentDates: true,
  lazyFetching: true,
  startParam: "start",
  endParam: "end",
  timeZoneParam: "timeZone",
  timeZone: "local",
  locales: [],
  locale: "",
  themeSystem: "standard",
  dragRevertDuration: 500,
  dragScroll: true,
  allDayMaintainDuration: false,
  unselectAuto: true,
  dropAccept: "*",
  eventOrder: "start,-duration,allDay,title",
  dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
  handleWindowResize: true,
  windowResizeDelay: 100,
  longPressDelay: 1e3,
  eventDragMinDistance: 5,
  expandRows: false,
  navLinks: false,
  selectable: false,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30,
  monthStartFormat: { month: "long", day: "numeric" },
  nowIndicatorSnap: "auto"
};
var CALENDAR_LISTENER_REFINERS = {
  datesSet: identity,
  eventsSet: identity,
  eventAdd: identity,
  eventChange: identity,
  eventRemove: identity,
  windowResize: identity,
  eventClick: identity,
  eventMouseEnter: identity,
  eventMouseLeave: identity,
  select: identity,
  unselect: identity,
  loading: identity,
  // internal
  _unmount: identity,
  _beforeprint: identity,
  _afterprint: identity,
  _noEventDrop: identity,
  _noEventResize: identity,
  _resize: identity,
  _scrollRequest: identity
};
var CALENDAR_OPTION_REFINERS = {
  buttonText: identity,
  buttonHints: identity,
  views: identity,
  plugins: identity,
  initialEvents: identity,
  events: identity,
  eventSources: identity
};
var COMPLEX_OPTION_COMPARATORS = {
  headerToolbar: isMaybeObjectsEqual,
  footerToolbar: isMaybeObjectsEqual,
  buttonText: isMaybeObjectsEqual,
  buttonHints: isMaybeObjectsEqual,
  buttonIcons: isMaybeObjectsEqual,
  dateIncrement: isMaybeObjectsEqual,
  plugins: isMaybeArraysEqual,
  events: isMaybeArraysEqual,
  eventSources: isMaybeArraysEqual,
  ["resources"]: isMaybeArraysEqual,
  // otherwise, an equal-but-new value, like from a React rerender, rebuilds the date profile (#7069)
  validRange: isMaybeDateRangeInputsEqual,
  visibleRange: isMaybeDateRangeInputsEqual,
  hiddenDays: isMaybeArraysEqual
};
function isMaybeObjectsEqual(a3, b3) {
  if (typeof a3 === "object" && typeof b3 === "object" && a3 && b3) {
    return isPropsEqual(a3, b3);
  }
  return a3 === b3;
}
function isMaybeArraysEqual(a3, b3) {
  if (Array.isArray(a3) && Array.isArray(b3)) {
    return isArraysEqual(a3, b3);
  }
  return a3 === b3;
}
function isMaybeDateRangeInputsEqual(a3, b3) {
  if (typeof a3 === "object" && typeof b3 === "object" && a3 && b3) {
    return isPropsEqual(a3, b3, isDateInputsEqual);
  }
  return a3 === b3;
}
function isDateInputsEqual(a3, b3) {
  if (a3 instanceof Date && b3 instanceof Date) {
    return a3.valueOf() === b3.valueOf();
  }
  if (Array.isArray(a3) && Array.isArray(b3)) {
    return isArraysEqual(a3, b3);
  }
  return a3 === b3;
}
var VIEW_OPTION_REFINERS = {
  type: String,
  component: identity,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: identity,
  usesMinMaxTime: Boolean,
  classNames: identity,
  content: identity,
  didMount: identity,
  willUnmount: identity
};
function mergeRawOptions(optionSets) {
  return mergeProps(optionSets, COMPLEX_OPTION_COMPARATORS);
}
function refineProps(input, refiners) {
  let refined = {};
  let extra = {};
  for (let propName in refiners) {
    if (propName in input) {
      refined[propName] = refiners[propName](input[propName]);
    }
  }
  for (let propName in input) {
    if (!(propName in refiners)) {
      extra[propName] = input[propName];
    }
  }
  return { refined, extra };
}
function identity(raw) {
  return raw;
}
var { hasOwnProperty } = Object.prototype;
function mergeProps(propObjs, complexPropsMap) {
  let dest = {};
  if (complexPropsMap) {
    for (let name in complexPropsMap) {
      if (complexPropsMap[name] === isMaybeObjectsEqual) {
        let complexObjs = [];
        for (let i3 = propObjs.length - 1; i3 >= 0; i3 -= 1) {
          let val = propObjs[i3][name];
          if (typeof val === "object" && val) {
            complexObjs.unshift(val);
          } else if (val !== void 0) {
            dest[name] = val;
            break;
          }
        }
        if (complexObjs.length) {
          dest[name] = mergeProps(complexObjs);
        }
      }
    }
  }
  for (let i3 = propObjs.length - 1; i3 >= 0; i3 -= 1) {
    let props = propObjs[i3];
    for (let name in props) {
      if (!(name in dest)) {
        dest[name] = props[name];
      }
    }
  }
  return dest;
}
function filterHash(hash, func) {
  let filtered = {};
  for (let key in hash) {
    if (func(hash[key], key)) {
      filtered[key] = hash[key];
    }
  }
  return filtered;
}
function mapHash(hash, func) {
  let newHash = {};
  for (let key in hash) {
    newHash[key] = func(hash[key], key);
  }
  return newHash;
}
function arrayToHash(a3) {
  let hash = {};
  for (let item of a3) {
    hash[item] = true;
  }
  return hash;
}
function hashValuesToArray(obj) {
  let a3 = [];
  for (let key in obj) {
    a3.push(obj[key]);
  }
  return a3;
}
function isPropsEqual(obj0, obj1, valuesEqual) {
  if (obj0 === obj1) {
    return true;
  }
  for (let key in obj0) {
    if (hasOwnProperty.call(obj0, key)) {
      if (!(key in obj1)) {
        return false;
      }
    }
  }
  for (let key in obj1) {
    if (hasOwnProperty.call(obj1, key)) {
      if (!(valuesEqual ? valuesEqual(obj0[key], obj1[key]) : obj0[key] === obj1[key])) {
        return false;
      }
    }
  }
  return true;
}
var HANDLER_RE = /^on[A-Z]/;
function isNonHandlerPropsEqual(obj0, obj1) {
  const keys = getUnequalProps(obj0, obj1);
  for (let key of keys) {
    if (!HANDLER_RE.test(key)) {
      return false;
    }
  }
  return true;
}
function getUnequalProps(obj0, obj1) {
  let keys = [];
  for (let key in obj0) {
    if (hasOwnProperty.call(obj0, key)) {
      if (!(key in obj1)) {
        keys.push(key);
      }
    }
  }
  for (let key in obj1) {
    if (hasOwnProperty.call(obj1, key)) {
      if (obj0[key] !== obj1[key]) {
        keys.push(key);
      }
    }
  }
  return keys;
}
function compareObjs(oldProps, newProps, equalityFuncs = {}) {
  if (oldProps === newProps) {
    return true;
  }
  for (let key in newProps) {
    if (key in oldProps && isObjValsEqual(oldProps[key], newProps[key], equalityFuncs[key])) ;
    else {
      return false;
    }
  }
  for (let key in oldProps) {
    if (!(key in newProps)) {
      return false;
    }
  }
  return true;
}
function isObjValsEqual(val0, val1, comparator) {
  if (val0 === val1 || comparator === true) {
    return true;
  }
  if (comparator) {
    return comparator(val0, val1);
  }
  return false;
}
function collectFromHash(hash, startIndex = 0, endIndex, step2 = 1) {
  let res = [];
  if (endIndex == null) {
    endIndex = Object.keys(hash).length;
  }
  for (let i3 = startIndex; i3 < endIndex; i3 += step2) {
    let val = hash[i3];
    if (val !== void 0) {
      res.push(val);
    }
  }
  return res;
}
var calendarSystemClassMap = {};
function registerCalendarSystem(name, theClass) {
  calendarSystemClassMap[name] = theClass;
}
function createCalendarSystem(name) {
  return new calendarSystemClassMap[name]();
}
var GregorianCalendarSystem = class {
  getMarkerYear(d2) {
    return d2.getUTCFullYear();
  }
  getMarkerMonth(d2) {
    return d2.getUTCMonth();
  }
  getMarkerDay(d2) {
    return d2.getUTCDate();
  }
  arrayToMarker(arr) {
    return arrayToUtcDate(arr);
  }
  markerToArray(marker) {
    return dateToUtcArray(marker);
  }
};
registerCalendarSystem("gregory", GregorianCalendarSystem);
var ISO_RE = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function parse(str) {
  let m3 = ISO_RE.exec(str);
  if (m3) {
    let marker = new Date(Date.UTC(Number(m3[1]), m3[3] ? Number(m3[3]) - 1 : 0, Number(m3[5] || 1), Number(m3[7] || 0), Number(m3[8] || 0), Number(m3[10] || 0), m3[12] ? Number(`0.${m3[12]}`) * 1e3 : 0));
    if (isValidDate(marker)) {
      let timeZoneOffset = null;
      if (m3[13]) {
        timeZoneOffset = (m3[15] === "-" ? -1 : 1) * (Number(m3[16] || 0) * 60 + Number(m3[18] || 0));
      }
      return {
        marker,
        isTimeUnspecified: !m3[6],
        timeZoneOffset
      };
    }
  }
  return null;
}
var DateEnv = class {
  constructor(settings) {
    let timeZone = this.timeZone = settings.timeZone;
    let isNamedTimeZone = timeZone !== "local" && timeZone !== "UTC";
    if (settings.namedTimeZoneImpl && isNamedTimeZone) {
      this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
    }
    this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
    this.calendarSystem = createCalendarSystem(settings.calendarSystem);
    this.locale = settings.locale;
    this.weekDow = settings.locale.week.dow;
    this.weekDoy = settings.locale.week.doy;
    if (settings.weekNumberCalculation === "ISO") {
      this.weekDow = 1;
      this.weekDoy = 4;
    }
    if (typeof settings.firstDay === "number") {
      this.weekDow = settings.firstDay;
    }
    if (typeof settings.weekNumberCalculation === "function") {
      this.weekNumberFunc = settings.weekNumberCalculation;
    }
    this.weekText = settings.weekText != null ? settings.weekText : settings.locale.options.weekText;
    this.weekTextLong = (settings.weekTextLong != null ? settings.weekTextLong : settings.locale.options.weekTextLong) || this.weekText;
    this.cmdFormatter = settings.cmdFormatter;
    this.defaultSeparator = settings.defaultSeparator;
  }
  // Creating / Parsing
  createMarker(input) {
    let meta = this.createMarkerMeta(input);
    if (meta === null) {
      return null;
    }
    return meta.marker;
  }
  createNowMarker() {
    if (this.canComputeOffset) {
      return this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf());
    }
    return arrayToUtcDate(dateToLocalArray(/* @__PURE__ */ new Date()));
  }
  createMarkerMeta(input) {
    if (typeof input === "string") {
      return this.parse(input);
    }
    let marker = null;
    if (typeof input === "number") {
      marker = this.timestampToMarker(input);
    } else if (input instanceof Date) {
      input = input.valueOf();
      if (!isNaN(input)) {
        marker = this.timestampToMarker(input);
      }
    } else if (Array.isArray(input)) {
      marker = arrayToUtcDate(input);
    }
    if (marker === null || !isValidDate(marker)) {
      return null;
    }
    return { marker, isTimeUnspecified: false, forcedTzo: null };
  }
  parse(s3) {
    let parts = parse(s3);
    if (parts === null) {
      return null;
    }
    let { marker } = parts;
    let forcedTzo = null;
    if (parts.timeZoneOffset !== null) {
      if (this.canComputeOffset) {
        marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1e3);
      } else {
        forcedTzo = parts.timeZoneOffset;
      }
    }
    return { marker, isTimeUnspecified: parts.isTimeUnspecified, forcedTzo };
  }
  // Accessors
  getYear(marker) {
    return this.calendarSystem.getMarkerYear(marker);
  }
  getMonth(marker) {
    return this.calendarSystem.getMarkerMonth(marker);
  }
  getDay(marker) {
    return this.calendarSystem.getMarkerDay(marker);
  }
  // Adding / Subtracting
  add(marker, dur) {
    let a3 = this.calendarSystem.markerToArray(marker);
    a3[0] += dur.years;
    a3[1] += dur.months;
    a3[2] += dur.days;
    a3[6] += dur.milliseconds;
    return this.calendarSystem.arrayToMarker(a3);
  }
  subtract(marker, dur) {
    let a3 = this.calendarSystem.markerToArray(marker);
    a3[0] -= dur.years;
    a3[1] -= dur.months;
    a3[2] -= dur.days;
    a3[6] -= dur.milliseconds;
    return this.calendarSystem.arrayToMarker(a3);
  }
  addYears(marker, n2) {
    let a3 = this.calendarSystem.markerToArray(marker);
    a3[0] += n2;
    return this.calendarSystem.arrayToMarker(a3);
  }
  addMonths(marker, n2) {
    let a3 = this.calendarSystem.markerToArray(marker);
    a3[1] += n2;
    return this.calendarSystem.arrayToMarker(a3);
  }
  // Diffing Whole Units
  diffWholeYears(m0, m1) {
    let { calendarSystem } = this;
    if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) && calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
      return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
    }
    return null;
  }
  diffWholeMonths(m0, m1) {
    let { calendarSystem } = this;
    if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
      return calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0) + (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
    }
    return null;
  }
  // Range / Duration
  greatestWholeUnit(m0, m1) {
    let n2 = this.diffWholeYears(m0, m1);
    if (n2 !== null) {
      return { unit: "year", value: n2 };
    }
    n2 = this.diffWholeMonths(m0, m1);
    if (n2 !== null) {
      return { unit: "month", value: n2 };
    }
    n2 = diffWholeWeeks(m0, m1);
    if (n2 !== null) {
      return { unit: "week", value: n2 };
    }
    n2 = diffWholeDays(m0, m1);
    if (n2 !== null) {
      return { unit: "day", value: n2 };
    }
    n2 = diffHours(m0, m1);
    if (isInt(n2)) {
      return { unit: "hour", value: n2 };
    }
    n2 = diffMinutes(m0, m1);
    if (isInt(n2)) {
      return { unit: "minute", value: n2 };
    }
    n2 = diffSeconds(m0, m1);
    if (isInt(n2)) {
      return { unit: "second", value: n2 };
    }
    return { unit: "millisecond", value: m1.valueOf() - m0.valueOf() };
  }
  countDurationsBetween(m0, m1, d2) {
    let diff;
    if (d2.years) {
      diff = this.diffWholeYears(m0, m1);
      if (diff !== null) {
        return diff / asRoughYears(d2);
      }
    }
    if (d2.months) {
      diff = this.diffWholeMonths(m0, m1);
      if (diff !== null) {
        return diff / asRoughMonths(d2);
      }
    }
    if (d2.days) {
      diff = diffWholeDays(m0, m1);
      if (diff !== null) {
        return diff / asRoughDays(d2);
      }
    }
    return (m1.valueOf() - m0.valueOf()) / asRoughMs(d2);
  }
  // Start-Of
  // these DON'T return zoned-dates. only UTC start-of dates
  startOf(m3, unit) {
    if (unit === "year") {
      return this.startOfYear(m3);
    }
    if (unit === "month") {
      return this.startOfMonth(m3);
    }
    if (unit === "week") {
      return this.startOfWeek(m3);
    }
    if (unit === "day") {
      return startOfDay(m3);
    }
    if (unit === "hour") {
      return startOfHour(m3);
    }
    if (unit === "minute") {
      return startOfMinute(m3);
    }
    if (unit === "second") {
      return startOfSecond(m3);
    }
    return null;
  }
  startOfYear(m3) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(m3)
    ]);
  }
  startOfMonth(m3) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(m3),
      this.calendarSystem.getMarkerMonth(m3)
    ]);
  }
  startOfWeek(m3) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(m3),
      this.calendarSystem.getMarkerMonth(m3),
      m3.getUTCDate() - (m3.getUTCDay() - this.weekDow + 7) % 7
    ]);
  }
  // Week Number
  computeWeekNumber(marker) {
    if (this.weekNumberFunc) {
      return this.weekNumberFunc(this.toDate(marker));
    }
    return weekOfYear(marker, this.weekDow, this.weekDoy);
  }
  // TODO: choke on timeZoneName: long
  format(marker, formatter, dateOptions = {}) {
    return formatter.format({
      marker,
      timeZoneOffset: dateOptions.forcedTzo != null ? dateOptions.forcedTzo : this.offsetForMarker(marker)
    }, this);
  }
  formatRange(start2, end, formatter, dateOptions = {}) {
    if (dateOptions.isEndExclusive) {
      end = addMs(end, -1);
    }
    return formatter.formatRange({
      marker: start2,
      timeZoneOffset: dateOptions.forcedStartTzo != null ? dateOptions.forcedStartTzo : this.offsetForMarker(start2)
    }, {
      marker: end,
      timeZoneOffset: dateOptions.forcedEndTzo != null ? dateOptions.forcedEndTzo : this.offsetForMarker(end)
    }, this, dateOptions.defaultSeparator);
  }
  /*
  DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
  might as well use buildIsoString or some other util directly
  */
  formatIso(marker, extraOptions = {}) {
    let timeZoneOffset = null;
    if (!extraOptions.omitTimeZoneOffset) {
      if (extraOptions.forcedTzo != null) {
        timeZoneOffset = extraOptions.forcedTzo;
      } else {
        timeZoneOffset = this.offsetForMarker(marker);
      }
    }
    return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
  }
  // TimeZone
  timestampToMarker(ms) {
    if (this.timeZone === "local") {
      return arrayToUtcDate(dateToLocalArray(new Date(ms)));
    }
    if (this.timeZone === "UTC" || !this.namedTimeZoneImpl) {
      return new Date(ms);
    }
    return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
  }
  offsetForMarker(m3) {
    if (this.timeZone === "local") {
      return -arrayToLocalDate(dateToUtcArray(m3)).getTimezoneOffset();
    }
    if (this.timeZone === "UTC") {
      return 0;
    }
    if (this.namedTimeZoneImpl) {
      return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m3));
    }
    return null;
  }
  // Conversion
  toDate(m3, forcedTzo) {
    if (this.timeZone === "local") {
      return arrayToLocalDate(dateToUtcArray(m3));
    }
    if (this.timeZone === "UTC") {
      return new Date(m3.valueOf());
    }
    if (!this.namedTimeZoneImpl) {
      return new Date(m3.valueOf() - (forcedTzo || 0));
    }
    return new Date(m3.valueOf() - this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m3)) * 1e3 * 60);
  }
};
var Theme = class {
  constructor(calendarOptions) {
    if (this.iconOverrideOption) {
      this.setIconOverride(calendarOptions[this.iconOverrideOption]);
    }
  }
  setIconOverride(iconOverrideHash) {
    let iconClassesCopy;
    let buttonName;
    if (typeof iconOverrideHash === "object" && iconOverrideHash) {
      iconClassesCopy = Object.assign({}, this.iconClasses);
      for (buttonName in iconOverrideHash) {
        iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
      }
      this.iconClasses = iconClassesCopy;
    } else if (iconOverrideHash === false) {
      this.iconClasses = {};
    }
  }
  applyIconOverridePrefix(className) {
    let prefix = this.iconOverridePrefix;
    if (prefix && className.indexOf(prefix) !== 0) {
      className = prefix + className;
    }
    return className;
  }
  getClass(key) {
    return this.classes[key] || "";
  }
  getIconClass(buttonName, isRtl) {
    let className;
    if (isRtl && this.rtlIconClasses) {
      className = this.rtlIconClasses[buttonName] || this.iconClasses[buttonName];
    } else {
      className = this.iconClasses[buttonName];
    }
    if (className) {
      return `${this.baseIconClass} ${className}`;
    }
    return "";
  }
  getCustomButtonIconClass(customButtonProps) {
    let className;
    if (this.iconOverrideCustomButtonOption) {
      className = customButtonProps[this.iconOverrideCustomButtonOption];
      if (className) {
        return `${this.baseIconClass} ${this.applyIconOverridePrefix(className)}`;
      }
    }
    return "";
  }
};
Theme.prototype.classes = {};
Theme.prototype.iconClasses = {};
Theme.prototype.baseIconClass = "";
Theme.prototype.iconOverridePrefix = "";
function flushSync(runBeforeFlush) {
  runBeforeFlush();
  let oldDebounceRendering = l.debounceRendering;
  let callbackQ = [];
  function execCallbackSync(callback) {
    callbackQ.push(callback);
  }
  l.debounceRendering = execCallbackSync;
  D(y(FakeComponent, {}), document.createElement("div"));
  while (callbackQ.length) {
    callbackQ.shift()();
  }
  l.debounceRendering = oldDebounceRendering;
}
var FakeComponent = class extends x {
  render() {
    return y("div", {});
  }
  componentDidMount() {
    this.setState({});
  }
};
function createContext(defaultValue) {
  let ContextType = G(defaultValue);
  let origProvider = ContextType.Provider;
  ContextType.Provider = function() {
    let isNew = !this.getChildContext;
    let children = origProvider.apply(this, arguments);
    if (isNew) {
      let subs = [];
      this.shouldComponentUpdate = (_props) => {
        if (this.props.value !== _props.value) {
          subs.forEach((c3) => {
            c3.context = _props.value;
            c3.forceUpdate();
          });
        }
      };
      this.sub = (c3) => {
        subs.push(c3);
        let old = c3.componentWillUnmount;
        c3.componentWillUnmount = () => {
          subs.splice(subs.indexOf(c3), 1);
          old && old.call(c3);
        };
      };
    }
    return children;
  };
  return ContextType;
}
var ScrollResponder = class {
  constructor(execFunc, emitter, scrollTime, scrollTimeReset) {
    this.execFunc = execFunc;
    this.emitter = emitter;
    this.scrollTime = scrollTime;
    this.scrollTimeReset = scrollTimeReset;
    this.handleScrollRequest = (request) => {
      this.queuedRequest = Object.assign({}, this.queuedRequest || {}, request);
      this.drain();
    };
    emitter.on("_scrollRequest", this.handleScrollRequest);
    this.fireInitialScroll();
  }
  detach() {
    this.emitter.off("_scrollRequest", this.handleScrollRequest);
  }
  update(isDatesNew) {
    if (isDatesNew && this.scrollTimeReset) {
      this.fireInitialScroll();
    } else {
      this.drain();
    }
  }
  fireInitialScroll() {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  }
  drain() {
    if (this.queuedRequest && this.execFunc(this.queuedRequest)) {
      this.queuedRequest = null;
    }
  }
};
var ViewContextType = createContext({});
function buildViewContext(viewSpec, viewApi, viewOptions, dateProfileGenerator, dateEnv, nowManager, theme, pluginHooks, dispatch, getCurrentData, emitter, calendarApi, registerInteractiveComponent, unregisterInteractiveComponent) {
  return {
    dateEnv,
    nowManager,
    options: viewOptions,
    pluginHooks,
    emitter,
    dispatch,
    getCurrentData,
    calendarApi,
    viewSpec,
    viewApi,
    dateProfileGenerator,
    theme,
    isRtl: viewOptions.direction === "rtl",
    addResizeHandler(handler) {
      emitter.on("_resize", handler);
    },
    removeResizeHandler(handler) {
      emitter.off("_resize", handler);
    },
    createScrollResponder(execFunc) {
      return new ScrollResponder(execFunc, emitter, createDuration(viewOptions.scrollTime), viewOptions.scrollTimeReset);
    },
    registerInteractiveComponent,
    unregisterInteractiveComponent
  };
}
var PureComponent = class extends x {
  // debug: boolean
  shouldComponentUpdate(nextProps, nextState) {
    const shouldUpdate = !compareObjs(
      this.props,
      nextProps,
      this.propEquality
      /*, this.debug */
    ) || !compareObjs(
      this.state,
      nextState,
      this.stateEquality
      /*, this.debug */
    );
    return shouldUpdate;
  }
  // HACK for freakin' React StrictMode
  safeSetState(newState) {
    if (!compareObjs(this.state, Object.assign(Object.assign({}, this.state), newState), this.stateEquality)) {
      this.setState(newState);
    }
  }
};
PureComponent.addPropsEquality = addPropsEquality;
PureComponent.addStateEquality = addStateEquality;
PureComponent.contextType = ViewContextType;
PureComponent.prototype.propEquality = {};
PureComponent.prototype.stateEquality = {};
var BaseComponent = class extends PureComponent {
};
BaseComponent.contextType = ViewContextType;
function addPropsEquality(propEquality) {
  let hash = Object.create(this.prototype.propEquality);
  Object.assign(hash, propEquality);
  this.prototype.propEquality = hash;
}
function addStateEquality(stateEquality) {
  let hash = Object.create(this.prototype.stateEquality);
  Object.assign(hash, stateEquality);
  this.prototype.stateEquality = hash;
}
function setRef(ref, current) {
  if (typeof ref === "function") {
    ref(current);
  } else if (ref) {
    ref.current = current;
  }
}
var ContentInjector = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.id = guid();
    this.queuedDomNodes = [];
    this.currentDomNodes = [];
    this.handleEl = (el) => {
      const { options } = this.context;
      const { generatorName } = this.props;
      if (!options.customRenderingReplaces || !hasCustomRenderingHandler(generatorName, options)) {
        this.updateElRef(el);
      }
    };
    this.updateElRef = (el) => {
      if (this.props.elRef) {
        setRef(this.props.elRef, el);
      }
    };
  }
  render() {
    const { props, context } = this;
    const { options } = context;
    const { customGenerator, defaultGenerator, renderProps } = props;
    const attrs = buildElAttrs(props, [], this.handleEl);
    let useDefault = false;
    let innerContent;
    let queuedDomNodes = [];
    let currentGeneratorMeta;
    if (customGenerator != null) {
      const customGeneratorRes = typeof customGenerator === "function" ? customGenerator(renderProps, y) : customGenerator;
      if (customGeneratorRes === true) {
        useDefault = true;
      } else {
        const isObject2 = customGeneratorRes && typeof customGeneratorRes === "object";
        if (isObject2 && "html" in customGeneratorRes) {
          attrs.dangerouslySetInnerHTML = { __html: customGeneratorRes.html };
        } else if (isObject2 && "domNodes" in customGeneratorRes) {
          queuedDomNodes = Array.prototype.slice.call(customGeneratorRes.domNodes);
        } else if (isObject2 ? i(customGeneratorRes) : typeof customGeneratorRes !== "function") {
          innerContent = customGeneratorRes;
        } else {
          currentGeneratorMeta = customGeneratorRes;
        }
      }
    } else {
      useDefault = !hasCustomRenderingHandler(props.generatorName, options);
    }
    if (useDefault && defaultGenerator) {
      innerContent = defaultGenerator(renderProps);
    }
    this.queuedDomNodes = queuedDomNodes;
    this.currentGeneratorMeta = currentGeneratorMeta;
    return y(props.elTag, attrs, innerContent);
  }
  componentDidMount() {
    this.applyQueueudDomNodes();
    this.triggerCustomRendering(true);
  }
  componentDidUpdate() {
    this.applyQueueudDomNodes();
    this.triggerCustomRendering(true);
  }
  componentWillUnmount() {
    this.triggerCustomRendering(false);
  }
  triggerCustomRendering(isActive) {
    var _a;
    const { props, context } = this;
    const { handleCustomRendering, customRenderingMetaMap } = context.options;
    if (handleCustomRendering) {
      const generatorMeta = (_a = this.currentGeneratorMeta) !== null && _a !== void 0 ? _a : customRenderingMetaMap === null || customRenderingMetaMap === void 0 ? void 0 : customRenderingMetaMap[props.generatorName];
      if (generatorMeta) {
        handleCustomRendering(Object.assign(Object.assign({
          id: this.id,
          isActive,
          containerEl: this.base,
          reportNewContainerEl: this.updateElRef,
          // front-end framework tells us about new container els
          generatorMeta
        }, props), { elClasses: (props.elClasses || []).filter(isTruthy) }));
      }
    }
  }
  applyQueueudDomNodes() {
    const { queuedDomNodes, currentDomNodes } = this;
    const el = this.base;
    if (!isArraysEqual(queuedDomNodes, currentDomNodes)) {
      currentDomNodes.forEach(removeElement);
      for (let newNode of queuedDomNodes) {
        el.appendChild(newNode);
      }
      this.currentDomNodes = queuedDomNodes;
    }
  }
};
ContentInjector.addPropsEquality({
  elClasses: isArraysEqual,
  elStyle: isPropsEqual,
  elAttrs: isNonHandlerPropsEqual,
  renderProps: isPropsEqual
});
function hasCustomRenderingHandler(generatorName, options) {
  var _a;
  return Boolean(options.handleCustomRendering && generatorName && ((_a = options.customRenderingMetaMap) === null || _a === void 0 ? void 0 : _a[generatorName]));
}
function buildElAttrs(props, extraClassNames, elRef) {
  const attrs = Object.assign(Object.assign({}, props.elAttrs), { ref: elRef });
  if (props.elClasses || extraClassNames) {
    attrs.className = (props.elClasses || []).concat(extraClassNames || []).concat(attrs.className || []).filter(Boolean).join(" ");
  }
  if (props.elStyle) {
    attrs.style = props.elStyle;
  }
  return attrs;
}
function isTruthy(val) {
  return Boolean(val);
}
var RenderId = createContext(0);
var ContentContainer = class extends x {
  constructor() {
    super(...arguments);
    this.InnerContent = InnerContentInjector.bind(void 0, this);
    this.handleEl = (el) => {
      this.el = el;
      if (this.props.elRef) {
        setRef(this.props.elRef, el);
        if (el && this.didMountMisfire) {
          this.componentDidMount();
        }
      }
    };
  }
  render() {
    const { props } = this;
    const generatedClassNames = generateClassNames(props.classNameGenerator, props.renderProps);
    if (props.children) {
      const elAttrs = buildElAttrs(props, generatedClassNames, this.handleEl);
      const children = props.children(this.InnerContent, props.renderProps, elAttrs);
      if (props.elTag) {
        return y(props.elTag, elAttrs, children);
      } else {
        return children;
      }
    } else {
      return y(ContentInjector, Object.assign(Object.assign({}, props), { elRef: this.handleEl, elTag: props.elTag || "div", elClasses: (props.elClasses || []).concat(generatedClassNames), renderId: this.context }));
    }
  }
  componentDidMount() {
    var _a, _b;
    if (this.el) {
      (_b = (_a = this.props).didMount) === null || _b === void 0 ? void 0 : _b.call(_a, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el }));
    } else {
      this.didMountMisfire = true;
    }
  }
  componentWillUnmount() {
    var _a, _b;
    (_b = (_a = this.props).willUnmount) === null || _b === void 0 ? void 0 : _b.call(_a, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el }));
  }
};
ContentContainer.contextType = RenderId;
function InnerContentInjector(containerComponent, props) {
  const parentProps = containerComponent.props;
  return y(ContentInjector, Object.assign({ renderProps: parentProps.renderProps, generatorName: parentProps.generatorName, customGenerator: parentProps.customGenerator, defaultGenerator: parentProps.defaultGenerator, renderId: containerComponent.context }, props));
}
function generateClassNames(classNameGenerator, renderProps) {
  const classNames = typeof classNameGenerator === "function" ? classNameGenerator(renderProps) : classNameGenerator || [];
  return typeof classNames === "string" ? [classNames] : classNames;
}
var ViewContainer = class extends BaseComponent {
  render() {
    let { props, context } = this;
    let { options } = context;
    let renderProps = { view: context.viewApi };
    return y(ContentContainer, { elRef: props.elRef, elTag: props.elTag || "div", elAttrs: props.elAttrs, elClasses: [
      ...buildViewClassNames(props.viewSpec),
      ...props.elClasses || []
    ], elStyle: props.elStyle, renderProps, classNameGenerator: options.viewClassNames, generatorName: void 0, didMount: options.viewDidMount, willUnmount: options.viewWillUnmount }, () => props.children);
  }
};
function buildViewClassNames(viewSpec) {
  return [
    `fc-${viewSpec.type}-view`,
    "fc-view"
  ];
}
function parseRange(input, dateEnv) {
  let start2 = null;
  let end = null;
  if (input.start) {
    start2 = dateEnv.createMarker(input.start);
  }
  if (input.end) {
    end = dateEnv.createMarker(input.end);
  }
  if (!start2 && !end) {
    return null;
  }
  if (start2 && end && end < start2) {
    return null;
  }
  return { start: start2, end };
}
function invertRanges(ranges, constraintRange) {
  let invertedRanges = [];
  let { start: start2 } = constraintRange;
  let i3;
  let dateRange;
  ranges.sort(compareRanges);
  for (i3 = 0; i3 < ranges.length; i3 += 1) {
    dateRange = ranges[i3];
    if (dateRange.start > start2) {
      invertedRanges.push({ start: start2, end: dateRange.start });
    }
    if (dateRange.end > start2) {
      start2 = dateRange.end;
    }
  }
  if (start2 < constraintRange.end) {
    invertedRanges.push({ start: start2, end: constraintRange.end });
  }
  return invertedRanges;
}
function compareRanges(range0, range1) {
  return range0.start.valueOf() - range1.start.valueOf();
}
function intersectRanges(range0, range1) {
  let { start: start2, end } = range0;
  let newRange = null;
  if (range1.start !== null) {
    if (start2 === null) {
      start2 = range1.start;
    } else {
      start2 = new Date(Math.max(start2.valueOf(), range1.start.valueOf()));
    }
  }
  if (range1.end != null) {
    if (end === null) {
      end = range1.end;
    } else {
      end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
    }
  }
  if (start2 === null || end === null || start2 < end) {
    newRange = { start: start2, end };
  }
  return newRange;
}
function rangesEqual(range0, range1) {
  return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) && (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
}
function rangesIntersect(range0, range1) {
  return (range0.end === null || range1.start === null || range0.end > range1.start) && (range0.start === null || range1.end === null || range0.start < range1.end);
}
function rangeContainsRange(outerRange, innerRange) {
  return (outerRange.start === null || innerRange.start !== null && innerRange.start >= outerRange.start) && (outerRange.end === null || innerRange.end !== null && innerRange.end <= outerRange.end);
}
function rangeContainsMarker(range, date) {
  return (range.start === null || date >= range.start) && (range.end === null || date < range.end);
}
function constrainMarkerToRange(date, range) {
  if (range.start != null && date < range.start) {
    return range.start;
  }
  if (range.end != null && date >= range.end) {
    return new Date(range.end.valueOf() - 1);
  }
  return date;
}
function computeAlignedDayRange(timedRange) {
  let dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
  let start2 = startOfDay(timedRange.start);
  let end = addDays(start2, dayCnt);
  return { start: start2, end };
}
function computeVisibleDayRange(timedRange, nextDayThreshold = createDuration(0)) {
  let startDay = null;
  let endDay = null;
  if (timedRange.end) {
    endDay = startOfDay(timedRange.end);
    let endTimeMS = timedRange.end.valueOf() - endDay.valueOf();
    if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
      endDay = addDays(endDay, 1);
    }
  }
  if (timedRange.start) {
    startDay = startOfDay(timedRange.start);
    if (endDay && endDay <= startDay) {
      endDay = addDays(startDay, 1);
    }
  }
  return { start: startDay, end: endDay };
}
function isMultiDayRange(range) {
  let visibleRange = computeVisibleDayRange(range);
  return diffDays(visibleRange.start, visibleRange.end) > 1;
}
function diffDates(date0, date1, dateEnv, largeUnit) {
  if (largeUnit === "year") {
    return createDuration(dateEnv.diffWholeYears(date0, date1), "year");
  }
  if (largeUnit === "month") {
    return createDuration(dateEnv.diffWholeMonths(date0, date1), "month");
  }
  return diffDayAndTime(date0, date1);
}
var DateProfileGenerator = class {
  constructor(props) {
    this.props = props;
    this.initHiddenDays();
  }
  /* Date Range Computation
  ------------------------------------------------------------------------------------------------------------------*/
  // Builds a structure with info about what the dates/ranges will be for the "prev" view.
  buildPrev(currentDateProfile, currentDate, forceToValid) {
    let { dateEnv } = this.props;
    let prevDate = dateEnv.subtract(
      dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit),
      // important for start-of-month
      currentDateProfile.dateIncrement
    );
    return this.build(prevDate, -1, forceToValid);
  }
  // Builds a structure with info about what the dates/ranges will be for the "next" view.
  buildNext(currentDateProfile, currentDate, forceToValid) {
    let { dateEnv } = this.props;
    let nextDate = dateEnv.add(
      dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit),
      // important for start-of-month
      currentDateProfile.dateIncrement
    );
    return this.build(nextDate, 1, forceToValid);
  }
  // Builds a structure holding dates/ranges for rendering around the given date.
  // Optional direction param indicates whether the date is being incremented/decremented
  // from its previous value. decremented = -1, incremented = 1 (default).
  build(currentDate, direction, forceToValid = true) {
    let { props } = this;
    let validRange;
    let currentInfo;
    let isRangeAllDay;
    let renderRange;
    let activeRange;
    let isValid;
    validRange = this.buildValidRange();
    validRange = this.trimHiddenDays(validRange);
    if (forceToValid) {
      currentDate = constrainMarkerToRange(currentDate, validRange);
    }
    currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
    isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
    renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
    renderRange = this.trimHiddenDays(renderRange);
    activeRange = renderRange;
    if (!props.showNonCurrentDates) {
      activeRange = intersectRanges(activeRange, currentInfo.range);
    }
    activeRange = this.adjustActiveRange(activeRange);
    activeRange = intersectRanges(activeRange, validRange);
    isValid = rangesIntersect(currentInfo.range, validRange);
    if (!rangeContainsMarker(renderRange, currentDate)) {
      currentDate = renderRange.start;
    }
    return {
      currentDate,
      // constraint for where prev/next operations can go and where events can be dragged/resized to.
      // an object with optional start and end properties.
      validRange,
      // range the view is formally responsible for.
      // for example, a month view might have 1st-31st, excluding padded dates
      currentRange: currentInfo.range,
      // name of largest unit being displayed, like "month" or "week"
      currentRangeUnit: currentInfo.unit,
      isRangeAllDay,
      // dates that display events and accept drag-n-drop
      // will be `null` if no dates accept events
      activeRange,
      // date range with a rendered skeleton
      // includes not-active days that need some sort of DOM
      renderRange,
      // Duration object that denotes the first visible time of any given day
      slotMinTime: props.slotMinTime,
      // Duration object that denotes the exclusive visible end time of any given day
      slotMaxTime: props.slotMaxTime,
      isValid,
      // how far the current date will move for a prev/next operation
      dateIncrement: this.buildDateIncrement(currentInfo.duration)
      // pass a fallback (might be null) ^
    };
  }
  // Builds an object with optional start/end properties.
  // Indicates the minimum/maximum dates to display.
  // not responsible for trimming hidden days.
  buildValidRange() {
    let input = this.props.validRangeInput;
    let simpleInput = typeof input === "function" ? input.call(this.props.calendarApi, this.props.dateEnv.toDate(this.props.nowManager.getDateMarker())) : input;
    return this.refineRange(simpleInput) || { start: null, end: null };
  }
  // Builds a structure with info about the "current" range, the range that is
  // highlighted as being the current month for example.
  // See build() for a description of `direction`.
  // Guaranteed to have `range` and `unit` properties. `duration` is optional.
  buildCurrentRangeInfo(date, direction) {
    let { props } = this;
    let duration2 = null;
    let unit = null;
    let range = null;
    let dayCount;
    if (props.duration) {
      duration2 = props.duration;
      unit = props.durationUnit;
      range = this.buildRangeFromDuration(date, direction, duration2, unit);
    } else if (dayCount = this.props.dayCount) {
      unit = "day";
      range = this.buildRangeFromDayCount(date, direction, dayCount);
    } else if (range = this.buildCustomVisibleRange(date)) {
      unit = props.dateEnv.greatestWholeUnit(range.start, range.end).unit;
    } else {
      duration2 = this.getFallbackDuration();
      unit = greatestDurationDenominator(duration2).unit;
      range = this.buildRangeFromDuration(date, direction, duration2, unit);
    }
    return { duration: duration2, unit, range };
  }
  getFallbackDuration() {
    return createDuration({ day: 1 });
  }
  // Returns a new activeRange to have time values (un-ambiguate)
  // slotMinTime or slotMaxTime causes the range to expand.
  adjustActiveRange(range) {
    let { dateEnv, usesMinMaxTime, slotMinTime, slotMaxTime } = this.props;
    let { start: start2, end } = range;
    if (usesMinMaxTime) {
      if (asRoughDays(slotMinTime) < 0) {
        start2 = startOfDay(start2);
        start2 = dateEnv.add(start2, slotMinTime);
      }
      if (asRoughDays(slotMaxTime) > 1) {
        end = startOfDay(end);
        end = addDays(end, -1);
        end = dateEnv.add(end, slotMaxTime);
      }
    }
    return { start: start2, end };
  }
  // Builds the "current" range when it is specified as an explicit duration.
  // `unit` is the already-computed greatestDurationDenominator unit of duration.
  buildRangeFromDuration(date, direction, duration2, unit) {
    let { dateEnv, dateAlignment } = this.props;
    let start2;
    let end;
    let res;
    if (!dateAlignment) {
      let { dateIncrement } = this.props;
      if (dateIncrement) {
        if (asRoughMs(dateIncrement) < asRoughMs(duration2)) {
          dateAlignment = greatestDurationDenominator(dateIncrement).unit;
        } else {
          dateAlignment = unit;
        }
      } else {
        dateAlignment = unit;
      }
    }
    if (asRoughDays(duration2) <= 1) {
      if (this.isHiddenDay(start2)) {
        start2 = this.skipHiddenDays(start2, direction);
        start2 = startOfDay(start2);
      }
    }
    function computeRes() {
      start2 = dateEnv.startOf(date, dateAlignment);
      end = dateEnv.add(start2, duration2);
      res = { start: start2, end };
    }
    computeRes();
    if (!this.trimHiddenDays(res)) {
      date = this.skipHiddenDays(date, direction);
      computeRes();
    }
    return res;
  }
  // Builds the "current" range when a dayCount is specified.
  buildRangeFromDayCount(date, direction, dayCount) {
    let { dateEnv, dateAlignment } = this.props;
    let runningCount = 0;
    let start2 = date;
    let end;
    if (dateAlignment) {
      start2 = dateEnv.startOf(start2, dateAlignment);
    }
    start2 = startOfDay(start2);
    start2 = this.skipHiddenDays(start2, direction);
    end = start2;
    do {
      end = addDays(end, 1);
      if (!this.isHiddenDay(end)) {
        runningCount += 1;
      }
    } while (runningCount < dayCount);
    return { start: start2, end };
  }
  // Builds a normalized range object for the "visible" range,
  // which is a way to define the currentRange and activeRange at the same time.
  buildCustomVisibleRange(date) {
    let { props } = this;
    let input = props.visibleRangeInput;
    let simpleInput = typeof input === "function" ? input.call(props.calendarApi, props.dateEnv.toDate(date)) : input;
    let range = this.refineRange(simpleInput);
    if (range && (range.start == null || range.end == null)) {
      return null;
    }
    return range;
  }
  // Computes the range that will represent the element/cells for *rendering*,
  // but which may have voided days/times.
  // not responsible for trimming hidden days.
  buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
    return currentRange;
  }
  // Compute the duration value that should be added/substracted to the current date
  // when a prev/next operation happens.
  buildDateIncrement(fallback) {
    let { dateIncrement } = this.props;
    let customAlignment;
    if (dateIncrement) {
      return dateIncrement;
    }
    if (customAlignment = this.props.dateAlignment) {
      return createDuration(1, customAlignment);
    }
    if (fallback) {
      return fallback;
    }
    return createDuration({ days: 1 });
  }
  refineRange(rangeInput) {
    if (rangeInput) {
      let range = parseRange(rangeInput, this.props.dateEnv);
      if (range) {
        range = computeVisibleDayRange(range);
      }
      return range;
    }
    return null;
  }
  /* Hidden Days
  ------------------------------------------------------------------------------------------------------------------*/
  // Initializes internal variables related to calculating hidden days-of-week
  initHiddenDays() {
    let hiddenDays = this.props.hiddenDays || [];
    let isHiddenDayHash = [];
    let dayCnt = 0;
    let i3;
    if (this.props.weekends === false) {
      hiddenDays = hiddenDays.concat([0, 6]);
    }
    for (i3 = 0; i3 < 7; i3 += 1) {
      if (!(isHiddenDayHash[i3] = hiddenDays.indexOf(i3) !== -1)) {
        dayCnt += 1;
      }
    }
    if (!dayCnt) {
      throw new Error("invalid hiddenDays");
    }
    this.isHiddenDayHash = isHiddenDayHash;
  }
  // Remove days from the beginning and end of the range that are computed as hidden.
  // If the whole range is trimmed off, returns null
  trimHiddenDays(range) {
    let { start: start2, end } = range;
    if (start2) {
      start2 = this.skipHiddenDays(start2);
    }
    if (end) {
      end = this.skipHiddenDays(end, -1, true);
    }
    if (start2 == null || end == null || start2 < end) {
      return { start: start2, end };
    }
    return null;
  }
  // Is the current day hidden?
  // `day` is a day-of-week index (0-6), or a Date (used for UTC)
  isHiddenDay(day) {
    if (day instanceof Date) {
      day = day.getUTCDay();
    }
    return this.isHiddenDayHash[day];
  }
  // Incrementing the current day until it is no longer a hidden day, returning a copy.
  // DOES NOT CONSIDER validRange!
  // If the initial value of `date` is not a hidden day, don't do anything.
  // Pass `isExclusive` as `true` if you are dealing with an end date.
  // `inc` defaults to `1` (increment one day forward each time)
  skipHiddenDays(date, inc = 1, isExclusive = false) {
    while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
      date = addDays(date, inc);
    }
    return date;
  }
};
function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
  return {
    instanceId: guid(),
    defId,
    range,
    forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
    forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo
  };
}
function parseRecurring(refined, defaultAllDay, dateEnv, recurringTypes) {
  for (let i3 = 0; i3 < recurringTypes.length; i3 += 1) {
    let parsed = recurringTypes[i3].parse(refined, dateEnv);
    if (parsed) {
      let { allDay } = refined;
      if (allDay == null) {
        allDay = defaultAllDay;
        if (allDay == null) {
          allDay = parsed.allDayGuess;
          if (allDay == null) {
            allDay = false;
          }
        }
      }
      return {
        allDay,
        duration: parsed.duration,
        typeData: parsed.typeData,
        typeId: i3
      };
    }
  }
  return null;
}
function expandRecurring(eventStore, framingRange, context) {
  let { dateEnv, pluginHooks, options } = context;
  let { defs, instances } = eventStore;
  instances = filterHash(instances, (instance) => !defs[instance.defId].recurringDef);
  for (let defId in defs) {
    let def = defs[defId];
    if (def.recurringDef) {
      let { duration: duration2 } = def.recurringDef;
      if (!duration2) {
        duration2 = def.allDay ? options.defaultAllDayEventDuration : options.defaultTimedEventDuration;
      }
      let starts = expandRecurringRanges(def, duration2, framingRange, dateEnv, pluginHooks.recurringTypes);
      for (let start2 of starts) {
        let instance = createEventInstance(defId, {
          start: start2,
          end: dateEnv.add(start2, duration2)
        });
        instances[instance.instanceId] = instance;
      }
    }
  }
  return { defs, instances };
}
function expandRecurringRanges(eventDef, duration2, framingRange, dateEnv, recurringTypes) {
  let typeDef = recurringTypes[eventDef.recurringDef.typeId];
  let markers = typeDef.expand(eventDef.recurringDef.typeData, {
    start: dateEnv.subtract(framingRange.start, duration2),
    end: framingRange.end
  }, dateEnv);
  if (eventDef.allDay) {
    markers = markers.map(startOfDay);
  }
  return markers;
}
var EVENT_NON_DATE_REFINERS = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
};
var EVENT_DATE_REFINERS = {
  start: identity,
  end: identity,
  date: identity,
  allDay: Boolean
};
var EVENT_REFINERS = Object.assign(Object.assign(Object.assign({}, EVENT_NON_DATE_REFINERS), EVENT_DATE_REFINERS), { extendedProps: identity });
function parseEvent(raw, eventSource, context, allowOpenRange, refiners = buildEventRefiners(context), defIdMap, instanceIdMap) {
  let { refined, extra } = refineEventDef(raw, context, refiners);
  let defaultAllDay = computeIsDefaultAllDay(eventSource, context);
  let recurringRes = parseRecurring(refined, defaultAllDay, context.dateEnv, context.pluginHooks.recurringTypes);
  if (recurringRes) {
    let def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : "", recurringRes.allDay, Boolean(recurringRes.duration), context, defIdMap);
    def.recurringDef = {
      typeId: recurringRes.typeId,
      typeData: recurringRes.typeData,
      duration: recurringRes.duration
    };
    return { def, instance: null };
  }
  let singleRes = parseSingle(refined, defaultAllDay, context, allowOpenRange);
  if (singleRes) {
    let def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : "", singleRes.allDay, singleRes.hasEnd, context, defIdMap);
    let instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
    if (instanceIdMap && def.publicId && instanceIdMap[def.publicId]) {
      instance.instanceId = instanceIdMap[def.publicId];
    }
    return { def, instance };
  }
  return null;
}
function refineEventDef(raw, context, refiners = buildEventRefiners(context)) {
  return refineProps(raw, refiners);
}
function buildEventRefiners(context) {
  return Object.assign(Object.assign(Object.assign({}, EVENT_UI_REFINERS), EVENT_REFINERS), context.pluginHooks.eventRefiners);
}
function parseEventDef(refined, extra, sourceId, allDay, hasEnd, context, defIdMap) {
  let def = {
    title: refined.title || "",
    groupId: refined.groupId || "",
    publicId: refined.id || "",
    url: refined.url || "",
    recurringDef: null,
    defId: (defIdMap && refined.id ? defIdMap[refined.id] : "") || guid(),
    sourceId,
    allDay,
    hasEnd,
    interactive: refined.interactive,
    ui: createEventUi(refined, context),
    extendedProps: Object.assign(Object.assign({}, refined.extendedProps || {}), extra)
  };
  for (let memberAdder of context.pluginHooks.eventDefMemberAdders) {
    Object.assign(def, memberAdder(refined));
  }
  Object.freeze(def.ui.classNames);
  Object.freeze(def.extendedProps);
  return def;
}
function parseSingle(refined, defaultAllDay, context, allowOpenRange) {
  let { allDay } = refined;
  let startMeta;
  let startMarker = null;
  let hasEnd = false;
  let endMeta;
  let endMarker = null;
  let startInput = refined.start != null ? refined.start : refined.date;
  startMeta = context.dateEnv.createMarkerMeta(startInput);
  if (startMeta) {
    startMarker = startMeta.marker;
  } else if (!allowOpenRange) {
    return null;
  }
  if (refined.end != null) {
    endMeta = context.dateEnv.createMarkerMeta(refined.end);
  }
  if (allDay == null) {
    if (defaultAllDay != null) {
      allDay = defaultAllDay;
    } else {
      allDay = (!startMeta || startMeta.isTimeUnspecified) && (!endMeta || endMeta.isTimeUnspecified);
    }
  }
  if (allDay && startMarker) {
    startMarker = startOfDay(startMarker);
  }
  if (endMeta) {
    endMarker = endMeta.marker;
    if (allDay) {
      endMarker = startOfDay(endMarker);
    }
    if (startMarker && endMarker <= startMarker) {
      endMarker = null;
    }
  }
  if (endMarker) {
    hasEnd = true;
  } else if (!allowOpenRange) {
    hasEnd = context.options.forceEventDuration || false;
    endMarker = context.dateEnv.add(startMarker, allDay ? context.options.defaultAllDayEventDuration : context.options.defaultTimedEventDuration);
  }
  return {
    allDay,
    hasEnd,
    range: { start: startMarker, end: endMarker },
    forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
    forcedEndTzo: endMeta ? endMeta.forcedTzo : null
  };
}
function computeIsDefaultAllDay(eventSource, context) {
  let res = null;
  if (eventSource) {
    res = eventSource.defaultAllDay;
  }
  if (res == null) {
    res = context.options.defaultAllDay;
  }
  return res;
}
function parseEvents(rawEvents, eventSource, context, allowOpenRange, defIdMap, instanceIdMap) {
  let eventStore = createEmptyEventStore();
  let eventRefiners = buildEventRefiners(context);
  for (let rawEvent of rawEvents) {
    let tuple = parseEvent(rawEvent, eventSource, context, allowOpenRange, eventRefiners, defIdMap, instanceIdMap);
    if (tuple) {
      eventTupleToStore(tuple, eventStore);
    }
  }
  return eventStore;
}
function eventTupleToStore(tuple, eventStore = createEmptyEventStore()) {
  eventStore.defs[tuple.def.defId] = tuple.def;
  if (tuple.instance) {
    eventStore.instances[tuple.instance.instanceId] = tuple.instance;
  }
  return eventStore;
}
function getRelevantEvents(eventStore, instanceId) {
  let instance = eventStore.instances[instanceId];
  if (instance) {
    let def = eventStore.defs[instance.defId];
    let newStore = filterEventStoreDefs(eventStore, (lookDef) => isEventDefsGrouped(def, lookDef));
    newStore.defs[def.defId] = def;
    newStore.instances[instance.instanceId] = instance;
    return newStore;
  }
  return createEmptyEventStore();
}
function isEventDefsGrouped(def0, def1) {
  return Boolean(def0.groupId && def0.groupId === def1.groupId);
}
function createEmptyEventStore() {
  return { defs: {}, instances: {} };
}
function mergeEventStores(store0, store1) {
  return {
    defs: Object.assign(Object.assign({}, store0.defs), store1.defs),
    instances: Object.assign(Object.assign({}, store0.instances), store1.instances)
  };
}
function filterEventStoreDefs(eventStore, filterFunc) {
  let defs = filterHash(eventStore.defs, filterFunc);
  let instances = filterHash(eventStore.instances, (instance) => defs[instance.defId]);
  return { defs, instances };
}
function excludeSubEventStore(master, sub) {
  let { defs, instances } = master;
  let filteredDefs = {};
  let filteredInstances = {};
  for (let defId in defs) {
    if (!sub.defs[defId]) {
      filteredDefs[defId] = defs[defId];
    }
  }
  for (let instanceId in instances) {
    if (!sub.instances[instanceId] && // not explicitly excluded
    filteredDefs[instances[instanceId].defId]) {
      filteredInstances[instanceId] = instances[instanceId];
    }
  }
  return {
    defs: filteredDefs,
    instances: filteredInstances
  };
}
function normalizeConstraint(input, context) {
  if (Array.isArray(input)) {
    return parseEvents(input, null, context, true);
  }
  if (typeof input === "object" && input) {
    return parseEvents([input], null, context, true);
  }
  if (input != null) {
    return String(input);
  }
  return null;
}
function parseClassNames(raw) {
  if (Array.isArray(raw)) {
    return raw;
  }
  if (typeof raw === "string") {
    return raw.split(/\s+/);
  }
  return [];
}
var EVENT_UI_REFINERS = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: identity,
  overlap: identity,
  allow: identity,
  className: parseClassNames,
  classNames: parseClassNames,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
};
var EMPTY_EVENT_UI = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: "",
  borderColor: "",
  textColor: "",
  classNames: []
};
function createEventUi(refined, context) {
  let constraint = normalizeConstraint(refined.constraint, context);
  return {
    display: refined.display || null,
    startEditable: refined.startEditable != null ? refined.startEditable : refined.editable,
    durationEditable: refined.durationEditable != null ? refined.durationEditable : refined.editable,
    constraints: constraint != null ? [constraint] : [],
    overlap: refined.overlap != null ? refined.overlap : null,
    allows: refined.allow != null ? [refined.allow] : [],
    backgroundColor: refined.backgroundColor || refined.color || "",
    borderColor: refined.borderColor || refined.color || "",
    textColor: refined.textColor || "",
    classNames: (refined.className || []).concat(refined.classNames || [])
    // join singular and plural
  };
}
function combineEventUis(uis) {
  return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
}
function combineTwoEventUis(item0, item1) {
  return {
    display: item1.display != null ? item1.display : item0.display,
    startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
    durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
    constraints: item0.constraints.concat(item1.constraints),
    overlap: typeof item1.overlap === "boolean" ? item1.overlap : item0.overlap,
    allows: item0.allows.concat(item1.allows),
    backgroundColor: item1.backgroundColor || item0.backgroundColor,
    borderColor: item1.borderColor || item0.borderColor,
    textColor: item1.textColor || item0.textColor,
    classNames: item0.classNames.concat(item1.classNames)
  };
}
var EVENT_SOURCE_REFINERS = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: identity,
  eventDataTransform: identity,
  // for any network-related sources
  success: identity,
  failure: identity
};
function parseEventSource(raw, context, refiners = buildEventSourceRefiners(context)) {
  let rawObj;
  if (typeof raw === "string") {
    rawObj = { url: raw };
  } else if (typeof raw === "function" || Array.isArray(raw)) {
    rawObj = { events: raw };
  } else if (typeof raw === "object" && raw) {
    rawObj = raw;
  }
  if (rawObj) {
    let { refined, extra } = refineProps(rawObj, refiners);
    let metaRes = buildEventSourceMeta(refined, context);
    if (metaRes) {
      return {
        _raw: raw,
        isFetching: false,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: refined.defaultAllDay,
        eventDataTransform: refined.eventDataTransform,
        success: refined.success,
        failure: refined.failure,
        publicId: refined.id || "",
        sourceId: guid(),
        sourceDefId: metaRes.sourceDefId,
        meta: metaRes.meta,
        ui: createEventUi(refined, context),
        extendedProps: extra
      };
    }
  }
  return null;
}
function buildEventSourceRefiners(context) {
  return Object.assign(Object.assign(Object.assign({}, EVENT_UI_REFINERS), EVENT_SOURCE_REFINERS), context.pluginHooks.eventSourceRefiners);
}
function buildEventSourceMeta(raw, context) {
  let defs = context.pluginHooks.eventSourceDefs;
  for (let i3 = defs.length - 1; i3 >= 0; i3 -= 1) {
    let def = defs[i3];
    let meta = def.parseMeta(raw);
    if (meta) {
      return { sourceDefId: i3, meta };
    }
  }
  return null;
}
function reduceEventStore(eventStore, action, eventSources, dateProfile, context) {
  switch (action.type) {
    case "RECEIVE_EVENTS":
      return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, context);
    case "RESET_RAW_EVENTS":
      return resetRawEvents(eventStore, eventSources[action.sourceId], action.rawEvents, dateProfile.activeRange, context);
    case "ADD_EVENTS":
      return addEvent(
        eventStore,
        action.eventStore,
        // new ones
        dateProfile ? dateProfile.activeRange : null,
        context
      );
    case "RESET_EVENTS":
      return action.eventStore;
    case "MERGE_EVENTS":
      return mergeEventStores(eventStore, action.eventStore);
    case "PREV":
    // TODO: how do we track all actions that affect dateProfile :(
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      if (dateProfile) {
        return expandRecurring(eventStore, dateProfile.activeRange, context);
      }
      return eventStore;
    case "REMOVE_EVENTS":
      return excludeSubEventStore(eventStore, action.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return excludeEventsBySourceId(eventStore, action.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return filterEventStoreDefs(eventStore, (eventDef) => !eventDef.sourceId);
    case "REMOVE_ALL_EVENTS":
      return createEmptyEventStore();
    default:
      return eventStore;
  }
}
function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, context) {
  if (eventSource && // not already removed
  fetchId === eventSource.latestFetchId) {
    let subset = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context);
    if (fetchRange) {
      subset = expandRecurring(subset, fetchRange, context);
    }
    return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
  }
  return eventStore;
}
function resetRawEvents(existingEventStore, eventSource, rawEvents, activeRange, context) {
  const { defIdMap, instanceIdMap } = buildPublicIdMaps(existingEventStore);
  let newEventStore = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context, false, defIdMap, instanceIdMap);
  return expandRecurring(newEventStore, activeRange, context);
}
function transformRawEvents(rawEvents, eventSource, context) {
  let calEachTransform = context.options.eventDataTransform;
  let sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;
  if (sourceEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
  }
  if (calEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
  }
  return rawEvents;
}
function transformEachRawEvent(rawEvents, func) {
  let refinedEvents;
  if (!func) {
    refinedEvents = rawEvents;
  } else {
    refinedEvents = [];
    for (let rawEvent of rawEvents) {
      let refinedEvent = func(rawEvent);
      if (refinedEvent) {
        refinedEvents.push(refinedEvent);
      } else if (refinedEvent == null) {
        refinedEvents.push(rawEvent);
      }
    }
  }
  return refinedEvents;
}
function addEvent(eventStore, subset, expandRange, context) {
  if (expandRange) {
    subset = expandRecurring(subset, expandRange, context);
  }
  return mergeEventStores(eventStore, subset);
}
function rezoneEventStoreDates(eventStore, oldDateEnv, newDateEnv) {
  let { defs } = eventStore;
  let instances = mapHash(eventStore.instances, (instance) => {
    let def = defs[instance.defId];
    if (def.allDay) {
      return instance;
    }
    return Object.assign(Object.assign({}, instance), { range: {
      start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
      end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo))
    }, forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo, forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo });
  });
  return { defs, instances };
}
function excludeEventsBySourceId(eventStore, sourceId) {
  return filterEventStoreDefs(eventStore, (eventDef) => eventDef.sourceId !== sourceId);
}
function excludeInstances(eventStore, removals) {
  return {
    defs: eventStore.defs,
    instances: filterHash(eventStore.instances, (instance) => !removals[instance.instanceId])
  };
}
function buildPublicIdMaps(eventStore) {
  const { defs, instances } = eventStore;
  const defIdMap = {};
  const instanceIdMap = {};
  for (let defId in defs) {
    const def = defs[defId];
    const { publicId } = def;
    if (publicId) {
      defIdMap[publicId] = defId;
    }
  }
  for (let instanceId in instances) {
    const instance = instances[instanceId];
    const def = defs[instance.defId];
    const { publicId } = def;
    if (publicId) {
      instanceIdMap[publicId] = instanceId;
    }
  }
  return { defIdMap, instanceIdMap };
}
var Emitter = class {
  constructor() {
    this.handlers = {};
    this.thisContext = null;
  }
  setThisContext(thisContext) {
    this.thisContext = thisContext;
  }
  setOptions(options) {
    this.options = options;
  }
  on(type, handler) {
    addToHash(this.handlers, type, handler);
  }
  off(type, handler) {
    removeFromHash(this.handlers, type, handler);
  }
  trigger(type, ...args) {
    let attachedHandlers = this.handlers[type] || [];
    let optionHandler = this.options && this.options[type];
    let handlers = [].concat(optionHandler || [], attachedHandlers);
    for (let handler of handlers) {
      handler.apply(this.thisContext, args);
    }
  }
  hasHandlers(type) {
    return Boolean(this.handlers[type] && this.handlers[type].length || this.options && this.options[type]);
  }
};
function addToHash(hash, type, handler) {
  (hash[type] || (hash[type] = [])).push(handler);
}
function removeFromHash(hash, type, handler) {
  if (handler) {
    if (hash[type]) {
      hash[type] = hash[type].filter((func) => func !== handler);
    }
  } else {
    delete hash[type];
  }
}
var DEF_DEFAULTS = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
  // so multiple defs get grouped
};
function parseBusinessHours(input, context) {
  return parseEvents(refineInputs(input), null, context);
}
function refineInputs(input) {
  let rawDefs;
  if (input === true) {
    rawDefs = [{}];
  } else if (Array.isArray(input)) {
    rawDefs = input.filter((rawDef) => rawDef.daysOfWeek);
  } else if (typeof input === "object" && input) {
    rawDefs = [input];
  } else {
    rawDefs = [];
  }
  rawDefs = rawDefs.map((rawDef) => Object.assign(Object.assign({}, DEF_DEFAULTS), rawDef));
  return rawDefs;
}
function triggerDateSelect(selection, pev, context) {
  context.emitter.trigger("select", Object.assign(Object.assign({}, buildDateSpanApiWithContext(selection, context)), { jsEvent: pev ? pev.origEvent : null, view: context.viewApi || context.calendarApi.view }));
}
function triggerDateUnselect(pev, context) {
  context.emitter.trigger("unselect", {
    jsEvent: pev ? pev.origEvent : null,
    view: context.viewApi || context.calendarApi.view
  });
}
function buildDateSpanApiWithContext(dateSpan, context) {
  let props = {};
  for (let transform of context.pluginHooks.dateSpanTransforms) {
    Object.assign(props, transform(dateSpan, context));
  }
  Object.assign(props, buildDateSpanApi(dateSpan, context.dateEnv));
  return props;
}
function getDefaultEventEnd(allDay, marker, context) {
  let { dateEnv, options } = context;
  let end = marker;
  if (allDay) {
    end = startOfDay(end);
    end = dateEnv.add(end, options.defaultAllDayEventDuration);
  } else {
    end = dateEnv.add(end, options.defaultTimedEventDuration);
  }
  return end;
}
function applyMutationToEventStore(eventStore, eventConfigBase, mutation, context) {
  let eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
  let dest = createEmptyEventStore();
  for (let defId in eventStore.defs) {
    let def = eventStore.defs[defId];
    dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, context);
  }
  for (let instanceId in eventStore.instances) {
    let instance = eventStore.instances[instanceId];
    let def = dest.defs[instance.defId];
    dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, context);
  }
  return dest;
}
function applyMutationToEventDef(eventDef, eventConfig, mutation, context) {
  let standardProps = mutation.standardProps || {};
  if (standardProps.hasEnd == null && eventConfig.durationEditable && (mutation.startDelta || mutation.endDelta)) {
    standardProps.hasEnd = true;
  }
  let copy = Object.assign(Object.assign(Object.assign({}, eventDef), standardProps), { ui: Object.assign(Object.assign({}, eventDef.ui), standardProps.ui) });
  if (mutation.extendedProps) {
    copy.extendedProps = Object.assign(Object.assign({}, copy.extendedProps), mutation.extendedProps);
  }
  for (let applier of context.pluginHooks.eventDefMutationAppliers) {
    applier(copy, mutation, context);
  }
  if (!copy.hasEnd && context.options.forceEventDuration) {
    copy.hasEnd = true;
  }
  return copy;
}
function applyMutationToEventInstance(eventInstance, eventDef, eventConfig, mutation, context) {
  let { dateEnv } = context;
  let forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
  let clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
  let copy = Object.assign({}, eventInstance);
  if (forceAllDay) {
    copy.range = computeAlignedDayRange(copy.range);
  }
  if (mutation.datesDelta && eventConfig.startEditable) {
    copy.range = {
      start: dateEnv.add(copy.range.start, mutation.datesDelta),
      end: dateEnv.add(copy.range.end, mutation.datesDelta)
    };
  }
  if (mutation.startDelta && eventConfig.durationEditable) {
    copy.range = {
      start: dateEnv.add(copy.range.start, mutation.startDelta),
      end: copy.range.end
    };
  }
  if (mutation.endDelta && eventConfig.durationEditable) {
    copy.range = {
      start: copy.range.start,
      end: dateEnv.add(copy.range.end, mutation.endDelta)
    };
  }
  if (clearEnd) {
    copy.range = {
      start: copy.range.start,
      end: getDefaultEventEnd(eventDef.allDay, copy.range.start, context)
    };
  }
  if (eventDef.allDay) {
    copy.range = {
      start: startOfDay(copy.range.start),
      end: startOfDay(copy.range.end)
    };
  }
  if (copy.range.end < copy.range.start) {
    copy.range.end = getDefaultEventEnd(eventDef.allDay, copy.range.start, context);
  }
  return copy;
}
var EventSourceImpl = class {
  constructor(context, internalEventSource) {
    this.context = context;
    this.internalEventSource = internalEventSource;
  }
  remove() {
    this.context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: this.internalEventSource.sourceId
    });
  }
  refetch() {
    this.context.dispatch({
      type: "FETCH_EVENT_SOURCES",
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: true
    });
  }
  get id() {
    return this.internalEventSource.publicId;
  }
  get url() {
    return this.internalEventSource.meta.url;
  }
  get format() {
    return this.internalEventSource.meta.format;
  }
};
var EventImpl = class _EventImpl {
  // instance will be null if expressing a recurring event that has no current instances,
  // OR if trying to validate an incoming external event that has no dates assigned
  constructor(context, def, instance) {
    this._context = context;
    this._def = def;
    this._instance = instance || null;
  }
  /*
  TODO: make event struct more responsible for this
  */
  setProp(name, val) {
    if (name in EVENT_DATE_REFINERS) {
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    } else if (name === "id") {
      val = EVENT_NON_DATE_REFINERS[name](val);
      this.mutate({
        standardProps: { publicId: val }
        // hardcoded internal name
      });
    } else if (name in EVENT_NON_DATE_REFINERS) {
      val = EVENT_NON_DATE_REFINERS[name](val);
      this.mutate({
        standardProps: { [name]: val }
      });
    } else if (name in EVENT_UI_REFINERS) {
      let ui = EVENT_UI_REFINERS[name](val);
      if (name === "color") {
        ui = { backgroundColor: val, borderColor: val };
      } else if (name === "editable") {
        ui = { startEditable: val, durationEditable: val };
      } else {
        ui = { [name]: val };
      }
      this.mutate({
        standardProps: { ui }
      });
    } else {
      console.warn(`Could not set prop '${name}'. Use setExtendedProp instead.`);
    }
  }
  setExtendedProp(name, val) {
    this.mutate({
      extendedProps: { [name]: val }
    });
  }
  setStart(startInput, options = {}) {
    let { dateEnv } = this._context;
    let start2 = dateEnv.createMarker(startInput);
    if (start2 && this._instance) {
      let instanceRange = this._instance.range;
      let startDelta = diffDates(instanceRange.start, start2, dateEnv, options.granularity);
      if (options.maintainDuration) {
        this.mutate({ datesDelta: startDelta });
      } else {
        this.mutate({ startDelta });
      }
    }
  }
  setEnd(endInput, options = {}) {
    let { dateEnv } = this._context;
    let end;
    if (endInput != null) {
      end = dateEnv.createMarker(endInput);
      if (!end) {
        return;
      }
    }
    if (this._instance) {
      if (end) {
        let endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
        this.mutate({ endDelta });
      } else {
        this.mutate({ standardProps: { hasEnd: false } });
      }
    }
  }
  setDates(startInput, endInput, options = {}) {
    let { dateEnv } = this._context;
    let standardProps = { allDay: options.allDay };
    let start2 = dateEnv.createMarker(startInput);
    let end;
    if (!start2) {
      return;
    }
    if (endInput != null) {
      end = dateEnv.createMarker(endInput);
      if (!end) {
        return;
      }
    }
    if (this._instance) {
      let instanceRange = this._instance.range;
      if (options.allDay === true) {
        instanceRange = computeAlignedDayRange(instanceRange);
      }
      let startDelta = diffDates(instanceRange.start, start2, dateEnv, options.granularity);
      if (end) {
        let endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);
        if (durationsEqual(startDelta, endDelta)) {
          this.mutate({ datesDelta: startDelta, standardProps });
        } else {
          this.mutate({ startDelta, endDelta, standardProps });
        }
      } else {
        standardProps.hasEnd = false;
        this.mutate({ datesDelta: startDelta, standardProps });
      }
    }
  }
  moveStart(deltaInput) {
    let delta = createDuration(deltaInput);
    if (delta) {
      this.mutate({ startDelta: delta });
    }
  }
  moveEnd(deltaInput) {
    let delta = createDuration(deltaInput);
    if (delta) {
      this.mutate({ endDelta: delta });
    }
  }
  moveDates(deltaInput) {
    let delta = createDuration(deltaInput);
    if (delta) {
      this.mutate({ datesDelta: delta });
    }
  }
  setAllDay(allDay, options = {}) {
    let standardProps = { allDay };
    let { maintainDuration } = options;
    if (maintainDuration == null) {
      maintainDuration = this._context.options.allDayMaintainDuration;
    }
    if (this._def.allDay !== allDay) {
      standardProps.hasEnd = maintainDuration;
    }
    this.mutate({ standardProps });
  }
  formatRange(formatInput) {
    let { dateEnv } = this._context;
    let instance = this._instance;
    let formatter = createFormatter(formatInput);
    if (this._def.hasEnd) {
      return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
        forcedStartTzo: instance.forcedStartTzo,
        forcedEndTzo: instance.forcedEndTzo
      });
    }
    return dateEnv.format(instance.range.start, formatter, {
      forcedTzo: instance.forcedStartTzo
    });
  }
  mutate(mutation) {
    let instance = this._instance;
    if (instance) {
      let def = this._def;
      let context = this._context;
      let { eventStore } = context.getCurrentData();
      let relevantEvents = getRelevantEvents(eventStore, instance.instanceId);
      let eventConfigBase = {
        "": {
          display: "",
          startEditable: true,
          durationEditable: true,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: "",
          borderColor: "",
          textColor: "",
          classNames: []
        }
      };
      relevantEvents = applyMutationToEventStore(relevantEvents, eventConfigBase, mutation, context);
      let oldEvent = new _EventImpl(context, def, instance);
      this._def = relevantEvents.defs[def.defId];
      this._instance = relevantEvents.instances[instance.instanceId];
      context.dispatch({
        type: "MERGE_EVENTS",
        eventStore: relevantEvents
      });
      context.emitter.trigger("eventChange", {
        oldEvent,
        event: this,
        relatedEvents: buildEventApis(relevantEvents, context, instance),
        revert() {
          context.dispatch({
            type: "RESET_EVENTS",
            eventStore
            // the ORIGINAL store
          });
        }
      });
    }
  }
  remove() {
    let context = this._context;
    let asStore = eventApiToStore(this);
    context.dispatch({
      type: "REMOVE_EVENTS",
      eventStore: asStore
    });
    context.emitter.trigger("eventRemove", {
      event: this,
      relatedEvents: [],
      revert() {
        context.dispatch({
          type: "MERGE_EVENTS",
          eventStore: asStore
        });
      }
    });
  }
  get source() {
    let { sourceId } = this._def;
    if (sourceId) {
      return new EventSourceImpl(this._context, this._context.getCurrentData().eventSources[sourceId]);
    }
    return null;
  }
  get start() {
    return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
  }
  get end() {
    return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
  }
  get startStr() {
    let instance = this._instance;
    if (instance) {
      return this._context.dateEnv.formatIso(instance.range.start, {
        omitTime: this._def.allDay,
        forcedTzo: instance.forcedStartTzo
      });
    }
    return "";
  }
  get endStr() {
    let instance = this._instance;
    if (instance && this._def.hasEnd) {
      return this._context.dateEnv.formatIso(instance.range.end, {
        omitTime: this._def.allDay,
        forcedTzo: instance.forcedEndTzo
      });
    }
    return "";
  }
  // computable props that all access the def
  // TODO: find a TypeScript-compatible way to do this at scale
  get id() {
    return this._def.publicId;
  }
  get groupId() {
    return this._def.groupId;
  }
  get allDay() {
    return this._def.allDay;
  }
  get title() {
    return this._def.title;
  }
  get url() {
    return this._def.url;
  }
  get display() {
    return this._def.ui.display || "auto";
  }
  // bad. just normalize the type earlier
  get startEditable() {
    return this._def.ui.startEditable;
  }
  get durationEditable() {
    return this._def.ui.durationEditable;
  }
  get constraint() {
    return this._def.ui.constraints[0] || null;
  }
  get overlap() {
    return this._def.ui.overlap;
  }
  get allow() {
    return this._def.ui.allows[0] || null;
  }
  get backgroundColor() {
    return this._def.ui.backgroundColor;
  }
  get borderColor() {
    return this._def.ui.borderColor;
  }
  get textColor() {
    return this._def.ui.textColor;
  }
  // NOTE: user can't modify these because Object.freeze was called in event-def parsing
  get classNames() {
    return this._def.ui.classNames;
  }
  get extendedProps() {
    return this._def.extendedProps;
  }
  toPlainObject(settings = {}) {
    let def = this._def;
    let { ui } = def;
    let { startStr, endStr } = this;
    let res = {
      allDay: def.allDay
    };
    if (def.title) {
      res.title = def.title;
    }
    if (startStr) {
      res.start = startStr;
    }
    if (endStr) {
      res.end = endStr;
    }
    if (def.publicId) {
      res.id = def.publicId;
    }
    if (def.groupId) {
      res.groupId = def.groupId;
    }
    if (def.url) {
      res.url = def.url;
    }
    if (ui.display && ui.display !== "auto") {
      res.display = ui.display;
    }
    if (settings.collapseColor && ui.backgroundColor && ui.backgroundColor === ui.borderColor) {
      res.color = ui.backgroundColor;
    } else {
      if (ui.backgroundColor) {
        res.backgroundColor = ui.backgroundColor;
      }
      if (ui.borderColor) {
        res.borderColor = ui.borderColor;
      }
    }
    if (ui.textColor) {
      res.textColor = ui.textColor;
    }
    if (ui.classNames.length) {
      res.classNames = ui.classNames;
    }
    if (Object.keys(def.extendedProps).length) {
      if (settings.collapseExtendedProps) {
        Object.assign(res, def.extendedProps);
      } else {
        res.extendedProps = def.extendedProps;
      }
    }
    return res;
  }
  toJSON() {
    return this.toPlainObject();
  }
};
function eventApiToStore(eventApi) {
  let def = eventApi._def;
  let instance = eventApi._instance;
  return {
    defs: { [def.defId]: def },
    instances: instance ? { [instance.instanceId]: instance } : {}
  };
}
function buildEventApis(eventStore, context, excludeInstance) {
  let { defs, instances } = eventStore;
  let eventApis = [];
  let excludeInstanceId = excludeInstance ? excludeInstance.instanceId : "";
  for (let id in instances) {
    let instance = instances[id];
    let def = defs[instance.defId];
    if (instance.instanceId !== excludeInstanceId) {
      eventApis.push(new EventImpl(context, def, instance));
    }
  }
  return eventApis;
}
function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
  let inverseBgByGroupId = {};
  let inverseBgByDefId = {};
  let defByGroupId = {};
  let bgRanges = [];
  let fgRanges = [];
  let eventUis = compileEventUis(eventStore.defs, eventUiBases);
  for (let defId in eventStore.defs) {
    let def = eventStore.defs[defId];
    let ui = eventUis[def.defId];
    if (ui.display === "inverse-background") {
      if (def.groupId) {
        inverseBgByGroupId[def.groupId] = [];
        if (!defByGroupId[def.groupId]) {
          defByGroupId[def.groupId] = def;
        }
      } else {
        inverseBgByDefId[defId] = [];
      }
    }
  }
  for (let instanceId in eventStore.instances) {
    let instance = eventStore.instances[instanceId];
    let def = eventStore.defs[instance.defId];
    let ui = eventUis[def.defId];
    let origRange = instance.range;
    let normalRange = !def.allDay && nextDayThreshold ? computeVisibleDayRange(origRange, nextDayThreshold) : origRange;
    let slicedRange = intersectRanges(normalRange, framingRange);
    if (slicedRange) {
      if (ui.display === "inverse-background") {
        if (def.groupId) {
          inverseBgByGroupId[def.groupId].push(slicedRange);
        } else {
          inverseBgByDefId[instance.defId].push(slicedRange);
        }
      } else if (ui.display !== "none") {
        (ui.display === "background" ? bgRanges : fgRanges).push({
          def,
          ui,
          instance,
          range: slicedRange,
          isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
          isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf()
        });
      }
    }
  }
  for (let groupId in inverseBgByGroupId) {
    let ranges = inverseBgByGroupId[groupId];
    let invertedRanges = invertRanges(ranges, framingRange);
    for (let invertedRange of invertedRanges) {
      let def = defByGroupId[groupId];
      let ui = eventUis[def.defId];
      bgRanges.push({
        def,
        ui,
        instance: null,
        range: invertedRange,
        isStart: false,
        isEnd: false
      });
    }
  }
  for (let defId in inverseBgByDefId) {
    let ranges = inverseBgByDefId[defId];
    let invertedRanges = invertRanges(ranges, framingRange);
    for (let invertedRange of invertedRanges) {
      bgRanges.push({
        def: eventStore.defs[defId],
        ui: eventUis[defId],
        instance: null,
        range: invertedRange,
        isStart: false,
        isEnd: false
      });
    }
  }
  return { bg: bgRanges, fg: fgRanges };
}
function setElSeg(el, seg) {
  el.fcSeg = seg;
}
function getElSeg(el) {
  return el.fcSeg || el.parentNode.fcSeg || // for the harness
  null;
}
function compileEventUis(eventDefs, eventUiBases) {
  return mapHash(eventDefs, (eventDef) => compileEventUi(eventDef, eventUiBases));
}
function compileEventUi(eventDef, eventUiBases) {
  let uis = [];
  if (eventUiBases[""]) {
    uis.push(eventUiBases[""]);
  }
  if (eventUiBases[eventDef.defId]) {
    uis.push(eventUiBases[eventDef.defId]);
  }
  uis.push(eventDef.ui);
  return combineEventUis(uis);
}
function sortEventSegs(segs, eventOrderSpecs) {
  let objs = segs.map(buildSegCompareObj);
  objs.sort((obj0, obj1) => compareByFieldSpecs(obj0, obj1, eventOrderSpecs));
  return objs.map((c3) => c3._seg);
}
function buildSegCompareObj(seg) {
  let { eventRange } = seg;
  let eventDef = eventRange.def;
  let range = eventRange.instance ? eventRange.instance.range : eventRange.range;
  let start2 = range.start ? range.start.valueOf() : 0;
  let end = range.end ? range.end.valueOf() : 0;
  return Object.assign(Object.assign(Object.assign({}, eventDef.extendedProps), eventDef), {
    id: eventDef.publicId,
    start: start2,
    end,
    duration: end - start2,
    allDay: Number(eventDef.allDay),
    _seg: seg
  });
}
function computeSegDraggable(seg, context) {
  let { pluginHooks } = context;
  let transformers = pluginHooks.isDraggableTransformers;
  let { def, ui } = seg.eventRange;
  let val = ui.startEditable;
  for (let transformer of transformers) {
    val = transformer(val, def, ui, context);
  }
  return val;
}
function computeSegStartResizable(seg, context) {
  return seg.isStart && seg.eventRange.ui.durationEditable && context.options.eventResizableFromStart;
}
function computeSegEndResizable(seg, context) {
  return seg.isEnd && seg.eventRange.ui.durationEditable;
}
function buildSegTimeText(seg, timeFormat, context, defaultDisplayEventTime, defaultDisplayEventEnd, startOverride, endOverride) {
  let { dateEnv, options } = context;
  let { displayEventTime, displayEventEnd } = options;
  let eventDef = seg.eventRange.def;
  let eventInstance = seg.eventRange.instance;
  if (displayEventTime == null) {
    displayEventTime = defaultDisplayEventTime !== false;
  }
  if (displayEventEnd == null) {
    displayEventEnd = defaultDisplayEventEnd !== false;
  }
  let wholeEventStart = eventInstance.range.start;
  let wholeEventEnd = eventInstance.range.end;
  let segStart = startOverride || seg.start || seg.eventRange.range.start;
  let segEnd = endOverride || seg.end || seg.eventRange.range.end;
  let isStartDay = startOfDay(wholeEventStart).valueOf() === startOfDay(segStart).valueOf();
  let isEndDay = startOfDay(addMs(wholeEventEnd, -1)).valueOf() === startOfDay(addMs(segEnd, -1)).valueOf();
  if (displayEventTime && !eventDef.allDay && (isStartDay || isEndDay)) {
    segStart = isStartDay ? wholeEventStart : segStart;
    segEnd = isEndDay ? wholeEventEnd : segEnd;
    if (displayEventEnd && eventDef.hasEnd) {
      return dateEnv.formatRange(segStart, segEnd, timeFormat, {
        forcedStartTzo: startOverride ? null : eventInstance.forcedStartTzo,
        forcedEndTzo: endOverride ? null : eventInstance.forcedEndTzo
      });
    }
    return dateEnv.format(segStart, timeFormat, {
      forcedTzo: startOverride ? null : eventInstance.forcedStartTzo
      // nooooo, same
    });
  }
  return "";
}
function getSegMeta(seg, todayRange, nowDate) {
  let segRange = seg.eventRange.range;
  return {
    isPast: segRange.end <= (nowDate || todayRange.start),
    isFuture: segRange.start >= (nowDate || todayRange.end),
    isToday: todayRange && rangeContainsMarker(todayRange, segRange.start)
  };
}
function getEventClassNames(props) {
  let classNames = ["fc-event"];
  if (props.isMirror) {
    classNames.push("fc-event-mirror");
  }
  if (props.isDraggable) {
    classNames.push("fc-event-draggable");
  }
  if (props.isStartResizable || props.isEndResizable) {
    classNames.push("fc-event-resizable");
  }
  if (props.isDragging) {
    classNames.push("fc-event-dragging");
  }
  if (props.isResizing) {
    classNames.push("fc-event-resizing");
  }
  if (props.isSelected) {
    classNames.push("fc-event-selected");
  }
  if (props.isStart) {
    classNames.push("fc-event-start");
  }
  if (props.isEnd) {
    classNames.push("fc-event-end");
  }
  if (props.isPast) {
    classNames.push("fc-event-past");
  }
  if (props.isToday) {
    classNames.push("fc-event-today");
  }
  if (props.isFuture) {
    classNames.push("fc-event-future");
  }
  return classNames;
}
function buildEventRangeKey(eventRange) {
  return eventRange.instance ? eventRange.instance.instanceId : `${eventRange.def.defId}:${eventRange.range.start.toISOString()}`;
}
function getSegAnchorAttrs(seg, context) {
  let { def, instance } = seg.eventRange;
  let { url } = def;
  if (url) {
    return { href: url };
  }
  let { emitter, options } = context;
  let { eventInteractive } = options;
  if (eventInteractive == null) {
    eventInteractive = def.interactive;
    if (eventInteractive == null) {
      eventInteractive = Boolean(emitter.hasHandlers("eventClick"));
    }
  }
  if (eventInteractive) {
    return createAriaKeyboardAttrs((ev) => {
      emitter.trigger("eventClick", {
        el: ev.target,
        event: new EventImpl(context, def, instance),
        jsEvent: ev,
        view: context.viewApi
      });
    });
  }
  return {};
}
var STANDARD_PROPS = {
  start: identity,
  end: identity,
  allDay: Boolean
};
function parseDateSpan(raw, dateEnv, defaultDuration) {
  let span = parseOpenDateSpan(raw, dateEnv);
  let { range } = span;
  if (!range.start) {
    return null;
  }
  if (!range.end) {
    if (defaultDuration == null) {
      return null;
    }
    range.end = dateEnv.add(range.start, defaultDuration);
  }
  return span;
}
function parseOpenDateSpan(raw, dateEnv) {
  let { refined: standardProps, extra } = refineProps(raw, STANDARD_PROPS);
  let startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
  let endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
  let { allDay } = standardProps;
  if (allDay == null) {
    allDay = startMeta && startMeta.isTimeUnspecified && (!endMeta || endMeta.isTimeUnspecified);
  }
  return Object.assign({ range: {
    start: startMeta ? startMeta.marker : null,
    end: endMeta ? endMeta.marker : null
  }, allDay }, extra);
}
function isDateSpansEqual(span0, span1) {
  return rangesEqual(span0.range, span1.range) && span0.allDay === span1.allDay && isSpanPropsEqual(span0, span1);
}
function isSpanPropsEqual(span0, span1) {
  for (let propName in span1) {
    if (propName !== "range" && propName !== "allDay") {
      if (span0[propName] !== span1[propName]) {
        return false;
      }
    }
  }
  for (let propName in span0) {
    if (!(propName in span1)) {
      return false;
    }
  }
  return true;
}
function buildDateSpanApi(span, dateEnv) {
  return Object.assign(Object.assign({}, buildRangeApi(span.range, dateEnv, span.allDay)), { allDay: span.allDay });
}
function buildRangeApiWithTimeZone(range, dateEnv, omitTime) {
  return Object.assign(Object.assign({}, buildRangeApi(range, dateEnv, omitTime)), { timeZone: dateEnv.timeZone });
}
function buildRangeApi(range, dateEnv, omitTime) {
  return {
    start: dateEnv.toDate(range.start),
    end: dateEnv.toDate(range.end),
    startStr: dateEnv.formatIso(range.start, { omitTime }),
    endStr: dateEnv.formatIso(range.end, { omitTime })
  };
}
function fabricateEventRange(dateSpan, eventUiBases, context) {
  let res = refineEventDef({ editable: false }, context);
  let def = parseEventDef(
    res.refined,
    res.extra,
    "",
    // sourceId
    dateSpan.allDay,
    true,
    // hasEnd
    context
  );
  return {
    def,
    ui: compileEventUi(def, eventUiBases),
    instance: createEventInstance(def.defId, dateSpan.range),
    range: dateSpan.range,
    isStart: true,
    isEnd: true
  };
}
function unpromisify(func, normalizedSuccessCallback, normalizedFailureCallback) {
  let isResolved = false;
  let wrappedSuccess = function(res2) {
    if (!isResolved) {
      isResolved = true;
      normalizedSuccessCallback(res2);
    }
  };
  let wrappedFailure = function(error) {
    if (!isResolved) {
      isResolved = true;
      normalizedFailureCallback(error);
    }
  };
  let res = func(wrappedSuccess, wrappedFailure);
  if (res && typeof res.then === "function") {
    res.then(wrappedSuccess, wrappedFailure);
  }
}
var JsonRequestError = class extends Error {
  constructor(message, response) {
    super(message);
    this.response = response;
  }
};
function requestJson(method, url, params) {
  method = method.toUpperCase();
  const fetchOptions = {
    method
  };
  if (method === "GET") {
    url += (url.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(params);
  } else {
    fetchOptions.body = new URLSearchParams(params);
    fetchOptions.headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
  }
  return fetch(url, fetchOptions).then((fetchRes) => {
    if (fetchRes.ok) {
      return fetchRes.json().then((parsedResponse) => {
        return [parsedResponse, fetchRes];
      }, () => {
        throw new JsonRequestError("Failure parsing JSON", fetchRes);
      });
    } else {
      throw new JsonRequestError("Request failed", fetchRes);
    }
  });
}
var canVGrowWithinCell;
function getCanVGrowWithinCell() {
  if (canVGrowWithinCell == null) {
    canVGrowWithinCell = computeCanVGrowWithinCell();
  }
  return canVGrowWithinCell;
}
function computeCanVGrowWithinCell() {
  if (typeof document === "undefined") {
    return true;
  }
  let el = document.createElement("div");
  el.style.position = "absolute";
  el.style.top = "0px";
  el.style.left = "0px";
  el.innerHTML = "<table><tr><td><div></div></td></tr></table>";
  el.querySelector("table").style.height = "100px";
  el.querySelector("div").style.height = "100%";
  document.body.appendChild(el);
  let div = el.querySelector("div");
  let possible = div.offsetHeight > 0;
  document.body.removeChild(el);
  return possible;
}
var CalendarRoot = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.state = {
      forPrint: false
    };
    this.handleBeforePrint = () => {
      flushSync(() => {
        this.setState({ forPrint: true });
      });
    };
    this.handleAfterPrint = () => {
      flushSync(() => {
        this.setState({ forPrint: false });
      });
    };
  }
  render() {
    let { props } = this;
    let { options } = props;
    let { forPrint } = this.state;
    let isHeightAuto = forPrint || options.height === "auto" || options.contentHeight === "auto";
    let height = !isHeightAuto && options.height != null ? options.height : "";
    let classNames = [
      "fc",
      forPrint ? "fc-media-print" : "fc-media-screen",
      `fc-direction-${options.direction}`,
      props.theme.getClass("root")
    ];
    if (!getCanVGrowWithinCell()) {
      classNames.push("fc-liquid-hack");
    }
    return props.children(classNames, height, isHeightAuto, forPrint);
  }
  componentDidMount() {
    let { emitter } = this.props;
    emitter.on("_beforeprint", this.handleBeforePrint);
    emitter.on("_afterprint", this.handleAfterPrint);
  }
  componentWillUnmount() {
    let { emitter } = this.props;
    emitter.off("_beforeprint", this.handleBeforePrint);
    emitter.off("_afterprint", this.handleAfterPrint);
  }
};
var Interaction = class {
  constructor(settings) {
    this.component = settings.component;
    this.isHitComboAllowed = settings.isHitComboAllowed || null;
  }
  destroy() {
  }
};
function parseInteractionSettings(component, input) {
  return {
    component,
    el: input.el,
    useEventCenter: input.useEventCenter != null ? input.useEventCenter : true,
    isHitComboAllowed: input.isHitComboAllowed || null
  };
}
function interactionSettingsToStore(settings) {
  return {
    [settings.component.uid]: settings
  };
}
var interactionSettingsStore = {};
var NowTimer = class extends x {
  constructor(props, context) {
    super(props, context);
    this.handleRefresh = () => {
      let timing = this.computeTiming();
      if (timing.state.nowDate.valueOf() !== this.state.nowDate.valueOf()) {
        this.setState(timing.state);
      }
      this.clearTimeout();
      this.setTimeout(timing.waitMs);
    };
    this.handleVisibilityChange = () => {
      if (!document.hidden) {
        this.handleRefresh();
      }
    };
    this.state = this.computeTiming().state;
  }
  render() {
    let { props, state } = this;
    return props.children(state.nowDate, state.todayRange);
  }
  componentDidMount() {
    this.setTimeout();
    this.context.nowManager.addResetListener(this.handleRefresh);
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.unit !== this.props.unit) {
      this.clearTimeout();
      this.setTimeout();
    }
  }
  componentWillUnmount() {
    this.clearTimeout();
    this.context.nowManager.removeResetListener(this.handleRefresh);
    document.removeEventListener("visibilitychange", this.handleVisibilityChange);
  }
  computeTiming() {
    let { props, context } = this;
    let unroundedNow = context.nowManager.getDateMarker();
    let { nowIndicatorSnap } = context.options;
    if (nowIndicatorSnap === "auto") {
      nowIndicatorSnap = // large unit?
      /year|month|week|day/.test(props.unit) || // if slotDuration 30 mins for example, would NOT appear to snap (legacy behavior)
      (props.unitValue || 1) === 1;
    }
    let nowDate;
    let waitMs;
    if (nowIndicatorSnap) {
      nowDate = context.dateEnv.startOf(unroundedNow, props.unit);
      let nextUnitStart = context.dateEnv.add(nowDate, createDuration(1, props.unit));
      waitMs = nextUnitStart.valueOf() - unroundedNow.valueOf();
    } else {
      nowDate = unroundedNow;
      waitMs = 1e3 * 60;
    }
    waitMs = Math.min(1e3 * 60 * 60 * 24, waitMs);
    return {
      state: { nowDate, todayRange: buildDayRange(nowDate) },
      waitMs
    };
  }
  setTimeout(waitMs = this.computeTiming().waitMs) {
    this.timeoutId = setTimeout(() => {
      const timing = this.computeTiming();
      this.setState(timing.state, () => {
        this.setTimeout(timing.waitMs);
      });
    }, waitMs);
  }
  clearTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
};
NowTimer.contextType = ViewContextType;
function buildDayRange(date) {
  let start2 = startOfDay(date);
  let end = addDays(start2, 1);
  return { start: start2, end };
}
var CalendarImpl = class {
  getCurrentData() {
    return this.currentDataManager.getCurrentData();
  }
  dispatch(action) {
    this.currentDataManager.dispatch(action);
  }
  get view() {
    return this.getCurrentData().viewApi;
  }
  batchRendering(callback) {
    callback();
  }
  updateSize() {
    this.trigger("_resize", true);
  }
  // Options
  // -----------------------------------------------------------------------------------------------------------------
  setOption(name, val) {
    this.dispatch({
      type: "SET_OPTION",
      optionName: name,
      rawOptionValue: val
    });
  }
  getOption(name) {
    return this.currentDataManager.currentCalendarOptionsInput[name];
  }
  getAvailableLocaleCodes() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }
  // Trigger
  // -----------------------------------------------------------------------------------------------------------------
  on(handlerName, handler) {
    let { currentDataManager } = this;
    if (currentDataManager.currentCalendarOptionsRefiners[handlerName]) {
      currentDataManager.emitter.on(handlerName, handler);
    } else {
      console.warn(`Unknown listener name '${handlerName}'`);
    }
  }
  off(handlerName, handler) {
    this.currentDataManager.emitter.off(handlerName, handler);
  }
  // not meant for public use
  trigger(handlerName, ...args) {
    this.currentDataManager.emitter.trigger(handlerName, ...args);
  }
  // View
  // -----------------------------------------------------------------------------------------------------------------
  changeView(viewType, dateOrRange) {
    this.batchRendering(() => {
      this.unselect();
      if (dateOrRange) {
        if (dateOrRange.start && dateOrRange.end) {
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType
          });
          this.dispatch({
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: dateOrRange
          });
        } else {
          let { dateEnv } = this.getCurrentData();
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType,
            dateMarker: dateEnv.createMarker(dateOrRange)
          });
        }
      } else {
        this.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType
        });
      }
    });
  }
  // Forces navigation to a view for the given date.
  // `viewType` can be a specific view name or a generic one like "week" or "day".
  // needs to change
  zoomTo(dateMarker, viewType) {
    let state = this.getCurrentData();
    let spec;
    viewType = viewType || "day";
    spec = state.viewSpecs[viewType] || this.getUnitViewSpec(viewType);
    this.unselect();
    if (spec) {
      this.dispatch({
        type: "CHANGE_VIEW_TYPE",
        viewType: spec.type,
        dateMarker
      });
    } else {
      this.dispatch({
        type: "CHANGE_DATE",
        dateMarker
      });
    }
  }
  // Given a duration singular unit, like "week" or "day", finds a matching view spec.
  // Preference is given to views that have corresponding buttons.
  getUnitViewSpec(unit) {
    let { viewSpecs, toolbarConfig } = this.getCurrentData();
    let viewTypes = [].concat(toolbarConfig.header ? toolbarConfig.header.viewsWithButtons : [], toolbarConfig.footer ? toolbarConfig.footer.viewsWithButtons : []);
    let i3;
    let spec;
    for (let viewType in viewSpecs) {
      viewTypes.push(viewType);
    }
    for (i3 = 0; i3 < viewTypes.length; i3 += 1) {
      spec = viewSpecs[viewTypes[i3]];
      if (spec) {
        if (spec.singleUnit === unit) {
          return spec;
        }
      }
    }
    return null;
  }
  // Current Date
  // -----------------------------------------------------------------------------------------------------------------
  prev() {
    this.unselect();
    this.dispatch({ type: "PREV" });
  }
  next() {
    this.unselect();
    this.dispatch({ type: "NEXT" });
  }
  prevYear() {
    let state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: state.dateEnv.addYears(state.currentDate, -1)
    });
  }
  nextYear() {
    let state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: state.dateEnv.addYears(state.currentDate, 1)
    });
  }
  today() {
    let state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: state.nowManager.getDateMarker()
    });
  }
  gotoDate(zonedDateInput) {
    let state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: state.dateEnv.createMarker(zonedDateInput)
    });
  }
  incrementDate(deltaInput) {
    let state = this.getCurrentData();
    let delta = createDuration(deltaInput);
    if (delta) {
      this.unselect();
      this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: state.dateEnv.add(state.currentDate, delta)
      });
    }
  }
  getDate() {
    let state = this.getCurrentData();
    return state.dateEnv.toDate(state.currentDate);
  }
  // Date Formatting Utils
  // -----------------------------------------------------------------------------------------------------------------
  formatDate(d2, formatter) {
    let { dateEnv } = this.getCurrentData();
    return dateEnv.format(dateEnv.createMarker(d2), createFormatter(formatter));
  }
  // `settings` is for formatter AND isEndExclusive
  formatRange(d0, d1, settings) {
    let { dateEnv } = this.getCurrentData();
    return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings), settings);
  }
  formatIso(d2, omitTime) {
    let { dateEnv } = this.getCurrentData();
    return dateEnv.formatIso(dateEnv.createMarker(d2), { omitTime });
  }
  // Date Selection / Event Selection / DayClick
  // -----------------------------------------------------------------------------------------------------------------
  select(dateOrObj, endDate) {
    let selectionInput;
    if (endDate == null) {
      if (dateOrObj.start != null) {
        selectionInput = dateOrObj;
      } else {
        selectionInput = {
          start: dateOrObj,
          end: null
        };
      }
    } else {
      selectionInput = {
        start: dateOrObj,
        end: endDate
      };
    }
    let state = this.getCurrentData();
    let selection = parseDateSpan(selectionInput, state.dateEnv, createDuration({ days: 1 }));
    if (selection) {
      this.dispatch({ type: "SELECT_DATES", selection });
      triggerDateSelect(selection, null, state);
    }
  }
  unselect(pev) {
    let state = this.getCurrentData();
    if (state.dateSelection) {
      this.dispatch({ type: "UNSELECT_DATES" });
      triggerDateUnselect(pev, state);
    }
  }
  // Public Events API
  // -----------------------------------------------------------------------------------------------------------------
  addEvent(eventInput, sourceInput) {
    if (eventInput instanceof EventImpl) {
      let def = eventInput._def;
      let instance = eventInput._instance;
      let currentData = this.getCurrentData();
      if (!currentData.eventStore.defs[def.defId]) {
        this.dispatch({
          type: "ADD_EVENTS",
          eventStore: eventTupleToStore({ def, instance })
          // TODO: better util for two args?
        });
        this.triggerEventAdd(eventInput);
      }
      return eventInput;
    }
    let state = this.getCurrentData();
    let eventSource;
    if (sourceInput instanceof EventSourceImpl) {
      eventSource = sourceInput.internalEventSource;
    } else if (typeof sourceInput === "boolean") {
      if (sourceInput) {
        [eventSource] = hashValuesToArray(state.eventSources);
      }
    } else if (sourceInput != null) {
      let sourceApi = this.getEventSourceById(sourceInput);
      if (!sourceApi) {
        console.warn(`Could not find an event source with ID "${sourceInput}"`);
        return null;
      }
      eventSource = sourceApi.internalEventSource;
    }
    let tuple = parseEvent(eventInput, eventSource, state, false);
    if (tuple) {
      let newEventApi = new EventImpl(state, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
      this.dispatch({
        type: "ADD_EVENTS",
        eventStore: eventTupleToStore(tuple)
      });
      this.triggerEventAdd(newEventApi);
      return newEventApi;
    }
    return null;
  }
  triggerEventAdd(eventApi) {
    let { emitter } = this.getCurrentData();
    emitter.trigger("eventAdd", {
      event: eventApi,
      relatedEvents: [],
      revert: () => {
        this.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: eventApiToStore(eventApi)
        });
      }
    });
  }
  // TODO: optimize
  getEventById(id) {
    let state = this.getCurrentData();
    let { defs, instances } = state.eventStore;
    id = String(id);
    for (let defId in defs) {
      let def = defs[defId];
      if (def.publicId === id) {
        if (def.recurringDef) {
          return new EventImpl(state, def, null);
        }
        for (let instanceId in instances) {
          let instance = instances[instanceId];
          if (instance.defId === def.defId) {
            return new EventImpl(state, def, instance);
          }
        }
      }
    }
    return null;
  }
  getEvents() {
    let currentData = this.getCurrentData();
    return buildEventApis(currentData.eventStore, currentData);
  }
  removeAllEvents() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }
  // Public Event Sources API
  // -----------------------------------------------------------------------------------------------------------------
  getEventSources() {
    let state = this.getCurrentData();
    let sourceHash = state.eventSources;
    let sourceApis = [];
    for (let internalId in sourceHash) {
      sourceApis.push(new EventSourceImpl(state, sourceHash[internalId]));
    }
    return sourceApis;
  }
  getEventSourceById(id) {
    let state = this.getCurrentData();
    let sourceHash = state.eventSources;
    id = String(id);
    for (let sourceId in sourceHash) {
      if (sourceHash[sourceId].publicId === id) {
        return new EventSourceImpl(state, sourceHash[sourceId]);
      }
    }
    return null;
  }
  addEventSource(sourceInput) {
    let state = this.getCurrentData();
    if (sourceInput instanceof EventSourceImpl) {
      if (!state.eventSources[sourceInput.internalEventSource.sourceId]) {
        this.dispatch({
          type: "ADD_EVENT_SOURCES",
          sources: [sourceInput.internalEventSource]
        });
      }
      return sourceInput;
    }
    let eventSource = parseEventSource(sourceInput, state);
    if (eventSource) {
      this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [eventSource] });
      return new EventSourceImpl(state, eventSource);
    }
    return null;
  }
  removeAllEventSources() {
    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
  }
  refetchEvents() {
    this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: true });
  }
  // Scroll
  // -----------------------------------------------------------------------------------------------------------------
  scrollToTime(timeInput) {
    let time3 = createDuration(timeInput);
    if (time3) {
      this.trigger("_scrollRequest", { time: time3 });
    }
  }
};
function pointInsideRect(point, rect) {
  return point.left >= rect.left && point.left < rect.right && point.top >= rect.top && point.top < rect.bottom;
}
function intersectRects(rect1, rect2) {
  let res = {
    left: Math.max(rect1.left, rect2.left),
    right: Math.min(rect1.right, rect2.right),
    top: Math.max(rect1.top, rect2.top),
    bottom: Math.min(rect1.bottom, rect2.bottom)
  };
  if (res.left < res.right && res.top < res.bottom) {
    return res;
  }
  return false;
}
function constrainPoint(point, rect) {
  return {
    left: Math.min(Math.max(point.left, rect.left), rect.right),
    top: Math.min(Math.max(point.top, rect.top), rect.bottom)
  };
}
function getRectCenter(rect) {
  return {
    left: (rect.left + rect.right) / 2,
    top: (rect.top + rect.bottom) / 2
  };
}
function diffPoints(point1, point2) {
  return {
    left: point1.left - point2.left,
    top: point1.top - point2.top
  };
}
var EMPTY_EVENT_STORE = createEmptyEventStore();
function getDateMeta(date, todayRange, nowDate, dateProfile) {
  return {
    dow: date.getUTCDay(),
    isDisabled: Boolean(dateProfile && (!dateProfile.activeRange || !rangeContainsMarker(dateProfile.activeRange, date))),
    isOther: Boolean(dateProfile && !rangeContainsMarker(dateProfile.currentRange, date)),
    isToday: Boolean(todayRange && rangeContainsMarker(todayRange, date)),
    isPast: Boolean(nowDate ? date < nowDate : todayRange ? date < todayRange.start : false),
    isFuture: Boolean(nowDate ? date > nowDate : todayRange ? date >= todayRange.end : false)
  };
}
function getDayClassNames(meta, theme) {
  let classNames = [
    "fc-day",
    `fc-day-${DAY_IDS[meta.dow]}`
  ];
  if (meta.isDisabled) {
    classNames.push("fc-day-disabled");
  } else {
    if (meta.isToday) {
      classNames.push("fc-day-today");
      classNames.push(theme.getClass("today"));
    }
    if (meta.isPast) {
      classNames.push("fc-day-past");
    }
    if (meta.isFuture) {
      classNames.push("fc-day-future");
    }
    if (meta.isOther) {
      classNames.push("fc-day-other");
    }
  }
  return classNames;
}
var DAY_FORMAT = createFormatter({ year: "numeric", month: "long", day: "numeric" });
var WEEK_FORMAT = createFormatter({ week: "long" });
function buildNavLinkAttrs(context, dateMarker, viewType = "day", isTabbable = true) {
  const { dateEnv, options, calendarApi } = context;
  let dateStr = dateEnv.format(dateMarker, viewType === "week" ? WEEK_FORMAT : DAY_FORMAT);
  if (options.navLinks) {
    let zonedDate = dateEnv.toDate(dateMarker);
    const handleInteraction = (ev) => {
      let customAction = viewType === "day" ? options.navLinkDayClick : viewType === "week" ? options.navLinkWeekClick : null;
      if (typeof customAction === "function") {
        customAction.call(calendarApi, dateEnv.toDate(dateMarker), ev);
      } else {
        if (typeof customAction === "string") {
          viewType = customAction;
        }
        calendarApi.zoomTo(dateMarker, viewType);
      }
    };
    return Object.assign({ title: formatWithOrdinals(options.navLinkHint, [dateStr, zonedDate], dateStr), "data-navlink": "" }, isTabbable ? createAriaClickAttrs(handleInteraction) : { onClick: handleInteraction });
  }
  return { "aria-label": dateStr };
}
var _isRtlScrollbarOnLeft = null;
function getIsRtlScrollbarOnLeft() {
  if (_isRtlScrollbarOnLeft === null) {
    _isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
  }
  return _isRtlScrollbarOnLeft;
}
function computeIsRtlScrollbarOnLeft() {
  let outerEl = document.createElement("div");
  applyStyle(outerEl, {
    position: "absolute",
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: "scroll",
    direction: "rtl"
  });
  outerEl.innerHTML = "<div></div>";
  document.body.appendChild(outerEl);
  let innerEl = outerEl.firstChild;
  let res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
  removeElement(outerEl);
  return res;
}
var _scrollbarWidths;
function getScrollbarWidths() {
  if (!_scrollbarWidths) {
    _scrollbarWidths = computeScrollbarWidths();
  }
  return _scrollbarWidths;
}
function computeScrollbarWidths() {
  let el = document.createElement("div");
  el.style.overflow = "scroll";
  el.style.position = "absolute";
  el.style.top = "-9999px";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  let res = computeScrollbarWidthsForEl(el);
  document.body.removeChild(el);
  return res;
}
function computeScrollbarWidthsForEl(el) {
  return {
    x: el.offsetHeight - el.clientHeight,
    y: el.offsetWidth - el.clientWidth
  };
}
function computeEdges(el, getPadding = false) {
  let computedStyle = window.getComputedStyle(el);
  let borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
  let borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
  let borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
  let borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
  let badScrollbarWidths = computeScrollbarWidthsForEl(el);
  let scrollbarLeftRight = badScrollbarWidths.y - borderLeft - borderRight;
  let scrollbarBottom = badScrollbarWidths.x - borderTop - borderBottom;
  let res = {
    borderLeft,
    borderRight,
    borderTop,
    borderBottom,
    scrollbarBottom,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  if (getIsRtlScrollbarOnLeft() && computedStyle.direction === "rtl") {
    res.scrollbarLeft = scrollbarLeftRight;
  } else {
    res.scrollbarRight = scrollbarLeftRight;
  }
  if (getPadding) {
    res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
    res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
    res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
    res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
  }
  return res;
}
function computeInnerRect(el, goWithinPadding = false, doFromWindowViewport) {
  let outerRect = doFromWindowViewport ? el.getBoundingClientRect() : computeRect(el);
  let edges = computeEdges(el, goWithinPadding);
  let res = {
    left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
    right: outerRect.right - edges.borderRight - edges.scrollbarRight,
    top: outerRect.top + edges.borderTop,
    bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom
  };
  if (goWithinPadding) {
    res.left += edges.paddingLeft;
    res.right -= edges.paddingRight;
    res.top += edges.paddingTop;
    res.bottom -= edges.paddingBottom;
  }
  return res;
}
function computeRect(el) {
  let rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
    right: rect.right + window.scrollX,
    bottom: rect.bottom + window.scrollY
  };
}
function computeClippedClientRect(el) {
  let clippingParents = getClippingParents(el);
  let rect = el.getBoundingClientRect();
  for (let clippingParent of clippingParents) {
    let intersection = intersectRects(rect, clippingParent.getBoundingClientRect());
    if (intersection) {
      rect = intersection;
    } else {
      return null;
    }
  }
  return rect;
}
function getClippingParents(el) {
  let parents = [];
  while (el instanceof HTMLElement) {
    let computedStyle = window.getComputedStyle(el);
    if (computedStyle.position === "fixed") {
      break;
    }
    if (/(auto|scroll)/.test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
      parents.push(el);
    }
    el = el.parentNode;
  }
  return parents;
}
var PositionCache = class {
  constructor(originEl, els, isHorizontal, isVertical) {
    this.els = els;
    let originClientRect = this.originClientRect = originEl.getBoundingClientRect();
    if (isHorizontal) {
      this.buildElHorizontals(originClientRect.left);
    }
    if (isVertical) {
      this.buildElVerticals(originClientRect.top);
    }
  }
  // Populates the left/right internal coordinate arrays
  buildElHorizontals(originClientLeft) {
    let lefts = [];
    let rights = [];
    for (let el of this.els) {
      let rect = el.getBoundingClientRect();
      lefts.push(rect.left - originClientLeft);
      rights.push(rect.right - originClientLeft);
    }
    this.lefts = lefts;
    this.rights = rights;
  }
  // Populates the top/bottom internal coordinate arrays
  buildElVerticals(originClientTop) {
    let tops = [];
    let bottoms = [];
    for (let el of this.els) {
      let rect = el.getBoundingClientRect();
      tops.push(rect.top - originClientTop);
      bottoms.push(rect.bottom - originClientTop);
    }
    this.tops = tops;
    this.bottoms = bottoms;
  }
  // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
  // If no intersection is made, returns undefined.
  leftToIndex(leftPosition) {
    let { lefts, rights } = this;
    let len = lefts.length;
    let i3;
    for (i3 = 0; i3 < len; i3 += 1) {
      if (leftPosition >= lefts[i3] && leftPosition < rights[i3]) {
        return i3;
      }
    }
    return void 0;
  }
  // Given a top offset (from document top), returns the index of the el that it vertically intersects.
  // If no intersection is made, returns undefined.
  topToIndex(topPosition) {
    let { tops, bottoms } = this;
    let len = tops.length;
    let i3;
    for (i3 = 0; i3 < len; i3 += 1) {
      if (topPosition >= tops[i3] && topPosition < bottoms[i3]) {
        return i3;
      }
    }
    return void 0;
  }
  // Gets the width of the element at the given index
  getWidth(leftIndex) {
    return this.rights[leftIndex] - this.lefts[leftIndex];
  }
  // Gets the height of the element at the given index
  getHeight(topIndex) {
    return this.bottoms[topIndex] - this.tops[topIndex];
  }
  similarTo(otherCache) {
    return similarNumArrays(this.tops || [], otherCache.tops || []) && similarNumArrays(this.bottoms || [], otherCache.bottoms || []) && similarNumArrays(this.lefts || [], otherCache.lefts || []) && similarNumArrays(this.rights || [], otherCache.rights || []);
  }
};
function similarNumArrays(a3, b3) {
  const len = a3.length;
  if (len !== b3.length) {
    return false;
  }
  for (let i3 = 0; i3 < len; i3++) {
    if (Math.round(a3[i3]) !== Math.round(b3[i3])) {
      return false;
    }
  }
  return true;
}
var ScrollController = class {
  getMaxScrollTop() {
    return this.getScrollHeight() - this.getClientHeight();
  }
  getMaxScrollLeft() {
    return this.getScrollWidth() - this.getClientWidth();
  }
  canScrollVertically() {
    return this.getMaxScrollTop() > 0;
  }
  canScrollHorizontally() {
    return this.getMaxScrollLeft() > 0;
  }
  canScrollUp() {
    return this.getScrollTop() > 0;
  }
  canScrollDown() {
    return this.getScrollTop() < this.getMaxScrollTop();
  }
  canScrollLeft() {
    return this.getScrollLeft() > 0;
  }
  canScrollRight() {
    return this.getScrollLeft() < this.getMaxScrollLeft();
  }
};
var ElementScrollController = class extends ScrollController {
  constructor(el) {
    super();
    this.el = el;
  }
  getScrollTop() {
    return this.el.scrollTop;
  }
  getScrollLeft() {
    return this.el.scrollLeft;
  }
  setScrollTop(top) {
    this.el.scrollTop = top;
  }
  setScrollLeft(left) {
    this.el.scrollLeft = left;
  }
  getScrollWidth() {
    return this.el.scrollWidth;
  }
  getScrollHeight() {
    return this.el.scrollHeight;
  }
  getClientHeight() {
    return this.el.clientHeight;
  }
  getClientWidth() {
    return this.el.clientWidth;
  }
};
var WindowScrollController = class extends ScrollController {
  getScrollTop() {
    return window.scrollY;
  }
  getScrollLeft() {
    return window.scrollX;
  }
  setScrollTop(n2) {
    window.scroll(window.scrollX, n2);
  }
  setScrollLeft(n2) {
    window.scroll(n2, window.scrollY);
  }
  getScrollWidth() {
    return document.documentElement.scrollWidth;
  }
  getScrollHeight() {
    return document.documentElement.scrollHeight;
  }
  getClientHeight() {
    return document.documentElement.clientHeight;
  }
  getClientWidth() {
    return document.documentElement.clientWidth;
  }
};
var DateComponent = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.uid = guid();
  }
  // Hit System
  // -----------------------------------------------------------------------------------------------------------------
  prepareHits() {
  }
  queryHit(positionLeft, positionTop, elWidth, elHeight) {
    return null;
  }
  // Pointer Interaction Utils
  // -----------------------------------------------------------------------------------------------------------------
  isValidSegDownEl(el) {
    return !this.props.eventDrag && // HACK
    !this.props.eventResize && // HACK
    !elementClosest(el, ".fc-event-mirror");
  }
  isValidDateDownEl(el) {
    return !elementClosest(el, ".fc-event:not(.fc-bg-event)") && !elementClosest(el, ".fc-more-link") && // a "more.." link
    !elementClosest(el, "a[data-navlink]") && // a clickable nav link
    !elementClosest(el, ".fc-popover");
  }
};
var SegHierarchy = class {
  constructor(getEntryThickness = (entry) => {
    return entry.thickness || 1;
  }) {
    this.getEntryThickness = getEntryThickness;
    this.strictOrder = false;
    this.allowReslicing = false;
    this.maxCoord = -1;
    this.maxStackCnt = -1;
    this.levelCoords = [];
    this.entriesByLevel = [];
    this.stackCnts = {};
  }
  addSegs(inputs) {
    let hiddenEntries = [];
    for (let input of inputs) {
      this.insertEntry(input, hiddenEntries);
    }
    return hiddenEntries;
  }
  insertEntry(entry, hiddenEntries) {
    let insertion = this.findInsertion(entry);
    if (this.isInsertionValid(insertion, entry)) {
      this.insertEntryAt(entry, insertion);
    } else {
      this.handleInvalidInsertion(insertion, entry, hiddenEntries);
    }
  }
  isInsertionValid(insertion, entry) {
    return (this.maxCoord === -1 || insertion.levelCoord + this.getEntryThickness(entry) <= this.maxCoord) && (this.maxStackCnt === -1 || insertion.stackCnt < this.maxStackCnt);
  }
  handleInvalidInsertion(insertion, entry, hiddenEntries) {
    if (this.allowReslicing && insertion.touchingEntry) {
      const hiddenEntry = Object.assign(Object.assign({}, entry), { span: intersectSpans(entry.span, insertion.touchingEntry.span) });
      hiddenEntries.push(hiddenEntry);
      this.splitEntry(entry, insertion.touchingEntry, hiddenEntries);
    } else {
      hiddenEntries.push(entry);
    }
  }
  /*
  Does NOT add what hit the `barrier` into hiddenEntries. Should already be done.
  */
  splitEntry(entry, barrier, hiddenEntries) {
    let entrySpan = entry.span;
    let barrierSpan = barrier.span;
    if (entrySpan.start < barrierSpan.start) {
      this.insertEntry({
        index: entry.index,
        thickness: entry.thickness,
        span: { start: entrySpan.start, end: barrierSpan.start }
      }, hiddenEntries);
    }
    if (entrySpan.end > barrierSpan.end) {
      this.insertEntry({
        index: entry.index,
        thickness: entry.thickness,
        span: { start: barrierSpan.end, end: entrySpan.end }
      }, hiddenEntries);
    }
  }
  insertEntryAt(entry, insertion) {
    let { entriesByLevel, levelCoords } = this;
    if (insertion.lateral === -1) {
      insertAt(levelCoords, insertion.level, insertion.levelCoord);
      insertAt(entriesByLevel, insertion.level, [entry]);
    } else {
      insertAt(entriesByLevel[insertion.level], insertion.lateral, entry);
    }
    this.stackCnts[buildEntryKey(entry)] = insertion.stackCnt;
  }
  /*
  does not care about limits
  */
  findInsertion(newEntry) {
    let { levelCoords, entriesByLevel, strictOrder, stackCnts } = this;
    let levelCnt = levelCoords.length;
    let candidateCoord = 0;
    let touchingLevel = -1;
    let touchingLateral = -1;
    let touchingEntry = null;
    let stackCnt = 0;
    for (let trackingLevel = 0; trackingLevel < levelCnt; trackingLevel += 1) {
      const trackingCoord = levelCoords[trackingLevel];
      if (!strictOrder && trackingCoord >= candidateCoord + this.getEntryThickness(newEntry)) {
        break;
      }
      let trackingEntries = entriesByLevel[trackingLevel];
      let trackingEntry;
      let searchRes = binarySearch(trackingEntries, newEntry.span.start, getEntrySpanEnd);
      let lateralIndex = searchRes[0] + searchRes[1];
      while (
        // loop through entries that horizontally intersect
        (trackingEntry = trackingEntries[lateralIndex]) && // but not past the whole entry list
        trackingEntry.span.start < newEntry.span.end
      ) {
        let trackingEntryBottom = trackingCoord + this.getEntryThickness(trackingEntry);
        if (trackingEntryBottom > candidateCoord) {
          candidateCoord = trackingEntryBottom;
          touchingEntry = trackingEntry;
          touchingLevel = trackingLevel;
          touchingLateral = lateralIndex;
        }
        if (trackingEntryBottom === candidateCoord) {
          stackCnt = Math.max(stackCnt, stackCnts[buildEntryKey(trackingEntry)] + 1);
        }
        lateralIndex += 1;
      }
    }
    let destLevel = 0;
    if (touchingEntry) {
      destLevel = touchingLevel + 1;
      while (destLevel < levelCnt && levelCoords[destLevel] < candidateCoord) {
        destLevel += 1;
      }
    }
    let destLateral = -1;
    if (destLevel < levelCnt && levelCoords[destLevel] === candidateCoord) {
      destLateral = binarySearch(entriesByLevel[destLevel], newEntry.span.end, getEntrySpanEnd)[0];
    }
    return {
      touchingLevel,
      touchingLateral,
      touchingEntry,
      stackCnt,
      levelCoord: candidateCoord,
      level: destLevel,
      lateral: destLateral
    };
  }
  // sorted by levelCoord (lowest to highest)
  toRects() {
    let { entriesByLevel, levelCoords } = this;
    let levelCnt = entriesByLevel.length;
    let rects = [];
    for (let level = 0; level < levelCnt; level += 1) {
      let entries = entriesByLevel[level];
      let levelCoord = levelCoords[level];
      for (let entry of entries) {
        rects.push(Object.assign(Object.assign({}, entry), { thickness: this.getEntryThickness(entry), levelCoord }));
      }
    }
    return rects;
  }
};
function getEntrySpanEnd(entry) {
  return entry.span.end;
}
function buildEntryKey(entry) {
  return entry.index + ":" + entry.span.start;
}
function intersectSpans(span0, span1) {
  let start2 = Math.max(span0.start, span1.start);
  let end = Math.min(span0.end, span1.end);
  if (start2 < end) {
    return { start: start2, end };
  }
  return null;
}
function insertAt(arr, index4, item) {
  arr.splice(index4, 0, item);
}
function binarySearch(a3, searchVal, getItemVal) {
  let startIndex = 0;
  let endIndex = a3.length;
  if (!endIndex || searchVal < getItemVal(a3[startIndex])) {
    return [0, 0];
  }
  if (searchVal > getItemVal(a3[endIndex - 1])) {
    return [endIndex, 0];
  }
  while (startIndex < endIndex) {
    let middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
    let middleVal = getItemVal(a3[middleIndex]);
    if (searchVal < middleVal) {
      endIndex = middleIndex;
    } else if (searchVal > middleVal) {
      startIndex = middleIndex + 1;
    } else {
      return [middleIndex, 1];
    }
  }
  return [startIndex, 0];
}
var ElementDragging = class {
  constructor(el, selector) {
    this.emitter = new Emitter();
  }
  destroy() {
  }
  setMirrorIsVisible(bool) {
  }
  setMirrorNeedsRevert(bool) {
  }
  setAutoScrollEnabled(bool) {
  }
};
var config = {};
function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
  if (!datesRepDistinctDays || dayCnt > 10) {
    return createFormatter({ weekday: "short" });
  }
  if (dayCnt > 1) {
    return createFormatter({ weekday: "short", month: "numeric", day: "numeric", omitCommas: true });
  }
  return createFormatter({ weekday: "long" });
}
var CLASS_NAME = "fc-col-header-cell";
function renderInner$1(renderProps) {
  return renderProps.text;
}
var TableDateCell = class extends BaseComponent {
  render() {
    let { dateEnv, options, theme, viewApi } = this.context;
    let { props } = this;
    let { date, dateProfile } = props;
    let dayMeta = getDateMeta(date, props.todayRange, null, dateProfile);
    let classNames = [CLASS_NAME].concat(getDayClassNames(dayMeta, theme));
    let text2 = dateEnv.format(date, props.dayHeaderFormat);
    let navLinkAttrs = !dayMeta.isDisabled && props.colCnt > 1 ? buildNavLinkAttrs(this.context, date) : {};
    let publicDate = dateEnv.toDate(date);
    if (dateEnv.namedTimeZoneImpl) {
      publicDate = addMs(publicDate, 36e5);
    }
    let renderProps = Object.assign(Object.assign(Object.assign({ date: publicDate, view: viewApi }, props.extraRenderProps), { text: text2 }), dayMeta);
    return y(ContentContainer, { elTag: "th", elClasses: classNames, elAttrs: Object.assign({ role: "columnheader", colSpan: props.colSpan, "data-date": !dayMeta.isDisabled ? formatDayString(date) : void 0 }, props.extraDataAttrs), renderProps, generatorName: "dayHeaderContent", customGenerator: options.dayHeaderContent, defaultGenerator: renderInner$1, classNameGenerator: options.dayHeaderClassNames, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, (InnerContainer) => y("div", { className: "fc-scrollgrid-sync-inner" }, !dayMeta.isDisabled && y(InnerContainer, { elTag: "a", elAttrs: navLinkAttrs, elClasses: [
      "fc-col-header-cell-cushion",
      props.isSticky && "fc-sticky"
    ] })));
  }
};
var WEEKDAY_FORMAT = createFormatter({ weekday: "long" });
var TableDowCell = class extends BaseComponent {
  render() {
    let { props } = this;
    let { dateEnv, theme, viewApi, options } = this.context;
    let date = addDays(/* @__PURE__ */ new Date(2592e5), props.dow);
    let dateMeta = {
      dow: props.dow,
      isDisabled: false,
      isFuture: false,
      isPast: false,
      isToday: false,
      isOther: false
    };
    let text2 = dateEnv.format(date, props.dayHeaderFormat);
    let renderProps = Object.assign(Object.assign(Object.assign(Object.assign({
      // TODO: make this public?
      date
    }, dateMeta), { view: viewApi }), props.extraRenderProps), { text: text2 });
    return y(ContentContainer, { elTag: "th", elClasses: [
      CLASS_NAME,
      ...getDayClassNames(dateMeta, theme),
      ...props.extraClassNames || []
    ], elAttrs: Object.assign({ role: "columnheader", colSpan: props.colSpan }, props.extraDataAttrs), renderProps, generatorName: "dayHeaderContent", customGenerator: options.dayHeaderContent, defaultGenerator: renderInner$1, classNameGenerator: options.dayHeaderClassNames, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, (InnerContent) => y(
      "div",
      { className: "fc-scrollgrid-sync-inner" },
      y(InnerContent, { elTag: "a", elClasses: [
        "fc-col-header-cell-cushion",
        props.isSticky && "fc-sticky"
      ], elAttrs: {
        "aria-label": dateEnv.format(date, WEEKDAY_FORMAT)
      } })
    ));
  }
};
var DayHeader = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.createDayHeaderFormatter = memoize(createDayHeaderFormatter);
  }
  render() {
    let { context } = this;
    let { dates, dateProfile, datesRepDistinctDays, renderIntro } = this.props;
    let dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, datesRepDistinctDays, dates.length);
    return y(NowTimer, { unit: "day" }, (nowDate, todayRange) => y(
      "tr",
      { role: "row" },
      renderIntro && renderIntro("day"),
      dates.map((date) => datesRepDistinctDays ? y(TableDateCell, { key: date.toISOString(), date, dateProfile, todayRange, colCnt: dates.length, dayHeaderFormat }) : y(TableDowCell, { key: date.getUTCDay(), dow: date.getUTCDay(), dayHeaderFormat }))
    ));
  }
};
function createDayHeaderFormatter(explicitFormat, datesRepDistinctDays, dateCnt) {
  return explicitFormat || computeFallbackHeaderFormat(datesRepDistinctDays, dateCnt);
}
var DaySeriesModel = class {
  constructor(range, dateProfileGenerator) {
    let date = range.start;
    let { end } = range;
    let indices = [];
    let dates = [];
    let dayIndex = -1;
    while (date < end) {
      if (dateProfileGenerator.isHiddenDay(date)) {
        indices.push(dayIndex + 0.5);
      } else {
        dayIndex += 1;
        indices.push(dayIndex);
        dates.push(date);
      }
      date = addDays(date, 1);
    }
    this.dates = dates;
    this.indices = indices;
    this.cnt = dates.length;
  }
  sliceRange(range) {
    let firstIndex = this.getDateDayIndex(range.start);
    let lastIndex = this.getDateDayIndex(addDays(range.end, -1));
    let clippedFirstIndex = Math.max(0, firstIndex);
    let clippedLastIndex = Math.min(this.cnt - 1, lastIndex);
    clippedFirstIndex = Math.ceil(clippedFirstIndex);
    clippedLastIndex = Math.floor(clippedLastIndex);
    if (clippedFirstIndex <= clippedLastIndex) {
      return {
        firstIndex: clippedFirstIndex,
        lastIndex: clippedLastIndex,
        isStart: firstIndex === clippedFirstIndex,
        isEnd: lastIndex === clippedLastIndex
      };
    }
    return null;
  }
  // Given a date, returns its chronolocial cell-index from the first cell of the grid.
  // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
  // If before the first offset, returns a negative number.
  // If after the last offset, returns an offset past the last cell offset.
  // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
  getDateDayIndex(date) {
    let { indices } = this;
    let dayOffset = Math.floor(diffDays(this.dates[0], date));
    if (dayOffset < 0) {
      return indices[0] - 1;
    }
    if (dayOffset >= indices.length) {
      return indices[indices.length - 1] + 1;
    }
    return indices[dayOffset];
  }
};
var DayTableModel = class {
  constructor(daySeries, breakOnWeeks) {
    let { dates } = daySeries;
    let daysPerRow;
    let firstDay;
    let rowCnt;
    if (breakOnWeeks) {
      firstDay = dates[0].getUTCDay();
      for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow += 1) {
        if (dates[daysPerRow].getUTCDay() === firstDay) {
          break;
        }
      }
      rowCnt = Math.ceil(dates.length / daysPerRow);
    } else {
      rowCnt = 1;
      daysPerRow = dates.length;
    }
    this.rowCnt = rowCnt;
    this.colCnt = daysPerRow;
    this.daySeries = daySeries;
    this.cells = this.buildCells();
    this.headerDates = this.buildHeaderDates();
  }
  buildCells() {
    let rows = [];
    for (let row = 0; row < this.rowCnt; row += 1) {
      let cells = [];
      for (let col = 0; col < this.colCnt; col += 1) {
        cells.push(this.buildCell(row, col));
      }
      rows.push(cells);
    }
    return rows;
  }
  buildCell(row, col) {
    let date = this.daySeries.dates[row * this.colCnt + col];
    return {
      key: date.toISOString(),
      date
    };
  }
  buildHeaderDates() {
    let dates = [];
    for (let col = 0; col < this.colCnt; col += 1) {
      dates.push(this.cells[0][col].date);
    }
    return dates;
  }
  sliceRange(range) {
    let { colCnt } = this;
    let seriesSeg = this.daySeries.sliceRange(range);
    let segs = [];
    if (seriesSeg) {
      let { firstIndex, lastIndex } = seriesSeg;
      let index4 = firstIndex;
      while (index4 <= lastIndex) {
        let row = Math.floor(index4 / colCnt);
        let nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
        segs.push({
          row,
          firstCol: index4 % colCnt,
          lastCol: (nextIndex - 1) % colCnt,
          isStart: seriesSeg.isStart && index4 === firstIndex,
          isEnd: seriesSeg.isEnd && nextIndex - 1 === lastIndex
        });
        index4 = nextIndex;
      }
    }
    return segs;
  }
};
var Slicer = class {
  constructor() {
    this.sliceBusinessHours = memoize(this._sliceBusinessHours);
    this.sliceDateSelection = memoize(this._sliceDateSpan);
    this.sliceEventStore = memoize(this._sliceEventStore);
    this.sliceEventDrag = memoize(this._sliceInteraction);
    this.sliceEventResize = memoize(this._sliceInteraction);
    this.forceDayIfListItem = false;
  }
  sliceProps(props, dateProfile, nextDayThreshold, context, ...extraArgs) {
    let { eventUiBases } = props;
    let eventSegs = this.sliceEventStore(props.eventStore, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs);
    return {
      dateSelectionSegs: this.sliceDateSelection(props.dateSelection, dateProfile, nextDayThreshold, eventUiBases, context, ...extraArgs),
      businessHourSegs: this.sliceBusinessHours(props.businessHours, dateProfile, nextDayThreshold, context, ...extraArgs),
      fgEventSegs: eventSegs.fg,
      bgEventSegs: eventSegs.bg,
      eventDrag: this.sliceEventDrag(props.eventDrag, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs),
      eventResize: this.sliceEventResize(props.eventResize, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs),
      eventSelection: props.eventSelection
    };
  }
  sliceNowDate(date, dateProfile, nextDayThreshold, context, ...extraArgs) {
    return this._sliceDateSpan(
      { range: { start: date, end: addMs(date, 1) }, allDay: false },
      // add 1 ms, protect against null range
      dateProfile,
      nextDayThreshold,
      {},
      context,
      ...extraArgs
    );
  }
  _sliceBusinessHours(businessHours, dateProfile, nextDayThreshold, context, ...extraArgs) {
    if (!businessHours) {
      return [];
    }
    return this._sliceEventStore(expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), context), {}, dateProfile, nextDayThreshold, ...extraArgs).bg;
  }
  _sliceEventStore(eventStore, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs) {
    if (eventStore) {
      let rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
      return {
        bg: this.sliceEventRanges(rangeRes.bg, extraArgs),
        fg: this.sliceEventRanges(rangeRes.fg, extraArgs)
      };
    }
    return { bg: [], fg: [] };
  }
  _sliceInteraction(interaction, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs) {
    if (!interaction) {
      return null;
    }
    let rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
    return {
      segs: this.sliceEventRanges(rangeRes.fg, extraArgs),
      affectedInstances: interaction.affectedEvents.instances,
      isEvent: interaction.isEvent
    };
  }
  _sliceDateSpan(dateSpan, dateProfile, nextDayThreshold, eventUiBases, context, ...extraArgs) {
    if (!dateSpan) {
      return [];
    }
    let activeRange = computeActiveRange(dateProfile, Boolean(nextDayThreshold));
    let activeDateSpanRange = intersectRanges(dateSpan.range, activeRange);
    if (activeDateSpanRange) {
      dateSpan = Object.assign(Object.assign({}, dateSpan), { range: activeDateSpanRange });
      let eventRange = fabricateEventRange(dateSpan, eventUiBases, context);
      let segs = this.sliceRange(dateSpan.range, ...extraArgs);
      for (let seg of segs) {
        seg.eventRange = eventRange;
      }
      return segs;
    }
    return [];
  }
  /*
  "complete" seg means it has component and eventRange
  */
  sliceEventRanges(eventRanges, extraArgs) {
    let segs = [];
    for (let eventRange of eventRanges) {
      segs.push(...this.sliceEventRange(eventRange, extraArgs));
    }
    return segs;
  }
  /*
  "complete" seg means it has component and eventRange
  */
  sliceEventRange(eventRange, extraArgs) {
    let dateRange = eventRange.range;
    if (this.forceDayIfListItem && eventRange.ui.display === "list-item") {
      dateRange = {
        start: dateRange.start,
        end: addDays(dateRange.start, 1)
      };
    }
    let segs = this.sliceRange(dateRange, ...extraArgs);
    for (let seg of segs) {
      seg.eventRange = eventRange;
      seg.isStart = eventRange.isStart && seg.isStart;
      seg.isEnd = eventRange.isEnd && seg.isEnd;
    }
    return segs;
  }
};
function computeActiveRange(dateProfile, isComponentAllDay) {
  let range = dateProfile.activeRange;
  if (isComponentAllDay) {
    return range;
  }
  return {
    start: addMs(range.start, dateProfile.slotMinTime.milliseconds),
    end: addMs(range.end, dateProfile.slotMaxTime.milliseconds - 864e5)
    // 864e5 = ms in a day
  };
}
function isInteractionValid(interaction, dateProfile, context) {
  let { instances } = interaction.mutatedEvents;
  for (let instanceId in instances) {
    if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) {
      return false;
    }
  }
  return isNewPropsValid({ eventDrag: interaction }, context);
}
function isDateSelectionValid(dateSelection, dateProfile, context) {
  if (!rangeContainsRange(dateProfile.validRange, dateSelection.range)) {
    return false;
  }
  return isNewPropsValid({ dateSelection }, context);
}
function isNewPropsValid(newProps, context) {
  let calendarState = context.getCurrentData();
  let props = Object.assign({ businessHours: calendarState.businessHours, dateSelection: "", eventStore: calendarState.eventStore, eventUiBases: calendarState.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, newProps);
  return (context.pluginHooks.isPropsValid || isPropsValid)(props, context);
}
function isPropsValid(state, context, dateSpanMeta = {}, filterConfig) {
  if (state.eventDrag && !isInteractionPropsValid(state, context, dateSpanMeta, filterConfig)) {
    return false;
  }
  if (state.dateSelection && !isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig)) {
    return false;
  }
  return true;
}
function isInteractionPropsValid(state, context, dateSpanMeta, filterConfig) {
  let currentState = context.getCurrentData();
  let interaction = state.eventDrag;
  let subjectEventStore = interaction.mutatedEvents;
  let subjectDefs = subjectEventStore.defs;
  let subjectInstances = subjectEventStore.instances;
  let subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ? state.eventUiBases : { "": currentState.selectionConfig });
  if (filterConfig) {
    subjectConfigs = mapHash(subjectConfigs, filterConfig);
  }
  let otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances);
  let otherDefs = otherEventStore.defs;
  let otherInstances = otherEventStore.instances;
  let otherConfigs = compileEventUis(otherDefs, state.eventUiBases);
  for (let subjectInstanceId in subjectInstances) {
    let subjectInstance = subjectInstances[subjectInstanceId];
    let subjectRange = subjectInstance.range;
    let subjectConfig = subjectConfigs[subjectInstance.defId];
    let subjectDef = subjectDefs[subjectInstance.defId];
    if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, context)) {
      return false;
    }
    let { eventOverlap } = context.options;
    let eventOverlapFunc = typeof eventOverlap === "function" ? eventOverlap : null;
    for (let otherInstanceId in otherInstances) {
      let otherInstance = otherInstances[otherInstanceId];
      if (rangesIntersect(subjectRange, otherInstance.range)) {
        let otherOverlap = otherConfigs[otherInstance.defId].overlap;
        if (otherOverlap === false && interaction.isEvent) {
          return false;
        }
        if (subjectConfig.overlap === false) {
          return false;
        }
        if (eventOverlapFunc && !eventOverlapFunc(
          new EventImpl(context, otherDefs[otherInstance.defId], otherInstance),
          // still event
          new EventImpl(context, subjectDef, subjectInstance)
        )) {
          return false;
        }
      }
    }
    let calendarEventStore = currentState.eventStore;
    for (let subjectAllow of subjectConfig.allows) {
      let subjectDateSpan = Object.assign(Object.assign({}, dateSpanMeta), { range: subjectInstance.range, allDay: subjectDef.allDay });
      let origDef = calendarEventStore.defs[subjectDef.defId];
      let origInstance = calendarEventStore.instances[subjectInstanceId];
      let eventApi;
      if (origDef) {
        eventApi = new EventImpl(context, origDef, origInstance);
      } else {
        eventApi = new EventImpl(context, subjectDef);
      }
      if (!subjectAllow(buildDateSpanApiWithContext(subjectDateSpan, context), eventApi)) {
        return false;
      }
    }
  }
  return true;
}
function isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig) {
  let relevantEventStore = state.eventStore;
  let relevantDefs = relevantEventStore.defs;
  let relevantInstances = relevantEventStore.instances;
  let selection = state.dateSelection;
  let selectionRange = selection.range;
  let { selectionConfig } = context.getCurrentData();
  if (filterConfig) {
    selectionConfig = filterConfig(selectionConfig);
  }
  if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, context)) {
    return false;
  }
  let { selectOverlap } = context.options;
  let selectOverlapFunc = typeof selectOverlap === "function" ? selectOverlap : null;
  for (let relevantInstanceId in relevantInstances) {
    let relevantInstance = relevantInstances[relevantInstanceId];
    if (rangesIntersect(selectionRange, relevantInstance.range)) {
      if (selectionConfig.overlap === false) {
        return false;
      }
      if (selectOverlapFunc && !selectOverlapFunc(new EventImpl(context, relevantDefs[relevantInstance.defId], relevantInstance), null)) {
        return false;
      }
    }
  }
  for (let selectionAllow of selectionConfig.allows) {
    let fullDateSpan = Object.assign(Object.assign({}, dateSpanMeta), selection);
    if (!selectionAllow(buildDateSpanApiWithContext(fullDateSpan, context), null)) {
      return false;
    }
  }
  return true;
}
function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, context) {
  for (let constraint of constraints) {
    if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, context), subjectRange)) {
      return false;
    }
  }
  return true;
}
function constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, context) {
  if (constraint === "businessHours") {
    return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, context));
  }
  if (typeof constraint === "string") {
    return eventStoreToRanges(filterEventStoreDefs(otherEventStore, (eventDef) => eventDef.groupId === constraint));
  }
  if (typeof constraint === "object" && constraint) {
    return eventStoreToRanges(expandRecurring(constraint, subjectRange, context));
  }
  return [];
}
function eventStoreToRanges(eventStore) {
  let { instances } = eventStore;
  let ranges = [];
  for (let instanceId in instances) {
    ranges.push(instances[instanceId].range);
  }
  return ranges;
}
function anyRangesContainRange(outerRanges, innerRange) {
  for (let outerRange of outerRanges) {
    if (rangeContainsRange(outerRange, innerRange)) {
      return true;
    }
  }
  return false;
}
var VISIBLE_HIDDEN_RE = /^(visible|hidden)$/;
var Scroller = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.handleEl = (el) => {
      this.el = el;
      setRef(this.props.elRef, el);
    };
  }
  render() {
    let { props } = this;
    let { liquid, liquidIsAbsolute } = props;
    let isAbsolute = liquid && liquidIsAbsolute;
    let className = ["fc-scroller"];
    if (liquid) {
      if (liquidIsAbsolute) {
        className.push("fc-scroller-liquid-absolute");
      } else {
        className.push("fc-scroller-liquid");
      }
    }
    return y("div", { ref: this.handleEl, className: className.join(" "), style: {
      overflowX: props.overflowX,
      overflowY: props.overflowY,
      left: isAbsolute && -(props.overcomeLeft || 0) || "",
      right: isAbsolute && -(props.overcomeRight || 0) || "",
      bottom: isAbsolute && -(props.overcomeBottom || 0) || "",
      marginLeft: !isAbsolute && -(props.overcomeLeft || 0) || "",
      marginRight: !isAbsolute && -(props.overcomeRight || 0) || "",
      marginBottom: !isAbsolute && -(props.overcomeBottom || 0) || "",
      maxHeight: props.maxHeight || ""
    } }, props.children);
  }
  needsXScrolling() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
      return false;
    }
    let { el } = this;
    let realClientWidth = this.el.getBoundingClientRect().width - this.getYScrollbarWidth();
    let { children } = el;
    for (let i3 = 0; i3 < children.length; i3 += 1) {
      let childEl = children[i3];
      if (childEl.getBoundingClientRect().width > realClientWidth) {
        return true;
      }
    }
    return false;
  }
  needsYScrolling() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
      return false;
    }
    let { el } = this;
    let realClientHeight = this.el.getBoundingClientRect().height - this.getXScrollbarWidth();
    let { children } = el;
    for (let i3 = 0; i3 < children.length; i3 += 1) {
      let childEl = children[i3];
      if (childEl.getBoundingClientRect().height > realClientHeight) {
        return true;
      }
    }
    return false;
  }
  getXScrollbarWidth() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
      return 0;
    }
    return this.el.offsetHeight - this.el.clientHeight;
  }
  getYScrollbarWidth() {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
      return 0;
    }
    return this.el.offsetWidth - this.el.clientWidth;
  }
};
var RefMap = class {
  constructor(masterCallback) {
    this.masterCallback = masterCallback;
    this.currentMap = {};
    this.depths = {};
    this.callbackMap = {};
    this.handleValue = (val, key) => {
      let { depths, currentMap } = this;
      let removed = false;
      let added = false;
      if (val !== null) {
        removed = key in currentMap;
        currentMap[key] = val;
        depths[key] = (depths[key] || 0) + 1;
        added = true;
      } else {
        depths[key] -= 1;
        if (!depths[key]) {
          delete currentMap[key];
          delete this.callbackMap[key];
          removed = true;
        }
      }
      if (this.masterCallback) {
        if (removed) {
          this.masterCallback(null, String(key));
        }
        if (added) {
          this.masterCallback(val, String(key));
        }
      }
    };
  }
  createRef(key) {
    let refCallback = this.callbackMap[key];
    if (!refCallback) {
      refCallback = this.callbackMap[key] = (val) => {
        this.handleValue(val, String(key));
      };
    }
    return refCallback;
  }
  // TODO: check callers that don't care about order. should use getAll instead
  // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
  // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"
  collect(startIndex, endIndex, step2) {
    return collectFromHash(this.currentMap, startIndex, endIndex, step2);
  }
  getAll() {
    return hashValuesToArray(this.currentMap);
  }
};
function computeShrinkWidth(chunkEls) {
  let shrinkCells = findElements(chunkEls, ".fc-scrollgrid-shrink");
  let largestWidth = 0;
  for (let shrinkCell of shrinkCells) {
    largestWidth = Math.max(largestWidth, computeSmallestCellWidth(shrinkCell));
  }
  return Math.ceil(largestWidth);
}
function getSectionHasLiquidHeight(props, sectionConfig) {
  return props.liquid && sectionConfig.liquid;
}
function getAllowYScrolling(props, sectionConfig) {
  return sectionConfig.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
  getSectionHasLiquidHeight(props, sectionConfig);
}
function renderChunkContent(sectionConfig, chunkConfig, arg, isHeader) {
  let { expandRows } = arg;
  let content = typeof chunkConfig.content === "function" ? chunkConfig.content(arg) : y("table", {
    role: "presentation",
    className: [
      chunkConfig.tableClassName,
      sectionConfig.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: arg.tableMinWidth,
      width: arg.clientWidth,
      height: expandRows ? arg.clientHeight : ""
      // css `height` on a <table> serves as a min-height
    }
  }, arg.tableColGroupNode, y(isHeader ? "thead" : "tbody", {
    role: "presentation"
  }, typeof chunkConfig.rowContent === "function" ? chunkConfig.rowContent(arg) : chunkConfig.rowContent));
  return content;
}
function isColPropsEqual(cols0, cols1) {
  return isArraysEqual(cols0, cols1, isPropsEqual);
}
function renderMicroColGroup(cols, shrinkWidth) {
  let colNodes = [];
  for (let colProps of cols) {
    let span = colProps.span || 1;
    for (let i3 = 0; i3 < span; i3 += 1) {
      colNodes.push(y("col", { style: {
        width: colProps.width === "shrink" ? sanitizeShrinkWidth(shrinkWidth) : colProps.width || "",
        minWidth: colProps.minWidth || ""
      } }));
    }
  }
  return y("colgroup", {}, ...colNodes);
}
function sanitizeShrinkWidth(shrinkWidth) {
  return shrinkWidth == null ? 4 : shrinkWidth;
}
function hasShrinkWidth(cols) {
  for (let col of cols) {
    if (col.width === "shrink") {
      return true;
    }
  }
  return false;
}
function getScrollGridClassNames(liquid, context) {
  let classNames = [
    "fc-scrollgrid",
    context.theme.getClass("table")
  ];
  if (liquid) {
    classNames.push("fc-scrollgrid-liquid");
  }
  return classNames;
}
function getSectionClassNames(sectionConfig, wholeTableVGrow) {
  let classNames = [
    "fc-scrollgrid-section",
    `fc-scrollgrid-section-${sectionConfig.type}`,
    sectionConfig.className
    // used?
  ];
  if (wholeTableVGrow && sectionConfig.liquid && sectionConfig.maxHeight == null) {
    classNames.push("fc-scrollgrid-section-liquid");
  }
  if (sectionConfig.isSticky) {
    classNames.push("fc-scrollgrid-section-sticky");
  }
  return classNames;
}
function renderScrollShim(arg) {
  return y("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: arg.clientWidth,
    minWidth: arg.tableMinWidth
  } });
}
function getStickyHeaderDates(options) {
  let { stickyHeaderDates } = options;
  if (stickyHeaderDates == null || stickyHeaderDates === "auto") {
    stickyHeaderDates = options.height === "auto" || options.viewHeight === "auto";
  }
  return stickyHeaderDates;
}
function getStickyFooterScrollbar(options) {
  let { stickyFooterScrollbar } = options;
  if (stickyFooterScrollbar == null || stickyFooterScrollbar === "auto") {
    stickyFooterScrollbar = options.height === "auto" || options.viewHeight === "auto";
  }
  return stickyFooterScrollbar;
}
var SimpleScrollGrid = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.processCols = memoize((a3) => a3, isColPropsEqual);
    this.renderMicroColGroup = memoize(renderMicroColGroup);
    this.scrollerRefs = new RefMap();
    this.scrollerElRefs = new RefMap(this._handleScrollerEl.bind(this));
    this.state = {
      shrinkWidth: null,
      forceYScrollbars: false,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    };
    this.handleSizing = () => {
      this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
    };
  }
  render() {
    let { props, state, context } = this;
    let sectionConfigs = props.sections || [];
    let cols = this.processCols(props.cols);
    let microColGroupNode = this.renderMicroColGroup(cols, state.shrinkWidth);
    let classNames = getScrollGridClassNames(props.liquid, context);
    if (props.collapsibleWidth) {
      classNames.push("fc-scrollgrid-collapsible");
    }
    let configCnt = sectionConfigs.length;
    let configI = 0;
    let currentConfig2;
    let headSectionNodes = [];
    let bodySectionNodes = [];
    let footSectionNodes = [];
    while (configI < configCnt && (currentConfig2 = sectionConfigs[configI]).type === "header") {
      headSectionNodes.push(this.renderSection(currentConfig2, microColGroupNode, true));
      configI += 1;
    }
    while (configI < configCnt && (currentConfig2 = sectionConfigs[configI]).type === "body") {
      bodySectionNodes.push(this.renderSection(currentConfig2, microColGroupNode, false));
      configI += 1;
    }
    while (configI < configCnt && (currentConfig2 = sectionConfigs[configI]).type === "footer") {
      footSectionNodes.push(this.renderSection(currentConfig2, microColGroupNode, true));
      configI += 1;
    }
    let isBuggy = !getCanVGrowWithinCell();
    const roleAttrs = { role: "rowgroup" };
    return y("table", {
      role: "grid",
      className: classNames.join(" "),
      style: { height: props.height }
    }, Boolean(!isBuggy && headSectionNodes.length) && y("thead", roleAttrs, ...headSectionNodes), Boolean(!isBuggy && bodySectionNodes.length) && y("tbody", roleAttrs, ...bodySectionNodes), Boolean(!isBuggy && footSectionNodes.length) && y("tfoot", roleAttrs, ...footSectionNodes), isBuggy && y("tbody", roleAttrs, ...headSectionNodes, ...bodySectionNodes, ...footSectionNodes));
  }
  renderSection(sectionConfig, microColGroupNode, isHeader) {
    if ("outerContent" in sectionConfig) {
      return y(_, { key: sectionConfig.key }, sectionConfig.outerContent);
    }
    return y("tr", { key: sectionConfig.key, role: "presentation", className: getSectionClassNames(sectionConfig, this.props.liquid).join(" ") }, this.renderChunkTd(sectionConfig, microColGroupNode, sectionConfig.chunk, isHeader));
  }
  renderChunkTd(sectionConfig, microColGroupNode, chunkConfig, isHeader) {
    if ("outerContent" in chunkConfig) {
      return chunkConfig.outerContent;
    }
    let { props } = this;
    let { forceYScrollbars, scrollerClientWidths, scrollerClientHeights } = this.state;
    let needsYScrolling = getAllowYScrolling(props, sectionConfig);
    let isLiquid = getSectionHasLiquidHeight(props, sectionConfig);
    let overflowY = !props.liquid ? "visible" : forceYScrollbars ? "scroll" : !needsYScrolling ? "hidden" : "auto";
    let sectionKey = sectionConfig.key;
    let content = renderChunkContent(sectionConfig, chunkConfig, {
      tableColGroupNode: microColGroupNode,
      tableMinWidth: "",
      clientWidth: !props.collapsibleWidth && scrollerClientWidths[sectionKey] !== void 0 ? scrollerClientWidths[sectionKey] : null,
      clientHeight: scrollerClientHeights[sectionKey] !== void 0 ? scrollerClientHeights[sectionKey] : null,
      expandRows: sectionConfig.expandRows,
      syncRowHeights: false,
      rowSyncHeights: [],
      reportRowHeightChange: () => {
      }
    }, isHeader);
    return y(isHeader ? "th" : "td", {
      ref: chunkConfig.elRef,
      role: "presentation"
    }, y(
      "div",
      { className: `fc-scroller-harness${isLiquid ? " fc-scroller-harness-liquid" : ""}` },
      y(Scroller, { ref: this.scrollerRefs.createRef(sectionKey), elRef: this.scrollerElRefs.createRef(sectionKey), overflowY, overflowX: !props.liquid ? "visible" : "hidden", maxHeight: sectionConfig.maxHeight, liquid: isLiquid, liquidIsAbsolute: true }, content)
    ));
  }
  _handleScrollerEl(scrollerEl, key) {
    let section = getSectionByKey(this.props.sections, key);
    if (section) {
      setRef(section.chunk.scrollerElRef, scrollerEl);
    }
  }
  componentDidMount() {
    this.handleSizing();
    this.context.addResizeHandler(this.handleSizing);
  }
  componentDidUpdate() {
    this.handleSizing();
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleSizing);
  }
  computeShrinkWidth() {
    return hasShrinkWidth(this.props.cols) ? computeShrinkWidth(this.scrollerElRefs.getAll()) : 0;
  }
  computeScrollerDims() {
    let scrollbarWidth = getScrollbarWidths();
    let { scrollerRefs, scrollerElRefs } = this;
    let forceYScrollbars = false;
    let scrollerClientWidths = {};
    let scrollerClientHeights = {};
    for (let sectionKey in scrollerRefs.currentMap) {
      let scroller = scrollerRefs.currentMap[sectionKey];
      if (scroller && scroller.needsYScrolling()) {
        forceYScrollbars = true;
        break;
      }
    }
    for (let section of this.props.sections) {
      let sectionKey = section.key;
      let scrollerEl = scrollerElRefs.currentMap[sectionKey];
      if (scrollerEl) {
        let harnessEl = scrollerEl.parentNode;
        scrollerClientWidths[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().width - (forceYScrollbars ? scrollbarWidth.y : 0));
        scrollerClientHeights[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars, scrollerClientWidths, scrollerClientHeights };
  }
};
SimpleScrollGrid.addStateEquality({
  scrollerClientWidths: isPropsEqual,
  scrollerClientHeights: isPropsEqual
});
function getSectionByKey(sections, key) {
  for (let section of sections) {
    if (section.key === key) {
      return section;
    }
  }
  return null;
}
var EventContainer = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.buildPublicEvent = memoize((context, eventDef, eventInstance) => new EventImpl(context, eventDef, eventInstance));
    this.handleEl = (el) => {
      this.el = el;
      setRef(this.props.elRef, el);
      if (el) {
        setElSeg(el, this.props.seg);
      }
    };
  }
  render() {
    const { props, context } = this;
    const { options } = context;
    const { seg } = props;
    const { eventRange } = seg;
    const { ui } = eventRange;
    const renderProps = {
      event: this.buildPublicEvent(context, eventRange.def, eventRange.instance),
      view: context.viewApi,
      timeText: props.timeText,
      textColor: ui.textColor,
      backgroundColor: ui.backgroundColor,
      borderColor: ui.borderColor,
      isDraggable: !props.disableDragging && computeSegDraggable(seg, context),
      isStartResizable: !props.disableResizing && computeSegStartResizable(seg, context),
      isEndResizable: !props.disableResizing && computeSegEndResizable(seg),
      isMirror: Boolean(props.isDragging || props.isResizing || props.isDateSelecting),
      isStart: Boolean(seg.isStart),
      isEnd: Boolean(seg.isEnd),
      isPast: Boolean(props.isPast),
      isFuture: Boolean(props.isFuture),
      isToday: Boolean(props.isToday),
      isSelected: Boolean(props.isSelected),
      isDragging: Boolean(props.isDragging),
      isResizing: Boolean(props.isResizing)
    };
    return y(ContentContainer, { elRef: this.handleEl, elTag: props.elTag, elAttrs: props.elAttrs, elClasses: [
      ...getEventClassNames(renderProps),
      ...seg.eventRange.ui.classNames,
      ...props.elClasses || []
    ], elStyle: props.elStyle, renderProps, generatorName: "eventContent", customGenerator: options.eventContent, defaultGenerator: props.defaultGenerator, classNameGenerator: options.eventClassNames, didMount: options.eventDidMount, willUnmount: options.eventWillUnmount }, props.children);
  }
  componentDidUpdate(prevProps) {
    if (this.el && this.props.seg !== prevProps.seg) {
      setElSeg(this.el, this.props.seg);
    }
  }
};
var StandardEvent = class extends BaseComponent {
  render() {
    let { props, context } = this;
    let { options } = context;
    let { seg } = props;
    let { ui } = seg.eventRange;
    let timeFormat = options.eventTimeFormat || props.defaultTimeFormat;
    let timeText = buildSegTimeText(seg, timeFormat, context, props.defaultDisplayEventTime, props.defaultDisplayEventEnd);
    return y(EventContainer, Object.assign({}, props, { elTag: "a", elStyle: {
      borderColor: ui.borderColor,
      backgroundColor: ui.backgroundColor
    }, elAttrs: getSegAnchorAttrs(seg, context), defaultGenerator: renderInnerContent$1, timeText }), (InnerContent, eventContentArg) => y(
      _,
      null,
      y(InnerContent, { elTag: "div", elClasses: ["fc-event-main"], elStyle: { color: eventContentArg.textColor } }),
      Boolean(eventContentArg.isStartResizable) && y("div", { className: "fc-event-resizer fc-event-resizer-start" }),
      Boolean(eventContentArg.isEndResizable) && y("div", { className: "fc-event-resizer fc-event-resizer-end" })
    ));
  }
};
StandardEvent.addPropsEquality({
  seg: isPropsEqual
});
function renderInnerContent$1(innerProps) {
  return y(
    "div",
    { className: "fc-event-main-frame" },
    innerProps.timeText && y("div", { className: "fc-event-time" }, innerProps.timeText),
    y(
      "div",
      { className: "fc-event-title-container" },
      y("div", { className: "fc-event-title fc-sticky" }, innerProps.event.title || y(_, null, "\xA0"))
    )
  );
}
var DAY_NUM_FORMAT = createFormatter({ day: "numeric" });
var DayCellContainer = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.refineRenderProps = memoizeObjArg(refineRenderProps);
  }
  render() {
    let { props, context } = this;
    let { options } = context;
    let renderProps = this.refineRenderProps({
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      isMonthStart: props.isMonthStart || false,
      showDayNumber: props.showDayNumber,
      extraRenderProps: props.extraRenderProps,
      viewApi: context.viewApi,
      dateEnv: context.dateEnv,
      monthStartFormat: options.monthStartFormat
    });
    return y(ContentContainer, { elRef: props.elRef, elTag: props.elTag, elAttrs: Object.assign(Object.assign({}, props.elAttrs), renderProps.isDisabled ? {} : { "data-date": formatDayString(props.date) }), elClasses: [
      ...getDayClassNames(renderProps, context.theme),
      ...props.elClasses || []
    ], elStyle: props.elStyle, renderProps, generatorName: "dayCellContent", customGenerator: options.dayCellContent, defaultGenerator: props.defaultGenerator, classNameGenerator: (
      // don't use custom classNames if disabled
      renderProps.isDisabled ? void 0 : options.dayCellClassNames
    ), didMount: options.dayCellDidMount, willUnmount: options.dayCellWillUnmount }, props.children);
  }
};
function hasCustomDayCellContent(options) {
  return Boolean(options.dayCellContent || hasCustomRenderingHandler("dayCellContent", options));
}
function refineRenderProps(raw) {
  let { date, dateEnv, dateProfile, isMonthStart } = raw;
  let dayMeta = getDateMeta(date, raw.todayRange, null, dateProfile);
  let dayNumberText = raw.showDayNumber ? dateEnv.format(date, isMonthStart ? raw.monthStartFormat : DAY_NUM_FORMAT) : "";
  return Object.assign(Object.assign(Object.assign({ date: dateEnv.toDate(date), view: raw.viewApi }, dayMeta), {
    isMonthStart,
    dayNumberText
  }), raw.extraRenderProps);
}
var BgEvent = class extends BaseComponent {
  render() {
    let { props } = this;
    let { seg } = props;
    return y(EventContainer, { elTag: "div", elClasses: ["fc-bg-event"], elStyle: { backgroundColor: seg.eventRange.ui.backgroundColor }, defaultGenerator: renderInnerContent, seg, timeText: "", isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday, disableDragging: true, disableResizing: true });
  }
};
function renderInnerContent(props) {
  let { title } = props.event;
  return title && y("div", { className: "fc-event-title" }, props.event.title);
}
function renderFill(fillType) {
  return y("div", { className: `fc-${fillType}` });
}
var WeekNumberContainer = (props) => y(ViewContextType.Consumer, null, (context) => {
  let { dateEnv, options } = context;
  let { date } = props;
  let format2 = options.weekNumberFormat || props.defaultFormat;
  let num = dateEnv.computeWeekNumber(date);
  let text2 = dateEnv.format(date, format2);
  let renderProps = { num, text: text2, date };
  return y(
    ContentContainer,
    { elRef: props.elRef, elTag: props.elTag, elAttrs: props.elAttrs, elClasses: props.elClasses, elStyle: props.elStyle, renderProps, generatorName: "weekNumberContent", customGenerator: options.weekNumberContent, defaultGenerator: renderInner, classNameGenerator: options.weekNumberClassNames, didMount: options.weekNumberDidMount, willUnmount: options.weekNumberWillUnmount },
    props.children
  );
});
function renderInner(innerProps) {
  return innerProps.text;
}
var PADDING_FROM_VIEWPORT = 10;
var Popover = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.state = {
      titleId: getUniqueDomId()
    };
    this.handleRootEl = (el) => {
      this.rootEl = el;
      if (this.props.elRef) {
        setRef(this.props.elRef, el);
      }
    };
    this.handleDocumentMouseDown = (ev) => {
      const target = getEventTargetViaRoot(ev);
      if (!this.rootEl.contains(target)) {
        this.handleCloseClick();
      }
    };
    this.handleDocumentKeyDown = (ev) => {
      if (ev.key === "Escape") {
        this.handleCloseClick();
      }
    };
    this.handleCloseClick = () => {
      let { onClose } = this.props;
      if (onClose) {
        onClose();
      }
    };
  }
  render() {
    let { theme, options } = this.context;
    let { props, state } = this;
    let classNames = [
      "fc-popover",
      theme.getClass("popover")
    ].concat(props.extraClassNames || []);
    return j3(y(
      "div",
      Object.assign({}, props.extraAttrs, { id: props.id, className: classNames.join(" "), "aria-labelledby": state.titleId, ref: this.handleRootEl }),
      y(
        "div",
        { className: "fc-popover-header " + theme.getClass("popoverHeader") },
        y("span", { className: "fc-popover-title", id: state.titleId }, props.title),
        y("span", { className: "fc-popover-close " + theme.getIconClass("close"), title: options.closeHint, onClick: this.handleCloseClick })
      ),
      y("div", { className: "fc-popover-body " + theme.getClass("popoverContent") }, props.children)
    ), props.parentEl);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    this.updateSize();
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  updateSize() {
    let { isRtl } = this.context;
    let { alignmentEl, alignGridTop } = this.props;
    let { rootEl } = this;
    let alignmentRect = computeClippedClientRect(alignmentEl);
    if (alignmentRect) {
      let popoverDims = rootEl.getBoundingClientRect();
      let popoverTop = alignGridTop ? elementClosest(alignmentEl, ".fc-scrollgrid").getBoundingClientRect().top : alignmentRect.top;
      let popoverLeft = isRtl ? alignmentRect.right - popoverDims.width : alignmentRect.left;
      popoverTop = Math.max(popoverTop, PADDING_FROM_VIEWPORT);
      popoverLeft = Math.min(popoverLeft, document.documentElement.clientWidth - PADDING_FROM_VIEWPORT - popoverDims.width);
      popoverLeft = Math.max(popoverLeft, PADDING_FROM_VIEWPORT);
      let origin = rootEl.offsetParent.getBoundingClientRect();
      applyStyle(rootEl, {
        top: popoverTop - origin.top,
        left: popoverLeft - origin.left
      });
    }
  }
};
var MorePopover = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.handleRootEl = (rootEl) => {
      this.rootEl = rootEl;
      if (rootEl) {
        this.context.registerInteractiveComponent(this, {
          el: rootEl,
          useEventCenter: false
        });
      } else {
        this.context.unregisterInteractiveComponent(this);
      }
    };
  }
  render() {
    let { options, dateEnv } = this.context;
    let { props } = this;
    let { startDate, todayRange, dateProfile } = props;
    let title = dateEnv.format(startDate, options.dayPopoverFormat);
    return y(DayCellContainer, { elRef: this.handleRootEl, date: startDate, dateProfile, todayRange }, (InnerContent, renderProps, elAttrs) => y(
      Popover,
      { elRef: elAttrs.ref, id: props.id, title, extraClassNames: ["fc-more-popover"].concat(elAttrs.className || []), extraAttrs: elAttrs, parentEl: props.parentEl, alignmentEl: props.alignmentEl, alignGridTop: props.alignGridTop, onClose: props.onClose },
      hasCustomDayCellContent(options) && y(InnerContent, { elTag: "div", elClasses: ["fc-more-popover-misc"] }),
      props.children
    ));
  }
  queryHit(positionLeft, positionTop, elWidth, elHeight) {
    let { rootEl, props } = this;
    if (positionLeft >= 0 && positionLeft < elWidth && positionTop >= 0 && positionTop < elHeight) {
      return {
        dateProfile: props.dateProfile,
        dateSpan: Object.assign({ allDay: !props.forceTimed, range: {
          start: props.startDate,
          end: props.endDate
        } }, props.extraDateSpan),
        dayEl: rootEl,
        rect: {
          left: 0,
          top: 0,
          right: elWidth,
          bottom: elHeight
        },
        layer: 1
        // important when comparing with hits from other components
      };
    }
    return null;
  }
};
var MoreLinkContainer = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isPopoverOpen: false,
      popoverId: getUniqueDomId()
    };
    this.handleLinkEl = (linkEl) => {
      this.linkEl = linkEl;
      if (this.props.elRef) {
        setRef(this.props.elRef, linkEl);
      }
    };
    this.handleClick = (ev) => {
      let { props, context } = this;
      let { moreLinkClick } = context.options;
      let date = computeRange(props).start;
      function buildPublicSeg(seg) {
        let { def, instance, range } = seg.eventRange;
        return {
          event: new EventImpl(context, def, instance),
          start: context.dateEnv.toDate(range.start),
          end: context.dateEnv.toDate(range.end),
          isStart: seg.isStart,
          isEnd: seg.isEnd
        };
      }
      if (typeof moreLinkClick === "function") {
        moreLinkClick = moreLinkClick({
          date,
          allDay: Boolean(props.allDayDate),
          allSegs: props.allSegs.map(buildPublicSeg),
          hiddenSegs: props.hiddenSegs.map(buildPublicSeg),
          jsEvent: ev,
          view: context.viewApi
        });
      }
      if (!moreLinkClick || moreLinkClick === "popover") {
        this.setState({ isPopoverOpen: true });
      } else if (typeof moreLinkClick === "string") {
        context.calendarApi.zoomTo(date, moreLinkClick);
      }
    };
    this.handlePopoverClose = () => {
      this.setState({ isPopoverOpen: false });
    };
  }
  render() {
    let { props, state } = this;
    return y(ViewContextType.Consumer, null, (context) => {
      let { viewApi, options, calendarApi } = context;
      let { moreLinkText } = options;
      let { moreCnt } = props;
      let range = computeRange(props);
      let text2 = typeof moreLinkText === "function" ? moreLinkText.call(calendarApi, moreCnt) : `+${moreCnt} ${moreLinkText}`;
      let hint = formatWithOrdinals(options.moreLinkHint, [moreCnt], text2);
      let renderProps = {
        num: moreCnt,
        shortText: `+${moreCnt}`,
        text: text2,
        view: viewApi
      };
      return y(
        _,
        null,
        Boolean(props.moreCnt) && y(ContentContainer, { elTag: props.elTag || "a", elRef: this.handleLinkEl, elClasses: [
          ...props.elClasses || [],
          "fc-more-link"
        ], elStyle: props.elStyle, elAttrs: Object.assign(Object.assign(Object.assign({}, props.elAttrs), createAriaClickAttrs(this.handleClick)), { title: hint, "aria-expanded": state.isPopoverOpen, "aria-controls": state.isPopoverOpen ? state.popoverId : "" }), renderProps, generatorName: "moreLinkContent", customGenerator: options.moreLinkContent, defaultGenerator: props.defaultGenerator || renderMoreLinkInner, classNameGenerator: options.moreLinkClassNames, didMount: options.moreLinkDidMount, willUnmount: options.moreLinkWillUnmount }, props.children),
        state.isPopoverOpen && y(MorePopover, { id: state.popoverId, startDate: range.start, endDate: range.end, dateProfile: props.dateProfile, todayRange: props.todayRange, extraDateSpan: props.extraDateSpan, parentEl: this.parentEl, alignmentEl: props.alignmentElRef ? props.alignmentElRef.current : this.linkEl, alignGridTop: props.alignGridTop, forceTimed: props.forceTimed, onClose: this.handlePopoverClose }, props.popoverContent())
      );
    });
  }
  componentDidMount() {
    this.updateParentEl();
  }
  componentDidUpdate() {
    this.updateParentEl();
  }
  updateParentEl() {
    if (this.linkEl) {
      this.parentEl = elementClosest(this.linkEl, ".fc-view-harness");
    }
  }
};
function renderMoreLinkInner(props) {
  return props.text;
}
function computeRange(props) {
  if (props.allDayDate) {
    return {
      start: props.allDayDate,
      end: addDays(props.allDayDate, 1)
    };
  }
  let { hiddenSegs } = props;
  return {
    start: computeEarliestSegStart(hiddenSegs),
    end: computeLatestSegEnd(hiddenSegs)
  };
}
function computeEarliestSegStart(segs) {
  return segs.reduce(pickEarliestStart).eventRange.range.start;
}
function pickEarliestStart(seg0, seg1) {
  return seg0.eventRange.range.start < seg1.eventRange.range.start ? seg0 : seg1;
}
function computeLatestSegEnd(segs) {
  return segs.reduce(pickLatestEnd).eventRange.range.end;
}
function pickLatestEnd(seg0, seg1) {
  return seg0.eventRange.range.end > seg1.eventRange.range.end ? seg0 : seg1;
}

// node_modules/@fullcalendar/core/index.js
var globalLocales = [];
var MINIMAL_RAW_EN_LOCALE = {
  code: "en",
  week: {
    dow: 0,
    doy: 4
    // 4 days need to be within the year to be considered the first week
  },
  direction: "ltr",
  buttonText: {
    prev: "prev",
    next: "next",
    prevYear: "prev year",
    nextYear: "next year",
    year: "year",
    today: "today",
    month: "month",
    week: "week",
    day: "day",
    list: "list"
  },
  weekText: "W",
  weekTextLong: "Week",
  closeHint: "Close",
  timeHint: "Time",
  eventHint: "Event",
  allDayText: "all-day",
  moreLinkText: "more",
  noEventsText: "No events to display"
};
var RAW_EN_LOCALE = Object.assign(Object.assign({}, MINIMAL_RAW_EN_LOCALE), {
  // Includes things we don't want other locales to inherit,
  // things that derive from other translatable strings.
  buttonHints: {
    prev: "Previous $0",
    next: "Next $0",
    today(buttonText, unit) {
      return unit === "day" ? "Today" : `This ${buttonText}`;
    }
  },
  viewHint: "$0 view",
  navLinkHint: "Go to $0",
  moreLinkHint(eventCnt) {
    return `Show ${eventCnt} more event${eventCnt === 1 ? "" : "s"}`;
  }
});
function organizeRawLocales(explicitRawLocales) {
  let defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : "en";
  let allRawLocales = globalLocales.concat(explicitRawLocales);
  let rawLocaleMap = {
    en: RAW_EN_LOCALE
  };
  for (let rawLocale of allRawLocales) {
    rawLocaleMap[rawLocale.code] = rawLocale;
  }
  return {
    map: rawLocaleMap,
    defaultCode
  };
}
function buildLocale(inputSingular, available) {
  if (typeof inputSingular === "object" && !Array.isArray(inputSingular)) {
    return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
  }
  return queryLocale(inputSingular, available);
}
function queryLocale(codeArg, available) {
  let codes = [].concat(codeArg || []);
  let raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
  return parseLocale(codeArg, codes, raw);
}
function queryRawLocale(codes, available) {
  for (let i3 = 0; i3 < codes.length; i3 += 1) {
    let parts = codes[i3].toLocaleLowerCase().split("-");
    for (let j4 = parts.length; j4 > 0; j4 -= 1) {
      let simpleId = parts.slice(0, j4).join("-");
      if (available[simpleId]) {
        return available[simpleId];
      }
    }
  }
  return null;
}
function parseLocale(codeArg, codes, raw) {
  let merged = mergeProps([MINIMAL_RAW_EN_LOCALE, raw], ["buttonText"]);
  delete merged.code;
  let { week } = merged;
  delete merged.week;
  return {
    codeArg,
    codes,
    week,
    simpleNumberFormat: new Intl.NumberFormat(codeArg),
    options: merged
  };
}
function createPlugin(input) {
  return {
    majorVersionError: MAJOR_VERSION_ERROR,
    id: guid(),
    name: input.name,
    premiumReleaseDate: input.premiumReleaseDate ? new Date(input.premiumReleaseDate) : void 0,
    deps: input.deps || [],
    reducers: input.reducers || [],
    isLoadingFuncs: input.isLoadingFuncs || [],
    contextInit: [].concat(input.contextInit || []),
    eventRefiners: input.eventRefiners || {},
    eventDefMemberAdders: input.eventDefMemberAdders || [],
    eventSourceRefiners: input.eventSourceRefiners || {},
    isDraggableTransformers: input.isDraggableTransformers || [],
    eventDragMutationMassagers: input.eventDragMutationMassagers || [],
    eventDefMutationAppliers: input.eventDefMutationAppliers || [],
    dateSelectionTransformers: input.dateSelectionTransformers || [],
    datePointTransforms: input.datePointTransforms || [],
    dateSpanTransforms: input.dateSpanTransforms || [],
    views: input.views || {},
    viewPropsTransformers: input.viewPropsTransformers || [],
    isPropsValid: input.isPropsValid || null,
    externalDefTransforms: input.externalDefTransforms || [],
    viewContainerAppends: input.viewContainerAppends || [],
    eventDropTransformers: input.eventDropTransformers || [],
    componentInteractions: input.componentInteractions || [],
    calendarInteractions: input.calendarInteractions || [],
    themeClasses: input.themeClasses || {},
    eventSourceDefs: input.eventSourceDefs || [],
    cmdFormatter: input.cmdFormatter,
    recurringTypes: input.recurringTypes || [],
    namedTimeZonedImpl: input.namedTimeZonedImpl,
    initialView: input.initialView || "",
    elementDraggingImpl: input.elementDraggingImpl,
    optionChangeHandlers: input.optionChangeHandlers || {},
    scrollGridImpl: input.scrollGridImpl || null,
    listenerRefiners: input.listenerRefiners || {},
    optionRefiners: input.optionRefiners || {},
    propSetHandlers: input.propSetHandlers || {}
  };
}
function buildPluginHooks(pluginDefs, globalDefs) {
  let currentPluginIds = {};
  let hooks = {
    premiumReleaseDate: void 0,
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: "",
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };
  function addDefs(defs) {
    for (let def of defs) {
      const pluginName = def.name;
      const currentId = currentPluginIds[pluginName];
      if (currentId === void 0) {
        currentPluginIds[pluginName] = def.id;
        addDefs(def.deps);
        hooks = combineHooks(hooks, def);
      } else if (currentId !== def.id) {
        console.warn(`Duplicate plugin '${pluginName}'`);
      }
    }
  }
  if (pluginDefs) {
    addDefs(pluginDefs);
  }
  addDefs(globalDefs);
  return hooks;
}
function buildBuildPluginHooks() {
  let currentOverrideDefs = [];
  let currentGlobalDefs = [];
  let currentHooks;
  return (overrideDefs, globalDefs) => {
    if (!currentHooks || !isArraysEqual(overrideDefs, currentOverrideDefs) || !isArraysEqual(globalDefs, currentGlobalDefs)) {
      currentHooks = buildPluginHooks(overrideDefs, globalDefs);
    }
    currentOverrideDefs = overrideDefs;
    currentGlobalDefs = globalDefs;
    return currentHooks;
  };
}
function combineHooks(hooks0, hooks1) {
  return {
    premiumReleaseDate: compareOptionalDates(hooks0.premiumReleaseDate, hooks1.premiumReleaseDate),
    reducers: hooks0.reducers.concat(hooks1.reducers),
    isLoadingFuncs: hooks0.isLoadingFuncs.concat(hooks1.isLoadingFuncs),
    contextInit: hooks0.contextInit.concat(hooks1.contextInit),
    eventRefiners: Object.assign(Object.assign({}, hooks0.eventRefiners), hooks1.eventRefiners),
    eventDefMemberAdders: hooks0.eventDefMemberAdders.concat(hooks1.eventDefMemberAdders),
    eventSourceRefiners: Object.assign(Object.assign({}, hooks0.eventSourceRefiners), hooks1.eventSourceRefiners),
    isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
    eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
    eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
    dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
    datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
    dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
    views: Object.assign(Object.assign({}, hooks0.views), hooks1.views),
    viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
    isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
    externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
    viewContainerAppends: hooks0.viewContainerAppends.concat(hooks1.viewContainerAppends),
    eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
    calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
    componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
    themeClasses: Object.assign(Object.assign({}, hooks0.themeClasses), hooks1.themeClasses),
    eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
    cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
    recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
    namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
    initialView: hooks0.initialView || hooks1.initialView,
    elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
    optionChangeHandlers: Object.assign(Object.assign({}, hooks0.optionChangeHandlers), hooks1.optionChangeHandlers),
    scrollGridImpl: hooks1.scrollGridImpl || hooks0.scrollGridImpl,
    listenerRefiners: Object.assign(Object.assign({}, hooks0.listenerRefiners), hooks1.listenerRefiners),
    optionRefiners: Object.assign(Object.assign({}, hooks0.optionRefiners), hooks1.optionRefiners),
    propSetHandlers: Object.assign(Object.assign({}, hooks0.propSetHandlers), hooks1.propSetHandlers)
  };
}
function compareOptionalDates(date0, date1) {
  if (date0 === void 0) {
    return date1;
  }
  if (date1 === void 0) {
    return date0;
  }
  return new Date(Math.max(date0.valueOf(), date1.valueOf()));
}
var StandardTheme = class extends Theme {
};
StandardTheme.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
StandardTheme.prototype.baseIconClass = "fc-icon";
StandardTheme.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
StandardTheme.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
StandardTheme.prototype.iconOverrideOption = "buttonIcons";
StandardTheme.prototype.iconOverrideCustomButtonOption = "icon";
StandardTheme.prototype.iconOverridePrefix = "fc-icon-";
function compileViewDefs(defaultConfigs, overrideConfigs) {
  let hash = {};
  let viewType;
  for (viewType in defaultConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }
  for (viewType in overrideConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }
  return hash;
}
function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  if (hash[viewType]) {
    return hash[viewType];
  }
  let viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  if (viewDef) {
    hash[viewType] = viewDef;
  }
  return viewDef;
}
function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  let defaultConfig = defaultConfigs[viewType];
  let overrideConfig = overrideConfigs[viewType];
  let queryProp = (name) => defaultConfig && defaultConfig[name] !== null ? defaultConfig[name] : overrideConfig && overrideConfig[name] !== null ? overrideConfig[name] : null;
  let theComponent = queryProp("component");
  let superType = queryProp("superType");
  let superDef = null;
  if (superType) {
    if (superType === viewType) {
      throw new Error("Can't have a custom view type that references itself");
    }
    superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
  }
  if (!theComponent && superDef) {
    theComponent = superDef.component;
  }
  if (!theComponent) {
    return null;
  }
  return {
    type: viewType,
    component: theComponent,
    defaults: Object.assign(Object.assign({}, superDef ? superDef.defaults : {}), defaultConfig ? defaultConfig.rawOptions : {}),
    overrides: Object.assign(Object.assign({}, superDef ? superDef.overrides : {}), overrideConfig ? overrideConfig.rawOptions : {})
  };
}
function parseViewConfigs(inputs) {
  return mapHash(inputs, parseViewConfig);
}
function parseViewConfig(input) {
  let rawOptions = typeof input === "function" ? { component: input } : input;
  let { component } = rawOptions;
  if (rawOptions.content) {
    component = createViewHookComponent(rawOptions);
  } else if (component && !(component.prototype instanceof BaseComponent)) {
    component = createViewHookComponent(Object.assign(Object.assign({}, rawOptions), { content: component }));
  }
  return {
    superType: rawOptions.type,
    component,
    rawOptions
    // includes type and component too :(
  };
}
function createViewHookComponent(options) {
  return (viewProps) => y(ViewContextType.Consumer, null, (context) => y(ContentContainer, { elTag: "div", elClasses: buildViewClassNames(context.viewSpec), renderProps: Object.assign(Object.assign({}, viewProps), { nextDayThreshold: context.options.nextDayThreshold }), generatorName: void 0, customGenerator: options.content, classNameGenerator: options.classNames, didMount: options.didMount, willUnmount: options.willUnmount }));
}
function buildViewSpecs(defaultInputs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
  let defaultConfigs = parseViewConfigs(defaultInputs);
  let overrideConfigs = parseViewConfigs(optionOverrides.views);
  let viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
  return mapHash(viewDefs, (viewDef) => buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults));
}
function buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
  let durationInput = viewDef.overrides.duration || viewDef.defaults.duration || dynamicOptionOverrides.duration || optionOverrides.duration;
  let duration2 = null;
  let durationUnit = "";
  let singleUnit = "";
  let singleUnitOverrides = {};
  if (durationInput) {
    duration2 = createDurationCached(durationInput);
    if (duration2) {
      let denom = greatestDurationDenominator(duration2);
      durationUnit = denom.unit;
      if (denom.value === 1) {
        singleUnit = durationUnit;
        singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].rawOptions : {};
      }
    }
  }
  let queryButtonText = (optionsSubset) => {
    let buttonTextMap = optionsSubset.buttonText || {};
    let buttonTextKey = viewDef.defaults.buttonTextKey;
    if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
      return buttonTextMap[buttonTextKey];
    }
    if (buttonTextMap[viewDef.type] != null) {
      return buttonTextMap[viewDef.type];
    }
    if (buttonTextMap[singleUnit] != null) {
      return buttonTextMap[singleUnit];
    }
    return null;
  };
  let queryButtonTitle = (optionsSubset) => {
    let buttonHints = optionsSubset.buttonHints || {};
    let buttonKey = viewDef.defaults.buttonTextKey;
    if (buttonKey != null && buttonHints[buttonKey] != null) {
      return buttonHints[buttonKey];
    }
    if (buttonHints[viewDef.type] != null) {
      return buttonHints[viewDef.type];
    }
    if (buttonHints[singleUnit] != null) {
      return buttonHints[singleUnit];
    }
    return null;
  };
  return {
    type: viewDef.type,
    component: viewDef.component,
    duration: duration2,
    durationUnit,
    singleUnit,
    optionDefaults: viewDef.defaults,
    optionOverrides: Object.assign(Object.assign({}, singleUnitOverrides), viewDef.overrides),
    buttonTextOverride: queryButtonText(dynamicOptionOverrides) || queryButtonText(optionOverrides) || // constructor-specified buttonText lookup hash takes precedence
    viewDef.overrides.buttonText,
    buttonTextDefault: queryButtonText(localeDefaults) || viewDef.defaults.buttonText || queryButtonText(BASE_OPTION_DEFAULTS) || viewDef.type,
    // not DRY
    buttonTitleOverride: queryButtonTitle(dynamicOptionOverrides) || queryButtonTitle(optionOverrides) || viewDef.overrides.buttonHint,
    buttonTitleDefault: queryButtonTitle(localeDefaults) || viewDef.defaults.buttonHint || queryButtonTitle(BASE_OPTION_DEFAULTS)
    // will eventually fall back to buttonText
  };
}
var durationInputMap = {};
function createDurationCached(durationInput) {
  let json = JSON.stringify(durationInput);
  let res = durationInputMap[json];
  if (res === void 0) {
    res = createDuration(durationInput);
    durationInputMap[json] = res;
  }
  return res;
}
function reduceViewType(viewType, action) {
  switch (action.type) {
    case "CHANGE_VIEW_TYPE":
      viewType = action.viewType;
  }
  return viewType;
}
function reduceCurrentDate(currentDate, action) {
  switch (action.type) {
    case "CHANGE_DATE":
      return action.dateMarker;
    default:
      return currentDate;
  }
}
function getInitialDate(options, dateEnv, nowManager) {
  let initialDateInput = options.initialDate;
  if (initialDateInput != null) {
    return dateEnv.createMarker(initialDateInput);
  }
  return nowManager.getDateMarker();
}
function reduceDynamicOptionOverrides(dynamicOptionOverrides, action) {
  switch (action.type) {
    case "SET_OPTION":
      return Object.assign(Object.assign({}, dynamicOptionOverrides), { [action.optionName]: action.rawOptionValue });
    default:
      return dynamicOptionOverrides;
  }
}
function reduceDateProfile(currentDateProfile, action, currentDate, dateProfileGenerator) {
  let dp;
  switch (action.type) {
    case "CHANGE_VIEW_TYPE":
      return dateProfileGenerator.build(action.dateMarker || currentDate);
    case "CHANGE_DATE":
      return dateProfileGenerator.build(action.dateMarker);
    case "PREV":
      dp = dateProfileGenerator.buildPrev(currentDateProfile, currentDate);
      if (dp.isValid) {
        return dp;
      }
      break;
    case "NEXT":
      dp = dateProfileGenerator.buildNext(currentDateProfile, currentDate);
      if (dp.isValid) {
        return dp;
      }
      break;
  }
  return currentDateProfile;
}
function initEventSources(calendarOptions, dateProfile, context) {
  let activeRange = dateProfile ? dateProfile.activeRange : null;
  return addSources({}, parseInitialSources(calendarOptions, context), activeRange, context);
}
function reduceEventSources(eventSources, action, dateProfile, context) {
  let activeRange = dateProfile ? dateProfile.activeRange : null;
  switch (action.type) {
    case "ADD_EVENT_SOURCES":
      return addSources(eventSources, action.sources, activeRange, context);
    case "REMOVE_EVENT_SOURCE":
      return removeSource(eventSources, action.sourceId);
    case "PREV":
    // TODO: how do we track all actions that affect dateProfile :(
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      if (dateProfile) {
        return fetchDirtySources(eventSources, activeRange, context);
      }
      return eventSources;
    case "FETCH_EVENT_SOURCES":
      return fetchSourcesByIds(eventSources, action.sourceIds ? (
        // why no type?
        arrayToHash(action.sourceIds)
      ) : excludeStaticSources(eventSources, context), activeRange, action.isRefetch || false, context);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return eventSources;
  }
}
function reduceEventSourcesNewTimeZone(eventSources, dateProfile, context) {
  let activeRange = dateProfile ? dateProfile.activeRange : null;
  return fetchSourcesByIds(eventSources, excludeStaticSources(eventSources, context), activeRange, true, context);
}
function computeEventSourcesLoading(eventSources) {
  for (let sourceId in eventSources) {
    if (eventSources[sourceId].isFetching) {
      return true;
    }
  }
  return false;
}
function addSources(eventSourceHash, sources, fetchRange, context) {
  let hash = {};
  for (let source of sources) {
    hash[source.sourceId] = source;
  }
  if (fetchRange) {
    hash = fetchDirtySources(hash, fetchRange, context);
  }
  return Object.assign(Object.assign({}, eventSourceHash), hash);
}
function removeSource(eventSourceHash, sourceId) {
  return filterHash(eventSourceHash, (eventSource) => eventSource.sourceId !== sourceId);
}
function fetchDirtySources(sourceHash, fetchRange, context) {
  return fetchSourcesByIds(sourceHash, filterHash(sourceHash, (eventSource) => isSourceDirty(eventSource, fetchRange, context)), fetchRange, false, context);
}
function isSourceDirty(eventSource, fetchRange, context) {
  if (!doesSourceNeedRange(eventSource, context)) {
    return !eventSource.latestFetchId;
  }
  return !context.options.lazyFetching || !eventSource.fetchRange || eventSource.isFetching || // always cancel outdated in-progress fetches
  fetchRange.start < eventSource.fetchRange.start || fetchRange.end > eventSource.fetchRange.end;
}
function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, isRefetch, context) {
  let nextSources = {};
  for (let sourceId in prevSources) {
    let source = prevSources[sourceId];
    if (sourceIdHash[sourceId]) {
      nextSources[sourceId] = fetchSource(source, fetchRange, isRefetch, context);
    } else {
      nextSources[sourceId] = source;
    }
  }
  return nextSources;
}
function fetchSource(eventSource, fetchRange, isRefetch, context) {
  let { options, calendarApi } = context;
  let sourceDef = context.pluginHooks.eventSourceDefs[eventSource.sourceDefId];
  let fetchId = guid();
  sourceDef.fetch({
    eventSource,
    range: fetchRange,
    isRefetch,
    context
  }, (res) => {
    let { rawEvents } = res;
    if (options.eventSourceSuccess) {
      rawEvents = options.eventSourceSuccess.call(calendarApi, rawEvents, res.response) || rawEvents;
    }
    if (eventSource.success) {
      rawEvents = eventSource.success.call(calendarApi, rawEvents, res.response) || rawEvents;
    }
    context.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: eventSource.sourceId,
      fetchId,
      fetchRange,
      rawEvents
    });
  }, (error) => {
    let errorHandled = false;
    if (options.eventSourceFailure) {
      options.eventSourceFailure.call(calendarApi, error);
      errorHandled = true;
    }
    if (eventSource.failure) {
      eventSource.failure(error);
      errorHandled = true;
    }
    if (!errorHandled) {
      console.warn(error.message, error);
    }
    context.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: eventSource.sourceId,
      fetchId,
      fetchRange,
      error
    });
  });
  return Object.assign(Object.assign({}, eventSource), { isFetching: true, latestFetchId: fetchId });
}
function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
  let eventSource = sourceHash[sourceId];
  if (eventSource && // not already removed
  fetchId === eventSource.latestFetchId) {
    return Object.assign(Object.assign({}, sourceHash), { [sourceId]: Object.assign(Object.assign({}, eventSource), { isFetching: false, fetchRange }) });
  }
  return sourceHash;
}
function excludeStaticSources(eventSources, context) {
  return filterHash(eventSources, (eventSource) => doesSourceNeedRange(eventSource, context));
}
function parseInitialSources(rawOptions, context) {
  let refiners = buildEventSourceRefiners(context);
  let rawSources = [].concat(rawOptions.eventSources || []);
  let sources = [];
  if (rawOptions.initialEvents) {
    rawSources.unshift(rawOptions.initialEvents);
  }
  if (rawOptions.events) {
    rawSources.unshift(rawOptions.events);
  }
  for (let rawSource of rawSources) {
    let source = parseEventSource(rawSource, context, refiners);
    if (source) {
      sources.push(source);
    }
  }
  return sources;
}
function doesSourceNeedRange(eventSource, context) {
  let defs = context.pluginHooks.eventSourceDefs;
  return !defs[eventSource.sourceDefId].ignoreRange;
}
function reduceDateSelection(currentSelection, action) {
  switch (action.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return action.selection;
    default:
      return currentSelection;
  }
}
function reduceSelectedEvent(currentInstanceId, action) {
  switch (action.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return action.eventInstanceId;
    default:
      return currentInstanceId;
  }
}
function reduceEventDrag(currentDrag, action) {
  let newDrag;
  switch (action.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      newDrag = action.state;
      return {
        affectedEvents: newDrag.affectedEvents,
        mutatedEvents: newDrag.mutatedEvents,
        isEvent: newDrag.isEvent
      };
    default:
      return currentDrag;
  }
}
function reduceEventResize(currentResize, action) {
  let newResize;
  switch (action.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      newResize = action.state;
      return {
        affectedEvents: newResize.affectedEvents,
        mutatedEvents: newResize.mutatedEvents,
        isEvent: newResize.isEvent
      };
    default:
      return currentResize;
  }
}
function parseToolbars(calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  let header = calendarOptions.headerToolbar ? parseToolbar(calendarOptions.headerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
  let footer = calendarOptions.footerToolbar ? parseToolbar(calendarOptions.footerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
  return { header, footer };
}
function parseToolbar(sectionStrHash, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  let sectionWidgets = {};
  let viewsWithButtons = [];
  let hasTitle = false;
  for (let sectionName in sectionStrHash) {
    let sectionStr = sectionStrHash[sectionName];
    let sectionRes = parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi);
    sectionWidgets[sectionName] = sectionRes.widgets;
    viewsWithButtons.push(...sectionRes.viewsWithButtons);
    hasTitle = hasTitle || sectionRes.hasTitle;
  }
  return { sectionWidgets, viewsWithButtons, hasTitle };
}
function parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  let isRtl = calendarOptions.direction === "rtl";
  let calendarCustomButtons = calendarOptions.customButtons || {};
  let calendarButtonTextOverrides = calendarOptionOverrides.buttonText || {};
  let calendarButtonText = calendarOptions.buttonText || {};
  let calendarButtonHintOverrides = calendarOptionOverrides.buttonHints || {};
  let calendarButtonHints = calendarOptions.buttonHints || {};
  let sectionSubstrs = sectionStr ? sectionStr.split(" ") : [];
  let viewsWithButtons = [];
  let hasTitle = false;
  let widgets = sectionSubstrs.map((buttonGroupStr) => buttonGroupStr.split(",").map((buttonName) => {
    if (buttonName === "title") {
      hasTitle = true;
      return { buttonName };
    }
    let customButtonProps;
    let viewSpec;
    let buttonClick;
    let buttonIcon;
    let buttonText;
    let buttonHint;
    if (customButtonProps = calendarCustomButtons[buttonName]) {
      buttonClick = (ev) => {
        if (customButtonProps.click) {
          customButtonProps.click.call(ev.target, ev, ev.target);
        }
      };
      let customText = sanitizeButtonText(customButtonProps.text, buttonName);
      (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = customText);
      buttonHint = customButtonProps.hint || customText;
    } else if (viewSpec = viewSpecs[buttonName]) {
      viewsWithButtons.push(buttonName);
      buttonClick = () => {
        calendarApi.changeView(buttonName);
      };
      (buttonText = viewSpec.buttonTextOverride) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = viewSpec.buttonTextDefault);
      let textFallback = viewSpec.buttonTextOverride || viewSpec.buttonTextDefault;
      buttonHint = formatWithOrdinals(
        viewSpec.buttonTitleOverride || viewSpec.buttonTitleDefault || calendarOptions.viewHint,
        [textFallback, buttonName],
        // view-name = buttonName
        textFallback
      );
    } else if (calendarApi[buttonName]) {
      buttonClick = () => {
        calendarApi[buttonName]();
      };
      (buttonText = calendarButtonTextOverrides[buttonName]) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = calendarButtonText[buttonName]);
      if (buttonName === "prevYear" || buttonName === "nextYear") {
        let prevOrNext = buttonName === "prevYear" ? "prev" : "next";
        buttonHint = formatWithOrdinals(calendarButtonHintOverrides[prevOrNext] || calendarButtonHints[prevOrNext], [
          calendarButtonText.year || "year",
          "year"
        ], calendarButtonText[buttonName]);
      } else {
        buttonHint = (navUnit) => formatWithOrdinals(calendarButtonHintOverrides[buttonName] || calendarButtonHints[buttonName], [
          calendarButtonText[navUnit] || navUnit,
          navUnit
        ], calendarButtonText[buttonName]);
      }
    }
    buttonText = sanitizeButtonText(buttonText, buttonName);
    return { buttonName, buttonClick, buttonIcon, buttonText, buttonHint };
  }));
  return { widgets, viewsWithButtons, hasTitle };
}
function sanitizeButtonText(buttonText, buttonName) {
  if (buttonText == null || typeof buttonText === "string") {
    return buttonText;
  }
  if (typeof buttonText === "number") {
    return String(buttonText);
  }
  warnOnce(`Button text must be a string (button '${buttonName}'). For custom button content, v7 supports the \`iconContent\` setting.`);
  return buttonName;
}
var ViewImpl = class {
  constructor(type, getCurrentData, dateEnv) {
    this.type = type;
    this.getCurrentData = getCurrentData;
    this.dateEnv = dateEnv;
  }
  get calendar() {
    return this.getCurrentData().calendarApi;
  }
  get title() {
    return this.getCurrentData().viewTitle;
  }
  get activeStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
  }
  get activeEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
  }
  get currentStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
  }
  get currentEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
  }
  getOption(name) {
    return this.getCurrentData().options[name];
  }
};
var eventSourceDef$2 = {
  ignoreRange: true,
  parseMeta(refined) {
    if (Array.isArray(refined.events)) {
      return refined.events;
    }
    return null;
  },
  fetch(arg, successCallback) {
    successCallback({
      rawEvents: arg.eventSource.meta
    });
  }
};
var arrayEventSourcePlugin = createPlugin({
  name: "array-event-source",
  eventSourceDefs: [eventSourceDef$2]
});
var eventSourceDef$1 = {
  parseMeta(refined) {
    if (typeof refined.events === "function") {
      return refined.events;
    }
    return null;
  },
  fetch(arg, successCallback, errorCallback) {
    const { dateEnv } = arg.context;
    const func = arg.eventSource.meta;
    unpromisify(func.bind(null, buildRangeApiWithTimeZone(arg.range, dateEnv)), (rawEvents) => successCallback({ rawEvents }), errorCallback);
  }
};
var funcEventSourcePlugin = createPlugin({
  name: "func-event-source",
  eventSourceDefs: [eventSourceDef$1]
});
var JSON_FEED_EVENT_SOURCE_REFINERS = {
  method: String,
  extraParams: identity,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
var eventSourceDef = {
  parseMeta(refined) {
    if (refined.url && (refined.format === "json" || !refined.format)) {
      return {
        url: refined.url,
        format: "json",
        method: (refined.method || "GET").toUpperCase(),
        extraParams: refined.extraParams,
        startParam: refined.startParam,
        endParam: refined.endParam,
        timeZoneParam: refined.timeZoneParam
      };
    }
    return null;
  },
  fetch(arg, successCallback, errorCallback) {
    const { meta } = arg.eventSource;
    const requestParams = buildRequestParams(meta, arg.range, arg.context);
    requestJson(meta.method, meta.url, requestParams).then(([rawEvents, response]) => {
      successCallback({ rawEvents, response });
    }, errorCallback);
  }
};
var jsonFeedEventSourcePlugin = createPlugin({
  name: "json-event-source",
  eventSourceRefiners: JSON_FEED_EVENT_SOURCE_REFINERS,
  eventSourceDefs: [eventSourceDef]
});
function buildRequestParams(meta, range, context) {
  let { dateEnv, options } = context;
  let startParam;
  let endParam;
  let timeZoneParam;
  let customRequestParams;
  let params = {};
  startParam = meta.startParam;
  if (startParam == null) {
    startParam = options.startParam;
  }
  endParam = meta.endParam;
  if (endParam == null) {
    endParam = options.endParam;
  }
  timeZoneParam = meta.timeZoneParam;
  if (timeZoneParam == null) {
    timeZoneParam = options.timeZoneParam;
  }
  if (typeof meta.extraParams === "function") {
    customRequestParams = meta.extraParams();
  } else {
    customRequestParams = meta.extraParams || {};
  }
  Object.assign(params, customRequestParams);
  params[startParam] = dateEnv.formatIso(range.start);
  params[endParam] = dateEnv.formatIso(range.end);
  if (dateEnv.timeZone !== "local") {
    params[timeZoneParam] = dateEnv.timeZone;
  }
  return params;
}
var SIMPLE_RECURRING_REFINERS = {
  daysOfWeek: identity,
  startTime: createDuration,
  endTime: createDuration,
  duration: createDuration,
  startRecur: identity,
  endRecur: identity
};
var recurring = {
  parse(refined, dateEnv) {
    if (refined.daysOfWeek || refined.startTime || refined.endTime || refined.startRecur || refined.endRecur) {
      let recurringData = {
        daysOfWeek: refined.daysOfWeek || null,
        startTime: refined.startTime || null,
        endTime: refined.endTime || null,
        startRecur: refined.startRecur ? dateEnv.createMarker(refined.startRecur) : null,
        endRecur: refined.endRecur ? dateEnv.createMarker(refined.endRecur) : null,
        dateEnv
      };
      let duration2;
      if (refined.duration) {
        duration2 = refined.duration;
      }
      if (!duration2 && refined.startTime && refined.endTime) {
        duration2 = subtractDurations(refined.endTime, refined.startTime);
      }
      return {
        allDayGuess: Boolean(!refined.startTime && !refined.endTime),
        duration: duration2,
        typeData: recurringData
        // doesn't need endTime anymore but oh well
      };
    }
    return null;
  },
  expand(typeData, framingRange, dateEnv) {
    let clippedFramingRange = intersectRanges(framingRange, { start: typeData.startRecur, end: typeData.endRecur });
    if (clippedFramingRange) {
      return expandRanges(typeData.daysOfWeek, typeData.startTime, typeData.dateEnv, dateEnv, clippedFramingRange);
    }
    return [];
  }
};
var simpleRecurringEventsPlugin = createPlugin({
  name: "simple-recurring-event",
  recurringTypes: [recurring],
  eventRefiners: SIMPLE_RECURRING_REFINERS
});
function expandRanges(daysOfWeek, startTime, eventDateEnv, calendarDateEnv, framingRange) {
  let dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
  let dayMarker = startOfDay(framingRange.start);
  let endMarker = framingRange.end;
  let instanceStarts = [];
  if (startTime) {
    if (startTime.milliseconds < 0) {
      endMarker = addDays(endMarker, 1);
    } else if (startTime.milliseconds >= 1e3 * 60 * 60 * 24) {
      dayMarker = addDays(dayMarker, -1);
    }
  }
  while (dayMarker < endMarker) {
    let instanceStart;
    if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
      if (startTime) {
        instanceStart = calendarDateEnv.add(dayMarker, startTime);
      } else {
        instanceStart = dayMarker;
      }
      instanceStarts.push(calendarDateEnv.createMarker(eventDateEnv.toDate(instanceStart)));
    }
    dayMarker = addDays(dayMarker, 1);
  }
  return instanceStarts;
}
var changeHandlerPlugin = createPlugin({
  name: "change-handler",
  optionChangeHandlers: {
    events(events, context) {
      handleEventSources([events], context);
    },
    eventSources: handleEventSources
  }
});
function handleEventSources(inputs, context) {
  let unfoundSources = hashValuesToArray(context.getCurrentData().eventSources);
  if (unfoundSources.length === 1 && inputs.length === 1 && Array.isArray(unfoundSources[0]._raw) && Array.isArray(inputs[0])) {
    context.dispatch({
      type: "RESET_RAW_EVENTS",
      sourceId: unfoundSources[0].sourceId,
      rawEvents: inputs[0]
    });
    return;
  }
  let newInputs = [];
  for (let input of inputs) {
    let inputFound = false;
    for (let i3 = 0; i3 < unfoundSources.length; i3 += 1) {
      if (unfoundSources[i3]._raw === input) {
        unfoundSources.splice(i3, 1);
        inputFound = true;
        break;
      }
    }
    if (!inputFound) {
      newInputs.push(input);
    }
  }
  for (let unfoundSource of unfoundSources) {
    context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: unfoundSource.sourceId
    });
  }
  for (let newInput of newInputs) {
    context.calendarApi.addEventSource(newInput);
  }
}
function handleDateProfile(dateProfile, context) {
  context.emitter.trigger("datesSet", Object.assign(Object.assign({}, buildRangeApiWithTimeZone(dateProfile.activeRange, context.dateEnv)), { view: context.viewApi }));
}
function handleEventStore(eventStore, context) {
  let { emitter } = context;
  if (emitter.hasHandlers("eventsSet")) {
    emitter.trigger("eventsSet", buildEventApis(eventStore, context));
  }
}
var globalPlugins = [
  arrayEventSourcePlugin,
  funcEventSourcePlugin,
  jsonFeedEventSourcePlugin,
  simpleRecurringEventsPlugin,
  changeHandlerPlugin,
  createPlugin({
    name: "misc",
    isLoadingFuncs: [
      (state) => computeEventSourcesLoading(state.eventSources)
    ],
    propSetHandlers: {
      dateProfile: handleDateProfile,
      eventStore: handleEventStore
    }
  })
];
var TaskRunner = class {
  constructor(runTaskOption, drainedOption) {
    this.runTaskOption = runTaskOption;
    this.drainedOption = drainedOption;
    this.queue = [];
    this.delayedRunner = new DelayedRunner(this.drain.bind(this));
  }
  request(task, delay) {
    this.queue.push(task);
    this.delayedRunner.request(delay);
  }
  pause(scope) {
    this.delayedRunner.pause(scope);
  }
  resume(scope, force) {
    this.delayedRunner.resume(scope, force);
  }
  drain() {
    let { queue } = this;
    while (queue.length) {
      let completedTasks = [];
      let task;
      while (task = queue.shift()) {
        this.runTask(task);
        completedTasks.push(task);
      }
      this.drained(completedTasks);
    }
  }
  runTask(task) {
    if (this.runTaskOption) {
      this.runTaskOption(task);
    }
  }
  drained(completedTasks) {
    if (this.drainedOption) {
      this.drainedOption(completedTasks);
    }
  }
};
function buildTitle(dateProfile, viewOptions, dateEnv) {
  let range;
  if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
    range = dateProfile.currentRange;
  } else {
    range = dateProfile.activeRange;
  }
  return dateEnv.formatRange(range.start, range.end, createFormatter(viewOptions.titleFormat || buildTitleFormat(dateProfile)), {
    isEndExclusive: dateProfile.isRangeAllDay,
    defaultSeparator: viewOptions.titleRangeSeparator
  });
}
function buildTitleFormat(dateProfile) {
  let { currentRangeUnit } = dateProfile;
  if (currentRangeUnit === "year") {
    return { year: "numeric" };
  }
  if (currentRangeUnit === "month") {
    return { year: "numeric", month: "long" };
  }
  let days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);
  if (days !== null && days > 1) {
    return { year: "numeric", month: "short", day: "numeric" };
  }
  return { year: "numeric", month: "long", day: "numeric" };
}
var CalendarNowManager = class {
  constructor() {
    this.resetListeners = /* @__PURE__ */ new Set();
  }
  handleInput(dateEnv, nowInput) {
    const oldDateEnv = this.dateEnv;
    if (dateEnv !== oldDateEnv) {
      if (typeof nowInput === "function") {
        this.nowFn = nowInput;
      } else if (!oldDateEnv) {
        this.nowAnchorDate = dateEnv.toDate(nowInput ? dateEnv.createMarker(nowInput) : dateEnv.createNowMarker());
        this.nowAnchorQueried = Date.now();
      }
      this.dateEnv = dateEnv;
      if (oldDateEnv) {
        for (const resetListener of this.resetListeners.values()) {
          resetListener();
        }
      }
    }
  }
  getDateMarker() {
    return this.nowAnchorDate ? this.dateEnv.timestampToMarker(this.nowAnchorDate.valueOf() + (Date.now() - this.nowAnchorQueried)) : this.dateEnv.createMarker(this.nowFn());
  }
  addResetListener(handler) {
    this.resetListeners.add(handler);
  }
  removeResetListener(handler) {
    this.resetListeners.delete(handler);
  }
};
var CalendarDataManager = class {
  constructor(props) {
    this.computeCurrentViewData = memoize(this._computeCurrentViewData);
    this.organizeRawLocales = memoize(organizeRawLocales);
    this.buildLocale = memoize(buildLocale);
    this.buildPluginHooks = buildBuildPluginHooks();
    this.buildDateEnv = memoize(buildDateEnv$1);
    this.buildTheme = memoize(buildTheme);
    this.parseToolbars = memoize(parseToolbars);
    this.buildViewSpecs = memoize(buildViewSpecs);
    this.buildDateProfileGenerator = memoizeObjArg(buildDateProfileGenerator);
    this.buildViewApi = memoize(buildViewApi);
    this.buildViewUiProps = memoizeObjArg(buildViewUiProps);
    this.buildEventUiBySource = memoize(buildEventUiBySource, isPropsEqual);
    this.buildEventUiBases = memoize(buildEventUiBases);
    this.parseContextBusinessHours = memoizeObjArg(parseContextBusinessHours);
    this.buildTitle = memoize(buildTitle);
    this.nowManager = new CalendarNowManager();
    this.emitter = new Emitter();
    this.actionRunner = new TaskRunner(this._handleAction.bind(this), this.updateData.bind(this));
    this.currentCalendarOptionsInput = {};
    this.currentCalendarOptionsRefined = {};
    this.currentViewOptionsInput = {};
    this.currentViewOptionsRefined = {};
    this.currentCalendarOptionsRefiners = {};
    this.optionsForRefining = [];
    this.optionsForHandling = [];
    this.getCurrentData = () => this.data;
    this.dispatch = (action) => {
      this.actionRunner.request(action);
    };
    this.props = props;
    this.actionRunner.pause();
    this.nowManager = new CalendarNowManager();
    let dynamicOptionOverrides = {};
    let optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
    let currentViewType = optionsData.calendarOptions.initialView || optionsData.pluginHooks.initialView;
    let currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
    props.calendarApi.currentDataManager = this;
    this.emitter.setThisContext(props.calendarApi);
    this.emitter.setOptions(currentViewData.options);
    let calendarContext = {
      nowManager: this.nowManager,
      dateEnv: optionsData.dateEnv,
      options: optionsData.calendarOptions,
      pluginHooks: optionsData.pluginHooks,
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    };
    let currentDate = getInitialDate(optionsData.calendarOptions, optionsData.dateEnv, this.nowManager);
    let dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
    if (!rangeContainsMarker(dateProfile.activeRange, currentDate)) {
      currentDate = dateProfile.currentRange.start;
    }
    for (let callback of optionsData.pluginHooks.contextInit) {
      callback(calendarContext);
    }
    let eventSources = initEventSources(optionsData.calendarOptions, dateProfile, calendarContext);
    let initialState = {
      dynamicOptionOverrides,
      currentViewType,
      currentDate,
      dateProfile,
      businessHours: this.parseContextBusinessHours(calendarContext),
      eventSources,
      eventUiBases: {},
      eventStore: createEmptyEventStore(),
      renderableEventStore: createEmptyEventStore(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(calendarContext).selectionConfig
    };
    let contextAndState = Object.assign(Object.assign({}, calendarContext), initialState);
    for (let reducer of optionsData.pluginHooks.reducers) {
      Object.assign(initialState, reducer(null, null, contextAndState));
    }
    if (computeIsLoading(initialState, calendarContext)) {
      this.emitter.trigger("loading", true);
    }
    this.state = initialState;
    this.updateData();
    this.actionRunner.resume();
  }
  resetOptions(optionOverrides, changedOptionNames) {
    let { props } = this;
    if (changedOptionNames === void 0) {
      props.optionOverrides = optionOverrides;
    } else {
      props.optionOverrides = Object.assign(Object.assign({}, props.optionOverrides || {}), optionOverrides);
      this.optionsForRefining.push(...changedOptionNames);
    }
    if (changedOptionNames === void 0 || changedOptionNames.length) {
      this.actionRunner.request({
        type: "NOTHING"
      });
    }
  }
  _handleAction(action) {
    let { props, state, emitter } = this;
    let dynamicOptionOverrides = reduceDynamicOptionOverrides(state.dynamicOptionOverrides, action);
    let optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
    let currentViewType = reduceViewType(state.currentViewType, action);
    let currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
    props.calendarApi.currentDataManager = this;
    emitter.setThisContext(props.calendarApi);
    emitter.setOptions(currentViewData.options);
    let calendarContext = {
      nowManager: this.nowManager,
      dateEnv: optionsData.dateEnv,
      options: optionsData.calendarOptions,
      pluginHooks: optionsData.pluginHooks,
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter,
      getCurrentData: this.getCurrentData
    };
    let { currentDate, dateProfile } = state;
    if (this.data && this.data.dateProfileGenerator !== currentViewData.dateProfileGenerator) {
      dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
    }
    currentDate = reduceCurrentDate(currentDate, action);
    dateProfile = reduceDateProfile(dateProfile, action, currentDate, currentViewData.dateProfileGenerator);
    if (action.type === "PREV" || // TODO: move this logic into DateProfileGenerator
    action.type === "NEXT" || // "
    !rangeContainsMarker(dateProfile.currentRange, currentDate)) {
      currentDate = dateProfile.currentRange.start;
    }
    let eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendarContext);
    let eventStore = reduceEventStore(state.eventStore, action, eventSources, dateProfile, calendarContext);
    let isEventsLoading = computeEventSourcesLoading(eventSources);
    let renderableEventStore = isEventsLoading && !currentViewData.options.progressiveEventRendering ? state.renderableEventStore || eventStore : (
      // try from previous state
      eventStore
    );
    let { eventUiSingleBase, selectionConfig } = this.buildViewUiProps(calendarContext);
    let eventUiBySource = this.buildEventUiBySource(eventSources);
    let eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
    let newState = {
      dynamicOptionOverrides,
      currentViewType,
      currentDate,
      dateProfile,
      eventSources,
      eventStore,
      renderableEventStore,
      selectionConfig,
      eventUiBases,
      businessHours: this.parseContextBusinessHours(calendarContext),
      dateSelection: reduceDateSelection(state.dateSelection, action),
      eventSelection: reduceSelectedEvent(state.eventSelection, action),
      eventDrag: reduceEventDrag(state.eventDrag, action),
      eventResize: reduceEventResize(state.eventResize, action)
    };
    let contextAndState = Object.assign(Object.assign({}, calendarContext), newState);
    for (let reducer of optionsData.pluginHooks.reducers) {
      Object.assign(newState, reducer(state, action, contextAndState));
    }
    let wasLoading = computeIsLoading(state, calendarContext);
    let isLoading = computeIsLoading(newState, calendarContext);
    if (!wasLoading && isLoading) {
      emitter.trigger("loading", true);
    } else if (wasLoading && !isLoading) {
      emitter.trigger("loading", false);
    }
    this.state = newState;
    if (props.onAction) {
      props.onAction(action);
    }
  }
  updateData() {
    let { props, state } = this;
    let oldData = this.data;
    let optionsData = this.computeOptionsData(props.optionOverrides, state.dynamicOptionOverrides, props.calendarApi);
    let currentViewData = this.computeCurrentViewData(state.currentViewType, optionsData, props.optionOverrides, state.dynamicOptionOverrides);
    let data2 = this.data = Object.assign(Object.assign(Object.assign({ nowManager: this.nowManager, viewTitle: this.buildTitle(state.dateProfile, currentViewData.options, optionsData.dateEnv), calendarApi: props.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, optionsData), currentViewData), state);
    let changeHandlers = optionsData.pluginHooks.optionChangeHandlers;
    let oldCalendarOptions = oldData && oldData.calendarOptions;
    let newCalendarOptions = optionsData.calendarOptions;
    if (oldCalendarOptions && oldCalendarOptions !== newCalendarOptions) {
      if (oldCalendarOptions.timeZone !== newCalendarOptions.timeZone) {
        state.eventSources = data2.eventSources = reduceEventSourcesNewTimeZone(data2.eventSources, state.dateProfile, data2);
        state.eventStore = data2.eventStore = rezoneEventStoreDates(data2.eventStore, oldData.dateEnv, data2.dateEnv);
        state.renderableEventStore = data2.renderableEventStore = rezoneEventStoreDates(data2.renderableEventStore, oldData.dateEnv, data2.dateEnv);
      }
      for (let optionName in changeHandlers) {
        if (this.optionsForHandling.indexOf(optionName) !== -1 || oldCalendarOptions[optionName] !== newCalendarOptions[optionName]) {
          changeHandlers[optionName](newCalendarOptions[optionName], data2);
        }
      }
    }
    this.optionsForHandling = [];
    if (props.onData) {
      props.onData(data2);
    }
  }
  computeOptionsData(optionOverrides, dynamicOptionOverrides, calendarApi) {
    if (!this.optionsForRefining.length && optionOverrides === this.stableOptionOverrides && dynamicOptionOverrides === this.stableDynamicOptionOverrides) {
      return this.stableCalendarOptionsData;
    }
    let { refinedOptions, pluginHooks, localeDefaults, availableLocaleData, extra } = this.processRawCalendarOptions(optionOverrides, dynamicOptionOverrides);
    warnUnknownOptions(extra);
    let dateEnv = this.buildDateEnv(refinedOptions.timeZone, refinedOptions.locale, refinedOptions.weekNumberCalculation, refinedOptions.firstDay, refinedOptions.weekText, pluginHooks, availableLocaleData, refinedOptions.defaultRangeSeparator);
    let viewSpecs = this.buildViewSpecs(pluginHooks.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, localeDefaults);
    let theme = this.buildTheme(refinedOptions, pluginHooks);
    let toolbarConfig = this.parseToolbars(refinedOptions, this.stableOptionOverrides, theme, viewSpecs, calendarApi);
    return this.stableCalendarOptionsData = {
      calendarOptions: refinedOptions,
      pluginHooks,
      dateEnv,
      viewSpecs,
      theme,
      toolbarConfig,
      localeDefaults,
      availableRawLocales: availableLocaleData.map
    };
  }
  // always called from behind a memoizer
  processRawCalendarOptions(optionOverrides, dynamicOptionOverrides) {
    let { locales, locale } = mergeRawOptions([
      BASE_OPTION_DEFAULTS,
      optionOverrides,
      dynamicOptionOverrides
    ]);
    let availableLocaleData = this.organizeRawLocales(locales);
    let availableRawLocales = availableLocaleData.map;
    let localeDefaults = this.buildLocale(locale || availableLocaleData.defaultCode, availableRawLocales).options;
    let pluginHooks = this.buildPluginHooks(optionOverrides.plugins || [], globalPlugins);
    let refiners = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
    let extra = {};
    let raw = mergeRawOptions([
      BASE_OPTION_DEFAULTS,
      localeDefaults,
      optionOverrides,
      dynamicOptionOverrides
    ]);
    let refined = {};
    let currentRaw = this.currentCalendarOptionsInput;
    let currentRefined = this.currentCalendarOptionsRefined;
    let anyChanges = false;
    for (let optionName in raw) {
      if (this.optionsForRefining.indexOf(optionName) === -1 && (raw[optionName] === currentRaw[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && optionName in currentRaw && COMPLEX_OPTION_COMPARATORS[optionName](currentRaw[optionName], raw[optionName]))) {
        refined[optionName] = currentRefined[optionName];
      } else if (refiners[optionName]) {
        refined[optionName] = refiners[optionName](raw[optionName]);
        anyChanges = true;
      } else {
        extra[optionName] = currentRaw[optionName];
      }
    }
    if (anyChanges) {
      this.currentCalendarOptionsInput = raw;
      this.currentCalendarOptionsRefined = refined;
      this.stableOptionOverrides = optionOverrides;
      this.stableDynamicOptionOverrides = dynamicOptionOverrides;
    }
    this.optionsForHandling.push(...this.optionsForRefining);
    this.optionsForRefining = [];
    return {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks,
      availableLocaleData,
      localeDefaults,
      extra
    };
  }
  _computeCurrentViewData(viewType, optionsData, optionOverrides, dynamicOptionOverrides) {
    let viewSpec = optionsData.viewSpecs[viewType];
    if (!viewSpec) {
      throw new Error(`viewType "${viewType}" is not available. Please make sure you've loaded all neccessary plugins`);
    }
    let { refinedOptions, extra } = this.processRawViewOptions(viewSpec, optionsData.pluginHooks, optionsData.localeDefaults, optionOverrides, dynamicOptionOverrides);
    warnUnknownOptions(extra);
    this.nowManager.handleInput(optionsData.dateEnv, refinedOptions.now);
    let dateProfileGenerator = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: viewSpec.optionDefaults.dateProfileGeneratorClass,
      nowManager: this.nowManager,
      duration: viewSpec.duration,
      durationUnit: viewSpec.durationUnit,
      usesMinMaxTime: viewSpec.optionDefaults.usesMinMaxTime,
      dateEnv: optionsData.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: refinedOptions.slotMinTime,
      slotMaxTime: refinedOptions.slotMaxTime,
      showNonCurrentDates: refinedOptions.showNonCurrentDates,
      dayCount: refinedOptions.dayCount,
      dateAlignment: refinedOptions.dateAlignment,
      dateIncrement: refinedOptions.dateIncrement,
      hiddenDays: refinedOptions.hiddenDays,
      weekends: refinedOptions.weekends,
      validRangeInput: refinedOptions.validRange,
      visibleRangeInput: refinedOptions.visibleRange,
      fixedWeekCount: refinedOptions.fixedWeekCount
    });
    let viewApi = this.buildViewApi(viewType, this.getCurrentData, optionsData.dateEnv);
    return { viewSpec, options: refinedOptions, dateProfileGenerator, viewApi };
  }
  processRawViewOptions(viewSpec, pluginHooks, localeDefaults, optionOverrides, dynamicOptionOverrides) {
    let raw = mergeRawOptions([
      BASE_OPTION_DEFAULTS,
      viewSpec.optionDefaults,
      localeDefaults,
      optionOverrides,
      viewSpec.optionOverrides,
      dynamicOptionOverrides
    ]);
    let refiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), VIEW_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
    let refined = {};
    let currentRaw = this.currentViewOptionsInput;
    let currentRefined = this.currentViewOptionsRefined;
    let anyChanges = false;
    let extra = {};
    for (let optionName in raw) {
      if (raw[optionName] === currentRaw[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && COMPLEX_OPTION_COMPARATORS[optionName](raw[optionName], currentRaw[optionName])) {
        refined[optionName] = currentRefined[optionName];
      } else {
        if (raw[optionName] === this.currentCalendarOptionsInput[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && COMPLEX_OPTION_COMPARATORS[optionName](raw[optionName], this.currentCalendarOptionsInput[optionName])) {
          if (optionName in this.currentCalendarOptionsRefined) {
            refined[optionName] = this.currentCalendarOptionsRefined[optionName];
          }
        } else if (refiners[optionName]) {
          refined[optionName] = refiners[optionName](raw[optionName]);
        } else {
          extra[optionName] = raw[optionName];
        }
        anyChanges = true;
      }
    }
    if (anyChanges) {
      this.currentViewOptionsInput = raw;
      this.currentViewOptionsRefined = refined;
    }
    return {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra
    };
  }
};
function buildDateEnv$1(timeZone, explicitLocale, weekNumberCalculation, firstDay, weekText, pluginHooks, availableLocaleData, defaultSeparator) {
  let locale = buildLocale(explicitLocale || availableLocaleData.defaultCode, availableLocaleData.map);
  return new DateEnv({
    calendarSystem: "gregory",
    timeZone,
    namedTimeZoneImpl: pluginHooks.namedTimeZonedImpl,
    locale,
    weekNumberCalculation,
    firstDay,
    weekText,
    cmdFormatter: pluginHooks.cmdFormatter,
    defaultSeparator
  });
}
function buildTheme(options, pluginHooks) {
  let ThemeClass = pluginHooks.themeClasses[options.themeSystem] || StandardTheme;
  return new ThemeClass(options);
}
function buildDateProfileGenerator(props) {
  let DateProfileGeneratorClass = props.dateProfileGeneratorClass || DateProfileGenerator;
  return new DateProfileGeneratorClass(props);
}
function buildViewApi(type, getCurrentData, dateEnv) {
  return new ViewImpl(type, getCurrentData, dateEnv);
}
function buildEventUiBySource(eventSources) {
  return mapHash(eventSources, (eventSource) => eventSource.ui);
}
function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
  let eventUiBases = { "": eventUiSingleBase };
  for (let defId in eventDefs) {
    let def = eventDefs[defId];
    if (def.sourceId && eventUiBySource[def.sourceId]) {
      eventUiBases[defId] = eventUiBySource[def.sourceId];
    }
  }
  return eventUiBases;
}
function buildViewUiProps(calendarContext) {
  let { options } = calendarContext;
  return {
    eventUiSingleBase: createEventUi({
      display: options.eventDisplay,
      editable: options.editable,
      startEditable: options.eventStartEditable,
      durationEditable: options.eventDurationEditable,
      constraint: options.eventConstraint,
      overlap: typeof options.eventOverlap === "boolean" ? options.eventOverlap : void 0,
      allow: options.eventAllow,
      backgroundColor: options.eventBackgroundColor,
      borderColor: options.eventBorderColor,
      textColor: options.eventTextColor,
      color: options.eventColor
      // classNames: options.eventClassNames // render hook will handle this
    }, calendarContext),
    selectionConfig: createEventUi({
      constraint: options.selectConstraint,
      overlap: typeof options.selectOverlap === "boolean" ? options.selectOverlap : void 0,
      allow: options.selectAllow
    }, calendarContext)
  };
}
function computeIsLoading(state, context) {
  for (let isLoadingFunc of context.pluginHooks.isLoadingFuncs) {
    if (isLoadingFunc(state)) {
      return true;
    }
  }
  return false;
}
function parseContextBusinessHours(calendarContext) {
  return parseBusinessHours(calendarContext.options.businessHours, calendarContext);
}
function warnUnknownOptions(options, viewName) {
  for (let optionName in options) {
    console.warn(`Unknown option '${optionName}'` + (viewName ? ` for view '${viewName}'` : ""));
  }
}
var ToolbarSection = class extends BaseComponent {
  render() {
    let children = this.props.widgetGroups.map((widgetGroup) => this.renderWidgetGroup(widgetGroup));
    return y("div", { className: "fc-toolbar-chunk" }, ...children);
  }
  renderWidgetGroup(widgetGroup) {
    let { props } = this;
    let { theme } = this.context;
    let children = [];
    let isOnlyButtons = true;
    for (let widget of widgetGroup) {
      let { buttonName, buttonClick, buttonText, buttonIcon, buttonHint } = widget;
      if (buttonName === "title") {
        isOnlyButtons = false;
        children.push(y("h2", { className: "fc-toolbar-title", id: props.titleId }, props.title));
      } else {
        let isPressed = buttonName === props.activeButton;
        let isDisabled = !props.isTodayEnabled && buttonName === "today" || !props.isPrevEnabled && buttonName === "prev" || !props.isNextEnabled && buttonName === "next";
        let buttonClasses = [`fc-${buttonName}-button`, theme.getClass("button")];
        if (isPressed) {
          buttonClasses.push(theme.getClass("buttonActive"));
        }
        children.push(y("button", { type: "button", title: typeof buttonHint === "function" ? buttonHint(props.navUnit) : buttonHint, disabled: isDisabled, "aria-pressed": isPressed, className: buttonClasses.join(" "), onClick: buttonClick }, buttonText || (buttonIcon ? y("span", { className: buttonIcon, role: "img" }) : "")));
      }
    }
    if (children.length > 1) {
      let groupClassName = isOnlyButtons && theme.getClass("buttonGroup") || "";
      return y("div", { className: groupClassName }, ...children);
    }
    return children[0];
  }
};
var Toolbar = class extends BaseComponent {
  render() {
    let { model, extraClassName } = this.props;
    let forceLtr = false;
    let startContent;
    let endContent;
    let sectionWidgets = model.sectionWidgets;
    let centerContent = sectionWidgets.center;
    if (sectionWidgets.left) {
      forceLtr = true;
      startContent = sectionWidgets.left;
    } else {
      startContent = sectionWidgets.start;
    }
    if (sectionWidgets.right) {
      forceLtr = true;
      endContent = sectionWidgets.right;
    } else {
      endContent = sectionWidgets.end;
    }
    let classNames = [
      extraClassName || "",
      "fc-toolbar",
      forceLtr ? "fc-toolbar-ltr" : ""
    ];
    return y(
      "div",
      { className: classNames.join(" ") },
      this.renderSection("start", startContent || []),
      this.renderSection("center", centerContent || []),
      this.renderSection("end", endContent || [])
    );
  }
  renderSection(key, widgetGroups) {
    let { props } = this;
    return y(ToolbarSection, { key, widgetGroups, title: props.title, navUnit: props.navUnit, activeButton: props.activeButton, isTodayEnabled: props.isTodayEnabled, isPrevEnabled: props.isPrevEnabled, isNextEnabled: props.isNextEnabled, titleId: props.titleId });
  }
};
var ViewHarness = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.state = {
      availableWidth: null
    };
    this.handleEl = (el) => {
      this.el = el;
      setRef(this.props.elRef, el);
      this.updateAvailableWidth();
    };
    this.handleResize = () => {
      this.updateAvailableWidth();
    };
  }
  render() {
    let { props, state } = this;
    let { aspectRatio } = props;
    let classNames = [
      "fc-view-harness",
      aspectRatio || props.liquid || props.height ? "fc-view-harness-active" : "fc-view-harness-passive"
      // let the view do the height
    ];
    let height = "";
    let paddingBottom = "";
    if (aspectRatio) {
      if (state.availableWidth !== null) {
        height = state.availableWidth / aspectRatio;
      } else {
        paddingBottom = `${1 / aspectRatio * 100}%`;
      }
    } else {
      height = props.height || "";
    }
    return y("div", { "aria-labelledby": props.labeledById, ref: this.handleEl, className: classNames.join(" "), style: { height, paddingBottom } }, props.children);
  }
  componentDidMount() {
    this.context.addResizeHandler(this.handleResize);
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  updateAvailableWidth() {
    if (this.el && // needed. but why?
    this.props.aspectRatio) {
      this.setState({ availableWidth: this.el.offsetWidth });
    }
  }
};
var EventClicking = class extends Interaction {
  constructor(settings) {
    super(settings);
    this.handleSegClick = (ev, segEl) => {
      let { component } = this;
      let { context } = component;
      let seg = getElSeg(segEl);
      if (seg && // might be the <div> surrounding the more link
      component.isValidSegDownEl(ev.target)) {
        let hasUrlContainer = elementClosest(ev.target, ".fc-event-forced-url");
        let url = "";
        if (hasUrlContainer) {
          let anchorEl = hasUrlContainer.querySelector("a[href]");
          url = anchorEl ? anchorEl.href : seg.eventRange.def.url;
        }
        context.emitter.trigger("eventClick", {
          el: segEl,
          event: new EventImpl(component.context, seg.eventRange.def, seg.eventRange.instance),
          jsEvent: ev,
          view: context.viewApi
        });
        if (url && !ev.defaultPrevented) {
          window.location.href = url;
        }
      }
    };
    this.destroy = listenBySelector(
      settings.el,
      "click",
      ".fc-event",
      // on both fg and bg events
      this.handleSegClick
    );
  }
};
var EventHovering = class extends Interaction {
  constructor(settings) {
    super(settings);
    this.handleEventElRemove = (el) => {
      if (el === this.currentSegEl) {
        this.handleSegLeave(null, this.currentSegEl);
      }
    };
    this.handleSegEnter = (ev, segEl) => {
      if (getElSeg(segEl)) {
        this.currentSegEl = segEl;
        this.triggerEvent("eventMouseEnter", ev, segEl);
      }
    };
    this.handleSegLeave = (ev, segEl) => {
      if (this.currentSegEl) {
        this.currentSegEl = null;
        this.triggerEvent("eventMouseLeave", ev, segEl);
      }
    };
    this.removeHoverListeners = listenToHoverBySelector(
      settings.el,
      ".fc-event",
      // on both fg and bg events
      this.handleSegEnter,
      this.handleSegLeave
    );
  }
  destroy() {
    this.removeHoverListeners();
  }
  triggerEvent(publicEvName, ev, segEl) {
    let { component } = this;
    let { context } = component;
    let seg = getElSeg(segEl);
    if (!ev || component.isValidSegDownEl(ev.target)) {
      context.emitter.trigger(publicEvName, {
        el: segEl,
        event: new EventImpl(context, seg.eventRange.def, seg.eventRange.instance),
        jsEvent: ev,
        view: context.viewApi
      });
    }
  }
};
var CalendarContent = class extends PureComponent {
  constructor() {
    super(...arguments);
    this.buildViewContext = memoize(buildViewContext);
    this.buildViewPropTransformers = memoize(buildViewPropTransformers);
    this.buildToolbarProps = memoize(buildToolbarProps);
    this.headerRef = d();
    this.footerRef = d();
    this.interactionsStore = {};
    this.state = {
      viewLabelId: getUniqueDomId()
    };
    this.registerInteractiveComponent = (component, settingsInput) => {
      let settings = parseInteractionSettings(component, settingsInput);
      let DEFAULT_INTERACTIONS = [
        EventClicking,
        EventHovering
      ];
      let interactionClasses = DEFAULT_INTERACTIONS.concat(this.props.pluginHooks.componentInteractions);
      let interactions = interactionClasses.map((TheInteractionClass) => new TheInteractionClass(settings));
      this.interactionsStore[component.uid] = interactions;
      interactionSettingsStore[component.uid] = settings;
    };
    this.unregisterInteractiveComponent = (component) => {
      let listeners = this.interactionsStore[component.uid];
      if (listeners) {
        for (let listener of listeners) {
          listener.destroy();
        }
        delete this.interactionsStore[component.uid];
      }
      delete interactionSettingsStore[component.uid];
    };
    this.resizeRunner = new DelayedRunner(() => {
      this.props.emitter.trigger("_resize", true);
      this.props.emitter.trigger("windowResize", { view: this.props.viewApi });
    });
    this.handleWindowResize = (ev) => {
      let { options } = this.props;
      if (options.handleWindowResize && ev.target === window) {
        this.resizeRunner.request(options.windowResizeDelay);
      }
    };
  }
  /*
  renders INSIDE of an outer div
  */
  render() {
    let { props } = this;
    let { toolbarConfig, options } = props;
    let viewVGrow = false;
    let viewHeight = "";
    let viewAspectRatio;
    if (props.isHeightAuto || props.forPrint) {
      viewHeight = "";
    } else if (options.height != null) {
      viewVGrow = true;
    } else if (options.contentHeight != null) {
      viewHeight = options.contentHeight;
    } else {
      viewAspectRatio = Math.max(options.aspectRatio, 0.5);
    }
    let viewContext = this.buildViewContext(props.viewSpec, props.viewApi, props.options, props.dateProfileGenerator, props.dateEnv, props.nowManager, props.theme, props.pluginHooks, props.dispatch, props.getCurrentData, props.emitter, props.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
    let viewLabelId = toolbarConfig.header && toolbarConfig.header.hasTitle ? this.state.viewLabelId : void 0;
    return y(
      ViewContextType.Provider,
      { value: viewContext },
      y(NowTimer, { unit: "day" }, (nowDate) => {
        let toolbarProps = this.buildToolbarProps(props.viewSpec, props.dateProfile, props.dateProfileGenerator, props.currentDate, nowDate, props.viewTitle);
        return y(
          _,
          null,
          toolbarConfig.header && y(Toolbar, Object.assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: toolbarConfig.header, titleId: viewLabelId }, toolbarProps)),
          y(
            ViewHarness,
            { liquid: viewVGrow, height: viewHeight, aspectRatio: viewAspectRatio, labeledById: viewLabelId },
            this.renderView(props),
            this.buildAppendContent()
          ),
          toolbarConfig.footer && y(Toolbar, Object.assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: toolbarConfig.footer, titleId: "" }, toolbarProps))
        );
      })
    );
  }
  componentDidMount() {
    let { props } = this;
    this.calendarInteractions = props.pluginHooks.calendarInteractions.map((CalendarInteractionClass) => new CalendarInteractionClass(props));
    window.addEventListener("resize", this.handleWindowResize);
    let { propSetHandlers } = props.pluginHooks;
    for (let propName in propSetHandlers) {
      propSetHandlers[propName](props[propName], props);
    }
  }
  componentDidUpdate(prevProps) {
    let { props } = this;
    let { propSetHandlers } = props.pluginHooks;
    for (let propName in propSetHandlers) {
      if (props[propName] !== prevProps[propName]) {
        propSetHandlers[propName](props[propName], props);
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    this.resizeRunner.clear();
    for (let interaction of this.calendarInteractions) {
      interaction.destroy();
    }
    this.props.emitter.trigger("_unmount");
  }
  buildAppendContent() {
    let { props } = this;
    let children = props.pluginHooks.viewContainerAppends.map((buildAppendContent) => buildAppendContent(props));
    return y(_, {}, ...children);
  }
  renderView(props) {
    let { pluginHooks } = props;
    let { viewSpec } = props;
    let viewProps = {
      dateProfile: props.dateProfile,
      businessHours: props.businessHours,
      eventStore: props.renderableEventStore,
      eventUiBases: props.eventUiBases,
      dateSelection: props.dateSelection,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      isHeightAuto: props.isHeightAuto,
      forPrint: props.forPrint
    };
    let transformers = this.buildViewPropTransformers(pluginHooks.viewPropsTransformers);
    for (let transformer of transformers) {
      Object.assign(viewProps, transformer.transform(viewProps, props));
    }
    let ViewComponent = viewSpec.component;
    return y(ViewComponent, Object.assign({}, viewProps));
  }
};
function buildToolbarProps(viewSpec, dateProfile, dateProfileGenerator, currentDate, now, title) {
  let todayInfo = dateProfileGenerator.build(now, void 0, false);
  let prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate, false);
  let nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate, false);
  return {
    title,
    activeButton: viewSpec.type,
    navUnit: viewSpec.singleUnit,
    isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, now),
    isPrevEnabled: prevInfo.isValid,
    isNextEnabled: nextInfo.isValid
  };
}
function buildViewPropTransformers(theClasses) {
  return theClasses.map((TheClass) => new TheClass());
}
var Calendar = class extends CalendarImpl {
  constructor(el, optionOverrides = {}) {
    super();
    this.isRendering = false;
    this.isRendered = false;
    this.currentClassNames = [];
    this.customContentRenderId = 0;
    this.handleAction = (action) => {
      switch (action.type) {
        case "SET_EVENT_DRAG":
        case "SET_EVENT_RESIZE":
          this.renderRunner.tryDrain();
      }
    };
    this.handleData = (data2) => {
      this.currentData = data2;
      this.renderRunner.request(data2.calendarOptions.rerenderDelay);
    };
    this.handleRenderRequest = () => {
      if (this.isRendering) {
        this.isRendered = true;
        let { currentData } = this;
        flushSync(() => {
          D(y(CalendarRoot, { options: currentData.calendarOptions, theme: currentData.theme, emitter: currentData.emitter }, (classNames, height, isHeightAuto, forPrint) => {
            this.setClassNames(classNames);
            this.setHeight(height);
            return y(
              RenderId.Provider,
              { value: this.customContentRenderId },
              y(CalendarContent, Object.assign({ isHeightAuto, forPrint }, currentData))
            );
          }), this.el);
        });
      } else if (this.isRendered) {
        this.isRendered = false;
        D(null, this.el);
        this.setClassNames([]);
        this.setHeight("");
      }
    };
    ensureElHasStyles(el);
    this.el = el;
    this.renderRunner = new DelayedRunner(this.handleRenderRequest);
    new CalendarDataManager({
      optionOverrides,
      calendarApi: this,
      onAction: this.handleAction,
      onData: this.handleData
    });
  }
  render() {
    let wasRendering = this.isRendering;
    if (!wasRendering) {
      this.isRendering = true;
    } else {
      this.customContentRenderId += 1;
    }
    this.renderRunner.request();
    if (wasRendering) {
      this.updateSize();
    }
  }
  destroy() {
    if (this.isRendering) {
      this.isRendering = false;
      this.renderRunner.request();
    }
  }
  updateSize() {
    flushSync(() => {
      super.updateSize();
    });
  }
  batchRendering(func) {
    this.renderRunner.pause("batchRendering");
    func();
    this.renderRunner.resume("batchRendering");
  }
  pauseRendering() {
    this.renderRunner.pause("pauseRendering");
  }
  resumeRendering() {
    this.renderRunner.resume("pauseRendering", true);
  }
  resetOptions(optionOverrides, changedOptionNames) {
    this.currentDataManager.resetOptions(optionOverrides, changedOptionNames);
  }
  setClassNames(classNames) {
    if (!isArraysEqual(classNames, this.currentClassNames)) {
      let { classList } = this.el;
      for (let className of this.currentClassNames) {
        classList.remove(className);
      }
      for (let className of classNames) {
        classList.add(className);
      }
      this.currentClassNames = classNames;
    }
  }
  setHeight(height) {
    applyStyleProp(this.el, "height", height);
  }
};

// node_modules/@fullcalendar/daygrid/internal.js
var TableView = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.headerElRef = d();
  }
  renderSimpleLayout(headerRowContent, bodyContent) {
    let { props, context } = this;
    let sections = [];
    let stickyHeaderDates = getStickyHeaderDates(context.options);
    if (headerRowContent) {
      sections.push({
        type: "header",
        key: "header",
        isSticky: stickyHeaderDates,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: headerRowContent
        }
      });
    }
    sections.push({
      type: "body",
      key: "body",
      liquid: true,
      chunk: { content: bodyContent }
    });
    return y(
      ViewContainer,
      { elClasses: ["fc-daygrid"], viewSpec: context.viewSpec },
      y(SimpleScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [], sections })
    );
  }
  renderHScrollLayout(headerRowContent, bodyContent, colCnt, dayMinWidth) {
    let ScrollGrid = this.context.pluginHooks.scrollGridImpl;
    if (!ScrollGrid) {
      throw new Error("No ScrollGrid implementation");
    }
    let { props, context } = this;
    let stickyHeaderDates = !props.forPrint && getStickyHeaderDates(context.options);
    let stickyFooterScrollbar = !props.forPrint && getStickyFooterScrollbar(context.options);
    let sections = [];
    if (headerRowContent) {
      sections.push({
        type: "header",
        key: "header",
        isSticky: stickyHeaderDates,
        chunks: [{
          key: "main",
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: headerRowContent
        }]
      });
    }
    sections.push({
      type: "body",
      key: "body",
      liquid: true,
      chunks: [{
        key: "main",
        content: bodyContent
      }]
    });
    if (stickyFooterScrollbar) {
      sections.push({
        type: "footer",
        key: "footer",
        isSticky: true,
        chunks: [{
          key: "main",
          content: renderScrollShim
        }]
      });
    }
    return y(
      ViewContainer,
      { elClasses: ["fc-daygrid"], viewSpec: context.viewSpec },
      y(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, forPrint: props.forPrint, collapsibleWidth: props.forPrint, colGroups: [{ cols: [{ span: colCnt, minWidth: dayMinWidth }] }], sections })
    );
  }
};
function splitSegsByRow(segs, rowCnt) {
  let byRow = [];
  for (let i3 = 0; i3 < rowCnt; i3 += 1) {
    byRow[i3] = [];
  }
  for (let seg of segs) {
    byRow[seg.row].push(seg);
  }
  return byRow;
}
function splitSegsByFirstCol(segs, colCnt) {
  let byCol = [];
  for (let i3 = 0; i3 < colCnt; i3 += 1) {
    byCol[i3] = [];
  }
  for (let seg of segs) {
    byCol[seg.firstCol].push(seg);
  }
  return byCol;
}
function splitInteractionByRow(ui, rowCnt) {
  let byRow = [];
  if (!ui) {
    for (let i3 = 0; i3 < rowCnt; i3 += 1) {
      byRow[i3] = null;
    }
  } else {
    for (let i3 = 0; i3 < rowCnt; i3 += 1) {
      byRow[i3] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }
    for (let seg of ui.segs) {
      byRow[seg.row].segs.push(seg);
    }
  }
  return byRow;
}
var DEFAULT_TABLE_EVENT_TIME_FORMAT = createFormatter({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: true,
  meridiem: "narrow"
});
function hasListItemDisplay(seg) {
  let { display: display2 } = seg.eventRange.ui;
  return display2 === "list-item" || display2 === "auto" && !seg.eventRange.def.allDay && seg.firstCol === seg.lastCol && // can't be multi-day
  seg.isStart && // "
  seg.isEnd;
}
var TableBlockEvent = class extends BaseComponent {
  render() {
    let { props } = this;
    return y(StandardEvent, Object.assign({}, props, { elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT, defaultDisplayEventEnd: props.defaultDisplayEventEnd, disableResizing: !props.seg.eventRange.def.allDay }));
  }
};
var TableListItemEvent = class extends BaseComponent {
  render() {
    let { props, context } = this;
    let { options } = context;
    let { seg } = props;
    let timeFormat = options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
    let timeText = buildSegTimeText(seg, timeFormat, context, true, props.defaultDisplayEventEnd);
    return y(EventContainer, Object.assign({}, props, { elTag: "a", elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"], elAttrs: getSegAnchorAttrs(props.seg, context), defaultGenerator: renderInnerContent2, timeText, isResizing: false, isDateSelecting: false }));
  }
};
function renderInnerContent2(renderProps) {
  return y(
    _,
    null,
    y("div", { className: "fc-daygrid-event-dot", style: { borderColor: renderProps.borderColor || renderProps.backgroundColor } }),
    renderProps.timeText && y("div", { className: "fc-event-time" }, renderProps.timeText),
    y("div", { className: "fc-event-title" }, renderProps.event.title || y(_, null, "\xA0"))
  );
}
var TableCellMoreLink = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.compileSegs = memoize(compileSegs);
  }
  render() {
    let { props } = this;
    let { allSegs, invisibleSegs } = this.compileSegs(props.singlePlacements);
    return y(MoreLinkContainer, { elClasses: ["fc-daygrid-more-link"], dateProfile: props.dateProfile, todayRange: props.todayRange, allDayDate: props.allDayDate, moreCnt: props.moreCnt, allSegs, hiddenSegs: invisibleSegs, alignmentElRef: props.alignmentElRef, alignGridTop: props.alignGridTop, extraDateSpan: props.extraDateSpan, popoverContent: () => {
      let isForcedInvisible = (props.eventDrag ? props.eventDrag.affectedInstances : null) || (props.eventResize ? props.eventResize.affectedInstances : null) || {};
      return y(_, null, allSegs.map((seg) => {
        let instanceId = seg.eventRange.instance.instanceId;
        return y("div", { className: "fc-daygrid-event-harness", key: instanceId, style: {
          visibility: isForcedInvisible[instanceId] ? "hidden" : ""
        } }, hasListItemDisplay(seg) ? y(TableListItemEvent, Object.assign({ seg, isDragging: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, getSegMeta(seg, props.todayRange))) : y(TableBlockEvent, Object.assign({ seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, getSegMeta(seg, props.todayRange))));
      }));
    } });
  }
};
function compileSegs(singlePlacements) {
  let allSegs = [];
  let invisibleSegs = [];
  for (let placement of singlePlacements) {
    allSegs.push(placement.seg);
    if (!placement.isVisible) {
      invisibleSegs.push(placement.seg);
    }
  }
  return { allSegs, invisibleSegs };
}
var DEFAULT_WEEK_NUM_FORMAT = createFormatter({ week: "narrow" });
var TableCell = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.rootElRef = d();
    this.state = {
      dayNumberId: getUniqueDomId()
    };
    this.handleRootEl = (el) => {
      setRef(this.rootElRef, el);
      setRef(this.props.elRef, el);
    };
  }
  render() {
    let { context, props, state, rootElRef } = this;
    let { options, dateEnv } = context;
    let { date, dateProfile } = props;
    const isMonthStart = props.showDayNumber && shouldDisplayMonthStart(date, dateProfile.currentRange, dateEnv);
    return y(DayCellContainer, { elTag: "td", elRef: this.handleRootEl, elClasses: [
      "fc-daygrid-day",
      ...props.extraClassNames || []
    ], elAttrs: Object.assign(Object.assign(Object.assign({}, props.extraDataAttrs), props.showDayNumber ? { "aria-labelledby": state.dayNumberId } : {}), { role: "gridcell" }), defaultGenerator: renderTopInner, date, dateProfile, todayRange: props.todayRange, showDayNumber: props.showDayNumber, isMonthStart, extraRenderProps: props.extraRenderProps }, (InnerContent, renderProps) => y(
      "div",
      { ref: props.innerElRef, className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", style: { minHeight: props.minHeight } },
      props.showWeekNumber && y(WeekNumberContainer, { elTag: "a", elClasses: ["fc-daygrid-week-number"], elAttrs: buildNavLinkAttrs(context, date, "week"), date, defaultFormat: DEFAULT_WEEK_NUM_FORMAT }),
      !renderProps.isDisabled && (props.showDayNumber || hasCustomDayCellContent(options) || props.forceDayTop) ? y(
        "div",
        { className: "fc-daygrid-day-top" },
        y(InnerContent, { elTag: "a", elClasses: [
          "fc-daygrid-day-number",
          isMonthStart && "fc-daygrid-month-start"
        ], elAttrs: Object.assign(Object.assign({}, buildNavLinkAttrs(context, date)), { id: state.dayNumberId }) })
      ) : props.showDayNumber ? (
        // for creating correct amount of space (see issue #7162)
        y(
          "div",
          { className: "fc-daygrid-day-top", style: { visibility: "hidden" } },
          y("a", { className: "fc-daygrid-day-number" }, "\xA0")
        )
      ) : void 0,
      y(
        "div",
        { className: "fc-daygrid-day-events", ref: props.fgContentElRef },
        props.fgContent,
        y(
          "div",
          { className: "fc-daygrid-day-bottom", style: { marginTop: props.moreMarginTop } },
          y(TableCellMoreLink, { allDayDate: date, singlePlacements: props.singlePlacements, moreCnt: props.moreCnt, alignmentElRef: rootElRef, alignGridTop: !props.showDayNumber, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange })
        )
      ),
      y("div", { className: "fc-daygrid-day-bg" }, props.bgContent)
    ));
  }
};
function renderTopInner(props) {
  return props.dayNumberText || y(_, null, "\xA0");
}
function shouldDisplayMonthStart(date, currentRange, dateEnv) {
  const { start: currentStart, end: currentEnd } = currentRange;
  const currentEndIncl = addMs(currentEnd, -1);
  const currentFirstYear = dateEnv.getYear(currentStart);
  const currentFirstMonth = dateEnv.getMonth(currentStart);
  const currentLastYear = dateEnv.getYear(currentEndIncl);
  const currentLastMonth = dateEnv.getMonth(currentEndIncl);
  return !(currentFirstYear === currentLastYear && currentFirstMonth === currentLastMonth) && Boolean(
    // first date in current view?
    date.valueOf() === currentStart.valueOf() || // a month-start that's within the current range?
    dateEnv.getDay(date) === 1 && date.valueOf() < currentEnd.valueOf()
  );
}
function generateSegKey(seg) {
  return seg.eventRange.instance.instanceId + ":" + seg.firstCol;
}
function generateSegUid(seg) {
  return generateSegKey(seg) + ":" + seg.lastCol;
}
function computeFgSegPlacement(segs, dayMaxEvents, dayMaxEventRows, strictOrder, segHeights, maxContentHeight, cells) {
  let hierarchy = new DayGridSegHierarchy((segEntry) => {
    let segUid = segs[segEntry.index].eventRange.instance.instanceId + ":" + segEntry.span.start + ":" + (segEntry.span.end - 1);
    return segHeights[segUid] || 1;
  });
  hierarchy.allowReslicing = true;
  hierarchy.strictOrder = strictOrder;
  if (dayMaxEvents === true || dayMaxEventRows === true) {
    hierarchy.maxCoord = maxContentHeight;
    hierarchy.hiddenConsumes = true;
  } else if (typeof dayMaxEvents === "number") {
    hierarchy.maxStackCnt = dayMaxEvents;
  } else if (typeof dayMaxEventRows === "number") {
    hierarchy.maxStackCnt = dayMaxEventRows;
    hierarchy.hiddenConsumes = true;
  }
  let segInputs = [];
  let unknownHeightSegs = [];
  for (let i3 = 0; i3 < segs.length; i3 += 1) {
    let seg = segs[i3];
    let segUid = generateSegUid(seg);
    let eventHeight = segHeights[segUid];
    if (eventHeight != null) {
      segInputs.push({
        index: i3,
        span: {
          start: seg.firstCol,
          end: seg.lastCol + 1
        }
      });
    } else {
      unknownHeightSegs.push(seg);
    }
  }
  let hiddenEntries = hierarchy.addSegs(segInputs);
  let segRects = hierarchy.toRects();
  let { singleColPlacements, multiColPlacements, leftoverMargins } = placeRects(segRects, segs, cells);
  let moreCnts = [];
  let moreMarginTops = [];
  for (let seg of unknownHeightSegs) {
    multiColPlacements[seg.firstCol].push({
      seg,
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let col = seg.firstCol; col <= seg.lastCol; col += 1) {
      singleColPlacements[col].push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  }
  for (let col = 0; col < cells.length; col += 1) {
    moreCnts.push(0);
  }
  for (let hiddenEntry of hiddenEntries) {
    let seg = segs[hiddenEntry.index];
    let hiddenSpan = hiddenEntry.span;
    multiColPlacements[hiddenSpan.start].push({
      seg: resliceSeg(seg, hiddenSpan.start, hiddenSpan.end, cells),
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let col = hiddenSpan.start; col < hiddenSpan.end; col += 1) {
      moreCnts[col] += 1;
      singleColPlacements[col].push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  }
  for (let col = 0; col < cells.length; col += 1) {
    moreMarginTops.push(leftoverMargins[col]);
  }
  return { singleColPlacements, multiColPlacements, moreCnts, moreMarginTops };
}
function placeRects(allRects, segs, cells) {
  let rectsByEachCol = groupRectsByEachCol(allRects, cells.length);
  let singleColPlacements = [];
  let multiColPlacements = [];
  let leftoverMargins = [];
  for (let col = 0; col < cells.length; col += 1) {
    let rects = rectsByEachCol[col];
    let singlePlacements = [];
    let currentHeight = 0;
    let currentMarginTop = 0;
    for (let rect of rects) {
      let seg = segs[rect.index];
      singlePlacements.push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: true,
        isAbsolute: false,
        absoluteTop: rect.levelCoord,
        marginTop: rect.levelCoord - currentHeight
      });
      currentHeight = rect.levelCoord + rect.thickness;
    }
    let multiPlacements = [];
    currentHeight = 0;
    currentMarginTop = 0;
    for (let rect of rects) {
      let seg = segs[rect.index];
      let isAbsolute = rect.span.end - rect.span.start > 1;
      let isFirstCol = rect.span.start === col;
      currentMarginTop += rect.levelCoord - currentHeight;
      currentHeight = rect.levelCoord + rect.thickness;
      if (isAbsolute) {
        currentMarginTop += rect.thickness;
        if (isFirstCol) {
          multiPlacements.push({
            seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
            isVisible: true,
            isAbsolute: true,
            absoluteTop: rect.levelCoord,
            marginTop: 0
          });
        }
      } else if (isFirstCol) {
        multiPlacements.push({
          seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
          isVisible: true,
          isAbsolute: false,
          absoluteTop: rect.levelCoord,
          marginTop: currentMarginTop
          // claim the margin
        });
        currentMarginTop = 0;
      }
    }
    singleColPlacements.push(singlePlacements);
    multiColPlacements.push(multiPlacements);
    leftoverMargins.push(currentMarginTop);
  }
  return { singleColPlacements, multiColPlacements, leftoverMargins };
}
function groupRectsByEachCol(rects, colCnt) {
  let rectsByEachCol = [];
  for (let col = 0; col < colCnt; col += 1) {
    rectsByEachCol.push([]);
  }
  for (let rect of rects) {
    for (let col = rect.span.start; col < rect.span.end; col += 1) {
      rectsByEachCol[col].push(rect);
    }
  }
  return rectsByEachCol;
}
function resliceSeg(seg, spanStart, spanEnd, cells) {
  if (seg.firstCol === spanStart && seg.lastCol === spanEnd - 1) {
    return seg;
  }
  let eventRange = seg.eventRange;
  let origRange = eventRange.range;
  let slicedRange = intersectRanges(origRange, {
    start: cells[spanStart].date,
    end: addDays(cells[spanEnd - 1].date, 1)
  });
  return Object.assign(Object.assign({}, seg), { firstCol: spanStart, lastCol: spanEnd - 1, eventRange: {
    def: eventRange.def,
    ui: Object.assign(Object.assign({}, eventRange.ui), { durationEditable: false }),
    instance: eventRange.instance,
    range: slicedRange
  }, isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(), isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf() });
}
var DayGridSegHierarchy = class extends SegHierarchy {
  constructor() {
    super(...arguments);
    this.hiddenConsumes = false;
    this.forceHidden = {};
  }
  addSegs(segInputs) {
    const hiddenSegs = super.addSegs(segInputs);
    const { entriesByLevel } = this;
    const excludeHidden = (entry) => !this.forceHidden[buildEntryKey(entry)];
    for (let level = 0; level < entriesByLevel.length; level += 1) {
      entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
    }
    return hiddenSegs;
  }
  handleInvalidInsertion(insertion, entry, hiddenEntries) {
    const { entriesByLevel, forceHidden } = this;
    const { touchingEntry, touchingLevel, touchingLateral } = insertion;
    if (this.hiddenConsumes && touchingEntry) {
      const touchingEntryId = buildEntryKey(touchingEntry);
      if (!forceHidden[touchingEntryId]) {
        if (this.allowReslicing) {
          const hiddenEntry = Object.assign(Object.assign({}, touchingEntry), { span: intersectSpans(touchingEntry.span, entry.span) });
          const hiddenEntryId = buildEntryKey(hiddenEntry);
          forceHidden[hiddenEntryId] = true;
          entriesByLevel[touchingLevel][touchingLateral] = hiddenEntry;
          hiddenEntries.push(hiddenEntry);
          this.splitEntry(touchingEntry, entry, hiddenEntries);
        } else {
          forceHidden[touchingEntryId] = true;
          hiddenEntries.push(touchingEntry);
        }
      }
    }
    super.handleInvalidInsertion(insertion, entry, hiddenEntries);
  }
};
var TableRow = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.cellElRefs = new RefMap();
    this.frameElRefs = new RefMap();
    this.fgElRefs = new RefMap();
    this.segHarnessRefs = new RefMap();
    this.rootElRef = d();
    this.state = {
      framePositions: null,
      maxContentHeight: null,
      segHeights: {}
    };
    this.handleResize = (isForced) => {
      if (isForced) {
        this.updateSizing(true);
      }
    };
  }
  render() {
    let { props, state, context } = this;
    let { options } = context;
    let colCnt = props.cells.length;
    let businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
    let bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
    let highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
    let mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);
    let { singleColPlacements, multiColPlacements, moreCnts, moreMarginTops } = computeFgSegPlacement(sortEventSegs(props.fgEventSegs, options.eventOrder), props.dayMaxEvents, props.dayMaxEventRows, options.eventOrderStrict, state.segHeights, state.maxContentHeight, props.cells);
    let isForcedInvisible = (
      // TODO: messy way to compute this
      props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {}
    );
    return y(
      "tr",
      { ref: this.rootElRef, role: "row" },
      props.renderIntro && props.renderIntro(),
      props.cells.map((cell, col) => {
        let normalFgNodes = this.renderFgSegs(col, props.forPrint ? singleColPlacements[col] : multiColPlacements[col], props.todayRange, isForcedInvisible);
        let mirrorFgNodes = this.renderFgSegs(col, buildMirrorPlacements(mirrorSegsByCol[col], multiColPlacements), props.todayRange, {}, Boolean(props.eventDrag), Boolean(props.eventResize), false);
        return y(TableCell, { key: cell.key, elRef: this.cellElRefs.createRef(cell.key), innerElRef: this.frameElRefs.createRef(cell.key), dateProfile: props.dateProfile, date: cell.date, showDayNumber: props.showDayNumbers, showWeekNumber: props.showWeekNumbers && col === 0, forceDayTop: props.showWeekNumbers, todayRange: props.todayRange, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, extraRenderProps: cell.extraRenderProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, moreCnt: moreCnts[col], moreMarginTop: moreMarginTops[col], singlePlacements: singleColPlacements[col], fgContentElRef: this.fgElRefs.createRef(cell.key), fgContent: (
          // Fragment scopes the keys
          y(
            _,
            null,
            y(_, null, normalFgNodes),
            y(_, null, mirrorFgNodes)
          )
        ), bgContent: (
          // Fragment scopes the keys
          y(
            _,
            null,
            this.renderFillSegs(highlightSegsByCol[col], "highlight"),
            this.renderFillSegs(businessHoursByCol[col], "non-business"),
            this.renderFillSegs(bgEventSegsByCol[col], "bg-event")
          )
        ), minHeight: props.cellMinHeight });
      })
    );
  }
  componentDidMount() {
    this.updateSizing(true);
    this.context.addResizeHandler(this.handleResize);
  }
  componentDidUpdate(prevProps, prevState) {
    let currentProps = this.props;
    this.updateSizing(!isPropsEqual(prevProps, currentProps));
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  getHighlightSegs() {
    let { props } = this;
    if (props.eventDrag && props.eventDrag.segs.length) {
      return props.eventDrag.segs;
    }
    if (props.eventResize && props.eventResize.segs.length) {
      return props.eventResize.segs;
    }
    return props.dateSelectionSegs;
  }
  getMirrorSegs() {
    let { props } = this;
    if (props.eventResize && props.eventResize.segs.length) {
      return props.eventResize.segs;
    }
    return [];
  }
  renderFgSegs(col, segPlacements, todayRange, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
    let { context } = this;
    let { eventSelection } = this.props;
    let { framePositions } = this.state;
    let defaultDisplayEventEnd = this.props.cells.length === 1;
    let isMirror = isDragging || isResizing || isDateSelecting;
    let nodes = [];
    if (framePositions) {
      for (let placement of segPlacements) {
        let { seg } = placement;
        let { instanceId } = seg.eventRange.instance;
        let isVisible = placement.isVisible && !isForcedInvisible[instanceId];
        let isAbsolute = placement.isAbsolute;
        let left = "";
        let right = "";
        if (isAbsolute) {
          if (context.isRtl) {
            right = 0;
            left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
          } else {
            left = 0;
            right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
          }
        }
        nodes.push(y("div", { className: "fc-daygrid-event-harness" + (isAbsolute ? " fc-daygrid-event-harness-abs" : ""), key: generateSegKey(seg), ref: isMirror ? null : this.segHarnessRefs.createRef(generateSegUid(seg)), style: {
          visibility: isVisible ? "" : "hidden",
          marginTop: isAbsolute ? "" : placement.marginTop,
          top: isAbsolute ? placement.absoluteTop : "",
          left,
          right
        } }, hasListItemDisplay(seg) ? y(TableListItemEvent, Object.assign({ seg, isDragging, isSelected: instanceId === eventSelection, defaultDisplayEventEnd }, getSegMeta(seg, todayRange))) : y(TableBlockEvent, Object.assign({ seg, isDragging, isResizing, isDateSelecting, isSelected: instanceId === eventSelection, defaultDisplayEventEnd }, getSegMeta(seg, todayRange)))));
      }
    }
    return nodes;
  }
  renderFillSegs(segs, fillType) {
    let { isRtl } = this.context;
    let { todayRange } = this.props;
    let { framePositions } = this.state;
    let nodes = [];
    if (framePositions) {
      for (let seg of segs) {
        let leftRightCss = isRtl ? {
          right: 0,
          left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol]
        } : {
          left: 0,
          right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol]
        };
        nodes.push(y("div", { key: buildEventRangeKey(seg.eventRange), className: "fc-daygrid-bg-harness", style: leftRightCss }, fillType === "bg-event" ? y(BgEvent, Object.assign({ seg }, getSegMeta(seg, todayRange))) : renderFill(fillType)));
      }
    }
    return y(_, {}, ...nodes);
  }
  updateSizing(isExternalSizingChange) {
    let { props, state, frameElRefs } = this;
    if (!props.forPrint && props.clientWidth !== null) {
      if (isExternalSizingChange) {
        let frameEls = props.cells.map((cell) => frameElRefs.currentMap[cell.key]);
        if (frameEls.length) {
          let originEl = this.rootElRef.current;
          let newPositionCache = new PositionCache(
            originEl,
            frameEls,
            true,
            // isHorizontal
            false
          );
          if (!state.framePositions || !state.framePositions.similarTo(newPositionCache)) {
            this.setState({
              framePositions: new PositionCache(
                originEl,
                frameEls,
                true,
                // isHorizontal
                false
              )
            });
          }
        }
      }
      const oldSegHeights = this.state.segHeights;
      const newSegHeights = this.querySegHeights();
      const limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
      this.safeSetState({
        // HACK to prevent oscillations of events being shown/hidden from max-event-rows
        // Essentially, once you compute an element's height, never null-out.
        // TODO: always display all events, as visibility:hidden?
        segHeights: Object.assign(Object.assign({}, oldSegHeights), newSegHeights),
        maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null
      });
    }
  }
  querySegHeights() {
    let segElMap = this.segHarnessRefs.currentMap;
    let segHeights = {};
    for (let segUid in segElMap) {
      let height = Math.round(segElMap[segUid].getBoundingClientRect().height);
      segHeights[segUid] = Math.max(segHeights[segUid] || 0, height);
    }
    return segHeights;
  }
  computeMaxContentHeight() {
    let firstKey = this.props.cells[0].key;
    let cellEl = this.cellElRefs.currentMap[firstKey];
    let fcContainerEl = this.fgElRefs.currentMap[firstKey];
    return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
  }
  getCellEls() {
    let elMap = this.cellElRefs.currentMap;
    return this.props.cells.map((cell) => elMap[cell.key]);
  }
};
TableRow.addStateEquality({
  segHeights: isPropsEqual
});
function buildMirrorPlacements(mirrorSegs, colPlacements) {
  if (!mirrorSegs.length) {
    return [];
  }
  let topsByInstanceId = buildAbsoluteTopHash(colPlacements);
  return mirrorSegs.map((seg) => ({
    seg,
    isVisible: true,
    isAbsolute: true,
    absoluteTop: topsByInstanceId[seg.eventRange.instance.instanceId],
    marginTop: 0
  }));
}
function buildAbsoluteTopHash(colPlacements) {
  let topsByInstanceId = {};
  for (let placements of colPlacements) {
    for (let placement of placements) {
      topsByInstanceId[placement.seg.eventRange.instance.instanceId] = placement.absoluteTop;
    }
  }
  return topsByInstanceId;
}
var TableRows = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.splitBusinessHourSegs = memoize(splitSegsByRow);
    this.splitBgEventSegs = memoize(splitAllDaySegsByRow);
    this.splitFgEventSegs = memoize(splitSegsByRow);
    this.splitDateSelectionSegs = memoize(splitSegsByRow);
    this.splitEventDrag = memoize(splitInteractionByRow);
    this.splitEventResize = memoize(splitInteractionByRow);
    this.rowRefs = new RefMap();
  }
  render() {
    let { props, context } = this;
    let rowCnt = props.cells.length;
    let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
    let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
    let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
    let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
    let eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
    let eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
    let cellMinHeight = rowCnt >= 7 && props.clientWidth ? props.clientWidth / context.options.aspectRatio / 6 : null;
    return y(NowTimer, { unit: "day" }, (nowDate, todayRange) => y(_, null, props.cells.map((cells, row) => y(TableRow, {
      ref: this.rowRefs.createRef(row),
      key: cells.length ? cells[0].date.toISOString() : row,
      showDayNumbers: rowCnt > 1,
      showWeekNumbers: props.showWeekNumbers,
      todayRange,
      dateProfile: props.dateProfile,
      cells,
      renderIntro: props.renderRowIntro,
      businessHourSegs: businessHourSegsByRow[row],
      eventSelection: props.eventSelection,
      bgEventSegs: bgEventSegsByRow[row],
      fgEventSegs: fgEventSegsByRow[row],
      dateSelectionSegs: dateSelectionSegsByRow[row],
      eventDrag: eventDragByRow[row],
      eventResize: eventResizeByRow[row],
      dayMaxEvents: props.dayMaxEvents,
      dayMaxEventRows: props.dayMaxEventRows,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      cellMinHeight,
      forPrint: props.forPrint
    }))));
  }
  componentDidMount() {
    this.registerInteractiveComponent();
  }
  componentDidUpdate() {
    this.registerInteractiveComponent();
  }
  registerInteractiveComponent() {
    if (!this.rootEl) {
      const firstCellEl = this.rowRefs.currentMap[0].getCellEls()[0];
      const rootEl = firstCellEl ? firstCellEl.closest(".fc-daygrid-body") : null;
      if (rootEl) {
        this.rootEl = rootEl;
        this.context.registerInteractiveComponent(this, {
          el: rootEl,
          isHitComboAllowed: this.props.isHitComboAllowed
        });
      }
    }
  }
  componentWillUnmount() {
    if (this.rootEl) {
      this.context.unregisterInteractiveComponent(this);
      this.rootEl = null;
    }
  }
  // Hit System
  // ----------------------------------------------------------------------------------------------------
  prepareHits() {
    this.rowPositions = new PositionCache(
      this.rootEl,
      this.rowRefs.collect().map((rowObj) => rowObj.getCellEls()[0]),
      // first cell el in each row. TODO: not optimal
      false,
      true
    );
    this.colPositions = new PositionCache(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      // cell els in first row
      true,
      // horizontal
      false
    );
  }
  queryHit(positionLeft, positionTop) {
    let { colPositions, rowPositions } = this;
    let col = colPositions.leftToIndex(positionLeft);
    let row = rowPositions.topToIndex(positionTop);
    if (row != null && col != null) {
      let cell = this.props.cells[row][col];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: Object.assign({ range: this.getCellRange(row, col), allDay: true }, cell.extraDateSpan),
        dayEl: this.getCellEl(row, col),
        rect: {
          left: colPositions.lefts[col],
          right: colPositions.rights[col],
          top: rowPositions.tops[row],
          bottom: rowPositions.bottoms[row]
        },
        layer: 0
      };
    }
    return null;
  }
  getCellEl(row, col) {
    return this.rowRefs.currentMap[row].getCellEls()[col];
  }
  getCellRange(row, col) {
    let start2 = this.props.cells[row][col].date;
    let end = addDays(start2, 1);
    return { start: start2, end };
  }
};
function splitAllDaySegsByRow(segs, rowCnt) {
  return splitSegsByRow(segs.filter(isSegAllDay), rowCnt);
}
function isSegAllDay(seg) {
  return seg.eventRange.def.allDay;
}
var Table = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.elRef = d();
    this.needsScrollReset = false;
  }
  render() {
    let { props } = this;
    let { dayMaxEventRows, dayMaxEvents, expandRows } = props;
    let limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true;
    if (limitViaBalanced && !expandRows) {
      limitViaBalanced = false;
      dayMaxEventRows = null;
      dayMaxEvents = null;
    }
    let classNames = [
      "fc-daygrid-body",
      limitViaBalanced ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      expandRows ? "" : "fc-daygrid-body-natural"
      // will height of one row depend on the others?
    ];
    return y(
      "div",
      { ref: this.elRef, className: classNames.join(" "), style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: props.clientWidth,
        minWidth: props.tableMinWidth
      } },
      y(
        "table",
        { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
          width: props.clientWidth,
          minWidth: props.tableMinWidth,
          height: expandRows ? props.clientHeight : ""
        } },
        props.colGroupNode,
        y(
          "tbody",
          { role: "presentation" },
          y(TableRows, { dateProfile: props.dateProfile, cells: props.cells, renderRowIntro: props.renderRowIntro, showWeekNumbers: props.showWeekNumbers, clientWidth: props.clientWidth, clientHeight: props.clientHeight, businessHourSegs: props.businessHourSegs, bgEventSegs: props.bgEventSegs, fgEventSegs: props.fgEventSegs, dateSelectionSegs: props.dateSelectionSegs, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, dayMaxEvents, dayMaxEventRows, forPrint: props.forPrint, isHitComboAllowed: props.isHitComboAllowed })
        )
      )
    );
  }
  componentDidMount() {
    this.requestScrollReset();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.dateProfile !== this.props.dateProfile) {
      this.requestScrollReset();
    } else {
      this.flushScrollReset();
    }
  }
  requestScrollReset() {
    this.needsScrollReset = true;
    this.flushScrollReset();
  }
  flushScrollReset() {
    if (this.needsScrollReset && this.props.clientWidth) {
      const subjectEl = getScrollSubjectEl(this.elRef.current, this.props.dateProfile);
      if (subjectEl) {
        const originEl = subjectEl.closest(".fc-daygrid-body");
        const scrollEl = originEl.closest(".fc-scroller");
        const scrollTop = subjectEl.getBoundingClientRect().top - originEl.getBoundingClientRect().top;
        scrollEl.scrollTop = scrollTop ? scrollTop + 1 : 0;
      }
      this.needsScrollReset = false;
    }
  }
};
function getScrollSubjectEl(containerEl, dateProfile) {
  let el;
  if (dateProfile.currentRangeUnit.match(/year|month/)) {
    el = containerEl.querySelector(`[data-date="${formatIsoMonthStr(dateProfile.currentDate)}-01"]`);
  }
  if (!el) {
    el = containerEl.querySelector(`[data-date="${formatDayString(dateProfile.currentDate)}"]`);
  }
  return el;
}
var DayTableSlicer = class extends Slicer {
  constructor() {
    super(...arguments);
    this.forceDayIfListItem = true;
  }
  sliceRange(dateRange, dayTableModel) {
    return dayTableModel.sliceRange(dateRange);
  }
};
var DayTable = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.slicer = new DayTableSlicer();
    this.tableRef = d();
  }
  render() {
    let { props, context } = this;
    return y(Table, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), { dateProfile: props.dateProfile, cells: props.dayTableModel.cells, colGroupNode: props.colGroupNode, tableMinWidth: props.tableMinWidth, renderRowIntro: props.renderRowIntro, dayMaxEvents: props.dayMaxEvents, dayMaxEventRows: props.dayMaxEventRows, showWeekNumbers: props.showWeekNumbers, expandRows: props.expandRows, headerAlignElRef: props.headerAlignElRef, clientWidth: props.clientWidth, clientHeight: props.clientHeight, forPrint: props.forPrint }));
  }
};
var DayTableView = class extends TableView {
  constructor() {
    super(...arguments);
    this.buildDayTableModel = memoize(buildDayTableModel);
    this.headerRef = d();
    this.tableRef = d();
  }
  render() {
    let { options, dateProfileGenerator } = this.context;
    let { props } = this;
    let dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
    let headerContent = options.dayHeaders && y(DayHeader, { ref: this.headerRef, dateProfile: props.dateProfile, dates: dayTableModel.headerDates, datesRepDistinctDays: dayTableModel.rowCnt === 1 });
    let bodyContent = (contentArg) => y(DayTable, { ref: this.tableRef, dateProfile: props.dateProfile, dayTableModel, businessHours: props.businessHours, dateSelection: props.dateSelection, eventStore: props.eventStore, eventUiBases: props.eventUiBases, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, nextDayThreshold: options.nextDayThreshold, colGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, dayMaxEvents: options.dayMaxEvents, dayMaxEventRows: options.dayMaxEventRows, showWeekNumbers: options.weekNumbers, expandRows: !props.isHeightAuto, headerAlignElRef: this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint });
    return options.dayMinWidth ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth) : this.renderSimpleLayout(headerContent, bodyContent);
  }
};
function buildDayTableModel(dateProfile, dateProfileGenerator) {
  let daySeries = new DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
  return new DayTableModel(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}
var TableDateProfileGenerator = class extends DateProfileGenerator {
  // Computes the date range that will be rendered
  buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
    let renderRange = super.buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay);
    let { props } = this;
    return buildDayTableRenderRange({
      currentRange: renderRange,
      snapToWeek: /^(year|month)$/.test(currentRangeUnit),
      fixedWeekCount: props.fixedWeekCount,
      dateEnv: props.dateEnv
    });
  }
};
function buildDayTableRenderRange(props) {
  let { dateEnv, currentRange } = props;
  let { start: start2, end } = currentRange;
  let endOfWeek;
  if (props.snapToWeek) {
    start2 = dateEnv.startOfWeek(start2);
    endOfWeek = dateEnv.startOfWeek(end);
    if (endOfWeek.valueOf() !== end.valueOf()) {
      end = addWeeks(endOfWeek, 1);
    }
  }
  if (props.fixedWeekCount) {
    let lastMonthRenderStart = dateEnv.startOfWeek(dateEnv.startOfMonth(addDays(currentRange.end, -1)));
    let rowCnt = Math.ceil(
      // could be partial weeks due to hiddenDays
      diffWeeks(lastMonthRenderStart, end)
    );
    end = addWeeks(end, 6 - rowCnt);
  }
  return { start: start2, end };
}
var css_248z2 = ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
injectStyles(css_248z2);

// node_modules/@fullcalendar/daygrid/index.js
var index = createPlugin({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: DayTableView,
      dateProfileGeneratorClass: TableDateProfileGenerator
    },
    dayGridDay: {
      type: "dayGrid",
      duration: { days: 1 }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: { weeks: 1 }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      fixedWeekCount: true
    },
    dayGridYear: {
      type: "dayGrid",
      duration: { years: 1 }
    }
  }
});

// node_modules/@fullcalendar/interaction/index.js
config.touchMouseIgnoreWait = 500;
var ignoreMouseDepth = 0;
var listenerCnt = 0;
var isWindowTouchMoveCancelled = false;
var PointerDragging = class {
  constructor(containerEl) {
    this.subjectEl = null;
    this.selector = "";
    this.handleSelector = "";
    this.shouldIgnoreMove = false;
    this.shouldWatchScroll = true;
    this.isDragging = false;
    this.isTouchDragging = false;
    this.wasTouchScroll = false;
    this.handleMouseDown = (ev) => {
      if (!this.shouldIgnoreMouse() && isPrimaryMouseButton(ev) && this.tryStart(ev)) {
        let pev = this.createEventFromMouse(ev, true);
        this.emitter.trigger("pointerdown", pev);
        this.initScrollWatch(pev);
        if (!this.shouldIgnoreMove) {
          document.addEventListener("mousemove", this.handleMouseMove);
        }
        document.addEventListener("mouseup", this.handleMouseUp);
      }
    };
    this.handleMouseMove = (ev) => {
      let pev = this.createEventFromMouse(ev);
      this.recordCoords(pev);
      this.emitter.trigger("pointermove", pev);
    };
    this.handleMouseUp = (ev) => {
      document.removeEventListener("mousemove", this.handleMouseMove);
      document.removeEventListener("mouseup", this.handleMouseUp);
      this.emitter.trigger("pointerup", this.createEventFromMouse(ev));
      this.cleanup();
    };
    this.handleTouchStart = (ev) => {
      if (this.tryStart(ev)) {
        this.isTouchDragging = true;
        let pev = this.createEventFromTouch(ev, true);
        this.emitter.trigger("pointerdown", pev);
        this.initScrollWatch(pev);
        let targetEl = ev.target;
        if (!this.shouldIgnoreMove) {
          targetEl.addEventListener("touchmove", this.handleTouchMove);
        }
        targetEl.addEventListener("touchend", this.handleTouchEnd);
        targetEl.addEventListener("touchcancel", this.handleTouchEnd);
        window.addEventListener("scroll", this.handleTouchScroll, true);
      }
    };
    this.handleTouchMove = (ev) => {
      let pev = this.createEventFromTouch(ev);
      this.recordCoords(pev);
      this.emitter.trigger("pointermove", pev);
    };
    this.handleTouchEnd = (ev) => {
      if (this.isDragging) {
        let targetEl = ev.target;
        targetEl.removeEventListener("touchmove", this.handleTouchMove);
        targetEl.removeEventListener("touchend", this.handleTouchEnd);
        targetEl.removeEventListener("touchcancel", this.handleTouchEnd);
        window.removeEventListener("scroll", this.handleTouchScroll, true);
        this.emitter.trigger("pointerup", this.createEventFromTouch(ev));
        this.cleanup();
        this.isTouchDragging = false;
        startIgnoringMouse();
      }
    };
    this.handleTouchScroll = () => {
      this.wasTouchScroll = true;
    };
    this.handleScroll = (ev) => {
      if (!this.shouldIgnoreMove) {
        let pageX = window.scrollX - this.prevScrollX + this.prevPageX;
        let pageY = window.scrollY - this.prevScrollY + this.prevPageY;
        this.emitter.trigger("pointermove", {
          origEvent: ev,
          isTouch: this.isTouchDragging,
          subjectEl: this.subjectEl,
          pageX,
          pageY,
          deltaX: pageX - this.origPageX,
          deltaY: pageY - this.origPageY
        });
      }
    };
    this.containerEl = containerEl;
    this.emitter = new Emitter();
    containerEl.addEventListener("mousedown", this.handleMouseDown);
    containerEl.addEventListener("touchstart", this.handleTouchStart, { passive: true });
    listenerCreated();
  }
  destroy() {
    this.containerEl.removeEventListener("mousedown", this.handleMouseDown);
    this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: true });
    listenerDestroyed();
  }
  tryStart(ev) {
    let subjectEl = this.querySubjectEl(ev);
    let downEl = ev.target;
    if (subjectEl && (!this.handleSelector || elementClosest(downEl, this.handleSelector))) {
      this.subjectEl = subjectEl;
      this.isDragging = true;
      this.wasTouchScroll = false;
      return true;
    }
    return false;
  }
  cleanup() {
    isWindowTouchMoveCancelled = false;
    this.isDragging = false;
    this.subjectEl = null;
    this.destroyScrollWatch();
  }
  querySubjectEl(ev) {
    if (this.selector) {
      return elementClosest(ev.target, this.selector);
    }
    return this.containerEl;
  }
  shouldIgnoreMouse() {
    return ignoreMouseDepth || this.isTouchDragging;
  }
  // can be called by user of this class, to cancel touch-based scrolling for the current drag
  cancelTouchScroll() {
    if (this.isDragging) {
      isWindowTouchMoveCancelled = true;
    }
  }
  // Scrolling that simulates pointermoves
  // ----------------------------------------------------------------------------------------------------
  initScrollWatch(ev) {
    if (this.shouldWatchScroll) {
      this.recordCoords(ev);
      window.addEventListener("scroll", this.handleScroll, true);
    }
  }
  recordCoords(ev) {
    if (this.shouldWatchScroll) {
      this.prevPageX = ev.pageX;
      this.prevPageY = ev.pageY;
      this.prevScrollX = window.scrollX;
      this.prevScrollY = window.scrollY;
    }
  }
  destroyScrollWatch() {
    if (this.shouldWatchScroll) {
      window.removeEventListener("scroll", this.handleScroll, true);
    }
  }
  // Event Normalization
  // ----------------------------------------------------------------------------------------------------
  createEventFromMouse(ev, isFirst) {
    let deltaX = 0;
    let deltaY = 0;
    if (isFirst) {
      this.origPageX = ev.pageX;
      this.origPageY = ev.pageY;
    } else {
      deltaX = ev.pageX - this.origPageX;
      deltaY = ev.pageY - this.origPageY;
    }
    return {
      origEvent: ev,
      isTouch: false,
      subjectEl: this.subjectEl,
      pageX: ev.pageX,
      pageY: ev.pageY,
      deltaX,
      deltaY
    };
  }
  createEventFromTouch(ev, isFirst) {
    let touches = ev.touches;
    let pageX;
    let pageY;
    let deltaX = 0;
    let deltaY = 0;
    if (touches && touches.length) {
      pageX = touches[0].pageX;
      pageY = touches[0].pageY;
    } else {
      pageX = ev.pageX;
      pageY = ev.pageY;
    }
    if (isFirst) {
      this.origPageX = pageX;
      this.origPageY = pageY;
    } else {
      deltaX = pageX - this.origPageX;
      deltaY = pageY - this.origPageY;
    }
    return {
      origEvent: ev,
      isTouch: true,
      subjectEl: this.subjectEl,
      pageX,
      pageY,
      deltaX,
      deltaY
    };
  }
};
function isPrimaryMouseButton(ev) {
  return ev.button === 0 && !ev.ctrlKey;
}
function startIgnoringMouse() {
  ignoreMouseDepth += 1;
  setTimeout(() => {
    ignoreMouseDepth -= 1;
  }, config.touchMouseIgnoreWait);
}
function listenerCreated() {
  listenerCnt += 1;
  if (listenerCnt === 1) {
    window.addEventListener("touchmove", onWindowTouchMove, { passive: false });
  }
}
function listenerDestroyed() {
  listenerCnt -= 1;
  if (!listenerCnt) {
    window.removeEventListener("touchmove", onWindowTouchMove, { passive: false });
  }
}
function onWindowTouchMove(ev) {
  if (isWindowTouchMoveCancelled) {
    ev.preventDefault();
  }
}
var ElementMirror = class {
  constructor() {
    this.isVisible = false;
    this.sourceEl = null;
    this.mirrorEl = null;
    this.sourceElRect = null;
    this.parentNode = document.body;
    this.zIndex = 9999;
    this.revertDuration = 0;
  }
  start(sourceEl, pageX, pageY) {
    this.sourceEl = sourceEl;
    this.sourceElRect = this.sourceEl.getBoundingClientRect();
    this.origScreenX = pageX - window.scrollX;
    this.origScreenY = pageY - window.scrollY;
    this.deltaX = 0;
    this.deltaY = 0;
    this.updateElPosition();
  }
  handleMove(pageX, pageY) {
    this.deltaX = pageX - window.scrollX - this.origScreenX;
    this.deltaY = pageY - window.scrollY - this.origScreenY;
    this.updateElPosition();
  }
  // can be called before start
  setIsVisible(bool) {
    if (bool) {
      if (!this.isVisible) {
        if (this.mirrorEl) {
          this.mirrorEl.style.display = "";
        }
        this.isVisible = bool;
        this.updateElPosition();
      }
    } else if (this.isVisible) {
      if (this.mirrorEl) {
        this.mirrorEl.style.display = "none";
      }
      this.isVisible = bool;
    }
  }
  // always async
  stop(needsRevertAnimation, callback) {
    let done = () => {
      this.cleanup();
      callback();
    };
    if (needsRevertAnimation && this.mirrorEl && this.isVisible && this.revertDuration && // if 0, transition won't work
    (this.deltaX || this.deltaY)) {
      this.doRevertAnimation(done, this.revertDuration);
    } else {
      setTimeout(done, 0);
    }
  }
  doRevertAnimation(callback, revertDuration) {
    let mirrorEl = this.mirrorEl;
    let finalSourceElRect = this.sourceEl.getBoundingClientRect();
    mirrorEl.style.transition = "top " + revertDuration + "ms,left " + revertDuration + "ms";
    applyStyle(mirrorEl, {
      left: finalSourceElRect.left,
      top: finalSourceElRect.top
    });
    whenTransitionDone(mirrorEl, () => {
      mirrorEl.style.transition = "";
      callback();
    });
  }
  cleanup() {
    if (this.mirrorEl) {
      removeElement(this.mirrorEl);
      this.mirrorEl = null;
    }
    this.sourceEl = null;
  }
  updateElPosition() {
    if (this.sourceEl && this.isVisible) {
      applyStyle(this.getMirrorEl(), {
        left: this.sourceElRect.left + this.deltaX,
        top: this.sourceElRect.top + this.deltaY
      });
    }
  }
  getMirrorEl() {
    let sourceElRect = this.sourceElRect;
    let mirrorEl = this.mirrorEl;
    if (!mirrorEl) {
      mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true);
      mirrorEl.style.userSelect = "none";
      mirrorEl.style.webkitUserSelect = "none";
      mirrorEl.style.pointerEvents = "none";
      mirrorEl.classList.add("fc-event-dragging");
      applyStyle(mirrorEl, {
        position: "fixed",
        zIndex: this.zIndex,
        visibility: "",
        boxSizing: "border-box",
        width: sourceElRect.right - sourceElRect.left,
        height: sourceElRect.bottom - sourceElRect.top,
        right: "auto",
        bottom: "auto",
        margin: 0
      });
      this.parentNode.appendChild(mirrorEl);
    }
    return mirrorEl;
  }
};
var ScrollGeomCache = class extends ScrollController {
  constructor(scrollController, doesListening) {
    super();
    this.handleScroll = () => {
      this.scrollTop = this.scrollController.getScrollTop();
      this.scrollLeft = this.scrollController.getScrollLeft();
      this.handleScrollChange();
    };
    this.scrollController = scrollController;
    this.doesListening = doesListening;
    this.scrollTop = this.origScrollTop = scrollController.getScrollTop();
    this.scrollLeft = this.origScrollLeft = scrollController.getScrollLeft();
    this.scrollWidth = scrollController.getScrollWidth();
    this.scrollHeight = scrollController.getScrollHeight();
    this.clientWidth = scrollController.getClientWidth();
    this.clientHeight = scrollController.getClientHeight();
    this.clientRect = this.computeClientRect();
    if (this.doesListening) {
      this.getEventTarget().addEventListener("scroll", this.handleScroll);
    }
  }
  destroy() {
    if (this.doesListening) {
      this.getEventTarget().removeEventListener("scroll", this.handleScroll);
    }
  }
  getScrollTop() {
    return this.scrollTop;
  }
  getScrollLeft() {
    return this.scrollLeft;
  }
  setScrollTop(top) {
    this.scrollController.setScrollTop(top);
    if (!this.doesListening) {
      this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
      this.handleScrollChange();
    }
  }
  setScrollLeft(top) {
    this.scrollController.setScrollLeft(top);
    if (!this.doesListening) {
      this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
      this.handleScrollChange();
    }
  }
  getClientWidth() {
    return this.clientWidth;
  }
  getClientHeight() {
    return this.clientHeight;
  }
  getScrollWidth() {
    return this.scrollWidth;
  }
  getScrollHeight() {
    return this.scrollHeight;
  }
  handleScrollChange() {
  }
};
var ElementScrollGeomCache = class extends ScrollGeomCache {
  constructor(el, doesListening) {
    super(new ElementScrollController(el), doesListening);
  }
  getEventTarget() {
    return this.scrollController.el;
  }
  computeClientRect() {
    return computeInnerRect(this.scrollController.el);
  }
};
var WindowScrollGeomCache = class extends ScrollGeomCache {
  constructor(doesListening) {
    super(new WindowScrollController(), doesListening);
  }
  getEventTarget() {
    return window;
  }
  computeClientRect() {
    return {
      left: this.scrollLeft,
      right: this.scrollLeft + this.clientWidth,
      top: this.scrollTop,
      bottom: this.scrollTop + this.clientHeight
    };
  }
  // the window is the only scroll object that changes it's rectangle relative
  // to the document's topleft as it scrolls
  handleScrollChange() {
    this.clientRect = this.computeClientRect();
  }
};
var getTime = typeof performance === "function" ? performance.now : Date.now;
var AutoScroller = class {
  constructor() {
    this.isEnabled = true;
    this.scrollQuery = [window, ".fc-scroller"];
    this.edgeThreshold = 50;
    this.maxVelocity = 300;
    this.pointerScreenX = null;
    this.pointerScreenY = null;
    this.isAnimating = false;
    this.scrollCaches = null;
    this.everMovedUp = false;
    this.everMovedDown = false;
    this.everMovedLeft = false;
    this.everMovedRight = false;
    this.animate = () => {
      if (this.isAnimating) {
        let edge = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
        if (edge) {
          let now = getTime();
          this.handleSide(edge, (now - this.msSinceRequest) / 1e3);
          this.requestAnimation(now);
        } else {
          this.isAnimating = false;
        }
      }
    };
  }
  start(pageX, pageY, scrollStartEl) {
    if (this.isEnabled) {
      this.scrollCaches = this.buildCaches(scrollStartEl);
      this.pointerScreenX = null;
      this.pointerScreenY = null;
      this.everMovedUp = false;
      this.everMovedDown = false;
      this.everMovedLeft = false;
      this.everMovedRight = false;
      this.handleMove(pageX, pageY);
    }
  }
  handleMove(pageX, pageY) {
    if (this.isEnabled) {
      let pointerScreenX = pageX - window.scrollX;
      let pointerScreenY = pageY - window.scrollY;
      let yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
      let xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;
      if (yDelta < 0) {
        this.everMovedUp = true;
      } else if (yDelta > 0) {
        this.everMovedDown = true;
      }
      if (xDelta < 0) {
        this.everMovedLeft = true;
      } else if (xDelta > 0) {
        this.everMovedRight = true;
      }
      this.pointerScreenX = pointerScreenX;
      this.pointerScreenY = pointerScreenY;
      if (!this.isAnimating) {
        this.isAnimating = true;
        this.requestAnimation(getTime());
      }
    }
  }
  stop() {
    if (this.isEnabled) {
      this.isAnimating = false;
      for (let scrollCache of this.scrollCaches) {
        scrollCache.destroy();
      }
      this.scrollCaches = null;
    }
  }
  requestAnimation(now) {
    this.msSinceRequest = now;
    requestAnimationFrame(this.animate);
  }
  handleSide(edge, seconds) {
    let { scrollCache } = edge;
    let { edgeThreshold } = this;
    let invDistance = edgeThreshold - edge.distance;
    let velocity = (
      // the closer to the edge, the faster we scroll
      invDistance * invDistance / (edgeThreshold * edgeThreshold) * // quadratic
      this.maxVelocity * seconds
    );
    let sign = 1;
    switch (edge.name) {
      case "left":
        sign = -1;
      // falls through
      case "right":
        scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
        break;
      case "top":
        sign = -1;
      // falls through
      case "bottom":
        scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
        break;
    }
  }
  // left/top are relative to document topleft
  computeBestEdge(left, top) {
    let { edgeThreshold } = this;
    let bestSide = null;
    let scrollCaches = this.scrollCaches || [];
    for (let scrollCache of scrollCaches) {
      let rect = scrollCache.clientRect;
      let leftDist = left - rect.left;
      let rightDist = rect.right - left;
      let topDist = top - rect.top;
      let bottomDist = rect.bottom - top;
      if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
        if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() && (!bestSide || bestSide.distance > topDist)) {
          bestSide = { scrollCache, name: "top", distance: topDist };
        }
        if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() && (!bestSide || bestSide.distance > bottomDist)) {
          bestSide = { scrollCache, name: "bottom", distance: bottomDist };
        }
        if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() && (!bestSide || bestSide.distance > leftDist)) {
          bestSide = { scrollCache, name: "left", distance: leftDist };
        }
        if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() && (!bestSide || bestSide.distance > rightDist)) {
          bestSide = { scrollCache, name: "right", distance: rightDist };
        }
      }
    }
    return bestSide;
  }
  buildCaches(scrollStartEl) {
    return this.queryScrollEls(scrollStartEl).map((el) => {
      if (el === window) {
        return new WindowScrollGeomCache(false);
      }
      return new ElementScrollGeomCache(el, false);
    });
  }
  queryScrollEls(scrollStartEl) {
    let els = [];
    for (let query of this.scrollQuery) {
      if (typeof query === "object") {
        els.push(query);
      } else {
        els.push(...Array.prototype.slice.call(scrollStartEl.getRootNode().querySelectorAll(query)));
      }
    }
    return els;
  }
};
var FeaturefulElementDragging = class extends ElementDragging {
  constructor(containerEl, selector) {
    super(containerEl);
    this.containerEl = containerEl;
    this.delay = null;
    this.minDistance = 0;
    this.touchScrollAllowed = true;
    this.mirrorNeedsRevert = false;
    this.isInteracting = false;
    this.isDragging = false;
    this.isDelayEnded = false;
    this.isDistanceSurpassed = false;
    this.delayTimeoutId = null;
    this.onPointerDown = (ev) => {
      if (!this.isDragging) {
        this.isInteracting = true;
        this.isDelayEnded = false;
        this.isDistanceSurpassed = false;
        preventSelection(document.body);
        preventContextMenu(document.body);
        if (!ev.isTouch) {
          ev.origEvent.preventDefault();
        }
        this.emitter.trigger("pointerdown", ev);
        if (this.isInteracting && // not destroyed via pointerdown handler
        !this.pointer.shouldIgnoreMove) {
          this.mirror.setIsVisible(false);
          this.mirror.start(ev.subjectEl, ev.pageX, ev.pageY);
          this.startDelay(ev);
          if (!this.minDistance) {
            this.handleDistanceSurpassed(ev);
          }
        }
      }
    };
    this.onPointerMove = (ev) => {
      if (this.isInteracting) {
        this.emitter.trigger("pointermove", ev);
        if (!this.isDistanceSurpassed) {
          let minDistance = this.minDistance;
          let distanceSq;
          let { deltaX, deltaY } = ev;
          distanceSq = deltaX * deltaX + deltaY * deltaY;
          if (distanceSq >= minDistance * minDistance) {
            this.handleDistanceSurpassed(ev);
          }
        }
        if (this.isDragging) {
          if (ev.origEvent.type !== "scroll") {
            this.mirror.handleMove(ev.pageX, ev.pageY);
            this.autoScroller.handleMove(ev.pageX, ev.pageY);
          }
          this.emitter.trigger("dragmove", ev);
        }
      }
    };
    this.onPointerUp = (ev) => {
      if (this.isInteracting) {
        this.isInteracting = false;
        allowSelection(document.body);
        allowContextMenu(document.body);
        this.emitter.trigger("pointerup", ev);
        if (this.isDragging) {
          this.autoScroller.stop();
          this.tryStopDrag(ev);
        }
        if (this.delayTimeoutId) {
          clearTimeout(this.delayTimeoutId);
          this.delayTimeoutId = null;
        }
      }
    };
    let pointer = this.pointer = new PointerDragging(containerEl);
    pointer.emitter.on("pointerdown", this.onPointerDown);
    pointer.emitter.on("pointermove", this.onPointerMove);
    pointer.emitter.on("pointerup", this.onPointerUp);
    if (selector) {
      pointer.selector = selector;
    }
    this.mirror = new ElementMirror();
    this.autoScroller = new AutoScroller();
  }
  destroy() {
    this.pointer.destroy();
    this.onPointerUp({});
  }
  startDelay(ev) {
    if (typeof this.delay === "number") {
      this.delayTimeoutId = setTimeout(() => {
        this.delayTimeoutId = null;
        this.handleDelayEnd(ev);
      }, this.delay);
    } else {
      this.handleDelayEnd(ev);
    }
  }
  handleDelayEnd(ev) {
    this.isDelayEnded = true;
    this.tryStartDrag(ev);
  }
  handleDistanceSurpassed(ev) {
    this.isDistanceSurpassed = true;
    this.tryStartDrag(ev);
  }
  tryStartDrag(ev) {
    if (this.isDelayEnded && this.isDistanceSurpassed) {
      if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
        this.isDragging = true;
        this.mirrorNeedsRevert = false;
        this.autoScroller.start(ev.pageX, ev.pageY, this.containerEl);
        this.emitter.trigger("dragstart", ev);
        if (this.touchScrollAllowed === false) {
          this.pointer.cancelTouchScroll();
        }
      }
    }
  }
  tryStopDrag(ev) {
    this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev));
  }
  stopDrag(ev) {
    this.isDragging = false;
    this.emitter.trigger("dragend", ev);
  }
  // fill in the implementations...
  setIgnoreMove(bool) {
    this.pointer.shouldIgnoreMove = bool;
  }
  setMirrorIsVisible(bool) {
    this.mirror.setIsVisible(bool);
  }
  setMirrorNeedsRevert(bool) {
    this.mirrorNeedsRevert = bool;
  }
  setAutoScrollEnabled(bool) {
    this.autoScroller.isEnabled = bool;
  }
};
var OffsetTracker = class {
  constructor(el) {
    this.el = el;
    this.origRect = computeRect(el);
    this.scrollCaches = getClippingParents(el).map((scrollEl) => new ElementScrollGeomCache(scrollEl, true));
  }
  destroy() {
    for (let scrollCache of this.scrollCaches) {
      scrollCache.destroy();
    }
  }
  computeLeft() {
    let left = this.origRect.left;
    for (let scrollCache of this.scrollCaches) {
      left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
    }
    return left;
  }
  computeTop() {
    let top = this.origRect.top;
    for (let scrollCache of this.scrollCaches) {
      top += scrollCache.origScrollTop - scrollCache.getScrollTop();
    }
    return top;
  }
  isWithinClipping(pageX, pageY) {
    let point = { left: pageX, top: pageY };
    for (let scrollCache of this.scrollCaches) {
      if (!isIgnoredClipping(scrollCache.getEventTarget()) && !pointInsideRect(point, scrollCache.clientRect)) {
        return false;
      }
    }
    return true;
  }
};
function isIgnoredClipping(node) {
  let tagName = node.tagName;
  return tagName === "HTML" || tagName === "BODY";
}
var HitDragging = class {
  constructor(dragging, droppableStore) {
    this.useSubjectCenter = false;
    this.requireInitial = true;
    this.disablePointCheck = false;
    this.initialHit = null;
    this.movingHit = null;
    this.finalHit = null;
    this.handlePointerDown = (ev) => {
      let { dragging: dragging2 } = this;
      this.initialHit = null;
      this.movingHit = null;
      this.finalHit = null;
      this.prepareHits();
      this.processFirstCoord(ev);
      if (this.initialHit || !this.requireInitial) {
        dragging2.setIgnoreMove(false);
        this.emitter.trigger("pointerdown", ev);
      } else {
        dragging2.setIgnoreMove(true);
      }
    };
    this.handleDragStart = (ev) => {
      this.emitter.trigger("dragstart", ev);
      this.handleMove(ev, true);
    };
    this.handleDragMove = (ev) => {
      this.emitter.trigger("dragmove", ev);
      this.handleMove(ev);
    };
    this.handlePointerUp = (ev) => {
      this.releaseHits();
      this.emitter.trigger("pointerup", ev);
    };
    this.handleDragEnd = (ev) => {
      if (this.movingHit) {
        this.emitter.trigger("hitupdate", null, true, ev);
      }
      this.finalHit = this.movingHit;
      this.movingHit = null;
      this.emitter.trigger("dragend", ev);
    };
    this.droppableStore = droppableStore;
    dragging.emitter.on("pointerdown", this.handlePointerDown);
    dragging.emitter.on("dragstart", this.handleDragStart);
    dragging.emitter.on("dragmove", this.handleDragMove);
    dragging.emitter.on("pointerup", this.handlePointerUp);
    dragging.emitter.on("dragend", this.handleDragEnd);
    this.dragging = dragging;
    this.emitter = new Emitter();
  }
  // sets initialHit
  // sets coordAdjust
  processFirstCoord(ev) {
    let origPoint = { left: ev.pageX, top: ev.pageY };
    let adjustedPoint = origPoint;
    let subjectEl = ev.subjectEl;
    let subjectRect;
    if (subjectEl instanceof HTMLElement) {
      subjectRect = computeRect(subjectEl);
      adjustedPoint = constrainPoint(adjustedPoint, subjectRect);
    }
    let initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);
    if (initialHit) {
      if (this.useSubjectCenter && subjectRect) {
        let slicedSubjectRect = intersectRects(subjectRect, initialHit.rect);
        if (slicedSubjectRect) {
          adjustedPoint = getRectCenter(slicedSubjectRect);
        }
      }
      this.coordAdjust = diffPoints(adjustedPoint, origPoint);
    } else {
      this.coordAdjust = { left: 0, top: 0 };
    }
  }
  handleMove(ev, forceHandle) {
    let hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);
    if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
      this.movingHit = hit;
      this.emitter.trigger("hitupdate", hit, false, ev);
    }
  }
  prepareHits() {
    this.offsetTrackers = mapHash(this.droppableStore, (interactionSettings) => {
      interactionSettings.component.prepareHits();
      return new OffsetTracker(interactionSettings.el);
    });
  }
  releaseHits() {
    let { offsetTrackers } = this;
    for (let id in offsetTrackers) {
      offsetTrackers[id].destroy();
    }
    this.offsetTrackers = {};
  }
  queryHitForOffset(offsetLeft, offsetTop) {
    let { droppableStore, offsetTrackers } = this;
    let bestHit = null;
    for (let id in droppableStore) {
      let component = droppableStore[id].component;
      let offsetTracker = offsetTrackers[id];
      if (offsetTracker && // wasn't destroyed mid-drag
      offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
        let originLeft = offsetTracker.computeLeft();
        let originTop = offsetTracker.computeTop();
        let positionLeft = offsetLeft - originLeft;
        let positionTop = offsetTop - originTop;
        let { origRect } = offsetTracker;
        let width = origRect.right - origRect.left;
        let height = origRect.bottom - origRect.top;
        if (
          // must be within the element's bounds
          positionLeft >= 0 && positionLeft < width && positionTop >= 0 && positionTop < height
        ) {
          let hit = component.queryHit(positionLeft, positionTop, width, height);
          if (hit && // make sure the hit is within activeRange, meaning it's not a dead cell
          rangeContainsRange(hit.dateProfile.activeRange, hit.dateSpan.range) && // Ensure the component we are querying for the hit is accessibly my the pointer
          // Prevents obscured calendars (ex: under a modal dialog) from accepting hit
          // https://github.com/fullcalendar/fullcalendar/issues/5026
          (this.disablePointCheck || offsetTracker.el.contains(offsetTracker.el.getRootNode().elementFromPoint(
            // add-back origins to get coordinate relative to top-left of window viewport
            positionLeft + originLeft - window.scrollX,
            positionTop + originTop - window.scrollY
          ))) && (!bestHit || hit.layer > bestHit.layer)) {
            hit.componentId = id;
            hit.context = component.context;
            hit.rect.left += originLeft;
            hit.rect.right += originLeft;
            hit.rect.top += originTop;
            hit.rect.bottom += originTop;
            bestHit = hit;
          }
        }
      }
    }
    return bestHit;
  }
};
function isHitsEqual(hit0, hit1) {
  if (!hit0 && !hit1) {
    return true;
  }
  if (Boolean(hit0) !== Boolean(hit1)) {
    return false;
  }
  return isDateSpansEqual(hit0.dateSpan, hit1.dateSpan);
}
function buildDatePointApiWithContext(dateSpan, context) {
  let props = {};
  for (let transform of context.pluginHooks.datePointTransforms) {
    Object.assign(props, transform(dateSpan, context));
  }
  Object.assign(props, buildDatePointApi(dateSpan, context.dateEnv));
  return props;
}
function buildDatePointApi(span, dateEnv) {
  return {
    date: dateEnv.toDate(span.range.start),
    dateStr: dateEnv.formatIso(span.range.start, { omitTime: span.allDay }),
    allDay: span.allDay
  };
}
var DateClicking = class extends Interaction {
  constructor(settings) {
    super(settings);
    this.handlePointerDown = (pev) => {
      let { dragging } = this;
      let downEl = pev.origEvent.target;
      dragging.setIgnoreMove(!this.component.isValidDateDownEl(downEl));
    };
    this.handleDragEnd = (ev) => {
      let { component } = this;
      let { pointer } = this.dragging;
      if (!pointer.wasTouchScroll) {
        let { initialHit, finalHit } = this.hitDragging;
        if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
          let { context } = component;
          let arg = Object.assign(Object.assign({}, buildDatePointApiWithContext(initialHit.dateSpan, context)), { dayEl: initialHit.dayEl, jsEvent: ev.origEvent, view: context.viewApi || context.calendarApi.view });
          context.emitter.trigger("dateClick", arg);
        }
      }
    };
    this.dragging = new FeaturefulElementDragging(settings.el);
    this.dragging.autoScroller.isEnabled = false;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsToStore(settings));
    hitDragging.emitter.on("pointerdown", this.handlePointerDown);
    hitDragging.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
};
var DateSelecting = class extends Interaction {
  constructor(settings) {
    super(settings);
    this.dragSelection = null;
    this.handlePointerDown = (ev) => {
      let { component: component2, dragging: dragging2 } = this;
      let { options: options2 } = component2.context;
      let canSelect = options2.selectable && component2.isValidDateDownEl(ev.origEvent.target);
      dragging2.setIgnoreMove(!canSelect);
      dragging2.delay = ev.isTouch ? getComponentTouchDelay$1(component2) : null;
    };
    this.handleDragStart = (ev) => {
      this.component.context.calendarApi.unselect(ev);
    };
    this.handleHitUpdate = (hit, isFinal) => {
      let { context } = this.component;
      let dragSelection = null;
      let isInvalid = false;
      if (hit) {
        let initialHit = this.hitDragging.initialHit;
        let disallowed = hit.componentId === initialHit.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(initialHit, hit);
        if (!disallowed) {
          dragSelection = joinHitsIntoSelection(initialHit, hit, context.pluginHooks.dateSelectionTransformers);
        }
        if (!dragSelection || !isDateSelectionValid(dragSelection, hit.dateProfile, context)) {
          isInvalid = true;
          dragSelection = null;
        }
      }
      if (dragSelection) {
        context.dispatch({ type: "SELECT_DATES", selection: dragSelection });
      } else if (!isFinal) {
        context.dispatch({ type: "UNSELECT_DATES" });
      }
      if (!isInvalid) {
        enableCursor();
      } else {
        disableCursor();
      }
      if (!isFinal) {
        this.dragSelection = dragSelection;
      }
    };
    this.handlePointerUp = (pev) => {
      if (this.dragSelection) {
        triggerDateSelect(this.dragSelection, pev, this.component.context);
        this.dragSelection = null;
      }
    };
    let { component } = settings;
    let { options } = component.context;
    let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.touchScrollAllowed = false;
    dragging.minDistance = options.selectMinDistance || 0;
    dragging.autoScroller.isEnabled = options.dragScroll;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsToStore(settings));
    hitDragging.emitter.on("pointerdown", this.handlePointerDown);
    hitDragging.emitter.on("dragstart", this.handleDragStart);
    hitDragging.emitter.on("hitupdate", this.handleHitUpdate);
    hitDragging.emitter.on("pointerup", this.handlePointerUp);
  }
  destroy() {
    this.dragging.destroy();
  }
};
function getComponentTouchDelay$1(component) {
  let { options } = component.context;
  let delay = options.selectLongPressDelay;
  if (delay == null) {
    delay = options.longPressDelay;
  }
  return delay;
}
function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
  let dateSpan0 = hit0.dateSpan;
  let dateSpan1 = hit1.dateSpan;
  let ms = [
    dateSpan0.range.start,
    dateSpan0.range.end,
    dateSpan1.range.start,
    dateSpan1.range.end
  ];
  ms.sort(compareNumbers);
  let props = {};
  for (let transformer of dateSelectionTransformers) {
    let res = transformer(hit0, hit1);
    if (res === false) {
      return null;
    }
    if (res) {
      Object.assign(props, res);
    }
  }
  props.range = { start: ms[0], end: ms[3] };
  props.allDay = dateSpan0.allDay;
  return props;
}
var EventDragging = class _EventDragging extends Interaction {
  constructor(settings) {
    super(settings);
    this.subjectEl = null;
    this.subjectSeg = null;
    this.isDragging = false;
    this.eventRange = null;
    this.relevantEvents = null;
    this.receivingContext = null;
    this.validMutation = null;
    this.mutatedRelevantEvents = null;
    this.handlePointerDown = (ev) => {
      let origTarget = ev.origEvent.target;
      let { component: component2, dragging: dragging2 } = this;
      let { mirror } = dragging2;
      let { options: options2 } = component2.context;
      let initialContext = component2.context;
      this.subjectEl = ev.subjectEl;
      let subjectSeg = this.subjectSeg = getElSeg(ev.subjectEl);
      let eventRange = this.eventRange = subjectSeg.eventRange;
      let eventInstanceId = eventRange.instance.instanceId;
      this.relevantEvents = getRelevantEvents(initialContext.getCurrentData().eventStore, eventInstanceId);
      dragging2.minDistance = ev.isTouch ? 0 : options2.eventDragMinDistance;
      dragging2.delay = // only do a touch delay if touch and this event hasn't been selected yet
      ev.isTouch && eventInstanceId !== component2.props.eventSelection ? getComponentTouchDelay(component2) : null;
      if (options2.fixedMirrorParent) {
        mirror.parentNode = options2.fixedMirrorParent;
      } else {
        mirror.parentNode = elementClosest(origTarget, ".fc");
      }
      mirror.revertDuration = options2.dragRevertDuration;
      let isValid = component2.isValidSegDownEl(origTarget) && !elementClosest(origTarget, ".fc-event-resizer");
      dragging2.setIgnoreMove(!isValid);
      this.isDragging = isValid && ev.subjectEl.classList.contains("fc-event-draggable");
    };
    this.handleDragStart = (ev) => {
      let initialContext = this.component.context;
      let eventRange = this.eventRange;
      let eventInstanceId = eventRange.instance.instanceId;
      if (ev.isTouch) {
        if (eventInstanceId !== this.component.props.eventSelection) {
          initialContext.dispatch({ type: "SELECT_EVENT", eventInstanceId });
        }
      } else {
        initialContext.dispatch({ type: "UNSELECT_EVENT" });
      }
      if (this.isDragging) {
        initialContext.calendarApi.unselect(ev);
        initialContext.emitter.trigger("eventDragStart", {
          el: this.subjectEl,
          event: new EventImpl(initialContext, eventRange.def, eventRange.instance),
          jsEvent: ev.origEvent,
          view: initialContext.viewApi
        });
      }
    };
    this.handleHitUpdate = (hit, isFinal) => {
      if (!this.isDragging) {
        return;
      }
      let relevantEvents = this.relevantEvents;
      let initialHit = this.hitDragging.initialHit;
      let initialContext = this.component.context;
      let receivingContext = null;
      let mutation = null;
      let mutatedRelevantEvents = null;
      let isInvalid = false;
      let interaction = {
        affectedEvents: relevantEvents,
        mutatedEvents: createEmptyEventStore(),
        isEvent: true
      };
      if (hit) {
        receivingContext = hit.context;
        let receivingOptions = receivingContext.options;
        if (initialContext === receivingContext || receivingOptions.editable && receivingOptions.droppable) {
          mutation = computeEventMutation(initialHit, hit, this.eventRange.instance.range.start, receivingContext.getCurrentData().pluginHooks.eventDragMutationMassagers);
          if (mutation) {
            mutatedRelevantEvents = applyMutationToEventStore(relevantEvents, receivingContext.getCurrentData().eventUiBases, mutation, receivingContext);
            interaction.mutatedEvents = mutatedRelevantEvents;
            if (!isInteractionValid(interaction, hit.dateProfile, receivingContext)) {
              isInvalid = true;
              mutation = null;
              mutatedRelevantEvents = null;
              interaction.mutatedEvents = createEmptyEventStore();
            }
          }
        } else {
          receivingContext = null;
        }
      }
      this.displayDrag(receivingContext, interaction);
      if (!isInvalid) {
        enableCursor();
      } else {
        disableCursor();
      }
      if (!isFinal) {
        if (initialContext === receivingContext && // TODO: write test for this
        isHitsEqual(initialHit, hit)) {
          mutation = null;
        }
        this.dragging.setMirrorNeedsRevert(!mutation);
        this.dragging.setMirrorIsVisible(!hit || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror"));
        this.receivingContext = receivingContext;
        this.validMutation = mutation;
        this.mutatedRelevantEvents = mutatedRelevantEvents;
      }
    };
    this.handlePointerUp = () => {
      if (!this.isDragging) {
        this.cleanup();
      }
    };
    this.handleDragEnd = (ev) => {
      if (this.isDragging) {
        let initialContext = this.component.context;
        let initialView = initialContext.viewApi;
        let { receivingContext, validMutation } = this;
        let eventDef = this.eventRange.def;
        let eventInstance = this.eventRange.instance;
        let eventApi = new EventImpl(initialContext, eventDef, eventInstance);
        let relevantEvents = this.relevantEvents;
        let mutatedRelevantEvents = this.mutatedRelevantEvents;
        let { finalHit } = this.hitDragging;
        this.clearDrag();
        initialContext.emitter.trigger("eventDragStop", {
          el: this.subjectEl,
          event: eventApi,
          jsEvent: ev.origEvent,
          view: initialView
        });
        if (validMutation) {
          if (receivingContext === initialContext) {
            let updatedEventApi = new EventImpl(initialContext, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
            initialContext.dispatch({
              type: "MERGE_EVENTS",
              eventStore: mutatedRelevantEvents
            });
            let eventChangeArg = {
              oldEvent: eventApi,
              event: updatedEventApi,
              relatedEvents: buildEventApis(mutatedRelevantEvents, initialContext, eventInstance),
              revert() {
                initialContext.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: relevantEvents
                  // the pre-change data
                });
              }
            };
            let transformed = {};
            for (let transformer of initialContext.getCurrentData().pluginHooks.eventDropTransformers) {
              Object.assign(transformed, transformer(validMutation, initialContext, eventDef));
            }
            initialContext.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, eventChangeArg), transformed), { el: ev.subjectEl, delta: validMutation.datesDelta, jsEvent: ev.origEvent, view: initialView }));
            initialContext.emitter.trigger("eventChange", eventChangeArg);
          } else if (receivingContext) {
            let eventRemoveArg = {
              event: eventApi,
              relatedEvents: buildEventApis(relevantEvents, initialContext, eventInstance),
              revert() {
                initialContext.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: relevantEvents
                });
              }
            };
            initialContext.emitter.trigger("eventLeave", Object.assign(Object.assign({}, eventRemoveArg), { draggedEl: ev.subjectEl, view: initialView }));
            initialContext.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: relevantEvents
            });
            initialContext.emitter.trigger("eventRemove", eventRemoveArg);
            let addedEventDef = mutatedRelevantEvents.defs[eventDef.defId];
            let addedEventInstance = mutatedRelevantEvents.instances[eventInstance.instanceId];
            let addedEventApi = new EventImpl(receivingContext, addedEventDef, addedEventInstance);
            receivingContext.dispatch({
              type: "MERGE_EVENTS",
              eventStore: mutatedRelevantEvents
            });
            let eventAddArg = {
              event: addedEventApi,
              relatedEvents: buildEventApis(mutatedRelevantEvents, receivingContext, addedEventInstance),
              revert() {
                receivingContext.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: mutatedRelevantEvents
                });
              }
            };
            receivingContext.emitter.trigger("eventAdd", eventAddArg);
            if (ev.isTouch) {
              receivingContext.dispatch({
                type: "SELECT_EVENT",
                eventInstanceId: eventInstance.instanceId
              });
            }
            receivingContext.emitter.trigger("drop", Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), { draggedEl: ev.subjectEl, jsEvent: ev.origEvent, view: finalHit.context.viewApi }));
            receivingContext.emitter.trigger("eventReceive", Object.assign(Object.assign({}, eventAddArg), { draggedEl: ev.subjectEl, view: finalHit.context.viewApi }));
          }
        } else {
          initialContext.emitter.trigger("_noEventDrop");
        }
      }
      this.cleanup();
    };
    let { component } = this;
    let { options } = component.context;
    let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.pointer.selector = _EventDragging.SELECTOR;
    dragging.touchScrollAllowed = false;
    dragging.autoScroller.isEnabled = options.dragScroll;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsStore);
    hitDragging.useSubjectCenter = settings.useEventCenter;
    hitDragging.emitter.on("pointerdown", this.handlePointerDown);
    hitDragging.emitter.on("dragstart", this.handleDragStart);
    hitDragging.emitter.on("hitupdate", this.handleHitUpdate);
    hitDragging.emitter.on("pointerup", this.handlePointerUp);
    hitDragging.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  // render a drag state on the next receivingCalendar
  displayDrag(nextContext, state) {
    let initialContext = this.component.context;
    let prevContext = this.receivingContext;
    if (prevContext && prevContext !== nextContext) {
      if (prevContext === initialContext) {
        prevContext.dispatch({
          type: "SET_EVENT_DRAG",
          state: {
            affectedEvents: state.affectedEvents,
            mutatedEvents: createEmptyEventStore(),
            isEvent: true
          }
        });
      } else {
        prevContext.dispatch({ type: "UNSET_EVENT_DRAG" });
      }
    }
    if (nextContext) {
      nextContext.dispatch({ type: "SET_EVENT_DRAG", state });
    }
  }
  clearDrag() {
    let initialCalendar = this.component.context;
    let { receivingContext } = this;
    if (receivingContext) {
      receivingContext.dispatch({ type: "UNSET_EVENT_DRAG" });
    }
    if (initialCalendar !== receivingContext) {
      initialCalendar.dispatch({ type: "UNSET_EVENT_DRAG" });
    }
  }
  cleanup() {
    this.subjectSeg = null;
    this.isDragging = false;
    this.eventRange = null;
    this.relevantEvents = null;
    this.receivingContext = null;
    this.validMutation = null;
    this.mutatedRelevantEvents = null;
  }
};
EventDragging.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
function computeEventMutation(hit0, hit1, eventInstanceStart, massagers) {
  let dateSpan0 = hit0.dateSpan;
  let dateSpan1 = hit1.dateSpan;
  let date0 = dateSpan0.range.start;
  let date1 = dateSpan1.range.start;
  let standardProps = {};
  if (dateSpan0.allDay !== dateSpan1.allDay) {
    standardProps.allDay = dateSpan1.allDay;
    standardProps.hasEnd = hit1.context.options.allDayMaintainDuration;
    if (dateSpan1.allDay) {
      date0 = startOfDay(eventInstanceStart);
    } else {
      date0 = eventInstanceStart;
    }
  }
  let delta = diffDates(date0, date1, hit0.context.dateEnv, hit0.componentId === hit1.componentId ? hit0.largeUnit : null);
  if (delta.milliseconds) {
    standardProps.allDay = false;
  }
  let mutation = {
    datesDelta: delta,
    standardProps
  };
  for (let massager of massagers) {
    massager(mutation, hit0, hit1);
  }
  return mutation;
}
function getComponentTouchDelay(component) {
  let { options } = component.context;
  let delay = options.eventLongPressDelay;
  if (delay == null) {
    delay = options.longPressDelay;
  }
  return delay;
}
var EventResizing = class extends Interaction {
  constructor(settings) {
    super(settings);
    this.draggingSegEl = null;
    this.draggingSeg = null;
    this.eventRange = null;
    this.relevantEvents = null;
    this.validMutation = null;
    this.mutatedRelevantEvents = null;
    this.handlePointerDown = (ev) => {
      let { component: component2 } = this;
      let segEl = this.querySegEl(ev);
      let seg = getElSeg(segEl);
      let eventRange = this.eventRange = seg.eventRange;
      this.dragging.minDistance = component2.context.options.eventDragMinDistance;
      this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(ev.origEvent.target) || ev.isTouch && this.component.props.eventSelection !== eventRange.instance.instanceId);
    };
    this.handleDragStart = (ev) => {
      let { context } = this.component;
      let eventRange = this.eventRange;
      this.relevantEvents = getRelevantEvents(context.getCurrentData().eventStore, this.eventRange.instance.instanceId);
      let segEl = this.querySegEl(ev);
      this.draggingSegEl = segEl;
      this.draggingSeg = getElSeg(segEl);
      context.calendarApi.unselect();
      context.emitter.trigger("eventResizeStart", {
        el: segEl,
        event: new EventImpl(context, eventRange.def, eventRange.instance),
        jsEvent: ev.origEvent,
        view: context.viewApi
      });
    };
    this.handleHitUpdate = (hit, isFinal, ev) => {
      let { context } = this.component;
      let relevantEvents = this.relevantEvents;
      let initialHit = this.hitDragging.initialHit;
      let eventInstance = this.eventRange.instance;
      let mutation = null;
      let mutatedRelevantEvents = null;
      let isInvalid = false;
      let interaction = {
        affectedEvents: relevantEvents,
        mutatedEvents: createEmptyEventStore(),
        isEvent: true
      };
      if (hit) {
        let disallowed = hit.componentId === initialHit.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(initialHit, hit);
        if (!disallowed) {
          mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains("fc-event-resizer-start"), eventInstance.range);
        }
      }
      if (mutation) {
        mutatedRelevantEvents = applyMutationToEventStore(relevantEvents, context.getCurrentData().eventUiBases, mutation, context);
        interaction.mutatedEvents = mutatedRelevantEvents;
        if (!isInteractionValid(interaction, hit.dateProfile, context)) {
          isInvalid = true;
          mutation = null;
          mutatedRelevantEvents = null;
          interaction.mutatedEvents = null;
        }
      }
      if (mutatedRelevantEvents) {
        context.dispatch({
          type: "SET_EVENT_RESIZE",
          state: interaction
        });
      } else {
        context.dispatch({ type: "UNSET_EVENT_RESIZE" });
      }
      if (!isInvalid) {
        enableCursor();
      } else {
        disableCursor();
      }
      if (!isFinal) {
        if (mutation && isHitsEqual(initialHit, hit)) {
          mutation = null;
        }
        this.validMutation = mutation;
        this.mutatedRelevantEvents = mutatedRelevantEvents;
      }
    };
    this.handleDragEnd = (ev) => {
      let { context } = this.component;
      let eventDef = this.eventRange.def;
      let eventInstance = this.eventRange.instance;
      let eventApi = new EventImpl(context, eventDef, eventInstance);
      let relevantEvents = this.relevantEvents;
      let mutatedRelevantEvents = this.mutatedRelevantEvents;
      context.emitter.trigger("eventResizeStop", {
        el: this.draggingSegEl,
        event: eventApi,
        jsEvent: ev.origEvent,
        view: context.viewApi
      });
      if (this.validMutation) {
        let updatedEventApi = new EventImpl(context, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
        context.dispatch({
          type: "MERGE_EVENTS",
          eventStore: mutatedRelevantEvents
        });
        let eventChangeArg = {
          oldEvent: eventApi,
          event: updatedEventApi,
          relatedEvents: buildEventApis(mutatedRelevantEvents, context, eventInstance),
          revert() {
            context.dispatch({
              type: "MERGE_EVENTS",
              eventStore: relevantEvents
              // the pre-change events
            });
          }
        };
        context.emitter.trigger("eventResize", Object.assign(Object.assign({}, eventChangeArg), { el: this.draggingSegEl, startDelta: this.validMutation.startDelta || createDuration(0), endDelta: this.validMutation.endDelta || createDuration(0), jsEvent: ev.origEvent, view: context.viewApi }));
        context.emitter.trigger("eventChange", eventChangeArg);
      } else {
        context.emitter.trigger("_noEventResize");
      }
      this.draggingSeg = null;
      this.relevantEvents = null;
      this.validMutation = null;
    };
    let { component } = settings;
    let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.pointer.selector = ".fc-event-resizer";
    dragging.touchScrollAllowed = false;
    dragging.autoScroller.isEnabled = component.context.options.dragScroll;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsToStore(settings));
    hitDragging.emitter.on("pointerdown", this.handlePointerDown);
    hitDragging.emitter.on("dragstart", this.handleDragStart);
    hitDragging.emitter.on("hitupdate", this.handleHitUpdate);
    hitDragging.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  querySegEl(ev) {
    return elementClosest(ev.subjectEl, ".fc-event");
  }
};
function computeMutation(hit0, hit1, isFromStart, instanceRange) {
  let dateEnv = hit0.context.dateEnv;
  let date0 = hit0.dateSpan.range.start;
  let date1 = hit1.dateSpan.range.start;
  let delta = diffDates(date0, date1, dateEnv, hit0.largeUnit);
  if (isFromStart) {
    if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
      return { startDelta: delta };
    }
  } else if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
    return { endDelta: delta };
  }
  return null;
}
var UnselectAuto = class {
  constructor(context) {
    this.context = context;
    this.isRecentPointerDateSelect = false;
    this.matchesCancel = false;
    this.matchesEvent = false;
    this.onSelect = (selectInfo) => {
      if (selectInfo.jsEvent) {
        this.isRecentPointerDateSelect = true;
      }
    };
    this.onDocumentPointerDown = (pev) => {
      let unselectCancel = this.context.options.unselectCancel;
      let downEl = getEventTargetViaRoot(pev.origEvent);
      this.matchesCancel = !!elementClosest(downEl, unselectCancel);
      this.matchesEvent = !!elementClosest(downEl, EventDragging.SELECTOR);
    };
    this.onDocumentPointerUp = (pev) => {
      let { context: context2 } = this;
      let { documentPointer: documentPointer2 } = this;
      let calendarState = context2.getCurrentData();
      if (!documentPointer2.wasTouchScroll) {
        if (calendarState.dateSelection && // an existing date selection?
        !this.isRecentPointerDateSelect) {
          let unselectAuto = context2.options.unselectAuto;
          if (unselectAuto && (!unselectAuto || !this.matchesCancel)) {
            context2.calendarApi.unselect(pev);
          }
        }
        if (calendarState.eventSelection && // an existing event selected?
        !this.matchesEvent) {
          context2.dispatch({ type: "UNSELECT_EVENT" });
        }
      }
      this.isRecentPointerDateSelect = false;
    };
    let documentPointer = this.documentPointer = new PointerDragging(document);
    documentPointer.shouldIgnoreMove = true;
    documentPointer.shouldWatchScroll = false;
    documentPointer.emitter.on("pointerdown", this.onDocumentPointerDown);
    documentPointer.emitter.on("pointerup", this.onDocumentPointerUp);
    context.emitter.on("select", this.onSelect);
  }
  destroy() {
    this.context.emitter.off("select", this.onSelect);
    this.documentPointer.destroy();
  }
};
var OPTION_REFINERS = {
  fixedMirrorParent: identity
};
var LISTENER_REFINERS = {
  dateClick: identity,
  eventDragStart: identity,
  eventDragStop: identity,
  eventDrop: identity,
  eventResizeStart: identity,
  eventResizeStop: identity,
  eventResize: identity,
  drop: identity,
  eventReceive: identity,
  eventLeave: identity
};
config.dataAttrPrefix = "";
var index2 = createPlugin({
  name: "@fullcalendar/interaction",
  componentInteractions: [DateClicking, DateSelecting, EventDragging, EventResizing],
  calendarInteractions: [UnselectAuto],
  elementDraggingImpl: FeaturefulElementDragging,
  optionRefiners: OPTION_REFINERS,
  listenerRefiners: LISTENER_REFINERS
});

// node_modules/@fullcalendar/list/internal.js
var ListViewHeaderRow = class extends BaseComponent {
  constructor() {
    super(...arguments);
    this.state = {
      textId: getUniqueDomId()
    };
  }
  render() {
    let { theme, dateEnv, options, viewApi } = this.context;
    let { cellId, dayDate, todayRange } = this.props;
    let { textId } = this.state;
    let dayMeta = getDateMeta(dayDate, todayRange);
    let text2 = options.listDayFormat ? dateEnv.format(dayDate, options.listDayFormat) : "";
    let sideText = options.listDaySideFormat ? dateEnv.format(dayDate, options.listDaySideFormat) : "";
    let renderProps = Object.assign({
      date: dateEnv.toDate(dayDate),
      view: viewApi,
      textId,
      text: text2,
      sideText,
      navLinkAttrs: buildNavLinkAttrs(this.context, dayDate),
      sideNavLinkAttrs: buildNavLinkAttrs(this.context, dayDate, "day", false)
    }, dayMeta);
    return y(ContentContainer, { elTag: "tr", elClasses: [
      "fc-list-day",
      ...getDayClassNames(dayMeta, theme)
    ], elAttrs: {
      "data-date": formatDayString(dayDate)
    }, renderProps, generatorName: "dayHeaderContent", customGenerator: options.dayHeaderContent, defaultGenerator: renderInnerContent3, classNameGenerator: options.dayHeaderClassNames, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, (InnerContent) => (
      // TODO: force-hide top border based on :first-child
      y(
        "th",
        { scope: "colgroup", colSpan: 3, id: cellId, "aria-labelledby": textId },
        y(InnerContent, { elTag: "div", elClasses: [
          "fc-list-day-cushion",
          theme.getClass("tableCellShaded")
        ] })
      )
    ));
  }
};
function renderInnerContent3(props) {
  return y(
    _,
    null,
    props.text && y("a", Object.assign({ id: props.textId, className: "fc-list-day-text" }, props.navLinkAttrs), props.text),
    props.sideText && /* not keyboard tabbable */
    y("a", Object.assign({ "aria-hidden": true, className: "fc-list-day-side-text" }, props.sideNavLinkAttrs), props.sideText)
  );
}
var DEFAULT_TIME_FORMAT = createFormatter({
  hour: "numeric",
  minute: "2-digit",
  meridiem: "short"
});
var ListViewEventRow = class extends BaseComponent {
  render() {
    let { props, context } = this;
    let { options } = context;
    let { seg, timeHeaderId, eventHeaderId, dateHeaderId } = props;
    let timeFormat = options.eventTimeFormat || DEFAULT_TIME_FORMAT;
    return y(EventContainer, Object.assign({}, props, { elTag: "tr", elClasses: [
      "fc-list-event",
      seg.eventRange.def.url && "fc-event-forced-url"
    ], defaultGenerator: () => renderEventInnerContent(seg, context), seg, timeText: "", disableDragging: true, disableResizing: true }), (InnerContent, eventContentArg) => y(
      _,
      null,
      buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId),
      y(
        "td",
        { "aria-hidden": true, className: "fc-list-event-graphic" },
        y("span", { className: "fc-list-event-dot", style: {
          borderColor: eventContentArg.borderColor || eventContentArg.backgroundColor
        } })
      ),
      y(InnerContent, { elTag: "td", elClasses: ["fc-list-event-title"], elAttrs: { headers: `${eventHeaderId} ${dateHeaderId}` } })
    ));
  }
};
function renderEventInnerContent(seg, context) {
  let interactiveAttrs = getSegAnchorAttrs(seg, context);
  return y("a", Object.assign({}, interactiveAttrs), seg.eventRange.def.title);
}
function buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId) {
  let { options } = context;
  if (options.displayEventTime !== false) {
    let eventDef = seg.eventRange.def;
    let eventInstance = seg.eventRange.instance;
    let doAllDay = false;
    let timeText;
    if (eventDef.allDay) {
      doAllDay = true;
    } else if (isMultiDayRange(seg.eventRange.range)) {
      if (seg.isStart) {
        timeText = buildSegTimeText(seg, timeFormat, context, null, null, eventInstance.range.start, seg.end);
      } else if (seg.isEnd) {
        timeText = buildSegTimeText(seg, timeFormat, context, null, null, seg.start, eventInstance.range.end);
      } else {
        doAllDay = true;
      }
    } else {
      timeText = buildSegTimeText(seg, timeFormat, context);
    }
    if (doAllDay) {
      let renderProps = {
        text: context.options.allDayText,
        view: context.viewApi
      };
      return y(ContentContainer, { elTag: "td", elClasses: ["fc-list-event-time"], elAttrs: {
        headers: `${timeHeaderId} ${dateHeaderId}`
      }, renderProps, generatorName: "allDayContent", customGenerator: options.allDayContent, defaultGenerator: renderAllDayInner, classNameGenerator: options.allDayClassNames, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount });
    }
    return y("td", { className: "fc-list-event-time" }, timeText);
  }
  return null;
}
function renderAllDayInner(renderProps) {
  return renderProps.text;
}
var ListView = class extends DateComponent {
  constructor() {
    super(...arguments);
    this.computeDateVars = memoize(computeDateVars);
    this.eventStoreToSegs = memoize(this._eventStoreToSegs);
    this.state = {
      timeHeaderId: getUniqueDomId(),
      eventHeaderId: getUniqueDomId(),
      dateHeaderIdRoot: getUniqueDomId()
    };
    this.setRootEl = (rootEl) => {
      if (rootEl) {
        this.context.registerInteractiveComponent(this, {
          el: rootEl
        });
      } else {
        this.context.unregisterInteractiveComponent(this);
      }
    };
  }
  render() {
    let { props, context } = this;
    let { dayDates, dayRanges } = this.computeDateVars(props.dateProfile);
    let eventSegs = this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges);
    return y(
      ViewContainer,
      { elRef: this.setRootEl, elClasses: [
        "fc-list",
        context.theme.getClass("table"),
        context.options.stickyHeaderDates !== false ? "fc-list-sticky" : ""
      ], viewSpec: context.viewSpec },
      y(Scroller, { liquid: !props.isHeightAuto, overflowX: props.isHeightAuto ? "visible" : "hidden", overflowY: props.isHeightAuto ? "visible" : "auto" }, eventSegs.length > 0 ? this.renderSegList(eventSegs, dayDates) : this.renderEmptyMessage())
    );
  }
  renderEmptyMessage() {
    let { options, viewApi } = this.context;
    let renderProps = {
      text: options.noEventsText,
      view: viewApi
    };
    return y(ContentContainer, { elTag: "div", elClasses: ["fc-list-empty"], renderProps, generatorName: "noEventsContent", customGenerator: options.noEventsContent, defaultGenerator: renderNoEventsInner, classNameGenerator: options.noEventsClassNames, didMount: options.noEventsDidMount, willUnmount: options.noEventsWillUnmount }, (InnerContent) => y(InnerContent, { elTag: "div", elClasses: ["fc-list-empty-cushion"] }));
  }
  renderSegList(allSegs, dayDates) {
    let { theme, options } = this.context;
    let { timeHeaderId, eventHeaderId, dateHeaderIdRoot } = this.state;
    let segsByDay = groupSegsByDay(allSegs);
    return y(NowTimer, { unit: "day" }, (nowDate, todayRange) => {
      let innerNodes = [];
      for (let dayIndex = 0; dayIndex < segsByDay.length; dayIndex += 1) {
        let daySegs = segsByDay[dayIndex];
        if (daySegs) {
          let dayStr = formatDayString(dayDates[dayIndex]);
          let dateHeaderId = dateHeaderIdRoot + "-" + dayStr;
          innerNodes.push(y(ListViewHeaderRow, { key: dayStr, cellId: dateHeaderId, dayDate: dayDates[dayIndex], todayRange }));
          daySegs = sortEventSegs(daySegs, options.eventOrder);
          for (let seg of daySegs) {
            innerNodes.push(y(ListViewEventRow, Object.assign({ key: dayStr + ":" + seg.eventRange.instance.instanceId, seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false, timeHeaderId, eventHeaderId, dateHeaderId }, getSegMeta(seg, todayRange, nowDate))));
          }
        }
      }
      return y(
        "table",
        { className: "fc-list-table " + theme.getClass("table") },
        y(
          "thead",
          null,
          y(
            "tr",
            null,
            y("th", { scope: "col", id: timeHeaderId }, options.timeHint),
            y("th", { scope: "col", "aria-hidden": true }),
            y("th", { scope: "col", id: eventHeaderId }, options.eventHint)
          )
        ),
        y("tbody", null, innerNodes)
      );
    });
  }
  _eventStoreToSegs(eventStore, eventUiBases, dayRanges) {
    return this.eventRangesToSegs(sliceEventStore(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, dayRanges);
  }
  eventRangesToSegs(eventRanges, dayRanges) {
    let segs = [];
    for (let eventRange of eventRanges) {
      segs.push(...this.eventRangeToSegs(eventRange, dayRanges));
    }
    return segs;
  }
  eventRangeToSegs(eventRange, dayRanges) {
    let { dateEnv } = this.context;
    let { nextDayThreshold } = this.context.options;
    let range = eventRange.range;
    let allDay = eventRange.def.allDay;
    let dayIndex;
    let segRange;
    let seg;
    let segs = [];
    for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex += 1) {
      segRange = intersectRanges(range, dayRanges[dayIndex]);
      if (segRange) {
        seg = {
          component: this,
          eventRange,
          start: segRange.start,
          end: segRange.end,
          isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
          isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
          dayIndex
        };
        segs.push(seg);
        if (!seg.isEnd && !allDay && dayIndex + 1 < dayRanges.length && range.end < dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
          seg.end = range.end;
          seg.isEnd = true;
          break;
        }
      }
    }
    return segs;
  }
};
function renderNoEventsInner(renderProps) {
  return renderProps.text;
}
function computeDateVars(dateProfile) {
  let dayStart = startOfDay(dateProfile.renderRange.start);
  let viewEnd = dateProfile.renderRange.end;
  let dayDates = [];
  let dayRanges = [];
  while (dayStart < viewEnd) {
    dayDates.push(dayStart);
    dayRanges.push({
      start: dayStart,
      end: addDays(dayStart, 1)
    });
    dayStart = addDays(dayStart, 1);
  }
  return { dayDates, dayRanges };
}
function groupSegsByDay(segs) {
  let segsByDay = [];
  let i3;
  let seg;
  for (i3 = 0; i3 < segs.length; i3 += 1) {
    seg = segs[i3];
    (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = [])).push(seg);
  }
  return segsByDay;
}
var css_248z3 = ':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}';
injectStyles(css_248z3);

// node_modules/@fullcalendar/list/index.js
var OPTION_REFINERS2 = {
  listDayFormat: createFalsableFormatter,
  listDaySideFormat: createFalsableFormatter,
  noEventsClassNames: identity,
  noEventsContent: identity,
  noEventsDidMount: identity,
  noEventsWillUnmount: identity
  // noEventsText is defined in base options
};
function createFalsableFormatter(input) {
  return input === false ? null : createFormatter(input);
}
var index3 = createPlugin({
  name: "@fullcalendar/list",
  optionRefiners: OPTION_REFINERS2,
  views: {
    list: {
      component: ListView,
      buttonTextKey: "list",
      listDayFormat: { month: "long", day: "numeric", year: "numeric" }
      // like "January 1, 2016"
    },
    listDay: {
      type: "list",
      duration: { days: 1 },
      listDayFormat: { weekday: "long" }
      // day-of-week is all we need. full date is probably in headerToolbar
    },
    listWeek: {
      type: "list",
      duration: { weeks: 1 },
      listDayFormat: { weekday: "long" },
      listDaySideFormat: { month: "long", day: "numeric", year: "numeric" }
    },
    listMonth: {
      type: "list",
      duration: { month: 1 },
      listDaySideFormat: { weekday: "long" }
      // day-of-week is nice-to-have
    },
    listYear: {
      type: "list",
      duration: { year: 1 },
      listDaySideFormat: { weekday: "long" }
      // day-of-week is nice-to-have
    }
  }
});

// node_modules/@fullcalendar/core/locales/ko.js
var l45 = {
  code: "ko",
  buttonText: {
    prev: "\uC774\uC804\uB2EC",
    next: "\uB2E4\uC74C\uB2EC",
    today: "\uC624\uB298",
    year: "\uB144\uB3C4",
    month: "\uC6D4",
    week: "\uC8FC",
    day: "\uC77C",
    list: "\uC77C\uC815\uBAA9\uB85D"
  },
  weekText: "\uC8FC",
  allDayText: "\uC885\uC77C",
  moreLinkText: "\uAC1C",
  noEventsText: "\uC77C\uC815\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"
};

// src/meal-timer.js
var MEAL_LIMIT_MS = 60 * 60 * 1e3;
var MEAL_PREFIX = "bb-staff:public-preview:meal:v1:";
var paused = (active) => Number.isFinite(active?.pausedAt);
function timerState(record, now = Date.now()) {
  const active = record?.active;
  if (!active) return { active: false, paused: false, elapsed: 0, remaining: MEAL_LIMIT_MS, over: 0 };
  const elapsed = Math.max(0, (paused(active) ? active.pausedAt : now) - active.startedAt - (active.pausedMs || 0));
  return { active: true, paused: paused(active), elapsed, remaining: Math.max(0, MEAL_LIMIT_MS - elapsed), over: Math.max(0, elapsed - MEAL_LIMIT_MS) };
}
function clockText(ms) {
  const sec = Math.floor(Math.max(0, ms) / 1e3);
  return `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;
}
function readMeal(storage, personId) {
  const raw = storage.getItem(MEAL_PREFIX + personId);
  if (raw === null) return { active: null, history: [] };
  const value = JSON.parse(raw);
  const validStart = (record) => record && Number.isFinite(record.startedAt) && record.startedAt >= 0 && record.startedAt <= 864e13 && typeof record.id === "string" && (record.pausedMs === void 0 || Number.isFinite(record.pausedMs) && record.pausedMs >= 0);
  const validActive = (record) => validStart(record) && (record.pausedAt == null || Number.isFinite(record.pausedAt) && record.pausedAt >= record.startedAt);
  if (!value || !Array.isArray(value.history) || value.active && !validActive(value.active) || value.history.some((record) => !validStart(record) || !Number.isFinite(record.endedAt) || record.endedAt < record.startedAt || record.endedAt > 864e13 || !Number.isFinite(record.elapsed) || record.elapsed !== record.endedAt - record.startedAt - (record.pausedMs || 0))) throw new Error("\uC2DD\uC0AC \uAE30\uB85D \uD615\uC2DD\uC744 \uD655\uC778\uD574\uC57C \uD569\uB2C8\uB2E4. \uAE30\uC874 \uC790\uB8CC\uB294 \uBCF4\uC874\uD588\uC2B5\uB2C8\uB2E4.");
  return value;
}
function transitionMeal(record, action, now, id) {
  if (!["start", "end", "pause", "resume"].includes(action) || !Number.isFinite(now) || now < 0) throw new Error("\uC2DD\uC0AC \uAE30\uB85D \uC694\uCCAD\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
  if (action === "start") {
    if (record.active) return record;
    return { ...record, active: { id, startedAt: now } };
  }
  const active = record.active;
  if (!active) return record;
  const pausedMs = active.pausedMs || 0;
  if (action === "pause") {
    if (paused(active)) return record;
    return { ...record, active: { ...active, pausedAt: Math.max(active.startedAt, now), pausedMs } };
  }
  if (action === "resume") {
    if (!paused(active)) return record;
    return { ...record, active: { ...active, pausedAt: null, pausedMs: pausedMs + Math.max(0, now - active.pausedAt) } };
  }
  const endedAt = Math.max(active.startedAt, now), totalPaused = Math.min(endedAt - active.startedAt, pausedMs + (paused(active) ? Math.max(0, endedAt - active.pausedAt) : 0));
  return { active: null, history: [...record.history, { id: active.id, startedAt: active.startedAt, endedAt, pausedMs: totalPaused, elapsed: endedAt - active.startedAt - totalPaused }] };
}

// src/daily-detail.js
var esc = (value) => String(value ?? "").replace(/[&<>"']/g, (c3) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c3]);
var monthLabel = (month2) => `20${month2.slice(0, 2)}\uB144 ${Number(month2.slice(2))}\uC6D4`;
var format = (value) => value === "" || value === null || value === void 0 ? "\uBBF8\uAE30\uC7AC" : typeof value === "number" ? value.toLocaleString("ko-KR") : String(value);
var dateKey = (month2, day) => `20${month2.slice(0, 2)}-${month2.slice(2)}-${String(day).padStart(2, "0")}`;
function calendarDays(month2) {
  const year = 2e3 + Number(month2.slice(0, 2)), index4 = Number(month2.slice(2)) - 1;
  const count = new Date(year, index4 + 1, 0).getDate(), offset = new Date(year, index4, 1).getDay();
  return Array.from({ length: Math.ceil((offset + count) / 7) * 7 }, (_3, i3) => i3 < offset || i3 >= offset + count ? null : i3 - offset + 1);
}
function selectDetailRow(rows, initialRow, month2, selectedId) {
  const candidates = rows.filter((r3) => r3.month === month2 && r3.personId === initialRow.personId);
  const row = selectedId ? candidates.find((r3) => r3.id === selectedId) : month2 === initialRow.month ? initialRow : candidates.length === 1 ? candidates[0] : void 0;
  return { row, candidates };
}
function dailyEntries(kind, row, localRecords2, month2, personId) {
  const days = {}, lastDay2 = Math.max(...calendarDays(month2).filter(Boolean));
  const add = (day, entry) => {
    if (Number.isInteger(Number(day)) && Number(day) >= 1 && Number(day) <= lastDay2) (days[Number(day)] ??= []).push(entry);
  };
  if (kind === "meals") for (const [day, cell] of Object.entries(row?.days || {})) add(day, { ...cell, label: "\uC2DD\uB300", local: false });
  else for (const category of row?.categories || []) for (const [day, cell] of Object.entries(category.days || {})) add(day, { ...cell, label: category.label, local: false });
  for (const record of localRecords2) if (record.kind === kind && record.personId === personId && record.month === month2 && record.date?.startsWith(`20${month2.slice(0, 2)}-${month2.slice(2)}-`)) add(Number(record.date.slice(-2)), { value: record.amount, label: record.label, note: record.note, local: true });
  return days;
}
function entryText(entry, kind) {
  return typeof entry.value === "number" ? `${format(entry.value)}${kind === "meals" ? "\uC6D0" : "\uBD84"}` : format(entry.value);
}
function entryClass(entry) {
  return entry.local ? "added" : typeof entry.value === "number" && entry.value < 0 ? "deducted" : "";
}
function openDailyDetail({ kind, initialRow, rows, months, localRecords: localRecords2, readRecords, storageKey }) {
  const opener = document.activeElement, scroll = { x: window.scrollX, y: window.scrollY };
  const host = document.querySelector("#overlays");
  host.querySelectorAll("dialog[open]").forEach((el) => el.close());
  const dialog = document.createElement("dialog");
  dialog.className = "daily-drawer";
  dialog.setAttribute("aria-labelledby", "daily-title");
  host.replaceChildren(dialog);
  let selectedMonth = initialRow.month, selectedDay = null, selectedId = initialRow.id, closing = false, closeTimeout, currentEntries = {};
  function close() {
    if (closing) return;
    closing = true;
    dialog.classList.add("is-closing");
    const finish = () => {
      clearTimeout(closeTimeout);
      if (dialog.open) dialog.close();
    };
    dialog.addEventListener("animationend", (event) => {
      if (event.target === dialog) finish();
    }, { once: true });
    closeTimeout = setTimeout(finish, matchMedia("(prefers-reduced-motion: reduce)").matches ? 160 : 340);
  }
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    close();
  });
  dialog.addEventListener("close", () => {
    clearTimeout(closeTimeout);
    removeEventListener("storage", refreshRecords);
    dialog.remove();
    if (!document.querySelector("dialog[open]")) {
      if (opener?.isConnected) opener.focus({ preventScroll: true });
      window.scrollTo(scroll.x, scroll.y);
    }
  }, { once: true });
  function render2() {
    const { row, candidates } = selectDetailRow(rows, initialRow, selectedMonth, selectedId);
    currentEntries = dailyEntries(kind, row, localRecords2, selectedMonth, initialRow.personId);
    const recordedDays = Object.keys(currentEntries).map(Number).sort((a3, b3) => a3 - b3), today3 = /* @__PURE__ */ new Date();
    if (!selectedDay) selectedDay = recordedDays[0] || 1;
    const totals = kind === "meals" ? Object.entries(row?.totals || {}).map(([label, c3]) => [label, c3.value]) : (row?.categories || []).map((c3) => [c3.label, c3.total, c3.carry]);
    const index4 = months.indexOf(selectedMonth);
    dialog.innerHTML = `
   <header class="daily-heading"><div><p>${esc(row?.rawTeam ?? initialRow.rawTeam)} \xB7 \uAC1C\uC778\uBCC4 \uC6D4\uAC04 \uB0B4\uC5ED</p><h2 id="daily-title">${esc(initialRow.name)} <span>${kind === "meals" ? "\uC2DD\uB300" : "OT\xB7\uC9C0\uAC01"}</span></h2></div><button data-daily-close aria-label="\uAC1C\uC778 \uB0B4\uC5ED \uB2EB\uAE30">\uB2EB\uAE30 \u2715</button></header>
   <div class="daily-scroll">
    <div class="daily-month-nav"><button data-daily-month="${index4 - 1}" ${index4 <= 0 ? "disabled" : ""} aria-label="\uC774\uC804 \uB2EC">\u2039</button><label>\uC870\uD68C \uC6D4<select id="daily-month" aria-label="\uAC1C\uC778 \uB0B4\uC5ED \uC870\uD68C \uC6D4">${months.map((m3) => `<option value="${m3}" ${m3 === selectedMonth ? "selected" : ""}>${monthLabel(m3)}</option>`).join("")}</select></label><button data-daily-month="${index4 + 1}" ${index4 >= months.length - 1 ? "disabled" : ""} aria-label="\uB2E4\uC74C \uB2EC">\u203A</button></div>
    ${candidates.length > 1 ? `<label class="daily-row-field">\uAC00\uC838\uC628 \uAE30\uB85D \uC120\uD0DD<select id="daily-row"><option value="" ${!row ? "selected" : ""}>\uD655\uC778\uD560 \uAE30\uB85D\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694</option>${candidates.map((r3) => `<option value="${esc(r3.id)}" ${row?.id === r3.id ? "selected" : ""}>${esc(r3.originalName || r3.name)} \xB7 ${esc(r3.rawTeam)} \xB7 ${esc(r3.source?.tab)} / ${esc(r3.source?.cell)}</option>`).join("")}</select></label>` : ""}
    ${row?.identityNeedsReview ? '<p class="notice">\uC2A4\uCF00\uC904 \uBA85\uBD80\uC640\uC758 \uC774\uB984\xB7\uD300 \uC5F0\uACB0\uC740 \uD655\uC778 \uC911\uC785\uB2C8\uB2E4. \uC120\uD0DD\uD55C \uAE30\uB85D\uC744 \uADF8\uB300\uB85C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.</p>' : ""}
    ${!row ? `<p class="notice">${candidates.length > 1 ? "\uC774 \uC9C1\uC6D0\uC758 \uAE30\uB85D\uC774 \uC5EC\uB7EC \uD589\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uC704\uC5D0\uC11C \uD655\uC778\uD560 \uAE30\uB85D\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694." : "\uC774 \uC9C1\uC6D0\uC758 \uD574\uB2F9 \uC6D4 \uAC00\uC838\uC628 \uAE30\uB85D\uC740 \uC5C6\uC2B5\uB2C8\uB2E4."}</p>` : ""}
    <div class="daily-calendar-heading"><h3>${monthLabel(selectedMonth)}</h3><span>\uB0B4\uC5ED ${recordedDays.length}\uC77C</span></div>
    <p class="daily-help"><span class="daily-desktop-help">\uB0A0\uC9DC\uB97C \uB204\uB974\uBA74 \uC544\uB798\uC5D0\uC11C \uAE08\uC561\xB7\uC2DC\uAC04\uACFC \uBA54\uBAA8\uB97C \uBCFC \uC218 \uC788\uC5B4\uC694.</span><span class="daily-mobile-help">\uD45C\uC2DC\uB41C \uB0A0\uC9DC\uB97C \uB204\uB974\uBA74 \uC0C1\uC138 \uB0B4\uC5ED\uC774 \uBCF4\uC5EC\uC694.</span></p>
    <div class="daily-calendar-scroll"><div class="daily-calendar" aria-label="${esc(initialRow.name)} ${monthLabel(selectedMonth)} \uB0B4\uC5ED \uB2EC\uB825">
     <div class="daily-weekdays">${["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"].map((w4) => `<span>${w4}</span>`).join("")}</div>
     <div class="daily-grid">${calendarDays(selectedMonth).map((day) => {
      if (!day) return '<div class="daily-blank" aria-hidden="true"></div>';
      const items = currentEntries[day] || [], isToday = dateKey(selectedMonth, day) === `${today3.getFullYear()}-${String(today3.getMonth() + 1).padStart(2, "0")}-${String(today3.getDate()).padStart(2, "0")}`;
      return `<button class="daily-day ${day === selectedDay ? "selected" : ""} ${isToday ? "today" : ""}" data-daily-day="${day}" aria-pressed="${day === selectedDay}" aria-label="${esc(`${Number(selectedMonth.slice(2))}\uC6D4 ${day}\uC77C, ${items.length ? items.map((e3) => `${e3.label} ${entryText(e3, kind)}`).join(", ") : "\uB0B4\uC5ED \uC5C6\uC74C"}`)}">
       <span class="daily-day-number">${day}${isToday ? "<small>\uC624\uB298</small>" : ""}</span>
       <span class="daily-desktop-entries">${items.slice(0, 2).map((entry) => `<span class="daily-entry ${entryClass(entry)}">${kind === "attendance" ? `<span>${esc(entry.label)}</span>` : ""}<strong>${esc(entryText(entry, kind))}</strong>${entry.local ? "<span>\uCD94\uAC00 \uAE30\uB85D</span>" : ""}</span>`).join("")}${items.length > 2 ? `<span class="daily-more">+${items.length - 2}\uAC74</span>` : ""}${items.some((e3) => e3.note) ? '<span class="daily-note-dot">\uBA54\uBAA8</span>' : ""}</span>
       ${items.length ? `<span class="daily-mobile-count" aria-hidden="true"><i class="${items.some((e3) => e3.local) ? "added" : ""}"></i>${items.length}\uAC74</span>` : ""}
      </button>`;
    }).join("")}</div>
    </div></div>
    <section class="daily-selection" aria-live="polite"></section>
    <div class="daily-key"><span><i></i> \uAC00\uC838\uC628 \uB0B4\uC5ED</span><span><i class="added"></i> \uBE0C\uB77C\uC6B0\uC800 \uCD94\uAC00</span></div>
    ${kind === "meals" ? '<p class="daily-help">0\uC6D0\uACFC \uBBF8\uAE30\uC7AC\uB294 \uAD6C\uBD84\uD574 \uD45C\uC2DC\uD569\uB2C8\uB2E4.</p>' : ""}
    ${totals.length ? '<h3 class="daily-totals-heading">\uAC00\uC838\uC628 \uC6D4\uBCC4 \uD569\uACC4</h3>' : ""}
    <div class="daily-summary">${totals.map(([label, value, carry]) => `<div><span>${esc(label)}</span><strong>${esc(format(value))}${typeof value === "number" ? kind === "attendance" ? "\uBD84" : ["\uC0AC\uC6A9", "\uD55C\uB3C4", "\uC794\uC561"].includes(label) ? "\uC6D0" : "" : ""}</strong>${carry !== void 0 && carry !== "" ? `<small>\uC774\uC6D4 ${esc(format(carry))}\uBD84</small>` : ""}</div>`).join("")}</div>
   </div>`;
    renderDay();
  }
  function renderDay() {
    const items = currentEntries[selectedDay] || [];
    dialog.querySelectorAll("[data-daily-day]").forEach((el) => {
      const active = Number(el.dataset.dailyDay) === selectedDay;
      el.classList.toggle("selected", active);
      el.setAttribute("aria-pressed", String(active));
    });
    dialog.querySelector(".daily-selection").innerHTML = `<div class="daily-selection-heading"><h3>${Number(selectedMonth.slice(2))}\uC6D4 ${selectedDay}\uC77C \uB0B4\uC5ED</h3><span>${items.length}\uAC74</span></div>${items.length ? items.map((entry) => `<article class="daily-record"><div><strong>${esc(entry.label)}</strong><strong class="${entryClass(entry)}">${esc(entryText(entry, kind))}</strong></div>${entry.note ? `<p class="daily-memo">${esc(entry.note)}</p>` : "<p>\uBA54\uBAA8 \uC5C6\uC74C</p>"}<small>${entry.local ? "\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uCD94\uAC00\uD55C \uAE30\uB85D" : `\uAC00\uC838\uC628 \uAE30\uB85D${entry.source ? " \xB7 " + esc(entry.source.tab) + " / " + esc(entry.source.cell) : ""}`}</small></article>`).join("") : '<p class="empty">\uAE30\uC7AC\uB41C \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p>'}`;
  }
  function changeMonth(next) {
    selectedMonth = next;
    selectedId = null;
    selectedDay = null;
    render2();
    dialog.querySelector("#daily-month").focus({ preventScroll: true });
  }
  function refreshRecords(event) {
    if (event.key !== storageKey || !readRecords || !dialog.open || closing) return;
    try {
      localRecords2 = readRecords();
      const y3 = dialog.querySelector(".daily-scroll").scrollTop, active = document.activeElement;
      const focus = active?.dataset.dailyDay ? `[data-daily-day="${active.dataset.dailyDay}"]` : active?.hasAttribute("data-daily-close") ? "[data-daily-close]" : active?.id ? `#${active.id}` : null;
      render2();
      if (focus) dialog.querySelector(focus)?.focus({ preventScroll: true });
      dialog.querySelector(".daily-scroll").scrollTop = y3;
    } catch {
    }
  }
  addEventListener("storage", refreshRecords);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) close();
      return;
    }
    const button = event.target.closest("button");
    if (!button) return;
    if (button.hasAttribute("data-daily-close")) {
      close();
      return;
    }
    if (button.dataset.dailyMonth !== void 0) {
      const next = months[Number(button.dataset.dailyMonth)];
      if (next) changeMonth(next);
      return;
    }
    if (button.dataset.dailyDay) {
      selectedDay = Number(button.dataset.dailyDay);
      renderDay();
    }
  });
  dialog.addEventListener("change", (event) => {
    if (event.target.id === "daily-month") changeMonth(event.target.value);
    if (event.target.id === "daily-row") {
      selectedId = event.target.value;
      selectedDay = null;
      render2();
      dialog.querySelector("#daily-row").focus({ preventScroll: true });
    }
  });
  render2();
  dialog.showModal();
  return dialog;
}

// src/meal-dashboard.js
function mealDate(timestamp) {
  const date = new Date(timestamp + 9 * 60 * 60 * 1e3);
  return Number.isFinite(date.getTime()) ? date.toISOString().slice(0, 10) : "";
}
var mealMonth = (timestamp) => {
  const day = mealDate(timestamp);
  return day.slice(2, 4) + day.slice(5, 7);
};
function mealPeople(roster, month2) {
  const groups = /* @__PURE__ */ new Map();
  for (const row of roster) {
    if (!groups.has(row.personId)) groups.set(row.personId, []);
    groups.get(row.personId).push(row);
  }
  return [...groups.values()].map((rows) => rows.find((r3) => r3.month === month2) || rows.filter((r3) => r3.month <= month2).sort((a3, b3) => b3.month.localeCompare(a3.month))[0] || rows[0]);
}
var freshSummary = () => ({ count: 0, total: 0, average: 0, longest: 0, overCount: 0, overTotal: 0 });
function accumulate(summary, record) {
  summary.count++;
  summary.total += record.elapsed;
  summary.average = summary.total / summary.count;
  summary.longest = Math.max(summary.longest, record.elapsed);
  if (record.elapsed > MEAL_LIMIT_MS) {
    summary.overCount++;
    summary.overTotal += record.elapsed - MEAL_LIMIT_MS;
  }
}
function buildMealDashboard({ roster, records, month: month2, team: team2 = "\uC804\uCCB4", search: search2 = "", now = Date.now() }) {
  const matches2 = (p3) => (team2 === "\uC804\uCCB4" || p3.teams?.includes(team2)) && (!search2 || [p3.name, p3.rawTeam, p3.originalName].some((s3) => s3?.includes(search2)));
  const people = mealPeople(roster, month2).filter(matches2), currentPeople = mealPeople(roster, mealMonth(now)).filter(matches2);
  const completed = [], staff = [], days = /* @__PURE__ */ new Map(), totals = freshSummary(), errors = [];
  for (const person of people) {
    const record = records[person.personId];
    if (record?.error) {
      errors.push({ person, error: record.error });
      continue;
    }
    const summary = { ...freshSummary(), person };
    for (const entry of record?.history || []) {
      if (mealMonth(entry.startedAt) !== month2) continue;
      const item = { ...entry, person, date: mealDate(entry.startedAt) };
      completed.push(item);
      accumulate(summary, item);
      accumulate(totals, item);
      if (!days.has(item.date)) days.set(item.date, { ...freshSummary(), date: item.date });
      accumulate(days.get(item.date), item);
    }
    staff.push(summary);
  }
  const active = currentPeople.flatMap((person) => {
    const record = records[person.personId];
    if (!record?.active || record.error) return [];
    return [{ person, ...record.active, ...timerState(record, now) }];
  }).sort((a3, b3) => a3.startedAt - b3.startedAt);
  return { completed: completed.sort((a3, b3) => b3.startedAt - a3.startedAt), staff, days: [...days.values()].sort((a3, b3) => a3.date.localeCompare(b3.date)), totals, active, errors, peopleCount: staff.filter((s3) => s3.count > 0).length };
}
function demoMealRecords(roster, month2, now = Date.now()) {
  const people = mealPeople(roster, month2), records = {};
  people.forEach((person, index4) => {
    const history2 = [2, 7, 14, 19].map((day, n2) => {
      const startedAt = Date.parse(`20${month2.slice(0, 2)}-${month2.slice(2)}-${String(day).padStart(2, "0")}T${index4 % 2 ? "13" : "12"}:00:00+09:00`);
      const elapsed = [45, 52, 58, 64, 71][(index4 + n2) % 5] * 6e4;
      return { id: `demo-${person.personId}-${n2}`, startedAt, endedAt: startedAt + elapsed, elapsed };
    });
    records[person.personId] = { history: history2, active: index4 < 3 ? { id: `demo-active-${index4}`, startedAt: now - [22, 47, 67][index4] * 6e4 } : null };
  });
  return records;
}

// src/staff-activity.js
var ACTIVITY_PREFIX = "bb-staff:public-preview:activity:v1:";
var ACTIVITY_TYPES = { meal: { label: "\uC2DD\uC0AC", status: "\uC2DD\uC0AC\uC911", pausedStatus: "\uC2DD\uC0AC \uC911\uB2E8" }, rest: { label: "\uD734\uC2DD", status: "\uD734\uC2DD\uC911" }, outing: { label: "\uC678\uCD9C", status: "\uC678\uCD9C\uC911" }, offsite: { label: "\uC678\uADFC", status: "\uC678\uADFC\uC911" } };
var activityStatus = (active) => active.kind === "meal" && Number.isFinite(active.pausedAt) ? ACTIVITY_TYPES.meal.pausedStatus : ACTIVITY_TYPES[active.kind].status;
function readActivity(storage, id) {
  const raw = storage.getItem(ACTIVITY_PREFIX + id);
  if (raw === null) return { active: null, history: [] };
  const record = JSON.parse(raw), valid = (r3) => r3 && ["rest", "outing", "offsite"].includes(r3.kind) && typeof r3.id === "string" && Number.isFinite(r3.startedAt) && r3.startedAt >= 0 && r3.startedAt <= 864e13;
  if (!record || !Array.isArray(record.history) || record.active && !valid(record.active) || record.history.some((r3) => !valid(r3) || !Number.isFinite(r3.endedAt) || r3.endedAt < r3.startedAt || r3.endedAt > 864e13 || r3.elapsed !== r3.endedAt - r3.startedAt)) throw new Error("\uC0C1\uD0DC \uAE30\uB85D \uD615\uC2DD\uC744 \uD655\uC778\uD574\uC57C \uD569\uB2C8\uB2E4. \uAE30\uC874 \uAE30\uB85D\uC740 \uBCF4\uC874\uD588\uC2B5\uB2C8\uB2E4.");
  return record;
}
function readStaffState(storage, id) {
  const result = { meal: null, other: null, active: [], errors: [] };
  try {
    result.meal = readMeal(storage, id);
    if (result.meal.active) result.active.push({ ...result.meal.active, kind: "meal" });
  } catch (e3) {
    result.errors.push(e3.message);
  }
  try {
    result.other = readActivity(storage, id);
    if (result.other.active) result.active.push(result.other.active);
  } catch (e3) {
    result.errors.push(e3.message);
  }
  return result;
}
async function updateStaffActivity(storage, id, kind, action, locks = globalThis.navigator?.locks, now = () => Date.now(), expectedActiveId) {
  if (!ACTIVITY_TYPES[kind] || !["start", "end", "pause", "resume"].includes(action) || kind !== "meal" && ["pause", "resume"].includes(action)) throw new Error("\uC0C1\uD0DC \uBCC0\uACBD \uC694\uCCAD\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
  const work = () => {
    const time3 = now();
    if (!Number.isFinite(time3) || time3 < 0 || time3 > 864e13) throw new Error("\uAE30\uAE30 \uC2DC\uAC04\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
    if (action === "start") {
      const state = readStaffState(storage, id);
      if (state.errors.length) throw new Error(state.errors.join(" "));
      if (state.active.some((r3) => r3.kind !== kind)) throw new Error("\uC9C4\uD589 \uC911\uC778 \uC0C1\uD0DC\uB97C \uBA3C\uC800 \uC885\uB8CC\uD574 \uC8FC\uC138\uC694.");
      if (state.active.some((r3) => r3.kind === kind)) throw new Error("\uC774\uBBF8 " + ACTIVITY_TYPES[kind].status + "\uC785\uB2C8\uB2E4. \uD654\uBA74\uC744 \uC0C8\uB85C\uACE0\uCE68\uD574 \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
    }
    if (kind === "meal") {
      const record2 = readMeal(storage, id);
      if (action !== "start" && expectedActiveId !== void 0 && record2.active?.id !== expectedActiveId) throw new Error("\uD604\uC7AC \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB410\uC2B5\uB2C8\uB2E4. \uD654\uBA74\uC744 \uC0C8\uB85C\uACE0\uCE68\uD574 \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
      if (["pause", "resume"].includes(action) && !record2.active) throw new Error("\uC9C4\uD589 \uC911\uC778 \uC2DD\uC0AC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
      if (action === "pause" && Number.isFinite(record2.active?.pausedAt)) throw new Error("\uC774\uBBF8 \uC2DD\uC0AC\uB97C \uC911\uB2E8\uD55C \uC0C1\uD0DC\uC785\uB2C8\uB2E4.");
      if (action === "resume" && !Number.isFinite(record2.active?.pausedAt)) throw new Error("\uC911\uB2E8 \uC911\uC778 \uC2DD\uC0AC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
      const next2 = transitionMeal(record2, action, time3, crypto.randomUUID());
      if (next2 !== record2) storage.setItem(MEAL_PREFIX + id, JSON.stringify(next2));
      return next2;
    }
    const record = readActivity(storage, id);
    let next = record;
    if (action === "end" && expectedActiveId !== void 0 && record.active?.id !== expectedActiveId) throw new Error("\uD604\uC7AC \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB410\uC2B5\uB2C8\uB2E4. \uD654\uBA74\uC744 \uC0C8\uB85C\uACE0\uCE68\uD574 \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
    if (action === "start" && !record.active) next = { ...record, active: { id: crypto.randomUUID(), kind, startedAt: time3 } };
    if (action === "end" && record.active) {
      if (record.active.kind !== kind) throw new Error("\uD604\uC7AC \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB410\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
      const endedAt = Math.max(time3, record.active.startedAt);
      next = { active: null, history: [...record.history, { ...record.active, endedAt, elapsed: endedAt - record.active.startedAt }] };
    }
    if (next !== record) storage.setItem(ACTIVITY_PREFIX + id, JSON.stringify(next));
    return next;
  };
  return locks ? locks.request(MEAL_PREFIX + id, work) : work();
}
function recordsForActivity(states, kind) {
  return Object.fromEntries(Object.entries(states).map(([id, state]) => {
    if (kind === "meal") return [id, state.meal || { error: state.errors.join(" "), history: [] }];
    return [id, state.other ? { active: state.other.active?.kind === kind ? state.other.active : null, history: state.other.history.filter((r3) => r3.kind === kind) } : { error: state.errors.join(" "), history: [] }];
  }));
}

// src/staff-view.js
var esc2 = (value) => String(value ?? "").replace(/[&<>"']/g, (c3) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c3]);
var time = (value) => new Date(value).toLocaleTimeString("ko-KR", { timeZone: "Asia/Seoul", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
var duration = (value) => value === null ? "\u2014" : clockText(value);
var metric = (label, value, note) => `<div class="meal-stat"><span>${label}</span><strong>${esc2(value)}</strong><small>${note}</small></div>`;
function employeeStatusView({ person, state, mealPeople: mealPeople2 = [], transitionFrom = "" }) {
  const active = state.active[0], descriptions = { meal: "\uC2DD\uC0AC\uD558\uB7EC \uAC08 \uB54C \uB20C\uB7EC \uC8FC\uC138\uC694.", rest: "\uD734\uC2DD\uC744 \uC2DC\uC791\uD560 \uB54C \uB20C\uB7EC \uC8FC\uC138\uC694.", outing: "\uC7A0\uC2DC \uC678\uCD9C\uD560 \uB54C \uB20C\uB7EC \uC8FC\uC138\uC694.", offsite: "\uC678\uBD80 \uC5C5\uBB34\uB97C \uC2DC\uC791\uD560 \uB54C \uB20C\uB7EC \uC8FC\uC138\uC694." };
  return `<section class="panel employee-status-home"><div class="employee-welcome"><span class="employee-avatar" aria-hidden="true">${esc2(Array.from(person.name || "")[0] || "")}</span><div><p>${esc2(person.rawTeam)}</p><h2>${esc2(person.name)} \uB2D8, \uC548\uB155\uD558\uC138\uC694.</h2><p>\uC9C0\uAE08 \uC0C1\uD0DC\uB97C \uC54C\uB824 \uC8FC\uC138\uC694.</p></div><span class="badge" role="status">${active ? activityStatus(active) : "\uADFC\uBB34\uC911"}</span></div>
 <div class="employee-status-actions meal-only-actions">${Object.entries(ACTIVITY_TYPES).filter(([kind]) => kind === "meal" || state.active.some((r3) => r3.kind === kind)).map(([kind, type]) => {
    const current = state.active.some((r3) => r3.kind === kind), disabled = !current && state.active.length > 0 || !current && state.errors.length > 0;
    const record = state.active.find((r3) => r3.kind === kind), started = record?.startedAt, paused2 = Number.isFinite(record?.pausedAt), expected = esc2(record?.id || "");
    if (kind === "meal") {
      const from = transitionFrom ? " from-" + transitionFrom : "";
      return `<article class="status-action meal-card ${current ? "is-active" : ""} ${paused2 ? "is-paused" : ""}"><h3>${type.label}</h3><p>${current ? paused2 ? "\uC5C5\uBB34\uB97C \uB9C8\uCE58\uBA74 \uC2DD\uC0AC \uC7AC\uAC1C\uB97C, \uC2DD\uC0AC\uB97C \uB05D\uB0C8\uC73C\uBA74 \uC885\uB8CC\uB97C \uB20C\uB7EC \uC8FC\uC138\uC694." : "\uC5C5\uBB34\uB85C \uBD88\uB824\uAC00\uBA74 \uC911\uB2E8\uC744, \uB3CC\uC544\uC624\uBA74 \uC885\uB8CC\uB97C \uB20C\uB7EC \uC8FC\uC138\uC694." : descriptions[kind]}</p>${current ? `<p class="meal-start-time">\uC2DD\uC0AC \uC2DC\uC791 <strong>${time(started)}</strong>${paused2 ? ' <span class="badge">\uC911\uB2E8 \uC911</span>' : ""}</p>` : ""}<div class="meal-controls"><button class="meal-toggle${current ? " is-on" : ""}${paused2 ? " is-paused" : ""}${from}" data-staff-kind="meal" data-staff-action="${current ? "end" : "start"}" data-expected-active="${expected}" aria-pressed="${current}" ${disabled ? "disabled" : ""}><span class="meal-toggle-track" aria-hidden="true"><span class="meal-toggle-knob"></span></span><span class="meal-toggle-label">${current ? "\uC2DD\uC0AC\uC885\uB8CC" : "\uC2DD\uC0AC\uC911"}</span></button>${current ? `<button class="meal-side${from}" data-staff-kind="meal" data-staff-action="${paused2 ? "resume" : "pause"}" data-expected-active="${expected}">${paused2 ? "\uC2DD\uC0AC \uC7AC\uAC1C" : "\uC2DD\uC0AC \uC911\uB2E8"}</button>` : ""}</div></article>`;
    }
    return `<article class="status-action ${current ? "is-active" : ""}"><h3>${type.label}</h3><p>${current ? "\uB3CC\uC544\uC624\uBA74 \uC544\uB798 \uBC84\uD2BC\uC744 \uB20C\uB7EC \uC8FC\uC138\uC694." : descriptions[kind]}</p><button class="${current ? "end-meal" : "primary"}" data-staff-kind="${kind}" data-staff-action="${current ? "end" : "start"}" data-expected-active="${expected}" ${disabled ? "disabled" : ""}>${current ? type.label + "\uC885\uB8CC" : type.status}</button></article>`;
  }).join("")}</div>${state.active.some((r3) => r3.kind !== "meal") ? '<p class="status-guidance">\uC9C4\uD589 \uC911\uC778 \uC774\uC804 \uC0C1\uD0DC\uB97C \uBA3C\uC800 \uC885\uB8CC\uD574 \uC8FC\uC138\uC694.</p>' : ""}
 ${state.errors.length ? `<p class="form-error" role="alert">${esc2(state.errors.join(" "))}</p>` : ""}<p class="meal-record-notice">\uC2DD\uC0AC\uC758 \uC2DC\uC791\xB7\uC885\uB8CC \uC774\uB825\uC740 \uAD00\uB9AC\uC790\uC5D0\uAC8C \uAE30\uB85D\uB429\uB2C8\uB2E4.</p></section>
 <section class="panel team-meal-presence"><div class="panel-heading"><div><h2>\uC9C0\uAE08 \uC2DD\uC0AC\uC911\uC778 \uC9C1\uC6D0 <span class="badge">${mealPeople2.length}\uBA85</span></h2><p>\uB2E4\uB978 \uD300\uC758 \uC2DD\uC0AC \uD604\uD669\uB3C4 \uD568\uAED8 \uD655\uC778\uD574\uC694. \uD604\uC7AC\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uAE30\uB85D\uD55C \uC0C1\uD0DC\uC785\uB2C8\uB2E4.</p></div></div>${mealPeople2.length ? `<div class="team-meal-list">${mealPeople2.map((p3) => `<article><strong>${esc2(p3.name)}</strong><span>${esc2(p3.rawTeam)}</span><span>\uC2DC\uC791 ${mealDate(p3.startedAt)} ${time(p3.startedAt)}</span><span class="badge">${Number.isFinite(p3.pausedAt) ? "\uC2DD\uC0AC \uC911\uB2E8" : "\uC2DD\uC0AC\uC911"}</span></article>`).join("")}</div>` : '<p class="empty">\uD604\uC7AC \uC2DD\uC0AC\uC911\uC73C\uB85C \uAE30\uB85D\uB41C \uC9C1\uC6D0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p>'}</section>
 <section class="employee-shortcuts" aria-label="\uB0B4 \uC5C5\uBB34 \uBC14\uB85C\uAC00\uAE30"><a href="#/team-calendar?tab=roster"><strong>\uB0B4 \uADFC\uBB34\uD45C</strong><span>\uB098\uC758 \uD734\uBB34\uC640 \uADFC\uBB34 \uC77C\uC815</span></a><a href="#/meals"><strong>\uB0B4 \uC2DD\uB300</strong><span>\uC0AC\uC6A9 \uD55C\uB3C4\uC640 \uC794\uC561</span></a><a href="#/team-snacks"><strong>\uD300 \uAC04\uC2DD\uBE44</strong><span>\uAC04\uC2DD \uC8FC\uBB38 \uAE08\uC561 \uAE30\uB85D</span></a><a href="#/attendance"><strong>\uB0B4 OT\xB7\uC9C0\uAC01</strong><span>\uB098\uC758 \uC6D4\uBCC4 \uAE30\uB85D</span></a></section>`;
}
function activityDashboardView({ stats, month: month2, kind, live, demo, showAll, errors = [] }) {
  const type = ACTIVITY_TYPES[kind], label = type.label, meal = kind === "meal", { totals, staff, completed, days } = stats, max = Math.max(1, ...days.map((d2) => d2.average));
  const title = `20${month2.slice(0, 2)}\uB144 ${Number(month2.slice(2))}\uC6D4`;
  return `<div class="meal-admin-toolbar"><p>\uC9C1\uC6D0\uB4E4\uC758 \uD604\uC7AC \uC0C1\uD0DC\uC640 \uAE30\uB85D\uC744 \uD655\uC778\uD569\uB2C8\uB2E4.</p><button data-action="meal-demo">${demo ? "\uBE0C\uB77C\uC6B0\uC800 \uAE30\uB85D\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30" : "\uC608\uC2DC \uD1B5\uACC4 \uBCF4\uAE30"}</button></div>
 ${demo ? '<div class="notice"><strong>\uC608\uC2DC \uD1B5\uACC4</strong> \xB7 \uD654\uBA74 \uAC80\uC218\uC6A9 \uAE30\uB85D\uC774\uBA70 \uC800\uC7A5\uB41C \uAE30\uB85D\uC740 \uBCC0\uACBD\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</div>' : '<p class="meal-preview-note">\uD604\uC7AC\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC758 \uAE30\uB85D\uC785\uB2C8\uB2E4. \uAE30\uAE30 \uAC04 \uACF5\uC720\uC640 \uAD00\uB9AC\uC790 \uC811\uADFC \uAD8C\uD55C\uC740 \uC6B4\uC601 \uC11C\uBC84\xB7\uB85C\uADF8\uC778 \uC5F0\uACB0 \uD6C4 \uC801\uC6A9\uB429\uB2C8\uB2E4.</p>'}
 ${errors.length ? `<div class="notice" role="alert">\uD655\uC778\uC774 \uD544\uC694\uD55C \uC800\uC7A5 \uAE30\uB85D\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uAE30\uC874 \uAC12\uC740 \uBCF4\uC874\uD588\uC2B5\uB2C8\uB2E4.<ul>${errors.map((e3) => `<li>${esc2(e3)}</li>`).join("")}</ul></div>` : ""}
 <section class="panel meal-live-panel"><div class="panel-heading"><div><h2>\uC9C1\uC6D0 \uD604\uC7AC \uC0C1\uD0DC <span class="meal-live-count">${live.length}\uBA85</span></h2><p>\uC120\uD0DD\uD55C \uD300\xB7\uC9C1\uC6D0 \uAE30\uC900\uC785\uB2C8\uB2E4. \uC870\uD68C \uC6D4\uACFC \uAD00\uACC4\uC5C6\uC774 \uD604\uC7AC \uC9C4\uD589 \uC0C1\uD0DC\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.</p></div></div>
 <div class="activity-live-summary">${Object.entries(ACTIVITY_TYPES).map(([key, t3]) => `<span>${t3.status} <strong>${live.filter((r3) => r3.kind === key).length}\uBA85</strong></span>`).join("")}</div>
 ${live.length ? `<div class="meal-live-grid">${live.map((r3) => `<article class="meal-live-card ${r3.kind === "meal" && r3.over ? "is-over" : ""}" data-live-person="${esc2(r3.person.personId)}" data-live-kind="${r3.kind}"><div class="meal-live-staff"><div><h3>${esc2(r3.person.name)}</h3><p>${esc2(r3.person.rawTeam)}</p></div><span class="badge">${r3.paused ? ACTIVITY_TYPES.meal.pausedStatus : ACTIVITY_TYPES[r3.kind].status}</span></div><span class="meal-live-label">${r3.paused ? "\uC911\uB2E8 \uC804\uAE4C\uC9C0 \uC2DD\uC0AC \uC2DC\uAC04" : "\uACBD\uACFC \uC2DC\uAC04"}</span><strong class="meal-live-elapsed">${duration(r3.elapsed)}</strong><p class="meal-live-start">\uC2DC\uC791 ${mealDate(r3.startedAt)} ${time(r3.startedAt)}</p><p class="meal-live-over">${r3.kind === "meal" ? r3.over ? "60\uBD84 \uCD08\uACFC " + duration(r3.over) : "\uC2DD\uC0AC \uAE30\uC900 60\uBD84 \uC774\uB0B4" : "\uC2DC\uAC04 \uC81C\uD55C \uC5C6\uC74C"}</p>${demo ? "" : `<button data-admin-end="${r3.kind}" data-active-id="${esc2(r3.id)}" data-person-id="${esc2(r3.person.personId)}">\uC885\uB8CC \uCC98\uB9AC</button>`}</article>`).join("")}</div>` : '<p class="empty">\uC2DD\uC0AC\xB7\uD734\uC2DD\xB7\uC678\uCD9C\xB7\uC678\uADFC \uC911\uC778 \uC9C1\uC6D0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p>'}</section>
 <div class="activity-stat-tabs" role="group" aria-label="\uC6D4\uBCC4 \uC0C1\uD0DC \uAE30\uB85D \uC120\uD0DD">${Object.entries(ACTIVITY_TYPES).map(([key, t3]) => `<button data-activity-tab="${key}" aria-pressed="${kind === key}" class="${kind === key ? "active" : ""}">${t3.label} \uAE30\uB85D</button>`).join("")}</div>
 <div class="meal-section-heading"><h2>${title} ${label} \uD1B5\uACC4</h2><p>\uC644\uB8CC\uD55C \uAE30\uB85D\uB9CC \uC9D1\uACC4\uD569\uB2C8\uB2E4. \uBD84:\uCD08 \uB2E8\uC704, \uD55C\uAD6D \uC2DC\uAC01\uC758 \uC2DC\uC791\uC77C \uAE30\uC900\uC785\uB2C8\uB2E4.</p></div>
 <div class="meal-stats">${metric("\uC644\uB8CC\uD55C " + label, totals.count + "\uD68C", stats.peopleCount + "\uBA85 \uAE30\uB85D")}${metric("\uD3C9\uADE0 " + label + "\uC2DC\uAC04", duration(totals.count ? totals.average : null), "\uC644\uB8CC \uAE30\uB85D \uC804\uCCB4 \uD3C9\uADE0")}${metric("\uB204\uC801 " + label + "\uC2DC\uAC04", duration(totals.count ? totals.total : null), "\uBD84:\uCD08")}${metric("\uCD5C\uC7A5 " + label + "\uC2DC\uAC04", duration(totals.count ? totals.longest : null), "\uC644\uB8CC \uAE30\uB85D \uAE30\uC900")}${meal ? metric("60\uBD84 \uCD08\uACFC", totals.overCount + "\uD68C", "\uC815\uD655\uD788 60\uBD84\uC740 \uC81C\uC678") + metric("\uCD08\uACFC \uC2DC\uAC04 \uD569\uACC4", duration(totals.overTotal), "60\uBD84\uC744 \uB118\uC740 \uBD80\uBD84\uB9CC \uD569\uC0B0") : ""}</div>
 <section class="panel"><div class="panel-heading"><div><h2>\uC9C1\uC6D0\uBCC4 ${label} \uAE30\uB85D</h2><p>\uAE30\uB85D\uC774 \uC5C6\uB294 \uC9C1\uC6D0\uC758 \uD3C9\uADE0\uC740 \uD45C\uC2DC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p></div></div><div class="table-scroll"><table><thead><tr><th>\uC9C1\uC6D0 / \uD300</th><th>\uC644\uB8CC \uD69F\uC218</th><th>\uD3C9\uADE0 \uC2DC\uAC04</th><th>\uB204\uC801 \uC2DC\uAC04</th><th>\uCD5C\uC7A5 \uC2DC\uAC04</th>${meal ? "<th>60\uBD84 \uCD08\uACFC</th>" : ""}</tr></thead><tbody>${staff.map((r3) => `<tr><th>${esc2(r3.person.name)}<small>${esc2(r3.person.rawTeam)}</small></th><td>${r3.count}\uD68C</td><td>${duration(r3.count ? r3.average : null)}</td><td>${duration(r3.count ? r3.total : null)}</td><td>${duration(r3.count ? r3.longest : null)}</td>${meal ? `<td>${r3.overCount}\uD68C</td>` : ""}</tr>`).join("")}</tbody></table></div></section>
 <section class="panel"><div class="panel-heading"><h2>\uC77C\uBCC4 \uD3C9\uADE0 ${label}\uC2DC\uAC04</h2></div>${days.length ? `<div class="meal-day-bars">${days.map((d2) => `<div class="meal-day-bar"><span>${d2.date.slice(5)}</span><div class="meal-bar-track" aria-hidden="true"><i style="width:${d2.average / max * 100}%"></i></div><strong>${duration(d2.average)}</strong><small>${d2.count}\uD68C</small></div>`).join("")}</div>` : '<p class="empty">\uC644\uB8CC \uAE30\uB85D\uC774 \uC0DD\uAE30\uBA74 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p>'}</section>
 <section class="panel"><div class="panel-heading"><div><h2>${label} \uC2DC\uC791\xB7\uC885\uB8CC \uAE30\uB85D</h2><p>${title} \xB7 ${completed.length}\uAC74 \xB7 \uCD5C\uADFC \uC2DC\uC791 \uC21C</p></div></div>${completed.length ? `<div class="table-scroll"><table><thead><tr><th>\uC9C1\uC6D0 / \uD300</th><th>\uC2DC\uC791\uC77C</th><th>\uC2DC\uC791 \uC2DC\uAC01</th><th>\uC885\uB8CC \uC2DC\uAC01</th><th>\uC18C\uC694 \uC2DC\uAC04</th>${meal ? "<th>60\uBD84 \uCD08\uACFC</th>" : ""}</tr></thead><tbody>${(showAll ? completed : completed.slice(0, 20)).map((r3) => `<tr><th>${esc2(r3.person.name)}<small>${esc2(r3.person.rawTeam)}</small></th><td>${r3.date}</td><td>${time(r3.startedAt)}</td><td>${mealDate(r3.endedAt) !== r3.date ? mealDate(r3.endedAt) + "<br>" : ""}${time(r3.endedAt)}</td><td>${duration(r3.elapsed)}</td>${meal ? `<td>${r3.elapsed > MEAL_LIMIT_MS ? duration(r3.elapsed - MEAL_LIMIT_MS) : "\u2014"}</td>` : ""}</tr>`).join("")}</tbody></table></div>` : '<p class="empty">\uC120\uD0DD\uD55C \uC6D4\uC5D0 \uC644\uB8CC \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p>'}${completed.length > 20 ? `<div class="meal-history-more"><button data-action="meal-history-all">${showAll ? "\uCD5C\uADFC 20\uAC74\uB9CC \uBCF4\uAE30" : `\uC804\uCCB4 ${completed.length}\uAC74 \uBCF4\uAE30`}</button></div>` : ""}</section>`;
}

// src/schedule-drafts.js
var DRAFT_KINDS = ["schedule", "meals", "attendance"];
var MAX_RANGE_DAYS = 62;
var DAY_MS = 864e5;
var validDraft = (r3) => !!r3 && typeof r3.id === "string" && Array.isArray(r3.teams) && DRAFT_KINDS.includes(r3.kind) && typeof r3.date === "string" && (r3.groupId === void 0 || typeof r3.groupId === "string");
var groupOf = (r3) => r3.groupId || r3.id;
var validDate = (d2) => typeof d2 === "string" && /^20\d{2}-\d{2}-\d{2}$/.test(d2) && Number.isFinite(Date.parse(d2 + "T12:00:00Z")) && (/* @__PURE__ */ new Date(d2 + "T12:00:00Z")).toISOString().slice(0, 10) === d2;
function expandDates(start2, end = start2) {
  if (!validDate(start2) || !validDate(end) || end < start2) throw new Error("\uC2DC\uC791\uC77C\uACFC \uC885\uB8CC\uC77C\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
  const first = Date.parse(start2 + "T12:00:00Z"), count = Math.round((Date.parse(end + "T12:00:00Z") - first) / DAY_MS) + 1;
  if (count > MAX_RANGE_DAYS) throw new Error(`\uAE30\uAC04\uC740 \uCD5C\uB300 ${MAX_RANGE_DAYS}\uC77C\uAE4C\uC9C0 \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`);
  return Array.from({ length: count }, (_3, i3) => new Date(first + i3 * DAY_MS).toISOString().slice(0, 10));
}
function scheduleRows({ person, start: start2, end, label, note, groupId, createdAt }, newId) {
  return expandDates(start2, end).map((date) => ({ id: newId(), groupId, kind: "schedule", personId: person.personId, name: person.name, teams: person.teams, rawTeam: person.rawTeam, date, month: date.slice(2, 4) + date.slice(5, 7), label, note, local: true, createdAt }));
}
function withoutGroup(rows, groupId) {
  return rows.filter((r3) => !(r3.kind === "schedule" && groupOf(r3) === groupId));
}
var sourceIdOf = (source) => source ? `schedule:${source.tab}:${source.cell}` : "";
var overrideMap = (rows) => new Map(rows.filter((r3) => r3.kind === "schedule" && r3.override && r3.sourceId).map((r3) => [r3.sourceId, r3]));
function moveOriginal(rows, entry, newDate, createdAt, newId) {
  if (!validDate(newDate)) throw new Error("\uC62E\uAE38 \uB0A0\uC9DC\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
  const kept = rows.filter((r3) => !(r3.kind === "schedule" && r3.override && r3.sourceId === entry.sourceId));
  if (newDate === entry.from) return kept;
  return [...kept, { id: newId(), kind: "schedule", override: true, sourceId: entry.sourceId, from: entry.from, personId: entry.personId, name: entry.name, teams: entry.teams, rawTeam: entry.rawTeam, date: newDate, month: newDate.slice(2, 4) + newDate.slice(5, 7), label: entry.label, color: entry.color || "", note: entry.note || "", local: true, createdAt }];
}
var shiftDate = (date, days) => new Date(Date.parse(date + "T12:00:00Z") + days * DAY_MS).toISOString().slice(0, 10);
var dayDiff = (from, to) => Math.round((Date.parse(to + "T12:00:00Z") - Date.parse(from + "T12:00:00Z")) / DAY_MS);
function moveGroup(rows, groupId, newStart) {
  if (!validDate(newStart)) throw new Error("\uC62E\uAE38 \uB0A0\uC9DC\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
  const group = scheduleGroups(rows).find((g4) => g4.groupId === groupId);
  if (!group) throw new Error("\uC62E\uAE38 \uC77C\uC815\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");
  const offset = dayDiff(group.start, newStart);
  if (offset === 0) return rows;
  return rows.map((r3) => {
    if (r3.kind !== "schedule" || groupOf(r3) !== groupId) return r3;
    const date = shiftDate(r3.date, offset);
    return { ...r3, date, month: date.slice(2, 4) + date.slice(5, 7) };
  });
}
function scheduleGroups(rows) {
  const groups = /* @__PURE__ */ new Map();
  for (const r3 of rows) {
    if (r3.kind !== "schedule") continue;
    const key = groupOf(r3), g4 = groups.get(key);
    if (!g4) groups.set(key, { ...r3, groupId: key, start: r3.date, end: r3.date, days: 1 });
    else {
      if (r3.date < g4.start) g4.start = r3.date;
      if (r3.date > g4.end) g4.end = r3.date;
      g4.days++;
    }
  }
  return [...groups.values()].map((g4) => ({ ...g4, date: g4.start }));
}

// src/receipt-store.js
var RECEIPT_DB = "bb-staff:public-preview:receipts:v1";
var RECEIPT_SIGNAL = "bb-staff:public-preview:receipts:changed:v1";
var RETENTION_KEY = "bb-staff:public-preview:receipt-retention:v1";
var TYPES = ["image/jpeg", "image/png", "image/webp"];
function validReceiptDate(date) {
  if (!/^20\d{2}-\d{2}-\d{2}$/.test(date)) return false;
  const value = /* @__PURE__ */ new Date(date + "T12:00:00Z");
  return Number.isFinite(value.getTime()) && value.toISOString().slice(0, 10) === date;
}
function receiptDates(date, end = "") {
  if (!end || end === date) return [date];
  const dates = expandDates(date, end);
  if (dates.length > 31) throw new Error("\uD55C \uBC88\uC5D0 31\uC77C\uAE4C\uC9C0 \uB4F1\uB85D\uD560 \uC218 \uC788\uC5B4\uC694. \uC885\uB8CC\uC77C\uC744 \uC904\uC5EC \uC8FC\uC138\uC694.");
  return dates;
}
function validateReceipt({ personId, date, amount, note = "", files = [], allowedMonths }) {
  if (!personId || !validReceiptDate(date)) throw new Error("\uC9C1\uC6D0\uACFC \uC0AC\uC6A9\uC77C\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
  if (allowedMonths && !allowedMonths.includes(date.slice(2, 4) + date.slice(5, 7))) throw new Error("\uD604\uC7AC \uC870\uD68C \uAC00\uB2A5\uD55C \uC6D4\uC758 \uC0AC\uC6A9\uC77C\uB85C \uB4F1\uB85D\uD574 \uC8FC\uC138\uC694.");
  if (!Number.isSafeInteger(amount) || amount < 0 || amount > 1e8) throw new Error("\uAE08\uC561\uC740 0\uC6D0\uBD80\uD130 1\uC5B5\uC6D0\uAE4C\uC9C0 \uC815\uC218\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694.");
  if (typeof note !== "string" || note.length > 2e3) throw new Error("\uBA54\uBAA8\uB294 2,000\uC790\uAE4C\uC9C0 \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
  if (!Array.isArray(files) || files.length > 5) throw new Error("\uD55C \uAC74\uC5D0 \uC0AC\uC9C4\uC740 \uCD5C\uB300 5\uC7A5\uAE4C\uC9C0 \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
  for (const file of files) if (!TYPES.includes(file.type) || file.size <= 0 || file.size > 10 * 1024 * 1024) throw new Error("\uC0AC\uC9C4\uC740 \uC7A5\uB2F9 10MB \uC774\uD558\uC758 JPG\xB7PNG\xB7WEBP \uD30C\uC77C\uB85C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");
}
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(RECEIPT_DB, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains("receipts")) db.createObjectStore("receipts", { keyPath: "id" });
    };
    request.onsuccess = () => {
      const db = request.result;
      db.onversionchange = () => db.close();
      resolve(db);
    };
    request.onerror = () => reject(new Error("\uC601\uC218\uC99D \uC800\uC7A5\uC18C\uB97C \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uBE0C\uB77C\uC6B0\uC800 \uC800\uC7A5 \uAD8C\uD55C\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694."));
    request.onblocked = () => reject(new Error("\uB2E4\uB978 \uD0ED\uC5D0\uC11C \uC601\uC218\uC99D \uC800\uC7A5\uC18C\uB97C \uC0AC\uC6A9 \uC911\uC785\uB2C8\uB2E4. \uD574\uB2F9 \uD0ED\uC744 \uC0C8\uB85C\uACE0\uCE68\uD574 \uC8FC\uC138\uC694."));
  });
}
async function listReceipts() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("receipts", "readonly"), request = tx.objectStore("receipts").getAll();
    let result = [];
    request.onsuccess = () => {
      result = request.result;
    };
    tx.oncomplete = () => {
      db.close();
      resolve(result.sort((a3, b3) => b3.date.localeCompare(a3.date) || b3.createdAt - a3.createdAt));
    };
    tx.onabort = tx.onerror = () => {
      db.close();
      reject(new Error("\uC601\uC218\uC99D\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C\uACE0\uCE68\uD574 \uC8FC\uC138\uC694."));
    };
  });
}
async function saveReceipt(input) {
  validateReceipt(input);
  const files = input.files || [];
  for (const file of files) {
    let bitmap;
    try {
      bitmap = await createImageBitmap(file);
      if (bitmap.width * bitmap.height > 5e7) throw new Error();
    } catch {
      throw new Error("\uC0AC\uC9C4\uC744 \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. 5\uCC9C\uB9CC \uD654\uC18C \uC774\uD558\uC758 JPG\xB7PNG\xB7WEBP \uC0AC\uC9C4\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");
    } finally {
      bitmap?.close();
    }
  }
  let record = { id: input.id || crypto.randomUUID(), personId: input.personId, name: input.name, teams: input.teams, rawTeam: input.rawTeam, date: input.date, amount: input.amount, note: input.note || "", createdAt: Date.now(), files: files.map((f3) => ({ name: f3.name, type: f3.type, blob: f3 })) };
  const db = await openDB();
  await new Promise((resolve, reject) => {
    const tx = db.transaction("receipts", "readwrite"), store = tx.objectStore("receipts");
    let conflict = "";
    if (input.id) {
      const request = store.get(input.id);
      request.onsuccess = () => {
        const previous = request.result;
        if (!previous || previous.personId !== input.personId || (previous.updatedAt || previous.createdAt) !== input.expectedUpdatedAt) {
          conflict = "\uC800\uC7A5 \uB0B4\uC5ED\uC774 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C\uACE0\uCE68 \uD6C4 \uB2E4\uC2DC \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.";
          tx.abort();
          return;
        }
        if (previous.files.length + record.files.length > 5) {
          conflict = "\uAE30\uC874 \uC0AC\uC9C4\uC744 \uD3EC\uD568\uD574 \uD55C \uAC74\uC5D0 \uCD5C\uB300 5\uC7A5\uAE4C\uC9C0 \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.";
          tx.abort();
          return;
        }
        record = { ...record, createdAt: previous.createdAt, updatedAt: Math.max(Date.now(), (previous.updatedAt || previous.createdAt) + 1), files: [...previous.files, ...record.files] };
        store.put(record);
      };
    } else store.add(record);
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onabort = tx.onerror = () => {
      db.close();
      reject(new Error(conflict || "\uB0B4\uC6A9\uC744 \uC800\uC7A5\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC800\uC7A5 \uACF5\uAC04\uC744 \uD655\uC778\uD558\uACE0 \uB2E4\uC2DC \uC800\uC7A5\uD574 \uC8FC\uC138\uC694. \uAE30\uC874 \uAE30\uB85D\uC740 \uBCF4\uC874\uD588\uC2B5\uB2C8\uB2E4."));
    };
  });
  try {
    localStorage.setItem(RECEIPT_SIGNAL, record.id + ":" + (record.updatedAt || record.createdAt));
  } catch {
  }
  return record;
}
function receiptRows(rows, { month: month2, personId, team: team2 = "\uC804\uCCB4", search: search2 = "" }) {
  return rows.filter((r3) => r3.date.slice(2, 4) + r3.date.slice(5, 7) === month2 && (!personId || r3.personId === personId) && (team2 === "\uC804\uCCB4" || r3.teams?.includes(team2)) && (!search2 || [r3.name, r3.rawTeam].some((v3) => v3?.includes(search2))));
}
function retentionDays(storage) {
  const raw = storage.getItem(RETENTION_KEY);
  if (raw === null) return 30;
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 1 || value > 365) throw new Error("\uC0AC\uC9C4 \uBCF4\uAD00 \uAE30\uAC04 \uC124\uC815\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
  return value;
}
function setRetentionDays(storage, value) {
  if (!Number.isInteger(value) || value < 1 || value > 365) throw new Error("\uBCF4\uAD00 \uAE30\uAC04\uC740 1~365\uC77C\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694.");
  storage.setItem(RETENTION_KEY, String(value));
}

// src/schedule-context.js
var esc3 = (value) => String(value ?? "").replace(/[&<>"']/g, (c3) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c3]);
var COLORS = { "\uD734\uBB34": "4285F4", "\uC5F0\uCC28": "FF9900", "\uC624\uC804 \uBC18\uCC28": "FCE5CD", "\uC624\uD6C4 \uBC18\uCC28": "D9D2E9", "\uADFC\uBB34": "D9EAD3" };
function schedulesOn(roster, records, personId, date) {
  const month2 = date.slice(2, 4) + date.slice(5, 7), day = Number(date.slice(-2)), overrides = overrideMap(records);
  const original = roster.filter((r3) => r3.personId === personId && r3.month === month2).flatMap((r3) => {
    const c3 = r3.days?.[day];
    if (!c3 || overrides.has(sourceIdOf(c3.source))) return [];
    return [{ label: String(c3.value ?? "").trim() || String(c3.colorMeaning ?? "").trim() || String(c3.label ?? "").trim() || "\uC0C9\uC0C1 \uD45C\uC2DC", color: c3.color || "", original: true, sourceId: sourceIdOf(c3.source), from: date, note: c3.note || "" }];
  });
  const added = records.filter((r3) => r3.kind === "schedule" && r3.personId === personId && r3.date === date).map((r3) => r3.override ? { label: r3.label, color: r3.color || "", original: true, moved: true, groupId: r3.id, from: r3.from } : { label: r3.label, color: COLORS[r3.label] || "CBD5E1", original: false, groupId: groupOf(r3) });
  return [...original, ...added];
}
function scheduleChips(items, drag2 = null) {
  return items.map((s3) => `<span class="meal-schedule-chip"${drag2 && s3.groupId ? ` data-drag-group="${esc3(s3.groupId)}" data-drag-person="${esc3(drag2.personId)}"` : drag2 && s3.sourceId ? ` data-drag-source="${esc3(JSON.stringify({ sourceId: s3.sourceId, from: s3.from, label: s3.label, color: s3.color, note: s3.note || "" }))}" data-drag-person="${esc3(drag2.personId)}"` : ""}><i class="swatch" style="--source-color:#${/^[\da-f]{6}$/i.test(s3.color) ? s3.color : "CBD5E1"}" aria-hidden="true"></i><span>${esc3(s3.label)}</span></span>`).join("");
}
function dayAssignment(items) {
  const labels = items.map((s3) => s3.label.trim());
  const off = labels.some((l3) => ["\uD734\uBB34", "\uC5F0\uCC28", "\uBB34\uAE09", "\uD734\uAC00(\uCD9C\uC0B0)"].includes(l3));
  const am = labels.some((l3) => ["\uC624\uD6C4 \uBC18\uCC28", "\uC624\uC804\uCD9C\uADFC"].includes(l3)), pm = labels.some((l3) => ["\uC624\uC804 \uBC18\uCC28", "\uC624\uD6C4\uCD9C\uADFC"].includes(l3)), full = labels.includes("\uADFC\uBB34");
  if (off && (am || pm || full) || am && pm) return "\uD655\uC778 \uD544\uC694";
  if (off) return "\uD734\uBB34\xB7\uD734\uAC00";
  if (am) return "\uC624\uC804 \uADFC\uBB34";
  if (pm) return "\uC624\uD6C4 \uADFC\uBB34";
  if (full) return "\uADFC\uBB34";
  return items.length ? "\uC77C\uC815 \uD655\uC778" : "\uBBF8\uAE30\uC7AC";
}
function mealBudget(rows, added = []) {
  const total = (label) => rows.length && rows.every((r3) => typeof r3.totals?.[label]?.value === "number" && Number.isFinite(r3.totals[label].value)) ? rows.reduce((s3, r3) => s3 + r3.totals[label].value, 0) : null;
  const additional = added.reduce((s3, r3) => s3 + (Number.isSafeInteger(r3.amount) ? r3.amount : 0), 0), used = total("\uC0AC\uC6A9"), limit = total("\uD55C\uB3C4"), remaining = total("\uC794\uC561");
  return { limit, sourceUsed: used, sourceRemaining: remaining, additional, used: used === null ? null : used + additional, remaining: remaining === null ? null : remaining - additional };
}

// src/receipt-zip.js
var encoder = new TextEncoder();
var crcTable = Array.from({ length: 256 }, (_3, i3) => {
  let c3 = i3;
  for (let n2 = 0; n2 < 8; n2++) c3 = c3 & 1 ? 3988292384 ^ c3 >>> 1 : c3 >>> 1;
  return c3 >>> 0;
});
var crc32 = (bytes) => {
  let c3 = 4294967295;
  for (const b3 of bytes) c3 = crcTable[(c3 ^ b3) & 255] ^ c3 >>> 8;
  return (c3 ^ 4294967295) >>> 0;
};
function safeFilename(name) {
  return String(name).replace(/[\\/:*?"<>|\x00-\x1f\x7f]/g, "_").replace(/\.+/g, "_").slice(0, 90) || "\uC601\uC218\uC99D";
}
async function makeZip(files) {
  const chunks = [], central = [];
  let offset = 0;
  for (const file of files) {
    const name = encoder.encode(file.name), data2 = new Uint8Array(await file.blob.arrayBuffer()), crc = crc32(data2);
    const header = new Uint8Array(30 + name.length), view2 = new DataView(header.buffer);
    view2.setUint32(0, 67324752, true);
    view2.setUint16(4, 20, true);
    view2.setUint16(6, 2048, true);
    view2.setUint16(12, 33, true);
    view2.setUint32(14, crc, true);
    view2.setUint32(18, data2.length, true);
    view2.setUint32(22, data2.length, true);
    view2.setUint16(26, name.length, true);
    header.set(name, 30);
    const row = new Uint8Array(46 + name.length), v4 = new DataView(row.buffer);
    v4.setUint32(0, 33639248, true);
    v4.setUint16(4, 20, true);
    v4.setUint16(6, 20, true);
    v4.setUint16(8, 2048, true);
    v4.setUint16(14, 33, true);
    v4.setUint32(16, crc, true);
    v4.setUint32(20, data2.length, true);
    v4.setUint32(24, data2.length, true);
    v4.setUint16(28, name.length, true);
    v4.setUint32(42, offset, true);
    row.set(name, 46);
    chunks.push(header, data2);
    central.push(row);
    offset += header.length + data2.length;
  }
  const size = central.reduce((s3, r3) => s3 + r3.length, 0), end = new Uint8Array(22), v3 = new DataView(end.buffer);
  v3.setUint32(0, 101010256, true);
  v3.setUint16(8, files.length, true);
  v3.setUint16(10, files.length, true);
  v3.setUint32(12, size, true);
  v3.setUint32(16, offset, true);
  return new Blob([...chunks, ...central, end], { type: "application/zip" });
}
var csv = (value) => '"' + String(value ?? "").replace(/^(?:\s*[=+@\-]|[\t\r\n])/u, "'$&").replaceAll('"', '""') + '"';
async function receiptArchive(rows) {
  const files = [], manifest = [["\uC0AC\uC6A9\uC77C", "\uC9C1\uC6D0", "\uC9C1\uC6D0 ID", "\uAE08\uC561", "\uBA54\uBAA8", "\uC0AC\uC9C4 \uD30C\uC77C"]];
  const total = rows.reduce((sum, r3) => sum + r3.files.reduce((s3, f3) => s3 + f3.blob.size, 0), 0);
  if (total > 200 * 1024 * 1024) throw new Error("\uC0AC\uC9C4\uC774 200MB\uB97C \uB118\uC2B5\uB2C8\uB2E4. \uC9C1\uC6D0\uC774\uB098 \uAE30\uAC04\uC744 \uC881\uD600 \uB2E4\uC6B4\uB85C\uB4DC\uD574 \uC8FC\uC138\uC694.");
  for (const r3 of rows) {
    const names = r3.files.map((f3, i3) => {
      const ext = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" }[f3.type] || "bin";
      const name = `${r3.date}/${safeFilename(r3.name)}_${safeFilename(r3.personId)}/${r3.id}_${i3 + 1}.${ext}`;
      files.push({ name, blob: f3.blob });
      return name;
    });
    manifest.push([r3.date, r3.name, r3.personId, r3.amount, r3.note, names.join(" | ")]);
  }
  files.push({ name: "\uC601\uC218\uC99D_\uBAA9\uB85D.csv", blob: new Blob(["\uFEFF" + manifest.map((row) => row.map(csv).join(",")).join("\r\n")], { type: "text/csv;charset=utf-8" }) });
  if (files.length > 65535) throw new Error("\uC0AC\uC9C4\uC774 \uB108\uBB34 \uB9CE\uC2B5\uB2C8\uB2E4. \uC870\uD68C \uC870\uAC74\uC744 \uC881\uD600 \uC8FC\uC138\uC694.");
  return makeZip(files);
}

// src/receipt-view.js
var esc4 = (value) => String(value ?? "").replace(/[&<>"']/g, (c3) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c3]);
var won = (value) => Number(value).toLocaleString("ko-KR") + "\uC6D0";
var dateOf = (month2, day) => `20${month2.slice(0, 2)}-${month2.slice(2)}-${String(day).padStart(2, "0")}`;
function receiptCalendar(rows, month2, selectedDate, photoURL, scheduleForDate = () => [], dragPerson = "", canAdd = false) {
  const grouped = rows.reduce((groups, r3) => ((groups[r3.date] ??= []).push(r3), groups), /* @__PURE__ */ Object.create(null));
  return `<div class="receipt-weekdays">${["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"].map((d2) => `<span>${d2}</span>`).join("")}</div><div class="receipt-days">${calendarDays(month2).map((day) => {
    if (!day) return '<span class="receipt-blank"></span>';
    const date = dateOf(month2, day), entries = grouped[date] || [], count = entries.reduce((s3, r3) => s3 + r3.files.length, 0), sum = entries.reduce((s3, r3) => s3 + r3.amount, 0);
    const schedule = scheduleForDate(date);
    const photo = entries.flatMap((r3) => r3.files)[0], preview = photoURL && photo?.blob ? photoURL(photo.blob) : "";
    return `<div class="receipt-day-cell ${date === selectedDate ? "selected" : ""}"><button type="button" data-receipt-day="${date}"${dragPerson ? ` data-drop-date="${date}" data-drop-person="${esc4(dragPerson)}"` : ""} class="receipt-day ${entries.length ? "has-receipts" : "no-receipts"} ${date === selectedDate ? "selected" : ""}" aria-pressed="${date === selectedDate}" aria-label="${day}\uC77C ${esc4(schedule.map((s3) => s3.label).join(" \xB7 "))} ${entries.length ? (count ? "\uB0B4\uC6A9 \uC800\uC7A5\uB428 \xB7 \uAE30\uC874 \uC601\uC218\uC99D \uC788\uC74C" : "\uB0B4\uC6A9 \uC800\uC7A5\uB428 \xB7 \uC0AC\uC9C4 \uC5C6\uC74C") + " \xB7 \uC2DD\uB300 " + entries.length + "\uAC74 \uC0AC\uC9C4 " + count + "\uC7A5 \xB7 " + won(sum) : "\uC2DD\uB300 \uBBF8\uB4F1\uB85D"}"><strong>${day}</strong><span class="meal-schedule-chips">${scheduleChips(schedule, dragPerson ? { personId: dragPerson } : null)}</span>${entries.length ? `<span class="receipt-day-status"><span class="receipt-status-label">${"\uAE30\uB85D"} \xB7 </span>${entries.length}\uAC74</span><span class="receipt-calendar-entry">${preview ? `<img src="${esc4(preview)}" alt="" loading="lazy">` : ""}<span class="receipt-calendar-meta"><strong>${won(sum)}</strong>${count ? `<small>\uC0AC\uC9C4 ${count}\uC7A5</small>` : ""}</span></span>` : '<span class="receipt-missing"><span class="receipt-missing-full">\uBBF8\uB4F1\uB85D</span><span class="receipt-missing-short" aria-hidden="true">\u2014</span></span>'}</button>${canAdd ? `<button type="button" class="receipt-add" data-receipt-add="${date}" aria-label="${day}\uC77C \uC2DD\uB300 \uC785\uB825">+</button>` : ""}</div>`;
  }).join("")}</div>`;
}
function mountReceipts({ root, month: month2, months, person, admin, people, team: team2, search: search2, toast: toast2, compact = false, onTeamChange, viewState = {}, roster = [], scheduleRecords = [], onRows, onLoadError }) {
  let editing = null, saving = false;
  let all = [], selectedDate = dateOf(month2, 1), staffId = admin ? viewState.staffId || "" : "", urls = [], viewer = null, disposed = false, loading = 0, expanded = compact && !!viewState.expanded;
  const now = /* @__PURE__ */ new Date(), today3 = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul" }).format(now);
  if (today3.startsWith("20" + month2.slice(0, 2) + "-" + month2.slice(2))) selectedDate = today3;
  if (admin && staffId && !people.some((p3) => p3.personId === staffId && (team2 === "\uC804\uCCB4" || p3.teams?.includes(team2)))) staffId = "";
  if (admin) viewState.staffId = staffId;
  viewState.dates ||= {};
  if (viewState.dates[month2]) selectedDate = viewState.dates[month2];
  const filtered = () => receiptRows(all, { month: month2, personId: admin ? staffId : person.personId, team: admin ? team2 : "\uC804\uCCB4", search: admin ? search2 : "" });
  const release = () => {
    urls.forEach(URL.revokeObjectURL);
    urls = [];
  };
  const blobURL = (blob) => {
    const url = URL.createObjectURL(blob);
    urls.push(url);
    return url;
  };
  let drafts2 = [];
  const scheduleForDate = (date) => {
    const id = admin ? staffId : person.personId;
    return id ? schedulesOn(roster, drafts2, id, date) : [];
  };
  let days = 30, policyError = "";
  try {
    days = retentionDays(localStorage);
  } catch (e3) {
    policyError = e3.message;
  }
  root.innerHTML = `<section class="panel receipt-panel ${compact ? "is-compact" : ""} ${expanded ? "is-expanded" : ""}"><div class="panel-heading"><div><h2>${admin ? compact ? "\uC2DD\uB300 \uC81C\uCD9C \uAE30\uB85D" : "\uC9C1\uC6D0 \uC2DD\uB300 \uBAA8\uC544\uBCF4\uAE30" : "\uB0B4 \uC2DD\uB300 \uB2EC\uB825"}</h2><p>\uB0A0\uC9DC\uBCC4 \uC0AC\uC6A9 \uB0B4\uC5ED\uACFC \uD734\uBB34\xB7\uC5F0\uCC28\xB7\uBC18\uCC28\uB97C \uD568\uAED8 \uD655\uC778\uD574\uC694.</p></div>${admin ? `<div class="receipt-actions">${compact ? `<button data-receipt-expand aria-expanded="${expanded}">${expanded ? "\uB2EC\uB825 \uC811\uAE30" : "\uC2DD\uB300 \uBAA8\uC544\uBCF4\uAE30"}</button>` : ""}<button data-receipt-export>\uC870\uD68C \uC601\uC218\uC99D ZIP \uB2E4\uC6B4\uB85C\uB4DC</button></div>` : ""}</div>
 <p class="receipt-local-note">\uD604\uC7AC \uC0AC\uC9C4\uACFC \uAE30\uB85D\uC740 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uB2E4\uB978 \uAE30\uAE30\uC640\uC758 \uACF5\uC720\uB294 \uC6B4\uC601 \uC11C\uBC84 \uC5F0\uACB0 \uD6C4 \uC801\uC6A9\uB429\uB2C8\uB2E4.</p>
 ${admin ? `<div class="receipt-controls"><label>\uD300\uBCC4 \uBCF4\uAE30<select data-receipt-team>${["\uC804\uCCB4", ...new Set(people.flatMap((p3) => p3.teams || []))].map((t3) => `<option value="${esc4(t3)}" ${team2 === t3 ? "selected" : ""}>${esc4(t3 === "\uC804\uCCB4" ? "\uC804\uCCB4 \uD300" : t3 + "\uD300")}</option>`).join("")}</select></label><label>\uC9C1\uC6D0\uBCC4 \uBCF4\uAE30<select data-receipt-person><option value="">\uC804\uCCB4 \uC9C1\uC6D0</option>${people.filter((p3) => team2 === "\uC804\uCCB4" || p3.teams?.includes(team2)).map((p3) => `<option value="${esc4(p3.personId)}" ${staffId === p3.personId ? "selected" : ""}>${esc4(p3.name)} \xB7 ${esc4(p3.rawTeam)}</option>`).join("")}</select></label><p>\uC0C1\uB2E8 \uC870\uD68C \uC6D4\uACFC \uC774\uB984 \uAC80\uC0C9, \uC120\uD0DD\uD55C \uD300\xB7\uC9C1\uC6D0\uC5D0 \uD574\uB2F9\uD558\uB294 \uC804\uCCB4 \uC601\uC218\uC99D\uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD569\uB2C8\uB2E4.</p></div><details class="receipt-policy"><summary>\uC0AC\uC9C4 \uBCF4\uAD00 \uAE30\uAC04 \uC124\uC815 \xB7 <span data-retention-label>${days}\uC77C</span></summary><form data-retention-form><label>\uC5C5\uB85C\uB4DC \uD6C4 \uBCF4\uAD00 \uAE30\uAC04 (\uC77C)<input name="days" type="number" min="1" max="365" value="${days}" required></label><button type="submit">\uC124\uC815 \uC800\uC7A5</button><p>\uAE30\uBCF8 30\uC77C, 1~365\uC77C\uB85C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAE30\uAC04\uC774 \uC9C0\uB09C \uC0AC\uC9C4\uB9CC \uC0AD\uC81C\uD558\uACE0 \uC9C1\uC6D0\xB7\uC0AC\uC6A9\uC77C\xB7\uAE08\uC561\xB7\uBA54\uBAA8\uB294 \uB0A8\uAE41\uB2C8\uB2E4.</p><p class="notice">\uCD08\uC548\uC5D0\uC11C\uB294 \uC124\uC815\uB9CC \uC800\uC7A5\uD569\uB2C8\uB2E4. \uC2E4\uC81C \uC790\uB3D9\uC0AD\uC81C\uB294 \uC6B4\uC601 \uC11C\uBC84 \uC5F0\uACB0 \uD6C4 \uC801\uC6A9\uB418\uBA70, \uC9C0\uAE08 \uC62C\uB9B0 \uC0AC\uC9C4\uC740 \uC790\uB3D9\uC73C\uB85C \uC9C0\uC6CC\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p><p class="form-error" role="alert">${esc4(policyError)}</p></form></details>` : `<details class="receipt-upload" id="receipt-upload"><summary>+ \uC2DD\uB300 \uC0AC\uC6A9 \uAE30\uB85D</summary><form id="receipt-form"><div class="form-grid"><label>\uC0AC\uC6A9\uC77C<input name="date" type="date" required min="${dateOf(months[0], 1)}" max="${dateOf(months.at(-1), new Date(2e3 + Number(months.at(-1).slice(0, 2)), Number(months.at(-1).slice(2)), 0).getDate())}" value="${selectedDate}"></label><label>\uC2DD\uB300 \uAE08\uC561 (\uC6D0)<input name="amount" type="number" min="0" max="100000000" step="1" required inputmode="numeric" placeholder="\uC608: 12000"></label><label>\uC885\uB8CC\uC77C (\uC120\uD0DD, \uC5EC\uB7EC \uB0A0 \uD55C \uBC88\uC5D0)<input name="end" type="date" min="${dateOf(months[0], 1)}" max="${dateOf(months.at(-1), new Date(2e3 + Number(months.at(-1).slice(0, 2)), Number(months.at(-1).slice(2)), 0).getDate())}"></label><label class="full">\uBA54\uBAA8 (\uC120\uD0DD)<textarea name="note" maxlength="2000" rows="2" placeholder="\uC608: \uCFE0\uD321 \uC8FC\uBB38, \uBC30\uB2EC \uC2DD\uB300"></textarea></label></div><p class="receipt-editing" hidden></p><p class="receipt-save-hint">\uC601\uC218\uC99D \uC5C6\uC774 \uC0AC\uC6A9\uC77C\uACFC \uAE08\uC561\uB9CC \uC785\uB825\uD558\uBA74 \uB429\uB2C8\uB2E4. \uC885\uB8CC\uC77C\uC744 \uB123\uC73C\uBA74 \uC0AC\uC6A9\uC77C\uBD80\uD130 \uC885\uB8CC\uC77C\uAE4C\uC9C0 \uB9E4\uC77C \uAC19\uC740 \uAE08\uC561\uC73C\uB85C \uD55C \uBC88\uC5D0 \uC800\uC7A5\uB3FC\uC694(\uCD5C\uB300 31\uC77C).</p><div class="form-actions receipt-save-actions"><button type="submit" class="primary">\uB0B4\uC6A9 \uC800\uC7A5</button></div><p class="form-error" role="alert"></p></form></details>`}
 <p class="receipt-error" role="alert"></p><div class="receipt-body"><p class="empty">\uC2DD\uB300 \uAE30\uB85D\uC744 \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4\u2026</p></div></section>`;
  const error = (message) => {
    if (!disposed) root.querySelector(".receipt-error").textContent = message;
  };
  function draw() {
    if (disposed) return;
    viewState.dates[month2] = selectedDate;
    release();
    drafts2 = typeof scheduleRecords === "function" ? scheduleRecords() : scheduleRecords;
    const rows = filtered();
    onRows?.(rows);
    const dayRows = rows.filter((r3) => r3.date === selectedDate), photos = rows.reduce((s3, r3) => s3 + r3.files.length, 0);
    root.querySelector(".receipt-body").innerHTML = `<div class="receipt-summary"><span>\uC2DD\uB300 \uAE30\uB85D <strong>${rows.length}\uAC74</strong> \xB7 \uC0AC\uC9C4 ${photos}\uC7A5</span><span>\uC81C\uCD9C \uAE08\uC561 <strong>${won(rows.reduce((s3, r3) => s3 + r3.amount, 0))}</strong></span></div>${onRows ? '<p class="receipt-local-note">\uC544\uB798 \uC81C\uCD9C \uAE30\uB85D\uC740 \uC0C1\uB2E8 \uC0AC\uC6A9\uC561\xB7\uC794\uC561\uC5D0 \uBC18\uC601\uB429\uB2C8\uB2E4.</p>' : ""}<div class="receipt-calendar-legend"><span><b>\uAE30\uB85D</b> \uC2DD\uB300 \uC0AC\uC6A9 \uB0B4\uC5ED</span><span><b>\u2014</b> \uBBF8\uB4F1\uB85D</span><span>\uD734\uBB34\xB7\uC5F0\uCC28\xB7\uBC18\uCC28\uB294 \uADFC\uBB34\uD45C\uC758 \uC0C9\uC0C1\uACFC \uC774\uB984\uC73C\uB85C \uD45C\uC2DC\uD569\uB2C8\uB2E4.</span>${admin ? "" : "<span><b>+</b> \uADF8\uB0A0 \uC2DD\uB300 \uC785\uB825</span>"}</div><div class="receipt-calendar" aria-label="\uC2DD\uB300\uC640 \uD734\uBB34 \uC6D4\uAC04 \uB2EC\uB825">${receiptCalendar(rows, month2, selectedDate, blobURL, scheduleForDate, admin ? staffId : person.personId, !admin)}</div><section class="receipt-selected"><div class="receipt-selected-heading"><h3>${esc4(selectedDate)} \uC2DD\uB300 \uB0B4\uC5ED</h3>${admin ? "" : `<button type="button" class="receipt-add-day" data-receipt-add="${esc4(selectedDate)}">+ \uC2DD\uB300 \uC785\uB825</button>`}</div><div class="meal-schedule-chips">${scheduleChips(scheduleForDate(selectedDate))}</div>${dayRows.length ? dayRows.map((r3) => `<article class="receipt-entry"><div class="receipt-entry-heading"><div><strong>${esc4(r3.name)}</strong><span>${esc4(r3.rawTeam)}</span></div><strong>${won(r3.amount)}</strong></div><p class="receipt-note">${esc4(r3.note || "\uBA54\uBAA8 \uC5C6\uC74C")}</p><p class="receipt-record-status">${r3.files.length ? "\uC601\uC218\uC99D \uB4F1\uB85D\uB428 \xB7 \uC0AC\uC9C4 " + r3.files.length + "\uC7A5" : "\uB0B4\uC6A9 \uC800\uC7A5\uB428"}</p>${!admin ? `<button type="button" data-receipt-edit="${esc4(r3.id)}">\uB0B4\uC6A9 \uC218\uC815</button>` : ""}<div class="receipt-thumbnails">${r3.files.map((f3, i3) => `<button data-receipt-view="${esc4(r3.id)}" data-photo-index="${i3}" aria-label="${esc4(r3.name)} \uC601\uC218\uC99D \uC0AC\uC9C4 ${i3 + 1} \uD06C\uAC8C \uBCF4\uAE30"><img src="${blobURL(f3.blob)}" alt="${esc4(r3.name)} ${esc4(r3.date)} \uC601\uC218\uC99D ${i3 + 1}"><span>\uC0AC\uC9C4 ${i3 + 1} \uD06C\uAC8C \uBCF4\uAE30</span></button>`).join("")}</div></article>`).join("") : '<p class="empty">\uC774 \uB0A0\uC9DC\uC5D0 \uB4F1\uB85D\uB41C \uC2DD\uB300\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p>'}</section>`;
    if (compact) {
      const recent = [...rows].sort((a3, b3) => b3.createdAt - a3.createdAt).slice(0, 5);
      root.querySelector(".receipt-summary").insertAdjacentHTML("afterend", `<div class="receipt-submissions"><p>\uCD5C\uADFC \uC81C\uCD9C ${recent.length}\uAC74 \xB7 \uC870\uD68C\uB41C \uC804\uCCB4 ${rows.length}\uAC74</p>${recent.length ? recent.map((r3) => `<article class="receipt-submission"><div><strong>${esc4(r3.name)}</strong><span>${esc4(r3.rawTeam)} \xB7 \uC0AC\uC6A9\uC77C ${esc4(r3.date)}</span><small>\uC81C\uCD9C ${esc4(new Date(r3.createdAt).toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }))}</small></div><div class="receipt-submission-total"><strong>${won(r3.amount)}</strong><span>\uC0AC\uC9C4 ${r3.files.length}\uC7A5</span></div>${r3.files.length ? `<button data-receipt-view="${esc4(r3.id)}" data-photo-index="0">\uC0AC\uC9C4 \uBCF4\uAE30</button>` : '<span class="badge">\uB0B4\uC6A9\uB9CC \uC800\uC7A5</span>'}</article>`).join("") : '<p class="empty">\uC120\uD0DD\uD55C \uC870\uAC74\uC5D0 \uC81C\uCD9C\uB41C \uC2DD\uB300\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p>'}</div>`);
    }
    const exportButton = root.querySelector("[data-receipt-export]");
    if (exportButton) exportButton.disabled = !rows.length;
  }
  async function reload(preferredDate) {
    const version = ++loading;
    try {
      const rows = await listReceipts();
      if (disposed || version !== loading) return;
      all = rows;
      if (preferredDate) selectedDate = preferredDate;
      else if (!all.some((r3) => r3.date === selectedDate)) {
        const first = filtered()[0];
        if (first) selectedDate = first.date;
      }
      error("");
      draw();
    } catch (e3) {
      if (disposed || version !== loading) return;
      error(e3.message);
      onLoadError?.();
      root.querySelector(".receipt-body").innerHTML = '<p class="empty">\uC2DD\uB300 \uAE30\uB85D\uC744 \uD45C\uC2DC\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C\uACE0\uCE68 \uD6C4 \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.</p>';
    }
  }
  root.addEventListener("change", (event) => {
    if (event.target.matches("[data-receipt-team]")) {
      onTeamChange?.(event.target.value);
      return;
    }
    if (event.target.matches("[data-receipt-person]")) {
      staffId = event.target.value;
      viewState.staffId = staffId;
      selectedDate = filtered()[0]?.date || selectedDate;
      draw();
    }
  });
  root.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target, button = form.querySelector("[type=submit]");
    if (saving) return;
    saving = true;
    button.disabled = true;
    root.querySelectorAll("[data-receipt-edit]").forEach((b3) => b3.disabled = true);
    form.querySelector(".form-error").textContent = "";
    try {
      if (form.matches("[data-retention-form]")) {
        const value = Number(new FormData(form).get("days"));
        setRetentionDays(localStorage, value);
        root.querySelector("[data-retention-label]").textContent = value + "\uC77C";
        toast2("\uBCF4\uAD00 \uAE30\uAC04 \uC124\uC815\uC744 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4. \uC790\uB3D9\uC0AD\uC81C\uB294 \uC6B4\uC601 \uC5F0\uACB0 \uD6C4 \uC801\uC6A9\uB429\uB2C8\uB2E4.");
      } else {
        const values = new FormData(form), files = [];
        const dates = editing ? [String(values.get("date"))] : receiptDates(String(values.get("date")), String(values.get("end") || ""));
        const base = { personId: person.personId, name: person.name, teams: person.teams, rawTeam: person.rawTeam, amount: Number(values.get("amount")), note: String(values.get("note")).trim(), files, allowedMonths: months };
        let saved;
        for (const date of dates) saved = await saveReceipt({ ...base, id: editing?.id, expectedUpdatedAt: editing?.updatedAt || editing?.createdAt, date });
        if (disposed) return;
        editing = null;
        form.reset();
        root.querySelector(".receipt-editing").hidden = true;
        form.elements.date.value = saved.date;
        root.querySelector("#receipt-upload").open = false;
        const savedMonth = dates[0].slice(2, 4) + dates[0].slice(5, 7);
        await reload(savedMonth === month2 ? dates[0] : void 0);
        toast2((dates.length > 1 ? `${dates.length}\uC77C\uCE58 \uC2DD\uB300\uB97C \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.` : "\uC2DD\uB300 \uB0B4\uC6A9\uC744 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.") + (savedMonth === month2 ? "" : ` ${dates[0].slice(0, 7)} \uC870\uD68C \uC6D4\uC5D0\uC11C \uD655\uC778\uD574 \uC8FC\uC138\uC694.`));
      }
    } catch (e3) {
      if (!disposed) form.querySelector(".form-error").textContent = e3.message;
    } finally {
      saving = false;
      button.disabled = false;
      if (!disposed) {
        root.querySelectorAll("[data-receipt-edit]").forEach((b3) => b3.disabled = false);
      }
    }
  });
  root.addEventListener("click", async (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.receiptEdit) {
      if (saving || admin) return;
      const record = filtered().find((r3) => r3.id === button.dataset.receiptEdit && r3.personId === person.personId);
      if (!record) return;
      editing = record;
      const form = root.querySelector("#receipt-form");
      form.reset();
      form.elements.date.value = record.date;
      form.elements.amount.value = record.amount;
      form.elements.note.value = record.note;
      const hint = root.querySelector(".receipt-editing");
      hint.hidden = false;
      hint.textContent = record.date + " \uC800\uC7A5 \uB0B4\uC5ED \uC218\uC815 \xB7 \uAE08\uC561\uC740 \uD55C \uBC88\uB9CC \uD569\uC0B0\uB429\uB2C8\uB2E4.";
      root.querySelector("#receipt-upload").open = true;
      form.elements.amount.focus();
      return;
    }
    if (button.hasAttribute("data-receipt-expand")) {
      expanded = !expanded;
      viewState.expanded = expanded;
      root.querySelector(".receipt-panel").classList.toggle("is-expanded", expanded);
      button.setAttribute("aria-expanded", String(expanded));
      button.textContent = expanded ? "\uB2EC\uB825 \uC811\uAE30" : "\uC2DD\uB300 \uBAA8\uC544\uBCF4\uAE30";
      return;
    }
    if (button.dataset.receiptDay) {
      if (saving) return;
      if (editing) {
        editing = null;
        const form = root.querySelector("#receipt-form");
        form?.reset();
        root.querySelector(".receipt-editing").hidden = true;
      }
      selectedDate = button.dataset.receiptDay;
      const dateInput = root.querySelector("input[name=date]");
      if (dateInput) dateInput.value = selectedDate;
      draw();
      return;
    }
    if (button.dataset.receiptAdd) {
      newEntry(button.dataset.receiptAdd, "amount");
      return;
    }
    if (button.hasAttribute("data-receipt-export")) {
      button.disabled = true;
      try {
        const rows = filtered(), zip = await receiptArchive(rows);
        if (!disposed) downloadBlob(zip, `\uC2DD\uB300\uC601\uC218\uC99D_${month2}_${safeFilename(team2 === "\uC804\uCCB4" ? "\uC804\uCCB4\uD300" : team2 + "\uD300")}_${staffId ? safeFilename(people.find((p3) => p3.personId === staffId)?.name) : "\uC804\uCCB4\uC9C1\uC6D0"}.zip`);
      } catch (e3) {
        error(e3.message);
      } finally {
        if (!disposed) button.disabled = !filtered().length;
      }
      return;
    }
    if (button.dataset.receiptView) {
      const record = filtered().find((r3) => r3.id === button.dataset.receiptView);
      if (!record) return;
      showPhotos(record, Number(button.dataset.photoIndex));
    }
  });
  function showPhotos(record, index4) {
    if (!record.files.length) return;
    viewer?.close();
    const dialog = document.createElement("dialog");
    dialog.className = "receipt-viewer";
    let photoURL = "";
    function paint() {
      if (photoURL) URL.revokeObjectURL(photoURL);
      const file = record.files[index4];
      photoURL = URL.createObjectURL(file.blob);
      dialog.innerHTML = `<div class="dialog-heading"><div><h2>${esc4(record.name)} \uC601\uC218\uC99D</h2><p>${esc4(record.date)} \xB7 ${won(record.amount)} \xB7 ${index4 + 1}/${record.files.length}\uC7A5</p></div><button data-photo-close aria-label="\uC601\uC218\uC99D \uC0AC\uC9C4 \uB2EB\uAE30">\uB2EB\uAE30 \u2715</button></div><div class="receipt-photo"><img src="${photoURL}" alt="${esc4(record.date)} ${esc4(record.name)} \uC601\uC218\uC99D"></div><div class="receipt-photo-actions"><button data-photo-prev ${index4 === 0 ? "disabled" : ""}>\uC774\uC804 \uC0AC\uC9C4</button><a class="button" href="${photoURL}" download="${esc4(safeFilename(record.name) + "_" + record.date + "_" + (index4 + 1) + "." + ({ "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" }[file.type] || "bin"))}">\uC0AC\uC9C4 \uB2E4\uC6B4\uB85C\uB4DC</a><button data-photo-next ${index4 === record.files.length - 1 ? "disabled" : ""}>\uB2E4\uC74C \uC0AC\uC9C4</button></div>`;
    }
    dialog.addEventListener("click", (event) => {
      if (event.target.closest("[data-photo-close]")) dialog.close();
      if (event.target.closest("[data-photo-prev]") && index4 > 0) {
        index4--;
        paint();
      }
      if (event.target.closest("[data-photo-next]") && index4 < record.files.length - 1) {
        index4++;
        paint();
      }
    });
    dialog.addEventListener("close", () => {
      URL.revokeObjectURL(photoURL);
      dialog.remove();
      if (viewer === dialog) viewer = null;
    });
    root.append(dialog);
    viewer = dialog;
    paint();
    dialog.showModal();
  }
  function newEntry(date = "", field = "date") {
    if (disposed || admin) return;
    if (saving) {
      toast2("\uC800\uC7A5 \uC911\uC785\uB2C8\uB2E4. \uC644\uB8CC \uD6C4 \uC0C8 \uB0B4\uC5ED\uC744 \uB4F1\uB85D\uD574 \uC8FC\uC138\uC694.");
      return;
    }
    if (date && date !== selectedDate) {
      selectedDate = date;
      draw();
    }
    editing = null;
    const form = root.querySelector("#receipt-form");
    form.reset();
    form.elements.date.value = selectedDate;
    root.querySelector(".receipt-editing").hidden = true;
    form.querySelector(".form-error").textContent = "";
    root.querySelector("#receipt-upload").open = true;
    form.elements[field].focus();
  }
  reload();
  return { refresh: reload, newEntry, dispose() {
    disposed = true;
    release();
    viewer?.close();
  } };
}
function downloadBlob(blob, name) {
  const url = URL.createObjectURL(blob), link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 6e4);
}

// src/theme.js
var THEME_KEY = "bb-staff:public-preview:theme:v1";
var preference = null;
var media;
var readPreference = () => {
  try {
    const value = localStorage.getItem(THEME_KEY);
    return ["light", "dark"].includes(value) ? value : null;
  } catch {
    return null;
  }
};
var dark = () => document.documentElement.dataset.theme === "dark";
function buttonContents() {
  const path = dark() ? "M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" : "M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z";
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="${path}"/></svg><span>${dark() ? "\uB77C\uC774\uD2B8 \uBAA8\uB4DC" : "\uB2E4\uD06C \uBAA8\uB4DC"}</span>`;
}
function themeControl() {
  return `<button class="theme-toggle" data-theme-toggle type="button" aria-label="${dark() ? "\uB77C\uC774\uD2B8" : "\uB2E4\uD06C"} \uBAA8\uB4DC\uB85C \uC804\uD658">${buttonContents()}</button>`;
}
function applyTheme() {
  document.documentElement.dataset.theme = preference || (media.matches ? "dark" : "light");
  for (const button of document.querySelectorAll("[data-theme-toggle]")) {
    button.innerHTML = buttonContents();
    button.setAttribute("aria-label", `${dark() ? "\uB77C\uC774\uD2B8" : "\uB2E4\uD06C"} \uBAA8\uB4DC\uB85C \uC804\uD658`);
  }
}
function initializeTheme() {
  media = matchMedia("(prefers-color-scheme: dark)");
  preference = readPreference();
  applyTheme();
  media.addEventListener("change", () => {
    if (!preference) applyTheme();
  });
  addEventListener("storage", (event) => {
    if (event.key === THEME_KEY || event.key === null) {
      preference = readPreference();
      applyTheme();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-theme-toggle]")) return;
    preference = dark() ? "light" : "dark";
    try {
      localStorage.setItem(THEME_KEY, preference);
    } catch {
    }
    applyTheme();
  });
}

// src/schedule-view.js
var esc5 = (value) => String(value ?? "").replace(/[&<>"']/g, (c3) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c3]);
var scheduleDate = (month2, day) => `20${month2.slice(0, 2)}-${month2.slice(2)}-${String(day).padStart(2, "0")}`;
function addedSchedule(records, row, day) {
  return records.filter((r3) => r3.kind === "schedule" && r3.personId === row.personId && r3.date === scheduleDate(row.month, day));
}
function rosterDayCell(row, day, records, mobile = false) {
  const cell = row.days[day], added = addedSchedule(records, row, day), date = scheduleDate(row.month, day), label = cell?.value || cell?.colorMeaning || cell?.label || "\uC0C9\uC0C1 \uD45C\uC2DC";
  const swatch2 = (color) => /^[A-Fa-f0-9]{6}$/.test(color || "") ? `<i class="swatch" style="--source-color:#${color}" aria-label="\uC6D0\uBCF8 \uC0C9\uC0C1 #${color}"></i>` : "";
  const cellSource = cell ? sourceIdOf(cell.source) : "", hidden = !!cell && overrideMap(records).has(cellSource);
  const original = cell && !hidden ? `<span class="roster-original" data-drag-source="${esc5(JSON.stringify({ sourceId: cellSource, from: date, label, color: cell.color || "", note: cell.note || "" }))}" data-drag-person="${esc5(row.personId)}">${swatch2(cell.color)}<span>${esc5(label)}</span></span>` : "";
  const chips = added.map((r3) => r3.override ? `<span class="roster-original roster-moved" data-drag-group="${esc5(groupOf(r3))}" data-drag-person="${esc5(row.personId)}" title="\uC2DC\uD2B8 \uC77C\uC815 \xB7 \uC6D0\uB798 ${esc5(r3.from)}">${swatch2(r3.color)}<span>${esc5(r3.label)}</span></span>` : `<span class="roster-added" data-drag-group="${esc5(groupOf(r3))}" data-drag-person="${esc5(row.personId)}">${esc5(r3.label)}</span>`).join("");
  const details = original || added.length ? `<button class="roster-day-record" data-roster-row="${esc5(row.id)}" data-roster-day="${day}" aria-label="${esc5(row.name + " " + date + " \uC77C\uC815 \uBCF4\uAE30")}">${original}${chips}</button>` : '<span class="roster-day-empty">\u2014</span>';
  return `<div class="roster-calendar-day ${mobile ? "" : "roster-desktop-day"}" data-drop-date="${date}" data-drop-person="${esc5(row.personId)}"><div class="roster-day-top">${mobile ? `<strong>${day}</strong>` : ""}<button class="calendar-add" data-schedule-add="${date}" data-schedule-person="${esc5(row.personId)}" aria-label="${esc5(row.name + " " + date + " \uC77C\uC815 \uCD94\uAC00")}">+</button></div>${details}</div>`;
}
function schedulePickerDays(month2) {
  return `<div class="daily-weekdays">${["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"].map((d2) => `<span>${d2}</span>`).join("")}</div><div class="schedule-picker-days">${calendarDays(month2).map((day) => day ? `<button type="button" data-picker-date="${scheduleDate(month2, day)}" aria-label="${scheduleDate(month2, day)} \uC77C\uC815 \uCD94\uAC00"><strong>${day}</strong><span aria-hidden="true">+</span></button>` : "<span></span>").join("")}</div>`;
}

// src/preview-auth.js
var SESSION_KEY = "bb-staff:public-preview:test-session:v1";
var normalize = (value) => typeof value === "string" ? value.normalize("NFC").trim().replace(/\s+/g, "") : "";
var esc6 = (value) => String(value ?? "").replace(/[&<>"']/g, (c3) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c3]);
var currentRosterMonth = (roster) => {
  const today3 = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul" }).format(/* @__PURE__ */ new Date()), months = [...new Set(roster.map((r3) => r3.month))].sort();
  return months.filter((m3) => m3 <= today3.slice(2, 4) + today3.slice(5, 7)).at(-1) || months[0] || "";
};
function employeeDirectory(roster, rosterMonth = currentRosterMonth(roster)) {
  const people = /* @__PURE__ */ new Map();
  for (const row of roster) {
    if (row.month !== rosterMonth || !row.personId || !row.name) continue;
    if (!people.has(row.personId)) people.set(row.personId, { personId: row.personId, name: row.name, rawTeam: row.rawTeam || "", teams: [...row.teams || []], jobTitle: typeof row.role === "string" ? row.role.trim() : "" });
  }
  return [...people.values()];
}
function authenticatePreview(people, { role, name, password, personId = "" }) {
  if (role === "admin") return normalize(name) === "\uBDF0\uD2F0\uBE14\uB77C\uC378" && password === "4321" ? { session: { version: 1, role: "admin" } } : { error: "\uAD00\uB9AC\uC790 \uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694." };
  if (role !== "employee" || password !== "1111" || !normalize(name)) return { error: "\uC774\uB984\uACFC \uBE44\uBC00\uBC88\uD638\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694." };
  const candidates = people.filter((p3) => normalize(p3.name) === normalize(name));
  if (!candidates.length) return { error: "\uBA85\uBD80\uC5D0\uC11C \uC774\uB984\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC774\uB984\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694." };
  const person = candidates.length === 1 ? candidates[0] : candidates.find((p3) => p3.personId === personId);
  if (!person) return { candidates };
  return { session: { version: 1, role: "employee", personId: person.personId } };
}
function restorePreviewSession(storage, people) {
  try {
    const value = JSON.parse(storage.getItem(SESSION_KEY));
    if (value?.version !== 1) return null;
    if (value.role === "admin") return { version: 1, role: "admin" };
    if (value.role === "employee" && people.some((p3) => p3.personId === value.personId)) return { version: 1, role: "employee", personId: value.personId };
  } catch {
  }
  return null;
}
function allowedRoute(session, route) {
  if (!session) return "login";
  const employee = ["meal-timer", "roster", "team-calendar", "meals", "team-snacks", "picker", "expenses", "attendance"];
  const admin = ["admin-dashboard", "roster", "team-calendar", "meals", "team-snacks", "picker", "expenses", "attendance", "sources", "feedback"];
  const routes = session.role === "admin" ? admin : employee;
  return routes.includes(route) ? route : routes[0];
}
function mountPreviewLogin(root, { people, themeControl: themeControl2, onLogin }) {
  let role = "employee";
  function paint() {
    root.innerHTML = `<main class="login-page"><div class="login-theme">${themeControl2()}</div><section class="login-card"><img src="./assets/clinic-logo.png" width="68" height="68" alt="\uBDF0\uD2F0\uBE14\uB77C\uC378 \uB85C\uACE0"><p class="login-eyebrow">\uD568\uAED8\uD558\uB294 \uD558\uB8E8</p><h1>\uBDF0\uD2F0\uBE14\uB77C\uC378</h1><p>\uB0B4 \uC774\uB984\uC73C\uB85C \uC2DC\uC791\uD558\uB294 \uC9C1\uC6D0 \uC5C5\uBB34 \uACF5\uAC04</p><div class="login-tabs" role="group" aria-label="\uB85C\uADF8\uC778 \uC720\uD615"><button type="button" data-login-role="employee" aria-pressed="${role === "employee"}">\uC9C1\uC6D0 \uB85C\uADF8\uC778</button><button type="button" data-login-role="admin" aria-pressed="${role === "admin"}">\uAD00\uB9AC\uC790 \uB85C\uADF8\uC778</button></div><form id="preview-login"><label>${role === "employee" ? "\uC774\uB984" : "\uAD00\uB9AC\uC790 \uC544\uC774\uB514"}<input name="name" required maxlength="80" autocomplete="username" placeholder="${role === "employee" ? "\uBA85\uBD80\uC5D0 \uC788\uB294 \uBCF8\uC778 \uC774\uB984" : "\uAD00\uB9AC\uC790 \uC544\uC774\uB514"}"></label><label>\uBE44\uBC00\uBC88\uD638<input name="password" type="password" required maxlength="80" autocomplete="current-password" inputmode="numeric"></label><div id="login-identity"></div><p class="form-error" role="alert"></p><button type="submit" class="primary">\uB85C\uADF8\uC778</button></form>${role === "employee" ? '<p class="login-tip">\uC9C1\uC6D0 \uD14C\uC2A4\uD2B8 \uBE44\uBC00\uBC88\uD638: <strong>1111</strong><br>\uB3D9\uBA85\uC774\uC778\uC740 \uD300\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.</p>' : ""}<p class="login-notice">\uD654\uBA74 \uCCB4\uD5D8\uC6A9 \uD14C\uC2A4\uD2B8 \uB85C\uADF8\uC778\uC785\uB2C8\uB2E4.<br>\uC785\uB825 \uAE30\uB85D\uC740 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uB9CC \uC800\uC7A5\uB418\uBA70 \uB2E4\uB978 \uAE30\uAE30\uC640 \uC790\uB3D9 \uACF5\uC720\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p></section></main>`;
    for (const button of root.querySelectorAll("[data-login-role]")) button.addEventListener("click", () => {
      role = button.dataset.loginRole;
      paint();
      root.querySelector("[name=name]").focus();
    });
    const form = root.querySelector("form");
    form.addEventListener("input", (event) => {
      if (event.target.name === "name") form.querySelector("#login-identity").replaceChildren();
      form.querySelector(".form-error").textContent = "";
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const values = new FormData(form), result = authenticatePreview(people, { role, name: values.get("name"), password: values.get("password"), personId: values.get("personId") });
      if (result.error) {
        form.querySelector(".form-error").textContent = result.error;
        return;
      }
      if (result.candidates) {
        form.querySelector("#login-identity").innerHTML = `<label>\uB3D9\uBA85\uC774\uC778 \xB7 \uBCF8\uC778 \uD300 \uC120\uD0DD<select name="personId" required><option value="">\uD300\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694</option>${result.candidates.map((p3) => `<option value="${esc6(p3.personId)}">${esc6(p3.name)} \xB7 ${esc6(p3.rawTeam)}</option>`).join("")}</select></label>`;
        form.querySelector("[name=personId]").focus();
        return;
      }
      form.querySelector("[name=password]").value = "";
      onLogin(result.session);
    });
  }
  paint();
}

// src/picture-guide.js
var esc7 = (value) => String(value ?? "").replace(/[&<>"']/g, (c3) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c3]);
var step = (image, title, text2) => ({ image, title, text: text2 });
var common = {
  login: { title: "\uB85C\uADF8\uC778\xB7\uB85C\uADF8\uC544\uC6C3", steps: [step("login", "\uB0B4 \uACC4\uC815\uC73C\uB85C \uB4E4\uC5B4\uAC00\uAE30", "\uC9C1\uC6D0\uC740 \uBCF8\uC778 \uC774\uB984\uACFC \uD14C\uC2A4\uD2B8 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC694. \uAC19\uC740 \uC774\uB984\uC774 \uC788\uC73C\uBA74 \uBCF8\uC778 \uD300\uC744 \uC120\uD0DD\uD558\uC138\uC694."), step("logout", "\uC0AC\uC6A9 \uD6C4 \uB85C\uADF8\uC544\uC6C3", "\uC624\uB978\uCABD \uC704 \uB85C\uADF8\uC544\uC6C3\uC744 \uB204\uB974\uBA74 \uB85C\uADF8\uC778 \uD654\uBA74\uC73C\uB85C \uB3CC\uC544\uAC11\uB2C8\uB2E4.")] },
  feedback: { title: "\uC758\uACAC \uB0A8\uAE30\uAE30", steps: [step("feedback-write", "\uD53C\uB4DC\uBC31\xB7\uC694\uCCAD\uC0AC\uD56D \uC5F4\uAE30", "\uBD88\uD3B8\uD588\uB358 \uD654\uBA74 \uC704\uCABD\uC758 \uD53C\uB4DC\uBC31\xB7\uC694\uCCAD\uC0AC\uD56D\uC744 \uD3BC\uCCD0 \uB0B4\uC6A9\uC744 \uC801\uC5B4\uC694."), step("feedback-saved", "\uBA54\uBAA8 \uC800\uC7A5 \uD655\uC778", "\uBA54\uBAA8 \uC800\uC7A5\uC744 \uB204\uB974\uACE0 \uC544\uB798 \uC800\uC7A5 \uB0B4\uC5ED\uC744 \uD655\uC778\uD574\uC694. \uB2E4\uB978 \uAE30\uAE30\uB85C \uC804\uB2EC\uD558\uB824\uBA74 \uB0B4 \uBA54\uBAA8 \uD30C\uC77C\uC744 \uB0B4\uB824\uBC1B\uC544 \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBCF4\uB0B4 \uC8FC\uC138\uC694.")] }
};
var expenseApplication = { title: "\uC9C0\uCD9C\uACB0\uC758\uC11C \uC2E0\uCCAD \uBC29\uBC95", steps: [
  step("expense-request-fields", "\uC0AC\uC6A9\uC77C\xB7\uBB3C\uD488\xB7\uB2E8\uAC00\xB7\uC218\uB7C9 \uC785\uB825", "\uC9C1\uC6D0 \uACC4\uC815\uC73C\uB85C \uC9C0\uCD9C\uACB0\uC758\uC11C \u2192 \uB0B4 \uC2E0\uCCAD \u2192 + \uC9C0\uCD9C\uACB0\uC758\uC11C \uC2E0\uCCAD\uC744 \uC5F4\uC5B4\uC694. \uC0AC\uC6A9\uC77C\uACFC \uD300, \uBD84\uB958, \uBB3C\uD488 \uB610\uB294 \uBAA9\uC801\uC744 \uC801\uACE0 \uB2E8\uAC00\xB7\uC218\uB7C9\uC744 \uC785\uB825\uD558\uC138\uC694. \uC0AC\uC9C4\uC740 \uCC44\uBBFC\uC9C0 \uC9C1\uC6D0\uC758 12,000\uC6D0 \xD7 2\uAC1C \uBAA8\uC758 \uC2E0\uCCAD\uC785\uB2C8\uB2E4."),
  step("expense-request-submit", "\uD569\uACC4\uC640 4\uB2E8\uACC4 \uACB0\uC7AC\uC120 \uD655\uC778 \uD6C4 \uC2E0\uCCAD", "24,000\uC6D0\uCC98\uB7FC \uACC4\uC0B0\uB41C \uD569\uACC4\uB97C \uD655\uC778\uD574\uC694. \uD300\uC7A5 \u2192 \uCD1D\uAD04\uC2E4\uC7A5 \u2192 \uB300\uD45C\uC774\uC0AC \u2192 \uB300\uD45C\uC6D0\uC7A5 \uB2F4\uB2F9\uC790\uAC00 \uBAA8\uB450 \uB9DE\uC73C\uBA74 \uC2E0\uCCAD\uD558\uAE30\uB97C \uB204\uB974\uC138\uC694. \uB2F4\uB2F9\uC790\uAC00 \uC5C6\uAC70\uB098 \uBCF8\uC778\uC774 \uD3EC\uD568\uB418\uBA74 \uAD00\uB9AC\uC790\uC5D0\uAC8C \uACB0\uC7AC\uC120 \uC218\uC815\uC744 \uC694\uCCAD\uD558\uC138\uC694."),
  step("expense-request-saved", "\uB0B4 \uC2E0\uCCAD\uC5D0 \uB4F1\uB85D\uB410\uB294\uC9C0 \uD655\uC778", "\uC544\uB798 \uB0B4 \uC2E0\uCCAD\uC5D0 \uBB3C\uD488\uACFC \uAE08\uC561, \uD300\uC7A5 \uACB0\uC7AC \uB300\uAE30\uAC00 \uD45C\uC2DC\uB418\uBA74 \uC81C\uCD9C\uB41C \uC0C1\uD0DC\uC608\uC694. \uC2E0\uCCAD \uB0B4\uC6A9\xB7\uACB0\uC7AC \uC774\uB825\uC744 \uD3BC\uCE58\uBA74 \uB4F1\uB85D \uC2DC\uAC01\uACFC \uC774\uD6C4 \uCC98\uB9AC \uACB0\uACFC\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC5B4\uC694. \uC9C4\uD589 \uC911\uC778 \uBCF8\uC778 \uC2E0\uCCAD\uC740 \uCDE8\uC18C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),
  step("expense-approve-current", "\uB2F4\uB2F9\uC790 \uACC4\uC815\uC5D0\uC11C \uC21C\uC11C\uB300\uB85C \uC2B9\uC778", "\uB2F4\uB2F9\uC790\uB294 \uC790\uC2E0\uC758 \uC9C1\uC6D0 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uD558\uACE0 \uB0B4 \uACB0\uC7AC\uD568\uC744 \uC5F4\uC5B4\uC694. \uB0B4 \uACB0\uC7AC \uCC28\uB840\uC5D0\uB9CC \uC2B9\uC778\xB7\uBC18\uB824 \uBC84\uD2BC\uC774 \uBCF4\uC5EC\uC694. \uBC18\uB824\uD560 \uB54C\uB294 \uC0AC\uC720\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. \uD604\uC7AC \uCD08\uC548\uC740 \uAC19\uC740 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uACC4\uC815\uC744 \uBC14\uAFD4 \uCCB4\uD5D8\uD558\uBA70, \uB2E4\uB978 \uAE30\uAE30\uB85C \uC804\uB2EC\uB418\uC9C0\uB294 \uC54A\uC544\uC694."),
  step("expense-final-status", "4\uB2E8\uACC4\uAC00 \uB05D\uB098\uBA74 \uCD5C\uC885 \uC2B9\uC778 \uD655\uC778", "\uB300\uD45C\uC6D0\uC7A5\uAE4C\uC9C0 \uC2B9\uC778\uD558\uBA74 \uB0B4 \uC2E0\uCCAD\uC5D0 \uCD5C\uC885 \uC2B9\uC778\uC774 \uD45C\uC2DC\uB3FC\uC694. \uC0AC\uC9C4\uC758 \uBAA8\uC758 \uC2E0\uCCAD\uC740 \uAC01 \uB2F4\uB2F9\uC790 \uACC4\uC815\uC5D0\uC11C \uCC28\uB840\uB300\uB85C \uC2B9\uC778\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4. \uCD5C\uC885 \uC2B9\uC778\uC740 \uACB0\uC7AC \uC0C1\uD0DC\uC774\uBA70 \uC2E4\uC81C \uC9C0\uAE09\uC744 \uC2E4\uD589\uD558\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4."),
  step("expense-final-history", "\uCC98\uB9AC\uC790\xB7\uC21C\uC11C\xB7\uC758\uACAC \uD655\uC778", "\uC2E0\uCCAD \uB0B4\uC6A9\xB7\uACB0\uC7AC \uC774\uB825\uC5D0\uB294 \uCD5C\uCD08 \uC2E0\uCCAD\uACFC 4\uB2E8\uACC4 \uC2B9\uC778 \uAE30\uB85D\uC774 \uB0A8\uC544\uC694. \uAC01 \uCC98\uB9AC\uC790\uC758 \uC774\uB984, \uCC98\uB9AC \uC2DC\uAC01\uACFC \uC758\uACAC\uC744 \uD655\uC778\uD558\uC138\uC694.")
] };
var topics = {
  employee: {
    expenses: expenseApplication,
    status: { title: "\uC2DD\uC0AC \uC2DC\uC791\xB7\uB2E4\uB978 \uD300 \uD604\uD669", steps: [step("status-start", "\uC2DD\uC0AC\uD558\uB7EC \uAC08 \uB54C \uC2DC\uC791", "\uB0B4 \uD558\uB8E8\uC5D0\uC11C \uC2DD\uC0AC\uC911\uC744 \uB20C\uB7EC\uC694. \uC2DC\uC791\uD558\uBA74 \uC2DD\uC0AC \uC2DC\uC791 \uC2DC\uAC01\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4."), step("status-end", "\uC2DD\uC0AC \uD604\uD669 \uD655\uC778\xB7\uBCF5\uADC0", "\uC544\uB798\uC5D0\uC11C \uB2E4\uB978 \uD300\uC758 \uC2DD\uC0AC \uD604\uD669\uB3C4 \uBCFC \uC218 \uC788\uC5B4\uC694. \uD604\uC7AC \uC2DD\uC0AC\uC885\uB8CC \uBC84\uD2BC\uC740 \uC720\uC9C0\uB429\uB2C8\uB2E4. \uBCF5\uADC0\uD558\uBA74 \uB20C\uB7EC \uC8FC\uC138\uC694.")] },
    schedule: { title: "\uB0B4 \uADFC\uBB34\uD45C\xB7\uD734\uBB34 \uB4F1\uB85D", steps: [step("schedule-calendar", "\uB0A0\uC9DC\uC758 + \uB204\uB974\uAE30", "\uB0B4 \uADFC\uBB34\uD45C\uC5D0\uC11C \uD734\uBB34\xB7\uC5F0\uCC28\xB7\uBC18\uCC28\uB97C \uD655\uC778\uD574\uC694. \uC77C\uC815\uC744 \uCD94\uAC00\uD560 \uB0A0\uC9DC\uC758 + \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC694."), step("schedule-form", "\uB0B4\uC6A9\uC744 \uACE0\uB974\uACE0 \uB4F1\uB85D", "\uC77C\uC815 \uC885\uB958\uC640 \uBA54\uBAA8\uB97C \uC785\uB825\uD558\uACE0 \uB4F1\uB85D\uD558\uAE30\uB97C \uB204\uB974\uBA74 \uB0B4 \uADFC\uBB34\uD45C\uC640 \uD300 \uC77C\uC815\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.")] },
    team: { title: "\uD300 \uC77C\uC815 \uBCF4\uAE30", steps: [step("team-filter", "\uBCFC \uD300 \uC120\uD0DD", "\uD300 \uC77C\uC815\uC5D0\uC11C \uC870\uD68C \uC6D4\uACFC \uD300\uC744 \uC120\uD0DD\uD574\uC694. \uC9C1\uC6D0 \uCC3E\uAE30\uB97C \uD568\uAED8 \uC4F0\uBA74 \uB354 \uC881\uD600 \uBCFC \uC218 \uC788\uC5B4\uC694."), step("duty-workers", "\uC704\uCABD\uC5D0\uC11C \uADFC\uBB34\uC790 \uD655\uC778", "\uD655\uC778\uD560 \uB0A0\uC9DC\uB97C \uACE0\uB974\uBA74 \uADFC\uBB34\xB7\uC624\uC804 \uADFC\uBB34\xB7\uC624\uD6C4 \uADFC\uBB34\xB7\uD734\uBB34 \uC778\uC6D0\uC744 \uBCFC \uC218 \uC788\uC5B4\uC694. \uC77C\uC815\uC774 \uBE44\uC5B4 \uC788\uC73C\uBA74 \uBBF8\uAE30\uC7AC\uB85C \uB0A8\uC2B5\uB2C8\uB2E4."), step("team-calendar", "\uB2EC\uB825\uC5D0\uC11C \uC77C\uC815 \uD655\uC778", "\uC120\uD0DD\uD55C \uD300\uC758 \uC77C\uC815\uB9CC \uBCF4\uC785\uB2C8\uB2E4. \uC2DC\uD2B8 \uC9C1\uCC45 \uAE30\uC900\uC73C\uB85C \uAD8C\uD55C\uC774 \uC801\uC6A9\uB41C \uC8FC\uC784 \uC774\uC0C1 \uC9C1\uC6D0\uC740 \uBCF8\uC778 \uD300\uC6D0 \uC77C\uC815\uB3C4 \uB4F1\uB85D\uD560 \uC218 \uC788\uC5B4\uC694. \uAD00\uB9AC\uC790\uC5D0\uAC8C \uAD8C\uD55C\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")] },
    receipt: { title: "\uC2DD\uB300 \uD55C\uB3C4\xB7\uAE08\uC561 \uAE30\uB85D", steps: [step("receipt-budget", "\uD55C\uB3C4\uC640 \uC794\uC561 \uBA3C\uC800 \uD655\uC778", "\uB0B4 \uC2DD\uB300 \uB9E8 \uC704\uC5D0\uC11C \uC774\uB2EC \uD55C\uB3C4\xB7\uC0AC\uC6A9\uC561\xB7\uC794\uC561\uC744 \uD655\uC778\uD574\uC694. \uCD94\uAC00 \uC0AC\uC6A9\uC561\uB3C4 \uC794\uC561\uC5D0 \uBC18\uC601\uB429\uB2C8\uB2E4."), step("receipt-content", "\uAE08\uC561\uB9CC \uC785\uB825\uD574\uC11C \uC800\uC7A5", "\uC0AC\uC6A9\uC77C\uACFC \uAE08\uC561\uC744 \uC801\uACE0 \uB0B4\uC6A9 \uC800\uC7A5\uC744 \uB204\uB974\uC138\uC694. \uC601\uC218\uC99D \uCCA8\uBD80\uB294 \uD544\uC694 \uC5C6\uACE0 \uBA54\uBAA8\uB294 \uC120\uD0DD\uC785\uB2C8\uB2E4."), step("receipt-calendar", "\uB2EC\uB825\uC5D0\uC11C \uC2DD\uB300\uC640 \uD734\uBB34 \uD655\uC778", "\uC0AC\uC6A9 \uB0B4\uC5ED\uACFC \uD568\uAED8 \uBCF8\uC778\uC758 \uD734\uBB34\xB7\uC5F0\uCC28\xB7\uBC18\uCC28\uB97C \uC0C9\uC0C1\uC73C\uB85C \uD655\uC778\uD574\uC694. \uB0A0\uC9DC\uB97C \uB204\uB974\uBA74 \uC0C1\uC138 \uB0B4\uC5ED\uC774 \uBCF4\uC785\uB2C8\uB2E4.")] },
    snacks: { title: "\uD300 \uAC04\uC2DD\uBE44 \uAE30\uB85D", steps: [step("snack-form", "\uAC04\uC2DD \uC8FC\uBB38 \uAE08\uC561 \uC800\uC7A5", "\uD300 \uAC04\uC2DD\uBE44\uC5D0\uC11C \uC0AC\uC6A9\uC77C\xB7\uC0AC\uC6A9 \uD300\xB7\uAE08\uC561\uC744 \uC785\uB825\uD574\uC694. \uCFE0\uD321 \uC8FC\uBB38 \uB0B4\uC6A9\uC740 \uBA54\uBAA8\uB85C \uB0A8\uAE38 \uC218 \uC788\uC5B4\uC694."), step("snack-list", "\uC6D4\uBCC4 \uC0AC\uC6A9 \uB0B4\uC5ED \uBCF4\uAE30", "\uC870\uD68C \uC6D4\xB7\uD300\uC744 \uACE0\uB974\uBA74 \uD574\uB2F9 \uAC04\uC2DD\uBE44 \uD569\uACC4\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC870\uD68C \uB0B4\uC5ED \uB2E4\uC6B4\uB85C\uB4DC\uB85C \uD30C\uC77C\uC744 \uBC1B\uC744 \uC218 \uC788\uC5B4\uC694.")] },
    daily: { title: "\uC2DD\uB300\xB7OT \uC77C\uBCC4 \uBCF4\uAE30", steps: [step("daily-button", "\uC77C\uBCC4 \uBCF4\uAE30 \uB204\uB974\uAE30", "\uB0B4 \uC2DD\uB300 \uB610\uB294 \uB0B4 OT\xB7\uC9C0\uAC01\uC5D0\uC11C \uC870\uD68C \uC6D4\uC744 \uACE0\uB974\uACE0 \uC77C\uBCC4 \uBCF4\uAE30\uB97C \uB20C\uB7EC\uC694."), step("daily-drawer", "\uC624\uB978\uCABD \uB2EC\uB825\uC5D0\uC11C \uD655\uC778", "\uD654\uBA74\uC744 \uBC14\uAFB8\uC9C0 \uC54A\uACE0 \uAC1C\uC778 \uB0B4\uC5ED\uC774 \uC5F4\uB9BD\uB2C8\uB2E4. \uB0A0\uC9DC\uB97C \uB204\uB974\uBA74 \uADF8\uB0A0\uC758 \uAE08\uC561\xB7\uC2DC\uAC04\xB7\uBA54\uBAA8\uB97C \uBCFC \uC218 \uC788\uC5B4\uC694.")] },
    ...common
  },
  admin: {
    expenses: { title: "\uC804\uCCB4 \uC9C0\uCD9C\xB7\uACB0\uC7AC \uAD00\uB9AC", steps: [step("expense-all-requests", "\uC804\uCCB4 \uC2E0\uCCAD\uC5D0\uC11C \uAE30\uC874 \uC790\uB8CC\uC640 \uC0C8 \uC2E0\uCCAD \uD568\uAED8 \uBCF4\uAE30", "\uC804\uCCB4 \uC2E0\uCCAD\uC5D0 \uC2DC\uD2B8 \uC790\uB8CC\uC640 \uC55E\uC73C\uB85C \uB4F1\uB85D\uD558\uB294 \uC2E0\uCCAD\uC774 \uD568\uAED8 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC0C8 \uC2E0\uCCAD\uC774 \uBA3C\uC800 \uB098\uC624\uBA70 \uAC74\uC218\xB7\uAE08\uC561\uC5D0 \uBAA8\uB450 \uBC18\uC601\uB3FC\uC694. \uC6D4\xB7\uD300\xB7\uB0B4\uC6A9\uC73C\uB85C \uC881\uD600 \uBCF4\uACE0 \uC870\uD68C \uB0B4\uC5ED \uB2E4\uC6B4\uB85C\uB4DC\uB85C \uD604\uC7AC \uC870\uAC74\uC758 \uC804\uCCB4 \uBAA9\uB85D\uC744 \uBC1B\uC744 \uC218 \uC788\uC5B4\uC694."), step("expense-source-record", "\uAE30\uC874 \uC2DC\uD2B8 \uAE30\uB85D \uAD6C\uBD84\uD558\uAE30", "\uC2DC\uD2B8\uC5D0\uC11C \uAC00\uC838\uC634 \uD45C\uC2DC\uB294 \uAE30\uC874 \uC7A5\uBD80\uC785\uB2C8\uB2E4. \uC2DC\uD2B8\uC758 \uD300\uC7A5\uD655\uC778\uACFC \uC0C8 \uC2E0\uCCAD\uC758 4\uB2E8\uACC4 \uACB0\uC7AC \uC0C1\uD0DC\uB294 \uBCC4\uAC1C\uC608\uC694. \uC6D0\uBCF8\uC5D0 \uC5C6\uB294 \uC0AC\uC6A9\uC77C\xB7\uC791\uC131\uC790\uB294 \uBBF8\uAE30\uC7AC\uB85C \uC720\uC9C0\uD569\uB2C8\uB2E4. \uACF5\uAC1C \uAC80\uC218 \uD654\uBA74\uC740 \uC608\uC2DC \uC790\uB8CC\uC785\uB2C8\uB2E4."), step("expense-settings-final", "\uACB0\uC7AC \uB2F4\uB2F9\uC790 \uC124\uC815", "\uACB0\uC7AC\uC120 \uC124\uC815\uC5D0\uC11C \uD300\uBCC4 1\uCC28 \uB2F4\uB2F9\uC790\uC640 \uCD1D\uAD04\uC2E4\uC7A5\xB7\uB300\uD45C\uC774\uC0AC\xB7\uB300\uD45C\uC6D0\uC7A5\uC744 \uC120\uD0DD\uD558\uACE0 \uACB0\uC7AC\uC120 \uC800\uC7A5\uC744 \uB20C\uB7EC\uC694. \uBCC0\uACBD\uC740 \uC0C8 \uC2E0\uCCAD\uBD80\uD130 \uC801\uC6A9\uB429\uB2C8\uB2E4. \uC2E4\uC81C \uC2B9\uC778\uC740 \uC9C0\uC815\uB41C \uB2F4\uB2F9\uC790\uC758 \uC9C1\uC6D0 \uACC4\uC815\uC5D0\uC11C \uC9C4\uD589\uD569\uB2C8\uB2E4."), step("expense-final-history", "\uC2B9\uC778 \uC774\uB825 \uD655\uC778", "\uC0C8 \uC2E0\uCCAD\uC758 \uC2E0\uCCAD \uB0B4\uC6A9\xB7\uACB0\uC7AC \uC774\uB825\uC744 \uD3BC\uCCD0 \uB2F4\uB2F9\uC790, \uCC98\uB9AC \uC2DC\uAC01\uACFC \uC758\uACAC\uC744 \uD655\uC778\uD574\uC694. \uC2E0\uCCAD \uBC29\uBC95\uB3C4 \uBCF4\uACE0 \uC2F6\uC73C\uBA74 \uC704 \uC0AC\uC6A9 \uBC29\uBC95 \uC120\uD0DD\uC5D0\uC11C \uC9C0\uCD9C\uACB0\uC758\uC11C \uC2E0\uCCAD \uBC29\uBC95\uC744 \uACE0\uB974\uC138\uC694.")] },
    expenseApplication,
    dashboard: { title: "\uC9C1\uC6D0 \uC0C1\uD0DC\xB7\uC6D4\uBCC4 \uD1B5\uACC4", steps: [step("admin-live", "\uD604\uC7AC \uC0C1\uD0DC \uD655\uC778", "\uAD00\uB9AC\uC790 \uB300\uC2DC\uBCF4\uB4DC\uC5D0\uC11C \uC2DD\uC0AC\xB7\uD734\uC2DD\xB7\uC678\uCD9C\xB7\uC678\uADFC \uC911\uC778 \uC9C1\uC6D0\uACFC \uACBD\uACFC \uC2DC\uAC04\uC744 \uD655\uC778\uD574\uC694. \uD604\uC7AC \uC0C1\uD0DC\uB294 \uC870\uD68C \uC6D4\uACFC \uAD00\uACC4\uC5C6\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4."), step("admin-stats", "\uC6D4\xB7\uC885\uB958\uBCC4 \uD1B5\uACC4 \uD655\uC778", "\uC870\uD68C \uC6D4\xB7\uD300\xB7\uC9C1\uC6D0 \uAC80\uC0C9\uC744 \uC815\uD558\uACE0 \uC2DD\uC0AC \uAE30\uB85D \uB4F1 \uC885\uB958\uB97C \uC120\uD0DD\uD574\uC694. \uC644\uB8CC\uB41C \uAE30\uB85D\uACFC \uC6D4\uBCC4 \uC18C\uC694 \uC2DC\uAC04\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.")] },
    schedule: { title: "\uC9C1\uC6D0 \uD734\uBB34\xB7\uB2F4\uB2F9\uC790 \uC124\uC815", steps: [step("team-permission", "\uD300 \uC77C\uC815 \uB2F4\uB2F9\uC790 \uC9C0\uC815", "\uD300 \uC77C\uC815 \uB610\uB294 \uC9C1\uC6D0\uBCC4 \uADFC\uBB34\uD45C\uC758 \uD300\uC6D0 \uD734\uBB34 \uB4F1\uB85D \uAD8C\uD55C\uC744 \uD3BC\uCCD0\uC694. \uC2DC\uD2B8 \uC9C1\uCC45 \uAE30\uC900\uC73C\uB85C \uC801\uC6A9\uB41C \uC9C1\uC6D0\uACFC \uC9C1\uCC45\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC120\uD0DD\uC744 \uBC14\uAFB8\uACE0 \uC800\uC7A5\uD558\uAC70\uB098 \uC9C1\uCC45 \uAE30\uC900\uC73C\uB85C \uB2E4\uC2DC \uC801\uC6A9\uD560 \uC218 \uC788\uC5B4\uC694."), step("duty-workers", "\uB0A0\uC9DC\uBCC4 \uADFC\uBB34\uC790 \uD655\uC778", "\uC870\uD68C \uB0A0\uC9DC\uC758 \uADFC\uBB34\xB7\uBC18\uCC28\xB7\uD734\uBB34 \uB4F1\uB85D\uC744 \uD655\uC778\uD574\uC694. \uBBF8\uAE30\uC7AC\uB97C \uADFC\uBB34\uB85C \uC790\uB3D9 \uCC98\uB9AC\uD558\uC9C0 \uC54A\uC73C\uBA70 \uB20C\uB7EC\uC11C \uBA85\uB2E8\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4."), step("admin-schedule-picker", "\uC9C1\uC6D0\xB7\uB0A0\uC9DC \uC120\uD0DD", "\uC9C1\uC6D0 \uD734\uBB34 \uB4F1\uB85D\uC5D0\uC11C \uC9C1\uC6D0\uACFC \uC6D4\uC744 \uC120\uD0DD\uD558\uACE0 \uB0A0\uC9DC\uC758 + \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC694."), step("admin-schedule-form", "\uD734\uBB34 \uC885\uB958 \uB4F1\uB85D", "\uD734\uBB34\xB7\uC5F0\uCC28\xB7\uBC18\uCC28 \uB4F1 \uC885\uB958\uC640 \uBA54\uBAA8\uB97C \uD655\uC778\uD558\uACE0 \uB4F1\uB85D\uD558\uAE30\uB97C \uB204\uB974\uC138\uC694. \uC120\uD0DD\uD55C \uC9C1\uC6D0\uC758 \uADFC\uBB34\uD45C\uC5D0\uB3C4 \uBC18\uC601\uB429\uB2C8\uB2E4.")] },
    receipt: { title: "\uC2DD\uB300 \uCDE8\uD569\xB7\uB2E4\uC6B4\uB85C\uB4DC", steps: [step("admin-receipts", "\uC6D4\xB7\uD300\xB7\uC9C1\uC6D0\uC73C\uB85C \uCC3E\uAE30", "\uB300\uC2DC\uBCF4\uB4DC\uC758 \uC2DD\uB300 \uC81C\uCD9C \uAE30\uB85D\uC5D0\uC11C \uD300\xB7\uC9C1\uC6D0\uC744 \uC120\uD0DD\uD574\uC694. \uC2DD\uB300 \uBAA8\uC544\uBCF4\uAE30\uB85C \uB2EC\uB825\uC744 \uD3BC\uCE58\uACE0 \uB0A0\uC9DC\uBCC4 \uC0AC\uC9C4\uC744 \uD655\uC778\uD558\uC138\uC694."), step("admin-receipt-calendar", "\uB0A0\uC9DC\uBCC4 \uB4F1\uB85D \uD655\uC778", "\uB0A0\uC9DC\uB97C \uB204\uB974\uBA74 \uD574\uB2F9 \uB0A0\uC9DC\uC758 \uB0B4\uC5ED\uC774 \uC544\uB798\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC0AC\uC9C4 \uBCF4\uAE30\uB97C \uB204\uB974\uBA74 \uD06C\uAC8C \uBCFC \uC218 \uC788\uC5B4\uC694."), step("admin-receipt-download", "\uC870\uD68C \uC870\uAC74\uC73C\uB85C \uB2E4\uC6B4\uB85C\uB4DC", "\uC870\uD68C \uC601\uC218\uC99D ZIP \uB2E4\uC6B4\uB85C\uB4DC\uB97C \uB204\uB974\uBA74 \uC120\uD0DD\uD55C \uC6D4\xB7\uD300\xB7\uC9C1\uC6D0\uC758 \uC0AC\uC9C4\uACFC \uC2DD\uB300 \uBAA9\uB85D\uC744 \uBC1B\uC2B5\uB2C8\uB2E4. \uAE08\uC561\uB9CC \uC800\uC7A5\uD55C \uB0B4\uC5ED\uB3C4 \uBAA9\uB85D\uC5D0 \uD3EC\uD568\uB429\uB2C8\uB2E4.")] },
    notes: { title: "\uC9C1\uC6D0 \uBA54\uBAA8 \uD55C\uACF3\uC5D0 \uBCF4\uAE30", steps: [step("admin-notes", "\uB300\uC2DC\uBCF4\uB4DC\uC5D0\uC11C \uBC14\uB85C \uBCF4\uAE30", "\uC9C1\uC6D0 \uC694\uCCAD\uC0AC\uD56D\xB7\uBA54\uBAA8\uCDE8\uD569\uC5D0 \uBAA8\uB4E0 \uD654\uBA74\xB7\uC804\uCCB4 \uAE30\uAC04\uC758 \uC758\uACAC\uC774 \uBAA8\uC785\uB2C8\uB2E4. \uC791\uC131\uC790\xB7\uC791\uC131 \uD654\uBA74\xB7\uB0B4\uC6A9\uC73C\uB85C \uCC3E\uC544\uBCF4\uC138\uC694."), step("admin-notes-import", "\uB2E4\uB978 \uAE30\uAE30 \uBA54\uBAA8 \uAC00\uC838\uC624\uAE30", "\uD604\uC7AC\uB294 \uBE0C\uB77C\uC6B0\uC800\uBCC4\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC9C1\uC6D0\uC5D0\uAC8C \uBC1B\uC740 \uBA54\uBAA8 \uD30C\uC77C\uC744 \uAC00\uC838\uC624\uBA74 \uAC19\uC740 \uBAA9\uB85D\uC5D0 \uCDE8\uD569\uB418\uACE0, \uC870\uD68C\uD55C \uBA54\uBAA8\uB97C \uB0B4\uB824\uBC1B\uC744 \uC218 \uC788\uC5B4\uC694.")] },
    snacks: { title: "\uD300 \uAC04\uC2DD\uBE44 \uBCF4\uAE30", steps: [step("snack-form", "\uAC04\uC2DD\uBE44 \uB4F1\uB85D", "\uC0AC\uC6A9 \uD300\xB7\uC0AC\uC6A9\uC77C\xB7\uAE08\uC561\uC744 \uAE30\uB85D\uD569\uB2C8\uB2E4. \uC601\uC218\uC99D \uC5C6\uC774 \uC800\uC7A5\uD560 \uC218 \uC788\uC5B4\uC694."), step("snack-list", "\uC6D4\xB7\uD300\uBCC4 \uB0B4\uC5ED \uD655\uC778", "\uC870\uD68C \uC6D4\xB7\uD300\xB7\uAC80\uC0C9 \uC870\uAC74\uC5D0 \uB9DE\uB294 \uD569\uACC4\uC640 \uB0B4\uC5ED\uC744 \uD655\uC778\uD558\uACE0 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC138\uC694.")] },
    ...common,
    login: { title: "\uB85C\uADF8\uC778\xB7\uB85C\uADF8\uC544\uC6C3", steps: [step("admin-login", "\uAD00\uB9AC\uC790\uB85C \uB4E4\uC5B4\uAC00\uAE30", "\uAD00\uB9AC\uC790 \uB85C\uADF8\uC778\uC744 \uC120\uD0DD\uD55C \uB4A4 \uAD00\uB9AC\uC790 \uC544\uC774\uB514\uC640 \uBE44\uBC00\uBC88\uD638\uB85C \uB4E4\uC5B4\uAC00\uC138\uC694."), step("logout", "\uC0AC\uC6A9 \uD6C4 \uB85C\uADF8\uC544\uC6C3", "\uC624\uB978\uCABD \uC704 \uB85C\uADF8\uC544\uC6C3\uC73C\uB85C \uC138\uC158\uC744 \uC885\uB8CC\uD558\uC138\uC694. \uC9C1\uC6D0 \uACC4\uC815\uC73C\uB85C \uBC14\uAFC0 \uB54C\uC5D0\uB3C4 \uBA3C\uC800 \uB85C\uADF8\uC544\uC6C3\uD569\uB2C8\uB2E4.")] }
  }
};
var routeTopic = { expenses: "expenses", "meal-timer": "status", roster: "schedule", "team-calendar": "team", meals: "receipt", "team-snacks": "snacks", attendance: "daily", "admin-dashboard": "dashboard", feedback: "notes" };
var guideAssets = [...new Set(Object.values(topics).flatMap((role) => Object.values(role).flatMap((topic) => topic.steps.map((s3) => s3.image + ".png"))))];
function mountPictureGuide({ role, view: view2, state = {} }) {
  const available = topics[role], initial = routeTopic[view2], sameView = state.role === role && state.view === view2;
  let selected = sameView && available[state.selected] ? state.selected : available[initial] ? initial : Object.keys(available)[0];
  let stepIndex = sameView ? Math.min(state.stepIndex || 0, available[selected].steps.length - 1) : 0, viewer = null, disposed = false;
  Object.assign(state, { role, view: view2, selected, stepIndex });
  if (!sameView) state.scrollTop = 0;
  const bookIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1Z"/><path d="M12 5v15"/></svg>', chevron = '<svg class="guide-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  const launcher = (slot2) => `<button type="button" class="guide-launcher" data-guide-toggle aria-expanded="false" aria-controls="floating-guide-panel" aria-haspopup="dialog">${bookIcon}<span>\uC0AC\uC6A9\uC124\uBA85\uC11C</span>${slot2 ? "" : chevron}</button>`;
  const slot = document.querySelector("#help-launcher");
  const dock = document.createElement("section");
  dock.className = "guide-dock";
  dock.setAttribute("aria-label", "\uC0AC\uC6A9\uC124\uBA85\uC11C \uBC14\uB85C\uAC00\uAE30");
  dock.innerHTML = `${slot ? "" : launcher(false)}<div id="floating-guide-panel" class="guide-popup" role="dialog" aria-modal="false" aria-label="${role === "admin" ? "\uAD00\uB9AC\uC790" : "\uC9C1\uC6D0"} \uC0AC\uC6A9\uC124\uBA85\uC11C"><header class="guide-popup-heading"><div><strong>${role === "admin" ? "\uAD00\uB9AC\uC790" : "\uC9C1\uC6D0"} \uC0AC\uC6A9\uC124\uBA85\uC11C</strong><span>\uC124\uBA85\uC744 \uBCF4\uBA74\uC11C \uD654\uBA74\uC744 \uC0AC\uC6A9\uD574 \uBCF4\uC138\uC694.</span></div><button type="button" data-guide-dismiss aria-label="\uC0AC\uC6A9\uC124\uBA85\uC11C \uC811\uAE30">\uC811\uAE30 \u2715</button></header><div class="guide-popup-body"><div class="picture-guide"><label class="guide-topic-label">\uC0AC\uC6A9 \uBC29\uBC95 \uC120\uD0DD<select data-guide-topic>${Object.entries(available).map(([id, t3]) => `<option value="${id}" ${id === selected ? "selected" : ""}>${t3.title}</option>`).join("")}</select></label><p class="guide-caption">\uC0AC\uC9C4\uC744 \uB204\uB974\uBA74 \uD06C\uAC8C \uBCFC \uC218 \uC788\uC5B4\uC694. \uC124\uBA85\uC6A9 \uC608\uC2DC \uD654\uBA74\uC785\uB2C8\uB2E4.</p><ol class="picture-guide-steps"></ol><nav class="guide-step-navigation" aria-label="\uC0AC\uC6A9\uC124\uBA85\uC11C \uB2E8\uACC4"><button type="button" data-guide-prev>\u2190 \uC774\uC804</button><span data-guide-progress aria-live="polite"></span><button type="button" data-guide-next>\uB2E4\uC74C \u2192</button></nav></div></div></div>`;
  if (slot) slot.innerHTML = launcher(true);
  const launcherHost = slot || dock, buttons = () => [...launcherHost.querySelectorAll("[data-guide-toggle]")], visibleButton = () => buttons().find((b3) => b3.offsetParent !== null) || buttons()[0];
  const panel = dock.querySelector(".guide-popup"), body = dock.querySelector(".guide-popup-body"), select = dock.querySelector("select");
  const nativePopover = typeof panel.showPopover === "function";
  if (nativePopover) panel.setAttribute("popover", "manual");
  else panel.hidden = true;
  function paint() {
    const steps = available[selected].steps, s3 = steps[stepIndex];
    Object.assign(state, { selected, stepIndex });
    dock.querySelector("ol").innerHTML = `<li><button type="button" class="guide-image-button" data-guide-image aria-label="${esc7(s3.title)} \uD654\uBA74 \uD06C\uAC8C \uBCF4\uAE30"><img src="./assets/guide/${s3.image}.png" alt="${esc7(s3.title)} \uC2E4\uC81C \uD654\uBA74" decoding="async"><span>\uC0AC\uC9C4 \uD06C\uAC8C \uBCF4\uAE30 \u2197</span></button><h3><span>${stepIndex + 1}</span> ${esc7(s3.title)}</h3><p>${esc7(s3.text)}</p></li>`;
    dock.querySelector("[data-guide-prev]").disabled = stepIndex === 0;
    dock.querySelector("[data-guide-next]").disabled = stepIndex === steps.length - 1;
    dock.querySelector("[data-guide-progress]").textContent = `${stepIndex + 1} / ${steps.length}`;
  }
  function setOpen(open, focus = false) {
    if (disposed) return;
    state.open = open;
    buttons().forEach((b3) => b3.setAttribute("aria-expanded", String(open)));
    dock.classList.toggle("is-open", open);
    launcherHost.classList.toggle("is-open", open);
    if (open && slot) {
      const r3 = visibleButton().getBoundingClientRect();
      panel.style.top = Math.round(r3.bottom + 10) + "px";
      panel.style.right = Math.max(12, Math.round(innerWidth - r3.right)) + "px";
    }
    if (nativePopover) {
      if (open && !panel.matches(":popover-open")) panel.showPopover();
      if (!open && panel.matches(":popover-open")) panel.hidePopover();
    } else panel.hidden = !open;
    if (focus) (open ? select : visibleButton()).focus({ preventScroll: true });
  }
  function syncHost() {
    if (disposed) return;
    const modal = [...document.querySelectorAll("dialog[open]")].filter((d2) => d2 !== viewer && !d2.classList.contains("guide-viewer")).at(-1), host = modal || document.body;
    if (dock.parentElement === host) return;
    const wasOpen = !!state.open;
    if (nativePopover && panel.matches(":popover-open")) panel.hidePopover();
    host.append(dock);
    if (wasOpen) setOpen(true);
  }
  function showPhoto() {
    const s3 = available[selected].steps[stepIndex];
    viewer?.close();
    const dialog = document.createElement("dialog");
    dialog.className = "guide-viewer";
    dialog.setAttribute("aria-label", s3.title);
    dialog.innerHTML = `<div class="dialog-heading"><h2>${esc7(s3.title)}</h2><button type="button" data-guide-close>\uB2EB\uAE30 \u2715</button></div><img src="./assets/guide/${s3.image}.png" alt="${esc7(s3.title)} \uC2E4\uC81C \uD654\uBA74"><p>${esc7(s3.text)}</p>`;
    dialog.querySelector("button").onclick = () => dialog.close();
    dialog.addEventListener("close", () => {
      dialog.remove();
      if (viewer === dialog) viewer = null;
    });
    document.body.append(dialog);
    viewer = dialog;
    dialog.showModal();
  }
  launcherHost.addEventListener("click", (event) => {
    if (event.target.closest("[data-guide-toggle]")) setOpen(!state.open, true);
  });
  dock.querySelector("[data-guide-dismiss]").addEventListener("click", () => setOpen(false, true));
  select.addEventListener("change", () => {
    selected = select.value;
    stepIndex = 0;
    state.scrollTop = 0;
    paint();
    body.scrollTop = 0;
  });
  dock.addEventListener("click", (event) => {
    if (event.target.closest("[data-guide-image]")) showPhoto();
    const prev = event.target.closest("[data-guide-prev]"), next = event.target.closest("[data-guide-next]");
    if (prev && stepIndex > 0 || next && stepIndex < available[selected].steps.length - 1) {
      stepIndex += next ? 1 : -1;
      paint();
      state.scrollTop = 0;
      body.scrollTop = 0;
    }
  });
  const keydown = (event) => {
    if (event.key === "Escape" && state.open && !viewer) {
      event.preventDefault();
      event.stopPropagation();
      setOpen(false, dock.contains(document.activeElement) || launcherHost.contains(document.activeElement));
    }
  };
  document.addEventListener("keydown", keydown, true);
  body.addEventListener("scroll", () => {
    if (!disposed) state.scrollTop = body.scrollTop;
  }, { passive: true });
  document.body.append(dock);
  paint();
  syncHost();
  setOpen(!!state.open);
  body.scrollTop = state.scrollTop || 0;
  const observer = new MutationObserver(syncHost);
  observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["open"] });
  return { dispose() {
    disposed = true;
    observer.disconnect();
    document.removeEventListener("keydown", keydown, true);
    viewer?.close();
    if (nativePopover && panel.matches(":popover-open")) panel.hidePopover();
    dock.remove();
    if (slot) slot.replaceChildren();
  } };
}

// src/preview-feedback.js
var FEEDBACK_PREFIX = "bb-staff:public-preview:review-note:v1:";
var FEEDBACK_MAX_BYTES = 2e7;
var FEEDBACK_VIEWS = ["meal-timer", "roster", "team-calendar", "meals", "team-snacks", "expenses", "attendance", "admin-dashboard", "sources", "feedback"];
function validateFeedback(value, people) {
  if (!value || typeof value !== "object" || typeof value.id !== "string" || !/^note-[a-zA-Z0-9-]{1,80}$/.test(value.id) || !["employee", "admin"].includes(value.role) || !FEEDBACK_VIEWS.includes(value.view) || typeof value.text !== "string" || !value.text.trim() || value.text.length > 4e3 || typeof value.createdAt !== "string" || !Number.isFinite(Date.parse(value.createdAt))) throw new Error("\uBA54\uBAA8 \uD30C\uC77C\uC758 \uD615\uC2DD \uB610\uB294 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
  const person = value.role === "employee" ? people.find((p3) => p3.personId === value.personId) : null;
  if (value.role === "employee" && !person) throw new Error("\uD604\uC7AC \uBA85\uBD80\uC5D0 \uC5C6\uB294 \uC9C1\uC6D0\uC758 \uBA54\uBAA8\uAC00 \uC788\uC2B5\uB2C8\uB2E4.");
  return { id: value.id, role: value.role, personId: person?.personId || "admin", name: person?.name || "\uAD00\uB9AC\uC790", team: person?.rawTeam || "\uAD00\uB9AC\uC790", view: value.view, text: value.text.trim(), createdAt: new Date(value.createdAt).toISOString() };
}
function readFeedback(storage, people) {
  const notes = [], errors = [];
  for (let i3 = 0; i3 < storage.length; i3++) {
    const key = storage.key(i3);
    if (!key?.startsWith(FEEDBACK_PREFIX)) continue;
    try {
      const note = validateFeedback(JSON.parse(storage.getItem(key)), people);
      if (key !== FEEDBACK_PREFIX + note.id) throw new Error("\uC800\uC7A5 \uD0A4 \uBD88\uC77C\uCE58");
      notes.push(note);
    } catch {
      errors.push(key);
    }
  }
  return { notes: notes.sort((a3, b3) => b3.createdAt.localeCompare(a3.createdAt) || a3.id.localeCompare(b3.id)), errors };
}
function saveFeedback(storage, people, value) {
  const note = validateFeedback(value, people), key = FEEDBACK_PREFIX + note.id, existing = storage.getItem(key);
  if (existing !== null) {
    let same = false;
    try {
      same = JSON.stringify(validateFeedback(JSON.parse(existing), people)) === JSON.stringify(note);
    } catch {
    }
    if (!same) throw new Error("\uAC19\uC740 \uBC88\uD638\uC758 \uB2E4\uB978 \uBA54\uBAA8\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uAE30\uC874 \uBA54\uBAA8\uB294 \uBCF4\uC874\uD588\uC2B5\uB2C8\uB2E4.");
    return false;
  }
  storage.setItem(key, JSON.stringify(note));
  return true;
}
function parseFeedbackFile(text2, people) {
  if (typeof text2 !== "string" || new TextEncoder().encode(text2).byteLength > FEEDBACK_MAX_BYTES) throw new Error("\uBA54\uBAA8 \uD30C\uC77C\uC740 20MB \uC774\uB0B4\uB85C \uAC00\uC838\uC640 \uC8FC\uC138\uC694.");
  let file;
  try {
    file = JSON.parse(text2);
  } catch {
    throw new Error("\uC62C\uBC14\uB978 \uBA54\uBAA8 JSON \uD30C\uC77C\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");
  }
  if (file?.format !== "bb-staff-review-notes" || file.version !== 1 || !Array.isArray(file.notes)) throw new Error("\uC774 \uD654\uBA74\uC5D0\uC11C \uB0B4\uB824\uBC1B\uC740 \uBA54\uBAA8 \uD30C\uC77C\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");
  const notes = file.notes.map((note) => validateFeedback(note, people));
  if (new Set(notes.map((n2) => n2.id)).size !== notes.length) throw new Error("\uD30C\uC77C \uC548\uC5D0 \uC911\uBCF5\uB41C \uBA54\uBAA8 \uBC88\uD638\uAC00 \uC788\uC2B5\uB2C8\uB2E4.");
  return notes;
}
function feedbackFile(notes) {
  return JSON.stringify({ format: "bb-staff-review-notes", version: 1, notes }, null, 2);
}

// src/workspace-help.js
var esc8 = (value) => String(value ?? "").replace(/[&<>"']/g, (c3) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c3]);
var titles = { expenses: "\uC9C0\uCD9C\uACB0\uC758\uC11C", "meal-timer": "\uB0B4 \uD558\uB8E8", roster: "\uADFC\uBB34\uD45C", "team-calendar": "\uD300 \uC77C\uC815", meals: "\uC2DD\uB300", "team-snacks": "\uD300 \uAC04\uC2DD\uBE44", picker: "\uBF51\uAE30", attendance: "OT\xB7\uC9C0\uAC01", "admin-dashboard": "\uAD00\uB9AC\uC790 \uB300\uC2DC\uBCF4\uB4DC", sources: "\uAC80\uC218 \uC790\uB8CC", feedback: "\uBA54\uBAA8\uCDE8\uD569" };
var drafts = /* @__PURE__ */ new Map();
var mine = (note, session) => note.role === session.role && (session.role === "admin" || note.personId === session.personId);
function download(notes) {
  const blob = new Blob([feedbackFile(notes)], { type: "application/json;charset=utf-8" });
  if (blob.size > FEEDBACK_MAX_BYTES) throw new Error("\uBA54\uBAA8\uAC00 20MB\uB97C \uB118\uC2B5\uB2C8\uB2E4. \uC791\uC131\uC790\xB7\uD654\uBA74\uBCC4\uB85C \uB098\uB204\uC5B4 \uB0B4\uB824\uBC1B\uC544 \uC8FC\uC138\uC694.");
  const url = URL.createObjectURL(blob), a3 = document.createElement("a");
  a3.href = url;
  a3.download = `\uBDF0\uD2F0\uBE14\uB77C\uC378-\uAC80\uC218\uBA54\uBAA8-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
  a3.click();
  setTimeout(() => URL.revokeObjectURL(url), 1e3);
}
function noteCards(notes) {
  return notes.map((note) => `<article class="feedback-card"><div><strong>${esc8(note.name)} \xB7 ${esc8(note.team)}</strong><span>${note.role === "admin" ? "\uAD00\uB9AC\uC790" : "\uC9C1\uC6D0"} \xB7 ${esc8(titles[note.view])}</span><time>${esc8(new Date(note.createdAt).toLocaleString("ko-KR"))}</time></div><p class="prewrap">${esc8(note.text)}</p></article>`).join("");
}
function mountWorkspaceHelp(root, { session, view: view2, people, toast: toast2, onSaved, guideState = {} }) {
  const key = session.role + ":" + (session.personId || "admin") + ":" + view2;
  let disposed = false;
  root.innerHTML = `<section class="workspace-support" aria-label="\uC0AC\uC6A9 \uC548\uB0B4\uC640 \uAC80\uC218 \uBA54\uBAA8"><details class="workspace-feedback"><summary><strong>\uD53C\uB4DC\uBC31\xB7\uC694\uCCAD\uC0AC\uD56D</strong><span>\uC774 \uD654\uBA74\uC5D0 \uB300\uD55C \uC758\uACAC \uB0A8\uAE30\uAE30 \xB7 \uAC80\uC218\uC6A9</span></summary><form class="feedback-form"><label>\uBA54\uBAA8<textarea name="feedback" rows="4" maxlength="4000" required placeholder="\uBD88\uD3B8\uD55C \uC810\uC774\uB098 \uBC14\uAFB8\uACE0 \uC2F6\uC740 \uB0B4\uC6A9\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694.">${esc8(drafts.get(key) || "")}</textarea></label><p>\uC800\uC7A5\uD558\uBA74 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC758 \uAD00\uB9AC\uC790 \u2018\uBA54\uBAA8\uCDE8\uD569\u2019\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uB2E4\uB978 \uAE30\uAE30\uC5D0\uB294 \uC790\uB3D9 \uC804\uC1A1\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p><div class="feedback-actions"><button type="submit" class="primary">\uBA54\uBAA8 \uC800\uC7A5</button><button type="button" data-note-export>\uB0B4 \uBA54\uBAA8 \uD30C\uC77C \uB0B4\uB824\uBC1B\uAE30</button></div><p class="feedback-status" role="status"></p></form><div class="my-feedback"></div><p class="review-only-note">\uAC80\uC218\uC6A9 \uBA54\uBAA8\uC7A5\uC740 \uCD5C\uC885 \uBC30\uD3EC \uB54C \uC81C\uAC70\uB429\uB2C8\uB2E4.</p></details></section>`;
  const pictures = mountPictureGuide({ role: session.role, view: view2, state: guideState });
  const form = root.querySelector("form"), status = root.querySelector(".feedback-status"), input = form.querySelector("textarea");
  function update() {
    try {
      const { notes, errors } = readFeedback(localStorage, people), own = notes.filter((n2) => mine(n2, session) && n2.view === view2);
      root.querySelector(".my-feedback").innerHTML = `<h3>\uC774 \uD654\uBA74\uC5D0 \uB0A8\uAE34 \uB0B4 \uBA54\uBAA8 \xB7 ${own.length}\uAC74</h3>${noteCards(own.slice(0, 3))}${own.length > 3 ? "<p>\uC804\uCCB4 \uB0B4\uC5ED\uC740 \uBA54\uBAA8 \uD30C\uC77C\uC5D0 \uD3EC\uD568\uB429\uB2C8\uB2E4.</p>" : ""}`;
      if (errors.length) status.textContent = "\uC77D\uC9C0 \uBABB\uD55C \uAE30\uC874 \uBA54\uBAA8\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uAE30\uC874 \uB0B4\uC6A9\uC740 \uBCF4\uC874\uD588\uC2B5\uB2C8\uB2E4.";
    } catch {
      status.textContent = "\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uBA54\uBAA8 \uC800\uC7A5\uC18C\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    }
  }
  input.addEventListener("input", () => {
    drafts.set(key, input.value);
    status.textContent = "";
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (disposed) return;
    try {
      saveFeedback(localStorage, people, { id: "note-" + crypto.randomUUID(), role: session.role, personId: session.personId, view: view2, text: input.value, createdAt: (/* @__PURE__ */ new Date()).toISOString() });
      input.value = "";
      drafts.delete(key);
      update();
      status.textContent = "\uBA54\uBAA8\uB97C \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4. \uC774 \uBE0C\uB77C\uC6B0\uC800\uC758 \uAD00\uB9AC\uC790 \uBA54\uBAA8\uCDE8\uD569\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC5B4\uC694.";
      onSaved?.();
    } catch (error) {
      status.textContent = error.message;
    }
  });
  root.querySelector("[data-note-export]").addEventListener("click", () => {
    try {
      const notes = readFeedback(localStorage, people).notes.filter((n2) => mine(n2, session));
      if (!notes.length) {
        toast2("\uC800\uC7A5\uB41C \uBA54\uBAA8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uBA3C\uC800 \uBA54\uBAA8 \uC800\uC7A5\uC744 \uB20C\uB7EC \uC8FC\uC138\uC694.");
        return;
      }
      download(notes);
    } catch (error) {
      toast2(error.message);
    }
  });
  const changed = (event) => {
    if (event.key?.startsWith(FEEDBACK_PREFIX)) update();
  };
  addEventListener("storage", changed);
  update();
  return { dispose() {
    disposed = true;
    pictures.dispose();
    removeEventListener("storage", changed);
  } };
}
function mountFeedbackCollection(root, { people, toast: toast2, dashboard = false, viewState = {} }) {
  let disposed = false, rows = [];
  root.innerHTML = `<section class="panel feedback-collection"><div class="panel-heading"><div><h2>${dashboard ? "\uC9C1\uC6D0 \uC694\uCCAD\uC0AC\uD56D \xB7 \uBA54\uBAA8\uCDE8\uD569" : "\uBA54\uBAA8\uCDE8\uD569"}</h2><p>\uBAA8\uB4E0 \uD654\uBA74\xB7\uC804\uCCB4 \uAE30\uAC04\uC758 \uC758\uACAC\uC744 \uBAA8\uC558\uC2B5\uB2C8\uB2E4. \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB418\uAC70\uB098 \uD30C\uC77C\uB85C \uAC00\uC838\uC628 \uB0B4\uC6A9\uC785\uB2C8\uB2E4.</p></div><span class="badge" data-note-count></span></div><div class="feedback-filters"><label>\uC791\uC131\uC790<select data-note-person><option value="">\uC804\uCCB4 \uC791\uC131\uC790</option></select></label><label>\uC791\uC131 \uD654\uBA74<select data-note-view><option value="">\uBAA8\uB4E0 \uD654\uBA74</option>${Object.entries(titles).map(([id, title]) => `<option value="${id}">${title}</option>`).join("")}</select></label><label>\uB0B4\uC6A9 \uCC3E\uAE30<input type="search" data-note-search maxlength="100" placeholder="\uC694\uCCAD \uB0B4\uC6A9 \uAC80\uC0C9"></label></div><div class="feedback-actions"><button data-notes-download>\uC870\uD68C\uD55C \uBA54\uBAA8 \uB0B4\uB824\uBC1B\uAE30</button><label class="button feedback-import">\uBA54\uBAA8 \uD30C\uC77C \uAC00\uC838\uC624\uAE30<input type="file" accept="application/json,.json" data-notes-import></label></div><p class="notice">\uB2E4\uB978 \uAE30\uAE30\uC758 \uC758\uACAC\uC740 \uC9C1\uC6D0\uC774 \uB0B4\uB824\uBC1B\uC740 \uBA54\uBAA8 \uD30C\uC77C\uC744 \uAC00\uC838\uC640 \uC8FC\uC138\uC694.</p><p class="feedback-status" role="status"></p><div class="feedback-list"></div></section>`;
  const person = root.querySelector("[data-note-person]"), screen = root.querySelector("[data-note-view]"), search2 = root.querySelector("[data-note-search]"), status = root.querySelector(".feedback-status");
  screen.value = viewState.screen || "";
  search2.value = viewState.search || "";
  const filtered = () => rows.filter((n2) => (!person.value || n2.role + ":" + n2.personId === person.value) && (!screen.value || n2.view === screen.value) && (!search2.value.trim() || [n2.name, n2.team, n2.text].some((v3) => v3.includes(search2.value.trim()))));
  function paint() {
    Object.assign(viewState, { person: person.value, screen: screen.value, search: search2.value });
    const notes = filtered();
    root.querySelector("[data-note-count]").textContent = `${notes.length} / ${rows.length}\uAC74`;
    root.querySelector(".feedback-list").innerHTML = notes.length ? noteCards(notes) : '<div class="empty">\uC120\uD0DD\uD55C \uC870\uAC74\uC758 \uBA54\uBAA8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</div>';
  }
  function refresh() {
    if (disposed) return;
    try {
      const result = readFeedback(localStorage, people);
      rows = result.notes;
      const selected = person.value || viewState.person, authors = [...new Map(rows.map((n2) => [n2.role + ":" + n2.personId, n2])).entries()];
      person.innerHTML = '<option value="">\uC804\uCCB4 \uC791\uC131\uC790</option>' + authors.map(([id, n2]) => `<option value="${esc8(id)}">${esc8(n2.name)} \xB7 ${esc8(n2.team)}</option>`).join("");
      person.value = authors.some(([id]) => id === selected) ? selected : "";
      if (result.errors.length) status.textContent = `\uC77D\uC9C0 \uBABB\uD55C \uBA54\uBAA8 ${result.errors.length}\uAC74\uC740 \uBCF4\uC874\uD588\uC2B5\uB2C8\uB2E4.`;
      paint();
    } catch (error) {
      status.textContent = error.message;
    }
  }
  person.addEventListener("change", paint);
  screen.addEventListener("change", paint);
  search2.addEventListener("input", paint);
  root.querySelector("[data-notes-download]").addEventListener("click", () => {
    try {
      const notes = filtered();
      if (!notes.length) {
        toast2("\uB0B4\uB824\uBC1B\uC744 \uBA54\uBAA8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
        return;
      }
      download(notes);
    } catch (error) {
      toast2(error.message);
    }
  });
  root.querySelector("[data-notes-import]").addEventListener("change", async (event) => {
    const input = event.target, file = input.files?.[0];
    if (!file) return;
    input.disabled = true;
    let added = 0;
    try {
      if (file.size > FEEDBACK_MAX_BYTES) throw new Error("\uBA54\uBAA8 \uD30C\uC77C\uC740 20MB \uC774\uB0B4\uB85C \uAC00\uC838\uC640 \uC8FC\uC138\uC694.");
      const notes = parseFeedbackFile(await file.text(), people);
      if (disposed) return;
      for (const note of notes) if (saveFeedback(localStorage, people, note)) added++;
      refresh();
      status.textContent = `${added}\uAC74\uC744 \uAC00\uC838\uC654\uC2B5\uB2C8\uB2E4. \uAE30\uC874 \uBA54\uBAA8 ${notes.length - added}\uAC74\uC740 \uC911\uBCF5 \uC800\uC7A5\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`;
    } catch (error) {
      if (!disposed) {
        refresh();
        status.textContent = `${error.message}${added ? " " + added + "\uAC74\uC740 \uAC00\uC838\uC654\uC2B5\uB2C8\uB2E4." : ""}`;
      }
    } finally {
      input.value = "";
      input.disabled = false;
    }
  });
  const changed = (event) => {
    if (event.key?.startsWith(FEEDBACK_PREFIX)) refresh();
  };
  addEventListener("storage", changed);
  refresh();
  return { refresh, dispose() {
    disposed = true;
    removeEventListener("storage", changed);
  } };
}

// src/team-settings.js
var TEAM_SETTINGS_KEY = "bb-staff:public-preview:team-schedule-editors:v1";
var editorTitles = /* @__PURE__ */ new Set(["\uC8FC\uC784", "\uD300\uC7A5", "\uD30C\uD2B8\uC7A5", "\uC2E4\uC7A5", "\uCD1D\uAD04\uC2E4\uC7A5", "\uB300\uD45C\uC774\uC0AC"]);
function defaultTeamEditors(people = []) {
  return [...new Set(people.filter((p3) => typeof p3.personId === "string" && p3.personId && editorTitles.has(p3.jobTitle)).map((p3) => p3.personId))];
}
function readTeamEditors(storage, people = []) {
  const raw = storage.getItem(TEAM_SETTINGS_KEY);
  if (raw === null) return defaultTeamEditors(people);
  const value = JSON.parse(raw);
  if (!Array.isArray(value) || value.some((id) => typeof id !== "string" || !id)) throw new Error("\uD300 \uC77C\uC815 \uB2F4\uB2F9\uC790 \uC124\uC815\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694. \uAE30\uC874 \uC124\uC815\uC740 \uBCF4\uC874\uD588\uC2B5\uB2C8\uB2E4.");
  return [...new Set(value)];
}
async function saveTeamEditors(storage, ids, people, expected, locks = globalThis.navigator?.locks) {
  if (!Array.isArray(ids) || ids.some((id) => !people.some((p3) => p3.personId === id))) throw new Error("\uD300 \uC77C\uC815 \uB2F4\uB2F9\uC790\uB97C \uB2E4\uC2DC \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");
  const work = () => {
    if (expected !== void 0 && storage.getItem(TEAM_SETTINGS_KEY) !== expected) throw new Error("\uB2E4\uB978 \uD0ED\uC5D0\uC11C \uB2F4\uB2F9\uC790 \uC124\uC815\uC774 \uBCC0\uACBD\uB410\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C\uACE0\uCE68 \uD6C4 \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
    const saved = JSON.stringify([...new Set(ids)]);
    storage.setItem(TEAM_SETTINGS_KEY, saved);
    return saved;
  };
  return locks ? locks.request(TEAM_SETTINGS_KEY, work) : work();
}
function allowedSchedulePeople({ session, person, people, editors = [] }) {
  if (session?.role === "admin") return people;
  if (session?.role !== "employee" || !person || session.personId !== person.personId) return [];
  return people.filter((p3) => p3.personId === person.personId || editors.includes(person.personId) && p3.teams?.some((t3) => person.teams?.includes(t3)));
}

// src/schedule-panel.js
var esc9 = (value) => String(value ?? "").replace(/[&<>"']/g, (c3) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c3]);
function mountSchedulePanel({ root, people, roster, records, month: month2, session, employees: employees2, person, toast: toast2, viewState }) {
  const prefix = `20${month2.slice(0, 2)}-${month2.slice(2)}`, today3 = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul" }).format(/* @__PURE__ */ new Date());
  let date = viewState[month2] || (today3.startsWith(prefix) ? today3 : prefix + "-01");
  root.innerHTML = `<section class="panel duty-panel"><div class="panel-heading"><div><h2>\uB0A0\uC9DC\uBCC4 \uADFC\uBB34\uC790</h2><p>\uADFC\uBB34\xB7\uBC18\uCC28 \uB4F1\uB85D\uC744 \uAE30\uC900\uC73C\uB85C \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uBE48 \uC77C\uC815\uC740 \uBBF8\uAE30\uC7AC\uB85C \uAD6C\uBD84\uD569\uB2C8\uB2E4.</p></div><label>\uD655\uC778\uD560 \uB0A0\uC9DC<input data-duty-date type="date" min="${prefix}-01" max="${prefix}-${new Date(2e3 + Number(month2.slice(0, 2)), Number(month2.slice(2)), 0).getDate()}" value="${date}"></label></div><div class="duty-groups"></div></section>${session.role === "admin" ? `<details class="panel team-editor-panel"><summary>\uD300\uC6D0 \uD734\uBB34 \uB4F1\uB85D \uAD8C\uD55C \xB7 \uC8FC\uC784 \uC774\uC0C1 \uB2F4\uB2F9\uC790 \uC9C0\uC815</summary><p>\uD604\uC7AC \uBA85\uBD80\uC758 \uC8FC\uC784\xB7\uD300\uC7A5\xB7\uD30C\uD2B8\uC7A5\xB7\uC2E4\uC7A5\xB7\uCD1D\uAD04\uC2E4\uC7A5\xB7\uB300\uD45C\uC774\uC0AC\uC5D0\uAC8C \uBCF8\uC778 \uD300\uC6D0\uC758 \uD734\uBB34\xB7\uC5F0\uCC28\xB7\uBC18\uCC28 \uB4F1\uB85D \uAD8C\uD55C\uC744 \uAE30\uBCF8 \uC801\uC6A9\uD588\uC2B5\uB2C8\uB2E4. \uC77C\uBC18 \uD300\uC6D0\uC740 \uBCF8\uC778 \uC77C\uC815\uB9CC \uB4F1\uB85D\uD569\uB2C8\uB2E4.</p><p data-editor-status role="status"></p><form data-team-editor-form><div class="team-editor-list">${employees2.map((p3) => `<label><input type="checkbox" name="editor" value="${esc9(p3.personId)}"><span><strong>${esc9(p3.name)}</strong><small>${esc9(p3.rawTeam)} \xB7 ${esc9(p3.jobTitle || "\uC9C1\uCC45 \uBBF8\uB4F1\uB85D")}</small></span></label>`).join("")}</div><div class="form-actions"><button type="button" data-editor-defaults>\uC9C1\uCC45 \uAE30\uC900\uC73C\uB85C \uB2E4\uC2DC \uC801\uC6A9</button><button type="submit" class="primary">\uB2F4\uB2F9\uC790 \uC124\uC815 \uC800\uC7A5</button></div><p class="form-error" role="alert"></p></form></details>` : ""}`;
  function paint() {
    viewState[month2] = date;
    const added = records(), entries = people.map((p3) => {
      const schedule = schedulesOn(roster, added, p3.personId, date);
      return { ...p3, schedule, group: dayAssignment(schedule) };
    });
    const groups = ["\uADFC\uBB34", "\uC624\uC804 \uADFC\uBB34", "\uC624\uD6C4 \uADFC\uBB34", "\uD734\uBB34\xB7\uD734\uAC00", "\uC77C\uC815 \uD655\uC778", "\uD655\uC778 \uD544\uC694", "\uBBF8\uAE30\uC7AC"];
    root.querySelector(".duty-groups").innerHTML = groups.map((group) => {
      const rows = entries.filter((r3) => r3.group === group);
      return rows.length ? `${group === "\uBBF8\uAE30\uC7AC" ? `<details class="duty-group duty-unknown"><summary>\uBBF8\uAE30\uC7AC ${rows.length}\uBA85</summary>` : `<div class="duty-group"><h3>${group} <span>${rows.length}\uBA85</span></h3>`}<div>${rows.map((p3) => `<span class="duty-person"><strong>${esc9(p3.name)}</strong><small>${esc9(p3.rawTeam)}</small>${group === "\uC77C\uC815 \uD655\uC778" || group === "\uD655\uC778 \uD544\uC694" ? scheduleChips(p3.schedule) : ""}</span>`).join("")}</div>${group === "\uBBF8\uAE30\uC7AC" ? "</details>" : "</div>"}` : "";
    }).join("") || '<p class="empty">\uC120\uD0DD\uD55C \uC9C1\uC6D0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p>';
  }
  root.querySelector("[data-duty-date]").addEventListener("change", (event) => {
    if (event.target.validity.valid && event.target.value.startsWith(prefix + "-")) {
      date = event.target.value;
      paint();
    }
  });
  const form = root.querySelector("[data-team-editor-form]");
  let expectedSettings, saving = false;
  if (form) {
    let showSettings = function(ids) {
      for (const checkbox of form.querySelectorAll("input")) checkbox.checked = ids.includes(checkbox.value);
      const count = employees2.filter((p3) => ids.includes(p3.personId)).length;
      root.querySelector("[data-editor-status]").textContent = `${expectedSettings === null ? "\uC2DC\uD2B8 \uC9C1\uCC45 \uAE30\uC900 \uC801\uC6A9 \uC911" : "\uAD00\uB9AC\uC790\uAC00 \uC800\uC7A5\uD55C \uC124\uC815 \uC801\uC6A9 \uC911"} \xB7 ${count}\uBA85 \xB7 \uC9C1\uCC45 \uAE30\uC900 ${baseline.length}\uBA85`;
    };
    const controls = [...form.querySelectorAll("button")], baseline = defaultTeamEditors(employees2);
    try {
      expectedSettings = localStorage.getItem(TEAM_SETTINGS_KEY);
      showSettings(readTeamEditors(localStorage, employees2));
    } catch (e3) {
      form.querySelector(".form-error").textContent = e3.message;
      controls.forEach((button) => button.disabled = true);
    }
    async function save(ids) {
      if (saving) return;
      saving = true;
      controls.forEach((button) => button.disabled = true);
      try {
        expectedSettings = await saveTeamEditors(localStorage, ids, employees2, expectedSettings);
        if (root.isConnected) {
          showSettings(ids);
          form.querySelector(".form-error").textContent = "";
          toast2("\uD300 \uC77C\uC815 \uB2F4\uB2F9\uC790\uB97C \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.");
        }
      } catch (e3) {
        if (root.isConnected) form.querySelector(".form-error").textContent = e3.message;
      } finally {
        saving = false;
        controls.forEach((button) => button.disabled = false);
      }
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      save(new FormData(form).getAll("editor"));
    });
    form.querySelector("[data-editor-defaults]").addEventListener("click", () => save(baseline));
  }
  paint();
}

// src/team-snacks.js
var SNACK_KEY = "bb-staff:public-preview:team-snacks:v1";
var esc10 = (value) => String(value ?? "").replace(/[&<>"']/g, (c3) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c3]);
var won2 = (value) => value.toLocaleString("ko-KR") + "\uC6D0";
function readSnacks(storage) {
  const raw = storage.getItem(SNACK_KEY);
  if (raw === null) return [];
  const rows = JSON.parse(raw);
  if (!Array.isArray(rows) || rows.some((r3) => !r3 || typeof r3.id !== "string" || typeof r3.personId !== "string" || typeof r3.name !== "string" || typeof r3.team !== "string" || !validReceiptDate(r3.date) || !Number.isSafeInteger(r3.amount) || r3.amount < 0 || r3.amount > 1e8 || typeof r3.note !== "string" || r3.note.length > 2e3 || typeof r3.createdAt !== "string" || !Number.isFinite(Date.parse(r3.createdAt)))) throw new Error("\uAC04\uC2DD\uBE44 \uAE30\uB85D\uC744 \uC77D\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uAE30\uC874 \uAE30\uB85D\uC740 \uBCF4\uC874\uD588\uC2B5\uB2C8\uB2E4.");
  return rows;
}
async function saveSnack(storage, { session, person, teams, months, date, team: team2, amount, note = "" }, locks = globalThis.navigator?.locks) {
  if (!session || !["employee", "admin"].includes(session.role) || session.role === "employee" && (!person || session.personId !== person.personId)) throw new Error("\uB85C\uADF8\uC778 \uC815\uBCF4\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
  const allowed = session.role === "admin" ? teams : person.teams || [];
  if (!allowed.includes(team2)) throw new Error("\uB4F1\uB85D\uD560 \uC218 \uC788\uB294 \uD300\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");
  if (!validReceiptDate(date) || !months.includes(date.slice(2, 4) + date.slice(5, 7))) throw new Error("\uC870\uD68C \uAC00\uB2A5\uD55C \uC0AC\uC6A9\uC77C\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");
  if (typeof amount !== "number" || !Number.isSafeInteger(amount) || amount < 0 || amount > 1e8) throw new Error("\uAE08\uC561\uC740 0\uC6D0\uBD80\uD130 1\uC5B5\uC6D0\uAE4C\uC9C0 \uC815\uC218\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694.");
  if (typeof note !== "string" || note.length > 2e3) throw new Error("\uB0B4\uC6A9\uC740 2,000\uC790\uAE4C\uC9C0 \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
  const row = { id: crypto.randomUUID(), personId: session.role === "admin" ? "admin" : person.personId, name: session.role === "admin" ? "\uAD00\uB9AC\uC790" : person.name, team: team2, date, amount, note: note.trim(), createdAt: (/* @__PURE__ */ new Date()).toISOString() };
  const work = () => {
    const rows = readSnacks(storage);
    storage.setItem(SNACK_KEY, JSON.stringify([...rows, row]));
    return row;
  };
  return locks ? locks.request(SNACK_KEY, work) : work();
}
function snackRows(rows, month2, team2, search2 = "") {
  return rows.filter((r3) => r3.date.slice(2, 4) + r3.date.slice(5, 7) === month2 && (team2 === "\uC804\uCCB4" || r3.team === team2) && (!search2 || [r3.name, r3.team, r3.note].some((v3) => v3.includes(search2)))).sort((a3, b3) => b3.date.localeCompare(a3.date) || b3.createdAt.localeCompare(a3.createdAt));
}
var csvCell = (value) => '"' + String(value ?? "").replace(/^[\s]*[=+@-]/, (m3) => "'" + m3).replaceAll('"', '""') + '"';
function snackCSV(rows) {
  return "\uFEFF" + [["\uC0AC\uC6A9\uC77C", "\uD300", "\uC791\uC131\uC790", "\uAE08\uC561", "\uB0B4\uC6A9"], ...rows.map((r3) => [r3.date, r3.team, r3.name, r3.amount, r3.note])].map((r3) => r3.map(csvCell).join(",")).join("\r\n");
}
function mountSnacks({ root, session, person, teams, months, month: month2, team: team2, search: search2 = "", toast: toast2 }) {
  let disposed = false, saving = false;
  const allowed = session.role === "admin" ? teams : person.teams || [], defaultTeam = allowed.includes(team2) ? team2 : allowed[0], prefix = `20${month2.slice(0, 2)}-${month2.slice(2)}`, today3 = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul" }).format(/* @__PURE__ */ new Date()), defaultDate = today3.startsWith(prefix) ? today3 : prefix + "-01";
  root.innerHTML = `<section class="panel snack-panel"><div class="panel-heading"><div><h2>\uD300 \uAC04\uC2DD\uBE44</h2><p>\uC601\uC218\uC99D \uC5C6\uC774 \uC0AC\uC6A9\uC77C\uACFC \uAE08\uC561\uC744 \uAE30\uB85D\uD574\uC694. \uAC1C\uC778 \uC2DD\uB300\uC640 \uBCC4\uB3C4\uB85C \uC9D1\uACC4\uD569\uB2C8\uB2E4.</p></div><button data-snack-export>\uC870\uD68C \uB0B4\uC5ED \uB2E4\uC6B4\uB85C\uB4DC</button></div><div class="snack-totals"></div><details class="snack-register"><summary>+ \uAC04\uC2DD\uBE44 \uAE30\uB85D</summary><form class="snack-form"><div class="form-grid"><label>\uC0AC\uC6A9\uC77C<input name="date" type="date" value="${defaultDate}" required></label><label>\uC0AC\uC6A9 \uD300<select name="team" required>${allowed.map((t3) => `<option ${t3 === defaultTeam ? "selected" : ""}>${esc10(t3)}</option>`).join("")}</select></label><label>\uAE08\uC561 (\uC6D0)<input name="amount" type="number" min="0" max="100000000" step="1" inputmode="numeric" required placeholder="\uC608: 30000"></label><label>\uB0B4\uC6A9 (\uC120\uD0DD)<input name="note" maxlength="2000" placeholder="\uC608: \uCFE0\uD321 \uAC04\uC2DD \uC8FC\uBB38"></label></div><div class="form-actions"><button type="submit" class="primary">\uB0B4\uC6A9 \uC800\uC7A5</button></div><p class="form-error" role="alert"></p></form></details><p class="receipt-local-note">\uD604\uC7AC\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC758 \uAE30\uB85D\uC785\uB2C8\uB2E4. \uB2E4\uB978 \uAE30\uAE30\uC640\uC758 \uACF5\uC720\uB294 \uC6B4\uC601 \uC5F0\uACB0 \uD6C4 \uC801\uC6A9\uB429\uB2C8\uB2E4.</p><p class="snack-error" role="alert"></p><div class="snack-records"></div></section>`;
  function rows() {
    return snackRows(readSnacks(localStorage), month2, team2, search2);
  }
  function refresh() {
    if (disposed) return;
    try {
      const records = rows(), total = records.reduce((s3, r3) => s3 + r3.amount, 0);
      root.querySelector(".snack-totals").innerHTML = `<div class="metric"><span>${esc10(team2 === "\uC804\uCCB4" ? "\uBAA8\uB4E0 \uD300" : team2 + "\uD300")} \uC774\uBC88 \uB2EC \uC0AC\uC6A9</span><strong>${won2(total)}</strong><small>${records.length}\uAC74</small></div>`;
      root.querySelector(".snack-records").innerHTML = records.length ? `<div class="snack-list">${records.map((r3) => `<article><div><strong>${esc10(r3.date)} \xB7 ${esc10(r3.team)}\uD300</strong><small>\uC791\uC131\uC790 ${esc10(r3.name)}</small><p>${esc10(r3.note || "\uB0B4\uC6A9 \uC5C6\uC74C")}</p></div><strong>${won2(r3.amount)}</strong></article>`).join("")}</div>` : '<p class="empty">\uC774\uB2EC\uC5D0 \uB4F1\uB85D\uB41C \uAC04\uC2DD\uBE44\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p>';
      root.querySelector("[data-snack-export]").disabled = !records.length;
      root.querySelector(".snack-error").textContent = "";
    } catch (e3) {
      root.querySelector(".snack-error").textContent = e3.message;
      root.querySelector("[data-snack-export]").disabled = true;
    }
  }
  root.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (saving) return;
    const form = event.target, button = form.querySelector("[type=submit]"), values = new FormData(form);
    saving = true;
    button.disabled = true;
    form.querySelector(".form-error").textContent = "";
    try {
      await saveSnack(localStorage, { session, person, teams, months, date: String(values.get("date")), team: String(values.get("team")), amount: Number(values.get("amount")), note: String(values.get("note")) });
      if (disposed) return;
      form.reset();
      form.elements.date.value = defaultDate;
      refresh();
      toast2("\uAC04\uC2DD\uBE44\uB97C \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4. \uD574\uB2F9 \uC0AC\uC6A9 \uC6D4\uC5D0\uC11C \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
    } catch (e3) {
      if (!disposed) form.querySelector(".form-error").textContent = e3.message;
    } finally {
      saving = false;
      button.disabled = false;
    }
  });
  root.querySelector("[data-snack-export]").addEventListener("click", () => {
    try {
      const url = URL.createObjectURL(new Blob([snackCSV(rows())], { type: "text/csv;charset=utf-8" })), a3 = document.createElement("a");
      a3.href = url;
      a3.download = `\uD300\uAC04\uC2DD\uBE44_${month2}_${team2}.csv`;
      a3.click();
      setTimeout(() => URL.revokeObjectURL(url), 1e3);
    } catch (e3) {
      root.querySelector(".snack-error").textContent = e3.message;
    }
  });
  refresh();
  return { refresh, dispose() {
    disposed = true;
  } };
}

// src/expense-store.js
var EXPENSE_KEY = "bb-staff:public-preview:expenses:v1";
var EXPENSE_CONFIG_KEY = "bb-staff:public-preview:expense-approvers:v1";
var STAGES = ["\uD300\uC7A5", "\uCD1D\uAD04\uC2E4\uC7A5", "\uB300\uD45C\uC774\uC0AC", "\uB300\uD45C\uC6D0\uC7A5"];
var COMMON_TEAM = "\uACF5\uD1B5";
var EXPENSE_CATEGORIES = ["\uCFE0\uD321", "\uC720\uB2C8\uD3FC", "\uBB34\uC804\uAE30", "\uBA85\uCC30", "\uC6B0\uCCB4\uAD6D", "\uAE30\uD0C0"];
var EXPENSE_START = "2026-10-01";
var fail = (message) => {
  throw new Error(message);
};
var text = (v3, max, required = false) => typeof v3 === "string" && v3.length <= max && (!required || v3.trim().length > 0);
var numeric = (v3) => Number.isSafeInteger(v3) && v3 >= 0 && v3 <= 1e8;
var teamsOf = (people) => [...new Set(people.flatMap((p3) => p3.teams || []))];
var one = (people) => people.length === 1 ? people[0].personId : "";
function firstApproverCandidates(people, team2) {
  const teamPeople = people.filter((p3) => p3.teams.includes(team2));
  for (const titles2 of [["\uD300\uC7A5"], ["\uD30C\uD2B8\uC7A5"], ["\uCD1D\uAD04\uC2E4\uC7A5"], ["\uC2E4\uC7A5"]]) {
    const rows = teamPeople.filter((p3) => titles2.includes(p3.jobTitle));
    if (rows.length) return rows;
  }
  return [];
}
function defaultExpenseConfig(people) {
  return { teams: Object.fromEntries(teamsOf(people).map((t3) => [t3, one(firstApproverCandidates(people, t3))])), general: one(people.filter((p3) => p3.jobTitle === "\uCD1D\uAD04\uC2E4\uC7A5")), ceo: one(people.filter((p3) => p3.jobTitle === "\uB300\uD45C\uC774\uC0AC")), director: one(people.filter((p3) => p3.teams.includes("\uB300\uD45C") && p3.jobTitle?.startsWith("Dr."))) };
}
var shape = (config2) => {
  if (!config2 || typeof config2 !== "object" || !config2.teams || typeof config2.teams !== "object" || Array.isArray(config2.teams) || ["general", "ceo", "director"].some((k3) => typeof config2[k3] !== "string") || Object.values(config2.teams).some((id) => typeof id !== "string")) fail("\uACB0\uC7AC \uB2F4\uB2F9\uC790 \uC124\uC815 \uD615\uC2DD\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694. \uAE30\uC874 \uC124\uC815\uC740 \uBCF4\uC874\uD588\uC2B5\uB2C8\uB2E4.");
  return config2;
};
function validateConfig(config2, people) {
  shape(config2);
  for (const key of ["general", "ceo", "director"]) if (config2[key] && !people.some((p3) => p3.personId === config2[key])) fail("\uACB0\uC7AC \uB2F4\uB2F9\uC790\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
  for (const [team2, id] of Object.entries(config2.teams)) if (!teamsOf(people).includes(team2) || id && !people.some((p3) => p3.personId === id && p3.teams.includes(team2))) fail("\uD300\uBCC4 \uACB0\uC7AC \uB2F4\uB2F9\uC790\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
  return config2;
}
function currentConfig(config2, people) {
  shape(config2);
  const known = (id, team2) => people.some((p3) => p3.personId === id && (!team2 || p3.teams.includes(team2))) ? id : "";
  return { teams: Object.fromEntries(teamsOf(people).map((t3) => [t3, known(config2.teams[t3] ?? "", t3)])), general: known(config2.general), ceo: known(config2.ceo), director: known(config2.director) };
}
function readExpenseConfig(storage, people) {
  const raw = storage.getItem(EXPENSE_CONFIG_KEY);
  return raw === null ? defaultExpenseConfig(people) : currentConfig(JSON.parse(raw), people);
}
var locked = (key, work, locks = globalThis.navigator?.locks) => locks ? locks.request(key, async () => work()) : Promise.resolve().then(work);
function saveExpenseConfig(storage, people, session, config2, expected, { locks, guard = () => {
} } = {}) {
  return locked(EXPENSE_CONFIG_KEY, () => {
    guard();
    if (session?.role !== "admin") fail("\uAD00\uB9AC\uC790\uB9CC \uACB0\uC7AC\uC120\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
    validateConfig(config2, people);
    if (storage.getItem(EXPENSE_CONFIG_KEY) !== expected) fail("\uB2E4\uB978 \uD0ED\uC5D0\uC11C \uACB0\uC7AC\uC120\uC774 \uBCC0\uACBD\uB410\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C\uACE0\uCE68\uD574 \uC8FC\uC138\uC694.");
    const raw = JSON.stringify(config2);
    storage.setItem(EXPENSE_CONFIG_KEY, raw);
    return raw;
  }, locks);
}
function validateRecord(r3) {
  if (!r3 || !text(r3.id, 100, true) || !text(r3.applicantId, 100, true) || !text(r3.name, 100, true) || !text(r3.team, 60, true) || !text(r3.item, 200, true) || !text(r3.note, 2e3) || !text(r3.payment, 60) || !text(r3.category, 40, true) || !text(r3.date, 10, true) || !numeric(r3.amount) || !numeric(r3.unitPrice) || !Number.isSafeInteger(r3.quantity) || r3.quantity < 1 || r3.quantity > 1e4 || r3.unitPrice * r3.quantity !== r3.amount || !Number.isInteger(r3.revision) || r3.revision < 1 || !["pending", "approved", "rejected", "cancelled"].includes(r3.status) || !Number.isInteger(r3.step) || r3.step < 0 || r3.step > 4 || !Array.isArray(r3.route) || r3.route.length !== 4 || !Array.isArray(r3.history) || r3.history.length > 20) fail("\uC9C0\uCD9C\uACB0\uC758\uC11C \uC800\uC7A5 \uD615\uC2DD\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694. \uAE30\uC874 \uB0B4\uC6A9\uC740 \uBCF4\uC874\uD588\uC2B5\uB2C8\uB2E4.");
  if (r3.route.some((s3, i3) => !s3 || s3.label !== STAGES[i3] || !text(s3.personId, 100, true) || !text(s3.name, 100, true)) || r3.history.some((h3) => !h3 || !text(h3.actorId, 100, true) || !text(h3.at, 40, true) || !text(h3.note, 2e3) || !["submit", "approve", "reject", "cancel"].includes(h3.action) || !Number.isInteger(h3.step) || h3.step < 0 || h3.step > 4) || !text(r3.submittedAt, 40, true) || !text(r3.updatedAt, 40, true)) fail("\uC9C0\uCD9C\uACB0\uC758\uC11C \uACB0\uC7AC \uC774\uB825\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
  if (r3.status === "approved" && r3.step !== 4 || r3.status === "pending" && r3.step >= 4) fail("\uC9C0\uCD9C\uACB0\uC758\uC11C \uACB0\uC7AC \uC21C\uC11C\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
  return r3;
}
function readExpenses(storage) {
  const raw = storage.getItem(EXPENSE_KEY);
  if (raw === null) return [];
  const rows = JSON.parse(raw);
  if (!Array.isArray(rows) || rows.length > 1e4) fail("\uC9C0\uCD9C\uACB0\uC758\uC11C \uC800\uC7A5 \uBAA9\uB85D\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
  rows.forEach(validateRecord);
  if (new Set(rows.map((r3) => r3.id)).size !== rows.length) fail("\uC911\uBCF5\uB41C \uC9C0\uCD9C\uACB0\uC758\uC11C \uBC88\uD638\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
  return rows;
}
function approvalRoute(people, config2, team2, firstId) {
  validateConfig(config2, people);
  const first = config2.teams[team2] || firstId;
  if (!first || !config2.teams[team2] && !firstApproverCandidates(people, team2).some((p3) => p3.personId === first)) fail("1\uCC28 \uACB0\uC7AC \uB2F4\uB2F9\uC790\uB97C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694. \uB2F4\uB2F9\uC790\uAC00 \uC5C6\uC73C\uBA74 \uAD00\uB9AC\uC790\uC5D0\uAC8C \uACB0\uC7AC\uC120 \uC124\uC815\uC744 \uC694\uCCAD\uD574 \uC8FC\uC138\uC694.");
  return [first, config2.general, config2.ceo, config2.director].map((id, i3) => {
    const person = people.find((p3) => p3.personId === id);
    if (!person) fail(STAGES[i3] + " \uACB0\uC7AC \uB2F4\uB2F9\uC790\uB97C \uC124\uC815\uD574 \uC8FC\uC138\uC694.");
    return { label: STAGES[i3], personId: id, name: person.name };
  });
}
function submitExpense(storage, people, session, input, { locks, guard = () => {
}, now = () => (/* @__PURE__ */ new Date()).toISOString() } = {}) {
  return locked(EXPENSE_KEY, () => {
    guard();
    const person = session?.role === "employee" && people.find((p3) => p3.personId === session.personId);
    if (!person) fail("\uC9C1\uC6D0 \uACC4\uC815\uC73C\uB85C \uC2E0\uCCAD\uD574 \uC8FC\uC138\uC694.");
    if (input.team !== COMMON_TEAM && !person.teams.includes(input.team)) fail("\uBCF8\uC778\uC774 \uC18C\uC18D\uB41C \uD300 \uB610\uB294 \uACF5\uD1B5\uC73C\uB85C \uC2E0\uCCAD\uD574 \uC8FC\uC138\uC694.");
    const at = now(), limit = new Date(at);
    limit.setUTCFullYear(limit.getUTCFullYear() + 1);
    if (typeof input.date !== "string" || !/^20\d{2}-\d{2}-\d{2}$/.test(input.date) || !Number.isFinite(Date.parse(input.date + "T12:00:00Z")) || (/* @__PURE__ */ new Date(input.date + "T12:00:00Z")).toISOString().slice(0, 10) !== input.date || input.date < EXPENSE_START || input.date > limit.toISOString().slice(0, 10)) fail("2026\uB144 10\uC6D4 \uC774\uD6C4, 1\uB144 \uC774\uB0B4\uC758 \uC62C\uBC14\uB978 \uC0AC\uC6A9\uC77C\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694.");
    if (!text(input.item, 200, true) || !text(input.note ?? "", 2e3) || !text(input.payment ?? "", 60) || !EXPENSE_CATEGORIES.includes(input.category) || !numeric(input.unitPrice) || !Number.isSafeInteger(input.quantity) || input.quantity < 1 || input.quantity > 1e4 || !numeric(input.unitPrice * input.quantity)) fail("\uBB3C\uD488\xB7\uC0AC\uC6A9 \uBAA9\uC801, \uB2E8\uAC00\uC640 \uC218\uB7C9\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
    const route = approvalRoute(people, readExpenseConfig(storage, people), input.team === COMMON_TEAM ? person.teams[0] : input.team, input.firstId);
    const selfStage = route.findIndex((s3) => s3.personId === person.personId);
    if (selfStage >= 0) fail(`${STAGES[selfStage]} \uACB0\uC7AC \uB2F4\uB2F9\uC790\uAC00 \uC2E0\uCCAD\uC790 \uBCF8\uC778\uC774\uB77C \uC2E0\uCCAD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. ${selfStage === 0 ? "1\uCC28 \uACB0\uC7AC \uB2F4\uB2F9\uC790\uB97C \uB2E4\uB978 \uBD84\uC73C\uB85C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694. \uACE0\uB97C \uBD84\uC774 \uC5C6\uC73C\uBA74 \uAD00\uB9AC\uC790\uC5D0\uAC8C \uACB0\uC7AC\uC120 \uC124\uC815\uC5D0\uC11C \uC774 \uD300\uC758 1\uCC28 \uB2F4\uB2F9\uC790 \uBCC0\uACBD\uC744 \uC694\uCCAD\uD574 \uC8FC\uC138\uC694." : "\uAD00\uB9AC\uC790\uC5D0\uAC8C \uACB0\uC7AC\uC120 \uC124\uC815\uC5D0\uC11C \uB300\uCCB4 \uB2F4\uB2F9\uC790 \uC9C0\uC815\uC744 \uC694\uCCAD\uD574 \uC8FC\uC138\uC694."}`);
    const row = { id: crypto.randomUUID(), revision: 1, applicantId: person.personId, name: person.name, team: input.team, date: input.date, item: input.item.trim(), category: input.category, unitPrice: input.unitPrice, quantity: input.quantity, amount: input.unitPrice * input.quantity, payment: (input.payment || "").trim(), note: (input.note || "").trim(), status: "pending", step: 0, route, submittedAt: at, updatedAt: at, history: [{ action: "submit", actorId: person.personId, step: 0, at, note: "" }] };
    validateRecord(row);
    const rows = readExpenses(storage);
    rows.push(row);
    storage.setItem(EXPENSE_KEY, JSON.stringify(rows));
    return row;
  }, locks);
}
function canDecide(row, session) {
  return session?.role === "employee" && row.status === "pending" && row.applicantId !== session.personId && row.route[row.step]?.personId === session.personId;
}
function decideExpense(storage, session, { id, revision, action, note = "" }, { locks, guard = () => {
}, now = () => (/* @__PURE__ */ new Date()).toISOString() } = {}) {
  return locked(EXPENSE_KEY, () => {
    guard();
    const rows = readExpenses(storage), row = rows.find((r3) => r3.id === id);
    if (!row || row.revision !== revision) fail("\uB2E4\uB978 \uD0ED\uC5D0\uC11C \uCC98\uB9AC\uB41C \uC2E0\uCCAD\uC785\uB2C8\uB2E4. \uBAA9\uB85D\uC744 \uC0C8\uB85C\uACE0\uCE68\uD574 \uC8FC\uC138\uC694.");
    if (!["approve", "reject", "cancel"].includes(action) || !text(note, 2e3) || action === "reject" && !note.trim()) fail("\uBC18\uB824 \uC0AC\uC720\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.");
    if (action === "cancel") {
      if (session?.role !== "employee" || row.applicantId !== session.personId || row.status !== "pending") fail("\uC9C4\uD589 \uC911\uC778 \uBCF8\uC778 \uC2E0\uCCAD\uB9CC \uCDE8\uC18C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
      row.status = "cancelled";
    } else {
      if (!canDecide(row, session)) fail("\uD604\uC7AC \uB2E8\uACC4\uC758 \uACB0\uC7AC \uB2F4\uB2F9\uC790\uB9CC \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
      if (action === "reject") row.status = "rejected";
    }
    const at = now();
    row.history.push({ action, actorId: session.personId, step: row.step, at, note: note.trim() });
    if (action === "approve") {
      row.step++;
      if (row.step === 4) row.status = "approved";
    }
    row.revision++;
    row.updatedAt = at;
    validateRecord(row);
    storage.setItem(EXPENSE_KEY, JSON.stringify(rows));
    return row;
  }, locks);
}
function visibleExpenses(rows, session) {
  return session?.role === "admin" ? rows : session?.role === "employee" ? rows.filter((r3) => r3.applicantId === session.personId || r3.route.some((s3) => s3.personId === session.personId)) : [];
}
function expenseStatus(row) {
  return { approved: "\uCD5C\uC885 \uC2B9\uC778", rejected: "\uBC18\uB824", cancelled: "\uC2E0\uCCAD \uCDE8\uC18C" }[row.status] || STAGES[row.step] + " \uACB0\uC7AC \uB300\uAE30";
}
function expenseCSV(headers, rows) {
  const cell = (v3) => '"' + String(v3 ?? "").replace(/^[\s]*[=+@-]/, (m3) => "'" + m3).replaceAll('"', '""') + '"';
  return "\uFEFF" + [headers, ...rows].map((r3) => r3.map(cell).join(",")).join("\r\n");
}

// src/expense-overview.js
var expenseTeam = (value) => String(value ?? "").trim().replace(/팀$/, "");
function validateExpenseArchive(data2) {
  const object = (v3) => v3 !== null && typeof v3 === "object" && !Array.isArray(v3);
  if (!object(data2) || !Array.isArray(data2.rows) || !Array.isArray(data2.summaries) || !Array.isArray(data2.issues) || !data2.rows.every((r3) => object(r3) && typeof r3.id === "string" && typeof r3.month === "string" && typeof r3.item === "string" && Number.isFinite(r3.amount) && object(r3.source) && typeof r3.source.tab === "string" && Number.isInteger(r3.source.row) && (r3.notes == null || object(r3.notes))) || !data2.issues.every((i3) => object(i3) && typeof i3.id === "string" && typeof i3.kind === "string")) throw new Error("\uAE30\uC874 \uC9C0\uCD9C \uC790\uB8CC \uD615\uC2DD\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
  return data2;
}
function expenseOverview(requests, sourceRows, { month: month2, team: team2 = "", search: search2 = "" } = {}) {
  const query = search2.trim(), selected = expenseTeam(team2);
  const matches2 = (r3, source) => (source ? r3.month : r3.date.slice(2, 4) + r3.date.slice(5, 7)) === month2 && (!selected || expenseTeam(source ? r3.rawTeam : r3.team) === selected) && (!query || [r3.name, r3.item, r3.note, r3.team, r3.rawTeam, r3.category, ...Object.values(r3.notes || {})].some((v3) => String(v3 ?? "").includes(query)));
  const fresh = requests.filter((r3) => matches2(r3, false)).sort((a3, b3) => b3.submittedAt.localeCompare(a3.submittedAt)).map((row) => ({ kind: "request", row }));
  const imported = sourceRows.filter((r3) => matches2(r3, true)).map((row) => ({ kind: "source", row }));
  const items = [...fresh, ...imported];
  return { items, count: items.length, amount: items.reduce((sum, item) => sum + item.row.amount, 0), pending: fresh.filter(({ row }) => row.status === "pending").length, requestCount: fresh.length, sourceCount: imported.length };
}
function expenseOverviewCSV(items) {
  return expenseCSV(["\uAD6C\uBD84", "\uC870\uD68C \uC6D4", "\uC0AC\uC6A9\uC77C", "\uC791\uC131\uC790", "\uD300", "\uBB3C\uD488\xB7\uC0AC\uC6A9 \uBAA9\uC801", "\uBD84\uB958", "\uB2E8\uAC00", "\uC218\uB7C9", "\uAE08\uC561", "\uCE74\uB4DC\xB7\uACB0\uC81C\uC218\uB2E8", "\uC571 \uACB0\uC7AC \uC0C1\uD0DC", "\uC2DC\uD2B8 \uD300\uC7A5\uD655\uC778", "\uC6D0\uBCF8 \uD0ED", "\uC6D0\uBCF8 \uD589", "\uBA54\uBAA8"], items.map(({ kind, row: r3 }) => kind === "source" ? ["\uC2DC\uD2B8\uC5D0\uC11C \uAC00\uC838\uC634", r3.month, "", "", r3.rawTeam, r3.item, r3.category, r3.unitPrice, r3.quantity, r3.amount, "", "\uAE30\uC874 \uAE30\uB85D", r3.teamApproval, r3.source.tab, r3.source.row, Object.values(r3.notes || {}).join("\n")] : ["\uC0C8 \uC2E0\uCCAD", r3.date.slice(2, 4) + r3.date.slice(5, 7), r3.date, r3.name, r3.team, r3.item, r3.category, r3.unitPrice, r3.quantity, r3.amount, r3.payment, expenseStatus(r3), "", "", "", r3.note]));
}

// src/expense-view.js
var esc11 = (v3) => String(v3 ?? "").replace(/[&<>"']/g, (c3) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c3]);
var won3 = (v3) => Number(v3).toLocaleString("ko-KR") + "\uC6D0";
var empty = (v3) => `<p class="empty">${esc11(v3)}</p>`;
var stamp = (v3) => new Date(v3).toLocaleString("ko-KR", { timeZone: "Asia/Seoul", hour12: false });
var monthOf = (v3) => v3.slice(2, 4) + v3.slice(5, 7);
var START_MONTH = monthOf(EXPENSE_START);
var today = () => new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul" }).format(/* @__PURE__ */ new Date());
var nextMonth = (m3) => Number(m3.slice(2)) === 12 ? String(Number(m3.slice(0, 2)) + 1).padStart(2, "0") + "01" : m3.slice(0, 2) + String(Number(m3.slice(2)) + 1).padStart(2, "0");
var download2 = (name, headers, rows, csv2) => {
  const url = URL.createObjectURL(new Blob([csv2 ?? expenseCSV(headers, rows)], { type: "text/csv;charset=utf-8" })), a3 = document.createElement("a");
  a3.href = url;
  a3.download = name;
  a3.click();
  setTimeout(() => URL.revokeObjectURL(url), 1e3);
};
var routeHTML = (route, step2 = -1, status = "pending") => `<ol class="expense-route">${STAGES.map((label, i3) => `<li class="${i3 < step2 ? "is-done" : i3 === step2 ? "is-current" : ""}"><span>${i3 + 1}. ${label}</span><strong>${esc11(route?.[i3]?.name || "\uB2F4\uB2F9\uC790 \uBBF8\uC124\uC815")}</strong><small>${i3 < step2 ? "\uC2B9\uC778 \uC644\uB8CC" : i3 === step2 ? status === "rejected" ? "\uBC18\uB824" : status === "cancelled" ? "\uCDE8\uC18C" : "\uD604\uC7AC \uACB0\uC7AC \uB2E8\uACC4" : "\uC21C\uC11C\uB300\uB85C \uACB0\uC7AC"}</small></li>`).join("")}</ol>`;
function mountExpenses({ root, session, people, month: month2, toast: toast2, viewState = {}, guard: sessionGuard = () => {
} }) {
  const admin = session.role === "admin", person = people.find((p3) => p3.personId === session.personId), tabs = admin ? [["all", "\uC804\uCCB4 \uC2E0\uCCAD"], ["settings", "\uACB0\uC7AC\uC120 \uC124\uC815"]] : [["mine", "\uB0B4 \uC2E0\uCCAD"], ["inbox", "\uB0B4 \uACB0\uC7AC\uD568"]];
  const decisionDrafts = /* @__PURE__ */ new Map(), openDetails = /* @__PURE__ */ new Set();
  let disposed = false, busy = false, records = [], config2, configRaw, archive = null, archiveError = "", archiveLoading = false, page = 0;
  let tab = tabs.some((t3) => t3[0] === viewState.tab) ? viewState.tab : tabs[0][0], selectedMonth = viewState.month || (month2 >= START_MONTH ? month2 : START_MONTH), team2 = viewState.team || "", search2 = viewState.search || "";
  const guard = () => {
    if (disposed) throw new Error("\uD654\uBA74\uC774 \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
    sessionGuard();
  };
  root.innerHTML = `<section class="panel expense-intro"><div><span class="expense-eyebrow">\uC9C0\uCD9C \uC2E0\uCCAD \xB7 \uC21C\uCC28 \uACB0\uC7AC</span><h2>\uC2E0\uCCAD\uBD80\uD130 \uCD5C\uC885 \uC2B9\uC778\uAE4C\uC9C0</h2><p>\uD300\uC7A5 \u2192 \uCD1D\uAD04\uC2E4\uC7A5 \u2192 \uB300\uD45C\uC774\uC0AC \u2192 \uB300\uD45C\uC6D0\uC7A5</p></div><span class="badge">4\uB2E8\uACC4 \uACB0\uC7AC</span></section><p class="notice">\uD604\uC7AC\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uACC4\uC815\uC744 \uBC14\uAFD4 \uCCB4\uD5D8\uD558\uB294 \uCD08\uC548\uC785\uB2C8\uB2E4. \uB2E4\uB978 \uAE30\uAE30\uB85C \uC2E0\uCCAD\xB7\uACB0\uC7AC\uAC00 \uC804\uB2EC\uB418\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4.</p><nav class="expense-tabs" aria-label="\uC9C0\uCD9C\uACB0\uC758\uC11C \uBA54\uB274">${tabs.map(([id, title]) => `<button data-expense-tab="${id}" aria-pressed="${id === tab}">${title}</button>`).join("")}</nav><p class="expense-error" role="alert"></p><div class="expense-body"></div>`;
  const body = root.querySelector(".expense-body"), error = root.querySelector(".expense-error");
  const name = (id) => people.find((p3) => p3.personId === id)?.name || id;
  const remember = () => Object.assign(viewState, { tab, month: selectedMonth, team: team2, search: search2 });
  function setError(e3) {
    error.textContent = e3.message || String(e3);
  }
  function read() {
    records = visibleExpenses(readExpenses(localStorage), session);
    configRaw = localStorage.getItem(EXPENSE_CONFIG_KEY);
    config2 = readExpenseConfig(localStorage, people);
  }
  function filtered() {
    return records.filter((r3) => monthOf(r3.date) === selectedMonth && (!team2 || r3.team === team2) && (!search2 || [r3.name, r3.item, r3.note, r3.team].some((v3) => v3.includes(search2))) && (admin || tab === "mine" ? admin || r3.applicantId === session.personId : r3.route.some((s3) => s3.personId === session.personId)));
  }
  function monthOptions() {
    const known = [selectedMonth, monthOf(today()), ...records.map((r3) => monthOf(r3.date)), ...archive?.months || [], ...(archive?.rows || []).map((r3) => r3.month)].filter((m3) => /^\d{4}$/.test(m3) && m3 > START_MONTH).sort();
    const months = [START_MONTH];
    for (let m3 = START_MONTH; known.length && m3 < known.at(-1) && months.length < 120; ) months.push(m3 = nextMonth(m3));
    return [.../* @__PURE__ */ new Set([...months, ...known])].sort();
  }
  function controls(teams) {
    return `<div class="expense-filters"><label>\uC870\uD68C \uC6D4<select data-expense-month>${monthOptions().map((m3) => `<option value="${m3}" ${m3 === selectedMonth ? "selected" : ""}>20${m3.slice(0, 2)}\uB144 ${Number(m3.slice(2))}\uC6D4</option>`).join("")}</select></label><label>\uD300 \uC120\uD0DD<select data-expense-team><option value="">\uC804\uCCB4 \uD300</option>${teams.map((t3) => `<option value="${esc11(t3)}" ${t3 === team2 ? "selected" : ""}>${esc11(t3)}</option>`).join("")}</select></label><label>\uB0B4\uC6A9 \uCC3E\uAE30<input type="search" data-expense-search value="${esc11(search2)}" maxlength="100" placeholder="\uC774\uB984, \uBB3C\uD488 \uB610\uB294 \uC0AC\uC6A9 \uBAA9\uC801"></label><button data-expense-export>\uC870\uD68C \uB0B4\uC5ED \uB2E4\uC6B4\uB85C\uB4DC</button></div>`;
  }
  function bindControls() {
    body.querySelector("[data-expense-month]").onchange = (e3) => {
      selectedMonth = e3.target.value;
      page = 0;
      remember();
      paint();
    };
    body.querySelector("[data-expense-team]").onchange = (e3) => {
      team2 = e3.target.value;
      page = 0;
      remember();
      paint();
    };
    const input = body.querySelector("[data-expense-search]");
    input.oninput = () => {
      search2 = input.value;
      page = 0;
      remember();
      paintList();
    };
    body.querySelector("[data-expense-export]").onclick = () => {
      try {
        if (tab === "all") {
          if (!archive) throw new Error("\uC2DC\uD2B8 \uC790\uB8CC\uB97C \uBAA8\uB450 \uBD88\uB7EC\uC628 \uB4A4 \uB2E4\uC6B4\uB85C\uB4DC\uD574 \uC8FC\uC138\uC694.");
          read();
          download2(`\uC804\uCCB4\uC9C0\uCD9C_${selectedMonth}.csv`, null, null, expenseOverviewCSV(overview().items));
        } else {
          read();
          const rows = filtered();
          download2(`\uC9C0\uCD9C\uACB0\uC758\uC11C_${selectedMonth}.csv`, ["\uC0AC\uC6A9\uC77C", "\uC791\uC131\uC790", "\uD300", "\uBB3C\uD488\xB7\uC0AC\uC6A9 \uBAA9\uC801", "\uBD84\uB958", "\uB2E8\uAC00", "\uC218\uB7C9", "\uAE08\uC561", "\uCE74\uB4DC\xB7\uACB0\uC81C\uC218\uB2E8", "\uC0C1\uD0DC", "\uBA54\uBAA8"], rows.map((r3) => [r3.date, r3.name, r3.team, r3.item, r3.category, r3.unitPrice, r3.quantity, r3.amount, r3.payment, expenseStatus(r3), r3.note]));
        }
      } catch (e3) {
        setError(e3);
      }
    };
  }
  function cards(rows) {
    return rows.length ? rows.map((r3) => `<article class="expense-card" data-expense-id="${esc11(r3.id)}"><header><div><span class="expense-meta">${esc11(r3.date)} \xB7 ${esc11(r3.team)} \xB7 ${esc11(r3.name)}</span><h3>${esc11(r3.item)}</h3></div><strong>${won3(r3.amount)}</strong></header><div class="expense-card-status"><span class="badge">\uC0C8 \uC2E0\uCCAD</span><span class="badge">${esc11(expenseStatus(r3))}</span>${canDecide(r3, session) ? '<span class="expense-action-hint">\uB0B4 \uACB0\uC7AC \uCC28\uB840</span>' : ""}</div>${routeHTML(r3.route, r3.step, r3.status)}<details ${openDetails.has(r3.id) ? "open" : ""}><summary>\uC2E0\uCCAD \uB0B4\uC6A9 \xB7 \uACB0\uC7AC \uC774\uB825</summary><dl class="expense-details"><div><dt>\uBD84\uB958</dt><dd>${esc11(r3.category)}</dd></div><div><dt>\uB2E8\uAC00 \xD7 \uC218\uB7C9</dt><dd>${won3(r3.unitPrice)} \xD7 ${r3.quantity}</dd></div><div><dt>\uCE74\uB4DC\xB7\uACB0\uC81C\uC218\uB2E8</dt><dd>${esc11(r3.payment || "\uBBF8\uAE30\uC7AC")}</dd></div><div><dt>\uC2E0\uCCAD \uC2DC\uAC01</dt><dd>${esc11(stamp(r3.submittedAt))}</dd></div></dl><p class="expense-memo">${esc11(r3.note || "\uBA54\uBAA8 \uC5C6\uC74C")}</p><ol class="expense-history">${r3.history.map((h3) => `<li><strong>${esc11({ submit: "\uC2E0\uCCAD", approve: STAGES[h3.step] + " \uC2B9\uC778", reject: STAGES[h3.step] + " \uBC18\uB824", cancel: "\uC2E0\uCCAD \uCDE8\uC18C" }[h3.action])}</strong> \xB7 ${esc11(name(h3.actorId))}<small>${esc11(stamp(h3.at))}</small>${h3.note ? `<p>${esc11(h3.note)}</p>` : ""}</li>`).join("")}</ol></details>${canDecide(r3, session) ? `<form class="expense-decision" data-record="${esc11(r3.id)}" data-revision="${r3.revision}"><label>\uACB0\uC7AC \uC758\uACAC <small>\uBC18\uB824\uD560 \uB54C\uB294 \uC0AC\uC720\uB97C \uC801\uC5B4 \uC8FC\uC138\uC694.</small><textarea name="note" maxlength="2000" rows="2" placeholder="\uC758\uACAC \uB610\uB294 \uBC18\uB824 \uC0AC\uC720">${esc11(decisionDrafts.get(r3.id) || "")}</textarea></label><div class="form-actions"><button type="submit" name="decision" value="reject">\uBC18\uB824</button><button type="submit" name="decision" value="approve" class="primary">${esc11(STAGES[r3.step])} \uC2B9\uC778</button></div></form>` : !admin && r3.applicantId === session.personId && r3.status === "pending" ? `<button data-expense-cancel="${esc11(r3.id)}" data-revision="${r3.revision}">\uC2E0\uCCAD \uCDE8\uC18C</button>` : ""}</article>`).join("") : empty(tab === "inbox" ? "\uC774\uB2EC\uC5D0 \uB098\uC5D0\uAC8C \uBC30\uC815\uB41C \uACB0\uC7AC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." : "\uC774\uB2EC\uC5D0 \uB4F1\uB85D\uB41C \uC9C0\uCD9C \uC2E0\uCCAD\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
  }
  function archiveCard(r3) {
    const issues = archive.issues.filter((i3) => i3.id === r3.id);
    return `<article class="expense-card expense-archive-card"><header><div><span class="expense-meta">${esc11(r3.category)} \xB7 ${esc11(r3.rawTeam || "\uD300 \uBBF8\uAE30\uC7AC")} \xB7 ${esc11(r3.source.tab)} / ${r3.source.row}\uD589</span><h3>${esc11(r3.item)}</h3></div><strong>${won3(r3.amount)}</strong></header><div class="expense-card-status"><span class="badge">\uC2DC\uD2B8\uC5D0\uC11C \uAC00\uC838\uC634</span><span class="expense-meta">\uAE30\uC874 \uAE30\uB85D</span></div><dl class="expense-details"><div><dt>\uB2E8\uAC00</dt><dd>${r3.unitPrice === null || r3.unitPrice === "" ? "\uBBF8\uAE30\uC7AC" : won3(r3.unitPrice)}</dd></div><div><dt>\uC218\uB7C9</dt><dd>${esc11(r3.quantity === null || r3.quantity === "" ? "\uBBF8\uAE30\uC7AC" : r3.quantity)}</dd></div><div><dt>\uC2DC\uD2B8 \uD300\uC7A5\uD655\uC778</dt><dd>${esc11(r3.teamApproval || "\uBBF8\uAE30\uC7AC")}</dd></div><div><dt>\uC0AC\uC6A9\uC77C \xB7 \uC791\uC131\uC790</dt><dd>\uC6D0\uBCF8\uC5D0 \uBBF8\uAE30\uC7AC</dd></div></dl>${issues.length ? `<p class="notice">${issues.map((i3) => esc11(i3.kind)).join(" \xB7 ")}. \uC8FC\uBB38\uAE08\uC561\uC740 \uC6D0\uBCF8\uAC12\uC744 \uC720\uC9C0\uD588\uC2B5\uB2C8\uB2E4.</p>` : ""}${Object.keys(r3.notes || {}).length ? `<details><summary>\uC6D0\uBCF8 \uBA54\uBAA8</summary><p class="expense-memo">${esc11(Object.entries(r3.notes).map(([cell, note]) => cell + " " + note).join("\n"))}</p></details>` : ""}</article>`;
  }
  const overview = () => expenseOverview(records, archive?.rows || [], { month: selectedMonth, team: team2, search: search2 });
  function paintList() {
    if (disposed || tab === "settings") return;
    const list = body.querySelector(".expense-list"), metrics = body.querySelector(".expense-metrics");
    if (!list) return;
    if (tab === "all") {
      const result = overview(), complete = !!archive;
      page = Math.min(page, Math.max(0, Math.ceil(result.count / 20) - 1));
      metrics.innerHTML = `<div><span>\uC870\uD68C \uB0B4\uC5ED</span><strong>${complete ? result.count + "\uAC74" : "\uC9D1\uACC4 \uC911"}</strong><small>\uC0C8 \uC2E0\uCCAD ${result.requestCount}\uAC74 \xB7 \uC2DC\uD2B8 ${complete ? result.sourceCount + "\uAC74" : "\uD655\uC778 \uC911"}</small></div><div><span>\uC870\uD68C \uAE08\uC561</span><strong>${complete ? won3(result.amount) : "\uC9D1\uACC4 \uC911"}</strong></div><div><span>\uC0C8 \uC2E0\uCCAD \uACB0\uC7AC \uC9C4\uD589 \uC911</span><strong>${result.pending}\uAC74</strong></div>`;
      const loadNote = complete ? "" : archiveError ? `<p class="notice">${esc11(archiveError)} \xB7 \uD604\uC7AC \uC0C8 \uC2E0\uCCAD\uB9CC \uD45C\uC2DC\uD569\uB2C8\uB2E4.</p><button data-expense-retry>\uC2DC\uD2B8 \uC790\uB8CC \uB2E4\uC2DC \uBD88\uB7EC\uC624\uAE30</button>` : empty("\uC2DC\uD2B8 \uC790\uB8CC\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4.");
      list.innerHTML = loadNote + (result.count ? result.items.slice(page * 20, page * 20 + 20).map((item) => item.kind === "source" ? archiveCard(item.row) : cards([item.row])).join("") + (result.count > 20 ? `<div class="expense-pagination"><button data-expense-prev ${page === 0 ? "disabled" : ""}>\uC774\uC804</button><span>${page + 1} / ${Math.ceil(result.count / 20)}</span><button data-expense-next ${(page + 1) * 20 >= result.count ? "disabled" : ""}>\uB2E4\uC74C</button></div>` : "") : complete ? empty("\uC120\uD0DD\uD55C \uC870\uAC74\uC758 \uC9C0\uCD9C \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.") : "");
      body.querySelector("[data-expense-export]").disabled = !complete;
      list.querySelector("[data-expense-retry]")?.addEventListener("click", loadArchive);
      list.querySelector("[data-expense-prev]")?.addEventListener("click", () => {
        page--;
        paintList();
      });
      list.querySelector("[data-expense-next]")?.addEventListener("click", () => {
        page++;
        paintList();
      });
    } else {
      const rows = filtered().sort((a3, b3) => b3.submittedAt.localeCompare(a3.submittedAt));
      metrics.innerHTML = `<div><span>\uC870\uD68C \uC2E0\uCCAD</span><strong>${rows.length}\uAC74</strong></div><div><span>\uC2E0\uCCAD \uAE08\uC561</span><strong>${won3(rows.reduce((s3, r3) => s3 + r3.amount, 0))}</strong></div><div><span>${tab === "inbox" ? "\uB0B4 \uCC28\uB840" : "\uACB0\uC7AC \uC9C4\uD589 \uC911"}</span><strong>${rows.filter((r3) => tab === "inbox" ? canDecide(r3, session) : r3.status === "pending").length}\uAC74</strong></div>`;
      list.querySelectorAll("[data-expense-id]").forEach((card) => {
        const id = card.dataset.expenseId;
        if (card.querySelector("details")?.open) openDetails.add(id);
        else openDetails.delete(id);
      });
      list.innerHTML = cards(rows);
      list.querySelectorAll(".expense-decision textarea").forEach((input) => input.oninput = () => decisionDrafts.set(input.closest("form").dataset.record, input.value));
      list.querySelectorAll(".expense-decision").forEach((form) => form.onsubmit = (event) => {
        event.preventDefault();
        mutate(() => decideExpense(localStorage, session, { id: form.dataset.record, revision: Number(form.dataset.revision), action: event.submitter.value, note: form.elements.note.value }, { guard }), "\uACB0\uC7AC \uB0B4\uC6A9\uC744 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.");
      });
      list.querySelectorAll("[data-expense-cancel]").forEach((button) => button.onclick = () => {
        if (confirm("\uC774 \uC9C0\uCD9C \uC2E0\uCCAD\uC744 \uCDE8\uC18C\uD560\uAE4C\uC694?")) mutate(() => decideExpense(localStorage, session, { id: button.dataset.expenseCancel, revision: Number(button.dataset.revision), action: "cancel" }, { guard }), "\uC2E0\uCCAD\uC744 \uCDE8\uC18C\uD588\uC2B5\uB2C8\uB2E4.");
      });
    }
  }
  async function loadArchive() {
    if (archiveLoading || disposed) return;
    archiveLoading = true;
    archiveError = "";
    paintList();
    try {
      const response = await fetch("./expense-data.json");
      if (!response.ok) throw new Error("\uAE30\uC874 \uC9C0\uCD9C \uC790\uB8CC \uC751\uB2F5 " + response.status);
      const data2 = validateExpenseArchive(await response.json());
      if (disposed) return;
      archive = data2;
      if (tab === "all") paint();
    } catch (e3) {
      if (!disposed) {
        archive = null;
        archiveError = e3.message;
        paintList();
      }
    } finally {
      archiveLoading = false;
    }
  }
  function formHTML() {
    const prefix = `20${selectedMonth.slice(0, 2)}-${selectedMonth.slice(2)}`, now = today(), date = now.startsWith(prefix) ? now : prefix + "-01";
    return `<details class="expense-register" ${records.some((r3) => r3.applicantId === person.personId) ? "" : "open"}><summary>+ \uC9C0\uCD9C\uACB0\uC758\uC11C \uC2E0\uCCAD</summary><form data-expense-form><p>\uC791\uC131\uC790 <strong>${esc11(person.name)}</strong> \xB7 \uC544\uB798 \uACB0\uC7AC\uC120\uC744 \uD655\uC778\uD55C \uB4A4 \uC2E0\uCCAD\uD574 \uC8FC\uC138\uC694. \uC9C1\uC6D0 \uC74C\uB8CC\xB7\uC6D0\uB0B4 \uBE44\uCE58 \uBB3C\uD488\xB7\uC18C\uBAA8\uD488\uCC98\uB7FC \uD300 \uAD6C\uBD84 \uC5C6\uC774 \uC4F0\uB294 \uBB3C\uD488\uC740 \uC2E0\uCCAD \uD300\uC744 <strong>\uACF5\uD1B5</strong>\uC73C\uB85C \uACE0\uB974\uC138\uC694. \uACB0\uC7AC\uB294 \uBCF8\uC778 \uD300 1\uCC28 \uB2F4\uB2F9\uC790\uBD80\uD130 \uC9C4\uD589\uB3FC\uC694.</p><div class="form-grid"><label>\uC0AC\uC6A9 \uC608\uC815\uC77C \xB7 \uC0AC\uC6A9\uC77C<input type="date" name="date" min="${EXPENSE_START}" value="${date}" required></label><label>\uC2E0\uCCAD \uD300<select name="team">${person.teams.map((t3) => `<option value="${esc11(t3)}">${esc11(t3)}</option>`).join("")}<option value="${COMMON_TEAM}">${COMMON_TEAM} \xB7 \uC804\uCCB4\uD300 \uACF5\uC6A9 \uBB3C\uD488</option></select></label><label>\uBD84\uB958<select name="category">${EXPENSE_CATEGORIES.map((t3) => `<option>${t3}</option>`).join("")}</select></label><label>\uBB3C\uD488 \xB7 \uC0AC\uC6A9 \uBAA9\uC801<input name="item" required maxlength="200" placeholder="\uC608: \uD300 \uC5C5\uBB34\uC6A9 \uD0A4\uBCF4\uB4DC \uAD6C\uB9E4"></label><label>\uB2E8\uAC00 (\uC6D0)<input name="unitPrice" type="number" min="0" max="100000000" step="1" inputmode="numeric" required placeholder="\uC608: 25000"></label><label>\uC218\uB7C9<input name="quantity" type="number" min="1" max="10000" step="1" value="1" required></label><label>\uCE74\uB4DC \xB7 \uACB0\uC81C\uC218\uB2E8 (\uC120\uD0DD)<input name="payment" maxlength="60" placeholder="\uC608: \uAE30\uC5C5\uCE74\uB4DC"></label><label data-first-label>1\uCC28 \uACB0\uC7AC \uB2F4\uB2F9\uC790<select name="firstId"></select></label></div><label>\uBA54\uBAA8 (\uC120\uD0DD)<textarea name="note" maxlength="2000" rows="3" placeholder="\uD655\uC778\uD560 \uB0B4\uC6A9\uC744 \uB0A8\uACA8 \uC8FC\uC138\uC694."></textarea></label><div class="expense-form-route"></div><div class="expense-submit-row"><div><span>\uC2E0\uCCAD \uAE08\uC561</span><strong data-expense-amount>0\uC6D0</strong></div><button type="submit" class="primary">\uC2E0\uCCAD\uD558\uAE30</button></div><p class="form-error" role="alert"></p></form></details>`;
  }
  function bindForm() {
    const form = body.querySelector("[data-expense-form]");
    if (!form) return;
    const route = () => {
      const chosen = form.elements.team.value, t3 = chosen === COMMON_TEAM ? person.teams[0] : chosen, fixed = config2.teams[t3], candidates = fixed ? people.filter((p3) => p3.personId === fixed) : firstApproverCandidates(people, t3), select = form.elements.firstId, old = select.value;
      select.innerHTML = (candidates.length !== 1 ? '<option value="">\uB2F4\uB2F9\uC790 \uC120\uD0DD</option>' : "") + candidates.map((p3) => `<option value="${esc11(p3.personId)}">${esc11(p3.name)} \xB7 ${esc11(p3.jobTitle || "\uB2F4\uB2F9\uC790")}</option>`).join("");
      if (candidates.some((p3) => p3.personId === old)) select.value = old;
      select.required = true;
      select.disabled = !!fixed;
      preview();
    };
    const preview = () => {
      const ids = [form.elements.firstId.value, config2.general, config2.ceo, config2.director], selfStage = ids.indexOf(person.personId), box = form.querySelector(".expense-form-route");
      box.innerHTML = routeHTML(ids.map((id) => people.find((p3) => p3.personId === id)));
      if (selfStage >= 0) {
        box.querySelectorAll("li")[selfStage].classList.add("is-self");
        box.insertAdjacentHTML("beforeend", `<p class="notice expense-self-warning"><strong>${STAGES[selfStage]} \uB2F4\uB2F9\uC790\uAC00 \uBCF8\uC778\uC774\uB77C \uC9C0\uAE08\uC740 \uC2E0\uCCAD\uD560 \uC218 \uC5C6\uC5B4\uC694.</strong> \uBCF8\uC778\uC740 \uC790\uAE30 \uC2E0\uCCAD\uC744 \uACB0\uC7AC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. ${selfStage === 0 ? "\uC704\uC758 1\uCC28 \uACB0\uC7AC \uB2F4\uB2F9\uC790\uC5D0\uC11C \uB2E4\uB978 \uBD84\uC744 \uACE0\uB974\uC138\uC694. \uACE0\uB97C \uBD84\uC774 \uC5C6\uC73C\uBA74 \uAD00\uB9AC\uC790\uAC00 \uACB0\uC7AC\uC120 \uC124\uC815\uC5D0\uC11C \uC774 \uD300\uC758 1\uCC28 \uB2F4\uB2F9\uC790\uB97C \uBC14\uAFB8\uC5B4\uC57C \uD574\uC694." : "\uAD00\uB9AC\uC790\uC5D0\uAC8C \uACB0\uC7AC\uC120 \uC124\uC815\uC5D0\uC11C " + STAGES[selfStage] + " \uB300\uCCB4 \uB2F4\uB2F9\uC790 \uC9C0\uC815\uC744 \uC694\uCCAD\uD574 \uC8FC\uC138\uC694."}</p>`);
      }
    };
    form.elements.team.onchange = route;
    form.elements.firstId.onchange = preview;
    route();
    const total = () => {
      const amount = Number(form.elements.unitPrice.value) * Number(form.elements.quantity.value);
      form.querySelector("[data-expense-amount]").textContent = Number.isSafeInteger(amount) && amount >= 0 && amount <= 1e8 ? won3(amount) : "\uAE08\uC561 \uD655\uC778 \uD544\uC694";
    };
    form.elements.unitPrice.oninput = total;
    form.elements.quantity.oninput = total;
    form.onsubmit = (event) => {
      event.preventDefault();
      const f3 = new FormData(form);
      mutate(() => submitExpense(localStorage, people, session, { date: f3.get("date"), team: f3.get("team"), category: f3.get("category"), item: f3.get("item"), unitPrice: Number(f3.get("unitPrice")), quantity: Number(f3.get("quantity")), payment: f3.get("payment"), note: f3.get("note"), firstId: form.elements.firstId.value }, { guard }), "\uC9C0\uCD9C\uACB0\uC758\uC11C\uB97C \uC2E0\uCCAD\uD588\uC2B5\uB2C8\uB2E4.", form.querySelector(".form-error"));
    };
  }
  function settings() {
    const teams = [...new Set(people.flatMap((p3) => p3.teams))], options = (list, id) => '<option value="">\uBBF8\uC124\uC815</option>' + list.map((p3) => `<option value="${esc11(p3.personId)}" ${p3.personId === id ? "selected" : ""}>${esc11(p3.name)} \xB7 ${esc11(p3.rawTeam)} \xB7 ${esc11(p3.jobTitle || "\uC9C1\uCC45 \uBBF8\uAE30\uC7AC")}</option>`).join("");
    body.innerHTML = `<section class="panel expense-settings"><h2>\uACB0\uC7AC \uB2F4\uB2F9\uC790 \uC124\uC815</h2><p>\uC2DC\uD2B8 \uC9C1\uCC45\uC73C\uB85C \uD655\uC778\uB418\uB294 \uB2F4\uB2F9\uC790\uB97C \uAE30\uBCF8 \uD45C\uC2DC\uD588\uC2B5\uB2C8\uB2E4. \uC5EC\uB7EC \uD6C4\uBCF4\uAC00 \uC788\uC73C\uBA74 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694. \uBCC0\uACBD \uC0AC\uD56D\uC740 \uC0C8 \uC2E0\uCCAD\uBD80\uD130 \uC801\uC6A9\uB418\uBA70 \uC774\uBBF8 \uC2E0\uCCAD\uB41C \uACB0\uC7AC\uC120\uC740 \uC720\uC9C0\uB429\uB2C8\uB2E4.</p><p>\uC2E0\uCCAD\uC790 \uBCF8\uC778\uC774 \uACB0\uC7AC\uC120\uC5D0 \uC788\uC73C\uBA74 \uC2E0\uCCAD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4(\uD300\uC7A5\uC774 \uBCF8\uC778 \uD300 \uBB3C\uD488\uC744 \uC2E0\uCCAD\uD558\uB294 \uACBD\uC6B0 \uB4F1). \uADF8 \uD300\uC758 1\uCC28 \uB2F4\uB2F9\uC790\uB97C \uB2E4\uB978 \uC9C1\uC6D0\uC73C\uB85C \uBC14\uAFB8\uAC70\uB098, 2~4\uCC28 \uB2F4\uB2F9\uC790\uAC00 \uC2E0\uCCAD\uC790\uB77C\uBA74 \uADF8 \uB2E8\uACC4\uC758 \uB300\uCCB4 \uB2F4\uB2F9\uC790\uB97C \uC9C0\uC815\uD55C \uB4A4 \uC2E0\uCCAD\uD558\uB3C4\uB85D \uC548\uB0B4\uD574 \uC8FC\uC138\uC694. \uACF5\uD1B5(\uC804\uCCB4\uD300) \uC2E0\uCCAD\uC740 \uC2E0\uCCAD\uC790 \uC18C\uC18D \uD300\uC758 1\uCC28 \uB2F4\uB2F9\uC790\uB97C \uAC70\uCE69\uB2C8\uB2E4.</p><form data-expense-settings><h3>1\uCC28 \xB7 \uD300\uBCC4 \uB2F4\uB2F9\uC790</h3><div class="form-grid">${teams.map((t3) => `<label>${esc11(t3)}<select data-config-team="${esc11(t3)}">${options(people.filter((p3) => p3.teams.includes(t3)), config2.teams[t3])}</select></label>`).join("")}</div><h3>2\uCC28 \u2192 3\uCC28 \u2192 4\uCC28 \uB2F4\uB2F9\uC790</h3><div class="form-grid">${[["general", "\uCD1D\uAD04\uC2E4\uC7A5"], ["ceo", "\uB300\uD45C\uC774\uC0AC"], ["director", "\uB300\uD45C\uC6D0\uC7A5"]].map(([key, title]) => `<label>${title}<select name="${key}">${options(people, config2[key])}</select></label>`).join("")}</div><div class="form-actions"><button type="submit" class="primary">\uACB0\uC7AC\uC120 \uC800\uC7A5</button></div><p class="form-error" role="alert"></p></form></section>`;
    const form = body.querySelector("form"), expected = configRaw;
    form.onsubmit = (event) => {
      event.preventDefault();
      const next = { teams: Object.fromEntries([...form.querySelectorAll("[data-config-team]")].map((s3) => [s3.dataset.configTeam, s3.value])), general: form.elements.general.value, ceo: form.elements.ceo.value, director: form.elements.director.value };
      mutate(() => saveExpenseConfig(localStorage, people, session, next, expected, { guard }), "\uC0C8 \uC2E0\uCCAD\uC5D0 \uC801\uC6A9\uD560 \uACB0\uC7AC\uC120\uC744 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.", form.querySelector(".form-error"));
    };
  }
  function paint() {
    if (disposed) return;
    remember();
    root.querySelectorAll("[data-expense-tab]").forEach((b3) => {
      b3.setAttribute("aria-pressed", String(b3.dataset.expenseTab === tab));
      b3.disabled = busy;
    });
    if (tab === "settings") {
      settings();
      return;
    }
    const teams = admin ? [...new Set([...people.flatMap((p3) => p3.teams), ...(archive?.rows || []).map((r3) => r3.rawTeam)].map(expenseTeam).filter(Boolean))] : [...new Set(records.flatMap((r3) => r3.team).concat(person.teams))];
    if (team2 && !teams.includes(team2)) {
      if (admin && !archive) teams.push(team2);
      else team2 = "";
    }
    remember();
    body.innerHTML = (tab === "mine" ? `<section class="panel">${formHTML()}</section>` : "") + `<section class="panel expense-records">${tab === "all" ? `<div class="expense-archive-note"><h2>\uC804\uCCB4 \uC9C0\uCD9C \uB0B4\uC5ED</h2><p>\uC2DC\uD2B8\uC5D0\uC11C \uAC00\uC838\uC628 \uB0B4\uC5ED\uACFC \uC0C8 \uC2E0\uCCAD\uC744 \uD568\uAED8 \uD655\uC778\uD574\uC694. \uC0C8 \uC2E0\uCCAD\uC774 \uC704\uCABD\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p></div>` : ""}${controls(teams)}<div class="expense-metrics"></div><div class="expense-list"></div></section>`;
    bindControls();
    bindForm();
    paintList();
    if (tab === "all" && !archive && !archiveError) loadArchive();
  }
  async function mutate(work, message, target = error) {
    if (busy || disposed) return;
    busy = true;
    target.textContent = "";
    root.querySelectorAll("button").forEach((b3) => b3.disabled = true);
    try {
      const result = await work();
      if (disposed) return;
      if (result?.history?.length === 1) selectedMonth = monthOf(result.date);
      read();
      paint();
      toast2(message);
    } catch (e3) {
      if (!disposed) target.textContent = e3.message;
    } finally {
      busy = false;
      if (!disposed) {
        root.querySelectorAll("button").forEach((b3) => b3.disabled = false);
        if (tab === "all") paintList();
      }
    }
  }
  root.querySelectorAll("[data-expense-tab]").forEach((button) => button.onclick = () => {
    if (busy) return;
    tab = button.dataset.expenseTab;
    team2 = "";
    page = 0;
    error.textContent = "";
    try {
      read();
      paint();
    } catch (e3) {
      setError(e3);
      body.innerHTML = empty("\uC800\uC7A5\uB41C \uB0B4\uC6A9\uC740 \uBCF4\uC874\uD588\uC2B5\uB2C8\uB2E4. \uD655\uC778 \uD6C4 \uB2E4\uC2DC \uC5F4\uC5B4 \uC8FC\uC138\uC694.");
    }
  });
  function refresh() {
    if (disposed) return;
    try {
      read();
      if (body.querySelector(".expense-decision") && document.activeElement?.closest(".expense-decision")) {
        error.textContent = "\uB2E4\uB978 \uD0ED\uC5D0\uC11C \uAE30\uB85D\uC774 \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4. \uC791\uC131 \uC911\uC778 \uC758\uACAC\uC740 \uC720\uC9C0\uD588\uC2B5\uB2C8\uB2E4. \uB0B4 \uACB0\uC7AC\uD568\uC744 \uB2E4\uC2DC \uB20C\uB7EC \uCD5C\uC2E0 \uC0C1\uD0DC\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.";
        return;
      }
      error.textContent = "";
      if (tab === "settings" || tab === "mine") error.textContent = "\uB2E4\uB978 \uD0ED\uC5D0\uC11C \uAE30\uB85D \uB610\uB294 \uACB0\uC7AC\uC120\uC774 \uBC14\uB00C\uC5C8\uC2B5\uB2C8\uB2E4. \uC81C\uCD9C \uC2DC \uCD5C\uC2E0 \uC124\uC815\uC744 \uC801\uC6A9\uD569\uB2C8\uB2E4. \uACB0\uC7AC\uC120 \uC124\uC815\uC740 \uB2E4\uC2DC \uC5F4\uC5B4 \uC8FC\uC138\uC694.";
      paintList();
    } catch (e3) {
      setError(e3);
      body.querySelector(".expense-list")?.replaceChildren();
    }
  }
  try {
    read();
    paint();
  } catch (e3) {
    setError(e3);
    body.innerHTML = empty("\uC800\uC7A5\uB41C \uB0B4\uC6A9\uC740 \uBCF4\uC874\uD588\uC2B5\uB2C8\uB2E4. \uD655\uC778 \uD6C4 \uB2E4\uC2DC \uC5F4\uC5B4 \uC8FC\uC138\uC694.");
  }
  return { refresh, dispose() {
    disposed = true;
  } };
}

// src/status-calendar.js
var time2 = (value) => new Date(value).toLocaleTimeString("ko-KR", { timeZone: "Asia/Seoul", hour: "2-digit", minute: "2-digit", hourCycle: "h23" });
function mealStatusEvents(people, storage) {
  return people.flatMap((p3) => {
    const active = readStaffState(storage, p3.personId).active.find((r3) => r3.kind === "meal");
    if (!active) return [];
    const at = time2(active.startedAt), paused2 = Number.isFinite(active.pausedAt);
    return [{ id: "status:" + p3.personId, personId: p3.personId, name: p3.name, rawTeam: p3.rawTeam, teams: p3.teams, startedAt: active.startedAt, paused: paused2, date: mealDate(active.startedAt), time: at, label: (paused2 ? "\uC2DD\uC0AC \uC911\uB2E8" : "\uC2DD\uC0AC\uC911") + " \xB7 \uC2DC\uC791 " + at }];
  }).sort((a3, b3) => a3.startedAt - b3.startedAt);
}

// node_modules/spin-wheel/src/util.js
function getRandomFloat(min = 0, max = 0, round = 14) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(round));
}
function degRad(degrees = 0) {
  return degrees * Math.PI / 180;
}
function isAngleBetween(angle, arcStart, arcEnd) {
  if (arcStart < arcEnd) return arcStart <= angle && angle < arcEnd;
  return arcStart <= angle || angle < arcEnd;
}
function getFontSizeToFit(text2, fontFamily, maxWidth, canvasContext) {
  canvasContext.save();
  canvasContext.font = `1px ${fontFamily}`;
  const w4 = canvasContext.measureText(text2).width;
  canvasContext.restore();
  return maxWidth / w4;
}
function isPointInCircle(point = { x: 0, y: 0 }, cx, cy, radius) {
  const distanceSquared = (point.x - cx) ** 2 + (point.y - cy) ** 2;
  return distanceSquared <= radius ** 2;
}
function translateXYToElement(point = { x: 0, y: 0 }, element = {}, devicePixelRatio = 1) {
  const rect = element.getBoundingClientRect();
  return {
    x: (point.x - rect.left) * devicePixelRatio,
    y: (point.y - rect.top) * devicePixelRatio
  };
}
function getAngle(originX, originY, targetX, targetY) {
  const dx = originX - targetX;
  const dy = originY - targetY;
  let theta = Math.atan2(-dy, -dx);
  theta *= 180 / Math.PI;
  if (theta < 0) theta += 360;
  return theta;
}
function addAngle(a3 = 0, b3 = 0) {
  const sum = a3 + b3;
  let result;
  if (sum > 0) {
    result = sum % 360;
  } else {
    result = 360 + sum % 360;
  }
  if (result === 360) result = 0;
  return result;
}
function diffAngle(a3 = 0, b3 = 0) {
  const offsetFrom180 = 180 - b3;
  const aWithOffset = addAngle(a3, offsetFrom180);
  return 180 - aWithOffset;
}
function calcWheelRotationForTargetAngle(currentRotation = 0, targetAngle = 0, direction = 1) {
  let angle = (currentRotation % 360 + targetAngle) % 360;
  angle = fixFloat(angle);
  angle = (direction === 1 ? 360 - angle : 360 + angle) % 360;
  angle *= direction;
  return currentRotation + angle;
}
function isObject(v3) {
  return typeof v3 === "object" && !Array.isArray(v3) && v3 !== null;
}
function isNumber(n2) {
  return typeof n2 === "number" && !Number.isNaN(n2);
}
function setProp({ val, isValid, errorMessage, defaultValue, action = null }) {
  if (isValid) {
    return action ? action() : val;
  } else if (val === void 0) {
    return defaultValue;
  }
  throw new Error(errorMessage);
}
function fixFloat(f3 = 0) {
  return Number(f3.toFixed(9));
}
function easeSinOut(n2) {
  return Math.sin(n2 * Math.PI / 2);
}
function getResizeObserver(element = {}, callBack = {}) {
  if (window.ResizeObserver) {
    const observer = new ResizeObserver(() => {
      callBack({ redraw: true });
    });
    observer.observe(element);
    return {
      stop: () => {
        observer.unobserve(element);
        observer.disconnect();
      }
    };
  }
  window.addEventListener("resize", callBack);
  return {
    stop: () => {
      window.removeEventListener("resize", callBack);
    }
  };
}

// node_modules/spin-wheel/src/constants.js
var arcAdjust = -90;
var baseCanvasSize = 500;
var dragCapturePeriod = 250;
var AlignText = Object.freeze({
  left: "left",
  right: "right",
  center: "center"
});
var Defaults = Object.freeze({
  wheel: {
    borderColor: "#000",
    borderWidth: 1,
    debug: false,
    image: null,
    isInteractive: true,
    itemBackgroundColors: ["#fff"],
    itemLabelAlign: AlignText.right,
    itemLabelBaselineOffset: 0,
    itemLabelColors: ["#000"],
    itemLabelFont: "sans-serif",
    itemLabelFontSizeMax: baseCanvasSize,
    itemLabelRadius: 0.85,
    itemLabelRadiusMax: 0.2,
    itemLabelRotation: 0,
    itemLabelStrokeColor: "#fff",
    itemLabelStrokeWidth: 0,
    items: [],
    lineColor: "#000",
    lineWidth: 1,
    pixelRatio: 0,
    radius: 0.95,
    rotation: 0,
    rotationResistance: -35,
    rotationSpeedMax: 300,
    offset: { x: 0, y: 0 },
    onCurrentIndexChange: null,
    onRest: null,
    onSpin: null,
    overlayImage: null,
    pointerAngle: 0
  },
  item: {
    backgroundColor: null,
    image: null,
    imageOpacity: 1,
    imageRadius: 0.5,
    imageRotation: 0,
    imageScale: 1,
    label: "",
    labelColor: null,
    value: null,
    weight: 1
  }
});
var Debugging = Object.freeze({
  pointerLineColor: "#ff00ff",
  labelBoundingBoxColor: "#ff00ff",
  labelRadiusColor: "#00ff00",
  dragPointHue: 300
});

// node_modules/spin-wheel/src/events.js
function register(wheel = {}) {
  registerPointerEvents(wheel);
  wheel._handler_onResize = getResizeObserver(wheel._canvasContainer, ({ redraw = true }) => {
    wheel.resize();
    if (redraw) wheel.draw(performance.now());
  });
  const listenForDevicePixelRatioChange = () => {
    wheel._mediaQueryList = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
    wheel._mediaQueryList.addEventListener("change", wheel._handler_onDevicePixelRatioChange, { once: true });
  };
  wheel._handler_onDevicePixelRatioChange = () => {
    wheel.resize();
    listenForDevicePixelRatioChange();
  };
  listenForDevicePixelRatioChange();
}
function unregister(wheel = {}) {
  const canvas = wheel.canvas;
  if ("PointerEvent" in window) {
    canvas.removeEventListener("pointerdown", wheel._handler_onPointerDown);
    canvas.removeEventListener("pointermove", wheel._handler_onPointerMoveRefreshCursor);
  } else {
    canvas.removeEventListener("touchstart", wheel._handler_onTouchStart);
    canvas.removeEventListener("mousedown", wheel._handler_onMouseDown);
    canvas.removeEventListener("mousemove", wheel._handler_onMouseMoveRefreshCursor);
  }
  wheel._handler_onResize.stop();
  wheel._mediaQueryList.removeEventListener("change", wheel._handler_onDevicePixelRatioChange);
}
function registerPointerEvents(wheel = {}) {
  const canvas = wheel.canvas;
  wheel._handler_onPointerMoveRefreshCursor = (e3 = {}) => {
    const point = {
      x: e3.clientX,
      y: e3.clientY
    };
    wheel._isCursorOverWheel = wheel.wheelHitTest(point);
    wheel.refreshCursor();
  };
  wheel._handler_onMouseMoveRefreshCursor = (e3 = {}) => {
    const point = {
      x: e3.clientX,
      y: e3.clientY
    };
    wheel._isCursorOverWheel = wheel.wheelHitTest(point);
    wheel.refreshCursor();
  };
  wheel._handler_onPointerDown = (e3 = {}) => {
    const point = {
      x: e3.clientX,
      y: e3.clientY
    };
    if (!wheel.isInteractive) return;
    if (!wheel.wheelHitTest(point)) return;
    e3.preventDefault();
    wheel.dragStart(point);
    canvas.setPointerCapture(e3.pointerId);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);
    canvas.addEventListener("pointerout", onPointerUp);
    function onPointerMove(e4 = {}) {
      e4.preventDefault();
      wheel.dragMove({
        x: e4.clientX,
        y: e4.clientY
      });
    }
    function onPointerUp(e4 = {}) {
      e4.preventDefault();
      canvas.releasePointerCapture(e4.pointerId);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      canvas.removeEventListener("pointerout", onPointerUp);
      wheel.dragEnd();
    }
  };
  wheel._handler_onMouseDown = (e3 = {}) => {
    const point = {
      x: e3.clientX,
      y: e3.clientY
    };
    if (!wheel.isInteractive) return;
    if (!wheel.wheelHitTest(point)) return;
    wheel.dragStart(point);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    function onMouseMove(e4 = {}) {
      e4.preventDefault();
      wheel.dragMove({
        x: e4.clientX,
        y: e4.clientY
      });
    }
    function onMouseUp(e4 = {}) {
      e4.preventDefault();
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      wheel.dragEnd();
    }
  };
  wheel._handler_onTouchStart = (e3 = {}) => {
    const point = {
      x: e3.targetTouches[0].clientX,
      y: e3.targetTouches[0].clientY
    };
    if (!wheel.isInteractive) return;
    if (!wheel.wheelHitTest(point)) return;
    e3.preventDefault();
    wheel.dragStart(point);
    canvas.addEventListener("touchmove", onTouchMove);
    canvas.addEventListener("touchend", onTouchEnd);
    canvas.addEventListener("touchcancel", onTouchEnd);
    function onTouchMove(e4 = {}) {
      e4.preventDefault();
      wheel.dragMove({
        x: e4.targetTouches[0].clientX,
        y: e4.targetTouches[0].clientY
      });
    }
    function onTouchEnd(e4 = {}) {
      e4.preventDefault();
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
      canvas.removeEventListener("touchcancel", onTouchEnd);
      wheel.dragEnd();
    }
  };
  if ("PointerEvent" in window) {
    canvas.addEventListener("pointerdown", wheel._handler_onPointerDown);
    canvas.addEventListener("pointermove", wheel._handler_onPointerMoveRefreshCursor);
  } else {
    canvas.addEventListener("touchstart", wheel._handler_onTouchStart);
    canvas.addEventListener("mousedown", wheel._handler_onMouseDown);
    canvas.addEventListener("mousemove", wheel._handler_onMouseMoveRefreshCursor);
  }
}

// node_modules/spin-wheel/src/item.js
var Item = class {
  constructor(wheel, props = {}) {
    if (!isObject(wheel)) throw new Error("wheel must be an instance of Wheel");
    if (!isObject(props) && props !== null) throw new Error("props must be an Object or null");
    this._wheel = wheel;
    for (const i3 of Object.keys(Defaults.item)) {
      this["_" + i3] = Defaults.item[i3];
    }
    if (props) {
      this.init(props);
    } else {
      this.init(Defaults.item);
    }
  }
  /**
   * Initialise all properties.
   */
  init(props = {}) {
    this.backgroundColor = props.backgroundColor;
    this.image = props.image;
    this.imageOpacity = props.imageOpacity;
    this.imageRadius = props.imageRadius;
    this.imageRotation = props.imageRotation;
    this.imageScale = props.imageScale;
    this.label = props.label;
    this.labelColor = props.labelColor;
    this.value = props.value;
    this.weight = props.weight;
  }
  /**
   * The [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) of the item's background.
   * When `null`, the color will fall back to `Wheel.itemBackgroundColors`.
   * Example: `'#fff'`.
   */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(val) {
    if (typeof val === "string") {
      this._backgroundColor = val;
    } else {
      this._backgroundColor = Defaults.item.backgroundColor;
    }
    this._wheel.refresh();
  }
  /**
   * The image (HTMLImageElement) to draw on the item.
   * Any part of the image that extends outside the item will be clipped.
   * The image will be drawn over the top of `Item.backgroundColor`.
   */
  get image() {
    return this._image;
  }
  set image(val) {
    if (val instanceof HTMLImageElement) {
      this._image = val;
    } else {
      this._image = Defaults.item.image;
    }
    this._wheel.refresh();
  }
  /**
   * The opacity (as a percent) of `Item.image`.
   * Useful if you want to fade the image to make the item's label stand out.
   */
  get imageOpacity() {
    return this._imageOpacity;
  }
  set imageOpacity(val) {
    if (typeof val === "number") {
      this._imageOpacity = val;
    } else {
      this._imageOpacity = Defaults.item.imageOpacity;
    }
    this._wheel.refresh();
  }
  /**
   * The point along the wheel's radius (as a percent, starting from the center) to draw the center of `Item.image`.
   */
  get imageRadius() {
    return this._imageRadius;
  }
  set imageRadius(val) {
    if (typeof val === "number") {
      this._imageRadius = val;
    } else {
      this._imageRadius = Defaults.item.imageRadius;
    }
    this._wheel.refresh();
  }
  /**
   * The rotation (angle in degrees) of `Item.image`.
   */
  get imageRotation() {
    return this._imageRotation;
  }
  set imageRotation(val) {
    if (typeof val === "number") {
      this._imageRotation = val;
    } else {
      this._imageRotation = Defaults.item.imageRotation;
    }
    this._wheel.refresh();
  }
  /**
   * The scale (size as a percent) of `Item.image`.
   */
  get imageScale() {
    return this._imageScale;
  }
  set imageScale(val) {
    if (typeof val === "number") {
      this._imageScale = val;
    } else {
      this._imageScale = Defaults.item.imageScale;
    }
    this._wheel.refresh();
  }
  /**
   * The text that will be drawn on the item.
   */
  get label() {
    return this._label;
  }
  set label(val) {
    if (typeof val === "string") {
      this._label = val;
    } else {
      this._label = Defaults.item.label;
    }
    this._wheel.refresh();
  }
  /**
   * The [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) of the item's label.
   * When `null`, the color will fall back to `Wheel.itemLabelColors`.
   * Example: `'#000'`.
   */
  get labelColor() {
    return this._labelColor;
  }
  set labelColor(val) {
    if (typeof val === "string") {
      this._labelColor = val;
    } else {
      this._labelColor = Defaults.item.labelColor;
    }
    this._wheel.refresh();
  }
  /**
   * Some value that has meaning to your application.
   * For example, a reference to the object representing the item on the wheel, or a database id.
   */
  get value() {
    return this._value;
  }
  set value(val) {
    if (val !== void 0) {
      this._value = val;
    } else {
      this._value = Defaults.item.value;
    }
  }
  /**
   * The proportional size of the item relative to other items on the wheel.
   * For example, if you have 2 items where `item[0]` has a weight of `1` and `item[1]` has a weight of `2`,
   * then `item[0]` will take up 1/3 of the space on the wheel.
   */
  get weight() {
    return this._weight;
  }
  set weight(val) {
    if (typeof val === "number") {
      this._weight = val;
    } else {
      this._weight = Defaults.item.weight;
    }
  }
  /**
   * Get the 0-based index of this item.
   */
  getIndex() {
    const index4 = this._wheel.items.findIndex((i3) => i3 === this);
    if (index4 === -1) throw new Error("Item not found in parent Wheel");
    return index4;
  }
  /**
   * Get the angle (in degrees) that this item ends at (exclusive), ignoring the current `rotation` of the wheel.
   */
  getCenterAngle() {
    const angle = this._wheel.getItemAngles()[this.getIndex()];
    return angle.start + (angle.end - angle.start) / 2;
  }
  /**
   * Get the angle (in degrees) that this item starts at (inclusive), ignoring the current `rotation` of the wheel.
   */
  getStartAngle() {
    return this._wheel.getItemAngles()[this.getIndex()].start;
  }
  /**
   * Get the angle (in degrees) that this item ends at (inclusive), ignoring the current `rotation` of the wheel.
   */
  getEndAngle() {
    return this._wheel.getItemAngles()[this.getIndex()].end;
  }
  /**
   * Return a random angle (in degrees) between this item's start angle (inclusive) and end angle (inclusive).
   */
  getRandomAngle() {
    return getRandomFloat(this.getStartAngle(), this.getEndAngle());
  }
};

// node_modules/spin-wheel/src/wheel.js
var Wheel = class {
  /**
   * Create the wheel inside a container Element and initialise it with props.
   * `container` must be an Element.
   * `props` must be an Object or null.
   */
  constructor(container, props = {}) {
    if (!(container instanceof Element)) throw new Error("container must be an instance of Element");
    if (!isObject(props) && props !== null) throw new Error("props must be an Object or null");
    this._frameRequestId = null;
    this._rotationSpeed = 0;
    this._rotationDirection = 1;
    this._spinToTimeEnd = null;
    this._lastSpinFrameTime = null;
    this._isCursorOverWheel = false;
    this.add(container);
    for (const i3 of Object.keys(Defaults.wheel)) {
      this["_" + i3] = Defaults.wheel[i3];
    }
    if (props) {
      this.init(props);
    } else {
      this.init(Defaults.wheel);
    }
  }
  /**
   * Initialise all properties.
   */
  init(props = {}) {
    this._isInitialising = true;
    this.borderColor = props.borderColor;
    this.borderWidth = props.borderWidth;
    this.debug = props.debug;
    this.image = props.image;
    this.isInteractive = props.isInteractive;
    this.itemBackgroundColors = props.itemBackgroundColors;
    this.itemLabelAlign = props.itemLabelAlign;
    this.itemLabelBaselineOffset = props.itemLabelBaselineOffset;
    this.itemLabelColors = props.itemLabelColors;
    this.itemLabelFont = props.itemLabelFont;
    this.itemLabelFontSizeMax = props.itemLabelFontSizeMax;
    this.itemLabelRadius = props.itemLabelRadius;
    this.itemLabelRadiusMax = props.itemLabelRadiusMax;
    this.itemLabelRotation = props.itemLabelRotation;
    this.itemLabelStrokeColor = props.itemLabelStrokeColor;
    this.itemLabelStrokeWidth = props.itemLabelStrokeWidth;
    this.items = props.items;
    this.lineColor = props.lineColor;
    this.lineWidth = props.lineWidth;
    this.pixelRatio = props.pixelRatio;
    this.rotationSpeedMax = props.rotationSpeedMax;
    this.radius = props.radius;
    this.rotation = props.rotation;
    this.rotationResistance = props.rotationResistance;
    this.offset = props.offset;
    this.onCurrentIndexChange = props.onCurrentIndexChange;
    this.onRest = props.onRest;
    this.onSpin = props.onSpin;
    this.overlayImage = props.overlayImage;
    this.pointerAngle = props.pointerAngle;
  }
  /**
   * Add the wheel to the DOM and register event handlers.
   */
  add(container) {
    this._canvasContainer = container;
    this.canvas = document.createElement("canvas");
    this.canvas.style.display = "block";
    this._context = this.canvas.getContext("2d");
    this._canvasContainer.append(this.canvas);
    register(this);
    if (this._isInitialising === false) this.resize();
  }
  /**
   * Remove the wheel from the DOM and unregister event handlers.
   */
  remove() {
    if (this.canvas === null) return;
    if (this._frameRequestId !== null) window.cancelAnimationFrame(this._frameRequestId);
    unregister(this);
    this._canvasContainer.removeChild(this.canvas);
    this._canvasContainer = null;
    this.canvas = null;
    this._context = null;
  }
  /**
   * Resize the wheel to fit inside it's container.
   * Call this after changing any property of the wheel that relates to it's size or position.
   */
  resize() {
    if (this.canvas === null) return;
    this.canvas.style.width = this._canvasContainer.clientWidth + "px";
    this.canvas.style.height = this._canvasContainer.clientHeight + "px";
    const [w4, h3] = [
      this._canvasContainer.clientWidth * this.getActualPixelRatio(),
      this._canvasContainer.clientHeight * this.getActualPixelRatio()
    ];
    this.canvas.width = w4;
    this.canvas.height = h3;
    const min = Math.min(w4, h3);
    const wheelSize = {
      w: min - min * this._offset.x,
      h: min - min * this._offset.y
    };
    const scale = Math.min(w4 / wheelSize.w, h3 / wheelSize.h);
    this._size = Math.max(wheelSize.w * scale, wheelSize.h * scale);
    this._center = {
      x: w4 / 2 + w4 * this._offset.x,
      y: h3 / 2 + h3 * this._offset.y
    };
    this._actualRadius = this._size / 2 * this.radius;
    this._itemLabelFontSize = this.itemLabelFontSizeMax * (this._size / baseCanvasSize);
    this._labelMaxWidth = this._actualRadius * (this.itemLabelRadius - this.itemLabelRadiusMax);
    if (this.itemLabelAlign === "center") {
      this._labelMaxWidth *= 2;
    }
    for (const item of this._items) {
      this._itemLabelFontSize = Math.min(this._itemLabelFontSize, getFontSizeToFit(item.label, this.itemLabelFont, this._labelMaxWidth, this._context));
    }
    this.refresh();
  }
  /**
   * Main animation loop.
   */
  draw(now = 0) {
    this._frameRequestId = null;
    if (this._context === null || this.canvas === null) return;
    const ctx = this._context;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.animateRotation(now);
    const angles = this.getItemAngles(this._rotation);
    const actualBorderWidth = this.getScaledNumber(this._borderWidth);
    ctx.textBaseline = "middle";
    ctx.textAlign = this.itemLabelAlign;
    ctx.font = this._itemLabelFontSize + "px " + this.itemLabelFont;
    for (const [i3, a3] of angles.entries()) {
      const item = this._items[i3];
      const path = new Path2D();
      path.moveTo(this._center.x, this._center.y);
      path.arc(
        this._center.x,
        this._center.y,
        this._actualRadius - actualBorderWidth / 2,
        degRad(a3.start + arcAdjust),
        degRad(a3.end + arcAdjust)
      );
      item.path = path;
    }
    this.drawItemBackgrounds(ctx, angles);
    this.drawItemImages(ctx, angles);
    this.drawItemLines(ctx, angles);
    this.drawItemLabels(ctx, angles);
    this.drawBorder(ctx);
    this.drawImage(ctx, this._image, false);
    this.drawImage(ctx, this._overlayImage, true);
    this.drawDebugPointerLine(ctx);
    this._isInitialising = false;
  }
  drawItemBackgrounds(ctx, angles = []) {
    for (const [i3, a3] of angles.entries()) {
      const item = this._items[i3];
      ctx.fillStyle = item.backgroundColor ?? // Fall back to a value from the repeating set:
      this._itemBackgroundColors[i3 % this._itemBackgroundColors.length];
      ctx.fill(item.path);
    }
  }
  drawItemImages(ctx, angles = []) {
    for (const [i3, a3] of angles.entries()) {
      const item = this._items[i3];
      if (item.image === null) continue;
      ctx.save();
      ctx.clip(item.path);
      const angle = a3.start + (a3.end - a3.start) / 2;
      ctx.translate(
        this._center.x + Math.cos(degRad(angle + arcAdjust)) * (this._actualRadius * item.imageRadius),
        this._center.y + Math.sin(degRad(angle + arcAdjust)) * (this._actualRadius * item.imageRadius)
      );
      ctx.rotate(degRad(angle + item.imageRotation));
      ctx.globalAlpha = item.imageOpacity;
      const width = this._size / 500 * item.image.width * item.imageScale;
      const height = this._size / 500 * item.image.height * item.imageScale;
      const widthHalf = -width / 2;
      const heightHalf = -height / 2;
      ctx.drawImage(
        item.image,
        widthHalf,
        heightHalf,
        width,
        height
      );
      ctx.restore();
    }
  }
  drawImage(ctx, image, isOverlay = false) {
    if (image === null) return;
    ctx.translate(
      this._center.x,
      this._center.y
    );
    if (!isOverlay) ctx.rotate(degRad(this._rotation));
    const size = isOverlay ? this._size : this._size * this.radius;
    const sizeHalf = -(size / 2);
    ctx.drawImage(
      image,
      sizeHalf,
      sizeHalf,
      size,
      size
    );
    ctx.resetTransform();
  }
  drawDebugPointerLine(ctx) {
    if (!this.debug) return;
    ctx.translate(
      this._center.x,
      this._center.y
    );
    ctx.rotate(degRad(this._pointerAngle + arcAdjust));
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this._actualRadius * 2, 0);
    ctx.strokeStyle = Debugging.pointerLineColor;
    ctx.lineWidth = this.getScaledNumber(2);
    ctx.stroke();
    ctx.resetTransform();
  }
  drawBorder(ctx) {
    if (this._borderWidth <= 0) return;
    const actualBorderWidth = this.getScaledNumber(this._borderWidth);
    const actualBorderColor = this._borderColor || "transparent";
    ctx.beginPath();
    ctx.strokeStyle = actualBorderColor;
    ctx.lineWidth = actualBorderWidth;
    ctx.arc(this._center.x, this._center.y, this._actualRadius - actualBorderWidth / 2, 0, 2 * Math.PI);
    ctx.stroke();
    if (this.debug) {
      const actualDebugLineWidth = this.getScaledNumber(1);
      ctx.beginPath();
      ctx.strokeStyle = ctx.strokeStyle = Debugging.labelRadiusColor;
      ctx.lineWidth = actualDebugLineWidth;
      ctx.arc(this._center.x, this._center.y, this._actualRadius * this.itemLabelRadius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.strokeStyle = ctx.strokeStyle = Debugging.labelRadiusColor;
      ctx.lineWidth = actualDebugLineWidth;
      ctx.arc(this._center.x, this._center.y, this._actualRadius * this.itemLabelRadiusMax, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }
  drawItemLines(ctx, angles = []) {
    if (this._lineWidth <= 0) return;
    const actualLineWidth = this.getScaledNumber(this._lineWidth);
    const actualBorderWidth = this.getScaledNumber(this._borderWidth);
    ctx.translate(
      this._center.x,
      this._center.y
    );
    for (const angle of angles) {
      ctx.rotate(degRad(angle.start + arcAdjust));
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(this._actualRadius - actualBorderWidth, 0);
      ctx.strokeStyle = this.lineColor;
      ctx.lineWidth = actualLineWidth;
      ctx.stroke();
      ctx.rotate(-degRad(angle.start + arcAdjust));
    }
    ctx.resetTransform();
  }
  drawItemLabels(ctx, angles = []) {
    const actualItemLabelBaselineOffset = this._itemLabelFontSize * -this.itemLabelBaselineOffset;
    const actualDebugLineWidth = this.getScaledNumber(1);
    const actualLabelStrokeWidth = this.getScaledNumber(this._itemLabelStrokeWidth * 2);
    for (const [i3, a3] of angles.entries()) {
      const item = this._items[i3];
      const actualLabelColor = item.labelColor || (this._itemLabelColors[i3 % this._itemLabelColors.length] || "transparent");
      if (item.label.trim() === "" || actualLabelColor === "transparent") continue;
      ctx.save();
      ctx.clip(item.path);
      const angle = a3.start + (a3.end - a3.start) / 2;
      ctx.translate(
        this._center.x + Math.cos(degRad(angle + arcAdjust)) * (this._actualRadius * this.itemLabelRadius),
        this._center.y + Math.sin(degRad(angle + arcAdjust)) * (this._actualRadius * this.itemLabelRadius)
      );
      ctx.rotate(degRad(angle + arcAdjust));
      ctx.rotate(degRad(this.itemLabelRotation));
      if (this.debug) {
        ctx.save();
        let alignAdjust = 0;
        if (this.itemLabelAlign === "left") {
          alignAdjust = this._labelMaxWidth;
        } else if (this.itemLabelAlign === "center") {
          alignAdjust = this._labelMaxWidth / 2;
        }
        ctx.beginPath();
        ctx.moveTo(alignAdjust, 0);
        ctx.lineTo(-this._labelMaxWidth + alignAdjust, 0);
        ctx.strokeStyle = Debugging.labelBoundingBoxColor;
        ctx.lineWidth = actualDebugLineWidth;
        ctx.stroke();
        ctx.strokeRect(alignAdjust, -this._itemLabelFontSize / 2, -this._labelMaxWidth, this._itemLabelFontSize);
        ctx.restore();
      }
      if (this._itemLabelStrokeWidth > 0) {
        ctx.lineWidth = actualLabelStrokeWidth;
        ctx.strokeStyle = this._itemLabelStrokeColor;
        ctx.lineJoin = "round";
        ctx.strokeText(item.label, 0, actualItemLabelBaselineOffset);
      }
      ctx.fillStyle = actualLabelColor;
      ctx.fillText(item.label, 0, actualItemLabelBaselineOffset);
      if (this.debug) {
        const circleDiameter = this.getScaledNumber(2);
        ctx.beginPath();
        ctx.arc(0, 0, circleDiameter, 0, 2 * Math.PI);
        ctx.fillStyle = Debugging.labelRadiusColor;
        ctx.fill();
      }
      ctx.restore();
    }
  }
  drawDebugDragPoints(ctx) {
    if (!this.debug || !this._dragEvents?.length) return;
    const dragEventsReversed = [...this._dragEvents].reverse();
    const lineWidth = this.getScaledNumber(0.5);
    const circleDiameter = this.getScaledNumber(4);
    for (const [i3, event] of dragEventsReversed.entries()) {
      const lightnessPercent = i3 / this._dragEvents.length * 100;
      ctx.beginPath();
      ctx.arc(event.x, event.y, circleDiameter, 0, 2 * Math.PI);
      ctx.fillStyle = `hsl(${Debugging.dragPointHue},100%,${lightnessPercent}%)`;
      ctx.strokeStyle = "#000";
      ctx.lineWidth = lineWidth;
      ctx.fill();
      ctx.stroke();
    }
  }
  animateRotation(now = 0) {
    if (this._spinToTimeEnd !== null) {
      if (now >= this._spinToTimeEnd) {
        this.rotation = this._spinToEndRotation;
        this._spinToTimeEnd = null;
        this.raiseEvent_onRest();
        return;
      }
      const duration2 = this._spinToTimeEnd - this._spinToTimeStart;
      let delta = (now - this._spinToTimeStart) / duration2;
      delta = delta < 0 ? 0 : delta;
      const distance = this._spinToEndRotation - this._spinToStartRotation;
      this.rotation = this._spinToStartRotation + distance * this._spinToEasingFunction(delta);
      this.refresh();
      return;
    }
    if (this._lastSpinFrameTime !== null) {
      const delta = now - this._lastSpinFrameTime;
      if (delta > 0) {
        this.rotation += delta / 1e3 * this._rotationSpeed % 360;
        this._rotationSpeed = this.getRotationSpeedPlusDrag(delta);
        if (this._rotationSpeed === 0) {
          this.raiseEvent_onRest();
          this._lastSpinFrameTime = null;
        } else {
          this._lastSpinFrameTime = now;
        }
      }
      this.refresh();
      return;
    }
  }
  getRotationSpeedPlusDrag(delta = 0) {
    const newRotationSpeed = this._rotationSpeed + this.rotationResistance * (delta / 1e3) * this._rotationDirection;
    if (this._rotationDirection === 1 && newRotationSpeed < 0 || this._rotationDirection === -1 && newRotationSpeed >= 0) {
      return 0;
    }
    return newRotationSpeed;
  }
  /**
   * Spin the wheel by setting `rotationSpeed`.
   * The wheel will immediately start spinning, and slow down over time depending on the value of `rotationResistance`.
   * A positive number will spin clockwise, a negative number will spin anti-clockwise.
   */
  spin(rotationSpeed = 0) {
    if (!isNumber(rotationSpeed)) throw new Error("rotationSpeed must be a number");
    this._dragEvents = [];
    this.beginSpin(rotationSpeed, "spin");
  }
  /**
   * Spin the wheel to a particular rotation.
   * The animation will occur over the provided `duration` (milliseconds).
   * The animation can be adjusted by providing an optional `easingFunction` which accepts a single parameter n, where n is between 0 and 1 inclusive.
   * If no easing function is provided, the default easeSinOut will be used.
   * For example easing functions see [easing-utils](https://github.com/AndrewRayCode/easing-utils).
   */
  spinTo(rotation = 0, duration2 = 0, easingFunction = null) {
    if (!isNumber(rotation)) throw new Error("Error: rotation must be a number");
    if (!isNumber(duration2)) throw new Error("Error: duration must be a number");
    this.stop();
    this._dragEvents = [];
    this.animate(rotation, duration2, easingFunction);
    this.raiseEvent_onSpin({ method: "spinto", targetRotation: rotation, duration: duration2 });
  }
  /**
   * Spin the wheel to a particular item.
   * The animation will occur over the provided `duration` (milliseconds).
   * If `spinToCenter` is true, the wheel will spin to the center of the item, otherwise the wheel will spin to a random angle inside the item.
   * `numberOfRevolutions` controls how many times the wheel will rotate a full 360 degrees before resting on the item.
   * `direction` can be `1` (clockwise) or `-1` (anti-clockwise).
   * The animation can be adjusted by providing an optional `easingFunction` which accepts a single parameter n, where n is between 0 and 1 inclusive.
   * If no easing function is provided, the default easeSinOut will be used.
   * For example easing functions see [easing-utils](https://github.com/AndrewRayCode/easing-utils).
   */
  spinToItem(itemIndex = 0, duration2 = 0, spinToCenter = true, numberOfRevolutions = 1, direction = 1, easingFunction = null) {
    this.stop();
    this._dragEvents = [];
    const itemAngle = spinToCenter ? this.items[itemIndex].getCenterAngle() : this.items[itemIndex].getRandomAngle();
    let newRotation = calcWheelRotationForTargetAngle(this.rotation, itemAngle - this._pointerAngle, direction);
    newRotation += numberOfRevolutions * 360 * direction;
    this.animate(newRotation, duration2, easingFunction);
    this.raiseEvent_onSpin({ method: "spintoitem", targetItemIndex: itemIndex, targetRotation: newRotation, duration: duration2 });
  }
  animate(newRotation, duration2, easingFunction) {
    this._spinToStartRotation = this.rotation;
    this._spinToEndRotation = newRotation;
    this._spinToTimeStart = performance.now();
    this._spinToTimeEnd = this._spinToTimeStart + duration2;
    this._spinToEasingFunction = easingFunction || easeSinOut;
    this.refresh();
  }
  /**
   * Immediately stop the wheel from spinning, regardless of which method was used to spin it.
   */
  stop() {
    this._spinToTimeEnd = null;
    this._rotationSpeed = 0;
    this._lastSpinFrameTime = null;
  }
  /**
   * Return n scaled to the size of the canvas.
   */
  getScaledNumber(n2) {
    return n2 / baseCanvasSize * this._size;
  }
  getActualPixelRatio() {
    return this._pixelRatio !== 0 ? this._pixelRatio : window.devicePixelRatio;
  }
  /**
   * Return true if the given point is inside the wheel.
   */
  wheelHitTest(point = { x: 0, y: 0 }) {
    if (this.canvas === null) return false;
    const p3 = translateXYToElement(point, this.canvas, this.getActualPixelRatio());
    return isPointInCircle(p3, this._center.x, this._center.y, this._actualRadius);
  }
  /**
   * Refresh the cursor state.
   * Call this after the pointer moves.
   */
  refreshCursor() {
    if (this.canvas === null) return;
    if (this.isInteractive) {
      if (this.isDragging) {
        this.canvas.style.cursor = "grabbing";
        return;
      }
      if (this._isCursorOverWheel) {
        this.canvas.style.cursor = "grab";
        return;
      }
    }
    this.canvas.style.cursor = "";
  }
  /**
   * Get the angle (in degrees) of the given point from the center of the wheel.
   * 0 is north.
   */
  getAngleFromCenter(point = { x: 0, y: 0 }) {
    return (getAngle(this._center.x, this._center.y, point.x, point.y) + 90) % 360;
  }
  /**
   * Get the index of the item that the Pointer is pointing at.
   * An item is considered "current" if `pointerAngle` is between it's start angle (inclusive)
   * and it's end angle (exclusive).
   */
  getCurrentIndex() {
    return this._currentIndex;
  }
  /**
   * Calculate and set `currentIndex`
   */
  refreshCurrentIndex(angles = []) {
    if (this._items.length === 0) this._currentIndex = -1;
    for (const [i3, a3] of angles.entries()) {
      if (!isAngleBetween(this._pointerAngle, a3.start % 360, a3.end % 360)) continue;
      if (this._currentIndex === i3) break;
      this._currentIndex = i3;
      if (!this._isInitialising) this.raiseEvent_onCurrentIndexChange();
      break;
    }
  }
  /**
   * Return an array of objects containing the start angle (inclusive) and end angle (inclusive) of each item.
   */
  getItemAngles(initialRotation = 0) {
    let weightSum = 0;
    for (const i3 of this.items) {
      weightSum += i3.weight;
    }
    const weightedItemAngle = 360 / weightSum;
    let itemAngle;
    let lastItemAngle = initialRotation;
    const angles = [];
    for (const item of this._items) {
      itemAngle = item.weight * weightedItemAngle;
      angles.push({
        start: lastItemAngle,
        end: lastItemAngle + itemAngle
      });
      lastItemAngle += itemAngle;
    }
    if (this._items.length > 1) {
      angles[angles.length - 1].end = angles[0].start + 360;
    }
    return angles;
  }
  /**
   * Schedule a redraw of the wheel on the canvas.
   * Call this after changing any property of the wheel that relates to it's appearance.
   */
  refresh() {
    if (this._frameRequestId === null) {
      this._frameRequestId = window.requestAnimationFrame((t3) => this.draw(t3));
    }
  }
  limitSpeed(speed = 0, max = 0) {
    const newSpeed = Math.min(speed, max);
    return Math.max(newSpeed, -max);
  }
  beginSpin(speed = 0, spinMethod = "") {
    this.stop();
    this._rotationSpeed = this.limitSpeed(speed, this._rotationSpeedMax);
    this._lastSpinFrameTime = performance.now();
    this._rotationDirection = this._rotationSpeed >= 0 ? 1 : -1;
    if (this._rotationSpeed !== 0) {
      this.raiseEvent_onSpin({
        method: spinMethod,
        rotationSpeed: this._rotationSpeed,
        rotationResistance: this._rotationResistance
      });
    }
    this.refresh();
  }
  refreshAriaLabel() {
    if (this.canvas === null) return;
    this.canvas.setAttribute("role", "img");
    const wheelDescription = this.items.length >= 2 ? ` The wheel has ${this.items.length} slices.` : "";
    this.canvas.setAttribute("aria-label", "An image of a spinning prize wheel." + wheelDescription);
  }
  /**
   * The [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) for the line around the circumference of the wheel.
   */
  get borderColor() {
    return this._borderColor;
  }
  set borderColor(val) {
    this._borderColor = setProp({
      val,
      isValid: typeof val === "string",
      errorMessage: "Wheel.borderColor must be a string",
      defaultValue: Defaults.wheel.borderColor
    });
    this.refresh();
  }
  /**
   * The width (in pixels) of the line around the circumference of the wheel.
   */
  get borderWidth() {
    return this._borderWidth;
  }
  set borderWidth(val) {
    this._borderWidth = setProp({
      val,
      isValid: isNumber(val),
      errorMessage: "Wheel.borderWidth must be a number",
      defaultValue: Defaults.wheel.borderWidth
    });
    this.refresh();
  }
  /**
   * If debugging info will be shown.
   * This is helpful when positioning labels.
   */
  get debug() {
    return this._debug;
  }
  set debug(val) {
    this._debug = setProp({
      val,
      isValid: typeof val === "boolean",
      errorMessage: "Wheel.debug must be a boolean",
      defaultValue: Defaults.wheel.debug
    });
    this.refresh();
  }
  /**
   * The image (HTMLImageElement) to draw on the wheel and rotate with the wheel.
   * It will be centered and scaled to fit `Wheel.radius`.
   */
  get image() {
    return this._image;
  }
  set image(val) {
    this._image = setProp({
      val,
      isValid: val instanceof HTMLImageElement || val === null,
      errorMessage: "Wheel.image must be a HTMLImageElement or null",
      defaultValue: Defaults.wheel.image
    });
    this.refresh();
  }
  /**
   * If the user will be allowed to spin the wheel using click-drag/touch-flick.
   * User interaction will only be detected within the bounds of `Wheel.radius`.
   */
  get isInteractive() {
    return this._isInteractive;
  }
  set isInteractive(val) {
    this._isInteractive = setProp({
      val,
      isValid: typeof val === "boolean",
      errorMessage: "Wheel.isInteractive must be a boolean",
      defaultValue: Defaults.wheel.isInteractive
    });
    this.refreshCursor();
  }
  /**
   * The [CSS colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) to use as a repeating pattern for the background colors of all items.
   * Overridden by `Item.backgroundColor`.
   * Example: `['#fff','#000']`.
   */
  get itemBackgroundColors() {
    return this._itemBackgroundColors;
  }
  set itemBackgroundColors(val) {
    this._itemBackgroundColors = setProp({
      val,
      isValid: Array.isArray(val),
      errorMessage: "Wheel.itemBackgroundColors must be an array",
      defaultValue: Defaults.wheel.itemBackgroundColors
    });
    this.refresh();
  }
  /**
   * The alignment of all item labels.
   * Possible values: `'left'`,`'center'`,`'right'`.
   */
  get itemLabelAlign() {
    return this._itemLabelAlign;
  }
  set itemLabelAlign(val) {
    this._itemLabelAlign = setProp({
      val,
      isValid: typeof val === "string" && (val === AlignText.left || val === AlignText.right || val === AlignText.center),
      errorMessage: "Wheel.itemLabelAlign must be one of Constants.AlignText",
      defaultValue: Defaults.wheel.itemLabelAlign
    });
    this.resize();
  }
  /**
   * The offset of the baseline (or line height) of all item labels (as a percent of the label's height).
   */
  get itemLabelBaselineOffset() {
    return this._itemLabelBaselineOffset;
  }
  set itemLabelBaselineOffset(val) {
    this._itemLabelBaselineOffset = setProp({
      val,
      isValid: isNumber(val),
      errorMessage: "Wheel.itemLabelBaselineOffset must be a number",
      defaultValue: Defaults.wheel.itemLabelBaselineOffset
    });
    this.resize();
  }
  /**
   * The [CSS colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) to use as a repeating pattern for the colors of all item labels.
   * Overridden by `Item.labelColor`.
   * Example: `['#fff','#000']`.
   */
  get itemLabelColors() {
    return this._itemLabelColors;
  }
  set itemLabelColors(val) {
    this._itemLabelColors = setProp({
      val,
      isValid: Array.isArray(val),
      errorMessage: "Wheel.itemLabelColors must be an array",
      defaultValue: Defaults.wheel.itemLabelColors
    });
    this.refresh();
  }
  /**
   * The [font familiy](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) to use for all item labels.
   * Example: `'Helvetica, sans-serif'`.
   */
  get itemLabelFont() {
    return this._itemLabelFont;
  }
  set itemLabelFont(val) {
    this._itemLabelFont = setProp({
      val,
      isValid: typeof val === "string",
      errorMessage: "Wheel.itemLabelFont must be a string",
      defaultValue: Defaults.wheel.itemLabelFont
    });
    this.resize();
  }
  /**
   * The maximum font size (in pixels) for all item labels.
   */
  get itemLabelFontSizeMax() {
    return this._itemLabelFontSizeMax;
  }
  set itemLabelFontSizeMax(val) {
    this._itemLabelFontSizeMax = setProp({
      val,
      isValid: isNumber(val),
      errorMessage: "Wheel.itemLabelFontSizeMax must be a number",
      defaultValue: Defaults.wheel.itemLabelFontSizeMax
    });
    this.resize();
  }
  /**
   * The point along the wheel's radius (as a percent, starting from the center)
   * to start drawing all item labels.
   */
  get itemLabelRadius() {
    return this._itemLabelRadius;
  }
  set itemLabelRadius(val) {
    this._itemLabelRadius = setProp({
      val,
      isValid: isNumber(val),
      errorMessage: "Wheel.itemLabelRadius must be a number",
      defaultValue: Defaults.wheel.itemLabelRadius
    });
    this.resize();
  }
  /**
   * The point along the wheel's radius (as a percent, starting from the center)
   * to limit the maximum width of all item labels.
   */
  get itemLabelRadiusMax() {
    return this._itemLabelRadiusMax;
  }
  set itemLabelRadiusMax(val) {
    this._itemLabelRadiusMax = setProp({
      val,
      isValid: isNumber(val),
      errorMessage: "Wheel.itemLabelRadiusMax must be a number",
      defaultValue: Defaults.wheel.itemLabelRadiusMax
    });
    this.resize();
  }
  /**
   * The rotation of all item labels.
   * Use this in combination with `itemLabelAlign` to flip the labels `180°`.
   */
  get itemLabelRotation() {
    return this._itemLabelRotation;
  }
  set itemLabelRotation(val) {
    this._itemLabelRotation = setProp({
      val,
      isValid: isNumber(val),
      errorMessage: "Wheel.itemLabelRotation must be a number",
      defaultValue: Defaults.wheel.itemLabelRotation
    });
    this.refresh();
  }
  /**
   * The [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) of the stroke applied to the outside of the label text.
   */
  get itemLabelStrokeColor() {
    return this._itemLabelStrokeColor;
  }
  set itemLabelStrokeColor(val) {
    this._itemLabelStrokeColor = setProp({
      val,
      isValid: typeof val === "string",
      errorMessage: "Wheel.itemLabelStrokeColor must be a string",
      defaultValue: Defaults.wheel.itemLabelStrokeColor
    });
    this.refresh();
  }
  /**
   * The width of the stroke applied to the outside of the label text.
   */
  get itemLabelStrokeWidth() {
    return this._itemLabelStrokeWidth;
  }
  set itemLabelStrokeWidth(val) {
    this._itemLabelStrokeWidth = setProp({
      val,
      isValid: isNumber(val),
      errorMessage: "Wheel.itemLabelStrokeWidth must be a number",
      defaultValue: Defaults.wheel.itemLabelStrokeWidth
    });
    this.refresh();
  }
  /**
   * The items (or slices, wedges, segments) shown on the wheel.
   * Setting this property will re-create all of the items on the wheel based on the objects provided.
   * Accessing this property lets you change individual items. For example you could change the background color of an item.
   */
  get items() {
    return this._items;
  }
  set items(val) {
    this._items = setProp({
      val,
      isValid: Array.isArray(val),
      errorMessage: "Wheel.items must be an array of Items",
      defaultValue: Defaults.wheel.items,
      action: () => {
        const v3 = [];
        for (const item of val) {
          v3.push(new Item(this, item));
        }
        return v3;
      }
    });
    this.refreshAriaLabel();
    this.refreshCurrentIndex(this.getItemAngles(this._rotation));
    this.resize();
  }
  /**
   * The [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) of the lines between the items.
   */
  get lineColor() {
    return this._lineColor;
  }
  set lineColor(val) {
    this._lineColor = setProp({
      val,
      isValid: typeof val === "string",
      errorMessage: "Wheel.lineColor must be a string",
      defaultValue: Defaults.wheel.lineColor
    });
    this.refresh();
  }
  /**
   * The width (in pixels) of the lines between the items.
   */
  get lineWidth() {
    return this._lineWidth;
  }
  set lineWidth(val) {
    this._lineWidth = setProp({
      val,
      isValid: isNumber(val),
      errorMessage: "Wheel.lineWidth must be a number",
      defaultValue: Defaults.wheel.lineWidth
    });
    this.refresh();
  }
  /**
   * The offset of the wheel from the center of it's container (as a percent of the wheel's diameter).
   */
  get offset() {
    return this._offset;
  }
  set offset(val) {
    this._offset = setProp({
      val,
      isValid: isObject(val),
      errorMessage: "Wheel.offset must be an object",
      defaultValue: Defaults.wheel.offset
    });
    this.resize();
  }
  /**
   * The callback for the `onCurrentIndexChange` event.
   */
  get onCurrentIndexChange() {
    return this._onCurrentIndexChange;
  }
  set onCurrentIndexChange(val) {
    this._onCurrentIndexChange = setProp({
      val,
      isValid: typeof val === "function" || val === null,
      errorMessage: "Wheel.onCurrentIndexChange must be a function or null",
      defaultValue: Defaults.wheel.onCurrentIndexChange
    });
  }
  /**
   * The callback for the `onRest` event.
   */
  get onRest() {
    return this._onRest;
  }
  set onRest(val) {
    this._onRest = setProp({
      val,
      isValid: typeof val === "function" || val === null,
      errorMessage: "Wheel.onRest must be a function or null",
      defaultValue: Defaults.wheel.onRest
    });
  }
  /**
   * The callback for the `onSpin` event.
   */
  get onSpin() {
    return this._onSpin;
  }
  set onSpin(val) {
    this._onSpin = setProp({
      val,
      isValid: typeof val === "function" || val === null,
      errorMessage: "Wheel.onSpin must be a function or null",
      defaultValue: Defaults.wheel.onSpin
    });
  }
  /**
   * The image (HTMLImageElement) to draw over the top of the wheel.
   * It will be centered and scaled to fit the container's smallest dimension.
   * Use this to draw decorations around the wheel, such as a stand or pointer.
   */
  get overlayImage() {
    return this._overlayImage;
  }
  set overlayImage(val) {
    this._overlayImage = setProp({
      val,
      isValid: val instanceof HTMLImageElement || val === null,
      errorMessage: "Wheel.overlayImage must be a HTMLImageElement or null",
      defaultValue: Defaults.wheel.overlayImage
    });
    this.refresh();
  }
  /**
   * The pixel ratio (as a percent) used to draw the wheel.
   * Higher values will produce a sharper image at the cost of performance, but the sharpness depends on the current display device.
   * A value of `0` will use the pixel ratio of the current display device (see [devicePixelRatio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio)).
   */
  get pixelRatio() {
    return this._pixelRatio;
  }
  set pixelRatio(val) {
    this._pixelRatio = setProp({
      val,
      isValid: isNumber(val),
      errorMessage: "Wheel.pixelRatio must be a number",
      defaultValue: Defaults.wheel.pixelRatio
    });
    this._dragEvents = [];
    this.resize();
  }
  /**
   * The angle of the Pointer which will be used to determine the `currentIndex` (or the "winning" item).
   */
  get pointerAngle() {
    return this._pointerAngle;
  }
  set pointerAngle(val) {
    this._pointerAngle = setProp({
      val,
      isValid: isNumber(val) && val >= 0,
      errorMessage: "Wheel.pointerAngle must be a number between 0 and 360",
      defaultValue: Defaults.wheel.pointerAngle,
      action: () => val % 360
    });
    if (this.debug) this.refresh();
  }
  /**
   * The radius of the wheel (as a percent of the container's smallest dimension).
   */
  get radius() {
    return this._radius;
  }
  set radius(val) {
    this._radius = setProp({
      val,
      isValid: isNumber(val),
      errorMessage: "Wheel.radius must be a number",
      defaultValue: Defaults.wheel.radius
    });
    this.resize();
  }
  /**
   * The rotation (angle in degrees) of the wheel.
   * `0` is north.
   * The first item will be drawn clockwise from this point.
   */
  get rotation() {
    return this._rotation;
  }
  set rotation(val) {
    this._rotation = setProp({
      val,
      isValid: isNumber(val),
      errorMessage: "Wheel.rotation must be a number",
      defaultValue: Defaults.wheel.rotation
    });
    this.refreshCurrentIndex(this.getItemAngles(this._rotation));
    this.refresh();
  }
  /**
   * The amount that `rotationSpeed` will be reduced by every second until the wheel stops spinning.
   * Set to `0` to spin the wheel infinitely.
   */
  get rotationResistance() {
    return this._rotationResistance;
  }
  set rotationResistance(val) {
    this._rotationResistance = setProp({
      val,
      isValid: isNumber(val),
      errorMessage: "Wheel.rotationResistance must be a number",
      defaultValue: Defaults.wheel.rotationResistance
    });
  }
  /**
   * [Readonly] How fast (angle in degrees) the wheel is spinning every 1 second.
   * A positive number means the wheel is spinning clockwise, a negative number means anti-clockwise, and `0` means the wheel is not spinning.
   */
  get rotationSpeed() {
    return this._rotationSpeed;
  }
  /**
   * The maximum absolute value for `rotationSpeed`.
   * The wheel will not spin faster than this value in either direction.
   */
  get rotationSpeedMax() {
    return this._rotationSpeedMax;
  }
  set rotationSpeedMax(val) {
    this._rotationSpeedMax = setProp({
      val,
      isValid: isNumber(val) && val >= 0,
      errorMessage: "Wheel.rotationSpeedMax must be a number >= 0",
      defaultValue: Defaults.wheel.rotationSpeedMax
    });
  }
  /**
   * Enter the drag state.
   */
  dragStart(point = { x: 0, y: 0 }) {
    if (this.canvas === null) return;
    const p3 = translateXYToElement(point, this.canvas, this.getActualPixelRatio());
    this.isDragging = true;
    this.stop();
    this._dragEvents = [{
      distance: 0,
      x: p3.x,
      y: p3.y,
      now: performance.now()
    }];
    this.refreshCursor();
  }
  dragMove(point = { x: 0, y: 0 }) {
    if (this.canvas === null) return;
    const p3 = translateXYToElement(point, this.canvas, this.getActualPixelRatio());
    const a3 = this.getAngleFromCenter(p3);
    const lastDragPoint = this._dragEvents[0];
    const lastAngle = this.getAngleFromCenter(lastDragPoint);
    const angleSinceLastMove = diffAngle(lastAngle, a3);
    this._dragEvents.unshift({
      distance: angleSinceLastMove,
      x: p3.x,
      y: p3.y,
      now: performance.now()
    });
    if (this.debug && this._dragEvents.length >= 40) this._dragEvents.pop();
    this.rotation += angleSinceLastMove;
  }
  /**
   * Exit the drag state.
   * Set the rotation speed so the wheel continues to spin in the same direction.
   */
  dragEnd() {
    this.isDragging = false;
    let dragDistance = 0;
    const now = performance.now();
    for (const [i3, event] of this._dragEvents.entries()) {
      if (!this.isDragEventTooOld(now, event)) {
        dragDistance += event.distance;
        continue;
      }
      this._dragEvents.length = i3;
      if (this.debug) this.refresh();
      break;
    }
    this.refreshCursor();
    if (dragDistance === 0) return;
    this.beginSpin(dragDistance * (1e3 / dragCapturePeriod), "interact");
  }
  isDragEventTooOld(now = 0, event = {}) {
    return now - event.now > dragCapturePeriod;
  }
  raiseEvent_onCurrentIndexChange(data2 = {}) {
    this.onCurrentIndexChange?.({
      type: "currentIndexChange",
      currentIndex: this._currentIndex,
      ...data2
    });
  }
  raiseEvent_onRest(data2 = {}) {
    this.onRest?.({
      type: "rest",
      currentIndex: this._currentIndex,
      rotation: this._rotation,
      ...data2
    });
  }
  raiseEvent_onSpin(data2 = {}) {
    this.onSpin?.({
      type: "spin",
      ...data2
    });
  }
};

// src/ladder-game.js
var MAX_PLAYERS = 20;
var MAX_NAME = 20;
var secureRandom = () => crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
function parseLines(text2, max = MAX_PLAYERS) {
  return String(text2 ?? "").split(/\r?\n/).map((s3) => s3.trim()).filter(Boolean).slice(0, max).map((s3) => s3.slice(0, MAX_NAME));
}
function uniqueLabels(names) {
  const seen = /* @__PURE__ */ new Map();
  return names.map((n2) => {
    const c3 = (seen.get(n2) || 0) + 1;
    seen.set(n2, c3);
    return c3 === 1 ? n2 : `${n2} (${c3})`;
  });
}
function pickIndex(count, rng = secureRandom) {
  if (!(count >= 1)) throw new Error("\uCC38\uAC00\uC790\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.");
  return Math.min(count - 1, Math.floor(rng() * count));
}
function buildLadder(columns, rng = secureRandom, rows = Math.min(16, Math.max(8, 2 * columns))) {
  if (!(columns >= 2)) throw new Error("2\uBA85 \uC774\uC0C1 \uC785\uB825\uD574 \uC8FC\uC138\uC694.");
  const rungs = [], has = (row, left) => rungs.some((r3) => r3.row === row && r3.left === left);
  for (let left = 0; left < columns - 1; left++) {
    let row;
    do {
      row = Math.min(rows - 1, Math.floor(rng() * rows));
    } while (has(row, left - 1));
    rungs.push({ row, left });
  }
  for (let row = 0; row < rows; row++) for (let left = 0; left < columns - 1; left++) {
    if (has(row, left) || has(row, left - 1) || has(row, left + 1)) continue;
    if (rng() < 0.35) rungs.push({ row, left });
  }
  rungs.sort((a3, b3) => a3.row - b3.row || a3.left - b3.left);
  return { columns, rows, rungs };
}
function tracePath(ladder, start2) {
  const has = (row, left) => ladder.rungs.some((r3) => r3.row === row && r3.left === left);
  let col = start2;
  const points = [[-1, col]];
  for (let row = 0; row < ladder.rows; row++) {
    const step2 = has(row, col) ? 1 : has(row, col - 1) ? -1 : 0;
    if (!step2) continue;
    points.push([row, col]);
    col += step2;
    points.push([row, col]);
  }
  points.push([ladder.rows, col]);
  return { end: col, points };
}
var ladderResults = (ladder) => Array.from({ length: ladder.columns }, (_3, i3) => tracePath(ladder, i3).end);

// src/picker-view.js
var esc12 = (value) => String(value ?? "").replace(/[&<>"']/g, (c3) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c3]);
var reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
var PALETTE = ["#ff8fa3", "#ffb86b", "#ffe066", "#8ce99a", "#66d9ef", "#74a9ff", "#c3a6ff", "#ffa8a8"];
var palette = (n2) => {
  for (const k3 of [8, 7, 6, 5]) if (n2 <= k3 || n2 % k3 !== 1) return PALETTE.slice(0, k3);
  return PALETTE;
};
var colorOf = (i3, n2) => {
  const p3 = palette(n2);
  return p3[i3 % p3.length];
};
var GAP_X = 84;
var GAP_Y = 40;
var PAD = 42;
var TOP = 18;
var TOKEN_R = 16;
var SPEED = 380;
var SVG = "http://www.w3.org/2000/svg";
var shortLabel = (name) => name.length > 10 ? name.slice(0, 9) + "\u2026" : name;
var defaultOutcomes = (count) => ["\uB2F9\uCCA8", ...Array(Math.max(0, count - 1)).fill("\uD1B5\uACFC")].join("\n");
var MERGED = ["\uB300\uD45C", "\uC6D0\uC7A5"];
function mountPicker({ root, session, person, teams, people, viewState, toast: toast2 }) {
  let disposed = false, wheel = null, spinning = false, epoch = 0;
  const roster = people.filter((p3) => p3.personId && p3.name);
  const teamList = [.../* @__PURE__ */ new Set([...teams, ...roster.flatMap((p3) => p3.teams || [])])];
  const groups = [];
  for (const t3 of teamList) {
    if (MERGED.includes(t3)) {
      if (!groups.some((g4) => g4.teams === MERGED)) groups.push({ id: MERGED.join("\xB7"), title: MERGED.join("\xB7") + "\uD300", teams: MERGED });
    } else groups.push({ id: t3, title: t3 + "\uD300", teams: [t3] });
  }
  const members = (group) => roster.filter((p3) => p3.teams?.some((t3) => group.teams.includes(t3)));
  if (viewState.selected === void 0) {
    const home = session.role === "admin" ? teamList[0] || "" : person?.teams?.[0] || person?.rawTeam || teamList[0] || "";
    const homeGroup = groups.find((g4) => g4.teams.includes(home));
    const mine2 = (homeGroup ? members(homeGroup) : []).map((p3) => p3.personId).slice(0, MAX_PLAYERS);
    Object.assign(viewState, { selected: mine2, custom: [], teamTab: homeGroup ? homeGroup.id : "all", tab: "wheel", outcomes: defaultOutcomes(mine2.length), ladder: null, revealed: [] });
  }
  viewState.custom ??= [];
  if (viewState.teamTab !== "all" && !groups.some((g4) => g4.id === viewState.teamTab)) viewState.teamTab = "all";
  const entries = () => [...roster.map((p3) => ({ id: p3.personId, name: p3.name })), ...viewState.custom];
  const labelsOf = () => {
    const list = entries();
    return new Map(uniqueLabels(list.map((e3) => e3.name)).map((label, i3) => [list[i3].id, label]));
  };
  const selectedIds = () => entries().filter((e3) => viewState.selected.includes(e3.id)).map((e3) => e3.id).slice(0, MAX_PLAYERS);
  const names = () => {
    const labels = labelsOf();
    return selectedIds().map((id) => labels.get(id));
  };
  root.innerHTML = `<section class="panel picker-panel clay-scene"><div class="panel-heading"><div><h2>\uBF51\uAE30</h2><p>\uCC38\uAC00\uD560 \uC9C1\uC6D0\uC744 \uB204\uB974\uACE0 \uB8F0\uB81B\uC744 \uB3CC\uB9AC\uAC70\uB098 \uC0AC\uB2E4\uB9AC\uB97C \uD0C0\uC694. \uACB0\uACFC\uB294 \uC800\uC7A5\uD558\uC9C0 \uC54A\uC544\uC694.</p></div></div><nav class="picker-tabs" aria-label="\uBF51\uAE30 \uBC29\uC2DD">${[["wheel", "\uB8F0\uB81B"], ["ladder", "\uC0AC\uB2E4\uB9AC\uD0C0\uAE30"]].map(([id, title]) => `<button type="button" data-picker-tab="${id}" aria-pressed="${viewState.tab === id}">${title}</button>`).join("")}</nav><div class="picker-body"><div class="picker-people clay-card"><div class="pick-teams" role="group" aria-label="\uD300 \uBCF4\uAE30">${[["all", "\uC804\uCCB4\uBCF4\uAE30"], ...groups.map((g4) => [g4.id, g4.title])].map(([id, title]) => `<button type="button" class="clay-pill" data-pick-team="${esc12(id)}" aria-pressed="${viewState.teamTab === id}">${esc12(title)}</button>`).join("")}</div><div class="pick-groups"></div><form class="pick-add"><input name="custom" maxlength="20" placeholder="\uBA85\uBD80\uC5D0 \uC5C6\uB294 \uC774\uB984 \uC9C1\uC811 \uCD94\uAC00" aria-label="\uC774\uB984 \uC9C1\uC811 \uCD94\uAC00" autocomplete="off"><button type="submit" class="clay-pill small">\uCD94\uAC00</button></form><div class="pick-tools"><p class="picker-count"></p><span><button type="button" class="clay-pill small" data-pick-all>\uBCF4\uC774\uB294 \uC9C1\uC6D0 \uBAA8\uB450</button><button type="button" class="clay-pill small" data-pick-none>\uBAA8\uB450 \uD574\uC81C</button></span></div><label class="picker-outcomes clay-field" ${viewState.tab === "ladder" ? "" : "hidden"}><span>\uACB0\uACFC <small>\uD55C \uC904\uC5D0 \uD558\uB098, \uBAA8\uC790\uB77C\uBA74 \uD1B5\uACFC</small></span><textarea name="outcomes" rows="5" maxlength="2000" spellcheck="false">${esc12(viewState.outcomes)}</textarea></label></div><div class="picker-stage"></div></div></section>`;
  const groupsEl = root.querySelector(".pick-groups"), outcomesEl = root.querySelector("[name=outcomes]"), countEl = root.querySelector(".picker-count"), stage = root.querySelector(".picker-stage");
  const visibleGroups = () => groups.filter((g4) => viewState.teamTab === "all" || g4.id === viewState.teamTab).map((g4) => [g4.title, members(g4)]);
  function drawPeople() {
    const ids = selectedIds(), n2 = ids.length, labels = labelsOf(), color = (id) => ids.includes(id) ? colorOf(ids.indexOf(id), n2) : "#cfd9ec";
    const toggle = (id) => `<button type="button" class="pick-toggle" data-pick-person="${esc12(id)}" aria-pressed="${ids.includes(id)}" style="--c:${color(id)}"><span>${esc12(labels.get(id))}</span></button>`;
    const groups2 = visibleGroups().map(([team2, list]) => `<section class="pick-group"><h3>${esc12(team2)} <small>${list.filter((p3) => ids.includes(p3.personId)).length}/${list.length}\uBA85</small></h3><div class="pick-grid">${list.map((p3) => toggle(p3.personId)).join("")}</div></section>`).join("") || '<p class="empty">\uBA85\uBD80\uC5D0 \uC9C1\uC6D0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p>';
    const custom = viewState.custom.length ? `<section class="pick-group pick-custom"><h3>\uC9C1\uC811 \uCD94\uAC00 <small>${viewState.custom.filter((e3) => ids.includes(e3.id)).length}/${viewState.custom.length}\uBA85</small></h3><div class="pick-grid">${viewState.custom.map((e3) => `<span class="pick-item">${toggle(e3.id)}<button type="button" class="pick-remove" data-pick-remove="${esc12(e3.id)}" aria-label="${esc12(e3.name)} \uC0AD\uC81C">\xD7</button></span>`).join("")}</div></section>` : "";
    groupsEl.innerHTML = groups2 + custom;
    groupsEl.querySelectorAll("[data-pick-person]").forEach((button) => button.addEventListener("click", () => togglePerson(button.dataset.pickPerson)));
    groupsEl.querySelectorAll("[data-pick-remove]").forEach((button) => button.addEventListener("click", () => {
      if (spinning) return;
      const id = button.dataset.pickRemove;
      viewState.custom = viewState.custom.filter((e3) => e3.id !== id);
      setSelected(viewState.selected.filter((x4) => x4 !== id));
    }));
  }
  function addCustom(name) {
    const trimmed = name.trim().slice(0, 20);
    if (!trimmed || spinning) return;
    const id = "custom:" + crypto.randomUUID();
    viewState.custom = [...viewState.custom, { id, name: trimmed }];
    if (viewState.selected.length >= MAX_PLAYERS) {
      toast2(`\uCD94\uAC00\uD588\uC9C0\uB9CC \uCC38\uAC00\uB294 \uCD5C\uB300 ${MAX_PLAYERS}\uBA85\uC774\uB77C \uCF1C\uC9C0 \uC54A\uC558\uC5B4\uC694.`);
      setSelected(viewState.selected);
    } else setSelected([...viewState.selected, id]);
  }
  function updateCount() {
    const n2 = selectedIds().length;
    countEl.textContent = n2 < 2 ? `${n2}\uBA85 \xB7 2\uBA85 \uC774\uC0C1 \uB20C\uB7EC \uC8FC\uC138\uC694` : `${n2}\uBA85 \uCC38\uAC00`;
  }
  function setSelected(list) {
    viewState.selected = list;
    viewState.ladder = null;
    viewState.revealed = [];
    drawPeople();
    updateCount();
    drawStage();
  }
  function togglePerson(id) {
    if (spinning) return;
    const set = new Set(viewState.selected);
    if (set.has(id)) set.delete(id);
    else {
      if (set.size >= MAX_PLAYERS) {
        toast2(`\uCD5C\uB300 ${MAX_PLAYERS}\uBA85\uAE4C\uC9C0 \uCC38\uAC00\uD560 \uC218 \uC788\uC5B4\uC694.`);
        return;
      }
      set.add(id);
    }
    setSelected([...set]);
  }
  function removeName(index4) {
    const id = selectedIds()[index4];
    if (id) setSelected(viewState.selected.filter((x4) => x4 !== id));
  }
  root.querySelectorAll("[data-pick-team]").forEach((button) => button.addEventListener("click", () => {
    viewState.teamTab = button.dataset.pickTeam;
    root.querySelectorAll("[data-pick-team]").forEach((b3) => b3.setAttribute("aria-pressed", String(b3 === button)));
    drawPeople();
  }));
  root.querySelector(".pick-add").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = event.currentTarget.elements.custom;
    addCustom(input.value);
    input.value = "";
    input.focus();
  });
  root.querySelector("[data-pick-all]").addEventListener("click", () => {
    if (spinning) return;
    const all = [.../* @__PURE__ */ new Set([...viewState.selected, ...visibleGroups().flatMap(([, list]) => list.map((p3) => p3.personId)), ...viewState.custom.map((e3) => e3.id)])];
    if (all.length > MAX_PLAYERS) toast2(`\uCD5C\uB300 ${MAX_PLAYERS}\uBA85\uAE4C\uC9C0\uB77C \uC55E\uC758 ${MAX_PLAYERS}\uBA85\uB9CC \uCC38\uAC00\uD574\uC694.`);
    setSelected(all.slice(0, MAX_PLAYERS));
  });
  root.querySelector("[data-pick-none]").addEventListener("click", () => {
    if (!spinning) setSelected([]);
  });
  outcomesEl.addEventListener("input", () => {
    viewState.outcomes = outcomesEl.value;
    if (viewState.tab === "ladder") drawStage();
  });
  root.querySelectorAll("[data-picker-tab]").forEach((button) => button.addEventListener("click", () => {
    if (spinning || viewState.tab === button.dataset.pickerTab) return;
    viewState.tab = button.dataset.pickerTab;
    root.querySelectorAll("[data-picker-tab]").forEach((b3) => b3.setAttribute("aria-pressed", String(b3 === button)));
    root.querySelector(".picker-outcomes").hidden = viewState.tab !== "ladder";
    drawStage();
  }));
  function drawStage() {
    epoch++;
    if (viewState.tab === "wheel") drawWheel();
    else {
      wheel?.remove();
      wheel = null;
      drawLadder();
    }
  }
  const wheelItems = (list) => list.map((label, i3) => ({ label: shortLabel(label), backgroundColor: colorOf(i3, list.length), labelColor: "#1f2a44" }));
  function drawWheel() {
    const list = names(), ready = list.length >= 2, items = wheelItems(ready ? list : ["?", "?"]);
    if (!wheel) {
      stage.innerHTML = `<div class="wheel-stage"><div class="wheel-ring" aria-hidden="true"></div><div class="wheel-box" role="img" aria-label="\uB8F0\uB81B"></div><div class="wheel-hub" aria-hidden="true"><span>\uBF51\uAE30</span></div><div class="wheel-pointer" aria-hidden="true"></div></div><div class="picker-actions"><button type="button" class="primary" data-spin>\uB3CC\uB9AC\uAE30</button><button type="button" data-spin-drop hidden>\uB2F9\uCCA8\uC790 \uBE7C\uACE0 \uB2E4\uC2DC \uB3CC\uB9AC\uAE30</button></div><p class="picker-result" aria-live="polite"></p>`;
      wheel = new Wheel(stage.querySelector(".wheel-box"), { items, isInteractive: false, pointerAngle: 0, radius: 0.97, itemLabelAlign: "center", itemLabelRadius: 0.68, itemLabelRadiusMax: 0.24, itemLabelFont: "'Noto Sans KR Variable','Noto Sans KR',sans-serif", itemLabelFontSizeMax: 26, itemLabelColors: ["#1f2a44"], lineColor: "#ffffff", lineWidth: 4, borderColor: "#ffffff", borderWidth: 0 });
      stage.querySelector("[data-spin]").addEventListener("click", spin);
      stage.querySelector("[data-spin-drop]").addEventListener("click", (event) => {
        removeName(Number(event.currentTarget.dataset.winner));
        spin();
      });
    } else wheel.items = items;
    stage.querySelector("[data-spin]").disabled = !ready || spinning;
    stage.querySelector("[data-spin]").textContent = "\uB3CC\uB9AC\uAE30";
    stage.querySelector("[data-spin-drop]").hidden = true;
    stage.querySelector(".picker-result").textContent = "";
  }
  function spin() {
    const list = names();
    if (list.length < 2 || spinning || !wheel) return;
    const index4 = pickIndex(list.length), spinButton = stage.querySelector("[data-spin]"), dropButton = stage.querySelector("[data-spin-drop]"), result = stage.querySelector(".picker-result"), wheelStage = stage.querySelector(".wheel-stage");
    spinning = true;
    spinButton.disabled = true;
    dropButton.hidden = true;
    result.textContent = "\uB3CC\uB9AC\uB294 \uC911";
    wheelStage.classList.add("is-spinning");
    const finish = (current) => {
      if (disposed) return;
      spinning = false;
      spinButton.disabled = false;
      spinButton.textContent = "\uB2E4\uC2DC \uB3CC\uB9AC\uAE30";
      wheelStage.classList.remove("is-spinning");
      const winner = list[current] ?? list[index4];
      result.innerHTML = `<strong>${esc12(winner)}</strong> \uB2D8 \uB2F9\uCCA8`;
      dropButton.dataset.winner = String(list[current] === void 0 ? index4 : current);
      dropButton.hidden = list.length <= 2;
    };
    if (reducedMotion()) {
      wheel.onRest = null;
      wheel.spinToItem(index4, 0, false, 0, 1);
      finish(wheel.getCurrentIndex());
      return;
    }
    wheel.onRest = (event) => {
      wheel.onRest = null;
      finish(event.currentIndex);
    };
    wheel.spinToItem(index4, 4200, false, 4, 1);
  }
  function drawLadder() {
    const list = names();
    if (list.length < 2) {
      stage.innerHTML = '<p class="empty">\uC9C1\uC6D0\uC744 2\uBA85 \uC774\uC0C1 \uB204\uB974\uBA74 \uC0AC\uB2E4\uB9AC\uAC00 \uB9CC\uB4E4\uC5B4\uC838\uC694.</p>';
      return;
    }
    if (!viewState.ladder || viewState.ladder.columns !== list.length) {
      viewState.ladder = buildLadder(list.length);
      viewState.revealed = [];
    }
    const ladder = viewState.ladder, n2 = list.length, outcomes = parseLines(viewState.outcomes, Infinity), ends = ladderResults(ladder), revealed = new Set(viewState.revealed), myEpoch = epoch;
    const width = n2 * GAP_X, height = TOP * 2 + (ladder.rows + 1) * GAP_Y, x4 = (col) => PAD + col * GAP_X, y3 = (row) => TOP + (row + 1) * GAP_Y, outcomeOf = (col) => outcomes[col] || "\uD1B5\uACFC", color = (i3) => colorOf(i3, n2);
    const rails = list.map((_3, i3) => `<line x1="${x4(i3)}" y1="${y3(-1)}" x2="${x4(i3)}" y2="${y3(ladder.rows)}"/>`).join(""), rungs = ladder.rungs.map((r3) => `<line x1="${x4(r3.left)}" y1="${y3(r3.row)}" x2="${x4(r3.left + 1)}" y2="${y3(r3.row)}"/>`).join("");
    stage.innerHTML = `<div class="picker-actions"><button type="button" data-ladder-new>\uC0AC\uB2E4\uB9AC \uC0C8\uB85C \uB9CC\uB4E4\uAE30</button><button type="button" class="primary" data-ladder-all>\uBAA8\uB450 \uD0C0\uAE30</button><button type="button" data-ladder-again>\uD55C \uBC88 \uB354</button></div><div class="ladder-scroll"><div class="ladder-board" style="width:${width}px"><div class="ladder-tokens" style="grid-template-columns:repeat(${n2},${GAP_X}px)">${list.map((name, i3) => `<button type="button" class="ladder-token" data-ladder-start="${i3}" style="--c:${color(i3)}" aria-pressed="${revealed.has(i3)}" title="${esc12(name)}"><i>${esc12(name[0])}</i><span>${esc12(name)}</span></button>`).join("")}</div><svg class="ladder-svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" aria-hidden="true"><defs><filter id="ladder-shadow" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="2" dy="3" stdDeviation="2.5" flood-color="#3f548c" flood-opacity=".35"/></filter></defs><g class="ladder-rails">${rails}</g><g class="ladder-rails-hi" transform="translate(-2 0)">${rails}</g><g class="ladder-rungs">${rungs}</g><g class="ladder-rungs-hi" transform="translate(0 -2)">${rungs}</g><g class="ladder-trails"></g><g class="ladder-runners"></g></svg><div class="ladder-prizes" style="grid-template-columns:repeat(${n2},${GAP_X}px)">${list.map((_3, i3) => `<span class="ladder-prize ${outcomeOf(i3) === "\uB2F9\uCCA8" ? "is-win" : ""}" data-ladder-end="${i3}">${esc12(outcomeOf(i3))}</span>`).join("")}</div></div></div><ol class="ladder-results" aria-live="polite">${list.map((name, i3) => `<li data-ladder-row="${i3}"><span><i class="ladder-dot" style="--c:${color(i3)}"></i>${esc12(name)}</span><strong>${revealed.has(i3) ? esc12(outcomeOf(ends[i3])) : "?"}</strong></li>`).join("")}</ol>`;
    const trails = stage.querySelector(".ladder-trails"), runners = stage.querySelector(".ladder-runners");
    function runRunner(i3, animate, done) {
      const px = tracePath(ladder, i3).points.map(([row, col]) => [x4(col), y3(row)]), segs = [];
      let total = 0;
      for (let k3 = 1; k3 < px.length; k3++) {
        const d2 = Math.hypot(px[k3][0] - px[k3 - 1][0], px[k3][1] - px[k3 - 1][1]);
        segs.push(d2);
        total += d2;
      }
      const trail = document.createElementNS(SVG, "polyline");
      trail.setAttribute("class", "ladder-trail");
      trail.style.stroke = color(i3);
      trails.append(trail);
      const runner = document.createElementNS(SVG, "g");
      runner.setAttribute("class", "ladder-runner");
      runner.innerHTML = `<circle class="body" r="${TOKEN_R}" fill="${color(i3)}" filter="url(#ladder-shadow)"/><circle class="shine" r="5" cx="-5" cy="-6" fill="#fff" opacity=".6"/><text y="5">${esc12(list[i3][0])}</text>`;
      runners.append(runner);
      const place = (k3, cx, cy) => {
        runner.setAttribute("transform", `translate(${cx} ${cy})`);
        trail.setAttribute("points", [...px.slice(0, k3 + 1), [cx, cy]].map((p3) => p3.join(",")).join(" "));
      };
      if (!animate || reducedMotion()) {
        place(px.length - 1, ...px.at(-1));
        runner.classList.add("is-done");
        done();
        return;
      }
      const duration2 = Math.min(4200, Math.max(1300, total / SPEED * 1e3));
      let start2 = 0;
      const frame = (now) => {
        if (disposed || myEpoch !== epoch) return;
        start2 ||= now;
        const t3 = Math.min(1, (now - start2) / duration2), dist = total * t3;
        let acc = 0, k3 = 0;
        while (k3 < segs.length - 1 && acc + segs[k3] < dist) {
          acc += segs[k3];
          k3++;
        }
        const [ax, ay] = px[k3], [bx, by] = px[k3 + 1], f3 = segs[k3] ? Math.min(1, (dist - acc) / segs[k3]) : 1;
        place(k3, ax + (bx - ax) * f3, ay + (by - ay) * f3);
        if (t3 < 1) requestAnimationFrame(frame);
        else {
          runner.classList.add("is-done");
          done();
        }
      };
      requestAnimationFrame(frame);
    }
    const land = (i3) => {
      const end = ends[i3], prize = stage.querySelector(`[data-ladder-end="${end}"]`);
      stage.querySelector(`[data-ladder-row="${i3}"] strong`).textContent = outcomeOf(end);
      prize.style.setProperty("--hit", color(i3));
      prize.classList.remove("is-hit");
      void prize.offsetWidth;
      prize.classList.add("is-hit");
    };
    function reveal(i3, animate) {
      if (revealed.has(i3)) return;
      revealed.add(i3);
      viewState.revealed = [...revealed];
      stage.querySelector(`[data-ladder-start="${i3}"]`).setAttribute("aria-pressed", "true");
      runRunner(i3, animate, () => {
        if (!disposed && myEpoch === epoch) land(i3);
      });
    }
    for (const i3 of revealed) runRunner(i3, false, () => land(i3));
    stage.querySelectorAll("[data-ladder-start]").forEach((button) => button.addEventListener("click", () => reveal(Number(button.dataset.ladderStart), true)));
    stage.querySelector("[data-ladder-all]").addEventListener("click", () => list.forEach((_3, i3) => setTimeout(() => {
      if (!disposed && myEpoch === epoch) reveal(i3, true);
    }, i3 * 160)));
    stage.querySelector("[data-ladder-new]").addEventListener("click", () => {
      viewState.ladder = null;
      viewState.revealed = [];
      drawStage();
    });
    stage.querySelector("[data-ladder-again]").addEventListener("click", () => {
      viewState.ladder = null;
      viewState.revealed = [];
      drawStage();
      stage.querySelector("[data-ladder-all]").click();
    });
  }
  drawPeople();
  updateCount();
  drawStage();
  return { dispose() {
    disposed = true;
    epoch++;
    wheel?.remove();
    wheel = null;
  } };
}

// src/clinic-app.js
initializeTheme();
var app = document.querySelector("#app");
var esc13 = (value) => String(value ?? "").replace(/[&<>"']/g, (c3) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c3]);
var number = (value) => typeof value === "number" ? value.toLocaleString("ko-KR") : String(value ?? "");
var objectParticle = (word) => (word.charCodeAt(word.length - 1) - 44032) % 28 ? "\uC744" : "\uB97C";
var display = (value) => value === "" || value === void 0 || value === null ? "\u2014" : number(value);
var localDate = (date = /* @__PURE__ */ new Date()) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
var today2 = () => new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul" }).format(/* @__PURE__ */ new Date());
var lastDay = (month2) => new Date(2e3 + Number(month2.slice(0, 2)), Number(month2.slice(2)), 0).getDate();
var nextDay = (date) => new Date(Date.parse(date + "T12:00:00Z") + 864e5).toISOString().slice(0, 10);
var monthOf2 = (date) => date.slice(2, 4) + date.slice(5, 7);
var dateOf2 = (month2, day = 1) => `20${month2.slice(0, 2)}-${month2.slice(2)}-${String(day).padStart(2, "0")}`;
var monthText = (month2) => `20${month2.slice(0, 2)}\uB144 ${Number(month2.slice(2))}\uC6D4`;
var menus = [["feedback", "\uBA54\uBAA8\uCDE8\uD569", "\uC9C1\uC6D0\xB7\uAD00\uB9AC\uC790 \uC758\uACAC\uC744 \uD55C\uACF3\uC5D0", "file"], ["admin-dashboard", "\uAD00\uB9AC\uC790 \uB300\uC2DC\uBCF4\uB4DC", "\uC9C1\uC6D0 \uC0C1\uD0DC\uC640 \uC6D4\uAC04 \uAE30\uB85D", "chart"], ["team-calendar", "\uC77C\uC815\uD45C", "\uC9C1\uC6D0\uBCC4 \uADFC\uBB34\uD45C\uC640 \uD734\uBB34\xB7\uC0C1\uD0DC \uCE98\uB9B0\uB354", "calendar"], ["roster", "\uC9C1\uC6D0\uBCC4 \uADFC\uBB34\uD45C", "\uC9C1\uC6D0 \xD7 \uB0A0\uC9DC\uB85C \uBE44\uAD50", "grid"], ["meal-timer", "\uB0B4 \uD558\uB8E8", "\uADFC\uBB34 \uC0C1\uD0DC\uC640 \uB0B4 \uC5C5\uBB34", "clock"], ["meals", "\uC2DD\uB300", "\uC0AC\uC6A9 \uD55C\uB3C4\uC640 \uC2DD\uB300 \uAE30\uB85D", "meal"], ["team-snacks", "\uD300 \uAC04\uC2DD\uBE44", "\uD300\uBCC4 \uAC04\uC2DD \uC8FC\uBB38\uACFC \uC0AC\uC6A9 \uAE08\uC561", "meal"], ["expenses", "\uC9C0\uCD9C\uACB0\uC758\uC11C", "\uC2E0\uCCAD\uACFC 4\uB2E8\uACC4 \uACB0\uC7AC", "file"], ["attendance", "OT\xB7\uC9C0\uAC01", "\uC774\uC6D4\uBD80\uD130 \uC0AC\uC6A9\xB7\uB9C8\uAC10\uAE4C\uC9C0", "chart"], ["sources", "\uC608\uC2DC\xB7\uAC80\uC99D", "37\uAC1C \uD0ED\uACFC \uC608\uC2DC \uAE30\uB85D \uD655\uC778", "file"], ["picker", "\uBF51\uAE30", "\uB8F0\uB81B\xB7\uC0AC\uB2E4\uB9AC\uB85C \uB2F9\uBC88 \uC815\uD558\uAE30", "dice"]];
var paths = { calendar: "M5 3v4M19 3v4M3 10h18M5 5h14a2 2 0 0 1 2 2v13H3V7a2 2 0 0 1 2-2ZM7 14h2m3 0h2m3 0h1M7 18h2m3 0h2", grid: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z", clock: "M12 8v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z", meal: "M4 3v7m3-7v7M2 7h7M5.5 10v11M18 3c-4 4-4 9 0 9V3Zm0 9v9", chart: "M3 3v18h18M7 17v-6m5 6V7m5 10V4", file: "M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 12h8m-8 4h8", dice: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2ZM8.5 8.5h.01M15.5 8.5h.01M12 12h.01M8.5 15.5h.01M15.5 15.5h.01", book: "M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1ZM12 5v15" };
var GUIDE_URL = "https://bb-staff-guide.beautyblossom.workers.dev/";
var icon = (key) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[key] || paths.file}"/></svg>`;
var badge = (label, cls = "") => `<span class="badge ${cls}">${esc13(label)}</span>`;
var swatch = (color) => /^[A-Fa-f0-9]{6}$/.test(color || "") ? `<i class="swatch" style="--source-color:#${color}" title="\uC608\uC2DC \uC0C9\uC0C1 #${color}" aria-label="\uC608\uC2DC \uC0C9\uC0C1 #${color}"></i>` : "";
var data;
var calendar;
var view = "team-calendar";
var month;
var team = "\uC804\uCCB4";
var search = "";
var renderVersion = 0;
var dialogVersion = 0;
var sourceBook = "schedule";
var sourceTab = "";
var sourcePage = 0;
var sourceQuery = "";
var calendarTab = "leave";
var rawCache = /* @__PURE__ */ new Map();
var pendingMeals = /* @__PURE__ */ new Set();
var receiptViewState = {};
var feedbackViewState = {};
var guideViewState = {};
var dutyViewState = {};
var expenseViewState = {};
var pickerViewState = {};
var LOCAL_KEY = "bb-staff:public-preview:v1";
var authSession = null;
var employees = [];
var helpController;
var feedbackController;
var sessionRevision = 0;
var renderedView = "";
var previewMode = "employee";
var mealDemo = false;
var showAllMealHistory = false;
var activityKind = "meal";
var signedInPerson;
var receiptController;
var snackController;
var expenseController;
var pickerController;
var mealTransitionFrom = "";
function changeSession(session) {
  sessionRevision++;
  clearTimeout(searchTimeout);
  composing = false;
  dialogVersion++;
  undoStack.length = 0;
  clearTimeout(toastTimeout);
  document.querySelector("#toast").classList.remove("visible");
  document.querySelector("#toast").textContent = "";
  document.querySelectorAll("dialog[open]").forEach((dialog) => dialog.close());
  authSession = session;
  previewMode = session?.role || "employee";
  signedInPerson = employees.find((p3) => p3.personId === session?.personId);
  renderedView = "";
  team = "\uC804\uCCB4";
  search = "";
  mealDemo = false;
  showAllMealHistory = false;
  activityKind = "meal";
  sourceQuery = "";
  sourceTab = "";
  sourcePage = 0;
  calendarTab = "leave";
  month = data.months.includes(monthOf2(today2())) ? monthOf2(today2()) : data.months.at(-1);
  for (const state of [receiptViewState, feedbackViewState, guideViewState, dutyViewState, expenseViewState, pickerViewState]) for (const key of Object.keys(state)) delete state[key];
  try {
    if (session) sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    else sessionStorage.removeItem(SESSION_KEY);
  } catch {
    toast("\uC774 \uD0ED\uC5D0\uC11C\uB9CC \uB85C\uADF8\uC778 \uC0C1\uD0DC\uB97C \uC720\uC9C0\uD569\uB2C8\uB2E4.");
  }
  history.replaceState(null, "", "#/" + allowedRoute(session, ""));
  render();
}
var personalView = () => previewMode === "employee" && (["roster", "meals", "attendance"].includes(view) || view === "team-calendar" && calendarTab === "roster");
var toastTimeout;
function toast(message) {
  const el = document.querySelector("#toast");
  el.textContent = message;
  el.classList.add("visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => el.classList.remove("visible"), 5e3);
}
function matches(row, selectedMonth = month) {
  return row.month === selectedMonth && (personalView() ? row.personId === signedInPerson.personId : (team === "\uC804\uCCB4" || row.teams?.includes(team)) && (!search || [row.name, row.originalName, row.rawTeam].some((x4) => x4?.includes(search))));
}
var rosterRows = () => data.roster.filter((r3) => matches(r3));
function readDraft() {
  const value = localStorage.getItem(LOCAL_KEY);
  if (value === null) return [];
  const rows = JSON.parse(value);
  if (!Array.isArray(rows) || !rows.every(validDraft)) throw new Error("\uCD94\uAC00 \uAE30\uB85D \uD615\uC2DD\uC744 \uD655\uC778\uD574\uC57C \uD569\uB2C8\uB2E4. \uAE30\uC874 \uAE30\uB85D\uC740 \uBCF4\uC874\uD588\uC2B5\uB2C8\uB2E4.");
  return rows;
}
function localRows(kind) {
  try {
    return readDraft().filter((r3) => r3.kind === kind && matches(r3));
  } catch (error) {
    toast(error.message);
    return [];
  }
}
async function saveDraft(rows, validate = () => {
}, replaceGroup = "") {
  const work = () => {
    validate();
    if (!rows.length || !rows.every(validDraft)) throw new Error("\uCD94\uAC00 \uAE30\uB85D \uD615\uC2DD\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694. \uC800\uC7A5\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");
    const kept = replaceGroup ? withoutGroup(readDraft(), replaceGroup) : readDraft();
    localStorage.setItem(LOCAL_KEY, JSON.stringify([...kept, ...rows]));
  };
  return navigator.locks ? navigator.locks.request(LOCAL_KEY, work) : work();
}
async function moveDraftGroup(groupId, newStart, validate = () => {
}) {
  const work = () => {
    validate();
    const rows = readDraft(), next = moveGroup(rows, groupId, newStart);
    if (next === rows) return false;
    if (next.some((r3) => r3.kind === "schedule" && groupOf(r3) === groupId && !data.months.includes(r3.month))) throw new Error("\uC870\uD68C \uAC00\uB2A5\uD55C \uC6D4 \uC548\uC73C\uB85C\uB9CC \uC62E\uAE38 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
    localStorage.setItem(LOCAL_KEY, JSON.stringify(next));
    return true;
  };
  return navigator.locks ? navigator.locks.request(LOCAL_KEY, work) : work();
}
async function moveOriginalDraft(entry, newDate, validate = () => {
}) {
  const work = () => {
    validate();
    if (newDate !== entry.from && !data.months.includes(monthOf2(newDate))) throw new Error("\uC870\uD68C \uAC00\uB2A5\uD55C \uC6D4 \uC548\uC73C\uB85C\uB9CC \uC62E\uAE38 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
    localStorage.setItem(LOCAL_KEY, JSON.stringify(moveOriginal(readDraft(), entry, newDate, (/* @__PURE__ */ new Date()).toISOString(), () => crypto.randomUUID())));
  };
  return navigator.locks ? navigator.locks.request(LOCAL_KEY, work) : work();
}
async function removeDraftGroup(groupId, validate = () => {
}) {
  const work = () => {
    validate();
    const rows = readDraft(), kept = withoutGroup(rows, groupId);
    if (kept.length === rows.length) throw new Error("\uC774\uBBF8 \uC0AD\uC81C\uB41C \uC77C\uC815\uC785\uB2C8\uB2E4.");
    localStorage.setItem(LOCAL_KEY, JSON.stringify(kept));
  };
  return navigator.locks ? navigator.locks.request(LOCAL_KEY, work) : work();
}
function sourceButton(source, label = "\uC608\uC2DC \uBCF4\uAE30") {
  return source ? `<button class="text-button" data-source="${esc13(JSON.stringify(source))}">${esc13(label)} \u2197</button>` : "";
}
function metric2(label, value, detail = "") {
  return `<div class="metric"><span>${esc13(label)}</span><strong>${esc13(value)}</strong><small>${esc13(detail)}</small></div>`;
}
function empty2(message = "\uC120\uD0DD\uD55C \uC870\uAC74\uC758 \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.") {
  return `<div class="empty">${esc13(message)}</div>`;
}
function teamOptions() {
  return [...new Set([...data.roster, ...data.mealRows, ...data.otRows].filter((r3) => r3.month === month).flatMap((r3) => r3.teams))];
}
function shell() {
  const personal = previewMode === "employee", titles2 = { roster: ["\uB0B4 \uADFC\uBB34\uD45C", "\uB098\uC758 \uD734\uBB34\uC640 \uADFC\uBB34 \uC77C\uC815"], "team-calendar": ["\uC77C\uC815\uD45C", "\uB0B4 \uADFC\uBB34\uD45C\uC640 \uD300 \uC77C\uC815\uC744 \uD55C\uB208\uC5D0"], meals: ["\uB0B4 \uC2DD\uB300", "\uC0AC\uC6A9 \uD55C\uB3C4\uC640 \uC794\uC561, \uC2DD\uB300 \uAE30\uB85D"], attendance: ["\uB0B4 OT\xB7\uC9C0\uAC01", "\uB098\uC758 \uC6D4\uBCC4 \uAE30\uB85D"] };
  const shownMenus = menus.map((m3) => personal && titles2[m3[0]] ? [m3[0], ...titles2[m3[0]], m3[3]] : m3), current = shownMenus.find((m3) => m3[0] === view), teams = teamOptions(), visibleMenus = shownMenus.filter((m3) => personal ? !["admin-dashboard", "sources", "feedback", "roster"].includes(m3[0]) : !["meal-timer", "roster"].includes(m3[0]));
  if (personal) {
    const order = ["meal-timer", "team-calendar", "meals", "team-snacks", "expenses", "attendance", "picker"];
    visibleMenus.sort((a3, b3) => order.indexOf(a3[0]) - order.indexOf(b3[0]));
  }
  app.innerHTML = `<aside class="sidebar"><a class="brand" href="#/${personal ? "meal-timer" : "admin-dashboard"}"><img class="brand-mark" src="./assets/clinic-logo.png" width="52" height="52" alt="\uBDF0\uD2F0\uBE14\uB77C\uC378 \uB85C\uACE0"><span>\uBDF0\uD2F0\uBE14\uB77C\uC378<small>\uD568\uAED8\uD558\uB294 \uD558\uB8E8</small></span></a><div class="nav-caption">${personal ? "\uB098\uC758 \uC5C5\uBB34" : "\uC9C1\uC6D0 \uC5C5\uBB34 \uAD00\uB9AC"}</div><nav aria-label="\uC9C1\uC6D0 \uC5C5\uBB34 \uBA54\uB274">${visibleMenus.map(([id, title, desc, key]) => `<a class="nav-card ${view === id ? "selected" : ""} ${id === "picker" ? "nav-card-fun" : ""}" href="#/${id}" ${view === id ? 'aria-current="page"' : ""}><span class="nav-icon nav-icon-${id}">${icon(key)}</span><span><strong>${title}</strong><small>${desc}</small></span><span class="nav-arrow">\u203A</span></a>`).join("")}<a class="nav-card nav-card-link" href="${GUIDE_URL}" target="_blank" rel="noopener"><span class="nav-icon nav-icon-guide">${icon("book")}</span><span><strong>\uBDF0\uBE14 \uC5C5\uBB34\uAC00\uC774\uB4DC \uBCF4\uAE30</strong><small>\uC0C8 \uCC3D\uC5D0\uC11C \uC5F4\uB824\uC694</small></span><span class="nav-arrow">\u2197</span></a></nav><div class="sidebar-note"><span class="status-dot"></span>${personal ? esc13(signedInPerson.name) + " \uB2D8" : "\uAD00\uB9AC\uC790 \uD654\uBA74"}<small>${personal ? esc13(signedInPerson.rawTeam) + " \xB7 \uD14C\uC2A4\uD2B8 \uB85C\uADF8\uC778" : "\uC9C1\uC6D0 \uC0C1\uD0DC \xB7 \uAE30\uB85D \xB7 \uC601\uC218\uC99D"}</small></div></aside><div class="main"><header class="topbar"><span class="login-role-badge">${personal ? "\uC9C1\uC6D0 \uD654\uBA74" : "\uAD00\uB9AC\uC790 \uD654\uBA74"}</span><span class="signed-in-person">${personal ? esc13(signedInPerson.name) + " \uB2D8 \xB7 " + esc13(signedInPerson.rawTeam) : "\uBDF0\uD2F0\uBE14\uB77C\uC378 \uAD00\uB9AC\uC790"}</span>${themeControl()}<span class="date-label">${new Intl.DateTimeFormat("ko-KR", { timeZone: "Asia/Seoul", month: "long", day: "numeric", weekday: "long" }).format(/* @__PURE__ */ new Date())}</span><span id="help-launcher" class="help-launcher-slot"></span><button type="button" class="logout-button" data-action="logout"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 4H4v16h5M14 8l4 4-4 4M8 12h12"/></svg><span>\uB85C\uADF8\uC544\uC6C3</span></button></header><main><div id="workspace-help"></div><div class="page-heading"><div><h1>${current[1]}</h1><p>${current[2]}</p></div>${view === "team-calendar" ? calendarTabs() : ""}${view === "admin-dashboard" ? '<button class="primary" data-action="staff-leave">+ \uC9C1\uC6D0 \uD734\uBB34 \uB4F1\uB85D</button>' : ["sources", "meal-timer", "feedback", "team-snacks", "picker", "expenses"].includes(view) ? "" : `<button class="primary" data-action="${personal && view === "meals" ? "receipt-new" : "new"}">+ ${view === "meals" ? "\uC2DD\uB300" : view === "attendance" ? "OT\xB7\uC9C0\uAC01" : "\uC77C\uC815"} \uB4F1\uB85D</button>`}</div>${["meal-timer", "feedback", "picker", "expenses"].includes(view) ? "" : `<section class="filters" aria-label="\uC870\uD68C \uD544\uD130"><div class="filter-top"><label class="month-field">\uC870\uD68C \uC6D4<select id="month-filter">${data.months.map((m3) => `<option value="${m3}" ${m3 === month ? "selected" : ""}>${monthText(m3)}</option>`).join("")}</select></label>${personalView() ? `<p class="personal-filter-note">${esc13(signedInPerson.name)} \uB2D8\uC758 \uAE30\uB85D\uC785\uB2C8\uB2E4.</p>` : `<label class="search-field">\uC9C1\uC6D0 \uCC3E\uAE30<input id="staff-search" type="search" value="${esc13(search)}" placeholder="\uC9C1\uC6D0 \uC774\uB984 \uB610\uB294 \uD300" maxlength="100"></label><label class="team-field">\uD300 \uC120\uD0DD<select id="team-filter">${["\uC804\uCCB4", ...teams].map((t3) => `<option value="${esc13(t3)}" ${team === t3 ? "selected" : ""}>${esc13(t3)}${t3 === "\uC804\uCCB4" ? "" : "\uD300"}</option>`).join("")}</select></label><span class="filter-note">\uD654\uBA74\uC744 \uBC14\uAFD4\uB3C4 \uC6D4\uACFC \uD300\uC774 \uC720\uC9C0\uB3FC\uC694.</span>`}</div></section>`}<div id="content" aria-live="polite"></div></main><footer>\uBDF0\uD2F0\uBE14\uB77C\uC378 \uC9C1\uC6D0 \uC5C5\uBB34 \xB7 \uC608\uC2DC \uAC00\uC838\uC628 \uB0A0\uC9DC ${esc13(data.importedAt?.slice(0, 10))}<span>\uCD94\uAC00\uD55C \uAE30\uB85D\uACFC \uC0AC\uC9C4\uC740 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.</span></footer></div>`;
}
function render() {
  hideMorePeek();
  const scrollTop = scrollY, pageHeight = document.documentElement.scrollHeight;
  if (!data) return;
  const retainedFeedback = authSession?.role === "admin" && view === "admin-dashboard" && location.hash.split("?")[0] === "#/admin-dashboard" && document.querySelector("#dashboard-feedback") ? { node: document.querySelector("#dashboard-feedback"), controller: feedbackController } : null;
  renderVersion++;
  receiptController?.dispose();
  receiptController = null;
  snackController?.dispose();
  snackController = null;
  pickerController?.dispose();
  pickerController = null;
  expenseController?.dispose();
  expenseController = null;
  helpController?.dispose();
  helpController = null;
  if (!retainedFeedback) feedbackController?.dispose();
  feedbackController = null;
  calendar?.destroy();
  calendar = null;
  if (!authSession) {
    mountPreviewLogin(app, { people: employees, themeControl, onLogin: changeSession });
    return;
  }
  const requested = location.hash.slice(2).split("?")[0];
  view = allowedRoute(authSession, requested);
  const tabParam = new URLSearchParams(location.hash.split("?")[1] || "").get("tab");
  if (view === "roster") {
    view = "team-calendar";
    calendarTab = "roster";
  } else if (view === "team-calendar" && ["roster", "leave", "status"].includes(tabParam)) {
    calendarTab = tabParam;
    history.replaceState(null, "", "#/team-calendar");
  }
  if (view !== requested) history.replaceState(null, "", "#/" + view);
  const keepScroll = renderedView === view;
  renderedView = view;
  if (keepScroll) document.body.style.minHeight = pageHeight + "px";
  shell();
  document.querySelector("main").insertAdjacentHTML("afterbegin", '<div class="notice" role="note"><strong>\uACF5\uAC1C \uCD08\uC548 \uAC80\uC218\uC6A9</strong> \xB7 \uBBF8\uB9AC \uCC44\uC6CC\uC9C4 \uC77C\uC815\xB7\uC2DD\uB300\xB7OT\xB7\uC9C0\uCD9C\uC740 \uC608\uC2DC\uC785\uB2C8\uB2E4. \uC9C1\uC811 \uC785\uB825\uD55C \uAE30\uB85D\uACFC \uAC80\uC218 \uBA54\uBAA8\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.</div>');
  const content = document.querySelector("#content");
  helpController = mountWorkspaceHelp(document.querySelector("#workspace-help"), { session: authSession, view, people: employees, toast, guideState: guideViewState, onSaved: () => feedbackController?.refresh() });
  try {
    ({ feedback: (root) => {
      feedbackController = mountFeedbackCollection(root, { people: employees, toast, viewState: feedbackViewState });
    }, "admin-dashboard": (root) => renderMealManager(root, retainedFeedback), "team-calendar": renderCalendar, roster: renderRoster, "meal-timer": renderTimers, meals: renderMeals, "team-snacks": renderSnacks, picker: renderPicker, expenses: renderExpenses, attendance: renderAttendance, sources: renderSources })[view](content);
    labelMobileTables(content);
  } catch (error) {
    retainedFeedback?.controller?.dispose();
    content.innerHTML = empty2("\uD654\uBA74\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C\uACE0\uCE68 \uD6C4 \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
    toast(error.message);
    console.error(error);
  }
  if (keepScroll) {
    scrollTo(0, scrollTop);
    setTimeout(() => {
      document.body.style.minHeight = "";
    }, 800);
  }
}
function calendarRows() {
  const visibleIds = new Set(rosterRows().map((r3) => r3.personId)), overrides = overrideMap(allDrafts());
  const imported = data.scheduleEvents.filter((e3) => monthOf2(e3.date) === month && (!e3.personId || visibleIds.has(e3.personId)) && !overrides.has(e3.id));
  return [...imported, ...scheduleGroups(localRows("schedule"))];
}
function allDrafts() {
  try {
    return readDraft();
  } catch (error) {
    toast(error.message);
    return [];
  }
}
function scheduleCandidates(targetMonth) {
  let editors = [];
  try {
    editors = readTeamEditors(localStorage, employees);
  } catch (error) {
    toast(error.message);
  }
  return allowedSchedulePeople({ session: authSession, person: signedInPerson, people: schedulePeople(targetMonth), editors });
}
function attachDutyPanel(content, people) {
  content.insertAdjacentHTML("afterbegin", '<div id="duty-area"></div>');
  mountSchedulePanel({ root: content.querySelector("#duty-area"), people, roster: data.roster, records: allDrafts, month, session: authSession, employees, person: signedInPerson, toast, viewState: dutyViewState });
}
function renderExpenses(content) {
  const revision = sessionRevision;
  expenseController = mountExpenses({ root: content, session: authSession, people: employees, month, toast, viewState: expenseViewState, guard: () => {
    if (revision !== sessionRevision) throw new Error("\uB85C\uADF8\uC778 \uC815\uBCF4\uAC00 \uBCC0\uACBD\uB410\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
  } });
}
function renderSnacks(content) {
  snackController = mountSnacks({ root: content, session: authSession, person: signedInPerson, teams: teamOptions(), months: data.months, month, team, search, toast });
}
function renderPicker(content) {
  pickerController = mountPicker({ root: content, session: authSession, person: signedInPerson, teams: teamOptions(), people: employees, viewState: pickerViewState, toast });
}
var calendarTabs = () => `<nav class="calendar-tabs" aria-label="\uC77C\uC815\uD45C \uBCF4\uAE30">${[["roster", previewMode === "employee" ? "\uB0B4 \uADFC\uBB34\uD45C" : "\uC9C1\uC6D0\uBCC4 \uADFC\uBB34\uD45C"], ["leave", "\uD734\uBB34 \uCE98\uB9B0\uB354"], ["status", "\uC0C1\uD0DC \uCE98\uB9B0\uB354"]].map(([id, title]) => `<button data-calendar-tab="${id}" aria-pressed="${calendarTab === id}">${title}</button>`).join("")}</nav>`;
function renderCalendar(content) {
  if (calendarTab === "status") {
    renderStatusCalendar(content);
    return;
  }
  if (calendarTab === "roster") {
    content.innerHTML = '<div id="roster-area"></div>';
    renderRoster(content.querySelector("#roster-area"));
    return;
  }
  const events = calendarRows(), people = rosterRows();
  content.innerHTML = `<div class="metrics">${metric2("\uC870\uD68C \uC9C1\uC6D0", `${new Set(people.map((r3) => r3.personId)).size}\uBA85`, team === "\uC804\uCCB4" ? "\uC774\uB2EC \uC2A4\uCF00\uC904 \uBA85\uBD80" : `${team}\uD300`)}${metric2("\uC77C\uC815 \uD45C\uC2DC", `${events.length}\uAC74`, "\uACF5\uD1B5 \uC77C\uC815 \uD3EC\uD568")}${metric2("\uC608\uC2DC \uC0C9\uC0C1", `${events.filter((r3) => r3.unresolved).length}\uAC74`, "\uC758\uBBF8 \uD655\uC778 \uC804\uC5D0\uB3C4 \uC608\uC2DC \uC0C9\uC0C1 \uBCF4\uC874")}</div><section class="panel calendar-panel"><div class="panel-heading"><div><h2>${team === "\uC804\uCCB4" ? "\uBAA8\uB4E0 \uD300" : `${esc13(team)}\uD300`}\uC758 \uC77C\uC815</h2><p>\uB0A0\uC9DC\uB97C \uB204\uB974\uBA74 \uC77C\uC815 \uB4F1\uB85D, \uAE30\uB85D\uC744 \uB204\uB974\uBA74 \uC0C1\uC138 \uB0B4\uC6A9\uC744 \uBCFC \uC218 \uC788\uC5B4\uC694.</p></div><span class="legend-dot">\u25CF \uD734\uBB34\xB7\uD734\uAC00\u3000<span>\u25CF \uC608\uC2DC \uC0C9\uC0C1</span></span></div><div id="calendar"></div></section>`;
  calendar = new Calendar(document.querySelector("#calendar"), {
    plugins: [index, index2, index3],
    locale: l45,
    initialDate: dateOf2(month),
    initialView: innerWidth < 700 ? "listMonth" : "dayGridMonth",
    height: "auto",
    fixedWeekCount: false,
    dayMaxEvents: 3,
    headerToolbar: { left: "", center: "title", right: "dayGridMonth,listMonth" },
    buttonText: { month: "\uC6D4\uAC04", list: "\uBAA9\uB85D" },
    displayEventTime: false,
    editable: true,
    eventDurationEditable: false,
    longPressDelay: 350,
    selectable: false,
    noEventsText: "\uC120\uD0DD\uD55C \uC870\uAC74\uC5D0 \uC77C\uC815\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.",
    moreLinkText: (n2) => `${n2}\uAC74 \uB354 \uBCF4\uAE30`,
    events: events.map((e3) => ({ id: e3.id, title: `${e3.name || "\uACF5\uD1B5"} \xB7 ${e3.label}`, start: e3.date, end: e3.end && e3.end > e3.date ? nextDay(e3.end) : void 0, allDay: true, startEditable: movableEvent(e3), classNames: [e3.unresolved ? "source-event" : e3.personId ? "staff-event" : "common-event"], extendedProps: { record: e3 } })),
    eventDrop: onCalendarDrop,
    moreLinkDidMount: (info) => {
      const el = info.el;
      el.addEventListener("pointerenter", (e3) => {
        if (e3.pointerType !== "touch") showMorePeek(el, events);
      });
      el.addEventListener("focus", () => showMorePeek(el, events));
      for (const type of ["pointerleave", "blur", "click"]) el.addEventListener(type, hideMorePeek);
    },
    dayCellDidMount: (info) => {
      if (info.isOther || !info.el.querySelector(".fc-daygrid-day-top")) return;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "calendar-add";
      button.textContent = "+";
      const date = localDate(info.date);
      button.setAttribute("aria-label", date + " \uC77C\uC815 \uCD94\uAC00");
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        openEntry("schedule", date);
      });
      info.el.querySelector(".fc-daygrid-day-top").append(button);
    },
    dateClick: (info) => openEntry("schedule", info.dateStr),
    eventClick: (info) => showSchedule(info.event.extendedProps.record),
    eventContent: (arg) => {
      const el = document.createElement("span");
      el.className = "calendar-event-text";
      const record = arg.event.extendedProps.record;
      const color = record.color || findDayColor(record);
      if (color) {
        const dot = document.createElement("i");
        dot.className = "swatch";
        dot.style.setProperty("--source-color", `#${color}`);
        el.append(dot);
      }
      el.append(document.createTextNode(arg.event.title));
      return { domNodes: [el] };
    }
  });
  calendar.render();
  attachDutyPanel(content, people);
}
function statusPeople() {
  return employees.filter((p3) => (team === "\uC804\uCCB4" || p3.teams?.includes(team)) && (!search || [p3.name, p3.rawTeam].some((x4) => x4?.includes(search))));
}
function renderStatusCalendar(content) {
  const events = mealStatusEvents(statusPeople(), localStorage);
  content.innerHTML = `<div class="metrics">${metric2("\uC9C0\uAE08 \uC2DD\uC0AC\uC911", `${events.length}\uBA85`, team === "\uC804\uCCB4" ? "\uBAA8\uB4E0 \uD300" : `${team}\uD300`)}${metric2("\uD45C\uC2DC \uAE30\uC900", "\uC624\uB298", `${today2()} \xB7 \uC2DD\uC0AC \uC2DC\uC791 \uC2DC\uAC01`)}${metric2("\uAE30\uB85D \uC704\uCE58", "\uC774 \uBE0C\uB77C\uC6B0\uC800", "\uC2DD\uC0AC \uBC84\uD2BC\uC744 \uB204\uB978 \uAE30\uAE30\uC758 \uAE30\uB85D")}</div><section class="panel calendar-panel"><div class="panel-heading"><div><h2>${team === "\uC804\uCCB4" ? "\uBAA8\uB4E0 \uD300" : `${esc13(team)}\uD300`}\uC758 \uC2DD\uC0AC \uC0C1\uD0DC</h2><p>\uC2DD\uC0AC \uBC84\uD2BC\uC744 \uB204\uB978 \uC9C1\uC6D0\uC774 \uC2DC\uC791 \uC2DC\uAC01\uACFC \uD568\uAED8 \uC624\uB298 \uCE78\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uC2DD\uC0AC\uB97C \uC885\uB8CC\uD558\uBA74 \uC0AC\uB77C\uC9D1\uB2C8\uB2E4.</p></div><span class="legend-dot">\u25CF \uC2DD\uC0AC\uC911</span></div>${events.length ? "" : '<p class="empty">\uC9C0\uAE08 \uC2DD\uC0AC\uC911\uC778 \uC9C1\uC6D0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p>'}<div id="calendar"></div></section>`;
  calendar = new Calendar(document.querySelector("#calendar"), {
    plugins: [index, index3],
    locale: l45,
    initialDate: today2(),
    initialView: innerWidth < 700 ? "listMonth" : "dayGridMonth",
    height: "auto",
    fixedWeekCount: false,
    dayMaxEvents: 4,
    headerToolbar: { left: "", center: "title", right: "dayGridMonth,listMonth" },
    buttonText: { month: "\uC6D4\uAC04", list: "\uBAA9\uB85D" },
    displayEventTime: false,
    editable: false,
    selectable: false,
    noEventsText: "\uC9C0\uAE08 \uC2DD\uC0AC\uC911\uC778 \uC9C1\uC6D0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.",
    moreLinkText: (n2) => `${n2}\uBA85 \uB354 \uBCF4\uAE30`,
    events: events.map((e3) => ({ id: e3.id, title: `${e3.name} \xB7 ${e3.label}`, start: e3.date, allDay: true, classNames: ["status-event"], extendedProps: { record: e3 } })),
    eventClick: (info) => {
      const r3 = info.event.extendedProps.record;
      openDialog(`${r3.name} \xB7 \uC2DD\uC0AC\uC911`, `<dl><dt>\uD300</dt><dd>${esc13(r3.rawTeam)}</dd><dt>\uC2DC\uC791 \uC2DC\uAC01</dt><dd>${esc13(r3.date)} ${esc13(r3.time)}</dd></dl><p class="notice">\uC2DD\uC0AC\uB97C \uC885\uB8CC\uD558\uBA74 \uC0C1\uD0DC \uCE98\uB9B0\uB354\uC5D0\uC11C \uC0AC\uB77C\uC9D1\uB2C8\uB2E4.</p>`);
    }
  });
  calendar.render();
}
var movableEvent = (e3) => !!e3.personId && (e3.local ? canEditSchedule(e3) : scheduleCandidates(monthOf2(e3.date)).some((p3) => p3.personId === e3.personId));
async function onCalendarDrop(info) {
  const record = info.event.extendedProps.record, days = info.delta?.days || 0, revision = sessionRevision;
  if (!days) {
    info.revert();
    return;
  }
  const guard = () => {
    if (revision !== sessionRevision || !authSession) throw new Error("\uB85C\uADF8\uC778 \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB410\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uB85C\uADF8\uC778\uD574 \uC8FC\uC138\uC694.");
  };
  try {
    if (record.local) {
      const group = scheduleGroups(allDrafts()).find((g4) => g4.groupId === groupOf(record));
      if (!group || !canEditSchedule(group)) throw new Error("\uC62E\uAE38 \uC218 \uC788\uB294 \uC77C\uC815\uC774 \uC544\uB2D9\uB2C8\uB2E4.");
      const target2 = shiftDate(group.start, days), revert = group.override && target2 === group.from;
      if (revert) {
        await removeDraftGroup(group.groupId, guard);
        recordMove(group.label, (g4) => moveOriginalDraft(overrideEntry(group), group.start, g4));
      } else {
        await moveDraftGroup(group.groupId, target2, guard);
        recordMove(group.label, (g4) => moveDraftGroup(group.groupId, group.start, g4));
      }
      if (revision !== sessionRevision) return;
      render();
      toast(revert ? "\uC6D0\uB798 \uB0A0\uC9DC\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4." : `${group.label} \uC77C\uC815\uC744 ${target2}${group.days > 1 ? " \uC2DC\uC791" : ""}\uC73C\uB85C \uC62E\uACBC\uC2B5\uB2C8\uB2E4. ${UNDO_HINT}`);
      return;
    }
    const person = data.roster.find((r3) => r3.personId === record.personId && r3.month === monthOf2(record.date)) || employees.find((p3) => p3.personId === record.personId);
    if (!person || !scheduleCandidates(monthOf2(record.date)).some((p3) => p3.personId === record.personId)) throw new Error("\uC62E\uAE38 \uC218 \uC788\uB294 \uC77C\uC815\uC774 \uC544\uB2D9\uB2C8\uB2E4.");
    const target = shiftDate(record.date, days);
    const entry = { sourceId: record.id, from: record.date, label: record.label, color: findDayColor(record) || "", note: record.note || "", personId: record.personId, name: person.name, teams: person.teams, rawTeam: person.rawTeam };
    await moveOriginalDraft(entry, target, guard);
    recordMove(record.label, (g4) => moveOriginalDraft(entry, record.date, g4));
    if (revision !== sessionRevision) return;
    render();
    toast(`${record.label} \uC77C\uC815\uC744 ${target}\uC73C\uB85C \uC62E\uACBC\uC2B5\uB2C8\uB2E4. \uC2DC\uD2B8\uB294 \uADF8\uB300\uB85C\uC608\uC694. ${UNDO_HINT}`);
  } catch (e3) {
    info.revert();
    if (revision === sessionRevision) toast(e3.message);
  }
}
function findDayColor(event) {
  if (!event.source) return "";
  const r3 = data.roster.find((r4) => r4.personId === event.personId && r4.month === monthOf2(event.date));
  return r3?.days[Number(event.date.slice(-2))]?.color || "";
}
var undoStack = [];
var UNDO_HINT = "Ctrl+Z\uB85C \uB418\uB3CC\uB9B4 \uC218 \uC788\uC5B4\uC694.";
var overrideEntry = (g4) => ({ sourceId: g4.sourceId, from: g4.from, label: g4.label, color: g4.color || "", note: g4.note || "", personId: g4.personId, name: g4.name, teams: g4.teams, rawTeam: g4.rawTeam });
function recordMove(label, undo) {
  undoStack.push({ label, undo });
  if (undoStack.length > 20) undoStack.shift();
}
async function undoLastMove() {
  const entry = undoStack.pop();
  if (!entry) return;
  const revision = sessionRevision;
  const guard = () => {
    if (revision !== sessionRevision || !authSession) throw new Error("\uB85C\uADF8\uC778 \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB410\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uB85C\uADF8\uC778\uD574 \uC8FC\uC138\uC694.");
  };
  try {
    await entry.undo(guard);
    if (revision !== sessionRevision) return;
    render();
    toast(`${entry.label} \uC77C\uC815 \uC774\uB3D9\uC744 \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4.`);
  } catch (e3) {
    if (revision === sessionRevision) toast(e3.message);
  }
}
document.addEventListener("keydown", (event) => {
  if (!(event.ctrlKey || event.metaKey) || event.shiftKey || event.altKey || event.repeat || event.key.toLowerCase() !== "z") return;
  if (!authSession || !undoStack.length || event.target.closest?.("input,textarea,select,[contenteditable]") || document.querySelector("dialog[open]")) return;
  event.preventDefault();
  undoLastMove();
});
var morePeek = null;
function hideMorePeek() {
  morePeek?.remove();
  morePeek = null;
}
function showMorePeek(link, events) {
  hideMorePeek();
  const date = link.closest(".fc-daygrid-day")?.dataset.date;
  if (!date) return;
  const items = events.filter((e3) => e3.date <= date && (e3.end || e3.date) >= date);
  if (!items.length) return;
  const panel = document.createElement("div");
  panel.className = "more-peek";
  panel.setAttribute("role", "tooltip");
  panel.innerHTML = `<p>${esc13(date)} \xB7 ${items.length}\uAC74</p><ul>${items.map((e3) => {
    const color = e3.color || findDayColor(e3);
    return `<li><i class="swatch ${color ? "" : e3.personId ? "is-staff" : "is-common"}"${color ? ` style="--source-color:#${esc13(color)}"` : ""}></i><strong>${esc13(e3.name || "\uACF5\uD1B5")}</strong><span>${esc13(e3.label)}</span></li>`;
  }).join("")}</ul>`;
  document.body.append(panel);
  const r3 = link.getBoundingClientRect(), w4 = panel.offsetWidth, h3 = panel.offsetHeight, below = r3.bottom + 8;
  panel.style.left = Math.max(12, Math.min(r3.left, innerWidth - w4 - 12)) + "px";
  panel.style.top = (below + h3 > innerHeight - 12 ? Math.max(12, r3.top - h3 - 8) : below) + "px";
  morePeek = panel;
}
addEventListener("scroll", hideMorePeek, { passive: true });
var canEditSchedule = (record) => !!record.local && scheduleCandidates(monthOf2(record.date)).some((p3) => p3.personId === record.personId);
var scheduleActions = (record) => !canEditSchedule(record) ? "" : record.override ? `<span class="schedule-actions"><button type="button" data-schedule-revert="${esc13(groupOf(record))}">\uC6D0\uB798 \uB0A0\uC9DC\uB85C \uB418\uB3CC\uB9AC\uAE30</button></span>` : `<span class="schedule-actions"><button type="button" data-schedule-edit="${esc13(groupOf(record))}">\uD3B8\uC9D1</button><button type="button" data-schedule-delete="${esc13(groupOf(record))}">\uC0AD\uC81C</button></span>`;
var scheduleSpan = (group) => group.days > 1 ? `${group.start} ~ ${group.end} (${group.days}\uC77C)` : group.date;
function showSchedule(record) {
  const group = record.local ? scheduleGroups(allDrafts()).find((g4) => g4.groupId === groupOf(record)) || { ...record, days: 1 } : { ...record, days: 1 };
  openDialog(`${record.name || "\uACF5\uD1B5"} \xB7 ${record.label}`, `<dl><dt>${group.days > 1 ? "\uAE30\uAC04" : "\uB0A0\uC9DC"}</dt><dd>${esc13(scheduleSpan(group))}</dd>${record.override ? `<dt>\uC6D0\uB798 \uB0A0\uC9DC</dt><dd>${esc13(record.from)}</dd>` : ""}<dt>\uD300</dt><dd>${esc13(record.teams?.join(" \xB7 ") || "\uACF5\uD1B5")}</dd><dt>\uC608\uC2DC \uD45C\uC2DC</dt><dd>${swatch(record.color || findDayColor(record))} ${esc13(record.rawValue || record.label)}</dd><dt>\uBA54\uBAA8</dt><dd class="prewrap">${esc13(record.note || "\uBA54\uBAA8 \uC5C6\uC74C")}</dd></dl>${record.unresolved ? '<p class="notice">\uC608\uC2DC \uC0C9\uC0C1\uC744 \uBCF4\uC874\uD588\uC2B5\uB2C8\uB2E4. \uC758\uBBF8\uB294 \uC544\uC9C1 \uC9C0\uC815\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.</p>' : ""}${sourceButton(record.source)}${record.local ? `<p class="notice">${record.override ? "\uC2DC\uD2B8 \uC77C\uC815\uC744 \uC571\uC5D0\uC11C \uC62E\uACA8 \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uC2DC\uD2B8\uB294 \uBC14\uB00C\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." : "\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uCD94\uAC00\uD55C \uC77C\uC815\uC785\uB2C8\uB2E4."}</p>` + scheduleActions(record) : ""}`);
}
function renderRoster(content) {
  if (previewMode === "employee") {
    const people2 = rosterRows();
    content.innerHTML = `<section class="panel personal-roster"><div class="panel-heading"><div><h2>${monthText(month)} \uB0B4 \uADFC\uBB34\uD45C</h2><p>${esc13(signedInPerson.name)} \uB2D8 \xB7 \uB0A0\uC9DC\uB97C \uB204\uB974\uBA74 \uC0C1\uC138 \uB0B4\uC6A9\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC5B4\uC694.</p></div></div>${people2.length ? mobileRoster(people2) : empty2("\uC774\uB2EC\uC758 \uADFC\uBB34\uD45C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")}</section>${localRecords("schedule")}`;
    attachDutyPanel(content, rosterRows());
    return;
  }
  const people = rosterRows(), added = allDrafts(), count = new Date(2e3 + Number(month.slice(0, 2)), Number(month.slice(2)), 0).getDate(), days = Array.from({ length: count }, (_3, i3) => i3 + 1);
  content.innerHTML = `<section class="panel"><div class="panel-heading"><div><h2>${monthText(month)} \uADFC\uBB34\uD45C</h2><p>${people.length}\uBA85 \xB7 \uC608\uC2DC \uC0C9\uC0C1\uC744 \uADF8\uB300\uB85C \uBCF4\uC874\uD588\uC5B4\uC694. \uBE48\uCE78\uC740 \uBBF8\uAE30\uC7AC \uC0C1\uD0DC\uC785\uB2C8\uB2E4.</p></div><span class="desktop-roster-hint">${badge("\uAC00\uB85C\uB85C \uC2A4\uD06C\uB864")}</span><span class="mobile-roster-hint">\uC9C1\uC6D0\uC744 \uB20C\uB7EC \uC6D4\uAC04 \uADFC\uBB34\uD45C \uD655\uC778</span></div><div class="table-scroll roster-scroll"><table class="roster-table"><thead><tr><th class="sticky-cell">\uC9C1\uC6D0 / \uD300</th>${days.map((d2) => `<th>${d2}<small>${new Intl.DateTimeFormat("ko-KR", { weekday: "short" }).format(/* @__PURE__ */ new Date(dateOf2(month, d2) + "T12:00:00"))}</small></th>`).join("")}</tr></thead><tbody>${people.map((r3) => `<tr><th class="sticky-cell"><strong>${esc13(r3.name)}</strong><small>${esc13(r3.rawTeam)}${r3.role ? " \xB7 " + esc13(r3.role) : ""}</small></th>${days.map((d2) => `<td>${rosterDayCell(r3, d2, added)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>${mobileRoster(people)}${people.length ? "" : empty2()}</section>${localRecords("schedule")}`;
  attachDutyPanel(content, people);
}
function labelMobileTables(root) {
  root.querySelectorAll(".table-scroll table:not(.roster-table)").forEach((table) => {
    table.classList.add("mobile-card-table");
    const labels = [...table.querySelectorAll("thead th")].map((th) => th.textContent);
    table.querySelectorAll("tbody tr").forEach((row) => [...row.children].forEach((cell, i3) => {
      cell.dataset.label = labels[i3] || "";
      if (cell.querySelector("[data-detail]")) cell.classList.add("mobile-card-action");
    }));
  });
}
function mobileRoster(people) {
  const added = allDrafts();
  return '<div class="mobile-roster">' + people.map((r3, i3) => `<details class="mobile-roster-person" ${i3 === 0 ? "open" : ""}><summary><strong>${esc13(r3.name)}</strong><span>${esc13(r3.rawTeam)}${r3.role ? " \xB7 " + esc13(r3.role) : ""}</span></summary><div class="mobile-roster-month"><div class="daily-weekdays">${["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"].map((w4) => "<span>" + w4 + "</span>").join("")}</div><div class="mobile-roster-days">${calendarDays(month).map((day) => day ? rosterDayCell(r3, day, added, true) : '<span class="mobile-roster-blank"></span>').join("")}</div></div></details>`).join("") + "</div>";
}
function showRosterDay(row, day) {
  const records = allDrafts(), cell = row.days[day], added = addedSchedule(records, row, day), moved = cell ? overrideMap(records).get(sourceIdOf(cell.source)) : null;
  openDialog(esc13(row.name) + " \xB7 " + dateOf2(row.month, day), `${cell ? '<section class="notice"><h3>\uAC00\uC838\uC628 \uC77C\uC815</h3><p>' + swatch(cell.color) + " " + esc13(cell.value || cell.colorMeaning || cell.label || "\uC0C9\uC0C1 \uD45C\uC2DC") + '</p><p class="prewrap">' + esc13(cell.note || "") + "</p>" + (moved ? "<p>\uC571\uC5D0\uC11C <strong>" + esc13(moved.date) + "</strong>\uB85C \uC62E\uACA8 \uD45C\uC2DC \uC911\uC785\uB2C8\uB2E4. \uC2DC\uD2B8\uB294 \uADF8\uB300\uB85C\uC785\uB2C8\uB2E4.</p>" + scheduleActions(moved) : "") + sourceButton(cell.source) + "</section>" : ""}${added.map((r3) => '<section class="daily-record"><h3>' + (r3.override ? swatch(r3.color) + " " : "") + esc13(r3.label) + '</h3><p class="prewrap">' + esc13(r3.note || "\uBA54\uBAA8 \uC5C6\uC74C") + "</p><small>" + (r3.override ? "\uC2DC\uD2B8 \uC77C\uC815 \xB7 \uC6D0\uB798 " + esc13(r3.from) : "\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uB4F1\uB85D\uD55C \uC77C\uC815") + "</small>" + scheduleActions(r3) + "</section>").join("")}`);
}
function schedulePeople(targetMonth) {
  return [...new Map(data.roster.filter((p3) => p3.month === targetMonth).map((p3) => [p3.personId, p3])).values()];
}
function openSchedulePicker(leaveOnly = false) {
  let pickerMonth = month, selectedPerson = previewMode === "employee" ? signedInPerson.personId : "";
  openDialog(leaveOnly ? "\uC9C1\uC6D0 \uD734\uBB34 \uB4F1\uB85D" : "\uC77C\uC815 \uB4F1\uB85D", '<div class="schedule-picker"></div>');
  const dialog = document.querySelector("dialog"), area = dialog.querySelector(".schedule-picker");
  function paint() {
    const people = scheduleCandidates(pickerMonth);
    if (!people.some((p3) => p3.personId === selectedPerson)) selectedPerson = people[0]?.personId || "";
    area.innerHTML = `<div class="schedule-picker-fields"><label>\uC870\uD68C \uC6D4<select data-picker-month>${data.months.map((m3) => '<option value="' + m3 + '" ' + (m3 === pickerMonth ? "selected" : "") + ">" + monthText(m3) + "</option>").join("")}</select></label>${previewMode === "employee" && people.length === 1 ? "<p>" + esc13(signedInPerson.name) + " \uB2D8\uC758 \uC77C\uC815</p>" : "<label>\uC9C1\uC6D0<select data-picker-person>" + people.map((p3) => '<option value="' + esc13(p3.personId) + '" ' + (p3.personId === selectedPerson ? "selected" : "") + ">" + esc13(p3.name) + " \xB7 " + esc13(p3.rawTeam) + "</option>").join("") + "</select></label>"}</div><p>\uB4F1\uB85D\uD560 \uB0A0\uC9DC\uC758 + \uBC84\uD2BC\uC744 \uB20C\uB7EC \uC8FC\uC138\uC694.</p><div class="schedule-picker-calendar">${schedulePickerDays(pickerMonth)}</div>`;
  }
  dialog.addEventListener("change", (event) => {
    if (event.target.hasAttribute("data-picker-month")) {
      pickerMonth = event.target.value;
      paint();
    }
    if (event.target.hasAttribute("data-picker-person")) selectedPerson = event.target.value;
  });
  dialog.addEventListener("click", (event) => {
    const button = event.target.closest("[data-picker-date]");
    if (!button) return;
    event.stopPropagation();
    openEntry("schedule", button.dataset.pickerDate, selectedPerson, leaveOnly);
  });
  paint();
}
function renderTimers(content) {
  const live = employees.flatMap((p3) => {
    const active = readStaffState(localStorage, p3.personId).active.find((r3) => r3.kind === "meal");
    return active ? [{ ...p3, startedAt: active.startedAt, pausedAt: active.pausedAt }] : [];
  }).sort((a3, b3) => a3.startedAt - b3.startedAt);
  content.innerHTML = employeeStatusView({ person: signedInPerson, state: readStaffState(localStorage, signedInPerson.personId), mealPeople: live, transitionFrom: mealTransitionFrom });
  mealTransitionFrom = "";
}
function renderMealManager(content, retainedFeedback = null) {
  const now = Date.now(), ids = [...new Set(data.roster.map((r3) => r3.personId))];
  let states = Object.fromEntries(ids.map((id) => [id, readStaffState(localStorage, id)]));
  if (mealDemo) {
    const base = demoMealRecords(data.roster, month, now);
    states = Object.fromEntries(Object.entries(base).map(([id, record], index4) => {
      const meal = { ...record, active: index4 === 0 ? { id: "demo-meal", startedAt: now - 67 * 6e4 } : null };
      const other = { active: index4 > 0 && index4 < 4 ? { id: "demo-" + index4, kind: ["meal", "rest", "outing", "offsite"][index4], startedAt: now - [0, 12, 25, 83][index4] * 6e4 } : null, history: ["rest", "outing", "offsite"].flatMap((kind, i3) => record.history.map((r3, n2) => {
        const elapsed = ([12, 25, 83][i3] + n2) * 6e4;
        return { ...r3, id: r3.id + "-" + kind, kind, endedAt: r3.startedAt + elapsed, elapsed };
      })) };
      return [id, { meal, other, errors: [] }];
    }));
  }
  const statsByKind = Object.fromEntries(Object.keys(ACTIVITY_TYPES).map((kind) => [kind, buildMealDashboard({ roster: data.roster, records: recordsForActivity(states, kind), month, team, search, now })]));
  const live = Object.entries(statsByKind).flatMap(([kind, stats]) => stats.active.map((r3) => ({ ...r3, kind }))).sort((a3, b3) => a3.startedAt - b3.startedAt);
  const errors = mealPeople(data.roster, month).flatMap((p3) => (states[p3.personId]?.errors || []).map((message) => p3.name + ": " + message));
  content.innerHTML = activityDashboardView({ stats: statsByKind[activityKind], month, kind: activityKind, live, demo: mealDemo, showAll: showAllMealHistory, errors });
  content.insertAdjacentHTML("afterbegin", '<div id="dashboard-feedback"></div>');
  if (retainedFeedback) {
    content.querySelector("#dashboard-feedback").replaceWith(retainedFeedback.node);
    feedbackController = retainedFeedback.controller;
  } else feedbackController = mountFeedbackCollection(content.querySelector("#dashboard-feedback"), { people: employees, toast, dashboard: true, viewState: feedbackViewState });
  content.querySelector(".meal-live-panel").insertAdjacentHTML("afterend", '<div id="dashboard-receipts"></div>');
  receiptController = mountReceipts({ root: content.querySelector("#dashboard-receipts"), month, months: data.months, person: signedInPerson, admin: true, people: mealPeople(data.roster, month), team, search, toast, viewState: receiptViewState, compact: true, roster: data.roster, scheduleRecords: allDrafts, onTeamChange: (value) => {
    team = value;
    render();
  } });
}
function tickTimers() {
  if (!authSession || previewMode !== "admin" || view !== "admin-dashboard" || mealDemo) return;
  for (const el of document.querySelectorAll("[data-live-person]")) {
    const active = readStaffState(localStorage, el.dataset.livePerson).active.find((r3) => r3.kind === el.dataset.liveKind);
    if (!active) {
      render();
      return;
    }
    const state = timerState({ active });
    el.querySelector(".meal-live-elapsed").textContent = clockText(state.elapsed);
    el.querySelector(".meal-live-over").textContent = active.kind === "meal" ? state.over ? "60\uBD84 \uCD08\uACFC " + clockText(state.over) : "\uC2DD\uC0AC \uAE30\uC900 60\uBD84 \uC774\uB0B4" : "\uC2DC\uAC04 \uC81C\uD55C \uC5C6\uC74C";
    el.classList.toggle("is-over", active.kind === "meal" && state.over > 0);
  }
}
function renderMeals(content) {
  const rows = data.mealRows.filter((r3) => matches(r3));
  content.innerHTML = `<section class="panel"><div class="panel-heading"><div><h2>${previewMode === "employee" ? "\uAC00\uC838\uC628 \uB0B4 \uC2DD\uB300 \uB0B4\uC5ED" : "\uAC00\uC838\uC628 \uC9C1\uC6D0\uBCC4 \uC2DD\uB300 \uB0B4\uC5ED"}</h2><p>\uAC00\uC838\uC628 \uC790\uB8CC\uC758 \uC77C\uBCC4 \uBCF4\uAE30\uC785\uB2C8\uB2E4. \uCD94\uAC00 \uC785\uB825\uAE4C\uC9C0 \uD569\uCE5C \uD604\uC7AC \uC0AC\uC6A9\uC561\xB7\uC794\uC561\uC740 \uB9E8 \uC704\uC5D0\uC11C \uD655\uC778\uD574\uC694. 0\uC6D0\uACFC \uBE48\uCE78\uC740 \uAD6C\uBD84\uD569\uB2C8\uB2E4.</p></div></div><div class="table-scroll"><table><thead><tr><th>\uC9C1\uC6D0</th><th>\uC608\uC2DC \uD300</th><th>\uC0AC\uC6A9</th><th>\uD55C\uB3C4</th><th>\uC794\uC561</th><th>\uADFC\uBB34\uC77C\uC218</th><th>\uC785\uAE08 \uC5EC\uBD80</th><th>\uC0C1\uC138</th></tr></thead><tbody>${rows.map((r3) => `<tr><th>${esc13(r3.name)}${r3.identityNeedsReview ? badge("\uC774\uB984\xB7\uD300 \uD655\uC778", "subtle") : ""}</th><td>${esc13(r3.rawTeam)}</td>${["\uC0AC\uC6A9", "\uD55C\uB3C4", "\uC794\uC561", "\uADFC\uBB34\uC77C\uC790", "\uC785\uAE08\uC5EC\uBD80"].map((label) => `<td>${esc13(display(r3.totals[label]?.value))}</td>`).join("")}<td><button data-detail="${esc13(r3.id)}" data-kind="meals">\uC77C\uBCC4 \uBCF4\uAE30</button></td></tr>`).join("")}</tbody></table></div>${rows.length ? "" : empty2()}</section>${localRecords("meals")}`;
  content.insertAdjacentHTML("afterbegin", '<div id="meal-budget"></div><div id="receipt-area"></div>');
  const budgetRoot = content.querySelector("#meal-budget");
  function updateBudget(receipts, unavailable = false) {
    const selectedId = previewMode === "admin" ? receiptViewState.staffId : "", sourceRows = selectedId ? rows.filter((r3) => r3.personId === selectedId) : rows, legacy = localRows("meals").filter((r3) => !selectedId || r3.personId === selectedId), budget = mealBudget(sourceRows, [...legacy, ...receipts]), money = (v3) => v3 === null ? "\uD655\uC778 \uD544\uC694" : number(v3) + "\uC6D0";
    budgetRoot.innerHTML = `<div class="metrics meal-budget">${metric2(previewMode === "employee" ? "\uC774\uBC88 \uB2EC \uB0B4 \uD55C\uB3C4" : "\uC870\uD68C \uC9C1\uC6D0 \uD55C\uB3C4", money(budget.limit))}${metric2("\uC0AC\uC6A9\uC561", unavailable ? "\uBD88\uB7EC\uC624\uAE30 \uD544\uC694" : money(budget.used), "\uAC00\uC838\uC628 \uB0B4\uC5ED + \uCD94\uAC00 \uAE30\uB85D")}${metric2("\uB0A8\uC740 \uC794\uC561", unavailable ? "\uBD88\uB7EC\uC624\uAE30 \uD544\uC694" : money(budget.remaining), "\uAE30\uC900 \uC794\uC561\uC5D0\uC11C \uCD94\uAC00 \uC0AC\uC6A9\uC561 \uCC28\uAC10")}</div><p class="budget-note">\uAC00\uC838\uC628 \uC0AC\uC6A9\uC561 ${money(budget.sourceUsed)} \xB7 \uCD94\uAC00 \uC785\uB825 ${number(budget.additional)}\uC6D0. \uC0AC\uC6A9 \uD55C\uB3C4\uAC00 \uC5C6\uB294 \uC6D4\uC740 \uD655\uC778 \uD544\uC694\uB85C \uD45C\uC2DC\uD569\uB2C8\uB2E4.</p>`;
  }
  updateBudget([], true);
  receiptController = mountReceipts({ root: content.querySelector("#receipt-area"), month, months: data.months, person: signedInPerson, admin: previewMode === "admin", people: mealPeople(data.roster, month), team, search, toast, viewState: receiptViewState, roster: data.roster, scheduleRecords: allDrafts, onRows: (rows2) => updateBudget(rows2), onLoadError: () => updateBudget([], true), onTeamChange: (value) => {
    team = value;
    render();
  } });
}
function renderAttendance(content) {
  const rows = data.otRows.filter((r3) => matches(r3)), labels = [...new Set(rows.flatMap((r3) => r3.categories.map((c3) => c3.label)))];
  content.innerHTML = `<section class="panel"><div class="panel-heading"><div><h2>OT\xB7\uC9C0\uAC01 \uD604\uD669</h2><p>${rows.length}\uBA85 \xB7 \uC2DC\uAC04 \uB2E8\uC704\uB294 \uBD84\uC785\uB2C8\uB2E4. \uC774\uC6D4\xB7\uC0AC\uC6A9\xB7\uC9C0\uAC01\xB7\uB9C8\uAC10\uC758 \uC608\uC2DC \uBD80\uD638\uB97C \uADF8\uB300\uB85C \uC720\uC9C0\uD569\uB2C8\uB2E4.</p></div>${badge("\uB2E8\uC704: \uBD84")}</div><div class="table-scroll"><table><thead><tr><th>\uC9C1\uC6D0 / \uC608\uC2DC \uD300</th>${labels.map((l3) => `<th>${esc13(l3)}</th>`).join("")}<th>\uC0C1\uC138</th></tr></thead><tbody>${rows.map((r3) => `<tr><th>${esc13(r3.name)}<small>${esc13(r3.rawTeam)}</small>${r3.identityNeedsReview ? badge("\uC774\uB984\xB7\uD300 \uD655\uC778", "subtle") : ""}</th>${labels.map((l3) => `<td>${esc13(display(r3.categories.find((c3) => c3.label === l3)?.total))}</td>`).join("")}<td><button data-detail="${esc13(r3.id)}" data-kind="attendance">\uC77C\uBCC4 \uBCF4\uAE30</button></td></tr>`).join("")}</tbody></table></div>${rows.length ? "" : empty2()}</section>${localRecords("attendance")}`;
}
function localRecords(kind) {
  const rows = kind === "schedule" ? scheduleGroups(localRows(kind)) : localRows(kind);
  return `<section class="panel local-records"><div class="panel-heading"><div><h2>\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uCD94\uAC00\uD55C \uAE30\uB85D</h2><p>\uAC00\uC838\uC628 \uC608\uC2DC \uD569\uACC4\uC640 \uAD6C\uBD84\uD574 \uD45C\uC2DC\uD569\uB2C8\uB2E4.</p></div>${badge(`${rows.length}\uAC74`)}</div>${rows.length ? `<div class="table-scroll"><table><thead><tr><th>\uB0A0\uC9DC</th><th>\uC9C1\uC6D0</th><th>\uB0B4\uC6A9</th><th>\uBA54\uBAA8</th>${kind === "schedule" ? "<th>\uAD00\uB9AC</th>" : ""}</tr></thead><tbody>${rows.map((r3) => `<tr><td>${esc13(kind === "schedule" ? r3.override ? `${r3.from} \u2192 ${r3.date}` : scheduleSpan(r3) : r3.date)}</td><th>${esc13(r3.name)}</th><td>${esc13(r3.label)}${r3.override ? " \xB7 \uC2DC\uD2B8 \uC77C\uC815 \uC62E\uAE40" : ""}${r3.amount !== void 0 ? " \xB7 " + esc13(number(r3.amount)) + (kind === "meals" ? "\uC6D0" : "\uBD84") : ""}</td><td class="prewrap">${esc13(r3.note)}</td>${kind === "schedule" ? `<td>${scheduleActions(r3) || "\u2014"}</td>` : ""}</tr>`).join("")}</tbody></table></div>` : empty2("\uCD94\uAC00\uD55C \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.")}</section>`;
}
function showDetail(kind, id) {
  const rows = (kind === "meals" ? data.mealRows : data.otRows).filter((r3) => previewMode === "admin" || r3.personId === signedInPerson.personId), initialRow = rows.find((r3) => r3.id === id);
  if (!initialRow) return;
  let localRecords2 = [];
  try {
    localRecords2 = readDraft();
  } catch (error) {
    toast(error.message);
  }
  dialogVersion++;
  openDailyDetail({ kind, initialRow, rows, months: data.months, localRecords: localRecords2, readRecords: readDraft, storageKey: LOCAL_KEY });
}
function openDialog(title, body) {
  dialogVersion++;
  const container = document.querySelector("#overlays");
  container.querySelector("dialog")?.close();
  container.innerHTML = `<dialog aria-labelledby="dialog-title"><div class="dialog-heading"><h2 id="dialog-title">${esc13(title)}</h2><button data-action="close" aria-label="\uB2EB\uAE30">\uB2EB\uAE30 \u2715</button></div><div class="dialog-body">${body}</div></dialog>`;
  const dialog = container.querySelector("dialog");
  dialog.showModal();
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      const r3 = dialog.getBoundingClientRect();
      if (event.clientX < r3.left || event.clientX > r3.right || event.clientY < r3.top || event.clientY > r3.bottom) dialog.close();
    }
  });
  return dialog;
}
async function rawData(source) {
  const key = `${source.book}-${source.tab}`;
  if (rawCache.has(key)) return rawCache.get(key);
  const meta = data.sources.find((s3) => s3.book === source.book && s3.tab === source.tab);
  if (!meta) throw new Error("\uD574\uB2F9 \uC608\uC2DC \uD0ED\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
  const response = await fetch(`./source-data/${encodeURIComponent(meta.file)}`);
  if (!response.ok) throw new Error(`\uC608\uC2DC \uC790\uB8CC\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4 (${response.status}).`);
  const raw = await response.json();
  rawCache.set(key, raw);
  return raw;
}
function rawColor(raw, coord) {
  const cell = raw.cells[coord], style = raw.styles[raw.colored[coord] ?? cell?.s];
  return raw.effectiveColors?.[coord] || style?.resolvedFill || style?.fill?.rgb?.slice(-6) || "";
}
async function showSource(source) {
  openDialog(`${source.tab} \xB7 ${source.cell}`, "<p>\uC608\uC2DC \uC140\uC744 \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4\u2026</p>");
  const version = dialogVersion;
  try {
    const raw = await rawData(source);
    if (version !== dialogVersion) return;
    const cell = raw.cells[source.cell], color = rawColor(raw, source.cell), meta = data.sources.find((s3) => s3.book === source.book && s3.tab === source.tab);
    document.querySelector(".dialog-body").innerHTML = `<p>${esc13(meta.label)} / ${esc13(source.tab)} / ${esc13(source.cell)}</p><dl><dt>\uC608\uC2DC \uAC12</dt><dd class="prewrap">${esc13(display(cell?.v))}</dd><dt>\uC608\uC2DC \uC0C9\uC0C1</dt><dd>${swatch(color)} ${esc13(color ? "#" + color : "\uC9C0\uC815 \uC5C6\uC74C")}</dd><dt>\uC218\uC2DD</dt><dd class="prewrap">${esc13(cell?.f || "\uC5C6\uC74C")}</dd><dt>\uBA54\uBAA8</dt><dd class="prewrap">${esc13(cell?.note || "\uC5C6\uC74C")}</dd></dl><a class="button" href="${esc13(meta.url)}" target="_blank" rel="noopener noreferrer">\uAC80\uC218 \uC548\uB0B4 \uBCF4\uAE30 \u2197</a>`;
  } catch (error) {
    if (version === dialogVersion) document.querySelector(".dialog-body").textContent = error.message;
  }
}
function renderSources(content) {
  const review = [...data.mealRows, ...data.otRows].filter((r3) => r3.identityNeedsReview && matches(r3)), issues = data.issues.filter((issue) => data.mealRows.some((r3) => matches(r3) && r3.source.book === issue.source.book && r3.source.tab === issue.source.tab && r3.source.cell === issue.source.cell));
  content.innerHTML = `<div class="metrics">${metric2("\uC608\uC2DC \uC804\uCCB4", `${data.audit.tabs}\uAC1C \uD0ED`, "\uC2A4\uCF00\uC904 12 \xB7 \uC2DD\uB300 13 \xB7 OT/\uC9C0\uAC01 12")}${metric2("\uBCF4\uC874\uD55C \uC140", `${number(data.audit.importedCells)}\uAC1C`, "\uC608\uC2DC\uC640 \uC140 \uAC12 \uC77C\uCE58 \uAC80\uC0AC \uC644\uB8CC")}${metric2("\uBA54\uBAA8 / \uC218\uC2DD", `${number(data.audit.notes)} / ${number(data.audit.formulas)}`, "\uC608\uC2DC XLSX\uC640 \uCD9C\uCC98 \uC88C\uD45C \uBCF4\uC874")}</div><section class="panel"><div class="panel-heading"><div><h2>\uC5F0\uACB0\xB7\uD569\uACC4 \uD655\uC778</h2><p>\uC120\uD0DD\uD55C \uC6D4\xB7\uD300\uC758 \uD655\uC778 \uD56D\uBAA9\uC785\uB2C8\uB2E4. \uD655\uC778 \uC804\uC5D0\uB294 \uC608\uC2DC\uC744 \uADF8\uB300\uB85C \uC720\uC9C0\uD569\uB2C8\uB2E4.</p></div></div>${issues.map((i3) => `<div class="notice">${esc13(i3.name)} \xB7 ${esc13(i3.kind)}: \uC608\uC2DC ${number(i3.sourceTotal)}\uC6D0 / \uC77C\uBCC4 \uD569 ${number(i3.dailySum)}\uC6D0 ${sourceButton(i3.source)}</div>`).join("")}${review.length ? `<div class="review-list">${review.map((r3) => `<span>${esc13(r3.name)} \xB7 ${esc13(r3.rawTeam)} ${sourceButton(r3.source, "\uC774\uB984\xB7\uD300 \uD655\uC778")}</span>`).join("")}</div>` : empty2("\uC774 \uC870\uAC74\uC5D0\uC11C \uC774\uB984\xB7\uD300 \uC5F0\uACB0 \uD655\uC778 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.")}<p class="panel-foot">\uC608\uC2DC \uC0C9\uC0C1\uC740 \uBAA8\uB450 \uBCF4\uC874\uD588\uC2B5\uB2C8\uB2E4. \uBC94\uB840\uC640 \uC77C\uCE58\uD558\uC9C0 \uC54A\uB294 \uC0C9\uC740 \uC758\uBBF8\uB97C \uC784\uC758 \uC9C0\uC815\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.</p></section><section class="panel"><div class="panel-heading"><div><h2>\uC608\uC2DC \uD0ED \uC804\uCCB4 \uBCF4\uAE30</h2><p>\uC774 \uC601\uC5ED\uC740 \uD300 \uD544\uD130 \uC5C6\uC774 \uC120\uD0DD\uD55C \uD0ED \uC804\uCCB4\uB97C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. \uD45C \uC544\uB798\uC758 \uCD94\uAC00 \uAE30\uB85D\uB3C4 \uD3EC\uD568\uD569\uB2C8\uB2E4.</p></div></div><div class="source-controls"><label>\uC608\uC2DC<select id="source-book">${[["schedule", "\uC2A4\uCF00\uC904"], ["meals", "\uC2DD\uB300"], ["attendance", "OT/\uC9C0\uAC01"]].map(([k3, l3]) => `<option value="${k3}" ${sourceBook === k3 ? "selected" : ""}>${l3}</option>`).join("")}</select></label><label>\uD0ED<select id="source-tab">${data.sources.filter((s3) => s3.book === sourceBook).map((s3) => `<option value="${s3.tab}" ${(sourceTab || month) === s3.tab ? "selected" : ""}>${esc13(s3.tab === "\uCC38\uACE0\uC6A9" ? "\uCC38\uACE0\uC6A9" : monthText(s3.tab))}</option>`).join("")}</select></label><label>\uC140\xB7\uB0B4\uC6A9 \uAC80\uC0C9<input id="source-query" value="${esc13(sourceQuery)}" placeholder="\uC608: A320 \uB610\uB294 \uC9C1\uC6D0 \uC774\uB984" maxlength="100"></label><button data-action="source-search">\uAC80\uC0C9</button></div><div id="raw-table">\uC608\uC2DC\uC744 \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4\u2026</div></section>`;
  loadRawTable();
}
function coordSort(a3, b3) {
  const row = (s3) => Number(s3.match(/\d+$/)?.[0]), col = (s3) => s3.match(/^[A-Z]+/)?.[0] || "";
  return row(a3) - row(b3) || col(a3).length - col(b3).length || col(a3).localeCompare(col(b3));
}
async function loadRawTable() {
  const version = renderVersion, source = { book: sourceBook, tab: sourceTab || month }, token = ++loadRawTable.token;
  try {
    const raw = await rawData(source);
    if (version !== renderVersion || token !== loadRawTable.token) return;
    const coords = [.../* @__PURE__ */ new Set([...Object.keys(raw.cells), ...Object.keys(raw.colored), ...Object.keys(raw.effectiveColors || {})])].sort(coordSort).filter((coord) => !sourceQuery || coord.toLowerCase() === sourceQuery.toLowerCase() || [raw.cells[coord]?.v, raw.cells[coord]?.f, raw.cells[coord]?.note].some((value) => String(value ?? "").includes(sourceQuery)));
    const pageSize = 60, pages = Math.max(1, Math.ceil(coords.length / pageSize));
    sourcePage = Math.min(sourcePage, pages - 1);
    document.querySelector("#raw-table").innerHTML = `<div class="raw-summary"><span>\uAC80\uC0C9 ${number(coords.length)}\uC140 \xB7 ${sourcePage + 1} / ${pages}\uCABD</span><div><button data-action="raw-prev" ${sourcePage === 0 ? "disabled" : ""}>\uC774\uC804</button><button data-action="raw-next" ${sourcePage + 1 >= pages ? "disabled" : ""}>\uB2E4\uC74C</button></div></div><div class="table-scroll"><table class="raw-table"><thead><tr><th>\uC140</th><th>\uC608\uC2DC \uAC12</th><th>\uC0C9\uC0C1</th><th>\uC218\uC2DD</th><th>\uBA54\uBAA8</th></tr></thead><tbody>${coords.slice(sourcePage * pageSize, (sourcePage + 1) * pageSize).map((coord) => {
      const c3 = raw.cells[coord];
      return `<tr><th>${sourceButton({ ...source, cell: coord }, coord)}</th><td class="prewrap">${esc13(display(c3?.v))}</td><td>${swatch(rawColor(raw, coord))}</td><td class="prewrap">${esc13(c3?.f || "\u2014")}</td><td class="prewrap">${esc13(c3?.note || "\u2014")}</td></tr>`;
    }).join("")}</tbody></table></div>${coords.length ? "" : empty2()}`;
    labelMobileTables(document.querySelector("#raw-table"));
  } catch (error) {
    if (version === renderVersion && token === loadRawTable.token) document.querySelector("#raw-table").textContent = error.message;
  }
}
loadRawTable.token = 0;
function openEntry(kind = view === "meals" ? "meals" : view === "attendance" ? "attendance" : "schedule", date, personId = "", leaveOnly = false, editing = null) {
  const defaultDate = date || (monthOf2(today2()) === month ? today2() : dateOf2(month)), people = kind === "schedule" ? scheduleCandidates(monthOf2(defaultDate)) : previewMode === "employee" ? [signedInPerson] : schedulePeople(monthOf2(defaultDate));
  if (!people.length) {
    toast("\uC120\uD0DD\uD55C \uC870\uAC74\uC758 \uC2A4\uCF00\uC904 \uBA85\uBD80\uC5D0 \uC9C1\uC6D0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uD300\xB7\uAC80\uC0C9 \uC870\uAC74\uC744 \uBCC0\uACBD\uD574 \uC8FC\uC138\uC694.");
    return;
  }
  const fixed = editing ? people.find((p3) => p3.personId === editing.personId) : previewMode === "employee" && (kind !== "schedule" || people.length === 1) ? signedInPerson : null;
  if (editing && !fixed) {
    toast("\uC774 \uC77C\uC815\uC744 \uC218\uC815\uD560 \uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    return;
  }
  const minDate = dateOf2(data.months[0]), maxDate = dateOf2(data.months.at(-1), lastDay(data.months.at(-1))), labels = leaveOnly ? ["\uD734\uBB34", "\uC5F0\uCC28", "\uC624\uC804 \uBC18\uCC28", "\uC624\uD6C4 \uBC18\uCC28"] : ["\uD734\uBB34", "\uC5F0\uCC28", "\uC624\uC804 \uBC18\uCC28", "\uC624\uD6C4 \uBC18\uCC28", "\uADFC\uBB34", "\uD300 \uC77C\uC815", "\uAE30\uD0C0"];
  openDialog(editing ? "\uC77C\uC815 \uC218\uC815" : `${leaveOnly ? "\uC9C1\uC6D0 \uD734\uBB34" : kind === "schedule" ? "\uC77C\uC815" : kind === "meals" ? "\uC2DD\uB300" : "OT\xB7\uC9C0\uAC01"} \uB4F1\uB85D`, `<form id="entry-form" data-kind="${kind}" data-group="${esc13(editing?.groupId || "")}"><div class="form-grid">${fixed ? `<label>\uC9C1\uC6D0<input value="${esc13(fixed.name)}" readonly><input type="hidden" name="person" value="${esc13(fixed.personId)}"></label>` : `<label>\uC9C1\uC6D0<select name="person" required>${people.map((r3) => `<option value="${esc13(r3.personId)}">${esc13(r3.name)} \xB7 ${esc13(r3.rawTeam)}</option>`).join("")}</select></label>`}<label>${kind === "schedule" ? "\uC2DC\uC791\uC77C" : "\uB0A0\uC9DC"}<input name="date" type="date" value="${defaultDate}" required min="${minDate}" max="${maxDate}"></label>${kind === "schedule" ? `<label>\uC885\uB8CC\uC77C<input name="end" type="date" value="${editing?.end || defaultDate}" required min="${defaultDate}" max="${maxDate}"></label><label>\uC77C\uC815<select name="label">${labels.map((l3) => `<option ${l3 === editing?.label ? "selected" : ""}>${l3}</option>`).join("")}</select></label>` : kind === "attendance" ? '<label>\uAD6C\uBD84<select name="label"><option>OT</option><option>\uACF5\uD734\uC77C OT</option><option>OT \uC0AC\uC6A9</option><option>\uC9C0\uAC01</option><option>\uC870\uC815</option></select></label>' : ""}${kind !== "schedule" ? `<label>${kind === "meals" ? "\uAE08\uC561 (\uC6D0)" : "\uC2DC\uAC04 (\uBD84)"}<input name="amount" type="number" required min="${kind === "meals" ? 0 : -1e6}" max="100000000" step="1" inputmode="numeric"></label>` : ""}<label class="full">\uBA54\uBAA8<textarea name="note" rows="3" maxlength="2000" placeholder="\uD544\uC694\uD55C \uB0B4\uC6A9\uC744 \uB0A8\uACA8 \uC8FC\uC138\uC694.">${esc13(editing?.note || "")}</textarea></label></div><p class="notice">${kind === "schedule" ? "\uD558\uB8E8\uB9CC \uB4F1\uB85D\uD558\uB824\uBA74 \uC885\uB8CC\uC77C\uC744 \uC2DC\uC791\uC77C\uACFC \uAC19\uAC8C \uB450\uC138\uC694. " : ""}\uAC00\uC838\uC628 \uC608\uC2DC\uC640 \uAD6C\uBD84\uD574 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uD569\uB2C8\uB2E4.${kind === "attendance" ? " OT \uC0AC\uC6A9\xB7\uC9C0\uAC01\uC740 \uC591\uC218\uB85C \uC785\uB825\uD574\uB3C4 \uC74C\uC218\uB85C \uAE30\uB85D\uD569\uB2C8\uB2E4." : ""}</p><div class="form-actions"><button type="button" data-action="close">\uCDE8\uC18C</button><button class="primary" type="submit">${editing ? "\uC800\uC7A5\uD558\uAE30" : "\uB4F1\uB85D\uD558\uAE30"}</button></div><p class="form-error" role="alert"></p></form>`);
  if (personId && people.some((p3) => p3.personId === personId)) {
    const field = document.querySelector("#entry-form [name=person]");
    if (field) field.value = personId;
  }
}
document.addEventListener("submit", async (event) => {
  if (event.target.id !== "entry-form" || !authSession) return;
  const revision = sessionRevision;
  event.preventDefault();
  const form = event.target, button = form.querySelector("[type=submit]");
  if (button.disabled) return;
  button.disabled = true;
  try {
    const values = new FormData(form), kind = form.dataset.kind, date = String(values.get("date"));
    if (!/^20\d{2}-\d{2}-\d{2}$/.test(date) || localDate(/* @__PURE__ */ new Date(date + "T12:00:00")) !== date) throw new Error("\uB0A0\uC9DC\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
    if (!data.months.includes(monthOf2(date))) throw new Error("\uC870\uD68C \uAC00\uB2A5\uD55C \uC6D4\uC758 \uB0A0\uC9DC\uB85C \uB4F1\uB85D\uD574 \uC8FC\uC138\uC694.");
    const person = kind === "schedule" ? scheduleCandidates(monthOf2(date)).find((p3) => p3.personId === values.get("person")) : previewMode === "employee" ? values.get("person") === signedInPerson.personId ? signedInPerson : null : schedulePeople(monthOf2(date)).find((p3) => p3.personId === values.get("person"));
    if (!person) throw new Error("\uD574\uB2F9 \uC6D4\uC758 \uC9C1\uC6D0\uC744 \uB2E4\uC2DC \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");
    const label = String(values.get("label") || (kind === "meals" ? "\uC2DD\uB300" : ""));
    let amount = kind === "schedule" ? void 0 : Number(values.get("amount"));
    if (kind !== "schedule" && (!Number.isSafeInteger(amount) || Math.abs(amount) > 1e8 || kind === "meals" && amount < 0)) throw new Error("\uAE08\uC561 \uB610\uB294 \uC2DC\uAC04\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
    if (kind === "attendance" && ["OT \uC0AC\uC6A9", "\uC9C0\uAC01"].includes(label)) amount = -Math.abs(amount);
    const end = kind === "schedule" ? String(values.get("end") || date) : date;
    if (kind === "schedule") {
      if (!/^20\d{2}-\d{2}-\d{2}$/.test(end) || localDate(/* @__PURE__ */ new Date(end + "T12:00:00")) !== end || end < date) throw new Error("\uC885\uB8CC\uC77C\uC740 \uC2DC\uC791\uC77C\uACFC \uAC19\uAC70\uB098 \uC774\uD6C4\uC5EC\uC57C \uD569\uB2C8\uB2E4.");
      if (!data.months.includes(monthOf2(end))) throw new Error("\uC870\uD68C \uAC00\uB2A5\uD55C \uC6D4\uC758 \uB0A0\uC9DC\uB85C \uB4F1\uB85D\uD574 \uC8FC\uC138\uC694.");
    }
    const group = form.dataset.group || "", note = String(values.get("note")).trim(), createdAt = (/* @__PURE__ */ new Date()).toISOString();
    const rows = kind === "schedule" ? scheduleRows({ person, start: date, end, label, note, groupId: group || crypto.randomUUID(), createdAt }, () => crypto.randomUUID()) : [{ id: crypto.randomUUID(), kind, personId: person.personId, name: person.name, teams: person.teams, rawTeam: person.rawTeam, date, month: monthOf2(date), label, note, amount, local: true, createdAt }];
    await saveDraft(rows, () => {
      if (revision !== sessionRevision || !authSession) throw new Error("\uB85C\uADF8\uC778 \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB410\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uB85C\uADF8\uC778\uD574 \uC8FC\uC138\uC694.");
      if (kind === "schedule" && !scheduleCandidates(monthOf2(date)).some((p3) => p3.personId === person.personId)) throw new Error("\uD300 \uC77C\uC815 \uB4F1\uB85D \uAD8C\uD55C\uC774 \uBCC0\uACBD\uB410\uC2B5\uB2C8\uB2E4. \uC9C1\uC6D0\uC744 \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
    }, group);
    if (revision !== sessionRevision) return;
    month = monthOf2(date);
    document.querySelector("dialog")?.close();
    render();
    toast(group ? "\uC77C\uC815\uC744 \uC218\uC815\uD588\uC2B5\uB2C8\uB2E4." : "\uB4F1\uB85D\uD588\uC2B5\uB2C8\uB2E4.");
  } catch (error) {
    form.querySelector(".form-error").textContent = error.message;
  } finally {
    button.disabled = false;
  }
});
document.addEventListener("click", async (event) => {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.action === "retry") {
    location.reload();
    return;
  }
  if (target.dataset.action === "logout") {
    changeSession(null);
    return;
  }
  if (!authSession) return;
  const revision = sessionRevision;
  if (target.dataset.scheduleAdd) {
    openEntry("schedule", target.dataset.scheduleAdd, target.dataset.schedulePerson);
    return;
  }
  if (target.dataset.scheduleEdit) {
    const group = scheduleGroups(allDrafts()).find((g4) => g4.groupId === target.dataset.scheduleEdit);
    if (!group || !canEditSchedule(group)) {
      toast("\uC218\uC815\uD560 \uC218 \uC788\uB294 \uC77C\uC815\uC774 \uC544\uB2D9\uB2C8\uB2E4.");
      return;
    }
    openEntry("schedule", group.start, group.personId, false, group);
    return;
  }
  if (target.dataset.scheduleDelete) {
    const group = scheduleGroups(allDrafts()).find((g4) => g4.groupId === target.dataset.scheduleDelete);
    if (!group || !canEditSchedule(group)) {
      toast("\uC0AD\uC81C\uD560 \uC218 \uC788\uB294 \uC77C\uC815\uC774 \uC544\uB2D9\uB2C8\uB2E4.");
      return;
    }
    openDialog("\uC77C\uC815 \uC0AD\uC81C", `<p>${esc13(group.name)} \xB7 ${esc13(group.label)} \xB7 ${esc13(scheduleSpan(group))}</p><p>\uC774 \uC77C\uC815\uC744 \uC0AD\uC81C\uD560\uAE4C\uC694? \uC0AD\uC81C\uD55C \uC77C\uC815\uC740 \uB418\uB3CC\uB9B4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</p><div class="form-actions"><button type="button" data-action="close">\uCDE8\uC18C</button><button type="button" class="primary" data-schedule-delete-confirm="${esc13(group.groupId)}">\uC0AD\uC81C\uD558\uAE30</button></div>`);
    return;
  }
  if (target.dataset.scheduleRevert) {
    const id = target.dataset.scheduleRevert;
    target.disabled = true;
    try {
      await removeDraftGroup(id, () => {
        if (revision !== sessionRevision || !authSession) throw new Error("\uB85C\uADF8\uC778 \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB410\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uB85C\uADF8\uC778\uD574 \uC8FC\uC138\uC694.");
        const g4 = scheduleGroups(readDraft()).find((x4) => x4.groupId === id);
        if (g4 && !canEditSchedule(g4)) throw new Error("\uB418\uB3CC\uB9B4 \uAD8C\uD55C\uC774 \uBCC0\uACBD\uB410\uC2B5\uB2C8\uB2E4.");
      });
      if (revision !== sessionRevision) return;
      document.querySelector("dialog")?.close();
      render();
      toast("\uC6D0\uB798 \uB0A0\uC9DC\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4.");
    } catch (e3) {
      if (revision === sessionRevision) toast(e3.message);
    } finally {
      target.disabled = false;
    }
    return;
  }
  if (target.dataset.scheduleDeleteConfirm) {
    const id = target.dataset.scheduleDeleteConfirm;
    target.disabled = true;
    try {
      await removeDraftGroup(id, () => {
        if (revision !== sessionRevision || !authSession) throw new Error("\uB85C\uADF8\uC778 \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB410\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uB85C\uADF8\uC778\uD574 \uC8FC\uC138\uC694.");
        const g4 = scheduleGroups(readDraft()).find((x4) => x4.groupId === id);
        if (g4 && !canEditSchedule(g4)) throw new Error("\uC77C\uC815 \uC0AD\uC81C \uAD8C\uD55C\uC774 \uBCC0\uACBD\uB410\uC2B5\uB2C8\uB2E4.");
      });
      if (revision !== sessionRevision) return;
      document.querySelector("dialog")?.close();
      render();
      toast("\uC77C\uC815\uC744 \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4.");
    } catch (e3) {
      if (revision === sessionRevision) toast(e3.message);
    } finally {
      target.disabled = false;
    }
    return;
  }
  if (target.dataset.rosterRow) {
    const row = data.roster.find((r3) => r3.id === target.dataset.rosterRow);
    if (row && (!personalView() || row.personId === signedInPerson.personId)) showRosterDay(row, Number(target.dataset.rosterDay));
    return;
  }
  if (target.dataset.source) {
    await showSource(JSON.parse(target.dataset.source));
    return;
  }
  if (target.dataset.detail) {
    showDetail(target.dataset.kind, target.dataset.detail);
    return;
  }
  if (target.dataset.staffKind || target.dataset.adminEndConfirm) {
    const admin = !!target.dataset.adminEndConfirm, id = admin ? target.dataset.personId : signedInPerson.personId, kind = admin ? target.dataset.adminEndConfirm : target.dataset.staffKind, action = admin ? "end" : target.dataset.staffAction;
    if (admin ? previewMode !== "admin" || view !== "admin-dashboard" || mealDemo || !data.roster.some((p3) => p3.personId === id) : view !== "meal-timer" || previewMode !== "employee") return;
    if (!admin && kind !== "meal" && action !== "end") return;
    if (pendingMeals.has(id)) return;
    pendingMeals.add(id);
    target.disabled = true;
    if (!admin && kind === "meal") {
      const before = readStaffState(localStorage, id).active.find((r3) => r3.kind === "meal");
      mealTransitionFrom = !before ? "off" : Number.isFinite(before.pausedAt) ? "paused" : "on";
    }
    try {
      await updateStaffActivity(localStorage, id, kind, action, navigator.locks, () => Date.now(), action !== "start" ? target.dataset.expectedActive : void 0);
      if (revision !== sessionRevision) return;
      mealDemo = false;
      if (admin) document.querySelector("dialog")?.close();
      if (["meal-timer", "admin-dashboard"].includes(view)) render();
      toast(ACTIVITY_TYPES[kind].label + objectParticle(ACTIVITY_TYPES[kind].label) + { start: " \uC2DC\uC791\uD588\uC2B5\uB2C8\uB2E4.", end: " \uC885\uB8CC\uD588\uC2B5\uB2C8\uB2E4.", pause: " \uC911\uB2E8\uD588\uC2B5\uB2C8\uB2E4.", resume: " \uB2E4\uC2DC \uC2DC\uC791\uD588\uC2B5\uB2C8\uB2E4." }[action]);
    } catch (e3) {
      mealTransitionFrom = "";
      if (revision === sessionRevision) toast(e3.message);
    } finally {
      pendingMeals.delete(id);
      target.disabled = false;
    }
    return;
  }
  if (target.dataset.adminEnd) {
    if (previewMode !== "admin" || mealDemo) return;
    const p3 = mealPeople(data.roster, month).find((r3) => r3.personId === target.dataset.personId), kind = target.dataset.adminEnd;
    if (!p3 || !ACTIVITY_TYPES[kind]) return;
    openDialog("\uC0C1\uD0DC \uC885\uB8CC \uCC98\uB9AC", `<p>${esc13(p3.name)} \uB2D8\uC758 ${ACTIVITY_TYPES[kind].label}\uC744 \uC9C0\uAE08 \uC2DC\uAC01\uC73C\uB85C \uC885\uB8CC\uD560\uAE4C\uC694?</p><div class="form-actions"><button data-action="close">\uCDE8\uC18C</button><button class="primary" data-admin-end-confirm="${kind}" data-expected-active="${esc13(target.dataset.activeId)}" data-person-id="${esc13(p3.personId)}">\uC885\uB8CC \uAE30\uB85D\uD558\uAE30</button></div>`);
    return;
  }
  if (target.dataset.calendarTab) {
    if (["roster", "leave", "status"].includes(target.dataset.calendarTab)) {
      calendarTab = target.dataset.calendarTab;
      render();
    }
    return;
  }
  if (target.dataset.activityTab) {
    if (ACTIVITY_TYPES[target.dataset.activityTab]) {
      activityKind = target.dataset.activityTab;
      showAllMealHistory = false;
      render();
    }
    return;
  }
  switch (target.dataset.action) {
    case "receipt-new":
      receiptController?.newEntry();
      break;
    case "meal-demo":
      mealDemo = !mealDemo;
      showAllMealHistory = false;
      render();
      break;
    case "meal-history-all":
      showAllMealHistory = !showAllMealHistory;
      render();
      break;
    case "retry":
      location.reload();
      break;
    case "close":
      document.querySelector("dialog")?.close();
      dialogVersion++;
      break;
    case "staff-leave":
      openSchedulePicker(true);
      break;
    case "new":
      if (["team-calendar", "roster"].includes(view)) openSchedulePicker();
      else openEntry();
      break;
    case "source-search":
      sourceQuery = document.querySelector("#source-query").value.trim();
      sourcePage = 0;
      loadRawTable();
      break;
    case "raw-prev":
      sourcePage = Math.max(0, sourcePage - 1);
      loadRawTable();
      break;
    case "raw-next":
      sourcePage++;
      loadRawTable();
      break;
  }
});
document.addEventListener("change", (event) => {
  if (!authSession) return;
  if (event.target.matches("#entry-form [name=date]")) {
    const end = document.querySelector("#entry-form [name=end]");
    if (end) {
      end.min = event.target.value;
      if (end.value < event.target.value) end.value = event.target.value;
    }
  }
  if (event.target.matches("#entry-form [name=date]") && document.querySelector("#entry-form select[name=person]")) {
    const select = document.querySelector("#entry-form [name=person]"), selected = select.value, people = document.querySelector("#entry-form").dataset.kind === "schedule" ? scheduleCandidates(monthOf2(event.target.value)) : schedulePeople(monthOf2(event.target.value));
    select.innerHTML = '<option value="">\uC9C1\uC6D0\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694</option>' + people.map((p3) => '<option value="' + esc13(p3.personId) + '">' + esc13(p3.name) + " \xB7 " + esc13(p3.rawTeam) + "</option>").join("");
    select.value = people.some((p3) => p3.personId === selected) ? selected : "";
    return;
  }
  const { id, value } = event.target;
  if (id === "month-filter") {
    month = value;
    sourceTab = "";
    sourcePage = 0;
    if (team !== "\uC804\uCCB4" && !teamOptions().includes(team)) team = "\uC804\uCCB4";
    render();
  }
  if (id === "team-filter") {
    team = value;
    render();
  }
  if (id === "source-book") {
    sourceBook = value;
    sourceTab = "";
    sourcePage = 0;
    render();
  }
  if (id === "source-tab") {
    sourceTab = value;
    sourcePage = 0;
    loadRawTable();
  }
});
var searchTimeout;
var composing = false;
function scheduleSearch(event) {
  if (event.target.id !== "staff-search") return;
  clearTimeout(searchTimeout);
  if (composing || event.isComposing) return;
  const value = event.target.value, caret = event.target.selectionStart;
  searchTimeout = setTimeout(() => {
    search = value.trim();
    const focused = document.activeElement?.id === "staff-search";
    render();
    if (focused) {
      const el = document.querySelector("#staff-search");
      el.focus();
      el.setSelectionRange(caret, caret);
    }
  }, 250);
}
var drag = null;
var swallowClick = false;
document.addEventListener("pointerdown", (event) => {
  const chip = event.target.closest("[data-drag-group],[data-drag-source]");
  if (!chip || !authSession || !(["roster", "meals"].includes(view) || view === "team-calendar" && calendarTab === "roster") || event.button !== 0) return;
  drag = { chip, groupId: chip.dataset.dragGroup || "", source: chip.dataset.dragSource ? JSON.parse(chip.dataset.dragSource) : null, personId: chip.dataset.dragPerson, startX: event.clientX, startY: event.clientY, pointerId: event.pointerId, active: false, ghost: null, target: null };
  try {
    chip.setPointerCapture(event.pointerId);
  } catch {
  }
});
document.addEventListener("pointermove", (event) => {
  if (!drag || event.pointerId !== drag.pointerId) return;
  if (!drag.active) {
    if (Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) < 6) return;
    drag.active = true;
    drag.chip.classList.add("is-dragging");
    document.body.classList.add("is-dragging-schedule");
    getSelection()?.removeAllRanges();
    const ghost = drag.chip.cloneNode(true);
    ghost.classList.remove("is-dragging");
    ghost.classList.add("drag-ghost");
    document.body.append(ghost);
    drag.ghost = ghost;
  }
  drag.ghost.style.left = event.clientX + "px";
  drag.ghost.style.top = event.clientY + "px";
  const cell = document.elementFromPoint(event.clientX, event.clientY)?.closest("[data-drop-date]"), ok = !!cell && cell.dataset.dropPerson === drag.personId;
  if (drag.target && drag.target !== cell) drag.target.classList.remove("is-drop-target");
  if (ok) cell.classList.add("is-drop-target");
  drag.target = ok ? cell : null;
  event.preventDefault();
});
async function finishDrag(event) {
  if (!drag || event.pointerId !== drag.pointerId) return;
  const d2 = drag;
  drag = null;
  d2.chip.classList.remove("is-dragging");
  document.body.classList.remove("is-dragging-schedule");
  d2.ghost?.remove();
  d2.target?.classList.remove("is-drop-target");
  if (!d2.active) return;
  swallowClick = true;
  setTimeout(() => {
    swallowClick = false;
  }, 0);
  if (event.type === "pointercancel" || !d2.target) return;
  const revision = sessionRevision, newStart = d2.target.dataset.dropDate;
  const guard = () => {
    if (revision !== sessionRevision || !authSession) throw new Error("\uB85C\uADF8\uC778 \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB410\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uB85C\uADF8\uC778\uD574 \uC8FC\uC138\uC694.");
  };
  try {
    if (d2.source) {
      const person = data.roster.find((r3) => r3.personId === d2.personId && r3.month === monthOf2(d2.source.from)) || employees.find((p3) => p3.personId === d2.personId);
      if (!person || !scheduleCandidates(monthOf2(d2.source.from)).some((p3) => p3.personId === d2.personId)) throw new Error("\uC62E\uAE38 \uC218 \uC788\uB294 \uC77C\uC815\uC774 \uC544\uB2D9\uB2C8\uB2E4.");
      const entry = { ...d2.source, personId: d2.personId, name: person.name, teams: person.teams, rawTeam: person.rawTeam };
      await moveOriginalDraft(entry, newStart, guard);
      if (newStart !== d2.source.from) recordMove(d2.source.label, (g4) => moveOriginalDraft(entry, d2.source.from, g4));
      if (revision !== sessionRevision) return;
      render();
      toast(newStart === d2.source.from ? "\uC6D0\uB798 \uB0A0\uC9DC\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4." : `${d2.source.label} \uC77C\uC815\uC744 ${newStart}\uC73C\uB85C \uC62E\uACBC\uC2B5\uB2C8\uB2E4. \uC2DC\uD2B8\uB294 \uADF8\uB300\uB85C\uC608\uC694. ${UNDO_HINT}`);
      return;
    }
    const group = scheduleGroups(allDrafts()).find((g4) => g4.groupId === d2.groupId);
    if (!group || !canEditSchedule(group)) throw new Error("\uC62E\uAE38 \uC218 \uC788\uB294 \uC77C\uC815\uC774 \uC544\uB2D9\uB2C8\uB2E4.");
    if (group.override && newStart === group.from) {
      await removeDraftGroup(group.groupId, guard);
      recordMove(group.label, (g4) => moveOriginalDraft(overrideEntry(group), group.start, g4));
      if (revision !== sessionRevision) return;
      render();
      toast("\uC6D0\uB798 \uB0A0\uC9DC\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4.");
      return;
    }
    const moved = await moveDraftGroup(d2.groupId, newStart, guard);
    if (moved) recordMove(group.label, (g4) => moveDraftGroup(d2.groupId, group.start, g4));
    if (revision !== sessionRevision) return;
    if (moved) {
      render();
      toast(`${group.label} \uC77C\uC815\uC744 ${newStart}${group.days > 1 ? " \uC2DC\uC791" : ""}\uC73C\uB85C \uC62E\uACBC\uC2B5\uB2C8\uB2E4. ${UNDO_HINT}`);
    }
  } catch (e3) {
    if (revision === sessionRevision) toast(e3.message);
  }
}
document.addEventListener("pointerup", finishDrag);
document.addEventListener("pointercancel", finishDrag);
document.addEventListener("click", (event) => {
  if (swallowClick) {
    event.stopPropagation();
    event.preventDefault();
  }
}, true);
document.addEventListener("compositionstart", (event) => {
  if (event.target.id === "staff-search") {
    composing = true;
    clearTimeout(searchTimeout);
  }
});
document.addEventListener("compositionend", (event) => {
  if (event.target.id === "staff-search") {
    composing = false;
    scheduleSearch(event);
  }
});
document.addEventListener("input", scheduleSearch);
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.id === "source-query") {
    event.preventDefault();
    sourceQuery = event.target.value.trim();
    sourcePage = 0;
    loadRawTable();
  }
});
addEventListener("hashchange", render);
addEventListener("storage", (event) => {
  if (!data || !authSession) return;
  if (event.key === RECEIPT_SIGNAL) {
    receiptController?.refresh();
    return;
  }
  if ([EXPENSE_KEY, EXPENSE_CONFIG_KEY].includes(event.key)) {
    expenseController?.refresh();
    return;
  }
  if (event.key === SNACK_KEY) {
    snackController?.refresh();
    return;
  }
  if (event.key === TEAM_SETTINGS_KEY) {
    const form = document.querySelector("[data-team-editor-form]");
    if (form) form.querySelector(".form-error").textContent = "\uB2E4\uB978 \uD0ED\uC5D0\uC11C \uB2F4\uB2F9\uC790 \uC124\uC815\uC774 \uBCC0\uACBD\uB410\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C\uACE0\uCE68 \uD6C4 \uD655\uC778\uD574 \uC8FC\uC138\uC694.";
    return;
  }
  if (event.key === LOCAL_KEY) {
    if (["team-snacks", "picker", "expenses"].includes(view)) return;
    if (view === "meals") {
      receiptController?.refresh();
      const area = document.querySelector(".local-records");
      if (area) {
        area.outerHTML = localRecords("meals");
        labelMobileTables(document.querySelector(".local-records"));
      }
      return;
    }
    render();
    return;
  }
  if ((event.key?.startsWith(MEAL_PREFIX) || event.key?.startsWith(ACTIVITY_PREFIX)) && (["meal-timer", "admin-dashboard"].includes(view) || view === "team-calendar" && calendarTab === "status")) render();
});
setInterval(tickTimers, 1e3);
async function start() {
  try {
    const response = await fetch("./clinic-data.json");
    if (!response.ok) throw new Error(`\uC790\uB8CC \uC751\uB2F5 ${response.status}`);
    data = await response.json();
    employees = employeeDirectory(data.roster);
    try {
      authSession = restorePreviewSession(sessionStorage, employees);
    } catch {
    }
    previewMode = authSession?.role || "employee";
    signedInPerson = employees.find((p3) => p3.personId === authSession?.personId);
    month = data.months.includes(monthOf2(today2())) ? monthOf2(today2()) : data.months.at(-1);
    document.title = "\uBDF0\uD2F0\uBE14\uB77C\uC378 \xB7 \uC9C1\uC6D0 \uC5C5\uBB34";
    render();
  } catch (error) {
    app.innerHTML = `<main class="load-error"><h1>\uC9C1\uC6D0 \uC790\uB8CC\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.</h1><p>${esc13(error.message)}</p><button data-action="retry">\uB2E4\uC2DC \uBD88\uB7EC\uC624\uAE30</button></main>`;
  }
}
start();
