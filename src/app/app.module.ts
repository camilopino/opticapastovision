import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { VermasComponent } from './componentes/vermas/vermas.component';
import { L3RoutingModule } from './app-routing-module';
import { FooterComponent } from './componentes/footer/footer.component';
import { PromoDamaComponent } from './componentes/promo-dama/promo-dama.component';
import { PromoHombreComponent } from './componentes/promo-hombre/promo-hombre.component';
import { AcetatoDamaComponent } from './componentes/acetato-dama/acetato-dama.component';
import { AcetatoHombreComponent } from './componentes/acetato-hombre/acetato-hombre.component';
import { MetalicaHombreComponent } from './componentes/metalica-hombre/metalica-hombre.component';
import { MetalicaDamaComponent } from './componentes/metalica-dama/metalica-dama.component';
import { EconomicaDamaComponent } from './componentes/economica-dama/economica-dama.component';
import { NiñosComponent } from './componentes/niños/niños.component';
import { ModalComponent } from './componentes/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    PrincipalComponent,
    ProductosComponent,
    ServiciosComponent,
    VermasComponent,
    FooterComponent,
    PromoDamaComponent,
    PromoHombreComponent,
    AcetatoDamaComponent,
    AcetatoHombreComponent,
    MetalicaHombreComponent,
    MetalicaDamaComponent,
    EconomicaDamaComponent,
    NiñosComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    L3RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
