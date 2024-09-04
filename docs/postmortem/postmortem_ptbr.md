5.000 / 5.000
# Squad8 Postmortem: uma breve análise sobre falhas e teorias sobre como evitar falhar duas vezes da mesma forma.

## Resumo do problema
O Squad 8 falhou em entregar um produto satisfatório.

Ao falhar em lidar com as restrições de tempo e retornar ao trabalho no projeto após o fim da greve da universidade, o squad 8 da disciplina MDS não conseguiu
alcançar os resultados desejados para este software: um aplicativo de aluguel funcional e completo, capaz de conectar, receber e enviar informações para um banco de dados.

## Linha do tempo
> **22/03/24 :** O Squad foi formado, com os seguintes membros: Bruno, João, Pedro, Renan e Ryan.
>
> **28/03/24 :** Foi decidido que o Squad tentaria desenvolver um aplicativo de aluguel.
>
> **01/04/24 :** A arquitetura básica e os requisitos foram levantados. Muito mais tarde descobriríamos que essa arquitetura era falha, a API deveria conter também o
webscrapper. Também dividimos as pilhas e tarefas entre os membros, primeiro focando em aprender as principais tecnologias que seriam usadas ao longo do projeto. a API também nunca chegou perto de ser implementada adequadamente nem completamente ou vagamente compreendida.
>
> **02/04/24 :** As escolhas de tecnologia iniciais foram selecionadas nesse dia. Apesar da falta de experiência com os membros para desenvolvimento web com nodeJS, por popularidade na indústria, foi a linguagem selecionada, juntamente com as frameworks React e Express para, respectivamente, o frontend e o backend. A escolha inicial do banco de dados seria o postgreSQL, mas foi posteriormente alterada para o MySQL, dado que o MySQL é o padrão que é ensinado dentro da nossa instituição.
>
> **04/04/24 :** O Github Actions foi implementado pela primeira vez neste dia. Um ticket informal para implementar isso foi postado no WhatsApp. Isso fornece o primeiro insight sobre o que deu errado. Levaria 4 meses até uma implementação mais adequada, pois não havia urgência, já que isso era encarado como um aspecto opcional do projeto.
>
> **06/04/24 :** Um dos engenheiros encarregados de desenvolver a API aprendeu HTML, o que consumiu um tempo precioso para aprender tecnologias de API. Mesmo assim, isso ajudaria mais tarde, pois o engenheiro encarregado de construir o front-end deixaria o projeto mais tarde.
>
> **08/04/24 :** A greve da universidade foi anunciada. Neste ponto, a maior parte do projeto ainda estava em seus primeiros passos, mas ainda tinha possibilidade de ser finalizada. No entanto, a greve e a decisão do esquadrão de trabalhar somente quando a greve terminasse findaria sendo uma péssima ideia.
>
> **26/04/24 :** A primeira versão do frontend foi finalizada. Embora ainda bastante rudimentar, foi um bom começo e teoricamente teriamos tempo para finalizá-la.
>
> **07/05/24 :** Chegou ao conhecimento do esquadrão que nenhuma outra apresentação ocorreria até que a greve chegasse ao fim. A maioria das alterações no projeto base foi feita durante este período.
>
> **17/05/24 :** O engenheiro líder do frontend deixou o projeto. Sem mais ninguém totalmente capaz de trabalhar com HTML e entender os designs, este foi o primeiro prego no caixão. Como a maioria das outras disciplinas estavam lançando seus projetos e testes finais durante o período seguinte, o restante dos membros sentiu mais urgência em se concentrar nas disciplinas ativas. Com raras exceções, nenhuma reunião foi realizada durante esse período.
>
> **01/07/24 :** Depois que a greve finalmente acabou, os scripts do banco de dados foram concluídos, mas o esquadrão não tinha ideia de como usar ou conectar o banco de dados, junto com a maioria das ideias de como construir a API, que dependia do banco de dados para suas operações. Isso colocaria outro prego no caixão.
>
> **15/07/24 :** O esquadrão decidiu se reunir três vezes por semana para compensar o tempo perdido no vazio da greve. Embora inicialmente tenha funcionado como pretendido, forçando os engenheiros a interagir e mostrar precisamente o que estava sendo feito e o que não estava, o plano acabou fracassando. Os engenheiros não conseguiram acompanhar as reuniões nem o ritmo de desenvolvimento necessário para consertar o produto a tempo para entrega. Fora a implementação do framework React para o front-end, até o prazo final, nenhuma grande mudança foi feita no projeto principal. Ele estagnou completamente.
>
> **31/07/24 :** A fusão do branch react no principal foi a última grande mudança feita no projeto e foi feita nesse dia.
>
> **02/08/24 :** Um pouco de funcionamento do CI foi finalmente colocado no principal. Ao mesmo tempo, metade da equipe se sentiu excluída do trabalho e alienada do projeto.
>
> **09/08/24 :** Depois de pedir ajuda a nossa mentora, um esforço foi colocado em movimento para reintegrar essa metade novamente ao projeto. Embora isso tenha se mostrado tarde demais, pois a metade integrada já estava esgotada.
>
> **15/08/24 :** Um dos principais engenheiros do React decidiu deixar o projeto. Este foi o último prego no caixão.

## Causa raiz
Uma nítida falta de urgência, organização, força de trabalho, comunicação e conhecimento de know-how fez com que este projeto fosse enterrado. Utilizaremos o sistema "5 Why's" para identificar a causa raiz.

**1. Por que não havia urgência?** - Os cronogramas mudavam constantemente, o que tornava difícil prever quando exatamente o esquadrão deveria focar no projeto ou relaxar e focar em outras matérias. 

**2. Por que não havia organização?** - Com a greve durando dois meses, passou tempo suficiente sem trabalho e prática para que a maioria dos membros
perdesse o domínio sobre a tecnologia utilizada, forçando o esquadrão a reaprender. Isso levou à frustração e à eventual perda de
outro membro devido ao progresso lento e nenhuma esperança de entregar o produto com sucesso.

**3. Por que não havia força de trabalho?** - Já sendo um dos esquadrões menores, a perda do primeiro engenheiro forçou outros a aprender HTML e CSS
do zero, o que provou ser um ponto único de falha.

**4. Por que houve menos comunicação?** - Inicialmente, durante a greve, nenhuma comunicação real foi necessária. Quando a greve terminou, a comunicação subsequente foi recebida com dificuldade.

**5. Por que não havia conhecimento de know-how?** - O esquadrão fora formado sem genuínos veteranos em nenhuma das tecnologias que seriam usadas, o que significa
que a maior parte do aprendizado precisaria ser construída do zero. Isso também diz respeito a aproveitar ao máximo as Metodologias Ágeis ensinadas durante as palestras, dado que os membros tiveram a maior parte de sua experiência acadêmica com software até este ponto em projetos e avaliações individuais.

Podemos concluir que a causa raiz desta morte foi um longo período sem trabalho no projeto, levando a uma espécie de "ferrugem". A greve foi um dos principais contribuintes para esta condição, o que levou à interrupção do trabalho pelo referido longo período de tempo.

## Resolução e recuperação

Nenhuma resolução nem recuperação foi alcançada. O projeto permanece inacabado no momento da escrita do presente documento e permanecerá assim indefinidamente.
O projeto pode ser concluído após uma bifurcação, mas o repositório atual provavelmente permanecerá como está para documentar essa falha inicial.

## Medidas corretivas e preventivas
O restante do esquadrão 8 analisa as seguintes medidas preventivas para facilitar projetos futuros:
**1. Nenhuma sprint deve ser pulada.** Isso atrapalha o fluxo do projeto e recuperar o atraso é muito mais difícil
na prática do que na teoria.
**2. A comunicação deve ser, como o XP garante que é muito melhor, pessoalmente.** Trabalhar com outras pessoas é muito mais fácil em um ambiente físico
do que em um virtual. E, acima de tudo, **a comunicação adequada deve ser garantida;** garantida.
**3. Buscar ajuda assim que um obstáculo for encontrado** será exponencialmente mais rápido do que consertá-lo sozinho. A equipe deve trabalhar em conjunto para compartilhar
conhecimento. Isso pode evitar alienação e/ou isolamento dos engenheiros.
**4. Utilizar as Issues para corretamente mapear as necessidades do projeto** evita o estranho fenômeno onde o engenheiro quer trabalhar mas não tem certeza de onde realizar o serviço. É uma poderosa ferramenta de comunicação e deve ser usada como tal. 

Como as medidas corretivas envolveriam terminar o trabalho iniciado, elas não serão citadas.
