/*! highlight.js v9.18.1 | BSD3 License | git.io/hljslicense */
!(function (e) {
  var n =
    ('object' == typeof window && window) || ('object' == typeof self && self)
  'undefined' == typeof exports || exports.nodeType
    ? n &&
      ((n.hljs = e({})),
      'function' == typeof define &&
        define.amd &&
        define([], function () {
          return n.hljs
        }))
    : e(exports)
})(function (a) {
  var f = [],
    i = Object.keys,
    _ = {},
    c = {},
    C = !0,
    n = /^(no-?highlight|plain|text)$/i,
    l = /\blang(?:uage)?-([\w-]+)\b/i,
    t = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
    r = {
      case_insensitive: 'cI',
      lexemes: 'l',
      contains: 'c',
      keywords: 'k',
      subLanguage: 'sL',
      className: 'cN',
      begin: 'b',
      beginKeywords: 'bK',
      end: 'e',
      endsWithParent: 'eW',
      illegal: 'i',
      excludeBegin: 'eB',
      excludeEnd: 'eE',
      returnBegin: 'rB',
      returnEnd: 'rE',
      variants: 'v',
      IDENT_RE: 'IR',
      UNDERSCORE_IDENT_RE: 'UIR',
      NUMBER_RE: 'NR',
      C_NUMBER_RE: 'CNR',
      BINARY_NUMBER_RE: 'BNR',
      RE_STARTERS_RE: 'RSR',
      BACKSLASH_ESCAPE: 'BE',
      APOS_STRING_MODE: 'ASM',
      QUOTE_STRING_MODE: 'QSM',
      PHRASAL_WORDS_MODE: 'PWM',
      C_LINE_COMMENT_MODE: 'CLCM',
      C_BLOCK_COMMENT_MODE: 'CBCM',
      HASH_COMMENT_MODE: 'HCM',
      NUMBER_MODE: 'NM',
      C_NUMBER_MODE: 'CNM',
      BINARY_NUMBER_MODE: 'BNM',
      CSS_NUMBER_MODE: 'CSSNM',
      REGEXP_MODE: 'RM',
      TITLE_MODE: 'TM',
      UNDERSCORE_TITLE_MODE: 'UTM',
      COMMENT: 'C',
      beginRe: 'bR',
      endRe: 'eR',
      illegalRe: 'iR',
      lexemesRe: 'lR',
      terminators: 't',
      terminator_end: 'tE',
    },
    m = '</span>',
    O =
      "Could not find the language '{}', did you forget to load/include a language module?",
    B = {
      classPrefix: 'hljs-',
      tabReplace: null,
      useBR: !1,
      languages: void 0,
    },
    o = 'of and for in not or if then'.split(' ')
  function x(e) {
    return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }
  function g(e) {
    return e.nodeName.toLowerCase()
  }
  function u(e) {
    return n.test(e)
  }
  function s(e) {
    var n,
      t = {},
      r = Array.prototype.slice.call(arguments, 1)
    for (n in e) t[n] = e[n]
    return (
      r.forEach(function (e) {
        for (n in e) t[n] = e[n]
      }),
      t
    )
  }
  function E(e) {
    var a = []
    return (
      (function e(n, t) {
        for (var r = n.firstChild; r; r = r.nextSibling)
          3 === r.nodeType
            ? (t += r.nodeValue.length)
            : 1 === r.nodeType &&
              (a.push({ event: 'start', offset: t, node: r }),
              (t = e(r, t)),
              g(r).match(/br|hr|img|input/) ||
                a.push({ event: 'stop', offset: t, node: r }))
        return t
      })(e, 0),
      a
    )
  }
  function d(e, n, t) {
    var r = 0,
      a = '',
      i = []
    function o() {
      return e.length && n.length
        ? e[0].offset !== n[0].offset
          ? e[0].offset < n[0].offset
            ? e
            : n
          : 'start' === n[0].event
          ? e
          : n
        : e.length
        ? e
        : n
    }
    function c(e) {
      a +=
        '<' +
        g(e) +
        f.map
          .call(e.attributes, function (e) {
            return (
              ' ' + e.nodeName + '="' + x(e.value).replace(/"/g, '&quot;') + '"'
            )
          })
          .join('') +
        '>'
    }
    function l(e) {
      a += '</' + g(e) + '>'
    }
    function u(e) {
      ;('start' === e.event ? c : l)(e.node)
    }
    for (; e.length || n.length; ) {
      var s = o()
      if (((a += x(t.substring(r, s[0].offset))), (r = s[0].offset), s === e)) {
        for (
          i.reverse().forEach(l);
          u(s.splice(0, 1)[0]),
            (s = o()) === e && s.length && s[0].offset === r;

        );
        i.reverse().forEach(c)
      } else
        'start' === s[0].event ? i.push(s[0].node) : i.pop(),
          u(s.splice(0, 1)[0])
    }
    return a + x(t.substr(r))
  }
  function R(n) {
    return (
      n.v &&
        !n.cached_variants &&
        (n.cached_variants = n.v.map(function (e) {
          return s(n, { v: null }, e)
        })),
      n.cached_variants
        ? n.cached_variants
        : (function e(n) {
            return !!n && (n.eW || e(n.starts))
          })(n)
        ? [s(n, { starts: n.starts ? s(n.starts) : null })]
        : Object.isFrozen(n)
        ? [s(n)]
        : [n]
    )
  }
  function p(e) {
    if (r && !e.langApiRestored) {
      for (var n in ((e.langApiRestored = !0), r)) e[n] && (e[r[n]] = e[n])
      ;(e.c || []).concat(e.v || []).forEach(p)
    }
  }
  function v(n, r) {
    var a = {}
    return (
      'string' == typeof n
        ? t('keyword', n)
        : i(n).forEach(function (e) {
            t(e, n[e])
          }),
      a
    )
    function t(t, e) {
      r && (e = e.toLowerCase()),
        e.split(' ').forEach(function (e) {
          var n = e.split('|')
          a[n[0]] = [
            t,
            (function (e, n) {
              return n
                ? Number(n)
                : (function (e) {
                    return -1 != o.indexOf(e.toLowerCase())
                  })(e)
                ? 0
                : 1
            })(n[0], n[1]),
          ]
        })
    }
  }
  function S(r) {
    function s(e) {
      return (e && e.source) || e
    }
    function f(e, n) {
      return new RegExp(s(e), 'm' + (r.cI ? 'i' : '') + (n ? 'g' : ''))
    }
    function a(a) {
      var i,
        e,
        o = {},
        c = [],
        l = {},
        t = 1
      function n(e, n) {
        ;(o[t] = e),
          c.push([e, n]),
          (t +=
            (function (e) {
              return new RegExp(e.toString() + '|').exec('').length - 1
            })(n) + 1)
      }
      for (var r = 0; r < a.c.length; r++) {
        n((e = a.c[r]), e.bK ? '\\.?(?:' + e.b + ')\\.?' : e.b)
      }
      a.tE && n('end', a.tE), a.i && n('illegal', a.i)
      var u = c.map(function (e) {
        return e[1]
      })
      return (
        (i = f(
          (function (e, n) {
            for (
              var t = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,
                r = 0,
                a = '',
                i = 0;
              i < e.length;
              i++
            ) {
              var o = (r += 1),
                c = s(e[i])
              for (0 < i && (a += n), a += '('; 0 < c.length; ) {
                var l = t.exec(c)
                if (null == l) {
                  a += c
                  break
                }
                ;(a += c.substring(0, l.index)),
                  (c = c.substring(l.index + l[0].length)),
                  '\\' == l[0][0] && l[1]
                    ? (a += '\\' + String(Number(l[1]) + o))
                    : ((a += l[0]), '(' == l[0] && r++)
              }
              a += ')'
            }
            return a
          })(u, '|'),
          !0
        )),
        (l.lastIndex = 0),
        (l.exec = function (e) {
          var n
          if (0 === c.length) return null
          i.lastIndex = l.lastIndex
          var t = i.exec(e)
          if (!t) return null
          for (var r = 0; r < t.length; r++)
            if (null != t[r] && null != o['' + r]) {
              n = o['' + r]
              break
            }
          return (
            'string' == typeof n
              ? ((t.type = n), (t.extra = [a.i, a.tE]))
              : ((t.type = 'begin'), (t.rule = n)),
            t
          )
        }),
        l
      )
    }
    if (r.c && -1 != r.c.indexOf('self')) {
      if (!C)
        throw new Error(
          'ERR: contains `self` is not supported at the top-level of a language.  See documentation.'
        )
      r.c = r.c.filter(function (e) {
        return 'self' != e
      })
    }
    !(function n(t, e) {
      t.compiled ||
        ((t.compiled = !0),
        (t.k = t.k || t.bK),
        t.k && (t.k = v(t.k, r.cI)),
        (t.lR = f(t.l || /\w+/, !0)),
        e &&
          (t.bK && (t.b = '\\b(' + t.bK.split(' ').join('|') + ')\\b'),
          t.b || (t.b = /\B|\b/),
          (t.bR = f(t.b)),
          t.endSameAsBegin && (t.e = t.b),
          t.e || t.eW || (t.e = /\B|\b/),
          t.e && (t.eR = f(t.e)),
          (t.tE = s(t.e) || ''),
          t.eW && e.tE && (t.tE += (t.e ? '|' : '') + e.tE)),
        t.i && (t.iR = f(t.i)),
        null == t.relevance && (t.relevance = 1),
        t.c || (t.c = []),
        (t.c = Array.prototype.concat.apply(
          [],
          t.c.map(function (e) {
            return R('self' === e ? t : e)
          })
        )),
        t.c.forEach(function (e) {
          n(e, t)
        }),
        t.starts && n(t.starts, e),
        (t.t = a(t)))
    })(r)
  }
  function T(n, e, a, t) {
    var i = e
    function o(e, n) {
      if (
        (function (e, n) {
          var t = e && e.exec(n)
          return t && 0 === t.index
        })(e.eR, n)
      ) {
        for (; e.endsParent && e.parent; ) e = e.parent
        return e
      }
      if (e.eW) return o(e.parent, n)
    }
    function c(e, n, t, r) {
      if (!t && '' === n) return ''
      if (!e) return n
      var a = '<span class="' + (r ? '' : B.classPrefix)
      return (a += e + '">') + n + (t ? '' : m)
    }
    function l() {
      ;(p +=
        null != d.sL
          ? (function () {
              var e = 'string' == typeof d.sL
              if (e && !_[d.sL]) return x(v)
              var n = e
                ? T(d.sL, v, !0, R[d.sL])
                : w(v, d.sL.length ? d.sL : void 0)
              return (
                0 < d.relevance && (M += n.relevance),
                e && (R[d.sL] = n.top),
                c(n.language, n.value, !1, !0)
              )
            })()
          : (function () {
              var e, n, t, r, a, i, o
              if (!d.k) return x(v)
              for (r = '', n = 0, d.lR.lastIndex = 0, t = d.lR.exec(v); t; )
                (r += x(v.substring(n, t.index))),
                  (a = d),
                  (i = t),
                  void 0,
                  (o = g.cI ? i[0].toLowerCase() : i[0]),
                  (e = a.k.hasOwnProperty(o) && a.k[o])
                    ? ((M += e[1]), (r += c(e[0], x(t[0]))))
                    : (r += x(t[0])),
                  (n = d.lR.lastIndex),
                  (t = d.lR.exec(v))
              return r + x(v.substr(n))
            })()),
        (v = '')
    }
    function u(e) {
      ;(p += e.cN ? c(e.cN, '', !0) : ''),
        (d = Object.create(e, { parent: { value: d } }))
    }
    function s(e) {
      var n = e[0],
        t = e.rule
      return (
        t &&
          t.endSameAsBegin &&
          (t.eR = (function (e) {
            return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm')
          })(n)),
        t.skip ? (v += n) : (t.eB && (v += n), l(), t.rB || t.eB || (v = n)),
        u(t),
        t.rB ? 0 : n.length
      )
    }
    var f = {}
    function r(e, n) {
      var t = n && n[0]
      if (((v += e), null == t)) return l(), 0
      if (
        'begin' == f.type &&
        'end' == n.type &&
        f.index == n.index &&
        '' === t
      )
        return (v += i.slice(n.index, n.index + 1)), 1
      if ('begin' === (f = n).type) return s(n)
      if ('illegal' === n.type && !a)
        throw new Error(
          'Illegal lexeme "' + t + '" for mode "' + (d.cN || '<unnamed>') + '"'
        )
      if ('end' === n.type) {
        var r = (function (e) {
          var n = e[0],
            t = i.substr(e.index),
            r = o(d, t)
          if (r) {
            var a = d
            for (
              a.skip
                ? (v += n)
                : (a.rE || a.eE || (v += n), l(), a.eE && (v = n));
              d.cN && (p += m),
                d.skip || d.sL || (M += d.relevance),
                (d = d.parent) !== r.parent;

            );
            return (
              r.starts &&
                (r.endSameAsBegin && (r.starts.eR = r.eR), u(r.starts)),
              a.rE ? 0 : n.length
            )
          }
        })(n)
        if (null != r) return r
      }
      return (v += t), t.length
    }
    var g = D(n)
    if (!g)
      throw (
        (console.error(O.replace('{}', n)),
        new Error('Unknown language: "' + n + '"'))
      )
    S(g)
    var E,
      d = t || g,
      R = {},
      p = ''
    for (E = d; E !== g; E = E.parent) E.cN && (p = c(E.cN, '', !0) + p)
    var v = '',
      M = 0
    try {
      for (var b, h, N = 0; (d.t.lastIndex = N), (b = d.t.exec(i)); )
        (h = r(i.substring(N, b.index), b)), (N = b.index + h)
      for (r(i.substr(N)), E = d; E.parent; E = E.parent) E.cN && (p += m)
      return { relevance: M, value: p, i: !1, language: n, top: d }
    } catch (e) {
      if (e.message && -1 !== e.message.indexOf('Illegal'))
        return { i: !0, relevance: 0, value: x(i) }
      if (C)
        return {
          relevance: 0,
          value: x(i),
          language: n,
          top: d,
          errorRaised: e,
        }
      throw e
    }
  }
  function w(t, e) {
    e = e || B.languages || i(_)
    var r = { relevance: 0, value: x(t) },
      a = r
    return (
      e
        .filter(D)
        .filter(L)
        .forEach(function (e) {
          var n = T(e, t, !1)
          ;(n.language = e),
            n.relevance > a.relevance && (a = n),
            n.relevance > r.relevance && ((a = r), (r = n))
        }),
      a.language && (r.second_best = a),
      r
    )
  }
  function M(e) {
    return B.tabReplace || B.useBR
      ? e.replace(t, function (e, n) {
          return B.useBR && '\n' === e
            ? '<br>'
            : B.tabReplace
            ? n.replace(/\t/g, B.tabReplace)
            : ''
        })
      : e
  }
  function b(e) {
    var n,
      t,
      r,
      a,
      i,
      o = (function (e) {
        var n,
          t,
          r,
          a,
          i = e.className + ' '
        if (
          ((i += e.parentNode ? e.parentNode.className : ''), (t = l.exec(i)))
        ) {
          var o = D(t[1])
          return (
            o ||
              (console.warn(O.replace('{}', t[1])),
              console.warn(
                'Falling back to no-highlight mode for this block.',
                e
              )),
            o ? t[1] : 'no-highlight'
          )
        }
        for (n = 0, r = (i = i.split(/\s+/)).length; n < r; n++)
          if (u((a = i[n])) || D(a)) return a
      })(e)
    u(o) ||
      (B.useBR
        ? ((n = document.createElement('div')).innerHTML = e.innerHTML
            .replace(/\n/g, '')
            .replace(/<br[ \/]*>/g, '\n'))
        : (n = e),
      (i = n.textContent),
      (r = o ? T(o, i, !0) : w(i)),
      (t = E(n)).length &&
        (((a = document.createElement('div')).innerHTML = r.value),
        (r.value = d(t, E(a), i))),
      (r.value = M(r.value)),
      (e.innerHTML = r.value),
      (e.className = (function (e, n, t) {
        var r = n ? c[n] : t,
          a = [e.trim()]
        return (
          e.match(/\bhljs\b/) || a.push('hljs'),
          -1 === e.indexOf(r) && a.push(r),
          a.join(' ').trim()
        )
      })(e.className, o, r.language)),
      (e.result = { language: r.language, re: r.relevance }),
      r.second_best &&
        (e.second_best = {
          language: r.second_best.language,
          re: r.second_best.relevance,
        }))
  }
  function h() {
    if (!h.called) {
      h.called = !0
      var e = document.querySelectorAll('pre code')
      f.forEach.call(e, b)
    }
  }
  var N = { disableAutodetect: !0 }
  function D(e) {
    return (e = (e || '').toLowerCase()), _[e] || _[c[e]]
  }
  function L(e) {
    var n = D(e)
    return n && !n.disableAutodetect
  }
  return (
    (a.highlight = T),
    (a.highlightAuto = w),
    (a.fixMarkup = M),
    (a.highlightBlock = b),
    (a.configure = function (e) {
      B = s(B, e)
    }),
    (a.initHighlighting = h),
    (a.initHighlightingOnLoad = function () {
      window.addEventListener('DOMContentLoaded', h, !1),
        window.addEventListener('load', h, !1)
    }),
    (a.registerLanguage = function (n, e) {
      var t
      try {
        t = e(a)
      } catch (e) {
        if (
          (console.error(
            "Language definition for '{}' could not be registered.".replace(
              '{}',
              n
            )
          ),
          !C)
        )
          throw e
        console.error(e), (t = N)
      }
      p((_[n] = t)),
        (t.rawDefinition = e.bind(null, a)),
        t.aliases &&
          t.aliases.forEach(function (e) {
            c[e] = n
          })
    }),
    (a.listLanguages = function () {
      return i(_)
    }),
    (a.getLanguage = D),
    (a.requireLanguage = function (e) {
      var n = D(e)
      if (n) return n
      throw new Error(
        "The '{}' language is required, but not loaded.".replace('{}', e)
      )
    }),
    (a.autoDetection = L),
    (a.inherit = s),
    (a.debugMode = function () {
      C = !1
    }),
    (a.IR = a.IDENT_RE = '[a-zA-Z]\\w*'),
    (a.UIR = a.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*'),
    (a.NR = a.NUMBER_RE = '\\b\\d+(\\.\\d+)?'),
    (a.CNR = a.C_NUMBER_RE =
      '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'),
    (a.BNR = a.BINARY_NUMBER_RE = '\\b(0b[01]+)'),
    (a.RSR = a.RE_STARTERS_RE =
      '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~'),
    (a.BE = a.BACKSLASH_ESCAPE = { b: '\\\\[\\s\\S]', relevance: 0 }),
    (a.ASM = a.APOS_STRING_MODE = {
      cN: 'string',
      b: "'",
      e: "'",
      i: '\\n',
      c: [a.BE],
    }),
    (a.QSM = a.QUOTE_STRING_MODE = {
      cN: 'string',
      b: '"',
      e: '"',
      i: '\\n',
      c: [a.BE],
    }),
    (a.PWM = a.PHRASAL_WORDS_MODE = {
      b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
    }),
    (a.C = a.COMMENT = function (e, n, t) {
      var r = a.inherit({ cN: 'comment', b: e, e: n, c: [] }, t || {})
      return (
        r.c.push(a.PWM),
        r.c.push({
          cN: 'doctag',
          b: '(?:TODO|FIXME|NOTE|BUG|XXX):',
          relevance: 0,
        }),
        r
      )
    }),
    (a.CLCM = a.C_LINE_COMMENT_MODE = a.C('//', '$')),
    (a.CBCM = a.C_BLOCK_COMMENT_MODE = a.C('/\\*', '\\*/')),
    (a.HCM = a.HASH_COMMENT_MODE = a.C('#', '$')),
    (a.NM = a.NUMBER_MODE = { cN: 'number', b: a.NR, relevance: 0 }),
    (a.CNM = a.C_NUMBER_MODE = { cN: 'number', b: a.CNR, relevance: 0 }),
    (a.BNM = a.BINARY_NUMBER_MODE = { cN: 'number', b: a.BNR, relevance: 0 }),
    (a.CSSNM = a.CSS_NUMBER_MODE = {
      cN: 'number',
      b:
        a.NR +
        '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
      relevance: 0,
    }),
    (a.RM = a.REGEXP_MODE = {
      cN: 'regexp',
      b: /\//,
      e: /\/[gimuy]*/,
      i: /\n/,
      c: [a.BE, { b: /\[/, e: /\]/, relevance: 0, c: [a.BE] }],
    }),
    (a.TM = a.TITLE_MODE = { cN: 'title', b: a.IR, relevance: 0 }),
    (a.UTM = a.UNDERSCORE_TITLE_MODE = { cN: 'title', b: a.UIR, relevance: 0 }),
    (a.METHOD_GUARD = { b: '\\.\\s*' + a.UIR, relevance: 0 }),
    [
      a.BE,
      a.ASM,
      a.QSM,
      a.PWM,
      a.C,
      a.CLCM,
      a.CBCM,
      a.HCM,
      a.NM,
      a.CNM,
      a.BNM,
      a.CSSNM,
      a.RM,
      a.TM,
      a.UTM,
      a.METHOD_GUARD,
    ].forEach(function (e) {
      !(function n(t) {
        Object.freeze(t)
        var r = 'function' == typeof t
        Object.getOwnPropertyNames(t).forEach(function (e) {
          !t.hasOwnProperty(e) ||
            null === t[e] ||
            ('object' != typeof t[e] && 'function' != typeof t[e]) ||
            (r && ('caller' === e || 'callee' === e || 'arguments' === e)) ||
            Object.isFrozen(t[e]) ||
            n(t[e])
        })
        return t
      })(e)
    }),
    a
  )
})
hljs.registerLanguage('ruby', function (e) {
  var c =
      '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?',
    b = {
      keyword:
        'and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor',
      literal: 'true false nil',
    },
    r = { cN: 'doctag', b: '@[A-Za-z]+' },
    a = { b: '#<', e: '>' },
    n = [
      e.C('#', '$', { c: [r] }),
      e.C('^\\=begin', '^\\=end', { c: [r], relevance: 10 }),
      e.C('^__END__', '\\n$'),
    ],
    s = { cN: 'subst', b: '#\\{', e: '}', k: b },
    t = {
      cN: 'string',
      c: [e.BE, s],
      v: [
        { b: /'/, e: /'/ },
        { b: /"/, e: /"/ },
        { b: /`/, e: /`/ },
        { b: '%[qQwWx]?\\(', e: '\\)' },
        { b: '%[qQwWx]?\\[', e: '\\]' },
        { b: '%[qQwWx]?{', e: '}' },
        { b: '%[qQwWx]?<', e: '>' },
        { b: '%[qQwWx]?/', e: '/' },
        { b: '%[qQwWx]?%', e: '%' },
        { b: '%[qQwWx]?-', e: '-' },
        { b: '%[qQwWx]?\\|', e: '\\|' },
        { b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/ },
        {
          b: /<<[-~]?'?(\w+)(?:.|\n)*?\n\s*\1\b/,
          rB: !0,
          c: [
            { b: /<<[-~]?'?/ },
            { b: /\w+/, endSameAsBegin: !0, c: [e.BE, s] },
          ],
        },
      ],
    },
    i = { cN: 'params', b: '\\(', e: '\\)', endsParent: !0, k: b },
    l = [
      t,
      a,
      {
        cN: 'class',
        bK: 'class module',
        e: '$|;',
        i: /=/,
        c: [
          e.inherit(e.TM, { b: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?' }),
          { b: '<\\s*', c: [{ b: '(' + e.IR + '::)?' + e.IR }] },
        ].concat(n),
      },
      {
        cN: 'function',
        bK: 'def',
        e: '$|;',
        c: [e.inherit(e.TM, { b: c }), i].concat(n),
      },
      { b: e.IR + '::' },
      { cN: 'symbol', b: e.UIR + '(\\!|\\?)?:', relevance: 0 },
      { cN: 'symbol', b: ':(?!\\s)', c: [t, { b: c }], relevance: 0 },
      {
        cN: 'number',
        b:
          '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
        relevance: 0,
      },
      { b: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))' },
      { cN: 'params', b: /\|/, e: /\|/, k: b },
      {
        b: '(' + e.RSR + '|unless)\\s*',
        k: 'unless',
        c: [
          a,
          {
            cN: 'regexp',
            c: [e.BE, s],
            i: /\n/,
            v: [
              { b: '/', e: '/[a-z]*' },
              { b: '%r{', e: '}[a-z]*' },
              { b: '%r\\(', e: '\\)[a-z]*' },
              { b: '%r!', e: '![a-z]*' },
              { b: '%r\\[', e: '\\][a-z]*' },
            ],
          },
        ].concat(n),
        relevance: 0,
      },
    ].concat(n)
  s.c = l
  var d = [
    { b: /^\s*=>/, starts: { e: '$', c: (i.c = l) } },
    {
      cN: 'meta',
      b:
        '^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)',
      starts: { e: '$', c: l },
    },
  ]
  return {
    aliases: ['rb', 'gemspec', 'podspec', 'thor', 'irb'],
    k: b,
    i: /\/\*/,
    c: n.concat(d).concat(l),
  }
})
hljs.registerLanguage('apache', function (e) {
  var r = { cN: 'number', b: '[\\$%]\\d+' }
  return {
    aliases: ['apacheconf'],
    cI: !0,
    c: [
      e.HCM,
      { cN: 'section', b: '</?', e: '>' },
      {
        cN: 'attribute',
        b: /\w+/,
        relevance: 0,
        k: {
          nomarkup:
            'order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername',
        },
        starts: {
          e: /$/,
          relevance: 0,
          k: { literal: 'on off all' },
          c: [
            { cN: 'meta', b: '\\s\\[', e: '\\]$' },
            { cN: 'variable', b: '[\\$%]\\{', e: '\\}', c: ['self', r] },
            r,
            e.QSM,
          ],
        },
      },
    ],
    i: /\S/,
  }
})
hljs.registerLanguage('yaml', function (e) {
  var b = 'true false yes no null',
    a = {
      cN: 'string',
      relevance: 0,
      v: [{ b: /'/, e: /'/ }, { b: /"/, e: /"/ }, { b: /\S+/ }],
      c: [
        e.BE,
        {
          cN: 'template-variable',
          v: [
            { b: '{{', e: '}}' },
            { b: '%{', e: '}' },
          ],
        },
      ],
    }
  return {
    cI: !0,
    aliases: ['yml', 'YAML', 'yaml'],
    c: [
      {
        cN: 'attr',
        v: [
          { b: '\\w[\\w :\\/.-]*:(?=[ \t]|$)' },
          { b: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)' },
          { b: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)" },
        ],
      },
      { cN: 'meta', b: '^---s*$', relevance: 10 },
      {
        cN: 'string',
        b: '[\\|>]([0-9]?[+-])?[ ]*\\n( *)[\\S ]+\\n(\\2[\\S ]+\\n?)*',
      },
      { b: '<%[%=-]?', e: '[%-]?%>', sL: 'ruby', eB: !0, eE: !0, relevance: 0 },
      { cN: 'type', b: '!' + e.UIR },
      { cN: 'type', b: '!!' + e.UIR },
      { cN: 'meta', b: '&' + e.UIR + '$' },
      { cN: 'meta', b: '\\*' + e.UIR + '$' },
      { cN: 'bullet', b: '\\-(?=[ ]|$)', relevance: 0 },
      e.HCM,
      { bK: b, k: { literal: b } },
      { cN: 'number', b: e.CNR + '\\b' },
      a,
    ],
  }
})
hljs.registerLanguage('plaintext', function (e) {
  return { disableAutodetect: !0 }
})
hljs.registerLanguage('scss', function (e) {
  var t = '@[a-z-]+',
    r = { cN: 'variable', b: '(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b' },
    i = { cN: 'number', b: '#[0-9A-Fa-f]+' }
  e.CSSNM, e.QSM, e.ASM, e.CBCM
  return {
    cI: !0,
    i: "[=/|']",
    c: [
      e.CLCM,
      e.CBCM,
      { cN: 'selector-id', b: '\\#[A-Za-z0-9_-]+', relevance: 0 },
      { cN: 'selector-class', b: '\\.[A-Za-z0-9_-]+', relevance: 0 },
      { cN: 'selector-attr', b: '\\[', e: '\\]', i: '$' },
      {
        cN: 'selector-tag',
        b:
          '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b',
        relevance: 0,
      },
      {
        cN: 'selector-pseudo',
        b:
          ':(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)',
      },
      {
        cN: 'selector-pseudo',
        b:
          '::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)',
      },
      r,
      {
        cN: 'attribute',
        b:
          '\\b(src|z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b',
        i: '[^\\s]',
      },
      {
        b:
          '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b',
      },
      {
        b: ':',
        e: ';',
        c: [r, i, e.CSSNM, e.QSM, e.ASM, { cN: 'meta', b: '!important' }],
      },
      { b: '@(page|font-face)', l: t, k: '@page @font-face' },
      {
        b: '@',
        e: '[{;]',
        rB: !0,
        k: 'and or not only',
        c: [{ b: t, cN: 'keyword' }, r, e.QSM, e.ASM, i, e.CSSNM],
      },
    ],
  }
})
hljs.registerLanguage('javascript', function (e) {
  var r = '<>',
    a = '</>',
    t = { b: /<[A-Za-z0-9\\._:-]+/, e: /\/[A-Za-z0-9\\._:-]+>|\/>/ },
    c = '[A-Za-z$_][0-9A-Za-z$_]*',
    n = {
      keyword:
        'in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as',
      literal: 'true false null undefined NaN Infinity',
      built_in:
        'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise',
    },
    s = {
      cN: 'number',
      v: [
        { b: '\\b(0[bB][01]+)n?' },
        { b: '\\b(0[oO][0-7]+)n?' },
        { b: e.CNR + 'n?' },
      ],
      relevance: 0,
    },
    o = { cN: 'subst', b: '\\$\\{', e: '\\}', k: n, c: [] },
    i = {
      b: 'html`',
      e: '',
      starts: { e: '`', rE: !1, c: [e.BE, o], sL: 'xml' },
    },
    b = {
      b: 'css`',
      e: '',
      starts: { e: '`', rE: !1, c: [e.BE, o], sL: 'css' },
    },
    l = { cN: 'string', b: '`', e: '`', c: [e.BE, o] }
  o.c = [e.ASM, e.QSM, i, b, l, s, e.RM]
  var u = o.c.concat([e.CBCM, e.CLCM])
  return {
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    k: n,
    c: [
      { cN: 'meta', relevance: 10, b: /^\s*['"]use (strict|asm)['"]/ },
      { cN: 'meta', b: /^#!/, e: /$/ },
      e.ASM,
      e.QSM,
      i,
      b,
      l,
      e.CLCM,
      e.C('/\\*\\*', '\\*/', {
        relevance: 0,
        c: [
          {
            cN: 'doctag',
            b: '@[A-Za-z]+',
            c: [
              { cN: 'type', b: '\\{', e: '\\}', relevance: 0 },
              {
                cN: 'variable',
                b: c + '(?=\\s*(-)|$)',
                endsParent: !0,
                relevance: 0,
              },
              { b: /(?=[^\n])\s/, relevance: 0 },
            ],
          },
        ],
      }),
      e.CBCM,
      s,
      {
        b: /[{,\n]\s*/,
        relevance: 0,
        c: [
          {
            b: c + '\\s*:',
            rB: !0,
            relevance: 0,
            c: [{ cN: 'attr', b: c, relevance: 0 }],
          },
        ],
      },
      {
        b: '(' + e.RSR + '|\\b(case|return|throw)\\b)\\s*',
        k: 'return throw case',
        c: [
          e.CLCM,
          e.CBCM,
          e.RM,
          {
            cN: 'function',
            b: '(\\(.*?\\)|' + c + ')\\s*=>',
            rB: !0,
            e: '\\s*=>',
            c: [
              {
                cN: 'params',
                v: [
                  { b: c },
                  { b: /\(\s*\)/ },
                  { b: /\(/, e: /\)/, eB: !0, eE: !0, k: n, c: u },
                ],
              },
            ],
          },
          { cN: '', b: /\s/, e: /\s*/, skip: !0 },
          {
            v: [
              { b: r, e: a },
              { b: t.b, e: t.e },
            ],
            sL: 'xml',
            c: [{ b: t.b, e: t.e, skip: !0, c: ['self'] }],
          },
        ],
        relevance: 0,
      },
      {
        cN: 'function',
        bK: 'function',
        e: /\{/,
        eE: !0,
        c: [
          e.inherit(e.TM, { b: c }),
          { cN: 'params', b: /\(/, e: /\)/, eB: !0, eE: !0, c: u },
        ],
        i: /\[|%/,
      },
      { b: /\$[(.]/ },
      e.METHOD_GUARD,
      {
        cN: 'class',
        bK: 'class',
        e: /[{;=]/,
        eE: !0,
        i: /[:"\[\]]/,
        c: [{ bK: 'extends' }, e.UTM],
      },
      { bK: 'constructor get set', e: /\{/, eE: !0 },
    ],
    i: /#(?!!)/,
  }
})
hljs.registerLanguage('perl', function (e) {
  var t =
      'getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when',
    r = { cN: 'subst', b: '[$@]\\{', e: '\\}', k: t },
    s = { b: '->{', e: '}' },
    n = {
      v: [
        { b: /\$\d/ },
        { b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/ },
        { b: /[\$%@][^\s\w{]/, relevance: 0 },
      ],
    },
    c = [e.BE, r, n],
    a = [
      n,
      e.HCM,
      e.C('^\\=\\w', '\\=cut', { eW: !0 }),
      s,
      {
        cN: 'string',
        c: c,
        v: [
          { b: 'q[qwxr]?\\s*\\(', e: '\\)', relevance: 5 },
          { b: 'q[qwxr]?\\s*\\[', e: '\\]', relevance: 5 },
          { b: 'q[qwxr]?\\s*\\{', e: '\\}', relevance: 5 },
          { b: 'q[qwxr]?\\s*\\|', e: '\\|', relevance: 5 },
          { b: 'q[qwxr]?\\s*\\<', e: '\\>', relevance: 5 },
          { b: 'qw\\s+q', e: 'q', relevance: 5 },
          { b: "'", e: "'", c: [e.BE] },
          { b: '"', e: '"' },
          { b: '`', e: '`', c: [e.BE] },
          { b: '{\\w+}', c: [], relevance: 0 },
          { b: '-?\\w+\\s*\\=\\>', c: [], relevance: 0 },
        ],
      },
      {
        cN: 'number',
        b:
          '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
        relevance: 0,
      },
      {
        b: '(\\/\\/|' + e.RSR + '|\\b(split|return|print|reverse|grep)\\b)\\s*',
        k: 'split return print reverse grep',
        relevance: 0,
        c: [
          e.HCM,
          {
            cN: 'regexp',
            b: '(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*',
            relevance: 10,
          },
          {
            cN: 'regexp',
            b: '(m|qr)?/',
            e: '/[a-z]*',
            c: [e.BE],
            relevance: 0,
          },
        ],
      },
      {
        cN: 'function',
        bK: 'sub',
        e: '(\\s*\\(.*?\\))?[;{]',
        eE: !0,
        relevance: 5,
        c: [e.TM],
      },
      { b: '-\\w\\b', relevance: 0 },
      {
        b: '^__DATA__$',
        e: '^__END__$',
        sL: 'mojolicious',
        c: [{ b: '^@@.*', e: '$', cN: 'comment' }],
      },
    ]
  return (r.c = a), { aliases: ['pl', 'pm'], l: /[\w\.]+/, k: t, c: (s.c = a) }
})
hljs.registerLanguage('go', function (e) {
  var n = {
    keyword:
      'break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune',
    literal: 'true false iota nil',
    built_in:
      'append cap close complex copy imag len make new panic print println real recover delete',
  }
  return {
    aliases: ['golang'],
    k: n,
    i: '</',
    c: [
      e.CLCM,
      e.CBCM,
      { cN: 'string', v: [e.QSM, e.ASM, { b: '`', e: '`' }] },
      { cN: 'number', v: [{ b: e.CNR + '[i]', relevance: 1 }, e.CNM] },
      { b: /:=/ },
      {
        cN: 'function',
        bK: 'func',
        e: '\\s*(\\{|$)',
        eE: !0,
        c: [e.TM, { cN: 'params', b: /\(/, e: /\)/, k: n, i: /["']/ }],
      },
    ],
  }
})
hljs.registerLanguage('nginx', function (e) {
  var r = {
      cN: 'variable',
      v: [{ b: /\$\d+/ }, { b: /\$\{/, e: /}/ }, { b: '[\\$\\@]' + e.UIR }],
    },
    b = {
      eW: !0,
      l: '[a-z/_]+',
      k: {
        literal:
          'on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll',
      },
      relevance: 0,
      i: '=>',
      c: [
        e.HCM,
        {
          cN: 'string',
          c: [e.BE, r],
          v: [
            { b: /"/, e: /"/ },
            { b: /'/, e: /'/ },
          ],
        },
        { b: '([a-z]+):/', e: '\\s', eW: !0, eE: !0, c: [r] },
        {
          cN: 'regexp',
          c: [e.BE, r],
          v: [
            { b: '\\s\\^', e: '\\s|{|;', rE: !0 },
            { b: '~\\*?\\s+', e: '\\s|{|;', rE: !0 },
            { b: '\\*(\\.[a-z\\-]+)+' },
            { b: '([a-z\\-]+\\.)+\\*' },
          ],
        },
        {
          cN: 'number',
          b: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b',
        },
        { cN: 'number', b: '\\b\\d+[kKmMgGdshdwy]*\\b', relevance: 0 },
        r,
      ],
    }
  return {
    aliases: ['nginxconf'],
    c: [
      e.HCM,
      {
        b: e.UIR + '\\s+{',
        rB: !0,
        e: '{',
        c: [{ cN: 'section', b: e.UIR }],
        relevance: 0,
      },
      {
        b: e.UIR + '\\s',
        e: ';|{',
        rB: !0,
        c: [{ cN: 'attribute', b: e.UIR, starts: b }],
        relevance: 0,
      },
    ],
    i: '[^\\s\\}]',
  }
})
hljs.registerLanguage('xml', function (e) {
  var c = { cN: 'symbol', b: '&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;' },
    s = {
      b: '\\s',
      c: [{ cN: 'meta-keyword', b: '#?[a-z_][a-z1-9_-]+', i: '\\n' }],
    },
    a = e.inherit(s, { b: '\\(', e: '\\)' }),
    t = e.inherit(e.ASM, { cN: 'meta-string' }),
    l = e.inherit(e.QSM, { cN: 'meta-string' }),
    r = {
      eW: !0,
      i: /</,
      relevance: 0,
      c: [
        { cN: 'attr', b: '[A-Za-z0-9\\._:-]+', relevance: 0 },
        {
          b: /=\s*/,
          relevance: 0,
          c: [
            {
              cN: 'string',
              endsParent: !0,
              v: [
                { b: /"/, e: /"/, c: [c] },
                { b: /'/, e: /'/, c: [c] },
                { b: /[^\s"'=<>`]+/ },
              ],
            },
          ],
        },
      ],
    }
  return {
    aliases: [
      'html',
      'xhtml',
      'rss',
      'atom',
      'xjb',
      'xsd',
      'xsl',
      'plist',
      'wsf',
      'svg',
    ],
    cI: !0,
    c: [
      {
        cN: 'meta',
        b: '<![a-z]',
        e: '>',
        relevance: 10,
        c: [
          s,
          l,
          t,
          a,
          {
            b: '\\[',
            e: '\\]',
            c: [{ cN: 'meta', b: '<![a-z]', e: '>', c: [s, a, l, t] }],
          },
        ],
      },
      e.C('\x3c!--', '--\x3e', { relevance: 10 }),
      { b: '<\\!\\[CDATA\\[', e: '\\]\\]>', relevance: 10 },
      c,
      { cN: 'meta', b: /<\?xml/, e: /\?>/, relevance: 10 },
      {
        b: /<\?(php)?/,
        e: /\?>/,
        sL: 'php',
        c: [
          { b: '/\\*', e: '\\*/', skip: !0 },
          { b: 'b"', e: '"', skip: !0 },
          { b: "b'", e: "'", skip: !0 },
          e.inherit(e.ASM, { i: null, cN: null, c: null, skip: !0 }),
          e.inherit(e.QSM, { i: null, cN: null, c: null, skip: !0 }),
        ],
      },
      {
        cN: 'tag',
        b: '<style(?=\\s|>)',
        e: '>',
        k: { name: 'style' },
        c: [r],
        starts: { e: '</style>', rE: !0, sL: ['css', 'xml'] },
      },
      {
        cN: 'tag',
        b: '<script(?=\\s|>)',
        e: '>',
        k: { name: 'script' },
        c: [r],
        starts: {
          e: '</script>',
          rE: !0,
          sL: ['actionscript', 'javascript', 'handlebars', 'xml'],
        },
      },
      {
        cN: 'tag',
        b: '</?',
        e: '/?>',
        c: [{ cN: 'name', b: /[^\/><\s]+/, relevance: 0 }, r],
      },
    ],
  }
})
hljs.registerLanguage('markdown', function (e) {
  return {
    aliases: ['md', 'mkdown', 'mkd'],
    c: [
      {
        cN: 'section',
        v: [{ b: '^#{1,6}', e: '$' }, { b: '^.+?\\n[=-]{2,}$' }],
      },
      { b: '<', e: '>', sL: 'xml', relevance: 0 },
      { cN: 'bullet', b: '^\\s*([*+-]|(\\d+\\.))\\s+' },
      { cN: 'strong', b: '[*_]{2}.+?[*_]{2}' },
      { cN: 'emphasis', v: [{ b: '\\*.+?\\*' }, { b: '_.+?_', relevance: 0 }] },
      { cN: 'quote', b: '^>\\s+', e: '$' },
      {
        cN: 'code',
        v: [
          { b: '^```\\w*\\s*$', e: '^```[ ]*$' },
          { b: '`.+?`' },
          { b: '^( {4}|\\t)', e: '$', relevance: 0 },
        ],
      },
      { b: '^[-\\*]{3,}', e: '$' },
      {
        b: '\\[.+?\\][\\(\\[].*?[\\)\\]]',
        rB: !0,
        c: [
          { cN: 'string', b: '\\[', e: '\\]', eB: !0, rE: !0, relevance: 0 },
          { cN: 'link', b: '\\]\\(', e: '\\)', eB: !0, eE: !0 },
          { cN: 'symbol', b: '\\]\\[', e: '\\]', eB: !0, eE: !0 },
        ],
        relevance: 10,
      },
      {
        b: /^\[[^\n]+\]:/,
        rB: !0,
        c: [
          { cN: 'symbol', b: /\[/, e: /\]/, eB: !0, eE: !0 },
          { cN: 'link', b: /:\s*/, e: /$/, eB: !0 },
        ],
      },
    ],
  }
})
hljs.registerLanguage('properties', function (e) {
  var r = '[ \\t\\f]*',
    t = '(' + r + '[:=]' + r + '|[ \\t\\f]+)',
    n = '([^\\\\\\W:= \\t\\f\\n]|\\\\.)+',
    a = '([^\\\\:= \\t\\f\\n]|\\\\.)+',
    c = {
      e: t,
      relevance: 0,
      starts: { cN: 'string', e: /$/, relevance: 0, c: [{ b: '\\\\\\n' }] },
    }
  return {
    cI: !0,
    i: /\S/,
    c: [
      e.C('^\\s*[!#]', '$'),
      {
        b: n + t,
        rB: !0,
        c: [{ cN: 'attr', b: n, endsParent: !0, relevance: 0 }],
        starts: c,
      },
      {
        b: a + t,
        rB: !0,
        relevance: 0,
        c: [{ cN: 'meta', b: a, endsParent: !0, relevance: 0 }],
        starts: c,
      },
      { cN: 'attr', relevance: 0, b: a + r + '$' },
    ],
  }
})
hljs.registerLanguage('bash', function (e) {
  var t = {
      cN: 'variable',
      v: [{ b: /\$[\w\d#@][\w\d_]*/ }, { b: /\$\{(.*?)}/ }],
    },
    a = {
      cN: 'string',
      b: /"/,
      e: /"/,
      c: [e.BE, t, { cN: 'variable', b: /\$\(/, e: /\)/, c: [e.BE] }],
    }
  return {
    aliases: ['sh', 'zsh'],
    l: /\b-?[a-z\._]+\b/,
    k: {
      keyword: 'if then else elif fi for while in do done case esac function',
      literal: 'true false',
      built_in:
        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp',
      _: '-ne -eq -lt -gt -f -d -e -s -l -a',
    },
    c: [
      { cN: 'meta', b: /^#![^\n]+sh\s*$/, relevance: 10 },
      {
        cN: 'function',
        b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        rB: !0,
        c: [e.inherit(e.TM, { b: /\w[\w\d_]*/ })],
        relevance: 0,
      },
      e.HCM,
      a,
      { cN: '', b: /\\"/ },
      { cN: 'string', b: /'/, e: /'/ },
      t,
    ],
  }
})
hljs.registerLanguage('dockerfile', function (e) {
  return {
    aliases: ['docker'],
    cI: !0,
    k: 'from maintainer expose env arg user onbuild stopsignal',
    c: [
      e.HCM,
      e.ASM,
      e.QSM,
      e.NM,
      {
        bK:
          'run cmd entrypoint volume add copy workdir label healthcheck shell',
        starts: { e: /[^\\]$/, sL: 'bash' },
      },
    ],
    i: '</',
  }
})
hljs.registerLanguage('python', function (e) {
  var r = {
      keyword:
        'and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10',
      built_in: 'Ellipsis NotImplemented',
      literal: 'False None True',
    },
    b = { cN: 'meta', b: /^(>>>|\.\.\.) / },
    c = { cN: 'subst', b: /\{/, e: /\}/, k: r, i: /#/ },
    a = { b: /\{\{/, relevance: 0 },
    l = {
      cN: 'string',
      c: [e.BE],
      v: [
        { b: /(u|b)?r?'''/, e: /'''/, c: [e.BE, b], relevance: 10 },
        { b: /(u|b)?r?"""/, e: /"""/, c: [e.BE, b], relevance: 10 },
        { b: /(fr|rf|f)'''/, e: /'''/, c: [e.BE, b, a, c] },
        { b: /(fr|rf|f)"""/, e: /"""/, c: [e.BE, b, a, c] },
        { b: /(u|r|ur)'/, e: /'/, relevance: 10 },
        { b: /(u|r|ur)"/, e: /"/, relevance: 10 },
        { b: /(b|br)'/, e: /'/ },
        { b: /(b|br)"/, e: /"/ },
        { b: /(fr|rf|f)'/, e: /'/, c: [e.BE, a, c] },
        { b: /(fr|rf|f)"/, e: /"/, c: [e.BE, a, c] },
        e.ASM,
        e.QSM,
      ],
    },
    n = {
      cN: 'number',
      relevance: 0,
      v: [
        { b: e.BNR + '[lLjJ]?' },
        { b: '\\b(0o[0-7]+)[lLjJ]?' },
        { b: e.CNR + '[lLjJ]?' },
      ],
    },
    i = { cN: 'params', b: /\(/, e: /\)/, c: ['self', b, n, l, e.HCM] }
  return (
    (c.c = [l, n, b]),
    {
      aliases: ['py', 'gyp', 'ipython'],
      k: r,
      i: /(<\/|->|\?)|=>/,
      c: [
        b,
        n,
        { bK: 'if', relevance: 0 },
        l,
        e.HCM,
        {
          v: [
            { cN: 'function', bK: 'def' },
            { cN: 'class', bK: 'class' },
          ],
          e: /:/,
          i: /[${=;\n,]/,
          c: [e.UTM, i, { b: /->/, eW: !0, k: 'None' }],
        },
        { cN: 'meta', b: /^[\t ]*@/, e: /$/ },
        { b: /\b(print|exec)\(/ },
      ],
    }
  )
})
hljs.registerLanguage('ini', function (e) {
  var b = {
      cN: 'number',
      relevance: 0,
      v: [{ b: /([\+\-]+)?[\d]+_[\d_]+/ }, { b: e.NR }],
    },
    a = e.C()
  a.v = [
    { b: /;/, e: /$/ },
    { b: /#/, e: /$/ },
  ]
  var c = {
      cN: 'variable',
      v: [{ b: /\$[\w\d"][\w\d_]*/ }, { b: /\$\{(.*?)}/ }],
    },
    r = { cN: 'literal', b: /\bon|off|true|false|yes|no\b/ },
    n = {
      cN: 'string',
      c: [e.BE],
      v: [
        { b: "'''", e: "'''", relevance: 10 },
        { b: '"""', e: '"""', relevance: 10 },
        { b: '"', e: '"' },
        { b: "'", e: "'" },
      ],
    }
  return {
    aliases: ['toml'],
    cI: !0,
    i: /\S/,
    c: [
      a,
      { cN: 'section', b: /\[+/, e: /\]+/ },
      {
        b: /^[a-z0-9\[\]_\.-]+(?=\s*=\s*)/,
        cN: 'attr',
        starts: {
          e: /$/,
          c: [
            a,
            { b: /\[/, e: /\]/, c: [a, r, c, n, b, 'self'], relevance: 0 },
            r,
            c,
            n,
            b,
          ],
        },
      },
    ],
  }
})
hljs.registerLanguage('diff', function (e) {
  return {
    aliases: ['patch'],
    c: [
      {
        cN: 'meta',
        relevance: 10,
        v: [
          { b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/ },
          { b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/ },
          { b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/ },
        ],
      },
      {
        cN: 'comment',
        v: [
          { b: /Index: /, e: /$/ },
          { b: /={3,}/, e: /$/ },
          { b: /^\-{3}/, e: /$/ },
          { b: /^\*{3} /, e: /$/ },
          { b: /^\+{3}/, e: /$/ },
          { b: /^\*{15}$/ },
        ],
      },
      { cN: 'addition', b: '^\\+', e: '$' },
      { cN: 'deletion', b: '^\\-', e: '$' },
      { cN: 'addition', b: '^\\!', e: '$' },
    ],
  }
})
hljs.registerLanguage('http', function (e) {
  var t = 'HTTP/[0-9\\.]+'
  return {
    aliases: ['https'],
    i: '\\S',
    c: [
      { b: '^' + t, e: '$', c: [{ cN: 'number', b: '\\b\\d{3}\\b' }] },
      {
        b: '^[A-Z]+ (.*?) ' + t + '$',
        rB: !0,
        e: '$',
        c: [
          { cN: 'string', b: ' ', e: ' ', eB: !0, eE: !0 },
          { b: t },
          { cN: 'keyword', b: '[A-Z]+' },
        ],
      },
      {
        cN: 'attribute',
        b: '^\\w',
        e: ': ',
        eE: !0,
        i: '\\n|\\s|=',
        starts: { e: '$', relevance: 0 },
      },
      { b: '\\n\\n', starts: { sL: [], eW: !0 } },
    ],
  }
})
hljs.registerLanguage('sql', function (e) {
  var t = e.C('--', '$')
  return {
    cI: !0,
    i: /[<>{}*]/,
    c: [
      {
        bK:
          'begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment values with',
        e: /;/,
        eW: !0,
        l: /[\w\.]+/,
        k: {
          keyword:
            'as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias all allocate allow alter always analyze ancillary and anti any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound bucket buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain explode export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour hours http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lateral lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minutes minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second seconds section securefile security seed segment select self semi sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tablesample tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace window with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek',
          literal: 'true false null unknown',
          built_in:
            'array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text time timestamp tinyint varchar varchar2 varying void',
        },
        c: [
          { cN: 'string', b: "'", e: "'", c: [{ b: "''" }] },
          { cN: 'string', b: '"', e: '"', c: [{ b: '""' }] },
          { cN: 'string', b: '`', e: '`' },
          e.CNM,
          e.CBCM,
          t,
          e.HCM,
        ],
      },
      e.CBCM,
      t,
      e.HCM,
    ],
  }
})
hljs.registerLanguage('json', function (e) {
  var i = { literal: 'true false null' },
    n = [e.CLCM, e.CBCM],
    c = [e.QSM, e.CNM],
    r = { e: ',', eW: !0, eE: !0, c: c, k: i },
    t = {
      b: '{',
      e: '}',
      c: [
        { cN: 'attr', b: /"/, e: /"/, c: [e.BE], i: '\\n' },
        e.inherit(r, { b: /:/ }),
      ].concat(n),
      i: '\\S',
    },
    a = { b: '\\[', e: '\\]', c: [e.inherit(r)], i: '\\S' }
  return (
    c.push(t, a),
    n.forEach(function (e) {
      c.push(e)
    }),
    { c: c, k: i, i: '\\S' }
  )
})
hljs.registerLanguage('rust', function (e) {
  var t = '([ui](8|16|32|64|128|size)|f(32|64))?',
    r =
      'drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!'
  return {
    aliases: ['rs'],
    k: {
      keyword:
        'abstract as async await become box break const continue crate do dyn else enum extern false final fn for if impl in let loop macro match mod move mut override priv pub ref return self Self static struct super trait true try type typeof unsafe unsized use virtual where while yield',
      literal: 'true false Some None Ok Err',
      built_in: r,
    },
    l: e.IR + '!?',
    i: '</',
    c: [
      e.CLCM,
      e.C('/\\*', '\\*/', { c: ['self'] }),
      e.inherit(e.QSM, { b: /b?"/, i: null }),
      {
        cN: 'string',
        v: [
          { b: /r(#*)"(.|\n)*?"\1(?!#)/ },
          { b: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ },
        ],
      },
      { cN: 'symbol', b: /'[a-zA-Z_][a-zA-Z0-9_]*/ },
      {
        cN: 'number',
        v: [
          { b: '\\b0b([01_]+)' + t },
          { b: '\\b0o([0-7_]+)' + t },
          { b: '\\b0x([A-Fa-f0-9_]+)' + t },
          { b: '\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)' + t },
        ],
        relevance: 0,
      },
      { cN: 'function', bK: 'fn', e: '(\\(|<)', eE: !0, c: [e.UTM] },
      {
        cN: 'meta',
        b: '#\\!?\\[',
        e: '\\]',
        c: [{ cN: 'meta-string', b: /"/, e: /"/ }],
      },
      {
        cN: 'class',
        bK: 'type',
        e: ';',
        c: [e.inherit(e.UTM, { endsParent: !0 })],
        i: '\\S',
      },
      {
        cN: 'class',
        bK: 'trait enum struct union',
        e: '{',
        c: [e.inherit(e.UTM, { endsParent: !0 })],
        i: '[\\w\\d]',
      },
      { b: e.IR + '::', k: { built_in: r } },
      { b: '->' },
    ],
  }
})
hljs.registerLanguage('java', function (e) {
  var a =
      'false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do',
    t = {
      cN: 'number',
      b:
        '\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?',
      relevance: 0,
    }
  return {
    aliases: ['jsp'],
    k: a,
    i: /<\/|#/,
    c: [
      e.C('/\\*\\*', '\\*/', {
        relevance: 0,
        c: [
          { b: /\w+@/, relevance: 0 },
          { cN: 'doctag', b: '@[A-Za-z]+' },
        ],
      }),
      e.CLCM,
      e.CBCM,
      e.ASM,
      e.QSM,
      {
        cN: 'class',
        bK: 'class interface',
        e: /[{;=]/,
        eE: !0,
        k: 'class interface',
        i: /[:"\[\]]/,
        c: [{ bK: 'extends implements' }, e.UTM],
      },
      { bK: 'new throw return else', relevance: 0 },
      {
        cN: 'function',
        b:
          '([À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*)*>)?\\s+)+' +
          e.UIR +
          '\\s*\\(',
        rB: !0,
        e: /[{;=]/,
        eE: !0,
        k: a,
        c: [
          { b: e.UIR + '\\s*\\(', rB: !0, relevance: 0, c: [e.UTM] },
          {
            cN: 'params',
            b: /\(/,
            e: /\)/,
            k: a,
            relevance: 0,
            c: [e.ASM, e.QSM, e.CNM, e.CBCM],
          },
          e.CLCM,
          e.CBCM,
        ],
      },
      t,
      { cN: 'meta', b: '@[A-Za-z]+' },
    ],
  }
})
hljs.registerLanguage('vim', function (e) {
  return {
    l: /[!#@\w]+/,
    k: {
      keyword:
        'N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu go gr grepa gu gv ha helpf helpg helpt hi hid his ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf quita qa rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank',
      built_in:
        'synIDtrans atan2 range matcharg did_filetype asin feedkeys xor argv complete_check add getwinposx getqflist getwinposy screencol clearmatches empty extend getcmdpos mzeval garbagecollect setreg ceil sqrt diff_hlID inputsecret get getfperm getpid filewritable shiftwidth max sinh isdirectory synID system inputrestore winline atan visualmode inputlist tabpagewinnr round getregtype mapcheck hasmapto histdel argidx findfile sha256 exists toupper getcmdline taglist string getmatches bufnr strftime winwidth bufexists strtrans tabpagebuflist setcmdpos remote_read printf setloclist getpos getline bufwinnr float2nr len getcmdtype diff_filler luaeval resolve libcallnr foldclosedend reverse filter has_key bufname str2float strlen setline getcharmod setbufvar index searchpos shellescape undofile foldclosed setqflist buflisted strchars str2nr virtcol floor remove undotree remote_expr winheight gettabwinvar reltime cursor tabpagenr finddir localtime acos getloclist search tanh matchend rename gettabvar strdisplaywidth type abs py3eval setwinvar tolower wildmenumode log10 spellsuggest bufloaded synconcealed nextnonblank server2client complete settabwinvar executable input wincol setmatches getftype hlID inputsave searchpair or screenrow line settabvar histadd deepcopy strpart remote_peek and eval getftime submatch screenchar winsaveview matchadd mkdir screenattr getfontname libcall reltimestr getfsize winnr invert pow getbufline byte2line soundfold repeat fnameescape tagfiles sin strwidth spellbadword trunc maparg log lispindent hostname setpos globpath remote_foreground getchar synIDattr fnamemodify cscope_connection stridx winbufnr indent min complete_add nr2char searchpairpos inputdialog values matchlist items hlexists strridx browsedir expand fmod pathshorten line2byte argc count getwinvar glob foldtextresult getreg foreground cosh matchdelete has char2nr simplify histget searchdecl iconv winrestcmd pumvisible writefile foldlevel haslocaldir keys cos matchstr foldtext histnr tan tempname getcwd byteidx getbufvar islocked escape eventhandler remote_send serverlist winrestview synstack pyeval prevnonblank readfile cindent filereadable changenr exp',
    },
    i: /;/,
    c: [
      e.NM,
      { cN: 'string', b: "'", e: "'", i: '\\n' },
      { cN: 'string', b: /"(\\"|\n\\|[^"\n])*"/ },
      e.C('"', '$'),
      { cN: 'variable', b: /[bwtglsav]:[\w\d_]*/ },
      {
        cN: 'function',
        bK: 'function function!',
        e: '$',
        relevance: 0,
        c: [e.TM, { cN: 'params', b: '\\(', e: '\\)' }],
      },
      { cN: 'symbol', b: /<[\w-]+>/ },
    ],
  }
})
hljs.registerLanguage('makefile', function (e) {
  var i = {
      cN: 'variable',
      v: [{ b: '\\$\\(' + e.UIR + '\\)', c: [e.BE] }, { b: /\$[@%<?\^\+\*]/ }],
    },
    r = { cN: 'string', b: /"/, e: /"/, c: [e.BE, i] },
    a = {
      cN: 'variable',
      b: /\$\([\w-]+\s/,
      e: /\)/,
      k: {
        built_in:
          'subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value',
      },
      c: [i],
    },
    n = { b: '^' + e.UIR + '\\s*(?=[:+?]?=)' },
    t = { cN: 'section', b: /^[^\s]+:/, e: /$/, c: [i] }
  return {
    aliases: ['mk', 'mak'],
    k:
      'define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath',
    l: /[\w-]+/,
    c: [
      e.HCM,
      i,
      r,
      a,
      n,
      {
        cN: 'meta',
        b: /^\.PHONY:/,
        e: /$/,
        k: { 'meta-keyword': '.PHONY' },
        l: /[\.\w]+/,
      },
      t,
    ],
  }
})
hljs.registerLanguage('shell', function (s) {
  return {
    aliases: ['console'],
    c: [
      {
        cN: 'meta',
        b: '^\\s{0,3}[/\\w\\d\\[\\]()@-]*[>%$#]',
        starts: { e: '$', sL: 'bash' },
      },
    ],
  }
})
hljs.registerLanguage('typescript', function (e) {
  var r = '[A-Za-z$_][0-9A-Za-z$_]*',
    t = {
      keyword:
        'in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await',
      literal: 'true false null undefined NaN Infinity',
      built_in:
        'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise',
    },
    n = { cN: 'meta', b: '@' + r },
    a = { b: '\\(', e: /\)/, k: t, c: ['self', e.QSM, e.ASM, e.NM] },
    c = {
      cN: 'params',
      b: /\(/,
      e: /\)/,
      eB: !0,
      eE: !0,
      k: t,
      c: [e.CLCM, e.CBCM, n, a],
    },
    s = {
      cN: 'number',
      v: [
        { b: '\\b(0[bB][01]+)n?' },
        { b: '\\b(0[oO][0-7]+)n?' },
        { b: e.CNR + 'n?' },
      ],
      relevance: 0,
    },
    o = { cN: 'subst', b: '\\$\\{', e: '\\}', k: t, c: [] },
    i = {
      b: 'html`',
      e: '',
      starts: { e: '`', rE: !1, c: [e.BE, o], sL: 'xml' },
    },
    l = {
      b: 'css`',
      e: '',
      starts: { e: '`', rE: !1, c: [e.BE, o], sL: 'css' },
    },
    b = { cN: 'string', b: '`', e: '`', c: [e.BE, o] }
  return (
    (o.c = [e.ASM, e.QSM, i, l, b, s, e.RM]),
    {
      aliases: ['ts'],
      k: t,
      c: [
        { cN: 'meta', b: /^\s*['"]use strict['"]/ },
        e.ASM,
        e.QSM,
        i,
        l,
        b,
        e.CLCM,
        e.CBCM,
        s,
        {
          b: '(' + e.RSR + '|\\b(case|return|throw)\\b)\\s*',
          k: 'return throw case',
          c: [
            e.CLCM,
            e.CBCM,
            e.RM,
            {
              cN: 'function',
              b: '(\\(.*?\\)|' + e.IR + ')\\s*=>',
              rB: !0,
              e: '\\s*=>',
              c: [
                {
                  cN: 'params',
                  v: [
                    { b: e.IR },
                    { b: /\(\s*\)/ },
                    {
                      b: /\(/,
                      e: /\)/,
                      eB: !0,
                      eE: !0,
                      k: t,
                      c: ['self', e.CLCM, e.CBCM],
                    },
                  ],
                },
              ],
            },
          ],
          relevance: 0,
        },
        {
          cN: 'function',
          bK: 'function',
          e: /[\{;]/,
          eE: !0,
          k: t,
          c: ['self', e.inherit(e.TM, { b: r }), c],
          i: /%/,
          relevance: 0,
        },
        { bK: 'constructor', e: /[\{;]/, eE: !0, c: ['self', c] },
        { b: /module\./, k: { built_in: 'module' }, relevance: 0 },
        { bK: 'module', e: /\{/, eE: !0 },
        { bK: 'interface', e: /\{/, eE: !0, k: 'interface extends' },
        { b: /\$[(.]/ },
        { b: '\\.' + e.IR, relevance: 0 },
        n,
        a,
      ],
    }
  )
})
hljs.registerLanguage('php', function (e) {
  var c = { b: '\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*' },
    i = { cN: 'meta', b: /<\?(php)?|\?>/ },
    t = {
      cN: 'string',
      c: [e.BE, i],
      v: [
        { b: 'b"', e: '"' },
        { b: "b'", e: "'" },
        e.inherit(e.ASM, { i: null }),
        e.inherit(e.QSM, { i: null }),
      ],
    },
    a = { v: [e.BNM, e.CNM] }
  return {
    aliases: ['php', 'php3', 'php4', 'php5', 'php6', 'php7'],
    cI: !0,
    k:
      'and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally',
    c: [
      e.HCM,
      e.C('//', '$', { c: [i] }),
      e.C('/\\*', '\\*/', { c: [{ cN: 'doctag', b: '@[A-Za-z]+' }] }),
      e.C('__halt_compiler.+?;', !1, {
        eW: !0,
        k: '__halt_compiler',
        l: e.UIR,
      }),
      {
        cN: 'string',
        b: /<<<['"]?\w+['"]?$/,
        e: /^\w+;?$/,
        c: [e.BE, { cN: 'subst', v: [{ b: /\$\w+/ }, { b: /\{\$/, e: /\}/ }] }],
      },
      i,
      { cN: 'keyword', b: /\$this\b/ },
      c,
      { b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ },
      {
        cN: 'function',
        bK: 'function',
        e: /[;{]/,
        eE: !0,
        i: '\\$|\\[|%',
        c: [
          e.UTM,
          { cN: 'params', b: '\\(', e: '\\)', c: ['self', c, e.CBCM, t, a] },
        ],
      },
      {
        cN: 'class',
        bK: 'class interface',
        e: '{',
        eE: !0,
        i: /[:\(\$"]/,
        c: [{ bK: 'extends implements' }, e.UTM],
      },
      { bK: 'namespace', e: ';', i: /[\.']/, c: [e.UTM] },
      { bK: 'use', e: ';', c: [e.UTM] },
      { b: '=>' },
      t,
      a,
    ],
  }
})
hljs.registerLanguage('css', function (e) {
  var c = {
    b: /(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,
    rB: !0,
    e: ';',
    eW: !0,
    c: [
      {
        cN: 'attribute',
        b: /\S/,
        e: ':',
        eE: !0,
        starts: {
          eW: !0,
          eE: !0,
          c: [
            {
              b: /[\w-]+\(/,
              rB: !0,
              c: [
                { cN: 'built_in', b: /[\w-]+/ },
                { b: /\(/, e: /\)/, c: [e.ASM, e.QSM, e.CSSNM] },
              ],
            },
            e.CSSNM,
            e.QSM,
            e.ASM,
            e.CBCM,
            { cN: 'number', b: '#[0-9A-Fa-f]+' },
            { cN: 'meta', b: '!important' },
          ],
        },
      },
    ],
  }
  return {
    cI: !0,
    i: /[=\/|'\$]/,
    c: [
      e.CBCM,
      { cN: 'selector-id', b: /#[A-Za-z0-9_-]+/ },
      { cN: 'selector-class', b: /\.[A-Za-z0-9_-]+/ },
      { cN: 'selector-attr', b: /\[/, e: /\]/, i: '$', c: [e.ASM, e.QSM] },
      { cN: 'selector-pseudo', b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ },
      { b: '@(page|font-face)', l: '@[a-z-]+', k: '@page @font-face' },
      {
        b: '@',
        e: '[{;]',
        i: /:/,
        rB: !0,
        c: [
          { cN: 'keyword', b: /@\-?\w[\w]*(\-\w+)*/ },
          {
            b: /\s/,
            eW: !0,
            eE: !0,
            relevance: 0,
            k: 'and or not only',
            c: [{ b: /[a-z-]+:/, cN: 'attribute' }, e.ASM, e.QSM, e.CSSNM],
          },
        ],
      },
      { cN: 'selector-tag', b: '[a-zA-Z-][a-zA-Z0-9_-]*', relevance: 0 },
      { b: '{', e: '}', i: /\S/, c: [e.CBCM, c] },
    ],
  }
})
