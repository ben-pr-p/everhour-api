const moment = require("moment");

module.exports = api => ({
  // api.tasks.for_project(project_id)
  for_project: project_id => api.get(`projects/${project_id}/tasks`)
});
