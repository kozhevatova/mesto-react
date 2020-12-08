(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),o=n(6),i=n.n(o),r=(n(15),n(9)),u=n(2),l=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("div",{className:"header__logo"})})},p=s.a.createContext(),d=n(7),b=n(8),j=new(function(){function e(t){Object(d.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(b.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then((function(t){return e._getResponseData(t)}))}},{key:"setUserInfo",value:function(e,t){var n=this;return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers,method:"PATCH",body:JSON.stringify({name:e,about:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"addNewCard",value:function(e,t){var n=this;return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers,method:"POST",body:JSON.stringify({name:e,link:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"_addLike",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{headers:this.headers,method:"PUT"}).then((function(e){return t._getResponseData(e)}))}},{key:"_deleteLike",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{headers:this.headers,method:"DELETE"}).then((function(e){return t._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?this._addLike(e):this._deleteLike(e)}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/").concat(e),{headers:this.headers,method:"DELETE"}).then((function(e){return t._getResponseData(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/users/me/avatar"),{headers:this.headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-17",headers:{authorization:"b1b736c3-ab37-40d8-99c3-eedcbb719e9d","Content-Type":"application/json"}}),h=function(e){var t=e.card,n=e.onCardClick,s=e.onCardLike,o=e.onCardDelete,i=Object(c.useContext)(p),r=t.owner._id===i._id,u="element__delete-button ".concat(r?"element__delete-button_visible":"element__delete-button_hidden"),l=t.likes.some((function(e){return e._id===i._id})),d="element__like ".concat(l?"element__like_active":"element__like_inactive");return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{alt:t.name,className:"element__image",src:t.link,onClick:function(){n(t)}}),Object(a.jsxs)("div",{className:"element__title",children:[Object(a.jsx)("h2",{className:"element__place-name",children:t.name}),Object(a.jsxs)("div",{className:"element__like-container",children:[Object(a.jsx)("button",{className:d,type:"button","aria-label":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a.",onClick:function(){s(t)}}),Object(a.jsx)("p",{className:"element__like-num",children:t.likes.length})]})]}),Object(a.jsx)("button",{className:u,type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0442\u043e.",onClick:function(){o(t)}})]})},m=function(e){var t=e.cards,n=e.onEditProfile,s=e.onAddPlace,o=e.onEditAvatar,i=e.onCardClick,r=e.onCardLike,u=e.onCardDelete,l=Object(c.useContext)(p);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsx)("div",{className:"profile__avatar",style:{background:"center/cover url(".concat(l.avatar,") no-repeat")},children:Object(a.jsx)("button",{className:"profile__edit-avatar-button",onClick:o})}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__title",children:[Object(a.jsx)("h1",{className:"profile__name",children:l.name}),Object(a.jsx)("button",{className:"profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c.",onClick:n})]}),Object(a.jsx)("p",{className:"profile__subtitle",children:l.about})]}),Object(a.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e.",onClick:s})]}),Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{className:"elements",children:[" ",t.map((function(e){return Object(a.jsx)("li",{className:"element",children:Object(a.jsx)(h,{card:e,onCardClick:i,onCardLike:r,onCardDelete:u})},e._id)}))]})})]})},_=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",Object(a.jsx)("span",{id:"year",children:(new Date).getFullYear()})," Mesto Russia"]})})},f=function(e){return Object(a.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(a.jsxs)("form",{className:"popup__form popup__form_type_".concat(e.name),method:"POST",name:e.name,onSubmit:e.onSubmit,children:[Object(a.jsx)("button",{className:"popup__close-button",type:"reset","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443.",onClick:e.onClose}),Object(a.jsx)("h3",{className:"popup__title",children:e.title}),e.children,Object(a.jsx)("button",{type:"submit",className:"popup__save-button popup__button ",children:e.buttonTitle})]})})},O=function(e){var t=e.card,n=e.onClose;return Object(a.jsx)("div",{className:"popup popup_type_zoomed-image ".concat(t&&"popup_opened"),children:Object(a.jsxs)("div",{className:"popup__form popup__form_type_zoomed-image",children:[Object(a.jsx)("img",{src:t?t.link:"",alt:t?t.name:"",className:"popup__image"}),Object(a.jsx)("p",{className:"popup__name popup__name_place_zoomed-image",children:t?t.name:""}),Object(a.jsx)("button",{className:"popup__close-button",type:"reset",onClick:n})]})})},v="popupName",x="popupDescription",g=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateUser,o=Object(c.useContext)(p),i=Object(c.useState)(""),r=Object(u.a)(i,2),l=r[0],d=r[1],b=Object(c.useState)(""),j=Object(u.a)(b,2),h=j[0],m=j[1];Object(c.useEffect)((function(){d(o.name),m(o.about)}),[o]);var _=function(e){switch(e.target.name){case v:d(e.target.value);break;case x:m(e.target.value)}};return Object(a.jsxs)(f,{name:"edit-form",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({name:l,about:h})},children:[Object(a.jsx)("input",{type:"text",className:"popup__input popup__name",name:"popupName",placeholder:"\u0418\u043c\u044f",required:!0,id:"name-input",minLength:"2",maxLength:"40",onChange:_,value:l}),Object(a.jsx)("span",{className:"popup__input-error",id:"name-input-error"}),Object(a.jsx)("input",{type:"text",className:"popup__input popup__description",name:"popupDescription",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,id:"description-input",minLength:"2",maxLength:"200",onChange:_,value:h}),Object(a.jsx)("span",{className:"popup__input-error",id:"description-input-error"})]})},C=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateAvatar,o=Object(c.useRef)();return Object(a.jsxs)(f,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({avatar:o.current.value})},children:[Object(a.jsx)("input",{type:"url",className:"popup__input popup__description",name:"avatarUrl",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,id:"url-input",ref:o}),Object(a.jsx)("span",{className:"popup__input-error",id:"url-input-error"})]})},k=function(e){var t=e.isOpen,n=e.onClose,s=e.onAddPlace,o=Object(c.useState)(""),i=Object(u.a)(o,2),r=i[0],l=i[1],p=Object(c.useState)(""),d=Object(u.a)(p,2),b=d[0],j=d[1],h=function(e){switch(e.target.name){case v:l(e.target.value);break;case x:j(e.target.value)}};return Object(a.jsxs)(f,{name:"add-form",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({name:r,link:b})},children:[Object(a.jsx)("input",{type:"text",className:"popup__input popup__name",name:"popupName",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,id:"title-input",minLength:"2",maxLength:"30",value:r,onChange:h}),Object(a.jsx)("span",{className:"popup__input-error",id:"title-input-error"}),Object(a.jsx)("input",{type:"url",className:"popup__input popup__description",name:"popupDescription",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,id:"url-input",value:b,onChange:h}),Object(a.jsx)("span",{className:"popup__input-error",id:"url-input-error"})]})};var N=function(){var e=Object(c.useState)({}),t=Object(u.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)([]),i=Object(u.a)(o,2),d=i[0],b=i[1],h=Object(c.useState)(null),v=Object(u.a)(h,2),x=v[0],N=v[1],y=Object(c.useState)(!1),S=Object(u.a)(y,2),D=S[0],U=S[1],L=Object(c.useState)(!1),P=Object(u.a)(L,2),T=P[0],E=P[1],A=Object(c.useState)(!1),w=Object(u.a)(A,2),R=w[0],I=w[1];Object(c.useEffect)((function(){Promise.all([j.getUserInfo(),j.getInitialCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];s(n),b(a)})).catch((function(e){console.log(e)}))}),[]);var F=function(){I(!1),U(!1),E(!1),N(null)};return Object(a.jsx)(p.Provider,{value:n,children:Object(a.jsxs)("div",{className:"page__container",children:[Object(a.jsx)(k,{isOpen:T,onClose:F,onAddPlace:function(e){j.addNewCard(e.name,e.link).then((function(e){b([e].concat(Object(r.a)(d))),F()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(f,{name:"delete-confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonTitle:"\u0414\u0430",isOpen:!1,onClose:F}),Object(a.jsx)(C,{isOpen:R,onClose:F,onUpdateAvatar:function(e){j.editAvatar(e.avatar).then((function(e){s(e),F()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(g,{isOpen:D,onClose:F,onUpdateUser:function(e){j.setUserInfo(e.name,e.about).then((function(e){s(e),F()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(O,{card:x,onClose:F}),Object(a.jsx)(l,{}),Object(a.jsx)(m,{cards:d,onEditProfile:function(){U(!0)},onAddPlace:function(){E(!0)},onEditAvatar:function(){I(!0)},onCardClick:function(e){N(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));j.changeLikeCardStatus(e._id,!t).then((function(t){var n=d.map((function(n){return n._id===e._id?t:n}));b(n)}))},onCardDelete:function(e){e.owner._id,n._id;j.deleteCard(e._id).then((function(){var t=d.filter((function(t){return t._id!==e._id}));b(t)})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(_,{})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.37df8668.chunk.js.map