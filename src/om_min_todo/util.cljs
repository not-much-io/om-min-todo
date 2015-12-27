(ns om-min-todo.util)

(defn start-mdl-upgrading []
  (js/setInterval #(.upgradeDom js/componentHandler) 100))
