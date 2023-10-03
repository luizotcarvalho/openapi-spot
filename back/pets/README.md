# OpenAPI Single Source Of Truth

## Motivação

Hoje não temos uma forma de garantir a coesão de dados entre backend, frontend e mock, o que pode ocasionar bugs e diminuir a velocidade de desenvolvimento.
Ao utilizar o padrão [OpenAPI](https://www.openapis.org/) para documentar nossos endpoints conseguimos também fazer uso de ferramentas específicas para gerar código e validar dados afim de garantir que todas as camadas da aplicação estão em sincronia, veja algumas da funcionalidades que conseguimos alcançar com essas ferramentas:

### Backend
- Validação de request e response com [openapi-core](https://github.com/python-openapi/openapi-core);

### Frontend
- Geração automática de tipos a partir do openapi com [openapi-typescript](https://github.com/drwpow/openapi-typescript);
- Inferência de tipo em toda aplicação;

### Servidor mock
- Validação de request e response com [@oas-tools/core](https://oas-tools.github.io/);
- Métodos implementam paths do openapi;
- Server de verdade com [express](https://expressjs.com/);

### Testes
- Teste automatizado com [schemathesis](https://github.com/schemathesis/schemathesis);


## Instruções

### Backend
Na pasta `back` rode `pip install -r requirements.txt` para instalar todas as depêndencias e depois `python manage.py runserver` para iniciar o backend, qualquer alteração no `api.yaml` irá reiniciar o servidor automaticamente.

### Frontend
Na pasta `front` rode `npm install` para instalar todas as depêndencias, `npm run dev` para subir a aplicação e `npm run watch` para observar mudanças no `api.yaml` e gerar os tipos automaticamente.

### Servidor mock
Na pasta `mock` rode `npm install` para instalar todas as depêndencias e depois `npm run watch` para subir o servidor mock, qualquer alteração no `api.yaml` irá reiniciar o servidor automaticamente.

### Testes
Na raiz rode `pip install schemathesis` e depois `st run api.yaml --base-url http://localhost:PORT` com a porta correta do servidor que deseja testar (mock: `3000`, real: `8000`)