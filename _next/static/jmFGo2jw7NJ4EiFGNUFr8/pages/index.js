(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"0oBi":function(e,t,a){"use strict";var r=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=l.default.useState(!1),t=(0,n.default)(e,2),a=t[0],r=t[1];return(0,o.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){r(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),a};var n=r(a("nxTg")),l=r(a("mXGw")),o=r(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var r=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("RiSW")),l=r(a("mXGw")),o=r(a("9fEB")),s=a("GDok"),i=a("nZpd"),u=a("AFBu"),c=a("0oBi");t.default=function(){return function(e){var t=e.children,a=(0,n.default)(e,["children"]),r=l.default.useState(!1);l.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var f=(0,c.useDarkMode)();return l.default.createElement(i.MobileMenuContext.Provider,{value:a.menuState||r},l.default.createElement(o.default,null,l.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,u.formatPath)(f?"favicon-dark.png":"favicon.png")})),l.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col dark:bg-gray-1000"},l.default.createElement(s.NavBar,{sections:["docs","blog"],hasHomePage:!0}),t))}}},"8fa9":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a("mXGw"),n=a.n(r).a.createElement,l=function(){return n("a",{href:"https://intuit.github.io/auto/docs/welcome/getting-started",className:"uppercase text-xl lg:text-2xl border-2 border-white rounded px-6 py-3 hover:bg-primary-500 hover:text-white"},n("span",{className:"pr-2"},"Get Started")," \ud83c\udf89")}},AFBu:function(e,t,a){"use strict";var r=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return n.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))};var n=r(a("R8iU"))},GDok:function(e,t,a){"use strict";var r=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var n=r(a("nxTg")),l=r(a("8VmE")),o=r(a("RiSW")),s=r(a("mXGw")),i=r(a("5dyF")),u=a("V5Fo"),c=a("/FXl"),f=r(a("PDtE")),m=a("AFBu"),d=a("nZpd"),p=function(e){var t=e.className,a=(0,o.default)(e,["className"]);return s.default.createElement("svg",(0,l.default)({className:(0,f.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a),s.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},b=function(){var e=(0,c.useMDXComponents)().SearchInput;return s.default.createElement("div",{className:"relative h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 px-4"},s.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,a=e.hasHomePage,r=s.default.useContext(d.MobileMenuContext),l=(0,n.default)(r,2),o=l[0],f=l[1],y=(0,c.useMDXComponents)(),g=y.Logo,h=y.NavBarWrapper,x=y.NavBar,v=y.NavBarItem,w=y.MobileMenuButton;return s.default.createElement(s.default.Fragment,null,s.default.createElement(h,null,s.default.createElement(x,null,a?s.default.createElement(i.default,{passHref:!0,href:"/"},s.default.createElement(g,null)):s.default.createElement(g,null),s.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:max-w-screen-md lg:mx-auto"},s.default.createElement(b,null),s.default.createElement(w,{open:o,setOpen:f,className:"lg:hidden"}),s.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return s.default.createElement(i.default,{passHref:!0,key:e,href:(0,m.formatPath)("/".concat(e))},s.default.createElement(v,null,(0,u.titleCase)(e)))})),s.default.createElement(v,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},s.default.createElement(p,null)))))),o&&s.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return s.default.createElement(i.default,{passHref:!0,key:e,href:(0,m.formatPath)("/".concat(e))},s.default.createElement(v,null,(0,u.titleCase)(e)))})),s.default.createElement(v,{href:"https://github.com/intuit/auto",target:"_blank"},s.default.createElement(p,{className:"mr-2"}),"Open on GitHub")))}},drzG:function(e,t,a){"use strict";var r=a("Fcif"),n=a("mXGw"),l=a.n(n),o=a("X7+o"),s=a("W0B4"),i=a.n(s);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var y=!1;try{y=!0}catch(S){}function g(e){return null===e?null:"object"===u(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function x(e){var t=e.forwardedRef,a=d(e,["forwardedRef"]),r=a.icon,n=a.mask,l=a.symbol,s=a.className,i=a.title,u=g(r),f=h("classes",[].concat(p(function(e){var t,a=e.spin,r=e.pulse,n=e.fixedWidth,l=e.inverse,o=e.border,s=e.listItem,i=e.flip,u=e.size,f=e.rotation,m=e.pull,d=(c(t={"fa-spin":a,"fa-pulse":r,"fa-fw":n,"fa-inverse":l,"fa-border":o,"fa-li":s,"fa-flip-horizontal":"horizontal"===i||"both"===i,"fa-flip-vertical":"vertical"===i||"both"===i},"fa-".concat(u),"undefined"!==typeof u&&null!==u),c(t,"fa-rotate-".concat(f),"undefined"!==typeof f&&null!==f&&0!==f),c(t,"fa-pull-".concat(m),"undefined"!==typeof m&&null!==m),c(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(a)),p(s.split(" ")))),b=h("transform","string"===typeof a.transform?o.c.transform(a.transform):a.transform),w=h("mask",g(n)),N=Object(o.b)(u,m({},f,{},b,{},w,{symbol:l,title:i}));if(!N)return function(){var e;!y&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var O=N.abstract,k={ref:t};return Object.keys(a).forEach((function(e){x.defaultProps.hasOwnProperty(e)||(k[e]=a[e])})),v(O[0],k)}x.displayName="FontAwesomeIcon",x.propTypes={border:i.a.bool,className:i.a.string,mask:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),fixedWidth:i.a.bool,inverse:i.a.bool,flip:i.a.oneOf(["horizontal","vertical","both"]),icon:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),listItem:i.a.bool,pull:i.a.oneOf(["right","left"]),pulse:i.a.bool,rotation:i.a.oneOf([0,90,180,270]),size:i.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i.a.bool,symbol:i.a.oneOfType([i.a.bool,i.a.string]),title:i.a.string,transform:i.a.oneOfType([i.a.string,i.a.object]),swapOpacity:i.a.bool},x.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var v=function e(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof a)return a;var n=(a.children||[]).map((function(a){return e(t,a)})),l=Object.keys(a.attributes||{}).reduce((function(e,t){var r=a.attributes[t];switch(t){case"class":e.attrs.className=r,delete a.attributes.class;break;case"style":e.attrs.style=r.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,r=t.indexOf(":"),n=b(t.slice(0,r)),l=t.slice(r+1).trim();return n.startsWith("webkit")?e[(a=n,a.charAt(0).toUpperCase()+a.slice(1))]=l:e[n]=l,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[b(t)]=r}return e}),{attrs:{}}),o=r.style,s=void 0===o?{}:o,i=d(r,["style"]);return l.attrs.style=m({},l.attrs.style,{},s),t.apply(void 0,[a.tag,m({},l.attrs,{},i)].concat(p(n)))}.bind(null,l.a.createElement),w=a("9fEB"),N=a.n(w),O=a("WOcO"),k=a("8fa9"),E=l.a.createElement,j=function(e){var t=e.title,a=e.description,r=e.icon;return E("div",{className:"mb-8 flex items-start last:mb-0"},E("div",{className:"rounded bg-yellow-500 dark:bg-yellow-600 p-3 text-yellow-100 mr-5"},E(x,{height:24,icon:r})),E("div",null,E("h3",{className:"text-xl font-semibold mb-2"},t),E("p",{className:"text-lg text-gray-700 dark:text-gray-400"},a)))},P=function(e){return E("a",Object(r.a)({className:"text-blue-600 font-semibold underline"},e))},M=function(e){var t=e.children;return E("span",{className:"text-primary-500 dark:text-primary-400 font-semibold"},t)},A=function(e){var t=e.style;return E("hr",{className:"mb-8 text-gray-300",style:t})},_=function(e){var t=e.number,a=e.label,n=e.image;return E("div",{className:"flex items-center flex-col lg:flex-row mb-8 w-fit lg:w-full"},E("div",{className:"flex items-center flex-1 pr-4 mb-6 lg:mb-0 self-start lg:self-auto"},E("div",{className:"bg-gray-700 rounded-full h-12 w-12 text-gray-100 flex items-center justify-center"},t),E("h3",{className:"pl-4 flex-1"},a)),E("img",Object(r.a)({className:"lg:flex-1 w-full lg:max-w-lg border border-gray-300 rounded-lg h-auto"},function(e){return"object"===typeof e?{src:e.src.src,srcset:e.src.srcSet}:{src:e}}(n))))},B=function(e){var t=e.children,a=e.color;return E("span",{className:"bg-".concat(a,"-600 text-white px-2 py-1 rounded font-semibold text-xs")},t)},F=function(e){var t=e.question,a=e.answer;return E("div",{className:"mb-10 last:mb-0"},E("h4",{className:"font-normal text-xl mb-3 text-gray-700 dark:text-gray-200"},t),E("p",{className:"text-grey-800 leading-relaxed"},a))};t.a=function(){return E("div",{className:"w-full"},E(N.a,null,E("title",null,"Auto")),E("main",{className:"w-full"},E("div",{className:"w-full"},E("div",{className:"bg-primary-500 dark:bg-primary-600 w-full flex justify-center flex-col items-center py-40 text-center"},E("img",{src:"monochrome-logo-large.png",alt:"auto",className:"w-1/4 mb-10 max-w-md"}),E("p",{className:"text-2xl text-primary-200 font-light mx-4"},"Streamline your release workflow and"," ",E("span",{className:"text-yellow-500 font-semibold"},"publish constantly!"))),E("div",{className:"mx-10 md:max-w-screen-xl lg:mx-auto"},E("div",{className:"mt-10 mb-16 lg:mb-24 text-center flex items-center flex-col"},E("h2",{className:"text-primary-900 text-2xl mb-8 font-semibold dark:text-primary-200"},"Adding automated releases shouldn't be hard or require changing your workflow"),E("p",{className:"max-w-2xl text-lg text-gray-700 dark:text-gray-400"},E(M,null,"auto")," makes automating releases for your project as simple adding a ",E(B,{color:"yellow"},"label")," to a pull request. If you're releasing all the time you can be"," ",E("span",{className:"text-red-500 dark:text-red-600 font-semibold"},"more confident")," ","in your releases. And your users might thank you too \ud83d\ude09")),E("div",{className:"flex justify-around items-center flex-col-reverse lg:flex-row mb-16 lg:mb-24"},E("div",{className:"flex-1 lg:px-12"},E(j,{title:"Keep Your Workflow",icon:O.d,description:E(l.a.Fragment,null,"Other tools require you to change how any contributor commits to your project. With ",E(M,null,"auto "),"leave that baggage behind!")}),E(j,{title:"Beautiful Changelogs",icon:O.b,description:"Link to PRs and Jira stories, include authors, monorepo aware, customizable labels section, additional release notes, and even more!"}),E(j,{title:"Atomic Functions",icon:O.a,description:"Each command does one thing and they do it well. Easily use them to fit any build process."}),E(j,{title:"Blazingly Fast Releases",icon:O.c,description:"Since all you need to worry about are labels, you can work at an incredibly fast pace! This speed to commit also helps with new contributors."})),E("div",{className:"flex-1 px-12 mb-20 lg:mb-0"},E("img",{src:"changelog-example.png",alt:"Changelog example",className:"border border-grey-600 rounded-lg p-4 shadow-md",style:{maxHeight:500}})))),E("div",{className:"max-w-4xl mx-10 lg:mx-auto pt-12 pb-16 lg:pb-24"},E(A,{style:{height:1}}),E("h2",{className:"text-center text-2xl font-semibold mt-12 mb-16 lg:mb-20"},"What does the workflow look like? How easy is it really?"),E(_,{number:1,label:"Open a Pull Request",image:"open-pr.png"}),E(_,{number:2,image:"add-label.png",label:E(l.a.Fragment,null,"Add a ",E(B,{color:"blue"},"label"))}),E(_,{number:3,label:"Hit that merge button",image:"merge.png"}),E(_,{number:4,image:"release-example.png",label:"Wait for your continuous integration to make the release for you!"})),E("div",{className:"bg-grey-500"},E("div",{className:"max-w-4xl mx-10 lg:mx-auto pt-12 pb-24"},E("h2",{className:"font-extrabold text-4xl text-center mb-6 text-gray-800 dark:text-gray-300"},"Frequently asked questions"),E(A,{style:{borderTopWidth:2,height:2}}),E(F,{question:E(l.a.Fragment,null,"Do you really release"," ",E("span",{className:"font-extrabold italic"}," every ")," pull request?!"),answer:E(l.a.Fragment,null,E(P,{href:"https://github.com/intuit/auto/releases"},"Yup!")," ","But if you don't want to do that it's up to you. The tools"," ",E(M,null,"auto")," ships with can be used to"," ",E("span",{className:"font-semibold text-red-500 dark:text-red-600"},"fit any workflow"),"! You can also use ",E(B,{color:"primary"},"skip-release")," ","labels or configure ",E(M,null,"auto")," to only release with a ",E(B,{color:"blue"},"release")," label.")}),E(A,{style:{height:1}}),E(F,{question:E(l.a.Fragment,null,"Is there a way to hook into ",E(M,null,"auto")," and customize my release process?"),answer:E(l.a.Fragment,null,"Many of ",E(M,null,"auto"),"'s features are"," ",E(P,{href:"https://intuit.github.io/auto/docs/configuration/plugins"},"built into plugins"),". You can also use this plugin system to do"," ",E("span",{className:"font-semibold text-red-500 dark:text-red-600"},"almost anything")," ","during your release!")}),E(A,{style:{height:1}}),E(F,{question:E(l.a.Fragment,null,"Does ",E(M,null,"auto")," support any other types of releases?"),answer:E(l.a.Fragment,null,E("p",{className:"mb-3"},"Yes! ",E(M,null,"auto")," has commands for any situation!"),E("p",{className:"mb-2"},"Want a test version? Try a"," ",E(P,{href:"https://intuit.github.io/auto/docs/generated/canary"},"canary")),E("p",{className:"mb-2"},"Want a prerelease? Try creating a pre-release branch and using"," ",E(P,{href:"https://intuit.github.io/auto/docs/generated/next"},"next")),E("p",{className:"mb-2"},"Need to patch an old major release?"," ",E(M,null,"auto")," can automatically make branches for"," ",E(P,{href:"https://intuit.github.io/auto/docs/generated/shipit#managing-old-major-versions"},"old major versions"),"!"),E("p",null,"Or if you don't want to worry about what command to you need, just use"," ",E(P,{href:"https://intuit.github.io/auto/docs/generated/shipit"},"shipit"),"! This command determines what type of release to make based on the context it's run in."))})))),E("div",{className:"bg-primary-500 dark:bg-primary-600 text-white text-center"},E("div",{className:"max-w-4xl mx-10 lg:mx-auto pt-12 pb-16 flex flex-col items-center"},E("h2",{className:"text-xl mb-8"},"Stop worrying about your release and hit that merge button!"),E(k.a,null)))))}},nZpd:function(e,t,a){"use strict";var r=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var n=r(a("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=n},u4QB:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("xEgi")}])},xEgi:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var r=a("Fcif"),n=a("dV/x"),l=a("mXGw"),o=a.n(l),s=a("/FXl"),i=a("6f/q"),u=a.n(i),c=a("drzG");for(var f in i)["default","default"].indexOf(f)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(f);o.a.createElement;var m={},d=u()({layout:"nav-bar",date:null,author:"",email:"",__resourcePath:"index.mdx",__scans:{}});function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.mdx)(d,Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)(c.a,{mdxType:"Home"}))}p.isMDXComponent=!0}},[["u4QB",0,1,9,2,3,7]]]);