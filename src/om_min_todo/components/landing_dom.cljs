(ns om-min-todo.components.landing-dom
  (:require [goog.dom :as gdom]
            [om.next :as om]
            [om.dom :as dom]
            [cljsjs.material]))


(defn dom-todo-item [title priority remove-trans]
  (dom/li nil
          (dom/div nil
                   (dom/span nil title)
                   (dom/br nil)
                   (dom/span nil (str "Priority: " priority)))
          (dom/button #js {:onClick remove-trans} "-")))

(defn dom-new-todo-form [todos add-trans]
  (let [get-title    (fn []
                       (.-value (gdom/getElement "todo-input-title")))
        get-priority (fn []
                       (js/Number (.-value (gdom/getElement "todo-input-priority"))))
        todo-exists? (fn [title]
                       (some #{title} (map :title todos)))
        raise-error  (fn []
                       (set! (.-innerHTML (gdom/getElement "new-todo-error"))
                             "Todo with same name exists!"))
        clear-error  (fn []
                       (set! (.-innerHTML (gdom/getElement "new-todo-error"))
                             ""))
        try-add-todo (fn []
                       (let [title (get-title)
                             priority (get-priority)]
                         (if (todo-exists? title)
                           (raise-error)
                           (do
                             (add-trans title priority)
                             (clear-error)))))]
    (dom/div nil
             (dom/form #js {:id "todo-input"}
                       "Title:"
                       (dom/br nil)
                       (dom/input #js {:id   "todo-input-title"
                                       :name "title"
                                       :type "text"})
                       (dom/br nil)
                       "Priority:"
                       (dom/br nil)
                       (dom/input #js {:id   "todo-input-priority"
                                       :name "priority"
                                       :type "number"})
                       (dom/br nil)
                       (dom/br nil)
                       (dom/input #js {:value   "add"
                                       :type    "button"
                                       :onClick try-add-todo}))
             (dom/br nil)
             (dom/span #js {:id "new-todo-error"} ""))))

(defn dom-todos-list [c todos]
  (dom/ul nil
          (map c todos)))

(defn dom-links []
  (dom/link #js {:href "https://fonts.googleapis.com/icon?family=Material+Icons"
                 :rel  "stylesheet"}))

(defn dom-header [app-title]
  (dom/header #js {:className "mdl-layout__header"}
              (dom/div #js {:className "mdl-layout__header-row mdl-shadow--2dp"}
                       (dom/span #js {:className "mdl-layout-title"} app-title)
                       (dom/div  #js {:className "mdl-layout-spacer"}))))