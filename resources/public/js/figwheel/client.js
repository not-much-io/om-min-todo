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
var pred__26123 = cljs.core._EQ_;
var expr__26124 = (function (){var or__16771__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26123.call(null,"true",expr__26124))){
return true;
} else {
if(cljs.core.truth_(pred__26123.call(null,"false",expr__26124))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26124)].join('')));
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
var G__26126__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26127__i = 0, G__26127__a = new Array(arguments.length -  0);
while (G__26127__i < G__26127__a.length) {G__26127__a[G__26127__i] = arguments[G__26127__i + 0]; ++G__26127__i;}
  args = new cljs.core.IndexedSeq(G__26127__a,0);
} 
return G__26126__delegate.call(this,args);};
G__26126.cljs$lang$maxFixedArity = 0;
G__26126.cljs$lang$applyTo = (function (arglist__26128){
var args = cljs.core.seq(arglist__26128);
return G__26126__delegate(args);
});
G__26126.cljs$core$IFn$_invoke$arity$variadic = G__26126__delegate;
return G__26126;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26129){
var map__26132 = p__26129;
var map__26132__$1 = ((((!((map__26132 == null)))?((((map__26132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26132):map__26132);
var message = cljs.core.get.call(null,map__26132__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26132__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__21737__auto___26294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto___26294,ch){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto___26294,ch){
return (function (state_26263){
var state_val_26264 = (state_26263[(1)]);
if((state_val_26264 === (7))){
var inst_26259 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26265_26295 = state_26263__$1;
(statearr_26265_26295[(2)] = inst_26259);

(statearr_26265_26295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (1))){
var state_26263__$1 = state_26263;
var statearr_26266_26296 = state_26263__$1;
(statearr_26266_26296[(2)] = null);

(statearr_26266_26296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (4))){
var inst_26216 = (state_26263[(7)]);
var inst_26216__$1 = (state_26263[(2)]);
var state_26263__$1 = (function (){var statearr_26267 = state_26263;
(statearr_26267[(7)] = inst_26216__$1);

return statearr_26267;
})();
if(cljs.core.truth_(inst_26216__$1)){
var statearr_26268_26297 = state_26263__$1;
(statearr_26268_26297[(1)] = (5));

} else {
var statearr_26269_26298 = state_26263__$1;
(statearr_26269_26298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (15))){
var inst_26223 = (state_26263[(8)]);
var inst_26238 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26223);
var inst_26239 = cljs.core.first.call(null,inst_26238);
var inst_26240 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26239);
var inst_26241 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26240)].join('');
var inst_26242 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26241);
var state_26263__$1 = state_26263;
var statearr_26270_26299 = state_26263__$1;
(statearr_26270_26299[(2)] = inst_26242);

(statearr_26270_26299[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (13))){
var inst_26247 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26271_26300 = state_26263__$1;
(statearr_26271_26300[(2)] = inst_26247);

(statearr_26271_26300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (6))){
var state_26263__$1 = state_26263;
var statearr_26272_26301 = state_26263__$1;
(statearr_26272_26301[(2)] = null);

(statearr_26272_26301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (17))){
var inst_26245 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26273_26302 = state_26263__$1;
(statearr_26273_26302[(2)] = inst_26245);

(statearr_26273_26302[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (3))){
var inst_26261 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26263__$1,inst_26261);
} else {
if((state_val_26264 === (12))){
var inst_26222 = (state_26263[(9)]);
var inst_26236 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26222,opts);
var state_26263__$1 = state_26263;
if(cljs.core.truth_(inst_26236)){
var statearr_26274_26303 = state_26263__$1;
(statearr_26274_26303[(1)] = (15));

} else {
var statearr_26275_26304 = state_26263__$1;
(statearr_26275_26304[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (2))){
var state_26263__$1 = state_26263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26263__$1,(4),ch);
} else {
if((state_val_26264 === (11))){
var inst_26223 = (state_26263[(8)]);
var inst_26228 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26229 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26223);
var inst_26230 = cljs.core.async.timeout.call(null,(1000));
var inst_26231 = [inst_26229,inst_26230];
var inst_26232 = (new cljs.core.PersistentVector(null,2,(5),inst_26228,inst_26231,null));
var state_26263__$1 = state_26263;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26263__$1,(14),inst_26232);
} else {
if((state_val_26264 === (9))){
var inst_26223 = (state_26263[(8)]);
var inst_26249 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26250 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26223);
var inst_26251 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26250);
var inst_26252 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26251)].join('');
var inst_26253 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26252);
var state_26263__$1 = (function (){var statearr_26276 = state_26263;
(statearr_26276[(10)] = inst_26249);

return statearr_26276;
})();
var statearr_26277_26305 = state_26263__$1;
(statearr_26277_26305[(2)] = inst_26253);

(statearr_26277_26305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (5))){
var inst_26216 = (state_26263[(7)]);
var inst_26218 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26219 = (new cljs.core.PersistentArrayMap(null,2,inst_26218,null));
var inst_26220 = (new cljs.core.PersistentHashSet(null,inst_26219,null));
var inst_26221 = figwheel.client.focus_msgs.call(null,inst_26220,inst_26216);
var inst_26222 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26221);
var inst_26223 = cljs.core.first.call(null,inst_26221);
var inst_26224 = figwheel.client.autoload_QMARK_.call(null);
var state_26263__$1 = (function (){var statearr_26278 = state_26263;
(statearr_26278[(8)] = inst_26223);

(statearr_26278[(9)] = inst_26222);

return statearr_26278;
})();
if(cljs.core.truth_(inst_26224)){
var statearr_26279_26306 = state_26263__$1;
(statearr_26279_26306[(1)] = (8));

} else {
var statearr_26280_26307 = state_26263__$1;
(statearr_26280_26307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (14))){
var inst_26234 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26281_26308 = state_26263__$1;
(statearr_26281_26308[(2)] = inst_26234);

(statearr_26281_26308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (16))){
var state_26263__$1 = state_26263;
var statearr_26282_26309 = state_26263__$1;
(statearr_26282_26309[(2)] = null);

(statearr_26282_26309[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (10))){
var inst_26255 = (state_26263[(2)]);
var state_26263__$1 = (function (){var statearr_26283 = state_26263;
(statearr_26283[(11)] = inst_26255);

return statearr_26283;
})();
var statearr_26284_26310 = state_26263__$1;
(statearr_26284_26310[(2)] = null);

(statearr_26284_26310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (8))){
var inst_26222 = (state_26263[(9)]);
var inst_26226 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26222,opts);
var state_26263__$1 = state_26263;
if(cljs.core.truth_(inst_26226)){
var statearr_26285_26311 = state_26263__$1;
(statearr_26285_26311[(1)] = (11));

} else {
var statearr_26286_26312 = state_26263__$1;
(statearr_26286_26312[(1)] = (12));

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
});})(c__21737__auto___26294,ch))
;
return ((function (switch__21625__auto__,c__21737__auto___26294,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21626__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21626__auto____0 = (function (){
var statearr_26290 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26290[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21626__auto__);

(statearr_26290[(1)] = (1));

return statearr_26290;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21626__auto____1 = (function (state_26263){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_26263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e26291){if((e26291 instanceof Object)){
var ex__21629__auto__ = e26291;
var statearr_26292_26313 = state_26263;
(statearr_26292_26313[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26314 = state_26263;
state_26263 = G__26314;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21626__auto__ = function(state_26263){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21626__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21626__auto____1.call(this,state_26263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21626__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21626__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto___26294,ch))
})();
var state__21739__auto__ = (function (){var statearr_26293 = f__21738__auto__.call(null);
(statearr_26293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___26294);

return statearr_26293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto___26294,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26315_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26315_SHARP_));
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
var base_path_26322 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26322){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26320 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26321 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26320,_STAR_print_newline_STAR_26321,base_path_26322){
return (function() { 
var G__26323__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26324__i = 0, G__26324__a = new Array(arguments.length -  0);
while (G__26324__i < G__26324__a.length) {G__26324__a[G__26324__i] = arguments[G__26324__i + 0]; ++G__26324__i;}
  args = new cljs.core.IndexedSeq(G__26324__a,0);
} 
return G__26323__delegate.call(this,args);};
G__26323.cljs$lang$maxFixedArity = 0;
G__26323.cljs$lang$applyTo = (function (arglist__26325){
var args = cljs.core.seq(arglist__26325);
return G__26323__delegate(args);
});
G__26323.cljs$core$IFn$_invoke$arity$variadic = G__26323__delegate;
return G__26323;
})()
;})(_STAR_print_fn_STAR_26320,_STAR_print_newline_STAR_26321,base_path_26322))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26321;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26320;
}}catch (e26319){if((e26319 instanceof Error)){
var e = e26319;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26322], null));
} else {
var e = e26319;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26322))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26326){
var map__26333 = p__26326;
var map__26333__$1 = ((((!((map__26333 == null)))?((((map__26333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26333):map__26333);
var opts = map__26333__$1;
var build_id = cljs.core.get.call(null,map__26333__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26333,map__26333__$1,opts,build_id){
return (function (p__26335){
var vec__26336 = p__26335;
var map__26337 = cljs.core.nth.call(null,vec__26336,(0),null);
var map__26337__$1 = ((((!((map__26337 == null)))?((((map__26337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26337):map__26337);
var msg = map__26337__$1;
var msg_name = cljs.core.get.call(null,map__26337__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26336,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26336,map__26337,map__26337__$1,msg,msg_name,_,map__26333,map__26333__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26336,map__26337,map__26337__$1,msg,msg_name,_,map__26333,map__26333__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26333,map__26333__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26343){
var vec__26344 = p__26343;
var map__26345 = cljs.core.nth.call(null,vec__26344,(0),null);
var map__26345__$1 = ((((!((map__26345 == null)))?((((map__26345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26345):map__26345);
var msg = map__26345__$1;
var msg_name = cljs.core.get.call(null,map__26345__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26344,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26347){
var map__26357 = p__26347;
var map__26357__$1 = ((((!((map__26357 == null)))?((((map__26357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26357):map__26357);
var on_compile_warning = cljs.core.get.call(null,map__26357__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26357__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26357,map__26357__$1,on_compile_warning,on_compile_fail){
return (function (p__26359){
var vec__26360 = p__26359;
var map__26361 = cljs.core.nth.call(null,vec__26360,(0),null);
var map__26361__$1 = ((((!((map__26361 == null)))?((((map__26361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26361):map__26361);
var msg = map__26361__$1;
var msg_name = cljs.core.get.call(null,map__26361__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26360,(1));
var pred__26363 = cljs.core._EQ_;
var expr__26364 = msg_name;
if(cljs.core.truth_(pred__26363.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26364))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26363.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26364))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26357,map__26357__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21737__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto__,msg_hist,msg_names,msg){
return (function (state_26580){
var state_val_26581 = (state_26580[(1)]);
if((state_val_26581 === (7))){
var inst_26504 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
if(cljs.core.truth_(inst_26504)){
var statearr_26582_26628 = state_26580__$1;
(statearr_26582_26628[(1)] = (8));

} else {
var statearr_26583_26629 = state_26580__$1;
(statearr_26583_26629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (20))){
var inst_26574 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
var statearr_26584_26630 = state_26580__$1;
(statearr_26584_26630[(2)] = inst_26574);

(statearr_26584_26630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (27))){
var inst_26570 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
var statearr_26585_26631 = state_26580__$1;
(statearr_26585_26631[(2)] = inst_26570);

(statearr_26585_26631[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (1))){
var inst_26497 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26580__$1 = state_26580;
if(cljs.core.truth_(inst_26497)){
var statearr_26586_26632 = state_26580__$1;
(statearr_26586_26632[(1)] = (2));

} else {
var statearr_26587_26633 = state_26580__$1;
(statearr_26587_26633[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (24))){
var inst_26572 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
var statearr_26588_26634 = state_26580__$1;
(statearr_26588_26634[(2)] = inst_26572);

(statearr_26588_26634[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (4))){
var inst_26578 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26580__$1,inst_26578);
} else {
if((state_val_26581 === (15))){
var inst_26576 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
var statearr_26589_26635 = state_26580__$1;
(statearr_26589_26635[(2)] = inst_26576);

(statearr_26589_26635[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (21))){
var inst_26535 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
var statearr_26590_26636 = state_26580__$1;
(statearr_26590_26636[(2)] = inst_26535);

(statearr_26590_26636[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (31))){
var inst_26559 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26580__$1 = state_26580;
if(cljs.core.truth_(inst_26559)){
var statearr_26591_26637 = state_26580__$1;
(statearr_26591_26637[(1)] = (34));

} else {
var statearr_26592_26638 = state_26580__$1;
(statearr_26592_26638[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (32))){
var inst_26568 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
var statearr_26593_26639 = state_26580__$1;
(statearr_26593_26639[(2)] = inst_26568);

(statearr_26593_26639[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (33))){
var inst_26557 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
var statearr_26594_26640 = state_26580__$1;
(statearr_26594_26640[(2)] = inst_26557);

(statearr_26594_26640[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (13))){
var inst_26518 = figwheel.client.heads_up.clear.call(null);
var state_26580__$1 = state_26580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26580__$1,(16),inst_26518);
} else {
if((state_val_26581 === (22))){
var inst_26539 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26540 = figwheel.client.heads_up.append_message.call(null,inst_26539);
var state_26580__$1 = state_26580;
var statearr_26595_26641 = state_26580__$1;
(statearr_26595_26641[(2)] = inst_26540);

(statearr_26595_26641[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (36))){
var inst_26566 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
var statearr_26596_26642 = state_26580__$1;
(statearr_26596_26642[(2)] = inst_26566);

(statearr_26596_26642[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (29))){
var inst_26550 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
var statearr_26597_26643 = state_26580__$1;
(statearr_26597_26643[(2)] = inst_26550);

(statearr_26597_26643[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (6))){
var inst_26499 = (state_26580[(7)]);
var state_26580__$1 = state_26580;
var statearr_26598_26644 = state_26580__$1;
(statearr_26598_26644[(2)] = inst_26499);

(statearr_26598_26644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (28))){
var inst_26546 = (state_26580[(2)]);
var inst_26547 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26548 = figwheel.client.heads_up.display_warning.call(null,inst_26547);
var state_26580__$1 = (function (){var statearr_26599 = state_26580;
(statearr_26599[(8)] = inst_26546);

return statearr_26599;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26580__$1,(29),inst_26548);
} else {
if((state_val_26581 === (25))){
var inst_26544 = figwheel.client.heads_up.clear.call(null);
var state_26580__$1 = state_26580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26580__$1,(28),inst_26544);
} else {
if((state_val_26581 === (34))){
var inst_26561 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26580__$1 = state_26580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26580__$1,(37),inst_26561);
} else {
if((state_val_26581 === (17))){
var inst_26526 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
var statearr_26600_26645 = state_26580__$1;
(statearr_26600_26645[(2)] = inst_26526);

(statearr_26600_26645[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (3))){
var inst_26516 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26580__$1 = state_26580;
if(cljs.core.truth_(inst_26516)){
var statearr_26601_26646 = state_26580__$1;
(statearr_26601_26646[(1)] = (13));

} else {
var statearr_26602_26647 = state_26580__$1;
(statearr_26602_26647[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (12))){
var inst_26512 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
var statearr_26603_26648 = state_26580__$1;
(statearr_26603_26648[(2)] = inst_26512);

(statearr_26603_26648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (2))){
var inst_26499 = (state_26580[(7)]);
var inst_26499__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26580__$1 = (function (){var statearr_26604 = state_26580;
(statearr_26604[(7)] = inst_26499__$1);

return statearr_26604;
})();
if(cljs.core.truth_(inst_26499__$1)){
var statearr_26605_26649 = state_26580__$1;
(statearr_26605_26649[(1)] = (5));

} else {
var statearr_26606_26650 = state_26580__$1;
(statearr_26606_26650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (23))){
var inst_26542 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26580__$1 = state_26580;
if(cljs.core.truth_(inst_26542)){
var statearr_26607_26651 = state_26580__$1;
(statearr_26607_26651[(1)] = (25));

} else {
var statearr_26608_26652 = state_26580__$1;
(statearr_26608_26652[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (35))){
var state_26580__$1 = state_26580;
var statearr_26609_26653 = state_26580__$1;
(statearr_26609_26653[(2)] = null);

(statearr_26609_26653[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (19))){
var inst_26537 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26580__$1 = state_26580;
if(cljs.core.truth_(inst_26537)){
var statearr_26610_26654 = state_26580__$1;
(statearr_26610_26654[(1)] = (22));

} else {
var statearr_26611_26655 = state_26580__$1;
(statearr_26611_26655[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (11))){
var inst_26508 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
var statearr_26612_26656 = state_26580__$1;
(statearr_26612_26656[(2)] = inst_26508);

(statearr_26612_26656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (9))){
var inst_26510 = figwheel.client.heads_up.clear.call(null);
var state_26580__$1 = state_26580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26580__$1,(12),inst_26510);
} else {
if((state_val_26581 === (5))){
var inst_26501 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26580__$1 = state_26580;
var statearr_26613_26657 = state_26580__$1;
(statearr_26613_26657[(2)] = inst_26501);

(statearr_26613_26657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (14))){
var inst_26528 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26580__$1 = state_26580;
if(cljs.core.truth_(inst_26528)){
var statearr_26614_26658 = state_26580__$1;
(statearr_26614_26658[(1)] = (18));

} else {
var statearr_26615_26659 = state_26580__$1;
(statearr_26615_26659[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (26))){
var inst_26552 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26580__$1 = state_26580;
if(cljs.core.truth_(inst_26552)){
var statearr_26616_26660 = state_26580__$1;
(statearr_26616_26660[(1)] = (30));

} else {
var statearr_26617_26661 = state_26580__$1;
(statearr_26617_26661[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (16))){
var inst_26520 = (state_26580[(2)]);
var inst_26521 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26522 = figwheel.client.format_messages.call(null,inst_26521);
var inst_26523 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26524 = figwheel.client.heads_up.display_error.call(null,inst_26522,inst_26523);
var state_26580__$1 = (function (){var statearr_26618 = state_26580;
(statearr_26618[(9)] = inst_26520);

return statearr_26618;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26580__$1,(17),inst_26524);
} else {
if((state_val_26581 === (30))){
var inst_26554 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26555 = figwheel.client.heads_up.display_warning.call(null,inst_26554);
var state_26580__$1 = state_26580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26580__$1,(33),inst_26555);
} else {
if((state_val_26581 === (10))){
var inst_26514 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
var statearr_26619_26662 = state_26580__$1;
(statearr_26619_26662[(2)] = inst_26514);

(statearr_26619_26662[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (18))){
var inst_26530 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26531 = figwheel.client.format_messages.call(null,inst_26530);
var inst_26532 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26533 = figwheel.client.heads_up.display_error.call(null,inst_26531,inst_26532);
var state_26580__$1 = state_26580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26580__$1,(21),inst_26533);
} else {
if((state_val_26581 === (37))){
var inst_26563 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
var statearr_26620_26663 = state_26580__$1;
(statearr_26620_26663[(2)] = inst_26563);

(statearr_26620_26663[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (8))){
var inst_26506 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26580__$1 = state_26580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26580__$1,(11),inst_26506);
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
});})(c__21737__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21625__auto__,c__21737__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21626__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21626__auto____0 = (function (){
var statearr_26624 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26624[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21626__auto__);

(statearr_26624[(1)] = (1));

return statearr_26624;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21626__auto____1 = (function (state_26580){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_26580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e26625){if((e26625 instanceof Object)){
var ex__21629__auto__ = e26625;
var statearr_26626_26664 = state_26580;
(statearr_26626_26664[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26665 = state_26580;
state_26580 = G__26665;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21626__auto__ = function(state_26580){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21626__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21626__auto____1.call(this,state_26580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21626__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21626__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto__,msg_hist,msg_names,msg))
})();
var state__21739__auto__ = (function (){var statearr_26627 = f__21738__auto__.call(null);
(statearr_26627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto__);

return statearr_26627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto__,msg_hist,msg_names,msg))
);

return c__21737__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21737__auto___26728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto___26728,ch){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto___26728,ch){
return (function (state_26711){
var state_val_26712 = (state_26711[(1)]);
if((state_val_26712 === (1))){
var state_26711__$1 = state_26711;
var statearr_26713_26729 = state_26711__$1;
(statearr_26713_26729[(2)] = null);

(statearr_26713_26729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (2))){
var state_26711__$1 = state_26711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26711__$1,(4),ch);
} else {
if((state_val_26712 === (3))){
var inst_26709 = (state_26711[(2)]);
var state_26711__$1 = state_26711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26711__$1,inst_26709);
} else {
if((state_val_26712 === (4))){
var inst_26699 = (state_26711[(7)]);
var inst_26699__$1 = (state_26711[(2)]);
var state_26711__$1 = (function (){var statearr_26714 = state_26711;
(statearr_26714[(7)] = inst_26699__$1);

return statearr_26714;
})();
if(cljs.core.truth_(inst_26699__$1)){
var statearr_26715_26730 = state_26711__$1;
(statearr_26715_26730[(1)] = (5));

} else {
var statearr_26716_26731 = state_26711__$1;
(statearr_26716_26731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (5))){
var inst_26699 = (state_26711[(7)]);
var inst_26701 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26699);
var state_26711__$1 = state_26711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26711__$1,(8),inst_26701);
} else {
if((state_val_26712 === (6))){
var state_26711__$1 = state_26711;
var statearr_26717_26732 = state_26711__$1;
(statearr_26717_26732[(2)] = null);

(statearr_26717_26732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (7))){
var inst_26707 = (state_26711[(2)]);
var state_26711__$1 = state_26711;
var statearr_26718_26733 = state_26711__$1;
(statearr_26718_26733[(2)] = inst_26707);

(statearr_26718_26733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (8))){
var inst_26703 = (state_26711[(2)]);
var state_26711__$1 = (function (){var statearr_26719 = state_26711;
(statearr_26719[(8)] = inst_26703);

return statearr_26719;
})();
var statearr_26720_26734 = state_26711__$1;
(statearr_26720_26734[(2)] = null);

(statearr_26720_26734[(1)] = (2));


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
});})(c__21737__auto___26728,ch))
;
return ((function (switch__21625__auto__,c__21737__auto___26728,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21626__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21626__auto____0 = (function (){
var statearr_26724 = [null,null,null,null,null,null,null,null,null];
(statearr_26724[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21626__auto__);

(statearr_26724[(1)] = (1));

return statearr_26724;
});
var figwheel$client$heads_up_plugin_$_state_machine__21626__auto____1 = (function (state_26711){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_26711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e26725){if((e26725 instanceof Object)){
var ex__21629__auto__ = e26725;
var statearr_26726_26735 = state_26711;
(statearr_26726_26735[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26736 = state_26711;
state_26711 = G__26736;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21626__auto__ = function(state_26711){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21626__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21626__auto____1.call(this,state_26711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21626__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21626__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto___26728,ch))
})();
var state__21739__auto__ = (function (){var statearr_26727 = f__21738__auto__.call(null);
(statearr_26727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___26728);

return statearr_26727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto___26728,ch))
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
var c__21737__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto__){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto__){
return (function (state_26757){
var state_val_26758 = (state_26757[(1)]);
if((state_val_26758 === (1))){
var inst_26752 = cljs.core.async.timeout.call(null,(3000));
var state_26757__$1 = state_26757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26757__$1,(2),inst_26752);
} else {
if((state_val_26758 === (2))){
var inst_26754 = (state_26757[(2)]);
var inst_26755 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26757__$1 = (function (){var statearr_26759 = state_26757;
(statearr_26759[(7)] = inst_26754);

return statearr_26759;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26757__$1,inst_26755);
} else {
return null;
}
}
});})(c__21737__auto__))
;
return ((function (switch__21625__auto__,c__21737__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21626__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21626__auto____0 = (function (){
var statearr_26763 = [null,null,null,null,null,null,null,null];
(statearr_26763[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21626__auto__);

(statearr_26763[(1)] = (1));

return statearr_26763;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21626__auto____1 = (function (state_26757){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_26757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e26764){if((e26764 instanceof Object)){
var ex__21629__auto__ = e26764;
var statearr_26765_26767 = state_26757;
(statearr_26765_26767[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26768 = state_26757;
state_26757 = G__26768;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21626__auto__ = function(state_26757){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21626__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21626__auto____1.call(this,state_26757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21626__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21626__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto__))
})();
var state__21739__auto__ = (function (){var statearr_26766 = f__21738__auto__.call(null);
(statearr_26766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto__);

return statearr_26766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto__))
);

return c__21737__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26769){
var map__26776 = p__26769;
var map__26776__$1 = ((((!((map__26776 == null)))?((((map__26776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26776):map__26776);
var ed = map__26776__$1;
var formatted_exception = cljs.core.get.call(null,map__26776__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26776__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26776__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26778_26782 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26779_26783 = null;
var count__26780_26784 = (0);
var i__26781_26785 = (0);
while(true){
if((i__26781_26785 < count__26780_26784)){
var msg_26786 = cljs.core._nth.call(null,chunk__26779_26783,i__26781_26785);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26786);

var G__26787 = seq__26778_26782;
var G__26788 = chunk__26779_26783;
var G__26789 = count__26780_26784;
var G__26790 = (i__26781_26785 + (1));
seq__26778_26782 = G__26787;
chunk__26779_26783 = G__26788;
count__26780_26784 = G__26789;
i__26781_26785 = G__26790;
continue;
} else {
var temp__4425__auto___26791 = cljs.core.seq.call(null,seq__26778_26782);
if(temp__4425__auto___26791){
var seq__26778_26792__$1 = temp__4425__auto___26791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26778_26792__$1)){
var c__17574__auto___26793 = cljs.core.chunk_first.call(null,seq__26778_26792__$1);
var G__26794 = cljs.core.chunk_rest.call(null,seq__26778_26792__$1);
var G__26795 = c__17574__auto___26793;
var G__26796 = cljs.core.count.call(null,c__17574__auto___26793);
var G__26797 = (0);
seq__26778_26782 = G__26794;
chunk__26779_26783 = G__26795;
count__26780_26784 = G__26796;
i__26781_26785 = G__26797;
continue;
} else {
var msg_26798 = cljs.core.first.call(null,seq__26778_26792__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26798);

var G__26799 = cljs.core.next.call(null,seq__26778_26792__$1);
var G__26800 = null;
var G__26801 = (0);
var G__26802 = (0);
seq__26778_26782 = G__26799;
chunk__26779_26783 = G__26800;
count__26780_26784 = G__26801;
i__26781_26785 = G__26802;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26803){
var map__26806 = p__26803;
var map__26806__$1 = ((((!((map__26806 == null)))?((((map__26806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26806):map__26806);
var w = map__26806__$1;
var message = cljs.core.get.call(null,map__26806__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__26814 = cljs.core.seq.call(null,plugins);
var chunk__26815 = null;
var count__26816 = (0);
var i__26817 = (0);
while(true){
if((i__26817 < count__26816)){
var vec__26818 = cljs.core._nth.call(null,chunk__26815,i__26817);
var k = cljs.core.nth.call(null,vec__26818,(0),null);
var plugin = cljs.core.nth.call(null,vec__26818,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26820 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26814,chunk__26815,count__26816,i__26817,pl_26820,vec__26818,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26820.call(null,msg_hist);
});})(seq__26814,chunk__26815,count__26816,i__26817,pl_26820,vec__26818,k,plugin))
);
} else {
}

var G__26821 = seq__26814;
var G__26822 = chunk__26815;
var G__26823 = count__26816;
var G__26824 = (i__26817 + (1));
seq__26814 = G__26821;
chunk__26815 = G__26822;
count__26816 = G__26823;
i__26817 = G__26824;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26814);
if(temp__4425__auto__){
var seq__26814__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26814__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__26814__$1);
var G__26825 = cljs.core.chunk_rest.call(null,seq__26814__$1);
var G__26826 = c__17574__auto__;
var G__26827 = cljs.core.count.call(null,c__17574__auto__);
var G__26828 = (0);
seq__26814 = G__26825;
chunk__26815 = G__26826;
count__26816 = G__26827;
i__26817 = G__26828;
continue;
} else {
var vec__26819 = cljs.core.first.call(null,seq__26814__$1);
var k = cljs.core.nth.call(null,vec__26819,(0),null);
var plugin = cljs.core.nth.call(null,vec__26819,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26829 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26814,chunk__26815,count__26816,i__26817,pl_26829,vec__26819,k,plugin,seq__26814__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26829.call(null,msg_hist);
});})(seq__26814,chunk__26815,count__26816,i__26817,pl_26829,vec__26819,k,plugin,seq__26814__$1,temp__4425__auto__))
);
} else {
}

var G__26830 = cljs.core.next.call(null,seq__26814__$1);
var G__26831 = null;
var G__26832 = (0);
var G__26833 = (0);
seq__26814 = G__26830;
chunk__26815 = G__26831;
count__26816 = G__26832;
i__26817 = G__26833;
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
var args26834 = [];
var len__17829__auto___26837 = arguments.length;
var i__17830__auto___26838 = (0);
while(true){
if((i__17830__auto___26838 < len__17829__auto___26837)){
args26834.push((arguments[i__17830__auto___26838]));

var G__26839 = (i__17830__auto___26838 + (1));
i__17830__auto___26838 = G__26839;
continue;
} else {
}
break;
}

var G__26836 = args26834.length;
switch (G__26836) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26834.length)].join('')));

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
var len__17829__auto___26845 = arguments.length;
var i__17830__auto___26846 = (0);
while(true){
if((i__17830__auto___26846 < len__17829__auto___26845)){
args__17836__auto__.push((arguments[i__17830__auto___26846]));

var G__26847 = (i__17830__auto___26846 + (1));
i__17830__auto___26846 = G__26847;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((0) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17837__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26842){
var map__26843 = p__26842;
var map__26843__$1 = ((((!((map__26843 == null)))?((((map__26843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26843):map__26843);
var opts = map__26843__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26841){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26841));
});

//# sourceMappingURL=client.js.map