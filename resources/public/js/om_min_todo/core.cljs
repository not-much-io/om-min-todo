(ns om-min-todo.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

;; State

(def app-state (atom {:app-title "Minimal Om Todo"
                      :todos     [{:title    "Keep an eye on bunny"
                                   :priority 1}
                                  {:title    "Get something to eat"
                                   :priority 3}
                                  {:title    "Read books"
                                   :priority 4}
                                  {:title    "Write code"
                                   :priority 2}]
                      :errors    []
                      :flags     [{:error-clearing false}]}))

;; Forward declaration

(declare todo-item
         todo-list
         new-todo-form
         root)

;; Reads

(defmulti read om/dispatch)

(defmethod read :app-title
  [{:keys [state]} _ _]
  {:value (:app-title @state)})

(defmethod read :sorted-todos
  [{:keys [state]} _ _]
  (let [todos (:todos @state)]
    {:value (sort-by :priority todos)}))

(defmethod read :errors
  [{:keys [state]} _ _]
  {:value (:errors @state)})

(defmethod read :flags
  [{:keys [state]} _ _]
  {:value (:flags @state)})

;; Mutations

(defmulti mutate om/dispatch)

(defmethod mutate 'todos/add
  [{:keys [state]} _ {:keys [title priority]}]
  {:action (fn []
             (swap! state update-in [:todos]
                    (fn [curr-todos]
                      (conj curr-todos {:title    title
                                        :priority priority}))))})

(defmethod mutate 'todos/remove
  [{:keys [state]} _ {:keys [title]}]
  {:action (fn []
             (swap! state update-in [:todos]
                    (fn [curr-todos]
                      (filter #(not= (:title %) title) curr-todos))))})

(defmethod mutate 'errors/add
  [{:keys [state]} _ {:keys [error]}]
  {:action (fn []
             (swap! state update-in [:errors]
                    (fn [curr-errors]
                      (conj curr-errors error))))})

(defmethod mutate 'errors/clear-last
  [{:keys [state]} _ _]
  {:action (fn []
             (swap! state update-in [:errors]
                    (fn [curr-errors]
                      (drop-last curr-errors))))})

(defmethod mutate 'flags/toggle
  [{:keys [state]} _ {:keys [flag]}]
  {:action (fn []
             (swap! state update-in [:flags]
                    (fn [curr-flags]
                      (let [to-toggle (filter #(not (nil? (flag %))) curr-flags)]
                        ))))})

;; Parser

(def parser (om/parser {:read read :mutate mutate}))

;; Reconciler

(def reconciler
  (om/reconciler {:state  app-state
                  :parser parser}))


;;UI components

(defui ToDoItem
  static om/IQuery
  (query [this]
    '[(todos/remove)])
  Object
  (render [this]
    (let [{:keys [title priority]} (om/props this)]
      (dom/li nil
              (dom/div nil
                       (dom/span nil title)
                       (dom/br nil)
                       (dom/span nil (str "Priority: " priority)))
              (dom/button #js {:onClick #(om/transact! this
                                                       `[(todos/remove {:title ~title})])} "-")))))

(defn todo-list [sorted-todos]
  (dom/ol nil (map todo-item sorted-todos)))

(defui NewToDoForm
  static om/IQuery
  (query [this]
    '[(todos/add) (errors/add) (errors/remove)])
  Object
  (render [this]
    (let [valid-title?   (fn [title]
                           (let [names (map :title (:todos @app-state))]
                             (not (some #{title} names))))
          get-title    #(.-value (gdom/getElement "todo-input-title"))
          get-priority #(js/Number (.-value (gdom/getElement "todo-input-priority")))]
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
                                         :onClick (fn []
                                                    (let [title (get-title)
                                                          priority (get-priority)]
                                                      (if (valid-title? title)
                                                        (om/transact! this
                                                                      `[(todos/add {:title    ~title
                                                                                    :priority ~priority})])
                                                        (om/transact! this
                                                                      `[(errors/add {:error "Not a valid title"})]))))}))))))

(defn error-msg [errors]
  (dom/ul nil
          (map #(dom/li nil %) errors)))

(defui Root
  static om/IQuery
  (query [this]
    [:app-title :sorted-todos :errors :flags '(errors/clear-last) '(flags/toggle)])
  Object
  (render [this]
    (let [{:keys [app-title sorted-todos errors flags]} (om/props this)
          _ (comment (if (not (:error-clearing flags))
                       (do (js/setInterval #(om/transact! this '[(errors/clear-last)]) 5000)
                           (om/transact! this '[(flags/toggle {:flag :error-clearing})]))))]
      (dom/div nil
               (dom/h3 nil app-title)
               (new-todo-form)
               (todo-list sorted-todos)
               (error-msg errors)))))

;; Factories

(def todo-item (om/factory ToDoItem))
(def new-todo-form (om/factory NewToDoForm))
(def root (om/factory Root))

;; Root

(om/add-root! reconciler
              Root
              (gdom/getElement "app"))