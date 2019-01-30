export class Game {
    constructor(
        public key: string,
        public text: string
        ){}
}
export class Card {
  constructor(
    public id: number,
    public name: string
  ) {
  }
  get value() {          // Getter only: don't allow value change
    return this.id;
  }

  getName() {          // Getter only: don't allow value change
    return this.name;
  }
}

export const allCards = [
  {id :1, name:  'in da troccas', order:1, color:'Color.TROCCAS', honor: false, score:5},
  {id :2, name:  'dus da troccas', order:2, color:' Color.TROCCAS', honor: false, score:1},
  {id :3, name:  'treis da troccas', order:3, color:' Color.TROCCAS', honor: false, score:1},
  {id :4, name:  'quatter da troccas', order:4, color:' Color.TROCCAS', honor: false, score:1},
  {id :5, name:  'tschun da troccas', order:5, color:' Color.TROCCAS', honor: false, score:1},
  {id :6, name:  'sis da troccas', order:6, color:' Color.TROCCAS', honor: false, score:1},
  {id :7, name:  'siat da troccas', order:7, color:' Color.TROCCAS', honor: false, score:1},
  {id :8, name:  'otg da troccas', order:8, color:' Color.TROCCAS', honor: false, score:1},
  {id :9, name:  'nov da troccas', order:9, color:' Color.TROCCAS', honor: false, score:1},
  {id :10, name:  'diesch da troccas', order:10, color:' Color.TROCCAS', honor: false, score:1},
  {id :11, name:  'endisch da troccas', order:11, color:' Color.TROCCAS', honor: false, score:1},
  {id :12, name:  'dudisch da troccas', order:12, color:' Color.TROCCAS', honor: false, score:1},
  {id :13, name:  'tredisch da troccas', order:13, color:' Color.TROCCAS', honor: false, score:1},
  {id :14, name:  'quitordisch da troccas', order:14, color:' Color.TROCCAS', honor: false, score:1},
  {id :15, name:  'quendisch da troccas', order:15, color:' Color.TROCCAS', honor: false, score:1},
  {id :16, name:  'sesdisch da troccas', order:16, color:' Color.TROCCAS', honor: false, score:1},
  {id :17, name:  'gissiat da troccas', order:17, color:' Color.TROCCAS', honor: false, score:1},
  {id :18, name:  'schotg da troccas', order:18, color:' Color.TROCCAS', honor: false, score:1},
  {id :19, name:  'scheniv da troccas', order:19, color:' Color.TROCCAS', honor: false, score:1},
  {id :20, name:  'vegn da troccas', order:20, color:' Color.TROCCAS', honor: false, score:1},
  {id :21, name:  'vegntgin da troccas', order:21, color:' Color.TROCCAS', honor: false, score:5},
  {id :22, name:  'narr', order:0, color:' Color.NARR', honor: false, score:5},
  {id :23, name:  'in da bastuns', order:1, color:' Color.BASTUNS', honor: false, score:1},
  {id :24, name:  'dus da bastuns', order:2, color:' Color.BASTUNS', honor: false, score:1},
  {id :25, name:  'treis da bastuns', order:3, color:' Color.BASTUNS', honor: false, score:1},
  {id :26, name:  'quatter da bastuns', order:4, color:' Color.BASTUNS', honor: false, score:1},
  {id :27, name:  'tschun da bastuns', order:5, color:' Color.BASTUNS', honor: false, score:1},
  {id :28, name:  'sis da bastuns', order:6, color:' Color.BASTUNS', honor: false, score:1},
  {id :29, name:  'siat da bastuns', order:7, color:' Color.BASTUNS', honor: false, score:1},
  {id :30, name:  'otg da bastuns', order:8, color:' Color.BASTUNS', honor: false, score:1},
  {id :31, name:  'nov da bastuns', order:9, color:' Color.BASTUNS', honor: false, score:1},
  {id :32, name:  'diesch da bastuns', order:10, color:' Color.BASTUNS', honor: false, score:1},
  {id :33, name:  'buob da bastuns', order:11, color:' Color.BASTUNS', honor: true, score:2},
  {id :34, name:  'cavagl da bastuns', order:12, color:' Color.BASTUNS', honor: true, score:3},
  {id :35, name:  'regina da bastuns', order:13, color:' Color.BASTUNS', honor: true, score:4},
  {id :36, name:  'retg da bastuns', order:14, color:' Color.BASTUNS', honor: true, score:5},
  {id :37, name:  'in da spadas', order:1, color:' Color.SPADAS', honor: false, score:1},
  {id :38, name:  'dus da spadas', order:2, color:' Color.SPADAS', honor: false, score:1},
  {id :39, name:  'treis da spadas', order:3, color:' Color.SPADAS', honor: false, score:1},
  {id :40, name:  'quatter da spadas', order:4, color:' Color.SPADAS', honor: false, score:1},
  {id :41, name:  'tschun da spadas', order:5, color:' Color.SPADAS', honor: false, score:1},
  {id :42, name:  'sis da spadas', order:6, color:' Color.SPADAS', honor: false, score:1},
  {id :43, name:  'siat da spadas', order:7, color:' Color.SPADAS', honor: false, score:1},
  {id :44, name:  'otg da spadas', order:8, color:' Color.SPADAS', honor: false, score:1},
  {id :45, name:  'nov da spadas', order:9, color:' Color.SPADAS', honor: false, score:1},
  {id :46, name:  'diesch da spadas', order:10, color:' Color.SPADAS', honor: false, score:1},
  {id :47, name:  'buob da spadas', order:11, color:' Color.SPADAS', honor: true, score:2},
  {id :48, name:  'cavagl da spadas', order:12, color:' Color.SPADAS', honor: true, score:3},
  {id :49, name:  'regina da spadas', order:13, color:' Color.SPADAS', honor: true, score:4},
  {id :50, name:  'retg da spadas', order:14, color:' Color.SPADAS', honor: true, score:5},
  {id :51, name:  'in da cuppas', order:10, color:' Color.CUPPAS', honor: false, score:1},
  {id :52, name:  'dus da cuppas', order:9, color:' Color.CUPPAS', honor: false, score:1},
  {id :53, name:  'treis da cuppas', order:8, color:' Color.CUPPAS', honor: false, score:1},
  {id :54, name:  'quatter da cuppas', order:7, color:' Color.CUPPAS', honor: false, score:1},
  {id :55, name:  'tschun da cuppas', order:6, color:' Color.CUPPAS', honor: false, score:1},
  {id :56, name:  'sis da cuppas', order:5, color:' Color.CUPPAS', honor: false, score:1},
  {id :57, name:  'siat da cuppas', order:4, color:' Color.CUPPAS', honor: false, score:1},
  {id :58, name:  'otg da cuppas', order:3, color:' Color.CUPPAS', honor: false, score:1},
  {id :59, name:  'nov da cuppas', order:2, color:' Color.CUPPAS', honor: false, score:1},
  {id :60, name:  'diesch da cuppas', order:1, color:' Color.CUPPAS', honor: false, score:1},
  {id :61, name:  'buob da cuppas', order:11, color:' Color.CUPPAS', honor: true, score:2},
  {id :62, name:  'cavagl da cuppas', order:12, color:' Color.CUPPAS', honor: true, score:3},
  {id :63, name:  'regina da cuppas', order:13, color:' Color.CUPPAS', honor: true, score:4},
  {id :64, name:  'retg da cuppas', order:14, color:' Color.CUPPAS', honor: true, score:5},
  {id :65, name:  'in da rosas', order:10, color:' Color.ROSAS', honor: false, score:1},
  {id :66, name:  'dus da rosas', order:9, color:' Color.ROSAS', honor: false, score:1},
  {id :67, name:  'treis da rosas', order:8, color:' Color.ROSAS', honor: false, score:1},
  {id :68, name:  'quatter da rosas', order:7, color:' Color.ROSAS', honor: false, score:1},
  {id :69, name:  'tschun da rosas', order:6, color:' Color.ROSAS', honor: false, score:1},
  {id :70, name:  'sis da rosas', order:5, color:' Color.ROSAS', honor: false, score:1},
  {id :71, name:  'siat da rosas', order:4, color:' Color.ROSAS', honor: false, score:1},
  {id :72, name:  'otg da rosas', order:3, color:' Color.ROSAS', honor: false, score:1},
  {id :73, name:  'nov da rosas', order:2, color:' Color.ROSAS', honor: false, score:1},
  {id :74, name:  'diesch da rosas', order:1, color:' Color.ROSAS', honor: false, score:1},
  {id :75, name:  'buob da rosas', order:11, color:' Color.ROSAS', honor: true, score:2},
  {id :76, name:  'cavagl da rosas', order:12, color:' Color.ROSAS', honor: true, score:3},
  {id :77, name:  'regina da rosas', order:13, color:' Color.ROSAS', honor: true, score:4},
  {id :78, name:  'retg da rosas', order:14, color:' Color.ROSAS', honor: true, score:5}
];





