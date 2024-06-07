import { Telefone } from "./telefone.model";
import { Endereco } from "./endereco.model";

export class Cliente {

    constructor(

        public id: number,
        public nomeRazao: string,
        public cpfCnpj: number,
        public iDInscEstadual: number,
        public apelidoNomeFant: string,
        public isFornecedor: boolean,
        public isTecnico: boolean,
        private isPj: boolean,
        public dataNascFund: Date,
        public telefonePrincipal: String,
        public telefones: Telefone[],
        public enderecos: Endereco[]
    ) {

    }

}