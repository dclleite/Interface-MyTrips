export class Cidade{
    Id: number;
    Nome: string;
    Pais: string;

    constructor(id = 0, nome="", pais=""){
        this.Id = id;
        this.Nome = nome;
        this.Pais = pais;
    }
}