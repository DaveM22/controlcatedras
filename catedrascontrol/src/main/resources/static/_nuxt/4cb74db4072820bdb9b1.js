(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{370:function(e,t,r){"use strict";r.r(t);r(10),r(6),r(5),r(4),r(7);var n=r(2),o=(r(34),r(105));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={head:{title:"Personas"},data:function(){return{search:"",headers:[{text:"Id",value:"id"},{text:"Legajo",value:"legajo"},{text:"Dni",value:"dni"},{text:"Apellido",value:"apellido"},{text:"Nombre",value:"nombre"},{text:"E-Mail",value:"email"},{text:"Acciones",value:"action",sortable:!1}]}},computed:Object(o.c)("personas",["personas"]),mounted:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.GetData());case 2:case"end":return e.stop()}}),null,this)},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.b)("personas",["GetData"]),{editar:function(e){this.$router.push({name:"cursos-editar-id",params:{id:e.id,curso:e}})}})},v=r(55),d=r(80),f=r.n(d),m=r(132),O=r(361),y=r(320),h=r(115),j=r(299),w=r(28),x=r(121),component=Object(v.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.personas},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",[e._v("Personas")]),e._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),r("v-spacer"),e._v(" "),[r("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:"",to:"/personas/nuevo"}},[e._v("Nueva persona")])]],2)]},proxy:!0},{key:"item.action",fn:function(t){var n=t.item;return[r("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editar(n)}}},[e._v("\n      mdi-pencil\n    ")]),e._v(" "),r("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v("\n      mdi-delete\n    ")])]}},{key:"no-data",fn:function(){return[r("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reset")])]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:m.a,VDataTable:O.a,VDivider:y.a,VIcon:h.a,VSpacer:j.a,VToolbar:w.a,VToolbarTitle:x.a})}}]);