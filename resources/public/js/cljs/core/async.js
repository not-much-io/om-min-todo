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
var args21609 = [];
var len__17829__auto___21615 = arguments.length;
var i__17830__auto___21616 = (0);
while(true){
if((i__17830__auto___21616 < len__17829__auto___21615)){
args21609.push((arguments[i__17830__auto___21616]));

var G__21617 = (i__17830__auto___21616 + (1));
i__17830__auto___21616 = G__21617;
continue;
} else {
}
break;
}

var G__21611 = args21609.length;
switch (G__21611) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21609.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21612 = (function (f,blockable,meta21613){
this.f = f;
this.blockable = blockable;
this.meta21613 = meta21613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21614,meta21613__$1){
var self__ = this;
var _21614__$1 = this;
return (new cljs.core.async.t_cljs$core$async21612(self__.f,self__.blockable,meta21613__$1));
});

cljs.core.async.t_cljs$core$async21612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21614){
var self__ = this;
var _21614__$1 = this;
return self__.meta21613;
});

cljs.core.async.t_cljs$core$async21612.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21612.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21612.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21612.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21613","meta21613",998462064,null)], null);
});

cljs.core.async.t_cljs$core$async21612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21612";

cljs.core.async.t_cljs$core$async21612.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async21612");
});

cljs.core.async.__GT_t_cljs$core$async21612 = (function cljs$core$async$__GT_t_cljs$core$async21612(f__$1,blockable__$1,meta21613){
return (new cljs.core.async.t_cljs$core$async21612(f__$1,blockable__$1,meta21613));
});

}

return (new cljs.core.async.t_cljs$core$async21612(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args21621 = [];
var len__17829__auto___21624 = arguments.length;
var i__17830__auto___21625 = (0);
while(true){
if((i__17830__auto___21625 < len__17829__auto___21624)){
args21621.push((arguments[i__17830__auto___21625]));

var G__21626 = (i__17830__auto___21625 + (1));
i__17830__auto___21625 = G__21626;
continue;
} else {
}
break;
}

var G__21623 = args21621.length;
switch (G__21623) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21621.length)].join('')));

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
var args21628 = [];
var len__17829__auto___21631 = arguments.length;
var i__17830__auto___21632 = (0);
while(true){
if((i__17830__auto___21632 < len__17829__auto___21631)){
args21628.push((arguments[i__17830__auto___21632]));

var G__21633 = (i__17830__auto___21632 + (1));
i__17830__auto___21632 = G__21633;
continue;
} else {
}
break;
}

var G__21630 = args21628.length;
switch (G__21630) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21628.length)].join('')));

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
var args21635 = [];
var len__17829__auto___21638 = arguments.length;
var i__17830__auto___21639 = (0);
while(true){
if((i__17830__auto___21639 < len__17829__auto___21638)){
args21635.push((arguments[i__17830__auto___21639]));

var G__21640 = (i__17830__auto___21639 + (1));
i__17830__auto___21639 = G__21640;
continue;
} else {
}
break;
}

var G__21637 = args21635.length;
switch (G__21637) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21635.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21642 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21642);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21642,ret){
return (function (){
return fn1.call(null,val_21642);
});})(val_21642,ret))
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
var args21643 = [];
var len__17829__auto___21646 = arguments.length;
var i__17830__auto___21647 = (0);
while(true){
if((i__17830__auto___21647 < len__17829__auto___21646)){
args21643.push((arguments[i__17830__auto___21647]));

var G__21648 = (i__17830__auto___21647 + (1));
i__17830__auto___21647 = G__21648;
continue;
} else {
}
break;
}

var G__21645 = args21643.length;
switch (G__21645) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21643.length)].join('')));

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
var n__17674__auto___21650 = n;
var x_21651 = (0);
while(true){
if((x_21651 < n__17674__auto___21650)){
(a[x_21651] = (0));

var G__21652 = (x_21651 + (1));
x_21651 = G__21652;
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

var G__21653 = (i + (1));
i = G__21653;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21657 = (function (alt_flag,flag,meta21658){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21658 = meta21658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21659,meta21658__$1){
var self__ = this;
var _21659__$1 = this;
return (new cljs.core.async.t_cljs$core$async21657(self__.alt_flag,self__.flag,meta21658__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21657.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21659){
var self__ = this;
var _21659__$1 = this;
return self__.meta21658;
});})(flag))
;

cljs.core.async.t_cljs$core$async21657.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21657.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21657.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21657.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21657.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21658","meta21658",-1933754256,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21657.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21657";

cljs.core.async.t_cljs$core$async21657.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async21657");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21657 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21657(alt_flag__$1,flag__$1,meta21658){
return (new cljs.core.async.t_cljs$core$async21657(alt_flag__$1,flag__$1,meta21658));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21657(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21663 = (function (alt_handler,flag,cb,meta21664){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21664 = meta21664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21665,meta21664__$1){
var self__ = this;
var _21665__$1 = this;
return (new cljs.core.async.t_cljs$core$async21663(self__.alt_handler,self__.flag,self__.cb,meta21664__$1));
});

cljs.core.async.t_cljs$core$async21663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21665){
var self__ = this;
var _21665__$1 = this;
return self__.meta21664;
});

cljs.core.async.t_cljs$core$async21663.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21663.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21663.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21663.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21664","meta21664",1517563251,null)], null);
});

cljs.core.async.t_cljs$core$async21663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21663";

cljs.core.async.t_cljs$core$async21663.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async21663");
});

cljs.core.async.__GT_t_cljs$core$async21663 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21663(alt_handler__$1,flag__$1,cb__$1,meta21664){
return (new cljs.core.async.t_cljs$core$async21663(alt_handler__$1,flag__$1,cb__$1,meta21664));
});

}

return (new cljs.core.async.t_cljs$core$async21663(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21666_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21666_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21667_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21667_SHARP_,port], null));
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
var G__21668 = (i + (1));
i = G__21668;
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
var len__17829__auto___21674 = arguments.length;
var i__17830__auto___21675 = (0);
while(true){
if((i__17830__auto___21675 < len__17829__auto___21674)){
args__17836__auto__.push((arguments[i__17830__auto___21675]));

var G__21676 = (i__17830__auto___21675 + (1));
i__17830__auto___21675 = G__21676;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((1) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17837__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21671){
var map__21672 = p__21671;
var map__21672__$1 = ((((!((map__21672 == null)))?((((map__21672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21672):map__21672);
var opts = map__21672__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21669){
var G__21670 = cljs.core.first.call(null,seq21669);
var seq21669__$1 = cljs.core.next.call(null,seq21669);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21670,seq21669__$1);
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
var args21677 = [];
var len__17829__auto___21727 = arguments.length;
var i__17830__auto___21728 = (0);
while(true){
if((i__17830__auto___21728 < len__17829__auto___21727)){
args21677.push((arguments[i__17830__auto___21728]));

var G__21729 = (i__17830__auto___21728 + (1));
i__17830__auto___21728 = G__21729;
continue;
} else {
}
break;
}

var G__21679 = args21677.length;
switch (G__21679) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21677.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21564__auto___21731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto___21731){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto___21731){
return (function (state_21703){
var state_val_21704 = (state_21703[(1)]);
if((state_val_21704 === (7))){
var inst_21699 = (state_21703[(2)]);
var state_21703__$1 = state_21703;
var statearr_21705_21732 = state_21703__$1;
(statearr_21705_21732[(2)] = inst_21699);

(statearr_21705_21732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21704 === (1))){
var state_21703__$1 = state_21703;
var statearr_21706_21733 = state_21703__$1;
(statearr_21706_21733[(2)] = null);

(statearr_21706_21733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21704 === (4))){
var inst_21682 = (state_21703[(7)]);
var inst_21682__$1 = (state_21703[(2)]);
var inst_21683 = (inst_21682__$1 == null);
var state_21703__$1 = (function (){var statearr_21707 = state_21703;
(statearr_21707[(7)] = inst_21682__$1);

return statearr_21707;
})();
if(cljs.core.truth_(inst_21683)){
var statearr_21708_21734 = state_21703__$1;
(statearr_21708_21734[(1)] = (5));

} else {
var statearr_21709_21735 = state_21703__$1;
(statearr_21709_21735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21704 === (13))){
var state_21703__$1 = state_21703;
var statearr_21710_21736 = state_21703__$1;
(statearr_21710_21736[(2)] = null);

(statearr_21710_21736[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21704 === (6))){
var inst_21682 = (state_21703[(7)]);
var state_21703__$1 = state_21703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21703__$1,(11),to,inst_21682);
} else {
if((state_val_21704 === (3))){
var inst_21701 = (state_21703[(2)]);
var state_21703__$1 = state_21703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21703__$1,inst_21701);
} else {
if((state_val_21704 === (12))){
var state_21703__$1 = state_21703;
var statearr_21711_21737 = state_21703__$1;
(statearr_21711_21737[(2)] = null);

(statearr_21711_21737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21704 === (2))){
var state_21703__$1 = state_21703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21703__$1,(4),from);
} else {
if((state_val_21704 === (11))){
var inst_21692 = (state_21703[(2)]);
var state_21703__$1 = state_21703;
if(cljs.core.truth_(inst_21692)){
var statearr_21712_21738 = state_21703__$1;
(statearr_21712_21738[(1)] = (12));

} else {
var statearr_21713_21739 = state_21703__$1;
(statearr_21713_21739[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21704 === (9))){
var state_21703__$1 = state_21703;
var statearr_21714_21740 = state_21703__$1;
(statearr_21714_21740[(2)] = null);

(statearr_21714_21740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21704 === (5))){
var state_21703__$1 = state_21703;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21715_21741 = state_21703__$1;
(statearr_21715_21741[(1)] = (8));

} else {
var statearr_21716_21742 = state_21703__$1;
(statearr_21716_21742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21704 === (14))){
var inst_21697 = (state_21703[(2)]);
var state_21703__$1 = state_21703;
var statearr_21717_21743 = state_21703__$1;
(statearr_21717_21743[(2)] = inst_21697);

(statearr_21717_21743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21704 === (10))){
var inst_21689 = (state_21703[(2)]);
var state_21703__$1 = state_21703;
var statearr_21718_21744 = state_21703__$1;
(statearr_21718_21744[(2)] = inst_21689);

(statearr_21718_21744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21704 === (8))){
var inst_21686 = cljs.core.async.close_BANG_.call(null,to);
var state_21703__$1 = state_21703;
var statearr_21719_21745 = state_21703__$1;
(statearr_21719_21745[(2)] = inst_21686);

(statearr_21719_21745[(1)] = (10));


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
});})(c__21564__auto___21731))
;
return ((function (switch__21452__auto__,c__21564__auto___21731){
return (function() {
var cljs$core$async$state_machine__21453__auto__ = null;
var cljs$core$async$state_machine__21453__auto____0 = (function (){
var statearr_21723 = [null,null,null,null,null,null,null,null];
(statearr_21723[(0)] = cljs$core$async$state_machine__21453__auto__);

(statearr_21723[(1)] = (1));

return statearr_21723;
});
var cljs$core$async$state_machine__21453__auto____1 = (function (state_21703){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_21703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e21724){if((e21724 instanceof Object)){
var ex__21456__auto__ = e21724;
var statearr_21725_21746 = state_21703;
(statearr_21725_21746[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21747 = state_21703;
state_21703 = G__21747;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$state_machine__21453__auto__ = function(state_21703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21453__auto____1.call(this,state_21703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21453__auto____0;
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21453__auto____1;
return cljs$core$async$state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto___21731))
})();
var state__21566__auto__ = (function (){var statearr_21726 = f__21565__auto__.call(null);
(statearr_21726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___21731);

return statearr_21726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto___21731))
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
return (function (p__21931){
var vec__21932 = p__21931;
var v = cljs.core.nth.call(null,vec__21932,(0),null);
var p = cljs.core.nth.call(null,vec__21932,(1),null);
var job = vec__21932;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21564__auto___22114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto___22114,res,vec__21932,v,p,job,jobs,results){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto___22114,res,vec__21932,v,p,job,jobs,results){
return (function (state_21937){
var state_val_21938 = (state_21937[(1)]);
if((state_val_21938 === (1))){
var state_21937__$1 = state_21937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21937__$1,(2),res,v);
} else {
if((state_val_21938 === (2))){
var inst_21934 = (state_21937[(2)]);
var inst_21935 = cljs.core.async.close_BANG_.call(null,res);
var state_21937__$1 = (function (){var statearr_21939 = state_21937;
(statearr_21939[(7)] = inst_21934);

return statearr_21939;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21937__$1,inst_21935);
} else {
return null;
}
}
});})(c__21564__auto___22114,res,vec__21932,v,p,job,jobs,results))
;
return ((function (switch__21452__auto__,c__21564__auto___22114,res,vec__21932,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____0 = (function (){
var statearr_21943 = [null,null,null,null,null,null,null,null];
(statearr_21943[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__);

(statearr_21943[(1)] = (1));

return statearr_21943;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____1 = (function (state_21937){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_21937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e21944){if((e21944 instanceof Object)){
var ex__21456__auto__ = e21944;
var statearr_21945_22115 = state_21937;
(statearr_21945_22115[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22116 = state_21937;
state_21937 = G__22116;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__ = function(state_21937){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____1.call(this,state_21937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto___22114,res,vec__21932,v,p,job,jobs,results))
})();
var state__21566__auto__ = (function (){var statearr_21946 = f__21565__auto__.call(null);
(statearr_21946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___22114);

return statearr_21946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto___22114,res,vec__21932,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21947){
var vec__21948 = p__21947;
var v = cljs.core.nth.call(null,vec__21948,(0),null);
var p = cljs.core.nth.call(null,vec__21948,(1),null);
var job = vec__21948;
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
var n__17674__auto___22117 = n;
var __22118 = (0);
while(true){
if((__22118 < n__17674__auto___22117)){
var G__21949_22119 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21949_22119) {
case "compute":
var c__21564__auto___22121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22118,c__21564__auto___22121,G__21949_22119,n__17674__auto___22117,jobs,results,process,async){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (__22118,c__21564__auto___22121,G__21949_22119,n__17674__auto___22117,jobs,results,process,async){
return (function (state_21962){
var state_val_21963 = (state_21962[(1)]);
if((state_val_21963 === (1))){
var state_21962__$1 = state_21962;
var statearr_21964_22122 = state_21962__$1;
(statearr_21964_22122[(2)] = null);

(statearr_21964_22122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21963 === (2))){
var state_21962__$1 = state_21962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21962__$1,(4),jobs);
} else {
if((state_val_21963 === (3))){
var inst_21960 = (state_21962[(2)]);
var state_21962__$1 = state_21962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21962__$1,inst_21960);
} else {
if((state_val_21963 === (4))){
var inst_21952 = (state_21962[(2)]);
var inst_21953 = process.call(null,inst_21952);
var state_21962__$1 = state_21962;
if(cljs.core.truth_(inst_21953)){
var statearr_21965_22123 = state_21962__$1;
(statearr_21965_22123[(1)] = (5));

} else {
var statearr_21966_22124 = state_21962__$1;
(statearr_21966_22124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21963 === (5))){
var state_21962__$1 = state_21962;
var statearr_21967_22125 = state_21962__$1;
(statearr_21967_22125[(2)] = null);

(statearr_21967_22125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21963 === (6))){
var state_21962__$1 = state_21962;
var statearr_21968_22126 = state_21962__$1;
(statearr_21968_22126[(2)] = null);

(statearr_21968_22126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21963 === (7))){
var inst_21958 = (state_21962[(2)]);
var state_21962__$1 = state_21962;
var statearr_21969_22127 = state_21962__$1;
(statearr_21969_22127[(2)] = inst_21958);

(statearr_21969_22127[(1)] = (3));


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
});})(__22118,c__21564__auto___22121,G__21949_22119,n__17674__auto___22117,jobs,results,process,async))
;
return ((function (__22118,switch__21452__auto__,c__21564__auto___22121,G__21949_22119,n__17674__auto___22117,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____0 = (function (){
var statearr_21973 = [null,null,null,null,null,null,null];
(statearr_21973[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__);

(statearr_21973[(1)] = (1));

return statearr_21973;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____1 = (function (state_21962){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_21962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e21974){if((e21974 instanceof Object)){
var ex__21456__auto__ = e21974;
var statearr_21975_22128 = state_21962;
(statearr_21975_22128[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22129 = state_21962;
state_21962 = G__22129;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__ = function(state_21962){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____1.call(this,state_21962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__;
})()
;})(__22118,switch__21452__auto__,c__21564__auto___22121,G__21949_22119,n__17674__auto___22117,jobs,results,process,async))
})();
var state__21566__auto__ = (function (){var statearr_21976 = f__21565__auto__.call(null);
(statearr_21976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___22121);

return statearr_21976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(__22118,c__21564__auto___22121,G__21949_22119,n__17674__auto___22117,jobs,results,process,async))
);


break;
case "async":
var c__21564__auto___22130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22118,c__21564__auto___22130,G__21949_22119,n__17674__auto___22117,jobs,results,process,async){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (__22118,c__21564__auto___22130,G__21949_22119,n__17674__auto___22117,jobs,results,process,async){
return (function (state_21989){
var state_val_21990 = (state_21989[(1)]);
if((state_val_21990 === (1))){
var state_21989__$1 = state_21989;
var statearr_21991_22131 = state_21989__$1;
(statearr_21991_22131[(2)] = null);

(statearr_21991_22131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (2))){
var state_21989__$1 = state_21989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21989__$1,(4),jobs);
} else {
if((state_val_21990 === (3))){
var inst_21987 = (state_21989[(2)]);
var state_21989__$1 = state_21989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21989__$1,inst_21987);
} else {
if((state_val_21990 === (4))){
var inst_21979 = (state_21989[(2)]);
var inst_21980 = async.call(null,inst_21979);
var state_21989__$1 = state_21989;
if(cljs.core.truth_(inst_21980)){
var statearr_21992_22132 = state_21989__$1;
(statearr_21992_22132[(1)] = (5));

} else {
var statearr_21993_22133 = state_21989__$1;
(statearr_21993_22133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (5))){
var state_21989__$1 = state_21989;
var statearr_21994_22134 = state_21989__$1;
(statearr_21994_22134[(2)] = null);

(statearr_21994_22134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (6))){
var state_21989__$1 = state_21989;
var statearr_21995_22135 = state_21989__$1;
(statearr_21995_22135[(2)] = null);

(statearr_21995_22135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21990 === (7))){
var inst_21985 = (state_21989[(2)]);
var state_21989__$1 = state_21989;
var statearr_21996_22136 = state_21989__$1;
(statearr_21996_22136[(2)] = inst_21985);

(statearr_21996_22136[(1)] = (3));


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
});})(__22118,c__21564__auto___22130,G__21949_22119,n__17674__auto___22117,jobs,results,process,async))
;
return ((function (__22118,switch__21452__auto__,c__21564__auto___22130,G__21949_22119,n__17674__auto___22117,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____0 = (function (){
var statearr_22000 = [null,null,null,null,null,null,null];
(statearr_22000[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__);

(statearr_22000[(1)] = (1));

return statearr_22000;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____1 = (function (state_21989){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_21989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e22001){if((e22001 instanceof Object)){
var ex__21456__auto__ = e22001;
var statearr_22002_22137 = state_21989;
(statearr_22002_22137[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22138 = state_21989;
state_21989 = G__22138;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__ = function(state_21989){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____1.call(this,state_21989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__;
})()
;})(__22118,switch__21452__auto__,c__21564__auto___22130,G__21949_22119,n__17674__auto___22117,jobs,results,process,async))
})();
var state__21566__auto__ = (function (){var statearr_22003 = f__21565__auto__.call(null);
(statearr_22003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___22130);

return statearr_22003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(__22118,c__21564__auto___22130,G__21949_22119,n__17674__auto___22117,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22139 = (__22118 + (1));
__22118 = G__22139;
continue;
} else {
}
break;
}

var c__21564__auto___22140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto___22140,jobs,results,process,async){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto___22140,jobs,results,process,async){
return (function (state_22025){
var state_val_22026 = (state_22025[(1)]);
if((state_val_22026 === (1))){
var state_22025__$1 = state_22025;
var statearr_22027_22141 = state_22025__$1;
(statearr_22027_22141[(2)] = null);

(statearr_22027_22141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22026 === (2))){
var state_22025__$1 = state_22025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22025__$1,(4),from);
} else {
if((state_val_22026 === (3))){
var inst_22023 = (state_22025[(2)]);
var state_22025__$1 = state_22025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22025__$1,inst_22023);
} else {
if((state_val_22026 === (4))){
var inst_22006 = (state_22025[(7)]);
var inst_22006__$1 = (state_22025[(2)]);
var inst_22007 = (inst_22006__$1 == null);
var state_22025__$1 = (function (){var statearr_22028 = state_22025;
(statearr_22028[(7)] = inst_22006__$1);

return statearr_22028;
})();
if(cljs.core.truth_(inst_22007)){
var statearr_22029_22142 = state_22025__$1;
(statearr_22029_22142[(1)] = (5));

} else {
var statearr_22030_22143 = state_22025__$1;
(statearr_22030_22143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22026 === (5))){
var inst_22009 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22025__$1 = state_22025;
var statearr_22031_22144 = state_22025__$1;
(statearr_22031_22144[(2)] = inst_22009);

(statearr_22031_22144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22026 === (6))){
var inst_22006 = (state_22025[(7)]);
var inst_22011 = (state_22025[(8)]);
var inst_22011__$1 = cljs.core.async.chan.call(null,(1));
var inst_22012 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22013 = [inst_22006,inst_22011__$1];
var inst_22014 = (new cljs.core.PersistentVector(null,2,(5),inst_22012,inst_22013,null));
var state_22025__$1 = (function (){var statearr_22032 = state_22025;
(statearr_22032[(8)] = inst_22011__$1);

return statearr_22032;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22025__$1,(8),jobs,inst_22014);
} else {
if((state_val_22026 === (7))){
var inst_22021 = (state_22025[(2)]);
var state_22025__$1 = state_22025;
var statearr_22033_22145 = state_22025__$1;
(statearr_22033_22145[(2)] = inst_22021);

(statearr_22033_22145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22026 === (8))){
var inst_22011 = (state_22025[(8)]);
var inst_22016 = (state_22025[(2)]);
var state_22025__$1 = (function (){var statearr_22034 = state_22025;
(statearr_22034[(9)] = inst_22016);

return statearr_22034;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22025__$1,(9),results,inst_22011);
} else {
if((state_val_22026 === (9))){
var inst_22018 = (state_22025[(2)]);
var state_22025__$1 = (function (){var statearr_22035 = state_22025;
(statearr_22035[(10)] = inst_22018);

return statearr_22035;
})();
var statearr_22036_22146 = state_22025__$1;
(statearr_22036_22146[(2)] = null);

(statearr_22036_22146[(1)] = (2));


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
});})(c__21564__auto___22140,jobs,results,process,async))
;
return ((function (switch__21452__auto__,c__21564__auto___22140,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____0 = (function (){
var statearr_22040 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22040[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__);

(statearr_22040[(1)] = (1));

return statearr_22040;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____1 = (function (state_22025){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_22025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e22041){if((e22041 instanceof Object)){
var ex__21456__auto__ = e22041;
var statearr_22042_22147 = state_22025;
(statearr_22042_22147[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22148 = state_22025;
state_22025 = G__22148;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__ = function(state_22025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____1.call(this,state_22025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto___22140,jobs,results,process,async))
})();
var state__21566__auto__ = (function (){var statearr_22043 = f__21565__auto__.call(null);
(statearr_22043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___22140);

return statearr_22043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto___22140,jobs,results,process,async))
);


var c__21564__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto__,jobs,results,process,async){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto__,jobs,results,process,async){
return (function (state_22081){
var state_val_22082 = (state_22081[(1)]);
if((state_val_22082 === (7))){
var inst_22077 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
var statearr_22083_22149 = state_22081__$1;
(statearr_22083_22149[(2)] = inst_22077);

(statearr_22083_22149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (20))){
var state_22081__$1 = state_22081;
var statearr_22084_22150 = state_22081__$1;
(statearr_22084_22150[(2)] = null);

(statearr_22084_22150[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (1))){
var state_22081__$1 = state_22081;
var statearr_22085_22151 = state_22081__$1;
(statearr_22085_22151[(2)] = null);

(statearr_22085_22151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (4))){
var inst_22046 = (state_22081[(7)]);
var inst_22046__$1 = (state_22081[(2)]);
var inst_22047 = (inst_22046__$1 == null);
var state_22081__$1 = (function (){var statearr_22086 = state_22081;
(statearr_22086[(7)] = inst_22046__$1);

return statearr_22086;
})();
if(cljs.core.truth_(inst_22047)){
var statearr_22087_22152 = state_22081__$1;
(statearr_22087_22152[(1)] = (5));

} else {
var statearr_22088_22153 = state_22081__$1;
(statearr_22088_22153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (15))){
var inst_22059 = (state_22081[(8)]);
var state_22081__$1 = state_22081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22081__$1,(18),to,inst_22059);
} else {
if((state_val_22082 === (21))){
var inst_22072 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
var statearr_22089_22154 = state_22081__$1;
(statearr_22089_22154[(2)] = inst_22072);

(statearr_22089_22154[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (13))){
var inst_22074 = (state_22081[(2)]);
var state_22081__$1 = (function (){var statearr_22090 = state_22081;
(statearr_22090[(9)] = inst_22074);

return statearr_22090;
})();
var statearr_22091_22155 = state_22081__$1;
(statearr_22091_22155[(2)] = null);

(statearr_22091_22155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (6))){
var inst_22046 = (state_22081[(7)]);
var state_22081__$1 = state_22081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22081__$1,(11),inst_22046);
} else {
if((state_val_22082 === (17))){
var inst_22067 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
if(cljs.core.truth_(inst_22067)){
var statearr_22092_22156 = state_22081__$1;
(statearr_22092_22156[(1)] = (19));

} else {
var statearr_22093_22157 = state_22081__$1;
(statearr_22093_22157[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (3))){
var inst_22079 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22081__$1,inst_22079);
} else {
if((state_val_22082 === (12))){
var inst_22056 = (state_22081[(10)]);
var state_22081__$1 = state_22081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22081__$1,(14),inst_22056);
} else {
if((state_val_22082 === (2))){
var state_22081__$1 = state_22081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22081__$1,(4),results);
} else {
if((state_val_22082 === (19))){
var state_22081__$1 = state_22081;
var statearr_22094_22158 = state_22081__$1;
(statearr_22094_22158[(2)] = null);

(statearr_22094_22158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (11))){
var inst_22056 = (state_22081[(2)]);
var state_22081__$1 = (function (){var statearr_22095 = state_22081;
(statearr_22095[(10)] = inst_22056);

return statearr_22095;
})();
var statearr_22096_22159 = state_22081__$1;
(statearr_22096_22159[(2)] = null);

(statearr_22096_22159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (9))){
var state_22081__$1 = state_22081;
var statearr_22097_22160 = state_22081__$1;
(statearr_22097_22160[(2)] = null);

(statearr_22097_22160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (5))){
var state_22081__$1 = state_22081;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22098_22161 = state_22081__$1;
(statearr_22098_22161[(1)] = (8));

} else {
var statearr_22099_22162 = state_22081__$1;
(statearr_22099_22162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (14))){
var inst_22061 = (state_22081[(11)]);
var inst_22059 = (state_22081[(8)]);
var inst_22059__$1 = (state_22081[(2)]);
var inst_22060 = (inst_22059__$1 == null);
var inst_22061__$1 = cljs.core.not.call(null,inst_22060);
var state_22081__$1 = (function (){var statearr_22100 = state_22081;
(statearr_22100[(11)] = inst_22061__$1);

(statearr_22100[(8)] = inst_22059__$1);

return statearr_22100;
})();
if(inst_22061__$1){
var statearr_22101_22163 = state_22081__$1;
(statearr_22101_22163[(1)] = (15));

} else {
var statearr_22102_22164 = state_22081__$1;
(statearr_22102_22164[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (16))){
var inst_22061 = (state_22081[(11)]);
var state_22081__$1 = state_22081;
var statearr_22103_22165 = state_22081__$1;
(statearr_22103_22165[(2)] = inst_22061);

(statearr_22103_22165[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (10))){
var inst_22053 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
var statearr_22104_22166 = state_22081__$1;
(statearr_22104_22166[(2)] = inst_22053);

(statearr_22104_22166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (18))){
var inst_22064 = (state_22081[(2)]);
var state_22081__$1 = state_22081;
var statearr_22105_22167 = state_22081__$1;
(statearr_22105_22167[(2)] = inst_22064);

(statearr_22105_22167[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22082 === (8))){
var inst_22050 = cljs.core.async.close_BANG_.call(null,to);
var state_22081__$1 = state_22081;
var statearr_22106_22168 = state_22081__$1;
(statearr_22106_22168[(2)] = inst_22050);

(statearr_22106_22168[(1)] = (10));


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
});})(c__21564__auto__,jobs,results,process,async))
;
return ((function (switch__21452__auto__,c__21564__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____0 = (function (){
var statearr_22110 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__);

(statearr_22110[(1)] = (1));

return statearr_22110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____1 = (function (state_22081){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_22081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e22111){if((e22111 instanceof Object)){
var ex__21456__auto__ = e22111;
var statearr_22112_22169 = state_22081;
(statearr_22112_22169[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22170 = state_22081;
state_22081 = G__22170;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__ = function(state_22081){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____1.call(this,state_22081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto__,jobs,results,process,async))
})();
var state__21566__auto__ = (function (){var statearr_22113 = f__21565__auto__.call(null);
(statearr_22113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto__);

return statearr_22113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto__,jobs,results,process,async))
);

return c__21564__auto__;
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
var args22171 = [];
var len__17829__auto___22174 = arguments.length;
var i__17830__auto___22175 = (0);
while(true){
if((i__17830__auto___22175 < len__17829__auto___22174)){
args22171.push((arguments[i__17830__auto___22175]));

var G__22176 = (i__17830__auto___22175 + (1));
i__17830__auto___22175 = G__22176;
continue;
} else {
}
break;
}

var G__22173 = args22171.length;
switch (G__22173) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22171.length)].join('')));

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
var args22178 = [];
var len__17829__auto___22181 = arguments.length;
var i__17830__auto___22182 = (0);
while(true){
if((i__17830__auto___22182 < len__17829__auto___22181)){
args22178.push((arguments[i__17830__auto___22182]));

var G__22183 = (i__17830__auto___22182 + (1));
i__17830__auto___22182 = G__22183;
continue;
} else {
}
break;
}

var G__22180 = args22178.length;
switch (G__22180) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22178.length)].join('')));

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
var args22185 = [];
var len__17829__auto___22238 = arguments.length;
var i__17830__auto___22239 = (0);
while(true){
if((i__17830__auto___22239 < len__17829__auto___22238)){
args22185.push((arguments[i__17830__auto___22239]));

var G__22240 = (i__17830__auto___22239 + (1));
i__17830__auto___22239 = G__22240;
continue;
} else {
}
break;
}

var G__22187 = args22185.length;
switch (G__22187) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22185.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21564__auto___22242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto___22242,tc,fc){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto___22242,tc,fc){
return (function (state_22213){
var state_val_22214 = (state_22213[(1)]);
if((state_val_22214 === (7))){
var inst_22209 = (state_22213[(2)]);
var state_22213__$1 = state_22213;
var statearr_22215_22243 = state_22213__$1;
(statearr_22215_22243[(2)] = inst_22209);

(statearr_22215_22243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (1))){
var state_22213__$1 = state_22213;
var statearr_22216_22244 = state_22213__$1;
(statearr_22216_22244[(2)] = null);

(statearr_22216_22244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (4))){
var inst_22190 = (state_22213[(7)]);
var inst_22190__$1 = (state_22213[(2)]);
var inst_22191 = (inst_22190__$1 == null);
var state_22213__$1 = (function (){var statearr_22217 = state_22213;
(statearr_22217[(7)] = inst_22190__$1);

return statearr_22217;
})();
if(cljs.core.truth_(inst_22191)){
var statearr_22218_22245 = state_22213__$1;
(statearr_22218_22245[(1)] = (5));

} else {
var statearr_22219_22246 = state_22213__$1;
(statearr_22219_22246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (13))){
var state_22213__$1 = state_22213;
var statearr_22220_22247 = state_22213__$1;
(statearr_22220_22247[(2)] = null);

(statearr_22220_22247[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (6))){
var inst_22190 = (state_22213[(7)]);
var inst_22196 = p.call(null,inst_22190);
var state_22213__$1 = state_22213;
if(cljs.core.truth_(inst_22196)){
var statearr_22221_22248 = state_22213__$1;
(statearr_22221_22248[(1)] = (9));

} else {
var statearr_22222_22249 = state_22213__$1;
(statearr_22222_22249[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (3))){
var inst_22211 = (state_22213[(2)]);
var state_22213__$1 = state_22213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22213__$1,inst_22211);
} else {
if((state_val_22214 === (12))){
var state_22213__$1 = state_22213;
var statearr_22223_22250 = state_22213__$1;
(statearr_22223_22250[(2)] = null);

(statearr_22223_22250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (2))){
var state_22213__$1 = state_22213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22213__$1,(4),ch);
} else {
if((state_val_22214 === (11))){
var inst_22190 = (state_22213[(7)]);
var inst_22200 = (state_22213[(2)]);
var state_22213__$1 = state_22213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22213__$1,(8),inst_22200,inst_22190);
} else {
if((state_val_22214 === (9))){
var state_22213__$1 = state_22213;
var statearr_22224_22251 = state_22213__$1;
(statearr_22224_22251[(2)] = tc);

(statearr_22224_22251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (5))){
var inst_22193 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22194 = cljs.core.async.close_BANG_.call(null,fc);
var state_22213__$1 = (function (){var statearr_22225 = state_22213;
(statearr_22225[(8)] = inst_22193);

return statearr_22225;
})();
var statearr_22226_22252 = state_22213__$1;
(statearr_22226_22252[(2)] = inst_22194);

(statearr_22226_22252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (14))){
var inst_22207 = (state_22213[(2)]);
var state_22213__$1 = state_22213;
var statearr_22227_22253 = state_22213__$1;
(statearr_22227_22253[(2)] = inst_22207);

(statearr_22227_22253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (10))){
var state_22213__$1 = state_22213;
var statearr_22228_22254 = state_22213__$1;
(statearr_22228_22254[(2)] = fc);

(statearr_22228_22254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (8))){
var inst_22202 = (state_22213[(2)]);
var state_22213__$1 = state_22213;
if(cljs.core.truth_(inst_22202)){
var statearr_22229_22255 = state_22213__$1;
(statearr_22229_22255[(1)] = (12));

} else {
var statearr_22230_22256 = state_22213__$1;
(statearr_22230_22256[(1)] = (13));

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
});})(c__21564__auto___22242,tc,fc))
;
return ((function (switch__21452__auto__,c__21564__auto___22242,tc,fc){
return (function() {
var cljs$core$async$state_machine__21453__auto__ = null;
var cljs$core$async$state_machine__21453__auto____0 = (function (){
var statearr_22234 = [null,null,null,null,null,null,null,null,null];
(statearr_22234[(0)] = cljs$core$async$state_machine__21453__auto__);

(statearr_22234[(1)] = (1));

return statearr_22234;
});
var cljs$core$async$state_machine__21453__auto____1 = (function (state_22213){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_22213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e22235){if((e22235 instanceof Object)){
var ex__21456__auto__ = e22235;
var statearr_22236_22257 = state_22213;
(statearr_22236_22257[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22258 = state_22213;
state_22213 = G__22258;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$state_machine__21453__auto__ = function(state_22213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21453__auto____1.call(this,state_22213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21453__auto____0;
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21453__auto____1;
return cljs$core$async$state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto___22242,tc,fc))
})();
var state__21566__auto__ = (function (){var statearr_22237 = f__21565__auto__.call(null);
(statearr_22237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___22242);

return statearr_22237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto___22242,tc,fc))
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
var c__21564__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto__){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto__){
return (function (state_22322){
var state_val_22323 = (state_22322[(1)]);
if((state_val_22323 === (7))){
var inst_22318 = (state_22322[(2)]);
var state_22322__$1 = state_22322;
var statearr_22324_22345 = state_22322__$1;
(statearr_22324_22345[(2)] = inst_22318);

(statearr_22324_22345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (1))){
var inst_22302 = init;
var state_22322__$1 = (function (){var statearr_22325 = state_22322;
(statearr_22325[(7)] = inst_22302);

return statearr_22325;
})();
var statearr_22326_22346 = state_22322__$1;
(statearr_22326_22346[(2)] = null);

(statearr_22326_22346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (4))){
var inst_22305 = (state_22322[(8)]);
var inst_22305__$1 = (state_22322[(2)]);
var inst_22306 = (inst_22305__$1 == null);
var state_22322__$1 = (function (){var statearr_22327 = state_22322;
(statearr_22327[(8)] = inst_22305__$1);

return statearr_22327;
})();
if(cljs.core.truth_(inst_22306)){
var statearr_22328_22347 = state_22322__$1;
(statearr_22328_22347[(1)] = (5));

} else {
var statearr_22329_22348 = state_22322__$1;
(statearr_22329_22348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (6))){
var inst_22302 = (state_22322[(7)]);
var inst_22309 = (state_22322[(9)]);
var inst_22305 = (state_22322[(8)]);
var inst_22309__$1 = f.call(null,inst_22302,inst_22305);
var inst_22310 = cljs.core.reduced_QMARK_.call(null,inst_22309__$1);
var state_22322__$1 = (function (){var statearr_22330 = state_22322;
(statearr_22330[(9)] = inst_22309__$1);

return statearr_22330;
})();
if(inst_22310){
var statearr_22331_22349 = state_22322__$1;
(statearr_22331_22349[(1)] = (8));

} else {
var statearr_22332_22350 = state_22322__$1;
(statearr_22332_22350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (3))){
var inst_22320 = (state_22322[(2)]);
var state_22322__$1 = state_22322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22322__$1,inst_22320);
} else {
if((state_val_22323 === (2))){
var state_22322__$1 = state_22322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22322__$1,(4),ch);
} else {
if((state_val_22323 === (9))){
var inst_22309 = (state_22322[(9)]);
var inst_22302 = inst_22309;
var state_22322__$1 = (function (){var statearr_22333 = state_22322;
(statearr_22333[(7)] = inst_22302);

return statearr_22333;
})();
var statearr_22334_22351 = state_22322__$1;
(statearr_22334_22351[(2)] = null);

(statearr_22334_22351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (5))){
var inst_22302 = (state_22322[(7)]);
var state_22322__$1 = state_22322;
var statearr_22335_22352 = state_22322__$1;
(statearr_22335_22352[(2)] = inst_22302);

(statearr_22335_22352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (10))){
var inst_22316 = (state_22322[(2)]);
var state_22322__$1 = state_22322;
var statearr_22336_22353 = state_22322__$1;
(statearr_22336_22353[(2)] = inst_22316);

(statearr_22336_22353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (8))){
var inst_22309 = (state_22322[(9)]);
var inst_22312 = cljs.core.deref.call(null,inst_22309);
var state_22322__$1 = state_22322;
var statearr_22337_22354 = state_22322__$1;
(statearr_22337_22354[(2)] = inst_22312);

(statearr_22337_22354[(1)] = (10));


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
});})(c__21564__auto__))
;
return ((function (switch__21452__auto__,c__21564__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21453__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21453__auto____0 = (function (){
var statearr_22341 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22341[(0)] = cljs$core$async$reduce_$_state_machine__21453__auto__);

(statearr_22341[(1)] = (1));

return statearr_22341;
});
var cljs$core$async$reduce_$_state_machine__21453__auto____1 = (function (state_22322){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_22322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e22342){if((e22342 instanceof Object)){
var ex__21456__auto__ = e22342;
var statearr_22343_22355 = state_22322;
(statearr_22343_22355[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22356 = state_22322;
state_22322 = G__22356;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21453__auto__ = function(state_22322){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21453__auto____1.call(this,state_22322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21453__auto____0;
cljs$core$async$reduce_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21453__auto____1;
return cljs$core$async$reduce_$_state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto__))
})();
var state__21566__auto__ = (function (){var statearr_22344 = f__21565__auto__.call(null);
(statearr_22344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto__);

return statearr_22344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto__))
);

return c__21564__auto__;
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
var args22357 = [];
var len__17829__auto___22409 = arguments.length;
var i__17830__auto___22410 = (0);
while(true){
if((i__17830__auto___22410 < len__17829__auto___22409)){
args22357.push((arguments[i__17830__auto___22410]));

var G__22411 = (i__17830__auto___22410 + (1));
i__17830__auto___22410 = G__22411;
continue;
} else {
}
break;
}

var G__22359 = args22357.length;
switch (G__22359) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22357.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21564__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto__){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto__){
return (function (state_22384){
var state_val_22385 = (state_22384[(1)]);
if((state_val_22385 === (7))){
var inst_22366 = (state_22384[(2)]);
var state_22384__$1 = state_22384;
var statearr_22386_22413 = state_22384__$1;
(statearr_22386_22413[(2)] = inst_22366);

(statearr_22386_22413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (1))){
var inst_22360 = cljs.core.seq.call(null,coll);
var inst_22361 = inst_22360;
var state_22384__$1 = (function (){var statearr_22387 = state_22384;
(statearr_22387[(7)] = inst_22361);

return statearr_22387;
})();
var statearr_22388_22414 = state_22384__$1;
(statearr_22388_22414[(2)] = null);

(statearr_22388_22414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (4))){
var inst_22361 = (state_22384[(7)]);
var inst_22364 = cljs.core.first.call(null,inst_22361);
var state_22384__$1 = state_22384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22384__$1,(7),ch,inst_22364);
} else {
if((state_val_22385 === (13))){
var inst_22378 = (state_22384[(2)]);
var state_22384__$1 = state_22384;
var statearr_22389_22415 = state_22384__$1;
(statearr_22389_22415[(2)] = inst_22378);

(statearr_22389_22415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (6))){
var inst_22369 = (state_22384[(2)]);
var state_22384__$1 = state_22384;
if(cljs.core.truth_(inst_22369)){
var statearr_22390_22416 = state_22384__$1;
(statearr_22390_22416[(1)] = (8));

} else {
var statearr_22391_22417 = state_22384__$1;
(statearr_22391_22417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (3))){
var inst_22382 = (state_22384[(2)]);
var state_22384__$1 = state_22384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22384__$1,inst_22382);
} else {
if((state_val_22385 === (12))){
var state_22384__$1 = state_22384;
var statearr_22392_22418 = state_22384__$1;
(statearr_22392_22418[(2)] = null);

(statearr_22392_22418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (2))){
var inst_22361 = (state_22384[(7)]);
var state_22384__$1 = state_22384;
if(cljs.core.truth_(inst_22361)){
var statearr_22393_22419 = state_22384__$1;
(statearr_22393_22419[(1)] = (4));

} else {
var statearr_22394_22420 = state_22384__$1;
(statearr_22394_22420[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (11))){
var inst_22375 = cljs.core.async.close_BANG_.call(null,ch);
var state_22384__$1 = state_22384;
var statearr_22395_22421 = state_22384__$1;
(statearr_22395_22421[(2)] = inst_22375);

(statearr_22395_22421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (9))){
var state_22384__$1 = state_22384;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22396_22422 = state_22384__$1;
(statearr_22396_22422[(1)] = (11));

} else {
var statearr_22397_22423 = state_22384__$1;
(statearr_22397_22423[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (5))){
var inst_22361 = (state_22384[(7)]);
var state_22384__$1 = state_22384;
var statearr_22398_22424 = state_22384__$1;
(statearr_22398_22424[(2)] = inst_22361);

(statearr_22398_22424[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (10))){
var inst_22380 = (state_22384[(2)]);
var state_22384__$1 = state_22384;
var statearr_22399_22425 = state_22384__$1;
(statearr_22399_22425[(2)] = inst_22380);

(statearr_22399_22425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22385 === (8))){
var inst_22361 = (state_22384[(7)]);
var inst_22371 = cljs.core.next.call(null,inst_22361);
var inst_22361__$1 = inst_22371;
var state_22384__$1 = (function (){var statearr_22400 = state_22384;
(statearr_22400[(7)] = inst_22361__$1);

return statearr_22400;
})();
var statearr_22401_22426 = state_22384__$1;
(statearr_22401_22426[(2)] = null);

(statearr_22401_22426[(1)] = (2));


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
});})(c__21564__auto__))
;
return ((function (switch__21452__auto__,c__21564__auto__){
return (function() {
var cljs$core$async$state_machine__21453__auto__ = null;
var cljs$core$async$state_machine__21453__auto____0 = (function (){
var statearr_22405 = [null,null,null,null,null,null,null,null];
(statearr_22405[(0)] = cljs$core$async$state_machine__21453__auto__);

(statearr_22405[(1)] = (1));

return statearr_22405;
});
var cljs$core$async$state_machine__21453__auto____1 = (function (state_22384){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_22384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e22406){if((e22406 instanceof Object)){
var ex__21456__auto__ = e22406;
var statearr_22407_22427 = state_22384;
(statearr_22407_22427[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22428 = state_22384;
state_22384 = G__22428;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$state_machine__21453__auto__ = function(state_22384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21453__auto____1.call(this,state_22384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21453__auto____0;
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21453__auto____1;
return cljs$core$async$state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto__))
})();
var state__21566__auto__ = (function (){var statearr_22408 = f__21565__auto__.call(null);
(statearr_22408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto__);

return statearr_22408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto__))
);

return c__21564__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async22650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22650 = (function (mult,ch,cs,meta22651){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22651 = meta22651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22652,meta22651__$1){
var self__ = this;
var _22652__$1 = this;
return (new cljs.core.async.t_cljs$core$async22650(self__.mult,self__.ch,self__.cs,meta22651__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22650.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22652){
var self__ = this;
var _22652__$1 = this;
return self__.meta22651;
});})(cs))
;

cljs.core.async.t_cljs$core$async22650.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22650.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22650.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22650.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22650.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22650.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22650.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22651","meta22651",-171147654,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22650";

cljs.core.async.t_cljs$core$async22650.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22650");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22650 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22650(mult__$1,ch__$1,cs__$1,meta22651){
return (new cljs.core.async.t_cljs$core$async22650(mult__$1,ch__$1,cs__$1,meta22651));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22650(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21564__auto___22871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto___22871,cs,m,dchan,dctr,done){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto___22871,cs,m,dchan,dctr,done){
return (function (state_22783){
var state_val_22784 = (state_22783[(1)]);
if((state_val_22784 === (7))){
var inst_22779 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
var statearr_22785_22872 = state_22783__$1;
(statearr_22785_22872[(2)] = inst_22779);

(statearr_22785_22872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (20))){
var inst_22684 = (state_22783[(7)]);
var inst_22694 = cljs.core.first.call(null,inst_22684);
var inst_22695 = cljs.core.nth.call(null,inst_22694,(0),null);
var inst_22696 = cljs.core.nth.call(null,inst_22694,(1),null);
var state_22783__$1 = (function (){var statearr_22786 = state_22783;
(statearr_22786[(8)] = inst_22695);

return statearr_22786;
})();
if(cljs.core.truth_(inst_22696)){
var statearr_22787_22873 = state_22783__$1;
(statearr_22787_22873[(1)] = (22));

} else {
var statearr_22788_22874 = state_22783__$1;
(statearr_22788_22874[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (27))){
var inst_22655 = (state_22783[(9)]);
var inst_22724 = (state_22783[(10)]);
var inst_22726 = (state_22783[(11)]);
var inst_22731 = (state_22783[(12)]);
var inst_22731__$1 = cljs.core._nth.call(null,inst_22724,inst_22726);
var inst_22732 = cljs.core.async.put_BANG_.call(null,inst_22731__$1,inst_22655,done);
var state_22783__$1 = (function (){var statearr_22789 = state_22783;
(statearr_22789[(12)] = inst_22731__$1);

return statearr_22789;
})();
if(cljs.core.truth_(inst_22732)){
var statearr_22790_22875 = state_22783__$1;
(statearr_22790_22875[(1)] = (30));

} else {
var statearr_22791_22876 = state_22783__$1;
(statearr_22791_22876[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (1))){
var state_22783__$1 = state_22783;
var statearr_22792_22877 = state_22783__$1;
(statearr_22792_22877[(2)] = null);

(statearr_22792_22877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (24))){
var inst_22684 = (state_22783[(7)]);
var inst_22701 = (state_22783[(2)]);
var inst_22702 = cljs.core.next.call(null,inst_22684);
var inst_22664 = inst_22702;
var inst_22665 = null;
var inst_22666 = (0);
var inst_22667 = (0);
var state_22783__$1 = (function (){var statearr_22793 = state_22783;
(statearr_22793[(13)] = inst_22667);

(statearr_22793[(14)] = inst_22664);

(statearr_22793[(15)] = inst_22665);

(statearr_22793[(16)] = inst_22666);

(statearr_22793[(17)] = inst_22701);

return statearr_22793;
})();
var statearr_22794_22878 = state_22783__$1;
(statearr_22794_22878[(2)] = null);

(statearr_22794_22878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (39))){
var state_22783__$1 = state_22783;
var statearr_22798_22879 = state_22783__$1;
(statearr_22798_22879[(2)] = null);

(statearr_22798_22879[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (4))){
var inst_22655 = (state_22783[(9)]);
var inst_22655__$1 = (state_22783[(2)]);
var inst_22656 = (inst_22655__$1 == null);
var state_22783__$1 = (function (){var statearr_22799 = state_22783;
(statearr_22799[(9)] = inst_22655__$1);

return statearr_22799;
})();
if(cljs.core.truth_(inst_22656)){
var statearr_22800_22880 = state_22783__$1;
(statearr_22800_22880[(1)] = (5));

} else {
var statearr_22801_22881 = state_22783__$1;
(statearr_22801_22881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (15))){
var inst_22667 = (state_22783[(13)]);
var inst_22664 = (state_22783[(14)]);
var inst_22665 = (state_22783[(15)]);
var inst_22666 = (state_22783[(16)]);
var inst_22680 = (state_22783[(2)]);
var inst_22681 = (inst_22667 + (1));
var tmp22795 = inst_22664;
var tmp22796 = inst_22665;
var tmp22797 = inst_22666;
var inst_22664__$1 = tmp22795;
var inst_22665__$1 = tmp22796;
var inst_22666__$1 = tmp22797;
var inst_22667__$1 = inst_22681;
var state_22783__$1 = (function (){var statearr_22802 = state_22783;
(statearr_22802[(18)] = inst_22680);

(statearr_22802[(13)] = inst_22667__$1);

(statearr_22802[(14)] = inst_22664__$1);

(statearr_22802[(15)] = inst_22665__$1);

(statearr_22802[(16)] = inst_22666__$1);

return statearr_22802;
})();
var statearr_22803_22882 = state_22783__$1;
(statearr_22803_22882[(2)] = null);

(statearr_22803_22882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (21))){
var inst_22705 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
var statearr_22807_22883 = state_22783__$1;
(statearr_22807_22883[(2)] = inst_22705);

(statearr_22807_22883[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (31))){
var inst_22731 = (state_22783[(12)]);
var inst_22735 = done.call(null,null);
var inst_22736 = cljs.core.async.untap_STAR_.call(null,m,inst_22731);
var state_22783__$1 = (function (){var statearr_22808 = state_22783;
(statearr_22808[(19)] = inst_22735);

return statearr_22808;
})();
var statearr_22809_22884 = state_22783__$1;
(statearr_22809_22884[(2)] = inst_22736);

(statearr_22809_22884[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (32))){
var inst_22724 = (state_22783[(10)]);
var inst_22726 = (state_22783[(11)]);
var inst_22725 = (state_22783[(20)]);
var inst_22723 = (state_22783[(21)]);
var inst_22738 = (state_22783[(2)]);
var inst_22739 = (inst_22726 + (1));
var tmp22804 = inst_22724;
var tmp22805 = inst_22725;
var tmp22806 = inst_22723;
var inst_22723__$1 = tmp22806;
var inst_22724__$1 = tmp22804;
var inst_22725__$1 = tmp22805;
var inst_22726__$1 = inst_22739;
var state_22783__$1 = (function (){var statearr_22810 = state_22783;
(statearr_22810[(10)] = inst_22724__$1);

(statearr_22810[(11)] = inst_22726__$1);

(statearr_22810[(20)] = inst_22725__$1);

(statearr_22810[(21)] = inst_22723__$1);

(statearr_22810[(22)] = inst_22738);

return statearr_22810;
})();
var statearr_22811_22885 = state_22783__$1;
(statearr_22811_22885[(2)] = null);

(statearr_22811_22885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (40))){
var inst_22751 = (state_22783[(23)]);
var inst_22755 = done.call(null,null);
var inst_22756 = cljs.core.async.untap_STAR_.call(null,m,inst_22751);
var state_22783__$1 = (function (){var statearr_22812 = state_22783;
(statearr_22812[(24)] = inst_22755);

return statearr_22812;
})();
var statearr_22813_22886 = state_22783__$1;
(statearr_22813_22886[(2)] = inst_22756);

(statearr_22813_22886[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (33))){
var inst_22742 = (state_22783[(25)]);
var inst_22744 = cljs.core.chunked_seq_QMARK_.call(null,inst_22742);
var state_22783__$1 = state_22783;
if(inst_22744){
var statearr_22814_22887 = state_22783__$1;
(statearr_22814_22887[(1)] = (36));

} else {
var statearr_22815_22888 = state_22783__$1;
(statearr_22815_22888[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (13))){
var inst_22674 = (state_22783[(26)]);
var inst_22677 = cljs.core.async.close_BANG_.call(null,inst_22674);
var state_22783__$1 = state_22783;
var statearr_22816_22889 = state_22783__$1;
(statearr_22816_22889[(2)] = inst_22677);

(statearr_22816_22889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (22))){
var inst_22695 = (state_22783[(8)]);
var inst_22698 = cljs.core.async.close_BANG_.call(null,inst_22695);
var state_22783__$1 = state_22783;
var statearr_22817_22890 = state_22783__$1;
(statearr_22817_22890[(2)] = inst_22698);

(statearr_22817_22890[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (36))){
var inst_22742 = (state_22783[(25)]);
var inst_22746 = cljs.core.chunk_first.call(null,inst_22742);
var inst_22747 = cljs.core.chunk_rest.call(null,inst_22742);
var inst_22748 = cljs.core.count.call(null,inst_22746);
var inst_22723 = inst_22747;
var inst_22724 = inst_22746;
var inst_22725 = inst_22748;
var inst_22726 = (0);
var state_22783__$1 = (function (){var statearr_22818 = state_22783;
(statearr_22818[(10)] = inst_22724);

(statearr_22818[(11)] = inst_22726);

(statearr_22818[(20)] = inst_22725);

(statearr_22818[(21)] = inst_22723);

return statearr_22818;
})();
var statearr_22819_22891 = state_22783__$1;
(statearr_22819_22891[(2)] = null);

(statearr_22819_22891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (41))){
var inst_22742 = (state_22783[(25)]);
var inst_22758 = (state_22783[(2)]);
var inst_22759 = cljs.core.next.call(null,inst_22742);
var inst_22723 = inst_22759;
var inst_22724 = null;
var inst_22725 = (0);
var inst_22726 = (0);
var state_22783__$1 = (function (){var statearr_22820 = state_22783;
(statearr_22820[(27)] = inst_22758);

(statearr_22820[(10)] = inst_22724);

(statearr_22820[(11)] = inst_22726);

(statearr_22820[(20)] = inst_22725);

(statearr_22820[(21)] = inst_22723);

return statearr_22820;
})();
var statearr_22821_22892 = state_22783__$1;
(statearr_22821_22892[(2)] = null);

(statearr_22821_22892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (43))){
var state_22783__$1 = state_22783;
var statearr_22822_22893 = state_22783__$1;
(statearr_22822_22893[(2)] = null);

(statearr_22822_22893[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (29))){
var inst_22767 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
var statearr_22823_22894 = state_22783__$1;
(statearr_22823_22894[(2)] = inst_22767);

(statearr_22823_22894[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (44))){
var inst_22776 = (state_22783[(2)]);
var state_22783__$1 = (function (){var statearr_22824 = state_22783;
(statearr_22824[(28)] = inst_22776);

return statearr_22824;
})();
var statearr_22825_22895 = state_22783__$1;
(statearr_22825_22895[(2)] = null);

(statearr_22825_22895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (6))){
var inst_22715 = (state_22783[(29)]);
var inst_22714 = cljs.core.deref.call(null,cs);
var inst_22715__$1 = cljs.core.keys.call(null,inst_22714);
var inst_22716 = cljs.core.count.call(null,inst_22715__$1);
var inst_22717 = cljs.core.reset_BANG_.call(null,dctr,inst_22716);
var inst_22722 = cljs.core.seq.call(null,inst_22715__$1);
var inst_22723 = inst_22722;
var inst_22724 = null;
var inst_22725 = (0);
var inst_22726 = (0);
var state_22783__$1 = (function (){var statearr_22826 = state_22783;
(statearr_22826[(30)] = inst_22717);

(statearr_22826[(10)] = inst_22724);

(statearr_22826[(11)] = inst_22726);

(statearr_22826[(20)] = inst_22725);

(statearr_22826[(21)] = inst_22723);

(statearr_22826[(29)] = inst_22715__$1);

return statearr_22826;
})();
var statearr_22827_22896 = state_22783__$1;
(statearr_22827_22896[(2)] = null);

(statearr_22827_22896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (28))){
var inst_22742 = (state_22783[(25)]);
var inst_22723 = (state_22783[(21)]);
var inst_22742__$1 = cljs.core.seq.call(null,inst_22723);
var state_22783__$1 = (function (){var statearr_22828 = state_22783;
(statearr_22828[(25)] = inst_22742__$1);

return statearr_22828;
})();
if(inst_22742__$1){
var statearr_22829_22897 = state_22783__$1;
(statearr_22829_22897[(1)] = (33));

} else {
var statearr_22830_22898 = state_22783__$1;
(statearr_22830_22898[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (25))){
var inst_22726 = (state_22783[(11)]);
var inst_22725 = (state_22783[(20)]);
var inst_22728 = (inst_22726 < inst_22725);
var inst_22729 = inst_22728;
var state_22783__$1 = state_22783;
if(cljs.core.truth_(inst_22729)){
var statearr_22831_22899 = state_22783__$1;
(statearr_22831_22899[(1)] = (27));

} else {
var statearr_22832_22900 = state_22783__$1;
(statearr_22832_22900[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (34))){
var state_22783__$1 = state_22783;
var statearr_22833_22901 = state_22783__$1;
(statearr_22833_22901[(2)] = null);

(statearr_22833_22901[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (17))){
var state_22783__$1 = state_22783;
var statearr_22834_22902 = state_22783__$1;
(statearr_22834_22902[(2)] = null);

(statearr_22834_22902[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (3))){
var inst_22781 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22783__$1,inst_22781);
} else {
if((state_val_22784 === (12))){
var inst_22710 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
var statearr_22835_22903 = state_22783__$1;
(statearr_22835_22903[(2)] = inst_22710);

(statearr_22835_22903[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (2))){
var state_22783__$1 = state_22783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22783__$1,(4),ch);
} else {
if((state_val_22784 === (23))){
var state_22783__$1 = state_22783;
var statearr_22836_22904 = state_22783__$1;
(statearr_22836_22904[(2)] = null);

(statearr_22836_22904[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (35))){
var inst_22765 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
var statearr_22837_22905 = state_22783__$1;
(statearr_22837_22905[(2)] = inst_22765);

(statearr_22837_22905[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (19))){
var inst_22684 = (state_22783[(7)]);
var inst_22688 = cljs.core.chunk_first.call(null,inst_22684);
var inst_22689 = cljs.core.chunk_rest.call(null,inst_22684);
var inst_22690 = cljs.core.count.call(null,inst_22688);
var inst_22664 = inst_22689;
var inst_22665 = inst_22688;
var inst_22666 = inst_22690;
var inst_22667 = (0);
var state_22783__$1 = (function (){var statearr_22838 = state_22783;
(statearr_22838[(13)] = inst_22667);

(statearr_22838[(14)] = inst_22664);

(statearr_22838[(15)] = inst_22665);

(statearr_22838[(16)] = inst_22666);

return statearr_22838;
})();
var statearr_22839_22906 = state_22783__$1;
(statearr_22839_22906[(2)] = null);

(statearr_22839_22906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (11))){
var inst_22664 = (state_22783[(14)]);
var inst_22684 = (state_22783[(7)]);
var inst_22684__$1 = cljs.core.seq.call(null,inst_22664);
var state_22783__$1 = (function (){var statearr_22840 = state_22783;
(statearr_22840[(7)] = inst_22684__$1);

return statearr_22840;
})();
if(inst_22684__$1){
var statearr_22841_22907 = state_22783__$1;
(statearr_22841_22907[(1)] = (16));

} else {
var statearr_22842_22908 = state_22783__$1;
(statearr_22842_22908[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (9))){
var inst_22712 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
var statearr_22843_22909 = state_22783__$1;
(statearr_22843_22909[(2)] = inst_22712);

(statearr_22843_22909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (5))){
var inst_22662 = cljs.core.deref.call(null,cs);
var inst_22663 = cljs.core.seq.call(null,inst_22662);
var inst_22664 = inst_22663;
var inst_22665 = null;
var inst_22666 = (0);
var inst_22667 = (0);
var state_22783__$1 = (function (){var statearr_22844 = state_22783;
(statearr_22844[(13)] = inst_22667);

(statearr_22844[(14)] = inst_22664);

(statearr_22844[(15)] = inst_22665);

(statearr_22844[(16)] = inst_22666);

return statearr_22844;
})();
var statearr_22845_22910 = state_22783__$1;
(statearr_22845_22910[(2)] = null);

(statearr_22845_22910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (14))){
var state_22783__$1 = state_22783;
var statearr_22846_22911 = state_22783__$1;
(statearr_22846_22911[(2)] = null);

(statearr_22846_22911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (45))){
var inst_22773 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
var statearr_22847_22912 = state_22783__$1;
(statearr_22847_22912[(2)] = inst_22773);

(statearr_22847_22912[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (26))){
var inst_22715 = (state_22783[(29)]);
var inst_22769 = (state_22783[(2)]);
var inst_22770 = cljs.core.seq.call(null,inst_22715);
var state_22783__$1 = (function (){var statearr_22848 = state_22783;
(statearr_22848[(31)] = inst_22769);

return statearr_22848;
})();
if(inst_22770){
var statearr_22849_22913 = state_22783__$1;
(statearr_22849_22913[(1)] = (42));

} else {
var statearr_22850_22914 = state_22783__$1;
(statearr_22850_22914[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (16))){
var inst_22684 = (state_22783[(7)]);
var inst_22686 = cljs.core.chunked_seq_QMARK_.call(null,inst_22684);
var state_22783__$1 = state_22783;
if(inst_22686){
var statearr_22851_22915 = state_22783__$1;
(statearr_22851_22915[(1)] = (19));

} else {
var statearr_22852_22916 = state_22783__$1;
(statearr_22852_22916[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (38))){
var inst_22762 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
var statearr_22853_22917 = state_22783__$1;
(statearr_22853_22917[(2)] = inst_22762);

(statearr_22853_22917[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (30))){
var state_22783__$1 = state_22783;
var statearr_22854_22918 = state_22783__$1;
(statearr_22854_22918[(2)] = null);

(statearr_22854_22918[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (10))){
var inst_22667 = (state_22783[(13)]);
var inst_22665 = (state_22783[(15)]);
var inst_22673 = cljs.core._nth.call(null,inst_22665,inst_22667);
var inst_22674 = cljs.core.nth.call(null,inst_22673,(0),null);
var inst_22675 = cljs.core.nth.call(null,inst_22673,(1),null);
var state_22783__$1 = (function (){var statearr_22855 = state_22783;
(statearr_22855[(26)] = inst_22674);

return statearr_22855;
})();
if(cljs.core.truth_(inst_22675)){
var statearr_22856_22919 = state_22783__$1;
(statearr_22856_22919[(1)] = (13));

} else {
var statearr_22857_22920 = state_22783__$1;
(statearr_22857_22920[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (18))){
var inst_22708 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
var statearr_22858_22921 = state_22783__$1;
(statearr_22858_22921[(2)] = inst_22708);

(statearr_22858_22921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (42))){
var state_22783__$1 = state_22783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22783__$1,(45),dchan);
} else {
if((state_val_22784 === (37))){
var inst_22655 = (state_22783[(9)]);
var inst_22742 = (state_22783[(25)]);
var inst_22751 = (state_22783[(23)]);
var inst_22751__$1 = cljs.core.first.call(null,inst_22742);
var inst_22752 = cljs.core.async.put_BANG_.call(null,inst_22751__$1,inst_22655,done);
var state_22783__$1 = (function (){var statearr_22859 = state_22783;
(statearr_22859[(23)] = inst_22751__$1);

return statearr_22859;
})();
if(cljs.core.truth_(inst_22752)){
var statearr_22860_22922 = state_22783__$1;
(statearr_22860_22922[(1)] = (39));

} else {
var statearr_22861_22923 = state_22783__$1;
(statearr_22861_22923[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (8))){
var inst_22667 = (state_22783[(13)]);
var inst_22666 = (state_22783[(16)]);
var inst_22669 = (inst_22667 < inst_22666);
var inst_22670 = inst_22669;
var state_22783__$1 = state_22783;
if(cljs.core.truth_(inst_22670)){
var statearr_22862_22924 = state_22783__$1;
(statearr_22862_22924[(1)] = (10));

} else {
var statearr_22863_22925 = state_22783__$1;
(statearr_22863_22925[(1)] = (11));

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
});})(c__21564__auto___22871,cs,m,dchan,dctr,done))
;
return ((function (switch__21452__auto__,c__21564__auto___22871,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21453__auto__ = null;
var cljs$core$async$mult_$_state_machine__21453__auto____0 = (function (){
var statearr_22867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22867[(0)] = cljs$core$async$mult_$_state_machine__21453__auto__);

(statearr_22867[(1)] = (1));

return statearr_22867;
});
var cljs$core$async$mult_$_state_machine__21453__auto____1 = (function (state_22783){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_22783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e22868){if((e22868 instanceof Object)){
var ex__21456__auto__ = e22868;
var statearr_22869_22926 = state_22783;
(statearr_22869_22926[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22927 = state_22783;
state_22783 = G__22927;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21453__auto__ = function(state_22783){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21453__auto____1.call(this,state_22783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21453__auto____0;
cljs$core$async$mult_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21453__auto____1;
return cljs$core$async$mult_$_state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto___22871,cs,m,dchan,dctr,done))
})();
var state__21566__auto__ = (function (){var statearr_22870 = f__21565__auto__.call(null);
(statearr_22870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___22871);

return statearr_22870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto___22871,cs,m,dchan,dctr,done))
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
var args22928 = [];
var len__17829__auto___22931 = arguments.length;
var i__17830__auto___22932 = (0);
while(true){
if((i__17830__auto___22932 < len__17829__auto___22931)){
args22928.push((arguments[i__17830__auto___22932]));

var G__22933 = (i__17830__auto___22932 + (1));
i__17830__auto___22932 = G__22933;
continue;
} else {
}
break;
}

var G__22930 = args22928.length;
switch (G__22930) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22928.length)].join('')));

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
var len__17829__auto___22945 = arguments.length;
var i__17830__auto___22946 = (0);
while(true){
if((i__17830__auto___22946 < len__17829__auto___22945)){
args__17836__auto__.push((arguments[i__17830__auto___22946]));

var G__22947 = (i__17830__auto___22946 + (1));
i__17830__auto___22946 = G__22947;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((3) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17837__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22939){
var map__22940 = p__22939;
var map__22940__$1 = ((((!((map__22940 == null)))?((((map__22940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22940):map__22940);
var opts = map__22940__$1;
var statearr_22942_22948 = state;
(statearr_22942_22948[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22940,map__22940__$1,opts){
return (function (val){
var statearr_22943_22949 = state;
(statearr_22943_22949[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22940,map__22940__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22944_22950 = state;
(statearr_22944_22950[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22935){
var G__22936 = cljs.core.first.call(null,seq22935);
var seq22935__$1 = cljs.core.next.call(null,seq22935);
var G__22937 = cljs.core.first.call(null,seq22935__$1);
var seq22935__$2 = cljs.core.next.call(null,seq22935__$1);
var G__22938 = cljs.core.first.call(null,seq22935__$2);
var seq22935__$3 = cljs.core.next.call(null,seq22935__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22936,G__22937,G__22938,seq22935__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23114 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23114 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23115){
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
this.meta23115 = meta23115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23116,meta23115__$1){
var self__ = this;
var _23116__$1 = this;
return (new cljs.core.async.t_cljs$core$async23114(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23115__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23114.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23116){
var self__ = this;
var _23116__$1 = this;
return self__.meta23115;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23114.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23114.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23114.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23114.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23114.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23114.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23114.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23114.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23114.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23115","meta23115",1586996523,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23114.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23114";

cljs.core.async.t_cljs$core$async23114.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23114");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23114 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23114(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23115){
return (new cljs.core.async.t_cljs$core$async23114(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23115));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23114(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21564__auto___23277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto___23277,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto___23277,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23214){
var state_val_23215 = (state_23214[(1)]);
if((state_val_23215 === (7))){
var inst_23132 = (state_23214[(2)]);
var state_23214__$1 = state_23214;
var statearr_23216_23278 = state_23214__$1;
(statearr_23216_23278[(2)] = inst_23132);

(statearr_23216_23278[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (20))){
var inst_23144 = (state_23214[(7)]);
var state_23214__$1 = state_23214;
var statearr_23217_23279 = state_23214__$1;
(statearr_23217_23279[(2)] = inst_23144);

(statearr_23217_23279[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (27))){
var state_23214__$1 = state_23214;
var statearr_23218_23280 = state_23214__$1;
(statearr_23218_23280[(2)] = null);

(statearr_23218_23280[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (1))){
var inst_23120 = (state_23214[(8)]);
var inst_23120__$1 = calc_state.call(null);
var inst_23122 = (inst_23120__$1 == null);
var inst_23123 = cljs.core.not.call(null,inst_23122);
var state_23214__$1 = (function (){var statearr_23219 = state_23214;
(statearr_23219[(8)] = inst_23120__$1);

return statearr_23219;
})();
if(inst_23123){
var statearr_23220_23281 = state_23214__$1;
(statearr_23220_23281[(1)] = (2));

} else {
var statearr_23221_23282 = state_23214__$1;
(statearr_23221_23282[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (24))){
var inst_23174 = (state_23214[(9)]);
var inst_23167 = (state_23214[(10)]);
var inst_23188 = (state_23214[(11)]);
var inst_23188__$1 = inst_23167.call(null,inst_23174);
var state_23214__$1 = (function (){var statearr_23222 = state_23214;
(statearr_23222[(11)] = inst_23188__$1);

return statearr_23222;
})();
if(cljs.core.truth_(inst_23188__$1)){
var statearr_23223_23283 = state_23214__$1;
(statearr_23223_23283[(1)] = (29));

} else {
var statearr_23224_23284 = state_23214__$1;
(statearr_23224_23284[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (4))){
var inst_23135 = (state_23214[(2)]);
var state_23214__$1 = state_23214;
if(cljs.core.truth_(inst_23135)){
var statearr_23225_23285 = state_23214__$1;
(statearr_23225_23285[(1)] = (8));

} else {
var statearr_23226_23286 = state_23214__$1;
(statearr_23226_23286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (15))){
var inst_23161 = (state_23214[(2)]);
var state_23214__$1 = state_23214;
if(cljs.core.truth_(inst_23161)){
var statearr_23227_23287 = state_23214__$1;
(statearr_23227_23287[(1)] = (19));

} else {
var statearr_23228_23288 = state_23214__$1;
(statearr_23228_23288[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (21))){
var inst_23166 = (state_23214[(12)]);
var inst_23166__$1 = (state_23214[(2)]);
var inst_23167 = cljs.core.get.call(null,inst_23166__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23168 = cljs.core.get.call(null,inst_23166__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23169 = cljs.core.get.call(null,inst_23166__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23214__$1 = (function (){var statearr_23229 = state_23214;
(statearr_23229[(13)] = inst_23168);

(statearr_23229[(12)] = inst_23166__$1);

(statearr_23229[(10)] = inst_23167);

return statearr_23229;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23214__$1,(22),inst_23169);
} else {
if((state_val_23215 === (31))){
var inst_23196 = (state_23214[(2)]);
var state_23214__$1 = state_23214;
if(cljs.core.truth_(inst_23196)){
var statearr_23230_23289 = state_23214__$1;
(statearr_23230_23289[(1)] = (32));

} else {
var statearr_23231_23290 = state_23214__$1;
(statearr_23231_23290[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (32))){
var inst_23173 = (state_23214[(14)]);
var state_23214__$1 = state_23214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23214__$1,(35),out,inst_23173);
} else {
if((state_val_23215 === (33))){
var inst_23166 = (state_23214[(12)]);
var inst_23144 = inst_23166;
var state_23214__$1 = (function (){var statearr_23232 = state_23214;
(statearr_23232[(7)] = inst_23144);

return statearr_23232;
})();
var statearr_23233_23291 = state_23214__$1;
(statearr_23233_23291[(2)] = null);

(statearr_23233_23291[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (13))){
var inst_23144 = (state_23214[(7)]);
var inst_23151 = inst_23144.cljs$lang$protocol_mask$partition0$;
var inst_23152 = (inst_23151 & (64));
var inst_23153 = inst_23144.cljs$core$ISeq$;
var inst_23154 = (inst_23152) || (inst_23153);
var state_23214__$1 = state_23214;
if(cljs.core.truth_(inst_23154)){
var statearr_23234_23292 = state_23214__$1;
(statearr_23234_23292[(1)] = (16));

} else {
var statearr_23235_23293 = state_23214__$1;
(statearr_23235_23293[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (22))){
var inst_23173 = (state_23214[(14)]);
var inst_23174 = (state_23214[(9)]);
var inst_23172 = (state_23214[(2)]);
var inst_23173__$1 = cljs.core.nth.call(null,inst_23172,(0),null);
var inst_23174__$1 = cljs.core.nth.call(null,inst_23172,(1),null);
var inst_23175 = (inst_23173__$1 == null);
var inst_23176 = cljs.core._EQ_.call(null,inst_23174__$1,change);
var inst_23177 = (inst_23175) || (inst_23176);
var state_23214__$1 = (function (){var statearr_23236 = state_23214;
(statearr_23236[(14)] = inst_23173__$1);

(statearr_23236[(9)] = inst_23174__$1);

return statearr_23236;
})();
if(cljs.core.truth_(inst_23177)){
var statearr_23237_23294 = state_23214__$1;
(statearr_23237_23294[(1)] = (23));

} else {
var statearr_23238_23295 = state_23214__$1;
(statearr_23238_23295[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (36))){
var inst_23166 = (state_23214[(12)]);
var inst_23144 = inst_23166;
var state_23214__$1 = (function (){var statearr_23239 = state_23214;
(statearr_23239[(7)] = inst_23144);

return statearr_23239;
})();
var statearr_23240_23296 = state_23214__$1;
(statearr_23240_23296[(2)] = null);

(statearr_23240_23296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (29))){
var inst_23188 = (state_23214[(11)]);
var state_23214__$1 = state_23214;
var statearr_23241_23297 = state_23214__$1;
(statearr_23241_23297[(2)] = inst_23188);

(statearr_23241_23297[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (6))){
var state_23214__$1 = state_23214;
var statearr_23242_23298 = state_23214__$1;
(statearr_23242_23298[(2)] = false);

(statearr_23242_23298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (28))){
var inst_23184 = (state_23214[(2)]);
var inst_23185 = calc_state.call(null);
var inst_23144 = inst_23185;
var state_23214__$1 = (function (){var statearr_23243 = state_23214;
(statearr_23243[(7)] = inst_23144);

(statearr_23243[(15)] = inst_23184);

return statearr_23243;
})();
var statearr_23244_23299 = state_23214__$1;
(statearr_23244_23299[(2)] = null);

(statearr_23244_23299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (25))){
var inst_23210 = (state_23214[(2)]);
var state_23214__$1 = state_23214;
var statearr_23245_23300 = state_23214__$1;
(statearr_23245_23300[(2)] = inst_23210);

(statearr_23245_23300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (34))){
var inst_23208 = (state_23214[(2)]);
var state_23214__$1 = state_23214;
var statearr_23246_23301 = state_23214__$1;
(statearr_23246_23301[(2)] = inst_23208);

(statearr_23246_23301[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (17))){
var state_23214__$1 = state_23214;
var statearr_23247_23302 = state_23214__$1;
(statearr_23247_23302[(2)] = false);

(statearr_23247_23302[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (3))){
var state_23214__$1 = state_23214;
var statearr_23248_23303 = state_23214__$1;
(statearr_23248_23303[(2)] = false);

(statearr_23248_23303[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (12))){
var inst_23212 = (state_23214[(2)]);
var state_23214__$1 = state_23214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23214__$1,inst_23212);
} else {
if((state_val_23215 === (2))){
var inst_23120 = (state_23214[(8)]);
var inst_23125 = inst_23120.cljs$lang$protocol_mask$partition0$;
var inst_23126 = (inst_23125 & (64));
var inst_23127 = inst_23120.cljs$core$ISeq$;
var inst_23128 = (inst_23126) || (inst_23127);
var state_23214__$1 = state_23214;
if(cljs.core.truth_(inst_23128)){
var statearr_23249_23304 = state_23214__$1;
(statearr_23249_23304[(1)] = (5));

} else {
var statearr_23250_23305 = state_23214__$1;
(statearr_23250_23305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (23))){
var inst_23173 = (state_23214[(14)]);
var inst_23179 = (inst_23173 == null);
var state_23214__$1 = state_23214;
if(cljs.core.truth_(inst_23179)){
var statearr_23251_23306 = state_23214__$1;
(statearr_23251_23306[(1)] = (26));

} else {
var statearr_23252_23307 = state_23214__$1;
(statearr_23252_23307[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (35))){
var inst_23199 = (state_23214[(2)]);
var state_23214__$1 = state_23214;
if(cljs.core.truth_(inst_23199)){
var statearr_23253_23308 = state_23214__$1;
(statearr_23253_23308[(1)] = (36));

} else {
var statearr_23254_23309 = state_23214__$1;
(statearr_23254_23309[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (19))){
var inst_23144 = (state_23214[(7)]);
var inst_23163 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23144);
var state_23214__$1 = state_23214;
var statearr_23255_23310 = state_23214__$1;
(statearr_23255_23310[(2)] = inst_23163);

(statearr_23255_23310[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (11))){
var inst_23144 = (state_23214[(7)]);
var inst_23148 = (inst_23144 == null);
var inst_23149 = cljs.core.not.call(null,inst_23148);
var state_23214__$1 = state_23214;
if(inst_23149){
var statearr_23256_23311 = state_23214__$1;
(statearr_23256_23311[(1)] = (13));

} else {
var statearr_23257_23312 = state_23214__$1;
(statearr_23257_23312[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (9))){
var inst_23120 = (state_23214[(8)]);
var state_23214__$1 = state_23214;
var statearr_23258_23313 = state_23214__$1;
(statearr_23258_23313[(2)] = inst_23120);

(statearr_23258_23313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (5))){
var state_23214__$1 = state_23214;
var statearr_23259_23314 = state_23214__$1;
(statearr_23259_23314[(2)] = true);

(statearr_23259_23314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (14))){
var state_23214__$1 = state_23214;
var statearr_23260_23315 = state_23214__$1;
(statearr_23260_23315[(2)] = false);

(statearr_23260_23315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (26))){
var inst_23174 = (state_23214[(9)]);
var inst_23181 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23174);
var state_23214__$1 = state_23214;
var statearr_23261_23316 = state_23214__$1;
(statearr_23261_23316[(2)] = inst_23181);

(statearr_23261_23316[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (16))){
var state_23214__$1 = state_23214;
var statearr_23262_23317 = state_23214__$1;
(statearr_23262_23317[(2)] = true);

(statearr_23262_23317[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (38))){
var inst_23204 = (state_23214[(2)]);
var state_23214__$1 = state_23214;
var statearr_23263_23318 = state_23214__$1;
(statearr_23263_23318[(2)] = inst_23204);

(statearr_23263_23318[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (30))){
var inst_23168 = (state_23214[(13)]);
var inst_23174 = (state_23214[(9)]);
var inst_23167 = (state_23214[(10)]);
var inst_23191 = cljs.core.empty_QMARK_.call(null,inst_23167);
var inst_23192 = inst_23168.call(null,inst_23174);
var inst_23193 = cljs.core.not.call(null,inst_23192);
var inst_23194 = (inst_23191) && (inst_23193);
var state_23214__$1 = state_23214;
var statearr_23264_23319 = state_23214__$1;
(statearr_23264_23319[(2)] = inst_23194);

(statearr_23264_23319[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (10))){
var inst_23120 = (state_23214[(8)]);
var inst_23140 = (state_23214[(2)]);
var inst_23141 = cljs.core.get.call(null,inst_23140,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23142 = cljs.core.get.call(null,inst_23140,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23143 = cljs.core.get.call(null,inst_23140,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23144 = inst_23120;
var state_23214__$1 = (function (){var statearr_23265 = state_23214;
(statearr_23265[(7)] = inst_23144);

(statearr_23265[(16)] = inst_23142);

(statearr_23265[(17)] = inst_23141);

(statearr_23265[(18)] = inst_23143);

return statearr_23265;
})();
var statearr_23266_23320 = state_23214__$1;
(statearr_23266_23320[(2)] = null);

(statearr_23266_23320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (18))){
var inst_23158 = (state_23214[(2)]);
var state_23214__$1 = state_23214;
var statearr_23267_23321 = state_23214__$1;
(statearr_23267_23321[(2)] = inst_23158);

(statearr_23267_23321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (37))){
var state_23214__$1 = state_23214;
var statearr_23268_23322 = state_23214__$1;
(statearr_23268_23322[(2)] = null);

(statearr_23268_23322[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23215 === (8))){
var inst_23120 = (state_23214[(8)]);
var inst_23137 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23120);
var state_23214__$1 = state_23214;
var statearr_23269_23323 = state_23214__$1;
(statearr_23269_23323[(2)] = inst_23137);

(statearr_23269_23323[(1)] = (10));


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
});})(c__21564__auto___23277,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21452__auto__,c__21564__auto___23277,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21453__auto__ = null;
var cljs$core$async$mix_$_state_machine__21453__auto____0 = (function (){
var statearr_23273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23273[(0)] = cljs$core$async$mix_$_state_machine__21453__auto__);

(statearr_23273[(1)] = (1));

return statearr_23273;
});
var cljs$core$async$mix_$_state_machine__21453__auto____1 = (function (state_23214){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_23214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e23274){if((e23274 instanceof Object)){
var ex__21456__auto__ = e23274;
var statearr_23275_23324 = state_23214;
(statearr_23275_23324[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23325 = state_23214;
state_23214 = G__23325;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21453__auto__ = function(state_23214){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21453__auto____1.call(this,state_23214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21453__auto____0;
cljs$core$async$mix_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21453__auto____1;
return cljs$core$async$mix_$_state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto___23277,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21566__auto__ = (function (){var statearr_23276 = f__21565__auto__.call(null);
(statearr_23276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___23277);

return statearr_23276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto___23277,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args23326 = [];
var len__17829__auto___23329 = arguments.length;
var i__17830__auto___23330 = (0);
while(true){
if((i__17830__auto___23330 < len__17829__auto___23329)){
args23326.push((arguments[i__17830__auto___23330]));

var G__23331 = (i__17830__auto___23330 + (1));
i__17830__auto___23330 = G__23331;
continue;
} else {
}
break;
}

var G__23328 = args23326.length;
switch (G__23328) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23326.length)].join('')));

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
var args23334 = [];
var len__17829__auto___23459 = arguments.length;
var i__17830__auto___23460 = (0);
while(true){
if((i__17830__auto___23460 < len__17829__auto___23459)){
args23334.push((arguments[i__17830__auto___23460]));

var G__23461 = (i__17830__auto___23460 + (1));
i__17830__auto___23460 = G__23461;
continue;
} else {
}
break;
}

var G__23336 = args23334.length;
switch (G__23336) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23334.length)].join('')));

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
return (function (p1__23333_SHARP_){
if(cljs.core.truth_(p1__23333_SHARP_.call(null,topic))){
return p1__23333_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23333_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16771__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23337 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23337 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23338){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23338 = meta23338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23339,meta23338__$1){
var self__ = this;
var _23339__$1 = this;
return (new cljs.core.async.t_cljs$core$async23337(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23338__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23337.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23339){
var self__ = this;
var _23339__$1 = this;
return self__.meta23338;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23337.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23337.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23337.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23337.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23337.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23337.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23337.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23337.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23338","meta23338",-618752144,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23337.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23337";

cljs.core.async.t_cljs$core$async23337.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23337");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23337 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23337(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23338){
return (new cljs.core.async.t_cljs$core$async23337(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23338));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23337(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21564__auto___23463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto___23463,mults,ensure_mult,p){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto___23463,mults,ensure_mult,p){
return (function (state_23411){
var state_val_23412 = (state_23411[(1)]);
if((state_val_23412 === (7))){
var inst_23407 = (state_23411[(2)]);
var state_23411__$1 = state_23411;
var statearr_23413_23464 = state_23411__$1;
(statearr_23413_23464[(2)] = inst_23407);

(statearr_23413_23464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (20))){
var state_23411__$1 = state_23411;
var statearr_23414_23465 = state_23411__$1;
(statearr_23414_23465[(2)] = null);

(statearr_23414_23465[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (1))){
var state_23411__$1 = state_23411;
var statearr_23415_23466 = state_23411__$1;
(statearr_23415_23466[(2)] = null);

(statearr_23415_23466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (24))){
var inst_23390 = (state_23411[(7)]);
var inst_23399 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23390);
var state_23411__$1 = state_23411;
var statearr_23416_23467 = state_23411__$1;
(statearr_23416_23467[(2)] = inst_23399);

(statearr_23416_23467[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (4))){
var inst_23342 = (state_23411[(8)]);
var inst_23342__$1 = (state_23411[(2)]);
var inst_23343 = (inst_23342__$1 == null);
var state_23411__$1 = (function (){var statearr_23417 = state_23411;
(statearr_23417[(8)] = inst_23342__$1);

return statearr_23417;
})();
if(cljs.core.truth_(inst_23343)){
var statearr_23418_23468 = state_23411__$1;
(statearr_23418_23468[(1)] = (5));

} else {
var statearr_23419_23469 = state_23411__$1;
(statearr_23419_23469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (15))){
var inst_23384 = (state_23411[(2)]);
var state_23411__$1 = state_23411;
var statearr_23420_23470 = state_23411__$1;
(statearr_23420_23470[(2)] = inst_23384);

(statearr_23420_23470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (21))){
var inst_23404 = (state_23411[(2)]);
var state_23411__$1 = (function (){var statearr_23421 = state_23411;
(statearr_23421[(9)] = inst_23404);

return statearr_23421;
})();
var statearr_23422_23471 = state_23411__$1;
(statearr_23422_23471[(2)] = null);

(statearr_23422_23471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (13))){
var inst_23366 = (state_23411[(10)]);
var inst_23368 = cljs.core.chunked_seq_QMARK_.call(null,inst_23366);
var state_23411__$1 = state_23411;
if(inst_23368){
var statearr_23423_23472 = state_23411__$1;
(statearr_23423_23472[(1)] = (16));

} else {
var statearr_23424_23473 = state_23411__$1;
(statearr_23424_23473[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (22))){
var inst_23396 = (state_23411[(2)]);
var state_23411__$1 = state_23411;
if(cljs.core.truth_(inst_23396)){
var statearr_23425_23474 = state_23411__$1;
(statearr_23425_23474[(1)] = (23));

} else {
var statearr_23426_23475 = state_23411__$1;
(statearr_23426_23475[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (6))){
var inst_23392 = (state_23411[(11)]);
var inst_23342 = (state_23411[(8)]);
var inst_23390 = (state_23411[(7)]);
var inst_23390__$1 = topic_fn.call(null,inst_23342);
var inst_23391 = cljs.core.deref.call(null,mults);
var inst_23392__$1 = cljs.core.get.call(null,inst_23391,inst_23390__$1);
var state_23411__$1 = (function (){var statearr_23427 = state_23411;
(statearr_23427[(11)] = inst_23392__$1);

(statearr_23427[(7)] = inst_23390__$1);

return statearr_23427;
})();
if(cljs.core.truth_(inst_23392__$1)){
var statearr_23428_23476 = state_23411__$1;
(statearr_23428_23476[(1)] = (19));

} else {
var statearr_23429_23477 = state_23411__$1;
(statearr_23429_23477[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (25))){
var inst_23401 = (state_23411[(2)]);
var state_23411__$1 = state_23411;
var statearr_23430_23478 = state_23411__$1;
(statearr_23430_23478[(2)] = inst_23401);

(statearr_23430_23478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (17))){
var inst_23366 = (state_23411[(10)]);
var inst_23375 = cljs.core.first.call(null,inst_23366);
var inst_23376 = cljs.core.async.muxch_STAR_.call(null,inst_23375);
var inst_23377 = cljs.core.async.close_BANG_.call(null,inst_23376);
var inst_23378 = cljs.core.next.call(null,inst_23366);
var inst_23352 = inst_23378;
var inst_23353 = null;
var inst_23354 = (0);
var inst_23355 = (0);
var state_23411__$1 = (function (){var statearr_23431 = state_23411;
(statearr_23431[(12)] = inst_23353);

(statearr_23431[(13)] = inst_23354);

(statearr_23431[(14)] = inst_23355);

(statearr_23431[(15)] = inst_23377);

(statearr_23431[(16)] = inst_23352);

return statearr_23431;
})();
var statearr_23432_23479 = state_23411__$1;
(statearr_23432_23479[(2)] = null);

(statearr_23432_23479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (3))){
var inst_23409 = (state_23411[(2)]);
var state_23411__$1 = state_23411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23411__$1,inst_23409);
} else {
if((state_val_23412 === (12))){
var inst_23386 = (state_23411[(2)]);
var state_23411__$1 = state_23411;
var statearr_23433_23480 = state_23411__$1;
(statearr_23433_23480[(2)] = inst_23386);

(statearr_23433_23480[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (2))){
var state_23411__$1 = state_23411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23411__$1,(4),ch);
} else {
if((state_val_23412 === (23))){
var state_23411__$1 = state_23411;
var statearr_23434_23481 = state_23411__$1;
(statearr_23434_23481[(2)] = null);

(statearr_23434_23481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (19))){
var inst_23392 = (state_23411[(11)]);
var inst_23342 = (state_23411[(8)]);
var inst_23394 = cljs.core.async.muxch_STAR_.call(null,inst_23392);
var state_23411__$1 = state_23411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23411__$1,(22),inst_23394,inst_23342);
} else {
if((state_val_23412 === (11))){
var inst_23366 = (state_23411[(10)]);
var inst_23352 = (state_23411[(16)]);
var inst_23366__$1 = cljs.core.seq.call(null,inst_23352);
var state_23411__$1 = (function (){var statearr_23435 = state_23411;
(statearr_23435[(10)] = inst_23366__$1);

return statearr_23435;
})();
if(inst_23366__$1){
var statearr_23436_23482 = state_23411__$1;
(statearr_23436_23482[(1)] = (13));

} else {
var statearr_23437_23483 = state_23411__$1;
(statearr_23437_23483[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (9))){
var inst_23388 = (state_23411[(2)]);
var state_23411__$1 = state_23411;
var statearr_23438_23484 = state_23411__$1;
(statearr_23438_23484[(2)] = inst_23388);

(statearr_23438_23484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (5))){
var inst_23349 = cljs.core.deref.call(null,mults);
var inst_23350 = cljs.core.vals.call(null,inst_23349);
var inst_23351 = cljs.core.seq.call(null,inst_23350);
var inst_23352 = inst_23351;
var inst_23353 = null;
var inst_23354 = (0);
var inst_23355 = (0);
var state_23411__$1 = (function (){var statearr_23439 = state_23411;
(statearr_23439[(12)] = inst_23353);

(statearr_23439[(13)] = inst_23354);

(statearr_23439[(14)] = inst_23355);

(statearr_23439[(16)] = inst_23352);

return statearr_23439;
})();
var statearr_23440_23485 = state_23411__$1;
(statearr_23440_23485[(2)] = null);

(statearr_23440_23485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (14))){
var state_23411__$1 = state_23411;
var statearr_23444_23486 = state_23411__$1;
(statearr_23444_23486[(2)] = null);

(statearr_23444_23486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (16))){
var inst_23366 = (state_23411[(10)]);
var inst_23370 = cljs.core.chunk_first.call(null,inst_23366);
var inst_23371 = cljs.core.chunk_rest.call(null,inst_23366);
var inst_23372 = cljs.core.count.call(null,inst_23370);
var inst_23352 = inst_23371;
var inst_23353 = inst_23370;
var inst_23354 = inst_23372;
var inst_23355 = (0);
var state_23411__$1 = (function (){var statearr_23445 = state_23411;
(statearr_23445[(12)] = inst_23353);

(statearr_23445[(13)] = inst_23354);

(statearr_23445[(14)] = inst_23355);

(statearr_23445[(16)] = inst_23352);

return statearr_23445;
})();
var statearr_23446_23487 = state_23411__$1;
(statearr_23446_23487[(2)] = null);

(statearr_23446_23487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (10))){
var inst_23353 = (state_23411[(12)]);
var inst_23354 = (state_23411[(13)]);
var inst_23355 = (state_23411[(14)]);
var inst_23352 = (state_23411[(16)]);
var inst_23360 = cljs.core._nth.call(null,inst_23353,inst_23355);
var inst_23361 = cljs.core.async.muxch_STAR_.call(null,inst_23360);
var inst_23362 = cljs.core.async.close_BANG_.call(null,inst_23361);
var inst_23363 = (inst_23355 + (1));
var tmp23441 = inst_23353;
var tmp23442 = inst_23354;
var tmp23443 = inst_23352;
var inst_23352__$1 = tmp23443;
var inst_23353__$1 = tmp23441;
var inst_23354__$1 = tmp23442;
var inst_23355__$1 = inst_23363;
var state_23411__$1 = (function (){var statearr_23447 = state_23411;
(statearr_23447[(12)] = inst_23353__$1);

(statearr_23447[(13)] = inst_23354__$1);

(statearr_23447[(14)] = inst_23355__$1);

(statearr_23447[(17)] = inst_23362);

(statearr_23447[(16)] = inst_23352__$1);

return statearr_23447;
})();
var statearr_23448_23488 = state_23411__$1;
(statearr_23448_23488[(2)] = null);

(statearr_23448_23488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (18))){
var inst_23381 = (state_23411[(2)]);
var state_23411__$1 = state_23411;
var statearr_23449_23489 = state_23411__$1;
(statearr_23449_23489[(2)] = inst_23381);

(statearr_23449_23489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (8))){
var inst_23354 = (state_23411[(13)]);
var inst_23355 = (state_23411[(14)]);
var inst_23357 = (inst_23355 < inst_23354);
var inst_23358 = inst_23357;
var state_23411__$1 = state_23411;
if(cljs.core.truth_(inst_23358)){
var statearr_23450_23490 = state_23411__$1;
(statearr_23450_23490[(1)] = (10));

} else {
var statearr_23451_23491 = state_23411__$1;
(statearr_23451_23491[(1)] = (11));

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
});})(c__21564__auto___23463,mults,ensure_mult,p))
;
return ((function (switch__21452__auto__,c__21564__auto___23463,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21453__auto__ = null;
var cljs$core$async$state_machine__21453__auto____0 = (function (){
var statearr_23455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23455[(0)] = cljs$core$async$state_machine__21453__auto__);

(statearr_23455[(1)] = (1));

return statearr_23455;
});
var cljs$core$async$state_machine__21453__auto____1 = (function (state_23411){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_23411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e23456){if((e23456 instanceof Object)){
var ex__21456__auto__ = e23456;
var statearr_23457_23492 = state_23411;
(statearr_23457_23492[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23493 = state_23411;
state_23411 = G__23493;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$state_machine__21453__auto__ = function(state_23411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21453__auto____1.call(this,state_23411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21453__auto____0;
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21453__auto____1;
return cljs$core$async$state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto___23463,mults,ensure_mult,p))
})();
var state__21566__auto__ = (function (){var statearr_23458 = f__21565__auto__.call(null);
(statearr_23458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___23463);

return statearr_23458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto___23463,mults,ensure_mult,p))
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
var args23494 = [];
var len__17829__auto___23497 = arguments.length;
var i__17830__auto___23498 = (0);
while(true){
if((i__17830__auto___23498 < len__17829__auto___23497)){
args23494.push((arguments[i__17830__auto___23498]));

var G__23499 = (i__17830__auto___23498 + (1));
i__17830__auto___23498 = G__23499;
continue;
} else {
}
break;
}

var G__23496 = args23494.length;
switch (G__23496) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23494.length)].join('')));

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
var args23501 = [];
var len__17829__auto___23504 = arguments.length;
var i__17830__auto___23505 = (0);
while(true){
if((i__17830__auto___23505 < len__17829__auto___23504)){
args23501.push((arguments[i__17830__auto___23505]));

var G__23506 = (i__17830__auto___23505 + (1));
i__17830__auto___23505 = G__23506;
continue;
} else {
}
break;
}

var G__23503 = args23501.length;
switch (G__23503) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23501.length)].join('')));

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
var args23508 = [];
var len__17829__auto___23579 = arguments.length;
var i__17830__auto___23580 = (0);
while(true){
if((i__17830__auto___23580 < len__17829__auto___23579)){
args23508.push((arguments[i__17830__auto___23580]));

var G__23581 = (i__17830__auto___23580 + (1));
i__17830__auto___23580 = G__23581;
continue;
} else {
}
break;
}

var G__23510 = args23508.length;
switch (G__23510) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23508.length)].join('')));

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
var c__21564__auto___23583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto___23583,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto___23583,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23549){
var state_val_23550 = (state_23549[(1)]);
if((state_val_23550 === (7))){
var state_23549__$1 = state_23549;
var statearr_23551_23584 = state_23549__$1;
(statearr_23551_23584[(2)] = null);

(statearr_23551_23584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23550 === (1))){
var state_23549__$1 = state_23549;
var statearr_23552_23585 = state_23549__$1;
(statearr_23552_23585[(2)] = null);

(statearr_23552_23585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23550 === (4))){
var inst_23513 = (state_23549[(7)]);
var inst_23515 = (inst_23513 < cnt);
var state_23549__$1 = state_23549;
if(cljs.core.truth_(inst_23515)){
var statearr_23553_23586 = state_23549__$1;
(statearr_23553_23586[(1)] = (6));

} else {
var statearr_23554_23587 = state_23549__$1;
(statearr_23554_23587[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23550 === (15))){
var inst_23545 = (state_23549[(2)]);
var state_23549__$1 = state_23549;
var statearr_23555_23588 = state_23549__$1;
(statearr_23555_23588[(2)] = inst_23545);

(statearr_23555_23588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23550 === (13))){
var inst_23538 = cljs.core.async.close_BANG_.call(null,out);
var state_23549__$1 = state_23549;
var statearr_23556_23589 = state_23549__$1;
(statearr_23556_23589[(2)] = inst_23538);

(statearr_23556_23589[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23550 === (6))){
var state_23549__$1 = state_23549;
var statearr_23557_23590 = state_23549__$1;
(statearr_23557_23590[(2)] = null);

(statearr_23557_23590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23550 === (3))){
var inst_23547 = (state_23549[(2)]);
var state_23549__$1 = state_23549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23549__$1,inst_23547);
} else {
if((state_val_23550 === (12))){
var inst_23535 = (state_23549[(8)]);
var inst_23535__$1 = (state_23549[(2)]);
var inst_23536 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23535__$1);
var state_23549__$1 = (function (){var statearr_23558 = state_23549;
(statearr_23558[(8)] = inst_23535__$1);

return statearr_23558;
})();
if(cljs.core.truth_(inst_23536)){
var statearr_23559_23591 = state_23549__$1;
(statearr_23559_23591[(1)] = (13));

} else {
var statearr_23560_23592 = state_23549__$1;
(statearr_23560_23592[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23550 === (2))){
var inst_23512 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23513 = (0);
var state_23549__$1 = (function (){var statearr_23561 = state_23549;
(statearr_23561[(9)] = inst_23512);

(statearr_23561[(7)] = inst_23513);

return statearr_23561;
})();
var statearr_23562_23593 = state_23549__$1;
(statearr_23562_23593[(2)] = null);

(statearr_23562_23593[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23550 === (11))){
var inst_23513 = (state_23549[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23549,(10),Object,null,(9));
var inst_23522 = chs__$1.call(null,inst_23513);
var inst_23523 = done.call(null,inst_23513);
var inst_23524 = cljs.core.async.take_BANG_.call(null,inst_23522,inst_23523);
var state_23549__$1 = state_23549;
var statearr_23563_23594 = state_23549__$1;
(statearr_23563_23594[(2)] = inst_23524);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23549__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23550 === (9))){
var inst_23513 = (state_23549[(7)]);
var inst_23526 = (state_23549[(2)]);
var inst_23527 = (inst_23513 + (1));
var inst_23513__$1 = inst_23527;
var state_23549__$1 = (function (){var statearr_23564 = state_23549;
(statearr_23564[(10)] = inst_23526);

(statearr_23564[(7)] = inst_23513__$1);

return statearr_23564;
})();
var statearr_23565_23595 = state_23549__$1;
(statearr_23565_23595[(2)] = null);

(statearr_23565_23595[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23550 === (5))){
var inst_23533 = (state_23549[(2)]);
var state_23549__$1 = (function (){var statearr_23566 = state_23549;
(statearr_23566[(11)] = inst_23533);

return statearr_23566;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23549__$1,(12),dchan);
} else {
if((state_val_23550 === (14))){
var inst_23535 = (state_23549[(8)]);
var inst_23540 = cljs.core.apply.call(null,f,inst_23535);
var state_23549__$1 = state_23549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23549__$1,(16),out,inst_23540);
} else {
if((state_val_23550 === (16))){
var inst_23542 = (state_23549[(2)]);
var state_23549__$1 = (function (){var statearr_23567 = state_23549;
(statearr_23567[(12)] = inst_23542);

return statearr_23567;
})();
var statearr_23568_23596 = state_23549__$1;
(statearr_23568_23596[(2)] = null);

(statearr_23568_23596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23550 === (10))){
var inst_23517 = (state_23549[(2)]);
var inst_23518 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23549__$1 = (function (){var statearr_23569 = state_23549;
(statearr_23569[(13)] = inst_23517);

return statearr_23569;
})();
var statearr_23570_23597 = state_23549__$1;
(statearr_23570_23597[(2)] = inst_23518);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23549__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23550 === (8))){
var inst_23531 = (state_23549[(2)]);
var state_23549__$1 = state_23549;
var statearr_23571_23598 = state_23549__$1;
(statearr_23571_23598[(2)] = inst_23531);

(statearr_23571_23598[(1)] = (5));


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
});})(c__21564__auto___23583,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21452__auto__,c__21564__auto___23583,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21453__auto__ = null;
var cljs$core$async$state_machine__21453__auto____0 = (function (){
var statearr_23575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23575[(0)] = cljs$core$async$state_machine__21453__auto__);

(statearr_23575[(1)] = (1));

return statearr_23575;
});
var cljs$core$async$state_machine__21453__auto____1 = (function (state_23549){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_23549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e23576){if((e23576 instanceof Object)){
var ex__21456__auto__ = e23576;
var statearr_23577_23599 = state_23549;
(statearr_23577_23599[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23600 = state_23549;
state_23549 = G__23600;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$state_machine__21453__auto__ = function(state_23549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21453__auto____1.call(this,state_23549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21453__auto____0;
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21453__auto____1;
return cljs$core$async$state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto___23583,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21566__auto__ = (function (){var statearr_23578 = f__21565__auto__.call(null);
(statearr_23578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___23583);

return statearr_23578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto___23583,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args23602 = [];
var len__17829__auto___23658 = arguments.length;
var i__17830__auto___23659 = (0);
while(true){
if((i__17830__auto___23659 < len__17829__auto___23658)){
args23602.push((arguments[i__17830__auto___23659]));

var G__23660 = (i__17830__auto___23659 + (1));
i__17830__auto___23659 = G__23660;
continue;
} else {
}
break;
}

var G__23604 = args23602.length;
switch (G__23604) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23602.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21564__auto___23662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto___23662,out){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto___23662,out){
return (function (state_23634){
var state_val_23635 = (state_23634[(1)]);
if((state_val_23635 === (7))){
var inst_23613 = (state_23634[(7)]);
var inst_23614 = (state_23634[(8)]);
var inst_23613__$1 = (state_23634[(2)]);
var inst_23614__$1 = cljs.core.nth.call(null,inst_23613__$1,(0),null);
var inst_23615 = cljs.core.nth.call(null,inst_23613__$1,(1),null);
var inst_23616 = (inst_23614__$1 == null);
var state_23634__$1 = (function (){var statearr_23636 = state_23634;
(statearr_23636[(7)] = inst_23613__$1);

(statearr_23636[(9)] = inst_23615);

(statearr_23636[(8)] = inst_23614__$1);

return statearr_23636;
})();
if(cljs.core.truth_(inst_23616)){
var statearr_23637_23663 = state_23634__$1;
(statearr_23637_23663[(1)] = (8));

} else {
var statearr_23638_23664 = state_23634__$1;
(statearr_23638_23664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (1))){
var inst_23605 = cljs.core.vec.call(null,chs);
var inst_23606 = inst_23605;
var state_23634__$1 = (function (){var statearr_23639 = state_23634;
(statearr_23639[(10)] = inst_23606);

return statearr_23639;
})();
var statearr_23640_23665 = state_23634__$1;
(statearr_23640_23665[(2)] = null);

(statearr_23640_23665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (4))){
var inst_23606 = (state_23634[(10)]);
var state_23634__$1 = state_23634;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23634__$1,(7),inst_23606);
} else {
if((state_val_23635 === (6))){
var inst_23630 = (state_23634[(2)]);
var state_23634__$1 = state_23634;
var statearr_23641_23666 = state_23634__$1;
(statearr_23641_23666[(2)] = inst_23630);

(statearr_23641_23666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (3))){
var inst_23632 = (state_23634[(2)]);
var state_23634__$1 = state_23634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23634__$1,inst_23632);
} else {
if((state_val_23635 === (2))){
var inst_23606 = (state_23634[(10)]);
var inst_23608 = cljs.core.count.call(null,inst_23606);
var inst_23609 = (inst_23608 > (0));
var state_23634__$1 = state_23634;
if(cljs.core.truth_(inst_23609)){
var statearr_23643_23667 = state_23634__$1;
(statearr_23643_23667[(1)] = (4));

} else {
var statearr_23644_23668 = state_23634__$1;
(statearr_23644_23668[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (11))){
var inst_23606 = (state_23634[(10)]);
var inst_23623 = (state_23634[(2)]);
var tmp23642 = inst_23606;
var inst_23606__$1 = tmp23642;
var state_23634__$1 = (function (){var statearr_23645 = state_23634;
(statearr_23645[(11)] = inst_23623);

(statearr_23645[(10)] = inst_23606__$1);

return statearr_23645;
})();
var statearr_23646_23669 = state_23634__$1;
(statearr_23646_23669[(2)] = null);

(statearr_23646_23669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (9))){
var inst_23614 = (state_23634[(8)]);
var state_23634__$1 = state_23634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23634__$1,(11),out,inst_23614);
} else {
if((state_val_23635 === (5))){
var inst_23628 = cljs.core.async.close_BANG_.call(null,out);
var state_23634__$1 = state_23634;
var statearr_23647_23670 = state_23634__$1;
(statearr_23647_23670[(2)] = inst_23628);

(statearr_23647_23670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (10))){
var inst_23626 = (state_23634[(2)]);
var state_23634__$1 = state_23634;
var statearr_23648_23671 = state_23634__$1;
(statearr_23648_23671[(2)] = inst_23626);

(statearr_23648_23671[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23635 === (8))){
var inst_23613 = (state_23634[(7)]);
var inst_23615 = (state_23634[(9)]);
var inst_23614 = (state_23634[(8)]);
var inst_23606 = (state_23634[(10)]);
var inst_23618 = (function (){var cs = inst_23606;
var vec__23611 = inst_23613;
var v = inst_23614;
var c = inst_23615;
return ((function (cs,vec__23611,v,c,inst_23613,inst_23615,inst_23614,inst_23606,state_val_23635,c__21564__auto___23662,out){
return (function (p1__23601_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23601_SHARP_);
});
;})(cs,vec__23611,v,c,inst_23613,inst_23615,inst_23614,inst_23606,state_val_23635,c__21564__auto___23662,out))
})();
var inst_23619 = cljs.core.filterv.call(null,inst_23618,inst_23606);
var inst_23606__$1 = inst_23619;
var state_23634__$1 = (function (){var statearr_23649 = state_23634;
(statearr_23649[(10)] = inst_23606__$1);

return statearr_23649;
})();
var statearr_23650_23672 = state_23634__$1;
(statearr_23650_23672[(2)] = null);

(statearr_23650_23672[(1)] = (2));


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
});})(c__21564__auto___23662,out))
;
return ((function (switch__21452__auto__,c__21564__auto___23662,out){
return (function() {
var cljs$core$async$state_machine__21453__auto__ = null;
var cljs$core$async$state_machine__21453__auto____0 = (function (){
var statearr_23654 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23654[(0)] = cljs$core$async$state_machine__21453__auto__);

(statearr_23654[(1)] = (1));

return statearr_23654;
});
var cljs$core$async$state_machine__21453__auto____1 = (function (state_23634){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_23634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e23655){if((e23655 instanceof Object)){
var ex__21456__auto__ = e23655;
var statearr_23656_23673 = state_23634;
(statearr_23656_23673[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23674 = state_23634;
state_23634 = G__23674;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$state_machine__21453__auto__ = function(state_23634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21453__auto____1.call(this,state_23634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21453__auto____0;
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21453__auto____1;
return cljs$core$async$state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto___23662,out))
})();
var state__21566__auto__ = (function (){var statearr_23657 = f__21565__auto__.call(null);
(statearr_23657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___23662);

return statearr_23657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto___23662,out))
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
var args23675 = [];
var len__17829__auto___23724 = arguments.length;
var i__17830__auto___23725 = (0);
while(true){
if((i__17830__auto___23725 < len__17829__auto___23724)){
args23675.push((arguments[i__17830__auto___23725]));

var G__23726 = (i__17830__auto___23725 + (1));
i__17830__auto___23725 = G__23726;
continue;
} else {
}
break;
}

var G__23677 = args23675.length;
switch (G__23677) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23675.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21564__auto___23728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto___23728,out){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto___23728,out){
return (function (state_23701){
var state_val_23702 = (state_23701[(1)]);
if((state_val_23702 === (7))){
var inst_23683 = (state_23701[(7)]);
var inst_23683__$1 = (state_23701[(2)]);
var inst_23684 = (inst_23683__$1 == null);
var inst_23685 = cljs.core.not.call(null,inst_23684);
var state_23701__$1 = (function (){var statearr_23703 = state_23701;
(statearr_23703[(7)] = inst_23683__$1);

return statearr_23703;
})();
if(inst_23685){
var statearr_23704_23729 = state_23701__$1;
(statearr_23704_23729[(1)] = (8));

} else {
var statearr_23705_23730 = state_23701__$1;
(statearr_23705_23730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (1))){
var inst_23678 = (0);
var state_23701__$1 = (function (){var statearr_23706 = state_23701;
(statearr_23706[(8)] = inst_23678);

return statearr_23706;
})();
var statearr_23707_23731 = state_23701__$1;
(statearr_23707_23731[(2)] = null);

(statearr_23707_23731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (4))){
var state_23701__$1 = state_23701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23701__$1,(7),ch);
} else {
if((state_val_23702 === (6))){
var inst_23696 = (state_23701[(2)]);
var state_23701__$1 = state_23701;
var statearr_23708_23732 = state_23701__$1;
(statearr_23708_23732[(2)] = inst_23696);

(statearr_23708_23732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (3))){
var inst_23698 = (state_23701[(2)]);
var inst_23699 = cljs.core.async.close_BANG_.call(null,out);
var state_23701__$1 = (function (){var statearr_23709 = state_23701;
(statearr_23709[(9)] = inst_23698);

return statearr_23709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23701__$1,inst_23699);
} else {
if((state_val_23702 === (2))){
var inst_23678 = (state_23701[(8)]);
var inst_23680 = (inst_23678 < n);
var state_23701__$1 = state_23701;
if(cljs.core.truth_(inst_23680)){
var statearr_23710_23733 = state_23701__$1;
(statearr_23710_23733[(1)] = (4));

} else {
var statearr_23711_23734 = state_23701__$1;
(statearr_23711_23734[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (11))){
var inst_23678 = (state_23701[(8)]);
var inst_23688 = (state_23701[(2)]);
var inst_23689 = (inst_23678 + (1));
var inst_23678__$1 = inst_23689;
var state_23701__$1 = (function (){var statearr_23712 = state_23701;
(statearr_23712[(10)] = inst_23688);

(statearr_23712[(8)] = inst_23678__$1);

return statearr_23712;
})();
var statearr_23713_23735 = state_23701__$1;
(statearr_23713_23735[(2)] = null);

(statearr_23713_23735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (9))){
var state_23701__$1 = state_23701;
var statearr_23714_23736 = state_23701__$1;
(statearr_23714_23736[(2)] = null);

(statearr_23714_23736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (5))){
var state_23701__$1 = state_23701;
var statearr_23715_23737 = state_23701__$1;
(statearr_23715_23737[(2)] = null);

(statearr_23715_23737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (10))){
var inst_23693 = (state_23701[(2)]);
var state_23701__$1 = state_23701;
var statearr_23716_23738 = state_23701__$1;
(statearr_23716_23738[(2)] = inst_23693);

(statearr_23716_23738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (8))){
var inst_23683 = (state_23701[(7)]);
var state_23701__$1 = state_23701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23701__$1,(11),out,inst_23683);
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
});})(c__21564__auto___23728,out))
;
return ((function (switch__21452__auto__,c__21564__auto___23728,out){
return (function() {
var cljs$core$async$state_machine__21453__auto__ = null;
var cljs$core$async$state_machine__21453__auto____0 = (function (){
var statearr_23720 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23720[(0)] = cljs$core$async$state_machine__21453__auto__);

(statearr_23720[(1)] = (1));

return statearr_23720;
});
var cljs$core$async$state_machine__21453__auto____1 = (function (state_23701){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_23701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e23721){if((e23721 instanceof Object)){
var ex__21456__auto__ = e23721;
var statearr_23722_23739 = state_23701;
(statearr_23722_23739[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23740 = state_23701;
state_23701 = G__23740;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$state_machine__21453__auto__ = function(state_23701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21453__auto____1.call(this,state_23701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21453__auto____0;
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21453__auto____1;
return cljs$core$async$state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto___23728,out))
})();
var state__21566__auto__ = (function (){var statearr_23723 = f__21565__auto__.call(null);
(statearr_23723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___23728);

return statearr_23723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto___23728,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23748 = (function (map_LT_,f,ch,meta23749){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23749 = meta23749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23750,meta23749__$1){
var self__ = this;
var _23750__$1 = this;
return (new cljs.core.async.t_cljs$core$async23748(self__.map_LT_,self__.f,self__.ch,meta23749__$1));
});

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23750){
var self__ = this;
var _23750__$1 = this;
return self__.meta23749;
});

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23751 = (function (map_LT_,f,ch,meta23749,_,fn1,meta23752){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23749 = meta23749;
this._ = _;
this.fn1 = fn1;
this.meta23752 = meta23752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23753,meta23752__$1){
var self__ = this;
var _23753__$1 = this;
return (new cljs.core.async.t_cljs$core$async23751(self__.map_LT_,self__.f,self__.ch,self__.meta23749,self__._,self__.fn1,meta23752__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23753){
var self__ = this;
var _23753__$1 = this;
return self__.meta23752;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23751.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23751.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23751.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23751.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23741_SHARP_){
return f1.call(null,(((p1__23741_SHARP_ == null))?null:self__.f.call(null,p1__23741_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23751.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23749","meta23749",1380684322,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23748","cljs.core.async/t_cljs$core$async23748",161061059,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23752","meta23752",-2042857627,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23751.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23751";

cljs.core.async.t_cljs$core$async23751.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23751");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23751 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23751(map_LT___$1,f__$1,ch__$1,meta23749__$1,___$2,fn1__$1,meta23752){
return (new cljs.core.async.t_cljs$core$async23751(map_LT___$1,f__$1,ch__$1,meta23749__$1,___$2,fn1__$1,meta23752));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23751(self__.map_LT_,self__.f,self__.ch,self__.meta23749,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23749","meta23749",1380684322,null)], null);
});

cljs.core.async.t_cljs$core$async23748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23748";

cljs.core.async.t_cljs$core$async23748.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23748");
});

cljs.core.async.__GT_t_cljs$core$async23748 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23748(map_LT___$1,f__$1,ch__$1,meta23749){
return (new cljs.core.async.t_cljs$core$async23748(map_LT___$1,f__$1,ch__$1,meta23749));
});

}

return (new cljs.core.async.t_cljs$core$async23748(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23757 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23757 = (function (map_GT_,f,ch,meta23758){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23758 = meta23758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23759,meta23758__$1){
var self__ = this;
var _23759__$1 = this;
return (new cljs.core.async.t_cljs$core$async23757(self__.map_GT_,self__.f,self__.ch,meta23758__$1));
});

cljs.core.async.t_cljs$core$async23757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23759){
var self__ = this;
var _23759__$1 = this;
return self__.meta23758;
});

cljs.core.async.t_cljs$core$async23757.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23757.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23757.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23757.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23757.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23757.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23758","meta23758",814669075,null)], null);
});

cljs.core.async.t_cljs$core$async23757.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23757";

cljs.core.async.t_cljs$core$async23757.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23757");
});

cljs.core.async.__GT_t_cljs$core$async23757 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23757(map_GT___$1,f__$1,ch__$1,meta23758){
return (new cljs.core.async.t_cljs$core$async23757(map_GT___$1,f__$1,ch__$1,meta23758));
});

}

return (new cljs.core.async.t_cljs$core$async23757(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23763 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23763 = (function (filter_GT_,p,ch,meta23764){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23764 = meta23764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23765,meta23764__$1){
var self__ = this;
var _23765__$1 = this;
return (new cljs.core.async.t_cljs$core$async23763(self__.filter_GT_,self__.p,self__.ch,meta23764__$1));
});

cljs.core.async.t_cljs$core$async23763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23765){
var self__ = this;
var _23765__$1 = this;
return self__.meta23764;
});

cljs.core.async.t_cljs$core$async23763.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23763.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23763.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23763.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23763.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23763.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23763.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23764","meta23764",-1213524742,null)], null);
});

cljs.core.async.t_cljs$core$async23763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23763";

cljs.core.async.t_cljs$core$async23763.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23763");
});

cljs.core.async.__GT_t_cljs$core$async23763 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23763(filter_GT___$1,p__$1,ch__$1,meta23764){
return (new cljs.core.async.t_cljs$core$async23763(filter_GT___$1,p__$1,ch__$1,meta23764));
});

}

return (new cljs.core.async.t_cljs$core$async23763(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args23766 = [];
var len__17829__auto___23810 = arguments.length;
var i__17830__auto___23811 = (0);
while(true){
if((i__17830__auto___23811 < len__17829__auto___23810)){
args23766.push((arguments[i__17830__auto___23811]));

var G__23812 = (i__17830__auto___23811 + (1));
i__17830__auto___23811 = G__23812;
continue;
} else {
}
break;
}

var G__23768 = args23766.length;
switch (G__23768) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23766.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21564__auto___23814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto___23814,out){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto___23814,out){
return (function (state_23789){
var state_val_23790 = (state_23789[(1)]);
if((state_val_23790 === (7))){
var inst_23785 = (state_23789[(2)]);
var state_23789__$1 = state_23789;
var statearr_23791_23815 = state_23789__$1;
(statearr_23791_23815[(2)] = inst_23785);

(statearr_23791_23815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (1))){
var state_23789__$1 = state_23789;
var statearr_23792_23816 = state_23789__$1;
(statearr_23792_23816[(2)] = null);

(statearr_23792_23816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (4))){
var inst_23771 = (state_23789[(7)]);
var inst_23771__$1 = (state_23789[(2)]);
var inst_23772 = (inst_23771__$1 == null);
var state_23789__$1 = (function (){var statearr_23793 = state_23789;
(statearr_23793[(7)] = inst_23771__$1);

return statearr_23793;
})();
if(cljs.core.truth_(inst_23772)){
var statearr_23794_23817 = state_23789__$1;
(statearr_23794_23817[(1)] = (5));

} else {
var statearr_23795_23818 = state_23789__$1;
(statearr_23795_23818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (6))){
var inst_23771 = (state_23789[(7)]);
var inst_23776 = p.call(null,inst_23771);
var state_23789__$1 = state_23789;
if(cljs.core.truth_(inst_23776)){
var statearr_23796_23819 = state_23789__$1;
(statearr_23796_23819[(1)] = (8));

} else {
var statearr_23797_23820 = state_23789__$1;
(statearr_23797_23820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (3))){
var inst_23787 = (state_23789[(2)]);
var state_23789__$1 = state_23789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23789__$1,inst_23787);
} else {
if((state_val_23790 === (2))){
var state_23789__$1 = state_23789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23789__$1,(4),ch);
} else {
if((state_val_23790 === (11))){
var inst_23779 = (state_23789[(2)]);
var state_23789__$1 = state_23789;
var statearr_23798_23821 = state_23789__$1;
(statearr_23798_23821[(2)] = inst_23779);

(statearr_23798_23821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (9))){
var state_23789__$1 = state_23789;
var statearr_23799_23822 = state_23789__$1;
(statearr_23799_23822[(2)] = null);

(statearr_23799_23822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (5))){
var inst_23774 = cljs.core.async.close_BANG_.call(null,out);
var state_23789__$1 = state_23789;
var statearr_23800_23823 = state_23789__$1;
(statearr_23800_23823[(2)] = inst_23774);

(statearr_23800_23823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (10))){
var inst_23782 = (state_23789[(2)]);
var state_23789__$1 = (function (){var statearr_23801 = state_23789;
(statearr_23801[(8)] = inst_23782);

return statearr_23801;
})();
var statearr_23802_23824 = state_23789__$1;
(statearr_23802_23824[(2)] = null);

(statearr_23802_23824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (8))){
var inst_23771 = (state_23789[(7)]);
var state_23789__$1 = state_23789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23789__$1,(11),out,inst_23771);
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
});})(c__21564__auto___23814,out))
;
return ((function (switch__21452__auto__,c__21564__auto___23814,out){
return (function() {
var cljs$core$async$state_machine__21453__auto__ = null;
var cljs$core$async$state_machine__21453__auto____0 = (function (){
var statearr_23806 = [null,null,null,null,null,null,null,null,null];
(statearr_23806[(0)] = cljs$core$async$state_machine__21453__auto__);

(statearr_23806[(1)] = (1));

return statearr_23806;
});
var cljs$core$async$state_machine__21453__auto____1 = (function (state_23789){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_23789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e23807){if((e23807 instanceof Object)){
var ex__21456__auto__ = e23807;
var statearr_23808_23825 = state_23789;
(statearr_23808_23825[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23826 = state_23789;
state_23789 = G__23826;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$state_machine__21453__auto__ = function(state_23789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21453__auto____1.call(this,state_23789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21453__auto____0;
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21453__auto____1;
return cljs$core$async$state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto___23814,out))
})();
var state__21566__auto__ = (function (){var statearr_23809 = f__21565__auto__.call(null);
(statearr_23809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___23814);

return statearr_23809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto___23814,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23827 = [];
var len__17829__auto___23830 = arguments.length;
var i__17830__auto___23831 = (0);
while(true){
if((i__17830__auto___23831 < len__17829__auto___23830)){
args23827.push((arguments[i__17830__auto___23831]));

var G__23832 = (i__17830__auto___23831 + (1));
i__17830__auto___23831 = G__23832;
continue;
} else {
}
break;
}

var G__23829 = args23827.length;
switch (G__23829) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23827.length)].join('')));

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
var c__21564__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto__){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto__){
return (function (state_23999){
var state_val_24000 = (state_23999[(1)]);
if((state_val_24000 === (7))){
var inst_23995 = (state_23999[(2)]);
var state_23999__$1 = state_23999;
var statearr_24001_24042 = state_23999__$1;
(statearr_24001_24042[(2)] = inst_23995);

(statearr_24001_24042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (20))){
var inst_23965 = (state_23999[(7)]);
var inst_23976 = (state_23999[(2)]);
var inst_23977 = cljs.core.next.call(null,inst_23965);
var inst_23951 = inst_23977;
var inst_23952 = null;
var inst_23953 = (0);
var inst_23954 = (0);
var state_23999__$1 = (function (){var statearr_24002 = state_23999;
(statearr_24002[(8)] = inst_23954);

(statearr_24002[(9)] = inst_23953);

(statearr_24002[(10)] = inst_23976);

(statearr_24002[(11)] = inst_23952);

(statearr_24002[(12)] = inst_23951);

return statearr_24002;
})();
var statearr_24003_24043 = state_23999__$1;
(statearr_24003_24043[(2)] = null);

(statearr_24003_24043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (1))){
var state_23999__$1 = state_23999;
var statearr_24004_24044 = state_23999__$1;
(statearr_24004_24044[(2)] = null);

(statearr_24004_24044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (4))){
var inst_23940 = (state_23999[(13)]);
var inst_23940__$1 = (state_23999[(2)]);
var inst_23941 = (inst_23940__$1 == null);
var state_23999__$1 = (function (){var statearr_24005 = state_23999;
(statearr_24005[(13)] = inst_23940__$1);

return statearr_24005;
})();
if(cljs.core.truth_(inst_23941)){
var statearr_24006_24045 = state_23999__$1;
(statearr_24006_24045[(1)] = (5));

} else {
var statearr_24007_24046 = state_23999__$1;
(statearr_24007_24046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (15))){
var state_23999__$1 = state_23999;
var statearr_24011_24047 = state_23999__$1;
(statearr_24011_24047[(2)] = null);

(statearr_24011_24047[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (21))){
var state_23999__$1 = state_23999;
var statearr_24012_24048 = state_23999__$1;
(statearr_24012_24048[(2)] = null);

(statearr_24012_24048[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (13))){
var inst_23954 = (state_23999[(8)]);
var inst_23953 = (state_23999[(9)]);
var inst_23952 = (state_23999[(11)]);
var inst_23951 = (state_23999[(12)]);
var inst_23961 = (state_23999[(2)]);
var inst_23962 = (inst_23954 + (1));
var tmp24008 = inst_23953;
var tmp24009 = inst_23952;
var tmp24010 = inst_23951;
var inst_23951__$1 = tmp24010;
var inst_23952__$1 = tmp24009;
var inst_23953__$1 = tmp24008;
var inst_23954__$1 = inst_23962;
var state_23999__$1 = (function (){var statearr_24013 = state_23999;
(statearr_24013[(8)] = inst_23954__$1);

(statearr_24013[(9)] = inst_23953__$1);

(statearr_24013[(14)] = inst_23961);

(statearr_24013[(11)] = inst_23952__$1);

(statearr_24013[(12)] = inst_23951__$1);

return statearr_24013;
})();
var statearr_24014_24049 = state_23999__$1;
(statearr_24014_24049[(2)] = null);

(statearr_24014_24049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (22))){
var state_23999__$1 = state_23999;
var statearr_24015_24050 = state_23999__$1;
(statearr_24015_24050[(2)] = null);

(statearr_24015_24050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (6))){
var inst_23940 = (state_23999[(13)]);
var inst_23949 = f.call(null,inst_23940);
var inst_23950 = cljs.core.seq.call(null,inst_23949);
var inst_23951 = inst_23950;
var inst_23952 = null;
var inst_23953 = (0);
var inst_23954 = (0);
var state_23999__$1 = (function (){var statearr_24016 = state_23999;
(statearr_24016[(8)] = inst_23954);

(statearr_24016[(9)] = inst_23953);

(statearr_24016[(11)] = inst_23952);

(statearr_24016[(12)] = inst_23951);

return statearr_24016;
})();
var statearr_24017_24051 = state_23999__$1;
(statearr_24017_24051[(2)] = null);

(statearr_24017_24051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (17))){
var inst_23965 = (state_23999[(7)]);
var inst_23969 = cljs.core.chunk_first.call(null,inst_23965);
var inst_23970 = cljs.core.chunk_rest.call(null,inst_23965);
var inst_23971 = cljs.core.count.call(null,inst_23969);
var inst_23951 = inst_23970;
var inst_23952 = inst_23969;
var inst_23953 = inst_23971;
var inst_23954 = (0);
var state_23999__$1 = (function (){var statearr_24018 = state_23999;
(statearr_24018[(8)] = inst_23954);

(statearr_24018[(9)] = inst_23953);

(statearr_24018[(11)] = inst_23952);

(statearr_24018[(12)] = inst_23951);

return statearr_24018;
})();
var statearr_24019_24052 = state_23999__$1;
(statearr_24019_24052[(2)] = null);

(statearr_24019_24052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (3))){
var inst_23997 = (state_23999[(2)]);
var state_23999__$1 = state_23999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23999__$1,inst_23997);
} else {
if((state_val_24000 === (12))){
var inst_23985 = (state_23999[(2)]);
var state_23999__$1 = state_23999;
var statearr_24020_24053 = state_23999__$1;
(statearr_24020_24053[(2)] = inst_23985);

(statearr_24020_24053[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (2))){
var state_23999__$1 = state_23999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23999__$1,(4),in$);
} else {
if((state_val_24000 === (23))){
var inst_23993 = (state_23999[(2)]);
var state_23999__$1 = state_23999;
var statearr_24021_24054 = state_23999__$1;
(statearr_24021_24054[(2)] = inst_23993);

(statearr_24021_24054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (19))){
var inst_23980 = (state_23999[(2)]);
var state_23999__$1 = state_23999;
var statearr_24022_24055 = state_23999__$1;
(statearr_24022_24055[(2)] = inst_23980);

(statearr_24022_24055[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (11))){
var inst_23965 = (state_23999[(7)]);
var inst_23951 = (state_23999[(12)]);
var inst_23965__$1 = cljs.core.seq.call(null,inst_23951);
var state_23999__$1 = (function (){var statearr_24023 = state_23999;
(statearr_24023[(7)] = inst_23965__$1);

return statearr_24023;
})();
if(inst_23965__$1){
var statearr_24024_24056 = state_23999__$1;
(statearr_24024_24056[(1)] = (14));

} else {
var statearr_24025_24057 = state_23999__$1;
(statearr_24025_24057[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (9))){
var inst_23987 = (state_23999[(2)]);
var inst_23988 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23999__$1 = (function (){var statearr_24026 = state_23999;
(statearr_24026[(15)] = inst_23987);

return statearr_24026;
})();
if(cljs.core.truth_(inst_23988)){
var statearr_24027_24058 = state_23999__$1;
(statearr_24027_24058[(1)] = (21));

} else {
var statearr_24028_24059 = state_23999__$1;
(statearr_24028_24059[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (5))){
var inst_23943 = cljs.core.async.close_BANG_.call(null,out);
var state_23999__$1 = state_23999;
var statearr_24029_24060 = state_23999__$1;
(statearr_24029_24060[(2)] = inst_23943);

(statearr_24029_24060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (14))){
var inst_23965 = (state_23999[(7)]);
var inst_23967 = cljs.core.chunked_seq_QMARK_.call(null,inst_23965);
var state_23999__$1 = state_23999;
if(inst_23967){
var statearr_24030_24061 = state_23999__$1;
(statearr_24030_24061[(1)] = (17));

} else {
var statearr_24031_24062 = state_23999__$1;
(statearr_24031_24062[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (16))){
var inst_23983 = (state_23999[(2)]);
var state_23999__$1 = state_23999;
var statearr_24032_24063 = state_23999__$1;
(statearr_24032_24063[(2)] = inst_23983);

(statearr_24032_24063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (10))){
var inst_23954 = (state_23999[(8)]);
var inst_23952 = (state_23999[(11)]);
var inst_23959 = cljs.core._nth.call(null,inst_23952,inst_23954);
var state_23999__$1 = state_23999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23999__$1,(13),out,inst_23959);
} else {
if((state_val_24000 === (18))){
var inst_23965 = (state_23999[(7)]);
var inst_23974 = cljs.core.first.call(null,inst_23965);
var state_23999__$1 = state_23999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23999__$1,(20),out,inst_23974);
} else {
if((state_val_24000 === (8))){
var inst_23954 = (state_23999[(8)]);
var inst_23953 = (state_23999[(9)]);
var inst_23956 = (inst_23954 < inst_23953);
var inst_23957 = inst_23956;
var state_23999__$1 = state_23999;
if(cljs.core.truth_(inst_23957)){
var statearr_24033_24064 = state_23999__$1;
(statearr_24033_24064[(1)] = (10));

} else {
var statearr_24034_24065 = state_23999__$1;
(statearr_24034_24065[(1)] = (11));

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
});})(c__21564__auto__))
;
return ((function (switch__21452__auto__,c__21564__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21453__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21453__auto____0 = (function (){
var statearr_24038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24038[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21453__auto__);

(statearr_24038[(1)] = (1));

return statearr_24038;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21453__auto____1 = (function (state_23999){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_23999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e24039){if((e24039 instanceof Object)){
var ex__21456__auto__ = e24039;
var statearr_24040_24066 = state_23999;
(statearr_24040_24066[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24067 = state_23999;
state_23999 = G__24067;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21453__auto__ = function(state_23999){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21453__auto____1.call(this,state_23999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21453__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21453__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto__))
})();
var state__21566__auto__ = (function (){var statearr_24041 = f__21565__auto__.call(null);
(statearr_24041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto__);

return statearr_24041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto__))
);

return c__21564__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24068 = [];
var len__17829__auto___24071 = arguments.length;
var i__17830__auto___24072 = (0);
while(true){
if((i__17830__auto___24072 < len__17829__auto___24071)){
args24068.push((arguments[i__17830__auto___24072]));

var G__24073 = (i__17830__auto___24072 + (1));
i__17830__auto___24072 = G__24073;
continue;
} else {
}
break;
}

var G__24070 = args24068.length;
switch (G__24070) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24068.length)].join('')));

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
var args24075 = [];
var len__17829__auto___24078 = arguments.length;
var i__17830__auto___24079 = (0);
while(true){
if((i__17830__auto___24079 < len__17829__auto___24078)){
args24075.push((arguments[i__17830__auto___24079]));

var G__24080 = (i__17830__auto___24079 + (1));
i__17830__auto___24079 = G__24080;
continue;
} else {
}
break;
}

var G__24077 = args24075.length;
switch (G__24077) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24075.length)].join('')));

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
var args24082 = [];
var len__17829__auto___24133 = arguments.length;
var i__17830__auto___24134 = (0);
while(true){
if((i__17830__auto___24134 < len__17829__auto___24133)){
args24082.push((arguments[i__17830__auto___24134]));

var G__24135 = (i__17830__auto___24134 + (1));
i__17830__auto___24134 = G__24135;
continue;
} else {
}
break;
}

var G__24084 = args24082.length;
switch (G__24084) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24082.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21564__auto___24137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto___24137,out){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto___24137,out){
return (function (state_24108){
var state_val_24109 = (state_24108[(1)]);
if((state_val_24109 === (7))){
var inst_24103 = (state_24108[(2)]);
var state_24108__$1 = state_24108;
var statearr_24110_24138 = state_24108__$1;
(statearr_24110_24138[(2)] = inst_24103);

(statearr_24110_24138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24109 === (1))){
var inst_24085 = null;
var state_24108__$1 = (function (){var statearr_24111 = state_24108;
(statearr_24111[(7)] = inst_24085);

return statearr_24111;
})();
var statearr_24112_24139 = state_24108__$1;
(statearr_24112_24139[(2)] = null);

(statearr_24112_24139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24109 === (4))){
var inst_24088 = (state_24108[(8)]);
var inst_24088__$1 = (state_24108[(2)]);
var inst_24089 = (inst_24088__$1 == null);
var inst_24090 = cljs.core.not.call(null,inst_24089);
var state_24108__$1 = (function (){var statearr_24113 = state_24108;
(statearr_24113[(8)] = inst_24088__$1);

return statearr_24113;
})();
if(inst_24090){
var statearr_24114_24140 = state_24108__$1;
(statearr_24114_24140[(1)] = (5));

} else {
var statearr_24115_24141 = state_24108__$1;
(statearr_24115_24141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24109 === (6))){
var state_24108__$1 = state_24108;
var statearr_24116_24142 = state_24108__$1;
(statearr_24116_24142[(2)] = null);

(statearr_24116_24142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24109 === (3))){
var inst_24105 = (state_24108[(2)]);
var inst_24106 = cljs.core.async.close_BANG_.call(null,out);
var state_24108__$1 = (function (){var statearr_24117 = state_24108;
(statearr_24117[(9)] = inst_24105);

return statearr_24117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24108__$1,inst_24106);
} else {
if((state_val_24109 === (2))){
var state_24108__$1 = state_24108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24108__$1,(4),ch);
} else {
if((state_val_24109 === (11))){
var inst_24088 = (state_24108[(8)]);
var inst_24097 = (state_24108[(2)]);
var inst_24085 = inst_24088;
var state_24108__$1 = (function (){var statearr_24118 = state_24108;
(statearr_24118[(10)] = inst_24097);

(statearr_24118[(7)] = inst_24085);

return statearr_24118;
})();
var statearr_24119_24143 = state_24108__$1;
(statearr_24119_24143[(2)] = null);

(statearr_24119_24143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24109 === (9))){
var inst_24088 = (state_24108[(8)]);
var state_24108__$1 = state_24108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24108__$1,(11),out,inst_24088);
} else {
if((state_val_24109 === (5))){
var inst_24085 = (state_24108[(7)]);
var inst_24088 = (state_24108[(8)]);
var inst_24092 = cljs.core._EQ_.call(null,inst_24088,inst_24085);
var state_24108__$1 = state_24108;
if(inst_24092){
var statearr_24121_24144 = state_24108__$1;
(statearr_24121_24144[(1)] = (8));

} else {
var statearr_24122_24145 = state_24108__$1;
(statearr_24122_24145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24109 === (10))){
var inst_24100 = (state_24108[(2)]);
var state_24108__$1 = state_24108;
var statearr_24123_24146 = state_24108__$1;
(statearr_24123_24146[(2)] = inst_24100);

(statearr_24123_24146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24109 === (8))){
var inst_24085 = (state_24108[(7)]);
var tmp24120 = inst_24085;
var inst_24085__$1 = tmp24120;
var state_24108__$1 = (function (){var statearr_24124 = state_24108;
(statearr_24124[(7)] = inst_24085__$1);

return statearr_24124;
})();
var statearr_24125_24147 = state_24108__$1;
(statearr_24125_24147[(2)] = null);

(statearr_24125_24147[(1)] = (2));


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
});})(c__21564__auto___24137,out))
;
return ((function (switch__21452__auto__,c__21564__auto___24137,out){
return (function() {
var cljs$core$async$state_machine__21453__auto__ = null;
var cljs$core$async$state_machine__21453__auto____0 = (function (){
var statearr_24129 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24129[(0)] = cljs$core$async$state_machine__21453__auto__);

(statearr_24129[(1)] = (1));

return statearr_24129;
});
var cljs$core$async$state_machine__21453__auto____1 = (function (state_24108){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_24108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e24130){if((e24130 instanceof Object)){
var ex__21456__auto__ = e24130;
var statearr_24131_24148 = state_24108;
(statearr_24131_24148[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24149 = state_24108;
state_24108 = G__24149;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$state_machine__21453__auto__ = function(state_24108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21453__auto____1.call(this,state_24108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21453__auto____0;
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21453__auto____1;
return cljs$core$async$state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto___24137,out))
})();
var state__21566__auto__ = (function (){var statearr_24132 = f__21565__auto__.call(null);
(statearr_24132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___24137);

return statearr_24132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto___24137,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24150 = [];
var len__17829__auto___24220 = arguments.length;
var i__17830__auto___24221 = (0);
while(true){
if((i__17830__auto___24221 < len__17829__auto___24220)){
args24150.push((arguments[i__17830__auto___24221]));

var G__24222 = (i__17830__auto___24221 + (1));
i__17830__auto___24221 = G__24222;
continue;
} else {
}
break;
}

var G__24152 = args24150.length;
switch (G__24152) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24150.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21564__auto___24224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto___24224,out){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto___24224,out){
return (function (state_24190){
var state_val_24191 = (state_24190[(1)]);
if((state_val_24191 === (7))){
var inst_24186 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24192_24225 = state_24190__$1;
(statearr_24192_24225[(2)] = inst_24186);

(statearr_24192_24225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (1))){
var inst_24153 = (new Array(n));
var inst_24154 = inst_24153;
var inst_24155 = (0);
var state_24190__$1 = (function (){var statearr_24193 = state_24190;
(statearr_24193[(7)] = inst_24155);

(statearr_24193[(8)] = inst_24154);

return statearr_24193;
})();
var statearr_24194_24226 = state_24190__$1;
(statearr_24194_24226[(2)] = null);

(statearr_24194_24226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (4))){
var inst_24158 = (state_24190[(9)]);
var inst_24158__$1 = (state_24190[(2)]);
var inst_24159 = (inst_24158__$1 == null);
var inst_24160 = cljs.core.not.call(null,inst_24159);
var state_24190__$1 = (function (){var statearr_24195 = state_24190;
(statearr_24195[(9)] = inst_24158__$1);

return statearr_24195;
})();
if(inst_24160){
var statearr_24196_24227 = state_24190__$1;
(statearr_24196_24227[(1)] = (5));

} else {
var statearr_24197_24228 = state_24190__$1;
(statearr_24197_24228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (15))){
var inst_24180 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24198_24229 = state_24190__$1;
(statearr_24198_24229[(2)] = inst_24180);

(statearr_24198_24229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (13))){
var state_24190__$1 = state_24190;
var statearr_24199_24230 = state_24190__$1;
(statearr_24199_24230[(2)] = null);

(statearr_24199_24230[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (6))){
var inst_24155 = (state_24190[(7)]);
var inst_24176 = (inst_24155 > (0));
var state_24190__$1 = state_24190;
if(cljs.core.truth_(inst_24176)){
var statearr_24200_24231 = state_24190__$1;
(statearr_24200_24231[(1)] = (12));

} else {
var statearr_24201_24232 = state_24190__$1;
(statearr_24201_24232[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (3))){
var inst_24188 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24190__$1,inst_24188);
} else {
if((state_val_24191 === (12))){
var inst_24154 = (state_24190[(8)]);
var inst_24178 = cljs.core.vec.call(null,inst_24154);
var state_24190__$1 = state_24190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24190__$1,(15),out,inst_24178);
} else {
if((state_val_24191 === (2))){
var state_24190__$1 = state_24190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24190__$1,(4),ch);
} else {
if((state_val_24191 === (11))){
var inst_24170 = (state_24190[(2)]);
var inst_24171 = (new Array(n));
var inst_24154 = inst_24171;
var inst_24155 = (0);
var state_24190__$1 = (function (){var statearr_24202 = state_24190;
(statearr_24202[(7)] = inst_24155);

(statearr_24202[(10)] = inst_24170);

(statearr_24202[(8)] = inst_24154);

return statearr_24202;
})();
var statearr_24203_24233 = state_24190__$1;
(statearr_24203_24233[(2)] = null);

(statearr_24203_24233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (9))){
var inst_24154 = (state_24190[(8)]);
var inst_24168 = cljs.core.vec.call(null,inst_24154);
var state_24190__$1 = state_24190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24190__$1,(11),out,inst_24168);
} else {
if((state_val_24191 === (5))){
var inst_24155 = (state_24190[(7)]);
var inst_24163 = (state_24190[(11)]);
var inst_24154 = (state_24190[(8)]);
var inst_24158 = (state_24190[(9)]);
var inst_24162 = (inst_24154[inst_24155] = inst_24158);
var inst_24163__$1 = (inst_24155 + (1));
var inst_24164 = (inst_24163__$1 < n);
var state_24190__$1 = (function (){var statearr_24204 = state_24190;
(statearr_24204[(11)] = inst_24163__$1);

(statearr_24204[(12)] = inst_24162);

return statearr_24204;
})();
if(cljs.core.truth_(inst_24164)){
var statearr_24205_24234 = state_24190__$1;
(statearr_24205_24234[(1)] = (8));

} else {
var statearr_24206_24235 = state_24190__$1;
(statearr_24206_24235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (14))){
var inst_24183 = (state_24190[(2)]);
var inst_24184 = cljs.core.async.close_BANG_.call(null,out);
var state_24190__$1 = (function (){var statearr_24208 = state_24190;
(statearr_24208[(13)] = inst_24183);

return statearr_24208;
})();
var statearr_24209_24236 = state_24190__$1;
(statearr_24209_24236[(2)] = inst_24184);

(statearr_24209_24236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (10))){
var inst_24174 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24210_24237 = state_24190__$1;
(statearr_24210_24237[(2)] = inst_24174);

(statearr_24210_24237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (8))){
var inst_24163 = (state_24190[(11)]);
var inst_24154 = (state_24190[(8)]);
var tmp24207 = inst_24154;
var inst_24154__$1 = tmp24207;
var inst_24155 = inst_24163;
var state_24190__$1 = (function (){var statearr_24211 = state_24190;
(statearr_24211[(7)] = inst_24155);

(statearr_24211[(8)] = inst_24154__$1);

return statearr_24211;
})();
var statearr_24212_24238 = state_24190__$1;
(statearr_24212_24238[(2)] = null);

(statearr_24212_24238[(1)] = (2));


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
});})(c__21564__auto___24224,out))
;
return ((function (switch__21452__auto__,c__21564__auto___24224,out){
return (function() {
var cljs$core$async$state_machine__21453__auto__ = null;
var cljs$core$async$state_machine__21453__auto____0 = (function (){
var statearr_24216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24216[(0)] = cljs$core$async$state_machine__21453__auto__);

(statearr_24216[(1)] = (1));

return statearr_24216;
});
var cljs$core$async$state_machine__21453__auto____1 = (function (state_24190){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_24190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e24217){if((e24217 instanceof Object)){
var ex__21456__auto__ = e24217;
var statearr_24218_24239 = state_24190;
(statearr_24218_24239[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24240 = state_24190;
state_24190 = G__24240;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$state_machine__21453__auto__ = function(state_24190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21453__auto____1.call(this,state_24190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21453__auto____0;
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21453__auto____1;
return cljs$core$async$state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto___24224,out))
})();
var state__21566__auto__ = (function (){var statearr_24219 = f__21565__auto__.call(null);
(statearr_24219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___24224);

return statearr_24219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto___24224,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24241 = [];
var len__17829__auto___24315 = arguments.length;
var i__17830__auto___24316 = (0);
while(true){
if((i__17830__auto___24316 < len__17829__auto___24315)){
args24241.push((arguments[i__17830__auto___24316]));

var G__24317 = (i__17830__auto___24316 + (1));
i__17830__auto___24316 = G__24317;
continue;
} else {
}
break;
}

var G__24243 = args24241.length;
switch (G__24243) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24241.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21564__auto___24319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto___24319,out){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto___24319,out){
return (function (state_24285){
var state_val_24286 = (state_24285[(1)]);
if((state_val_24286 === (7))){
var inst_24281 = (state_24285[(2)]);
var state_24285__$1 = state_24285;
var statearr_24287_24320 = state_24285__$1;
(statearr_24287_24320[(2)] = inst_24281);

(statearr_24287_24320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (1))){
var inst_24244 = [];
var inst_24245 = inst_24244;
var inst_24246 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24285__$1 = (function (){var statearr_24288 = state_24285;
(statearr_24288[(7)] = inst_24245);

(statearr_24288[(8)] = inst_24246);

return statearr_24288;
})();
var statearr_24289_24321 = state_24285__$1;
(statearr_24289_24321[(2)] = null);

(statearr_24289_24321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (4))){
var inst_24249 = (state_24285[(9)]);
var inst_24249__$1 = (state_24285[(2)]);
var inst_24250 = (inst_24249__$1 == null);
var inst_24251 = cljs.core.not.call(null,inst_24250);
var state_24285__$1 = (function (){var statearr_24290 = state_24285;
(statearr_24290[(9)] = inst_24249__$1);

return statearr_24290;
})();
if(inst_24251){
var statearr_24291_24322 = state_24285__$1;
(statearr_24291_24322[(1)] = (5));

} else {
var statearr_24292_24323 = state_24285__$1;
(statearr_24292_24323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (15))){
var inst_24275 = (state_24285[(2)]);
var state_24285__$1 = state_24285;
var statearr_24293_24324 = state_24285__$1;
(statearr_24293_24324[(2)] = inst_24275);

(statearr_24293_24324[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (13))){
var state_24285__$1 = state_24285;
var statearr_24294_24325 = state_24285__$1;
(statearr_24294_24325[(2)] = null);

(statearr_24294_24325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (6))){
var inst_24245 = (state_24285[(7)]);
var inst_24270 = inst_24245.length;
var inst_24271 = (inst_24270 > (0));
var state_24285__$1 = state_24285;
if(cljs.core.truth_(inst_24271)){
var statearr_24295_24326 = state_24285__$1;
(statearr_24295_24326[(1)] = (12));

} else {
var statearr_24296_24327 = state_24285__$1;
(statearr_24296_24327[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (3))){
var inst_24283 = (state_24285[(2)]);
var state_24285__$1 = state_24285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24285__$1,inst_24283);
} else {
if((state_val_24286 === (12))){
var inst_24245 = (state_24285[(7)]);
var inst_24273 = cljs.core.vec.call(null,inst_24245);
var state_24285__$1 = state_24285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24285__$1,(15),out,inst_24273);
} else {
if((state_val_24286 === (2))){
var state_24285__$1 = state_24285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24285__$1,(4),ch);
} else {
if((state_val_24286 === (11))){
var inst_24253 = (state_24285[(10)]);
var inst_24249 = (state_24285[(9)]);
var inst_24263 = (state_24285[(2)]);
var inst_24264 = [];
var inst_24265 = inst_24264.push(inst_24249);
var inst_24245 = inst_24264;
var inst_24246 = inst_24253;
var state_24285__$1 = (function (){var statearr_24297 = state_24285;
(statearr_24297[(7)] = inst_24245);

(statearr_24297[(11)] = inst_24265);

(statearr_24297[(12)] = inst_24263);

(statearr_24297[(8)] = inst_24246);

return statearr_24297;
})();
var statearr_24298_24328 = state_24285__$1;
(statearr_24298_24328[(2)] = null);

(statearr_24298_24328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (9))){
var inst_24245 = (state_24285[(7)]);
var inst_24261 = cljs.core.vec.call(null,inst_24245);
var state_24285__$1 = state_24285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24285__$1,(11),out,inst_24261);
} else {
if((state_val_24286 === (5))){
var inst_24253 = (state_24285[(10)]);
var inst_24249 = (state_24285[(9)]);
var inst_24246 = (state_24285[(8)]);
var inst_24253__$1 = f.call(null,inst_24249);
var inst_24254 = cljs.core._EQ_.call(null,inst_24253__$1,inst_24246);
var inst_24255 = cljs.core.keyword_identical_QMARK_.call(null,inst_24246,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24256 = (inst_24254) || (inst_24255);
var state_24285__$1 = (function (){var statearr_24299 = state_24285;
(statearr_24299[(10)] = inst_24253__$1);

return statearr_24299;
})();
if(cljs.core.truth_(inst_24256)){
var statearr_24300_24329 = state_24285__$1;
(statearr_24300_24329[(1)] = (8));

} else {
var statearr_24301_24330 = state_24285__$1;
(statearr_24301_24330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (14))){
var inst_24278 = (state_24285[(2)]);
var inst_24279 = cljs.core.async.close_BANG_.call(null,out);
var state_24285__$1 = (function (){var statearr_24303 = state_24285;
(statearr_24303[(13)] = inst_24278);

return statearr_24303;
})();
var statearr_24304_24331 = state_24285__$1;
(statearr_24304_24331[(2)] = inst_24279);

(statearr_24304_24331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (10))){
var inst_24268 = (state_24285[(2)]);
var state_24285__$1 = state_24285;
var statearr_24305_24332 = state_24285__$1;
(statearr_24305_24332[(2)] = inst_24268);

(statearr_24305_24332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (8))){
var inst_24245 = (state_24285[(7)]);
var inst_24253 = (state_24285[(10)]);
var inst_24249 = (state_24285[(9)]);
var inst_24258 = inst_24245.push(inst_24249);
var tmp24302 = inst_24245;
var inst_24245__$1 = tmp24302;
var inst_24246 = inst_24253;
var state_24285__$1 = (function (){var statearr_24306 = state_24285;
(statearr_24306[(7)] = inst_24245__$1);

(statearr_24306[(14)] = inst_24258);

(statearr_24306[(8)] = inst_24246);

return statearr_24306;
})();
var statearr_24307_24333 = state_24285__$1;
(statearr_24307_24333[(2)] = null);

(statearr_24307_24333[(1)] = (2));


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
});})(c__21564__auto___24319,out))
;
return ((function (switch__21452__auto__,c__21564__auto___24319,out){
return (function() {
var cljs$core$async$state_machine__21453__auto__ = null;
var cljs$core$async$state_machine__21453__auto____0 = (function (){
var statearr_24311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24311[(0)] = cljs$core$async$state_machine__21453__auto__);

(statearr_24311[(1)] = (1));

return statearr_24311;
});
var cljs$core$async$state_machine__21453__auto____1 = (function (state_24285){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_24285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e24312){if((e24312 instanceof Object)){
var ex__21456__auto__ = e24312;
var statearr_24313_24334 = state_24285;
(statearr_24313_24334[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24335 = state_24285;
state_24285 = G__24335;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
cljs$core$async$state_machine__21453__auto__ = function(state_24285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21453__auto____1.call(this,state_24285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21453__auto____0;
cljs$core$async$state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21453__auto____1;
return cljs$core$async$state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto___24319,out))
})();
var state__21566__auto__ = (function (){var statearr_24314 = f__21565__auto__.call(null);
(statearr_24314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___24319);

return statearr_24314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto___24319,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map