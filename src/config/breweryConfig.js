export const breweryConfig = {
  nome: "Curucucu",
  apelido: "Curucucu",
  descricao: "Arte, Chopp & Encontro",
  cidade: "Pirenópolis - GO",
  logoUrl: "/icons/logo.png",

  corDestaque: "#ECA320",

  endereco: {
    linha1: "Passarela das Araras",
    linha2: "Pirenópolis - GO, 72980-000"
  },

  horarioFuncionamento: {
    seg: null,
    ter: null,
    qua: null,
    qui: null,
    sex: { abre: "10:00", fecha: "22:00" },
    sab: { abre: "10:00", fecha: "22:00" },
    dom: { abre: "10:00", fecha: "22:00" }
  },

  whatsapp: {
    numero: "556262985227777",
    mensagemPadrao: "Olá! Gostaria de saber mais sobre a Curucucu."
  },

  instagram: {
    usuario: "@curucucu.piri",
    url: "https://www.instagram.com/curucucu.piri/"
  },

  googleMaps: "https://www.google.com.br/maps/place/Curucucu/@-15.8510449,-48.9601204,17z/data=!3m1!4b1!4m6!3m5!1s0x935c6dd3997ec84b:0x92887435e08118ed!8m2!3d-15.8510501!4d-48.9575455!16s%2Fg%2F11zfln4l5n?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D",
  googleReviews: "https://www.google.com.br/maps/place/Curucucu/@-15.8510449,-48.9601204,17z/data=!4m8!3m7!1s0x935c6dd3997ec84b:0x92887435e08118ed!8m2!3d-15.8510501!4d-48.9575455!9m1!1b1!16s%2Fg%2F11zfln4l5n?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D",

  cardapioPdf: "/docs/cardapio.pdf",
  quemSomosPdf: "/docs/quem-somos.pdf",

  ytMusicPlaylist: "https://music.youtube.com/playlist?list=EXEMPLOEXEMPLOEXEMPLO",

  iconesAcoes: {
    cardapio: "/icons/acoes/cardapio.png",
    quemSomos: "/icons/acoes/quem-somos.png",
    whatsapp: "/icons/acoes/whatsapp.png",
    localizacao: "/icons/acoes/localizacao.png",
    instagram: "/icons/acoes/instagram.png"
  },

  siteUrl: "https://casaraopirenopolis.com.br",

  galeria: [
    { src: "/images/galeria/ambiente-1.jpeg", alt: "Salão principal do Casarão com iluminação quente" },
    { src: "/images/galeria/chopp-1.jpeg", alt: "Chope artesanal servido em caneca de barro" },
    { src: "/images/galeria/petiscos-1.jpeg", alt: "Tábua de petiscos da casa" },
    { src: "/images/galeria/varanda-1.jpeg", alt: "Varanda colonial com vista para a rua de pedra" },
    { src: "/images/galeria/drinks-1.jpeg", alt: "Drinks autorais do bar" },
    { src: "/images/galeria/noite-1.jpeg", alt: "Movimento noturno no Casarão" }
  ],

  analytics: {
    googleAnalyticsId: "",
    metaPixelId: ""
  },

  seo: {
    titulo: "Curucuru | Arte, Chopp & Encontro  Pirenópolis-GO",
    descricao: "Chope artesanal, petiscos e tradição no centro histórico de Pirenópolis-GO. Cardápio, localização, reservas e tudo sobre a casa em um só lugar.",
    imagemCompartilhamento: "/images/og-cover.jpg"
  }
}

export const diasSemana = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"]

export const diasLabel = {
  dom: "Domingo",
  seg: "Segunda",
  ter: "Terça",
  qua: "Quarta",
  qui: "Quinta",
  sex: "Sexta",
  sab: "Sábado"
}
