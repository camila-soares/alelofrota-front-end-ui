import { AppService } from './app.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
describe('AppService', () => {
    let service: AppService;
    let httpTestingController: HttpTestingController;
  
    const params = {
        plate: 'PDH-4412',
        model: 'PCX',
        manufacturer:  'HONDA',
        color: 'CINZA',
        status: 'ACTIVE',
    };
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [AppService]
      });
      service = TestBed.get(AppService);
      httpTestingController = TestBed.get(HttpTestingController);
    });
  
  
    describe('GET()', () => {
      it('should called the right url', () => {
        service.listar().subscribe(() => { });
  
        const req = httpTestingController.expectOne('http://localhost:8080/veiculo');
  
        expect(req.request.method).toEqual('GET');
  
        req.flush({});
      });
    });
  
  
    describe('POST()', () => {
      it('should called the right url', () => {
        service.createVeiculo(params).subscribe(() => { });
  
        const req = httpTestingController.expectOne('http://localhost:8080/veiculo');
  
        expect(req.request.method).toEqual('POST');
  
        req.flush({});
      });
    });
  });