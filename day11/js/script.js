function req(callback) {

var getReq = new XMLHttpRequest();
getReq.open('GET', '/env.json');
getReq.onload = function() {
  if(getReq.status === 200 && getReq.readyState === 4) {
    console.log('success');
    callback(JSON.parse(getReq.responseText));
  }
}

getReq.send(null);

};

function getJson(obj) {
  console.log(obj);
};

req(getJson);
