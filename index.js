let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

function convertToNumber(arr){
	for(let i=0;i<arr.length;i++){
		arr[i]=parseInt(arr[i])
	}
}
let input=readLine().split(" ")
let n=parseInt(input[0])
let q=parseInt(input[1])
let time=readLine().split(" ")
let score=readLine().split(" ")
convertToNumber(time)
convertToNumber(score)
time.sort().reverse()
score.sort().reverse()
let cur_time=[time[0]]
for(let i=1;i<n;i++){
  cur_time.push(time[i]+cur_time[i-1])
}
for(let i=0;i<q;i++){
  query=parseInt(readLine())
  console.log(cur_time[query-1])
}