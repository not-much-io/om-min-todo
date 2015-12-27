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
var seq__49633_49647 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49634_49648 = null;
var count__49635_49649 = (0);
var i__49636_49650 = (0);
while(true){
if((i__49636_49650 < count__49635_49649)){
var f_49651 = cljs.core._nth.call(null,chunk__49634_49648,i__49636_49650);
cljs.core.println.call(null,"  ",f_49651);

var G__49652 = seq__49633_49647;
var G__49653 = chunk__49634_49648;
var G__49654 = count__49635_49649;
var G__49655 = (i__49636_49650 + (1));
seq__49633_49647 = G__49652;
chunk__49634_49648 = G__49653;
count__49635_49649 = G__49654;
i__49636_49650 = G__49655;
continue;
} else {
var temp__4425__auto___49656 = cljs.core.seq.call(null,seq__49633_49647);
if(temp__4425__auto___49656){
var seq__49633_49657__$1 = temp__4425__auto___49656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49633_49657__$1)){
var c__17574__auto___49658 = cljs.core.chunk_first.call(null,seq__49633_49657__$1);
var G__49659 = cljs.core.chunk_rest.call(null,seq__49633_49657__$1);
var G__49660 = c__17574__auto___49658;
var G__49661 = cljs.core.count.call(null,c__17574__auto___49658);
var G__49662 = (0);
seq__49633_49647 = G__49659;
chunk__49634_49648 = G__49660;
count__49635_49649 = G__49661;
i__49636_49650 = G__49662;
continue;
} else {
var f_49663 = cljs.core.first.call(null,seq__49633_49657__$1);
cljs.core.println.call(null,"  ",f_49663);

var G__49664 = cljs.core.next.call(null,seq__49633_49657__$1);
var G__49665 = null;
var G__49666 = (0);
var G__49667 = (0);
seq__49633_49647 = G__49664;
chunk__49634_49648 = G__49665;
count__49635_49649 = G__49666;
i__49636_49650 = G__49667;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49668 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16771__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49668);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49668)))?cljs.core.second.call(null,arglists_49668):arglists_49668));
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
var seq__49637 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49638 = null;
var count__49639 = (0);
var i__49640 = (0);
while(true){
if((i__49640 < count__49639)){
var vec__49641 = cljs.core._nth.call(null,chunk__49638,i__49640);
var name = cljs.core.nth.call(null,vec__49641,(0),null);
var map__49642 = cljs.core.nth.call(null,vec__49641,(1),null);
var map__49642__$1 = ((((!((map__49642 == null)))?((((map__49642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49642):map__49642);
var doc = cljs.core.get.call(null,map__49642__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__49642__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__49669 = seq__49637;
var G__49670 = chunk__49638;
var G__49671 = count__49639;
var G__49672 = (i__49640 + (1));
seq__49637 = G__49669;
chunk__49638 = G__49670;
count__49639 = G__49671;
i__49640 = G__49672;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__49637);
if(temp__4425__auto__){
var seq__49637__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49637__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__49637__$1);
var G__49673 = cljs.core.chunk_rest.call(null,seq__49637__$1);
var G__49674 = c__17574__auto__;
var G__49675 = cljs.core.count.call(null,c__17574__auto__);
var G__49676 = (0);
seq__49637 = G__49673;
chunk__49638 = G__49674;
count__49639 = G__49675;
i__49640 = G__49676;
continue;
} else {
var vec__49644 = cljs.core.first.call(null,seq__49637__$1);
var name = cljs.core.nth.call(null,vec__49644,(0),null);
var map__49645 = cljs.core.nth.call(null,vec__49644,(1),null);
var map__49645__$1 = ((((!((map__49645 == null)))?((((map__49645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49645):map__49645);
var doc = cljs.core.get.call(null,map__49645__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__49645__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__49677 = cljs.core.next.call(null,seq__49637__$1);
var G__49678 = null;
var G__49679 = (0);
var G__49680 = (0);
seq__49637 = G__49677;
chunk__49638 = G__49678;
count__49639 = G__49679;
i__49640 = G__49680;
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