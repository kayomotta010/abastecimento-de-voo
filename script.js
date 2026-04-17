class VooSeguro {
            #codigo;
            #combustivel;

            constructor(codigoPassado) {
                this.#codigo = codigoPassado;
                this.#combustivel = 100;
            }

            get lerCombustivel() {
                return `O tanque do voo ${this.#codigo} está em ${this.#combustivel}%`;
            }

            set abastecer(quantidade) {
                if (quantidade < 0) {
                    alert("Erro: Não é possível tirar combustível por aqui!");
                } else if (this.#combustivel + quantidade > 100) {
                    alert("Erro: O tanque vai transbordar! Limite é 100%.");
                } else {
                    this.#combustivel += quantidade;
                }
            }

            set gastar(quantidade) {
                if (quantidade < 0) {
                    alert("Erro: Digite um valor positivo para gastar.");
                } else if (this.#combustivel - quantidade < 0) {
                    alert("Erro: Combustível insuficiente! O voo não pode acontecer.");
                } else {
                    this.#combustivel -= quantidade;
                }
            }
        }

        // 2. Criamos o nosso voo
        const meuVoo = new VooSeguro("VIP-001");

        // 3. Pegamos os elementos do HTML
        const textoPainel = document.getElementById("painelCombustivel");
        const botaoGastar = document.getElementById("btnGastar");
        const botaoAbastecer = document.getElementById("btnAbastecerSeguro");

        // 4. Função para atualizar o texto na tela usando o GETTER
        function atualizarTela() {
            // Repare que NÃO usamos parênteses aqui, pois é um GET
            textoPainel.innerText = meuVoo.lerCombustivel; 
        }

        // 5. Ação de clicar no botão GASTAR
        botaoGastar.addEventListener("click", function() {
            meuVoo.gastar = 10; // Repare que usamos o SINAL DE IGUAL (=), pois é um SET
            atualizarTela();
        });

        // 6. Ação de clicar no botão ABASTECER
        botaoAbastecer.addEventListener("click", function() {
            meuVoo.abastecer = 10; // Repare que usamos o SINAL DE IGUAL (=), pois é um SET
            atualizarTela();
        });

