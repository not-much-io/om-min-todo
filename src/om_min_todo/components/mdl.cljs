(ns om-min-todo.components.mdl
  (:require [goog.dom :as gdom]
            [om.dom :as dom]))

(def layout-spacer (dom/div #js {:className "mdl-layout-spacer"}))

(defn image [name]
  (dom/i #js {:className "material-icons"} name))

(defn shadow-cls [dp]
  (str "mdl-shadow--" dp "dp"))

(defn cell-col [width]
  (str "mdl-cell--" width "-col"))

(defn grid
  ([cls & els]
   (dom/div #js {:className (if cls
                              (str "mdl-grid" cls)
                              "mdl-grid")}
            els)))

(defn cell [el col-size]
  (dom/div {:className (str "mdl-cell " (cell-col col-size))}
           el))

(def empty-cell-row
  (dom/div #js {:className "mdl-cell"
                :minHeight 10}
           layout-spacer))

(defn center-grid
  ([dom-el col-size & cls]
   (grid
     cls
     layout-spacer
     (cell dom-el col-size)
     layout-spacer)))

(defn br-fixed-fab [on-click-handler]
  (let [br-css #js {:position "fixed"
                    :bottom   "20px"
                    :right    "20px"
                    :zIndex  1}]
    (dom/button #js {:className "mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
                     :style     br-css
                     :onChange  on-click-handler}
                (image "add"))))

(defn table [thead tbody]
  (let [table-class "mdl-data-table mdl-js-data-table mdl-shadow--2dp"]
    (dom/table #js {:className table-class}
               thead
               tbody)))