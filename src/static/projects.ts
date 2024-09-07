export type ProjectDetails = {
	title: string;
	name: string;
	summary: string;
	topics: Topic[];
	images: string[];
	url: string;
};

type Topic = {
	title: string;
	text: string;
};

export const projects: ProjectDetails[] = [
	{
		title: "Sicoob",
		name: "sicoob",
		summary: "Área de Negócios / Operações Bancárias",
		topics: [
			{
				title: "Principais atribuições",
				text: "",
			},
			{
				title: "",
				text: "- Apoio ao atendimento ao cliente, como venda e prestação de serviços da cooperativa.",
			},
			{
				title: "",
				text: "- Auxílio em tarefas administrativas, como abertura e fechamento de contas, análises de pagamentos e controle de contas, desconto de duplicatas e de cheques.",
			},
			{
				title: "",
				text: "- Apoio no desenvolvimento de relacionamento com grandes clientes, cooperados e parceiros.",
			},
			{
				title: "",
				text: "- Responsável por melhorar a performance e qualidade dos processos internos.",
			},
			{
				title: "",
				text: "- Colaboração em projetos da área de negócios.",
			},
			{
				title: "",
				text: "- Participação em projetos de voluntariado e organização de eventos.",
			},
		],
		images: [],
		url: "",
	},
	{
		title: "Guedes Shopping",
		name: "guedes-shopping",
		summary: "Assistente Administrativo",
		topics: [
			{
				title: "Principais atribuições",
				text: "",
			},
			{
				title: "",
				text: "- Atendimento ao cliente.",
			},
			{
				title: "",
				text: "- Organização e controle de documentos, assim como do setor financeiro.",
			},
			{
				title: "",
				text: "- Contato com fornecedores, sendo responsável pelo recebimento e gerenciamento da logística dos produtos.",
			},
			{
				title: "",
				text: "- Elaboração de planilhas de controle interno.",
			},
			{
				title: "",
				text: "- Controle de contas a pagar, a receber e recebíveis.",
			},
			{
				title: "",
				text: "- Suporte às equipes administrativas de todos os setores.",
			},
			{
				title: "",
				text: "- Digitação, revisão e emissão de documentos, e-mails e notas fiscais.",
			},
		],
		images: [],
		url: "",
	},
	{
		title: "SESC",
		name: "sesc",
		summary: "Assistente Administrativo",
		topics: [
			{
				title: "Principais atribuições",
				text: "",
			},
			{
				title: "",
				text: "- Responsável pelo atendimento ao cliente, via telefone, e-mail e WhatsApp.",
			},
			{
				title: "",
				text: "- Encarregada do controle e organização de documentos.",
			},
			{
				title: "",
				text: "- Responsável pela atualização de cadastros.",
			},
			{
				title: "",
				text: "- Fornecimento de suporte direto à equipe administrativa.",
			},
		],
		images: [],
		url: "",
	},
];
