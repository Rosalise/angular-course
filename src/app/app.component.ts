import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { products as data } from './data/products';
import { ProductsService } from './services/products.service';
import { Observable, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-course';
  products: IProduct[] = data;
  loading = false;
  products$: Observable<IProduct[]>;
  term = '';

  constructor(public productsService: ProductsService,
    public modalService: ModalService) {}

  ngOnInit(): void {
    // this.loading = true;
    // this.products$ = this.productsService
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)));

    this.loading = true
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
