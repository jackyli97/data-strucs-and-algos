function mergeRanges(meetings) {
  // const sortedMeetings = meetings.sort((a, b) => {
  //     return a.startTime - b.startTime;
  //   });
  let max = -Infinity;
  let start = {};
  for (let i = 0; i < meetings.length; i++) {
    start[meetings[i].startTime] = true;
    start[meetings[i].endTime] = false;
    max = Math.max(meetings[i].endTime, max);
  }
  let count = Array(max + 1);

  for (let i = 0; i < meetings.length; i++) {
    count[meetings[i].startTime] = meetings[i];
  }

  let sortedMeetings = [];

  for (let i = 0; i < count.length; i++) {
    if (!count[i]) continue;
    else sortedMeetings.push(count[i]);
  }

  let mergedMeetings = [sortedMeetings[0]];
  let i = 0;

  while (i < sortedMeetings.length) {
    let firstEnd = mergedMeetings[mergedMeetings.length - 1].endTime;
    let secondStart = sortedMeetings[i].startTime;
    let secondEnd = sortedMeetings[i].endTime;
    if (firstEnd >= secondStart) {
      let newEnd = firstEnd > secondEnd ? firstEnd : secondEnd;
      mergedMeetings[mergedMeetings.length - 1].endTime = newEnd;
    } else mergedMeetings.push(sortedMeetings[i]);
    i++;
  }
  return mergedMeetings;
}
