(function(window){var svgSprite='<svg><symbol id="icon-shijian" viewBox="0 0 1025 1024"><path d="M568.920607 506.899532c-1.114225-12.592068-6.305754-24.007498-14.253684-32.919248L554.666922 326.841252c0-23.563445-19.102454-42.666922-42.666922-42.666922-23.564468 0-42.666922 19.102454-42.666922 42.666922l0 147.138009c-9.008951 10.102712-14.492081 23.419179-14.492081 38.020739 0 31.051975 24.765662 56.301593 55.620167 57.120124L637.204463 695.863424c16.66221 16.66221 43.677808 16.66221 60.340018 0 16.66221-16.66221 16.66221-43.676784 0-60.340018L568.920607 506.899532z"  ></path><path d="M512 0C229.230473 0 0 229.230473 0 512s229.230473 512 512 512 512-229.230473 512-512S794.769527 0 512 0zM113.959901 500.084243l0 23.830491c-0.116641-3.958618-0.182123-7.92849-0.182123-11.915757S113.84326 504.042861 113.959901 500.084243zM508.059799 910.197666l7.880402 0c-1.312718 0.012278-2.624413 0.024556-3.940201 0.024556S509.372517 910.209944 508.059799 910.197666zM554.666922 907.955916 554.666922 794.981321l-85.332822 0 0 112.974595C283.483694 888.158734 135.841266 740.516306 116.044084 554.666922l113.131139 0 0-85.332822-113.131139 0c19.797182-185.849383 167.43961-333.491812 353.288994-353.288994l0 110.54049 85.332822 0L554.665899 116.044084c185.849383 19.797182 333.491812 167.43961 353.288994 353.288994L797.572993 469.333078l0 85.332822 110.382923 0C888.158734 740.516306 740.516306 888.158734 554.666922 907.955916z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)