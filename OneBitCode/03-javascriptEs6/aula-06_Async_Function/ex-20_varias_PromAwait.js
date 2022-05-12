let laserGun = {
    shotsPerSecond: 30,
    currentPosition: [30, 45, 70],
    firing: false
    } 
    /*function adjustPosition(x, y, z) {
    return new Promise(resolve => {
      laserGun.currentPosition = [x, y, z]
      resolve([x, y, z])
    })
    }
    function fire(x, y, z) {
    return new Promise(resolve => {
      laserGun.firing = true
      resolve([x, y, z])
    })
    }*/


async function adjustPosition (x, y, z){
    if(z > 90){
    return  Promise.reject("Angulo invalido para arma")
}
    laserGun.currentPosition = [x, y, z]
    return [x, y, z] //substitui o resolve
}

function recaregar() {
  return new Promise((resolve)=> {
     setTimeout(()=>{
       resolve("Arma carregada")
     }, 2000)
   })
 }

async function fire (x, y, z){
    laserGun.firing = true
    return [x, y, z]  //substitui o resolve
}

async function moveAndFire(x, y, z) {
    try{
      const adjustPositionpromi = adjustPosition(x, y, z)
      const recargaProm = recaregar()
      let promiseRes = await Promise.all([adjustPositionpromi, recargaProm])
      let newCorordinates = promiseRes[0]

    console.log(`Arma ajustada para as coordenadas (${newCorordinates[0]}, ${newCorordinates[1]}, ${newCorordinates[2]})`)

    let firecoord = await fire(...newCorordinates)  //refereece ao then
    console.log(`Começando a atirar nas coordenadas (${firecoord[0]}, ${firecoord[1]}, ${firecoord[2]})`)
    }catch(error){
      console.log(error)
    }
}
moveAndFire(20, 40, 85)