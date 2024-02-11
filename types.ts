let a: number = 5;
let b: string = 'a';
let c: boolean = true;
let d: any;
let e: number [] = [1, 2, 3];
let f: Array<number> = [1, 2, 3];
let g: any[] = [1, 'a', true];
let h: [string, number, boolean] = ['a', 5, false]; //tuple

enum Odeme {kredi = 0, havale = 1, EFT = 2, kapidaOdeme=3};

let kredi = Odeme.kredi; // 0
let havale = Odeme.havale; // 1
let EFT =  Odeme.EFT; // 2
let kapidaodeme = Odeme.kapidaOdeme; // 3