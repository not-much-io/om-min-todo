(ns om-min-todo.components.landing
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [om-min-todo.components.landing-dom :as d]
            [cljsjs.material]))

;;Om UI components

(defui NewToDoForm
  static om/IQuery
  (query [this]
    '[:todos (todos/add)])
  Object
  (render [this]
    (let [{:keys [todos]} (om/props this)
          add-trans (fn [title priority]
                      (om/transact! this `[(todos/add {:title    ~title
                                                       :priority ~priority})]))]
      (d/dom-new-todo-form todos add-trans))))

(def new-todo-form (om/factory NewToDoForm))

(defui ToDoItem
  static om/IQuery
  (query [this]
    '[(todos/remove)])
  Object
  (render [this]
    (let [{:keys [title priority]} (om/props this)
          remove-trans #(om/transact! this `[(todos/remove {:title ~title})])]
      (d/dom-todo-item title priority remove-trans))))

(def todo-item (om/factory ToDoItem {:keyfn :title}))

(defui ToDoList
  static om/IQuery
  (query [this]
    '[:sorted-todos])
  Object
  (render [this]
    (let [{:keys [sorted-todos]} (om/props this)]
      (d/dom-todos-list todo-item sorted-todos))))

(def todo-list (om/factory ToDoList))

(defui Root
  static om/IQuery
  (query [this]
    [:app-title :todos])
  Object
  (render [this]
    (let [{:keys [app-title todos]} (om/props this)
          sorted-todos (sort-by :priority todos)]
      (dom/div #js {:className "mdl-layout mdl-js-layout mdl-layout--fixed-header"}
               (d/dom-header app-title)
               (dom/main #js {:className "mdl-layout__content"}
                         (dom/div #js {:className "page-content"}
                                  (new-todo-form {:todos todos})
                                  (todo-list {:sorted-todos sorted-todos})))))))
