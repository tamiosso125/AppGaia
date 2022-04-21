import DELAHKS from "./Image/delak.png"

const catalog = [
  {
    id: 1,
    name: "Delahks",
    image: DELAHKS,
    characters: [`Nosso espirito é curioso e abençoado por Prisma, por isso não
    tememos o perigo de Krabesh. As pedras das cidades
    escondem segredos e mentiras que o próprio povo prefere não
    enxergar e, por conta disso, somos nômades. A areia e o vento
    purificam e trazem à tona a verdadeira face de um ser.`],
    genre: "Raça",
    info: {
      pv: 25, 
      pe: 25,
      dicePV: "1d6",
      dicePE: "1d6",
      skills: `Sobrevivência, Carisma, Furtividade, Arcanismo
      ou Percepção.`,
      attributes: `Evasão, Concentração ou Espírito.`,
      raceSkills: [
        {
          name: `MINHAS RAÍZES`,
          type: `[A]`,
          params: `1 Alvo | 6 Metros`,
          description: `O Alraune força um alvo em alcance desta habilidade a
          um teste de Resistência Dif. 8; caso falhe, este alvo
          será envolvido por vinhas que irão aprisionar os seus
          pés, impedindo que este alvo realize Ações De
          Movimentação.
          Estas vinhas possuem 1d4 + (1d4 para cada Ponto de
          Aprendizado adquirido) Pontos de Vida.
          Qualquer ataque ou habilidade que cause dano,
          poderá remover os Pontos de Vida das vinhas
          automaticamente, sem testes de Precisão ou
          Concentração. Ao remover todos os Pontos de Vida
          das vinhas, o alvo preso será libertado e poderá utilizar
          novamente suas Ações de Movimentação.
          Esta habilidade não poderá ser realizada caso o alvo
          não esteja tocando o solo. A duração desta habilidade
          fora de combate é de 10 minutos. Esta habilidade não
          acumula o seu efeito sobre o mesmo alvo.
          Esta habilidade pode ser utilizada um número de vezes
          por dia igual a 1 + (1 para cada Ponto de Aprendizado
          adquirido).
          Com gestos rápidos e uma breve comunhão com o Primal, o
          Alraune recebe auxilio da essência da natureza.`,
        },
        {
          name: `BELEZA NATURAL`,
          type: `[P]`,
          params: ``,
          description: `O Alraune pode realizar um segundo teste de Carisma
          caso tenha falhado no primeiro. Este efeito só pode
          ocorrer uma vez por turno.
          Alraunes carregam consigo uma essência exótica, que para
          muitos é esculpida em sua aparência única, ou no seu jeito de
          se expressar.`,
        },
        {
          name: `LIGAÇÃO COM A NATUREZA`,
          type: `[P]`,
          params: ``,
          description: `Sua vida na natureza lhe garantiu diversos
          conhecimentos básicos de sobrevivência, como
          identificar se uma planta ou alimento é venenoso e
          uma pequena comunicação com animais dóceis que
          podem lhe auxiliar brevemente, sem teste algum.
          Assim, um Alraune não precisa se alimentar, mas, por
          conta disso, precisa do dobro de água e de sol
          diariamente para sobreviver. Ambientes desérticos ou
          sem luz solar onde não haja vegetação ou rios são os
          lugares que um Alraune nunca gostaria de ir.
          Como Guardião dos Antigos, o Alraune tem conexão direta
          com a natureza, sendo parte dela.`,
        },
      ],
    }
  },
  // {
  //   id: 2,
  //   name: "Game of Thrones",
  //   image:
  //     "https://www.revistabula.com/wp/wp-content/uploads/2017/04/Game-of-Thrones.jpg.webp",
  //   characters: [
  //     "Daenerys da Casa Targaryen, Primeira de seu nome, Nascida da tormenta, A não queimada, Mãe dos Dragões, Quebradora das correntes, Mãe dos escravos, Khaleesi dos Dothraki, Rainha de Mereen, Rainha de Westeros, Dos Ândalos, Dos Roinares.",
  //     "Cersei Lannister"
  //   ],
  //   genre: "Fantasia",
  //   info: {
  //     seasons: "8 temporadas", 
  //     episodes: 73
  //   }
  // },
  // {
  //   id: 3,
  //   name: "Black Mirror",
  //   image:
  //     "https://www.revistabula.com/wp/wp-content/uploads/2017/04/Black-Mirror.jpg.webp",
  //   characters: ["Diversas pessoas", "Muitas pessoas"],
  //   genre: "Ficção",
  //   info: {
  //     seasons: "5 temporadas", 
  //     episodes: 22
  //   }
  // },
  // {
  //   id: 4,
  //   name: "Friends",
  //   image:
  //     "https://i.ibb.co/C6GmthN/viagensdatalita-friends-seriadofriends-FRIENDS-s-rie-netflix-seriado-warner-seriado-friends25anos.jpg?w=144",
  //   characters: ["Monica", "Rachel", "Phoebe", "Ross", "Chandler", "Joey"],
  //   genre: "Comédia",
  //   info: {
  //     seasons: "10 temporadas", 
  //     episodes: 236
  //   }
  // },
  // {
  //   id: 5,
  //   name: "Sex Education",
  //   image: "https://i.imgur.com/SFKFvfg.jpg",
  //   characters: ["Otis", "Eric", "Maeve"],
  //   genre: "Comédia",
  //   info: {
  //     seasons: "3 temporadas", 
  //     episodes: 24
  //   }
  // }
];

export default catalog;