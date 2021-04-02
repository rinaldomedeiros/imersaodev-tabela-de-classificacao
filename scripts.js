var paulo = {
    nome: "Paulo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
    logo: "https://m.media-amazon.com/images/I/41boaZQPgKL._AC_.jpg"
}
var rafa = {
    nome: "Rafa",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
    logo: "https://i.pinimg.com/originals/91/f2/a5/91f2a51c67947b2a5f6968d0673b941a.jpg"
}

rafa.pontos = calculaPontos(rafa)
paulo.pontos = calculaPontos(paulo)

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

var jogadores = [rafa, paulo]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores) {
    var html = ""
    for (var i = 0; i < jogadores.length; i++) {
        html += "<tr><td><img src=" + jogadores[i].logo + "></td>"
        html += "<td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
}

function adicionarJogador(){
  var novoJogador = {
    nome: prompt("Digite o nome do novo jogador"),
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
    logo: prompt("Digite a URL da logo.")
  }
  jogadores.push(novoJogador)
  exibirJogadoresNaTela(jogadores)
  console.log(jogadores)
}
