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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24680_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24680_SHARP_));
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
var seq__24685 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24686 = null;
var count__24687 = (0);
var i__24688 = (0);
while(true){
if((i__24688 < count__24687)){
var n = cljs.core._nth.call(null,chunk__24686,i__24688);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24689 = seq__24685;
var G__24690 = chunk__24686;
var G__24691 = count__24687;
var G__24692 = (i__24688 + (1));
seq__24685 = G__24689;
chunk__24686 = G__24690;
count__24687 = G__24691;
i__24688 = G__24692;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24685);
if(temp__4425__auto__){
var seq__24685__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24685__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__24685__$1);
var G__24693 = cljs.core.chunk_rest.call(null,seq__24685__$1);
var G__24694 = c__17574__auto__;
var G__24695 = cljs.core.count.call(null,c__17574__auto__);
var G__24696 = (0);
seq__24685 = G__24693;
chunk__24686 = G__24694;
count__24687 = G__24695;
i__24688 = G__24696;
continue;
} else {
var n = cljs.core.first.call(null,seq__24685__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24697 = cljs.core.next.call(null,seq__24685__$1);
var G__24698 = null;
var G__24699 = (0);
var G__24700 = (0);
seq__24685 = G__24697;
chunk__24686 = G__24698;
count__24687 = G__24699;
i__24688 = G__24700;
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

var seq__24739_24746 = cljs.core.seq.call(null,deps);
var chunk__24740_24747 = null;
var count__24741_24748 = (0);
var i__24742_24749 = (0);
while(true){
if((i__24742_24749 < count__24741_24748)){
var dep_24750 = cljs.core._nth.call(null,chunk__24740_24747,i__24742_24749);
topo_sort_helper_STAR_.call(null,dep_24750,(depth + (1)),state);

var G__24751 = seq__24739_24746;
var G__24752 = chunk__24740_24747;
var G__24753 = count__24741_24748;
var G__24754 = (i__24742_24749 + (1));
seq__24739_24746 = G__24751;
chunk__24740_24747 = G__24752;
count__24741_24748 = G__24753;
i__24742_24749 = G__24754;
continue;
} else {
var temp__4425__auto___24755 = cljs.core.seq.call(null,seq__24739_24746);
if(temp__4425__auto___24755){
var seq__24739_24756__$1 = temp__4425__auto___24755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24739_24756__$1)){
var c__17574__auto___24757 = cljs.core.chunk_first.call(null,seq__24739_24756__$1);
var G__24758 = cljs.core.chunk_rest.call(null,seq__24739_24756__$1);
var G__24759 = c__17574__auto___24757;
var G__24760 = cljs.core.count.call(null,c__17574__auto___24757);
var G__24761 = (0);
seq__24739_24746 = G__24758;
chunk__24740_24747 = G__24759;
count__24741_24748 = G__24760;
i__24742_24749 = G__24761;
continue;
} else {
var dep_24762 = cljs.core.first.call(null,seq__24739_24756__$1);
topo_sort_helper_STAR_.call(null,dep_24762,(depth + (1)),state);

var G__24763 = cljs.core.next.call(null,seq__24739_24756__$1);
var G__24764 = null;
var G__24765 = (0);
var G__24766 = (0);
seq__24739_24746 = G__24763;
chunk__24740_24747 = G__24764;
count__24741_24748 = G__24765;
i__24742_24749 = G__24766;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24743){
var vec__24745 = p__24743;
var x = cljs.core.nth.call(null,vec__24745,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24745,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24745,x,xs,get_deps__$1){
return (function (p1__24701_SHARP_){
return clojure.set.difference.call(null,p1__24701_SHARP_,x);
});})(vec__24745,x,xs,get_deps__$1))
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
var seq__24779 = cljs.core.seq.call(null,provides);
var chunk__24780 = null;
var count__24781 = (0);
var i__24782 = (0);
while(true){
if((i__24782 < count__24781)){
var prov = cljs.core._nth.call(null,chunk__24780,i__24782);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24783_24791 = cljs.core.seq.call(null,requires);
var chunk__24784_24792 = null;
var count__24785_24793 = (0);
var i__24786_24794 = (0);
while(true){
if((i__24786_24794 < count__24785_24793)){
var req_24795 = cljs.core._nth.call(null,chunk__24784_24792,i__24786_24794);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24795,prov);

var G__24796 = seq__24783_24791;
var G__24797 = chunk__24784_24792;
var G__24798 = count__24785_24793;
var G__24799 = (i__24786_24794 + (1));
seq__24783_24791 = G__24796;
chunk__24784_24792 = G__24797;
count__24785_24793 = G__24798;
i__24786_24794 = G__24799;
continue;
} else {
var temp__4425__auto___24800 = cljs.core.seq.call(null,seq__24783_24791);
if(temp__4425__auto___24800){
var seq__24783_24801__$1 = temp__4425__auto___24800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24783_24801__$1)){
var c__17574__auto___24802 = cljs.core.chunk_first.call(null,seq__24783_24801__$1);
var G__24803 = cljs.core.chunk_rest.call(null,seq__24783_24801__$1);
var G__24804 = c__17574__auto___24802;
var G__24805 = cljs.core.count.call(null,c__17574__auto___24802);
var G__24806 = (0);
seq__24783_24791 = G__24803;
chunk__24784_24792 = G__24804;
count__24785_24793 = G__24805;
i__24786_24794 = G__24806;
continue;
} else {
var req_24807 = cljs.core.first.call(null,seq__24783_24801__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24807,prov);

var G__24808 = cljs.core.next.call(null,seq__24783_24801__$1);
var G__24809 = null;
var G__24810 = (0);
var G__24811 = (0);
seq__24783_24791 = G__24808;
chunk__24784_24792 = G__24809;
count__24785_24793 = G__24810;
i__24786_24794 = G__24811;
continue;
}
} else {
}
}
break;
}

var G__24812 = seq__24779;
var G__24813 = chunk__24780;
var G__24814 = count__24781;
var G__24815 = (i__24782 + (1));
seq__24779 = G__24812;
chunk__24780 = G__24813;
count__24781 = G__24814;
i__24782 = G__24815;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24779);
if(temp__4425__auto__){
var seq__24779__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24779__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__24779__$1);
var G__24816 = cljs.core.chunk_rest.call(null,seq__24779__$1);
var G__24817 = c__17574__auto__;
var G__24818 = cljs.core.count.call(null,c__17574__auto__);
var G__24819 = (0);
seq__24779 = G__24816;
chunk__24780 = G__24817;
count__24781 = G__24818;
i__24782 = G__24819;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24779__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24787_24820 = cljs.core.seq.call(null,requires);
var chunk__24788_24821 = null;
var count__24789_24822 = (0);
var i__24790_24823 = (0);
while(true){
if((i__24790_24823 < count__24789_24822)){
var req_24824 = cljs.core._nth.call(null,chunk__24788_24821,i__24790_24823);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24824,prov);

var G__24825 = seq__24787_24820;
var G__24826 = chunk__24788_24821;
var G__24827 = count__24789_24822;
var G__24828 = (i__24790_24823 + (1));
seq__24787_24820 = G__24825;
chunk__24788_24821 = G__24826;
count__24789_24822 = G__24827;
i__24790_24823 = G__24828;
continue;
} else {
var temp__4425__auto___24829__$1 = cljs.core.seq.call(null,seq__24787_24820);
if(temp__4425__auto___24829__$1){
var seq__24787_24830__$1 = temp__4425__auto___24829__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24787_24830__$1)){
var c__17574__auto___24831 = cljs.core.chunk_first.call(null,seq__24787_24830__$1);
var G__24832 = cljs.core.chunk_rest.call(null,seq__24787_24830__$1);
var G__24833 = c__17574__auto___24831;
var G__24834 = cljs.core.count.call(null,c__17574__auto___24831);
var G__24835 = (0);
seq__24787_24820 = G__24832;
chunk__24788_24821 = G__24833;
count__24789_24822 = G__24834;
i__24790_24823 = G__24835;
continue;
} else {
var req_24836 = cljs.core.first.call(null,seq__24787_24830__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24836,prov);

var G__24837 = cljs.core.next.call(null,seq__24787_24830__$1);
var G__24838 = null;
var G__24839 = (0);
var G__24840 = (0);
seq__24787_24820 = G__24837;
chunk__24788_24821 = G__24838;
count__24789_24822 = G__24839;
i__24790_24823 = G__24840;
continue;
}
} else {
}
}
break;
}

var G__24841 = cljs.core.next.call(null,seq__24779__$1);
var G__24842 = null;
var G__24843 = (0);
var G__24844 = (0);
seq__24779 = G__24841;
chunk__24780 = G__24842;
count__24781 = G__24843;
i__24782 = G__24844;
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
var seq__24849_24853 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24850_24854 = null;
var count__24851_24855 = (0);
var i__24852_24856 = (0);
while(true){
if((i__24852_24856 < count__24851_24855)){
var ns_24857 = cljs.core._nth.call(null,chunk__24850_24854,i__24852_24856);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24857);

var G__24858 = seq__24849_24853;
var G__24859 = chunk__24850_24854;
var G__24860 = count__24851_24855;
var G__24861 = (i__24852_24856 + (1));
seq__24849_24853 = G__24858;
chunk__24850_24854 = G__24859;
count__24851_24855 = G__24860;
i__24852_24856 = G__24861;
continue;
} else {
var temp__4425__auto___24862 = cljs.core.seq.call(null,seq__24849_24853);
if(temp__4425__auto___24862){
var seq__24849_24863__$1 = temp__4425__auto___24862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24849_24863__$1)){
var c__17574__auto___24864 = cljs.core.chunk_first.call(null,seq__24849_24863__$1);
var G__24865 = cljs.core.chunk_rest.call(null,seq__24849_24863__$1);
var G__24866 = c__17574__auto___24864;
var G__24867 = cljs.core.count.call(null,c__17574__auto___24864);
var G__24868 = (0);
seq__24849_24853 = G__24865;
chunk__24850_24854 = G__24866;
count__24851_24855 = G__24867;
i__24852_24856 = G__24868;
continue;
} else {
var ns_24869 = cljs.core.first.call(null,seq__24849_24863__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24869);

var G__24870 = cljs.core.next.call(null,seq__24849_24863__$1);
var G__24871 = null;
var G__24872 = (0);
var G__24873 = (0);
seq__24849_24853 = G__24870;
chunk__24850_24854 = G__24871;
count__24851_24855 = G__24872;
i__24852_24856 = G__24873;
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
var G__24874__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24875__i = 0, G__24875__a = new Array(arguments.length -  0);
while (G__24875__i < G__24875__a.length) {G__24875__a[G__24875__i] = arguments[G__24875__i + 0]; ++G__24875__i;}
  args = new cljs.core.IndexedSeq(G__24875__a,0);
} 
return G__24874__delegate.call(this,args);};
G__24874.cljs$lang$maxFixedArity = 0;
G__24874.cljs$lang$applyTo = (function (arglist__24876){
var args = cljs.core.seq(arglist__24876);
return G__24874__delegate(args);
});
G__24874.cljs$core$IFn$_invoke$arity$variadic = G__24874__delegate;
return G__24874;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24878 = cljs.core._EQ_;
var expr__24879 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24878.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24879))){
var path_parts = ((function (pred__24878,expr__24879){
return (function (p1__24877_SHARP_){
return clojure.string.split.call(null,p1__24877_SHARP_,/[\/\\]/);
});})(pred__24878,expr__24879))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24878,expr__24879){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24881){if((e24881 instanceof Error)){
var e = e24881;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24881;

}
}})());
});
;})(path_parts,sep,root,pred__24878,expr__24879))
} else {
if(cljs.core.truth_(pred__24878.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24879))){
return ((function (pred__24878,expr__24879){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24878,expr__24879){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24878,expr__24879))
);

return deferred.addErrback(((function (deferred,pred__24878,expr__24879){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24878,expr__24879))
);
});
;})(pred__24878,expr__24879))
} else {
return ((function (pred__24878,expr__24879){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24878,expr__24879))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24882,callback){
var map__24885 = p__24882;
var map__24885__$1 = ((((!((map__24885 == null)))?((((map__24885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24885):map__24885);
var file_msg = map__24885__$1;
var request_url = cljs.core.get.call(null,map__24885__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24885,map__24885__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24885,map__24885__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__21737__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto__){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto__){
return (function (state_24909){
var state_val_24910 = (state_24909[(1)]);
if((state_val_24910 === (7))){
var inst_24905 = (state_24909[(2)]);
var state_24909__$1 = state_24909;
var statearr_24911_24931 = state_24909__$1;
(statearr_24911_24931[(2)] = inst_24905);

(statearr_24911_24931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (1))){
var state_24909__$1 = state_24909;
var statearr_24912_24932 = state_24909__$1;
(statearr_24912_24932[(2)] = null);

(statearr_24912_24932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (4))){
var inst_24889 = (state_24909[(7)]);
var inst_24889__$1 = (state_24909[(2)]);
var state_24909__$1 = (function (){var statearr_24913 = state_24909;
(statearr_24913[(7)] = inst_24889__$1);

return statearr_24913;
})();
if(cljs.core.truth_(inst_24889__$1)){
var statearr_24914_24933 = state_24909__$1;
(statearr_24914_24933[(1)] = (5));

} else {
var statearr_24915_24934 = state_24909__$1;
(statearr_24915_24934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (6))){
var state_24909__$1 = state_24909;
var statearr_24916_24935 = state_24909__$1;
(statearr_24916_24935[(2)] = null);

(statearr_24916_24935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (3))){
var inst_24907 = (state_24909[(2)]);
var state_24909__$1 = state_24909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24909__$1,inst_24907);
} else {
if((state_val_24910 === (2))){
var state_24909__$1 = state_24909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24909__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24910 === (11))){
var inst_24901 = (state_24909[(2)]);
var state_24909__$1 = (function (){var statearr_24917 = state_24909;
(statearr_24917[(8)] = inst_24901);

return statearr_24917;
})();
var statearr_24918_24936 = state_24909__$1;
(statearr_24918_24936[(2)] = null);

(statearr_24918_24936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (9))){
var inst_24893 = (state_24909[(9)]);
var inst_24895 = (state_24909[(10)]);
var inst_24897 = inst_24895.call(null,inst_24893);
var state_24909__$1 = state_24909;
var statearr_24919_24937 = state_24909__$1;
(statearr_24919_24937[(2)] = inst_24897);

(statearr_24919_24937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (5))){
var inst_24889 = (state_24909[(7)]);
var inst_24891 = figwheel.client.file_reloading.blocking_load.call(null,inst_24889);
var state_24909__$1 = state_24909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24909__$1,(8),inst_24891);
} else {
if((state_val_24910 === (10))){
var inst_24893 = (state_24909[(9)]);
var inst_24899 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24893);
var state_24909__$1 = state_24909;
var statearr_24920_24938 = state_24909__$1;
(statearr_24920_24938[(2)] = inst_24899);

(statearr_24920_24938[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (8))){
var inst_24889 = (state_24909[(7)]);
var inst_24895 = (state_24909[(10)]);
var inst_24893 = (state_24909[(2)]);
var inst_24894 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24895__$1 = cljs.core.get.call(null,inst_24894,inst_24889);
var state_24909__$1 = (function (){var statearr_24921 = state_24909;
(statearr_24921[(9)] = inst_24893);

(statearr_24921[(10)] = inst_24895__$1);

return statearr_24921;
})();
if(cljs.core.truth_(inst_24895__$1)){
var statearr_24922_24939 = state_24909__$1;
(statearr_24922_24939[(1)] = (9));

} else {
var statearr_24923_24940 = state_24909__$1;
(statearr_24923_24940[(1)] = (10));

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
});})(c__21737__auto__))
;
return ((function (switch__21625__auto__,c__21737__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21626__auto__ = null;
var figwheel$client$file_reloading$state_machine__21626__auto____0 = (function (){
var statearr_24927 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24927[(0)] = figwheel$client$file_reloading$state_machine__21626__auto__);

(statearr_24927[(1)] = (1));

return statearr_24927;
});
var figwheel$client$file_reloading$state_machine__21626__auto____1 = (function (state_24909){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_24909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e24928){if((e24928 instanceof Object)){
var ex__21629__auto__ = e24928;
var statearr_24929_24941 = state_24909;
(statearr_24929_24941[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24942 = state_24909;
state_24909 = G__24942;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21626__auto__ = function(state_24909){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21626__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21626__auto____1.call(this,state_24909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21626__auto____0;
figwheel$client$file_reloading$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21626__auto____1;
return figwheel$client$file_reloading$state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto__))
})();
var state__21739__auto__ = (function (){var statearr_24930 = f__21738__auto__.call(null);
(statearr_24930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto__);

return statearr_24930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto__))
);

return c__21737__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24943,callback){
var map__24946 = p__24943;
var map__24946__$1 = ((((!((map__24946 == null)))?((((map__24946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24946):map__24946);
var file_msg = map__24946__$1;
var namespace = cljs.core.get.call(null,map__24946__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24946,map__24946__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24946,map__24946__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24948){
var map__24951 = p__24948;
var map__24951__$1 = ((((!((map__24951 == null)))?((((map__24951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24951):map__24951);
var file_msg = map__24951__$1;
var namespace = cljs.core.get.call(null,map__24951__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24953,callback){
var map__24956 = p__24953;
var map__24956__$1 = ((((!((map__24956 == null)))?((((map__24956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24956):map__24956);
var file_msg = map__24956__$1;
var request_url = cljs.core.get.call(null,map__24956__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24956__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21737__auto___25044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto___25044,out){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto___25044,out){
return (function (state_25026){
var state_val_25027 = (state_25026[(1)]);
if((state_val_25027 === (1))){
var inst_25004 = cljs.core.nth.call(null,files,(0),null);
var inst_25005 = cljs.core.nthnext.call(null,files,(1));
var inst_25006 = files;
var state_25026__$1 = (function (){var statearr_25028 = state_25026;
(statearr_25028[(7)] = inst_25006);

(statearr_25028[(8)] = inst_25004);

(statearr_25028[(9)] = inst_25005);

return statearr_25028;
})();
var statearr_25029_25045 = state_25026__$1;
(statearr_25029_25045[(2)] = null);

(statearr_25029_25045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (2))){
var inst_25006 = (state_25026[(7)]);
var inst_25009 = (state_25026[(10)]);
var inst_25009__$1 = cljs.core.nth.call(null,inst_25006,(0),null);
var inst_25010 = cljs.core.nthnext.call(null,inst_25006,(1));
var inst_25011 = (inst_25009__$1 == null);
var inst_25012 = cljs.core.not.call(null,inst_25011);
var state_25026__$1 = (function (){var statearr_25030 = state_25026;
(statearr_25030[(10)] = inst_25009__$1);

(statearr_25030[(11)] = inst_25010);

return statearr_25030;
})();
if(inst_25012){
var statearr_25031_25046 = state_25026__$1;
(statearr_25031_25046[(1)] = (4));

} else {
var statearr_25032_25047 = state_25026__$1;
(statearr_25032_25047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (3))){
var inst_25024 = (state_25026[(2)]);
var state_25026__$1 = state_25026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25026__$1,inst_25024);
} else {
if((state_val_25027 === (4))){
var inst_25009 = (state_25026[(10)]);
var inst_25014 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25009);
var state_25026__$1 = state_25026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25026__$1,(7),inst_25014);
} else {
if((state_val_25027 === (5))){
var inst_25020 = cljs.core.async.close_BANG_.call(null,out);
var state_25026__$1 = state_25026;
var statearr_25033_25048 = state_25026__$1;
(statearr_25033_25048[(2)] = inst_25020);

(statearr_25033_25048[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (6))){
var inst_25022 = (state_25026[(2)]);
var state_25026__$1 = state_25026;
var statearr_25034_25049 = state_25026__$1;
(statearr_25034_25049[(2)] = inst_25022);

(statearr_25034_25049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (7))){
var inst_25010 = (state_25026[(11)]);
var inst_25016 = (state_25026[(2)]);
var inst_25017 = cljs.core.async.put_BANG_.call(null,out,inst_25016);
var inst_25006 = inst_25010;
var state_25026__$1 = (function (){var statearr_25035 = state_25026;
(statearr_25035[(7)] = inst_25006);

(statearr_25035[(12)] = inst_25017);

return statearr_25035;
})();
var statearr_25036_25050 = state_25026__$1;
(statearr_25036_25050[(2)] = null);

(statearr_25036_25050[(1)] = (2));


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
});})(c__21737__auto___25044,out))
;
return ((function (switch__21625__auto__,c__21737__auto___25044,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21626__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21626__auto____0 = (function (){
var statearr_25040 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25040[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21626__auto__);

(statearr_25040[(1)] = (1));

return statearr_25040;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21626__auto____1 = (function (state_25026){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_25026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e25041){if((e25041 instanceof Object)){
var ex__21629__auto__ = e25041;
var statearr_25042_25051 = state_25026;
(statearr_25042_25051[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25052 = state_25026;
state_25026 = G__25052;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21626__auto__ = function(state_25026){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21626__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21626__auto____1.call(this,state_25026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21626__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21626__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto___25044,out))
})();
var state__21739__auto__ = (function (){var statearr_25043 = f__21738__auto__.call(null);
(statearr_25043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___25044);

return statearr_25043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto___25044,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25053,opts){
var map__25057 = p__25053;
var map__25057__$1 = ((((!((map__25057 == null)))?((((map__25057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25057):map__25057);
var eval_body__$1 = cljs.core.get.call(null,map__25057__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25057__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e25059){var e = e25059;
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
return (function (p1__25060_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25060_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__25065){
var vec__25066 = p__25065;
var k = cljs.core.nth.call(null,vec__25066,(0),null);
var v = cljs.core.nth.call(null,vec__25066,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25067){
var vec__25068 = p__25067;
var k = cljs.core.nth.call(null,vec__25068,(0),null);
var v = cljs.core.nth.call(null,vec__25068,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25072,p__25073){
var map__25320 = p__25072;
var map__25320__$1 = ((((!((map__25320 == null)))?((((map__25320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25320):map__25320);
var opts = map__25320__$1;
var before_jsload = cljs.core.get.call(null,map__25320__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25320__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25320__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25321 = p__25073;
var map__25321__$1 = ((((!((map__25321 == null)))?((((map__25321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25321):map__25321);
var msg = map__25321__$1;
var files = cljs.core.get.call(null,map__25321__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25321__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25321__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21737__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25474){
var state_val_25475 = (state_25474[(1)]);
if((state_val_25475 === (7))){
var inst_25336 = (state_25474[(7)]);
var inst_25338 = (state_25474[(8)]);
var inst_25337 = (state_25474[(9)]);
var inst_25335 = (state_25474[(10)]);
var inst_25343 = cljs.core._nth.call(null,inst_25336,inst_25338);
var inst_25344 = figwheel.client.file_reloading.eval_body.call(null,inst_25343,opts);
var inst_25345 = (inst_25338 + (1));
var tmp25476 = inst_25336;
var tmp25477 = inst_25337;
var tmp25478 = inst_25335;
var inst_25335__$1 = tmp25478;
var inst_25336__$1 = tmp25476;
var inst_25337__$1 = tmp25477;
var inst_25338__$1 = inst_25345;
var state_25474__$1 = (function (){var statearr_25479 = state_25474;
(statearr_25479[(7)] = inst_25336__$1);

(statearr_25479[(8)] = inst_25338__$1);

(statearr_25479[(9)] = inst_25337__$1);

(statearr_25479[(11)] = inst_25344);

(statearr_25479[(10)] = inst_25335__$1);

return statearr_25479;
})();
var statearr_25480_25566 = state_25474__$1;
(statearr_25480_25566[(2)] = null);

(statearr_25480_25566[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (20))){
var inst_25378 = (state_25474[(12)]);
var inst_25386 = figwheel.client.file_reloading.sort_files.call(null,inst_25378);
var state_25474__$1 = state_25474;
var statearr_25481_25567 = state_25474__$1;
(statearr_25481_25567[(2)] = inst_25386);

(statearr_25481_25567[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (27))){
var state_25474__$1 = state_25474;
var statearr_25482_25568 = state_25474__$1;
(statearr_25482_25568[(2)] = null);

(statearr_25482_25568[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (1))){
var inst_25327 = (state_25474[(13)]);
var inst_25324 = before_jsload.call(null,files);
var inst_25325 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25326 = (function (){return ((function (inst_25327,inst_25324,inst_25325,state_val_25475,c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25069_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25069_SHARP_);
});
;})(inst_25327,inst_25324,inst_25325,state_val_25475,c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25327__$1 = cljs.core.filter.call(null,inst_25326,files);
var inst_25328 = cljs.core.not_empty.call(null,inst_25327__$1);
var state_25474__$1 = (function (){var statearr_25483 = state_25474;
(statearr_25483[(14)] = inst_25325);

(statearr_25483[(15)] = inst_25324);

(statearr_25483[(13)] = inst_25327__$1);

return statearr_25483;
})();
if(cljs.core.truth_(inst_25328)){
var statearr_25484_25569 = state_25474__$1;
(statearr_25484_25569[(1)] = (2));

} else {
var statearr_25485_25570 = state_25474__$1;
(statearr_25485_25570[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (24))){
var state_25474__$1 = state_25474;
var statearr_25486_25571 = state_25474__$1;
(statearr_25486_25571[(2)] = null);

(statearr_25486_25571[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (39))){
var inst_25428 = (state_25474[(16)]);
var state_25474__$1 = state_25474;
var statearr_25487_25572 = state_25474__$1;
(statearr_25487_25572[(2)] = inst_25428);

(statearr_25487_25572[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (46))){
var inst_25469 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
var statearr_25488_25573 = state_25474__$1;
(statearr_25488_25573[(2)] = inst_25469);

(statearr_25488_25573[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (4))){
var inst_25372 = (state_25474[(2)]);
var inst_25373 = cljs.core.List.EMPTY;
var inst_25374 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25373);
var inst_25375 = (function (){return ((function (inst_25372,inst_25373,inst_25374,state_val_25475,c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25070_SHARP_){
var and__16759__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25070_SHARP_);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25070_SHARP_));
} else {
return and__16759__auto__;
}
});
;})(inst_25372,inst_25373,inst_25374,state_val_25475,c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25376 = cljs.core.filter.call(null,inst_25375,files);
var inst_25377 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25378 = cljs.core.concat.call(null,inst_25376,inst_25377);
var state_25474__$1 = (function (){var statearr_25489 = state_25474;
(statearr_25489[(17)] = inst_25374);

(statearr_25489[(12)] = inst_25378);

(statearr_25489[(18)] = inst_25372);

return statearr_25489;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25490_25574 = state_25474__$1;
(statearr_25490_25574[(1)] = (16));

} else {
var statearr_25491_25575 = state_25474__$1;
(statearr_25491_25575[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (15))){
var inst_25362 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
var statearr_25492_25576 = state_25474__$1;
(statearr_25492_25576[(2)] = inst_25362);

(statearr_25492_25576[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (21))){
var inst_25388 = (state_25474[(19)]);
var inst_25388__$1 = (state_25474[(2)]);
var inst_25389 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25388__$1);
var state_25474__$1 = (function (){var statearr_25493 = state_25474;
(statearr_25493[(19)] = inst_25388__$1);

return statearr_25493;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25474__$1,(22),inst_25389);
} else {
if((state_val_25475 === (31))){
var inst_25472 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25474__$1,inst_25472);
} else {
if((state_val_25475 === (32))){
var inst_25428 = (state_25474[(16)]);
var inst_25433 = inst_25428.cljs$lang$protocol_mask$partition0$;
var inst_25434 = (inst_25433 & (64));
var inst_25435 = inst_25428.cljs$core$ISeq$;
var inst_25436 = (inst_25434) || (inst_25435);
var state_25474__$1 = state_25474;
if(cljs.core.truth_(inst_25436)){
var statearr_25494_25577 = state_25474__$1;
(statearr_25494_25577[(1)] = (35));

} else {
var statearr_25495_25578 = state_25474__$1;
(statearr_25495_25578[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (40))){
var inst_25449 = (state_25474[(20)]);
var inst_25448 = (state_25474[(2)]);
var inst_25449__$1 = cljs.core.get.call(null,inst_25448,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25450 = cljs.core.get.call(null,inst_25448,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25451 = cljs.core.not_empty.call(null,inst_25449__$1);
var state_25474__$1 = (function (){var statearr_25496 = state_25474;
(statearr_25496[(21)] = inst_25450);

(statearr_25496[(20)] = inst_25449__$1);

return statearr_25496;
})();
if(cljs.core.truth_(inst_25451)){
var statearr_25497_25579 = state_25474__$1;
(statearr_25497_25579[(1)] = (41));

} else {
var statearr_25498_25580 = state_25474__$1;
(statearr_25498_25580[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (33))){
var state_25474__$1 = state_25474;
var statearr_25499_25581 = state_25474__$1;
(statearr_25499_25581[(2)] = false);

(statearr_25499_25581[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (13))){
var inst_25348 = (state_25474[(22)]);
var inst_25352 = cljs.core.chunk_first.call(null,inst_25348);
var inst_25353 = cljs.core.chunk_rest.call(null,inst_25348);
var inst_25354 = cljs.core.count.call(null,inst_25352);
var inst_25335 = inst_25353;
var inst_25336 = inst_25352;
var inst_25337 = inst_25354;
var inst_25338 = (0);
var state_25474__$1 = (function (){var statearr_25500 = state_25474;
(statearr_25500[(7)] = inst_25336);

(statearr_25500[(8)] = inst_25338);

(statearr_25500[(9)] = inst_25337);

(statearr_25500[(10)] = inst_25335);

return statearr_25500;
})();
var statearr_25501_25582 = state_25474__$1;
(statearr_25501_25582[(2)] = null);

(statearr_25501_25582[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (22))){
var inst_25396 = (state_25474[(23)]);
var inst_25392 = (state_25474[(24)]);
var inst_25391 = (state_25474[(25)]);
var inst_25388 = (state_25474[(19)]);
var inst_25391__$1 = (state_25474[(2)]);
var inst_25392__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25391__$1);
var inst_25393 = (function (){var all_files = inst_25388;
var res_SINGLEQUOTE_ = inst_25391__$1;
var res = inst_25392__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25396,inst_25392,inst_25391,inst_25388,inst_25391__$1,inst_25392__$1,state_val_25475,c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25071_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25071_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25396,inst_25392,inst_25391,inst_25388,inst_25391__$1,inst_25392__$1,state_val_25475,c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25394 = cljs.core.filter.call(null,inst_25393,inst_25391__$1);
var inst_25395 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25396__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25395);
var inst_25397 = cljs.core.not_empty.call(null,inst_25396__$1);
var state_25474__$1 = (function (){var statearr_25502 = state_25474;
(statearr_25502[(23)] = inst_25396__$1);

(statearr_25502[(24)] = inst_25392__$1);

(statearr_25502[(26)] = inst_25394);

(statearr_25502[(25)] = inst_25391__$1);

return statearr_25502;
})();
if(cljs.core.truth_(inst_25397)){
var statearr_25503_25583 = state_25474__$1;
(statearr_25503_25583[(1)] = (23));

} else {
var statearr_25504_25584 = state_25474__$1;
(statearr_25504_25584[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (36))){
var state_25474__$1 = state_25474;
var statearr_25505_25585 = state_25474__$1;
(statearr_25505_25585[(2)] = false);

(statearr_25505_25585[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (41))){
var inst_25449 = (state_25474[(20)]);
var inst_25453 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25454 = cljs.core.map.call(null,inst_25453,inst_25449);
var inst_25455 = cljs.core.pr_str.call(null,inst_25454);
var inst_25456 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25455)].join('');
var inst_25457 = figwheel.client.utils.log.call(null,inst_25456);
var state_25474__$1 = state_25474;
var statearr_25506_25586 = state_25474__$1;
(statearr_25506_25586[(2)] = inst_25457);

(statearr_25506_25586[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (43))){
var inst_25450 = (state_25474[(21)]);
var inst_25460 = (state_25474[(2)]);
var inst_25461 = cljs.core.not_empty.call(null,inst_25450);
var state_25474__$1 = (function (){var statearr_25507 = state_25474;
(statearr_25507[(27)] = inst_25460);

return statearr_25507;
})();
if(cljs.core.truth_(inst_25461)){
var statearr_25508_25587 = state_25474__$1;
(statearr_25508_25587[(1)] = (44));

} else {
var statearr_25509_25588 = state_25474__$1;
(statearr_25509_25588[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (29))){
var inst_25396 = (state_25474[(23)]);
var inst_25428 = (state_25474[(16)]);
var inst_25392 = (state_25474[(24)]);
var inst_25394 = (state_25474[(26)]);
var inst_25391 = (state_25474[(25)]);
var inst_25388 = (state_25474[(19)]);
var inst_25424 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25427 = (function (){var all_files = inst_25388;
var res_SINGLEQUOTE_ = inst_25391;
var res = inst_25392;
var files_not_loaded = inst_25394;
var dependencies_that_loaded = inst_25396;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25396,inst_25428,inst_25392,inst_25394,inst_25391,inst_25388,inst_25424,state_val_25475,c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25426){
var map__25510 = p__25426;
var map__25510__$1 = ((((!((map__25510 == null)))?((((map__25510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25510):map__25510);
var namespace = cljs.core.get.call(null,map__25510__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25396,inst_25428,inst_25392,inst_25394,inst_25391,inst_25388,inst_25424,state_val_25475,c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25428__$1 = cljs.core.group_by.call(null,inst_25427,inst_25394);
var inst_25430 = (inst_25428__$1 == null);
var inst_25431 = cljs.core.not.call(null,inst_25430);
var state_25474__$1 = (function (){var statearr_25512 = state_25474;
(statearr_25512[(16)] = inst_25428__$1);

(statearr_25512[(28)] = inst_25424);

return statearr_25512;
})();
if(inst_25431){
var statearr_25513_25589 = state_25474__$1;
(statearr_25513_25589[(1)] = (32));

} else {
var statearr_25514_25590 = state_25474__$1;
(statearr_25514_25590[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (44))){
var inst_25450 = (state_25474[(21)]);
var inst_25463 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25450);
var inst_25464 = cljs.core.pr_str.call(null,inst_25463);
var inst_25465 = [cljs.core.str("not required: "),cljs.core.str(inst_25464)].join('');
var inst_25466 = figwheel.client.utils.log.call(null,inst_25465);
var state_25474__$1 = state_25474;
var statearr_25515_25591 = state_25474__$1;
(statearr_25515_25591[(2)] = inst_25466);

(statearr_25515_25591[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (6))){
var inst_25369 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
var statearr_25516_25592 = state_25474__$1;
(statearr_25516_25592[(2)] = inst_25369);

(statearr_25516_25592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (28))){
var inst_25394 = (state_25474[(26)]);
var inst_25421 = (state_25474[(2)]);
var inst_25422 = cljs.core.not_empty.call(null,inst_25394);
var state_25474__$1 = (function (){var statearr_25517 = state_25474;
(statearr_25517[(29)] = inst_25421);

return statearr_25517;
})();
if(cljs.core.truth_(inst_25422)){
var statearr_25518_25593 = state_25474__$1;
(statearr_25518_25593[(1)] = (29));

} else {
var statearr_25519_25594 = state_25474__$1;
(statearr_25519_25594[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (25))){
var inst_25392 = (state_25474[(24)]);
var inst_25408 = (state_25474[(2)]);
var inst_25409 = cljs.core.not_empty.call(null,inst_25392);
var state_25474__$1 = (function (){var statearr_25520 = state_25474;
(statearr_25520[(30)] = inst_25408);

return statearr_25520;
})();
if(cljs.core.truth_(inst_25409)){
var statearr_25521_25595 = state_25474__$1;
(statearr_25521_25595[(1)] = (26));

} else {
var statearr_25522_25596 = state_25474__$1;
(statearr_25522_25596[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (34))){
var inst_25443 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
if(cljs.core.truth_(inst_25443)){
var statearr_25523_25597 = state_25474__$1;
(statearr_25523_25597[(1)] = (38));

} else {
var statearr_25524_25598 = state_25474__$1;
(statearr_25524_25598[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (17))){
var state_25474__$1 = state_25474;
var statearr_25525_25599 = state_25474__$1;
(statearr_25525_25599[(2)] = recompile_dependents);

(statearr_25525_25599[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (3))){
var state_25474__$1 = state_25474;
var statearr_25526_25600 = state_25474__$1;
(statearr_25526_25600[(2)] = null);

(statearr_25526_25600[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (12))){
var inst_25365 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
var statearr_25527_25601 = state_25474__$1;
(statearr_25527_25601[(2)] = inst_25365);

(statearr_25527_25601[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (2))){
var inst_25327 = (state_25474[(13)]);
var inst_25334 = cljs.core.seq.call(null,inst_25327);
var inst_25335 = inst_25334;
var inst_25336 = null;
var inst_25337 = (0);
var inst_25338 = (0);
var state_25474__$1 = (function (){var statearr_25528 = state_25474;
(statearr_25528[(7)] = inst_25336);

(statearr_25528[(8)] = inst_25338);

(statearr_25528[(9)] = inst_25337);

(statearr_25528[(10)] = inst_25335);

return statearr_25528;
})();
var statearr_25529_25602 = state_25474__$1;
(statearr_25529_25602[(2)] = null);

(statearr_25529_25602[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (23))){
var inst_25396 = (state_25474[(23)]);
var inst_25392 = (state_25474[(24)]);
var inst_25394 = (state_25474[(26)]);
var inst_25391 = (state_25474[(25)]);
var inst_25388 = (state_25474[(19)]);
var inst_25399 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25401 = (function (){var all_files = inst_25388;
var res_SINGLEQUOTE_ = inst_25391;
var res = inst_25392;
var files_not_loaded = inst_25394;
var dependencies_that_loaded = inst_25396;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25396,inst_25392,inst_25394,inst_25391,inst_25388,inst_25399,state_val_25475,c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25400){
var map__25530 = p__25400;
var map__25530__$1 = ((((!((map__25530 == null)))?((((map__25530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25530):map__25530);
var request_url = cljs.core.get.call(null,map__25530__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25396,inst_25392,inst_25394,inst_25391,inst_25388,inst_25399,state_val_25475,c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25402 = cljs.core.reverse.call(null,inst_25396);
var inst_25403 = cljs.core.map.call(null,inst_25401,inst_25402);
var inst_25404 = cljs.core.pr_str.call(null,inst_25403);
var inst_25405 = figwheel.client.utils.log.call(null,inst_25404);
var state_25474__$1 = (function (){var statearr_25532 = state_25474;
(statearr_25532[(31)] = inst_25399);

return statearr_25532;
})();
var statearr_25533_25603 = state_25474__$1;
(statearr_25533_25603[(2)] = inst_25405);

(statearr_25533_25603[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (35))){
var state_25474__$1 = state_25474;
var statearr_25534_25604 = state_25474__$1;
(statearr_25534_25604[(2)] = true);

(statearr_25534_25604[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (19))){
var inst_25378 = (state_25474[(12)]);
var inst_25384 = figwheel.client.file_reloading.expand_files.call(null,inst_25378);
var state_25474__$1 = state_25474;
var statearr_25535_25605 = state_25474__$1;
(statearr_25535_25605[(2)] = inst_25384);

(statearr_25535_25605[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (11))){
var state_25474__$1 = state_25474;
var statearr_25536_25606 = state_25474__$1;
(statearr_25536_25606[(2)] = null);

(statearr_25536_25606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (9))){
var inst_25367 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
var statearr_25537_25607 = state_25474__$1;
(statearr_25537_25607[(2)] = inst_25367);

(statearr_25537_25607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (5))){
var inst_25338 = (state_25474[(8)]);
var inst_25337 = (state_25474[(9)]);
var inst_25340 = (inst_25338 < inst_25337);
var inst_25341 = inst_25340;
var state_25474__$1 = state_25474;
if(cljs.core.truth_(inst_25341)){
var statearr_25538_25608 = state_25474__$1;
(statearr_25538_25608[(1)] = (7));

} else {
var statearr_25539_25609 = state_25474__$1;
(statearr_25539_25609[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (14))){
var inst_25348 = (state_25474[(22)]);
var inst_25357 = cljs.core.first.call(null,inst_25348);
var inst_25358 = figwheel.client.file_reloading.eval_body.call(null,inst_25357,opts);
var inst_25359 = cljs.core.next.call(null,inst_25348);
var inst_25335 = inst_25359;
var inst_25336 = null;
var inst_25337 = (0);
var inst_25338 = (0);
var state_25474__$1 = (function (){var statearr_25540 = state_25474;
(statearr_25540[(7)] = inst_25336);

(statearr_25540[(8)] = inst_25338);

(statearr_25540[(32)] = inst_25358);

(statearr_25540[(9)] = inst_25337);

(statearr_25540[(10)] = inst_25335);

return statearr_25540;
})();
var statearr_25541_25610 = state_25474__$1;
(statearr_25541_25610[(2)] = null);

(statearr_25541_25610[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (45))){
var state_25474__$1 = state_25474;
var statearr_25542_25611 = state_25474__$1;
(statearr_25542_25611[(2)] = null);

(statearr_25542_25611[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (26))){
var inst_25396 = (state_25474[(23)]);
var inst_25392 = (state_25474[(24)]);
var inst_25394 = (state_25474[(26)]);
var inst_25391 = (state_25474[(25)]);
var inst_25388 = (state_25474[(19)]);
var inst_25411 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25413 = (function (){var all_files = inst_25388;
var res_SINGLEQUOTE_ = inst_25391;
var res = inst_25392;
var files_not_loaded = inst_25394;
var dependencies_that_loaded = inst_25396;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25396,inst_25392,inst_25394,inst_25391,inst_25388,inst_25411,state_val_25475,c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25412){
var map__25543 = p__25412;
var map__25543__$1 = ((((!((map__25543 == null)))?((((map__25543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25543):map__25543);
var namespace = cljs.core.get.call(null,map__25543__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25543__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25396,inst_25392,inst_25394,inst_25391,inst_25388,inst_25411,state_val_25475,c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25414 = cljs.core.map.call(null,inst_25413,inst_25392);
var inst_25415 = cljs.core.pr_str.call(null,inst_25414);
var inst_25416 = figwheel.client.utils.log.call(null,inst_25415);
var inst_25417 = (function (){var all_files = inst_25388;
var res_SINGLEQUOTE_ = inst_25391;
var res = inst_25392;
var files_not_loaded = inst_25394;
var dependencies_that_loaded = inst_25396;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25396,inst_25392,inst_25394,inst_25391,inst_25388,inst_25411,inst_25413,inst_25414,inst_25415,inst_25416,state_val_25475,c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25396,inst_25392,inst_25394,inst_25391,inst_25388,inst_25411,inst_25413,inst_25414,inst_25415,inst_25416,state_val_25475,c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25418 = setTimeout(inst_25417,(10));
var state_25474__$1 = (function (){var statearr_25545 = state_25474;
(statearr_25545[(33)] = inst_25411);

(statearr_25545[(34)] = inst_25416);

return statearr_25545;
})();
var statearr_25546_25612 = state_25474__$1;
(statearr_25546_25612[(2)] = inst_25418);

(statearr_25546_25612[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (16))){
var state_25474__$1 = state_25474;
var statearr_25547_25613 = state_25474__$1;
(statearr_25547_25613[(2)] = reload_dependents);

(statearr_25547_25613[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (38))){
var inst_25428 = (state_25474[(16)]);
var inst_25445 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25428);
var state_25474__$1 = state_25474;
var statearr_25548_25614 = state_25474__$1;
(statearr_25548_25614[(2)] = inst_25445);

(statearr_25548_25614[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (30))){
var state_25474__$1 = state_25474;
var statearr_25549_25615 = state_25474__$1;
(statearr_25549_25615[(2)] = null);

(statearr_25549_25615[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (10))){
var inst_25348 = (state_25474[(22)]);
var inst_25350 = cljs.core.chunked_seq_QMARK_.call(null,inst_25348);
var state_25474__$1 = state_25474;
if(inst_25350){
var statearr_25550_25616 = state_25474__$1;
(statearr_25550_25616[(1)] = (13));

} else {
var statearr_25551_25617 = state_25474__$1;
(statearr_25551_25617[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (18))){
var inst_25382 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
if(cljs.core.truth_(inst_25382)){
var statearr_25552_25618 = state_25474__$1;
(statearr_25552_25618[(1)] = (19));

} else {
var statearr_25553_25619 = state_25474__$1;
(statearr_25553_25619[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (42))){
var state_25474__$1 = state_25474;
var statearr_25554_25620 = state_25474__$1;
(statearr_25554_25620[(2)] = null);

(statearr_25554_25620[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (37))){
var inst_25440 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
var statearr_25555_25621 = state_25474__$1;
(statearr_25555_25621[(2)] = inst_25440);

(statearr_25555_25621[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (8))){
var inst_25348 = (state_25474[(22)]);
var inst_25335 = (state_25474[(10)]);
var inst_25348__$1 = cljs.core.seq.call(null,inst_25335);
var state_25474__$1 = (function (){var statearr_25556 = state_25474;
(statearr_25556[(22)] = inst_25348__$1);

return statearr_25556;
})();
if(inst_25348__$1){
var statearr_25557_25622 = state_25474__$1;
(statearr_25557_25622[(1)] = (10));

} else {
var statearr_25558_25623 = state_25474__$1;
(statearr_25558_25623[(1)] = (11));

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
});})(c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21625__auto__,c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21626__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21626__auto____0 = (function (){
var statearr_25562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25562[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21626__auto__);

(statearr_25562[(1)] = (1));

return statearr_25562;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21626__auto____1 = (function (state_25474){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_25474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e25563){if((e25563 instanceof Object)){
var ex__21629__auto__ = e25563;
var statearr_25564_25624 = state_25474;
(statearr_25564_25624[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25625 = state_25474;
state_25474 = G__25625;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21626__auto__ = function(state_25474){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21626__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21626__auto____1.call(this,state_25474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21626__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21626__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21739__auto__ = (function (){var statearr_25565 = f__21738__auto__.call(null);
(statearr_25565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto__);

return statearr_25565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto__,map__25320,map__25320__$1,opts,before_jsload,on_jsload,reload_dependents,map__25321,map__25321__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21737__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25628,link){
var map__25631 = p__25628;
var map__25631__$1 = ((((!((map__25631 == null)))?((((map__25631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25631):map__25631);
var file = cljs.core.get.call(null,map__25631__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25631,map__25631__$1,file){
return (function (p1__25626_SHARP_,p2__25627_SHARP_){
if(cljs.core._EQ_.call(null,p1__25626_SHARP_,p2__25627_SHARP_)){
return p1__25626_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25631,map__25631__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25637){
var map__25638 = p__25637;
var map__25638__$1 = ((((!((map__25638 == null)))?((((map__25638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25638):map__25638);
var match_length = cljs.core.get.call(null,map__25638__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25638__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25633_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25633_SHARP_);
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
var args25640 = [];
var len__17829__auto___25643 = arguments.length;
var i__17830__auto___25644 = (0);
while(true){
if((i__17830__auto___25644 < len__17829__auto___25643)){
args25640.push((arguments[i__17830__auto___25644]));

var G__25645 = (i__17830__auto___25644 + (1));
i__17830__auto___25644 = G__25645;
continue;
} else {
}
break;
}

var G__25642 = args25640.length;
switch (G__25642) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25640.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25647_SHARP_,p2__25648_SHARP_){
return cljs.core.assoc.call(null,p1__25647_SHARP_,cljs.core.get.call(null,p2__25648_SHARP_,key),p2__25648_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25649){
var map__25652 = p__25649;
var map__25652__$1 = ((((!((map__25652 == null)))?((((map__25652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25652):map__25652);
var f_data = map__25652__$1;
var file = cljs.core.get.call(null,map__25652__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25654,files_msg){
var map__25661 = p__25654;
var map__25661__$1 = ((((!((map__25661 == null)))?((((map__25661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25661):map__25661);
var opts = map__25661__$1;
var on_cssload = cljs.core.get.call(null,map__25661__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25663_25667 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25664_25668 = null;
var count__25665_25669 = (0);
var i__25666_25670 = (0);
while(true){
if((i__25666_25670 < count__25665_25669)){
var f_25671 = cljs.core._nth.call(null,chunk__25664_25668,i__25666_25670);
figwheel.client.file_reloading.reload_css_file.call(null,f_25671);

var G__25672 = seq__25663_25667;
var G__25673 = chunk__25664_25668;
var G__25674 = count__25665_25669;
var G__25675 = (i__25666_25670 + (1));
seq__25663_25667 = G__25672;
chunk__25664_25668 = G__25673;
count__25665_25669 = G__25674;
i__25666_25670 = G__25675;
continue;
} else {
var temp__4425__auto___25676 = cljs.core.seq.call(null,seq__25663_25667);
if(temp__4425__auto___25676){
var seq__25663_25677__$1 = temp__4425__auto___25676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25663_25677__$1)){
var c__17574__auto___25678 = cljs.core.chunk_first.call(null,seq__25663_25677__$1);
var G__25679 = cljs.core.chunk_rest.call(null,seq__25663_25677__$1);
var G__25680 = c__17574__auto___25678;
var G__25681 = cljs.core.count.call(null,c__17574__auto___25678);
var G__25682 = (0);
seq__25663_25667 = G__25679;
chunk__25664_25668 = G__25680;
count__25665_25669 = G__25681;
i__25666_25670 = G__25682;
continue;
} else {
var f_25683 = cljs.core.first.call(null,seq__25663_25677__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25683);

var G__25684 = cljs.core.next.call(null,seq__25663_25677__$1);
var G__25685 = null;
var G__25686 = (0);
var G__25687 = (0);
seq__25663_25667 = G__25684;
chunk__25664_25668 = G__25685;
count__25665_25669 = G__25686;
i__25666_25670 = G__25687;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25661,map__25661__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25661,map__25661__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map