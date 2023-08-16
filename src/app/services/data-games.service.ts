import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DataGamesService {

  games: any[] = [
    {
      id: 1,
      gameName: "Cyberpunk 2077: PL",
      gameCover: "../../../assets/games/CyberPunk/cyberpunk2077.jpg",
      gameType: "DIGITAL | PS5 | PRÉ-ORDER",
      gamePrice: "R$ 159,99",
      description: "Phantom Liberty é uma nova aventura de suspense e espionagem para Cyberpunk 2077. Volte como V, mercenário com implantes cibernéticos, e embarque em uma missão perigosa de espionagem e intrigas para salvar a presidente dos Novos Estados Unidos. No perigoso distrito de Dogtown, você deve firmar alianças dentro de uma rede de traições e maquinações políticas sinistras. Você tem o que é preciso para sobreviver?",
      additional: "",
    },
    {
      id: 2,
      gameName: "Battlefield 2042",
      gameCover: "../../../assets/games/battlefield-2042/battlefield2042.webp",
      gameType: "DIGITAL | PS5",
      gamePrice: "R$ 199,99",
      description: "Battlefield 2042 nos apresenta um futuro próximo onde o mundo vivencia a maior crise de refugiados da história. Com os recursos naturais escassos, vários países já entraram em ruínas, enquanto Estados Unidos e Rússia travam uma luta pelo domínio dos materiais necessários para manutenção de suas nações. Com isso, os dois países recorrem a um novo tipo de soldados, denominados Apátridas, mercenários que não possuem bandeira e se adaptaram ao novo mundo lutando por qualquer que seja o lado. Os Apátridas se tratam como uma comunidade, com famílias, fazendeiros, engenheiros, mas também soldados. Assim, o jogo traz uma novidade ao se afastar, pelo menos um pouco, do campo militar das forças armadas tradicionais, ainda que reviva o clássico conflito de superpotências entre EUA e Rússia.",
      additional: "",
    },
    {
      id: 3,
      gameName: "The Last of Us Part II",
      gameCover: "../../../assets/games/tlous-2/tlou.png",
      gameType: "DIGITAL | PS4 | PS5",
      gamePrice: "R$ 299,99",
      description: "Após cinco anos de uma jornada perigosa pelos Estados Unidos onde uma epidemia destruiu a maior parte da civilização humana, Ellie e Joel conseguem se estabilizar em Wyoming, em uma comunidade de sobreviventes. Porém, um evento violento faz com que Ellie embarque em uma jornada para encontrar uma solução e fazer justiça. Enquanto busca os responsáveis, ela se confrontará com repercussões físicas e emocionais de suas ações. Criados pela versão mais recente do mecanismo da Naughty Dog, The Last of Us Part II chega para o PlayStation 4 com uma história emocionalmente complexa, que fará com que você vivencie os maiores conflitos morais criados por Ellie em sua implacável busca por vingança. Aventure-se em um mundo com personagens mais realistas e detalhados, com uma ampla variedade de armas, itens de criação, habilidades e atualizações que permitem que sejam personalizados de acordo com o seu estilo de jogo.",
      additional: "",
    },
    {
      id: 4,
      gameName: "Call of Duty MW",
      gameCover: "../../../assets/games/COD-MW/cod-mw.jpeg",
      gameType: "DIGITAL | PS3 | PS4 | PS5",
      gamePrice: "R$ 299,99",
      description: "",
      additional: "",
    },
    {
      id: 5,
      gameName: "God of War Ragnarok",
      gameCover: "../../../assets/games/gow-ragnarok/gow-rag.jpg",
      gameType: "DIGITAL | PS4 | PS5",
      gamePrice: "R$ 299,99",
      description: "",
      additional: "",
    },
    {
      id: 6,
      gameName: "Assassins Creed Valhalla",
      gameCover: "../../../assets/games/asc-valhalla/asc-valhalla.jpg",
      gameType: "DIGITAL | PS4 | PS5",
      gamePrice: "R$ 169,99",
      description: "",
      additional: "",
    },
    {
      id: 7,
      gameName: "Farcry 6",
      gameCover: "../../../assets/games/Farcry6/far-cry-6.jpg",
      gameType: "DIGITAL | PS4 | PS5",
      gamePrice: "R$ 169,99",
      description: "",
      additional: "",
    },
    {
      id: 8,
      gameName: "Hogwarts Legacy",
      gameCover: "../../../assets/games/Hogwarts/hogwarts.jfif",
      gameType: "DIGITAL | PS4 | PS5",
      gamePrice: "R$ 289,99",
      description: "",
      additional: "",
    },
    {
      id: 9,
      gameName: "Dying Light 2 Stay Human",
      gameCover: "../../../assets/games/dying-light2/dl2.jpg",
      gameType: "DIGITAL | PS4 | PS5",
      gamePrice: "R$ 169,99",
      description: "",
      additional: "",
    },
    {
      id: 10,
      gameName: "Resident Evil 4 Deluxe",
      gameCover: "../../../assets/games/resident4/rv-4.jpg",
      gameType: "DIGITAL | PS4 | PS5",
      gamePrice: "R$ 289,99",
      description: "",
      additional: "",

    },
    {
      id: 11,
      gameName: "Call of Duty WWII",
      gameCover: "../../../assets/games/COD-WWII/cod-wwii.jpg",
      gameType: "DIGITAL | PS4 | PS5",
      gamePrice: "R$ 169,99",
      description: "",
      additional: "",

    },
    {
      id: 12,
      gameName: "Day Z",
      gameCover: "../../../assets/games/DayZ/dayz.jpeg",
      gameType: "DIGITAL | PS4 | PS5",
      gamePrice: "R$ 169,99",
      description: "",
      additional: "",

    },
    {
      id: 13,
      gameName: "Battlefield 1",
      gameCover: "../../assets/games/battlefield-1/bt-1.jpg",
      gameType: "DIGITAL | PS4 | PS5",
      gamePrice: "R$ 269,99",
      description: "",
      additional: "",

    },
    {
      id: 14,
      gameName: "Battlefield 4",
      gameCover: "../../assets/games/battlefield-4/bt-4.jpg",
      gameType: "DIGITAL | PS4 | PS5",
      gamePrice: "R$ 199,99",
      description: "",
      additional: "",

    },
    {
      id: 15,
      gameName: "Dead Space",
      gameCover: "../../assets/games/Dead-Space/dead-spc.jpg",
      gameType: "DIGITAL | PS4 | PS5",
      gamePrice: "R$ 99,99",
      description: "",
      additional: "",

    },
    {
      id: 16,
      gameName: "Calisto",
      gameCover: "../../assets/games/Calisto/calisto.jpg",
      gameType: "DIGITAL | PS4 | PS5",
      gamePrice: "R$ 299,99",
      description: "",
      additional: "",

    },
    {
      id: 17,
      gameName: "Resident Evil Village",
      gameCover: "../../../assets/games/resident-village/re-village.jpg",
      gameType: "DIGITAL | PS4 | PS5",
      gamePrice: "R$ 169,99",
      description: "",
      additional: "",
    },
    {
      id: 18,
      gameName: "Diablo IV",
      gameCover: "../../../assets/games/diablo4/diablo-4.jpg",
      gameType: "DIGITAL | PS4 | PS5",
      gamePrice: "R$ 169,99",
      description: "",
      additional: "",
    },
  ]
  constructor() { }

  getGames(): Observable<any[]> {
    return of(this.games);
  }

  getGameById(id: number): any {
    return this.games.filter(games => games.id === id);
  }
}
