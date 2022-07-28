import io from 'socket.io-client'

let socket;


//bunun kulaniyoruz cikis baglandiyi yaptik 
export const init  =()=>{

     console.log('sunucuya baglan baba')
    socket = io('localhost:3001',{
        transports :['websocket']
    })
    socket.on('connect',()=>console.log('bir bitmedi baba'))
}


//karsilikli veri gondermeyi yapiyoruy
//color sectik renkleri gondermek icin
//emit clinte ise backende backende ise clinete veri gonderi iki tane deger akir
//birinciu hangi kanala gondereceim lontrol ettei newcolor gonderiyorum,
//newcolor kanalina elimdeki color gonderiyorum
export const send =(color)=>{
socket.emit('newColor',color)
}


//burada backend dinleyoruy ve ordaki degeri goruziruz
export const sub=(cb)=>{
    socket.on('receive',(color)=>console.log(color))
    cb(color)
}