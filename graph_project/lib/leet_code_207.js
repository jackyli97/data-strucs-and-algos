// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

var canFinish = function (numCourses, prerequisites) {
  let graph = {};
  prerequisites.forEach((prereq) => {
    graph[prereq[0]] = graph[prereq[0]]
      ? graph[prereq[0]].concat(prereq[1])
      : [prereq[1]];
  });
  for (let i = 0; i < numCourses; i++) {
    if (!graph[i]) graph[i] = [];
  }

  let confirmed = new Set();
  for (let i = 0; i < numCourses; i++) {
    if (!canFinishRecur(i, graph, confirmed)) return false;
  }
  return true;
};

var canFinishRecur = function (course, graph, confirmed, visited = new Set()) {
  if (confirmed.has(course)) return true;
  let prereqs = graph[course];
  if (prereqs.length === 0) return true;
  if (visited.has(course)) return false;
  visited.add(course);
  for (let i = 0; i < prereqs.length; i++) {
    if (!canFinishRecur(prereqs[i], graph, confirmed, visited)) return false;
  }
  confirmed.add(course);
  return true;
};
