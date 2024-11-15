function one( angry ){
    return angry[`
        "Sweater Weather" de The Neighbourhood
        "Everybody Hurts" de REM 
        "Nothing Compares 2 U" de Sinead O'Connor 
        "Tears in Heaven" de Eric Clapton 
        "I Will Always Love You" de Whitney Houston 
        "Yesterday" dos Beatles 
        "Someone Like You" de Adele 
        "My Heart Will Go On" de Celine Dion 
        "Crying" de Roy Orbison 
        "Streets Of Philadelphia" de Bruce Springsteen 
        "Love Will Tear Us Apart" do Joy Division `]
}alert(angry)
function two(sad){
    return sad[`
        "cardigan" de Taylor Swift
        "Fall in Love with You" de Montell Fish
        "Black Friday" de Tom Odell
        "Here With Me" de d4vd
        "Those Eyes" de New West
        "Deep End" de Holly Humberstone
        "vampire" de Olivia Rodrigo`]
}alert(sad)
do{
   let option = prompt(`como voce esta se sentindo agora? irei te indicar alguns cantores e suas musicas para voce
    (escolha uma opcao:)voce esta:
    1.raiva;
    2.triste;
    3.ansioso;
    4.solitario;
    5.medo;
    6.sair.
    `)
    switch(option){
        case '1' : 
        alert(`nao surta!! voce vai conseguir se acalmar ouvindo algumas dessas musicas:
            ${angry}`)
            break
        case '2' :
            alert(`melhoras viu!! voce talvez pode se sentir melhor ouvindo algumas dessas musicas:
                ${sad}`)
    }
   
} while (option !== '6')
