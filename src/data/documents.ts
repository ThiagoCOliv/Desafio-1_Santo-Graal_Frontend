import type { Document } from '../models/Document'

export const documents: Document[] = [
  {
    id: 'doc-1',
    title: 'Planejamento semanal',
    content:
      'Use este documento para planejar prioridades, reuniões e tarefas importantes da semana.',
    createdAt: 'Hoje',
  },
  {
    id: 'doc-2',
    title: 'Resumo do projeto',
    content:
      'Crie um resumo do escopo do projeto, entregáveis e próximos passos para compartilhar com a equipe.',
    createdAt: 'Ontem',
  },
  {
    id: 'doc-3',
    title: 'Notas do cliente',
    content:
      'Registre feedback, solicitações e ideias recebidas durante as conversas com o cliente.',
    createdAt: '2 dias atrás',
  },
]