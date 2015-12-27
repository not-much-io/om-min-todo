// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17836__auto__ = [];
var len__17829__auto___49818 = arguments.length;
var i__17830__auto___49819 = (0);
while(true){
if((i__17830__auto___49819 < len__17829__auto___49818)){
args__17836__auto__.push((arguments[i__17830__auto___49819]));

var G__49820 = (i__17830__auto___49819 + (1));
i__17830__auto___49819 = G__49820;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((2) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17837__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__49810_49821 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__49811_49822 = null;
var count__49812_49823 = (0);
var i__49813_49824 = (0);
while(true){
if((i__49813_49824 < count__49812_49823)){
var k_49825 = cljs.core._nth.call(null,chunk__49811_49822,i__49813_49824);
e.setAttribute(cljs.core.name.call(null,k_49825),cljs.core.get.call(null,attrs,k_49825));

var G__49826 = seq__49810_49821;
var G__49827 = chunk__49811_49822;
var G__49828 = count__49812_49823;
var G__49829 = (i__49813_49824 + (1));
seq__49810_49821 = G__49826;
chunk__49811_49822 = G__49827;
count__49812_49823 = G__49828;
i__49813_49824 = G__49829;
continue;
} else {
var temp__4425__auto___49830 = cljs.core.seq.call(null,seq__49810_49821);
if(temp__4425__auto___49830){
var seq__49810_49831__$1 = temp__4425__auto___49830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49810_49831__$1)){
var c__17574__auto___49832 = cljs.core.chunk_first.call(null,seq__49810_49831__$1);
var G__49833 = cljs.core.chunk_rest.call(null,seq__49810_49831__$1);
var G__49834 = c__17574__auto___49832;
var G__49835 = cljs.core.count.call(null,c__17574__auto___49832);
var G__49836 = (0);
seq__49810_49821 = G__49833;
chunk__49811_49822 = G__49834;
count__49812_49823 = G__49835;
i__49813_49824 = G__49836;
continue;
} else {
var k_49837 = cljs.core.first.call(null,seq__49810_49831__$1);
e.setAttribute(cljs.core.name.call(null,k_49837),cljs.core.get.call(null,attrs,k_49837));

var G__49838 = cljs.core.next.call(null,seq__49810_49831__$1);
var G__49839 = null;
var G__49840 = (0);
var G__49841 = (0);
seq__49810_49821 = G__49838;
chunk__49811_49822 = G__49839;
count__49812_49823 = G__49840;
i__49813_49824 = G__49841;
continue;
}
} else {
}
}
break;
}

var seq__49814_49842 = cljs.core.seq.call(null,children);
var chunk__49815_49843 = null;
var count__49816_49844 = (0);
var i__49817_49845 = (0);
while(true){
if((i__49817_49845 < count__49816_49844)){
var ch_49846 = cljs.core._nth.call(null,chunk__49815_49843,i__49817_49845);
e.appendChild(ch_49846);

var G__49847 = seq__49814_49842;
var G__49848 = chunk__49815_49843;
var G__49849 = count__49816_49844;
var G__49850 = (i__49817_49845 + (1));
seq__49814_49842 = G__49847;
chunk__49815_49843 = G__49848;
count__49816_49844 = G__49849;
i__49817_49845 = G__49850;
continue;
} else {
var temp__4425__auto___49851 = cljs.core.seq.call(null,seq__49814_49842);
if(temp__4425__auto___49851){
var seq__49814_49852__$1 = temp__4425__auto___49851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49814_49852__$1)){
var c__17574__auto___49853 = cljs.core.chunk_first.call(null,seq__49814_49852__$1);
var G__49854 = cljs.core.chunk_rest.call(null,seq__49814_49852__$1);
var G__49855 = c__17574__auto___49853;
var G__49856 = cljs.core.count.call(null,c__17574__auto___49853);
var G__49857 = (0);
seq__49814_49842 = G__49854;
chunk__49815_49843 = G__49855;
count__49816_49844 = G__49856;
i__49817_49845 = G__49857;
continue;
} else {
var ch_49858 = cljs.core.first.call(null,seq__49814_49852__$1);
e.appendChild(ch_49858);

var G__49859 = cljs.core.next.call(null,seq__49814_49852__$1);
var G__49860 = null;
var G__49861 = (0);
var G__49862 = (0);
seq__49814_49842 = G__49859;
chunk__49815_49843 = G__49860;
count__49816_49844 = G__49861;
i__49817_49845 = G__49862;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq49807){
var G__49808 = cljs.core.first.call(null,seq49807);
var seq49807__$1 = cljs.core.next.call(null,seq49807);
var G__49809 = cljs.core.first.call(null,seq49807__$1);
var seq49807__$2 = cljs.core.next.call(null,seq49807__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__49808,G__49809,seq49807__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__,hierarchy__17688__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__,hierarchy__17688__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_49863 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_49863.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_49863.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_49863.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_49863);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__49864,st_map){
var map__49869 = p__49864;
var map__49869__$1 = ((((!((map__49869 == null)))?((((map__49869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49869):map__49869);
var container_el = cljs.core.get.call(null,map__49869__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__49869,map__49869__$1,container_el){
return (function (p__49871){
var vec__49872 = p__49871;
var k = cljs.core.nth.call(null,vec__49872,(0),null);
var v = cljs.core.nth.call(null,vec__49872,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__49869,map__49869__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__49873,dom_str){
var map__49876 = p__49873;
var map__49876__$1 = ((((!((map__49876 == null)))?((((map__49876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49876):map__49876);
var c = map__49876__$1;
var content_area_el = cljs.core.get.call(null,map__49876__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__49878){
var map__49881 = p__49878;
var map__49881__$1 = ((((!((map__49881 == null)))?((((map__49881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49881):map__49881);
var content_area_el = cljs.core.get.call(null,map__49881__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__){
return (function (state_49924){
var state_val_49925 = (state_49924[(1)]);
if((state_val_49925 === (1))){
var inst_49909 = (state_49924[(7)]);
var inst_49909__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_49910 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_49911 = ["10px","10px","100%","68px","1.0"];
var inst_49912 = cljs.core.PersistentHashMap.fromArrays(inst_49910,inst_49911);
var inst_49913 = cljs.core.merge.call(null,inst_49912,style);
var inst_49914 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_49909__$1,inst_49913);
var inst_49915 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_49909__$1,msg);
var inst_49916 = cljs.core.async.timeout.call(null,(300));
var state_49924__$1 = (function (){var statearr_49926 = state_49924;
(statearr_49926[(8)] = inst_49914);

(statearr_49926[(7)] = inst_49909__$1);

(statearr_49926[(9)] = inst_49915);

return statearr_49926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49924__$1,(2),inst_49916);
} else {
if((state_val_49925 === (2))){
var inst_49909 = (state_49924[(7)]);
var inst_49918 = (state_49924[(2)]);
var inst_49919 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_49920 = ["auto"];
var inst_49921 = cljs.core.PersistentHashMap.fromArrays(inst_49919,inst_49920);
var inst_49922 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_49909,inst_49921);
var state_49924__$1 = (function (){var statearr_49927 = state_49924;
(statearr_49927[(10)] = inst_49918);

return statearr_49927;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49924__$1,inst_49922);
} else {
return null;
}
}
});})(c__18796__auto__))
;
return ((function (switch__18775__auto__,c__18796__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18776__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18776__auto____0 = (function (){
var statearr_49931 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49931[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18776__auto__);

(statearr_49931[(1)] = (1));

return statearr_49931;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18776__auto____1 = (function (state_49924){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_49924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e49932){if((e49932 instanceof Object)){
var ex__18779__auto__ = e49932;
var statearr_49933_49935 = state_49924;
(statearr_49933_49935[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49936 = state_49924;
state_49924 = G__49936;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18776__auto__ = function(state_49924){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18776__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18776__auto____1.call(this,state_49924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18776__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18776__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__))
})();
var state__18798__auto__ = (function (){var statearr_49934 = f__18797__auto__.call(null);
(statearr_49934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_49934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__))
);

return c__18796__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__49938 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__49938,(0),null);
var ln = cljs.core.nth.call(null,vec__49938,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__49941 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__49941,(0),null);
var file_line = cljs.core.nth.call(null,vec__49941,(1),null);
var file_column = cljs.core.nth.call(null,vec__49941,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__49941,file_name,file_line,file_column){
return (function (p1__49939_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__49939_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__49941,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16771__auto__ = file_line;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
var and__16759__auto__ = cause;
if(cljs.core.truth_(and__16759__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16759__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__49944 = figwheel.client.heads_up.ensure_container.call(null);
var map__49944__$1 = ((((!((map__49944 == null)))?((((map__49944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49944):map__49944);
var content_area_el = cljs.core.get.call(null,map__49944__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__){
return (function (state_49992){
var state_val_49993 = (state_49992[(1)]);
if((state_val_49993 === (1))){
var inst_49975 = (state_49992[(7)]);
var inst_49975__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_49976 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_49977 = ["0.0"];
var inst_49978 = cljs.core.PersistentHashMap.fromArrays(inst_49976,inst_49977);
var inst_49979 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_49975__$1,inst_49978);
var inst_49980 = cljs.core.async.timeout.call(null,(300));
var state_49992__$1 = (function (){var statearr_49994 = state_49992;
(statearr_49994[(7)] = inst_49975__$1);

(statearr_49994[(8)] = inst_49979);

return statearr_49994;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49992__$1,(2),inst_49980);
} else {
if((state_val_49993 === (2))){
var inst_49975 = (state_49992[(7)]);
var inst_49982 = (state_49992[(2)]);
var inst_49983 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_49984 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_49985 = cljs.core.PersistentHashMap.fromArrays(inst_49983,inst_49984);
var inst_49986 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_49975,inst_49985);
var inst_49987 = cljs.core.async.timeout.call(null,(200));
var state_49992__$1 = (function (){var statearr_49995 = state_49992;
(statearr_49995[(9)] = inst_49986);

(statearr_49995[(10)] = inst_49982);

return statearr_49995;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49992__$1,(3),inst_49987);
} else {
if((state_val_49993 === (3))){
var inst_49975 = (state_49992[(7)]);
var inst_49989 = (state_49992[(2)]);
var inst_49990 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_49975,"");
var state_49992__$1 = (function (){var statearr_49996 = state_49992;
(statearr_49996[(11)] = inst_49989);

return statearr_49996;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49992__$1,inst_49990);
} else {
return null;
}
}
}
});})(c__18796__auto__))
;
return ((function (switch__18775__auto__,c__18796__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18776__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18776__auto____0 = (function (){
var statearr_50000 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50000[(0)] = figwheel$client$heads_up$clear_$_state_machine__18776__auto__);

(statearr_50000[(1)] = (1));

return statearr_50000;
});
var figwheel$client$heads_up$clear_$_state_machine__18776__auto____1 = (function (state_49992){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_49992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e50001){if((e50001 instanceof Object)){
var ex__18779__auto__ = e50001;
var statearr_50002_50004 = state_49992;
(statearr_50002_50004[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50005 = state_49992;
state_49992 = G__50005;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18776__auto__ = function(state_49992){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18776__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18776__auto____1.call(this,state_49992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18776__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18776__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__))
})();
var state__18798__auto__ = (function (){var statearr_50003 = f__18797__auto__.call(null);
(statearr_50003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_50003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__))
);

return c__18796__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__){
return (function (state_50037){
var state_val_50038 = (state_50037[(1)]);
if((state_val_50038 === (1))){
var inst_50027 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_50037__$1 = state_50037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50037__$1,(2),inst_50027);
} else {
if((state_val_50038 === (2))){
var inst_50029 = (state_50037[(2)]);
var inst_50030 = cljs.core.async.timeout.call(null,(400));
var state_50037__$1 = (function (){var statearr_50039 = state_50037;
(statearr_50039[(7)] = inst_50029);

return statearr_50039;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50037__$1,(3),inst_50030);
} else {
if((state_val_50038 === (3))){
var inst_50032 = (state_50037[(2)]);
var inst_50033 = figwheel.client.heads_up.clear.call(null);
var state_50037__$1 = (function (){var statearr_50040 = state_50037;
(statearr_50040[(8)] = inst_50032);

return statearr_50040;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50037__$1,(4),inst_50033);
} else {
if((state_val_50038 === (4))){
var inst_50035 = (state_50037[(2)]);
var state_50037__$1 = state_50037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50037__$1,inst_50035);
} else {
return null;
}
}
}
}
});})(c__18796__auto__))
;
return ((function (switch__18775__auto__,c__18796__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18776__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18776__auto____0 = (function (){
var statearr_50044 = [null,null,null,null,null,null,null,null,null];
(statearr_50044[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18776__auto__);

(statearr_50044[(1)] = (1));

return statearr_50044;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18776__auto____1 = (function (state_50037){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_50037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e50045){if((e50045 instanceof Object)){
var ex__18779__auto__ = e50045;
var statearr_50046_50048 = state_50037;
(statearr_50046_50048[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50049 = state_50037;
state_50037 = G__50049;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18776__auto__ = function(state_50037){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18776__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18776__auto____1.call(this,state_50037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18776__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18776__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__))
})();
var state__18798__auto__ = (function (){var statearr_50047 = f__18797__auto__.call(null);
(statearr_50047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_50047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__))
);

return c__18796__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map