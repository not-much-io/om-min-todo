// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25704_25718 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25705_25719 = null;
var count__25706_25720 = (0);
var i__25707_25721 = (0);
while(true){
if((i__25707_25721 < count__25706_25720)){
var f_25722 = cljs.core._nth.call(null,chunk__25705_25719,i__25707_25721);
cljs.core.println.call(null,"  ",f_25722);

var G__25723 = seq__25704_25718;
var G__25724 = chunk__25705_25719;
var G__25725 = count__25706_25720;
var G__25726 = (i__25707_25721 + (1));
seq__25704_25718 = G__25723;
chunk__25705_25719 = G__25724;
count__25706_25720 = G__25725;
i__25707_25721 = G__25726;
continue;
} else {
var temp__4425__auto___25727 = cljs.core.seq.call(null,seq__25704_25718);
if(temp__4425__auto___25727){
var seq__25704_25728__$1 = temp__4425__auto___25727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25704_25728__$1)){
var c__17574__auto___25729 = cljs.core.chunk_first.call(null,seq__25704_25728__$1);
var G__25730 = cljs.core.chunk_rest.call(null,seq__25704_25728__$1);
var G__25731 = c__17574__auto___25729;
var G__25732 = cljs.core.count.call(null,c__17574__auto___25729);
var G__25733 = (0);
seq__25704_25718 = G__25730;
chunk__25705_25719 = G__25731;
count__25706_25720 = G__25732;
i__25707_25721 = G__25733;
continue;
} else {
var f_25734 = cljs.core.first.call(null,seq__25704_25728__$1);
cljs.core.println.call(null,"  ",f_25734);

var G__25735 = cljs.core.next.call(null,seq__25704_25728__$1);
var G__25736 = null;
var G__25737 = (0);
var G__25738 = (0);
seq__25704_25718 = G__25735;
chunk__25705_25719 = G__25736;
count__25706_25720 = G__25737;
i__25707_25721 = G__25738;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25739 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16771__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25739);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25739)))?cljs.core.second.call(null,arglists_25739):arglists_25739));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25708 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25709 = null;
var count__25710 = (0);
var i__25711 = (0);
while(true){
if((i__25711 < count__25710)){
var vec__25712 = cljs.core._nth.call(null,chunk__25709,i__25711);
var name = cljs.core.nth.call(null,vec__25712,(0),null);
var map__25713 = cljs.core.nth.call(null,vec__25712,(1),null);
var map__25713__$1 = ((((!((map__25713 == null)))?((((map__25713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25713):map__25713);
var doc = cljs.core.get.call(null,map__25713__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25713__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25740 = seq__25708;
var G__25741 = chunk__25709;
var G__25742 = count__25710;
var G__25743 = (i__25711 + (1));
seq__25708 = G__25740;
chunk__25709 = G__25741;
count__25710 = G__25742;
i__25711 = G__25743;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25708);
if(temp__4425__auto__){
var seq__25708__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25708__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__25708__$1);
var G__25744 = cljs.core.chunk_rest.call(null,seq__25708__$1);
var G__25745 = c__17574__auto__;
var G__25746 = cljs.core.count.call(null,c__17574__auto__);
var G__25747 = (0);
seq__25708 = G__25744;
chunk__25709 = G__25745;
count__25710 = G__25746;
i__25711 = G__25747;
continue;
} else {
var vec__25715 = cljs.core.first.call(null,seq__25708__$1);
var name = cljs.core.nth.call(null,vec__25715,(0),null);
var map__25716 = cljs.core.nth.call(null,vec__25715,(1),null);
var map__25716__$1 = ((((!((map__25716 == null)))?((((map__25716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25716):map__25716);
var doc = cljs.core.get.call(null,map__25716__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25716__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25748 = cljs.core.next.call(null,seq__25708__$1);
var G__25749 = null;
var G__25750 = (0);
var G__25751 = (0);
seq__25708 = G__25748;
chunk__25709 = G__25749;
count__25710 = G__25750;
i__25711 = G__25751;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map