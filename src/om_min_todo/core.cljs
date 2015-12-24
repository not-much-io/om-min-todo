(ns om-min-todo.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(defonce app-state (atom {:todos [{:title    "Keep an eye on bunny"
                                   :priority 1}
                                  {:title    "Get something to eat"
                                   :priority 3}
                                  {:title    "Read books"
                                   :priority 4}
                                  {:title    "Write code"
                                   :priority 2}]}))

(enable-console-print!)
(declare todo todo-list new-todo-form root)

(defui ToDo
  Object
  (render [this]
    (let [{:keys [title priority]} (om/props this)
          remove-todo (fn [title]
                        (swap! app-state assoc :todos
                               (filter #(not= (:title %) title)
                                       (:todos @app-state))))]
      (dom/span nil
                (dom/li nil
                        (dom/div nil
                                 (dom/span nil title)
                                 (dom/br nil)
                                 (dom/span nil (str "Priority: " priority))))
                (dom/button #js {:onClick #(remove-todo title)} "-")))))

(defui ToDoList
  Object
  (render [this]
    (let [todos (sort-by :priority (:todos (om/props this)))]
      (dom/ol nil (map todo todos)))))


(defui NewToDoForm
  Object
  (render [this]
    (let [set-error     #(let [err (gdom/getElement "todo-error")]
                          (set! (.-innerHTML err) "Invalid name!"))
          clear-error   #(let [err (gdom/getElement "todo-error")]
                          (set! (.-innerHTML err) ""))
          valid-name?   (fn [title]
                          (let [names (map :title (:todos @app-state))]
                            (not (some #{title} names))))
          add-todo      (fn [title priority]
                          (swap! app-state assoc :todos
                                 (conj (:todos @app-state)
                                       {:title    title
                                        :priority priority}))
                          (clear-error))
          get-title     #(.-value (gdom/getElement "todo-input-title"))
          get-priority  #(js/Number (.-value (gdom/getElement "todo-input-priority")))]
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
                                         :onClick #(let [title (get-title)
                                                         priority (get-priority)]
                                                    (if (valid-name? title)
                                                      (add-todo title priority)
                                                      (set-error)))}))
               (dom/div #js {:id "todo-error"})))))

(defui Root
  Object
  (render [this]
    (dom/div nil
             (dom/h3 nil "Minimal Om ToDo")
             (new-todo-form)
             (todo-list (om/props this)))))

(def todo (om/factory ToDo))
(def todo-list (om/factory ToDoList))
(def new-todo-form (om/factory NewToDoForm))
(def root (om/factory Root))

(def reconciler
  (om/reconciler {:state app-state}))

(om/add-root! reconciler
              Root
              (gdom/getElement "app"))