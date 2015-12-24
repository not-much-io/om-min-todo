// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_min_todo.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
if(typeof om_min_todo.core.app_state !== 'undefined'){
} else {
om_min_todo.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"todos","todos",630308868),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Keep an eye on bunny",new cljs.core.Keyword(null,"priority","priority",1431093715),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Get something to eat",new cljs.core.Keyword(null,"priority","priority",1431093715),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Read books",new cljs.core.Keyword(null,"priority","priority",1431093715),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Write code",new cljs.core.Keyword(null,"priority","priority",1431093715),(2)], null)], null)], null));
}
cljs.core.enable_console_print_BANG_.call(null);
om_min_todo.core.todo;

om_min_todo.core.todo_list;

om_min_todo.core.new_todo_form;

om_min_todo.core.root;
/**
 * @constructor
 */
om_min_todo.core.ToDo = (function om_min_todo$core$ToDo(){
var this__19965__auto__ = this;
React.Component.apply(this__19965__auto__,arguments);

if(!((this__19965__auto__.initLocalState == null))){
this__19965__auto__.state = this__19965__auto__.initLocalState();
} else {
this__19965__auto__.state = {};
}

return this__19965__auto__;
});

om_min_todo.core.ToDo.prototype = goog.object.clone(React.Component.prototype);

var x43321_43331 = om_min_todo.core.ToDo.prototype;
x43321_43331.componentWillUpdate = ((function (x43321_43331){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19905__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19905__auto__);
});})(x43321_43331))
;

x43321_43331.shouldComponentUpdate = ((function (x43321_43331){
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
});})(x43321_43331))
;

x43321_43331.componentWillUnmount = ((function (x43321_43331){
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
});})(x43321_43331))
;

x43321_43331.componentDidUpdate = ((function (x43321_43331){
return (function (prev_props__19908__auto__,prev_state__19909__auto__){
var this__19905__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19905__auto__);
});})(x43321_43331))
;

x43321_43331.isMounted = ((function (x43321_43331){
return (function (){
var this__19905__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19905__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x43321_43331))
;

x43321_43331.componentWillMount = ((function (x43321_43331){
return (function (){
var this__19905__auto__ = this;
var indexer__19910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19905__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x43321_43331))
;

x43321_43331.render = ((function (x43321_43331){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_43322 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_43323 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_43324 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_43325 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_43326 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__43327 = om.next.props.call(null,this$);
var map__43327__$1 = ((((!((map__43327 == null)))?((((map__43327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43327):map__43327);
var title = cljs.core.get.call(null,map__43327__$1,new cljs.core.Keyword(null,"title","title",636505583));
var priority = cljs.core.get.call(null,map__43327__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var remove_todo = ((function (map__43327,map__43327__$1,title,priority,_STAR_reconciler_STAR_43322,_STAR_depth_STAR_43323,_STAR_shared_STAR_43324,_STAR_instrument_STAR_43325,_STAR_parent_STAR_43326,this$,x43321_43331){
return (function (title__$1){
return cljs.core.swap_BANG_.call(null,om_min_todo.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.filter.call(null,((function (map__43327,map__43327__$1,title,priority,_STAR_reconciler_STAR_43322,_STAR_depth_STAR_43323,_STAR_shared_STAR_43324,_STAR_instrument_STAR_43325,_STAR_parent_STAR_43326,this$,x43321_43331){
return (function (p1__43316_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__43316_SHARP_),title__$1);
});})(map__43327,map__43327__$1,title,priority,_STAR_reconciler_STAR_43322,_STAR_depth_STAR_43323,_STAR_shared_STAR_43324,_STAR_instrument_STAR_43325,_STAR_parent_STAR_43326,this$,x43321_43331))
,new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_min_todo.core.app_state))));
});})(map__43327,map__43327__$1,title,priority,_STAR_reconciler_STAR_43322,_STAR_depth_STAR_43323,_STAR_shared_STAR_43324,_STAR_instrument_STAR_43325,_STAR_parent_STAR_43326,this$,x43321_43331))
;
return React.DOM.span(null,om.util.force_children.call(null,React.DOM.li(null,om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str("Priority: "),cljs.core.str(priority)].join('')))))))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__43327,map__43327__$1,title,priority,remove_todo,_STAR_reconciler_STAR_43322,_STAR_depth_STAR_43323,_STAR_shared_STAR_43324,_STAR_instrument_STAR_43325,_STAR_parent_STAR_43326,this$,x43321_43331){
return (function (){
return remove_todo.call(null,title);
});})(map__43327,map__43327__$1,title,priority,remove_todo,_STAR_reconciler_STAR_43322,_STAR_depth_STAR_43323,_STAR_shared_STAR_43324,_STAR_instrument_STAR_43325,_STAR_parent_STAR_43326,this$,x43321_43331))
},om.util.force_children.call(null,"-"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_43326;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_43325;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_43324;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_43323;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_43322;
}});})(x43321_43331))
;


om_min_todo.core.ToDo.prototype.constructor = om_min_todo.core.ToDo;

om_min_todo.core.ToDo.prototype.om$isComponent = true;

var x43329_43332 = om_min_todo.core.ToDo;


var x43330_43333 = om_min_todo.core.ToDo.prototype;


om_min_todo.core.ToDo.cljs$lang$type = true;

om_min_todo.core.ToDo.cljs$lang$ctorStr = "om-min-todo.core/ToDo";

om_min_todo.core.ToDo.cljs$lang$ctorPrWriter = (function (this__19967__auto__,writer__19968__auto__,opt__19969__auto__){
return cljs.core._write.call(null,writer__19968__auto__,"om-min-todo.core/ToDo");
});
/**
 * @constructor
 */
om_min_todo.core.ToDoList = (function om_min_todo$core$ToDoList(){
var this__19965__auto__ = this;
React.Component.apply(this__19965__auto__,arguments);

if(!((this__19965__auto__.initLocalState == null))){
this__19965__auto__.state = this__19965__auto__.initLocalState();
} else {
this__19965__auto__.state = {};
}

return this__19965__auto__;
});

om_min_todo.core.ToDoList.prototype = goog.object.clone(React.Component.prototype);

var x43338_43346 = om_min_todo.core.ToDoList.prototype;
x43338_43346.componentWillUpdate = ((function (x43338_43346){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19905__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19905__auto__);
});})(x43338_43346))
;

x43338_43346.shouldComponentUpdate = ((function (x43338_43346){
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
});})(x43338_43346))
;

x43338_43346.componentWillUnmount = ((function (x43338_43346){
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
});})(x43338_43346))
;

x43338_43346.componentDidUpdate = ((function (x43338_43346){
return (function (prev_props__19908__auto__,prev_state__19909__auto__){
var this__19905__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19905__auto__);
});})(x43338_43346))
;

x43338_43346.isMounted = ((function (x43338_43346){
return (function (){
var this__19905__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19905__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x43338_43346))
;

x43338_43346.componentWillMount = ((function (x43338_43346){
return (function (){
var this__19905__auto__ = this;
var indexer__19910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19905__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x43338_43346))
;

x43338_43346.render = ((function (x43338_43346){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_43339 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_43340 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_43341 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_43342 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_43343 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var todos = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
return React.DOM.ol(null,om.util.force_children.call(null,cljs.core.map.call(null,om_min_todo.core.todo,todos)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_43343;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_43342;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_43341;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_43340;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_43339;
}});})(x43338_43346))
;


om_min_todo.core.ToDoList.prototype.constructor = om_min_todo.core.ToDoList;

om_min_todo.core.ToDoList.prototype.om$isComponent = true;

var x43344_43347 = om_min_todo.core.ToDoList;


var x43345_43348 = om_min_todo.core.ToDoList.prototype;


om_min_todo.core.ToDoList.cljs$lang$type = true;

om_min_todo.core.ToDoList.cljs$lang$ctorStr = "om-min-todo.core/ToDoList";

om_min_todo.core.ToDoList.cljs$lang$ctorPrWriter = (function (this__19967__auto__,writer__19968__auto__,opt__19969__auto__){
return cljs.core._write.call(null,writer__19968__auto__,"om-min-todo.core/ToDoList");
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

var x43353_43361 = om_min_todo.core.NewToDoForm.prototype;
x43353_43361.componentWillUpdate = ((function (x43353_43361){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19905__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19905__auto__);
});})(x43353_43361))
;

x43353_43361.shouldComponentUpdate = ((function (x43353_43361){
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
});})(x43353_43361))
;

x43353_43361.componentWillUnmount = ((function (x43353_43361){
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
});})(x43353_43361))
;

x43353_43361.componentDidUpdate = ((function (x43353_43361){
return (function (prev_props__19908__auto__,prev_state__19909__auto__){
var this__19905__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19905__auto__);
});})(x43353_43361))
;

x43353_43361.isMounted = ((function (x43353_43361){
return (function (){
var this__19905__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19905__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x43353_43361))
;

x43353_43361.componentWillMount = ((function (x43353_43361){
return (function (){
var this__19905__auto__ = this;
var indexer__19910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19905__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x43353_43361))
;

x43353_43361.render = ((function (x43353_43361){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_43354 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_43355 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_43356 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_43357 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_43358 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var set_error = ((function (_STAR_reconciler_STAR_43354,_STAR_depth_STAR_43355,_STAR_shared_STAR_43356,_STAR_instrument_STAR_43357,_STAR_parent_STAR_43358,this$,x43353_43361){
return (function (){
var err = goog.dom.getElement("todo-error");
return err.innerHTML = "Invalid name!";
});})(_STAR_reconciler_STAR_43354,_STAR_depth_STAR_43355,_STAR_shared_STAR_43356,_STAR_instrument_STAR_43357,_STAR_parent_STAR_43358,this$,x43353_43361))
;
var clear_error = ((function (set_error,_STAR_reconciler_STAR_43354,_STAR_depth_STAR_43355,_STAR_shared_STAR_43356,_STAR_instrument_STAR_43357,_STAR_parent_STAR_43358,this$,x43353_43361){
return (function (){
var err = goog.dom.getElement("todo-error");
return err.innerHTML = "";
});})(set_error,_STAR_reconciler_STAR_43354,_STAR_depth_STAR_43355,_STAR_shared_STAR_43356,_STAR_instrument_STAR_43357,_STAR_parent_STAR_43358,this$,x43353_43361))
;
var valid_name_QMARK_ = ((function (set_error,clear_error,_STAR_reconciler_STAR_43354,_STAR_depth_STAR_43355,_STAR_shared_STAR_43356,_STAR_instrument_STAR_43357,_STAR_parent_STAR_43358,this$,x43353_43361){
return (function (title){
var names = cljs.core.map.call(null,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_min_todo.core.app_state)));
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([title], true),names));
});})(set_error,clear_error,_STAR_reconciler_STAR_43354,_STAR_depth_STAR_43355,_STAR_shared_STAR_43356,_STAR_instrument_STAR_43357,_STAR_parent_STAR_43358,this$,x43353_43361))
;
var add_todo = ((function (set_error,clear_error,valid_name_QMARK_,_STAR_reconciler_STAR_43354,_STAR_depth_STAR_43355,_STAR_shared_STAR_43356,_STAR_instrument_STAR_43357,_STAR_parent_STAR_43358,this$,x43353_43361){
return (function (title,priority){
cljs.core.swap_BANG_.call(null,om_min_todo.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.conj.call(null,new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_min_todo.core.app_state)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"priority","priority",1431093715),priority], null)));

return clear_error.call(null);
});})(set_error,clear_error,valid_name_QMARK_,_STAR_reconciler_STAR_43354,_STAR_depth_STAR_43355,_STAR_shared_STAR_43356,_STAR_instrument_STAR_43357,_STAR_parent_STAR_43358,this$,x43353_43361))
;
var get_title = ((function (set_error,clear_error,valid_name_QMARK_,add_todo,_STAR_reconciler_STAR_43354,_STAR_depth_STAR_43355,_STAR_shared_STAR_43356,_STAR_instrument_STAR_43357,_STAR_parent_STAR_43358,this$,x43353_43361){
return (function (){
return goog.dom.getElement("todo-input-title").value;
});})(set_error,clear_error,valid_name_QMARK_,add_todo,_STAR_reconciler_STAR_43354,_STAR_depth_STAR_43355,_STAR_shared_STAR_43356,_STAR_instrument_STAR_43357,_STAR_parent_STAR_43358,this$,x43353_43361))
;
var get_priority = ((function (set_error,clear_error,valid_name_QMARK_,add_todo,get_title,_STAR_reconciler_STAR_43354,_STAR_depth_STAR_43355,_STAR_shared_STAR_43356,_STAR_instrument_STAR_43357,_STAR_parent_STAR_43358,this$,x43353_43361){
return (function (){
return Number(goog.dom.getElement("todo-input-priority").value);
});})(set_error,clear_error,valid_name_QMARK_,add_todo,get_title,_STAR_reconciler_STAR_43354,_STAR_depth_STAR_43355,_STAR_shared_STAR_43356,_STAR_instrument_STAR_43357,_STAR_parent_STAR_43358,this$,x43353_43361))
;
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.form({"id": "todo-input"},om.util.force_children.call(null,"Title:"),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,om.dom.input.call(null,{"id": "todo-input-title", "name": "title", "type": "text"})),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,"Priority:"),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,om.dom.input.call(null,{"id": "todo-input-priority", "name": "priority", "type": "number"})),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,om.dom.input.call(null,{"value": "add", "type": "button", "onClick": ((function (set_error,clear_error,valid_name_QMARK_,add_todo,get_title,get_priority,_STAR_reconciler_STAR_43354,_STAR_depth_STAR_43355,_STAR_shared_STAR_43356,_STAR_instrument_STAR_43357,_STAR_parent_STAR_43358,this$,x43353_43361){
return (function (){
var title = get_title.call(null);
var priority = get_priority.call(null);
if(cljs.core.truth_(valid_name_QMARK_.call(null,title))){
return add_todo.call(null,title,priority);
} else {
return set_error.call(null);
}
});})(set_error,clear_error,valid_name_QMARK_,add_todo,get_title,get_priority,_STAR_reconciler_STAR_43354,_STAR_depth_STAR_43355,_STAR_shared_STAR_43356,_STAR_instrument_STAR_43357,_STAR_parent_STAR_43358,this$,x43353_43361))
})))),om.util.force_children.call(null,React.DOM.div({"id": "todo-error"})));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_43358;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_43357;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_43356;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_43355;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_43354;
}});})(x43353_43361))
;


om_min_todo.core.NewToDoForm.prototype.constructor = om_min_todo.core.NewToDoForm;

om_min_todo.core.NewToDoForm.prototype.om$isComponent = true;

var x43359_43362 = om_min_todo.core.NewToDoForm;


var x43360_43363 = om_min_todo.core.NewToDoForm.prototype;


om_min_todo.core.NewToDoForm.cljs$lang$type = true;

om_min_todo.core.NewToDoForm.cljs$lang$ctorStr = "om-min-todo.core/NewToDoForm";

om_min_todo.core.NewToDoForm.cljs$lang$ctorPrWriter = (function (this__19967__auto__,writer__19968__auto__,opt__19969__auto__){
return cljs.core._write.call(null,writer__19968__auto__,"om-min-todo.core/NewToDoForm");
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

var x43368_43376 = om_min_todo.core.Root.prototype;
x43368_43376.componentWillUpdate = ((function (x43368_43376){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19905__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19905__auto__);
});})(x43368_43376))
;

x43368_43376.shouldComponentUpdate = ((function (x43368_43376){
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
});})(x43368_43376))
;

x43368_43376.componentWillUnmount = ((function (x43368_43376){
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
});})(x43368_43376))
;

x43368_43376.componentDidUpdate = ((function (x43368_43376){
return (function (prev_props__19908__auto__,prev_state__19909__auto__){
var this__19905__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19905__auto__);
});})(x43368_43376))
;

x43368_43376.isMounted = ((function (x43368_43376){
return (function (){
var this__19905__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19905__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x43368_43376))
;

x43368_43376.componentWillMount = ((function (x43368_43376){
return (function (){
var this__19905__auto__ = this;
var indexer__19910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19905__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x43368_43376))
;

x43368_43376.render = ((function (x43368_43376){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_43369 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_43370 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_43371 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_43372 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_43373 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Minimal Om ToDo"))),om.util.force_children.call(null,om_min_todo.core.new_todo_form.call(null)),om.util.force_children.call(null,om_min_todo.core.todo_list.call(null,om.next.props.call(null,this$))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_43373;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_43372;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_43371;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_43370;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_43369;
}});})(x43368_43376))
;


om_min_todo.core.Root.prototype.constructor = om_min_todo.core.Root;

om_min_todo.core.Root.prototype.om$isComponent = true;

var x43374_43377 = om_min_todo.core.Root;


var x43375_43378 = om_min_todo.core.Root.prototype;


om_min_todo.core.Root.cljs$lang$type = true;

om_min_todo.core.Root.cljs$lang$ctorStr = "om-min-todo.core/Root";

om_min_todo.core.Root.cljs$lang$ctorPrWriter = (function (this__19967__auto__,writer__19968__auto__,opt__19969__auto__){
return cljs.core._write.call(null,writer__19968__auto__,"om-min-todo.core/Root");
});
om_min_todo.core.todo = om.next.factory.call(null,om_min_todo.core.ToDo);
om_min_todo.core.todo_list = om.next.factory.call(null,om_min_todo.core.ToDoList);
om_min_todo.core.new_todo_form = om.next.factory.call(null,om_min_todo.core.NewToDoForm);
om_min_todo.core.root = om.next.factory.call(null,om_min_todo.core.Root);
om_min_todo.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om_min_todo.core.app_state], null));
om.next.add_root_BANG_.call(null,om_min_todo.core.reconciler,om_min_todo.core.Root,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map