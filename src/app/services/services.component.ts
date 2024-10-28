import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Adicione esta importação

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  standalone: true, // Torna o componente independente de NgModule
  imports: [CommonModule], // Importa o CommonModule diretamente
})
export class ServicesComponent {
  servicos = [
    { 
      titulo: 'Análise de Editais', 
      descricao: 'Identificação de oportunidades e riscos em processos licitatórios.' 
    },
    { 
      titulo: 'Processo de Pregão', 
      descricao: 'Gestão completa de todas as etapas do pregão.' 
    },
    { 
      titulo: 'Pregão Presencial', 
      descricao: 'Condução e acompanhamento presencial em processos de pregão.' 
    },
    { 
      titulo: 'Análise de Documentação', 
      descricao: 'Verificação de conformidade e regularidade documental.' 
    }
  ];
}
