(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{381:function(e,t,r){"use strict";r.r(t);r(11),r(8),r(6),r(5),r(10);var n=r(2),o=(r(35),r(4)),c=r(106);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var v={data:function(){return{search:"",headers:[{text:"ID",value:"id"},{text:"Descripcion",value:"descripcion"},{text:"Nivel",value:"nivel"},{text:"Acciones",value:"action",sortable:!1}]}},head:function(){return{title:"Cursos"}},computed:Object(c.c)("comisiones",["comisiones"]),mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.GetData();case 2:case"end":return t.stop()}}),t)})))()},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)("comisiones",["GetData"]),{editar:function(e){this.$router.push({name:"comisiones-editar-id",params:{id:e.id,comision:e}})}})},m=r(56),d=r(81),f=r.n(d),O=r(134),h=r(369),j=r(322),y=r(116),w=r(301),_=r(29),D=r(123),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.comisiones},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",[e._v("Comisiones")]),e._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),r("v-spacer"),e._v(" "),[r("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:"",to:"/comisiones/nuevo"}},[e._v("Nueva comision")])]],2)]},proxy:!0},{key:"item.action",fn:function(t){var n=t.item;return[r("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editar(n)}}},[e._v("\n      mdi-pencil\n    ")]),e._v(" "),r("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v("\n      mdi-delete\n    ")])]}}])})}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:O.a,VDataTable:h.a,VDivider:j.a,VIcon:y.a,VSpacer:w.a,VToolbar:_.a,VToolbarTitle:D.a})}}]);