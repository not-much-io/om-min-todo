// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25950 = cljs.core._EQ_;
var expr__25951 = (function (){var or__16771__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25950.call(null,"true",expr__25951))){
return true;
} else {
if(cljs.core.truth_(pred__25950.call(null,"false",expr__25951))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25951)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25953__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25954__i = 0, G__25954__a = new Array(arguments.length -  0);
while (G__25954__i < G__25954__a.length) {G__25954__a[G__25954__i] = arguments[G__25954__i + 0]; ++G__25954__i;}
  args = new cljs.core.IndexedSeq(G__25954__a,0);
} 
return G__25953__delegate.call(this,args);};
G__25953.cljs$lang$maxFixedArity = 0;
G__25953.cljs$lang$applyTo = (function (arglist__25955){
var args = cljs.core.seq(arglist__25955);
return G__25953__delegate(args);
});
G__25953.cljs$core$IFn$_invoke$arity$variadic = G__25953__delegate;
return G__25953;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25956){
var map__25959 = p__25956;
var map__25959__$1 = ((((!((map__25959 == null)))?((((map__25959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25959):map__25959);
var message = cljs.core.get.call(null,map__25959__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25959__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16771__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16759__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16759__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16759__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21564__auto___26121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto___26121,ch){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto___26121,ch){
return (function (state_26090){
var state_val_26091 = (state_26090[(1)]);
if((state_val_26091 === (7))){
var inst_26086 = (state_26090[(2)]);
var state_26090__$1 = state_26090;
var statearr_26092_26122 = state_26090__$1;
(statearr_26092_26122[(2)] = inst_26086);

(statearr_26092_26122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (1))){
var state_26090__$1 = state_26090;
var statearr_26093_26123 = state_26090__$1;
(statearr_26093_26123[(2)] = null);

(statearr_26093_26123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (4))){
var inst_26043 = (state_26090[(7)]);
var inst_26043__$1 = (state_26090[(2)]);
var state_26090__$1 = (function (){var statearr_26094 = state_26090;
(statearr_26094[(7)] = inst_26043__$1);

return statearr_26094;
})();
if(cljs.core.truth_(inst_26043__$1)){
var statearr_26095_26124 = state_26090__$1;
(statearr_26095_26124[(1)] = (5));

} else {
var statearr_26096_26125 = state_26090__$1;
(statearr_26096_26125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (15))){
var inst_26050 = (state_26090[(8)]);
var inst_26065 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26050);
var inst_26066 = cljs.core.first.call(null,inst_26065);
var inst_26067 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26066);
var inst_26068 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26067)].join('');
var inst_26069 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26068);
var state_26090__$1 = state_26090;
var statearr_26097_26126 = state_26090__$1;
(statearr_26097_26126[(2)] = inst_26069);

(statearr_26097_26126[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (13))){
var inst_26074 = (state_26090[(2)]);
var state_26090__$1 = state_26090;
var statearr_26098_26127 = state_26090__$1;
(statearr_26098_26127[(2)] = inst_26074);

(statearr_26098_26127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (6))){
var state_26090__$1 = state_26090;
var statearr_26099_26128 = state_26090__$1;
(statearr_26099_26128[(2)] = null);

(statearr_26099_26128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (17))){
var inst_26072 = (state_26090[(2)]);
var state_26090__$1 = state_26090;
var statearr_26100_26129 = state_26090__$1;
(statearr_26100_26129[(2)] = inst_26072);

(statearr_26100_26129[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (3))){
var inst_26088 = (state_26090[(2)]);
var state_26090__$1 = state_26090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26090__$1,inst_26088);
} else {
if((state_val_26091 === (12))){
var inst_26049 = (state_26090[(9)]);
var inst_26063 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26049,opts);
var state_26090__$1 = state_26090;
if(cljs.core.truth_(inst_26063)){
var statearr_26101_26130 = state_26090__$1;
(statearr_26101_26130[(1)] = (15));

} else {
var statearr_26102_26131 = state_26090__$1;
(statearr_26102_26131[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (2))){
var state_26090__$1 = state_26090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26090__$1,(4),ch);
} else {
if((state_val_26091 === (11))){
var inst_26050 = (state_26090[(8)]);
var inst_26055 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26056 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26050);
var inst_26057 = cljs.core.async.timeout.call(null,(1000));
var inst_26058 = [inst_26056,inst_26057];
var inst_26059 = (new cljs.core.PersistentVector(null,2,(5),inst_26055,inst_26058,null));
var state_26090__$1 = state_26090;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26090__$1,(14),inst_26059);
} else {
if((state_val_26091 === (9))){
var inst_26050 = (state_26090[(8)]);
var inst_26076 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26077 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26050);
var inst_26078 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26077);
var inst_26079 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26078)].join('');
var inst_26080 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26079);
var state_26090__$1 = (function (){var statearr_26103 = state_26090;
(statearr_26103[(10)] = inst_26076);

return statearr_26103;
})();
var statearr_26104_26132 = state_26090__$1;
(statearr_26104_26132[(2)] = inst_26080);

(statearr_26104_26132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (5))){
var inst_26043 = (state_26090[(7)]);
var inst_26045 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26046 = (new cljs.core.PersistentArrayMap(null,2,inst_26045,null));
var inst_26047 = (new cljs.core.PersistentHashSet(null,inst_26046,null));
var inst_26048 = figwheel.client.focus_msgs.call(null,inst_26047,inst_26043);
var inst_26049 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26048);
var inst_26050 = cljs.core.first.call(null,inst_26048);
var inst_26051 = figwheel.client.autoload_QMARK_.call(null);
var state_26090__$1 = (function (){var statearr_26105 = state_26090;
(statearr_26105[(9)] = inst_26049);

(statearr_26105[(8)] = inst_26050);

return statearr_26105;
})();
if(cljs.core.truth_(inst_26051)){
var statearr_26106_26133 = state_26090__$1;
(statearr_26106_26133[(1)] = (8));

} else {
var statearr_26107_26134 = state_26090__$1;
(statearr_26107_26134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (14))){
var inst_26061 = (state_26090[(2)]);
var state_26090__$1 = state_26090;
var statearr_26108_26135 = state_26090__$1;
(statearr_26108_26135[(2)] = inst_26061);

(statearr_26108_26135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (16))){
var state_26090__$1 = state_26090;
var statearr_26109_26136 = state_26090__$1;
(statearr_26109_26136[(2)] = null);

(statearr_26109_26136[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (10))){
var inst_26082 = (state_26090[(2)]);
var state_26090__$1 = (function (){var statearr_26110 = state_26090;
(statearr_26110[(11)] = inst_26082);

return statearr_26110;
})();
var statearr_26111_26137 = state_26090__$1;
(statearr_26111_26137[(2)] = null);

(statearr_26111_26137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (8))){
var inst_26049 = (state_26090[(9)]);
var inst_26053 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26049,opts);
var state_26090__$1 = state_26090;
if(cljs.core.truth_(inst_26053)){
var statearr_26112_26138 = state_26090__$1;
(statearr_26112_26138[(1)] = (11));

} else {
var statearr_26113_26139 = state_26090__$1;
(statearr_26113_26139[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21564__auto___26121,ch))
;
return ((function (switch__21452__auto__,c__21564__auto___26121,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21453__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21453__auto____0 = (function (){
var statearr_26117 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26117[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21453__auto__);

(statearr_26117[(1)] = (1));

return statearr_26117;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21453__auto____1 = (function (state_26090){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_26090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e26118){if((e26118 instanceof Object)){
var ex__21456__auto__ = e26118;
var statearr_26119_26140 = state_26090;
(statearr_26119_26140[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26141 = state_26090;
state_26090 = G__26141;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21453__auto__ = function(state_26090){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21453__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21453__auto____1.call(this,state_26090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21453__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21453__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto___26121,ch))
})();
var state__21566__auto__ = (function (){var statearr_26120 = f__21565__auto__.call(null);
(statearr_26120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___26121);

return statearr_26120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto___26121,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26142_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26142_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26149 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26149){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26147 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26148 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26147,_STAR_print_newline_STAR_26148,base_path_26149){
return (function() { 
var G__26150__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26150 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26151__i = 0, G__26151__a = new Array(arguments.length -  0);
while (G__26151__i < G__26151__a.length) {G__26151__a[G__26151__i] = arguments[G__26151__i + 0]; ++G__26151__i;}
  args = new cljs.core.IndexedSeq(G__26151__a,0);
} 
return G__26150__delegate.call(this,args);};
G__26150.cljs$lang$maxFixedArity = 0;
G__26150.cljs$lang$applyTo = (function (arglist__26152){
var args = cljs.core.seq(arglist__26152);
return G__26150__delegate(args);
});
G__26150.cljs$core$IFn$_invoke$arity$variadic = G__26150__delegate;
return G__26150;
})()
;})(_STAR_print_fn_STAR_26147,_STAR_print_newline_STAR_26148,base_path_26149))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26148;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26147;
}}catch (e26146){if((e26146 instanceof Error)){
var e = e26146;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26149], null));
} else {
var e = e26146;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26149))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26153){
var map__26160 = p__26153;
var map__26160__$1 = ((((!((map__26160 == null)))?((((map__26160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26160):map__26160);
var opts = map__26160__$1;
var build_id = cljs.core.get.call(null,map__26160__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26160,map__26160__$1,opts,build_id){
return (function (p__26162){
var vec__26163 = p__26162;
var map__26164 = cljs.core.nth.call(null,vec__26163,(0),null);
var map__26164__$1 = ((((!((map__26164 == null)))?((((map__26164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26164):map__26164);
var msg = map__26164__$1;
var msg_name = cljs.core.get.call(null,map__26164__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26163,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26163,map__26164,map__26164__$1,msg,msg_name,_,map__26160,map__26160__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26163,map__26164,map__26164__$1,msg,msg_name,_,map__26160,map__26160__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26160,map__26160__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26170){
var vec__26171 = p__26170;
var map__26172 = cljs.core.nth.call(null,vec__26171,(0),null);
var map__26172__$1 = ((((!((map__26172 == null)))?((((map__26172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26172):map__26172);
var msg = map__26172__$1;
var msg_name = cljs.core.get.call(null,map__26172__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26171,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26174){
var map__26184 = p__26174;
var map__26184__$1 = ((((!((map__26184 == null)))?((((map__26184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26184):map__26184);
var on_compile_warning = cljs.core.get.call(null,map__26184__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26184__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26184,map__26184__$1,on_compile_warning,on_compile_fail){
return (function (p__26186){
var vec__26187 = p__26186;
var map__26188 = cljs.core.nth.call(null,vec__26187,(0),null);
var map__26188__$1 = ((((!((map__26188 == null)))?((((map__26188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26188):map__26188);
var msg = map__26188__$1;
var msg_name = cljs.core.get.call(null,map__26188__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26187,(1));
var pred__26190 = cljs.core._EQ_;
var expr__26191 = msg_name;
if(cljs.core.truth_(pred__26190.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26191))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26190.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26191))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26184,map__26184__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21564__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto__,msg_hist,msg_names,msg){
return (function (state_26407){
var state_val_26408 = (state_26407[(1)]);
if((state_val_26408 === (7))){
var inst_26331 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
if(cljs.core.truth_(inst_26331)){
var statearr_26409_26455 = state_26407__$1;
(statearr_26409_26455[(1)] = (8));

} else {
var statearr_26410_26456 = state_26407__$1;
(statearr_26410_26456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (20))){
var inst_26401 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26411_26457 = state_26407__$1;
(statearr_26411_26457[(2)] = inst_26401);

(statearr_26411_26457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (27))){
var inst_26397 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26412_26458 = state_26407__$1;
(statearr_26412_26458[(2)] = inst_26397);

(statearr_26412_26458[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (1))){
var inst_26324 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26407__$1 = state_26407;
if(cljs.core.truth_(inst_26324)){
var statearr_26413_26459 = state_26407__$1;
(statearr_26413_26459[(1)] = (2));

} else {
var statearr_26414_26460 = state_26407__$1;
(statearr_26414_26460[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (24))){
var inst_26399 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26415_26461 = state_26407__$1;
(statearr_26415_26461[(2)] = inst_26399);

(statearr_26415_26461[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (4))){
var inst_26405 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26407__$1,inst_26405);
} else {
if((state_val_26408 === (15))){
var inst_26403 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26416_26462 = state_26407__$1;
(statearr_26416_26462[(2)] = inst_26403);

(statearr_26416_26462[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (21))){
var inst_26362 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26417_26463 = state_26407__$1;
(statearr_26417_26463[(2)] = inst_26362);

(statearr_26417_26463[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (31))){
var inst_26386 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26407__$1 = state_26407;
if(cljs.core.truth_(inst_26386)){
var statearr_26418_26464 = state_26407__$1;
(statearr_26418_26464[(1)] = (34));

} else {
var statearr_26419_26465 = state_26407__$1;
(statearr_26419_26465[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (32))){
var inst_26395 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26420_26466 = state_26407__$1;
(statearr_26420_26466[(2)] = inst_26395);

(statearr_26420_26466[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (33))){
var inst_26384 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26421_26467 = state_26407__$1;
(statearr_26421_26467[(2)] = inst_26384);

(statearr_26421_26467[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (13))){
var inst_26345 = figwheel.client.heads_up.clear.call(null);
var state_26407__$1 = state_26407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26407__$1,(16),inst_26345);
} else {
if((state_val_26408 === (22))){
var inst_26366 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26367 = figwheel.client.heads_up.append_message.call(null,inst_26366);
var state_26407__$1 = state_26407;
var statearr_26422_26468 = state_26407__$1;
(statearr_26422_26468[(2)] = inst_26367);

(statearr_26422_26468[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (36))){
var inst_26393 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26423_26469 = state_26407__$1;
(statearr_26423_26469[(2)] = inst_26393);

(statearr_26423_26469[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (29))){
var inst_26377 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26424_26470 = state_26407__$1;
(statearr_26424_26470[(2)] = inst_26377);

(statearr_26424_26470[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (6))){
var inst_26326 = (state_26407[(7)]);
var state_26407__$1 = state_26407;
var statearr_26425_26471 = state_26407__$1;
(statearr_26425_26471[(2)] = inst_26326);

(statearr_26425_26471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (28))){
var inst_26373 = (state_26407[(2)]);
var inst_26374 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26375 = figwheel.client.heads_up.display_warning.call(null,inst_26374);
var state_26407__$1 = (function (){var statearr_26426 = state_26407;
(statearr_26426[(8)] = inst_26373);

return statearr_26426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26407__$1,(29),inst_26375);
} else {
if((state_val_26408 === (25))){
var inst_26371 = figwheel.client.heads_up.clear.call(null);
var state_26407__$1 = state_26407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26407__$1,(28),inst_26371);
} else {
if((state_val_26408 === (34))){
var inst_26388 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26407__$1 = state_26407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26407__$1,(37),inst_26388);
} else {
if((state_val_26408 === (17))){
var inst_26353 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26427_26472 = state_26407__$1;
(statearr_26427_26472[(2)] = inst_26353);

(statearr_26427_26472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (3))){
var inst_26343 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26407__$1 = state_26407;
if(cljs.core.truth_(inst_26343)){
var statearr_26428_26473 = state_26407__$1;
(statearr_26428_26473[(1)] = (13));

} else {
var statearr_26429_26474 = state_26407__$1;
(statearr_26429_26474[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (12))){
var inst_26339 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26430_26475 = state_26407__$1;
(statearr_26430_26475[(2)] = inst_26339);

(statearr_26430_26475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (2))){
var inst_26326 = (state_26407[(7)]);
var inst_26326__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26407__$1 = (function (){var statearr_26431 = state_26407;
(statearr_26431[(7)] = inst_26326__$1);

return statearr_26431;
})();
if(cljs.core.truth_(inst_26326__$1)){
var statearr_26432_26476 = state_26407__$1;
(statearr_26432_26476[(1)] = (5));

} else {
var statearr_26433_26477 = state_26407__$1;
(statearr_26433_26477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (23))){
var inst_26369 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26407__$1 = state_26407;
if(cljs.core.truth_(inst_26369)){
var statearr_26434_26478 = state_26407__$1;
(statearr_26434_26478[(1)] = (25));

} else {
var statearr_26435_26479 = state_26407__$1;
(statearr_26435_26479[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (35))){
var state_26407__$1 = state_26407;
var statearr_26436_26480 = state_26407__$1;
(statearr_26436_26480[(2)] = null);

(statearr_26436_26480[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (19))){
var inst_26364 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26407__$1 = state_26407;
if(cljs.core.truth_(inst_26364)){
var statearr_26437_26481 = state_26407__$1;
(statearr_26437_26481[(1)] = (22));

} else {
var statearr_26438_26482 = state_26407__$1;
(statearr_26438_26482[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (11))){
var inst_26335 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26439_26483 = state_26407__$1;
(statearr_26439_26483[(2)] = inst_26335);

(statearr_26439_26483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (9))){
var inst_26337 = figwheel.client.heads_up.clear.call(null);
var state_26407__$1 = state_26407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26407__$1,(12),inst_26337);
} else {
if((state_val_26408 === (5))){
var inst_26328 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26407__$1 = state_26407;
var statearr_26440_26484 = state_26407__$1;
(statearr_26440_26484[(2)] = inst_26328);

(statearr_26440_26484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (14))){
var inst_26355 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26407__$1 = state_26407;
if(cljs.core.truth_(inst_26355)){
var statearr_26441_26485 = state_26407__$1;
(statearr_26441_26485[(1)] = (18));

} else {
var statearr_26442_26486 = state_26407__$1;
(statearr_26442_26486[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (26))){
var inst_26379 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26407__$1 = state_26407;
if(cljs.core.truth_(inst_26379)){
var statearr_26443_26487 = state_26407__$1;
(statearr_26443_26487[(1)] = (30));

} else {
var statearr_26444_26488 = state_26407__$1;
(statearr_26444_26488[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (16))){
var inst_26347 = (state_26407[(2)]);
var inst_26348 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26349 = figwheel.client.format_messages.call(null,inst_26348);
var inst_26350 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26351 = figwheel.client.heads_up.display_error.call(null,inst_26349,inst_26350);
var state_26407__$1 = (function (){var statearr_26445 = state_26407;
(statearr_26445[(9)] = inst_26347);

return statearr_26445;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26407__$1,(17),inst_26351);
} else {
if((state_val_26408 === (30))){
var inst_26381 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26382 = figwheel.client.heads_up.display_warning.call(null,inst_26381);
var state_26407__$1 = state_26407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26407__$1,(33),inst_26382);
} else {
if((state_val_26408 === (10))){
var inst_26341 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26446_26489 = state_26407__$1;
(statearr_26446_26489[(2)] = inst_26341);

(statearr_26446_26489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (18))){
var inst_26357 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26358 = figwheel.client.format_messages.call(null,inst_26357);
var inst_26359 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26360 = figwheel.client.heads_up.display_error.call(null,inst_26358,inst_26359);
var state_26407__$1 = state_26407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26407__$1,(21),inst_26360);
} else {
if((state_val_26408 === (37))){
var inst_26390 = (state_26407[(2)]);
var state_26407__$1 = state_26407;
var statearr_26447_26490 = state_26407__$1;
(statearr_26447_26490[(2)] = inst_26390);

(statearr_26447_26490[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26408 === (8))){
var inst_26333 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26407__$1 = state_26407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26407__$1,(11),inst_26333);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21564__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21452__auto__,c__21564__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21453__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21453__auto____0 = (function (){
var statearr_26451 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26451[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21453__auto__);

(statearr_26451[(1)] = (1));

return statearr_26451;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21453__auto____1 = (function (state_26407){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_26407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e26452){if((e26452 instanceof Object)){
var ex__21456__auto__ = e26452;
var statearr_26453_26491 = state_26407;
(statearr_26453_26491[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26492 = state_26407;
state_26407 = G__26492;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21453__auto__ = function(state_26407){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21453__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21453__auto____1.call(this,state_26407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21453__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21453__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto__,msg_hist,msg_names,msg))
})();
var state__21566__auto__ = (function (){var statearr_26454 = f__21565__auto__.call(null);
(statearr_26454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto__);

return statearr_26454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto__,msg_hist,msg_names,msg))
);

return c__21564__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21564__auto___26555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto___26555,ch){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto___26555,ch){
return (function (state_26538){
var state_val_26539 = (state_26538[(1)]);
if((state_val_26539 === (1))){
var state_26538__$1 = state_26538;
var statearr_26540_26556 = state_26538__$1;
(statearr_26540_26556[(2)] = null);

(statearr_26540_26556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26539 === (2))){
var state_26538__$1 = state_26538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26538__$1,(4),ch);
} else {
if((state_val_26539 === (3))){
var inst_26536 = (state_26538[(2)]);
var state_26538__$1 = state_26538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26538__$1,inst_26536);
} else {
if((state_val_26539 === (4))){
var inst_26526 = (state_26538[(7)]);
var inst_26526__$1 = (state_26538[(2)]);
var state_26538__$1 = (function (){var statearr_26541 = state_26538;
(statearr_26541[(7)] = inst_26526__$1);

return statearr_26541;
})();
if(cljs.core.truth_(inst_26526__$1)){
var statearr_26542_26557 = state_26538__$1;
(statearr_26542_26557[(1)] = (5));

} else {
var statearr_26543_26558 = state_26538__$1;
(statearr_26543_26558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26539 === (5))){
var inst_26526 = (state_26538[(7)]);
var inst_26528 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26526);
var state_26538__$1 = state_26538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26538__$1,(8),inst_26528);
} else {
if((state_val_26539 === (6))){
var state_26538__$1 = state_26538;
var statearr_26544_26559 = state_26538__$1;
(statearr_26544_26559[(2)] = null);

(statearr_26544_26559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26539 === (7))){
var inst_26534 = (state_26538[(2)]);
var state_26538__$1 = state_26538;
var statearr_26545_26560 = state_26538__$1;
(statearr_26545_26560[(2)] = inst_26534);

(statearr_26545_26560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26539 === (8))){
var inst_26530 = (state_26538[(2)]);
var state_26538__$1 = (function (){var statearr_26546 = state_26538;
(statearr_26546[(8)] = inst_26530);

return statearr_26546;
})();
var statearr_26547_26561 = state_26538__$1;
(statearr_26547_26561[(2)] = null);

(statearr_26547_26561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21564__auto___26555,ch))
;
return ((function (switch__21452__auto__,c__21564__auto___26555,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21453__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21453__auto____0 = (function (){
var statearr_26551 = [null,null,null,null,null,null,null,null,null];
(statearr_26551[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21453__auto__);

(statearr_26551[(1)] = (1));

return statearr_26551;
});
var figwheel$client$heads_up_plugin_$_state_machine__21453__auto____1 = (function (state_26538){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_26538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e26552){if((e26552 instanceof Object)){
var ex__21456__auto__ = e26552;
var statearr_26553_26562 = state_26538;
(statearr_26553_26562[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26563 = state_26538;
state_26538 = G__26563;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21453__auto__ = function(state_26538){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21453__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21453__auto____1.call(this,state_26538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21453__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21453__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto___26555,ch))
})();
var state__21566__auto__ = (function (){var statearr_26554 = f__21565__auto__.call(null);
(statearr_26554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___26555);

return statearr_26554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto___26555,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21564__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto__){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto__){
return (function (state_26584){
var state_val_26585 = (state_26584[(1)]);
if((state_val_26585 === (1))){
var inst_26579 = cljs.core.async.timeout.call(null,(3000));
var state_26584__$1 = state_26584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26584__$1,(2),inst_26579);
} else {
if((state_val_26585 === (2))){
var inst_26581 = (state_26584[(2)]);
var inst_26582 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26584__$1 = (function (){var statearr_26586 = state_26584;
(statearr_26586[(7)] = inst_26581);

return statearr_26586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26584__$1,inst_26582);
} else {
return null;
}
}
});})(c__21564__auto__))
;
return ((function (switch__21452__auto__,c__21564__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21453__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21453__auto____0 = (function (){
var statearr_26590 = [null,null,null,null,null,null,null,null];
(statearr_26590[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21453__auto__);

(statearr_26590[(1)] = (1));

return statearr_26590;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21453__auto____1 = (function (state_26584){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_26584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e26591){if((e26591 instanceof Object)){
var ex__21456__auto__ = e26591;
var statearr_26592_26594 = state_26584;
(statearr_26592_26594[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26595 = state_26584;
state_26584 = G__26595;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21453__auto__ = function(state_26584){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21453__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21453__auto____1.call(this,state_26584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21453__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21453__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto__))
})();
var state__21566__auto__ = (function (){var statearr_26593 = f__21565__auto__.call(null);
(statearr_26593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto__);

return statearr_26593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto__))
);

return c__21564__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26596){
var map__26603 = p__26596;
var map__26603__$1 = ((((!((map__26603 == null)))?((((map__26603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26603):map__26603);
var ed = map__26603__$1;
var formatted_exception = cljs.core.get.call(null,map__26603__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26603__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26603__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26605_26609 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26606_26610 = null;
var count__26607_26611 = (0);
var i__26608_26612 = (0);
while(true){
if((i__26608_26612 < count__26607_26611)){
var msg_26613 = cljs.core._nth.call(null,chunk__26606_26610,i__26608_26612);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26613);

var G__26614 = seq__26605_26609;
var G__26615 = chunk__26606_26610;
var G__26616 = count__26607_26611;
var G__26617 = (i__26608_26612 + (1));
seq__26605_26609 = G__26614;
chunk__26606_26610 = G__26615;
count__26607_26611 = G__26616;
i__26608_26612 = G__26617;
continue;
} else {
var temp__4425__auto___26618 = cljs.core.seq.call(null,seq__26605_26609);
if(temp__4425__auto___26618){
var seq__26605_26619__$1 = temp__4425__auto___26618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26605_26619__$1)){
var c__17574__auto___26620 = cljs.core.chunk_first.call(null,seq__26605_26619__$1);
var G__26621 = cljs.core.chunk_rest.call(null,seq__26605_26619__$1);
var G__26622 = c__17574__auto___26620;
var G__26623 = cljs.core.count.call(null,c__17574__auto___26620);
var G__26624 = (0);
seq__26605_26609 = G__26621;
chunk__26606_26610 = G__26622;
count__26607_26611 = G__26623;
i__26608_26612 = G__26624;
continue;
} else {
var msg_26625 = cljs.core.first.call(null,seq__26605_26619__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26625);

var G__26626 = cljs.core.next.call(null,seq__26605_26619__$1);
var G__26627 = null;
var G__26628 = (0);
var G__26629 = (0);
seq__26605_26609 = G__26626;
chunk__26606_26610 = G__26627;
count__26607_26611 = G__26628;
i__26608_26612 = G__26629;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26630){
var map__26633 = p__26630;
var map__26633__$1 = ((((!((map__26633 == null)))?((((map__26633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26633):map__26633);
var w = map__26633__$1;
var message = cljs.core.get.call(null,map__26633__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16759__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16759__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16759__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26641 = cljs.core.seq.call(null,plugins);
var chunk__26642 = null;
var count__26643 = (0);
var i__26644 = (0);
while(true){
if((i__26644 < count__26643)){
var vec__26645 = cljs.core._nth.call(null,chunk__26642,i__26644);
var k = cljs.core.nth.call(null,vec__26645,(0),null);
var plugin = cljs.core.nth.call(null,vec__26645,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26647 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26641,chunk__26642,count__26643,i__26644,pl_26647,vec__26645,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26647.call(null,msg_hist);
});})(seq__26641,chunk__26642,count__26643,i__26644,pl_26647,vec__26645,k,plugin))
);
} else {
}

var G__26648 = seq__26641;
var G__26649 = chunk__26642;
var G__26650 = count__26643;
var G__26651 = (i__26644 + (1));
seq__26641 = G__26648;
chunk__26642 = G__26649;
count__26643 = G__26650;
i__26644 = G__26651;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26641);
if(temp__4425__auto__){
var seq__26641__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26641__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__26641__$1);
var G__26652 = cljs.core.chunk_rest.call(null,seq__26641__$1);
var G__26653 = c__17574__auto__;
var G__26654 = cljs.core.count.call(null,c__17574__auto__);
var G__26655 = (0);
seq__26641 = G__26652;
chunk__26642 = G__26653;
count__26643 = G__26654;
i__26644 = G__26655;
continue;
} else {
var vec__26646 = cljs.core.first.call(null,seq__26641__$1);
var k = cljs.core.nth.call(null,vec__26646,(0),null);
var plugin = cljs.core.nth.call(null,vec__26646,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26656 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26641,chunk__26642,count__26643,i__26644,pl_26656,vec__26646,k,plugin,seq__26641__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26656.call(null,msg_hist);
});})(seq__26641,chunk__26642,count__26643,i__26644,pl_26656,vec__26646,k,plugin,seq__26641__$1,temp__4425__auto__))
);
} else {
}

var G__26657 = cljs.core.next.call(null,seq__26641__$1);
var G__26658 = null;
var G__26659 = (0);
var G__26660 = (0);
seq__26641 = G__26657;
chunk__26642 = G__26658;
count__26643 = G__26659;
i__26644 = G__26660;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26661 = [];
var len__17829__auto___26664 = arguments.length;
var i__17830__auto___26665 = (0);
while(true){
if((i__17830__auto___26665 < len__17829__auto___26664)){
args26661.push((arguments[i__17830__auto___26665]));

var G__26666 = (i__17830__auto___26665 + (1));
i__17830__auto___26665 = G__26666;
continue;
} else {
}
break;
}

var G__26663 = args26661.length;
switch (G__26663) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26661.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17836__auto__ = [];
var len__17829__auto___26672 = arguments.length;
var i__17830__auto___26673 = (0);
while(true){
if((i__17830__auto___26673 < len__17829__auto___26672)){
args__17836__auto__.push((arguments[i__17830__auto___26673]));

var G__26674 = (i__17830__auto___26673 + (1));
i__17830__auto___26673 = G__26674;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((0) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17837__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26669){
var map__26670 = p__26669;
var map__26670__$1 = ((((!((map__26670 == null)))?((((map__26670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26670):map__26670);
var opts = map__26670__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26668){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26668));
});

//# sourceMappingURL=client.js.map