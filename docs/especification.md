# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Daniel, 22 anos,
normalmente é quem sempre chama seus amigos para se reunirem, buscando uma solução para mais comodidade nesse processo ele encontrou a “Reserva Online” que facilita a organização do seu evento, proporcionando tranquilidade e evitando imprevistos.

Pedro, 26 anos, 
adora explorar restaurantes por onde viaja, o "Reservas online" é o ideal para ela pois permite experimentar uma diversidade de  restaurantes de acordo com a sua região geográfica sem ter a preocupação de existir vagas disponíveis ou não, sendo possível realizar sua reserva de mesa online.


Clara, tem 32 anos, 
está sempre com a agenda lotada e adora a comodidade de reservar mesa em restaurante. Clara concentra-se na facilidade e rapidez do processo para evitar perda de tempo, sendo assim o "Reservas online" a solução ideal para ela  já que consegue realizar reservas em restaurantes com apenas alguns cliques poupando seu tempo e oferecendo conforto.



## Histórias de Usuários

Beto
No meio de uma viagem, Beto deseja experimentar a culinária local, mas sem conhecimento da região, ele descobre o "Reservas Online". Explorando a plataforma, ele não só conheceu os restaurantes da área, mas também deu uma olhada nos cardápios. Com a facilidade do serviço, Beto realiza uma reserva de mesa, garantindo uma experiência gastronômica sem contratempos e descobrindo sabores autênticos na sua jornada.


Rafaela
Proprietária de um restaurante, sempre enfrentou desafios na comunicação com seus clientes. Com o Reservas Online, não apenas criou uma página personalizada para seu estabelecimento, mas também apresentou seu cardápio de forma acessível. Agora, os clientes podem reservar mesas com facilidade, proporcionando não apenas uma experiência mais conveniente, mas também fortalecendo a conexão entre Rafaela e seus frequentadores, transformando seu restaurante em um local acolhedor e moderno.


Márcio
Dono de um restaurante, aos 40 anos, enfrentava problemas devido às filas nos horários de pico. Ao descobrir o serviço de “Reservas Online”, cadastrou seu estabelecimento. Agora, seus clientes podiam reservar mesas e consultar o cardápio antes da visita, eliminando as esperas e proporcionando uma experiência mais fluida. A eficiência resultante não só melhorou a satisfação dos clientes, mas também atraiu novos frequentadores, consolidando o sucesso do restaurante de Márcio.


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito                                                          | Prioridade     | Responsável |
|------|---------------------------------------------------------------------------------|------|---------|
|RF-001| Cadastro de um usuário Cliente                                                  | ALTA |         |
|RF-002| Cadastro de um usuário Restaurante                                              | ALTA |         |
|RF-003| Cliente pode consultar disponibilidade de mesas e realizar sua reserva          | ALTA |         |
|RF-004| Cardápio online, o qual o Restaurante pode adicionar fotos, descrições e preços | MÉDIA |        |
|RF-005| Sistema de pagamentos                                                           | BAIXA|         |


### Requisitos não Funcionais

|ID     | Descrição do Requisito                                                                                                             |Prioridade |
|-------|-------------------------------------------------------------------------------------------------------------------------------------|-------|
|RNF-001| Processar as requisições dos usuários em no máximo 7 segundos                                                                       | ALTA | 
|RNF-002| O sistema deve rodar primordialmente em dispositivos móveis, sendo responsivo, equitativo e usável                                  | ALTA | 
|RNF-003| O Cliente pode optar fazer um pedido, o qual ficará ao seu critério se será uma entrega ou retirada no Restaurante                  | ALTA |
|RNF-004| Perfil de Restaurante, o qual permite inserir foto/logo, descrição e avaliação dos Clientes                                         | MÉDIA |
|RNF-005| O sistema deve mostrar aos clientes um calendário de reservas, mostrando todas que ele tem naquele mês, e deve ser notificado       | MÉDIA |
          sempre que possuir reservas no dia atual
|RNF-006| O sistema deve ser capaz de interpretar entradas específicas com o objetivo de realizar impressões de dois tipos de fichas (1 e 2). | MÉDIA |
          Onde a ficha 1 é prioridade e a ficha 2 é comum, ambas devem conter o número da mesa e a posição na fila de espera (se houver)      
|RNF-007| Deve existir um chat entre Cliente-Restaurante para possíveis dúvidas                                                               | BAIXA |
|RNF-008| Os usuários podem escolher entre fazer o login com o cadastro do próprio site, gmail ou  facebook                                   | BAIXA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O projeto deverá ser feito em html, css e JavaScript  
