!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=e.parcelRequireaa42;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var i=o[e];delete o[e];var t={id:e,exports:{}};return n[e]=t,i.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequireaa42=i);var t=i("h6c0i"),r=document.querySelector(".form"),l=document.querySelector('[name="delay"]'),u=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]'),d=a.value,s=u.value;function c(e,n){return new Promise((function(e,n){Math.random()>.3?e("✅ Fulfilled promise $(position) in $(delay)ms"):n("❌ Rejected promise $(position) in $(delay)ms")}))}r.addEventListener("submit",(function(){var e=0;setInterval((function(){(e+=1)!==a.value&&setTimeout((function(){d=e,s+=u.value,c(d,s)}),l.value)}),u.value)})),c(2,1500).then((function(e){e.position,e.delay;t.Notify.success("✅ Fulfilled promise $(position) in $(delay)ms")})).catch((function(e){e.position,e.delay;t.Notify.failure("❌ Rejected promise $(position) in $(delay)ms")}))}();
//# sourceMappingURL=03-promises.f4cc0a06.js.map
