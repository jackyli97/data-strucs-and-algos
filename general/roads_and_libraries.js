function roadsAndLibraries(n, c_lib, c_road, cities) {
  // n = num of cities and num of roads that can be built
  // cities represents thebidirectional roads that are allowed to be built

  // first create graph

  // let totalRoadsCost = c_lib + ((n-1) * c_road);
  // let totalLibsCost = n * c_lib;

  // if (Math.min(totalLibsCost, totalRoadsCost) === totalLibsCost
  // || totalLibsCost === totalRoadsCost) return totalLibsCost;

  let legalRoads = {};

  for (let i = 0; i < cities.length; i++) {
    let city1 = cities[i][0];
    let city2 = cities[i][1];

    if (!legalRoads[city1]) legalRoads[city1] = [city2];
    else legalRoads[city1].push(city2);
    if (!legalRoads[city2]) legalRoads[city2] = [city1];
    else legalRoads[city2].push(city1);
  }
  let visited = new Set();
  let cost = 0;
  let components = [];

  for (let i = 1; i <= n; i++) {
    if (visited.has(i)) continue;
    components.push(dfs(i, legalRoads, visited));
  }

  for (let i = 0; i < components.length; i++) {
    let size = components[i];
    cost += Math.min(c_lib + (size - 1) * c_road, size * c_lib);
  }

  return cost;
}

function dfs(city, legalRoads, visited) {
  let count = 1;
  visited.add(city);
  let neighbors = legalRoads[city];
  if (!neighbors) return count;
  for (let i = 0; i < neighbors.length; i++) {
    let road = neighbors[i];
    if (!visited.has(road)) count += dfs(road, legalRoads, visited);
  }
  return count;
}

// Notes:
// which ever cost is higher, that is the one the you build the least amount of
// keep in mind you'll always want at least one library
// also keep in mind the restrictions of roads that can be connected
// if they both cost the same, you can use any assortment of resources(min 1 lib)

// there are certain roads that can't be built, so keep those restrictions in mind
/*
// 2           q = 2
// 3 3 2 1     n = 3, cities[] size m = 3, c_lib = 2, c_road = 1
// 1 2         cities = [[1, 2], [3, 1], [2, 3]]

            // 1*\ 
            // |  3.  4
            // 2  
            
    // n=3 
    // hasLibAccess = [1,2,3];
    // legalRoads: {1: [3,2], 2:[3,1], 3:[1,2,4]}

*/
//Potential steps:
// always add a library to one city and access from there
// decide what is cheaper, n libraries or n-1 roads and 1 library
// if roads is cheaper that lib, try adding as many roads as possible before we run out of possibilites or once our set is full
// iterate to the next city, check if it is in haslibaccessalready
// if not then continue onto the next city, if it is not in there,
// then first iterate through its possible roads, if there exists a road in the set
// then increment builts roads, else increment libs built

// stuck on:
//  thinking about using too much of one particular resource
