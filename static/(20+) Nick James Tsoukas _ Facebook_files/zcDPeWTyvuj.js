if (self.CavalryLogger) { CavalryLogger.start_js(["UJxMOU2"]); }

__d("CometComposerClientErrorMessageRenderer.react",["CometComposerInlineErrorRenderer.react","CometPlaceholder.react","JSResourceForInteraction","lazyLoadComponent","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("lazyLoadComponent")(c("JSResourceForInteraction")("MediaLimitReachedErrorMessage.react").__setRef("CometComposerClientErrorMessageRenderer.react")),j=c("lazyLoadComponent")(c("JSResourceForInteraction")("MediaUploadTooltipError.react").__setRef("CometComposerClientErrorMessageRenderer.react"));function a(a){var b=a.error,d=a.errorType;a=a.xstyle;b=b;var e=h.jsx(c("CometComposerInlineErrorRenderer.react"),{error:b,xstyle:a});switch(d){case"mediaLimit":b=h.jsx(c("CometPlaceholder.react"),{fallback:e,children:h.jsx(i,{error:b})});break;case"mediaUpload":b=h.jsx(j,{error:b});break;case"newMediaItems":return null}return h.jsx(c("CometComposerInlineErrorRenderer.react"),{error:b,xstyle:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometGroupMembersInvitedRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4487021874758721"}),null);