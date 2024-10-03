import { Produto } from "@/core";
import Tag from "../shared/Tag";
import { IconTag } from "@tabler/icons-react";

export interface EspesificacoesProps {
    produto: Produto
}

export default function Especificacoes(props: EspesificacoesProps) {
    const { produto } = props;

    return produto ? (
        <div className="flex-1 flex flex-col gap-1">
            <div className="flex mb-3">
                <Tag label={produto.especificacoes.destaque} icone={IconTag} outlined />
            </div>
            {produto.especificacoes &&
                Object.keys(produto.especificacoes)
                    .filter(key => key !== 'destaque')
                    .map((chave) => (
                        <div key={chave} className="flex gap-1">
                            <span className="p-2 w-1/3 bg-white/5 rounded">{chave}</span>
                            <span className="p-2 w-1/3 bg-white/5 rounded">{produto.especificacoes[chave]}</span>
                        </div>
                    ))
            }
        </div>) : null
}