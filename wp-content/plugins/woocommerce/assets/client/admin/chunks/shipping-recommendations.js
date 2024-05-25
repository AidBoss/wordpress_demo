"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[6125],{95726:(e,t,o)=>{o.r(t),o.d(t,{default:()=>O});var i=o(69307),n=o(9818),s=o(67221),c=o(75781),r=o(65736),m=o(55609),a=o(86020),l=o(10431),u=o(14599),p=o(46530),g=o(31815);const d=({isWCSInstalled:e})=>{const{layoutString:t}=(0,p.useLayoutContext)();return(0,i.createElement)("div",{className:"woocommerce-list__item-inner woocommerce-services-item"},(0,i.createElement)("div",{className:"woocommerce-list__item-before"},(0,i.createElement)("img",{className:"woocommerce-services-item__logo",src:g,alt:"WooCommerce Service Logo"})),(0,i.createElement)("div",{className:"woocommerce-list__item-text"},(0,i.createElement)("span",{className:"woocommerce-list__item-title"},(0,r.__)("WooCommerce Shipping","woocommerce"),(0,i.createElement)(a.Pill,null,(0,r.__)("Recommended","woocommerce"))),(0,i.createElement)("span",{className:"woocommerce-list__item-content"},(0,r.__)("Print USPS and DHL Express labels straight from your WooCommerce dashboard and save on shipping.","woocommerce"),(0,i.createElement)("br",null),(0,i.createElement)(m.ExternalLink,{href:"https://woocommerce.com/woocommerce-shipping/"},(0,r.__)("Learn more","woocommerce")))),(0,i.createElement)("div",{className:"woocommerce-list__item-after"},(0,i.createElement)(m.Button,{isSecondary:!0,onClick:()=>{(0,u.recordEvent)("tasklist_click",{task_name:"shipping-recommendation",context:`${t}/wc-settings`}),(0,l.navigateTo)({url:(0,l.getNewPath)({task:"shipping-recommendation"},"/",{})})}},e?(0,r.__)("Activate","woocommerce"):(0,r.__)("Get started","woocommerce"))))};var M=o(65915);const L="woocommerce_admin_reviewed_default_shipping_zones",h="woocommerce_admin_created_default_shipping_zones",S="woocommerce-settings-shipping-tour-floater-wrapper",N="woocommerce-settings-smart-defaults-shipping-tour-floater",E="table.wc-shipping-zones",_='a[href*="woocommerce-services-settings"]',j=e=>{const t=e.map((e=>{const t=document?.querySelector(e)?.getBoundingClientRect();if(!t)throw new Error("Shipping tour: Couldn't find element with selector: "+e);return t})),o=document.querySelector(`.${S}`)?.getBoundingClientRect()||{top:0,left:0},i=Math.min(...t.map((e=>e.top))),n=Math.min(...t.map((e=>e.left))),s=Math.max(...t.map((e=>e.right)))-n,c=Math.max(...t.map((e=>e.bottom)))-i,r=i-o.top;return{left:n-o.left,top:r,width:s,height:c}},y=({dims:e})=>(0,i.createElement)("div",{style:{position:"relative",pointerEvents:"none",...e},className:N}),w=[["th.wc-shipping-zone-sort","tfoot.wc-shipping-zone-worldwide tr > td.wc-shipping-zone-region"],["th.wc-shipping-zone-methods","tfoot.wc-shipping-zone-worldwide tr > td.wc-shipping-zone-methods"]],T=({step:e})=>{var t;const o=(0,i.useRef)(null);(0,i.useLayoutEffect)((()=>{o.current?.parentElement&&o.current.parentElement.insertBefore(o.current,document.querySelector("table.wc-shipping-zones"))}),[]);const n=null!==(t=w[e])&&void 0!==t?t:w[w.length-1],[s,c]=(0,i.useState)(j(n));(0,i.useEffect)((()=>{c(j(n));const e=new ResizeObserver((()=>{c(j(n))})),t=document.querySelector(E);if(!t)throw new Error("Shipping tour: Couldn't find shipping settings table element with selector: "+E);return e.observe(t),()=>{e.disconnect()}}),[n]);const r=document.querySelector(E)?.parentElement;if(!r)throw new Error("Shipping tour: Couldn't find shipping settings table parent element with selector: "+E);return(0,i.createPortal)((0,i.createElement)("div",{ref:o,className:S,style:{position:"absolute"}},(0,i.createElement)(y,{dims:s})),r)},I=({showShippingRecommendationsStep:e})=>{const{updateOptions:t}=(0,n.useDispatch)(s.OPTIONS_STORE_NAME),{show:o,isUspsDhlEligible:m}=(()=>{const{hasCreatedDefaultShippingZones:e,hasReviewedDefaultShippingOptions:t,businessCountry:o,isLoading:i}=(0,n.useSelect)((e=>{const{hasFinishedResolution:t,getOption:o}=e(s.OPTIONS_STORE_NAME);return{isLoading:!t("getOption",[h])&&!t("getOption",[L])&&!t("getOption",["woocommerce_default_country"]),hasCreatedDefaultShippingZones:"yes"===o(h),hasReviewedDefaultShippingOptions:"yes"===o(L),businessCountry:(0,c.so)(o("woocommerce_default_country"))}}));return{isLoading:i,show:window.wcAdminFeatures["shipping-setting-tour"]&&!i&&e&&!t,isUspsDhlEligible:"US"===o}})(),[l,p]=(0,i.useState)(0),{createNotice:g}=(0,n.useDispatch)("core/notices"),d={placement:"auto",options:{effects:{spotlight:{interactivity:{enabled:!1}},liveResize:{mutation:!0,resize:!0}},callbacks:{onNextStep:e=>{p(e+1),(0,u.recordEvent)("walkthrough_settings_shipping_next_click",{step_name:d.steps[e].meta.name})},onPreviousStep:e=>{p(e-1),(0,u.recordEvent)("walkthrough_settings_shipping_back_click",{step_name:d.steps[e].meta.name})}}},steps:[{referenceElements:{desktop:`.${N}`},meta:{name:"shipping-zones",heading:(0,r.__)("Shipping zones","woocommerce"),descriptions:{desktop:(0,i.createElement)(i.Fragment,null,(0,i.createElement)("span",null,(0,r.__)("Specify the areas you'd like to ship to! Give each zone a name, then list the regions you'd like to include. Your regions can be as specific as a zip code or as broad as a country. Shoppers will only see the methods available in their region.","woocommerce")),(0,i.createElement)("br",null),(0,i.createElement)("span",null,(0,r.__)("We've added some shipping zones to get you started — you can manage them by selecting Edit or Delete.","woocommerce")))}}},{referenceElements:{desktop:`.${N}`},meta:{name:"shipping-methods",heading:(0,r.__)("Shipping methods","woocommerce"),descriptions:{desktop:(0,i.createElement)(i.Fragment,null,(0,i.createElement)("span",null,(0,r.__)("Add one or more shipping methods you'd like to offer to shoppers in your zones.","woocommerce")),(0,i.createElement)("br",null),(0,i.createElement)("span",null,(0,r.__)("For example, we've added the “Free shipping” method for shoppers in your country. You can edit, add to, or remove shipping methods by selecting Edit or Delete.","woocommerce")))}}}],closeHandler:async(e,o,i)=>{(await t({[L]:"yes"})).success||(g("error",(0,r.__)("There was a problem marking the shipping tour as completed.","woocommerce")),(0,u.recordEvent)("walkthrough_settings_shipping_updated_option_error")),"close-btn"===i?(0,u.recordEvent)("walkthrough_settings_shipping_dismissed",{step_name:e[o].meta.name}):"done-btn"===i&&(0,u.recordEvent)("walkthrough_settings_shipping_completed")}};return document.querySelector(_)&&m&&d.steps.push({referenceElements:{desktop:_},meta:{name:"woocommerce-shipping",heading:(0,r.__)("WooCommerce Shipping","woocommerce"),descriptions:{desktop:(0,r.__)("Print USPS and DHL labels straight from your Woo dashboard and save on shipping thanks to discounted rates. You can manage WooCommerce Shipping in this section.","woocommerce")}}}),e&&d.steps.push({referenceElements:{desktop:"div.woocommerce-recommended-shipping-extensions"},meta:{name:"shipping-recommendations",heading:(0,r.__)("WooCommerce Shipping","woocommerce"),descriptions:{desktop:(0,r.__)("If you’d like to speed up your process and print your shipping label straight from your Woo dashboard, WooCommerce Shipping may be for you! ","woocommerce")}}}),(0,i.useEffect)((()=>{o&&(0,u.recordEvent)("walkthrough_settings_shipping_view")}),[o]),o?(0,i.createElement)("div",null,(0,i.createElement)(T,{step:l}),(0,i.createElement)(a.TourKit,{config:d})):null},O=()=>{const{activePlugins:e,installedPlugins:t,countryCode:o,isJetpackConnected:r,isSellingDigitalProductsOnly:m}=(0,n.useSelect)((e=>{const t=e(s.SETTINGS_STORE_NAME).getSettings("general"),{getActivePlugins:o,getInstalledPlugins:i,isJetpackConnected:n}=e(s.PLUGINS_STORE_NAME),r=e(s.ONBOARDING_STORE_NAME).getProfileItems().product_types;return{activePlugins:o(),installedPlugins:i(),countryCode:(0,c.so)(t.general?.woocommerce_default_country),isJetpackConnected:n(),isSellingDigitalProductsOnly:1===r?.length&&"downloads"===r[0]}}));return e.includes("woocommerce-services")&&r||"US"!==o||m?(0,i.createElement)(I,{showShippingRecommendationsStep:!1}):(0,i.createElement)(i.Fragment,null,(0,i.createElement)(I,{showShippingRecommendationsStep:!0}),(0,i.createElement)(M.ShippingRecommendationsList,null,(0,i.createElement)(d,{isWCSInstalled:t.includes("woocommerce-services")})))}},65915:(e,t,o)=>{o.r(t),o.d(t,{ShippingRecommendationsList:()=>E,default:()=>_});var i=o(69307),n=o(65736),s=o(9818),c=o(14812),r=o(67221),m=o(60538),a=o(55609),l=o(32488),u=o(86020),p=o(87608),g=o.n(p);const d=(0,i.createContext)(""),M=({children:e,onDismiss:t=(()=>null)})=>{const{updateOptions:o}=(0,s.useDispatch)(r.OPTIONS_STORE_NAME),c=(0,i.useContext)(d),m=()=>{t(),o({[c]:"yes"})};return(0,i.createElement)(a.CardHeader,null,(0,i.createElement)("div",{className:"woocommerce-dismissable-list__header"},e),(0,i.createElement)("div",null,(0,i.createElement)(u.EllipsisMenu,{label:(0,n.__)("Task List Options","woocommerce"),renderContent:()=>(0,i.createElement)("div",{className:"woocommerce-dismissable-list__controls"},(0,i.createElement)(a.Button,{onClick:m},(0,n.__)("Hide this","woocommerce")))})))},L=({children:e,className:t,dismissOptionName:o})=>(0,s.useSelect)((e=>{const{getOption:t,hasFinishedResolution:i}=e(r.OPTIONS_STORE_NAME),n=i("getOption",[o]),s="yes"===t(o);return n&&!s}))?(0,i.createElement)(a.Card,{size:"medium",className:g()("woocommerce-dismissable-list",t)},(0,i.createElement)(d.Provider,{value:o},e)):null;var h=o(74617),S=o(31815);const N=({onSetupClick:e,pluginsBeingSetup:t})=>{const{createSuccessNotice:o}=(0,s.useDispatch)("core/notices"),c=(0,s.useSelect)((e=>e(r.PLUGINS_STORE_NAME).isJetpackConnected()));return(0,i.createElement)("div",{className:"woocommerce-list__item-inner woocommerce-services-item"},(0,i.createElement)("div",{className:"woocommerce-list__item-before"},(0,i.createElement)("img",{className:"woocommerce-services-item__logo",src:S,alt:""})),(0,i.createElement)("div",{className:"woocommerce-list__item-text"},(0,i.createElement)("span",{className:"woocommerce-list__item-title"},(0,n.__)("WooCommerce Shipping","woocommerce"),(0,i.createElement)(u.Pill,null,(0,n.__)("Recommended","woocommerce"))),(0,i.createElement)("span",{className:"woocommerce-list__item-content"},(0,n.__)("Print USPS and DHL Express labels straight from your WooCommerce dashboard and save on shipping.","woocommerce"),(0,i.createElement)("br",null),(0,i.createElement)(a.ExternalLink,{href:"https://woocommerce.com/woocommerce-shipping/"},(0,n.__)("Learn more","woocommerce")))),(0,i.createElement)("div",{className:"woocommerce-list__item-after"},(0,i.createElement)(a.Button,{isSecondary:!0,onClick:()=>{e(["woocommerce-services"]).then((()=>{const e=[];c||e.push({url:(0,h.getAdminLink)("plugins.php"),label:(0,n.__)("Finish the setup by connecting your store to WordPress.com.","woocommerce")}),o((0,n.__)("🎉 WooCommerce Shipping is installed!","woocommerce"),{actions:e})}))},isBusy:t.includes("woocommerce-services"),disabled:t.length>0},(0,n.__)("Get started","woocommerce"))))},E=({children:e})=>(0,i.createElement)(L,{className:"woocommerce-recommended-shipping-extensions",dismissOptionName:"woocommerce_settings_shipping_recommendations_hidden"},(0,i.createElement)(M,null,(0,i.createElement)(c.Text,{variant:"title.small",as:"p",size:"20",lineHeight:"28px"},(0,n.__)("Recommended shipping solutions","woocommerce")),(0,i.createElement)(c.Text,{className:"woocommerce-recommended-shipping__header-heading",variant:"caption",as:"p",size:"12",lineHeight:"16px"},(0,n.__)('We recommend adding one of the following shipping extensions to your store. The extension will be installed and activated for you when you click "Get started".',"woocommerce"))),(0,i.createElement)("ul",{className:"woocommerce-list"},i.Children.map(e,(e=>(0,i.createElement)("li",{className:"woocommerce-list__item"},e)))),(0,i.createElement)(a.CardFooter,null,(0,i.createElement)(a.Button,{className:"woocommerce-recommended-shipping-extensions__more_options_cta",href:"https://woocommerce.com/product-category/woocommerce-extensions/shipping-methods/?utm_source=shipping_recommendations",target:"_blank",isTertiary:!0},(0,n.__)("See more options","woocommerce"),(0,i.createElement)(a.VisuallyHidden,null,(0,n.__)("(opens in a new tab)","woocommerce")),(0,i.createElement)(m.Z,{size:18})))),_=()=>{const[e,t]=(()=>{const[e,t]=(0,i.useState)([]),{installAndActivatePlugins:o}=(0,s.useDispatch)(r.PLUGINS_STORE_NAME);return[e,i=>e.length>0?Promise.resolve():(t(i),o(i).then((()=>{t([])})).catch((e=>((0,l.a)(e),t([]),Promise.reject()))))]})();return(0,s.useSelect)((e=>e(r.PLUGINS_STORE_NAME).getActivePlugins())).includes("woocommerce-services")?null:(0,i.createElement)(E,null,(0,i.createElement)(N,{pluginsBeingSetup:e,onSetupClick:t}))}},31815:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48cGF0aCBmaWxsPSIjN2Q1N2E0IiBkPSJNMCAwaDEyMHYxMjBIMHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNjcuNDggNTMuNTVjLTEuMTktLjI2LTIuMzMuNDItMy40MyAyLjAzLS44NyAxLjI2LTEuNDUgMi41Ni0xLjc0IDMuOTEtLjE2Ljc3LS4yNCAxLjU4LS4yNCAyLjQxIDAgLjk3LjE5IDEuOTYuNTggMi45OS40OCAxLjI2IDEuMTMgMS45NiAxLjkzIDIuMTIuOC4xNiAxLjY5LS4xOSAyLjY2LTEuMDYgMS4yMi0xLjA5IDIuMDYtMi43MiAyLjUxLTQuODguMTYtLjc3LjI0LTEuNTguMjQtMi40MSAwLS45Ny0uMTktMS45Ni0uNTgtMi45OS0uNDgtMS4yNS0xLjEyLTEuOTYtMS45My0yLjEyem0yMC42MiAwYy0xLjE5LS4yNi0yLjMzLjQyLTMuNDMgMi4wMy0uODcgMS4yNi0xLjQ1IDIuNTYtMS43NCAzLjkxLS4xNi43Ny0uMjQgMS41OC0uMjQgMi40MSAwIC45Ny4xOSAxLjk2LjU4IDIuOTkuNDggMS4yNiAxLjEzIDEuOTYgMS45MyAyLjEyLjguMTYgMS42OS0uMTkgMi42Ni0xLjA2IDEuMjItMS4wOSAyLjA2LTIuNzIgMi41MS00Ljg4LjE2LS43Ny4yNC0xLjU4LjI0LTIuNDEgMC0uOTctLjE5LTEuOTYtLjU4LTIuOTktLjQ4LTEuMjUtMS4xMi0xLjk2LTEuOTMtMi4xMnoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOTIuNzYgNDBIMjcuMjRjLTQuMTQgMC03LjUgMy4zNi03LjUgNy41djI0Ljk4YzAgNC4xNCAzLjM2IDcuNSA3LjUgNy41aDMxLjA0bDE0LjE5IDcuOS0zLjIyLTcuOWgyMy41YzQuMTQgMCA3LjUtMy4zNiA3LjUtNy41VjQ3LjVjLjAxLTQuMTQtMy4zNS03LjUtNy40OS03LjV6TTUyLjc0IDcyLjkxYy4wNi44NC0uMDcgMS41NS0uMzggMi4xNi0uNC43NC0uOTggMS4xMy0xLjc1IDEuMTktLjg3LjA2LTEuNzMtLjM1LTIuNi0xLjIyLTMuMDYtMy4xNC01LjQ5LTcuODEtNy4yOC0xNC0yLjEyIDQuMjEtMy43MSA3LjM3LTQuNzUgOS40OC0xLjkzIDMuNzItMy41OSA1LjYyLTQuOTcgNS43Mi0uOS4wNi0xLjY2LS42OS0yLjI5LTIuMjYtMS42OS00LjMtMy41LTEyLjYzLTUuNDQtMjQuOTctLjEzLS44Ni4wNS0xLjYuNTItMi4yMS40Ny0uNjEgMS4xNi0uOTUgMi4wNi0xLjAyIDEuNjctLjEyIDIuNjMuNjcgMi44OCAyLjM2IDEuMDMgNi44NiAyLjE0IDEyLjY5IDMuMzEgMTcuNDhsNy4yMS0xMy43MmMuNjYtMS4yNCAxLjQ4LTEuOSAyLjQ3LTEuOTcgMS40NC0uMSAyLjM1LjgyIDIuNzEgMi43Ni44MiA0LjM2IDEuODYgOC4xMSAzLjEyIDExLjI1Ljg2LTguMzUgMi4zMS0xNC4zOSA0LjM0LTE4LjExLjQ4LS45IDEuMjEtMS4zOSAyLjE3LTEuNDYuNzctLjA1IDEuNDYuMTYgMi4wOC42NS42Mi40OS45NSAxLjEyIDEgMS44OS4wNC41OC0uMDcgMS4xLS4zMiAxLjU3LTEuMjggMi4zOC0yLjM0IDYuMzQtMy4xOCAxMS44OS0uODIgNS4zNC0xLjEzIDkuNTMtLjkxIDEyLjU0em0yMC4yLTUuMTZjLTEuOTYgMy4yOC00LjU0IDQuOTItNy43MiA0LjkyLS41OCAwLTEuMTgtLjA3LTEuNzktLjE5LTIuMzItLjQ4LTQuMDctMS43NS01LjI2LTMuODEtMS4wNi0xLjgtMS41OS0zLjk3LTEuNTktNi41MiAwLTMuMzguODUtNi40NyAyLjU2LTkuMjcgMi0zLjI4IDQuNTctNC45MiA3LjcyLTQuOTIuNTggMCAxLjE3LjA3IDEuNzkuMTkgMi4zMi40OCA0LjA3IDEuNzUgNS4yNiAzLjgxIDEuMDYgMS43NyAxLjU5IDMuOTMgMS41OSA2LjQ3LS4wMSAzLjM4LS44NiA2LjQ4LTIuNTYgOS4zMnptMjAuNjIgMGMtMS45NiAzLjI4LTQuNTQgNC45Mi03LjcyIDQuOTItLjU4IDAtMS4xNy0uMDctMS43OC0uMTktMi4zMi0uNDgtNC4wNy0xLjc1LTUuMjYtMy44MS0xLjA2LTEuOC0xLjU5LTMuOTctMS41OS02LjUyIDAtMy4zOC44NS02LjQ3IDIuNTYtOS4yNyAyLTMuMjggNC41Ny00LjkyIDcuNzItNC45Mi41OCAwIDEuMTcuMDcgMS43OC4xOSAyLjMyLjQ4IDQuMDcgMS43NSA1LjI2IDMuODEgMS4wNiAxLjc3IDEuNTkgMy45MyAxLjU5IDYuNDcgMCAzLjM4LS44NiA2LjQ4LTIuNTYgOS4zMnoiLz48L3N2Zz4K"}}]);