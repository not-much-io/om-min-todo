(ns om-min-todo.components.landing-dom
  (:require [goog.dom :as gdom]
            [om.dom :as dom]
            [om-min-todo.components.mdl :as mdl]))

(defn dom-todo-item [title priority remove-trans]
  (let [td-title (dom/td nil title)
        td-prior (dom/td nil priority)
        td-remov (dom/td nil (dom/a #js {:onClick remove-trans}
                                  (mdl/image "clear")))]
    (dom/tr nil
            td-title
            td-prior
            td-remov)))

(defn dom-todos-list [c todos]
  (mdl/center-grid
    (mdl/table
      (dom/thead nil
                 (dom/tr nil
                         (dom/th nil "ToDo")
                         (dom/th nil "Priority")
                         (dom/th nil "")))
      (dom/tbody nil (map c todos)))
    12))

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
                       (let [_ (println "11111111111111111")
                             title    (get-title)
                             priority (get-priority)]
                         (if (todo-exists? title)
                           (do
                             (js/alert "well fuck")
                             (raise-error))
                           (do
                             (add-trans title priority)
                             (clear-error)))))]
    (mdl/center-grid
      (dom/div nil
               (dom/form nil
                         (dom/div #js {:className "mdl-textfield mdl-js-textfield mdl-textfield--floating-label"}
                                  (dom/input #js {:id        "todo-input-title"
                                                  :className "mdl-textfield__input"
                                                  :type      "text"})
                                  (dom/label #js {:className "mdl-textfield__label"
                                                  :htmlFor   "todo-input-title"}
                                             "Title...")))
               (dom/form nil
                         (dom/div #js {:className "mdl-textfield mdl-js-textfield mdl-textfield--floating-label"}
                                  (dom/input #js {:id        "todo-input-priority"
                                                  :className "mdl-textfield__input"
                                                  :type      "text"
                                                  :pattern   "-?[0-9]*(\\.[0-9]+)?"})
                                  (dom/label #js {:className "mdl-textfield__label"
                                                  :htmlFor   "todo-input-priority"}
                                             "Priority...")
                                  (dom/span #js {:className "mdl-textfield__error"}
                                            "Input is not a number!")))
               (mdl/br-fixed-fab try-add-todo))
      4)))

(defn dom-links []
  (dom/link #js {:href "https://fonts.googleapis.com/icon?family=Material+Icons"
                 :rel  "stylesheet"}))

(defn dom-header [app-title]
  (dom/header #js {:className "mdl-layout__header"}
              (dom-links)
              (dom/div #js {:className "mdl-layout__header-row mdl-shadow--2dp"}
                       (dom/span #js {:className "mdl-layout-title"} app-title)
                       (dom/div  #js {:className "mdl-layout-spacer"}))))