export class Hotel{
    Id: number;
    Nome: string;
    Endereco: string;
    Preco: number;
    Classificacao: number;
    Descricao: string;
    Imagem: string;
    IdCidade: number;
    NomeCidade: string;
    PaisCidade: string;

    constructor(id = 0){
        this.Id = id;
    }
}