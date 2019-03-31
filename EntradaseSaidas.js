const anonima = process.argv.indexOf('-a') !== -1
//console.log(anonima)

if(anonima) {
    process.stdout.write('Fala Anonimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(` fala ${nome} ! \n`)
        process.exit()
    })
}