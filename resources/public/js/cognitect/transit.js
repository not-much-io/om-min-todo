// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__19712_19716 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__19713_19717 = null;
var count__19714_19718 = (0);
var i__19715_19719 = (0);
while(true){
if((i__19715_19719 < count__19714_19718)){
var k_19720 = cljs.core._nth.call(null,chunk__19713_19717,i__19715_19719);
var v_19721 = (b[k_19720]);
(a[k_19720] = v_19721);

var G__19722 = seq__19712_19716;
var G__19723 = chunk__19713_19717;
var G__19724 = count__19714_19718;
var G__19725 = (i__19715_19719 + (1));
seq__19712_19716 = G__19722;
chunk__19713_19717 = G__19723;
count__19714_19718 = G__19724;
i__19715_19719 = G__19725;
continue;
} else {
var temp__4425__auto___19726 = cljs.core.seq.call(null,seq__19712_19716);
if(temp__4425__auto___19726){
var seq__19712_19727__$1 = temp__4425__auto___19726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19712_19727__$1)){
var c__17574__auto___19728 = cljs.core.chunk_first.call(null,seq__19712_19727__$1);
var G__19729 = cljs.core.chunk_rest.call(null,seq__19712_19727__$1);
var G__19730 = c__17574__auto___19728;
var G__19731 = cljs.core.count.call(null,c__17574__auto___19728);
var G__19732 = (0);
seq__19712_19716 = G__19729;
chunk__19713_19717 = G__19730;
count__19714_19718 = G__19731;
i__19715_19719 = G__19732;
continue;
} else {
var k_19733 = cljs.core.first.call(null,seq__19712_19727__$1);
var v_19734 = (b[k_19733]);
(a[k_19733] = v_19734);

var G__19735 = cljs.core.next.call(null,seq__19712_19727__$1);
var G__19736 = null;
var G__19737 = (0);
var G__19738 = (0);
seq__19712_19716 = G__19735;
chunk__19713_19717 = G__19736;
count__19714_19718 = G__19737;
i__19715_19719 = G__19738;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args19739 = [];
var len__17829__auto___19742 = arguments.length;
var i__17830__auto___19743 = (0);
while(true){
if((i__17830__auto___19743 < len__17829__auto___19742)){
args19739.push((arguments[i__17830__auto___19743]));

var G__19744 = (i__17830__auto___19743 + (1));
i__17830__auto___19743 = G__19744;
continue;
} else {
}
break;
}

var G__19741 = args19739.length;
switch (G__19741) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19739.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__19746 = (i + (2));
var G__19747 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__19746;
ret = G__19747;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19748_19752 = cljs.core.seq.call(null,v);
var chunk__19749_19753 = null;
var count__19750_19754 = (0);
var i__19751_19755 = (0);
while(true){
if((i__19751_19755 < count__19750_19754)){
var x_19756 = cljs.core._nth.call(null,chunk__19749_19753,i__19751_19755);
ret.push(x_19756);

var G__19757 = seq__19748_19752;
var G__19758 = chunk__19749_19753;
var G__19759 = count__19750_19754;
var G__19760 = (i__19751_19755 + (1));
seq__19748_19752 = G__19757;
chunk__19749_19753 = G__19758;
count__19750_19754 = G__19759;
i__19751_19755 = G__19760;
continue;
} else {
var temp__4425__auto___19761 = cljs.core.seq.call(null,seq__19748_19752);
if(temp__4425__auto___19761){
var seq__19748_19762__$1 = temp__4425__auto___19761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19748_19762__$1)){
var c__17574__auto___19763 = cljs.core.chunk_first.call(null,seq__19748_19762__$1);
var G__19764 = cljs.core.chunk_rest.call(null,seq__19748_19762__$1);
var G__19765 = c__17574__auto___19763;
var G__19766 = cljs.core.count.call(null,c__17574__auto___19763);
var G__19767 = (0);
seq__19748_19752 = G__19764;
chunk__19749_19753 = G__19765;
count__19750_19754 = G__19766;
i__19751_19755 = G__19767;
continue;
} else {
var x_19768 = cljs.core.first.call(null,seq__19748_19762__$1);
ret.push(x_19768);

var G__19769 = cljs.core.next.call(null,seq__19748_19762__$1);
var G__19770 = null;
var G__19771 = (0);
var G__19772 = (0);
seq__19748_19752 = G__19769;
chunk__19749_19753 = G__19770;
count__19750_19754 = G__19771;
i__19751_19755 = G__19772;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19773_19777 = cljs.core.seq.call(null,v);
var chunk__19774_19778 = null;
var count__19775_19779 = (0);
var i__19776_19780 = (0);
while(true){
if((i__19776_19780 < count__19775_19779)){
var x_19781 = cljs.core._nth.call(null,chunk__19774_19778,i__19776_19780);
ret.push(x_19781);

var G__19782 = seq__19773_19777;
var G__19783 = chunk__19774_19778;
var G__19784 = count__19775_19779;
var G__19785 = (i__19776_19780 + (1));
seq__19773_19777 = G__19782;
chunk__19774_19778 = G__19783;
count__19775_19779 = G__19784;
i__19776_19780 = G__19785;
continue;
} else {
var temp__4425__auto___19786 = cljs.core.seq.call(null,seq__19773_19777);
if(temp__4425__auto___19786){
var seq__19773_19787__$1 = temp__4425__auto___19786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19773_19787__$1)){
var c__17574__auto___19788 = cljs.core.chunk_first.call(null,seq__19773_19787__$1);
var G__19789 = cljs.core.chunk_rest.call(null,seq__19773_19787__$1);
var G__19790 = c__17574__auto___19788;
var G__19791 = cljs.core.count.call(null,c__17574__auto___19788);
var G__19792 = (0);
seq__19773_19777 = G__19789;
chunk__19774_19778 = G__19790;
count__19775_19779 = G__19791;
i__19776_19780 = G__19792;
continue;
} else {
var x_19793 = cljs.core.first.call(null,seq__19773_19787__$1);
ret.push(x_19793);

var G__19794 = cljs.core.next.call(null,seq__19773_19787__$1);
var G__19795 = null;
var G__19796 = (0);
var G__19797 = (0);
seq__19773_19777 = G__19794;
chunk__19774_19778 = G__19795;
count__19775_19779 = G__19796;
i__19776_19780 = G__19797;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19798_19802 = cljs.core.seq.call(null,v);
var chunk__19799_19803 = null;
var count__19800_19804 = (0);
var i__19801_19805 = (0);
while(true){
if((i__19801_19805 < count__19800_19804)){
var x_19806 = cljs.core._nth.call(null,chunk__19799_19803,i__19801_19805);
ret.push(x_19806);

var G__19807 = seq__19798_19802;
var G__19808 = chunk__19799_19803;
var G__19809 = count__19800_19804;
var G__19810 = (i__19801_19805 + (1));
seq__19798_19802 = G__19807;
chunk__19799_19803 = G__19808;
count__19800_19804 = G__19809;
i__19801_19805 = G__19810;
continue;
} else {
var temp__4425__auto___19811 = cljs.core.seq.call(null,seq__19798_19802);
if(temp__4425__auto___19811){
var seq__19798_19812__$1 = temp__4425__auto___19811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19798_19812__$1)){
var c__17574__auto___19813 = cljs.core.chunk_first.call(null,seq__19798_19812__$1);
var G__19814 = cljs.core.chunk_rest.call(null,seq__19798_19812__$1);
var G__19815 = c__17574__auto___19813;
var G__19816 = cljs.core.count.call(null,c__17574__auto___19813);
var G__19817 = (0);
seq__19798_19802 = G__19814;
chunk__19799_19803 = G__19815;
count__19800_19804 = G__19816;
i__19801_19805 = G__19817;
continue;
} else {
var x_19818 = cljs.core.first.call(null,seq__19798_19812__$1);
ret.push(x_19818);

var G__19819 = cljs.core.next.call(null,seq__19798_19812__$1);
var G__19820 = null;
var G__19821 = (0);
var G__19822 = (0);
seq__19798_19802 = G__19819;
chunk__19799_19803 = G__19820;
count__19800_19804 = G__19821;
i__19801_19805 = G__19822;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args19823 = [];
var len__17829__auto___19834 = arguments.length;
var i__17830__auto___19835 = (0);
while(true){
if((i__17830__auto___19835 < len__17829__auto___19834)){
args19823.push((arguments[i__17830__auto___19835]));

var G__19836 = (i__17830__auto___19835 + (1));
i__17830__auto___19835 = G__19836;
continue;
} else {
}
break;
}

var G__19825 = args19823.length;
switch (G__19825) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19823.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__19826 = obj;
G__19826.push(kfn.call(null,k),vfn.call(null,v));

return G__19826;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x19827 = cljs.core.clone.call(null,handlers);
x19827.forEach = ((function (x19827,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__19828 = cljs.core.seq.call(null,coll);
var chunk__19829 = null;
var count__19830 = (0);
var i__19831 = (0);
while(true){
if((i__19831 < count__19830)){
var vec__19832 = cljs.core._nth.call(null,chunk__19829,i__19831);
var k = cljs.core.nth.call(null,vec__19832,(0),null);
var v = cljs.core.nth.call(null,vec__19832,(1),null);
f.call(null,v,k);

var G__19838 = seq__19828;
var G__19839 = chunk__19829;
var G__19840 = count__19830;
var G__19841 = (i__19831 + (1));
seq__19828 = G__19838;
chunk__19829 = G__19839;
count__19830 = G__19840;
i__19831 = G__19841;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19828);
if(temp__4425__auto__){
var seq__19828__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19828__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__19828__$1);
var G__19842 = cljs.core.chunk_rest.call(null,seq__19828__$1);
var G__19843 = c__17574__auto__;
var G__19844 = cljs.core.count.call(null,c__17574__auto__);
var G__19845 = (0);
seq__19828 = G__19842;
chunk__19829 = G__19843;
count__19830 = G__19844;
i__19831 = G__19845;
continue;
} else {
var vec__19833 = cljs.core.first.call(null,seq__19828__$1);
var k = cljs.core.nth.call(null,vec__19833,(0),null);
var v = cljs.core.nth.call(null,vec__19833,(1),null);
f.call(null,v,k);

var G__19846 = cljs.core.next.call(null,seq__19828__$1);
var G__19847 = null;
var G__19848 = (0);
var G__19849 = (0);
seq__19828 = G__19846;
chunk__19829 = G__19847;
count__19830 = G__19848;
i__19831 = G__19849;
continue;
}
} else {
return null;
}
}
break;
}
});})(x19827,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x19827;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args19850 = [];
var len__17829__auto___19856 = arguments.length;
var i__17830__auto___19857 = (0);
while(true){
if((i__17830__auto___19857 < len__17829__auto___19856)){
args19850.push((arguments[i__17830__auto___19857]));

var G__19858 = (i__17830__auto___19857 + (1));
i__17830__auto___19857 = G__19858;
continue;
} else {
}
break;
}

var G__19852 = args19850.length;
switch (G__19852) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19850.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit19853 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit19853 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta19854){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta19854 = meta19854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit19853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19855,meta19854__$1){
var self__ = this;
var _19855__$1 = this;
return (new cognitect.transit.t_cognitect$transit19853(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta19854__$1));
});

cognitect.transit.t_cognitect$transit19853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19855){
var self__ = this;
var _19855__$1 = this;
return self__.meta19854;
});

cognitect.transit.t_cognitect$transit19853.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit19853.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit19853.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit19853.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit19853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta19854","meta19854",-1431027824,null)], null);
});

cognitect.transit.t_cognitect$transit19853.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit19853.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit19853";

cognitect.transit.t_cognitect$transit19853.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/t_cognitect$transit19853");
});

cognitect.transit.__GT_t_cognitect$transit19853 = (function cognitect$transit$__GT_t_cognitect$transit19853(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta19854){
return (new cognitect.transit.t_cognitect$transit19853(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta19854));
});

}

return (new cognitect.transit.t_cognitect$transit19853(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__16771__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map