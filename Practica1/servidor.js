
console.log("Hola mundo js Servidor")

console.time("miProceso")

for(let i = 0; i < 10000000000; i++){ }

console.timeEnd("miProceso")



    let usuarios=[
        {nombre: "Agustin", edad: 22},
        {nombre: "Edo", edad: 21},
        {nombre: "Memo", edad: 23}
    ]

    console.table(usuarios)
