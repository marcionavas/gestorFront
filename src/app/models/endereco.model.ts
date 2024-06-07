export class Endereco {
    constructor(
        public id: number,
        public endereco: string,
        public complemento: string,
        public cep: string,
        public cidade: string,
        public uf: string,
        public sobre: string,
        public principal: boolean
    ) {

    }

}