(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba4aa"],{"371a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-fade",attrs:{id:"contactModal",role:"dialog","aria-label":"Contact Me","aria-hidden":"true",tabindex:"-1"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("Contact Me")]),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[t._v("X")])]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"container text-center"},[a("form",{attrs:{action:"mailto:turner@frostbyt.io",method:"post",enctype:"text/plain"}},[a("fieldset",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"senderEmail"}},[t._v("Email Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.Email,expression:"contact.Email"}],staticClass:"form-control",attrs:{type:"email",id:"senderEmail",placeholder:"Enter your email address"},domProps:{value:t.contact.Email},on:{input:function(e){e.target.composing||t.$set(t.contact,"Email",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"messageSubject"}},[t._v("Message Subject")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.Subject,expression:"contact.Subject"}],staticClass:"form-control",attrs:{type:"text",id:"messageSubject",placeholder:"Subject of your message"},domProps:{value:t.contact.Subject},on:{input:function(e){e.target.composing||t.$set(t.contact,"Subject",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"messageContent"}},[t._v("Message Details")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contact.Message,expression:"contact.Message"}],staticClass:"form-control",attrs:{placeholder:"Enter your message here",id:"messageContent"},domProps:{value:t.contact.Message},on:{input:function(e){e.target.composing||t.$set(t.contact,"Message",e.target.value)}}})])])])])]),a("div",{staticClass:"modal-footer text-center"},[a("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"button"},on:{click:t.submit}},[t._v("Contact")])])])])])},o=[],c={name:"modal",data(){return{contact:{Email:"",Subject:"",Message:""}}},methods:{submit(){""!==this.contact.Email&&""!==this.contact.Subject&&""!==this.contact.Message?alert("sent"):alert("All fields are required!")},close(){this.$emit("close")}}},l=c,i=a("2877"),n=Object(i["a"])(l,s,o,!1,null,"5126164e",null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0ba4aa.c9f2971d.js.map