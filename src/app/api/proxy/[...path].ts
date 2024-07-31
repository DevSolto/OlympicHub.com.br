import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { pathname } = new URL(request.url);

  // Remover o prefixo '/api/proxy' do caminho
  const apiPath = pathname.replace('/api/proxy', '');

  // Construa a URL completa da API de terceiros
  const apiUrl = `https://apis.codante.io/olympic-games${apiPath}`;

  try {
    // Faça a requisição à API de terceiros
    const response = await fetch(apiUrl);

    // Verifique se a resposta é válida
    if (!response.ok) {
      return NextResponse.error();
    }

    // Obtenha os dados da resposta
    const data = await response.json();

    // Retorne os dados para o cliente
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    return NextResponse.error();
  }
}
