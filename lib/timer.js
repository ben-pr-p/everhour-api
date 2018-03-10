// const moment = require("moment");

module.exports = api => {
  return {
    // api.timer.start_for(task_id)
    start_for: task_id => api.post("timers").send({ task: task_id }),
    // api.timer.stop()
    stop: () => api.delete("timers/current"),
    // api.timer.retrieve_running()
    retrieve_running: () => api.get("timers/current")
  };
};
