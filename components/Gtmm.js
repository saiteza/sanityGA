import React from 'react'
import dynamic from "next/dynamic";

export const Scroll = dynamic(
   

  () => {
    return import(" /components/Scroll");
  },
  { ssr: false }
);
 export const Gtmm=()=>(function(w,d,s,l,i){ window.dataLayer = window.dataLayer || [];w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TNNKT58'); 
 
 
 

