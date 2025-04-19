
# 🎉 Sistema de Gestão de Eventos — Teste Técnico Payxyz

> Projeto completo com **Back-End** em Node.js + Prisma + PostgreSQL e **Front-End** em React + TypeScript + Vite + Tailwind CSS.

![Badge](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Badge](https://img.shields.io/badge/License-MIT-blue)
![Badge](https://img.shields.io/badge/Feito%20com-❤️%20por%20Herberton%20Miguel-ff69b4)

---

## 🖼 Demonstração

<!-- Você pode colocar um GIF ou print aqui mostrando a aplicação rodando -->
> ![demo](./.github/demo.gif)

---

## 📦 Back-End

### 🔧 Configuração

1. Acesse a pasta do back-end:
   ```bash
   cd backend
   ```

2. Instale as dependências:
   ```bash
   yarn install
   ```

3. Crie o arquivo `.env` na raiz com o conteúdo abaixo:
   ```env
   DATABASE_URL="postgresql://postgres:admin@localhost:5432/testeTecnicoPayxyz?schema=public"
   ```

4. Configure o banco de dados:

   - Gere o cliente Prisma:
     ```bash
     npx prisma generate
     ```

   - Execute as migrações:
     ```bash
     npx prisma migrate dev --name init
     ```

5. Popule o banco de dados:
   ```bash
   # Use o arquivo seed.sql no pgAdmin ou via linha de comando
   ```

6. Inicie o servidor:
   ```bash
   yarn dev
   ```

---

## 💻 Front-End

### 🔧 Configuração

1. Acesse a pasta do front-end:
   ```bash
   cd frontend
   ```

2. Instale as dependências:
   ```bash
   yarn install
   ```

3. Inicie o ambiente de desenvolvimento:
   ```bash
   yarn dev
   ```

---

## 📌 Funcionalidades

- ✅ Listagem de eventos
- ✅ Participantes por evento
- ✅ Check-in e Check-out
- ✅ Estatísticas:
  - Total de check-ins
  - Total de check-outs
  - Participantes pendentes
  - Total geral de participantes

---

## ⚠️ Observações

- Certifique-se de que o PostgreSQL esteja rodando na porta correta (5432).
- Verifique as credenciais e o schema no `.env`.
- Mobile First com responsividade garantida.

---



