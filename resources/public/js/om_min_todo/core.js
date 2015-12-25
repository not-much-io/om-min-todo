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

var x43994_44004 = om_min_todo.core.ToDo.prototype;
x43994_44004.componentWillUpdate = ((function (x43994_44004){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19905__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19905__auto__);
});})(x43994_44004))
;

x43994_44004.shouldComponentUpdate = ((function (x43994_44004){
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
});})(x43994_44004))
;

x43994_44004.componentWillUnmount = ((function (x43994_44004){
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
});})(x43994_44004))
;

x43994_44004.componentDidUpdate = ((function (x43994_44004){
return (function (prev_props__19908__auto__,prev_state__19909__auto__){
var this__19905__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19905__auto__);
});})(x43994_44004))
;

x43994_44004.isMounted = ((function (x43994_44004){
return (function (){
var this__19905__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19905__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x43994_44004))
;

x43994_44004.componentWillMount = ((function (x43994_44004){
return (function (){
var this__19905__auto__ = this;
var indexer__19910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19905__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x43994_44004))
;

x43994_44004.render = ((function (x43994_44004){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_43995 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_43996 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_43997 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_43998 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_43999 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__44000 = om.next.props.call(null,this$);
var map__44000__$1 = ((((!((map__44000 == null)))?((((map__44000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44000):map__44000);
var title = cljs.core.get.call(null,map__44000__$1,new cljs.core.Keyword(null,"title","title",636505583));
var priority = cljs.core.get.call(null,map__44000__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var remove_todo = ((function (map__44000,map__44000__$1,title,priority,_STAR_reconciler_STAR_43995,_STAR_depth_STAR_43996,_STAR_shared_STAR_43997,_STAR_instrument_STAR_43998,_STAR_parent_STAR_43999,this$,x43994_44004){
return (function (title__$1){
return cljs.core.swap_BANG_.call(null,om_min_todo.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.filter.call(null,((function (map__44000,map__44000__$1,title,priority,_STAR_reconciler_STAR_43995,_STAR_depth_STAR_43996,_STAR_shared_STAR_43997,_STAR_instrument_STAR_43998,_STAR_parent_STAR_43999,this$,x43994_44004){
return (function (p1__43989_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__43989_SHARP_),title__$1);
});})(map__44000,map__44000__$1,title,priority,_STAR_reconciler_STAR_43995,_STAR_depth_STAR_43996,_STAR_shared_STAR_43997,_STAR_instrument_STAR_43998,_STAR_parent_STAR_43999,this$,x43994_44004))
,new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_min_todo.core.app_state))));
});})(map__44000,map__44000__$1,title,priority,_STAR_reconciler_STAR_43995,_STAR_depth_STAR_43996,_STAR_shared_STAR_43997,_STAR_instrument_STAR_43998,_STAR_parent_STAR_43999,this$,x43994_44004))
;
return React.DOM.span(null,om.util.force_children.call(null,React.DOM.li(null,om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str("Priority: "),cljs.core.str(priority)].join('')))))))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__44000,map__44000__$1,title,priority,remove_todo,_STAR_reconciler_STAR_43995,_STAR_depth_STAR_43996,_STAR_shared_STAR_43997,_STAR_instrument_STAR_43998,_STAR_parent_STAR_43999,this$,x43994_44004){
return (function (){
return remove_todo.call(null,title);
});})(map__44000,map__44000__$1,title,priority,remove_todo,_STAR_reconciler_STAR_43995,_STAR_depth_STAR_43996,_STAR_shared_STAR_43997,_STAR_instrument_STAR_43998,_STAR_parent_STAR_43999,this$,x43994_44004))
},om.util.force_children.call(null,"-"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_43999;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_43998;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_43997;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_43996;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_43995;
}});})(x43994_44004))
;


om_min_todo.core.ToDo.prototype.constructor = om_min_todo.core.ToDo;

om_min_todo.core.ToDo.prototype.om$isComponent = true;

var x44002_44005 = om_min_todo.core.ToDo;


var x44003_44006 = om_min_todo.core.ToDo.prototype;


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

var x44011_44019 = om_min_todo.core.ToDoList.prototype;
x44011_44019.componentWillUpdate = ((function (x44011_44019){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19905__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19905__auto__);
});})(x44011_44019))
;

x44011_44019.shouldComponentUpdate = ((function (x44011_44019){
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
});})(x44011_44019))
;

x44011_44019.componentWillUnmount = ((function (x44011_44019){
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
});})(x44011_44019))
;

x44011_44019.componentDidUpdate = ((function (x44011_44019){
return (function (prev_props__19908__auto__,prev_state__19909__auto__){
var this__19905__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19905__auto__);
});})(x44011_44019))
;

x44011_44019.isMounted = ((function (x44011_44019){
return (function (){
var this__19905__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19905__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x44011_44019))
;

x44011_44019.componentWillMount = ((function (x44011_44019){
return (function (){
var this__19905__auto__ = this;
var indexer__19910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19905__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x44011_44019))
;

x44011_44019.render = ((function (x44011_44019){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_44012 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44013 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_44014 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_44015 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_44016 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var todos = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
return React.DOM.ol(null,om.util.force_children.call(null,cljs.core.map.call(null,om_min_todo.core.todo,todos)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_44016;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_44015;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_44014;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_44013;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44012;
}});})(x44011_44019))
;


om_min_todo.core.ToDoList.prototype.constructor = om_min_todo.core.ToDoList;

om_min_todo.core.ToDoList.prototype.om$isComponent = true;

var x44017_44020 = om_min_todo.core.ToDoList;


var x44018_44021 = om_min_todo.core.ToDoList.prototype;


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

var x44027_44035 = om_min_todo.core.NewToDoForm.prototype;
x44027_44035.componentWillUpdate = ((function (x44027_44035){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19905__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19905__auto__);
});})(x44027_44035))
;

x44027_44035.shouldComponentUpdate = ((function (x44027_44035){
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
});})(x44027_44035))
;

x44027_44035.componentWillUnmount = ((function (x44027_44035){
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
});})(x44027_44035))
;

x44027_44035.componentDidUpdate = ((function (x44027_44035){
return (function (prev_props__19908__auto__,prev_state__19909__auto__){
var this__19905__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19905__auto__);
});})(x44027_44035))
;

x44027_44035.isMounted = ((function (x44027_44035){
return (function (){
var this__19905__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19905__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x44027_44035))
;

x44027_44035.componentWillMount = ((function (x44027_44035){
return (function (){
var this__19905__auto__ = this;
var indexer__19910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19905__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x44027_44035))
;

x44027_44035.render = ((function (x44027_44035){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_44028 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44029 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_44030 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_44031 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_44032 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var set_error = ((function (_STAR_reconciler_STAR_44028,_STAR_depth_STAR_44029,_STAR_shared_STAR_44030,_STAR_instrument_STAR_44031,_STAR_parent_STAR_44032,this$,x44027_44035){
return (function (){
var err = goog.dom.getElement("todo-error");
return err.innerHTML = "Invalid name (repeating)!";
});})(_STAR_reconciler_STAR_44028,_STAR_depth_STAR_44029,_STAR_shared_STAR_44030,_STAR_instrument_STAR_44031,_STAR_parent_STAR_44032,this$,x44027_44035))
;
var clear_error = ((function (set_error,_STAR_reconciler_STAR_44028,_STAR_depth_STAR_44029,_STAR_shared_STAR_44030,_STAR_instrument_STAR_44031,_STAR_parent_STAR_44032,this$,x44027_44035){
return (function (){
var err = goog.dom.getElement("todo-error");
return err.innerHTML = "";
});})(set_error,_STAR_reconciler_STAR_44028,_STAR_depth_STAR_44029,_STAR_shared_STAR_44030,_STAR_instrument_STAR_44031,_STAR_parent_STAR_44032,this$,x44027_44035))
;
var valid_name_QMARK_ = ((function (set_error,clear_error,_STAR_reconciler_STAR_44028,_STAR_depth_STAR_44029,_STAR_shared_STAR_44030,_STAR_instrument_STAR_44031,_STAR_parent_STAR_44032,this$,x44027_44035){
return (function (title){
var names = cljs.core.map.call(null,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_min_todo.core.app_state)));
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([title], true),names));
});})(set_error,clear_error,_STAR_reconciler_STAR_44028,_STAR_depth_STAR_44029,_STAR_shared_STAR_44030,_STAR_instrument_STAR_44031,_STAR_parent_STAR_44032,this$,x44027_44035))
;
var add_todo = ((function (set_error,clear_error,valid_name_QMARK_,_STAR_reconciler_STAR_44028,_STAR_depth_STAR_44029,_STAR_shared_STAR_44030,_STAR_instrument_STAR_44031,_STAR_parent_STAR_44032,this$,x44027_44035){
return (function (title,priority){
cljs.core.swap_BANG_.call(null,om_min_todo.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null),((function (set_error,clear_error,valid_name_QMARK_,_STAR_reconciler_STAR_44028,_STAR_depth_STAR_44029,_STAR_shared_STAR_44030,_STAR_instrument_STAR_44031,_STAR_parent_STAR_44032,this$,x44027_44035){
return (function (p1__44022_SHARP_){
return cljs.core.conj.call(null,p1__44022_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"priority","priority",1431093715),priority], null));
});})(set_error,clear_error,valid_name_QMARK_,_STAR_reconciler_STAR_44028,_STAR_depth_STAR_44029,_STAR_shared_STAR_44030,_STAR_instrument_STAR_44031,_STAR_parent_STAR_44032,this$,x44027_44035))
);

return clear_error.call(null);
});})(set_error,clear_error,valid_name_QMARK_,_STAR_reconciler_STAR_44028,_STAR_depth_STAR_44029,_STAR_shared_STAR_44030,_STAR_instrument_STAR_44031,_STAR_parent_STAR_44032,this$,x44027_44035))
;
var get_title = ((function (set_error,clear_error,valid_name_QMARK_,add_todo,_STAR_reconciler_STAR_44028,_STAR_depth_STAR_44029,_STAR_shared_STAR_44030,_STAR_instrument_STAR_44031,_STAR_parent_STAR_44032,this$,x44027_44035){
return (function (){
return goog.dom.getElement("todo-input-title").value;
});})(set_error,clear_error,valid_name_QMARK_,add_todo,_STAR_reconciler_STAR_44028,_STAR_depth_STAR_44029,_STAR_shared_STAR_44030,_STAR_instrument_STAR_44031,_STAR_parent_STAR_44032,this$,x44027_44035))
;
var get_priority = ((function (set_error,clear_error,valid_name_QMARK_,add_todo,get_title,_STAR_reconciler_STAR_44028,_STAR_depth_STAR_44029,_STAR_shared_STAR_44030,_STAR_instrument_STAR_44031,_STAR_parent_STAR_44032,this$,x44027_44035){
return (function (){
return Number(goog.dom.getElement("todo-input-priority").value);
});})(set_error,clear_error,valid_name_QMARK_,add_todo,get_title,_STAR_reconciler_STAR_44028,_STAR_depth_STAR_44029,_STAR_shared_STAR_44030,_STAR_instrument_STAR_44031,_STAR_parent_STAR_44032,this$,x44027_44035))
;
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.form({"id": "todo-input"},om.util.force_children.call(null,"Title:"),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,om.dom.input.call(null,{"id": "todo-input-title", "name": "title", "type": "text"})),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,"Priority:"),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,om.dom.input.call(null,{"id": "todo-input-priority", "name": "priority", "type": "number"})),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,om.dom.input.call(null,{"value": "add", "type": "button", "onClick": ((function (set_error,clear_error,valid_name_QMARK_,add_todo,get_title,get_priority,_STAR_reconciler_STAR_44028,_STAR_depth_STAR_44029,_STAR_shared_STAR_44030,_STAR_instrument_STAR_44031,_STAR_parent_STAR_44032,this$,x44027_44035){
return (function (){
var title = get_title.call(null);
var priority = get_priority.call(null);
if(cljs.core.truth_(valid_name_QMARK_.call(null,title))){
return add_todo.call(null,title,priority);
} else {
return set_error.call(null);
}
});})(set_error,clear_error,valid_name_QMARK_,add_todo,get_title,get_priority,_STAR_reconciler_STAR_44028,_STAR_depth_STAR_44029,_STAR_shared_STAR_44030,_STAR_instrument_STAR_44031,_STAR_parent_STAR_44032,this$,x44027_44035))
})))),om.util.force_children.call(null,React.DOM.div({"id": "todo-error"})));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_44032;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_44031;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_44030;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_44029;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44028;
}});})(x44027_44035))
;


om_min_todo.core.NewToDoForm.prototype.constructor = om_min_todo.core.NewToDoForm;

om_min_todo.core.NewToDoForm.prototype.om$isComponent = true;

var x44033_44036 = om_min_todo.core.NewToDoForm;


var x44034_44037 = om_min_todo.core.NewToDoForm.prototype;


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

var x44042_44050 = om_min_todo.core.Root.prototype;
x44042_44050.componentWillUpdate = ((function (x44042_44050){
return (function (next_props__19906__auto__,next_state__19907__auto__){
var this__19905__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19905__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19905__auto__);
});})(x44042_44050))
;

x44042_44050.shouldComponentUpdate = ((function (x44042_44050){
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
});})(x44042_44050))
;

x44042_44050.componentWillUnmount = ((function (x44042_44050){
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
});})(x44042_44050))
;

x44042_44050.componentDidUpdate = ((function (x44042_44050){
return (function (prev_props__19908__auto__,prev_state__19909__auto__){
var this__19905__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19905__auto__);
});})(x44042_44050))
;

x44042_44050.isMounted = ((function (x44042_44050){
return (function (){
var this__19905__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19905__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x44042_44050))
;

x44042_44050.componentWillMount = ((function (x44042_44050){
return (function (){
var this__19905__auto__ = this;
var indexer__19910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19905__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19910__auto__,this__19905__auto__);
}
});})(x44042_44050))
;

x44042_44050.render = ((function (x44042_44050){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_44043 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44044 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_44045 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_44046 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_44047 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Minimal Om ToDo"))),om.util.force_children.call(null,om_min_todo.core.new_todo_form.call(null)),om.util.force_children.call(null,om_min_todo.core.todo_list.call(null,om.next.props.call(null,this$))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_44047;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_44046;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_44045;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_44044;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44043;
}});})(x44042_44050))
;


om_min_todo.core.Root.prototype.constructor = om_min_todo.core.Root;

om_min_todo.core.Root.prototype.om$isComponent = true;

var x44048_44051 = om_min_todo.core.Root;


var x44049_44052 = om_min_todo.core.Root.prototype;


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