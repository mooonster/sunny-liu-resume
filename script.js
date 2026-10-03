'use strict';
const caseData={
 "commerce": {
  "index": "01",
  "sector": "E-COMMERCE GROWTH",
  "unit": "電商年營收",
  "title": "從平台上線，走向事業經營",
  "description": "主導寶島眼鏡 EYESmart 電商從零到一的建置與營運，將消費者需求、產品規劃與事業成長放在同一張藍圖。",
  "steps": [
   [
    "需求與規格",
    "從需求調研、產品規格書到正式上線，協同設計、開發與營運團隊，定義流程與驗收標準。"
   ],
   [
    "營運與成長",
    "整合金流與物流，結合損益管理與投資報酬評估，帶領團隊將電商年營收由 50 萬推進至破億規模。"
   ]
  ],
  "tags": [
   "PRD 需求規格",
   "UAT 驗收",
   "P&L / ROI"
  ],
  "value": "50萬<span class=\"mi metric-direction\" aria-hidden=\"true\">arrow_forward</span><span class=\"sr-only\">成長至</span>1億+"
 },
 "omo": {
  "index": "02",
  "sector": "OMO EXPERIENCE",
  "unit": "線上會員引流至門市",
  "title": "把線上的選擇，接上門市的服務",
  "description": "以「線上預訂、線下取件驗光」串聯電商與實體門市，讓購物流程回應眼鏡零售的服務需求。",
  "steps": [
   [
    "服務旅程",
    "整合線上瀏覽、個人驗光度數存取與門市取件驗光流程，規劃通路間的服務銜接。"
   ],
   [
    "跨通路落地",
    "協調數位產品與門市營運，將 73% 的線上會員引流至實體門市。"
   ]
  ],
  "tags": [
   "User Journey",
   "OMO",
   "跨部門協作"
  ],
  "value": "73<span>%</span>"
 },
 "experience": {
  "index": "03",
  "sector": "PRODUCT EXPERIENCE",
  "unit": "AR 試戴用戶購買成交率",
  "title": "讓線上選購，多一份試戴的把握",
  "description": "針對難以預知配戴效果的購物障礙，推動鏡框與隱形眼鏡 AR 虛擬試戴導入。",
  "steps": [
   [
    "規格轉譯",
    "統整業務與法規需求，與設計及開發團隊協作，將體驗目標轉為功能需求。"
   ],
   [
    "驗收與成效",
    "主持多裝置、跨瀏覽器 UAT 驗收；使用過 AR 試戴的用戶購買成交率超過三成，平均停留時長提升 45%。"
   ]
  ],
  "tags": [
   "AR 虛擬試戴",
   "需求定義",
   "跨裝置 UAT"
  ],
  "value": "&gt;30<span>%</span>"
 },
 "service": {
  "index": "04",
  "sector": "SERVICE DESIGN",
  "unit": "雙北極速到貨服務",
  "title": "把日常的不便，變成服務設計的起點",
  "description": "從臨時缺貨與定期補充需求出發，推動快速到貨並規劃定期配送，將產品思考延伸到購買之後。",
  "steps": [
   [
    "快速履約",
    "協調物流即時 API 與門市庫存串接，推動雙北六小時到貨服務。"
   ],
   [
    "訂閱規劃",
    "規劃隱形眼鏡與葉黃素的定期配送，涵蓋週期扣款、補貨週期，以及延後或跳過配送的介面。"
   ]
  ],
  "tags": [
   "金物流整合",
   "定期配送規劃",
   "Recurring Billing"
  ],
  "value": "6<span>小時</span>"
 },
 "growth": {
  "index": "05",
  "sector": "GROWTH OPERATIONS",
  "unit": "CPA 降低",
  "title": "用營運數據，決定產品的下一步",
  "description": "把行銷、產品與會員經營接在一起：觀察轉換路徑、辨識流程中斷點，再以驗證與分群持續調整。",
  "steps": [
   [
    "體驗優化",
    "運用 GA4 與 A/B 測試，檢視結帳與轉換流程；結合 OMO 資源整合，降低單次轉換成本。"
   ],
   [
    "會員與檔期",
    "透過 CRM 分群與再行銷經營會員關係；在雙 11、618 大檔期達成業績 YoY 成長 20% 以上，連續多年達標。"
   ]
  ],
  "tags": [
   "GA4 / A/B Testing",
   "CRM",
   "P&L / LTV"
  ],
  "value": "−25<span>%</span>",
  "supportingMetric": {
   "label": "CRM 會員再購率",
   "value": "34%"
  }
 }
};
const careerData={
 "brand": {
  "company": "FORMOSA OPTICAL",
  "title": "行銷部經理／電商事業主管",
  "english": "Marketing Manager & Head of E-Commerce",
  "description": "整合行銷與電商事業，帶領 5 人團隊，主導 EYESmart 數位產品規劃與營運，串聯商業目標、平台體驗及會員經營。",
  "points": [
   "主導 EYESmart 從零到一建置與持續營運，將電商年營收由 50 萬推進至破億規模。",
   "規劃 OMO 取件驗光旅程，推動 AI 推薦、AR 試戴及雙北六小時到貨，並規劃定期配送服務。",
   "從需求規格、跨部門協作到 UAT 驗收與 GA4 追蹤，將產品落地與營運優化接在一起。",
   "規劃 EYE+ Pay 流程與需求，協同廠商及跨部門推進支付體驗。",
   "參與 AI 推薦與數據驅動客戶體驗相關工作；寶島眼鏡獲 2025 IDC 未來企業大獎「卓越客戶體驗獎」台灣及亞太兩區肯定。"
  ],
  "bottom": [
   "2017.03 — NOW",
   "產品規劃 × 電商經營",
   "團隊 5 人"
  ]
 },
 "agency": {
  "company": "4A AGENCY",
  "title": "副業務總監／資深整合專案經理",
  "english": "",
  "description": "在整合行銷與大型數位專案中，累積品牌洞察、時程掌控與跨領域協作經驗，將市場需求轉為團隊可執行的規劃。",
  "points": [
   "服務中國信託、中華電信、台灣啤酒、YAMAHA 等品牌，推進跨媒體整合行銷與多方利害關係人協作。",
   "參與大型官網與互動 App 規劃，涵蓋前置 UX 訪談、資訊架構與功能需求轉譯。",
   "參與台灣啤酒「18 天生搶鮮喝」專案，獲 2013 時報華文廣告金像獎；經典台啤「經典超時光飛行」專案獲 2014 金手指網路獎。"
  ],
  "bottom": [
   "2008.07 — 2017.03",
   "品牌溝通 × 數位專案",
   "跨部門協調"
  ]
 }
};
const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
function animatePanel(panel){panel.classList.remove('changing');void panel.offsetWidth;panel.classList.add('changing')}
function selectCase(key,{focus=false}={}){const d=caseData[key];if(!d)return;$$('.case-tab').forEach(b=>{const active=b.dataset.case===key;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;if(active&&focus)b.focus()});$('#case-sector').textContent=d.sector;$('#case-value').innerHTML=d.value;$('#case-unit').textContent=d.unit;$('#case-number').textContent=d.index+' / '+String(Object.keys(caseData).length).padStart(2,'0');$('#case-title').textContent=d.title;$('#case-description').textContent=d.description;const supporting=$('#case-supporting');supporting.hidden=!d.supportingMetric;supporting.replaceChildren();if(d.supportingMetric){const value=document.createElement('strong');value.textContent=d.supportingMetric.value;const label=document.createElement('span');label.textContent=d.supportingMetric.label;supporting.append(value,label)}$('#case-steps').replaceChildren(...d.steps.map(([title,text],i)=>{const el=document.createElement('div');el.className='case-step';const number=document.createElement('span');number.textContent=String(i+1).padStart(2,'0');const p=document.createElement('p');const strong=document.createElement('strong');strong.textContent=title;p.append(strong,document.createTextNode(text));el.append(number,p);return el}));$('#case-tags').replaceChildren(...d.tags.map(t=>{const s=document.createElement('span');s.textContent=t;return s}));$('#case-panel').setAttribute('aria-labelledby','tab-'+key);animatePanel($('#case-panel'))}
function bindTabs(buttons,key,select,vertical=false){buttons.forEach((button,index)=>{button.addEventListener('click',()=>select(button.dataset[key]));button.addEventListener('keydown',event=>{let next=index;const horizontal=!vertical||matchMedia('(max-width:760px)').matches;const forward=horizontal?'ArrowRight':'ArrowDown';const backward=horizontal?'ArrowLeft':'ArrowUp';if(event.key===forward)next=(index+1)%buttons.length;else if(event.key===backward)next=(index-1+buttons.length)%buttons.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=buttons.length-1;else return;event.preventDefault();select(buttons[next].dataset[key],{focus:true});buttons[next].scrollIntoView({block:'nearest',inline:'nearest',behavior:'auto'})})})}
bindTabs($$('.case-tab'),'case',selectCase);
$$('[data-case-link]').forEach(b=>b.addEventListener('click',()=>{selectCase(b.dataset.caseLink);$('#impact').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});$('#tab-'+b.dataset.caseLink).focus({preventScroll:true})}));
function selectCareer(key,{focus=false}={}){const d=careerData[key];if(!d)return;$$('.career-tab').forEach(b=>{const active=b.dataset.career===key;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;if(active&&focus)b.focus()});$('#career-company').textContent=d.company;$('#career-title').textContent=d.title;$('#career-english').textContent=d.english;$('#career-english').hidden=!d.english;$('#career-description').textContent=d.description;$('#career-points').replaceChildren(...d.points.map(text=>{const li=document.createElement('li');li.textContent=text;return li}));$('#career-bottom').replaceChildren(...d.bottom.map(text=>{const span=document.createElement('span');span.textContent=text;return span}));$('#career-panel').setAttribute('aria-labelledby','career-tab-'+key);animatePanel($('#career-panel'))}
bindTabs($$('.career-tab'),'career',selectCareer,true);
const careerMobile=matchMedia('(max-width:760px)');function syncCareerOrientation(){$('.career-tabs').setAttribute('aria-orientation',careerMobile.matches?'horizontal':'vertical')}careerMobile.addEventListener('change',syncCareerOrientation);syncCareerOrientation();
const dialog=$('#intro-dialog');const frame=$('#intro-frame');let introOpener=null;
$$('.intro-trigger').forEach(b=>b.addEventListener('click',()=>{introOpener=b;if(!frame.getAttribute('src'))frame.src=frame.dataset.src;dialog.showModal();document.body.style.overflow='hidden';$('#close-intro').focus()}));
function closeIntro(){frame.contentWindow?.postMessage({type:'sunny-intro',action:'pause'},location.origin==='null'?'*':location.origin);dialog.close()}
$('#close-intro').addEventListener('click',closeIntro);dialog.addEventListener('click',e=>{if(e.target===dialog){const box=dialog.getBoundingClientRect();if(e.clientX<box.left||e.clientX>box.right||e.clientY<box.top||e.clientY>box.bottom)closeIntro()}});dialog.addEventListener('close',()=>{document.body.style.overflow='';frame.contentWindow?.postMessage({type:'sunny-intro',action:'pause'},location.origin==='null'?'*':location.origin);introOpener?.focus()});
$('#print-resume').addEventListener('click',()=>window.print());selectCase('commerce');selectCareer('brand');
