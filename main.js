const inpMsg = document.getElementById('input')
const msgs = []
const h3 = document.getElementById('h3')
const btn = document.getElementById('btn')
btn.setAttribute('disabled', '')
const par = document.getElementById('p')
const room = document.getElementById('room')
const name=document.getElementById('name')


const ws = new WebSocket('wss://glitsh-simple-websocket.glitch.me/')

ws.onopen = () => {
  console.log('connected')
  btn.removeAttribute('disabled')
  ws.onmessage = (msg) => {
    let m = msg.data.toString()
    onMsg(m);
    //console.log (m)
  }
}


function sendMsg() {
  let d = new Date().toLocaleTimeString()
  let msg = {
    'room': room.value,
    'name': name.value,
    'message': inpMsg.value,
    'time': d
  }
  ws.send(JSON.stringify(msg))
  //onMsg(inpMsg.value)
}

function onMsg(ms) {

  let p = document.createElement('p')
  let obj = JSON.parse(ms)
  p.textContent = `${obj.room} ${obj.name}: ${obj.message} ${obj.time}`
  par.append(p)
}
onload = () => {
  let p = document.createElement('p')
  p.textContent = 'hello vlad'
  //par.append(p)
}