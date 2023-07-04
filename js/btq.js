var timex, Click;
!function(e) {
    var o = {
        on: e.fn.on,
        bind: e.fn.bind
    };
    e.each(o, function(t) {
        e.fn[t] = function() {
            var a, e = [].slice.call(arguments), i = e.pop(), l = e.pop();
            return e.push(function() {
                var e = this
                  , t = arguments;
                clearTimeout(a),
                a = setTimeout(function() {
                    l.apply(e, [].slice.call(t))
                }, i)
            }),
            o[t].apply(this, isNaN(i) ? arguments : e)
        }
    })
}(jQuery);
var Details = 0
  , doWheel = !0
  , doTouch = !0
  , windscroll = $(document).scrollTop();
function onScroll() {
    var e = $(".title-inner, .about-info, .ani-item, .library-project, .item-product-list, .title-detail, .title-1, .switch-slide, .title-sub, .title-2, .cart-content");
    $(e).each(function(e, t) {
        $(t).isInViewport() ? $(t).addClass("on-show") : $("#home-page").length && $(t).removeClass("on-show")
    })
}
function NavClick() {
    $(".nav-click").bind("click", function() {
        return $(".search-but").hasClass("active") && $(".search-form, .search-but").removeClass("active"),
        $(this).hasClass("active") ? ($(".nav-overlay, .navigation, .nav-click").removeClass("active"),
        $("html, body").removeClass("no-scroll")) : ($(".nav-overlay, .navigation, .nav-click").addClass("active"),
        $("html, body").addClass("no-scroll")),
        $(".navigation").scrollTop(0),
        !1
    })
}
function BoxSlide() {
    var a = $(".group-central").length
      , o = $(".group-central").index()
      , n = !1;
    function s() {
        setTimeout(function() {
            TweenMax.set($(".group-central").not($(".group-central")[o]), {
                y: "100%"
            }),
            n = !1,
            $(".box-nav li").removeClass("active")
        }, 1e3)
    }
    function i() {
        var e, t, a, i, l;
        n = !0,
        TweenMax.set($(".group-central"), {
            zIndex: ""
        }),
        $(".go-top").removeClass("show"),
        $(".wheel").addClass("show"),
        $(".box-nav li").removeClass("current active"),
        $(".box-nav li").eq(o).addClass("current active"),
        $(".scrollA, .scrollB, .scrollC").length && ScrollNiceHide(),
        $(".header").removeClass("active"),
        TweenMax.fromTo($(".group-central")[o], 1, {
            zIndex: 2
        }, {
            y: "0%",
            ease: Quad.easeOut,
            onComplete: function() {
                $(".group-central").removeClass("show-text"),
                $(".group-central").eq(o).addClass("show-text"),
                $("#home-page").length && ($('.group-central[data-name="video-home"]').hasClass("show-text") ? $(".play") : $(".stop")).trigger("click"),
                $(".box-slider .group-central:last-child").hasClass("show-text") && ($(".go-top").addClass("show"),
                $(".wheel").removeClass("show")),
                $(".group-2").hasClass("show-text") && $(".header").addClass("active"),
                $('.box-slider .group-central[data-name="about-members"]').hasClass("show-text") && $(".slider-member .slide-item").hasClass("active") && $(".slider-member .slide-item.active").addClass("ani-text"),
                $('.box-slider .group-central[data-name="business-financial"], .box-slider .group-central[data-name="business-service"]').hasClass("show-text") && $(".slider-financial .slide-item").hasClass("active") && $(".slider-financial .slide-item.active").addClass("ani-text"),
                $(".scrollA, .scrollB, .scrollC").length && setTimeout(function() {
                    ScrollNiceA(),
                    ScrollNiceB(),
                    ScrollNiceC()
                }, 1500),
                s()
            }
        }),
        $("#home-page").length || (e = $(".box-nav li").eq(o).find("a").attr("href"),
        t = $(".box-nav li").eq(o).find("a").attr("data-title"),
        a = $(".box-nav li").eq(o).find("a").attr("data-keyword"),
        i = $(".box-nav li").eq(o).find("a").attr("data-description"),
        l = $(".box-nav li").eq(o).find("a").attr("data-page"),
        changeUrl(e, t, i, a, l, t, i))
    }
    function l() {
        var e, t, a, i, l;
        n = !0,
        TweenMax.set($(".group-central"), {
            zIndex: ""
        }),
        $(".go-top").removeClass("show"),
        $(".wheel").addClass("show"),
        $(".box-nav li").removeClass("current active"),
        $(".box-nav li").eq(o).addClass("current active"),
        $(".scrollA, .scrollB, .scrollC").length && ScrollNiceHide(),
        $(".header").removeClass("active"),
        TweenMax.fromTo($(".group-central")[o], 1, {
            y: "-100%",
            zIndex: 2
        }, {
            y: "0%",
            ease: Quad.easeOut,
            onComplete: function() {
                $(".group-central").removeClass("show-text"),
                $(".group-central").eq(o).addClass("show-text"),
                $("#home-page").length && ($('.group-central[data-name="video-home"]').hasClass("show-text") ? $(".play") : $(".stop")).trigger("click"),
                $(".box-slider .group-central:last-child").hasClass("show-text") && ($(".go-top").addClass("show"),
                $(".wheel").removeClass("show")),
                $(".group-2").hasClass("show-text") && $(".header").addClass("active"),
                $('.box-slider .group-central[data-name="about-members"]').hasClass("show-text") && $(".slider-member .slide-item").hasClass("active") && $(".slider-member .slide-item.active").addClass("ani-text"),
                $('.box-slider .group-central[data-name="business-financial"], .box-slider .group-central[data-name="business-service"]').hasClass("show-text") && $(".slider-financial .slide-item").hasClass("active") && $(".slider-financial .slide-item.active").addClass("ani-text"),
                $(".scrollA, .scrollB, .scrollC").length && setTimeout(function() {
                    ScrollNiceA(),
                    ScrollNiceB(),
                    ScrollNiceC()
                }, 1500),
                s()
            }
        }),
        $("#home-page").length || (e = $(".box-nav li").eq(o).find("a").attr("href"),
        t = $(".box-nav li").eq(o).find("a").attr("data-title"),
        a = $(".box-nav li").eq(o).find("a").attr("data-keyword"),
        i = $(".box-nav li").eq(o).find("a").attr("data-description"),
        l = $(".box-nav li").eq(o).find("a").attr("data-page"),
        changeUrl(e, t, i, a, l, t, i))
    }
    $(".wheel").addClass("show"),
    TweenMax.set($(".group-central").not($(".group-central")[o]), {
        y: "100%"
    }),
    $(".box-nav li").on("click", function() {
        var e = $(this).index();
        return "career-recruitment" == $(this).find("a").attr("data-page") || "sustainable-community" == $(this).find("a").attr("data-page") ? window.open($(this).find("a").attr("href")) : $(".group-central").length <= 1 || n || (!n && o < e ? (o = e,
        i()) : !n && e < o && (o = e,
        l())),
        !1
    }),
    1100 < $(window).width() && !$("body").hasClass("no-wheel") && ($(".box-slider").on("mousewheel", function(e) {
        var t;
        if (!1 === n && (t = Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY || -e.detail))),
        1100 < $(window).width() && !$("body").hasClass("no-wheel")) {
            if ($(".group-central").length <= 1)
                return !1;
            null != $(".group-central")[o] && 1 === parseInt(t) ? (a - 1 <= o ? o = 0 : o++,
            i()) : null != $(".group-central")[o] && -1 === parseInt(t) && (o <= 0 ? o = a - 1 : o--,
            l())
        }
    }),
    $(".box-slider").on("swipeup", function(e, t) {
        doTouch && (doTouch = !1,
        1100 < $(window).width() && !$("body").hasClass("no-wheel") && ($(".box-nav li.current").next().trigger("click"),
        setTimeout(turnWheelTouch, 500)))
    }).on("swipedown", function(e) {
        doTouch && (doTouch = !1,
        1100 < $(window).width() && !$("body").hasClass("no-wheel") && ($(".box-nav li.current").prev().trigger("click"),
        setTimeout(turnWheelTouch, 500)))
    })),
    $(".group-central").hasClass("show-text") ? $(".box-nav li").hasClass("current") || $(".box-nav li:first-child").addClass("current active") : $(".group-central:first-child").addClass("show-text"),
    $(".scrollA, .scrollB, .scrollC").length && setTimeout(function() {
        ScrollNiceA(),
        ScrollNiceB(),
        ScrollNiceC()
    }, 1500)
}
function BoxNews() {
    var e = $(".sub-news li.current a").attr("data-name");
    $('.colum-box[data-name= "' + e + '"]').addClass("active"),
    $(".sub-news li").on("click", function(e) {
        e.preventDefault(),
        $(".sub-news li").removeClass("current"),
        $(".colum-box").removeClass("active"),
        $(this).addClass("current");
        var t = $(this).find("a").attr("data-name")
          , a = $(this).attr("href")
          , i = $(this).attr("data-title")
          , l = $(this).attr("data-keyword")
          , o = $(this).attr("data-description")
          , e = $(this).attr("data-name");
        changeUrl(a, i, o, l, e, i, o),
        $('.colum-box[data-name= "' + t + '"]').addClass("active");
        t = $(".colum-box.active").find(".news-text");
        return $(window).width() <= 1100 && $(".group-central.active").length && $(".container").css("height", $(".group-central.active").height()),
        $(t).length || ($(".colum-box.active").find(".link-page").hasClass("current") ? $(".colum-box.active").find(".link-page.current") : $(".colum-box.active").find(".row-news:first-child .item-news1:first-child .link-page")).trigger("click"),
        detectBut(),
        !1
    })
}
function execSearch() {
    var e = $("#qsearch").val()
      , t = $("#href_search").val()
      , a = $("#defaultvalue").val()
      , a = $("#defaultvalue").val()
      , i = $("#errorsearch").val();
    if (hidemsg(),
    e == a || "" == e)
        return !1;
    if (e.length <= 1)
        return $(".overlay-dark").after("<div  class='contact-success color-red'>" + i + "</div>"),
        setTimeout(hidemsg, 5e3),
        !1;
    if ("" != e) {
        e = t + "?qsearch=" + encodeURIComponent(e);
        return window.location = e,
        !1
    }
}
function Search() {
    $(document).on("click", ".search-but", function(e) {
        $(".nav-click").hasClass("active") && $(".nav-overlay").trigger("click"),
        $(this).hasClass("active") ? ($(".search-form, .search-but").removeClass("active"),
        execSearch()) : ($(".search-form, .search-but").addClass("active"),
        document.getElementById("search").reset())
    }),
    $("#qsearch").keydown(function(e) {
        13 == e.keyCode && execSearch()
    })
}
function SlidePicture() {
    var e;
    $(".slide-mask").length && ($(".slide-mask").addClass("show"),
    1 < $(".slide-mask").children().length ? (e = $(".slide-mask").attr("data-time"),
    $(".slide-mask").parent().prepend('<a class="stop" href="javascript:void(0)"></a><a class="play" href="javascript:void(0)"></a>')) : e = !1,
    $(".slide-mask").BTQSlider({
        animateOut: "fadeout",
        animateIn: "fadein",
        mouseDrag: !1,
        touchDrag: !1,
        pullDrag: !1,
        loop: !0,
        margin: 0,
        autoplay: !0,
        autoplayTimeout: e,
        smartSpeed: 1e3,
        items: 1,
        nav: !1,
        dots: !0,
        dotSvg: !0,
        responsiveRefreshRate: 400
    }).on("initialize.btq.slidebox", function() {
        $(".slide-mask .slide-item.active").addClass("ani-text"),
        $(".arrow").length || ($(".slide-mask .slide-next").append('<svg viewBox="0 0 60 60"><path class="arrow" fill="currentColor" d="M24.5,42 22.5,40.2 33.6,30 22.5,19.8 24.5,18 37.5,30z"></path></svg>'),
        $(".slide-mask .slide-prev").append('<svg viewBox="0 0 60 60"><path class="arrow" fill="currentColor" d="M35.5,42 37.5,40.2 26.4,30 37.5,19.8 35.5,18 22.5,30z"></path></svg>'));
        $(".circle-outer").css({
            "-webkit-animation-duration": 10 * e + "ms",
            "animation-duration": 10 * e + "ms"
        })
    }()),
    $(".slide-mask").on("translate.btq.slidebox", function(e) {
        $(".slide-mask .slide-item").removeClass("ani-text")
    }),
    $(".slide-mask").on("translated.btq.slidebox", function(e) {
        $(".slide-mask .slide-item.active").addClass("ani-text")
    }),
    $(".go-page").on("mouseover", function(e) {
        $(".slide-mask").trigger("stop.btq.autoplay")
    }),
    $(".go-page").on("mouseleave", function(e) {
        $(".slide-mask").trigger("play.btq.autoplay")
    }),
    $(".slide-mask").on("swipeleft", function(e, t) {
        doTouch && (doTouch = !1,
        1 < $(".slide-mask .slide-item").children().length && $(".slide-mask").trigger("next.btq.slidebox"),
        setTimeout(turnWheelTouch, 500))
    }).on("swiperight", function(e) {
        doTouch && (doTouch = !1,
        1 < $(".slide-mask .slide-item").children().length && $(".slide-mask").trigger("prev.btq.slidebox"),
        setTimeout(turnWheelTouch, 500))
    }),
    $(".play").on("click", function() {
        $(".slide-mask").trigger("play.btq.autoplay", [e]),
        $(".slide-mask .slide-buttons, .slide-mask .slide-pagination").removeClass("hide")
    }),
    $(".stop").on("click", function() {
        $(".slide-mask").trigger("stop.btq.autoplay"),
        $(".slide-mask .slide-buttons, .slide-mask .slide-pagination").addClass("hide")
    })),
    $(".slider-history").length && $(".slider-history").BTQSlider({
        nav: !0,
        loop: !1,
        smartSpeed: 600,
        dots: !1,
        responsiveRefreshRate: 200,
        margin: 20,
        autoHeight: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1e3: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    }),
    $(".slider-project-news").length && $(".slider-project-news").on("initialized.btq.slidebox", function() {
        var e = $(".slider-project-news").find(".slide-item").length;
        1e3 <= $(window).width() ? e <= 3 ? $(".slider-project-news").addClass("center-slidebox") : $(".slider-project-news").removeClass("center-slidebox") : $(window).width() < 1e3 && 600 <= $(window).width() && e <= 2 ? $(".slider-project-news").addClass("center-slidebox") : $(".slider-project-news").removeClass("center-slidebox")
    }).BTQSlider({
        margin: 10,
        nav: !0,
        dots: !0,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 3
            }
        }
    }),
    $(".slider-awards").length && $(".slider-awards").on("initialized.btq.slidebox", function() {
        var e = $(".slider-awards").find(".slide-item").length;
        1100 <= $(window).width() ? e <= 4 ? $(".slider-awards").addClass("center-slidebox") : $(".slider-awards").removeClass("center-slidebox") : $(window).width() < 1100 && 600 <= $(window).width() ? e <= 3 ? $(".slider-awards").addClass("center-slidebox") : $(".slider-awards").removeClass("center-slidebox") : $(window).width() < 600 && e <= 2 ? $(".slider-awards").addClass("center-slidebox") : $(".slider-awards").removeClass("center-slidebox")
    }).BTQSlider({
        margin: 10,
        nav: !0,
        dots: !0,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            }
        }
    }),
    $(".slider-partners").length && $(".slider-partners").on("initialized.btq.slidebox", function() {
        var e = $(".slider-partners").find(".slide-item").length;
        1e3 <= $(window).width() ? e <= 3 ? $(".slider-partners").addClass("center-slidebox") : $(".slider-partners").removeClass("center-slidebox") : $(window).width() < 1e3 && e <= 2 ? $(".slider-partners").addClass("center-slidebox") : $(".slider-partners").removeClass("center-slidebox")
    }).BTQSlider({
        nav: !0,
        dots: !0,
        smartSpeed: 600,
        margin: 10,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1e3: {
                items: 3
            }
        }
    }),
    1100 <= $(window).width() && $(".slider-financial").length && $(".slider-financial").each(function(e, t) {
        $(t).BTQSlider({
            nav: !0,
            loop: !0,
            smartSpeed: 600,
            dots: !0,
            items: 1,
            margin: 10
        }),
        $(".slider-financial").on("translate.btq.slidebox", function(e) {
            $(".slider-financial .slide-item").removeClass("ani-text"),
            $(".scrollC").getNiceScroll().hide()
        }),
        $(".slider-financial").on("translated.btq.slidebox", function(e) {
            $(".slider-financial .slide-item.active").addClass("ani-text"),
            setTimeout(function() {
                ScrollNiceC()
            }, 300)
        })
    }),
    1100 <= $(window).width() && $(".slider-member").length && ($(".slider-member").BTQSlider({
        nav: !0,
        loop: !0,
        smartSpeed: 600,
        dots: !0,
        items: 1,
        margin: 10
    }),
    $(".slider-member").on("translate.btq.slidebox", function(e) {
        $(".slider-member .slide-item").removeClass("ani-text"),
        $(".scrollC").getNiceScroll().hide()
    }),
    $(".slider-member").on("translated.btq.slidebox", function(e) {
        $(".slider-member .slide-item.active").addClass("ani-text"),
        setTimeout(function() {
            ScrollNiceC()
        }, 300)
    })),
    1100 <= $(window).width() && $(".slider-news").length && $(".slider-news").each(function(e, t) {
        $(t).on("initialized.btq.slidebox", function() {
            $(t).find(".slide-item").length <= 3 ? $(t).addClass("center-slidebox") : $(t).removeClass("center-slidebox")
        }).BTQSlider({
            items: 3,
            smartSpeed: 600,
            margin: 5,
            nav: !0,
            dots: !1,
            rewind: !0
        })
    })
}
function StopTime() {
    0 < timex && (clearTimeout(timex),
    timex = 0)
}
function addMove() {
    $(".content-present").removeClass("move"),
    $(".content-present h2").children().removeClass("move"),
    $(".slogan-text .content-present").addClass("move"),
    StopTime(),
    $(".move h2").children().each(function(e) {
        var t = $(this);
        timex = setTimeout(function() {
            $(t).addClass("move")
        }, 200 * (e + 1))
    })
}
function AniText() {
    $(".title-page h1").addClass("show"),
    $(".title-page h1").children().children().each(function(e) {
        var t = $(this);
        setTimeout(function() {
            $(t).addClass("move")
        }, 100 * (e + 1))
    })
}
function ScrollNiceA() {
    $(window).width() <= 1100 ? ($(".scrollA").getNiceScroll().remove(),
    $(".scrollA").css({
        "overflow-x": "hidden",
        "overflow-y": "auto"
    })) : ($(".scrollA").css({
        "overflow-x": "hidden",
        "overflow-y": "hidden"
    }),
    $(".scrollA").getNiceScroll().show(),
    $(".scrollA").niceScroll({
        touchbehavior: !0,
        horizrailenabled: !1,
        cursordragontouch: !0,
        grabcursorenabled: !1,
        cursorcolor: "#ff8a00"
    }),
    $(".scrollA").scrollTop(0))
}
function ScrollNiceB() {
    $(window).width() <= 1100 ? ($(".scrollB").getNiceScroll().remove(),
    $(".scrollB").css({
        "overflow-x": "hidden",
        "overflow-y": "auto"
    })) : ($(".scrollB").css({
        "overflow-x": "hidden",
        "overflow-y": "hidden"
    }),
    $(".scrollB").getNiceScroll().show(),
    $(".scrollB").niceScroll({
        touchbehavior: !0,
        horizrailenabled: !1,
        cursordragontouch: !0,
        grabcursorenabled: !1,
        cursorcolor: "#ff8a00"
    }),
    $(".scrollB").scrollTop(0))
}
function ScrollNiceC() {
    $(window).width() <= 1100 ? ($(".scrollC").getNiceScroll().remove(),
    $(".scrollC").css({
        "overflow-x": "visible",
        "overflow-y": "visible"
    })) : 1100 < $(window).width() && ($(".scrollC").css({
        "overflow-x": "hidden",
        "overflow-y": "hidden"
    }),
    $(".ani-text .scrollC").getNiceScroll().show(),
    $(".ani-text .scrollC").niceScroll({
        touchbehavior: !0,
        horizrailenabled: !1,
        cursordragontouch: !0,
        grabcursorenabled: !1,
        cursorcolor: "#ff8a00"
    }),
    $(".ani-text .scrollC").scrollTop(0))
}
function ScrollNiceD() {
    $(window).width() <= 1100 ? ($(".scrollD").getNiceScroll().remove(),
    $(".scrollD").css({
        "overflow-x": "visible",
        "overflow-y": "visible"
    })) : 1100 < $(window).width() && ($(".scrollD").css({
        "overflow-x": "hidden",
        "overflow-y": "hidden"
    }),
    $(".scrollD").getNiceScroll().show(),
    $(".scrollD").niceScroll({
        touchbehavior: !0,
        horizrailenabled: !1,
        cursordragontouch: !0,
        grabcursorenabled: !1,
        cursorcolor: "#ff8a00"
    }),
    $(".scrollD").scrollTop(0))
}
function ScrollNiceHide() {
    $(".scrollA, .scrollB, .scrollC, .scrollD").getNiceScroll().remove()
}
function VideoLoad(e) {
    $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            var t;
            $(".allvideo").append(e),
            $("#view-video").length && (t = document.getElementById("view-video")),
            $(".loadx").fadeOut(400, "linear", function() {
                $("#view-video").length && t.play(),
                $(".loadx").remove()
            });
            var a = $("#view-video").length;
            $(".close-video").on("click", function() {
                0 != a && t.pause(),
                $(".allvideo").fadeOut(500, "linear", function() {
                    var e;
                    $(".overlay-dark").removeClass("show"),
                    $(".allvideo .video-list").remove(),
                    $("html, body").removeClass("no-scroll"),
                    $(".to-scrollV").length && (e = $(".to-scrollV").offset().top,
                    $(".to-scrollV").removeClass("to-scrollV"),
                    $(window).width() < 1100 && $("html, body").scrollTop(e - 60))
                })
            })
        }
    })
}
function AlbumLoad(e, t) {
    $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            function t() {
                clearTimeout(timex),
                $(".pic-name").removeClass("move"),
                $(".pic-name h3").children().children().removeClass("move"),
                $(".selected").find(".pic-name").addClass("move"),
                $(".move h3").children().children().each(function(e) {
                    var t = $(this);
                    setTimeout(function() {
                        $(t).addClass("move")
                    }, 100 * (e + 1))
                })
            }
            0 != TouchLenght && isTouchDevice || $(".slide-slidebox").length && $(".slide-slidebox").trigger("stop.btq.autoplay"),
            $(".all-album").append(e),
            1 < $(".all-album .album-load").length && $(".all-album .album-load").last().remove(),
            $(".pic-name > h3").lettering("words").children("span").lettering().children("span").lettering(),
            $(".album-center").on("initialized.btq.slidebox", function() {
                $(".container-zoom").each(function(e, t) {
                    new PinchZoom.default(t,{
                        draggableUnzoomed: !1
                    })
                }),
                $(".album-center").find(".slide-item.active").addClass("selected"),
                t()
            }).BTQSlider({
                items: 1,
                margin: 0,
                smartSpeed: 600,
                loop: !1,
                dots: !0,
                nav: !0,
                responsiveRefreshRate: 200
            }).on("changed.btq.slidebox", function(e) {
                $(".thumbs").length && function(e) {
                    var t = e.item.Count - 1
                      , a = e.item.index;
                    a < 0 && (a = t),
                    t < a && (a = 0),
                    $(".thumbs").find(".slide-item").removeClass("current").eq(a).addClass("current");
                    var i = $(".thumbs").find(".slide-item.active").length - 1
                      , e = $(".thumbs").find(".slide-item.active").first().index();
                    (t = $(".thumbs").find(".slide-item.active").last().index()) - 1 <= a && $(".thumbs").data("btq.slidebox").to(a, 300, !0),
                    a <= e && $(".thumbs").data("btq.slidebox").to(a - i, 300, !0)
                }(e)
            }).on("translate.btq.slidebox", function(e) {
                $(".album-center").find(".slide-item").removeClass("selected")
            }).on("translated.btq.slidebox", function(e) {
                $(".album-center").find(".slide-item.active").addClass("selected"),
                t()
            }),
            $(".thumbs").on("initialized.btq.slidebox", function() {
                var e = $(".thumbs").find(".slide-item").length;
                600 <= $(window).width() ? e <= 6 ? $(".thumbs").addClass("center-slidebox") : $(".thumbs").removeClass("center-slidebox") : e <= 3 ? $(".thumbs").addClass("center-slidebox") : $(".thumbs").removeClass("center-slidebox"),
                $(".thumbs").find(".slide-item").eq(0).addClass("current")
            }).BTQSlider({
                margin: 5,
                smartSpeed: 300,
                dots: !1,
                nav: !1,
                responsiveRefreshRate: 100,
                responsive: {
                    0: {
                        items: 3,
                        slideBy: 3
                    },
                    600: {
                        items: 6,
                        slideBy: 6
                    }
                }
            }),
            $(".thumbs").on("click", ".slide-item", function(e) {
                e.preventDefault();
                e = $(this).index();
                $(".album-center").data("btq.slidebox").to(e, 1e3, !0)
            }),
            $(".all-album").on("mousewheel", ".album-center", function(e) {
                if (0 < e.deltaY) {
                    if (!doWheel)
                        return;
                    doWheel = !1,
                    $(".album-center").trigger("prev.btq.slidebox"),
                    setTimeout(turnWheelTouch, 500)
                } else {
                    if (!doWheel)
                        return;
                    doWheel = !1,
                    $(".album-center").trigger("next.btq.slidebox"),
                    setTimeout(turnWheelTouch, 500)
                }
                e.preventDefault()
            }),
            $(".album-load").animate({
                opacity: 1
            }, 100, "linear", function() {
                $(".loadx").fadeOut(400, "linear", function() {
                    $(".loadx").remove()
                })
            }),
            $(".close-album").on("click", function() {
                return $(".all-album").fadeOut(500, "linear", function() {
                    $(".overlay-dark").removeClass("show"),
                    $(".album-load").remove()
                }),
                0 != TouchLenght && isTouchDevice || $(".slide-slidebox").length && $(".slide-slidebox").trigger("play.btq.autoplay"),
                $("html, body").removeClass("no-scroll"),
                !1
            })
        }
    })
}
function NewsLoad(e, t) {
    $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            $(t).find(".news-content").append(e);
            e = $(t).find(".news-text");
            1 < $(e).length && $(e).last().remove(),
            $(window).width() <= 1100 && $(".group-central.active").length && $(".container").css("height", $(".group-central.active").height()),
            $(window).width() <= 1100 ? $(".news-text img").addClass("zoom-pic") : ($(".news-text img").removeClass("zoom-pic"),
            $("body").addClass("no-wheel")),
            ZoomPic(),
            detectBut(),
            $(".news-text a, .news-text p a").on("click", function(e) {
                e.preventDefault();
                e = $(this).attr("href");
                return window.open(e, "_blank"),
                !1
            }),
            $(t).find(".load-news").stop().animate({
                opacity: 1
            }, 600, "linear", function() {
                $(".loadx").fadeOut(500, function() {
                    $(".loadx").remove()
                }),
                1100 < $(window).width() ? setTimeout(function() {
                    ScrollNiceD()
                }, 500) : detectBut()
            }),
            $(".close-news, .click-hover").on("click", function() {
                var e, t, a, i, l;
                l = 1100 < $(window).width() ? (e = $(".box-nav li.current a").attr("href"),
                t = $(".box-nav li.current a").attr("data-title"),
                a = $(".box-nav li.current a").attr("data-keyword"),
                i = $(".box-nav li.current a").attr("data-description"),
                $(".box-nav li.current a").attr("data-name")) : (e = $(".sub-news li.current a").attr("href"),
                t = $(".sub-news li.current a").attr("data-title"),
                a = $(".sub-news li.current a").attr("data-keyword"),
                i = $(".sub-news li.current a").attr("data-description"),
                $(".sub-news li.current a").attr("data-name")),
                changeUrl(e, t, i, a, l, t, i),
                $(".load-news").stop().animate({
                    opacity: 0
                }, 600, "linear", function() {
                    $(".colum-box-news").removeClass("show"),
                    $(".scrollD").scrollTop(0),
                    $(".scrollD").getNiceScroll().remove(),
                    $(".news-content").children().remove(),
                    $("body").removeClass("no-wheel")
                })
            })
        }
    })
}
function popupCareer(e) {
    $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            $(".detail-recruitment").remove(),
            $(".show-recruitment").append(e),
            $(".show-recruitment").stop().animate({
                opacity: 1
            }, 100, "linear", function() {
                $(".show-recruitment").addClass("show"),
                1100 < $(window).width() ? setTimeout(function() {
                    ScrollNiceD()
                }, 1500) : $(".show-recruitment").scrollTop(0),
                $("body").addClass("no-wheel"),
                $("html, body").addClass("no-scroll"),
                $(".loadx").fadeOut(500, function() {
                    $(".loadx").remove()
                }),
                $(".detail-recruitment").addClass("show")
            }),
            $(".back-recruitment").on("click", function(e) {
                e.preventDefault();
                var t = $(".back-recruitment").attr("href")
                  , a = $(".back-recruitment").attr("data-title")
                  , i = $(".back-recruitment").attr("data-keyword")
                  , l = $(".back-recruitment").attr("data-description")
                  , e = $(".back-recruitment").attr("data-name");
                changeUrl(t, a, l, i, e, a, l),
                $(".show-recruitment").stop().animate({
                    opacity: 0
                }, 600, "linear", function() {
                    return $(".detail-recruitment").removeClass("show"),
                    $(".but-recruitment li").removeClass("current"),
                    $(".show-recruitment").removeClass("show"),
                    $(".scrollD").scrollTop(0),
                    $(".scrollD").getNiceScroll().remove(),
                    $("body").removeClass("no-wheel"),
                    $("html, body").removeClass("no-scroll"),
                    !1
                })
            })
        }
    })
}
function LinkPage() {
    $(".link-load, .link-home, .go-page, .link-blank, .back-page, .read-more-home").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("href");
        return t && ($(".container").removeClass("hide-mask").addClass("play-end"),
        $(".nav-click.active").hasClass("active") && $(".nav-click").trigger("click"),
        window.location = t,
        (isIE9 || isIE10 || isIE11) && setTimeout(function() {
            window.location = t
        }, 600)),
        !1
    }),
    $(".item-pro.target-blank, .item-project.target-blank").on("click", function(e) {
        e.preventDefault();
        e = $(this).find("a").attr("href");
        return window.open(e, "_blank"),
        !1
    }),
    $(".box-news-home, .item-pro:not(.target-blank), .item-project:not(.target-blank), .item-news").on("click", function(e) {
        e.preventDefault();
        var t = $(this).find("a").attr("href");
        return $(".container").removeClass("hide-mask").addClass("play-end"),
        $(".nav-click.active").hasClass("active") && $(".nav-click").trigger("click"),
        $("#home-page").length ? $(".container.play-end").one(animationEnd, function(e) {
            window.location = t
        }) : window.location = t,
        (isIE9 || isIE10 || isIE11) && setTimeout(function() {
            window.location = t
        }, 600),
        !1
    })
}
function subNav() {
    $(".sub-nav li").on("click", function() {
        var e = $(this).find("a").attr("data-name");
        if (doWheel) {
            doWheel = !1,
            $(".sub-nav li").removeClass("current"),
            $(this).addClass("current"),
            $(".second li a[data-name='" + e + "']").parent().addClass("current");
            e = $(".set-post[data-post='" + e + "']").offset().top - 70;
            return $("html, body").stop().animate({
                scrollTop: e
            }, 1500, "easeInOutExpo", function() {
                setTimeout(turnWheelTouch, 100)
            }),
            !1
        }
    })
}
function FocusText() {
    $("input, textarea").focus(function(e) {
        $(this).attr("data-holder") == $(this).val() && $(this).val("")
    }).focusout(function(e) {
        "" == $(this).val() && ($(this).prev().removeClass("hide"),
        $(this).val($(this).attr("data-holder")))
    })
}
function popupLoad(e) {
    $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            $(".details-content").remove(),
            $("body").prepend(e);
            $(".details-content").stop().animate({
                opacity: 1
            }, 600, "linear", function() {
                $(".details-center").addClass("fadeinup")
            }),
            $(".close-popup, .details-content span").on("click", function() {
                return $(".details-content").stop().animate({
                    opacity: 0
                }, 600, "linear", function() {
                    $(".details-content").remove(),
                    $(".overlay-dark").removeClass("show"),
                    $("html, body").removeClass("no-scroll")
                }),
                !1
            })
        }
    })
}
function popupLoadcontent(e) {
    $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            $(".details-content").remove(),
            $("body").prepend(e);
            $(".overlay-dark").addClass("showmore"),
            $("html, body").addClass("no-scroll"),
            $(".details-content").stop().animate({
                opacity: 1
            }, 600, "linear", function() {
                $(".details-center").addClass("fadeinup"),
                setTimeout(function() {
                    ScrollNiceD()
                }, 600),
                $(".loadx").remove()
            }),
            $(".close-news, .details-content span, .close-popup").on("click", function() {
                var e = $(".box-nav li.current a").attr("href")
                  , t = $(".box-nav li.current a").attr("data-title")
                  , a = $(".box-nav li.current a").attr("data-keyword")
                  , i = $(".box-nav li.current a").attr("data-description")
                  , l = $(".box-nav li.current a").attr("data-page");
                return changeUrl(e, t, i, a, l, t, i),
                $(".go-more, .read-more").removeClass("current"),
                $(".details-content").stop().animate({
                    opacity: 0
                }, 600, "linear", function() {
                    ScrollNiceHide(),
                    $(".details-content").remove(),
                    $(".overlay-dark").removeClass("showmore"),
                    $("html, body").removeClass("no-scroll")
                }),
                !1
            })
        }
    })
}
function ContentLoad() {
    ResizeWindows(),
    LinkPage(),
    Search(),
    NavClick(),
    Option(),
    AniText(),
    FocusText();
    $(".container").attr("id");
    $(".wrap-gopage > span").on("click", function() {
        $(this).parent().find("a").trigger("click")
    }),
    $(".wrap-blank-box-nav .go-page").on("click", function() {
        var e = $(this).parent().find("a").attr("href");
        window.open(e, "_blank")
    }),
    $("#home-page").length ? $("a.link-home").addClass("active") : ($(".logo").css({
        cursor: "pointer"
    }),
    $(".logo").on("click", function() {
        $("a.link-home").trigger("click")
    })),
    $("#home-page").length || setTimeout(function() {
        $(".container").addClass("show1")
    }, 300),
    $(".slider-inner-main").addClass("show"),
    setTimeout(function() {
        $(".header").addClass("show")
    }, 300),
    setTimeout(function() {
        $(".footer").addClass("show")
    }, 500),
    setTimeout(function() {
        $(".box-nav, .sub-news").addClass("show")
    }, 1e3),
    $("#home-page").length && (setTimeout(function() {
        $(".container").addClass("hide-mask").removeClass("show")
    }, 2e3),
    $(".home-popup").length && setTimeout(function() {
        var e = $(".home-popup").attr("data-href");
        return $("html, body").addClass("no-scroll"),
        $(".overlay-dark").addClass("show"),
        popupLoad(e),
        !1
    }, 300),
    $(".box-news-home").on("click", function(e) {
        e.preventDefault(),
        $(this).find(".go-page").trigger("click")
    })),
    $("#about-page").length && ($(".nav-history li a").on("click", function(e) {
        $(".nav-history li").removeClass("active"),
        $(".item-history").removeClass("active"),
        $(this).parent().addClass("active");
        var t = $(this).attr("data-year")
          , a = $(".item-history[data-item='" + t + "']").parent().index();
        $(".slider-history").data("btq.slidebox").to(a, 600, !0),
        $(".slider-history .slide-item .item-history[data-item='" + t + "']").addClass("active")
    }),
    $(".read-more").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("href")
          , a = $(this).attr("href")
          , i = $(this).attr("data-title")
          , l = $(this).attr("data-keyword")
          , o = $(this).attr("data-description")
          , e = $(this).attr("data-name");
        return changeUrl(a, i, o, l, e, i, o),
        $(".item-project").removeClass("current"),
        $(this).addClass("current"),
        $(".loadicon").hasClass("loader") && $(".loadx").length || ($("body").append('<div class="loadx" style="display:block"></div>'),
        popupLoadcontent(t)),
        !1
    }),
    $(".box-nav li.current").length && setTimeout(function() {
        $(".box-nav li.current").trigger("click")
    }, 500),
    $(".read-more.current").length && setTimeout(function() {
        $(".read-more.current").trigger("click")
    }, 1e3),
    $(".nav-history li:first-child a").trigger("click")),
    $("#search-page").length,
    $("#sustainable-page").length && ($(".read-more, .go-more").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("href")
          , a = $(this).attr("href")
          , i = $(this).attr("data-title")
          , l = $(this).attr("data-keyword")
          , o = $(this).attr("data-description")
          , e = $(this).attr("data-name");
        return changeUrl(a, i, o, l, e, i, o),
        $(".item-project").removeClass("current"),
        $(this).addClass("current"),
        $(".loadicon").hasClass("loader") && $(".loadx").length || ($("body").append('<div class="loadx" style="display:block"></div>'),
        popupLoadcontent(t)),
        !1
    }),
    $(".box-nav li.current").length && setTimeout(function() {
        $(".box-nav li.current a").trigger("click")
    }, 500),
    $(".read-more.current").length && setTimeout(function() {
        $(".read-more.current").trigger("click")
    }, 1e3),
    $(".go-more.current").length && setTimeout(function() {
        $(".go-more.current").trigger("click")
    }, 1e3)),
    $("#career-page").length && ($(".but-recruitment a").on("click", function(e) {
        e.preventDefault(),
        $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'),
        $(".but-recruitment li").removeClass("current"),
        $(this).parent().addClass("current");
        var t = $(this).attr("href")
          , a = $(this).attr("href")
          , i = $(this).attr("data-title")
          , l = $(this).attr("data-keyword")
          , o = $(this).attr("data-description")
          , e = $(this).attr("data-name");
        return changeUrl(a, i, o, l, e, i, o),
        $(".show-recruitment").stop().animate({
            opacity: 0
        }, 500, "linear", function() {
            popupCareer(t)
        }),
        !1
    }),
    $(".box-nav li.current").length && setTimeout(function() {
        $(".box-nav li.current").trigger("click")
    }, 500),
    $(".but-recruitment li.current").length && setTimeout(function() {
        $(".but-recruitment li.current a").trigger("click")
    }, 1500)),
    $("#news-page").length && ($(".link-page").on("click", function(e) {
        e.preventDefault(),
        $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'),
        $(".colum-box.active .link-page, .group-central.show-text .link-page").removeClass("current"),
        $(this).addClass("current");
        var t = $(".colum-box.active .colum-box-news, .group-central.show-text .colum-box-news");
        $(t).addClass("show");
        $(this).find("a").attr("data-name");
        var a = $(this).find("a").attr("href")
          , i = $(this).find("a").attr("data-title")
          , l = $(this).find("a").attr("data-keyword")
          , o = $(this).find("a").attr("data-description")
          , e = $(this).find("a").attr("data-name");
        changeUrl(a, i, o, l, e, i, o);
        var n = $(this).find("a").attr("href");
        return $(t).find(".load-news").stop().animate({
            opacity: 0
        }, 500, "linear", function() {
            $(t).find(".news-text").remove(),
            NewsLoad(n, t)
        }),
        !1
    }),
    1100 < $(window).width() ? ($(".link-page.current").length && setTimeout(function() {
        $(".link-page.current").trigger("click")
    }, 1200),
    $(".box-nav li.current").length && $(".box-nav li.current").trigger("click")) : ($(".colum-box.active .link-page.current").length ? setTimeout(function() {
        $(".colum-box.active").find(".link-page.current").trigger("click")
    }, 500) : setTimeout(function() {
        $(".colum-box.active").find(".row-news:first-child .item-news1:first-child .link-page").trigger("click")
    }, 500),
    $(".sub-news li.current").length && $(".sub-news li.current").trigger("click"))),
    $("#business-page").length && ($(".box-nav").addClass("busi-nav"),
    $(".box-nav li.current").length && setTimeout(function() {
        $(".box-nav li.current a").trigger("click")
    }, 500),
    $(".link-popup").on("click", function(e) {
        e.preventDefault();
        e = $(this).attr("data-href") || $(this).attr("href");
        $(".loadicon").hasClass("loader") && $(".loadx").length || ($("body").append('<div class="loadx" style="display:block"></div>'),
        popupLoadcontent(e))
    }),
    $(".item-financial a").on("click", function(e) {
        e.preventDefault();
        e = $(this).attr("href");
        return window.location = e,
        !1
    })),
    $("#project-detail-page").length && ($(".nav li.current").addClass("active").removeClass("current"),
    $(".view-item").on("click", function() {
        $(this).find("a").trigger("click")
    }),
    $(".item-news").on("click", function(e) {
        e.preventDefault();
        e = $(this).find("a").attr("data-href");
        return e += "?isproject=1",
        $(".item-project").removeClass("current"),
        $(this).addClass("current"),
        $(".loadicon").hasClass("loader") && $(".loadx").length || ($("body").append('<div class="loadx" style="display:block"></div>'),
        popupLoadcontent(e)),
        !1
    }),
    $(".catalogue-item").on("click", function() {
        $(this).find(".pdf").trigger("click")
    }),
    $(".box-nav li.current").length && setTimeout(function() {
        $(".box-nav li.current").trigger("click")
    }, 500)),
    $("#contact-page").length && ($(".wheel").hide(),
    setTimeout(function() {
        $(".contact-main").addClass("show-text")
    }, 500))
}
function ZoomPic() {
    $("img").on("click", function() {
        var e;
        return $(this).hasClass("zoom-pic") && $(window).width() <= 820 && ($("html, body").addClass("no-scroll"),
        $(this).parent().addClass("to-scrollZ"),
        $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'),
        $(".all-pics").addClass("show"),
        $(".all-pics").append('<div class="full"  style="display:block"></div>'),
        $(".overlay-dark").addClass("show"),
        e = $(this).attr("src"),
        $(".all-pics").find(".full").append('<img src ="' + e + '" alt="pic" />'),
        $(".all-pics").find(".full").append("<span></span>"),
        $("body").append('<div class="close-pics"></div>'),
        $(".all-pics").append('<div class="close-pics-small"></div>'),
        $(".all-pics img").on("load", function() {
            $(".all-pics").addClass("show"),
            0 != TouchLenght && isTouchDevice ? ($(".full").addClass("pinch-zoom"),
            $(".pinch-zoom").each(function(e, t) {
                new PinchZoom.default(t,{})
            })) : ($(".full").addClass("dragscroll"),
            $(".dragscroll").draptouch()),
            1 < $(".full img").length && $(".full img").last().remove(),
            $(".loadx").fadeOut(400, "linear", function() {
                0 != TouchLenght && isTouchDevice || detectMargin(),
                $(".full img").addClass("fadein"),
                $(".loadx").remove()
            })
        }),
        1100 < $(window).width() && $(".full span").on("click", function() {
            $(".close-pics").trigger("click")
        }),
        $(".close-pics-small, .close-pics").on("click", function() {
            $(".loadx").remove(),
            $(".full").fadeOut(300, "linear", function() {
                var e;
                $(".overlay-dark").removeClass("show"),
                $(".all-pics .full,  .all-pics .pinch-zoom-container").remove(),
                $(".close-pics-small, .close-pics").remove(),
                $(".all-pics").removeClass("show"),
                $(".house").length || ($("html, body").removeClass("no-scroll"),
                $(".to-scrollZ").length && (e = $(".to-scrollZ").offset().top,
                $(".to-scrollZ").removeClass("to-scrollZ"),
                $(window).width() < 1100 && $("html, body").scrollTop(e - 60)))
            })
        })),
        !1
    })
}
function Option() {
    $(".pdf").on("click", function(e) {
        e.preventDefault();
        e = $(this).attr("href");
        return window.open(e, "_blank"),
        !1
    }),
    $("a.player, a.play-video, .view-video").on("click", function(e) {
        e.preventDefault(),
        $(this).parent().addClass("to-scrollV"),
        $(".popup-video img").length && ($(".popup-pics, .popup-video").removeClass("fadeinup").addClass("fadeout"),
        $(".close-popup").removeClass("fadeinup").addClass("fadeout"));
        var t = $(this).attr("data-href");
        return $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'),
        $("html, body").addClass("no-scroll"),
        $(".overlay-dark").addClass("show"),
        $(".allvideo").fadeIn(300, "linear", function() {
            VideoLoad(t)
        }),
        !1
    }),
    $(".view-album").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("data-href")
          , a = $(this).attr("data-go") || -1;
        return $(".slide-pic").length && $(".slide-pic").trigger("stop.btq.autoplay"),
        $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'),
        $("html, body").addClass("no-scroll"),
        $(".overlay-dark").addClass("show"),
        $(".all-album").fadeIn(300, "linear", function() {
            AlbumLoad(t, a)
        }),
        !1
    }),
    $(".zoom, .zoom-large").on("click", function() {
        $("html, body").addClass("no-scroll"),
        $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'),
        $(".all-pics").addClass("show"),
        $(".all-pics").append('<div class="full"  style="display:block"></div>'),
        $(".overlay-dark").addClass("show");
        var e = $(this).attr("data-pic")
          , t = $(this).parent().find("h3").text();
        return $(".all-pics").find(".full").append('<img src ="' + e + '" alt="pic" />'),
        $(".all-pics").find(".full").append("<span></span>"),
        $("body").append('<div class="close-pics"></div>'),
        $(".all-pics").append('<div class="close-pics-small"></div>'),
        $(".all-pics").prepend('<div class="text-length"><h3></h3></div>'),
        $(".text-length h3").text(t),
        $(".all-pics img").on("load", function() {
            $(".all-pics").addClass("show"),
            0 != TouchLenght && isTouchDevice ? ($(".full").addClass("pinch-zoom"),
            $(".pinch-zoom").each(function(e, t) {
                new PinchZoom.default(t,{})
            })) : ($(".full").addClass("dragscroll"),
            $(".dragscroll").draptouch()),
            1 < $(".full img").length && $(".full img").last().remove(),
            $(".loadx").fadeOut(400, "linear", function() {
                0 != TouchLenght && isTouchDevice || detectMargin(),
                $(".full img, .text-length").addClass("fadein"),
                $(".loadx").remove()
            })
        }),
        1100 < $(window).width() && $(".full span").on("click", function() {
            $(".close-pics").trigger("click")
        }),
        $(".close-pics, .close-pics-small").on("click", function() {
            $(".loadx").remove(),
            $(".full").fadeOut(300, "linear", function() {
                $(".overlay-dark").removeClass("show"),
                $(".all-pics .full, .all-pics .text-length, .all-pics .pinch-zoom-container").remove(),
                $(".close-pics, .close-pics-small").remove(),
                $(".all-pics").removeClass("show"),
                $("html, body").removeClass("no-scroll")
            })
        }),
        !1
    })
}
function turnWheelTouch() {
    doTouch = doWheel = !0
}
function StopBanner() {
    var e;
    $(".slide-bg.slide-container-horizontal").length && (e = $(".slide-bg")[0].swiper,
    100 <= windscroll ? 2 <= $(".slide-bg .item-container").length && e.stopAutoplay() : 2 <= $(".slide-bg .item-container").length && (e.startAutoplay(),
    e.slideNext()))
}
function detectBut() {
    var e, t, a;
    $(window).width() <= 1100 && $(".sub-nav li.current").length && (e = $(".sub-nav ul").offset().left,
    t = $(".sub-nav li.current").offset().left,
    a = $(window).width() / 2 - $(".sub-nav li.current").width() / 2,
    $(".sub-nav").stop().animate({
        scrollLeft: t - a - e
    }, "slow")),
    $(window).width() <= 1100 && $(".sub-news li.current").length && (e = $(".sub-news ul").offset().left,
    t = $(".sub-news li.current").offset().left,
    a = $(window).width() / 2 - $(".sub-news li.current").width() / 2,
    $(".sub-news").stop().animate({
        scrollLeft: t - a - e
    }, "slow")),
    $(window).width() <= 1100 && $(".colum-box.active .link-page.current").length && (e = $(".colum-box.active .row-news").offset().left,
    t = $(".colum-box.active .row-news .link-page.current").offset().left,
    a = $(window).width() / 2 - $(".colum-box.active .row-news .link-page.current").width() / 2,
    $(".colum-box.active .slider-news").stop().animate({
        scrollLeft: t - a - e
    }, "slow"))
}
function detectMargin() {
    var e = $(".full img").width()
      , t = $(".full  img").height()
      , a = $(window).height()
      , i = $(window).width();
    e < i ? $(".full img").css({
        "margin-left": i / 2 - e / 2
    }) : $(".full img").css({
        "margin-left": 0
    }),
    t < a ? $(".full img").css({
        "margin-top": a / 2 - t / 2
    }) : $(".full img").css({
        "margin-top": 0
    })
}
function LocationHash() {
    var e = (e = window.location.hash).slice(1);
    Arrhash = e.split("/"),
    $(".link-page a[data-name='" + e + "']").trigger("click"),
    $(".room-gach a[data-details='" + e + "']").trigger("click")
}
$.fn.isInViewport = function() {
    var e = $(this).offset().top
      , t = e + $(this).outerHeight()
      , a = $(window).scrollTop()
      , i = a + $(window).height();
    return a < t && e < i
}
,
$(document).ready(function() {
    $("#contact_form").length && document.getElementById("contact_form").reset(),
    $(".business-home .col-e").on("click", function(e) {
        $(this).find("a").trigger("click")
    }),
    $(".container").on("click", function() {
        $(".search-but").hasClass("active") && $(".search-form, .search-but").removeClass("active")
    }),
    $(".nav-overlay").on("click", function() {
        $(".nav-click.active").trigger("click")
    }),
    $(".go-top").on("click", function() {
        1100 < $(window).width() ? $(".box-nav li:first-child").trigger("click") : ($("html, body").stop().animate({
            scrollTop: 0
        }, "slow"),
        1100 < $(window).width() && $("head").removeClass("hide"))
    }),
    $(document).bind("scroll", function() {
        var e = $(document).scrollTop()
          , t = $(".slide-home, .slide-inner").height();
        $(".slide-bg"),
        $(window).scrollTop(),
        $("header").innerHeight();
        e >= $(window).height() / 2 ? $(".go-top").addClass("show") : $(".go-top").removeClass("show"),
        1100 < $(window).width() && (70 <= e ? $("header").addClass("hide") : $("header").removeClass("hide")),
        $(".second").length && (e >= t - $(".header").height() ? $(".second").addClass("fixed") : $(".second").removeClass("fixed"))
    }),
    $("#home-page").length ? setTimeout(function() {
        0 == Loadx && (Loadx = 1,
        Done())
    }, 1500) : setTimeout(function() {
        0 == Loadx && (Loadx = 1,
        Done())
    }, 500)
}),
window.onorientationchange = ResizeWindows,
$(window).on("orientationchange", function() {
    $(window).width() <= 1100 && (ScrollHoz(),
    $(".full.dragscroll").length && 740 < $(window).width() && ($("html, body").removeClass("no-scroll"),
    $(".close-pics-small").trigger("click")),
    detectBut())
}),
$(window).resize(function() {
    ResizeWindows(),
    ScrollNiceHide(),
    $(".second").length && $(".second").removeClass("fixed")
}),
$(window).on("resize", function() {
    ResizeWindows(),
    1100 < $(window).width() ? ($(".nav-click").hasClass("active") && $(".container").trigger("click"),
    $(".dragscroll").length && (detectMargin(),
    $(".dragscroll").draptouch()),
    $(".group-central").hasClass("show-text") || BoxSlide(),
    $(".full.dragscroll").length && !zoomPC && ($("html, body").removeClass("no-scroll"),
    $(".close-pics-small").trigger("click")),
    $("#news-page").length && ($(".container").css("height", "100%"),
    $(".slider-news").hasClass("slide-slidebox") || (SlidePicture(),
    $(".group-central").hasClass("active") && $(".group-central").removeClass("active"),
    setTimeout(function() {
        $(".box-nav li.current").trigger("click")
    }, 500))),
    $(".slider-member").length && ($(".slider-member").hasClass("slide-slidebox") || SlidePicture()),
    $(".slider-financial").length && ($(".slider-financial").hasClass("slide-slidebox") || SlidePicture()),
    $(".scrollA, .scrollB, .scrollC, .scrollD").length && setTimeout(function() {
        ScrollNiceA(),
        ScrollNiceB(),
        ScrollNiceC(),
        ScrollNiceD()
    }, 300),
    $(".slider-news, .iframe-sroll, .content-table, .sub-nav").hasClass("dragscroll") && $(".slider-news, .iframe-sroll, .content-table, .sub-nav").removeClass("dragscroll draptouch-active draptouch-moving-left draptouch-moving-down")) : (0 != TouchLenght && isTouchDevice || (ScrollHoz(),
    detectBut(),
    $(".zoom-pic").length && 820 < $(window).width() && ($("html, body").removeClass("no-scroll"),
    $(".close-pics-small").trigger("click"))),
    $(".dragscroll").length && (detectMargin(),
    $(".dragscroll").draptouch()),
    $("#news-page").length && ($(".container").css("height", $(".group-central.active").height()),
    $(".slider-news").hasClass("slide-slidebox") && ($(".slider-news").each(function(e, t) {
        $(t).data("btq.slidebox").destroy()
    }),
    $(".group-central").hasClass("show-text") && $(".group-central").removeClass("show-text"),
    BoxNews(),
    setTimeout(function() {
        $(".sub-news li.current").trigger("click")
    }, 500))),
    $(".slider-member").length && $(".slider-member").hasClass("slide-slidebox") && $(".slider-member").data("btq.slidebox").destroy(),
    $(".slider-financial").length && $(".slider-financial").hasClass("slide-slidebox") && $(".slider-financial").each(function(e, t) {
        $(t).data("btq.slidebox").destroy()
    }))
}, 250),
$(window).bind("popstate", function(e) {
    1100 < $(window).width() && e.preventDefault();
    var t, a, i, l, o = $(".httpserver").text();
    1100 < $(window).width() ? null !== e.originalEvent.state ? (i = e.originalEvent.state.path,
    l = e.originalEvent.state.dataName,
    t = e.originalEvent.state.title,
    a = document.URL,
    changeUrl(i, t, "", "", l, "", ""),
    l = i.replace(o, "").split("/"),
    $("#about-page, #sustainable-page, #business-page, #project-detail-page").length && ($(".close-video").length && $(".close-video").trigger("click"),
    $(".close-album").length && $(".close-album").trigger("click"),
    $(".close-news").length ? $(".close-news").trigger("click") : ($(".nav li a").each(function(e, t) {
        $(t).attr("href") == i && window.history.back()
    }),
    $(".box-nav li a").each(function(e, t) {
        $(t).attr("href") == i && $(t).trigger("click")
    }),
    $(".read-more").each(function(e, t) {
        $(t).attr("href") == i && $(t).trigger("click")
    }))),
    $("#career-page").length && ("" != l[3] && null != l[3] ? ($(".box-nav li.current a").attr("href") != o + l[0] + "/" + l[1] + "/" + l[2] + ".html" && $(".box-nav li a[href='" + o + l[0] + "/" + l[1] + "/" + l[2] + ".html']").trigger("click"),
    $(".but-recruitment li a").each(function(e, t) {
        $(t).attr("href") == i && $(t).trigger("click")
    })) : "" != l[2] && null != l[2] ? ($(".check-back-recruitment").length ? $(".back-recruitment") : $(".box-nav li a[href='" + i + "']")).trigger("click") : window.history.back()),
    $("#news-page").length && ($(".news-text").length ? $(".close-news").trigger("click") : ($(".nav li a").each(function(e, t) {
        $(t).attr("href") == i && window.history.back()
    }),
    $(".box-nav li a").each(function(e, t) {
        $(t).attr("href") == i && window.history.back()
    }),
    $(".link-page a").each(function(e, t) {
        $(t).attr("href") == i && $(t).trigger("click")
    })))) : (l = (a = document.URL).replace(o, "").split("/"),
    $("#about-page, #sustainable-page, #business-page, #project-detail-page").length && ($(".close-video").length && $(".close-video").trigger("click"),
    $(".close-album").length && $(".close-album").trigger("click"),
    $(".close-news").length ? $(".close-news").trigger("click") : ($(".nav li a").each(function(e, t) {
        $(t).attr("href") == a && window.history.back()
    }),
    $(".box-nav li a").each(function(e, t) {
        $(t).attr("href") == a && $(t).trigger("click")
    }),
    $(".read-more").each(function(e, t) {
        $(t).attr("href") == a && $(t).trigger("click")
    }))),
    $("#career-page").length && ("" != l[3] && null != l[3] ? ($(".box-nav li.current a").attr("href") != o + l[0] + "/" + l[1] + "/" + l[2] + ".html" && $(".box-nav li a[href='" + o + l[0] + "/" + l[1] + "/" + l[2] + ".html']").trigger("click"),
    $(".but-recruitment li a").each(function(e, t) {
        $(t).attr("href") == a && $(t).trigger("click")
    })) : "" != l[2] && null != l[2] ? ($(".check-back-recruitment").length ? $(".back-recruitment") : $(".box-nav li a[href='" + a + "']")).trigger("click") : window.history.back()),
    $("#news-page").length && ($(".news-text").length ? $(".close-news").trigger("click") : ($(".nav li a").each(function(e, t) {
        $(t).attr("href") == a && window.history.back()
    }),
    $(".box-nav li a").each(function(e, t) {
        $(t).attr("href") == a && window.history.back()
    }),
    $(".link-page a").each(function(e, t) {
        $(t).attr("href") == a && $(t).trigger("click")
    })))) : (l = (i = null !== e.originalEvent.state ? e.originalEvent.state.path : document.URL).replace(o, "").split("/"),
    $("#sustainable-page").length && ($(".close-news").length ? $(".close-news").trigger("click") : ($(".nav li a").each(function(e, t) {
        $(t).attr("href") == i && window.history.back()
    }),
    $(".box-nav li a").each(function(e, t) {
        $(t).attr("href") == i && window.history.back()
    }),
    $(".read-more").each(function(e, t) {
        $(t).attr("href") == i && $(t).trigger("click")
    }),
    $(".go-more").each(function(e, t) {
        $(t).attr("href") == i && $(t).trigger("click")
    }))),
    $("#career-page").length && ($(".nav li a").each(function(e, t) {
        $(t).attr("href") == i && window.history.back()
    }),
    $(".box-nav li a").each(function(e, t) {
        $(t).attr("href") == i && window.history.back()
    }),
    $(".but-recruitment li a").each(function(e, t) {
        $(t).attr("href") == i && $(t).trigger("click")
    })),
    $("#news-page").length && ($(".nav li a").each(function(e, t) {
        $(t).attr("href") == i && window.history.back()
    }),
    $(".box-nav li a").each(function(e, t) {
        $(t).attr("href") == i && window.history.back()
    }),
    $(".link-page a").each(function(e, t) {
        $(t).attr("href") == i && (window.location = i)
    })))
}),
(iOS || isFirefox) && $(window).bind("pageshow", function(e) {
    e.originalEvent.persisted && window.location.reload()
});
