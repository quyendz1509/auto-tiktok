(()=>{function t(){let t=document.querySelector("#dem-time");t.innerHTML="Hoàn Thành !",setTimeout((()=>{t.remove()}),5e3)}function e(i,l,r){if(!o)return;let c,u,d,s=r,a=document.querySelectorAll("div.tiktok-10gdph9-DivContentContainer"),m=-1;for(let t=0;t<a.length;t++){let e=a[t],n=e.querySelector("button.tiktok-1bieif7-Button-StyledFollowButton"),o=e.querySelector("button.tiktok-1ok4pbl-ButtonActionItem");if(null!=n&&null!=o){d=n,m=t;break}}if(-1!==m)if(n++,n<s){let t=a[m];t.scrollIntoView({behavior:"smooth",block:"start"}),u=t.querySelector("button.tiktok-1bieif7-Button-StyledFollowButton"),c=t.querySelector("button.tiktok-1ok4pbl-ButtonActionItem");let d=1e3,f=Math.round(l/2),p=Math.floor(Math.random()*(f-d+1))+d;setTimeout((()=>{c.click()}),p),setTimeout((()=>{u.click()}),i),function(t,e){let n=document.createElement("div"),i=document.querySelector("#dem-time"),l=`\n  <div id="dem-time" style="position: fixed;\n  background: #e91e63c2;\n  bottom: 2%;\n  z-index: 9999;\n  left: 50%;\n  transform: translate(-50%);\n  padding: 10px 15px;\n  color: white;\n  border-radius: 12px;\n  font-size: 32px;\n  font-weight: bolder;\n\n  ">\n  <span>${t}</span>\n  <span id="countdown-fuk" class="text-4xl font-bold"></span>\n  <span class="text-gray-500">s</span>\n  </div>\n  `;i&&i.remove(),n.innerHTML=l,document.body.appendChild(n);let r=e/1e3;console.log(r),function(t,e){var n=document.querySelector("#countdown-fuk");n.innerText=t;var i=setInterval((function(){o&&(--t<0?(clearInterval(i),n.innerText="0"):(console.log(t),n.innerText=t))}),1e3)}(r)}(`Đã thực hiện: ${n} - còn lại: ${s-n} - Chờ: `,l),setTimeout((()=>{e(i,l,r)}),l)}else t();else window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),setTimeout(e(i,l,r),l)}let n=0,o=!0;chrome.runtime.onMessage.addListener(((n,i,l)=>{var r,c,u;"runscript"===n.action?(r=n.da,c=n.dl,u=n.sl,e(r,c,u)):"stopscript"===n.action&&(o=!1,t())}))})();