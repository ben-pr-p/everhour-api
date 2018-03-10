# Everhour API Wrapper

WIP.

## API

```javascript
const everhour = require("everhour").initialize({
  api_key: "myeverhourapikey"
});

async function test() {
  // everhour.api has methods .get, .post, .put, and .delete, and returns a superagent
  // request object that can be chained with if a request you need to make is not provided here.
  const projects = (await everhour.api.get("projects")).body;

  // or, use the method
  const projects = (await everhour.projects.list()).body;

  // everhour.tasks.for_project
  const tasks = (await everhour.tasks.for_project(project_id)).body;

  await everhour.task(task_id).estimate.set(5000);
  await everhour.task(task_id).estimate.delete();

  // time modifiers accept a second, optional parameter of something
  // that gets passed to moment()
  // defaults to today
  //
  // .time.add, .update, and .delete are aliased as .add_on, .update_on, and .delete_on
  await everhour.task(task_id).time.add(5000);
  await everhour.task(task_id).time.add(5000, "03-09-2018");

  await everhour.task(task_id).time.update(5000);
  await everhour.task(task_id).time.update(5000, "03-09-2018");

  await everhour.task(task_id).time.delete(5000);
  await everhour.task(task_id).time.delete(5000, "03-09-2018");

  await everhour.task(task_id).start_timer();

  await everhour.timer.start_for(task_id); // equivalent to everhour.task(task_id).start_timer()
  await everhour.timer.stop();
  await everhour.timer.retrieve_running();
}
```
