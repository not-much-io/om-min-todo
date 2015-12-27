(ns om-min-todo.components.app
  (:require [goog.dom :as gdom]
            [om.next :as om]
            [om-min-todo.parser :as p]
            [om-min-todo.components.landing :as landing]))

;; State

(def app-state (atom {:app-title "Minimal Om Todo"
                      :todos     [{:title    "Keep an eye on bunny"
                                   :priority 1}
                                  {:title    "Get something to eat"
                                   :priority 3}
                                  {:title    "Read books"
                                   :priority 4}
                                  {:title    "Write code"
                                   :priority 2}]}))

;; Reconciler

(def reconciler
  (om/reconciler {:state  app-state
                  :parser p/parser}))

;; Root

(defn main []
  (om/add-root! reconciler
                landing/Root
                (gdom/getElement "app")))
