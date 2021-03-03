import { AppService } from './app.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
describe('UserManagementService', () => {
    let service: AppService;
    let httpTestingController: HttpTestingController;
  
    const params = {
      name: 'teste',
      login: '54020661081',
      domains: ['BACK_OFFICE'],
      status: 'ACTIVE',
      cpf: '54020661081',
      email: 'teste@teste.com.br',
      company: '',
      job: '',
      password: '12345678',
      loading: false
    };
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [AppService]
      });
      //service = TestBed.inject(AppService);
      //httpTestingController = TestBed.inject(HttpTestingController);
    });
  
    afterEach(() => {
      httpTestingController.verify();
    });
  
    describe('GET()', () => {
      it('should called the right url', () => {
        service.listar().subscribe(() => { });
  
        const req = httpTestingController.expectOne('http://teste.com/veiculo');
  
        expect(req.request.method).toEqual('GET');
  
        req.flush({});
      });
    });
  
  
    describe('POST()', () => {
      it('should called the right url', () => {
        service.createVeiculo(params).subscribe(() => { });
  
        const req = httpTestingController.expectOne('http://teste.com/backoffice/users');
  
        expect(req.request.method).toEqual('POST');
  
        req.flush({});
      });
    });
  });