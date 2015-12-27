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
var pred__50052 = cljs.core._EQ_;
var expr__50053 = (function (){var or__16771__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__50052.call(null,"true",expr__50053))){
return true;
} else {
if(cljs.core.truth_(pred__50052.call(null,"false",expr__50053))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__50053)].join('')));
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
var G__50055__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__50055 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50056__i = 0, G__50056__a = new Array(arguments.length -  0);
while (G__50056__i < G__50056__a.length) {G__50056__a[G__50056__i] = arguments[G__50056__i + 0]; ++G__50056__i;}
  args = new cljs.core.IndexedSeq(G__50056__a,0);
} 
return G__50055__delegate.call(this,args);};
G__50055.cljs$lang$maxFixedArity = 0;
G__50055.cljs$lang$applyTo = (function (arglist__50057){
var args = cljs.core.seq(arglist__50057);
return G__50055__delegate(args);
});
G__50055.cljs$core$IFn$_invoke$arity$variadic = G__50055__delegate;
return G__50055;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__50058){
var map__50061 = p__50058;
var map__50061__$1 = ((((!((map__50061 == null)))?((((map__50061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50061):map__50061);
var message = cljs.core.get.call(null,map__50061__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__50061__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__18796__auto___50223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___50223,ch){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___50223,ch){
return (function (state_50192){
var state_val_50193 = (state_50192[(1)]);
if((state_val_50193 === (7))){
var inst_50188 = (state_50192[(2)]);
var state_50192__$1 = state_50192;
var statearr_50194_50224 = state_50192__$1;
(statearr_50194_50224[(2)] = inst_50188);

(statearr_50194_50224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50193 === (1))){
var state_50192__$1 = state_50192;
var statearr_50195_50225 = state_50192__$1;
(statearr_50195_50225[(2)] = null);

(statearr_50195_50225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50193 === (4))){
var inst_50145 = (state_50192[(7)]);
var inst_50145__$1 = (state_50192[(2)]);
var state_50192__$1 = (function (){var statearr_50196 = state_50192;
(statearr_50196[(7)] = inst_50145__$1);

return statearr_50196;
})();
if(cljs.core.truth_(inst_50145__$1)){
var statearr_50197_50226 = state_50192__$1;
(statearr_50197_50226[(1)] = (5));

} else {
var statearr_50198_50227 = state_50192__$1;
(statearr_50198_50227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50193 === (15))){
var inst_50152 = (state_50192[(8)]);
var inst_50167 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50152);
var inst_50168 = cljs.core.first.call(null,inst_50167);
var inst_50169 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_50168);
var inst_50170 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_50169)].join('');
var inst_50171 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_50170);
var state_50192__$1 = state_50192;
var statearr_50199_50228 = state_50192__$1;
(statearr_50199_50228[(2)] = inst_50171);

(statearr_50199_50228[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50193 === (13))){
var inst_50176 = (state_50192[(2)]);
var state_50192__$1 = state_50192;
var statearr_50200_50229 = state_50192__$1;
(statearr_50200_50229[(2)] = inst_50176);

(statearr_50200_50229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50193 === (6))){
var state_50192__$1 = state_50192;
var statearr_50201_50230 = state_50192__$1;
(statearr_50201_50230[(2)] = null);

(statearr_50201_50230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50193 === (17))){
var inst_50174 = (state_50192[(2)]);
var state_50192__$1 = state_50192;
var statearr_50202_50231 = state_50192__$1;
(statearr_50202_50231[(2)] = inst_50174);

(statearr_50202_50231[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50193 === (3))){
var inst_50190 = (state_50192[(2)]);
var state_50192__$1 = state_50192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50192__$1,inst_50190);
} else {
if((state_val_50193 === (12))){
var inst_50151 = (state_50192[(9)]);
var inst_50165 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_50151,opts);
var state_50192__$1 = state_50192;
if(cljs.core.truth_(inst_50165)){
var statearr_50203_50232 = state_50192__$1;
(statearr_50203_50232[(1)] = (15));

} else {
var statearr_50204_50233 = state_50192__$1;
(statearr_50204_50233[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50193 === (2))){
var state_50192__$1 = state_50192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50192__$1,(4),ch);
} else {
if((state_val_50193 === (11))){
var inst_50152 = (state_50192[(8)]);
var inst_50157 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50158 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_50152);
var inst_50159 = cljs.core.async.timeout.call(null,(1000));
var inst_50160 = [inst_50158,inst_50159];
var inst_50161 = (new cljs.core.PersistentVector(null,2,(5),inst_50157,inst_50160,null));
var state_50192__$1 = state_50192;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50192__$1,(14),inst_50161);
} else {
if((state_val_50193 === (9))){
var inst_50152 = (state_50192[(8)]);
var inst_50178 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_50179 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50152);
var inst_50180 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50179);
var inst_50181 = [cljs.core.str("Not loading: "),cljs.core.str(inst_50180)].join('');
var inst_50182 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_50181);
var state_50192__$1 = (function (){var statearr_50205 = state_50192;
(statearr_50205[(10)] = inst_50178);

return statearr_50205;
})();
var statearr_50206_50234 = state_50192__$1;
(statearr_50206_50234[(2)] = inst_50182);

(statearr_50206_50234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50193 === (5))){
var inst_50145 = (state_50192[(7)]);
var inst_50147 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_50148 = (new cljs.core.PersistentArrayMap(null,2,inst_50147,null));
var inst_50149 = (new cljs.core.PersistentHashSet(null,inst_50148,null));
var inst_50150 = figwheel.client.focus_msgs.call(null,inst_50149,inst_50145);
var inst_50151 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_50150);
var inst_50152 = cljs.core.first.call(null,inst_50150);
var inst_50153 = figwheel.client.autoload_QMARK_.call(null);
var state_50192__$1 = (function (){var statearr_50207 = state_50192;
(statearr_50207[(8)] = inst_50152);

(statearr_50207[(9)] = inst_50151);

return statearr_50207;
})();
if(cljs.core.truth_(inst_50153)){
var statearr_50208_50235 = state_50192__$1;
(statearr_50208_50235[(1)] = (8));

} else {
var statearr_50209_50236 = state_50192__$1;
(statearr_50209_50236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50193 === (14))){
var inst_50163 = (state_50192[(2)]);
var state_50192__$1 = state_50192;
var statearr_50210_50237 = state_50192__$1;
(statearr_50210_50237[(2)] = inst_50163);

(statearr_50210_50237[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50193 === (16))){
var state_50192__$1 = state_50192;
var statearr_50211_50238 = state_50192__$1;
(statearr_50211_50238[(2)] = null);

(statearr_50211_50238[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50193 === (10))){
var inst_50184 = (state_50192[(2)]);
var state_50192__$1 = (function (){var statearr_50212 = state_50192;
(statearr_50212[(11)] = inst_50184);

return statearr_50212;
})();
var statearr_50213_50239 = state_50192__$1;
(statearr_50213_50239[(2)] = null);

(statearr_50213_50239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50193 === (8))){
var inst_50151 = (state_50192[(9)]);
var inst_50155 = figwheel.client.reload_file_state_QMARK_.call(null,inst_50151,opts);
var state_50192__$1 = state_50192;
if(cljs.core.truth_(inst_50155)){
var statearr_50214_50240 = state_50192__$1;
(statearr_50214_50240[(1)] = (11));

} else {
var statearr_50215_50241 = state_50192__$1;
(statearr_50215_50241[(1)] = (12));

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
});})(c__18796__auto___50223,ch))
;
return ((function (switch__18775__auto__,c__18796__auto___50223,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18776__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18776__auto____0 = (function (){
var statearr_50219 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50219[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18776__auto__);

(statearr_50219[(1)] = (1));

return statearr_50219;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18776__auto____1 = (function (state_50192){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_50192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e50220){if((e50220 instanceof Object)){
var ex__18779__auto__ = e50220;
var statearr_50221_50242 = state_50192;
(statearr_50221_50242[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50243 = state_50192;
state_50192 = G__50243;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18776__auto__ = function(state_50192){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18776__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18776__auto____1.call(this,state_50192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18776__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18776__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___50223,ch))
})();
var state__18798__auto__ = (function (){var statearr_50222 = f__18797__auto__.call(null);
(statearr_50222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___50223);

return statearr_50222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___50223,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__50244_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__50244_SHARP_));
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
var base_path_50251 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_50251){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_50249 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_50250 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_50249,_STAR_print_newline_STAR_50250,base_path_50251){
return (function() { 
var G__50252__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__50252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50253__i = 0, G__50253__a = new Array(arguments.length -  0);
while (G__50253__i < G__50253__a.length) {G__50253__a[G__50253__i] = arguments[G__50253__i + 0]; ++G__50253__i;}
  args = new cljs.core.IndexedSeq(G__50253__a,0);
} 
return G__50252__delegate.call(this,args);};
G__50252.cljs$lang$maxFixedArity = 0;
G__50252.cljs$lang$applyTo = (function (arglist__50254){
var args = cljs.core.seq(arglist__50254);
return G__50252__delegate(args);
});
G__50252.cljs$core$IFn$_invoke$arity$variadic = G__50252__delegate;
return G__50252;
})()
;})(_STAR_print_fn_STAR_50249,_STAR_print_newline_STAR_50250,base_path_50251))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_50250;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_50249;
}}catch (e50248){if((e50248 instanceof Error)){
var e = e50248;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_50251], null));
} else {
var e = e50248;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_50251))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__50255){
var map__50262 = p__50255;
var map__50262__$1 = ((((!((map__50262 == null)))?((((map__50262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50262):map__50262);
var opts = map__50262__$1;
var build_id = cljs.core.get.call(null,map__50262__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__50262,map__50262__$1,opts,build_id){
return (function (p__50264){
var vec__50265 = p__50264;
var map__50266 = cljs.core.nth.call(null,vec__50265,(0),null);
var map__50266__$1 = ((((!((map__50266 == null)))?((((map__50266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50266):map__50266);
var msg = map__50266__$1;
var msg_name = cljs.core.get.call(null,map__50266__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__50265,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__50265,map__50266,map__50266__$1,msg,msg_name,_,map__50262,map__50262__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__50265,map__50266,map__50266__$1,msg,msg_name,_,map__50262,map__50262__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__50262,map__50262__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__50272){
var vec__50273 = p__50272;
var map__50274 = cljs.core.nth.call(null,vec__50273,(0),null);
var map__50274__$1 = ((((!((map__50274 == null)))?((((map__50274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50274):map__50274);
var msg = map__50274__$1;
var msg_name = cljs.core.get.call(null,map__50274__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__50273,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__50276){
var map__50286 = p__50276;
var map__50286__$1 = ((((!((map__50286 == null)))?((((map__50286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50286):map__50286);
var on_compile_warning = cljs.core.get.call(null,map__50286__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__50286__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__50286,map__50286__$1,on_compile_warning,on_compile_fail){
return (function (p__50288){
var vec__50289 = p__50288;
var map__50290 = cljs.core.nth.call(null,vec__50289,(0),null);
var map__50290__$1 = ((((!((map__50290 == null)))?((((map__50290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50290):map__50290);
var msg = map__50290__$1;
var msg_name = cljs.core.get.call(null,map__50290__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__50289,(1));
var pred__50292 = cljs.core._EQ_;
var expr__50293 = msg_name;
if(cljs.core.truth_(pred__50292.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__50293))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__50292.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__50293))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__50286,map__50286__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__,msg_hist,msg_names,msg){
return (function (state_50509){
var state_val_50510 = (state_50509[(1)]);
if((state_val_50510 === (7))){
var inst_50433 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
if(cljs.core.truth_(inst_50433)){
var statearr_50511_50557 = state_50509__$1;
(statearr_50511_50557[(1)] = (8));

} else {
var statearr_50512_50558 = state_50509__$1;
(statearr_50512_50558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (20))){
var inst_50503 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
var statearr_50513_50559 = state_50509__$1;
(statearr_50513_50559[(2)] = inst_50503);

(statearr_50513_50559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (27))){
var inst_50499 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
var statearr_50514_50560 = state_50509__$1;
(statearr_50514_50560[(2)] = inst_50499);

(statearr_50514_50560[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (1))){
var inst_50426 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_50509__$1 = state_50509;
if(cljs.core.truth_(inst_50426)){
var statearr_50515_50561 = state_50509__$1;
(statearr_50515_50561[(1)] = (2));

} else {
var statearr_50516_50562 = state_50509__$1;
(statearr_50516_50562[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (24))){
var inst_50501 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
var statearr_50517_50563 = state_50509__$1;
(statearr_50517_50563[(2)] = inst_50501);

(statearr_50517_50563[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (4))){
var inst_50507 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50509__$1,inst_50507);
} else {
if((state_val_50510 === (15))){
var inst_50505 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
var statearr_50518_50564 = state_50509__$1;
(statearr_50518_50564[(2)] = inst_50505);

(statearr_50518_50564[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (21))){
var inst_50464 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
var statearr_50519_50565 = state_50509__$1;
(statearr_50519_50565[(2)] = inst_50464);

(statearr_50519_50565[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (31))){
var inst_50488 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_50509__$1 = state_50509;
if(cljs.core.truth_(inst_50488)){
var statearr_50520_50566 = state_50509__$1;
(statearr_50520_50566[(1)] = (34));

} else {
var statearr_50521_50567 = state_50509__$1;
(statearr_50521_50567[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (32))){
var inst_50497 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
var statearr_50522_50568 = state_50509__$1;
(statearr_50522_50568[(2)] = inst_50497);

(statearr_50522_50568[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (33))){
var inst_50486 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
var statearr_50523_50569 = state_50509__$1;
(statearr_50523_50569[(2)] = inst_50486);

(statearr_50523_50569[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (13))){
var inst_50447 = figwheel.client.heads_up.clear.call(null);
var state_50509__$1 = state_50509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50509__$1,(16),inst_50447);
} else {
if((state_val_50510 === (22))){
var inst_50468 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50469 = figwheel.client.heads_up.append_message.call(null,inst_50468);
var state_50509__$1 = state_50509;
var statearr_50524_50570 = state_50509__$1;
(statearr_50524_50570[(2)] = inst_50469);

(statearr_50524_50570[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (36))){
var inst_50495 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
var statearr_50525_50571 = state_50509__$1;
(statearr_50525_50571[(2)] = inst_50495);

(statearr_50525_50571[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (29))){
var inst_50479 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
var statearr_50526_50572 = state_50509__$1;
(statearr_50526_50572[(2)] = inst_50479);

(statearr_50526_50572[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (6))){
var inst_50428 = (state_50509[(7)]);
var state_50509__$1 = state_50509;
var statearr_50527_50573 = state_50509__$1;
(statearr_50527_50573[(2)] = inst_50428);

(statearr_50527_50573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (28))){
var inst_50475 = (state_50509[(2)]);
var inst_50476 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50477 = figwheel.client.heads_up.display_warning.call(null,inst_50476);
var state_50509__$1 = (function (){var statearr_50528 = state_50509;
(statearr_50528[(8)] = inst_50475);

return statearr_50528;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50509__$1,(29),inst_50477);
} else {
if((state_val_50510 === (25))){
var inst_50473 = figwheel.client.heads_up.clear.call(null);
var state_50509__$1 = state_50509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50509__$1,(28),inst_50473);
} else {
if((state_val_50510 === (34))){
var inst_50490 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50509__$1 = state_50509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50509__$1,(37),inst_50490);
} else {
if((state_val_50510 === (17))){
var inst_50455 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
var statearr_50529_50574 = state_50509__$1;
(statearr_50529_50574[(2)] = inst_50455);

(statearr_50529_50574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (3))){
var inst_50445 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_50509__$1 = state_50509;
if(cljs.core.truth_(inst_50445)){
var statearr_50530_50575 = state_50509__$1;
(statearr_50530_50575[(1)] = (13));

} else {
var statearr_50531_50576 = state_50509__$1;
(statearr_50531_50576[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (12))){
var inst_50441 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
var statearr_50532_50577 = state_50509__$1;
(statearr_50532_50577[(2)] = inst_50441);

(statearr_50532_50577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (2))){
var inst_50428 = (state_50509[(7)]);
var inst_50428__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_50509__$1 = (function (){var statearr_50533 = state_50509;
(statearr_50533[(7)] = inst_50428__$1);

return statearr_50533;
})();
if(cljs.core.truth_(inst_50428__$1)){
var statearr_50534_50578 = state_50509__$1;
(statearr_50534_50578[(1)] = (5));

} else {
var statearr_50535_50579 = state_50509__$1;
(statearr_50535_50579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (23))){
var inst_50471 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_50509__$1 = state_50509;
if(cljs.core.truth_(inst_50471)){
var statearr_50536_50580 = state_50509__$1;
(statearr_50536_50580[(1)] = (25));

} else {
var statearr_50537_50581 = state_50509__$1;
(statearr_50537_50581[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (35))){
var state_50509__$1 = state_50509;
var statearr_50538_50582 = state_50509__$1;
(statearr_50538_50582[(2)] = null);

(statearr_50538_50582[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (19))){
var inst_50466 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_50509__$1 = state_50509;
if(cljs.core.truth_(inst_50466)){
var statearr_50539_50583 = state_50509__$1;
(statearr_50539_50583[(1)] = (22));

} else {
var statearr_50540_50584 = state_50509__$1;
(statearr_50540_50584[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (11))){
var inst_50437 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
var statearr_50541_50585 = state_50509__$1;
(statearr_50541_50585[(2)] = inst_50437);

(statearr_50541_50585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (9))){
var inst_50439 = figwheel.client.heads_up.clear.call(null);
var state_50509__$1 = state_50509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50509__$1,(12),inst_50439);
} else {
if((state_val_50510 === (5))){
var inst_50430 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_50509__$1 = state_50509;
var statearr_50542_50586 = state_50509__$1;
(statearr_50542_50586[(2)] = inst_50430);

(statearr_50542_50586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (14))){
var inst_50457 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_50509__$1 = state_50509;
if(cljs.core.truth_(inst_50457)){
var statearr_50543_50587 = state_50509__$1;
(statearr_50543_50587[(1)] = (18));

} else {
var statearr_50544_50588 = state_50509__$1;
(statearr_50544_50588[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (26))){
var inst_50481 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_50509__$1 = state_50509;
if(cljs.core.truth_(inst_50481)){
var statearr_50545_50589 = state_50509__$1;
(statearr_50545_50589[(1)] = (30));

} else {
var statearr_50546_50590 = state_50509__$1;
(statearr_50546_50590[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (16))){
var inst_50449 = (state_50509[(2)]);
var inst_50450 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50451 = figwheel.client.format_messages.call(null,inst_50450);
var inst_50452 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50453 = figwheel.client.heads_up.display_error.call(null,inst_50451,inst_50452);
var state_50509__$1 = (function (){var statearr_50547 = state_50509;
(statearr_50547[(9)] = inst_50449);

return statearr_50547;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50509__$1,(17),inst_50453);
} else {
if((state_val_50510 === (30))){
var inst_50483 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50484 = figwheel.client.heads_up.display_warning.call(null,inst_50483);
var state_50509__$1 = state_50509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50509__$1,(33),inst_50484);
} else {
if((state_val_50510 === (10))){
var inst_50443 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
var statearr_50548_50591 = state_50509__$1;
(statearr_50548_50591[(2)] = inst_50443);

(statearr_50548_50591[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (18))){
var inst_50459 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50460 = figwheel.client.format_messages.call(null,inst_50459);
var inst_50461 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50462 = figwheel.client.heads_up.display_error.call(null,inst_50460,inst_50461);
var state_50509__$1 = state_50509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50509__$1,(21),inst_50462);
} else {
if((state_val_50510 === (37))){
var inst_50492 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
var statearr_50549_50592 = state_50509__$1;
(statearr_50549_50592[(2)] = inst_50492);

(statearr_50549_50592[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (8))){
var inst_50435 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50509__$1 = state_50509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50509__$1,(11),inst_50435);
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
});})(c__18796__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18775__auto__,c__18796__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto____0 = (function (){
var statearr_50553 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50553[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto__);

(statearr_50553[(1)] = (1));

return statearr_50553;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto____1 = (function (state_50509){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_50509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e50554){if((e50554 instanceof Object)){
var ex__18779__auto__ = e50554;
var statearr_50555_50593 = state_50509;
(statearr_50555_50593[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50594 = state_50509;
state_50509 = G__50594;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto__ = function(state_50509){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto____1.call(this,state_50509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__,msg_hist,msg_names,msg))
})();
var state__18798__auto__ = (function (){var statearr_50556 = f__18797__auto__.call(null);
(statearr_50556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_50556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__,msg_hist,msg_names,msg))
);

return c__18796__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18796__auto___50657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___50657,ch){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___50657,ch){
return (function (state_50640){
var state_val_50641 = (state_50640[(1)]);
if((state_val_50641 === (1))){
var state_50640__$1 = state_50640;
var statearr_50642_50658 = state_50640__$1;
(statearr_50642_50658[(2)] = null);

(statearr_50642_50658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50641 === (2))){
var state_50640__$1 = state_50640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50640__$1,(4),ch);
} else {
if((state_val_50641 === (3))){
var inst_50638 = (state_50640[(2)]);
var state_50640__$1 = state_50640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50640__$1,inst_50638);
} else {
if((state_val_50641 === (4))){
var inst_50628 = (state_50640[(7)]);
var inst_50628__$1 = (state_50640[(2)]);
var state_50640__$1 = (function (){var statearr_50643 = state_50640;
(statearr_50643[(7)] = inst_50628__$1);

return statearr_50643;
})();
if(cljs.core.truth_(inst_50628__$1)){
var statearr_50644_50659 = state_50640__$1;
(statearr_50644_50659[(1)] = (5));

} else {
var statearr_50645_50660 = state_50640__$1;
(statearr_50645_50660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50641 === (5))){
var inst_50628 = (state_50640[(7)]);
var inst_50630 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_50628);
var state_50640__$1 = state_50640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50640__$1,(8),inst_50630);
} else {
if((state_val_50641 === (6))){
var state_50640__$1 = state_50640;
var statearr_50646_50661 = state_50640__$1;
(statearr_50646_50661[(2)] = null);

(statearr_50646_50661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50641 === (7))){
var inst_50636 = (state_50640[(2)]);
var state_50640__$1 = state_50640;
var statearr_50647_50662 = state_50640__$1;
(statearr_50647_50662[(2)] = inst_50636);

(statearr_50647_50662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50641 === (8))){
var inst_50632 = (state_50640[(2)]);
var state_50640__$1 = (function (){var statearr_50648 = state_50640;
(statearr_50648[(8)] = inst_50632);

return statearr_50648;
})();
var statearr_50649_50663 = state_50640__$1;
(statearr_50649_50663[(2)] = null);

(statearr_50649_50663[(1)] = (2));


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
});})(c__18796__auto___50657,ch))
;
return ((function (switch__18775__auto__,c__18796__auto___50657,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18776__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18776__auto____0 = (function (){
var statearr_50653 = [null,null,null,null,null,null,null,null,null];
(statearr_50653[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18776__auto__);

(statearr_50653[(1)] = (1));

return statearr_50653;
});
var figwheel$client$heads_up_plugin_$_state_machine__18776__auto____1 = (function (state_50640){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_50640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e50654){if((e50654 instanceof Object)){
var ex__18779__auto__ = e50654;
var statearr_50655_50664 = state_50640;
(statearr_50655_50664[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50665 = state_50640;
state_50640 = G__50665;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18776__auto__ = function(state_50640){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18776__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18776__auto____1.call(this,state_50640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18776__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18776__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___50657,ch))
})();
var state__18798__auto__ = (function (){var statearr_50656 = f__18797__auto__.call(null);
(statearr_50656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___50657);

return statearr_50656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___50657,ch))
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
var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__){
return (function (state_50686){
var state_val_50687 = (state_50686[(1)]);
if((state_val_50687 === (1))){
var inst_50681 = cljs.core.async.timeout.call(null,(3000));
var state_50686__$1 = state_50686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50686__$1,(2),inst_50681);
} else {
if((state_val_50687 === (2))){
var inst_50683 = (state_50686[(2)]);
var inst_50684 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_50686__$1 = (function (){var statearr_50688 = state_50686;
(statearr_50688[(7)] = inst_50683);

return statearr_50688;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50686__$1,inst_50684);
} else {
return null;
}
}
});})(c__18796__auto__))
;
return ((function (switch__18775__auto__,c__18796__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18776__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18776__auto____0 = (function (){
var statearr_50692 = [null,null,null,null,null,null,null,null];
(statearr_50692[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18776__auto__);

(statearr_50692[(1)] = (1));

return statearr_50692;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18776__auto____1 = (function (state_50686){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_50686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e50693){if((e50693 instanceof Object)){
var ex__18779__auto__ = e50693;
var statearr_50694_50696 = state_50686;
(statearr_50694_50696[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50697 = state_50686;
state_50686 = G__50697;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18776__auto__ = function(state_50686){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18776__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18776__auto____1.call(this,state_50686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18776__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18776__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__))
})();
var state__18798__auto__ = (function (){var statearr_50695 = f__18797__auto__.call(null);
(statearr_50695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_50695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__))
);

return c__18796__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__50698){
var map__50705 = p__50698;
var map__50705__$1 = ((((!((map__50705 == null)))?((((map__50705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50705):map__50705);
var ed = map__50705__$1;
var formatted_exception = cljs.core.get.call(null,map__50705__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__50705__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__50705__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__50707_50711 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__50708_50712 = null;
var count__50709_50713 = (0);
var i__50710_50714 = (0);
while(true){
if((i__50710_50714 < count__50709_50713)){
var msg_50715 = cljs.core._nth.call(null,chunk__50708_50712,i__50710_50714);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50715);

var G__50716 = seq__50707_50711;
var G__50717 = chunk__50708_50712;
var G__50718 = count__50709_50713;
var G__50719 = (i__50710_50714 + (1));
seq__50707_50711 = G__50716;
chunk__50708_50712 = G__50717;
count__50709_50713 = G__50718;
i__50710_50714 = G__50719;
continue;
} else {
var temp__4425__auto___50720 = cljs.core.seq.call(null,seq__50707_50711);
if(temp__4425__auto___50720){
var seq__50707_50721__$1 = temp__4425__auto___50720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50707_50721__$1)){
var c__17574__auto___50722 = cljs.core.chunk_first.call(null,seq__50707_50721__$1);
var G__50723 = cljs.core.chunk_rest.call(null,seq__50707_50721__$1);
var G__50724 = c__17574__auto___50722;
var G__50725 = cljs.core.count.call(null,c__17574__auto___50722);
var G__50726 = (0);
seq__50707_50711 = G__50723;
chunk__50708_50712 = G__50724;
count__50709_50713 = G__50725;
i__50710_50714 = G__50726;
continue;
} else {
var msg_50727 = cljs.core.first.call(null,seq__50707_50721__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50727);

var G__50728 = cljs.core.next.call(null,seq__50707_50721__$1);
var G__50729 = null;
var G__50730 = (0);
var G__50731 = (0);
seq__50707_50711 = G__50728;
chunk__50708_50712 = G__50729;
count__50709_50713 = G__50730;
i__50710_50714 = G__50731;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50732){
var map__50735 = p__50732;
var map__50735__$1 = ((((!((map__50735 == null)))?((((map__50735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50735):map__50735);
var w = map__50735__$1;
var message = cljs.core.get.call(null,map__50735__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__50743 = cljs.core.seq.call(null,plugins);
var chunk__50744 = null;
var count__50745 = (0);
var i__50746 = (0);
while(true){
if((i__50746 < count__50745)){
var vec__50747 = cljs.core._nth.call(null,chunk__50744,i__50746);
var k = cljs.core.nth.call(null,vec__50747,(0),null);
var plugin = cljs.core.nth.call(null,vec__50747,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50749 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50743,chunk__50744,count__50745,i__50746,pl_50749,vec__50747,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50749.call(null,msg_hist);
});})(seq__50743,chunk__50744,count__50745,i__50746,pl_50749,vec__50747,k,plugin))
);
} else {
}

var G__50750 = seq__50743;
var G__50751 = chunk__50744;
var G__50752 = count__50745;
var G__50753 = (i__50746 + (1));
seq__50743 = G__50750;
chunk__50744 = G__50751;
count__50745 = G__50752;
i__50746 = G__50753;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__50743);
if(temp__4425__auto__){
var seq__50743__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50743__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__50743__$1);
var G__50754 = cljs.core.chunk_rest.call(null,seq__50743__$1);
var G__50755 = c__17574__auto__;
var G__50756 = cljs.core.count.call(null,c__17574__auto__);
var G__50757 = (0);
seq__50743 = G__50754;
chunk__50744 = G__50755;
count__50745 = G__50756;
i__50746 = G__50757;
continue;
} else {
var vec__50748 = cljs.core.first.call(null,seq__50743__$1);
var k = cljs.core.nth.call(null,vec__50748,(0),null);
var plugin = cljs.core.nth.call(null,vec__50748,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50758 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50743,chunk__50744,count__50745,i__50746,pl_50758,vec__50748,k,plugin,seq__50743__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50758.call(null,msg_hist);
});})(seq__50743,chunk__50744,count__50745,i__50746,pl_50758,vec__50748,k,plugin,seq__50743__$1,temp__4425__auto__))
);
} else {
}

var G__50759 = cljs.core.next.call(null,seq__50743__$1);
var G__50760 = null;
var G__50761 = (0);
var G__50762 = (0);
seq__50743 = G__50759;
chunk__50744 = G__50760;
count__50745 = G__50761;
i__50746 = G__50762;
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
var args50763 = [];
var len__17829__auto___50766 = arguments.length;
var i__17830__auto___50767 = (0);
while(true){
if((i__17830__auto___50767 < len__17829__auto___50766)){
args50763.push((arguments[i__17830__auto___50767]));

var G__50768 = (i__17830__auto___50767 + (1));
i__17830__auto___50767 = G__50768;
continue;
} else {
}
break;
}

var G__50765 = args50763.length;
switch (G__50765) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50763.length)].join('')));

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
var len__17829__auto___50774 = arguments.length;
var i__17830__auto___50775 = (0);
while(true){
if((i__17830__auto___50775 < len__17829__auto___50774)){
args__17836__auto__.push((arguments[i__17830__auto___50775]));

var G__50776 = (i__17830__auto___50775 + (1));
i__17830__auto___50775 = G__50776;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((0) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17837__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50771){
var map__50772 = p__50771;
var map__50772__$1 = ((((!((map__50772 == null)))?((((map__50772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50772):map__50772);
var opts = map__50772__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50770){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50770));
});

//# sourceMappingURL=client.js.map