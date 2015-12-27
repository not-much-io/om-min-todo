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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__48609_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__48609_SHARP_));
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
var seq__48614 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__48615 = null;
var count__48616 = (0);
var i__48617 = (0);
while(true){
if((i__48617 < count__48616)){
var n = cljs.core._nth.call(null,chunk__48615,i__48617);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48618 = seq__48614;
var G__48619 = chunk__48615;
var G__48620 = count__48616;
var G__48621 = (i__48617 + (1));
seq__48614 = G__48618;
chunk__48615 = G__48619;
count__48616 = G__48620;
i__48617 = G__48621;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__48614);
if(temp__4425__auto__){
var seq__48614__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48614__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__48614__$1);
var G__48622 = cljs.core.chunk_rest.call(null,seq__48614__$1);
var G__48623 = c__17574__auto__;
var G__48624 = cljs.core.count.call(null,c__17574__auto__);
var G__48625 = (0);
seq__48614 = G__48622;
chunk__48615 = G__48623;
count__48616 = G__48624;
i__48617 = G__48625;
continue;
} else {
var n = cljs.core.first.call(null,seq__48614__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48626 = cljs.core.next.call(null,seq__48614__$1);
var G__48627 = null;
var G__48628 = (0);
var G__48629 = (0);
seq__48614 = G__48626;
chunk__48615 = G__48627;
count__48616 = G__48628;
i__48617 = G__48629;
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

var seq__48668_48675 = cljs.core.seq.call(null,deps);
var chunk__48669_48676 = null;
var count__48670_48677 = (0);
var i__48671_48678 = (0);
while(true){
if((i__48671_48678 < count__48670_48677)){
var dep_48679 = cljs.core._nth.call(null,chunk__48669_48676,i__48671_48678);
topo_sort_helper_STAR_.call(null,dep_48679,(depth + (1)),state);

var G__48680 = seq__48668_48675;
var G__48681 = chunk__48669_48676;
var G__48682 = count__48670_48677;
var G__48683 = (i__48671_48678 + (1));
seq__48668_48675 = G__48680;
chunk__48669_48676 = G__48681;
count__48670_48677 = G__48682;
i__48671_48678 = G__48683;
continue;
} else {
var temp__4425__auto___48684 = cljs.core.seq.call(null,seq__48668_48675);
if(temp__4425__auto___48684){
var seq__48668_48685__$1 = temp__4425__auto___48684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48668_48685__$1)){
var c__17574__auto___48686 = cljs.core.chunk_first.call(null,seq__48668_48685__$1);
var G__48687 = cljs.core.chunk_rest.call(null,seq__48668_48685__$1);
var G__48688 = c__17574__auto___48686;
var G__48689 = cljs.core.count.call(null,c__17574__auto___48686);
var G__48690 = (0);
seq__48668_48675 = G__48687;
chunk__48669_48676 = G__48688;
count__48670_48677 = G__48689;
i__48671_48678 = G__48690;
continue;
} else {
var dep_48691 = cljs.core.first.call(null,seq__48668_48685__$1);
topo_sort_helper_STAR_.call(null,dep_48691,(depth + (1)),state);

var G__48692 = cljs.core.next.call(null,seq__48668_48685__$1);
var G__48693 = null;
var G__48694 = (0);
var G__48695 = (0);
seq__48668_48675 = G__48692;
chunk__48669_48676 = G__48693;
count__48670_48677 = G__48694;
i__48671_48678 = G__48695;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__48672){
var vec__48674 = p__48672;
var x = cljs.core.nth.call(null,vec__48674,(0),null);
var xs = cljs.core.nthnext.call(null,vec__48674,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__48674,x,xs,get_deps__$1){
return (function (p1__48630_SHARP_){
return clojure.set.difference.call(null,p1__48630_SHARP_,x);
});})(vec__48674,x,xs,get_deps__$1))
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
var seq__48708 = cljs.core.seq.call(null,provides);
var chunk__48709 = null;
var count__48710 = (0);
var i__48711 = (0);
while(true){
if((i__48711 < count__48710)){
var prov = cljs.core._nth.call(null,chunk__48709,i__48711);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48712_48720 = cljs.core.seq.call(null,requires);
var chunk__48713_48721 = null;
var count__48714_48722 = (0);
var i__48715_48723 = (0);
while(true){
if((i__48715_48723 < count__48714_48722)){
var req_48724 = cljs.core._nth.call(null,chunk__48713_48721,i__48715_48723);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48724,prov);

var G__48725 = seq__48712_48720;
var G__48726 = chunk__48713_48721;
var G__48727 = count__48714_48722;
var G__48728 = (i__48715_48723 + (1));
seq__48712_48720 = G__48725;
chunk__48713_48721 = G__48726;
count__48714_48722 = G__48727;
i__48715_48723 = G__48728;
continue;
} else {
var temp__4425__auto___48729 = cljs.core.seq.call(null,seq__48712_48720);
if(temp__4425__auto___48729){
var seq__48712_48730__$1 = temp__4425__auto___48729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48712_48730__$1)){
var c__17574__auto___48731 = cljs.core.chunk_first.call(null,seq__48712_48730__$1);
var G__48732 = cljs.core.chunk_rest.call(null,seq__48712_48730__$1);
var G__48733 = c__17574__auto___48731;
var G__48734 = cljs.core.count.call(null,c__17574__auto___48731);
var G__48735 = (0);
seq__48712_48720 = G__48732;
chunk__48713_48721 = G__48733;
count__48714_48722 = G__48734;
i__48715_48723 = G__48735;
continue;
} else {
var req_48736 = cljs.core.first.call(null,seq__48712_48730__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48736,prov);

var G__48737 = cljs.core.next.call(null,seq__48712_48730__$1);
var G__48738 = null;
var G__48739 = (0);
var G__48740 = (0);
seq__48712_48720 = G__48737;
chunk__48713_48721 = G__48738;
count__48714_48722 = G__48739;
i__48715_48723 = G__48740;
continue;
}
} else {
}
}
break;
}

var G__48741 = seq__48708;
var G__48742 = chunk__48709;
var G__48743 = count__48710;
var G__48744 = (i__48711 + (1));
seq__48708 = G__48741;
chunk__48709 = G__48742;
count__48710 = G__48743;
i__48711 = G__48744;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__48708);
if(temp__4425__auto__){
var seq__48708__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48708__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__48708__$1);
var G__48745 = cljs.core.chunk_rest.call(null,seq__48708__$1);
var G__48746 = c__17574__auto__;
var G__48747 = cljs.core.count.call(null,c__17574__auto__);
var G__48748 = (0);
seq__48708 = G__48745;
chunk__48709 = G__48746;
count__48710 = G__48747;
i__48711 = G__48748;
continue;
} else {
var prov = cljs.core.first.call(null,seq__48708__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48716_48749 = cljs.core.seq.call(null,requires);
var chunk__48717_48750 = null;
var count__48718_48751 = (0);
var i__48719_48752 = (0);
while(true){
if((i__48719_48752 < count__48718_48751)){
var req_48753 = cljs.core._nth.call(null,chunk__48717_48750,i__48719_48752);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48753,prov);

var G__48754 = seq__48716_48749;
var G__48755 = chunk__48717_48750;
var G__48756 = count__48718_48751;
var G__48757 = (i__48719_48752 + (1));
seq__48716_48749 = G__48754;
chunk__48717_48750 = G__48755;
count__48718_48751 = G__48756;
i__48719_48752 = G__48757;
continue;
} else {
var temp__4425__auto___48758__$1 = cljs.core.seq.call(null,seq__48716_48749);
if(temp__4425__auto___48758__$1){
var seq__48716_48759__$1 = temp__4425__auto___48758__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48716_48759__$1)){
var c__17574__auto___48760 = cljs.core.chunk_first.call(null,seq__48716_48759__$1);
var G__48761 = cljs.core.chunk_rest.call(null,seq__48716_48759__$1);
var G__48762 = c__17574__auto___48760;
var G__48763 = cljs.core.count.call(null,c__17574__auto___48760);
var G__48764 = (0);
seq__48716_48749 = G__48761;
chunk__48717_48750 = G__48762;
count__48718_48751 = G__48763;
i__48719_48752 = G__48764;
continue;
} else {
var req_48765 = cljs.core.first.call(null,seq__48716_48759__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48765,prov);

var G__48766 = cljs.core.next.call(null,seq__48716_48759__$1);
var G__48767 = null;
var G__48768 = (0);
var G__48769 = (0);
seq__48716_48749 = G__48766;
chunk__48717_48750 = G__48767;
count__48718_48751 = G__48768;
i__48719_48752 = G__48769;
continue;
}
} else {
}
}
break;
}

var G__48770 = cljs.core.next.call(null,seq__48708__$1);
var G__48771 = null;
var G__48772 = (0);
var G__48773 = (0);
seq__48708 = G__48770;
chunk__48709 = G__48771;
count__48710 = G__48772;
i__48711 = G__48773;
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
var seq__48778_48782 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__48779_48783 = null;
var count__48780_48784 = (0);
var i__48781_48785 = (0);
while(true){
if((i__48781_48785 < count__48780_48784)){
var ns_48786 = cljs.core._nth.call(null,chunk__48779_48783,i__48781_48785);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48786);

var G__48787 = seq__48778_48782;
var G__48788 = chunk__48779_48783;
var G__48789 = count__48780_48784;
var G__48790 = (i__48781_48785 + (1));
seq__48778_48782 = G__48787;
chunk__48779_48783 = G__48788;
count__48780_48784 = G__48789;
i__48781_48785 = G__48790;
continue;
} else {
var temp__4425__auto___48791 = cljs.core.seq.call(null,seq__48778_48782);
if(temp__4425__auto___48791){
var seq__48778_48792__$1 = temp__4425__auto___48791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48778_48792__$1)){
var c__17574__auto___48793 = cljs.core.chunk_first.call(null,seq__48778_48792__$1);
var G__48794 = cljs.core.chunk_rest.call(null,seq__48778_48792__$1);
var G__48795 = c__17574__auto___48793;
var G__48796 = cljs.core.count.call(null,c__17574__auto___48793);
var G__48797 = (0);
seq__48778_48782 = G__48794;
chunk__48779_48783 = G__48795;
count__48780_48784 = G__48796;
i__48781_48785 = G__48797;
continue;
} else {
var ns_48798 = cljs.core.first.call(null,seq__48778_48792__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48798);

var G__48799 = cljs.core.next.call(null,seq__48778_48792__$1);
var G__48800 = null;
var G__48801 = (0);
var G__48802 = (0);
seq__48778_48782 = G__48799;
chunk__48779_48783 = G__48800;
count__48780_48784 = G__48801;
i__48781_48785 = G__48802;
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
var G__48803__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__48803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48804__i = 0, G__48804__a = new Array(arguments.length -  0);
while (G__48804__i < G__48804__a.length) {G__48804__a[G__48804__i] = arguments[G__48804__i + 0]; ++G__48804__i;}
  args = new cljs.core.IndexedSeq(G__48804__a,0);
} 
return G__48803__delegate.call(this,args);};
G__48803.cljs$lang$maxFixedArity = 0;
G__48803.cljs$lang$applyTo = (function (arglist__48805){
var args = cljs.core.seq(arglist__48805);
return G__48803__delegate(args);
});
G__48803.cljs$core$IFn$_invoke$arity$variadic = G__48803__delegate;
return G__48803;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__48807 = cljs.core._EQ_;
var expr__48808 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__48807.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__48808))){
var path_parts = ((function (pred__48807,expr__48808){
return (function (p1__48806_SHARP_){
return clojure.string.split.call(null,p1__48806_SHARP_,/[\/\\]/);
});})(pred__48807,expr__48808))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__48807,expr__48808){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e48810){if((e48810 instanceof Error)){
var e = e48810;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e48810;

}
}})());
});
;})(path_parts,sep,root,pred__48807,expr__48808))
} else {
if(cljs.core.truth_(pred__48807.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__48808))){
return ((function (pred__48807,expr__48808){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__48807,expr__48808){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__48807,expr__48808))
);

return deferred.addErrback(((function (deferred,pred__48807,expr__48808){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__48807,expr__48808))
);
});
;})(pred__48807,expr__48808))
} else {
return ((function (pred__48807,expr__48808){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__48807,expr__48808))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__48811,callback){
var map__48814 = p__48811;
var map__48814__$1 = ((((!((map__48814 == null)))?((((map__48814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48814):map__48814);
var file_msg = map__48814__$1;
var request_url = cljs.core.get.call(null,map__48814__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__48814,map__48814__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__48814,map__48814__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__){
return (function (state_48838){
var state_val_48839 = (state_48838[(1)]);
if((state_val_48839 === (7))){
var inst_48834 = (state_48838[(2)]);
var state_48838__$1 = state_48838;
var statearr_48840_48860 = state_48838__$1;
(statearr_48840_48860[(2)] = inst_48834);

(statearr_48840_48860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48839 === (1))){
var state_48838__$1 = state_48838;
var statearr_48841_48861 = state_48838__$1;
(statearr_48841_48861[(2)] = null);

(statearr_48841_48861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48839 === (4))){
var inst_48818 = (state_48838[(7)]);
var inst_48818__$1 = (state_48838[(2)]);
var state_48838__$1 = (function (){var statearr_48842 = state_48838;
(statearr_48842[(7)] = inst_48818__$1);

return statearr_48842;
})();
if(cljs.core.truth_(inst_48818__$1)){
var statearr_48843_48862 = state_48838__$1;
(statearr_48843_48862[(1)] = (5));

} else {
var statearr_48844_48863 = state_48838__$1;
(statearr_48844_48863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48839 === (6))){
var state_48838__$1 = state_48838;
var statearr_48845_48864 = state_48838__$1;
(statearr_48845_48864[(2)] = null);

(statearr_48845_48864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48839 === (3))){
var inst_48836 = (state_48838[(2)]);
var state_48838__$1 = state_48838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48838__$1,inst_48836);
} else {
if((state_val_48839 === (2))){
var state_48838__$1 = state_48838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48838__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_48839 === (11))){
var inst_48830 = (state_48838[(2)]);
var state_48838__$1 = (function (){var statearr_48846 = state_48838;
(statearr_48846[(8)] = inst_48830);

return statearr_48846;
})();
var statearr_48847_48865 = state_48838__$1;
(statearr_48847_48865[(2)] = null);

(statearr_48847_48865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48839 === (9))){
var inst_48824 = (state_48838[(9)]);
var inst_48822 = (state_48838[(10)]);
var inst_48826 = inst_48824.call(null,inst_48822);
var state_48838__$1 = state_48838;
var statearr_48848_48866 = state_48838__$1;
(statearr_48848_48866[(2)] = inst_48826);

(statearr_48848_48866[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48839 === (5))){
var inst_48818 = (state_48838[(7)]);
var inst_48820 = figwheel.client.file_reloading.blocking_load.call(null,inst_48818);
var state_48838__$1 = state_48838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48838__$1,(8),inst_48820);
} else {
if((state_val_48839 === (10))){
var inst_48822 = (state_48838[(10)]);
var inst_48828 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_48822);
var state_48838__$1 = state_48838;
var statearr_48849_48867 = state_48838__$1;
(statearr_48849_48867[(2)] = inst_48828);

(statearr_48849_48867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48839 === (8))){
var inst_48818 = (state_48838[(7)]);
var inst_48824 = (state_48838[(9)]);
var inst_48822 = (state_48838[(2)]);
var inst_48823 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_48824__$1 = cljs.core.get.call(null,inst_48823,inst_48818);
var state_48838__$1 = (function (){var statearr_48850 = state_48838;
(statearr_48850[(9)] = inst_48824__$1);

(statearr_48850[(10)] = inst_48822);

return statearr_48850;
})();
if(cljs.core.truth_(inst_48824__$1)){
var statearr_48851_48868 = state_48838__$1;
(statearr_48851_48868[(1)] = (9));

} else {
var statearr_48852_48869 = state_48838__$1;
(statearr_48852_48869[(1)] = (10));

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
});})(c__18796__auto__))
;
return ((function (switch__18775__auto__,c__18796__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18776__auto__ = null;
var figwheel$client$file_reloading$state_machine__18776__auto____0 = (function (){
var statearr_48856 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48856[(0)] = figwheel$client$file_reloading$state_machine__18776__auto__);

(statearr_48856[(1)] = (1));

return statearr_48856;
});
var figwheel$client$file_reloading$state_machine__18776__auto____1 = (function (state_48838){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_48838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e48857){if((e48857 instanceof Object)){
var ex__18779__auto__ = e48857;
var statearr_48858_48870 = state_48838;
(statearr_48858_48870[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48871 = state_48838;
state_48838 = G__48871;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18776__auto__ = function(state_48838){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18776__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18776__auto____1.call(this,state_48838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18776__auto____0;
figwheel$client$file_reloading$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18776__auto____1;
return figwheel$client$file_reloading$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__))
})();
var state__18798__auto__ = (function (){var statearr_48859 = f__18797__auto__.call(null);
(statearr_48859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_48859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__))
);

return c__18796__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__48872,callback){
var map__48875 = p__48872;
var map__48875__$1 = ((((!((map__48875 == null)))?((((map__48875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48875):map__48875);
var file_msg = map__48875__$1;
var namespace = cljs.core.get.call(null,map__48875__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__48875,map__48875__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__48875,map__48875__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__48877){
var map__48880 = p__48877;
var map__48880__$1 = ((((!((map__48880 == null)))?((((map__48880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48880):map__48880);
var file_msg = map__48880__$1;
var namespace = cljs.core.get.call(null,map__48880__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__48882,callback){
var map__48885 = p__48882;
var map__48885__$1 = ((((!((map__48885 == null)))?((((map__48885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48885):map__48885);
var file_msg = map__48885__$1;
var request_url = cljs.core.get.call(null,map__48885__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__48885__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__18796__auto___48973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___48973,out){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___48973,out){
return (function (state_48955){
var state_val_48956 = (state_48955[(1)]);
if((state_val_48956 === (1))){
var inst_48933 = cljs.core.nth.call(null,files,(0),null);
var inst_48934 = cljs.core.nthnext.call(null,files,(1));
var inst_48935 = files;
var state_48955__$1 = (function (){var statearr_48957 = state_48955;
(statearr_48957[(7)] = inst_48935);

(statearr_48957[(8)] = inst_48934);

(statearr_48957[(9)] = inst_48933);

return statearr_48957;
})();
var statearr_48958_48974 = state_48955__$1;
(statearr_48958_48974[(2)] = null);

(statearr_48958_48974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48956 === (2))){
var inst_48938 = (state_48955[(10)]);
var inst_48935 = (state_48955[(7)]);
var inst_48938__$1 = cljs.core.nth.call(null,inst_48935,(0),null);
var inst_48939 = cljs.core.nthnext.call(null,inst_48935,(1));
var inst_48940 = (inst_48938__$1 == null);
var inst_48941 = cljs.core.not.call(null,inst_48940);
var state_48955__$1 = (function (){var statearr_48959 = state_48955;
(statearr_48959[(10)] = inst_48938__$1);

(statearr_48959[(11)] = inst_48939);

return statearr_48959;
})();
if(inst_48941){
var statearr_48960_48975 = state_48955__$1;
(statearr_48960_48975[(1)] = (4));

} else {
var statearr_48961_48976 = state_48955__$1;
(statearr_48961_48976[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48956 === (3))){
var inst_48953 = (state_48955[(2)]);
var state_48955__$1 = state_48955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48955__$1,inst_48953);
} else {
if((state_val_48956 === (4))){
var inst_48938 = (state_48955[(10)]);
var inst_48943 = figwheel.client.file_reloading.reload_js_file.call(null,inst_48938);
var state_48955__$1 = state_48955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48955__$1,(7),inst_48943);
} else {
if((state_val_48956 === (5))){
var inst_48949 = cljs.core.async.close_BANG_.call(null,out);
var state_48955__$1 = state_48955;
var statearr_48962_48977 = state_48955__$1;
(statearr_48962_48977[(2)] = inst_48949);

(statearr_48962_48977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48956 === (6))){
var inst_48951 = (state_48955[(2)]);
var state_48955__$1 = state_48955;
var statearr_48963_48978 = state_48955__$1;
(statearr_48963_48978[(2)] = inst_48951);

(statearr_48963_48978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48956 === (7))){
var inst_48939 = (state_48955[(11)]);
var inst_48945 = (state_48955[(2)]);
var inst_48946 = cljs.core.async.put_BANG_.call(null,out,inst_48945);
var inst_48935 = inst_48939;
var state_48955__$1 = (function (){var statearr_48964 = state_48955;
(statearr_48964[(7)] = inst_48935);

(statearr_48964[(12)] = inst_48946);

return statearr_48964;
})();
var statearr_48965_48979 = state_48955__$1;
(statearr_48965_48979[(2)] = null);

(statearr_48965_48979[(1)] = (2));


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
});})(c__18796__auto___48973,out))
;
return ((function (switch__18775__auto__,c__18796__auto___48973,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto____0 = (function (){
var statearr_48969 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48969[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto__);

(statearr_48969[(1)] = (1));

return statearr_48969;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto____1 = (function (state_48955){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_48955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e48970){if((e48970 instanceof Object)){
var ex__18779__auto__ = e48970;
var statearr_48971_48980 = state_48955;
(statearr_48971_48980[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48981 = state_48955;
state_48955 = G__48981;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto__ = function(state_48955){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto____1.call(this,state_48955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___48973,out))
})();
var state__18798__auto__ = (function (){var statearr_48972 = f__18797__auto__.call(null);
(statearr_48972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___48973);

return statearr_48972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___48973,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__48982,opts){
var map__48986 = p__48982;
var map__48986__$1 = ((((!((map__48986 == null)))?((((map__48986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48986):map__48986);
var eval_body__$1 = cljs.core.get.call(null,map__48986__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__48986__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e48988){var e = e48988;
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
return (function (p1__48989_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48989_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__48994){
var vec__48995 = p__48994;
var k = cljs.core.nth.call(null,vec__48995,(0),null);
var v = cljs.core.nth.call(null,vec__48995,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__48996){
var vec__48997 = p__48996;
var k = cljs.core.nth.call(null,vec__48997,(0),null);
var v = cljs.core.nth.call(null,vec__48997,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49001,p__49002){
var map__49249 = p__49001;
var map__49249__$1 = ((((!((map__49249 == null)))?((((map__49249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49249):map__49249);
var opts = map__49249__$1;
var before_jsload = cljs.core.get.call(null,map__49249__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49249__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49249__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49250 = p__49002;
var map__49250__$1 = ((((!((map__49250 == null)))?((((map__49250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49250):map__49250);
var msg = map__49250__$1;
var files = cljs.core.get.call(null,map__49250__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49250__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49250__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_49403){
var state_val_49404 = (state_49403[(1)]);
if((state_val_49404 === (7))){
var inst_49266 = (state_49403[(7)]);
var inst_49265 = (state_49403[(8)]);
var inst_49264 = (state_49403[(9)]);
var inst_49267 = (state_49403[(10)]);
var inst_49272 = cljs.core._nth.call(null,inst_49265,inst_49267);
var inst_49273 = figwheel.client.file_reloading.eval_body.call(null,inst_49272,opts);
var inst_49274 = (inst_49267 + (1));
var tmp49405 = inst_49266;
var tmp49406 = inst_49265;
var tmp49407 = inst_49264;
var inst_49264__$1 = tmp49407;
var inst_49265__$1 = tmp49406;
var inst_49266__$1 = tmp49405;
var inst_49267__$1 = inst_49274;
var state_49403__$1 = (function (){var statearr_49408 = state_49403;
(statearr_49408[(7)] = inst_49266__$1);

(statearr_49408[(11)] = inst_49273);

(statearr_49408[(8)] = inst_49265__$1);

(statearr_49408[(9)] = inst_49264__$1);

(statearr_49408[(10)] = inst_49267__$1);

return statearr_49408;
})();
var statearr_49409_49495 = state_49403__$1;
(statearr_49409_49495[(2)] = null);

(statearr_49409_49495[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (20))){
var inst_49307 = (state_49403[(12)]);
var inst_49315 = figwheel.client.file_reloading.sort_files.call(null,inst_49307);
var state_49403__$1 = state_49403;
var statearr_49410_49496 = state_49403__$1;
(statearr_49410_49496[(2)] = inst_49315);

(statearr_49410_49496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (27))){
var state_49403__$1 = state_49403;
var statearr_49411_49497 = state_49403__$1;
(statearr_49411_49497[(2)] = null);

(statearr_49411_49497[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (1))){
var inst_49256 = (state_49403[(13)]);
var inst_49253 = before_jsload.call(null,files);
var inst_49254 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49255 = (function (){return ((function (inst_49256,inst_49253,inst_49254,state_val_49404,c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48998_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48998_SHARP_);
});
;})(inst_49256,inst_49253,inst_49254,state_val_49404,c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49256__$1 = cljs.core.filter.call(null,inst_49255,files);
var inst_49257 = cljs.core.not_empty.call(null,inst_49256__$1);
var state_49403__$1 = (function (){var statearr_49412 = state_49403;
(statearr_49412[(14)] = inst_49254);

(statearr_49412[(15)] = inst_49253);

(statearr_49412[(13)] = inst_49256__$1);

return statearr_49412;
})();
if(cljs.core.truth_(inst_49257)){
var statearr_49413_49498 = state_49403__$1;
(statearr_49413_49498[(1)] = (2));

} else {
var statearr_49414_49499 = state_49403__$1;
(statearr_49414_49499[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (24))){
var state_49403__$1 = state_49403;
var statearr_49415_49500 = state_49403__$1;
(statearr_49415_49500[(2)] = null);

(statearr_49415_49500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (39))){
var inst_49357 = (state_49403[(16)]);
var state_49403__$1 = state_49403;
var statearr_49416_49501 = state_49403__$1;
(statearr_49416_49501[(2)] = inst_49357);

(statearr_49416_49501[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (46))){
var inst_49398 = (state_49403[(2)]);
var state_49403__$1 = state_49403;
var statearr_49417_49502 = state_49403__$1;
(statearr_49417_49502[(2)] = inst_49398);

(statearr_49417_49502[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (4))){
var inst_49301 = (state_49403[(2)]);
var inst_49302 = cljs.core.List.EMPTY;
var inst_49303 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49302);
var inst_49304 = (function (){return ((function (inst_49301,inst_49302,inst_49303,state_val_49404,c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48999_SHARP_){
var and__16759__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48999_SHARP_);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48999_SHARP_));
} else {
return and__16759__auto__;
}
});
;})(inst_49301,inst_49302,inst_49303,state_val_49404,c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49305 = cljs.core.filter.call(null,inst_49304,files);
var inst_49306 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49307 = cljs.core.concat.call(null,inst_49305,inst_49306);
var state_49403__$1 = (function (){var statearr_49418 = state_49403;
(statearr_49418[(17)] = inst_49301);

(statearr_49418[(12)] = inst_49307);

(statearr_49418[(18)] = inst_49303);

return statearr_49418;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_49419_49503 = state_49403__$1;
(statearr_49419_49503[(1)] = (16));

} else {
var statearr_49420_49504 = state_49403__$1;
(statearr_49420_49504[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (15))){
var inst_49291 = (state_49403[(2)]);
var state_49403__$1 = state_49403;
var statearr_49421_49505 = state_49403__$1;
(statearr_49421_49505[(2)] = inst_49291);

(statearr_49421_49505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (21))){
var inst_49317 = (state_49403[(19)]);
var inst_49317__$1 = (state_49403[(2)]);
var inst_49318 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49317__$1);
var state_49403__$1 = (function (){var statearr_49422 = state_49403;
(statearr_49422[(19)] = inst_49317__$1);

return statearr_49422;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49403__$1,(22),inst_49318);
} else {
if((state_val_49404 === (31))){
var inst_49401 = (state_49403[(2)]);
var state_49403__$1 = state_49403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49403__$1,inst_49401);
} else {
if((state_val_49404 === (32))){
var inst_49357 = (state_49403[(16)]);
var inst_49362 = inst_49357.cljs$lang$protocol_mask$partition0$;
var inst_49363 = (inst_49362 & (64));
var inst_49364 = inst_49357.cljs$core$ISeq$;
var inst_49365 = (inst_49363) || (inst_49364);
var state_49403__$1 = state_49403;
if(cljs.core.truth_(inst_49365)){
var statearr_49423_49506 = state_49403__$1;
(statearr_49423_49506[(1)] = (35));

} else {
var statearr_49424_49507 = state_49403__$1;
(statearr_49424_49507[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (40))){
var inst_49378 = (state_49403[(20)]);
var inst_49377 = (state_49403[(2)]);
var inst_49378__$1 = cljs.core.get.call(null,inst_49377,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49379 = cljs.core.get.call(null,inst_49377,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49380 = cljs.core.not_empty.call(null,inst_49378__$1);
var state_49403__$1 = (function (){var statearr_49425 = state_49403;
(statearr_49425[(21)] = inst_49379);

(statearr_49425[(20)] = inst_49378__$1);

return statearr_49425;
})();
if(cljs.core.truth_(inst_49380)){
var statearr_49426_49508 = state_49403__$1;
(statearr_49426_49508[(1)] = (41));

} else {
var statearr_49427_49509 = state_49403__$1;
(statearr_49427_49509[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (33))){
var state_49403__$1 = state_49403;
var statearr_49428_49510 = state_49403__$1;
(statearr_49428_49510[(2)] = false);

(statearr_49428_49510[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (13))){
var inst_49277 = (state_49403[(22)]);
var inst_49281 = cljs.core.chunk_first.call(null,inst_49277);
var inst_49282 = cljs.core.chunk_rest.call(null,inst_49277);
var inst_49283 = cljs.core.count.call(null,inst_49281);
var inst_49264 = inst_49282;
var inst_49265 = inst_49281;
var inst_49266 = inst_49283;
var inst_49267 = (0);
var state_49403__$1 = (function (){var statearr_49429 = state_49403;
(statearr_49429[(7)] = inst_49266);

(statearr_49429[(8)] = inst_49265);

(statearr_49429[(9)] = inst_49264);

(statearr_49429[(10)] = inst_49267);

return statearr_49429;
})();
var statearr_49430_49511 = state_49403__$1;
(statearr_49430_49511[(2)] = null);

(statearr_49430_49511[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (22))){
var inst_49320 = (state_49403[(23)]);
var inst_49321 = (state_49403[(24)]);
var inst_49325 = (state_49403[(25)]);
var inst_49317 = (state_49403[(19)]);
var inst_49320__$1 = (state_49403[(2)]);
var inst_49321__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49320__$1);
var inst_49322 = (function (){var all_files = inst_49317;
var res_SINGLEQUOTE_ = inst_49320__$1;
var res = inst_49321__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49320,inst_49321,inst_49325,inst_49317,inst_49320__$1,inst_49321__$1,state_val_49404,c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49000_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49000_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49320,inst_49321,inst_49325,inst_49317,inst_49320__$1,inst_49321__$1,state_val_49404,c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49323 = cljs.core.filter.call(null,inst_49322,inst_49320__$1);
var inst_49324 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49325__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49324);
var inst_49326 = cljs.core.not_empty.call(null,inst_49325__$1);
var state_49403__$1 = (function (){var statearr_49431 = state_49403;
(statearr_49431[(23)] = inst_49320__$1);

(statearr_49431[(24)] = inst_49321__$1);

(statearr_49431[(25)] = inst_49325__$1);

(statearr_49431[(26)] = inst_49323);

return statearr_49431;
})();
if(cljs.core.truth_(inst_49326)){
var statearr_49432_49512 = state_49403__$1;
(statearr_49432_49512[(1)] = (23));

} else {
var statearr_49433_49513 = state_49403__$1;
(statearr_49433_49513[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (36))){
var state_49403__$1 = state_49403;
var statearr_49434_49514 = state_49403__$1;
(statearr_49434_49514[(2)] = false);

(statearr_49434_49514[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (41))){
var inst_49378 = (state_49403[(20)]);
var inst_49382 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_49383 = cljs.core.map.call(null,inst_49382,inst_49378);
var inst_49384 = cljs.core.pr_str.call(null,inst_49383);
var inst_49385 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_49384)].join('');
var inst_49386 = figwheel.client.utils.log.call(null,inst_49385);
var state_49403__$1 = state_49403;
var statearr_49435_49515 = state_49403__$1;
(statearr_49435_49515[(2)] = inst_49386);

(statearr_49435_49515[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (43))){
var inst_49379 = (state_49403[(21)]);
var inst_49389 = (state_49403[(2)]);
var inst_49390 = cljs.core.not_empty.call(null,inst_49379);
var state_49403__$1 = (function (){var statearr_49436 = state_49403;
(statearr_49436[(27)] = inst_49389);

return statearr_49436;
})();
if(cljs.core.truth_(inst_49390)){
var statearr_49437_49516 = state_49403__$1;
(statearr_49437_49516[(1)] = (44));

} else {
var statearr_49438_49517 = state_49403__$1;
(statearr_49438_49517[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (29))){
var inst_49320 = (state_49403[(23)]);
var inst_49321 = (state_49403[(24)]);
var inst_49325 = (state_49403[(25)]);
var inst_49357 = (state_49403[(16)]);
var inst_49323 = (state_49403[(26)]);
var inst_49317 = (state_49403[(19)]);
var inst_49353 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49356 = (function (){var all_files = inst_49317;
var res_SINGLEQUOTE_ = inst_49320;
var res = inst_49321;
var files_not_loaded = inst_49323;
var dependencies_that_loaded = inst_49325;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49320,inst_49321,inst_49325,inst_49357,inst_49323,inst_49317,inst_49353,state_val_49404,c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49355){
var map__49439 = p__49355;
var map__49439__$1 = ((((!((map__49439 == null)))?((((map__49439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49439):map__49439);
var namespace = cljs.core.get.call(null,map__49439__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49320,inst_49321,inst_49325,inst_49357,inst_49323,inst_49317,inst_49353,state_val_49404,c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49357__$1 = cljs.core.group_by.call(null,inst_49356,inst_49323);
var inst_49359 = (inst_49357__$1 == null);
var inst_49360 = cljs.core.not.call(null,inst_49359);
var state_49403__$1 = (function (){var statearr_49441 = state_49403;
(statearr_49441[(28)] = inst_49353);

(statearr_49441[(16)] = inst_49357__$1);

return statearr_49441;
})();
if(inst_49360){
var statearr_49442_49518 = state_49403__$1;
(statearr_49442_49518[(1)] = (32));

} else {
var statearr_49443_49519 = state_49403__$1;
(statearr_49443_49519[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (44))){
var inst_49379 = (state_49403[(21)]);
var inst_49392 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49379);
var inst_49393 = cljs.core.pr_str.call(null,inst_49392);
var inst_49394 = [cljs.core.str("not required: "),cljs.core.str(inst_49393)].join('');
var inst_49395 = figwheel.client.utils.log.call(null,inst_49394);
var state_49403__$1 = state_49403;
var statearr_49444_49520 = state_49403__$1;
(statearr_49444_49520[(2)] = inst_49395);

(statearr_49444_49520[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (6))){
var inst_49298 = (state_49403[(2)]);
var state_49403__$1 = state_49403;
var statearr_49445_49521 = state_49403__$1;
(statearr_49445_49521[(2)] = inst_49298);

(statearr_49445_49521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (28))){
var inst_49323 = (state_49403[(26)]);
var inst_49350 = (state_49403[(2)]);
var inst_49351 = cljs.core.not_empty.call(null,inst_49323);
var state_49403__$1 = (function (){var statearr_49446 = state_49403;
(statearr_49446[(29)] = inst_49350);

return statearr_49446;
})();
if(cljs.core.truth_(inst_49351)){
var statearr_49447_49522 = state_49403__$1;
(statearr_49447_49522[(1)] = (29));

} else {
var statearr_49448_49523 = state_49403__$1;
(statearr_49448_49523[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (25))){
var inst_49321 = (state_49403[(24)]);
var inst_49337 = (state_49403[(2)]);
var inst_49338 = cljs.core.not_empty.call(null,inst_49321);
var state_49403__$1 = (function (){var statearr_49449 = state_49403;
(statearr_49449[(30)] = inst_49337);

return statearr_49449;
})();
if(cljs.core.truth_(inst_49338)){
var statearr_49450_49524 = state_49403__$1;
(statearr_49450_49524[(1)] = (26));

} else {
var statearr_49451_49525 = state_49403__$1;
(statearr_49451_49525[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (34))){
var inst_49372 = (state_49403[(2)]);
var state_49403__$1 = state_49403;
if(cljs.core.truth_(inst_49372)){
var statearr_49452_49526 = state_49403__$1;
(statearr_49452_49526[(1)] = (38));

} else {
var statearr_49453_49527 = state_49403__$1;
(statearr_49453_49527[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (17))){
var state_49403__$1 = state_49403;
var statearr_49454_49528 = state_49403__$1;
(statearr_49454_49528[(2)] = recompile_dependents);

(statearr_49454_49528[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (3))){
var state_49403__$1 = state_49403;
var statearr_49455_49529 = state_49403__$1;
(statearr_49455_49529[(2)] = null);

(statearr_49455_49529[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (12))){
var inst_49294 = (state_49403[(2)]);
var state_49403__$1 = state_49403;
var statearr_49456_49530 = state_49403__$1;
(statearr_49456_49530[(2)] = inst_49294);

(statearr_49456_49530[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (2))){
var inst_49256 = (state_49403[(13)]);
var inst_49263 = cljs.core.seq.call(null,inst_49256);
var inst_49264 = inst_49263;
var inst_49265 = null;
var inst_49266 = (0);
var inst_49267 = (0);
var state_49403__$1 = (function (){var statearr_49457 = state_49403;
(statearr_49457[(7)] = inst_49266);

(statearr_49457[(8)] = inst_49265);

(statearr_49457[(9)] = inst_49264);

(statearr_49457[(10)] = inst_49267);

return statearr_49457;
})();
var statearr_49458_49531 = state_49403__$1;
(statearr_49458_49531[(2)] = null);

(statearr_49458_49531[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (23))){
var inst_49320 = (state_49403[(23)]);
var inst_49321 = (state_49403[(24)]);
var inst_49325 = (state_49403[(25)]);
var inst_49323 = (state_49403[(26)]);
var inst_49317 = (state_49403[(19)]);
var inst_49328 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49330 = (function (){var all_files = inst_49317;
var res_SINGLEQUOTE_ = inst_49320;
var res = inst_49321;
var files_not_loaded = inst_49323;
var dependencies_that_loaded = inst_49325;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49320,inst_49321,inst_49325,inst_49323,inst_49317,inst_49328,state_val_49404,c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49329){
var map__49459 = p__49329;
var map__49459__$1 = ((((!((map__49459 == null)))?((((map__49459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49459):map__49459);
var request_url = cljs.core.get.call(null,map__49459__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49320,inst_49321,inst_49325,inst_49323,inst_49317,inst_49328,state_val_49404,c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49331 = cljs.core.reverse.call(null,inst_49325);
var inst_49332 = cljs.core.map.call(null,inst_49330,inst_49331);
var inst_49333 = cljs.core.pr_str.call(null,inst_49332);
var inst_49334 = figwheel.client.utils.log.call(null,inst_49333);
var state_49403__$1 = (function (){var statearr_49461 = state_49403;
(statearr_49461[(31)] = inst_49328);

return statearr_49461;
})();
var statearr_49462_49532 = state_49403__$1;
(statearr_49462_49532[(2)] = inst_49334);

(statearr_49462_49532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (35))){
var state_49403__$1 = state_49403;
var statearr_49463_49533 = state_49403__$1;
(statearr_49463_49533[(2)] = true);

(statearr_49463_49533[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (19))){
var inst_49307 = (state_49403[(12)]);
var inst_49313 = figwheel.client.file_reloading.expand_files.call(null,inst_49307);
var state_49403__$1 = state_49403;
var statearr_49464_49534 = state_49403__$1;
(statearr_49464_49534[(2)] = inst_49313);

(statearr_49464_49534[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (11))){
var state_49403__$1 = state_49403;
var statearr_49465_49535 = state_49403__$1;
(statearr_49465_49535[(2)] = null);

(statearr_49465_49535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (9))){
var inst_49296 = (state_49403[(2)]);
var state_49403__$1 = state_49403;
var statearr_49466_49536 = state_49403__$1;
(statearr_49466_49536[(2)] = inst_49296);

(statearr_49466_49536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (5))){
var inst_49266 = (state_49403[(7)]);
var inst_49267 = (state_49403[(10)]);
var inst_49269 = (inst_49267 < inst_49266);
var inst_49270 = inst_49269;
var state_49403__$1 = state_49403;
if(cljs.core.truth_(inst_49270)){
var statearr_49467_49537 = state_49403__$1;
(statearr_49467_49537[(1)] = (7));

} else {
var statearr_49468_49538 = state_49403__$1;
(statearr_49468_49538[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (14))){
var inst_49277 = (state_49403[(22)]);
var inst_49286 = cljs.core.first.call(null,inst_49277);
var inst_49287 = figwheel.client.file_reloading.eval_body.call(null,inst_49286,opts);
var inst_49288 = cljs.core.next.call(null,inst_49277);
var inst_49264 = inst_49288;
var inst_49265 = null;
var inst_49266 = (0);
var inst_49267 = (0);
var state_49403__$1 = (function (){var statearr_49469 = state_49403;
(statearr_49469[(7)] = inst_49266);

(statearr_49469[(32)] = inst_49287);

(statearr_49469[(8)] = inst_49265);

(statearr_49469[(9)] = inst_49264);

(statearr_49469[(10)] = inst_49267);

return statearr_49469;
})();
var statearr_49470_49539 = state_49403__$1;
(statearr_49470_49539[(2)] = null);

(statearr_49470_49539[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (45))){
var state_49403__$1 = state_49403;
var statearr_49471_49540 = state_49403__$1;
(statearr_49471_49540[(2)] = null);

(statearr_49471_49540[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (26))){
var inst_49320 = (state_49403[(23)]);
var inst_49321 = (state_49403[(24)]);
var inst_49325 = (state_49403[(25)]);
var inst_49323 = (state_49403[(26)]);
var inst_49317 = (state_49403[(19)]);
var inst_49340 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49342 = (function (){var all_files = inst_49317;
var res_SINGLEQUOTE_ = inst_49320;
var res = inst_49321;
var files_not_loaded = inst_49323;
var dependencies_that_loaded = inst_49325;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49320,inst_49321,inst_49325,inst_49323,inst_49317,inst_49340,state_val_49404,c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49341){
var map__49472 = p__49341;
var map__49472__$1 = ((((!((map__49472 == null)))?((((map__49472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49472):map__49472);
var namespace = cljs.core.get.call(null,map__49472__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__49472__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49320,inst_49321,inst_49325,inst_49323,inst_49317,inst_49340,state_val_49404,c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49343 = cljs.core.map.call(null,inst_49342,inst_49321);
var inst_49344 = cljs.core.pr_str.call(null,inst_49343);
var inst_49345 = figwheel.client.utils.log.call(null,inst_49344);
var inst_49346 = (function (){var all_files = inst_49317;
var res_SINGLEQUOTE_ = inst_49320;
var res = inst_49321;
var files_not_loaded = inst_49323;
var dependencies_that_loaded = inst_49325;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49320,inst_49321,inst_49325,inst_49323,inst_49317,inst_49340,inst_49342,inst_49343,inst_49344,inst_49345,state_val_49404,c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49320,inst_49321,inst_49325,inst_49323,inst_49317,inst_49340,inst_49342,inst_49343,inst_49344,inst_49345,state_val_49404,c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49347 = setTimeout(inst_49346,(10));
var state_49403__$1 = (function (){var statearr_49474 = state_49403;
(statearr_49474[(33)] = inst_49340);

(statearr_49474[(34)] = inst_49345);

return statearr_49474;
})();
var statearr_49475_49541 = state_49403__$1;
(statearr_49475_49541[(2)] = inst_49347);

(statearr_49475_49541[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (16))){
var state_49403__$1 = state_49403;
var statearr_49476_49542 = state_49403__$1;
(statearr_49476_49542[(2)] = reload_dependents);

(statearr_49476_49542[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (38))){
var inst_49357 = (state_49403[(16)]);
var inst_49374 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49357);
var state_49403__$1 = state_49403;
var statearr_49477_49543 = state_49403__$1;
(statearr_49477_49543[(2)] = inst_49374);

(statearr_49477_49543[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (30))){
var state_49403__$1 = state_49403;
var statearr_49478_49544 = state_49403__$1;
(statearr_49478_49544[(2)] = null);

(statearr_49478_49544[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (10))){
var inst_49277 = (state_49403[(22)]);
var inst_49279 = cljs.core.chunked_seq_QMARK_.call(null,inst_49277);
var state_49403__$1 = state_49403;
if(inst_49279){
var statearr_49479_49545 = state_49403__$1;
(statearr_49479_49545[(1)] = (13));

} else {
var statearr_49480_49546 = state_49403__$1;
(statearr_49480_49546[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (18))){
var inst_49311 = (state_49403[(2)]);
var state_49403__$1 = state_49403;
if(cljs.core.truth_(inst_49311)){
var statearr_49481_49547 = state_49403__$1;
(statearr_49481_49547[(1)] = (19));

} else {
var statearr_49482_49548 = state_49403__$1;
(statearr_49482_49548[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (42))){
var state_49403__$1 = state_49403;
var statearr_49483_49549 = state_49403__$1;
(statearr_49483_49549[(2)] = null);

(statearr_49483_49549[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (37))){
var inst_49369 = (state_49403[(2)]);
var state_49403__$1 = state_49403;
var statearr_49484_49550 = state_49403__$1;
(statearr_49484_49550[(2)] = inst_49369);

(statearr_49484_49550[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (8))){
var inst_49264 = (state_49403[(9)]);
var inst_49277 = (state_49403[(22)]);
var inst_49277__$1 = cljs.core.seq.call(null,inst_49264);
var state_49403__$1 = (function (){var statearr_49485 = state_49403;
(statearr_49485[(22)] = inst_49277__$1);

return statearr_49485;
})();
if(inst_49277__$1){
var statearr_49486_49551 = state_49403__$1;
(statearr_49486_49551[(1)] = (10));

} else {
var statearr_49487_49552 = state_49403__$1;
(statearr_49487_49552[(1)] = (11));

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
});})(c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18775__auto__,c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto____0 = (function (){
var statearr_49491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49491[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto__);

(statearr_49491[(1)] = (1));

return statearr_49491;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto____1 = (function (state_49403){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_49403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e49492){if((e49492 instanceof Object)){
var ex__18779__auto__ = e49492;
var statearr_49493_49553 = state_49403;
(statearr_49493_49553[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49554 = state_49403;
state_49403 = G__49554;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto__ = function(state_49403){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto____1.call(this,state_49403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18798__auto__ = (function (){var statearr_49494 = f__18797__auto__.call(null);
(statearr_49494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_49494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__,map__49249,map__49249__$1,opts,before_jsload,on_jsload,reload_dependents,map__49250,map__49250__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18796__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__49557,link){
var map__49560 = p__49557;
var map__49560__$1 = ((((!((map__49560 == null)))?((((map__49560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49560):map__49560);
var file = cljs.core.get.call(null,map__49560__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__49560,map__49560__$1,file){
return (function (p1__49555_SHARP_,p2__49556_SHARP_){
if(cljs.core._EQ_.call(null,p1__49555_SHARP_,p2__49556_SHARP_)){
return p1__49555_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__49560,map__49560__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__49566){
var map__49567 = p__49566;
var map__49567__$1 = ((((!((map__49567 == null)))?((((map__49567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49567):map__49567);
var match_length = cljs.core.get.call(null,map__49567__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__49567__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__49562_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__49562_SHARP_);
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
var args49569 = [];
var len__17829__auto___49572 = arguments.length;
var i__17830__auto___49573 = (0);
while(true){
if((i__17830__auto___49573 < len__17829__auto___49572)){
args49569.push((arguments[i__17830__auto___49573]));

var G__49574 = (i__17830__auto___49573 + (1));
i__17830__auto___49573 = G__49574;
continue;
} else {
}
break;
}

var G__49571 = args49569.length;
switch (G__49571) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49569.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__49576_SHARP_,p2__49577_SHARP_){
return cljs.core.assoc.call(null,p1__49576_SHARP_,cljs.core.get.call(null,p2__49577_SHARP_,key),p2__49577_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__49578){
var map__49581 = p__49578;
var map__49581__$1 = ((((!((map__49581 == null)))?((((map__49581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49581):map__49581);
var f_data = map__49581__$1;
var file = cljs.core.get.call(null,map__49581__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__49583,files_msg){
var map__49590 = p__49583;
var map__49590__$1 = ((((!((map__49590 == null)))?((((map__49590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49590):map__49590);
var opts = map__49590__$1;
var on_cssload = cljs.core.get.call(null,map__49590__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__49592_49596 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__49593_49597 = null;
var count__49594_49598 = (0);
var i__49595_49599 = (0);
while(true){
if((i__49595_49599 < count__49594_49598)){
var f_49600 = cljs.core._nth.call(null,chunk__49593_49597,i__49595_49599);
figwheel.client.file_reloading.reload_css_file.call(null,f_49600);

var G__49601 = seq__49592_49596;
var G__49602 = chunk__49593_49597;
var G__49603 = count__49594_49598;
var G__49604 = (i__49595_49599 + (1));
seq__49592_49596 = G__49601;
chunk__49593_49597 = G__49602;
count__49594_49598 = G__49603;
i__49595_49599 = G__49604;
continue;
} else {
var temp__4425__auto___49605 = cljs.core.seq.call(null,seq__49592_49596);
if(temp__4425__auto___49605){
var seq__49592_49606__$1 = temp__4425__auto___49605;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49592_49606__$1)){
var c__17574__auto___49607 = cljs.core.chunk_first.call(null,seq__49592_49606__$1);
var G__49608 = cljs.core.chunk_rest.call(null,seq__49592_49606__$1);
var G__49609 = c__17574__auto___49607;
var G__49610 = cljs.core.count.call(null,c__17574__auto___49607);
var G__49611 = (0);
seq__49592_49596 = G__49608;
chunk__49593_49597 = G__49609;
count__49594_49598 = G__49610;
i__49595_49599 = G__49611;
continue;
} else {
var f_49612 = cljs.core.first.call(null,seq__49592_49606__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_49612);

var G__49613 = cljs.core.next.call(null,seq__49592_49606__$1);
var G__49614 = null;
var G__49615 = (0);
var G__49616 = (0);
seq__49592_49596 = G__49613;
chunk__49593_49597 = G__49614;
count__49594_49598 = G__49615;
i__49595_49599 = G__49616;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__49590,map__49590__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__49590,map__49590__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map