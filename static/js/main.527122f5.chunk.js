(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),o=n.n(i),s=n(8),r=n.n(s),c=(n(15),n(9)),u=n(2),l=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("div",{className:"header__logo"})})},p=o.a.createContext(),d=function(e){var t=e.card,n=e.onCardClick,o=e.onCardLike,s=e.onCardDelete,r=Object(i.useContext)(p),c=t.owner._id===r._id,u="element__delete-button ".concat(c?"element__delete-button_visible":"element__delete-button_hidden"),l=t.likes.some((function(e){return e._id===r._id})),d="element__like ".concat(l?"element__like_active":"element__like_inactive");return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{alt:t.name,className:"element__image",src:t.link,onClick:function(){n(t)}}),Object(a.jsxs)("div",{className:"element__title",children:[Object(a.jsx)("h2",{className:"element__place-name",children:t.name}),Object(a.jsxs)("div",{className:"element__like-container",children:[Object(a.jsx)("button",{className:d,type:"button","aria-label":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a.",onClick:function(){o(t)}}),Object(a.jsx)("p",{className:"element__like-num",children:t.likes.length})]})]}),Object(a.jsx)("button",{className:u,type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0442\u043e.",onClick:function(){s(t)}})]})},b=function(){return Object(a.jsx)("div",{className:"spinner"})},_=function(e){var t=e.cards,n=e.onEditProfile,o=e.onAddPlace,s=e.onEditAvatar,r=e.onCardClick,c=e.onCardLike,u=e.onCardDelete,l=e.isLoading,_=Object(i.useContext)(p);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsx)("div",{className:"profile__avatar",style:{background:"center/cover url(".concat(_.avatar,") no-repeat")},children:Object(a.jsx)("button",{className:"profile__edit-avatar-button",onClick:s})}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__title",children:[Object(a.jsx)("h1",{className:"profile__name",children:_.name}),Object(a.jsx)("button",{className:"profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c.",onClick:n})]}),Object(a.jsx)("p",{className:"profile__subtitle",children:_.about})]}),Object(a.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e.",onClick:o})]}),Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{className:"elements",children:[" ",l?Object(a.jsx)(b,{}):t.map((function(e){return Object(a.jsx)("li",{className:"element",children:Object(a.jsx)(d,{card:e,onCardClick:r,onCardLike:c,onCardDelete:u})},e._id)}))]})})]})},h=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",Object(a.jsx)("span",{id:"year",children:(new Date).getFullYear()})," Mesto Russia"]})})},m=function(e){var t=e.card,n=e.onClose,i=e.onClick;return Object(a.jsx)("div",{className:"popup popup_type_zoomed-image ".concat(t&&"popup_opened"),onClick:i,children:Object(a.jsxs)("div",{className:"popup__form popup__form_type_zoomed-image",children:[Object(a.jsx)("img",{src:t?t.link:"",alt:t?t.name:"",className:"popup__image"}),Object(a.jsx)("p",{className:"popup__name popup__name_place_zoomed-image",children:t?t.name:""}),Object(a.jsx)("button",{className:"popup__close-button",type:"reset",onClick:n})]})})},j=n(5),f=n(6),v=new(function(){function e(t){Object(j.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(f.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then((function(t){return e._getResponseData(t)}))}},{key:"setUserInfo",value:function(e,t){var n=this;return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers,method:"PATCH",body:JSON.stringify({name:e,about:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"addNewCard",value:function(e,t){var n=this;return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers,method:"POST",body:JSON.stringify({name:e,link:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"_addLike",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{headers:this.headers,method:"PUT"}).then((function(e){return t._getResponseData(e)}))}},{key:"_deleteLike",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{headers:this.headers,method:"DELETE"}).then((function(e){return t._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?this._addLike(e):this._deleteLike(e)}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/").concat(e),{headers:this.headers,method:"DELETE"}).then((function(e){return t._getResponseData(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/users/me/avatar"),{headers:this.headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-17",headers:{authorization:"b1b736c3-ab37-40d8-99c3-eedcbb719e9d","Content-Type":"application/json"}}),O=function(){function e(t,n){Object(j.a)(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._errorSelector=t.errorSelector,this._formElement=n,this._button=n.querySelector(t.submitButtonSelector),this._inputList=Array.from(n.querySelectorAll(t.inputSelector))}return Object(f.a)(e,[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_enableButton",value:function(){this._button.classList.remove(this._inactiveButtonClass),this._button.removeAttribute("disabled")}},{key:"_disableButton",value:function(){this._button.classList.add(this._inactiveButtonClass),this._button.setAttribute("disabled","true")}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"_handleReset",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setEventListenersForReset",value:function(){var e=this;this._formElement.addEventListener("reset",(function(){e._handleReset()}))}},{key:"enableValidation",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))})),this._setEventListenersForReset()}}]),e}(),C="popupName",k="popupDescription",x={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active",errorSelector:".popup__input-error"},g=function(e){var t=Object(i.useRef)();return Object(i.useEffect)((function(){(function(e){var t=new O(x,e);return t.enableValidation(),t})(t.current).enableValidation()}),[]),Object(a.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),onClick:e.onClick,children:Object(a.jsxs)("form",{className:"popup__form popup__form_type_".concat(e.name),method:"POST",name:e.name,onSubmit:e.onSubmit,ref:t,children:[Object(a.jsx)("button",{className:"popup__close-button",type:"reset","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443.",onClick:e.onClose}),Object(a.jsx)("h3",{className:"popup__title",children:e.title}),e.children,Object(a.jsx)("button",{type:"submit",className:"popup__save-button popup__button\n          ".concat(!("delete-confirm"===e.name)&&e.isOpen&&"popup__button_disabled"),disabled:!("delete-confirm"===e.name)&&e.isOpen,children:e.buttonTitle})]})})},y=function(e){var t=e.isOpen,n=e.onClose,o=e.onUpdateUser,s=e.isLoading,r=e.onClick,c=Object(i.useContext)(p),l=Object(i.useState)(""),d=Object(u.a)(l,2),b=d[0],_=d[1],h=Object(i.useState)(""),m=Object(u.a)(h,2),j=m[0],f=m[1];Object(i.useEffect)((function(){t&&(_(c.name),f(c.about))}),[c,t]);var v=function(e){switch(e.target.name){case C:_(e.target.value);break;case k:f(e.target.value)}};return Object(a.jsxs)(g,{name:"edit-form",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonTitle:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({name:b,about:j})},onClick:r,children:[Object(a.jsx)("input",{type:"text",className:"popup__input popup__name",name:"popupName",placeholder:"\u0418\u043c\u044f",required:!0,id:"name-input",minLength:"2",maxLength:"40",onChange:v,value:b}),Object(a.jsx)("span",{className:"popup__input-error",id:"name-input-error"}),Object(a.jsx)("input",{type:"text",className:"popup__input popup__description",name:"popupDescription",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,id:"description-input",minLength:"2",maxLength:"200",onChange:v,value:j}),Object(a.jsx)("span",{className:"popup__input-error",id:"description-input-error"})]})},N=function(e){var t=e.isOpen,n=e.onClose,o=e.onUpdateAvatar,s=e.isLoading,r=e.onClick,c=Object(i.useRef)();Object(i.useEffect)((function(){t&&(c.current.value="")}),[t]);return Object(a.jsxs)(g,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonTitle:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({avatar:c.current.value})},onClick:r,children:[Object(a.jsx)("input",{type:"url",className:"popup__input popup__description",name:"avatarUrl",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,id:"url-input",ref:c}),Object(a.jsx)("span",{className:"popup__input-error",id:"url-input-error"})]})},L=function(e){var t=e.isOpen,n=e.onClose,o=e.onAddPlace,s=e.isLoading,r=e.onClick,c=Object(i.useState)(""),l=Object(u.a)(c,2),p=l[0],d=l[1],b=Object(i.useState)(""),_=Object(u.a)(b,2),h=_[0],m=_[1];Object(i.useEffect)((function(){t&&(d(""),m(""))}),[t]);var j=function(e){switch(e.target.name){case C:d(e.target.value);break;case k:m(e.target.value)}};return Object(a.jsxs)(g,{name:"add-form",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonTitle:s?"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({name:p,link:h})},onClick:r,children:[Object(a.jsx)("input",{type:"text",className:"popup__input popup__name",name:"popupName",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,id:"title-input",minLength:"2",maxLength:"30",value:p,onChange:j}),Object(a.jsx)("span",{className:"popup__input-error",id:"title-input-error"}),Object(a.jsx)("input",{type:"url",className:"popup__input popup__description",name:"popupDescription",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,id:"url-input",value:h,onChange:j}),Object(a.jsx)("span",{className:"popup__input-error",id:"url-input-error"})]})},S=function(e){var t=e.isOpen,n=e.onClose,i=e.onCardDelete,o=e.isLoading,s=e.card,r=e.onClick;return Object(a.jsx)(g,{name:"delete-confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonTitle:o?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),i(s)},onClick:r})};var E=function(){var e=Object(i.useState)({}),t=Object(u.a)(e,2),n=t[0],o=t[1],s=Object(i.useState)([]),r=Object(u.a)(s,2),d=r[0],b=r[1],j=Object(i.useState)(null),f=Object(u.a)(j,2),O=f[0],C=f[1],k=Object(i.useState)(!1),x=Object(u.a)(k,2),g=x[0],E=x[1],D=Object(i.useState)(null),U=Object(u.a)(D,2),w=U[0],I=U[1],B=Object(i.useState)(!1),A=Object(u.a)(B,2),P=A[0],R=A[1],T=Object(i.useState)(!1),q=Object(u.a)(T,2),F=q[0],J=q[1],V=Object(i.useState)(!1),z=Object(u.a)(V,2),M=z[0],H=z[1],Y=Object(i.useState)(!1),G=Object(u.a)(Y,2),K=G[0],Q=G[1];Object(i.useEffect)((function(){E(!0),Promise.all([v.getUserInfo(),v.getInitialCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];o(n),b(a)})).catch((function(e){console.log(e)})).finally((function(){E(!1)}))}),[]);var W=function(e){"Escape"===e.key&&Z()},X=function(e){e.target===e.currentTarget&&Z()},Z=function(){H(!1),R(!1),J(!1),Q(!1),C(null),document.removeEventListener("keydown",W)};return Object(a.jsx)(p.Provider,{value:n,children:Object(a.jsxs)("div",{className:"page__container",children:[Object(a.jsx)(L,{isOpen:F,onClose:Z,onAddPlace:function(e){E(!0),v.addNewCard(e.name,e.link).then((function(e){b([e].concat(Object(c.a)(d))),Z()})).catch((function(e){console.log(e)})).finally((function(){E(!1)}))},isLoading:g,onClick:X}),Object(a.jsx)(S,{isOpen:K,onClose:Z,onCardDelete:function(e){E(!0),v.deleteCard(e._id).then((function(){var t=d.filter((function(t){return t._id!==e._id}));b(t),Z()})).catch((function(e){console.log(e)})).finally((function(){E(!1)}))},isLoading:g,card:w,onClick:X}),Object(a.jsx)(N,{isOpen:M,onClose:Z,onUpdateAvatar:function(e){E(!0),v.editAvatar(e.avatar).then((function(e){o(e),Z()})).catch((function(e){console.log(e)})).finally((function(){E(!1)}))},isLoading:g,onClick:X}),Object(a.jsx)(y,{isOpen:P,onClose:Z,onUpdateUser:function(e){E(!0),v.setUserInfo(e.name,e.about).then((function(e){o(e),Z()})).catch((function(e){console.log(e)})).finally((function(){E(!1)}))},isLoading:g,onClick:X}),Object(a.jsx)(m,{card:O,onClose:Z,onClick:X}),Object(a.jsx)(l,{}),Object(a.jsx)(_,{cards:d,onEditProfile:function(){R(!0),document.addEventListener("keydown",W)},onAddPlace:function(){J(!0),document.addEventListener("keydown",W)},onEditAvatar:function(){H(!0),document.addEventListener("keydown",W)},onCardClick:function(e){C(e),document.addEventListener("keydown",W)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));v.changeLikeCardStatus(e._id,!t).then((function(t){var n=d.map((function(n){return n._id===e._id?t:n}));b(n)}))},onCardDelete:function(e){Q(!0),I(e),document.addEventListener("keydown",W)},isLoading:g}),Object(a.jsx)(h,{})]})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),o(e),s(e)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root")),D()}},[[16,1,2]]]);
//# sourceMappingURL=main.527122f5.chunk.js.map