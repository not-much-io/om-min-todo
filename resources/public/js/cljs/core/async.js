// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args45743 = [];
var len__17829__auto___45749 = arguments.length;
var i__17830__auto___45750 = (0);
while(true){
if((i__17830__auto___45750 < len__17829__auto___45749)){
args45743.push((arguments[i__17830__auto___45750]));

var G__45751 = (i__17830__auto___45750 + (1));
i__17830__auto___45750 = G__45751;
continue;
} else {
}
break;
}

var G__45745 = args45743.length;
switch (G__45745) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45743.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async45746 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45746 = (function (f,blockable,meta45747){
this.f = f;
this.blockable = blockable;
this.meta45747 = meta45747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45748,meta45747__$1){
var self__ = this;
var _45748__$1 = this;
return (new cljs.core.async.t_cljs$core$async45746(self__.f,self__.blockable,meta45747__$1));
});

cljs.core.async.t_cljs$core$async45746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45748){
var self__ = this;
var _45748__$1 = this;
return self__.meta45747;
});

cljs.core.async.t_cljs$core$async45746.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async45746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45746.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async45746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async45746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45747","meta45747",950149136,null)], null);
});

cljs.core.async.t_cljs$core$async45746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45746";

cljs.core.async.t_cljs$core$async45746.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async45746");
});

cljs.core.async.__GT_t_cljs$core$async45746 = (function cljs$core$async$__GT_t_cljs$core$async45746(f__$1,blockable__$1,meta45747){
return (new cljs.core.async.t_cljs$core$async45746(f__$1,blockable__$1,meta45747));
});

}

return (new cljs.core.async.t_cljs$core$async45746(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args45755 = [];
var len__17829__auto___45758 = arguments.length;
var i__17830__auto___45759 = (0);
while(true){
if((i__17830__auto___45759 < len__17829__auto___45758)){
args45755.push((arguments[i__17830__auto___45759]));

var G__45760 = (i__17830__auto___45759 + (1));
i__17830__auto___45759 = G__45760;
continue;
} else {
}
break;
}

var G__45757 = args45755.length;
switch (G__45757) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45755.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args45762 = [];
var len__17829__auto___45765 = arguments.length;
var i__17830__auto___45766 = (0);
while(true){
if((i__17830__auto___45766 < len__17829__auto___45765)){
args45762.push((arguments[i__17830__auto___45766]));

var G__45767 = (i__17830__auto___45766 + (1));
i__17830__auto___45766 = G__45767;
continue;
} else {
}
break;
}

var G__45764 = args45762.length;
switch (G__45764) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45762.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args45769 = [];
var len__17829__auto___45772 = arguments.length;
var i__17830__auto___45773 = (0);
while(true){
if((i__17830__auto___45773 < len__17829__auto___45772)){
args45769.push((arguments[i__17830__auto___45773]));

var G__45774 = (i__17830__auto___45773 + (1));
i__17830__auto___45773 = G__45774;
continue;
} else {
}
break;
}

var G__45771 = args45769.length;
switch (G__45771) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45769.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_45776 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_45776);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_45776,ret){
return (function (){
return fn1.call(null,val_45776);
});})(val_45776,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args45777 = [];
var len__17829__auto___45780 = arguments.length;
var i__17830__auto___45781 = (0);
while(true){
if((i__17830__auto___45781 < len__17829__auto___45780)){
args45777.push((arguments[i__17830__auto___45781]));

var G__45782 = (i__17830__auto___45781 + (1));
i__17830__auto___45781 = G__45782;
continue;
} else {
}
break;
}

var G__45779 = args45777.length;
switch (G__45779) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45777.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17674__auto___45784 = n;
var x_45785 = (0);
while(true){
if((x_45785 < n__17674__auto___45784)){
(a[x_45785] = (0));

var G__45786 = (x_45785 + (1));
x_45785 = G__45786;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__45787 = (i + (1));
i = G__45787;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async45791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45791 = (function (alt_flag,flag,meta45792){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta45792 = meta45792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_45793,meta45792__$1){
var self__ = this;
var _45793__$1 = this;
return (new cljs.core.async.t_cljs$core$async45791(self__.alt_flag,self__.flag,meta45792__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async45791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_45793){
var self__ = this;
var _45793__$1 = this;
return self__.meta45792;
});})(flag))
;

cljs.core.async.t_cljs$core$async45791.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async45791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async45791.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45791.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45792","meta45792",639129290,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async45791.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45791";

cljs.core.async.t_cljs$core$async45791.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async45791");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async45791 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45791(alt_flag__$1,flag__$1,meta45792){
return (new cljs.core.async.t_cljs$core$async45791(alt_flag__$1,flag__$1,meta45792));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async45791(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async45797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45797 = (function (alt_handler,flag,cb,meta45798){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta45798 = meta45798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45799,meta45798__$1){
var self__ = this;
var _45799__$1 = this;
return (new cljs.core.async.t_cljs$core$async45797(self__.alt_handler,self__.flag,self__.cb,meta45798__$1));
});

cljs.core.async.t_cljs$core$async45797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45799){
var self__ = this;
var _45799__$1 = this;
return self__.meta45798;
});

cljs.core.async.t_cljs$core$async45797.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async45797.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async45797.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45797.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async45797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45798","meta45798",-1858734330,null)], null);
});

cljs.core.async.t_cljs$core$async45797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45797";

cljs.core.async.t_cljs$core$async45797.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async45797");
});

cljs.core.async.__GT_t_cljs$core$async45797 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45797(alt_handler__$1,flag__$1,cb__$1,meta45798){
return (new cljs.core.async.t_cljs$core$async45797(alt_handler__$1,flag__$1,cb__$1,meta45798));
});

}

return (new cljs.core.async.t_cljs$core$async45797(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45800_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45800_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45801_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45801_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16771__auto__ = wport;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45802 = (i + (1));
i = G__45802;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16771__auto__ = ret;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16759__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16759__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17836__auto__ = [];
var len__17829__auto___45808 = arguments.length;
var i__17830__auto___45809 = (0);
while(true){
if((i__17830__auto___45809 < len__17829__auto___45808)){
args__17836__auto__.push((arguments[i__17830__auto___45809]));

var G__45810 = (i__17830__auto___45809 + (1));
i__17830__auto___45809 = G__45810;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((1) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17837__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45805){
var map__45806 = p__45805;
var map__45806__$1 = ((((!((map__45806 == null)))?((((map__45806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45806):map__45806);
var opts = map__45806__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45803){
var G__45804 = cljs.core.first.call(null,seq45803);
var seq45803__$1 = cljs.core.next.call(null,seq45803);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45804,seq45803__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args45811 = [];
var len__17829__auto___45861 = arguments.length;
var i__17830__auto___45862 = (0);
while(true){
if((i__17830__auto___45862 < len__17829__auto___45861)){
args45811.push((arguments[i__17830__auto___45862]));

var G__45863 = (i__17830__auto___45862 + (1));
i__17830__auto___45862 = G__45863;
continue;
} else {
}
break;
}

var G__45813 = args45811.length;
switch (G__45813) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45811.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18796__auto___45865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___45865){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___45865){
return (function (state_45837){
var state_val_45838 = (state_45837[(1)]);
if((state_val_45838 === (7))){
var inst_45833 = (state_45837[(2)]);
var state_45837__$1 = state_45837;
var statearr_45839_45866 = state_45837__$1;
(statearr_45839_45866[(2)] = inst_45833);

(statearr_45839_45866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45838 === (1))){
var state_45837__$1 = state_45837;
var statearr_45840_45867 = state_45837__$1;
(statearr_45840_45867[(2)] = null);

(statearr_45840_45867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45838 === (4))){
var inst_45816 = (state_45837[(7)]);
var inst_45816__$1 = (state_45837[(2)]);
var inst_45817 = (inst_45816__$1 == null);
var state_45837__$1 = (function (){var statearr_45841 = state_45837;
(statearr_45841[(7)] = inst_45816__$1);

return statearr_45841;
})();
if(cljs.core.truth_(inst_45817)){
var statearr_45842_45868 = state_45837__$1;
(statearr_45842_45868[(1)] = (5));

} else {
var statearr_45843_45869 = state_45837__$1;
(statearr_45843_45869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45838 === (13))){
var state_45837__$1 = state_45837;
var statearr_45844_45870 = state_45837__$1;
(statearr_45844_45870[(2)] = null);

(statearr_45844_45870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45838 === (6))){
var inst_45816 = (state_45837[(7)]);
var state_45837__$1 = state_45837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45837__$1,(11),to,inst_45816);
} else {
if((state_val_45838 === (3))){
var inst_45835 = (state_45837[(2)]);
var state_45837__$1 = state_45837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45837__$1,inst_45835);
} else {
if((state_val_45838 === (12))){
var state_45837__$1 = state_45837;
var statearr_45845_45871 = state_45837__$1;
(statearr_45845_45871[(2)] = null);

(statearr_45845_45871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45838 === (2))){
var state_45837__$1 = state_45837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45837__$1,(4),from);
} else {
if((state_val_45838 === (11))){
var inst_45826 = (state_45837[(2)]);
var state_45837__$1 = state_45837;
if(cljs.core.truth_(inst_45826)){
var statearr_45846_45872 = state_45837__$1;
(statearr_45846_45872[(1)] = (12));

} else {
var statearr_45847_45873 = state_45837__$1;
(statearr_45847_45873[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45838 === (9))){
var state_45837__$1 = state_45837;
var statearr_45848_45874 = state_45837__$1;
(statearr_45848_45874[(2)] = null);

(statearr_45848_45874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45838 === (5))){
var state_45837__$1 = state_45837;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45849_45875 = state_45837__$1;
(statearr_45849_45875[(1)] = (8));

} else {
var statearr_45850_45876 = state_45837__$1;
(statearr_45850_45876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45838 === (14))){
var inst_45831 = (state_45837[(2)]);
var state_45837__$1 = state_45837;
var statearr_45851_45877 = state_45837__$1;
(statearr_45851_45877[(2)] = inst_45831);

(statearr_45851_45877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45838 === (10))){
var inst_45823 = (state_45837[(2)]);
var state_45837__$1 = state_45837;
var statearr_45852_45878 = state_45837__$1;
(statearr_45852_45878[(2)] = inst_45823);

(statearr_45852_45878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45838 === (8))){
var inst_45820 = cljs.core.async.close_BANG_.call(null,to);
var state_45837__$1 = state_45837;
var statearr_45853_45879 = state_45837__$1;
(statearr_45853_45879[(2)] = inst_45820);

(statearr_45853_45879[(1)] = (10));


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
});})(c__18796__auto___45865))
;
return ((function (switch__18775__auto__,c__18796__auto___45865){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_45857 = [null,null,null,null,null,null,null,null];
(statearr_45857[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_45857[(1)] = (1));

return statearr_45857;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_45837){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_45837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e45858){if((e45858 instanceof Object)){
var ex__18779__auto__ = e45858;
var statearr_45859_45880 = state_45837;
(statearr_45859_45880[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45881 = state_45837;
state_45837 = G__45881;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_45837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_45837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___45865))
})();
var state__18798__auto__ = (function (){var statearr_45860 = f__18797__auto__.call(null);
(statearr_45860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___45865);

return statearr_45860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___45865))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__46065){
var vec__46066 = p__46065;
var v = cljs.core.nth.call(null,vec__46066,(0),null);
var p = cljs.core.nth.call(null,vec__46066,(1),null);
var job = vec__46066;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18796__auto___46248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___46248,res,vec__46066,v,p,job,jobs,results){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___46248,res,vec__46066,v,p,job,jobs,results){
return (function (state_46071){
var state_val_46072 = (state_46071[(1)]);
if((state_val_46072 === (1))){
var state_46071__$1 = state_46071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46071__$1,(2),res,v);
} else {
if((state_val_46072 === (2))){
var inst_46068 = (state_46071[(2)]);
var inst_46069 = cljs.core.async.close_BANG_.call(null,res);
var state_46071__$1 = (function (){var statearr_46073 = state_46071;
(statearr_46073[(7)] = inst_46068);

return statearr_46073;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46071__$1,inst_46069);
} else {
return null;
}
}
});})(c__18796__auto___46248,res,vec__46066,v,p,job,jobs,results))
;
return ((function (switch__18775__auto__,c__18796__auto___46248,res,vec__46066,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0 = (function (){
var statearr_46077 = [null,null,null,null,null,null,null,null];
(statearr_46077[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__);

(statearr_46077[(1)] = (1));

return statearr_46077;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1 = (function (state_46071){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_46071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e46078){if((e46078 instanceof Object)){
var ex__18779__auto__ = e46078;
var statearr_46079_46249 = state_46071;
(statearr_46079_46249[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46250 = state_46071;
state_46071 = G__46250;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = function(state_46071){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1.call(this,state_46071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___46248,res,vec__46066,v,p,job,jobs,results))
})();
var state__18798__auto__ = (function (){var statearr_46080 = f__18797__auto__.call(null);
(statearr_46080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___46248);

return statearr_46080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___46248,res,vec__46066,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46081){
var vec__46082 = p__46081;
var v = cljs.core.nth.call(null,vec__46082,(0),null);
var p = cljs.core.nth.call(null,vec__46082,(1),null);
var job = vec__46082;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17674__auto___46251 = n;
var __46252 = (0);
while(true){
if((__46252 < n__17674__auto___46251)){
var G__46083_46253 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__46083_46253) {
case "compute":
var c__18796__auto___46255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46252,c__18796__auto___46255,G__46083_46253,n__17674__auto___46251,jobs,results,process,async){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (__46252,c__18796__auto___46255,G__46083_46253,n__17674__auto___46251,jobs,results,process,async){
return (function (state_46096){
var state_val_46097 = (state_46096[(1)]);
if((state_val_46097 === (1))){
var state_46096__$1 = state_46096;
var statearr_46098_46256 = state_46096__$1;
(statearr_46098_46256[(2)] = null);

(statearr_46098_46256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46097 === (2))){
var state_46096__$1 = state_46096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46096__$1,(4),jobs);
} else {
if((state_val_46097 === (3))){
var inst_46094 = (state_46096[(2)]);
var state_46096__$1 = state_46096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46096__$1,inst_46094);
} else {
if((state_val_46097 === (4))){
var inst_46086 = (state_46096[(2)]);
var inst_46087 = process.call(null,inst_46086);
var state_46096__$1 = state_46096;
if(cljs.core.truth_(inst_46087)){
var statearr_46099_46257 = state_46096__$1;
(statearr_46099_46257[(1)] = (5));

} else {
var statearr_46100_46258 = state_46096__$1;
(statearr_46100_46258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46097 === (5))){
var state_46096__$1 = state_46096;
var statearr_46101_46259 = state_46096__$1;
(statearr_46101_46259[(2)] = null);

(statearr_46101_46259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46097 === (6))){
var state_46096__$1 = state_46096;
var statearr_46102_46260 = state_46096__$1;
(statearr_46102_46260[(2)] = null);

(statearr_46102_46260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46097 === (7))){
var inst_46092 = (state_46096[(2)]);
var state_46096__$1 = state_46096;
var statearr_46103_46261 = state_46096__$1;
(statearr_46103_46261[(2)] = inst_46092);

(statearr_46103_46261[(1)] = (3));


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
});})(__46252,c__18796__auto___46255,G__46083_46253,n__17674__auto___46251,jobs,results,process,async))
;
return ((function (__46252,switch__18775__auto__,c__18796__auto___46255,G__46083_46253,n__17674__auto___46251,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0 = (function (){
var statearr_46107 = [null,null,null,null,null,null,null];
(statearr_46107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__);

(statearr_46107[(1)] = (1));

return statearr_46107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1 = (function (state_46096){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_46096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e46108){if((e46108 instanceof Object)){
var ex__18779__auto__ = e46108;
var statearr_46109_46262 = state_46096;
(statearr_46109_46262[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46263 = state_46096;
state_46096 = G__46263;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = function(state_46096){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1.call(this,state_46096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__;
})()
;})(__46252,switch__18775__auto__,c__18796__auto___46255,G__46083_46253,n__17674__auto___46251,jobs,results,process,async))
})();
var state__18798__auto__ = (function (){var statearr_46110 = f__18797__auto__.call(null);
(statearr_46110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___46255);

return statearr_46110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(__46252,c__18796__auto___46255,G__46083_46253,n__17674__auto___46251,jobs,results,process,async))
);


break;
case "async":
var c__18796__auto___46264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46252,c__18796__auto___46264,G__46083_46253,n__17674__auto___46251,jobs,results,process,async){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (__46252,c__18796__auto___46264,G__46083_46253,n__17674__auto___46251,jobs,results,process,async){
return (function (state_46123){
var state_val_46124 = (state_46123[(1)]);
if((state_val_46124 === (1))){
var state_46123__$1 = state_46123;
var statearr_46125_46265 = state_46123__$1;
(statearr_46125_46265[(2)] = null);

(statearr_46125_46265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (2))){
var state_46123__$1 = state_46123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46123__$1,(4),jobs);
} else {
if((state_val_46124 === (3))){
var inst_46121 = (state_46123[(2)]);
var state_46123__$1 = state_46123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46123__$1,inst_46121);
} else {
if((state_val_46124 === (4))){
var inst_46113 = (state_46123[(2)]);
var inst_46114 = async.call(null,inst_46113);
var state_46123__$1 = state_46123;
if(cljs.core.truth_(inst_46114)){
var statearr_46126_46266 = state_46123__$1;
(statearr_46126_46266[(1)] = (5));

} else {
var statearr_46127_46267 = state_46123__$1;
(statearr_46127_46267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (5))){
var state_46123__$1 = state_46123;
var statearr_46128_46268 = state_46123__$1;
(statearr_46128_46268[(2)] = null);

(statearr_46128_46268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (6))){
var state_46123__$1 = state_46123;
var statearr_46129_46269 = state_46123__$1;
(statearr_46129_46269[(2)] = null);

(statearr_46129_46269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46124 === (7))){
var inst_46119 = (state_46123[(2)]);
var state_46123__$1 = state_46123;
var statearr_46130_46270 = state_46123__$1;
(statearr_46130_46270[(2)] = inst_46119);

(statearr_46130_46270[(1)] = (3));


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
});})(__46252,c__18796__auto___46264,G__46083_46253,n__17674__auto___46251,jobs,results,process,async))
;
return ((function (__46252,switch__18775__auto__,c__18796__auto___46264,G__46083_46253,n__17674__auto___46251,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0 = (function (){
var statearr_46134 = [null,null,null,null,null,null,null];
(statearr_46134[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__);

(statearr_46134[(1)] = (1));

return statearr_46134;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1 = (function (state_46123){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_46123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e46135){if((e46135 instanceof Object)){
var ex__18779__auto__ = e46135;
var statearr_46136_46271 = state_46123;
(statearr_46136_46271[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46272 = state_46123;
state_46123 = G__46272;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = function(state_46123){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1.call(this,state_46123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__;
})()
;})(__46252,switch__18775__auto__,c__18796__auto___46264,G__46083_46253,n__17674__auto___46251,jobs,results,process,async))
})();
var state__18798__auto__ = (function (){var statearr_46137 = f__18797__auto__.call(null);
(statearr_46137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___46264);

return statearr_46137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(__46252,c__18796__auto___46264,G__46083_46253,n__17674__auto___46251,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__46273 = (__46252 + (1));
__46252 = G__46273;
continue;
} else {
}
break;
}

var c__18796__auto___46274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___46274,jobs,results,process,async){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___46274,jobs,results,process,async){
return (function (state_46159){
var state_val_46160 = (state_46159[(1)]);
if((state_val_46160 === (1))){
var state_46159__$1 = state_46159;
var statearr_46161_46275 = state_46159__$1;
(statearr_46161_46275[(2)] = null);

(statearr_46161_46275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (2))){
var state_46159__$1 = state_46159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46159__$1,(4),from);
} else {
if((state_val_46160 === (3))){
var inst_46157 = (state_46159[(2)]);
var state_46159__$1 = state_46159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46159__$1,inst_46157);
} else {
if((state_val_46160 === (4))){
var inst_46140 = (state_46159[(7)]);
var inst_46140__$1 = (state_46159[(2)]);
var inst_46141 = (inst_46140__$1 == null);
var state_46159__$1 = (function (){var statearr_46162 = state_46159;
(statearr_46162[(7)] = inst_46140__$1);

return statearr_46162;
})();
if(cljs.core.truth_(inst_46141)){
var statearr_46163_46276 = state_46159__$1;
(statearr_46163_46276[(1)] = (5));

} else {
var statearr_46164_46277 = state_46159__$1;
(statearr_46164_46277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (5))){
var inst_46143 = cljs.core.async.close_BANG_.call(null,jobs);
var state_46159__$1 = state_46159;
var statearr_46165_46278 = state_46159__$1;
(statearr_46165_46278[(2)] = inst_46143);

(statearr_46165_46278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (6))){
var inst_46145 = (state_46159[(8)]);
var inst_46140 = (state_46159[(7)]);
var inst_46145__$1 = cljs.core.async.chan.call(null,(1));
var inst_46146 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46147 = [inst_46140,inst_46145__$1];
var inst_46148 = (new cljs.core.PersistentVector(null,2,(5),inst_46146,inst_46147,null));
var state_46159__$1 = (function (){var statearr_46166 = state_46159;
(statearr_46166[(8)] = inst_46145__$1);

return statearr_46166;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46159__$1,(8),jobs,inst_46148);
} else {
if((state_val_46160 === (7))){
var inst_46155 = (state_46159[(2)]);
var state_46159__$1 = state_46159;
var statearr_46167_46279 = state_46159__$1;
(statearr_46167_46279[(2)] = inst_46155);

(statearr_46167_46279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46160 === (8))){
var inst_46145 = (state_46159[(8)]);
var inst_46150 = (state_46159[(2)]);
var state_46159__$1 = (function (){var statearr_46168 = state_46159;
(statearr_46168[(9)] = inst_46150);

return statearr_46168;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46159__$1,(9),results,inst_46145);
} else {
if((state_val_46160 === (9))){
var inst_46152 = (state_46159[(2)]);
var state_46159__$1 = (function (){var statearr_46169 = state_46159;
(statearr_46169[(10)] = inst_46152);

return statearr_46169;
})();
var statearr_46170_46280 = state_46159__$1;
(statearr_46170_46280[(2)] = null);

(statearr_46170_46280[(1)] = (2));


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
});})(c__18796__auto___46274,jobs,results,process,async))
;
return ((function (switch__18775__auto__,c__18796__auto___46274,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0 = (function (){
var statearr_46174 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__);

(statearr_46174[(1)] = (1));

return statearr_46174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1 = (function (state_46159){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_46159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e46175){if((e46175 instanceof Object)){
var ex__18779__auto__ = e46175;
var statearr_46176_46281 = state_46159;
(statearr_46176_46281[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46282 = state_46159;
state_46159 = G__46282;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = function(state_46159){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1.call(this,state_46159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___46274,jobs,results,process,async))
})();
var state__18798__auto__ = (function (){var statearr_46177 = f__18797__auto__.call(null);
(statearr_46177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___46274);

return statearr_46177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___46274,jobs,results,process,async))
);


var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__,jobs,results,process,async){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__,jobs,results,process,async){
return (function (state_46215){
var state_val_46216 = (state_46215[(1)]);
if((state_val_46216 === (7))){
var inst_46211 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
var statearr_46217_46283 = state_46215__$1;
(statearr_46217_46283[(2)] = inst_46211);

(statearr_46217_46283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (20))){
var state_46215__$1 = state_46215;
var statearr_46218_46284 = state_46215__$1;
(statearr_46218_46284[(2)] = null);

(statearr_46218_46284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (1))){
var state_46215__$1 = state_46215;
var statearr_46219_46285 = state_46215__$1;
(statearr_46219_46285[(2)] = null);

(statearr_46219_46285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (4))){
var inst_46180 = (state_46215[(7)]);
var inst_46180__$1 = (state_46215[(2)]);
var inst_46181 = (inst_46180__$1 == null);
var state_46215__$1 = (function (){var statearr_46220 = state_46215;
(statearr_46220[(7)] = inst_46180__$1);

return statearr_46220;
})();
if(cljs.core.truth_(inst_46181)){
var statearr_46221_46286 = state_46215__$1;
(statearr_46221_46286[(1)] = (5));

} else {
var statearr_46222_46287 = state_46215__$1;
(statearr_46222_46287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (15))){
var inst_46193 = (state_46215[(8)]);
var state_46215__$1 = state_46215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46215__$1,(18),to,inst_46193);
} else {
if((state_val_46216 === (21))){
var inst_46206 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
var statearr_46223_46288 = state_46215__$1;
(statearr_46223_46288[(2)] = inst_46206);

(statearr_46223_46288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (13))){
var inst_46208 = (state_46215[(2)]);
var state_46215__$1 = (function (){var statearr_46224 = state_46215;
(statearr_46224[(9)] = inst_46208);

return statearr_46224;
})();
var statearr_46225_46289 = state_46215__$1;
(statearr_46225_46289[(2)] = null);

(statearr_46225_46289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (6))){
var inst_46180 = (state_46215[(7)]);
var state_46215__$1 = state_46215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46215__$1,(11),inst_46180);
} else {
if((state_val_46216 === (17))){
var inst_46201 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
if(cljs.core.truth_(inst_46201)){
var statearr_46226_46290 = state_46215__$1;
(statearr_46226_46290[(1)] = (19));

} else {
var statearr_46227_46291 = state_46215__$1;
(statearr_46227_46291[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (3))){
var inst_46213 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46215__$1,inst_46213);
} else {
if((state_val_46216 === (12))){
var inst_46190 = (state_46215[(10)]);
var state_46215__$1 = state_46215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46215__$1,(14),inst_46190);
} else {
if((state_val_46216 === (2))){
var state_46215__$1 = state_46215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46215__$1,(4),results);
} else {
if((state_val_46216 === (19))){
var state_46215__$1 = state_46215;
var statearr_46228_46292 = state_46215__$1;
(statearr_46228_46292[(2)] = null);

(statearr_46228_46292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (11))){
var inst_46190 = (state_46215[(2)]);
var state_46215__$1 = (function (){var statearr_46229 = state_46215;
(statearr_46229[(10)] = inst_46190);

return statearr_46229;
})();
var statearr_46230_46293 = state_46215__$1;
(statearr_46230_46293[(2)] = null);

(statearr_46230_46293[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (9))){
var state_46215__$1 = state_46215;
var statearr_46231_46294 = state_46215__$1;
(statearr_46231_46294[(2)] = null);

(statearr_46231_46294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (5))){
var state_46215__$1 = state_46215;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46232_46295 = state_46215__$1;
(statearr_46232_46295[(1)] = (8));

} else {
var statearr_46233_46296 = state_46215__$1;
(statearr_46233_46296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (14))){
var inst_46195 = (state_46215[(11)]);
var inst_46193 = (state_46215[(8)]);
var inst_46193__$1 = (state_46215[(2)]);
var inst_46194 = (inst_46193__$1 == null);
var inst_46195__$1 = cljs.core.not.call(null,inst_46194);
var state_46215__$1 = (function (){var statearr_46234 = state_46215;
(statearr_46234[(11)] = inst_46195__$1);

(statearr_46234[(8)] = inst_46193__$1);

return statearr_46234;
})();
if(inst_46195__$1){
var statearr_46235_46297 = state_46215__$1;
(statearr_46235_46297[(1)] = (15));

} else {
var statearr_46236_46298 = state_46215__$1;
(statearr_46236_46298[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (16))){
var inst_46195 = (state_46215[(11)]);
var state_46215__$1 = state_46215;
var statearr_46237_46299 = state_46215__$1;
(statearr_46237_46299[(2)] = inst_46195);

(statearr_46237_46299[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (10))){
var inst_46187 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
var statearr_46238_46300 = state_46215__$1;
(statearr_46238_46300[(2)] = inst_46187);

(statearr_46238_46300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (18))){
var inst_46198 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
var statearr_46239_46301 = state_46215__$1;
(statearr_46239_46301[(2)] = inst_46198);

(statearr_46239_46301[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (8))){
var inst_46184 = cljs.core.async.close_BANG_.call(null,to);
var state_46215__$1 = state_46215;
var statearr_46240_46302 = state_46215__$1;
(statearr_46240_46302[(2)] = inst_46184);

(statearr_46240_46302[(1)] = (10));


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
});})(c__18796__auto__,jobs,results,process,async))
;
return ((function (switch__18775__auto__,c__18796__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0 = (function (){
var statearr_46244 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46244[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__);

(statearr_46244[(1)] = (1));

return statearr_46244;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1 = (function (state_46215){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_46215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e46245){if((e46245 instanceof Object)){
var ex__18779__auto__ = e46245;
var statearr_46246_46303 = state_46215;
(statearr_46246_46303[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46304 = state_46215;
state_46215 = G__46304;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = function(state_46215){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1.call(this,state_46215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__,jobs,results,process,async))
})();
var state__18798__auto__ = (function (){var statearr_46247 = f__18797__auto__.call(null);
(statearr_46247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_46247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__,jobs,results,process,async))
);

return c__18796__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args46305 = [];
var len__17829__auto___46308 = arguments.length;
var i__17830__auto___46309 = (0);
while(true){
if((i__17830__auto___46309 < len__17829__auto___46308)){
args46305.push((arguments[i__17830__auto___46309]));

var G__46310 = (i__17830__auto___46309 + (1));
i__17830__auto___46309 = G__46310;
continue;
} else {
}
break;
}

var G__46307 = args46305.length;
switch (G__46307) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46305.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args46312 = [];
var len__17829__auto___46315 = arguments.length;
var i__17830__auto___46316 = (0);
while(true){
if((i__17830__auto___46316 < len__17829__auto___46315)){
args46312.push((arguments[i__17830__auto___46316]));

var G__46317 = (i__17830__auto___46316 + (1));
i__17830__auto___46316 = G__46317;
continue;
} else {
}
break;
}

var G__46314 = args46312.length;
switch (G__46314) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46312.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args46319 = [];
var len__17829__auto___46372 = arguments.length;
var i__17830__auto___46373 = (0);
while(true){
if((i__17830__auto___46373 < len__17829__auto___46372)){
args46319.push((arguments[i__17830__auto___46373]));

var G__46374 = (i__17830__auto___46373 + (1));
i__17830__auto___46373 = G__46374;
continue;
} else {
}
break;
}

var G__46321 = args46319.length;
switch (G__46321) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46319.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18796__auto___46376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___46376,tc,fc){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___46376,tc,fc){
return (function (state_46347){
var state_val_46348 = (state_46347[(1)]);
if((state_val_46348 === (7))){
var inst_46343 = (state_46347[(2)]);
var state_46347__$1 = state_46347;
var statearr_46349_46377 = state_46347__$1;
(statearr_46349_46377[(2)] = inst_46343);

(statearr_46349_46377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (1))){
var state_46347__$1 = state_46347;
var statearr_46350_46378 = state_46347__$1;
(statearr_46350_46378[(2)] = null);

(statearr_46350_46378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (4))){
var inst_46324 = (state_46347[(7)]);
var inst_46324__$1 = (state_46347[(2)]);
var inst_46325 = (inst_46324__$1 == null);
var state_46347__$1 = (function (){var statearr_46351 = state_46347;
(statearr_46351[(7)] = inst_46324__$1);

return statearr_46351;
})();
if(cljs.core.truth_(inst_46325)){
var statearr_46352_46379 = state_46347__$1;
(statearr_46352_46379[(1)] = (5));

} else {
var statearr_46353_46380 = state_46347__$1;
(statearr_46353_46380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (13))){
var state_46347__$1 = state_46347;
var statearr_46354_46381 = state_46347__$1;
(statearr_46354_46381[(2)] = null);

(statearr_46354_46381[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (6))){
var inst_46324 = (state_46347[(7)]);
var inst_46330 = p.call(null,inst_46324);
var state_46347__$1 = state_46347;
if(cljs.core.truth_(inst_46330)){
var statearr_46355_46382 = state_46347__$1;
(statearr_46355_46382[(1)] = (9));

} else {
var statearr_46356_46383 = state_46347__$1;
(statearr_46356_46383[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (3))){
var inst_46345 = (state_46347[(2)]);
var state_46347__$1 = state_46347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46347__$1,inst_46345);
} else {
if((state_val_46348 === (12))){
var state_46347__$1 = state_46347;
var statearr_46357_46384 = state_46347__$1;
(statearr_46357_46384[(2)] = null);

(statearr_46357_46384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (2))){
var state_46347__$1 = state_46347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46347__$1,(4),ch);
} else {
if((state_val_46348 === (11))){
var inst_46324 = (state_46347[(7)]);
var inst_46334 = (state_46347[(2)]);
var state_46347__$1 = state_46347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46347__$1,(8),inst_46334,inst_46324);
} else {
if((state_val_46348 === (9))){
var state_46347__$1 = state_46347;
var statearr_46358_46385 = state_46347__$1;
(statearr_46358_46385[(2)] = tc);

(statearr_46358_46385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (5))){
var inst_46327 = cljs.core.async.close_BANG_.call(null,tc);
var inst_46328 = cljs.core.async.close_BANG_.call(null,fc);
var state_46347__$1 = (function (){var statearr_46359 = state_46347;
(statearr_46359[(8)] = inst_46327);

return statearr_46359;
})();
var statearr_46360_46386 = state_46347__$1;
(statearr_46360_46386[(2)] = inst_46328);

(statearr_46360_46386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (14))){
var inst_46341 = (state_46347[(2)]);
var state_46347__$1 = state_46347;
var statearr_46361_46387 = state_46347__$1;
(statearr_46361_46387[(2)] = inst_46341);

(statearr_46361_46387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (10))){
var state_46347__$1 = state_46347;
var statearr_46362_46388 = state_46347__$1;
(statearr_46362_46388[(2)] = fc);

(statearr_46362_46388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (8))){
var inst_46336 = (state_46347[(2)]);
var state_46347__$1 = state_46347;
if(cljs.core.truth_(inst_46336)){
var statearr_46363_46389 = state_46347__$1;
(statearr_46363_46389[(1)] = (12));

} else {
var statearr_46364_46390 = state_46347__$1;
(statearr_46364_46390[(1)] = (13));

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
});})(c__18796__auto___46376,tc,fc))
;
return ((function (switch__18775__auto__,c__18796__auto___46376,tc,fc){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_46368 = [null,null,null,null,null,null,null,null,null];
(statearr_46368[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_46368[(1)] = (1));

return statearr_46368;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_46347){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_46347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e46369){if((e46369 instanceof Object)){
var ex__18779__auto__ = e46369;
var statearr_46370_46391 = state_46347;
(statearr_46370_46391[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46392 = state_46347;
state_46347 = G__46392;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_46347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_46347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___46376,tc,fc))
})();
var state__18798__auto__ = (function (){var statearr_46371 = f__18797__auto__.call(null);
(statearr_46371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___46376);

return statearr_46371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___46376,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__){
return (function (state_46456){
var state_val_46457 = (state_46456[(1)]);
if((state_val_46457 === (7))){
var inst_46452 = (state_46456[(2)]);
var state_46456__$1 = state_46456;
var statearr_46458_46479 = state_46456__$1;
(statearr_46458_46479[(2)] = inst_46452);

(statearr_46458_46479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (1))){
var inst_46436 = init;
var state_46456__$1 = (function (){var statearr_46459 = state_46456;
(statearr_46459[(7)] = inst_46436);

return statearr_46459;
})();
var statearr_46460_46480 = state_46456__$1;
(statearr_46460_46480[(2)] = null);

(statearr_46460_46480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (4))){
var inst_46439 = (state_46456[(8)]);
var inst_46439__$1 = (state_46456[(2)]);
var inst_46440 = (inst_46439__$1 == null);
var state_46456__$1 = (function (){var statearr_46461 = state_46456;
(statearr_46461[(8)] = inst_46439__$1);

return statearr_46461;
})();
if(cljs.core.truth_(inst_46440)){
var statearr_46462_46481 = state_46456__$1;
(statearr_46462_46481[(1)] = (5));

} else {
var statearr_46463_46482 = state_46456__$1;
(statearr_46463_46482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (6))){
var inst_46436 = (state_46456[(7)]);
var inst_46439 = (state_46456[(8)]);
var inst_46443 = (state_46456[(9)]);
var inst_46443__$1 = f.call(null,inst_46436,inst_46439);
var inst_46444 = cljs.core.reduced_QMARK_.call(null,inst_46443__$1);
var state_46456__$1 = (function (){var statearr_46464 = state_46456;
(statearr_46464[(9)] = inst_46443__$1);

return statearr_46464;
})();
if(inst_46444){
var statearr_46465_46483 = state_46456__$1;
(statearr_46465_46483[(1)] = (8));

} else {
var statearr_46466_46484 = state_46456__$1;
(statearr_46466_46484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (3))){
var inst_46454 = (state_46456[(2)]);
var state_46456__$1 = state_46456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46456__$1,inst_46454);
} else {
if((state_val_46457 === (2))){
var state_46456__$1 = state_46456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46456__$1,(4),ch);
} else {
if((state_val_46457 === (9))){
var inst_46443 = (state_46456[(9)]);
var inst_46436 = inst_46443;
var state_46456__$1 = (function (){var statearr_46467 = state_46456;
(statearr_46467[(7)] = inst_46436);

return statearr_46467;
})();
var statearr_46468_46485 = state_46456__$1;
(statearr_46468_46485[(2)] = null);

(statearr_46468_46485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (5))){
var inst_46436 = (state_46456[(7)]);
var state_46456__$1 = state_46456;
var statearr_46469_46486 = state_46456__$1;
(statearr_46469_46486[(2)] = inst_46436);

(statearr_46469_46486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (10))){
var inst_46450 = (state_46456[(2)]);
var state_46456__$1 = state_46456;
var statearr_46470_46487 = state_46456__$1;
(statearr_46470_46487[(2)] = inst_46450);

(statearr_46470_46487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (8))){
var inst_46443 = (state_46456[(9)]);
var inst_46446 = cljs.core.deref.call(null,inst_46443);
var state_46456__$1 = state_46456;
var statearr_46471_46488 = state_46456__$1;
(statearr_46471_46488[(2)] = inst_46446);

(statearr_46471_46488[(1)] = (10));


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
});})(c__18796__auto__))
;
return ((function (switch__18775__auto__,c__18796__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18776__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18776__auto____0 = (function (){
var statearr_46475 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46475[(0)] = cljs$core$async$reduce_$_state_machine__18776__auto__);

(statearr_46475[(1)] = (1));

return statearr_46475;
});
var cljs$core$async$reduce_$_state_machine__18776__auto____1 = (function (state_46456){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_46456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e46476){if((e46476 instanceof Object)){
var ex__18779__auto__ = e46476;
var statearr_46477_46489 = state_46456;
(statearr_46477_46489[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46490 = state_46456;
state_46456 = G__46490;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18776__auto__ = function(state_46456){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18776__auto____1.call(this,state_46456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18776__auto____0;
cljs$core$async$reduce_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18776__auto____1;
return cljs$core$async$reduce_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__))
})();
var state__18798__auto__ = (function (){var statearr_46478 = f__18797__auto__.call(null);
(statearr_46478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_46478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__))
);

return c__18796__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args46491 = [];
var len__17829__auto___46543 = arguments.length;
var i__17830__auto___46544 = (0);
while(true){
if((i__17830__auto___46544 < len__17829__auto___46543)){
args46491.push((arguments[i__17830__auto___46544]));

var G__46545 = (i__17830__auto___46544 + (1));
i__17830__auto___46544 = G__46545;
continue;
} else {
}
break;
}

var G__46493 = args46491.length;
switch (G__46493) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46491.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__){
return (function (state_46518){
var state_val_46519 = (state_46518[(1)]);
if((state_val_46519 === (7))){
var inst_46500 = (state_46518[(2)]);
var state_46518__$1 = state_46518;
var statearr_46520_46547 = state_46518__$1;
(statearr_46520_46547[(2)] = inst_46500);

(statearr_46520_46547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46519 === (1))){
var inst_46494 = cljs.core.seq.call(null,coll);
var inst_46495 = inst_46494;
var state_46518__$1 = (function (){var statearr_46521 = state_46518;
(statearr_46521[(7)] = inst_46495);

return statearr_46521;
})();
var statearr_46522_46548 = state_46518__$1;
(statearr_46522_46548[(2)] = null);

(statearr_46522_46548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46519 === (4))){
var inst_46495 = (state_46518[(7)]);
var inst_46498 = cljs.core.first.call(null,inst_46495);
var state_46518__$1 = state_46518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46518__$1,(7),ch,inst_46498);
} else {
if((state_val_46519 === (13))){
var inst_46512 = (state_46518[(2)]);
var state_46518__$1 = state_46518;
var statearr_46523_46549 = state_46518__$1;
(statearr_46523_46549[(2)] = inst_46512);

(statearr_46523_46549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46519 === (6))){
var inst_46503 = (state_46518[(2)]);
var state_46518__$1 = state_46518;
if(cljs.core.truth_(inst_46503)){
var statearr_46524_46550 = state_46518__$1;
(statearr_46524_46550[(1)] = (8));

} else {
var statearr_46525_46551 = state_46518__$1;
(statearr_46525_46551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46519 === (3))){
var inst_46516 = (state_46518[(2)]);
var state_46518__$1 = state_46518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46518__$1,inst_46516);
} else {
if((state_val_46519 === (12))){
var state_46518__$1 = state_46518;
var statearr_46526_46552 = state_46518__$1;
(statearr_46526_46552[(2)] = null);

(statearr_46526_46552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46519 === (2))){
var inst_46495 = (state_46518[(7)]);
var state_46518__$1 = state_46518;
if(cljs.core.truth_(inst_46495)){
var statearr_46527_46553 = state_46518__$1;
(statearr_46527_46553[(1)] = (4));

} else {
var statearr_46528_46554 = state_46518__$1;
(statearr_46528_46554[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46519 === (11))){
var inst_46509 = cljs.core.async.close_BANG_.call(null,ch);
var state_46518__$1 = state_46518;
var statearr_46529_46555 = state_46518__$1;
(statearr_46529_46555[(2)] = inst_46509);

(statearr_46529_46555[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46519 === (9))){
var state_46518__$1 = state_46518;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46530_46556 = state_46518__$1;
(statearr_46530_46556[(1)] = (11));

} else {
var statearr_46531_46557 = state_46518__$1;
(statearr_46531_46557[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46519 === (5))){
var inst_46495 = (state_46518[(7)]);
var state_46518__$1 = state_46518;
var statearr_46532_46558 = state_46518__$1;
(statearr_46532_46558[(2)] = inst_46495);

(statearr_46532_46558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46519 === (10))){
var inst_46514 = (state_46518[(2)]);
var state_46518__$1 = state_46518;
var statearr_46533_46559 = state_46518__$1;
(statearr_46533_46559[(2)] = inst_46514);

(statearr_46533_46559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46519 === (8))){
var inst_46495 = (state_46518[(7)]);
var inst_46505 = cljs.core.next.call(null,inst_46495);
var inst_46495__$1 = inst_46505;
var state_46518__$1 = (function (){var statearr_46534 = state_46518;
(statearr_46534[(7)] = inst_46495__$1);

return statearr_46534;
})();
var statearr_46535_46560 = state_46518__$1;
(statearr_46535_46560[(2)] = null);

(statearr_46535_46560[(1)] = (2));


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
});})(c__18796__auto__))
;
return ((function (switch__18775__auto__,c__18796__auto__){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_46539 = [null,null,null,null,null,null,null,null];
(statearr_46539[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_46539[(1)] = (1));

return statearr_46539;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_46518){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_46518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e46540){if((e46540 instanceof Object)){
var ex__18779__auto__ = e46540;
var statearr_46541_46561 = state_46518;
(statearr_46541_46561[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46562 = state_46518;
state_46518 = G__46562;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_46518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_46518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__))
})();
var state__18798__auto__ = (function (){var statearr_46542 = f__18797__auto__.call(null);
(statearr_46542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_46542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__))
);

return c__18796__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17426__auto__ = (((_ == null))?null:_);
var m__17427__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,_);
} else {
var m__17427__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17427__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m);
} else {
var m__17427__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async46784 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46784 = (function (mult,ch,cs,meta46785){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta46785 = meta46785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46786,meta46785__$1){
var self__ = this;
var _46786__$1 = this;
return (new cljs.core.async.t_cljs$core$async46784(self__.mult,self__.ch,self__.cs,meta46785__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async46784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46786){
var self__ = this;
var _46786__$1 = this;
return self__.meta46785;
});})(cs))
;

cljs.core.async.t_cljs$core$async46784.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46784.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async46784.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async46784.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46784.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46784.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46784.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46785","meta46785",283575283,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async46784.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46784";

cljs.core.async.t_cljs$core$async46784.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async46784");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async46784 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async46784(mult__$1,ch__$1,cs__$1,meta46785){
return (new cljs.core.async.t_cljs$core$async46784(mult__$1,ch__$1,cs__$1,meta46785));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async46784(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18796__auto___47005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___47005,cs,m,dchan,dctr,done){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___47005,cs,m,dchan,dctr,done){
return (function (state_46917){
var state_val_46918 = (state_46917[(1)]);
if((state_val_46918 === (7))){
var inst_46913 = (state_46917[(2)]);
var state_46917__$1 = state_46917;
var statearr_46919_47006 = state_46917__$1;
(statearr_46919_47006[(2)] = inst_46913);

(statearr_46919_47006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (20))){
var inst_46818 = (state_46917[(7)]);
var inst_46828 = cljs.core.first.call(null,inst_46818);
var inst_46829 = cljs.core.nth.call(null,inst_46828,(0),null);
var inst_46830 = cljs.core.nth.call(null,inst_46828,(1),null);
var state_46917__$1 = (function (){var statearr_46920 = state_46917;
(statearr_46920[(8)] = inst_46829);

return statearr_46920;
})();
if(cljs.core.truth_(inst_46830)){
var statearr_46921_47007 = state_46917__$1;
(statearr_46921_47007[(1)] = (22));

} else {
var statearr_46922_47008 = state_46917__$1;
(statearr_46922_47008[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (27))){
var inst_46865 = (state_46917[(9)]);
var inst_46860 = (state_46917[(10)]);
var inst_46858 = (state_46917[(11)]);
var inst_46789 = (state_46917[(12)]);
var inst_46865__$1 = cljs.core._nth.call(null,inst_46858,inst_46860);
var inst_46866 = cljs.core.async.put_BANG_.call(null,inst_46865__$1,inst_46789,done);
var state_46917__$1 = (function (){var statearr_46923 = state_46917;
(statearr_46923[(9)] = inst_46865__$1);

return statearr_46923;
})();
if(cljs.core.truth_(inst_46866)){
var statearr_46924_47009 = state_46917__$1;
(statearr_46924_47009[(1)] = (30));

} else {
var statearr_46925_47010 = state_46917__$1;
(statearr_46925_47010[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (1))){
var state_46917__$1 = state_46917;
var statearr_46926_47011 = state_46917__$1;
(statearr_46926_47011[(2)] = null);

(statearr_46926_47011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (24))){
var inst_46818 = (state_46917[(7)]);
var inst_46835 = (state_46917[(2)]);
var inst_46836 = cljs.core.next.call(null,inst_46818);
var inst_46798 = inst_46836;
var inst_46799 = null;
var inst_46800 = (0);
var inst_46801 = (0);
var state_46917__$1 = (function (){var statearr_46927 = state_46917;
(statearr_46927[(13)] = inst_46800);

(statearr_46927[(14)] = inst_46798);

(statearr_46927[(15)] = inst_46835);

(statearr_46927[(16)] = inst_46799);

(statearr_46927[(17)] = inst_46801);

return statearr_46927;
})();
var statearr_46928_47012 = state_46917__$1;
(statearr_46928_47012[(2)] = null);

(statearr_46928_47012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (39))){
var state_46917__$1 = state_46917;
var statearr_46932_47013 = state_46917__$1;
(statearr_46932_47013[(2)] = null);

(statearr_46932_47013[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (4))){
var inst_46789 = (state_46917[(12)]);
var inst_46789__$1 = (state_46917[(2)]);
var inst_46790 = (inst_46789__$1 == null);
var state_46917__$1 = (function (){var statearr_46933 = state_46917;
(statearr_46933[(12)] = inst_46789__$1);

return statearr_46933;
})();
if(cljs.core.truth_(inst_46790)){
var statearr_46934_47014 = state_46917__$1;
(statearr_46934_47014[(1)] = (5));

} else {
var statearr_46935_47015 = state_46917__$1;
(statearr_46935_47015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (15))){
var inst_46800 = (state_46917[(13)]);
var inst_46798 = (state_46917[(14)]);
var inst_46799 = (state_46917[(16)]);
var inst_46801 = (state_46917[(17)]);
var inst_46814 = (state_46917[(2)]);
var inst_46815 = (inst_46801 + (1));
var tmp46929 = inst_46800;
var tmp46930 = inst_46798;
var tmp46931 = inst_46799;
var inst_46798__$1 = tmp46930;
var inst_46799__$1 = tmp46931;
var inst_46800__$1 = tmp46929;
var inst_46801__$1 = inst_46815;
var state_46917__$1 = (function (){var statearr_46936 = state_46917;
(statearr_46936[(13)] = inst_46800__$1);

(statearr_46936[(14)] = inst_46798__$1);

(statearr_46936[(18)] = inst_46814);

(statearr_46936[(16)] = inst_46799__$1);

(statearr_46936[(17)] = inst_46801__$1);

return statearr_46936;
})();
var statearr_46937_47016 = state_46917__$1;
(statearr_46937_47016[(2)] = null);

(statearr_46937_47016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (21))){
var inst_46839 = (state_46917[(2)]);
var state_46917__$1 = state_46917;
var statearr_46941_47017 = state_46917__$1;
(statearr_46941_47017[(2)] = inst_46839);

(statearr_46941_47017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (31))){
var inst_46865 = (state_46917[(9)]);
var inst_46869 = done.call(null,null);
var inst_46870 = cljs.core.async.untap_STAR_.call(null,m,inst_46865);
var state_46917__$1 = (function (){var statearr_46942 = state_46917;
(statearr_46942[(19)] = inst_46869);

return statearr_46942;
})();
var statearr_46943_47018 = state_46917__$1;
(statearr_46943_47018[(2)] = inst_46870);

(statearr_46943_47018[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (32))){
var inst_46857 = (state_46917[(20)]);
var inst_46860 = (state_46917[(10)]);
var inst_46858 = (state_46917[(11)]);
var inst_46859 = (state_46917[(21)]);
var inst_46872 = (state_46917[(2)]);
var inst_46873 = (inst_46860 + (1));
var tmp46938 = inst_46857;
var tmp46939 = inst_46858;
var tmp46940 = inst_46859;
var inst_46857__$1 = tmp46938;
var inst_46858__$1 = tmp46939;
var inst_46859__$1 = tmp46940;
var inst_46860__$1 = inst_46873;
var state_46917__$1 = (function (){var statearr_46944 = state_46917;
(statearr_46944[(20)] = inst_46857__$1);

(statearr_46944[(10)] = inst_46860__$1);

(statearr_46944[(11)] = inst_46858__$1);

(statearr_46944[(21)] = inst_46859__$1);

(statearr_46944[(22)] = inst_46872);

return statearr_46944;
})();
var statearr_46945_47019 = state_46917__$1;
(statearr_46945_47019[(2)] = null);

(statearr_46945_47019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (40))){
var inst_46885 = (state_46917[(23)]);
var inst_46889 = done.call(null,null);
var inst_46890 = cljs.core.async.untap_STAR_.call(null,m,inst_46885);
var state_46917__$1 = (function (){var statearr_46946 = state_46917;
(statearr_46946[(24)] = inst_46889);

return statearr_46946;
})();
var statearr_46947_47020 = state_46917__$1;
(statearr_46947_47020[(2)] = inst_46890);

(statearr_46947_47020[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (33))){
var inst_46876 = (state_46917[(25)]);
var inst_46878 = cljs.core.chunked_seq_QMARK_.call(null,inst_46876);
var state_46917__$1 = state_46917;
if(inst_46878){
var statearr_46948_47021 = state_46917__$1;
(statearr_46948_47021[(1)] = (36));

} else {
var statearr_46949_47022 = state_46917__$1;
(statearr_46949_47022[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (13))){
var inst_46808 = (state_46917[(26)]);
var inst_46811 = cljs.core.async.close_BANG_.call(null,inst_46808);
var state_46917__$1 = state_46917;
var statearr_46950_47023 = state_46917__$1;
(statearr_46950_47023[(2)] = inst_46811);

(statearr_46950_47023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (22))){
var inst_46829 = (state_46917[(8)]);
var inst_46832 = cljs.core.async.close_BANG_.call(null,inst_46829);
var state_46917__$1 = state_46917;
var statearr_46951_47024 = state_46917__$1;
(statearr_46951_47024[(2)] = inst_46832);

(statearr_46951_47024[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (36))){
var inst_46876 = (state_46917[(25)]);
var inst_46880 = cljs.core.chunk_first.call(null,inst_46876);
var inst_46881 = cljs.core.chunk_rest.call(null,inst_46876);
var inst_46882 = cljs.core.count.call(null,inst_46880);
var inst_46857 = inst_46881;
var inst_46858 = inst_46880;
var inst_46859 = inst_46882;
var inst_46860 = (0);
var state_46917__$1 = (function (){var statearr_46952 = state_46917;
(statearr_46952[(20)] = inst_46857);

(statearr_46952[(10)] = inst_46860);

(statearr_46952[(11)] = inst_46858);

(statearr_46952[(21)] = inst_46859);

return statearr_46952;
})();
var statearr_46953_47025 = state_46917__$1;
(statearr_46953_47025[(2)] = null);

(statearr_46953_47025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (41))){
var inst_46876 = (state_46917[(25)]);
var inst_46892 = (state_46917[(2)]);
var inst_46893 = cljs.core.next.call(null,inst_46876);
var inst_46857 = inst_46893;
var inst_46858 = null;
var inst_46859 = (0);
var inst_46860 = (0);
var state_46917__$1 = (function (){var statearr_46954 = state_46917;
(statearr_46954[(27)] = inst_46892);

(statearr_46954[(20)] = inst_46857);

(statearr_46954[(10)] = inst_46860);

(statearr_46954[(11)] = inst_46858);

(statearr_46954[(21)] = inst_46859);

return statearr_46954;
})();
var statearr_46955_47026 = state_46917__$1;
(statearr_46955_47026[(2)] = null);

(statearr_46955_47026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (43))){
var state_46917__$1 = state_46917;
var statearr_46956_47027 = state_46917__$1;
(statearr_46956_47027[(2)] = null);

(statearr_46956_47027[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (29))){
var inst_46901 = (state_46917[(2)]);
var state_46917__$1 = state_46917;
var statearr_46957_47028 = state_46917__$1;
(statearr_46957_47028[(2)] = inst_46901);

(statearr_46957_47028[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (44))){
var inst_46910 = (state_46917[(2)]);
var state_46917__$1 = (function (){var statearr_46958 = state_46917;
(statearr_46958[(28)] = inst_46910);

return statearr_46958;
})();
var statearr_46959_47029 = state_46917__$1;
(statearr_46959_47029[(2)] = null);

(statearr_46959_47029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (6))){
var inst_46849 = (state_46917[(29)]);
var inst_46848 = cljs.core.deref.call(null,cs);
var inst_46849__$1 = cljs.core.keys.call(null,inst_46848);
var inst_46850 = cljs.core.count.call(null,inst_46849__$1);
var inst_46851 = cljs.core.reset_BANG_.call(null,dctr,inst_46850);
var inst_46856 = cljs.core.seq.call(null,inst_46849__$1);
var inst_46857 = inst_46856;
var inst_46858 = null;
var inst_46859 = (0);
var inst_46860 = (0);
var state_46917__$1 = (function (){var statearr_46960 = state_46917;
(statearr_46960[(20)] = inst_46857);

(statearr_46960[(29)] = inst_46849__$1);

(statearr_46960[(30)] = inst_46851);

(statearr_46960[(10)] = inst_46860);

(statearr_46960[(11)] = inst_46858);

(statearr_46960[(21)] = inst_46859);

return statearr_46960;
})();
var statearr_46961_47030 = state_46917__$1;
(statearr_46961_47030[(2)] = null);

(statearr_46961_47030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (28))){
var inst_46857 = (state_46917[(20)]);
var inst_46876 = (state_46917[(25)]);
var inst_46876__$1 = cljs.core.seq.call(null,inst_46857);
var state_46917__$1 = (function (){var statearr_46962 = state_46917;
(statearr_46962[(25)] = inst_46876__$1);

return statearr_46962;
})();
if(inst_46876__$1){
var statearr_46963_47031 = state_46917__$1;
(statearr_46963_47031[(1)] = (33));

} else {
var statearr_46964_47032 = state_46917__$1;
(statearr_46964_47032[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (25))){
var inst_46860 = (state_46917[(10)]);
var inst_46859 = (state_46917[(21)]);
var inst_46862 = (inst_46860 < inst_46859);
var inst_46863 = inst_46862;
var state_46917__$1 = state_46917;
if(cljs.core.truth_(inst_46863)){
var statearr_46965_47033 = state_46917__$1;
(statearr_46965_47033[(1)] = (27));

} else {
var statearr_46966_47034 = state_46917__$1;
(statearr_46966_47034[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (34))){
var state_46917__$1 = state_46917;
var statearr_46967_47035 = state_46917__$1;
(statearr_46967_47035[(2)] = null);

(statearr_46967_47035[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (17))){
var state_46917__$1 = state_46917;
var statearr_46968_47036 = state_46917__$1;
(statearr_46968_47036[(2)] = null);

(statearr_46968_47036[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (3))){
var inst_46915 = (state_46917[(2)]);
var state_46917__$1 = state_46917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46917__$1,inst_46915);
} else {
if((state_val_46918 === (12))){
var inst_46844 = (state_46917[(2)]);
var state_46917__$1 = state_46917;
var statearr_46969_47037 = state_46917__$1;
(statearr_46969_47037[(2)] = inst_46844);

(statearr_46969_47037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (2))){
var state_46917__$1 = state_46917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46917__$1,(4),ch);
} else {
if((state_val_46918 === (23))){
var state_46917__$1 = state_46917;
var statearr_46970_47038 = state_46917__$1;
(statearr_46970_47038[(2)] = null);

(statearr_46970_47038[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (35))){
var inst_46899 = (state_46917[(2)]);
var state_46917__$1 = state_46917;
var statearr_46971_47039 = state_46917__$1;
(statearr_46971_47039[(2)] = inst_46899);

(statearr_46971_47039[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (19))){
var inst_46818 = (state_46917[(7)]);
var inst_46822 = cljs.core.chunk_first.call(null,inst_46818);
var inst_46823 = cljs.core.chunk_rest.call(null,inst_46818);
var inst_46824 = cljs.core.count.call(null,inst_46822);
var inst_46798 = inst_46823;
var inst_46799 = inst_46822;
var inst_46800 = inst_46824;
var inst_46801 = (0);
var state_46917__$1 = (function (){var statearr_46972 = state_46917;
(statearr_46972[(13)] = inst_46800);

(statearr_46972[(14)] = inst_46798);

(statearr_46972[(16)] = inst_46799);

(statearr_46972[(17)] = inst_46801);

return statearr_46972;
})();
var statearr_46973_47040 = state_46917__$1;
(statearr_46973_47040[(2)] = null);

(statearr_46973_47040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (11))){
var inst_46818 = (state_46917[(7)]);
var inst_46798 = (state_46917[(14)]);
var inst_46818__$1 = cljs.core.seq.call(null,inst_46798);
var state_46917__$1 = (function (){var statearr_46974 = state_46917;
(statearr_46974[(7)] = inst_46818__$1);

return statearr_46974;
})();
if(inst_46818__$1){
var statearr_46975_47041 = state_46917__$1;
(statearr_46975_47041[(1)] = (16));

} else {
var statearr_46976_47042 = state_46917__$1;
(statearr_46976_47042[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (9))){
var inst_46846 = (state_46917[(2)]);
var state_46917__$1 = state_46917;
var statearr_46977_47043 = state_46917__$1;
(statearr_46977_47043[(2)] = inst_46846);

(statearr_46977_47043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (5))){
var inst_46796 = cljs.core.deref.call(null,cs);
var inst_46797 = cljs.core.seq.call(null,inst_46796);
var inst_46798 = inst_46797;
var inst_46799 = null;
var inst_46800 = (0);
var inst_46801 = (0);
var state_46917__$1 = (function (){var statearr_46978 = state_46917;
(statearr_46978[(13)] = inst_46800);

(statearr_46978[(14)] = inst_46798);

(statearr_46978[(16)] = inst_46799);

(statearr_46978[(17)] = inst_46801);

return statearr_46978;
})();
var statearr_46979_47044 = state_46917__$1;
(statearr_46979_47044[(2)] = null);

(statearr_46979_47044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (14))){
var state_46917__$1 = state_46917;
var statearr_46980_47045 = state_46917__$1;
(statearr_46980_47045[(2)] = null);

(statearr_46980_47045[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (45))){
var inst_46907 = (state_46917[(2)]);
var state_46917__$1 = state_46917;
var statearr_46981_47046 = state_46917__$1;
(statearr_46981_47046[(2)] = inst_46907);

(statearr_46981_47046[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (26))){
var inst_46849 = (state_46917[(29)]);
var inst_46903 = (state_46917[(2)]);
var inst_46904 = cljs.core.seq.call(null,inst_46849);
var state_46917__$1 = (function (){var statearr_46982 = state_46917;
(statearr_46982[(31)] = inst_46903);

return statearr_46982;
})();
if(inst_46904){
var statearr_46983_47047 = state_46917__$1;
(statearr_46983_47047[(1)] = (42));

} else {
var statearr_46984_47048 = state_46917__$1;
(statearr_46984_47048[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (16))){
var inst_46818 = (state_46917[(7)]);
var inst_46820 = cljs.core.chunked_seq_QMARK_.call(null,inst_46818);
var state_46917__$1 = state_46917;
if(inst_46820){
var statearr_46985_47049 = state_46917__$1;
(statearr_46985_47049[(1)] = (19));

} else {
var statearr_46986_47050 = state_46917__$1;
(statearr_46986_47050[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (38))){
var inst_46896 = (state_46917[(2)]);
var state_46917__$1 = state_46917;
var statearr_46987_47051 = state_46917__$1;
(statearr_46987_47051[(2)] = inst_46896);

(statearr_46987_47051[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (30))){
var state_46917__$1 = state_46917;
var statearr_46988_47052 = state_46917__$1;
(statearr_46988_47052[(2)] = null);

(statearr_46988_47052[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (10))){
var inst_46799 = (state_46917[(16)]);
var inst_46801 = (state_46917[(17)]);
var inst_46807 = cljs.core._nth.call(null,inst_46799,inst_46801);
var inst_46808 = cljs.core.nth.call(null,inst_46807,(0),null);
var inst_46809 = cljs.core.nth.call(null,inst_46807,(1),null);
var state_46917__$1 = (function (){var statearr_46989 = state_46917;
(statearr_46989[(26)] = inst_46808);

return statearr_46989;
})();
if(cljs.core.truth_(inst_46809)){
var statearr_46990_47053 = state_46917__$1;
(statearr_46990_47053[(1)] = (13));

} else {
var statearr_46991_47054 = state_46917__$1;
(statearr_46991_47054[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (18))){
var inst_46842 = (state_46917[(2)]);
var state_46917__$1 = state_46917;
var statearr_46992_47055 = state_46917__$1;
(statearr_46992_47055[(2)] = inst_46842);

(statearr_46992_47055[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (42))){
var state_46917__$1 = state_46917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46917__$1,(45),dchan);
} else {
if((state_val_46918 === (37))){
var inst_46876 = (state_46917[(25)]);
var inst_46885 = (state_46917[(23)]);
var inst_46789 = (state_46917[(12)]);
var inst_46885__$1 = cljs.core.first.call(null,inst_46876);
var inst_46886 = cljs.core.async.put_BANG_.call(null,inst_46885__$1,inst_46789,done);
var state_46917__$1 = (function (){var statearr_46993 = state_46917;
(statearr_46993[(23)] = inst_46885__$1);

return statearr_46993;
})();
if(cljs.core.truth_(inst_46886)){
var statearr_46994_47056 = state_46917__$1;
(statearr_46994_47056[(1)] = (39));

} else {
var statearr_46995_47057 = state_46917__$1;
(statearr_46995_47057[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46918 === (8))){
var inst_46800 = (state_46917[(13)]);
var inst_46801 = (state_46917[(17)]);
var inst_46803 = (inst_46801 < inst_46800);
var inst_46804 = inst_46803;
var state_46917__$1 = state_46917;
if(cljs.core.truth_(inst_46804)){
var statearr_46996_47058 = state_46917__$1;
(statearr_46996_47058[(1)] = (10));

} else {
var statearr_46997_47059 = state_46917__$1;
(statearr_46997_47059[(1)] = (11));

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
});})(c__18796__auto___47005,cs,m,dchan,dctr,done))
;
return ((function (switch__18775__auto__,c__18796__auto___47005,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18776__auto__ = null;
var cljs$core$async$mult_$_state_machine__18776__auto____0 = (function (){
var statearr_47001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47001[(0)] = cljs$core$async$mult_$_state_machine__18776__auto__);

(statearr_47001[(1)] = (1));

return statearr_47001;
});
var cljs$core$async$mult_$_state_machine__18776__auto____1 = (function (state_46917){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_46917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e47002){if((e47002 instanceof Object)){
var ex__18779__auto__ = e47002;
var statearr_47003_47060 = state_46917;
(statearr_47003_47060[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47061 = state_46917;
state_46917 = G__47061;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18776__auto__ = function(state_46917){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18776__auto____1.call(this,state_46917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18776__auto____0;
cljs$core$async$mult_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18776__auto____1;
return cljs$core$async$mult_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___47005,cs,m,dchan,dctr,done))
})();
var state__18798__auto__ = (function (){var statearr_47004 = f__18797__auto__.call(null);
(statearr_47004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___47005);

return statearr_47004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___47005,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args47062 = [];
var len__17829__auto___47065 = arguments.length;
var i__17830__auto___47066 = (0);
while(true){
if((i__17830__auto___47066 < len__17829__auto___47065)){
args47062.push((arguments[i__17830__auto___47066]));

var G__47067 = (i__17830__auto___47066 + (1));
i__17830__auto___47066 = G__47067;
continue;
} else {
}
break;
}

var G__47064 = args47062.length;
switch (G__47064) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47062.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m);
} else {
var m__17427__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,state_map);
} else {
var m__17427__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,mode);
} else {
var m__17427__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17836__auto__ = [];
var len__17829__auto___47079 = arguments.length;
var i__17830__auto___47080 = (0);
while(true){
if((i__17830__auto___47080 < len__17829__auto___47079)){
args__17836__auto__.push((arguments[i__17830__auto___47080]));

var G__47081 = (i__17830__auto___47080 + (1));
i__17830__auto___47080 = G__47081;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((3) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17837__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47073){
var map__47074 = p__47073;
var map__47074__$1 = ((((!((map__47074 == null)))?((((map__47074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47074):map__47074);
var opts = map__47074__$1;
var statearr_47076_47082 = state;
(statearr_47076_47082[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__47074,map__47074__$1,opts){
return (function (val){
var statearr_47077_47083 = state;
(statearr_47077_47083[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__47074,map__47074__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_47078_47084 = state;
(statearr_47078_47084[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47069){
var G__47070 = cljs.core.first.call(null,seq47069);
var seq47069__$1 = cljs.core.next.call(null,seq47069);
var G__47071 = cljs.core.first.call(null,seq47069__$1);
var seq47069__$2 = cljs.core.next.call(null,seq47069__$1);
var G__47072 = cljs.core.first.call(null,seq47069__$2);
var seq47069__$3 = cljs.core.next.call(null,seq47069__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47070,G__47071,G__47072,seq47069__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async47248 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47248 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47249){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47249 = meta47249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47250,meta47249__$1){
var self__ = this;
var _47250__$1 = this;
return (new cljs.core.async.t_cljs$core$async47248(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47249__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47248.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47250){
var self__ = this;
var _47250__$1 = this;
return self__.meta47249;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47248.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async47248.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47248.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async47248.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47248.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47248.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47248.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47248.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47248.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47249","meta47249",-1112164570,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47248.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47248";

cljs.core.async.t_cljs$core$async47248.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async47248");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async47248 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47248(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47249){
return (new cljs.core.async.t_cljs$core$async47248(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47249));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47248(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18796__auto___47411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___47411,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___47411,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47348){
var state_val_47349 = (state_47348[(1)]);
if((state_val_47349 === (7))){
var inst_47266 = (state_47348[(2)]);
var state_47348__$1 = state_47348;
var statearr_47350_47412 = state_47348__$1;
(statearr_47350_47412[(2)] = inst_47266);

(statearr_47350_47412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (20))){
var inst_47278 = (state_47348[(7)]);
var state_47348__$1 = state_47348;
var statearr_47351_47413 = state_47348__$1;
(statearr_47351_47413[(2)] = inst_47278);

(statearr_47351_47413[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (27))){
var state_47348__$1 = state_47348;
var statearr_47352_47414 = state_47348__$1;
(statearr_47352_47414[(2)] = null);

(statearr_47352_47414[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (1))){
var inst_47254 = (state_47348[(8)]);
var inst_47254__$1 = calc_state.call(null);
var inst_47256 = (inst_47254__$1 == null);
var inst_47257 = cljs.core.not.call(null,inst_47256);
var state_47348__$1 = (function (){var statearr_47353 = state_47348;
(statearr_47353[(8)] = inst_47254__$1);

return statearr_47353;
})();
if(inst_47257){
var statearr_47354_47415 = state_47348__$1;
(statearr_47354_47415[(1)] = (2));

} else {
var statearr_47355_47416 = state_47348__$1;
(statearr_47355_47416[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (24))){
var inst_47301 = (state_47348[(9)]);
var inst_47308 = (state_47348[(10)]);
var inst_47322 = (state_47348[(11)]);
var inst_47322__$1 = inst_47301.call(null,inst_47308);
var state_47348__$1 = (function (){var statearr_47356 = state_47348;
(statearr_47356[(11)] = inst_47322__$1);

return statearr_47356;
})();
if(cljs.core.truth_(inst_47322__$1)){
var statearr_47357_47417 = state_47348__$1;
(statearr_47357_47417[(1)] = (29));

} else {
var statearr_47358_47418 = state_47348__$1;
(statearr_47358_47418[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (4))){
var inst_47269 = (state_47348[(2)]);
var state_47348__$1 = state_47348;
if(cljs.core.truth_(inst_47269)){
var statearr_47359_47419 = state_47348__$1;
(statearr_47359_47419[(1)] = (8));

} else {
var statearr_47360_47420 = state_47348__$1;
(statearr_47360_47420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (15))){
var inst_47295 = (state_47348[(2)]);
var state_47348__$1 = state_47348;
if(cljs.core.truth_(inst_47295)){
var statearr_47361_47421 = state_47348__$1;
(statearr_47361_47421[(1)] = (19));

} else {
var statearr_47362_47422 = state_47348__$1;
(statearr_47362_47422[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (21))){
var inst_47300 = (state_47348[(12)]);
var inst_47300__$1 = (state_47348[(2)]);
var inst_47301 = cljs.core.get.call(null,inst_47300__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47302 = cljs.core.get.call(null,inst_47300__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47303 = cljs.core.get.call(null,inst_47300__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47348__$1 = (function (){var statearr_47363 = state_47348;
(statearr_47363[(13)] = inst_47302);

(statearr_47363[(9)] = inst_47301);

(statearr_47363[(12)] = inst_47300__$1);

return statearr_47363;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_47348__$1,(22),inst_47303);
} else {
if((state_val_47349 === (31))){
var inst_47330 = (state_47348[(2)]);
var state_47348__$1 = state_47348;
if(cljs.core.truth_(inst_47330)){
var statearr_47364_47423 = state_47348__$1;
(statearr_47364_47423[(1)] = (32));

} else {
var statearr_47365_47424 = state_47348__$1;
(statearr_47365_47424[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (32))){
var inst_47307 = (state_47348[(14)]);
var state_47348__$1 = state_47348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47348__$1,(35),out,inst_47307);
} else {
if((state_val_47349 === (33))){
var inst_47300 = (state_47348[(12)]);
var inst_47278 = inst_47300;
var state_47348__$1 = (function (){var statearr_47366 = state_47348;
(statearr_47366[(7)] = inst_47278);

return statearr_47366;
})();
var statearr_47367_47425 = state_47348__$1;
(statearr_47367_47425[(2)] = null);

(statearr_47367_47425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (13))){
var inst_47278 = (state_47348[(7)]);
var inst_47285 = inst_47278.cljs$lang$protocol_mask$partition0$;
var inst_47286 = (inst_47285 & (64));
var inst_47287 = inst_47278.cljs$core$ISeq$;
var inst_47288 = (inst_47286) || (inst_47287);
var state_47348__$1 = state_47348;
if(cljs.core.truth_(inst_47288)){
var statearr_47368_47426 = state_47348__$1;
(statearr_47368_47426[(1)] = (16));

} else {
var statearr_47369_47427 = state_47348__$1;
(statearr_47369_47427[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (22))){
var inst_47308 = (state_47348[(10)]);
var inst_47307 = (state_47348[(14)]);
var inst_47306 = (state_47348[(2)]);
var inst_47307__$1 = cljs.core.nth.call(null,inst_47306,(0),null);
var inst_47308__$1 = cljs.core.nth.call(null,inst_47306,(1),null);
var inst_47309 = (inst_47307__$1 == null);
var inst_47310 = cljs.core._EQ_.call(null,inst_47308__$1,change);
var inst_47311 = (inst_47309) || (inst_47310);
var state_47348__$1 = (function (){var statearr_47370 = state_47348;
(statearr_47370[(10)] = inst_47308__$1);

(statearr_47370[(14)] = inst_47307__$1);

return statearr_47370;
})();
if(cljs.core.truth_(inst_47311)){
var statearr_47371_47428 = state_47348__$1;
(statearr_47371_47428[(1)] = (23));

} else {
var statearr_47372_47429 = state_47348__$1;
(statearr_47372_47429[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (36))){
var inst_47300 = (state_47348[(12)]);
var inst_47278 = inst_47300;
var state_47348__$1 = (function (){var statearr_47373 = state_47348;
(statearr_47373[(7)] = inst_47278);

return statearr_47373;
})();
var statearr_47374_47430 = state_47348__$1;
(statearr_47374_47430[(2)] = null);

(statearr_47374_47430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (29))){
var inst_47322 = (state_47348[(11)]);
var state_47348__$1 = state_47348;
var statearr_47375_47431 = state_47348__$1;
(statearr_47375_47431[(2)] = inst_47322);

(statearr_47375_47431[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (6))){
var state_47348__$1 = state_47348;
var statearr_47376_47432 = state_47348__$1;
(statearr_47376_47432[(2)] = false);

(statearr_47376_47432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (28))){
var inst_47318 = (state_47348[(2)]);
var inst_47319 = calc_state.call(null);
var inst_47278 = inst_47319;
var state_47348__$1 = (function (){var statearr_47377 = state_47348;
(statearr_47377[(15)] = inst_47318);

(statearr_47377[(7)] = inst_47278);

return statearr_47377;
})();
var statearr_47378_47433 = state_47348__$1;
(statearr_47378_47433[(2)] = null);

(statearr_47378_47433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (25))){
var inst_47344 = (state_47348[(2)]);
var state_47348__$1 = state_47348;
var statearr_47379_47434 = state_47348__$1;
(statearr_47379_47434[(2)] = inst_47344);

(statearr_47379_47434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (34))){
var inst_47342 = (state_47348[(2)]);
var state_47348__$1 = state_47348;
var statearr_47380_47435 = state_47348__$1;
(statearr_47380_47435[(2)] = inst_47342);

(statearr_47380_47435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (17))){
var state_47348__$1 = state_47348;
var statearr_47381_47436 = state_47348__$1;
(statearr_47381_47436[(2)] = false);

(statearr_47381_47436[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (3))){
var state_47348__$1 = state_47348;
var statearr_47382_47437 = state_47348__$1;
(statearr_47382_47437[(2)] = false);

(statearr_47382_47437[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (12))){
var inst_47346 = (state_47348[(2)]);
var state_47348__$1 = state_47348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47348__$1,inst_47346);
} else {
if((state_val_47349 === (2))){
var inst_47254 = (state_47348[(8)]);
var inst_47259 = inst_47254.cljs$lang$protocol_mask$partition0$;
var inst_47260 = (inst_47259 & (64));
var inst_47261 = inst_47254.cljs$core$ISeq$;
var inst_47262 = (inst_47260) || (inst_47261);
var state_47348__$1 = state_47348;
if(cljs.core.truth_(inst_47262)){
var statearr_47383_47438 = state_47348__$1;
(statearr_47383_47438[(1)] = (5));

} else {
var statearr_47384_47439 = state_47348__$1;
(statearr_47384_47439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (23))){
var inst_47307 = (state_47348[(14)]);
var inst_47313 = (inst_47307 == null);
var state_47348__$1 = state_47348;
if(cljs.core.truth_(inst_47313)){
var statearr_47385_47440 = state_47348__$1;
(statearr_47385_47440[(1)] = (26));

} else {
var statearr_47386_47441 = state_47348__$1;
(statearr_47386_47441[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (35))){
var inst_47333 = (state_47348[(2)]);
var state_47348__$1 = state_47348;
if(cljs.core.truth_(inst_47333)){
var statearr_47387_47442 = state_47348__$1;
(statearr_47387_47442[(1)] = (36));

} else {
var statearr_47388_47443 = state_47348__$1;
(statearr_47388_47443[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (19))){
var inst_47278 = (state_47348[(7)]);
var inst_47297 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47278);
var state_47348__$1 = state_47348;
var statearr_47389_47444 = state_47348__$1;
(statearr_47389_47444[(2)] = inst_47297);

(statearr_47389_47444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (11))){
var inst_47278 = (state_47348[(7)]);
var inst_47282 = (inst_47278 == null);
var inst_47283 = cljs.core.not.call(null,inst_47282);
var state_47348__$1 = state_47348;
if(inst_47283){
var statearr_47390_47445 = state_47348__$1;
(statearr_47390_47445[(1)] = (13));

} else {
var statearr_47391_47446 = state_47348__$1;
(statearr_47391_47446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (9))){
var inst_47254 = (state_47348[(8)]);
var state_47348__$1 = state_47348;
var statearr_47392_47447 = state_47348__$1;
(statearr_47392_47447[(2)] = inst_47254);

(statearr_47392_47447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (5))){
var state_47348__$1 = state_47348;
var statearr_47393_47448 = state_47348__$1;
(statearr_47393_47448[(2)] = true);

(statearr_47393_47448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (14))){
var state_47348__$1 = state_47348;
var statearr_47394_47449 = state_47348__$1;
(statearr_47394_47449[(2)] = false);

(statearr_47394_47449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (26))){
var inst_47308 = (state_47348[(10)]);
var inst_47315 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_47308);
var state_47348__$1 = state_47348;
var statearr_47395_47450 = state_47348__$1;
(statearr_47395_47450[(2)] = inst_47315);

(statearr_47395_47450[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (16))){
var state_47348__$1 = state_47348;
var statearr_47396_47451 = state_47348__$1;
(statearr_47396_47451[(2)] = true);

(statearr_47396_47451[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (38))){
var inst_47338 = (state_47348[(2)]);
var state_47348__$1 = state_47348;
var statearr_47397_47452 = state_47348__$1;
(statearr_47397_47452[(2)] = inst_47338);

(statearr_47397_47452[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (30))){
var inst_47302 = (state_47348[(13)]);
var inst_47301 = (state_47348[(9)]);
var inst_47308 = (state_47348[(10)]);
var inst_47325 = cljs.core.empty_QMARK_.call(null,inst_47301);
var inst_47326 = inst_47302.call(null,inst_47308);
var inst_47327 = cljs.core.not.call(null,inst_47326);
var inst_47328 = (inst_47325) && (inst_47327);
var state_47348__$1 = state_47348;
var statearr_47398_47453 = state_47348__$1;
(statearr_47398_47453[(2)] = inst_47328);

(statearr_47398_47453[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (10))){
var inst_47254 = (state_47348[(8)]);
var inst_47274 = (state_47348[(2)]);
var inst_47275 = cljs.core.get.call(null,inst_47274,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47276 = cljs.core.get.call(null,inst_47274,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47277 = cljs.core.get.call(null,inst_47274,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47278 = inst_47254;
var state_47348__$1 = (function (){var statearr_47399 = state_47348;
(statearr_47399[(16)] = inst_47277);

(statearr_47399[(17)] = inst_47276);

(statearr_47399[(18)] = inst_47275);

(statearr_47399[(7)] = inst_47278);

return statearr_47399;
})();
var statearr_47400_47454 = state_47348__$1;
(statearr_47400_47454[(2)] = null);

(statearr_47400_47454[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (18))){
var inst_47292 = (state_47348[(2)]);
var state_47348__$1 = state_47348;
var statearr_47401_47455 = state_47348__$1;
(statearr_47401_47455[(2)] = inst_47292);

(statearr_47401_47455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (37))){
var state_47348__$1 = state_47348;
var statearr_47402_47456 = state_47348__$1;
(statearr_47402_47456[(2)] = null);

(statearr_47402_47456[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47349 === (8))){
var inst_47254 = (state_47348[(8)]);
var inst_47271 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47254);
var state_47348__$1 = state_47348;
var statearr_47403_47457 = state_47348__$1;
(statearr_47403_47457[(2)] = inst_47271);

(statearr_47403_47457[(1)] = (10));


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
});})(c__18796__auto___47411,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18775__auto__,c__18796__auto___47411,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18776__auto__ = null;
var cljs$core$async$mix_$_state_machine__18776__auto____0 = (function (){
var statearr_47407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47407[(0)] = cljs$core$async$mix_$_state_machine__18776__auto__);

(statearr_47407[(1)] = (1));

return statearr_47407;
});
var cljs$core$async$mix_$_state_machine__18776__auto____1 = (function (state_47348){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_47348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e47408){if((e47408 instanceof Object)){
var ex__18779__auto__ = e47408;
var statearr_47409_47458 = state_47348;
(statearr_47409_47458[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47459 = state_47348;
state_47348 = G__47459;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18776__auto__ = function(state_47348){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18776__auto____1.call(this,state_47348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18776__auto____0;
cljs$core$async$mix_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18776__auto____1;
return cljs$core$async$mix_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___47411,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18798__auto__ = (function (){var statearr_47410 = f__18797__auto__.call(null);
(statearr_47410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___47411);

return statearr_47410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___47411,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17427__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args47460 = [];
var len__17829__auto___47463 = arguments.length;
var i__17830__auto___47464 = (0);
while(true){
if((i__17830__auto___47464 < len__17829__auto___47463)){
args47460.push((arguments[i__17830__auto___47464]));

var G__47465 = (i__17830__auto___47464 + (1));
i__17830__auto___47464 = G__47465;
continue;
} else {
}
break;
}

var G__47462 = args47460.length;
switch (G__47462) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47460.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args47468 = [];
var len__17829__auto___47593 = arguments.length;
var i__17830__auto___47594 = (0);
while(true){
if((i__17830__auto___47594 < len__17829__auto___47593)){
args47468.push((arguments[i__17830__auto___47594]));

var G__47595 = (i__17830__auto___47594 + (1));
i__17830__auto___47594 = G__47595;
continue;
} else {
}
break;
}

var G__47470 = args47468.length;
switch (G__47470) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47468.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16771__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16771__auto__,mults){
return (function (p1__47467_SHARP_){
if(cljs.core.truth_(p1__47467_SHARP_.call(null,topic))){
return p1__47467_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__47467_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16771__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async47471 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47471 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47472){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47472 = meta47472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_47473,meta47472__$1){
var self__ = this;
var _47473__$1 = this;
return (new cljs.core.async.t_cljs$core$async47471(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47472__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47471.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_47473){
var self__ = this;
var _47473__$1 = this;
return self__.meta47472;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47471.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async47471.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47471.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async47471.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47471.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47471.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47471.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47471.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47472","meta47472",834740272,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47471.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47471";

cljs.core.async.t_cljs$core$async47471.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async47471");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async47471 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async47471(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47472){
return (new cljs.core.async.t_cljs$core$async47471(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47472));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async47471(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18796__auto___47597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___47597,mults,ensure_mult,p){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___47597,mults,ensure_mult,p){
return (function (state_47545){
var state_val_47546 = (state_47545[(1)]);
if((state_val_47546 === (7))){
var inst_47541 = (state_47545[(2)]);
var state_47545__$1 = state_47545;
var statearr_47547_47598 = state_47545__$1;
(statearr_47547_47598[(2)] = inst_47541);

(statearr_47547_47598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (20))){
var state_47545__$1 = state_47545;
var statearr_47548_47599 = state_47545__$1;
(statearr_47548_47599[(2)] = null);

(statearr_47548_47599[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (1))){
var state_47545__$1 = state_47545;
var statearr_47549_47600 = state_47545__$1;
(statearr_47549_47600[(2)] = null);

(statearr_47549_47600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (24))){
var inst_47524 = (state_47545[(7)]);
var inst_47533 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_47524);
var state_47545__$1 = state_47545;
var statearr_47550_47601 = state_47545__$1;
(statearr_47550_47601[(2)] = inst_47533);

(statearr_47550_47601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (4))){
var inst_47476 = (state_47545[(8)]);
var inst_47476__$1 = (state_47545[(2)]);
var inst_47477 = (inst_47476__$1 == null);
var state_47545__$1 = (function (){var statearr_47551 = state_47545;
(statearr_47551[(8)] = inst_47476__$1);

return statearr_47551;
})();
if(cljs.core.truth_(inst_47477)){
var statearr_47552_47602 = state_47545__$1;
(statearr_47552_47602[(1)] = (5));

} else {
var statearr_47553_47603 = state_47545__$1;
(statearr_47553_47603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (15))){
var inst_47518 = (state_47545[(2)]);
var state_47545__$1 = state_47545;
var statearr_47554_47604 = state_47545__$1;
(statearr_47554_47604[(2)] = inst_47518);

(statearr_47554_47604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (21))){
var inst_47538 = (state_47545[(2)]);
var state_47545__$1 = (function (){var statearr_47555 = state_47545;
(statearr_47555[(9)] = inst_47538);

return statearr_47555;
})();
var statearr_47556_47605 = state_47545__$1;
(statearr_47556_47605[(2)] = null);

(statearr_47556_47605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (13))){
var inst_47500 = (state_47545[(10)]);
var inst_47502 = cljs.core.chunked_seq_QMARK_.call(null,inst_47500);
var state_47545__$1 = state_47545;
if(inst_47502){
var statearr_47557_47606 = state_47545__$1;
(statearr_47557_47606[(1)] = (16));

} else {
var statearr_47558_47607 = state_47545__$1;
(statearr_47558_47607[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (22))){
var inst_47530 = (state_47545[(2)]);
var state_47545__$1 = state_47545;
if(cljs.core.truth_(inst_47530)){
var statearr_47559_47608 = state_47545__$1;
(statearr_47559_47608[(1)] = (23));

} else {
var statearr_47560_47609 = state_47545__$1;
(statearr_47560_47609[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (6))){
var inst_47476 = (state_47545[(8)]);
var inst_47524 = (state_47545[(7)]);
var inst_47526 = (state_47545[(11)]);
var inst_47524__$1 = topic_fn.call(null,inst_47476);
var inst_47525 = cljs.core.deref.call(null,mults);
var inst_47526__$1 = cljs.core.get.call(null,inst_47525,inst_47524__$1);
var state_47545__$1 = (function (){var statearr_47561 = state_47545;
(statearr_47561[(7)] = inst_47524__$1);

(statearr_47561[(11)] = inst_47526__$1);

return statearr_47561;
})();
if(cljs.core.truth_(inst_47526__$1)){
var statearr_47562_47610 = state_47545__$1;
(statearr_47562_47610[(1)] = (19));

} else {
var statearr_47563_47611 = state_47545__$1;
(statearr_47563_47611[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (25))){
var inst_47535 = (state_47545[(2)]);
var state_47545__$1 = state_47545;
var statearr_47564_47612 = state_47545__$1;
(statearr_47564_47612[(2)] = inst_47535);

(statearr_47564_47612[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (17))){
var inst_47500 = (state_47545[(10)]);
var inst_47509 = cljs.core.first.call(null,inst_47500);
var inst_47510 = cljs.core.async.muxch_STAR_.call(null,inst_47509);
var inst_47511 = cljs.core.async.close_BANG_.call(null,inst_47510);
var inst_47512 = cljs.core.next.call(null,inst_47500);
var inst_47486 = inst_47512;
var inst_47487 = null;
var inst_47488 = (0);
var inst_47489 = (0);
var state_47545__$1 = (function (){var statearr_47565 = state_47545;
(statearr_47565[(12)] = inst_47489);

(statearr_47565[(13)] = inst_47486);

(statearr_47565[(14)] = inst_47488);

(statearr_47565[(15)] = inst_47487);

(statearr_47565[(16)] = inst_47511);

return statearr_47565;
})();
var statearr_47566_47613 = state_47545__$1;
(statearr_47566_47613[(2)] = null);

(statearr_47566_47613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (3))){
var inst_47543 = (state_47545[(2)]);
var state_47545__$1 = state_47545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47545__$1,inst_47543);
} else {
if((state_val_47546 === (12))){
var inst_47520 = (state_47545[(2)]);
var state_47545__$1 = state_47545;
var statearr_47567_47614 = state_47545__$1;
(statearr_47567_47614[(2)] = inst_47520);

(statearr_47567_47614[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (2))){
var state_47545__$1 = state_47545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47545__$1,(4),ch);
} else {
if((state_val_47546 === (23))){
var state_47545__$1 = state_47545;
var statearr_47568_47615 = state_47545__$1;
(statearr_47568_47615[(2)] = null);

(statearr_47568_47615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (19))){
var inst_47476 = (state_47545[(8)]);
var inst_47526 = (state_47545[(11)]);
var inst_47528 = cljs.core.async.muxch_STAR_.call(null,inst_47526);
var state_47545__$1 = state_47545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47545__$1,(22),inst_47528,inst_47476);
} else {
if((state_val_47546 === (11))){
var inst_47500 = (state_47545[(10)]);
var inst_47486 = (state_47545[(13)]);
var inst_47500__$1 = cljs.core.seq.call(null,inst_47486);
var state_47545__$1 = (function (){var statearr_47569 = state_47545;
(statearr_47569[(10)] = inst_47500__$1);

return statearr_47569;
})();
if(inst_47500__$1){
var statearr_47570_47616 = state_47545__$1;
(statearr_47570_47616[(1)] = (13));

} else {
var statearr_47571_47617 = state_47545__$1;
(statearr_47571_47617[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (9))){
var inst_47522 = (state_47545[(2)]);
var state_47545__$1 = state_47545;
var statearr_47572_47618 = state_47545__$1;
(statearr_47572_47618[(2)] = inst_47522);

(statearr_47572_47618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (5))){
var inst_47483 = cljs.core.deref.call(null,mults);
var inst_47484 = cljs.core.vals.call(null,inst_47483);
var inst_47485 = cljs.core.seq.call(null,inst_47484);
var inst_47486 = inst_47485;
var inst_47487 = null;
var inst_47488 = (0);
var inst_47489 = (0);
var state_47545__$1 = (function (){var statearr_47573 = state_47545;
(statearr_47573[(12)] = inst_47489);

(statearr_47573[(13)] = inst_47486);

(statearr_47573[(14)] = inst_47488);

(statearr_47573[(15)] = inst_47487);

return statearr_47573;
})();
var statearr_47574_47619 = state_47545__$1;
(statearr_47574_47619[(2)] = null);

(statearr_47574_47619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (14))){
var state_47545__$1 = state_47545;
var statearr_47578_47620 = state_47545__$1;
(statearr_47578_47620[(2)] = null);

(statearr_47578_47620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (16))){
var inst_47500 = (state_47545[(10)]);
var inst_47504 = cljs.core.chunk_first.call(null,inst_47500);
var inst_47505 = cljs.core.chunk_rest.call(null,inst_47500);
var inst_47506 = cljs.core.count.call(null,inst_47504);
var inst_47486 = inst_47505;
var inst_47487 = inst_47504;
var inst_47488 = inst_47506;
var inst_47489 = (0);
var state_47545__$1 = (function (){var statearr_47579 = state_47545;
(statearr_47579[(12)] = inst_47489);

(statearr_47579[(13)] = inst_47486);

(statearr_47579[(14)] = inst_47488);

(statearr_47579[(15)] = inst_47487);

return statearr_47579;
})();
var statearr_47580_47621 = state_47545__$1;
(statearr_47580_47621[(2)] = null);

(statearr_47580_47621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (10))){
var inst_47489 = (state_47545[(12)]);
var inst_47486 = (state_47545[(13)]);
var inst_47488 = (state_47545[(14)]);
var inst_47487 = (state_47545[(15)]);
var inst_47494 = cljs.core._nth.call(null,inst_47487,inst_47489);
var inst_47495 = cljs.core.async.muxch_STAR_.call(null,inst_47494);
var inst_47496 = cljs.core.async.close_BANG_.call(null,inst_47495);
var inst_47497 = (inst_47489 + (1));
var tmp47575 = inst_47486;
var tmp47576 = inst_47488;
var tmp47577 = inst_47487;
var inst_47486__$1 = tmp47575;
var inst_47487__$1 = tmp47577;
var inst_47488__$1 = tmp47576;
var inst_47489__$1 = inst_47497;
var state_47545__$1 = (function (){var statearr_47581 = state_47545;
(statearr_47581[(17)] = inst_47496);

(statearr_47581[(12)] = inst_47489__$1);

(statearr_47581[(13)] = inst_47486__$1);

(statearr_47581[(14)] = inst_47488__$1);

(statearr_47581[(15)] = inst_47487__$1);

return statearr_47581;
})();
var statearr_47582_47622 = state_47545__$1;
(statearr_47582_47622[(2)] = null);

(statearr_47582_47622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (18))){
var inst_47515 = (state_47545[(2)]);
var state_47545__$1 = state_47545;
var statearr_47583_47623 = state_47545__$1;
(statearr_47583_47623[(2)] = inst_47515);

(statearr_47583_47623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47546 === (8))){
var inst_47489 = (state_47545[(12)]);
var inst_47488 = (state_47545[(14)]);
var inst_47491 = (inst_47489 < inst_47488);
var inst_47492 = inst_47491;
var state_47545__$1 = state_47545;
if(cljs.core.truth_(inst_47492)){
var statearr_47584_47624 = state_47545__$1;
(statearr_47584_47624[(1)] = (10));

} else {
var statearr_47585_47625 = state_47545__$1;
(statearr_47585_47625[(1)] = (11));

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
});})(c__18796__auto___47597,mults,ensure_mult,p))
;
return ((function (switch__18775__auto__,c__18796__auto___47597,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_47589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47589[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_47589[(1)] = (1));

return statearr_47589;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_47545){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_47545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e47590){if((e47590 instanceof Object)){
var ex__18779__auto__ = e47590;
var statearr_47591_47626 = state_47545;
(statearr_47591_47626[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47627 = state_47545;
state_47545 = G__47627;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_47545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_47545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___47597,mults,ensure_mult,p))
})();
var state__18798__auto__ = (function (){var statearr_47592 = f__18797__auto__.call(null);
(statearr_47592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___47597);

return statearr_47592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___47597,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args47628 = [];
var len__17829__auto___47631 = arguments.length;
var i__17830__auto___47632 = (0);
while(true){
if((i__17830__auto___47632 < len__17829__auto___47631)){
args47628.push((arguments[i__17830__auto___47632]));

var G__47633 = (i__17830__auto___47632 + (1));
i__17830__auto___47632 = G__47633;
continue;
} else {
}
break;
}

var G__47630 = args47628.length;
switch (G__47630) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47628.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args47635 = [];
var len__17829__auto___47638 = arguments.length;
var i__17830__auto___47639 = (0);
while(true){
if((i__17830__auto___47639 < len__17829__auto___47638)){
args47635.push((arguments[i__17830__auto___47639]));

var G__47640 = (i__17830__auto___47639 + (1));
i__17830__auto___47639 = G__47640;
continue;
} else {
}
break;
}

var G__47637 = args47635.length;
switch (G__47637) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47635.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args47642 = [];
var len__17829__auto___47713 = arguments.length;
var i__17830__auto___47714 = (0);
while(true){
if((i__17830__auto___47714 < len__17829__auto___47713)){
args47642.push((arguments[i__17830__auto___47714]));

var G__47715 = (i__17830__auto___47714 + (1));
i__17830__auto___47714 = G__47715;
continue;
} else {
}
break;
}

var G__47644 = args47642.length;
switch (G__47644) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47642.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18796__auto___47717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___47717,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___47717,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_47683){
var state_val_47684 = (state_47683[(1)]);
if((state_val_47684 === (7))){
var state_47683__$1 = state_47683;
var statearr_47685_47718 = state_47683__$1;
(statearr_47685_47718[(2)] = null);

(statearr_47685_47718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (1))){
var state_47683__$1 = state_47683;
var statearr_47686_47719 = state_47683__$1;
(statearr_47686_47719[(2)] = null);

(statearr_47686_47719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (4))){
var inst_47647 = (state_47683[(7)]);
var inst_47649 = (inst_47647 < cnt);
var state_47683__$1 = state_47683;
if(cljs.core.truth_(inst_47649)){
var statearr_47687_47720 = state_47683__$1;
(statearr_47687_47720[(1)] = (6));

} else {
var statearr_47688_47721 = state_47683__$1;
(statearr_47688_47721[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (15))){
var inst_47679 = (state_47683[(2)]);
var state_47683__$1 = state_47683;
var statearr_47689_47722 = state_47683__$1;
(statearr_47689_47722[(2)] = inst_47679);

(statearr_47689_47722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (13))){
var inst_47672 = cljs.core.async.close_BANG_.call(null,out);
var state_47683__$1 = state_47683;
var statearr_47690_47723 = state_47683__$1;
(statearr_47690_47723[(2)] = inst_47672);

(statearr_47690_47723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (6))){
var state_47683__$1 = state_47683;
var statearr_47691_47724 = state_47683__$1;
(statearr_47691_47724[(2)] = null);

(statearr_47691_47724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (3))){
var inst_47681 = (state_47683[(2)]);
var state_47683__$1 = state_47683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47683__$1,inst_47681);
} else {
if((state_val_47684 === (12))){
var inst_47669 = (state_47683[(8)]);
var inst_47669__$1 = (state_47683[(2)]);
var inst_47670 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_47669__$1);
var state_47683__$1 = (function (){var statearr_47692 = state_47683;
(statearr_47692[(8)] = inst_47669__$1);

return statearr_47692;
})();
if(cljs.core.truth_(inst_47670)){
var statearr_47693_47725 = state_47683__$1;
(statearr_47693_47725[(1)] = (13));

} else {
var statearr_47694_47726 = state_47683__$1;
(statearr_47694_47726[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (2))){
var inst_47646 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_47647 = (0);
var state_47683__$1 = (function (){var statearr_47695 = state_47683;
(statearr_47695[(9)] = inst_47646);

(statearr_47695[(7)] = inst_47647);

return statearr_47695;
})();
var statearr_47696_47727 = state_47683__$1;
(statearr_47696_47727[(2)] = null);

(statearr_47696_47727[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (11))){
var inst_47647 = (state_47683[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_47683,(10),Object,null,(9));
var inst_47656 = chs__$1.call(null,inst_47647);
var inst_47657 = done.call(null,inst_47647);
var inst_47658 = cljs.core.async.take_BANG_.call(null,inst_47656,inst_47657);
var state_47683__$1 = state_47683;
var statearr_47697_47728 = state_47683__$1;
(statearr_47697_47728[(2)] = inst_47658);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47683__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (9))){
var inst_47647 = (state_47683[(7)]);
var inst_47660 = (state_47683[(2)]);
var inst_47661 = (inst_47647 + (1));
var inst_47647__$1 = inst_47661;
var state_47683__$1 = (function (){var statearr_47698 = state_47683;
(statearr_47698[(10)] = inst_47660);

(statearr_47698[(7)] = inst_47647__$1);

return statearr_47698;
})();
var statearr_47699_47729 = state_47683__$1;
(statearr_47699_47729[(2)] = null);

(statearr_47699_47729[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (5))){
var inst_47667 = (state_47683[(2)]);
var state_47683__$1 = (function (){var statearr_47700 = state_47683;
(statearr_47700[(11)] = inst_47667);

return statearr_47700;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47683__$1,(12),dchan);
} else {
if((state_val_47684 === (14))){
var inst_47669 = (state_47683[(8)]);
var inst_47674 = cljs.core.apply.call(null,f,inst_47669);
var state_47683__$1 = state_47683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47683__$1,(16),out,inst_47674);
} else {
if((state_val_47684 === (16))){
var inst_47676 = (state_47683[(2)]);
var state_47683__$1 = (function (){var statearr_47701 = state_47683;
(statearr_47701[(12)] = inst_47676);

return statearr_47701;
})();
var statearr_47702_47730 = state_47683__$1;
(statearr_47702_47730[(2)] = null);

(statearr_47702_47730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (10))){
var inst_47651 = (state_47683[(2)]);
var inst_47652 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_47683__$1 = (function (){var statearr_47703 = state_47683;
(statearr_47703[(13)] = inst_47651);

return statearr_47703;
})();
var statearr_47704_47731 = state_47683__$1;
(statearr_47704_47731[(2)] = inst_47652);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47683__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (8))){
var inst_47665 = (state_47683[(2)]);
var state_47683__$1 = state_47683;
var statearr_47705_47732 = state_47683__$1;
(statearr_47705_47732[(2)] = inst_47665);

(statearr_47705_47732[(1)] = (5));


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
});})(c__18796__auto___47717,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18775__auto__,c__18796__auto___47717,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_47709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47709[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_47709[(1)] = (1));

return statearr_47709;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_47683){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_47683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e47710){if((e47710 instanceof Object)){
var ex__18779__auto__ = e47710;
var statearr_47711_47733 = state_47683;
(statearr_47711_47733[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47734 = state_47683;
state_47683 = G__47734;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_47683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_47683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___47717,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18798__auto__ = (function (){var statearr_47712 = f__18797__auto__.call(null);
(statearr_47712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___47717);

return statearr_47712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___47717,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args47736 = [];
var len__17829__auto___47792 = arguments.length;
var i__17830__auto___47793 = (0);
while(true){
if((i__17830__auto___47793 < len__17829__auto___47792)){
args47736.push((arguments[i__17830__auto___47793]));

var G__47794 = (i__17830__auto___47793 + (1));
i__17830__auto___47793 = G__47794;
continue;
} else {
}
break;
}

var G__47738 = args47736.length;
switch (G__47738) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47736.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18796__auto___47796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___47796,out){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___47796,out){
return (function (state_47768){
var state_val_47769 = (state_47768[(1)]);
if((state_val_47769 === (7))){
var inst_47748 = (state_47768[(7)]);
var inst_47747 = (state_47768[(8)]);
var inst_47747__$1 = (state_47768[(2)]);
var inst_47748__$1 = cljs.core.nth.call(null,inst_47747__$1,(0),null);
var inst_47749 = cljs.core.nth.call(null,inst_47747__$1,(1),null);
var inst_47750 = (inst_47748__$1 == null);
var state_47768__$1 = (function (){var statearr_47770 = state_47768;
(statearr_47770[(9)] = inst_47749);

(statearr_47770[(7)] = inst_47748__$1);

(statearr_47770[(8)] = inst_47747__$1);

return statearr_47770;
})();
if(cljs.core.truth_(inst_47750)){
var statearr_47771_47797 = state_47768__$1;
(statearr_47771_47797[(1)] = (8));

} else {
var statearr_47772_47798 = state_47768__$1;
(statearr_47772_47798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47769 === (1))){
var inst_47739 = cljs.core.vec.call(null,chs);
var inst_47740 = inst_47739;
var state_47768__$1 = (function (){var statearr_47773 = state_47768;
(statearr_47773[(10)] = inst_47740);

return statearr_47773;
})();
var statearr_47774_47799 = state_47768__$1;
(statearr_47774_47799[(2)] = null);

(statearr_47774_47799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47769 === (4))){
var inst_47740 = (state_47768[(10)]);
var state_47768__$1 = state_47768;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47768__$1,(7),inst_47740);
} else {
if((state_val_47769 === (6))){
var inst_47764 = (state_47768[(2)]);
var state_47768__$1 = state_47768;
var statearr_47775_47800 = state_47768__$1;
(statearr_47775_47800[(2)] = inst_47764);

(statearr_47775_47800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47769 === (3))){
var inst_47766 = (state_47768[(2)]);
var state_47768__$1 = state_47768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47768__$1,inst_47766);
} else {
if((state_val_47769 === (2))){
var inst_47740 = (state_47768[(10)]);
var inst_47742 = cljs.core.count.call(null,inst_47740);
var inst_47743 = (inst_47742 > (0));
var state_47768__$1 = state_47768;
if(cljs.core.truth_(inst_47743)){
var statearr_47777_47801 = state_47768__$1;
(statearr_47777_47801[(1)] = (4));

} else {
var statearr_47778_47802 = state_47768__$1;
(statearr_47778_47802[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47769 === (11))){
var inst_47740 = (state_47768[(10)]);
var inst_47757 = (state_47768[(2)]);
var tmp47776 = inst_47740;
var inst_47740__$1 = tmp47776;
var state_47768__$1 = (function (){var statearr_47779 = state_47768;
(statearr_47779[(10)] = inst_47740__$1);

(statearr_47779[(11)] = inst_47757);

return statearr_47779;
})();
var statearr_47780_47803 = state_47768__$1;
(statearr_47780_47803[(2)] = null);

(statearr_47780_47803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47769 === (9))){
var inst_47748 = (state_47768[(7)]);
var state_47768__$1 = state_47768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47768__$1,(11),out,inst_47748);
} else {
if((state_val_47769 === (5))){
var inst_47762 = cljs.core.async.close_BANG_.call(null,out);
var state_47768__$1 = state_47768;
var statearr_47781_47804 = state_47768__$1;
(statearr_47781_47804[(2)] = inst_47762);

(statearr_47781_47804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47769 === (10))){
var inst_47760 = (state_47768[(2)]);
var state_47768__$1 = state_47768;
var statearr_47782_47805 = state_47768__$1;
(statearr_47782_47805[(2)] = inst_47760);

(statearr_47782_47805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47769 === (8))){
var inst_47749 = (state_47768[(9)]);
var inst_47748 = (state_47768[(7)]);
var inst_47747 = (state_47768[(8)]);
var inst_47740 = (state_47768[(10)]);
var inst_47752 = (function (){var cs = inst_47740;
var vec__47745 = inst_47747;
var v = inst_47748;
var c = inst_47749;
return ((function (cs,vec__47745,v,c,inst_47749,inst_47748,inst_47747,inst_47740,state_val_47769,c__18796__auto___47796,out){
return (function (p1__47735_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__47735_SHARP_);
});
;})(cs,vec__47745,v,c,inst_47749,inst_47748,inst_47747,inst_47740,state_val_47769,c__18796__auto___47796,out))
})();
var inst_47753 = cljs.core.filterv.call(null,inst_47752,inst_47740);
var inst_47740__$1 = inst_47753;
var state_47768__$1 = (function (){var statearr_47783 = state_47768;
(statearr_47783[(10)] = inst_47740__$1);

return statearr_47783;
})();
var statearr_47784_47806 = state_47768__$1;
(statearr_47784_47806[(2)] = null);

(statearr_47784_47806[(1)] = (2));


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
});})(c__18796__auto___47796,out))
;
return ((function (switch__18775__auto__,c__18796__auto___47796,out){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_47788 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47788[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_47788[(1)] = (1));

return statearr_47788;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_47768){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_47768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e47789){if((e47789 instanceof Object)){
var ex__18779__auto__ = e47789;
var statearr_47790_47807 = state_47768;
(statearr_47790_47807[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47808 = state_47768;
state_47768 = G__47808;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_47768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_47768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___47796,out))
})();
var state__18798__auto__ = (function (){var statearr_47791 = f__18797__auto__.call(null);
(statearr_47791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___47796);

return statearr_47791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___47796,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args47809 = [];
var len__17829__auto___47858 = arguments.length;
var i__17830__auto___47859 = (0);
while(true){
if((i__17830__auto___47859 < len__17829__auto___47858)){
args47809.push((arguments[i__17830__auto___47859]));

var G__47860 = (i__17830__auto___47859 + (1));
i__17830__auto___47859 = G__47860;
continue;
} else {
}
break;
}

var G__47811 = args47809.length;
switch (G__47811) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47809.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18796__auto___47862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___47862,out){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___47862,out){
return (function (state_47835){
var state_val_47836 = (state_47835[(1)]);
if((state_val_47836 === (7))){
var inst_47817 = (state_47835[(7)]);
var inst_47817__$1 = (state_47835[(2)]);
var inst_47818 = (inst_47817__$1 == null);
var inst_47819 = cljs.core.not.call(null,inst_47818);
var state_47835__$1 = (function (){var statearr_47837 = state_47835;
(statearr_47837[(7)] = inst_47817__$1);

return statearr_47837;
})();
if(inst_47819){
var statearr_47838_47863 = state_47835__$1;
(statearr_47838_47863[(1)] = (8));

} else {
var statearr_47839_47864 = state_47835__$1;
(statearr_47839_47864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47836 === (1))){
var inst_47812 = (0);
var state_47835__$1 = (function (){var statearr_47840 = state_47835;
(statearr_47840[(8)] = inst_47812);

return statearr_47840;
})();
var statearr_47841_47865 = state_47835__$1;
(statearr_47841_47865[(2)] = null);

(statearr_47841_47865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47836 === (4))){
var state_47835__$1 = state_47835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47835__$1,(7),ch);
} else {
if((state_val_47836 === (6))){
var inst_47830 = (state_47835[(2)]);
var state_47835__$1 = state_47835;
var statearr_47842_47866 = state_47835__$1;
(statearr_47842_47866[(2)] = inst_47830);

(statearr_47842_47866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47836 === (3))){
var inst_47832 = (state_47835[(2)]);
var inst_47833 = cljs.core.async.close_BANG_.call(null,out);
var state_47835__$1 = (function (){var statearr_47843 = state_47835;
(statearr_47843[(9)] = inst_47832);

return statearr_47843;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47835__$1,inst_47833);
} else {
if((state_val_47836 === (2))){
var inst_47812 = (state_47835[(8)]);
var inst_47814 = (inst_47812 < n);
var state_47835__$1 = state_47835;
if(cljs.core.truth_(inst_47814)){
var statearr_47844_47867 = state_47835__$1;
(statearr_47844_47867[(1)] = (4));

} else {
var statearr_47845_47868 = state_47835__$1;
(statearr_47845_47868[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47836 === (11))){
var inst_47812 = (state_47835[(8)]);
var inst_47822 = (state_47835[(2)]);
var inst_47823 = (inst_47812 + (1));
var inst_47812__$1 = inst_47823;
var state_47835__$1 = (function (){var statearr_47846 = state_47835;
(statearr_47846[(10)] = inst_47822);

(statearr_47846[(8)] = inst_47812__$1);

return statearr_47846;
})();
var statearr_47847_47869 = state_47835__$1;
(statearr_47847_47869[(2)] = null);

(statearr_47847_47869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47836 === (9))){
var state_47835__$1 = state_47835;
var statearr_47848_47870 = state_47835__$1;
(statearr_47848_47870[(2)] = null);

(statearr_47848_47870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47836 === (5))){
var state_47835__$1 = state_47835;
var statearr_47849_47871 = state_47835__$1;
(statearr_47849_47871[(2)] = null);

(statearr_47849_47871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47836 === (10))){
var inst_47827 = (state_47835[(2)]);
var state_47835__$1 = state_47835;
var statearr_47850_47872 = state_47835__$1;
(statearr_47850_47872[(2)] = inst_47827);

(statearr_47850_47872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47836 === (8))){
var inst_47817 = (state_47835[(7)]);
var state_47835__$1 = state_47835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47835__$1,(11),out,inst_47817);
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
});})(c__18796__auto___47862,out))
;
return ((function (switch__18775__auto__,c__18796__auto___47862,out){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_47854 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47854[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_47854[(1)] = (1));

return statearr_47854;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_47835){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_47835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e47855){if((e47855 instanceof Object)){
var ex__18779__auto__ = e47855;
var statearr_47856_47873 = state_47835;
(statearr_47856_47873[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47874 = state_47835;
state_47835 = G__47874;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_47835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_47835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___47862,out))
})();
var state__18798__auto__ = (function (){var statearr_47857 = f__18797__auto__.call(null);
(statearr_47857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___47862);

return statearr_47857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___47862,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47882 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47882 = (function (map_LT_,f,ch,meta47883){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta47883 = meta47883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47884,meta47883__$1){
var self__ = this;
var _47884__$1 = this;
return (new cljs.core.async.t_cljs$core$async47882(self__.map_LT_,self__.f,self__.ch,meta47883__$1));
});

cljs.core.async.t_cljs$core$async47882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47884){
var self__ = this;
var _47884__$1 = this;
return self__.meta47883;
});

cljs.core.async.t_cljs$core$async47882.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47882.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47882.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47882.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47882.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async47885 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47885 = (function (map_LT_,f,ch,meta47883,_,fn1,meta47886){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta47883 = meta47883;
this._ = _;
this.fn1 = fn1;
this.meta47886 = meta47886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47887,meta47886__$1){
var self__ = this;
var _47887__$1 = this;
return (new cljs.core.async.t_cljs$core$async47885(self__.map_LT_,self__.f,self__.ch,self__.meta47883,self__._,self__.fn1,meta47886__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47885.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47887){
var self__ = this;
var _47887__$1 = this;
return self__.meta47886;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47885.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47885.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47885.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47885.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47875_SHARP_){
return f1.call(null,(((p1__47875_SHARP_ == null))?null:self__.f.call(null,p1__47875_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47885.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47883","meta47883",-425199100,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47882","cljs.core.async/t_cljs$core$async47882",746029895,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47886","meta47886",1195937343,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47885.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47885";

cljs.core.async.t_cljs$core$async47885.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async47885");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async47885 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47885(map_LT___$1,f__$1,ch__$1,meta47883__$1,___$2,fn1__$1,meta47886){
return (new cljs.core.async.t_cljs$core$async47885(map_LT___$1,f__$1,ch__$1,meta47883__$1,___$2,fn1__$1,meta47886));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47885(self__.map_LT_,self__.f,self__.ch,self__.meta47883,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16759__auto__ = ret;
if(cljs.core.truth_(and__16759__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16759__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async47882.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47882.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47883","meta47883",-425199100,null)], null);
});

cljs.core.async.t_cljs$core$async47882.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47882";

cljs.core.async.t_cljs$core$async47882.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async47882");
});

cljs.core.async.__GT_t_cljs$core$async47882 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47882(map_LT___$1,f__$1,ch__$1,meta47883){
return (new cljs.core.async.t_cljs$core$async47882(map_LT___$1,f__$1,ch__$1,meta47883));
});

}

return (new cljs.core.async.t_cljs$core$async47882(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47891 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47891 = (function (map_GT_,f,ch,meta47892){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta47892 = meta47892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47893,meta47892__$1){
var self__ = this;
var _47893__$1 = this;
return (new cljs.core.async.t_cljs$core$async47891(self__.map_GT_,self__.f,self__.ch,meta47892__$1));
});

cljs.core.async.t_cljs$core$async47891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47893){
var self__ = this;
var _47893__$1 = this;
return self__.meta47892;
});

cljs.core.async.t_cljs$core$async47891.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47891.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47891.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47891.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47891.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47891.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async47891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47892","meta47892",-29507153,null)], null);
});

cljs.core.async.t_cljs$core$async47891.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47891";

cljs.core.async.t_cljs$core$async47891.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async47891");
});

cljs.core.async.__GT_t_cljs$core$async47891 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47891(map_GT___$1,f__$1,ch__$1,meta47892){
return (new cljs.core.async.t_cljs$core$async47891(map_GT___$1,f__$1,ch__$1,meta47892));
});

}

return (new cljs.core.async.t_cljs$core$async47891(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async47897 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47897 = (function (filter_GT_,p,ch,meta47898){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta47898 = meta47898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47899,meta47898__$1){
var self__ = this;
var _47899__$1 = this;
return (new cljs.core.async.t_cljs$core$async47897(self__.filter_GT_,self__.p,self__.ch,meta47898__$1));
});

cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47899){
var self__ = this;
var _47899__$1 = this;
return self__.meta47898;
});

cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47898","meta47898",-1102717074,null)], null);
});

cljs.core.async.t_cljs$core$async47897.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47897";

cljs.core.async.t_cljs$core$async47897.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async47897");
});

cljs.core.async.__GT_t_cljs$core$async47897 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47897(filter_GT___$1,p__$1,ch__$1,meta47898){
return (new cljs.core.async.t_cljs$core$async47897(filter_GT___$1,p__$1,ch__$1,meta47898));
});

}

return (new cljs.core.async.t_cljs$core$async47897(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args47900 = [];
var len__17829__auto___47944 = arguments.length;
var i__17830__auto___47945 = (0);
while(true){
if((i__17830__auto___47945 < len__17829__auto___47944)){
args47900.push((arguments[i__17830__auto___47945]));

var G__47946 = (i__17830__auto___47945 + (1));
i__17830__auto___47945 = G__47946;
continue;
} else {
}
break;
}

var G__47902 = args47900.length;
switch (G__47902) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47900.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18796__auto___47948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___47948,out){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___47948,out){
return (function (state_47923){
var state_val_47924 = (state_47923[(1)]);
if((state_val_47924 === (7))){
var inst_47919 = (state_47923[(2)]);
var state_47923__$1 = state_47923;
var statearr_47925_47949 = state_47923__$1;
(statearr_47925_47949[(2)] = inst_47919);

(statearr_47925_47949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (1))){
var state_47923__$1 = state_47923;
var statearr_47926_47950 = state_47923__$1;
(statearr_47926_47950[(2)] = null);

(statearr_47926_47950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (4))){
var inst_47905 = (state_47923[(7)]);
var inst_47905__$1 = (state_47923[(2)]);
var inst_47906 = (inst_47905__$1 == null);
var state_47923__$1 = (function (){var statearr_47927 = state_47923;
(statearr_47927[(7)] = inst_47905__$1);

return statearr_47927;
})();
if(cljs.core.truth_(inst_47906)){
var statearr_47928_47951 = state_47923__$1;
(statearr_47928_47951[(1)] = (5));

} else {
var statearr_47929_47952 = state_47923__$1;
(statearr_47929_47952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (6))){
var inst_47905 = (state_47923[(7)]);
var inst_47910 = p.call(null,inst_47905);
var state_47923__$1 = state_47923;
if(cljs.core.truth_(inst_47910)){
var statearr_47930_47953 = state_47923__$1;
(statearr_47930_47953[(1)] = (8));

} else {
var statearr_47931_47954 = state_47923__$1;
(statearr_47931_47954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (3))){
var inst_47921 = (state_47923[(2)]);
var state_47923__$1 = state_47923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47923__$1,inst_47921);
} else {
if((state_val_47924 === (2))){
var state_47923__$1 = state_47923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47923__$1,(4),ch);
} else {
if((state_val_47924 === (11))){
var inst_47913 = (state_47923[(2)]);
var state_47923__$1 = state_47923;
var statearr_47932_47955 = state_47923__$1;
(statearr_47932_47955[(2)] = inst_47913);

(statearr_47932_47955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (9))){
var state_47923__$1 = state_47923;
var statearr_47933_47956 = state_47923__$1;
(statearr_47933_47956[(2)] = null);

(statearr_47933_47956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (5))){
var inst_47908 = cljs.core.async.close_BANG_.call(null,out);
var state_47923__$1 = state_47923;
var statearr_47934_47957 = state_47923__$1;
(statearr_47934_47957[(2)] = inst_47908);

(statearr_47934_47957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (10))){
var inst_47916 = (state_47923[(2)]);
var state_47923__$1 = (function (){var statearr_47935 = state_47923;
(statearr_47935[(8)] = inst_47916);

return statearr_47935;
})();
var statearr_47936_47958 = state_47923__$1;
(statearr_47936_47958[(2)] = null);

(statearr_47936_47958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (8))){
var inst_47905 = (state_47923[(7)]);
var state_47923__$1 = state_47923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47923__$1,(11),out,inst_47905);
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
});})(c__18796__auto___47948,out))
;
return ((function (switch__18775__auto__,c__18796__auto___47948,out){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_47940 = [null,null,null,null,null,null,null,null,null];
(statearr_47940[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_47940[(1)] = (1));

return statearr_47940;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_47923){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_47923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e47941){if((e47941 instanceof Object)){
var ex__18779__auto__ = e47941;
var statearr_47942_47959 = state_47923;
(statearr_47942_47959[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47960 = state_47923;
state_47923 = G__47960;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_47923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_47923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___47948,out))
})();
var state__18798__auto__ = (function (){var statearr_47943 = f__18797__auto__.call(null);
(statearr_47943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___47948);

return statearr_47943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___47948,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args47961 = [];
var len__17829__auto___47964 = arguments.length;
var i__17830__auto___47965 = (0);
while(true){
if((i__17830__auto___47965 < len__17829__auto___47964)){
args47961.push((arguments[i__17830__auto___47965]));

var G__47966 = (i__17830__auto___47965 + (1));
i__17830__auto___47965 = G__47966;
continue;
} else {
}
break;
}

var G__47963 = args47961.length;
switch (G__47963) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47961.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__){
return (function (state_48133){
var state_val_48134 = (state_48133[(1)]);
if((state_val_48134 === (7))){
var inst_48129 = (state_48133[(2)]);
var state_48133__$1 = state_48133;
var statearr_48135_48176 = state_48133__$1;
(statearr_48135_48176[(2)] = inst_48129);

(statearr_48135_48176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48134 === (20))){
var inst_48099 = (state_48133[(7)]);
var inst_48110 = (state_48133[(2)]);
var inst_48111 = cljs.core.next.call(null,inst_48099);
var inst_48085 = inst_48111;
var inst_48086 = null;
var inst_48087 = (0);
var inst_48088 = (0);
var state_48133__$1 = (function (){var statearr_48136 = state_48133;
(statearr_48136[(8)] = inst_48086);

(statearr_48136[(9)] = inst_48087);

(statearr_48136[(10)] = inst_48088);

(statearr_48136[(11)] = inst_48085);

(statearr_48136[(12)] = inst_48110);

return statearr_48136;
})();
var statearr_48137_48177 = state_48133__$1;
(statearr_48137_48177[(2)] = null);

(statearr_48137_48177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48134 === (1))){
var state_48133__$1 = state_48133;
var statearr_48138_48178 = state_48133__$1;
(statearr_48138_48178[(2)] = null);

(statearr_48138_48178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48134 === (4))){
var inst_48074 = (state_48133[(13)]);
var inst_48074__$1 = (state_48133[(2)]);
var inst_48075 = (inst_48074__$1 == null);
var state_48133__$1 = (function (){var statearr_48139 = state_48133;
(statearr_48139[(13)] = inst_48074__$1);

return statearr_48139;
})();
if(cljs.core.truth_(inst_48075)){
var statearr_48140_48179 = state_48133__$1;
(statearr_48140_48179[(1)] = (5));

} else {
var statearr_48141_48180 = state_48133__$1;
(statearr_48141_48180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48134 === (15))){
var state_48133__$1 = state_48133;
var statearr_48145_48181 = state_48133__$1;
(statearr_48145_48181[(2)] = null);

(statearr_48145_48181[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48134 === (21))){
var state_48133__$1 = state_48133;
var statearr_48146_48182 = state_48133__$1;
(statearr_48146_48182[(2)] = null);

(statearr_48146_48182[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48134 === (13))){
var inst_48086 = (state_48133[(8)]);
var inst_48087 = (state_48133[(9)]);
var inst_48088 = (state_48133[(10)]);
var inst_48085 = (state_48133[(11)]);
var inst_48095 = (state_48133[(2)]);
var inst_48096 = (inst_48088 + (1));
var tmp48142 = inst_48086;
var tmp48143 = inst_48087;
var tmp48144 = inst_48085;
var inst_48085__$1 = tmp48144;
var inst_48086__$1 = tmp48142;
var inst_48087__$1 = tmp48143;
var inst_48088__$1 = inst_48096;
var state_48133__$1 = (function (){var statearr_48147 = state_48133;
(statearr_48147[(8)] = inst_48086__$1);

(statearr_48147[(9)] = inst_48087__$1);

(statearr_48147[(10)] = inst_48088__$1);

(statearr_48147[(14)] = inst_48095);

(statearr_48147[(11)] = inst_48085__$1);

return statearr_48147;
})();
var statearr_48148_48183 = state_48133__$1;
(statearr_48148_48183[(2)] = null);

(statearr_48148_48183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48134 === (22))){
var state_48133__$1 = state_48133;
var statearr_48149_48184 = state_48133__$1;
(statearr_48149_48184[(2)] = null);

(statearr_48149_48184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48134 === (6))){
var inst_48074 = (state_48133[(13)]);
var inst_48083 = f.call(null,inst_48074);
var inst_48084 = cljs.core.seq.call(null,inst_48083);
var inst_48085 = inst_48084;
var inst_48086 = null;
var inst_48087 = (0);
var inst_48088 = (0);
var state_48133__$1 = (function (){var statearr_48150 = state_48133;
(statearr_48150[(8)] = inst_48086);

(statearr_48150[(9)] = inst_48087);

(statearr_48150[(10)] = inst_48088);

(statearr_48150[(11)] = inst_48085);

return statearr_48150;
})();
var statearr_48151_48185 = state_48133__$1;
(statearr_48151_48185[(2)] = null);

(statearr_48151_48185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48134 === (17))){
var inst_48099 = (state_48133[(7)]);
var inst_48103 = cljs.core.chunk_first.call(null,inst_48099);
var inst_48104 = cljs.core.chunk_rest.call(null,inst_48099);
var inst_48105 = cljs.core.count.call(null,inst_48103);
var inst_48085 = inst_48104;
var inst_48086 = inst_48103;
var inst_48087 = inst_48105;
var inst_48088 = (0);
var state_48133__$1 = (function (){var statearr_48152 = state_48133;
(statearr_48152[(8)] = inst_48086);

(statearr_48152[(9)] = inst_48087);

(statearr_48152[(10)] = inst_48088);

(statearr_48152[(11)] = inst_48085);

return statearr_48152;
})();
var statearr_48153_48186 = state_48133__$1;
(statearr_48153_48186[(2)] = null);

(statearr_48153_48186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48134 === (3))){
var inst_48131 = (state_48133[(2)]);
var state_48133__$1 = state_48133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48133__$1,inst_48131);
} else {
if((state_val_48134 === (12))){
var inst_48119 = (state_48133[(2)]);
var state_48133__$1 = state_48133;
var statearr_48154_48187 = state_48133__$1;
(statearr_48154_48187[(2)] = inst_48119);

(statearr_48154_48187[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48134 === (2))){
var state_48133__$1 = state_48133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48133__$1,(4),in$);
} else {
if((state_val_48134 === (23))){
var inst_48127 = (state_48133[(2)]);
var state_48133__$1 = state_48133;
var statearr_48155_48188 = state_48133__$1;
(statearr_48155_48188[(2)] = inst_48127);

(statearr_48155_48188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48134 === (19))){
var inst_48114 = (state_48133[(2)]);
var state_48133__$1 = state_48133;
var statearr_48156_48189 = state_48133__$1;
(statearr_48156_48189[(2)] = inst_48114);

(statearr_48156_48189[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48134 === (11))){
var inst_48099 = (state_48133[(7)]);
var inst_48085 = (state_48133[(11)]);
var inst_48099__$1 = cljs.core.seq.call(null,inst_48085);
var state_48133__$1 = (function (){var statearr_48157 = state_48133;
(statearr_48157[(7)] = inst_48099__$1);

return statearr_48157;
})();
if(inst_48099__$1){
var statearr_48158_48190 = state_48133__$1;
(statearr_48158_48190[(1)] = (14));

} else {
var statearr_48159_48191 = state_48133__$1;
(statearr_48159_48191[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48134 === (9))){
var inst_48121 = (state_48133[(2)]);
var inst_48122 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_48133__$1 = (function (){var statearr_48160 = state_48133;
(statearr_48160[(15)] = inst_48121);

return statearr_48160;
})();
if(cljs.core.truth_(inst_48122)){
var statearr_48161_48192 = state_48133__$1;
(statearr_48161_48192[(1)] = (21));

} else {
var statearr_48162_48193 = state_48133__$1;
(statearr_48162_48193[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48134 === (5))){
var inst_48077 = cljs.core.async.close_BANG_.call(null,out);
var state_48133__$1 = state_48133;
var statearr_48163_48194 = state_48133__$1;
(statearr_48163_48194[(2)] = inst_48077);

(statearr_48163_48194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48134 === (14))){
var inst_48099 = (state_48133[(7)]);
var inst_48101 = cljs.core.chunked_seq_QMARK_.call(null,inst_48099);
var state_48133__$1 = state_48133;
if(inst_48101){
var statearr_48164_48195 = state_48133__$1;
(statearr_48164_48195[(1)] = (17));

} else {
var statearr_48165_48196 = state_48133__$1;
(statearr_48165_48196[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48134 === (16))){
var inst_48117 = (state_48133[(2)]);
var state_48133__$1 = state_48133;
var statearr_48166_48197 = state_48133__$1;
(statearr_48166_48197[(2)] = inst_48117);

(statearr_48166_48197[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48134 === (10))){
var inst_48086 = (state_48133[(8)]);
var inst_48088 = (state_48133[(10)]);
var inst_48093 = cljs.core._nth.call(null,inst_48086,inst_48088);
var state_48133__$1 = state_48133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48133__$1,(13),out,inst_48093);
} else {
if((state_val_48134 === (18))){
var inst_48099 = (state_48133[(7)]);
var inst_48108 = cljs.core.first.call(null,inst_48099);
var state_48133__$1 = state_48133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48133__$1,(20),out,inst_48108);
} else {
if((state_val_48134 === (8))){
var inst_48087 = (state_48133[(9)]);
var inst_48088 = (state_48133[(10)]);
var inst_48090 = (inst_48088 < inst_48087);
var inst_48091 = inst_48090;
var state_48133__$1 = state_48133;
if(cljs.core.truth_(inst_48091)){
var statearr_48167_48198 = state_48133__$1;
(statearr_48167_48198[(1)] = (10));

} else {
var statearr_48168_48199 = state_48133__$1;
(statearr_48168_48199[(1)] = (11));

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
});})(c__18796__auto__))
;
return ((function (switch__18775__auto__,c__18796__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18776__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18776__auto____0 = (function (){
var statearr_48172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48172[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18776__auto__);

(statearr_48172[(1)] = (1));

return statearr_48172;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18776__auto____1 = (function (state_48133){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_48133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e48173){if((e48173 instanceof Object)){
var ex__18779__auto__ = e48173;
var statearr_48174_48200 = state_48133;
(statearr_48174_48200[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48201 = state_48133;
state_48133 = G__48201;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18776__auto__ = function(state_48133){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18776__auto____1.call(this,state_48133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18776__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18776__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__))
})();
var state__18798__auto__ = (function (){var statearr_48175 = f__18797__auto__.call(null);
(statearr_48175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_48175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__))
);

return c__18796__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args48202 = [];
var len__17829__auto___48205 = arguments.length;
var i__17830__auto___48206 = (0);
while(true){
if((i__17830__auto___48206 < len__17829__auto___48205)){
args48202.push((arguments[i__17830__auto___48206]));

var G__48207 = (i__17830__auto___48206 + (1));
i__17830__auto___48206 = G__48207;
continue;
} else {
}
break;
}

var G__48204 = args48202.length;
switch (G__48204) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48202.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args48209 = [];
var len__17829__auto___48212 = arguments.length;
var i__17830__auto___48213 = (0);
while(true){
if((i__17830__auto___48213 < len__17829__auto___48212)){
args48209.push((arguments[i__17830__auto___48213]));

var G__48214 = (i__17830__auto___48213 + (1));
i__17830__auto___48213 = G__48214;
continue;
} else {
}
break;
}

var G__48211 = args48209.length;
switch (G__48211) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48209.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args48216 = [];
var len__17829__auto___48267 = arguments.length;
var i__17830__auto___48268 = (0);
while(true){
if((i__17830__auto___48268 < len__17829__auto___48267)){
args48216.push((arguments[i__17830__auto___48268]));

var G__48269 = (i__17830__auto___48268 + (1));
i__17830__auto___48268 = G__48269;
continue;
} else {
}
break;
}

var G__48218 = args48216.length;
switch (G__48218) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48216.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18796__auto___48271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___48271,out){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___48271,out){
return (function (state_48242){
var state_val_48243 = (state_48242[(1)]);
if((state_val_48243 === (7))){
var inst_48237 = (state_48242[(2)]);
var state_48242__$1 = state_48242;
var statearr_48244_48272 = state_48242__$1;
(statearr_48244_48272[(2)] = inst_48237);

(statearr_48244_48272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48243 === (1))){
var inst_48219 = null;
var state_48242__$1 = (function (){var statearr_48245 = state_48242;
(statearr_48245[(7)] = inst_48219);

return statearr_48245;
})();
var statearr_48246_48273 = state_48242__$1;
(statearr_48246_48273[(2)] = null);

(statearr_48246_48273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48243 === (4))){
var inst_48222 = (state_48242[(8)]);
var inst_48222__$1 = (state_48242[(2)]);
var inst_48223 = (inst_48222__$1 == null);
var inst_48224 = cljs.core.not.call(null,inst_48223);
var state_48242__$1 = (function (){var statearr_48247 = state_48242;
(statearr_48247[(8)] = inst_48222__$1);

return statearr_48247;
})();
if(inst_48224){
var statearr_48248_48274 = state_48242__$1;
(statearr_48248_48274[(1)] = (5));

} else {
var statearr_48249_48275 = state_48242__$1;
(statearr_48249_48275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48243 === (6))){
var state_48242__$1 = state_48242;
var statearr_48250_48276 = state_48242__$1;
(statearr_48250_48276[(2)] = null);

(statearr_48250_48276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48243 === (3))){
var inst_48239 = (state_48242[(2)]);
var inst_48240 = cljs.core.async.close_BANG_.call(null,out);
var state_48242__$1 = (function (){var statearr_48251 = state_48242;
(statearr_48251[(9)] = inst_48239);

return statearr_48251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48242__$1,inst_48240);
} else {
if((state_val_48243 === (2))){
var state_48242__$1 = state_48242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48242__$1,(4),ch);
} else {
if((state_val_48243 === (11))){
var inst_48222 = (state_48242[(8)]);
var inst_48231 = (state_48242[(2)]);
var inst_48219 = inst_48222;
var state_48242__$1 = (function (){var statearr_48252 = state_48242;
(statearr_48252[(10)] = inst_48231);

(statearr_48252[(7)] = inst_48219);

return statearr_48252;
})();
var statearr_48253_48277 = state_48242__$1;
(statearr_48253_48277[(2)] = null);

(statearr_48253_48277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48243 === (9))){
var inst_48222 = (state_48242[(8)]);
var state_48242__$1 = state_48242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48242__$1,(11),out,inst_48222);
} else {
if((state_val_48243 === (5))){
var inst_48219 = (state_48242[(7)]);
var inst_48222 = (state_48242[(8)]);
var inst_48226 = cljs.core._EQ_.call(null,inst_48222,inst_48219);
var state_48242__$1 = state_48242;
if(inst_48226){
var statearr_48255_48278 = state_48242__$1;
(statearr_48255_48278[(1)] = (8));

} else {
var statearr_48256_48279 = state_48242__$1;
(statearr_48256_48279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48243 === (10))){
var inst_48234 = (state_48242[(2)]);
var state_48242__$1 = state_48242;
var statearr_48257_48280 = state_48242__$1;
(statearr_48257_48280[(2)] = inst_48234);

(statearr_48257_48280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48243 === (8))){
var inst_48219 = (state_48242[(7)]);
var tmp48254 = inst_48219;
var inst_48219__$1 = tmp48254;
var state_48242__$1 = (function (){var statearr_48258 = state_48242;
(statearr_48258[(7)] = inst_48219__$1);

return statearr_48258;
})();
var statearr_48259_48281 = state_48242__$1;
(statearr_48259_48281[(2)] = null);

(statearr_48259_48281[(1)] = (2));


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
});})(c__18796__auto___48271,out))
;
return ((function (switch__18775__auto__,c__18796__auto___48271,out){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_48263 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48263[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_48263[(1)] = (1));

return statearr_48263;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_48242){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_48242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e48264){if((e48264 instanceof Object)){
var ex__18779__auto__ = e48264;
var statearr_48265_48282 = state_48242;
(statearr_48265_48282[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48283 = state_48242;
state_48242 = G__48283;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_48242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_48242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___48271,out))
})();
var state__18798__auto__ = (function (){var statearr_48266 = f__18797__auto__.call(null);
(statearr_48266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___48271);

return statearr_48266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___48271,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args48284 = [];
var len__17829__auto___48354 = arguments.length;
var i__17830__auto___48355 = (0);
while(true){
if((i__17830__auto___48355 < len__17829__auto___48354)){
args48284.push((arguments[i__17830__auto___48355]));

var G__48356 = (i__17830__auto___48355 + (1));
i__17830__auto___48355 = G__48356;
continue;
} else {
}
break;
}

var G__48286 = args48284.length;
switch (G__48286) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48284.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18796__auto___48358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___48358,out){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___48358,out){
return (function (state_48324){
var state_val_48325 = (state_48324[(1)]);
if((state_val_48325 === (7))){
var inst_48320 = (state_48324[(2)]);
var state_48324__$1 = state_48324;
var statearr_48326_48359 = state_48324__$1;
(statearr_48326_48359[(2)] = inst_48320);

(statearr_48326_48359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48325 === (1))){
var inst_48287 = (new Array(n));
var inst_48288 = inst_48287;
var inst_48289 = (0);
var state_48324__$1 = (function (){var statearr_48327 = state_48324;
(statearr_48327[(7)] = inst_48289);

(statearr_48327[(8)] = inst_48288);

return statearr_48327;
})();
var statearr_48328_48360 = state_48324__$1;
(statearr_48328_48360[(2)] = null);

(statearr_48328_48360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48325 === (4))){
var inst_48292 = (state_48324[(9)]);
var inst_48292__$1 = (state_48324[(2)]);
var inst_48293 = (inst_48292__$1 == null);
var inst_48294 = cljs.core.not.call(null,inst_48293);
var state_48324__$1 = (function (){var statearr_48329 = state_48324;
(statearr_48329[(9)] = inst_48292__$1);

return statearr_48329;
})();
if(inst_48294){
var statearr_48330_48361 = state_48324__$1;
(statearr_48330_48361[(1)] = (5));

} else {
var statearr_48331_48362 = state_48324__$1;
(statearr_48331_48362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48325 === (15))){
var inst_48314 = (state_48324[(2)]);
var state_48324__$1 = state_48324;
var statearr_48332_48363 = state_48324__$1;
(statearr_48332_48363[(2)] = inst_48314);

(statearr_48332_48363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48325 === (13))){
var state_48324__$1 = state_48324;
var statearr_48333_48364 = state_48324__$1;
(statearr_48333_48364[(2)] = null);

(statearr_48333_48364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48325 === (6))){
var inst_48289 = (state_48324[(7)]);
var inst_48310 = (inst_48289 > (0));
var state_48324__$1 = state_48324;
if(cljs.core.truth_(inst_48310)){
var statearr_48334_48365 = state_48324__$1;
(statearr_48334_48365[(1)] = (12));

} else {
var statearr_48335_48366 = state_48324__$1;
(statearr_48335_48366[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48325 === (3))){
var inst_48322 = (state_48324[(2)]);
var state_48324__$1 = state_48324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48324__$1,inst_48322);
} else {
if((state_val_48325 === (12))){
var inst_48288 = (state_48324[(8)]);
var inst_48312 = cljs.core.vec.call(null,inst_48288);
var state_48324__$1 = state_48324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48324__$1,(15),out,inst_48312);
} else {
if((state_val_48325 === (2))){
var state_48324__$1 = state_48324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48324__$1,(4),ch);
} else {
if((state_val_48325 === (11))){
var inst_48304 = (state_48324[(2)]);
var inst_48305 = (new Array(n));
var inst_48288 = inst_48305;
var inst_48289 = (0);
var state_48324__$1 = (function (){var statearr_48336 = state_48324;
(statearr_48336[(7)] = inst_48289);

(statearr_48336[(10)] = inst_48304);

(statearr_48336[(8)] = inst_48288);

return statearr_48336;
})();
var statearr_48337_48367 = state_48324__$1;
(statearr_48337_48367[(2)] = null);

(statearr_48337_48367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48325 === (9))){
var inst_48288 = (state_48324[(8)]);
var inst_48302 = cljs.core.vec.call(null,inst_48288);
var state_48324__$1 = state_48324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48324__$1,(11),out,inst_48302);
} else {
if((state_val_48325 === (5))){
var inst_48297 = (state_48324[(11)]);
var inst_48289 = (state_48324[(7)]);
var inst_48292 = (state_48324[(9)]);
var inst_48288 = (state_48324[(8)]);
var inst_48296 = (inst_48288[inst_48289] = inst_48292);
var inst_48297__$1 = (inst_48289 + (1));
var inst_48298 = (inst_48297__$1 < n);
var state_48324__$1 = (function (){var statearr_48338 = state_48324;
(statearr_48338[(12)] = inst_48296);

(statearr_48338[(11)] = inst_48297__$1);

return statearr_48338;
})();
if(cljs.core.truth_(inst_48298)){
var statearr_48339_48368 = state_48324__$1;
(statearr_48339_48368[(1)] = (8));

} else {
var statearr_48340_48369 = state_48324__$1;
(statearr_48340_48369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48325 === (14))){
var inst_48317 = (state_48324[(2)]);
var inst_48318 = cljs.core.async.close_BANG_.call(null,out);
var state_48324__$1 = (function (){var statearr_48342 = state_48324;
(statearr_48342[(13)] = inst_48317);

return statearr_48342;
})();
var statearr_48343_48370 = state_48324__$1;
(statearr_48343_48370[(2)] = inst_48318);

(statearr_48343_48370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48325 === (10))){
var inst_48308 = (state_48324[(2)]);
var state_48324__$1 = state_48324;
var statearr_48344_48371 = state_48324__$1;
(statearr_48344_48371[(2)] = inst_48308);

(statearr_48344_48371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48325 === (8))){
var inst_48297 = (state_48324[(11)]);
var inst_48288 = (state_48324[(8)]);
var tmp48341 = inst_48288;
var inst_48288__$1 = tmp48341;
var inst_48289 = inst_48297;
var state_48324__$1 = (function (){var statearr_48345 = state_48324;
(statearr_48345[(7)] = inst_48289);

(statearr_48345[(8)] = inst_48288__$1);

return statearr_48345;
})();
var statearr_48346_48372 = state_48324__$1;
(statearr_48346_48372[(2)] = null);

(statearr_48346_48372[(1)] = (2));


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
});})(c__18796__auto___48358,out))
;
return ((function (switch__18775__auto__,c__18796__auto___48358,out){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_48350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48350[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_48350[(1)] = (1));

return statearr_48350;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_48324){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_48324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e48351){if((e48351 instanceof Object)){
var ex__18779__auto__ = e48351;
var statearr_48352_48373 = state_48324;
(statearr_48352_48373[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48374 = state_48324;
state_48324 = G__48374;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_48324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_48324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___48358,out))
})();
var state__18798__auto__ = (function (){var statearr_48353 = f__18797__auto__.call(null);
(statearr_48353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___48358);

return statearr_48353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___48358,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args48375 = [];
var len__17829__auto___48449 = arguments.length;
var i__17830__auto___48450 = (0);
while(true){
if((i__17830__auto___48450 < len__17829__auto___48449)){
args48375.push((arguments[i__17830__auto___48450]));

var G__48451 = (i__17830__auto___48450 + (1));
i__17830__auto___48450 = G__48451;
continue;
} else {
}
break;
}

var G__48377 = args48375.length;
switch (G__48377) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48375.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18796__auto___48453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___48453,out){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___48453,out){
return (function (state_48419){
var state_val_48420 = (state_48419[(1)]);
if((state_val_48420 === (7))){
var inst_48415 = (state_48419[(2)]);
var state_48419__$1 = state_48419;
var statearr_48421_48454 = state_48419__$1;
(statearr_48421_48454[(2)] = inst_48415);

(statearr_48421_48454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (1))){
var inst_48378 = [];
var inst_48379 = inst_48378;
var inst_48380 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48419__$1 = (function (){var statearr_48422 = state_48419;
(statearr_48422[(7)] = inst_48380);

(statearr_48422[(8)] = inst_48379);

return statearr_48422;
})();
var statearr_48423_48455 = state_48419__$1;
(statearr_48423_48455[(2)] = null);

(statearr_48423_48455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (4))){
var inst_48383 = (state_48419[(9)]);
var inst_48383__$1 = (state_48419[(2)]);
var inst_48384 = (inst_48383__$1 == null);
var inst_48385 = cljs.core.not.call(null,inst_48384);
var state_48419__$1 = (function (){var statearr_48424 = state_48419;
(statearr_48424[(9)] = inst_48383__$1);

return statearr_48424;
})();
if(inst_48385){
var statearr_48425_48456 = state_48419__$1;
(statearr_48425_48456[(1)] = (5));

} else {
var statearr_48426_48457 = state_48419__$1;
(statearr_48426_48457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (15))){
var inst_48409 = (state_48419[(2)]);
var state_48419__$1 = state_48419;
var statearr_48427_48458 = state_48419__$1;
(statearr_48427_48458[(2)] = inst_48409);

(statearr_48427_48458[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (13))){
var state_48419__$1 = state_48419;
var statearr_48428_48459 = state_48419__$1;
(statearr_48428_48459[(2)] = null);

(statearr_48428_48459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (6))){
var inst_48379 = (state_48419[(8)]);
var inst_48404 = inst_48379.length;
var inst_48405 = (inst_48404 > (0));
var state_48419__$1 = state_48419;
if(cljs.core.truth_(inst_48405)){
var statearr_48429_48460 = state_48419__$1;
(statearr_48429_48460[(1)] = (12));

} else {
var statearr_48430_48461 = state_48419__$1;
(statearr_48430_48461[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (3))){
var inst_48417 = (state_48419[(2)]);
var state_48419__$1 = state_48419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48419__$1,inst_48417);
} else {
if((state_val_48420 === (12))){
var inst_48379 = (state_48419[(8)]);
var inst_48407 = cljs.core.vec.call(null,inst_48379);
var state_48419__$1 = state_48419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48419__$1,(15),out,inst_48407);
} else {
if((state_val_48420 === (2))){
var state_48419__$1 = state_48419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48419__$1,(4),ch);
} else {
if((state_val_48420 === (11))){
var inst_48387 = (state_48419[(10)]);
var inst_48383 = (state_48419[(9)]);
var inst_48397 = (state_48419[(2)]);
var inst_48398 = [];
var inst_48399 = inst_48398.push(inst_48383);
var inst_48379 = inst_48398;
var inst_48380 = inst_48387;
var state_48419__$1 = (function (){var statearr_48431 = state_48419;
(statearr_48431[(7)] = inst_48380);

(statearr_48431[(11)] = inst_48399);

(statearr_48431[(8)] = inst_48379);

(statearr_48431[(12)] = inst_48397);

return statearr_48431;
})();
var statearr_48432_48462 = state_48419__$1;
(statearr_48432_48462[(2)] = null);

(statearr_48432_48462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (9))){
var inst_48379 = (state_48419[(8)]);
var inst_48395 = cljs.core.vec.call(null,inst_48379);
var state_48419__$1 = state_48419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48419__$1,(11),out,inst_48395);
} else {
if((state_val_48420 === (5))){
var inst_48380 = (state_48419[(7)]);
var inst_48387 = (state_48419[(10)]);
var inst_48383 = (state_48419[(9)]);
var inst_48387__$1 = f.call(null,inst_48383);
var inst_48388 = cljs.core._EQ_.call(null,inst_48387__$1,inst_48380);
var inst_48389 = cljs.core.keyword_identical_QMARK_.call(null,inst_48380,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48390 = (inst_48388) || (inst_48389);
var state_48419__$1 = (function (){var statearr_48433 = state_48419;
(statearr_48433[(10)] = inst_48387__$1);

return statearr_48433;
})();
if(cljs.core.truth_(inst_48390)){
var statearr_48434_48463 = state_48419__$1;
(statearr_48434_48463[(1)] = (8));

} else {
var statearr_48435_48464 = state_48419__$1;
(statearr_48435_48464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (14))){
var inst_48412 = (state_48419[(2)]);
var inst_48413 = cljs.core.async.close_BANG_.call(null,out);
var state_48419__$1 = (function (){var statearr_48437 = state_48419;
(statearr_48437[(13)] = inst_48412);

return statearr_48437;
})();
var statearr_48438_48465 = state_48419__$1;
(statearr_48438_48465[(2)] = inst_48413);

(statearr_48438_48465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (10))){
var inst_48402 = (state_48419[(2)]);
var state_48419__$1 = state_48419;
var statearr_48439_48466 = state_48419__$1;
(statearr_48439_48466[(2)] = inst_48402);

(statearr_48439_48466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48420 === (8))){
var inst_48387 = (state_48419[(10)]);
var inst_48383 = (state_48419[(9)]);
var inst_48379 = (state_48419[(8)]);
var inst_48392 = inst_48379.push(inst_48383);
var tmp48436 = inst_48379;
var inst_48379__$1 = tmp48436;
var inst_48380 = inst_48387;
var state_48419__$1 = (function (){var statearr_48440 = state_48419;
(statearr_48440[(7)] = inst_48380);

(statearr_48440[(14)] = inst_48392);

(statearr_48440[(8)] = inst_48379__$1);

return statearr_48440;
})();
var statearr_48441_48467 = state_48419__$1;
(statearr_48441_48467[(2)] = null);

(statearr_48441_48467[(1)] = (2));


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
});})(c__18796__auto___48453,out))
;
return ((function (switch__18775__auto__,c__18796__auto___48453,out){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_48445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48445[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_48445[(1)] = (1));

return statearr_48445;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_48419){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_48419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e48446){if((e48446 instanceof Object)){
var ex__18779__auto__ = e48446;
var statearr_48447_48468 = state_48419;
(statearr_48447_48468[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48469 = state_48419;
state_48419 = G__48469;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_48419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_48419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___48453,out))
})();
var state__18798__auto__ = (function (){var statearr_48448 = f__18797__auto__.call(null);
(statearr_48448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___48453);

return statearr_48448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___48453,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map