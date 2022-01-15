if (self.CavalryLogger) { CavalryLogger.start_js(["p\/Dmk4h"]); }

__d("CometGamingVideoLiveViewerCountFetcherQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4384711118249187"}),null);
__d("CometGamingVideoLiveViewerCountFetcherQuery.graphql",["CometGamingVideoLiveViewerCountFetcherQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"broadcastIds"}],c=[{kind:"Variable",name:"ids",variableName:"broadcastIds"}],d={alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"live_viewer_count_read_only",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometGamingVideoLiveViewerCountFetcherQuery",selections:[{alias:null,args:c,concreteType:"VideoBroadcastMultifetchEdge",kind:"LinkedField",name:"multifetch__VideoBroadcast",plural:!0,selections:[{alias:null,args:null,concreteType:"VideoBroadcast",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[d,e],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometGamingVideoLiveViewerCountFetcherQuery",selections:[{alias:null,args:c,concreteType:"VideoBroadcastMultifetchEdge",kind:"LinkedField",name:"multifetch__VideoBroadcast",plural:!0,selections:[{alias:null,args:null,concreteType:"VideoBroadcast",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[d,e,f],storageKey:null},f],storageKey:null}],storageKey:null}]},params:{id:b("CometGamingVideoLiveViewerCountFetcherQuery_facebookRelayOperation"),metadata:{live:{config_id:"comet_gaming_live_viewer_count"}},name:"CometGamingVideoLiveViewerCountFetcherQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("LiveVideoCometAlertConditionalLoader_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"LiveVideoCometAlertConditionalLoader_video",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"comet_video_cue_system_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"LiveVideoCometAlertConditionalLoader_video",fragmentName:"LiveVideoCometAlert_videoCueSystemRenderer",fragmentPropName:"videoCueSystemRenderer",kind:"ModuleImport"}],type:"CometLiveVideoCUESystemRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"LiveVideoCometAlertConditionalLoader_video",fragmentName:"LiveVideoCometAlertFeaturedProductContainerLiveQueryWrapper_videoCueSystemRenderer",fragmentPropName:"videoCueSystemRenderer",kind:"ModuleImport"}],type:"CometVideoLiveShoppingProductCUESystemRenderer",abstractKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometLiveShoppingPopoverCartDeferred_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometLiveShoppingPopoverCartDeferred_video",selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"should_show_live_shopping_popover_cart",plural:!1,selections:[{args:null,documentName:"CometLiveShoppingPopoverCartDeferred_video",fragmentName:"CometLiveShoppingPopoverCart_video",fragmentPropName:"video",kind:"ModuleImport"}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"caller"}],kind:"Fragment",metadata:null,name:"CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video",selections:[{alias:null,args:[{kind:"Variable",name:"caller",variableName:"caller"}],concreteType:null,kind:"LinkedField",name:"comet_tahoe_up_next_overlay_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video",fragmentName:"CometTahoeUpNextOverlayAndEndScreenWrapper_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"CometTahoeVODUpNextOverlayRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video",fragmentName:"CometTahoeUpNextEndCardWrapper_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"CometTahoeEndCardRenderer",abstractKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometTabMenuForPivotLinks.react",["CometMenu.react","CometMenuItemSelectable_DEPRECATED.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.menuItems;return h.jsx(c("CometMenu.react"),{size:"full",children:a.map(function(a,b){var d=a.disabled,e=a.image,f=a.label,g=a.linkProps,i=a.onHoverIn,j=a.onHoverOut,k=a.onPress,l=a.onPressIn;a=a.selected;e=(e==null?void 0:e.type)==="icon"?e.icon:null;return h.jsx(c("CometMenuItemSelectable_DEPRECATED.react"),{disabled:d,href:(d=g==null?void 0:g.url)!=null?d:void 0,icon:e,isSelected:(d=a)!=null?d:!1,onClick:k,onHoverIn:i,onHoverOut:j,onPressIn:l,primaryText:f!=null?f:"",role:"menuitemradio",routeTarget:g==null?void 0:g.routeTarget,target:g==null?void 0:g.target,testid:void 0},b)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometGamingVideoLiveViewerCountFetcher.react",["CometGamingVideoLiveViewerCountFetcherQuery.graphql","CometRelay"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=a.broadcastIds;d("CometRelay").useLazyLoadQuery(h!==void 0?h:h=b("CometGamingVideoLiveViewerCountFetcherQuery.graphql"),{broadcastIds:a},{fetchPolicy:"store-and-network"})}g["default"]=a}),98);
__d("LiveVideoCometAlertConditionalLoader.react",["CometPlaceholder.react","CometRelay","LiveVideoCometAlertConditionalLoader_video.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.video$key;a=a.videoID;e=d("CometRelay").useFragment(h!==void 0?h:h=b("LiveVideoCometAlertConditionalLoader_video.graphql"),e);return i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(d("CometRelay").MatchContainer,{match:e==null?void 0:e.comet_video_cue_system_renderer,props:{videoID:a}})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometLiveShoppingPopoverCartDeferred.react",["CometLiveShoppingPopoverCartDeferred_video.graphql","CometPlaceholder.react","CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=h!==void 0?h:h=b("CometLiveShoppingPopoverCartDeferred_video.graphql");function a(a){a=d("CometRelay").useFragment(j,a.video);return a.should_show_live_shopping_popover_cart!=null?i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(d("CometRelay").MatchContainer,{match:a.should_show_live_shopping_popover_cart})}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader.react",["CometPlaceholder.react","CometRelay","CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.initialTracePolicy,f=a.logTahoeEvent,g=a.openNextVideoInPermalink,j=a.pressInteraction,k=a.reactionVideoChannelType,l=a.subOrigin,m=a.video$key;a=a.videoID;m=d("CometRelay").useFragment(h!==void 0?h:h=b("CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video.graphql"),m);return i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(d("CometRelay").MatchContainer,{match:m==null?void 0:m.comet_tahoe_up_next_overlay_renderer,props:{initialTracePolicy:e,logTahoeEvent:f,openNextVideoInPermalink:g,pressInteraction:j,reactionVideoChannelType:k,subOrigin:l,videoID:a}})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeSurfaceHighlightsLoggingUtils",["VideoHomeTypedLoggerLite"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){c("VideoHomeTypedLoggerLite").log({badge_type:a,click_target:"notif_hub_update",event:"click",event_target:"notif_hub",player_origin:"video_home",player_suborigin:"notif_hub",section_video_channel_type:b,tab_type:"www_updates_surface"})}function b(a,b){c("VideoHomeTypedLoggerLite").log({badge_type:a,event:"vpv_duration",event_target:"notif_hub",player_origin:"video_home",player_suborigin:"notif_hub",section_video_channel_type:b,tab_type:"www_updates_surface"})}g.logBadgeCardClick=a;g.logBadgeCardImpression=b}),98);