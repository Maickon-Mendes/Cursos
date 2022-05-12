class neo {
    constructor(id, name, diametro, riscCol){
        this.id = id
        this.name = name
        this.diametro = diametro
        this.riscCol = riscCol
    }
}

async function getNeos(){
    const response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
    const result = await response.json()
    return result("lista de objetos que ja passaram perto da terra")
}

async function loadNeos (){
    let neos = []
    let neosJSON = await getNeos()
    neosJSON.forEach(neo => {
        const minDiameter = neo["diametro_estimado"] ["kilometers"] ["estimated_diameter_min"]
        const maxDiameter = neo["diametro_estimado"] ["kilometers"] ["estimated_diameter_max"]
        const averageDiameter = (minDiameter + maxDiameter) / 2
        const newNeo = new Neo(neo["id"], neo["name"], averageDiameter, neo["is_sentry_object"])
        neos.push(newNeo)
    });
    console.log(neos)
}

loadNeos()