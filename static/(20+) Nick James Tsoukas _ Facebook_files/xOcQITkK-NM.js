if (self.CavalryLogger) { CavalryLogger.start_js(["8yUiS0i"]); }

__d("ProfileCometProfilePictureEditDialogQuery.graphql",["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql","ProfileCometProfilePictureEditDialogQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"scale"}],c=[{args:null,kind:"FragmentSpread",name:"FXIMCometProfilePhotoSyncPassiveReminder_textWithEntities"}],d=[{kind:"Literal",name:"first",value:4},{kind:"Literal",name:"media_picker_source",value:"PROFILE_PICTURE"}],e={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},g=[{kind:"Literal",name:"first",value:6},{kind:"Literal",name:"media_type",value:"PHOTO"}],h={kind:"Variable",name:"scale",variableName:"scale"},i={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},j={alias:null,args:[h],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},i,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},k=[f],l={alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},m={alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null},n=[{args:null,fragment:b("CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"),kind:"FragmentSpread"}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"ProfileCometProfilePictureEditDialogQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometSelfProfilePictureMediaPicker_page"},{args:null,kind:"FragmentSpread",name:"ProfileCometSelfProfilePictureMediaPicker_viewer"}],storageKey:null},{kind:"InlineDataFragmentSpread",name:"fximCometProfilePhotoSyncPassiveReminder_query",selections:[{alias:null,args:null,concreteType:"FXIMQueries",kind:"LinkedField",name:"fx_identity_management",plural:!1,selections:[{alias:null,args:null,concreteType:"FXIMIdentityManagementScreenResources",kind:"LinkedField",name:"screen_resources",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"profile_picture_alt_disclaimer",plural:!1,selections:c,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XFBPassivePhotoSyncReminder",kind:"LinkedField",name:"bci_profile_picture_alt_disclaimer_for_delegate_page",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"subtext",plural:!1,selections:c,storageKey:null}],storageKey:null}],storageKey:null}]},{args:null,kind:"FragmentSpread",name:"useFXIMCometProfilePhotoSyncReminderOnSaveHandler_fxim"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"ProfileCometProfilePictureEditDialogQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:d,concreteType:"MediaSetsConnection",kind:"LinkedField",name:"media_sets",plural:!1,selections:[{alias:null,args:null,concreteType:"MediaSetsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[e,{kind:"TypeDiscriminator",abstractKey:"__isMediaSet"},f,{alias:null,args:null,kind:"ScalarField",name:"media_set_type",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:g,concreteType:"MediaSetMediaConnection",kind:"LinkedField",name:"media",plural:!1,selections:[{alias:null,args:null,concreteType:"MediaSetMediaEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[e,{kind:"TypeDiscriminator",abstractKey:"__isMedia"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},f,j,{alias:"thumbnail_image",args:[h,{kind:"Literal",name:"sizing",value:"cover-fill-cropped"},{kind:"Literal",name:"width",value:105}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[i],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_profile_picture",storageKey:null}],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:k,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:k,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:k,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:k,type:"MontageVideo",abstractKey:null}],storageKey:null},l],storageKey:null},m],storageKey:'media(first:6,media_type:"PHOTO")'},{alias:null,args:g,filters:["media_type"],handle:"connection",key:"ProfileCometProfilePictureMediaPickerSection_media",kind:"LinkedHandle",name:"media"}],storageKey:null},l],storageKey:null},m],storageKey:'media_sets(first:4,media_picker_source:"PROFILE_PICTURE")'},{alias:null,args:d,filters:["media_picker_source"],handle:"connection",key:"ProfileCometSelfProfilePictureEditDialog_media_sets",kind:"LinkedHandle",name:"media_sets"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[e,f,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"ProfileVideo",kind:"LinkedField",name:"profile_video",plural:!1,selections:[e,f],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"profile_picture_is_silhouette",storageKey:null},{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"profile_photo",plural:!1,selections:[f,j],storageKey:null}],type:"User",abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"FXIMQueries",kind:"LinkedField",name:"fx_identity_management",plural:!1,selections:[{alias:null,args:null,concreteType:"FXIMIdentityManagementScreenResources",kind:"LinkedField",name:"screen_resources",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"profile_picture_alt_disclaimer",plural:!1,selections:n,storageKey:null},f,{alias:null,args:null,concreteType:"FXIMIdentityManagementScreenResourcesRemindersChangePhoto",kind:"LinkedField",name:"reminders_change_photo",plural:!1,selections:[{args:null,documentName:"useFXIMCometProfilePhotoSyncReminderOnSaveHandler_fxim",fragmentName:"FXIMCometProfilePhotoSyncReminderDialog_reminders_change_photo",fragmentPropName:"reminders_change_photo",kind:"ModuleImport"}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XFBPassivePhotoSyncReminder",kind:"LinkedField",name:"bci_profile_picture_alt_disclaimer_for_delegate_page",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"subtext",plural:!1,selections:n,storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:b("ProfileCometProfilePictureEditDialogQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometProfilePictureEditDialogQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("ProfileCometProfilePictureEditThumbnailAction_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometProfilePictureEditThumbnailAction_user",selections:[{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"profile_photo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null}],storageKey:null}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometProfilePictureMediaPickerActions_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometProfilePictureMediaPickerActions_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"ProfileVideo",kind:"LinkedField",name:"profile_video",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"profile_picture_is_silhouette",storageKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometProfilePictureEditThumbnailAction_user"}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometProfilePictureMediaPickerSectionPaginationQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3957652100989706"}),null);
__d("ProfileCometProfilePictureMediaPickerSectionPaginationQuery.graphql",["ProfileCometProfilePictureMediaPickerSectionPaginationQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:6,kind:"LocalArgument",name:"count"},c={defaultValue:null,kind:"LocalArgument",name:"cursor"},d={defaultValue:null,kind:"LocalArgument",name:"id"},e={defaultValue:null,kind:"LocalArgument",name:"scale"},f=[{kind:"Variable",name:"id",variableName:"id"}],g={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"first",variableName:"count"},{kind:"Literal",name:"media_type",value:"PHOTO"}],j={kind:"Variable",name:"scale",variableName:"scale"},k={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},l=[h];return{fragment:{argumentDefinitions:[a,c,d,e],kind:"Fragment",metadata:null,name:"ProfileCometProfilePictureMediaPickerSectionPaginationQuery",selections:[{alias:null,args:f,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"cursor",variableName:"cursor"}],kind:"FragmentSpread",name:"ProfileCometProfilePictureMediaPickerSection_page"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,c,e,d],kind:"Operation",name:"ProfileCometProfilePictureMediaPickerSectionPaginationQuery",selections:[{alias:null,args:f,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[g,h,{kind:"InlineFragment",selections:[{alias:null,args:i,concreteType:"MediaSetMediaConnection",kind:"LinkedField",name:"media",plural:!1,selections:[{alias:null,args:null,concreteType:"MediaSetMediaEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[g,{kind:"TypeDiscriminator",abstractKey:"__isMedia"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},h,{alias:null,args:[j],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},k,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:"thumbnail_image",args:[j,{kind:"Literal",name:"sizing",value:"cover-fill-cropped"},{kind:"Literal",name:"width",value:105}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[k],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_profile_picture",storageKey:null}],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:l,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:l,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:l,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:l,type:"MontageVideo",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:i,filters:["media_type"],handle:"connection",key:"ProfileCometProfilePictureMediaPickerSection_media",kind:"LinkedHandle",name:"media"}],type:"MediaSet",abstractKey:"__isMediaSet"}],storageKey:null}]},params:{id:b("ProfileCometProfilePictureMediaPickerSectionPaginationQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometProfilePictureMediaPickerSectionPaginationQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("ProfileCometProfilePictureMediaPickerSection_mediaSet.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometProfilePictureMediaPickerSection_mediaSet",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"media_set_type",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],type:"MediaSet",abstractKey:"__isMediaSet"};e.exports=a}),null);
__d("ProfileCometProfilePictureMediaPickerSection_mediaSetEdge.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometProfilePictureMediaPickerSection_mediaSetEdge",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometProfilePictureMediaPickerSection_mediaSet"},{args:null,kind:"FragmentSpread",name:"ProfileCometProfilePictureMediaPickerSection_page"}],storageKey:null}],type:"MediaSetsEdge",abstractKey:null};e.exports=a}),null);
__d("ProfileCometProfilePictureMediaPickerSection_page.graphql",["ProfileCometProfilePictureMediaPickerSectionPaginationQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=["media"];return{argumentDefinitions:[{defaultValue:6,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:a}],refetch:{connection:{forward:{count:"count",cursor:"cursor"},backward:null,path:a},fragmentPathInResult:["node"],operation:b("ProfileCometProfilePictureMediaPickerSectionPaginationQuery.graphql"),identifierField:"id"}},name:"ProfileCometProfilePictureMediaPickerSection_page",selections:[{alias:"media",args:[{kind:"Literal",name:"media_type",value:"PHOTO"}],concreteType:"MediaSetMediaConnection",kind:"LinkedField",name:"__ProfileCometProfilePictureMediaPickerSection_media_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"MediaSetMediaEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometProfilePictureMediaPickerPhoto_media"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null}],storageKey:'__ProfileCometProfilePictureMediaPickerSection_media_connection(media_type:"PHOTO")'},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"MediaSet",abstractKey:"__isMediaSet"}}();e.exports=a}),null);
__d("ProfileCometSelfProfilePictureMediaPickerPaginationQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5642236212483286"}),null);
__d("ProfileCometSelfProfilePictureMediaPickerPaginationQuery.graphql",["ProfileCometSelfProfilePictureMediaPickerPaginationQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:4,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],c=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"first",variableName:"count"},{kind:"Literal",name:"media_picker_source",value:"PROFILE_PICTURE"}],d={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},f=[{kind:"Literal",name:"first",value:6},{kind:"Literal",name:"media_type",value:"PHOTO"}],g={kind:"Variable",name:"scale",variableName:"scale"},h={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},i=[e],j={alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},k={alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"ProfileCometSelfProfilePictureMediaPickerPaginationQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"cursor",variableName:"cursor"}],kind:"FragmentSpread",name:"ProfileCometSelfProfilePictureMediaPicker_page"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"ProfileCometSelfProfilePictureMediaPickerPaginationQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:c,concreteType:"MediaSetsConnection",kind:"LinkedField",name:"media_sets",plural:!1,selections:[{alias:null,args:null,concreteType:"MediaSetsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[d,{kind:"TypeDiscriminator",abstractKey:"__isMediaSet"},e,{alias:null,args:null,kind:"ScalarField",name:"media_set_type",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:f,concreteType:"MediaSetMediaConnection",kind:"LinkedField",name:"media",plural:!1,selections:[{alias:null,args:null,concreteType:"MediaSetMediaEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[d,{kind:"TypeDiscriminator",abstractKey:"__isMedia"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},e,{alias:null,args:[g],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},h,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:"thumbnail_image",args:[g,{kind:"Literal",name:"sizing",value:"cover-fill-cropped"},{kind:"Literal",name:"width",value:105}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[h],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_profile_picture",storageKey:null}],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:i,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:i,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:i,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:i,type:"MontageVideo",abstractKey:null}],storageKey:null},j],storageKey:null},k],storageKey:'media(first:6,media_type:"PHOTO")'},{alias:null,args:f,filters:["media_type"],handle:"connection",key:"ProfileCometProfilePictureMediaPickerSection_media",kind:"LinkedHandle",name:"media"}],storageKey:null},j],storageKey:null},k],storageKey:null},{alias:null,args:c,filters:["media_picker_source"],handle:"connection",key:"ProfileCometSelfProfilePictureEditDialog_media_sets",kind:"LinkedHandle",name:"media_sets"}],storageKey:null}]},params:{id:b("ProfileCometSelfProfilePictureMediaPickerPaginationQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometSelfProfilePictureMediaPickerPaginationQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("ProfileCometSelfProfilePictureMediaPicker_page.graphql",["ProfileCometSelfProfilePictureMediaPickerPaginationQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=["media_sets"];return{argumentDefinitions:[{defaultValue:4,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:a}],refetch:{connection:{forward:{count:"count",cursor:"cursor"},backward:null,path:a},fragmentPathInResult:["viewer"],operation:b("ProfileCometSelfProfilePictureMediaPickerPaginationQuery.graphql")}},name:"ProfileCometSelfProfilePictureMediaPicker_page",selections:[{alias:"media_sets",args:[{kind:"Literal",name:"media_picker_source",value:"PROFILE_PICTURE"}],concreteType:"MediaSetsConnection",kind:"LinkedField",name:"__ProfileCometSelfProfilePictureEditDialog_media_sets_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"MediaSetsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometProfilePictureMediaPickerSection_mediaSetEdge"},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null}],storageKey:'__ProfileCometSelfProfilePictureEditDialog_media_sets_connection(media_picker_source:"PROFILE_PICTURE")'}],type:"Viewer",abstractKey:null}}();e.exports=a}),null);
__d("ProfileCometSelfProfilePictureMediaPicker_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometSelfProfilePictureMediaPicker_viewer",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometProfilePictureMediaPickerActions_user"}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("ProfileCometProfilePictureEditThumbnailAction.react",["ix","CometRelay","CometTooltip.react","ProfileCometProfilePictureEditDialogContext","ProfileCometProfilePictureEditStrings","ProfileCometProfilePictureEditThumbnailAction_user.graphql","TetraButton.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useCallback,l=e.useContext;function a(a){a=a.user;var e=d("CometRelay").useFragment(i!==void 0?i:i=b("ProfileCometProfilePictureEditThumbnailAction_user.graphql"),a);a=l(c("ProfileCometProfilePictureEditDialogContext"));var f=a.dispatch;a=a.state;var g=k(function(){var a;f({image:{height:((a=e.profile_photo)==null?void 0:(a=a.image)==null?void 0:a.height)||0,id:((a=e.profile_photo)==null?void 0:a.id)||"",isProfilePicture:!0,uri:((a=e.profile_photo)==null?void 0:(a=a.image)==null?void 0:a.uri)||"",width:((a=e.profile_photo)==null?void 0:(a=a.image)==null?void 0:a.width)||0},type:"UPDATE_THUMBNAIL"})},[f,e]);return j.jsx(c("CometTooltip.react"),{tooltip:d("ProfileCometProfilePictureEditStrings").EDIT_THUMBNAIL,children:j.jsx(c("TetraButton.react"),{disabled:a.isUploading,icon:d("fbicon")._(h("477825"),16),label:d("ProfileCometProfilePictureEditStrings").EDIT_THUMBNAIL,labelIsHidden:!0,onPress:g,testid:void 0,type:"secondary"})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometProfilePictureMediaPickerActions.react",["ix","CometRelay","CometRow.react","CometRowItem.react","ProfileCometContextualProfileContext","ProfileCometProfilePictureEditDialogContext","ProfileCometProfilePictureEditStrings","ProfileCometProfilePictureEditThumbnailAction.react","ProfileCometProfilePictureMediaPickerActions_user.graphql","ProfileCometProfilePictureMediaUploadAction.react","TetraButton.react","cr:1723581","cr:336","fbicon","react","useProfileCometEngagementEventsClickCallback"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useContext;function a(a){var e,f=a.onSaveSuccess;a=a.user;a=d("CometRelay").useFragment(i!==void 0?i:i=b("ProfileCometProfilePictureMediaPickerActions_user.graphql"),a);var g=k(c("ProfileCometProfilePictureEditDialogContext")),l=g.state;g=k(c("ProfileCometContextualProfileContext"));g=g.isContextualProfileView;var m=c("useProfileCometEngagementEventsClickCallback")({feature_item:"upload_photo",feature_surface:"edit_profile_picture_select_photo_screen",profile_feature:"profile_picture",profile_section:"edit_form"});return j.jsxs(c("CometRow.react"),{paddingHorizontal:16,paddingTop:16,paddingVertical:16,spacing:8,children:[j.jsx(c("CometRowItem.react"),{expanding:!0,children:j.jsx(c("ProfileCometProfilePictureMediaUploadAction.react"),{profileID:(e=a==null?void 0:a.id)!=null?e:"",children:function(a){return j.jsx(c("TetraButton.react"),{disabled:l.isUploading,icon:d("fbicon")._(h("483768"),16),label:d("ProfileCometProfilePictureEditStrings").UPLOAD_PHOTO,onPress:function(){m(),a()},reduceEmphasis:!0,testid:void 0})}})}),!g&&b("cr:336")&&j.jsx(c("CometRowItem.react"),{expanding:!0,children:j.jsx(b("cr:336"),{profileID:(e=a==null?void 0:a.id)!=null?e:""})}),a&&a.profile_picture_is_silhouette===!1&&a.profile_video===null&&!g&&j.jsx(c("CometRowItem.react"),{children:j.jsx(c("ProfileCometProfilePictureEditThumbnailAction.react"),{user:a})}),a&&a.profile_picture_is_silhouette===!1&&b("cr:1723581")&&j.jsx(c("CometRowItem.react"),{children:j.jsx(b("cr:1723581"),{onSaveSuccess:f})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometProfilePictureMediaPickerSection.react",["CometProgressIndicator.react","CometRelay","ProfileCometProfilePictureEditStrings","ProfileCometProfilePictureMediaPickerPhoto.react","ProfileCometProfilePictureMediaPickerSection_mediaSet.graphql","ProfileCometProfilePictureMediaPickerSection_mediaSetEdge.graphql","ProfileCometProfilePictureMediaPickerSection_page.graphql","TetraButton.react","TetraText.react","getRoundedCorners","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=d("react"),l=d("react").useCallback;function m(a){var e,f=a.mediaSet;a=a.page;f=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometProfilePictureMediaPickerSection_mediaSet.graphql"),f);a=d("CometRelay").usePaginationFragment(i!==void 0?i:i=b("ProfileCometProfilePictureMediaPickerSection_page.graphql"),a);var g=a.data,j=a.hasNext,m=a.isLoadingNext,n=a.loadNext;a=l(function(){n(12)},[n]);var o=f.media_set_type;if(o==="PROFILE_FRAME_PHOTO_SET")return null;e=(e=(e=g.media)==null?void 0:e.edges)!=null?e:[];var p=c("getRoundedCorners")(e.length,6);f=((f=f.title)==null?void 0:f.text)||"";var q=new Set(["Profile Pictures","Mobile Uploads","Timeline Photos","Cover Photos"]),r=f;o==="FRIENDSHIP_PHOTOS"?r="photos_of_you_and_a_friend":o==="ALBUM_VIEW"&&!q.has(f)?r="custom_album":r=f.toLowerCase().replace(" ","_");return k.jsxs("div",{children:[k.jsx("div",{className:"sej5wr8e",children:k.jsx(c("TetraText.react"),{color:"primary",type:"headlineEmphasized3",children:f})}),k.jsx("div",{className:"o22cckgh obtkqiv7 lhclo0ds j83agx80",children:e.map(function(a,b){a=a.node;return!a?null:k.jsx("div",{className:"dynceobw oi9244e8 bi6gxh9e j83agx80",children:k.jsx(c("ProfileCometProfilePictureMediaPickerPhoto.react"),{media:a,photoSection:r,roundCorner:p[b]})},b)})}),j&&k.jsx("div",{className:"tr9rh885",children:m?k.jsx("div",{className:"taijpn5t tv7at329 j83agx80 bp9cbjyn",children:k.jsx(c("CometProgressIndicator.react"),{})}):k.jsx(c("TetraButton.react"),{label:d("ProfileCometProfilePictureEditStrings").SEE_MORE,onPress:a,type:"secondary"})})]},g.id)}m.displayName=m.name+" [from "+f.id+"]";function a(a){a=a.mediaSetEdge;a=d("CometRelay").useFragment(j!==void 0?j:j=b("ProfileCometProfilePictureMediaPickerSection_mediaSetEdge.graphql"),a);a=a==null?void 0:a.node;return a==null?null:k.jsx(m,{mediaSet:a,page:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometProfilePictureMediaPicker.react",["CometInfiniteScrollTrigger.react","CometProgressIndicator.react","CometScrollView.react","ProfileCometLoadingOverlay.react","ProfileCometProfilePictureEditDialogContext","ProfileCometProfilePictureMediaPickerActions.react","ProfileCometProfilePictureMediaPickerSection.react","qpl","react","useCometInteractionTracing"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useContext;function a(a){var b=a.mediaSetEdges,d=a.onSaveSuccess,e=a.paginationProps,f=e.hasNext,g=e.isLoadingNext,k=e.loadNext;e=a.user;a=j(c("ProfileCometProfilePictureEditDialogContext"));a=a.state;b=b.map(function(a,b){return h.jsx("div",{className:"cxgpxx05 ihqw7lf3 dhix69tm wkznzc2l",children:h.jsx(c("ProfileCometProfilePictureMediaPickerSection.react"),{mediaSetEdge:a})},b)});var l=c("useCometInteractionTracing")(c("qpl")._(30605386,"2849"),"fluid","INTERACTION"),m=i(function(){l(function(){k(2)})},[k,l]);return h.jsxs("div",{className:"l9j0dhe7 cbu4d94t j83agx80",children:[h.jsx(c("ProfileCometProfilePictureMediaPickerActions.react"),{onSaveSuccess:d,user:e}),h.jsx("div",{className:"a1zevxcz j83agx80",children:h.jsxs(c("CometScrollView.react"),{showsHorizontalScrollIndicator:!1,children:[h.jsx("div",{children:b}),h.jsx(c("CometInfiniteScrollTrigger.react"),{hasMore:f,isLoading:g,onLoadMore:m,children:h.jsx("div",{className:"tr9rh885 sjgh65i0 taijpn5t j83agx80",children:h.jsx(c("CometProgressIndicator.react"),{})})})]})}),a.isUploading&&h.jsx(c("ProfileCometLoadingOverlay.react"),{})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometSelfProfilePictureMediaPicker.react",["CometRelay","ProfileCometProfilePictureMediaPicker.react","ProfileCometSelfProfilePictureMediaPicker_page.graphql","ProfileCometSelfProfilePictureMediaPicker_viewer.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=d("react");function a(a){var e=a.onSaveSuccess,f=a.page;a=a.viewer;a=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometSelfProfilePictureMediaPicker_viewer.graphql"),a);f=d("CometRelay").usePaginationFragment(i!==void 0?i:i=b("ProfileCometSelfProfilePictureMediaPicker_page.graphql"),f);var g=f.data,k=f.hasNext,l=f.isLoadingNext;f=f.loadNext;g=(g=g.media_sets)==null?void 0:g.edges;a=a.actor;return g==null||a==null?null:j.jsx(c("ProfileCometProfilePictureMediaPicker.react"),{mediaSetEdges:g,onSaveSuccess:e,paginationProps:{hasNext:k,isLoadingNext:l,loadNext:f},user:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometProfilePictureEditDialog.react",["fbt","Actor","CometCardedDialog.react","CometErrorBoundary.react","CometRelay","ProfileCometContext","ProfileCometProfilePictureEditDialogContext","ProfileCometProfilePictureEditDialogQuery.graphql","ProfileCometProfilePictureEditDialogReducer","ProfileCometProfilePictureEditPreview.react","ProfileCometProfilePictureEditStrings","ProfileCometProfilePictureFrameSelectorContainer.entrypoint","ProfileCometSelfProfilePictureMediaPicker.react","XCometMeControllerRouteBuilder","fximCometProfilePhotoSyncPassiveReminder","react","useCometRelayEntrypointContextualEnvironmentProvider","useCometRouterDispatcher","useDiscardConfirmationDialog","useFXIMCometProfilePhotoSyncReminderOnSaveHandler","useIsMountedRef","useOnRoutableDialogClose","useTriggerAccessibilityAlert"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useCallback,l=e.useMemo,m=e.useReducer;function a(a){var e=a.props,f=e.onClose,g=e.onSave,n=e.profileID;e=e.source;a=a.queries;a=d("CometRelay").usePreloadedQuery(i!==void 0?i:i=b("ProfileCometProfilePictureEditDialogQuery.graphql"),a.queryReference);var o=a.viewer,p=d("Actor").useActor(),q=p[0],r=n==null||n===""?q:n;p=l(function(){return{isInViewAs:!1,profileID:r,profileVanity:null,viewerID:q}},[r,q]);n=c("useCometRelayEntrypointContextualEnvironmentProvider")();n=d("CometRelay").useEntryPointLoader(n,c("ProfileCometProfilePictureFrameSelectorContainer.entrypoint"));var s=n[0],t=n[1];n=m(d("ProfileCometProfilePictureEditDialogReducer").reducer,d("ProfileCometProfilePictureEditDialogReducer").getInitialState());var u=n[0],v=n[1];n=l(function(){return{dispatch:v,loadEntryPoint:t,state:u}},[t,u]);var w=c("useDiscardConfirmationDialog")(),x=w[0],y=c("useIsMountedRef")(),z=c("useTriggerAccessibilityAlert")();w=c("useOnRoutableDialogClose")();var A=f!=null?f:w;f=k(function(){u.step==="PREVIEW"||u.step==="FRAME"||u.isUploading?x(A):A()},[A,x,u.isUploading,u.step]);w=k(function(){var a,b=function(){return v({type:"PREVIEW_CANCEL"})};((a=u.image)==null?void 0:a.isUploaded)===!0?x(b):b()},[x,u.image]);var B=c("useFXIMCometProfilePhotoSyncReminderOnSaveHandler")({fragment:a,source:e}),C=c("useCometRouterDispatcher")(),D=k(function(){C!=null&&C.go(c("XCometMeControllerRouteBuilder").buildURL({}),{})},[C]),E=g!=null?g:D;g=k(function(){y.current&&A(),E&&E(),z(h._(/*FBT_CALL*/"Your profile picture has been updated"/*FBT_CALL*/))},[y,A,E,z]);var F;switch(u.step){case"FRAME":F=d("ProfileCometProfilePictureEditStrings").ADD_FRAME_TO_PROFILE;break;case"THUMBNAIL":F=d("ProfileCometProfilePictureEditStrings").EDIT_THUMBNAIL_TITLE;break;case"PREVIEW":default:F=d("ProfileCometProfilePictureEditStrings").DIALOG_TITLE}D=c("fximCometProfilePhotoSyncPassiveReminder")(a,e);a=D;D=!Boolean(D);return j.jsx(c("CometCardedDialog.react"),{onClose:f,size:u.step==="FRAME"?"content":"medium",testid:void 0,title:F,withCloseButton:!0,children:j.jsx(c("CometErrorBoundary.react"),{children:j.jsx(c("ProfileCometContext").Provider,{value:p,children:j.jsx(c("ProfileCometProfilePictureEditDialogContext").Provider,{value:n,children:(u.step==="PREVIEW"||u.step==="THUMBNAIL")&&u.image?j.jsx(c("ProfileCometProfilePictureEditPreview.react"),{canCropPhoto:!0,canMakeTemporary:!0,onCancel:w,onSave:B,onSaveSuccess:g,photo:u.image,privacyDisclaimer:a,profileID:r,showPrivacyDisclaimerGlobe:D,source:e,targetType:"profile"}):u.step==="PICKER"?o&&j.jsx(c("ProfileCometSelfProfilePictureMediaPicker.react"),{onSaveSuccess:g,page:o,viewer:o}):s!=null&&j.jsx(d("CometRelay").EntryPointContainer,{entryPointReference:s,props:{onSaveSuccess:g,profileID:r,source:e,targetType:"profile"}})})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);