INSERT INTO "Eventos" (nome, data, "horaInicio", "horaFim", local, capacidade) VALUES
('Evento Exemplo', '2024-05-10', '2024-05-10 09:00:00', '2024-05-10 18:00:00', 'Sala de Demonstração', 10),
('Conferência de Tecnologia', '2024-05-15', '2024-05-15 09:00:00', '2024-05-15 18:00:00', 'Centro de Convenções', 100);

-- Inserindo participantes para o Evento Exemplo
INSERT INTO "Participantes" (nome, email, telefone, "eventoId") VALUES
('João Silva', 'joao@email.com', '(11) 99999-1111', 1),
('Maria Santos', 'maria@email.com', '(11) 99999-2222', 1),
('Pedro Oliveira', 'pedro@email.com', '(11) 99999-3333', 1),
('Ana Costa', 'ana@email.com', '(11) 99999-4444', 1),
('Carlos Pereira', 'carlos@email.com', '(11) 99999-5555', 1);

-- Inserindo check-ins para o Evento Exemplo
INSERT INTO "Checkins" ("participanteId", "eventoId", "horaEntrada", status) VALUES
(1, 1, '2024-05-10 08:45:00', 'presente'),
(2, 1, '2024-05-10 09:10:00', 'presente'),
(3, 1, '2024-05-10 09:30:00', 'presente'),
(4, 1, '2024-05-10 10:00:00', 'presente'),
(5, 1, '2024-05-10 10:15:00', 'presente');

-- Adicionando saídas no Evento Exemplo
UPDATE "Checkins" SET "horaSaida" = '2024-05-10 12:00:00', status = 'saiu' WHERE "participanteId" = 1;
UPDATE "Checkins" SET "horaSaida" = '2024-05-10 12:30:00', status = 'saiu' WHERE "participanteId" = 2;

-- Inserindo participantes para a Conferência de Tecnologia (80 participantes)
INSERT INTO "Participantes" (nome, email, telefone, "eventoId") VALUES
('Mariana Costa', 'mariana@email.com', '(11) 98888-1111', 2),
('Ricardo Silva', 'ricardo@email.com', '(11) 98888-2222', 2),
('Beatriz Santos', 'beatriz@email.com', '(11) 98888-3333', 2),
('Gustavo Oliveira', 'gustavo@email.com', '(11) 98888-4444', 2),
('Camila Lima', 'camila@email.com', '(11) 98888-5555', 2),
('Daniel Pereira', 'daniel@email.com', '(11) 98888-6666', 2),
('Isabela Souza', 'isabela@email.com', '(11) 98888-7777', 2),
('Thiago Alves', 'thiago@email.com', '(11) 98888-8888', 2),
('Laura Santos', 'laura@email.com', '(11) 98888-9999', 2),
('Felipe Oliveira', 'felipe@email.com', '(11) 98888-0000', 2),
('Amanda Costa', 'amanda@email.com', '(11) 97777-1111', 2),
('Bruno Silva', 'bruno@email.com', '(11) 97777-2222', 2),
('Carolina Santos', 'carolina@email.com', '(11) 97777-3333', 2),
('Diego Oliveira', 'diego@email.com', '(11) 97777-4444', 2),
('Eduarda Lima', 'eduarda@email.com', '(11) 97777-5555', 2),
('Fábio Pereira', 'fabio@email.com', '(11) 97777-6666', 2),
('Gabriela Souza', 'gabriela@email.com', '(11) 97777-7777', 2),
('Henrique Alves', 'henrique@email.com', '(11) 97777-8888', 2),
('Iara Santos', 'iara@email.com', '(11) 97777-9999', 2),
('Jorge Oliveira', 'jorge@email.com', '(11) 97777-0000', 2),
('Larissa Costa', 'larissa@email.com', '(11) 96666-1111', 2),
('Marcelo Silva', 'marcelo@email.com', '(11) 96666-2222', 2),
('Natália Santos', 'natalia@email.com', '(11) 96666-3333', 2),
('Otávio Oliveira', 'otavio@email.com', '(11) 96666-4444', 2),
('Patrícia Lima', 'patricia@email.com', '(11) 96666-5555', 2),
('Rafael Pereira', 'rafael@email.com', '(11) 96666-6666', 2),
('Sandra Souza', 'sandra@email.com', '(11) 96666-7777', 2),
('Tiago Alves', 'tiago@email.com', '(11) 96666-8888', 2),
('Vanessa Santos', 'vanessa@email.com', '(11) 96666-9999', 2),
('Wagner Oliveira', 'wagner@email.com', '(11) 96666-0000', 2),
('Yasmin Costa', 'yasmin@email.com', '(11) 95555-1111', 2),
('Zeca Silva', 'zeca@email.com', '(11) 95555-2222', 2),
('Alice Santos', 'alice@email.com', '(11) 95555-3333', 2),
('Bernardo Oliveira', 'bernardo@email.com', '(11) 95555-4444', 2),
('Clara Lima', 'clara@email.com', '(11) 95555-5555', 2),
('Davi Pereira', 'davi@email.com', '(11) 95555-6666', 2),
('Ester Souza', 'ester@email.com', '(11) 95555-7777', 2),
('Fernando Alves', 'fernando@email.com', '(11) 95555-8888', 2),
('Giovanna Santos', 'giovanna@email.com', '(11) 95555-9999', 2),
('Heitor Oliveira', 'heitor@email.com', '(11) 95555-0000', 2),
('Isabela Costa', 'isabela@email.com', '(11) 94444-1111', 2),
('João Silva', 'joao@email.com', '(11) 94444-2222', 2),
('Karla Santos', 'karla@email.com', '(11) 94444-3333', 2),
('Leonardo Oliveira', 'leonardo@email.com', '(11) 94444-4444', 2),
('Marina Lima', 'marina@email.com', '(11) 94444-5555', 2),
('Nicolas Pereira', 'nicolas@email.com', '(11) 94444-6666', 2),
('Olívia Souza', 'olivia@email.com', '(11) 94444-7777', 2),
('Paulo Alves', 'paulo@email.com', '(11) 94444-8888', 2),
('Quiteria Santos', 'quiteria@email.com', '(11) 94444-9999', 2),
('Rogério Oliveira', 'rogerio@email.com', '(11) 94444-0000', 2),
('Sofia Costa', 'sofia@email.com', '(11) 93333-1111', 2),
('Thales Silva', 'thales@email.com', '(11) 93333-2222', 2),
('Úrsula Santos', 'ursula@email.com', '(11) 93333-3333', 2),
('Vitor Oliveira', 'vitor@email.com', '(11) 93333-4444', 2),
('Wanessa Lima', 'wanessa@email.com', '(11) 93333-5555', 2),
('Xavier Pereira', 'xavier@email.com', '(11) 93333-6666', 2),
('Yara Souza', 'yara@email.com', '(11) 93333-7777', 2),
('Zélia Alves', 'zelia@email.com', '(11) 93333-8888', 2),
('Adriana Santos', 'adriana@email.com', '(11) 93333-9999', 2),
('Bruno Oliveira', 'bruno@email.com', '(11) 93333-0000', 2),
('Carla Costa', 'carla@email.com', '(11) 92222-1111', 2),
('Daniel Silva', 'daniel@email.com', '(11) 92222-2222', 2),
('Elaine Santos', 'elaine@email.com', '(11) 92222-3333', 2),
('Fábio Oliveira', 'fabio@email.com', '(11) 92222-4444', 2),
('Gabriela Lima', 'gabriela@email.com', '(11) 92222-5555', 2),
('Henrique Pereira', 'henrique@email.com', '(11) 92222-6666', 2),
('Isadora Souza', 'isadora@email.com', '(11) 92222-7777', 2),
('Júlio Alves', 'julio@email.com', '(11) 92222-8888', 2),
('Karina Santos', 'karina@email.com', '(11) 92222-9999', 2),
('Lucas Oliveira', 'lucas@email.com', '(11) 92222-0000', 2),
('Mariana Costa', 'mariana@email.com', '(11) 91111-1111', 2),
('Nelson Silva', 'nelson@email.com', '(11) 91111-2222', 2),
('Olga Santos', 'olga@email.com', '(11) 91111-3333', 2),
('Paulo Oliveira', 'paulo@email.com', '(11) 91111-4444', 2),
('Quiteria Lima', 'quiteria@email.com', '(11) 91111-5555', 2),
('Rafael Pereira', 'rafael@email.com', '(11) 91111-6666', 2),
('Sandra Souza', 'sandra@email.com', '(11) 91111-7777', 2),
('Thiago Alves', 'thiago@email.com', '(11) 91111-8888', 2),
('Úrsula Santos', 'ursula@email.com', '(11) 91111-9999', 2),
('Vitor Oliveira', 'vitor@email.com', '(11) 91111-0000', 2),
('Wanessa Costa', 'wanessa@email.com', '(11) 90000-1111', 2),
('Xavier Silva', 'xavier@email.com', '(11) 90000-2222', 2),
('Yara Santos', 'yara@email.com', '(11) 90000-3333', 2),
('Zélia Oliveira', 'zelia@email.com', '(11) 90000-4444', 2),
('Adriana Lima', 'adriana@email.com', '(11) 90000-5555', 2),
('Bruno Pereira', 'bruno@email.com', '(11) 90000-6666', 2),
('Carla Souza', 'carla@email.com', '(11) 90000-7777', 2),
('Daniel Alves', 'daniel@email.com', '(11) 90000-8888', 2),
('Elaine Santos', 'elaine@email.com', '(11) 90000-9999', 2),
('Fábio Oliveira', 'fabio@email.com', '(11) 90000-0000', 2);