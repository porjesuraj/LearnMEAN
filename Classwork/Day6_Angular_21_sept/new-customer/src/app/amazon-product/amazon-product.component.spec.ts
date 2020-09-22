import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonProductComponent } from './amazon-product.component';

describe('AmazonProductComponent', () => {
  let component: AmazonProductComponent;
  let fixture: ComponentFixture<AmazonProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
