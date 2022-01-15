if (self.CavalryLogger) { CavalryLogger.start_js(["ts6M1ER"]); }

__d("useCometHomeChatSettingsQuery.graphql",["useCometHomeChatSettingsQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"call_blocked_until",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"chat_sounds_on",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"chat_tabs_turned_off",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"chat_visibility",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"chat_sidebar_is_collapsed",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"is_active_status_viewable",storageKey:null};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometHomeChatSettingsQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[a,c,d,e,f,{alias:null,args:null,concreteType:"PresenceViewerBasedSettings",kind:"LinkedField",name:"presence_view_side_settings",plural:!1,selections:[g],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"useCometHomeChatSettingsQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[a,c,d,e,f,{alias:null,args:null,concreteType:"PresenceViewerBasedSettings",kind:"LinkedField",name:"presence_view_side_settings",plural:!1,selections:[g,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:b("useCometHomeChatSettingsQuery_facebookRelayOperation"),metadata:{},name:"useCometHomeChatSettingsQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("MWCallBlockedUntilSettingMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4521891241180564"}),null);
__d("MWCallBlockedUntilSettingMutation.graphql",["MWCallBlockedUntilSettingMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"SetCallBlockedUntilSettingResponsePayload",kind:"LinkedField",name:"set_call_blocked_until_setting",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"call_blocked_until",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"MWCallBlockedUntilSettingMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"MWCallBlockedUntilSettingMutation",selections:c},params:{id:b("MWCallBlockedUntilSettingMutation_facebookRelayOperation"),metadata:{},name:"MWCallBlockedUntilSettingMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("MWChatChangeSoundsSettingMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="2293508424080940"}),null);
__d("MWChatChangeSoundsSettingMutation.graphql",["MWChatChangeSoundsSettingMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"SetChatSoundsSettingResponsePayload",kind:"LinkedField",name:"set_chat_sounds_setting",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"chat_sounds_on",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"MWChatChangeSoundsSettingMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"MWChatChangeSoundsSettingMutation",selections:c},params:{id:b("MWChatChangeSoundsSettingMutation_facebookRelayOperation"),metadata:{},name:"MWChatChangeSoundsSettingMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("MWChatChangeTurnOffTabsSettingMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="2558711324213856"}),null);
__d("MWChatChangeTurnOffTabsSettingMutation.graphql",["MWChatChangeTurnOffTabsSettingMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"SetTurnOffChatTabsSettingResponsePayload",kind:"LinkedField",name:"set_turn_off_chat_tabs_setting",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"chat_tabs_turned_off",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"MWChatChangeTurnOffTabsSettingMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"MWChatChangeTurnOffTabsSettingMutation",selections:c},params:{id:b("MWChatChangeTurnOffTabsSettingMutation_facebookRelayOperation"),metadata:{},name:"MWChatChangeTurnOffTabsSettingMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("MWChatSoundsSettingSubscription_MessengerSoundsSettingSubscription_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3427061027335727"}),null);
__d("MWChatSoundsSettingSubscription_MessengerSoundsSettingSubscription.graphql",["MWChatSoundsSettingSubscription_MessengerSoundsSettingSubscription_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"MessengerChatSoundsSettingSubscribeResponsePayload",kind:"LinkedField",name:"messenger_chat_sounds_setting_subscribe",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"chat_sounds_enabled",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"MWChatSoundsSettingSubscription_MessengerSoundsSettingSubscription",selections:c,type:"Subscription",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"MWChatSoundsSettingSubscription_MessengerSoundsSettingSubscription",selections:c},params:{id:b("MWChatSoundsSettingSubscription_MessengerSoundsSettingSubscription_facebookRelayOperation"),metadata:{subscriptionName:"messenger_chat_sounds_setting_subscribe"},name:"MWChatSoundsSettingSubscription_MessengerSoundsSettingSubscription",operationKind:"subscription",text:null}}}();e.exports=a}),null);
__d("MWChatTabsSettingSubscription_MessengerChatTabsSettingSubscription_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="2523273457796088"}),null);
__d("MWChatTabsSettingSubscription_MessengerChatTabsSettingSubscription.graphql",["MWChatTabsSettingSubscription_MessengerChatTabsSettingSubscription_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"MessengerChatTabsSettingSubscribeResponsePayload",kind:"LinkedField",name:"messenger_chat_tabs_setting_subscribe",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"chat_tabs_enabled",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"MWChatTabsSettingSubscription_MessengerChatTabsSettingSubscription",selections:c,type:"Subscription",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"MWChatTabsSettingSubscription_MessengerChatTabsSettingSubscription",selections:c},params:{id:b("MWChatTabsSettingSubscription_MessengerChatTabsSettingSubscription_facebookRelayOperation"),metadata:{subscriptionName:"messenger_chat_tabs_setting_subscribe"},name:"MWChatTabsSettingSubscription_MessengerChatTabsSettingSubscription",operationKind:"subscription",text:null}}}();e.exports=a}),null);
__d("MWCallBlockedUntilSettingMutation",["MWCallBlockedUntilSettingMutation.graphql","createCommitMutation_DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";var h;a=d("createCommitMutation_DEPRECATED").createCommitMutationForEnvironment_DEPRECATED({mutation:h!==void 0?h:h=b("MWCallBlockedUntilSettingMutation.graphql")});g.commit=a}),98);
__d("MWChatChangeSoundsSettingMutation",["MWChatChangeSoundsSettingMutation.graphql","createCommitMutation_DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";var h;a=d("createCommitMutation_DEPRECATED").createCommitMutationForEnvironment_DEPRECATED({mutation:h!==void 0?h:h=b("MWChatChangeSoundsSettingMutation.graphql")});g.commit=a}),98);
__d("MWChatChangeTurnOffTabsSettingMutation",["MWChatChangeTurnOffTabsSettingMutation.graphql","createCommitMutation_DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";var h;a=d("createCommitMutation_DEPRECATED").createCommitMutationForEnvironment_DEPRECATED({mutation:h!==void 0?h:h=b("MWChatChangeTurnOffTabsSettingMutation.graphql")});g.commit=a}),98);
__d("MWChatSoundsSettingSubscription",["CometRelay","MWChatSoundsSettingSubscription_MessengerSoundsSettingSubscription.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("MWChatSoundsSettingSubscription_MessengerSoundsSettingSubscription.graphql");function a(a,b){return d("CometRelay").requestSubscription(a,{onNext:b,subscription:i,variables:{input:{}}})}g.subscribe=a}),98);
__d("MWChatTabsSettingSubscription",["CometRelay","MWChatTabsSettingSubscription_MessengerChatTabsSettingSubscription.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("MWChatTabsSettingSubscription_MessengerChatTabsSettingSubscription.graphql");function a(a,b){return d("CometRelay").requestSubscription(a,{onNext:b,subscription:i,variables:{input:{}}})}g.subscribe=a}),98);
__d("useCometHomeChatSettings",["Actor","CometRelay","MWCallBlockedUntilSettingMutation","MWChatChangeSoundsSettingMutation","MWChatChangeTurnOffTabsSettingMutation","MWChatSidebarStateSettingMutation","MWChatSoundsSettingSubscription","MWChatTabsSettingSubscription","RTWebCallBlockedSettingSubscription","qex","react","useCometHomeChatSettingsQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;f=d("react");var i=f.useCallback,j=f.useEffect,k=function(a,b){return function(c){c=c.getRoot();if(c==null)return;c=c.getLinkedRecord("viewer");if(c==null)return;c.setValue(b,a)}},l=h!==void 0?h:h=b("useCometHomeChatSettingsQuery.graphql");function a(a){var b,e,f,g;m();a=d("CometRelay").usePreloadedQuery(l,a);b=(b=(b=a.viewer)==null?void 0:b.call_blocked_until)!=null?b:0;e=(e=(e=a.viewer)==null?void 0:e.chat_sounds_on)!=null?e:!0;f=((f=a.viewer)==null?void 0:f.chat_tabs_turned_off)===!0;g=((g=a.viewer)==null?void 0:g.chat_sidebar_is_collapsed)===!0;var h=c("qex")._("1285");a=h===!0?((h=a.viewer)==null?void 0:(h=h.presence_view_side_settings)==null?void 0:h.is_active_status_viewable)===!0:((h=a.viewer)==null?void 0:h.chat_visibility)===!0;return{activeStatusOn:a,callBlockedUntil:b,chatSidebarIsCollapsed:g,chatSoundsOn:e,chatTabsTurnedOff:f}}function e(){var a=d("CometRelay").useRelayEnvironment();return{onChangeSidebarIsCollapsedSetting:function(b){c("MWChatSidebarStateSettingMutation")({environment:a,isCollapsed:b})},onChangeSoundsSetting:function(b){d("MWChatChangeSoundsSettingMutation").commit(a,{sounds_on:b})},onChangeTurnOffTabsSetting:function(b){d("MWChatChangeTurnOffTabsSettingMutation").commit(a,{turn_off_chat_tabs:b})},setCallBlockedUntil:function(b){d("MWCallBlockedUntilSettingMutation").commit(a,{call_blocked_until:b})}}}f=function(){var a=d("CometRelay").useQueryLoader(l),b=a[0],c=a[1];a=i(function(){return c({})},[c]);j(function(){return c({})},[c]);return[b,a]};function m(){var a=d("CometRelay").useRelayEnvironment(),b=d("Actor").useActor(),c=b[0];j(function(){var b={viewer_id:c},e=[d("RTWebCallBlockedSettingSubscription").subscribe(a,b,function(b){b=b==null?void 0:b.rtweb_call_blocked_setting_subscribe;b!=null&&a.commitUpdate(k("call_blocked_until",b.call_blocked_until))}),d("MWChatSoundsSettingSubscription").subscribe(a,function(b){b=b==null?void 0:b.messenger_chat_sounds_setting_subscribe;b!=null&&a.commitUpdate(k("chat_sounds_on",b.chat_sounds_enabled))}),d("MWChatTabsSettingSubscription").subscribe(a,function(b){b=b==null?void 0:b.messenger_chat_tabs_setting_subscribe;b!=null&&a.commitUpdate(k("chat_tabs_turned_off",!b.chat_tabs_enabled))})];return function(){e.forEach(function(a){return a.dispose()})}})}g.query=l;g.useCometHomeChatSettings=a;g.useCometHomeChatSettingsMutations=e;g.useCometHomeChatSettingsPreloadedQuery=f}),98);
__d("LSDataUseConsentState.bs",["bs_caml_int64"],(function(a,b,c,d,e,f){"use strict";a=b("bs_caml_int64").zero;c=b("bs_caml_int64").one;d=[0,2];e=[0,3];b=[0,4];f.unset=a;f.consented=c;f.withdrawn=d;f.notApplicable=e;f.seen=b}),null);
__d("MWInboxSettingsMenuIcons.bs",["cr:1723554"],(function(a,b,c,d,e,f){"use strict";c=(a=b("cr:1723554")).Settings;d=a.ActiveContacts;e=a.MessageRequests;b=a.HiddenChats;var g=a.RestrictedAccounts,h=a.Help,i=a.ReportAProblem,j=a.About,k=a.Data,l=a.Terms,m=a.PrivacyPolicy,n=a.CookiePolicy,o=a.NewMessengerDesktopClient,p=a.LogOut,q=a.DownloadYourInformation,r=a.TrustedLogins,s=a.MessengerCode;f.$MDSSettingsMenuIcons$OR$TetraSettingsMenuIcons$requireCond=a;f.Settings=c;f.ActiveContacts=d;f.MessageRequests=e;f.HiddenChats=b;f.RestrictedAccounts=g;f.Help=h;f.ReportAProblem=i;f.About=j;f.Data=k;f.Terms=l;f.PrivacyPolicy=m;f.CookiePolicy=n;f.NewMessengerDesktopClient=o;f.LogOut=p;f.DownloadYourInformation=q;f.TrustedLogins=r;f.MessengerCode=s}),null);
__d("MWInboxSettingsMenu.bs",["fbt","CometMenuSeparator.react","CurrentEnvironment","CurrentUser","DTSG","DTSGUtils","JSResourceForInteraction","LSDataUseConsentState.bs","LSPlatformLogout.bs","LsMessageRequestsEntryPoint.bs","LsSystemFolder.bs","MWInboxSettingsMenuIcons.bs","MWMenu.react","MWMenuItem.react","MessageRequestsLog.bs","MessengerDesktopPromoEventLogger","ODS","ReQLSubscription.bs","ReQLTable","ReStore.bs","Run","SprinkleConfig","URI","UserAgent","WebStorage","XMessengerDotComDesktopControllerRouteBuilder","XMessengerDotComLogoutController","bs_caml","bs_caml_int64","bs_caml_option","bs_curry","bs_js_dict","cr:10878","cr:11854","gkx","promiseDone","react","useCometHomeChatSettings","useCometLazyDialog","uuid"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=h||b("react"),l=b("gkx")("1950");function a(a){var c,d=a.showMessageRequests,e=a.showHidden,f=a.showActiveContacts;a=a.showRestrictedAccounts;var h=b("ReStore.bs").useHook(void 0),m=b("ReQLSubscription.bs").useFirst(k.useMemo(function(){return b("ReQLTable").table(h,"epd_cookie_settings").asc},[h])),n=k.useRef(!1),o=k.useRef(b("uuid")()).current;k.useEffect(function(){n.current||(n.current=!0,b("MessengerDesktopPromoEventLogger").log({location:"MessengerSettingsMenu",event:"Impression",funnelSessionId:o}))},[]);var p=function(a){b("MessengerDesktopPromoEventLogger").log({location:"MessengerSettingsMenu",event:"Click",funnelSessionId:o})},q=b("XMessengerDotComDesktopControllerRouteBuilder").buildUri({funnel_session_id:o}).setDomain("www.messenger.com").setProtocol("https").setFragment("startDownload").toString(),r=b("useCometHomeChatSettings").useCometHomeChatSettingsPreloadedQuery(),s=r[1],t=r[0],u=(r=b("useCometLazyDialog"))((c=b("JSResourceForInteraction"))("MWInboxSettingsDialog.react",{name:"MWInboxSettingsDialog.react","class":"fluid"}).__setRef("MWInboxSettingsMenu.bs")),v=u[0];u=r(c("MWInboxBugReportDialog.react",{name:"MWInboxBugReportDialog.react","class":"fluid"}).__setRef("MWInboxSettingsMenu.bs"));var w=u[0];u=b("gkx")("3846");var x=r(c("MWCookieSettingsDialogJSResource.react",{name:"MWCookieSettingsDialogJSResource.react","class":"fluid"}).__setRef("MWInboxSettingsMenu.bs")),y=x[0];x=r(c("MWDropDbDialog.react",{name:"MWDropDbDialog.react","class":"fluid"}).__setRef("MWInboxSettingsMenu.bs"));var z=x[0];r=k.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"Cookie Policy"/*FBT_CALL*/),href:"https://www.facebook.com/help/cookies",icon:b("MWInboxSettingsMenuIcons.bs").CookiePolicy.icon,testid:"skytale-settings-cookiepolicy",target:"_blank"});c=b("gkx")("2015778");x=c&&m!==void 0&&b("bs_caml").i64_neq(m.a,b("LSDataUseConsentState.bs").unset)&&b("bs_caml").i64_neq(m.b,b("LSDataUseConsentState.bs").unset)?k.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"Cookie settings"/*FBT_CALL*/),onClick:function(a){return y({cookieSettings:m,onClose:function(a){}},function(a){})},icon:b("MWInboxSettingsMenuIcons.bs").Settings.icon,testid:"skytale-settings-cookiepolicy"}):r;var A=b("LSPlatformLogout.bs").useHook(void 0);c=function(a){b("Run").onUnload(function(a){(i||(i=b("WebStorage"))).getSessionStorage().clear(),i.getLocalStorage().clear()});b("promiseDone")(b("bs_curry")._1(A,void 0),void 0,void 0);a=b("XMessengerDotComLogoutController").getURIBuilder().getURI();var c={};a=new(j||(j=b("URI")))(a);var d=document.createElement("form");d.action=a.toString();d.method="POST";d.style.display="none";a=b("DTSG").getToken();a.length>0&&(c.fb_dtsg=a,b("SprinkleConfig").param_name.length>0&&(c[b("SprinkleConfig").param_name]=b("DTSGUtils").getNumericValue(a)));b("bs_js_dict").entries(c).forEach(function(a){var b=document.createElement("input");b.type="hidden";b.name=a[0];b.value=a[1];d.appendChild(b)});document.body.appendChild(d);return d.submit()};var B=b("cr:10878")==null?c:b("bs_curry")._1(b("cr:10878").useHook,c);if(b("CurrentEnvironment").messengerdotcom&&(b("CurrentUser").isMessengerOnlyUser()||b("CurrentUser").isDeactivatedAllowedOnMessenger())){r={primaryText:g._(/*FBT_CALL*/"Download Your Information"/*FBT_CALL*/),href:"https://www.messenger.com/dyi",target:"_blank"};b("MWInboxSettingsMenuIcons.bs").DownloadYourInformation.icon!==void 0&&(r.icon=b("bs_caml_option").valFromOption(b("MWInboxSettingsMenuIcons.bs").DownloadYourInformation.icon));c=k.jsx(b("MWMenuItem.react"),r)}else c=null;if(b("CurrentEnvironment").messengerdotcom){r={primaryText:g._(/*FBT_CALL*/"Log out"/*FBT_CALL*/),onClick:function(a){b("bs_curry")._1(B,void 0)},testid:"skytale-settings-logout"};b("MWInboxSettingsMenuIcons.bs").LogOut.icon!==void 0&&(r.icon=b("bs_caml_option").valFromOption(b("MWInboxSettingsMenuIcons.bs").LogOut.icon));r=k.jsx(b("MWMenuItem.react"),r)}else r=null;return k.jsxs(b("MWMenu.react"),{children:[k.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"Preferences"/*FBT_CALL*/),onClick:function(a){b("bs_curry")._1(s,void 0);return v({chatSettingsQueryReference:t},function(a){})},icon:b("MWInboxSettingsMenuIcons.bs").Settings.icon,testid:"skytale-settings-menuitem"}),k.jsx(b("CometMenuSeparator.react"),{}),l?null:k.jsxs(k.Fragment,{children:[k.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"Active contacts"/*FBT_CALL*/),onClick:f,icon:b("MWInboxSettingsMenuIcons.bs").ActiveContacts.icon,testid:"skytale-settings-activecontacts"}),k.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"Message requests"/*FBT_CALL*/),onClick:function(a){b("MessageRequestsLog.bs").logMessageRequestsView(b("bs_caml_int64").to_int32(b("LsMessageRequestsEntryPoint.bs").settings),b("bs_caml_int64").to_int32(b("LsSystemFolder.bs").pending));return b("bs_curry")._1(d,void 0)},icon:b("MWInboxSettingsMenuIcons.bs").MessageRequests.icon,testid:"skytale-settings-messagerequests"}),k.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"Archived chats"/*FBT_CALL*/),onClick:e,icon:b("MWInboxSettingsMenuIcons.bs").HiddenChats.icon,testid:"skytale-settings-hidden"}),u?k.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"Restricted accounts"/*FBT_CALL*/),onClick:a,icon:b("MWInboxSettingsMenuIcons.bs").RestrictedAccounts.icon,testid:"skytale-settings-restrictedaccounts"}):null,b("cr:11854")==null?null:k.jsxs(k.Fragment,{children:[k.jsx(b("CometMenuSeparator.react"),{}),k.jsx(b("cr:11854").make,{})]}),k.jsx(b("CometMenuSeparator.react"),{})]}),k.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"Help"/*FBT_CALL*/),href:"https://www.facebook.com/help/messenger-app",icon:b("MWInboxSettingsMenuIcons.bs").Help.icon,testid:"skytale-settings-help",target:"_blank"}),b("CurrentEnvironment").messengerdotcom?k.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"Report a problem"/*FBT_CALL*/),onClick:function(a){return w({initialProduct:"chat"},function(a){})},icon:b("MWInboxSettingsMenuIcons.bs").ReportAProblem.icon,testid:"skytale-settings-reportproblem"}):null,b("CurrentEnvironment").messengerdotcom?k.jsx(b("CometMenuSeparator.react"),{}):null,b("CurrentEnvironment").messengerdotcom?k.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"About"/*FBT_CALL*/),href:"https://www.messenger.com/about",icon:b("MWInboxSettingsMenuIcons.bs").About.icon,testid:"skytale-settings-about",target:"_blank"}):null,b("CurrentEnvironment").messengerdotcom?k.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"Terms"/*FBT_CALL*/),href:"https://www.facebook.com/policies",icon:b("MWInboxSettingsMenuIcons.bs").Terms.icon,testid:"skytale-settings-terms",target:"_blank"}):null,b("CurrentEnvironment").messengerdotcom?k.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"Privacy Policy"/*FBT_CALL*/),href:"https://www.facebook.com/privacy/explanation",icon:b("MWInboxSettingsMenuIcons.bs").PrivacyPolicy.icon,testid:"skytale-settings-privacypolicy",target:"_blank"}):null,b("CurrentEnvironment").messengerdotcom?x:null,c,b("CurrentEnvironment").messengerdotcom&&b("CurrentUser").isMessengerOnlyUser()?k.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"Delete your account"/*FBT_CALL*/),href:"https://www.facebook.com/help/messenger-app/ipad/458908261952384?helpref=platform_switcher&rdrhc",onClick:function(a){b("ODS").bumpEntityKey(3185,"inbox_settings","delete_account")},icon:b("MWInboxSettingsMenuIcons.bs").About.icon,target:"_blank"}):null,b("UserAgent").isPlatform("Mac OS X")?k.jsxs(k.Fragment,{children:[k.jsx(b("CometMenuSeparator.react"),{}),k.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"New! Messenger for Mac"/*FBT_CALL*/),href:q,onClick:p,icon:b("MWInboxSettingsMenuIcons.bs").NewMessengerDesktopClient.icon,testid:"skytale-settings-macapp"})]}):b("UserAgent").isPlatform("Windows")?k.jsxs(k.Fragment,{children:[k.jsx(b("CometMenuSeparator.react"),{}),k.jsx(b("MWMenuItem.react"),{primaryText:g._(/*FBT_CALL*/"New! Messenger for Windows"/*FBT_CALL*/),href:q,onClick:p,icon:b("MWInboxSettingsMenuIcons.bs").NewMessengerDesktopClient.icon,testid:"skytale-settings-windowsapp"})]}):null,b("CurrentUser").isEmployee()&&b("gkx")("3174")?k.jsx(b("MWMenuItem.react"),{primaryText:"[Fb-only] Clear Messaging DB and Cookies",onClick:function(a){return z(void 0,function(a){})},icon:b("MWInboxSettingsMenuIcons.bs").Terms.icon,testid:"skytale-settings-db"}):null,r],testid:"skytale-settings-menu",truncate:!0,withArrow:!0})}c=a;f.isCMInbox=l;f.$MAWSecretConversationsLogOut$requireCond=b("cr:10878");f.$MWChatSidebarSettingsPrivacyMenu$requireCond=b("cr:11854");f.make=c}),null);
__d("MWInboxSettingsMenu.react",["MWInboxSettingsMenu.bs"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=d("MWInboxSettingsMenu.bs").make}),98);
__d("TetraSettingsMenuIcons.bs",["ix","fbicon"],(function(a,b,c,d,e,f,g){"use strict";c=(a=b("fbicon"))._(g("497570"),20);d={icon:c};e=a._(g("1707065"),20);b={icon:e};c=a._(g("610742"),20);e={icon:c};c=a._(g("577043"),20);c={icon:c};var h=a._(g("995804"),20);h={icon:h};var i=a._(g("496959"),20);i={icon:i};var j=a._(g("502065"),20);j={icon:j};var k=a._(g("479180"),20);k={icon:k};var l=a._(g("174632"),20);l={icon:l};var m=a._(g("1707074"),20);m={icon:m};var n=a._(g("1707074"),20);n={icon:n};var o=a._(g("1707074"),20);o={icon:o};var p=a._(g("505620"),20);p={icon:p};var q=a._(g("492717"),20);q={icon:q};a=a._(g("152046"),20);g={icon:a};a={icon:void 0};var r={icon:void 0};f.Settings=d;f.ActiveContacts=b;f.MessageRequests=e;f.HiddenChats=c;f.RestrictedAccounts=h;f.Help=i;f.ReportAProblem=j;f.About=k;f.Data=l;f.Terms=m;f.PrivacyPolicy=n;f.CookiePolicy=o;f.NewMessengerDesktopClient=p;f.TrustedLogins=q;f.MessengerCode=g;f.LogOut=a;f.DownloadYourInformation=r}),null);