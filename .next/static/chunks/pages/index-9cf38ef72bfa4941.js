(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(9267)}])},9267:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var s=a(5893);a(5373);var i=a(7294),n=a(5121);function c(){let[e,t]=(0,i.useState)([]),[a,c]=(0,i.useState)([]),l=e=>{try{n.Z.get(e).then(e=>c({id:e.data.id,img:e.data.sprites.front_default,height:e.data.height,attack:e.data.stats[1].base_stat,name:e.data.name}))}catch(e){console.log(e)}};return(0,i.useEffect)(()=>{n.Z.get("https://pokeapi.co/api/v2/pokemon/1/").then(e=>c({id:e.data.id,img:e.data.sprites.front_default,height:e.data.height,attack:e.data.stats[1].base_stat,name:e.data.name})),n.Z.get("https://pokeapi.co/api/v2/pokemon?limit=10").then(e=>t(e.data.results))},[]),(0,s.jsx)("div",{className:"bg-[#131313] w-screen h-screen flex justify-center items-center",children:(0,s.jsxs)("div",{className:"w-2/3 h-2/3  flex flex-col gap-4 [&>div]:flex [&>div]:justify-between",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"uppercase border border-white px-2 py-1 text-white text-[12px]",children:"покемоны api"}),(0,s.jsxs)("div",{className:"text-white flex text-[12px] gap-2",children:[(0,s.jsx)("img",{src:"/Icon.svg",alt:""}),(0,s.jsx)("span",{children:"Нажмите на нужного Покемона"})]})]}),(0,s.jsxs)("div",{className:"h-5/6 flex justify-center items-center",children:[(0,s.jsx)("div",{className:"flex flex-wrap gap-2 w-1/2 justify-center items-center ",children:e.map(e=>(0,s.jsx)("button",{className:"text-white text-[20px] px-4 py-2 bg-[#1986EC] rounded-full cursor-pointer",onClick:()=>l(e.url),children:e.name},e.name))}),(0,s.jsxs)("div",{className:"w-1/2 h-full flex flex-col justify-between p-8 text-white bg-black bg-no-repeat bg-contain bg-center",style:{backgroundImage:"url(".concat(a.img,")")},children:[(0,s.jsx)("h1",{className:"text-[48px] text-[#A0A0A0] capitalize",children:a.name}),(0,s.jsxs)("div",{className:"flex flex-col gap-2 text-[#A0A0A0] text-[17px]",children:[(0,s.jsxs)("span",{children:["id: ",a.id]}),(0,s.jsxs)("span",{children:["height: ",a.height]}),(0,s.jsxs)("span",{children:["attack: ",a.attack]})]})]})]})]})})}}},function(e){e.O(0,[181,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);