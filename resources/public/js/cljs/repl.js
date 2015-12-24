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
var seq__25531_25545 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25532_25546 = null;
var count__25533_25547 = (0);
var i__25534_25548 = (0);
while(true){
if((i__25534_25548 < count__25533_25547)){
var f_25549 = cljs.core._nth.call(null,chunk__25532_25546,i__25534_25548);
cljs.core.println.call(null,"  ",f_25549);

var G__25550 = seq__25531_25545;
var G__25551 = chunk__25532_25546;
var G__25552 = count__25533_25547;
var G__25553 = (i__25534_25548 + (1));
seq__25531_25545 = G__25550;
chunk__25532_25546 = G__25551;
count__25533_25547 = G__25552;
i__25534_25548 = G__25553;
continue;
} else {
var temp__4425__auto___25554 = cljs.core.seq.call(null,seq__25531_25545);
if(temp__4425__auto___25554){
var seq__25531_25555__$1 = temp__4425__auto___25554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25531_25555__$1)){
var c__17574__auto___25556 = cljs.core.chunk_first.call(null,seq__25531_25555__$1);
var G__25557 = cljs.core.chunk_rest.call(null,seq__25531_25555__$1);
var G__25558 = c__17574__auto___25556;
var G__25559 = cljs.core.count.call(null,c__17574__auto___25556);
var G__25560 = (0);
seq__25531_25545 = G__25557;
chunk__25532_25546 = G__25558;
count__25533_25547 = G__25559;
i__25534_25548 = G__25560;
continue;
} else {
var f_25561 = cljs.core.first.call(null,seq__25531_25555__$1);
cljs.core.println.call(null,"  ",f_25561);

var G__25562 = cljs.core.next.call(null,seq__25531_25555__$1);
var G__25563 = null;
var G__25564 = (0);
var G__25565 = (0);
seq__25531_25545 = G__25562;
chunk__25532_25546 = G__25563;
count__25533_25547 = G__25564;
i__25534_25548 = G__25565;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25566 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16771__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25566);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25566)))?cljs.core.second.call(null,arglists_25566):arglists_25566));
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
var seq__25535 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25536 = null;
var count__25537 = (0);
var i__25538 = (0);
while(true){
if((i__25538 < count__25537)){
var vec__25539 = cljs.core._nth.call(null,chunk__25536,i__25538);
var name = cljs.core.nth.call(null,vec__25539,(0),null);
var map__25540 = cljs.core.nth.call(null,vec__25539,(1),null);
var map__25540__$1 = ((((!((map__25540 == null)))?((((map__25540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25540):map__25540);
var doc = cljs.core.get.call(null,map__25540__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25540__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25567 = seq__25535;
var G__25568 = chunk__25536;
var G__25569 = count__25537;
var G__25570 = (i__25538 + (1));
seq__25535 = G__25567;
chunk__25536 = G__25568;
count__25537 = G__25569;
i__25538 = G__25570;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25535);
if(temp__4425__auto__){
var seq__25535__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25535__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__25535__$1);
var G__25571 = cljs.core.chunk_rest.call(null,seq__25535__$1);
var G__25572 = c__17574__auto__;
var G__25573 = cljs.core.count.call(null,c__17574__auto__);
var G__25574 = (0);
seq__25535 = G__25571;
chunk__25536 = G__25572;
count__25537 = G__25573;
i__25538 = G__25574;
continue;
} else {
var vec__25542 = cljs.core.first.call(null,seq__25535__$1);
var name = cljs.core.nth.call(null,vec__25542,(0),null);
var map__25543 = cljs.core.nth.call(null,vec__25542,(1),null);
var map__25543__$1 = ((((!((map__25543 == null)))?((((map__25543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25543):map__25543);
var doc = cljs.core.get.call(null,map__25543__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25543__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25575 = cljs.core.next.call(null,seq__25535__$1);
var G__25576 = null;
var G__25577 = (0);
var G__25578 = (0);
seq__25535 = G__25575;
chunk__25536 = G__25576;
count__25537 = G__25577;
i__25538 = G__25578;
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