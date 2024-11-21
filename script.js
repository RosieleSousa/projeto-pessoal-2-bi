function one(){
    return [
        '"Sweater Weather" de The Neighbourhood',
        '"Everybody Hurts" de REM', 
        '"Nothing Compares 2 U" de Sinead O Connor', 
        '"Tears in Heaven" de Eric Clapton', 
        '"I Will Always Love You" de Whitney Houston',
        '"Yesterday" dos Beatles', 
        '"Someone Like You" de Adele', 
        '"My Heart Will Go On" de Celine Dion',
        '"Crying" de Roy Orbison', 
        '"Streets Of Philadelphia" de Bruce Springsteen',
        '"Love Will Tear Us Apart" do Joy Division' 
    ]
    menu()
}
function two(){
    return [
        '"cardigan" de Taylor Swift',
        '"Fall in Love with You" de Montell Fish',
        '"Black Friday" de Tom Odell',
        '"Here With Me" de d4vd',
        '"Those Eyes" de New West',
        '"Deep End" de Holly Humberstone',
        '"vampire" de Olivia Rodrigo'
    ]
    menu()
}
function three(){
    return [
    '"Weightless" de Marconi Union',
    '"Electra" de Airstream',
    '"Mellomaniac (Chill Out Mix)" de DJ Shah',
    '"Watermark" de Enya',
    '"Strawberry Swing" de Coldplay',
    '"Please Dont Go" de Barcelona',
    '"Pure Shores" de All Saints',
    '"Someone Like You" de Adele',
    '"We Can Fly" de Café Del Mar'      
    ]
    menu()
}
function four(){
    return [
    '"Something" De The Beatles',
    '"Such Great Heights" De Iron & Wine',
    '"Old Pine" De Ben Howard',
    '"The Golden State" De City and Colour',
    '"Let Her Go - Acoustic" De Passenger',
    '"Between The Bars" De Elliott Smith',
    '"Please Be Patient with Me" De Wilco',
    '"Exit Music (For a Film)" De Radiohead',
    '"Made Of Glass" De KT Tunstall',
    '"Visions of Gideon" De Sufjan Stevens' 
    ]
    menu()
}
function five(){
    return[
        '"Everybody Hurts" Da banda R.E.M.', 
        '"Nothing Compares 2 U" de Sinead O Connor', 
        '"Tears in Heaven" De Eric Clapton', 
        '"Something in the Way" De Nirvana', 
        '"Maybe Someday" De The Cure', 
        '"Changes" De Black Sabbath', 
        '"Wish You Were Here" De Pink Floyd'   
    ]
    menu()
}
function menu() {
   let option = prompt(`como voce esta se sentindo agora? irei te indicar alguns cantores e suas musicas para voce
    (escolha uma opcao:)voce esta:
    1.raiva;
    2.triste;
    3.ansioso;
    4.solitario;
    5.decepcionada(o);
    6.sair.
    `)
    switch(option){
        case '1' : 
        let angry = one()
        alert(`nao surta!! voce vai conseguir se acalmar ouvindo algumas dessas musicas:
            ${angry.join('\n')}`)
        
        case '2' :
            let sad = two()
            alert(`melhoras viu!! voce talvez pode se sentir melhor ouvindo algumas dessas musicas:
                ${sad.join('\n')}`)
                break
        case '3' :
            let  anxiety = three() 
            alert(`vai ficar tudo bem viu! respira fundo e ouve algumas dessas musicas para ver se voce melhora:
                ${anxiety.join('\n')}`) 
                break
        case '4' :
            let  lonely = four()
            alert(`eu sei bem como e se sentir desse jeito... mas voce pode tentar melhorar ouvindo algumas dessas musicas:
                ${lonely.join('\n')}`)
                break
        case '5' :
            let deception = five()
            alert(`Eu sei que e ruim se sentir desse jeito, mas ta tudo bem viu! para vc se sentir melhor posso recomendar algumas dessas musicas para voce tentar melhorar:
                ${deception.join('\n')}`)
                break
        case '6' :
            alert('desejo melhoras para vc viu! se eu consegui te ajudar, me sinto agradecida por ter ajudado a vc melhorar seus sentimentos negativos mas nao se preocupe voce nao esta errado em se sentir mal, voce so deve controlar seus sentimentos e nao surtar viu!! ate logo!! :)')
            break
        default :
        alert("opcao invalida! tente novamente.")
        menu()
    }
   
}
menu()
