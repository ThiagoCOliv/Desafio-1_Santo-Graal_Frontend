import type { Document } from '../models/Document'

export const documents: Document[] = [
  {
    id: 'doc-1',
    title: 'Planejamento semanal',
    content: [
      {
        title: 'Objetivos da semana',
        content:
          'Use este documento para planejar prioridades, reuniões e tarefas importantes da semana.',
        finished: true,
        comments: [],
      },
    ],
    createdAt: 'Hoje',
  },
  {
    id: 'doc-2',
    title: 'Resumo do projeto',
    content: [
      {
        title: 'Escopo do projeto',
        content:
          'Crie um resumo do escopo do projeto, entregáveis e próximos passos para compartilhar com a equipe.',
        finished: false,
        comments: [
          {
            author: 'Sistema',
            text: 'conteúdo precisa ser colocado',
            time: 'agora',
          },
        ],
      },
    ],
    createdAt: 'Ontem',
  },
  {
    id: 'doc-3',
    title: 'Notas do cliente',
    content: [
      {
        title: 'Feedback do cliente',
        content:
          'Registre feedback, solicitações e ideias recebidas durante as conversas com o cliente.',
        finished: false,
        comments: [],
      },
    ],
    createdAt: '2 dias atrás',
  },
]