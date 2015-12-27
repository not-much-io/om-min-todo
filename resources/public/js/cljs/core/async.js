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
var args21782 = [];
var len__17829__auto___21788 = arguments.length;
var i__17830__auto___21789 = (0);
while(true){
if((i__17830__auto___21789 < len__17829__auto___21788)){
args21782.push((arguments[i__17830__auto___21789]));

var G__21790 = (i__17830__auto___21789 + (1));
i__17830__auto___21789 = G__21790;
continue;
} else {
}
break;
}

var G__21784 = args21782.length;
switch (G__21784) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21782.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21785 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21785 = (function (f,blockable,meta21786){
this.f = f;
this.blockable = blockable;
this.meta21786 = meta21786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21787,meta21786__$1){
var self__ = this;
var _21787__$1 = this;
return (new cljs.core.async.t_cljs$core$async21785(self__.f,self__.blockable,meta21786__$1));
});

cljs.core.async.t_cljs$core$async21785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21787){
var self__ = this;
var _21787__$1 = this;
return self__.meta21786;
});

cljs.core.async.t_cljs$core$async21785.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21785.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21785.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21785.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21786","meta21786",1297719119,null)], null);
});

cljs.core.async.t_cljs$core$async21785.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21785";

cljs.core.async.t_cljs$core$async21785.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async21785");
});

cljs.core.async.__GT_t_cljs$core$async21785 = (function cljs$core$async$__GT_t_cljs$core$async21785(f__$1,blockable__$1,meta21786){
return (new cljs.core.async.t_cljs$core$async21785(f__$1,blockable__$1,meta21786));
});

}

return (new cljs.core.async.t_cljs$core$async21785(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args21794 = [];
var len__17829__auto___21797 = arguments.length;
var i__17830__auto___21798 = (0);
while(true){
if((i__17830__auto___21798 < len__17829__auto___21797)){
args21794.push((arguments[i__17830__auto___21798]));

var G__21799 = (i__17830__auto___21798 + (1));
i__17830__auto___21798 = G__21799;
continue;
} else {
}
break;
}

var G__21796 = args21794.length;
switch (G__21796) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21794.length)].join('')));

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
var args21801 = [];
var len__17829__auto___21804 = arguments.length;
var i__17830__auto___21805 = (0);
while(true){
if((i__17830__auto___21805 < len__17829__auto___21804)){
args21801.push((arguments[i__17830__auto___21805]));

var G__21806 = (i__17830__auto___21805 + (1));
i__17830__auto___21805 = G__21806;
continue;
} else {
}
break;
}

var G__21803 = args21801.length;
switch (G__21803) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21801.length)].join('')));

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
var args21808 = [];
var len__17829__auto___21811 = arguments.length;
var i__17830__auto___21812 = (0);
while(true){
if((i__17830__auto___21812 < len__17829__auto___21811)){
args21808.push((arguments[i__17830__auto___21812]));

var G__21813 = (i__17830__auto___21812 + (1));
i__17830__auto___21812 = G__21813;
continue;
} else {
}
break;
}

var G__21810 = args21808.length;
switch (G__21810) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21808.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21815 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21815);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21815,ret){
return (function (){
return fn1.call(null,val_21815);
});})(val_21815,ret))
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
var args21816 = [];
var len__17829__auto___21819 = arguments.length;
var i__17830__auto___21820 = (0);
while(true){
if((i__17830__auto___21820 < len__17829__auto___21819)){
args21816.push((arguments[i__17830__auto___21820]));

var G__21821 = (i__17830__auto___21820 + (1));
i__17830__auto___21820 = G__21821;
continue;
} else {
}
break;
}

var G__21818 = args21816.length;
switch (G__21818) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21816.length)].join('')));

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
var n__17674__auto___21823 = n;
var x_21824 = (0);
while(true){
if((x_21824 < n__17674__auto___21823)){
(a[x_21824] = (0));

var G__21825 = (x_21824 + (1));
x_21824 = G__21825;
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

var G__21826 = (i + (1));
i = G__21826;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21830 = (function (alt_flag,flag,meta21831){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21831 = meta21831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21832,meta21831__$1){
var self__ = this;
var _21832__$1 = this;
return (new cljs.core.async.t_cljs$core$async21830(self__.alt_flag,self__.flag,meta21831__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21830.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21832){
var self__ = this;
var _21832__$1 = this;
return self__.meta21831;
});})(flag))
;

cljs.core.async.t_cljs$core$async21830.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21830.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21830.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21830.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21830.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21831","meta21831",-1196533932,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21830";

cljs.core.async.t_cljs$core$async21830.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async21830");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21830 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21830(alt_flag__$1,flag__$1,meta21831){
return (new cljs.core.async.t_cljs$core$async21830(alt_flag__$1,flag__$1,meta21831));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21830(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21836 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21836 = (function (alt_handler,flag,cb,meta21837){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21837 = meta21837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21838,meta21837__$1){
var self__ = this;
var _21838__$1 = this;
return (new cljs.core.async.t_cljs$core$async21836(self__.alt_handler,self__.flag,self__.cb,meta21837__$1));
});

cljs.core.async.t_cljs$core$async21836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21838){
var self__ = this;
var _21838__$1 = this;
return self__.meta21837;
});

cljs.core.async.t_cljs$core$async21836.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21836.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21837","meta21837",239319697,null)], null);
});

cljs.core.async.t_cljs$core$async21836.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21836";

cljs.core.async.t_cljs$core$async21836.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async21836");
});

cljs.core.async.__GT_t_cljs$core$async21836 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21836(alt_handler__$1,flag__$1,cb__$1,meta21837){
return (new cljs.core.async.t_cljs$core$async21836(alt_handler__$1,flag__$1,cb__$1,meta21837));
});

}

return (new cljs.core.async.t_cljs$core$async21836(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21839_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21839_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21840_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21840_SHARP_,port], null));
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
var G__21841 = (i + (1));
i = G__21841;
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
var len__17829__auto___21847 = arguments.length;
var i__17830__auto___21848 = (0);
while(true){
if((i__17830__auto___21848 < len__17829__auto___21847)){
args__17836__auto__.push((arguments[i__17830__auto___21848]));

var G__21849 = (i__17830__auto___21848 + (1));
i__17830__auto___21848 = G__21849;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((1) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17837__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21844){
var map__21845 = p__21844;
var map__21845__$1 = ((((!((map__21845 == null)))?((((map__21845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21845):map__21845);
var opts = map__21845__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21842){
var G__21843 = cljs.core.first.call(null,seq21842);
var seq21842__$1 = cljs.core.next.call(null,seq21842);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21843,seq21842__$1);
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
var args21850 = [];
var len__17829__auto___21900 = arguments.length;
var i__17830__auto___21901 = (0);
while(true){
if((i__17830__auto___21901 < len__17829__auto___21900)){
args21850.push((arguments[i__17830__auto___21901]));

var G__21902 = (i__17830__auto___21901 + (1));
i__17830__auto___21901 = G__21902;
continue;
} else {
}
break;
}

var G__21852 = args21850.length;
switch (G__21852) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21850.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21737__auto___21904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto___21904){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto___21904){
return (function (state_21876){
var state_val_21877 = (state_21876[(1)]);
if((state_val_21877 === (7))){
var inst_21872 = (state_21876[(2)]);
var state_21876__$1 = state_21876;
var statearr_21878_21905 = state_21876__$1;
(statearr_21878_21905[(2)] = inst_21872);

(statearr_21878_21905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (1))){
var state_21876__$1 = state_21876;
var statearr_21879_21906 = state_21876__$1;
(statearr_21879_21906[(2)] = null);

(statearr_21879_21906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (4))){
var inst_21855 = (state_21876[(7)]);
var inst_21855__$1 = (state_21876[(2)]);
var inst_21856 = (inst_21855__$1 == null);
var state_21876__$1 = (function (){var statearr_21880 = state_21876;
(statearr_21880[(7)] = inst_21855__$1);

return statearr_21880;
})();
if(cljs.core.truth_(inst_21856)){
var statearr_21881_21907 = state_21876__$1;
(statearr_21881_21907[(1)] = (5));

} else {
var statearr_21882_21908 = state_21876__$1;
(statearr_21882_21908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (13))){
var state_21876__$1 = state_21876;
var statearr_21883_21909 = state_21876__$1;
(statearr_21883_21909[(2)] = null);

(statearr_21883_21909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (6))){
var inst_21855 = (state_21876[(7)]);
var state_21876__$1 = state_21876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21876__$1,(11),to,inst_21855);
} else {
if((state_val_21877 === (3))){
var inst_21874 = (state_21876[(2)]);
var state_21876__$1 = state_21876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21876__$1,inst_21874);
} else {
if((state_val_21877 === (12))){
var state_21876__$1 = state_21876;
var statearr_21884_21910 = state_21876__$1;
(statearr_21884_21910[(2)] = null);

(statearr_21884_21910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (2))){
var state_21876__$1 = state_21876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21876__$1,(4),from);
} else {
if((state_val_21877 === (11))){
var inst_21865 = (state_21876[(2)]);
var state_21876__$1 = state_21876;
if(cljs.core.truth_(inst_21865)){
var statearr_21885_21911 = state_21876__$1;
(statearr_21885_21911[(1)] = (12));

} else {
var statearr_21886_21912 = state_21876__$1;
(statearr_21886_21912[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (9))){
var state_21876__$1 = state_21876;
var statearr_21887_21913 = state_21876__$1;
(statearr_21887_21913[(2)] = null);

(statearr_21887_21913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (5))){
var state_21876__$1 = state_21876;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21888_21914 = state_21876__$1;
(statearr_21888_21914[(1)] = (8));

} else {
var statearr_21889_21915 = state_21876__$1;
(statearr_21889_21915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (14))){
var inst_21870 = (state_21876[(2)]);
var state_21876__$1 = state_21876;
var statearr_21890_21916 = state_21876__$1;
(statearr_21890_21916[(2)] = inst_21870);

(statearr_21890_21916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (10))){
var inst_21862 = (state_21876[(2)]);
var state_21876__$1 = state_21876;
var statearr_21891_21917 = state_21876__$1;
(statearr_21891_21917[(2)] = inst_21862);

(statearr_21891_21917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21877 === (8))){
var inst_21859 = cljs.core.async.close_BANG_.call(null,to);
var state_21876__$1 = state_21876;
var statearr_21892_21918 = state_21876__$1;
(statearr_21892_21918[(2)] = inst_21859);

(statearr_21892_21918[(1)] = (10));


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
});})(c__21737__auto___21904))
;
return ((function (switch__21625__auto__,c__21737__auto___21904){
return (function() {
var cljs$core$async$state_machine__21626__auto__ = null;
var cljs$core$async$state_machine__21626__auto____0 = (function (){
var statearr_21896 = [null,null,null,null,null,null,null,null];
(statearr_21896[(0)] = cljs$core$async$state_machine__21626__auto__);

(statearr_21896[(1)] = (1));

return statearr_21896;
});
var cljs$core$async$state_machine__21626__auto____1 = (function (state_21876){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_21876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e21897){if((e21897 instanceof Object)){
var ex__21629__auto__ = e21897;
var statearr_21898_21919 = state_21876;
(statearr_21898_21919[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21920 = state_21876;
state_21876 = G__21920;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$state_machine__21626__auto__ = function(state_21876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21626__auto____1.call(this,state_21876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21626__auto____0;
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21626__auto____1;
return cljs$core$async$state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto___21904))
})();
var state__21739__auto__ = (function (){var statearr_21899 = f__21738__auto__.call(null);
(statearr_21899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___21904);

return statearr_21899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto___21904))
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
return (function (p__22104){
var vec__22105 = p__22104;
var v = cljs.core.nth.call(null,vec__22105,(0),null);
var p = cljs.core.nth.call(null,vec__22105,(1),null);
var job = vec__22105;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21737__auto___22287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto___22287,res,vec__22105,v,p,job,jobs,results){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto___22287,res,vec__22105,v,p,job,jobs,results){
return (function (state_22110){
var state_val_22111 = (state_22110[(1)]);
if((state_val_22111 === (1))){
var state_22110__$1 = state_22110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22110__$1,(2),res,v);
} else {
if((state_val_22111 === (2))){
var inst_22107 = (state_22110[(2)]);
var inst_22108 = cljs.core.async.close_BANG_.call(null,res);
var state_22110__$1 = (function (){var statearr_22112 = state_22110;
(statearr_22112[(7)] = inst_22107);

return statearr_22112;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22110__$1,inst_22108);
} else {
return null;
}
}
});})(c__21737__auto___22287,res,vec__22105,v,p,job,jobs,results))
;
return ((function (switch__21625__auto__,c__21737__auto___22287,res,vec__22105,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____0 = (function (){
var statearr_22116 = [null,null,null,null,null,null,null,null];
(statearr_22116[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__);

(statearr_22116[(1)] = (1));

return statearr_22116;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____1 = (function (state_22110){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_22110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e22117){if((e22117 instanceof Object)){
var ex__21629__auto__ = e22117;
var statearr_22118_22288 = state_22110;
(statearr_22118_22288[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22289 = state_22110;
state_22110 = G__22289;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__ = function(state_22110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____1.call(this,state_22110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto___22287,res,vec__22105,v,p,job,jobs,results))
})();
var state__21739__auto__ = (function (){var statearr_22119 = f__21738__auto__.call(null);
(statearr_22119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___22287);

return statearr_22119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto___22287,res,vec__22105,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22120){
var vec__22121 = p__22120;
var v = cljs.core.nth.call(null,vec__22121,(0),null);
var p = cljs.core.nth.call(null,vec__22121,(1),null);
var job = vec__22121;
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
var n__17674__auto___22290 = n;
var __22291 = (0);
while(true){
if((__22291 < n__17674__auto___22290)){
var G__22122_22292 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22122_22292) {
case "compute":
var c__21737__auto___22294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22291,c__21737__auto___22294,G__22122_22292,n__17674__auto___22290,jobs,results,process,async){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (__22291,c__21737__auto___22294,G__22122_22292,n__17674__auto___22290,jobs,results,process,async){
return (function (state_22135){
var state_val_22136 = (state_22135[(1)]);
if((state_val_22136 === (1))){
var state_22135__$1 = state_22135;
var statearr_22137_22295 = state_22135__$1;
(statearr_22137_22295[(2)] = null);

(statearr_22137_22295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22136 === (2))){
var state_22135__$1 = state_22135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22135__$1,(4),jobs);
} else {
if((state_val_22136 === (3))){
var inst_22133 = (state_22135[(2)]);
var state_22135__$1 = state_22135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22135__$1,inst_22133);
} else {
if((state_val_22136 === (4))){
var inst_22125 = (state_22135[(2)]);
var inst_22126 = process.call(null,inst_22125);
var state_22135__$1 = state_22135;
if(cljs.core.truth_(inst_22126)){
var statearr_22138_22296 = state_22135__$1;
(statearr_22138_22296[(1)] = (5));

} else {
var statearr_22139_22297 = state_22135__$1;
(statearr_22139_22297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22136 === (5))){
var state_22135__$1 = state_22135;
var statearr_22140_22298 = state_22135__$1;
(statearr_22140_22298[(2)] = null);

(statearr_22140_22298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22136 === (6))){
var state_22135__$1 = state_22135;
var statearr_22141_22299 = state_22135__$1;
(statearr_22141_22299[(2)] = null);

(statearr_22141_22299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22136 === (7))){
var inst_22131 = (state_22135[(2)]);
var state_22135__$1 = state_22135;
var statearr_22142_22300 = state_22135__$1;
(statearr_22142_22300[(2)] = inst_22131);

(statearr_22142_22300[(1)] = (3));


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
});})(__22291,c__21737__auto___22294,G__22122_22292,n__17674__auto___22290,jobs,results,process,async))
;
return ((function (__22291,switch__21625__auto__,c__21737__auto___22294,G__22122_22292,n__17674__auto___22290,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____0 = (function (){
var statearr_22146 = [null,null,null,null,null,null,null];
(statearr_22146[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__);

(statearr_22146[(1)] = (1));

return statearr_22146;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____1 = (function (state_22135){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_22135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e22147){if((e22147 instanceof Object)){
var ex__21629__auto__ = e22147;
var statearr_22148_22301 = state_22135;
(statearr_22148_22301[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22302 = state_22135;
state_22135 = G__22302;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__ = function(state_22135){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____1.call(this,state_22135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__;
})()
;})(__22291,switch__21625__auto__,c__21737__auto___22294,G__22122_22292,n__17674__auto___22290,jobs,results,process,async))
})();
var state__21739__auto__ = (function (){var statearr_22149 = f__21738__auto__.call(null);
(statearr_22149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___22294);

return statearr_22149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(__22291,c__21737__auto___22294,G__22122_22292,n__17674__auto___22290,jobs,results,process,async))
);


break;
case "async":
var c__21737__auto___22303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22291,c__21737__auto___22303,G__22122_22292,n__17674__auto___22290,jobs,results,process,async){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (__22291,c__21737__auto___22303,G__22122_22292,n__17674__auto___22290,jobs,results,process,async){
return (function (state_22162){
var state_val_22163 = (state_22162[(1)]);
if((state_val_22163 === (1))){
var state_22162__$1 = state_22162;
var statearr_22164_22304 = state_22162__$1;
(statearr_22164_22304[(2)] = null);

(statearr_22164_22304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22163 === (2))){
var state_22162__$1 = state_22162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22162__$1,(4),jobs);
} else {
if((state_val_22163 === (3))){
var inst_22160 = (state_22162[(2)]);
var state_22162__$1 = state_22162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22162__$1,inst_22160);
} else {
if((state_val_22163 === (4))){
var inst_22152 = (state_22162[(2)]);
var inst_22153 = async.call(null,inst_22152);
var state_22162__$1 = state_22162;
if(cljs.core.truth_(inst_22153)){
var statearr_22165_22305 = state_22162__$1;
(statearr_22165_22305[(1)] = (5));

} else {
var statearr_22166_22306 = state_22162__$1;
(statearr_22166_22306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22163 === (5))){
var state_22162__$1 = state_22162;
var statearr_22167_22307 = state_22162__$1;
(statearr_22167_22307[(2)] = null);

(statearr_22167_22307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22163 === (6))){
var state_22162__$1 = state_22162;
var statearr_22168_22308 = state_22162__$1;
(statearr_22168_22308[(2)] = null);

(statearr_22168_22308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22163 === (7))){
var inst_22158 = (state_22162[(2)]);
var state_22162__$1 = state_22162;
var statearr_22169_22309 = state_22162__$1;
(statearr_22169_22309[(2)] = inst_22158);

(statearr_22169_22309[(1)] = (3));


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
});})(__22291,c__21737__auto___22303,G__22122_22292,n__17674__auto___22290,jobs,results,process,async))
;
return ((function (__22291,switch__21625__auto__,c__21737__auto___22303,G__22122_22292,n__17674__auto___22290,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____0 = (function (){
var statearr_22173 = [null,null,null,null,null,null,null];
(statearr_22173[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__);

(statearr_22173[(1)] = (1));

return statearr_22173;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____1 = (function (state_22162){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_22162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e22174){if((e22174 instanceof Object)){
var ex__21629__auto__ = e22174;
var statearr_22175_22310 = state_22162;
(statearr_22175_22310[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22311 = state_22162;
state_22162 = G__22311;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__ = function(state_22162){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____1.call(this,state_22162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__;
})()
;})(__22291,switch__21625__auto__,c__21737__auto___22303,G__22122_22292,n__17674__auto___22290,jobs,results,process,async))
})();
var state__21739__auto__ = (function (){var statearr_22176 = f__21738__auto__.call(null);
(statearr_22176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___22303);

return statearr_22176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(__22291,c__21737__auto___22303,G__22122_22292,n__17674__auto___22290,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22312 = (__22291 + (1));
__22291 = G__22312;
continue;
} else {
}
break;
}

var c__21737__auto___22313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto___22313,jobs,results,process,async){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto___22313,jobs,results,process,async){
return (function (state_22198){
var state_val_22199 = (state_22198[(1)]);
if((state_val_22199 === (1))){
var state_22198__$1 = state_22198;
var statearr_22200_22314 = state_22198__$1;
(statearr_22200_22314[(2)] = null);

(statearr_22200_22314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22199 === (2))){
var state_22198__$1 = state_22198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22198__$1,(4),from);
} else {
if((state_val_22199 === (3))){
var inst_22196 = (state_22198[(2)]);
var state_22198__$1 = state_22198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22198__$1,inst_22196);
} else {
if((state_val_22199 === (4))){
var inst_22179 = (state_22198[(7)]);
var inst_22179__$1 = (state_22198[(2)]);
var inst_22180 = (inst_22179__$1 == null);
var state_22198__$1 = (function (){var statearr_22201 = state_22198;
(statearr_22201[(7)] = inst_22179__$1);

return statearr_22201;
})();
if(cljs.core.truth_(inst_22180)){
var statearr_22202_22315 = state_22198__$1;
(statearr_22202_22315[(1)] = (5));

} else {
var statearr_22203_22316 = state_22198__$1;
(statearr_22203_22316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22199 === (5))){
var inst_22182 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22198__$1 = state_22198;
var statearr_22204_22317 = state_22198__$1;
(statearr_22204_22317[(2)] = inst_22182);

(statearr_22204_22317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22199 === (6))){
var inst_22184 = (state_22198[(8)]);
var inst_22179 = (state_22198[(7)]);
var inst_22184__$1 = cljs.core.async.chan.call(null,(1));
var inst_22185 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22186 = [inst_22179,inst_22184__$1];
var inst_22187 = (new cljs.core.PersistentVector(null,2,(5),inst_22185,inst_22186,null));
var state_22198__$1 = (function (){var statearr_22205 = state_22198;
(statearr_22205[(8)] = inst_22184__$1);

return statearr_22205;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22198__$1,(8),jobs,inst_22187);
} else {
if((state_val_22199 === (7))){
var inst_22194 = (state_22198[(2)]);
var state_22198__$1 = state_22198;
var statearr_22206_22318 = state_22198__$1;
(statearr_22206_22318[(2)] = inst_22194);

(statearr_22206_22318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22199 === (8))){
var inst_22184 = (state_22198[(8)]);
var inst_22189 = (state_22198[(2)]);
var state_22198__$1 = (function (){var statearr_22207 = state_22198;
(statearr_22207[(9)] = inst_22189);

return statearr_22207;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22198__$1,(9),results,inst_22184);
} else {
if((state_val_22199 === (9))){
var inst_22191 = (state_22198[(2)]);
var state_22198__$1 = (function (){var statearr_22208 = state_22198;
(statearr_22208[(10)] = inst_22191);

return statearr_22208;
})();
var statearr_22209_22319 = state_22198__$1;
(statearr_22209_22319[(2)] = null);

(statearr_22209_22319[(1)] = (2));


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
});})(c__21737__auto___22313,jobs,results,process,async))
;
return ((function (switch__21625__auto__,c__21737__auto___22313,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____0 = (function (){
var statearr_22213 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22213[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__);

(statearr_22213[(1)] = (1));

return statearr_22213;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____1 = (function (state_22198){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_22198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e22214){if((e22214 instanceof Object)){
var ex__21629__auto__ = e22214;
var statearr_22215_22320 = state_22198;
(statearr_22215_22320[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22321 = state_22198;
state_22198 = G__22321;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__ = function(state_22198){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____1.call(this,state_22198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto___22313,jobs,results,process,async))
})();
var state__21739__auto__ = (function (){var statearr_22216 = f__21738__auto__.call(null);
(statearr_22216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___22313);

return statearr_22216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto___22313,jobs,results,process,async))
);


var c__21737__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto__,jobs,results,process,async){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto__,jobs,results,process,async){
return (function (state_22254){
var state_val_22255 = (state_22254[(1)]);
if((state_val_22255 === (7))){
var inst_22250 = (state_22254[(2)]);
var state_22254__$1 = state_22254;
var statearr_22256_22322 = state_22254__$1;
(statearr_22256_22322[(2)] = inst_22250);

(statearr_22256_22322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (20))){
var state_22254__$1 = state_22254;
var statearr_22257_22323 = state_22254__$1;
(statearr_22257_22323[(2)] = null);

(statearr_22257_22323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (1))){
var state_22254__$1 = state_22254;
var statearr_22258_22324 = state_22254__$1;
(statearr_22258_22324[(2)] = null);

(statearr_22258_22324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (4))){
var inst_22219 = (state_22254[(7)]);
var inst_22219__$1 = (state_22254[(2)]);
var inst_22220 = (inst_22219__$1 == null);
var state_22254__$1 = (function (){var statearr_22259 = state_22254;
(statearr_22259[(7)] = inst_22219__$1);

return statearr_22259;
})();
if(cljs.core.truth_(inst_22220)){
var statearr_22260_22325 = state_22254__$1;
(statearr_22260_22325[(1)] = (5));

} else {
var statearr_22261_22326 = state_22254__$1;
(statearr_22261_22326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (15))){
var inst_22232 = (state_22254[(8)]);
var state_22254__$1 = state_22254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22254__$1,(18),to,inst_22232);
} else {
if((state_val_22255 === (21))){
var inst_22245 = (state_22254[(2)]);
var state_22254__$1 = state_22254;
var statearr_22262_22327 = state_22254__$1;
(statearr_22262_22327[(2)] = inst_22245);

(statearr_22262_22327[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (13))){
var inst_22247 = (state_22254[(2)]);
var state_22254__$1 = (function (){var statearr_22263 = state_22254;
(statearr_22263[(9)] = inst_22247);

return statearr_22263;
})();
var statearr_22264_22328 = state_22254__$1;
(statearr_22264_22328[(2)] = null);

(statearr_22264_22328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (6))){
var inst_22219 = (state_22254[(7)]);
var state_22254__$1 = state_22254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22254__$1,(11),inst_22219);
} else {
if((state_val_22255 === (17))){
var inst_22240 = (state_22254[(2)]);
var state_22254__$1 = state_22254;
if(cljs.core.truth_(inst_22240)){
var statearr_22265_22329 = state_22254__$1;
(statearr_22265_22329[(1)] = (19));

} else {
var statearr_22266_22330 = state_22254__$1;
(statearr_22266_22330[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (3))){
var inst_22252 = (state_22254[(2)]);
var state_22254__$1 = state_22254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22254__$1,inst_22252);
} else {
if((state_val_22255 === (12))){
var inst_22229 = (state_22254[(10)]);
var state_22254__$1 = state_22254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22254__$1,(14),inst_22229);
} else {
if((state_val_22255 === (2))){
var state_22254__$1 = state_22254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22254__$1,(4),results);
} else {
if((state_val_22255 === (19))){
var state_22254__$1 = state_22254;
var statearr_22267_22331 = state_22254__$1;
(statearr_22267_22331[(2)] = null);

(statearr_22267_22331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (11))){
var inst_22229 = (state_22254[(2)]);
var state_22254__$1 = (function (){var statearr_22268 = state_22254;
(statearr_22268[(10)] = inst_22229);

return statearr_22268;
})();
var statearr_22269_22332 = state_22254__$1;
(statearr_22269_22332[(2)] = null);

(statearr_22269_22332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (9))){
var state_22254__$1 = state_22254;
var statearr_22270_22333 = state_22254__$1;
(statearr_22270_22333[(2)] = null);

(statearr_22270_22333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (5))){
var state_22254__$1 = state_22254;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22271_22334 = state_22254__$1;
(statearr_22271_22334[(1)] = (8));

} else {
var statearr_22272_22335 = state_22254__$1;
(statearr_22272_22335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (14))){
var inst_22232 = (state_22254[(8)]);
var inst_22234 = (state_22254[(11)]);
var inst_22232__$1 = (state_22254[(2)]);
var inst_22233 = (inst_22232__$1 == null);
var inst_22234__$1 = cljs.core.not.call(null,inst_22233);
var state_22254__$1 = (function (){var statearr_22273 = state_22254;
(statearr_22273[(8)] = inst_22232__$1);

(statearr_22273[(11)] = inst_22234__$1);

return statearr_22273;
})();
if(inst_22234__$1){
var statearr_22274_22336 = state_22254__$1;
(statearr_22274_22336[(1)] = (15));

} else {
var statearr_22275_22337 = state_22254__$1;
(statearr_22275_22337[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (16))){
var inst_22234 = (state_22254[(11)]);
var state_22254__$1 = state_22254;
var statearr_22276_22338 = state_22254__$1;
(statearr_22276_22338[(2)] = inst_22234);

(statearr_22276_22338[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (10))){
var inst_22226 = (state_22254[(2)]);
var state_22254__$1 = state_22254;
var statearr_22277_22339 = state_22254__$1;
(statearr_22277_22339[(2)] = inst_22226);

(statearr_22277_22339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (18))){
var inst_22237 = (state_22254[(2)]);
var state_22254__$1 = state_22254;
var statearr_22278_22340 = state_22254__$1;
(statearr_22278_22340[(2)] = inst_22237);

(statearr_22278_22340[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22255 === (8))){
var inst_22223 = cljs.core.async.close_BANG_.call(null,to);
var state_22254__$1 = state_22254;
var statearr_22279_22341 = state_22254__$1;
(statearr_22279_22341[(2)] = inst_22223);

(statearr_22279_22341[(1)] = (10));


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
});})(c__21737__auto__,jobs,results,process,async))
;
return ((function (switch__21625__auto__,c__21737__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____0 = (function (){
var statearr_22283 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__);

(statearr_22283[(1)] = (1));

return statearr_22283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____1 = (function (state_22254){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_22254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e22284){if((e22284 instanceof Object)){
var ex__21629__auto__ = e22284;
var statearr_22285_22342 = state_22254;
(statearr_22285_22342[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22343 = state_22254;
state_22254 = G__22343;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__ = function(state_22254){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____1.call(this,state_22254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto__,jobs,results,process,async))
})();
var state__21739__auto__ = (function (){var statearr_22286 = f__21738__auto__.call(null);
(statearr_22286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto__);

return statearr_22286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto__,jobs,results,process,async))
);

return c__21737__auto__;
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
var args22344 = [];
var len__17829__auto___22347 = arguments.length;
var i__17830__auto___22348 = (0);
while(true){
if((i__17830__auto___22348 < len__17829__auto___22347)){
args22344.push((arguments[i__17830__auto___22348]));

var G__22349 = (i__17830__auto___22348 + (1));
i__17830__auto___22348 = G__22349;
continue;
} else {
}
break;
}

var G__22346 = args22344.length;
switch (G__22346) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22344.length)].join('')));

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
var args22351 = [];
var len__17829__auto___22354 = arguments.length;
var i__17830__auto___22355 = (0);
while(true){
if((i__17830__auto___22355 < len__17829__auto___22354)){
args22351.push((arguments[i__17830__auto___22355]));

var G__22356 = (i__17830__auto___22355 + (1));
i__17830__auto___22355 = G__22356;
continue;
} else {
}
break;
}

var G__22353 = args22351.length;
switch (G__22353) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22351.length)].join('')));

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
var args22358 = [];
var len__17829__auto___22411 = arguments.length;
var i__17830__auto___22412 = (0);
while(true){
if((i__17830__auto___22412 < len__17829__auto___22411)){
args22358.push((arguments[i__17830__auto___22412]));

var G__22413 = (i__17830__auto___22412 + (1));
i__17830__auto___22412 = G__22413;
continue;
} else {
}
break;
}

var G__22360 = args22358.length;
switch (G__22360) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22358.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21737__auto___22415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto___22415,tc,fc){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto___22415,tc,fc){
return (function (state_22386){
var state_val_22387 = (state_22386[(1)]);
if((state_val_22387 === (7))){
var inst_22382 = (state_22386[(2)]);
var state_22386__$1 = state_22386;
var statearr_22388_22416 = state_22386__$1;
(statearr_22388_22416[(2)] = inst_22382);

(statearr_22388_22416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (1))){
var state_22386__$1 = state_22386;
var statearr_22389_22417 = state_22386__$1;
(statearr_22389_22417[(2)] = null);

(statearr_22389_22417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (4))){
var inst_22363 = (state_22386[(7)]);
var inst_22363__$1 = (state_22386[(2)]);
var inst_22364 = (inst_22363__$1 == null);
var state_22386__$1 = (function (){var statearr_22390 = state_22386;
(statearr_22390[(7)] = inst_22363__$1);

return statearr_22390;
})();
if(cljs.core.truth_(inst_22364)){
var statearr_22391_22418 = state_22386__$1;
(statearr_22391_22418[(1)] = (5));

} else {
var statearr_22392_22419 = state_22386__$1;
(statearr_22392_22419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (13))){
var state_22386__$1 = state_22386;
var statearr_22393_22420 = state_22386__$1;
(statearr_22393_22420[(2)] = null);

(statearr_22393_22420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (6))){
var inst_22363 = (state_22386[(7)]);
var inst_22369 = p.call(null,inst_22363);
var state_22386__$1 = state_22386;
if(cljs.core.truth_(inst_22369)){
var statearr_22394_22421 = state_22386__$1;
(statearr_22394_22421[(1)] = (9));

} else {
var statearr_22395_22422 = state_22386__$1;
(statearr_22395_22422[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (3))){
var inst_22384 = (state_22386[(2)]);
var state_22386__$1 = state_22386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22386__$1,inst_22384);
} else {
if((state_val_22387 === (12))){
var state_22386__$1 = state_22386;
var statearr_22396_22423 = state_22386__$1;
(statearr_22396_22423[(2)] = null);

(statearr_22396_22423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (2))){
var state_22386__$1 = state_22386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22386__$1,(4),ch);
} else {
if((state_val_22387 === (11))){
var inst_22363 = (state_22386[(7)]);
var inst_22373 = (state_22386[(2)]);
var state_22386__$1 = state_22386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22386__$1,(8),inst_22373,inst_22363);
} else {
if((state_val_22387 === (9))){
var state_22386__$1 = state_22386;
var statearr_22397_22424 = state_22386__$1;
(statearr_22397_22424[(2)] = tc);

(statearr_22397_22424[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (5))){
var inst_22366 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22367 = cljs.core.async.close_BANG_.call(null,fc);
var state_22386__$1 = (function (){var statearr_22398 = state_22386;
(statearr_22398[(8)] = inst_22366);

return statearr_22398;
})();
var statearr_22399_22425 = state_22386__$1;
(statearr_22399_22425[(2)] = inst_22367);

(statearr_22399_22425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (14))){
var inst_22380 = (state_22386[(2)]);
var state_22386__$1 = state_22386;
var statearr_22400_22426 = state_22386__$1;
(statearr_22400_22426[(2)] = inst_22380);

(statearr_22400_22426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (10))){
var state_22386__$1 = state_22386;
var statearr_22401_22427 = state_22386__$1;
(statearr_22401_22427[(2)] = fc);

(statearr_22401_22427[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (8))){
var inst_22375 = (state_22386[(2)]);
var state_22386__$1 = state_22386;
if(cljs.core.truth_(inst_22375)){
var statearr_22402_22428 = state_22386__$1;
(statearr_22402_22428[(1)] = (12));

} else {
var statearr_22403_22429 = state_22386__$1;
(statearr_22403_22429[(1)] = (13));

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
});})(c__21737__auto___22415,tc,fc))
;
return ((function (switch__21625__auto__,c__21737__auto___22415,tc,fc){
return (function() {
var cljs$core$async$state_machine__21626__auto__ = null;
var cljs$core$async$state_machine__21626__auto____0 = (function (){
var statearr_22407 = [null,null,null,null,null,null,null,null,null];
(statearr_22407[(0)] = cljs$core$async$state_machine__21626__auto__);

(statearr_22407[(1)] = (1));

return statearr_22407;
});
var cljs$core$async$state_machine__21626__auto____1 = (function (state_22386){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_22386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e22408){if((e22408 instanceof Object)){
var ex__21629__auto__ = e22408;
var statearr_22409_22430 = state_22386;
(statearr_22409_22430[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22431 = state_22386;
state_22386 = G__22431;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$state_machine__21626__auto__ = function(state_22386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21626__auto____1.call(this,state_22386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21626__auto____0;
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21626__auto____1;
return cljs$core$async$state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto___22415,tc,fc))
})();
var state__21739__auto__ = (function (){var statearr_22410 = f__21738__auto__.call(null);
(statearr_22410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___22415);

return statearr_22410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto___22415,tc,fc))
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
var c__21737__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto__){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto__){
return (function (state_22495){
var state_val_22496 = (state_22495[(1)]);
if((state_val_22496 === (7))){
var inst_22491 = (state_22495[(2)]);
var state_22495__$1 = state_22495;
var statearr_22497_22518 = state_22495__$1;
(statearr_22497_22518[(2)] = inst_22491);

(statearr_22497_22518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (1))){
var inst_22475 = init;
var state_22495__$1 = (function (){var statearr_22498 = state_22495;
(statearr_22498[(7)] = inst_22475);

return statearr_22498;
})();
var statearr_22499_22519 = state_22495__$1;
(statearr_22499_22519[(2)] = null);

(statearr_22499_22519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (4))){
var inst_22478 = (state_22495[(8)]);
var inst_22478__$1 = (state_22495[(2)]);
var inst_22479 = (inst_22478__$1 == null);
var state_22495__$1 = (function (){var statearr_22500 = state_22495;
(statearr_22500[(8)] = inst_22478__$1);

return statearr_22500;
})();
if(cljs.core.truth_(inst_22479)){
var statearr_22501_22520 = state_22495__$1;
(statearr_22501_22520[(1)] = (5));

} else {
var statearr_22502_22521 = state_22495__$1;
(statearr_22502_22521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (6))){
var inst_22482 = (state_22495[(9)]);
var inst_22478 = (state_22495[(8)]);
var inst_22475 = (state_22495[(7)]);
var inst_22482__$1 = f.call(null,inst_22475,inst_22478);
var inst_22483 = cljs.core.reduced_QMARK_.call(null,inst_22482__$1);
var state_22495__$1 = (function (){var statearr_22503 = state_22495;
(statearr_22503[(9)] = inst_22482__$1);

return statearr_22503;
})();
if(inst_22483){
var statearr_22504_22522 = state_22495__$1;
(statearr_22504_22522[(1)] = (8));

} else {
var statearr_22505_22523 = state_22495__$1;
(statearr_22505_22523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (3))){
var inst_22493 = (state_22495[(2)]);
var state_22495__$1 = state_22495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22495__$1,inst_22493);
} else {
if((state_val_22496 === (2))){
var state_22495__$1 = state_22495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22495__$1,(4),ch);
} else {
if((state_val_22496 === (9))){
var inst_22482 = (state_22495[(9)]);
var inst_22475 = inst_22482;
var state_22495__$1 = (function (){var statearr_22506 = state_22495;
(statearr_22506[(7)] = inst_22475);

return statearr_22506;
})();
var statearr_22507_22524 = state_22495__$1;
(statearr_22507_22524[(2)] = null);

(statearr_22507_22524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (5))){
var inst_22475 = (state_22495[(7)]);
var state_22495__$1 = state_22495;
var statearr_22508_22525 = state_22495__$1;
(statearr_22508_22525[(2)] = inst_22475);

(statearr_22508_22525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (10))){
var inst_22489 = (state_22495[(2)]);
var state_22495__$1 = state_22495;
var statearr_22509_22526 = state_22495__$1;
(statearr_22509_22526[(2)] = inst_22489);

(statearr_22509_22526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (8))){
var inst_22482 = (state_22495[(9)]);
var inst_22485 = cljs.core.deref.call(null,inst_22482);
var state_22495__$1 = state_22495;
var statearr_22510_22527 = state_22495__$1;
(statearr_22510_22527[(2)] = inst_22485);

(statearr_22510_22527[(1)] = (10));


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
});})(c__21737__auto__))
;
return ((function (switch__21625__auto__,c__21737__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21626__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21626__auto____0 = (function (){
var statearr_22514 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22514[(0)] = cljs$core$async$reduce_$_state_machine__21626__auto__);

(statearr_22514[(1)] = (1));

return statearr_22514;
});
var cljs$core$async$reduce_$_state_machine__21626__auto____1 = (function (state_22495){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_22495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e22515){if((e22515 instanceof Object)){
var ex__21629__auto__ = e22515;
var statearr_22516_22528 = state_22495;
(statearr_22516_22528[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22529 = state_22495;
state_22495 = G__22529;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21626__auto__ = function(state_22495){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21626__auto____1.call(this,state_22495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21626__auto____0;
cljs$core$async$reduce_$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21626__auto____1;
return cljs$core$async$reduce_$_state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto__))
})();
var state__21739__auto__ = (function (){var statearr_22517 = f__21738__auto__.call(null);
(statearr_22517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto__);

return statearr_22517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto__))
);

return c__21737__auto__;
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
var args22530 = [];
var len__17829__auto___22582 = arguments.length;
var i__17830__auto___22583 = (0);
while(true){
if((i__17830__auto___22583 < len__17829__auto___22582)){
args22530.push((arguments[i__17830__auto___22583]));

var G__22584 = (i__17830__auto___22583 + (1));
i__17830__auto___22583 = G__22584;
continue;
} else {
}
break;
}

var G__22532 = args22530.length;
switch (G__22532) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22530.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21737__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto__){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto__){
return (function (state_22557){
var state_val_22558 = (state_22557[(1)]);
if((state_val_22558 === (7))){
var inst_22539 = (state_22557[(2)]);
var state_22557__$1 = state_22557;
var statearr_22559_22586 = state_22557__$1;
(statearr_22559_22586[(2)] = inst_22539);

(statearr_22559_22586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (1))){
var inst_22533 = cljs.core.seq.call(null,coll);
var inst_22534 = inst_22533;
var state_22557__$1 = (function (){var statearr_22560 = state_22557;
(statearr_22560[(7)] = inst_22534);

return statearr_22560;
})();
var statearr_22561_22587 = state_22557__$1;
(statearr_22561_22587[(2)] = null);

(statearr_22561_22587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (4))){
var inst_22534 = (state_22557[(7)]);
var inst_22537 = cljs.core.first.call(null,inst_22534);
var state_22557__$1 = state_22557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22557__$1,(7),ch,inst_22537);
} else {
if((state_val_22558 === (13))){
var inst_22551 = (state_22557[(2)]);
var state_22557__$1 = state_22557;
var statearr_22562_22588 = state_22557__$1;
(statearr_22562_22588[(2)] = inst_22551);

(statearr_22562_22588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (6))){
var inst_22542 = (state_22557[(2)]);
var state_22557__$1 = state_22557;
if(cljs.core.truth_(inst_22542)){
var statearr_22563_22589 = state_22557__$1;
(statearr_22563_22589[(1)] = (8));

} else {
var statearr_22564_22590 = state_22557__$1;
(statearr_22564_22590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (3))){
var inst_22555 = (state_22557[(2)]);
var state_22557__$1 = state_22557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22557__$1,inst_22555);
} else {
if((state_val_22558 === (12))){
var state_22557__$1 = state_22557;
var statearr_22565_22591 = state_22557__$1;
(statearr_22565_22591[(2)] = null);

(statearr_22565_22591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (2))){
var inst_22534 = (state_22557[(7)]);
var state_22557__$1 = state_22557;
if(cljs.core.truth_(inst_22534)){
var statearr_22566_22592 = state_22557__$1;
(statearr_22566_22592[(1)] = (4));

} else {
var statearr_22567_22593 = state_22557__$1;
(statearr_22567_22593[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (11))){
var inst_22548 = cljs.core.async.close_BANG_.call(null,ch);
var state_22557__$1 = state_22557;
var statearr_22568_22594 = state_22557__$1;
(statearr_22568_22594[(2)] = inst_22548);

(statearr_22568_22594[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (9))){
var state_22557__$1 = state_22557;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22569_22595 = state_22557__$1;
(statearr_22569_22595[(1)] = (11));

} else {
var statearr_22570_22596 = state_22557__$1;
(statearr_22570_22596[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (5))){
var inst_22534 = (state_22557[(7)]);
var state_22557__$1 = state_22557;
var statearr_22571_22597 = state_22557__$1;
(statearr_22571_22597[(2)] = inst_22534);

(statearr_22571_22597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (10))){
var inst_22553 = (state_22557[(2)]);
var state_22557__$1 = state_22557;
var statearr_22572_22598 = state_22557__$1;
(statearr_22572_22598[(2)] = inst_22553);

(statearr_22572_22598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (8))){
var inst_22534 = (state_22557[(7)]);
var inst_22544 = cljs.core.next.call(null,inst_22534);
var inst_22534__$1 = inst_22544;
var state_22557__$1 = (function (){var statearr_22573 = state_22557;
(statearr_22573[(7)] = inst_22534__$1);

return statearr_22573;
})();
var statearr_22574_22599 = state_22557__$1;
(statearr_22574_22599[(2)] = null);

(statearr_22574_22599[(1)] = (2));


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
});})(c__21737__auto__))
;
return ((function (switch__21625__auto__,c__21737__auto__){
return (function() {
var cljs$core$async$state_machine__21626__auto__ = null;
var cljs$core$async$state_machine__21626__auto____0 = (function (){
var statearr_22578 = [null,null,null,null,null,null,null,null];
(statearr_22578[(0)] = cljs$core$async$state_machine__21626__auto__);

(statearr_22578[(1)] = (1));

return statearr_22578;
});
var cljs$core$async$state_machine__21626__auto____1 = (function (state_22557){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_22557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e22579){if((e22579 instanceof Object)){
var ex__21629__auto__ = e22579;
var statearr_22580_22600 = state_22557;
(statearr_22580_22600[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22601 = state_22557;
state_22557 = G__22601;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$state_machine__21626__auto__ = function(state_22557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21626__auto____1.call(this,state_22557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21626__auto____0;
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21626__auto____1;
return cljs$core$async$state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto__))
})();
var state__21739__auto__ = (function (){var statearr_22581 = f__21738__auto__.call(null);
(statearr_22581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto__);

return statearr_22581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto__))
);

return c__21737__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async22823 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22823 = (function (mult,ch,cs,meta22824){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22824 = meta22824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22825,meta22824__$1){
var self__ = this;
var _22825__$1 = this;
return (new cljs.core.async.t_cljs$core$async22823(self__.mult,self__.ch,self__.cs,meta22824__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22823.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22825){
var self__ = this;
var _22825__$1 = this;
return self__.meta22824;
});})(cs))
;

cljs.core.async.t_cljs$core$async22823.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22823.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22823.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22823.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22823.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22823.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22823.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22824","meta22824",-449547657,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22823";

cljs.core.async.t_cljs$core$async22823.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22823");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22823 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22823(mult__$1,ch__$1,cs__$1,meta22824){
return (new cljs.core.async.t_cljs$core$async22823(mult__$1,ch__$1,cs__$1,meta22824));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22823(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21737__auto___23044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto___23044,cs,m,dchan,dctr,done){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto___23044,cs,m,dchan,dctr,done){
return (function (state_22956){
var state_val_22957 = (state_22956[(1)]);
if((state_val_22957 === (7))){
var inst_22952 = (state_22956[(2)]);
var state_22956__$1 = state_22956;
var statearr_22958_23045 = state_22956__$1;
(statearr_22958_23045[(2)] = inst_22952);

(statearr_22958_23045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (20))){
var inst_22857 = (state_22956[(7)]);
var inst_22867 = cljs.core.first.call(null,inst_22857);
var inst_22868 = cljs.core.nth.call(null,inst_22867,(0),null);
var inst_22869 = cljs.core.nth.call(null,inst_22867,(1),null);
var state_22956__$1 = (function (){var statearr_22959 = state_22956;
(statearr_22959[(8)] = inst_22868);

return statearr_22959;
})();
if(cljs.core.truth_(inst_22869)){
var statearr_22960_23046 = state_22956__$1;
(statearr_22960_23046[(1)] = (22));

} else {
var statearr_22961_23047 = state_22956__$1;
(statearr_22961_23047[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (27))){
var inst_22899 = (state_22956[(9)]);
var inst_22828 = (state_22956[(10)]);
var inst_22897 = (state_22956[(11)]);
var inst_22904 = (state_22956[(12)]);
var inst_22904__$1 = cljs.core._nth.call(null,inst_22897,inst_22899);
var inst_22905 = cljs.core.async.put_BANG_.call(null,inst_22904__$1,inst_22828,done);
var state_22956__$1 = (function (){var statearr_22962 = state_22956;
(statearr_22962[(12)] = inst_22904__$1);

return statearr_22962;
})();
if(cljs.core.truth_(inst_22905)){
var statearr_22963_23048 = state_22956__$1;
(statearr_22963_23048[(1)] = (30));

} else {
var statearr_22964_23049 = state_22956__$1;
(statearr_22964_23049[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (1))){
var state_22956__$1 = state_22956;
var statearr_22965_23050 = state_22956__$1;
(statearr_22965_23050[(2)] = null);

(statearr_22965_23050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (24))){
var inst_22857 = (state_22956[(7)]);
var inst_22874 = (state_22956[(2)]);
var inst_22875 = cljs.core.next.call(null,inst_22857);
var inst_22837 = inst_22875;
var inst_22838 = null;
var inst_22839 = (0);
var inst_22840 = (0);
var state_22956__$1 = (function (){var statearr_22966 = state_22956;
(statearr_22966[(13)] = inst_22838);

(statearr_22966[(14)] = inst_22874);

(statearr_22966[(15)] = inst_22837);

(statearr_22966[(16)] = inst_22840);

(statearr_22966[(17)] = inst_22839);

return statearr_22966;
})();
var statearr_22967_23051 = state_22956__$1;
(statearr_22967_23051[(2)] = null);

(statearr_22967_23051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (39))){
var state_22956__$1 = state_22956;
var statearr_22971_23052 = state_22956__$1;
(statearr_22971_23052[(2)] = null);

(statearr_22971_23052[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (4))){
var inst_22828 = (state_22956[(10)]);
var inst_22828__$1 = (state_22956[(2)]);
var inst_22829 = (inst_22828__$1 == null);
var state_22956__$1 = (function (){var statearr_22972 = state_22956;
(statearr_22972[(10)] = inst_22828__$1);

return statearr_22972;
})();
if(cljs.core.truth_(inst_22829)){
var statearr_22973_23053 = state_22956__$1;
(statearr_22973_23053[(1)] = (5));

} else {
var statearr_22974_23054 = state_22956__$1;
(statearr_22974_23054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (15))){
var inst_22838 = (state_22956[(13)]);
var inst_22837 = (state_22956[(15)]);
var inst_22840 = (state_22956[(16)]);
var inst_22839 = (state_22956[(17)]);
var inst_22853 = (state_22956[(2)]);
var inst_22854 = (inst_22840 + (1));
var tmp22968 = inst_22838;
var tmp22969 = inst_22837;
var tmp22970 = inst_22839;
var inst_22837__$1 = tmp22969;
var inst_22838__$1 = tmp22968;
var inst_22839__$1 = tmp22970;
var inst_22840__$1 = inst_22854;
var state_22956__$1 = (function (){var statearr_22975 = state_22956;
(statearr_22975[(18)] = inst_22853);

(statearr_22975[(13)] = inst_22838__$1);

(statearr_22975[(15)] = inst_22837__$1);

(statearr_22975[(16)] = inst_22840__$1);

(statearr_22975[(17)] = inst_22839__$1);

return statearr_22975;
})();
var statearr_22976_23055 = state_22956__$1;
(statearr_22976_23055[(2)] = null);

(statearr_22976_23055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (21))){
var inst_22878 = (state_22956[(2)]);
var state_22956__$1 = state_22956;
var statearr_22980_23056 = state_22956__$1;
(statearr_22980_23056[(2)] = inst_22878);

(statearr_22980_23056[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (31))){
var inst_22904 = (state_22956[(12)]);
var inst_22908 = done.call(null,null);
var inst_22909 = cljs.core.async.untap_STAR_.call(null,m,inst_22904);
var state_22956__$1 = (function (){var statearr_22981 = state_22956;
(statearr_22981[(19)] = inst_22908);

return statearr_22981;
})();
var statearr_22982_23057 = state_22956__$1;
(statearr_22982_23057[(2)] = inst_22909);

(statearr_22982_23057[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (32))){
var inst_22896 = (state_22956[(20)]);
var inst_22899 = (state_22956[(9)]);
var inst_22897 = (state_22956[(11)]);
var inst_22898 = (state_22956[(21)]);
var inst_22911 = (state_22956[(2)]);
var inst_22912 = (inst_22899 + (1));
var tmp22977 = inst_22896;
var tmp22978 = inst_22897;
var tmp22979 = inst_22898;
var inst_22896__$1 = tmp22977;
var inst_22897__$1 = tmp22978;
var inst_22898__$1 = tmp22979;
var inst_22899__$1 = inst_22912;
var state_22956__$1 = (function (){var statearr_22983 = state_22956;
(statearr_22983[(20)] = inst_22896__$1);

(statearr_22983[(9)] = inst_22899__$1);

(statearr_22983[(11)] = inst_22897__$1);

(statearr_22983[(21)] = inst_22898__$1);

(statearr_22983[(22)] = inst_22911);

return statearr_22983;
})();
var statearr_22984_23058 = state_22956__$1;
(statearr_22984_23058[(2)] = null);

(statearr_22984_23058[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (40))){
var inst_22924 = (state_22956[(23)]);
var inst_22928 = done.call(null,null);
var inst_22929 = cljs.core.async.untap_STAR_.call(null,m,inst_22924);
var state_22956__$1 = (function (){var statearr_22985 = state_22956;
(statearr_22985[(24)] = inst_22928);

return statearr_22985;
})();
var statearr_22986_23059 = state_22956__$1;
(statearr_22986_23059[(2)] = inst_22929);

(statearr_22986_23059[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (33))){
var inst_22915 = (state_22956[(25)]);
var inst_22917 = cljs.core.chunked_seq_QMARK_.call(null,inst_22915);
var state_22956__$1 = state_22956;
if(inst_22917){
var statearr_22987_23060 = state_22956__$1;
(statearr_22987_23060[(1)] = (36));

} else {
var statearr_22988_23061 = state_22956__$1;
(statearr_22988_23061[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (13))){
var inst_22847 = (state_22956[(26)]);
var inst_22850 = cljs.core.async.close_BANG_.call(null,inst_22847);
var state_22956__$1 = state_22956;
var statearr_22989_23062 = state_22956__$1;
(statearr_22989_23062[(2)] = inst_22850);

(statearr_22989_23062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (22))){
var inst_22868 = (state_22956[(8)]);
var inst_22871 = cljs.core.async.close_BANG_.call(null,inst_22868);
var state_22956__$1 = state_22956;
var statearr_22990_23063 = state_22956__$1;
(statearr_22990_23063[(2)] = inst_22871);

(statearr_22990_23063[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (36))){
var inst_22915 = (state_22956[(25)]);
var inst_22919 = cljs.core.chunk_first.call(null,inst_22915);
var inst_22920 = cljs.core.chunk_rest.call(null,inst_22915);
var inst_22921 = cljs.core.count.call(null,inst_22919);
var inst_22896 = inst_22920;
var inst_22897 = inst_22919;
var inst_22898 = inst_22921;
var inst_22899 = (0);
var state_22956__$1 = (function (){var statearr_22991 = state_22956;
(statearr_22991[(20)] = inst_22896);

(statearr_22991[(9)] = inst_22899);

(statearr_22991[(11)] = inst_22897);

(statearr_22991[(21)] = inst_22898);

return statearr_22991;
})();
var statearr_22992_23064 = state_22956__$1;
(statearr_22992_23064[(2)] = null);

(statearr_22992_23064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (41))){
var inst_22915 = (state_22956[(25)]);
var inst_22931 = (state_22956[(2)]);
var inst_22932 = cljs.core.next.call(null,inst_22915);
var inst_22896 = inst_22932;
var inst_22897 = null;
var inst_22898 = (0);
var inst_22899 = (0);
var state_22956__$1 = (function (){var statearr_22993 = state_22956;
(statearr_22993[(20)] = inst_22896);

(statearr_22993[(9)] = inst_22899);

(statearr_22993[(27)] = inst_22931);

(statearr_22993[(11)] = inst_22897);

(statearr_22993[(21)] = inst_22898);

return statearr_22993;
})();
var statearr_22994_23065 = state_22956__$1;
(statearr_22994_23065[(2)] = null);

(statearr_22994_23065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (43))){
var state_22956__$1 = state_22956;
var statearr_22995_23066 = state_22956__$1;
(statearr_22995_23066[(2)] = null);

(statearr_22995_23066[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (29))){
var inst_22940 = (state_22956[(2)]);
var state_22956__$1 = state_22956;
var statearr_22996_23067 = state_22956__$1;
(statearr_22996_23067[(2)] = inst_22940);

(statearr_22996_23067[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (44))){
var inst_22949 = (state_22956[(2)]);
var state_22956__$1 = (function (){var statearr_22997 = state_22956;
(statearr_22997[(28)] = inst_22949);

return statearr_22997;
})();
var statearr_22998_23068 = state_22956__$1;
(statearr_22998_23068[(2)] = null);

(statearr_22998_23068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (6))){
var inst_22888 = (state_22956[(29)]);
var inst_22887 = cljs.core.deref.call(null,cs);
var inst_22888__$1 = cljs.core.keys.call(null,inst_22887);
var inst_22889 = cljs.core.count.call(null,inst_22888__$1);
var inst_22890 = cljs.core.reset_BANG_.call(null,dctr,inst_22889);
var inst_22895 = cljs.core.seq.call(null,inst_22888__$1);
var inst_22896 = inst_22895;
var inst_22897 = null;
var inst_22898 = (0);
var inst_22899 = (0);
var state_22956__$1 = (function (){var statearr_22999 = state_22956;
(statearr_22999[(20)] = inst_22896);

(statearr_22999[(9)] = inst_22899);

(statearr_22999[(11)] = inst_22897);

(statearr_22999[(21)] = inst_22898);

(statearr_22999[(29)] = inst_22888__$1);

(statearr_22999[(30)] = inst_22890);

return statearr_22999;
})();
var statearr_23000_23069 = state_22956__$1;
(statearr_23000_23069[(2)] = null);

(statearr_23000_23069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (28))){
var inst_22896 = (state_22956[(20)]);
var inst_22915 = (state_22956[(25)]);
var inst_22915__$1 = cljs.core.seq.call(null,inst_22896);
var state_22956__$1 = (function (){var statearr_23001 = state_22956;
(statearr_23001[(25)] = inst_22915__$1);

return statearr_23001;
})();
if(inst_22915__$1){
var statearr_23002_23070 = state_22956__$1;
(statearr_23002_23070[(1)] = (33));

} else {
var statearr_23003_23071 = state_22956__$1;
(statearr_23003_23071[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (25))){
var inst_22899 = (state_22956[(9)]);
var inst_22898 = (state_22956[(21)]);
var inst_22901 = (inst_22899 < inst_22898);
var inst_22902 = inst_22901;
var state_22956__$1 = state_22956;
if(cljs.core.truth_(inst_22902)){
var statearr_23004_23072 = state_22956__$1;
(statearr_23004_23072[(1)] = (27));

} else {
var statearr_23005_23073 = state_22956__$1;
(statearr_23005_23073[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (34))){
var state_22956__$1 = state_22956;
var statearr_23006_23074 = state_22956__$1;
(statearr_23006_23074[(2)] = null);

(statearr_23006_23074[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (17))){
var state_22956__$1 = state_22956;
var statearr_23007_23075 = state_22956__$1;
(statearr_23007_23075[(2)] = null);

(statearr_23007_23075[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (3))){
var inst_22954 = (state_22956[(2)]);
var state_22956__$1 = state_22956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22956__$1,inst_22954);
} else {
if((state_val_22957 === (12))){
var inst_22883 = (state_22956[(2)]);
var state_22956__$1 = state_22956;
var statearr_23008_23076 = state_22956__$1;
(statearr_23008_23076[(2)] = inst_22883);

(statearr_23008_23076[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (2))){
var state_22956__$1 = state_22956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22956__$1,(4),ch);
} else {
if((state_val_22957 === (23))){
var state_22956__$1 = state_22956;
var statearr_23009_23077 = state_22956__$1;
(statearr_23009_23077[(2)] = null);

(statearr_23009_23077[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (35))){
var inst_22938 = (state_22956[(2)]);
var state_22956__$1 = state_22956;
var statearr_23010_23078 = state_22956__$1;
(statearr_23010_23078[(2)] = inst_22938);

(statearr_23010_23078[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (19))){
var inst_22857 = (state_22956[(7)]);
var inst_22861 = cljs.core.chunk_first.call(null,inst_22857);
var inst_22862 = cljs.core.chunk_rest.call(null,inst_22857);
var inst_22863 = cljs.core.count.call(null,inst_22861);
var inst_22837 = inst_22862;
var inst_22838 = inst_22861;
var inst_22839 = inst_22863;
var inst_22840 = (0);
var state_22956__$1 = (function (){var statearr_23011 = state_22956;
(statearr_23011[(13)] = inst_22838);

(statearr_23011[(15)] = inst_22837);

(statearr_23011[(16)] = inst_22840);

(statearr_23011[(17)] = inst_22839);

return statearr_23011;
})();
var statearr_23012_23079 = state_22956__$1;
(statearr_23012_23079[(2)] = null);

(statearr_23012_23079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (11))){
var inst_22837 = (state_22956[(15)]);
var inst_22857 = (state_22956[(7)]);
var inst_22857__$1 = cljs.core.seq.call(null,inst_22837);
var state_22956__$1 = (function (){var statearr_23013 = state_22956;
(statearr_23013[(7)] = inst_22857__$1);

return statearr_23013;
})();
if(inst_22857__$1){
var statearr_23014_23080 = state_22956__$1;
(statearr_23014_23080[(1)] = (16));

} else {
var statearr_23015_23081 = state_22956__$1;
(statearr_23015_23081[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (9))){
var inst_22885 = (state_22956[(2)]);
var state_22956__$1 = state_22956;
var statearr_23016_23082 = state_22956__$1;
(statearr_23016_23082[(2)] = inst_22885);

(statearr_23016_23082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (5))){
var inst_22835 = cljs.core.deref.call(null,cs);
var inst_22836 = cljs.core.seq.call(null,inst_22835);
var inst_22837 = inst_22836;
var inst_22838 = null;
var inst_22839 = (0);
var inst_22840 = (0);
var state_22956__$1 = (function (){var statearr_23017 = state_22956;
(statearr_23017[(13)] = inst_22838);

(statearr_23017[(15)] = inst_22837);

(statearr_23017[(16)] = inst_22840);

(statearr_23017[(17)] = inst_22839);

return statearr_23017;
})();
var statearr_23018_23083 = state_22956__$1;
(statearr_23018_23083[(2)] = null);

(statearr_23018_23083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (14))){
var state_22956__$1 = state_22956;
var statearr_23019_23084 = state_22956__$1;
(statearr_23019_23084[(2)] = null);

(statearr_23019_23084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (45))){
var inst_22946 = (state_22956[(2)]);
var state_22956__$1 = state_22956;
var statearr_23020_23085 = state_22956__$1;
(statearr_23020_23085[(2)] = inst_22946);

(statearr_23020_23085[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (26))){
var inst_22888 = (state_22956[(29)]);
var inst_22942 = (state_22956[(2)]);
var inst_22943 = cljs.core.seq.call(null,inst_22888);
var state_22956__$1 = (function (){var statearr_23021 = state_22956;
(statearr_23021[(31)] = inst_22942);

return statearr_23021;
})();
if(inst_22943){
var statearr_23022_23086 = state_22956__$1;
(statearr_23022_23086[(1)] = (42));

} else {
var statearr_23023_23087 = state_22956__$1;
(statearr_23023_23087[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (16))){
var inst_22857 = (state_22956[(7)]);
var inst_22859 = cljs.core.chunked_seq_QMARK_.call(null,inst_22857);
var state_22956__$1 = state_22956;
if(inst_22859){
var statearr_23024_23088 = state_22956__$1;
(statearr_23024_23088[(1)] = (19));

} else {
var statearr_23025_23089 = state_22956__$1;
(statearr_23025_23089[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (38))){
var inst_22935 = (state_22956[(2)]);
var state_22956__$1 = state_22956;
var statearr_23026_23090 = state_22956__$1;
(statearr_23026_23090[(2)] = inst_22935);

(statearr_23026_23090[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (30))){
var state_22956__$1 = state_22956;
var statearr_23027_23091 = state_22956__$1;
(statearr_23027_23091[(2)] = null);

(statearr_23027_23091[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (10))){
var inst_22838 = (state_22956[(13)]);
var inst_22840 = (state_22956[(16)]);
var inst_22846 = cljs.core._nth.call(null,inst_22838,inst_22840);
var inst_22847 = cljs.core.nth.call(null,inst_22846,(0),null);
var inst_22848 = cljs.core.nth.call(null,inst_22846,(1),null);
var state_22956__$1 = (function (){var statearr_23028 = state_22956;
(statearr_23028[(26)] = inst_22847);

return statearr_23028;
})();
if(cljs.core.truth_(inst_22848)){
var statearr_23029_23092 = state_22956__$1;
(statearr_23029_23092[(1)] = (13));

} else {
var statearr_23030_23093 = state_22956__$1;
(statearr_23030_23093[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (18))){
var inst_22881 = (state_22956[(2)]);
var state_22956__$1 = state_22956;
var statearr_23031_23094 = state_22956__$1;
(statearr_23031_23094[(2)] = inst_22881);

(statearr_23031_23094[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (42))){
var state_22956__$1 = state_22956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22956__$1,(45),dchan);
} else {
if((state_val_22957 === (37))){
var inst_22828 = (state_22956[(10)]);
var inst_22924 = (state_22956[(23)]);
var inst_22915 = (state_22956[(25)]);
var inst_22924__$1 = cljs.core.first.call(null,inst_22915);
var inst_22925 = cljs.core.async.put_BANG_.call(null,inst_22924__$1,inst_22828,done);
var state_22956__$1 = (function (){var statearr_23032 = state_22956;
(statearr_23032[(23)] = inst_22924__$1);

return statearr_23032;
})();
if(cljs.core.truth_(inst_22925)){
var statearr_23033_23095 = state_22956__$1;
(statearr_23033_23095[(1)] = (39));

} else {
var statearr_23034_23096 = state_22956__$1;
(statearr_23034_23096[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22957 === (8))){
var inst_22840 = (state_22956[(16)]);
var inst_22839 = (state_22956[(17)]);
var inst_22842 = (inst_22840 < inst_22839);
var inst_22843 = inst_22842;
var state_22956__$1 = state_22956;
if(cljs.core.truth_(inst_22843)){
var statearr_23035_23097 = state_22956__$1;
(statearr_23035_23097[(1)] = (10));

} else {
var statearr_23036_23098 = state_22956__$1;
(statearr_23036_23098[(1)] = (11));

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
});})(c__21737__auto___23044,cs,m,dchan,dctr,done))
;
return ((function (switch__21625__auto__,c__21737__auto___23044,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21626__auto__ = null;
var cljs$core$async$mult_$_state_machine__21626__auto____0 = (function (){
var statearr_23040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23040[(0)] = cljs$core$async$mult_$_state_machine__21626__auto__);

(statearr_23040[(1)] = (1));

return statearr_23040;
});
var cljs$core$async$mult_$_state_machine__21626__auto____1 = (function (state_22956){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_22956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e23041){if((e23041 instanceof Object)){
var ex__21629__auto__ = e23041;
var statearr_23042_23099 = state_22956;
(statearr_23042_23099[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23100 = state_22956;
state_22956 = G__23100;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21626__auto__ = function(state_22956){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21626__auto____1.call(this,state_22956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21626__auto____0;
cljs$core$async$mult_$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21626__auto____1;
return cljs$core$async$mult_$_state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto___23044,cs,m,dchan,dctr,done))
})();
var state__21739__auto__ = (function (){var statearr_23043 = f__21738__auto__.call(null);
(statearr_23043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___23044);

return statearr_23043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto___23044,cs,m,dchan,dctr,done))
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
var args23101 = [];
var len__17829__auto___23104 = arguments.length;
var i__17830__auto___23105 = (0);
while(true){
if((i__17830__auto___23105 < len__17829__auto___23104)){
args23101.push((arguments[i__17830__auto___23105]));

var G__23106 = (i__17830__auto___23105 + (1));
i__17830__auto___23105 = G__23106;
continue;
} else {
}
break;
}

var G__23103 = args23101.length;
switch (G__23103) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23101.length)].join('')));

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
var len__17829__auto___23118 = arguments.length;
var i__17830__auto___23119 = (0);
while(true){
if((i__17830__auto___23119 < len__17829__auto___23118)){
args__17836__auto__.push((arguments[i__17830__auto___23119]));

var G__23120 = (i__17830__auto___23119 + (1));
i__17830__auto___23119 = G__23120;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((3) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17837__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23112){
var map__23113 = p__23112;
var map__23113__$1 = ((((!((map__23113 == null)))?((((map__23113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23113):map__23113);
var opts = map__23113__$1;
var statearr_23115_23121 = state;
(statearr_23115_23121[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23113,map__23113__$1,opts){
return (function (val){
var statearr_23116_23122 = state;
(statearr_23116_23122[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23113,map__23113__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23117_23123 = state;
(statearr_23117_23123[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23108){
var G__23109 = cljs.core.first.call(null,seq23108);
var seq23108__$1 = cljs.core.next.call(null,seq23108);
var G__23110 = cljs.core.first.call(null,seq23108__$1);
var seq23108__$2 = cljs.core.next.call(null,seq23108__$1);
var G__23111 = cljs.core.first.call(null,seq23108__$2);
var seq23108__$3 = cljs.core.next.call(null,seq23108__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23109,G__23110,G__23111,seq23108__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23287 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23288){
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
this.meta23288 = meta23288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23289,meta23288__$1){
var self__ = this;
var _23289__$1 = this;
return (new cljs.core.async.t_cljs$core$async23287(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23288__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23289){
var self__ = this;
var _23289__$1 = this;
return self__.meta23288;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23287.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23287.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23287.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23287.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23287.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23287.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23287.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23287.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23287.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23288","meta23288",767187626,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23287";

cljs.core.async.t_cljs$core$async23287.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23287");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23287 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23287(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23288){
return (new cljs.core.async.t_cljs$core$async23287(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23288));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23287(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21737__auto___23450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto___23450,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto___23450,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23387){
var state_val_23388 = (state_23387[(1)]);
if((state_val_23388 === (7))){
var inst_23305 = (state_23387[(2)]);
var state_23387__$1 = state_23387;
var statearr_23389_23451 = state_23387__$1;
(statearr_23389_23451[(2)] = inst_23305);

(statearr_23389_23451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (20))){
var inst_23317 = (state_23387[(7)]);
var state_23387__$1 = state_23387;
var statearr_23390_23452 = state_23387__$1;
(statearr_23390_23452[(2)] = inst_23317);

(statearr_23390_23452[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (27))){
var state_23387__$1 = state_23387;
var statearr_23391_23453 = state_23387__$1;
(statearr_23391_23453[(2)] = null);

(statearr_23391_23453[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (1))){
var inst_23293 = (state_23387[(8)]);
var inst_23293__$1 = calc_state.call(null);
var inst_23295 = (inst_23293__$1 == null);
var inst_23296 = cljs.core.not.call(null,inst_23295);
var state_23387__$1 = (function (){var statearr_23392 = state_23387;
(statearr_23392[(8)] = inst_23293__$1);

return statearr_23392;
})();
if(inst_23296){
var statearr_23393_23454 = state_23387__$1;
(statearr_23393_23454[(1)] = (2));

} else {
var statearr_23394_23455 = state_23387__$1;
(statearr_23394_23455[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (24))){
var inst_23361 = (state_23387[(9)]);
var inst_23340 = (state_23387[(10)]);
var inst_23347 = (state_23387[(11)]);
var inst_23361__$1 = inst_23340.call(null,inst_23347);
var state_23387__$1 = (function (){var statearr_23395 = state_23387;
(statearr_23395[(9)] = inst_23361__$1);

return statearr_23395;
})();
if(cljs.core.truth_(inst_23361__$1)){
var statearr_23396_23456 = state_23387__$1;
(statearr_23396_23456[(1)] = (29));

} else {
var statearr_23397_23457 = state_23387__$1;
(statearr_23397_23457[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (4))){
var inst_23308 = (state_23387[(2)]);
var state_23387__$1 = state_23387;
if(cljs.core.truth_(inst_23308)){
var statearr_23398_23458 = state_23387__$1;
(statearr_23398_23458[(1)] = (8));

} else {
var statearr_23399_23459 = state_23387__$1;
(statearr_23399_23459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (15))){
var inst_23334 = (state_23387[(2)]);
var state_23387__$1 = state_23387;
if(cljs.core.truth_(inst_23334)){
var statearr_23400_23460 = state_23387__$1;
(statearr_23400_23460[(1)] = (19));

} else {
var statearr_23401_23461 = state_23387__$1;
(statearr_23401_23461[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (21))){
var inst_23339 = (state_23387[(12)]);
var inst_23339__$1 = (state_23387[(2)]);
var inst_23340 = cljs.core.get.call(null,inst_23339__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23341 = cljs.core.get.call(null,inst_23339__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23342 = cljs.core.get.call(null,inst_23339__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23387__$1 = (function (){var statearr_23402 = state_23387;
(statearr_23402[(12)] = inst_23339__$1);

(statearr_23402[(13)] = inst_23341);

(statearr_23402[(10)] = inst_23340);

return statearr_23402;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23387__$1,(22),inst_23342);
} else {
if((state_val_23388 === (31))){
var inst_23369 = (state_23387[(2)]);
var state_23387__$1 = state_23387;
if(cljs.core.truth_(inst_23369)){
var statearr_23403_23462 = state_23387__$1;
(statearr_23403_23462[(1)] = (32));

} else {
var statearr_23404_23463 = state_23387__$1;
(statearr_23404_23463[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (32))){
var inst_23346 = (state_23387[(14)]);
var state_23387__$1 = state_23387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23387__$1,(35),out,inst_23346);
} else {
if((state_val_23388 === (33))){
var inst_23339 = (state_23387[(12)]);
var inst_23317 = inst_23339;
var state_23387__$1 = (function (){var statearr_23405 = state_23387;
(statearr_23405[(7)] = inst_23317);

return statearr_23405;
})();
var statearr_23406_23464 = state_23387__$1;
(statearr_23406_23464[(2)] = null);

(statearr_23406_23464[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (13))){
var inst_23317 = (state_23387[(7)]);
var inst_23324 = inst_23317.cljs$lang$protocol_mask$partition0$;
var inst_23325 = (inst_23324 & (64));
var inst_23326 = inst_23317.cljs$core$ISeq$;
var inst_23327 = (inst_23325) || (inst_23326);
var state_23387__$1 = state_23387;
if(cljs.core.truth_(inst_23327)){
var statearr_23407_23465 = state_23387__$1;
(statearr_23407_23465[(1)] = (16));

} else {
var statearr_23408_23466 = state_23387__$1;
(statearr_23408_23466[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (22))){
var inst_23347 = (state_23387[(11)]);
var inst_23346 = (state_23387[(14)]);
var inst_23345 = (state_23387[(2)]);
var inst_23346__$1 = cljs.core.nth.call(null,inst_23345,(0),null);
var inst_23347__$1 = cljs.core.nth.call(null,inst_23345,(1),null);
var inst_23348 = (inst_23346__$1 == null);
var inst_23349 = cljs.core._EQ_.call(null,inst_23347__$1,change);
var inst_23350 = (inst_23348) || (inst_23349);
var state_23387__$1 = (function (){var statearr_23409 = state_23387;
(statearr_23409[(11)] = inst_23347__$1);

(statearr_23409[(14)] = inst_23346__$1);

return statearr_23409;
})();
if(cljs.core.truth_(inst_23350)){
var statearr_23410_23467 = state_23387__$1;
(statearr_23410_23467[(1)] = (23));

} else {
var statearr_23411_23468 = state_23387__$1;
(statearr_23411_23468[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (36))){
var inst_23339 = (state_23387[(12)]);
var inst_23317 = inst_23339;
var state_23387__$1 = (function (){var statearr_23412 = state_23387;
(statearr_23412[(7)] = inst_23317);

return statearr_23412;
})();
var statearr_23413_23469 = state_23387__$1;
(statearr_23413_23469[(2)] = null);

(statearr_23413_23469[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (29))){
var inst_23361 = (state_23387[(9)]);
var state_23387__$1 = state_23387;
var statearr_23414_23470 = state_23387__$1;
(statearr_23414_23470[(2)] = inst_23361);

(statearr_23414_23470[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (6))){
var state_23387__$1 = state_23387;
var statearr_23415_23471 = state_23387__$1;
(statearr_23415_23471[(2)] = false);

(statearr_23415_23471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (28))){
var inst_23357 = (state_23387[(2)]);
var inst_23358 = calc_state.call(null);
var inst_23317 = inst_23358;
var state_23387__$1 = (function (){var statearr_23416 = state_23387;
(statearr_23416[(15)] = inst_23357);

(statearr_23416[(7)] = inst_23317);

return statearr_23416;
})();
var statearr_23417_23472 = state_23387__$1;
(statearr_23417_23472[(2)] = null);

(statearr_23417_23472[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (25))){
var inst_23383 = (state_23387[(2)]);
var state_23387__$1 = state_23387;
var statearr_23418_23473 = state_23387__$1;
(statearr_23418_23473[(2)] = inst_23383);

(statearr_23418_23473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (34))){
var inst_23381 = (state_23387[(2)]);
var state_23387__$1 = state_23387;
var statearr_23419_23474 = state_23387__$1;
(statearr_23419_23474[(2)] = inst_23381);

(statearr_23419_23474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (17))){
var state_23387__$1 = state_23387;
var statearr_23420_23475 = state_23387__$1;
(statearr_23420_23475[(2)] = false);

(statearr_23420_23475[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (3))){
var state_23387__$1 = state_23387;
var statearr_23421_23476 = state_23387__$1;
(statearr_23421_23476[(2)] = false);

(statearr_23421_23476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (12))){
var inst_23385 = (state_23387[(2)]);
var state_23387__$1 = state_23387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23387__$1,inst_23385);
} else {
if((state_val_23388 === (2))){
var inst_23293 = (state_23387[(8)]);
var inst_23298 = inst_23293.cljs$lang$protocol_mask$partition0$;
var inst_23299 = (inst_23298 & (64));
var inst_23300 = inst_23293.cljs$core$ISeq$;
var inst_23301 = (inst_23299) || (inst_23300);
var state_23387__$1 = state_23387;
if(cljs.core.truth_(inst_23301)){
var statearr_23422_23477 = state_23387__$1;
(statearr_23422_23477[(1)] = (5));

} else {
var statearr_23423_23478 = state_23387__$1;
(statearr_23423_23478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (23))){
var inst_23346 = (state_23387[(14)]);
var inst_23352 = (inst_23346 == null);
var state_23387__$1 = state_23387;
if(cljs.core.truth_(inst_23352)){
var statearr_23424_23479 = state_23387__$1;
(statearr_23424_23479[(1)] = (26));

} else {
var statearr_23425_23480 = state_23387__$1;
(statearr_23425_23480[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (35))){
var inst_23372 = (state_23387[(2)]);
var state_23387__$1 = state_23387;
if(cljs.core.truth_(inst_23372)){
var statearr_23426_23481 = state_23387__$1;
(statearr_23426_23481[(1)] = (36));

} else {
var statearr_23427_23482 = state_23387__$1;
(statearr_23427_23482[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (19))){
var inst_23317 = (state_23387[(7)]);
var inst_23336 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23317);
var state_23387__$1 = state_23387;
var statearr_23428_23483 = state_23387__$1;
(statearr_23428_23483[(2)] = inst_23336);

(statearr_23428_23483[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (11))){
var inst_23317 = (state_23387[(7)]);
var inst_23321 = (inst_23317 == null);
var inst_23322 = cljs.core.not.call(null,inst_23321);
var state_23387__$1 = state_23387;
if(inst_23322){
var statearr_23429_23484 = state_23387__$1;
(statearr_23429_23484[(1)] = (13));

} else {
var statearr_23430_23485 = state_23387__$1;
(statearr_23430_23485[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (9))){
var inst_23293 = (state_23387[(8)]);
var state_23387__$1 = state_23387;
var statearr_23431_23486 = state_23387__$1;
(statearr_23431_23486[(2)] = inst_23293);

(statearr_23431_23486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (5))){
var state_23387__$1 = state_23387;
var statearr_23432_23487 = state_23387__$1;
(statearr_23432_23487[(2)] = true);

(statearr_23432_23487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (14))){
var state_23387__$1 = state_23387;
var statearr_23433_23488 = state_23387__$1;
(statearr_23433_23488[(2)] = false);

(statearr_23433_23488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (26))){
var inst_23347 = (state_23387[(11)]);
var inst_23354 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23347);
var state_23387__$1 = state_23387;
var statearr_23434_23489 = state_23387__$1;
(statearr_23434_23489[(2)] = inst_23354);

(statearr_23434_23489[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (16))){
var state_23387__$1 = state_23387;
var statearr_23435_23490 = state_23387__$1;
(statearr_23435_23490[(2)] = true);

(statearr_23435_23490[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (38))){
var inst_23377 = (state_23387[(2)]);
var state_23387__$1 = state_23387;
var statearr_23436_23491 = state_23387__$1;
(statearr_23436_23491[(2)] = inst_23377);

(statearr_23436_23491[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (30))){
var inst_23341 = (state_23387[(13)]);
var inst_23340 = (state_23387[(10)]);
var inst_23347 = (state_23387[(11)]);
var inst_23364 = cljs.core.empty_QMARK_.call(null,inst_23340);
var inst_23365 = inst_23341.call(null,inst_23347);
var inst_23366 = cljs.core.not.call(null,inst_23365);
var inst_23367 = (inst_23364) && (inst_23366);
var state_23387__$1 = state_23387;
var statearr_23437_23492 = state_23387__$1;
(statearr_23437_23492[(2)] = inst_23367);

(statearr_23437_23492[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (10))){
var inst_23293 = (state_23387[(8)]);
var inst_23313 = (state_23387[(2)]);
var inst_23314 = cljs.core.get.call(null,inst_23313,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23315 = cljs.core.get.call(null,inst_23313,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23316 = cljs.core.get.call(null,inst_23313,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23317 = inst_23293;
var state_23387__$1 = (function (){var statearr_23438 = state_23387;
(statearr_23438[(16)] = inst_23315);

(statearr_23438[(17)] = inst_23316);

(statearr_23438[(18)] = inst_23314);

(statearr_23438[(7)] = inst_23317);

return statearr_23438;
})();
var statearr_23439_23493 = state_23387__$1;
(statearr_23439_23493[(2)] = null);

(statearr_23439_23493[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (18))){
var inst_23331 = (state_23387[(2)]);
var state_23387__$1 = state_23387;
var statearr_23440_23494 = state_23387__$1;
(statearr_23440_23494[(2)] = inst_23331);

(statearr_23440_23494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (37))){
var state_23387__$1 = state_23387;
var statearr_23441_23495 = state_23387__$1;
(statearr_23441_23495[(2)] = null);

(statearr_23441_23495[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23388 === (8))){
var inst_23293 = (state_23387[(8)]);
var inst_23310 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23293);
var state_23387__$1 = state_23387;
var statearr_23442_23496 = state_23387__$1;
(statearr_23442_23496[(2)] = inst_23310);

(statearr_23442_23496[(1)] = (10));


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
});})(c__21737__auto___23450,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21625__auto__,c__21737__auto___23450,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21626__auto__ = null;
var cljs$core$async$mix_$_state_machine__21626__auto____0 = (function (){
var statearr_23446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23446[(0)] = cljs$core$async$mix_$_state_machine__21626__auto__);

(statearr_23446[(1)] = (1));

return statearr_23446;
});
var cljs$core$async$mix_$_state_machine__21626__auto____1 = (function (state_23387){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_23387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e23447){if((e23447 instanceof Object)){
var ex__21629__auto__ = e23447;
var statearr_23448_23497 = state_23387;
(statearr_23448_23497[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23498 = state_23387;
state_23387 = G__23498;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21626__auto__ = function(state_23387){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21626__auto____1.call(this,state_23387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21626__auto____0;
cljs$core$async$mix_$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21626__auto____1;
return cljs$core$async$mix_$_state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto___23450,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21739__auto__ = (function (){var statearr_23449 = f__21738__auto__.call(null);
(statearr_23449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___23450);

return statearr_23449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto___23450,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args23499 = [];
var len__17829__auto___23502 = arguments.length;
var i__17830__auto___23503 = (0);
while(true){
if((i__17830__auto___23503 < len__17829__auto___23502)){
args23499.push((arguments[i__17830__auto___23503]));

var G__23504 = (i__17830__auto___23503 + (1));
i__17830__auto___23503 = G__23504;
continue;
} else {
}
break;
}

var G__23501 = args23499.length;
switch (G__23501) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23499.length)].join('')));

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
var args23507 = [];
var len__17829__auto___23632 = arguments.length;
var i__17830__auto___23633 = (0);
while(true){
if((i__17830__auto___23633 < len__17829__auto___23632)){
args23507.push((arguments[i__17830__auto___23633]));

var G__23634 = (i__17830__auto___23633 + (1));
i__17830__auto___23633 = G__23634;
continue;
} else {
}
break;
}

var G__23509 = args23507.length;
switch (G__23509) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23507.length)].join('')));

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
return (function (p1__23506_SHARP_){
if(cljs.core.truth_(p1__23506_SHARP_.call(null,topic))){
return p1__23506_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23506_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16771__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23510 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23510 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23511){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23511 = meta23511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23512,meta23511__$1){
var self__ = this;
var _23512__$1 = this;
return (new cljs.core.async.t_cljs$core$async23510(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23511__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23510.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23512){
var self__ = this;
var _23512__$1 = this;
return self__.meta23511;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23510.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23510.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23510.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23510.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23510.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23510.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23510.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23510.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23511","meta23511",16353864,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23510.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23510";

cljs.core.async.t_cljs$core$async23510.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23510");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23510 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23510(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23511){
return (new cljs.core.async.t_cljs$core$async23510(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23511));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23510(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21737__auto___23636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto___23636,mults,ensure_mult,p){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto___23636,mults,ensure_mult,p){
return (function (state_23584){
var state_val_23585 = (state_23584[(1)]);
if((state_val_23585 === (7))){
var inst_23580 = (state_23584[(2)]);
var state_23584__$1 = state_23584;
var statearr_23586_23637 = state_23584__$1;
(statearr_23586_23637[(2)] = inst_23580);

(statearr_23586_23637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (20))){
var state_23584__$1 = state_23584;
var statearr_23587_23638 = state_23584__$1;
(statearr_23587_23638[(2)] = null);

(statearr_23587_23638[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (1))){
var state_23584__$1 = state_23584;
var statearr_23588_23639 = state_23584__$1;
(statearr_23588_23639[(2)] = null);

(statearr_23588_23639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (24))){
var inst_23563 = (state_23584[(7)]);
var inst_23572 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23563);
var state_23584__$1 = state_23584;
var statearr_23589_23640 = state_23584__$1;
(statearr_23589_23640[(2)] = inst_23572);

(statearr_23589_23640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (4))){
var inst_23515 = (state_23584[(8)]);
var inst_23515__$1 = (state_23584[(2)]);
var inst_23516 = (inst_23515__$1 == null);
var state_23584__$1 = (function (){var statearr_23590 = state_23584;
(statearr_23590[(8)] = inst_23515__$1);

return statearr_23590;
})();
if(cljs.core.truth_(inst_23516)){
var statearr_23591_23641 = state_23584__$1;
(statearr_23591_23641[(1)] = (5));

} else {
var statearr_23592_23642 = state_23584__$1;
(statearr_23592_23642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (15))){
var inst_23557 = (state_23584[(2)]);
var state_23584__$1 = state_23584;
var statearr_23593_23643 = state_23584__$1;
(statearr_23593_23643[(2)] = inst_23557);

(statearr_23593_23643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (21))){
var inst_23577 = (state_23584[(2)]);
var state_23584__$1 = (function (){var statearr_23594 = state_23584;
(statearr_23594[(9)] = inst_23577);

return statearr_23594;
})();
var statearr_23595_23644 = state_23584__$1;
(statearr_23595_23644[(2)] = null);

(statearr_23595_23644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (13))){
var inst_23539 = (state_23584[(10)]);
var inst_23541 = cljs.core.chunked_seq_QMARK_.call(null,inst_23539);
var state_23584__$1 = state_23584;
if(inst_23541){
var statearr_23596_23645 = state_23584__$1;
(statearr_23596_23645[(1)] = (16));

} else {
var statearr_23597_23646 = state_23584__$1;
(statearr_23597_23646[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (22))){
var inst_23569 = (state_23584[(2)]);
var state_23584__$1 = state_23584;
if(cljs.core.truth_(inst_23569)){
var statearr_23598_23647 = state_23584__$1;
(statearr_23598_23647[(1)] = (23));

} else {
var statearr_23599_23648 = state_23584__$1;
(statearr_23599_23648[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (6))){
var inst_23563 = (state_23584[(7)]);
var inst_23515 = (state_23584[(8)]);
var inst_23565 = (state_23584[(11)]);
var inst_23563__$1 = topic_fn.call(null,inst_23515);
var inst_23564 = cljs.core.deref.call(null,mults);
var inst_23565__$1 = cljs.core.get.call(null,inst_23564,inst_23563__$1);
var state_23584__$1 = (function (){var statearr_23600 = state_23584;
(statearr_23600[(7)] = inst_23563__$1);

(statearr_23600[(11)] = inst_23565__$1);

return statearr_23600;
})();
if(cljs.core.truth_(inst_23565__$1)){
var statearr_23601_23649 = state_23584__$1;
(statearr_23601_23649[(1)] = (19));

} else {
var statearr_23602_23650 = state_23584__$1;
(statearr_23602_23650[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (25))){
var inst_23574 = (state_23584[(2)]);
var state_23584__$1 = state_23584;
var statearr_23603_23651 = state_23584__$1;
(statearr_23603_23651[(2)] = inst_23574);

(statearr_23603_23651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (17))){
var inst_23539 = (state_23584[(10)]);
var inst_23548 = cljs.core.first.call(null,inst_23539);
var inst_23549 = cljs.core.async.muxch_STAR_.call(null,inst_23548);
var inst_23550 = cljs.core.async.close_BANG_.call(null,inst_23549);
var inst_23551 = cljs.core.next.call(null,inst_23539);
var inst_23525 = inst_23551;
var inst_23526 = null;
var inst_23527 = (0);
var inst_23528 = (0);
var state_23584__$1 = (function (){var statearr_23604 = state_23584;
(statearr_23604[(12)] = inst_23525);

(statearr_23604[(13)] = inst_23527);

(statearr_23604[(14)] = inst_23528);

(statearr_23604[(15)] = inst_23526);

(statearr_23604[(16)] = inst_23550);

return statearr_23604;
})();
var statearr_23605_23652 = state_23584__$1;
(statearr_23605_23652[(2)] = null);

(statearr_23605_23652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (3))){
var inst_23582 = (state_23584[(2)]);
var state_23584__$1 = state_23584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23584__$1,inst_23582);
} else {
if((state_val_23585 === (12))){
var inst_23559 = (state_23584[(2)]);
var state_23584__$1 = state_23584;
var statearr_23606_23653 = state_23584__$1;
(statearr_23606_23653[(2)] = inst_23559);

(statearr_23606_23653[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (2))){
var state_23584__$1 = state_23584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23584__$1,(4),ch);
} else {
if((state_val_23585 === (23))){
var state_23584__$1 = state_23584;
var statearr_23607_23654 = state_23584__$1;
(statearr_23607_23654[(2)] = null);

(statearr_23607_23654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (19))){
var inst_23515 = (state_23584[(8)]);
var inst_23565 = (state_23584[(11)]);
var inst_23567 = cljs.core.async.muxch_STAR_.call(null,inst_23565);
var state_23584__$1 = state_23584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23584__$1,(22),inst_23567,inst_23515);
} else {
if((state_val_23585 === (11))){
var inst_23525 = (state_23584[(12)]);
var inst_23539 = (state_23584[(10)]);
var inst_23539__$1 = cljs.core.seq.call(null,inst_23525);
var state_23584__$1 = (function (){var statearr_23608 = state_23584;
(statearr_23608[(10)] = inst_23539__$1);

return statearr_23608;
})();
if(inst_23539__$1){
var statearr_23609_23655 = state_23584__$1;
(statearr_23609_23655[(1)] = (13));

} else {
var statearr_23610_23656 = state_23584__$1;
(statearr_23610_23656[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (9))){
var inst_23561 = (state_23584[(2)]);
var state_23584__$1 = state_23584;
var statearr_23611_23657 = state_23584__$1;
(statearr_23611_23657[(2)] = inst_23561);

(statearr_23611_23657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (5))){
var inst_23522 = cljs.core.deref.call(null,mults);
var inst_23523 = cljs.core.vals.call(null,inst_23522);
var inst_23524 = cljs.core.seq.call(null,inst_23523);
var inst_23525 = inst_23524;
var inst_23526 = null;
var inst_23527 = (0);
var inst_23528 = (0);
var state_23584__$1 = (function (){var statearr_23612 = state_23584;
(statearr_23612[(12)] = inst_23525);

(statearr_23612[(13)] = inst_23527);

(statearr_23612[(14)] = inst_23528);

(statearr_23612[(15)] = inst_23526);

return statearr_23612;
})();
var statearr_23613_23658 = state_23584__$1;
(statearr_23613_23658[(2)] = null);

(statearr_23613_23658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (14))){
var state_23584__$1 = state_23584;
var statearr_23617_23659 = state_23584__$1;
(statearr_23617_23659[(2)] = null);

(statearr_23617_23659[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (16))){
var inst_23539 = (state_23584[(10)]);
var inst_23543 = cljs.core.chunk_first.call(null,inst_23539);
var inst_23544 = cljs.core.chunk_rest.call(null,inst_23539);
var inst_23545 = cljs.core.count.call(null,inst_23543);
var inst_23525 = inst_23544;
var inst_23526 = inst_23543;
var inst_23527 = inst_23545;
var inst_23528 = (0);
var state_23584__$1 = (function (){var statearr_23618 = state_23584;
(statearr_23618[(12)] = inst_23525);

(statearr_23618[(13)] = inst_23527);

(statearr_23618[(14)] = inst_23528);

(statearr_23618[(15)] = inst_23526);

return statearr_23618;
})();
var statearr_23619_23660 = state_23584__$1;
(statearr_23619_23660[(2)] = null);

(statearr_23619_23660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (10))){
var inst_23525 = (state_23584[(12)]);
var inst_23527 = (state_23584[(13)]);
var inst_23528 = (state_23584[(14)]);
var inst_23526 = (state_23584[(15)]);
var inst_23533 = cljs.core._nth.call(null,inst_23526,inst_23528);
var inst_23534 = cljs.core.async.muxch_STAR_.call(null,inst_23533);
var inst_23535 = cljs.core.async.close_BANG_.call(null,inst_23534);
var inst_23536 = (inst_23528 + (1));
var tmp23614 = inst_23525;
var tmp23615 = inst_23527;
var tmp23616 = inst_23526;
var inst_23525__$1 = tmp23614;
var inst_23526__$1 = tmp23616;
var inst_23527__$1 = tmp23615;
var inst_23528__$1 = inst_23536;
var state_23584__$1 = (function (){var statearr_23620 = state_23584;
(statearr_23620[(12)] = inst_23525__$1);

(statearr_23620[(13)] = inst_23527__$1);

(statearr_23620[(17)] = inst_23535);

(statearr_23620[(14)] = inst_23528__$1);

(statearr_23620[(15)] = inst_23526__$1);

return statearr_23620;
})();
var statearr_23621_23661 = state_23584__$1;
(statearr_23621_23661[(2)] = null);

(statearr_23621_23661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (18))){
var inst_23554 = (state_23584[(2)]);
var state_23584__$1 = state_23584;
var statearr_23622_23662 = state_23584__$1;
(statearr_23622_23662[(2)] = inst_23554);

(statearr_23622_23662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23585 === (8))){
var inst_23527 = (state_23584[(13)]);
var inst_23528 = (state_23584[(14)]);
var inst_23530 = (inst_23528 < inst_23527);
var inst_23531 = inst_23530;
var state_23584__$1 = state_23584;
if(cljs.core.truth_(inst_23531)){
var statearr_23623_23663 = state_23584__$1;
(statearr_23623_23663[(1)] = (10));

} else {
var statearr_23624_23664 = state_23584__$1;
(statearr_23624_23664[(1)] = (11));

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
});})(c__21737__auto___23636,mults,ensure_mult,p))
;
return ((function (switch__21625__auto__,c__21737__auto___23636,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21626__auto__ = null;
var cljs$core$async$state_machine__21626__auto____0 = (function (){
var statearr_23628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23628[(0)] = cljs$core$async$state_machine__21626__auto__);

(statearr_23628[(1)] = (1));

return statearr_23628;
});
var cljs$core$async$state_machine__21626__auto____1 = (function (state_23584){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_23584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e23629){if((e23629 instanceof Object)){
var ex__21629__auto__ = e23629;
var statearr_23630_23665 = state_23584;
(statearr_23630_23665[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23666 = state_23584;
state_23584 = G__23666;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$state_machine__21626__auto__ = function(state_23584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21626__auto____1.call(this,state_23584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21626__auto____0;
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21626__auto____1;
return cljs$core$async$state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto___23636,mults,ensure_mult,p))
})();
var state__21739__auto__ = (function (){var statearr_23631 = f__21738__auto__.call(null);
(statearr_23631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___23636);

return statearr_23631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto___23636,mults,ensure_mult,p))
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
var args23667 = [];
var len__17829__auto___23670 = arguments.length;
var i__17830__auto___23671 = (0);
while(true){
if((i__17830__auto___23671 < len__17829__auto___23670)){
args23667.push((arguments[i__17830__auto___23671]));

var G__23672 = (i__17830__auto___23671 + (1));
i__17830__auto___23671 = G__23672;
continue;
} else {
}
break;
}

var G__23669 = args23667.length;
switch (G__23669) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23667.length)].join('')));

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
var args23674 = [];
var len__17829__auto___23677 = arguments.length;
var i__17830__auto___23678 = (0);
while(true){
if((i__17830__auto___23678 < len__17829__auto___23677)){
args23674.push((arguments[i__17830__auto___23678]));

var G__23679 = (i__17830__auto___23678 + (1));
i__17830__auto___23678 = G__23679;
continue;
} else {
}
break;
}

var G__23676 = args23674.length;
switch (G__23676) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23674.length)].join('')));

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
var args23681 = [];
var len__17829__auto___23752 = arguments.length;
var i__17830__auto___23753 = (0);
while(true){
if((i__17830__auto___23753 < len__17829__auto___23752)){
args23681.push((arguments[i__17830__auto___23753]));

var G__23754 = (i__17830__auto___23753 + (1));
i__17830__auto___23753 = G__23754;
continue;
} else {
}
break;
}

var G__23683 = args23681.length;
switch (G__23683) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23681.length)].join('')));

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
var c__21737__auto___23756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto___23756,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto___23756,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23722){
var state_val_23723 = (state_23722[(1)]);
if((state_val_23723 === (7))){
var state_23722__$1 = state_23722;
var statearr_23724_23757 = state_23722__$1;
(statearr_23724_23757[(2)] = null);

(statearr_23724_23757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (1))){
var state_23722__$1 = state_23722;
var statearr_23725_23758 = state_23722__$1;
(statearr_23725_23758[(2)] = null);

(statearr_23725_23758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (4))){
var inst_23686 = (state_23722[(7)]);
var inst_23688 = (inst_23686 < cnt);
var state_23722__$1 = state_23722;
if(cljs.core.truth_(inst_23688)){
var statearr_23726_23759 = state_23722__$1;
(statearr_23726_23759[(1)] = (6));

} else {
var statearr_23727_23760 = state_23722__$1;
(statearr_23727_23760[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (15))){
var inst_23718 = (state_23722[(2)]);
var state_23722__$1 = state_23722;
var statearr_23728_23761 = state_23722__$1;
(statearr_23728_23761[(2)] = inst_23718);

(statearr_23728_23761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (13))){
var inst_23711 = cljs.core.async.close_BANG_.call(null,out);
var state_23722__$1 = state_23722;
var statearr_23729_23762 = state_23722__$1;
(statearr_23729_23762[(2)] = inst_23711);

(statearr_23729_23762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (6))){
var state_23722__$1 = state_23722;
var statearr_23730_23763 = state_23722__$1;
(statearr_23730_23763[(2)] = null);

(statearr_23730_23763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (3))){
var inst_23720 = (state_23722[(2)]);
var state_23722__$1 = state_23722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23722__$1,inst_23720);
} else {
if((state_val_23723 === (12))){
var inst_23708 = (state_23722[(8)]);
var inst_23708__$1 = (state_23722[(2)]);
var inst_23709 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23708__$1);
var state_23722__$1 = (function (){var statearr_23731 = state_23722;
(statearr_23731[(8)] = inst_23708__$1);

return statearr_23731;
})();
if(cljs.core.truth_(inst_23709)){
var statearr_23732_23764 = state_23722__$1;
(statearr_23732_23764[(1)] = (13));

} else {
var statearr_23733_23765 = state_23722__$1;
(statearr_23733_23765[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (2))){
var inst_23685 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23686 = (0);
var state_23722__$1 = (function (){var statearr_23734 = state_23722;
(statearr_23734[(9)] = inst_23685);

(statearr_23734[(7)] = inst_23686);

return statearr_23734;
})();
var statearr_23735_23766 = state_23722__$1;
(statearr_23735_23766[(2)] = null);

(statearr_23735_23766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (11))){
var inst_23686 = (state_23722[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23722,(10),Object,null,(9));
var inst_23695 = chs__$1.call(null,inst_23686);
var inst_23696 = done.call(null,inst_23686);
var inst_23697 = cljs.core.async.take_BANG_.call(null,inst_23695,inst_23696);
var state_23722__$1 = state_23722;
var statearr_23736_23767 = state_23722__$1;
(statearr_23736_23767[(2)] = inst_23697);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23722__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (9))){
var inst_23686 = (state_23722[(7)]);
var inst_23699 = (state_23722[(2)]);
var inst_23700 = (inst_23686 + (1));
var inst_23686__$1 = inst_23700;
var state_23722__$1 = (function (){var statearr_23737 = state_23722;
(statearr_23737[(10)] = inst_23699);

(statearr_23737[(7)] = inst_23686__$1);

return statearr_23737;
})();
var statearr_23738_23768 = state_23722__$1;
(statearr_23738_23768[(2)] = null);

(statearr_23738_23768[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (5))){
var inst_23706 = (state_23722[(2)]);
var state_23722__$1 = (function (){var statearr_23739 = state_23722;
(statearr_23739[(11)] = inst_23706);

return statearr_23739;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23722__$1,(12),dchan);
} else {
if((state_val_23723 === (14))){
var inst_23708 = (state_23722[(8)]);
var inst_23713 = cljs.core.apply.call(null,f,inst_23708);
var state_23722__$1 = state_23722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23722__$1,(16),out,inst_23713);
} else {
if((state_val_23723 === (16))){
var inst_23715 = (state_23722[(2)]);
var state_23722__$1 = (function (){var statearr_23740 = state_23722;
(statearr_23740[(12)] = inst_23715);

return statearr_23740;
})();
var statearr_23741_23769 = state_23722__$1;
(statearr_23741_23769[(2)] = null);

(statearr_23741_23769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (10))){
var inst_23690 = (state_23722[(2)]);
var inst_23691 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23722__$1 = (function (){var statearr_23742 = state_23722;
(statearr_23742[(13)] = inst_23690);

return statearr_23742;
})();
var statearr_23743_23770 = state_23722__$1;
(statearr_23743_23770[(2)] = inst_23691);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23722__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23723 === (8))){
var inst_23704 = (state_23722[(2)]);
var state_23722__$1 = state_23722;
var statearr_23744_23771 = state_23722__$1;
(statearr_23744_23771[(2)] = inst_23704);

(statearr_23744_23771[(1)] = (5));


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
});})(c__21737__auto___23756,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21625__auto__,c__21737__auto___23756,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21626__auto__ = null;
var cljs$core$async$state_machine__21626__auto____0 = (function (){
var statearr_23748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23748[(0)] = cljs$core$async$state_machine__21626__auto__);

(statearr_23748[(1)] = (1));

return statearr_23748;
});
var cljs$core$async$state_machine__21626__auto____1 = (function (state_23722){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_23722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e23749){if((e23749 instanceof Object)){
var ex__21629__auto__ = e23749;
var statearr_23750_23772 = state_23722;
(statearr_23750_23772[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23773 = state_23722;
state_23722 = G__23773;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$state_machine__21626__auto__ = function(state_23722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21626__auto____1.call(this,state_23722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21626__auto____0;
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21626__auto____1;
return cljs$core$async$state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto___23756,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21739__auto__ = (function (){var statearr_23751 = f__21738__auto__.call(null);
(statearr_23751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___23756);

return statearr_23751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto___23756,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args23775 = [];
var len__17829__auto___23831 = arguments.length;
var i__17830__auto___23832 = (0);
while(true){
if((i__17830__auto___23832 < len__17829__auto___23831)){
args23775.push((arguments[i__17830__auto___23832]));

var G__23833 = (i__17830__auto___23832 + (1));
i__17830__auto___23832 = G__23833;
continue;
} else {
}
break;
}

var G__23777 = args23775.length;
switch (G__23777) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23775.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21737__auto___23835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto___23835,out){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto___23835,out){
return (function (state_23807){
var state_val_23808 = (state_23807[(1)]);
if((state_val_23808 === (7))){
var inst_23787 = (state_23807[(7)]);
var inst_23786 = (state_23807[(8)]);
var inst_23786__$1 = (state_23807[(2)]);
var inst_23787__$1 = cljs.core.nth.call(null,inst_23786__$1,(0),null);
var inst_23788 = cljs.core.nth.call(null,inst_23786__$1,(1),null);
var inst_23789 = (inst_23787__$1 == null);
var state_23807__$1 = (function (){var statearr_23809 = state_23807;
(statearr_23809[(7)] = inst_23787__$1);

(statearr_23809[(8)] = inst_23786__$1);

(statearr_23809[(9)] = inst_23788);

return statearr_23809;
})();
if(cljs.core.truth_(inst_23789)){
var statearr_23810_23836 = state_23807__$1;
(statearr_23810_23836[(1)] = (8));

} else {
var statearr_23811_23837 = state_23807__$1;
(statearr_23811_23837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (1))){
var inst_23778 = cljs.core.vec.call(null,chs);
var inst_23779 = inst_23778;
var state_23807__$1 = (function (){var statearr_23812 = state_23807;
(statearr_23812[(10)] = inst_23779);

return statearr_23812;
})();
var statearr_23813_23838 = state_23807__$1;
(statearr_23813_23838[(2)] = null);

(statearr_23813_23838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (4))){
var inst_23779 = (state_23807[(10)]);
var state_23807__$1 = state_23807;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23807__$1,(7),inst_23779);
} else {
if((state_val_23808 === (6))){
var inst_23803 = (state_23807[(2)]);
var state_23807__$1 = state_23807;
var statearr_23814_23839 = state_23807__$1;
(statearr_23814_23839[(2)] = inst_23803);

(statearr_23814_23839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (3))){
var inst_23805 = (state_23807[(2)]);
var state_23807__$1 = state_23807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23807__$1,inst_23805);
} else {
if((state_val_23808 === (2))){
var inst_23779 = (state_23807[(10)]);
var inst_23781 = cljs.core.count.call(null,inst_23779);
var inst_23782 = (inst_23781 > (0));
var state_23807__$1 = state_23807;
if(cljs.core.truth_(inst_23782)){
var statearr_23816_23840 = state_23807__$1;
(statearr_23816_23840[(1)] = (4));

} else {
var statearr_23817_23841 = state_23807__$1;
(statearr_23817_23841[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (11))){
var inst_23779 = (state_23807[(10)]);
var inst_23796 = (state_23807[(2)]);
var tmp23815 = inst_23779;
var inst_23779__$1 = tmp23815;
var state_23807__$1 = (function (){var statearr_23818 = state_23807;
(statearr_23818[(10)] = inst_23779__$1);

(statearr_23818[(11)] = inst_23796);

return statearr_23818;
})();
var statearr_23819_23842 = state_23807__$1;
(statearr_23819_23842[(2)] = null);

(statearr_23819_23842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (9))){
var inst_23787 = (state_23807[(7)]);
var state_23807__$1 = state_23807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23807__$1,(11),out,inst_23787);
} else {
if((state_val_23808 === (5))){
var inst_23801 = cljs.core.async.close_BANG_.call(null,out);
var state_23807__$1 = state_23807;
var statearr_23820_23843 = state_23807__$1;
(statearr_23820_23843[(2)] = inst_23801);

(statearr_23820_23843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (10))){
var inst_23799 = (state_23807[(2)]);
var state_23807__$1 = state_23807;
var statearr_23821_23844 = state_23807__$1;
(statearr_23821_23844[(2)] = inst_23799);

(statearr_23821_23844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (8))){
var inst_23787 = (state_23807[(7)]);
var inst_23779 = (state_23807[(10)]);
var inst_23786 = (state_23807[(8)]);
var inst_23788 = (state_23807[(9)]);
var inst_23791 = (function (){var cs = inst_23779;
var vec__23784 = inst_23786;
var v = inst_23787;
var c = inst_23788;
return ((function (cs,vec__23784,v,c,inst_23787,inst_23779,inst_23786,inst_23788,state_val_23808,c__21737__auto___23835,out){
return (function (p1__23774_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23774_SHARP_);
});
;})(cs,vec__23784,v,c,inst_23787,inst_23779,inst_23786,inst_23788,state_val_23808,c__21737__auto___23835,out))
})();
var inst_23792 = cljs.core.filterv.call(null,inst_23791,inst_23779);
var inst_23779__$1 = inst_23792;
var state_23807__$1 = (function (){var statearr_23822 = state_23807;
(statearr_23822[(10)] = inst_23779__$1);

return statearr_23822;
})();
var statearr_23823_23845 = state_23807__$1;
(statearr_23823_23845[(2)] = null);

(statearr_23823_23845[(1)] = (2));


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
});})(c__21737__auto___23835,out))
;
return ((function (switch__21625__auto__,c__21737__auto___23835,out){
return (function() {
var cljs$core$async$state_machine__21626__auto__ = null;
var cljs$core$async$state_machine__21626__auto____0 = (function (){
var statearr_23827 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23827[(0)] = cljs$core$async$state_machine__21626__auto__);

(statearr_23827[(1)] = (1));

return statearr_23827;
});
var cljs$core$async$state_machine__21626__auto____1 = (function (state_23807){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_23807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e23828){if((e23828 instanceof Object)){
var ex__21629__auto__ = e23828;
var statearr_23829_23846 = state_23807;
(statearr_23829_23846[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23847 = state_23807;
state_23807 = G__23847;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$state_machine__21626__auto__ = function(state_23807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21626__auto____1.call(this,state_23807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21626__auto____0;
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21626__auto____1;
return cljs$core$async$state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto___23835,out))
})();
var state__21739__auto__ = (function (){var statearr_23830 = f__21738__auto__.call(null);
(statearr_23830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___23835);

return statearr_23830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto___23835,out))
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
var args23848 = [];
var len__17829__auto___23897 = arguments.length;
var i__17830__auto___23898 = (0);
while(true){
if((i__17830__auto___23898 < len__17829__auto___23897)){
args23848.push((arguments[i__17830__auto___23898]));

var G__23899 = (i__17830__auto___23898 + (1));
i__17830__auto___23898 = G__23899;
continue;
} else {
}
break;
}

var G__23850 = args23848.length;
switch (G__23850) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23848.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21737__auto___23901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto___23901,out){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto___23901,out){
return (function (state_23874){
var state_val_23875 = (state_23874[(1)]);
if((state_val_23875 === (7))){
var inst_23856 = (state_23874[(7)]);
var inst_23856__$1 = (state_23874[(2)]);
var inst_23857 = (inst_23856__$1 == null);
var inst_23858 = cljs.core.not.call(null,inst_23857);
var state_23874__$1 = (function (){var statearr_23876 = state_23874;
(statearr_23876[(7)] = inst_23856__$1);

return statearr_23876;
})();
if(inst_23858){
var statearr_23877_23902 = state_23874__$1;
(statearr_23877_23902[(1)] = (8));

} else {
var statearr_23878_23903 = state_23874__$1;
(statearr_23878_23903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (1))){
var inst_23851 = (0);
var state_23874__$1 = (function (){var statearr_23879 = state_23874;
(statearr_23879[(8)] = inst_23851);

return statearr_23879;
})();
var statearr_23880_23904 = state_23874__$1;
(statearr_23880_23904[(2)] = null);

(statearr_23880_23904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (4))){
var state_23874__$1 = state_23874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23874__$1,(7),ch);
} else {
if((state_val_23875 === (6))){
var inst_23869 = (state_23874[(2)]);
var state_23874__$1 = state_23874;
var statearr_23881_23905 = state_23874__$1;
(statearr_23881_23905[(2)] = inst_23869);

(statearr_23881_23905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (3))){
var inst_23871 = (state_23874[(2)]);
var inst_23872 = cljs.core.async.close_BANG_.call(null,out);
var state_23874__$1 = (function (){var statearr_23882 = state_23874;
(statearr_23882[(9)] = inst_23871);

return statearr_23882;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23874__$1,inst_23872);
} else {
if((state_val_23875 === (2))){
var inst_23851 = (state_23874[(8)]);
var inst_23853 = (inst_23851 < n);
var state_23874__$1 = state_23874;
if(cljs.core.truth_(inst_23853)){
var statearr_23883_23906 = state_23874__$1;
(statearr_23883_23906[(1)] = (4));

} else {
var statearr_23884_23907 = state_23874__$1;
(statearr_23884_23907[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (11))){
var inst_23851 = (state_23874[(8)]);
var inst_23861 = (state_23874[(2)]);
var inst_23862 = (inst_23851 + (1));
var inst_23851__$1 = inst_23862;
var state_23874__$1 = (function (){var statearr_23885 = state_23874;
(statearr_23885[(8)] = inst_23851__$1);

(statearr_23885[(10)] = inst_23861);

return statearr_23885;
})();
var statearr_23886_23908 = state_23874__$1;
(statearr_23886_23908[(2)] = null);

(statearr_23886_23908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (9))){
var state_23874__$1 = state_23874;
var statearr_23887_23909 = state_23874__$1;
(statearr_23887_23909[(2)] = null);

(statearr_23887_23909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (5))){
var state_23874__$1 = state_23874;
var statearr_23888_23910 = state_23874__$1;
(statearr_23888_23910[(2)] = null);

(statearr_23888_23910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (10))){
var inst_23866 = (state_23874[(2)]);
var state_23874__$1 = state_23874;
var statearr_23889_23911 = state_23874__$1;
(statearr_23889_23911[(2)] = inst_23866);

(statearr_23889_23911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (8))){
var inst_23856 = (state_23874[(7)]);
var state_23874__$1 = state_23874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23874__$1,(11),out,inst_23856);
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
});})(c__21737__auto___23901,out))
;
return ((function (switch__21625__auto__,c__21737__auto___23901,out){
return (function() {
var cljs$core$async$state_machine__21626__auto__ = null;
var cljs$core$async$state_machine__21626__auto____0 = (function (){
var statearr_23893 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23893[(0)] = cljs$core$async$state_machine__21626__auto__);

(statearr_23893[(1)] = (1));

return statearr_23893;
});
var cljs$core$async$state_machine__21626__auto____1 = (function (state_23874){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_23874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e23894){if((e23894 instanceof Object)){
var ex__21629__auto__ = e23894;
var statearr_23895_23912 = state_23874;
(statearr_23895_23912[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23913 = state_23874;
state_23874 = G__23913;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$state_machine__21626__auto__ = function(state_23874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21626__auto____1.call(this,state_23874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21626__auto____0;
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21626__auto____1;
return cljs$core$async$state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto___23901,out))
})();
var state__21739__auto__ = (function (){var statearr_23896 = f__21738__auto__.call(null);
(statearr_23896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___23901);

return statearr_23896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto___23901,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23921 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23921 = (function (map_LT_,f,ch,meta23922){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23922 = meta23922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23923,meta23922__$1){
var self__ = this;
var _23923__$1 = this;
return (new cljs.core.async.t_cljs$core$async23921(self__.map_LT_,self__.f,self__.ch,meta23922__$1));
});

cljs.core.async.t_cljs$core$async23921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23923){
var self__ = this;
var _23923__$1 = this;
return self__.meta23922;
});

cljs.core.async.t_cljs$core$async23921.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23921.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23921.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23921.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23921.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23924 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23924 = (function (map_LT_,f,ch,meta23922,_,fn1,meta23925){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23922 = meta23922;
this._ = _;
this.fn1 = fn1;
this.meta23925 = meta23925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23926,meta23925__$1){
var self__ = this;
var _23926__$1 = this;
return (new cljs.core.async.t_cljs$core$async23924(self__.map_LT_,self__.f,self__.ch,self__.meta23922,self__._,self__.fn1,meta23925__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23926){
var self__ = this;
var _23926__$1 = this;
return self__.meta23925;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23924.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23924.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23924.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23924.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23914_SHARP_){
return f1.call(null,(((p1__23914_SHARP_ == null))?null:self__.f.call(null,p1__23914_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23924.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23922","meta23922",1767337790,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23921","cljs.core.async/t_cljs$core$async23921",1160107966,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23925","meta23925",-863538528,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23924";

cljs.core.async.t_cljs$core$async23924.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23924");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23924 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23924(map_LT___$1,f__$1,ch__$1,meta23922__$1,___$2,fn1__$1,meta23925){
return (new cljs.core.async.t_cljs$core$async23924(map_LT___$1,f__$1,ch__$1,meta23922__$1,___$2,fn1__$1,meta23925));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23924(self__.map_LT_,self__.f,self__.ch,self__.meta23922,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async23921.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23921.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23922","meta23922",1767337790,null)], null);
});

cljs.core.async.t_cljs$core$async23921.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23921.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23921";

cljs.core.async.t_cljs$core$async23921.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23921");
});

cljs.core.async.__GT_t_cljs$core$async23921 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23921(map_LT___$1,f__$1,ch__$1,meta23922){
return (new cljs.core.async.t_cljs$core$async23921(map_LT___$1,f__$1,ch__$1,meta23922));
});

}

return (new cljs.core.async.t_cljs$core$async23921(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23930 = (function (map_GT_,f,ch,meta23931){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23931 = meta23931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23932,meta23931__$1){
var self__ = this;
var _23932__$1 = this;
return (new cljs.core.async.t_cljs$core$async23930(self__.map_GT_,self__.f,self__.ch,meta23931__$1));
});

cljs.core.async.t_cljs$core$async23930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23932){
var self__ = this;
var _23932__$1 = this;
return self__.meta23931;
});

cljs.core.async.t_cljs$core$async23930.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23930.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23930.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23930.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23930.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23930.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23931","meta23931",-2001645119,null)], null);
});

cljs.core.async.t_cljs$core$async23930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23930";

cljs.core.async.t_cljs$core$async23930.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23930");
});

cljs.core.async.__GT_t_cljs$core$async23930 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23930(map_GT___$1,f__$1,ch__$1,meta23931){
return (new cljs.core.async.t_cljs$core$async23930(map_GT___$1,f__$1,ch__$1,meta23931));
});

}

return (new cljs.core.async.t_cljs$core$async23930(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23936 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23936 = (function (filter_GT_,p,ch,meta23937){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23937 = meta23937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23938,meta23937__$1){
var self__ = this;
var _23938__$1 = this;
return (new cljs.core.async.t_cljs$core$async23936(self__.filter_GT_,self__.p,self__.ch,meta23937__$1));
});

cljs.core.async.t_cljs$core$async23936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23938){
var self__ = this;
var _23938__$1 = this;
return self__.meta23937;
});

cljs.core.async.t_cljs$core$async23936.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23936.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23936.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23936.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23936.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23936.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23936.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23937","meta23937",1211767530,null)], null);
});

cljs.core.async.t_cljs$core$async23936.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23936";

cljs.core.async.t_cljs$core$async23936.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23936");
});

cljs.core.async.__GT_t_cljs$core$async23936 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23936(filter_GT___$1,p__$1,ch__$1,meta23937){
return (new cljs.core.async.t_cljs$core$async23936(filter_GT___$1,p__$1,ch__$1,meta23937));
});

}

return (new cljs.core.async.t_cljs$core$async23936(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args23939 = [];
var len__17829__auto___23983 = arguments.length;
var i__17830__auto___23984 = (0);
while(true){
if((i__17830__auto___23984 < len__17829__auto___23983)){
args23939.push((arguments[i__17830__auto___23984]));

var G__23985 = (i__17830__auto___23984 + (1));
i__17830__auto___23984 = G__23985;
continue;
} else {
}
break;
}

var G__23941 = args23939.length;
switch (G__23941) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23939.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21737__auto___23987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto___23987,out){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto___23987,out){
return (function (state_23962){
var state_val_23963 = (state_23962[(1)]);
if((state_val_23963 === (7))){
var inst_23958 = (state_23962[(2)]);
var state_23962__$1 = state_23962;
var statearr_23964_23988 = state_23962__$1;
(statearr_23964_23988[(2)] = inst_23958);

(statearr_23964_23988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23963 === (1))){
var state_23962__$1 = state_23962;
var statearr_23965_23989 = state_23962__$1;
(statearr_23965_23989[(2)] = null);

(statearr_23965_23989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23963 === (4))){
var inst_23944 = (state_23962[(7)]);
var inst_23944__$1 = (state_23962[(2)]);
var inst_23945 = (inst_23944__$1 == null);
var state_23962__$1 = (function (){var statearr_23966 = state_23962;
(statearr_23966[(7)] = inst_23944__$1);

return statearr_23966;
})();
if(cljs.core.truth_(inst_23945)){
var statearr_23967_23990 = state_23962__$1;
(statearr_23967_23990[(1)] = (5));

} else {
var statearr_23968_23991 = state_23962__$1;
(statearr_23968_23991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23963 === (6))){
var inst_23944 = (state_23962[(7)]);
var inst_23949 = p.call(null,inst_23944);
var state_23962__$1 = state_23962;
if(cljs.core.truth_(inst_23949)){
var statearr_23969_23992 = state_23962__$1;
(statearr_23969_23992[(1)] = (8));

} else {
var statearr_23970_23993 = state_23962__$1;
(statearr_23970_23993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23963 === (3))){
var inst_23960 = (state_23962[(2)]);
var state_23962__$1 = state_23962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23962__$1,inst_23960);
} else {
if((state_val_23963 === (2))){
var state_23962__$1 = state_23962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23962__$1,(4),ch);
} else {
if((state_val_23963 === (11))){
var inst_23952 = (state_23962[(2)]);
var state_23962__$1 = state_23962;
var statearr_23971_23994 = state_23962__$1;
(statearr_23971_23994[(2)] = inst_23952);

(statearr_23971_23994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23963 === (9))){
var state_23962__$1 = state_23962;
var statearr_23972_23995 = state_23962__$1;
(statearr_23972_23995[(2)] = null);

(statearr_23972_23995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23963 === (5))){
var inst_23947 = cljs.core.async.close_BANG_.call(null,out);
var state_23962__$1 = state_23962;
var statearr_23973_23996 = state_23962__$1;
(statearr_23973_23996[(2)] = inst_23947);

(statearr_23973_23996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23963 === (10))){
var inst_23955 = (state_23962[(2)]);
var state_23962__$1 = (function (){var statearr_23974 = state_23962;
(statearr_23974[(8)] = inst_23955);

return statearr_23974;
})();
var statearr_23975_23997 = state_23962__$1;
(statearr_23975_23997[(2)] = null);

(statearr_23975_23997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23963 === (8))){
var inst_23944 = (state_23962[(7)]);
var state_23962__$1 = state_23962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23962__$1,(11),out,inst_23944);
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
});})(c__21737__auto___23987,out))
;
return ((function (switch__21625__auto__,c__21737__auto___23987,out){
return (function() {
var cljs$core$async$state_machine__21626__auto__ = null;
var cljs$core$async$state_machine__21626__auto____0 = (function (){
var statearr_23979 = [null,null,null,null,null,null,null,null,null];
(statearr_23979[(0)] = cljs$core$async$state_machine__21626__auto__);

(statearr_23979[(1)] = (1));

return statearr_23979;
});
var cljs$core$async$state_machine__21626__auto____1 = (function (state_23962){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_23962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e23980){if((e23980 instanceof Object)){
var ex__21629__auto__ = e23980;
var statearr_23981_23998 = state_23962;
(statearr_23981_23998[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23999 = state_23962;
state_23962 = G__23999;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$state_machine__21626__auto__ = function(state_23962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21626__auto____1.call(this,state_23962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21626__auto____0;
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21626__auto____1;
return cljs$core$async$state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto___23987,out))
})();
var state__21739__auto__ = (function (){var statearr_23982 = f__21738__auto__.call(null);
(statearr_23982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___23987);

return statearr_23982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto___23987,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24000 = [];
var len__17829__auto___24003 = arguments.length;
var i__17830__auto___24004 = (0);
while(true){
if((i__17830__auto___24004 < len__17829__auto___24003)){
args24000.push((arguments[i__17830__auto___24004]));

var G__24005 = (i__17830__auto___24004 + (1));
i__17830__auto___24004 = G__24005;
continue;
} else {
}
break;
}

var G__24002 = args24000.length;
switch (G__24002) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24000.length)].join('')));

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
var c__21737__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto__){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto__){
return (function (state_24172){
var state_val_24173 = (state_24172[(1)]);
if((state_val_24173 === (7))){
var inst_24168 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
var statearr_24174_24215 = state_24172__$1;
(statearr_24174_24215[(2)] = inst_24168);

(statearr_24174_24215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (20))){
var inst_24138 = (state_24172[(7)]);
var inst_24149 = (state_24172[(2)]);
var inst_24150 = cljs.core.next.call(null,inst_24138);
var inst_24124 = inst_24150;
var inst_24125 = null;
var inst_24126 = (0);
var inst_24127 = (0);
var state_24172__$1 = (function (){var statearr_24175 = state_24172;
(statearr_24175[(8)] = inst_24124);

(statearr_24175[(9)] = inst_24127);

(statearr_24175[(10)] = inst_24126);

(statearr_24175[(11)] = inst_24149);

(statearr_24175[(12)] = inst_24125);

return statearr_24175;
})();
var statearr_24176_24216 = state_24172__$1;
(statearr_24176_24216[(2)] = null);

(statearr_24176_24216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (1))){
var state_24172__$1 = state_24172;
var statearr_24177_24217 = state_24172__$1;
(statearr_24177_24217[(2)] = null);

(statearr_24177_24217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (4))){
var inst_24113 = (state_24172[(13)]);
var inst_24113__$1 = (state_24172[(2)]);
var inst_24114 = (inst_24113__$1 == null);
var state_24172__$1 = (function (){var statearr_24178 = state_24172;
(statearr_24178[(13)] = inst_24113__$1);

return statearr_24178;
})();
if(cljs.core.truth_(inst_24114)){
var statearr_24179_24218 = state_24172__$1;
(statearr_24179_24218[(1)] = (5));

} else {
var statearr_24180_24219 = state_24172__$1;
(statearr_24180_24219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (15))){
var state_24172__$1 = state_24172;
var statearr_24184_24220 = state_24172__$1;
(statearr_24184_24220[(2)] = null);

(statearr_24184_24220[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (21))){
var state_24172__$1 = state_24172;
var statearr_24185_24221 = state_24172__$1;
(statearr_24185_24221[(2)] = null);

(statearr_24185_24221[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (13))){
var inst_24124 = (state_24172[(8)]);
var inst_24127 = (state_24172[(9)]);
var inst_24126 = (state_24172[(10)]);
var inst_24125 = (state_24172[(12)]);
var inst_24134 = (state_24172[(2)]);
var inst_24135 = (inst_24127 + (1));
var tmp24181 = inst_24124;
var tmp24182 = inst_24126;
var tmp24183 = inst_24125;
var inst_24124__$1 = tmp24181;
var inst_24125__$1 = tmp24183;
var inst_24126__$1 = tmp24182;
var inst_24127__$1 = inst_24135;
var state_24172__$1 = (function (){var statearr_24186 = state_24172;
(statearr_24186[(8)] = inst_24124__$1);

(statearr_24186[(9)] = inst_24127__$1);

(statearr_24186[(10)] = inst_24126__$1);

(statearr_24186[(12)] = inst_24125__$1);

(statearr_24186[(14)] = inst_24134);

return statearr_24186;
})();
var statearr_24187_24222 = state_24172__$1;
(statearr_24187_24222[(2)] = null);

(statearr_24187_24222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (22))){
var state_24172__$1 = state_24172;
var statearr_24188_24223 = state_24172__$1;
(statearr_24188_24223[(2)] = null);

(statearr_24188_24223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (6))){
var inst_24113 = (state_24172[(13)]);
var inst_24122 = f.call(null,inst_24113);
var inst_24123 = cljs.core.seq.call(null,inst_24122);
var inst_24124 = inst_24123;
var inst_24125 = null;
var inst_24126 = (0);
var inst_24127 = (0);
var state_24172__$1 = (function (){var statearr_24189 = state_24172;
(statearr_24189[(8)] = inst_24124);

(statearr_24189[(9)] = inst_24127);

(statearr_24189[(10)] = inst_24126);

(statearr_24189[(12)] = inst_24125);

return statearr_24189;
})();
var statearr_24190_24224 = state_24172__$1;
(statearr_24190_24224[(2)] = null);

(statearr_24190_24224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (17))){
var inst_24138 = (state_24172[(7)]);
var inst_24142 = cljs.core.chunk_first.call(null,inst_24138);
var inst_24143 = cljs.core.chunk_rest.call(null,inst_24138);
var inst_24144 = cljs.core.count.call(null,inst_24142);
var inst_24124 = inst_24143;
var inst_24125 = inst_24142;
var inst_24126 = inst_24144;
var inst_24127 = (0);
var state_24172__$1 = (function (){var statearr_24191 = state_24172;
(statearr_24191[(8)] = inst_24124);

(statearr_24191[(9)] = inst_24127);

(statearr_24191[(10)] = inst_24126);

(statearr_24191[(12)] = inst_24125);

return statearr_24191;
})();
var statearr_24192_24225 = state_24172__$1;
(statearr_24192_24225[(2)] = null);

(statearr_24192_24225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (3))){
var inst_24170 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24172__$1,inst_24170);
} else {
if((state_val_24173 === (12))){
var inst_24158 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
var statearr_24193_24226 = state_24172__$1;
(statearr_24193_24226[(2)] = inst_24158);

(statearr_24193_24226[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (2))){
var state_24172__$1 = state_24172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24172__$1,(4),in$);
} else {
if((state_val_24173 === (23))){
var inst_24166 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
var statearr_24194_24227 = state_24172__$1;
(statearr_24194_24227[(2)] = inst_24166);

(statearr_24194_24227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (19))){
var inst_24153 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
var statearr_24195_24228 = state_24172__$1;
(statearr_24195_24228[(2)] = inst_24153);

(statearr_24195_24228[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (11))){
var inst_24138 = (state_24172[(7)]);
var inst_24124 = (state_24172[(8)]);
var inst_24138__$1 = cljs.core.seq.call(null,inst_24124);
var state_24172__$1 = (function (){var statearr_24196 = state_24172;
(statearr_24196[(7)] = inst_24138__$1);

return statearr_24196;
})();
if(inst_24138__$1){
var statearr_24197_24229 = state_24172__$1;
(statearr_24197_24229[(1)] = (14));

} else {
var statearr_24198_24230 = state_24172__$1;
(statearr_24198_24230[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (9))){
var inst_24160 = (state_24172[(2)]);
var inst_24161 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24172__$1 = (function (){var statearr_24199 = state_24172;
(statearr_24199[(15)] = inst_24160);

return statearr_24199;
})();
if(cljs.core.truth_(inst_24161)){
var statearr_24200_24231 = state_24172__$1;
(statearr_24200_24231[(1)] = (21));

} else {
var statearr_24201_24232 = state_24172__$1;
(statearr_24201_24232[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (5))){
var inst_24116 = cljs.core.async.close_BANG_.call(null,out);
var state_24172__$1 = state_24172;
var statearr_24202_24233 = state_24172__$1;
(statearr_24202_24233[(2)] = inst_24116);

(statearr_24202_24233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (14))){
var inst_24138 = (state_24172[(7)]);
var inst_24140 = cljs.core.chunked_seq_QMARK_.call(null,inst_24138);
var state_24172__$1 = state_24172;
if(inst_24140){
var statearr_24203_24234 = state_24172__$1;
(statearr_24203_24234[(1)] = (17));

} else {
var statearr_24204_24235 = state_24172__$1;
(statearr_24204_24235[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (16))){
var inst_24156 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
var statearr_24205_24236 = state_24172__$1;
(statearr_24205_24236[(2)] = inst_24156);

(statearr_24205_24236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (10))){
var inst_24127 = (state_24172[(9)]);
var inst_24125 = (state_24172[(12)]);
var inst_24132 = cljs.core._nth.call(null,inst_24125,inst_24127);
var state_24172__$1 = state_24172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24172__$1,(13),out,inst_24132);
} else {
if((state_val_24173 === (18))){
var inst_24138 = (state_24172[(7)]);
var inst_24147 = cljs.core.first.call(null,inst_24138);
var state_24172__$1 = state_24172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24172__$1,(20),out,inst_24147);
} else {
if((state_val_24173 === (8))){
var inst_24127 = (state_24172[(9)]);
var inst_24126 = (state_24172[(10)]);
var inst_24129 = (inst_24127 < inst_24126);
var inst_24130 = inst_24129;
var state_24172__$1 = state_24172;
if(cljs.core.truth_(inst_24130)){
var statearr_24206_24237 = state_24172__$1;
(statearr_24206_24237[(1)] = (10));

} else {
var statearr_24207_24238 = state_24172__$1;
(statearr_24207_24238[(1)] = (11));

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
});})(c__21737__auto__))
;
return ((function (switch__21625__auto__,c__21737__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21626__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21626__auto____0 = (function (){
var statearr_24211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24211[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21626__auto__);

(statearr_24211[(1)] = (1));

return statearr_24211;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21626__auto____1 = (function (state_24172){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_24172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e24212){if((e24212 instanceof Object)){
var ex__21629__auto__ = e24212;
var statearr_24213_24239 = state_24172;
(statearr_24213_24239[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24240 = state_24172;
state_24172 = G__24240;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21626__auto__ = function(state_24172){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21626__auto____1.call(this,state_24172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21626__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21626__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto__))
})();
var state__21739__auto__ = (function (){var statearr_24214 = f__21738__auto__.call(null);
(statearr_24214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto__);

return statearr_24214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto__))
);

return c__21737__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24241 = [];
var len__17829__auto___24244 = arguments.length;
var i__17830__auto___24245 = (0);
while(true){
if((i__17830__auto___24245 < len__17829__auto___24244)){
args24241.push((arguments[i__17830__auto___24245]));

var G__24246 = (i__17830__auto___24245 + (1));
i__17830__auto___24245 = G__24246;
continue;
} else {
}
break;
}

var G__24243 = args24241.length;
switch (G__24243) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24241.length)].join('')));

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
var args24248 = [];
var len__17829__auto___24251 = arguments.length;
var i__17830__auto___24252 = (0);
while(true){
if((i__17830__auto___24252 < len__17829__auto___24251)){
args24248.push((arguments[i__17830__auto___24252]));

var G__24253 = (i__17830__auto___24252 + (1));
i__17830__auto___24252 = G__24253;
continue;
} else {
}
break;
}

var G__24250 = args24248.length;
switch (G__24250) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24248.length)].join('')));

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
var args24255 = [];
var len__17829__auto___24306 = arguments.length;
var i__17830__auto___24307 = (0);
while(true){
if((i__17830__auto___24307 < len__17829__auto___24306)){
args24255.push((arguments[i__17830__auto___24307]));

var G__24308 = (i__17830__auto___24307 + (1));
i__17830__auto___24307 = G__24308;
continue;
} else {
}
break;
}

var G__24257 = args24255.length;
switch (G__24257) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24255.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21737__auto___24310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto___24310,out){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto___24310,out){
return (function (state_24281){
var state_val_24282 = (state_24281[(1)]);
if((state_val_24282 === (7))){
var inst_24276 = (state_24281[(2)]);
var state_24281__$1 = state_24281;
var statearr_24283_24311 = state_24281__$1;
(statearr_24283_24311[(2)] = inst_24276);

(statearr_24283_24311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24282 === (1))){
var inst_24258 = null;
var state_24281__$1 = (function (){var statearr_24284 = state_24281;
(statearr_24284[(7)] = inst_24258);

return statearr_24284;
})();
var statearr_24285_24312 = state_24281__$1;
(statearr_24285_24312[(2)] = null);

(statearr_24285_24312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24282 === (4))){
var inst_24261 = (state_24281[(8)]);
var inst_24261__$1 = (state_24281[(2)]);
var inst_24262 = (inst_24261__$1 == null);
var inst_24263 = cljs.core.not.call(null,inst_24262);
var state_24281__$1 = (function (){var statearr_24286 = state_24281;
(statearr_24286[(8)] = inst_24261__$1);

return statearr_24286;
})();
if(inst_24263){
var statearr_24287_24313 = state_24281__$1;
(statearr_24287_24313[(1)] = (5));

} else {
var statearr_24288_24314 = state_24281__$1;
(statearr_24288_24314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24282 === (6))){
var state_24281__$1 = state_24281;
var statearr_24289_24315 = state_24281__$1;
(statearr_24289_24315[(2)] = null);

(statearr_24289_24315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24282 === (3))){
var inst_24278 = (state_24281[(2)]);
var inst_24279 = cljs.core.async.close_BANG_.call(null,out);
var state_24281__$1 = (function (){var statearr_24290 = state_24281;
(statearr_24290[(9)] = inst_24278);

return statearr_24290;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24281__$1,inst_24279);
} else {
if((state_val_24282 === (2))){
var state_24281__$1 = state_24281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24281__$1,(4),ch);
} else {
if((state_val_24282 === (11))){
var inst_24261 = (state_24281[(8)]);
var inst_24270 = (state_24281[(2)]);
var inst_24258 = inst_24261;
var state_24281__$1 = (function (){var statearr_24291 = state_24281;
(statearr_24291[(7)] = inst_24258);

(statearr_24291[(10)] = inst_24270);

return statearr_24291;
})();
var statearr_24292_24316 = state_24281__$1;
(statearr_24292_24316[(2)] = null);

(statearr_24292_24316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24282 === (9))){
var inst_24261 = (state_24281[(8)]);
var state_24281__$1 = state_24281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24281__$1,(11),out,inst_24261);
} else {
if((state_val_24282 === (5))){
var inst_24261 = (state_24281[(8)]);
var inst_24258 = (state_24281[(7)]);
var inst_24265 = cljs.core._EQ_.call(null,inst_24261,inst_24258);
var state_24281__$1 = state_24281;
if(inst_24265){
var statearr_24294_24317 = state_24281__$1;
(statearr_24294_24317[(1)] = (8));

} else {
var statearr_24295_24318 = state_24281__$1;
(statearr_24295_24318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24282 === (10))){
var inst_24273 = (state_24281[(2)]);
var state_24281__$1 = state_24281;
var statearr_24296_24319 = state_24281__$1;
(statearr_24296_24319[(2)] = inst_24273);

(statearr_24296_24319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24282 === (8))){
var inst_24258 = (state_24281[(7)]);
var tmp24293 = inst_24258;
var inst_24258__$1 = tmp24293;
var state_24281__$1 = (function (){var statearr_24297 = state_24281;
(statearr_24297[(7)] = inst_24258__$1);

return statearr_24297;
})();
var statearr_24298_24320 = state_24281__$1;
(statearr_24298_24320[(2)] = null);

(statearr_24298_24320[(1)] = (2));


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
});})(c__21737__auto___24310,out))
;
return ((function (switch__21625__auto__,c__21737__auto___24310,out){
return (function() {
var cljs$core$async$state_machine__21626__auto__ = null;
var cljs$core$async$state_machine__21626__auto____0 = (function (){
var statearr_24302 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24302[(0)] = cljs$core$async$state_machine__21626__auto__);

(statearr_24302[(1)] = (1));

return statearr_24302;
});
var cljs$core$async$state_machine__21626__auto____1 = (function (state_24281){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_24281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e24303){if((e24303 instanceof Object)){
var ex__21629__auto__ = e24303;
var statearr_24304_24321 = state_24281;
(statearr_24304_24321[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24322 = state_24281;
state_24281 = G__24322;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$state_machine__21626__auto__ = function(state_24281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21626__auto____1.call(this,state_24281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21626__auto____0;
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21626__auto____1;
return cljs$core$async$state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto___24310,out))
})();
var state__21739__auto__ = (function (){var statearr_24305 = f__21738__auto__.call(null);
(statearr_24305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___24310);

return statearr_24305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto___24310,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24323 = [];
var len__17829__auto___24393 = arguments.length;
var i__17830__auto___24394 = (0);
while(true){
if((i__17830__auto___24394 < len__17829__auto___24393)){
args24323.push((arguments[i__17830__auto___24394]));

var G__24395 = (i__17830__auto___24394 + (1));
i__17830__auto___24394 = G__24395;
continue;
} else {
}
break;
}

var G__24325 = args24323.length;
switch (G__24325) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24323.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21737__auto___24397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto___24397,out){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto___24397,out){
return (function (state_24363){
var state_val_24364 = (state_24363[(1)]);
if((state_val_24364 === (7))){
var inst_24359 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24365_24398 = state_24363__$1;
(statearr_24365_24398[(2)] = inst_24359);

(statearr_24365_24398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (1))){
var inst_24326 = (new Array(n));
var inst_24327 = inst_24326;
var inst_24328 = (0);
var state_24363__$1 = (function (){var statearr_24366 = state_24363;
(statearr_24366[(7)] = inst_24327);

(statearr_24366[(8)] = inst_24328);

return statearr_24366;
})();
var statearr_24367_24399 = state_24363__$1;
(statearr_24367_24399[(2)] = null);

(statearr_24367_24399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (4))){
var inst_24331 = (state_24363[(9)]);
var inst_24331__$1 = (state_24363[(2)]);
var inst_24332 = (inst_24331__$1 == null);
var inst_24333 = cljs.core.not.call(null,inst_24332);
var state_24363__$1 = (function (){var statearr_24368 = state_24363;
(statearr_24368[(9)] = inst_24331__$1);

return statearr_24368;
})();
if(inst_24333){
var statearr_24369_24400 = state_24363__$1;
(statearr_24369_24400[(1)] = (5));

} else {
var statearr_24370_24401 = state_24363__$1;
(statearr_24370_24401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (15))){
var inst_24353 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24371_24402 = state_24363__$1;
(statearr_24371_24402[(2)] = inst_24353);

(statearr_24371_24402[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (13))){
var state_24363__$1 = state_24363;
var statearr_24372_24403 = state_24363__$1;
(statearr_24372_24403[(2)] = null);

(statearr_24372_24403[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (6))){
var inst_24328 = (state_24363[(8)]);
var inst_24349 = (inst_24328 > (0));
var state_24363__$1 = state_24363;
if(cljs.core.truth_(inst_24349)){
var statearr_24373_24404 = state_24363__$1;
(statearr_24373_24404[(1)] = (12));

} else {
var statearr_24374_24405 = state_24363__$1;
(statearr_24374_24405[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (3))){
var inst_24361 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24363__$1,inst_24361);
} else {
if((state_val_24364 === (12))){
var inst_24327 = (state_24363[(7)]);
var inst_24351 = cljs.core.vec.call(null,inst_24327);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24363__$1,(15),out,inst_24351);
} else {
if((state_val_24364 === (2))){
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24363__$1,(4),ch);
} else {
if((state_val_24364 === (11))){
var inst_24343 = (state_24363[(2)]);
var inst_24344 = (new Array(n));
var inst_24327 = inst_24344;
var inst_24328 = (0);
var state_24363__$1 = (function (){var statearr_24375 = state_24363;
(statearr_24375[(7)] = inst_24327);

(statearr_24375[(10)] = inst_24343);

(statearr_24375[(8)] = inst_24328);

return statearr_24375;
})();
var statearr_24376_24406 = state_24363__$1;
(statearr_24376_24406[(2)] = null);

(statearr_24376_24406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (9))){
var inst_24327 = (state_24363[(7)]);
var inst_24341 = cljs.core.vec.call(null,inst_24327);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24363__$1,(11),out,inst_24341);
} else {
if((state_val_24364 === (5))){
var inst_24327 = (state_24363[(7)]);
var inst_24331 = (state_24363[(9)]);
var inst_24328 = (state_24363[(8)]);
var inst_24336 = (state_24363[(11)]);
var inst_24335 = (inst_24327[inst_24328] = inst_24331);
var inst_24336__$1 = (inst_24328 + (1));
var inst_24337 = (inst_24336__$1 < n);
var state_24363__$1 = (function (){var statearr_24377 = state_24363;
(statearr_24377[(11)] = inst_24336__$1);

(statearr_24377[(12)] = inst_24335);

return statearr_24377;
})();
if(cljs.core.truth_(inst_24337)){
var statearr_24378_24407 = state_24363__$1;
(statearr_24378_24407[(1)] = (8));

} else {
var statearr_24379_24408 = state_24363__$1;
(statearr_24379_24408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (14))){
var inst_24356 = (state_24363[(2)]);
var inst_24357 = cljs.core.async.close_BANG_.call(null,out);
var state_24363__$1 = (function (){var statearr_24381 = state_24363;
(statearr_24381[(13)] = inst_24356);

return statearr_24381;
})();
var statearr_24382_24409 = state_24363__$1;
(statearr_24382_24409[(2)] = inst_24357);

(statearr_24382_24409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (10))){
var inst_24347 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24383_24410 = state_24363__$1;
(statearr_24383_24410[(2)] = inst_24347);

(statearr_24383_24410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (8))){
var inst_24327 = (state_24363[(7)]);
var inst_24336 = (state_24363[(11)]);
var tmp24380 = inst_24327;
var inst_24327__$1 = tmp24380;
var inst_24328 = inst_24336;
var state_24363__$1 = (function (){var statearr_24384 = state_24363;
(statearr_24384[(7)] = inst_24327__$1);

(statearr_24384[(8)] = inst_24328);

return statearr_24384;
})();
var statearr_24385_24411 = state_24363__$1;
(statearr_24385_24411[(2)] = null);

(statearr_24385_24411[(1)] = (2));


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
});})(c__21737__auto___24397,out))
;
return ((function (switch__21625__auto__,c__21737__auto___24397,out){
return (function() {
var cljs$core$async$state_machine__21626__auto__ = null;
var cljs$core$async$state_machine__21626__auto____0 = (function (){
var statearr_24389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24389[(0)] = cljs$core$async$state_machine__21626__auto__);

(statearr_24389[(1)] = (1));

return statearr_24389;
});
var cljs$core$async$state_machine__21626__auto____1 = (function (state_24363){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_24363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e24390){if((e24390 instanceof Object)){
var ex__21629__auto__ = e24390;
var statearr_24391_24412 = state_24363;
(statearr_24391_24412[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24413 = state_24363;
state_24363 = G__24413;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$state_machine__21626__auto__ = function(state_24363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21626__auto____1.call(this,state_24363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21626__auto____0;
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21626__auto____1;
return cljs$core$async$state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto___24397,out))
})();
var state__21739__auto__ = (function (){var statearr_24392 = f__21738__auto__.call(null);
(statearr_24392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___24397);

return statearr_24392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto___24397,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24414 = [];
var len__17829__auto___24488 = arguments.length;
var i__17830__auto___24489 = (0);
while(true){
if((i__17830__auto___24489 < len__17829__auto___24488)){
args24414.push((arguments[i__17830__auto___24489]));

var G__24490 = (i__17830__auto___24489 + (1));
i__17830__auto___24489 = G__24490;
continue;
} else {
}
break;
}

var G__24416 = args24414.length;
switch (G__24416) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24414.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21737__auto___24492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21737__auto___24492,out){
return (function (){
var f__21738__auto__ = (function (){var switch__21625__auto__ = ((function (c__21737__auto___24492,out){
return (function (state_24458){
var state_val_24459 = (state_24458[(1)]);
if((state_val_24459 === (7))){
var inst_24454 = (state_24458[(2)]);
var state_24458__$1 = state_24458;
var statearr_24460_24493 = state_24458__$1;
(statearr_24460_24493[(2)] = inst_24454);

(statearr_24460_24493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (1))){
var inst_24417 = [];
var inst_24418 = inst_24417;
var inst_24419 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24458__$1 = (function (){var statearr_24461 = state_24458;
(statearr_24461[(7)] = inst_24418);

(statearr_24461[(8)] = inst_24419);

return statearr_24461;
})();
var statearr_24462_24494 = state_24458__$1;
(statearr_24462_24494[(2)] = null);

(statearr_24462_24494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (4))){
var inst_24422 = (state_24458[(9)]);
var inst_24422__$1 = (state_24458[(2)]);
var inst_24423 = (inst_24422__$1 == null);
var inst_24424 = cljs.core.not.call(null,inst_24423);
var state_24458__$1 = (function (){var statearr_24463 = state_24458;
(statearr_24463[(9)] = inst_24422__$1);

return statearr_24463;
})();
if(inst_24424){
var statearr_24464_24495 = state_24458__$1;
(statearr_24464_24495[(1)] = (5));

} else {
var statearr_24465_24496 = state_24458__$1;
(statearr_24465_24496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (15))){
var inst_24448 = (state_24458[(2)]);
var state_24458__$1 = state_24458;
var statearr_24466_24497 = state_24458__$1;
(statearr_24466_24497[(2)] = inst_24448);

(statearr_24466_24497[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (13))){
var state_24458__$1 = state_24458;
var statearr_24467_24498 = state_24458__$1;
(statearr_24467_24498[(2)] = null);

(statearr_24467_24498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (6))){
var inst_24418 = (state_24458[(7)]);
var inst_24443 = inst_24418.length;
var inst_24444 = (inst_24443 > (0));
var state_24458__$1 = state_24458;
if(cljs.core.truth_(inst_24444)){
var statearr_24468_24499 = state_24458__$1;
(statearr_24468_24499[(1)] = (12));

} else {
var statearr_24469_24500 = state_24458__$1;
(statearr_24469_24500[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (3))){
var inst_24456 = (state_24458[(2)]);
var state_24458__$1 = state_24458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24458__$1,inst_24456);
} else {
if((state_val_24459 === (12))){
var inst_24418 = (state_24458[(7)]);
var inst_24446 = cljs.core.vec.call(null,inst_24418);
var state_24458__$1 = state_24458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24458__$1,(15),out,inst_24446);
} else {
if((state_val_24459 === (2))){
var state_24458__$1 = state_24458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24458__$1,(4),ch);
} else {
if((state_val_24459 === (11))){
var inst_24426 = (state_24458[(10)]);
var inst_24422 = (state_24458[(9)]);
var inst_24436 = (state_24458[(2)]);
var inst_24437 = [];
var inst_24438 = inst_24437.push(inst_24422);
var inst_24418 = inst_24437;
var inst_24419 = inst_24426;
var state_24458__$1 = (function (){var statearr_24470 = state_24458;
(statearr_24470[(7)] = inst_24418);

(statearr_24470[(11)] = inst_24436);

(statearr_24470[(12)] = inst_24438);

(statearr_24470[(8)] = inst_24419);

return statearr_24470;
})();
var statearr_24471_24501 = state_24458__$1;
(statearr_24471_24501[(2)] = null);

(statearr_24471_24501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (9))){
var inst_24418 = (state_24458[(7)]);
var inst_24434 = cljs.core.vec.call(null,inst_24418);
var state_24458__$1 = state_24458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24458__$1,(11),out,inst_24434);
} else {
if((state_val_24459 === (5))){
var inst_24426 = (state_24458[(10)]);
var inst_24422 = (state_24458[(9)]);
var inst_24419 = (state_24458[(8)]);
var inst_24426__$1 = f.call(null,inst_24422);
var inst_24427 = cljs.core._EQ_.call(null,inst_24426__$1,inst_24419);
var inst_24428 = cljs.core.keyword_identical_QMARK_.call(null,inst_24419,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24429 = (inst_24427) || (inst_24428);
var state_24458__$1 = (function (){var statearr_24472 = state_24458;
(statearr_24472[(10)] = inst_24426__$1);

return statearr_24472;
})();
if(cljs.core.truth_(inst_24429)){
var statearr_24473_24502 = state_24458__$1;
(statearr_24473_24502[(1)] = (8));

} else {
var statearr_24474_24503 = state_24458__$1;
(statearr_24474_24503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (14))){
var inst_24451 = (state_24458[(2)]);
var inst_24452 = cljs.core.async.close_BANG_.call(null,out);
var state_24458__$1 = (function (){var statearr_24476 = state_24458;
(statearr_24476[(13)] = inst_24451);

return statearr_24476;
})();
var statearr_24477_24504 = state_24458__$1;
(statearr_24477_24504[(2)] = inst_24452);

(statearr_24477_24504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (10))){
var inst_24441 = (state_24458[(2)]);
var state_24458__$1 = state_24458;
var statearr_24478_24505 = state_24458__$1;
(statearr_24478_24505[(2)] = inst_24441);

(statearr_24478_24505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (8))){
var inst_24418 = (state_24458[(7)]);
var inst_24426 = (state_24458[(10)]);
var inst_24422 = (state_24458[(9)]);
var inst_24431 = inst_24418.push(inst_24422);
var tmp24475 = inst_24418;
var inst_24418__$1 = tmp24475;
var inst_24419 = inst_24426;
var state_24458__$1 = (function (){var statearr_24479 = state_24458;
(statearr_24479[(7)] = inst_24418__$1);

(statearr_24479[(14)] = inst_24431);

(statearr_24479[(8)] = inst_24419);

return statearr_24479;
})();
var statearr_24480_24506 = state_24458__$1;
(statearr_24480_24506[(2)] = null);

(statearr_24480_24506[(1)] = (2));


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
});})(c__21737__auto___24492,out))
;
return ((function (switch__21625__auto__,c__21737__auto___24492,out){
return (function() {
var cljs$core$async$state_machine__21626__auto__ = null;
var cljs$core$async$state_machine__21626__auto____0 = (function (){
var statearr_24484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24484[(0)] = cljs$core$async$state_machine__21626__auto__);

(statearr_24484[(1)] = (1));

return statearr_24484;
});
var cljs$core$async$state_machine__21626__auto____1 = (function (state_24458){
while(true){
var ret_value__21627__auto__ = (function (){try{while(true){
var result__21628__auto__ = switch__21625__auto__.call(null,state_24458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21628__auto__;
}
break;
}
}catch (e24485){if((e24485 instanceof Object)){
var ex__21629__auto__ = e24485;
var statearr_24486_24507 = state_24458;
(statearr_24486_24507[(5)] = ex__21629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24508 = state_24458;
state_24458 = G__24508;
continue;
} else {
return ret_value__21627__auto__;
}
break;
}
});
cljs$core$async$state_machine__21626__auto__ = function(state_24458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21626__auto____1.call(this,state_24458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21626__auto____0;
cljs$core$async$state_machine__21626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21626__auto____1;
return cljs$core$async$state_machine__21626__auto__;
})()
;})(switch__21625__auto__,c__21737__auto___24492,out))
})();
var state__21739__auto__ = (function (){var statearr_24487 = f__21738__auto__.call(null);
(statearr_24487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21737__auto___24492);

return statearr_24487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21739__auto__);
});})(c__21737__auto___24492,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map