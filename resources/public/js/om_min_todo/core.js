// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_min_todo.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
om_min_todo.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"app-title","app-title",1908483663),"Minimal Om Todo",new cljs.core.Keyword(null,"todos","todos",630308868),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Keep an eye on bunny",new cljs.core.Keyword(null,"priority","priority",1431093715),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Get something to eat",new cljs.core.Keyword(null,"priority","priority",1431093715),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Read books",new cljs.core.Keyword(null,"priority","priority",1431093715),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Write code",new cljs.core.Keyword(null,"priority","priority",1431093715),(2)], null)], null),new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error-clearing","error-clearing",1103771027),false], null)], null)], null));
om_min_todo.core.todo_item;

om_min_todo.core.todo_list;

om_min_todo.core.new_todo_form;

om_min_todo.core.root;
if(typeof om_min_todo.core.read !== 'undefined'){
} else {
om_min_todo.core.read = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-min-todo.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
cljs.core._add_method.call(null,om_min_todo.core.read,new cljs.core.Keyword(null,"app-title","app-title",1908483663),(function (p__70971,_,___$1){
var map__70972 = p__70971;
var map__70972__$1 = ((((!((map__70972 == null)))?((((map__70972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70972):map__70972);
var state = cljs.core.get.call(null,map__70972__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"app-title","app-title",1908483663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null);
}));
cljs.core._add_method.call(null,om_min_todo.core.read,new cljs.core.Keyword(null,"sorted-todos","sorted-todos",-1662564733),(function (p__70974,_,___$1){
var map__70975 = p__70974;
var map__70975__$1 = ((((!((map__70975 == null)))?((((map__70975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70975):map__70975);
var state = cljs.core.get.call(null,map__70975__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var todos = new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"priority","priority",1431093715),todos)], null);
}));
cljs.core._add_method.call(null,om_min_todo.core.read,new cljs.core.Keyword(null,"errors","errors",-908790718),(function (p__70977,_,___$1){
var map__70978 = p__70977;
var map__70978__$1 = ((((!((map__70978 == null)))?((((map__70978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70978):map__70978);
var state = cljs.core.get.call(null,map__70978__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null);
}));
cljs.core._add_method.call(null,om_min_todo.core.read,new cljs.core.Keyword(null,"flags","flags",1775418075),(function (p__70980,_,___$1){
var map__70981 = p__70980;
var map__70981__$1 = ((((!((map__70981 == null)))?((((map__70981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70981):map__70981);
var state = cljs.core.get.call(null,map__70981__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null);
}));
if(typeof om_min_todo.core.mutate !== 'undefined'){
} else {
om_min_todo.core.mutate = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-min-todo.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
cljs.core._add_method.call(null,om_min_todo.core.mutate,new cljs.core.Symbol("todos","add","todos/add",379968113,null),(function (p__70983,_,p__70984){
var map__70985 = p__70983;
var map__70985__$1 = ((((!((map__70985 == null)))?((((map__70985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70985):map__70985);
var state = cljs.core.get.call(null,map__70985__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__70986 = p__70984;
var map__70986__$1 = ((((!((map__70986 == null)))?((((map__70986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70986):map__70986);
var title = cljs.core.get.call(null,map__70986__$1,new cljs.core.Keyword(null,"title","title",636505583));
var priority = cljs.core.get.call(null,map__70986__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__70985,map__70985__$1,state,map__70986,map__70986__$1,title,priority){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null),((function (map__70985,map__70985__$1,state,map__70986,map__70986__$1,title,priority){
return (function (curr_todos){
return cljs.core.conj.call(null,curr_todos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"priority","priority",1431093715),priority], null));
});})(map__70985,map__70985__$1,state,map__70986,map__70986__$1,title,priority))
);
});})(map__70985,map__70985__$1,state,map__70986,map__70986__$1,title,priority))
], null);
}));
cljs.core._add_method.call(null,om_min_todo.core.mutate,new cljs.core.Symbol("todos","remove","todos/remove",1348122428,null),(function (p__70990,_,p__70991){
var map__70992 = p__70990;
var map__70992__$1 = ((((!((map__70992 == null)))?((((map__70992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70992):map__70992);
var state = cljs.core.get.call(null,map__70992__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__70993 = p__70991;
var map__70993__$1 = ((((!((map__70993 == null)))?((((map__70993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70993):map__70993);
var title = cljs.core.get.call(null,map__70993__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__70992,map__70992__$1,state,map__70993,map__70993__$1,title){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null),((function (map__70992,map__70992__$1,state,map__70993,map__70993__$1,title){
return (function (curr_todos){
return cljs.core.filter.call(null,((function (map__70992,map__70992__$1,state,map__70993,map__70993__$1,title){
return (function (p1__70989_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__70989_SHARP_),title);
});})(map__70992,map__70992__$1,state,map__70993,map__70993__$1,title))
,curr_todos);
});})(map__70992,map__70992__$1,state,map__70993,map__70993__$1,title))
);
});})(map__70992,map__70992__$1,state,map__70993,map__70993__$1,title))
], null);
}));
cljs.core._add_method.call(null,om_min_todo.core.mutate,new cljs.core.Symbol("errors","add","errors/add",-1562113793,null),(function (p__70996,_,p__70997){
var map__70998 = p__70996;
var map__70998__$1 = ((((!((map__70998 == null)))?((((map__70998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70998):map__70998);
var state = cljs.core.get.call(null,map__70998__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__70999 = p__70997;
var map__70999__$1 = ((((!((map__70999 == null)))?((((map__70999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70999):map__70999);
var error = cljs.core.get.call(null,map__70999__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__70998,map__70998__$1,state,map__70999,map__70999__$1,error){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),((function (map__70998,map__70998__$1,state,map__70999,map__70999__$1,error){
return (function (curr_errors){
return cljs.core.conj.call(null,curr_errors,error);
});})(map__70998,map__70998__$1,state,map__70999,map__70999__$1,error))
);
});})(map__70998,map__70998__$1,state,map__70999,map__70999__$1,error))
], null);
}));
cljs.core._add_method.call(null,om_min_todo.core.mutate,new cljs.core.Symbol("errors","clear-last","errors/clear-last",-1388795027,null),(function (p__71002,_,___$1){
var map__71003 = p__71002;
var map__71003__$1 = ((((!((map__71003 == null)))?((((map__71003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71003):map__71003);
var state = cljs.core.get.call(null,map__71003__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__71003,map__71003__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),((function (map__71003,map__71003__$1,state){
return (function (curr_errors){
return cljs.core.drop_last.call(null,curr_errors);
});})(map__71003,map__71003__$1,state))
);
});})(map__71003,map__71003__$1,state))
], null);
}));
cljs.core._add_method.call(null,om_min_todo.core.mutate,new cljs.core.Symbol("flags","toggle","flags/toggle",-1258778948,null),(function (p__71006,_,p__71007){
var map__71008 = p__71006;
var map__71008__$1 = ((((!((map__71008 == null)))?((((map__71008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71008):map__71008);
var state = cljs.core.get.call(null,map__71008__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__71009 = p__71007;
var map__71009__$1 = ((((!((map__71009 == null)))?((((map__71009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71009):map__71009);
var flag = cljs.core.get.call(null,map__71009__$1,new cljs.core.Keyword(null,"flag","flag",1088647881));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__71008,map__71008__$1,state,map__71009,map__71009__$1,flag){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flags","flags",1775418075)], null),((function (map__71008,map__71008__$1,state,map__71009,map__71009__$1,flag){
return (function (curr_flags){
var to_toggle = cljs.core.filter.call(null,((function (map__71008,map__71008__$1,state,map__71009,map__71009__$1,flag){
return (function (p1__71005_SHARP_){
return !((flag.call(null,p1__71005_SHARP_) == null));
});})(map__71008,map__71008__$1,state,map__71009,map__71009__$1,flag))
,curr_flags);
return null;
});})(map__71008,map__71008__$1,state,map__71009,map__71009__$1,flag))
);
});})(map__71008,map__71008__$1,state,map__71009,map__71009__$1,flag))
], null);
}));
om_min_todo.core.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_min_todo.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_min_todo.core.mutate], null));
om_min_todo.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_min_todo.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om_min_todo.core.parser], null));
/**
 * @constructor
 */
om_min_todo.core.ToDoItem = (function om_min_todo$core$ToDoItem(){
var this__19965__auto__ = this;
React.Component.apply(this__19965__auto__,arguments);

if(!((this__19965__auto__.initLocalState == null))){
this__19965__auto__.state = this__19965__auto__.initLocalState();
} else {
this__19965__auto__.state = {};
}

return this__19965__auto__;
});

om_min_todo.core.ToDoItem.prototype = goog.object.clone(React.Component.prototype);

var x71016_71026 = om_min_todo.core.ToDoItem.prototype;
x71016_71026.componentWillUpdate = ((function (x71016_71026){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19905__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19905__auto__);
});})(x71016_71026))
;

x71016_71026.shouldComponentUpdate = ((function (x71016_71026){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19905__auto__),goog.object.get(next_props__19906__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__19905__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19905__auto__.state,"omcljs$state"),goog.object.get(next_state__19907__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x71016_71026))
;

x71016_71026.componentWillUnmount = ((function (x71016_71026){
return (function (){
var this__19905__auto__ = this;
var r__19911__auto__ = om.next.get_reconciler.call(null,this__19905__auto__);
var cfg__19912__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19911__auto__);
var st__19913__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19912__auto__);
var indexer__19910__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19912__auto__);
if((st__19913__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19913__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19905__auto__);
}

if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x71016_71026))
;

x71016_71026.componentDidUpdate = ((function (x71016_71026){
return (function (prev_props__19908__auto__,prev_state__19909__auto__){
var this__19905__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19905__auto__);
});})(x71016_71026))
;

x71016_71026.isMounted = ((function (x71016_71026){
return (function (){
var this__19905__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19905__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x71016_71026))
;

x71016_71026.componentWillMount = ((function (x71016_71026){
return (function (){
var this__19905__auto__ = this;
var indexer__19910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19905__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x71016_71026))
;

x71016_71026.render = ((function (x71016_71026){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_71017 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_71018 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_71019 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_71020 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_71021 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__71022 = om.next.props.call(null,this$);
var map__71022__$1 = ((((!((map__71022 == null)))?((((map__71022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71022):map__71022);
var title = cljs.core.get.call(null,map__71022__$1,new cljs.core.Keyword(null,"title","title",636505583));
var priority = cljs.core.get.call(null,map__71022__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
return React.DOM.li(null,om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str("Priority: "),cljs.core.str(priority)].join('')))))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__71022,map__71022__$1,title,priority,_STAR_reconciler_STAR_71017,_STAR_depth_STAR_71018,_STAR_shared_STAR_71019,_STAR_instrument_STAR_71020,_STAR_parent_STAR_71021,this$,x71016_71026){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("todos","remove","todos/remove",1348122428,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"title","title",636505583)),cljs.core._conj.call(null,cljs.core.List.EMPTY,title)))))))))))))));
});})(map__71022,map__71022__$1,title,priority,_STAR_reconciler_STAR_71017,_STAR_depth_STAR_71018,_STAR_shared_STAR_71019,_STAR_instrument_STAR_71020,_STAR_parent_STAR_71021,this$,x71016_71026))
},om.util.force_children.call(null,"-"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_71021;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_71020;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_71019;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_71018;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_71017;
}});})(x71016_71026))
;


om_min_todo.core.ToDoItem.prototype.constructor = om_min_todo.core.ToDoItem;

om_min_todo.core.ToDoItem.prototype.om$isComponent = true;

var x71024_71027 = om_min_todo.core.ToDoItem;
x71024_71027.om$next$IQuery$ = true;

x71024_71027.om$next$IQuery$query$arity$1 = ((function (x71024_71027){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("todos","remove","todos/remove",1348122428,null))], null);
});})(x71024_71027))
;


var x71025_71028 = om_min_todo.core.ToDoItem.prototype;
x71025_71028.om$next$IQuery$ = true;

x71025_71028.om$next$IQuery$query$arity$1 = ((function (x71025_71028){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("todos","remove","todos/remove",1348122428,null))], null);
});})(x71025_71028))
;


om_min_todo.core.ToDoItem.cljs$lang$type = true;

om_min_todo.core.ToDoItem.cljs$lang$ctorStr = "om-min-todo.core/ToDoItem";

om_min_todo.core.ToDoItem.cljs$lang$ctorPrWriter = (function (this__19967__auto__,writer__19968__auto__,opt__19969__auto__){
return cljs.core._write.call(null,writer__19968__auto__,"om-min-todo.core/ToDoItem");
});
om_min_todo.core.todo_list = (function om_min_todo$core$todo_list(sorted_todos){
return React.DOM.ol(null,om.util.force_children.call(null,cljs.core.map.call(null,om_min_todo.core.todo_item,sorted_todos)));
});
/**
 * @constructor
 */
om_min_todo.core.NewToDoForm = (function om_min_todo$core$NewToDoForm(){
var this__19965__auto__ = this;
React.Component.apply(this__19965__auto__,arguments);

if(!((this__19965__auto__.initLocalState == null))){
this__19965__auto__.state = this__19965__auto__.initLocalState();
} else {
this__19965__auto__.state = {};
}

return this__19965__auto__;
});

om_min_todo.core.NewToDoForm.prototype = goog.object.clone(React.Component.prototype);

var x71033_71041 = om_min_todo.core.NewToDoForm.prototype;
x71033_71041.componentWillUpdate = ((function (x71033_71041){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19905__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19905__auto__);
});})(x71033_71041))
;

x71033_71041.shouldComponentUpdate = ((function (x71033_71041){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19905__auto__),goog.object.get(next_props__19906__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__19905__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19905__auto__.state,"omcljs$state"),goog.object.get(next_state__19907__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x71033_71041))
;

x71033_71041.componentWillUnmount = ((function (x71033_71041){
return (function (){
var this__19905__auto__ = this;
var r__19911__auto__ = om.next.get_reconciler.call(null,this__19905__auto__);
var cfg__19912__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19911__auto__);
var st__19913__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19912__auto__);
var indexer__19910__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19912__auto__);
if((st__19913__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19913__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19905__auto__);
}

if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x71033_71041))
;

x71033_71041.componentDidUpdate = ((function (x71033_71041){
return (function (prev_props__19908__auto__,prev_state__19909__auto__){
var this__19905__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19905__auto__);
});})(x71033_71041))
;

x71033_71041.isMounted = ((function (x71033_71041){
return (function (){
var this__19905__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19905__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x71033_71041))
;

x71033_71041.componentWillMount = ((function (x71033_71041){
return (function (){
var this__19905__auto__ = this;
var indexer__19910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19905__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x71033_71041))
;

x71033_71041.render = ((function (x71033_71041){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_71034 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_71035 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_71036 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_71037 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_71038 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var valid_title_QMARK_ = ((function (_STAR_reconciler_STAR_71034,_STAR_depth_STAR_71035,_STAR_shared_STAR_71036,_STAR_instrument_STAR_71037,_STAR_parent_STAR_71038,this$,x71033_71041){
return (function (title){
var names = cljs.core.map.call(null,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_min_todo.core.app_state)));
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([title], true),names));
});})(_STAR_reconciler_STAR_71034,_STAR_depth_STAR_71035,_STAR_shared_STAR_71036,_STAR_instrument_STAR_71037,_STAR_parent_STAR_71038,this$,x71033_71041))
;
var get_title = ((function (valid_title_QMARK_,_STAR_reconciler_STAR_71034,_STAR_depth_STAR_71035,_STAR_shared_STAR_71036,_STAR_instrument_STAR_71037,_STAR_parent_STAR_71038,this$,x71033_71041){
return (function (){
return goog.dom.getElement("todo-input-title").value;
});})(valid_title_QMARK_,_STAR_reconciler_STAR_71034,_STAR_depth_STAR_71035,_STAR_shared_STAR_71036,_STAR_instrument_STAR_71037,_STAR_parent_STAR_71038,this$,x71033_71041))
;
var get_priority = ((function (valid_title_QMARK_,get_title,_STAR_reconciler_STAR_71034,_STAR_depth_STAR_71035,_STAR_shared_STAR_71036,_STAR_instrument_STAR_71037,_STAR_parent_STAR_71038,this$,x71033_71041){
return (function (){
return Number(goog.dom.getElement("todo-input-priority").value);
});})(valid_title_QMARK_,get_title,_STAR_reconciler_STAR_71034,_STAR_depth_STAR_71035,_STAR_shared_STAR_71036,_STAR_instrument_STAR_71037,_STAR_parent_STAR_71038,this$,x71033_71041))
;
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.form({"id": "todo-input"},om.util.force_children.call(null,"Title:"),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,om.dom.input.call(null,{"id": "todo-input-title", "name": "title", "type": "text"})),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,"Priority:"),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,om.dom.input.call(null,{"id": "todo-input-priority", "name": "priority", "type": "number"})),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,om.dom.input.call(null,{"value": "add", "type": "button", "onClick": ((function (valid_title_QMARK_,get_title,get_priority,_STAR_reconciler_STAR_71034,_STAR_depth_STAR_71035,_STAR_shared_STAR_71036,_STAR_instrument_STAR_71037,_STAR_parent_STAR_71038,this$,x71033_71041){
return (function (){
var title = get_title.call(null);
var priority = get_priority.call(null);
if(cljs.core.truth_(valid_title_QMARK_.call(null,title))){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("todos","add","todos/add",379968113,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"title","title",636505583)),cljs.core._conj.call(null,cljs.core.List.EMPTY,title),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"priority","priority",1431093715)),cljs.core._conj.call(null,cljs.core.List.EMPTY,priority)))))))))))))));
} else {
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("errors","add","errors/add",-1562113793,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Not a valid title")))))))))))))));
}
});})(valid_title_QMARK_,get_title,get_priority,_STAR_reconciler_STAR_71034,_STAR_depth_STAR_71035,_STAR_shared_STAR_71036,_STAR_instrument_STAR_71037,_STAR_parent_STAR_71038,this$,x71033_71041))
})))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_71038;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_71037;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_71036;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_71035;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_71034;
}});})(x71033_71041))
;


om_min_todo.core.NewToDoForm.prototype.constructor = om_min_todo.core.NewToDoForm;

om_min_todo.core.NewToDoForm.prototype.om$isComponent = true;

var x71039_71042 = om_min_todo.core.NewToDoForm;
x71039_71042.om$next$IQuery$ = true;

x71039_71042.om$next$IQuery$query$arity$1 = ((function (x71039_71042){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("todos","add","todos/add",379968113,null)),cljs.core.list(new cljs.core.Symbol("errors","add","errors/add",-1562113793,null)),cljs.core.list(new cljs.core.Symbol("errors","remove","errors/remove",-333085022,null))], null);
});})(x71039_71042))
;


var x71040_71043 = om_min_todo.core.NewToDoForm.prototype;
x71040_71043.om$next$IQuery$ = true;

x71040_71043.om$next$IQuery$query$arity$1 = ((function (x71040_71043){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("todos","add","todos/add",379968113,null)),cljs.core.list(new cljs.core.Symbol("errors","add","errors/add",-1562113793,null)),cljs.core.list(new cljs.core.Symbol("errors","remove","errors/remove",-333085022,null))], null);
});})(x71040_71043))
;


om_min_todo.core.NewToDoForm.cljs$lang$type = true;

om_min_todo.core.NewToDoForm.cljs$lang$ctorStr = "om-min-todo.core/NewToDoForm";

om_min_todo.core.NewToDoForm.cljs$lang$ctorPrWriter = (function (this__19967__auto__,writer__19968__auto__,opt__19969__auto__){
return cljs.core._write.call(null,writer__19968__auto__,"om-min-todo.core/NewToDoForm");
});
om_min_todo.core.error_msg = (function om_min_todo$core$error_msg(errors){
return React.DOM.ul(null,om.util.force_children.call(null,cljs.core.map.call(null,(function (p1__71044_SHARP_){
return React.DOM.li(null,om.util.force_children.call(null,p1__71044_SHARP_));
}),errors)));
});
/**
 * @constructor
 */
om_min_todo.core.Root = (function om_min_todo$core$Root(){
var this__19965__auto__ = this;
React.Component.apply(this__19965__auto__,arguments);

if(!((this__19965__auto__.initLocalState == null))){
this__19965__auto__.state = this__19965__auto__.initLocalState();
} else {
this__19965__auto__.state = {};
}

return this__19965__auto__;
});

om_min_todo.core.Root.prototype = goog.object.clone(React.Component.prototype);

var x71049_71059 = om_min_todo.core.Root.prototype;
x71049_71059.componentWillUpdate = ((function (x71049_71059){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19905__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19905__auto__);
});})(x71049_71059))
;

x71049_71059.shouldComponentUpdate = ((function (x71049_71059){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19905__auto__),goog.object.get(next_props__19906__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__19905__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19905__auto__.state,"omcljs$state"),goog.object.get(next_state__19907__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x71049_71059))
;

x71049_71059.componentWillUnmount = ((function (x71049_71059){
return (function (){
var this__19905__auto__ = this;
var r__19911__auto__ = om.next.get_reconciler.call(null,this__19905__auto__);
var cfg__19912__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19911__auto__);
var st__19913__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19912__auto__);
var indexer__19910__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19912__auto__);
if((st__19913__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19913__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19905__auto__);
}

if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x71049_71059))
;

x71049_71059.componentDidUpdate = ((function (x71049_71059){
return (function (prev_props__19908__auto__,prev_state__19909__auto__){
var this__19905__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19905__auto__);
});})(x71049_71059))
;

x71049_71059.isMounted = ((function (x71049_71059){
return (function (){
var this__19905__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19905__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x71049_71059))
;

x71049_71059.componentWillMount = ((function (x71049_71059){
return (function (){
var this__19905__auto__ = this;
var indexer__19910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19905__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x71049_71059))
;

x71049_71059.render = ((function (x71049_71059){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_71050 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_71051 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_71052 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_71053 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_71054 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__71055 = om.next.props.call(null,this$);
var map__71055__$1 = ((((!((map__71055 == null)))?((((map__71055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71055):map__71055);
var app_title = cljs.core.get.call(null,map__71055__$1,new cljs.core.Keyword(null,"app-title","app-title",1908483663));
var sorted_todos = cljs.core.get.call(null,map__71055__$1,new cljs.core.Keyword(null,"sorted-todos","sorted-todos",-1662564733));
var errors = cljs.core.get.call(null,map__71055__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var flags = cljs.core.get.call(null,map__71055__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
var _ = null;
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,app_title))),om.util.force_children.call(null,om_min_todo.core.new_todo_form.call(null)),om.util.force_children.call(null,om_min_todo.core.todo_list.call(null,sorted_todos)),om.util.force_children.call(null,om_min_todo.core.error_msg.call(null,errors)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_71054;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_71053;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_71052;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_71051;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_71050;
}});})(x71049_71059))
;


om_min_todo.core.Root.prototype.constructor = om_min_todo.core.Root;

om_min_todo.core.Root.prototype.om$isComponent = true;

var x71057_71060 = om_min_todo.core.Root;
x71057_71060.om$next$IQuery$ = true;

x71057_71060.om$next$IQuery$query$arity$1 = ((function (x71057_71060){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-title","app-title",1908483663),new cljs.core.Keyword(null,"sorted-todos","sorted-todos",-1662564733),new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.list(new cljs.core.Symbol("errors","clear-last","errors/clear-last",-1388795027,null)),cljs.core.list(new cljs.core.Symbol("flags","toggle","flags/toggle",-1258778948,null))], null);
});})(x71057_71060))
;


var x71058_71061 = om_min_todo.core.Root.prototype;
x71058_71061.om$next$IQuery$ = true;

x71058_71061.om$next$IQuery$query$arity$1 = ((function (x71058_71061){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-title","app-title",1908483663),new cljs.core.Keyword(null,"sorted-todos","sorted-todos",-1662564733),new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.list(new cljs.core.Symbol("errors","clear-last","errors/clear-last",-1388795027,null)),cljs.core.list(new cljs.core.Symbol("flags","toggle","flags/toggle",-1258778948,null))], null);
});})(x71058_71061))
;


om_min_todo.core.Root.cljs$lang$type = true;

om_min_todo.core.Root.cljs$lang$ctorStr = "om-min-todo.core/Root";

om_min_todo.core.Root.cljs$lang$ctorPrWriter = (function (this__19967__auto__,writer__19968__auto__,opt__19969__auto__){
return cljs.core._write.call(null,writer__19968__auto__,"om-min-todo.core/Root");
});
om_min_todo.core.todo_item = om.next.factory.call(null,om_min_todo.core.ToDoItem);
om_min_todo.core.new_todo_form = om.next.factory.call(null,om_min_todo.core.NewToDoForm);
om_min_todo.core.root = om.next.factory.call(null,om_min_todo.core.Root);
om.next.add_root_BANG_.call(null,om_min_todo.core.reconciler,om_min_todo.core.Root,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map