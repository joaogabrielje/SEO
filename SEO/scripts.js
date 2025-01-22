// Função para mostrar/ocultar a tabela de pessoas
function togglePessoasTable() {
    const pessoasTable = document.getElementById('pessoasTable');
    pessoasTable.style.display = pessoasTable.style.display === 'block' ? 'none' : 'block'; // Alterna entre mostrar e ocultar
  }
  
  // Função para mostrar/ocultar a tabela de turmas
  function toggleTurmaTable() {
    const turmaTable = document.getElementById('turmaTable');
    turmaTable.style.display = turmaTable.style.display === 'block' ? 'none' : 'block'; // Alterna entre mostrar e ocultar
  }

  
  
  // Configurar eventos após o carregamento do DOM

  document.addEventListener('DOMContentLoaded', function () {

    // Função para mostrar/ocultar a tabela de pessoas ao clicar no botão

    document.getElementById('pessoasBtn').addEventListener('click', function () {
      const pessoasTable = document.getElementById('pessoasTable');
      const turmaTable = document.getElementById('turmaTable');
  
      // Alterna entre mostrar e ocultar a tabela de pessoas
      turmaTable.style.display = 'none';
      pessoasTable.style.display = pessoasTable.style.display === 'block' ? 'none' : 'block'; 
    });
  
    // Função para mostrar/ocultar a tabela de turmas ao clicar no botão
    document.getElementById('turmabtn').addEventListener('click', function () {
      const turmaTable = document.getElementById('turmaTable');
      const pessoasTable = document.getElementById('pessoasTable');
  
      //Esconde a tabela de pessoas
      pessoasTable.style.display = 'none';
      turmaTable.style.display = turmaTable.style.display === 'block' ? 'none' : 'block';
    });
  
    // Função para mostrar/ocultar o formulário de adicionar pessoa
    document.getElementById('addPersonBtn').addEventListener('click', function () {
      const form = document.getElementById('addPersonForm');
      form.style.display = form.style.display === 'flex' ? 'none' : 'flex';
    });

    // Função para voltar da tabela de nova pessoa
    document.getElementById('backPersonbtn').addEventListener('click', function () {
        const form = document.getElementById('addPersonForm');
        form.style.display = form.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Função para alternar a visibilidade das seções e mudar o botão ativo
function toggleTab(activeTab) {
    const tabs = document.querySelectorAll('.tab-button');
    const contentSections = document.querySelectorAll('.content-section');
  
    // Remove a classe 'bg-[#e8b663]'
    tabs.forEach(tab => tab.classList.remove('bg-[#e8b663]','text-gray-900'));
    contentSections.forEach(section => section.classList.add('hidden'));
  
    // Adiciona a classe 'bg-[#e8b663]' ao botão ativo e mostra o conteúdo correspondente
    activeTab.classList.add('bg-[#e8b663]','text-gray-900');
    const activeContent = document.getElementById(activeTab.getAttribute('id').replace('Btn', 'Content'));
    activeContent.classList.remove('hidden');
  }
  
  // Configura os event listeners para cada botão
  document.getElementById('alunoBtn').addEventListener('click', function() {
    toggleTab(this);
  });
  document.getElementById('responsaveisBtn').addEventListener('click', function() {
    toggleTab(this);
  });
  document.getElementById('documentosBtn').addEventListener('click', function() {
    toggleTab(this);
  });
  
  // Ativa o primeiro tab por padrão
  document.getElementById('alunoBtn').click();
  
    
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Obter referências aos botões e seções
    const alunoBtn = document.getElementById("alunoBtn");
    const responsaveisBtn = document.getElementById("responsaveisBtn");
    const documentosBtn = document.getElementById("documentosBtn");
    const dadosAluno = document.getElementById("dadosaluno");
    const dadosResponsaveis = document.getElementById("dadosresponsaveis");
    const dadosDocumentos = document.getElementById("dadosdocumentos");
  
    // Função para alternar entre as abas
    function mostrarSecao(selecao) {
      // Esconder todas as seções
      dadosAluno.classList.add("hidden");
      dadosResponsaveis.classList.add("hidden");
      dadosDocumentos.classList.add("hidden");
  
      // Mostrar a seção selecionada
      if (selecao === "aluno") {
        dadosAluno.classList.remove("hidden");
      } else if (selecao === "responsaveis") {
        dadosResponsaveis.classList.remove("hidden");
      } else if (selecao === "documentos") {
        dadosDocumentos.classList.remove("hidden");
      }
    }
  
    // Adicionar eventos aos botões
    alunoBtn.addEventListener("click", () => mostrarSecao("aluno"));
    responsaveisBtn.addEventListener("click", () => mostrarSecao("responsaveis"));
    documentosBtn.addEventListener("click", () => mostrarSecao("documentos"));
  });

// Seleciona os botões e o menu móvel
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuBtn = document.getElementById("closeMenuBtn");

// Abrir o menu móvel
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full");
});

// Fechar o menu móvel
closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
});

  
  
  