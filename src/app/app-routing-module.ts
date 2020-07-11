import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { MetalicaDamaComponent } from './componentes/metalica-dama/metalica-dama.component';
import { MetalicaHombreComponent } from './componentes/metalica-hombre/metalica-hombre.component';
import { AcetatoDamaComponent } from './componentes/acetato-dama/acetato-dama.component';
import { AcetatoHombreComponent } from './componentes/acetato-hombre/acetato-hombre.component';
import { EconomicaDamaComponent } from './componentes/economica-dama/economica-dama.component';
import { PromoDamaComponent } from './componentes/promo-dama/promo-dama.component';
import { PromoHombreComponent } from './componentes/promo-hombre/promo-hombre.component';
import { NiñosComponent } from './componentes/niños/niños.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component'
const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/metalicaDama', component: MetalicaDamaComponent},
  {path: 'productos/metalicaHombre', component: MetalicaHombreComponent},
  {path: 'productos/acetatoDama', component: AcetatoDamaComponent},
  {path: 'productos/acetatoHombre', component: AcetatoHombreComponent},
  {path: 'productos/promocionDama', component: PromoDamaComponent},
  {path: 'productos/promocionHombre', component: PromoHombreComponent},
  {path: 'productos/economicaDama', component: EconomicaDamaComponent},
  {path: 'productos/ninos', component: NiñosComponent},
  {path: 'servicios', component: ServiciosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class L3RoutingModule { }
