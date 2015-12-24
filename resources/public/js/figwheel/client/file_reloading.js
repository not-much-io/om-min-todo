// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16771__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16771__auto__){
return or__16771__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16771__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24507_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24507_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24512 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24513 = null;
var count__24514 = (0);
var i__24515 = (0);
while(true){
if((i__24515 < count__24514)){
var n = cljs.core._nth.call(null,chunk__24513,i__24515);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24516 = seq__24512;
var G__24517 = chunk__24513;
var G__24518 = count__24514;
var G__24519 = (i__24515 + (1));
seq__24512 = G__24516;
chunk__24513 = G__24517;
count__24514 = G__24518;
i__24515 = G__24519;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24512);
if(temp__4425__auto__){
var seq__24512__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24512__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__24512__$1);
var G__24520 = cljs.core.chunk_rest.call(null,seq__24512__$1);
var G__24521 = c__17574__auto__;
var G__24522 = cljs.core.count.call(null,c__17574__auto__);
var G__24523 = (0);
seq__24512 = G__24520;
chunk__24513 = G__24521;
count__24514 = G__24522;
i__24515 = G__24523;
continue;
} else {
var n = cljs.core.first.call(null,seq__24512__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24524 = cljs.core.next.call(null,seq__24512__$1);
var G__24525 = null;
var G__24526 = (0);
var G__24527 = (0);
seq__24512 = G__24524;
chunk__24513 = G__24525;
count__24514 = G__24526;
i__24515 = G__24527;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24566_24573 = cljs.core.seq.call(null,deps);
var chunk__24567_24574 = null;
var count__24568_24575 = (0);
var i__24569_24576 = (0);
while(true){
if((i__24569_24576 < count__24568_24575)){
var dep_24577 = cljs.core._nth.call(null,chunk__24567_24574,i__24569_24576);
topo_sort_helper_STAR_.call(null,dep_24577,(depth + (1)),state);

var G__24578 = seq__24566_24573;
var G__24579 = chunk__24567_24574;
var G__24580 = count__24568_24575;
var G__24581 = (i__24569_24576 + (1));
seq__24566_24573 = G__24578;
chunk__24567_24574 = G__24579;
count__24568_24575 = G__24580;
i__24569_24576 = G__24581;
continue;
} else {
var temp__4425__auto___24582 = cljs.core.seq.call(null,seq__24566_24573);
if(temp__4425__auto___24582){
var seq__24566_24583__$1 = temp__4425__auto___24582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24566_24583__$1)){
var c__17574__auto___24584 = cljs.core.chunk_first.call(null,seq__24566_24583__$1);
var G__24585 = cljs.core.chunk_rest.call(null,seq__24566_24583__$1);
var G__24586 = c__17574__auto___24584;
var G__24587 = cljs.core.count.call(null,c__17574__auto___24584);
var G__24588 = (0);
seq__24566_24573 = G__24585;
chunk__24567_24574 = G__24586;
count__24568_24575 = G__24587;
i__24569_24576 = G__24588;
continue;
} else {
var dep_24589 = cljs.core.first.call(null,seq__24566_24583__$1);
topo_sort_helper_STAR_.call(null,dep_24589,(depth + (1)),state);

var G__24590 = cljs.core.next.call(null,seq__24566_24583__$1);
var G__24591 = null;
var G__24592 = (0);
var G__24593 = (0);
seq__24566_24573 = G__24590;
chunk__24567_24574 = G__24591;
count__24568_24575 = G__24592;
i__24569_24576 = G__24593;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24570){
var vec__24572 = p__24570;
var x = cljs.core.nth.call(null,vec__24572,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24572,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24572,x,xs,get_deps__$1){
return (function (p1__24528_SHARP_){
return clojure.set.difference.call(null,p1__24528_SHARP_,x);
});})(vec__24572,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24606 = cljs.core.seq.call(null,provides);
var chunk__24607 = null;
var count__24608 = (0);
var i__24609 = (0);
while(true){
if((i__24609 < count__24608)){
var prov = cljs.core._nth.call(null,chunk__24607,i__24609);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24610_24618 = cljs.core.seq.call(null,requires);
var chunk__24611_24619 = null;
var count__24612_24620 = (0);
var i__24613_24621 = (0);
while(true){
if((i__24613_24621 < count__24612_24620)){
var req_24622 = cljs.core._nth.call(null,chunk__24611_24619,i__24613_24621);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24622,prov);

var G__24623 = seq__24610_24618;
var G__24624 = chunk__24611_24619;
var G__24625 = count__24612_24620;
var G__24626 = (i__24613_24621 + (1));
seq__24610_24618 = G__24623;
chunk__24611_24619 = G__24624;
count__24612_24620 = G__24625;
i__24613_24621 = G__24626;
continue;
} else {
var temp__4425__auto___24627 = cljs.core.seq.call(null,seq__24610_24618);
if(temp__4425__auto___24627){
var seq__24610_24628__$1 = temp__4425__auto___24627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24610_24628__$1)){
var c__17574__auto___24629 = cljs.core.chunk_first.call(null,seq__24610_24628__$1);
var G__24630 = cljs.core.chunk_rest.call(null,seq__24610_24628__$1);
var G__24631 = c__17574__auto___24629;
var G__24632 = cljs.core.count.call(null,c__17574__auto___24629);
var G__24633 = (0);
seq__24610_24618 = G__24630;
chunk__24611_24619 = G__24631;
count__24612_24620 = G__24632;
i__24613_24621 = G__24633;
continue;
} else {
var req_24634 = cljs.core.first.call(null,seq__24610_24628__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24634,prov);

var G__24635 = cljs.core.next.call(null,seq__24610_24628__$1);
var G__24636 = null;
var G__24637 = (0);
var G__24638 = (0);
seq__24610_24618 = G__24635;
chunk__24611_24619 = G__24636;
count__24612_24620 = G__24637;
i__24613_24621 = G__24638;
continue;
}
} else {
}
}
break;
}

var G__24639 = seq__24606;
var G__24640 = chunk__24607;
var G__24641 = count__24608;
var G__24642 = (i__24609 + (1));
seq__24606 = G__24639;
chunk__24607 = G__24640;
count__24608 = G__24641;
i__24609 = G__24642;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24606);
if(temp__4425__auto__){
var seq__24606__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24606__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__24606__$1);
var G__24643 = cljs.core.chunk_rest.call(null,seq__24606__$1);
var G__24644 = c__17574__auto__;
var G__24645 = cljs.core.count.call(null,c__17574__auto__);
var G__24646 = (0);
seq__24606 = G__24643;
chunk__24607 = G__24644;
count__24608 = G__24645;
i__24609 = G__24646;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24606__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24614_24647 = cljs.core.seq.call(null,requires);
var chunk__24615_24648 = null;
var count__24616_24649 = (0);
var i__24617_24650 = (0);
while(true){
if((i__24617_24650 < count__24616_24649)){
var req_24651 = cljs.core._nth.call(null,chunk__24615_24648,i__24617_24650);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24651,prov);

var G__24652 = seq__24614_24647;
var G__24653 = chunk__24615_24648;
var G__24654 = count__24616_24649;
var G__24655 = (i__24617_24650 + (1));
seq__24614_24647 = G__24652;
chunk__24615_24648 = G__24653;
count__24616_24649 = G__24654;
i__24617_24650 = G__24655;
continue;
} else {
var temp__4425__auto___24656__$1 = cljs.core.seq.call(null,seq__24614_24647);
if(temp__4425__auto___24656__$1){
var seq__24614_24657__$1 = temp__4425__auto___24656__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24614_24657__$1)){
var c__17574__auto___24658 = cljs.core.chunk_first.call(null,seq__24614_24657__$1);
var G__24659 = cljs.core.chunk_rest.call(null,seq__24614_24657__$1);
var G__24660 = c__17574__auto___24658;
var G__24661 = cljs.core.count.call(null,c__17574__auto___24658);
var G__24662 = (0);
seq__24614_24647 = G__24659;
chunk__24615_24648 = G__24660;
count__24616_24649 = G__24661;
i__24617_24650 = G__24662;
continue;
} else {
var req_24663 = cljs.core.first.call(null,seq__24614_24657__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24663,prov);

var G__24664 = cljs.core.next.call(null,seq__24614_24657__$1);
var G__24665 = null;
var G__24666 = (0);
var G__24667 = (0);
seq__24614_24647 = G__24664;
chunk__24615_24648 = G__24665;
count__24616_24649 = G__24666;
i__24617_24650 = G__24667;
continue;
}
} else {
}
}
break;
}

var G__24668 = cljs.core.next.call(null,seq__24606__$1);
var G__24669 = null;
var G__24670 = (0);
var G__24671 = (0);
seq__24606 = G__24668;
chunk__24607 = G__24669;
count__24608 = G__24670;
i__24609 = G__24671;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24676_24680 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24677_24681 = null;
var count__24678_24682 = (0);
var i__24679_24683 = (0);
while(true){
if((i__24679_24683 < count__24678_24682)){
var ns_24684 = cljs.core._nth.call(null,chunk__24677_24681,i__24679_24683);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24684);

var G__24685 = seq__24676_24680;
var G__24686 = chunk__24677_24681;
var G__24687 = count__24678_24682;
var G__24688 = (i__24679_24683 + (1));
seq__24676_24680 = G__24685;
chunk__24677_24681 = G__24686;
count__24678_24682 = G__24687;
i__24679_24683 = G__24688;
continue;
} else {
var temp__4425__auto___24689 = cljs.core.seq.call(null,seq__24676_24680);
if(temp__4425__auto___24689){
var seq__24676_24690__$1 = temp__4425__auto___24689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24676_24690__$1)){
var c__17574__auto___24691 = cljs.core.chunk_first.call(null,seq__24676_24690__$1);
var G__24692 = cljs.core.chunk_rest.call(null,seq__24676_24690__$1);
var G__24693 = c__17574__auto___24691;
var G__24694 = cljs.core.count.call(null,c__17574__auto___24691);
var G__24695 = (0);
seq__24676_24680 = G__24692;
chunk__24677_24681 = G__24693;
count__24678_24682 = G__24694;
i__24679_24683 = G__24695;
continue;
} else {
var ns_24696 = cljs.core.first.call(null,seq__24676_24690__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24696);

var G__24697 = cljs.core.next.call(null,seq__24676_24690__$1);
var G__24698 = null;
var G__24699 = (0);
var G__24700 = (0);
seq__24676_24680 = G__24697;
chunk__24677_24681 = G__24698;
count__24678_24682 = G__24699;
i__24679_24683 = G__24700;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16771__auto__ = goog.require__;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__24701__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24702__i = 0, G__24702__a = new Array(arguments.length -  0);
while (G__24702__i < G__24702__a.length) {G__24702__a[G__24702__i] = arguments[G__24702__i + 0]; ++G__24702__i;}
  args = new cljs.core.IndexedSeq(G__24702__a,0);
} 
return G__24701__delegate.call(this,args);};
G__24701.cljs$lang$maxFixedArity = 0;
G__24701.cljs$lang$applyTo = (function (arglist__24703){
var args = cljs.core.seq(arglist__24703);
return G__24701__delegate(args);
});
G__24701.cljs$core$IFn$_invoke$arity$variadic = G__24701__delegate;
return G__24701;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24705 = cljs.core._EQ_;
var expr__24706 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24705.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24706))){
var path_parts = ((function (pred__24705,expr__24706){
return (function (p1__24704_SHARP_){
return clojure.string.split.call(null,p1__24704_SHARP_,/[\/\\]/);
});})(pred__24705,expr__24706))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24705,expr__24706){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24708){if((e24708 instanceof Error)){
var e = e24708;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24708;

}
}})());
});
;})(path_parts,sep,root,pred__24705,expr__24706))
} else {
if(cljs.core.truth_(pred__24705.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24706))){
return ((function (pred__24705,expr__24706){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24705,expr__24706){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24705,expr__24706))
);

return deferred.addErrback(((function (deferred,pred__24705,expr__24706){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24705,expr__24706))
);
});
;})(pred__24705,expr__24706))
} else {
return ((function (pred__24705,expr__24706){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24705,expr__24706))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24709,callback){
var map__24712 = p__24709;
var map__24712__$1 = ((((!((map__24712 == null)))?((((map__24712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24712):map__24712);
var file_msg = map__24712__$1;
var request_url = cljs.core.get.call(null,map__24712__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24712,map__24712__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24712,map__24712__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21564__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto__){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto__){
return (function (state_24736){
var state_val_24737 = (state_24736[(1)]);
if((state_val_24737 === (7))){
var inst_24732 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
var statearr_24738_24758 = state_24736__$1;
(statearr_24738_24758[(2)] = inst_24732);

(statearr_24738_24758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (1))){
var state_24736__$1 = state_24736;
var statearr_24739_24759 = state_24736__$1;
(statearr_24739_24759[(2)] = null);

(statearr_24739_24759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (4))){
var inst_24716 = (state_24736[(7)]);
var inst_24716__$1 = (state_24736[(2)]);
var state_24736__$1 = (function (){var statearr_24740 = state_24736;
(statearr_24740[(7)] = inst_24716__$1);

return statearr_24740;
})();
if(cljs.core.truth_(inst_24716__$1)){
var statearr_24741_24760 = state_24736__$1;
(statearr_24741_24760[(1)] = (5));

} else {
var statearr_24742_24761 = state_24736__$1;
(statearr_24742_24761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (6))){
var state_24736__$1 = state_24736;
var statearr_24743_24762 = state_24736__$1;
(statearr_24743_24762[(2)] = null);

(statearr_24743_24762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (3))){
var inst_24734 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24736__$1,inst_24734);
} else {
if((state_val_24737 === (2))){
var state_24736__$1 = state_24736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24736__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24737 === (11))){
var inst_24728 = (state_24736[(2)]);
var state_24736__$1 = (function (){var statearr_24744 = state_24736;
(statearr_24744[(8)] = inst_24728);

return statearr_24744;
})();
var statearr_24745_24763 = state_24736__$1;
(statearr_24745_24763[(2)] = null);

(statearr_24745_24763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (9))){
var inst_24722 = (state_24736[(9)]);
var inst_24720 = (state_24736[(10)]);
var inst_24724 = inst_24722.call(null,inst_24720);
var state_24736__$1 = state_24736;
var statearr_24746_24764 = state_24736__$1;
(statearr_24746_24764[(2)] = inst_24724);

(statearr_24746_24764[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (5))){
var inst_24716 = (state_24736[(7)]);
var inst_24718 = figwheel.client.file_reloading.blocking_load.call(null,inst_24716);
var state_24736__$1 = state_24736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24736__$1,(8),inst_24718);
} else {
if((state_val_24737 === (10))){
var inst_24720 = (state_24736[(10)]);
var inst_24726 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24720);
var state_24736__$1 = state_24736;
var statearr_24747_24765 = state_24736__$1;
(statearr_24747_24765[(2)] = inst_24726);

(statearr_24747_24765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (8))){
var inst_24722 = (state_24736[(9)]);
var inst_24716 = (state_24736[(7)]);
var inst_24720 = (state_24736[(2)]);
var inst_24721 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24722__$1 = cljs.core.get.call(null,inst_24721,inst_24716);
var state_24736__$1 = (function (){var statearr_24748 = state_24736;
(statearr_24748[(9)] = inst_24722__$1);

(statearr_24748[(10)] = inst_24720);

return statearr_24748;
})();
if(cljs.core.truth_(inst_24722__$1)){
var statearr_24749_24766 = state_24736__$1;
(statearr_24749_24766[(1)] = (9));

} else {
var statearr_24750_24767 = state_24736__$1;
(statearr_24750_24767[(1)] = (10));

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
});})(c__21564__auto__))
;
return ((function (switch__21452__auto__,c__21564__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21453__auto__ = null;
var figwheel$client$file_reloading$state_machine__21453__auto____0 = (function (){
var statearr_24754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24754[(0)] = figwheel$client$file_reloading$state_machine__21453__auto__);

(statearr_24754[(1)] = (1));

return statearr_24754;
});
var figwheel$client$file_reloading$state_machine__21453__auto____1 = (function (state_24736){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_24736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e24755){if((e24755 instanceof Object)){
var ex__21456__auto__ = e24755;
var statearr_24756_24768 = state_24736;
(statearr_24756_24768[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24769 = state_24736;
state_24736 = G__24769;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21453__auto__ = function(state_24736){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21453__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21453__auto____1.call(this,state_24736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21453__auto____0;
figwheel$client$file_reloading$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21453__auto____1;
return figwheel$client$file_reloading$state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto__))
})();
var state__21566__auto__ = (function (){var statearr_24757 = f__21565__auto__.call(null);
(statearr_24757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto__);

return statearr_24757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto__))
);

return c__21564__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24770,callback){
var map__24773 = p__24770;
var map__24773__$1 = ((((!((map__24773 == null)))?((((map__24773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24773):map__24773);
var file_msg = map__24773__$1;
var namespace = cljs.core.get.call(null,map__24773__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24773,map__24773__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24773,map__24773__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24775){
var map__24778 = p__24775;
var map__24778__$1 = ((((!((map__24778 == null)))?((((map__24778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24778):map__24778);
var file_msg = map__24778__$1;
var namespace = cljs.core.get.call(null,map__24778__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16759__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16759__auto__){
var or__16771__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
var or__16771__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16771__auto____$1)){
return or__16771__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16759__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24780,callback){
var map__24783 = p__24780;
var map__24783__$1 = ((((!((map__24783 == null)))?((((map__24783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24783):map__24783);
var file_msg = map__24783__$1;
var request_url = cljs.core.get.call(null,map__24783__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24783__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21564__auto___24871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto___24871,out){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto___24871,out){
return (function (state_24853){
var state_val_24854 = (state_24853[(1)]);
if((state_val_24854 === (1))){
var inst_24831 = cljs.core.nth.call(null,files,(0),null);
var inst_24832 = cljs.core.nthnext.call(null,files,(1));
var inst_24833 = files;
var state_24853__$1 = (function (){var statearr_24855 = state_24853;
(statearr_24855[(7)] = inst_24833);

(statearr_24855[(8)] = inst_24831);

(statearr_24855[(9)] = inst_24832);

return statearr_24855;
})();
var statearr_24856_24872 = state_24853__$1;
(statearr_24856_24872[(2)] = null);

(statearr_24856_24872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (2))){
var inst_24833 = (state_24853[(7)]);
var inst_24836 = (state_24853[(10)]);
var inst_24836__$1 = cljs.core.nth.call(null,inst_24833,(0),null);
var inst_24837 = cljs.core.nthnext.call(null,inst_24833,(1));
var inst_24838 = (inst_24836__$1 == null);
var inst_24839 = cljs.core.not.call(null,inst_24838);
var state_24853__$1 = (function (){var statearr_24857 = state_24853;
(statearr_24857[(10)] = inst_24836__$1);

(statearr_24857[(11)] = inst_24837);

return statearr_24857;
})();
if(inst_24839){
var statearr_24858_24873 = state_24853__$1;
(statearr_24858_24873[(1)] = (4));

} else {
var statearr_24859_24874 = state_24853__$1;
(statearr_24859_24874[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (3))){
var inst_24851 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24853__$1,inst_24851);
} else {
if((state_val_24854 === (4))){
var inst_24836 = (state_24853[(10)]);
var inst_24841 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24836);
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24853__$1,(7),inst_24841);
} else {
if((state_val_24854 === (5))){
var inst_24847 = cljs.core.async.close_BANG_.call(null,out);
var state_24853__$1 = state_24853;
var statearr_24860_24875 = state_24853__$1;
(statearr_24860_24875[(2)] = inst_24847);

(statearr_24860_24875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (6))){
var inst_24849 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24861_24876 = state_24853__$1;
(statearr_24861_24876[(2)] = inst_24849);

(statearr_24861_24876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (7))){
var inst_24837 = (state_24853[(11)]);
var inst_24843 = (state_24853[(2)]);
var inst_24844 = cljs.core.async.put_BANG_.call(null,out,inst_24843);
var inst_24833 = inst_24837;
var state_24853__$1 = (function (){var statearr_24862 = state_24853;
(statearr_24862[(12)] = inst_24844);

(statearr_24862[(7)] = inst_24833);

return statearr_24862;
})();
var statearr_24863_24877 = state_24853__$1;
(statearr_24863_24877[(2)] = null);

(statearr_24863_24877[(1)] = (2));


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
});})(c__21564__auto___24871,out))
;
return ((function (switch__21452__auto__,c__21564__auto___24871,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21453__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21453__auto____0 = (function (){
var statearr_24867 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24867[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21453__auto__);

(statearr_24867[(1)] = (1));

return statearr_24867;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21453__auto____1 = (function (state_24853){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_24853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e24868){if((e24868 instanceof Object)){
var ex__21456__auto__ = e24868;
var statearr_24869_24878 = state_24853;
(statearr_24869_24878[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24879 = state_24853;
state_24853 = G__24879;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21453__auto__ = function(state_24853){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21453__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21453__auto____1.call(this,state_24853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21453__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21453__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto___24871,out))
})();
var state__21566__auto__ = (function (){var statearr_24870 = f__21565__auto__.call(null);
(statearr_24870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___24871);

return statearr_24870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto___24871,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24880,opts){
var map__24884 = p__24880;
var map__24884__$1 = ((((!((map__24884 == null)))?((((map__24884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24884):map__24884);
var eval_body__$1 = cljs.core.get.call(null,map__24884__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24884__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16759__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16759__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16759__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24886){var e = e24886;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24887_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24887_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__24892){
var vec__24893 = p__24892;
var k = cljs.core.nth.call(null,vec__24893,(0),null);
var v = cljs.core.nth.call(null,vec__24893,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24894){
var vec__24895 = p__24894;
var k = cljs.core.nth.call(null,vec__24895,(0),null);
var v = cljs.core.nth.call(null,vec__24895,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24899,p__24900){
var map__25147 = p__24899;
var map__25147__$1 = ((((!((map__25147 == null)))?((((map__25147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25147):map__25147);
var opts = map__25147__$1;
var before_jsload = cljs.core.get.call(null,map__25147__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25147__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25147__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25148 = p__24900;
var map__25148__$1 = ((((!((map__25148 == null)))?((((map__25148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25148):map__25148);
var msg = map__25148__$1;
var files = cljs.core.get.call(null,map__25148__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25148__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25148__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21564__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25301){
var state_val_25302 = (state_25301[(1)]);
if((state_val_25302 === (7))){
var inst_25162 = (state_25301[(7)]);
var inst_25165 = (state_25301[(8)]);
var inst_25164 = (state_25301[(9)]);
var inst_25163 = (state_25301[(10)]);
var inst_25170 = cljs.core._nth.call(null,inst_25163,inst_25165);
var inst_25171 = figwheel.client.file_reloading.eval_body.call(null,inst_25170,opts);
var inst_25172 = (inst_25165 + (1));
var tmp25303 = inst_25162;
var tmp25304 = inst_25164;
var tmp25305 = inst_25163;
var inst_25162__$1 = tmp25303;
var inst_25163__$1 = tmp25305;
var inst_25164__$1 = tmp25304;
var inst_25165__$1 = inst_25172;
var state_25301__$1 = (function (){var statearr_25306 = state_25301;
(statearr_25306[(11)] = inst_25171);

(statearr_25306[(7)] = inst_25162__$1);

(statearr_25306[(8)] = inst_25165__$1);

(statearr_25306[(9)] = inst_25164__$1);

(statearr_25306[(10)] = inst_25163__$1);

return statearr_25306;
})();
var statearr_25307_25393 = state_25301__$1;
(statearr_25307_25393[(2)] = null);

(statearr_25307_25393[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (20))){
var inst_25205 = (state_25301[(12)]);
var inst_25213 = figwheel.client.file_reloading.sort_files.call(null,inst_25205);
var state_25301__$1 = state_25301;
var statearr_25308_25394 = state_25301__$1;
(statearr_25308_25394[(2)] = inst_25213);

(statearr_25308_25394[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (27))){
var state_25301__$1 = state_25301;
var statearr_25309_25395 = state_25301__$1;
(statearr_25309_25395[(2)] = null);

(statearr_25309_25395[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (1))){
var inst_25154 = (state_25301[(13)]);
var inst_25151 = before_jsload.call(null,files);
var inst_25152 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25153 = (function (){return ((function (inst_25154,inst_25151,inst_25152,state_val_25302,c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24896_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24896_SHARP_);
});
;})(inst_25154,inst_25151,inst_25152,state_val_25302,c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25154__$1 = cljs.core.filter.call(null,inst_25153,files);
var inst_25155 = cljs.core.not_empty.call(null,inst_25154__$1);
var state_25301__$1 = (function (){var statearr_25310 = state_25301;
(statearr_25310[(14)] = inst_25152);

(statearr_25310[(13)] = inst_25154__$1);

(statearr_25310[(15)] = inst_25151);

return statearr_25310;
})();
if(cljs.core.truth_(inst_25155)){
var statearr_25311_25396 = state_25301__$1;
(statearr_25311_25396[(1)] = (2));

} else {
var statearr_25312_25397 = state_25301__$1;
(statearr_25312_25397[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (24))){
var state_25301__$1 = state_25301;
var statearr_25313_25398 = state_25301__$1;
(statearr_25313_25398[(2)] = null);

(statearr_25313_25398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (39))){
var inst_25255 = (state_25301[(16)]);
var state_25301__$1 = state_25301;
var statearr_25314_25399 = state_25301__$1;
(statearr_25314_25399[(2)] = inst_25255);

(statearr_25314_25399[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (46))){
var inst_25296 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
var statearr_25315_25400 = state_25301__$1;
(statearr_25315_25400[(2)] = inst_25296);

(statearr_25315_25400[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (4))){
var inst_25199 = (state_25301[(2)]);
var inst_25200 = cljs.core.List.EMPTY;
var inst_25201 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25200);
var inst_25202 = (function (){return ((function (inst_25199,inst_25200,inst_25201,state_val_25302,c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24897_SHARP_){
var and__16759__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24897_SHARP_);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24897_SHARP_));
} else {
return and__16759__auto__;
}
});
;})(inst_25199,inst_25200,inst_25201,state_val_25302,c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25203 = cljs.core.filter.call(null,inst_25202,files);
var inst_25204 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25205 = cljs.core.concat.call(null,inst_25203,inst_25204);
var state_25301__$1 = (function (){var statearr_25316 = state_25301;
(statearr_25316[(17)] = inst_25199);

(statearr_25316[(18)] = inst_25201);

(statearr_25316[(12)] = inst_25205);

return statearr_25316;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25317_25401 = state_25301__$1;
(statearr_25317_25401[(1)] = (16));

} else {
var statearr_25318_25402 = state_25301__$1;
(statearr_25318_25402[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (15))){
var inst_25189 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
var statearr_25319_25403 = state_25301__$1;
(statearr_25319_25403[(2)] = inst_25189);

(statearr_25319_25403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (21))){
var inst_25215 = (state_25301[(19)]);
var inst_25215__$1 = (state_25301[(2)]);
var inst_25216 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25215__$1);
var state_25301__$1 = (function (){var statearr_25320 = state_25301;
(statearr_25320[(19)] = inst_25215__$1);

return statearr_25320;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25301__$1,(22),inst_25216);
} else {
if((state_val_25302 === (31))){
var inst_25299 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25301__$1,inst_25299);
} else {
if((state_val_25302 === (32))){
var inst_25255 = (state_25301[(16)]);
var inst_25260 = inst_25255.cljs$lang$protocol_mask$partition0$;
var inst_25261 = (inst_25260 & (64));
var inst_25262 = inst_25255.cljs$core$ISeq$;
var inst_25263 = (inst_25261) || (inst_25262);
var state_25301__$1 = state_25301;
if(cljs.core.truth_(inst_25263)){
var statearr_25321_25404 = state_25301__$1;
(statearr_25321_25404[(1)] = (35));

} else {
var statearr_25322_25405 = state_25301__$1;
(statearr_25322_25405[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (40))){
var inst_25276 = (state_25301[(20)]);
var inst_25275 = (state_25301[(2)]);
var inst_25276__$1 = cljs.core.get.call(null,inst_25275,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25277 = cljs.core.get.call(null,inst_25275,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25278 = cljs.core.not_empty.call(null,inst_25276__$1);
var state_25301__$1 = (function (){var statearr_25323 = state_25301;
(statearr_25323[(20)] = inst_25276__$1);

(statearr_25323[(21)] = inst_25277);

return statearr_25323;
})();
if(cljs.core.truth_(inst_25278)){
var statearr_25324_25406 = state_25301__$1;
(statearr_25324_25406[(1)] = (41));

} else {
var statearr_25325_25407 = state_25301__$1;
(statearr_25325_25407[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (33))){
var state_25301__$1 = state_25301;
var statearr_25326_25408 = state_25301__$1;
(statearr_25326_25408[(2)] = false);

(statearr_25326_25408[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (13))){
var inst_25175 = (state_25301[(22)]);
var inst_25179 = cljs.core.chunk_first.call(null,inst_25175);
var inst_25180 = cljs.core.chunk_rest.call(null,inst_25175);
var inst_25181 = cljs.core.count.call(null,inst_25179);
var inst_25162 = inst_25180;
var inst_25163 = inst_25179;
var inst_25164 = inst_25181;
var inst_25165 = (0);
var state_25301__$1 = (function (){var statearr_25327 = state_25301;
(statearr_25327[(7)] = inst_25162);

(statearr_25327[(8)] = inst_25165);

(statearr_25327[(9)] = inst_25164);

(statearr_25327[(10)] = inst_25163);

return statearr_25327;
})();
var statearr_25328_25409 = state_25301__$1;
(statearr_25328_25409[(2)] = null);

(statearr_25328_25409[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (22))){
var inst_25219 = (state_25301[(23)]);
var inst_25218 = (state_25301[(24)]);
var inst_25223 = (state_25301[(25)]);
var inst_25215 = (state_25301[(19)]);
var inst_25218__$1 = (state_25301[(2)]);
var inst_25219__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25218__$1);
var inst_25220 = (function (){var all_files = inst_25215;
var res_SINGLEQUOTE_ = inst_25218__$1;
var res = inst_25219__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25219,inst_25218,inst_25223,inst_25215,inst_25218__$1,inst_25219__$1,state_val_25302,c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24898_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24898_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25219,inst_25218,inst_25223,inst_25215,inst_25218__$1,inst_25219__$1,state_val_25302,c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25221 = cljs.core.filter.call(null,inst_25220,inst_25218__$1);
var inst_25222 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25223__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25222);
var inst_25224 = cljs.core.not_empty.call(null,inst_25223__$1);
var state_25301__$1 = (function (){var statearr_25329 = state_25301;
(statearr_25329[(26)] = inst_25221);

(statearr_25329[(23)] = inst_25219__$1);

(statearr_25329[(24)] = inst_25218__$1);

(statearr_25329[(25)] = inst_25223__$1);

return statearr_25329;
})();
if(cljs.core.truth_(inst_25224)){
var statearr_25330_25410 = state_25301__$1;
(statearr_25330_25410[(1)] = (23));

} else {
var statearr_25331_25411 = state_25301__$1;
(statearr_25331_25411[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (36))){
var state_25301__$1 = state_25301;
var statearr_25332_25412 = state_25301__$1;
(statearr_25332_25412[(2)] = false);

(statearr_25332_25412[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (41))){
var inst_25276 = (state_25301[(20)]);
var inst_25280 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25281 = cljs.core.map.call(null,inst_25280,inst_25276);
var inst_25282 = cljs.core.pr_str.call(null,inst_25281);
var inst_25283 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25282)].join('');
var inst_25284 = figwheel.client.utils.log.call(null,inst_25283);
var state_25301__$1 = state_25301;
var statearr_25333_25413 = state_25301__$1;
(statearr_25333_25413[(2)] = inst_25284);

(statearr_25333_25413[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (43))){
var inst_25277 = (state_25301[(21)]);
var inst_25287 = (state_25301[(2)]);
var inst_25288 = cljs.core.not_empty.call(null,inst_25277);
var state_25301__$1 = (function (){var statearr_25334 = state_25301;
(statearr_25334[(27)] = inst_25287);

return statearr_25334;
})();
if(cljs.core.truth_(inst_25288)){
var statearr_25335_25414 = state_25301__$1;
(statearr_25335_25414[(1)] = (44));

} else {
var statearr_25336_25415 = state_25301__$1;
(statearr_25336_25415[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (29))){
var inst_25221 = (state_25301[(26)]);
var inst_25255 = (state_25301[(16)]);
var inst_25219 = (state_25301[(23)]);
var inst_25218 = (state_25301[(24)]);
var inst_25223 = (state_25301[(25)]);
var inst_25215 = (state_25301[(19)]);
var inst_25251 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25254 = (function (){var all_files = inst_25215;
var res_SINGLEQUOTE_ = inst_25218;
var res = inst_25219;
var files_not_loaded = inst_25221;
var dependencies_that_loaded = inst_25223;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25221,inst_25255,inst_25219,inst_25218,inst_25223,inst_25215,inst_25251,state_val_25302,c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25253){
var map__25337 = p__25253;
var map__25337__$1 = ((((!((map__25337 == null)))?((((map__25337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25337):map__25337);
var namespace = cljs.core.get.call(null,map__25337__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25221,inst_25255,inst_25219,inst_25218,inst_25223,inst_25215,inst_25251,state_val_25302,c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25255__$1 = cljs.core.group_by.call(null,inst_25254,inst_25221);
var inst_25257 = (inst_25255__$1 == null);
var inst_25258 = cljs.core.not.call(null,inst_25257);
var state_25301__$1 = (function (){var statearr_25339 = state_25301;
(statearr_25339[(16)] = inst_25255__$1);

(statearr_25339[(28)] = inst_25251);

return statearr_25339;
})();
if(inst_25258){
var statearr_25340_25416 = state_25301__$1;
(statearr_25340_25416[(1)] = (32));

} else {
var statearr_25341_25417 = state_25301__$1;
(statearr_25341_25417[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (44))){
var inst_25277 = (state_25301[(21)]);
var inst_25290 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25277);
var inst_25291 = cljs.core.pr_str.call(null,inst_25290);
var inst_25292 = [cljs.core.str("not required: "),cljs.core.str(inst_25291)].join('');
var inst_25293 = figwheel.client.utils.log.call(null,inst_25292);
var state_25301__$1 = state_25301;
var statearr_25342_25418 = state_25301__$1;
(statearr_25342_25418[(2)] = inst_25293);

(statearr_25342_25418[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (6))){
var inst_25196 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
var statearr_25343_25419 = state_25301__$1;
(statearr_25343_25419[(2)] = inst_25196);

(statearr_25343_25419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (28))){
var inst_25221 = (state_25301[(26)]);
var inst_25248 = (state_25301[(2)]);
var inst_25249 = cljs.core.not_empty.call(null,inst_25221);
var state_25301__$1 = (function (){var statearr_25344 = state_25301;
(statearr_25344[(29)] = inst_25248);

return statearr_25344;
})();
if(cljs.core.truth_(inst_25249)){
var statearr_25345_25420 = state_25301__$1;
(statearr_25345_25420[(1)] = (29));

} else {
var statearr_25346_25421 = state_25301__$1;
(statearr_25346_25421[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (25))){
var inst_25219 = (state_25301[(23)]);
var inst_25235 = (state_25301[(2)]);
var inst_25236 = cljs.core.not_empty.call(null,inst_25219);
var state_25301__$1 = (function (){var statearr_25347 = state_25301;
(statearr_25347[(30)] = inst_25235);

return statearr_25347;
})();
if(cljs.core.truth_(inst_25236)){
var statearr_25348_25422 = state_25301__$1;
(statearr_25348_25422[(1)] = (26));

} else {
var statearr_25349_25423 = state_25301__$1;
(statearr_25349_25423[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (34))){
var inst_25270 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
if(cljs.core.truth_(inst_25270)){
var statearr_25350_25424 = state_25301__$1;
(statearr_25350_25424[(1)] = (38));

} else {
var statearr_25351_25425 = state_25301__$1;
(statearr_25351_25425[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (17))){
var state_25301__$1 = state_25301;
var statearr_25352_25426 = state_25301__$1;
(statearr_25352_25426[(2)] = recompile_dependents);

(statearr_25352_25426[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (3))){
var state_25301__$1 = state_25301;
var statearr_25353_25427 = state_25301__$1;
(statearr_25353_25427[(2)] = null);

(statearr_25353_25427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (12))){
var inst_25192 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
var statearr_25354_25428 = state_25301__$1;
(statearr_25354_25428[(2)] = inst_25192);

(statearr_25354_25428[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (2))){
var inst_25154 = (state_25301[(13)]);
var inst_25161 = cljs.core.seq.call(null,inst_25154);
var inst_25162 = inst_25161;
var inst_25163 = null;
var inst_25164 = (0);
var inst_25165 = (0);
var state_25301__$1 = (function (){var statearr_25355 = state_25301;
(statearr_25355[(7)] = inst_25162);

(statearr_25355[(8)] = inst_25165);

(statearr_25355[(9)] = inst_25164);

(statearr_25355[(10)] = inst_25163);

return statearr_25355;
})();
var statearr_25356_25429 = state_25301__$1;
(statearr_25356_25429[(2)] = null);

(statearr_25356_25429[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (23))){
var inst_25221 = (state_25301[(26)]);
var inst_25219 = (state_25301[(23)]);
var inst_25218 = (state_25301[(24)]);
var inst_25223 = (state_25301[(25)]);
var inst_25215 = (state_25301[(19)]);
var inst_25226 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25228 = (function (){var all_files = inst_25215;
var res_SINGLEQUOTE_ = inst_25218;
var res = inst_25219;
var files_not_loaded = inst_25221;
var dependencies_that_loaded = inst_25223;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25221,inst_25219,inst_25218,inst_25223,inst_25215,inst_25226,state_val_25302,c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25227){
var map__25357 = p__25227;
var map__25357__$1 = ((((!((map__25357 == null)))?((((map__25357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25357):map__25357);
var request_url = cljs.core.get.call(null,map__25357__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25221,inst_25219,inst_25218,inst_25223,inst_25215,inst_25226,state_val_25302,c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25229 = cljs.core.reverse.call(null,inst_25223);
var inst_25230 = cljs.core.map.call(null,inst_25228,inst_25229);
var inst_25231 = cljs.core.pr_str.call(null,inst_25230);
var inst_25232 = figwheel.client.utils.log.call(null,inst_25231);
var state_25301__$1 = (function (){var statearr_25359 = state_25301;
(statearr_25359[(31)] = inst_25226);

return statearr_25359;
})();
var statearr_25360_25430 = state_25301__$1;
(statearr_25360_25430[(2)] = inst_25232);

(statearr_25360_25430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (35))){
var state_25301__$1 = state_25301;
var statearr_25361_25431 = state_25301__$1;
(statearr_25361_25431[(2)] = true);

(statearr_25361_25431[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (19))){
var inst_25205 = (state_25301[(12)]);
var inst_25211 = figwheel.client.file_reloading.expand_files.call(null,inst_25205);
var state_25301__$1 = state_25301;
var statearr_25362_25432 = state_25301__$1;
(statearr_25362_25432[(2)] = inst_25211);

(statearr_25362_25432[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (11))){
var state_25301__$1 = state_25301;
var statearr_25363_25433 = state_25301__$1;
(statearr_25363_25433[(2)] = null);

(statearr_25363_25433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (9))){
var inst_25194 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
var statearr_25364_25434 = state_25301__$1;
(statearr_25364_25434[(2)] = inst_25194);

(statearr_25364_25434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (5))){
var inst_25165 = (state_25301[(8)]);
var inst_25164 = (state_25301[(9)]);
var inst_25167 = (inst_25165 < inst_25164);
var inst_25168 = inst_25167;
var state_25301__$1 = state_25301;
if(cljs.core.truth_(inst_25168)){
var statearr_25365_25435 = state_25301__$1;
(statearr_25365_25435[(1)] = (7));

} else {
var statearr_25366_25436 = state_25301__$1;
(statearr_25366_25436[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (14))){
var inst_25175 = (state_25301[(22)]);
var inst_25184 = cljs.core.first.call(null,inst_25175);
var inst_25185 = figwheel.client.file_reloading.eval_body.call(null,inst_25184,opts);
var inst_25186 = cljs.core.next.call(null,inst_25175);
var inst_25162 = inst_25186;
var inst_25163 = null;
var inst_25164 = (0);
var inst_25165 = (0);
var state_25301__$1 = (function (){var statearr_25367 = state_25301;
(statearr_25367[(7)] = inst_25162);

(statearr_25367[(8)] = inst_25165);

(statearr_25367[(9)] = inst_25164);

(statearr_25367[(32)] = inst_25185);

(statearr_25367[(10)] = inst_25163);

return statearr_25367;
})();
var statearr_25368_25437 = state_25301__$1;
(statearr_25368_25437[(2)] = null);

(statearr_25368_25437[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (45))){
var state_25301__$1 = state_25301;
var statearr_25369_25438 = state_25301__$1;
(statearr_25369_25438[(2)] = null);

(statearr_25369_25438[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (26))){
var inst_25221 = (state_25301[(26)]);
var inst_25219 = (state_25301[(23)]);
var inst_25218 = (state_25301[(24)]);
var inst_25223 = (state_25301[(25)]);
var inst_25215 = (state_25301[(19)]);
var inst_25238 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25240 = (function (){var all_files = inst_25215;
var res_SINGLEQUOTE_ = inst_25218;
var res = inst_25219;
var files_not_loaded = inst_25221;
var dependencies_that_loaded = inst_25223;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25221,inst_25219,inst_25218,inst_25223,inst_25215,inst_25238,state_val_25302,c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25239){
var map__25370 = p__25239;
var map__25370__$1 = ((((!((map__25370 == null)))?((((map__25370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25370):map__25370);
var namespace = cljs.core.get.call(null,map__25370__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25370__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25221,inst_25219,inst_25218,inst_25223,inst_25215,inst_25238,state_val_25302,c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25241 = cljs.core.map.call(null,inst_25240,inst_25219);
var inst_25242 = cljs.core.pr_str.call(null,inst_25241);
var inst_25243 = figwheel.client.utils.log.call(null,inst_25242);
var inst_25244 = (function (){var all_files = inst_25215;
var res_SINGLEQUOTE_ = inst_25218;
var res = inst_25219;
var files_not_loaded = inst_25221;
var dependencies_that_loaded = inst_25223;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25221,inst_25219,inst_25218,inst_25223,inst_25215,inst_25238,inst_25240,inst_25241,inst_25242,inst_25243,state_val_25302,c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25221,inst_25219,inst_25218,inst_25223,inst_25215,inst_25238,inst_25240,inst_25241,inst_25242,inst_25243,state_val_25302,c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25245 = setTimeout(inst_25244,(10));
var state_25301__$1 = (function (){var statearr_25372 = state_25301;
(statearr_25372[(33)] = inst_25238);

(statearr_25372[(34)] = inst_25243);

return statearr_25372;
})();
var statearr_25373_25439 = state_25301__$1;
(statearr_25373_25439[(2)] = inst_25245);

(statearr_25373_25439[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (16))){
var state_25301__$1 = state_25301;
var statearr_25374_25440 = state_25301__$1;
(statearr_25374_25440[(2)] = reload_dependents);

(statearr_25374_25440[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (38))){
var inst_25255 = (state_25301[(16)]);
var inst_25272 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25255);
var state_25301__$1 = state_25301;
var statearr_25375_25441 = state_25301__$1;
(statearr_25375_25441[(2)] = inst_25272);

(statearr_25375_25441[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (30))){
var state_25301__$1 = state_25301;
var statearr_25376_25442 = state_25301__$1;
(statearr_25376_25442[(2)] = null);

(statearr_25376_25442[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (10))){
var inst_25175 = (state_25301[(22)]);
var inst_25177 = cljs.core.chunked_seq_QMARK_.call(null,inst_25175);
var state_25301__$1 = state_25301;
if(inst_25177){
var statearr_25377_25443 = state_25301__$1;
(statearr_25377_25443[(1)] = (13));

} else {
var statearr_25378_25444 = state_25301__$1;
(statearr_25378_25444[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (18))){
var inst_25209 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
if(cljs.core.truth_(inst_25209)){
var statearr_25379_25445 = state_25301__$1;
(statearr_25379_25445[(1)] = (19));

} else {
var statearr_25380_25446 = state_25301__$1;
(statearr_25380_25446[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (42))){
var state_25301__$1 = state_25301;
var statearr_25381_25447 = state_25301__$1;
(statearr_25381_25447[(2)] = null);

(statearr_25381_25447[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (37))){
var inst_25267 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
var statearr_25382_25448 = state_25301__$1;
(statearr_25382_25448[(2)] = inst_25267);

(statearr_25382_25448[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (8))){
var inst_25162 = (state_25301[(7)]);
var inst_25175 = (state_25301[(22)]);
var inst_25175__$1 = cljs.core.seq.call(null,inst_25162);
var state_25301__$1 = (function (){var statearr_25383 = state_25301;
(statearr_25383[(22)] = inst_25175__$1);

return statearr_25383;
})();
if(inst_25175__$1){
var statearr_25384_25449 = state_25301__$1;
(statearr_25384_25449[(1)] = (10));

} else {
var statearr_25385_25450 = state_25301__$1;
(statearr_25385_25450[(1)] = (11));

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
});})(c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21452__auto__,c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21453__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21453__auto____0 = (function (){
var statearr_25389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25389[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21453__auto__);

(statearr_25389[(1)] = (1));

return statearr_25389;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21453__auto____1 = (function (state_25301){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_25301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e25390){if((e25390 instanceof Object)){
var ex__21456__auto__ = e25390;
var statearr_25391_25451 = state_25301;
(statearr_25391_25451[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25452 = state_25301;
state_25301 = G__25452;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21453__auto__ = function(state_25301){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21453__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21453__auto____1.call(this,state_25301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21453__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21453__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21566__auto__ = (function (){var statearr_25392 = f__21565__auto__.call(null);
(statearr_25392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto__);

return statearr_25392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto__,map__25147,map__25147__$1,opts,before_jsload,on_jsload,reload_dependents,map__25148,map__25148__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21564__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25455,link){
var map__25458 = p__25455;
var map__25458__$1 = ((((!((map__25458 == null)))?((((map__25458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25458):map__25458);
var file = cljs.core.get.call(null,map__25458__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25458,map__25458__$1,file){
return (function (p1__25453_SHARP_,p2__25454_SHARP_){
if(cljs.core._EQ_.call(null,p1__25453_SHARP_,p2__25454_SHARP_)){
return p1__25453_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25458,map__25458__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25464){
var map__25465 = p__25464;
var map__25465__$1 = ((((!((map__25465 == null)))?((((map__25465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25465):map__25465);
var match_length = cljs.core.get.call(null,map__25465__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25465__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25460_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25460_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25467 = [];
var len__17829__auto___25470 = arguments.length;
var i__17830__auto___25471 = (0);
while(true){
if((i__17830__auto___25471 < len__17829__auto___25470)){
args25467.push((arguments[i__17830__auto___25471]));

var G__25472 = (i__17830__auto___25471 + (1));
i__17830__auto___25471 = G__25472;
continue;
} else {
}
break;
}

var G__25469 = args25467.length;
switch (G__25469) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25467.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25474_SHARP_,p2__25475_SHARP_){
return cljs.core.assoc.call(null,p1__25474_SHARP_,cljs.core.get.call(null,p2__25475_SHARP_,key),p2__25475_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25476){
var map__25479 = p__25476;
var map__25479__$1 = ((((!((map__25479 == null)))?((((map__25479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25479):map__25479);
var f_data = map__25479__$1;
var file = cljs.core.get.call(null,map__25479__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25481,files_msg){
var map__25488 = p__25481;
var map__25488__$1 = ((((!((map__25488 == null)))?((((map__25488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25488):map__25488);
var opts = map__25488__$1;
var on_cssload = cljs.core.get.call(null,map__25488__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25490_25494 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25491_25495 = null;
var count__25492_25496 = (0);
var i__25493_25497 = (0);
while(true){
if((i__25493_25497 < count__25492_25496)){
var f_25498 = cljs.core._nth.call(null,chunk__25491_25495,i__25493_25497);
figwheel.client.file_reloading.reload_css_file.call(null,f_25498);

var G__25499 = seq__25490_25494;
var G__25500 = chunk__25491_25495;
var G__25501 = count__25492_25496;
var G__25502 = (i__25493_25497 + (1));
seq__25490_25494 = G__25499;
chunk__25491_25495 = G__25500;
count__25492_25496 = G__25501;
i__25493_25497 = G__25502;
continue;
} else {
var temp__4425__auto___25503 = cljs.core.seq.call(null,seq__25490_25494);
if(temp__4425__auto___25503){
var seq__25490_25504__$1 = temp__4425__auto___25503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25490_25504__$1)){
var c__17574__auto___25505 = cljs.core.chunk_first.call(null,seq__25490_25504__$1);
var G__25506 = cljs.core.chunk_rest.call(null,seq__25490_25504__$1);
var G__25507 = c__17574__auto___25505;
var G__25508 = cljs.core.count.call(null,c__17574__auto___25505);
var G__25509 = (0);
seq__25490_25494 = G__25506;
chunk__25491_25495 = G__25507;
count__25492_25496 = G__25508;
i__25493_25497 = G__25509;
continue;
} else {
var f_25510 = cljs.core.first.call(null,seq__25490_25504__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25510);

var G__25511 = cljs.core.next.call(null,seq__25490_25504__$1);
var G__25512 = null;
var G__25513 = (0);
var G__25514 = (0);
seq__25490_25494 = G__25511;
chunk__25491_25495 = G__25512;
count__25492_25496 = G__25513;
i__25493_25497 = G__25514;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25488,map__25488__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25488,map__25488__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map