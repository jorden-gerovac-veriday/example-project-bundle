(window["webpackJsonpproject-form-widget"]=window["webpackJsonpproject-form-widget"]||[]).push([[0],{172:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"common":{"save":"Save","dataSaved":"Project successfully saved","dataDeleted":"Project successfully deleted","notAuthenticated":"User is not authenticated.","selectFile":"Upload new file","selectImageFile":"Upload new image","download":"Download","cancel":"Cancel","delete":"Delete","yes":"Yes","no":"No"},"validation":{"required":"{{field}} is required"},"entities":{"project":{"deleteDialog":{"title":"Delete project","description":"Are you sure?"},"notFound":"Project not found","deleted":"Project deleted","id":"ID","name":"entities.project.name"}}}')},173:function(e){e.exports=JSON.parse('{"common":{"dataSaved":"","notAuthenticated":"","dataDeleted":"","yes":"","no":"","delete":"","cancel":"","save":""},"error":{"dataLoading":""},"entities":{"project":{"notFound":"","deleted":"","name":"","deleteDialog":{"title":"","description":""}}}}')},197:function(e,t,n){e.exports=n(345)},345:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(25),i=n(27),o=n(20),c=n(26),s=n(185),l=n(41),u=n(0),d=n.n(u),p=n(8),f=n.n(p),h=n(165),b=n.n(h),m=n(394),v=n(398),j=n(392),O=n(184),y=n(14),k=d.a.createContext(null),g=n(65),E=n(113),w=n(40),C={en:n(172),pt:n(173)};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var D=Object.keys(C).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(l.a)({},t,Object(l.a)({},"translation",C[t])))}),{}),P=E.a.t,x=function(e){!function(e,t){E.a.use(w.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:D,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en"),function(e){var t={mixed:{required:function(t){var n=t.path;return e("validation.required",{field:e("entities.project.".concat(n))})}}};g.setLocale(t)}(P)},U=function(e){return function(t){return function(e,t){var n=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(n)}(e,t)}},N={tableAdd:"project.table.add",tableSelect:"project.table.select"},F={create:"project.form.create",update:"project.form.update",errorCreate:"project.form.errorCreate",errorUpdate:"project.form.errorUpdate"},A=n(11),R=n.n(A),T=n(23),M=n(18),z=n(4),L=n.n(z),I=(L.a.shape({initialized:L.a.bool,authenticated:L.a.bool}),n(186));L.a.oneOfType([L.a.func,L.a.shape({current:L.a.elementType}),L.a.shape(null)]);function H(e){var t=function(t){function n(){var t,r;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return(r=Object(i.a)(this,(t=Object(o.a)(n)).call.apply(t,[this].concat(s)))).renderWrappedComponent=function(t){var n=r.props,a=n.forwardedRef,i=Object(I.a)(n,["forwardedRef"]);return d.a.createElement(e,Object.assign({},i,{ref:a,keycloak:t}))},r}return Object(c.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return d.a.createElement(k.Consumer,null,this.renderWrappedComponent)}}]),n}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,n){return d.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}var W=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},J=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},K=function(){return{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}},q=function(){var e=Object(T.a)(R.a.mark((function e(t,n){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(){var e=Object(T.a)(R.a.mark((function e(t,n){var a,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/projects","/").concat(n),r=V({},K(),{method:"GET"}),e.abrupt("return",q(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(T.a)(R.a.mark((function e(t,n){var a,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/projects"),r=V({},K(),{method:"POST",body:n?JSON.stringify(n):null}),e.abrupt("return",q(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(T.a)(R.a.mark((function e(t,n){var a,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/projects"),r=V({},K(),{method:"PUT",body:n?JSON.stringify(n):null}),e.abrupt("return",q(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(T.a)(R.a.mark((function e(t,n){var a,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/projects","/").concat(n),r=V({},K(),{method:"DELETE"}),e.abrupt("return",q(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=n(3),$=n(397),_=n(384),ee=n(380),te=n(5),ne=n(385),ae=n(175),re=n.n(ae),ie=n(176),oe=n.n(ie),ce=n(174),se=n.n(ce),le=n(177),ue=n.n(le),de={success:se.a,error:re.a,info:oe.a},pe={success:3e3,error:null,info:5e3},fe=function e(t){var n=t.className,a=t.classes,r=t.status,i=t.message,o=t.onClose,c=!!i,s=r||e.INFO,l=de[s],u=pe[s],p=d.a.createElement("span",{className:a.message},d.a.createElement(l,{className:Object(Z.a)(a.icon,a.iconStatus)}),i);return d.a.createElement($.a,{open:c,onClose:o,autoHideDuration:u},d.a.createElement(_.a,{className:Object(Z.a)(a[s],n),message:p,action:[d.a.createElement(ne.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},d.a.createElement(ue.a,{className:a.icon}))]}))};fe.SUCCESS="success",fe.ERROR="error",fe.defaultProps={message:null,className:"",status:fe.INFO="info",onClose:function(){}};var he=Object(te.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:ee.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(fe),be=(L.a.shape({id:L.a.number,name:L.a.string}),L.a.shape({name:L.a.string}),L.a.shape({name:L.a.oneOfType([L.a.bool,L.a.shape()])}),L.a.shape({name:L.a.oneOfType([L.a.string,L.a.shape()])}),n(183)),me=n(187),ve=n(390),je=n(391),Oe=n(393),ye=n(396),ke=n(389),ge=n(387),Ee=n(388),we=n(386),Ce=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={open:!1},n.handleOpen=n.handleOpen.bind(Object(M.a)(n)),n.discard=n.discard.bind(Object(M.a)(n)),n.confirm=n.confirm.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleOpen",value:function(){this.setState((function(){return{open:!0}}))}},{key:"handleClose",value:function(e){var t=this.props.onCloseDialog;this.setState((function(){return{open:!1}})),t(e)}},{key:"discard",value:function(){this.handleClose(t.DISCARD)}},{key:"confirm",value:function(){this.handleClose(t.CONFIRM)}},{key:"render",value:function(){var e=this.state.open,t=this.props,n=t.dialog,a=n.title,r=n.description,i=n.confirmLabel,o=n.discardLabel,c=t.Renderer;return d.a.createElement("div",null,d.a.createElement(c,{onClick:this.handleOpen}),d.a.createElement(ye.a,{open:e,onClose:this.handleClose,"aria-labelledby":"confirmation-dialog-title","aria-describedby":"confirmation-dialog-description"},d.a.createElement(we.a,{id:"confirmation-dialog-title"},a),d.a.createElement(ge.a,null,d.a.createElement(Ee.a,{id:"confirmation-dialog-description"},r)),d.a.createElement(ke.a,null,d.a.createElement(ve.a,{onClick:this.discard,autoFocus:!0},o),d.a.createElement(ve.a,{onClick:this.confirm,color:"primary"},i))))}}]),t}(u.PureComponent);Ce.CONFIRM="CONFIRM",Ce.DISCARD="DISCARD";var Se=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleConfirmationDialogAction=n.handleConfirmationDialogAction.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleConfirmationDialogAction",value:function(e){var t=this.props,n=t.onDelete,a=t.values;switch(e){case Ce.CONFIRM:n(a)}}},{key:"render",value:function(){var e,t=this.props,n=t.classes,a=t.values,r=t.touched,i=t.errors,o=t.handleChange,c=t.handleBlur,s=t.handleSubmit,l=t.onDelete,u=t.onCancelEditing,p=t.isSubmitting,f=t.t;return d.a.createElement("form",{onSubmit:function(e){e.stopPropagation(),s(e)},className:n.root,"data-testid":"project-form"},d.a.createElement(je.a,{container:!0,spacing:2},d.a.createElement(je.a,{item:!0,xs:12,sm:6},d.a.createElement(Oe.a,{id:"project-name",error:i.name&&r.name,helperText:(e="name",i[e]&&r[e]?i[e]:""),className:n.textField,onChange:o,onBlur:c,value:a.name,name:"name",label:f("entities.project.name")})),l&&d.a.createElement(Ce,{onCloseDialog:this.handleConfirmationDialogAction,dialog:{title:f("entities.project.deleteDialog.title"),description:f("entities.project.deleteDialog.description"),confirmLabel:f("common.yes"),discardLabel:f("common.no")},Renderer:function(e){var t=e.onClick;return d.a.createElement(ve.a,{onClick:t,disabled:p},f("common.delete"))}}),d.a.createElement(ve.a,{onClick:u,disabled:p,"data-testid":"cancel-btn"},f("common.cancel")),d.a.createElement(ve.a,{type:"submit",color:"primary",disabled:p,"data-testid":"submit-btn"},f("common.save"))))}}]),t}(u.PureComponent);Se.defaultProps={onCancelEditing:function(){},classes:{},values:{},touched:{},errors:{},onDelete:null};var De={name:""},Pe={mapPropsToValues:function(e){return e.project||De},enableReinitialize:!0,validationSchema:g.object().shape({name:g.string()}),handleSubmit:function(e,t){var n=t.setSubmitting;(0,t.props.onSubmit)(e),n(!1)},displayName:"ProjectForm"},xe=Object(me.a)(Object(te.a)((function(e){return{root:{margin:e.spacing(3)},textField:{width:"100%"}}}),{withTheme:!0}),Object(w.b)(),Object(be.a)(Pe))(Se),Ue=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(M.a)(n)),n.handleDelete=n.handleDelete.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.keycloak,a=t.id,r=n.initialized&&n.authenticated,i=e.keycloak.authenticated!==r,o=a&&a!==e.id;r&&(o||i)&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(T.a)(R.a.mark((function e(){var t,n,a,r,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,G(r,a);case 6:i=e.sent,this.setState((function(){return{project:i}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"closeNotification",value:function(){this.setState((function(){return{notificationMessage:null}}))}},{key:"handleSubmit",value:function(){var e=Object(T.a)(R.a.mark((function e(t){var n,a,r,i,o,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onUpdate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Q(o,t);case 6:c=e.sent,r(c),this.setState({project:c,notificationMessage:a("common.dataSaved"),notificationStatus:he.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(){var e=Object(T.a)(R.a.mark((function e(t){var n,a,r,i,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onDelete,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=13;break}return e.prev=3,e.next=6,X(o,t.id);case 6:r(t),this.setState({project:null,notificationMessage:a("common.dataDeleted"),notificationStatus:he.SUCCESS}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("error.dataLoading"),notificationStatus:he.ERROR}}))}},{key:"render",value:function(){var e,t=this.props,n=t.keycloak,a=t.onCancelEditing,r=t.t,i=this.state,o=i.notificationMessage,c=i.notificationStatus,s=i.project;return e="undefined"===typeof s?r("entities.project.notFound"):null===s?r("entities.project.deleted"):d.a.createElement(xe,{project:s,onSubmit:this.handleSubmit,onCancelEditing:a,onDelete:this.handleDelete}),d.a.createElement(d.a.Fragment,null,d.a.createElement(J,{keycloak:n},r("common.notAuthenticated")),d.a.createElement(W,{keycloak:n},e),d.a.createElement(he,{status:c,message:o,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Ue.defaultProps={onCancelEditing:function(){},onDelete:function(){},onUpdate:function(){},onError:function(){},serviceUrl:""};var Ne=H(Object(w.b)()(Ue)),Fe=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"handleSubmit",value:function(){var e=Object(T.a)(R.a.mark((function e(t){var n,a,r,i,o,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onCreate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Y(o,t);case 6:c=e.sent,r(c),this.setState({notificationMessage:a("common.dataSaved"),notificationStatus:he.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.onError,a=t.t;n(e),this.setState({notificationMessage:a("error.dataLoading"),notificationStatus:he.ERROR})}},{key:"render",value:function(){var e=this.props,t=e.keycloak,n=e.onCancelEditing,a=e.t,r=this.state,i=r.notificationMessage,o=r.notificationStatus;return d.a.createElement(d.a.Fragment,null,d.a.createElement(J,{keycloak:t},a("common.notAuthenticated")),d.a.createElement(W,{keycloak:t},d.a.createElement(xe,{onSubmit:this.handleSubmit,onCancelEditing:n})),d.a.createElement(he,{status:o,message:i,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Fe.defaultProps={onError:function(){},onCancelEditing:function(){},onCreate:function(){},serviceUrl:""};var Ae=H(Object(w.b)()(Fe));function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Re(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Me=function(){return window&&window.entando&&window.entando.keycloak&&Te({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},ze={id:"id",hidden:"hidden",locale:"locale",disableDefaultEventHandler:"disable-default-event-handler",serviceUrl:"service-url"},Le=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).keycloak=Me(),n.onCreate=U(F.create),n.onCancelEditing=U(F.cancelEditing),n.onDelete=U(F.delete),n.onUpdate=U(F.update),n.onErrorCreate=U(F.errorCreate),n.onErrorUpdate=U(F.errorUpdate),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"attributeChangedCallback",value:function(e,t,n){if(this.container&&t!==n){if(!Object.values(ze).includes(e))throw new Error("Untracked changed attribute: ".concat(e));e===ze.disableDefaultEventHandler&&this.onToggleDisableDefaultEvent(),this.render()}}},{key:"connectedCallback",value:function(){var e=this;this.container=document.createElement("div"),this.mountPoint=document.createElement("div"),this.container.appendChild(this.mountPoint);var t,n,a=this.attachShadow({mode:"open"});a.appendChild(this.container),this.jss=Object(y.b)(Te({},Object(m.a)(),{insertionPoint:this.container})),this.muiTheme=Object(O.a)({props:{MuiDialog:{container:this.mountPoint},MuiPopover:{container:this.mountPoint}}}),this.keycloak=Te({},Me(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",n=function(){e.keycloak=Te({},Me(),{initialized:!0}),e.render()},window.addEventListener(t,n),function(){window.removeEventListener(t,n)}),this.onToggleDisableDefaultEvent(),this.render(),b()(a)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}},{key:"defaultWidgetEventHandler",value:function(){var e=this;return function(t){var n=N.tableAdd,a=N.cancelEditing,r=N.create,i=N.edit,o=N.delete,c=N.tableSelect,s=N.update,l=ze.id;switch(t.type){case n:e.setAttribute(l,"");break;case i:e.hidden=!1,e.setAttribute(l,t.detail.payload.id);break;case r:case a:case s:e.hidden=!0;break;case o:e.hidden=!0,e.setAttribute(l,"");break;case c:e.setAttribute(l,t.detail.payload.id);break;default:throw new Error("Unsupported event: ".concat(t.type))}}}},{key:"onToggleDisableDefaultEvent",value:function(){var e,t,n="true"===this.getAttribute(ze.disableDefaultEventHandler);if(n!==this.defaultEventHandlerDisabled){if(n)this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent();else{var a=this.defaultWidgetEventHandler();this.unsubscribeFromWidgetEvents=(e=Object.values(N),t=a,e.forEach((function(e){return window.addEventListener(e,t)})),function(){e.forEach((function(e){return window.removeEventListener(e,t)}))})}this.defaultEventHandlerDisabled=n}}},{key:"render",value:function(){var e=this.getAttribute(ze.serviceUrl)||"";if("true"===this.getAttribute(ze.hidden))f.a.render(d.a.createElement(d.a.Fragment,null));else{var t=this.getAttribute(ze.locale);x(t);var n=this.getAttribute(ze.id),a=n?d.a.createElement(Ne,{id:n,onUpdate:this.onUpdate,onError:this.onErrorUpdate,serviceUrl:e},null):d.a.createElement(Ae,{onCreate:this.onCreate,onError:this.onErrorCreate,serviceUrl:e},null);f.a.render(d.a.createElement(k.Provider,{value:this.keycloak},d.a.createElement(v.b,{jss:this.jss},d.a.createElement(j.a,{theme:this.muiTheme},a))),this.mountPoint)}}}],[{key:"observedAttributes",get:function(){return Object.values(ze)}}]),t}(Object(s.a)(HTMLElement));customElements.define("project-form",Le)}},[[197,1,2]]]);
//# sourceMappingURL=main.cb278903.chunk.js.map