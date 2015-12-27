(ns om-min-todo.core
  (:require [om-min-todo.components.app :as app]
            [om-min-todo.util :as util]
            [cljsjs.material]))

(enable-console-print!)
(util/start-mdl-upgrading)
(app/main)