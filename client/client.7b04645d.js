function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i;function c(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let f,h,p=!1;function m(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function g(t,e){if(p){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,a=(s>0&&e[n[s]].claim_order<=o?s+1:m(1,s,(t=>e[n[t]].claim_order),o))-1;r[t]=n[a]+1;const i=a+1;n[i]=t,s=Math.max(i,s)}const o=[],a=[];let i=e.length-1;for(let t=n[s]+1;0!=t;t=r[t-1]){for(o.push(e[t-1]);i>=t;i--)a.push(e[i]);i--}for(;i>=0;i--)a.push(e[i]);o.reverse(),a.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<a.length;e++){for(;n<o.length&&a[e].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;t.insertBefore(a[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function v(t,e,n){p&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function _(t){t.parentNode&&t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function x(){return E(" ")}function S(){return E("")}function T(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function A(t){return function(e){return e.preventDefault(),t.call(this,e)}}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function P(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:N(t,r,e[r])}function I(t){return Array.from(t.childNodes)}function R(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,r,s=!1){R(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function z(t,e,n,r){return L(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const s=t.attributes[r];n[s.name]||e.push(s.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r(e)))}function k(t,e,n){return z(t,e,n,y)}function O(t,e,n){return z(t,e,n,w)}function C(t,e){return L(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function H(t){return C(t," ")}function U(t,e,n){for(let r=n;r<t.length;r+=1){const n=t[r];if(8===n.nodeType&&n.textContent.trim()===e)return r}return t.length}function M(t,e){const n=U(t,"HTML_TAG_START",0),r=U(t,"HTML_TAG_END",n);if(n===r)return new V(void 0,e);R(t);const s=t.splice(n,r-n+1);_(s[0]),_(s[s.length-1]);const o=s.slice(1,s.length-1);for(const e of o)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new V(o,e)}function D(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function j(t,e){t.value=null==e?"":e}function G(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function B(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function q(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=y("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=B();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=T(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=T(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(r||s&&n.contentWindow)&&s(),_(n)}}function J(t,e){const n=[];let r=0;for(const s of e.childNodes)if(8===s.nodeType){const e=s.textContent.trim();e===`HEAD_${t}_END`?(r-=1,n.push(s)):e===`HEAD_${t}_START`&&(r+=1,n.push(s))}else r>0&&n.push(s);return n}class K{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=w(e.nodeName):this.e=y(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(_)}}class V extends K{constructor(t,e=!1){super(e),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}}function W(t,e){return new t(e)}function F(t){h=t}function Y(){if(!h)throw new Error("Function called outside component initialization");return h}function Q(t){Y().$$.on_mount.push(t)}function X(t){Y().$$.after_update.push(t)}function Z(t){Y().$$.on_destroy.push(t)}const tt=[],et=[],nt=[],rt=[],st=Promise.resolve();let ot=!1;function at(t){nt.push(t)}const it=new Set;let ct=0;function lt(){const t=h;do{for(;ct<tt.length;){const t=tt[ct];ct++,F(t),ut(t.$$)}for(F(null),tt.length=0,ct=0;et.length;)et.pop()();for(let t=0;t<nt.length;t+=1){const e=nt[t];it.has(e)||(it.add(e),e())}nt.length=0}while(tt.length);for(;rt.length;)rt.pop()();ot=!1,it.clear(),F(t)}function ut(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(at)}}const dt=new Set;let ft;function ht(){ft={r:0,c:[],p:ft}}function pt(){ft.r||s(ft.c),ft=ft.p}function mt(t,e){t&&t.i&&(dt.delete(t),t.i(e))}function gt(t,e,n,r){if(t&&t.o){if(dt.has(t))return;dt.add(t),ft.c.push((()=>{dt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function bt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(r[t]=1);for(const t in i)s[t]||(n[t]=i[t],s[t]=1);t[o]=i}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function vt(t){return"object"==typeof t&&null!==t?t:{}}function _t(t){t&&t.c()}function $t(t,e){t&&t.l(e)}function yt(t,e,r,a){const{fragment:i,after_update:c}=t.$$;i&&i.m(e,r),a||at((()=>{const e=t.$$.on_mount.map(n).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...e):s(e),t.$$.on_mount=[]})),c.forEach(at)}function wt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){-1===t.$$.dirty[0]&&(tt.push(t),ot||(ot=!0,st.then(lt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xt(e,n,o,a,i,c,l,u=[-1]){const d=h;F(e);const f=e.$$={fragment:null,ctx:[],props:c,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let m=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),m&&Et(e,t)),n})):[],f.update(),m=!0,s(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){p=!0;const t=I(n.target);f.fragment&&f.fragment.l(t),t.forEach(_)}else f.fragment&&f.fragment.c();n.intro&&mt(e.$$.fragment),yt(e,n.target,n.anchor,n.customElement),p=!1,lt()}F(d)}class St{$destroy(){wt(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const t=r.indexOf(n);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Tt=[];function At(e,n=t){let r;const s=new Set;function o(t){if(a(e,t)&&(e=t,r)){const t=!Tt.length;for(const t of s)t[1](),Tt.push(t,e);if(t){for(let t=0;t<Tt.length;t+=2)Tt[t][0](Tt[t+1]);Tt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return s.add(c),1===s.size&&(r=n(o)||t),a(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const Nt={};var Pt={owner:"Androz2091",repo:"status",sites:[{name:"Blog",url:"https://blog.androz2091.fr"},{name:"DDPE",url:"https://ddpe.androz2091.fr"},{name:"Diswho",url:"https://diswho.androz2091.fr"},{name:"Umami Analytics",url:"https://analytics.androz2091.fr"},{name:"Plex",url:"https://plex.androz2091.fr/web/index.html"},{name:"Sabnzbd",url:"https://sabnzbd.androz2091.fr"},{name:"Overseerr",url:"https://overseerr.androz2091.fr"},{name:"Sonarr",url:"https://sonarr.androz2091.fr"},{name:"Radarr",url:"https://radarr.androz2091.fr"},{name:"Bazarr",url:"https://bazarr.androz2091.fr"},{name:"Jackett",url:"https://bazarr.androz2091.fr"},{name:"Portainer",url:"https://portainer.androz2091.fr"},{name:"Cloud",url:"https://cloud.androz2091.fr"},{name:"Photos",url:"https://photos.androz2091.fr"},{name:"Haste",url:"https://haste.androz2091.fr"},{name:"VaultWarden",url:"https://vault.androz2091.fr"},{name:"QBittorrent",url:"https://qbt.androz2091.fr"},{name:"Instaddict",url:"https://instaddict.androz2091.fr"},{name:"Online Love Calc",url:"https://love-calc.androz2091.fr"},{name:"Slash Commands GUI",url:"https://slash-commands-gui.androz2091.fr"},{name:"Twittycord",url:"https://twittycord.com"},{name:"ManageInvite",url:"https://manage-invite.xyz"},{name:"ManageInvite API",url:"https://api.manage-invite.xyz"},{name:"(stale) ManageInvite API",url:"https://dash.manage-invite.xyz"},{name:"Tagger",url:"https://timetagger.androz2091.fr"}],"status-website":{cname:"ismyserverworki.ng",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Upptime",introTitle:"**Simon** - aka Androz2091 - **services status page**",introMessage:"This page shows the status of the services and projects hosted on my servers.",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://ismyserverworki.ng",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function It(t,e,n){const r=t.slice();return r[1]=e[n],r}function Rt(e){let n,r,s,o=Pt["status-website"]&&!Pt["status-website"].hideNavLogo&&function(e){let n,r;return{c(){n=y("img"),this.h()},l(t){n=k(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,r=Pt["status-website"].logoUrl)||N(n,"src",r),N(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}(),a=Pt["status-website"]&&!Pt["status-website"].hideNavTitle&&function(e){let n,r,s=Pt["status-website"].name+"";return{c(){n=y("div"),r=E(s)},l(t){n=k(t,"DIV",{});var e=I(n);r=C(e,s),e.forEach(_)},m(t,e){v(t,n,e),g(n,r)},p:t,d(t){t&&_(n)}}}();return{c(){n=y("div"),r=y("a"),o&&o.c(),s=x(),a&&a.c(),this.h()},l(t){n=k(t,"DIV",{});var e=I(n);r=k(e,"A",{href:!0,class:!0});var i=I(r);o&&o.l(i),s=H(i),a&&a.l(i),i.forEach(_),e.forEach(_),this.h()},h(){N(r,"href",Pt["status-website"].logoHref||Pt.path),N(r,"class","logo svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),o&&o.m(r,null),g(r,s),a&&a.m(r,null)},p(t,e){Pt["status-website"]&&!Pt["status-website"].hideNavLogo&&o.p(t,e),Pt["status-website"]&&!Pt["status-website"].hideNavTitle&&a.p(t,e)},d(t){t&&_(n),o&&o.d(),a&&a.d()}}}function Lt(t){let e,n,r,s,o,a=t[1].title+"";return{c(){e=y("li"),n=y("a"),r=E(a),o=x(),this.h()},l(t){e=k(t,"LI",{});var s=I(e);n=k(s,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var i=I(n);r=C(i,a),i.forEach(_),o=H(s),s.forEach(_),this.h()},h(){N(n,"aria-current",s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),N(n,"href",t[1].href.replace("$OWNER",Pt.owner).replace("$REPO",Pt.repo)),N(n,"target",t[1].target||"_self"),N(n,"class","svelte-a08hsz")},m(t,s){v(t,e,s),g(e,n),g(n,r),g(e,o)},p(t,e){1&e&&s!==(s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&N(n,"aria-current",s)},d(t){t&&_(e)}}}function zt(e){let n,r,s,o,a,i=Pt["status-website"]&&Pt["status-website"].logoUrl&&Rt(),c=Pt["status-website"]&&Pt["status-website"].navbar&&function(t){let e,n=Pt["status-website"].navbar,r=[];for(let e=0;e<n.length;e+=1)r[e]=Lt(It(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=S()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(1&s){let o;for(n=Pt["status-website"].navbar,o=0;o<n.length;o+=1){const a=It(t,n,o);r[o]?r[o].p(a,s):(r[o]=Lt(a),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){$(r,t),t&&_(e)}}}(e),l=Pt["status-website"]&&Pt["status-website"].navbarGitHub&&!Pt["status-website"].navbar&&function(e){let n,r,s,o=Pt.i18n.navGitHub+"";return{c(){n=y("li"),r=y("a"),s=E(o),this.h()},l(t){n=k(t,"LI",{});var e=I(n);r=k(e,"A",{href:!0,class:!0});var a=I(r);s=C(a,o),a.forEach(_),e.forEach(_),this.h()},h(){N(r,"href",`https://github.com/${Pt.owner}/${Pt.repo}`),N(r,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),g(r,s)},p:t,d(t){t&&_(n)}}}();return{c(){n=y("nav"),r=y("div"),i&&i.c(),s=x(),o=y("ul"),c&&c.c(),a=x(),l&&l.c(),this.h()},l(t){n=k(t,"NAV",{class:!0});var e=I(n);r=k(e,"DIV",{class:!0});var u=I(r);i&&i.l(u),s=H(u),o=k(u,"UL",{class:!0});var d=I(o);c&&c.l(d),a=H(d),l&&l.l(d),d.forEach(_),u.forEach(_),e.forEach(_),this.h()},h(){N(o,"class","svelte-a08hsz"),N(r,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),i&&i.m(r,null),g(r,s),g(r,o),c&&c.m(o,null),g(o,a),l&&l.m(o,null)},p(t,[e]){Pt["status-website"]&&Pt["status-website"].logoUrl&&i.p(t,e),Pt["status-website"]&&Pt["status-website"].navbar&&c.p(t,e),Pt["status-website"]&&Pt["status-website"].navbarGitHub&&!Pt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&_(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function kt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class Ot extends St{constructor(t){super(),xt(this,t,kt,zt,a,{segment:0})}}var Ct={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ht(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ut(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Mt(t,e){var n,r,s,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},d=0;function f(t){var e=Ct[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=f(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=i.exec(t);)r=t.substring(d,s.index),d=i.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((a=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Ht(Ut(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=s[6])?(a.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Mt(Ht(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):s[8]?n='<img src="'+Ut(s[8])+'" alt="'+Ut(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Ut(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(a="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Mt(s[12]||s[15],u)+"</"+a+">":s[16]?n="<code>"+Ut(s[16])+"</code>":(s[17]||s[1])&&(n=f(s[17]||"--"))),l+=r,l+=n;return(l+t.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Dt(t,e,n){const r=t.slice();return r[3]=e[n],r}function jt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Gt(t,e,n){const r=t.slice();return r[8]=e[n],r}function Bt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${Pt.path}/themes/${(Pt["status-website"]||{}).theme||"light"}.css`)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function qt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(Pt["status-website"]||{}).themeUrl)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Jt(e){let n,r;return{c(){n=y("script"),this.h()},l(t){n=k(t,"SCRIPT",{src:!0}),I(n).forEach(_),this.h()},h(){c(n.src,r=e[8].src)||N(n,"src",r),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Kt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",e[3].rel),N(n,"href",e[3].href),N(n,"media",e[3].media)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Vt(e){let n;return{c(){n=y("meta"),this.h()},l(t){n=k(t,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",e[3].name),N(n,"content",e[3].content)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Wt(e){let n,r,s,o,a,i,c,u,d,f,h,p,m,b,w,E,T,A,P=Mt(Pt.i18n.footer.replace(/\$REPO/,`https://github.com/${Pt.owner}/${Pt.repo}`))+"",R=(Pt["status-website"]||{}).customHeadHtml&&function(e){let n,r,s=(Pt["status-website"]||{}).customHeadHtml+"";return{c(){n=new V(!1),r=S(),this.h()},l(t){n=M(t,!1),r=S(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&_(r),t&&n.d()}}}();let L=((Pt["status-website"]||{}).themeUrl?qt:Bt)(e),z=(Pt["status-website"]||{}).scripts&&function(t){let e,n=(Pt["status-website"]||{}).scripts,r=[];for(let e=0;e<n.length;e+=1)r[e]=Jt(Gt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=S()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(Pt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=Gt(t,n,o);r[o]?r[o].p(a,s):(r[o]=Jt(a),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){$(r,t),t&&_(e)}}}(e),O=(Pt["status-website"]||{}).links&&function(t){let e,n=(Pt["status-website"]||{}).links,r=[];for(let e=0;e<n.length;e+=1)r[e]=Kt(jt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=S()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(Pt["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=jt(t,n,o);r[o]?r[o].p(a,s):(r[o]=Kt(a),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){$(r,t),t&&_(e)}}}(e),C=(Pt["status-website"]||{}).metaTags&&function(t){let e,n=(Pt["status-website"]||{}).metaTags,r=[];for(let e=0;e<n.length;e+=1)r[e]=Vt(Dt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=S()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(Pt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Dt(t,n,o);r[o]?r[o].p(a,s):(r[o]=Vt(a),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){$(r,t),t&&_(e)}}}(e),U=Pt["status-website"].css&&function(e){let n,r,s=`<style>${Pt["status-website"].css}</style>`;return{c(){n=new V(!1),r=S(),this.h()},l(t){n=M(t,!1),r=S(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&_(r),t&&n.d()}}}(),D=Pt["status-website"].js&&function(e){let n,r,s=`<script>${Pt["status-website"].js}<\/script>`;return{c(){n=new V(!1),r=S(),this.h()},l(t){n=M(t,!1),r=S(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&_(r),t&&n.d()}}}(),j=(Pt["status-website"]||{}).customBodyHtml&&function(e){let n,r,s=(Pt["status-website"]||{}).customBodyHtml+"";return{c(){n=new V(!1),r=S(),this.h()},l(t){n=M(t,!1),r=S(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&_(r),t&&n.d()}}}();p=new Ot({props:{segment:e[0]}});const G=e[2].default,B=function(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}(G,e,e[1],null);return{c(){R&&R.c(),n=S(),L.c(),r=y("link"),s=y("link"),o=y("link"),z&&z.c(),a=S(),O&&O.c(),i=S(),C&&C.c(),c=S(),U&&U.c(),u=S(),D&&D.c(),d=S(),f=x(),j&&j.c(),h=x(),_t(p.$$.fragment),m=x(),b=y("main"),B&&B.c(),w=x(),E=y("footer"),T=y("p"),this.h()},l(t){const e=J("svelte-fmspuk",document.head);R&&R.l(e),n=S(),L.l(e),r=k(e,"LINK",{rel:!0,href:!0}),s=k(e,"LINK",{rel:!0,type:!0,href:!0}),o=k(e,"LINK",{rel:!0,type:!0,href:!0}),z&&z.l(e),a=S(),O&&O.l(e),i=S(),C&&C.l(e),c=S(),U&&U.l(e),u=S(),D&&D.l(e),d=S(),e.forEach(_),f=H(t),j&&j.l(t),h=H(t),$t(p.$$.fragment,t),m=H(t),b=k(t,"MAIN",{class:!0});var l=I(b);B&&B.l(l),l.forEach(_),w=H(t),E=k(t,"FOOTER",{class:!0});var g=I(E);T=k(g,"P",{}),I(T).forEach(_),g.forEach(_),this.h()},h(){N(r,"rel","stylesheet"),N(r,"href",`${Pt.path}/global.css`),N(s,"rel","icon"),N(s,"type","image/svg"),N(s,"href",(Pt["status-website"]||{}).faviconSvg||(Pt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(Pt["status-website"]||{}).favicon||"/logo-192.png"),N(b,"class","container"),N(E,"class","svelte-jbr799")},m(t,e){R&&R.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),z&&z.m(document.head,null),g(document.head,a),O&&O.m(document.head,null),g(document.head,i),C&&C.m(document.head,null),g(document.head,c),U&&U.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,d),v(t,f,e),j&&j.m(t,e),v(t,h,e),yt(p,t,e),v(t,m,e),v(t,b,e),B&&B.m(b,null),v(t,w,e),v(t,E,e),g(E,T),T.innerHTML=P,A=!0},p(t,[e]){(Pt["status-website"]||{}).customHeadHtml&&R.p(t,e),L.p(t,e),(Pt["status-website"]||{}).scripts&&z.p(t,e),(Pt["status-website"]||{}).links&&O.p(t,e),(Pt["status-website"]||{}).metaTags&&C.p(t,e),Pt["status-website"].css&&U.p(t,e),Pt["status-website"].js&&D.p(t,e),(Pt["status-website"]||{}).customBodyHtml&&j.p(t,e);const n={};1&e&&(n.segment=t[0]),p.$set(n),B&&B.p&&(!A||2&e)&&function(t,e,n,r,s,o){if(s){const a=l(e,n,r,o);t.p(a,s)}}(B,G,t,t[1],A?function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(G,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){A||(mt(p.$$.fragment,t),mt(B,t),A=!0)},o(t){gt(p.$$.fragment,t),gt(B,t),A=!1},d(t){R&&R.d(t),_(n),L.d(t),_(r),_(s),_(o),z&&z.d(t),_(a),O&&O.d(t),_(i),C&&C.d(t),_(c),U&&U.d(t),_(u),D&&D.d(t),_(d),t&&_(f),j&&j.d(t),t&&_(h),wt(p,t),t&&_(m),t&&_(b),B&&B.d(t),t&&_(w),t&&_(E)}}}function Ft(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class Yt extends St{constructor(t){super(),xt(this,t,Ft,Wt,a,{segment:0})}}function Qt(t){let e,n,r=t[1].stack+"";return{c(){e=y("pre"),n=E(r)},l(t){e=k(t,"PRE",{});var s=I(e);n=C(s,r),s.forEach(_)},m(t,r){v(t,e,r),g(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&D(n,r)},d(t){t&&_(e)}}}function Xt(e){let n,r,s,o,a,i,c,l,u,d=e[1].message+"";document.title=n=e[0];let f=e[2]&&e[1].stack&&Qt(e);return{c(){r=x(),s=y("h1"),o=E(e[0]),a=x(),i=y("p"),c=E(d),l=x(),f&&f.c(),u=S(),this.h()},l(t){J("svelte-1moakz",document.head).forEach(_),r=H(t),s=k(t,"H1",{class:!0});var n=I(s);o=C(n,e[0]),n.forEach(_),a=H(t),i=k(t,"P",{class:!0});var h=I(i);c=C(h,d),h.forEach(_),l=H(t),f&&f.l(t),u=S(),this.h()},h(){N(s,"class","svelte-17w3omn"),N(i,"class","svelte-17w3omn")},m(t,e){v(t,r,e),v(t,s,e),g(s,o),v(t,a,e),v(t,i,e),g(i,c),v(t,l,e),f&&f.m(t,e),v(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&D(o,t[0]),2&e&&d!==(d=t[1].message+"")&&D(c,d),t[2]&&t[1].stack?f?f.p(t,e):(f=Qt(t),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&_(r),t&&_(s),t&&_(a),t&&_(i),t&&_(l),f&&f.d(t),t&&_(u)}}}function Zt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class te extends St{constructor(t){super(),xt(this,t,Zt,Xt,a,{status:0,error:1})}}function ee(t){let n,r,s;const o=[t[4].props];var a=t[4].component;function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=W(a,i())),{c(){n&&_t(n.$$.fragment),r=S()},l(t){n&&$t(n.$$.fragment,t),r=S()},m(t,e){n&&yt(n,t,e),v(t,r,e),s=!0},p(t,e){const s=16&e?bt(o,[vt(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){ht();const t=n;gt(t.$$.fragment,1,0,(()=>{wt(t,1)})),pt()}a?(n=W(a,i()),_t(n.$$.fragment),mt(n.$$.fragment,1),yt(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(t){s||(n&&mt(n.$$.fragment,t),s=!0)},o(t){n&&gt(n.$$.fragment,t),s=!1},d(t){t&&_(r),n&&wt(n,t)}}}function ne(t){let e,n;return e=new te({props:{error:t[0],status:t[1]}}),{c(){_t(e.$$.fragment)},l(t){$t(e.$$.fragment,t)},m(t,r){yt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(mt(e.$$.fragment,t),n=!0)},o(t){gt(e.$$.fragment,t),n=!1},d(t){wt(e,t)}}}function re(t){let e,n,r,s;const o=[ne,ee],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),r=S()},l(t){n.l(t),r=S()},m(t,n){a[e].m(t,n),v(t,r,n),s=!0},p(t,s){let c=e;e=i(t),e===c?a[e].p(t,s):(ht(),gt(a[c],1,1,(()=>{a[c]=null})),pt(),n=a[e],n?n.p(t,s):(n=a[e]=o[e](t),n.c()),mt(n,1),n.m(r.parentNode,r))},i(t){s||(mt(n),s=!0)},o(t){gt(n),s=!1},d(t){a[e].d(t),t&&_(r)}}}function se(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[re]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new Yt({props:o}),{c(){_t(n.$$.fragment)},l(t){$t(n.$$.fragment,t)},m(t,e){yt(n,t,e),r=!0},p(t,[e]){const r=12&e?bt(s,[4&e&&{segment:t[2][0]},8&e&&vt(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(mt(n.$$.fragment,t),r=!0)},o(t){gt(n.$$.fragment,t),r=!1},d(t){wt(n,t)}}}function oe(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,d;return X(l),u=Nt,d=r,Y().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,a,i,c,r,l]}class ae extends St{constructor(t){super(),xt(this,t,oe,se,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ie=[],ce=[{js:()=>Promise.all([import("./index.63305a9e.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.06bf08e5.js"),__inject_styles(["client-0275e36e.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.cbde0c89.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.58779546.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.070e33f8.js"),__inject_styles(["client-0275e36e.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],le=(ue=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ue(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ue(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ue;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function de(t,e,n,r){return new(n||(n=Promise))((function(s,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function i(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}c((r=r.apply(t,e||[])).next())}))}function fe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let he,pe=1;const me="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ge={};let be,ve;function _e(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function $e(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(be))return null;let e=t.pathname.slice(be.length);if(""===e&&(e="/"),!ie.some((t=>t.test(e))))for(let n=0;n<le.length;n+=1){const r=le[n],s=r.pattern.exec(e);if(s){const n=_e(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:i}}}}function ye(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=fe(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=$e(s);if(o){xe(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),me.pushState({id:he},"",s.href)}}function we(){return{x:pageXOffset,y:pageYOffset}}function Ee(t){if(ge[he]=we(),t.state){const e=$e(new URL(location.href));e?xe(e,t.state.id):location.href=location.href}else!function(t){pe=t}(pe+1),function(t){he=t}(pe),me.replaceState({id:he},"",location.href)}function xe(t,e,n,r){return de(this,void 0,void 0,(function*(){const s=!!e;if(s)he=e;else{const t=we();ge[he]=t,he=e=++pe,ge[he]=n?t:{x:0,y:0}}if(yield ve(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=ge[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),ge[he]=n,n&&(s||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Se(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Te,Ae=null;function Ne(t){const e=fe(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=$e(new URL(t,Se(document)));if(e)Ae&&t===Ae.href||(Ae={href:t,promise:Je(e)}),Ae.promise}(e.href)}function Pe(t){clearTimeout(Te),Te=setTimeout((()=>{Ne(t)}),20)}function Ie(t,e={noscroll:!1,replaceState:!1}){const n=$e(new URL(t,Se(document)));if(n){const r=xe(n,null,e.noscroll);return me[e.replaceState?"replaceState":"pushState"]({id:he},"",t),r}return location.href=t,new Promise((()=>{}))}const Re="undefined"!=typeof __SAPPER__&&__SAPPER__;let Le,ze,ke,Oe=!1,Ce=[],He="{}";const Ue={page:function(t){const e=At(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:At(null),session:At(Re&&Re.session)};let Me,De,je;function Ge(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Be(t){return de(this,void 0,void 0,(function*(){Le&&Ue.preloading.set(!0);const e=function(t){return Ae&&Ae.href===t.href?Ae.promise:Je(t)}(t),n=ze={},r=yield e,{redirect:s}=r;if(n===ze)if(s)yield Ie(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield qe(n,e,Ge(e,t.page))}}))}function qe(t,e,n){return de(this,void 0,void 0,(function*(){Ue.page.set(n),Ue.preloading.set(!1),Le?Le.$set(e):(e.stores={page:{subscribe:Ue.page.subscribe},preloading:{subscribe:Ue.preloading.subscribe},session:Ue.session},e.level0={props:yield ke},e.notify=Ue.page.notify,Le=new ae({target:je,props:e,hydrate:!0})),Ce=t,He=JSON.stringify(n.query),Oe=!0,De=!1}))}function Je(t){return de(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!ke){const t=()=>({});ke=Re.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Me)}let i,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>de(this,void 0,void 0,(function*(){const d=r[i];if(function(t,e,n,r){if(r!==He)return!0;const s=Ce[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,d,l,s)&&(u=!0),o.segments[c]=r[i+1],!e)return{segment:d};const f=c++;let h;if(De||u||!Ce[i]||Ce[i].part!==e.i){u=!1;const{default:r,preload:s}=yield ce[e.i].js();let o;o=Oe||!Re.preloaded[i+1]?s?yield s.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Me):{}:Re.preloaded[i+1],h={component:r,props:o,segment:d,match:l,part:e.i}}else h=Ce[i];return o[`level${f}`]=h})))))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:s,props:o,branch:i}}))}var Ke,Ve,We;Ue.session.subscribe((t=>de(void 0,void 0,void 0,(function*(){if(Me=t,!Oe)return;De=!0;const e=$e(new URL(location.href)),n=ze={},{redirect:r,props:s,branch:o}=yield Je(e);n===ze&&(r?yield Ie(r.location,{replaceState:!0}):yield qe(o,s,Ge(s,e.page)))})))),Ke={target:document.querySelector("#sapper")},Ve=Ke.target,je=Ve,We=Re.baseUrl,be=We,ve=Be,"scrollRestoration"in me&&(me.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{me.scrollRestoration="auto"})),addEventListener("load",(()=>{me.scrollRestoration="manual"})),addEventListener("click",ye),addEventListener("popstate",Ee),addEventListener("touchstart",Ne),addEventListener("mousemove",Pe),Re.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:a}=Re;ke||(ke=s&&s[0]);const i={error:a,status:o,session:r,level0:{props:ke},level1:{props:{status:o,error:a},component:te},segments:s},c=_e(n);qe([],i,{host:t,path:e,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;me.replaceState({id:pe},"",e);const n=$e(new URL(location.href));if(n)return xe(n,pe,!0,t)}));export{D as A,T as B,s as C,et as D,M as E,c as F,d as G,V as H,G as I,J,Mt as K,w as L,O as M,Ie as N,j as O,A as P,e as Q,P as R,St as S,bt as T,X as U,Z as V,u as W,vt as X,at as Y,q as Z,x as a,k as b,H as c,I as d,y as e,_ as f,N as g,v as h,xt as i,ht as j,pt as k,mt as l,E as m,C as n,Q as o,g as p,t as q,Pt as r,a as s,gt as t,S as u,$ as v,_t as w,$t as x,yt as y,wt as z};

import __inject_styles from './inject_styles.803b7e80.js';