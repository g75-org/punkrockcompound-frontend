if (self.CavalryLogger) { CavalryLogger.start_js(["6qJn9fd"]); }

__d("useFXIMCometProfilePhotoSyncReminderOnSaveHandler_fxim.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useFXIMCometProfilePhotoSyncReminderOnSaveHandler_fxim",selections:[{alias:null,args:null,concreteType:"FXIMQueries",kind:"LinkedField",name:"fx_identity_management",plural:!1,selections:[{alias:null,args:null,concreteType:"FXIMIdentityManagementScreenResources",kind:"LinkedField",name:"screen_resources",plural:!1,selections:[{alias:null,args:null,concreteType:"FXIMIdentityManagementScreenResourcesRemindersChangePhoto",kind:"LinkedField",name:"reminders_change_photo",plural:!1,selections:[{args:null,documentName:"useFXIMCometProfilePhotoSyncReminderOnSaveHandler_fxim",fragmentName:"FXIMCometProfilePhotoSyncReminderDialog_reminders_change_photo",fragmentPropName:"reminders_change_photo",kind:"ModuleImport"}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null};e.exports=a}),null);
__d("FXIMCometProfilePhotoSyncPassiveReminder_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FXIMCometProfilePhotoSyncPassiveReminder_textWithEntities",selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],type:"TextWithEntities",abstractKey:null};e.exports=a}),null);
__d("fximCometProfilePhotoSyncPassiveReminder_query.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"fximCometProfilePhotoSyncPassiveReminder_query"};e.exports=a}),null);
__d("ProfileCometProfilePictureMediaPickerPhoto_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Variable",name:"scale",variableName:"scale"},b={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometProfilePictureMediaPickerPhoto_media",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:[a],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},b,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:"thumbnail_image",args:[a,{kind:"Literal",name:"sizing",value:"cover-fill-cropped"},{kind:"Literal",name:"width",value:105}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[b],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_profile_picture",storageKey:null}],type:"Photo",abstractKey:null}],type:"Media",abstractKey:"__isMedia"}}();e.exports=a}),null);
__d("FXIMLoggerReminderReferral",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({EDIT_PROFILE:"edit_profile",LONG_PRESS_PROFILE:"long_press_profile",OTHER:"other"});c=a;f["default"]=c}),66);
__d("ProfilePhotoSource",[],(function(a,b,c,d,e,f){a=Object.freeze({FEED:"feed",TIMELINE:"timeline",NUX:"nux",NUX_PROFILE_PIC_QP:"nux_profile_pic_qp",WELCOME:"welcome",PHOTO_VIEW:"photo_view",SUGGESTIONS:"suggestions",MEGAPHONE_ACTIVATION:"megaphone_activation",MESSENGER:"messenger",MESSENGER_ONLY_ACCOUNT_CREATION:"messenger_only_account_creation",PROMO_LANDING:"promo_landing",CELEBRATE_PRIDE:"celebrate_pride",EXPIRING:"expiring",UNKNOWN:"unknown",VERTEX_RESIDENCE:"vertex_residence",MISSIONS:"missions",ATWORK_NUX:"atwork_nux",ATWORK_MEGAPHONE:"atwork_megaphone",ATWORK_SIGNUP:"atwork_signup",ATWORK_SIGNUP_FROM_FACEBOOK:"atwork_signup_from_facebook",ATWORK_PROFILE_NUX:"atwork_profile_nux",FAMILY_MEMBER:"family_member",FUNDRAISER:"fundraiser",INFO_REQUEST_FULFILL:"info_request_fulfill",PROFILE_VIDEO:"profile_video",HEISMAN_CTA:"heisman_cta",HEISMAN_LANDING_PAGE:"heisman_landing_page",IORG:"internet_org",BOOKMARK:"bookmark",LEGACY_CONTACT:"legacy_contact",SLIDESHOW_PAGES_COMPOSER:"slideshow_pages_composer",WATERMARK:"watermark",PAGE_CREATION:"page_creation",ROOM_PROFILE:"room_profile",SHOWS_ACTION_ITEM:"shows_action_item",SHOW_CREATION:"show_creation",STALE_PROFILE_PICTURE_CTA:"stale_profile_pic_cta",REGISTRATION:"registration",GEMSTONE_ONBOARD:"gemstone_onboard",GEMSTONE_EDIT_PROFILE:"gemstone_edit_profile",PAGES_VIDEO_LIBRARY_VCK:"pages_video_library_vck",KOTOTORO_USER_PROFILE:"kototoro_user_profile",FRAME_ME_BOT:"wp_frame_me_bot",AVATARS:"avatars",PAGE_ADMIN_EDITING:"page_admin_editing",WORKPLACE_ADMIN_PANEL:"workplace_admin_panel",COMMUNITY_PROFILE_MIGRATION:"community_profile_migration"});f["default"]=a}),66);
__d("fximCometReminderReferralFromProfilePhotoSource",[],(function(a,b,c,d,e,f,g){"use strict";function a(a){switch(a){case"timeline":return"edit_profile";default:return"other"}}g.fximCometReminderReferralFromProfilePhotoSource=a}),98);
__d("useFXIMCometProfilePhotoSyncReminderOnSaveHandler",["CometRelay","Promise","fximCometReminderReferralFromProfilePhotoSource","react","requireDeferred","useCometDeferredDialog","useFXIMCometProfilePhotoSyncReminderOnSaveHandler_fxim.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react").useCallback,j=c("requireDeferred")("FXIMCometProfilePhotoSyncReminderNullDialog.react").__setRef("useFXIMCometProfilePhotoSyncReminderOnSaveHandler");function a(a){var e=a.fragment,f=a.source;a=d("CometRelay").useFragment(h!==void 0?h:h=b("useFXIMCometProfilePhotoSyncReminderOnSaveHandler_fxim.graphql"),e);e=a.fx_identity_management;var g=e==null?void 0:(a=e.screen_resources)==null?void 0:a.reminders_change_photo;e=g!=null?d("CometRelay").ModuleResource.read(g):null;var k=c("useCometDeferredDialog")((a=e)!=null?a:j);e=i(function(){return new(b("Promise"))(function(a){if(g){var b=d("fximCometReminderReferralFromProfilePhotoSource").fximCometReminderReferralFromProfilePhotoSource(f);k({fragment:g,loggerReminderReferral:b},a)}else a(!0)})},[g,k,f]);return e}g["default"]=a}),98);
__d("FXIMCometProfilePhotoSyncPassiveReminder.react",["CometBoldedEntityRenderer","CometExternalLinkedEntityRenderer","CometRelay","CometTextWithEntitiesRelay.react","FXIMCometProfilePhotoSyncPassiveReminder_textWithEntities.graphql","FXIMRemindersLogger","fximCometReminderReferralFromProfilePhotoSource","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useEffect;function a(a){var e=a.source;a=a.textWithEntities;a=d("CometRelay").useFragment(h!==void 0?h:h=b("FXIMCometProfilePhotoSyncPassiveReminder_textWithEntities.graphql"),a);j(function(){var a=d("fximCometReminderReferralFromProfilePhotoSource").fximCometReminderReferralFromProfilePhotoSource(e);d("FXIMRemindersLogger").fximRemindersLogShown("edit_photo_reminder",a)},[e]);return i.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:{"*":[c("CometExternalLinkedEntityRenderer"),c("CometBoldedEntityRenderer")]},textWithEntities:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("fximCometProfilePhotoSyncPassiveReminder",["CometRelay","FXIMCometProfilePhotoSyncPassiveReminder.react","fximCometProfilePhotoSyncPassiveReminder_query.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a,e){var f;a=d("CometRelay").readInlineData(h!==void 0?h:h=b("fximCometProfilePhotoSyncPassiveReminder_query.graphql"),a);f=(f=a.fx_identity_management)==null?void 0:(f=f.screen_resources)==null?void 0:f.profile_picture_alt_disclaimer;a=(a=a.fx_identity_management)==null?void 0:(a=a.bci_profile_picture_alt_disclaimer_for_delegate_page)==null?void 0:a.subtext;if(f!=null)return i.jsx(c("FXIMCometProfilePhotoSyncPassiveReminder.react"),{source:e,textWithEntities:f});else if(a!=null)return i.jsx(c("FXIMCometProfilePhotoSyncPassiveReminder.react"),{source:e,textWithEntities:a});else return null}g["default"]=a}),98);
__d("ProfileCometProfilePictureTemporaryOptions",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({CUSTOM:-2,DAY:86400,HOUR:3600,MONTH:2592e3,PERMANENT:-1,WEEK:604800});f["default"]=a}),66);
__d("ProfileCometExpirationTimeSelector.react",["fbt","CometCardedDialogLoadingState.react","CometSelect.react","CometTimestamp.react","JSResourceForInteraction","ProfileCometProfilePictureEditStrings","ProfileCometProfilePictureTemporaryOptions","react","useCometLazyDialog","useServerTime"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useEffect,k=b.useState,l=c("JSResourceForInteraction")("ProfileCometExpirationTimeSelectorDialog.react").__setRef("ProfileCometExpirationTimeSelector.react"),m=[{label:d("ProfileCometProfilePictureEditStrings").TEMPORARY_OPTION_ONE_HOUR,value:c("ProfileCometProfilePictureTemporaryOptions").HOUR},{label:d("ProfileCometProfilePictureEditStrings").TEMPORARY_OPTION_ONE_DAY,value:c("ProfileCometProfilePictureTemporaryOptions").DAY},{label:d("ProfileCometProfilePictureEditStrings").TEMPORARY_OPTION_ONE_WEEK,value:c("ProfileCometProfilePictureTemporaryOptions").WEEK},{label:d("ProfileCometProfilePictureEditStrings").TEMPORARY_OPTION_ONE_MONTH,value:c("ProfileCometProfilePictureTemporaryOptions").MONTH},{label:d("ProfileCometProfilePictureEditStrings").TEMPORARY_OPTION_NEVER,value:c("ProfileCometProfilePictureTemporaryOptions").PERMANENT},{label:d("ProfileCometProfilePictureEditStrings").TEMPORARY_OPTION_CUSTOM,value:c("ProfileCometProfilePictureTemporaryOptions").CUSTOM}],n=function(){return i.jsx(c("CometCardedDialogLoadingState.react"),{title:h._(/*FBT_CALL*/"Switch back to previous profile picture at"/*FBT_CALL*/)})};function a(a){var b=a.disabled;b=b===void 0?!1:b;var d=a.onChange;a=a.value;a=k((a=a)!=null?a:c("ProfileCometProfilePictureTemporaryOptions").PERMANENT);var e=a[0],f=a[1];a=k(null);var g=a[0],h=a[1];a=c("useServerTime")();a=c("CometTimestamp.react").getTimestamp(a,new Date((a=g)!=null?a:0));a=[g!=null?{label:a,value:g}:null].concat(m).filter(Boolean);var o=c("useCometLazyDialog")(l,n),p=o[0];j(function(){g!=null?d(Math.ceil((g-Date.now())/1e3)):e===c("ProfileCometProfilePictureTemporaryOptions").PERMANENT?d(null):d(e)},[g,e,d]);return i.jsx(c("CometSelect.react"),{disabled:b,onChange:function(a){a===c("ProfileCometProfilePictureTemporaryOptions").CUSTOM?p({onSelect:function(a){return h(a.getTime())}}):(f(a),h(null))},options:a,selectedValue:(o=g)!=null?o:e,size:"full"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometProfilePictureAddFrameAction.react",["ix","ProfileCometProfilePictureEditDialogContext","ProfileCometProfilePictureEditStrings","ProfileCometProfilePictureFrameSelectorContainer.entrypoint","TetraButton.react","fbicon","react","useCometEntrypointPrerenderer","useProfileCometEngagementEventsClickCallback"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useContext;function a(a){var b=a.profileID;a=k(c("ProfileCometProfilePictureEditDialogContext"));var e=a.dispatch,f=a.loadEntryPoint;a=c("useCometEntrypointPrerenderer")("button",c("ProfileCometProfilePictureFrameSelectorContainer.entrypoint"),{profileID:b});var g=a[0],l=a[1];a=a[2];var m=c("useProfileCometEngagementEventsClickCallback")({feature_item:"add_frame",feature_surface:null,profile_feature:"profile_picture",profile_section:"edit_profile"}),n=j(function(){f&&f({profileID:b}),m(),e({type:"ADD_FRAME"})},[e,f,m,b]);return i.jsx(c("TetraButton.react"),{icon:d("fbicon")._(h("493181"),16),label:d("ProfileCometProfilePictureEditStrings").ADD_FRAME,onHoverIn:g,onHoverOut:l,onPress:n,onPressIn:a,testid:void 0,type:"secondary"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometProfilePictureZoomCropImage.react",["ix","CometImage.react","FBLogger","Locale","ProfileCometProfilePictureEditStrings","TetraIcon.react","TetraText.react","clamp","fbicon","react","useGlobalEventListener","useProfileCometEngagementEventsClickCallback"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useEffect,l=b.useRef,m=b.useState;function n(a,b,c){var d=(.5-a[0])*b[0]*c;a=(.5-a[1])*b[1]*c;return{transform:"translate3d("+d+"px, "+a+"px, 0) scale("+c+")"}}function o(a){switch(a){case"circle":return{WebkitMaskImage:"-webkit-radial-gradient(white, black)",borderRadius:"50%"};case"rect":default:return{}}}function p(a){return{height:a[1]+"px",width:a[0]+"px"}}function q(a,b){var c=(d("Locale").isRTL()?1:-1)*(b[0]-a[0])/2;b=-(b[1]-a[1])/2;return{transform:"translate("+c+"px, "+b+"px)"}}function r(){var a=(d("Locale").isRTL()?1:-1)*50;return{transform:"translateX("+a+"%)"}}function s(a,b,d,e){var f=b[0]/2/(d[0]*e);b=b[1]/2/(d[1]*e);return[c("clamp")(a[0],f,1-f),c("clamp")(a[1],b,1-b)]}function t(a){if(a instanceof MouseEvent)return[a.clientX,a.clientY];if(a instanceof TouchEvent)return[a.targetTouches[0].pageX,a.targetTouches[0].pageY];throw c("FBLogger")("profile_comet").mustfixThrow("dragging instance must be a valid MoutEvent or TouchEvent")}function a(a){var b=a.center,e=a.cropShape;e=e===void 0?"circle":e;var f=a.cropSize,g=a.disabled,u=g===void 0?!1:g;g=a.engagementEventsData;var v=g===void 0?null:g,w=a.imageSize;g=a.imageSrc;var x=a.onMove,y=a.showCropped;y=y===void 0?!1:y;a=a.zoom;var z=a===void 0?1:a,A=l([0,0]),B=l([0,0]),C=l(1);a=m(!1);var D=a[0],E=a[1];a=m(!0);var F=a[0],G=a[1],H=c("useProfileCometEngagementEventsClickCallback")(babelHelpers["extends"]({},v,{feature_item:"preview"}));a=j(function(a){a.preventDefault()},[]);var I=j(function(a){if(u)return;a=t(a.nativeEvent);var c=a[0];a=a[1];E(!0);G(!1);A.current=[c,a];B.current=b},[b,u]),J=j(function(a){v&&H(),E(!1),a.stopPropagation()},[v,H]),K=j(function(a){if(!D)return;a=t(a);var b=a[0];a=a[1];b=b-A.current[0];a=a-A.current[1];b=[B.current[0]-b/(w[0]*C.current),B.current[1]-a/(w[1]*C.current)];x(s(b,f,w,C.current))},[f,w,D,x]);k(function(){z!==C.current&&(C.current=z,x(s(b,f,w,z)))},[b,f,w,x,z]);c("useGlobalEventListener")("mousemove",D?K:null,{capture:!0});c("useGlobalEventListener")("touchmove",D?K:null,{capture:!0});c("useGlobalEventListener")("mouseup",D?J:null,{capture:!0});c("useGlobalEventListener")("touchend",D?J:null,{capture:!0});return i.jsxs("div",{className:"k4urcfbm l9j0dhe7 stjgntxs ni8dbmo4 datstx6m",children:[i.jsxs("div",{className:"ke6wolob rk01pc8j l9j0dhe7 f9o22wc5 ad2k81qe"+(y?" stjgntxs ni8dbmo4":""),style:p(f),children:[i.jsx("div",{className:"l9j0dhe7 stjgntxs ni8dbmo4",style:babelHelpers["extends"]({},o(e),p(f)),children:i.jsx("div",{className:"pmk7jnqg soycq5t1",style:q(f,w),children:i.jsx("div",{style:n(b,w,C.current),children:i.jsx(c("CometImage.react"),{src:g})})})}),i.jsx("div",{className:"kr520xx4 pmk7jnqg akz8cqyu soycq5t1",style:q(f,w),children:i.jsx("div",{className:u?"":"a7woen2v",onDragStart:a,onMouseDown:I,onTouchStart:I,style:n(b,w,C.current),children:i.jsx(c("CometImage.react"),{src:g})})})]}),!u&&F&&i.jsxs("div",{className:"adce92kx kfkz5moi pmk7jnqg cxgpxx05 tw6a2znq d1544ag0 sj5x9vvc j83agx80 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 ora8z2hr bp9cbjyn",style:r(),children:[i.jsx("div",{className:"oi9244e8 j83agx80",children:i.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(h("697185"),20)})}),i.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"headlineEmphasized4",children:d("ProfileCometProfilePictureEditStrings").DRAG_INSTRUCTIONS})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometProfilePictureZoomCrop.react",["ProfileCometProfilePictureZoomControl.react","ProfileCometProfilePictureZoomCropImage.react","clamp","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useEffect,k=b.useState,l={"default":{height:"cmsa8f9s",width:"f36cnskx","@media (max-width: 700px)":{maxWidth:"axo7380y"}},responsive:{"@media (max-width: 564px)":{height:"nzwjwy10"}}},m=5,n=180;function o(a){return Number(a.toFixed(m))}function p(a,b,c){b=Math.max(a[0]/b[0],a[1]/b[1]);a=Math.max(Math.min(a[0]/c[0],a[1]/c[1]),b);return[o(b),o(a)]}function q(a){return a[0]/a[1]===1}function a(a){var b=a.cropShape;b=b===void 0?"circle":b;var d=a.cropSize,e=a.disabled;e=e===void 0?!1:e;var f=a.engagementEventsData;f=f===void 0?null:f;var g=a.imageSize,m=a.imageSrc,r=a.minSize,s=a.onChange,t=a.showCropped;t=t===void 0?!1:t;a=a.xstyle;r=p(d,g,(r=r)!=null?r:[n,n]);var u=k(r[0]),v=u[0],w=u[1];u=k([.5,.5]);var x=u[0],y=u[1];u=!(v===r[0]&&q(g));var z=i(function(a){y(a)},[]),A=i(function(a){w(a)},[]);j(function(){var a=d[1]/(g[1]*v),b=d[0]/(g[0]*v),e=x[0]-b/2,f=x[1]-a/2;a=o(c("clamp")(a,0,1));b=o(c("clamp")(b,0,1));s({height:a,width:b,x:o(c("clamp")(e,0,1-b)),y:o(c("clamp")(f,0,1-a))})},[x,d,g,s,v]);return h.jsxs("div",{children:[h.jsx("div",{className:c("stylex")((a=a)!=null?a:[l["default"],l.responsive]),children:h.jsx(c("ProfileCometProfilePictureZoomCropImage.react"),{center:x,cropShape:b,cropSize:d,disabled:e||!u,engagementEventsData:f,imageSize:g,imageSrc:m,onMove:z,showCropped:t,zoom:v})}),h.jsx(c("ProfileCometProfilePictureZoomControl.react"),{disabled:e,engagementEventsData:f,max:r[1],min:r[0],onChange:A,step:.1,value:v})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometProfilePictureEditPreview.react",["fbt","ix","BaseRow.react","BaseRowItem.react","CometCard.react","CometFormTextArea.react","CometProgressIndicator.react","CometRelay","ProfileCometContextualProfileContext","ProfileCometExpirationTimeSelector.react","ProfileCometProfilePictureEditStrings","ProfileCometProfilePictureSetMutation","ProfileCometProfilePictureTemporaryOptions","ProfileCometProfilePictureZoomCrop.react","Promise","TetraButton.react","TetraIcon.react","TetraText.react","fbicon","gkx","promiseDone","react","stylex","useIsMountedRef","useProfileCometEngagementEventsClickCallback","useProfileEngagementClickCallback","useProfileEngagementImpression"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");e=d("react");var k=e.useCallback,l=e.useContext,m=e.useRef,n=e.useState,o={cancelButton:{marginEnd:"cgat1ltu"},cropPhotoButton:{marginEnd:"tvfksri0"},description:{paddingTop:"discj3wi",paddingEnd:"hv4rvrfc",paddingBottom:"ihqw7lf3",paddingStart:"dati1w0a"},footerWithDivider:{alignItems:"bp9cbjyn",borderTop:"l6v480f0",display:"j83agx80",justifyContent:"bkfpd7mw",paddingTop:"discj3wi",paddingEnd:"hv4rvrfc",paddingBottom:"ihqw7lf3",paddingStart:"dati1w0a"},privacyDisclaimer:{alignItems:"bp9cbjyn",display:"j83agx80",marginBottom:"sjgh65i0",marginEnd:"wkznzc2l",marginStart:"dhix69tm"},privacyIcon:{display:"j83agx80",marginEnd:"tvfksri0"},privacyText:{display:"j83agx80"},saveButton:{marginStart:"kkf49tns"},savingIndicator:{marginEnd:"cgat1ltu"},spacingBottom:{marginBottom:"sjgh65i0",marginEnd:"wkznzc2l",marginStart:"dhix69tm"},temporaryInput:{alignItems:"bp9cbjyn",display:"j83agx80",justifyContent:"i1fnvgqd",paddingBottom:"f10w8fjw",paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a",paddingTop:"pybr56ya"}},p=300,q=function(){return b("Promise").resolve(!0)};function a(a){var b=a.showPrivacyDisclaimerGlobe;b=b===void 0?!0:b;var e=a.privacyDisclaimer,f=a.canCropPhoto,g=f===void 0?!1:f;f=a.canMakeTemporary;f=f===void 0?!1:f;var r=a.onCancel,s=a.onSave,t=s===void 0?q:s,u=a.onSaveSuccess,v=a.photo,w=a.profileID,x=a.source,y=a.targetType;s=a.xstyle;var z=d("CometRelay").useRelayEnvironment(),A=m(null);a=n("");var B=a[0],C=a[1],D=c("useIsMountedRef")();a=n(!1);var E=a[0],F=a[1];a=l(c("ProfileCometContextualProfileContext"));var G=a.isContextualProfileView;a=a.userID;var H=n(!1),I=H[0],J=H[1];H=n(!1);var K=H[0],L=H[1];H=n(c("ProfileCometProfilePictureTemporaryOptions").WEEK);var M=H[0];H=H[1];a={engagement_type:"click",event_metadata:{entry_point:"self-view_edit_profile",item_edited:"profile_picture",type:"profile_picture"},item_subtype:"save_button",item_type:"edit_page",product_bucket:"contextual_profile",profile_id_dummy:a,subsurface:"group_contextual_profile_edit_page",surface:"group_contextual_profile"};var N=c("useProfileEngagementClickCallback")(a);a={mark_temporary_time:M==null?c("ProfileCometProfilePictureTemporaryOptions").PERMANENT.toString():M.toString()};var O={feature_surface:"edit_profile_picture_save_screen",profile_feature:"profile_picture",profile_section:"edit_form"},P=c("useProfileCometEngagementEventsClickCallback")(babelHelpers["extends"]({},O,{event_metadata:babelHelpers["extends"]({},a),feature_item:"save"})),Q=c("useProfileCometEngagementEventsClickCallback")(babelHelpers["extends"]({},O,{event_metadata:babelHelpers["extends"]({},a),feature_item:"cancel"})),R=c("useProfileCometEngagementEventsClickCallback")(babelHelpers["extends"]({},O,{feature_item:"make_temporary"})),S=k(function(){F(!0),P(),G&&N(),d("ProfileCometProfilePictureSetMutation").setProfilePicture(z,{caption:B,expirationTime:K?M:null,photoID:v.id,profileID:w,scaledCropRect:A.current||void 0,skipCropping:g?!I:!1,source:x||void 0,targetType:y},{onCompleted:function(){u()},onError:function(a){D.current&&F(!1)}})},[g,B,z,M,G,I,D,N,P,u,v.id,w,K,x,y]);a=k(function(){c("promiseDone")(t().then(function(a){return a&&S()}))},[t,S]);O=k(function(){r(),Q()},[r,Q]);var T=k(function(){L(!K),R()},[L,K,R]),U=k(function(a){A.current=a},[]),V=k(function(a){C(a)},[]),W=c("useProfileEngagementImpression")({item_subtype:"crop_photo",item_type:"cropping_button",product_bucket:"profile_core",surface:"profile_photo"}),X=c("useProfileEngagementClickCallback")({item_subtype:"crop_photo",item_type:"cropping_button",product_bucket:"profile_core",surface:"profile_photo"},function(){return J(!I)}),Y=j.jsx(c("ProfileCometProfilePictureZoomCrop.react"),{cropSize:[p,p],disabled:E,imageSize:[v.width,v.height],imageSrc:v.uri,onChange:U,xstyle:s}),Z=null;g&&(Y=j.jsx(c("ProfileCometProfilePictureZoomCrop.react"),{cropSize:[p,p],disabled:E,imageSize:[v.width,v.height],imageSrc:v.uri,onChange:U,showCropped:I,xstyle:s}),Z=j.jsx("div",{ref:W,children:j.jsx(c("BaseRowItem.react"),{xstyle:o.cropPhotoButton,children:j.jsx(c("TetraButton.react"),{"aria-pressed":I,icon:d("fbicon")._(i("482559"),16),label:h._(/*FBT_CALL*/"Crop photo"/*FBT_CALL*/),onPress:X,reduceEmphasis:I,ref:W,type:I?"primary":"secondary"})})}));s=(U=e)!=null?U:G?h._(/*FBT_CALL*/"Your group profile photo is visible to all members."/*FBT_CALL*/):d("ProfileCometProfilePictureEditStrings").PRIVACY_DISCLAIMER;X=j.jsxs("div",{className:c("stylex")(o.privacyDisclaimer),children:[b?j.jsx("div",{className:c("stylex")(o.privacyIcon),children:j.jsx(c("TetraIcon.react"),{color:"secondary",icon:d("fbicon")._(i("560120"),20)})}):null,j.jsx("div",{className:c("stylex")(o.privacyText),children:j.jsx(c("TetraText.react"),{color:"secondary",testid:void 0,type:"body2",children:s})})]});return j.jsxs("div",{children:[!v.isProfilePicture&&!G&&j.jsx("div",{className:c("stylex")(o.description),children:j.jsx(c("CometFormTextArea.react"),{label:d("ProfileCometProfilePictureEditStrings").ADD_DESCRIPTION,minRows:2,onValueChange:V,value:B})}),Y,(Z!==null||f)&&!v.isProfilePicture&&j.jsxs(c("BaseRow.react"),{align:"center",xstyle:o.spacingBottom,children:[Z,f&&!G&&j.jsx(c("BaseRowItem.react"),{children:j.jsx(c("TetraButton.react"),{"aria-pressed":K,icon:d("fbicon")._(i("478793"),16),label:d("ProfileCometProfilePictureEditStrings").MAKE_TEMPORARY,onPress:T,reduceEmphasis:K,type:K?"primary":"secondary"})})]}),K&&j.jsx(c("BaseRow.react"),{xstyle:o.spacingBottom,children:j.jsx(c("BaseRowItem.react"),{expanding:!0,children:j.jsx(c("CometCard.react"),{border:"solid",dropShadow:1,children:j.jsxs("div",{className:c("stylex")(o.temporaryInput),children:[j.jsx(c("TetraText.react"),{type:"body3",children:d("ProfileCometProfilePictureEditStrings").TEMPORARY_PROFILE_PIC_CONTROL}),j.jsx(c("ProfileCometExpirationTimeSelector.react"),{disabled:E,onChange:H,value:M})]})})})}),c("gkx")("1224637")?null:X,j.jsxs("div",{className:c("stylex")(o.footerWithDivider),children:[j.jsx("div",{className:c("stylex")(o.cancelButton),children:E?j.jsx("div",{className:c("stylex")(o.savingIndicator),children:j.jsx(c("CometProgressIndicator.react"),{})}):j.jsx(c("TetraButton.react"),{label:d("ProfileCometProfilePictureEditStrings").CANCEL,onPress:O,reduceEmphasis:!0,type:"secondary"})}),j.jsx("div",{className:c("stylex")(o.saveButton),children:j.jsx(c("TetraButton.react"),{disabled:E,label:d("ProfileCometProfilePictureEditStrings").SAVE,onPress:a,padding:"wide",testid:void 0})})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometProfilePictureMediaPickerPhoto.react",["CometBackgroundImage.react","CometPressable.react","CometRelay","ProfileCometProfilePictureEditDialogContext","ProfileCometProfilePictureEditStrings","ProfileCometProfilePictureMediaPickerPhoto_media.graphql","getRoundedCorners","react","stylex","useProfileCometEngagementEventsClickCallback"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useCallback,k=e.useContext,l={borderBottomEndRadius:{borderBottomEndRadius:"uo3d90p7"},borderBottomStartRadius:{borderBottomStartRadius:"l82x9zwi"},borderTopEndRadius:{borderTopEndRadius:"pw54ja7n"},borderTopStartRadius:{borderTopStartRadius:"ue3kfks5"},imageBorder:{bottom:"i09qtzwb",boxShadow:"oaz4zybt",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},root:{height:"datstx6m",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",width:"k4urcfbm"}};function a(a){var e,f=a.media,g=a.photoSection,m=a.roundCorner,n=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometProfilePictureMediaPickerPhoto_media.graphql"),f);f=((a=n.thumbnail_image)==null?void 0:a.uri)||"";var o=n.id||"",p=((a=n.image)==null?void 0:a.height)||0,q=((a=n.image)==null?void 0:a.uri)||"",r=((a=n.image)==null?void 0:a.width)||0;a=(a=n==null?void 0:n.accessibility_caption)!=null?a:d("ProfileCometProfilePictureEditStrings").SELECT_PHOTO;var s=k(c("ProfileCometProfilePictureEditDialogContext")),t=s.dispatch;s=s.state;var u=c("useProfileCometEngagementEventsClickCallback")({content_id:o,event_metadata:{photo_section:(e=g)!=null?e:""},feature_item:"photo_item",feature_surface:"edit_profile_picture_select_photo_screen",profile_feature:"profile_picture",profile_section:"edit_form"});e=j(function(){g!=null&&u(),t({image:{height:p,id:o,isProfilePicture:n.is_profile_picture||!1,uri:q,width:r},type:"SELECT_PHOTO"})},[g,u,t,p,o,q,r,n.is_profile_picture]);var v=[c("getRoundedCorners").CORNERS.BOTTOM_END,c("getRoundedCorners").CORNERS.BOTTOM_START,c("getRoundedCorners").CORNERS.TOP_END,c("getRoundedCorners").CORNERS.TOP_START].map(function(a){return c("getRoundedCorners").hasCorner(m,a)}),w=v[0],x=v[1],y=v[2];v=v[3];return i.jsxs(c("CometPressable.react"),{disabled:s.isUploading,onPress:e,xstyle:[l.root,w&&l.borderBottomEndRadius,x&&l.borderBottomStartRadius,y&&l.borderTopEndRadius,v&&l.borderTopStartRadius],children:[i.jsx(c("CometBackgroundImage.react"),{alt:a,src:f}),i.jsx("div",{className:c("stylex")(w&&l.borderBottomEndRadius,x&&l.borderBottomStartRadius,y&&l.borderTopEndRadius,v&&l.borderTopStartRadius,l.imageBorder)})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);