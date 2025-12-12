import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProcedimentosComponent } from './procedimentos/procedimentos';
import { PrecificacoesComponent } from './precificacoes/precificacoes';
import { MateriaisComponent } from './materiais/materiais';
import { ConfiguracaoComponent } from './configuracao/configuracao';
import { SimulacaoComponent } from './simulacao/simulacao';
import { HeaderComponent } from './header/header';

export const routes: Routes = [
    {
        path:"", redirectTo:"home", pathMatch:"full"
    },
    {
        path:"header",
        component:HeaderComponent
    },{
        path:"simulacao",
        component: SimulacaoComponent
    },{
        path:"procedimentos",
        component: ProcedimentosComponent
    },{
        path:"precificacoes",
        component: PrecificacoesComponent
    },{
        path:"materiais",
        component: MateriaisComponent 
    },{
        path:"configuracoes",
        component: ConfiguracaoComponent
    }
];
