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
                      :errors    []}))

;; Forward declaration

(declare todo-item
         todo-list
         new-todo-form
         root)

;; Reads

(defmulti read om/dispatch)

(defmethod read :default
  [{:keys [state]} key _]
  {:value (key @state)})

(defmethod read :todos/title-exists?
  [{:keys [state]} _ {:keys [title]}]
  (let [_ (println "title:" title)
        todos  (:todos @state)
        titles (map :title todos)]
    {:value (some #{title} titles)}))

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

(defn todo-list [todos]
  (let [sorted-todos (sort-by :priority todos)]
    (dom/ol nil (map todo-item sorted-todos))))

(defui NewToDoForm
  static om/IQueryParams
  (params [this]
    {:title "test"})
  static om/IQuery
  (query [this]
    '[(:todos/title-exists? {:title ?title}) (todos/add) (errors/add) (errors/remove)])
  Object
  (render [this]
    (let [get-title    #(.-value (gdom/getElement "todo-input-title"))
          get-priority #(js/Number (.-value (gdom/getElement "todo-input-priority")))
          add-todo     (fn []
                         (let [title    (get-title)
                               priority (get-priority)
                               _ (println "props: " (om/props this))]
                           (if (:todos/title-exists? (om/props this))
                             (om/transact! this
                                           `[(todos/add {:title    ~title
                                                         :priority ~priority})])
                             (om/transact! this
                                           `[(errors/add {:error "Not a valid title"})]))))]
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
                                         :onClick add-todo}))))))

(defn error-msg [errors]
  (dom/ul nil
          (map #(dom/li nil %) errors)))

(defui Root
  static om/IQuery
  (query [this]
    [:app-title :todos :errors '(errors/clear-last)])
  Object
  (initLocalState [this]
    {:interval-set false})
  (render [this]
    (let [{:keys [app-title todos errors]} (om/props this)
          error-clearing #(if (not-empty (:errors (om/props this)))
                           (om/transact! this '[(errors/clear-last)]))
          set-interval   #(do (js/setInterval error-clearing 7000)
                              (om/set-state! this {:interval-set true}))
          _              (if (not (:interval-set (om/get-state this)))
                           (set-interval))]
      (dom/div nil
               (dom/h3 nil app-title)
               (new-todo-form)
               (todo-list todos)
               (error-msg errors)))))

;; Factories

(def todo-item (om/factory ToDoItem))
(def new-todo-form (om/factory NewToDoForm))
(def root (om/factory Root))

;; Root

(om/add-root! reconciler
              Root
              (gdom/getElement "app"))