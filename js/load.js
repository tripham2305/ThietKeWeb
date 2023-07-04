var ua = navigator.userAgent;
var match = ua.match('MSIE (.)');
var versions = match && match.length > 1 ? match[1] : 'unknown';
var isTouchDevice = "ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints > 0);
var isDesktop = $(window).width() != 0 && !isTouchDevice ? true : false;
var IEMobile = ua.match(/IEMobile/i);
var isIE9 = /MSIE 9/i.test(ua);
var isIE10 = /MSIE 10/i.test(ua);
var isIE11 = /rv:11.0/i.test(ua) && !IEMobile ? true : false;
var isEge = /Edge\/12./i.test(navigator.userAgent)
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || ua.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isIE = false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia && !isIE11;
var isChrome = !!window.chrome && !!window.chrome.webstore;
var isBlink = (isChrome || isOpera) && !!window.CSS;
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || !isChrome && !isOpera && window.webkitAudioContext !== undefined;
var isSafari5 = ua.match('Safari/') && !ua.match('Chrome') && ua.match(' Version/5.');
var AndroidVersion = parseFloat(ua.slice(ua.indexOf("Android") + 8));
var Version = ua.match(/Android\s([0-9\.]*)/i);
var isIOS8 = function() {
    var deviceAgent = navigator.userAgent.toLowerCase();
    return /iphone os 8_/.test(deviceAgent);
}
function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    }
}
var iOS = iOSversion();
var ios, android, blackBerry, UCBrowser, Operamini, firefox, windows, smartphone, tablet, touchscreen, all;
var isMobile = {
    ios: (function() {
        return ua.match(/iPhone|iPad|iPod/i);
    }()),
    android: (function() {
        return ua.match(/Android/i);
    }()),
    blackBerry: (function() {
        return ua.match(/BB10|Tablet|Mobile/i);
    }()),
    UCBrowser: (function() {
        return ua.match(/UCBrowser/i);
    }()),
    Operamini: (function() {
        return ua.match(/Opera Mini/i);
    }()),
    windows: (function() {
        return ua.match(/IEMobile/i);
    }()),
    smartphone: (function() {
        return (ua.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && window.innerWidth <= 440 && window.innerHeight <= 740);
    }()),
    tablet: (function() {
        return (ua.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && window.innerWidth <= 1366 && window.innerHeight <= 800);
    }()),
    all: (function() {
        return ua.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
    }())
};
if (isTouchDevice && isMobile.all !== null) {
    var TouchLenght = true;
} else if (isMobile.tablet && isFirefox || isMobile.smartphone && isFirefox) {
    var TouchLenght = true;
} else {
    var TouchLenght = false;
}
if (isMobile.Operamini) {
    alert('Please disable Data Savings Mode');
}
function changeUrl(url, title, description, keyword, dataName, titleog, descriptionog) {
    if (window.history.pushState !== undefined) {
        var c_href = document.URL;
        if (c_href != url && url != '')
            window.history.pushState({
                path: url,
                dataName: dataName,
                title: title,
                keyword: keyword,
                description: description,
                titleog: titleog,
                descriptionog: descriptionog
            }, "", url);
    }
    if (title != '') {
        $('#hdtitle').html(title);
        $('meta[property="og:description"]').remove();
        $('#hdtitle').after('<meta property="og:description" content="' + descriptionog + '">');
        $('meta[property="og:title"]').remove();
        $('#hdtitle').after('<meta property="og:title" content="' + titleog + '">');
        $('meta[property="og:url"]').remove();
        $('#hdtitle').after('<meta property="og:url" content="' + url + '">');
        $('meta[name=keywords]').remove();
        $('#hdtitle').after('<meta name="keywords" content="' + keyword + '">');
        $('meta[name=description]').remove();
        $('#hdtitle').after('<meta name="description" content="' + description + '">');
    }
    $('#changlanguage_redirect').val(url);
}
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransitionend transitionend';
var Loadx = 0;
function ResizeWindows() {
    var Portrait = $(window).height() >= $(window).width();
    var Landscape = $(window).height() < $(window).width();
    var Xwidth = $(window).width();
    var Yheight = $(window).height();
    var RatioScreeen = Yheight / Xwidth;
    var RatioIMG = 1125 / 2000;
    var RatioBanner = 740 / 2000;
    var newXwidth;
    var newYheight;
    if (RatioScreeen > RatioIMG) {
        newYheight = Yheight;
        newXwidth = Yheight / RatioIMG;
    } else {
        newYheight = Xwidth * RatioIMG;
        newXwidth = Xwidth;
    }
    $('.scroll-down').css({
        'top': Yheight - 90
    });
    if (Xwidth <= 1100) {
        if (Portrait == true) {
            $('.pic-home').css({
                'height': (Xwidth + 250) * RatioIMG
            });
        } else {
            $('.pic-home').css({
                'height': Xwidth * RatioIMG
            })
        }
        if ($('#news-page').length) {
            $('.box-slider').addClass('box-content');
            $('.group-central').addClass('colum-box');
        }
        if ($('.scrollA,.scrollB,.scrollC, .scrollD').length) {
            $('.scrollA,.scrollB,.scrollC, .scrollD').getNiceScroll().remove();
        }
    } else if (Xwidth > 1100) {
        $('.pic-home').css({
            'height': Yheight
        });
        if ($('#news-page').length) {
            $('.box-slider').removeClass('box-content');
            $('.group-central').removeClass('colum-box');
        }
        if ((Yheight - 110) * RatioBanner > Xwidth) {
            $('.album-box').addClass('is-portrait');
        } else {
            $('.album-box').removeClass('is-portrait');
        }
    }
}
function DrawLoad() {
    var Stroke = $('.load-present');
    var Paths = $(Stroke).find('path');
    $(Paths).each(function(index, element) {
        var totalLength = this.getTotalLength();
        if (isIE9 || isIE10 || isIE11 || isEdge) {
            $(this).css({
                'stroke-dasharray': totalLength + ' ' + totalLength
            });
            $(this).css({
                'stroke-dashoffset': totalLength,
                'stroke-dasharray': totalLength + ' ' + totalLength
            });
            $(this).stop().animate({
                'stroke-dashoffset': 0
            }, 1500, 'linear', function() {
                $(this).stop().animate({
                    'stroke-dashoffset': totalLength
                }, 1500, 'linear');
            });
        }
    });
    setTimeout(function() {
        $('.loadicon').addClass('show')
    }, 1000);
}
function ScrollHoz() {
    var Scroll = $('.slider-news, .sub-nav, .horizon-tab,  .iframe-sroll, .content-table,  .nav-history');
    if ($(window).width() <= 1100) {
        $(Scroll).css({
            '-ms-touch-action': 'auto',
            '-ms-overflow-style': 'none',
            'overflow': ' -moz-scrollbars-none',
            '-webkit-overflow-scrolling': 'touch'
        });
        $(Scroll).animate({
            scrollLeft: "0px"
        });
        if (TouchLenght == false || !isTouchDevice) {
            if ($(window).width() <= 1100) {
                $(Scroll).mousewheel(function(e, delta) {
                    e.preventDefault();
                    if ($(window).width() <= 1100) {
                        this.scrollLeft -= (delta * 40);
                    }
                });
                $(Scroll).addClass('dragscroll');
                $('.dragscroll').draptouch();
            }
        }
    }
}
var Itemx = $('.nav li, .but-recruitment li');
function AnimationDelay() {
    $(Itemx).each(function(index, element) {
        var minDelay = 50;
        var maxDelay = 250;
        var time = Math.floor(index) * ((maxDelay - minDelay) / 2 - minDelay);
        $(element).css({
            '-webkit-animation-delay': time + 'ms',
            'animation-delay': time + 'ms'
        });
    });
}
function Done() {
    ResizeWindows();
    SlidePicture();
    ScrollHoz();
    AnimationDelay();
    $('.go-top').removeClass('show');
    if ($(window).width() > 1100) {
        BoxSlide();
    } else {
        if ($('#news-page').length) {
            BoxNews();
        }
    }
    $('.loadicon').fadeOut(300, function() {
        if ($('#home-page').length) {
            $('.container').addClass('show');
        }
        $('.loadicon').removeClass('loader');
        $('.loadicon').removeClass('show');
    });
    $(".slogan > h2, .slogan > p").lettering('words').children("span").lettering().children("span").lettering();
    $(".title-page > h1").lettering('words').children('span').lettering().children('span').lettering();
    $('.container').stop().animate({
        'opacity': 1
    }, 300, 'linear', function() {
        ContentLoad();
    });
}
$(document).ready(function() {
    ResizeWindows();
    $('html, body').animate({
        scrollTop: 0
    }, 1);
    if (isIE9 || isIE10 || isIE11 || isEdge) {
        $('body').addClass('is-IE');
    } else if (iOS) {
        $('body').addClass('is-IOS');
    } else if (isChrome) {
        $('body').addClass('is-Chrome');
    }
    if (!$('.loadicon').hasClass('loader')) {
        $('.loadicon').show();
        $('.loadicon').addClass('loader');
        DrawLoad();
    }
    if ($('.pic-home, .pic-img').length) {
        $('.pic-home, .pic-img').each(function(index, element) {
            var IMG = $(element).find('img').attr('src');
            if (IMG) {
                var SRC = IMG.replace(/(^url\()|(\)$|[\"\'])/g, '');
                $(element).css({
                    'background-image': 'url(' + SRC + ')'
                });
            }
        });
    }
});
