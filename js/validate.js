function hideerror() {
    $(".formError").remove()
}
function hidemsg() {
    $(".contact-success").remove(),
    $(".register-success").remove()
}
function checkEmail(e) {
    var r = document.getElementById(e)
      , t = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return !!t.test(r.value)
}
function checkNull(e, r, t) {
    var a = $("#" + e).val().trim();
    return "" == a || a == t ? ($("#error_" + e).length > 0 ? $("#error_" + e).html(r) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"),
    !1) : !0
}
function checkPhone(e, r, t) {
    var a = $("#" + e).val().trim();
    return "" == a || a == t || a.length < 10 || a.length > 11 ? ($("#error_" + e).length > 0 ? $("#error_" + e).html(r) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"),
    !1) : !0
}
function checkMail(e, r) {
    return checkEmail(e) ? !0 : ($("#error_" + e).length > 0 ? $("#error_" + e).html(r) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError" ><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"),
    !1)
}
function checkCaptcha(e, r) {
    var t = $("#" + e).val().trim()
      , a = $("#" + e + "_bk").val().trim();
    return t != a ? ($("#error_" + e).length > 0 ? $("#error_" + e).html(r) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError" ><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"),
    !1) : !0
}
function checkNullTwo(e, r, t, a, o) {
    var i = $("#" + e).val().trim()
      , n = $("#" + r).val().trim();
    return "" == i || i == a || "" == n || n == o ? ($("#error_" + e).length > 0 ? $("#error_" + e).html(t) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError" ><div id="error_' + e + '" class="formErrorContent">' + t + "</div></div>"),
    !1) : !0
}
function checkSelect(e, r, t) {
    var a = $("#" + e).val();
    return "" == a || a == t || 0 == a ? ($("#error_" + e).length > 0 ? $("#error_" + e).html(r) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"),
    !1) : !0
}
function checkComment(e, r, t) {
    var a = $("#" + e).val().trim();
    return !$("#other-check:checked").length || "" != a && a != t ? !0 : ($("#error_" + e).length > 0 ? $("#error_" + e).html(r) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"),
    !1)
}
function checkNhucau(e, r) {
    return $("#other-check:checked").length || $("." + e + ":checked").length ? !0 : ($("#error_" + e).length > 0 ? $("#error_" + e).html(r) : $("." + e + ":first").after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"),
    !1)
}
function checkCheckbox(e, r) {
    return $("." + e + ":checked").length ? !0 : ($("#error_" + e).length > 0 ? $("#error_" + e).html(r) : $("." + e + ":first").after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"),
    !1)
}
function checkQuocTich(e, r) {
    return $("." + e + ":checked").length ? !0 : ($("#error_" + e).length > 0 ? $("#error_" + e).html(r) : $("." + e + ":first").parent().after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"),
    !1)
}
function checkCMND(e, r, t) {
    var a = $("#" + e).val().trim();
    return "" == a || a == t || 9 != a.length && 12 != a.length ? ($("#error_" + e).length > 0 ? $("#error_" + e).html(r) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"),
    !1) : !0
}
function checkPassport(e, r, t) {
    var a = $("#" + e).val().trim();
    return "" == a || a == t || a.length > 12 ? ($("#error_" + e).length > 0 ? $("#error_" + e).html(r) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"),
    !1) : !0
}
function parseDate(e) {
    var r = e.split("/");
    return new Date(r[2],r[1],r[0])
}
function checkDate(e, r, t, a, o, i) {
    var n = $("#" + e).val().trim()
      , l = n.split("/")
      , s = l[0] + "/" + l[1] + "/" + (parseInt(l[2]) + 2)
      , d = new Date
      , c = parseDate(s).getTime()
      , u = parseDate(d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear()).getTime();
    return "" == n || n == t ? ($("#error_" + e).length > 0 ? $("#error_" + e).html(r) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"),
    !1) : c > u ? ($("#error_" + e).length > 0 ? $("#error_" + e).html(i) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + i + "</div></div>"),
    !1) : !0
}
function validatecontact() {
    hidemsg();
    var e = !0
      , r = checkNull("name", $("#name").attr("data-error"), $("#name").attr("data-default"), "40", "-270")
      , t = checkNull("comments", $("#comments").attr("data-error"), $("#comments").attr("data-default"), "40", "-270")
      , a = checkPhone("phone", $("#phone").attr("data-error"), $("#phone").attr("data-default"), "40", "-270")
      , o = checkMail("email", $("#email").attr("data-error"), $("#email").attr("data-default"), "40", "-270");
    if (!(r && t && a && o)) {
        if ($(".form-main").length) {
            var i = 80
              , n = $(".form-main").offset().top - i;
            $("html, body").animate({
                scrollTop: n
            }, 1e3, "easeInOutExpo")
        }
        e = !1,
        setTimeout(hideerror, 5e3)
    }
    return e
}
!function(e) {
    var r = {
        init: function(t) {
            var a = this;
            return a.data("jqv") && null != a.data("jqv") || (t = r._saveOptions(a, t),
            e(".formError").live("click", function() {
                e(this).fadeOut(150, function() {
                    e(this).parent(".formErrorOuter").remove(),
                    e(this).remove()
                })
            })),
            this
        },
        attach: function(t) {
            var a, o = this;
            a = t ? r._saveOptions(o, t) : o.data("jqv");
            o.find("[data-validation-engine*=validate]") ? "data-validation-engine" : "class";
            return a.binded || ("bind" == a.bindMethod ? (o.find("[class*=validate]").not("[type=checkbox]").not("[type=radio]").not(".datepicker").bind(a.validationEventTrigger, r._onFieldEvent),
            o.find("[class*=validate][type=checkbox],[class*=validate][type=radio]").bind("click", r._onFieldEvent),
            o.find("[class*=validate][class*=datepicker]").bind(a.validationEventTrigger, {
                delay: 300
            }, r._onFieldEvent),
            o.bind("submit", r._onSubmitEvent)) : "live" == a.bindMethod && (o.find("[class*=validate]").not("[type=checkbox]").not(".datepicker").live(a.validationEventTrigger, r._onFieldEvent),
            o.find("[class*=validate][type=checkbox]").live("click", r._onFieldEvent),
            o.find("[class*=validate][class*=datepicker]").live(a.validationEventTrigger, {
                delay: 300
            }, r._onFieldEvent),
            o.live("submit", r._onSubmitEvent)),
            a.binded = !0,
            a.autoPositionUpdate && e(window).bind("resize", {
                noAnimation: !0,
                formElem: o
            }, r.updatePromptsPosition)),
            this
        },
        detach: function() {
            var t = this
              , a = t.data("jqv");
            return a.binded && (t.find("[class*=validate]").not("[type=checkbox]").unbind(a.validationEventTrigger, r._onFieldEvent),
            t.find("[class*=validate][type=checkbox],[class*=validate][type=radio]").unbind("click", r._onFieldEvent),
            t.unbind("submit", r.onAjaxFormComplete),
            t.find("[class*=validate]").not("[type=checkbox]").die(a.validationEventTrigger, r._onFieldEvent),
            t.find("[class*=validate][type=checkbox]").die("click", r._onFieldEvent),
            t.die("submit", r.onAjaxFormComplete),
            t.removeData("jqv"),
            a.autoPositionUpdate && e(window).unbind("resize", r.updatePromptsPosition)),
            this
        },
        validate: function() {
            return r._validateFields(this)
        },
        validateField: function(t) {
            var a = e(this).data("jqv")
              , o = r._validateField(e(t), a);
            return a.onSuccess && 0 == a.InvalidFields.length ? a.onSuccess() : a.onFailure && a.InvalidFields.length > 0 && a.onFailure(),
            o
        },
        validateform: function() {
            return r._onSubmitEvent.call(this)
        },
        updatePromptsPosition: function(t) {
            if (t && this == window)
                var a = t.data.formElem
                  , o = t.data.noAnimation;
            else
                var a = e(this.closest("form"));
            var i = a.data("jqv");
            return a.find("[class*=validate]").not(":hidden").not(":disabled").each(function() {
                var t = e(this)
                  , a = r._getPrompt(t)
                  , n = e(a).find(".formErrorContent").html();
                a && r._updatePrompt(t, e(a), n, void 0, !1, i, o)
            }),
            this
        },
        showPrompt: function(e, t, a, o) {
            var i = this.closest("form")
              , n = i.data("jqv");
            return n || (n = r._saveOptions(this, n)),
            a && (n.promptPosition = a),
            n.showArrow = 1 == o,
            r._showPrompt(this, e, t, !1, n),
            this
        },
        hidePrompt: function() {
            var t = "." + r._getClassName(e(this).attr("id")) + "formError";
            return e(t).fadeTo("fast", .3, function() {
                e(this).parent(".formErrorOuter").remove(),
                e(this).remove()
            }),
            this
        },
        hide: function() {
            var t;
            return t = e(this).is("form") ? "parentForm" + r._getClassName(e(this).attr("id")) : r._getClassName(e(this).attr("id")) + "formError",
            e("." + t).fadeTo("fast", .3, function() {
                e(this).parent(".formErrorOuter").remove(),
                e(this).remove()
            }),
            this
        },
        hideAll: function() {
            return e(".formError").fadeTo("fast", .3, function() {
                e(this).parent(".formErrorOuter").remove(),
                e(this).remove()
            }),
            this
        },
        _onFieldEvent: function(t) {
            var a = e(this)
              , o = a.closest("form")
              , i = o.data("jqv");
            window.setTimeout(function() {
                r._validateField(a, i),
                0 == i.InvalidFields.length && i.onSuccess ? i.onSuccess() : i.InvalidFields.length > 0 && i.onFailure && i.onFailure()
            }, t.data ? t.data.delay : 0)
        },
        _onSubmitEvent: function() {
            var t = e(this)
              , a = t.data("jqv")
              , o = r._validateFields(t, !0);
            return o && a.ajaxFormValidation ? (r._validateFormWithAjax(t, a),
            !1) : a.onValidationComplete ? (a.onValidationComplete(t, o),
            !1) : o
        },
        _checkAjaxStatus: function(r) {
            var t = !0;
            return e.each(r.ajaxValidCache, function(e, r) {
                return r ? void 0 : (t = !1,
                !1)
            }),
            t
        },
        _validateFields: function(t, a) {
            var o = t.data("jqv")
              , i = !1;
            t.trigger("jqv.form.validating");
            var n = null;
            if (t.find("[class*=validate]").not(":hidden").not(":disabled").each(function() {
                var t = e(this);
                return i |= r._validateField(t, o, a),
                t.focus(),
                o.doNotShowAllErrosOnSubmit ? !1 : void (i && null == n && (n = t))
            }),
            t.trigger("jqv.form.result", [i]),
            i) {
                if (o.scroll) {
                    var l = n.offset().top
                      , s = n.offset().left
                      , d = o.promptPosition;
                    if ("string" == typeof d && -1 != d.indexOf(":") && (d = d.substring(0, d.indexOf(":"))),
                    "bottomRight" != d && "bottomLeft" != d) {
                        var c = r._getPrompt(n);
                        l = c.offset().top
                    }
                    if (o.isOverflown) {
                        var u = e(o.overflownDIV);
                        if (!u.length)
                            return !1;
                        var f = u.scrollTop()
                          , m = -parseInt(u.offset().top);
                        l += f + m - 5;
                        var v = e(o.overflownDIV + ":not(:animated)");
                        v.animate({
                            scrollTop: l
                        }, 1100)
                    } else
                        e("html:not(:animated),body:not(:animated)").animate({
                            scrollTop: l,
                            scrollLeft: s
                        }, 1100, function() {
                            o.focusFirstField && n.focus()
                        })
                } else
                    o.focusFirstField && n.focus();
                return !1
            }
            return !0
        },
        _validateFormWithAjax: function(t, a) {
            var o = t.serialize()
              , i = a.ajaxFormValidationURL ? a.ajaxFormValidationURL : t.attr("action");
            e.ajax({
                type: "GET",
                url: i,
                cache: !1,
                dataType: "json",
                data: o,
                form: t,
                methods: r,
                options: a,
                beforeSend: function() {
                    return a.onBeforeAjaxFormValidation(t, a)
                },
                error: function(e, t) {
                    r._ajaxError(e, t)
                },
                success: function(o) {
                    if (o !== !0) {
                        for (var i = !1, n = 0; n < o.length; n++) {
                            var l = o[n]
                              , s = l[0]
                              , d = e(e("#" + s)[0]);
                            if (1 == d.length) {
                                var c = l[2];
                                if (1 == l[1])
                                    if ("" != c && c) {
                                        if (a.allrules[c]) {
                                            var u = a.allrules[c].alertTextOk;
                                            u && (c = u)
                                        }
                                        r._showPrompt(d, c, "pass", !1, a, !0)
                                    } else
                                        r._closePrompt(d);
                                else {
                                    if (i |= !0,
                                    a.allrules[c]) {
                                        var u = a.allrules[c].alertText;
                                        u && (c = u)
                                    }
                                    r._showPrompt(d, c, "", !1, a, !0)
                                }
                            }
                        }
                        a.onAjaxFormComplete(!i, t, o, a)
                    } else
                        a.onAjaxFormComplete(!0, t, "", a)
                }
            })
        },
        _validateField: function(t, a, o) {
            t.attr("id") || e.error("jQueryValidate: an ID attribute is required for this field: " + t.attr("name") + " class:" + t.attr("class"));
            var i = t.attr("class")
              , n = /validate\[(.*)\]/.exec(i);
            if (!n)
                return !1;
            var l = n[1]
              , s = l.split(/\[|,|\]/)
              , d = !1
              , c = t.attr("name")
              , u = ""
              , f = !1;
            a.isError = !1,
            a.showArrow = !0;
            for (var m = e(t.closest("form")), v = 0; v < s.length; v++) {
                s[v] = s[v].replace(" ", "");
                var p = void 0;
                switch (s[v]) {
                case "required":
                    f = !0,
                    p = r._required(t, s, v, a);
                    break;
                case "custom":
                    p = r._customRegex(t, s, v, a);
                    break;
                case "groupRequired":
                    var h = "[class*=" + s[v + 1] + "]"
                      , g = m.find(h).eq(0);
                    if (g[0] != t[0]) {
                        r._validateField(g, a, o),
                        a.showArrow = !0;
                        continue
                    }
                    p = r._groupRequired(t, s, v, a),
                    p && (f = !0),
                    a.showArrow = !1;
                    break;
                case "ajax":
                    o || (r._ajax(t, s, v, a),
                    d = !0);
                    break;
                case "minSize":
                    p = r._minSize(t, s, v, a);
                    break;
                case "maxSize":
                    p = r._maxSize(t, s, v, a);
                    break;
                case "min":
                    p = r._min(t, s, v, a);
                    break;
                case "max":
                    p = r._max(t, s, v, a);
                    break;
                case "past":
                    p = r._past(t, s, v, a);
                    break;
                case "future":
                    p = r._future(t, s, v, a);
                    break;
                case "dateRange":
                    var h = "[class*=" + s[v + 1] + "]"
                      , g = m.find(h).eq(0)
                      , _ = m.find(h).eq(1);
                    (g[0].value || _[0].value) && (p = r._dateRange(g, _, s, v, a)),
                    p && (f = !0),
                    a.showArrow = !1;
                    break;
                case "dateTimeRange":
                    var h = "[class*=" + s[v + 1] + "]"
                      , g = m.find(h).eq(0)
                      , _ = m.find(h).eq(1);
                    (g[0].value || _[0].value) && (p = r._dateTimeRange(g, _, s, v, a)),
                    p && (f = !0),
                    a.showArrow = !1;
                    break;
                case "maxCheckbox":
                    p = r._maxCheckbox(m, t, s, v, a),
                    t = e(m.find("input[name='" + c + "']"));
                    break;
                case "minCheckbox":
                    p = r._minCheckbox(m, t, s, v, a),
                    t = e(m.find("input[name='" + c + "']"));
                    break;
                case "equals":
                    p = r._equals(t, s, v, a);
                    break;
                case "funcCall":
                    p = r._funcCall(t, s, v, a);
                    break;
                case "creditCard":
                    p = r._creditCard(t, s, v, a)
                }
                void 0 !== p && (u += p + "<br/>",
                a.isError = !0)
            }
            f || "" != t.val() || (a.isError = !1);
            var x = t.prop("type");
            ("radio" == x || "checkbox" == x) && m.find("input[name='" + c + "']").size() > 1 && (t = e(m.find("input[name='" + c + "'][type!=hidden]:first")),
            a.showArrow = !1),
            "text" == x && m.find("input[name='" + c + "']").size() > 1 && (t = e(m.find("input[name='" + c + "'][type!=hidden]:first")),
            a.showArrow = !1),
            a.isError ? r._showPrompt(t, u, "", !1, a) : d || r._closePrompt(t),
            d || t.trigger("jqv.field.result", [t, a.isError, u]);
            var b = e.inArray(t[0], a.InvalidFields);
            return -1 == b ? a.isError && a.InvalidFields.push(t[0]) : a.isError || a.InvalidFields.splice(b, 1),
            a.isError
        },
        _required: function(e, r, t, a) {
            switch (e.prop("type")) {
            case "text":
            case "password":
            case "textarea":
            case "file":
            default:
                if (!e.val())
                    return a.allrules[r[t]].alertText;
                break;
            case "radio":
            case "checkbox":
                var o = e.closest("form")
                  , i = e.attr("name");
                if (0 == o.find("input[name='" + i + "']:checked").size())
                    return 1 == o.find("input[name='" + i + "']").size() ? a.allrules[r[t]].alertTextCheckboxe : a.allrules[r[t]].alertTextCheckboxMultiple;
                break;
            case "select-one":
                if (!e.val())
                    return a.allrules[r[t]].alertText;
                break;
            case "select-multiple":
                if (!e.find("option:selected").val())
                    return a.allrules[r[t]].alertText
            }
        },
        _groupRequired: function(t, a, o, i) {
            var n = "[class*=" + a[o + 1] + "]"
              , l = !1;
            return t.closest("form").find(n).each(function() {
                return r._required(e(this), a, o, i) ? void 0 : (l = !0,
                !1)
            }),
            l ? void 0 : i.allrules[a[o]].alertText
        },
        _customRegex: function(e, r, t, a) {
            var o = r[t + 1]
              , i = a.allrules[o];
            if (!i)
                return void alert("jqv:custom rule not found " + o);
            var n = i.regex;
            if (!n)
                return void alert("jqv:custom regex not found " + o);
            var l = new RegExp(n);
            return l.test(e.val()) ? void 0 : a.allrules[o].alertText
        },
        _funcCall: function(e, r, t, a) {
            var o = r[t + 1]
              , i = window[o] || a.customFunctions[o];
            return "function" == typeof i ? i(e, r, t, a) : void 0
        },
        _equals: function(r, t, a, o) {
            var i = t[a + 1];
            return r.val() != e("#" + i).val() ? o.allrules.equals.alertText : void 0
        },
        _maxSize: function(e, r, t, a) {
            var o = r[t + 1]
              , i = e.val().length;
            if (i > o) {
                var n = a.allrules.maxSize;
                return n.alertText + o + n.alertText2
            }
        },
        _minSize: function(e, r, t, a) {
            var o = r[t + 1]
              , i = e.val().length;
            if (o > i) {
                var n = a.allrules.minSize;
                return n.alertText + o + n.alertText2
            }
        },
        _min: function(e, r, t, a) {
            var o = parseFloat(r[t + 1])
              , i = parseFloat(e.val());
            if (o > i) {
                var n = a.allrules.min;
                return n.alertText2 ? n.alertText + o + n.alertText2 : n.alertText + o
            }
        },
        _max: function(e, r, t, a) {
            var o = parseFloat(r[t + 1])
              , i = parseFloat(e.val());
            if (i > o) {
                var n = a.allrules.max;
                return n.alertText2 ? n.alertText + o + n.alertText2 : n.alertText + o
            }
        },
        _past: function(e, t, a, o) {
            var i = t[a + 1]
              , n = "now" == i.toLowerCase() ? new Date : r._parseDate(i)
              , l = r._parseDate(e.val());
            if (l > n) {
                var s = o.allrules.past;
                return s.alertText2 ? s.alertText + r._dateToString(n) + s.alertText2 : s.alertText + r._dateToString(n)
            }
        },
        _future: function(e, t, a, o) {
            var i = t[a + 1]
              , n = "now" == i.toLowerCase() ? new Date : r._parseDate(i)
              , l = r._parseDate(e.val());
            if (n > l) {
                var s = o.allrules.future;
                return s.alertText2 ? s.alertText + r._dateToString(n) + s.alertText2 : s.alertText + r._dateToString(n)
            }
        },
        _isDate: function(e) {
            var r = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);
            return !!r.test(e)
        },
        _isDateTime: function(e) {
            var r = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);
            return !!r.test(e)
        },
        _dateCompare: function(e, r) {
            return new Date(e.toString()) < new Date(r.toString())
        },
        _dateRange: function(e, t, a, o, i) {
            return !e[0].value && t[0].value || e[0].value && !t[0].value ? i.allrules[a[o]].alertText + i.allrules[a[o]].alertText2 : r._isDate(e[0].value) && r._isDate(t[0].value) && r._dateCompare(e[0].value, t[0].value) ? void 0 : i.allrules[a[o]].alertText + i.allrules[a[o]].alertText2
        },
        _dateTimeRange: function(e, t, a, o, i) {
            return !e[0].value && t[0].value || e[0].value && !t[0].value ? i.allrules[a[o]].alertText + i.allrules[a[o]].alertText2 : r._isDateTime(e[0].value) && r._isDateTime(t[0].value) && r._dateCompare(e[0].value, t[0].value) ? void 0 : i.allrules[a[o]].alertText + i.allrules[a[o]].alertText2
        },
        _maxCheckbox: function(e, r, t, a, o) {
            var i = t[a + 1]
              , n = r.attr("name")
              , l = e.find("input[name='" + n + "']:checked").size();
            return l > i ? (o.showArrow = !1,
            o.allrules.maxCheckbox.alertText2 ? o.allrules.maxCheckbox.alertText + " " + i + " " + o.allrules.maxCheckbox.alertText2 : o.allrules.maxCheckbox.alertText) : void 0
        },
        _minCheckbox: function(e, r, t, a, o) {
            var i = t[a + 1]
              , n = r.attr("name")
              , l = e.find("input[name='" + n + "']:checked").size();
            return i > l ? (o.showArrow = !1,
            o.allrules.minCheckbox.alertText + " " + i + " " + o.allrules.minCheckbox.alertText2) : void 0
        },
        _creditCard: function(e, r, t, a) {
            var o = !1
              , i = e.val().replace(/ +/g, "").replace(/-+/g, "")
              , n = i.length;
            if (n >= 14 && 16 >= n && parseInt(i) > 0) {
                var l, s = 0, t = n - 1, d = 1, c = new String;
                do
                    l = parseInt(i.charAt(t)),
                    c += d++ % 2 == 0 ? 2 * l : l;
                while (--t >= 0);
                for (t = 0; t < c.length; t++)
                    s += parseInt(c.charAt(t));
                o = s % 10 == 0
            }
            return o ? void 0 : a.allrules.creditCard.alertText
        },
        _ajax: function(t, a, o, i) {
            var n = a[o + 1]
              , l = i.allrules[n]
              , s = l.extraData
              , d = l.extraDataDynamic;
            if (s || (s = ""),
            d) {
                for (var c = [], u = String(d).split(","), o = 0; o < u.length; o++) {
                    var f = u[o];
                    if (e(f).length) {
                        var m = t.closest("form").find(f).val()
                          , v = f.replace("#", "") + "=" + escape(m);
                        c.push(v)
                    }
                }
                d = c.join("&")
            } else
                d = "";
            i.isError || e.ajax({
                type: "GET",
                url: l.url,
                cache: !1,
                dataType: "json",
                data: "fieldId=" + t.attr("id") + "&fieldValue=" + t.val() + "&extraData=" + s + "&" + d,
                field: t,
                rule: l,
                methods: r,
                options: i,
                beforeSend: function() {
                    var e = l.alertTextLoad;
                    e && r._showPrompt(t, e, "load", !0, i)
                },
                error: function(e, t) {
                    r._ajaxError(e, t)
                },
                success: function(t) {
                    var a = t[0]
                      , o = e(e("#" + a)[0]);
                    if (1 == o.length) {
                        var n = t[1]
                          , s = t[2];
                        if (n) {
                            if (void 0 !== i.ajaxValidCache[a] && (i.ajaxValidCache[a] = !0),
                            s) {
                                if (i.allrules[s]) {
                                    var d = i.allrules[s].alertTextOk;
                                    d && (s = d)
                                }
                            } else
                                s = l.alertTextOk;
                            s ? r._showPrompt(o, s, "pass", !0, i) : r._closePrompt(o)
                        } else {
                            if (i.ajaxValidCache[a] = !1,
                            i.isError = !0,
                            s) {
                                if (i.allrules[s]) {
                                    var d = i.allrules[s].alertText;
                                    d && (s = d)
                                }
                            } else
                                s = l.alertText;
                            r._showPrompt(o, s, "", !0, i)
                        }
                    }
                    o.trigger("jqv.field.result", [o, !i.isError, s])
                }
            })
        },
        _ajaxError: function(e, r) {
            0 == e.status && null == r ? alert("The page is not served from a server! ajax call failed") : "undefined" != typeof console && console.log("Ajax error: " + e.status + " " + r)
        },
        _dateToString: function(e) {
            return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()
        },
        _parseDate: function(e) {
            var r = e.split("-");
            return r == e && (r = e.split("/")),
            new Date(r[0],r[1] - 1,r[2])
        },
        _showPrompt: function(e, t, a, o, i, n) {
            var l = r._getPrompt(e);
            n && (l = !1),
            l ? r._updatePrompt(e, l, t, a, o, i) : r._buildPrompt(e, t, a, o, i)
        },
        _buildPrompt: function(t, a, o, i, n) {
            var l = e("<div>");
            switch (l.addClass(r._getClassName(t.attr("id")) + "formError"),
            t.is(":input") && l.addClass("parentForm" + r._getClassName(t.parents("form").attr("id"))),
            l.addClass("formError"),
            o) {
            case "pass":
                l.addClass("greenPopup");
                break;
            case "load":
                l.addClass("blackPopup");
                break;
            default:
                n.InvalidCount++
            }
            i && l.addClass("ajaxed");
            e("<div>").addClass("formErrorContent").html(a).appendTo(l);
            if (n.showArrow) {
                var s = (e("<div>").addClass("formErrorArrow"),
                t.data("promptPosition") || n.promptPosition);
                "string" == typeof s && -1 != s.indexOf(":") && (s = s.substring(0, s.indexOf(":")))
            }
            if (n.relative) {
                var d = e("<span>").css("position", "relative").css("vertical-align", "top").addClass("formErrorOuter").append(l.css("position", "absolute"));
                t.before(d)
            } else
                n.isOverflown ? t.before(l) : e("body").append(l);
            var c = r._calculatePosition(t, l, n);
            return l.css({
                top: c.callerTopPosition,
                left: c.callerleftPosition,
                marginTop: c.marginTopSize,
                opacity: 0
            }).data("callerField", t),
            n.autoHidePrompt ? (setTimeout(function() {
                l.animate({
                    opacity: 0
                }, function() {
                    l.closest(".formErrorOuter").remove(),
                    l.remove()
                })
            }, n.autoHideDelay),
            l.animate({
                opacity: .87
            })) : l.animate({
                opacity: .87
            })
        },
        _updatePrompt: function(e, t, a, o, i, n, l) {
            if (t) {
                "undefined" != typeof o && ("pass" == o ? t.addClass("greenPopup") : t.removeClass("greenPopup"),
                "load" == o ? t.addClass("blackPopup") : t.removeClass("blackPopup")),
                i ? t.addClass("ajaxed") : t.removeClass("ajaxed"),
                t.find(".formErrorContent").html(a);
                var s = r._calculatePosition(e, t, n);
                css = {
                    top: s.callerTopPosition,
                    left: s.callerleftPosition,
                    marginTop: s.marginTopSize
                },
                l ? t.css(css) : t.animate(css)
            }
        },
        _closePrompt: function(e) {
            var t = r._getPrompt(e);
            t && t.fadeTo("fast", 0, function() {
                t.parent(".formErrorOuter").remove(),
                t.remove()
            })
        },
        closePrompt: function(e) {
            return r._closePrompt(e)
        },
        _getPrompt: function(t) {
            var a = r._getClassName(t.attr("id")) + "formError"
              , o = e("." + r._escapeExpression(a))[0];
            return o ? e(o) : void 0
        },
        _escapeExpression: function(e) {
            return e.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1")
        },
        isRTL: function(r) {
            var t = e(document)
              , a = e("body")
              , o = r && r.hasClass("rtl") || r && "rtl" === (r.attr("dir") || "").toLowerCase() || t.hasClass("rtl") || "rtl" === (t.attr("dir") || "").toLowerCase() || a.hasClass("rtl") || "rtl" === (a.attr("dir") || "").toLowerCase();
            return Boolean(o)
        },
        _calculatePosition: function(e, t, a) {
            var o, i, n, l = e.width(), s = t.height(), d = a.isOverflown || a.relative;
            if (d)
                o = i = 0,
                n = -s;
            else {
                var c = e.offset();
                o = c.top,
                i = c.left,
                n = 0
            }
            var u = e.data("promptPosition") || a.promptPosition
              , f = ""
              , m = ""
              , v = 0
              , p = 0;
            if ("string" == typeof u && -1 != u.indexOf(":") && (f = u.substring(u.indexOf(":") + 1),
            u = u.substring(0, u.indexOf(":")),
            -1 != f.indexOf(",") && (m = f.substring(f.indexOf(",") + 1),
            f = f.substring(0, f.indexOf(",")),
            p = parseInt(m),
            isNaN(p) && (p = 0)),
            v = parseInt(f),
            isNaN(f) && (f = 0)),
            r.isRTL(e))
                switch (u) {
                default:
                case "topLeft":
                    d ? i -= t.width() - 30 : (i -= t.width() - 30,
                    o += -s - 2);
                    break;
                case "topRight":
                    d ? i += l - t.width() : (i += l - t.width(),
                    o += -s - 2);
                    break;
                case "centerRight":
                    d ? (o = e.outerHeight(),
                    i = e.outerWidth(1) + 5) : i += e.outerWidth() + 5;
                    break;
                case "centerLeft":
                    i -= t.width() + 2;
                    break;
                case "bottomLeft":
                    i += -t.width() + 30,
                    o = o + e.height() + 15;
                    break;
                case "bottomRight":
                    i += l - t.width(),
                    o += e.height() + 15
                }
            else
                switch (u) {
                default:
                case "topRight":
                    d ? i += l - 30 : (i += l - 30,
                    o += -s - 2);
                    break;
                case "topLeft":
                    o += -s - 10;
                    break;
                case "centerRight":
                    d ? (o = e.outerHeight(),
                    i = e.outerWidth(1) + 5) : i += e.outerWidth() + 5;
                    break;
                case "centerLeft":
                    i -= t.width() + 2;
                    break;
                case "bottomLeft":
                    o = o + e.height() + 15;
                    break;
                case "bottomRight":
                    i += l - 30,
                    o += e.height() + 5
                }
            return i += v,
            o += p,
            {
                callerTopPosition: o + "px",
                callerleftPosition: i + "px",
                marginTopSize: n + "px"
            }
        },
        _saveOptions: function(r, t) {
            if (e.validationEngineLanguage)
                var a = e.validationEngineLanguage.allRules;
            else
                e.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");
            e.validationEngine.defaults.allrules = a;
            var o = e.extend(!0, {}, e.validationEngine.defaults, t);
            return jim = o,
            o.isOverflown && (o.relative = !0),
            o.relative && (o.isOverflown = !0),
            r.data("jqv", o),
            o
        },
        _getClassName: function(e) {
            return e ? e.replace(/:/g, "_").replace(/\./g, "_") : void 0
        }
    };
    e.fn.validationEngine = function(t) {
        var a = e(this);
        return a[0] ? "string" == typeof t && "_" != t.charAt(0) && r[t] ? ("showPrompt" != t && "hidePrompt" != t && "hide" != t && "hideAll" != t && r.init.apply(a),
        r[t].apply(a, Array.prototype.slice.call(arguments, 1))) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist in jQuery.validationEngine") : (r.init.apply(a, arguments),
        r.attach.apply(a)) : !1
    }
    ,
    e.validationEngine = {
        defaults: {
            validationEventTrigger: "blur",
            scroll: !0,
            focusFirstField: !0,
            promptPosition: "topRight",
            bindMethod: "bind",
            inlineAjax: !1,
            ajaxFormValidation: !1,
            ajaxFormValidationURL: !1,
            onAjaxFormComplete: e.noop,
            onBeforeAjaxFormValidation: e.noop,
            onValidationComplete: !1,
            relative: !1,
            isOverflown: !1,
            overflownDIV: "",
            doNotShowAllErrosOnSubmit: !1,
            binded: !1,
            showArrow: !0,
            isError: !1,
            ajaxValidCache: {},
            autoPositionUpdate: !1,
            InvalidFields: [],
            onSuccess: !1,
            onFailure: !1,
            autoHidePrompt: !1,
            autoHideDelay: 1e4
        }
    },
    e(function() {
        e.validationEngine.defaults.promptPosition = r.isRTL() ? "topLeft" : "topRight"
    })
}(jQuery),
eval(function(e, r, t, a, o, i) {
    if (o = function(e) {
        return (r > e ? "" : o(parseInt(e / r))) + ((e %= r) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
    }
    ,
    !"".replace(/^/, String)) {
        for (; t--; )
            i[o(t)] = a[t] || o(t);
        a = [function(e) {
            return i[e]
        }
        ],
        o = function() {
            return "\\w+"
        }
        ,
        t = 1
    }
    for (; t--; )
        a[t] && (e = e.replace(new RegExp("\\b" + o(t) + "\\b","g"), a[t]));
    return e
}('(2($){$.c.f=2(p){p=$.d({g:"!@#$%^&*()+=[]\\\\\\\';,/{}|\\":<>?~`.- ",4:"",9:""},p);7 3.b(2(){5(p.G)p.4+="Q";5(p.w)p.4+="n";s=p.9.z(\'\');x(i=0;i<s.y;i++)5(p.g.h(s[i])!=-1)s[i]="\\\\"+s[i];p.9=s.O(\'|\');6 l=N M(p.9,\'E\');6 a=p.g+p.4;a=a.H(l,\'\');$(3).J(2(e){5(!e.r)k=o.q(e.K);L k=o.q(e.r);5(a.h(k)!=-1)e.j();5(e.u&&k==\'v\')e.j()});$(3).B(\'D\',2(){7 F})})};$.c.I=2(p){6 8="n";8+=8.P();p=$.d({4:8},p);7 3.b(2(){$(3).f(p)})};$.c.t=2(p){6 m="A";p=$.d({4:m},p);7 3.b(2(){$(3).f(p)})}})(C);', 53, 53, "||function|this|nchars|if|var|return|az|allow|ch|each|fn|extend||alphanumeric|ichars|indexOf||preventDefault||reg|nm|abcdefghijklmnopqrstuvwxyz|String||fromCharCode|charCode||alpha|ctrlKey||allcaps|for|length|split|1234567890|bind|jQuery|contextmenu|gi|false|nocaps|replace|numeric|keypress|which|else|RegExp|new|join|toUpperCase|ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("|"), 0, {}));
var httpserver = $(".httpserver").text();
$("#btn-contact-submit").click(function() {
    if (1 == validatecontact()) {
        $("#btn-contact-submit").attr("disabled", "disabled"),
        $("body").append('<div class="loadx" style="display:block"></div>');
        var e = $("#contact_form").serialize();
        return $.ajax({
            type: "POST",
            url: httpserver + "send-contact.html",
            data: e,
            dataType: "json",
            success: function(e) {
                $(".loadx").remove(),
                "200" == e.status ? (document.getElementById("contact_form").reset(),
                $(".overlay-dark").after("<div  class='contact-success color-blue'>" + e.message + "</div>")) : $(".overlay-dark").after("<div  class='contact-success color-red'>" + e.message + "</div>"),
                grecaptcha.reset(),
                $("#btn-contact-submit").removeAttr("disabled"),
                setTimeout(hidemsg, 5e3)
            }
        }),
        !1
    }
    return $(".formError").click(function() {
        $(this).remove()
    }),
    !1
}),
$("#btn-contact-reset").click(function() {
    hidemsg(),
    hideerror()
}),
$("#phone").numeric(),
$("#contact_form").keydown(function(e) {
    $("textarea").is(":focus") || 13 == e.keyCode && $("#btn-contact-submit").trigger("click")
});
