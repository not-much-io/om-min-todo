// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_min_todo.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
om_min_todo.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-title","app-title",1908483663),"Minimal Om Todo",new cljs.core.Keyword(null,"todos","todos",630308868),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Keep an eye on bunny",new cljs.core.Keyword(null,"priority","priority",1431093715),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Get something to eat",new cljs.core.Keyword(null,"priority","priority",1431093715),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Read books",new cljs.core.Keyword(null,"priority","priority",1431093715),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Write code",new cljs.core.Keyword(null,"priority","priority",1431093715),(2)], null)], null),new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], null));
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
cljs.core._add_method.call(null,om_min_todo.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__78244,key,_){
var map__78245 = p__78244;
var map__78245__$1 = ((((!((map__78245 == null)))?((((map__78245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78245):map__78245);
var state = cljs.core.get.call(null,map__78245__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),key.call(null,cljs.core.deref.call(null,state))], null);
}));
cljs.core._add_method.call(null,om_min_todo.core.read,new cljs.core.Keyword("todos","title-exists?","todos/title-exists?",-605413163),(function (p__78247,_,p__78248){
var map__78249 = p__78247;
var map__78249__$1 = ((((!((map__78249 == null)))?((((map__78249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78249):map__78249);
var state = cljs.core.get.call(null,map__78249__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__78250 = p__78248;
var map__78250__$1 = ((((!((map__78250 == null)))?((((map__78250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78250):map__78250);
var title = cljs.core.get.call(null,map__78250__$1,new cljs.core.Keyword(null,"title","title",636505583));
var ___$1 = cljs.core.println.call(null,"title:",title);
var todos = new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var titles = cljs.core.map.call(null,new cljs.core.Keyword(null,"title","title",636505583),todos);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([title], true),titles)], null);
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
cljs.core._add_method.call(null,om_min_todo.core.mutate,new cljs.core.Symbol("todos","add","todos/add",379968113,null),(function (p__78253,_,p__78254){
var map__78255 = p__78253;
var map__78255__$1 = ((((!((map__78255 == null)))?((((map__78255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78255):map__78255);
var state = cljs.core.get.call(null,map__78255__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__78256 = p__78254;
var map__78256__$1 = ((((!((map__78256 == null)))?((((map__78256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78256):map__78256);
var title = cljs.core.get.call(null,map__78256__$1,new cljs.core.Keyword(null,"title","title",636505583));
var priority = cljs.core.get.call(null,map__78256__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__78255,map__78255__$1,state,map__78256,map__78256__$1,title,priority){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null),((function (map__78255,map__78255__$1,state,map__78256,map__78256__$1,title,priority){
return (function (curr_todos){
return cljs.core.conj.call(null,curr_todos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"priority","priority",1431093715),priority], null));
});})(map__78255,map__78255__$1,state,map__78256,map__78256__$1,title,priority))
);
});})(map__78255,map__78255__$1,state,map__78256,map__78256__$1,title,priority))
], null);
}));
cljs.core._add_method.call(null,om_min_todo.core.mutate,new cljs.core.Symbol("todos","remove","todos/remove",1348122428,null),(function (p__78260,_,p__78261){
var map__78262 = p__78260;
var map__78262__$1 = ((((!((map__78262 == null)))?((((map__78262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78262):map__78262);
var state = cljs.core.get.call(null,map__78262__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__78263 = p__78261;
var map__78263__$1 = ((((!((map__78263 == null)))?((((map__78263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78263):map__78263);
var title = cljs.core.get.call(null,map__78263__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__78262,map__78262__$1,state,map__78263,map__78263__$1,title){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null),((function (map__78262,map__78262__$1,state,map__78263,map__78263__$1,title){
return (function (curr_todos){
return cljs.core.filter.call(null,((function (map__78262,map__78262__$1,state,map__78263,map__78263__$1,title){
return (function (p1__78259_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__78259_SHARP_),title);
});})(map__78262,map__78262__$1,state,map__78263,map__78263__$1,title))
,curr_todos);
});})(map__78262,map__78262__$1,state,map__78263,map__78263__$1,title))
);
});})(map__78262,map__78262__$1,state,map__78263,map__78263__$1,title))
], null);
}));
cljs.core._add_method.call(null,om_min_todo.core.mutate,new cljs.core.Symbol("errors","add","errors/add",-1562113793,null),(function (p__78266,_,p__78267){
var map__78268 = p__78266;
var map__78268__$1 = ((((!((map__78268 == null)))?((((map__78268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78268):map__78268);
var state = cljs.core.get.call(null,map__78268__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__78269 = p__78267;
var map__78269__$1 = ((((!((map__78269 == null)))?((((map__78269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78269):map__78269);
var error = cljs.core.get.call(null,map__78269__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__78268,map__78268__$1,state,map__78269,map__78269__$1,error){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),((function (map__78268,map__78268__$1,state,map__78269,map__78269__$1,error){
return (function (curr_errors){
return cljs.core.conj.call(null,curr_errors,error);
});})(map__78268,map__78268__$1,state,map__78269,map__78269__$1,error))
);
});})(map__78268,map__78268__$1,state,map__78269,map__78269__$1,error))
], null);
}));
cljs.core._add_method.call(null,om_min_todo.core.mutate,new cljs.core.Symbol("errors","clear-last","errors/clear-last",-1388795027,null),(function (p__78272,_,___$1){
var map__78273 = p__78272;
var map__78273__$1 = ((((!((map__78273 == null)))?((((map__78273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78273):map__78273);
var state = cljs.core.get.call(null,map__78273__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__78273,map__78273__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),((function (map__78273,map__78273__$1,state){
return (function (curr_errors){
return cljs.core.drop_last.call(null,curr_errors);
});})(map__78273,map__78273__$1,state))
);
});})(map__78273,map__78273__$1,state))
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

var x78279_78289 = om_min_todo.core.ToDoItem.prototype;
x78279_78289.componentWillUpdate = ((function (x78279_78289){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19905__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19905__auto__);
});})(x78279_78289))
;

x78279_78289.shouldComponentUpdate = ((function (x78279_78289){
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
});})(x78279_78289))
;

x78279_78289.componentWillUnmount = ((function (x78279_78289){
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
});})(x78279_78289))
;

x78279_78289.componentDidUpdate = ((function (x78279_78289){
return (function (prev_props__19908__auto__,prev_state__19909__auto__){
var this__19905__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19905__auto__);
});})(x78279_78289))
;

x78279_78289.isMounted = ((function (x78279_78289){
return (function (){
var this__19905__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19905__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x78279_78289))
;

x78279_78289.componentWillMount = ((function (x78279_78289){
return (function (){
var this__19905__auto__ = this;
var indexer__19910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19905__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x78279_78289))
;

x78279_78289.render = ((function (x78279_78289){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_78280 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_78281 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_78282 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_78283 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_78284 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__78285 = om.next.props.call(null,this$);
var map__78285__$1 = ((((!((map__78285 == null)))?((((map__78285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78285):map__78285);
var title = cljs.core.get.call(null,map__78285__$1,new cljs.core.Keyword(null,"title","title",636505583));
var priority = cljs.core.get.call(null,map__78285__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
return React.DOM.li(null,om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str("Priority: "),cljs.core.str(priority)].join('')))))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__78285,map__78285__$1,title,priority,_STAR_reconciler_STAR_78280,_STAR_depth_STAR_78281,_STAR_shared_STAR_78282,_STAR_instrument_STAR_78283,_STAR_parent_STAR_78284,this$,x78279_78289){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("todos","remove","todos/remove",1348122428,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"title","title",636505583)),cljs.core._conj.call(null,cljs.core.List.EMPTY,title)))))))))))))));
});})(map__78285,map__78285__$1,title,priority,_STAR_reconciler_STAR_78280,_STAR_depth_STAR_78281,_STAR_shared_STAR_78282,_STAR_instrument_STAR_78283,_STAR_parent_STAR_78284,this$,x78279_78289))
},om.util.force_children.call(null,"-"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_78284;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_78283;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_78282;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_78281;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_78280;
}});})(x78279_78289))
;


om_min_todo.core.ToDoItem.prototype.constructor = om_min_todo.core.ToDoItem;

om_min_todo.core.ToDoItem.prototype.om$isComponent = true;

var x78287_78290 = om_min_todo.core.ToDoItem;
x78287_78290.om$next$IQuery$ = true;

x78287_78290.om$next$IQuery$query$arity$1 = ((function (x78287_78290){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("todos","remove","todos/remove",1348122428,null))], null);
});})(x78287_78290))
;


var x78288_78291 = om_min_todo.core.ToDoItem.prototype;
x78288_78291.om$next$IQuery$ = true;

x78288_78291.om$next$IQuery$query$arity$1 = ((function (x78288_78291){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("todos","remove","todos/remove",1348122428,null))], null);
});})(x78288_78291))
;


om_min_todo.core.ToDoItem.cljs$lang$type = true;

om_min_todo.core.ToDoItem.cljs$lang$ctorStr = "om-min-todo.core/ToDoItem";

om_min_todo.core.ToDoItem.cljs$lang$ctorPrWriter = (function (this__19967__auto__,writer__19968__auto__,opt__19969__auto__){
return cljs.core._write.call(null,writer__19968__auto__,"om-min-todo.core/ToDoItem");
});
om_min_todo.core.todo_list = (function om_min_todo$core$todo_list(todos){
var sorted_todos = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"priority","priority",1431093715),todos);
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

var x78296_78304 = om_min_todo.core.NewToDoForm.prototype;
x78296_78304.componentWillUpdate = ((function (x78296_78304){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19905__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19905__auto__);
});})(x78296_78304))
;

x78296_78304.shouldComponentUpdate = ((function (x78296_78304){
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
});})(x78296_78304))
;

x78296_78304.componentWillUnmount = ((function (x78296_78304){
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
});})(x78296_78304))
;

x78296_78304.componentDidUpdate = ((function (x78296_78304){
return (function (prev_props__19908__auto__,prev_state__19909__auto__){
var this__19905__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19905__auto__);
});})(x78296_78304))
;

x78296_78304.isMounted = ((function (x78296_78304){
return (function (){
var this__19905__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19905__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x78296_78304))
;

x78296_78304.componentWillMount = ((function (x78296_78304){
return (function (){
var this__19905__auto__ = this;
var indexer__19910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19905__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x78296_78304))
;

x78296_78304.render = ((function (x78296_78304){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_78297 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_78298 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_78299 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_78300 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_78301 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var get_title = ((function (_STAR_reconciler_STAR_78297,_STAR_depth_STAR_78298,_STAR_shared_STAR_78299,_STAR_instrument_STAR_78300,_STAR_parent_STAR_78301,this$,x78296_78304){
return (function (){
return goog.dom.getElement("todo-input-title").value;
});})(_STAR_reconciler_STAR_78297,_STAR_depth_STAR_78298,_STAR_shared_STAR_78299,_STAR_instrument_STAR_78300,_STAR_parent_STAR_78301,this$,x78296_78304))
;
var get_priority = ((function (get_title,_STAR_reconciler_STAR_78297,_STAR_depth_STAR_78298,_STAR_shared_STAR_78299,_STAR_instrument_STAR_78300,_STAR_parent_STAR_78301,this$,x78296_78304){
return (function (){
return Number(goog.dom.getElement("todo-input-priority").value);
});})(get_title,_STAR_reconciler_STAR_78297,_STAR_depth_STAR_78298,_STAR_shared_STAR_78299,_STAR_instrument_STAR_78300,_STAR_parent_STAR_78301,this$,x78296_78304))
;
var add_todo = ((function (get_title,get_priority,_STAR_reconciler_STAR_78297,_STAR_depth_STAR_78298,_STAR_shared_STAR_78299,_STAR_instrument_STAR_78300,_STAR_parent_STAR_78301,this$,x78296_78304){
return (function (){
var title = get_title.call(null);
var priority = get_priority.call(null);
var _ = cljs.core.println.call(null,"props: ",om.next.props.call(null,this$));
if(cljs.core.truth_(new cljs.core.Keyword("todos","title-exists?","todos/title-exists?",-605413163).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)))){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("todos","add","todos/add",379968113,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"title","title",636505583)),cljs.core._conj.call(null,cljs.core.List.EMPTY,title),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"priority","priority",1431093715)),cljs.core._conj.call(null,cljs.core.List.EMPTY,priority)))))))))))))));
} else {
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("errors","add","errors/add",-1562113793,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Not a valid title")))))))))))))));
}
});})(get_title,get_priority,_STAR_reconciler_STAR_78297,_STAR_depth_STAR_78298,_STAR_shared_STAR_78299,_STAR_instrument_STAR_78300,_STAR_parent_STAR_78301,this$,x78296_78304))
;
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.form({"id": "todo-input"},om.util.force_children.call(null,"Title:"),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,om.dom.input.call(null,{"id": "todo-input-title", "name": "title", "type": "text"})),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,"Priority:"),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,om.dom.input.call(null,{"id": "todo-input-priority", "name": "priority", "type": "number"})),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,om.dom.input.call(null,{"value": "add", "type": "button", "onClick": add_todo})))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_78301;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_78300;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_78299;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_78298;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_78297;
}});})(x78296_78304))
;


om_min_todo.core.NewToDoForm.prototype.constructor = om_min_todo.core.NewToDoForm;

om_min_todo.core.NewToDoForm.prototype.om$isComponent = true;

var x78302_78305 = om_min_todo.core.NewToDoForm;
x78302_78305.om$next$IQueryParams$ = true;

x78302_78305.om$next$IQueryParams$params$arity$1 = ((function (x78302_78305){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"test"], null);
});})(x78302_78305))
;

x78302_78305.om$next$IQuery$ = true;

x78302_78305.om$next$IQuery$query$arity$1 = ((function (x78302_78305){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("todos","title-exists?","todos/title-exists?",-605413163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null)),cljs.core.list(new cljs.core.Symbol("todos","add","todos/add",379968113,null)),cljs.core.list(new cljs.core.Symbol("errors","add","errors/add",-1562113793,null)),cljs.core.list(new cljs.core.Symbol("errors","remove","errors/remove",-333085022,null))], null);
});})(x78302_78305))
;


var x78303_78306 = om_min_todo.core.NewToDoForm.prototype;
x78303_78306.om$next$IQueryParams$ = true;

x78303_78306.om$next$IQueryParams$params$arity$1 = ((function (x78303_78306){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"test"], null);
});})(x78303_78306))
;

x78303_78306.om$next$IQuery$ = true;

x78303_78306.om$next$IQuery$query$arity$1 = ((function (x78303_78306){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("todos","title-exists?","todos/title-exists?",-605413163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null)),cljs.core.list(new cljs.core.Symbol("todos","add","todos/add",379968113,null)),cljs.core.list(new cljs.core.Symbol("errors","add","errors/add",-1562113793,null)),cljs.core.list(new cljs.core.Symbol("errors","remove","errors/remove",-333085022,null))], null);
});})(x78303_78306))
;


om_min_todo.core.NewToDoForm.cljs$lang$type = true;

om_min_todo.core.NewToDoForm.cljs$lang$ctorStr = "om-min-todo.core/NewToDoForm";

om_min_todo.core.NewToDoForm.cljs$lang$ctorPrWriter = (function (this__19967__auto__,writer__19968__auto__,opt__19969__auto__){
return cljs.core._write.call(null,writer__19968__auto__,"om-min-todo.core/NewToDoForm");
});
om_min_todo.core.error_msg = (function om_min_todo$core$error_msg(errors){
return React.DOM.ul(null,om.util.force_children.call(null,cljs.core.map.call(null,(function (p1__78307_SHARP_){
return React.DOM.li(null,om.util.force_children.call(null,p1__78307_SHARP_));
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

var x78312_78324 = om_min_todo.core.Root.prototype;
x78312_78324.componentWillUpdate = ((function (x78312_78324){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19905__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19905__auto__);
});})(x78312_78324))
;

x78312_78324.shouldComponentUpdate = ((function (x78312_78324){
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
});})(x78312_78324))
;

x78312_78324.componentWillUnmount = ((function (x78312_78324){
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
});})(x78312_78324))
;

x78312_78324.componentDidUpdate = ((function (x78312_78324){
return (function (prev_props__19908__auto__,prev_state__19909__auto__){
var this__19905__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19905__auto__);
});})(x78312_78324))
;

x78312_78324.isMounted = ((function (x78312_78324){
return (function (){
var this__19905__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19905__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x78312_78324))
;

x78312_78324.componentWillMount = ((function (x78312_78324){
return (function (){
var this__19905__auto__ = this;
var indexer__19910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19905__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x78312_78324))
;

x78312_78324.initLocalState = ((function (x78312_78324){
return (function (){
var this$ = this;
var ret__19898__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interval-set","interval-set",389891962),false], null);
var obj78314 = {"omcljs$state":ret__19898__auto__};
return obj78314;
});})(x78312_78324))
;

x78312_78324.render = ((function (x78312_78324){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_78315 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_78316 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_78317 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_78318 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_78319 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__78320 = om.next.props.call(null,this$);
var map__78320__$1 = ((((!((map__78320 == null)))?((((map__78320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78320):map__78320);
var app_title = cljs.core.get.call(null,map__78320__$1,new cljs.core.Keyword(null,"app-title","app-title",1908483663));
var todos = cljs.core.get.call(null,map__78320__$1,new cljs.core.Keyword(null,"todos","todos",630308868));
var errors = cljs.core.get.call(null,map__78320__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var error_clearing = ((function (map__78320,map__78320__$1,app_title,todos,errors,_STAR_reconciler_STAR_78315,_STAR_depth_STAR_78316,_STAR_shared_STAR_78317,_STAR_instrument_STAR_78318,_STAR_parent_STAR_78319,this$,x78312_78324){
return (function (){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$))))){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("errors","clear-last","errors/clear-last",-1388795027,null))], null));
} else {
return null;
}
});})(map__78320,map__78320__$1,app_title,todos,errors,_STAR_reconciler_STAR_78315,_STAR_depth_STAR_78316,_STAR_shared_STAR_78317,_STAR_instrument_STAR_78318,_STAR_parent_STAR_78319,this$,x78312_78324))
;
var set_interval = ((function (map__78320,map__78320__$1,app_title,todos,errors,error_clearing,_STAR_reconciler_STAR_78315,_STAR_depth_STAR_78316,_STAR_shared_STAR_78317,_STAR_instrument_STAR_78318,_STAR_parent_STAR_78319,this$,x78312_78324){
return (function (){
setInterval(error_clearing,(7000));

return om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interval-set","interval-set",389891962),true], null));
});})(map__78320,map__78320__$1,app_title,todos,errors,error_clearing,_STAR_reconciler_STAR_78315,_STAR_depth_STAR_78316,_STAR_shared_STAR_78317,_STAR_instrument_STAR_78318,_STAR_parent_STAR_78319,this$,x78312_78324))
;
var _ = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"interval-set","interval-set",389891962).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$))))?set_interval.call(null):null);
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,app_title))),om.util.force_children.call(null,om_min_todo.core.new_todo_form.call(null)),om.util.force_children.call(null,om_min_todo.core.todo_list.call(null,todos)),om.util.force_children.call(null,om_min_todo.core.error_msg.call(null,errors)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_78319;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_78318;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_78317;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_78316;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_78315;
}});})(x78312_78324))
;


om_min_todo.core.Root.prototype.constructor = om_min_todo.core.Root;

om_min_todo.core.Root.prototype.om$isComponent = true;

var x78322_78325 = om_min_todo.core.Root;
x78322_78325.om$next$IQuery$ = true;

x78322_78325.om$next$IQuery$query$arity$1 = ((function (x78322_78325){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-title","app-title",1908483663),new cljs.core.Keyword(null,"todos","todos",630308868),new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.list(new cljs.core.Symbol("errors","clear-last","errors/clear-last",-1388795027,null))], null);
});})(x78322_78325))
;


var x78323_78326 = om_min_todo.core.Root.prototype;
x78323_78326.om$next$IQuery$ = true;

x78323_78326.om$next$IQuery$query$arity$1 = ((function (x78323_78326){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-title","app-title",1908483663),new cljs.core.Keyword(null,"todos","todos",630308868),new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.list(new cljs.core.Symbol("errors","clear-last","errors/clear-last",-1388795027,null))], null);
});})(x78323_78326))
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